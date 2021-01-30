(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
    typeof define === 'function' && define.amd ? define(['exports'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.utils = {}));
}(this, (function (exports) { 'use strict';

    var sumup = function (num1, num2) {
        return num1 + num2;
    };
    var number = {
        sumup: sumup
    };

    exports.number = number;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
