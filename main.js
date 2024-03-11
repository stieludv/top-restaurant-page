(()=>{var n={208:(n,e,t)=>{"use strict";t.d(e,{A:()=>l});var r=t(354),o=t.n(r),a=t(314),i=t.n(a),c=t(417),s=t.n(c),A=new URL(t(59),t.b),d=i()(o()),u=s()(A);d.push([n.id,`\nbody {\n    margin: 0;\n    background-image: url(${u});\n    background-size: cover;\n    backdrop-filter: blur(10px) brightness(50%);\n    height: 100vh;\n    color: white;\n    background-repeat: no-repeat;\n    background-color: black;\n}\n\nnav button {\n    cursor: pointer;\n}\n\nbutton[data-action] {\n    border-radius: 5px;\n    border-style: solid;\n    border-color: rgb(50,50,50);\n    padding: 10px;\n}\n\nbutton:hover {\n    background-color: rgb(20,20,20);\n    border-color: rgb(100, 100, 100);\n    transition: background-color 500ms cubic-bezier(0.075, 0.42, 0.165, 1), border 1s cubic-bezier(0.075, 0.82, 0.165, 1);\n}\n\nbutton:active {\n    background-color: rgb(100,100,100);\n    border-color: rgb(100, 100, 100);\n}\n\n.current-content-button {\n    cursor: not-allowed;\n    filter: brightness(70%);\n}\n\n.current-content-button:hover {\n    background-color: black;\n    border-color: rgb(50, 50, 50);\n}\n\n.current-content-button:active {\n    background-color: black;\n    border-color: rgb(50, 50, 50);\n}\n\nnav {\n    background-color: rgba(0,0,0,0.7);\n    backdrop-filter: blur(10px);\n    height: 100px;\n    display: grid;\n    grid-template-columns: 1fr 10ch 10ch 10ch;\n    align-items: center;\n    gap: 10px;\n    padding-left: 40px;\n    padding-right: 40px;\n    position: sticky;\n    top: 0;\n}\n\n.restaurant-name {\n    color: white;\n}\n\nnav button {\n    color: white;\n    background-color: black;\n}\n\n#content {\n    padding-top: 100px;\n    padding-bottom: 100px;\n    width: 80vw;\n    margin-left: 10vw;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    max-height: calc(100vh - 300px);\n    overflow-y: scroll;\n}\n\n#content::-webkit-scrollbar {\n    display: none;\n}\n\n.menu-item-container {\n    max-width: 600px;\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    gap: 20px;\n}\n\n.menu-item img {\n    width: 100%;\n    max-width: 400px;\n    border-radius: 10px;\n}\n\n.menu-item-name {\n    font-size: 120%;\n    font-weight: bold;\n}\n\n@media screen and (max-width: 700px) {\n    nav {\n        grid-template-rows: 1fr 1fr;\n        grid-template-columns: 1fr 1fr 1fr;\n        padding-top: 20px;\n        padding-bottom: 20px;\n    }\n\n    .restaurant-name {\n        grid-column-start: 1;\n        grid-column-end: 4;\n        text-align: center;\n    }\n\n    #content {\n        max-height: calc(100vh - 100px - 200px - 20px - 20px);\n    }\n}`,"",{version:3,sources:["webpack://./src/style.css"],names:[],mappings:";AACA;IACI,SAAS;IACT,yDAAgD;IAChD,sBAAsB;IACtB,2CAA2C;IAC3C,aAAa;IACb,YAAY;IACZ,4BAA4B;IAC5B,uBAAuB;AAC3B;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,kBAAkB;IAClB,mBAAmB;IACnB,2BAA2B;IAC3B,aAAa;AACjB;;AAEA;IACI,+BAA+B;IAC/B,gCAAgC;IAChC,qHAAqH;AACzH;;AAEA;IACI,kCAAkC;IAClC,gCAAgC;AACpC;;AAEA;IACI,mBAAmB;IACnB,uBAAuB;AAC3B;;AAEA;IACI,uBAAuB;IACvB,6BAA6B;AACjC;;AAEA;IACI,uBAAuB;IACvB,6BAA6B;AACjC;;AAEA;IACI,iCAAiC;IACjC,2BAA2B;IAC3B,aAAa;IACb,aAAa;IACb,yCAAyC;IACzC,mBAAmB;IACnB,SAAS;IACT,kBAAkB;IAClB,mBAAmB;IACnB,gBAAgB;IAChB,MAAM;AACV;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,YAAY;IACZ,uBAAuB;AAC3B;;AAEA;IACI,kBAAkB;IAClB,qBAAqB;IACrB,WAAW;IACX,iBAAiB;IACjB,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,+BAA+B;IAC/B,kBAAkB;AACtB;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,gBAAgB;IAChB,aAAa;IACb,8BAA8B;IAC9B,SAAS;AACb;;AAEA;IACI,WAAW;IACX,gBAAgB;IAChB,mBAAmB;AACvB;;AAEA;IACI,eAAe;IACf,iBAAiB;AACrB;;AAEA;IACI;QACI,2BAA2B;QAC3B,kCAAkC;QAClC,iBAAiB;QACjB,oBAAoB;IACxB;;IAEA;QACI,oBAAoB;QACpB,kBAAkB;QAClB,kBAAkB;IACtB;;IAEA;QACI,qDAAqD;IACzD;AACJ",sourcesContent:["\nbody {\n    margin: 0;\n    background-image: url(../static/restaurant.avif);\n    background-size: cover;\n    backdrop-filter: blur(10px) brightness(50%);\n    height: 100vh;\n    color: white;\n    background-repeat: no-repeat;\n    background-color: black;\n}\n\nnav button {\n    cursor: pointer;\n}\n\nbutton[data-action] {\n    border-radius: 5px;\n    border-style: solid;\n    border-color: rgb(50,50,50);\n    padding: 10px;\n}\n\nbutton:hover {\n    background-color: rgb(20,20,20);\n    border-color: rgb(100, 100, 100);\n    transition: background-color 500ms cubic-bezier(0.075, 0.42, 0.165, 1), border 1s cubic-bezier(0.075, 0.82, 0.165, 1);\n}\n\nbutton:active {\n    background-color: rgb(100,100,100);\n    border-color: rgb(100, 100, 100);\n}\n\n.current-content-button {\n    cursor: not-allowed;\n    filter: brightness(70%);\n}\n\n.current-content-button:hover {\n    background-color: black;\n    border-color: rgb(50, 50, 50);\n}\n\n.current-content-button:active {\n    background-color: black;\n    border-color: rgb(50, 50, 50);\n}\n\nnav {\n    background-color: rgba(0,0,0,0.7);\n    backdrop-filter: blur(10px);\n    height: 100px;\n    display: grid;\n    grid-template-columns: 1fr 10ch 10ch 10ch;\n    align-items: center;\n    gap: 10px;\n    padding-left: 40px;\n    padding-right: 40px;\n    position: sticky;\n    top: 0;\n}\n\n.restaurant-name {\n    color: white;\n}\n\nnav button {\n    color: white;\n    background-color: black;\n}\n\n#content {\n    padding-top: 100px;\n    padding-bottom: 100px;\n    width: 80vw;\n    margin-left: 10vw;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    max-height: calc(100vh - 300px);\n    overflow-y: scroll;\n}\n\n#content::-webkit-scrollbar {\n    display: none;\n}\n\n.menu-item-container {\n    max-width: 600px;\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    gap: 20px;\n}\n\n.menu-item img {\n    width: 100%;\n    max-width: 400px;\n    border-radius: 10px;\n}\n\n.menu-item-name {\n    font-size: 120%;\n    font-weight: bold;\n}\n\n@media screen and (max-width: 700px) {\n    nav {\n        grid-template-rows: 1fr 1fr;\n        grid-template-columns: 1fr 1fr 1fr;\n        padding-top: 20px;\n        padding-bottom: 20px;\n    }\n\n    .restaurant-name {\n        grid-column-start: 1;\n        grid-column-end: 4;\n        text-align: center;\n    }\n\n    #content {\n        max-height: calc(100vh - 100px - 200px - 20px - 20px);\n    }\n}"],sourceRoot:""}]);const l=d},314:n=>{"use strict";n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,o,a){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(r)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var A=0;A<n.length;A++){var d=[].concat(n[A]);r&&i[d[0]]||(void 0!==a&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=a),t&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=t):d[2]=t),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),e.push(d))}},e}},417:n=>{"use strict";n.exports=function(n,e){return e||(e={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]|(%20)/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},354:n=>{"use strict";n.exports=function(n){var e=n[1],t=n[3];if(!t)return e;if("function"==typeof btoa){var r=btoa(unescape(encodeURIComponent(JSON.stringify(t)))),o="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(r),a="/*# ".concat(o," */");return[e].concat([a]).join("\n")}return[e].join("\n")}},72:n=>{"use strict";var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var a={},i=[],c=0;c<n.length;c++){var s=n[c],A=r.base?s[0]+r.base:s[0],d=a[A]||0,u="".concat(A," ").concat(d);a[A]=d+1;var l=t(u),p={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==l)e[l].references++,e[l].updater(p);else{var m=o(p,r);r.byIndex=c,e.splice(c,0,{identifier:u,updater:m,references:1})}i.push(u)}return i}function o(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,o){var a=r(n=n||[],o=o||{});return function(n){n=n||[];for(var i=0;i<a.length;i++){var c=t(a[i]);e[c].references--}for(var s=r(n,o),A=0;A<a.length;A++){var d=t(a[A]);0===e[d].references&&(e[d].updater(),e.splice(d,1))}a=s}}},659:n=>{"use strict";var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},540:n=>{"use strict";n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},56:(n,e,t)=>{"use strict";n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},825:n=>{"use strict";n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},113:n=>{"use strict";n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},170:(n,e,t)=>{var r={"./food.avif":600,"./restaurant.avif":59};function o(n){var e=a(n);return t(e)}function a(n){if(!t.o(r,n)){var e=new Error("Cannot find module '"+n+"'");throw e.code="MODULE_NOT_FOUND",e}return r[n]}o.keys=function(){return Object.keys(r)},o.resolve=a,n.exports=o,o.id=170},600:(n,e,t)=>{"use strict";n.exports=t.p+"88aecf94d19343cfcb1e.avif"},59:(n,e,t)=>{"use strict";n.exports=t.p+"ded153ef7ae2b68b8af6.avif"}},e={};function t(r){var o=e[r];if(void 0!==o)return o.exports;var a=e[r]={id:r,exports:{}};return n[r](a,a.exports,t),a.exports}t.m=n,t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;t.g.importScripts&&(n=t.g.location+"");var e=t.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var r=e.getElementsByTagName("script");if(r.length)for(var o=r.length-1;o>-1&&(!n||!/^http(s?):/.test(n));)n=r[o--].src}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=n})(),t.b=document.baseURI||self.location.href,t.nc=void 0,(()=>{"use strict";var n=t(72),e=t.n(n),r=t(825),o=t.n(r),a=t(659),i=t.n(a),c=t(56),s=t.n(c),A=t(540),d=t.n(A),u=t(113),l=t.n(u),p=t(208),m={};m.styleTagTransform=l(),m.setAttributes=s(),m.insert=i().bind(null,"head"),m.domAPI=o(),m.insertStyleElement=d(),e()(p.A,m),p.A&&p.A.locals&&p.A.locals;const f=n=>{const e=document.querySelector("#content");e.querySelectorAll("*").forEach((n=>n.remove())),e.appendChild(n)},g=()=>{f(document.createElement("div"))},b=[{name:"menuItem1",description:"description of menuItem1",ingredients:[],image:"food.avif"},{name:"menuItem2",description:"description of menuItem2",ingredients:[],image:"food.avif"},{name:"menuItem3",description:"description of menuItem3",ingredients:[],image:"food.avif"},{name:"menuItem4",description:"description of menuItem4",ingredients:[],image:"food.avif"},{name:"menuItem5",description:"description of menuItem5",ingredients:[],image:"food.avif"},{name:"menuItem6",description:"description of menuItem6",ingredients:[],image:"food.avif"},{name:"menuItem7",description:"description of menuItem7",ingredients:[],image:"food.avif"},{name:"menuItem8",description:"description of menuItem8",ingredients:[],image:"food.avif"}],C=n=>{document.querySelectorAll("[data-action]").forEach((n=>{n.classList.remove("current-content-button")})),n.classList.add("current-content-button")},h=document.querySelector("nav"),v=document.createElement("h1");v.classList.add("restaurant-name");const B=document.createTextNode("Lorem ipsum");v.appendChild(B),h.insertBefore(v,h.firstChild),document.querySelectorAll("[data-action]").forEach((n=>{const e=n.dataset.action;n.addEventListener("click",(n=>{switch(e){case"about":g();break;case"menu":f((()=>{const n=document.createElement("div");return n.classList.add("menu-item-container"),b.forEach((e=>{const r=document.createElement("div");r.classList.add("menu-item");const o=document.createElement("img");o.setAttribute("src",t(170)(`./${e.image}`)),r.appendChild(o);const a=document.createElement("p");a.classList.add("menu-item-name");const i=document.createTextNode(e.name);a.appendChild(i),r.appendChild(a);const c=document.createElement("p"),s=document.createTextNode(e.description);c.appendChild(s),r.appendChild(c),n.appendChild(r)})),n})());break;case"contact":f(document.createElement("div"))}C(n.target)}))})),(()=>{g();const n=document.querySelector("[data-action=about]");C(n)})()})()})();
//# sourceMappingURL=main.js.map