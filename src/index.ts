import * as ph from 'path';
import * as fs from 'fs';
import util from 'axiba-util';
import * as aGulp from 'axiba-gulp';
import fd from 'axiba-dependencies';
import * as gulp from 'gulp';
import * as gulpUtil from 'gulp-util';
import Vinyl = require('vinyl');

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
    isBase: boolean,
    fileArray: string[],
    name: string,
    dependencies: DependenciesObj[]
}


/**
 * 获取npm依赖
 */
export class NpmDependencies {

    nodeModulePath = 'node_modules'

    npmConfig = require(process.cwd() + '/package.json')

    /**
    * 记录nodejs模块依赖列表
    * @param  模块名称
    */
    dependenciesObjArrary: DependenciesObj[] = []
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
     * 获取package
     * @param  {string} name
     */
    getPackage(name: string, base: string = this.nodeModulePath) {
        let path = `${base}/${name}`;
        if (!fs.existsSync(path)) {
            path = `${this.nodeModulePath}/${name}`;
        }

        let obj = JSON.parse(fs.readFileSync(path + '/package.json').toString());
        obj.path = path;
        if (obj.path === `${this.nodeModulePath}/${name}`) {
            obj.isBase = true;
        } else {
            obj.isBase = false;
        }

        return obj;
    }



    /**
      * 修改文件名流插件
      * @param  {string} extname
      * @param {stream.Transform} name loader
      */
    changeExtnameLoader(path: string) {
        return aGulp.makeLoader((file, enc, callback) => {
            file.path = path;
            callback(null, file);
        })
    }

    haveMin(name: string) {
        let pathObj = this.nodeFileArray.find(value => value.name === name);
        return !!pathObj;
    }
    /**
     * 获取文件流
     * @param  {string} name
     */
    async getFileStream(name: string) {
        let pathObj = this.nodeFileArray.find(value => value.name === name);
        if (pathObj) {
            return gulp.src(ph.join(this.nodeModulePath, pathObj.name, pathObj.file), {
                base: './'
            }).pipe(this.changeExtnameLoader(`${this.nodeModulePath}/${name}/index.js`));
        } else {
            let dObj = await this.get(name);
            let list = this.getDepArray(dObj);
            return gulp.src(list, {
                base: './'
            }).pipe(this.fileTransform(dObj))
                .pipe(this.addMainFile(dObj));
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
    }, {
        name: 'antd',
        file: 'dist/antd.min.js'
    }, {
        name: 'react-redux',
        file: 'dist/react-redux.min.js'
    }, {
        name: 'redux',
        file: 'dist/redux.min.js'
    }, {
        name: 'redux-actions',
        file: 'dist/redux-actions.min.js'
    }, {
        name: 'redux-thunk',
        file: 'dist/redux-thunk.min.js'
    }, {
        name: 'superagent',
        file: 'superagent.js'
    }]


    canAddFile = false;
    /**
     * 添加文件 转接 main文件
     * @param  {DependenciesObj} dObj
     */
    addMainFile(dObj: DependenciesObj) {
        let self = this;
        this.canAddFile = true;
        return aGulp.makeLoader(function (file, a, callback) {
            if (self.canAddFile) {
                self.canAddFile = false;
                if (dObj.main !== 'index.js') {
                    let file = new Vinyl({
                        cwd: process.cwd(),
                        path: ph.join(dObj.path, '/index.js'),
                        contents: new Buffer(`export = require("./${dObj.main}")`)
                    });
                    this.push(file);
                }
            }
            callback(null, file);
        });
    }

    /**
    * 文件路径替换流
    * @param  {string} name
    */
    fileTransform(dObj: DependenciesObj) {
        let depPathArray = this.getDependentPathArray(dObj);

        return aGulp.makeLoader((file, a, callback) => {
            let config = fd.config.find(value => value.extname === '.js');

            let content = file.contents.toString();

            config.parserRegExpList.forEach(value => {
                let nu = parseInt(value.match.split('$')[1]);
                content = this.fileReplace(content, value.regExp, nu, dObj);
            });

            file.contents = new Buffer(content);
            callback(null, file);
        })
    }


    /**
     * 文件路径匹配替换
     * @param  {string} name
     */
    fileReplace(content: string, regExp: RegExp, match: number, dObj: DependenciesObj) {

        //解决：获取模块的文件而不是获取模块的加载问题
        let loaderMoudle = [];
        content = content.replace(regExp, function () {
            let str: string = arguments[0];
            let matchStr = arguments[match];

            // 如果是别名开头
            if (/^[^\.\/]/g.test(matchStr)) {

                //获取别名
                let alias = '';
                let isAlias = fd.isAlias(matchStr);
                if (isAlias) {
                    alias = matchStr;
                } else {
                    alias = matchStr.match(/^.+?(?=\/)/g)[0];
                    loaderMoudle.push(alias);
                }

                //获取模块obj
                let depObj = dObj.dependencies.find(value => value.name === alias);
                if (depObj) {

                    let path = '';
                    if (isAlias) {
                        path = ph.join(depObj.path, depObj.main);
                    } else {
                        path = depObj.path;
                    }

                    let url = (arguments[match] as string).replace(alias, path);

                    str = str.replace(arguments[match], url)
                } else {
                    return str;
                }

            }

            return fd.clearPath(str);
        } as any);

        loaderMoudle.forEach(value => {
            content += `require("${value}");` + content;
        })

        return content;
    }

    /** 根据依赖对象 获取别名相对路径
     * @param  {} dObj
     * @param  {string}[]{} path
     * @returns string
     */
    getDependentPathArray(dObj: DependenciesObj): { name: string, path: string }[] {
        let ary = [];

        dObj.dependencies.forEach(value => {
            ary.push({
                name: value.name,
                path: ph.join(value.path, value.name)
            })
        })

        return ary;
    }


    /**
     * 获取所有在模块内的依赖文件
     * @param  {DependenciesObj} dObj
     * @param  {} frist=true
     */
    private getDepArray(dObj: DependenciesObj, frist = true) {
        let depList = [];

        if (frist || !dObj.isBase) {
            depList = dObj.fileArray;
        }

        for (let key in dObj.dependencies) {
            let element: DependenciesObj = dObj.dependencies[key];
            depList = depList.concat(this.getDepArray(element, false));
        }

        if (frist) {
            return [...new Set(depList)];
        } else {
            return depList;
        }
    }


    /**
     * 获取所有的根目录依赖模块
     * @param  {DependenciesObj} dObj
     * @returns Promise
     */
    async getBaseModules(dObj: DependenciesObj): Promise<string[]> {
        let pathObj = this.nodeFileArray.find(value => value.name === name);

        if (pathObj) {
            return [dObj.name];
        } else {
            let ary: string[] = [];
            if (dObj.isBase) {
                ary.push(dObj.name);
            }
            for (let key in dObj.dependencies) {
                let element = dObj.dependencies[key];
                ary = ary.concat(await this.getBaseModules(element));
            }

            return ary;
        }
    }


    /**
     * 获取依赖对象
     * @param  {string} name
     * @param  {string=this.nodeModulePath} base
     * @returns Promise
     */
    async get(name: string, base: string = this.nodeModulePath): Promise<DependenciesObj> {

        //查找缓存
        let dObj = this.dependenciesObjArrary.find(value => value.path === ph.join(base, name));
        if (dObj) {
            return dObj;
        }

        //获取npm配置
        let packageObj = this.getPackage(name, base);
        let dependenciesList = [];
        for (let key in packageObj.dependencies) {
            dependenciesList.push(key);
        }
        packageObj.dependencies = dependenciesList;

        //创建node依赖对象
        dObj = {
            name: name,
            path: packageObj.path,
            isBase: packageObj.isBase,
            main: packageObj.main || 'index.js',
            fileArray: [],
            dependencies: []
        };


        // 扫描自身文件依赖
        await fd.src(dObj.path + "/**/*.js");
        let mainPath = fd.clearPath(ph.join(dObj.path, dObj.main));
        let dependenciesArr = await fd.getDependenciesArr(mainPath);

        //赋值fileArray
        dObj.fileArray = dependenciesArr;
        dObj.fileArray.push(mainPath);

        //赋值dependencies
        for (let key in packageObj.dependencies) {
            let element = packageObj.dependencies[key];
            let obj = await this.get(element, dObj.path + '/node_modules')
            dObj.dependencies.push(obj);
        }

        //缓存
        this.dependenciesObjArrary.push(dObj);
        return dObj;
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
}


export default new NpmDependencies();