"use strict";
/**Generics */
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
function concatArray() {
    var _a;
    var itens = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        itens[_i] = arguments[_i];
    }
    return (_a = new Array()).concat.apply(_a, __spreadArray([], __read(itens), false));
}
var numArray = concatArray([1, 3, 6], [8, 2]);
var stringArray = concatArray(["Rafael"], ["Fortunato"], ["Dametto", "é um rapaz lindo, cheiroso e gostoso!!!"]);
console.log(numArray);
console.log(stringArray);
