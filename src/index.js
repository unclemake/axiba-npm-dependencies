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
const axiba_util_1 = require('axiba-util');
/**
 * 获取npm依赖
 */
class NpmDependent {
    constructor() {
        this.isload = false;
        this.npmConfig = require(process.cwd() + '/package.json');
        /**
        * 记录nodejs模块依赖列表
        * @param  模块名称
        */
        this.dependencies = {};
    }
    /**
     * 加载npm配置
     */
    npmLoad() {
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
            this.npmLoad().then(() => {
                npm.commands[fun](args, show, (err, result) => {
                    resolve(result);
                });
            });
        });
    }
    /**
    * 获取nodejs依赖列表
    * @param  模块名称
    */
    ls(name = null) {
        return __awaiter(this, void 0, Promise, function* () {
            try {
                yield axiba_util_1.default.exec(`npm ls ${name} -json -long`);
            }
            catch (e) {
                console.log(e);
            }
        });
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = new NpmDependent();

//# sourceMappingURL=index.js.map
