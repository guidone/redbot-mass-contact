/*!
 * Name: redbot-mass-contact
 * Id: redbot-mass-contact
 * Version: 0.1.0
 * Description: Send a message to all users
 * Author: Guido Bellomo (https://github.com/guidone)
 * Repository: https://github.com/guidone/red-bot-send-all
 */
define(["lodash","react","rsuite","code-plug","../../src/components","../../src/hooks/socket","prop-types"],(e,t,n,r,o,a,s)=>(()=>{var l={966:(e,t,n)=>{(t=n(645)(!1)).push([e.id,".widget-send-message .rs-form-group{flex:1 0;display:flex;flex-direction:column;flex-wrap:nowrap;justify-content:flex-start;align-content:stretch;align-items:stretch}.widget-send-message .rs-form-group .rs-form-control-wrapper{flex:1 0}.widget-send-message .key-hint{color:#999999;display:inline-block}\n",""]),e.exports=t},645:e=>{"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=function(e,t){var n=e[1]||"",r=e[3];if(!r)return n;if(t&&"function"==typeof btoa){var o=(s=r,l=btoa(unescape(encodeURIComponent(JSON.stringify(s)))),i="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(l),"/*# ".concat(i," */")),a=r.sources.map((function(e){return"/*# sourceURL=".concat(r.sourceRoot||"").concat(e," */")}));return[n].concat(a).concat([o]).join("\n")}var s,l,i;return[n].join("\n")}(t,e);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,r){"string"==typeof e&&(e=[[null,e,""]]);var o={};if(r)for(var a=0;a<this.length;a++){var s=this[a][0];null!=s&&(o[s]=!0)}for(var l=0;l<e.length;l++){var i=[].concat(e[l]);r&&o[i[0]]||(n&&(i[2]?i[2]="".concat(n," and ").concat(i[2]):i[2]=n),t.push(i))}},t}},261:(e,t,n)=>{var r=n(379),o=n(966);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.id,o,""]]);var a={insert:"head",singleton:!1};r(o,a);e.exports=o.locals||{}},379:(e,t,n)=>{"use strict";var r,o=function(){return void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r},a=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),s=[];function l(e){for(var t=-1,n=0;n<s.length;n++)if(s[n].identifier===e){t=n;break}return t}function i(e,t){for(var n={},r=[],o=0;o<e.length;o++){var a=e[o],i=t.base?a[0]+t.base:a[0],c=n[i]||0,u="".concat(i," ").concat(c);n[i]=c+1;var d=l(u),p={css:a[1],media:a[2],sourceMap:a[3]};-1!==d?(s[d].references++,s[d].updater(p)):s.push({identifier:u,updater:g(p,t),references:1}),r.push(u)}return r}function c(e){var t=document.createElement("style"),r=e.attributes||{};if(void 0===r.nonce){var o=n.nc;o&&(r.nonce=o)}if(Object.keys(r).forEach((function(e){t.setAttribute(e,r[e])})),"function"==typeof e.insert)e.insert(t);else{var s=a(e.insert||"head");if(!s)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");s.appendChild(t)}return t}var u,d=(u=[],function(e,t){return u[e]=t,u.filter(Boolean).join("\n")});function p(e,t,n,r){var o=n?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(e.styleSheet)e.styleSheet.cssText=d(t,o);else{var a=document.createTextNode(o),s=e.childNodes;s[t]&&e.removeChild(s[t]),s.length?e.insertBefore(a,s[t]):e.appendChild(a)}}function f(e,t,n){var r=n.css,o=n.media,a=n.sourceMap;if(o?e.setAttribute("media",o):e.removeAttribute("media"),a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var m=null,h=0;function g(e,t){var n,r,o;if(t.singleton){var a=h++;n=m||(m=c(t)),r=p.bind(null,n,a,!1),o=p.bind(null,n,a,!0)}else n=c(t),r=f.bind(null,n,t),o=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else o()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=o());var n=i(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var r=0;r<n.length;r++){var o=l(n[r]);s[o].references--}for(var a=i(e,t),c=0;c<n.length;c++){var u=l(n[c]);0===s[u].references&&(s[u].updater(),s.splice(u,1))}n=a}}}},727:e=>{"use strict";e.exports=o},89:e=>{"use strict";e.exports=a},737:e=>{"use strict";e.exports=r},980:t=>{"use strict";t.exports=e},207:e=>{"use strict";e.exports=s},650:e=>{"use strict";e.exports=t},131:e=>{"use strict";e.exports=n}},i={};function c(e){var t=i[e];if(void 0!==t)return t.exports;var n=i[e]={id:e,exports:{}};return l[e](n,n.exports,c),n.exports}c.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return c.d(t,{a:t}),t},c.d=(e,t)=>{for(var n in t)c.o(t,n)&&!c.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},c.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),c.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var u={};return(()=>{"use strict";c.r(u);var e=c(980),t=c.n(e),n=c(650),r=c.n(n),o=c(131),a=c(737),s=c(727),l=c(89),i=(c(261),c(207)),d=c.n(i);const p=({value:e,onChange:t=(()=>{}),onSubmit:n=(()=>{})})=>r().createElement("div",null,r().createElement(o.Form,{fluid:!0,formValue:e,onChange:t},r().createElement(o.FormGroup,{style:{marginTop:"15px"}},r().createElement(o.ControlLabel,null,"Message to send"),r().createElement(o.FormControl,{name:"message",componentClass:"textarea",style:{height:"150px",resize:"none"},onKeyUp:e=>{e.shiftKey&&13===e.keyCode&&n()}}))));p.propTypes={value:d().shape({message:d().string}),onChange:d().func,onSubmit:d().func};const f=p,{WidgetForm:m,Content:h,Footer:g}=s.WidgetForm,{Line:v}=o.Progress;(0,a.plug)("permissions",null,{permission:"mass-send",name:"Mass Send",description:"Send message to all chatbot's user",group:"General"}),(0,a.plug)("widgets",()=>{const{state:e}=(0,s.useMCContext)(),{chatbotId:a,activeChatbots:i}=e,[c,u]=(0,n.useState)({message:""}),[d,p]=(0,n.useState)(null),[b,y]=(0,n.useState)(null),[x,C]=(0,n.useState)(0),E=!t().isEmpty(c.message),S=null!=d&&d!==x,w=null!=d&&d===x,{sendMessage:M}=(0,l.useNodeRedSocket)({onMessage:async(e,t)=>{"redbot"===e&&"red-bot.sendAll.status"===t.topic?(p(t.payload.total),C(t.payload.current),t.payload.total===t.payload.current&&u({...c,message:""})):"redbot"===e&&"red-bot.sendAll.error"===t.topic&&y(t.payload)}}),j=(0,n.useCallback)(()=>{p(null),y(null),C(0),u({message:""})},[]),k=(0,n.useCallback)(async()=>{await(0,s.confirm)(r().createElement("div",null,"Send the message to all users?"),{okLabel:"Yes, send"})&&(M("red-bot.sendAll",{...c,chatbotId:a,activeChatbots:i}),y(null))},[c]);return r().createElement(s.Panel,{title:"Mass Contact",className:"widget-send-message"},r().createElement(m,{fluid:!0,formValue:c,onChange:e=>u(e)},r().createElement(h,null,r().createElement("div",null,"Send the text message to all users of the chatbot ",r().createElement("b",null,"chatbotId"),". If a user has multiple platforms the default one will be used or the first available one."),r().createElement(f,{value:c,disabled:S,onChange:e=>{u(e),p(null),p(b),C(0)},onSubmit:()=>{p(null),y(null),M("red-bot.sendAll",{...c,activeChatbots:i,chatbotId:a})}}),(S||w)&&r().createElement(v,{percent:Math.ceil(x/d*100),status:"active"}),w&&r().createElement("div",{style:{padding:"0px 4px 0px 4px"}},r().createElement(o.Message,{showIcon:!0,type:"success",description:`Send out complete! ${d} recipients.`})),b&&r().createElement("div",{style:{padding:"4px"}},r().createElement(o.Message,{showIcon:!0,type:"error",description:b}))),r().createElement(g,null,r().createElement(o.FormGroup,null,r().createElement(o.ButtonToolbar,null,r().createElement(o.Button,{appearance:"primary",disabled:!E,onClick:k},"Send Message"),r().createElement("div",{className:"key-hint"},"Shift + Enter to Send"),r().createElement(o.Button,{style:{float:"right"},appearance:"default",onClick:j},"Clear"))))))},{x:0,y:0,w:2,h:7,isResizable:!1,id:"redbot-mass-contact",permission:"mass-send"})})(),u})());