(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{2716:function(e,t,n){"use strict";n.d(t,{f5:function(){return o},rG:function(){return i},vU:function(){return a}});var r=n(7379),o=r.ZP.h1.withConfig({displayName:"styleText__Hometitle",componentId:"sc-1azg1q5-0"})(["color:#524949;margin-bottom:20px;margin-top:20px;font-size:30px;font-weight:600;"]),i=(0,r.ZP)(o).withConfig({displayName:"styleText__HometitleCentered",componentId:"sc-1azg1q5-1"})(["text-align:center;cursor:pointer;"]),a=r.ZP.h2.withConfig({displayName:"styleText__ProjectTitle",componentId:"sc-1azg1q5-2"})(["color:#524949;font-size:30px;font-weight:600;font-size:1rem;"])},8e3:function(e,t,n){"use strict";var r;Object.defineProperty(t,"__esModule",{value:!0}),t.AmpStateContext=void 0;var o=((r=n(7294))&&r.__esModule?r:{default:r}).default.createContext({});t.AmpStateContext=o},5646:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.isInAmpMode=a,t.useAmp=function(){return a(o.default.useContext(i.AmpStateContext))};var r,o=(r=n(7294))&&r.__esModule?r:{default:r},i=n(8e3);function a(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,r=e.hybrid,o=void 0!==r&&r,i=e.hasQuery,a=void 0!==i&&i;return n||o&&a}},2717:function(e,t,n){"use strict";var r=n(930);function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}Object.defineProperty(t,"__esModule",{value:!0}),t.defaultHead=u,t.default=void 0;var i,a=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};r.get||r.set?Object.defineProperty(t,n,r):t[n]=e[n]}return t.default=e,t}(n(7294)),s=(i=n(1585))&&i.__esModule?i:{default:i},c=n(8e3),d=n(5850),p=n(5646);function u(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[a.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(a.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function l(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===a.default.Fragment?e.concat(a.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var f=["name","httpEquiv","charSet","itemProp"];function h(e,t){return e.reduce((function(e,t){var n=a.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(l,[]).reverse().concat(u(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,r={};return function(o){var i=!0,a=!1;if(o.key&&"number"!==typeof o.key&&o.key.indexOf("$")>0){a=!0;var s=o.key.slice(o.key.indexOf("$")+1);e.has(s)?i=!1:e.add(s)}switch(o.type){case"title":case"base":t.has(o.type)?i=!1:t.add(o.type);break;case"meta":for(var c=0,d=f.length;c<d;c++){var p=f[c];if(o.props.hasOwnProperty(p))if("charSet"===p)n.has(p)?i=!1:n.add(p);else{var u=o.props[p],l=r[p]||new Set;"name"===p&&a||!l.has(u)?(l.add(u),r[p]=l):i=!1}}}return i}}()).reverse().map((function(e,n){var i=e.key||n;if(!t.inAmpMode&&"link"===e.type&&e.props.href&&["https://fonts.googleapis.com/css","https://use.typekit.net/"].some((function(t){return e.props.href.startsWith(t)}))){var s=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},e.props||{});return s["data-href"]=s.href,s.href=void 0,s["data-optimized-fonts"]=!0,a.default.cloneElement(e,s)}return a.default.cloneElement(e,{key:i})}))}var m=function(e){var t=e.children,n=a.useContext(c.AmpStateContext),r=a.useContext(d.HeadManagerContext);return a.default.createElement(s.default,{reduceComponentsToState:h,headManager:r,inAmpMode:p.isInAmpMode(n)},t)};t.default=m},1585:function(e,t,n){"use strict";var r=n(7980),o=n(3227),i=n(8361),a=(n(2191),n(5971)),s=n(2715),c=n(1193);function d(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=c(e);if(t){var o=c(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return s(this,n)}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var p=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};r.get||r.set?Object.defineProperty(t,n,r):t[n]=e[n]}return t.default=e,t}(n(7294));var u=function(e){a(n,e);var t=d(n);function n(e){var i;return o(this,n),(i=t.call(this,e)).emitChange=function(){i._hasHeadManager&&i.props.headManager.updateHead(i.props.reduceComponentsToState(r(i.props.headManager.mountedInstances),i.props))},i._hasHeadManager=i.props.headManager&&i.props.headManager.mountedInstances,i}return i(n,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),n}(p.Component);t.default=u},3140:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return y}});var r=n(9008),o=n(1664),i=n(7379),a=n(2716),s=n(5893),c=i.ZP.aside.withConfig({displayName:"Aside__AsideWrapper",componentId:"sc-1nribk9-0"})(["border-left:2px solid grey;padding-bottom:30px;margin-top:30px;@media (max-width:736px){border-left:none;}"]),d=i.ZP.ul.withConfig({displayName:"Aside__UL",componentId:"sc-1nribk9-1"})(["list-style:disc;margin-left:20px;margin-top:10px;display:flex;flex-direction:column;gap:20px;"]),p=i.ZP.div.withConfig({displayName:"Aside__AsideContent",componentId:"sc-1nribk9-2"})(["padding-left:20px;"]),u=i.ZP.h5.withConfig({displayName:"Aside__BookTitle",componentId:"sc-1nribk9-3"})(["color:#1098ad;font-weight:600;"]),l=i.ZP.p.withConfig({displayName:"Aside__Author",componentId:"sc-1nribk9-4"})(["font-size:18px;"]),f=function(){return(0,s.jsxs)(c,{children:[(0,s.jsx)(o.default,{href:"/books",passHref:!0,children:(0,s.jsxs)(a.rG,{children:["Recommended",(0,s.jsx)("br",{})," Books"]})}),(0,s.jsxs)(p,{children:[(0,s.jsx)("p",{children:"Here is a list of some of the best books ever written:"}),(0,s.jsxs)(d,{children:[(0,s.jsxs)("li",{children:[(0,s.jsx)(u,{children:"Neue Reise um die Welt"}),(0,s.jsx)(l,{children:"by Otto von Kotzebue"})]}),(0,s.jsxs)("li",{children:[(0,s.jsx)(u,{children:"Animal Farm"}),(0,s.jsx)(l,{children:"by George Orwell"})]}),(0,s.jsxs)("li",{children:[(0,s.jsx)(u,{children:"Roadside Picnic"}),(0,s.jsx)(l,{children:"by Strugatsky Brothers"})]})]})]})]})},h=i.ZP.div.withConfig({displayName:"pages__HomeGrid",componentId:"sc-ghfzp-0"})(["display:grid;grid-template-columns:1fr 300px;gap:20px;@media (max-width:808px){grid-template-columns:1fr;}"]),m=i.ZP.p.withConfig({displayName:"pages__P",componentId:"sc-ghfzp-1"})(["line-height:1.5;"]),y=(i.ZP.div.withConfig({displayName:"pages__Text",componentId:"sc-ghfzp-2"})(["font-size:1rem;"]),function(){return(0,s.jsxs)(h,{children:[(0,s.jsx)(r.default,{children:(0,s.jsx)("title",{children:"Johannes Welsch - Homepage"})}),(0,s.jsxs)("section",{children:[(0,s.jsx)(a.f5,{children:"Welcome to my personal Website!"}),(0,s.jsx)(m,{children:"You will find a lot of crap on this site. Food recipies, not some crap copied from the internet, these are my personal recipies that taste like heaven."})]}),(0,s.jsx)(f,{})]})})},8581:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(3140)}])},9008:function(e,t,n){e.exports=n(2717)}},function(e){e.O(0,[774,888,179],(function(){return t=8581,e(e.s=t);var t}));var t=e.O();_N_E=t}]);