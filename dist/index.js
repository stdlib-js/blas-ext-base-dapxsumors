"use strict";var v=function(r,e){return function(){return e||r((e={exports:{}}).exports,e),e.exports}};var m=v(function(w,f){
function j(r,e,s,u){var t,i,a;if(r<=0)return 0;if(r===1||u===0)return e+s[0];for(u<0?i=(1-r)*u:i=0,t=0,a=0;a<r;a++)t+=e+s[i],i+=u;return t}f.exports=j
});var x=v(function(z,q){
function R(r,e,s,u,t){var i,a,n;if(r<=0)return 0;if(r===1||u===0)return e+s[0];for(a=t,i=0,n=0;n<r;n++)i+=e+s[a],a+=u;return i}q.exports=R
});var d=v(function(A,c){
var _=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),p=m(),l=x();_(p,"ndarray",l);c.exports=p
});var E=require("path").join,O=require('@stdlib/utils-try-require/dist'),b=require('@stdlib/assert-is-error/dist'),g=d(),o,y=O(E(__dirname,"./native.js"));b(y)?o=g:o=y;module.exports=o;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
