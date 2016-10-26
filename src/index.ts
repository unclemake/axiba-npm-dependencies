import * as npm from 'npm';
import * as ph from 'path';
import * as fs from 'fs';
import util from 'axiba-util';
import dep from 'axiba-dependencies';


declare var require: any;
let json;
try {
    json = require(process.cwd() + '/node-dependent.json');
} catch (error) {
    json = [];
}

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
export class NpmDependencies {


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
    dependenciesObjArrary: DependenciesObj[] = json
    /**
    * 生成依赖json文件
    * @param  {string='./dependent.json'} path
    * @returns Promise
    */
    createJsonFile(path: string = process.cwd() + '/node-dependent.json'): Promise<boolean> {
        return new Promise((resolve, reject) => {
            fs.writeFile(path, JSON.stringify(this.dependenciesObjArrary), 'utf8', () => {
                resolve();
            });
        })
    }


    /**
     * 依赖对象转依赖数组
     * @param  {{[key:string]:string}} dependencies
     * @returns string
     */
    dependenciesObjToArr(dependencies: {
        [key: string]: string
    }): {
        name: string,
        version: string,
    }[] {

        let arr = [];
        for (let name in dependencies) {
            let version = dependencies[name];
            arr.push({
                name, version
            })
        }
        return arr;
    }


    private getArray = [];
    /**
    * 获取此模块所有的依赖文件列表
    * @param  {string} name 名称
    * @param  {string} version? 版本
    * @returns Promise<DependenciesObj>
    */
    async get(name: string, version?: string, first = true): Promise<string[]> {
        first && (this.getArray = []);

        if (this.getArray.indexOf(name) != -1) {
            return [];
        }

        this.getArray.push(name);

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


    ls(str: string): Promise<any> {
        return new Promise((resolve, reject) => {
            this.npmLoadCoifig().then(() => {
                npm.commands.ls([str], (obj, obj2) => {
                    resolve(obj2);
                });
            })
        });
    }
    /**
     * 获取DependenciesObj
     * @param  {string} name 名称
     * @param  {string} version? 版本
     * @returns Promise<DependenciesObj>
     */
    async getDependenciesObj(name: string, version?: string): Promise<DependenciesObj> {
        let dependenciesObj = this.findDependenciesObj(name, version);

        if (!dependenciesObj) {
            await this.npmLoadCoifig();
            dependenciesObj = {
                path: '',
                main: '',
                fileArray: [],
                name: '',
                version: '',
                dependencies: []
            };

            util.log(name);
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
                    version: version
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

            dependenciesObj.fileArray = await this.getFileArray(dependenciesObj);
            this.dependenciesObjArrary.push(dependenciesObj);
        }
        this.createJsonFile();
        return dependenciesObj;
    }

    /**
     * 获取此dependenciesObj 里面所有的js文件
     * @param  {DependenciesObj} dependenciesObj
     */
    async getFileArray(dependenciesObj: DependenciesObj) {
        let depArrary = this.nodeFileArray.find(value => value.name === dependenciesObj.name);
        if (depArrary) {
            return [dep.clearPath(ph.join(dependenciesObj.path, depArrary.file))];
        } else {
            await dep.src(dependenciesObj.path + '/**/*.js');
            let depFileArray = dep.getDependenciesArr(ph.join(dependenciesObj.path, dependenciesObj.main))
                //清除名别
                .filter(value => !dependenciesObj.dependencies.find(val => value === val.name));
            depFileArray.push(dep.clearPath(ph.join(dependenciesObj.path, dependenciesObj.main)));
            return depFileArray;
        }
    }

    /** 已经打包好的文件路径 */
    nodeFileArray = [{
        name: 'react',
        file: 'dist/react.min.js'
    }, {
        name: 'react-router',
        file: 'umd/ReactRouter.min.js'
    }, {
        name: 'react-dom',
        file: 'dist/react-dom.min.js'
    }]


    // private isFilePath(name: string) {
    //     return ['path', 'url', 'http', 'https', 'util', 'zlib', 'stream'].indexOf(name) != -1;
    // }


    /**
     * 生成npm ls 查询的版本号
     * @param  {string} value
     * @returns string
     */
    getVersionString(value: string): string {
        let intArray: number[] = value.replace(/[^\.\d]/g, '').split('.').map(value => parseInt(value));
        let key = value[0];
        if (key === '^') {
            return `">=${intArray[0]}.${intArray[1]}.${intArray[2]} <${intArray[0] + 1}.${intArray[1]}.${intArray[2]}"`;
        } else {
            return value;
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
            return this.dependenciesObjArrary.find(value => value.name === name && this.versionContrast(version, value.version));
        } else {
            return this.dependenciesObjArrary.find(value => value.name === name);
        }
    }

    /**
     * 对比node版本号
     * @param  {string} keyVersion 带^的版本号
     * @param  {string} version
     * @returns boolean
     */
    versionContrast(keyVersion: string, version: string): boolean {
        let keyA: number[] = keyVersion.replace(/[^\.\d]/g, '').split('.').map(value => parseInt(value));
        let vA: number[] = version.split('.').map(value => parseInt(value));
        switch (keyVersion[0]) {
            case '^':
                return vA[0] == keyA[0] && (vA[1] > keyA[1] || (vA[1] == keyA[1] && vA[2] >= keyA[2]));
            default:
                return true;
        }
    }

}


export default new NpmDependencies();