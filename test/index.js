"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator.throw(value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments)).next());
    });
};
const index_1 = require('../src/index');
const axiba_unit_test_1 = require('axiba-unit-test');
(() => __awaiter(this, void 0, void 0, function* () {
    let dep = yield index_1.default.get('antd');
    axiba_unit_test_1.describeClass('测试', index_1.default, () => {
        // itClass('getPackage', () => {
        //     itAdd(['react'], value => value.name === 'react');
        // });
        // itClass('get', () => {
        //     // itAdd(['object-assign'], value => {
        //     //     return value.name == 'object-assign';
        //     // });
        //     itAdd(['react'], value => {
        //         return true;
        //     });
        // });
        // itClass('getFile', () => {
        // itAdd(['object-assign'], value => {
        //     return value.name == 'object-assign';
        // });
        //     itAdd(['react'], value => {
        //         return false;
        //     }, 7000);
        // });
        // itClass('fileReplace', () => {
        //     let js = new Vinyl({
        //         cwd: '/',
        //         base: '/test/',
        //         path: '/test/file.js',
        //         contents: new Buffer('')
        //     });
        //     let depObj = {
        //         dependencies: [{
        //             name: 'gulp',
        //             path: 'node_modules/gulp',
        //             main: 'gulp.js',
        //         }]
        //     }
        //     itAdd(['require\("gulp");require\("gulp/ksss.js");', /require\(["'](.+?)['"]/g, 1, depObj], value => {
        //         return value == 'require("node_modules/gulp/gulp.js");require("node_modules/gulp/ksss.js");';
        //     }, 7000);
        // });
        // itClass('getFileStream', () => {
        //     itAdd(['antd'], value => {
        //         return true;
        //     }, 9999999);
        // });
        axiba_unit_test_1.itClass('getModulesDep', () => {
            axiba_unit_test_1.itAdd([dep], value => {
                return false;
            }, 9999999);
        });
        axiba_unit_test_1.itClass('createJsonFile', () => {
            axiba_unit_test_1.itAdd([], value => true);
        });
    });
    axiba_unit_test_1.run();
}))();

//# sourceMappingURL=index.js.map
