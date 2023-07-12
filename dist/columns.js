!function(t,r){"object"==typeof exports&&"object"==typeof module?module.exports=r():"function"==typeof define&&define.amd?define([],r):"object"==typeof exports?exports.Columns=r():t.Columns=r()}(self,(()=>(()=>{"use strict";var t={d:(r,e)=>{for(var n in e)t.o(e,n)&&!t.o(r,n)&&Object.defineProperty(r,n,{enumerable:!0,get:e[n]})},o:(t,r)=>Object.prototype.hasOwnProperty.call(t,r)},r={};function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},e(t)}function n(t,r){for(var n=0;n<r.length;n++){var o=r[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,(void 0,i=function(t,r){if("object"!==e(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var o=n.call(t,"string");if("object"!==e(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(o.key),"symbol"===e(i)?i:String(i)),o)}var i}t.d(r,{default:()=>D});var o=function(){function t(r){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(t){return t};!function(t,r){if(!(t instanceof r))throw new TypeError("Cannot call a class as a function")}(this,t),this.item=r,this.extractor=e}var r,e,o;return r=t,o=[{key:"from",value:function(){var t=this,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(t){return t};return(arguments.length>0&&void 0!==arguments[0]?arguments[0]:[]).map((function(e){return new t(e,r)}))}}],(e=[{key:"value",get:function(){return this.extractor(this.item)}},{key:"lean",value:function(){return this.item}}])&&n(r.prototype,e),o&&n(r,o),Object.defineProperty(r,"prototype",{writable:!1}),t}();function i(t){return i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},i(t)}function u(t,r){for(var e=0;e<r.length;e++){var n=r[e];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(void 0,o=function(t,r){if("object"!==i(t)||null===t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var n=e.call(t,"string");if("object"!==i(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n.key),"symbol"===i(o)?o:String(o)),n)}var o}var a=function(){function t(){var r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];!function(t,r){if(!(t instanceof r))throw new TypeError("Cannot call a class as a function")}(this,t),this.items=r,this.sum=this.items.reduce((function(t,r){return t+r.value}),0)}var r,e;return r=t,(e=[{key:"count",value:function(){return this.items.length}},{key:"append",value:function(t){if(!(t instanceof o))throw new Error("Parameter must me of type 'Item'");return this.items.push(t),this.sum+=t.value,this}},{key:"lean",value:function(){return this.items.map((function(t){return t.lean()}))}}])&&u(r.prototype,e),Object.defineProperty(r,"prototype",{writable:!1}),t}();function l(t){return l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},l(t)}function c(t,r){(null==r||r>t.length)&&(r=t.length);for(var e=0,n=new Array(r);e<r;e++)n[e]=t[e];return n}function f(t,r){for(var e=0;e<r.length;e++){var n=r[e];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(void 0,o=function(t,r){if("object"!==l(t)||null===t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var n=e.call(t,"string");if("object"!==l(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n.key),"symbol"===l(o)?o:String(o)),n)}var o}var s=function(){function t(){!function(t,r){if(!(t instanceof r))throw new TypeError("Cannot call a class as a function")}(this,t)}var r,e;return r=t,e=[{key:"partition",value:function(t,r){var e,n=(e=Array(r),function(t){if(Array.isArray(t))return c(t)}(e)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(e)||function(t,r){if(t){if("string"==typeof t)return c(t,r);var e=Object.prototype.toString.call(t).slice(8,-1);return"Object"===e&&t.constructor&&(e=t.constructor.name),"Map"===e||"Set"===e?Array.from(t):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?c(t,r):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).map((function(t){return new a}));return r>0&&t.forEach((function(t,e){return n[e%r].append(t)})),n}},{key:"append",value:function(t,r){if(!Array.isArray(t)||!t.length)throw new Error("Cannot append without subsets");var e=t.reduce((function(t,r){return t+r.count()}),0)%t.length;return t[e].append(r),e}}],null&&f(r.prototype,null),e&&f(r,e),Object.defineProperty(r,"prototype",{writable:!1}),t}();function y(t){return y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},y(t)}function p(t){return function(t){if(Array.isArray(t))return m(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,r){if(t){if("string"==typeof t)return m(t,r);var e=Object.prototype.toString.call(t).slice(8,-1);return"Object"===e&&t.constructor&&(e=t.constructor.name),"Map"===e||"Set"===e?Array.from(t):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?m(t,r):void 0}}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function m(t,r){(null==r||r>t.length)&&(r=t.length);for(var e=0,n=new Array(r);e<r;e++)n[e]=t[e];return n}function b(t,r){for(var e=0;e<r.length;e++){var n=r[e];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(void 0,o=function(t,r){if("object"!==y(t)||null===t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var n=e.call(t,"string");if("object"!==y(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n.key),"symbol"===y(o)?o:String(o)),n)}var o}var v=function(){function t(){!function(t,r){if(!(t instanceof r))throw new TypeError("Cannot call a class as a function")}(this,t)}var r,e;return r=t,e=[{key:"partition",value:function(t,r){var e=p(Array(r)).map((function(t){return new a})),n=p(Array(r)).map((function(t){return 0}));return r>0&&(p(t).sort((function(t,r){return r.value-t.value})).forEach((function(t){var r=n.reduce((function(t,r,e){return n[t]<=r?t:e}),0);n[r]+=t.value,t._subset=r})),t.forEach((function(t){return e[t._subset].append(t)}))),e}},{key:"append",value:function(t,r){if(!Array.isArray(t)||!t.length)throw new Error("Cannot append without subsets");var e=t.reduce((function(r,e,n){return t[r].sum<=e.sum?r:n}),0);return t[e].append(r),e}}],null&&b(r.prototype,null),e&&b(r,e),Object.defineProperty(r,"prototype",{writable:!1}),t}();function h(t){return h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},h(t)}function d(t,r){for(var e=0;e<r.length;e++){var n=r[e];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,g(n.key),n)}}function g(t){var r=function(t,r){if("object"!==h(t)||null===t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var n=e.call(t,"string");if("object"!==h(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===h(r)?r:String(r)}var w,S,j,O=function(){function t(){var r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e.extractor,i=void 0===n?function(t){return t}:n,u=e.algorithm,a=void 0===u?"greedy":u;!function(t,r){if(!(t instanceof r))throw new TypeError("Cannot call a class as a function")}(this,t),this.extractor=i,this.items=o.from(r,this.extractor);var l=this.constructor.algorithms[a];if(void 0===l)throw new Error("Unsupported partitioning algorithm");this.algorithm=l,this.subsets=[]}var r,e;return r=t,(e=[{key:"partition",value:function(t){return this.subsets=this.algorithm.partition(this.items,t),this.subsets}},{key:"append",value:function(t){var r=new o(t,this.extractor);return this.items.push(r),this.algorithm.append(this.subsets,r)}}])&&d(r.prototype,e),Object.defineProperty(r,"prototype",{writable:!1}),t}();function P(t){return P="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},P(t)}function A(t){return function(t){if(Array.isArray(t))return k(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||E(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function E(t,r){if(t){if("string"==typeof t)return k(t,r);var e=Object.prototype.toString.call(t).slice(8,-1);return"Object"===e&&t.constructor&&(e=t.constructor.name),"Map"===e||"Set"===e?Array.from(t):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?k(t,r):void 0}}function k(t,r){(null==r||r>t.length)&&(r=t.length);for(var e=0,n=new Array(r);e<r;e++)n[e]=t[e];return n}function C(t,r){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable}))),e.push.apply(e,n)}return e}function T(t){for(var r=1;r<arguments.length;r++){var e=null!=arguments[r]?arguments[r]:{};r%2?C(Object(e),!0).forEach((function(r){x(t,r,e[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):C(Object(e)).forEach((function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(e,r))}))}return t}function x(t,r,e){return(r=_(r))in t?Object.defineProperty(t,r,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[r]=e,t}function I(t,r){for(var e=0;e<r.length;e++){var n=r[e];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,_(n.key),n)}}function _(t){var r=function(t,r){if("object"!==P(t)||null===t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var n=e.call(t,"string");if("object"!==P(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===P(r)?r:String(r)}w=O,j={greedy:v,chronological:s},(S=g(S="algorithms"))in w?Object.defineProperty(w,S,{value:j,enumerable:!0,configurable:!0,writable:!0}):w[S]=j;var D=function(){function t(r){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};!function(t,r){if(!(t instanceof r))throw new TypeError("Cannot call a class as a function")}(this,t),this.container=r,this.options=T({columns:1,breakpoints:null,column_class:"column-js",algorithm:"greedy"},e),this.set=new O(Array.from(this.container.children)||[],{algorithm:this.options.algorithm,extractor:function(t){return t.getBoundingClientRect().height}}),this.render()}var r,e;return r=t,e=[{key:"count",value:function(){var t=this.options.columns,r=window.innerWidth;return Object.entries(this.options.breakpoints||{}).some((function(e){var n,o,i=(o=2,function(t){if(Array.isArray(t))return t}(n=e)||function(t,r){var e=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=e){var n,o,i,u,a=[],l=!0,c=!1;try{if(i=(e=e.call(t)).next,0===r){if(Object(e)!==e)return;l=!1}else for(;!(l=(n=i.call(e)).done)&&(a.push(n.value),a.length!==r);l=!0);}catch(t){c=!0,o=t}finally{try{if(!l&&null!=e.return&&(u=e.return(),Object(u)!==u))return}finally{if(c)throw o}}return a}}(n,o)||E(n,o)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),u=i[0],a=i[1];if(r<u)return!0;t=a})),t}},{key:"append",value:function(t){this.container.children[0].append(t);var r=this.set.append(t);return this.container.children[r].append(t),this}},{key:"render",value:function(){var t,r=this.count(),e=this._prepareColumns(r);for(this.set.partition(r).forEach((function(t,r){var n;return(n=e[r]).append.apply(n,A(t.lean()))})),this.container.dataset.columns=r;this.container.firstChild;)this.container.removeChild(this.container.firstChild);return(t=this.container).append.apply(t,A(e)),this}},{key:"setOptions",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.options=T(T({},this.options),t)}},{key:"_prepareColumns",value:function(t){var r=this,e=[];return A(Array(t)).forEach((function(){var t=document.createElement("div");t.classList.add(r.options.column_class),e.push(t)})),e}}],e&&I(r.prototype,e),Object.defineProperty(r,"prototype",{writable:!1}),t}();return r.default})()));