function curry(fn1,fn2){return function(x){return function(y){return fn1(fn2(x,y),y)}}}

var cielCurry={curry:curry};

export default cielCurry;
//# sourceMappingURL=ciel-curry.esm.js.map
