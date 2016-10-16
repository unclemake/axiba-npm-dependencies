"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator.throw(value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments)).next());
    });
};
const npm = require('npm');
const ph = require('path');
const axiba_dependencies_1 = require('axiba-dependencies');
/**
 * 获取npm依赖
 */
class Npmdependencies {
    constructor() {
        this.isload = false;
        this.npmConfig = require(process.cwd() + '/package.json');
        /**
        * 记录nodejs模块依赖列表
        * @param  模块名称
        */
        this.dependenciesObjArrary = [];
    }
    /**
     * 加载npm配置
     */
    npmLoadCoifig() {
        return new Promise((resolve) => {
            if (!this.isload) {
                npm.load(this.npmConfig, (err, result) => {
                    this.isload = true;
                    resolve();
                });
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
                npm.commands[fun](args, show, (err, result) => {
                    resolve(result);
                });
            });
        });
    }
    /**
    * 获取所有文件列表
    * @param  {string} name 名称
    * @param  {string} version? 版本
    * @returns Promise<DependenciesObj>
    */
    get(name, version, first = true) {
        return __awaiter(this, void 0, Promise, function* () {
            let dependenciesObj = yield this.getDependenciesObj(name, version);
            let pathString = dependenciesObj.fileArray;
            for (let key in dependenciesObj.dependencies) {
                let element = dependenciesObj.dependencies[key];
                pathString = pathString.concat(yield this.get(element.name, element.version, false));
            }
            if (first) {
                return [...new Set(pathString)];
            }
            else {
                return pathString;
            }
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
            yield this.npmLoadCoifig();
            let dependenciesObj = this.findDependenciesObj(name, version);
            if (!dependenciesObj) {
                dependenciesObj = {
                    path: '',
                    main: '',
                    fileArray: [],
                    name: '',
                    version: '',
                    dependencies: []
                };
                let view = yield this.cmd('ls', [version ? name + '@' + this.getVersionString(version) : name]);
                view = this.findNpmView(view, name, version);
                let depArrary = [];
                for (let key in view._dependencies) {
                    let version = view._dependencies[key];
                    depArrary.push({
                        name: key,
                        version: version.replace(/[^.\d]/g, '')
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
                yield axiba_dependencies_1.default.src(dependenciesObj.path + '/**/*.js');
                let depFileArray = axiba_dependencies_1.default.getDependentArr(ph.join(dependenciesObj.path, dependenciesObj.main))
                    .filter(value => !depArrary.find(val => value === val.name));
                dependenciesObj.fileArray = depFileArray;
            }
            return dependenciesObj;
        });
    }
    getVersionString(value, key = '^') {
        let intArray = value.split('.').map(value => parseInt(value));
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
            return this.dependenciesObjArrary.find(value => value.name === name);
        }
        else {
            return this.dependenciesObjArrary.find(value => value.name === name && value.version === version);
        }
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = new Npmdependencies();

//# sourceMappingURL=index.js.map
