"use strict";var n=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var o=n(function(A,q){
function j(e,r,i,a,y){var s,u,t;if(e<=0)return 0;if(e===1||a===0)return r+i[0];for(u=y,s=0,t=0;t<e;t++)s+=r+i[u],u+=a;return s}q.exports=j
});var f=n(function(B,d){
var R=require('@stdlib/strided-base-stride2offset/dist'),_=o();function l(e,r,i,a){return _(e,r,i,a,R(e,a))}d.exports=l
});var x=n(function(C,p){
var E=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),m=f(),O=o();E(m,"ndarray",O);p.exports=m
});var b=require("path").join,g=require('@stdlib/utils-try-require/dist'),k=require('@stdlib/assert-is-error/dist'),w=x(),v,c=g(b(__dirname,"./native.js"));k(c)?v=w:v=c;module.exports=v;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
