
import npmDependent from '../src/index'
import { describe, describeClass, its, run, it, itAdd, itClass } from 'axiba-unit-test';


describeClass('测试', npmDependent, () => {

    // itClass('getVersionString', () => {
    //     itAdd(['^1.0.1'], value => {
    //         return value === '">=1.0.1 <2.0.1"';
    //     });

    //     itAdd(['1.0.1'], value => {
    //         return value === '1.0.1';
    //     });
    // });


    // itClass('versionContrast', () => {
    //     itAdd(['^1.0.1', '1.1.2'], value => {
    //         return value === true;
    //     });


    //     itAdd(['^1.0.1', '1.1.0'], value => {
    //         return value === true;
    //     });

    //     itAdd(['^1.1.2', '1.1.1'], value => {
    //         return value === false;
    //     });

    //     itAdd(['^1.2.1', '1.1.2'], value => {
    //         return value === false;
    //     });

    //     itAdd(['^1.2.1', '2.1.2'], value => {
    //         return value === false;
    //     });
    // });


    // itClass('getDependenciesObj', () => {
    //     itAdd(['react'], value => {
    //         return value.name === 'react';
    //     });
    // });


    itClass('get', () => {
        itAdd(['react'], value => {
            return false;
        }, 9999999);
    });

    // itClass('findNpmView', () => {

    //     let npmList = {
    //         path: '1',
    //         name: '12',
    //         version: '33',
    //         dependencies: {
    //             '22': {
    //                 path: '1',
    //                 name: '12',
    //                 version: '33',
    //                 dependencies: {
    //                     'gulp': {
    //                         name: 'gulp',
    //                         path: 'url/gulp',
    //                         version: '1.0.0'
    //                     }
    //                 }
    //             }

    //         }
    //     };

    //     itAdd([npmList, 'gulp', '1.0.0'], value => {
    //         return value.path === 'url/gulp';
    //     });
    // });

    // itClass('createJsonFile', () => {
    //     itAdd([], value => true);
    // });

})

run();