"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator.throw(value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments)).next());
    });
};
const ph = require('path');
const fs = require('fs');
const axiba_util_1 = require('axiba-util');
const axiba_dependencies_1 = require('axiba-dependencies');
let json;
try {
    json = require(process.cwd() + '/node-dependent.json');
}
catch (error) {
    json = [];
}
/**
 * 获取npm依赖
 */
class NpmDependencies {
    constructor() {
        this.isload = false;
        this.npmConfig = require(process.cwd() + '/package.json');
        /**
        * 记录nodejs模块依赖列表
        * @param  模块名称
        */
        this.dependenciesObjArrary = json;
        this.getArray = [];
        /** 已经打包好的文件路径 */
        this.nodeFileArray = [{
                name: 'react',
                file: 'node_modules/react/dist/react.min.js'
            }, {
                name: 'react-router',
                file: 'node_modules/react-router/umd/ReactRouter.min.js'
            }, {
                name: 'react-dom',
                file: 'node_modules/react-dom/dist/react-dom.min.js'
            }, {
                name: 'antd',
                file: 'node_modules/antd/dist/antd.min.js'
            }, {
                name: 'react-redux',
                file: 'node_modules/react-redux/dist/react-redux.min.js'
            }, {
                name: 'redux',
                file: 'node_modules/redux/dist/redux.min.js'
            }, {
                name: 'redux-actions',
                file: 'node_modules/redux-actions/dist/redux-actions.min.js'
            }, {
                name: 'redux-thunk',
                file: 'node_modules/redux-thunk/dist/redux-thunk.min.js'
            }, {
                name: 'superagent',
                file: 'node_modules/superagent/superagent.js'
            }];
    }
    /**
     * 加载npm配置
     */
    npmLoadCoifig() {
        return new Promise((resolve) => {
            if (!this.isload) {
            }
            else {
                resolve();
            }
        });
    }
    /**
     * promise包裹回调
     * @param fun
     * @param args 命令参数
     */
    cmd(fun, args, show = true) {
        return new Promise((resolve) => {
            this.npmLoadCoifig().then(() => {
                // npm.commands[fun](args, show, (err?: Error, result?: any) => {
                //     resolve(result);
                // })
            });
        });
    }
    /**
    * 生成依赖json文件
    * @param  {string='./dependent.json'} path
    * @returns Promise
    */
    createJsonFile(path = process.cwd() + '/node-dependent.json') {
        return new Promise((resolve, reject) => {
            fs.writeFile(path, JSON.stringify(this.dependenciesObjArrary), 'utf8', () => {
                resolve();
            });
        });
    }
    /**
     * 依赖对象转依赖数组
     * @param  {{[key:string]:string}} dependencies
     * @returns string
     */
    dependenciesObjToArr(dependencies) {
        let arr = [];
        for (let name in dependencies) {
            let version = dependencies[name];
            arr.push({
                name: name, version: version
            });
        }
        return arr;
    }
    /**
    * 获取此模块所有的依赖文件列表
    * @param  {string} name 名称
    * @param  {string} version? 版本
    * @returns Promise<DependenciesObj>
    */
    get(name, version, first = true) {
        return __awaiter(this, void 0, Promise, function* () {
            first && (this.getArray = []);
            let depArray = this.nodeFileArray.find(value => value.name === name);
            return [depArray.file];
            // if (this.getArray.indexOf(name) != -1) {
            //     return [];
            // }
            // this.getArray.push(name);
            // let dependenciesObj = await this.getDependenciesObj(name, version);
            // let pathString: string[] = dependenciesObj.fileArray;
            // for (let key in dependenciesObj.dependencies) {
            //     let element = dependenciesObj.dependencies[key];
            //     pathString = pathString.concat(await this.get(element.name, element.version, false));
            // }
            // if (first) {
            //     return [...new Set(pathString)];
            // } else {
            //     return pathString;
            // }
        });
    }
    ls(str) {
        return new Promise((resolve, reject) => {
            this.npmLoadCoifig().then(() => {
                // npm.commands.ls([str], (obj, obj2) => {
                //     resolve(obj2);
                // });
            });
        });
    }
    /**
     * 获取DependenciesObj
     * @param  {string} name 名称
     * @param  {string} version? 版本
     * @returns Promise<DependenciesObj>
     */
    getDependenciesObj(name, version) {
        return __awaiter(this, void 0, Promise, function* () {
            let dependenciesObj = this.findDependenciesObj(name, version);
            if (!dependenciesObj) {
                yield this.npmLoadCoifig();
                dependenciesObj = {
                    path: '',
                    main: '',
                    fileArray: [],
                    name: '',
                    version: '',
                    dependencies: []
                };
                axiba_util_1.default.log(name);
                let view = yield this.cmd('ls', [version ? name + '@' + this.getVersionString(version) : name]);
                view = this.findNpmView(view, name, version);
                let depArrary = [];
                for (let key in view._dependencies) {
                    let version = view._dependencies[key];
                    depArrary.push({
                        name: key,
                        version: version
                    });
                }
                dependenciesObj = {
                    path: axiba_dependencies_1.default.clearPath(view.path),
                    main: view.main || 'index.js',
                    fileArray: [],
                    name: view.name,
                    version: view.version,
                    dependencies: depArrary
                };
                dependenciesObj.fileArray = yield this.getFileArray(dependenciesObj);
                this.dependenciesObjArrary.push(dependenciesObj);
            }
            this.createJsonFile();
            return dependenciesObj;
        });
    }
    /**
     * 获取此dependenciesObj 里面所有的js文件
     * @param  {DependenciesObj} dependenciesObj
     */
    getFileArray(dependenciesObj) {
        return __awaiter(this, void 0, void 0, function* () {
            let depArrary = this.nodeFileArray.find(value => value.name === dependenciesObj.name);
            if (depArrary) {
                return [axiba_dependencies_1.default.clearPath(ph.join(dependenciesObj.path, depArrary.file))];
            }
            else {
                yield axiba_dependencies_1.default.src(dependenciesObj.path + '/**/*.js');
                let depFileArray = axiba_dependencies_1.default.getDependenciesArr(ph.join(dependenciesObj.path, dependenciesObj.main))
                    .filter(value => !dependenciesObj.dependencies.find(val => value === val.name));
                depFileArray.push(axiba_dependencies_1.default.clearPath(ph.join(dependenciesObj.path, dependenciesObj.main)));
                return depFileArray;
            }
        });
    }
    // private isFilePath(name: string) {
    //     return ['path', 'url', 'http', 'https', 'util', 'zlib', 'stream'].indexOf(name) != -1;
    // }
    /**
     * 生成npm ls 查询的版本号
     * @param  {string} value
     * @returns string
     */
    getVersionString(value) {
        let intArray = value.replace(/[^\.\d]/g, '').split('.').map(value => parseInt(value));
        let key = value[0];
        if (key === '^') {
            return `">=${intArray[0]}.${intArray[1]}.${intArray[2]} <${intArray[0] + 1}.${intArray[1]}.${intArray[2]}"`;
        }
        else {
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
    findNpmView(npmList, name, version) {
        let npmListGet;
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
    findDependenciesObj(name, version) {
        if (version) {
            return this.dependenciesObjArrary.find(value => value.name === name && this.versionContrast(version, value.version));
        }
        else {
            return this.dependenciesObjArrary.find(value => value.name === name);
        }
    }
    /**
     * 对比node版本号
     * @param  {string} keyVersion 带^的版本号
     * @param  {string} version
     * @returns boolean
     */
    versionContrast(keyVersion, version) {
        let keyA = keyVersion.replace(/[^\.\d]/g, '').split('.').map(value => parseInt(value));
        let vA = version.split('.').map(value => parseInt(value));
        switch (keyVersion[0]) {
            case '^':
                return vA[0] == keyA[0] && (vA[1] > keyA[1] || (vA[1] == keyA[1] && vA[2] >= keyA[2]));
            default:
                return true;
        }
    }
}
exports.NpmDependencies = NpmDependencies;
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = new NpmDependencies();

//# sourceMappingURL=index.js.map
