!function(n){var e={};function t(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return n[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}t.m=n,t.c=e,t.d=function(n,e,r){t.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:r})},t.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},t.t=function(n,e){if(1&e&&(n=t(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var o in n)t.d(r,o,function(e){return n[e]}.bind(null,o));return r},t.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return t.d(e,"a",e),e},t.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},t.p="",t(t.s=5)}([function(n,e,t){var r=t(1);"string"==typeof r&&(r=[[n.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};t(3)(r,o);r.locals&&(n.exports=r.locals)},function(n,e,t){(n.exports=t(2)(!1)).push([n.i,'*,\n*::before,\n*::after {\n  box-sizing: border-box; }\n\nhtml,\nbody {\n  margin: 0;\n  padding: 0;\n  color: #676767;\n  background-color: #fefefe;\n  font-family: \'Source Sans Sans\', sans-serif; }\n\nimg {\n  width: 100%; }\n\na {\n  color: #676767; }\n\nh1,\nh2 {\n  color: #5c9ead; }\n\nh1 {\n  font-size: 3.2em; }\n\nh2 {\n  font-size: 2.5em; }\n\n.wrapper {\n  max-width: 960px;\n  margin: 0 auto 50px;\n  padding: 0 30px; }\n\n#append {\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none;\n  font-size: 1em;\n  border: none;\n  display: block;\n  outline: none;\n  cursor: pointer;\n  text-decoration: underline; }\n\n.hero {\n  max-width: 700px;\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n  justify-content: center; }\n  .hero .page-title {\n    position: relative;\n    color: #5c9ead;\n    font-size: 3.2em;\n    margin-top: 0; }\n    .hero .page-title::before, .hero .page-title::after {\n      content: \'\';\n      position: absolute;\n      bottom: 0;\n      left: 0;\n      height: 4px;\n      width: 100px;\n      background: #676767; }\n    .hero .page-title::after {\n      width: 80px;\n      bottom: -7px; }\n    .hero .page-title span {\n      color: #676767;\n      font-size: 0.5em; }\n  .hero .page-subtitle {\n    font-size: 2em;\n    margin: 0 0 1.5em; }\n  .hero .menu {\n    list-style: none;\n    margin: 0;\n    padding: 0; }\n    .hero .menu li {\n      display: inline-block;\n      padding: 10px 20px 10px 0; }\n\n.responsive-toggle {\n  text-align: right;\n  margin-bottom: 5px; }\n  .responsive-toggle label {\n    vertical-align: middle; }\n\n.pros {\n  margin: 100px 0; }\n  .pros li {\n    padding: 5px 0; }\n\n#columns-wrapper {\n  margin: 0 -5px 50px;\n  display: flex;\n  flex-wrap: wrap; }\n  #columns-wrapper[data-columns="1"] > div {\n    flex-basis: calc(100% / 1); }\n  #columns-wrapper[data-columns="2"] > div {\n    flex-basis: calc(100% / 2); }\n  #columns-wrapper[data-columns="3"] > div {\n    flex-basis: calc(100% / 3); }\n  #columns-wrapper[data-columns="4"] > div {\n    flex-basis: calc(100% / 4); }\n  #columns-wrapper[data-columns="5"] > div {\n    flex-basis: calc(100% / 5); }\n  #columns-wrapper[data-columns="6"] > div {\n    flex-basis: calc(100% / 6); }\n  #columns-wrapper[data-columns="7"] > div {\n    flex-basis: calc(100% / 7); }\n  #columns-wrapper[data-columns="8"] > div {\n    flex-basis: calc(100% / 8); }\n  #columns-wrapper[data-columns="9"] > div {\n    flex-basis: calc(100% / 9); }\n\n.grid-item {\n  padding: 5px;\n  font-size: 0; }\n\n.credits {\n  font-size: 0.85em; }\n',""])},function(n,e){n.exports=function(n){var e=[];return e.toString=function(){return this.map(function(e){var t=function(n,e){var t=n[1]||"",r=n[3];if(!r)return t;if(e&&"function"==typeof btoa){var o=function(n){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(n))))+" */"}(r),i=r.sources.map(function(n){return"/*# sourceURL="+r.sourceRoot+n+" */"});return[t].concat(i).concat([o]).join("\n")}return[t].join("\n")}(e,n);return e[2]?"@media "+e[2]+"{"+t+"}":t}).join("")},e.i=function(n,t){"string"==typeof n&&(n=[[null,n,""]]);for(var r={},o=0;o<this.length;o++){var i=this[o][0];"number"==typeof i&&(r[i]=!0)}for(o=0;o<n.length;o++){var s=n[o];"number"==typeof s[0]&&r[s[0]]||(t&&!s[2]?s[2]=t:t&&(s[2]="("+s[2]+") and ("+t+")"),e.push(s))}},e}},function(n,e,t){var r={},o=function(n){var e;return function(){return void 0===e&&(e=n.apply(this,arguments)),e}}(function(){return window&&document&&document.all&&!window.atob}),i=function(n){var e={};return function(n,t){if("function"==typeof n)return n();if(void 0===e[n]){var r=function(n,e){return e?e.querySelector(n):document.querySelector(n)}.call(this,n,t);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(n){r=null}e[n]=r}return e[n]}}(),s=null,a=0,c=[],l=t(4);function u(n,e){for(var t=0;t<n.length;t++){var o=n[t],i=r[o.id];if(i){i.refs++;for(var s=0;s<i.parts.length;s++)i.parts[s](o.parts[s]);for(;s<o.parts.length;s++)i.parts.push(v(o.parts[s],e))}else{var a=[];for(s=0;s<o.parts.length;s++)a.push(v(o.parts[s],e));r[o.id]={id:o.id,refs:1,parts:a}}}}function p(n,e){for(var t=[],r={},o=0;o<n.length;o++){var i=n[o],s=e.base?i[0]+e.base:i[0],a={css:i[1],media:i[2],sourceMap:i[3]};r[s]?r[s].parts.push(a):t.push(r[s]={id:s,parts:[a]})}return t}function f(n,e){var t=i(n.insertInto);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var r=c[c.length-1];if("top"===n.insertAt)r?r.nextSibling?t.insertBefore(e,r.nextSibling):t.appendChild(e):t.insertBefore(e,t.firstChild),c.push(e);else if("bottom"===n.insertAt)t.appendChild(e);else{if("object"!=typeof n.insertAt||!n.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var o=i(n.insertAt.before,t);t.insertBefore(e,o)}}function d(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n);var e=c.indexOf(n);e>=0&&c.splice(e,1)}function m(n){var e=document.createElement("style");if(void 0===n.attrs.type&&(n.attrs.type="text/css"),void 0===n.attrs.nonce){var r=function(){0;return t.nc}();r&&(n.attrs.nonce=r)}return h(e,n.attrs),f(n,e),e}function h(n,e){Object.keys(e).forEach(function(t){n.setAttribute(t,e[t])})}function v(n,e){var t,r,o,i;if(e.transform&&n.css){if(!(i=e.transform(n.css)))return function(){};n.css=i}if(e.singleton){var c=a++;t=s||(s=m(e)),r=g.bind(null,t,c,!1),o=g.bind(null,t,c,!0)}else n.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(t=function(n){var e=document.createElement("link");return void 0===n.attrs.type&&(n.attrs.type="text/css"),n.attrs.rel="stylesheet",h(e,n.attrs),f(n,e),e}(e),r=function(n,e,t){var r=t.css,o=t.sourceMap,i=void 0===e.convertToAbsoluteUrls&&o;(e.convertToAbsoluteUrls||i)&&(r=l(r));o&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");var s=new Blob([r],{type:"text/css"}),a=n.href;n.href=URL.createObjectURL(s),a&&URL.revokeObjectURL(a)}.bind(null,t,e),o=function(){d(t),t.href&&URL.revokeObjectURL(t.href)}):(t=m(e),r=function(n,e){var t=e.css,r=e.media;r&&n.setAttribute("media",r);if(n.styleSheet)n.styleSheet.cssText=t;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(t))}}.bind(null,t),o=function(){d(t)});return r(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap)return;r(n=e)}else o()}}n.exports=function(n,e){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(e=e||{}).attrs="object"==typeof e.attrs?e.attrs:{},e.singleton||"boolean"==typeof e.singleton||(e.singleton=o()),e.insertInto||(e.insertInto="head"),e.insertAt||(e.insertAt="bottom");var t=p(n,e);return u(t,e),function(n){for(var o=[],i=0;i<t.length;i++){var s=t[i];(a=r[s.id]).refs--,o.push(a)}n&&u(p(n,e),e);for(i=0;i<o.length;i++){var a;if(0===(a=o[i]).refs){for(var c=0;c<a.parts.length;c++)a.parts[c]();delete r[a.id]}}}};var b=function(){var n=[];return function(e,t){return n[e]=t,n.filter(Boolean).join("\n")}}();function g(n,e,t,r){var o=t?"":r.css;if(n.styleSheet)n.styleSheet.cssText=b(e,o);else{var i=document.createTextNode(o),s=n.childNodes;s[e]&&n.removeChild(s[e]),s.length?n.insertBefore(i,s[e]):n.appendChild(i)}}},function(n,e){n.exports=function(n){var e="undefined"!=typeof window&&window.location;if(!e)throw new Error("fixUrls requires window.location");if(!n||"string"!=typeof n)return n;var t=e.protocol+"//"+e.host,r=t+e.pathname.replace(/\/[^\/]*$/,"/");return n.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(n,e){var o,i=e.trim().replace(/^"(.*)"$/,function(n,e){return e}).replace(/^'(.*)'$/,function(n,e){return e});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(i)?n:(o=0===i.indexOf("//")?i:0===i.indexOf("/")?t+i:r+i.replace(/^\.\//,""),"url("+JSON.stringify(o)+")")})}},function(n,e,t){"use strict";t.r(e);t(0);const r=(n,e)=>n+Math.floor(Math.random()*Math.floor(e));document.addEventListener("DOMContentLoaded",()=>{let n={480:3,840:4},e=new class{constructor(n,e={}){this.container=n,this.options=e,this.options.breakpoints=this.options.breakpoints||{},this.options.column_class=this.options.column_class||"column-js",this.items=Array.from(n.children)||[],this.update()}columnCount(){let n=this.options.columns,e=window.innerWidth;return Object.keys(this.options.breakpoints).some(t=>{if(e<t)return!0;n=this.options.breakpoints[t]}),n}append(n){return this.items.push(n),this.container.children[this.count++%this.columnCount()].append(n),this}update(){this.count=0;let n=this.columnCount();return this.container.dataset.columns=n,this.container.innerHTML=`<div class="${this.options.column_class}"></div>`.repeat(n),this.items.forEach(e=>{this.container.children[this.count++%n].append(e)}),this}setBreakpoints(n={}){this.options.breakpoints=n||{}}setColumns(n){this.options.columns=n}setColumnClass(n){this.options.column_class=n}}(document.getElementById("columns-wrapper"),{columns:3});document.getElementById("responsive-toggle").addEventListener("change",t=>{e.setColumns(t.target.checked?2:3),e.setBreakpoints(!!t.target.checked&&n),e.update()}),window.addEventListener("resize",((n,e)=>{let t;return()=>{var r=arguments;clearTimeout(t),t=setTimeout(()=>{t=null,n.apply(void 0,r)},e)}})(()=>{e.update()},50)),document.getElementById("append").addEventListener("click",()=>{for(let n=0;n<9;n++){let n=document.createElement("div");n.classList.add("grid-item"),n.innerHTML=`<img src="https://picsum.photos/${r(300,400)}/${r(300,400)}/?random">`,e.append(n)}})})}]);