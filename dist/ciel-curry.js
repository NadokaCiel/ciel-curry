(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global = global || self, (function () {
		var current = global['ciel-curry'];
		var exports = global['ciel-curry'] = factory();
		exports.noConflict = function () { global['ciel-curry'] = current; return exports; };
	}()));
}(this, function () { 'use strict';

	function curry(fn1,fn2){return function(x){return function(y){return fn1(fn2(x,y),y)}}}

	var cielCurry={curry:curry};

	return cielCurry;

}));
//# sourceMappingURL=ciel-curry.js.map
