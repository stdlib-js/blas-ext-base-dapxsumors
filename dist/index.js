"use strict";var i=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(a){throw (r=0, a)}};};var u=i(function(k,n){
var c=require('@stdlib/blas-ext-base-dsumors/dist').ndarray;function f(e,r,a,s,x){return e<=0?0:e*r+c(e,a,s,x)}n.exports=f
});var v=i(function(w,o){
var y=require('@stdlib/strided-base-stride2offset/dist'),j=u();function l(e,r,a,s){return j(e,r,a,s,y(e,s))}o.exports=l
});var p=i(function(z,q){
var R=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),d=v(),_=u();R(d,"ndarray",_);q.exports=d
});var E=require("path").join,O=require('@stdlib/utils-try-require/dist'),b=require('@stdlib/assert-is-error/dist'),g=p(),t,m=O(E(__dirname,"./native.js"));b(m)?t=g:t=m;module.exports=t;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
