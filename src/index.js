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
const aGulp = require('axiba-gulp');
const axiba_dependencies_1 = require('axiba-dependencies');
const gulp = require('gulp');
const Vinyl = require('vinyl');
/**
 * 获取npm依赖
 */
class NpmDependencies {
    constructor() {
        this.nodeModulePath = 'node_modules';
        this.npmConfig = require(process.cwd() + '/package.json');
        /**
        * 记录nodejs模块依赖列表
        * @param  模块名称
        */
        this.dependenciesObjArrary = [];
        /** 已经打包好的文件路径 */
        this.nodeFileArray = [{
                name: 'antd',
                file: 'dist/antd.min.js'
            }, {
                name: 'react',
                file: 'dist/react.min.js'
            }, {
                name: 'react-router',
                file: 'umd/ReactRouter.min.js'
            }, {
                name: 'react-dom',
                file: 'dist/react-dom.min.js'
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
            }];
        this.canAddFile = false;
        this.modulesDepArr = [];
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
      * 修改文件名流插件
      * @param  {string} extname
      * @param {stream.Transform} name loader
      */
    changeExtnameLoader(path) {
        return aGulp.makeLoader((file, enc, callback) => {
            file.path = path;
            callback(null, file);
        });
    }
    haveMin(name) {
        let pathObj = this.nodeFileArray.find(value => value.name === name);
        return !!pathObj;
    }
    /**
     * 获取文件流
     * @param  {string} name
     */
    getFileStream(name) {
        return __awaiter(this, void 0, void 0, function* () {
            let pathObj = this.nodeFileArray.find(value => value.name === name);
            if (pathObj) {
                return gulp.src(ph.join(this.nodeModulePath, pathObj.name, pathObj.file), {
                    base: './'
                }).pipe(this.changeExtnameLoader(`${this.nodeModulePath}/${name}/index.js`));
            }
            else {
                let dObj = yield this.get(name);
                let list = this.getDepArray(dObj);
                return gulp.src(list, {
                    base: './'
                }).pipe(this.fileTransform(dObj))
                    .pipe(this.addMainFile(dObj));
            }
        });
    }
    /**
    * 获取文件流
    * @param  {string} name
    */
    getAllFileStream(name) {
        return __awaiter(this, void 0, void 0, function* () {
            let pathObj = this.nodeFileArray.find(value => value.name === name);
            if (pathObj) {
                return gulp.src(ph.join(this.nodeModulePath, pathObj.name, pathObj.file), {
                    base: './'
                }).pipe(this.changeExtnameLoader(`${this.nodeModulePath}/${name}/index.js`));
            }
            else {
                let dObj = yield this.get(name);
                let list = dObj.allFileArray;
                return gulp.src(list, {
                    base: './'
                }).pipe(this.fileTransform(dObj))
                    .pipe(this.addMainFile(dObj));
            }
        });
    }
    /**
     * 添加文件 转接 main文件
     * @param  {DependenciesObj} dObj
     */
    addMainFile(dObj) {
        let self = this;
        this.canAddFile = true;
        return aGulp.makeLoader(function (file, a, callback) {
            if (self.canAddFile) {
                self.canAddFile = false;
                if (dObj.main !== 'index.js') {
                    let mainPath = dObj.main;
                    if (mainPath.indexOf('./') !== 0) {
                        mainPath = './' + mainPath;
                    }
                    let file = new Vinyl({
                        cwd: process.cwd(),
                        path: ph.join(dObj.path, '/index.js'),
                        contents: new Buffer(`module.exports = require("${mainPath}");`)
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
    fileTransform(dObj) {
        let depPathArray = this.getDependentPathArray(dObj);
        return aGulp.makeLoader((file, a, callback) => {
            if (!file.contents) {
                return callback();
            }
            let config = axiba_dependencies_1.default.config.find(value => value.extname === '.js');
            let content = file.contents.toString();
            config.parserRegExpList.forEach(value => {
                let nu = parseInt(value.match.split('$')[1]);
                content = this.fileReplace(content, value.regExp, nu, dObj, file.path);
            });
            file.contents = new Buffer(content);
            callback(null, file);
        });
    }
    /**
     * 文件路径匹配替换
     * @param  {string} name
     */
    fileReplace(content, regExp, match, dObj, path) {
        //解决：获取模块的文件而不是获取模块的加载问题
        let loaderMoudle = [];
        content = content.replace(regExp, function () {
            //匹配的全部
            let str = arguments[0];
            //匹配的路径名
            let matchStr = arguments[match];
            //替换后的名字
            let url = matchStr;
            // 如果是别名开头
            if (/^[^\.\/]/g.test(matchStr)) {
                //获取别名
                let alias = '';
                let isAlias = !matchStr.match(/[\/\\]/g);
                if (isAlias) {
                    alias = matchStr;
                }
                else {
                    alias = matchStr.match(/^.+?(?=\/)/g)[0];
                    loaderMoudle.push(alias);
                }
                //获取模块obj
                let depObj = dObj.dependencies.find(value => value.name === alias);
                if (depObj) {
                    let path = '';
                    if (isAlias) {
                        path = ph.join(depObj.path, depObj.main);
                    }
                    else {
                        path = depObj.path;
                    }
                    url = matchStr.replace(alias, path);
                }
                else {
                    return str;
                }
            }
            else {
                if (url === '../icon') {
                    let a = '1';
                    let b = "2";
                }
                url = axiba_dependencies_1.default.clearPath(ph.join(ph.dirname(path), matchStr));
            }
            try {
                let extname = ph.extname(url);
                let stats = fs.statSync(url);
                if (fs.existsSync(url + '.js')) {
                    url = url + '.js';
                }
                else {
                    if (stats.isFile()) {
                        if (extname) {
                            let basename = ph.basename(url);
                            let dirname = ph.dirname(url);
                            let fsFile = fs.readdirSync(url);
                            url = dirname + '/' + fsFile.find(value => {
                                let extname = ph.extname(value);
                                return value == basename + extname;
                            });
                        }
                    }
                    else {
                        url = url + '/index.js';
                    }
                }
            }
            catch (error) {
                console.log(url);
                console.log(path, matchStr);
            }
            str = axiba_dependencies_1.default.clearPath(str.replace(matchStr, url));
            return str;
        });
        return content;
    }
    pathJudge(path) {
        let extname = ph.extname(path);
        let dirname = ph.dirname(path);
        let fsFile = fs.readdirSync(dirname);
    }
    /** 根据依赖对象 获取别名相对路径
     * @param  {} dObj
     * @param  {string}[]{} path
     * @returns string
     */
    getDependentPathArray(dObj) {
        let ary = [];
        dObj.dependencies.forEach(value => {
            ary.push({
                name: value.name,
                path: ph.join(value.path, value.name)
            });
        });
        return ary;
    }
    /**
     * 获取所有在模块内的依赖文件
     * @param  {DependenciesObj} dObj
     * @param  {} frist=true
     */
    getDepArray(dObj, frist = true) {
        let depList = [];
        if (frist || !dObj.isBase) {
            depList = dObj.fileArray;
        }
        for (let key in dObj.dependencies) {
            let element = dObj.dependencies[key];
            depList = depList.concat(this.getDepArray(element, false));
        }
        if (frist) {
            return [...new Set(depList)];
        }
        else {
            return depList;
        }
    }
    /**
     * 获取所有的根目录依赖模块
     * @param  {DependenciesObj} dObj
     * @returns Promise
     */
    getModulesDep(dObj, frist = true) {
        return __awaiter(this, void 0, Promise, function* () {
            if (frist) {
                this.modulesDepArr = [];
            }
            if (this.modulesDepArr.find(value => value === dObj.path)) {
                return [];
            }
            this.modulesDepArr.push(dObj.path);
            if (dObj.name === 'rc-menu') {
                let a = 1;
            }
            let pathObj = this.nodeFileArray.find(value => value.name === dObj.name);
            if (pathObj) {
                return [dObj.name];
            }
            else {
                let ary = [];
                if (dObj.isBase) {
                    ary.push(dObj.name);
                }
                for (let key in dObj.dependencies) {
                    let element = dObj.dependencies[key];
                    let dObjD = this.dependenciesObjArrary.find(value => value.path === element.path);
                    if (!dObjD) {
                        throw '';
                    }
                    ary = ary.concat(yield this.getModulesDep(dObjD, false));
                }
                return ary;
            }
        });
    }
    /**
         * 获取package
         * @param  {string} name
         */
    getPackage(name, base = this.nodeModulePath) {
        let path = `${base}/${name}`;
        if (!fs.existsSync(path)) {
            path = `${this.nodeModulePath}/${name}`;
        }
        let obj = JSON.parse(fs.readFileSync(path + '/package.json').toString());
        obj.path = path;
        obj.main = obj.main || 'index.js';
        obj.main = ph.extname(obj.main) ? obj.main : (obj.main + '.js');
        if (obj.path === `${this.nodeModulePath}/${name}`) {
            obj.isBase = true;
        }
        else {
            obj.isBase = false;
        }
        return obj;
    }
    /**
     * 获取依赖对象
     * @param  {string} name
     * @param  {string=this.nodeModulePath} base
     * @returns Promise
     */
    get(name, base = this.nodeModulePath) {
        return __awaiter(this, void 0, Promise, function* () {
            //查找缓存
            let dObj = this.dependenciesObjArrary.find(value => value.path === `${this.nodeModulePath}/${name}`);
            if (dObj) {
                return dObj;
            }
            axiba_util_1.default.write(`扫描node模块:${name}`);
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
                allFileArray: [],
                dependencies: []
            };
            //缓存
            this.dependenciesObjArrary.push(dObj);
            // 扫描自身文件依赖
            yield axiba_dependencies_1.default.src(dObj.path + "/**/*.js");
            let mainPath = axiba_dependencies_1.default.clearPath(ph.join(dObj.path, dObj.main));
            let dependenciesArr = yield axiba_dependencies_1.default.getDependenciesArr(mainPath);
            if (name === 'omit.js') {
                let a = 1;
            }
            //赋值fileArray
            dObj.fileArray = dependenciesArr;
            dObj.fileArray.push(mainPath);
            //赋值allFileArray
            dObj.allFileArray = axiba_dependencies_1.default.dependenciesArray
                .filter(value => value.path.indexOf(axiba_dependencies_1.default.clearPath(dObj.path)) !== -1)
                .map(value => value.path);
            //赋值dependencies
            for (let key in packageObj.dependencies) {
                let name = packageObj.dependencies[key];
                let obj = yield this.get(name, dObj.path + '/node_modules');
                obj = Object.assign({}, obj);
                obj.dependencies = [];
                dObj.dependencies.push(obj);
            }
            return dObj;
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
}
exports.NpmDependencies = NpmDependencies;
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = new NpmDependencies();

//# sourceMappingURL=index.js.map
