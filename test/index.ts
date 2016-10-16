
import npmDependent from '../src/index'
import { describe, describeClass, its, run, it, itAdd, itClass } from 'axiba-unit-test';


describeClass('测试', npmDependent, () => {

    itClass('getVersionString', () => {
        itAdd(['1.0.1'], value => {
            return value === '">=1.0.1 <2.0.1"';
        });
    });



    // itClass('getDependenciesObj', () => {
    //     itAdd(['gulp'], value => {
    //         return value.path === 'node_modules/gulp';
    //     });

    // });


    itClass('get', () => {
        itAdd(['react'], value => {
            return false;
        }, 9999999);
    });



    itClass('findNpmView', () => {

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

        itAdd([npmList, 'gulp', '1.0.0'], value => {
            return value.path === 'url/gulp';
        });
    });
})

run();