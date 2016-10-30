"use strict";
const index_1 = require('../src/index');
const axiba_unit_test_1 = require('axiba-unit-test');
const Vinyl = require('vinyl');
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
    axiba_unit_test_1.itClass('fileReplace', () => {
        let js = new Vinyl({
            cwd: '/',
            base: '/test/',
            path: '/test/file.js',
            contents: new Buffer('')
        });
        let depObj = {
            dependencies: [{
                    name: 'gulp',
                    path: 'node_modules/gulp',
                    main: 'gulp.js',
                }]
        };
        axiba_unit_test_1.itAdd(['require\("gulp");require\("gulp/ksss.js");', /require\(["'](.+?)['"]/g, 1, depObj], value => {
            return value == 'require("node_modules/gulp/gulp.js");require("node_modules/gulp/ksss.js");';
        }, 7000);
    });
    axiba_unit_test_1.itClass('getFileStream', () => {
        axiba_unit_test_1.itAdd(['react'], value => {
            return true;
        }, 7000);
    });
    // itClass('createJsonFile', () => {
    //     itAdd([], value => true);
    // });
});
axiba_unit_test_1.run();

//# sourceMappingURL=index.js.map
