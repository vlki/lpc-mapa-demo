(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8581:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(3678)}])},638:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},o=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),o.forEach((function(t){r(e,t,n[t])}))}return e}t.default=function(e,t){var n=a.default,r={loading:function(e){e.error,e.isLoading;return e.pastDelay,null}};i=e,s=Promise,(null!=s&&"undefined"!==typeof Symbol&&s[Symbol.hasInstance]?s[Symbol.hasInstance](i):i instanceof s)?r.loader=function(){return e}:"function"===typeof e?r.loader=e:"object"===typeof e&&(r=o({},r,e));var i,s;var l=r=o({},r,t);if(l.suspense)throw new Error("Invalid suspense option usage in next/dynamic. Read more: https://nextjs.org/docs/messages/invalid-dynamic-suspense");if(l.suspense)return n(l);r.loadableGenerated&&delete(r=o({},r,r.loadableGenerated)).loadableGenerated;if("boolean"===typeof r.ssr){if(!r.ssr)return delete r.ssr,u(n,r);delete r.ssr}return n(r)};i(n(7294));var a=i(n(4302));function i(e){return e&&e.__esModule?e:{default:e}}function u(e,t){return delete t.webpack,delete t.modules,e(t)}},6319:function(e,t,n){"use strict";var r;Object.defineProperty(t,"__esModule",{value:!0}),t.LoadableContext=void 0;var o=((r=n(7294))&&r.__esModule?r:{default:r}).default.createContext(null);t.LoadableContext=o},4302:function(e,t,n){"use strict";function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){o(e,t,n[t])}))}return e}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i,u=(i=n(7294))&&i.__esModule?i:{default:i},s=n(7161),l=n(6319);var c=[],f=[],d=!1;function p(e){var t=e(),n={loading:!0,loaded:null,error:null};return n.promise=t.then((function(e){return n.loading=!1,n.loaded=e,e})).catch((function(e){throw n.loading=!1,n.error=e,e})),n}var h=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._loadFn=t,this._opts=n,this._callbacks=new Set,this._delay=null,this._timeout=null,this.retry()}var t,n,o;return t=e,(n=[{key:"promise",value:function(){return this._res.promise}},{key:"retry",value:function(){var e=this,t=this;this._clearTimeouts(),this._res=this._loadFn(this._opts.loader),this._state={pastDelay:!1,timedOut:!1};var n=this._res,r=this._opts;if(n.loading){if("number"===typeof r.delay)if(0===r.delay)this._state.pastDelay=!0;else{var o=this;this._delay=setTimeout((function(){o._update({pastDelay:!0})}),r.delay)}if("number"===typeof r.timeout){var a=this;this._timeout=setTimeout((function(){a._update({timedOut:!0})}),r.timeout)}}this._res.promise.then((function(){e._update({}),e._clearTimeouts()})).catch((function(e){t._update({}),t._clearTimeouts()})),this._update({})}},{key:"_update",value:function(e){this._state=a({},this._state,{error:this._res.error,loaded:this._res.loaded,loading:this._res.loading},e),this._callbacks.forEach((function(e){return e()}))}},{key:"_clearTimeouts",value:function(){clearTimeout(this._delay),clearTimeout(this._timeout)}},{key:"getCurrentValue",value:function(){return this._state}},{key:"subscribe",value:function(e){var t=this;return this._callbacks.add(e),function(){t._callbacks.delete(e)}}}])&&r(t.prototype,n),o&&r(t,o),e}();function m(e){return function(e,t){var n=function(){if(!o){var t=new h(e,r);o={getCurrentValue:t.getCurrentValue.bind(t),subscribe:t.subscribe.bind(t),retry:t.retry.bind(t),promise:t.promise.bind(t)}}return o.promise()},r=Object.assign({loader:null,loading:null,delay:200,timeout:null,webpack:null,modules:null,suspense:!1},t);r.suspense&&(r.lazy=u.default.lazy(r.loader));var o=null;if(!d&&"function"===typeof r.webpack&&!r.suspense){var i=r.webpack();f.push((function(e){var t=!0,r=!1,o=void 0;try{for(var a,u=i[Symbol.iterator]();!(t=(a=u.next()).done);t=!0){var s=a.value;if(-1!==e.indexOf(s))return n()}}catch(l){r=!0,o=l}finally{try{t||null==u.return||u.return()}finally{if(r)throw o}}}))}var c=r.suspense?function(e,t){return u.default.createElement(r.lazy,a({},e,{ref:t}))}:function(e,t){n();var a=u.default.useContext(l.LoadableContext),i=s.useSubscription(o);return u.default.useImperativeHandle(t,(function(){return{retry:o.retry}}),[]),a&&Array.isArray(r.modules)&&r.modules.forEach((function(e){a(e)})),u.default.useMemo((function(){return i.loading||i.error?u.default.createElement(r.loading,{isLoading:i.loading,pastDelay:i.pastDelay,timedOut:i.timedOut,error:i.error,retry:o.retry}):i.loaded?u.default.createElement(function(e){return e&&e.__esModule?e.default:e}(i.loaded),e):null}),[e,i])};return c.preload=function(){return!r.suspense&&n()},c.displayName="LoadableComponent",u.default.forwardRef(c)}(p,e)}function y(e,t){for(var n=[];e.length;){var r=e.pop();n.push(r(t))}return Promise.all(n).then((function(){if(e.length)return y(e,t)}))}m.preloadAll=function(){return new Promise((function(e,t){y(c).then(e,t)}))},m.preloadReady=function(e){var t=void 0===e?[]:e;return new Promise((function(e){var n=function(){return d=!0,e()};y(f,t).then(n,n)}))},window.__NEXT_PRELOADREADY=m.preloadReady;var b=m;t.default=b},3678:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return c},default:function(){return f}});var r=n(5893),o=n(9008),a=n(7294),i=n(5152),u=n(7852),s=n.n(u),l=(0,i.default)((function(){return Promise.all([n.e(662),n.e(269),n.e(453)]).then(n.bind(n,453))}),{loadableGenerated:{webpack:function(){return[453]},modules:["index.js -> ../components/Map"]},ssr:!1}),c=!0;function f(e){var t=e.peopleByDistricts,n=e.officesByDistricts,i=a.useMemo((function(){return Object.values(t).reduce((function(e,t){return e+t}),0)}),[t]),u=a.useMemo((function(){return Object.values(n).reduce((function(e,t){return e+t}),0)}),[n]);return(0,r.jsxs)("div",{className:s().container,children:[(0,r.jsxs)(o.default,{children:[(0,r.jsx)("title",{children:"Create Next App"}),(0,r.jsx)("meta",{name:"description",content:"Generated by create next app"}),(0,r.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,r.jsx)("h1",{children:"L\xe9ka\u0159i pom\xe1haj\xed \u010cesku - demo interaktivn\xed mapy nad Google Spreadsheetem"}),(0,r.jsx)("h2",{children:"Registrace"}),(0,r.jsx)("p",{children:(0,r.jsx)("a",{href:"https://docs.google.com/forms/d/e/1FAIpQLSfNKPYGtcqbIG3aWQLOGG6GaomUV2dxAUb1Tnp-GXuVHWZKLA/viewform?usp=sf_link",target:"_blank",rel:"noreferrer",children:"Budu o\u010dkovat ve sv\xe9 ordinaci \u2192"})}),(0,r.jsx)("p",{children:(0,r.jsx)("a",{href:"https://docs.google.com/forms/d/e/1FAIpQLSfD_D9MDgjc6hVlAMTmQmiIrg_MDQwi8sGIpffeB7nsg3mUmQ/viewform?usp=sf_link",target:"_blank",rel:"noreferrer",children:"Chci pomoci v o\u010dkovac\xedm m\xedst\u011b \u2192"})}),(0,r.jsxs)("h2",{children:["Aktu\xe1ln\u011b ",i," osob a ",u," ordinac\xed"]}),(0,r.jsx)(l,{peopleByDistricts:t,officesByDistricts:n})]})}},7852:function(e){e.exports={container:"Home_container__bCOhY"}},5152:function(e,t,n){e.exports=n(638)},9008:function(e,t,n){e.exports=n(5443)}},function(e){e.O(0,[774,888,179],(function(){return t=8581,e(e.s=t);var t}));var t=e.O();_N_E=t}]);