"use strict";var i=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var u=i(function(k,n){
var c=require('@stdlib/blas-ext-base-dsumors/dist').ndarray;function y(e,r,s,a,x){return e*r+c(e,s,a,x)}n.exports=y
});var v=i(function(w,o){
var f=require('@stdlib/strided-base-stride2offset/dist'),j=u();function l(e,r,s,a){return j(e,r,s,a,f(e,a))}o.exports=l
});var p=i(function(z,q){
var R=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),d=v(),_=u();R(d,"ndarray",_);q.exports=d
});var E=require("path").join,O=require('@stdlib/utils-try-require/dist'),b=require('@stdlib/assert-is-error/dist'),g=p(),t,m=O(E(__dirname,"./native.js"));b(m)?t=g:t=m;module.exports=t;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
