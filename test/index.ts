﻿
import npmDependent from '../src/index'
import { describe, describeClass, its, run, it, itAdd, itClass } from 'axiba-unit-test';
import Vinyl = require('vinyl');


(async () => {
    let dep = await npmDependent.get('antd');

    describeClass('测试', npmDependent, () => {

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




        itClass('getModulesDep', () => {
            itAdd([dep], value => {
                return false;
            }, 9999999);
        });



        itClass('createJsonFile', () => {
            itAdd([], value => true);
        });

    })

    run();

})()
