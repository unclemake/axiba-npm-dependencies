import * as npm from 'npm';
import * as ph from 'path';
import util from 'axiba-util';
import dep from 'axiba-dependencies';


declare var require: any;

/**
* nodejs依赖结构
*/
type DependenciesObj = {
    path: string,
    main: string,
    fileArray: string[],
    name: string,
    version: string,
    dependencies: {
        name: string,
        version: string,
    }[]
}


interface NpmList {
    path: string,
    main: string,
    name: string,
    version: string,
    dependencies: {
        [key: string]: NpmList
    },
    _dependencies: {
        [key: string]: string
    }
}


/**
 * 获取npm依赖
 */
class Npmdependencies {


    isload = false
    npmConfig = require(process.cwd() + '/package.json')
    /**
     * 加载npm配置
     */
    private npmLoadCoifig(): Promise<void> {
        return new Promise<any>((resolve) => {
            if (!this.isload) {
                npm.load(this.npmConfig, (err?: Error, result?: any) => {
                    this.isload = true;
                    resolve();
                })
            } else {
                resolve();
            }
        })
    }


    /**
         * promise包裹回调
         * @param fun
         * @param args 命令参数
         */
    private cmd(fun, args: string[], show = true): Promise<any> {
        return new Promise<any>((resolve) => {
            this.npmLoadCoifig().then(() => {
                npm.commands[fun](args, show, (err?: Error, result?: any) => {
                    resolve(result);
                })
            })
        })
    }

    /**
    * 记录nodejs模块依赖列表
    * @param  模块名称
    */
    dependenciesObjArrary: DependenciesObj[] = []


    /**
    * 获取所有文件列表
    * @param  {string} name 名称
    * @param  {string} version? 版本
    * @returns Promise<DependenciesObj>
    */
    async get(name: string, version?: string, first = true): Promise<string[]> {
        let dependenciesObj = await this.getDependenciesObj(name, version);
        let pathString: string[] = dependenciesObj.fileArray;

        for (let key in dependenciesObj.dependencies) {
            let element = dependenciesObj.dependencies[key];
            pathString = pathString.concat(await this.get(element.name, element.version, false));
        }

        if (first) {
            return [...new Set(pathString)];
        } else {
            return pathString;
        }
    }



    /**
     * 获取DependenciesObj
     * @param  {string} name 名称
     * @param  {string} version? 版本
     * @returns Promise<DependenciesObj>
     */
    async getDependenciesObj(name: string, version?: string): Promise<DependenciesObj> {
        await this.npmLoadCoifig();

        let dependenciesObj = this.findDependenciesObj(name, version);

        if (!dependenciesObj) {
            dependenciesObj = {
                path: '',
                main: '',
                fileArray: [],
                name: '',
                version: '',
                dependencies: []
            }

            let view: NpmList = await this.cmd('ls', [version ? name + '@' + this.getVersionString(version) : name]);
            view = this.findNpmView(view, name, version);

            let depArrary: {
                name: string,
                version: string,
            }[] = [];
            for (let key in view._dependencies) {
                let version = view._dependencies[key];
                depArrary.push({
                    name: key,
                    version: version.replace(/[^.\d]/g, '')
                });
            }


            dependenciesObj = {
                path: dep.clearPath(view.path),
                main: view.main || 'index.js',
                fileArray: [],
                name: view.name,
                version: view.version,
                dependencies: depArrary
            };

            await dep.src(dependenciesObj.path + '/**/*.js');
            let depFileArray = dep.getDependentArr(ph.join(dependenciesObj.path, dependenciesObj.main))
                .filter(value => !depArrary.find(val => value === val.name));

            dependenciesObj.fileArray = depFileArray;

        }
        return dependenciesObj;
    }


    getVersionString(value: string, key = '^'): string {
        let intArray: number[] = value.split('.').map(value => parseInt(value));

        if (key === '^') {
            return `">=${value} <${intArray[0] + 1}.${intArray[1]}.${intArray[2]}"`;
        }
    }


    /**
     * npmlist 树中找模块
     * @param  {NpmList} npmList
     * @param  {string} name
     * @param  {string} version
     * @returns NpmList
     */
    private findNpmView(npmList: NpmList, name: string, version: string): NpmList {
        let npmListGet: NpmList;

        for (let key in npmList.dependencies) {
            let element = npmList.dependencies[key];

            // if (element.name === name && (!version || element.version === version)) {
            if (element.name === name) {
                return element;
            }

            npmListGet = this.findNpmView(element, name, version);
            if (npmListGet) {
                return npmListGet;
            }
        }

        return npmListGet;
    }


    /**
     * 查找已经存在的 dependenciesObj
     * @param  {string} name
     * @param  {string} version?
     */
    private findDependenciesObj(name: string, version?: string) {
        if (version) {
            return this.dependenciesObjArrary.find(value => value.name === name);
        } else {
            return this.dependenciesObjArrary.find(value => value.name === name && value.version === version);
        }
    }

}


export default new Npmdependencies();