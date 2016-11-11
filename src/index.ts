﻿import * as gulp from 'gulp';
import * as fs from 'fs';
import * as ph from 'path';
import * as webpack from 'webpack';
import * as axibaGulp from 'axiba-gulp';
const gulpWebpack = require('gulp-webpack');

/**
 * node pack 文件获取
 * 
 * @class nodeFile
 */
class nodePackFile {

    /**
     * node file 打包文件路劲数组
     * 
     * @type {{ name: string, file: string, minFile?: string }[]}
     * @memberOf nodeFile
     */
    nodeFileArray: Array<{ name: string, file: string, minFile?: string }> = [{
        name: 'antd',
        file: 'dist/antd.js',
        minFile: 'dist/antd.min.js'
    }, {
        name: 'seajs',
        file: 'dist/sea-debug.js',
        minFile: 'dist/sea.js'
    }, {
        name: 'seajs-css',
        file: 'dist/seajs-css-debug.js',
        minFile: 'dist/seajs-css.js'
    }, {
        name: 'react',
        file: 'dist/react.js',
        minFile: 'dist/react.min.js'
    }, {
        name: 'react-router',
        file: 'umd/ReactRouter.js',
        minFile: 'umd/ReactRouter.min.js'
    }, {
        name: 'react-dom',
        file: 'dist/react-dom.js',
        minFile: 'dist/react-dom.min.js'
    }, {
        name: 'react-redux',
        file: 'dist/react-redux.js',
        minFile: 'dist/react-redux.min.js'
    }, {
        name: 'redux',
        file: 'dist/redux.js',
        minFile: 'dist/redux.min.js'
    }, {
        name: 'redux-actions',
        file: 'dist/redux-actions.js',
        minFile: 'dist/redux-actions.min.js'
    }, {
        name: 'redux-thunk',
        file: 'dist/redux-thunk.js',
        minFile: 'dist/redux-thunk.min.js',
    }, {
        name: 'superagent',
        file: 'superagent.js'
    }, {
        name: 'socket.io-client',
        file: 'socket.io.js'
    }, {
        name: 'babel-polyfill',
        file: 'dist/polyfill.js',
        minFile: 'dist/polyfill.min.js',
    }];

    /**
     * node模块路径
     * 
     * 
     * @memberOf nodeFile
     */
    nodeModulePath = 'node_modules';

    /**
     * 获取文件
     * 
     * @param {string} name
     * @returns
     * 
     * @memberOf nodeFile
     */
    getFileString(name: string) {
        let pathObj = this.nodeFileArray.find(value => value.name === name);
        if (pathObj) {
            try {
                return fs.readFileSync(ph.join(this.nodeModulePath, pathObj.name, pathObj.file)).toString();
            } catch (error) {
                return null;
            }

        } else {
            return null;
        }
    }

    private moduleName = '__pack__';

    /**
     * 根据nameArray 获取字符串
     * 
     * @param {string[]} nameArray
     * @param {string[]} externals
     * @returns {Promise<string>}
     * 
     * @memberOf nodeFile
     */
    async getPackFileString(nameArray: string[], externals: string[] = []): Promise<string> {

        let packStr = await this.webpack(nameArray, externals);
        //md5模块名
        let mName = this.moduleName + this.uuid();

        packStr = `\ndefine("${mName}", function (require, exports, module) {module.exports =${packStr}})\n`;

        nameArray.forEach((value, index) => {
            packStr += `\ndefine("${value}", function (require, exports, module) {\nmodule.exports = require('${mName}')['___${index}'];\n})\n`;
        });
        return packStr;
    }

    /**
     * 唯一值
     * 
     * @private
     * @returns
     * 
     * @memberOf nodeFile
     */
    private uuid(): string {
        var s = [];
        var hexDigits = "0123456789abcdef";
        for (var i = 0; i < 36; i++) {
            s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
        }
        s[14] = "4";  // bits 12-15 of the time_hi_and_version field to 0010
        s[19] = hexDigits.substr((s[19] & 0x3) | 0x8, 1);  // bits 6-7 of the clock_seq_hi_and_reserved to 01
        s[8] = s[13] = s[18] = s[23] = "-";

        var uuid = s.join("");
        return uuid;
    }

    /**
     * webpack 打包文件string
     * 
     * @param {string[]} nameArray
     * @returns {Promise<string>}
     * 
     * @memberOf nodeFile
     */
    webpack(nameArray: string[], externals: string[] = []): Promise<string> {
        let entryPath = ph.join(process.cwd(), './___1entry.js');
        let outputPath = ph.join(process.cwd(), './___1output.js');
        let entryStr = '';

        nameArray.forEach((value, index) => {
            entryStr += `exports.___${index} = require('${value}');`;
        });

        fs.writeFileSync(entryPath, entryStr);

        return new Promise((resolve, reject) => {
            try {
                let externalsObj = {};
                externals.forEach(value => {
                    externalsObj[value] = `require("${value}")`;
                });

                let compiler = webpack({
                    entry: entryPath,
                    output: {
                        filename: '___1output.js',
                        path: process.cwd()
                    }, externals: externalsObj
                });

                compiler.run(function (err, stats) {
                    let content = fs.readFileSync(outputPath).toString();
                    fs.unlinkSync(entryPath);
                    fs.unlinkSync(outputPath);
                    resolve(content);
                });
            } catch (error) {
                console.log(error);
            }
        });
    }

}

let npmDep = new nodePackFile();
export default npmDep;