!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.ThreeViewCarousel=t():e.ThreeViewCarousel=t()}(window,(function(){return function(e){var t=window.webpackHotUpdateThreeViewCarousel;window.webpackHotUpdateThreeViewCarousel=function(e,n){!function(e,t){if(y[e]&&b[e]){for(var n in b[e]=!1,t)Object.prototype.hasOwnProperty.call(t,n)&&(p[n]=t[n]);0==--v&&0===_&&L()}}(e,n),t&&t(e,n)};var n,r=!0,i="eb0077bca690a6161e17",o={},s=[],a=[];function c(e){var t=j[e];if(!t)return H;function r(r){return t.hot.active?(j[r]?-1===j[r].parents.indexOf(e)&&j[r].parents.push(e):(s=[e],n=r),-1===t.children.indexOf(r)&&t.children.push(r)):(console.warn("[HMR] unexpected require("+r+") from disposed module "+e),s=[]),H(r)}function i(e){return{configurable:!0,enumerable:!0,get:function(){return H[e]},set:function(t){H[e]=t}}}for(var o in H)Object.prototype.hasOwnProperty.call(H,o)&&"e"!==o&&"t"!==o&&Object.defineProperty(r,o,i(o));return r.e=function(e){return"ready"===d&&u("prepare"),_++,H.e(e).then(t,(function(e){throw t(),e}));function t(){_--,"prepare"===d&&(m[e]||x(e),0===_&&0===v&&L())}},r.t=function(e,t){return 1&t&&(e=r(e)),H.t(e,-2&t)},r}var l=[],d="idle";function u(e){d=e;for(var t=0;t<l.length;t++)l[t].call(null,e)}var h,p,f,v=0,_=0,m={},b={},y={};function g(e){return+e+""===e?+e:e}function w(e){if("idle"!==d)throw new Error("check() is only allowed in idle status");return r=e,u("check"),t=(t=1e4)||1e4,new Promise((function(e,n){if("undefined"==typeof XMLHttpRequest)return n(new Error("No browser support"));try{var r=new XMLHttpRequest,o=H.p+""+i+".hot-update.json";r.open("GET",o,!0),r.timeout=t,r.send(null)}catch(e){return n(e)}r.onreadystatechange=function(){if(4===r.readyState)if(0===r.status)n(new Error("Manifest request to "+o+" timed out."));else if(404===r.status)e();else if(200!==r.status&&304!==r.status)n(new Error("Manifest request to "+o+" failed."));else{try{var t=JSON.parse(r.responseText)}catch(t){return void n(t)}e(t)}}})).then((function(e){if(!e)return u("idle"),null;b={},m={},y=e.c,f=e.h,u("prepare");var t=new Promise((function(e,t){h={resolve:e,reject:t}}));return p={},x(0),"prepare"===d&&0===_&&0===v&&L(),t}));var t}function x(e){var t,n;y[e]?(b[e]=!0,v++,t=e,(n=document.createElement("script")).charset="utf-8",n.src=H.p+""+t+"."+i+".hot-update.js",document.head.appendChild(n)):m[e]=!0}function L(){u("ready");var e=h;if(h=null,e)if(r)Promise.resolve().then((function(){return E(r)})).then((function(t){e.resolve(t)}),(function(t){e.reject(t)}));else{var t=[];for(var n in p)Object.prototype.hasOwnProperty.call(p,n)&&t.push(g(n));e.resolve(t)}}function E(t){if("ready"!==d)throw new Error("apply() is only allowed in ready status");var n,r,a,c,l;function h(e){for(var t=[e],n={},r=t.map((function(e){return{chain:[e],id:e}}));0<r.length;){var i=r.pop(),o=i.id,s=i.chain;if((c=j[o])&&!c.hot._selfAccepted){if(c.hot._selfDeclined)return{type:"self-declined",chain:s,moduleId:o};if(c.hot._main)return{type:"unaccepted",chain:s,moduleId:o};for(var a=0;a<c.parents.length;a++){var l=c.parents[a],d=j[l];if(d){if(d.hot._declinedDependencies[o])return{type:"declined",chain:s.concat([l]),moduleId:o,parentId:l};-1===t.indexOf(l)&&(d.hot._acceptedDependencies[o]?(n[l]||(n[l]=[]),v(n[l],[o])):(delete n[l],t.push(l),r.push({chain:s.concat([l]),id:l})))}}}}return{type:"accepted",moduleId:e,outdatedModules:t,outdatedDependencies:n}}function v(e,t){for(var n=0;n<t.length;n++){var r=t[n];-1===e.indexOf(r)&&e.push(r)}}function _(){console.warn("[HMR] unexpected require("+L.moduleId+") to disposed module")}t=t||{};var m={},b=[],w={};for(var x in p)if(Object.prototype.hasOwnProperty.call(p,x)){var L;l=g(x);var E=!1,O=!1,P=!1,k="";switch((L=p[x]?h(l):{type:"disposed",moduleId:x}).chain&&(k="\nUpdate propagation: "+L.chain.join(" -> ")),L.type){case"self-declined":t.onDeclined&&t.onDeclined(L),t.ignoreDeclined||(E=new Error("Aborted because of self decline: "+L.moduleId+k));break;case"declined":t.onDeclined&&t.onDeclined(L),t.ignoreDeclined||(E=new Error("Aborted because of declined dependency: "+L.moduleId+" in "+L.parentId+k));break;case"unaccepted":t.onUnaccepted&&t.onUnaccepted(L),t.ignoreUnaccepted||(E=new Error("Aborted because "+l+" is not accepted"+k));break;case"accepted":t.onAccepted&&t.onAccepted(L),O=!0;break;case"disposed":t.onDisposed&&t.onDisposed(L),P=!0;break;default:throw new Error("Unexception type "+L.type)}if(E)return u("abort"),Promise.reject(E);if(O)for(l in w[l]=p[l],v(b,L.outdatedModules),L.outdatedDependencies)Object.prototype.hasOwnProperty.call(L.outdatedDependencies,l)&&(m[l]||(m[l]=[]),v(m[l],L.outdatedDependencies[l]));P&&(v(b,[L.moduleId]),w[l]=_)}var D,C=[];for(r=0;r<b.length;r++)l=b[r],j[l]&&j[l].hot._selfAccepted&&w[l]!==_&&C.push({module:l,errorHandler:j[l].hot._selfAccepted});u("dispose"),Object.keys(y).forEach((function(e){!1===y[e]&&delete installedChunks[e]}));for(var M,S,T=b.slice();0<T.length;)if(l=T.pop(),c=j[l]){var N={},I=c.hot._disposeHandlers;for(a=0;a<I.length;a++)(n=I[a])(N);for(o[l]=N,c.hot.active=!1,delete j[l],delete m[l],a=0;a<c.children.length;a++){var A=j[c.children[a]];A&&0<=(D=A.parents.indexOf(l))&&A.parents.splice(D,1)}}for(l in m)if(Object.prototype.hasOwnProperty.call(m,l)&&(c=j[l]))for(S=m[l],a=0;a<S.length;a++)M=S[a],0<=(D=c.children.indexOf(M))&&c.children.splice(D,1);for(l in u("apply"),i=f,w)Object.prototype.hasOwnProperty.call(w,l)&&(e[l]=w[l]);var U=null;for(l in m)if(Object.prototype.hasOwnProperty.call(m,l)&&(c=j[l])){S=m[l];var X=[];for(r=0;r<S.length;r++)if(M=S[r],n=c.hot._acceptedDependencies[M]){if(-1!==X.indexOf(n))continue;X.push(n)}for(r=0;r<X.length;r++){n=X[r];try{n(S)}catch(n){t.onErrored&&t.onErrored({type:"accept-errored",moduleId:l,dependencyId:S[r],error:n}),t.ignoreErrored||(U=U||n)}}}for(r=0;r<C.length;r++){var R=C[r];l=R.module,s=[l];try{H(l)}catch(r){if("function"==typeof R.errorHandler)try{R.errorHandler(r)}catch(n){t.onErrored&&t.onErrored({type:"self-accept-error-handler-errored",moduleId:l,error:n,originalError:r}),t.ignoreErrored||(U=U||n),U=U||r}else t.onErrored&&t.onErrored({type:"self-accept-errored",moduleId:l,error:r}),t.ignoreErrored||(U=U||r)}}return U?(u("fail"),Promise.reject(U)):(u("idle"),new Promise((function(e){e(b)})))}var j={};function H(t){if(j[t])return j[t].exports;var r,i,u=j[t]={i:t,l:!1,exports:{},hot:(i={_acceptedDependencies:{},_declinedDependencies:{},_selfAccepted:!1,_selfDeclined:!1,_disposeHandlers:[],_main:n!==(r=t),active:!0,accept:function(e,t){if(void 0===e)i._selfAccepted=!0;else if("function"==typeof e)i._selfAccepted=e;else if("object"==typeof e)for(var n=0;n<e.length;n++)i._acceptedDependencies[e[n]]=t||function(){};else i._acceptedDependencies[e]=t||function(){}},decline:function(e){if(void 0===e)i._selfDeclined=!0;else if("object"==typeof e)for(var t=0;t<e.length;t++)i._declinedDependencies[e[t]]=!0;else i._declinedDependencies[e]=!0},dispose:function(e){i._disposeHandlers.push(e)},addDisposeHandler:function(e){i._disposeHandlers.push(e)},removeDisposeHandler:function(e){var t=i._disposeHandlers.indexOf(e);0<=t&&i._disposeHandlers.splice(t,1)},check:w,apply:E,status:function(e){if(!e)return d;l.push(e)},addStatusHandler:function(e){l.push(e)},removeStatusHandler:function(e){var t=l.indexOf(e);0<=t&&l.splice(t,1)},data:o[r]},n=void 0,i),parents:(a=s,s=[],a),children:[]};return e[t].call(u.exports,u,u.exports,c(t)),u.l=!0,u.exports}return H.m=e,H.c=j,H.d=function(e,t,n){H.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},H.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},H.t=function(e,t){if(1&t&&(e=H(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(H.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)H.d(n,r,function(t){return e[t]}.bind(null,r));return n},H.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return H.d(t,"a",t),t},H.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},H.p="",H.h=function(){return i},c(4)(H.s=4)}([function(e,t,n){(t=n(3)(!1)).push([e.i,".carousel{position:relative;box-sizing:border-box;width:100%;height:100%;padding:0 50px}.carousel__wrapper{position:relative;width:100%;height:90%;margin-bottom:10%}.carousel__item{position:absolute;bottom:0;left:0;height:0;width:0;display:flex;align-items:center;justify-content:center;transition:all .5s ease-in-out}.carousel__item--hide{display:none}.carousel__item--prev{left:0;width:20%;height:40%}.carousel__item--selected{z-index:3;left:25%;width:50%;height:100%}.carousel__item--next{left:80%;width:20%;height:40%}.carousel__nav{position:absolute;bottom:0;left:0;width:100%;text-align:center}.carousel__bullet{display:inline-block;height:0;width:8px;border:3px solid #f0f0f0;background:#f0f0f0}.carousel__bullet+.carousel__bullet{margin-left:15px}.carousel__bullet--selected{border-color:#000;background:#000}.carousel__btn{position:absolute;top:0;left:0;-webkit-appearance:none;-moz-appearance:none;appearance:none;background:transparent;margin:0;border:0;padding:0;height:100%;width:5%;outline:0;color:#000;font-size:20px;font-weight:700;cursor:pointer}.carousel__btn .icon-arrow{display:inline-block;height:20px;width:20px;border-top:4px solid;border-left:4px solid}.carousel__btn .icon-arrow:hover{opacity:.4}.carousel__btn .icon-arrow--left{transform:rotate(-45deg)}.carousel__btn .icon-arrow--right{transform:rotate(135deg)}.carousel__btn:hover{background:hsla(0,0%,100%,.2)}.carousel__btn--next{left:auto;right:0}",""]),e.exports=t},function(e,t,n){var r=n(2),i=n(0);"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[e.i,i,""]]);var o=r(i,{insert:"head",singleton:!1}),s=i.locals?i.locals:{};i.locals||e.hot.accept(0,(function(){var t=n(0);"string"==typeof(t=t.__esModule?t.default:t)&&(t=[[e.i,t,""]]),o(t)})),e.hot.dispose((function(){o()})),e.exports=s},function(e,t,n){"use strict";var r,i,o=(i={},function(e){if(void 0===i[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}i[e]=t}return i[e]}),s=[];function a(e){for(var t=-1,n=0;n<s.length;n++)if(s[n].identifier===e){t=n;break}return t}function c(e,t){for(var n={},r=[],i=0;i<e.length;i++){var o=e[i],c=t.base?o[0]+t.base:o[0],l=n[c]||0,d="".concat(c," ").concat(l);n[c]=l+1;var u=a(d),h={css:o[1],media:o[2],sourceMap:o[3]};-1!==u?(s[u].references++,s[u].updater(h)):s.push({identifier:d,updater:v(h,t),references:1}),r.push(d)}return r}function l(e){var t=document.createElement("style"),r=e.attributes||{};if(void 0===r.nonce){var i=n.nc;i&&(r.nonce=i)}if(Object.keys(r).forEach((function(e){t.setAttribute(e,r[e])})),"function"==typeof e.insert)e.insert(t);else{var s=o(e.insert||"head");if(!s)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");s.appendChild(t)}return t}var d,u=(d=[],function(e,t){return d[e]=t,d.filter(Boolean).join("\n")});function h(e,t,n,r){var i=n?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(e.styleSheet)e.styleSheet.cssText=u(t,i);else{var o=document.createTextNode(i),s=e.childNodes;s[t]&&e.removeChild(s[t]),s.length?e.insertBefore(o,s[t]):e.appendChild(o)}}var p=null,f=0;function v(e,t){var n,r,i;if(t.singleton){var o=f++;n=p=p||l(t),r=h.bind(null,n,o,!1),i=h.bind(null,n,o,!0)}else n=l(t),r=function(e,t,n){var r=n.css,i=n.media,o=n.sourceMap;if(i?e.setAttribute("media",i):e.removeAttribute("media"),o&&btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}.bind(null,n,t),i=function(){var e;null!==(e=n).parentNode&&e.parentNode.removeChild(e)};return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else i()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=(void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r));var n=c(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var r=0;r<n.length;r++){var i=a(n[r]);s[i].references--}for(var o=c(e,t),l=0;l<n.length;l++){var d=a(n[l]);0===s[d].references&&(s[d].updater(),s.splice(d,1))}n=o}}}},function(e,t,n){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=function(e,t){var n=e[1]||"",r=e[3];if(!r)return n;if(t&&"function"==typeof btoa){var i=function(e){var t=btoa(unescape(encodeURIComponent(JSON.stringify(e)))),n="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(t);return"/*# ".concat(n," */")}(r),o=r.sources.map((function(e){return"/*# sourceURL=".concat(r.sourceRoot||"").concat(e," */")}));return[n].concat(o).concat([i]).join("\n")}return[n].join("\n")}(t,e);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,r){"string"==typeof e&&(e=[[null,e,""]]);var i={};if(r)for(var o=0;o<this.length;o++){var s=this[o][0];null!=s&&(i[s]=!0)}for(var a=0;a<e.length;a++){var c=[].concat(e[a]);r&&i[c[0]]||(n&&(c[2]?c[2]="".concat(n," and ").concat(c[2]):c[2]=n),t.push(c))}},t}},function(e,t,n){"use strict";function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}n.r(t),n(1);var i=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.defaults={container:document.querySelector("*[three-view-carousel]"),controls:{prev:'<i class="icon-arrow icon-arrow--left"></i>',next:'<i class="icon-arrow icon-arrow--right"></i>'},autoPlay:!0,duration:5e3},this.settings=Object.assign({},this.defaults,t||{}),this.container=this.settings.container,this.autoPlayControl=this.settings.autoPlay,this._movePrev=this._movePrev.bind(this),this._moveNext=this._moveNext.bind(this),this._mouseDownHandler=this._mouseDownHandler.bind(this),this._mouseUpHandler=this._mouseUpHandler.bind(this),this._touchStartHandler=this._touchStartHandler.bind(this),this._touchEndHandler=this._touchEndHandler.bind(this),this.children=null,this.nav=null,this.prevBtn=null,this.nextBtn=null,this.timer=null,this.posX=null,this.initialized=!1}var t,n;return t=e,(n=[{key:"_renderWrapper",value:function(){var e=document.createElement("div");e.classList.add("carousel__wrapper");for(var t=0;t<this.container.children.length;t++)switch(this.container.children[t].classList.add("carousel__item"),t){case 0:this.container.children[t].classList.add("carousel__item--prev");break;case 1:this.container.children[t].classList.add("carousel__item--selected");break;case 2:this.container.children[t].classList.add("carousel__item--next");break;default:this.container.children[t].classList.add("carousel__item--hide")}for(;0<this.container.children.length;)e.appendChild(this.container.children[0]);this.container.appendChild(e),this.children=this.container.children[0].children}},{key:"_renderNav",value:function(){var e=document.createElement("div");e.classList.add("carousel__nav");for(var t=0;t<this.children.length;t++){var n=document.createElement("span");n.classList.add("carousel__bullet"),1===t&&n.classList.add("carousel__bullet--selected"),e.appendChild(n)}this.container.appendChild(e),this.nav=e}},{key:"_renderControls",value:function(){var e=document.createElement("div");e.classList.add("carousel__controls");var t=document.createElement("button");t.className="carousel__btn carousel__btn--prev",t.insertAdjacentHTML("beforeend",this.settings.controls.prev),this.prevBtn=t;var n=document.createElement("button");n.className="carousel__btn carousel__btn--next",n.insertAdjacentHTML("beforeend",this.settings.controls.next),this.nextBtn=n,e.append(t,n),this.container.appendChild(e)}},{key:"_movePrev",value:function(){for(var e=-1,t=0;t<this.children.length;t++)this.children[t].classList.contains("carousel__item--prev")&&(e=t);var n=(e+this.children.length-1)%this.children.length,r=(e+1)%this.children.length,i=(e+2)%this.children.length;this.children[n].classList.remove("carousel__item--hide"),this.children[e].classList.remove("carousel__item--prev"),this.children[r].classList.remove("carousel__item--selected"),this.children[i].classList.remove("carousel__item--next"),this.children[n].classList.add("carousel__item--prev"),this.children[e].classList.add("carousel__item--selected"),this.children[r].classList.add("carousel__item--next"),this.children[i].classList.add("carousel__item--hide"),this.nav.children[r].classList.remove("carousel__bullet--selected"),this.nav.children[e].classList.add("carousel__bullet--selected")}},{key:"_moveNext",value:function(){for(var e=-1,t=0;t<this.children.length;t++)this.children[t].classList.contains("carousel__item--prev")&&(e=t);var n=(e+1)%this.children.length,r=(e+2)%this.children.length,i=(e+3)%this.children.length;this.children[e].classList.remove("carousel__item--prev"),this.children[n].classList.remove("carousel__item--selected"),this.children[r].classList.remove("carousel__item--next"),this.children[i].classList.remove("carousel__item--hide"),this.children[e].classList.add("carousel__item--hide"),this.children[n].classList.add("carousel__item--prev"),this.children[r].classList.add("carousel__item--selected"),this.children[i].classList.add("carousel__item--next"),this.nav.children[n].classList.remove("carousel__bullet--selected"),this.nav.children[r].classList.add("carousel__bullet--selected")}},{key:"_mouseDownHandler",value:function(e){this.posX=e.clientX,this.moved=!1,this.settings.autoPlay&&(this.autoPlayControl=!1,clearTimeout(this.timer))}},{key:"_mouseUpHandler",value:function(e){e.clientX>this.posX+50?this._movePrev():e.clientX+50<this.posX&&this._moveNext(),this.settings.autoPlay&&(this.autoPlayControl=!0,this.play())}},{key:"_touchStartHandler",value:function(e){this.posX=e.touches[0].clientX,this.autoPlay&&(this.autoPlayControl=!1,clearTimeout(this.timer))}},{key:"_touchEndHandler",value:function(e){e.changedTouches[0].clientX>this.posX+50?this._movePrev():e.changedTouches[0].clientX+50<this.posX&&this._moveNext(),this.settings.autoPlay&&(this.autoPlayControl=!0,this.play())}},{key:"play",value:function(){var e=this;this.timer=setTimeout((function(){e.autoPlayControl&&e._moveNext(),e.play()}),this.settings.duration)}},{key:"init",value:function(){this.container.classList.add("carousel"),this._renderWrapper(),this._renderNav(),this._renderControls(),this.prevBtn.addEventListener("click",this._movePrev),this.nextBtn.addEventListener("click",this._moveNext),this.container.addEventListener("mousedown",this._mouseDownHandler),this.container.addEventListener("dragstart",this._mouseDownHandler),this.container.addEventListener("mouseup",this._mouseUpHandler),this.container.addEventListener("dragend",this._mouseUpHandler),this.container.addEventListener("touchstart",this._touchStartHandler),this.container.addEventListener("touchend",this._touchEndHandler),this.settings.autoPlay&&this.play(),this.initialized=!0}}])&&r(t.prototype,n),e}();t.default=i}]).default}));