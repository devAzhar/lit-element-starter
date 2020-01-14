/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const t=new WeakMap,s=s=>"function"==typeof s&&t.has(s),e=void 0!==window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,i=(t,s,e=null)=>{for(;s!==e;){const e=s.nextSibling;t.removeChild(s),s=e}},n={},o={},r=`{{lit-${String(Math.random()).slice(2)}}}`,h=`\x3c!--${r}--\x3e`,c=new RegExp(`${r}|${h}`),l="$lit$";class a{constructor(t,s){this.parts=[],this.element=s;const e=[],i=[],n=document.createTreeWalker(s.content,133,null,!1);let o=0,h=-1,a=0;const{strings:d,values:{length:m}}=t;for(;a<m;){const t=n.nextNode();if(null!==t){if(h++,1===t.nodeType){if(t.hasAttributes()){const s=t.attributes,{length:e}=s;let i=0;for(let t=0;t<e;t++)u(s[t].name,l)&&i++;for(;i-- >0;){const s=d[a],e=p.exec(s)[2],i=e.toLowerCase()+l,n=t.getAttribute(i);t.removeAttribute(i);const o=n.split(c);this.parts.push({type:"attribute",index:h,name:e,strings:o}),a+=o.length-1}}"TEMPLATE"===t.tagName&&(i.push(t),n.currentNode=t.content)}else if(3===t.nodeType){const s=t.data;if(s.indexOf(r)>=0){const i=t.parentNode,n=s.split(c),o=n.length-1;for(let s=0;s<o;s++){let e,o=n[s];if(""===o)e=f();else{const t=p.exec(o);null!==t&&u(t[2],l)&&(o=o.slice(0,t.index)+t[1]+t[2].slice(0,-l.length)+t[3]),e=document.createTextNode(o)}i.insertBefore(e,t),this.parts.push({type:"node",index:++h})}""===n[o]?(i.insertBefore(f(),t),e.push(t)):t.data=n[o],a+=o}}else if(8===t.nodeType)if(t.data===r){const s=t.parentNode;null!==t.previousSibling&&h!==o||(h++,s.insertBefore(f(),t)),o=h,this.parts.push({type:"node",index:h}),null===t.nextSibling?t.data="":(e.push(t),h--),a++}else{let s=-1;for(;-1!==(s=t.data.indexOf(r,s+1));)this.parts.push({type:"node",index:-1}),a++}}else n.currentNode=i.pop()}for(const t of e)t.parentNode.removeChild(t)}}const u=(t,s)=>{const e=t.length-s.length;return e>=0&&t.slice(e)===s},d=t=>-1!==t.index,f=()=>document.createComment(""),p=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
class m{constructor(t,s,e){this.t=[],this.template=t,this.processor=s,this.options=e}update(t){let s=0;for(const e of this.t)void 0!==e&&e.setValue(t[s]),s++;for(const t of this.t)void 0!==t&&t.commit()}_clone(){const t=e?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),s=[],i=this.template.parts,n=document.createTreeWalker(t,133,null,!1);let o,r=0,h=0,c=n.nextNode();for(;r<i.length;)if(o=i[r],d(o)){for(;h<o.index;)h++,"TEMPLATE"===c.nodeName&&(s.push(c),n.currentNode=c.content),null===(c=n.nextNode())&&(n.currentNode=s.pop(),c=n.nextNode());if("node"===o.type){const t=this.processor.handleTextExpression(this.options);t.insertAfterNode(c.previousSibling),this.t.push(t)}else this.t.push(...this.processor.handleAttributeExpressions(c,o.name,o.strings,this.options));r++}else this.t.push(void 0),r++;return e&&(document.adoptNode(t),customElements.upgrade(t)),t}}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const w=` ${r} `;class y{constructor(t,s,e,i){this.strings=t,this.values=s,this.type=e,this.processor=i}getHTML(){const t=this.strings.length-1;let s="",e=!1;for(let i=0;i<t;i++){const t=this.strings[i],n=t.lastIndexOf("\x3c!--");e=(n>-1||e)&&-1===t.indexOf("--\x3e",n+1);const o=p.exec(t);s+=null===o?t+(e?w:h):t.substr(0,o.index)+o[1]+o[2]+l+o[3]+r}return s+=this.strings[t],s}getTemplateElement(){const t=document.createElement("template");return t.innerHTML=this.getHTML(),t}}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const v=t=>null===t||!("object"==typeof t||"function"==typeof t),b=t=>Array.isArray(t)||!(!t||!t[Symbol.iterator]);class x{constructor(t,s,e){this.dirty=!0,this.element=t,this.name=s,this.strings=e,this.parts=[];for(let t=0;t<e.length-1;t++)this.parts[t]=this._createPart()}_createPart(){return new g(this)}_getValue(){const t=this.strings,s=t.length-1;let e="";for(let i=0;i<s;i++){e+=t[i];const s=this.parts[i];if(void 0!==s){const t=s.value;if(v(t)||!b(t))e+="string"==typeof t?t:String(t);else for(const s of t)e+="string"==typeof s?s:String(s)}}return e+=t[s],e}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class g{constructor(t){this.value=void 0,this.committer=t}setValue(t){t===n||v(t)&&t===this.value||(this.value=t,s(t)||(this.committer.dirty=!0))}commit(){for(;s(this.value);){const t=this.value;this.value=n,t(this)}this.value!==n&&this.committer.commit()}}class S{constructor(t){this.value=void 0,this.s=void 0,this.options=t}appendInto(t){this.startNode=t.appendChild(f()),this.endNode=t.appendChild(f())}insertAfterNode(t){this.startNode=t,this.endNode=t.nextSibling}appendIntoPart(t){t.i(this.startNode=f()),t.i(this.endNode=f())}insertAfterPart(t){t.i(this.startNode=f()),this.endNode=t.endNode,t.endNode=this.startNode}setValue(t){this.s=t}commit(){for(;s(this.s);){const t=this.s;this.s=n,t(this)}const t=this.s;t!==n&&(v(t)?t!==this.value&&this.o(t):t instanceof y?this.h(t):t instanceof Node?this.l(t):b(t)?this.u(t):t===o?(this.value=o,this.clear()):this.o(t))}i(t){this.endNode.parentNode.insertBefore(t,this.endNode)}l(t){this.value!==t&&(this.clear(),this.i(t),this.value=t)}o(t){const s=this.startNode.nextSibling,e="string"==typeof(t=null==t?"":t)?t:String(t);s===this.endNode.previousSibling&&3===s.nodeType?s.data=e:this.l(document.createTextNode(e)),this.value=t}h(t){const s=this.options.templateFactory(t);if(this.value instanceof m&&this.value.template===s)this.value.update(t.values);else{const e=new m(s,t.processor,this.options),i=e._clone();e.update(t.values),this.l(i),this.value=e}}u(t){Array.isArray(this.value)||(this.value=[],this.clear());const s=this.value;let e,i=0;for(const n of t)e=s[i],void 0===e&&(e=new S(this.options),s.push(e),0===i?e.appendIntoPart(this):e.insertAfterPart(s[i-1])),e.setValue(n),e.commit(),i++;i<s.length&&(s.length=i,this.clear(e&&e.endNode))}clear(t=this.startNode){i(this.startNode.parentNode,t.nextSibling,this.endNode)}}class _{constructor(t,s,e){if(this.value=void 0,this.s=void 0,2!==e.length||""!==e[0]||""!==e[1])throw new Error("Boolean attributes can only contain a single expression");this.element=t,this.name=s,this.strings=e}setValue(t){this.s=t}commit(){for(;s(this.s);){const t=this.s;this.s=n,t(this)}if(this.s===n)return;const t=!!this.s;this.value!==t&&(t?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name),this.value=t),this.s=n}}class k extends x{constructor(t,s,e){super(t,s,e),this.single=2===e.length&&""===e[0]&&""===e[1]}_createPart(){return new C(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class C extends g{}let P=!1;try{const t={get capture(){return P=!0,!1}};window.addEventListener("test",t,t),window.removeEventListener("test",t,t)}catch(t){}class T{constructor(t,s,e){this.value=void 0,this.s=void 0,this.element=t,this.eventName=s,this.eventContext=e,this.p=t=>this.handleEvent(t)}setValue(t){this.s=t}commit(){for(;s(this.s);){const t=this.s;this.s=n,t(this)}if(this.s===n)return;const t=this.s,e=this.value,i=null==t||null!=e&&(t.capture!==e.capture||t.once!==e.once||t.passive!==e.passive),o=null!=t&&(null==e||i);i&&this.element.removeEventListener(this.eventName,this.p,this.m),o&&(this.m=A(t),this.element.addEventListener(this.eventName,this.p,this.m)),this.value=t,this.s=n}handleEvent(t){"function"==typeof this.value?this.value.call(this.eventContext||this.element,t):this.value.handleEvent(t)}}const A=t=>t&&(P?{capture:t.capture,passive:t.passive,once:t.once}:t.capture);
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const $=new class{handleAttributeExpressions(t,s,e,i){const n=s[0];if("."===n){return new k(t,s.slice(1),e).parts}return"@"===n?[new T(t,s.slice(1),i.eventContext)]:"?"===n?[new _(t,s.slice(1),e)]:new x(t,s,e).parts}handleTextExpression(t){return new S(t)}};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */function M(t){let s=j.get(t.type);void 0===s&&(s={stringsArray:new WeakMap,keyString:new Map},j.set(t.type,s));let e=s.stringsArray.get(t.strings);if(void 0!==e)return e;const i=t.strings.join(r);return e=s.keyString.get(i),void 0===e&&(e=new a(t,t.getTemplateElement()),s.keyString.set(i,e)),s.stringsArray.set(t.strings,e),e}const j=new Map,E=new WeakMap;
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.1.2");const O=(t,...s)=>new y(t,s,"html",$),U=133;
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */function N(t,s){const{element:{content:e},parts:i}=t,n=document.createTreeWalker(e,U,null,!1);let o=F(i),r=i[o],h=-1,c=0;const l=[];let a=null;for(;n.nextNode();){h++;const t=n.currentNode;for(t.previousSibling===a&&(a=null),s.has(t)&&(l.push(t),null===a&&(a=t)),null!==a&&c++;void 0!==r&&r.index===h;)r.index=null!==a?-1:r.index-c,o=F(i,o),r=i[o]}l.forEach(t=>t.parentNode.removeChild(t))}const V=t=>{let s=11===t.nodeType?0:1;const e=document.createTreeWalker(t,U,null,!1);for(;e.nextNode();)s++;return s},F=(t,s=-1)=>{for(let e=s+1;e<t.length;e++){const s=t[e];if(d(s))return e}return-1};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const I=(t,s)=>`${t}--${s}`;let R=!0;void 0===window.ShadyCSS?R=!1:void 0===window.ShadyCSS.prepareTemplateDom&&(console.warn("Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1."),R=!1);const q=t=>s=>{const e=I(s.type,t);let i=j.get(e);void 0===i&&(i={stringsArray:new WeakMap,keyString:new Map},j.set(e,i));let n=i.stringsArray.get(s.strings);if(void 0!==n)return n;const o=s.strings.join(r);if(n=i.keyString.get(o),void 0===n){const e=s.getTemplateElement();R&&window.ShadyCSS.prepareTemplateDom(e,t),n=new a(s,e),i.keyString.set(o,n)}return i.stringsArray.set(s.strings,n),n},z=["html","svg"],W=new Set,H=(t,s,e)=>{W.add(t);const i=e?e.element:document.createElement("template"),n=s.querySelectorAll("style"),{length:o}=n;if(0===o)return void window.ShadyCSS.prepareTemplateStyles(i,t);const r=document.createElement("style");for(let t=0;t<o;t++){const s=n[t];s.parentNode.removeChild(s),r.textContent+=s.textContent}(t=>{z.forEach(s=>{const e=j.get(I(s,t));void 0!==e&&e.keyString.forEach(t=>{const{element:{content:s}}=t,e=new Set;Array.from(s.querySelectorAll("style")).forEach(t=>{e.add(t)}),N(t,e)})})})(t);const h=i.content;e?function(t,s,e=null){const{element:{content:i},parts:n}=t;if(null==e)return void i.appendChild(s);const o=document.createTreeWalker(i,U,null,!1);let r=F(n),h=0,c=-1;for(;o.nextNode();){for(c++,o.currentNode===e&&(h=V(s),e.parentNode.insertBefore(s,e));-1!==r&&n[r].index===c;){if(h>0){for(;-1!==r;)n[r].index+=h,r=F(n,r);return}r=F(n,r)}}}(e,r,h.firstChild):h.insertBefore(r,h.firstChild),window.ShadyCSS.prepareTemplateStyles(i,t);const c=h.querySelector("style");if(window.ShadyCSS.nativeShadow&&null!==c)s.insertBefore(c.cloneNode(!0),s.firstChild);else if(e){h.insertBefore(r,h.firstChild);const t=new Set;t.add(r),N(e,t)}};window.JSCompiler_renameProperty=(t,s)=>t;const J={toAttribute(t,s){switch(s){case Boolean:return t?"":null;case Object:case Array:return null==t?t:JSON.stringify(t)}return t},fromAttribute(t,s){switch(s){case Boolean:return null!==t;case Number:return null===t?null:Number(t);case Object:case Array:return JSON.parse(t)}return t}},L=(t,s)=>s!==t&&(s==s||t==t),B={attribute:!0,type:String,converter:J,reflect:!1,hasChanged:L},D=Promise.resolve(!0),G=1,K=4,Q=8,X=16,Y=32,Z="finalized";class tt extends HTMLElement{constructor(){super(),this._updateState=0,this._instanceProperties=void 0,this._updatePromise=D,this._hasConnectedResolver=void 0,this._changedProperties=new Map,this._reflectingProperties=void 0,this.initialize()}static get observedAttributes(){this.finalize();const t=[];return this._classProperties.forEach((s,e)=>{const i=this._attributeNameForProperty(e,s);void 0!==i&&(this._attributeToPropertyMap.set(i,e),t.push(i))}),t}static _ensureClassProperties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties",this))){this._classProperties=new Map;const t=Object.getPrototypeOf(this)._classProperties;void 0!==t&&t.forEach((t,s)=>this._classProperties.set(s,t))}}static createProperty(t,s=B){if(this._ensureClassProperties(),this._classProperties.set(t,s),s.noAccessor||this.prototype.hasOwnProperty(t))return;const e="symbol"==typeof t?Symbol():`__${t}`;Object.defineProperty(this.prototype,t,{get(){return this[e]},set(s){const i=this[t];this[e]=s,this._requestUpdate(t,i)},configurable:!0,enumerable:!0})}static finalize(){const t=Object.getPrototypeOf(this);if(t.hasOwnProperty(Z)||t.finalize(),this[Z]=!0,this._ensureClassProperties(),this._attributeToPropertyMap=new Map,this.hasOwnProperty(JSCompiler_renameProperty("properties",this))){const t=this.properties,s=[...Object.getOwnPropertyNames(t),..."function"==typeof Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(t):[]];for(const e of s)this.createProperty(e,t[e])}}static _attributeNameForProperty(t,s){const e=s.attribute;return!1===e?void 0:"string"==typeof e?e:"string"==typeof t?t.toLowerCase():void 0}static _valueHasChanged(t,s,e=L){return e(t,s)}static _propertyValueFromAttribute(t,s){const e=s.type,i=s.converter||J,n="function"==typeof i?i:i.fromAttribute;return n?n(t,e):t}static _propertyValueToAttribute(t,s){if(void 0===s.reflect)return;const e=s.type,i=s.converter;return(i&&i.toAttribute||J.toAttribute)(t,e)}initialize(){this._saveInstanceProperties(),this._requestUpdate()}_saveInstanceProperties(){this.constructor._classProperties.forEach((t,s)=>{if(this.hasOwnProperty(s)){const t=this[s];delete this[s],this._instanceProperties||(this._instanceProperties=new Map),this._instanceProperties.set(s,t)}})}_applyInstanceProperties(){this._instanceProperties.forEach((t,s)=>this[s]=t),this._instanceProperties=void 0}connectedCallback(){this._updateState=this._updateState|Y,this._hasConnectedResolver&&(this._hasConnectedResolver(),this._hasConnectedResolver=void 0)}disconnectedCallback(){}attributeChangedCallback(t,s,e){s!==e&&this._attributeToProperty(t,e)}_propertyToAttribute(t,s,e=B){const i=this.constructor,n=i._attributeNameForProperty(t,e);if(void 0!==n){const t=i._propertyValueToAttribute(s,e);if(void 0===t)return;this._updateState=this._updateState|Q,null==t?this.removeAttribute(n):this.setAttribute(n,t),this._updateState=this._updateState&~Q}}_attributeToProperty(t,s){if(this._updateState&Q)return;const e=this.constructor,i=e._attributeToPropertyMap.get(t);if(void 0!==i){const t=e._classProperties.get(i)||B;this._updateState=this._updateState|X,this[i]=e._propertyValueFromAttribute(s,t),this._updateState=this._updateState&~X}}_requestUpdate(t,s){let e=!0;if(void 0!==t){const i=this.constructor,n=i._classProperties.get(t)||B;i._valueHasChanged(this[t],s,n.hasChanged)?(this._changedProperties.has(t)||this._changedProperties.set(t,s),!0!==n.reflect||this._updateState&X||(void 0===this._reflectingProperties&&(this._reflectingProperties=new Map),this._reflectingProperties.set(t,n))):e=!1}!this._hasRequestedUpdate&&e&&this._enqueueUpdate()}requestUpdate(t,s){return this._requestUpdate(t,s),this.updateComplete}async _enqueueUpdate(){let t,s;this._updateState=this._updateState|K;const e=this._updatePromise;this._updatePromise=new Promise((e,i)=>{t=e,s=i});try{await e}catch(t){}this._hasConnected||await new Promise(t=>this._hasConnectedResolver=t);try{const t=this.performUpdate();null!=t&&await t}catch(t){s(t)}t(!this._hasRequestedUpdate)}get _hasConnected(){return this._updateState&Y}get _hasRequestedUpdate(){return this._updateState&K}get hasUpdated(){return this._updateState&G}performUpdate(){this._instanceProperties&&this._applyInstanceProperties();let t=!1;const s=this._changedProperties;try{t=this.shouldUpdate(s),t&&this.update(s)}catch(s){throw t=!1,s}finally{this._markUpdated()}t&&(this._updateState&G||(this._updateState=this._updateState|G,this.firstUpdated(s)),this.updated(s))}_markUpdated(){this._changedProperties=new Map,this._updateState=this._updateState&~K}get updateComplete(){return this._getUpdateComplete()}_getUpdateComplete(){return this._updatePromise}shouldUpdate(t){return!0}update(t){void 0!==this._reflectingProperties&&this._reflectingProperties.size>0&&(this._reflectingProperties.forEach((t,s)=>this._propertyToAttribute(s,this[s],t)),this._reflectingProperties=void 0)}updated(t){}firstUpdated(t){}}tt[Z]=!0;
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const st=t=>s=>"function"==typeof s?((t,s)=>(window.customElements.define(t,s),s))(t,s):((t,s)=>{const{kind:e,elements:i}=s;return{kind:e,elements:i,finisher(s){window.customElements.define(t,s)}}})(t,s),et=(t,s)=>"method"!==s.kind||!s.descriptor||"value"in s.descriptor?{kind:"field",key:Symbol(),placement:"own",descriptor:{},initializer(){"function"==typeof s.initializer&&(this[s.key]=s.initializer.call(this))},finisher(e){e.createProperty(s.key,t)}}:Object.assign({},s,{finisher(e){e.createProperty(s.key,t)}}),it=(t,s,e)=>{s.constructor.createProperty(e,t)};function nt(t){return(s,e)=>void 0!==e?it(t,s,e):et(t,s)}
/**
@license
Copyright (c) 2019 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/const ot="adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,rt=Symbol();class ht{constructor(t,s){if(s!==rt)throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t}get styleSheet(){return void 0===this._styleSheet&&(ot?(this._styleSheet=new CSSStyleSheet,this._styleSheet.replaceSync(this.cssText)):this._styleSheet=null),this._styleSheet}toString(){return this.cssText}}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
(window.litElementVersions||(window.litElementVersions=[])).push("2.2.1");const ct=t=>t.flat?t.flat(1/0):function t(s,e=[]){for(let i=0,n=s.length;i<n;i++){const n=s[i];Array.isArray(n)?t(n,e):e.push(n)}return e}(t);class lt extends tt{static finalize(){super.finalize.call(this),this._styles=this.hasOwnProperty(JSCompiler_renameProperty("styles",this))?this._getUniqueStyles():this._styles||[]}static _getUniqueStyles(){const t=this.styles,s=[];if(Array.isArray(t)){ct(t).reduceRight((t,s)=>(t.add(s),t),new Set).forEach(t=>s.unshift(t))}else t&&s.push(t);return s}initialize(){super.initialize(),this.renderRoot=this.createRenderRoot(),window.ShadowRoot&&this.renderRoot instanceof window.ShadowRoot&&this.adoptStyles()}createRenderRoot(){return this.attachShadow({mode:"open"})}adoptStyles(){const t=this.constructor._styles;0!==t.length&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow?ot?this.renderRoot.adoptedStyleSheets=t.map(t=>t.styleSheet):this._needsShimAdoptedStyleSheets=!0:window.ShadyCSS.ScopingShim.prepareAdoptedCssText(t.map(t=>t.cssText),this.localName))}connectedCallback(){super.connectedCallback(),this.hasUpdated&&void 0!==window.ShadyCSS&&window.ShadyCSS.styleElement(this)}update(t){super.update(t);const s=this.render();s instanceof y&&this.constructor.render(s,this.renderRoot,{scopeName:this.localName,eventContext:this}),this._needsShimAdoptedStyleSheets&&(this._needsShimAdoptedStyleSheets=!1,this.constructor._styles.forEach(t=>{const s=document.createElement("style");s.textContent=t.cssText,this.renderRoot.appendChild(s)}))}render(){}}lt.finalized=!0,lt.render=(t,s,e)=>{if(!e||"object"!=typeof e||!e.scopeName)throw new Error("The `scopeName` option is required.");const n=e.scopeName,o=E.has(s),r=R&&11===s.nodeType&&!!s.host,h=r&&!W.has(n),c=h?document.createDocumentFragment():s;if(((t,s,e)=>{let n=E.get(s);void 0===n&&(i(s,s.firstChild),E.set(s,n=new S(Object.assign({templateFactory:M},e))),n.appendInto(s)),n.setValue(t),n.commit()})(t,c,Object.assign({templateFactory:q(n)},e)),h){const t=E.get(c);E.delete(c);const e=t.value instanceof m?t.value.template:void 0;H(n,c,e),i(s,s.firstChild),s.appendChild(c),E.set(s,t)}!o&&r&&window.ShadyCSS.styleElement(s.host)};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const at=new WeakMap,ut=(s=>(...e)=>{const i=s(...e);return t.set(i,!0),i})((...t)=>s=>{let e=at.get(s);void 0===e&&(e={lastRenderedIndex:2147483647,values:[]},at.set(s,e));const i=e.values;let n=i.length;e.values=t;for(let o=0;o<t.length&&!(o>e.lastRenderedIndex);o++){const r=t[o];if(v(r)||"function"!=typeof r.then){s.setValue(r),e.lastRenderedIndex=o;break}o<n&&r===i[o]||(e.lastRenderedIndex=2147483647,n=0,Promise.resolve(r).then(t=>{const i=e.values.indexOf(r);i>-1&&i<e.lastRenderedIndex&&(e.lastRenderedIndex=i,s.setValue(t),s.commit())}))}});
/**
 * @license
 * Copyright (c) 2019 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
var dt=function(t,s,e,i){for(var n,o=arguments.length,r=o<3?s:null===i?i=Object.getOwnPropertyDescriptor(s,e):i,h=t.length-1;h>=0;h--)(n=t[h])&&(r=(o<3?n(r):o>3?n(s,e,r):n(s,e))||r);return o>3&&r&&Object.defineProperty(s,e,r),r};let ft=class extends lt{constructor(){super(),this.title=""}render(){return console.log("sub-render() -> start..."),O`
      <h2>Hello from sub element ${this.title}.</h2>
    `}};dt([nt({type:String})],ft.prototype,"title",void 0),ft=dt([st("sub-element")],ft);
/**
 * @license
 * Copyright (c) 2019 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
var pt=function(t,s,e,i){for(var n,o=arguments.length,r=o<3?s:null===i?i=Object.getOwnPropertyDescriptor(s,e):i,h=t.length-1;h>=0;h--)(n=t[h])&&(r=(o<3?n(r):o>3?n(s,e,r):n(s,e))||r);return o>3&&r&&Object.defineProperty(s,e,r),r};let mt=class extends lt{constructor(){super(),this.externalTestData=O``,this.name="World",this.timerValue=0,this.displayToken="",this.count=0,this.getExternalData=t=>{const s=(t=>new Promise(s=>{setTimeout(()=>s(t),6e3)}))(t).then(t=>(console.log("External data is loaded..."),t));return O`<h1>${ut(s,"Loading External Data...")}</h1>`},console.log("constructor..."),this.externalTestData=this.getExternalData("Test external data load")}render(){return console.log("render() -> start..."),!this.timerRef&&(this.timerRef=setTimeout(()=>{console.log("setTimeout..."),this.timerValue++},2e3)),O`
      <h1>Hello ${this.timerValue}, ${this.name}!</h1>
      <sub-element title='sub-element-1'></sub-element>
      <div>
          ${this.externalTestData}
      </div>
      <button @click=${this._onClick} part="button">
        Click Count: ${this.count}
      </button>
      <sub-element title='sub-element-2'></sub-element>
      <slot></slot>
    `}_onClick(){this.count++,console.log(`Clicked -> displayToken = ${this.displayToken}`)}foo(){return"foo"}};mt.styles=((t,...s)=>{const e=s.reduce((s,e,i)=>s+(t=>{if(t instanceof ht)return t.cssText;if("number"==typeof t)return t;throw new Error(`Value passed to 'css' function must be a 'css' function result: ${t}. Use 'unsafeCSS' to pass non-literal values, but\n            take care to ensure page security.`)})(e)+t[i+1],t[0]);return new ht(e,rt)})`
    :host {
      display: block;
      border: solid 1px gray;
      padding: 16px;
      max-width: 800px;
    }
  `,pt([nt({type:y,attribute:!1})],mt.prototype,"externalTestData",void 0),pt([nt({type:String})],mt.prototype,"name",void 0),pt([nt({type:Number,attribute:!1})],mt.prototype,"timerValue",void 0),pt([nt({type:String})],mt.prototype,"displayToken",void 0),pt([nt({type:Number})],mt.prototype,"count",void 0),mt=pt([st("my-element")],mt);export{mt as MyElement};
