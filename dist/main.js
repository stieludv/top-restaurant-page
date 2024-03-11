(()=>{var n={208:(n,e,t)=>{"use strict";t.d(e,{A:()=>l});var r=t(354),o=t.n(r),i=t(314),a=t.n(i),c=t(417),s=t.n(c),d=new URL(t(600),t.b),u=a()(o()),A=s()(d);u.push([n.id,`\nbody {\n    margin: 0;\n    background-image: url(${A});\n    background-size: cover;\n    backdrop-filter: blur(10px) brightness(50%);\n    height: 100vh;\n    color: white;\n}\n\nbutton[data-action] {\n    cursor: pointer;\n    border-radius: 5px;\n    border-style: solid;\n    border-color: rgb(50,50,50);\n    padding: 10px;\n}\n\nbutton:hover {\n    background-color: rgb(20,20,20);\n    border-color: rgb(100, 100, 100);\n    transition: background-color 500ms cubic-bezier(0.075, 0.42, 0.165, 1), border 1s cubic-bezier(0.075, 0.82, 0.165, 1);\n}\n\nbutton:active {\n    background-color: rgb(100,100,100);\n    border-color: rgb(100, 100, 100);\n}\n\nnav {\n    background-color: rgba(0,0,0,0.7);\n    backdrop-filter: blur(10px);\n    height: 100px;\n    display: grid;\n    grid-template-columns: 1fr 10ch 10ch 10ch;\n    align-items: center;\n    gap: 10px;\n    padding-left: 40px;\n    padding-right: 40px;\n    position: sticky;\n    top: 0;\n}\n\n.restaurant-name {\n    color: white;\n}\n\nnav button {\n    color: white;\n    background-color: black;\n}\n\n#content {\n    padding-top: 100px;\n    padding-bottom: 100px;\n    width: 80vw;\n    margin-left: 10vw;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\n.menu-item-container {\n    max-width: 600px;\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    gap: 20px;\n}\n\n.menu-item img {\n    width: 100%;\n    max-width: 400px;\n    border-radius: 10px;\n}\n\n.menu-item-name {\n    font-size: 120%;\n    font-weight: bold;\n}`,"",{version:3,sources:["webpack://./src/style.css"],names:[],mappings:";AACA;IACI,SAAS;IACT,yDAA0C;IAC1C,sBAAsB;IACtB,2CAA2C;IAC3C,aAAa;IACb,YAAY;AAChB;;AAEA;IACI,eAAe;IACf,kBAAkB;IAClB,mBAAmB;IACnB,2BAA2B;IAC3B,aAAa;AACjB;;AAEA;IACI,+BAA+B;IAC/B,gCAAgC;IAChC,qHAAqH;AACzH;;AAEA;IACI,kCAAkC;IAClC,gCAAgC;AACpC;;AAEA;IACI,iCAAiC;IACjC,2BAA2B;IAC3B,aAAa;IACb,aAAa;IACb,yCAAyC;IACzC,mBAAmB;IACnB,SAAS;IACT,kBAAkB;IAClB,mBAAmB;IACnB,gBAAgB;IAChB,MAAM;AACV;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,YAAY;IACZ,uBAAuB;AAC3B;;AAEA;IACI,kBAAkB;IAClB,qBAAqB;IACrB,WAAW;IACX,iBAAiB;IACjB,aAAa;IACb,sBAAsB;IACtB,mBAAmB;AACvB;;AAEA;IACI,gBAAgB;IAChB,aAAa;IACb,8BAA8B;IAC9B,SAAS;AACb;;AAEA;IACI,WAAW;IACX,gBAAgB;IAChB,mBAAmB;AACvB;;AAEA;IACI,eAAe;IACf,iBAAiB;AACrB",sourcesContent:["\nbody {\n    margin: 0;\n    background-image: url(../static/food.avif);\n    background-size: cover;\n    backdrop-filter: blur(10px) brightness(50%);\n    height: 100vh;\n    color: white;\n}\n\nbutton[data-action] {\n    cursor: pointer;\n    border-radius: 5px;\n    border-style: solid;\n    border-color: rgb(50,50,50);\n    padding: 10px;\n}\n\nbutton:hover {\n    background-color: rgb(20,20,20);\n    border-color: rgb(100, 100, 100);\n    transition: background-color 500ms cubic-bezier(0.075, 0.42, 0.165, 1), border 1s cubic-bezier(0.075, 0.82, 0.165, 1);\n}\n\nbutton:active {\n    background-color: rgb(100,100,100);\n    border-color: rgb(100, 100, 100);\n}\n\nnav {\n    background-color: rgba(0,0,0,0.7);\n    backdrop-filter: blur(10px);\n    height: 100px;\n    display: grid;\n    grid-template-columns: 1fr 10ch 10ch 10ch;\n    align-items: center;\n    gap: 10px;\n    padding-left: 40px;\n    padding-right: 40px;\n    position: sticky;\n    top: 0;\n}\n\n.restaurant-name {\n    color: white;\n}\n\nnav button {\n    color: white;\n    background-color: black;\n}\n\n#content {\n    padding-top: 100px;\n    padding-bottom: 100px;\n    width: 80vw;\n    margin-left: 10vw;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\n.menu-item-container {\n    max-width: 600px;\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    gap: 20px;\n}\n\n.menu-item img {\n    width: 100%;\n    max-width: 400px;\n    border-radius: 10px;\n}\n\n.menu-item-name {\n    font-size: 120%;\n    font-weight: bold;\n}"],sourceRoot:""}]);const l=u},314:n=>{"use strict";n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,o,i){"string"==typeof n&&(n=[[null,n,void 0]]);var a={};if(r)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(a[s]=!0)}for(var d=0;d<n.length;d++){var u=[].concat(n[d]);r&&a[u[0]]||(void 0!==i&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=i),t&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=t):u[2]=t),o&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=o):u[4]="".concat(o)),e.push(u))}},e}},417:n=>{"use strict";n.exports=function(n,e){return e||(e={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]|(%20)/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},354:n=>{"use strict";n.exports=function(n){var e=n[1],t=n[3];if(!t)return e;if("function"==typeof btoa){var r=btoa(unescape(encodeURIComponent(JSON.stringify(t)))),o="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(r),i="/*# ".concat(o," */");return[e].concat([i]).join("\n")}return[e].join("\n")}},72:n=>{"use strict";var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var i={},a=[],c=0;c<n.length;c++){var s=n[c],d=r.base?s[0]+r.base:s[0],u=i[d]||0,A="".concat(d," ").concat(u);i[d]=u+1;var l=t(A),p={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==l)e[l].references++,e[l].updater(p);else{var m=o(p,r);r.byIndex=c,e.splice(c,0,{identifier:A,updater:m,references:1})}a.push(A)}return a}function o(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,o){var i=r(n=n||[],o=o||{});return function(n){n=n||[];for(var a=0;a<i.length;a++){var c=t(i[a]);e[c].references--}for(var s=r(n,o),d=0;d<i.length;d++){var u=t(i[d]);0===e[u].references&&(e[u].updater(),e.splice(u,1))}i=s}}},659:n=>{"use strict";var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},540:n=>{"use strict";n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},56:(n,e,t)=>{"use strict";n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},825:n=>{"use strict";n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var i=t.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},113:n=>{"use strict";n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},170:(n,e,t)=>{var r={"./food.avif":600};function o(n){var e=i(n);return t(e)}function i(n){if(!t.o(r,n)){var e=new Error("Cannot find module '"+n+"'");throw e.code="MODULE_NOT_FOUND",e}return r[n]}o.keys=function(){return Object.keys(r)},o.resolve=i,n.exports=o,o.id=170},600:(n,e,t)=>{"use strict";n.exports=t.p+"88aecf94d19343cfcb1e.avif"}},e={};function t(r){var o=e[r];if(void 0!==o)return o.exports;var i=e[r]={id:r,exports:{}};return n[r](i,i.exports,t),i.exports}t.m=n,t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;t.g.importScripts&&(n=t.g.location+"");var e=t.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var r=e.getElementsByTagName("script");if(r.length)for(var o=r.length-1;o>-1&&(!n||!/^http(s?):/.test(n));)n=r[o--].src}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=n})(),t.b=document.baseURI||self.location.href,t.nc=void 0,(()=>{"use strict";var n=t(72),e=t.n(n),r=t(825),o=t.n(r),i=t(659),a=t.n(i),c=t(56),s=t.n(c),d=t(540),u=t.n(d),A=t(113),l=t.n(A),p=t(208),m={};m.styleTagTransform=l(),m.setAttributes=s(),m.insert=a().bind(null,"head"),m.domAPI=o(),m.insertStyleElement=u(),e()(p.A,m),p.A&&p.A.locals&&p.A.locals;const f=n=>{const e=document.querySelector("#content");e.querySelectorAll("*").forEach((n=>n.remove())),e.appendChild(n)},g=()=>{f(document.createElement("div"))},b=[{name:"menuItem1",description:"description of menuItem1",ingredients:[],image:"food.avif"},{name:"menuItem2",description:"description of menuItem2",ingredients:[],image:"food.avif"}],h=document.querySelector("nav"),C=document.createElement("h1");C.classList.add("restaurant-name");const v=document.createTextNode("Lorem ipsum");C.appendChild(v),h.insertBefore(C,h.firstChild),document.querySelectorAll("[data-action]").forEach((n=>{const e=n.dataset.action;n.addEventListener("click",(()=>{switch(e){case"about":g();break;case"menu":f((()=>{const n=document.createElement("div");return n.classList.add("menu-item-container"),b.forEach((e=>{const r=document.createElement("div");r.classList.add("menu-item");const o=document.createElement("img");o.setAttribute("src",t(170)(`./${e.image}`)),r.appendChild(o);const i=document.createElement("p");i.classList.add("menu-item-name");const a=document.createTextNode(e.name);i.appendChild(a),r.appendChild(i);const c=document.createElement("p"),s=document.createTextNode(e.description);c.appendChild(s),r.appendChild(c),n.appendChild(r)})),n})());break;case"contact":f(document.createElement("div"))}}))})),g()})()})();
//# sourceMappingURL=main.js.map