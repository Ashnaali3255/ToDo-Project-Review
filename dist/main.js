(()=>{"use strict";var n={426:(n,e,r)=>{r.d(e,{Z:()=>c});var t=r(81),o=r.n(t),i=r(645),a=r.n(i)()(o());a.push([n.id,"html {\r\n  box-sizing: border-box;\r\n  width: 100%;\r\n}\r\n\r\n*,\r\n*::after,\r\n*::before {\r\n  padding: 0;\r\n  margin: 0;\r\n}\r\n\r\nbody {\r\n  background-color: rgb(190, 171, 143);\r\n  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;\r\n}\r\n\r\nsection {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n}\r\n\r\n.todo-h1 {\r\n  margin-top: 50px;\r\n  font-size: 50px;\r\n}\r\n\r\n.todo-container {\r\n  border: 2px solid black;\r\n  margin-top: 40px;\r\n  width: 50%;\r\n  background-color: azure;\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n.top-div {\r\n  display: flex;\r\n  height: 50px;\r\n  border-bottom: 1px solid burlywood;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  background-color: beige;\r\n}\r\n\r\n.top-div p {\r\n  margin-left: 20px;\r\n  font-weight: 600;\r\n}\r\n\r\n.top-div i {\r\n  margin-right: 20px;\r\n}\r\n\r\n.add-list {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  height: 50px;\r\n  align-items: center;\r\n}\r\n\r\n#input {\r\n  width: 80%;\r\n  height: 30px;\r\n  padding: 5px;\r\n  margin-left: 20px;\r\n  border: none;\r\n  background-color: azure;\r\n}\r\n\r\n.add-btn {\r\n  background-color: rgb(155, 98, 207);\r\n  border-color: rgb(155, 98, 207);\r\n  margin-right: 20px;\r\n  width: 30px;\r\n  height: 18px;\r\n  font-weight: 600;\r\n  font-size: 12px;\r\n}\r\n\r\n.add-btn:hover {\r\n  cursor: pointer;\r\n}\r\n\r\n.toDoItem {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n}\r\n\r\n.added-checkbox {\r\n  display: flex;\r\n  align-items: center;\r\n  height: 50px;\r\n}\r\n\r\n.added-checkbox .item {\r\n  margin-right: 10px;\r\n  margin-left: 20px;\r\n}\r\n\r\n.findInput {\r\n  width: 80%;\r\n  height: 30px;\r\n  padding: 5px;\r\n  border: none;\r\n  font-size: 16px;\r\n  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;\r\n  background-color: azure;\r\n}\r\n\r\n.toDoItem i {\r\n  margin-right: 20px;\r\n}\r\n\r\n.toDoItem i:hover {\r\n  cursor: pointer;\r\n}\r\n\r\n.complete-cont {\r\n  display: flex;\r\n  justify-content: center;\r\n  height: 50px;\r\n  background-color: beige;\r\n  border-top: 1px solid burlywood;\r\n}\r\n\r\n.complete-btn {\r\n  border: none;\r\n  background-color: beige;\r\n  font-weight: 600;\r\n  font-size: 18px;\r\n}\r\n",""]);const c=a},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var r="",t=void 0!==e[5];return e[4]&&(r+="@supports (".concat(e[4],") {")),e[2]&&(r+="@media ".concat(e[2]," {")),t&&(r+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),r+=n(e),t&&(r+="}"),e[2]&&(r+="}"),e[4]&&(r+="}"),r})).join("")},e.i=function(n,r,t,o,i){"string"==typeof n&&(n=[[null,n,void 0]]);var a={};if(t)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(a[s]=!0)}for(var d=0;d<n.length;d++){var l=[].concat(n[d]);t&&a[l[0]]||(void 0!==i&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=i),r&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=r):l[2]=r),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),e.push(l))}},e}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function r(n){for(var r=-1,t=0;t<e.length;t++)if(e[t].identifier===n){r=t;break}return r}function t(n,t){for(var i={},a=[],c=0;c<n.length;c++){var s=n[c],d=t.base?s[0]+t.base:s[0],l=i[d]||0,p="".concat(d," ").concat(l);i[d]=l+1;var u=r(p),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==u)e[u].references++,e[u].updater(f);else{var m=o(f,t);t.byIndex=c,e.splice(c,0,{identifier:p,updater:m,references:1})}a.push(p)}return a}function o(n,e){var r=e.domAPI(e);return r.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;r.update(n=e)}else r.remove()}}n.exports=function(n,o){var i=t(n=n||[],o=o||{});return function(n){n=n||[];for(var a=0;a<i.length;a++){var c=r(i[a]);e[c].references--}for(var s=t(n,o),d=0;d<i.length;d++){var l=r(i[d]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}i=s}}},569:n=>{var e={};n.exports=function(n,r){var t=function(n){if(void 0===e[n]){var r=document.querySelector(n);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(n){r=null}e[n]=r}return e[n]}(n);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");t.appendChild(r)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,r)=>{n.exports=function(n){var e=r.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){var e=n.insertStyleElement(n);return{update:function(r){!function(n,e,r){var t="";r.supports&&(t+="@supports (".concat(r.supports,") {")),r.media&&(t+="@media ".concat(r.media," {"));var o=void 0!==r.layer;o&&(t+="@layer".concat(r.layer.length>0?" ".concat(r.layer):""," {")),t+=r.css,o&&(t+="}"),r.media&&(t+="}"),r.supports&&(t+="}");var i=r.sourceMap;i&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleTagTransform(t,n,e.options)}(e,n,r)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},e={};function r(t){var o=e[t];if(void 0!==o)return o.exports;var i=e[t]={id:t,exports:{}};return n[t](i,i.exports,r),i.exports}r.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return r.d(e,{a:e}),e},r.d=(n,e)=>{for(var t in e)r.o(e,t)&&!r.o(n,t)&&Object.defineProperty(n,t,{enumerable:!0,get:e[t]})},r.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),r.nc=void 0,(()=>{var n=r(379),e=r.n(n),t=r(795),o=r.n(t),i=r(569),a=r.n(i),c=r(565),s=r.n(c),d=r(216),l=r.n(d),p=r(589),u=r.n(p),f=r(426),m={};m.styleTagTransform=u(),m.setAttributes=s(),m.insert=a().bind(null,"head"),m.domAPI=o(),m.insertStyleElement=l(),e()(f.Z,m),f.Z&&f.Z.locals&&f.Z.locals;class g{constructor(n,e,r){this.description=n,this.completed=e,this.index=r}}const h=()=>JSON.parse(localStorage.getItem("listStorage"))||[],v=document.getElementById("listItem"),x=document.getElementById("input"),b=()=>{v.replaceChildren(),h().forEach(((n,e)=>{let r;!0===n.completed&&(r="checked"),v.innerHTML+=`\n      <div class="toDoItem">\n        <div class="added-checkbox">\n\n        <input class='item' id='check-${e}', "completed")' type='checkbox' ${n.Checked?"true":"false"} onChange='updateList(${e}, "completed")' ${r}>\n        <input onkeyup='updateList(${e})' type="text" class='findInput' id='input-${e}' value='${n.description}' />\n\n        </div>\n        <i class="delete" onclick='removeList(${n.index})' id='delete-${n.index}'>🗑️</i>\n      </div>\n        `}))};window.removeList=n=>{const e=h().filter((e=>e.index!==n?e:""));(n=>{n.forEach(((n,e)=>{n.index=e+1}))})(e),localStorage.setItem("listStorage",JSON.stringify(e)),b()},window.updateList=n=>{const e=document.querySelector(`#input-${n}`).value,r=h().map((r=>(r.index-1===n&&(r.description=e),r.index-1===n&&(r.completed=!0),r.index-1===!n&&(r.completed=!0),r)));localStorage.setItem("listStorage",JSON.stringify(r))};const y=document.querySelector(".add-list"),w=document.getElementById("input");window.addEventListener("load",(()=>{b()})),y.addEventListener("click",(n=>{n.preventDefault(),((n,e,r)=>{const t=new g(n,!1,r),o=h();o.push(t),localStorage.setItem("listStorage",JSON.stringify(o)),x.value="",b()})(w.value,0,h().length+1),b()}))})()})();