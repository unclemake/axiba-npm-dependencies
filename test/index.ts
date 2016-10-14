
import npmDependent from '../src/index'
import { describe, describeClass, its, run, it, itAdd, itClass } from 'axiba-unit-test';
import util from 'axiba-util';


// rpt('./', function (node, kidName) {
//     console.log(node);
//     return false;
// }, function (er, data) {
//     console.log(data);
// })


describeClass('测试', npmDependent, () => {
    itClass('ls', () => {
        itAdd(['gulp'], value => {
            return true;
        });
        itAdd(['axiba-util'], value => {
            return true;
        });
        itAdd(['gulp-typescript'], value => {
            return true;
        });

         itAdd(['npm'], value => {
            return true;
        });
    });
})


util.performanceTest(async () => {
    await run();
}).then(value => {
    util.success(value);
});