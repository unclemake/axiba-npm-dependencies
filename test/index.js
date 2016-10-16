"use strict";
const index_1 = require('../src/index');
const axiba_unit_test_1 = require('axiba-unit-test');
axiba_unit_test_1.describeClass('测试', index_1.default, () => {
    axiba_unit_test_1.itClass('getVersionString', () => {
        axiba_unit_test_1.itAdd(['1.0.1'], value => {
            return value === '">=1.0.1 <2.0.1"';
        });
    });
    // itClass('getDependenciesObj', () => {
    //     itAdd(['gulp'], value => {
    //         return value.path === 'node_modules/gulp';
    //     });
    // });
    axiba_unit_test_1.itClass('get', () => {
        axiba_unit_test_1.itAdd(['react'], value => {
            return false;
        }, 9999999);
    });
    axiba_unit_test_1.itClass('findNpmView', () => {
        let npmList = {
            path: '1',
            name: '12',
            version: '33',
            dependencies: {
                '22': {
                    path: '1',
                    name: '12',
                    version: '33',
                    dependencies: {
                        'gulp': {
                            name: 'gulp',
                            path: 'url/gulp',
                            version: '1.0.0'
                        }
                    }
                }
            }
        };
        axiba_unit_test_1.itAdd([npmList, 'gulp', '1.0.0'], value => {
            return value.path === 'url/gulp';
        });
    });
});
axiba_unit_test_1.run();

//# sourceMappingURL=index.js.map
