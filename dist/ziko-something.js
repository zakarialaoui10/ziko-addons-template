
/*
  Project: ziko-something
  Author: 
  Date : Sun Oct 06 2024 20:49:36 GMT+0100 (UTC+01:00)
*/

(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('ziko')) :
    typeof define === 'function' && define.amd ? define(['exports', 'ziko'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.ZikoSomething = {}, global.ziko));
})(this, (function (exports, ziko) { 'use strict';

    const A=1;
    const B=2;
    const ZikoSomething = {
        A,
        B
    };

    Object.defineProperty(exports, "text", {
        enumerable: true,
        get: function () { return ziko.text; }
    });
    exports.A = A;
    exports.B = B;
    exports.default = ZikoSomething;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
