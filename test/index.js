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
const axiba_util_1 = require('axiba-util');
// rpt('./', function (node, kidName) {
//     console.log(node);
//     return false;
// }, function (er, data) {
//     console.log(data);
// })
axiba_unit_test_1.describeClass('测试', index_1.default, () => {
    axiba_unit_test_1.itClass('ls', () => {
        axiba_unit_test_1.itAdd(['gulp'], value => {
            return true;
        });
        axiba_unit_test_1.itAdd(['axiba-util'], value => {
            return true;
        });
        axiba_unit_test_1.itAdd(['gulp-typescript'], value => {
            return true;
        });
        axiba_unit_test_1.itAdd(['npm'], value => {
            return true;
        });
    });
});
axiba_util_1.default.performanceTest(() => __awaiter(this, void 0, void 0, function* () {
    yield axiba_unit_test_1.run();
})).then(value => {
    axiba_util_1.default.success(value);
});

//# sourceMappingURL=index.js.map
