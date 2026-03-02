"use strict";var i=function(r,e){return function(){return e||r((e={exports:{}}).exports,e),e.exports}};var u=i(function(k,n){
var c=require('@stdlib/blas-ext-base-dsumors/dist').ndarray;function f(r,e,s,a,x){return r<=0?0:r*e+c(r,s,a,x)}n.exports=f
});var v=i(function(w,o){
var y=require('@stdlib/strided-base-stride2offset/dist'),j=u();function l(r,e,s,a){return j(r,e,s,a,y(r,a))}o.exports=l
});var p=i(function(z,q){
var R=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),d=v(),_=u();R(d,"ndarray",_);q.exports=d
});var E=require("path").join,O=require('@stdlib/utils-try-require/dist'),b=require('@stdlib/assert-is-error/dist'),g=p(),t,m=O(E(__dirname,"./native.js"));b(m)?t=g:t=m;module.exports=t;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
