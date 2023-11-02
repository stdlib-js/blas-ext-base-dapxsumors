// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import r from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.1.0-esm/index.mjs";function n(r,n,e,t){var i,a,f;if(r<=0)return 0;if(1===r||0===t)return n+e[0];for(a=t<0?(1-r)*t:0,i=0,f=0;f<r;f++)i+=n+e[a],a+=t;return i}function e(r,n,e,t,i){var a,f,u;if(r<=0)return 0;if(1===r||0===t)return n+e[0];for(f=i,a=0,u=0;u<r;u++)a+=n+e[f],f+=t;return a}r(n,"ndarray",e);export{n as default,e as ndarray};
//# sourceMappingURL=index.mjs.map
