function sD(i,n){return function(){return i.apply(n,arguments)}}const{toString:Rj}=Object.prototype,{getPrototypeOf:Hk}=Object,af=(i=>n=>{const r=Rj.call(n);return i[r]||(i[r]=r.slice(8,-1).toLowerCase())})(Object.create(null)),tr=i=>(i=i.toLowerCase(),n=>af(n)===i),lf=i=>n=>typeof n===i,{isArray:ic}=Array,Wd=lf("undefined");function Fj(i){return i!==null&&!Wd(i)&&i.constructor!==null&&!Wd(i.constructor)&&ri(i.constructor.isBuffer)&&i.constructor.isBuffer(i)}const aD=tr("ArrayBuffer");function zj(i){let n;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?n=ArrayBuffer.isView(i):n=i&&i.buffer&&aD(i.buffer),n}const jj=lf("string"),ri=lf("function"),lD=lf("number"),cf=i=>i!==null&&typeof i=="object",$j=i=>i===!0||i===!1,up=i=>{if(af(i)!=="object")return!1;const n=Hk(i);return(n===null||n===Object.prototype||Object.getPrototypeOf(n)===null)&&!(Symbol.toStringTag in i)&&!(Symbol.iterator in i)},Vj=tr("Date"),Hj=tr("File"),Uj=tr("Blob"),qj=tr("FileList"),Gj=i=>cf(i)&&ri(i.pipe),Wj=i=>{let n;return i&&(typeof FormData=="function"&&i instanceof FormData||ri(i.append)&&((n=af(i))==="formdata"||n==="object"&&ri(i.toString)&&i.toString()==="[object FormData]"))},Kj=tr("URLSearchParams"),Yj=i=>i.trim?i.trim():i.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function lu(i,n,{allOwnKeys:r=!1}={}){if(i===null||typeof i>"u")return;let l,u;if(typeof i!="object"&&(i=[i]),ic(i))for(l=0,u=i.length;l<u;l++)n.call(null,i[l],l,i);else{const p=r?Object.getOwnPropertyNames(i):Object.keys(i),f=p.length;let b;for(l=0;l<f;l++)b=p[l],n.call(null,i[b],b,i)}}function cD(i,n){n=n.toLowerCase();const r=Object.keys(i);let l=r.length,u;for(;l-- >0;)if(u=r[l],n===u.toLowerCase())return u;return null}const dD=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,uD=i=>!Wd(i)&&i!==dD;function Yb(){const{caseless:i}=uD(this)&&this||{},n={},r=(l,u)=>{const p=i&&cD(n,u)||u;up(n[p])&&up(l)?n[p]=Yb(n[p],l):up(l)?n[p]=Yb({},l):ic(l)?n[p]=l.slice():n[p]=l};for(let l=0,u=arguments.length;l<u;l++)arguments[l]&&lu(arguments[l],r);return n}const Qj=(i,n,r,{allOwnKeys:l}={})=>(lu(n,(u,p)=>{r&&ri(u)?i[p]=sD(u,r):i[p]=u},{allOwnKeys:l}),i),Zj=i=>(i.charCodeAt(0)===65279&&(i=i.slice(1)),i),Jj=(i,n,r,l)=>{i.prototype=Object.create(n.prototype,l),i.prototype.constructor=i,Object.defineProperty(i,"super",{value:n.prototype}),r&&Object.assign(i.prototype,r)},Xj=(i,n,r,l)=>{let u,p,f;const b={};if(n=n||{},i==null)return n;do{for(u=Object.getOwnPropertyNames(i),p=u.length;p-- >0;)f=u[p],(!l||l(f,i,n))&&!b[f]&&(n[f]=i[f],b[f]=!0);i=r!==!1&&Hk(i)}while(i&&(!r||r(i,n))&&i!==Object.prototype);return n},e8=(i,n,r)=>{i=String(i),(r===void 0||r>i.length)&&(r=i.length),r-=n.length;const l=i.indexOf(n,r);return l!==-1&&l===r},t8=i=>{if(!i)return null;if(ic(i))return i;let n=i.length;if(!lD(n))return null;const r=new Array(n);for(;n-- >0;)r[n]=i[n];return r},n8=(i=>n=>i&&n instanceof i)(typeof Uint8Array<"u"&&Hk(Uint8Array)),o8=(i,n)=>{const l=(i&&i[Symbol.iterator]).call(i);let u;for(;(u=l.next())&&!u.done;){const p=u.value;n.call(i,p[0],p[1])}},i8=(i,n)=>{let r;const l=[];for(;(r=i.exec(n))!==null;)l.push(r);return l},r8=tr("HTMLFormElement"),s8=i=>i.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(r,l,u){return l.toUpperCase()+u}),N2=(({hasOwnProperty:i})=>(n,r)=>i.call(n,r))(Object.prototype),a8=tr("RegExp"),hD=(i,n)=>{const r=Object.getOwnPropertyDescriptors(i),l={};lu(r,(u,p)=>{let f;(f=n(u,p,i))!==!1&&(l[p]=f||u)}),Object.defineProperties(i,l)},l8=i=>{hD(i,(n,r)=>{if(ri(i)&&["arguments","caller","callee"].indexOf(r)!==-1)return!1;const l=i[r];if(ri(l)){if(n.enumerable=!1,"writable"in n){n.writable=!1;return}n.set||(n.set=()=>{throw Error("Can not rewrite read-only method '"+r+"'")})}})},c8=(i,n)=>{const r={},l=u=>{u.forEach(p=>{r[p]=!0})};return ic(i)?l(i):l(String(i).split(n)),r},d8=()=>{},u8=(i,n)=>(i=+i,Number.isFinite(i)?i:n),Wg="abcdefghijklmnopqrstuvwxyz",L2="0123456789",pD={DIGIT:L2,ALPHA:Wg,ALPHA_DIGIT:Wg+Wg.toUpperCase()+L2},h8=(i=16,n=pD.ALPHA_DIGIT)=>{let r="";const{length:l}=n;for(;i--;)r+=n[Math.random()*l|0];return r};function p8(i){return!!(i&&ri(i.append)&&i[Symbol.toStringTag]==="FormData"&&i[Symbol.iterator])}const f8=i=>{const n=new Array(10),r=(l,u)=>{if(cf(l)){if(n.indexOf(l)>=0)return;if(!("toJSON"in l)){n[u]=l;const p=ic(l)?[]:{};return lu(l,(f,b)=>{const m=r(f,u+1);!Wd(m)&&(p[b]=m)}),n[u]=void 0,p}}return l};return r(i,0)},m8=tr("AsyncFunction"),g8=i=>i&&(cf(i)||ri(i))&&ri(i.then)&&ri(i.catch),ke={isArray:ic,isArrayBuffer:aD,isBuffer:Fj,isFormData:Wj,isArrayBufferView:zj,isString:jj,isNumber:lD,isBoolean:$j,isObject:cf,isPlainObject:up,isUndefined:Wd,isDate:Vj,isFile:Hj,isBlob:Uj,isRegExp:a8,isFunction:ri,isStream:Gj,isURLSearchParams:Kj,isTypedArray:n8,isFileList:qj,forEach:lu,merge:Yb,extend:Qj,trim:Yj,stripBOM:Zj,inherits:Jj,toFlatObject:Xj,kindOf:af,kindOfTest:tr,endsWith:e8,toArray:t8,forEachEntry:o8,matchAll:i8,isHTMLForm:r8,hasOwnProperty:N2,hasOwnProp:N2,reduceDescriptors:hD,freezeMethods:l8,toObjectSet:c8,toCamelCase:s8,noop:d8,toFiniteNumber:u8,findKey:cD,global:dD,isContextDefined:uD,ALPHABET:pD,generateString:h8,isSpecCompliantForm:p8,toJSONObject:f8,isAsyncFn:m8,isThenable:g8};function Ct(i,n,r,l,u){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=i,this.name="AxiosError",n&&(this.code=n),r&&(this.config=r),l&&(this.request=l),u&&(this.response=u)}ke.inherits(Ct,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:ke.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const fD=Ct.prototype,mD={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(i=>{mD[i]={value:i}});Object.defineProperties(Ct,mD);Object.defineProperty(fD,"isAxiosError",{value:!0});Ct.from=(i,n,r,l,u,p)=>{const f=Object.create(fD);return ke.toFlatObject(i,f,function(m){return m!==Error.prototype},b=>b!=="isAxiosError"),Ct.call(f,i.message,n,r,l,u),f.cause=i,f.name=i.name,p&&Object.assign(f,p),f};const b8=null;function Qb(i){return ke.isPlainObject(i)||ke.isArray(i)}function gD(i){return ke.endsWith(i,"[]")?i.slice(0,-2):i}function R2(i,n,r){return i?i.concat(n).map(function(u,p){return u=gD(u),!r&&p?"["+u+"]":u}).join(r?".":""):n}function k8(i){return ke.isArray(i)&&!i.some(Qb)}const _8=ke.toFlatObject(ke,{},null,function(n){return/^is[A-Z]/.test(n)});function df(i,n,r){if(!ke.isObject(i))throw new TypeError("target must be an object");n=n||new FormData,r=ke.toFlatObject(r,{metaTokens:!0,dots:!1,indexes:!1},!1,function(I,F){return!ke.isUndefined(F[I])});const l=r.metaTokens,u=r.visitor||A,p=r.dots,f=r.indexes,m=(r.Blob||typeof Blob<"u"&&Blob)&&ke.isSpecCompliantForm(n);if(!ke.isFunction(u))throw new TypeError("visitor must be a function");function v(T){if(T===null)return"";if(ke.isDate(T))return T.toISOString();if(!m&&ke.isBlob(T))throw new Ct("Blob is not supported. Use a Buffer instead.");return ke.isArrayBuffer(T)||ke.isTypedArray(T)?m&&typeof Blob=="function"?new Blob([T]):Buffer.from(T):T}function A(T,I,F){let N=T;if(T&&!F&&typeof T=="object"){if(ke.endsWith(I,"{}"))I=l?I:I.slice(0,-2),T=JSON.stringify(T);else if(ke.isArray(T)&&k8(T)||(ke.isFileList(T)||ke.endsWith(I,"[]"))&&(N=ke.toArray(T)))return I=gD(I),N.forEach(function(B,z){!(ke.isUndefined(B)||B===null)&&n.append(f===!0?R2([I],z,p):f===null?I:I+"[]",v(B))}),!1}return Qb(T)?!0:(n.append(R2(F,I,p),v(T)),!1)}const x=[],y=Object.assign(_8,{defaultVisitor:A,convertValue:v,isVisitable:Qb});function S(T,I){if(!ke.isUndefined(T)){if(x.indexOf(T)!==-1)throw Error("Circular reference detected in "+I.join("."));x.push(T),ke.forEach(T,function(N,L){(!(ke.isUndefined(N)||N===null)&&u.call(n,N,ke.isString(L)?L.trim():L,I,y))===!0&&S(N,I?I.concat(L):[L])}),x.pop()}}if(!ke.isObject(i))throw new TypeError("data must be an object");return S(i),n}function F2(i){const n={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(i).replace(/[!'()~]|%20|%00/g,function(l){return n[l]})}function Uk(i,n){this._pairs=[],i&&df(i,this,n)}const bD=Uk.prototype;bD.append=function(n,r){this._pairs.push([n,r])};bD.toString=function(n){const r=n?function(l){return n.call(this,l,F2)}:F2;return this._pairs.map(function(u){return r(u[0])+"="+r(u[1])},"").join("&")};function w8(i){return encodeURIComponent(i).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function kD(i,n,r){if(!n)return i;const l=r&&r.encode||w8,u=r&&r.serialize;let p;if(u?p=u(n,r):p=ke.isURLSearchParams(n)?n.toString():new Uk(n,r).toString(l),p){const f=i.indexOf("#");f!==-1&&(i=i.slice(0,f)),i+=(i.indexOf("?")===-1?"?":"&")+p}return i}class z2{constructor(){this.handlers=[]}use(n,r,l){return this.handlers.push({fulfilled:n,rejected:r,synchronous:l?l.synchronous:!1,runWhen:l?l.runWhen:null}),this.handlers.length-1}eject(n){this.handlers[n]&&(this.handlers[n]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(n){ke.forEach(this.handlers,function(l){l!==null&&n(l)})}}const _D={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},v8=typeof URLSearchParams<"u"?URLSearchParams:Uk,A8=typeof FormData<"u"?FormData:null,C8=typeof Blob<"u"?Blob:null,y8={isBrowser:!0,classes:{URLSearchParams:v8,FormData:A8,Blob:C8},protocols:["http","https","file","blob","url","data"]},wD=typeof window<"u"&&typeof document<"u",x8=(i=>wD&&["ReactNative","NativeScript","NS"].indexOf(i)<0)(typeof navigator<"u"&&navigator.product),E8=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",S8=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:wD,hasStandardBrowserEnv:x8,hasStandardBrowserWebWorkerEnv:E8},Symbol.toStringTag,{value:"Module"})),Qi={...S8,...y8};function T8(i,n){return df(i,new Qi.classes.URLSearchParams,Object.assign({visitor:function(r,l,u,p){return Qi.isNode&&ke.isBuffer(r)?(this.append(l,r.toString("base64")),!1):p.defaultVisitor.apply(this,arguments)}},n))}function D8(i){return ke.matchAll(/\w+|\[(\w*)]/g,i).map(n=>n[0]==="[]"?"":n[1]||n[0])}function I8(i){const n={},r=Object.keys(i);let l;const u=r.length;let p;for(l=0;l<u;l++)p=r[l],n[p]=i[p];return n}function vD(i){function n(r,l,u,p){let f=r[p++];if(f==="__proto__")return!0;const b=Number.isFinite(+f),m=p>=r.length;return f=!f&&ke.isArray(u)?u.length:f,m?(ke.hasOwnProp(u,f)?u[f]=[u[f],l]:u[f]=l,!b):((!u[f]||!ke.isObject(u[f]))&&(u[f]=[]),n(r,l,u[f],p)&&ke.isArray(u[f])&&(u[f]=I8(u[f])),!b)}if(ke.isFormData(i)&&ke.isFunction(i.entries)){const r={};return ke.forEachEntry(i,(l,u)=>{n(D8(l),u,r,0)}),r}return null}function M8(i,n,r){if(ke.isString(i))try{return(n||JSON.parse)(i),ke.trim(i)}catch(l){if(l.name!=="SyntaxError")throw l}return(r||JSON.stringify)(i)}const qk={transitional:_D,adapter:["xhr","http"],transformRequest:[function(n,r){const l=r.getContentType()||"",u=l.indexOf("application/json")>-1,p=ke.isObject(n);if(p&&ke.isHTMLForm(n)&&(n=new FormData(n)),ke.isFormData(n))return u?JSON.stringify(vD(n)):n;if(ke.isArrayBuffer(n)||ke.isBuffer(n)||ke.isStream(n)||ke.isFile(n)||ke.isBlob(n))return n;if(ke.isArrayBufferView(n))return n.buffer;if(ke.isURLSearchParams(n))return r.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),n.toString();let b;if(p){if(l.indexOf("application/x-www-form-urlencoded")>-1)return T8(n,this.formSerializer).toString();if((b=ke.isFileList(n))||l.indexOf("multipart/form-data")>-1){const m=this.env&&this.env.FormData;return df(b?{"files[]":n}:n,m&&new m,this.formSerializer)}}return p||u?(r.setContentType("application/json",!1),M8(n)):n}],transformResponse:[function(n){const r=this.transitional||qk.transitional,l=r&&r.forcedJSONParsing,u=this.responseType==="json";if(n&&ke.isString(n)&&(l&&!this.responseType||u)){const f=!(r&&r.silentJSONParsing)&&u;try{return JSON.parse(n)}catch(b){if(f)throw b.name==="SyntaxError"?Ct.from(b,Ct.ERR_BAD_RESPONSE,this,null,this.response):b}}return n}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:Qi.classes.FormData,Blob:Qi.classes.Blob},validateStatus:function(n){return n>=200&&n<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};ke.forEach(["delete","get","head","post","put","patch"],i=>{qk.headers[i]={}});const Gk=qk,O8=ke.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),B8=i=>{const n={};let r,l,u;return i&&i.split(`
`).forEach(function(f){u=f.indexOf(":"),r=f.substring(0,u).trim().toLowerCase(),l=f.substring(u+1).trim(),!(!r||n[r]&&O8[r])&&(r==="set-cookie"?n[r]?n[r].push(l):n[r]=[l]:n[r]=n[r]?n[r]+", "+l:l)}),n},j2=Symbol("internals");function Ad(i){return i&&String(i).trim().toLowerCase()}function hp(i){return i===!1||i==null?i:ke.isArray(i)?i.map(hp):String(i)}function P8(i){const n=Object.create(null),r=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let l;for(;l=r.exec(i);)n[l[1]]=l[2];return n}const N8=i=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(i.trim());function Kg(i,n,r,l,u){if(ke.isFunction(l))return l.call(this,n,r);if(u&&(n=r),!!ke.isString(n)){if(ke.isString(l))return n.indexOf(l)!==-1;if(ke.isRegExp(l))return l.test(n)}}function L8(i){return i.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(n,r,l)=>r.toUpperCase()+l)}function R8(i,n){const r=ke.toCamelCase(" "+n);["get","set","has"].forEach(l=>{Object.defineProperty(i,l+r,{value:function(u,p,f){return this[l].call(this,n,u,p,f)},configurable:!0})})}class uf{constructor(n){n&&this.set(n)}set(n,r,l){const u=this;function p(b,m,v){const A=Ad(m);if(!A)throw new Error("header name must be a non-empty string");const x=ke.findKey(u,A);(!x||u[x]===void 0||v===!0||v===void 0&&u[x]!==!1)&&(u[x||m]=hp(b))}const f=(b,m)=>ke.forEach(b,(v,A)=>p(v,A,m));return ke.isPlainObject(n)||n instanceof this.constructor?f(n,r):ke.isString(n)&&(n=n.trim())&&!N8(n)?f(B8(n),r):n!=null&&p(r,n,l),this}get(n,r){if(n=Ad(n),n){const l=ke.findKey(this,n);if(l){const u=this[l];if(!r)return u;if(r===!0)return P8(u);if(ke.isFunction(r))return r.call(this,u,l);if(ke.isRegExp(r))return r.exec(u);throw new TypeError("parser must be boolean|regexp|function")}}}has(n,r){if(n=Ad(n),n){const l=ke.findKey(this,n);return!!(l&&this[l]!==void 0&&(!r||Kg(this,this[l],l,r)))}return!1}delete(n,r){const l=this;let u=!1;function p(f){if(f=Ad(f),f){const b=ke.findKey(l,f);b&&(!r||Kg(l,l[b],b,r))&&(delete l[b],u=!0)}}return ke.isArray(n)?n.forEach(p):p(n),u}clear(n){const r=Object.keys(this);let l=r.length,u=!1;for(;l--;){const p=r[l];(!n||Kg(this,this[p],p,n,!0))&&(delete this[p],u=!0)}return u}normalize(n){const r=this,l={};return ke.forEach(this,(u,p)=>{const f=ke.findKey(l,p);if(f){r[f]=hp(u),delete r[p];return}const b=n?L8(p):String(p).trim();b!==p&&delete r[p],r[b]=hp(u),l[b]=!0}),this}concat(...n){return this.constructor.concat(this,...n)}toJSON(n){const r=Object.create(null);return ke.forEach(this,(l,u)=>{l!=null&&l!==!1&&(r[u]=n&&ke.isArray(l)?l.join(", "):l)}),r}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([n,r])=>n+": "+r).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(n){return n instanceof this?n:new this(n)}static concat(n,...r){const l=new this(n);return r.forEach(u=>l.set(u)),l}static accessor(n){const l=(this[j2]=this[j2]={accessors:{}}).accessors,u=this.prototype;function p(f){const b=Ad(f);l[b]||(R8(u,f),l[b]=!0)}return ke.isArray(n)?n.forEach(p):p(n),this}}uf.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);ke.reduceDescriptors(uf.prototype,({value:i},n)=>{let r=n[0].toUpperCase()+n.slice(1);return{get:()=>i,set(l){this[r]=l}}});ke.freezeMethods(uf);const yr=uf;function Yg(i,n){const r=this||Gk,l=n||r,u=yr.from(l.headers);let p=l.data;return ke.forEach(i,function(b){p=b.call(r,p,u.normalize(),n?n.status:void 0)}),u.normalize(),p}function AD(i){return!!(i&&i.__CANCEL__)}function cu(i,n,r){Ct.call(this,i??"canceled",Ct.ERR_CANCELED,n,r),this.name="CanceledError"}ke.inherits(cu,Ct,{__CANCEL__:!0});function F8(i,n,r){const l=r.config.validateStatus;!r.status||!l||l(r.status)?i(r):n(new Ct("Request failed with status code "+r.status,[Ct.ERR_BAD_REQUEST,Ct.ERR_BAD_RESPONSE][Math.floor(r.status/100)-4],r.config,r.request,r))}const z8=Qi.hasStandardBrowserEnv?{write(i,n,r,l,u,p){const f=[i+"="+encodeURIComponent(n)];ke.isNumber(r)&&f.push("expires="+new Date(r).toGMTString()),ke.isString(l)&&f.push("path="+l),ke.isString(u)&&f.push("domain="+u),p===!0&&f.push("secure"),document.cookie=f.join("; ")},read(i){const n=document.cookie.match(new RegExp("(^|;\\s*)("+i+")=([^;]*)"));return n?decodeURIComponent(n[3]):null},remove(i){this.write(i,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function j8(i){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(i)}function $8(i,n){return n?i.replace(/\/?\/$/,"")+"/"+n.replace(/^\/+/,""):i}function CD(i,n){return i&&!j8(n)?$8(i,n):n}const V8=Qi.hasStandardBrowserEnv?function(){const n=/(msie|trident)/i.test(navigator.userAgent),r=document.createElement("a");let l;function u(p){let f=p;return n&&(r.setAttribute("href",f),f=r.href),r.setAttribute("href",f),{href:r.href,protocol:r.protocol?r.protocol.replace(/:$/,""):"",host:r.host,search:r.search?r.search.replace(/^\?/,""):"",hash:r.hash?r.hash.replace(/^#/,""):"",hostname:r.hostname,port:r.port,pathname:r.pathname.charAt(0)==="/"?r.pathname:"/"+r.pathname}}return l=u(window.location.href),function(f){const b=ke.isString(f)?u(f):f;return b.protocol===l.protocol&&b.host===l.host}}():function(){return function(){return!0}}();function H8(i){const n=/^([-+\w]{1,25})(:?\/\/|:)/.exec(i);return n&&n[1]||""}function U8(i,n){i=i||10;const r=new Array(i),l=new Array(i);let u=0,p=0,f;return n=n!==void 0?n:1e3,function(m){const v=Date.now(),A=l[p];f||(f=v),r[u]=m,l[u]=v;let x=p,y=0;for(;x!==u;)y+=r[x++],x=x%i;if(u=(u+1)%i,u===p&&(p=(p+1)%i),v-f<n)return;const S=A&&v-A;return S?Math.round(y*1e3/S):void 0}}function $2(i,n){let r=0;const l=U8(50,250);return u=>{const p=u.loaded,f=u.lengthComputable?u.total:void 0,b=p-r,m=l(b),v=p<=f;r=p;const A={loaded:p,total:f,progress:f?p/f:void 0,bytes:b,rate:m||void 0,estimated:m&&f&&v?(f-p)/m:void 0,event:u};A[n?"download":"upload"]=!0,i(A)}}const q8=typeof XMLHttpRequest<"u",G8=q8&&function(i){return new Promise(function(r,l){let u=i.data;const p=yr.from(i.headers).normalize();let{responseType:f,withXSRFToken:b}=i,m;function v(){i.cancelToken&&i.cancelToken.unsubscribe(m),i.signal&&i.signal.removeEventListener("abort",m)}let A;if(ke.isFormData(u)){if(Qi.hasStandardBrowserEnv||Qi.hasStandardBrowserWebWorkerEnv)p.setContentType(!1);else if((A=p.getContentType())!==!1){const[I,...F]=A?A.split(";").map(N=>N.trim()).filter(Boolean):[];p.setContentType([I||"multipart/form-data",...F].join("; "))}}let x=new XMLHttpRequest;if(i.auth){const I=i.auth.username||"",F=i.auth.password?unescape(encodeURIComponent(i.auth.password)):"";p.set("Authorization","Basic "+btoa(I+":"+F))}const y=CD(i.baseURL,i.url);x.open(i.method.toUpperCase(),kD(y,i.params,i.paramsSerializer),!0),x.timeout=i.timeout;function S(){if(!x)return;const I=yr.from("getAllResponseHeaders"in x&&x.getAllResponseHeaders()),N={data:!f||f==="text"||f==="json"?x.responseText:x.response,status:x.status,statusText:x.statusText,headers:I,config:i,request:x};F8(function(B){r(B),v()},function(B){l(B),v()},N),x=null}if("onloadend"in x?x.onloadend=S:x.onreadystatechange=function(){!x||x.readyState!==4||x.status===0&&!(x.responseURL&&x.responseURL.indexOf("file:")===0)||setTimeout(S)},x.onabort=function(){x&&(l(new Ct("Request aborted",Ct.ECONNABORTED,i,x)),x=null)},x.onerror=function(){l(new Ct("Network Error",Ct.ERR_NETWORK,i,x)),x=null},x.ontimeout=function(){let F=i.timeout?"timeout of "+i.timeout+"ms exceeded":"timeout exceeded";const N=i.transitional||_D;i.timeoutErrorMessage&&(F=i.timeoutErrorMessage),l(new Ct(F,N.clarifyTimeoutError?Ct.ETIMEDOUT:Ct.ECONNABORTED,i,x)),x=null},Qi.hasStandardBrowserEnv&&(b&&ke.isFunction(b)&&(b=b(i)),b||b!==!1&&V8(y))){const I=i.xsrfHeaderName&&i.xsrfCookieName&&z8.read(i.xsrfCookieName);I&&p.set(i.xsrfHeaderName,I)}u===void 0&&p.setContentType(null),"setRequestHeader"in x&&ke.forEach(p.toJSON(),function(F,N){x.setRequestHeader(N,F)}),ke.isUndefined(i.withCredentials)||(x.withCredentials=!!i.withCredentials),f&&f!=="json"&&(x.responseType=i.responseType),typeof i.onDownloadProgress=="function"&&x.addEventListener("progress",$2(i.onDownloadProgress,!0)),typeof i.onUploadProgress=="function"&&x.upload&&x.upload.addEventListener("progress",$2(i.onUploadProgress)),(i.cancelToken||i.signal)&&(m=I=>{x&&(l(!I||I.type?new cu(null,i,x):I),x.abort(),x=null)},i.cancelToken&&i.cancelToken.subscribe(m),i.signal&&(i.signal.aborted?m():i.signal.addEventListener("abort",m)));const T=H8(y);if(T&&Qi.protocols.indexOf(T)===-1){l(new Ct("Unsupported protocol "+T+":",Ct.ERR_BAD_REQUEST,i));return}x.send(u||null)})},Zb={http:b8,xhr:G8};ke.forEach(Zb,(i,n)=>{if(i){try{Object.defineProperty(i,"name",{value:n})}catch{}Object.defineProperty(i,"adapterName",{value:n})}});const V2=i=>`- ${i}`,W8=i=>ke.isFunction(i)||i===null||i===!1,yD={getAdapter:i=>{i=ke.isArray(i)?i:[i];const{length:n}=i;let r,l;const u={};for(let p=0;p<n;p++){r=i[p];let f;if(l=r,!W8(r)&&(l=Zb[(f=String(r)).toLowerCase()],l===void 0))throw new Ct(`Unknown adapter '${f}'`);if(l)break;u[f||"#"+p]=l}if(!l){const p=Object.entries(u).map(([b,m])=>`adapter ${b} `+(m===!1?"is not supported by the environment":"is not available in the build"));let f=n?p.length>1?`since :
`+p.map(V2).join(`
`):" "+V2(p[0]):"as no adapter specified";throw new Ct("There is no suitable adapter to dispatch the request "+f,"ERR_NOT_SUPPORT")}return l},adapters:Zb};function Qg(i){if(i.cancelToken&&i.cancelToken.throwIfRequested(),i.signal&&i.signal.aborted)throw new cu(null,i)}function H2(i){return Qg(i),i.headers=yr.from(i.headers),i.data=Yg.call(i,i.transformRequest),["post","put","patch"].indexOf(i.method)!==-1&&i.headers.setContentType("application/x-www-form-urlencoded",!1),yD.getAdapter(i.adapter||Gk.adapter)(i).then(function(l){return Qg(i),l.data=Yg.call(i,i.transformResponse,l),l.headers=yr.from(l.headers),l},function(l){return AD(l)||(Qg(i),l&&l.response&&(l.response.data=Yg.call(i,i.transformResponse,l.response),l.response.headers=yr.from(l.response.headers))),Promise.reject(l)})}const U2=i=>i instanceof yr?{...i}:i;function jl(i,n){n=n||{};const r={};function l(v,A,x){return ke.isPlainObject(v)&&ke.isPlainObject(A)?ke.merge.call({caseless:x},v,A):ke.isPlainObject(A)?ke.merge({},A):ke.isArray(A)?A.slice():A}function u(v,A,x){if(ke.isUndefined(A)){if(!ke.isUndefined(v))return l(void 0,v,x)}else return l(v,A,x)}function p(v,A){if(!ke.isUndefined(A))return l(void 0,A)}function f(v,A){if(ke.isUndefined(A)){if(!ke.isUndefined(v))return l(void 0,v)}else return l(void 0,A)}function b(v,A,x){if(x in n)return l(v,A);if(x in i)return l(void 0,v)}const m={url:p,method:p,data:p,baseURL:f,transformRequest:f,transformResponse:f,paramsSerializer:f,timeout:f,timeoutMessage:f,withCredentials:f,withXSRFToken:f,adapter:f,responseType:f,xsrfCookieName:f,xsrfHeaderName:f,onUploadProgress:f,onDownloadProgress:f,decompress:f,maxContentLength:f,maxBodyLength:f,beforeRedirect:f,transport:f,httpAgent:f,httpsAgent:f,cancelToken:f,socketPath:f,responseEncoding:f,validateStatus:b,headers:(v,A)=>u(U2(v),U2(A),!0)};return ke.forEach(Object.keys(Object.assign({},i,n)),function(A){const x=m[A]||u,y=x(i[A],n[A],A);ke.isUndefined(y)&&x!==b||(r[A]=y)}),r}const xD="1.6.8",Wk={};["object","boolean","number","function","string","symbol"].forEach((i,n)=>{Wk[i]=function(l){return typeof l===i||"a"+(n<1?"n ":" ")+i}});const q2={};Wk.transitional=function(n,r,l){function u(p,f){return"[Axios v"+xD+"] Transitional option '"+p+"'"+f+(l?". "+l:"")}return(p,f,b)=>{if(n===!1)throw new Ct(u(f," has been removed"+(r?" in "+r:"")),Ct.ERR_DEPRECATED);return r&&!q2[f]&&(q2[f]=!0,console.warn(u(f," has been deprecated since v"+r+" and will be removed in the near future"))),n?n(p,f,b):!0}};function K8(i,n,r){if(typeof i!="object")throw new Ct("options must be an object",Ct.ERR_BAD_OPTION_VALUE);const l=Object.keys(i);let u=l.length;for(;u-- >0;){const p=l[u],f=n[p];if(f){const b=i[p],m=b===void 0||f(b,p,i);if(m!==!0)throw new Ct("option "+p+" must be "+m,Ct.ERR_BAD_OPTION_VALUE);continue}if(r!==!0)throw new Ct("Unknown option "+p,Ct.ERR_BAD_OPTION)}}const Jb={assertOptions:K8,validators:Wk},Zr=Jb.validators;class Sp{constructor(n){this.defaults=n,this.interceptors={request:new z2,response:new z2}}async request(n,r){try{return await this._request(n,r)}catch(l){if(l instanceof Error){let u;Error.captureStackTrace?Error.captureStackTrace(u={}):u=new Error;const p=u.stack?u.stack.replace(/^.+\n/,""):"";l.stack?p&&!String(l.stack).endsWith(p.replace(/^.+\n.+\n/,""))&&(l.stack+=`
`+p):l.stack=p}throw l}}_request(n,r){typeof n=="string"?(r=r||{},r.url=n):r=n||{},r=jl(this.defaults,r);const{transitional:l,paramsSerializer:u,headers:p}=r;l!==void 0&&Jb.assertOptions(l,{silentJSONParsing:Zr.transitional(Zr.boolean),forcedJSONParsing:Zr.transitional(Zr.boolean),clarifyTimeoutError:Zr.transitional(Zr.boolean)},!1),u!=null&&(ke.isFunction(u)?r.paramsSerializer={serialize:u}:Jb.assertOptions(u,{encode:Zr.function,serialize:Zr.function},!0)),r.method=(r.method||this.defaults.method||"get").toLowerCase();let f=p&&ke.merge(p.common,p[r.method]);p&&ke.forEach(["delete","get","head","post","put","patch","common"],T=>{delete p[T]}),r.headers=yr.concat(f,p);const b=[];let m=!0;this.interceptors.request.forEach(function(I){typeof I.runWhen=="function"&&I.runWhen(r)===!1||(m=m&&I.synchronous,b.unshift(I.fulfilled,I.rejected))});const v=[];this.interceptors.response.forEach(function(I){v.push(I.fulfilled,I.rejected)});let A,x=0,y;if(!m){const T=[H2.bind(this),void 0];for(T.unshift.apply(T,b),T.push.apply(T,v),y=T.length,A=Promise.resolve(r);x<y;)A=A.then(T[x++],T[x++]);return A}y=b.length;let S=r;for(x=0;x<y;){const T=b[x++],I=b[x++];try{S=T(S)}catch(F){I.call(this,F);break}}try{A=H2.call(this,S)}catch(T){return Promise.reject(T)}for(x=0,y=v.length;x<y;)A=A.then(v[x++],v[x++]);return A}getUri(n){n=jl(this.defaults,n);const r=CD(n.baseURL,n.url);return kD(r,n.params,n.paramsSerializer)}}ke.forEach(["delete","get","head","options"],function(n){Sp.prototype[n]=function(r,l){return this.request(jl(l||{},{method:n,url:r,data:(l||{}).data}))}});ke.forEach(["post","put","patch"],function(n){function r(l){return function(p,f,b){return this.request(jl(b||{},{method:n,headers:l?{"Content-Type":"multipart/form-data"}:{},url:p,data:f}))}}Sp.prototype[n]=r(),Sp.prototype[n+"Form"]=r(!0)});const pp=Sp;class Kk{constructor(n){if(typeof n!="function")throw new TypeError("executor must be a function.");let r;this.promise=new Promise(function(p){r=p});const l=this;this.promise.then(u=>{if(!l._listeners)return;let p=l._listeners.length;for(;p-- >0;)l._listeners[p](u);l._listeners=null}),this.promise.then=u=>{let p;const f=new Promise(b=>{l.subscribe(b),p=b}).then(u);return f.cancel=function(){l.unsubscribe(p)},f},n(function(p,f,b){l.reason||(l.reason=new cu(p,f,b),r(l.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(n){if(this.reason){n(this.reason);return}this._listeners?this._listeners.push(n):this._listeners=[n]}unsubscribe(n){if(!this._listeners)return;const r=this._listeners.indexOf(n);r!==-1&&this._listeners.splice(r,1)}static source(){let n;return{token:new Kk(function(u){n=u}),cancel:n}}}const Y8=Kk;function Q8(i){return function(r){return i.apply(null,r)}}function Z8(i){return ke.isObject(i)&&i.isAxiosError===!0}const Xb={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(Xb).forEach(([i,n])=>{Xb[n]=i});const J8=Xb;function ED(i){const n=new pp(i),r=sD(pp.prototype.request,n);return ke.extend(r,pp.prototype,n,{allOwnKeys:!0}),ke.extend(r,n,null,{allOwnKeys:!0}),r.create=function(u){return ED(jl(i,u))},r}const dn=ED(Gk);dn.Axios=pp;dn.CanceledError=cu;dn.CancelToken=Y8;dn.isCancel=AD;dn.VERSION=xD;dn.toFormData=df;dn.AxiosError=Ct;dn.Cancel=dn.CanceledError;dn.all=function(n){return Promise.all(n)};dn.spread=Q8;dn.isAxiosError=Z8;dn.mergeConfig=jl;dn.AxiosHeaders=yr;dn.formToJSON=i=>vD(ke.isHTMLForm(i)?new FormData(i):i);dn.getAdapter=yD.getAdapter;dn.HttpStatusCode=J8;dn.default=dn;var Sn=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Ia(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}function SD(i){if(i.__esModule)return i;var n=i.default;if(typeof n=="function"){var r=function l(){return this instanceof l?Reflect.construct(n,arguments,this.constructor):n.apply(this,arguments)};r.prototype=n.prototype}else r={};return Object.defineProperty(r,"__esModule",{value:!0}),Object.keys(i).forEach(function(l){var u=Object.getOwnPropertyDescriptor(i,l);Object.defineProperty(r,l,u.get?u:{enumerable:!0,get:function(){return i[l]}})}),r}var X8=function(n){return e9(n)&&!t9(n)};function e9(i){return!!i&&typeof i=="object"}function t9(i){var n=Object.prototype.toString.call(i);return n==="[object RegExp]"||n==="[object Date]"||i9(i)}var n9=typeof Symbol=="function"&&Symbol.for,o9=n9?Symbol.for("react.element"):60103;function i9(i){return i.$$typeof===o9}function r9(i){return Array.isArray(i)?[]:{}}function Kd(i,n){return n.clone!==!1&&n.isMergeableObject(i)?$l(r9(i),i,n):i}function s9(i,n,r){return i.concat(n).map(function(l){return Kd(l,r)})}function a9(i,n){if(!n.customMerge)return $l;var r=n.customMerge(i);return typeof r=="function"?r:$l}function l9(i){return Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(i).filter(function(n){return Object.propertyIsEnumerable.call(i,n)}):[]}function G2(i){return Object.keys(i).concat(l9(i))}function TD(i,n){try{return n in i}catch{return!1}}function c9(i,n){return TD(i,n)&&!(Object.hasOwnProperty.call(i,n)&&Object.propertyIsEnumerable.call(i,n))}function d9(i,n,r){var l={};return r.isMergeableObject(i)&&G2(i).forEach(function(u){l[u]=Kd(i[u],r)}),G2(n).forEach(function(u){c9(i,u)||(TD(i,u)&&r.isMergeableObject(n[u])?l[u]=a9(u,r)(i[u],n[u],r):l[u]=Kd(n[u],r))}),l}function $l(i,n,r){r=r||{},r.arrayMerge=r.arrayMerge||s9,r.isMergeableObject=r.isMergeableObject||X8,r.cloneUnlessOtherwiseSpecified=Kd;var l=Array.isArray(n),u=Array.isArray(i),p=l===u;return p?l?r.arrayMerge(i,n,r):d9(i,n,r):Kd(n,r)}$l.all=function(n,r){if(!Array.isArray(n))throw new Error("first argument should be an array");return n.reduce(function(l,u){return $l(l,u,r)},{})};var u9=$l,h9=u9;const p9=Ia(h9);var f9=Error,m9=EvalError,g9=RangeError,b9=ReferenceError,DD=SyntaxError,du=TypeError,k9=URIError,_9=function(){if(typeof Symbol!="function"||typeof Object.getOwnPropertySymbols!="function")return!1;if(typeof Symbol.iterator=="symbol")return!0;var n={},r=Symbol("test"),l=Object(r);if(typeof r=="string"||Object.prototype.toString.call(r)!=="[object Symbol]"||Object.prototype.toString.call(l)!=="[object Symbol]")return!1;var u=42;n[r]=u;for(r in n)return!1;if(typeof Object.keys=="function"&&Object.keys(n).length!==0||typeof Object.getOwnPropertyNames=="function"&&Object.getOwnPropertyNames(n).length!==0)return!1;var p=Object.getOwnPropertySymbols(n);if(p.length!==1||p[0]!==r||!Object.prototype.propertyIsEnumerable.call(n,r))return!1;if(typeof Object.getOwnPropertyDescriptor=="function"){var f=Object.getOwnPropertyDescriptor(n,r);if(f.value!==u||f.enumerable!==!0)return!1}return!0},W2=typeof Symbol<"u"&&Symbol,w9=_9,v9=function(){return typeof W2!="function"||typeof Symbol!="function"||typeof W2("foo")!="symbol"||typeof Symbol("bar")!="symbol"?!1:w9()},Zg={__proto__:null,foo:{}},A9=Object,C9=function(){return{__proto__:Zg}.foo===Zg.foo&&!(Zg instanceof A9)},y9="Function.prototype.bind called on incompatible ",x9=Object.prototype.toString,E9=Math.max,S9="[object Function]",K2=function(n,r){for(var l=[],u=0;u<n.length;u+=1)l[u]=n[u];for(var p=0;p<r.length;p+=1)l[p+n.length]=r[p];return l},T9=function(n,r){for(var l=[],u=r||0,p=0;u<n.length;u+=1,p+=1)l[p]=n[u];return l},D9=function(i,n){for(var r="",l=0;l<i.length;l+=1)r+=i[l],l+1<i.length&&(r+=n);return r},I9=function(n){var r=this;if(typeof r!="function"||x9.apply(r)!==S9)throw new TypeError(y9+r);for(var l=T9(arguments,1),u,p=function(){if(this instanceof u){var A=r.apply(this,K2(l,arguments));return Object(A)===A?A:this}return r.apply(n,K2(l,arguments))},f=E9(0,r.length-l.length),b=[],m=0;m<f;m++)b[m]="$"+m;if(u=Function("binder","return function ("+D9(b,",")+"){ return binder.apply(this,arguments); }")(p),r.prototype){var v=function(){};v.prototype=r.prototype,u.prototype=new v,v.prototype=null}return u},M9=I9,Yk=Function.prototype.bind||M9,O9=Function.prototype.call,B9=Object.prototype.hasOwnProperty,P9=Yk,N9=P9.call(O9,B9),mt,L9=f9,R9=m9,F9=g9,z9=b9,Vl=DD,Dl=du,j9=k9,ID=Function,Jg=function(i){try{return ID('"use strict"; return ('+i+").constructor;")()}catch{}},ha=Object.getOwnPropertyDescriptor;if(ha)try{ha({},"")}catch{ha=null}var Xg=function(){throw new Dl},$9=ha?function(){try{return arguments.callee,Xg}catch{try{return ha(arguments,"callee").get}catch{return Xg}}}():Xg,bl=v9(),V9=C9(),Nn=Object.getPrototypeOf||(V9?function(i){return i.__proto__}:null),Al={},H9=typeof Uint8Array>"u"||!Nn?mt:Nn(Uint8Array),pa={__proto__:null,"%AggregateError%":typeof AggregateError>"u"?mt:AggregateError,"%Array%":Array,"%ArrayBuffer%":typeof ArrayBuffer>"u"?mt:ArrayBuffer,"%ArrayIteratorPrototype%":bl&&Nn?Nn([][Symbol.iterator]()):mt,"%AsyncFromSyncIteratorPrototype%":mt,"%AsyncFunction%":Al,"%AsyncGenerator%":Al,"%AsyncGeneratorFunction%":Al,"%AsyncIteratorPrototype%":Al,"%Atomics%":typeof Atomics>"u"?mt:Atomics,"%BigInt%":typeof BigInt>"u"?mt:BigInt,"%BigInt64Array%":typeof BigInt64Array>"u"?mt:BigInt64Array,"%BigUint64Array%":typeof BigUint64Array>"u"?mt:BigUint64Array,"%Boolean%":Boolean,"%DataView%":typeof DataView>"u"?mt:DataView,"%Date%":Date,"%decodeURI%":decodeURI,"%decodeURIComponent%":decodeURIComponent,"%encodeURI%":encodeURI,"%encodeURIComponent%":encodeURIComponent,"%Error%":L9,"%eval%":eval,"%EvalError%":R9,"%Float32Array%":typeof Float32Array>"u"?mt:Float32Array,"%Float64Array%":typeof Float64Array>"u"?mt:Float64Array,"%FinalizationRegistry%":typeof FinalizationRegistry>"u"?mt:FinalizationRegistry,"%Function%":ID,"%GeneratorFunction%":Al,"%Int8Array%":typeof Int8Array>"u"?mt:Int8Array,"%Int16Array%":typeof Int16Array>"u"?mt:Int16Array,"%Int32Array%":typeof Int32Array>"u"?mt:Int32Array,"%isFinite%":isFinite,"%isNaN%":isNaN,"%IteratorPrototype%":bl&&Nn?Nn(Nn([][Symbol.iterator]())):mt,"%JSON%":typeof JSON=="object"?JSON:mt,"%Map%":typeof Map>"u"?mt:Map,"%MapIteratorPrototype%":typeof Map>"u"||!bl||!Nn?mt:Nn(new Map()[Symbol.iterator]()),"%Math%":Math,"%Number%":Number,"%Object%":Object,"%parseFloat%":parseFloat,"%parseInt%":parseInt,"%Promise%":typeof Promise>"u"?mt:Promise,"%Proxy%":typeof Proxy>"u"?mt:Proxy,"%RangeError%":F9,"%ReferenceError%":z9,"%Reflect%":typeof Reflect>"u"?mt:Reflect,"%RegExp%":RegExp,"%Set%":typeof Set>"u"?mt:Set,"%SetIteratorPrototype%":typeof Set>"u"||!bl||!Nn?mt:Nn(new Set()[Symbol.iterator]()),"%SharedArrayBuffer%":typeof SharedArrayBuffer>"u"?mt:SharedArrayBuffer,"%String%":String,"%StringIteratorPrototype%":bl&&Nn?Nn(""[Symbol.iterator]()):mt,"%Symbol%":bl?Symbol:mt,"%SyntaxError%":Vl,"%ThrowTypeError%":$9,"%TypedArray%":H9,"%TypeError%":Dl,"%Uint8Array%":typeof Uint8Array>"u"?mt:Uint8Array,"%Uint8ClampedArray%":typeof Uint8ClampedArray>"u"?mt:Uint8ClampedArray,"%Uint16Array%":typeof Uint16Array>"u"?mt:Uint16Array,"%Uint32Array%":typeof Uint32Array>"u"?mt:Uint32Array,"%URIError%":j9,"%WeakMap%":typeof WeakMap>"u"?mt:WeakMap,"%WeakRef%":typeof WeakRef>"u"?mt:WeakRef,"%WeakSet%":typeof WeakSet>"u"?mt:WeakSet};if(Nn)try{null.error}catch(i){var U9=Nn(Nn(i));pa["%Error.prototype%"]=U9}var q9=function i(n){var r;if(n==="%AsyncFunction%")r=Jg("async function () {}");else if(n==="%GeneratorFunction%")r=Jg("function* () {}");else if(n==="%AsyncGeneratorFunction%")r=Jg("async function* () {}");else if(n==="%AsyncGenerator%"){var l=i("%AsyncGeneratorFunction%");l&&(r=l.prototype)}else if(n==="%AsyncIteratorPrototype%"){var u=i("%AsyncGenerator%");u&&Nn&&(r=Nn(u.prototype))}return pa[n]=r,r},Y2={__proto__:null,"%ArrayBufferPrototype%":["ArrayBuffer","prototype"],"%ArrayPrototype%":["Array","prototype"],"%ArrayProto_entries%":["Array","prototype","entries"],"%ArrayProto_forEach%":["Array","prototype","forEach"],"%ArrayProto_keys%":["Array","prototype","keys"],"%ArrayProto_values%":["Array","prototype","values"],"%AsyncFunctionPrototype%":["AsyncFunction","prototype"],"%AsyncGenerator%":["AsyncGeneratorFunction","prototype"],"%AsyncGeneratorPrototype%":["AsyncGeneratorFunction","prototype","prototype"],"%BooleanPrototype%":["Boolean","prototype"],"%DataViewPrototype%":["DataView","prototype"],"%DatePrototype%":["Date","prototype"],"%ErrorPrototype%":["Error","prototype"],"%EvalErrorPrototype%":["EvalError","prototype"],"%Float32ArrayPrototype%":["Float32Array","prototype"],"%Float64ArrayPrototype%":["Float64Array","prototype"],"%FunctionPrototype%":["Function","prototype"],"%Generator%":["GeneratorFunction","prototype"],"%GeneratorPrototype%":["GeneratorFunction","prototype","prototype"],"%Int8ArrayPrototype%":["Int8Array","prototype"],"%Int16ArrayPrototype%":["Int16Array","prototype"],"%Int32ArrayPrototype%":["Int32Array","prototype"],"%JSONParse%":["JSON","parse"],"%JSONStringify%":["JSON","stringify"],"%MapPrototype%":["Map","prototype"],"%NumberPrototype%":["Number","prototype"],"%ObjectPrototype%":["Object","prototype"],"%ObjProto_toString%":["Object","prototype","toString"],"%ObjProto_valueOf%":["Object","prototype","valueOf"],"%PromisePrototype%":["Promise","prototype"],"%PromiseProto_then%":["Promise","prototype","then"],"%Promise_all%":["Promise","all"],"%Promise_reject%":["Promise","reject"],"%Promise_resolve%":["Promise","resolve"],"%RangeErrorPrototype%":["RangeError","prototype"],"%ReferenceErrorPrototype%":["ReferenceError","prototype"],"%RegExpPrototype%":["RegExp","prototype"],"%SetPrototype%":["Set","prototype"],"%SharedArrayBufferPrototype%":["SharedArrayBuffer","prototype"],"%StringPrototype%":["String","prototype"],"%SymbolPrototype%":["Symbol","prototype"],"%SyntaxErrorPrototype%":["SyntaxError","prototype"],"%TypedArrayPrototype%":["TypedArray","prototype"],"%TypeErrorPrototype%":["TypeError","prototype"],"%Uint8ArrayPrototype%":["Uint8Array","prototype"],"%Uint8ClampedArrayPrototype%":["Uint8ClampedArray","prototype"],"%Uint16ArrayPrototype%":["Uint16Array","prototype"],"%Uint32ArrayPrototype%":["Uint32Array","prototype"],"%URIErrorPrototype%":["URIError","prototype"],"%WeakMapPrototype%":["WeakMap","prototype"],"%WeakSetPrototype%":["WeakSet","prototype"]},uu=Yk,Tp=N9,G9=uu.call(Function.call,Array.prototype.concat),W9=uu.call(Function.apply,Array.prototype.splice),Q2=uu.call(Function.call,String.prototype.replace),Dp=uu.call(Function.call,String.prototype.slice),K9=uu.call(Function.call,RegExp.prototype.exec),Y9=/[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g,Q9=/\\(\\)?/g,Z9=function(n){var r=Dp(n,0,1),l=Dp(n,-1);if(r==="%"&&l!=="%")throw new Vl("invalid intrinsic syntax, expected closing `%`");if(l==="%"&&r!=="%")throw new Vl("invalid intrinsic syntax, expected opening `%`");var u=[];return Q2(n,Y9,function(p,f,b,m){u[u.length]=b?Q2(m,Q9,"$1"):f||p}),u},J9=function(n,r){var l=n,u;if(Tp(Y2,l)&&(u=Y2[l],l="%"+u[0]+"%"),Tp(pa,l)){var p=pa[l];if(p===Al&&(p=q9(l)),typeof p>"u"&&!r)throw new Dl("intrinsic "+n+" exists, but is not available. Please file an issue!");return{alias:u,name:l,value:p}}throw new Vl("intrinsic "+n+" does not exist!")},rc=function(n,r){if(typeof n!="string"||n.length===0)throw new Dl("intrinsic name must be a non-empty string");if(arguments.length>1&&typeof r!="boolean")throw new Dl('"allowMissing" argument must be a boolean');if(K9(/^%?[^%]*%?$/,n)===null)throw new Vl("`%` may not be present anywhere but at the beginning and end of the intrinsic name");var l=Z9(n),u=l.length>0?l[0]:"",p=J9("%"+u+"%",r),f=p.name,b=p.value,m=!1,v=p.alias;v&&(u=v[0],W9(l,G9([0,1],v)));for(var A=1,x=!0;A<l.length;A+=1){var y=l[A],S=Dp(y,0,1),T=Dp(y,-1);if((S==='"'||S==="'"||S==="`"||T==='"'||T==="'"||T==="`")&&S!==T)throw new Vl("property names with quotes must have matching quotes");if((y==="constructor"||!x)&&(m=!0),u+="."+y,f="%"+u+"%",Tp(pa,f))b=pa[f];else if(b!=null){if(!(y in b)){if(!r)throw new Dl("base intrinsic for "+n+" exists, but the property is not available.");return}if(ha&&A+1>=l.length){var I=ha(b,y);x=!!I,x&&"get"in I&&!("originalValue"in I.get)?b=I.get:b=b[y]}else x=Tp(b,y),b=b[y];x&&!m&&(pa[f]=b)}}return b},MD={exports:{}},eb,Z2;function Qk(){if(Z2)return eb;Z2=1;var i=rc,n=i("%Object.defineProperty%",!0)||!1;if(n)try{n({},"a",{value:1})}catch{n=!1}return eb=n,eb}var X9=rc,fp=X9("%Object.getOwnPropertyDescriptor%",!0);if(fp)try{fp([],"length")}catch{fp=null}var OD=fp,J2=Qk(),e$=DD,kl=du,X2=OD,t$=function(n,r,l){if(!n||typeof n!="object"&&typeof n!="function")throw new kl("`obj` must be an object or a function`");if(typeof r!="string"&&typeof r!="symbol")throw new kl("`property` must be a string or a symbol`");if(arguments.length>3&&typeof arguments[3]!="boolean"&&arguments[3]!==null)throw new kl("`nonEnumerable`, if provided, must be a boolean or null");if(arguments.length>4&&typeof arguments[4]!="boolean"&&arguments[4]!==null)throw new kl("`nonWritable`, if provided, must be a boolean or null");if(arguments.length>5&&typeof arguments[5]!="boolean"&&arguments[5]!==null)throw new kl("`nonConfigurable`, if provided, must be a boolean or null");if(arguments.length>6&&typeof arguments[6]!="boolean")throw new kl("`loose`, if provided, must be a boolean");var u=arguments.length>3?arguments[3]:null,p=arguments.length>4?arguments[4]:null,f=arguments.length>5?arguments[5]:null,b=arguments.length>6?arguments[6]:!1,m=!!X2&&X2(n,r);if(J2)J2(n,r,{configurable:f===null&&m?m.configurable:!f,enumerable:u===null&&m?m.enumerable:!u,value:l,writable:p===null&&m?m.writable:!p});else if(b||!u&&!p&&!f)n[r]=l;else throw new e$("This environment does not support defining a property as non-configurable, non-writable, or non-enumerable.")},ek=Qk(),BD=function(){return!!ek};BD.hasArrayLengthDefineBug=function(){if(!ek)return null;try{return ek([],"length",{value:1}).length!==1}catch{return!0}};var n$=BD,o$=rc,eS=t$,i$=n$(),tS=OD,nS=du,r$=o$("%Math.floor%"),s$=function(n,r){if(typeof n!="function")throw new nS("`fn` is not a function");if(typeof r!="number"||r<0||r>4294967295||r$(r)!==r)throw new nS("`length` must be a positive 32-bit integer");var l=arguments.length>2&&!!arguments[2],u=!0,p=!0;if("length"in n&&tS){var f=tS(n,"length");f&&!f.configurable&&(u=!1),f&&!f.writable&&(p=!1)}return(u||p||!l)&&(i$?eS(n,"length",r,!0,!0):eS(n,"length",r)),n};(function(i){var n=Yk,r=rc,l=s$,u=du,p=r("%Function.prototype.apply%"),f=r("%Function.prototype.call%"),b=r("%Reflect.apply%",!0)||n.call(f,p),m=Qk(),v=r("%Math.max%");i.exports=function(y){if(typeof y!="function")throw new u("a function is required");var S=b(n,f,arguments);return l(S,1+v(0,y.length-(arguments.length-1)),!0)};var A=function(){return b(n,p,arguments)};m?m(i.exports,"apply",{value:A}):i.exports.apply=A})(MD);var a$=MD.exports,PD=rc,ND=a$,l$=ND(PD("String.prototype.indexOf")),c$=function(n,r){var l=PD(n,!!r);return typeof l=="function"&&l$(n,".prototype.")>-1?ND(l):l};const d$={},u$=Object.freeze(Object.defineProperty({__proto__:null,default:d$},Symbol.toStringTag,{value:"Module"})),h$=SD(u$);var Zk=typeof Map=="function"&&Map.prototype,tb=Object.getOwnPropertyDescriptor&&Zk?Object.getOwnPropertyDescriptor(Map.prototype,"size"):null,Ip=Zk&&tb&&typeof tb.get=="function"?tb.get:null,oS=Zk&&Map.prototype.forEach,Jk=typeof Set=="function"&&Set.prototype,nb=Object.getOwnPropertyDescriptor&&Jk?Object.getOwnPropertyDescriptor(Set.prototype,"size"):null,Mp=Jk&&nb&&typeof nb.get=="function"?nb.get:null,iS=Jk&&Set.prototype.forEach,p$=typeof WeakMap=="function"&&WeakMap.prototype,Nd=p$?WeakMap.prototype.has:null,f$=typeof WeakSet=="function"&&WeakSet.prototype,Ld=f$?WeakSet.prototype.has:null,m$=typeof WeakRef=="function"&&WeakRef.prototype,rS=m$?WeakRef.prototype.deref:null,g$=Boolean.prototype.valueOf,b$=Object.prototype.toString,k$=Function.prototype.toString,_$=String.prototype.match,Xk=String.prototype.slice,ls=String.prototype.replace,w$=String.prototype.toUpperCase,sS=String.prototype.toLowerCase,LD=RegExp.prototype.test,aS=Array.prototype.concat,Wi=Array.prototype.join,v$=Array.prototype.slice,lS=Math.floor,tk=typeof BigInt=="function"?BigInt.prototype.valueOf:null,ob=Object.getOwnPropertySymbols,nk=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?Symbol.prototype.toString:null,Hl=typeof Symbol=="function"&&typeof Symbol.iterator=="object",Qn=typeof Symbol=="function"&&Symbol.toStringTag&&(typeof Symbol.toStringTag===Hl||!0)?Symbol.toStringTag:null,RD=Object.prototype.propertyIsEnumerable,cS=(typeof Reflect=="function"?Reflect.getPrototypeOf:Object.getPrototypeOf)||([].__proto__===Array.prototype?function(i){return i.__proto__}:null);function dS(i,n){if(i===1/0||i===-1/0||i!==i||i&&i>-1e3&&i<1e3||LD.call(/e/,n))return n;var r=/[0-9](?=(?:[0-9]{3})+(?![0-9]))/g;if(typeof i=="number"){var l=i<0?-lS(-i):lS(i);if(l!==i){var u=String(l),p=Xk.call(n,u.length+1);return ls.call(u,r,"$&_")+"."+ls.call(ls.call(p,/([0-9]{3})/g,"$&_"),/_$/,"")}}return ls.call(n,r,"$&_")}var ok=h$,uS=ok.custom,hS=zD(uS)?uS:null,A$=function i(n,r,l,u){var p=r||{};if(os(p,"quoteStyle")&&p.quoteStyle!=="single"&&p.quoteStyle!=="double")throw new TypeError('option "quoteStyle" must be "single" or "double"');if(os(p,"maxStringLength")&&(typeof p.maxStringLength=="number"?p.maxStringLength<0&&p.maxStringLength!==1/0:p.maxStringLength!==null))throw new TypeError('option "maxStringLength", if provided, must be a positive integer, Infinity, or `null`');var f=os(p,"customInspect")?p.customInspect:!0;if(typeof f!="boolean"&&f!=="symbol")throw new TypeError("option \"customInspect\", if provided, must be `true`, `false`, or `'symbol'`");if(os(p,"indent")&&p.indent!==null&&p.indent!=="	"&&!(parseInt(p.indent,10)===p.indent&&p.indent>0))throw new TypeError('option "indent" must be "\\t", an integer > 0, or `null`');if(os(p,"numericSeparator")&&typeof p.numericSeparator!="boolean")throw new TypeError('option "numericSeparator", if provided, must be `true` or `false`');var b=p.numericSeparator;if(typeof n>"u")return"undefined";if(n===null)return"null";if(typeof n=="boolean")return n?"true":"false";if(typeof n=="string")return $D(n,p);if(typeof n=="number"){if(n===0)return 1/0/n>0?"0":"-0";var m=String(n);return b?dS(n,m):m}if(typeof n=="bigint"){var v=String(n)+"n";return b?dS(n,v):v}var A=typeof p.depth>"u"?5:p.depth;if(typeof l>"u"&&(l=0),l>=A&&A>0&&typeof n=="object")return ik(n)?"[Array]":"[Object]";var x=j$(p,l);if(typeof u>"u")u=[];else if(jD(u,n)>=0)return"[Circular]";function y(te,re,ae){if(re&&(u=v$.call(u),u.push(re)),ae){var oe={depth:p.depth};return os(p,"quoteStyle")&&(oe.quoteStyle=p.quoteStyle),i(te,oe,l+1,u)}return i(te,p,l+1,u)}if(typeof n=="function"&&!pS(n)){var S=M$(n),T=Fh(n,y);return"[Function"+(S?": "+S:" (anonymous)")+"]"+(T.length>0?" { "+Wi.call(T,", ")+" }":"")}if(zD(n)){var I=Hl?ls.call(String(n),/^(Symbol\(.*\))_[^)]*$/,"$1"):nk.call(n);return typeof n=="object"&&!Hl?Cd(I):I}if(R$(n)){for(var F="<"+sS.call(String(n.nodeName)),N=n.attributes||[],L=0;L<N.length;L++)F+=" "+N[L].name+"="+FD(C$(N[L].value),"double",p);return F+=">",n.childNodes&&n.childNodes.length&&(F+="..."),F+="</"+sS.call(String(n.nodeName))+">",F}if(ik(n)){if(n.length===0)return"[]";var B=Fh(n,y);return x&&!z$(B)?"["+rk(B,x)+"]":"[ "+Wi.call(B,", ")+" ]"}if(x$(n)){var z=Fh(n,y);return!("cause"in Error.prototype)&&"cause"in n&&!RD.call(n,"cause")?"{ ["+String(n)+"] "+Wi.call(aS.call("[cause]: "+y(n.cause),z),", ")+" }":z.length===0?"["+String(n)+"]":"{ ["+String(n)+"] "+Wi.call(z,", ")+" }"}if(typeof n=="object"&&f){if(hS&&typeof n[hS]=="function"&&ok)return ok(n,{depth:A-l});if(f!=="symbol"&&typeof n.inspect=="function")return n.inspect()}if(O$(n)){var H=[];return oS&&oS.call(n,function(te,re){H.push(y(re,n,!0)+" => "+y(te,n))}),fS("Map",Ip.call(n),H,x)}if(N$(n)){var G=[];return iS&&iS.call(n,function(te){G.push(y(te,n))}),fS("Set",Mp.call(n),G,x)}if(B$(n))return ib("WeakMap");if(L$(n))return ib("WeakSet");if(P$(n))return ib("WeakRef");if(S$(n))return Cd(y(Number(n)));if(D$(n))return Cd(y(tk.call(n)));if(T$(n))return Cd(g$.call(n));if(E$(n))return Cd(y(String(n)));if(typeof window<"u"&&n===window)return"{ [object Window] }";if(n===Sn)return"{ [object globalThis] }";if(!y$(n)&&!pS(n)){var P=Fh(n,y),V=cS?cS(n)===Object.prototype:n instanceof Object||n.constructor===Object,U=n instanceof Object?"":"null prototype",W=!V&&Qn&&Object(n)===n&&Qn in n?Xk.call(ws(n),8,-1):U?"Object":"",Y=V||typeof n.constructor!="function"?"":n.constructor.name?n.constructor.name+" ":"",J=Y+(W||U?"["+Wi.call(aS.call([],W||[],U||[]),": ")+"] ":"");return P.length===0?J+"{}":x?J+"{"+rk(P,x)+"}":J+"{ "+Wi.call(P,", ")+" }"}return String(n)};function FD(i,n,r){var l=(r.quoteStyle||n)==="double"?'"':"'";return l+i+l}function C$(i){return ls.call(String(i),/"/g,"&quot;")}function ik(i){return ws(i)==="[object Array]"&&(!Qn||!(typeof i=="object"&&Qn in i))}function y$(i){return ws(i)==="[object Date]"&&(!Qn||!(typeof i=="object"&&Qn in i))}function pS(i){return ws(i)==="[object RegExp]"&&(!Qn||!(typeof i=="object"&&Qn in i))}function x$(i){return ws(i)==="[object Error]"&&(!Qn||!(typeof i=="object"&&Qn in i))}function E$(i){return ws(i)==="[object String]"&&(!Qn||!(typeof i=="object"&&Qn in i))}function S$(i){return ws(i)==="[object Number]"&&(!Qn||!(typeof i=="object"&&Qn in i))}function T$(i){return ws(i)==="[object Boolean]"&&(!Qn||!(typeof i=="object"&&Qn in i))}function zD(i){if(Hl)return i&&typeof i=="object"&&i instanceof Symbol;if(typeof i=="symbol")return!0;if(!i||typeof i!="object"||!nk)return!1;try{return nk.call(i),!0}catch{}return!1}function D$(i){if(!i||typeof i!="object"||!tk)return!1;try{return tk.call(i),!0}catch{}return!1}var I$=Object.prototype.hasOwnProperty||function(i){return i in this};function os(i,n){return I$.call(i,n)}function ws(i){return b$.call(i)}function M$(i){if(i.name)return i.name;var n=_$.call(k$.call(i),/^function\s*([\w$]+)/);return n?n[1]:null}function jD(i,n){if(i.indexOf)return i.indexOf(n);for(var r=0,l=i.length;r<l;r++)if(i[r]===n)return r;return-1}function O$(i){if(!Ip||!i||typeof i!="object")return!1;try{Ip.call(i);try{Mp.call(i)}catch{return!0}return i instanceof Map}catch{}return!1}function B$(i){if(!Nd||!i||typeof i!="object")return!1;try{Nd.call(i,Nd);try{Ld.call(i,Ld)}catch{return!0}return i instanceof WeakMap}catch{}return!1}function P$(i){if(!rS||!i||typeof i!="object")return!1;try{return rS.call(i),!0}catch{}return!1}function N$(i){if(!Mp||!i||typeof i!="object")return!1;try{Mp.call(i);try{Ip.call(i)}catch{return!0}return i instanceof Set}catch{}return!1}function L$(i){if(!Ld||!i||typeof i!="object")return!1;try{Ld.call(i,Ld);try{Nd.call(i,Nd)}catch{return!0}return i instanceof WeakSet}catch{}return!1}function R$(i){return!i||typeof i!="object"?!1:typeof HTMLElement<"u"&&i instanceof HTMLElement?!0:typeof i.nodeName=="string"&&typeof i.getAttribute=="function"}function $D(i,n){if(i.length>n.maxStringLength){var r=i.length-n.maxStringLength,l="... "+r+" more character"+(r>1?"s":"");return $D(Xk.call(i,0,n.maxStringLength),n)+l}var u=ls.call(ls.call(i,/(['\\])/g,"\\$1"),/[\x00-\x1f]/g,F$);return FD(u,"single",n)}function F$(i){var n=i.charCodeAt(0),r={8:"b",9:"t",10:"n",12:"f",13:"r"}[n];return r?"\\"+r:"\\x"+(n<16?"0":"")+w$.call(n.toString(16))}function Cd(i){return"Object("+i+")"}function ib(i){return i+" { ? }"}function fS(i,n,r,l){var u=l?rk(r,l):Wi.call(r,", ");return i+" ("+n+") {"+u+"}"}function z$(i){for(var n=0;n<i.length;n++)if(jD(i[n],`
`)>=0)return!1;return!0}function j$(i,n){var r;if(i.indent==="	")r="	";else if(typeof i.indent=="number"&&i.indent>0)r=Wi.call(Array(i.indent+1)," ");else return null;return{base:r,prev:Wi.call(Array(n+1),r)}}function rk(i,n){if(i.length===0)return"";var r=`
`+n.prev+n.base;return r+Wi.call(i,","+r)+`
`+n.prev}function Fh(i,n){var r=ik(i),l=[];if(r){l.length=i.length;for(var u=0;u<i.length;u++)l[u]=os(i,u)?n(i[u],i):""}var p=typeof ob=="function"?ob(i):[],f;if(Hl){f={};for(var b=0;b<p.length;b++)f["$"+p[b]]=p[b]}for(var m in i)os(i,m)&&(r&&String(Number(m))===m&&m<i.length||Hl&&f["$"+m]instanceof Symbol||(LD.call(/[^\w$]/,m)?l.push(n(m,i)+": "+n(i[m],i)):l.push(m+": "+n(i[m],i))));if(typeof ob=="function")for(var v=0;v<p.length;v++)RD.call(i,p[v])&&l.push("["+n(p[v])+"]: "+n(i[p[v]],i));return l}var VD=rc,sc=c$,$$=A$,V$=du,zh=VD("%WeakMap%",!0),jh=VD("%Map%",!0),H$=sc("WeakMap.prototype.get",!0),U$=sc("WeakMap.prototype.set",!0),q$=sc("WeakMap.prototype.has",!0),G$=sc("Map.prototype.get",!0),W$=sc("Map.prototype.set",!0),K$=sc("Map.prototype.has",!0),e_=function(i,n){for(var r=i,l;(l=r.next)!==null;r=l)if(l.key===n)return r.next=l.next,l.next=i.next,i.next=l,l},Y$=function(i,n){var r=e_(i,n);return r&&r.value},Q$=function(i,n,r){var l=e_(i,n);l?l.value=r:i.next={key:n,next:i.next,value:r}},Z$=function(i,n){return!!e_(i,n)},J$=function(){var n,r,l,u={assert:function(p){if(!u.has(p))throw new V$("Side channel does not contain "+$$(p))},get:function(p){if(zh&&p&&(typeof p=="object"||typeof p=="function")){if(n)return H$(n,p)}else if(jh){if(r)return G$(r,p)}else if(l)return Y$(l,p)},has:function(p){if(zh&&p&&(typeof p=="object"||typeof p=="function")){if(n)return q$(n,p)}else if(jh){if(r)return K$(r,p)}else if(l)return Z$(l,p);return!1},set:function(p,f){zh&&p&&(typeof p=="object"||typeof p=="function")?(n||(n=new zh),U$(n,p,f)):jh?(r||(r=new jh),W$(r,p,f)):(l||(l={key:{},next:null}),Q$(l,p,f))}};return u},X$=String.prototype.replace,eV=/%20/g,rb={RFC1738:"RFC1738",RFC3986:"RFC3986"},t_={default:rb.RFC3986,formatters:{RFC1738:function(i){return X$.call(i,eV,"+")},RFC3986:function(i){return String(i)}},RFC1738:rb.RFC1738,RFC3986:rb.RFC3986},tV=t_,sb=Object.prototype.hasOwnProperty,sa=Array.isArray,Hi=function(){for(var i=[],n=0;n<256;++n)i.push("%"+((n<16?"0":"")+n.toString(16)).toUpperCase());return i}(),nV=function(n){for(;n.length>1;){var r=n.pop(),l=r.obj[r.prop];if(sa(l)){for(var u=[],p=0;p<l.length;++p)typeof l[p]<"u"&&u.push(l[p]);r.obj[r.prop]=u}}},HD=function(n,r){for(var l=r&&r.plainObjects?Object.create(null):{},u=0;u<n.length;++u)typeof n[u]<"u"&&(l[u]=n[u]);return l},oV=function i(n,r,l){if(!r)return n;if(typeof r!="object"){if(sa(n))n.push(r);else if(n&&typeof n=="object")(l&&(l.plainObjects||l.allowPrototypes)||!sb.call(Object.prototype,r))&&(n[r]=!0);else return[n,r];return n}if(!n||typeof n!="object")return[n].concat(r);var u=n;return sa(n)&&!sa(r)&&(u=HD(n,l)),sa(n)&&sa(r)?(r.forEach(function(p,f){if(sb.call(n,f)){var b=n[f];b&&typeof b=="object"&&p&&typeof p=="object"?n[f]=i(b,p,l):n.push(p)}else n[f]=p}),n):Object.keys(r).reduce(function(p,f){var b=r[f];return sb.call(p,f)?p[f]=i(p[f],b,l):p[f]=b,p},u)},iV=function(n,r){return Object.keys(r).reduce(function(l,u){return l[u]=r[u],l},n)},rV=function(i,n,r){var l=i.replace(/\+/g," ");if(r==="iso-8859-1")return l.replace(/%[0-9a-f]{2}/gi,unescape);try{return decodeURIComponent(l)}catch{return l}},sV=function(n,r,l,u,p){if(n.length===0)return n;var f=n;if(typeof n=="symbol"?f=Symbol.prototype.toString.call(n):typeof n!="string"&&(f=String(n)),l==="iso-8859-1")return escape(f).replace(/%u[0-9a-f]{4}/gi,function(A){return"%26%23"+parseInt(A.slice(2),16)+"%3B"});for(var b="",m=0;m<f.length;++m){var v=f.charCodeAt(m);if(v===45||v===46||v===95||v===126||v>=48&&v<=57||v>=65&&v<=90||v>=97&&v<=122||p===tV.RFC1738&&(v===40||v===41)){b+=f.charAt(m);continue}if(v<128){b=b+Hi[v];continue}if(v<2048){b=b+(Hi[192|v>>6]+Hi[128|v&63]);continue}if(v<55296||v>=57344){b=b+(Hi[224|v>>12]+Hi[128|v>>6&63]+Hi[128|v&63]);continue}m+=1,v=65536+((v&1023)<<10|f.charCodeAt(m)&1023),b+=Hi[240|v>>18]+Hi[128|v>>12&63]+Hi[128|v>>6&63]+Hi[128|v&63]}return b},aV=function(n){for(var r=[{obj:{o:n},prop:"o"}],l=[],u=0;u<r.length;++u)for(var p=r[u],f=p.obj[p.prop],b=Object.keys(f),m=0;m<b.length;++m){var v=b[m],A=f[v];typeof A=="object"&&A!==null&&l.indexOf(A)===-1&&(r.push({obj:f,prop:v}),l.push(A))}return nV(r),n},lV=function(n){return Object.prototype.toString.call(n)==="[object RegExp]"},cV=function(n){return!n||typeof n!="object"?!1:!!(n.constructor&&n.constructor.isBuffer&&n.constructor.isBuffer(n))},dV=function(n,r){return[].concat(n,r)},uV=function(n,r){if(sa(n)){for(var l=[],u=0;u<n.length;u+=1)l.push(r(n[u]));return l}return r(n)},UD={arrayToObject:HD,assign:iV,combine:dV,compact:aV,decode:rV,encode:sV,isBuffer:cV,isRegExp:lV,maybeMap:uV,merge:oV},qD=J$,mp=UD,Rd=t_,hV=Object.prototype.hasOwnProperty,GD={brackets:function(n){return n+"[]"},comma:"comma",indices:function(n,r){return n+"["+r+"]"},repeat:function(n){return n}},qi=Array.isArray,pV=Array.prototype.push,WD=function(i,n){pV.apply(i,qi(n)?n:[n])},fV=Date.prototype.toISOString,mS=Rd.default,xn={addQueryPrefix:!1,allowDots:!1,allowEmptyArrays:!1,arrayFormat:"indices",charset:"utf-8",charsetSentinel:!1,delimiter:"&",encode:!0,encodeDotInKeys:!1,encoder:mp.encode,encodeValuesOnly:!1,format:mS,formatter:Rd.formatters[mS],indices:!1,serializeDate:function(n){return fV.call(n)},skipNulls:!1,strictNullHandling:!1},mV=function(n){return typeof n=="string"||typeof n=="number"||typeof n=="boolean"||typeof n=="symbol"||typeof n=="bigint"},ab={},gV=function i(n,r,l,u,p,f,b,m,v,A,x,y,S,T,I,F,N,L){for(var B=n,z=L,H=0,G=!1;(z=z.get(ab))!==void 0&&!G;){var P=z.get(n);if(H+=1,typeof P<"u"){if(P===H)throw new RangeError("Cyclic object value");G=!0}typeof z.get(ab)>"u"&&(H=0)}if(typeof A=="function"?B=A(r,B):B instanceof Date?B=S(B):l==="comma"&&qi(B)&&(B=mp.maybeMap(B,function(Ee){return Ee instanceof Date?S(Ee):Ee})),B===null){if(f)return v&&!F?v(r,xn.encoder,N,"key",T):r;B=""}if(mV(B)||mp.isBuffer(B)){if(v){var V=F?r:v(r,xn.encoder,N,"key",T);return[I(V)+"="+I(v(B,xn.encoder,N,"value",T))]}return[I(r)+"="+I(String(B))]}var U=[];if(typeof B>"u")return U;var W;if(l==="comma"&&qi(B))F&&v&&(B=mp.maybeMap(B,v)),W=[{value:B.length>0?B.join(",")||null:void 0}];else if(qi(A))W=A;else{var Y=Object.keys(B);W=x?Y.sort(x):Y}var J=m?r.replace(/\./g,"%2E"):r,te=u&&qi(B)&&B.length===1?J+"[]":J;if(p&&qi(B)&&B.length===0)return te+"[]";for(var re=0;re<W.length;++re){var ae=W[re],oe=typeof ae=="object"&&typeof ae.value<"u"?ae.value:B[ae];if(!(b&&oe===null)){var me=y&&m?ae.replace(/\./g,"%2E"):ae,ie=qi(B)?typeof l=="function"?l(te,me):te:te+(y?"."+me:"["+me+"]");L.set(n,H);var Ne=qD();Ne.set(ab,L),WD(U,i(oe,ie,l,u,p,f,b,m,l==="comma"&&F&&qi(B)?null:v,A,x,y,S,T,I,F,N,Ne))}}return U},bV=function(n){if(!n)return xn;if(typeof n.allowEmptyArrays<"u"&&typeof n.allowEmptyArrays!="boolean")throw new TypeError("`allowEmptyArrays` option can only be `true` or `false`, when provided");if(typeof n.encodeDotInKeys<"u"&&typeof n.encodeDotInKeys!="boolean")throw new TypeError("`encodeDotInKeys` option can only be `true` or `false`, when provided");if(n.encoder!==null&&typeof n.encoder<"u"&&typeof n.encoder!="function")throw new TypeError("Encoder has to be a function.");var r=n.charset||xn.charset;if(typeof n.charset<"u"&&n.charset!=="utf-8"&&n.charset!=="iso-8859-1")throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");var l=Rd.default;if(typeof n.format<"u"){if(!hV.call(Rd.formatters,n.format))throw new TypeError("Unknown format option provided.");l=n.format}var u=Rd.formatters[l],p=xn.filter;(typeof n.filter=="function"||qi(n.filter))&&(p=n.filter);var f;if(n.arrayFormat in GD?f=n.arrayFormat:"indices"in n?f=n.indices?"indices":"repeat":f=xn.arrayFormat,"commaRoundTrip"in n&&typeof n.commaRoundTrip!="boolean")throw new TypeError("`commaRoundTrip` must be a boolean, or absent");var b=typeof n.allowDots>"u"?n.encodeDotInKeys===!0?!0:xn.allowDots:!!n.allowDots;return{addQueryPrefix:typeof n.addQueryPrefix=="boolean"?n.addQueryPrefix:xn.addQueryPrefix,allowDots:b,allowEmptyArrays:typeof n.allowEmptyArrays=="boolean"?!!n.allowEmptyArrays:xn.allowEmptyArrays,arrayFormat:f,charset:r,charsetSentinel:typeof n.charsetSentinel=="boolean"?n.charsetSentinel:xn.charsetSentinel,commaRoundTrip:n.commaRoundTrip,delimiter:typeof n.delimiter>"u"?xn.delimiter:n.delimiter,encode:typeof n.encode=="boolean"?n.encode:xn.encode,encodeDotInKeys:typeof n.encodeDotInKeys=="boolean"?n.encodeDotInKeys:xn.encodeDotInKeys,encoder:typeof n.encoder=="function"?n.encoder:xn.encoder,encodeValuesOnly:typeof n.encodeValuesOnly=="boolean"?n.encodeValuesOnly:xn.encodeValuesOnly,filter:p,format:l,formatter:u,serializeDate:typeof n.serializeDate=="function"?n.serializeDate:xn.serializeDate,skipNulls:typeof n.skipNulls=="boolean"?n.skipNulls:xn.skipNulls,sort:typeof n.sort=="function"?n.sort:null,strictNullHandling:typeof n.strictNullHandling=="boolean"?n.strictNullHandling:xn.strictNullHandling}},kV=function(i,n){var r=i,l=bV(n),u,p;typeof l.filter=="function"?(p=l.filter,r=p("",r)):qi(l.filter)&&(p=l.filter,u=p);var f=[];if(typeof r!="object"||r===null)return"";var b=GD[l.arrayFormat],m=b==="comma"&&l.commaRoundTrip;u||(u=Object.keys(r)),l.sort&&u.sort(l.sort);for(var v=qD(),A=0;A<u.length;++A){var x=u[A];l.skipNulls&&r[x]===null||WD(f,gV(r[x],x,b,m,l.allowEmptyArrays,l.strictNullHandling,l.skipNulls,l.encodeDotInKeys,l.encode?l.encoder:null,l.filter,l.sort,l.allowDots,l.serializeDate,l.format,l.formatter,l.encodeValuesOnly,l.charset,v))}var y=f.join(l.delimiter),S=l.addQueryPrefix===!0?"?":"";return l.charsetSentinel&&(l.charset==="iso-8859-1"?S+="utf8=%26%2310003%3B&":S+="utf8=%E2%9C%93&"),y.length>0?S+y:""},Ul=UD,sk=Object.prototype.hasOwnProperty,_V=Array.isArray,gn={allowDots:!1,allowEmptyArrays:!1,allowPrototypes:!1,allowSparse:!1,arrayLimit:20,charset:"utf-8",charsetSentinel:!1,comma:!1,decodeDotInKeys:!0,decoder:Ul.decode,delimiter:"&",depth:5,duplicates:"combine",ignoreQueryPrefix:!1,interpretNumericEntities:!1,parameterLimit:1e3,parseArrays:!0,plainObjects:!1,strictNullHandling:!1},wV=function(i){return i.replace(/&#(\d+);/g,function(n,r){return String.fromCharCode(parseInt(r,10))})},KD=function(i,n){return i&&typeof i=="string"&&n.comma&&i.indexOf(",")>-1?i.split(","):i},vV="utf8=%26%2310003%3B",AV="utf8=%E2%9C%93",CV=function(n,r){var l={__proto__:null},u=r.ignoreQueryPrefix?n.replace(/^\?/,""):n,p=r.parameterLimit===1/0?void 0:r.parameterLimit,f=u.split(r.delimiter,p),b=-1,m,v=r.charset;if(r.charsetSentinel)for(m=0;m<f.length;++m)f[m].indexOf("utf8=")===0&&(f[m]===AV?v="utf-8":f[m]===vV&&(v="iso-8859-1"),b=m,m=f.length);for(m=0;m<f.length;++m)if(m!==b){var A=f[m],x=A.indexOf("]="),y=x===-1?A.indexOf("="):x+1,S,T;y===-1?(S=r.decoder(A,gn.decoder,v,"key"),T=r.strictNullHandling?null:""):(S=r.decoder(A.slice(0,y),gn.decoder,v,"key"),T=Ul.maybeMap(KD(A.slice(y+1),r),function(F){return r.decoder(F,gn.decoder,v,"value")})),T&&r.interpretNumericEntities&&v==="iso-8859-1"&&(T=wV(T)),A.indexOf("[]=")>-1&&(T=_V(T)?[T]:T);var I=sk.call(l,S);I&&r.duplicates==="combine"?l[S]=Ul.combine(l[S],T):(!I||r.duplicates==="last")&&(l[S]=T)}return l},yV=function(i,n,r,l){for(var u=l?n:KD(n,r),p=i.length-1;p>=0;--p){var f,b=i[p];if(b==="[]"&&r.parseArrays)f=r.allowEmptyArrays&&u===""?[]:[].concat(u);else{f=r.plainObjects?Object.create(null):{};var m=b.charAt(0)==="["&&b.charAt(b.length-1)==="]"?b.slice(1,-1):b,v=r.decodeDotInKeys?m.replace(/%2E/g,"."):m,A=parseInt(v,10);!r.parseArrays&&v===""?f={0:u}:!isNaN(A)&&b!==v&&String(A)===v&&A>=0&&r.parseArrays&&A<=r.arrayLimit?(f=[],f[A]=u):v!=="__proto__"&&(f[v]=u)}u=f}return u},xV=function(n,r,l,u){if(n){var p=l.allowDots?n.replace(/\.([^.[]+)/g,"[$1]"):n,f=/(\[[^[\]]*])/,b=/(\[[^[\]]*])/g,m=l.depth>0&&f.exec(p),v=m?p.slice(0,m.index):p,A=[];if(v){if(!l.plainObjects&&sk.call(Object.prototype,v)&&!l.allowPrototypes)return;A.push(v)}for(var x=0;l.depth>0&&(m=b.exec(p))!==null&&x<l.depth;){if(x+=1,!l.plainObjects&&sk.call(Object.prototype,m[1].slice(1,-1))&&!l.allowPrototypes)return;A.push(m[1])}return m&&A.push("["+p.slice(m.index)+"]"),yV(A,r,l,u)}},EV=function(n){if(!n)return gn;if(typeof n.allowEmptyArrays<"u"&&typeof n.allowEmptyArrays!="boolean")throw new TypeError("`allowEmptyArrays` option can only be `true` or `false`, when provided");if(typeof n.decodeDotInKeys<"u"&&typeof n.decodeDotInKeys!="boolean")throw new TypeError("`decodeDotInKeys` option can only be `true` or `false`, when provided");if(n.decoder!==null&&typeof n.decoder<"u"&&typeof n.decoder!="function")throw new TypeError("Decoder has to be a function.");if(typeof n.charset<"u"&&n.charset!=="utf-8"&&n.charset!=="iso-8859-1")throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");var r=typeof n.charset>"u"?gn.charset:n.charset,l=typeof n.duplicates>"u"?gn.duplicates:n.duplicates;if(l!=="combine"&&l!=="first"&&l!=="last")throw new TypeError("The duplicates option must be either combine, first, or last");var u=typeof n.allowDots>"u"?n.decodeDotInKeys===!0?!0:gn.allowDots:!!n.allowDots;return{allowDots:u,allowEmptyArrays:typeof n.allowEmptyArrays=="boolean"?!!n.allowEmptyArrays:gn.allowEmptyArrays,allowPrototypes:typeof n.allowPrototypes=="boolean"?n.allowPrototypes:gn.allowPrototypes,allowSparse:typeof n.allowSparse=="boolean"?n.allowSparse:gn.allowSparse,arrayLimit:typeof n.arrayLimit=="number"?n.arrayLimit:gn.arrayLimit,charset:r,charsetSentinel:typeof n.charsetSentinel=="boolean"?n.charsetSentinel:gn.charsetSentinel,comma:typeof n.comma=="boolean"?n.comma:gn.comma,decodeDotInKeys:typeof n.decodeDotInKeys=="boolean"?n.decodeDotInKeys:gn.decodeDotInKeys,decoder:typeof n.decoder=="function"?n.decoder:gn.decoder,delimiter:typeof n.delimiter=="string"||Ul.isRegExp(n.delimiter)?n.delimiter:gn.delimiter,depth:typeof n.depth=="number"||n.depth===!1?+n.depth:gn.depth,duplicates:l,ignoreQueryPrefix:n.ignoreQueryPrefix===!0,interpretNumericEntities:typeof n.interpretNumericEntities=="boolean"?n.interpretNumericEntities:gn.interpretNumericEntities,parameterLimit:typeof n.parameterLimit=="number"?n.parameterLimit:gn.parameterLimit,parseArrays:n.parseArrays!==!1,plainObjects:typeof n.plainObjects=="boolean"?n.plainObjects:gn.plainObjects,strictNullHandling:typeof n.strictNullHandling=="boolean"?n.strictNullHandling:gn.strictNullHandling}},SV=function(i,n){var r=EV(n);if(i===""||i===null||typeof i>"u")return r.plainObjects?Object.create(null):{};for(var l=typeof i=="string"?CV(i,r):i,u=r.plainObjects?Object.create(null):{},p=Object.keys(l),f=0;f<p.length;++f){var b=p[f],m=xV(b,l[b],r,typeof i=="string");u=Ul.merge(u,m,r)}return r.allowSparse===!0?u:Ul.compact(u)},TV=kV,DV=SV,IV=t_,gS={formats:IV,parse:DV,stringify:TV},YD={exports:{}};/* NProgress, (c) 2013, 2014 Rico Sta. Cruz - http://ricostacruz.com/nprogress
 * @license MIT */(function(i,n){(function(r,l){i.exports=l()})(Sn,function(){var r={};r.version="0.2.0";var l=r.settings={minimum:.08,easing:"ease",positionUsing:"",speed:200,trickle:!0,trickleRate:.02,trickleSpeed:800,showSpinner:!0,barSelector:'[role="bar"]',spinnerSelector:'[role="spinner"]',parent:"body",template:'<div class="bar" role="bar"><div class="peg"></div></div><div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'};r.configure=function(T){var I,F;for(I in T)F=T[I],F!==void 0&&T.hasOwnProperty(I)&&(l[I]=F);return this},r.status=null,r.set=function(T){var I=r.isStarted();T=u(T,l.minimum,1),r.status=T===1?null:T;var F=r.render(!I),N=F.querySelector(l.barSelector),L=l.speed,B=l.easing;return F.offsetWidth,b(function(z){l.positionUsing===""&&(l.positionUsing=r.getPositioningCSS()),m(N,f(T,L,B)),T===1?(m(F,{transition:"none",opacity:1}),F.offsetWidth,setTimeout(function(){m(F,{transition:"all "+L+"ms linear",opacity:0}),setTimeout(function(){r.remove(),z()},L)},L)):setTimeout(z,L)}),this},r.isStarted=function(){return typeof r.status=="number"},r.start=function(){r.status||r.set(0);var T=function(){setTimeout(function(){r.status&&(r.trickle(),T())},l.trickleSpeed)};return l.trickle&&T(),this},r.done=function(T){return!T&&!r.status?this:r.inc(.3+.5*Math.random()).set(1)},r.inc=function(T){var I=r.status;return I?(typeof T!="number"&&(T=(1-I)*u(Math.random()*I,.1,.95)),I=u(I+T,0,.994),r.set(I)):r.start()},r.trickle=function(){return r.inc(Math.random()*l.trickleRate)},function(){var T=0,I=0;r.promise=function(F){return!F||F.state()==="resolved"?this:(I===0&&r.start(),T++,I++,F.always(function(){I--,I===0?(T=0,r.done()):r.set((T-I)/T)}),this)}}(),r.render=function(T){if(r.isRendered())return document.getElementById("nprogress");A(document.documentElement,"nprogress-busy");var I=document.createElement("div");I.id="nprogress",I.innerHTML=l.template;var F=I.querySelector(l.barSelector),N=T?"-100":p(r.status||0),L=document.querySelector(l.parent),B;return m(F,{transition:"all 0 linear",transform:"translate3d("+N+"%,0,0)"}),l.showSpinner||(B=I.querySelector(l.spinnerSelector),B&&S(B)),L!=document.body&&A(L,"nprogress-custom-parent"),L.appendChild(I),I},r.remove=function(){x(document.documentElement,"nprogress-busy"),x(document.querySelector(l.parent),"nprogress-custom-parent");var T=document.getElementById("nprogress");T&&S(T)},r.isRendered=function(){return!!document.getElementById("nprogress")},r.getPositioningCSS=function(){var T=document.body.style,I="WebkitTransform"in T?"Webkit":"MozTransform"in T?"Moz":"msTransform"in T?"ms":"OTransform"in T?"O":"";return I+"Perspective"in T?"translate3d":I+"Transform"in T?"translate":"margin"};function u(T,I,F){return T<I?I:T>F?F:T}function p(T){return(-1+T)*100}function f(T,I,F){var N;return l.positionUsing==="translate3d"?N={transform:"translate3d("+p(T)+"%,0,0)"}:l.positionUsing==="translate"?N={transform:"translate("+p(T)+"%,0)"}:N={"margin-left":p(T)+"%"},N.transition="all "+I+"ms "+F,N}var b=function(){var T=[];function I(){var F=T.shift();F&&F(I)}return function(F){T.push(F),T.length==1&&I()}}(),m=function(){var T=["Webkit","O","Moz","ms"],I={};function F(z){return z.replace(/^-ms-/,"ms-").replace(/-([\da-z])/gi,function(H,G){return G.toUpperCase()})}function N(z){var H=document.body.style;if(z in H)return z;for(var G=T.length,P=z.charAt(0).toUpperCase()+z.slice(1),V;G--;)if(V=T[G]+P,V in H)return V;return z}function L(z){return z=F(z),I[z]||(I[z]=N(z))}function B(z,H,G){H=L(H),z.style[H]=G}return function(z,H){var G=arguments,P,V;if(G.length==2)for(P in H)V=H[P],V!==void 0&&H.hasOwnProperty(P)&&B(z,P,V);else B(z,G[1],G[2])}}();function v(T,I){var F=typeof T=="string"?T:y(T);return F.indexOf(" "+I+" ")>=0}function A(T,I){var F=y(T),N=F+I;v(F,I)||(T.className=N.substring(1))}function x(T,I){var F=y(T),N;v(T,I)&&(N=F.replace(" "+I+" "," "),T.className=N.substring(1,N.length-1))}function y(T){return(" "+(T.className||"")+" ").replace(/\s+/gi," ")}function S(T){T&&T.parentNode&&T.parentNode.removeChild(T)}return r})})(YD);var MV=YD.exports;const Ki=Ia(MV);function QD(i,n){let r;return function(...l){clearTimeout(r),r=setTimeout(()=>i.apply(this,l),n)}}function Ir(i,n){return document.dispatchEvent(new CustomEvent(`inertia:${i}`,n))}var OV=i=>Ir("before",{cancelable:!0,detail:{visit:i}}),BV=i=>Ir("error",{detail:{errors:i}}),PV=i=>Ir("exception",{cancelable:!0,detail:{exception:i}}),bS=i=>Ir("finish",{detail:{visit:i}}),NV=i=>Ir("invalid",{cancelable:!0,detail:{response:i}}),yd=i=>Ir("navigate",{detail:{page:i}}),LV=i=>Ir("progress",{detail:{progress:i}}),RV=i=>Ir("start",{detail:{visit:i}}),FV=i=>Ir("success",{detail:{page:i}});function ak(i){return i instanceof File||i instanceof Blob||i instanceof FileList&&i.length>0||i instanceof FormData&&Array.from(i.values()).some(n=>ak(n))||typeof i=="object"&&i!==null&&Object.values(i).some(n=>ak(n))}function ZD(i,n=new FormData,r=null){i=i||{};for(let l in i)Object.prototype.hasOwnProperty.call(i,l)&&XD(n,JD(r,l),i[l]);return n}function JD(i,n){return i?i+"["+n+"]":n}function XD(i,n,r){if(Array.isArray(r))return Array.from(r.keys()).forEach(l=>XD(i,JD(n,l.toString()),r[l]));if(r instanceof Date)return i.append(n,r.toISOString());if(r instanceof File)return i.append(n,r,r.name);if(r instanceof Blob)return i.append(n,r);if(typeof r=="boolean")return i.append(n,r?"1":"0");if(typeof r=="string")return i.append(n,r);if(typeof r=="number")return i.append(n,`${r}`);if(r==null)return i.append(n,"");ZD(r,i,n)}var zV={modal:null,listener:null,show(i){typeof i=="object"&&(i=`All Inertia requests must receive a valid Inertia response, however a plain JSON response was received.<hr>${JSON.stringify(i)}`);let n=document.createElement("html");n.innerHTML=i,n.querySelectorAll("a").forEach(l=>l.setAttribute("target","_top")),this.modal=document.createElement("div"),this.modal.style.position="fixed",this.modal.style.width="100vw",this.modal.style.height="100vh",this.modal.style.padding="50px",this.modal.style.boxSizing="border-box",this.modal.style.backgroundColor="rgba(0, 0, 0, .6)",this.modal.style.zIndex=2e5,this.modal.addEventListener("click",()=>this.hide());let r=document.createElement("iframe");if(r.style.backgroundColor="white",r.style.borderRadius="5px",r.style.width="100%",r.style.height="100%",this.modal.appendChild(r),document.body.prepend(this.modal),document.body.style.overflow="hidden",!r.contentWindow)throw new Error("iframe not yet ready.");r.contentWindow.document.open(),r.contentWindow.document.write(n.outerHTML),r.contentWindow.document.close(),this.listener=this.hideOnEscape.bind(this),document.addEventListener("keydown",this.listener)},hide(){this.modal.outerHTML="",this.modal=null,document.body.style.overflow="visible",document.removeEventListener("keydown",this.listener)},hideOnEscape(i){i.keyCode===27&&this.hide()}};function _l(i){return new URL(i.toString(),window.location.toString())}function e5(i,n,r,l="brackets"){let u=/^https?:\/\//.test(n.toString()),p=u||n.toString().startsWith("/"),f=!p&&!n.toString().startsWith("#")&&!n.toString().startsWith("?"),b=n.toString().includes("?")||i==="get"&&Object.keys(r).length,m=n.toString().includes("#"),v=new URL(n.toString(),"http://localhost");return i==="get"&&Object.keys(r).length&&(v.search=gS.stringify(p9(gS.parse(v.search,{ignoreQueryPrefix:!0}),r),{encodeValuesOnly:!0,arrayFormat:l}),r={}),[[u?`${v.protocol}//${v.host}`:"",p?v.pathname:"",f?v.pathname.substring(1):"",b?v.search:"",m?v.hash:""].join(""),r]}function xd(i){return i=new URL(i.href),i.hash="",i}var kS=typeof window>"u",jV=class{constructor(){this.visitId=null}init({initialPage:i,resolveComponent:n,swapComponent:r}){this.page=i,this.resolveComponent=n,this.swapComponent=r,this.setNavigationType(),this.clearRememberedStateOnReload(),this.isBackForwardVisit()?this.handleBackForwardVisit(this.page):this.isLocationVisit()?this.handleLocationVisit(this.page):this.handleInitialPageVisit(this.page),this.setupEventListeners()}setNavigationType(){this.navigationType=window.performance&&window.performance.getEntriesByType("navigation").length>0?window.performance.getEntriesByType("navigation")[0].type:"navigate"}clearRememberedStateOnReload(){var i;this.navigationType==="reload"&&((i=window.history.state)!=null&&i.rememberedState)&&delete window.history.state.rememberedState}handleInitialPageVisit(i){this.page.url+=window.location.hash,this.setPage(i,{preserveState:!0}).then(()=>yd(i))}setupEventListeners(){window.addEventListener("popstate",this.handlePopstateEvent.bind(this)),document.addEventListener("scroll",QD(this.handleScrollEvent.bind(this),100),!0)}scrollRegions(){return document.querySelectorAll("[scroll-region]")}handleScrollEvent(i){typeof i.target.hasAttribute=="function"&&i.target.hasAttribute("scroll-region")&&this.saveScrollPositions()}saveScrollPositions(){this.replaceState({...this.page,scrollRegions:Array.from(this.scrollRegions()).map(i=>({top:i.scrollTop,left:i.scrollLeft}))})}resetScrollPositions(){window.scrollTo(0,0),this.scrollRegions().forEach(i=>{typeof i.scrollTo=="function"?i.scrollTo(0,0):(i.scrollTop=0,i.scrollLeft=0)}),this.saveScrollPositions(),window.location.hash&&setTimeout(()=>{var i;return(i=document.getElementById(window.location.hash.slice(1)))==null?void 0:i.scrollIntoView()})}restoreScrollPositions(){this.page.scrollRegions&&this.scrollRegions().forEach((i,n)=>{let r=this.page.scrollRegions[n];if(r)typeof i.scrollTo=="function"?i.scrollTo(r.left,r.top):(i.scrollTop=r.top,i.scrollLeft=r.left);else return})}isBackForwardVisit(){return window.history.state&&this.navigationType==="back_forward"}handleBackForwardVisit(i){window.history.state.version=i.version,this.setPage(window.history.state,{preserveScroll:!0,preserveState:!0}).then(()=>{this.restoreScrollPositions(),yd(i)})}locationVisit(i,n){try{let r={preserveScroll:n};window.sessionStorage.setItem("inertiaLocationVisit",JSON.stringify(r)),window.location.href=i.href,xd(window.location).href===xd(i).href&&window.location.reload()}catch{return!1}}isLocationVisit(){try{return window.sessionStorage.getItem("inertiaLocationVisit")!==null}catch{return!1}}handleLocationVisit(i){var r,l;let n=JSON.parse(window.sessionStorage.getItem("inertiaLocationVisit")||"");window.sessionStorage.removeItem("inertiaLocationVisit"),i.url+=window.location.hash,i.rememberedState=((r=window.history.state)==null?void 0:r.rememberedState)??{},i.scrollRegions=((l=window.history.state)==null?void 0:l.scrollRegions)??[],this.setPage(i,{preserveScroll:n.preserveScroll,preserveState:!0}).then(()=>{n.preserveScroll&&this.restoreScrollPositions(),yd(i)})}isLocationVisitResponse(i){return!!(i&&i.status===409&&i.headers["x-inertia-location"])}isInertiaResponse(i){return!!(i!=null&&i.headers["x-inertia"])}createVisitId(){return this.visitId={},this.visitId}cancelVisit(i,{cancelled:n=!1,interrupted:r=!1}){i&&!i.completed&&!i.cancelled&&!i.interrupted&&(i.cancelToken.abort(),i.onCancel(),i.completed=!1,i.cancelled=n,i.interrupted=r,bS(i),i.onFinish(i))}finishVisit(i){!i.cancelled&&!i.interrupted&&(i.completed=!0,i.cancelled=!1,i.interrupted=!1,bS(i),i.onFinish(i))}resolvePreserveOption(i,n){return typeof i=="function"?i(n):i==="errors"?Object.keys(n.props.errors||{}).length>0:i}cancel(){this.activeVisit&&this.cancelVisit(this.activeVisit,{cancelled:!0})}visit(i,{method:n="get",data:r={},replace:l=!1,preserveScroll:u=!1,preserveState:p=!1,only:f=[],headers:b={},errorBag:m="",forceFormData:v=!1,onCancelToken:A=()=>{},onBefore:x=()=>{},onStart:y=()=>{},onProgress:S=()=>{},onFinish:T=()=>{},onCancel:I=()=>{},onSuccess:F=()=>{},onError:N=()=>{},queryStringArrayFormat:L="brackets"}={}){let B=typeof i=="string"?_l(i):i;if((ak(r)||v)&&!(r instanceof FormData)&&(r=ZD(r)),!(r instanceof FormData)){let[G,P]=e5(n,B,r,L);B=_l(G),r=P}let z={url:B,method:n,data:r,replace:l,preserveScroll:u,preserveState:p,only:f,headers:b,errorBag:m,forceFormData:v,queryStringArrayFormat:L,cancelled:!1,completed:!1,interrupted:!1};if(x(z)===!1||!OV(z))return;this.activeVisit&&this.cancelVisit(this.activeVisit,{interrupted:!0}),this.saveScrollPositions();let H=this.createVisitId();this.activeVisit={...z,onCancelToken:A,onBefore:x,onStart:y,onProgress:S,onFinish:T,onCancel:I,onSuccess:F,onError:N,queryStringArrayFormat:L,cancelToken:new AbortController},A({cancel:()=>{this.activeVisit&&this.cancelVisit(this.activeVisit,{cancelled:!0})}}),RV(z),y(z),dn({method:n,url:xd(B).href,data:n==="get"?{}:r,params:n==="get"?r:{},signal:this.activeVisit.cancelToken.signal,headers:{...b,Accept:"text/html, application/xhtml+xml","X-Requested-With":"XMLHttpRequest","X-Inertia":!0,...f.length?{"X-Inertia-Partial-Component":this.page.component,"X-Inertia-Partial-Data":f.join(",")}:{},...m&&m.length?{"X-Inertia-Error-Bag":m}:{},...this.page.version?{"X-Inertia-Version":this.page.version}:{}},onUploadProgress:G=>{r instanceof FormData&&(G.percentage=G.progress?Math.round(G.progress*100):0,LV(G),S(G))}}).then(G=>{var W;if(!this.isInertiaResponse(G))return Promise.reject({response:G});let P=G.data;f.length&&P.component===this.page.component&&(P.props={...this.page.props,...P.props}),u=this.resolvePreserveOption(u,P),p=this.resolvePreserveOption(p,P),p&&((W=window.history.state)!=null&&W.rememberedState)&&P.component===this.page.component&&(P.rememberedState=window.history.state.rememberedState);let V=B,U=_l(P.url);return V.hash&&!U.hash&&xd(V).href===U.href&&(U.hash=V.hash,P.url=U.href),this.setPage(P,{visitId:H,replace:l,preserveScroll:u,preserveState:p})}).then(()=>{let G=this.page.props.errors||{};if(Object.keys(G).length>0){let P=m?G[m]?G[m]:{}:G;return BV(P),N(P)}return FV(this.page),F(this.page)}).catch(G=>{if(this.isInertiaResponse(G.response))return this.setPage(G.response.data,{visitId:H});if(this.isLocationVisitResponse(G.response)){let P=_l(G.response.headers["x-inertia-location"]),V=B;V.hash&&!P.hash&&xd(V).href===P.href&&(P.hash=V.hash),this.locationVisit(P,u===!0)}else if(G.response)NV(G.response)&&zV.show(G.response.data);else return Promise.reject(G)}).then(()=>{this.activeVisit&&this.finishVisit(this.activeVisit)}).catch(G=>{if(!dn.isCancel(G)){let P=PV(G);if(this.activeVisit&&this.finishVisit(this.activeVisit),P)return Promise.reject(G)}})}setPage(i,{visitId:n=this.createVisitId(),replace:r=!1,preserveScroll:l=!1,preserveState:u=!1}={}){return Promise.resolve(this.resolveComponent(i.component)).then(p=>{n===this.visitId&&(i.scrollRegions=i.scrollRegions||[],i.rememberedState=i.rememberedState||{},r=r||_l(i.url).href===window.location.href,r?this.replaceState(i):this.pushState(i),this.swapComponent({component:p,page:i,preserveState:u}).then(()=>{l||this.resetScrollPositions(),r||yd(i)}))})}pushState(i){this.page=i,window.history.pushState(i,"",i.url)}replaceState(i){this.page=i,window.history.replaceState(i,"",i.url)}handlePopstateEvent(i){if(i.state!==null){let n=i.state,r=this.createVisitId();Promise.resolve(this.resolveComponent(n.component)).then(l=>{r===this.visitId&&(this.page=n,this.swapComponent({component:l,page:n,preserveState:!1}).then(()=>{this.restoreScrollPositions(),yd(n)}))})}else{let n=_l(this.page.url);n.hash=window.location.hash,this.replaceState({...this.page,url:n.href}),this.resetScrollPositions()}}get(i,n={},r={}){return this.visit(i,{...r,method:"get",data:n})}reload(i={}){return this.visit(window.location.href,{...i,preserveScroll:!0,preserveState:!0})}replace(i,n={}){return console.warn(`Inertia.replace() has been deprecated and will be removed in a future release. Please use Inertia.${n.method??"get"}() instead.`),this.visit(i,{preserveState:!0,...n,replace:!0})}post(i,n={},r={}){return this.visit(i,{preserveState:!0,...r,method:"post",data:n})}put(i,n={},r={}){return this.visit(i,{preserveState:!0,...r,method:"put",data:n})}patch(i,n={},r={}){return this.visit(i,{preserveState:!0,...r,method:"patch",data:n})}delete(i,n={}){return this.visit(i,{preserveState:!0,...n,method:"delete"})}remember(i,n="default"){var r;kS||this.replaceState({...this.page,rememberedState:{...(r=this.page)==null?void 0:r.rememberedState,[n]:i}})}restore(i="default"){var n,r;if(!kS)return(r=(n=window.history.state)==null?void 0:n.rememberedState)==null?void 0:r[i]}on(i,n){let r=l=>{let u=n(l);l.cancelable&&!l.defaultPrevented&&u===!1&&l.preventDefault()};return document.addEventListener(`inertia:${i}`,r),()=>document.removeEventListener(`inertia:${i}`,r)}},$V={buildDOMElement(i){let n=document.createElement("template");n.innerHTML=i;let r=n.content.firstChild;if(!i.startsWith("<script "))return r;let l=document.createElement("script");return l.innerHTML=r.innerHTML,r.getAttributeNames().forEach(u=>{l.setAttribute(u,r.getAttribute(u)||"")}),l},isInertiaManagedElement(i){return i.nodeType===Node.ELEMENT_NODE&&i.getAttribute("inertia")!==null},findMatchingElementIndex(i,n){let r=i.getAttribute("inertia");return r!==null?n.findIndex(l=>l.getAttribute("inertia")===r):-1},update:QD(function(i){let n=i.map(r=>this.buildDOMElement(r));Array.from(document.head.childNodes).filter(r=>this.isInertiaManagedElement(r)).forEach(r=>{var p,f;let l=this.findMatchingElementIndex(r,n);if(l===-1){(p=r==null?void 0:r.parentNode)==null||p.removeChild(r);return}let u=n.splice(l,1)[0];u&&!r.isEqualNode(u)&&((f=r==null?void 0:r.parentNode)==null||f.replaceChild(u,r))}),n.forEach(r=>document.head.appendChild(r))},1)};function VV(i,n,r){let l={},u=0;function p(){let A=u+=1;return l[A]=[],A.toString()}function f(A){A===null||Object.keys(l).indexOf(A)===-1||(delete l[A],v())}function b(A,x=[]){A!==null&&Object.keys(l).indexOf(A)>-1&&(l[A]=x),v()}function m(){let A=n(""),x={...A?{title:`<title inertia="">${A}</title>`}:{}},y=Object.values(l).reduce((S,T)=>S.concat(T),[]).reduce((S,T)=>{if(T.indexOf("<")===-1)return S;if(T.indexOf("<title ")===0){let F=T.match(/(<title [^>]+>)(.*?)(<\/title>)/);return S.title=F?`${F[1]}${n(F[2])}${F[3]}`:T,S}let I=T.match(/ inertia="[^"]+"/);return I?S[I[0]]=T:S[Object.keys(S).length]=T,S},x);return Object.values(y)}function v(){i?r(m()):$V.update(m())}return v(),{forceUpdate:v,createProvider:function(){let A=p();return{update:x=>b(A,x),disconnect:()=>f(A)}}}}var t5=null;function HV(i){document.addEventListener("inertia:start",UV.bind(null,i)),document.addEventListener("inertia:progress",qV),document.addEventListener("inertia:finish",GV)}function UV(i){t5=setTimeout(()=>Ki.start(),i)}function qV(i){var n;Ki.isStarted()&&((n=i.detail.progress)!=null&&n.percentage)&&Ki.set(Math.max(Ki.status,i.detail.progress.percentage/100*.9))}function GV(i){if(clearTimeout(t5),Ki.isStarted())i.detail.visit.completed?Ki.done():i.detail.visit.interrupted?Ki.set(0):i.detail.visit.cancelled&&(Ki.done(),Ki.remove());else return}function WV(i){let n=document.createElement("style");n.type="text/css",n.textContent=`
    #nprogress {
      pointer-events: none;
    }

    #nprogress .bar {
      background: ${i};

      position: fixed;
      z-index: 1031;
      top: 0;
      left: 0;

      width: 100%;
      height: 2px;
    }

    #nprogress .peg {
      display: block;
      position: absolute;
      right: 0px;
      width: 100px;
      height: 100%;
      box-shadow: 0 0 10px ${i}, 0 0 5px ${i};
      opacity: 1.0;

      -webkit-transform: rotate(3deg) translate(0px, -4px);
          -ms-transform: rotate(3deg) translate(0px, -4px);
              transform: rotate(3deg) translate(0px, -4px);
    }

    #nprogress .spinner {
      display: block;
      position: fixed;
      z-index: 1031;
      top: 15px;
      right: 15px;
    }

    #nprogress .spinner-icon {
      width: 18px;
      height: 18px;
      box-sizing: border-box;

      border: solid 2px transparent;
      border-top-color: ${i};
      border-left-color: ${i};
      border-radius: 50%;

      -webkit-animation: nprogress-spinner 400ms linear infinite;
              animation: nprogress-spinner 400ms linear infinite;
    }

    .nprogress-custom-parent {
      overflow: hidden;
      position: relative;
    }

    .nprogress-custom-parent #nprogress .spinner,
    .nprogress-custom-parent #nprogress .bar {
      position: absolute;
    }

    @-webkit-keyframes nprogress-spinner {
      0%   { -webkit-transform: rotate(0deg); }
      100% { -webkit-transform: rotate(360deg); }
    }
    @keyframes nprogress-spinner {
      0%   { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }
  `,document.head.appendChild(n)}function KV({delay:i=250,color:n="#29d",includeCSS:r=!0,showSpinner:l=!1}={}){HV(i),Ki.configure({showSpinner:l}),r&&WV(n)}function YV(i){let n=i.currentTarget.tagName.toLowerCase()==="a";return!(i.target&&(i==null?void 0:i.target).isContentEditable||i.defaultPrevented||n&&i.which>1||n&&i.altKey||n&&i.ctrlKey||n&&i.metaKey||n&&i.shiftKey)}var Ze=new jV;/**
* @vue/shared v3.4.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function hf(i,n){const r=new Set(i.split(","));return n?l=>r.has(l.toLowerCase()):l=>r.has(l)}const jt={},Il=[],yo=()=>{},QV=()=>!1,hu=i=>i.charCodeAt(0)===111&&i.charCodeAt(1)===110&&(i.charCodeAt(2)>122||i.charCodeAt(2)<97),n_=i=>i.startsWith("onUpdate:"),nn=Object.assign,o_=(i,n)=>{const r=i.indexOf(n);r>-1&&i.splice(r,1)},ZV=Object.prototype.hasOwnProperty,Tt=(i,n)=>ZV.call(i,n),Ve=Array.isArray,Ml=i=>ac(i)==="[object Map]",Ma=i=>ac(i)==="[object Set]",_S=i=>ac(i)==="[object Date]",JV=i=>ac(i)==="[object RegExp]",ot=i=>typeof i=="function",on=i=>typeof i=="string",hs=i=>typeof i=="symbol",Ut=i=>i!==null&&typeof i=="object",i_=i=>(Ut(i)||ot(i))&&ot(i.then)&&ot(i.catch),n5=Object.prototype.toString,ac=i=>n5.call(i),XV=i=>ac(i).slice(8,-1),o5=i=>ac(i)==="[object Object]",r_=i=>on(i)&&i!=="NaN"&&i[0]!=="-"&&""+parseInt(i,10)===i,Ol=hf(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),pf=i=>{const n=Object.create(null);return r=>n[r]||(n[r]=i(r))},eH=/-(\w)/g,so=pf(i=>i.replace(eH,(n,r)=>r?r.toUpperCase():"")),tH=/\B([A-Z])/g,$o=pf(i=>i.replace(tH,"-$1").toLowerCase()),pu=pf(i=>i.charAt(0).toUpperCase()+i.slice(1)),Fd=pf(i=>i?`on${pu(i)}`:""),Ti=(i,n)=>!Object.is(i,n),Bl=(i,n)=>{for(let r=0;r<i.length;r++)i[r](n)},Op=(i,n,r)=>{Object.defineProperty(i,n,{configurable:!0,enumerable:!1,value:r})},Yd=i=>{const n=parseFloat(i);return isNaN(n)?i:n},Bp=i=>{const n=on(i)?Number(i):NaN;return isNaN(n)?i:n};let wS;const i5=()=>wS||(wS=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{}),nH="Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt,console,Error",oH=hf(nH);function fu(i){if(Ve(i)){const n={};for(let r=0;r<i.length;r++){const l=i[r],u=on(l)?aH(l):fu(l);if(u)for(const p in u)n[p]=u[p]}return n}else if(on(i)||Ut(i))return i}const iH=/;(?![^(]*\))/g,rH=/:([^]+)/,sH=/\/\*[^]*?\*\//g;function aH(i){const n={};return i.replace(sH,"").split(iH).forEach(r=>{if(r){const l=r.split(rH);l.length>1&&(n[l[0].trim()]=l[1].trim())}}),n}function Wn(i){let n="";if(on(i))n=i;else if(Ve(i))for(let r=0;r<i.length;r++){const l=Wn(i[r]);l&&(n+=l+" ")}else if(Ut(i))for(const r in i)i[r]&&(n+=r+" ");return n.trim()}function lH(i){if(!i)return null;let{class:n,style:r}=i;return n&&!on(n)&&(i.class=Wn(n)),r&&(i.style=fu(r)),i}const cH="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",dH=hf(cH);function r5(i){return!!i||i===""}function uH(i,n){if(i.length!==n.length)return!1;let r=!0;for(let l=0;r&&l<i.length;l++)r=ps(i[l],n[l]);return r}function ps(i,n){if(i===n)return!0;let r=_S(i),l=_S(n);if(r||l)return r&&l?i.getTime()===n.getTime():!1;if(r=hs(i),l=hs(n),r||l)return i===n;if(r=Ve(i),l=Ve(n),r||l)return r&&l?uH(i,n):!1;if(r=Ut(i),l=Ut(n),r||l){if(!r||!l)return!1;const u=Object.keys(i).length,p=Object.keys(n).length;if(u!==p)return!1;for(const f in i){const b=i.hasOwnProperty(f),m=n.hasOwnProperty(f);if(b&&!m||!b&&m||!ps(i[f],n[f]))return!1}}return String(i)===String(n)}function ff(i,n){return i.findIndex(r=>ps(r,n))}const ce=i=>on(i)?i:i==null?"":Ve(i)||Ut(i)&&(i.toString===n5||!ot(i.toString))?JSON.stringify(i,s5,2):String(i),s5=(i,n)=>n&&n.__v_isRef?s5(i,n.value):Ml(n)?{[`Map(${n.size})`]:[...n.entries()].reduce((r,[l,u],p)=>(r[lb(l,p)+" =>"]=u,r),{})}:Ma(n)?{[`Set(${n.size})`]:[...n.values()].map(r=>lb(r))}:hs(n)?lb(n):Ut(n)&&!Ve(n)&&!o5(n)?String(n):n,lb=(i,n="")=>{var r;return hs(i)?`Symbol(${(r=i.description)!=null?r:n})`:i};/**
* @vue/reactivity v3.4.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Fo;class s_{constructor(n=!1){this.detached=n,this._active=!0,this.effects=[],this.cleanups=[],this.parent=Fo,!n&&Fo&&(this.index=(Fo.scopes||(Fo.scopes=[])).push(this)-1)}get active(){return this._active}run(n){if(this._active){const r=Fo;try{return Fo=this,n()}finally{Fo=r}}}on(){Fo=this}off(){Fo=this.parent}stop(n){if(this._active){let r,l;for(r=0,l=this.effects.length;r<l;r++)this.effects[r].stop();for(r=0,l=this.cleanups.length;r<l;r++)this.cleanups[r]();if(this.scopes)for(r=0,l=this.scopes.length;r<l;r++)this.scopes[r].stop(!0);if(!this.detached&&this.parent&&!n){const u=this.parent.scopes.pop();u&&u!==this&&(this.parent.scopes[this.index]=u,u.index=this.index)}this.parent=void 0,this._active=!1}}}function hH(i){return new s_(i)}function a5(i,n=Fo){n&&n.active&&n.effects.push(i)}function l5(){return Fo}function pH(i){Fo&&Fo.cleanups.push(i)}let fa;class ql{constructor(n,r,l,u){this.fn=n,this.trigger=r,this.scheduler=l,this.active=!0,this.deps=[],this._dirtyLevel=4,this._trackId=0,this._runnings=0,this._shouldSchedule=!1,this._depsLength=0,a5(this,u)}get dirty(){if(this._dirtyLevel===2||this._dirtyLevel===3){this._dirtyLevel=1,Oa();for(let n=0;n<this._depsLength;n++){const r=this.deps[n];if(r.computed&&(fH(r.computed),this._dirtyLevel>=4))break}this._dirtyLevel===1&&(this._dirtyLevel=0),Ba()}return this._dirtyLevel>=4}set dirty(n){this._dirtyLevel=n?4:0}run(){if(this._dirtyLevel=0,!this.active)return this.fn();let n=ds,r=fa;try{return ds=!0,fa=this,this._runnings++,vS(this),this.fn()}finally{AS(this),this._runnings--,fa=r,ds=n}}stop(){var n;this.active&&(vS(this),AS(this),(n=this.onStop)==null||n.call(this),this.active=!1)}}function fH(i){return i.value}function vS(i){i._trackId++,i._depsLength=0}function AS(i){if(i.deps.length>i._depsLength){for(let n=i._depsLength;n<i.deps.length;n++)c5(i.deps[n],i);i.deps.length=i._depsLength}}function c5(i,n){const r=i.get(n);r!==void 0&&n._trackId!==r&&(i.delete(n),i.size===0&&i.cleanup())}function mH(i,n){i.effect instanceof ql&&(i=i.effect.fn);const r=new ql(i,yo,()=>{r.dirty&&r.run()});n&&(nn(r,n),n.scope&&a5(r,n.scope)),(!n||!n.lazy)&&r.run();const l=r.run.bind(r);return l.effect=r,l}function gH(i){i.effect.stop()}let ds=!0,lk=0;const d5=[];function Oa(){d5.push(ds),ds=!1}function Ba(){const i=d5.pop();ds=i===void 0?!0:i}function a_(){lk++}function l_(){for(lk--;!lk&&ck.length;)ck.shift()()}function u5(i,n,r){if(n.get(i)!==i._trackId){n.set(i,i._trackId);const l=i.deps[i._depsLength];l!==n?(l&&c5(l,i),i.deps[i._depsLength++]=n):i._depsLength++}}const ck=[];function h5(i,n,r){a_();for(const l of i.keys()){let u;l._dirtyLevel<n&&(u??(u=i.get(l)===l._trackId))&&(l._shouldSchedule||(l._shouldSchedule=l._dirtyLevel===0),l._dirtyLevel=n),l._shouldSchedule&&(u??(u=i.get(l)===l._trackId))&&(l.trigger(),(!l._runnings||l.allowRecurse)&&l._dirtyLevel!==2&&(l._shouldSchedule=!1,l.scheduler&&ck.push(l.scheduler)))}l_()}const p5=(i,n)=>{const r=new Map;return r.cleanup=i,r.computed=n,r},Pp=new WeakMap,ma=Symbol(""),dk=Symbol("");function So(i,n,r){if(ds&&fa){let l=Pp.get(i);l||Pp.set(i,l=new Map);let u=l.get(r);u||l.set(r,u=p5(()=>l.delete(r))),u5(fa,u)}}function xr(i,n,r,l,u,p){const f=Pp.get(i);if(!f)return;let b=[];if(n==="clear")b=[...f.values()];else if(r==="length"&&Ve(i)){const m=Number(l);f.forEach((v,A)=>{(A==="length"||!hs(A)&&A>=m)&&b.push(v)})}else switch(r!==void 0&&b.push(f.get(r)),n){case"add":Ve(i)?r_(r)&&b.push(f.get("length")):(b.push(f.get(ma)),Ml(i)&&b.push(f.get(dk)));break;case"delete":Ve(i)||(b.push(f.get(ma)),Ml(i)&&b.push(f.get(dk)));break;case"set":Ml(i)&&b.push(f.get(ma));break}a_();for(const m of b)m&&h5(m,4);l_()}function bH(i,n){var r;return(r=Pp.get(i))==null?void 0:r.get(n)}const kH=hf("__proto__,__v_isRef,__isVue"),f5=new Set(Object.getOwnPropertyNames(Symbol).filter(i=>i!=="arguments"&&i!=="caller").map(i=>Symbol[i]).filter(hs)),CS=_H();function _H(){const i={};return["includes","indexOf","lastIndexOf"].forEach(n=>{i[n]=function(...r){const l=wt(this);for(let p=0,f=this.length;p<f;p++)So(l,"get",p+"");const u=l[n](...r);return u===-1||u===!1?l[n](...r.map(wt)):u}}),["push","pop","shift","unshift","splice"].forEach(n=>{i[n]=function(...r){Oa(),a_();const l=wt(this)[n].apply(this,r);return l_(),Ba(),l}}),i}function wH(i){const n=wt(this);return So(n,"has",i),n.hasOwnProperty(i)}class m5{constructor(n=!1,r=!1){this._isReadonly=n,this._isShallow=r}get(n,r,l){const u=this._isReadonly,p=this._isShallow;if(r==="__v_isReactive")return!u;if(r==="__v_isReadonly")return u;if(r==="__v_isShallow")return p;if(r==="__v_raw")return l===(u?p?v5:w5:p?_5:k5).get(n)||Object.getPrototypeOf(n)===Object.getPrototypeOf(l)?n:void 0;const f=Ve(n);if(!u){if(f&&Tt(CS,r))return Reflect.get(CS,r,l);if(r==="hasOwnProperty")return wH}const b=Reflect.get(n,r,l);return(hs(r)?f5.has(r):kH(r))||(u||So(n,"get",r),p)?b:$n(b)?f&&r_(r)?b:b.value:Ut(b)?u?d_(b):rn(b):b}}class g5 extends m5{constructor(n=!1){super(!1,n)}set(n,r,l,u){let p=n[r];if(!this._isShallow){const m=wa(p);if(!Qd(l)&&!wa(l)&&(p=wt(p),l=wt(l)),!Ve(n)&&$n(p)&&!$n(l))return m?!1:(p.value=l,!0)}const f=Ve(n)&&r_(r)?Number(r)<n.length:Tt(n,r),b=Reflect.set(n,r,l,u);return n===wt(u)&&(f?Ti(l,p)&&xr(n,"set",r,l):xr(n,"add",r,l)),b}deleteProperty(n,r){const l=Tt(n,r);n[r];const u=Reflect.deleteProperty(n,r);return u&&l&&xr(n,"delete",r,void 0),u}has(n,r){const l=Reflect.has(n,r);return(!hs(r)||!f5.has(r))&&So(n,"has",r),l}ownKeys(n){return So(n,"iterate",Ve(n)?"length":ma),Reflect.ownKeys(n)}}class b5 extends m5{constructor(n=!1){super(!0,n)}set(n,r){return!0}deleteProperty(n,r){return!0}}const vH=new g5,AH=new b5,CH=new g5(!0),yH=new b5(!0),c_=i=>i,mf=i=>Reflect.getPrototypeOf(i);function $h(i,n,r=!1,l=!1){i=i.__v_raw;const u=wt(i),p=wt(n);r||(Ti(n,p)&&So(u,"get",n),So(u,"get",p));const{has:f}=mf(u),b=l?c_:r?h_:Jd;if(f.call(u,n))return b(i.get(n));if(f.call(u,p))return b(i.get(p));i!==u&&i.get(n)}function Vh(i,n=!1){const r=this.__v_raw,l=wt(r),u=wt(i);return n||(Ti(i,u)&&So(l,"has",i),So(l,"has",u)),i===u?r.has(i):r.has(i)||r.has(u)}function Hh(i,n=!1){return i=i.__v_raw,!n&&So(wt(i),"iterate",ma),Reflect.get(i,"size",i)}function yS(i){i=wt(i);const n=wt(this);return mf(n).has.call(n,i)||(n.add(i),xr(n,"add",i,i)),this}function xS(i,n){n=wt(n);const r=wt(this),{has:l,get:u}=mf(r);let p=l.call(r,i);p||(i=wt(i),p=l.call(r,i));const f=u.call(r,i);return r.set(i,n),p?Ti(n,f)&&xr(r,"set",i,n):xr(r,"add",i,n),this}function ES(i){const n=wt(this),{has:r,get:l}=mf(n);let u=r.call(n,i);u||(i=wt(i),u=r.call(n,i)),l&&l.call(n,i);const p=n.delete(i);return u&&xr(n,"delete",i,void 0),p}function SS(){const i=wt(this),n=i.size!==0,r=i.clear();return n&&xr(i,"clear",void 0,void 0),r}function Uh(i,n){return function(l,u){const p=this,f=p.__v_raw,b=wt(f),m=n?c_:i?h_:Jd;return!i&&So(b,"iterate",ma),f.forEach((v,A)=>l.call(u,m(v),m(A),p))}}function qh(i,n,r){return function(...l){const u=this.__v_raw,p=wt(u),f=Ml(p),b=i==="entries"||i===Symbol.iterator&&f,m=i==="keys"&&f,v=u[i](...l),A=r?c_:n?h_:Jd;return!n&&So(p,"iterate",m?dk:ma),{next(){const{value:x,done:y}=v.next();return y?{value:x,done:y}:{value:b?[A(x[0]),A(x[1])]:A(x),done:y}},[Symbol.iterator](){return this}}}}function Jr(i){return function(...n){return i==="delete"?!1:i==="clear"?void 0:this}}function xH(){const i={get(p){return $h(this,p)},get size(){return Hh(this)},has:Vh,add:yS,set:xS,delete:ES,clear:SS,forEach:Uh(!1,!1)},n={get(p){return $h(this,p,!1,!0)},get size(){return Hh(this)},has:Vh,add:yS,set:xS,delete:ES,clear:SS,forEach:Uh(!1,!0)},r={get(p){return $h(this,p,!0)},get size(){return Hh(this,!0)},has(p){return Vh.call(this,p,!0)},add:Jr("add"),set:Jr("set"),delete:Jr("delete"),clear:Jr("clear"),forEach:Uh(!0,!1)},l={get(p){return $h(this,p,!0,!0)},get size(){return Hh(this,!0)},has(p){return Vh.call(this,p,!0)},add:Jr("add"),set:Jr("set"),delete:Jr("delete"),clear:Jr("clear"),forEach:Uh(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(p=>{i[p]=qh(p,!1,!1),r[p]=qh(p,!0,!1),n[p]=qh(p,!1,!0),l[p]=qh(p,!0,!0)}),[i,r,n,l]}const[EH,SH,TH,DH]=xH();function gf(i,n){const r=n?i?DH:TH:i?SH:EH;return(l,u,p)=>u==="__v_isReactive"?!i:u==="__v_isReadonly"?i:u==="__v_raw"?l:Reflect.get(Tt(r,u)&&u in l?r:l,u,p)}const IH={get:gf(!1,!1)},MH={get:gf(!1,!0)},OH={get:gf(!0,!1)},BH={get:gf(!0,!0)},k5=new WeakMap,_5=new WeakMap,w5=new WeakMap,v5=new WeakMap;function PH(i){switch(i){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function NH(i){return i.__v_skip||!Object.isExtensible(i)?0:PH(XV(i))}function rn(i){return wa(i)?i:bf(i,!1,vH,IH,k5)}function A5(i){return bf(i,!1,CH,MH,_5)}function d_(i){return bf(i,!0,AH,OH,w5)}function LH(i){return bf(i,!0,yH,BH,v5)}function bf(i,n,r,l,u){if(!Ut(i)||i.__v_raw&&!(n&&i.__v_isReactive))return i;const p=u.get(i);if(p)return p;const f=NH(i);if(f===0)return i;const b=new Proxy(i,f===2?l:r);return u.set(i,b),b}function ga(i){return wa(i)?ga(i.__v_raw):!!(i&&i.__v_isReactive)}function wa(i){return!!(i&&i.__v_isReadonly)}function Qd(i){return!!(i&&i.__v_isShallow)}function u_(i){return ga(i)||wa(i)}function wt(i){const n=i&&i.__v_raw;return n?wt(n):i}function Zd(i){return Object.isExtensible(i)&&Op(i,"__v_skip",!0),i}const Jd=i=>Ut(i)?rn(i):i,h_=i=>Ut(i)?d_(i):i;class C5{constructor(n,r,l,u){this.getter=n,this._setter=r,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this.effect=new ql(()=>n(this._value),()=>Pl(this,this.effect._dirtyLevel===2?2:3)),this.effect.computed=this,this.effect.active=this._cacheable=!u,this.__v_isReadonly=l}get value(){const n=wt(this);return(!n._cacheable||n.effect.dirty)&&Ti(n._value,n._value=n.effect.run())&&Pl(n,4),p_(n),n.effect._dirtyLevel>=2&&Pl(n,2),n._value}set value(n){this._setter(n)}get _dirty(){return this.effect.dirty}set _dirty(n){this.effect.dirty=n}}function RH(i,n,r=!1){let l,u;const p=ot(i);return p?(l=i,u=yo):(l=i.get,u=i.set),new C5(l,u,p||!u,r)}function p_(i){var n;ds&&fa&&(i=wt(i),u5(fa,(n=i.dep)!=null?n:i.dep=p5(()=>i.dep=void 0,i instanceof C5?i:void 0)))}function Pl(i,n=4,r){i=wt(i);const l=i.dep;l&&h5(l,n)}function $n(i){return!!(i&&i.__v_isRef===!0)}function _t(i){return x5(i,!1)}function y5(i){return x5(i,!0)}function x5(i,n){return $n(i)?i:new FH(i,n)}class FH{constructor(n,r){this.__v_isShallow=r,this.dep=void 0,this.__v_isRef=!0,this._rawValue=r?n:wt(n),this._value=r?n:Jd(n)}get value(){return p_(this),this._value}set value(n){const r=this.__v_isShallow||Qd(n)||wa(n);n=r?n:wt(n),Ti(n,this._rawValue)&&(this._rawValue=n,this._value=r?n:Jd(n),Pl(this,4))}}function zH(i){Pl(i,4)}function f_(i){return $n(i)?i.value:i}function jH(i){return ot(i)?i():f_(i)}const $H={get:(i,n,r)=>f_(Reflect.get(i,n,r)),set:(i,n,r,l)=>{const u=i[n];return $n(u)&&!$n(r)?(u.value=r,!0):Reflect.set(i,n,r,l)}};function m_(i){return ga(i)?i:new Proxy(i,$H)}class VH{constructor(n){this.dep=void 0,this.__v_isRef=!0;const{get:r,set:l}=n(()=>p_(this),()=>Pl(this));this._get=r,this._set=l}get value(){return this._get()}set value(n){this._set(n)}}function E5(i){return new VH(i)}function HH(i){const n=Ve(i)?new Array(i.length):{};for(const r in i)n[r]=S5(i,r);return n}class UH{constructor(n,r,l){this._object=n,this._key=r,this._defaultValue=l,this.__v_isRef=!0}get value(){const n=this._object[this._key];return n===void 0?this._defaultValue:n}set value(n){this._object[this._key]=n}get dep(){return bH(wt(this._object),this._key)}}class qH{constructor(n){this._getter=n,this.__v_isRef=!0,this.__v_isReadonly=!0}get value(){return this._getter()}}function GH(i,n,r){return $n(i)?i:ot(i)?new qH(i):Ut(i)&&arguments.length>1?S5(i,n,r):_t(i)}function S5(i,n,r){const l=i[n];return $n(l)?l:new UH(i,n,r)}const WH={GET:"get",HAS:"has",ITERATE:"iterate"},KH={SET:"set",ADD:"add",DELETE:"delete",CLEAR:"clear"};/**
* @vue/runtime-core v3.4.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function YH(i,n){}const QH={SETUP_FUNCTION:0,0:"SETUP_FUNCTION",RENDER_FUNCTION:1,1:"RENDER_FUNCTION",WATCH_GETTER:2,2:"WATCH_GETTER",WATCH_CALLBACK:3,3:"WATCH_CALLBACK",WATCH_CLEANUP:4,4:"WATCH_CLEANUP",NATIVE_EVENT_HANDLER:5,5:"NATIVE_EVENT_HANDLER",COMPONENT_EVENT_HANDLER:6,6:"COMPONENT_EVENT_HANDLER",VNODE_HOOK:7,7:"VNODE_HOOK",DIRECTIVE_HOOK:8,8:"DIRECTIVE_HOOK",TRANSITION_HOOK:9,9:"TRANSITION_HOOK",APP_ERROR_HANDLER:10,10:"APP_ERROR_HANDLER",APP_WARN_HANDLER:11,11:"APP_WARN_HANDLER",FUNCTION_REF:12,12:"FUNCTION_REF",ASYNC_COMPONENT_LOADER:13,13:"ASYNC_COMPONENT_LOADER",SCHEDULER:14,14:"SCHEDULER"},ZH={sp:"serverPrefetch hook",bc:"beforeCreate hook",c:"created hook",bm:"beforeMount hook",m:"mounted hook",bu:"beforeUpdate hook",u:"updated",bum:"beforeUnmount hook",um:"unmounted hook",a:"activated hook",da:"deactivated hook",ec:"errorCaptured hook",rtc:"renderTracked hook",rtg:"renderTriggered hook",0:"setup function",1:"render function",2:"watcher getter",3:"watcher callback",4:"watcher cleanup function",5:"native event handler",6:"component event handler",7:"vnode hook",8:"directive hook",9:"transition hook",10:"app errorHandler",11:"app warnHandler",12:"ref function",13:"async component loader",14:"scheduler flush. This is likely a Vue internals bug. Please open an issue at https://github.com/vuejs/core ."};function Er(i,n,r,l){try{return l?i(...l):i()}catch(u){Pa(u,n,r)}}function Vo(i,n,r,l){if(ot(i)){const p=Er(i,n,r,l);return p&&i_(p)&&p.catch(f=>{Pa(f,n,r)}),p}const u=[];for(let p=0;p<i.length;p++)u.push(Vo(i[p],n,r,l));return u}function Pa(i,n,r,l=!0){const u=n?n.vnode:null;if(n){let p=n.parent;const f=n.proxy,b=`https://vuejs.org/error-reference/#runtime-${r}`;for(;p;){const v=p.ec;if(v){for(let A=0;A<v.length;A++)if(v[A](i,f,b)===!1)return}p=p.parent}const m=n.appContext.config.errorHandler;if(m){Er(m,null,10,[i,f,b]);return}}JH(i,r,u,l)}function JH(i,n,r,l=!0){console.error(i)}let Xd=!1,uk=!1;const Kn=[];let Yi=0;const Nl=[];let is=null,aa=0;const T5=Promise.resolve();let g_=null;function mu(i){const n=g_||T5;return i?n.then(this?i.bind(this):i):n}function XH(i){let n=Yi+1,r=Kn.length;for(;n<r;){const l=n+r>>>1,u=Kn[l],p=eu(u);p<i||p===i&&u.pre?n=l+1:r=l}return n}function kf(i){(!Kn.length||!Kn.includes(i,Xd&&i.allowRecurse?Yi+1:Yi))&&(i.id==null?Kn.push(i):Kn.splice(XH(i.id),0,i),D5())}function D5(){!Xd&&!uk&&(uk=!0,g_=T5.then(I5))}function eU(i){const n=Kn.indexOf(i);n>Yi&&Kn.splice(n,1)}function Np(i){Ve(i)?Nl.push(...i):(!is||!is.includes(i,i.allowRecurse?aa+1:aa))&&Nl.push(i),D5()}function TS(i,n,r=Xd?Yi+1:0){for(;r<Kn.length;r++){const l=Kn[r];if(l&&l.pre){if(i&&l.id!==i.uid)continue;Kn.splice(r,1),r--,l()}}}function Lp(i){if(Nl.length){const n=[...new Set(Nl)].sort((r,l)=>eu(r)-eu(l));if(Nl.length=0,is){is.push(...n);return}for(is=n,aa=0;aa<is.length;aa++)is[aa]();is=null,aa=0}}const eu=i=>i.id==null?1/0:i.id,tU=(i,n)=>{const r=eu(i)-eu(n);if(r===0){if(i.pre&&!n.pre)return-1;if(n.pre&&!i.pre)return 1}return r};function I5(i){uk=!1,Xd=!0,Kn.sort(tU);try{for(Yi=0;Yi<Kn.length;Yi++){const n=Kn[Yi];n&&n.active!==!1&&Er(n,null,14)}}finally{Yi=0,Kn.length=0,Lp(),Xd=!1,g_=null,(Kn.length||Nl.length)&&I5()}}let Cl,Gh=[];function M5(i,n){var r,l;Cl=i,Cl?(Cl.enabled=!0,Gh.forEach(({event:u,args:p})=>Cl.emit(u,...p)),Gh=[]):typeof window<"u"&&window.HTMLElement&&!((l=(r=window.navigator)==null?void 0:r.userAgent)!=null&&l.includes("jsdom"))?((n.__VUE_DEVTOOLS_HOOK_REPLAY__=n.__VUE_DEVTOOLS_HOOK_REPLAY__||[]).push(p=>{M5(p,n)}),setTimeout(()=>{Cl||(n.__VUE_DEVTOOLS_HOOK_REPLAY__=null,Gh=[])},3e3)):Gh=[]}function nU(i,n,...r){if(i.isUnmounted)return;const l=i.vnode.props||jt;let u=r;const p=n.startsWith("update:"),f=p&&n.slice(7);if(f&&f in l){const A=`${f==="modelValue"?"model":f}Modifiers`,{number:x,trim:y}=l[A]||jt;y&&(u=r.map(S=>on(S)?S.trim():S)),x&&(u=r.map(Yd))}let b,m=l[b=Fd(n)]||l[b=Fd(so(n))];!m&&p&&(m=l[b=Fd($o(n))]),m&&Vo(m,i,6,u);const v=l[b+"Once"];if(v){if(!i.emitted)i.emitted={};else if(i.emitted[b])return;i.emitted[b]=!0,Vo(v,i,6,u)}}function O5(i,n,r=!1){const l=n.emitsCache,u=l.get(i);if(u!==void 0)return u;const p=i.emits;let f={},b=!1;if(!ot(i)){const m=v=>{const A=O5(v,n,!0);A&&(b=!0,nn(f,A))};!r&&n.mixins.length&&n.mixins.forEach(m),i.extends&&m(i.extends),i.mixins&&i.mixins.forEach(m)}return!p&&!b?(Ut(i)&&l.set(i,null),null):(Ve(p)?p.forEach(m=>f[m]=null):nn(f,p),Ut(i)&&l.set(i,f),f)}function _f(i,n){return!i||!hu(n)?!1:(n=n.slice(2).replace(/Once$/,""),Tt(i,n[0].toLowerCase()+n.slice(1))||Tt(i,$o(n))||Tt(i,n))}let vn=null,wf=null;function tu(i){const n=vn;return vn=i,wf=i&&i.type.__scopeId||null,n}function B5(i){wf=i}function P5(){wf=null}const oU=i=>gt;function gt(i,n=vn,r){if(!n||i._n)return i;const l=(...u)=>{l._d&&_k(-1);const p=tu(n);let f;try{f=i(...u)}finally{tu(p),l._d&&_k(1)}return f};return l._n=!0,l._c=!0,l._d=!0,l}function gp(i){const{type:n,vnode:r,proxy:l,withProxy:u,props:p,propsOptions:[f],slots:b,attrs:m,emit:v,render:A,renderCache:x,data:y,setupState:S,ctx:T,inheritAttrs:I}=i;let F,N;const L=tu(i);try{if(r.shapeFlag&4){const z=u||l,H=z;F=jo(A.call(H,z,x,p,S,y,T)),N=m}else{const z=n;F=jo(z.length>1?z(p,{attrs:m,slots:b,emit:v}):z(p,null)),N=n.props?m:rU(m)}}catch(z){Vd.length=0,Pa(z,i,1),F=ue(Yn)}let B=F;if(N&&I!==!1){const z=Object.keys(N),{shapeFlag:H}=B;z.length&&H&7&&(f&&z.some(n_)&&(N=sU(N,f)),B=Xi(B,N))}return r.dirs&&(B=Xi(B),B.dirs=B.dirs?B.dirs.concat(r.dirs):r.dirs),r.transition&&(B.transition=r.transition),F=B,tu(L),F}function iU(i,n=!0){let r;for(let l=0;l<i.length;l++){const u=i[l];if(ms(u)){if(u.type!==Yn||u.children==="v-if"){if(r)return;r=u}}else return}return r}const rU=i=>{let n;for(const r in i)(r==="class"||r==="style"||hu(r))&&((n||(n={}))[r]=i[r]);return n},sU=(i,n)=>{const r={};for(const l in i)(!n_(l)||!(l.slice(9)in n))&&(r[l]=i[l]);return r};function aU(i,n,r){const{props:l,children:u,component:p}=i,{props:f,children:b,patchFlag:m}=n,v=p.emitsOptions;if(n.dirs||n.transition)return!0;if(r&&m>=0){if(m&1024)return!0;if(m&16)return l?DS(l,f,v):!!f;if(m&8){const A=n.dynamicProps;for(let x=0;x<A.length;x++){const y=A[x];if(f[y]!==l[y]&&!_f(v,y))return!0}}}else return(u||b)&&(!b||!b.$stable)?!0:l===f?!1:l?f?DS(l,f,v):!0:!!f;return!1}function DS(i,n,r){const l=Object.keys(n);if(l.length!==Object.keys(i).length)return!0;for(let u=0;u<l.length;u++){const p=l[u];if(n[p]!==i[p]&&!_f(r,p))return!0}return!1}function b_({vnode:i,parent:n},r){for(;n;){const l=n.subTree;if(l.suspense&&l.suspense.activeBranch===i&&(l.el=i.el),l===i)(i=n.vnode).el=r,n=n.parent;else break}}const k_="components",lU="directives";function Ce(i,n){return __(k_,i,!0,n)||i}const N5=Symbol.for("v-ndc");function cU(i){return on(i)?__(k_,i,!1)||i:i||N5}function dU(i){return __(lU,i)}function __(i,n,r=!0,l=!1){const u=vn||En;if(u){const p=u.type;if(i===k_){const b=yk(p,!1);if(b&&(b===n||b===so(n)||b===pu(so(n))))return p}const f=IS(u[i]||p[i],n)||IS(u.appContext[i],n);return!f&&l?p:f}}function IS(i,n){return i&&(i[n]||i[so(n)]||i[pu(so(n))])}const L5=i=>i.__isSuspense;let hk=0;const uU={name:"Suspense",__isSuspense:!0,process(i,n,r,l,u,p,f,b,m,v){if(i==null)pU(n,r,l,u,p,f,b,m,v);else{if(p&&p.deps>0&&!i.suspense.isInFallback){n.suspense=i.suspense,n.suspense.vnode=n,n.el=i.el;return}fU(i,n,r,l,u,f,b,m,v)}},hydrate:mU,create:w_,normalize:gU},hU=uU;function nu(i,n){const r=i.props&&i.props[n];ot(r)&&r()}function pU(i,n,r,l,u,p,f,b,m){const{p:v,o:{createElement:A}}=m,x=A("div"),y=i.suspense=w_(i,u,l,n,x,r,p,f,b,m);v(null,y.pendingBranch=i.ssContent,x,null,l,y,p,f),y.deps>0?(nu(i,"onPending"),nu(i,"onFallback"),v(null,i.ssFallback,n,r,l,null,p,f),Ll(y,i.ssFallback)):y.resolve(!1,!0)}function fU(i,n,r,l,u,p,f,b,{p:m,um:v,o:{createElement:A}}){const x=n.suspense=i.suspense;x.vnode=n,n.el=i.el;const y=n.ssContent,S=n.ssFallback,{activeBranch:T,pendingBranch:I,isInFallback:F,isHydrating:N}=x;if(I)x.pendingBranch=y,Ei(y,I)?(m(I,y,x.hiddenContainer,null,u,x,p,f,b),x.deps<=0?x.resolve():F&&(N||(m(T,S,r,l,u,null,p,f,b),Ll(x,S)))):(x.pendingId=hk++,N?(x.isHydrating=!1,x.activeBranch=I):v(I,u,x),x.deps=0,x.effects.length=0,x.hiddenContainer=A("div"),F?(m(null,y,x.hiddenContainer,null,u,x,p,f,b),x.deps<=0?x.resolve():(m(T,S,r,l,u,null,p,f,b),Ll(x,S))):T&&Ei(y,T)?(m(T,y,r,l,u,x,p,f,b),x.resolve(!0)):(m(null,y,x.hiddenContainer,null,u,x,p,f,b),x.deps<=0&&x.resolve()));else if(T&&Ei(y,T))m(T,y,r,l,u,x,p,f,b),Ll(x,y);else if(nu(n,"onPending"),x.pendingBranch=y,y.shapeFlag&512?x.pendingId=y.component.suspenseId:x.pendingId=hk++,m(null,y,x.hiddenContainer,null,u,x,p,f,b),x.deps<=0)x.resolve();else{const{timeout:L,pendingId:B}=x;L>0?setTimeout(()=>{x.pendingId===B&&x.fallback(S)},L):L===0&&x.fallback(S)}}function w_(i,n,r,l,u,p,f,b,m,v,A=!1){const{p:x,m:y,um:S,n:T,o:{parentNode:I,remove:F}}=v;let N;const L=bU(i);L&&n!=null&&n.pendingBranch&&(N=n.pendingId,n.deps++);const B=i.props?Bp(i.props.timeout):void 0,z=p,H={vnode:i,parent:n,parentComponent:r,namespace:f,container:l,hiddenContainer:u,deps:0,pendingId:hk++,timeout:typeof B=="number"?B:-1,activeBranch:null,pendingBranch:null,isInFallback:!A,isHydrating:A,isUnmounted:!1,effects:[],resolve(G=!1,P=!1){const{vnode:V,activeBranch:U,pendingBranch:W,pendingId:Y,effects:J,parentComponent:te,container:re}=H;let ae=!1;H.isHydrating?H.isHydrating=!1:G||(ae=U&&W.transition&&W.transition.mode==="out-in",ae&&(U.transition.afterLeave=()=>{Y===H.pendingId&&(y(W,re,p===z?T(U):p,0),Np(J))}),U&&(I(U.el)!==H.hiddenContainer&&(p=T(U)),S(U,te,H,!0)),ae||y(W,re,p,0)),Ll(H,W),H.pendingBranch=null,H.isInFallback=!1;let oe=H.parent,me=!1;for(;oe;){if(oe.pendingBranch){oe.effects.push(...J),me=!0;break}oe=oe.parent}!me&&!ae&&Np(J),H.effects=[],L&&n&&n.pendingBranch&&N===n.pendingId&&(n.deps--,n.deps===0&&!P&&n.resolve()),nu(V,"onResolve")},fallback(G){if(!H.pendingBranch)return;const{vnode:P,activeBranch:V,parentComponent:U,container:W,namespace:Y}=H;nu(P,"onFallback");const J=T(V),te=()=>{H.isInFallback&&(x(null,G,W,J,U,null,Y,b,m),Ll(H,G))},re=G.transition&&G.transition.mode==="out-in";re&&(V.transition.afterLeave=te),H.isInFallback=!0,S(V,U,null,!0),re||te()},move(G,P,V){H.activeBranch&&y(H.activeBranch,G,P,V),H.container=G},next(){return H.activeBranch&&T(H.activeBranch)},registerDep(G,P){const V=!!H.pendingBranch;V&&H.deps++;const U=G.vnode.el;G.asyncDep.catch(W=>{Pa(W,G,0)}).then(W=>{if(G.isUnmounted||H.isUnmounted||H.pendingId!==G.suspenseId)return;G.asyncResolved=!0;const{vnode:Y}=G;Ak(G,W,!1),U&&(Y.el=U);const J=!U&&G.subTree.el;P(G,Y,I(U||G.subTree.el),U?null:T(G.subTree),H,f,m),J&&F(J),b_(G,Y.el),V&&--H.deps===0&&H.resolve()})},unmount(G,P){H.isUnmounted=!0,H.activeBranch&&S(H.activeBranch,r,G,P),H.pendingBranch&&S(H.pendingBranch,r,G,P)}};return H}function mU(i,n,r,l,u,p,f,b,m){const v=n.suspense=w_(n,l,r,i.parentNode,document.createElement("div"),null,u,p,f,b,!0),A=m(i,v.pendingBranch=n.ssContent,r,v,p,f);return v.deps===0&&v.resolve(!1,!0),A}function gU(i){const{shapeFlag:n,children:r}=i,l=n&32;i.ssContent=MS(l?r.default:r),i.ssFallback=l?MS(r.fallback):ue(Yn)}function MS(i){let n;if(ot(i)){const r=ya&&i._c;r&&(i._d=!1,X()),i=i(),r&&(i._d=!0,n=xo,fI())}return Ve(i)&&(i=iU(i)),i=jo(i),n&&!i.dynamicChildren&&(i.dynamicChildren=n.filter(r=>r!==i)),i}function R5(i,n){n&&n.pendingBranch?Ve(i)?n.effects.push(...i):n.effects.push(i):Np(i)}function Ll(i,n){i.activeBranch=n;const{vnode:r,parentComponent:l}=i;let u=n.el;for(;!u&&n.component;)n=n.component.subTree,u=n.el;r.el=u,l&&l.subTree===r&&(l.vnode.el=u,b_(l,u))}function bU(i){var n;return((n=i.props)==null?void 0:n.suspensible)!=null&&i.props.suspensible!==!1}const F5=Symbol.for("v-scx"),z5=()=>jd(F5);function kU(i,n){return gu(i,null,n)}function j5(i,n){return gu(i,null,{flush:"post"})}function $5(i,n){return gu(i,null,{flush:"sync"})}const Wh={};function us(i,n,r){return gu(i,n,r)}function gu(i,n,{immediate:r,deep:l,flush:u,once:p,onTrack:f,onTrigger:b}=jt){if(n&&p){const G=n;n=(...P)=>{G(...P),H()}}const m=En,v=G=>l===!0?G:la(G,l===!1?1:void 0);let A,x=!1,y=!1;if($n(i)?(A=()=>i.value,x=Qd(i)):ga(i)?(A=()=>v(i),x=!0):Ve(i)?(y=!0,x=i.some(G=>ga(G)||Qd(G)),A=()=>i.map(G=>{if($n(G))return G.value;if(ga(G))return v(G);if(ot(G))return Er(G,m,2)})):ot(i)?n?A=()=>Er(i,m,2):A=()=>(S&&S(),Vo(i,m,3,[T])):A=yo,n&&l){const G=A;A=()=>la(G())}let S,T=G=>{S=B.onStop=()=>{Er(G,m,4),S=B.onStop=void 0}},I;if(ku)if(T=yo,n?r&&Vo(n,m,3,[A(),y?[]:void 0,T]):A(),u==="sync"){const G=z5();I=G.__watcherHandles||(G.__watcherHandles=[])}else return yo;let F=y?new Array(i.length).fill(Wh):Wh;const N=()=>{if(!(!B.active||!B.dirty))if(n){const G=B.run();(l||x||(y?G.some((P,V)=>Ti(P,F[V])):Ti(G,F)))&&(S&&S(),Vo(n,m,3,[G,F===Wh?void 0:y&&F[0]===Wh?[]:F,T]),F=G)}else B.run()};N.allowRecurse=!!n;let L;u==="sync"?L=N:u==="post"?L=()=>jn(N,m&&m.suspense):(N.pre=!0,m&&(N.id=m.uid),L=()=>kf(N));const B=new ql(A,yo,L),z=l5(),H=()=>{B.stop(),z&&o_(z.effects,B)};return n?r?N():F=B.run():u==="post"?jn(B.run.bind(B),m&&m.suspense):B.run(),I&&I.push(H),H}function _U(i,n,r){const l=this.proxy,u=on(i)?i.includes(".")?V5(l,i):()=>l[i]:i.bind(l,l);let p;ot(n)?p=n:(p=n.handler,r=n);const f=xa(this),b=gu(u,p.bind(l),r);return f(),b}function V5(i,n){const r=n.split(".");return()=>{let l=i;for(let u=0;u<r.length&&l;u++)l=l[r[u]];return l}}function la(i,n,r=0,l){if(!Ut(i)||i.__v_skip)return i;if(n&&n>0){if(r>=n)return i;r++}if(l=l||new Set,l.has(i))return i;if(l.add(i),$n(i))la(i.value,n,r,l);else if(Ve(i))for(let u=0;u<i.length;u++)la(i[u],n,r,l);else if(Ma(i)||Ml(i))i.forEach(u=>{la(u,n,r,l)});else if(o5(i))for(const u in i)la(i[u],n,r,l);return i}function ft(i,n){if(vn===null)return i;const r=Ef(vn)||vn.proxy,l=i.dirs||(i.dirs=[]);for(let u=0;u<n.length;u++){let[p,f,b,m=jt]=n[u];p&&(ot(p)&&(p={mounted:p,updated:p}),p.deep&&la(f),l.push({dir:p,instance:r,value:f,oldValue:void 0,arg:b,modifiers:m}))}return i}function Gi(i,n,r,l){const u=i.dirs,p=n&&n.dirs;for(let f=0;f<u.length;f++){const b=u[f];p&&(b.oldValue=p[f].value);let m=b.dir[l];m&&(Oa(),Vo(m,r,8,[i.el,b,i,n]),Ba())}}const rs=Symbol("_leaveCb"),Kh=Symbol("_enterCb");function v_(){const i={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return vs(()=>{i.isMounted=!0}),Na(()=>{i.isUnmounting=!0}),i}const ni=[Function,Array],A_={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:ni,onEnter:ni,onAfterEnter:ni,onEnterCancelled:ni,onBeforeLeave:ni,onLeave:ni,onAfterLeave:ni,onLeaveCancelled:ni,onBeforeAppear:ni,onAppear:ni,onAfterAppear:ni,onAppearCancelled:ni},wU={name:"BaseTransition",props:A_,setup(i,{slots:n}){const r=Or(),l=v_();return()=>{const u=n.default&&vf(n.default(),!0);if(!u||!u.length)return;let p=u[0];if(u.length>1){for(const y of u)if(y.type!==Yn){p=y;break}}const f=wt(i),{mode:b}=f;if(l.isLeaving)return cb(p);const m=OS(p);if(!m)return cb(p);const v=Gl(m,f,l,r);va(m,v);const A=r.subTree,x=A&&OS(A);if(x&&x.type!==Yn&&!Ei(m,x)){const y=Gl(x,f,l,r);if(va(x,y),b==="out-in")return l.isLeaving=!0,y.afterLeave=()=>{l.isLeaving=!1,r.update.active!==!1&&(r.effect.dirty=!0,r.update())},cb(p);b==="in-out"&&m.type!==Yn&&(y.delayLeave=(S,T,I)=>{const F=U5(l,x);F[String(x.key)]=x,S[rs]=()=>{T(),S[rs]=void 0,delete v.delayedLeave},v.delayedLeave=I})}return p}}},H5=wU;function U5(i,n){const{leavingVNodes:r}=i;let l=r.get(n.type);return l||(l=Object.create(null),r.set(n.type,l)),l}function Gl(i,n,r,l){const{appear:u,mode:p,persisted:f=!1,onBeforeEnter:b,onEnter:m,onAfterEnter:v,onEnterCancelled:A,onBeforeLeave:x,onLeave:y,onAfterLeave:S,onLeaveCancelled:T,onBeforeAppear:I,onAppear:F,onAfterAppear:N,onAppearCancelled:L}=n,B=String(i.key),z=U5(r,i),H=(V,U)=>{V&&Vo(V,l,9,U)},G=(V,U)=>{const W=U[1];H(V,U),Ve(V)?V.every(Y=>Y.length<=1)&&W():V.length<=1&&W()},P={mode:p,persisted:f,beforeEnter(V){let U=b;if(!r.isMounted)if(u)U=I||b;else return;V[rs]&&V[rs](!0);const W=z[B];W&&Ei(i,W)&&W.el[rs]&&W.el[rs](),H(U,[V])},enter(V){let U=m,W=v,Y=A;if(!r.isMounted)if(u)U=F||m,W=N||v,Y=L||A;else return;let J=!1;const te=V[Kh]=re=>{J||(J=!0,re?H(Y,[V]):H(W,[V]),P.delayedLeave&&P.delayedLeave(),V[Kh]=void 0)};U?G(U,[V,te]):te()},leave(V,U){const W=String(i.key);if(V[Kh]&&V[Kh](!0),r.isUnmounting)return U();H(x,[V]);let Y=!1;const J=V[rs]=te=>{Y||(Y=!0,U(),te?H(T,[V]):H(S,[V]),V[rs]=void 0,z[W]===i&&delete z[W])};z[W]=i,y?G(y,[V,J]):J()},clone(V){return Gl(V,n,r,l)}};return P}function cb(i){if(bu(i))return i=Xi(i),i.children=null,i}function OS(i){return bu(i)?i.children?i.children[0]:void 0:i}function va(i,n){i.shapeFlag&6&&i.component?va(i.component.subTree,n):i.shapeFlag&128?(i.ssContent.transition=n.clone(i.ssContent),i.ssFallback.transition=n.clone(i.ssFallback)):i.transition=n}function vf(i,n=!1,r){let l=[],u=0;for(let p=0;p<i.length;p++){let f=i[p];const b=r==null?f.key:String(r)+String(f.key!=null?f.key:p);f.type===Pe?(f.patchFlag&128&&u++,l=l.concat(vf(f.children,n,b))):(n||f.type!==Yn)&&l.push(b!=null?Xi(f,{key:b}):f)}if(u>1)for(let p=0;p<l.length;p++)l[p].patchFlag=-2;return l}/*! #__NO_SIDE_EFFECTS__ */function lc(i,n){return ot(i)?nn({name:i.name},n,{setup:i}):i}const ba=i=>!!i.type.__asyncLoader;/*! #__NO_SIDE_EFFECTS__ */function vU(i){ot(i)&&(i={loader:i});const{loader:n,loadingComponent:r,errorComponent:l,delay:u=200,timeout:p,suspensible:f=!0,onError:b}=i;let m=null,v,A=0;const x=()=>(A++,m=null,y()),y=()=>{let S;return m||(S=m=n().catch(T=>{if(T=T instanceof Error?T:new Error(String(T)),b)return new Promise((I,F)=>{b(T,()=>I(x()),()=>F(T),A+1)});throw T}).then(T=>S!==m&&m?m:(T&&(T.__esModule||T[Symbol.toStringTag]==="Module")&&(T=T.default),v=T,T)))};return lc({name:"AsyncComponentWrapper",__asyncLoader:y,get __asyncResolved(){return v},setup(){const S=En;if(v)return()=>db(v,S);const T=L=>{m=null,Pa(L,S,13,!l)};if(f&&S.suspense||ku)return y().then(L=>()=>db(L,S)).catch(L=>(T(L),()=>l?ue(l,{error:L}):null));const I=_t(!1),F=_t(),N=_t(!!u);return u&&setTimeout(()=>{N.value=!1},u),p!=null&&setTimeout(()=>{if(!I.value&&!F.value){const L=new Error(`Async component timed out after ${p}ms.`);T(L),F.value=L}},p),y().then(()=>{I.value=!0,S.parent&&bu(S.parent.vnode)&&(S.parent.effect.dirty=!0,kf(S.parent.update))}).catch(L=>{T(L),F.value=L}),()=>{if(I.value&&v)return db(v,S);if(F.value&&l)return ue(l,{error:F.value});if(r&&!N.value)return ue(r)}}})}function db(i,n){const{ref:r,props:l,children:u,ce:p}=n.vnode,f=ue(i,l,u);return f.ref=r,f.ce=p,delete n.vnode.ce,f}const bu=i=>i.type.__isKeepAlive,AU={name:"KeepAlive",__isKeepAlive:!0,props:{include:[String,RegExp,Array],exclude:[String,RegExp,Array],max:[String,Number]},setup(i,{slots:n}){const r=Or(),l=r.ctx;if(!l.renderer)return()=>{const L=n.default&&n.default();return L&&L.length===1?L[0]:L};const u=new Map,p=new Set;let f=null;const b=r.suspense,{renderer:{p:m,m:v,um:A,o:{createElement:x}}}=l,y=x("div");l.activate=(L,B,z,H,G)=>{const P=L.component;v(L,B,z,0,b),m(P.vnode,L,B,z,P,b,H,L.slotScopeIds,G),jn(()=>{P.isDeactivated=!1,P.a&&Bl(P.a);const V=L.props&&L.props.onVnodeMounted;V&&Ao(V,P.parent,L)},b)},l.deactivate=L=>{const B=L.component;v(L,y,null,1,b),jn(()=>{B.da&&Bl(B.da);const z=L.props&&L.props.onVnodeUnmounted;z&&Ao(z,B.parent,L),B.isDeactivated=!0},b)};function S(L){ub(L),A(L,r,b,!0)}function T(L){u.forEach((B,z)=>{const H=yk(B.type);H&&(!L||!L(H))&&I(z)})}function I(L){const B=u.get(L);!f||!Ei(B,f)?S(B):f&&ub(f),u.delete(L),p.delete(L)}us(()=>[i.include,i.exclude],([L,B])=>{L&&T(z=>Md(L,z)),B&&T(z=>!Md(B,z))},{flush:"post",deep:!0});let F=null;const N=()=>{F!=null&&u.set(F,hb(r.subTree))};return vs(N),cc(N),Na(()=>{u.forEach(L=>{const{subTree:B,suspense:z}=r,H=hb(B);if(L.type===H.type&&L.key===H.key){ub(H);const G=H.component.da;G&&jn(G,z);return}S(L)})}),()=>{if(F=null,!n.default)return null;const L=n.default(),B=L[0];if(L.length>1)return f=null,L;if(!ms(B)||!(B.shapeFlag&4)&&!(B.shapeFlag&128))return f=null,B;let z=hb(B);const H=z.type,G=yk(ba(z)?z.type.__asyncResolved||{}:H),{include:P,exclude:V,max:U}=i;if(P&&(!G||!Md(P,G))||V&&G&&Md(V,G))return f=z,B;const W=z.key==null?H:z.key,Y=u.get(W);return z.el&&(z=Xi(z),B.shapeFlag&128&&(B.ssContent=z)),F=W,Y?(z.el=Y.el,z.component=Y.component,z.transition&&va(z,z.transition),z.shapeFlag|=512,p.delete(W),p.add(W)):(p.add(W),U&&p.size>parseInt(U,10)&&I(p.values().next().value)),z.shapeFlag|=256,f=z,L5(B.type)?B:z}}},CU=AU;function Md(i,n){return Ve(i)?i.some(r=>Md(r,n)):on(i)?i.split(",").includes(n):JV(i)?i.test(n):!1}function q5(i,n){W5(i,"a",n)}function G5(i,n){W5(i,"da",n)}function W5(i,n,r=En){const l=i.__wdc||(i.__wdc=()=>{let u=r;for(;u;){if(u.isDeactivated)return;u=u.parent}return i()});if(Af(n,l,r),r){let u=r.parent;for(;u&&u.parent;)bu(u.parent.vnode)&&yU(l,n,r,u),u=u.parent}}function yU(i,n,r,l){const u=Af(n,i,l,!0);Cf(()=>{o_(l[n],u)},r)}function ub(i){i.shapeFlag&=-257,i.shapeFlag&=-513}function hb(i){return i.shapeFlag&128?i.ssContent:i}function Af(i,n,r=En,l=!1){if(r){const u=r[i]||(r[i]=[]),p=n.__weh||(n.__weh=(...f)=>{if(r.isUnmounted)return;Oa();const b=xa(r),m=Vo(n,r,i,f);return b(),Ba(),m});return l?u.unshift(p):u.push(p),p}}const Mr=i=>(n,r=En)=>(!ku||i==="sp")&&Af(i,(...l)=>n(...l),r),K5=Mr("bm"),vs=Mr("m"),C_=Mr("bu"),cc=Mr("u"),Na=Mr("bum"),Cf=Mr("um"),Y5=Mr("sp"),Q5=Mr("rtg"),Z5=Mr("rtc");function J5(i,n=En){Af("ec",i,n)}function Zt(i,n,r,l){let u;const p=r&&r[l];if(Ve(i)||on(i)){u=new Array(i.length);for(let f=0,b=i.length;f<b;f++)u[f]=n(i[f],f,void 0,p&&p[f])}else if(typeof i=="number"){u=new Array(i);for(let f=0;f<i;f++)u[f]=n(f+1,f,void 0,p&&p[f])}else if(Ut(i))if(i[Symbol.iterator])u=Array.from(i,(f,b)=>n(f,b,void 0,p&&p[b]));else{const f=Object.keys(i);u=new Array(f.length);for(let b=0,m=f.length;b<m;b++){const v=f[b];u[b]=n(i[v],v,b,p&&p[b])}}else u=[];return r&&(r[l]=u),u}function xU(i,n){for(let r=0;r<n.length;r++){const l=n[r];if(Ve(l))for(let u=0;u<l.length;u++)i[l[u].name]=l[u].fn;else l&&(i[l.name]=l.key?(...u)=>{const p=l.fn(...u);return p&&(p.key=l.key),p}:l.fn)}return i}function Aa(i,n,r={},l,u){if(vn.isCE||vn.parent&&ba(vn.parent)&&vn.parent.isCE)return n!=="default"&&(r.name=n),ue("slot",r,l&&l());let p=i[n];p&&p._c&&(p._d=!1),X();const f=p&&X5(p(r)),b=fs(Pe,{key:r.key||f&&f.key||`_${n}`},f||(l?l():[]),f&&i._===1?64:-2);return!u&&b.scopeId&&(b.slotScopeIds=[b.scopeId+"-s"]),p&&p._c&&(p._d=!0),b}function X5(i){return i.some(n=>ms(n)?!(n.type===Yn||n.type===Pe&&!X5(n.children)):!0)?i:null}function EU(i,n){const r={};for(const l in i)r[n&&/[A-Z]/.test(l)?`on:${l}`:Fd(l)]=i[l];return r}const pk=i=>i?wI(i)?Ef(i)||i.proxy:pk(i.parent):null,zd=nn(Object.create(null),{$:i=>i,$el:i=>i.vnode.el,$data:i=>i.data,$props:i=>i.props,$attrs:i=>i.attrs,$slots:i=>i.slots,$refs:i=>i.refs,$parent:i=>pk(i.parent),$root:i=>pk(i.root),$emit:i=>i.emit,$options:i=>y_(i),$forceUpdate:i=>i.f||(i.f=()=>{i.effect.dirty=!0,kf(i.update)}),$nextTick:i=>i.n||(i.n=mu.bind(i.proxy)),$watch:i=>_U.bind(i)}),pb=(i,n)=>i!==jt&&!i.__isScriptSetup&&Tt(i,n),fk={get({_:i},n){const{ctx:r,setupState:l,data:u,props:p,accessCache:f,type:b,appContext:m}=i;let v;if(n[0]!=="$"){const S=f[n];if(S!==void 0)switch(S){case 1:return l[n];case 2:return u[n];case 4:return r[n];case 3:return p[n]}else{if(pb(l,n))return f[n]=1,l[n];if(u!==jt&&Tt(u,n))return f[n]=2,u[n];if((v=i.propsOptions[0])&&Tt(v,n))return f[n]=3,p[n];if(r!==jt&&Tt(r,n))return f[n]=4,r[n];mk&&(f[n]=0)}}const A=zd[n];let x,y;if(A)return n==="$attrs"&&So(i,"get",n),A(i);if((x=b.__cssModules)&&(x=x[n]))return x;if(r!==jt&&Tt(r,n))return f[n]=4,r[n];if(y=m.config.globalProperties,Tt(y,n))return y[n]},set({_:i},n,r){const{data:l,setupState:u,ctx:p}=i;return pb(u,n)?(u[n]=r,!0):l!==jt&&Tt(l,n)?(l[n]=r,!0):Tt(i.props,n)||n[0]==="$"&&n.slice(1)in i?!1:(p[n]=r,!0)},has({_:{data:i,setupState:n,accessCache:r,ctx:l,appContext:u,propsOptions:p}},f){let b;return!!r[f]||i!==jt&&Tt(i,f)||pb(n,f)||(b=p[0])&&Tt(b,f)||Tt(l,f)||Tt(zd,f)||Tt(u.config.globalProperties,f)},defineProperty(i,n,r){return r.get!=null?i._.accessCache[n]=0:Tt(r,"value")&&this.set(i,n,r.value,null),Reflect.defineProperty(i,n,r)}},SU=nn({},fk,{get(i,n){if(n!==Symbol.unscopables)return fk.get(i,n,i)},has(i,n){return n[0]!=="_"&&!oH(n)}});function TU(){return null}function DU(){return null}function IU(i){}function MU(i){}function OU(){return null}function BU(){}function PU(i,n){return null}function NU(){return eI().slots}function LU(){return eI().attrs}function eI(){const i=Or();return i.setupContext||(i.setupContext=CI(i))}function ou(i){return Ve(i)?i.reduce((n,r)=>(n[r]=null,n),{}):i}function RU(i,n){const r=ou(i);for(const l in n){if(l.startsWith("__skip"))continue;let u=r[l];u?Ve(u)||ot(u)?u=r[l]={type:u,default:n[l]}:u.default=n[l]:u===null&&(u=r[l]={default:n[l]}),u&&n[`__skip_${l}`]&&(u.skipFactory=!0)}return r}function FU(i,n){return!i||!n?i||n:Ve(i)&&Ve(n)?i.concat(n):nn({},ou(i),ou(n))}function zU(i,n){const r={};for(const l in i)n.includes(l)||Object.defineProperty(r,l,{enumerable:!0,get:()=>i[l]});return r}function jU(i){const n=Or();let r=i();return vk(),i_(r)&&(r=r.catch(l=>{throw xa(n),l})),[r,()=>xa(n)]}let mk=!0;function $U(i){const n=y_(i),r=i.proxy,l=i.ctx;mk=!1,n.beforeCreate&&BS(n.beforeCreate,i,"bc");const{data:u,computed:p,methods:f,watch:b,provide:m,inject:v,created:A,beforeMount:x,mounted:y,beforeUpdate:S,updated:T,activated:I,deactivated:F,beforeDestroy:N,beforeUnmount:L,destroyed:B,unmounted:z,render:H,renderTracked:G,renderTriggered:P,errorCaptured:V,serverPrefetch:U,expose:W,inheritAttrs:Y,components:J,directives:te,filters:re}=n;if(v&&VU(v,l,null),f)for(const me in f){const ie=f[me];ot(ie)&&(l[me]=ie.bind(r))}if(u){const me=u.call(r,r);Ut(me)&&(i.data=rn(me))}if(mk=!0,p)for(const me in p){const ie=p[me],Ne=ot(ie)?ie.bind(r,r):ot(ie.get)?ie.get.bind(r,r):yo,Ee=!ot(ie)&&ot(ie.set)?ie.set.bind(r):yo,Je=T_({get:Ne,set:Ee});Object.defineProperty(l,me,{enumerable:!0,configurable:!0,get:()=>Je.value,set:Xe=>Je.value=Xe})}if(b)for(const me in b)tI(b[me],l,r,me);if(m){const me=ot(m)?m.call(r):m;Reflect.ownKeys(me).forEach(ie=>{yf(ie,me[ie])})}A&&BS(A,i,"c");function oe(me,ie){Ve(ie)?ie.forEach(Ne=>me(Ne.bind(r))):ie&&me(ie.bind(r))}if(oe(K5,x),oe(vs,y),oe(C_,S),oe(cc,T),oe(q5,I),oe(G5,F),oe(J5,V),oe(Z5,G),oe(Q5,P),oe(Na,L),oe(Cf,z),oe(Y5,U),Ve(W))if(W.length){const me=i.exposed||(i.exposed={});W.forEach(ie=>{Object.defineProperty(me,ie,{get:()=>r[ie],set:Ne=>r[ie]=Ne})})}else i.exposed||(i.exposed={});H&&i.render===yo&&(i.render=H),Y!=null&&(i.inheritAttrs=Y),J&&(i.components=J),te&&(i.directives=te)}function VU(i,n,r=yo){Ve(i)&&(i=gk(i));for(const l in i){const u=i[l];let p;Ut(u)?"default"in u?p=jd(u.from||l,u.default,!0):p=jd(u.from||l):p=jd(u),$n(p)?Object.defineProperty(n,l,{enumerable:!0,configurable:!0,get:()=>p.value,set:f=>p.value=f}):n[l]=p}}function BS(i,n,r){Vo(Ve(i)?i.map(l=>l.bind(n.proxy)):i.bind(n.proxy),n,r)}function tI(i,n,r,l){const u=l.includes(".")?V5(r,l):()=>r[l];if(on(i)){const p=n[i];ot(p)&&us(u,p)}else if(ot(i))us(u,i.bind(r));else if(Ut(i))if(Ve(i))i.forEach(p=>tI(p,n,r,l));else{const p=ot(i.handler)?i.handler.bind(r):n[i.handler];ot(p)&&us(u,p,i)}}function y_(i){const n=i.type,{mixins:r,extends:l}=n,{mixins:u,optionsCache:p,config:{optionMergeStrategies:f}}=i.appContext,b=p.get(n);let m;return b?m=b:!u.length&&!r&&!l?m=n:(m={},u.length&&u.forEach(v=>Rp(m,v,f,!0)),Rp(m,n,f)),Ut(n)&&p.set(n,m),m}function Rp(i,n,r,l=!1){const{mixins:u,extends:p}=n;p&&Rp(i,p,r,!0),u&&u.forEach(f=>Rp(i,f,r,!0));for(const f in n)if(!(l&&f==="expose")){const b=HU[f]||r&&r[f];i[f]=b?b(i[f],n[f]):n[f]}return i}const HU={data:PS,props:NS,emits:NS,methods:Od,computed:Od,beforeCreate:oo,created:oo,beforeMount:oo,mounted:oo,beforeUpdate:oo,updated:oo,beforeDestroy:oo,beforeUnmount:oo,destroyed:oo,unmounted:oo,activated:oo,deactivated:oo,errorCaptured:oo,serverPrefetch:oo,components:Od,directives:Od,watch:qU,provide:PS,inject:UU};function PS(i,n){return n?i?function(){return nn(ot(i)?i.call(this,this):i,ot(n)?n.call(this,this):n)}:n:i}function UU(i,n){return Od(gk(i),gk(n))}function gk(i){if(Ve(i)){const n={};for(let r=0;r<i.length;r++)n[i[r]]=i[r];return n}return i}function oo(i,n){return i?[...new Set([].concat(i,n))]:n}function Od(i,n){return i?nn(Object.create(null),i,n):n}function NS(i,n){return i?Ve(i)&&Ve(n)?[...new Set([...i,...n])]:nn(Object.create(null),ou(i),ou(n??{})):n}function qU(i,n){if(!i)return n;if(!n)return i;const r=nn(Object.create(null),i);for(const l in n)r[l]=oo(i[l],n[l]);return r}function nI(){return{app:null,config:{isNativeTag:QV,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let GU=0;function WU(i,n){return function(l,u=null){ot(l)||(l=nn({},l)),u!=null&&!Ut(u)&&(u=null);const p=nI(),f=new WeakSet;let b=!1;const m=p.app={_uid:GU++,_component:l,_props:u,_container:null,_context:p,_instance:null,version:xI,get config(){return p.config},set config(v){},use(v,...A){return f.has(v)||(v&&ot(v.install)?(f.add(v),v.install(m,...A)):ot(v)&&(f.add(v),v(m,...A))),m},mixin(v){return p.mixins.includes(v)||p.mixins.push(v),m},component(v,A){return A?(p.components[v]=A,m):p.components[v]},directive(v,A){return A?(p.directives[v]=A,m):p.directives[v]},mount(v,A,x){if(!b){const y=ue(l,u);return y.appContext=p,x===!0?x="svg":x===!1&&(x=void 0),A&&n?n(y,v):i(y,v,x),b=!0,m._container=v,v.__vue_app__=m,Ef(y.component)||y.component.proxy}},unmount(){b&&(i(null,m._container),delete m._container.__vue_app__)},provide(v,A){return p.provides[v]=A,m},runWithContext(v){const A=Rl;Rl=m;try{return v()}finally{Rl=A}}};return m}}let Rl=null;function yf(i,n){if(En){let r=En.provides;const l=En.parent&&En.parent.provides;l===r&&(r=En.provides=Object.create(l)),r[i]=n}}function jd(i,n,r=!1){const l=En||vn;if(l||Rl){const u=l?l.parent==null?l.vnode.appContext&&l.vnode.appContext.provides:l.parent.provides:Rl._context.provides;if(u&&i in u)return u[i];if(arguments.length>1)return r&&ot(n)?n.call(l&&l.proxy):n}}function KU(){return!!(En||vn||Rl)}function YU(i,n,r,l=!1){const u={},p={};Op(p,xf,1),i.propsDefaults=Object.create(null),oI(i,n,u,p);for(const f in i.propsOptions[0])f in u||(u[f]=void 0);r?i.props=l?u:A5(u):i.type.props?i.props=u:i.props=p,i.attrs=p}function QU(i,n,r,l){const{props:u,attrs:p,vnode:{patchFlag:f}}=i,b=wt(u),[m]=i.propsOptions;let v=!1;if((l||f>0)&&!(f&16)){if(f&8){const A=i.vnode.dynamicProps;for(let x=0;x<A.length;x++){let y=A[x];if(_f(i.emitsOptions,y))continue;const S=n[y];if(m)if(Tt(p,y))S!==p[y]&&(p[y]=S,v=!0);else{const T=so(y);u[T]=bk(m,b,T,S,i,!1)}else S!==p[y]&&(p[y]=S,v=!0)}}}else{oI(i,n,u,p)&&(v=!0);let A;for(const x in b)(!n||!Tt(n,x)&&((A=$o(x))===x||!Tt(n,A)))&&(m?r&&(r[x]!==void 0||r[A]!==void 0)&&(u[x]=bk(m,b,x,void 0,i,!0)):delete u[x]);if(p!==b)for(const x in p)(!n||!Tt(n,x))&&(delete p[x],v=!0)}v&&xr(i,"set","$attrs")}function oI(i,n,r,l){const[u,p]=i.propsOptions;let f=!1,b;if(n)for(let m in n){if(Ol(m))continue;const v=n[m];let A;u&&Tt(u,A=so(m))?!p||!p.includes(A)?r[A]=v:(b||(b={}))[A]=v:_f(i.emitsOptions,m)||(!(m in l)||v!==l[m])&&(l[m]=v,f=!0)}if(p){const m=wt(r),v=b||jt;for(let A=0;A<p.length;A++){const x=p[A];r[x]=bk(u,m,x,v[x],i,!Tt(v,x))}}return f}function bk(i,n,r,l,u,p){const f=i[r];if(f!=null){const b=Tt(f,"default");if(b&&l===void 0){const m=f.default;if(f.type!==Function&&!f.skipFactory&&ot(m)){const{propsDefaults:v}=u;if(r in v)l=v[r];else{const A=xa(u);l=v[r]=m.call(null,n),A()}}else l=m}f[0]&&(p&&!b?l=!1:f[1]&&(l===""||l===$o(r))&&(l=!0))}return l}function iI(i,n,r=!1){const l=n.propsCache,u=l.get(i);if(u)return u;const p=i.props,f={},b=[];let m=!1;if(!ot(i)){const A=x=>{m=!0;const[y,S]=iI(x,n,!0);nn(f,y),S&&b.push(...S)};!r&&n.mixins.length&&n.mixins.forEach(A),i.extends&&A(i.extends),i.mixins&&i.mixins.forEach(A)}if(!p&&!m)return Ut(i)&&l.set(i,Il),Il;if(Ve(p))for(let A=0;A<p.length;A++){const x=so(p[A]);LS(x)&&(f[x]=jt)}else if(p)for(const A in p){const x=so(A);if(LS(x)){const y=p[A],S=f[x]=Ve(y)||ot(y)?{type:y}:nn({},y);if(S){const T=zS(Boolean,S.type),I=zS(String,S.type);S[0]=T>-1,S[1]=I<0||T<I,(T>-1||Tt(S,"default"))&&b.push(x)}}}const v=[f,b];return Ut(i)&&l.set(i,v),v}function LS(i){return i[0]!=="$"&&!Ol(i)}function RS(i){return i===null?"null":typeof i=="function"?i.name||"":typeof i=="object"&&i.constructor&&i.constructor.name||""}function FS(i,n){return RS(i)===RS(n)}function zS(i,n){return Ve(n)?n.findIndex(r=>FS(r,i)):ot(n)&&FS(n,i)?0:-1}const rI=i=>i[0]==="_"||i==="$stable",x_=i=>Ve(i)?i.map(jo):[jo(i)],ZU=(i,n,r)=>{if(n._n)return n;const l=gt((...u)=>x_(n(...u)),r);return l._c=!1,l},sI=(i,n,r)=>{const l=i._ctx;for(const u in i){if(rI(u))continue;const p=i[u];if(ot(p))n[u]=ZU(u,p,l);else if(p!=null){const f=x_(p);n[u]=()=>f}}},aI=(i,n)=>{const r=x_(n);i.slots.default=()=>r},JU=(i,n)=>{if(i.vnode.shapeFlag&32){const r=n._;r?(i.slots=wt(n),Op(n,"_",r)):sI(n,i.slots={})}else i.slots={},n&&aI(i,n);Op(i.slots,xf,1)},XU=(i,n,r)=>{const{vnode:l,slots:u}=i;let p=!0,f=jt;if(l.shapeFlag&32){const b=n._;b?r&&b===1?p=!1:(nn(u,n),!r&&b===1&&delete u._):(p=!n.$stable,sI(n,u)),f=n}else n&&(aI(i,n),f={default:1});if(p)for(const b in u)!rI(b)&&f[b]==null&&delete u[b]};function Fp(i,n,r,l,u=!1){if(Ve(i)){i.forEach((y,S)=>Fp(y,n&&(Ve(n)?n[S]:n),r,l,u));return}if(ba(l)&&!u)return;const p=l.shapeFlag&4?Ef(l.component)||l.component.proxy:l.el,f=u?null:p,{i:b,r:m}=i,v=n&&n.r,A=b.refs===jt?b.refs={}:b.refs,x=b.setupState;if(v!=null&&v!==m&&(on(v)?(A[v]=null,Tt(x,v)&&(x[v]=null)):$n(v)&&(v.value=null)),ot(m))Er(m,b,12,[f,A]);else{const y=on(m),S=$n(m);if(y||S){const T=()=>{if(i.f){const I=y?Tt(x,m)?x[m]:A[m]:m.value;u?Ve(I)&&o_(I,p):Ve(I)?I.includes(p)||I.push(p):y?(A[m]=[p],Tt(x,m)&&(x[m]=A[m])):(m.value=[p],i.k&&(A[i.k]=m.value))}else y?(A[m]=f,Tt(x,m)&&(x[m]=f)):S&&(m.value=f,i.k&&(A[i.k]=f))};f?(T.id=-1,jn(T,r)):T()}}}let Xr=!1;const eq=i=>i.namespaceURI.includes("svg")&&i.tagName!=="foreignObject",tq=i=>i.namespaceURI.includes("MathML"),Yh=i=>{if(eq(i))return"svg";if(tq(i))return"mathml"},Qh=i=>i.nodeType===8;function nq(i){const{mt:n,p:r,o:{patchProp:l,createText:u,nextSibling:p,parentNode:f,remove:b,insert:m,createComment:v}}=i,A=(B,z)=>{if(!z.hasChildNodes()){r(null,B,z),Lp(),z._vnode=B;return}Xr=!1,x(z.firstChild,B,null,null,null),Lp(),z._vnode=B,Xr&&console.error("Hydration completed but contains mismatches.")},x=(B,z,H,G,P,V=!1)=>{const U=Qh(B)&&B.data==="[",W=()=>I(B,z,H,G,P,U),{type:Y,ref:J,shapeFlag:te,patchFlag:re}=z;let ae=B.nodeType;z.el=B,re===-2&&(V=!1,z.dynamicChildren=null);let oe=null;switch(Y){case Ca:ae!==3?z.children===""?(m(z.el=u(""),f(B),B),oe=B):oe=W():(B.data!==z.children&&(Xr=!0,B.data=z.children),oe=p(B));break;case Yn:L(B)?(oe=p(B),N(z.el=B.content.firstChild,B,H)):ae!==8||U?oe=W():oe=p(B);break;case ka:if(U&&(B=p(B),ae=B.nodeType),ae===1||ae===3){oe=B;const me=!z.children.length;for(let ie=0;ie<z.staticCount;ie++)me&&(z.children+=oe.nodeType===1?oe.outerHTML:oe.data),ie===z.staticCount-1&&(z.anchor=oe),oe=p(oe);return U?p(oe):oe}else W();break;case Pe:U?oe=T(B,z,H,G,P,V):oe=W();break;default:if(te&1)(ae!==1||z.type.toLowerCase()!==B.tagName.toLowerCase())&&!L(B)?oe=W():oe=y(B,z,H,G,P,V);else if(te&6){z.slotScopeIds=P;const me=f(B);if(U?oe=F(B):Qh(B)&&B.data==="teleport start"?oe=F(B,B.data,"teleport end"):oe=p(B),n(z,me,null,H,G,Yh(me),V),ba(z)){let ie;U?(ie=ue(Pe),ie.anchor=oe?oe.previousSibling:me.lastChild):ie=B.nodeType===3?ze(""):ue("div"),ie.el=B,z.component.subTree=ie}}else te&64?ae!==8?oe=W():oe=z.type.hydrate(B,z,H,G,P,V,i,S):te&128&&(oe=z.type.hydrate(B,z,H,G,Yh(f(B)),P,V,i,x))}return J!=null&&Fp(J,null,G,z),oe},y=(B,z,H,G,P,V)=>{V=V||!!z.dynamicChildren;const{type:U,props:W,patchFlag:Y,shapeFlag:J,dirs:te,transition:re}=z,ae=U==="input"||U==="option";if(ae||Y!==-1){te&&Gi(z,null,H,"created");let oe=!1;if(L(B)){oe=uI(G,re)&&H&&H.vnode.props&&H.vnode.props.appear;const ie=B.content.firstChild;oe&&re.beforeEnter(ie),N(ie,B,H),z.el=B=ie}if(J&16&&!(W&&(W.innerHTML||W.textContent))){let ie=S(B.firstChild,z,B,H,G,P,V);for(;ie;){Xr=!0;const Ne=ie;ie=ie.nextSibling,b(Ne)}}else J&8&&B.textContent!==z.children&&(Xr=!0,B.textContent=z.children);if(W)if(ae||!V||Y&48)for(const ie in W)(ae&&(ie.endsWith("value")||ie==="indeterminate")||hu(ie)&&!Ol(ie)||ie[0]===".")&&l(B,ie,null,W[ie],void 0,void 0,H);else W.onClick&&l(B,"onClick",null,W.onClick,void 0,void 0,H);let me;(me=W&&W.onVnodeBeforeMount)&&Ao(me,H,z),te&&Gi(z,null,H,"beforeMount"),((me=W&&W.onVnodeMounted)||te||oe)&&R5(()=>{me&&Ao(me,H,z),oe&&re.enter(B),te&&Gi(z,null,H,"mounted")},G)}return B.nextSibling},S=(B,z,H,G,P,V,U)=>{U=U||!!z.dynamicChildren;const W=z.children,Y=W.length;for(let J=0;J<Y;J++){const te=U?W[J]:W[J]=jo(W[J]);if(B)B=x(B,te,G,P,V,U);else{if(te.type===Ca&&!te.children)continue;Xr=!0,r(null,te,H,null,G,P,Yh(H),V)}}return B},T=(B,z,H,G,P,V)=>{const{slotScopeIds:U}=z;U&&(P=P?P.concat(U):U);const W=f(B),Y=S(p(B),z,W,H,G,P,V);return Y&&Qh(Y)&&Y.data==="]"?p(z.anchor=Y):(Xr=!0,m(z.anchor=v("]"),W,Y),Y)},I=(B,z,H,G,P,V)=>{if(Xr=!0,z.el=null,V){const Y=F(B);for(;;){const J=p(B);if(J&&J!==Y)b(J);else break}}const U=p(B),W=f(B);return b(B),r(null,z,W,U,H,G,Yh(W),P),U},F=(B,z="[",H="]")=>{let G=0;for(;B;)if(B=p(B),B&&Qh(B)&&(B.data===z&&G++,B.data===H)){if(G===0)return p(B);G--}return B},N=(B,z,H)=>{const G=z.parentNode;G&&G.replaceChild(B,z);let P=H;for(;P;)P.vnode.el===z&&(P.vnode.el=P.subTree.el=B),P=P.parent},L=B=>B.nodeType===1&&B.tagName.toLowerCase()==="template";return[A,x]}const jn=R5;function lI(i){return dI(i)}function cI(i){return dI(i,nq)}function dI(i,n){const r=i5();r.__VUE__=!0;const{insert:l,remove:u,patchProp:p,createElement:f,createText:b,createComment:m,setText:v,setElementText:A,parentNode:x,nextSibling:y,setScopeId:S=yo,insertStaticContent:T}=i,I=(K,ee,de,be=null,_e=null,Se=null,Oe=void 0,Ae=null,we=!!ee.dynamicChildren)=>{if(K===ee)return;K&&!Ei(K,ee)&&(be=vt(K),Xe(K,_e,Se,!0),K=null),ee.patchFlag===-2&&(we=!1,ee.dynamicChildren=null);const{type:he,ref:Te,shapeFlag:Fe}=ee;switch(he){case Ca:F(K,ee,de,be);break;case Yn:N(K,ee,de,be);break;case ka:K==null&&L(ee,de,be,Oe);break;case Pe:J(K,ee,de,be,_e,Se,Oe,Ae,we);break;default:Fe&1?H(K,ee,de,be,_e,Se,Oe,Ae,we):Fe&6?te(K,ee,de,be,_e,Se,Oe,Ae,we):(Fe&64||Fe&128)&&he.process(K,ee,de,be,_e,Se,Oe,Ae,we,nt)}Te!=null&&_e&&Fp(Te,K&&K.ref,Se,ee||K,!ee)},F=(K,ee,de,be)=>{if(K==null)l(ee.el=b(ee.children),de,be);else{const _e=ee.el=K.el;ee.children!==K.children&&v(_e,ee.children)}},N=(K,ee,de,be)=>{K==null?l(ee.el=m(ee.children||""),de,be):ee.el=K.el},L=(K,ee,de,be)=>{[K.el,K.anchor]=T(K.children,ee,de,be,K.el,K.anchor)},B=({el:K,anchor:ee},de,be)=>{let _e;for(;K&&K!==ee;)_e=y(K),l(K,de,be),K=_e;l(ee,de,be)},z=({el:K,anchor:ee})=>{let de;for(;K&&K!==ee;)de=y(K),u(K),K=de;u(ee)},H=(K,ee,de,be,_e,Se,Oe,Ae,we)=>{ee.type==="svg"?Oe="svg":ee.type==="math"&&(Oe="mathml"),K==null?G(ee,de,be,_e,Se,Oe,Ae,we):U(K,ee,_e,Se,Oe,Ae,we)},G=(K,ee,de,be,_e,Se,Oe,Ae)=>{let we,he;const{props:Te,shapeFlag:Fe,transition:Le,dirs:He}=K;if(we=K.el=f(K.type,Se,Te&&Te.is,Te),Fe&8?A(we,K.children):Fe&16&&V(K.children,we,null,be,_e,fb(K,Se),Oe,Ae),He&&Gi(K,null,be,"created"),P(we,K,K.scopeId,Oe,be),Te){for(const at in Te)at!=="value"&&!Ol(at)&&p(we,at,null,Te[at],Se,K.children,be,_e,$e);"value"in Te&&p(we,"value",null,Te.value,Se),(he=Te.onVnodeBeforeMount)&&Ao(he,be,K)}He&&Gi(K,null,be,"beforeMount");const et=uI(_e,Le);et&&Le.beforeEnter(we),l(we,ee,de),((he=Te&&Te.onVnodeMounted)||et||He)&&jn(()=>{he&&Ao(he,be,K),et&&Le.enter(we),He&&Gi(K,null,be,"mounted")},_e)},P=(K,ee,de,be,_e)=>{if(de&&S(K,de),be)for(let Se=0;Se<be.length;Se++)S(K,be[Se]);if(_e){let Se=_e.subTree;if(ee===Se){const Oe=_e.vnode;P(K,Oe,Oe.scopeId,Oe.slotScopeIds,_e.parent)}}},V=(K,ee,de,be,_e,Se,Oe,Ae,we=0)=>{for(let he=we;he<K.length;he++){const Te=K[he]=Ae?ss(K[he]):jo(K[he]);I(null,Te,ee,de,be,_e,Se,Oe,Ae)}},U=(K,ee,de,be,_e,Se,Oe)=>{const Ae=ee.el=K.el;let{patchFlag:we,dynamicChildren:he,dirs:Te}=ee;we|=K.patchFlag&16;const Fe=K.props||jt,Le=ee.props||jt;let He;if(de&&na(de,!1),(He=Le.onVnodeBeforeUpdate)&&Ao(He,de,ee,K),Te&&Gi(ee,K,de,"beforeUpdate"),de&&na(de,!0),he?W(K.dynamicChildren,he,Ae,de,be,fb(ee,_e),Se):Oe||ie(K,ee,Ae,null,de,be,fb(ee,_e),Se,!1),we>0){if(we&16)Y(Ae,ee,Fe,Le,de,be,_e);else if(we&2&&Fe.class!==Le.class&&p(Ae,"class",null,Le.class,_e),we&4&&p(Ae,"style",Fe.style,Le.style,_e),we&8){const et=ee.dynamicProps;for(let at=0;at<et.length;at++){const Dt=et[at],ht=Fe[Dt],Tn=Le[Dt];(Tn!==ht||Dt==="value")&&p(Ae,Dt,ht,Tn,_e,K.children,de,be,$e)}}we&1&&K.children!==ee.children&&A(Ae,ee.children)}else!Oe&&he==null&&Y(Ae,ee,Fe,Le,de,be,_e);((He=Le.onVnodeUpdated)||Te)&&jn(()=>{He&&Ao(He,de,ee,K),Te&&Gi(ee,K,de,"updated")},be)},W=(K,ee,de,be,_e,Se,Oe)=>{for(let Ae=0;Ae<ee.length;Ae++){const we=K[Ae],he=ee[Ae],Te=we.el&&(we.type===Pe||!Ei(we,he)||we.shapeFlag&70)?x(we.el):de;I(we,he,Te,null,be,_e,Se,Oe,!0)}},Y=(K,ee,de,be,_e,Se,Oe)=>{if(de!==be){if(de!==jt)for(const Ae in de)!Ol(Ae)&&!(Ae in be)&&p(K,Ae,de[Ae],null,Oe,ee.children,_e,Se,$e);for(const Ae in be){if(Ol(Ae))continue;const we=be[Ae],he=de[Ae];we!==he&&Ae!=="value"&&p(K,Ae,he,we,Oe,ee.children,_e,Se,$e)}"value"in be&&p(K,"value",de.value,be.value,Oe)}},J=(K,ee,de,be,_e,Se,Oe,Ae,we)=>{const he=ee.el=K?K.el:b(""),Te=ee.anchor=K?K.anchor:b("");let{patchFlag:Fe,dynamicChildren:Le,slotScopeIds:He}=ee;He&&(Ae=Ae?Ae.concat(He):He),K==null?(l(he,de,be),l(Te,de,be),V(ee.children||[],de,Te,_e,Se,Oe,Ae,we)):Fe>0&&Fe&64&&Le&&K.dynamicChildren?(W(K.dynamicChildren,Le,de,_e,Se,Oe,Ae),(ee.key!=null||_e&&ee===_e.subTree)&&E_(K,ee,!0)):ie(K,ee,de,Te,_e,Se,Oe,Ae,we)},te=(K,ee,de,be,_e,Se,Oe,Ae,we)=>{ee.slotScopeIds=Ae,K==null?ee.shapeFlag&512?_e.ctx.activate(ee,de,be,Oe,we):re(ee,de,be,_e,Se,Oe,we):ae(K,ee,we)},re=(K,ee,de,be,_e,Se,Oe)=>{const Ae=K.component=_I(K,be,_e);if(bu(K)&&(Ae.ctx.renderer=nt),vI(Ae),Ae.asyncDep){if(_e&&_e.registerDep(Ae,oe),!K.el){const we=Ae.subTree=ue(Yn);N(null,we,ee,de)}}else oe(Ae,K,ee,de,_e,Se,Oe)},ae=(K,ee,de)=>{const be=ee.component=K.component;if(aU(K,ee,de))if(be.asyncDep&&!be.asyncResolved){me(be,ee,de);return}else be.next=ee,eU(be.update),be.effect.dirty=!0,be.update();else ee.el=K.el,be.vnode=ee},oe=(K,ee,de,be,_e,Se,Oe)=>{const Ae=()=>{if(K.isMounted){let{next:Te,bu:Fe,u:Le,parent:He,vnode:et}=K;{const To=hI(K);if(To){Te&&(Te.el=et.el,me(K,Te,Oe)),To.asyncDep.then(()=>{K.isUnmounted||Ae()});return}}let at=Te,Dt;na(K,!1),Te?(Te.el=et.el,me(K,Te,Oe)):Te=et,Fe&&Bl(Fe),(Dt=Te.props&&Te.props.onVnodeBeforeUpdate)&&Ao(Dt,He,Te,et),na(K,!0);const ht=gp(K),Tn=K.subTree;K.subTree=ht,I(Tn,ht,x(Tn.el),vt(Tn),K,_e,Se),Te.el=ht.el,at===null&&b_(K,ht.el),Le&&jn(Le,_e),(Dt=Te.props&&Te.props.onVnodeUpdated)&&jn(()=>Ao(Dt,He,Te,et),_e)}else{let Te;const{el:Fe,props:Le}=ee,{bm:He,m:et,parent:at}=K,Dt=ba(ee);if(na(K,!1),He&&Bl(He),!Dt&&(Te=Le&&Le.onVnodeBeforeMount)&&Ao(Te,at,ee),na(K,!0),Fe&&Wt){const ht=()=>{K.subTree=gp(K),Wt(Fe,K.subTree,K,_e,null)};Dt?ee.type.__asyncLoader().then(()=>!K.isUnmounted&&ht()):ht()}else{const ht=K.subTree=gp(K);I(null,ht,de,be,K,_e,Se),ee.el=ht.el}if(et&&jn(et,_e),!Dt&&(Te=Le&&Le.onVnodeMounted)){const ht=ee;jn(()=>Ao(Te,at,ht),_e)}(ee.shapeFlag&256||at&&ba(at.vnode)&&at.vnode.shapeFlag&256)&&K.a&&jn(K.a,_e),K.isMounted=!0,ee=de=be=null}},we=K.effect=new ql(Ae,yo,()=>kf(he),K.scope),he=K.update=()=>{we.dirty&&we.run()};he.id=K.uid,na(K,!0),he()},me=(K,ee,de)=>{ee.component=K;const be=K.vnode.props;K.vnode=ee,K.next=null,QU(K,ee.props,be,de),XU(K,ee.children,de),Oa(),TS(K),Ba()},ie=(K,ee,de,be,_e,Se,Oe,Ae,we=!1)=>{const he=K&&K.children,Te=K?K.shapeFlag:0,Fe=ee.children,{patchFlag:Le,shapeFlag:He}=ee;if(Le>0){if(Le&128){Ee(he,Fe,de,be,_e,Se,Oe,Ae,we);return}else if(Le&256){Ne(he,Fe,de,be,_e,Se,Oe,Ae,we);return}}He&8?(Te&16&&$e(he,_e,Se),Fe!==he&&A(de,Fe)):Te&16?He&16?Ee(he,Fe,de,be,_e,Se,Oe,Ae,we):$e(he,_e,Se,!0):(Te&8&&A(de,""),He&16&&V(Fe,de,be,_e,Se,Oe,Ae,we))},Ne=(K,ee,de,be,_e,Se,Oe,Ae,we)=>{K=K||Il,ee=ee||Il;const he=K.length,Te=ee.length,Fe=Math.min(he,Te);let Le;for(Le=0;Le<Fe;Le++){const He=ee[Le]=we?ss(ee[Le]):jo(ee[Le]);I(K[Le],He,de,null,_e,Se,Oe,Ae,we)}he>Te?$e(K,_e,Se,!0,!1,Fe):V(ee,de,be,_e,Se,Oe,Ae,we,Fe)},Ee=(K,ee,de,be,_e,Se,Oe,Ae,we)=>{let he=0;const Te=ee.length;let Fe=K.length-1,Le=Te-1;for(;he<=Fe&&he<=Le;){const He=K[he],et=ee[he]=we?ss(ee[he]):jo(ee[he]);if(Ei(He,et))I(He,et,de,null,_e,Se,Oe,Ae,we);else break;he++}for(;he<=Fe&&he<=Le;){const He=K[Fe],et=ee[Le]=we?ss(ee[Le]):jo(ee[Le]);if(Ei(He,et))I(He,et,de,null,_e,Se,Oe,Ae,we);else break;Fe--,Le--}if(he>Fe){if(he<=Le){const He=Le+1,et=He<Te?ee[He].el:be;for(;he<=Le;)I(null,ee[he]=we?ss(ee[he]):jo(ee[he]),de,et,_e,Se,Oe,Ae,we),he++}}else if(he>Le)for(;he<=Fe;)Xe(K[he],_e,Se,!0),he++;else{const He=he,et=he,at=new Map;for(he=et;he<=Le;he++){const It=ee[he]=we?ss(ee[he]):jo(ee[he]);It.key!=null&&at.set(It.key,he)}let Dt,ht=0;const Tn=Le-et+1;let To=!1,Pr=0;const ho=new Array(Tn);for(he=0;he<Tn;he++)ho[he]=0;for(he=He;he<=Fe;he++){const It=K[he];if(ht>=Tn){Xe(It,_e,Se,!0);continue}let Bt;if(It.key!=null)Bt=at.get(It.key);else for(Dt=et;Dt<=Le;Dt++)if(ho[Dt-et]===0&&Ei(It,ee[Dt])){Bt=Dt;break}Bt===void 0?Xe(It,_e,Se,!0):(ho[Bt-et]=he+1,Bt>=Pr?Pr=Bt:To=!0,I(It,ee[Bt],de,null,_e,Se,Oe,Ae,we),ht++)}const Dn=To?oq(ho):Il;for(Dt=Dn.length-1,he=Tn-1;he>=0;he--){const It=et+he,Bt=ee[It],Do=It+1<Te?ee[It+1].el:be;ho[he]===0?I(null,Bt,de,Do,_e,Se,Oe,Ae,we):To&&(Dt<0||he!==Dn[Dt]?Je(Bt,de,Do,2):Dt--)}}},Je=(K,ee,de,be,_e=null)=>{const{el:Se,type:Oe,transition:Ae,children:we,shapeFlag:he}=K;if(he&6){Je(K.component.subTree,ee,de,be);return}if(he&128){K.suspense.move(ee,de,be);return}if(he&64){Oe.move(K,ee,de,nt);return}if(Oe===Pe){l(Se,ee,de);for(let Fe=0;Fe<we.length;Fe++)Je(we[Fe],ee,de,be);l(K.anchor,ee,de);return}if(Oe===ka){B(K,ee,de);return}if(be!==2&&he&1&&Ae)if(be===0)Ae.beforeEnter(Se),l(Se,ee,de),jn(()=>Ae.enter(Se),_e);else{const{leave:Fe,delayLeave:Le,afterLeave:He}=Ae,et=()=>l(Se,ee,de),at=()=>{Fe(Se,()=>{et(),He&&He()})};Le?Le(Se,et,at):at()}else l(Se,ee,de)},Xe=(K,ee,de,be=!1,_e=!1)=>{const{type:Se,props:Oe,ref:Ae,children:we,dynamicChildren:he,shapeFlag:Te,patchFlag:Fe,dirs:Le}=K;if(Ae!=null&&Fp(Ae,null,de,K,!0),Te&256){ee.ctx.deactivate(K);return}const He=Te&1&&Le,et=!ba(K);let at;if(et&&(at=Oe&&Oe.onVnodeBeforeUnmount)&&Ao(at,ee,K),Te&6)Re(K.component,de,be);else{if(Te&128){K.suspense.unmount(de,be);return}He&&Gi(K,null,ee,"beforeUnmount"),Te&64?K.type.remove(K,ee,de,_e,nt,be):he&&(Se!==Pe||Fe>0&&Fe&64)?$e(he,ee,de,!1,!0):(Se===Pe&&Fe&384||!_e&&Te&16)&&$e(we,ee,de),be&&ge(K)}(et&&(at=Oe&&Oe.onVnodeUnmounted)||He)&&jn(()=>{at&&Ao(at,ee,K),He&&Gi(K,null,ee,"unmounted")},de)},ge=K=>{const{type:ee,el:de,anchor:be,transition:_e}=K;if(ee===Pe){je(de,be);return}if(ee===ka){z(K);return}const Se=()=>{u(de),_e&&!_e.persisted&&_e.afterLeave&&_e.afterLeave()};if(K.shapeFlag&1&&_e&&!_e.persisted){const{leave:Oe,delayLeave:Ae}=_e,we=()=>Oe(de,Se);Ae?Ae(K.el,Se,we):we()}else Se()},je=(K,ee)=>{let de;for(;K!==ee;)de=y(K),u(K),K=de;u(ee)},Re=(K,ee,de)=>{const{bum:be,scope:_e,update:Se,subTree:Oe,um:Ae}=K;be&&Bl(be),_e.stop(),Se&&(Se.active=!1,Xe(Oe,K,ee,de)),Ae&&jn(Ae,ee),jn(()=>{K.isUnmounted=!0},ee),ee&&ee.pendingBranch&&!ee.isUnmounted&&K.asyncDep&&!K.asyncResolved&&K.suspenseId===ee.pendingId&&(ee.deps--,ee.deps===0&&ee.resolve())},$e=(K,ee,de,be=!1,_e=!1,Se=0)=>{for(let Oe=Se;Oe<K.length;Oe++)Xe(K[Oe],ee,de,be,_e)},vt=K=>K.shapeFlag&6?vt(K.component.subTree):K.shapeFlag&128?K.suspense.next():y(K.anchor||K.el);let st=!1;const Ot=(K,ee,de)=>{K==null?ee._vnode&&Xe(ee._vnode,null,null,!0):I(ee._vnode||null,K,ee,null,null,null,de),st||(st=!0,TS(),Lp(),st=!1),ee._vnode=K},nt={p:I,um:Xe,m:Je,r:ge,mt:re,mc:V,pc:ie,pbc:W,n:vt,o:i};let yt,Wt;return n&&([yt,Wt]=n(nt)),{render:Ot,hydrate:yt,createApp:WU(Ot,yt)}}function fb({type:i,props:n},r){return r==="svg"&&i==="foreignObject"||r==="mathml"&&i==="annotation-xml"&&n&&n.encoding&&n.encoding.includes("html")?void 0:r}function na({effect:i,update:n},r){i.allowRecurse=n.allowRecurse=r}function uI(i,n){return(!i||i&&!i.pendingBranch)&&n&&!n.persisted}function E_(i,n,r=!1){const l=i.children,u=n.children;if(Ve(l)&&Ve(u))for(let p=0;p<l.length;p++){const f=l[p];let b=u[p];b.shapeFlag&1&&!b.dynamicChildren&&((b.patchFlag<=0||b.patchFlag===32)&&(b=u[p]=ss(u[p]),b.el=f.el),r||E_(f,b)),b.type===Ca&&(b.el=f.el)}}function oq(i){const n=i.slice(),r=[0];let l,u,p,f,b;const m=i.length;for(l=0;l<m;l++){const v=i[l];if(v!==0){if(u=r[r.length-1],i[u]<v){n[l]=u,r.push(l);continue}for(p=0,f=r.length-1;p<f;)b=p+f>>1,i[r[b]]<v?p=b+1:f=b;v<i[r[p]]&&(p>0&&(n[l]=r[p-1]),r[p]=l)}}for(p=r.length,f=r[p-1];p-- >0;)r[p]=f,f=n[f];return r}function hI(i){const n=i.subTree.component;if(n)return n.asyncDep&&!n.asyncResolved?n:hI(n)}const iq=i=>i.__isTeleport,$d=i=>i&&(i.disabled||i.disabled===""),jS=i=>typeof SVGElement<"u"&&i instanceof SVGElement,$S=i=>typeof MathMLElement=="function"&&i instanceof MathMLElement,kk=(i,n)=>{const r=i&&i.to;return on(r)?n?n(r):null:r},rq={name:"Teleport",__isTeleport:!0,process(i,n,r,l,u,p,f,b,m,v){const{mc:A,pc:x,pbc:y,o:{insert:S,querySelector:T,createText:I,createComment:F}}=v,N=$d(n.props);let{shapeFlag:L,children:B,dynamicChildren:z}=n;if(i==null){const H=n.el=I(""),G=n.anchor=I("");S(H,r,l),S(G,r,l);const P=n.target=kk(n.props,T),V=n.targetAnchor=I("");P&&(S(V,P),f==="svg"||jS(P)?f="svg":(f==="mathml"||$S(P))&&(f="mathml"));const U=(W,Y)=>{L&16&&A(B,W,Y,u,p,f,b,m)};N?U(r,G):P&&U(P,V)}else{n.el=i.el;const H=n.anchor=i.anchor,G=n.target=i.target,P=n.targetAnchor=i.targetAnchor,V=$d(i.props),U=V?r:G,W=V?H:P;if(f==="svg"||jS(G)?f="svg":(f==="mathml"||$S(G))&&(f="mathml"),z?(y(i.dynamicChildren,z,U,u,p,f,b),E_(i,n,!0)):m||x(i,n,U,W,u,p,f,b,!1),N)V?n.props&&i.props&&n.props.to!==i.props.to&&(n.props.to=i.props.to):Zh(n,r,H,v,1);else if((n.props&&n.props.to)!==(i.props&&i.props.to)){const Y=n.target=kk(n.props,T);Y&&Zh(n,Y,null,v,0)}else V&&Zh(n,G,P,v,1)}pI(n)},remove(i,n,r,l,{um:u,o:{remove:p}},f){const{shapeFlag:b,children:m,anchor:v,targetAnchor:A,target:x,props:y}=i;if(x&&p(A),f&&p(v),b&16){const S=f||!$d(y);for(let T=0;T<m.length;T++){const I=m[T];u(I,n,r,S,!!I.dynamicChildren)}}},move:Zh,hydrate:sq};function Zh(i,n,r,{o:{insert:l},m:u},p=2){p===0&&l(i.targetAnchor,n,r);const{el:f,anchor:b,shapeFlag:m,children:v,props:A}=i,x=p===2;if(x&&l(f,n,r),(!x||$d(A))&&m&16)for(let y=0;y<v.length;y++)u(v[y],n,r,2);x&&l(b,n,r)}function sq(i,n,r,l,u,p,{o:{nextSibling:f,parentNode:b,querySelector:m}},v){const A=n.target=kk(n.props,m);if(A){const x=A._lpa||A.firstChild;if(n.shapeFlag&16)if($d(n.props))n.anchor=v(f(i),n,b(i),r,l,u,p),n.targetAnchor=x;else{n.anchor=f(i);let y=x;for(;y;)if(y=f(y),y&&y.nodeType===8&&y.data==="teleport anchor"){n.targetAnchor=y,A._lpa=n.targetAnchor&&f(n.targetAnchor);break}v(x,n,A,r,l,u,p)}pI(n)}return n.anchor&&f(n.anchor)}const aq=rq;function pI(i){const n=i.ctx;if(n&&n.ut){let r=i.children[0].el;for(;r&&r!==i.targetAnchor;)r.nodeType===1&&r.setAttribute("data-v-owner",n.uid),r=r.nextSibling;n.ut()}}const Pe=Symbol.for("v-fgt"),Ca=Symbol.for("v-txt"),Yn=Symbol.for("v-cmt"),ka=Symbol.for("v-stc"),Vd=[];let xo=null;function X(i=!1){Vd.push(xo=i?null:[])}function fI(){Vd.pop(),xo=Vd[Vd.length-1]||null}let ya=1;function _k(i){ya+=i}function mI(i){return i.dynamicChildren=ya>0?xo||Il:null,fI(),ya>0&&xo&&xo.push(i),i}function ne(i,n,r,l,u,p){return mI(_(i,n,r,l,u,p,!0))}function fs(i,n,r,l,u){return mI(ue(i,n,r,l,u,!0))}function ms(i){return i?i.__v_isVNode===!0:!1}function Ei(i,n){return i.type===n.type&&i.key===n.key}function lq(i){}const xf="__vInternal",gI=({key:i})=>i??null,bp=({ref:i,ref_key:n,ref_for:r})=>(typeof i=="number"&&(i=""+i),i!=null?on(i)||$n(i)||ot(i)?{i:vn,r:i,k:n,f:!!r}:i:null);function _(i,n=null,r=null,l=0,u=null,p=i===Pe?0:1,f=!1,b=!1){const m={__v_isVNode:!0,__v_skip:!0,type:i,props:n,key:n&&gI(n),ref:n&&bp(n),scopeId:wf,slotScopeIds:null,children:r,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:p,patchFlag:l,dynamicProps:u,dynamicChildren:null,appContext:null,ctx:vn};return b?(S_(m,r),p&128&&i.normalize(m)):r&&(m.shapeFlag|=on(r)?8:16),ya>0&&!f&&xo&&(m.patchFlag>0||p&6)&&m.patchFlag!==32&&xo.push(m),m}const ue=cq;function cq(i,n=null,r=null,l=0,u=null,p=!1){if((!i||i===N5)&&(i=Yn),ms(i)){const b=Xi(i,n,!0);return r&&S_(b,r),ya>0&&!p&&xo&&(b.shapeFlag&6?xo[xo.indexOf(i)]=b:xo.push(b)),b.patchFlag|=-2,b}if(gq(i)&&(i=i.__vccOpts),n){n=bI(n);let{class:b,style:m}=n;b&&!on(b)&&(n.class=Wn(b)),Ut(m)&&(u_(m)&&!Ve(m)&&(m=nn({},m)),n.style=fu(m))}const f=on(i)?1:L5(i)?128:iq(i)?64:Ut(i)?4:ot(i)?2:0;return _(i,n,r,l,u,f,p,!0)}function bI(i){return i?u_(i)||xf in i?nn({},i):i:null}function Xi(i,n,r=!1){const{props:l,ref:u,patchFlag:p,children:f}=i,b=n?kI(l||{},n):l;return{__v_isVNode:!0,__v_skip:!0,type:i.type,props:b,key:b&&gI(b),ref:n&&n.ref?r&&u?Ve(u)?u.concat(bp(n)):[u,bp(n)]:bp(n):u,scopeId:i.scopeId,slotScopeIds:i.slotScopeIds,children:f,target:i.target,targetAnchor:i.targetAnchor,staticCount:i.staticCount,shapeFlag:i.shapeFlag,patchFlag:n&&i.type!==Pe?p===-1?16:p|16:p,dynamicProps:i.dynamicProps,dynamicChildren:i.dynamicChildren,appContext:i.appContext,dirs:i.dirs,transition:i.transition,component:i.component,suspense:i.suspense,ssContent:i.ssContent&&Xi(i.ssContent),ssFallback:i.ssFallback&&Xi(i.ssFallback),el:i.el,anchor:i.anchor,ctx:i.ctx,ce:i.ce}}function ze(i=" ",n=0){return ue(Ca,null,i,n)}function bn(i,n){const r=ue(ka,null,i);return r.staticCount=n,r}function Ie(i="",n=!1){return n?(X(),fs(Yn,null,i)):ue(Yn,null,i)}function jo(i){return i==null||typeof i=="boolean"?ue(Yn):Ve(i)?ue(Pe,null,i.slice()):typeof i=="object"?ss(i):ue(Ca,null,String(i))}function ss(i){return i.el===null&&i.patchFlag!==-1||i.memo?i:Xi(i)}function S_(i,n){let r=0;const{shapeFlag:l}=i;if(n==null)n=null;else if(Ve(n))r=16;else if(typeof n=="object")if(l&65){const u=n.default;u&&(u._c&&(u._d=!1),S_(i,u()),u._c&&(u._d=!0));return}else{r=32;const u=n._;!u&&!(xf in n)?n._ctx=vn:u===3&&vn&&(vn.slots._===1?n._=1:(n._=2,i.patchFlag|=1024))}else ot(n)?(n={default:n,_ctx:vn},r=32):(n=String(n),l&64?(r=16,n=[ze(n)]):r=8);i.children=n,i.shapeFlag|=r}function kI(...i){const n={};for(let r=0;r<i.length;r++){const l=i[r];for(const u in l)if(u==="class")n.class!==l.class&&(n.class=Wn([n.class,l.class]));else if(u==="style")n.style=fu([n.style,l.style]);else if(hu(u)){const p=n[u],f=l[u];f&&p!==f&&!(Ve(p)&&p.includes(f))&&(n[u]=p?[].concat(p,f):f)}else u!==""&&(n[u]=l[u])}return n}function Ao(i,n,r,l=null){Vo(i,n,7,[r,l])}const dq=nI();let uq=0;function _I(i,n,r){const l=i.type,u=(n?n.appContext:i.appContext)||dq,p={uid:uq++,vnode:i,type:l,parent:n,appContext:u,root:null,next:null,subTree:null,effect:null,update:null,scope:new s_(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:n?n.provides:Object.create(u.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:iI(l,u),emitsOptions:O5(l,u),emit:null,emitted:null,propsDefaults:jt,inheritAttrs:l.inheritAttrs,ctx:jt,data:jt,props:jt,attrs:jt,slots:jt,refs:jt,setupState:jt,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:r,suspenseId:r?r.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return p.ctx={_:p},p.root=n?n.root:p,p.emit=nU.bind(null,p),i.ce&&i.ce(p),p}let En=null;const Or=()=>En||vn;let zp,wk;{const i=i5(),n=(r,l)=>{let u;return(u=i[r])||(u=i[r]=[]),u.push(l),p=>{u.length>1?u.forEach(f=>f(p)):u[0](p)}};zp=n("__VUE_INSTANCE_SETTERS__",r=>En=r),wk=n("__VUE_SSR_SETTERS__",r=>ku=r)}const xa=i=>{const n=En;return zp(i),i.scope.on(),()=>{i.scope.off(),zp(n)}},vk=()=>{En&&En.scope.off(),zp(null)};function wI(i){return i.vnode.shapeFlag&4}let ku=!1;function vI(i,n=!1){n&&wk(n);const{props:r,children:l}=i.vnode,u=wI(i);YU(i,r,u,n),JU(i,l);const p=u?hq(i,n):void 0;return n&&wk(!1),p}function hq(i,n){const r=i.type;i.accessCache=Object.create(null),i.proxy=Zd(new Proxy(i.ctx,fk));const{setup:l}=r;if(l){const u=i.setupContext=l.length>1?CI(i):null,p=xa(i);Oa();const f=Er(l,i,0,[i.props,u]);if(Ba(),p(),i_(f)){if(f.then(vk,vk),n)return f.then(b=>{Ak(i,b,n)}).catch(b=>{Pa(b,i,0)});i.asyncDep=f}else Ak(i,f,n)}else AI(i,n)}function Ak(i,n,r){ot(n)?i.type.__ssrInlineRender?i.ssrRender=n:i.render=n:Ut(n)&&(i.setupState=m_(n)),AI(i,r)}let jp,Ck;function pq(i){jp=i,Ck=n=>{n.render._rc&&(n.withProxy=new Proxy(n.ctx,SU))}}const fq=()=>!jp;function AI(i,n,r){const l=i.type;if(!i.render){if(!n&&jp&&!l.render){const u=l.template||y_(i).template;if(u){const{isCustomElement:p,compilerOptions:f}=i.appContext.config,{delimiters:b,compilerOptions:m}=l,v=nn(nn({isCustomElement:p,delimiters:b},f),m);l.render=jp(u,v)}}i.render=l.render||yo,Ck&&Ck(i)}{const u=xa(i);Oa();try{$U(i)}finally{Ba(),u()}}}function mq(i){return i.attrsProxy||(i.attrsProxy=new Proxy(i.attrs,{get(n,r){return So(i,"get","$attrs"),n[r]}}))}function CI(i){const n=r=>{i.exposed=r||{}};return{get attrs(){return mq(i)},slots:i.slots,emit:i.emit,expose:n}}function Ef(i){if(i.exposed)return i.exposeProxy||(i.exposeProxy=new Proxy(m_(Zd(i.exposed)),{get(n,r){if(r in n)return n[r];if(r in zd)return zd[r](i)},has(n,r){return r in n||r in zd}}))}function yk(i,n=!0){return ot(i)?i.displayName||i.name:i.name||n&&i.__name}function gq(i){return ot(i)&&"__vccOpts"in i}const T_=(i,n)=>RH(i,n,ku);function bq(i,n,r=jt){const l=Or(),u=so(n),p=$o(n),f=E5((m,v)=>{let A;return $5(()=>{const x=i[n];Ti(A,x)&&(A=x,v())}),{get(){return m(),r.get?r.get(A):A},set(x){const y=l.vnode.props;!(y&&(n in y||u in y||p in y)&&(`onUpdate:${n}`in y||`onUpdate:${u}`in y||`onUpdate:${p}`in y))&&Ti(x,A)&&(A=x,v()),l.emit(`update:${n}`,r.set?r.set(x):x)}}}),b=n==="modelValue"?"modelModifiers":`${n}Modifiers`;return f[Symbol.iterator]=()=>{let m=0;return{next(){return m<2?{value:m++?i[b]||{}:f,done:!1}:{done:!0}}}},f}function wn(i,n,r){const l=arguments.length;return l===2?Ut(n)&&!Ve(n)?ms(n)?ue(i,null,[n]):ue(i,n):ue(i,null,n):(l>3?r=Array.prototype.slice.call(arguments,2):l===3&&ms(r)&&(r=[r]),ue(i,n,r))}function kq(){}function _q(i,n,r,l){const u=r[l];if(u&&yI(u,i))return u;const p=n();return p.memo=i.slice(),r[l]=p}function yI(i,n){const r=i.memo;if(r.length!=n.length)return!1;for(let l=0;l<r.length;l++)if(Ti(r[l],n[l]))return!1;return ya>0&&xo&&xo.push(i),!0}const xI="3.4.21",wq=yo,vq=ZH,Aq=Cl,Cq=M5,yq={createComponentInstance:_I,setupComponent:vI,renderComponentRoot:gp,setCurrentRenderingInstance:tu,isVNode:ms,normalizeVNode:jo},xq=yq,Eq=null,Sq=null,Tq=null;/**
* @vue/runtime-dom v3.4.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const Dq="http://www.w3.org/2000/svg",Iq="http://www.w3.org/1998/Math/MathML",as=typeof document<"u"?document:null,VS=as&&as.createElement("template"),Mq={insert:(i,n,r)=>{n.insertBefore(i,r||null)},remove:i=>{const n=i.parentNode;n&&n.removeChild(i)},createElement:(i,n,r,l)=>{const u=n==="svg"?as.createElementNS(Dq,i):n==="mathml"?as.createElementNS(Iq,i):as.createElement(i,r?{is:r}:void 0);return i==="select"&&l&&l.multiple!=null&&u.setAttribute("multiple",l.multiple),u},createText:i=>as.createTextNode(i),createComment:i=>as.createComment(i),setText:(i,n)=>{i.nodeValue=n},setElementText:(i,n)=>{i.textContent=n},parentNode:i=>i.parentNode,nextSibling:i=>i.nextSibling,querySelector:i=>as.querySelector(i),setScopeId(i,n){i.setAttribute(n,"")},insertStaticContent(i,n,r,l,u,p){const f=r?r.previousSibling:n.lastChild;if(u&&(u===p||u.nextSibling))for(;n.insertBefore(u.cloneNode(!0),r),!(u===p||!(u=u.nextSibling)););else{VS.innerHTML=l==="svg"?`<svg>${i}</svg>`:l==="mathml"?`<math>${i}</math>`:i;const b=VS.content;if(l==="svg"||l==="mathml"){const m=b.firstChild;for(;m.firstChild;)b.appendChild(m.firstChild);b.removeChild(m)}n.insertBefore(b,r)}return[f?f.nextSibling:n.firstChild,r?r.previousSibling:n.lastChild]}},es="transition",Ed="animation",Wl=Symbol("_vtc"),D_=(i,{slots:n})=>wn(H5,SI(i),n);D_.displayName="Transition";const EI={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},Oq=D_.props=nn({},A_,EI),oa=(i,n=[])=>{Ve(i)?i.forEach(r=>r(...n)):i&&i(...n)},HS=i=>i?Ve(i)?i.some(n=>n.length>1):i.length>1:!1;function SI(i){const n={};for(const J in i)J in EI||(n[J]=i[J]);if(i.css===!1)return n;const{name:r="v",type:l,duration:u,enterFromClass:p=`${r}-enter-from`,enterActiveClass:f=`${r}-enter-active`,enterToClass:b=`${r}-enter-to`,appearFromClass:m=p,appearActiveClass:v=f,appearToClass:A=b,leaveFromClass:x=`${r}-leave-from`,leaveActiveClass:y=`${r}-leave-active`,leaveToClass:S=`${r}-leave-to`}=i,T=Bq(u),I=T&&T[0],F=T&&T[1],{onBeforeEnter:N,onEnter:L,onEnterCancelled:B,onLeave:z,onLeaveCancelled:H,onBeforeAppear:G=N,onAppear:P=L,onAppearCancelled:V=B}=n,U=(J,te,re)=>{ns(J,te?A:b),ns(J,te?v:f),re&&re()},W=(J,te)=>{J._isLeaving=!1,ns(J,x),ns(J,S),ns(J,y),te&&te()},Y=J=>(te,re)=>{const ae=J?P:L,oe=()=>U(te,J,re);oa(ae,[te,oe]),US(()=>{ns(te,J?m:p),kr(te,J?A:b),HS(ae)||qS(te,l,I,oe)})};return nn(n,{onBeforeEnter(J){oa(N,[J]),kr(J,p),kr(J,f)},onBeforeAppear(J){oa(G,[J]),kr(J,m),kr(J,v)},onEnter:Y(!1),onAppear:Y(!0),onLeave(J,te){J._isLeaving=!0;const re=()=>W(J,te);kr(J,x),DI(),kr(J,y),US(()=>{J._isLeaving&&(ns(J,x),kr(J,S),HS(z)||qS(J,l,F,re))}),oa(z,[J,re])},onEnterCancelled(J){U(J,!1),oa(B,[J])},onAppearCancelled(J){U(J,!0),oa(V,[J])},onLeaveCancelled(J){W(J),oa(H,[J])}})}function Bq(i){if(i==null)return null;if(Ut(i))return[mb(i.enter),mb(i.leave)];{const n=mb(i);return[n,n]}}function mb(i){return Bp(i)}function kr(i,n){n.split(/\s+/).forEach(r=>r&&i.classList.add(r)),(i[Wl]||(i[Wl]=new Set)).add(n)}function ns(i,n){n.split(/\s+/).forEach(l=>l&&i.classList.remove(l));const r=i[Wl];r&&(r.delete(n),r.size||(i[Wl]=void 0))}function US(i){requestAnimationFrame(()=>{requestAnimationFrame(i)})}let Pq=0;function qS(i,n,r,l){const u=i._endId=++Pq,p=()=>{u===i._endId&&l()};if(r)return setTimeout(p,r);const{type:f,timeout:b,propCount:m}=TI(i,n);if(!f)return l();const v=f+"end";let A=0;const x=()=>{i.removeEventListener(v,y),p()},y=S=>{S.target===i&&++A>=m&&x()};setTimeout(()=>{A<m&&x()},b+1),i.addEventListener(v,y)}function TI(i,n){const r=window.getComputedStyle(i),l=T=>(r[T]||"").split(", "),u=l(`${es}Delay`),p=l(`${es}Duration`),f=GS(u,p),b=l(`${Ed}Delay`),m=l(`${Ed}Duration`),v=GS(b,m);let A=null,x=0,y=0;n===es?f>0&&(A=es,x=f,y=p.length):n===Ed?v>0&&(A=Ed,x=v,y=m.length):(x=Math.max(f,v),A=x>0?f>v?es:Ed:null,y=A?A===es?p.length:m.length:0);const S=A===es&&/\b(transform|all)(,|$)/.test(l(`${es}Property`).toString());return{type:A,timeout:x,propCount:y,hasTransform:S}}function GS(i,n){for(;i.length<n.length;)i=i.concat(i);return Math.max(...n.map((r,l)=>WS(r)+WS(i[l])))}function WS(i){return i==="auto"?0:Number(i.slice(0,-1).replace(",","."))*1e3}function DI(){return document.body.offsetHeight}function Nq(i,n,r){const l=i[Wl];l&&(n=(n?[n,...l]:[...l]).join(" ")),n==null?i.removeAttribute("class"):r?i.setAttribute("class",n):i.className=n}const $p=Symbol("_vod"),II=Symbol("_vsh"),MI={beforeMount(i,{value:n},{transition:r}){i[$p]=i.style.display==="none"?"":i.style.display,r&&n?r.beforeEnter(i):Sd(i,n)},mounted(i,{value:n},{transition:r}){r&&n&&r.enter(i)},updated(i,{value:n,oldValue:r},{transition:l}){!n!=!r&&(l?n?(l.beforeEnter(i),Sd(i,!0),l.enter(i)):l.leave(i,()=>{Sd(i,!1)}):Sd(i,n))},beforeUnmount(i,{value:n}){Sd(i,n)}};function Sd(i,n){i.style.display=n?i[$p]:"none",i[II]=!n}function Lq(){MI.getSSRProps=({value:i})=>{if(!i)return{style:{display:"none"}}}}const OI=Symbol("");function Rq(i){const n=Or();if(!n)return;const r=n.ut=(u=i(n.proxy))=>{Array.from(document.querySelectorAll(`[data-v-owner="${n.uid}"]`)).forEach(p=>Ek(p,u))},l=()=>{const u=i(n.proxy);xk(n.subTree,u),r(u)};j5(l),vs(()=>{const u=new MutationObserver(l);u.observe(n.subTree.el.parentNode,{childList:!0}),Cf(()=>u.disconnect())})}function xk(i,n){if(i.shapeFlag&128){const r=i.suspense;i=r.activeBranch,r.pendingBranch&&!r.isHydrating&&r.effects.push(()=>{xk(r.activeBranch,n)})}for(;i.component;)i=i.component.subTree;if(i.shapeFlag&1&&i.el)Ek(i.el,n);else if(i.type===Pe)i.children.forEach(r=>xk(r,n));else if(i.type===ka){let{el:r,anchor:l}=i;for(;r&&(Ek(r,n),r!==l);)r=r.nextSibling}}function Ek(i,n){if(i.nodeType===1){const r=i.style;let l="";for(const u in n)r.setProperty(`--${u}`,n[u]),l+=`--${u}: ${n[u]};`;r[OI]=l}}const Fq=/(^|;)\s*display\s*:/;function zq(i,n,r){const l=i.style,u=on(r);let p=!1;if(r&&!u){if(n)if(on(n))for(const f of n.split(";")){const b=f.slice(0,f.indexOf(":")).trim();r[b]==null&&kp(l,b,"")}else for(const f in n)r[f]==null&&kp(l,f,"");for(const f in r)f==="display"&&(p=!0),kp(l,f,r[f])}else if(u){if(n!==r){const f=l[OI];f&&(r+=";"+f),l.cssText=r,p=Fq.test(r)}}else n&&i.removeAttribute("style");$p in i&&(i[$p]=p?l.display:"",i[II]&&(l.display="none"))}const KS=/\s*!important$/;function kp(i,n,r){if(Ve(r))r.forEach(l=>kp(i,n,l));else if(r==null&&(r=""),n.startsWith("--"))i.setProperty(n,r);else{const l=jq(i,n);KS.test(r)?i.setProperty($o(l),r.replace(KS,""),"important"):i[l]=r}}const YS=["Webkit","Moz","ms"],gb={};function jq(i,n){const r=gb[n];if(r)return r;let l=so(n);if(l!=="filter"&&l in i)return gb[n]=l;l=pu(l);for(let u=0;u<YS.length;u++){const p=YS[u]+l;if(p in i)return gb[n]=p}return n}const QS="http://www.w3.org/1999/xlink";function $q(i,n,r,l,u){if(l&&n.startsWith("xlink:"))r==null?i.removeAttributeNS(QS,n.slice(6,n.length)):i.setAttributeNS(QS,n,r);else{const p=dH(n);r==null||p&&!r5(r)?i.removeAttribute(n):i.setAttribute(n,p?"":r)}}function Vq(i,n,r,l,u,p,f){if(n==="innerHTML"||n==="textContent"){l&&f(l,u,p),i[n]=r??"";return}const b=i.tagName;if(n==="value"&&b!=="PROGRESS"&&!b.includes("-")){const v=b==="OPTION"?i.getAttribute("value")||"":i.value,A=r??"";(v!==A||!("_value"in i))&&(i.value=A),r==null&&i.removeAttribute(n),i._value=r;return}let m=!1;if(r===""||r==null){const v=typeof i[n];v==="boolean"?r=r5(r):r==null&&v==="string"?(r="",m=!0):v==="number"&&(r=0,m=!0)}try{i[n]=r}catch{}m&&i.removeAttribute(n)}function vr(i,n,r,l){i.addEventListener(n,r,l)}function Hq(i,n,r,l){i.removeEventListener(n,r,l)}const ZS=Symbol("_vei");function Uq(i,n,r,l,u=null){const p=i[ZS]||(i[ZS]={}),f=p[n];if(l&&f)f.value=l;else{const[b,m]=qq(n);if(l){const v=p[n]=Kq(l,u);vr(i,b,v,m)}else f&&(Hq(i,b,f,m),p[n]=void 0)}}const JS=/(?:Once|Passive|Capture)$/;function qq(i){let n;if(JS.test(i)){n={};let l;for(;l=i.match(JS);)i=i.slice(0,i.length-l[0].length),n[l[0].toLowerCase()]=!0}return[i[2]===":"?i.slice(3):$o(i.slice(2)),n]}let bb=0;const Gq=Promise.resolve(),Wq=()=>bb||(Gq.then(()=>bb=0),bb=Date.now());function Kq(i,n){const r=l=>{if(!l._vts)l._vts=Date.now();else if(l._vts<=r.attached)return;Vo(Yq(l,r.value),n,5,[l])};return r.value=i,r.attached=Wq(),r}function Yq(i,n){if(Ve(n)){const r=i.stopImmediatePropagation;return i.stopImmediatePropagation=()=>{r.call(i),i._stopped=!0},n.map(l=>u=>!u._stopped&&l&&l(u))}else return n}const XS=i=>i.charCodeAt(0)===111&&i.charCodeAt(1)===110&&i.charCodeAt(2)>96&&i.charCodeAt(2)<123,Qq=(i,n,r,l,u,p,f,b,m)=>{const v=u==="svg";n==="class"?Nq(i,l,v):n==="style"?zq(i,r,l):hu(n)?n_(n)||Uq(i,n,r,l,f):(n[0]==="."?(n=n.slice(1),!0):n[0]==="^"?(n=n.slice(1),!1):Zq(i,n,l,v))?Vq(i,n,l,p,f,b,m):(n==="true-value"?i._trueValue=l:n==="false-value"&&(i._falseValue=l),$q(i,n,l,v))};function Zq(i,n,r,l){if(l)return!!(n==="innerHTML"||n==="textContent"||n in i&&XS(n)&&ot(r));if(n==="spellcheck"||n==="draggable"||n==="translate"||n==="form"||n==="list"&&i.tagName==="INPUT"||n==="type"&&i.tagName==="TEXTAREA")return!1;if(n==="width"||n==="height"){const u=i.tagName;if(u==="IMG"||u==="VIDEO"||u==="CANVAS"||u==="SOURCE")return!1}return XS(n)&&on(r)?!1:n in i}/*! #__NO_SIDE_EFFECTS__ */function BI(i,n){const r=lc(i);class l extends Sf{constructor(p){super(r,p,n)}}return l.def=r,l}/*! #__NO_SIDE_EFFECTS__ */const Jq=i=>BI(i,HI),Xq=typeof HTMLElement<"u"?HTMLElement:class{};class Sf extends Xq{constructor(n,r={},l){super(),this._def=n,this._props=r,this._instance=null,this._connected=!1,this._resolved=!1,this._numberProps=null,this._ob=null,this.shadowRoot&&l?l(this._createVNode(),this.shadowRoot):(this.attachShadow({mode:"open"}),this._def.__asyncLoader||this._resolveProps(this._def))}connectedCallback(){this._connected=!0,this._instance||(this._resolved?this._update():this._resolveDef())}disconnectedCallback(){this._connected=!1,this._ob&&(this._ob.disconnect(),this._ob=null),mu(()=>{this._connected||(Sk(null,this.shadowRoot),this._instance=null)})}_resolveDef(){this._resolved=!0;for(let l=0;l<this.attributes.length;l++)this._setAttr(this.attributes[l].name);this._ob=new MutationObserver(l=>{for(const u of l)this._setAttr(u.attributeName)}),this._ob.observe(this,{attributes:!0});const n=(l,u=!1)=>{const{props:p,styles:f}=l;let b;if(p&&!Ve(p))for(const m in p){const v=p[m];(v===Number||v&&v.type===Number)&&(m in this._props&&(this._props[m]=Bp(this._props[m])),(b||(b=Object.create(null)))[so(m)]=!0)}this._numberProps=b,u&&this._resolveProps(l),this._applyStyles(f),this._update()},r=this._def.__asyncLoader;r?r().then(l=>n(l,!0)):n(this._def)}_resolveProps(n){const{props:r}=n,l=Ve(r)?r:Object.keys(r||{});for(const u of Object.keys(this))u[0]!=="_"&&l.includes(u)&&this._setProp(u,this[u],!0,!1);for(const u of l.map(so))Object.defineProperty(this,u,{get(){return this._getProp(u)},set(p){this._setProp(u,p)}})}_setAttr(n){let r=this.getAttribute(n);const l=so(n);this._numberProps&&this._numberProps[l]&&(r=Bp(r)),this._setProp(l,r,!1)}_getProp(n){return this._props[n]}_setProp(n,r,l=!0,u=!0){r!==this._props[n]&&(this._props[n]=r,u&&this._instance&&this._update(),l&&(r===!0?this.setAttribute($o(n),""):typeof r=="string"||typeof r=="number"?this.setAttribute($o(n),r+""):r||this.removeAttribute($o(n))))}_update(){Sk(this._createVNode(),this.shadowRoot)}_createVNode(){const n=ue(this._def,nn({},this._props));return this._instance||(n.ce=r=>{this._instance=r,r.isCE=!0;const l=(p,f)=>{this.dispatchEvent(new CustomEvent(p,{detail:f}))};r.emit=(p,...f)=>{l(p,f),$o(p)!==p&&l($o(p),f)};let u=this;for(;u=u&&(u.parentNode||u.host);)if(u instanceof Sf){r.parent=u._instance,r.provides=u._instance.provides;break}}),n}_applyStyles(n){n&&n.forEach(r=>{const l=document.createElement("style");l.textContent=r,this.shadowRoot.appendChild(l)})}}function eG(i="$style"){{const n=Or();if(!n)return jt;const r=n.type.__cssModules;if(!r)return jt;const l=r[i];return l||jt}}const PI=new WeakMap,NI=new WeakMap,Vp=Symbol("_moveCb"),eT=Symbol("_enterCb"),LI={name:"TransitionGroup",props:nn({},Oq,{tag:String,moveClass:String}),setup(i,{slots:n}){const r=Or(),l=v_();let u,p;return cc(()=>{if(!u.length)return;const f=i.moveClass||`${i.name||"v"}-move`;if(!sG(u[0].el,r.vnode.el,f))return;u.forEach(oG),u.forEach(iG);const b=u.filter(rG);DI(),b.forEach(m=>{const v=m.el,A=v.style;kr(v,f),A.transform=A.webkitTransform=A.transitionDuration="";const x=v[Vp]=y=>{y&&y.target!==v||(!y||/transform$/.test(y.propertyName))&&(v.removeEventListener("transitionend",x),v[Vp]=null,ns(v,f))};v.addEventListener("transitionend",x)})}),()=>{const f=wt(i),b=SI(f);let m=f.tag||Pe;u=p,p=n.default?vf(n.default()):[];for(let v=0;v<p.length;v++){const A=p[v];A.key!=null&&va(A,Gl(A,b,l,r))}if(u)for(let v=0;v<u.length;v++){const A=u[v];va(A,Gl(A,b,l,r)),PI.set(A,A.el.getBoundingClientRect())}return ue(m,null,p)}}},tG=i=>delete i.mode;LI.props;const nG=LI;function oG(i){const n=i.el;n[Vp]&&n[Vp](),n[eT]&&n[eT]()}function iG(i){NI.set(i,i.el.getBoundingClientRect())}function rG(i){const n=PI.get(i),r=NI.get(i),l=n.left-r.left,u=n.top-r.top;if(l||u){const p=i.el.style;return p.transform=p.webkitTransform=`translate(${l}px,${u}px)`,p.transitionDuration="0s",i}}function sG(i,n,r){const l=i.cloneNode(),u=i[Wl];u&&u.forEach(b=>{b.split(/\s+/).forEach(m=>m&&l.classList.remove(m))}),r.split(/\s+/).forEach(b=>b&&l.classList.add(b)),l.style.display="none";const p=n.nodeType===1?n:n.parentNode;p.appendChild(l);const{hasTransform:f}=TI(l);return p.removeChild(l),f}const gs=i=>{const n=i.props["onUpdate:modelValue"]||!1;return Ve(n)?r=>Bl(n,r):n};function aG(i){i.target.composing=!0}function tT(i){const n=i.target;n.composing&&(n.composing=!1,n.dispatchEvent(new Event("input")))}const si=Symbol("_assign"),ut={created(i,{modifiers:{lazy:n,trim:r,number:l}},u){i[si]=gs(u);const p=l||u.props&&u.props.type==="number";vr(i,n?"change":"input",f=>{if(f.target.composing)return;let b=i.value;r&&(b=b.trim()),p&&(b=Yd(b)),i[si](b)}),r&&vr(i,"change",()=>{i.value=i.value.trim()}),n||(vr(i,"compositionstart",aG),vr(i,"compositionend",tT),vr(i,"change",tT))},mounted(i,{value:n}){i.value=n??""},beforeUpdate(i,{value:n,modifiers:{lazy:r,trim:l,number:u}},p){if(i[si]=gs(p),i.composing)return;const f=u||i.type==="number"?Yd(i.value):i.value,b=n??"";f!==b&&(document.activeElement===i&&i.type!=="range"&&(r||l&&i.value.trim()===b)||(i.value=b))}},I_={deep:!0,created(i,n,r){i[si]=gs(r),vr(i,"change",()=>{const l=i._modelValue,u=Kl(i),p=i.checked,f=i[si];if(Ve(l)){const b=ff(l,u),m=b!==-1;if(p&&!m)f(l.concat(u));else if(!p&&m){const v=[...l];v.splice(b,1),f(v)}}else if(Ma(l)){const b=new Set(l);p?b.add(u):b.delete(u),f(b)}else f(RI(i,p))})},mounted:nT,beforeUpdate(i,n,r){i[si]=gs(r),nT(i,n,r)}};function nT(i,{value:n,oldValue:r},l){i._modelValue=n,Ve(n)?i.checked=ff(n,l.props.value)>-1:Ma(n)?i.checked=n.has(l.props.value):n!==r&&(i.checked=ps(n,RI(i,!0)))}const M_={created(i,{value:n},r){i.checked=ps(n,r.props.value),i[si]=gs(r),vr(i,"change",()=>{i[si](Kl(i))})},beforeUpdate(i,{value:n,oldValue:r},l){i[si]=gs(l),n!==r&&(i.checked=ps(n,l.props.value))}},Tf={deep:!0,created(i,{value:n,modifiers:{number:r}},l){const u=Ma(n);vr(i,"change",()=>{const p=Array.prototype.filter.call(i.options,f=>f.selected).map(f=>r?Yd(Kl(f)):Kl(f));i[si](i.multiple?u?new Set(p):p:p[0]),i._assigning=!0,mu(()=>{i._assigning=!1})}),i[si]=gs(l)},mounted(i,{value:n,modifiers:{number:r}}){oT(i,n,r)},beforeUpdate(i,n,r){i[si]=gs(r)},updated(i,{value:n,modifiers:{number:r}}){i._assigning||oT(i,n,r)}};function oT(i,n,r){const l=i.multiple,u=Ve(n);if(!(l&&!u&&!Ma(n))){for(let p=0,f=i.options.length;p<f;p++){const b=i.options[p],m=Kl(b);if(l)if(u){const v=typeof m;v==="string"||v==="number"?b.selected=n.includes(r?Yd(m):m):b.selected=ff(n,m)>-1}else b.selected=n.has(m);else if(ps(Kl(b),n)){i.selectedIndex!==p&&(i.selectedIndex=p);return}}!l&&i.selectedIndex!==-1&&(i.selectedIndex=-1)}}function Kl(i){return"_value"in i?i._value:i.value}function RI(i,n){const r=n?"_trueValue":"_falseValue";return r in i?i[r]:n}const FI={created(i,n,r){Jh(i,n,r,null,"created")},mounted(i,n,r){Jh(i,n,r,null,"mounted")},beforeUpdate(i,n,r,l){Jh(i,n,r,l,"beforeUpdate")},updated(i,n,r,l){Jh(i,n,r,l,"updated")}};function zI(i,n){switch(i){case"SELECT":return Tf;case"TEXTAREA":return ut;default:switch(n){case"checkbox":return I_;case"radio":return M_;default:return ut}}}function Jh(i,n,r,l,u){const f=zI(i.tagName,r.props&&r.props.type)[u];f&&f(i,n,r,l)}function lG(){ut.getSSRProps=({value:i})=>({value:i}),M_.getSSRProps=({value:i},n)=>{if(n.props&&ps(n.props.value,i))return{checked:!0}},I_.getSSRProps=({value:i},n)=>{if(Ve(i)){if(n.props&&ff(i,n.props.value)>-1)return{checked:!0}}else if(Ma(i)){if(n.props&&i.has(n.props.value))return{checked:!0}}else if(i)return{checked:!0}},FI.getSSRProps=(i,n)=>{if(typeof n.type!="string")return;const r=zI(n.type.toUpperCase(),n.props&&n.props.type);if(r.getSSRProps)return r.getSSRProps(i,n)}}const cG=["ctrl","shift","alt","meta"],dG={stop:i=>i.stopPropagation(),prevent:i=>i.preventDefault(),self:i=>i.target!==i.currentTarget,ctrl:i=>!i.ctrlKey,shift:i=>!i.shiftKey,alt:i=>!i.altKey,meta:i=>!i.metaKey,left:i=>"button"in i&&i.button!==0,middle:i=>"button"in i&&i.button!==1,right:i=>"button"in i&&i.button!==2,exact:(i,n)=>cG.some(r=>i[`${r}Key`]&&!n.includes(r))},co=(i,n)=>{const r=i._withMods||(i._withMods={}),l=n.join(".");return r[l]||(r[l]=(u,...p)=>{for(let f=0;f<n.length;f++){const b=dG[n[f]];if(b&&b(u,n))return}return i(u,...p)})},uG={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},hG=(i,n)=>{const r=i._withKeys||(i._withKeys={}),l=n.join(".");return r[l]||(r[l]=u=>{if(!("key"in u))return;const p=$o(u.key);if(n.some(f=>f===p||uG[f]===p))return i(u)})},jI=nn({patchProp:Qq},Mq);let Hd,iT=!1;function $I(){return Hd||(Hd=lI(jI))}function VI(){return Hd=iT?Hd:cI(jI),iT=!0,Hd}const Sk=(...i)=>{$I().render(...i)},HI=(...i)=>{VI().hydrate(...i)},UI=(...i)=>{const n=$I().createApp(...i),{mount:r}=n;return n.mount=l=>{const u=WI(l);if(!u)return;const p=n._component;!ot(p)&&!p.render&&!p.template&&(p.template=u.innerHTML),u.innerHTML="";const f=r(u,!1,GI(u));return u instanceof Element&&(u.removeAttribute("v-cloak"),u.setAttribute("data-v-app","")),f},n},qI=(...i)=>{const n=VI().createApp(...i),{mount:r}=n;return n.mount=l=>{const u=WI(l);if(u)return r(u,!0,GI(u))},n};function GI(i){if(i instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&i instanceof MathMLElement)return"mathml"}function WI(i){return on(i)?document.querySelector(i):i}let rT=!1;const pG=()=>{rT||(rT=!0,lG(),Lq())};/**
* vue v3.4.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const fG=()=>{},mG=Object.freeze(Object.defineProperty({__proto__:null,BaseTransition:H5,BaseTransitionPropsValidators:A_,Comment:Yn,DeprecationTypes:Tq,EffectScope:s_,ErrorCodes:QH,ErrorTypeStrings:vq,Fragment:Pe,KeepAlive:CU,ReactiveEffect:ql,Static:ka,Suspense:hU,Teleport:aq,Text:Ca,TrackOpTypes:WH,Transition:D_,TransitionGroup:nG,TriggerOpTypes:KH,VueElement:Sf,assertNumber:YH,callWithAsyncErrorHandling:Vo,callWithErrorHandling:Er,camelize:so,capitalize:pu,cloneVNode:Xi,compatUtils:Sq,compile:fG,computed:T_,createApp:UI,createBlock:fs,createCommentVNode:Ie,createElementBlock:ne,createElementVNode:_,createHydrationRenderer:cI,createPropsRestProxy:zU,createRenderer:lI,createSSRApp:qI,createSlots:xU,createStaticVNode:bn,createTextVNode:ze,createVNode:ue,customRef:E5,defineAsyncComponent:vU,defineComponent:lc,defineCustomElement:BI,defineEmits:DU,defineExpose:IU,defineModel:BU,defineOptions:MU,defineProps:TU,defineSSRCustomElement:Jq,defineSlots:OU,devtools:Aq,effect:mH,effectScope:hH,getCurrentInstance:Or,getCurrentScope:l5,getTransitionRawChildren:vf,guardReactiveProps:bI,h:wn,handleError:Pa,hasInjectionContext:KU,hydrate:HI,initCustomFormatter:kq,initDirectivesForSSR:pG,inject:jd,isMemoSame:yI,isProxy:u_,isReactive:ga,isReadonly:wa,isRef:$n,isRuntimeOnly:fq,isShallow:Qd,isVNode:ms,markRaw:Zd,mergeDefaults:RU,mergeModels:FU,mergeProps:kI,nextTick:mu,normalizeClass:Wn,normalizeProps:lH,normalizeStyle:fu,onActivated:q5,onBeforeMount:K5,onBeforeUnmount:Na,onBeforeUpdate:C_,onDeactivated:G5,onErrorCaptured:J5,onMounted:vs,onRenderTracked:Z5,onRenderTriggered:Q5,onScopeDispose:pH,onServerPrefetch:Y5,onUnmounted:Cf,onUpdated:cc,openBlock:X,popScopeId:P5,provide:yf,proxyRefs:m_,pushScopeId:B5,queuePostFlushCb:Np,reactive:rn,readonly:d_,ref:_t,registerRuntimeCompiler:pq,render:Sk,renderList:Zt,renderSlot:Aa,resolveComponent:Ce,resolveDirective:dU,resolveDynamicComponent:cU,resolveFilter:Eq,resolveTransitionHooks:Gl,setBlockTracking:_k,setDevtoolsHook:Cq,setTransitionHooks:va,shallowReactive:A5,shallowReadonly:LH,shallowRef:y5,ssrContextKey:F5,ssrUtils:xq,stop:gH,toDisplayString:ce,toHandlerKey:Fd,toHandlers:EU,toRaw:wt,toRef:GH,toRefs:HH,toValue:jH,transformVNodeArgs:lq,triggerRef:zH,unref:f_,useAttrs:LU,useCssModule:eG,useCssVars:Rq,useModel:bq,useSSRContext:z5,useSlots:NU,useTransitionState:v_,vModelCheckbox:I_,vModelDynamic:FI,vModelRadio:M_,vModelSelect:Tf,vModelText:ut,vShow:MI,version:xI,warn:wq,watch:us,watchEffect:kU,watchPostEffect:j5,watchSyncEffect:$5,withAsyncContext:jU,withCtx:gt,withDefaults:PU,withDirectives:ft,withKeys:hG,withMemo:_q,withModifiers:co,withScopeId:oU},Symbol.toStringTag,{value:"Module"}));var Hp={exports:{}};Hp.exports;(function(i,n){var r=200,l="__lodash_hash_undefined__",u=9007199254740991,p="[object Arguments]",f="[object Array]",b="[object Boolean]",m="[object Date]",v="[object Error]",A="[object Function]",x="[object GeneratorFunction]",y="[object Map]",S="[object Number]",T="[object Object]",I="[object Promise]",F="[object RegExp]",N="[object Set]",L="[object String]",B="[object Symbol]",z="[object WeakMap]",H="[object ArrayBuffer]",G="[object DataView]",P="[object Float32Array]",V="[object Float64Array]",U="[object Int8Array]",W="[object Int16Array]",Y="[object Int32Array]",J="[object Uint8Array]",te="[object Uint8ClampedArray]",re="[object Uint16Array]",ae="[object Uint32Array]",oe=/[\\^$.*+?()[\]{}|]/g,me=/\w*$/,ie=/^\[object .+?Constructor\]$/,Ne=/^(?:0|[1-9]\d*)$/,Ee={};Ee[p]=Ee[f]=Ee[H]=Ee[G]=Ee[b]=Ee[m]=Ee[P]=Ee[V]=Ee[U]=Ee[W]=Ee[Y]=Ee[y]=Ee[S]=Ee[T]=Ee[F]=Ee[N]=Ee[L]=Ee[B]=Ee[J]=Ee[te]=Ee[re]=Ee[ae]=!0,Ee[v]=Ee[A]=Ee[z]=!1;var Je=typeof Sn=="object"&&Sn&&Sn.Object===Object&&Sn,Xe=typeof self=="object"&&self&&self.Object===Object&&self,ge=Je||Xe||Function("return this")(),je=n&&!n.nodeType&&n,Re=je&&!0&&i&&!i.nodeType&&i,$e=Re&&Re.exports===je;function vt(O,$){return O.set($[0],$[1]),O}function st(O,$){return O.add($),O}function Ot(O,$){for(var Q=-1,pe=O?O.length:0;++Q<pe&&$(O[Q],Q,O)!==!1;);return O}function nt(O,$){for(var Q=-1,pe=$.length,Ye=O.length;++Q<pe;)O[Ye+Q]=$[Q];return O}function yt(O,$,Q,pe){var Ye=-1,Ue=O?O.length:0;for(pe&&Ue&&(Q=O[++Ye]);++Ye<Ue;)Q=$(Q,O[Ye],Ye,O);return Q}function Wt(O,$){for(var Q=-1,pe=Array(O);++Q<O;)pe[Q]=$(Q);return pe}function K(O,$){return O==null?void 0:O[$]}function ee(O){var $=!1;if(O!=null&&typeof O.toString!="function")try{$=!!(O+"")}catch{}return $}function de(O){var $=-1,Q=Array(O.size);return O.forEach(function(pe,Ye){Q[++$]=[Ye,pe]}),Q}function be(O,$){return function(Q){return O($(Q))}}function _e(O){var $=-1,Q=Array(O.size);return O.forEach(function(pe){Q[++$]=pe}),Q}var Se=Array.prototype,Oe=Function.prototype,Ae=Object.prototype,we=ge["__core-js_shared__"],he=function(){var O=/[^.]+$/.exec(we&&we.keys&&we.keys.IE_PROTO||"");return O?"Symbol(src)_1."+O:""}(),Te=Oe.toString,Fe=Ae.hasOwnProperty,Le=Ae.toString,He=RegExp("^"+Te.call(Fe).replace(oe,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),et=$e?ge.Buffer:void 0,at=ge.Symbol,Dt=ge.Uint8Array,ht=be(Object.getPrototypeOf,Object),Tn=Object.create,To=Ae.propertyIsEnumerable,Pr=Se.splice,ho=Object.getOwnPropertySymbols,Dn=et?et.isBuffer:void 0,It=be(Object.keys,Object),Bt=Io(ge,"DataView"),Do=Io(ge,"Map"),Xt=Io(ge,"Promise"),nr=Io(ge,"Set"),or=Io(ge,"WeakMap"),ir=Io(Object,"create"),Es=In(Bt),Ii=In(Do),Ss=In(Xt),Ts=In(nr),An=In(or),Mi=at?at.prototype:void 0,Oi=Mi?Mi.valueOf:void 0;function po(O){var $=-1,Q=O?O.length:0;for(this.clear();++$<Q;){var pe=O[$];this.set(pe[0],pe[1])}}function fc(){this.__data__=ir?ir(null):{}}function mc(O){return this.has(O)&&delete this.__data__[O]}function gc(O){var $=this.__data__;if(ir){var Q=$[O];return Q===l?void 0:Q}return Fe.call($,O)?$[O]:void 0}function za(O){var $=this.__data__;return ir?$[O]!==void 0:Fe.call($,O)}function Ds(O,$){var Q=this.__data__;return Q[O]=ir&&$===void 0?l:$,this}po.prototype.clear=fc,po.prototype.delete=mc,po.prototype.get=gc,po.prototype.has=za,po.prototype.set=Ds;function en(O){var $=-1,Q=O?O.length:0;for(this.clear();++$<Q;){var pe=O[$];this.set(pe[0],pe[1])}}function Nr(){this.__data__=[]}function bc(O){var $=this.__data__,Q=fo($,O);if(Q<0)return!1;var pe=$.length-1;return Q==pe?$.pop():Pr.call($,Q,1),!0}function kc(O){var $=this.__data__,Q=fo($,O);return Q<0?void 0:$[Q][1]}function _c(O){return fo(this.__data__,O)>-1}function wc(O,$){var Q=this.__data__,pe=fo(Q,O);return pe<0?Q.push([O,$]):Q[pe][1]=$,this}en.prototype.clear=Nr,en.prototype.delete=bc,en.prototype.get=kc,en.prototype.has=_c,en.prototype.set=wc;function tn(O){var $=-1,Q=O?O.length:0;for(this.clear();++$<Q;){var pe=O[$];this.set(pe[0],pe[1])}}function Is(){this.__data__={hash:new po,map:new(Do||en),string:new po}}function ja(O){return Wo(this,O).delete(O)}function vc(O){return Wo(this,O).get(O)}function Ac(O){return Wo(this,O).has(O)}function pi(O,$){return Wo(this,O).set(O,$),this}tn.prototype.clear=Is,tn.prototype.delete=ja,tn.prototype.get=vc,tn.prototype.has=Ac,tn.prototype.set=pi;function Vn(O){this.__data__=new en(O)}function Cc(){this.__data__=new en}function yc(O){return this.__data__.delete(O)}function xc(O){return this.__data__.get(O)}function Ec(O){return this.__data__.has(O)}function Sc(O,$){var Q=this.__data__;if(Q instanceof en){var pe=Q.__data__;if(!Do||pe.length<r-1)return pe.push([O,$]),this;Q=this.__data__=new tn(pe)}return Q.set(O,$),this}Vn.prototype.clear=Cc,Vn.prototype.delete=yc,Vn.prototype.get=xc,Vn.prototype.has=Ec,Vn.prototype.set=Sc;function Lr(O,$){var Q=Ni(O)||jr(O)?Wt(O.length,String):[],pe=Q.length,Ye=!!pe;for(var Ue in O)($||Fe.call(O,Ue))&&!(Ye&&(Ue=="length"||Fc(Ue,pe)))&&Q.push(Ue);return Q}function $a(O,$,Q){var pe=O[$];(!(Fe.call(O,$)&&Ua(pe,Q))||Q===void 0&&!($ in O))&&(O[$]=Q)}function fo(O,$){for(var Q=O.length;Q--;)if(Ua(O[Q][0],$))return Q;return-1}function Hn(O,$){return O&&Bs($,sr($),O)}function fi(O,$,Q,pe,Ye,Ue,ct){var bt;if(pe&&(bt=Ue?pe(O,Ye,Ue,ct):pe(O)),bt!==void 0)return bt;if(!Ko(O))return O;var sn=Ni(O);if(sn){if(bt=Rc(O),!$)return Nc(O,bt)}else{var Mt=qn(O),kn=Mt==A||Mt==x;if(Ls(O))return Rr(O,$);if(Mt==T||Mt==p||kn&&!Ue){if(ee(O))return Ue?O:{};if(bt=to(kn?{}:O),!$)return Lc(O,Hn(bt,O))}else{if(!Ee[Mt])return Ue?O:{};bt=zr(O,Mt,fi,$)}}ct||(ct=new Vn);var Gn=ct.get(O);if(Gn)return Gn;if(ct.set(O,bt),!sn)var un=Q?Bi(O):sr(O);return Ot(un||O,function(Mn,an){un&&(an=Mn,Mn=O[an]),$a(bt,an,fi(Mn,$,Q,pe,an,O,ct))}),bt}function Tc(O){return Ko(O)?Tn(O):{}}function Dc(O,$,Q){var pe=$(O);return Ni(O)?pe:nt(pe,Q(O))}function Ic(O){return Le.call(O)}function Mc(O){if(!Ko(O)||Pi(O))return!1;var $=Vr(O)||ee(O)?He:ie;return $.test(In(O))}function Oc(O){if(!Ha(O))return It(O);var $=[];for(var Q in Object(O))Fe.call(O,Q)&&Q!="constructor"&&$.push(Q);return $}function Rr(O,$){if($)return O.slice();var Q=new O.constructor(O.length);return O.copy(Q),Q}function Ms(O){var $=new O.constructor(O.byteLength);return new Dt($).set(new Dt(O)),$}function mo(O,$){var Q=$?Ms(O.buffer):O.buffer;return new O.constructor(Q,O.byteOffset,O.byteLength)}function Os(O,$,Q){var pe=$?Q(de(O),!0):de(O);return yt(pe,vt,new O.constructor)}function Va(O){var $=new O.constructor(O.source,me.exec(O));return $.lastIndex=O.lastIndex,$}function Bc(O,$,Q){var pe=$?Q(_e(O),!0):_e(O);return yt(pe,st,new O.constructor)}function Fr(O){return Oi?Object(Oi.call(O)):{}}function Pc(O,$){var Q=$?Ms(O.buffer):O.buffer;return new O.constructor(Q,O.byteOffset,O.length)}function Nc(O,$){var Q=-1,pe=O.length;for($||($=Array(pe));++Q<pe;)$[Q]=O[Q];return $}function Bs(O,$,Q,pe){Q||(Q={});for(var Ye=-1,Ue=$.length;++Ye<Ue;){var ct=$[Ye],bt=pe?pe(Q[ct],O[ct],ct,Q,O):void 0;$a(Q,ct,bt===void 0?O[ct]:bt)}return Q}function Lc(O,$){return Bs(O,Un(O),$)}function Bi(O){return Dc(O,sr,Un)}function Wo(O,$){var Q=O.__data__;return Ps($)?Q[typeof $=="string"?"string":"hash"]:Q.map}function Io(O,$){var Q=K(O,$);return Mc(Q)?Q:void 0}var Un=ho?be(ho,Object):Nt,qn=Ic;(Bt&&qn(new Bt(new ArrayBuffer(1)))!=G||Do&&qn(new Do)!=y||Xt&&qn(Xt.resolve())!=I||nr&&qn(new nr)!=N||or&&qn(new or)!=z)&&(qn=function(O){var $=Le.call(O),Q=$==T?O.constructor:void 0,pe=Q?In(Q):void 0;if(pe)switch(pe){case Es:return G;case Ii:return y;case Ss:return I;case Ts:return N;case An:return z}return $});function Rc(O){var $=O.length,Q=O.constructor($);return $&&typeof O[0]=="string"&&Fe.call(O,"index")&&(Q.index=O.index,Q.input=O.input),Q}function to(O){return typeof O.constructor=="function"&&!Ha(O)?Tc(ht(O)):{}}function zr(O,$,Q,pe){var Ye=O.constructor;switch($){case H:return Ms(O);case b:case m:return new Ye(+O);case G:return mo(O,pe);case P:case V:case U:case W:case Y:case J:case te:case re:case ae:return Pc(O,pe);case y:return Os(O,pe,Q);case S:case L:return new Ye(O);case F:return Va(O);case N:return Bc(O,pe,Q);case B:return Fr(O)}}function Fc(O,$){return $=$??u,!!$&&(typeof O=="number"||Ne.test(O))&&O>-1&&O%1==0&&O<$}function Ps(O){var $=typeof O;return $=="string"||$=="number"||$=="symbol"||$=="boolean"?O!=="__proto__":O===null}function Pi(O){return!!he&&he in O}function Ha(O){var $=O&&O.constructor,Q=typeof $=="function"&&$.prototype||Ae;return O===Q}function In(O){if(O!=null){try{return Te.call(O)}catch{}try{return O+""}catch{}}return""}function Ns(O){return fi(O,!0,!0)}function Ua(O,$){return O===$||O!==O&&$!==$}function jr(O){return qa(O)&&Fe.call(O,"callee")&&(!To.call(O,"callee")||Le.call(O)==p)}var Ni=Array.isArray;function $r(O){return O!=null&&Li(O.length)&&!Vr(O)}function qa(O){return rr(O)&&$r(O)}var Ls=Dn||zc;function Vr(O){var $=Ko(O)?Le.call(O):"";return $==A||$==x}function Li(O){return typeof O=="number"&&O>-1&&O%1==0&&O<=u}function Ko(O){var $=typeof O;return!!O&&($=="object"||$=="function")}function rr(O){return!!O&&typeof O=="object"}function sr(O){return $r(O)?Lr(O):Oc(O)}function Nt(){return[]}function zc(){return!1}i.exports=Ns})(Hp,Hp.exports);var gG=Hp.exports;const Ui=Ia(gG);var Up={exports:{}};Up.exports;(function(i,n){var r=200,l="__lodash_hash_undefined__",u=1,p=2,f=9007199254740991,b="[object Arguments]",m="[object Array]",v="[object AsyncFunction]",A="[object Boolean]",x="[object Date]",y="[object Error]",S="[object Function]",T="[object GeneratorFunction]",I="[object Map]",F="[object Number]",N="[object Null]",L="[object Object]",B="[object Promise]",z="[object Proxy]",H="[object RegExp]",G="[object Set]",P="[object String]",V="[object Symbol]",U="[object Undefined]",W="[object WeakMap]",Y="[object ArrayBuffer]",J="[object DataView]",te="[object Float32Array]",re="[object Float64Array]",ae="[object Int8Array]",oe="[object Int16Array]",me="[object Int32Array]",ie="[object Uint8Array]",Ne="[object Uint8ClampedArray]",Ee="[object Uint16Array]",Je="[object Uint32Array]",Xe=/[\\^$.*+?()[\]{}|]/g,ge=/^\[object .+?Constructor\]$/,je=/^(?:0|[1-9]\d*)$/,Re={};Re[te]=Re[re]=Re[ae]=Re[oe]=Re[me]=Re[ie]=Re[Ne]=Re[Ee]=Re[Je]=!0,Re[b]=Re[m]=Re[Y]=Re[A]=Re[J]=Re[x]=Re[y]=Re[S]=Re[I]=Re[F]=Re[L]=Re[H]=Re[G]=Re[P]=Re[W]=!1;var $e=typeof Sn=="object"&&Sn&&Sn.Object===Object&&Sn,vt=typeof self=="object"&&self&&self.Object===Object&&self,st=$e||vt||Function("return this")(),Ot=n&&!n.nodeType&&n,nt=Ot&&!0&&i&&!i.nodeType&&i,yt=nt&&nt.exports===Ot,Wt=yt&&$e.process,K=function(){try{return Wt&&Wt.binding&&Wt.binding("util")}catch{}}(),ee=K&&K.isTypedArray;function de(O,$){for(var Q=-1,pe=O==null?0:O.length,Ye=0,Ue=[];++Q<pe;){var ct=O[Q];$(ct,Q,O)&&(Ue[Ye++]=ct)}return Ue}function be(O,$){for(var Q=-1,pe=$.length,Ye=O.length;++Q<pe;)O[Ye+Q]=$[Q];return O}function _e(O,$){for(var Q=-1,pe=O==null?0:O.length;++Q<pe;)if($(O[Q],Q,O))return!0;return!1}function Se(O,$){for(var Q=-1,pe=Array(O);++Q<O;)pe[Q]=$(Q);return pe}function Oe(O){return function($){return O($)}}function Ae(O,$){return O.has($)}function we(O,$){return O==null?void 0:O[$]}function he(O){var $=-1,Q=Array(O.size);return O.forEach(function(pe,Ye){Q[++$]=[Ye,pe]}),Q}function Te(O,$){return function(Q){return O($(Q))}}function Fe(O){var $=-1,Q=Array(O.size);return O.forEach(function(pe){Q[++$]=pe}),Q}var Le=Array.prototype,He=Function.prototype,et=Object.prototype,at=st["__core-js_shared__"],Dt=He.toString,ht=et.hasOwnProperty,Tn=function(){var O=/[^.]+$/.exec(at&&at.keys&&at.keys.IE_PROTO||"");return O?"Symbol(src)_1."+O:""}(),To=et.toString,Pr=RegExp("^"+Dt.call(ht).replace(Xe,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),ho=yt?st.Buffer:void 0,Dn=st.Symbol,It=st.Uint8Array,Bt=et.propertyIsEnumerable,Do=Le.splice,Xt=Dn?Dn.toStringTag:void 0,nr=Object.getOwnPropertySymbols,or=ho?ho.isBuffer:void 0,ir=Te(Object.keys,Object),Es=Un(st,"DataView"),Ii=Un(st,"Map"),Ss=Un(st,"Promise"),Ts=Un(st,"Set"),An=Un(st,"WeakMap"),Mi=Un(Object,"create"),Oi=In(Es),po=In(Ii),fc=In(Ss),mc=In(Ts),gc=In(An),za=Dn?Dn.prototype:void 0,Ds=za?za.valueOf:void 0;function en(O){var $=-1,Q=O==null?0:O.length;for(this.clear();++$<Q;){var pe=O[$];this.set(pe[0],pe[1])}}function Nr(){this.__data__=Mi?Mi(null):{},this.size=0}function bc(O){var $=this.has(O)&&delete this.__data__[O];return this.size-=$?1:0,$}function kc(O){var $=this.__data__;if(Mi){var Q=$[O];return Q===l?void 0:Q}return ht.call($,O)?$[O]:void 0}function _c(O){var $=this.__data__;return Mi?$[O]!==void 0:ht.call($,O)}function wc(O,$){var Q=this.__data__;return this.size+=this.has(O)?0:1,Q[O]=Mi&&$===void 0?l:$,this}en.prototype.clear=Nr,en.prototype.delete=bc,en.prototype.get=kc,en.prototype.has=_c,en.prototype.set=wc;function tn(O){var $=-1,Q=O==null?0:O.length;for(this.clear();++$<Q;){var pe=O[$];this.set(pe[0],pe[1])}}function Is(){this.__data__=[],this.size=0}function ja(O){var $=this.__data__,Q=Rr($,O);if(Q<0)return!1;var pe=$.length-1;return Q==pe?$.pop():Do.call($,Q,1),--this.size,!0}function vc(O){var $=this.__data__,Q=Rr($,O);return Q<0?void 0:$[Q][1]}function Ac(O){return Rr(this.__data__,O)>-1}function pi(O,$){var Q=this.__data__,pe=Rr(Q,O);return pe<0?(++this.size,Q.push([O,$])):Q[pe][1]=$,this}tn.prototype.clear=Is,tn.prototype.delete=ja,tn.prototype.get=vc,tn.prototype.has=Ac,tn.prototype.set=pi;function Vn(O){var $=-1,Q=O==null?0:O.length;for(this.clear();++$<Q;){var pe=O[$];this.set(pe[0],pe[1])}}function Cc(){this.size=0,this.__data__={hash:new en,map:new(Ii||tn),string:new en}}function yc(O){var $=Io(this,O).delete(O);return this.size-=$?1:0,$}function xc(O){return Io(this,O).get(O)}function Ec(O){return Io(this,O).has(O)}function Sc(O,$){var Q=Io(this,O),pe=Q.size;return Q.set(O,$),this.size+=Q.size==pe?0:1,this}Vn.prototype.clear=Cc,Vn.prototype.delete=yc,Vn.prototype.get=xc,Vn.prototype.has=Ec,Vn.prototype.set=Sc;function Lr(O){var $=-1,Q=O==null?0:O.length;for(this.__data__=new Vn;++$<Q;)this.add(O[$])}function $a(O){return this.__data__.set(O,l),this}function fo(O){return this.__data__.has(O)}Lr.prototype.add=Lr.prototype.push=$a,Lr.prototype.has=fo;function Hn(O){var $=this.__data__=new tn(O);this.size=$.size}function fi(){this.__data__=new tn,this.size=0}function Tc(O){var $=this.__data__,Q=$.delete(O);return this.size=$.size,Q}function Dc(O){return this.__data__.get(O)}function Ic(O){return this.__data__.has(O)}function Mc(O,$){var Q=this.__data__;if(Q instanceof tn){var pe=Q.__data__;if(!Ii||pe.length<r-1)return pe.push([O,$]),this.size=++Q.size,this;Q=this.__data__=new Vn(pe)}return Q.set(O,$),this.size=Q.size,this}Hn.prototype.clear=fi,Hn.prototype.delete=Tc,Hn.prototype.get=Dc,Hn.prototype.has=Ic,Hn.prototype.set=Mc;function Oc(O,$){var Q=jr(O),pe=!Q&&Ua(O),Ye=!Q&&!pe&&$r(O),Ue=!Q&&!pe&&!Ye&&rr(O),ct=Q||pe||Ye||Ue,bt=ct?Se(O.length,String):[],sn=bt.length;for(var Mt in O)($||ht.call(O,Mt))&&!(ct&&(Mt=="length"||Ye&&(Mt=="offset"||Mt=="parent")||Ue&&(Mt=="buffer"||Mt=="byteLength"||Mt=="byteOffset")||zr(Mt,sn)))&&bt.push(Mt);return bt}function Rr(O,$){for(var Q=O.length;Q--;)if(Ns(O[Q][0],$))return Q;return-1}function Ms(O,$,Q){var pe=$(O);return jr(O)?pe:be(pe,Q(O))}function mo(O){return O==null?O===void 0?U:N:Xt&&Xt in Object(O)?qn(O):Ha(O)}function Os(O){return Ko(O)&&mo(O)==b}function Va(O,$,Q,pe,Ye){return O===$?!0:O==null||$==null||!Ko(O)&&!Ko($)?O!==O&&$!==$:Bc(O,$,Q,pe,Va,Ye)}function Bc(O,$,Q,pe,Ye,Ue){var ct=jr(O),bt=jr($),sn=ct?m:to(O),Mt=bt?m:to($);sn=sn==b?L:sn,Mt=Mt==b?L:Mt;var kn=sn==L,Gn=Mt==L,un=sn==Mt;if(un&&$r(O)){if(!$r($))return!1;ct=!0,kn=!1}if(un&&!kn)return Ue||(Ue=new Hn),ct||rr(O)?Bs(O,$,Q,pe,Ye,Ue):Lc(O,$,sn,Q,pe,Ye,Ue);if(!(Q&u)){var Mn=kn&&ht.call(O,"__wrapped__"),an=Gn&&ht.call($,"__wrapped__");if(Mn||an){var go=Mn?O.value():O,mi=an?$.value():$;return Ue||(Ue=new Hn),Ye(go,mi,Q,pe,Ue)}}return un?(Ue||(Ue=new Hn),Bi(O,$,Q,pe,Ye,Ue)):!1}function Fr(O){if(!Li(O)||Ps(O))return!1;var $=Ls(O)?Pr:ge;return $.test(In(O))}function Pc(O){return Ko(O)&&Vr(O.length)&&!!Re[mo(O)]}function Nc(O){if(!Pi(O))return ir(O);var $=[];for(var Q in Object(O))ht.call(O,Q)&&Q!="constructor"&&$.push(Q);return $}function Bs(O,$,Q,pe,Ye,Ue){var ct=Q&u,bt=O.length,sn=$.length;if(bt!=sn&&!(ct&&sn>bt))return!1;var Mt=Ue.get(O);if(Mt&&Ue.get($))return Mt==$;var kn=-1,Gn=!0,un=Q&p?new Lr:void 0;for(Ue.set(O,$),Ue.set($,O);++kn<bt;){var Mn=O[kn],an=$[kn];if(pe)var go=ct?pe(an,Mn,kn,$,O,Ue):pe(Mn,an,kn,O,$,Ue);if(go!==void 0){if(go)continue;Gn=!1;break}if(un){if(!_e($,function(mi,ar){if(!Ae(un,ar)&&(Mn===mi||Ye(Mn,mi,Q,pe,Ue)))return un.push(ar)})){Gn=!1;break}}else if(!(Mn===an||Ye(Mn,an,Q,pe,Ue))){Gn=!1;break}}return Ue.delete(O),Ue.delete($),Gn}function Lc(O,$,Q,pe,Ye,Ue,ct){switch(Q){case J:if(O.byteLength!=$.byteLength||O.byteOffset!=$.byteOffset)return!1;O=O.buffer,$=$.buffer;case Y:return!(O.byteLength!=$.byteLength||!Ue(new It(O),new It($)));case A:case x:case F:return Ns(+O,+$);case y:return O.name==$.name&&O.message==$.message;case H:case P:return O==$+"";case I:var bt=he;case G:var sn=pe&u;if(bt||(bt=Fe),O.size!=$.size&&!sn)return!1;var Mt=ct.get(O);if(Mt)return Mt==$;pe|=p,ct.set(O,$);var kn=Bs(bt(O),bt($),pe,Ye,Ue,ct);return ct.delete(O),kn;case V:if(Ds)return Ds.call(O)==Ds.call($)}return!1}function Bi(O,$,Q,pe,Ye,Ue){var ct=Q&u,bt=Wo(O),sn=bt.length,Mt=Wo($),kn=Mt.length;if(sn!=kn&&!ct)return!1;for(var Gn=sn;Gn--;){var un=bt[Gn];if(!(ct?un in $:ht.call($,un)))return!1}var Mn=Ue.get(O);if(Mn&&Ue.get($))return Mn==$;var an=!0;Ue.set(O,$),Ue.set($,O);for(var go=ct;++Gn<sn;){un=bt[Gn];var mi=O[un],ar=$[un];if(pe)var xu=ct?pe(ar,mi,un,$,O,Ue):pe(mi,ar,un,O,$,Ue);if(!(xu===void 0?mi===ar||Ye(mi,ar,Q,pe,Ue):xu)){an=!1;break}go||(go=un=="constructor")}if(an&&!go){var Ga=O.constructor,gi=$.constructor;Ga!=gi&&"constructor"in O&&"constructor"in $&&!(typeof Ga=="function"&&Ga instanceof Ga&&typeof gi=="function"&&gi instanceof gi)&&(an=!1)}return Ue.delete(O),Ue.delete($),an}function Wo(O){return Ms(O,sr,Rc)}function Io(O,$){var Q=O.__data__;return Fc($)?Q[typeof $=="string"?"string":"hash"]:Q.map}function Un(O,$){var Q=we(O,$);return Fr(Q)?Q:void 0}function qn(O){var $=ht.call(O,Xt),Q=O[Xt];try{O[Xt]=void 0;var pe=!0}catch{}var Ye=To.call(O);return pe&&($?O[Xt]=Q:delete O[Xt]),Ye}var Rc=nr?function(O){return O==null?[]:(O=Object(O),de(nr(O),function($){return Bt.call(O,$)}))}:Nt,to=mo;(Es&&to(new Es(new ArrayBuffer(1)))!=J||Ii&&to(new Ii)!=I||Ss&&to(Ss.resolve())!=B||Ts&&to(new Ts)!=G||An&&to(new An)!=W)&&(to=function(O){var $=mo(O),Q=$==L?O.constructor:void 0,pe=Q?In(Q):"";if(pe)switch(pe){case Oi:return J;case po:return I;case fc:return B;case mc:return G;case gc:return W}return $});function zr(O,$){return $=$??f,!!$&&(typeof O=="number"||je.test(O))&&O>-1&&O%1==0&&O<$}function Fc(O){var $=typeof O;return $=="string"||$=="number"||$=="symbol"||$=="boolean"?O!=="__proto__":O===null}function Ps(O){return!!Tn&&Tn in O}function Pi(O){var $=O&&O.constructor,Q=typeof $=="function"&&$.prototype||et;return O===Q}function Ha(O){return To.call(O)}function In(O){if(O!=null){try{return Dt.call(O)}catch{}try{return O+""}catch{}}return""}function Ns(O,$){return O===$||O!==O&&$!==$}var Ua=Os(function(){return arguments}())?Os:function(O){return Ko(O)&&ht.call(O,"callee")&&!Bt.call(O,"callee")},jr=Array.isArray;function Ni(O){return O!=null&&Vr(O.length)&&!Ls(O)}var $r=or||zc;function qa(O,$){return Va(O,$)}function Ls(O){if(!Li(O))return!1;var $=mo(O);return $==S||$==T||$==v||$==z}function Vr(O){return typeof O=="number"&&O>-1&&O%1==0&&O<=f}function Li(O){var $=typeof O;return O!=null&&($=="object"||$=="function")}function Ko(O){return O!=null&&typeof O=="object"}var rr=ee?Oe(ee):Pc;function sr(O){return Ni(O)?Oc(O):Nc(O)}function Nt(){return[]}function zc(){return!1}i.exports=qa})(Up,Up.exports);var bG=Up.exports;const kG=Ia(bG);var _G={created(){if(!this.$options.remember)return;Array.isArray(this.$options.remember)&&(this.$options.remember={data:this.$options.remember}),typeof this.$options.remember=="string"&&(this.$options.remember={data:[this.$options.remember]}),typeof this.$options.remember.data=="string"&&(this.$options.remember={data:[this.$options.remember.data]});let i=this.$options.remember.key instanceof Function?this.$options.remember.key.call(this):this.$options.remember.key,n=Ze.restore(i),r=this.$options.remember.data.filter(u=>!(this[u]!==null&&typeof this[u]=="object"&&this[u].__rememberable===!1)),l=u=>this[u]!==null&&typeof this[u]=="object"&&typeof this[u].__remember=="function"&&typeof this[u].__restore=="function";r.forEach(u=>{this[u]!==void 0&&n!==void 0&&n[u]!==void 0&&(l(u)?this[u].__restore(n[u]):this[u]=n[u]),this.$watch(u,()=>{Ze.remember(r.reduce((p,f)=>({...p,[f]:Ui(l(f)?this[f].__remember():this[f])}),{}),i)},{immediate:!0,deep:!0})})}},wG=_G;function vG(i,n){let r=typeof i=="string"?i:null,l=typeof i=="string"?n:i,u=r?Ze.restore(r):null,p=Ui(typeof l=="object"?l:l()),f=null,b=null,m=A=>A,v=rn({...u?u.data:Ui(p),isDirty:!1,errors:u?u.errors:{},hasErrors:!1,processing:!1,progress:null,wasSuccessful:!1,recentlySuccessful:!1,data(){return Object.keys(p).reduce((A,x)=>(A[x]=this[x],A),{})},transform(A){return m=A,this},defaults(A,x){if(typeof l=="function")throw new Error("You cannot call `defaults()` when using a function to define your form data.");return typeof A>"u"?p=this.data():p=Object.assign({},Ui(p),typeof A=="string"?{[A]:x}:A),this},reset(...A){let x=Ui(typeof l=="object"?p:l()),y=Ui(x);return A.length===0?(p=y,Object.assign(this,x)):Object.keys(x).filter(S=>A.includes(S)).forEach(S=>{p[S]=y[S],this[S]=x[S]}),this},setError(A,x){return Object.assign(this.errors,typeof A=="string"?{[A]:x}:A),this.hasErrors=Object.keys(this.errors).length>0,this},clearErrors(...A){return this.errors=Object.keys(this.errors).reduce((x,y)=>({...x,...A.length>0&&!A.includes(y)?{[y]:this.errors[y]}:{}}),{}),this.hasErrors=Object.keys(this.errors).length>0,this},submit(A,x,y={}){let S=m(this.data()),T={...y,onCancelToken:I=>{if(f=I,y.onCancelToken)return y.onCancelToken(I)},onBefore:I=>{if(this.wasSuccessful=!1,this.recentlySuccessful=!1,clearTimeout(b),y.onBefore)return y.onBefore(I)},onStart:I=>{if(this.processing=!0,y.onStart)return y.onStart(I)},onProgress:I=>{if(this.progress=I,y.onProgress)return y.onProgress(I)},onSuccess:async I=>{this.processing=!1,this.progress=null,this.clearErrors(),this.wasSuccessful=!0,this.recentlySuccessful=!0,b=setTimeout(()=>this.recentlySuccessful=!1,2e3);let F=y.onSuccess?await y.onSuccess(I):null;return p=Ui(this.data()),this.isDirty=!1,F},onError:I=>{if(this.processing=!1,this.progress=null,this.clearErrors().setError(I),y.onError)return y.onError(I)},onCancel:()=>{if(this.processing=!1,this.progress=null,y.onCancel)return y.onCancel()},onFinish:I=>{if(this.processing=!1,this.progress=null,f=null,y.onFinish)return y.onFinish(I)}};A==="delete"?Ze.delete(x,{...T,data:S}):Ze[A](x,S,T)},get(A,x){this.submit("get",A,x)},post(A,x){this.submit("post",A,x)},put(A,x){this.submit("put",A,x)},patch(A,x){this.submit("patch",A,x)},delete(A,x){this.submit("delete",A,x)},cancel(){f&&f.cancel()},__rememberable:r===null,__remember(){return{data:this.data(),errors:this.errors}},__restore(A){Object.assign(this,A.data),this.setError(A.errors)}});return us(v,A=>{v.isDirty=!kG(v.data(),p),r&&Ze.remember(Ui(A.__remember()),r)},{immediate:!0,deep:!0}),v}var Ro=_t(null),Bd=_t(null),kb=y5(null),Xh=_t(null),Tk=null,AG=lc({name:"Inertia",props:{initialPage:{type:Object,required:!0},initialComponent:{type:Object,required:!1},resolveComponent:{type:Function,required:!1},titleCallback:{type:Function,required:!1,default:i=>i},onHeadUpdate:{type:Function,required:!1,default:()=>()=>{}}},setup({initialPage:i,initialComponent:n,resolveComponent:r,titleCallback:l,onHeadUpdate:u}){Ro.value=n?Zd(n):null,Bd.value=i,Xh.value=null;let p=typeof window>"u";return Tk=VV(p,l,u),p||(Ze.init({initialPage:i,resolveComponent:r,swapComponent:async f=>{Ro.value=Zd(f.component),Bd.value=f.page,Xh.value=f.preserveState?Xh.value:Date.now()}}),Ze.on("navigate",()=>Tk.forceUpdate())),()=>{if(Ro.value){Ro.value.inheritAttrs=!!Ro.value.inheritAttrs;let f=wn(Ro.value,{...Bd.value.props,key:Xh.value});return kb.value&&(Ro.value.layout=kb.value,kb.value=null),Ro.value.layout?typeof Ro.value.layout=="function"?Ro.value.layout(wn,f):(Array.isArray(Ro.value.layout)?Ro.value.layout:[Ro.value.layout]).concat(f).reverse().reduce((b,m)=>(m.inheritAttrs=!!m.inheritAttrs,wn(m,{...Bd.value.props},()=>b))):f}}}}),CG=AG,yG={install(i){Ze.form=vG,Object.defineProperty(i.config.globalProperties,"$inertia",{get:()=>Ze}),Object.defineProperty(i.config.globalProperties,"$page",{get:()=>Bd.value}),Object.defineProperty(i.config.globalProperties,"$headManager",{get:()=>Tk}),i.mixin(wG)}};async function xG({id:i="app",resolve:n,setup:r,title:l,progress:u={},page:p,render:f}){let b=typeof window>"u",m=b?null:document.getElementById(i),v=p||JSON.parse(m.dataset.page),A=S=>Promise.resolve(n(S)).then(T=>T.default||T),x=[],y=await A(v.component).then(S=>r({el:m,App:CG,props:{initialPage:v,initialComponent:S,resolveComponent:A,titleCallback:l,onHeadUpdate:b?T=>x=T:null},plugin:yG}));if(!b&&u&&KV(u),b){let S=await f(qI({render:()=>wn("div",{id:i,"data-page":JSON.stringify(v),innerHTML:y?f(y):""})}));return{head:x,body:S}}}var EG=lc({props:{title:{type:String,required:!1}},data(){return{provider:this.$headManager.createProvider()}},beforeUnmount(){this.provider.disconnect()},methods:{isUnaryTag(i){return["area","base","br","col","embed","hr","img","input","keygen","link","meta","param","source","track","wbr"].indexOf(i.type)>-1},renderTagStart(i){i.props=i.props||{},i.props.inertia=i.props["head-key"]!==void 0?i.props["head-key"]:"";let n=Object.keys(i.props).reduce((r,l)=>{let u=i.props[l];return["key","head-key"].includes(l)?r:u===""?r+` ${l}`:r+` ${l}="${u}"`},"");return`<${i.type}${n}>`},renderTagChildren(i){return typeof i.children=="string"?i.children:i.children.reduce((n,r)=>n+this.renderTag(r),"")},isFunctionNode(i){return typeof i.type=="function"},isComponentNode(i){return typeof i.type=="object"},isCommentNode(i){return/(comment|cmt)/i.test(i.type.toString())},isFragmentNode(i){return/(fragment|fgt|symbol\(\))/i.test(i.type.toString())},isTextNode(i){return/(text|txt)/i.test(i.type.toString())},renderTag(i){if(this.isTextNode(i))return i.children;if(this.isFragmentNode(i)||this.isCommentNode(i))return"";let n=this.renderTagStart(i);return i.children&&(n+=this.renderTagChildren(i)),this.isUnaryTag(i)||(n+=`</${i.type}>`),n},addTitleElement(i){return this.title&&!i.find(n=>n.startsWith("<title"))&&i.push(`<title inertia>${this.title}</title>`),i},renderNodes(i){return this.addTitleElement(i.flatMap(n=>this.resolveNode(n)).map(n=>this.renderTag(n)).filter(n=>n))},resolveNode(i){return this.isFunctionNode(i)?this.resolveNode(i.type()):this.isComponentNode(i)?(console.warn("Using components in the <Head> component is not supported."),[]):this.isTextNode(i)&&i.children?i:this.isFragmentNode(i)&&i.children?i.children.flatMap(n=>this.resolveNode(n)):this.isCommentNode(i)?[]:i}},render(){this.provider.update(this.renderNodes(this.$slots.default?this.$slots.default():[]))}}),Jt=EG,SG=lc({name:"Link",props:{as:{type:String,default:"a"},data:{type:Object,default:()=>({})},href:{type:String,required:!0},method:{type:String,default:"get"},replace:{type:Boolean,default:!1},preserveScroll:{type:Boolean,default:!1},preserveState:{type:Boolean,default:null},only:{type:Array,default:()=>[]},headers:{type:Object,default:()=>({})},queryStringArrayFormat:{type:String,default:"brackets"}},setup(i,{slots:n,attrs:r}){return()=>{let l=i.as.toLowerCase(),u=i.method.toLowerCase(),[p,f]=e5(u,i.href||"",i.data,i.queryStringArrayFormat);return l==="a"&&u!=="get"&&console.warn(`Creating POST/PUT/PATCH/DELETE <a> links is discouraged as it causes "Open Link in New Tab/Window" accessibility issues.

Please specify a more appropriate element using the "as" attribute. For example:

<Link href="${p}" method="${u}" as="button">...</Link>`),wn(i.as,{...r,...l==="a"?{href:p}:{},onClick:b=>{YV(b)&&(b.preventDefault(),Ze.visit(p,{data:f,method:u,replace:i.replace,preserveScroll:i.preserveScroll,preserveState:i.preserveState??u!=="get",only:i.only,headers:i.headers,onCancelToken:r.onCancelToken||(()=>({})),onBefore:r.onBefore||(()=>({})),onStart:r.onStart||(()=>({})),onProgress:r.onProgress||(()=>({})),onFinish:r.onFinish||(()=>({})),onCancel:r.onCancel||(()=>({})),onSuccess:r.onSuccess||(()=>({})),onError:r.onError||(()=>({}))}))}},n)}}}),Pt=SG;const qe=(i,n)=>{const r=i.__vccOpts||i;for(const[l,u]of n)r[l]=u;return r},TG={};function DG(i,n){return X(),ne("div",null,[Aa(i.$slots,"default")])}const IG=qe(TG,[["render",DG]]),MG={components:{Head:Jt,Link:Pt},props:{errors:Object},layout:IG,setup(){const i=rn({email:"",password:""});async function n(){let r=i.email,l=i.password;await Ze.post("/login",{email:r,password:l}),i.password=""}return{user:i,login:n}}},OG={class:"d-flex flex-column"},BG={class:"page page-center",style:{"margin-top":"100px"}},PG={class:"container container-tight py-4"},NG=_("div",{class:"text-center mb-4"},[_("h3",null,"Starter Template")],-1),LG={class:"card card-md"},RG={class:"card-body"},FG=_("h2",{class:"h2 text-center mb-4"}," Login to your account ",-1),zG={key:0,class:"alert alert-danger",role:"alert"},jG={class:"mb-3"},$G=_("label",{class:"form-label"},"Email address",-1),VG={key:0,class:"form-text text-danger"},HG={class:"mb-2"},UG=_("label",{class:"form-label"},"Password",-1),qG={class:"input-group input-group-flat"},GG=bn('<span class="input-group-text"><a href="#" class="link-secondary" title="Show password" data-bs-toggle="tooltip"><svg xmlns="http://www.w3.org/2000/svg" class="icon" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M10 12a2 2 0 1 0 4 0a2 2 0 0 0 -4 0"></path><path d="M21 12c-2.4 4 -5.4 6 -9 6c-3.6 0 -6.6 -2 -9 -6c2.4 -4 5.4 -6 9 -6c3.6 0 6.6 2 9 6"></path></svg></a></span>',1),WG={key:0,class:"form-text text-danger"},KG=_("div",{class:"form-footer"},[_("button",{type:"submit",class:"btn btn-primary w-100"}," Sign in ")],-1);function YG(i,n,r,l,u,p){return X(),ne("div",null,[_("div",OG,[_("div",BG,[_("div",PG,[NG,_("div",LG,[_("div",RG,[FG,i.$page.props.flash.error?(X(),ne("div",zG,ce(i.$page.props.flash.error),1)):Ie("",!0),_("form",{action:"./",method:"get",autocomplete:"off",novalidate:"",onSubmit:n[2]||(n[2]=co((...f)=>l.login&&l.login(...f),["prevent"]))},[_("div",jG,[$G,ft(_("input",{type:"email",class:"form-control",placeholder:"your@email.com",autocomplete:"off","onUpdate:modelValue":n[0]||(n[0]=f=>l.user.email=f)},null,512),[[ut,l.user.email]]),r.errors.email?(X(),ne("small",VG,ce(r.errors.email),1)):Ie("",!0)]),_("div",HG,[UG,_("div",qG,[ft(_("input",{type:"password",class:"form-control",placeholder:"Your password",autocomplete:"off","onUpdate:modelValue":n[1]||(n[1]=f=>l.user.password=f)},null,512),[[ut,l.user.password]]),GG]),r.errors.password?(X(),ne("small",WG,ce(r.errors.password),1)):Ie("",!0)]),KG],32)])])])])])])}const QG=qe(MG,[["render",YG]]),ZG=Object.freeze(Object.defineProperty({__proto__:null,default:QG},Symbol.toStringTag,{value:"Module"}));var qp={exports:{}};qp.exports;(function(i,n){(function(r){const l=r.en=r.en||{};l.dictionary=Object.assign(l.dictionary||{},{"(may require <kbd>Fn</kbd>)":"(may require <kbd>Fn</kbd>)","%0 of %1":"%0 of %1",Accept:"Accept",Accessibility:"Accessibility","Accessibility help":"Accessibility help","Align cell text to the bottom":"Align cell text to the bottom","Align cell text to the center":"Align cell text to the center","Align cell text to the left":"Align cell text to the left","Align cell text to the middle":"Align cell text to the middle","Align cell text to the right":"Align cell text to the right","Align cell text to the top":"Align cell text to the top","Align table to the left":"Align table to the left","Align table to the right":"Align table to the right",Alignment:"Alignment",Aquamarine:"Aquamarine",Background:"Background","Below, you can find a list of keyboard shortcuts that can be used in the editor.":"Below, you can find a list of keyboard shortcuts that can be used in the editor.",Black:"Black","Block quote":"Block quote",Blue:"Blue",Bold:"Bold","Bold text":"Bold text",Border:"Border","Break text":"Break text","Bulleted List":"Bulleted List","Bulleted list styles toolbar":"Bulleted list styles toolbar",Cancel:"Cancel","Cannot access default workspace.":"Cannot access default workspace.","Cannot determine a category for the uploaded file.":"Cannot determine a category for the uploaded file.","Cannot upload file:":"Cannot upload file:","Caption for image: %0":"Caption for image: %0","Caption for the image":"Caption for the image","Cell properties":"Cell properties","Center table":"Center table","Centered image":"Centered image","Change image text alternative":"Change image text alternative","Choose heading":"Choose heading",Circle:"Circle",Clear:"Clear","Click to edit block":"Click to edit block",Close:"Close","Close contextual balloons, dropdowns, and dialogs":"Close contextual balloons, dropdowns, and dialogs",Code:"Code",Color:"Color","Color picker":"Color picker",Column:"Column","Content editing keystrokes":"Content editing keystrokes","Copy selected content":"Copy selected content","Could not insert image at the current position.":"Could not insert image at the current position.","Could not obtain resized image URL.":"Could not obtain resized image URL.","Create link":"Create link",Custom:"Custom","Custom image size":"Custom image size",Dashed:"Dashed",Decimal:"Decimal","Decimal with leading zero":"Decimal with leading zero","Decrease indent":"Decrease indent","Decrease list item indent":"Decrease list item indent","Delete column":"Delete column","Delete row":"Delete row","Dim grey":"Dim grey",Dimensions:"Dimensions",Disc:"Disc",Dotted:"Dotted",Double:"Double",Downloadable:"Downloadable","Drag to move":"Drag to move","Dropdown toolbar":"Dropdown toolbar","Edit block":"Edit block","Edit image":"Edit image","Edit link":"Edit link","Editor block content toolbar":"Editor block content toolbar","Editor contextual toolbar":"Editor contextual toolbar","Editor dialog":"Editor dialog","Editor editing area: %0":"Editor editing area: %0","Editor menu bar":"Editor menu bar","Editor toolbar":"Editor toolbar","Enter image caption":"Enter image caption","Enter table caption":"Enter table caption","Entering a to-do list":"Entering a to-do list","Error during image upload":"Error during image upload","Execute the currently focused button. Executing buttons that interact with the editor content moves the focus back to the content.":"Execute the currently focused button. Executing buttons that interact with the editor content moves the focus back to the content.","Failed to determine category of edited image.":"Failed to determine category of edited image.","Full size image":"Full size image",Green:"Green",Grey:"Grey",Groove:"Groove","Header column":"Header column","Header row":"Header row",Heading:"Heading","Heading 1":"Heading 1","Heading 2":"Heading 2","Heading 3":"Heading 3","Heading 4":"Heading 4","Heading 5":"Heading 5","Heading 6":"Heading 6",Height:"Height","Help Contents. To close this dialog press ESC.":"Help Contents. To close this dialog press ESC.",HEX:"HEX","Horizontal text alignment toolbar":"Horizontal text alignment toolbar","Image from computer":"Image from computer","Image resize list":"Image resize list","Image toolbar":"Image toolbar","Image upload complete":"Image upload complete","image widget":"image widget","In line":"In line","Increase indent":"Increase indent","Increase list item indent":"Increase list item indent",Insert:"Insert","Insert a hard break (a new paragraph)":"Insert a hard break (a new paragraph)","Insert a new paragraph directly after a widget":"Insert a new paragraph directly after a widget","Insert a new paragraph directly before a widget":"Insert a new paragraph directly before a widget","Insert a new table row (when in the last cell of a table)":"Insert a new table row (when in the last cell of a table)","Insert a soft break (a <code>&lt;br&gt;</code> element)":"Insert a soft break (a <code>&lt;br&gt;</code> element)","Insert column left":"Insert column left","Insert column right":"Insert column right","Insert image":"Insert image","Insert image via URL":"Insert image via URL","Insert image with file manager":"Insert image with file manager","Insert media":"Insert media","Insert paragraph after block":"Insert paragraph after block","Insert paragraph before block":"Insert paragraph before block","Insert row above":"Insert row above","Insert row below":"Insert row below","Insert table":"Insert table","Insert with file manager":"Insert with file manager","Inserting image failed":"Inserting image failed",Inset:"Inset","Invalid start index value.":"Invalid start index value.",Italic:"Italic","Italic text":"Italic text","Justify cell text":"Justify cell text","Keystrokes that can be used in a list":"Keystrokes that can be used in a list","Keystrokes that can be used in a table cell":"Keystrokes that can be used in a table cell","Keystrokes that can be used when a widget is selected (for example: image, table, etc.)":"Keystrokes that can be used when a widget is selected (for example: image, table, etc.)","Leaving a to-do list":"Leaving a to-do list","Left aligned image":"Left aligned image","Light blue":"Light blue","Light green":"Light green","Light grey":"Light grey",Link:"Link","Link image":"Link image","Link URL":"Link URL","Link URL must not be empty.":"Link URL must not be empty.","List properties":"List properties","Lower-latin":"Lower-latin","Lower–roman":"Lower–roman","Media toolbar":"Media toolbar","Media URL":"Media URL","media widget":"media widget",MENU_BAR_MENU_EDIT:"Edit",MENU_BAR_MENU_FILE:"File",MENU_BAR_MENU_FONT:"Font",MENU_BAR_MENU_FORMAT:"Format",MENU_BAR_MENU_HELP:"Help",MENU_BAR_MENU_INSERT:"Insert",MENU_BAR_MENU_TEXT:"Text",MENU_BAR_MENU_TOOLS:"Tools",MENU_BAR_MENU_VIEW:"View","Merge cell down":"Merge cell down","Merge cell left":"Merge cell left","Merge cell right":"Merge cell right","Merge cell up":"Merge cell up","Merge cells":"Merge cells","Move focus between form fields (inputs, buttons, etc.)":"Move focus between form fields (inputs, buttons, etc.)","Move focus in and out of an active dialog window":"Move focus in and out of an active dialog window","Move focus to the menu bar, navigate between menu bars":"Move focus to the menu bar, navigate between menu bars","Move focus to the toolbar, navigate between toolbars":"Move focus to the toolbar, navigate between toolbars","Move out of a link":"Move out of a link","Move out of an inline code style":"Move out of an inline code style","Move the caret to allow typing directly after a widget":"Move the caret to allow typing directly after a widget","Move the caret to allow typing directly before a widget":"Move the caret to allow typing directly before a widget","Move the selection to the next cell":"Move the selection to the next cell","Move the selection to the previous cell":"Move the selection to the previous cell","Navigate through the table":"Navigate through the table","Navigate through the toolbar or menu bar":"Navigate through the toolbar or menu bar",Next:"Next","No results found":"No results found","No searchable items":"No searchable items",None:"None","Numbered List":"Numbered List","Numbered list styles toolbar":"Numbered list styles toolbar","Open file manager":"Open file manager","Open in a new tab":"Open in a new tab","Open link in new tab":"Open link in new tab","Open media in new tab":"Open media in new tab","Open the accessibility help dialog":"Open the accessibility help dialog",Orange:"Orange",Original:"Original",Outset:"Outset",Padding:"Padding",Paragraph:"Paragraph","Paste content":"Paste content","Paste content as plain text":"Paste content as plain text","Paste the media URL in the input.":"Paste the media URL in the input.",'Please enter a valid color (e.g. "ff0000").':'Please enter a valid color (e.g. "ff0000").',"Press %0 for help.":"Press %0 for help.","Press Enter to type after or press Shift + Enter to type before the widget":"Press Enter to type after or press Shift + Enter to type before the widget",Previous:"Previous","Processing the edited image.":"Processing the edited image.",Purple:"Purple",Red:"Red",Redo:"Redo","Remove color":"Remove color","Replace from computer":"Replace from computer","Replace image":"Replace image","Replace image from computer":"Replace image from computer","Replace image with file manager":"Replace image with file manager","Replace with file manager":"Replace with file manager","Resize image":"Resize image","Resize image (in %0)":"Resize image (in %0)","Resize image to %0":"Resize image to %0","Resize image to the original size":"Resize image to the original size","Restore default":"Restore default","Reversed order":"Reversed order","Revert autoformatting action":"Revert autoformatting action","Rich Text Editor":"Rich Text Editor",Ridge:"Ridge","Right aligned image":"Right aligned image",Row:"Row",Save:"Save","Select all":"Select all","Select column":"Select column","Select row":"Select row","Selecting resized image failed":"Selecting resized image failed","Server failed to process the image.":"Server failed to process the image.","Show more items":"Show more items","Side image":"Side image",Solid:"Solid","Split cell horizontally":"Split cell horizontally","Split cell vertically":"Split cell vertically",Square:"Square","Start at":"Start at","Start index must be greater than 0.":"Start index must be greater than 0.",Strikethrough:"Strikethrough","Strikethrough text":"Strikethrough text",Style:"Style",Subscript:"Subscript",Superscript:"Superscript",Table:"Table","Table alignment toolbar":"Table alignment toolbar","Table cell text alignment":"Table cell text alignment","Table properties":"Table properties","Table toolbar":"Table toolbar","Text alternative":"Text alternative",'The color is invalid. Try "#FF0000" or "rgb(255,0,0)" or "red".':'The color is invalid. Try "#FF0000" or "rgb(255,0,0)" or "red".',"The URL must not be empty.":"The URL must not be empty.",'The value is invalid. Try "10px" or "2em" or simply "2".':'The value is invalid. Try "10px" or "2em" or simply "2".',"The value must not be empty.":"The value must not be empty.","The value should be a plain number.":"The value should be a plain number.","These keyboard shortcuts allow for quick access to content editing features.":"These keyboard shortcuts allow for quick access to content editing features.","This link has no URL":"This link has no URL","This media URL is not supported.":"This media URL is not supported.","Tip: Paste the URL into the content to embed faster.":"Tip: Paste the URL into the content to embed faster.","To-do List":"To-do List","Toggle caption off":"Toggle caption off","Toggle caption on":"Toggle caption on","Toggle the circle list style":"Toggle the circle list style","Toggle the decimal list style":"Toggle the decimal list style","Toggle the decimal with leading zero list style":"Toggle the decimal with leading zero list style","Toggle the disc list style":"Toggle the disc list style","Toggle the lower–latin list style":"Toggle the lower–latin list style","Toggle the lower–roman list style":"Toggle the lower–roman list style","Toggle the square list style":"Toggle the square list style","Toggle the upper–latin list style":"Toggle the upper–latin list style","Toggle the upper–roman list style":"Toggle the upper–roman list style",Turquoise:"Turquoise","Type or paste your content here.":"Type or paste your content here.","Type your title":"Type your title",Underline:"Underline","Underline text":"Underline text",Undo:"Undo",Unlink:"Unlink",Update:"Update","Update image URL":"Update image URL","Upload failed":"Upload failed","Upload from computer":"Upload from computer","Upload image from computer":"Upload image from computer","Upload in progress":"Upload in progress","Uploading image":"Uploading image","Upper-latin":"Upper-latin","Upper-roman":"Upper-roman","Use the following keystrokes for more efficient navigation in the CKEditor 5 user interface.":"Use the following keystrokes for more efficient navigation in the CKEditor 5 user interface.","User interface and content navigation keystrokes":"User interface and content navigation keystrokes","Vertical text alignment toolbar":"Vertical text alignment toolbar",White:"White","Widget toolbar":"Widget toolbar",Width:"Width","Wrap text":"Wrap text",Yellow:"Yellow"})})(window.CKEDITOR_TRANSLATIONS||(window.CKEDITOR_TRANSLATIONS={})),function(r,l){i.exports=l()}(self,()=>(()=>{var r={9246:(f,b,m)=>{const v=m(6931),A={};for(const y of Object.keys(v))A[v[y]]=y;const x={rgb:{channels:3,labels:"rgb"},hsl:{channels:3,labels:"hsl"},hsv:{channels:3,labels:"hsv"},hwb:{channels:3,labels:"hwb"},cmyk:{channels:4,labels:"cmyk"},xyz:{channels:3,labels:"xyz"},lab:{channels:3,labels:"lab"},lch:{channels:3,labels:"lch"},hex:{channels:1,labels:["hex"]},keyword:{channels:1,labels:["keyword"]},ansi16:{channels:1,labels:["ansi16"]},ansi256:{channels:1,labels:["ansi256"]},hcg:{channels:3,labels:["h","c","g"]},apple:{channels:3,labels:["r16","g16","b16"]},gray:{channels:1,labels:["gray"]}};f.exports=x;for(const y of Object.keys(x)){if(!("channels"in x[y]))throw new Error("missing channels property: "+y);if(!("labels"in x[y]))throw new Error("missing channel labels property: "+y);if(x[y].labels.length!==x[y].channels)throw new Error("channel and label counts mismatch: "+y);const{channels:S,labels:T}=x[y];delete x[y].channels,delete x[y].labels,Object.defineProperty(x[y],"channels",{value:S}),Object.defineProperty(x[y],"labels",{value:T})}x.rgb.hsl=function(y){const S=y[0]/255,T=y[1]/255,I=y[2]/255,F=Math.min(S,T,I),N=Math.max(S,T,I),L=N-F;let B,z;N===F?B=0:S===N?B=(T-I)/L:T===N?B=2+(I-S)/L:I===N&&(B=4+(S-T)/L),B=Math.min(60*B,360),B<0&&(B+=360);const H=(F+N)/2;return z=N===F?0:H<=.5?L/(N+F):L/(2-N-F),[B,100*z,100*H]},x.rgb.hsv=function(y){let S,T,I,F,N;const L=y[0]/255,B=y[1]/255,z=y[2]/255,H=Math.max(L,B,z),G=H-Math.min(L,B,z),P=function(V){return(H-V)/6/G+.5};return G===0?(F=0,N=0):(N=G/H,S=P(L),T=P(B),I=P(z),L===H?F=I-T:B===H?F=.3333333333333333+S-I:z===H&&(F=.6666666666666666+T-S),F<0?F+=1:F>1&&(F-=1)),[360*F,100*N,100*H]},x.rgb.hwb=function(y){const S=y[0],T=y[1];let I=y[2];const F=x.rgb.hsl(y)[0],N=1/255*Math.min(S,Math.min(T,I));return I=1-.00392156862745098*Math.max(S,Math.max(T,I)),[F,100*N,100*I]},x.rgb.cmyk=function(y){const S=y[0]/255,T=y[1]/255,I=y[2]/255,F=Math.min(1-S,1-T,1-I);return[100*((1-S-F)/(1-F)||0),100*((1-T-F)/(1-F)||0),100*((1-I-F)/(1-F)||0),100*F]},x.rgb.keyword=function(y){const S=A[y];if(S)return S;let T,I=1/0;for(const L of Object.keys(v)){const B=v[L],z=(N=B,((F=y)[0]-N[0])**2+(F[1]-N[1])**2+(F[2]-N[2])**2);z<I&&(I=z,T=L)}var F,N;return T},x.keyword.rgb=function(y){return v[y]},x.rgb.xyz=function(y){let S=y[0]/255,T=y[1]/255,I=y[2]/255;return S=S>.04045?((S+.055)/1.055)**2.4:S/12.92,T=T>.04045?((T+.055)/1.055)**2.4:T/12.92,I=I>.04045?((I+.055)/1.055)**2.4:I/12.92,[100*(.4124*S+.3576*T+.1805*I),100*(.2126*S+.7152*T+.0722*I),100*(.0193*S+.1192*T+.9505*I)]},x.rgb.lab=function(y){const S=x.rgb.xyz(y);let T=S[0],I=S[1],F=S[2];return T/=95.047,I/=100,F/=108.883,T=T>.008856?T**.3333333333333333:7.787*T+.13793103448275862,I=I>.008856?I**.3333333333333333:7.787*I+.13793103448275862,F=F>.008856?F**.3333333333333333:7.787*F+.13793103448275862,[116*I-16,500*(T-I),200*(I-F)]},x.hsl.rgb=function(y){const S=y[0]/360,T=y[1]/100,I=y[2]/100;let F,N,L;if(T===0)return L=255*I,[L,L,L];F=I<.5?I*(1+T):I+T-I*T;const B=2*I-F,z=[0,0,0];for(let H=0;H<3;H++)N=S+.3333333333333333*-(H-1),N<0&&N++,N>1&&N--,L=6*N<1?B+6*(F-B)*N:2*N<1?F:3*N<2?B+(F-B)*(.6666666666666666-N)*6:B,z[H]=255*L;return z},x.hsl.hsv=function(y){const S=y[0];let T=y[1]/100,I=y[2]/100,F=T;const N=Math.max(I,.01);return I*=2,T*=I<=1?I:2-I,F*=N<=1?N:2-N,[S,100*(I===0?2*F/(N+F):2*T/(I+T)),100*((I+T)/2)]},x.hsv.rgb=function(y){const S=y[0]/60,T=y[1]/100;let I=y[2]/100;const F=Math.floor(S)%6,N=S-Math.floor(S),L=255*I*(1-T),B=255*I*(1-T*N),z=255*I*(1-T*(1-N));switch(I*=255,F){case 0:return[I,z,L];case 1:return[B,I,L];case 2:return[L,I,z];case 3:return[L,B,I];case 4:return[z,L,I];case 5:return[I,L,B]}},x.hsv.hsl=function(y){const S=y[0],T=y[1]/100,I=y[2]/100,F=Math.max(I,.01);let N,L;L=(2-T)*I;const B=(2-T)*F;return N=T*F,N/=B<=1?B:2-B,N=N||0,L/=2,[S,100*N,100*L]},x.hwb.rgb=function(y){const S=y[0]/360;let T=y[1]/100,I=y[2]/100;const F=T+I;let N;F>1&&(T/=F,I/=F);const L=Math.floor(6*S),B=1-I;N=6*S-L,1&L&&(N=1-N);const z=T+N*(B-T);let H,G,P;switch(L){default:case 6:case 0:H=B,G=z,P=T;break;case 1:H=z,G=B,P=T;break;case 2:H=T,G=B,P=z;break;case 3:H=T,G=z,P=B;break;case 4:H=z,G=T,P=B;break;case 5:H=B,G=T,P=z}return[255*H,255*G,255*P]},x.cmyk.rgb=function(y){const S=y[0]/100,T=y[1]/100,I=y[2]/100,F=y[3]/100;return[255*(1-Math.min(1,S*(1-F)+F)),255*(1-Math.min(1,T*(1-F)+F)),255*(1-Math.min(1,I*(1-F)+F))]},x.xyz.rgb=function(y){const S=y[0]/100,T=y[1]/100,I=y[2]/100;let F,N,L;return F=3.2406*S+-1.5372*T+-.4986*I,N=-.9689*S+1.8758*T+.0415*I,L=.0557*S+-.204*T+1.057*I,F=F>.0031308?1.055*F**.4166666666666667-.055:12.92*F,N=N>.0031308?1.055*N**.4166666666666667-.055:12.92*N,L=L>.0031308?1.055*L**.4166666666666667-.055:12.92*L,F=Math.min(Math.max(0,F),1),N=Math.min(Math.max(0,N),1),L=Math.min(Math.max(0,L),1),[255*F,255*N,255*L]},x.xyz.lab=function(y){let S=y[0],T=y[1],I=y[2];return S/=95.047,T/=100,I/=108.883,S=S>.008856?S**.3333333333333333:7.787*S+.13793103448275862,T=T>.008856?T**.3333333333333333:7.787*T+.13793103448275862,I=I>.008856?I**.3333333333333333:7.787*I+.13793103448275862,[116*T-16,500*(S-T),200*(T-I)]},x.lab.xyz=function(y){let S,T,I;T=(y[0]+16)/116,S=y[1]/500+T,I=T-y[2]/200;const F=T**3,N=S**3,L=I**3;return T=F>.008856?F:(T-.13793103448275862)/7.787,S=N>.008856?N:(S-.13793103448275862)/7.787,I=L>.008856?L:(I-.13793103448275862)/7.787,S*=95.047,T*=100,I*=108.883,[S,T,I]},x.lab.lch=function(y){const S=y[0],T=y[1],I=y[2];let F;return F=360*Math.atan2(I,T)/2/Math.PI,F<0&&(F+=360),[S,Math.sqrt(T*T+I*I),F]},x.lch.lab=function(y){const S=y[0],T=y[1],I=y[2]/360*2*Math.PI;return[S,T*Math.cos(I),T*Math.sin(I)]},x.rgb.ansi16=function(y,S=null){const[T,I,F]=y;let N=S===null?x.rgb.hsv(y)[2]:S;if(N=Math.round(N/50),N===0)return 30;let L=30+(Math.round(F/255)<<2|Math.round(I/255)<<1|Math.round(T/255));return N===2&&(L+=60),L},x.hsv.ansi16=function(y){return x.rgb.ansi16(x.hsv.rgb(y),y[2])},x.rgb.ansi256=function(y){const S=y[0],T=y[1],I=y[2];return S===T&&T===I?S<8?16:S>248?231:Math.round((S-8)/247*24)+232:16+36*Math.round(S/255*5)+6*Math.round(T/255*5)+Math.round(I/255*5)},x.ansi16.rgb=function(y){let S=y%10;if(S===0||S===7)return y>50&&(S+=3.5),S=S/10.5*255,[S,S,S];const T=.5*(1+~~(y>50));return[(1&S)*T*255,(S>>1&1)*T*255,(S>>2&1)*T*255]},x.ansi256.rgb=function(y){if(y>=232){const T=10*(y-232)+8;return[T,T,T]}let S;return y-=16,[Math.floor(y/36)/5*255,Math.floor((S=y%36)/6)/5*255,S%6/5*255]},x.rgb.hex=function(y){const S=(((255&Math.round(y[0]))<<16)+((255&Math.round(y[1]))<<8)+(255&Math.round(y[2]))).toString(16).toUpperCase();return"000000".substring(S.length)+S},x.hex.rgb=function(y){const S=y.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);if(!S)return[0,0,0];let T=S[0];S[0].length===3&&(T=T.split("").map(F=>F+F).join(""));const I=parseInt(T,16);return[I>>16&255,I>>8&255,255&I]},x.rgb.hcg=function(y){const S=y[0]/255,T=y[1]/255,I=y[2]/255,F=Math.max(Math.max(S,T),I),N=Math.min(Math.min(S,T),I),L=F-N;let B,z;return B=L<1?N/(1-L):0,z=L<=0?0:F===S?(T-I)/L%6:F===T?2+(I-S)/L:4+(S-T)/L,z/=6,z%=1,[360*z,100*L,100*B]},x.hsl.hcg=function(y){const S=y[1]/100,T=y[2]/100,I=T<.5?2*S*T:2*S*(1-T);let F=0;return I<1&&(F=(T-.5*I)/(1-I)),[y[0],100*I,100*F]},x.hsv.hcg=function(y){const S=y[1]/100,T=y[2]/100,I=S*T;let F=0;return I<1&&(F=(T-I)/(1-I)),[y[0],100*I,100*F]},x.hcg.rgb=function(y){const S=y[0]/360,T=y[1]/100,I=y[2]/100;if(T===0)return[255*I,255*I,255*I];const F=[0,0,0],N=S%1*6,L=N%1,B=1-L;let z=0;switch(Math.floor(N)){case 0:F[0]=1,F[1]=L,F[2]=0;break;case 1:F[0]=B,F[1]=1,F[2]=0;break;case 2:F[0]=0,F[1]=1,F[2]=L;break;case 3:F[0]=0,F[1]=B,F[2]=1;break;case 4:F[0]=L,F[1]=0,F[2]=1;break;default:F[0]=1,F[1]=0,F[2]=B}return z=(1-T)*I,[255*(T*F[0]+z),255*(T*F[1]+z),255*(T*F[2]+z)]},x.hcg.hsv=function(y){const S=y[1]/100,T=S+y[2]/100*(1-S);let I=0;return T>0&&(I=S/T),[y[0],100*I,100*T]},x.hcg.hsl=function(y){const S=y[1]/100,T=y[2]/100*(1-S)+.5*S;let I=0;return T>0&&T<.5?I=S/(2*T):T>=.5&&T<1&&(I=S/(2*(1-T))),[y[0],100*I,100*T]},x.hcg.hwb=function(y){const S=y[1]/100,T=S+y[2]/100*(1-S);return[y[0],100*(T-S),100*(1-T)]},x.hwb.hcg=function(y){const S=y[1]/100,T=1-y[2]/100,I=T-S;let F=0;return I<1&&(F=(T-I)/(1-I)),[y[0],100*I,100*F]},x.apple.rgb=function(y){return[y[0]/65535*255,y[1]/65535*255,y[2]/65535*255]},x.rgb.apple=function(y){return[y[0]/255*65535,y[1]/255*65535,y[2]/255*65535]},x.gray.rgb=function(y){return[y[0]/100*255,y[0]/100*255,y[0]/100*255]},x.gray.hsl=function(y){return[0,0,y[0]]},x.gray.hsv=x.gray.hsl,x.gray.hwb=function(y){return[0,100,y[0]]},x.gray.cmyk=function(y){return[0,0,0,y[0]]},x.gray.lab=function(y){return[y[0],0,0]},x.gray.hex=function(y){const S=255&Math.round(y[0]/100*255),T=((S<<16)+(S<<8)+S).toString(16).toUpperCase();return"000000".substring(T.length)+T},x.rgb.gray=function(y){return[(y[0]+y[1]+y[2])/3/255*100]}},9047:(f,b,m)=>{const v=m(9246),A=m(802),x={};Object.keys(v).forEach(y=>{x[y]={},Object.defineProperty(x[y],"channels",{value:v[y].channels}),Object.defineProperty(x[y],"labels",{value:v[y].labels});const S=A(y);Object.keys(S).forEach(T=>{const I=S[T];x[y][T]=function(F){const N=function(...L){const B=L[0];if(B==null)return B;B.length>1&&(L=B);const z=F(L);if(typeof z=="object")for(let H=z.length,G=0;G<H;G++)z[G]=Math.round(z[G]);return z};return"conversion"in F&&(N.conversion=F.conversion),N}(I),x[y][T].raw=function(F){const N=function(...L){const B=L[0];return B==null?B:(B.length>1&&(L=B),F(L))};return"conversion"in F&&(N.conversion=F.conversion),N}(I)})}),f.exports=x},802:(f,b,m)=>{const v=m(9246);function A(S){const T=function(){const F={},N=Object.keys(v);for(let L=N.length,B=0;B<L;B++)F[N[B]]={distance:-1,parent:null};return F}(),I=[S];for(T[S].distance=0;I.length;){const F=I.pop(),N=Object.keys(v[F]);for(let L=N.length,B=0;B<L;B++){const z=N[B],H=T[z];H.distance===-1&&(H.distance=T[F].distance+1,H.parent=F,I.unshift(z))}}return T}function x(S,T){return function(I){return T(S(I))}}function y(S,T){const I=[T[S].parent,S];let F=v[T[S].parent][S],N=T[S].parent;for(;T[N].parent;)I.unshift(T[N].parent),F=x(v[T[N].parent][N],F),N=T[N].parent;return F.conversion=I,F}f.exports=function(S){const T=A(S),I={},F=Object.keys(T);for(let N=F.length,L=0;L<N;L++){const B=F[L];T[B].parent!==null&&(I[B]=y(B,T))}return I}},6931:f=>{f.exports={aliceblue:[240,248,255],antiquewhite:[250,235,215],aqua:[0,255,255],aquamarine:[127,255,212],azure:[240,255,255],beige:[245,245,220],bisque:[255,228,196],black:[0,0,0],blanchedalmond:[255,235,205],blue:[0,0,255],blueviolet:[138,43,226],brown:[165,42,42],burlywood:[222,184,135],cadetblue:[95,158,160],chartreuse:[127,255,0],chocolate:[210,105,30],coral:[255,127,80],cornflowerblue:[100,149,237],cornsilk:[255,248,220],crimson:[220,20,60],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgoldenrod:[184,134,11],darkgray:[169,169,169],darkgreen:[0,100,0],darkgrey:[169,169,169],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkseagreen:[143,188,143],darkslateblue:[72,61,139],darkslategray:[47,79,79],darkslategrey:[47,79,79],darkturquoise:[0,206,209],darkviolet:[148,0,211],deeppink:[255,20,147],deepskyblue:[0,191,255],dimgray:[105,105,105],dimgrey:[105,105,105],dodgerblue:[30,144,255],firebrick:[178,34,34],floralwhite:[255,250,240],forestgreen:[34,139,34],fuchsia:[255,0,255],gainsboro:[220,220,220],ghostwhite:[248,248,255],gold:[255,215,0],goldenrod:[218,165,32],gray:[128,128,128],green:[0,128,0],greenyellow:[173,255,47],grey:[128,128,128],honeydew:[240,255,240],hotpink:[255,105,180],indianred:[205,92,92],indigo:[75,0,130],ivory:[255,255,240],khaki:[240,230,140],lavender:[230,230,250],lavenderblush:[255,240,245],lawngreen:[124,252,0],lemonchiffon:[255,250,205],lightblue:[173,216,230],lightcoral:[240,128,128],lightcyan:[224,255,255],lightgoldenrodyellow:[250,250,210],lightgray:[211,211,211],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightsalmon:[255,160,122],lightseagreen:[32,178,170],lightskyblue:[135,206,250],lightslategray:[119,136,153],lightslategrey:[119,136,153],lightsteelblue:[176,196,222],lightyellow:[255,255,224],lime:[0,255,0],limegreen:[50,205,50],linen:[250,240,230],magenta:[255,0,255],maroon:[128,0,0],mediumaquamarine:[102,205,170],mediumblue:[0,0,205],mediumorchid:[186,85,211],mediumpurple:[147,112,219],mediumseagreen:[60,179,113],mediumslateblue:[123,104,238],mediumspringgreen:[0,250,154],mediumturquoise:[72,209,204],mediumvioletred:[199,21,133],midnightblue:[25,25,112],mintcream:[245,255,250],mistyrose:[255,228,225],moccasin:[255,228,181],navajowhite:[255,222,173],navy:[0,0,128],oldlace:[253,245,230],olive:[128,128,0],olivedrab:[107,142,35],orange:[255,165,0],orangered:[255,69,0],orchid:[218,112,214],palegoldenrod:[238,232,170],palegreen:[152,251,152],paleturquoise:[175,238,238],palevioletred:[219,112,147],papayawhip:[255,239,213],peachpuff:[255,218,185],peru:[205,133,63],pink:[255,192,203],plum:[221,160,221],powderblue:[176,224,230],purple:[128,0,128],rebeccapurple:[102,51,153],red:[255,0,0],rosybrown:[188,143,143],royalblue:[65,105,225],saddlebrown:[139,69,19],salmon:[250,128,114],sandybrown:[244,164,96],seagreen:[46,139,87],seashell:[255,245,238],sienna:[160,82,45],silver:[192,192,192],skyblue:[135,206,235],slateblue:[106,90,205],slategray:[112,128,144],slategrey:[112,128,144],snow:[255,250,250],springgreen:[0,255,127],steelblue:[70,130,180],tan:[210,180,140],teal:[0,128,128],thistle:[216,191,216],tomato:[255,99,71],turquoise:[64,224,208],violet:[238,130,238],wheat:[245,222,179],white:[255,255,255],whitesmoke:[245,245,245],yellow:[255,255,0],yellowgreen:[154,205,50]}},4199:(f,b,m)=>{m.d(b,{A:()=>S});var v=m(9372),A=m.n(v),x=m(935),y=m.n(x)()(A());y.push([f.id,".ck-content code{background-color:hsla(0,0%,78%,.3);border-radius:2px;padding:.15em}.ck.ck-editor__editable .ck-code_selected{background-color:hsla(0,0%,78%,.5)}","",{version:3,sources:["webpack://./../ckeditor5-basic-styles/theme/code.css"],names:[],mappings:"AAKA,iBACC,kCAAuC,CAEvC,iBAAkB,CADlB,aAED,CAEA,0CACC,kCACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck-content code {
	background-color: hsla(0, 0%, 78%, 0.3);
	padding: .15em;
	border-radius: 2px;
}

.ck.ck-editor__editable .ck-code_selected  {
	background-color: hsla(0, 0%, 78%, 0.5);
}
`],sourceRoot:""}]);const S=y},8708:(f,b,m)=>{m.d(b,{A:()=>S});var v=m(9372),A=m.n(v),x=m(935),y=m.n(x)()(A());y.push([f.id,".ck-content blockquote{border-left:5px solid #ccc;font-style:italic;margin-left:0;margin-right:0;overflow:hidden;padding-left:1.5em;padding-right:1.5em}.ck-content[dir=rtl] blockquote{border-left:0;border-right:5px solid #ccc}","",{version:3,sources:["webpack://./../ckeditor5-block-quote/theme/blockquote.css"],names:[],mappings:"AAKA,uBAWC,0BAAsC,CADtC,iBAAkB,CAFlB,aAAc,CACd,cAAe,CAPf,eAAgB,CAIhB,kBAAmB,CADnB,mBAOD,CAEA,gCACC,aAAc,CACd,2BACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck-content blockquote {
	/* See #12 */
	overflow: hidden;

	/* https://github.com/ckeditor/ckeditor5-block-quote/issues/15 */
	padding-right: 1.5em;
	padding-left: 1.5em;

	margin-left: 0;
	margin-right: 0;
	font-style: italic;
	border-left: solid 5px hsl(0, 0%, 80%);
}

.ck-content[dir="rtl"] blockquote {
	border-left: 0;
	border-right: solid 5px hsl(0, 0%, 80%);
}
`],sourceRoot:""}]);const S=y},1866:(f,b,m)=>{m.d(b,{A:()=>S});var v=m(9372),A=m.n(v),x=m(935),y=m.n(x)()(A());y.push([f.id,':root{--ck-image-processing-highlight-color:#f9fafa;--ck-image-processing-background-color:#e3e5e8}.ck.ck-editor__editable .image.image-processing{position:relative}.ck.ck-editor__editable .image.image-processing:before{animation:ck-image-processing-animation 2s linear infinite;background:linear-gradient(90deg,var(--ck-image-processing-background-color),var(--ck-image-processing-highlight-color),var(--ck-image-processing-background-color));background-size:200% 100%;content:"";height:100%;left:0;position:absolute;top:0;width:100%;z-index:1}.ck.ck-editor__editable .image.image-processing img{height:100%}@keyframes ck-image-processing-animation{0%{background-position:200% 0}to{background-position:-200% 0}}',"",{version:3,sources:["webpack://./../ckeditor5-ckbox/theme/ckboximageedit.css"],names:[],mappings:"AAKA,MAEC,6CAAyD,CACzD,8CACD,CAIE,gDACC,iBA2BD,CAzBC,uDAmBC,0DAA2D,CAR3D,oKAKC,CACD,yBAA0B,CAhB1B,UAAW,CAOX,WAAY,CAHZ,MAAO,CAFP,iBAAkB,CAClB,KAAM,CAKN,UAAW,CAHX,SAcD,CAEA,oDACC,WACD,CAKH,yCACC,GACC,0BACD,CACA,GACC,2BACD,CACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	/* Based on default CKBox theme colors */
	--ck-image-processing-highlight-color: hsl(220, 10%, 98%);
	--ck-image-processing-background-color: hsl(220, 10%, 90%);
}

.ck.ck-editor__editable {
	& .image {
		&.image-processing {
			position: relative;

			&:before {
				content: '';

				position: absolute;
				top: 0;
				left: 0;
				z-index: 1;

				height: 100%;
				width: 100%;

				background: linear-gradient(
					90deg,
					var(--ck-image-processing-background-color),
					var(--ck-image-processing-highlight-color),
					var(--ck-image-processing-background-color)
				);
				background-size: 200% 100%;

				animation: ck-image-processing-animation 2s linear infinite;
			}

			& img {
				height: 100%;
			}
		}
	}
}

@keyframes ck-image-processing-animation {
	0% {
		background-position: 200% 0;
	}
	100% {
		background-position: -200% 0;
	}
}
`],sourceRoot:""}]);const S=y},7793:(f,b,m)=>{m.d(b,{A:()=>S});var v=m(9372),A=m.n(v),x=m(935),y=m.n(x)()(A());y.push([f.id,'.ck.ck-editor__editable .ck.ck-clipboard-drop-target-position{display:inline;pointer-events:none;position:relative}.ck.ck-editor__editable .ck.ck-clipboard-drop-target-position span{position:absolute;width:0}.ck.ck-editor__editable .ck-widget:-webkit-drag>.ck-widget__selection-handle,.ck.ck-editor__editable .ck-widget:-webkit-drag>.ck-widget__type-around{display:none}.ck.ck-clipboard-drop-target-line{pointer-events:none;position:absolute}:root{--ck-clipboard-drop-target-dot-width:12px;--ck-clipboard-drop-target-dot-height:8px;--ck-clipboard-drop-target-color:var(--ck-color-focus-border)}.ck.ck-editor__editable .ck.ck-clipboard-drop-target-position span{background:var(--ck-clipboard-drop-target-color);border:1px solid var(--ck-clipboard-drop-target-color);bottom:calc(var(--ck-clipboard-drop-target-dot-height)*-.5);margin-left:-1px;top:calc(var(--ck-clipboard-drop-target-dot-height)*-.5)}.ck.ck-editor__editable .ck.ck-clipboard-drop-target-position span:after{border-color:var(--ck-clipboard-drop-target-color) transparent transparent transparent;border-style:solid;border-width:calc(var(--ck-clipboard-drop-target-dot-height)) calc(var(--ck-clipboard-drop-target-dot-width)*.5) 0 calc(var(--ck-clipboard-drop-target-dot-width)*.5);content:"";display:block;height:0;left:50%;position:absolute;top:calc(var(--ck-clipboard-drop-target-dot-height)*-.5);transform:translateX(-50%);width:0}.ck.ck-editor__editable .ck-widget.ck-clipboard-drop-target-range{outline:var(--ck-widget-outline-thickness) solid var(--ck-clipboard-drop-target-color)!important}.ck.ck-editor__editable .ck-widget:-webkit-drag{zoom:.6;outline:none!important}.ck.ck-clipboard-drop-target-line{background:var(--ck-clipboard-drop-target-color);border:1px solid var(--ck-clipboard-drop-target-color);height:0;margin-top:-1px}.ck.ck-clipboard-drop-target-line:before{border-style:solid;content:"";height:0;position:absolute;top:calc(var(--ck-clipboard-drop-target-dot-width)*-.5);width:0}[dir=ltr] .ck.ck-clipboard-drop-target-line:before{border-color:transparent transparent transparent var(--ck-clipboard-drop-target-color);border-width:calc(var(--ck-clipboard-drop-target-dot-width)*.5) 0 calc(var(--ck-clipboard-drop-target-dot-width)*.5) var(--ck-clipboard-drop-target-dot-height);left:-1px}[dir=rtl] .ck.ck-clipboard-drop-target-line:before{border-color:transparent var(--ck-clipboard-drop-target-color) transparent transparent;border-width:calc(var(--ck-clipboard-drop-target-dot-width)*.5) var(--ck-clipboard-drop-target-dot-height) calc(var(--ck-clipboard-drop-target-dot-width)*.5) 0;right:-1px}',"",{version:3,sources:["webpack://./../ckeditor5-clipboard/theme/clipboard.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-clipboard/clipboard.css"],names:[],mappings:"AASC,8DACC,cAAe,CAEf,mBAAoB,CADpB,iBAOD,CAJC,mEACC,iBAAkB,CAClB,OACD,CAWA,qJACC,YACD,CAIF,kCAEC,mBAAoB,CADpB,iBAED,CC9BA,MACC,yCAA0C,CAC1C,yCAA0C,CAC1C,6DACD,CAOE,mEAIC,gDAAiD,CADjD,sDAAuD,CAFvD,2DAA8D,CAI9D,gBAAiB,CAHjB,wDAqBD,CAfC,yEAWC,sFAAuF,CAEvF,kBAAmB,CADnB,qKAA0K,CAX1K,UAAW,CAIX,aAAc,CAFd,QAAS,CAIT,QAAS,CADT,iBAAkB,CAElB,wDAA2D,CAE3D,0BAA2B,CAR3B,OAYD,CAOF,kEACC,gGACD,CAKA,gDACC,OAAS,CACT,sBACD,CAGD,kCAGC,gDAAiD,CADjD,sDAAuD,CADvD,QAAS,CAGT,eAwBD,CAtBC,yCAMC,kBAAmB,CALnB,UAAW,CAIX,QAAS,CAHT,iBAAkB,CAClB,uDAA0D,CAC1D,OAiBD,CArBA,mDAYE,sFAAuF,CADvF,+JAAoK,CAFpK,SAYF,CArBA,mDAmBE,sFAAuF,CADvF,+JAAmK,CAFnK,UAKF",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-editor__editable {
	/*
	 * Vertical drop target (in text).
	 */
	& .ck.ck-clipboard-drop-target-position {
		display: inline;
		position: relative;
		pointer-events: none;

		& span {
			position: absolute;
			width: 0;
		}
	}

	/*
	 * Styles of the widget being dragged (its preview).
	 */
	& .ck-widget:-webkit-drag {
		& > .ck-widget__selection-handle {
			display: none;
		}

		& > .ck-widget__type-around {
			display: none;
		}
	}
}

.ck.ck-clipboard-drop-target-line {
	position: absolute;
	pointer-events: none;
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

:root {
	--ck-clipboard-drop-target-dot-width: 12px;
	--ck-clipboard-drop-target-dot-height: 8px;
	--ck-clipboard-drop-target-color: var(--ck-color-focus-border);
}

.ck.ck-editor__editable {
	/*
	 * Vertical drop target (in text).
	 */
	& .ck.ck-clipboard-drop-target-position {
		& span {
			bottom: calc(-.5 * var(--ck-clipboard-drop-target-dot-height));
			top: calc(-.5 * var(--ck-clipboard-drop-target-dot-height));
			border: 1px solid var(--ck-clipboard-drop-target-color);
			background: var(--ck-clipboard-drop-target-color);
			margin-left: -1px;

			/* The triangle above the marker */
			&::after {
				content: '';
				width: 0;
				height: 0;

				display: block;
				position: absolute;
				left: 50%;
				top: calc(-.5 * var(--ck-clipboard-drop-target-dot-height));

				transform: translateX(-50%);
				border-color: var(--ck-clipboard-drop-target-color) transparent transparent transparent;
				border-width: calc(var(--ck-clipboard-drop-target-dot-height)) calc(.5 * var(--ck-clipboard-drop-target-dot-width)) 0 calc(.5 * var(--ck-clipboard-drop-target-dot-width));
				border-style: solid;
			}
		}
	}

	/*
	 * Styles of the widget that it a drop target.
	 */
	& .ck-widget.ck-clipboard-drop-target-range {
		outline: var(--ck-widget-outline-thickness) solid var(--ck-clipboard-drop-target-color) !important;
	}

	/*
	 * Styles of the widget being dragged (its preview).
	 */
	& .ck-widget:-webkit-drag {
		zoom: 0.6;
		outline: none !important;
	}
}

.ck.ck-clipboard-drop-target-line {
	height: 0;
	border: 1px solid var(--ck-clipboard-drop-target-color);
	background: var(--ck-clipboard-drop-target-color);
	margin-top: -1px;

	&::before {
		content: '';
		position: absolute;
		top: calc(-.5 * var(--ck-clipboard-drop-target-dot-width));
		width: 0;
		height: 0;
		border-style: solid;

		@mixin ck-dir ltr {
			left: -1px;

			border-width: calc(.5 * var(--ck-clipboard-drop-target-dot-width)) 0 calc(.5 * var(--ck-clipboard-drop-target-dot-width)) var(--ck-clipboard-drop-target-dot-height);
			border-color: transparent transparent transparent var(--ck-clipboard-drop-target-color);
		}

		@mixin ck-dir rtl {
			right: -1px;

			border-width:calc(.5 * var(--ck-clipboard-drop-target-dot-width)) var(--ck-clipboard-drop-target-dot-height) calc(.5 * var(--ck-clipboard-drop-target-dot-width)) 0;
			border-color: transparent var(--ck-clipboard-drop-target-color) transparent transparent;
		}
	}
}
`],sourceRoot:""}]);const S=y},7388:(f,b,m)=>{m.d(b,{A:()=>S});var v=m(9372),A=m.n(v),x=m(935),y=m.n(x)()(A());y.push([f.id,".ck.ck-editor{position:relative}.ck.ck-editor .ck-editor__top .ck-sticky-panel .ck-toolbar{z-index:var(--ck-z-panel)}.ck.ck-editor__top .ck-sticky-panel .ck-sticky-panel__content{border-radius:0}.ck-rounded-corners .ck.ck-editor__top .ck-sticky-panel .ck-sticky-panel__content,.ck.ck-editor__top .ck-sticky-panel .ck-sticky-panel__content.ck-rounded-corners{border-radius:var(--ck-border-radius);border-bottom-left-radius:0;border-bottom-right-radius:0}.ck.ck-editor__top .ck-sticky-panel .ck-sticky-panel__content{border:solid var(--ck-color-base-border);border-width:1px 1px 0}.ck.ck-editor__top .ck-sticky-panel .ck-sticky-panel__content.ck-sticky-panel__content_sticky{border-bottom-width:1px}.ck.ck-editor__top .ck-sticky-panel .ck-sticky-panel__content .ck-menu-bar,.ck.ck-editor__top .ck-sticky-panel .ck-sticky-panel__content .ck-toolbar{border:0}.ck.ck-editor__main>.ck-editor__editable{background:var(--ck-color-base-background);border-radius:0}.ck-rounded-corners .ck.ck-editor__main>.ck-editor__editable,.ck.ck-editor__main>.ck-editor__editable.ck-rounded-corners{border-radius:var(--ck-border-radius);border-top-left-radius:0;border-top-right-radius:0}.ck.ck-editor__main>.ck-editor__editable:not(.ck-focused){border-color:var(--ck-color-base-border)}","",{version:3,sources:["webpack://./../ckeditor5-editor-classic/theme/classiceditor.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-editor-classic/classiceditor.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css"],names:[],mappings:"AAKA,cAIC,iBAMD,CAJC,2DAEC,yBACD,CCLC,8DCED,eDeC,CAjBA,mKCMA,qCAAsC,CDJpC,2BAA4B,CAC5B,4BAcF,CAjBA,8DAOC,wCAAsB,CAAtB,sBAUD,CARC,8FACC,uBACD,CAEA,qJAEC,QACD,CAMH,yCAEC,0CAA2C,CCtB3C,eDgCD,CAZA,yHChBE,qCAAsC,CDqBtC,wBAAyB,CACzB,yBAMF,CAHC,0DACC,wCACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-editor {
	/* All the elements within \`.ck-editor\` are positioned relatively to it.
	 If any element needs to be positioned with respect to the <body>, etc.,
	 it must land outside of the \`.ck-editor\` in DOM. */
	position: relative;

	& .ck-editor__top .ck-sticky-panel .ck-toolbar {
		/* https://github.com/ckeditor/ckeditor5-editor-classic/issues/62 */
		z-index: var(--ck-z-panel);
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../mixins/_rounded.css";

.ck.ck-editor__top {
	& .ck-sticky-panel {
		& .ck-sticky-panel__content {
			@mixin ck-rounded-corners {
				border-bottom-left-radius: 0;
				border-bottom-right-radius: 0;
			}

			border: 1px solid var(--ck-color-base-border);
			border-bottom-width: 0;

			&.ck-sticky-panel__content_sticky {
				border-bottom-width: 1px;
			}

			& .ck-menu-bar,
			& .ck-toolbar {
				border: 0;
			}
		}
	}
}

/* Note: Use ck-editor__main to make sure these styles don't apply to other editor types */
.ck.ck-editor__main > .ck-editor__editable {
	/* https://github.com/ckeditor/ckeditor5-theme-lark/issues/113 */
	background: var(--ck-color-base-background);

	@mixin ck-rounded-corners {
		border-top-left-radius: 0;
		border-top-right-radius: 0;
	}

	&:not(.ck-focused) {
		border-color: var(--ck-color-base-border);
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`],sourceRoot:""}]);const S=y},4098:(f,b,m)=>{m.d(b,{A:()=>S});var v=m(9372),A=m.n(v),x=m(935),y=m.n(x)()(A());y.push([f.id,".ck .ck-placeholder,.ck.ck-placeholder{position:relative}.ck .ck-placeholder:before,.ck.ck-placeholder:before{content:attr(data-placeholder);left:0;pointer-events:none;position:absolute;right:0}.ck.ck-read-only .ck-placeholder:before{display:none}.ck.ck-reset_all .ck-placeholder{position:relative}@media (forced-colors:active){.ck .ck-placeholder,.ck.ck-placeholder{forced-color-adjust:preserve-parent-color}}.ck .ck-placeholder:before,.ck.ck-placeholder:before{cursor:text}@media (forced-colors:none){.ck .ck-placeholder:before,.ck.ck-placeholder:before{color:var(--ck-color-engine-placeholder-text)}}@media (forced-colors:active){.ck .ck-placeholder:before,.ck.ck-placeholder:before{font-style:italic;margin-left:1px}}","",{version:3,sources:["webpack://./../ckeditor5-engine/theme/placeholder.css","webpack://./../ckeditor5-ui/theme/mixins/_mediacolors.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-engine/placeholder.css"],names:[],mappings:"AAMA,uCAEC,iBAWD,CATC,qDAIC,8BAA+B,CAF/B,MAAO,CAKP,mBAAoB,CANpB,iBAAkB,CAElB,OAKD,CAKA,wCACC,YACD,CAQD,iCACC,iBACD,CC7BC,8BACC,uCCOA,yCDLA,CACD,CCOA,qDACC,WAmBD,CDvBA,4BACC,qDCMC,6CDJD,CACD,CAZA,8BACC,qDCsBC,iBAAkB,CAMlB,eD1BD,CACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/* See ckeditor/ckeditor5#936. */
.ck.ck-placeholder,
.ck .ck-placeholder {
	position: relative;

	&::before {
		position: absolute;
		left: 0;
		right: 0;
		content: attr(data-placeholder);

		/* See ckeditor/ckeditor5#469. */
		pointer-events: none;
	}
}

/* See ckeditor/ckeditor5#1987. */
.ck.ck-read-only .ck-placeholder {
	&::before {
		display: none;
	}
}

/*
 * Rules for the \`ck-placeholder\` are loaded before the rules for \`ck-reset_all\` in the base CKEditor 5 DLL build.
 * This fix overwrites the incorrectly set \`position: static\` from \`ck-reset_all\`.
 * See https://github.com/ckeditor/ckeditor5/issues/11418.
 */
.ck.ck-reset_all .ck-placeholder {
	position: relative;
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@define-mixin ck-media-forced-colors {
	@media (forced-colors: active) {
		& {
			@mixin-content;
		}
	}
}

@define-mixin ck-media-default-colors {
	@media (forced-colors: none) {
		& {
			@mixin-content;
		}
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_mediacolors.css";

/* See ckeditor/ckeditor5#936. */
.ck.ck-placeholder, .ck .ck-placeholder {
	@mixin ck-media-forced-colors {
		/*
		 * This is needed for Edge on Windows to use the right color for the placeholder content (::before).
		 * See https://github.com/ckeditor/ckeditor5/issues/14907.
		 */
		forced-color-adjust: preserve-parent-color;
	}

	&::before {
		cursor: text;

		@mixin ck-media-default-colors {
			color: var(--ck-color-engine-placeholder-text);
		}

		@mixin ck-media-forced-colors {
			/*
			 * In the high contrast mode there is no telling between regular and placeholder text. Using
			 * italic text to address that issue. See https://github.com/ckeditor/ckeditor5/issues/14907.
			 */
			font-style: italic;

			/*
			 * Without this margin, the caret will not show up and blink when the user puts the selection
			 * in the placeholder (Edge on Windows). See https://github.com/ckeditor/ckeditor5/issues/14907.
			 */
			margin-left: 1px;
		}
	}
}
`],sourceRoot:""}]);const S=y},8264:(f,b,m)=>{m.d(b,{A:()=>S});var v=m(9372),A=m.n(v),x=m(935),y=m.n(x)()(A());y.push([f.id,".ck.ck-editor__editable span[data-ck-unsafe-element]{display:none}","",{version:3,sources:["webpack://./../ckeditor5-engine/theme/renderer.css"],names:[],mappings:"AAMA,qDACC,YACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/* Elements marked by the Renderer as hidden should be invisible in the editor. */
.ck.ck-editor__editable span[data-ck-unsafe-element] {
	display: none;
}
`],sourceRoot:""}]);const S=y},6269:(f,b,m)=>{m.d(b,{A:()=>S});var v=m(9372),A=m.n(v),x=m(935),y=m.n(x)()(A());y.push([f.id,".ck.ck-heading_heading1{font-size:20px}.ck.ck-heading_heading2{font-size:17px}.ck.ck-heading_heading3{font-size:14px}.ck[class*=ck-heading_heading]{font-weight:700}.ck.ck-dropdown.ck-heading-dropdown .ck-dropdown__button .ck-button__label{width:8em}.ck.ck-dropdown.ck-heading-dropdown .ck-dropdown__panel .ck-list__item{min-width:18em}","",{version:3,sources:["webpack://./../ckeditor5-heading/theme/heading.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-heading/heading.css"],names:[],mappings:"AAKA,wBACC,cACD,CAEA,wBACC,cACD,CAEA,wBACC,cACD,CAEA,+BACC,eACD,CCZC,2EACC,SACD,CAEA,uEACC,cACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-heading_heading1 {
	font-size: 20px;
}

.ck.ck-heading_heading2 {
	font-size: 17px;
}

.ck.ck-heading_heading3 {
	font-size: 14px;
}

.ck[class*="ck-heading_heading"] {
	font-weight: bold;
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/* Resize dropdown's button label. */
.ck.ck-dropdown.ck-heading-dropdown {
	& .ck-dropdown__button .ck-button__label {
		width: 8em;
	}

	& .ck-dropdown__panel .ck-list__item {
		min-width: 18em;
	}
}
`],sourceRoot:""}]);const S=y},265:(f,b,m)=>{m.d(b,{A:()=>S});var v=m(9372),A=m.n(v),x=m(935),y=m.n(x)()(A());y.push([f.id,".ck-content .image{clear:both;display:table;margin:.9em auto;min-width:50px;text-align:center}.ck-content .image img{display:block;height:auto;margin:0 auto;max-width:100%;min-width:100%}.ck-content .image-inline{align-items:flex-start;display:inline-flex;max-width:100%}.ck-content .image-inline picture{display:flex}.ck-content .image-inline img,.ck-content .image-inline picture{flex-grow:1;flex-shrink:1;max-width:100%}.ck.ck-editor__editable .image>figcaption.ck-placeholder:before{overflow:hidden;padding-left:inherit;padding-right:inherit;text-overflow:ellipsis;white-space:nowrap}.ck.ck-editor__editable .image{z-index:1}.ck.ck-editor__editable .image.ck-widget_selected{z-index:2}.ck.ck-editor__editable .image-inline{z-index:1}.ck.ck-editor__editable .image-inline.ck-widget_selected{z-index:2}.ck.ck-editor__editable .image-inline.ck-widget_selected ::selection{display:none}.ck.ck-editor__editable .image-inline img{height:auto}.ck.ck-editor__editable td .image-inline img,.ck.ck-editor__editable th .image-inline img{max-width:none}","",{version:3,sources:["webpack://./../ckeditor5-image/theme/image.css"],names:[],mappings:"AAMC,mBAEC,UAAW,CADX,aAAc,CAOd,gBAAkB,CAGlB,cAAe,CARf,iBA2BD,CAjBC,uBAEC,aAAc,CAad,WAAY,CAVZ,aAAc,CAGd,cAAe,CAGf,cAKD,CAGD,0BAYC,sBAAuB,CANvB,mBAAoB,CAGpB,cAoBD,CAdC,kCACC,YACD,CAGA,gEAGC,WAAY,CACZ,aAAc,CAGd,cACD,CAUD,gEASC,eAAgB,CARhB,oBAAqB,CACrB,qBAAsB,CAQtB,sBAAuB,CAFvB,kBAGD,CAKA,+BACC,SASD,CAHC,kDACC,SACD,CAMD,sCACC,SAkBD,CAZC,yDACC,SAUD,CAHC,qEACC,YACD,CAMF,0CACC,WACD,CAMC,0FACC,cACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck-content {
	& .image {
		display: table;
		clear: both;
		text-align: center;

		/* Make sure there is some space between the content and the image. Center image by default. */
		/* The first value should be equal to --ck-spacing-large variable if used in the editor context
	 	to avoid the content jumping (See https://github.com/ckeditor/ckeditor5/issues/9825). */
		margin: 0.9em auto;

		/* Make sure the caption will be displayed properly (See: https://github.com/ckeditor/ckeditor5/issues/1870). */
		min-width: 50px;

		& img {
			/* Prevent unnecessary margins caused by line-height (see #44). */
			display: block;

			/* Center the image if its width is smaller than the content's width. */
			margin: 0 auto;

			/* Make sure the image never exceeds the size of the parent container (ckeditor/ckeditor5-ui#67). */
			max-width: 100%;

			/* Make sure the image is never smaller than the parent container (See: https://github.com/ckeditor/ckeditor5/issues/9300). */
			min-width: 100%;

			/* Keep proportions of the block image if the height is set and the image is wider than the editor width.
			See https://github.com/ckeditor/ckeditor5/issues/14542. */
			height: auto;
		}
	}

	& .image-inline {
		/*
		 * Normally, the .image-inline would have "display: inline-block" and "img { width: 100% }" (to follow the wrapper while resizing).
		 * Unfortunately, together with "srcset", it gets automatically stretched up to the width of the editing root.
		 * This strange behavior does not happen with inline-flex.
		 */
		display: inline-flex;

		/* While being resized, don't allow the image to exceed the width of the editing root. */
		max-width: 100%;

		/* This is required by Safari to resize images in a sensible way. Without this, the browser breaks the ratio. */
		align-items: flex-start;

		/* When the picture is present it must act as a flex container to let the img resize properly */
		& picture {
			display: flex;
		}

		/* When the picture is present, it must act like a resizable img. */
		& picture,
		& img {
			/* This is necessary for the img to span the entire .image-inline wrapper and to resize properly. */
			flex-grow: 1;
			flex-shrink: 1;

			/* Prevents overflowing the editing root boundaries when an inline image is very wide. */
			max-width: 100%;
		}
	}
}

.ck.ck-editor__editable {
	/*
	 * Inhertit the content styles padding of the <figcaption> in case the integration overrides \`text-align: center\`
	 * of \`.image\` (e.g. to the left/right). This ensures the placeholder stays at the padding just like the native
	 * caret does, and not at the edge of <figcaption>.
	 */
	& .image > figcaption.ck-placeholder::before {
		padding-left: inherit;
		padding-right: inherit;

		/*
		 * Make sure the image caption placeholder doesn't overflow the placeholder area.
		 * See https://github.com/ckeditor/ckeditor5/issues/9162.
		 */
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}

	/*
	 * See https://github.com/ckeditor/ckeditor5/issues/15115.
	 */
	& .image {
		z-index: 1;

		/*
		 * Make sure the selected image always stays on top of its siblings.
		 * See https://github.com/ckeditor/ckeditor5/issues/9108.
		 */
		&.ck-widget_selected {
			z-index: 2;
		}
	}

	/*
	 * See https://github.com/ckeditor/ckeditor5/issues/15115.
	 */
	& .image-inline {
		z-index: 1;

		/*
		 * Make sure the selected inline image always stays on top of its siblings.
		 * See https://github.com/ckeditor/ckeditor5/issues/9108.
		 */
		&.ck-widget_selected {
			z-index: 2;

			/*
			 * Make sure the native browser selection style is not displayed.
			 * Inline image widgets have their own styles for the selected state and
			 * leaving this up to the browser is asking for a visual collision.
			 */
			& ::selection {
				display: none;
			}
		}
	}

	/* Keep proportions of the inline image if the height is set and the image is wider than the editor width.
	See https://github.com/ckeditor/ckeditor5/issues/14542. */
	& .image-inline img {
		height: auto;
	}

	/* The inline image nested in the table should have its original size if not resized.
	See https://github.com/ckeditor/ckeditor5/issues/9117. */
	& td,
	& th {
		& .image-inline img {
			max-width: none;
		}
	}
}
`],sourceRoot:""}]);const S=y},5247:(f,b,m)=>{m.d(b,{A:()=>S});var v=m(9372),A=m.n(v),x=m(935),y=m.n(x)()(A());y.push([f.id,":root{--ck-color-image-caption-background:#f7f7f7;--ck-color-image-caption-text:#333;--ck-color-image-caption-highlighted-background:#fd0}.ck-content .image>figcaption{background-color:var(--ck-color-image-caption-background);caption-side:bottom;color:var(--ck-color-image-caption-text);display:table-caption;font-size:.75em;outline-offset:-1px;padding:.6em;word-break:break-word}@media (forced-colors:active){.ck-content .image>figcaption{background-color:unset;color:unset}}@media (forced-colors:none){.ck.ck-editor__editable .image>figcaption.image__caption_highlighted{animation:ck-image-caption-highlight .6s ease-out}}@media (prefers-reduced-motion:reduce){.ck.ck-editor__editable .image>figcaption.image__caption_highlighted{animation:none}}@keyframes ck-image-caption-highlight{0%{background-color:var(--ck-color-image-caption-highlighted-background)}to{background-color:var(--ck-color-image-caption-background)}}","",{version:3,sources:["webpack://./../ckeditor5-image/theme/imagecaption.css","webpack://./../ckeditor5-ui/theme/mixins/_mediacolors.css"],names:[],mappings:"AAOA,MACC,2CAAoD,CACpD,kCAA8C,CAC9C,oDACD,CAGA,8BAKC,yDAA0D,CAH1D,mBAAoB,CAEpB,wCAAyC,CAHzC,qBAAsB,CAMtB,eAAgB,CAChB,mBAAoB,CAFpB,YAAa,CAHb,qBAYD,CAJC,8BAXD,8BAYE,sBAAuB,CACvB,WAEF,CADC,CCdA,4BACC,qEDmBA,iDCjBA,CACD,CDmBA,uCALD,qEAME,cAEF,CADC,CAGD,sCACC,GACC,qEACD,CAEA,GACC,yDACD,CACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_mediacolors.css";

:root {
	--ck-color-image-caption-background: hsl(0, 0%, 97%);
	--ck-color-image-caption-text: hsl(0, 0%, 20%);
	--ck-color-image-caption-highlighted-background: hsl(52deg 100% 50%);
}

/* Content styles */
.ck-content .image > figcaption {
	display: table-caption;
	caption-side: bottom;
	word-break: break-word;
	color: var(--ck-color-image-caption-text);
	background-color: var(--ck-color-image-caption-background);
	padding: .6em;
	font-size: .75em;
	outline-offset: -1px;

	/* Improve placeholder rendering in high-constrast mode (https://github.com/ckeditor/ckeditor5/issues/14907). */
	@media (forced-colors: active) {
		background-color: unset;
		color: unset;
	}
}

/* Editing styles */
.ck.ck-editor__editable .image > figcaption.image__caption_highlighted {
	@mixin ck-media-default-colors {
		animation: ck-image-caption-highlight .6s ease-out;
	}

	@media (prefers-reduced-motion: reduce) {
		animation: none;
	}
}

@keyframes ck-image-caption-highlight {
	0% {
		background-color: var(--ck-color-image-caption-highlighted-background);
	}

	100% {
		background-color: var(--ck-color-image-caption-background);
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@define-mixin ck-media-forced-colors {
	@media (forced-colors: active) {
		& {
			@mixin-content;
		}
	}
}

@define-mixin ck-media-default-colors {
	@media (forced-colors: none) {
		& {
			@mixin-content;
		}
	}
}
`],sourceRoot:""}]);const S=y},4642:(f,b,m)=>{m.d(b,{A:()=>S});var v=m(9372),A=m.n(v),x=m(935),y=m.n(x)()(A());y.push([f.id,".ck.ck-image-custom-resize-form{align-items:flex-start;display:flex;flex-direction:row;flex-wrap:nowrap}.ck.ck-image-custom-resize-form .ck-labeled-field-view{display:inline-block}.ck.ck-image-custom-resize-form .ck-label{display:none}@media screen and (max-width:600px){.ck.ck-image-custom-resize-form{flex-wrap:wrap}.ck.ck-image-custom-resize-form .ck-labeled-field-view{flex-basis:100%}.ck.ck-image-custom-resize-form .ck-button{flex-basis:50%}}","",{version:3,sources:["webpack://./../ckeditor5-image/theme/imagecustomresizeform.css","webpack://./../ckeditor5-ui/theme/mixins/_rwd.css"],names:[],mappings:"AAOA,gCAIC,sBAAuB,CAHvB,YAAa,CACb,kBAAmB,CACnB,gBAsBD,CAnBC,uDACC,oBACD,CAEA,0CACC,YACD,CCbA,oCDCD,gCAeE,cAUF,CARE,uDACC,eACD,CAEA,2CACC,cACD,CCtBD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_rwd.css";

.ck.ck-image-custom-resize-form {
	display: flex;
	flex-direction: row;
	flex-wrap: nowrap;
	align-items: flex-start;

	& .ck-labeled-field-view {
		display: inline-block;
	}

	& .ck-label {
		display: none;
	}

	@mixin ck-media-phone {
		flex-wrap: wrap;

		& .ck-labeled-field-view {
			flex-basis: 100%;
		}

		& .ck-button {
			flex-basis: 50%;
		}
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@define-mixin ck-media-phone {
	@media screen and (max-width: 600px) {
		@mixin-content;
	}
}
`],sourceRoot:""}]);const S=y},3350:(f,b,m)=>{m.d(b,{A:()=>S});var v=m(9372),A=m.n(v),x=m(935),y=m.n(x)()(A());y.push([f.id,".ck.ck-image-insert-url .ck-image-insert-url__action-row{display:grid;grid-template-columns:repeat(2,1fr)}:root{--ck-image-insert-insert-by-url-width:250px}.ck.ck-image-insert-url{--ck-input-width:100%}.ck.ck-image-insert-url .ck-image-insert-url__action-row{grid-column-gap:var(--ck-spacing-large);margin-top:var(--ck-spacing-large)}.ck.ck-image-insert-url .ck-image-insert-url__action-row .ck-button-cancel,.ck.ck-image-insert-url .ck-image-insert-url__action-row .ck-button-save{justify-content:center;min-width:auto}.ck.ck-image-insert-url .ck-image-insert-url__action-row .ck-button .ck-button__label{color:var(--ck-color-text)}.ck.ck-image-insert-form>.ck.ck-button{display:block;padding:var(--ck-list-button-padding);width:100%}[dir=ltr] .ck.ck-image-insert-form>.ck.ck-button{text-align:left}[dir=rtl] .ck.ck-image-insert-form>.ck.ck-button{text-align:right}.ck.ck-image-insert-form>.ck.ck-collapsible:not(:first-child){border-top:1px solid var(--ck-color-base-border)}.ck.ck-image-insert-form>.ck.ck-collapsible:not(:last-child){border-bottom:1px solid var(--ck-color-base-border)}.ck.ck-image-insert-form>.ck.ck-collapsible,.ck.ck-image-insert-form>.ck.ck-image-insert-url{min-width:var(--ck-image-insert-insert-by-url-width)}.ck.ck-image-insert-form>.ck.ck-image-insert-url{padding:var(--ck-spacing-large)}.ck.ck-image-insert-form:focus{outline:none}","",{version:3,sources:["webpack://./../ckeditor5-image/theme/imageinsert.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-image/imageinsert.css"],names:[],mappings:"AAMC,yDACC,YAAa,CACb,mCACD,CCFD,MACC,2CACD,CAEA,wBACC,qBAgBD,CAdC,yDACC,uCAAwC,CACxC,kCAWD,CATC,oJAEC,sBAAuB,CACvB,cACD,CAEA,sFACC,0BACD,CAKD,uCACC,aAAc,CAEd,qCAAsC,CADtC,UAUD,CAZA,iDAME,eAMF,CAZA,iDAUE,gBAEF,CAGC,8DACC,gDACD,CAEA,6DACC,mDACD,CAMD,6FAJC,oDAOD,CAHA,iDAEC,+BACD,CAEA,+BACC,YACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-image-insert-url {
	& .ck-image-insert-url__action-row {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

:root {
	--ck-image-insert-insert-by-url-width: 250px;
}

.ck.ck-image-insert-url {
	--ck-input-width: 100%;

	& .ck-image-insert-url__action-row {
		grid-column-gap: var(--ck-spacing-large);
		margin-top: var(--ck-spacing-large);

		& .ck-button-save,
		& .ck-button-cancel {
			justify-content: center;
			min-width: auto;
		}

		& .ck-button .ck-button__label {
			color: var(--ck-color-text);
		}
	}
}

.ck.ck-image-insert-form {
	& > .ck.ck-button {
		display: block;
		width: 100%;
		padding: var(--ck-list-button-padding);

		@mixin ck-dir ltr {
			text-align: left;
		}

		@mixin ck-dir rtl {
			text-align: right;
		}
	}

	& > .ck.ck-collapsible {
		&:not(:first-child) {
			border-top: 1px solid var(--ck-color-base-border);
		}

		&:not(:last-child) {
			border-bottom: 1px solid var(--ck-color-base-border);
		}

		min-width: var(--ck-image-insert-insert-by-url-width);
	}

	/* This is the case when there are no other integrations configured than insert by URL */
	& > .ck.ck-image-insert-url {
		min-width: var(--ck-image-insert-insert-by-url-width);
		padding: var(--ck-spacing-large);
	}

	&:focus {
		outline: none;
	}
}
`],sourceRoot:""}]);const S=y},7378:(f,b,m)=>{m.d(b,{A:()=>S});var v=m(9372),A=m.n(v),x=m(935),y=m.n(x)()(A());y.push([f.id,".ck.ck-editor__editable img.image_placeholder{background-size:100% 100%}","",{version:3,sources:["webpack://./../ckeditor5-image/theme/imageplaceholder.css"],names:[],mappings:"AAMC,8CACC,yBACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-editor__editable {
	& img.image_placeholder {
		background-size: 100% 100%;
	}
}
`],sourceRoot:""}]);const S=y},3469:(f,b,m)=>{m.d(b,{A:()=>S});var v=m(9372),A=m.n(v),x=m(935),y=m.n(x)()(A());y.push([f.id,".ck-content img.image_resized{height:auto}.ck-content .image.image_resized{box-sizing:border-box;display:block;max-width:100%}.ck-content .image.image_resized img{width:100%}.ck-content .image.image_resized>figcaption{display:block}.ck.ck-editor__editable td .image-inline.image_resized img,.ck.ck-editor__editable th .image-inline.image_resized img{max-width:100%}[dir=ltr] .ck.ck-button.ck-button_with-text.ck-resize-image-button .ck-button__icon{margin-right:var(--ck-spacing-standard)}[dir=rtl] .ck.ck-button.ck-button_with-text.ck-resize-image-button .ck-button__icon{margin-left:var(--ck-spacing-standard)}.ck.ck-dropdown .ck-button.ck-resize-image-button .ck-button__label{width:4em}","",{version:3,sources:["webpack://./../ckeditor5-image/theme/imageresize.css"],names:[],mappings:"AAMA,8BACC,WACD,CAEA,iCAQC,qBAAsB,CADtB,aAAc,CANd,cAkBD,CATC,qCAEC,UACD,CAEA,4CAEC,aACD,CAQC,sHACC,cACD,CAIF,oFACC,uCACD,CAEA,oFACC,sCACD,CAEA,oEACC,SACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/* Preserve aspect ratio of the resized image after introducing image height attribute. */
.ck-content img.image_resized {
	height: auto;
}

.ck-content .image.image_resized {
	max-width: 100%;
	/*
	The \`<figure>\` element for resized images must not use \`display:table\` as browsers do not support \`max-width\` for it well.
	See https://stackoverflow.com/questions/4019604/chrome-safari-ignoring-max-width-in-table/14420691#14420691 for more.
	Fortunately, since we control the width, there is no risk that the image will look bad.
	*/
	display: block;
	box-sizing: border-box;

	& img {
		/* For resized images it is the \`<figure>\` element that determines the image width. */
		width: 100%;
	}

	& > figcaption {
		/* The \`<figure>\` element uses \`display:block\`, so \`<figcaption>\` also has to. */
		display: block;
	}
}

.ck.ck-editor__editable {
	/* The resized inline image nested in the table should respect its parent size.
	See https://github.com/ckeditor/ckeditor5/issues/9117. */
	& td,
	& th {
		& .image-inline.image_resized img {
			max-width: 100%;
		}
	}
}

[dir="ltr"] .ck.ck-button.ck-button_with-text.ck-resize-image-button .ck-button__icon {
	margin-right: var(--ck-spacing-standard);
}

[dir="rtl"] .ck.ck-button.ck-button_with-text.ck-resize-image-button .ck-button__icon {
	margin-left: var(--ck-spacing-standard);
}

.ck.ck-dropdown .ck-button.ck-resize-image-button .ck-button__label {
	width: 4em;
}
`],sourceRoot:""}]);const S=y},6386:(f,b,m)=>{m.d(b,{A:()=>S});var v=m(9372),A=m.n(v),x=m(935),y=m.n(x)()(A());y.push([f.id,":root{--ck-image-style-spacing:1.5em;--ck-inline-image-style-spacing:calc(var(--ck-image-style-spacing)/2)}.ck-content .image-style-block-align-left,.ck-content .image-style-block-align-right{max-width:calc(100% - var(--ck-image-style-spacing))}.ck-content .image-style-align-left,.ck-content .image-style-align-right{clear:none}.ck-content .image-style-side{float:right;margin-left:var(--ck-image-style-spacing);max-width:50%}.ck-content .image-style-align-left{float:left;margin-right:var(--ck-image-style-spacing)}.ck-content .image-style-align-center{margin-left:auto;margin-right:auto}.ck-content .image-style-align-right{float:right;margin-left:var(--ck-image-style-spacing)}.ck-content .image-style-block-align-right{margin-left:auto;margin-right:0}.ck-content .image-style-block-align-left{margin-left:0;margin-right:auto}.ck-content p+.image-style-align-left,.ck-content p+.image-style-align-right,.ck-content p+.image-style-side{margin-top:0}.ck-content .image-inline.image-style-align-left,.ck-content .image-inline.image-style-align-right{margin-bottom:var(--ck-inline-image-style-spacing);margin-top:var(--ck-inline-image-style-spacing)}.ck-content .image-inline.image-style-align-left{margin-right:var(--ck-inline-image-style-spacing)}.ck-content .image-inline.image-style-align-right{margin-left:var(--ck-inline-image-style-spacing)}.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open>.ck-splitbutton__action:not(.ck-disabled),.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open>.ck-splitbutton__arrow:not(.ck-disabled),.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open>.ck-splitbutton__arrow:not(.ck-disabled):not(:hover),.ck.ck-splitbutton.ck-splitbutton_flatten:hover>.ck-splitbutton__action:not(.ck-disabled),.ck.ck-splitbutton.ck-splitbutton_flatten:hover>.ck-splitbutton__arrow:not(.ck-disabled),.ck.ck-splitbutton.ck-splitbutton_flatten:hover>.ck-splitbutton__arrow:not(.ck-disabled):not(:hover){background-color:var(--ck-color-button-on-background)}.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open>.ck-splitbutton__action:not(.ck-disabled):after,.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open>.ck-splitbutton__arrow:not(.ck-disabled):after,.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open>.ck-splitbutton__arrow:not(.ck-disabled):not(:hover):after,.ck.ck-splitbutton.ck-splitbutton_flatten:hover>.ck-splitbutton__action:not(.ck-disabled):after,.ck.ck-splitbutton.ck-splitbutton_flatten:hover>.ck-splitbutton__arrow:not(.ck-disabled):after,.ck.ck-splitbutton.ck-splitbutton_flatten:hover>.ck-splitbutton__arrow:not(.ck-disabled):not(:hover):after{display:none}.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open:hover>.ck-splitbutton__action:not(.ck-disabled),.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open:hover>.ck-splitbutton__arrow:not(.ck-disabled),.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open:hover>.ck-splitbutton__arrow:not(.ck-disabled):not(:hover){background-color:var(--ck-color-button-on-hover-background)}","",{version:3,sources:["webpack://./../ckeditor5-image/theme/imagestyle.css"],names:[],mappings:"AAKA,MACC,8BAA+B,CAC/B,qEACD,CAMC,qFAEC,oDACD,CAIA,yEAEC,UACD,CAEA,8BACC,WAAY,CACZ,yCAA0C,CAC1C,aACD,CAEA,oCACC,UAAW,CACX,0CACD,CAEA,sCACC,gBAAiB,CACjB,iBACD,CAEA,qCACC,WAAY,CACZ,yCACD,CAEA,2CAEC,gBAAiB,CADjB,cAED,CAEA,0CACC,aAAc,CACd,iBACD,CAGA,6GAGC,YACD,CAGC,mGAGC,kDAAmD,CADnD,+CAED,CAEA,iDACC,iDACD,CAEA,kDACC,gDACD,CAUC,0lBAGC,qDAKD,CAHC,8nBACC,YACD,CAKD,oVAGC,2DACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-image-style-spacing: 1.5em;
	--ck-inline-image-style-spacing: calc(var(--ck-image-style-spacing) / 2);
}

.ck-content {
	/* Provides a minimal side margin for the left and right aligned images, so that the user has a visual feedback
	confirming successful application of the style if image width exceeds the editor's size.
	See https://github.com/ckeditor/ckeditor5/issues/9342 */
	& .image-style-block-align-left,
	& .image-style-block-align-right {
		max-width: calc(100% - var(--ck-image-style-spacing));
	}

	/* Allows displaying multiple floating images in the same line.
	See https://github.com/ckeditor/ckeditor5/issues/9183#issuecomment-804988132 */
	& .image-style-align-left,
	& .image-style-align-right {
		clear: none;
	}

	& .image-style-side {
		float: right;
		margin-left: var(--ck-image-style-spacing);
		max-width: 50%;
	}

	& .image-style-align-left {
		float: left;
		margin-right: var(--ck-image-style-spacing);
	}

	& .image-style-align-center {
		margin-left: auto;
		margin-right: auto;
	}

	& .image-style-align-right {
		float: right;
		margin-left: var(--ck-image-style-spacing);
	}

	& .image-style-block-align-right {
		margin-right: 0;
		margin-left: auto;
	}

	& .image-style-block-align-left {
		margin-left: 0;
		margin-right: auto;
	}

	/* Simulates margin collapsing with the preceding paragraph, which does not work for the floating elements. */
	& p + .image-style-align-left,
	& p + .image-style-align-right,
	& p + .image-style-side {
		margin-top: 0;
	}

	& .image-inline {
		&.image-style-align-left,
		&.image-style-align-right {
			margin-top: var(--ck-inline-image-style-spacing);
			margin-bottom: var(--ck-inline-image-style-spacing);
		}

		&.image-style-align-left {
			margin-right: var(--ck-inline-image-style-spacing);
		}

		&.image-style-align-right {
			margin-left: var(--ck-inline-image-style-spacing);
		}
	}
}

.ck.ck-splitbutton {
	/* The button should display as a regular drop-down if the action button
	is forced to fire the same action as the arrow button. */
	&.ck-splitbutton_flatten {
		&:hover,
		&.ck-splitbutton_open {
			& > .ck-splitbutton__action:not(.ck-disabled),
			& > .ck-splitbutton__arrow:not(.ck-disabled),
			& > .ck-splitbutton__arrow:not(.ck-disabled):not(:hover) {
				background-color: var(--ck-color-button-on-background);

				&::after {
					display: none;
				}
			}
		}

		&.ck-splitbutton_open:hover {
			& > .ck-splitbutton__action:not(.ck-disabled),
			& > .ck-splitbutton__arrow:not(.ck-disabled),
			& > .ck-splitbutton__arrow:not(.ck-disabled):not(:hover) {
				background-color: var(--ck-color-button-on-hover-background);
			}
		}
	}
}
`],sourceRoot:""}]);const S=y},7693:(f,b,m)=>{m.d(b,{A:()=>S});var v=m(9372),A=m.n(v),x=m(935),y=m.n(x)()(A());y.push([f.id,'.ck-image-upload-complete-icon{border-radius:50%;display:block;position:absolute;right:min(var(--ck-spacing-medium),6%);top:min(var(--ck-spacing-medium),6%);z-index:1}.ck-image-upload-complete-icon:after{content:"";position:absolute}:root{--ck-color-image-upload-icon:#fff;--ck-color-image-upload-icon-background:#008a00;--ck-image-upload-icon-size:20;--ck-image-upload-icon-width:2px;--ck-image-upload-icon-is-visible:clamp(0px,100% - 50px,1px)}.ck-image-upload-complete-icon{animation-delay:0ms,3s;animation-duration:.5s,.5s;animation-fill-mode:forwards,forwards;animation-name:ck-upload-complete-icon-show,ck-upload-complete-icon-hide;background:var(--ck-color-image-upload-icon-background);font-size:calc(1px*var(--ck-image-upload-icon-size));height:calc(var(--ck-image-upload-icon-is-visible)*var(--ck-image-upload-icon-size));opacity:0;overflow:hidden;width:calc(var(--ck-image-upload-icon-is-visible)*var(--ck-image-upload-icon-size))}.ck-image-upload-complete-icon:after{animation-delay:.5s;animation-duration:.5s;animation-fill-mode:forwards;animation-name:ck-upload-complete-icon-check;border-right:var(--ck-image-upload-icon-width) solid var(--ck-color-image-upload-icon);border-top:var(--ck-image-upload-icon-width) solid var(--ck-color-image-upload-icon);box-sizing:border-box;height:0;left:25%;opacity:0;top:50%;transform:scaleX(-1) rotate(135deg);transform-origin:left top;width:0}@media (prefers-reduced-motion:reduce){.ck-image-upload-complete-icon{animation-duration:0ms}.ck-image-upload-complete-icon:after{animation:none;height:.45em;opacity:1;width:.3em}}@keyframes ck-upload-complete-icon-show{0%{opacity:0}to{opacity:1}}@keyframes ck-upload-complete-icon-hide{0%{opacity:1}to{opacity:0}}@keyframes ck-upload-complete-icon-check{0%{height:0;opacity:1;width:0}33%{height:0;width:.3em}to{height:.45em;opacity:1;width:.3em}}',"",{version:3,sources:["webpack://./../ckeditor5-image/theme/imageuploadicon.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-image/imageuploadicon.css"],names:[],mappings:"AAKA,+BAUC,iBAAkB,CATlB,aAAc,CACd,iBAAkB,CAOlB,sCAAwC,CADxC,oCAAsC,CAGtC,SAMD,CAJC,qCACC,UAAW,CACX,iBACD,CChBD,MACC,iCAA8C,CAC9C,+CAA4D,CAG5D,8BAA+B,CAC/B,gCAAiC,CACjC,4DACD,CAEA,+BAWC,sBAA4B,CAN5B,0BAAgC,CADhC,qCAAuC,CADvC,wEAA0E,CAD1E,uDAAwD,CAMxD,oDAAuD,CAWvD,oFAAuF,CAlBvF,SAAU,CAgBV,eAAgB,CAChB,mFAqCD,CAjCC,qCAgBC,mBAAsB,CADtB,sBAAyB,CAEzB,4BAA6B,CAH7B,4CAA6C,CAF7C,sFAAuF,CADvF,oFAAqF,CASrF,qBAAsB,CAdtB,QAAS,CAJT,QAAS,CAGT,SAAU,CADV,OAAQ,CAKR,mCAAoC,CACpC,yBAA0B,CAH1B,OAcD,CAEA,uCA7CD,+BA8CE,sBASF,CAPE,qCACC,cAAe,CAGf,YAAc,CAFd,SAAU,CACV,UAED,CACD,CAGD,wCACC,GACC,SACD,CAEA,GACC,SACD,CACD,CAEA,wCACC,GACC,SACD,CAEA,GACC,SACD,CACD,CAEA,yCACC,GAGC,QAAS,CAFT,SAAU,CACV,OAED,CACA,IAEC,QAAS,CADT,UAED,CACA,GAGC,YAAc,CAFd,SAAU,CACV,UAED,CACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck-image-upload-complete-icon {
	display: block;
	position: absolute;

	/*
	 * Smaller images should have the icon closer to the border.
	 * Match the icon position with the linked image indicator brought by the link image feature.
	 */
	top: min(var(--ck-spacing-medium), 6%);
	right: min(var(--ck-spacing-medium), 6%);
	border-radius: 50%;
	z-index: 1;

	&::after {
		content: "";
		position: absolute;
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-color-image-upload-icon: hsl(0, 0%, 100%);
	--ck-color-image-upload-icon-background: hsl(120, 100%, 27%);

	/* Match the icon size with the linked image indicator brought by the link image feature. */
	--ck-image-upload-icon-size: 20;
	--ck-image-upload-icon-width: 2px;
	--ck-image-upload-icon-is-visible: clamp(0px, 100% - 50px, 1px);
}

.ck-image-upload-complete-icon {
	opacity: 0;
	background: var(--ck-color-image-upload-icon-background);
	animation-name: ck-upload-complete-icon-show, ck-upload-complete-icon-hide;
	animation-fill-mode: forwards, forwards;
	animation-duration: 500ms, 500ms;

	/* To make animation scalable. */
	font-size: calc(1px * var(--ck-image-upload-icon-size));

	/* Hide completed upload icon after 3 seconds. */
	animation-delay: 0ms, 3000ms;

	/*
	 * Use CSS math to simulate container queries.
	 * https://css-tricks.com/the-raven-technique-one-step-closer-to-container-queries/#what-about-showing-and-hiding-things
	 */
	overflow: hidden;
	width: calc(var(--ck-image-upload-icon-is-visible) * var(--ck-image-upload-icon-size));
	height: calc(var(--ck-image-upload-icon-is-visible) * var(--ck-image-upload-icon-size));

	/* This is check icon element made from border-width mixed with animations. */
	&::after {
		/* Because of border transformation we need to "hard code" left position. */
		left: 25%;

		top: 50%;
		opacity: 0;
		height: 0;
		width: 0;

		transform: scaleX(-1) rotate(135deg);
		transform-origin: left top;
		border-top: var(--ck-image-upload-icon-width) solid var(--ck-color-image-upload-icon);
		border-right: var(--ck-image-upload-icon-width) solid var(--ck-color-image-upload-icon);

		animation-name: ck-upload-complete-icon-check;
		animation-duration: 500ms;
		animation-delay: 500ms;
		animation-fill-mode: forwards;

		/* #1095. While reset is not providing proper box-sizing for pseudoelements, we need to handle it. */
		box-sizing: border-box;
	}

	@media (prefers-reduced-motion: reduce) {
		animation-duration: 0ms;

		&::after {
			animation: none;
			opacity: 1;
			width: 0.3em;
			height: 0.45em;
		}
	}
}

@keyframes ck-upload-complete-icon-show {
	from {
		opacity: 0;
	}

	to {
		opacity: 1;
	}
}

@keyframes ck-upload-complete-icon-hide {
	from {
		opacity: 1;
	}

	to {
		opacity: 0;
	}
}

@keyframes ck-upload-complete-icon-check {
	0% {
		opacity: 1;
		width: 0;
		height: 0;
	}
	33% {
		width: 0.3em;
		height: 0;
	}
	100% {
		opacity: 1;
		width: 0.3em;
		height: 0.45em;
	}
}
`],sourceRoot:""}]);const S=y},1559:(f,b,m)=>{m.d(b,{A:()=>S});var v=m(9372),A=m.n(v),x=m(935),y=m.n(x)()(A());y.push([f.id,'.ck .ck-upload-placeholder-loader{align-items:center;display:flex;justify-content:center;left:0;position:absolute;top:0}.ck .ck-upload-placeholder-loader:before{content:"";position:relative}:root{--ck-color-upload-placeholder-loader:#b3b3b3;--ck-upload-placeholder-loader-size:32px;--ck-upload-placeholder-image-aspect-ratio:2.8}.ck .ck-image-upload-placeholder{margin:0;width:100%}.ck .ck-image-upload-placeholder.image-inline{width:calc(var(--ck-upload-placeholder-loader-size)*2*var(--ck-upload-placeholder-image-aspect-ratio))}.ck .ck-image-upload-placeholder img{aspect-ratio:var(--ck-upload-placeholder-image-aspect-ratio)}.ck .ck-upload-placeholder-loader{height:100%;width:100%}.ck .ck-upload-placeholder-loader:before{animation:ck-upload-placeholder-loader 1s linear infinite;border-radius:50%;border-right:2px solid transparent;border-top:3px solid var(--ck-color-upload-placeholder-loader);height:var(--ck-upload-placeholder-loader-size);width:var(--ck-upload-placeholder-loader-size)}@keyframes ck-upload-placeholder-loader{to{transform:rotate(1turn)}}',"",{version:3,sources:["webpack://./../ckeditor5-image/theme/imageuploadloader.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-image/imageuploadloader.css"],names:[],mappings:"AAKA,kCAGC,kBAAmB,CADnB,YAAa,CAEb,sBAAuB,CAEvB,MAAO,CALP,iBAAkB,CAIlB,KAOD,CAJC,yCACC,UAAW,CACX,iBACD,CCXD,MACC,4CAAqD,CACrD,wCAAyC,CACzC,8CACD,CAEA,iCAGC,QAAS,CADT,UAgBD,CAbC,8CACC,sGACD,CAEA,qCAOC,4DACD,CAGD,kCAEC,WAAY,CADZ,UAWD,CARC,yCAMC,yDAA0D,CAH1D,iBAAkB,CAElB,kCAAmC,CADnC,8DAA+D,CAF/D,+CAAgD,CADhD,8CAMD,CAGD,wCACC,GACC,uBACD,CACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck .ck-upload-placeholder-loader {
	position: absolute;
	display: flex;
	align-items: center;
	justify-content: center;
	top: 0;
	left: 0;

	&::before {
		content: '';
		position: relative;
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-color-upload-placeholder-loader: hsl(0, 0%, 70%);
	--ck-upload-placeholder-loader-size: 32px;
	--ck-upload-placeholder-image-aspect-ratio: 2.8;
}

.ck .ck-image-upload-placeholder {
	/* We need to control the full width of the SVG gray background. */
	width: 100%;
	margin: 0;

	&.image-inline {
		width: calc( 2 * var(--ck-upload-placeholder-loader-size) * var(--ck-upload-placeholder-image-aspect-ratio) );
	}

	& img {
		/*
		 * This is an arbitrary aspect for a 1x1 px GIF to display to the user. Not too tall, not too short.
		 * There's nothing special about this number except that it should make the image placeholder look like
		 * a real image during this short period after the upload started and before the image was read from the
		 * file system (and a rich preview was loaded).
		 */
		aspect-ratio: var(--ck-upload-placeholder-image-aspect-ratio);
	}
}

.ck .ck-upload-placeholder-loader {
	width: 100%;
	height: 100%;

	&::before {
		width: var(--ck-upload-placeholder-loader-size);
		height: var(--ck-upload-placeholder-loader-size);
		border-radius: 50%;
		border-top: 3px solid var(--ck-color-upload-placeholder-loader);
		border-right: 2px solid transparent;
		animation: ck-upload-placeholder-loader 1s linear infinite;
	}
}

@keyframes ck-upload-placeholder-loader {
	to {
		transform: rotate( 360deg );
	}
}
`],sourceRoot:""}]);const S=y},2267:(f,b,m)=>{m.d(b,{A:()=>S});var v=m(9372),A=m.n(v),x=m(935),y=m.n(x)()(A());y.push([f.id,".ck.ck-editor__editable .image,.ck.ck-editor__editable .image-inline{position:relative}.ck.ck-editor__editable .image .ck-progress-bar,.ck.ck-editor__editable .image-inline .ck-progress-bar{left:0;position:absolute;top:0}.ck.ck-editor__editable .image-inline.ck-appear,.ck.ck-editor__editable .image.ck-appear{animation:fadeIn .7s}@media (prefers-reduced-motion:reduce){.ck.ck-editor__editable .image-inline.ck-appear,.ck.ck-editor__editable .image.ck-appear{animation:none;opacity:1}}.ck.ck-editor__editable .image .ck-progress-bar,.ck.ck-editor__editable .image-inline .ck-progress-bar{background:var(--ck-color-upload-bar-background);height:2px;transition:width .1s;width:0}@keyframes fadeIn{0%{opacity:0}to{opacity:1}}","",{version:3,sources:["webpack://./../ckeditor5-image/theme/imageuploadprogress.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-image/imageuploadprogress.css"],names:[],mappings:"AAMC,qEAEC,iBACD,CAGA,uGAIC,MAAO,CAFP,iBAAkB,CAClB,KAED,CCRC,yFACC,oBAMD,CAJC,uCAHD,yFAKE,cAAe,CADf,SAGF,CADC,CAKF,uGAIC,gDAAiD,CAFjD,UAAW,CAGX,oBAAuB,CAFvB,OAGD,CAGD,kBACC,GAAO,SAAY,CACnB,GAAO,SAAY,CACpB",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-editor__editable {
	& .image,
	& .image-inline {
		position: relative;
	}

	/* Upload progress bar. */
	& .image .ck-progress-bar,
	& .image-inline .ck-progress-bar {
		position: absolute;
		top: 0;
		left: 0;
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-editor__editable {
	& .image,
	& .image-inline {
		/* Showing animation. */
		&.ck-appear {
			animation: fadeIn 700ms;

			@media (prefers-reduced-motion: reduce) {
				opacity: 1;
				animation: none;
			}
		}
	}

	/* Upload progress bar. */
	& .image .ck-progress-bar,
	& .image-inline .ck-progress-bar {
		height: 2px;
		width: 0;
		background: var(--ck-color-upload-bar-background);
		transition: width 100ms;
	}
}

@keyframes fadeIn {
	from { opacity: 0; }
	to   { opacity: 1; }
}
`],sourceRoot:""}]);const S=y},4062:(f,b,m)=>{m.d(b,{A:()=>S});var v=m(9372),A=m.n(v),x=m(935),y=m.n(x)()(A());y.push([f.id,".ck.ck-text-alternative-form{display:flex;flex-direction:row;flex-wrap:nowrap}.ck.ck-text-alternative-form .ck-labeled-field-view{display:inline-block}.ck.ck-text-alternative-form .ck-label{display:none}@media screen and (max-width:600px){.ck.ck-text-alternative-form{flex-wrap:wrap}.ck.ck-text-alternative-form .ck-labeled-field-view{flex-basis:100%}.ck.ck-text-alternative-form .ck-button{flex-basis:50%}}","",{version:3,sources:["webpack://./../ckeditor5-image/theme/textalternativeform.css","webpack://./../ckeditor5-ui/theme/mixins/_rwd.css"],names:[],mappings:"AAOA,6BACC,YAAa,CACb,kBAAmB,CACnB,gBAqBD,CAnBC,oDACC,oBACD,CAEA,uCACC,YACD,CCZA,oCDCD,6BAcE,cAUF,CARE,oDACC,eACD,CAEA,wCACC,cACD,CCrBD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_rwd.css";

.ck.ck-text-alternative-form {
	display: flex;
	flex-direction: row;
	flex-wrap: nowrap;

	& .ck-labeled-field-view {
		display: inline-block;
	}

	& .ck-label {
		display: none;
	}

	@mixin ck-media-phone {
		flex-wrap: wrap;

		& .ck-labeled-field-view {
			flex-basis: 100%;
		}

		& .ck-button {
			flex-basis: 50%;
		}
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@define-mixin ck-media-phone {
	@media screen and (max-width: 600px) {
		@mixin-content;
	}
}
`],sourceRoot:""}]);const S=y},7719:(f,b,m)=>{m.d(b,{A:()=>S});var v=m(9372),A=m.n(v),x=m(935),y=m.n(x)()(A());y.push([f.id,".ck .ck-link_selected{background:var(--ck-color-link-selected-background)}.ck .ck-link_selected span.image-inline{outline:var(--ck-widget-outline-thickness) solid var(--ck-color-link-selected-background)}.ck .ck-fake-link-selection{background:var(--ck-color-link-fake-selection)}.ck .ck-fake-link-selection_collapsed{border-right:1px solid var(--ck-color-base-text);height:100%;margin-right:-1px;outline:1px solid hsla(0,0%,100%,.5)}","",{version:3,sources:["webpack://./../ckeditor5-theme-lark/theme/ckeditor5-link/link.css"],names:[],mappings:"AAMA,sBACC,mDAMD,CAHC,wCACC,yFACD,CAOD,4BACC,8CACD,CAGA,sCAEC,gDAAiD,CADjD,WAAY,CAEZ,iBAAkB,CAClB,oCACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/* Class added to span element surrounding currently selected link. */
.ck .ck-link_selected {
	background: var(--ck-color-link-selected-background);

	/* Give linked inline images some outline to let the user know they are also part of the link. */
	& span.image-inline {
		outline: var(--ck-widget-outline-thickness) solid var(--ck-color-link-selected-background);
	}
}

/*
 * Classes used by the "fake visual selection" displayed in the content when an input
 * in the link UI has focus (the browser does not render the native selection in this state).
 */
.ck .ck-fake-link-selection {
	background: var(--ck-color-link-fake-selection);
}

/* A collapsed fake visual selection. */
.ck .ck-fake-link-selection_collapsed {
	height: 100%;
	border-right: 1px solid var(--ck-color-base-text);
	margin-right: -1px;
	outline: solid 1px hsla(0, 0%, 100%, .5);
}
`],sourceRoot:""}]);const S=y},8762:(f,b,m)=>{m.d(b,{A:()=>S});var v=m(9372),A=m.n(v),x=m(935),y=m.n(x)()(A());y.push([f.id,".ck.ck-link-actions{display:flex;flex-direction:row;flex-wrap:nowrap}.ck.ck-link-actions .ck-link-actions__preview{display:inline-block}.ck.ck-link-actions .ck-link-actions__preview .ck-button__label{overflow:hidden}@media screen and (max-width:600px){.ck.ck-link-actions{flex-wrap:wrap}.ck.ck-link-actions .ck-link-actions__preview{flex-basis:100%}.ck.ck-link-actions .ck-button:not(.ck-link-actions__preview){flex-basis:50%}}.ck.ck-link-actions .ck-button.ck-link-actions__preview{padding-left:0;padding-right:0}.ck.ck-link-actions .ck-button.ck-link-actions__preview .ck-button__label{color:var(--ck-color-link-default);cursor:pointer;max-width:var(--ck-input-width);min-width:3em;padding:0 var(--ck-spacing-medium);text-align:center;text-overflow:ellipsis}.ck.ck-link-actions .ck-button.ck-link-actions__preview .ck-button__label:hover{text-decoration:underline}.ck.ck-link-actions .ck-button.ck-link-actions__preview,.ck.ck-link-actions .ck-button.ck-link-actions__preview:active,.ck.ck-link-actions .ck-button.ck-link-actions__preview:focus,.ck.ck-link-actions .ck-button.ck-link-actions__preview:hover{background:none}.ck.ck-link-actions .ck-button.ck-link-actions__preview:active{box-shadow:none}.ck.ck-link-actions .ck-button.ck-link-actions__preview:focus .ck-button__label{text-decoration:underline}[dir=ltr] .ck.ck-link-actions .ck-button:not(:first-child),[dir=rtl] .ck.ck-link-actions .ck-button:not(:last-child){margin-left:var(--ck-spacing-standard)}@media screen and (max-width:600px){.ck.ck-link-actions .ck-button.ck-link-actions__preview{margin:var(--ck-spacing-standard) var(--ck-spacing-standard) 0}.ck.ck-link-actions .ck-button.ck-link-actions__preview .ck-button__label{max-width:100%;min-width:0}[dir=ltr] .ck.ck-link-actions .ck-button:not(.ck-link-actions__preview),[dir=rtl] .ck.ck-link-actions .ck-button:not(.ck-link-actions__preview){margin-left:0}}","",{version:3,sources:["webpack://./../ckeditor5-link/theme/linkactions.css","webpack://./../ckeditor5-ui/theme/mixins/_rwd.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-link/linkactions.css"],names:[],mappings:"AAOA,oBACC,YAAa,CACb,kBAAmB,CACnB,gBAqBD,CAnBC,8CACC,oBAKD,CAHC,gEACC,eACD,CCXD,oCDCD,oBAcE,cAUF,CARE,8CACC,eACD,CAEA,8DACC,cACD,CCrBD,CCIA,wDACC,cAAe,CACf,eAmCD,CAjCC,0EAEC,kCAAmC,CAEnC,cAAe,CAIf,+BAAgC,CAChC,aAAc,CARd,kCAAmC,CASnC,iBAAkB,CAPlB,sBAYD,CAHC,gFACC,yBACD,CAGD,mPAIC,eACD,CAEA,+DACC,eACD,CAGC,gFACC,yBACD,CAWD,qHACC,sCACD,CDtDD,oCC0DC,wDACC,8DAMD,CAJC,0EAEC,cAAe,CADf,WAED,CAGD,gJAME,aAEF,CDzED",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_rwd.css";

.ck.ck-link-actions {
	display: flex;
	flex-direction: row;
	flex-wrap: nowrap;

	& .ck-link-actions__preview {
		display: inline-block;

		& .ck-button__label {
			overflow: hidden;
		}
	}

	@mixin ck-media-phone {
		flex-wrap: wrap;

		& .ck-link-actions__preview {
			flex-basis: 100%;
		}

		& .ck-button:not(.ck-link-actions__preview) {
			flex-basis: 50%;
		}
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@define-mixin ck-media-phone {
	@media screen and (max-width: 600px) {
		@mixin-content;
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_unselectable.css";
@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";
@import "../mixins/_focus.css";
@import "../mixins/_shadow.css";
@import "@ckeditor/ckeditor5-ui/theme/mixins/_rwd.css";

.ck.ck-link-actions {
	& .ck-button.ck-link-actions__preview {
		padding-left: 0;
		padding-right: 0;

		& .ck-button__label {
			padding: 0 var(--ck-spacing-medium);
			color: var(--ck-color-link-default);
			text-overflow: ellipsis;
			cursor: pointer;

			/* Match the box model of the link editor form's input so the balloon
			does not change width when moving between actions and the form. */
			max-width: var(--ck-input-width);
			min-width: 3em;
			text-align: center;

			&:hover {
				text-decoration: underline;
			}
		}

		&,
		&:hover,
		&:focus,
		&:active {
			background: none;
		}

		&:active {
			box-shadow: none;
		}

		&:focus {
			& .ck-button__label {
				text-decoration: underline;
			}
		}
	}

	@mixin ck-dir ltr {
		& .ck-button:not(:first-child) {
			margin-left: var(--ck-spacing-standard);
		}
	}

	@mixin ck-dir rtl {
		& .ck-button:not(:last-child) {
			margin-left: var(--ck-spacing-standard);
		}
	}

	@mixin ck-media-phone {
		& .ck-button.ck-link-actions__preview {
			margin: var(--ck-spacing-standard) var(--ck-spacing-standard) 0;

			& .ck-button__label {
				min-width: 0;
				max-width: 100%;
			}
		}

		& .ck-button:not(.ck-link-actions__preview) {
			@mixin ck-dir ltr {
				margin-left: 0;
			}

			@mixin ck-dir rtl {
				margin-left: 0;
			}
		}
	}
}
`],sourceRoot:""}]);const S=y},3817:(f,b,m)=>{m.d(b,{A:()=>S});var v=m(9372),A=m.n(v),x=m(935),y=m.n(x)()(A());y.push([f.id,".ck.ck-link-form{align-items:flex-start;display:flex}.ck.ck-link-form .ck-label{display:none}@media screen and (max-width:600px){.ck.ck-link-form{flex-wrap:wrap}.ck.ck-link-form .ck-labeled-field-view{flex-basis:100%}.ck.ck-link-form .ck-button{flex-basis:50%}}.ck.ck-link-form_layout-vertical{display:block}.ck.ck-link-form_layout-vertical .ck-button.ck-button-cancel,.ck.ck-link-form_layout-vertical .ck-button.ck-button-save{margin-top:var(--ck-spacing-medium)}.ck.ck-link-form_layout-vertical{min-width:var(--ck-input-width);padding:0}.ck.ck-link-form_layout-vertical .ck-labeled-field-view{margin:var(--ck-spacing-large) var(--ck-spacing-large) var(--ck-spacing-small)}.ck.ck-link-form_layout-vertical .ck-labeled-field-view .ck-input-text{min-width:0;width:100%}.ck.ck-link-form_layout-vertical>.ck-button{border-radius:0;margin:0;padding:var(--ck-spacing-standard);width:50%}.ck.ck-link-form_layout-vertical>.ck-button:not(:focus){border-top:1px solid var(--ck-color-base-border)}[dir=ltr] .ck.ck-link-form_layout-vertical>.ck-button,[dir=rtl] .ck.ck-link-form_layout-vertical>.ck-button{margin-left:0}[dir=rtl] .ck.ck-link-form_layout-vertical>.ck-button:last-of-type{border-right:1px solid var(--ck-color-base-border)}.ck.ck-link-form_layout-vertical .ck.ck-list{margin:var(--ck-spacing-standard) var(--ck-spacing-large)}.ck.ck-link-form_layout-vertical .ck.ck-list .ck-button.ck-switchbutton{padding:0;width:100%}.ck.ck-link-form_layout-vertical .ck.ck-list .ck-button.ck-switchbutton:hover{background:none}","",{version:3,sources:["webpack://./../ckeditor5-link/theme/linkform.css","webpack://./../ckeditor5-ui/theme/mixins/_rwd.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-link/linkform.css"],names:[],mappings:"AAOA,iBAEC,sBAAuB,CADvB,YAkBD,CAfC,2BACC,YACD,CCPA,oCDCD,iBASE,cAUF,CARE,wCACC,eACD,CAEA,4BACC,cACD,CChBD,CDwBD,iCACC,aAYD,CALE,wHAEC,mCACD,CEhCF,iCAEC,+BAAgC,CADhC,SAgDD,CA7CC,wDACC,8EAMD,CAJC,uEACC,WAAY,CACZ,UACD,CAGD,4CAIC,eAAgB,CAFhB,QAAS,CADT,kCAAmC,CAEnC,SAkBD,CAfC,wDACC,gDACD,CARD,4GAeE,aAMF,CAJE,mEACC,kDACD,CAKF,6CACC,yDAUD,CARC,wEACC,SAAU,CACV,UAKD,CAHC,8EACC,eACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_rwd.css";

.ck.ck-link-form {
	display: flex;
	align-items: flex-start;

	& .ck-label {
		display: none;
	}

	@mixin ck-media-phone {
		flex-wrap: wrap;

		& .ck-labeled-field-view {
			flex-basis: 100%;
		}

		& .ck-button {
			flex-basis: 50%;
		}
	}
}

/*
 * Style link form differently when manual decorators are available.
 * See: https://github.com/ckeditor/ckeditor5-link/issues/186.
 */
.ck.ck-link-form_layout-vertical {
	display: block;

	/*
	 * Whether the form is in the responsive mode or not, if there are decorator buttons
	 * keep the top margin of action buttons medium.
	 */
	& .ck-button {
		&.ck-button-save,
		&.ck-button-cancel {
			margin-top: var(--ck-spacing-medium);
		}
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@define-mixin ck-media-phone {
	@media screen and (max-width: 600px) {
		@mixin-content;
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

/*
 * Style link form differently when manual decorators are available.
 * See: https://github.com/ckeditor/ckeditor5-link/issues/186.
 */
.ck.ck-link-form_layout-vertical {
	padding: 0;
	min-width: var(--ck-input-width);

	& .ck-labeled-field-view {
		margin: var(--ck-spacing-large) var(--ck-spacing-large) var(--ck-spacing-small);

		& .ck-input-text {
			min-width: 0;
			width: 100%;
		}
	}

	& > .ck-button {
		padding: var(--ck-spacing-standard);
		margin: 0;
		width: 50%;
		border-radius: 0;

		&:not(:focus) {
			border-top: 1px solid var(--ck-color-base-border);
		}

		@mixin ck-dir ltr {
			margin-left: 0;
		}

		@mixin ck-dir rtl {
			margin-left: 0;

			&:last-of-type {
				border-right: 1px solid var(--ck-color-base-border);
			}
		}
	}

	/* Using additional \`.ck\` class for stronger CSS specificity than \`.ck.ck-link-form > :not(:first-child)\`. */
	& .ck.ck-list {
		margin: var(--ck-spacing-standard) var(--ck-spacing-large);

		& .ck-button.ck-switchbutton {
			padding: 0;
			width: 100%;

			&:hover {
				background: none;
			}
		}
	}
}
`],sourceRoot:""}]);const S=y},4808:(f,b,m)=>{m.d(b,{A:()=>S});var v=m(9372),A=m.n(v),x=m(935),y=m.n(x)()(A());y.push([f.id,'.ck.ck-editor__editable a span.image-inline:after,.ck.ck-editor__editable figure.image>a:after{display:block;position:absolute}:root{--ck-link-image-indicator-icon-size:20;--ck-link-image-indicator-icon-is-visible:clamp(0px,100% - 50px,1px)}.ck.ck-editor__editable a span.image-inline:after,.ck.ck-editor__editable figure.image>a:after{background-color:rgba(0,0,0,.4);background-image:url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyMCAyMCI+PHBhdGggZmlsbD0iI2ZmZiIgZD0ibTExLjA3NyAxNSAuOTkxLTEuNDE2YS43NS43NSAwIDEgMSAxLjIyOS44NmwtMS4xNDggMS42NGEuNzUuNzUgMCAwIDEtLjIxNy4yMDYgNS4yNTEgNS4yNTEgMCAwIDEtOC41MDMtNS45NTUuNy43IDAgMCAxIC4xMi0uMjc0bDEuMTQ3LTEuNjM5YS43NS43NSAwIDEgMSAxLjIyOC44Nkw0LjkzMyAxMC43bC4wMDYuMDAzYTMuNzUgMy43NSAwIDAgMCA2LjEzMiA0LjI5NHptNS40OTQtNS4zMzVhLjc1Ljc1IDAgMCAxLS4xMi4yNzRsLTEuMTQ3IDEuNjM5YS43NS43NSAwIDEgMS0xLjIyOC0uODZsLjg2LTEuMjNhMy43NSAzLjc1IDAgMCAwLTYuMTQ0LTQuMzAxbC0uODYgMS4yMjlhLjc1Ljc1IDAgMCAxLTEuMjI5LS44NmwxLjE0OC0xLjY0YS43NS43NSAwIDAgMSAuMjE3LS4yMDYgNS4yNTEgNS4yNTEgMCAwIDEgOC41MDMgNS45NTVtLTQuNTYzLTIuNTMyYS43NS43NSAwIDAgMSAuMTg0IDEuMDQ1bC0zLjE1NSA0LjUwNWEuNzUuNzUgMCAxIDEtMS4yMjktLjg2bDMuMTU1LTQuNTA2YS43NS43NSAwIDAgMSAxLjA0NS0uMTg0Ii8+PC9zdmc+");background-position:50%;background-repeat:no-repeat;background-size:14px;border-radius:100%;content:"";height:calc(var(--ck-link-image-indicator-icon-is-visible)*var(--ck-link-image-indicator-icon-size));overflow:hidden;right:min(var(--ck-spacing-medium),6%);top:min(var(--ck-spacing-medium),6%);width:calc(var(--ck-link-image-indicator-icon-is-visible)*var(--ck-link-image-indicator-icon-size))}',"",{version:3,sources:["webpack://./../ckeditor5-link/theme/linkimage.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-link/linkimage.css"],names:[],mappings:"AASE,+FACC,aAAc,CACd,iBACD,CCPF,MAEC,sCAAuC,CACvC,oEACD,CAME,+FAUC,+BAAqC,CACrC,k2BAA+3B,CAG/3B,uBAA2B,CAD3B,2BAA4B,CAD5B,oBAAqB,CAGrB,kBAAmB,CAdnB,UAAW,CAsBX,oGAAuG,CAFvG,eAAgB,CAbhB,sCAAwC,CADxC,oCAAsC,CAetC,mGAED",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-editor__editable {
	/* Linked image indicator */
	& figure.image > a,
	& a span.image-inline {
		&::after {
			display: block;
			position: absolute;
		}
	}
}

`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	/* Match the icon size with the upload indicator brought by the image upload feature. */
	--ck-link-image-indicator-icon-size: 20;
	--ck-link-image-indicator-icon-is-visible: clamp(0px, 100% - 50px, 1px);
}

.ck.ck-editor__editable {
	/* Linked image indicator */
	& figure.image > a,
	& a span.image-inline {
		&::after {
			content: "";

			/*
			 * Smaller images should have the icon closer to the border.
			 * Match the icon position with the upload indicator brought by the image upload feature.
			 */
			top: min(var(--ck-spacing-medium), 6%);
			right: min(var(--ck-spacing-medium), 6%);

			background-color: hsla(0, 0%, 0%, .4);
			background-image: url("data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjAgMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZmlsbD0iI2ZmZiIgZD0ibTExLjA3NyAxNSAuOTkxLTEuNDE2YS43NS43NSAwIDEgMSAxLjIyOS44NmwtMS4xNDggMS42NGEuNzQ4Ljc0OCAwIDAgMS0uMjE3LjIwNiA1LjI1MSA1LjI1MSAwIDAgMS04LjUwMy01Ljk1NS43NDEuNzQxIDAgMCAxIC4xMi0uMjc0bDEuMTQ3LTEuNjM5YS43NS43NSAwIDEgMSAxLjIyOC44Nkw0LjkzMyAxMC43bC4wMDYuMDAzYTMuNzUgMy43NSAwIDAgMCA2LjEzMiA0LjI5NGwuMDA2LjAwNHptNS40OTQtNS4zMzVhLjc0OC43NDggMCAwIDEtLjEyLjI3NGwtMS4xNDcgMS42MzlhLjc1Ljc1IDAgMSAxLTEuMjI4LS44NmwuODYtMS4yM2EzLjc1IDMuNzUgMCAwIDAtNi4xNDQtNC4zMDFsLS44NiAxLjIyOWEuNzUuNzUgMCAwIDEtMS4yMjktLjg2bDEuMTQ4LTEuNjRhLjc0OC43NDggMCAwIDEgLjIxNy0uMjA2IDUuMjUxIDUuMjUxIDAgMCAxIDguNTAzIDUuOTU1em0tNC41NjMtMi41MzJhLjc1Ljc1IDAgMCAxIC4xODQgMS4wNDVsLTMuMTU1IDQuNTA1YS43NS43NSAwIDEgMS0xLjIyOS0uODZsMy4xNTUtNC41MDZhLjc1Ljc1IDAgMCAxIDEuMDQ1LS4xODR6Ii8+PC9zdmc+");
			background-size: 14px;
			background-repeat: no-repeat;
			background-position: center;
			border-radius: 100%;

			/*
			* Use CSS math to simulate container queries.
			* https://css-tricks.com/the-raven-technique-one-step-closer-to-container-queries/#what-about-showing-and-hiding-things
			*/
			overflow: hidden;
			width: calc(var(--ck-link-image-indicator-icon-is-visible) * var(--ck-link-image-indicator-icon-size));
			height: calc(var(--ck-link-image-indicator-icon-is-visible) * var(--ck-link-image-indicator-icon-size));
		}
	}
}

`],sourceRoot:""}]);const S=y},1232:(f,b,m)=>{m.d(b,{A:()=>S});var v=m(9372),A=m.n(v),x=m(935),y=m.n(x)()(A());y.push([f.id,".ck-editor__editable .ck-list-bogus-paragraph{display:block}","",{version:3,sources:["webpack://./../ckeditor5-list/theme/documentlist.css"],names:[],mappings:"AAKA,8CACC,aACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck-editor__editable .ck-list-bogus-paragraph {
	display: block;
}
`],sourceRoot:""}]);const S=y},6903:(f,b,m)=>{m.d(b,{A:()=>S});var v=m(9372),A=m.n(v),x=m(935),y=m.n(x)()(A());y.push([f.id,".ck-content ol{list-style-type:decimal}.ck-content ol ol{list-style-type:lower-latin}.ck-content ol ol ol{list-style-type:lower-roman}.ck-content ol ol ol ol{list-style-type:upper-latin}.ck-content ol ol ol ol ol{list-style-type:upper-roman}.ck-content ul{list-style-type:disc}.ck-content ul ul{list-style-type:circle}.ck-content ul ul ul,.ck-content ul ul ul ul{list-style-type:square}","",{version:3,sources:["webpack://./../ckeditor5-list/theme/list.css"],names:[],mappings:"AAKA,eACC,uBAiBD,CAfC,kBACC,2BAaD,CAXC,qBACC,2BASD,CAPC,wBACC,2BAKD,CAHC,2BACC,2BACD,CAMJ,eACC,oBAaD,CAXC,kBACC,sBASD,CAJE,6CACC,sBACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck-content ol {
	list-style-type: decimal;

	& ol {
		list-style-type: lower-latin;

		& ol {
			list-style-type: lower-roman;

			& ol {
				list-style-type: upper-latin;

				& ol {
					list-style-type: upper-roman;
				}
			}
		}
	}
}

.ck-content ul {
	list-style-type: disc;

	& ul {
		list-style-type: circle;

		& ul {
			list-style-type: square;

			& ul {
				list-style-type: square;
			}
		}
	}
}
`],sourceRoot:""}]);const S=y},9968:(f,b,m)=>{m.d(b,{A:()=>S});var v=m(9372),A=m.n(v),x=m(935),y=m.n(x)()(A());y.push([f.id,".ck.ck-list-properties.ck-list-properties_without-styles{padding:var(--ck-spacing-large)}.ck.ck-list-properties.ck-list-properties_without-styles>*{min-width:14em}.ck.ck-list-properties.ck-list-properties_without-styles>*+*{margin-top:var(--ck-spacing-standard)}.ck.ck-list-properties.ck-list-properties_with-numbered-properties>.ck-list-styles-list{grid-template-columns:repeat(4,auto)}.ck.ck-list-properties.ck-list-properties_with-numbered-properties>.ck-collapsible{border-top:1px solid var(--ck-color-base-border)}.ck.ck-list-properties.ck-list-properties_with-numbered-properties>.ck-collapsible>.ck-collapsible__children>*{width:100%}.ck.ck-list-properties.ck-list-properties_with-numbered-properties>.ck-collapsible>.ck-collapsible__children>*+*{margin-top:var(--ck-spacing-standard)}.ck.ck-list-properties .ck.ck-numbered-list-properties__start-index .ck-input{min-width:auto;width:100%}.ck.ck-list-properties .ck.ck-numbered-list-properties__reversed-order{background:transparent;margin-bottom:calc(var(--ck-spacing-tiny)*-1);padding-left:0;padding-right:0}.ck.ck-list-properties .ck.ck-numbered-list-properties__reversed-order:active,.ck.ck-list-properties .ck.ck-numbered-list-properties__reversed-order:hover{background:none;border-color:transparent;box-shadow:none}","",{version:3,sources:["webpack://./../ckeditor5-theme-lark/theme/ckeditor5-list/listproperties.css"],names:[],mappings:"AAOC,yDACC,+BASD,CAPC,2DACC,cAKD,CAHC,6DACC,qCACD,CASD,wFACC,oCACD,CAGA,mFACC,gDAWD,CARE,+GACC,UAKD,CAHC,iHACC,qCACD,CAMJ,8EACC,cAAe,CACf,UACD,CAEA,uEACC,sBAAuB,CAGvB,6CAAgD,CAFhD,cAAe,CACf,eAQD,CALC,2JAGC,eAAgB,CADhB,wBAAyB,CADzB,eAGD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-list-properties {
	/* When there are no list styles and there is no collapsible. */
	&.ck-list-properties_without-styles {
		padding: var(--ck-spacing-large);

		& > * {
			min-width: 14em;

			& + * {
				margin-top: var(--ck-spacing-standard);
			}
		}
	}

	/*
	 * When the numbered list property fields (start at, reversed) should be displayed,
	 * more horizontal space is needed. Reconfigure the style grid to create that space.
	 */
	&.ck-list-properties_with-numbered-properties {
		& > .ck-list-styles-list {
			grid-template-columns: repeat( 4, auto );
		}

		/* When list styles are rendered and property fields are in a collapsible. */
		& > .ck-collapsible {
			border-top: 1px solid var(--ck-color-base-border);

			& > .ck-collapsible__children {
				& > * {
					width: 100%;

					& + * {
						margin-top: var(--ck-spacing-standard);
					}
				}
			}
		}
	}

	& .ck.ck-numbered-list-properties__start-index .ck-input {
		min-width: auto;
		width: 100%;
	}

	& .ck.ck-numbered-list-properties__reversed-order {
		background: transparent;
		padding-left: 0;
		padding-right: 0;
		margin-bottom: calc(-1 * var(--ck-spacing-tiny));

		&:active, &:hover {
			box-shadow: none;
			border-color: transparent;
			background: none;
		}
	}
}
`],sourceRoot:""}]);const S=y},7141:(f,b,m)=>{m.d(b,{A:()=>S});var v=m(9372),A=m.n(v),x=m(935),y=m.n(x)()(A());y.push([f.id,".ck.ck-list-styles-list{display:grid}:root{--ck-list-style-button-size:44px}.ck.ck-list-styles-list{column-gap:var(--ck-spacing-medium);grid-template-columns:repeat(3,auto);padding:var(--ck-spacing-large);row-gap:var(--ck-spacing-medium)}.ck.ck-list-styles-list .ck-button{box-sizing:content-box;margin:0;padding:0}.ck.ck-list-styles-list .ck-button,.ck.ck-list-styles-list .ck-button .ck-icon{height:var(--ck-list-style-button-size);width:var(--ck-list-style-button-size)}","",{version:3,sources:["webpack://./../ckeditor5-list/theme/liststyles.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-list/liststyles.css"],names:[],mappings:"AAKA,wBACC,YACD,CCFA,MACC,gCACD,CAEA,wBAGC,mCAAoC,CAFpC,oCAAwC,CAGxC,+BAAgC,CAFhC,gCA4BD,CAxBC,mCAiBC,sBAAuB,CAPvB,QAAS,CANT,SAmBD,CAJC,+EAhBA,uCAAwC,CADxC,sCAoBA",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-list-styles-list {
	display: grid;
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-list-style-button-size: 44px;
}

.ck.ck-list-styles-list {
	grid-template-columns: repeat( 3, auto );
	row-gap: var(--ck-spacing-medium);
	column-gap: var(--ck-spacing-medium);
	padding: var(--ck-spacing-large);

	& .ck-button {
		/* Make the button look like a thumbnail (the icon "takes it all"). */
		width: var(--ck-list-style-button-size);
		height: var(--ck-list-style-button-size);
		padding: 0;

		/*
		 * Buttons are aligned by the grid so disable default button margins to not collide with the
		 * gaps in the grid.
		 */
		margin: 0;

		/*
		 * Make sure the button border (which is displayed on focus, BTW) does not steal pixels
		 * from the button dimensions and, as a result, decrease the size of the icon
		 * (which becomes blurry as it scales down).
		 */
		box-sizing: content-box;

		& .ck-icon {
			width: var(--ck-list-style-button-size);
			height: var(--ck-list-style-button-size);
		}
	}
}
`],sourceRoot:""}]);const S=y},8991:(f,b,m)=>{m.d(b,{A:()=>S});var v=m(9372),A=m.n(v),x=m(935),y=m.n(x)()(A());y.push([f.id,':root{--ck-todo-list-checkmark-size:16px}.ck-content .todo-list{list-style:none}.ck-content .todo-list li{margin-bottom:5px;position:relative}.ck-content .todo-list li .todo-list{margin-top:5px}.ck-content .todo-list .todo-list__label>input{-webkit-appearance:none;border:0;display:inline-block;height:var(--ck-todo-list-checkmark-size);left:-25px;margin-left:0;margin-right:-15px;position:relative;right:0;vertical-align:middle;width:var(--ck-todo-list-checkmark-size)}.ck-content[dir=rtl] .todo-list .todo-list__label>input{left:0;margin-left:-15px;margin-right:0;right:-25px}.ck-content .todo-list .todo-list__label>input:before{border:1px solid #333;border-radius:2px;box-sizing:border-box;content:"";display:block;height:100%;position:absolute;transition:box-shadow .25s ease-in-out;width:100%}@media (prefers-reduced-motion:reduce){.ck-content .todo-list .todo-list__label>input:before{transition:none}}.ck-content .todo-list .todo-list__label>input:after{border-color:transparent;border-style:solid;border-width:0 calc(var(--ck-todo-list-checkmark-size)/8) calc(var(--ck-todo-list-checkmark-size)/8) 0;box-sizing:content-box;content:"";display:block;height:calc(var(--ck-todo-list-checkmark-size)/2.6);left:calc(var(--ck-todo-list-checkmark-size)/3);pointer-events:none;position:absolute;top:calc(var(--ck-todo-list-checkmark-size)/5.3);transform:rotate(45deg);width:calc(var(--ck-todo-list-checkmark-size)/5.3)}.ck-content .todo-list .todo-list__label>input[checked]:before{background:#26ab33;border-color:#26ab33}.ck-content .todo-list .todo-list__label>input[checked]:after{border-color:#fff}.ck-content .todo-list .todo-list__label .todo-list__label__description{vertical-align:middle}.ck-content .todo-list .todo-list__label.todo-list__label_without-description input[type=checkbox]{position:absolute}.ck-editor__editable.ck-content .todo-list .todo-list__label>input,.ck-editor__editable.ck-content .todo-list .todo-list__label>span[contenteditable=false]>input{cursor:pointer}.ck-editor__editable.ck-content .todo-list .todo-list__label>input:hover:before,.ck-editor__editable.ck-content .todo-list .todo-list__label>span[contenteditable=false]>input:hover:before{box-shadow:0 0 0 5px rgba(0,0,0,.1)}.ck-editor__editable.ck-content .todo-list .todo-list__label>span[contenteditable=false]>input{-webkit-appearance:none;border:0;display:inline-block;height:var(--ck-todo-list-checkmark-size);left:-25px;margin-left:0;margin-right:-15px;position:relative;right:0;vertical-align:middle;width:var(--ck-todo-list-checkmark-size)}.ck-editor__editable.ck-content[dir=rtl] .todo-list .todo-list__label>span[contenteditable=false]>input{left:0;margin-left:-15px;margin-right:0;right:-25px}.ck-editor__editable.ck-content .todo-list .todo-list__label>span[contenteditable=false]>input:before{border:1px solid #333;border-radius:2px;box-sizing:border-box;content:"";display:block;height:100%;position:absolute;transition:box-shadow .25s ease-in-out;width:100%}@media (prefers-reduced-motion:reduce){.ck-editor__editable.ck-content .todo-list .todo-list__label>span[contenteditable=false]>input:before{transition:none}}.ck-editor__editable.ck-content .todo-list .todo-list__label>span[contenteditable=false]>input:after{border-color:transparent;border-style:solid;border-width:0 calc(var(--ck-todo-list-checkmark-size)/8) calc(var(--ck-todo-list-checkmark-size)/8) 0;box-sizing:content-box;content:"";display:block;height:calc(var(--ck-todo-list-checkmark-size)/2.6);left:calc(var(--ck-todo-list-checkmark-size)/3);pointer-events:none;position:absolute;top:calc(var(--ck-todo-list-checkmark-size)/5.3);transform:rotate(45deg);width:calc(var(--ck-todo-list-checkmark-size)/5.3)}.ck-editor__editable.ck-content .todo-list .todo-list__label>span[contenteditable=false]>input[checked]:before{background:#26ab33;border-color:#26ab33}.ck-editor__editable.ck-content .todo-list .todo-list__label>span[contenteditable=false]>input[checked]:after{border-color:#fff}.ck-editor__editable.ck-content .todo-list .todo-list__label.todo-list__label_without-description input[type=checkbox]{position:absolute}',"",{version:3,sources:["webpack://./../ckeditor5-list/theme/todolist.css"],names:[],mappings:"AAKA,MACC,kCACD,CA4EA,uBACC,eAwBD,CAtBC,0BAEC,iBAAkB,CADlB,iBAMD,CAHC,qCACC,cACD,CAIA,+CAtFD,uBAAwB,CAQxB,QAAS,CAPT,oBAAqB,CAGrB,yCAA0C,CAO1C,UAAW,CAGX,aAAc,CAFd,kBAAmB,CAVnB,iBAAkB,CAWlB,OAAQ,CARR,qBAAsB,CAFtB,wCAqFC,CAFA,wDApEA,MAAO,CAGP,iBAAkB,CAFlB,cAAe,CACf,WAoEA,CAhED,sDAOC,qBAAiC,CACjC,iBAAkB,CALlB,qBAAsB,CACtB,UAAW,CAHX,aAAc,CAKd,WAAY,CAJZ,iBAAkB,CAOlB,sCAAwC,CAJxC,UASD,CAHC,uCAXD,sDAYE,eAEF,CADC,CAGD,qDAaC,wBAAyB,CADzB,kBAAmB,CAEnB,sGAA+G,CAX/G,sBAAuB,CAEvB,UAAW,CAJX,aAAc,CAUd,mDAAwD,CAHxD,+CAAoD,CAJpD,mBAAoB,CAFpB,iBAAkB,CAOlB,gDAAqD,CAMrD,uBAAwB,CALxB,kDAMD,CAGC,+DACC,kBAA8B,CAC9B,oBACD,CAEA,8DACC,iBACD,CAwBA,wEACC,qBACD,CAEA,mGACC,iBACD,CAYD,kKAEC,cAKD,CAHC,4LACC,mCACD,CAMD,+FAxHA,uBAAwB,CAQxB,QAAS,CAPT,oBAAqB,CAGrB,yCAA0C,CAO1C,UAAW,CAGX,aAAc,CAFd,kBAAmB,CAVnB,iBAAkB,CAWlB,OAAQ,CARR,qBAAsB,CAFtB,wCAuHA,CAFA,wGAtGC,MAAO,CAGP,iBAAkB,CAFlB,cAAe,CACf,WAsGD,CAlGA,sGAOC,qBAAiC,CACjC,iBAAkB,CALlB,qBAAsB,CACtB,UAAW,CAHX,aAAc,CAKd,WAAY,CAJZ,iBAAkB,CAOlB,sCAAwC,CAJxC,UASD,CAHC,uCAXD,sGAYE,eAEF,CADC,CAGD,qGAaC,wBAAyB,CADzB,kBAAmB,CAEnB,sGAA+G,CAX/G,sBAAuB,CAEvB,UAAW,CAJX,aAAc,CAUd,mDAAwD,CAHxD,+CAAoD,CAJpD,mBAAoB,CAFpB,iBAAkB,CAOlB,gDAAqD,CAMrD,uBAAwB,CALxB,kDAMD,CAGC,+GACC,kBAA8B,CAC9B,oBACD,CAEA,8GACC,iBACD,CA2DA,uHACC,iBACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-todo-list-checkmark-size: 16px;
}

@define-mixin todo-list-checkbox {
	-webkit-appearance: none;
	display: inline-block;
	position: relative;
	width: var(--ck-todo-list-checkmark-size);
	height: var(--ck-todo-list-checkmark-size);
	vertical-align: middle;

	/* Needed on iOS */
	border: 0;

	/* LTR styles */
	left: -25px;
	margin-right: -15px;
	right: 0;
	margin-left: 0;

	/* RTL styles */
	@nest [dir=rtl]& {
		left: 0;
		margin-right: 0;
		right: -25px;
		margin-left: -15px;
	}

	&::before {
		display: block;
		position: absolute;
		box-sizing: border-box;
		content: '';
		width: 100%;
		height: 100%;
		border: 1px solid hsl(0, 0%, 20%);
		border-radius: 2px;
		transition: 250ms ease-in-out box-shadow;

		@media (prefers-reduced-motion: reduce) {
			transition: none;
		}
	}

	&::after {
		display: block;
		position: absolute;
		box-sizing: content-box;
		pointer-events: none;
		content: '';

		/* Calculate tick position, size and border-width proportional to the checkmark size. */
		left: calc( var(--ck-todo-list-checkmark-size) / 3 );
		top: calc( var(--ck-todo-list-checkmark-size) / 5.3 );
		width: calc( var(--ck-todo-list-checkmark-size) / 5.3 );
		height: calc( var(--ck-todo-list-checkmark-size) / 2.6 );
		border-style: solid;
		border-color: transparent;
		border-width: 0 calc( var(--ck-todo-list-checkmark-size) / 8 ) calc( var(--ck-todo-list-checkmark-size) / 8 ) 0;
		transform: rotate(45deg);
	}

	&[checked] {
		&::before {
			background: hsl(126, 64%, 41%);
			border-color: hsl(126, 64%, 41%);
		}

		&::after {
			border-color: hsl(0, 0%, 100%);
		}
	}
}

/*
 * To-do list content styles.
 */
.ck-content .todo-list {
	list-style: none;

	& li {
		position: relative;
		margin-bottom: 5px;

		& .todo-list {
			margin-top: 5px;
		}
	}

	& .todo-list__label {
		& > input {
			@mixin todo-list-checkbox;
		}

		& .todo-list__label__description {
			vertical-align: middle;
		}

		&.todo-list__label_without-description input[type=checkbox] {
			position: absolute;
		}
	}
}

/*
 * To-do list editing view styles.
 */
.ck-editor__editable.ck-content .todo-list .todo-list__label {
	/*
	 * To-do list should be interactive only during the editing
	 * (https://github.com/ckeditor/ckeditor5/issues/2090).
	 */
	& > input,
	& > span[contenteditable=false] > input {
		cursor: pointer;

		&:hover::before {
			box-shadow: 0 0 0 5px hsla(0, 0%, 0%, 0.1);
		}
	}

	/*
	 * Document Lists - editing view has an additional span around checkbox.
	 */
	& > span[contenteditable=false] > input {
		@mixin todo-list-checkbox;
	}

	&.todo-list__label_without-description {
		& input[type=checkbox] {
			position: absolute;
		}
	}
}
`],sourceRoot:""}]);const S=y},70:(f,b,m)=>{m.d(b,{A:()=>S});var v=m(9372),A=m.n(v),x=m(935),y=m.n(x)()(A());y.push([f.id,".ck-content .media{clear:both;display:block;margin:.9em 0;min-width:15em}","",{version:3,sources:["webpack://./../ckeditor5-media-embed/theme/mediaembed.css"],names:[],mappings:"AAKA,mBAGC,UAAW,CASX,aAAc,CAJd,aAAe,CAQf,cACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck-content .media {
	/* Don't allow floated content overlap the media.
	https://github.com/ckeditor/ckeditor5-media-embed/issues/53 */
	clear: both;

	/* Make sure there is some space between the content and the media. */
	/* The first value should be equal to --ck-spacing-large variable if used in the editor context
	to avoid the content jumping (See https://github.com/ckeditor/ckeditor5/issues/9825). */
	margin: 0.9em 0;

	/* Make sure media is not overriden with Bootstrap default \`flex\` value.
	See: https://github.com/ckeditor/ckeditor5/issues/1373. */
	display: block;

	/* Give the media some minimal width in the content to prevent them
	from being "squashed" in tight spaces, e.g. in table cells (#44) */
	min-width: 15em;
}
`],sourceRoot:""}]);const S=y},7048:(f,b,m)=>{m.d(b,{A:()=>S});var v=m(9372),A=m.n(v),x=m(935),y=m.n(x)()(A());y.push([f.id,'.ck-media__wrapper .ck-media__placeholder{align-items:center;display:flex;flex-direction:column}.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__url{max-width:100%;position:relative}.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__url .ck-media__placeholder__url__text{display:block;overflow:hidden}.ck-media__wrapper[data-oembed-url*="facebook.com"] .ck-media__placeholder__icon *,.ck-media__wrapper[data-oembed-url*="goo.gl/maps"] .ck-media__placeholder__icon *,.ck-media__wrapper[data-oembed-url*="google.com/maps"] .ck-media__placeholder__icon *,.ck-media__wrapper[data-oembed-url*="instagram.com"] .ck-media__placeholder__icon *,.ck-media__wrapper[data-oembed-url*="maps.app.goo.gl"] .ck-media__placeholder__icon *,.ck-media__wrapper[data-oembed-url*="maps.google.com"] .ck-media__placeholder__icon *,.ck-media__wrapper[data-oembed-url*="twitter.com"] .ck-media__placeholder__icon *{display:none}.ck-editor__editable:not(.ck-read-only) .ck-media__wrapper>:not(.ck-media__placeholder),.ck-editor__editable:not(.ck-read-only) .ck-widget:not(.ck-widget_selected) .ck-media__placeholder{pointer-events:none}:root{--ck-media-embed-placeholder-icon-size:3em;--ck-color-media-embed-placeholder-url-text:#757575;--ck-color-media-embed-placeholder-url-text-hover:var(--ck-color-base-text)}.ck-media__wrapper{margin:0 auto}.ck-media__wrapper .ck-media__placeholder{background:var(--ck-color-base-foreground);padding:calc(var(--ck-spacing-standard)*3)}.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__icon{background-position:50%;background-size:cover;height:var(--ck-media-embed-placeholder-icon-size);margin-bottom:var(--ck-spacing-large);min-width:var(--ck-media-embed-placeholder-icon-size)}.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__icon .ck-icon{height:100%;width:100%}.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__url__text{color:var(--ck-color-media-embed-placeholder-url-text);font-style:italic;text-align:center;text-overflow:ellipsis;white-space:nowrap}.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__url__text:hover{color:var(--ck-color-media-embed-placeholder-url-text-hover);cursor:pointer;text-decoration:underline}.ck-media__wrapper[data-oembed-url*="open.spotify.com"]{max-height:380px;max-width:300px}.ck-media__wrapper[data-oembed-url*="goo.gl/maps"] .ck-media__placeholder__icon,.ck-media__wrapper[data-oembed-url*="google.com/maps"] .ck-media__placeholder__icon,.ck-media__wrapper[data-oembed-url*="maps.app.goo.gl"] .ck-media__placeholder__icon,.ck-media__wrapper[data-oembed-url*="maps.google.com"] .ck-media__placeholder__icon{background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNTAuMzc4IiBoZWlnaHQ9IjI1NC4xNjciIHZpZXdCb3g9IjAgMCA2Ni4yNDYgNjcuMjQ4Ij48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTcyLjUzMSAtMjE4LjQ1NSlzY2FsZSguOTgwMTIpIj48cmVjdCB3aWR0aD0iNjAuMDk5IiBoZWlnaHQ9IjYwLjA5OSIgeD0iMTc2LjAzMSIgeT0iMjMxLjM5OSIgZmlsbD0iIzM0YTY2OCIgcGFpbnQtb3JkZXI9Im1hcmtlcnMgc3Ryb2tlIGZpbGwiIHJ4PSI1LjIzOCIgcnk9IjUuMjM4Ii8+PHBhdGggZmlsbD0iIzVjODhjNSIgZD0ibTIwNi40NzcgMjYwLjktMjguOTg3IDI4Ljk4N2E1LjIyIDUuMjIgMCAwIDAgMy43OCAxLjYxaDQ5LjYyMWMxLjY5NCAwIDMuMTktLjc5OCA0LjE0Ni0yLjAzN3oiLz48cGF0aCBmaWxsPSIjZGQ0YjNlIiBkPSJNMjI2Ljc0MiAyMjIuOTg4Yy05LjI2NiAwLTE2Ljc3NyA3LjE3LTE2Ljc3NyAxNi4wMTQuMDA3IDIuNzYyLjY2MyA1LjQ3NCAyLjA5MyA3Ljg3NS40My43MDMuODMgMS40MDggMS4xOSAyLjEwN3EuNS43NTMuOTUgMS41MDguNTE1LjcxNS45ODggMS40NGMxLjMxIDEuNzY5IDIuNSAzLjUwMiAzLjYzNyA1LjE2OC43OTMgMS4yNzUgMS42ODMgMi42NCAyLjQ2NiAzLjk5IDIuMzYzIDQuMDk0IDQuMDA3IDguMDkyIDQuNiAxMy45MTR2LjAxMmMuMTgyLjQxMi41MTYuNjY2Ljg3OS42NjcuNDAzLS4wMDEuNzY4LS4zMTQuOTMtLjc5OS42MDMtNS43NTYgMi4yMzgtOS43MjkgNC41ODUtMTMuNzk0Ljc4Mi0xLjM1IDEuNjczLTIuNzE1IDIuNDY1LTMuOTkgMS4xMzctMS42NjYgMi4zMjgtMy40IDMuNjM4LTUuMTY5cS40NzMtLjcyMy45ODgtMS40MzkuNDUtLjc1NS45NS0xLjUwOGMuMzU5LS43Ljc2LTEuNDA0IDEuMTktMi4xMDcgMS40MjYtMi40MDIgMi01LjExNCAyLjAwNC03Ljg3NSAwLTguODQ0LTcuNTExLTE2LjAxNC0xNi43NzYtMTYuMDE0IiBwYWludC1vcmRlcj0ibWFya2VycyBzdHJva2UgZmlsbCIvPjxlbGxpcHNlIGN4PSIyMjYuNzQyIiBjeT0iMjM5LjAwMiIgZmlsbD0iIzgwMmQyNyIgcGFpbnQtb3JkZXI9Im1hcmtlcnMgc3Ryb2tlIGZpbGwiIHJ4PSI1LjgyOCIgcnk9IjUuNTY0Ii8+PHBhdGggZmlsbD0iI2ZmZiIgZD0iTTE5MC4zMDEgMjM3LjI4M2MtNC42NyAwLTguNDU3IDMuODUzLTguNDU3IDguNjA2czMuNzg2IDguNjA3IDguNDU3IDguNjA3YzMuMDQzIDAgNC44MDYtLjk1OCA2LjMzNy0yLjUxNiAxLjUzLTEuNTU3IDIuMDg3LTMuOTEzIDIuMDg3LTYuMjlxLS4wMDEtLjU0My0uMDY0LTEuMDc5aC04LjI1N3YzLjA0M2g0Ljg1Yy0uMTk3Ljc1OS0uNTMxIDEuNDUtMS4wNTggMS45ODYtLjk0Mi45NTgtMi4wMjggMS41NDgtMy45MDEgMS41NDgtMi44NzYgMC01LjIwOC0yLjM3Mi01LjIwOC01LjI5OSAwLTIuOTI2IDIuMzMyLTUuMjk5IDUuMjA4LTUuMjk5IDEuMzk5IDAgMi42MTguNDA3IDMuNTg0IDEuMjkzbDIuMzgxLTIuMzhxLS4wMDEtLjAwMy0uMDA0LS4wMDVjLTEuNTg4LTEuNTI0LTMuNjItMi4yMTUtNS45NTUtMi4yMTVtNC40MyA1LjY2LjAwMy4wMDZ2LS4wMDN6IiBwYWludC1vcmRlcj0ibWFya2VycyBzdHJva2UgZmlsbCIvPjxwYXRoIGZpbGw9IiNjM2MzYzMiIGQ9Im0yMTUuMTg0IDI1MS45MjktNy45OCA3Ljk3OSAyOC40NzcgMjguNDc1YTUuMiA1LjIgMCAwIDAgLjQ0OS0yLjEyM3YtMzEuMTY1Yy0uNDY5LjY3NS0uOTM0IDEuMzQ5LTEuMzgyIDIuMDA1LS43OTIgMS4yNzUtMS42ODIgMi42NC0yLjQ2NSAzLjk5LTIuMzQ3IDQuMDY1LTMuOTgyIDguMDM4LTQuNTg1IDEzLjc5NC0uMTYyLjQ4NS0uNTI3Ljc5OC0uOTMuNzk5LS4zNjMtLjAwMS0uNjk3LS4yNTUtLjg3OS0uNjY3di0uMDEyYy0uNTkzLTUuODIyLTIuMjM3LTkuODItNC42LTEzLjkxNC0uNzgzLTEuMzUtMS42NzMtMi43MTUtMi40NjYtMy45OS0xLjEzNy0xLjY2Ni0yLjMyNy0zLjQtMy42MzctNS4xNjl6Ii8+PHBhdGggZmlsbD0iI2ZkZGM0ZiIgZD0ibTIxMi45ODMgMjQ4LjQ5NS0zNi45NTIgMzYuOTUzdi44MTJhNS4yMjcgNS4yMjcgMCAwIDAgNS4yMzggNS4yMzhoMS4wMTVsMzUuNjY2LTM1LjY2NmExMzYgMTM2IDAgMCAwLTIuNzY0LTMuOSAzOCAzOCAwIDAgMC0uOTg5LTEuNDQgMzUgMzUgMCAwIDAtLjk1LTEuNTA4Yy0uMDgzLS4xNjItLjE3Ni0uMzI2LS4yNjQtLjQ4OSIgcGFpbnQtb3JkZXI9Im1hcmtlcnMgc3Ryb2tlIGZpbGwiLz48cGF0aCBmaWxsPSIjZmZmIiBkPSJtMjExLjk5OCAyNjEuMDgzLTYuMTUyIDYuMTUxIDI0LjI2NCAyNC4yNjRoLjc4MWE1LjIyNyA1LjIyNyAwIDAgMCA1LjIzOS01LjIzOHYtMS4wNDV6IiBwYWludC1vcmRlcj0ibWFya2VycyBzdHJva2UgZmlsbCIvPjwvZz48L3N2Zz4=)}.ck-media__wrapper[data-oembed-url*="facebook.com"] .ck-media__placeholder{background:#4268b3}.ck-media__wrapper[data-oembed-url*="facebook.com"] .ck-media__placeholder .ck-media__placeholder__icon{background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDI0IiBoZWlnaHQ9IjEwMjQiPjxwYXRoIGZpbGw9IiNGRkZGRkUiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTk2Ny40ODQgMEg1Ni41MTdDMjUuMzA0IDAgMCAyNS4zMDQgMCA1Ni41MTd2OTEwLjk2NkMwIDk5OC42OTQgMjUuMjk3IDEwMjQgNTYuNTIyIDEwMjRINTQ3VjYyOEg0MTRWNDczaDEzM1YzNTkuMDI5YzAtMTMyLjI2MiA4MC43NzMtMjA0LjI4MiAxOTguNzU2LTIwNC4yODIgNTYuNTEzIDAgMTA1LjA4NiA0LjIwOCAxMTkuMjQ0IDYuMDg5VjI5OWwtODEuNjE2LjAzN2MtNjMuOTkzIDAtNzYuMzg0IDMwLjQ5Mi03Ni4zODQgNzUuMjM2VjQ3M2gxNTMuNDg3bC0xOS45ODYgMTU1SDcwN3YzOTZoMjYwLjQ4NGMzMS4yMTMgMCA1Ni41MTYtMjUuMzAzIDU2LjUxNi01Ni41MTZWNTYuNTE1QzEwMjQgMjUuMzAzIDk5OC42OTcgMCA5NjcuNDg0IDAiLz48L3N2Zz4=)}.ck-media__wrapper[data-oembed-url*="facebook.com"] .ck-media__placeholder .ck-media__placeholder__url__text{color:#cdf}.ck-media__wrapper[data-oembed-url*="facebook.com"] .ck-media__placeholder .ck-media__placeholder__url__text:hover{color:#fff}.ck-media__wrapper[data-oembed-url*="instagram.com"] .ck-media__placeholder{background:linear-gradient(-135deg,#1400c7,#b800b1,#f50000)}.ck-media__wrapper[data-oembed-url*="instagram.com"] .ck-media__placeholder .ck-media__placeholder__icon{background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iNTA0IiBoZWlnaHQ9IjUwNCI+PGRlZnM+PHBhdGggaWQ9ImEiIGQ9Ik0wIC4xNTloNTAzLjg0MVY1MDMuOTRIMHoiLz48L2RlZnM+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48bWFzayBpZD0iYiIgZmlsbD0iI2ZmZiI+PHVzZSB4bGluazpocmVmPSIjYSIvPjwvbWFzaz48cGF0aCBmaWxsPSIjRkZGIiBkPSJNMjUxLjkyMS4xNTljLTY4LjQxOCAwLTc2Ljk5Ny4yOS0xMDMuODY3IDEuNTE2LTI2LjgxNCAxLjIyMy00NS4xMjcgNS40ODItNjEuMTUxIDExLjcxLTE2LjU2NiA2LjQzNy0zMC42MTUgMTUuMDUxLTQ0LjYyMSAyOS4wNTYtMTQuMDA1IDE0LjAwNi0yMi42MTkgMjguMDU1LTI5LjA1NiA0NC42MjEtNi4yMjggMTYuMDI0LTEwLjQ4NyAzNC4zMzctMTEuNzEgNjEuMTUxQy4yOSAxNzUuMDgzIDAgMTgzLjY2MiAwIDI1Mi4wOGMwIDY4LjQxNy4yOSA3Ni45OTYgMS41MTYgMTAzLjg2NiAxLjIyMyAyNi44MTQgNS40ODIgNDUuMTI3IDExLjcxIDYxLjE1MSA2LjQzNyAxNi41NjYgMTUuMDUxIDMwLjYxNSAyOS4wNTYgNDQuNjIxIDE0LjAwNiAxNC4wMDUgMjguMDU1IDIyLjYxOSA0NC42MjEgMjkuMDU3IDE2LjAyNCA2LjIyNyAzNC4zMzcgMTAuNDg2IDYxLjE1MSAxMS43MDkgMjYuODcgMS4yMjYgMzUuNDQ5IDEuNTE2IDEwMy44NjcgMS41MTYgNjguNDE3IDAgNzYuOTk2LS4yOSAxMDMuODY2LTEuNTE2IDI2LjgxNC0xLjIyMyA0NS4xMjctNS40ODIgNjEuMTUxLTExLjcwOSAxNi41NjYtNi40MzggMzAuNjE1LTE1LjA1MiA0NC42MjEtMjkuMDU3IDE0LjAwNS0xNC4wMDYgMjIuNjE5LTI4LjA1NSAyOS4wNTctNDQuNjIxIDYuMjI3LTE2LjAyNCAxMC40ODYtMzQuMzM3IDExLjcwOS02MS4xNTEgMS4yMjYtMjYuODcgMS41MTYtMzUuNDQ5IDEuNTE2LTEwMy44NjYgMC02OC40MTgtLjI5LTc2Ljk5Ny0xLjUxNi0xMDMuODY3LTEuMjIzLTI2LjgxNC01LjQ4Mi00NS4xMjctMTEuNzA5LTYxLjE1MS02LjQzOC0xNi41NjYtMTUuMDUyLTMwLjYxNS0yOS4wNTctNDQuNjIxLTE0LjAwNi0xNC4wMDUtMjguMDU1LTIyLjYxOS00NC42MjEtMjkuMDU2LTE2LjAyNC02LjIyOC0zNC4zMzctMTAuNDg3LTYxLjE1MS0xMS43MUMzMjguOTE3LjQ0OSAzMjAuMzM4LjE1OSAyNTEuOTIxLjE1OW0wIDQ1LjM5MWM2Ny4yNjUgMCA3NS4yMzMuMjU3IDEwMS43OTcgMS40NjkgMjQuNTYyIDEuMTIgMzcuOTAxIDUuMjI0IDQ2Ljc3OCA4LjY3NCAxMS43NTkgNC41NyAyMC4xNTEgMTAuMDI5IDI4Ljk2NiAxOC44NDVzMTQuMjc1IDE3LjIwNyAxOC44NDUgMjguOTY2YzMuNDUgOC44NzcgNy41NTQgMjIuMjE2IDguNjc0IDQ2Ljc3OCAxLjIxMiAyNi41NjQgMS40NjkgMzQuNTMyIDEuNDY5IDEwMS43OTggMCA2Ny4yNjUtLjI1NyA3NS4yMzMtMS40NjkgMTAxLjc5Ny0xLjEyIDI0LjU2Mi01LjIyNCAzNy45MDEtOC42NzQgNDYuNzc4LTQuNTcgMTEuNzU5LTEwLjAyOSAyMC4xNTEtMTguODQ1IDI4Ljk2NnMtMTcuMjA3IDE0LjI3NS0yOC45NjYgMTguODQ1Yy04Ljg3NyAzLjQ1LTIyLjIxNiA3LjU1NC00Ni43NzggOC42NzQtMjYuNTYgMS4yMTItMzQuNTI3IDEuNDY5LTEwMS43OTcgMS40NjktNjcuMjcxIDAtNzUuMjM3LS4yNTctMTAxLjc5OC0xLjQ2OS0yNC41NjItMS4xMi0zNy45MDEtNS4yMjQtNDYuNzc4LTguNjc0LTExLjc1OS00LjU3LTIwLjE1MS0xMC4wMjktMjguOTY2LTE4Ljg0NXMtMTQuMjc1LTE3LjIwNy0xOC44NDUtMjguOTY2Yy0zLjQ1LTguODc3LTcuNTU0LTIyLjIxNi04LjY3NC00Ni43NzgtMS4yMTItMjYuNTY0LTEuNDY5LTM0LjUzMi0xLjQ2OS0xMDEuNzk3IDAtNjcuMjY2LjI1Ny03NS4yMzQgMS40NjktMTAxLjc5OCAxLjEyLTI0LjU2MiA1LjIyNC0zNy45MDEgOC42NzQtNDYuNzc4IDQuNTctMTEuNzU5IDEwLjAyOS0yMC4xNTEgMTguODQ1LTI4Ljk2NnMxNy4yMDctMTQuMjc1IDI4Ljk2Ni0xOC44NDVjOC44NzctMy40NSAyMi4yMTYtNy41NTQgNDYuNzc4LTguNjc0IDI2LjU2NC0xLjIxMiAzNC41MzItMS40NjkgMTAxLjc5OC0xLjQ2OSIgbWFzaz0idXJsKCNiKSIvPjxwYXRoIGZpbGw9IiNGRkYiIGQ9Ik0yNTEuOTIxIDMzNi4wNTNjLTQ2LjM3OCAwLTgzLjk3NC0zNy41OTYtODMuOTc0LTgzLjk3M3MzNy41OTYtODMuOTc0IDgzLjk3NC04My45NzRjNDYuMzc3IDAgODMuOTczIDM3LjU5NiA4My45NzMgODMuOTc0IDAgNDYuMzc3LTM3LjU5NiA4My45NzMtODMuOTczIDgzLjk3M20wLTIxMy4zMzhjLTcxLjQ0NyAwLTEyOS4zNjUgNTcuOTE4LTEyOS4zNjUgMTI5LjM2NSAwIDcxLjQ0NiA1Ny45MTggMTI5LjM2NCAxMjkuMzY1IDEyOS4zNjQgNzEuNDQ2IDAgMTI5LjM2NC01Ny45MTggMTI5LjM2NC0xMjkuMzY0IDAtNzEuNDQ3LTU3LjkxOC0xMjkuMzY1LTEyOS4zNjQtMTI5LjM2NU00MTYuNjI3IDExNy42MDRjMCAxNi42OTYtMTMuNTM1IDMwLjIzLTMwLjIzMSAzMC4yMy0xNi42OTUgMC0zMC4yMy0xMy41MzQtMzAuMjMtMzAuMjNzMTMuNTM1LTMwLjIzMSAzMC4yMy0zMC4yMzFjMTYuNjk2IDAgMzAuMjMxIDEzLjUzNSAzMC4yMzEgMzAuMjMxIi8+PC9nPjwvc3ZnPg==)}.ck-media__wrapper[data-oembed-url*="instagram.com"] .ck-media__placeholder .ck-media__placeholder__url__text{color:#ffe0fe}.ck-media__wrapper[data-oembed-url*="instagram.com"] .ck-media__placeholder .ck-media__placeholder__url__text:hover{color:#fff}.ck-media__wrapper[data-oembed-url*="twitter.com"] .ck.ck-media__placeholder{background:linear-gradient(90deg,#71c6f4,#0d70a5)}.ck-media__wrapper[data-oembed-url*="twitter.com"] .ck.ck-media__placeholder .ck-media__placeholder__icon{background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbDpzcGFjZT0icHJlc2VydmUiIHZpZXdCb3g9IjAgMCA0MDAgNDAwIj48cGF0aCBkPSJNNDAwIDIwMGMwIDExMC41LTg5LjUgMjAwLTIwMCAyMDBTMCAzMTAuNSAwIDIwMCA4OS41IDAgMjAwIDBzMjAwIDg5LjUgMjAwIDIwME0xNjMuNCAzMDUuNWM4OC43IDAgMTM3LjItNzMuNSAxMzcuMi0xMzcuMiAwLTIuMSAwLTQuMi0uMS02LjIgOS40LTYuOCAxNy42LTE1LjMgMjQuMS0yNS04LjYgMy44LTE3LjkgNi40LTI3LjcgNy42IDEwLTYgMTcuNi0xNS40IDIxLjItMjYuNy05LjMgNS41LTE5LjYgOS41LTMwLjYgMTEuNy04LjgtOS40LTIxLjMtMTUuMi0zNS4yLTE1LjItMjYuNiAwLTQ4LjIgMjEuNi00OC4yIDQ4LjIgMCAzLjguNCA3LjUgMS4zIDExLTQwLjEtMi03NS42LTIxLjItOTkuNC01MC40LTQuMSA3LjEtNi41IDE1LjQtNi41IDI0LjIgMCAxNi43IDguNSAzMS41IDIxLjUgNDAuMS03LjktLjItMTUuMy0yLjQtMjEuOC02di42YzAgMjMuNCAxNi42IDQyLjggMzguNyA0Ny4zLTQgMS4xLTguMyAxLjctMTIuNyAxLjctMy4xIDAtNi4xLS4zLTkuMS0uOSA2LjEgMTkuMiAyMy45IDMzLjEgNDUgMzMuNS0xNi41IDEyLjktMzcuMyAyMC42LTU5LjkgMjAuNi0zLjkgMC03LjctLjItMTEuNS0uNyAyMS4xIDEzLjggNDYuNSAyMS44IDczLjcgMjEuOCIgc3R5bGU9ImZpbGw6I2ZmZiIvPjwvc3ZnPg==)}.ck-media__wrapper[data-oembed-url*="twitter.com"] .ck.ck-media__placeholder .ck-media__placeholder__url__text{color:#b8e6ff}.ck-media__wrapper[data-oembed-url*="twitter.com"] .ck.ck-media__placeholder .ck-media__placeholder__url__text:hover{color:#fff}',"",{version:3,sources:["webpack://./../ckeditor5-media-embed/theme/mediaembedediting.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-media-embed/mediaembedediting.css"],names:[],mappings:"AAMC,0CAGC,kBAAmB,CAFnB,YAAa,CACb,qBAcD,CAXC,sEAEC,cAAe,CAEf,iBAMD,CAJC,wGAEC,aAAc,CADd,eAED,CAWD,6kBACC,YACD,CAYF,2LACC,mBACD,CC1CA,MACC,0CAA2C,CAE3C,mDAA4D,CAC5D,2EACD,CAEA,mBACC,aA+FD,CA7FC,0CAEC,0CAA2C,CAD3C,0CA6BD,CA1BC,uEAIC,uBAA2B,CAC3B,qBAAsB,CAHtB,kDAAmD,CACnD,qCAAsC,CAFtC,qDAUD,CAJC,gFAEC,WAAY,CADZ,UAED,CAGD,4EACC,sDAAuD,CAGvD,iBAAkB,CADlB,iBAAkB,CAElB,sBAAuB,CAHvB,kBAUD,CALC,kFACC,4DAA6D,CAC7D,cAAe,CACf,yBACD,CAIF,wDAEC,gBAAiB,CADjB,eAED,CAEA,4UAIC,goGACD,CAEA,2EACC,kBAaD,CAXC,wGACC,orBACD,CAEA,6GACC,UAKD,CAHC,mHACC,UACD,CAIF,4EACC,2DAcD,CAZC,yGACC,o+GACD,CAGA,8GACC,aAKD,CAHC,oHACC,UACD,CAIF,6EAEC,iDAaD,CAXC,0GACC,g/BACD,CAEA,+GACC,aAKD,CAHC,qHACC,UACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck-media__wrapper {
	& .ck-media__placeholder {
		display: flex;
		flex-direction: column;
		align-items: center;

		& .ck-media__placeholder__url {
			/* Otherwise the URL will overflow when the content is very narrow. */
			max-width: 100%;

			position: relative;

			& .ck-media__placeholder__url__text {
				overflow: hidden;
				display: block;
			}
		}
	}

	&[data-oembed-url*="twitter.com"],
	&[data-oembed-url*="google.com/maps"],
	&[data-oembed-url*="goo.gl/maps"],
	&[data-oembed-url*="maps.google.com"],
	&[data-oembed-url*="maps.app.goo.gl"],
	&[data-oembed-url*="facebook.com"],
	&[data-oembed-url*="instagram.com"] {
		& .ck-media__placeholder__icon * {
			display: none;
		}
	}
}

/* Disable all mouse interaction as long as the editor is not read–only.
   https://github.com/ckeditor/ckeditor5-media-embed/issues/58 */
.ck-editor__editable:not(.ck-read-only) .ck-media__wrapper > *:not(.ck-media__placeholder) {
	pointer-events: none;
}

/* Disable all mouse interaction when the widget is not selected (e.g. to avoid opening links by accident).
   https://github.com/ckeditor/ckeditor5-media-embed/issues/18 */
.ck-editor__editable:not(.ck-read-only) .ck-widget:not(.ck-widget_selected) .ck-media__placeholder {
	pointer-events: none;
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-media-embed-placeholder-icon-size: 3em;

	--ck-color-media-embed-placeholder-url-text: hsl(0, 0%, 46%);
	--ck-color-media-embed-placeholder-url-text-hover: var(--ck-color-base-text);
}

.ck-media__wrapper {
	margin: 0 auto;

	& .ck-media__placeholder {
		padding: calc( 3 * var(--ck-spacing-standard) );
		background: var(--ck-color-base-foreground);

		& .ck-media__placeholder__icon {
			min-width: var(--ck-media-embed-placeholder-icon-size);
			height: var(--ck-media-embed-placeholder-icon-size);
			margin-bottom: var(--ck-spacing-large);
			background-position: center;
			background-size: cover;

			& .ck-icon {
				width: 100%;
				height: 100%;
			}
		}

		& .ck-media__placeholder__url__text {
			color: var(--ck-color-media-embed-placeholder-url-text);
			white-space: nowrap;
			text-align: center;
			font-style: italic;
			text-overflow: ellipsis;

			&:hover {
				color: var(--ck-color-media-embed-placeholder-url-text-hover);
				cursor: pointer;
				text-decoration: underline;
			}
		}
	}

	&[data-oembed-url*="open.spotify.com"] {
		max-width: 300px;
		max-height: 380px;
	}

	&[data-oembed-url*="google.com/maps"] .ck-media__placeholder__icon,
	&[data-oembed-url*="goo.gl/maps"] .ck-media__placeholder__icon,
	&[data-oembed-url*="maps.google.com"] .ck-media__placeholder__icon,
	&[data-oembed-url*="maps.app.goo.gl"] .ck-media__placeholder__icon {
		background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNTAuMzc4IiBoZWlnaHQ9IjI1NC4xNjciIHZpZXdCb3g9IjAgMCA2Ni4yNDYgNjcuMjQ4Ij48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTcyLjUzMSAtMjE4LjQ1NSkgc2NhbGUoLjk4MDEyKSI+PHJlY3Qgcnk9IjUuMjM4IiByeD0iNS4yMzgiIHk9IjIzMS4zOTkiIHg9IjE3Ni4wMzEiIGhlaWdodD0iNjAuMDk5IiB3aWR0aD0iNjAuMDk5IiBmaWxsPSIjMzRhNjY4IiBwYWludC1vcmRlcj0ibWFya2VycyBzdHJva2UgZmlsbCIvPjxwYXRoIGQ9Ik0yMDYuNDc3IDI2MC45bC0yOC45ODcgMjguOTg3YTUuMjE4IDUuMjE4IDAgMCAwIDMuNzggMS42MWg0OS42MjFjMS42OTQgMCAzLjE5LS43OTggNC4xNDYtMi4wMzd6IiBmaWxsPSIjNWM4OGM1Ii8+PHBhdGggZD0iTTIyNi43NDIgMjIyLjk4OGMtOS4yNjYgMC0xNi43NzcgNy4xNy0xNi43NzcgMTYuMDE0LjAwNyAyLjc2Mi42NjMgNS40NzQgMi4wOTMgNy44NzUuNDMuNzAzLjgzIDEuNDA4IDEuMTkgMi4xMDcuMzMzLjUwMi42NSAxLjAwNS45NSAxLjUwOC4zNDMuNDc3LjY3My45NTcuOTg4IDEuNDQgMS4zMSAxLjc2OSAyLjUgMy41MDIgMy42MzcgNS4xNjguNzkzIDEuMjc1IDEuNjgzIDIuNjQgMi40NjYgMy45OSAyLjM2MyA0LjA5NCA0LjAwNyA4LjA5MiA0LjYgMTMuOTE0di4wMTJjLjE4Mi40MTIuNTE2LjY2Ni44NzkuNjY3LjQwMy0uMDAxLjc2OC0uMzE0LjkzLS43OTkuNjAzLTUuNzU2IDIuMjM4LTkuNzI5IDQuNTg1LTEzLjc5NC43ODItMS4zNSAxLjY3My0yLjcxNSAyLjQ2NS0zLjk5IDEuMTM3LTEuNjY2IDIuMzI4LTMuNCAzLjYzOC01LjE2OS4zMTUtLjQ4Mi42NDUtLjk2Mi45ODgtMS40MzkuMy0uNTAzLjYxNy0xLjAwNi45NS0xLjUwOC4zNTktLjcuNzYtMS40MDQgMS4xOS0yLjEwNyAxLjQyNi0yLjQwMiAyLTUuMTE0IDIuMDA0LTcuODc1IDAtOC44NDQtNy41MTEtMTYuMDE0LTE2Ljc3Ni0xNi4wMTR6IiBmaWxsPSIjZGQ0YjNlIiBwYWludC1vcmRlcj0ibWFya2VycyBzdHJva2UgZmlsbCIvPjxlbGxpcHNlIHJ5PSI1LjU2NCIgcng9IjUuODI4IiBjeT0iMjM5LjAwMiIgY3g9IjIyNi43NDIiIGZpbGw9IiM4MDJkMjciIHBhaW50LW9yZGVyPSJtYXJrZXJzIHN0cm9rZSBmaWxsIi8+PHBhdGggZD0iTTE5MC4zMDEgMjM3LjI4M2MtNC42NyAwLTguNDU3IDMuODUzLTguNDU3IDguNjA2czMuNzg2IDguNjA3IDguNDU3IDguNjA3YzMuMDQzIDAgNC44MDYtLjk1OCA2LjMzNy0yLjUxNiAxLjUzLTEuNTU3IDIuMDg3LTMuOTEzIDIuMDg3LTYuMjkgMC0uMzYyLS4wMjMtLjcyMi0uMDY0LTEuMDc5aC04LjI1N3YzLjA0M2g0Ljg1Yy0uMTk3Ljc1OS0uNTMxIDEuNDUtMS4wNTggMS45ODYtLjk0Mi45NTgtMi4wMjggMS41NDgtMy45MDEgMS41NDgtMi44NzYgMC01LjIwOC0yLjM3Mi01LjIwOC01LjI5OSAwLTIuOTI2IDIuMzMyLTUuMjk5IDUuMjA4LTUuMjk5IDEuMzk5IDAgMi42MTguNDA3IDMuNTg0IDEuMjkzbDIuMzgxLTIuMzhjMC0uMDAyLS4wMDMtLjAwNC0uMDA0LS4wMDUtMS41ODgtMS41MjQtMy42Mi0yLjIxNS01Ljk1NS0yLjIxNXptNC40MyA1LjY2bC4wMDMuMDA2di0uMDAzeiIgZmlsbD0iI2ZmZiIgcGFpbnQtb3JkZXI9Im1hcmtlcnMgc3Ryb2tlIGZpbGwiLz48cGF0aCBkPSJNMjE1LjE4NCAyNTEuOTI5bC03Ljk4IDcuOTc5IDI4LjQ3NyAyOC40NzVjLjI4Ny0uNjQ5LjQ0OS0xLjM2Ni40NDktMi4xMjN2LTMxLjE2NWMtLjQ2OS42NzUtLjkzNCAxLjM0OS0xLjM4MiAyLjAwNS0uNzkyIDEuMjc1LTEuNjgyIDIuNjQtMi40NjUgMy45OS0yLjM0NyA0LjA2NS0zLjk4MiA4LjAzOC00LjU4NSAxMy43OTQtLjE2Mi40ODUtLjUyNy43OTgtLjkzLjc5OS0uMzYzLS4wMDEtLjY5Ny0uMjU1LS44NzktLjY2N3YtLjAxMmMtLjU5My01LjgyMi0yLjIzNy05LjgyLTQuNi0xMy45MTQtLjc4My0xLjM1LTEuNjczLTIuNzE1LTIuNDY2LTMuOTktMS4xMzctMS42NjYtMi4zMjctMy40LTMuNjM3LTUuMTY5bC0uMDAyLS4wMDN6IiBmaWxsPSIjYzNjM2MzIi8+PHBhdGggZD0iTTIxMi45ODMgMjQ4LjQ5NWwtMzYuOTUyIDM2Ljk1M3YuODEyYTUuMjI3IDUuMjI3IDAgMCAwIDUuMjM4IDUuMjM4aDEuMDE1bDM1LjY2Ni0zNS42NjZhMTM2LjI3NSAxMzYuMjc1IDAgMCAwLTIuNzY0LTMuOSAzNy41NzUgMzcuNTc1IDAgMCAwLS45ODktMS40NGMtLjI5OS0uNTAzLS42MTYtMS4wMDYtLjk1LTEuNTA4LS4wODMtLjE2Mi0uMTc2LS4zMjYtLjI2NC0uNDg5eiIgZmlsbD0iI2ZkZGM0ZiIgcGFpbnQtb3JkZXI9Im1hcmtlcnMgc3Ryb2tlIGZpbGwiLz48cGF0aCBkPSJNMjExLjk5OCAyNjEuMDgzbC02LjE1MiA2LjE1MSAyNC4yNjQgMjQuMjY0aC43ODFhNS4yMjcgNS4yMjcgMCAwIDAgNS4yMzktNS4yMzh2LTEuMDQ1eiIgZmlsbD0iI2ZmZiIgcGFpbnQtb3JkZXI9Im1hcmtlcnMgc3Ryb2tlIGZpbGwiLz48L2c+PC9zdmc+);
	}

	&[data-oembed-url*="facebook.com"] .ck-media__placeholder {
		background: hsl(220, 46%, 48%);

		& .ck-media__placeholder__icon {
			background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIHdpZHRoPSIxMDI0cHgiIGhlaWdodD0iMTAyNHB4IiB2aWV3Qm94PSIwIDAgMTAyNCAxMDI0IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPiAgICAgICAgPHRpdGxlPkZpbGwgMTwvdGl0bGU+ICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPiAgICA8ZGVmcz48L2RlZnM+ICAgIDxnIGlkPSJQYWdlLTEiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPiAgICAgICAgPGcgaWQ9ImZMb2dvX1doaXRlIiBmaWxsPSIjRkZGRkZFIj4gICAgICAgICAgICA8cGF0aCBkPSJNOTY3LjQ4NCwwIEw1Ni41MTcsMCBDMjUuMzA0LDAgMCwyNS4zMDQgMCw1Ni41MTcgTDAsOTY3LjQ4MyBDMCw5OTguNjk0IDI1LjI5NywxMDI0IDU2LjUyMiwxMDI0IEw1NDcsMTAyNCBMNTQ3LDYyOCBMNDE0LDYyOCBMNDE0LDQ3MyBMNTQ3LDQ3MyBMNTQ3LDM1OS4wMjkgQzU0NywyMjYuNzY3IDYyNy43NzMsMTU0Ljc0NyA3NDUuNzU2LDE1NC43NDcgQzgwMi4yNjksMTU0Ljc0NyA4NTAuODQyLDE1OC45NTUgODY1LDE2MC44MzYgTDg2NSwyOTkgTDc4My4zODQsMjk5LjAzNyBDNzE5LjM5MSwyOTkuMDM3IDcwNywzMjkuNTI5IDcwNywzNzQuMjczIEw3MDcsNDczIEw4NjAuNDg3LDQ3MyBMODQwLjUwMSw2MjggTDcwNyw2MjggTDcwNywxMDI0IEw5NjcuNDg0LDEwMjQgQzk5OC42OTcsMTAyNCAxMDI0LDk5OC42OTcgMTAyNCw5NjcuNDg0IEwxMDI0LDU2LjUxNSBDMTAyNCwyNS4zMDMgOTk4LjY5NywwIDk2Ny40ODQsMCIgaWQ9IkZpbGwtMSI+PC9wYXRoPiAgICAgICAgPC9nPiAgICA8L2c+PC9zdmc+);
		}

		& .ck-media__placeholder__url__text {
			color: hsl(220, 100%, 90%);

			&:hover {
				color: hsl(0, 0%, 100%);
			}
		}
	}

	&[data-oembed-url*="instagram.com"] .ck-media__placeholder {
		background: linear-gradient(-135deg,hsl(246, 100%, 39%),hsl(302, 100%, 36%),hsl(0, 100%, 48%));

		& .ck-media__placeholder__icon {
			background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIHdpZHRoPSI1MDRweCIgaGVpZ2h0PSI1MDRweCIgdmlld0JveD0iMCAwIDUwNCA1MDQiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+ICAgICAgICA8dGl0bGU+Z2x5cGgtbG9nb19NYXkyMDE2PC90aXRsZT4gICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+ICAgIDxkZWZzPiAgICAgICAgPHBvbHlnb24gaWQ9InBhdGgtMSIgcG9pbnRzPSIwIDAuMTU5IDUwMy44NDEgMC4xNTkgNTAzLjg0MSA1MDMuOTQgMCA1MDMuOTQiPjwvcG9seWdvbj4gICAgPC9kZWZzPiAgICA8ZyBpZD0iZ2x5cGgtbG9nb19NYXkyMDE2IiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4gICAgICAgIDxnIGlkPSJHcm91cC0zIj4gICAgICAgICAgICA8bWFzayBpZD0ibWFzay0yIiBmaWxsPSJ3aGl0ZSI+ICAgICAgICAgICAgICAgIDx1c2UgeGxpbms6aHJlZj0iI3BhdGgtMSI+PC91c2U+ICAgICAgICAgICAgPC9tYXNrPiAgICAgICAgICAgIDxnIGlkPSJDbGlwLTIiPjwvZz4gICAgICAgICAgICA8cGF0aCBkPSJNMjUxLjkyMSwwLjE1OSBDMTgzLjUwMywwLjE1OSAxNzQuOTI0LDAuNDQ5IDE0OC4wNTQsMS42NzUgQzEyMS4yNCwyLjg5OCAxMDIuOTI3LDcuMTU3IDg2LjkwMywxMy4zODUgQzcwLjMzNywxOS44MjIgNTYuMjg4LDI4LjQzNiA0Mi4yODIsNDIuNDQxIEMyOC4yNzcsNTYuNDQ3IDE5LjY2Myw3MC40OTYgMTMuMjI2LDg3LjA2MiBDNi45OTgsMTAzLjA4NiAyLjczOSwxMjEuMzk5IDEuNTE2LDE0OC4yMTMgQzAuMjksMTc1LjA4MyAwLDE4My42NjIgMCwyNTIuMDggQzAsMzIwLjQ5NyAwLjI5LDMyOS4wNzYgMS41MTYsMzU1Ljk0NiBDMi43MzksMzgyLjc2IDYuOTk4LDQwMS4wNzMgMTMuMjI2LDQxNy4wOTcgQzE5LjY2Myw0MzMuNjYzIDI4LjI3Nyw0NDcuNzEyIDQyLjI4Miw0NjEuNzE4IEM1Ni4yODgsNDc1LjcyMyA3MC4zMzcsNDg0LjMzNyA4Ni45MDMsNDkwLjc3NSBDMTAyLjkyNyw0OTcuMDAyIDEyMS4yNCw1MDEuMjYxIDE0OC4wNTQsNTAyLjQ4NCBDMTc0LjkyNCw1MDMuNzEgMTgzLjUwMyw1MDQgMjUxLjkyMSw1MDQgQzMyMC4zMzgsNTA0IDMyOC45MTcsNTAzLjcxIDM1NS43ODcsNTAyLjQ4NCBDMzgyLjYwMSw1MDEuMjYxIDQwMC45MTQsNDk3LjAwMiA0MTYuOTM4LDQ5MC43NzUgQzQzMy41MDQsNDg0LjMzNyA0NDcuNTUzLDQ3NS43MjMgNDYxLjU1OSw0NjEuNzE4IEM0NzUuNTY0LDQ0Ny43MTIgNDg0LjE3OCw0MzMuNjYzIDQ5MC42MTYsNDE3LjA5NyBDNDk2Ljg0Myw0MDEuMDczIDUwMS4xMDIsMzgyLjc2IDUwMi4zMjUsMzU1Ljk0NiBDNTAzLjU1MSwzMjkuMDc2IDUwMy44NDEsMzIwLjQ5NyA1MDMuODQxLDI1Mi4wOCBDNTAzLjg0MSwxODMuNjYyIDUwMy41NTEsMTc1LjA4MyA1MDIuMzI1LDE0OC4yMTMgQzUwMS4xMDIsMTIxLjM5OSA0OTYuODQzLDEwMy4wODYgNDkwLjYxNiw4Ny4wNjIgQzQ4NC4xNzgsNzAuNDk2IDQ3NS41NjQsNTYuNDQ3IDQ2MS41NTksNDIuNDQxIEM0NDcuNTUzLDI4LjQzNiA0MzMuNTA0LDE5LjgyMiA0MTYuOTM4LDEzLjM4NSBDNDAwLjkxNCw3LjE1NyAzODIuNjAxLDIuODk4IDM1NS43ODcsMS42NzUgQzMyOC45MTcsMC40NDkgMzIwLjMzOCwwLjE1OSAyNTEuOTIxLDAuMTU5IFogTTI1MS45MjEsNDUuNTUgQzMxOS4xODYsNDUuNTUgMzI3LjE1NCw0NS44MDcgMzUzLjcxOCw0Ny4wMTkgQzM3OC4yOCw0OC4xMzkgMzkxLjYxOSw1Mi4yNDMgNDAwLjQ5Niw1NS42OTMgQzQxMi4yNTUsNjAuMjYzIDQyMC42NDcsNjUuNzIyIDQyOS40NjIsNzQuNTM4IEM0MzguMjc4LDgzLjM1MyA0NDMuNzM3LDkxLjc0NSA0NDguMzA3LDEwMy41MDQgQzQ1MS43NTcsMTEyLjM4MSA0NTUuODYxLDEyNS43MiA0NTYuOTgxLDE1MC4yODIgQzQ1OC4xOTMsMTc2Ljg0NiA0NTguNDUsMTg0LjgxNCA0NTguNDUsMjUyLjA4IEM0NTguNDUsMzE5LjM0NSA0NTguMTkzLDMyNy4zMTMgNDU2Ljk4MSwzNTMuODc3IEM0NTUuODYxLDM3OC40MzkgNDUxLjc1NywzOTEuNzc4IDQ0OC4zMDcsNDAwLjY1NSBDNDQzLjczNyw0MTIuNDE0IDQzOC4yNzgsNDIwLjgwNiA0MjkuNDYyLDQyOS42MjEgQzQyMC42NDcsNDM4LjQzNyA0MTIuMjU1LDQ0My44OTYgNDAwLjQ5Niw0NDguNDY2IEMzOTEuNjE5LDQ1MS45MTYgMzc4LjI4LDQ1Ni4wMiAzNTMuNzE4LDQ1Ny4xNCBDMzI3LjE1OCw0NTguMzUyIDMxOS4xOTEsNDU4LjYwOSAyNTEuOTIxLDQ1OC42MDkgQzE4NC42NSw0NTguNjA5IDE3Ni42ODQsNDU4LjM1MiAxNTAuMTIzLDQ1Ny4xNCBDMTI1LjU2MSw0NTYuMDIgMTEyLjIyMiw0NTEuOTE2IDEwMy4zNDUsNDQ4LjQ2NiBDOTEuNTg2LDQ0My44OTYgODMuMTk0LDQzOC40MzcgNzQuMzc5LDQyOS42MjEgQzY1LjU2NCw0MjAuODA2IDYwLjEwNCw0MTIuNDE0IDU1LjUzNCw0MDAuNjU1IEM1Mi4wODQsMzkxLjc3OCA0Ny45OCwzNzguNDM5IDQ2Ljg2LDM1My44NzcgQzQ1LjY0OCwzMjcuMzEzIDQ1LjM5MSwzMTkuMzQ1IDQ1LjM5MSwyNTIuMDggQzQ1LjM5MSwxODQuODE0IDQ1LjY0OCwxNzYuODQ2IDQ2Ljg2LDE1MC4yODIgQzQ3Ljk4LDEyNS43MiA1Mi4wODQsMTEyLjM4MSA1NS41MzQsMTAzLjUwNCBDNjAuMTA0LDkxLjc0NSA2NS41NjMsODMuMzUzIDc0LjM3OSw3NC41MzggQzgzLjE5NCw2NS43MjIgOTEuNTg2LDYwLjI2MyAxMDMuMzQ1LDU1LjY5MyBDMTEyLjIyMiw1Mi4yNDMgMTI1LjU2MSw0OC4xMzkgMTUwLjEyMyw0Ny4wMTkgQzE3Ni42ODcsNDUuODA3IDE4NC42NTUsNDUuNTUgMjUxLjkyMSw0NS41NSBaIiBpZD0iRmlsbC0xIiBmaWxsPSIjRkZGRkZGIiBtYXNrPSJ1cmwoI21hc2stMikiPjwvcGF0aD4gICAgICAgIDwvZz4gICAgICAgIDxwYXRoIGQ9Ik0yNTEuOTIxLDMzNi4wNTMgQzIwNS41NDMsMzM2LjA1MyAxNjcuOTQ3LDI5OC40NTcgMTY3Ljk0NywyNTIuMDggQzE2Ny45NDcsMjA1LjcwMiAyMDUuNTQzLDE2OC4xMDYgMjUxLjkyMSwxNjguMTA2IEMyOTguMjk4LDE2OC4xMDYgMzM1Ljg5NCwyMDUuNzAyIDMzNS44OTQsMjUyLjA4IEMzMzUuODk0LDI5OC40NTcgMjk4LjI5OCwzMzYuMDUzIDI1MS45MjEsMzM2LjA1MyBaIE0yNTEuOTIxLDEyMi43MTUgQzE4MC40NzQsMTIyLjcxNSAxMjIuNTU2LDE4MC42MzMgMTIyLjU1NiwyNTIuMDggQzEyMi41NTYsMzIzLjUyNiAxODAuNDc0LDM4MS40NDQgMjUxLjkyMSwzODEuNDQ0IEMzMjMuMzY3LDM4MS40NDQgMzgxLjI4NSwzMjMuNTI2IDM4MS4yODUsMjUyLjA4IEMzODEuMjg1LDE4MC42MzMgMzIzLjM2NywxMjIuNzE1IDI1MS45MjEsMTIyLjcxNSBaIiBpZD0iRmlsbC00IiBmaWxsPSIjRkZGRkZGIj48L3BhdGg+ICAgICAgICA8cGF0aCBkPSJNNDE2LjYyNywxMTcuNjA0IEM0MTYuNjI3LDEzNC4zIDQwMy4wOTIsMTQ3LjgzNCAzODYuMzk2LDE0Ny44MzQgQzM2OS43MDEsMTQ3LjgzNCAzNTYuMTY2LDEzNC4zIDM1Ni4xNjYsMTE3LjYwNCBDMzU2LjE2NiwxMDAuOTA4IDM2OS43MDEsODcuMzczIDM4Ni4zOTYsODcuMzczIEM0MDMuMDkyLDg3LjM3MyA0MTYuNjI3LDEwMC45MDggNDE2LjYyNywxMTcuNjA0IiBpZD0iRmlsbC01IiBmaWxsPSIjRkZGRkZGIj48L3BhdGg+ICAgIDwvZz48L3N2Zz4=);
		}

		/* stylelint-disable-next-line no-descending-specificity */
		& .ck-media__placeholder__url__text {
			color: hsl(302, 100%, 94%);

			&:hover {
				color: hsl(0, 0%, 100%);
			}
		}
	}

	&[data-oembed-url*="twitter.com"] .ck.ck-media__placeholder {
		/* Use gradient to contrast with focused widget (ckeditor/ckeditor5-media-embed#22). */
		background: linear-gradient( to right, hsl(201, 85%, 70%), hsl(201, 85%, 35%) );

		& .ck-media__placeholder__icon {
			background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz48c3ZnIHZlcnNpb249IjEuMSIgaWQ9IldoaXRlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDQwMCA0MDAiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQwMCA0MDA7IiB4bWw6c3BhY2U9InByZXNlcnZlIj48c3R5bGUgdHlwZT0idGV4dC9jc3MiPi5zdDB7ZmlsbDojRkZGRkZGO308L3N0eWxlPjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik00MDAsMjAwYzAsMTEwLjUtODkuNSwyMDAtMjAwLDIwMFMwLDMxMC41LDAsMjAwUzg5LjUsMCwyMDAsMFM0MDAsODkuNSw0MDAsMjAweiBNMTYzLjQsMzA1LjVjODguNywwLDEzNy4yLTczLjUsMTM3LjItMTM3LjJjMC0yLjEsMC00LjItMC4xLTYuMmM5LjQtNi44LDE3LjYtMTUuMywyNC4xLTI1Yy04LjYsMy44LTE3LjksNi40LTI3LjcsNy42YzEwLTYsMTcuNi0xNS40LDIxLjItMjYuN2MtOS4zLDUuNS0xOS42LDkuNS0zMC42LDExLjdjLTguOC05LjQtMjEuMy0xNS4yLTM1LjItMTUuMmMtMjYuNiwwLTQ4LjIsMjEuNi00OC4yLDQ4LjJjMCwzLjgsMC40LDcuNSwxLjMsMTFjLTQwLjEtMi03NS42LTIxLjItOTkuNC01MC40Yy00LjEsNy4xLTYuNSwxNS40LTYuNSwyNC4yYzAsMTYuNyw4LjUsMzEuNSwyMS41LDQwLjFjLTcuOS0wLjItMTUuMy0yLjQtMjEuOC02YzAsMC4yLDAsMC40LDAsMC42YzAsMjMuNCwxNi42LDQyLjgsMzguNyw0Ny4zYy00LDEuMS04LjMsMS43LTEyLjcsMS43Yy0zLjEsMC02LjEtMC4zLTkuMS0wLjljNi4xLDE5LjIsMjMuOSwzMy4xLDQ1LDMzLjVjLTE2LjUsMTIuOS0zNy4zLDIwLjYtNTkuOSwyMC42Yy0zLjksMC03LjctMC4yLTExLjUtMC43QzExMC44LDI5Ny41LDEzNi4yLDMwNS41LDE2My40LDMwNS41Ii8+PC9zdmc+);
		}

		& .ck-media__placeholder__url__text {
			color: hsl(201, 100%, 86%);

			&:hover {
				color: hsl(0, 0%, 100%);
			}
		}
	}
}
`],sourceRoot:""}]);const S=y},5651:(f,b,m)=>{m.d(b,{A:()=>S});var v=m(9372),A=m.n(v),x=m(935),y=m.n(x)()(A());y.push([f.id,".ck.ck-media-form{align-items:flex-start;display:flex;flex-direction:row;flex-wrap:nowrap}.ck.ck-media-form .ck-labeled-field-view{display:inline-block}.ck.ck-media-form .ck-label{display:none}@media screen and (max-width:600px){.ck.ck-media-form{flex-wrap:wrap}.ck.ck-media-form .ck-labeled-field-view{flex-basis:100%}.ck.ck-media-form .ck-button{flex-basis:50%}}","",{version:3,sources:["webpack://./../ckeditor5-media-embed/theme/mediaform.css","webpack://./../ckeditor5-ui/theme/mixins/_rwd.css"],names:[],mappings:"AAOA,kBAEC,sBAAuB,CADvB,YAAa,CAEb,kBAAmB,CACnB,gBAqBD,CAnBC,yCACC,oBACD,CAEA,4BACC,YACD,CCbA,oCDCD,kBAeE,cAUF,CARE,yCACC,eACD,CAEA,6BACC,cACD,CCtBD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_rwd.css";

.ck.ck-media-form {
	display: flex;
	align-items: flex-start;
	flex-direction: row;
	flex-wrap: nowrap;

	& .ck-labeled-field-view {
		display: inline-block;
	}

	& .ck-label {
		display: none;
	}

	@mixin ck-media-phone {
		flex-wrap: wrap;

		& .ck-labeled-field-view {
			flex-basis: 100%;
		}

		& .ck-button {
			flex-basis: 50%;
		}
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@define-mixin ck-media-phone {
	@media screen and (max-width: 600px) {
		@mixin-content;
	}
}
`],sourceRoot:""}]);const S=y},5506:(f,b,m)=>{m.d(b,{A:()=>S});var v=m(9372),A=m.n(v),x=m(935),y=m.n(x)()(A());y.push([f.id,".ck.ck-input-color{display:flex;flex-direction:row-reverse;width:100%}.ck.ck-input-color>input.ck.ck-input-text{flex-grow:1;min-width:auto}.ck.ck-input-color>div.ck.ck-dropdown{min-width:auto}.ck.ck-input-color>div.ck.ck-dropdown>.ck-input-color__button .ck-dropdown__arrow{display:none}.ck.ck-input-color .ck.ck-input-color__button{display:flex}.ck.ck-input-color .ck.ck-input-color__button .ck.ck-input-color__button__preview{overflow:hidden;position:relative}.ck.ck-input-color .ck.ck-input-color__button .ck.ck-input-color__button__preview>.ck.ck-input-color__button__preview__no-color-indicator{display:block;position:absolute}[dir=ltr] .ck.ck-input-color>.ck.ck-input-text{border-bottom-right-radius:0;border-top-right-radius:0}[dir=rtl] .ck.ck-input-color>.ck.ck-input-text{border-bottom-left-radius:0;border-top-left-radius:0}.ck.ck-input-color>.ck.ck-input-text:focus{z-index:0}.ck.ck-input-color>.ck.ck-dropdown>.ck.ck-button.ck-input-color__button{padding:0}[dir=ltr] .ck.ck-input-color>.ck.ck-dropdown>.ck.ck-button.ck-input-color__button{border-bottom-left-radius:0;border-top-left-radius:0}[dir=ltr] .ck.ck-input-color>.ck.ck-dropdown>.ck.ck-button.ck-input-color__button:not(:focus){border-left:1px solid transparent}[dir=rtl] .ck.ck-input-color>.ck.ck-dropdown>.ck.ck-button.ck-input-color__button{border-bottom-right-radius:0;border-top-right-radius:0}[dir=rtl] .ck.ck-input-color>.ck.ck-dropdown>.ck.ck-button.ck-input-color__button:not(:focus){border-right:1px solid transparent}.ck.ck-input-color>.ck.ck-dropdown>.ck.ck-button.ck-input-color__button.ck-disabled{background:var(--ck-color-input-disabled-background)}.ck.ck-input-color>.ck.ck-dropdown>.ck.ck-button.ck-input-color__button>.ck.ck-input-color__button__preview{border-radius:0}.ck-rounded-corners .ck.ck-input-color>.ck.ck-dropdown>.ck.ck-button.ck-input-color__button>.ck.ck-input-color__button__preview,.ck.ck-input-color>.ck.ck-dropdown>.ck.ck-button.ck-input-color__button>.ck.ck-input-color__button__preview.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-input-color>.ck.ck-dropdown>.ck.ck-button.ck-input-color__button>.ck.ck-input-color__button__preview{border:1px solid var(--ck-color-input-border);height:20px;width:20px}.ck.ck-input-color>.ck.ck-dropdown>.ck.ck-button.ck-input-color__button>.ck.ck-input-color__button__preview>.ck.ck-input-color__button__preview__no-color-indicator{background:red;border-radius:2px;height:150%;left:50%;top:-30%;transform:rotate(45deg);transform-origin:50%;width:8%}.ck.ck-input-color .ck.ck-input-color__remove-color{border-bottom-left-radius:0;border-bottom-right-radius:0;padding:calc(var(--ck-spacing-standard)/2) var(--ck-spacing-standard);width:100%}.ck.ck-input-color .ck.ck-input-color__remove-color:not(:focus){border-bottom:1px solid var(--ck-color-input-border)}[dir=ltr] .ck.ck-input-color .ck.ck-input-color__remove-color{border-top-right-radius:0}[dir=rtl] .ck.ck-input-color .ck.ck-input-color__remove-color{border-top-left-radius:0}.ck.ck-input-color .ck.ck-input-color__remove-color .ck.ck-icon{margin-right:var(--ck-spacing-standard)}[dir=rtl] .ck.ck-input-color .ck.ck-input-color__remove-color .ck.ck-icon{margin-left:var(--ck-spacing-standard);margin-right:0}","",{version:3,sources:["webpack://./../ckeditor5-table/theme/colorinput.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-table/colorinput.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css"],names:[],mappings:"AAKA,mBAEC,YAAa,CACb,0BAA2B,CAF3B,UAgCD,CA5BC,0CAEC,WAAY,CADZ,cAED,CAEA,sCACC,cAMD,CAHC,kFACC,YACD,CAGD,8CAEC,YAWD,CATC,kFAEC,eAAgB,CADhB,iBAOD,CAJC,0IAEC,aAAc,CADd,iBAED,CC1BF,+CAGE,4BAA6B,CAD7B,yBAcF,CAhBA,+CAQE,2BAA4B,CAD5B,wBASF,CAHC,2CACC,SACD,CAIA,wEACC,SA0CD,CA3CA,kFAKE,2BAA4B,CAD5B,wBAuCF,CApCE,8FACC,iCACD,CATF,kFAcE,4BAA6B,CAD7B,yBA8BF,CA3BE,8FACC,kCACD,CAGD,oFACC,oDACD,CAEA,4GC1CF,eD2DE,CAjBA,+PCtCD,qCDuDC,CAjBA,4GAKC,6CAA8C,CAD9C,WAAY,CADZ,UAcD,CAVC,oKAKC,cAA6B,CAC7B,iBAAkB,CAHlB,WAAY,CADZ,QAAS,CADT,QAAS,CAMT,uBAAwB,CACxB,oBAAqB,CAJrB,QAKD,CAKH,oDAIC,2BAA4B,CAC5B,4BAA6B,CAH7B,qEAAwE,CADxE,UA0BD,CApBC,gEACC,oDACD,CATD,8DAYE,yBAeF,CA3BA,8DAgBE,wBAWF,CARC,gEACC,uCAMD,CAPA,0EAKE,sCAAuC,CADvC,cAGF",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-input-color {
	width: 100%;
	display: flex;
	flex-direction: row-reverse;

	& > input.ck.ck-input-text {
		min-width: auto;
		flex-grow: 1;
	}

	& > div.ck.ck-dropdown {
		min-width: auto;

		/* This dropdown has no arrow but a color preview instead. */
		& > .ck-input-color__button .ck-dropdown__arrow {
			display: none;
		}
	}

	& .ck.ck-input-color__button {
		/* Resolving issue with misaligned buttons on Safari (see #10589) */
		display: flex;

		& .ck.ck-input-color__button__preview {
			position: relative;
			overflow: hidden;

			& > .ck.ck-input-color__button__preview__no-color-indicator {
				position: absolute;
				display: block;
			}
		}
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";
@import "../mixins/_rounded.css";

.ck.ck-input-color {
	& > .ck.ck-input-text {
		@mixin ck-dir ltr {
			border-top-right-radius: 0;
			border-bottom-right-radius: 0;
		}

		@mixin ck-dir rtl {
			border-top-left-radius: 0;
			border-bottom-left-radius: 0;
		}

		/* Make sure the focused input is always on top of the dropdown button so its
		   outline and border are never cropped (also when the input is read-only). */
		&:focus {
			z-index: 0;
		}
	}

	& > .ck.ck-dropdown {
		& > .ck.ck-button.ck-input-color__button {
			padding: 0;

			@mixin ck-dir ltr {
				border-top-left-radius: 0;
				border-bottom-left-radius: 0;

				&:not(:focus) {
					border-left: 1px solid transparent;
				}
			}

			@mixin ck-dir rtl {
				border-top-right-radius: 0;
				border-bottom-right-radius: 0;

				&:not(:focus) {
					border-right: 1px solid transparent;
				}
			}

			&.ck-disabled {
				background: var(--ck-color-input-disabled-background);
			}

			& > .ck.ck-input-color__button__preview {
				@mixin ck-rounded-corners;

				width: 20px;
				height: 20px;
				border: 1px solid var(--ck-color-input-border);

				& > .ck.ck-input-color__button__preview__no-color-indicator {
					top: -30%;
					left: 50%;
					height: 150%;
					width: 8%;
					background: hsl(0, 100%, 50%);
					border-radius: 2px;
					transform: rotate(45deg);
					transform-origin: 50%;
				}
			}
		}
	}

	& .ck.ck-input-color__remove-color {
		width: 100%;
		padding: calc(var(--ck-spacing-standard) / 2) var(--ck-spacing-standard);

		border-bottom-left-radius: 0;
		border-bottom-right-radius: 0;

		&:not(:focus) {
			border-bottom: 1px solid var(--ck-color-input-border);
		}

		@mixin ck-dir ltr {
			border-top-right-radius: 0;
		}

		@mixin ck-dir rtl {
			border-top-left-radius: 0;
		}

		& .ck.ck-icon {
			margin-right: var(--ck-spacing-standard);

			@mixin ck-dir rtl {
				margin-right: 0;
				margin-left: var(--ck-spacing-standard);
			}
		}
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`],sourceRoot:""}]);const S=y},4043:(f,b,m)=>{m.d(b,{A:()=>S});var v=m(9372),A=m.n(v),x=m(935),y=m.n(x)()(A());y.push([f.id,".ck.ck-form{padding:0 0 var(--ck-spacing-large)}.ck.ck-form:focus{outline:none}.ck.ck-form .ck.ck-input-text{min-width:100%;width:0}.ck.ck-form .ck.ck-dropdown{min-width:100%}.ck.ck-form .ck.ck-dropdown .ck-dropdown__button:not(:focus){border:1px solid var(--ck-color-base-border)}.ck.ck-form .ck.ck-dropdown .ck-dropdown__button .ck-button__label{width:100%}","",{version:3,sources:["webpack://./../ckeditor5-theme-lark/theme/ckeditor5-table/form.css"],names:[],mappings:"AAKA,YACC,mCAyBD,CAvBC,kBAEC,YACD,CAEA,8BACC,cAAe,CACf,OACD,CAEA,4BACC,cAWD,CARE,6DACC,4CACD,CAEA,mEACC,UACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-form {
	padding: 0 0 var(--ck-spacing-large);

	&:focus {
		/* See: https://github.com/ckeditor/ckeditor5/issues/4773 */
		outline: none;
	}

	& .ck.ck-input-text {
		min-width: 100%;
		width: 0;
	}

	& .ck.ck-dropdown {
		min-width: 100%;

		& .ck-dropdown__button {
			&:not(:focus) {
				border: 1px solid var(--ck-color-base-border);
			}

			& .ck-button__label {
				width: 100%;
			}
		}
	}
}
`],sourceRoot:""}]);const S=y},2655:(f,b,m)=>{m.d(b,{A:()=>S});var v=m(9372),A=m.n(v),x=m(935),y=m.n(x)()(A());y.push([f.id,".ck.ck-form__row{display:flex;flex-direction:row;flex-wrap:nowrap;justify-content:space-between}.ck.ck-form__row>:not(.ck-label){flex-grow:1}.ck.ck-form__row.ck-table-form__action-row .ck-button-cancel,.ck.ck-form__row.ck-table-form__action-row .ck-button-save{justify-content:center}.ck.ck-form__row{padding:var(--ck-spacing-standard) var(--ck-spacing-large) 0}[dir=ltr] .ck.ck-form__row>:not(.ck-label)+*{margin-left:var(--ck-spacing-large)}[dir=rtl] .ck.ck-form__row>:not(.ck-label)+*{margin-right:var(--ck-spacing-large)}.ck.ck-form__row>.ck-label{min-width:100%;width:100%}.ck.ck-form__row.ck-table-form__action-row{margin-top:var(--ck-spacing-large)}.ck.ck-form__row.ck-table-form__action-row .ck-button .ck-button__label{color:var(--ck-color-text)}","",{version:3,sources:["webpack://./../ckeditor5-table/theme/formrow.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-table/formrow.css"],names:[],mappings:"AAKA,iBACC,YAAa,CACb,kBAAmB,CACnB,gBAAiB,CACjB,6BAaD,CAVC,iCACC,WACD,CAGC,wHAEC,sBACD,CCbF,iBACC,4DA2BD,CAvBE,6CAEE,mCAMF,CARA,6CAME,oCAEF,CAGD,2BAEC,cAAe,CADf,UAED,CAEA,2CACC,kCAKD,CAHC,wEACC,0BACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-form__row {
	display: flex;
	flex-direction: row;
	flex-wrap: nowrap;
	justify-content: space-between;

	/* Ignore labels that work as fieldset legends */
	& > *:not(.ck-label) {
		flex-grow: 1;
	}

	&.ck-table-form__action-row {
		& .ck-button-save,
		& .ck-button-cancel {
			justify-content: center;
		}
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

.ck.ck-form__row {
	padding: var(--ck-spacing-standard) var(--ck-spacing-large) 0;

	/* Ignore labels that work as fieldset legends */
	& > *:not(.ck-label) {
		& + * {
			@mixin ck-dir ltr {
				margin-left: var(--ck-spacing-large);
			}

			@mixin ck-dir rtl {
				margin-right: var(--ck-spacing-large);
			}
		}
	}

	& > .ck-label {
		width: 100%;
		min-width: 100%;
	}

	&.ck-table-form__action-row {
		margin-top: var(--ck-spacing-large);

		& .ck-button .ck-button__label {
			color: var(--ck-color-text);
		}
	}
}
`],sourceRoot:""}]);const S=y},5032:(f,b,m)=>{m.d(b,{A:()=>S});var v=m(9372),A=m.n(v),x=m(935),y=m.n(x)()(A());y.push([f.id,".ck .ck-insert-table-dropdown__grid{display:flex;flex-direction:row;flex-wrap:wrap}:root{--ck-insert-table-dropdown-padding:10px;--ck-insert-table-dropdown-box-height:11px;--ck-insert-table-dropdown-box-width:12px;--ck-insert-table-dropdown-box-margin:1px}.ck .ck-insert-table-dropdown__grid{padding:var(--ck-insert-table-dropdown-padding) var(--ck-insert-table-dropdown-padding) 0;width:calc(var(--ck-insert-table-dropdown-box-width)*10 + var(--ck-insert-table-dropdown-box-margin)*20 + var(--ck-insert-table-dropdown-padding)*2)}.ck .ck-insert-table-dropdown__label,.ck[dir=rtl] .ck-insert-table-dropdown__label{text-align:center}.ck .ck-insert-table-dropdown-grid-box{border:1px solid var(--ck-color-base-border);border-radius:1px;margin:var(--ck-insert-table-dropdown-box-margin);min-height:var(--ck-insert-table-dropdown-box-height);min-width:var(--ck-insert-table-dropdown-box-width);outline:none;transition:none}@media (prefers-reduced-motion:reduce){.ck .ck-insert-table-dropdown-grid-box{transition:none}}.ck .ck-insert-table-dropdown-grid-box:focus{box-shadow:none}.ck .ck-insert-table-dropdown-grid-box.ck-on{background:var(--ck-color-focus-outer-shadow);border-color:var(--ck-color-focus-border)}","",{version:3,sources:["webpack://./../ckeditor5-table/theme/inserttable.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-table/inserttable.css"],names:[],mappings:"AAKA,oCACC,YAAa,CACb,kBAAmB,CACnB,cACD,CCJA,MACC,uCAAwC,CACxC,0CAA2C,CAC3C,yCAA0C,CAC1C,yCACD,CAEA,oCAGC,yFAA0F,CAD1F,oJAED,CAEA,mFAEC,iBACD,CAEA,uCAIC,4CAA6C,CAC7C,iBAAkB,CAFlB,iDAAkD,CADlD,qDAAsD,CADtD,mDAAoD,CAKpD,YAAa,CACb,eAcD,CAZC,uCATD,uCAUE,eAWF,CAVC,CAEA,6CACC,eACD,CAEA,6CAEC,6CAA8C,CAD9C,yCAED",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck .ck-insert-table-dropdown__grid {
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-insert-table-dropdown-padding: 10px;
	--ck-insert-table-dropdown-box-height: 11px;
	--ck-insert-table-dropdown-box-width: 12px;
	--ck-insert-table-dropdown-box-margin: 1px;
}

.ck .ck-insert-table-dropdown__grid {
	/* The width of a container should match 10 items in a row so there will be a 10x10 grid. */
	width: calc(var(--ck-insert-table-dropdown-box-width) * 10 + var(--ck-insert-table-dropdown-box-margin) * 20 + var(--ck-insert-table-dropdown-padding) * 2);
	padding: var(--ck-insert-table-dropdown-padding) var(--ck-insert-table-dropdown-padding) 0;
}

.ck .ck-insert-table-dropdown__label,
.ck[dir=rtl] .ck-insert-table-dropdown__label {
	text-align: center;
}

.ck .ck-insert-table-dropdown-grid-box {
	min-width: var(--ck-insert-table-dropdown-box-width);
	min-height: var(--ck-insert-table-dropdown-box-height);
	margin: var(--ck-insert-table-dropdown-box-margin);
	border: 1px solid var(--ck-color-base-border);
	border-radius: 1px;
	outline: none;
	transition: none;

	@media (prefers-reduced-motion: reduce) {
		transition: none;
	}

	&:focus {
		box-shadow: none;
	}

	&.ck-on {
		border-color: var(--ck-color-focus-border);
		background: var(--ck-color-focus-outer-shadow);
	}
}

`],sourceRoot:""}]);const S=y},2329:(f,b,m)=>{m.d(b,{A:()=>S});var v=m(9372),A=m.n(v),x=m(935),y=m.n(x)()(A());y.push([f.id,".ck-content .table{display:table;margin:.9em auto}.ck-content .table table{border:1px double #b3b3b3;border-collapse:collapse;border-spacing:0;height:100%;width:100%}.ck-content .table table td,.ck-content .table table th{border:1px solid #bfbfbf;min-width:2em;padding:.4em}.ck-content .table table th{background:rgba(0,0,0,.05);font-weight:700}.ck-content[dir=rtl] .table th{text-align:right}.ck-content[dir=ltr] .table th{text-align:left}.ck-editor__editable .ck-table-bogus-paragraph{display:inline-block;width:100%}","",{version:3,sources:["webpack://./../ckeditor5-table/theme/table.css"],names:[],mappings:"AAKA,mBAKC,aAAc,CADd,gBAiCD,CA9BC,yBAYC,yBAAkC,CAVlC,wBAAyB,CACzB,gBAAiB,CAKjB,WAAY,CADZ,UAsBD,CAfC,wDAQC,wBAAiC,CANjC,aAAc,CACd,YAMD,CAEA,4BAEC,0BAA+B,CAD/B,eAED,CAMF,+BACC,gBACD,CAEA,+BACC,eACD,CAEA,+CAKC,oBAAqB,CAMrB,UACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck-content .table {
	/* Give the table widget some air and center it horizontally */
	/* The first value should be equal to --ck-spacing-large variable if used in the editor context
	to avoid the content jumping (See https://github.com/ckeditor/ckeditor5/issues/9825). */
	margin: 0.9em auto;
	display: table;

	& table {
		/* The table cells should have slight borders */
		border-collapse: collapse;
		border-spacing: 0;

		/* Table width and height are set on the parent <figure>. Make sure the table inside stretches
		to the full dimensions of the container (https://github.com/ckeditor/ckeditor5/issues/6186). */
		width: 100%;
		height: 100%;

		/* The outer border of the table should be slightly darker than the inner lines.
		Also see https://github.com/ckeditor/ckeditor5-table/issues/50. */
		border: 1px double hsl(0, 0%, 70%);

		& td,
		& th {
			min-width: 2em;
			padding: .4em;

			/* The border is inherited from .ck-editor__nested-editable styles, so theoretically it's not necessary here.
			However, the border is a content style, so it should use .ck-content (so it works outside the editor).
			Hence, the duplication. See https://github.com/ckeditor/ckeditor5/issues/6314 */
			border: 1px solid hsl(0, 0%, 75%);
		}

		& th {
			font-weight: bold;
			background: hsla(0, 0%, 0%, 5%);
		}
	}
}

/* Text alignment of the table header should match the editor settings and override the native browser styling,
when content is available outside the editor. See https://github.com/ckeditor/ckeditor5/issues/6638 */
.ck-content[dir="rtl"] .table th {
	text-align: right;
}

.ck-content[dir="ltr"] .table th {
	text-align: left;
}

.ck-editor__editable .ck-table-bogus-paragraph {
	/*
	 * Use display:inline-block to force Chrome/Safari to limit text mutations to this element.
	 * See https://github.com/ckeditor/ckeditor5/issues/6062.
	 */
	display: inline-block;

	/*
	 * Inline HTML elements nested in the span should always be dimensioned in relation to the whole cell width.
	 * See https://github.com/ckeditor/ckeditor5/issues/9117.
	 */
	width: 100%;
}
`],sourceRoot:""}]);const S=y},4143:(f,b,m)=>{m.d(b,{A:()=>S});var v=m(9372),A=m.n(v),x=m(935),y=m.n(x)()(A());y.push([f.id,":root{--ck-color-selector-caption-background:#f7f7f7;--ck-color-selector-caption-text:#333;--ck-color-selector-caption-highlighted-background:#fd0}.ck-content .table>figcaption{background-color:var(--ck-color-selector-caption-background);caption-side:top;color:var(--ck-color-selector-caption-text);display:table-caption;font-size:.75em;outline-offset:-1px;padding:.6em;text-align:center;word-break:break-word}@media (forced-colors:active){.ck-content .table>figcaption{background-color:unset;color:unset}}@media (forced-colors:none){.ck.ck-editor__editable .table>figcaption.table__caption_highlighted{animation:ck-table-caption-highlight .6s ease-out}}.ck.ck-editor__editable .table>figcaption.ck-placeholder:before{overflow:hidden;padding-left:inherit;padding-right:inherit;text-overflow:ellipsis;white-space:nowrap}@keyframes ck-table-caption-highlight{0%{background-color:var(--ck-color-selector-caption-highlighted-background)}to{background-color:var(--ck-color-selector-caption-background)}}","",{version:3,sources:["webpack://./../ckeditor5-table/theme/tablecaption.css","webpack://./../ckeditor5-ui/theme/mixins/_mediacolors.css"],names:[],mappings:"AAOA,MACC,8CAAuD,CACvD,qCAAiD,CACjD,uDACD,CAGA,8BAMC,4DAA6D,CAJ7D,gBAAiB,CAGjB,2CAA4C,CAJ5C,qBAAsB,CAOtB,eAAgB,CAChB,mBAAoB,CAFpB,YAAa,CAHb,iBAAkB,CADlB,qBAaD,CCxBC,8BACC,8BDoBA,sBAAuB,CACvB,WCnBA,CACD,CAIA,4BDqBC,qEACC,iDACD,CCnBD,CDsBA,gEASC,eAAgB,CARhB,oBAAqB,CACrB,qBAAsB,CAQtB,sBAAuB,CAFvB,kBAGD,CAGD,sCACC,GACC,wEACD,CAEA,GACC,4DACD,CACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_mediacolors.css";

:root {
	--ck-color-selector-caption-background: hsl(0, 0%, 97%);
	--ck-color-selector-caption-text: hsl(0, 0%, 20%);
	--ck-color-selector-caption-highlighted-background: hsl(52deg 100% 50%);
}

/* Content styles */
.ck-content .table > figcaption {
	display: table-caption;
	caption-side: top;
	word-break: break-word;
	text-align: center;
	color: var(--ck-color-selector-caption-text);
	background-color: var(--ck-color-selector-caption-background);
	padding: .6em;
	font-size: .75em;
	outline-offset: -1px;

	/* Improve placeholder rendering in high-constrast mode (https://github.com/ckeditor/ckeditor5/issues/14907). */
	@mixin ck-media-forced-colors {
		background-color: unset;
		color: unset;
	}
}

/* Editing styles */
.ck.ck-editor__editable .table > figcaption {
	@mixin ck-media-default-colors {
		&.table__caption_highlighted {
			animation: ck-table-caption-highlight .6s ease-out;
		}
	}

	&.ck-placeholder::before {
		padding-left: inherit;
		padding-right: inherit;

		/*
		 * Make sure the table caption placeholder doesn't overflow the placeholder area.
		 * See https://github.com/ckeditor/ckeditor5/issues/9162.
		 */
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}
}

@keyframes ck-table-caption-highlight {
	0% {
		background-color: var(--ck-color-selector-caption-highlighted-background);
	}

	100% {
		background-color: var(--ck-color-selector-caption-background);
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@define-mixin ck-media-forced-colors {
	@media (forced-colors: active) {
		& {
			@mixin-content;
		}
	}
}

@define-mixin ck-media-default-colors {
	@media (forced-colors: none) {
		& {
			@mixin-content;
		}
	}
}
`],sourceRoot:""}]);const S=y},8986:(f,b,m)=>{m.d(b,{A:()=>S});var v=m(9372),A=m.n(v),x=m(935),y=m.n(x)()(A());y.push([f.id,".ck.ck-table-cell-properties-form .ck-form__row.ck-table-cell-properties-form__alignment-row{flex-wrap:wrap}.ck.ck-table-cell-properties-form .ck-form__row.ck-table-cell-properties-form__alignment-row .ck.ck-toolbar:first-of-type{flex-grow:0.57}.ck.ck-table-cell-properties-form .ck-form__row.ck-table-cell-properties-form__alignment-row .ck.ck-toolbar:last-of-type{flex-grow:0.43}.ck.ck-table-cell-properties-form .ck-form__row.ck-table-cell-properties-form__alignment-row .ck.ck-toolbar .ck-button{flex-grow:1}.ck.ck-table-cell-properties-form{width:320px}.ck.ck-table-cell-properties-form .ck-form__row.ck-table-cell-properties-form__padding-row{align-self:flex-end;padding:0;width:25%}.ck.ck-table-cell-properties-form .ck-form__row.ck-table-cell-properties-form__alignment-row .ck.ck-toolbar{background:none;margin-top:var(--ck-spacing-standard)}","",{version:3,sources:["webpack://./../ckeditor5-table/theme/tablecellproperties.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-table/tablecellproperties.css"],names:[],mappings:"AAOE,6FACC,cAiBD,CAdE,0HAEC,cACD,CAEA,yHAEC,cACD,CAEA,uHACC,WACD,CClBJ,kCACC,WAkBD,CAfE,2FACC,mBAAoB,CACpB,SAAU,CACV,SACD,CAGC,4GACC,eAAgB,CAGhB,qCACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-table-cell-properties-form {
	& .ck-form__row {
		&.ck-table-cell-properties-form__alignment-row {
			flex-wrap: wrap;

			& .ck.ck-toolbar {
				&:first-of-type {
					/* 4 buttons out of 7 (h-alignment + v-alignment) = 0.57 */
					flex-grow: 0.57;
				}

				&:last-of-type {
					/* 3 buttons out of 7 (h-alignment + v-alignment) = 0.43 */
					flex-grow: 0.43;
				}

				& .ck-button {
					flex-grow: 1;
				}
			}
		}
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-table-cell-properties-form {
	width: 320px;

	& .ck-form__row {
		&.ck-table-cell-properties-form__padding-row {
			align-self: flex-end;
			padding: 0;
			width: 25%;
		}

		&.ck-table-cell-properties-form__alignment-row {
			& .ck.ck-toolbar {
				background: none;

				/* Compensate for missing input label that would push the margin (toolbar has no inputs). */
				margin-top: var(--ck-spacing-standard);
			}
		}
	}
}
`],sourceRoot:""}]);const S=y},8795:(f,b,m)=>{m.d(b,{A:()=>S});var v=m(9372),A=m.n(v),x=m(935),y=m.n(x)()(A());y.push([f.id,":root{--ck-color-selector-column-resizer-hover:var(--ck-color-base-active);--ck-table-column-resizer-width:7px;--ck-table-column-resizer-position-offset:calc(var(--ck-table-column-resizer-width)*-0.5 - 0.5px)}.ck-content .table .ck-table-resized{table-layout:fixed}.ck-content .table table{overflow:hidden}.ck-content .table td,.ck-content .table th{overflow-wrap:break-word;position:relative}.ck.ck-editor__editable .table .ck-table-column-resizer{bottom:0;cursor:col-resize;position:absolute;right:var(--ck-table-column-resizer-position-offset);top:0;user-select:none;width:var(--ck-table-column-resizer-width);z-index:var(--ck-z-default)}.ck.ck-editor__editable .table[draggable] .ck-table-column-resizer,.ck.ck-editor__editable.ck-column-resize_disabled .table .ck-table-column-resizer{display:none}.ck.ck-editor__editable .table .ck-table-column-resizer:hover,.ck.ck-editor__editable .table .ck-table-column-resizer__active{background-color:var(--ck-color-selector-column-resizer-hover);bottom:-999999px;opacity:.25;top:-999999px}.ck.ck-editor__editable[dir=rtl] .table .ck-table-column-resizer{left:var(--ck-table-column-resizer-position-offset);right:unset}","",{version:3,sources:["webpack://./../ckeditor5-table/theme/tablecolumnresize.css"],names:[],mappings:"AAKA,MACC,oEAAqE,CACrE,mCAAoC,CAIpC,iGACD,CAEA,qCACC,kBACD,CAEA,yBACC,eACD,CAEA,4CAIC,wBAAyB,CACzB,iBACD,CAEA,wDAGC,QAAS,CAGT,iBAAkB,CALlB,iBAAkB,CAGlB,oDAAqD,CAFrD,KAAM,CAKN,gBAAiB,CAFjB,0CAA2C,CAG3C,2BACD,CAQA,qJACC,YACD,CAEA,8HAEC,8DAA+D,CAO/D,gBAAiB,CANjB,WAAa,CAKb,aAED,CAEA,iEACC,mDAAoD,CACpD,WACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-color-selector-column-resizer-hover: var(--ck-color-base-active);
	--ck-table-column-resizer-width: 7px;

	/* The offset used for absolute positioning of the resizer element, so that it is placed exactly above the cell border.
	   The value is: minus half the width of the resizer decreased additionaly by the half the width of the border (0.5px). */
	--ck-table-column-resizer-position-offset: calc(var(--ck-table-column-resizer-width) * -0.5 - 0.5px);
}

.ck-content .table .ck-table-resized {
	table-layout: fixed;
}

.ck-content .table table {
	overflow: hidden;
}

.ck-content .table td,
.ck-content .table th {
	/* To prevent text overflowing beyond its cell when columns are resized by resize handler
	(https://github.com/ckeditor/ckeditor5/pull/14379#issuecomment-1589460978). */
	overflow-wrap: break-word;
	position: relative;
}

.ck.ck-editor__editable .table .ck-table-column-resizer {
	position: absolute;
	top: 0;
	bottom: 0;
	right: var(--ck-table-column-resizer-position-offset);
	width: var(--ck-table-column-resizer-width);
	cursor: col-resize;
	user-select: none;
	z-index: var(--ck-z-default);
}

.ck.ck-editor__editable.ck-column-resize_disabled .table .ck-table-column-resizer {
	display: none;
}

/* The resizer elements, which are extended to an extremely high height, break the drag & drop feature in Chrome. To make it work again,
   all resizers must be hidden while the table is dragged. */
.ck.ck-editor__editable .table[draggable] .ck-table-column-resizer {
	display: none;
}

.ck.ck-editor__editable .table .ck-table-column-resizer:hover,
.ck.ck-editor__editable .table .ck-table-column-resizer__active {
	background-color: var(--ck-color-selector-column-resizer-hover);
	opacity: 0.25;
	/* The resizer element resides in each cell so to occupy the entire height of the table, which is unknown from a CSS point of view,
	   it is extended to an extremely high height. Even for screens with a very high pixel density, the resizer will fulfill its role as
	   it should, i.e. for a screen of 476 ppi the total height of the resizer will take over 350 sheets of A4 format, which is totally
	   unrealistic height for a single table. */
	top: -999999px;
	bottom: -999999px;
}

.ck.ck-editor__editable[dir=rtl] .table .ck-table-column-resizer {
	left: var(--ck-table-column-resizer-position-offset);
	right: unset;
}
`],sourceRoot:""}]);const S=y},8137:(f,b,m)=>{m.d(b,{A:()=>S});var v=m(9372),A=m.n(v),x=m(935),y=m.n(x)()(A());y.push([f.id,":root{--ck-color-selector-focused-cell-background:rgba(158,201,250,.3)}.ck-widget.table td.ck-editor__nested-editable.ck-editor__nested-editable_focused,.ck-widget.table td.ck-editor__nested-editable:focus,.ck-widget.table th.ck-editor__nested-editable.ck-editor__nested-editable_focused,.ck-widget.table th.ck-editor__nested-editable:focus{background:var(--ck-color-selector-focused-cell-background);border-style:none;outline:1px solid var(--ck-color-focus-border);outline-offset:-1px}","",{version:3,sources:["webpack://./../ckeditor5-theme-lark/theme/ckeditor5-table/tableediting.css"],names:[],mappings:"AAKA,MACC,gEACD,CAKE,8QAGC,2DAA4D,CAK5D,iBAAkB,CAClB,8CAA+C,CAC/C,mBACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-color-selector-focused-cell-background: hsla(212, 90%, 80%, .3);
}

.ck-widget.table {
	& td,
	& th {
		&.ck-editor__nested-editable.ck-editor__nested-editable_focused,
		&.ck-editor__nested-editable:focus {
			/* A very slight background to highlight the focused cell */
			background: var(--ck-color-selector-focused-cell-background);

			/* Fixes the problem where surrounding cells cover the focused cell's border.
			It does not fix the problem in all places but the UX is improved.
			See https://github.com/ckeditor/ckeditor5-table/issues/29. */
			border-style: none;
			outline: 1px solid var(--ck-color-focus-border);
			outline-offset: -1px; /* progressive enhancement - no IE support */
		}
	}
}
`],sourceRoot:""}]);const S=y},1623:(f,b,m)=>{m.d(b,{A:()=>S});var v=m(9372),A=m.n(v),x=m(935),y=m.n(x)()(A());y.push([f.id,'.ck.ck-table-form .ck-form__row.ck-table-form__background-row,.ck.ck-table-form .ck-form__row.ck-table-form__border-row{flex-wrap:wrap}.ck.ck-table-form .ck-form__row.ck-table-form__dimensions-row{align-items:center;flex-wrap:wrap}.ck.ck-table-form .ck-form__row.ck-table-form__dimensions-row .ck-labeled-field-view{align-items:center;display:flex;flex-direction:column-reverse}.ck.ck-table-form .ck-form__row.ck-table-form__dimensions-row .ck-labeled-field-view .ck.ck-dropdown,.ck.ck-table-form .ck-form__row.ck-table-form__dimensions-row .ck-table-form__dimension-operator{flex-grow:0}.ck.ck-table-form .ck.ck-labeled-field-view{position:relative}.ck.ck-table-form .ck.ck-labeled-field-view .ck.ck-labeled-field-view__status{bottom:calc(var(--ck-table-properties-error-arrow-size)*-1);left:50%;position:absolute;transform:translate(-50%,100%);z-index:1}.ck.ck-table-form .ck.ck-labeled-field-view .ck.ck-labeled-field-view__status:after{content:"";left:50%;position:absolute;top:calc(var(--ck-table-properties-error-arrow-size)*-1);transform:translateX(-50%)}:root{--ck-table-properties-error-arrow-size:6px;--ck-table-properties-min-error-width:150px}.ck.ck-table-form .ck-form__row.ck-table-form__border-row .ck-labeled-field-view>.ck-label{font-size:var(--ck-font-size-tiny);text-align:center}.ck.ck-table-form .ck-form__row.ck-table-form__border-row .ck-table-form__border-style,.ck.ck-table-form .ck-form__row.ck-table-form__border-row .ck-table-form__border-width{max-width:80px;min-width:80px;width:80px}.ck.ck-table-form .ck-form__row.ck-table-form__dimensions-row{padding:0}.ck.ck-table-form .ck-form__row.ck-table-form__dimensions-row .ck-table-form__dimensions-row__height,.ck.ck-table-form .ck-form__row.ck-table-form__dimensions-row .ck-table-form__dimensions-row__width{margin:0}.ck.ck-table-form .ck-form__row.ck-table-form__dimensions-row .ck-table-form__dimension-operator{align-self:flex-end;display:inline-block;height:var(--ck-ui-component-min-height);line-height:var(--ck-ui-component-min-height);margin:0 var(--ck-spacing-small)}.ck.ck-table-form .ck.ck-labeled-field-view{padding-top:var(--ck-spacing-standard)}.ck.ck-table-form .ck.ck-labeled-field-view .ck.ck-labeled-field-view__status{border-radius:0}.ck-rounded-corners .ck.ck-table-form .ck.ck-labeled-field-view .ck.ck-labeled-field-view__status,.ck.ck-table-form .ck.ck-labeled-field-view .ck.ck-labeled-field-view__status.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-table-form .ck.ck-labeled-field-view .ck.ck-labeled-field-view__status{background:var(--ck-color-base-error);color:var(--ck-color-base-background);min-width:var(--ck-table-properties-min-error-width);padding:var(--ck-spacing-small) var(--ck-spacing-medium);text-align:center}.ck.ck-table-form .ck.ck-labeled-field-view .ck.ck-labeled-field-view__status:after{border-color:transparent transparent var(--ck-color-base-error) transparent;border-style:solid;border-width:0 var(--ck-table-properties-error-arrow-size) var(--ck-table-properties-error-arrow-size) var(--ck-table-properties-error-arrow-size)}.ck.ck-table-form .ck.ck-labeled-field-view .ck.ck-labeled-field-view__status{animation:ck-table-form-labeled-view-status-appear .15s ease both}@media (prefers-reduced-motion:reduce){.ck.ck-table-form .ck.ck-labeled-field-view .ck.ck-labeled-field-view__status{animation:none}}.ck.ck-table-form .ck.ck-labeled-field-view .ck-input.ck-error:not(:focus)+.ck.ck-labeled-field-view__status{display:none}@keyframes ck-table-form-labeled-view-status-appear{0%{opacity:0}to{opacity:1}}',"",{version:3,sources:["webpack://./../ckeditor5-table/theme/tableform.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-table/tableform.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css"],names:[],mappings:"AAWE,wHACC,cACD,CAEA,8DAEC,kBAAmB,CADnB,cAgBD,CAbC,qFAGC,kBAAmB,CAFnB,YAAa,CACb,6BAMD,CAEA,sMACC,WACD,CAIF,4CAEC,iBAoBD,CAlBC,8EAGC,2DAAgE,CADhE,QAAS,CADT,iBAAkB,CAGlB,8BAA+B,CAG/B,SAUD,CAPC,oFACC,UAAW,CAGX,QAAS,CAFT,iBAAkB,CAClB,wDAA6D,CAE7D,0BACD,CChDH,MACC,0CAA2C,CAC3C,2CACD,CAMI,2FACC,kCAAmC,CACnC,iBACD,CAGD,8KAIC,cAAe,CADf,cAAe,CADf,UAGD,CAGD,8DACC,SAcD,CAZC,yMAEC,QACD,CAEA,iGACC,mBAAoB,CACpB,oBAAqB,CACrB,wCAAyC,CACzC,6CAA8C,CAC9C,gCACD,CAIF,4CACC,sCA6BD,CA3BC,8ECxCD,eD6DC,CArBA,mMCpCA,qCDyDA,CArBA,8EAGC,qCAAsC,CACtC,qCAAsC,CAEtC,oDAAqD,CADrD,wDAAyD,CAEzD,iBAcD,CAXC,oFACC,2EAA4E,CAE5E,kBAAmB,CADnB,kJAED,CAdD,8EAgBC,iEAKD,CAHC,uCAlBD,8EAmBE,cAEF,CADC,CAID,6GACC,YACD,CAIF,oDACC,GACC,SACD,CAEA,GACC,SACD,CACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-table-form {
	& .ck-form__row {
		&.ck-table-form__border-row {
			flex-wrap: wrap;
		}

		&.ck-table-form__background-row {
			flex-wrap: wrap;
		}

		&.ck-table-form__dimensions-row {
			flex-wrap: wrap;
			align-items: center;

			& .ck-labeled-field-view {
				display: flex;
				flex-direction: column-reverse;
				align-items: center;

				& .ck.ck-dropdown {
					flex-grow: 0;
				}
			}

			& .ck-table-form__dimension-operator {
				flex-grow: 0;
			}
		}
	}

	& .ck.ck-labeled-field-view {
		/* Allow absolute positioning of the status (error) balloons. */
		position: relative;

		& .ck.ck-labeled-field-view__status {
			position: absolute;
			left: 50%;
			bottom: calc( -1 * var(--ck-table-properties-error-arrow-size) );
			transform: translate(-50%,100%);

			/* Make sure the balloon status stays on top of other form elements. */
			z-index: 1;

			/* The arrow pointing towards the field. */
			&::after {
				content: "";
				position: absolute;
				top: calc( -1 * var(--ck-table-properties-error-arrow-size) );
				left: 50%;
				transform: translateX( -50% );
			}
		}
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../mixins/_rounded.css";

:root {
	--ck-table-properties-error-arrow-size: 6px;
	--ck-table-properties-min-error-width: 150px;
}

.ck.ck-table-form {
	& .ck-form__row {
		&.ck-table-form__border-row {
			& .ck-labeled-field-view {
				& > .ck-label {
					font-size: var(--ck-font-size-tiny);
					text-align: center;
				}
			}

			& .ck-table-form__border-style,
			& .ck-table-form__border-width {
				width: 80px;
				min-width: 80px;
				max-width: 80px;
			}
		}

		&.ck-table-form__dimensions-row {
			padding: 0;

			& .ck-table-form__dimensions-row__width,
			& .ck-table-form__dimensions-row__height {
				margin: 0
			}

			& .ck-table-form__dimension-operator {
				align-self: flex-end;
				display: inline-block;
				height: var(--ck-ui-component-min-height);
				line-height: var(--ck-ui-component-min-height);
				margin: 0 var(--ck-spacing-small);
			}
		}
	}

	& .ck.ck-labeled-field-view {
		padding-top: var(--ck-spacing-standard);

		& .ck.ck-labeled-field-view__status {
			@mixin ck-rounded-corners;

			background: var(--ck-color-base-error);
			color: var(--ck-color-base-background);
			padding: var(--ck-spacing-small) var(--ck-spacing-medium);
			min-width: var(--ck-table-properties-min-error-width);
			text-align: center;

			/* The arrow pointing towards the field. */
			&::after {
				border-color: transparent transparent var(--ck-color-base-error) transparent;
				border-width: 0 var(--ck-table-properties-error-arrow-size) var(--ck-table-properties-error-arrow-size) var(--ck-table-properties-error-arrow-size);
				border-style: solid;
			}

			animation: ck-table-form-labeled-view-status-appear .15s ease both;

			@media (prefers-reduced-motion: reduce) {
				animation: none;
			}
		}

		/* Hide the error balloon when the field is blurred. Makes the experience much more clear. */
		& .ck-input.ck-error:not(:focus) + .ck.ck-labeled-field-view__status {
			display: none;
		}
	}
}

@keyframes ck-table-form-labeled-view-status-appear {
	0% {
		opacity: 0;
	}

	100% {
		opacity: 1;
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`],sourceRoot:""}]);const S=y},5562:(f,b,m)=>{m.d(b,{A:()=>S});var v=m(9372),A=m.n(v),x=m(935),y=m.n(x)()(A());y.push([f.id,".ck.ck-table-properties-form .ck-form__row.ck-table-properties-form__alignment-row{align-content:baseline;flex-basis:0;flex-wrap:wrap}.ck.ck-table-properties-form .ck-form__row.ck-table-properties-form__alignment-row .ck.ck-toolbar .ck-toolbar__items{flex-wrap:nowrap}.ck.ck-table-properties-form{width:320px}.ck.ck-table-properties-form .ck-form__row.ck-table-properties-form__alignment-row{align-self:flex-end;padding:0}.ck.ck-table-properties-form .ck-form__row.ck-table-properties-form__alignment-row .ck.ck-toolbar{background:none;margin-top:var(--ck-spacing-standard)}.ck.ck-table-properties-form .ck-form__row.ck-table-properties-form__alignment-row .ck.ck-toolbar .ck-toolbar__items>*{width:40px}","",{version:3,sources:["webpack://./../ckeditor5-table/theme/tableproperties.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-table/tableproperties.css"],names:[],mappings:"AAOE,mFAGC,sBAAuB,CADvB,YAAa,CADb,cAOD,CAHC,qHACC,gBACD,CCTH,6BACC,WAmBD,CAhBE,mFACC,mBAAoB,CACpB,SAYD,CAVC,kGACC,eAAgB,CAGhB,qCAKD,CAHC,uHACC,UACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-table-properties-form {
	& .ck-form__row {
		&.ck-table-properties-form__alignment-row {
			flex-wrap: wrap;
			flex-basis: 0;
			align-content: baseline;

			& .ck.ck-toolbar .ck-toolbar__items {
				flex-wrap: nowrap;
			}
		}
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-table-properties-form {
	width: 320px;

	& .ck-form__row {
		&.ck-table-properties-form__alignment-row {
			align-self: flex-end;
			padding: 0;

			& .ck.ck-toolbar {
				background: none;

				/* Compensate for missing input label that would push the margin (toolbar has no inputs). */
				margin-top: var(--ck-spacing-standard);

				& .ck-toolbar__items > * {
					width: 40px;
				}
			}
		}
	}
}
`],sourceRoot:""}]);const S=y},8423:(f,b,m)=>{m.d(b,{A:()=>S});var v=m(9372),A=m.n(v),x=m(935),y=m.n(x)()(A());y.push([f.id,':root{--ck-table-selected-cell-background:rgba(158,207,250,.3)}.ck.ck-editor__editable .table table td.ck-editor__editable_selected,.ck.ck-editor__editable .table table th.ck-editor__editable_selected{box-shadow:unset;caret-color:transparent;outline:unset;position:relative}.ck.ck-editor__editable .table table td.ck-editor__editable_selected:after,.ck.ck-editor__editable .table table th.ck-editor__editable_selected:after{background-color:var(--ck-table-selected-cell-background);bottom:0;content:"";left:0;pointer-events:none;position:absolute;right:0;top:0}.ck.ck-editor__editable .table table td.ck-editor__editable_selected ::selection,.ck.ck-editor__editable .table table td.ck-editor__editable_selected:focus,.ck.ck-editor__editable .table table th.ck-editor__editable_selected ::selection,.ck.ck-editor__editable .table table th.ck-editor__editable_selected:focus{background-color:transparent}.ck.ck-editor__editable .table table td.ck-editor__editable_selected .ck-widget,.ck.ck-editor__editable .table table th.ck-editor__editable_selected .ck-widget{outline:unset}.ck.ck-editor__editable .table table td.ck-editor__editable_selected .ck-widget>.ck-widget__selection-handle,.ck.ck-editor__editable .table table th.ck-editor__editable_selected .ck-widget>.ck-widget__selection-handle{display:none}',"",{version:3,sources:["webpack://./../ckeditor5-theme-lark/theme/ckeditor5-table/tableselection.css"],names:[],mappings:"AAKA,MACC,wDACD,CAGC,0IAKC,gBAAiB,CAFjB,uBAAwB,CACxB,aAAc,CAFd,iBAiCD,CA3BC,sJAGC,yDAA0D,CAK1D,QAAS,CAPT,UAAW,CAKX,MAAO,CAJP,mBAAoB,CAEpB,iBAAkB,CAGlB,OAAQ,CAFR,KAID,CAEA,wTAEC,4BACD,CAMA,gKACC,aAKD,CAHC,0NACC,YACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-table-selected-cell-background: hsla(208, 90%, 80%, .3);
}

.ck.ck-editor__editable .table table {
	& td.ck-editor__editable_selected,
	& th.ck-editor__editable_selected {
		position: relative;
		caret-color: transparent;
		outline: unset;
		box-shadow: unset;

		/* https://github.com/ckeditor/ckeditor5/issues/6446 */
		&:after {
			content: '';
			pointer-events: none;
			background-color: var(--ck-table-selected-cell-background);
			position: absolute;
			top: 0;
			left: 0;
			right: 0;
			bottom: 0;
		}

		& ::selection,
		&:focus {
			background-color: transparent;
		}

		/*
		 * To reduce the amount of noise, all widgets in the table selection have no outline and no selection handle.
		 * See https://github.com/ckeditor/ckeditor5/issues/9491.
		 */
		& .ck-widget {
			outline: unset;

			& > .ck-widget__selection-handle {
				display: none;
			}
		}
	}
}
`],sourceRoot:""}]);const S=y},1801:(f,b,m)=>{m.d(b,{A:()=>S});var v=m(9372),A=m.n(v),x=m(935),y=m.n(x)()(A());y.push([f.id,".ck.ck-aria-live-announcer{left:-10000px;position:absolute;top:-10000px}.ck.ck-aria-live-region-list{list-style-type:none}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/arialiveannouncer/arialiveannouncer.css"],names:[],mappings:"AAKA,2BAEC,aAAc,CADd,iBAAkB,CAElB,YACD,CAEA,6BACC,oBACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-aria-live-announcer {
	position: absolute;
	left: -10000px;
	top: -10000px;
}

.ck.ck-aria-live-region-list {
	list-style-type: none;
}
`],sourceRoot:""}]);const S=y},5727:(f,b,m)=>{m.d(b,{A:()=>S});var v=m(9372),A=m.n(v),x=m(935),y=m.n(x)()(A());y.push([f.id,".ck.ck-autocomplete{position:relative}.ck.ck-autocomplete>.ck-search__results{position:absolute;z-index:var(--ck-z-panel)}.ck.ck-autocomplete>.ck-search__results.ck-search__results_n{bottom:100%}.ck.ck-autocomplete>.ck-search__results.ck-search__results_s{bottom:auto;top:100%}.ck.ck-autocomplete>.ck-search__results{border-radius:0}.ck-rounded-corners .ck.ck-autocomplete>.ck-search__results,.ck.ck-autocomplete>.ck-search__results.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-autocomplete>.ck-search__results{background:var(--ck-color-base-background);border:1px solid var(--ck-color-dropdown-panel-border);box-shadow:var(--ck-drop-shadow),0 0;max-height:200px;min-width:auto;overflow-y:auto}.ck.ck-autocomplete>.ck-search__results.ck-search__results_n{border-bottom-left-radius:0;border-bottom-right-radius:0;margin-bottom:-1px}.ck.ck-autocomplete>.ck-search__results.ck-search__results_s{border-top-left-radius:0;border-top-right-radius:0;margin-top:-1px}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/autocomplete/autocomplete.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/autocomplete/autocomplete.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_shadow.css"],names:[],mappings:"AAKA,oBACC,iBAeD,CAbC,wCACC,iBAAkB,CAClB,yBAUD,CARC,6DACC,WACD,CAEA,6DAEC,WAAY,CADZ,QAED,CCVD,wCCEA,eDuBA,CAzBA,uHCMC,qCDmBD,CAzBA,wCAMC,0CAA2C,CAC3C,sDAAuD,CEPxD,oCAA8B,CFI7B,gBAAiB,CAIjB,cAAe,CAHf,eAoBD,CAfC,6DACC,2BAA4B,CAC5B,4BAA6B,CAG7B,kBACD,CAEA,6DACC,wBAAyB,CACzB,yBAA0B,CAG1B,eACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-autocomplete {
	position: relative;

	& > .ck-search__results {
		position: absolute;
		z-index: var(--ck-z-panel);

		&.ck-search__results_n {
			bottom: 100%;
		}

		&.ck-search__results_s {
			top: 100%;
			bottom: auto;
		}
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-theme-lark/theme/mixins/_rounded.css";
@import "@ckeditor/ckeditor5-theme-lark/theme/mixins/_shadow.css";

.ck.ck-autocomplete {
	& > .ck-search__results {
		@mixin ck-rounded-corners;
		@mixin ck-drop-shadow;

		max-height: 200px;
		overflow-y: auto;
		background: var(--ck-color-base-background);
		border: 1px solid var(--ck-color-dropdown-panel-border);
		min-width: auto;

		&.ck-search__results_n {
			border-bottom-left-radius: 0;
			border-bottom-right-radius: 0;

			/* Prevent duplicated borders between the input and the results pane. */
			margin-bottom: -1px;
		}

		&.ck-search__results_s {
			border-top-left-radius: 0;
			border-top-right-radius: 0;

			/* Prevent duplicated borders between the input and the results pane. */
			margin-top: -1px;
		}
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A helper to combine multiple shadows.
 */
@define-mixin ck-box-shadow $shadowA, $shadowB: 0 0 {
	box-shadow: $shadowA, $shadowB;
}

/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
@define-mixin ck-drop-shadow {
	@mixin ck-box-shadow var(--ck-drop-shadow);
}
`],sourceRoot:""}]);const S=y},9715:(f,b,m)=>{m.d(b,{A:()=>S});var v=m(9372),A=m.n(v),x=m(935),y=m.n(x)()(A());y.push([f.id,".ck.ck-button,a.ck.ck-button{align-items:center;display:inline-flex;position:relative;-moz-user-select:none;-webkit-user-select:none;-ms-user-select:none;user-select:none}[dir=ltr] .ck.ck-button,[dir=ltr] a.ck.ck-button{justify-content:left}[dir=rtl] .ck.ck-button,[dir=rtl] a.ck.ck-button{justify-content:right}.ck.ck-button .ck-button__label,a.ck.ck-button .ck-button__label{display:none}.ck.ck-button.ck-button_with-text .ck-button__label,a.ck.ck-button.ck-button_with-text .ck-button__label{display:inline-block}.ck.ck-button:not(.ck-button_with-text),a.ck.ck-button:not(.ck-button_with-text){justify-content:center}.ck.ck-button,a.ck.ck-button{background:var(--ck-color-button-default-background)}.ck.ck-button:not(.ck-disabled):hover,a.ck.ck-button:not(.ck-disabled):hover{background:var(--ck-color-button-default-hover-background)}.ck.ck-button:not(.ck-disabled):active,a.ck.ck-button:not(.ck-disabled):active{background:var(--ck-color-button-default-active-background)}.ck.ck-button.ck-disabled,a.ck.ck-button.ck-disabled{background:var(--ck-color-button-default-disabled-background)}.ck.ck-button,a.ck.ck-button{border-radius:0}.ck-rounded-corners .ck.ck-button,.ck-rounded-corners a.ck.ck-button,.ck.ck-button.ck-rounded-corners,a.ck.ck-button.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-button,a.ck.ck-button{-webkit-appearance:none;border:1px solid transparent;cursor:default;font-size:inherit;line-height:1;min-height:var(--ck-ui-component-min-height);min-width:var(--ck-ui-component-min-height);padding:var(--ck-spacing-tiny);text-align:center;transition:box-shadow .2s ease-in-out,border .2s ease-in-out;vertical-align:middle;white-space:nowrap}@media (prefers-reduced-motion:reduce){.ck.ck-button,a.ck.ck-button{transition:none}}.ck.ck-button:active,.ck.ck-button:focus,a.ck.ck-button:active,a.ck.ck-button:focus{border:var(--ck-focus-ring);box-shadow:var(--ck-focus-outer-shadow),0 0;outline:none}.ck.ck-button .ck-button__icon use,.ck.ck-button .ck-button__icon use *,a.ck.ck-button .ck-button__icon use,a.ck.ck-button .ck-button__icon use *{color:inherit}.ck.ck-button .ck-button__label,a.ck.ck-button .ck-button__label{color:inherit;cursor:inherit;font-size:inherit;font-weight:inherit;vertical-align:middle}[dir=ltr] .ck.ck-button .ck-button__label,[dir=ltr] a.ck.ck-button .ck-button__label{text-align:left}[dir=rtl] .ck.ck-button .ck-button__label,[dir=rtl] a.ck.ck-button .ck-button__label{text-align:right}.ck.ck-button .ck-button__keystroke,a.ck.ck-button .ck-button__keystroke{color:inherit}[dir=ltr] .ck.ck-button .ck-button__keystroke,[dir=ltr] a.ck.ck-button .ck-button__keystroke{margin-left:var(--ck-spacing-large)}[dir=rtl] .ck.ck-button .ck-button__keystroke,[dir=rtl] a.ck.ck-button .ck-button__keystroke{margin-right:var(--ck-spacing-large)}.ck.ck-button .ck-button__keystroke,a.ck.ck-button .ck-button__keystroke{opacity:.5}.ck.ck-button.ck-disabled:active,.ck.ck-button.ck-disabled:focus,a.ck.ck-button.ck-disabled:active,a.ck.ck-button.ck-disabled:focus{box-shadow:var(--ck-focus-disabled-outer-shadow),0 0}.ck.ck-button.ck-disabled .ck-button__icon,.ck.ck-button.ck-disabled .ck-button__label,a.ck.ck-button.ck-disabled .ck-button__icon,a.ck.ck-button.ck-disabled .ck-button__label{opacity:var(--ck-disabled-opacity)}.ck.ck-button.ck-disabled .ck-button__keystroke,a.ck.ck-button.ck-disabled .ck-button__keystroke{opacity:.3}.ck.ck-button.ck-button_with-text,a.ck.ck-button.ck-button_with-text{padding:var(--ck-spacing-tiny) var(--ck-spacing-standard)}[dir=ltr] .ck.ck-button.ck-button_with-text .ck-button__icon,[dir=ltr] a.ck.ck-button.ck-button_with-text .ck-button__icon{margin-left:calc(var(--ck-spacing-small)*-1);margin-right:var(--ck-spacing-small)}[dir=rtl] .ck.ck-button.ck-button_with-text .ck-button__icon,[dir=rtl] a.ck.ck-button.ck-button_with-text .ck-button__icon{margin-left:var(--ck-spacing-small);margin-right:calc(var(--ck-spacing-small)*-1)}.ck.ck-button.ck-button_with-keystroke .ck-button__label,a.ck.ck-button.ck-button_with-keystroke .ck-button__label{flex-grow:1}.ck.ck-button.ck-on,a.ck.ck-button.ck-on{background:var(--ck-color-button-on-background)}.ck.ck-button.ck-on:not(.ck-disabled):hover,a.ck.ck-button.ck-on:not(.ck-disabled):hover{background:var(--ck-color-button-on-hover-background)}.ck.ck-button.ck-on:not(.ck-disabled):active,a.ck.ck-button.ck-on:not(.ck-disabled):active{background:var(--ck-color-button-on-active-background)}.ck.ck-button.ck-on.ck-disabled,a.ck.ck-button.ck-on.ck-disabled{background:var(--ck-color-button-on-disabled-background)}.ck.ck-button.ck-on,a.ck.ck-button.ck-on{color:var(--ck-color-button-on-color)}.ck.ck-button.ck-button-save,a.ck.ck-button.ck-button-save{color:var(--ck-color-button-save)}.ck.ck-button.ck-button-cancel,a.ck.ck-button.ck-button-cancel{color:var(--ck-color-button-cancel)}.ck.ck-button-action,a.ck.ck-button-action{background:var(--ck-color-button-action-background)}.ck.ck-button-action:not(.ck-disabled):hover,a.ck.ck-button-action:not(.ck-disabled):hover{background:var(--ck-color-button-action-hover-background)}.ck.ck-button-action:not(.ck-disabled):active,a.ck.ck-button-action:not(.ck-disabled):active{background:var(--ck-color-button-action-active-background)}.ck.ck-button-action.ck-disabled,a.ck.ck-button-action.ck-disabled{background:var(--ck-color-button-action-disabled-background)}.ck.ck-button-action,a.ck.ck-button-action{color:var(--ck-color-button-action-text)}.ck.ck-button-bold,a.ck.ck-button-bold{font-weight:700}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/button/button.css","webpack://./../ckeditor5-ui/theme/mixins/_unselectable.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/button/button.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/mixins/_button.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_focus.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_shadow.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_disabled.css"],names:[],mappings:"AAQA,6BAMC,kBAAmB,CADnB,mBAAoB,CADpB,iBAAkB,CCHlB,qBAAsB,CACtB,wBAAyB,CACzB,oBAAqB,CACrB,gBD0BD,CA9BA,iDASE,oBAqBF,CA9BA,iDAaE,qBAiBF,CAdC,iEACC,YACD,CAGC,yGACC,oBACD,CAID,iFACC,sBACD,CEzBD,6BCAC,oDD+ID,CC5IE,6EACC,0DACD,CAEA,+EACC,2DACD,CAID,qDACC,6DACD,CDfD,6BEDC,eFgJD,CA/IA,wIEGE,qCF4IF,CA/IA,6BA6BC,uBAAwB,CANxB,4BAA6B,CAjB7B,cAAe,CAcf,iBAAkB,CAHlB,aAAc,CAJd,4CAA6C,CAD7C,2CAA4C,CAJ5C,8BAA+B,CAC/B,iBAAkB,CAiBlB,4DAA8D,CAnB9D,qBAAsB,CAFtB,kBA0ID,CAhHC,uCA/BD,6BAgCE,eA+GF,CA9GC,CAEA,oFGpCA,2BAA2B,CCF3B,2CAA8B,CDC9B,YHyCA,CAIC,kJAEC,aACD,CAGD,iEAIC,aAAc,CACd,cAAe,CAHf,iBAAkB,CAClB,mBAAoB,CAMpB,qBASD,CAlBA,qFAYE,eAMF,CAlBA,qFAgBE,gBAEF,CAEA,yEACC,aAWD,CAZA,6FAIE,mCAQF,CAZA,6FAQE,oCAIF,CAZA,yEAWC,UACD,CAIC,oIIxFD,oDJ4FC,CAOA,gLKnGD,kCLqGC,CAEA,iGACC,UACD,CAGD,qEACC,yDAcD,CAXC,2HAEE,4CAA+C,CAC/C,oCAOF,CAVA,2HAQE,mCAAoC,CADpC,6CAGF,CAKA,mHACC,WACD,CAID,yCClIA,+CDsIA,CCnIC,yFACC,qDACD,CAEA,2FACC,sDACD,CAID,iEACC,wDACD,CDmHA,yCAGC,qCACD,CAEA,2DACC,iCACD,CAEA,+DACC,mCACD,CAID,2CClJC,mDDuJD,CCpJE,2FACC,yDACD,CAEA,6FACC,0DACD,CAID,mEACC,4DACD,CDmID,2CAIC,wCACD,CAEA,uCAEC,eACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../mixins/_unselectable.css";
@import "../../mixins/_dir.css";

.ck.ck-button,
a.ck.ck-button {
	@mixin ck-unselectable;

	position: relative;
	display: inline-flex;
	align-items: center;

	@mixin ck-dir ltr {
		justify-content: left;
	}

	@mixin ck-dir rtl {
		justify-content: right;
	}

	& .ck-button__label {
		display: none;
	}

	&.ck-button_with-text {
		& .ck-button__label {
			display: inline-block;
		}
	}

	/* Center the icon horizontally in a button without text. */
	&:not(.ck-button_with-text)  {
		justify-content: center;
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Makes element unselectable.
 */
@define-mixin ck-unselectable {
	-moz-user-select: none;
	-webkit-user-select: none;
	-ms-user-select: none;
	user-select: none
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_focus.css";
@import "../../../mixins/_shadow.css";
@import "../../../mixins/_disabled.css";
@import "../../../mixins/_rounded.css";
@import "../../mixins/_button.css";
@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

.ck.ck-button,
a.ck.ck-button {
	@mixin ck-button-colors --ck-color-button-default;
	@mixin ck-rounded-corners;

	white-space: nowrap;
	cursor: default;
	vertical-align: middle;
	padding: var(--ck-spacing-tiny);
	text-align: center;

	/* A very important piece of styling. Go to variable declaration to learn more. */
	min-width: var(--ck-ui-component-min-height);
	min-height: var(--ck-ui-component-min-height);

	/* Normalize the height of the line. Removing this will break consistent height
	among text and text-less buttons (with icons). */
	line-height: 1;

	/* Enable font size inheritance, which allows fluid UI scaling. */
	font-size: inherit;

	/* Avoid flickering when the foucs border shows up. */
	border: 1px solid transparent;

	/* Apply some smooth transition to the box-shadow and border. */
	transition: box-shadow .2s ease-in-out, border .2s ease-in-out;

	/* https://github.com/ckeditor/ckeditor5-theme-lark/issues/189 */
	-webkit-appearance: none;

	@media (prefers-reduced-motion: reduce) {
		transition: none;
	}

	&:active,
	&:focus {
		@mixin ck-focus-ring;
		@mixin ck-box-shadow var(--ck-focus-outer-shadow);
	}

	/* Allow icon coloring using the text "color" property. */
	& .ck-button__icon {
		& use,
		& use * {
			color: inherit;
		}
	}

	& .ck-button__label {
		/* Enable font size inheritance, which allows fluid UI scaling. */
		font-size: inherit;
		font-weight: inherit;
		color: inherit;
		cursor: inherit;

		/* Must be consistent with .ck-icon's vertical align. Otherwise, buttons with and
		without labels (but with icons) have different sizes in Chrome */
		vertical-align: middle;

		@mixin ck-dir ltr {
			text-align: left;
		}

		@mixin ck-dir rtl {
			text-align: right;
		}
	}

	& .ck-button__keystroke {
		color: inherit;

		@mixin ck-dir ltr {
			margin-left: var(--ck-spacing-large);
		}

		@mixin ck-dir rtl {
			margin-right: var(--ck-spacing-large);
		}

		opacity: .5;
	}

	/* https://github.com/ckeditor/ckeditor5-theme-lark/issues/70 */
	&.ck-disabled {
		&:active,
		&:focus {
			/* The disabled button should have a slightly less visible shadow when focused. */
			@mixin ck-box-shadow var(--ck-focus-disabled-outer-shadow);
		}

		& .ck-button__icon {
			@mixin ck-disabled;
		}

		/* https://github.com/ckeditor/ckeditor5-theme-lark/issues/98 */
		& .ck-button__label {
			@mixin ck-disabled;
		}

		& .ck-button__keystroke {
			opacity: .3;
		}
	}

	&.ck-button_with-text {
		padding: var(--ck-spacing-tiny) var(--ck-spacing-standard);

		/* stylelint-disable-next-line no-descending-specificity */
		& .ck-button__icon {
			@mixin ck-dir ltr {
				margin-left: calc(-1 * var(--ck-spacing-small));
				margin-right: var(--ck-spacing-small);
			}

			@mixin ck-dir rtl {
				margin-right: calc(-1 * var(--ck-spacing-small));
				margin-left: var(--ck-spacing-small);
			}
		}
	}

	&.ck-button_with-keystroke {
		/* stylelint-disable-next-line no-descending-specificity */
		& .ck-button__label {
			flex-grow: 1;
		}
	}

	/* A style of the button which is currently on, e.g. its feature is active. */
	&.ck-on {
		@mixin ck-button-colors --ck-color-button-on;

		color: var(--ck-color-button-on-color);
	}

	&.ck-button-save {
		color: var(--ck-color-button-save);
	}

	&.ck-button-cancel {
		color: var(--ck-color-button-cancel);
	}
}

/* A style of the button which handles the primary action. */
.ck.ck-button-action,
a.ck.ck-button-action {
	@mixin ck-button-colors --ck-color-button-action;

	color: var(--ck-color-button-action-text);
}

.ck.ck-button-bold,
a.ck.ck-button-bold {
	font-weight: bold;
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements a button of given background color.
 *
 * @param {String} $background - Background color of the button.
 * @param {String} $border - Border color of the button.
 */
@define-mixin ck-button-colors $prefix {
	background: var($(prefix)-background);

	&:not(.ck-disabled) {
		&:hover {
			background: var($(prefix)-hover-background);
		}

		&:active {
			background: var($(prefix)-active-background);
		}
	}

	/* https://github.com/ckeditor/ckeditor5-theme-lark/issues/98 */
	&.ck-disabled {
		background: var($(prefix)-disabled-background);
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A visual style of focused element's border.
 */
@define-mixin ck-focus-ring {
	/* Disable native outline. */
	outline: none;
	border: var(--ck-focus-ring)
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A helper to combine multiple shadows.
 */
@define-mixin ck-box-shadow $shadowA, $shadowB: 0 0 {
	box-shadow: $shadowA, $shadowB;
}

/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
@define-mixin ck-drop-shadow {
	@mixin ck-box-shadow var(--ck-drop-shadow);
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A class which indicates that an element holding it is disabled.
 */
@define-mixin ck-disabled {
	opacity: var(--ck-disabled-opacity);
}
`],sourceRoot:""}]);const S=y},4391:(f,b,m)=>{m.d(b,{A:()=>S});var v=m(9372),A=m.n(v),x=m(935),y=m.n(x)()(A());y.push([f.id,".ck.ck-button.ck-switchbutton .ck-button__toggle,.ck.ck-button.ck-switchbutton .ck-button__toggle .ck-button__toggle__inner{display:block}:root{--ck-switch-button-toggle-width:2.6153846154em;--ck-switch-button-toggle-inner-size:calc(1.07692em + 1px);--ck-switch-button-translation:calc(var(--ck-switch-button-toggle-width) - var(--ck-switch-button-toggle-inner-size) - 2px);--ck-switch-button-inner-hover-shadow:0 0 0 5px var(--ck-color-switch-button-inner-shadow)}.ck.ck-button.ck-switchbutton,.ck.ck-button.ck-switchbutton.ck-on:active,.ck.ck-button.ck-switchbutton.ck-on:focus,.ck.ck-button.ck-switchbutton.ck-on:hover,.ck.ck-button.ck-switchbutton:active,.ck.ck-button.ck-switchbutton:focus,.ck.ck-button.ck-switchbutton:hover{background:transparent;color:inherit}[dir=ltr] .ck.ck-button.ck-switchbutton .ck-button__label{margin-right:calc(var(--ck-spacing-large)*2)}[dir=rtl] .ck.ck-button.ck-switchbutton .ck-button__label{margin-left:calc(var(--ck-spacing-large)*2)}.ck.ck-button.ck-switchbutton .ck-button__toggle{border-radius:0}.ck-rounded-corners .ck.ck-button.ck-switchbutton .ck-button__toggle,.ck.ck-button.ck-switchbutton .ck-button__toggle.ck-rounded-corners{border-radius:var(--ck-border-radius)}[dir=ltr] .ck.ck-button.ck-switchbutton .ck-button__toggle{margin-left:auto}[dir=rtl] .ck.ck-button.ck-switchbutton .ck-button__toggle{margin-right:auto}.ck.ck-button.ck-switchbutton .ck-button__toggle{background:var(--ck-color-switch-button-off-background);border:1px solid transparent;transition:background .4s ease,box-shadow .2s ease-in-out,outline .2s ease-in-out;width:var(--ck-switch-button-toggle-width)}.ck.ck-button.ck-switchbutton .ck-button__toggle .ck-button__toggle__inner{border-radius:0}.ck-rounded-corners .ck.ck-button.ck-switchbutton .ck-button__toggle .ck-button__toggle__inner,.ck.ck-button.ck-switchbutton .ck-button__toggle .ck-button__toggle__inner.ck-rounded-corners{border-radius:var(--ck-border-radius);border-radius:calc(var(--ck-border-radius)*.5)}.ck.ck-button.ck-switchbutton .ck-button__toggle .ck-button__toggle__inner{background:var(--ck-color-switch-button-inner-background);height:var(--ck-switch-button-toggle-inner-size);transition:all .3s ease;width:var(--ck-switch-button-toggle-inner-size)}@media (prefers-reduced-motion:reduce){.ck.ck-button.ck-switchbutton .ck-button__toggle .ck-button__toggle__inner{transition:none}}.ck.ck-button.ck-switchbutton .ck-button__toggle:hover{background:var(--ck-color-switch-button-off-hover-background)}.ck.ck-button.ck-switchbutton .ck-button__toggle:hover .ck-button__toggle__inner{box-shadow:var(--ck-switch-button-inner-hover-shadow)}.ck.ck-button.ck-switchbutton.ck-disabled .ck-button__toggle{opacity:var(--ck-disabled-opacity)}.ck.ck-button.ck-switchbutton:focus{border-color:transparent;box-shadow:none;outline:none}.ck.ck-button.ck-switchbutton:focus .ck-button__toggle{box-shadow:0 0 0 1px var(--ck-color-base-background),0 0 0 5px var(--ck-color-focus-outer-shadow);outline:var(--ck-focus-ring);outline-offset:1px}.ck.ck-button.ck-switchbutton.ck-on .ck-button__toggle{background:var(--ck-color-switch-button-on-background)}.ck.ck-button.ck-switchbutton.ck-on .ck-button__toggle:hover{background:var(--ck-color-switch-button-on-hover-background)}[dir=ltr] .ck.ck-button.ck-switchbutton.ck-on .ck-button__toggle .ck-button__toggle__inner{transform:translateX(var( --ck-switch-button-translation ))}[dir=rtl] .ck.ck-button.ck-switchbutton.ck-on .ck-button__toggle .ck-button__toggle__inner{transform:translateX(calc(var( --ck-switch-button-translation )*-1))}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/button/switchbutton.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/button/switchbutton.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_disabled.css"],names:[],mappings:"AASE,4HACC,aACD,CCCF,MAEC,8CAA+C,CAE/C,0DAAgE,CAChE,2HAIC,CACD,0FACD,CAOC,0QAEC,sBAAuB,CADvB,aAED,CAEA,0DAGE,4CAOF,CAVA,0DAQE,2CAEF,CAEA,iDCpCA,eDgFA,CA5CA,yIChCC,qCD4ED,CA5CA,2DAKE,gBAuCF,CA5CA,2DAUE,iBAkCF,CA5CA,iDAkBC,uDAAwD,CAFxD,4BAA6B,CAD7B,iFAAsF,CAEtF,0CA2BD,CAxBC,2ECxDD,eDuEC,CAfA,6LCpDA,qCAAsC,CDsDpC,8CAaF,CAfA,2EAOC,yDAA0D,CAD1D,gDAAiD,CAIjD,uBAA0B,CAL1B,+CAUD,CAHC,uCAZD,2EAaE,eAEF,CADC,CAGD,uDACC,6DAKD,CAHC,iFACC,qDACD,CAIF,6DEpFA,kCFsFA,CAGA,oCACC,wBAAyB,CAEzB,eAAgB,CADhB,YAQD,CALC,uDACC,iGAAmG,CAEnG,4BAA6B,CAD7B,kBAED,CAKA,uDACC,sDAkBD,CAhBC,6DACC,4DACD,CAEA,2FAKE,2DAMF,CAXA,2FASE,oEAEF",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-button.ck-switchbutton {
	& .ck-button__toggle {
		display: block;

		& .ck-button__toggle__inner {
			display: block;
		}
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";
@import "../../../mixins/_disabled.css";
@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

/* Note: To avoid rendering issues (aliasing) but to preserve the responsive nature
of the component, floating–point numbers have been used which, for the default font size
(see: --ck-font-size-base), will generate simple integers. */
:root {
	/* 34px at 13px font-size */
	--ck-switch-button-toggle-width: 2.6153846154em;
	/* 14px at 13px font-size */
	--ck-switch-button-toggle-inner-size: calc(1.0769230769em + 1px);
	--ck-switch-button-translation: calc(
		var(--ck-switch-button-toggle-width) -
		var(--ck-switch-button-toggle-inner-size) -
		2px /* Border */
	);
	--ck-switch-button-inner-hover-shadow: 0 0 0 5px var(--ck-color-switch-button-inner-shadow);
}

.ck.ck-button.ck-switchbutton {
	/* Unlike a regular button, the switch button text color and background should never change.
	 * Changing toggle switch (background, outline) is enough to carry the information about the
	 * state of the entire component (https://github.com/ckeditor/ckeditor5/issues/12519)
	 */
	&, &:hover, &:focus, &:active, &.ck-on:hover, &.ck-on:focus, &.ck-on:active {
		color: inherit;
		background: transparent;
	}

	& .ck-button__label {
		@mixin ck-dir ltr {
			/* Separate the label from the switch */
			margin-right: calc(2 * var(--ck-spacing-large));
		}

		@mixin ck-dir rtl {
			/* Separate the label from the switch */
			margin-left: calc(2 * var(--ck-spacing-large));
		}
	}

	& .ck-button__toggle {
		@mixin ck-rounded-corners;

		@mixin ck-dir ltr {
			/* Make sure the toggle is always to the right as far as possible. */
			margin-left: auto;
		}

		@mixin ck-dir rtl {
			/* Make sure the toggle is always to the left as far as possible. */
			margin-right: auto;
		}

		/* Apply some smooth transition to the box-shadow and border. */
		/* Gently animate the background color of the toggle switch */
		transition: background 400ms ease, box-shadow .2s ease-in-out, outline .2s ease-in-out;
		border: 1px solid transparent;
		width: var(--ck-switch-button-toggle-width);
		background: var(--ck-color-switch-button-off-background);

		& .ck-button__toggle__inner {
			@mixin ck-rounded-corners {
				border-radius: calc(.5 * var(--ck-border-radius));
			}

			width: var(--ck-switch-button-toggle-inner-size);
			height: var(--ck-switch-button-toggle-inner-size);
			background: var(--ck-color-switch-button-inner-background);

			/* Gently animate the inner part of the toggle switch */
			transition: all 300ms ease;

			@media (prefers-reduced-motion: reduce) {
				transition: none;
			}
		}

		&:hover {
			background: var(--ck-color-switch-button-off-hover-background);

			& .ck-button__toggle__inner {
				box-shadow: var(--ck-switch-button-inner-hover-shadow);
			}
		}
	}

	&.ck-disabled .ck-button__toggle {
		@mixin ck-disabled;
	}

	/* Overriding default .ck-button:focus styles + an outline around the toogle */
	&:focus {
		border-color: transparent;
		outline: none;
		box-shadow: none;

		& .ck-button__toggle {
			box-shadow: 0 0 0 1px var(--ck-color-base-background), 0 0 0 5px var(--ck-color-focus-outer-shadow);
			outline-offset: 1px;
			outline: var(--ck-focus-ring);
		}
	}

	/* stylelint-disable-next-line no-descending-specificity */
	&.ck-on {
		& .ck-button__toggle {
			background: var(--ck-color-switch-button-on-background);

			&:hover {
				background: var(--ck-color-switch-button-on-hover-background);
			}

			& .ck-button__toggle__inner {
				/*
				* Move the toggle switch to the right. It will be animated.
				*/
				@mixin ck-dir ltr {
					transform: translateX( var( --ck-switch-button-translation ) );
				}

				@mixin ck-dir rtl {
					transform: translateX( calc( -1 * var( --ck-switch-button-translation ) ) );
				}
			}
		}
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A class which indicates that an element holding it is disabled.
 */
@define-mixin ck-disabled {
	opacity: var(--ck-disabled-opacity);
}
`],sourceRoot:""}]);const S=y},25:(f,b,m)=>{m.d(b,{A:()=>S});var v=m(9372),A=m.n(v),x=m(935),y=m.n(x)()(A());y.push([f.id,".ck.ck-collapsible.ck-collapsible_collapsed>.ck-collapsible__children{display:none}:root{--ck-collapsible-arrow-size:calc(var(--ck-icon-size)*0.5)}.ck.ck-collapsible>.ck.ck-button{border-radius:0;color:inherit;font-weight:700;padding:var(--ck-list-button-padding);width:100%}.ck.ck-collapsible>.ck.ck-button:focus{background:transparent}.ck.ck-collapsible>.ck.ck-button:active,.ck.ck-collapsible>.ck.ck-button:hover:not(:focus),.ck.ck-collapsible>.ck.ck-button:not(:focus){background:transparent;border-color:transparent;box-shadow:none}.ck.ck-collapsible>.ck.ck-button>.ck-icon{margin-right:var(--ck-spacing-medium);width:var(--ck-collapsible-arrow-size)}.ck.ck-collapsible>.ck-collapsible__children{padding:var(--ck-spacing-medium) var(--ck-spacing-large) var(--ck-spacing-large)}.ck.ck-collapsible.ck-collapsible_collapsed>.ck.ck-button .ck-icon{transform:rotate(-90deg)}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/collapsible/collapsible.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/collapsible/collapsible.css"],names:[],mappings:"AAMC,sEACC,YACD,CCHD,MACC,yDACD,CAGC,iCAIC,eAAgB,CAChB,aAAc,CAHd,eAAiB,CACjB,qCAAsC,CAFtC,UAoBD,CAdC,uCACC,sBACD,CAEA,wIACC,sBAAuB,CACvB,wBAAyB,CACzB,eACD,CAEA,0CACC,qCAAsC,CACtC,sCACD,CAGD,6CACC,gFACD,CAGC,mEACC,wBACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-collapsible.ck-collapsible_collapsed {
	& > .ck-collapsible__children {
		display: none;
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-collapsible-arrow-size: calc(0.5 * var(--ck-icon-size));
}

.ck.ck-collapsible {
	& > .ck.ck-button {
		width: 100%;
		font-weight: bold;
		padding: var(--ck-list-button-padding);
		border-radius: 0;
		color: inherit;

		&:focus {
			background: transparent;
		}

		&:active, &:not(:focus), &:hover:not(:focus) {
			background: transparent;
			border-color: transparent;
			box-shadow: none;
		}

		& > .ck-icon {
			margin-right: var(--ck-spacing-medium);
			width: var(--ck-collapsible-arrow-size);
		}
	}

	& > .ck-collapsible__children {
		padding: var(--ck-spacing-medium) var(--ck-spacing-large) var(--ck-spacing-large);
	}

	&.ck-collapsible_collapsed {
		& > .ck.ck-button .ck-icon {
			transform: rotate(-90deg);
		}
	}
}
`],sourceRoot:""}]);const S=y},7317:(f,b,m)=>{m.d(b,{A:()=>S});var v=m(9372),A=m.n(v),x=m(935),y=m.n(x)()(A());y.push([f.id,".ck.ck-color-grid{display:grid}:root{--ck-color-grid-tile-size:24px;--ck-color-color-grid-check-icon:#166fd4}.ck.ck-color-grid{grid-gap:5px;padding:8px}.ck.ck-color-grid__tile{transition:box-shadow .2s ease}@media (forced-colors:none){.ck.ck-color-grid__tile{border:0;height:var(--ck-color-grid-tile-size);min-height:var(--ck-color-grid-tile-size);min-width:var(--ck-color-grid-tile-size);padding:0;width:var(--ck-color-grid-tile-size)}.ck.ck-color-grid__tile.ck-on,.ck.ck-color-grid__tile:focus:not(.ck-disabled),.ck.ck-color-grid__tile:hover:not(.ck-disabled){border:0}.ck.ck-color-grid__tile.ck-color-selector__color-tile_bordered{box-shadow:0 0 0 1px var(--ck-color-base-border)}.ck.ck-color-grid__tile.ck-on{box-shadow:inset 0 0 0 1px var(--ck-color-base-background),0 0 0 2px var(--ck-color-base-text)}.ck.ck-color-grid__tile:focus:not(.ck-disabled),.ck.ck-color-grid__tile:hover:not(.ck-disabled){box-shadow:inset 0 0 0 1px var(--ck-color-base-background),0 0 0 2px var(--ck-color-focus-border)}}@media (forced-colors:active){.ck.ck-color-grid__tile{height:unset;min-height:unset;min-width:unset;padding:0 var(--ck-spacing-small);width:unset}.ck.ck-color-grid__tile .ck-button__label{display:inline-block}}@media (prefers-reduced-motion:reduce){.ck.ck-color-grid__tile{transition:none}}.ck.ck-color-grid__tile.ck-disabled{cursor:unset;transition:unset}.ck.ck-color-grid__tile .ck.ck-icon{color:var(--ck-color-color-grid-check-icon);display:none}.ck.ck-color-grid__tile.ck-on .ck.ck-icon{display:block}.ck.ck-color-grid__label{padding:0 var(--ck-spacing-standard)}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/colorgrid/colorgrid.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/colorgrid/colorgrid.css","webpack://./../ckeditor5-ui/theme/mixins/_mediacolors.css"],names:[],mappings:"AAKA,kBACC,YACD,CCCA,MACC,8BAA+B,CAK/B,wCACD,CAEA,kBACC,YAAa,CACb,WACD,CAEA,wBACC,8BAkED,CC3EC,4BACC,wBDgBA,QAAS,CAJT,qCAAsC,CAEtC,yCAA0C,CAD1C,wCAAyC,CAEzC,SAAU,CAJV,oCCTA,CDgBA,8HAIC,QACD,CAEA,+DACC,gDACD,CAEA,8BACC,8FACD,CAEA,gGAEC,iGACD,CCjCD,CAZA,8BACC,wBDqDA,YAAa,CAEb,gBAAiB,CADjB,eAAgB,CAEhB,iCAAkC,CAJlC,WClDA,CDwDA,0CACC,oBACD,CCzDD,CD4DA,uCAhDD,wBAiDE,eAkBF,CAjBC,CAEA,oCACC,YAAa,CACb,gBACD,CAEA,oCAEC,2CAA4C,CAD5C,YAED,CAGC,0CACC,aACD,CAIF,yBACC,oCACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-color-grid {
	display: grid;
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";
@import "@ckeditor/ckeditor5-ui/theme/mixins/_mediacolors.css";

:root {
	--ck-color-grid-tile-size: 24px;

	/* Not using global colors here because these may change but some colors in a pallette
	 * require special treatment. For instance, this ensures no matter what the UI text color is,
	 * the check icon will look good on the black color tile. */
	--ck-color-color-grid-check-icon: hsl(212, 81%, 46%);
}

.ck.ck-color-grid {
	grid-gap: 5px;
	padding: 8px;
}

.ck.ck-color-grid__tile {
	transition: .2s ease box-shadow;

	@mixin ck-media-default-colors {
		width: var(--ck-color-grid-tile-size);
		height: var(--ck-color-grid-tile-size);
		min-width: var(--ck-color-grid-tile-size);
		min-height: var(--ck-color-grid-tile-size);
		padding: 0;
		border: 0;

		&.ck-on,
		&:focus:not( .ck-disabled ),
		&:hover:not( .ck-disabled ) {
			/* Disable the default .ck-button's border ring. */
			border: 0;
		}

		&.ck-color-selector__color-tile_bordered {
			box-shadow: 0 0 0 1px var(--ck-color-base-border);
		}

		&.ck-on {
			box-shadow: inset 0 0 0 1px var(--ck-color-base-background), 0 0 0 2px var(--ck-color-base-text);
		}

		&:focus:not( .ck-disabled ),
		&:hover:not( .ck-disabled ) {
			box-shadow: inset 0 0 0 1px var(--ck-color-base-background), 0 0 0 2px var(--ck-color-focus-border);
		}
	}

	/*
	 * In high contrast mode, the colors are replaced with text labels.
	 * See https://github.com/ckeditor/ckeditor5/issues/14907.
	 */
	@mixin ck-media-forced-colors {
		width: unset;
		height: unset;
		min-width: unset;
		min-height: unset;
		padding: 0 var(--ck-spacing-small);

		& .ck-button__label {
			display: inline-block;
		}
	}

	@media (prefers-reduced-motion: reduce) {
		transition: none;
	}

	&.ck-disabled {
		cursor: unset;
		transition: unset;
	}

	& .ck.ck-icon {
		display: none;
		color: var(--ck-color-color-grid-check-icon);
	}

	&.ck-on {
		& .ck.ck-icon {
			display: block;
		}
	}
}

.ck.ck-color-grid__label {
	padding: 0 var(--ck-spacing-standard);
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@define-mixin ck-media-forced-colors {
	@media (forced-colors: active) {
		& {
			@mixin-content;
		}
	}
}

@define-mixin ck-media-default-colors {
	@media (forced-colors: none) {
		& {
			@mixin-content;
		}
	}
}
`],sourceRoot:""}]);const S=y},1905:(f,b,m)=>{m.d(b,{A:()=>S});var v=m(9372),A=m.n(v),x=m(935),y=m.n(x)()(A());y.push([f.id,".color-picker-hex-input{width:max-content}.color-picker-hex-input .ck.ck-input{min-width:unset}.ck.ck-color-picker__row{display:flex;flex-direction:row;flex-wrap:nowrap;justify-content:space-between;margin:var(--ck-spacing-large) 0 0;width:unset}.ck.ck-color-picker__row .ck.ck-labeled-field-view{padding-top:unset}.ck.ck-color-picker__row .ck.ck-input-text{width:unset}.ck.ck-color-picker__row .ck-color-picker__hash-view{padding-right:var(--ck-spacing-medium);padding-top:var(--ck-spacing-tiny)}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/colorpicker/colorpicker.css"],names:[],mappings:"AAKA,wBACC,iBAKD,CAHC,qCACC,eACD,CAGD,yBACC,YAAa,CACb,kBAAmB,CACnB,gBAAiB,CACjB,6BAA8B,CAC9B,kCAAmC,CACnC,WAcD,CAZC,mDACC,iBACD,CAEA,2CACC,WACD,CAEA,qDAEC,sCAAuC,CADvC,kCAED",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.color-picker-hex-input {
	width: max-content;

	& .ck.ck-input {
		min-width: unset;
	}
}

.ck.ck-color-picker__row {
	display: flex;
	flex-direction: row;
	flex-wrap: nowrap;
	justify-content: space-between;
	margin: var(--ck-spacing-large) 0 0;
	width: unset;

	& .ck.ck-labeled-field-view {
		padding-top: unset;
	}

	& .ck.ck-input-text {
		width: unset;
	}

	& .ck-color-picker__hash-view {
		padding-top: var(--ck-spacing-tiny);
		padding-right: var(--ck-spacing-medium);
	}
}
`],sourceRoot:""}]);const S=y},6309:(f,b,m)=>{m.d(b,{A:()=>S});var v=m(9372),A=m.n(v),x=m(935),y=m.n(x)()(A());y.push([f.id,".ck.ck-color-selector .ck-color-grids-fragment .ck-button.ck-color-selector__color-picker,.ck.ck-color-selector .ck-color-grids-fragment .ck-button.ck-color-selector__remove-color{align-items:center;display:flex}[dir=rtl] .ck.ck-color-selector .ck-color-grids-fragment .ck-button.ck-color-selector__color-picker,[dir=rtl] .ck.ck-color-selector .ck-color-grids-fragment .ck-button.ck-color-selector__remove-color{justify-content:flex-start}.ck.ck-color-selector .ck-color-picker-fragment .ck.ck-color-selector_action-bar{display:flex;flex-direction:row;justify-content:space-around}.ck.ck-color-selector .ck-color-picker-fragment .ck.ck-color-selector_action-bar .ck-button-cancel,.ck.ck-color-selector .ck-color-picker-fragment .ck.ck-color-selector_action-bar .ck-button-save{flex:1}.ck.ck-color-selector .ck-color-grids-fragment .ck-button.ck-color-selector__color-picker,.ck.ck-color-selector .ck-color-grids-fragment .ck-button.ck-color-selector__remove-color{width:100%}.ck.ck-color-selector .ck-color-grids-fragment .ck-button.ck-color-selector__color-picker{border-bottom-left-radius:0;border-bottom-right-radius:0;padding:calc(var(--ck-spacing-standard)/2) var(--ck-spacing-standard)}.ck.ck-color-selector .ck-color-grids-fragment .ck-button.ck-color-selector__color-picker:not(:focus){border-top:1px solid var(--ck-color-base-border)}[dir=ltr] .ck.ck-color-selector .ck-color-grids-fragment .ck-button.ck-color-selector__color-picker .ck.ck-icon{margin-right:var(--ck-spacing-standard)}[dir=rtl] .ck.ck-color-selector .ck-color-grids-fragment .ck-button.ck-color-selector__color-picker .ck.ck-icon{margin-left:var(--ck-spacing-standard)}.ck.ck-color-selector .ck-color-grids-fragment label.ck.ck-color-grid__label{font-weight:unset}.ck.ck-color-selector .ck-color-picker-fragment .ck.ck-color-picker{padding:8px}.ck.ck-color-selector .ck-color-picker-fragment .ck.ck-color-picker .hex-color-picker{height:100px;min-width:180px}.ck.ck-color-selector .ck-color-picker-fragment .ck.ck-color-picker .hex-color-picker::part(saturation){border-radius:var(--ck-border-radius) var(--ck-border-radius) 0 0}.ck.ck-color-selector .ck-color-picker-fragment .ck.ck-color-picker .hex-color-picker::part(hue){border-radius:0 0 var(--ck-border-radius) var(--ck-border-radius)}.ck.ck-color-selector .ck-color-picker-fragment .ck.ck-color-picker .hex-color-picker::part(hue-pointer),.ck.ck-color-selector .ck-color-picker-fragment .ck.ck-color-picker .hex-color-picker::part(saturation-pointer){height:15px;width:15px}.ck.ck-color-selector .ck-color-picker-fragment .ck.ck-color-selector_action-bar{padding:0 8px 8px}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/colorselector/colorselector.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/colorselector/colorselector.css"],names:[],mappings:"AAUE,oLAGC,kBAAmB,CADnB,YAMD,CARA,wMAME,0BAEF,CAKA,iFACC,YAAa,CACb,kBAAmB,CACnB,4BAMD,CAJC,oMAEC,MACD,CCrBD,oLAEC,UACD,CAEA,0FAEC,2BAA4B,CAC5B,4BAA6B,CAF7B,qEAiBD,CAbC,sGACC,gDACD,CAEA,gHAEE,uCAMF,CARA,gHAME,sCAEF,CAGD,6EACC,iBACD,CAKA,oEACC,WAoBD,CAlBC,sFACC,YAAa,CACb,eAeD,CAbC,wGACC,iEACD,CAEA,iGACC,iEACD,CAEA,yNAGC,WAAY,CADZ,UAED,CAIF,iFACC,iBACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

.ck.ck-color-selector {
	/* View fragment with color grids. */
	& .ck-color-grids-fragment {
		& .ck-button.ck-color-selector__remove-color,
		& .ck-button.ck-color-selector__color-picker {
			display: flex;
			align-items: center;

			@mixin ck-dir rtl {
				justify-content: flex-start;
			}
		}
	}

	/* View fragment with a color picker. */
	& .ck-color-picker-fragment {
		& .ck.ck-color-selector_action-bar {
			display: flex;
			flex-direction: row;
			justify-content: space-around;

			& .ck-button-save,
			& .ck-button-cancel {
				flex: 1
			}
		}
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

.ck.ck-color-selector {
	/* View fragment with color grids. */
	& .ck-color-grids-fragment {
		& .ck-button.ck-color-selector__remove-color,
		& .ck-button.ck-color-selector__color-picker {
			width: 100%;
		}

		& .ck-button.ck-color-selector__color-picker {
			padding: calc(var(--ck-spacing-standard) / 2) var(--ck-spacing-standard);
			border-bottom-left-radius: 0;
			border-bottom-right-radius: 0;

			&:not(:focus) {
				border-top: 1px solid var(--ck-color-base-border);
			}

			& .ck.ck-icon {
				@mixin ck-dir ltr {
					margin-right: var(--ck-spacing-standard);
				}

				@mixin ck-dir rtl {
					margin-left: var(--ck-spacing-standard);
				}
			}
		}

		& label.ck.ck-color-grid__label {
			font-weight: unset;
		}
	}

	/* View fragment with a color picker. */
	& .ck-color-picker-fragment {
		& .ck.ck-color-picker {
			padding: 8px;

			& .hex-color-picker {
				height: 100px;
				min-width: 180px;

				&::part(saturation) {
					border-radius: var(--ck-border-radius) var(--ck-border-radius) 0 0;
				}

				&::part(hue) {
					border-radius: 0 0 var(--ck-border-radius) var(--ck-border-radius);
				}

				&::part(saturation-pointer),
				&::part(hue-pointer) {
					width: 15px;
					height: 15px;
				}
			}
		}

		& .ck.ck-color-selector_action-bar {
			padding: 0 8px 8px;
		}
	}
}
`],sourceRoot:""}]);const S=y},9819:(f,b,m)=>{m.d(b,{A:()=>S});var v=m(9372),A=m.n(v),x=m(935),y=m.n(x)()(A());y.push([f.id,".ck.ck-dialog-overlay{bottom:0;left:0;overscroll-behavior:none;position:fixed;right:0;top:0;user-select:none}.ck.ck-dialog-overlay.ck-dialog-overlay__transparent{animation:none;background:none;pointer-events:none}.ck.ck-dialog{overscroll-behavior:none;position:absolute;width:fit-content}.ck.ck-dialog .ck.ck-form__header{flex-shrink:0}.ck.ck-dialog .ck.ck-form__header .ck-form__header__label{cursor:grab}.ck.ck-dialog-overlay.ck-dialog-overlay__transparent .ck.ck-dialog{pointer-events:all}:root{--ck-dialog-overlay-background-color:rgba(0,0,0,.5);--ck-dialog-drop-shadow:0px 0px 6px 2px rgba(0,0,0,.15);--ck-dialog-max-width:100vw;--ck-dialog-max-height:90vh;--ck-color-dialog-background:var(--ck-color-base-background);--ck-color-dialog-form-header-border:var(--ck-color-base-border)}.ck.ck-dialog-overlay{animation:ck-dialog-fade-in .3s;background:var(--ck-dialog-overlay-background-color);z-index:var(--ck-z-dialog)}.ck.ck-dialog{border-radius:0}.ck-rounded-corners .ck.ck-dialog,.ck.ck-dialog.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-dialog{box-shadow:var(--ck-drop-shadow),0 0;--ck-drop-shadow:var(--ck-dialog-drop-shadow);background:var(--ck-color-dialog-background);border:1px solid var(--ck-color-base-border);max-height:var(--ck-dialog-max-height);max-width:var(--ck-dialog-max-width)}.ck.ck-dialog .ck.ck-form__header{border-bottom:1px solid var(--ck-color-dialog-form-header-border)}@keyframes ck-dialog-fade-in{0%{background:transparent}to{background:var(--ck-dialog-overlay-background-color)}}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/dialog/dialog.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/dialog/dialog.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_shadow.css"],names:[],mappings:"AAKA,sBAKC,QAAS,CACT,MAAO,CAJP,wBAAyB,CAEzB,cAAe,CAGf,OAAQ,CACR,KAAM,CAPN,gBAcD,CALC,qDAEC,cAAe,CACf,eAAgB,CAFhB,mBAGD,CAGD,cACC,wBAAyB,CAEzB,iBAAkB,CADlB,iBAcD,CAXC,kCACC,aAKD,CAHC,0DACC,WACD,CAVF,mEAcE,kBAEF,CC7BA,MACC,mDAA2D,CAC3D,uDAA8D,CAC9D,2BAA4B,CAC5B,2BAA4B,CAC5B,4DAA6D,CAC7D,gEACD,CAEA,sBACC,+BAAgC,CAChC,oDAAqD,CACrD,0BACD,CAEA,cCbC,eD2BD,CAdA,mECTE,qCDuBF,CAdA,cEfC,oCAA8B,CFmB9B,6CAA8C,CAE9C,4CAA6C,CAG7C,4CAA6C,CAF7C,sCAAuC,CACvC,oCAMD,CAHC,kCACC,iEACD,CAGD,6BACC,GACC,sBACD,CAEA,GACC,oDACD,CACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-dialog-overlay {
	user-select: none;
	overscroll-behavior: none;

	position: fixed;
	bottom: 0;
	left: 0;
	right: 0;
	top: 0;

	&.ck-dialog-overlay__transparent {
		pointer-events: none;
		animation: none;
		background: none;
	}
}

.ck.ck-dialog {
	overscroll-behavior: none;
	width: fit-content;
	position: absolute;

	& .ck.ck-form__header  {
		flex-shrink: 0;

		& .ck-form__header__label {
			cursor: grab;
		}
	}

	@nest .ck.ck-dialog-overlay.ck-dialog-overlay__transparent & {
		pointer-events: all;
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";
@import "../../../mixins/_shadow.css";
@import "@ckeditor/ckeditor5-ui/theme/mixins/_rwd.css";

:root {
	--ck-dialog-overlay-background-color: hsla( 0, 0%, 0%, .5 );
	--ck-dialog-drop-shadow: 0px 0px 6px 2px hsl(0deg 0% 0% / 15%);
	--ck-dialog-max-width: 100vw;
	--ck-dialog-max-height: 90vh;
	--ck-color-dialog-background: var(--ck-color-base-background);
	--ck-color-dialog-form-header-border: var(--ck-color-base-border);
}

.ck.ck-dialog-overlay {
	animation: ck-dialog-fade-in .3s;
	background: var(--ck-dialog-overlay-background-color);
	z-index: var(--ck-z-dialog);
}

.ck.ck-dialog {
	@mixin ck-rounded-corners;
	@mixin ck-drop-shadow;

	--ck-drop-shadow: var(--ck-dialog-drop-shadow);

	background: var(--ck-color-dialog-background);
	max-height: var(--ck-dialog-max-height);
	max-width: var(--ck-dialog-max-width);
	border: 1px solid var(--ck-color-base-border);

	& .ck.ck-form__header {
		border-bottom: 1px solid var(--ck-color-dialog-form-header-border);
	}
}

@keyframes ck-dialog-fade-in {
	0% {
		background: hsla( 0, 0%, 0%, 0 );
	}

	100% {
		background: var(--ck-dialog-overlay-background-color);
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A helper to combine multiple shadows.
 */
@define-mixin ck-box-shadow $shadowA, $shadowB: 0 0 {
	box-shadow: $shadowA, $shadowB;
}

/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
@define-mixin ck-drop-shadow {
	@mixin ck-box-shadow var(--ck-drop-shadow);
}
`],sourceRoot:""}]);const S=y},9822:(f,b,m)=>{m.d(b,{A:()=>S});var v=m(9372),A=m.n(v),x=m(935),y=m.n(x)()(A());y.push([f.id,".ck.ck-dialog .ck.ck-dialog__actions{display:flex;justify-content:flex-end;padding:var(--ck-spacing-large)}.ck.ck-dialog .ck.ck-dialog__actions>*+*{margin-left:var(--ck-spacing-large)}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/dialog/dialogactions.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/dialog/dialogactions.css"],names:[],mappings:"AAMC,qCACC,YAAa,CACb,wBAAyB,CCDzB,+BDED,CCAC,yCACC,mCACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-dialog {
	& .ck.ck-dialog__actions {
		display: flex;
		justify-content: flex-end;
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-dialog {
	& .ck.ck-dialog__actions {
		padding: var(--ck-spacing-large);

		& > * + * {
			margin-left: var(--ck-spacing-large);
		}
	}
}
`],sourceRoot:""}]);const S=y},8149:(f,b,m)=>{m.d(b,{A:()=>S});var v=m(9372),A=m.n(v),x=m(935),y=m.n(x)()(A());y.push([f.id,":root{--ck-dropdown-max-width:75vw}.ck.ck-dropdown{display:inline-block;position:relative}.ck.ck-dropdown .ck-dropdown__arrow{pointer-events:none;z-index:var(--ck-z-default)}.ck.ck-dropdown .ck-button.ck-dropdown__button{width:100%}.ck.ck-dropdown .ck-dropdown__panel{display:none;max-width:var(--ck-dropdown-max-width);position:absolute;z-index:var(--ck-z-panel)}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel-visible{display:inline-block}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_n,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_ne,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_nme,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_nmw,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_nw{bottom:100%}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_s,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_se,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_sme,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_smw,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_sw{bottom:auto;top:100%}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_ne,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_se{left:0}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_nw,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_sw{right:0}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_n,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_s{left:50%;transform:translateX(-50%)}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_nmw,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_smw{left:75%;transform:translateX(-75%)}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_nme,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_sme{left:25%;transform:translateX(-25%)}.ck.ck-toolbar .ck-dropdown__panel{z-index:calc(var(--ck-z-panel) + 1)}:root{--ck-dropdown-arrow-size:calc(var(--ck-icon-size)*0.5)}.ck.ck-dropdown{font-size:inherit}.ck.ck-dropdown .ck-dropdown__arrow{width:var(--ck-dropdown-arrow-size)}[dir=ltr] .ck.ck-dropdown .ck-dropdown__arrow{margin-left:var(--ck-spacing-standard);right:var(--ck-spacing-standard)}[dir=rtl] .ck.ck-dropdown .ck-dropdown__arrow{left:var(--ck-spacing-standard);margin-right:var(--ck-spacing-small)}.ck.ck-dropdown.ck-disabled .ck-dropdown__arrow{opacity:var(--ck-disabled-opacity)}[dir=ltr] .ck.ck-dropdown .ck-button.ck-dropdown__button:not(.ck-button_with-text){padding-left:var(--ck-spacing-small)}[dir=rtl] .ck.ck-dropdown .ck-button.ck-dropdown__button:not(.ck-button_with-text){padding-right:var(--ck-spacing-small)}.ck.ck-dropdown .ck-button.ck-dropdown__button .ck-button__label{overflow:hidden;text-overflow:ellipsis;width:7em}.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-disabled .ck-button__label{opacity:var(--ck-disabled-opacity)}.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-on{border-bottom-left-radius:0;border-bottom-right-radius:0}.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-dropdown__button_label-width_auto .ck-button__label{width:auto}.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-off:active,.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-on:active{box-shadow:none}.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-off:active:focus,.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-on:active:focus{box-shadow:var(--ck-focus-outer-shadow),0 0}.ck.ck-dropdown__panel{border-radius:0}.ck-rounded-corners .ck.ck-dropdown__panel,.ck.ck-dropdown__panel.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-dropdown__panel{background:var(--ck-color-dropdown-panel-background);border:1px solid var(--ck-color-dropdown-panel-border);bottom:0;box-shadow:var(--ck-drop-shadow),0 0;min-width:100%}.ck.ck-dropdown__panel.ck-dropdown__panel_se{border-top-left-radius:0}.ck.ck-dropdown__panel.ck-dropdown__panel_sw{border-top-right-radius:0}.ck.ck-dropdown__panel.ck-dropdown__panel_ne{border-bottom-left-radius:0}.ck.ck-dropdown__panel.ck-dropdown__panel_nw{border-bottom-right-radius:0}.ck.ck-dropdown__panel:focus{outline:none}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/dropdown/dropdown.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/dropdown/dropdown.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_disabled.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_shadow.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css"],names:[],mappings:"AAKA,MACC,4BACD,CAEA,gBACC,oBAAqB,CACrB,iBA2ED,CAzEC,oCACC,mBAAoB,CACpB,2BACD,CAGA,+CACC,UACD,CAEA,oCACC,YAAa,CAEb,sCAAuC,CAEvC,iBAAkB,CAHlB,yBA4DD,CAvDC,+DACC,oBACD,CAEA,mSAKC,WACD,CAEA,mSAUC,WAAY,CADZ,QAED,CAEA,oHAEC,MACD,CAEA,oHAEC,OACD,CAEA,kHAGC,QAAS,CACT,0BACD,CAEA,sHAGC,QAAS,CACT,0BACD,CAEA,sHAGC,QAAS,CACT,0BACD,CAQF,mCACC,mCACD,CCpFA,MACC,sDACD,CAEA,gBAEC,iBA2ED,CAzEC,oCACC,mCACD,CAGC,8CAIC,sCAAuC,CAHvC,gCAID,CAIA,8CACC,+BAAgC,CAGhC,oCACD,CAGD,gDC/BA,kCDiCA,CAIE,mFAEC,oCACD,CAIA,mFAEC,qCACD,CAID,iEAEC,eAAgB,CAChB,sBAAuB,CAFvB,SAGD,CAGA,6EC1DD,kCD4DC,CAGA,qDACC,2BAA4B,CAC5B,4BACD,CAEA,sGACC,UACD,CAGA,yHAEC,eAKD,CAHC,qIE7EF,2CF+EE,CAKH,uBGlFC,eHkHD,CAhCA,qFG9EE,qCH8GF,CAhCA,uBAIC,oDAAqD,CACrD,sDAAuD,CACvD,QAAS,CE1FT,oCAA8B,CF6F9B,cAuBD,CAnBC,6CACC,wBACD,CAEA,6CACC,yBACD,CAEA,6CACC,2BACD,CAEA,6CACC,4BACD,CAEA,6BACC,YACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-dropdown-max-width: 75vw;
}

.ck.ck-dropdown {
	display: inline-block;
	position: relative;

	& .ck-dropdown__arrow {
		pointer-events: none;
		z-index: var(--ck-z-default);
	}

	/* Dropdown button should span horizontally, e.g. in vertical toolbars */
	& .ck-button.ck-dropdown__button {
		width: 100%;
	}

	& .ck-dropdown__panel {
		display: none;
		z-index: var(--ck-z-panel);
		max-width: var(--ck-dropdown-max-width);

		position: absolute;

		&.ck-dropdown__panel-visible {
			display: inline-block;
		}

		&.ck-dropdown__panel_ne,
		&.ck-dropdown__panel_nw,
		&.ck-dropdown__panel_n,
		&.ck-dropdown__panel_nmw,
		&.ck-dropdown__panel_nme {
			bottom: 100%;
		}

		&.ck-dropdown__panel_se,
		&.ck-dropdown__panel_sw,
		&.ck-dropdown__panel_smw,
		&.ck-dropdown__panel_sme,
		&.ck-dropdown__panel_s {
			/*
			 * Using transform: translate3d( 0, 100%, 0 ) causes blurry dropdown on Chrome 67-78+ on non-retina displays.
			 * See https://github.com/ckeditor/ckeditor5/issues/1053.
			 */
			top: 100%;
			bottom: auto;
		}

		&.ck-dropdown__panel_ne,
		&.ck-dropdown__panel_se {
			left: 0px;
		}

		&.ck-dropdown__panel_nw,
		&.ck-dropdown__panel_sw {
			right: 0px;
		}

		&.ck-dropdown__panel_s,
		&.ck-dropdown__panel_n {
			/* Positioning panels relative to the center of the button */
			left: 50%;
			transform: translateX(-50%);
		}

		&.ck-dropdown__panel_nmw,
		&.ck-dropdown__panel_smw {
			/* Positioning panels relative to the middle-west of the button */
			left: 75%;
			transform: translateX(-75%);
		}

		&.ck-dropdown__panel_nme,
		&.ck-dropdown__panel_sme {
			/* Positioning panels relative to the middle-east of the button */
			left: 25%;
			transform: translateX(-25%);
		}
	}
}

/*
 * Toolbar dropdown panels should be always above the UI (eg. other dropdown panels) from the editor's content.
 * See https://github.com/ckeditor/ckeditor5/issues/7874
 */
.ck.ck-toolbar .ck-dropdown__panel {
	z-index: calc( var(--ck-z-panel) + 1 );
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";
@import "../../../mixins/_disabled.css";
@import "../../../mixins/_shadow.css";
@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

:root {
	--ck-dropdown-arrow-size: calc(0.5 * var(--ck-icon-size));
}

.ck.ck-dropdown {
	/* Enable font size inheritance, which allows fluid UI scaling. */
	font-size: inherit;

	& .ck-dropdown__arrow {
		width: var(--ck-dropdown-arrow-size);
	}

	@mixin ck-dir ltr {
		& .ck-dropdown__arrow {
			right: var(--ck-spacing-standard);

			/* A space to accommodate the triangle. */
			margin-left: var(--ck-spacing-standard);
		}
	}

	@mixin ck-dir rtl {
		& .ck-dropdown__arrow {
			left: var(--ck-spacing-standard);

			/* A space to accommodate the triangle. */
			margin-right: var(--ck-spacing-small);
		}
	}

	&.ck-disabled .ck-dropdown__arrow {
		@mixin ck-disabled;
	}

	& .ck-button.ck-dropdown__button {
		@mixin ck-dir ltr {
			&:not(.ck-button_with-text) {
				/* Make sure dropdowns with just an icon have the right inner spacing */
				padding-left: var(--ck-spacing-small);
			}
		}

		@mixin ck-dir rtl {
			&:not(.ck-button_with-text) {
				/* Make sure dropdowns with just an icon have the right inner spacing */
				padding-right: var(--ck-spacing-small);
			}
		}

		/* #23 */
		& .ck-button__label {
			width: 7em;
			overflow: hidden;
			text-overflow: ellipsis;
		}

		/* https://github.com/ckeditor/ckeditor5-theme-lark/issues/70 */
		&.ck-disabled .ck-button__label {
			@mixin ck-disabled;
		}

		/* https://github.com/ckeditor/ckeditor5/issues/816 */
		&.ck-on {
			border-bottom-left-radius: 0;
			border-bottom-right-radius: 0;
		}

		&.ck-dropdown__button_label-width_auto .ck-button__label {
			width: auto;
		}

		/* https://github.com/ckeditor/ckeditor5/issues/8699 */
		&.ck-off:active,
		&.ck-on:active {
			box-shadow: none;

			&:focus {
				@mixin ck-box-shadow var(--ck-focus-outer-shadow);
			}
		}
	}
}

.ck.ck-dropdown__panel {
	@mixin ck-rounded-corners;
	@mixin ck-drop-shadow;

	background: var(--ck-color-dropdown-panel-background);
	border: 1px solid var(--ck-color-dropdown-panel-border);
	bottom: 0;

	/* Make sure the panel is at least as wide as the drop-down's button. */
	min-width: 100%;

	/* Disabled corner border radius to be consistent with the .dropdown__button
	https://github.com/ckeditor/ckeditor5/issues/816 */
	&.ck-dropdown__panel_se {
		border-top-left-radius: 0;
	}

	&.ck-dropdown__panel_sw {
		border-top-right-radius: 0;
	}

	&.ck-dropdown__panel_ne {
		border-bottom-left-radius: 0;
	}

	&.ck-dropdown__panel_nw {
		border-bottom-right-radius: 0;
	}

	&:focus {
		outline: none;
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A class which indicates that an element holding it is disabled.
 */
@define-mixin ck-disabled {
	opacity: var(--ck-disabled-opacity);
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A helper to combine multiple shadows.
 */
@define-mixin ck-box-shadow $shadowA, $shadowB: 0 0 {
	box-shadow: $shadowA, $shadowB;
}

/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
@define-mixin ck-drop-shadow {
	@mixin ck-box-shadow var(--ck-drop-shadow);
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`],sourceRoot:""}]);const S=y},3629:(f,b,m)=>{m.d(b,{A:()=>S});var v=m(9372),A=m.n(v),x=m(935),y=m.n(x)()(A());y.push([f.id,".ck.ck-dropdown>.ck-dropdown__panel>.ck-list{border-radius:0}.ck-rounded-corners .ck.ck-dropdown>.ck-dropdown__panel>.ck-list,.ck.ck-dropdown>.ck-dropdown__panel>.ck-list.ck-rounded-corners{border-radius:var(--ck-border-radius);border-top-left-radius:0}.ck.ck-dropdown>.ck-dropdown__panel>.ck-list .ck-list__item:first-child>.ck-button{border-radius:0}.ck-rounded-corners .ck.ck-dropdown>.ck-dropdown__panel>.ck-list .ck-list__item:first-child>.ck-button,.ck.ck-dropdown>.ck-dropdown__panel>.ck-list .ck-list__item:first-child>.ck-button.ck-rounded-corners{border-radius:var(--ck-border-radius);border-bottom-left-radius:0;border-bottom-right-radius:0;border-top-left-radius:0}.ck.ck-dropdown>.ck-dropdown__panel>.ck-list .ck-list__item:last-child>.ck-button{border-radius:0}.ck-rounded-corners .ck.ck-dropdown>.ck-dropdown__panel>.ck-list .ck-list__item:last-child>.ck-button,.ck.ck-dropdown>.ck-dropdown__panel>.ck-list .ck-list__item:last-child>.ck-button.ck-rounded-corners{border-radius:var(--ck-border-radius);border-top-left-radius:0;border-top-right-radius:0}","",{version:3,sources:["webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/dropdown/listdropdown.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css"],names:[],mappings:"AAOA,6CCIC,eDqBD,CAzBA,iICQE,qCAAsC,CDJtC,wBAqBF,CAfE,mFCND,eDYC,CANA,6MCFA,qCAAsC,CDKpC,2BAA4B,CAC5B,4BAA6B,CAF7B,wBAIF,CAEA,kFCdD,eDmBC,CALA,2MCVA,qCAAsC,CDYpC,wBAAyB,CACzB,yBAEF",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";

.ck.ck-dropdown > .ck-dropdown__panel > .ck-list {
	/* Disabled radius of top-left border to be consistent with .dropdown__button
	https://github.com/ckeditor/ckeditor5/issues/816 */
	@mixin ck-rounded-corners {
		border-top-left-radius: 0;
	}

	/* Make sure the button belonging to the first/last child of the list goes well with the
	border radius of the entire panel. */
	& .ck-list__item {
		&:first-child > .ck-button {
			@mixin ck-rounded-corners {
				border-top-left-radius: 0;
				border-bottom-left-radius: 0;
				border-bottom-right-radius: 0;
			}
		}

		&:last-child > .ck-button {
			@mixin ck-rounded-corners {
				border-top-left-radius: 0;
				border-top-right-radius: 0;
			}
		}
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`],sourceRoot:""}]);const S=y},1792:(f,b,m)=>{m.d(b,{A:()=>S});var v=m(9372),A=m.n(v),x=m(935),y=m.n(x)()(A());y.push([f.id,'.ck.ck-splitbutton{font-size:inherit}.ck.ck-splitbutton .ck-splitbutton__action:focus{z-index:calc(var(--ck-z-default) + 1)}:root{--ck-color-split-button-hover-background:#ebebeb;--ck-color-split-button-hover-border:#b3b3b3}[dir=ltr] .ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__action,[dir=ltr] .ck.ck-splitbutton:hover>.ck-splitbutton__action{border-bottom-right-radius:unset;border-top-right-radius:unset}[dir=rtl] .ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__action,[dir=rtl] .ck.ck-splitbutton:hover>.ck-splitbutton__action{border-bottom-left-radius:unset;border-top-left-radius:unset}.ck.ck-splitbutton>.ck-splitbutton__arrow{min-width:unset}[dir=ltr] .ck.ck-splitbutton>.ck-splitbutton__arrow{border-bottom-left-radius:unset;border-top-left-radius:unset}[dir=rtl] .ck.ck-splitbutton>.ck-splitbutton__arrow{border-bottom-right-radius:unset;border-top-right-radius:unset}.ck.ck-splitbutton>.ck-splitbutton__arrow svg{width:var(--ck-dropdown-arrow-size)}.ck.ck-splitbutton>.ck-splitbutton__arrow:not(:focus){border-bottom-width:0;border-top-width:0}.ck.ck-splitbutton.ck-splitbutton_open>.ck-button:not(.ck-on):not(.ck-disabled):not(:hover),.ck.ck-splitbutton:hover>.ck-button:not(.ck-on):not(.ck-disabled):not(:hover){background:var(--ck-color-split-button-hover-background)}.ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__arrow:not(.ck-disabled):after,.ck.ck-splitbutton:hover>.ck-splitbutton__arrow:not(.ck-disabled):after{background-color:var(--ck-color-split-button-hover-border);content:"";height:100%;position:absolute;width:1px}.ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__arrow:focus:after,.ck.ck-splitbutton:hover>.ck-splitbutton__arrow:focus:after{--ck-color-split-button-hover-border:var(--ck-color-focus-border)}[dir=ltr] .ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__arrow:not(.ck-disabled):after,[dir=ltr] .ck.ck-splitbutton:hover>.ck-splitbutton__arrow:not(.ck-disabled):after{left:-1px}[dir=rtl] .ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__arrow:not(.ck-disabled):after,[dir=rtl] .ck.ck-splitbutton:hover>.ck-splitbutton__arrow:not(.ck-disabled):after{right:-1px}.ck.ck-splitbutton.ck-splitbutton_open{border-radius:0}.ck-rounded-corners .ck.ck-splitbutton.ck-splitbutton_open,.ck.ck-splitbutton.ck-splitbutton_open.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck-rounded-corners .ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__action,.ck.ck-splitbutton.ck-splitbutton_open.ck-rounded-corners>.ck-splitbutton__action{border-bottom-left-radius:0}.ck-rounded-corners .ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__arrow,.ck.ck-splitbutton.ck-splitbutton_open.ck-rounded-corners>.ck-splitbutton__arrow{border-bottom-right-radius:0}',"",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/dropdown/splitbutton.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/dropdown/splitbutton.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css"],names:[],mappings:"AAKA,mBAEC,iBAKD,CAHC,iDACC,qCACD,CCJD,MACC,gDAAyD,CACzD,4CACD,CAMC,oIAKE,gCAAiC,CADjC,6BASF,CAbA,oIAWE,+BAAgC,CADhC,4BAGF,CAEA,0CAGC,eAiBD,CApBA,oDAQE,+BAAgC,CADhC,4BAaF,CApBA,oDAcE,gCAAiC,CADjC,6BAOF,CAHC,8CACC,mCACD,CAKD,sDAEC,qBAAwB,CADxB,kBAED,CAQC,0KACC,wDACD,CAIA,8JAKC,0DAA2D,CAJ3D,UAAW,CAGX,WAAY,CAFZ,iBAAkB,CAClB,SAGD,CAGA,sIACC,iEACD,CAGC,kLACC,SACD,CAIA,kLACC,UACD,CAMF,uCCzFA,eDmGA,CAVA,qHCrFC,qCD+FD,CARE,qKACC,2BACD,CAEA,mKACC,4BACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-splitbutton {
	/* Enable font size inheritance, which allows fluid UI scaling. */
	font-size: inherit;

	& .ck-splitbutton__action:focus {
		z-index: calc(var(--ck-z-default) + 1);
	}
}

`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";

:root {
	--ck-color-split-button-hover-background: hsl(0, 0%, 92%);
	--ck-color-split-button-hover-border: hsl(0, 0%, 70%);
}

.ck.ck-splitbutton {
	/*
	 * Note: ck-rounded and ck-dir mixins don't go together (because they both use @nest).
	 */
	&:hover > .ck-splitbutton__action,
	&.ck-splitbutton_open > .ck-splitbutton__action {
		@nest [dir="ltr"] & {
			/* Don't round the action button on the right side */
			border-top-right-radius: unset;
			border-bottom-right-radius: unset;
		}

		@nest [dir="rtl"] & {
			/* Don't round the action button on the left side */
			border-top-left-radius: unset;
			border-bottom-left-radius: unset;
		}
	}

	& > .ck-splitbutton__arrow {
		/* It's a text-less button and since the icon is positioned absolutely in such situation,
		it must get some arbitrary min-width. */
		min-width: unset;

		@nest [dir="ltr"] & {
			/* Don't round the arrow button on the left side */
			border-top-left-radius: unset;
			border-bottom-left-radius: unset;
		}

		@nest [dir="rtl"] & {
			/* Don't round the arrow button on the right side */
			border-top-right-radius: unset;
			border-bottom-right-radius: unset;
		}

		& svg {
			width: var(--ck-dropdown-arrow-size);
		}
	}

	/* Make sure the divider stretches 100% height of the button
	https://github.com/ckeditor/ckeditor5/issues/10936 */
	& > .ck-splitbutton__arrow:not(:focus) {
		border-top-width: 0px;
		border-bottom-width: 0px;
	}

	/* When the split button is "open" (the arrow is on) or being hovered, it should get some styling
	as a whole. The background of both buttons should stand out and there should be a visual
	separation between both buttons. */
	&.ck-splitbutton_open,
	&:hover {
		/* When the split button hovered as a whole, not as individual buttons. */
		& > .ck-button:not(.ck-on):not(.ck-disabled):not(:hover) {
			background: var(--ck-color-split-button-hover-background);
		}

		/* Splitbutton separator needs to be set with the ::after pseudoselector
		to display properly the borders on focus */
		& > .ck-splitbutton__arrow:not(.ck-disabled)::after {
			content: '';
			position: absolute;
			width: 1px;
			height: 100%;
			background-color: var(--ck-color-split-button-hover-border);
		}

		/* Make sure the divider between the buttons looks fine when the button is focused */
		& > .ck-splitbutton__arrow:focus::after {
			--ck-color-split-button-hover-border: var(--ck-color-focus-border);
		}

		@nest [dir="ltr"] & {
			& > .ck-splitbutton__arrow:not(.ck-disabled)::after {
				left: -1px;
			}
		}

		@nest [dir="rtl"] & {
			& > .ck-splitbutton__arrow:not(.ck-disabled)::after {
				right: -1px;
			}
		}
	}

	/* Don't round the bottom left and right corners of the buttons when "open"
	https://github.com/ckeditor/ckeditor5/issues/816 */
	&.ck-splitbutton_open {
		@mixin ck-rounded-corners {
			& > .ck-splitbutton__action {
				border-bottom-left-radius: 0;
			}

			& > .ck-splitbutton__arrow {
				border-bottom-right-radius: 0;
			}
		}
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`],sourceRoot:""}]);const S=y},1666:(f,b,m)=>{m.d(b,{A:()=>S});var v=m(9372),A=m.n(v),x=m(935),y=m.n(x)()(A());y.push([f.id,":root{--ck-toolbar-dropdown-max-width:60vw}.ck.ck-toolbar-dropdown>.ck-dropdown__panel{max-width:var(--ck-toolbar-dropdown-max-width);width:max-content}.ck.ck-toolbar-dropdown>.ck-dropdown__panel .ck-button:focus{z-index:calc(var(--ck-z-default) + 1)}.ck.ck-toolbar-dropdown .ck-toolbar{border:0}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/dropdown/toolbardropdown.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/dropdown/toolbardropdown.css"],names:[],mappings:"AAKA,MACC,oCACD,CAEA,4CAGC,8CAA+C,CAD/C,iBAQD,CAJE,6DACC,qCACD,CCZF,oCACC,QACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-toolbar-dropdown-max-width: 60vw;
}

.ck.ck-toolbar-dropdown > .ck-dropdown__panel {
	/* https://github.com/ckeditor/ckeditor5/issues/5586 */
	width: max-content;
	max-width: var(--ck-toolbar-dropdown-max-width);

	& .ck-button {
		&:focus {
			z-index: calc(var(--ck-z-default) + 1);
		}
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-toolbar-dropdown .ck-toolbar {
	border: 0;
}
`],sourceRoot:""}]);const S=y},8527:(f,b,m)=>{m.d(b,{A:()=>S});var v=m(9372),A=m.n(v),x=m(935),y=m.n(x)()(A());y.push([f.id,":root{--ck-accessibility-help-dialog-max-width:600px;--ck-accessibility-help-dialog-max-height:400px;--ck-accessibility-help-dialog-border-color:#ccced1;--ck-accessibility-help-dialog-code-background-color:#ededed;--ck-accessibility-help-dialog-kbd-shadow-color:#9c9c9c}.ck.ck-accessibility-help-dialog .ck-accessibility-help-dialog__content{border:1px solid transparent;max-height:var(--ck-accessibility-help-dialog-max-height);max-width:var(--ck-accessibility-help-dialog-max-width);overflow:auto;padding:var(--ck-spacing-large);user-select:text}.ck.ck-accessibility-help-dialog .ck-accessibility-help-dialog__content:focus{border:var(--ck-focus-ring);box-shadow:var(--ck-focus-outer-shadow),0 0;outline:none}.ck.ck-accessibility-help-dialog .ck-accessibility-help-dialog__content{*{white-space:normal}}.ck.ck-accessibility-help-dialog .ck-accessibility-help-dialog__content .ck-label{display:none}.ck.ck-accessibility-help-dialog .ck-accessibility-help-dialog__content h3{font-size:1.2em;font-weight:700}.ck.ck-accessibility-help-dialog .ck-accessibility-help-dialog__content h4{font-size:1em;font-weight:700}.ck.ck-accessibility-help-dialog .ck-accessibility-help-dialog__content h3,.ck.ck-accessibility-help-dialog .ck-accessibility-help-dialog__content h4,.ck.ck-accessibility-help-dialog .ck-accessibility-help-dialog__content p,.ck.ck-accessibility-help-dialog .ck-accessibility-help-dialog__content table{margin:1em 0}.ck.ck-accessibility-help-dialog .ck-accessibility-help-dialog__content dl{border-bottom:none;border-top:1px solid var(--ck-accessibility-help-dialog-border-color);display:grid;grid-template-columns:2fr 1fr}.ck.ck-accessibility-help-dialog .ck-accessibility-help-dialog__content dl dd,.ck.ck-accessibility-help-dialog .ck-accessibility-help-dialog__content dl dt{border-bottom:1px solid var(--ck-accessibility-help-dialog-border-color);padding:.4em 0}.ck.ck-accessibility-help-dialog .ck-accessibility-help-dialog__content dl dt{grid-column-start:1}.ck.ck-accessibility-help-dialog .ck-accessibility-help-dialog__content dl dd{grid-column-start:2;text-align:right}.ck.ck-accessibility-help-dialog .ck-accessibility-help-dialog__content code,.ck.ck-accessibility-help-dialog .ck-accessibility-help-dialog__content kbd{background:var(--ck-accessibility-help-dialog-code-background-color);border-radius:2px;display:inline-block;font-size:.9em;line-height:1;padding:.4em;text-align:center;vertical-align:middle}.ck.ck-accessibility-help-dialog .ck-accessibility-help-dialog__content code{font-family:monospace}.ck.ck-accessibility-help-dialog .ck-accessibility-help-dialog__content kbd{box-shadow:0 1px 1px var(--ck-accessibility-help-dialog-kbd-shadow-color);margin:0 1px;min-width:1.8em}.ck.ck-accessibility-help-dialog .ck-accessibility-help-dialog__content kbd+kbd{margin-left:2px}","",{version:3,sources:["webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/editorui/accessibilityhelp.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_focus.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_shadow.css"],names:[],mappings:"AAQA,MACC,8CAA+C,CAC/C,+CAAgD,CAChD,mDAA8D,CAC9D,4DAAyE,CACzE,uDACD,CAEA,wEAOC,4BAA6B,CAJ7B,yDAA0D,CAD1D,uDAAwD,CAExD,aAAc,CAHd,+BAAgC,CAIhC,gBAgFD,CA5EC,8ECdA,2BAA2B,CCF3B,2CAA8B,CDC9B,YDkBA,CAZD,wEAcC,EACC,kBACD,CAqED,CAlEC,kFACC,YACD,CAEA,2EAEC,eAAgB,CADhB,eAED,CAEA,2EAEC,aAAc,CADd,eAED,CAEA,8SAIC,YACD,CAEA,2EAIC,kBAAmB,CADnB,qEAAsE,CAFtE,YAAa,CACb,6BAiBD,CAbC,4JACC,wEAAyE,CACzE,cACD,CAEA,8EACC,mBACD,CAEA,8EACC,mBAAoB,CACpB,gBACD,CAGD,yJAEC,oEAAqE,CAIrE,iBAAkB,CALlB,oBAAqB,CAOrB,cAAe,CAHf,aAAc,CAFd,YAAa,CAIb,iBAAkB,CAHlB,qBAKD,CAEA,6EACC,qBACD,CAEA,4EAEC,yEAA4E,CAC5E,YAAa,CAFb,eAOD,CAHC,gFACC,eACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_focus.css";
@import "../../../mixins/_shadow.css";

:root {
	--ck-accessibility-help-dialog-max-width: 600px;
	--ck-accessibility-help-dialog-max-height: 400px;
	--ck-accessibility-help-dialog-border-color: hsl(220, 6%, 81%);
	--ck-accessibility-help-dialog-code-background-color: hsl(0deg 0% 92.94%);
	--ck-accessibility-help-dialog-kbd-shadow-color: hsl(0deg 0% 61%);
}

.ck.ck-accessibility-help-dialog .ck-accessibility-help-dialog__content {
	padding: var(--ck-spacing-large);
	max-width: var(--ck-accessibility-help-dialog-max-width);
	max-height: var(--ck-accessibility-help-dialog-max-height);
	overflow: auto;
	user-select: text;

	border: 1px solid transparent;

	&:focus {
		@mixin ck-focus-ring;
		@mixin ck-box-shadow var(--ck-focus-outer-shadow);
	}

	* {
		white-space: normal;
	}

	/* Hide the main label of the content container. */
	& .ck-label {
		display: none;
	}

	& h3 {
		font-weight: bold;
		font-size: 1.2em;
	}

	& h4 {
		font-weight: bold;
		font-size: 1em;
	}

	& p,
	& h3,
	& h4,
	& table {
		margin: 1em 0;
	}

	& dl {
		display: grid;
		grid-template-columns: 2fr 1fr;
		border-top: 1px solid var(--ck-accessibility-help-dialog-border-color);
		border-bottom: none;

		& dt, & dd {
			border-bottom: 1px solid var(--ck-accessibility-help-dialog-border-color);
			padding: .4em 0;
		}

		& dt {
			grid-column-start: 1;
		}

		& dd {
			grid-column-start: 2;
			text-align: right;
		}
	}

	& kbd, & code {
		display: inline-block;
		background: var(--ck-accessibility-help-dialog-code-background-color);
		padding: .4em;
		vertical-align: middle;
		line-height: 1;
		border-radius: 2px;
		text-align: center;
		font-size: .9em;
	}

	& code {
		font-family: monospace;
	}

	& kbd {
		min-width: 1.8em;
		box-shadow: 0px 1px 1px var(--ck-accessibility-help-dialog-kbd-shadow-color);
		margin: 0 1px;

		& + kbd {
			margin-left: 2px;
		}
	}
}

`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A visual style of focused element's border.
 */
@define-mixin ck-focus-ring {
	/* Disable native outline. */
	outline: none;
	border: var(--ck-focus-ring)
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A helper to combine multiple shadows.
 */
@define-mixin ck-box-shadow $shadowA, $shadowB: 0 0 {
	box-shadow: $shadowA, $shadowB;
}

/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
@define-mixin ck-drop-shadow {
	@mixin ck-box-shadow var(--ck-drop-shadow);
}
`],sourceRoot:""}]);const S=y},1185:(f,b,m)=>{m.d(b,{A:()=>S});var v=m(9372),A=m.n(v),x=m(935),y=m.n(x)()(A());y.push([f.id,":root{--ck-color-editable-blur-selection:#d9d9d9}.ck.ck-editor__editable:not(.ck-editor__nested-editable){border-radius:0}.ck-rounded-corners .ck.ck-editor__editable:not(.ck-editor__nested-editable),.ck.ck-editor__editable.ck-rounded-corners:not(.ck-editor__nested-editable){border-radius:var(--ck-border-radius)}.ck.ck-editor__editable.ck-focused:not(.ck-editor__nested-editable){border:var(--ck-focus-ring);box-shadow:var(--ck-inner-shadow),0 0;outline:none}.ck.ck-editor__editable_inline{border:1px solid transparent;overflow:auto;padding:0 var(--ck-spacing-standard)}.ck.ck-editor__editable_inline[dir=ltr]{text-align:left}.ck.ck-editor__editable_inline[dir=rtl]{text-align:right}.ck.ck-editor__editable_inline>:first-child{margin-top:var(--ck-spacing-large)}.ck.ck-editor__editable_inline>:last-child{margin-bottom:var(--ck-spacing-large)}.ck.ck-editor__editable_inline.ck-blurred ::selection{background:var(--ck-color-editable-blur-selection)}.ck.ck-balloon-panel.ck-toolbar-container[class*=arrow_n]:after{border-bottom-color:var(--ck-color-panel-background)}.ck.ck-balloon-panel.ck-toolbar-container[class*=arrow_s]:after{border-top-color:var(--ck-color-panel-background)}","",{version:3,sources:["webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/editorui/editorui.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_focus.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_shadow.css"],names:[],mappings:"AAWA,MACC,0CACD,CAEA,yDCJC,eDWD,CAPA,yJCAE,qCDOF,CAJC,oEEPA,2BAA2B,CCF3B,qCAA8B,CDC9B,YFWA,CAGD,+BAGC,4BAA6B,CAF7B,aAAc,CACd,oCA6BD,CA1BC,wCACC,eACD,CAEA,wCACC,gBACD,CAGA,4CACC,kCACD,CAGA,2CAKC,qCACD,CAGA,sDACC,kDACD,CAKA,gEACC,oDACD,CAIA,gEACC,iDACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";
@import "../../../mixins/_disabled.css";
@import "../../../mixins/_shadow.css";
@import "../../../mixins/_focus.css";
@import "../../mixins/_button.css";

:root {
	--ck-color-editable-blur-selection: hsl(0, 0%, 85%);
}

.ck.ck-editor__editable:not(.ck-editor__nested-editable) {
	@mixin ck-rounded-corners;

	&.ck-focused {
		@mixin ck-focus-ring;
		@mixin ck-box-shadow var(--ck-inner-shadow);
	}
}

.ck.ck-editor__editable_inline {
	overflow: auto;
	padding: 0 var(--ck-spacing-standard);
	border: 1px solid transparent;

	&[dir="ltr"] {
		text-align: left;
	}

	&[dir="rtl"] {
		text-align: right;
	}

	/* https://github.com/ckeditor/ckeditor5-theme-lark/issues/116 */
	& > *:first-child {
		margin-top: var(--ck-spacing-large);
	}

	/* https://github.com/ckeditor/ckeditor5/issues/847 */
	& > *:last-child {
		/*
		 * This value should match with the default margins of the block elements (like .media or .image)
		 * to avoid a content jumping when the fake selection container shows up (See https://github.com/ckeditor/ckeditor5/issues/9825).
		 */
		margin-bottom: var(--ck-spacing-large);
	}

	/* https://github.com/ckeditor/ckeditor5/issues/6517 */
	&.ck-blurred ::selection {
		background: var(--ck-color-editable-blur-selection);
	}
}

/* https://github.com/ckeditor/ckeditor5-theme-lark/issues/111 */
.ck.ck-balloon-panel.ck-toolbar-container[class*="arrow_n"] {
	&::after {
		border-bottom-color: var(--ck-color-panel-background);
	}
}

.ck.ck-balloon-panel.ck-toolbar-container[class*="arrow_s"] {
	&::after {
		border-top-color: var(--ck-color-panel-background);
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A visual style of focused element's border.
 */
@define-mixin ck-focus-ring {
	/* Disable native outline. */
	outline: none;
	border: var(--ck-focus-ring)
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A helper to combine multiple shadows.
 */
@define-mixin ck-box-shadow $shadowA, $shadowB: 0 0 {
	box-shadow: $shadowA, $shadowB;
}

/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
@define-mixin ck-drop-shadow {
	@mixin ck-box-shadow var(--ck-drop-shadow);
}
`],sourceRoot:""}]);const S=y},7913:(f,b,m)=>{m.d(b,{A:()=>S});var v=m(9372),A=m.n(v),x=m(935),y=m.n(x)()(A());y.push([f.id,".ck.ck-form__header{align-items:center;display:flex;flex-direction:row;flex-wrap:nowrap;justify-content:space-between}.ck.ck-form__header h2.ck-form__header__label{flex-grow:1}:root{--ck-form-header-height:44px}.ck.ck-form__header{border-bottom:1px solid var(--ck-color-base-border);height:var(--ck-form-header-height);line-height:var(--ck-form-header-height);padding:var(--ck-spacing-small) var(--ck-spacing-large)}[dir=ltr] .ck.ck-form__header>.ck-icon{margin-right:var(--ck-spacing-medium)}[dir=rtl] .ck.ck-form__header>.ck-icon{margin-left:var(--ck-spacing-medium)}.ck.ck-form__header .ck-form__header__label{--ck-font-size-base:15px;font-weight:700}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/formheader/formheader.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/formheader/formheader.css"],names:[],mappings:"AAKA,oBAIC,kBAAmB,CAHnB,YAAa,CACb,kBAAmB,CACnB,gBAAiB,CAEjB,6BAKD,CAHC,8CACC,WACD,CCPD,MACC,4BACD,CAEA,oBAIC,mDAAoD,CAFpD,mCAAoC,CACpC,wCAAyC,CAFzC,uDAmBD,CAdC,uCAEE,qCAMF,CARA,uCAME,oCAEF,CAEA,4CACC,wBAAyB,CACzB,eACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-form__header {
	display: flex;
	flex-direction: row;
	flex-wrap: nowrap;
	align-items: center;
	justify-content: space-between;

	& h2.ck-form__header__label {
		flex-grow: 1;
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

:root {
	--ck-form-header-height: 44px;
}

.ck.ck-form__header {
	padding: var(--ck-spacing-small) var(--ck-spacing-large);
	height: var(--ck-form-header-height);
	line-height: var(--ck-form-header-height);
	border-bottom: 1px solid var(--ck-color-base-border);

	& > .ck-icon {
		@mixin ck-dir ltr {
			margin-right: var(--ck-spacing-medium);
		}

		@mixin ck-dir rtl {
			margin-left: var(--ck-spacing-medium);
		}
	}

	& .ck-form__header__label {
		--ck-font-size-base: 15px;
		font-weight: bold;
	}
}
`],sourceRoot:""}]);const S=y},9529:(f,b,m)=>{m.d(b,{A:()=>S});var v=m(9372),A=m.n(v),x=m(935),y=m.n(x)()(A());y.push([f.id,".ck.ck-highlighted-text mark{background:var(--ck-color-highlight-background);font-size:inherit;font-weight:inherit;line-height:inherit;vertical-align:initial}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/highlightedtext/highlightedtext.css"],names:[],mappings:"AAKA,6BACC,+CAAgD,CAIhD,iBAAkB,CAFlB,mBAAoB,CACpB,mBAAoB,CAFpB,sBAID",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-highlighted-text mark {
	background: var(--ck-color-highlight-background);
	vertical-align: initial;
	font-weight: inherit;
	line-height: inherit;
	font-size: inherit;
}
`],sourceRoot:""}]);const S=y},7621:(f,b,m)=>{m.d(b,{A:()=>S});var v=m(9372),A=m.n(v),x=m(935),y=m.n(x)()(A());y.push([f.id,".ck.ck-icon{vertical-align:middle}:root{--ck-icon-size:calc(var(--ck-line-height-base)*var(--ck-font-size-normal))}.ck.ck-icon{font-size:.8333350694em;height:var(--ck-icon-size);width:var(--ck-icon-size);will-change:transform}.ck.ck-icon,.ck.ck-icon *{cursor:inherit}.ck.ck-icon.ck-icon_inherit-color,.ck.ck-icon.ck-icon_inherit-color *{color:inherit}.ck.ck-icon.ck-icon_inherit-color :not([fill]){fill:currentColor}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/icon/icon.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/icon/icon.css"],names:[],mappings:"AAKA,YACC,qBACD,CCFA,MACC,0EACD,CAEA,YAKC,uBAAwB,CAHxB,0BAA2B,CAD3B,yBAA0B,CAU1B,qBAoBD,CAlBC,0BALA,cAQA,CAMC,sEACC,aAMD,CAJC,+CAEC,iBACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-icon {
	vertical-align: middle;
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-icon-size: calc(var(--ck-line-height-base) * var(--ck-font-size-normal));
}

.ck.ck-icon {
	width: var(--ck-icon-size);
	height: var(--ck-icon-size);

	/* Multiplied by the height of the line in "px" should give SVG "viewport" dimensions */
	font-size: .8333350694em;

	/* Inherit cursor style (#5). */
	cursor: inherit;

	/* This will prevent blurry icons on Firefox. See #340. */
	will-change: transform;

	& * {
		/* Inherit cursor style (#5). */
		cursor: inherit;
	}

	/* Allows dynamic coloring of an icon by inheriting its color from the parent. */
	&.ck-icon_inherit-color {
		color: inherit;

		& * {
			color: inherit;

			&:not([fill]) {
				/* Needed by FF. */
				fill: currentColor;
			}
		}
	}
}
`],sourceRoot:""}]);const S=y},253:(f,b,m)=>{m.d(b,{A:()=>S});var v=m(9372),A=m.n(v),x=m(935),y=m.n(x)()(A());y.push([f.id,":root{--ck-input-width:18em;--ck-input-text-width:var(--ck-input-width)}.ck.ck-input{border-radius:0}.ck-rounded-corners .ck.ck-input,.ck.ck-input.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-input{background:var(--ck-color-input-background);border:1px solid var(--ck-color-input-border);min-height:var(--ck-ui-component-min-height);min-width:var(--ck-input-width);padding:var(--ck-spacing-extra-tiny) var(--ck-spacing-medium);transition:box-shadow .1s ease-in-out,border .1s ease-in-out}@media (prefers-reduced-motion:reduce){.ck.ck-input{transition:none}}.ck.ck-input:focus{border:var(--ck-focus-ring);box-shadow:var(--ck-focus-outer-shadow),0 0;outline:none}.ck.ck-input[readonly]{background:var(--ck-color-input-disabled-background);border:1px solid var(--ck-color-input-disabled-border);color:var(--ck-color-input-disabled-text)}.ck.ck-input[readonly]:focus{box-shadow:var(--ck-focus-disabled-outer-shadow),0 0}.ck.ck-input.ck-error{animation:ck-input-shake .3s ease both;border-color:var(--ck-color-input-error-border)}@media (prefers-reduced-motion:reduce){.ck.ck-input.ck-error{animation:none}}.ck.ck-input.ck-error:focus{box-shadow:var(--ck-focus-error-outer-shadow),0 0}@keyframes ck-input-shake{20%{transform:translateX(-2px)}40%{transform:translateX(2px)}60%{transform:translateX(-1px)}80%{transform:translateX(1px)}}","",{version:3,sources:["webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/input/input.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_focus.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_shadow.css"],names:[],mappings:"AASA,MACC,qBAAsB,CAGtB,2CACD,CAEA,aCLC,eDmDD,CA9CA,iECDE,qCD+CF,CA9CA,aAGC,2CAA4C,CAC5C,6CAA8C,CAK9C,4CAA6C,CAH7C,+BAAgC,CADhC,6DAA8D,CAO9D,4DAkCD,CAhCC,uCAdD,aAeE,eA+BF,CA9BC,CAEA,mBEvBA,2BAA2B,CCF3B,2CAA8B,CDC9B,YF2BA,CAEA,uBAEC,oDAAqD,CADrD,sDAAuD,CAEvD,yCAMD,CAJC,6BGnCD,oDHsCC,CAGD,sBAEC,sCAAuC,CADvC,+CAUD,CAPC,uCAJD,sBAKE,cAMF,CALC,CAEA,4BGjDD,iDHmDC,CAIF,0BACC,IACC,0BACD,CAEA,IACC,yBACD,CAEA,IACC,0BACD,CAEA,IACC,yBACD,CACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";
@import "../../../mixins/_focus.css";
@import "../../../mixins/_shadow.css";

:root {
	--ck-input-width: 18em;

	/* Backward compatibility. */
	--ck-input-text-width: var(--ck-input-width);
}

.ck.ck-input {
	@mixin ck-rounded-corners;

	background: var(--ck-color-input-background);
	border: 1px solid var(--ck-color-input-border);
	padding: var(--ck-spacing-extra-tiny) var(--ck-spacing-medium);
	min-width: var(--ck-input-width);

	/* This is important to stay of the same height as surrounding buttons */
	min-height: var(--ck-ui-component-min-height);

	/* Apply some smooth transition to the box-shadow and border. */
	transition: box-shadow .1s ease-in-out, border .1s ease-in-out;

	@media (prefers-reduced-motion: reduce) {
		transition: none;
	}

	&:focus {
		@mixin ck-focus-ring;
		@mixin ck-box-shadow var(--ck-focus-outer-shadow);
	}

	&[readonly] {
		border: 1px solid var(--ck-color-input-disabled-border);
		background: var(--ck-color-input-disabled-background);
		color: var(--ck-color-input-disabled-text);

		&:focus {
			/* The read-only input should have a slightly less visible shadow when focused. */
			@mixin ck-box-shadow var(--ck-focus-disabled-outer-shadow);
		}
	}

	&.ck-error {
		border-color: var(--ck-color-input-error-border);
		animation: ck-input-shake .3s ease both;

		@media (prefers-reduced-motion: reduce) {
			animation: none;
		}

		&:focus {
			@mixin ck-box-shadow var(--ck-focus-error-outer-shadow);
		}
	}
}

@keyframes ck-input-shake {
	20% {
		transform: translateX(-2px);
	}

	40% {
		transform: translateX(2px);
	}

	60% {
		transform: translateX(-1px);
	}

	80% {
		transform: translateX(1px);
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A visual style of focused element's border.
 */
@define-mixin ck-focus-ring {
	/* Disable native outline. */
	outline: none;
	border: var(--ck-focus-ring)
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A helper to combine multiple shadows.
 */
@define-mixin ck-box-shadow $shadowA, $shadowB: 0 0 {
	box-shadow: $shadowA, $shadowB;
}

/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
@define-mixin ck-drop-shadow {
	@mixin ck-box-shadow var(--ck-drop-shadow);
}
`],sourceRoot:""}]);const S=y},7801:(f,b,m)=>{m.d(b,{A:()=>S});var v=m(9372),A=m.n(v),x=m(935),y=m.n(x)()(A());y.push([f.id,".ck.ck-label{display:block}.ck.ck-voice-label{display:none}.ck.ck-label{font-weight:700}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/label/label.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/label/label.css"],names:[],mappings:"AAKA,aACC,aACD,CAEA,mBACC,YACD,CCNA,aACC,eACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-label {
	display: block;
}

.ck.ck-voice-label {
	display: none;
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-label {
	font-weight: bold;
}
`],sourceRoot:""}]);const S=y},4962:(f,b,m)=>{m.d(b,{A:()=>S});var v=m(9372),A=m.n(v),x=m(935),y=m.n(x)()(A());y.push([f.id,".ck.ck-labeled-field-view>.ck.ck-labeled-field-view__input-wrapper{display:flex;position:relative}.ck.ck-labeled-field-view .ck.ck-label{display:block;position:absolute}:root{--ck-labeled-field-view-transition:.1s cubic-bezier(0,0,0.24,0.95);--ck-labeled-field-empty-unfocused-max-width:100% - 2 * var(--ck-spacing-medium);--ck-labeled-field-label-default-position-x:var(--ck-spacing-medium);--ck-labeled-field-label-default-position-y:calc(var(--ck-font-size-base)*0.6);--ck-color-labeled-field-label-background:var(--ck-color-base-background)}.ck.ck-labeled-field-view{border-radius:0}.ck-rounded-corners .ck.ck-labeled-field-view,.ck.ck-labeled-field-view.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-labeled-field-view>.ck.ck-labeled-field-view__input-wrapper{width:100%}.ck.ck-labeled-field-view>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{top:0}[dir=ltr] .ck.ck-labeled-field-view>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{left:0;transform:translate(var(--ck-spacing-medium),-6px) scale(.75);transform-origin:0 0}[dir=rtl] .ck.ck-labeled-field-view>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{right:0;transform:translate(calc(var(--ck-spacing-medium)*-1),-6px) scale(.75);transform-origin:100% 0}.ck.ck-labeled-field-view>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{background:var(--ck-color-labeled-field-label-background);font-weight:400;line-height:normal;max-width:100%;overflow:hidden;padding:0 calc(var(--ck-font-size-tiny)*.5);pointer-events:none;text-overflow:ellipsis;transition:transform var(--ck-labeled-field-view-transition),padding var(--ck-labeled-field-view-transition),background var(--ck-labeled-field-view-transition)}@media (prefers-reduced-motion:reduce){.ck.ck-labeled-field-view>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{transition:none}}.ck.ck-labeled-field-view.ck-error .ck-input:not([readonly])+.ck.ck-label,.ck.ck-labeled-field-view.ck-error>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{color:var(--ck-color-base-error)}.ck.ck-labeled-field-view .ck-labeled-field-view__status{font-size:var(--ck-font-size-small);margin-top:var(--ck-spacing-small);white-space:normal}.ck.ck-labeled-field-view .ck-labeled-field-view__status.ck-labeled-field-view__status_error{color:var(--ck-color-base-error)}.ck.ck-labeled-field-view.ck-disabled>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label,.ck.ck-labeled-field-view.ck-labeled-field-view_empty:not(.ck-labeled-field-view_focused)>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{color:var(--ck-color-input-disabled-text)}[dir=ltr] .ck.ck-labeled-field-view.ck-disabled.ck-labeled-field-view_empty:not(.ck-labeled-field-view_placeholder)>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label,[dir=ltr] .ck.ck-labeled-field-view.ck-labeled-field-view_empty:not(.ck-labeled-field-view_focused):not(.ck-labeled-field-view_placeholder):not(.ck-error)>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{transform:translate(var(--ck-labeled-field-label-default-position-x),var(--ck-labeled-field-label-default-position-y)) scale(1)}[dir=rtl] .ck.ck-labeled-field-view.ck-disabled.ck-labeled-field-view_empty:not(.ck-labeled-field-view_placeholder)>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label,[dir=rtl] .ck.ck-labeled-field-view.ck-labeled-field-view_empty:not(.ck-labeled-field-view_focused):not(.ck-labeled-field-view_placeholder):not(.ck-error)>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{transform:translate(calc(var(--ck-labeled-field-label-default-position-x)*-1),var(--ck-labeled-field-label-default-position-y)) scale(1)}.ck.ck-labeled-field-view.ck-disabled.ck-labeled-field-view_empty:not(.ck-labeled-field-view_placeholder)>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label,.ck.ck-labeled-field-view.ck-labeled-field-view_empty:not(.ck-labeled-field-view_focused):not(.ck-labeled-field-view_placeholder):not(.ck-error)>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{background:transparent;max-width:calc(var(--ck-labeled-field-empty-unfocused-max-width));padding:0}.ck.ck-labeled-field-view>.ck.ck-labeled-field-view__input-wrapper>.ck-dropdown>.ck.ck-button{background:transparent}.ck.ck-labeled-field-view.ck-labeled-field-view_empty>.ck.ck-labeled-field-view__input-wrapper>.ck-dropdown>.ck-button>.ck-button__label{opacity:0}.ck.ck-labeled-field-view.ck-labeled-field-view_empty:not(.ck-labeled-field-view_focused):not(.ck-labeled-field-view_placeholder)>.ck.ck-labeled-field-view__input-wrapper>.ck-dropdown+.ck-label{max-width:calc(var(--ck-labeled-field-empty-unfocused-max-width) - var(--ck-dropdown-arrow-size) - var(--ck-spacing-standard))}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/labeledfield/labeledfieldview.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/labeledfield/labeledfieldview.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css"],names:[],mappings:"AAMC,mEACC,YAAa,CACb,iBACD,CAEA,uCACC,aAAc,CACd,iBACD,CCND,MACC,kEAAsE,CACtE,gFAAiF,CACjF,oEAAqE,CACrE,8EAAiF,CACjF,yEACD,CAEA,0BCLC,eDmHD,CA9GA,2FCDE,qCD+GF,CA3GC,mEACC,UAwCD,CAtCC,gFACC,KAoCD,CArCA,0FAIE,MAAS,CAGT,6DAA+D,CAF/D,oBAgCF,CArCA,0FAWE,OAAU,CAEV,sEAA0E,CAD1E,uBAyBF,CArCA,gFAkBC,yDAA0D,CAG1D,eAAmB,CADnB,kBAAoB,CAOpB,cAAe,CAFf,eAAgB,CANhB,2CAA8C,CAH9C,mBAAoB,CAQpB,sBAAuB,CAKvB,+JAQD,CAHC,uCAlCD,gFAmCE,eAEF,CADC,CASD,mKACC,gCACD,CAGD,yDACC,mCAAoC,CACpC,kCAAmC,CAInC,kBAKD,CAHC,6FACC,gCACD,CAID,4OAEC,yCACD,CAIA,2XAGE,+HAYF,CAfA,2XAOE,wIAQF,CAfA,uWAaC,sBAAuB,CAFvB,iEAAkE,CAGlE,SACD,CAKA,8FACC,sBACD,CAGA,yIACC,SACD,CAGA,kMACC,8HACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-labeled-field-view {
	& > .ck.ck-labeled-field-view__input-wrapper {
		display: flex;
		position: relative;
	}

	& .ck.ck-label {
		display: block;
		position: absolute;
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";
@import "../../../mixins/_rounded.css";

:root {
	--ck-labeled-field-view-transition: .1s cubic-bezier(0, 0, 0.24, 0.95);
	--ck-labeled-field-empty-unfocused-max-width: 100% - 2 * var(--ck-spacing-medium);
	--ck-labeled-field-label-default-position-x: var(--ck-spacing-medium);
	--ck-labeled-field-label-default-position-y: calc(0.6 * var(--ck-font-size-base));
	--ck-color-labeled-field-label-background: var(--ck-color-base-background);
}

.ck.ck-labeled-field-view {
	@mixin ck-rounded-corners;

	& > .ck.ck-labeled-field-view__input-wrapper {
		width: 100%;

		& > .ck.ck-label {
			top: 0px;

			@mixin ck-dir ltr {
				left: 0px;
				transform-origin: 0 0;
				/* By default, display the label scaled down above the field. */
				transform: translate(var(--ck-spacing-medium), -6px) scale(.75);
			}

			@mixin ck-dir rtl {
				right: 0px;
				transform-origin: 100% 0;
				transform: translate(calc(-1 * var(--ck-spacing-medium)), -6px) scale(.75);
			}

			pointer-events: none;

			background: var(--ck-color-labeled-field-label-background);
			padding: 0 calc(.5 * var(--ck-font-size-tiny));
			line-height: initial;
			font-weight: normal;

			/* Prevent overflow when the label is longer than the input */
			text-overflow: ellipsis;
			overflow: hidden;

			max-width: 100%;

			transition:
				transform var(--ck-labeled-field-view-transition),
				padding var(--ck-labeled-field-view-transition),
				background var(--ck-labeled-field-view-transition);

			@media (prefers-reduced-motion: reduce) {
				transition: none;
			}
		}
	}

	&.ck-error {
		& > .ck.ck-labeled-field-view__input-wrapper > .ck.ck-label {
			color: var(--ck-color-base-error);
		}

		& .ck-input:not([readonly]) + .ck.ck-label {
			color: var(--ck-color-base-error);
		}
	}

	& .ck-labeled-field-view__status {
		font-size: var(--ck-font-size-small);
		margin-top: var(--ck-spacing-small);

		/* Let the info wrap to the next line to avoid stretching the layout horizontally.
		The status could be very long. */
		white-space: normal;

		&.ck-labeled-field-view__status_error {
			color: var(--ck-color-base-error);
		}
	}

	/* Disabled fields and fields that have no focus should fade out. */
	&.ck-disabled > .ck.ck-labeled-field-view__input-wrapper > .ck.ck-label,
	&.ck-labeled-field-view_empty:not(.ck-labeled-field-view_focused) > .ck.ck-labeled-field-view__input-wrapper > .ck.ck-label {
		color: var(--ck-color-input-disabled-text);
	}

	/* Fields that are disabled or not focused and without a placeholder should have full-sized labels. */
	/* stylelint-disable-next-line no-descending-specificity */
	&.ck-disabled.ck-labeled-field-view_empty:not(.ck-labeled-field-view_placeholder) > .ck.ck-labeled-field-view__input-wrapper > .ck.ck-label,
	&.ck-labeled-field-view_empty:not(.ck-labeled-field-view_focused):not(.ck-labeled-field-view_placeholder):not(.ck-error) > .ck.ck-labeled-field-view__input-wrapper > .ck.ck-label {
		@mixin ck-dir ltr {
			transform: translate(var(--ck-labeled-field-label-default-position-x), var(--ck-labeled-field-label-default-position-y)) scale(1);
		}

		@mixin ck-dir rtl {
			transform: translate(calc(-1 * var(--ck-labeled-field-label-default-position-x)), var(--ck-labeled-field-label-default-position-y)) scale(1);
		}

		/* Compensate for the default translate position. */
		max-width: calc(var(--ck-labeled-field-empty-unfocused-max-width));

		background: transparent;
		padding: 0;
	}

	/*------ DropdownView integration ----------------------------------------------------------------------------------- */

	/* Make sure dropdown' background color in any of dropdown's state does not collide with labeled field. */
	& > .ck.ck-labeled-field-view__input-wrapper > .ck-dropdown > .ck.ck-button {
		background: transparent;
	}

	/* When the dropdown is "empty", the labeled field label replaces its label. */
	&.ck-labeled-field-view_empty > .ck.ck-labeled-field-view__input-wrapper > .ck-dropdown > .ck-button > .ck-button__label {
		opacity: 0;
	}

	/* Make sure the label of the empty, unfocused input does not cover the dropdown arrow. */
	&.ck-labeled-field-view_empty:not(.ck-labeled-field-view_focused):not(.ck-labeled-field-view_placeholder) > .ck.ck-labeled-field-view__input-wrapper > .ck-dropdown + .ck-label {
		max-width: calc(var(--ck-labeled-field-empty-unfocused-max-width) - var(--ck-dropdown-arrow-size) - var(--ck-spacing-standard));
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`],sourceRoot:""}]);const S=y},5199:(f,b,m)=>{m.d(b,{A:()=>S});var v=m(9372),A=m.n(v),x=m(935),y=m.n(x)()(A());y.push([f.id,".ck.ck-list{display:flex;flex-direction:column;-moz-user-select:none;-webkit-user-select:none;-ms-user-select:none;user-select:none}.ck.ck-list .ck-list__item,.ck.ck-list .ck-list__separator{display:block}.ck.ck-list .ck-list__item>:focus{position:relative;z-index:var(--ck-z-default)}:root{--ck-list-button-padding:calc(var(--ck-line-height-base)*0.11*var(--ck-font-size-base)) calc(var(--ck-line-height-base)*0.4*var(--ck-font-size-base))}.ck.ck-list{border-radius:0}.ck-rounded-corners .ck.ck-list,.ck.ck-list.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-list{background:var(--ck-color-list-background);list-style-type:none}.ck.ck-list__item{cursor:default;min-width:12em}.ck.ck-list__item>.ck-button{border-radius:0;min-height:unset;width:100%}[dir=ltr] .ck.ck-list__item>.ck-button{text-align:left}[dir=rtl] .ck.ck-list__item>.ck-button{text-align:right}.ck.ck-list__item>.ck-button{padding:var(--ck-list-button-padding)}.ck.ck-list__item>.ck-button:active{box-shadow:none}.ck.ck-list__item>.ck-button.ck-on{background:var(--ck-color-list-button-on-background);color:var(--ck-color-list-button-on-text)}.ck.ck-list__item>.ck-button.ck-on:active{box-shadow:none}.ck.ck-list__item>.ck-button.ck-on:hover:not(.ck-disabled){background:var(--ck-color-list-button-on-background-focus)}.ck.ck-list__item>.ck-button.ck-on:focus:not(.ck-switchbutton):not(.ck-disabled){border-color:var(--ck-color-base-background)}.ck.ck-list__item>.ck-button:hover:not(.ck-disabled){background:var(--ck-color-list-button-hover-background)}.ck.ck-list__item>.ck-switchbutton.ck-on{background:var(--ck-color-list-background);color:inherit}.ck.ck-list__item>.ck-switchbutton.ck-on:hover:not(.ck-disabled){background:var(--ck-color-list-button-hover-background);color:inherit}.ck-list .ck-list__group{padding-top:var(--ck-spacing-medium);:not(.ck-hidden)~&{border-top:1px solid var(--ck-color-base-border)}}.ck-list .ck-list__group>.ck-label{font-size:11px;font-weight:700;padding:var(--ck-spacing-medium) var(--ck-spacing-medium) 0 var(--ck-spacing-medium)}.ck.ck-list__separator{background:var(--ck-color-base-border);height:1px;width:100%}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/list/list.css","webpack://./../ckeditor5-ui/theme/mixins/_unselectable.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/list/list.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css"],names:[],mappings:"AAOA,YAGC,YAAa,CACb,qBAAsB,CCFtB,qBAAsB,CACtB,wBAAyB,CACzB,oBAAqB,CACrB,gBDaD,CAZC,2DAEC,aACD,CAKA,kCACC,iBAAkB,CAClB,2BACD,CEdD,MACC,qJAGD,CAEA,YCLC,eDUD,CALA,+DCDE,qCDMF,CALA,YAIC,0CAA2C,CAD3C,oBAED,CAEA,kBACC,cAAe,CACf,cA2DD,CAzDC,6BAGC,eAAgB,CAFhB,gBAAiB,CACjB,UAwCD,CA1CA,uCAME,eAoCF,CA1CA,uCAUE,gBAgCF,CA1CA,6BAgBC,qCA0BD,CAxBC,oCACC,eACD,CAEA,mCACC,oDAAqD,CACrD,yCAaD,CAXC,0CACC,eACD,CAEA,2DACC,0DACD,CAEA,iFACC,4CACD,CAGD,qDACC,uDACD,CAMA,yCACC,0CAA2C,CAC3C,aAMD,CAJC,iEACC,uDAAwD,CACxD,aACD,CAKH,yBACC,oCAAqC,CAGrC,mBACC,gDACD,CAOD,CALC,mCACC,cAAe,CACf,eAAiB,CACjB,oFACD,CAGD,uBAGC,sCAAuC,CAFvC,UAAW,CACX,UAED",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../mixins/_unselectable.css";

.ck.ck-list {
	@mixin ck-unselectable;

	display: flex;
	flex-direction: column;

	& .ck-list__item,
	& .ck-list__separator {
		display: block;
	}

	/* Make sure that whatever child of the list item gets focus, it remains on the
	top. Thanks to that, styles like box-shadow, outline, etc. are not masked by
	adjacent list items. */
	& .ck-list__item > *:focus {
		position: relative;
		z-index: var(--ck-z-default);
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Makes element unselectable.
 */
@define-mixin ck-unselectable {
	-moz-user-select: none;
	-webkit-user-select: none;
	-ms-user-select: none;
	user-select: none
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_disabled.css";
@import "../../../mixins/_rounded.css";
@import "../../../mixins/_shadow.css";
@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

:root {
	--ck-list-button-padding:
		calc(.11 * var(--ck-line-height-base) * var(--ck-font-size-base))
		calc(.4 * var(--ck-line-height-base) * var(--ck-font-size-base));
}

.ck.ck-list {
	@mixin ck-rounded-corners;

	list-style-type: none;
	background: var(--ck-color-list-background);
}

.ck.ck-list__item {
	cursor: default;
	min-width: 12em;

	& > .ck-button {
		min-height: unset;
		width: 100%;
		border-radius: 0;

		@mixin ck-dir ltr {
			text-align: left;
		}

		@mixin ck-dir rtl {
			text-align: right;
		}

		/* List items should have the same height. Use absolute units to make sure it is so
		   because e.g. different heading styles may have different height
		   https://github.com/ckeditor/ckeditor5-heading/issues/63 */
		padding: var(--ck-list-button-padding);

		&:active {
			box-shadow: none;
		}

		&.ck-on {
			background: var(--ck-color-list-button-on-background);
			color: var(--ck-color-list-button-on-text);

			&:active {
				box-shadow: none;
			}

			&:hover:not(.ck-disabled) {
				background: var(--ck-color-list-button-on-background-focus);
			}

			&:focus:not(.ck-switchbutton):not(.ck-disabled) {
				border-color: var(--ck-color-base-background);
			}
		}

		&:hover:not(.ck-disabled) {
			background: var(--ck-color-list-button-hover-background);
		}
	}

	/* It's unnecessary to change the background/text of a switch toggle; it has different ways
	of conveying its state (like the switcher) */
	& > .ck-switchbutton {
		&.ck-on {
			background: var(--ck-color-list-background);
			color: inherit;

			&:hover:not(.ck-disabled) {
				background: var(--ck-color-list-button-hover-background);
				color: inherit;
			}
		}
	}
}

.ck-list .ck-list__group {
	padding-top: var(--ck-spacing-medium);

	/* The group should have a border when it's not the first item. */
	*:not(.ck-hidden) ~ & {
		border-top: 1px solid var(--ck-color-base-border);
	}

	& > .ck-label {
		font-size: 11px;
		font-weight: bold;
		padding: var(--ck-spacing-medium) var(--ck-spacing-medium) 0 var(--ck-spacing-medium);
	}
}

.ck.ck-list__separator {
	height: 1px;
	width: 100%;
	background: var(--ck-color-base-border);
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`],sourceRoot:""}]);const S=y},497:(f,b,m)=>{m.d(b,{A:()=>S});var v=m(9372),A=m.n(v),x=m(935),y=m.n(x)()(A());y.push([f.id,".ck.ck-menu-bar{background:var(--ck-color-base-background);border:1px solid var(--ck-color-toolbar-border);display:flex;flex-wrap:wrap;gap:var(--ck-spacing-small);justify-content:flex-start;padding:var(--ck-spacing-small);width:100%}","",{version:3,sources:["webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/menubar/menubar.css"],names:[],mappings:"AAKA,gBAIC,0CAA2C,CAG3C,+CAAgD,CANhD,YAAa,CACb,cAAe,CAIf,2BAA4B,CAH5B,0BAA2B,CAE3B,+BAAgC,CAGhC,UACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-menu-bar {
	display: flex;
	flex-wrap: wrap;
	justify-content: flex-start;
	background: var(--ck-color-base-background);
	padding: var(--ck-spacing-small);
	gap: var(--ck-spacing-small);
	border: 1px solid var(--ck-color-toolbar-border);
	width: 100%;
}
`],sourceRoot:""}]);const S=y},4:(f,b,m)=>{m.d(b,{A:()=>S});var v=m(9372),A=m.n(v),x=m(935),y=m.n(x)()(A());y.push([f.id,".ck.ck-menu-bar__menu{display:block;font-size:inherit;position:relative}.ck.ck-menu-bar__menu.ck-menu-bar__menu_top-level{max-width:100%}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/menubar/menubarmenu.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/menubar/menubarmenu.css"],names:[],mappings:"AAKA,sBACC,aAAc,CCCd,iBAAkB,CDAlB,iBACD,CCCC,kDACC,cACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-menu-bar__menu {
	display: block;
	position: relative;
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-menu-bar__menu {
	/* Enable font size inheritance, which allows fluid UI scaling. */
	font-size: inherit;

	&.ck-menu-bar__menu_top-level {
		max-width: 100%;
	}
}
`],sourceRoot:""}]);const S=y},3344:(f,b,m)=>{m.d(b,{A:()=>S});var v=m(9372),A=m.n(v),x=m(935),y=m.n(x)()(A());y.push([f.id,".ck.ck-menu-bar__menu>.ck-menu-bar__menu__button>.ck-menu-bar__menu__button__arrow{pointer-events:none;z-index:var(--ck-z-default)}.ck.ck-menu-bar__menu>.ck-menu-bar__menu__button{padding:var(--ck-list-button-padding);width:100%}.ck.ck-menu-bar__menu>.ck-menu-bar__menu__button>.ck-button__label{flex-grow:1;overflow:hidden;text-overflow:ellipsis}.ck.ck-menu-bar__menu>.ck-menu-bar__menu__button.ck-disabled>.ck-button__label{opacity:var(--ck-disabled-opacity)}[dir=ltr] .ck.ck-menu-bar__menu>.ck-menu-bar__menu__button:not(.ck-button_with-text){padding-left:var(--ck-spacing-small)}[dir=rtl] .ck.ck-menu-bar__menu>.ck-menu-bar__menu__button:not(.ck-button_with-text){padding-right:var(--ck-spacing-small)}.ck.ck-menu-bar__menu.ck-menu-bar__menu_top-level>.ck-menu-bar__menu__button{min-height:unset;padding:var(--ck-spacing-small) var(--ck-spacing-medium)}.ck.ck-menu-bar__menu.ck-menu-bar__menu_top-level>.ck-menu-bar__menu__button .ck-button__label{line-height:unset;width:unset}.ck.ck-menu-bar__menu.ck-menu-bar__menu_top-level>.ck-menu-bar__menu__button.ck-on{border-bottom-left-radius:0;border-bottom-right-radius:0}.ck.ck-menu-bar__menu.ck-menu-bar__menu_top-level>.ck-menu-bar__menu__button .ck-icon{display:none}.ck.ck-menu-bar__menu:not(.ck-menu-bar__menu_top-level) .ck-menu-bar__menu__button{border-radius:0}.ck.ck-menu-bar__menu:not(.ck-menu-bar__menu_top-level) .ck-menu-bar__menu__button:focus{border-color:transparent;box-shadow:none}.ck.ck-menu-bar__menu:not(.ck-menu-bar__menu_top-level) .ck-menu-bar__menu__button:focus:not(.ck-on){background:var(--ck-color-button-default-hover-background)}.ck.ck-menu-bar__menu:not(.ck-menu-bar__menu_top-level) .ck-menu-bar__menu__button:not(:has(.ck-button__icon))>.ck-button__label{margin-left:calc(var(--ck-icon-size) - var(--ck-spacing-small))}.ck.ck-menu-bar__menu:not(.ck-menu-bar__menu_top-level) .ck-menu-bar__menu__button>.ck-menu-bar__menu__button__arrow{width:var(--ck-dropdown-arrow-size)}[dir=ltr] .ck.ck-menu-bar__menu:not(.ck-menu-bar__menu_top-level) .ck-menu-bar__menu__button>.ck-menu-bar__menu__button__arrow{transform:rotate(-90deg)}[dir=rtl] .ck.ck-menu-bar__menu:not(.ck-menu-bar__menu_top-level) .ck-menu-bar__menu__button>.ck-menu-bar__menu__button__arrow{transform:rotate(90deg)}.ck.ck-menu-bar__menu:not(.ck-menu-bar__menu_top-level) .ck-menu-bar__menu__button.ck-disabled>.ck-menu-bar__menu__button__arrow{opacity:var(--ck-disabled-opacity)}[dir=ltr] .ck.ck-menu-bar__menu:not(.ck-menu-bar__menu_top-level) .ck-menu-bar__menu__button>.ck-menu-bar__menu__button__arrow{margin-left:var(--ck-spacing-standard);right:var(--ck-spacing-standard)}[dir=rtl] .ck.ck-menu-bar__menu:not(.ck-menu-bar__menu_top-level) .ck-menu-bar__menu__button>.ck-menu-bar__menu__button__arrow{left:var(--ck-spacing-standard);margin-right:var(--ck-spacing-small)}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/menubar/menubarmenubutton.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/menubar/menubarmenubutton.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_disabled.css"],names:[],mappings:"AAMC,mFACC,mBAAoB,CACpB,2BACD,CCIA,iDACC,qCAAsC,CACtC,UAuBD,CArBC,mEACC,WAAY,CACZ,eAAgB,CAChB,sBACD,CAEA,+ECdD,kCDgBC,CAGC,qFACC,oCACD,CAIA,qFACC,qCACD,CAOF,6EAEC,gBAAiB,CADjB,wDAgBD,CAbC,+FAEC,iBAAkB,CADlB,WAED,CAEA,mFACC,2BAA4B,CAC5B,4BACD,CAEA,sFACC,YACD,CAMD,mFACC,eAiDD,CA/CC,yFACC,wBAAyB,CACzB,eAKD,CAHC,qGACC,0DACD,CAID,iIACC,+DACD,CAEA,qHACC,mCASD,CAVA,+HAIE,wBAMF,CAVA,+HAQE,uBAEF,CAEA,iICrFD,kCDuFC,CAGC,+HAIC,sCAAuC,CAHvC,gCAID,CAIA,+HACC,+BAAgC,CAGhC,oCACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-menu-bar__menu  {
	& > .ck-menu-bar__menu__button > .ck-menu-bar__menu__button__arrow {
		pointer-events: none;
		z-index: var(--ck-z-default);
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_disabled.css";
@import "../../mixins/_button.css";
@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

.ck.ck-menu-bar__menu {
	/*
	 * All menu buttons.
	 */
	& > .ck-menu-bar__menu__button {
		padding: var(--ck-list-button-padding);
		width: 100%;

		& > .ck-button__label {
			flex-grow: 1;
			overflow: hidden;
			text-overflow: ellipsis;
		}

		&.ck-disabled > .ck-button__label {
			@mixin ck-disabled;
		}

		@mixin ck-dir ltr {
			&:not(.ck-button_with-text) {
				padding-left: var(--ck-spacing-small);
			}
		}

		@mixin ck-dir rtl {
			&:not(.ck-button_with-text) {
				padding-right: var(--ck-spacing-small);
			}
		}
	}

	/*
	 * Top-level menu buttons only.
	 */
	&.ck-menu-bar__menu_top-level > .ck-menu-bar__menu__button {
		padding: var(--ck-spacing-small) var(--ck-spacing-medium);
		min-height: unset;

		& .ck-button__label {
			width: unset;
			line-height: unset;
		}

		&.ck-on {
			border-bottom-left-radius: 0;
			border-bottom-right-radius: 0;
		}

		& .ck-icon {
			display: none;
		}
	}

	/*
	 * Sub-menu buttons.
	 */
	&:not(.ck-menu-bar__menu_top-level) .ck-menu-bar__menu__button {
		border-radius: 0;

		&:focus {
			border-color: transparent;
			box-shadow: none;

			&:not(.ck-on) {
				background: var(--ck-color-button-default-hover-background);
			}
		}

		/* Spacing in buttons that miss the icon. */
		&:not(:has(.ck-button__icon)) > .ck-button__label {
			margin-left: calc(var(--ck-icon-size) - var(--ck-spacing-small));
		}

		& > .ck-menu-bar__menu__button__arrow {
			width: var(--ck-dropdown-arrow-size);

			@mixin ck-dir ltr {
				transform: rotate(-90deg);
			}

			@mixin ck-dir rtl {
				transform: rotate(90deg);
			}
		}

		&.ck-disabled > .ck-menu-bar__menu__button__arrow {
			@mixin ck-disabled;
		}

		@mixin ck-dir ltr {
			& > .ck-menu-bar__menu__button__arrow {
				right: var(--ck-spacing-standard);

				/* A space to accommodate the triangle. */
				margin-left: var(--ck-spacing-standard);
			}
		}

		@mixin ck-dir rtl {
			& > .ck-menu-bar__menu__button__arrow {
				left: var(--ck-spacing-standard);

				/* A space to accommodate the triangle. */
				margin-right: var(--ck-spacing-small);
			}
		}
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A class which indicates that an element holding it is disabled.
 */
@define-mixin ck-disabled {
	opacity: var(--ck-disabled-opacity);
}
`],sourceRoot:""}]);const S=y},9481:(f,b,m)=>{m.d(b,{A:()=>S});var v=m(9372),A=m.n(v),x=m(935),y=m.n(x)()(A());y.push([f.id,":root{--ck-menu-bar-menu-item-min-width:18em}.ck.ck-menu-bar__menu .ck.ck-menu-bar__menu__item{min-width:var(--ck-menu-bar-menu-item-min-width)}","",{version:3,sources:["webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/menubar/menubarmenulistitem.css"],names:[],mappings:"AAKA,MACC,sCACD,CAEA,kDACC,gDACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-menu-bar-menu-item-min-width: 18em;
}

.ck.ck-menu-bar__menu .ck.ck-menu-bar__menu__item {
	min-width: var(--ck-menu-bar-menu-item-min-width);
}
`],sourceRoot:""}]);const S=y},977:(f,b,m)=>{m.d(b,{A:()=>S});var v=m(9372),A=m.n(v),x=m(935),y=m.n(x)()(A());y.push([f.id,".ck.ck-menu-bar__menu .ck-button.ck-menu-bar__menu__item__button{border-radius:0}.ck.ck-menu-bar__menu .ck-button.ck-menu-bar__menu__item__button>.ck-spinner-container,.ck.ck-menu-bar__menu .ck-button.ck-menu-bar__menu__item__button>.ck-spinner-container .ck-spinner{--ck-toolbar-spinner-size:20px}.ck.ck-menu-bar__menu .ck-button.ck-menu-bar__menu__item__button>.ck-spinner-container{margin-left:calc(var(--ck-spacing-small)*-1);margin-right:var(--ck-spacing-small)}.ck.ck-menu-bar__menu .ck-button.ck-menu-bar__menu__item__button:focus{border-color:transparent;box-shadow:none}.ck.ck-menu-bar__menu .ck-button.ck-menu-bar__menu__item__button:focus:not(.ck-on){background:var(--ck-color-button-default-hover-background)}.ck.ck-menu-bar__menu.ck-menu-bar__menu_top-level>.ck-menu-bar__menu__panel>ul>.ck-menu-bar__menu__item>.ck-menu-bar__menu__item__button:not(:has(.ck-button__icon))>.ck-button__label{margin-left:calc(var(--ck-icon-size) - var(--ck-spacing-small))}","",{version:3,sources:["webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/menubar/menubarmenulistitembutton.css"],names:[],mappings:"AASC,iEACC,eA0BD,CAxBC,0LAGC,8BACD,CAEA,uFAEC,4CAA+C,CAC/C,oCACD,CAMA,uEACC,wBAAyB,CACzB,eAKD,CAHC,mFACC,0DACD,CASD,uLACC,+DACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-menu-bar__menu {
	/*
	 * List item buttons.
	 */
	& .ck-button.ck-menu-bar__menu__item__button {
		border-radius: 0;

		& > .ck-spinner-container,
		& > .ck-spinner-container .ck-spinner {
			/* These styles correspond to .ck-icon so that the spinner seamlessly replaces the icon. */
			--ck-toolbar-spinner-size: 20px;
		}

		& > .ck-spinner-container {
			/* These margins are the same as for .ck-icon. */
			margin-left: calc(-1 * var(--ck-spacing-small));
			margin-right: var(--ck-spacing-small);
		}

		/*
		 * Hovered items automatically get focused. Default focus styles look odd
		 * while moving across a huge list of items so let's get rid of them
		 */
		&:focus {
			border-color: transparent;
			box-shadow: none;

			&:not(.ck-on) {
				background: var(--ck-color-button-default-hover-background);
			}
		}
	}

	/*
	 * First-level sub-menu item buttons.
	 */
	&.ck-menu-bar__menu_top-level > .ck-menu-bar__menu__panel > ul > .ck-menu-bar__menu__item > .ck-menu-bar__menu__item__button {
		/* Spacing in buttons that miss the icon. */
		&:not(:has(.ck-button__icon)) > .ck-button__label {
			margin-left: calc(var(--ck-icon-size) - var(--ck-spacing-small));
		}
	}
}


`],sourceRoot:""}]);const S=y},9108:(f,b,m)=>{m.d(b,{A:()=>S});var v=m(9372),A=m.n(v),x=m(935),y=m.n(x)()(A());y.push([f.id,":root{--ck-menu-bar-menu-max-width:75vw;--ck-menu-bar-nested-menu-horizontal-offset:5px}.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel{max-width:var(--ck-menu-bar-menu-max-width);position:absolute;z-index:var(--ck-z-panel)}.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel.ck-menu-bar__menu__panel_position_ne,.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel.ck-menu-bar__menu__panel_position_nw{bottom:100%}.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel.ck-menu-bar__menu__panel_position_se,.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel.ck-menu-bar__menu__panel_position_sw{bottom:auto;top:100%}.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel.ck-menu-bar__menu__panel_position_ne,.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel.ck-menu-bar__menu__panel_position_se{left:0}.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel.ck-menu-bar__menu__panel_position_nw,.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel.ck-menu-bar__menu__panel_position_sw{right:0}.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel.ck-menu-bar__menu__panel_position_en,.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel.ck-menu-bar__menu__panel_position_es{left:calc(100% - var(--ck-menu-bar-nested-menu-horizontal-offset))}.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel.ck-menu-bar__menu__panel_position_es{top:0}.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel.ck-menu-bar__menu__panel_position_en{bottom:0}.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel.ck-menu-bar__menu__panel_position_wn,.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel.ck-menu-bar__menu__panel_position_ws{right:calc(100% - var(--ck-menu-bar-nested-menu-horizontal-offset))}.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel.ck-menu-bar__menu__panel_position_ws{top:0}.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel.ck-menu-bar__menu__panel_position_wn{bottom:0}:root{--ck-menu-bar-menu-panel-max-width:75vw}.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel{border-radius:0}.ck-rounded-corners .ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel,.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel{background:var(--ck-color-dropdown-panel-background);border:1px solid var(--ck-color-dropdown-panel-border);bottom:0;box-shadow:var(--ck-drop-shadow),0 0;height:fit-content;max-width:var(--ck-menu-bar-menu-panel-max-width)}.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel.ck-menu-bar__menu__panel_position_es,.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel.ck-menu-bar__menu__panel_position_se{border-top-left-radius:0}.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel.ck-menu-bar__menu__panel_position_sw,.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel.ck-menu-bar__menu__panel_position_ws{border-top-right-radius:0}.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel.ck-menu-bar__menu__panel_position_en,.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel.ck-menu-bar__menu__panel_position_ne{border-bottom-left-radius:0}.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel.ck-menu-bar__menu__panel_position_nw,.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel.ck-menu-bar__menu__panel_position_wn{border-bottom-right-radius:0}.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel:focus{outline:none}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/menubar/menubarmenupanel.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/menubar/menubarmenupanel.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_shadow.css"],names:[],mappings:"AAKA,MACC,iCAAkC,CAClC,+CACD,CAEA,mDAEC,2CAA4C,CAC5C,iBAAkB,CAFlB,yBAkDD,CA9CC,gLAEC,WACD,CAEA,gLAGC,WAAY,CADZ,QAED,CAEA,gLAEC,MACD,CAEA,gLAEC,OACD,CAEA,gLAEC,kEACD,CAEA,wFACC,KACD,CAEA,wFACC,QACD,CAEA,gLAEC,mEACD,CAEA,wFACC,KACD,CAEA,wFACC,QACD,CCpDD,MACC,uCACD,CAEA,mDCDC,eDmCD,CAlCA,6ICGE,qCD+BF,CAlCA,mDAIC,oDAAqD,CACrD,sDAAuD,CACvD,QAAS,CETT,oCAA8B,CFU9B,kBAAmB,CACnB,iDA0BD,CAvBC,gLAEC,wBACD,CAEA,gLAEC,yBACD,CAEA,gLAEC,2BACD,CAEA,gLAEC,4BACD,CAEA,yDACC,YACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-menu-bar-menu-max-width: 75vw;
	--ck-menu-bar-nested-menu-horizontal-offset: 5px;
}

.ck.ck-menu-bar__menu > .ck.ck-menu-bar__menu__panel {
	z-index: var(--ck-z-panel);
	max-width: var(--ck-menu-bar-menu-max-width);
	position: absolute;

	&.ck-menu-bar__menu__panel_position_ne,
	&.ck-menu-bar__menu__panel_position_nw {
		bottom: 100%;
	}

	&.ck-menu-bar__menu__panel_position_se,
	&.ck-menu-bar__menu__panel_position_sw {
		top: 100%;
		bottom: auto;
	}

	&.ck-menu-bar__menu__panel_position_ne,
	&.ck-menu-bar__menu__panel_position_se {
		left: 0px;
	}

	&.ck-menu-bar__menu__panel_position_nw,
	&.ck-menu-bar__menu__panel_position_sw {
		right: 0px;
	}

	&.ck-menu-bar__menu__panel_position_es,
	&.ck-menu-bar__menu__panel_position_en {
		left: calc( 100% - var(--ck-menu-bar-nested-menu-horizontal-offset) );
	}

	&.ck-menu-bar__menu__panel_position_es {
		top: 0px;
	}

	&.ck-menu-bar__menu__panel_position_en {
		bottom: 0px;
	}

	&.ck-menu-bar__menu__panel_position_ws,
	&.ck-menu-bar__menu__panel_position_wn {
		right: calc( 100% - var(--ck-menu-bar-nested-menu-horizontal-offset) );
	}

	&.ck-menu-bar__menu__panel_position_ws {
		top: 0px;
	}

	&.ck-menu-bar__menu__panel_position_wn {
		bottom: 0px;
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";
@import "../../../mixins/_shadow.css";

:root {
	--ck-menu-bar-menu-panel-max-width: 75vw;
}

.ck.ck-menu-bar__menu > .ck.ck-menu-bar__menu__panel {
	@mixin ck-rounded-corners;
	@mixin ck-drop-shadow;

	background: var(--ck-color-dropdown-panel-background);
	border: 1px solid var(--ck-color-dropdown-panel-border);
	bottom: 0;
	height: fit-content;
	max-width: var(--ck-menu-bar-menu-panel-max-width);

	/* Corner border radius consistent with the button. */
	&.ck-menu-bar__menu__panel_position_es,
	&.ck-menu-bar__menu__panel_position_se {
		border-top-left-radius: 0;
	}

	&.ck-menu-bar__menu__panel_position_ws,
	&.ck-menu-bar__menu__panel_position_sw {
		border-top-right-radius: 0;
	}

	&.ck-menu-bar__menu__panel_position_en,
	&.ck-menu-bar__menu__panel_position_ne {
		border-bottom-left-radius: 0;
	}

	&.ck-menu-bar__menu__panel_position_wn,
	&.ck-menu-bar__menu__panel_position_nw {
		border-bottom-right-radius: 0;
	}

	&:focus {
		outline: none;
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A helper to combine multiple shadows.
 */
@define-mixin ck-box-shadow $shadowA, $shadowB: 0 0 {
	box-shadow: $shadowA, $shadowB;
}

/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
@define-mixin ck-drop-shadow {
	@mixin ck-box-shadow var(--ck-drop-shadow);
}
`],sourceRoot:""}]);const S=y},3710:(f,b,m)=>{m.d(b,{A:()=>S});var v=m(9372),A=m.n(v),x=m(935),y=m.n(x)()(A());y.push([f.id,':root{--ck-balloon-panel-arrow-z-index:calc(var(--ck-z-default) - 3)}.ck.ck-balloon-panel{display:none;position:absolute;z-index:var(--ck-z-panel)}.ck.ck-balloon-panel.ck-balloon-panel_with-arrow:after,.ck.ck-balloon-panel.ck-balloon-panel_with-arrow:before{content:"";position:absolute}.ck.ck-balloon-panel.ck-balloon-panel_with-arrow:before{z-index:var(--ck-balloon-panel-arrow-z-index)}.ck.ck-balloon-panel.ck-balloon-panel_with-arrow:after{z-index:calc(var(--ck-balloon-panel-arrow-z-index) + 1)}.ck.ck-balloon-panel[class*=arrow_n]:before{z-index:var(--ck-balloon-panel-arrow-z-index)}.ck.ck-balloon-panel[class*=arrow_n]:after{z-index:calc(var(--ck-balloon-panel-arrow-z-index) + 1)}.ck.ck-balloon-panel[class*=arrow_s]:before{z-index:var(--ck-balloon-panel-arrow-z-index)}.ck.ck-balloon-panel[class*=arrow_s]:after{z-index:calc(var(--ck-balloon-panel-arrow-z-index) + 1)}.ck.ck-balloon-panel.ck-balloon-panel_visible{display:block}:root{--ck-balloon-border-width:1px;--ck-balloon-arrow-offset:2px;--ck-balloon-arrow-height:10px;--ck-balloon-arrow-half-width:8px;--ck-balloon-arrow-drop-shadow:0 2px 2px var(--ck-color-shadow-drop)}.ck.ck-balloon-panel{border-radius:0}.ck-rounded-corners .ck.ck-balloon-panel,.ck.ck-balloon-panel.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-balloon-panel{background:var(--ck-color-panel-background);border:var(--ck-balloon-border-width) solid var(--ck-color-panel-border);box-shadow:var(--ck-drop-shadow),0 0;min-height:15px}.ck.ck-balloon-panel.ck-balloon-panel_with-arrow:after,.ck.ck-balloon-panel.ck-balloon-panel_with-arrow:before{border-style:solid;height:0;width:0}.ck.ck-balloon-panel[class*=arrow_n]:after,.ck.ck-balloon-panel[class*=arrow_n]:before{border-width:0 var(--ck-balloon-arrow-half-width) var(--ck-balloon-arrow-height) var(--ck-balloon-arrow-half-width)}.ck.ck-balloon-panel[class*=arrow_n]:before{border-color:transparent transparent var(--ck-color-panel-border) transparent;margin-top:calc(var(--ck-balloon-border-width)*-1)}.ck.ck-balloon-panel[class*=arrow_n]:after{border-color:transparent transparent var(--ck-color-panel-background) transparent;margin-top:calc(var(--ck-balloon-arrow-offset) - var(--ck-balloon-border-width))}.ck.ck-balloon-panel[class*=arrow_s]:after,.ck.ck-balloon-panel[class*=arrow_s]:before{border-width:var(--ck-balloon-arrow-height) var(--ck-balloon-arrow-half-width) 0 var(--ck-balloon-arrow-half-width)}.ck.ck-balloon-panel[class*=arrow_s]:before{border-color:var(--ck-color-panel-border) transparent transparent;filter:drop-shadow(var(--ck-balloon-arrow-drop-shadow));margin-bottom:calc(var(--ck-balloon-border-width)*-1)}.ck.ck-balloon-panel[class*=arrow_s]:after{border-color:var(--ck-color-panel-background) transparent transparent transparent;margin-bottom:calc(var(--ck-balloon-arrow-offset) - var(--ck-balloon-border-width))}.ck.ck-balloon-panel[class*=arrow_e]:after,.ck.ck-balloon-panel[class*=arrow_e]:before{border-width:var(--ck-balloon-arrow-half-width) 0 var(--ck-balloon-arrow-half-width) var(--ck-balloon-arrow-height)}.ck.ck-balloon-panel[class*=arrow_e]:before{border-color:transparent transparent transparent var(--ck-color-panel-border);margin-right:calc(var(--ck-balloon-border-width)*-1)}.ck.ck-balloon-panel[class*=arrow_e]:after{border-color:transparent transparent transparent var(--ck-color-panel-background);margin-right:calc(var(--ck-balloon-arrow-offset) - var(--ck-balloon-border-width))}.ck.ck-balloon-panel[class*=arrow_w]:after,.ck.ck-balloon-panel[class*=arrow_w]:before{border-width:var(--ck-balloon-arrow-half-width) var(--ck-balloon-arrow-height) var(--ck-balloon-arrow-half-width) 0}.ck.ck-balloon-panel[class*=arrow_w]:before{border-color:transparent var(--ck-color-panel-border) transparent transparent;margin-left:calc(var(--ck-balloon-border-width)*-1)}.ck.ck-balloon-panel[class*=arrow_w]:after{border-color:transparent var(--ck-color-panel-background) transparent transparent;margin-left:calc(var(--ck-balloon-arrow-offset) - var(--ck-balloon-border-width))}.ck.ck-balloon-panel.ck-balloon-panel_arrow_n:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_n:before{left:50%;margin-left:calc(var(--ck-balloon-arrow-half-width)*-1);top:calc(var(--ck-balloon-arrow-height)*-1)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_nw:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_nw:before{left:calc(var(--ck-balloon-arrow-half-width)*2);top:calc(var(--ck-balloon-arrow-height)*-1)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_ne:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_ne:before{right:calc(var(--ck-balloon-arrow-half-width)*2);top:calc(var(--ck-balloon-arrow-height)*-1)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_s:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_s:before{bottom:calc(var(--ck-balloon-arrow-height)*-1);left:50%;margin-left:calc(var(--ck-balloon-arrow-half-width)*-1)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_sw:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_sw:before{bottom:calc(var(--ck-balloon-arrow-height)*-1);left:calc(var(--ck-balloon-arrow-half-width)*2)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_se:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_se:before{bottom:calc(var(--ck-balloon-arrow-height)*-1);right:calc(var(--ck-balloon-arrow-half-width)*2)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_sme:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_sme:before{bottom:calc(var(--ck-balloon-arrow-height)*-1);margin-right:calc(var(--ck-balloon-arrow-half-width)*2);right:25%}.ck.ck-balloon-panel.ck-balloon-panel_arrow_smw:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_smw:before{bottom:calc(var(--ck-balloon-arrow-height)*-1);left:25%;margin-left:calc(var(--ck-balloon-arrow-half-width)*2)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_nme:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_nme:before{margin-right:calc(var(--ck-balloon-arrow-half-width)*2);right:25%;top:calc(var(--ck-balloon-arrow-height)*-1)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_nmw:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_nmw:before{left:25%;margin-left:calc(var(--ck-balloon-arrow-half-width)*2);top:calc(var(--ck-balloon-arrow-height)*-1)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_e:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_e:before{margin-top:calc(var(--ck-balloon-arrow-half-width)*-1);right:calc(var(--ck-balloon-arrow-height)*-1);top:50%}.ck.ck-balloon-panel.ck-balloon-panel_arrow_w:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_w:before{left:calc(var(--ck-balloon-arrow-height)*-1);margin-top:calc(var(--ck-balloon-arrow-half-width)*-1);top:50%}',"",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/panel/balloonpanel.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/panel/balloonpanel.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_shadow.css"],names:[],mappings:"AAKA,MAEC,8DACD,CAEA,qBACC,YAAa,CACb,iBAAkB,CAElB,yBAyCD,CAtCE,+GAEC,UAAW,CACX,iBACD,CAEA,wDACC,6CACD,CAEA,uDACC,uDACD,CAIA,4CACC,6CACD,CAEA,2CACC,uDACD,CAIA,4CACC,6CACD,CAEA,2CACC,uDACD,CAGD,8CACC,aACD,CC9CD,MACC,6BAA8B,CAC9B,6BAA8B,CAC9B,8BAA+B,CAC/B,iCAAkC,CAClC,oEACD,CAEA,qBCLC,eDmMD,CA9LA,iFCDE,qCD+LF,CA9LA,qBAMC,2CAA4C,CAC5C,wEAAyE,CEdzE,oCAA8B,CFW9B,eA0LD,CApLE,+GAIC,kBAAmB,CADnB,QAAS,CADT,OAGD,CAIA,uFAEC,mHACD,CAEA,4CACC,6EAA8E,CAC9E,kDACD,CAEA,2CACC,iFAAkF,CAClF,gFACD,CAIA,uFAEC,mHACD,CAEA,4CACC,iEAAkE,CAClE,uDAAwD,CACxD,qDACD,CAEA,2CACC,iFAAkF,CAClF,mFACD,CAIA,uFAEC,mHACD,CAEA,4CACC,6EAA8E,CAC9E,oDACD,CAEA,2CACC,iFAAkF,CAClF,kFACD,CAIA,uFAEC,mHACD,CAEA,4CACC,6EAA8E,CAC9E,mDACD,CAEA,2CACC,iFAAkF,CAClF,iFACD,CAIA,yGAEC,QAAS,CACT,uDAA0D,CAC1D,2CACD,CAIA,2GAEC,+CAAkD,CAClD,2CACD,CAIA,2GAEC,gDAAmD,CACnD,2CACD,CAIA,yGAIC,8CAAiD,CAFjD,QAAS,CACT,uDAED,CAIA,2GAGC,8CAAiD,CADjD,+CAED,CAIA,2GAGC,8CAAiD,CADjD,gDAED,CAIA,6GAIC,8CAAiD,CADjD,uDAA0D,CAD1D,SAGD,CAIA,6GAIC,8CAAiD,CAFjD,QAAS,CACT,sDAED,CAIA,6GAGC,uDAA0D,CAD1D,SAAU,CAEV,2CACD,CAIA,6GAEC,QAAS,CACT,sDAAyD,CACzD,2CACD,CAIA,yGAGC,sDAAyD,CADzD,6CAAgD,CAEhD,OACD,CAIA,yGAEC,4CAA+C,CAC/C,sDAAyD,CACzD,OACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	/* Make sure the balloon arrow does not float over its children. */
	--ck-balloon-panel-arrow-z-index: calc(var(--ck-z-default) - 3);
}

.ck.ck-balloon-panel {
	display: none;
	position: absolute;

	z-index: var(--ck-z-panel);

	&.ck-balloon-panel_with-arrow {
		&::before,
		&::after {
			content: "";
			position: absolute;
		}

		&::before {
			z-index: var(--ck-balloon-panel-arrow-z-index);
		}

		&::after {
			z-index: calc(var(--ck-balloon-panel-arrow-z-index) + 1);
		}
	}

	&[class*="arrow_n"] {
		&::before {
			z-index: var(--ck-balloon-panel-arrow-z-index);
		}

		&::after {
			z-index: calc(var(--ck-balloon-panel-arrow-z-index) + 1);
		}
	}

	&[class*="arrow_s"] {
		&::before {
			z-index: var(--ck-balloon-panel-arrow-z-index);
		}

		&::after {
			z-index: calc(var(--ck-balloon-panel-arrow-z-index) + 1);
		}
	}

	&.ck-balloon-panel_visible {
		display: block;
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";
@import "../../../mixins/_shadow.css";

:root {
	--ck-balloon-border-width: 1px;
	--ck-balloon-arrow-offset: 2px;
	--ck-balloon-arrow-height: 10px;
	--ck-balloon-arrow-half-width: 8px;
	--ck-balloon-arrow-drop-shadow: 0 2px 2px var(--ck-color-shadow-drop);
}

.ck.ck-balloon-panel {
	@mixin ck-rounded-corners;
	@mixin ck-drop-shadow;

	min-height: 15px;

	background: var(--ck-color-panel-background);
	border: var(--ck-balloon-border-width) solid var(--ck-color-panel-border);

	&.ck-balloon-panel_with-arrow {
		&::before,
		&::after {
			width: 0;
			height: 0;
			border-style: solid;
		}
	}

	&[class*="arrow_n"] {
		&::before,
		&::after {
			border-width: 0 var(--ck-balloon-arrow-half-width) var(--ck-balloon-arrow-height) var(--ck-balloon-arrow-half-width);
		}

		&::before {
			border-color: transparent transparent var(--ck-color-panel-border) transparent;
			margin-top: calc( -1 * var(--ck-balloon-border-width) );
		}

		&::after {
			border-color: transparent transparent var(--ck-color-panel-background) transparent;
			margin-top: calc( var(--ck-balloon-arrow-offset) - var(--ck-balloon-border-width) );
		}
	}

	&[class*="arrow_s"] {
		&::before,
		&::after {
			border-width: var(--ck-balloon-arrow-height) var(--ck-balloon-arrow-half-width) 0 var(--ck-balloon-arrow-half-width);
		}

		&::before {
			border-color: var(--ck-color-panel-border) transparent transparent;
			filter: drop-shadow(var(--ck-balloon-arrow-drop-shadow));
			margin-bottom: calc( -1 * var(--ck-balloon-border-width) );
		}

		&::after {
			border-color: var(--ck-color-panel-background) transparent transparent transparent;
			margin-bottom: calc( var(--ck-balloon-arrow-offset) - var(--ck-balloon-border-width) );
		}
	}

	&[class*="arrow_e"] {
		&::before,
		&::after {
			border-width: var(--ck-balloon-arrow-half-width) 0 var(--ck-balloon-arrow-half-width) var(--ck-balloon-arrow-height);
		}

		&::before {
			border-color: transparent transparent transparent var(--ck-color-panel-border);
			margin-right: calc( -1 * var(--ck-balloon-border-width) );
		}

		&::after {
			border-color: transparent transparent transparent var(--ck-color-panel-background);
			margin-right: calc( var(--ck-balloon-arrow-offset) - var(--ck-balloon-border-width) );
		}
	}

	&[class*="arrow_w"] {
		&::before,
		&::after {
			border-width: var(--ck-balloon-arrow-half-width) var(--ck-balloon-arrow-height) var(--ck-balloon-arrow-half-width) 0;
		}

		&::before {
			border-color: transparent var(--ck-color-panel-border) transparent transparent;
			margin-left: calc( -1 * var(--ck-balloon-border-width) );
		}

		&::after {
			border-color: transparent var(--ck-color-panel-background) transparent transparent;
			margin-left: calc( var(--ck-balloon-arrow-offset) - var(--ck-balloon-border-width) );
		}
	}

	&.ck-balloon-panel_arrow_n {
		&::before,
		&::after {
			left: 50%;
			margin-left: calc(-1 * var(--ck-balloon-arrow-half-width));
			top: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_nw {
		&::before,
		&::after {
			left: calc(2 * var(--ck-balloon-arrow-half-width));
			top: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_ne {
		&::before,
		&::after {
			right: calc(2 * var(--ck-balloon-arrow-half-width));
			top: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_s {
		&::before,
		&::after {
			left: 50%;
			margin-left: calc(-1 * var(--ck-balloon-arrow-half-width));
			bottom: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_sw {
		&::before,
		&::after {
			left: calc(2 * var(--ck-balloon-arrow-half-width));
			bottom: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_se {
		&::before,
		&::after {
			right: calc(2 * var(--ck-balloon-arrow-half-width));
			bottom: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_sme {
		&::before,
		&::after {
			right: 25%;
			margin-right: calc(2 * var(--ck-balloon-arrow-half-width));
			bottom: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_smw {
		&::before,
		&::after {
			left: 25%;
			margin-left: calc(2 * var(--ck-balloon-arrow-half-width));
			bottom: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_nme {
		&::before,
		&::after {
			right: 25%;
			margin-right: calc(2 * var(--ck-balloon-arrow-half-width));
			top: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_nmw {
		&::before,
		&::after {
			left: 25%;
			margin-left: calc(2 * var(--ck-balloon-arrow-half-width));
			top: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_e {
		&::before,
		&::after {
			right: calc(-1 * var(--ck-balloon-arrow-height));
			margin-top: calc(-1 * var(--ck-balloon-arrow-half-width));
			top: 50%;
		}
	}

	&.ck-balloon-panel_arrow_w {
		&::before,
		&::after {
			left: calc(-1 * var(--ck-balloon-arrow-height));
			margin-top: calc(-1 * var(--ck-balloon-arrow-half-width));
			top: 50%;
		}
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A helper to combine multiple shadows.
 */
@define-mixin ck-box-shadow $shadowA, $shadowB: 0 0 {
	box-shadow: $shadowA, $shadowB;
}

/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
@define-mixin ck-drop-shadow {
	@mixin ck-box-shadow var(--ck-drop-shadow);
}
`],sourceRoot:""}]);const S=y},991:(f,b,m)=>{m.d(b,{A:()=>S});var v=m(9372),A=m.n(v),x=m(935),y=m.n(x)()(A());y.push([f.id,".ck .ck-balloon-rotator__navigation{align-items:center;display:flex;justify-content:center}.ck .ck-balloon-rotator__content .ck-toolbar{justify-content:center}.ck .ck-balloon-rotator__navigation{background:var(--ck-color-toolbar-background);border-bottom:1px solid var(--ck-color-toolbar-border);padding:0 var(--ck-spacing-small)}.ck .ck-balloon-rotator__navigation>*{margin-bottom:var(--ck-spacing-small);margin-right:var(--ck-spacing-small);margin-top:var(--ck-spacing-small)}.ck .ck-balloon-rotator__navigation .ck-balloon-rotator__counter{margin-left:var(--ck-spacing-small);margin-right:var(--ck-spacing-standard)}.ck .ck-balloon-rotator__content .ck.ck-annotation-wrapper{box-shadow:none}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/panel/balloonrotator.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/panel/balloonrotator.css"],names:[],mappings:"AAKA,oCAEC,kBAAmB,CADnB,YAAa,CAEb,sBACD,CAKA,6CACC,sBACD,CCXA,oCACC,6CAA8C,CAC9C,sDAAuD,CACvD,iCAgBD,CAbC,sCAGC,qCAAsC,CAFtC,oCAAqC,CACrC,kCAED,CAGA,iEAIC,mCAAoC,CAHpC,uCAID,CAMA,2DACC,eACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck .ck-balloon-rotator__navigation {
	display: flex;
	align-items: center;
	justify-content: center;
}

/* Buttons inside a toolbar should be centered when rotator bar is wider.
 * See: https://github.com/ckeditor/ckeditor5-ui/issues/495
 */
.ck .ck-balloon-rotator__content .ck-toolbar {
	justify-content: center;
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck .ck-balloon-rotator__navigation {
	background: var(--ck-color-toolbar-background);
	border-bottom: 1px solid var(--ck-color-toolbar-border);
	padding: 0 var(--ck-spacing-small);

	/* Let's keep similar appearance to \`ck-toolbar\`. */
	& > * {
		margin-right: var(--ck-spacing-small);
		margin-top: var(--ck-spacing-small);
		margin-bottom: var(--ck-spacing-small);
	}

	/* Gives counter more breath than buttons. */
	& .ck-balloon-rotator__counter {
		margin-right: var(--ck-spacing-standard);

		/* We need to use smaller margin because of previous button's right margin. */
		margin-left: var(--ck-spacing-small);
	}
}

.ck .ck-balloon-rotator__content {

	/* Disable default annotation shadow inside rotator with fake panels. */
	& .ck.ck-annotation-wrapper {
		box-shadow: none;
	}
}
`],sourceRoot:""}]);const S=y},5380:(f,b,m)=>{m.d(b,{A:()=>S});var v=m(9372),A=m.n(v),x=m(935),y=m.n(x)()(A());y.push([f.id,".ck .ck-fake-panel{position:absolute;z-index:calc(var(--ck-z-panel) - 1)}.ck .ck-fake-panel div{position:absolute}.ck .ck-fake-panel div:first-child{z-index:2}.ck .ck-fake-panel div:nth-child(2){z-index:1}:root{--ck-balloon-fake-panel-offset-horizontal:6px;--ck-balloon-fake-panel-offset-vertical:6px}.ck .ck-fake-panel div{background:var(--ck-color-panel-background);border:1px solid var(--ck-color-panel-border);border-radius:var(--ck-border-radius);box-shadow:var(--ck-drop-shadow),0 0;height:100%;min-height:15px;width:100%}.ck .ck-fake-panel div:first-child{margin-left:var(--ck-balloon-fake-panel-offset-horizontal);margin-top:var(--ck-balloon-fake-panel-offset-vertical)}.ck .ck-fake-panel div:nth-child(2){margin-left:calc(var(--ck-balloon-fake-panel-offset-horizontal)*2);margin-top:calc(var(--ck-balloon-fake-panel-offset-vertical)*2)}.ck .ck-fake-panel div:nth-child(3){margin-left:calc(var(--ck-balloon-fake-panel-offset-horizontal)*3);margin-top:calc(var(--ck-balloon-fake-panel-offset-vertical)*3)}.ck .ck-balloon-panel_arrow_s+.ck-fake-panel,.ck .ck-balloon-panel_arrow_se+.ck-fake-panel,.ck .ck-balloon-panel_arrow_sw+.ck-fake-panel{--ck-balloon-fake-panel-offset-vertical:-6px}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/panel/fakepanel.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/panel/fakepanel.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_shadow.css"],names:[],mappings:"AAKA,mBACC,iBAAkB,CAGlB,mCACD,CAEA,uBACC,iBACD,CAEA,mCACC,SACD,CAEA,oCACC,SACD,CCfA,MACC,6CAA8C,CAC9C,2CACD,CAGA,uBAKC,2CAA4C,CAC5C,6CAA8C,CAC9C,qCAAsC,CCXtC,oCAA8B,CDc9B,WAAY,CAPZ,eAAgB,CAMhB,UAED,CAEA,mCACC,0DAA2D,CAC3D,uDACD,CAEA,oCACC,kEAAqE,CACrE,+DACD,CACA,oCACC,kEAAqE,CACrE,+DACD,CAGA,yIAGC,4CACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck .ck-fake-panel {
	position: absolute;

	/* Fake panels should be placed under main balloon content. */
	z-index: calc(var(--ck-z-panel) - 1);
}

.ck .ck-fake-panel div {
	position: absolute;
}

.ck .ck-fake-panel div:nth-child( 1 ) {
	z-index: 2;
}

.ck .ck-fake-panel div:nth-child( 2 ) {
	z-index: 1;
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_shadow.css";

:root {
	--ck-balloon-fake-panel-offset-horizontal: 6px;
	--ck-balloon-fake-panel-offset-vertical: 6px;
}

/* Let's use \`.ck-balloon-panel\` appearance. See: balloonpanel.css. */
.ck .ck-fake-panel div {
	@mixin ck-drop-shadow;

	min-height: 15px;

	background: var(--ck-color-panel-background);
	border: 1px solid var(--ck-color-panel-border);
	border-radius: var(--ck-border-radius);

	width: 100%;
	height: 100%;
}

.ck .ck-fake-panel div:nth-child( 1 ) {
	margin-left: var(--ck-balloon-fake-panel-offset-horizontal);
	margin-top: var(--ck-balloon-fake-panel-offset-vertical);
}

.ck .ck-fake-panel div:nth-child( 2 ) {
	margin-left: calc(var(--ck-balloon-fake-panel-offset-horizontal) * 2);
	margin-top: calc(var(--ck-balloon-fake-panel-offset-vertical) * 2);
}
.ck .ck-fake-panel div:nth-child( 3 ) {
	margin-left: calc(var(--ck-balloon-fake-panel-offset-horizontal) * 3);
	margin-top: calc(var(--ck-balloon-fake-panel-offset-vertical) * 3);
}

/* If balloon is positioned above element, we need to move fake panel to the top. */
.ck .ck-balloon-panel_arrow_s + .ck-fake-panel,
.ck .ck-balloon-panel_arrow_se + .ck-fake-panel,
.ck .ck-balloon-panel_arrow_sw + .ck-fake-panel {
	--ck-balloon-fake-panel-offset-vertical: -6px;
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A helper to combine multiple shadows.
 */
@define-mixin ck-box-shadow $shadowA, $shadowB: 0 0 {
	box-shadow: $shadowA, $shadowB;
}

/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
@define-mixin ck-drop-shadow {
	@mixin ck-box-shadow var(--ck-drop-shadow);
}
`],sourceRoot:""}]);const S=y},8298:(f,b,m)=>{m.d(b,{A:()=>S});var v=m(9372),A=m.n(v),x=m(935),y=m.n(x)()(A());y.push([f.id,".ck.ck-sticky-panel .ck-sticky-panel__content_sticky{position:fixed;top:0;z-index:var(--ck-z-panel)}.ck.ck-sticky-panel .ck-sticky-panel__content_sticky_bottom-limit{position:absolute;top:auto}.ck.ck-sticky-panel .ck-sticky-panel__content_sticky{border-top-left-radius:0;border-top-right-radius:0;border-width:0 1px 1px;box-shadow:var(--ck-drop-shadow),0 0}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/panel/stickypanel.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/panel/stickypanel.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_shadow.css"],names:[],mappings:"AAMC,qDAEC,cAAe,CACf,KAAM,CAFN,yBAGD,CAEA,kEAEC,iBAAkB,CADlB,QAED,CCPA,qDAIC,wBAAyB,CACzB,yBAA0B,CAF1B,sBAAuB,CCFxB,oCDKA",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-sticky-panel {
	& .ck-sticky-panel__content_sticky {
		z-index: var(--ck-z-panel); /* #315 */
		position: fixed;
		top: 0;
	}

	& .ck-sticky-panel__content_sticky_bottom-limit {
		top: auto;
		position: absolute;
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_shadow.css";

.ck.ck-sticky-panel {
	& .ck-sticky-panel__content_sticky {
		@mixin ck-drop-shadow;

		border-width: 0 1px 1px;
		border-top-left-radius: 0;
		border-top-right-radius: 0;
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A helper to combine multiple shadows.
 */
@define-mixin ck-box-shadow $shadowA, $shadowB: 0 0 {
	box-shadow: $shadowA, $shadowB;
}

/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
@define-mixin ck-drop-shadow {
	@mixin ck-box-shadow var(--ck-drop-shadow);
}
`],sourceRoot:""}]);const S=y},2722:(f,b,m)=>{m.d(b,{A:()=>S});var v=m(9372),A=m.n(v),x=m(935),y=m.n(x)()(A());y.push([f.id,'.ck-vertical-form .ck-button:after{bottom:-1px;content:"";position:absolute;right:-1px;top:-1px;width:0;z-index:1}.ck-vertical-form .ck-button:focus:after{display:none}@media screen and (max-width:600px){.ck.ck-responsive-form .ck-button:after{bottom:-1px;content:"";position:absolute;right:-1px;top:-1px;width:0;z-index:1}.ck.ck-responsive-form .ck-button:focus:after{display:none}}.ck-vertical-form>.ck-button:nth-last-child(2):after{border-right:1px solid var(--ck-color-base-border)}.ck.ck-responsive-form{padding:var(--ck-spacing-large)}.ck.ck-responsive-form:focus{outline:none}[dir=ltr] .ck.ck-responsive-form>:not(:first-child),[dir=rtl] .ck.ck-responsive-form>:not(:last-child){margin-left:var(--ck-spacing-standard)}@media screen and (max-width:600px){.ck.ck-responsive-form{padding:0;width:calc(var(--ck-input-width)*.8)}.ck.ck-responsive-form .ck-labeled-field-view{margin:var(--ck-spacing-large) var(--ck-spacing-large) 0}.ck.ck-responsive-form .ck-labeled-field-view .ck-input-number,.ck.ck-responsive-form .ck-labeled-field-view .ck-input-text{min-width:0;width:100%}.ck.ck-responsive-form .ck-labeled-field-view .ck-labeled-field-view__error{white-space:normal}.ck.ck-responsive-form>.ck-button:nth-last-child(2):after{border-right:1px solid var(--ck-color-base-border)}.ck.ck-responsive-form>.ck-button:last-child,.ck.ck-responsive-form>.ck-button:nth-last-child(2){border-radius:0;margin-top:var(--ck-spacing-large);padding:var(--ck-spacing-standard)}.ck.ck-responsive-form>.ck-button:last-child:not(:focus),.ck.ck-responsive-form>.ck-button:nth-last-child(2):not(:focus){border-top:1px solid var(--ck-color-base-border)}[dir=ltr] .ck.ck-responsive-form>.ck-button:last-child,[dir=ltr] .ck.ck-responsive-form>.ck-button:nth-last-child(2),[dir=rtl] .ck.ck-responsive-form>.ck-button:last-child,[dir=rtl] .ck.ck-responsive-form>.ck-button:nth-last-child(2){margin-left:0}[dir=rtl] .ck.ck-responsive-form>.ck-button:last-child:last-of-type,[dir=rtl] .ck.ck-responsive-form>.ck-button:nth-last-child(2):last-of-type{border-right:1px solid var(--ck-color-base-border)}}',"",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/responsive-form/responsiveform.css","webpack://./../ckeditor5-ui/theme/mixins/_rwd.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/responsive-form/responsiveform.css"],names:[],mappings:"AAQC,mCAMC,WAAY,CALZ,UAAW,CAEX,iBAAkB,CAClB,UAAW,CACX,QAAS,CAHT,OAAQ,CAKR,SACD,CAEA,yCACC,YACD,CCdA,oCDoBE,wCAMC,WAAY,CALZ,UAAW,CAEX,iBAAkB,CAClB,UAAW,CACX,QAAS,CAHT,OAAQ,CAKR,SACD,CAEA,8CACC,YACD,CC9BF,CCAD,qDACC,kDACD,CAEA,uBACC,+BAoED,CAlEC,6BAEC,YACD,CASC,uGACC,sCACD,CDvBD,oCCMD,uBAqBE,SAAU,CACV,oCA+CF,CA7CE,8CACC,wDAYD,CAVC,4HAEC,WAAY,CACZ,UACD,CAGA,4EACC,kBACD,CAKA,0DACC,kDACD,CAGD,iGAIC,eAAgB,CADhB,kCAAmC,CADnC,kCAmBD,CAfC,yHACC,gDACD,CARD,0OAeE,aAMF,CAJE,+IACC,kDACD,CDrEH",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_rwd.css";

.ck-vertical-form .ck-button {
	&::after {
		content: "";
		width: 0;
		position: absolute;
		right: -1px;
		top: -1px;
		bottom: -1px;
		z-index: 1;
	}

	&:focus::after {
		display: none;
	}
}

.ck.ck-responsive-form {
	@mixin ck-media-phone {
		& .ck-button {
			&::after {
				content: "";
				width: 0;
				position: absolute;
				right: -1px;
				top: -1px;
				bottom: -1px;
				z-index: 1;
			}

			&:focus::after {
				display: none;
			}
		}
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@define-mixin ck-media-phone {
	@media screen and (max-width: 600px) {
		@mixin-content;
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_rwd.css";
@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

.ck-vertical-form > .ck-button:nth-last-child(2)::after {
	border-right: 1px solid var(--ck-color-base-border);
}

.ck.ck-responsive-form {
	padding: var(--ck-spacing-large);

	&:focus {
		/* See: https://github.com/ckeditor/ckeditor5/issues/4773 */
		outline: none;
	}

	@mixin ck-dir ltr {
		& > :not(:first-child) {
			margin-left: var(--ck-spacing-standard);
		}
	}

	@mixin ck-dir rtl {
		& > :not(:last-child) {
			margin-left: var(--ck-spacing-standard);
		}
	}

	@mixin ck-media-phone {
		padding: 0;
		width: calc(.8 * var(--ck-input-width));

		& .ck-labeled-field-view {
			margin: var(--ck-spacing-large) var(--ck-spacing-large) 0;

			& .ck-input-text,
			& .ck-input-number {
				min-width: 0;
				width: 100%;
			}

			/* Let the long error messages wrap in the narrow form. */
			& .ck-labeled-field-view__error {
				white-space: normal;
			}
		}

		/* Styles for two last buttons in the form (save&cancel, edit&unlink, etc.). */
		& > .ck-button:nth-last-child(2) {
			&::after {
				border-right: 1px solid var(--ck-color-base-border);
			}
		}

		& > .ck-button:nth-last-child(1),
		& > .ck-button:nth-last-child(2) {
			padding: var(--ck-spacing-standard);
			margin-top: var(--ck-spacing-large);
			border-radius: 0;

			&:not(:focus) {
				border-top: 1px solid var(--ck-color-base-border);
			}

			@mixin ck-dir ltr {
				margin-left: 0;
			}

			@mixin ck-dir rtl {
				margin-left: 0;

				&:last-of-type {
					border-right: 1px solid var(--ck-color-base-border);
				}
			}
		}
	}
}
`],sourceRoot:""}]);const S=y},8107:(f,b,m)=>{m.d(b,{A:()=>S});var v=m(9372),A=m.n(v),x=m(935),y=m.n(x)()(A());y.push([f.id,".ck.ck-search>.ck-labeled-field-view>.ck-labeled-field-view__input-wrapper>.ck-icon{position:absolute;top:50%;transform:translateY(-50%)}[dir=ltr] .ck.ck-search>.ck-labeled-field-view>.ck-labeled-field-view__input-wrapper>.ck-icon{left:var(--ck-spacing-medium)}[dir=rtl] .ck.ck-search>.ck-labeled-field-view>.ck-labeled-field-view__input-wrapper>.ck-icon{right:var(--ck-spacing-medium)}.ck.ck-search>.ck-labeled-field-view .ck-search__reset{position:absolute;top:50%;transform:translateY(-50%)}.ck.ck-search>.ck-search__results>.ck-search__info>span:first-child{display:block}.ck.ck-search>.ck-search__results>.ck-search__info:not(.ck-hidden)~*{display:none}:root{--ck-search-field-view-horizontal-spacing:calc(var(--ck-icon-size) + var(--ck-spacing-medium))}.ck.ck-search>.ck-labeled-field-view .ck-input{width:100%}.ck.ck-search>.ck-labeled-field-view.ck-search__query_with-icon{--ck-labeled-field-label-default-position-x:var(--ck-search-field-view-horizontal-spacing)}.ck.ck-search>.ck-labeled-field-view.ck-search__query_with-icon>.ck-labeled-field-view__input-wrapper>.ck-icon{opacity:.5;pointer-events:none}.ck.ck-search>.ck-labeled-field-view.ck-search__query_with-icon .ck-input{width:100%}[dir=ltr] .ck.ck-search>.ck-labeled-field-view.ck-search__query_with-icon .ck-input,[dir=rtl] .ck.ck-search>.ck-labeled-field-view.ck-search__query_with-icon .ck-input:not(.ck-input-text_empty){padding-left:var(--ck-search-field-view-horizontal-spacing)}.ck.ck-search>.ck-labeled-field-view.ck-search__query_with-reset{--ck-labeled-field-empty-unfocused-max-width:100% - 2 * var(--ck-search-field-view-horizontal-spacing)}.ck.ck-search>.ck-labeled-field-view.ck-search__query_with-reset.ck-labeled-field-view_empty{--ck-labeled-field-empty-unfocused-max-width:100% - var(--ck-search-field-view-horizontal-spacing) - var(--ck-spacing-medium)}.ck.ck-search>.ck-labeled-field-view.ck-search__query_with-reset .ck-search__reset{background:none;min-height:auto;min-width:auto;opacity:.5;padding:0}[dir=ltr] .ck.ck-search>.ck-labeled-field-view.ck-search__query_with-reset .ck-search__reset{right:var(--ck-spacing-medium)}[dir=rtl] .ck.ck-search>.ck-labeled-field-view.ck-search__query_with-reset .ck-search__reset{left:var(--ck-spacing-medium)}.ck.ck-search>.ck-labeled-field-view.ck-search__query_with-reset .ck-search__reset:hover{opacity:1}.ck.ck-search>.ck-labeled-field-view.ck-search__query_with-reset .ck-input{width:100%}[dir=ltr] .ck.ck-search>.ck-labeled-field-view.ck-search__query_with-reset .ck-input:not(.ck-input-text_empty),[dir=rtl] .ck.ck-search>.ck-labeled-field-view.ck-search__query_with-reset .ck-input{padding-right:var(--ck-search-field-view-horizontal-spacing)}.ck.ck-search>.ck-search__results{min-width:100%}.ck.ck-search>.ck-search__results>.ck-search__info{padding:var(--ck-spacing-medium) var(--ck-spacing-large);width:100%}.ck.ck-search>.ck-search__results>.ck-search__info *{white-space:normal}.ck.ck-search>.ck-search__results>.ck-search__info>span:first-child{font-weight:700}.ck.ck-search>.ck-search__results>.ck-search__info>span:last-child{margin-top:var(--ck-spacing-medium)}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/search/search.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/search/search.css"],names:[],mappings:"AASE,oFACC,iBAAkB,CAClB,OAAQ,CACR,0BASD,CAZA,8FAME,6BAMF,CAZA,8FAUE,8BAEF,CAEA,uDACC,iBAAkB,CAClB,OAAQ,CACR,0BACD,CAKC,oEACC,aACD,CAGA,qEACC,YACD,CChCH,MACC,8FACD,CAIE,+CACC,UACD,CAEA,gEACC,0FAoBD,CAlBC,+GACC,UAAW,CACX,mBACD,CAEA,0EACC,UAWD,CAJE,kMACC,2DACD,CAKH,iEACC,sGAwCD,CAtCC,6FACC,6HACD,CAEA,mFAIC,eAAgB,CAFhB,eAAgB,CADhB,cAAe,CAIf,UAAW,CACX,SAaD,CAnBA,6FASE,8BAUF,CAnBA,6FAaE,6BAMF,CAHC,yFACC,SACD,CAGD,2EACC,UAWD,CAZA,oMAUE,4DAEF,CAIF,kCACC,cAkBD,CAhBC,mDAEC,wDAAyD,CADzD,UAcD,CAXC,qDACC,kBACD,CAEA,oEACC,eACD,CAEA,mEACC,mCACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

.ck.ck-search {
	& > .ck-labeled-field-view {
		& > .ck-labeled-field-view__input-wrapper > .ck-icon {
			position: absolute;
			top: 50%;
			transform: translateY(-50%);

			@mixin ck-dir ltr {
				left: var(--ck-spacing-medium);
			}

			@mixin ck-dir rtl {
				right: var(--ck-spacing-medium);
			}
		}

		& .ck-search__reset {
			position: absolute;
			top: 50%;
			transform: translateY(-50%);
		}
	}

	& > .ck-search__results {
		& > .ck-search__info {
			& > span:first-child {
				display: block;
			}

			/* Hide the filtered view when nothing was found */
			&:not(.ck-hidden) ~ * {
				display: none;
			}
		}
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

:root {
	--ck-search-field-view-horizontal-spacing: calc(var(--ck-icon-size) + var(--ck-spacing-medium));
}

.ck.ck-search {
	& > .ck-labeled-field-view {
		& .ck-input {
			width: 100%;
		}

		&.ck-search__query_with-icon {
			--ck-labeled-field-label-default-position-x: var(--ck-search-field-view-horizontal-spacing);

			& > .ck-labeled-field-view__input-wrapper > .ck-icon {
				opacity: .5;
				pointer-events: none;
			}

			& .ck-input {
				width: 100%;

				@mixin ck-dir ltr {
					padding-left: var(--ck-search-field-view-horizontal-spacing);
				}

				@mixin ck-dir rtl {
					&:not(.ck-input-text_empty) {
						padding-left: var(--ck-search-field-view-horizontal-spacing);
					}
				}
			}
		}

		&.ck-search__query_with-reset {
			--ck-labeled-field-empty-unfocused-max-width: 100% - 2 * var(--ck-search-field-view-horizontal-spacing);

			&.ck-labeled-field-view_empty {
				--ck-labeled-field-empty-unfocused-max-width: 100% - var(--ck-search-field-view-horizontal-spacing) - var(--ck-spacing-medium);
			}

			& .ck-search__reset {
				min-width: auto;
				min-height: auto;

				background: none;
				opacity: .5;
				padding: 0;

				@mixin ck-dir ltr {
					right: var(--ck-spacing-medium);
				}

				@mixin ck-dir rtl {
					left: var(--ck-spacing-medium);
				}

				&:hover {
					opacity: 1;
				}
			}

			& .ck-input {
				width: 100%;

				@mixin ck-dir ltr {
					&:not(.ck-input-text_empty) {
						padding-right: var(--ck-search-field-view-horizontal-spacing);
					}
				}

				@mixin ck-dir rtl {
					padding-right: var(--ck-search-field-view-horizontal-spacing);
				}
			}
		}
	}

	& > .ck-search__results {
		min-width: 100%;

		& > .ck-search__info {
			width: 100%;
			padding: var(--ck-spacing-medium) var(--ck-spacing-large);

			& * {
				white-space: normal;
			}

			& > span:first-child {
				font-weight: bold;
			}

			& > span:last-child {
				margin-top: var(--ck-spacing-medium);
			}
		}
	}
}

`],sourceRoot:""}]);const S=y},109:(f,b,m)=>{m.d(b,{A:()=>S});var v=m(9372),A=m.n(v),x=m(935),y=m.n(x)()(A());y.push([f.id,".ck.ck-spinner-container{display:block;position:relative}.ck.ck-spinner{left:0;margin:0 auto;position:absolute;right:0;top:50%;transform:translateY(-50%);z-index:1}:root{--ck-toolbar-spinner-size:18px}.ck.ck-spinner-container{animation:rotate 1.5s linear infinite;height:var(--ck-toolbar-spinner-size);width:var(--ck-toolbar-spinner-size)}@media (prefers-reduced-motion:reduce){.ck.ck-spinner-container{animation-duration:3s}}.ck.ck-spinner{border:2px solid var(--ck-color-text);border-radius:50%;border-top:2px solid transparent;height:var(--ck-toolbar-spinner-size);width:var(--ck-toolbar-spinner-size)}@keyframes rotate{to{transform:rotate(1turn)}}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/spinner/spinner.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/spinner/spinner.css"],names:[],mappings:"AASA,yBACC,aAAc,CACd,iBACD,CAEA,eAGC,MAAO,CAEP,aAAc,CAJd,iBAAkB,CAGlB,OAAQ,CAFR,OAAQ,CAIR,0BAA2B,CAC3B,SACD,CCjBA,MACC,8BACD,CAEA,yBAGC,qCAAsC,CADtC,qCAAsC,CADtC,oCAOD,CAHC,uCALD,yBAME,qBAEF,CADC,CAGD,eAKC,qCAA6B,CAF7B,iBAAkB,CAElB,gCAA6B,CAH7B,qCAAsC,CADtC,oCAKD,CAEA,kBACC,GACC,uBACD,CACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-toolbar-spinner-size: 18px;
}

.ck.ck-spinner-container {
	display: block;
	position: relative;
}

.ck.ck-spinner {
	position: absolute;
	top: 50%;
	left: 0;
	right: 0;
	margin: 0 auto;
	transform: translateY(-50%);
	z-index: 1;
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-toolbar-spinner-size: 18px;
}

.ck.ck-spinner-container {
	width: var(--ck-toolbar-spinner-size);
	height: var(--ck-toolbar-spinner-size);
	animation: 1.5s infinite rotate linear;

	@media (prefers-reduced-motion: reduce) {
		animation-duration: 3s;
	}
}

.ck.ck-spinner {
	width: var(--ck-toolbar-spinner-size);
	height: var(--ck-toolbar-spinner-size);
	border-radius: 50%;
	border: 2px solid var(--ck-color-text);
	border-top-color: transparent;
}

@keyframes rotate {
	to {
		transform: rotate(360deg)
	}
}
`],sourceRoot:""}]);const S=y},1671:(f,b,m)=>{m.d(b,{A:()=>S});var v=m(9372),A=m.n(v),x=m(935),y=m.n(x)()(A());y.push([f.id,".ck-textarea{overflow-x:hidden}","",{version:3,sources:["webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/textarea/textarea.css"],names:[],mappings:"AASA,aACC,iBACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/*
 * This fixes a problem in Firefox when the initial height of the complement does not match the number of rows.
 * This bug is especially visible when rows=1.
 */
.ck-textarea {
	overflow-x: hidden
}
`],sourceRoot:""}]);const S=y},2710:(f,b,m)=>{m.d(b,{A:()=>S});var v=m(9372),A=m.n(v),x=m(935),y=m.n(x)()(A());y.push([f.id,".ck.ck-block-toolbar-button{position:absolute;z-index:var(--ck-z-default)}:root{--ck-color-block-toolbar-button:var(--ck-color-text);--ck-block-toolbar-button-size:var(--ck-font-size-normal)}.ck.ck-block-toolbar-button{color:var(--ck-color-block-toolbar-button);font-size:var(--ck-block-toolbar-size)}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/toolbar/blocktoolbar.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/toolbar/blocktoolbar.css"],names:[],mappings:"AAKA,4BACC,iBAAkB,CAClB,2BACD,CCHA,MACC,oDAAqD,CACrD,yDACD,CAEA,4BACC,0CAA2C,CAC3C,sCACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-block-toolbar-button {
	position: absolute;
	z-index: var(--ck-z-default);
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-color-block-toolbar-button: var(--ck-color-text);
	--ck-block-toolbar-button-size: var(--ck-font-size-normal);
}

.ck.ck-block-toolbar-button {
	color: var(--ck-color-block-toolbar-button);
	font-size: var(--ck-block-toolbar-size);
}
`],sourceRoot:""}]);const S=y},9677:(f,b,m)=>{m.d(b,{A:()=>S});var v=m(9372),A=m.n(v),x=m(935),y=m.n(x)()(A());y.push([f.id,".ck.ck-toolbar{align-items:center;display:flex;flex-flow:row nowrap;-moz-user-select:none;-webkit-user-select:none;-ms-user-select:none;user-select:none}.ck.ck-toolbar>.ck-toolbar__items{align-items:center;display:flex;flex-flow:row wrap;flex-grow:1}.ck.ck-toolbar .ck.ck-toolbar__separator{display:inline-block}.ck.ck-toolbar .ck.ck-toolbar__separator:first-child,.ck.ck-toolbar .ck.ck-toolbar__separator:last-child{display:none}.ck.ck-toolbar .ck-toolbar__line-break{flex-basis:100%}.ck.ck-toolbar.ck-toolbar_grouping>.ck-toolbar__items{flex-wrap:nowrap}.ck.ck-toolbar.ck-toolbar_vertical>.ck-toolbar__items{flex-direction:column}.ck.ck-toolbar.ck-toolbar_floating>.ck-toolbar__items{flex-wrap:nowrap}.ck.ck-toolbar>.ck.ck-toolbar__grouped-dropdown>.ck-dropdown__button .ck-dropdown__arrow{display:none}.ck.ck-toolbar{border-radius:0}.ck-rounded-corners .ck.ck-toolbar,.ck.ck-toolbar.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-toolbar{background:var(--ck-color-toolbar-background);border:1px solid var(--ck-color-toolbar-border);padding:0 var(--ck-spacing-small)}.ck.ck-toolbar .ck.ck-toolbar__separator{align-self:stretch;background:var(--ck-color-toolbar-border);margin-bottom:var(--ck-spacing-small);margin-top:var(--ck-spacing-small);min-width:1px;width:1px}.ck.ck-toolbar .ck-toolbar__line-break{height:0}.ck.ck-toolbar>.ck-toolbar__items>:not(.ck-toolbar__line-break){margin-right:var(--ck-spacing-small)}.ck.ck-toolbar>.ck-toolbar__items:empty+.ck.ck-toolbar__separator{display:none}.ck.ck-toolbar>.ck-toolbar__items>:not(.ck-toolbar__line-break),.ck.ck-toolbar>.ck.ck-toolbar__grouped-dropdown{margin-bottom:var(--ck-spacing-small);margin-top:var(--ck-spacing-small)}.ck.ck-toolbar.ck-toolbar_vertical{padding:0}.ck.ck-toolbar.ck-toolbar_vertical>.ck-toolbar__items>.ck{border-radius:0;margin:0;width:100%}.ck.ck-toolbar.ck-toolbar_compact{padding:0}.ck.ck-toolbar.ck-toolbar_compact>.ck-toolbar__items>*{margin:0}.ck.ck-toolbar.ck-toolbar_compact>.ck-toolbar__items>:not(:first-child):not(:last-child){border-radius:0}.ck.ck-toolbar>.ck.ck-toolbar__grouped-dropdown>.ck.ck-button.ck-dropdown__button{padding-left:var(--ck-spacing-tiny)}.ck.ck-toolbar .ck-toolbar__nested-toolbar-dropdown>.ck-dropdown__panel{min-width:auto}.ck.ck-toolbar .ck-toolbar__nested-toolbar-dropdown>.ck-button>.ck-button__label{max-width:7em;width:auto}.ck.ck-toolbar:focus{outline:none}.ck-toolbar-container .ck.ck-toolbar{border:0}.ck.ck-toolbar[dir=rtl]>.ck-toolbar__items>.ck,[dir=rtl] .ck.ck-toolbar>.ck-toolbar__items>.ck{margin-right:0}.ck.ck-toolbar[dir=rtl]:not(.ck-toolbar_compact)>.ck-toolbar__items>.ck,[dir=rtl] .ck.ck-toolbar:not(.ck-toolbar_compact)>.ck-toolbar__items>.ck{margin-left:var(--ck-spacing-small)}.ck.ck-toolbar[dir=rtl]>.ck-toolbar__items>.ck:last-child,[dir=rtl] .ck.ck-toolbar>.ck-toolbar__items>.ck:last-child{margin-left:0}.ck.ck-toolbar.ck-toolbar_compact[dir=rtl]>.ck-toolbar__items>.ck:first-child,[dir=rtl] .ck.ck-toolbar.ck-toolbar_compact>.ck-toolbar__items>.ck:first-child{border-bottom-left-radius:0;border-top-left-radius:0}.ck.ck-toolbar.ck-toolbar_compact[dir=rtl]>.ck-toolbar__items>.ck:last-child,[dir=rtl] .ck.ck-toolbar.ck-toolbar_compact>.ck-toolbar__items>.ck:last-child{border-bottom-right-radius:0;border-top-right-radius:0}.ck.ck-toolbar.ck-toolbar_grouping[dir=rtl]>.ck-toolbar__items:not(:empty):not(:only-child),.ck.ck-toolbar[dir=rtl]>.ck.ck-toolbar__separator,[dir=rtl] .ck.ck-toolbar.ck-toolbar_grouping>.ck-toolbar__items:not(:empty):not(:only-child),[dir=rtl] .ck.ck-toolbar>.ck.ck-toolbar__separator{margin-left:var(--ck-spacing-small)}.ck.ck-toolbar[dir=ltr]>.ck-toolbar__items>.ck:last-child,[dir=ltr] .ck.ck-toolbar>.ck-toolbar__items>.ck:last-child{margin-right:0}.ck.ck-toolbar.ck-toolbar_compact[dir=ltr]>.ck-toolbar__items>.ck:first-child,[dir=ltr] .ck.ck-toolbar.ck-toolbar_compact>.ck-toolbar__items>.ck:first-child{border-bottom-right-radius:0;border-top-right-radius:0}.ck.ck-toolbar.ck-toolbar_compact[dir=ltr]>.ck-toolbar__items>.ck:last-child,[dir=ltr] .ck.ck-toolbar.ck-toolbar_compact>.ck-toolbar__items>.ck:last-child{border-bottom-left-radius:0;border-top-left-radius:0}.ck.ck-toolbar.ck-toolbar_grouping[dir=ltr]>.ck-toolbar__items:not(:empty):not(:only-child),.ck.ck-toolbar[dir=ltr]>.ck.ck-toolbar__separator,[dir=ltr] .ck.ck-toolbar.ck-toolbar_grouping>.ck-toolbar__items:not(:empty):not(:only-child),[dir=ltr] .ck.ck-toolbar>.ck.ck-toolbar__separator{margin-right:var(--ck-spacing-small)}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/toolbar/toolbar.css","webpack://./../ckeditor5-ui/theme/mixins/_unselectable.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/toolbar/toolbar.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css"],names:[],mappings:"AAOA,eAKC,kBAAmB,CAFnB,YAAa,CACb,oBAAqB,CCFrB,qBAAsB,CACtB,wBAAyB,CACzB,oBAAqB,CACrB,gBD6CD,CA3CC,kCAGC,kBAAmB,CAFnB,YAAa,CACb,kBAAmB,CAEnB,WAED,CAEA,yCACC,oBAWD,CAJC,yGAEC,YACD,CAGD,uCACC,eACD,CAEA,sDACC,gBACD,CAEA,sDACC,qBACD,CAEA,sDACC,gBACD,CAGC,yFACC,YACD,CE/CF,eCGC,eDwGD,CA3GA,qECOE,qCDoGF,CA3GA,eAGC,6CAA8C,CAE9C,+CAAgD,CADhD,iCAuGD,CApGC,yCACC,kBAAmB,CAGnB,yCAA0C,CAO1C,qCAAsC,CADtC,kCAAmC,CAPnC,aAAc,CADd,SAUD,CAEA,uCACC,QACD,CAGC,gEAEC,oCACD,CAIA,kEACC,YACD,CAGD,gHAIC,qCAAsC,CADtC,kCAED,CAEA,mCAEC,SAaD,CAVC,0DAQC,eAAgB,CAHhB,QAAS,CAHT,UAOD,CAGD,kCAEC,SAWD,CATC,uDAEC,QAMD,CAHC,yFACC,eACD,CASD,kFACC,mCACD,CAMA,wEACC,cACD,CAEA,iFACC,aAAc,CACd,UACD,CAGD,qBACC,YACD,CAtGD,qCAyGE,QAEF,CAYC,+FACC,cACD,CAEA,iJAEC,mCACD,CAEA,qHACC,aACD,CAIC,6JAEC,2BAA4B,CAD5B,wBAED,CAGA,2JAEC,4BAA6B,CAD7B,yBAED,CASD,8RACC,mCACD,CAWA,qHACC,cACD,CAIC,6JAEC,4BAA6B,CAD7B,yBAED,CAGA,2JAEC,2BAA4B,CAD5B,wBAED,CASD,8RACC,oCACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../mixins/_unselectable.css";

.ck.ck-toolbar {
	@mixin ck-unselectable;

	display: flex;
	flex-flow: row nowrap;
	align-items: center;

	& > .ck-toolbar__items {
		display: flex;
		flex-flow: row wrap;
		align-items: center;
		flex-grow: 1;

	}

	& .ck.ck-toolbar__separator {
		display: inline-block;

		/*
		 * A leading or trailing separator makes no sense (separates from nothing on one side).
		 * For instance, it can happen when toolbar items (also separators) are getting grouped one by one and
		 * moved to another toolbar in the dropdown.
		 */
		&:first-child,
		&:last-child {
			display: none;
		}
	}

	& .ck-toolbar__line-break {
		flex-basis: 100%;
	}

	&.ck-toolbar_grouping > .ck-toolbar__items {
		flex-wrap: nowrap;
	}

	&.ck-toolbar_vertical > .ck-toolbar__items {
		flex-direction: column;
	}

	&.ck-toolbar_floating > .ck-toolbar__items {
		flex-wrap: nowrap;
	}

	& > .ck.ck-toolbar__grouped-dropdown {
		& > .ck-dropdown__button .ck-dropdown__arrow {
			display: none;
		}
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Makes element unselectable.
 */
@define-mixin ck-unselectable {
	-moz-user-select: none;
	-webkit-user-select: none;
	-ms-user-select: none;
	user-select: none
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";
@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

.ck.ck-toolbar {
	@mixin ck-rounded-corners;

	background: var(--ck-color-toolbar-background);
	padding: 0 var(--ck-spacing-small);
	border: 1px solid var(--ck-color-toolbar-border);

	& .ck.ck-toolbar__separator {
		align-self: stretch;
		width: 1px;
		min-width: 1px;
		background: var(--ck-color-toolbar-border);

		/*
		 * These margins make the separators look better in balloon toolbars (when aligned with the "tip").
		 * See https://github.com/ckeditor/ckeditor5/issues/7493.
		 */
		margin-top: var(--ck-spacing-small);
		margin-bottom: var(--ck-spacing-small);
	}

	& .ck-toolbar__line-break {
		height: 0;
	}

	& > .ck-toolbar__items {
		& > *:not(.ck-toolbar__line-break) {
			/* (#11) Separate toolbar items. */
			margin-right: var(--ck-spacing-small);
		}

		/* Don't display a separator after an empty items container, for instance,
		when all items were grouped */
		&:empty + .ck.ck-toolbar__separator {
			display: none;
		}
	}

	& > .ck-toolbar__items > *:not(.ck-toolbar__line-break),
	& > .ck.ck-toolbar__grouped-dropdown {
		/* Make sure items wrapped to the next line have v-spacing */
		margin-top: var(--ck-spacing-small);
		margin-bottom: var(--ck-spacing-small);
	}

	&.ck-toolbar_vertical {
		/* Items in a vertical toolbar span the entire width. */
		padding: 0;

		/* Specificity matters here. See https://github.com/ckeditor/ckeditor5-theme-lark/issues/168. */
		& > .ck-toolbar__items > .ck {
			/* Items in a vertical toolbar should span the horizontal space. */
			width: 100%;

			/* Items in a vertical toolbar should have no margin. */
			margin: 0;

			/* Items in a vertical toolbar span the entire width so rounded corners are pointless. */
			border-radius: 0;
		}
	}

	&.ck-toolbar_compact {
		/* No spacing around items. */
		padding: 0;

		& > .ck-toolbar__items > * {
			/* Compact toolbar items have no spacing between them. */
			margin: 0;

			/* "Middle" children should have no rounded corners. */
			&:not(:first-child):not(:last-child) {
				border-radius: 0;
			}
		}
	}

	& > .ck.ck-toolbar__grouped-dropdown {
		/*
		 * Dropdown button has asymmetric padding to fit the arrow.
		 * This button has no arrow so let's revert that padding back to normal.
		 */
		& > .ck.ck-button.ck-dropdown__button {
			padding-left: var(--ck-spacing-tiny);
		}
	}

	/* A drop-down containing the nested toolbar with configured items. */
	& .ck-toolbar__nested-toolbar-dropdown {
		/* Prevent empty space in the panel when the dropdown label is visible and long but the toolbar has few items. */
		& > .ck-dropdown__panel {
			min-width: auto;
		}

		& > .ck-button > .ck-button__label {
			max-width: 7em;
			width: auto;
		}
	}

	&:focus {
		outline: none;
	}

	@nest .ck-toolbar-container & {
		border: 0;
	}
}

/* stylelint-disable */

/*
 * Styles for RTL toolbars.
 *
 * Note: In some cases (e.g. a decoupled editor), the toolbar has its own "dir"
 * because its parent is not controlled by the editor framework.
 */
[dir="rtl"] .ck.ck-toolbar,
.ck.ck-toolbar[dir="rtl"] {
	& > .ck-toolbar__items > .ck {
		margin-right: 0;
	}

	&:not(.ck-toolbar_compact) > .ck-toolbar__items > .ck {
		/* (#11) Separate toolbar items. */
		margin-left: var(--ck-spacing-small);
	}

	& > .ck-toolbar__items > .ck:last-child {
		margin-left: 0;
	}

	&.ck-toolbar_compact > .ck-toolbar__items > .ck {
		/* No rounded corners on the right side of the first child. */
		&:first-child {
			border-top-left-radius: 0;
			border-bottom-left-radius: 0;
		}

		/* No rounded corners on the left side of the last child. */
		&:last-child {
			border-top-right-radius: 0;
			border-bottom-right-radius: 0;
		}
	}

	/* Separate the the separator form the grouping dropdown when some items are grouped. */
	& > .ck.ck-toolbar__separator {
		margin-left: var(--ck-spacing-small);
	}

	/* Some spacing between the items and the separator before the grouped items dropdown. */
	&.ck-toolbar_grouping > .ck-toolbar__items:not(:empty):not(:only-child) {
		margin-left: var(--ck-spacing-small);
	}
}

/*
 * Styles for LTR toolbars.
 *
 * Note: In some cases (e.g. a decoupled editor), the toolbar has its own "dir"
 * because its parent is not controlled by the editor framework.
 */
[dir="ltr"] .ck.ck-toolbar,
.ck.ck-toolbar[dir="ltr"] {
	& > .ck-toolbar__items > .ck:last-child {
		margin-right: 0;
	}

	&.ck-toolbar_compact > .ck-toolbar__items > .ck {
		/* No rounded corners on the right side of the first child. */
		&:first-child {
			border-top-right-radius: 0;
			border-bottom-right-radius: 0;
		}

		/* No rounded corners on the left side of the last child. */
		&:last-child {
			border-top-left-radius: 0;
			border-bottom-left-radius: 0;
		}
	}

	/* Separate the the separator form the grouping dropdown when some items are grouped. */
	& > .ck.ck-toolbar__separator {
		margin-right: var(--ck-spacing-small);
	}

	/* Some spacing between the items and the separator before the grouped items dropdown. */
	&.ck-toolbar_grouping > .ck-toolbar__items:not(:empty):not(:only-child) {
		margin-right: var(--ck-spacing-small);
	}
}

/* stylelint-enable */
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`],sourceRoot:""}]);const S=y},9205:(f,b,m)=>{m.d(b,{A:()=>S});var v=m(9372),A=m.n(v),x=m(935),y=m.n(x)()(A());y.push([f.id,".ck.ck-balloon-panel.ck-tooltip{-moz-user-select:none;-webkit-user-select:none;-ms-user-select:none;user-select:none;z-index:calc(var(--ck-z-dialog) + 100);--ck-balloon-border-width:0px;--ck-balloon-arrow-offset:0px;--ck-balloon-arrow-half-width:4px;--ck-balloon-arrow-height:4px;--ck-tooltip-text-padding:4px;--ck-color-panel-background:var(--ck-color-tooltip-background);padding:0 var(--ck-spacing-medium)}.ck.ck-balloon-panel.ck-tooltip .ck-tooltip__text{color:var(--ck-color-tooltip-text);font-size:.9em;line-height:1.5}.ck.ck-balloon-panel.ck-tooltip.ck-tooltip_multi-line .ck-tooltip__text{display:inline-block;max-width:200px;padding:var(--ck-tooltip-text-padding) 0;white-space:break-spaces}.ck.ck-balloon-panel.ck-tooltip{box-shadow:none}.ck.ck-balloon-panel.ck-tooltip:before{display:none}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/tooltip/tooltip.css","webpack://./../ckeditor5-ui/theme/mixins/_unselectable.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/tooltip/tooltip.css"],names:[],mappings:"AAOA,gCCEC,qBAAsB,CACtB,wBAAyB,CACzB,oBAAqB,CACrB,gBAAgB,CDFhB,sCAAyC,CEFzC,6BAA8B,CAC9B,6BAA8B,CAC9B,iCAAkC,CAClC,6BAA8B,CAC9B,6BAA8B,CAC9B,8DAA+D,CAE/D,kCFJD,CEMC,kDAGC,kCAAmC,CAFnC,cAAe,CACf,eAED,CAEA,wEAEC,oBAAqB,CAErB,eAAgB,CADhB,wCAAyC,CAFzC,wBAID,CArBD,gCAwBC,eAMD,CAHC,uCACC,YACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../mixins/_unselectable.css";

.ck.ck-balloon-panel.ck-tooltip {
	@mixin ck-unselectable;

	z-index: calc( var(--ck-z-dialog) + 100 );
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Makes element unselectable.
 */
@define-mixin ck-unselectable {
	-moz-user-select: none;
	-webkit-user-select: none;
	-ms-user-select: none;
	user-select: none
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";

.ck.ck-balloon-panel.ck-tooltip {
	--ck-balloon-border-width: 0px;
	--ck-balloon-arrow-offset: 0px;
	--ck-balloon-arrow-half-width: 4px;
	--ck-balloon-arrow-height: 4px;
	--ck-tooltip-text-padding: 4px;
	--ck-color-panel-background: var(--ck-color-tooltip-background);

	padding: 0 var(--ck-spacing-medium);

	& .ck-tooltip__text {
		font-size: .9em;
		line-height: 1.5;
		color: var(--ck-color-tooltip-text);
	}

	&.ck-tooltip_multi-line .ck-tooltip__text {
		white-space: break-spaces;
		display: inline-block;
		padding: var(--ck-tooltip-text-padding) 0;
		max-width: 200px;
	}

	/* Reset balloon panel styles */
	box-shadow: none;

	/* Hide the default shadow of the .ck-balloon-panel tip */
	&::before {
		display: none;
	}
}
`],sourceRoot:""}]);const S=y},7676:(f,b,m)=>{m.d(b,{A:()=>S});var v=m(9372),A=m.n(v),x=m(935),y=m.n(x)()(A());y.push([f.id,".ck-hidden{display:none!important}:root{--ck-z-default:1;--ck-z-panel:calc(var(--ck-z-default) + 999);--ck-z-dialog:9999}.ck-transitions-disabled,.ck-transitions-disabled *{transition:none!important}:root{--ck-powered-by-line-height:10px;--ck-powered-by-padding-vertical:2px;--ck-powered-by-padding-horizontal:4px;--ck-powered-by-text-color:#4f4f4f;--ck-powered-by-border-radius:var(--ck-border-radius);--ck-powered-by-background:#fff;--ck-powered-by-border-color:var(--ck-color-focus-border)}.ck.ck-balloon-panel.ck-powered-by-balloon{--ck-border-radius:var(--ck-powered-by-border-radius);background:var(--ck-powered-by-background);box-shadow:none;min-height:unset;z-index:calc(var(--ck-z-panel) - 1)}.ck.ck-balloon-panel.ck-powered-by-balloon .ck.ck-powered-by{line-height:var(--ck-powered-by-line-height)}.ck.ck-balloon-panel.ck-powered-by-balloon .ck.ck-powered-by a{align-items:center;cursor:pointer;display:flex;filter:grayscale(80%);line-height:var(--ck-powered-by-line-height);opacity:.66;padding:var(--ck-powered-by-padding-vertical) var(--ck-powered-by-padding-horizontal)}.ck.ck-balloon-panel.ck-powered-by-balloon .ck.ck-powered-by .ck-powered-by__label{color:var(--ck-powered-by-text-color);cursor:pointer;font-size:7.5px;font-weight:700;letter-spacing:-.2px;line-height:normal;margin-right:4px;padding-left:2px;text-transform:uppercase}.ck.ck-balloon-panel.ck-powered-by-balloon .ck.ck-powered-by .ck-icon{cursor:pointer;display:block}.ck.ck-balloon-panel.ck-powered-by-balloon .ck.ck-powered-by:hover a{filter:grayscale(0);opacity:1}.ck.ck-balloon-panel.ck-powered-by-balloon[class*=position_inside]{border-color:transparent}.ck.ck-balloon-panel.ck-powered-by-balloon[class*=position_border]{border:var(--ck-focus-ring);border-color:var(--ck-powered-by-border-color)}:root{--ck-color-base-foreground:#fafafa;--ck-color-base-background:#fff;--ck-color-base-border:#ccced1;--ck-color-base-action:#53a336;--ck-color-base-focus:#6cb5f9;--ck-color-base-text:#333;--ck-color-base-active:#2977ff;--ck-color-base-active-focus:#0d65ff;--ck-color-base-error:#db3700;--ck-color-focus-border-coordinates:218,81.8%,56.9%;--ck-color-focus-border:hsl(var(--ck-color-focus-border-coordinates));--ck-color-focus-outer-shadow:#cae1fc;--ck-color-focus-disabled-shadow:rgba(119,186,248,.3);--ck-color-focus-error-shadow:rgba(255,64,31,.3);--ck-color-text:var(--ck-color-base-text);--ck-color-shadow-drop:rgba(0,0,0,.15);--ck-color-shadow-drop-active:rgba(0,0,0,.2);--ck-color-shadow-inner:rgba(0,0,0,.1);--ck-color-button-default-background:transparent;--ck-color-button-default-hover-background:#f0f0f0;--ck-color-button-default-active-background:#f0f0f0;--ck-color-button-default-disabled-background:transparent;--ck-color-button-on-background:#f0f7ff;--ck-color-button-on-hover-background:#dbecff;--ck-color-button-on-active-background:#dbecff;--ck-color-button-on-disabled-background:#f0f2f4;--ck-color-button-on-color:#2977ff;--ck-color-button-action-background:var(--ck-color-base-action);--ck-color-button-action-hover-background:#4d9d30;--ck-color-button-action-active-background:#4d9d30;--ck-color-button-action-disabled-background:#7ec365;--ck-color-button-action-text:var(--ck-color-base-background);--ck-color-button-save:#008a00;--ck-color-button-cancel:#db3700;--ck-color-switch-button-off-background:#939393;--ck-color-switch-button-off-hover-background:#7d7d7d;--ck-color-switch-button-on-background:var(--ck-color-button-action-background);--ck-color-switch-button-on-hover-background:#4d9d30;--ck-color-switch-button-inner-background:var(--ck-color-base-background);--ck-color-switch-button-inner-shadow:rgba(0,0,0,.1);--ck-color-dropdown-panel-background:var(--ck-color-base-background);--ck-color-dropdown-panel-border:var(--ck-color-base-border);--ck-color-dialog-background:var(--ck-custom-background);--ck-color-dialog-form-header-border:var(--ck-custom-border);--ck-color-input-background:var(--ck-color-base-background);--ck-color-input-border:var(--ck-color-base-border);--ck-color-input-error-border:var(--ck-color-base-error);--ck-color-input-text:var(--ck-color-base-text);--ck-color-input-disabled-background:#f2f2f2;--ck-color-input-disabled-border:var(--ck-color-base-border);--ck-color-input-disabled-text:#757575;--ck-color-list-background:var(--ck-color-base-background);--ck-color-list-button-hover-background:var(--ck-color-button-default-hover-background);--ck-color-list-button-on-background:var(--ck-color-button-on-color);--ck-color-list-button-on-background-focus:var(--ck-color-button-on-color);--ck-color-list-button-on-text:var(--ck-color-base-background);--ck-color-panel-background:var(--ck-color-base-background);--ck-color-panel-border:var(--ck-color-base-border);--ck-color-toolbar-background:var(--ck-color-base-background);--ck-color-toolbar-border:var(--ck-color-base-border);--ck-color-tooltip-background:var(--ck-color-base-text);--ck-color-tooltip-text:var(--ck-color-base-background);--ck-color-engine-placeholder-text:#707070;--ck-color-upload-bar-background:#6cb5f9;--ck-color-link-default:#0000f0;--ck-color-link-selected-background:rgba(31,176,255,.1);--ck-color-link-fake-selection:rgba(31,176,255,.3);--ck-color-highlight-background:#ff0;--ck-color-light-red:#fcc;--ck-disabled-opacity:.5;--ck-focus-outer-shadow-geometry:0 0 0 3px;--ck-focus-outer-shadow:var(--ck-focus-outer-shadow-geometry) var(--ck-color-focus-outer-shadow);--ck-focus-disabled-outer-shadow:var(--ck-focus-outer-shadow-geometry) var(--ck-color-focus-disabled-shadow);--ck-focus-error-outer-shadow:var(--ck-focus-outer-shadow-geometry) var(--ck-color-focus-error-shadow);--ck-focus-ring:1px solid var(--ck-color-focus-border);--ck-font-size-base:13px;--ck-line-height-base:1.84615;--ck-font-face:Helvetica,Arial,Tahoma,Verdana,Sans-Serif;--ck-font-size-tiny:0.7em;--ck-font-size-small:0.75em;--ck-font-size-normal:1em;--ck-font-size-big:1.4em;--ck-font-size-large:1.8em;--ck-ui-component-min-height:2.3em}.ck-reset_all :not(.ck-reset_all-excluded *),.ck.ck-reset,.ck.ck-reset_all{background:transparent;border:0;box-sizing:border-box;height:auto;margin:0;padding:0;position:static;text-decoration:none;transition:none;vertical-align:middle;width:auto;word-wrap:break-word}.ck-reset_all :not(.ck-reset_all-excluded *),.ck.ck-reset_all{border-collapse:collapse;color:var(--ck-color-text);cursor:auto;float:none;font:normal normal normal var(--ck-font-size-base)/var(--ck-line-height-base) var(--ck-font-face);text-align:left;white-space:nowrap}.ck-reset_all .ck-rtl :not(.ck-reset_all-excluded *){text-align:right}.ck-reset_all iframe:not(.ck-reset_all-excluded *){vertical-align:inherit}.ck-reset_all textarea:not(.ck-reset_all-excluded *){white-space:pre-wrap}.ck-reset_all input[type=password]:not(.ck-reset_all-excluded *),.ck-reset_all input[type=text]:not(.ck-reset_all-excluded *),.ck-reset_all textarea:not(.ck-reset_all-excluded *){cursor:text}.ck-reset_all input[type=password][disabled]:not(.ck-reset_all-excluded *),.ck-reset_all input[type=text][disabled]:not(.ck-reset_all-excluded *),.ck-reset_all textarea[disabled]:not(.ck-reset_all-excluded *){cursor:default}.ck-reset_all fieldset:not(.ck-reset_all-excluded *){border:2px groove #dfdee3;padding:10px}.ck-reset_all button:not(.ck-reset_all-excluded *)::-moz-focus-inner{border:0;padding:0}.ck[dir=rtl],.ck[dir=rtl] .ck{text-align:right}:root{--ck-border-radius:2px;--ck-inner-shadow:2px 2px 3px var(--ck-color-shadow-inner) inset;--ck-drop-shadow:0 1px 2px 1px var(--ck-color-shadow-drop);--ck-drop-shadow-active:0 3px 6px 1px var(--ck-color-shadow-drop-active);--ck-spacing-unit:0.6em;--ck-spacing-large:calc(var(--ck-spacing-unit)*1.5);--ck-spacing-standard:var(--ck-spacing-unit);--ck-spacing-medium:calc(var(--ck-spacing-unit)*0.8);--ck-spacing-small:calc(var(--ck-spacing-unit)*0.5);--ck-spacing-tiny:calc(var(--ck-spacing-unit)*0.3);--ck-spacing-extra-tiny:calc(var(--ck-spacing-unit)*0.16)}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/globals/_hidden.css","webpack://./../ckeditor5-ui/theme/globals/_zindex.css","webpack://./../ckeditor5-ui/theme/globals/_transition.css","webpack://./../ckeditor5-ui/theme/globals/_poweredby.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_colors.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_disabled.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_focus.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_fonts.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_reset.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_rounded.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_shadow.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_spacing.css"],names:[],mappings:"AAQA,WAGC,sBACD,CCPA,MACC,gBAAiB,CACjB,4CAA+C,CAC/C,kBACD,CCDA,oDAEC,yBACD,CCNA,MACC,gCAAiC,CACjC,oCAAqC,CACrC,sCAAuC,CACvC,kCAA2C,CAC3C,qDAAsD,CACtD,+BAA4C,CAC5C,yDACD,CAEA,2CACC,qDAAsD,CAGtD,0CAA2C,CAD3C,eAAgB,CAEhB,gBAAiB,CACjB,mCAiDD,CA/CC,6DACC,4CAoCD,CAlCC,+DAGC,kBAAmB,CAFnB,cAAe,CACf,YAAa,CAGb,qBAAsB,CACtB,4CAA6C,CAF7C,WAAY,CAGZ,qFACD,CAEA,mFASC,qCAAsC,CAFtC,cAAe,CANf,eAAgB,CAIhB,eAAiB,CAHjB,oBAAqB,CAMrB,kBAAmB,CAFnB,gBAAiB,CAHjB,gBAAiB,CACjB,wBAOD,CAEA,sEAEC,cAAe,CADf,aAED,CAGC,qEACC,mBAAqB,CACrB,SACD,CAIF,mEACC,wBACD,CAEA,mEACC,2BAA4B,CAC5B,8CACD,CChED,MACC,kCAAmD,CACnD,+BAAoD,CACpD,8BAAkD,CAClD,8BAAuD,CACvD,6BAAmD,CACnD,yBAA+C,CAC/C,8BAAsD,CACtD,oCAA4D,CAC5D,6BAAkD,CAIlD,mDAA4D,CAC5D,qEAA+E,CAC/E,qCAA4D,CAC5D,qDAA8D,CAC9D,gDAAyD,CACzD,yCAAqD,CACrD,sCAAsD,CACtD,4CAA0D,CAC1D,sCAAsD,CAItD,gDAAuD,CACvD,kDAAiE,CACjE,mDAAkE,CAClE,yDAA8D,CAE9D,uCAA6D,CAC7D,6CAAoE,CACpE,8CAAoE,CACpE,gDAAiE,CACjE,kCAAyD,CAGzD,+DAAsE,CACtE,iDAAsE,CACtE,kDAAsE,CACtE,oDAAoE,CACpE,6DAAsE,CAEtE,8BAAoD,CACpD,gCAAqD,CAErD,+CAA8D,CAC9D,qDAAiE,CACjE,+EAAqF,CACrF,oDAAuE,CACvE,yEAA8E,CAC9E,oDAAgE,CAIhE,oEAA2E,CAC3E,4DAAoE,CAIpE,wDAAiE,CACjE,4DAAmE,CAInE,2DAAoE,CACpE,mDAA6D,CAC7D,wDAAgE,CAChE,+CAA0D,CAC1D,4CAA2D,CAC3D,4DAAoE,CACpE,sCAAsD,CAItD,0DAAmE,CACnE,uFAA6F,CAC7F,oEAA2E,CAC3E,0EAA+E,CAC/E,8DAAsE,CAItE,2DAAoE,CACpE,mDAA6D,CAI7D,6DAAsE,CACtE,qDAA+D,CAI/D,uDAAgE,CAChE,uDAAiE,CAIjE,0CAAyD,CAIzD,wCAA2D,CAI3D,+BAAoD,CACpD,uDAAmE,CACnE,kDAAgE,CAIhE,oCAAyD,CAIzD,yBAAgD,CChHhD,wBAAyB,CCAzB,0CAA2C,CAK3C,gGAAiG,CAKjG,4GAA6G,CAK7G,sGAAuG,CAKvG,sDAAuD,CCvBvD,wBAAyB,CACzB,6BAA8B,CAC9B,wDAA6D,CAE7D,yBAA0B,CAC1B,2BAA4B,CAC5B,yBAA0B,CAC1B,wBAAyB,CACzB,0BAA2B,CCJ3B,kCJgHD,CI1GA,2EAYC,sBAAuB,CADvB,QAAS,CART,qBAAsB,CAEtB,WAAY,CAIZ,QAAS,CACT,SAAU,CAJV,eAAgB,CAOhB,oBAAqB,CAErB,eAAgB,CADhB,qBAAsB,CAVtB,UAAW,CAcX,oBACD,CAKA,8DAGC,wBAAyB,CAEzB,0BAA2B,CAG3B,WAAY,CACZ,UAAW,CALX,iGAAkG,CAElG,eAAgB,CAChB,kBAGD,CAGC,qDACC,gBACD,CAEA,mDAEC,sBACD,CAEA,qDACC,oBACD,CAEA,mLAGC,WACD,CAEA,iNAGC,cACD,CAEA,qDAEC,yBAAoC,CADpC,YAED,CAEA,qEAGC,QAAQ,CADR,SAED,CAMD,8BAEC,gBACD,CCxFA,MACC,sBAAuB,CCAvB,gEAAiE,CAKjE,0DAA2D,CAK3D,wEAAyE,CCbzE,uBAA8B,CAC9B,mDAA2D,CAC3D,4CAAkD,CAClD,oDAA4D,CAC5D,mDAA2D,CAC3D,kDAA2D,CAC3D,yDFFD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A class which hides an element in DOM.
 */
.ck-hidden {
	/* Override selector specificity. Otherwise, all elements with some display
	style defined will override this one, which is not a desired result. */
	display: none !important;
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-z-default: 1;
	--ck-z-panel: calc( var(--ck-z-default) + 999 );
	--ck-z-dialog: 9999;
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A class that disables all transitions of the element and its children.
 */
.ck-transitions-disabled,
.ck-transitions-disabled * {
	transition: none !important;
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-powered-by-line-height: 10px;
	--ck-powered-by-padding-vertical: 2px;
	--ck-powered-by-padding-horizontal: 4px;
	--ck-powered-by-text-color: hsl(0, 0%, 31%);
	--ck-powered-by-border-radius: var(--ck-border-radius);
	--ck-powered-by-background: hsl(0, 0%, 100%);
	--ck-powered-by-border-color: var(--ck-color-focus-border);
}

.ck.ck-balloon-panel.ck-powered-by-balloon {
	--ck-border-radius: var(--ck-powered-by-border-radius);

	box-shadow: none;
	background: var(--ck-powered-by-background);
	min-height: unset;
	z-index: calc( var(--ck-z-panel) - 1 );

	& .ck.ck-powered-by {
		line-height: var(--ck-powered-by-line-height);

		& a {
			cursor: pointer;
			display: flex;
			align-items: center;
			opacity: .66;
			filter: grayscale(80%);
			line-height: var(--ck-powered-by-line-height);
			padding: var(--ck-powered-by-padding-vertical) var(--ck-powered-by-padding-horizontal);
		}

		& .ck-powered-by__label {
			font-size: 7.5px;
			letter-spacing: -.2px;
			padding-left: 2px;
			text-transform: uppercase;
			font-weight: bold;
			margin-right: 4px;
			cursor: pointer;
			line-height: normal;
			color: var(--ck-powered-by-text-color);

		}

		& .ck-icon {
			display: block;
			cursor: pointer;
		}

		&:hover {
			& a {
				filter: grayscale(0%);
				opacity: 1;
			}
		}
	}

	&[class*="position_inside"] {
		border-color: transparent;
	}

	&[class*="position_border"] {
		border: var(--ck-focus-ring);
		border-color: var(--ck-powered-by-border-color);
	}
}

`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-color-base-foreground: 								hsl(0, 0%, 98%);
	--ck-color-base-background: 								hsl(0, 0%, 100%);
	--ck-color-base-border: 									hsl(220, 6%, 81%);
	--ck-color-base-action: 									hsl(104, 50.2%, 42.5%);
	--ck-color-base-focus: 										hsl(209, 92%, 70%);
	--ck-color-base-text: 										hsl(0, 0%, 20%);
	--ck-color-base-active: 									hsl(218.1, 100%, 58%);
	--ck-color-base-active-focus:								hsl(218.2, 100%, 52.5%);
	--ck-color-base-error:										hsl(15, 100%, 43%);

	/* -- Generic colors ------------------------------------------------------------------------ */

	--ck-color-focus-border-coordinates: 						218, 81.8%, 56.9%;
	--ck-color-focus-border: 									hsl(var(--ck-color-focus-border-coordinates));
	--ck-color-focus-outer-shadow:								hsl(212.4, 89.3%, 89%);
	--ck-color-focus-disabled-shadow:							hsla(209, 90%, 72%,.3);
	--ck-color-focus-error-shadow:								hsla(9,100%,56%,.3);
	--ck-color-text: 											var(--ck-color-base-text);
	--ck-color-shadow-drop: 									hsla(0, 0%, 0%, 0.15);
	--ck-color-shadow-drop-active:								hsla(0, 0%, 0%, 0.2);
	--ck-color-shadow-inner: 									hsla(0, 0%, 0%, 0.1);

	/* -- Buttons ------------------------------------------------------------------------------- */

	--ck-color-button-default-background: 						transparent;
	--ck-color-button-default-hover-background: 				hsl(0, 0%, 94.1%);
	--ck-color-button-default-active-background: 				hsl(0, 0%, 94.1%);
	--ck-color-button-default-disabled-background: 				transparent;

	--ck-color-button-on-background: 							hsl(212, 100%, 97.1%);
	--ck-color-button-on-hover-background: 						hsl(211.7, 100%, 92.9%);
	--ck-color-button-on-active-background: 					hsl(211.7, 100%, 92.9%);
	--ck-color-button-on-disabled-background: 					hsl(211, 15%, 95%);
	--ck-color-button-on-color:									hsl(218.1, 100%, 58%);


	--ck-color-button-action-background: 						var(--ck-color-base-action);
	--ck-color-button-action-hover-background: 					hsl(104, 53.2%, 40.2%);
	--ck-color-button-action-active-background: 				hsl(104, 53.2%, 40.2%);
	--ck-color-button-action-disabled-background: 				hsl(104, 44%, 58%);
	--ck-color-button-action-text: 								var(--ck-color-base-background);

	--ck-color-button-save: 									hsl(120, 100%, 27%);
	--ck-color-button-cancel: 									hsl(15, 100%, 43%);

	--ck-color-switch-button-off-background:					hsl(0, 0%, 57.6%);
	--ck-color-switch-button-off-hover-background:				hsl(0, 0%, 49%);
	--ck-color-switch-button-on-background:						var(--ck-color-button-action-background);
	--ck-color-switch-button-on-hover-background:				hsl(104, 53.2%, 40.2%);
	--ck-color-switch-button-inner-background:					var(--ck-color-base-background);
	--ck-color-switch-button-inner-shadow:						hsla(0, 0%, 0%, 0.1);

	/* -- Dropdown ------------------------------------------------------------------------------ */

	--ck-color-dropdown-panel-background: 						var(--ck-color-base-background);
	--ck-color-dropdown-panel-border: 							var(--ck-color-base-border);

	/* -- Dialog -------------------------------------------------------------------------------- */

	--ck-color-dialog-background: 								var(--ck-custom-background);
	--ck-color-dialog-form-header-border: 						var(--ck-custom-border);

	/* -- Input --------------------------------------------------------------------------------- */

	--ck-color-input-background: 								var(--ck-color-base-background);
	--ck-color-input-border: 									var(--ck-color-base-border);
	--ck-color-input-error-border:								var(--ck-color-base-error);
	--ck-color-input-text: 										var(--ck-color-base-text);
	--ck-color-input-disabled-background: 						hsl(0, 0%, 95%);
	--ck-color-input-disabled-border: 							var(--ck-color-base-border);
	--ck-color-input-disabled-text: 							hsl(0, 0%, 46%);

	/* -- List ---------------------------------------------------------------------------------- */

	--ck-color-list-background: 								var(--ck-color-base-background);
	--ck-color-list-button-hover-background: 					var(--ck-color-button-default-hover-background);
	--ck-color-list-button-on-background: 						var(--ck-color-button-on-color);
	--ck-color-list-button-on-background-focus: 				var(--ck-color-button-on-color);
	--ck-color-list-button-on-text:								var(--ck-color-base-background);

	/* -- Panel --------------------------------------------------------------------------------- */

	--ck-color-panel-background: 								var(--ck-color-base-background);
	--ck-color-panel-border: 									var(--ck-color-base-border);

	/* -- Toolbar ------------------------------------------------------------------------------- */

	--ck-color-toolbar-background: 								var(--ck-color-base-background);
	--ck-color-toolbar-border: 									var(--ck-color-base-border);

	/* -- Tooltip ------------------------------------------------------------------------------- */

	--ck-color-tooltip-background: 								var(--ck-color-base-text);
	--ck-color-tooltip-text: 									var(--ck-color-base-background);

	/* -- Engine -------------------------------------------------------------------------------- */

	--ck-color-engine-placeholder-text: 						hsl(0, 0%, 44%);

	/* -- Upload -------------------------------------------------------------------------------- */

	--ck-color-upload-bar-background:		 					hsl(209, 92%, 70%);

	/* -- Link -------------------------------------------------------------------------------- */

	--ck-color-link-default:									hsl(240, 100%, 47%);
	--ck-color-link-selected-background:						hsla(201, 100%, 56%, 0.1);
	--ck-color-link-fake-selection:								hsla(201, 100%, 56%, 0.3);

	/* -- Search result highlight ---------------------------------------------------------------- */

	--ck-color-highlight-background:							hsl(60, 100%, 50%);

	/* -- Generic colors ------------------------------------------------------------------------- */

	--ck-color-light-red:										hsl(0, 100%, 90%);
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	/**
	 * An opacity value of disabled UI item.
	 */
	--ck-disabled-opacity: .5;
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	/**
	 * The geometry of the of focused element's outer shadow.
	 */
	--ck-focus-outer-shadow-geometry: 0 0 0 3px;

	/**
	 * A visual style of focused element's outer shadow.
	 */
	--ck-focus-outer-shadow: var(--ck-focus-outer-shadow-geometry) var(--ck-color-focus-outer-shadow);

	/**
	 * A visual style of focused element's outer shadow (when disabled).
	 */
	--ck-focus-disabled-outer-shadow: var(--ck-focus-outer-shadow-geometry) var(--ck-color-focus-disabled-shadow);

	/**
	 * A visual style of focused element's outer shadow (when has errors).
	 */
	--ck-focus-error-outer-shadow: var(--ck-focus-outer-shadow-geometry) var(--ck-color-focus-error-shadow);

	/**
	 * A visual style of focused element's border or outline.
	 */
	--ck-focus-ring: 1px solid var(--ck-color-focus-border);
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-font-size-base: 13px;
	--ck-line-height-base: 1.84615;
	--ck-font-face: Helvetica, Arial, Tahoma, Verdana, Sans-Serif;

	--ck-font-size-tiny: 0.7em;
	--ck-font-size-small: 0.75em;
	--ck-font-size-normal: 1em;
	--ck-font-size-big: 1.4em;
	--ck-font-size-large: 1.8em;
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	/* This is super-important. This is **manually** adjusted so a button without an icon
	is never smaller than a button with icon, additionally making sure that text-less buttons
	are perfect squares. The value is also shared by other components which should stay "in-line"
	with buttons. */
	--ck-ui-component-min-height: 2.3em;
}

/**
 * Resets an element, ignoring its children.
 */
.ck.ck-reset,
.ck.ck-reset_all,
.ck-reset_all *:not(.ck-reset_all-excluded *) {
	box-sizing: border-box;
	width: auto;
	height: auto;
	position: static;

	/* Do not include inheritable rules here. */
	margin: 0;
	padding: 0;
	border: 0;
	background: transparent;
	text-decoration: none;
	vertical-align: middle;
	transition: none;

	/* https://github.com/ckeditor/ckeditor5-theme-lark/issues/105 */
	word-wrap: break-word;
}

/**
 * Resets an element AND its children.
 */
.ck.ck-reset_all,
.ck-reset_all *:not(.ck-reset_all-excluded *) {
	/* These are rule inherited by all children elements. */
	border-collapse: collapse;
	font: normal normal normal var(--ck-font-size-base)/var(--ck-line-height-base) var(--ck-font-face);
	color: var(--ck-color-text);
	text-align: left;
	white-space: nowrap;
	cursor: auto;
	float: none;
}

.ck-reset_all {
	& .ck-rtl *:not(.ck-reset_all-excluded *) {
		text-align: right;
	}

	& iframe:not(.ck-reset_all-excluded *) {
		/* For IE */
		vertical-align: inherit;
	}

	& textarea:not(.ck-reset_all-excluded *) {
		white-space: pre-wrap;
	}

	& textarea:not(.ck-reset_all-excluded *),
	& input[type="text"]:not(.ck-reset_all-excluded *),
	& input[type="password"]:not(.ck-reset_all-excluded *) {
		cursor: text;
	}

	& textarea[disabled]:not(.ck-reset_all-excluded *),
	& input[type="text"][disabled]:not(.ck-reset_all-excluded *),
	& input[type="password"][disabled]:not(.ck-reset_all-excluded *) {
		cursor: default;
	}

	& fieldset:not(.ck-reset_all-excluded *) {
		padding: 10px;
		border: 2px groove hsl(255, 7%, 88%);
	}

	& button:not(.ck-reset_all-excluded *)::-moz-focus-inner {
		/* See http://stackoverflow.com/questions/5517744/remove-extra-button-spacing-padding-in-firefox */
		padding: 0;
		border: 0
	}
}

/**
 * Default UI rules for RTL languages.
 */
.ck[dir="rtl"],
.ck[dir="rtl"] .ck {
	text-align: right;
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Default border-radius value.
 */
:root{
	--ck-border-radius: 2px;
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	/**
	 * A visual style of element's inner shadow (i.e. input).
	 */
	--ck-inner-shadow: 2px 2px 3px var(--ck-color-shadow-inner) inset;

	/**
	 * A visual style of element's drop shadow (i.e. panel).
	 */
	--ck-drop-shadow: 0 1px 2px 1px var(--ck-color-shadow-drop);

	/**
	 * A visual style of element's active shadow (i.e. comment or suggestion).
	 */
	--ck-drop-shadow-active: 0 3px 6px 1px var(--ck-color-shadow-drop-active);
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-spacing-unit: 						0.6em;
	--ck-spacing-large: 					calc(var(--ck-spacing-unit) * 1.5);
	--ck-spacing-standard: 					var(--ck-spacing-unit);
	--ck-spacing-medium: 					calc(var(--ck-spacing-unit) * 0.8);
	--ck-spacing-small: 					calc(var(--ck-spacing-unit) * 0.5);
	--ck-spacing-tiny: 						calc(var(--ck-spacing-unit) * 0.3);
	--ck-spacing-extra-tiny: 				calc(var(--ck-spacing-unit) * 0.16);
}
`],sourceRoot:""}]);const S=y},695:(f,b,m)=>{m.d(b,{A:()=>S});var v=m(9372),A=m.n(v),x=m(935),y=m.n(x)()(A());y.push([f.id,":root{--ck-color-resizer:var(--ck-color-focus-border);--ck-color-resizer-tooltip-background:#262626;--ck-color-resizer-tooltip-text:#f2f2f2;--ck-resizer-border-radius:var(--ck-border-radius);--ck-resizer-tooltip-offset:10px;--ck-resizer-tooltip-height:calc(var(--ck-spacing-small)*2 + 10px)}.ck .ck-widget,.ck .ck-widget.ck-widget_with-selection-handle{position:relative}.ck .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle{position:absolute}.ck .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle .ck-icon{display:block}.ck .ck-widget.ck-widget_with-selection-handle.ck-widget_selected>.ck-widget__selection-handle,.ck .ck-widget.ck-widget_with-selection-handle:hover>.ck-widget__selection-handle{visibility:visible}.ck .ck-size-view{background:var(--ck-color-resizer-tooltip-background);border:1px solid var(--ck-color-resizer-tooltip-text);border-radius:var(--ck-resizer-border-radius);color:var(--ck-color-resizer-tooltip-text);display:block;font-size:var(--ck-font-size-tiny);height:var(--ck-resizer-tooltip-height);line-height:var(--ck-resizer-tooltip-height);padding:0 var(--ck-spacing-small)}.ck .ck-size-view.ck-orientation-above-center,.ck .ck-size-view.ck-orientation-bottom-left,.ck .ck-size-view.ck-orientation-bottom-right,.ck .ck-size-view.ck-orientation-top-left,.ck .ck-size-view.ck-orientation-top-right{position:absolute}.ck .ck-size-view.ck-orientation-top-left{left:var(--ck-resizer-tooltip-offset);top:var(--ck-resizer-tooltip-offset)}.ck .ck-size-view.ck-orientation-top-right{right:var(--ck-resizer-tooltip-offset);top:var(--ck-resizer-tooltip-offset)}.ck .ck-size-view.ck-orientation-bottom-right{bottom:var(--ck-resizer-tooltip-offset);right:var(--ck-resizer-tooltip-offset)}.ck .ck-size-view.ck-orientation-bottom-left{bottom:var(--ck-resizer-tooltip-offset);left:var(--ck-resizer-tooltip-offset)}.ck .ck-size-view.ck-orientation-above-center{left:50%;top:calc(var(--ck-resizer-tooltip-height)*-1);transform:translate(-50%)}:root{--ck-widget-outline-thickness:3px;--ck-widget-handler-icon-size:16px;--ck-widget-handler-animation-duration:200ms;--ck-widget-handler-animation-curve:ease;--ck-color-widget-blurred-border:#dedede;--ck-color-widget-hover-border:#ffc83d;--ck-color-widget-editable-focus-background:var(--ck-color-base-background);--ck-color-widget-drag-handler-icon-color:var(--ck-color-base-background)}.ck .ck-widget{outline-color:transparent;outline-style:solid;outline-width:var(--ck-widget-outline-thickness);transition:outline-color var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve)}@media (prefers-reduced-motion:reduce){.ck .ck-widget{transition:none}}.ck .ck-widget.ck-widget_selected,.ck .ck-widget.ck-widget_selected:hover{outline:var(--ck-widget-outline-thickness) solid var(--ck-color-focus-border)}.ck .ck-widget:hover{outline-color:var(--ck-color-widget-hover-border)}.ck .ck-editor__nested-editable{border:1px solid transparent}.ck .ck-editor__nested-editable.ck-editor__nested-editable_focused,.ck .ck-editor__nested-editable:focus{border:var(--ck-focus-ring);box-shadow:var(--ck-inner-shadow),0 0;outline:none}@media (forced-colors:none){.ck .ck-editor__nested-editable.ck-editor__nested-editable_focused,.ck .ck-editor__nested-editable:focus{background-color:var(--ck-color-widget-editable-focus-background)}}.ck .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle{background-color:transparent;border-radius:var(--ck-border-radius) var(--ck-border-radius) 0 0;box-sizing:border-box;left:calc(0px - var(--ck-widget-outline-thickness));opacity:0;padding:4px;top:0;transform:translateY(-100%);transition:background-color var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve),visibility var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve),opacity var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve)}@media (prefers-reduced-motion:reduce){.ck .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle{transition:none}}.ck .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle .ck-icon{color:var(--ck-color-widget-drag-handler-icon-color);height:var(--ck-widget-handler-icon-size);width:var(--ck-widget-handler-icon-size)}.ck .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle .ck-icon .ck-icon__selected-indicator{opacity:0;transition:opacity .3s var(--ck-widget-handler-animation-curve)}@media (prefers-reduced-motion:reduce){.ck .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle .ck-icon .ck-icon__selected-indicator{transition:none}}.ck .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle:hover .ck-icon .ck-icon__selected-indicator{opacity:1}.ck .ck-widget.ck-widget_with-selection-handle:hover>.ck-widget__selection-handle{background-color:var(--ck-color-widget-hover-border);opacity:1}.ck .ck-widget.ck-widget_with-selection-handle.ck-widget_selected:hover>.ck-widget__selection-handle,.ck .ck-widget.ck-widget_with-selection-handle.ck-widget_selected>.ck-widget__selection-handle{background-color:var(--ck-color-focus-border);opacity:1}.ck .ck-widget.ck-widget_with-selection-handle.ck-widget_selected:hover>.ck-widget__selection-handle .ck-icon .ck-icon__selected-indicator,.ck .ck-widget.ck-widget_with-selection-handle.ck-widget_selected>.ck-widget__selection-handle .ck-icon .ck-icon__selected-indicator{opacity:1}.ck[dir=rtl] .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle{left:auto;right:calc(0px - var(--ck-widget-outline-thickness))}.ck.ck-editor__editable.ck-read-only .ck-widget{transition:none}.ck.ck-editor__editable.ck-read-only .ck-widget:not(.ck-widget_selected){--ck-widget-outline-thickness:0px}.ck.ck-editor__editable.ck-read-only .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle,.ck.ck-editor__editable.ck-read-only .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle:hover{background:var(--ck-color-widget-blurred-border)}.ck.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected,.ck.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected:hover{outline-color:var(--ck-color-widget-blurred-border)}.ck.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected.ck-widget_with-selection-handle:hover>.ck-widget__selection-handle,.ck.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected.ck-widget_with-selection-handle:hover>.ck-widget__selection-handle:hover,.ck.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected.ck-widget_with-selection-handle>.ck-widget__selection-handle,.ck.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected.ck-widget_with-selection-handle>.ck-widget__selection-handle:hover{background:var(--ck-color-widget-blurred-border)}.ck.ck-editor__editable blockquote>.ck-widget.ck-widget_with-selection-handle:first-child,.ck.ck-editor__editable>.ck-widget.ck-widget_with-selection-handle:first-child{margin-top:calc(1em + var(--ck-widget-handler-icon-size))}","",{version:3,sources:["webpack://./../ckeditor5-widget/theme/widget.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-widget/widget.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_focus.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_shadow.css","webpack://./../ckeditor5-ui/theme/mixins/_mediacolors.css"],names:[],mappings:"AAKA,MACC,+CAAgD,CAChD,6CAAsD,CACtD,uCAAgD,CAEhD,kDAAmD,CACnD,gCAAiC,CACjC,kEACD,CAOA,8DAEC,iBAqBD,CAnBC,4EACC,iBAOD,CALC,qFAGC,aACD,CASD,iLACC,kBACD,CAGD,kBACC,qDAAsD,CAEtD,qDAAsD,CACtD,6CAA8C,CAF9C,0CAA2C,CAI3C,aAAc,CADd,kCAAmC,CAGnC,uCAAwC,CACxC,4CAA6C,CAF7C,iCAsCD,CAlCC,8NAKC,iBACD,CAEA,0CAEC,qCAAsC,CADtC,oCAED,CAEA,2CAEC,sCAAuC,CADvC,oCAED,CAEA,8CACC,uCAAwC,CACxC,sCACD,CAEA,6CACC,uCAAwC,CACxC,qCACD,CAGA,8CAEC,QAAS,CADT,6CAAgD,CAEhD,yBACD,CChFD,MACC,iCAAkC,CAClC,kCAAmC,CACnC,4CAA6C,CAC7C,wCAAyC,CAEzC,wCAAiD,CACjD,sCAAkD,CAClD,2EAA4E,CAC5E,yEACD,CAEA,eAGC,yBAA0B,CAD1B,mBAAoB,CADpB,gDAAiD,CAGjD,6GAcD,CAZC,uCAND,eAOE,eAWF,CAVC,CAEA,0EAEC,6EACD,CAEA,qBACC,iDACD,CAGD,gCACC,4BAYD,CARC,yGCnCA,2BAA2B,CCF3B,qCAA8B,CDC9B,YD2CA,CGvCA,4BACC,yGHoCC,iEGlCD,CACD,CHuCA,4EAKC,4BAA6B,CAa7B,iEAAkE,CAhBlE,qBAAsB,CAoBtB,mDAAoD,CAhBpD,SAAU,CALV,WAAY,CAsBZ,KAAM,CAFN,2BAA4B,CAT5B,6SAwCD,CA3BC,uCAzBD,4EA0BE,eA0BF,CAzBC,CAEA,qFAIC,oDAAqD,CADrD,yCAA0C,CAD1C,wCAeD,CAVC,kHACC,SAAU,CAGV,+DAKD,CAHC,uCAND,kHAOE,eAEF,CADC,CAKF,wHACC,SACD,CAID,kFAEC,oDAAqD,CADrD,SAED,CAKC,oMAEC,6CAA8C,CAD9C,SAOD,CAHC,gRACC,SACD,CAOH,qFACC,SAAU,CACV,oDACD,CAGA,gDAEC,eAkBD,CAhBC,yEAOC,iCACD,CAGC,gOAEC,gDACD,CAOD,wIAEC,mDAQD,CALE,ghBAEC,gDACD,CAKH,yKAOC,yDACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-color-resizer: var(--ck-color-focus-border);
	--ck-color-resizer-tooltip-background: hsl(0, 0%, 15%);
	--ck-color-resizer-tooltip-text: hsl(0, 0%, 95%);

	--ck-resizer-border-radius: var(--ck-border-radius);
	--ck-resizer-tooltip-offset: 10px;
	--ck-resizer-tooltip-height: calc(var(--ck-spacing-small) * 2 + 10px);
}

.ck .ck-widget {
	/* This is neccessary for type around UI to be positioned properly. */
	position: relative;
}

.ck .ck-widget.ck-widget_with-selection-handle {
	/* Make the widget wrapper a relative positioning container for the drag handle. */
	position: relative;

	& .ck-widget__selection-handle {
		position: absolute;

		& .ck-icon {
			/* Make sure the icon in not a subject to font-size or line-height to avoid
			unnecessary spacing around it. */
			display: block;
		}
	}

	/* Show the selection handle on mouse hover over the widget, but not for nested widgets. */
	&:hover > .ck-widget__selection-handle {
		visibility: visible;
	}

	/* Show the selection handle when the widget is selected, but not for nested widgets. */
	&.ck-widget_selected > .ck-widget__selection-handle {
		visibility: visible;
	}
}

.ck .ck-size-view {
	background: var(--ck-color-resizer-tooltip-background);
	color: var(--ck-color-resizer-tooltip-text);
	border: 1px solid var(--ck-color-resizer-tooltip-text);
	border-radius: var(--ck-resizer-border-radius);
	font-size: var(--ck-font-size-tiny);
	display: block;
	padding: 0 var(--ck-spacing-small);
	height: var(--ck-resizer-tooltip-height);
	line-height: var(--ck-resizer-tooltip-height);

	&.ck-orientation-top-left,
	&.ck-orientation-top-right,
	&.ck-orientation-bottom-right,
	&.ck-orientation-bottom-left,
	&.ck-orientation-above-center {
		position: absolute;
	}

	&.ck-orientation-top-left {
		top: var(--ck-resizer-tooltip-offset);
		left: var(--ck-resizer-tooltip-offset);
	}

	&.ck-orientation-top-right {
		top: var(--ck-resizer-tooltip-offset);
		right: var(--ck-resizer-tooltip-offset);
	}

	&.ck-orientation-bottom-right {
		bottom: var(--ck-resizer-tooltip-offset);
		right: var(--ck-resizer-tooltip-offset);
	}

	&.ck-orientation-bottom-left {
		bottom: var(--ck-resizer-tooltip-offset);
		left: var(--ck-resizer-tooltip-offset);
	}

	/* Class applied if the widget is too small to contain the size label */
	&.ck-orientation-above-center {
		top: calc(var(--ck-resizer-tooltip-height) * -1);
		left: 50%;
		transform: translate(-50%);
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../mixins/_focus.css";
@import "../mixins/_shadow.css";
@import "@ckeditor/ckeditor5-ui/theme/mixins/_mediacolors.css";

:root {
	--ck-widget-outline-thickness: 3px;
	--ck-widget-handler-icon-size: 16px;
	--ck-widget-handler-animation-duration: 200ms;
	--ck-widget-handler-animation-curve: ease;

	--ck-color-widget-blurred-border: hsl(0, 0%, 87%);
	--ck-color-widget-hover-border: hsl(43, 100%, 62%);
	--ck-color-widget-editable-focus-background: var(--ck-color-base-background);
	--ck-color-widget-drag-handler-icon-color: var(--ck-color-base-background);
}

.ck .ck-widget {
	outline-width: var(--ck-widget-outline-thickness);
	outline-style: solid;
	outline-color: transparent;
	transition: outline-color var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve);

	@media (prefers-reduced-motion: reduce) {
		transition: none;
	}

	&.ck-widget_selected,
	&.ck-widget_selected:hover {
		outline: var(--ck-widget-outline-thickness) solid var(--ck-color-focus-border);
	}

	&:hover {
		outline-color: var(--ck-color-widget-hover-border);
	}
}

.ck .ck-editor__nested-editable {
	border: 1px solid transparent;

	/* The :focus style is applied before .ck-editor__nested-editable_focused class is rendered in the view.
	These styles show a different border for a blink of an eye, so \`:focus\` need to have same styles applied. */
	&.ck-editor__nested-editable_focused,
	&:focus {
		@mixin ck-focus-ring;
		@mixin ck-box-shadow var(--ck-inner-shadow);
		@mixin ck-media-default-colors {
			background-color: var(--ck-color-widget-editable-focus-background);
		}
	}
}

.ck .ck-widget.ck-widget_with-selection-handle {
	& .ck-widget__selection-handle {
		padding: 4px;
		box-sizing: border-box;

		/* Background and opacity will be animated as the handler shows up or the widget gets selected. */
		background-color: transparent;
		opacity: 0;

		/* Transition:
		   * background-color for the .ck-widget_selected state change,
		   * visibility for hiding the handler,
		   * opacity for the proper look of the icon when the handler disappears. */
		transition:
			background-color var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve),
			visibility var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve),
			opacity var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve);

		/* Make only top corners round. */
		border-radius: var(--ck-border-radius) var(--ck-border-radius) 0 0;

		/* Place the drag handler outside the widget wrapper. */
		transform: translateY(-100%);
		left: calc(0px - var(--ck-widget-outline-thickness));
		top: 0;

		@media (prefers-reduced-motion: reduce) {
			transition: none;
		}

		& .ck-icon {
			/* Make sure the dimensions of the icon are independent of the fon-size of the content. */
			width: var(--ck-widget-handler-icon-size);
			height: var(--ck-widget-handler-icon-size);
			color: var(--ck-color-widget-drag-handler-icon-color);

			/* The "selected" part of the icon is invisible by default */
			& .ck-icon__selected-indicator {
				opacity: 0;

				/* Note: The animation is longer on purpose. Simply feels better. */
				transition: opacity 300ms var(--ck-widget-handler-animation-curve);

				@media (prefers-reduced-motion: reduce) {
					transition: none;
				}
			}
		}

		/* Advertise using the look of the icon that once clicked the handler, the widget will be selected. */
		&:hover .ck-icon .ck-icon__selected-indicator {
			opacity: 1;
		}
	}

	/* Show the selection handler on mouse hover over the widget, but not for nested widgets. */
	&:hover > .ck-widget__selection-handle {
		opacity: 1;
		background-color: var(--ck-color-widget-hover-border);
	}

	/* Show the selection handler when the widget is selected, but not for nested widgets. */
	&.ck-widget_selected,
	&.ck-widget_selected:hover {
		& > .ck-widget__selection-handle {
			opacity: 1;
			background-color: var(--ck-color-focus-border);

			/* When the widget is selected, notify the user using the proper look of the icon. */
			& .ck-icon .ck-icon__selected-indicator {
				opacity: 1;
			}
		}
	}
}

/* In a RTL environment, align the selection handler to the right side of the widget */
/* stylelint-disable-next-line no-descending-specificity */
.ck[dir="rtl"] .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle {
	left: auto;
	right: calc(0px - var(--ck-widget-outline-thickness));
}

/* https://github.com/ckeditor/ckeditor5/issues/6415 */
.ck.ck-editor__editable.ck-read-only .ck-widget {
	/* Prevent the :hover outline from showing up because of the used outline-color transition. */
	transition: none;

	&:not(.ck-widget_selected) {
		/* Disable visual effects of hover/active widget when CKEditor is in readOnly mode.
		 * See: https://github.com/ckeditor/ckeditor5/issues/1261
		 *
		 * Leave the unit because this custom property is used in calc() by other features.
		 * See: https://github.com/ckeditor/ckeditor5/issues/6775
		 */
		--ck-widget-outline-thickness: 0px;
	}

	&.ck-widget_with-selection-handle {
		& .ck-widget__selection-handle,
		& .ck-widget__selection-handle:hover {
			background: var(--ck-color-widget-blurred-border);
		}
	}
}

/* Style the widget when it's selected but the editable it belongs to lost focus. */
/* stylelint-disable-next-line no-descending-specificity */
.ck.ck-editor__editable.ck-blurred .ck-widget {
	&.ck-widget_selected,
	&.ck-widget_selected:hover {
		outline-color: var(--ck-color-widget-blurred-border);

		&.ck-widget_with-selection-handle {
			& > .ck-widget__selection-handle,
			& > .ck-widget__selection-handle:hover {
				background: var(--ck-color-widget-blurred-border);
			}
		}
	}
}

.ck.ck-editor__editable > .ck-widget.ck-widget_with-selection-handle:first-child,
.ck.ck-editor__editable blockquote > .ck-widget.ck-widget_with-selection-handle:first-child {
	/* Do not crop selection handler if a widget is a first-child in the blockquote or in the root editable.
	In fact, anything with overflow: hidden.
	https://github.com/ckeditor/ckeditor5-block-quote/issues/28
	https://github.com/ckeditor/ckeditor5-widget/issues/44
	https://github.com/ckeditor/ckeditor5-widget/issues/66 */
	margin-top: calc(1em + var(--ck-widget-handler-icon-size));
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A visual style of focused element's border.
 */
@define-mixin ck-focus-ring {
	/* Disable native outline. */
	outline: none;
	border: var(--ck-focus-ring)
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A helper to combine multiple shadows.
 */
@define-mixin ck-box-shadow $shadowA, $shadowB: 0 0 {
	box-shadow: $shadowA, $shadowB;
}

/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
@define-mixin ck-drop-shadow {
	@mixin ck-box-shadow var(--ck-drop-shadow);
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@define-mixin ck-media-forced-colors {
	@media (forced-colors: active) {
		& {
			@mixin-content;
		}
	}
}

@define-mixin ck-media-default-colors {
	@media (forced-colors: none) {
		& {
			@mixin-content;
		}
	}
}
`],sourceRoot:""}]);const S=y},4095:(f,b,m)=>{m.d(b,{A:()=>S});var v=m(9372),A=m.n(v),x=m(935),y=m.n(x)()(A());y.push([f.id,".ck .ck-widget_with-resizer{position:relative}.ck .ck-widget__resizer{display:none;left:0;pointer-events:none;position:absolute;top:0}.ck-focused .ck-widget_with-resizer.ck-widget_selected>.ck-widget__resizer{display:block}.ck .ck-widget__resizer__handle{pointer-events:all;position:absolute}.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-bottom-right,.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-top-left{cursor:nwse-resize}.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-bottom-left,.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-top-right{cursor:nesw-resize}:root{--ck-resizer-size:10px;--ck-resizer-offset:calc(var(--ck-resizer-size)/-2 - 2px);--ck-resizer-border-width:1px}.ck .ck-widget__resizer{outline:1px solid var(--ck-color-resizer)}.ck .ck-widget__resizer__handle{background:var(--ck-color-focus-border);border:var(--ck-resizer-border-width) solid #fff;border-radius:var(--ck-resizer-border-radius);height:var(--ck-resizer-size);width:var(--ck-resizer-size)}.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-top-left{left:var(--ck-resizer-offset);top:var(--ck-resizer-offset)}.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-top-right{right:var(--ck-resizer-offset);top:var(--ck-resizer-offset)}.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-bottom-right{bottom:var(--ck-resizer-offset);right:var(--ck-resizer-offset)}.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-bottom-left{bottom:var(--ck-resizer-offset);left:var(--ck-resizer-offset)}","",{version:3,sources:["webpack://./../ckeditor5-widget/theme/widgetresize.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-widget/widgetresize.css"],names:[],mappings:"AAKA,4BAEC,iBACD,CAEA,wBACC,YAAa,CAMb,MAAO,CAFP,mBAAoB,CAHpB,iBAAkB,CAMlB,KACD,CAGC,2EACC,aACD,CAGD,gCAIC,kBAAmB,CAHnB,iBAcD,CATC,4IAEC,kBACD,CAEA,4IAEC,kBACD,CCpCD,MACC,sBAAuB,CAGvB,yDAAiE,CACjE,6BACD,CAEA,wBACC,yCACD,CAEA,gCAGC,uCAAwC,CACxC,gDAA6D,CAC7D,6CAA8C,CAH9C,6BAA8B,CAD9B,4BAyBD,CAnBC,oEAEC,6BAA8B,CAD9B,4BAED,CAEA,qEAEC,8BAA+B,CAD/B,4BAED,CAEA,wEACC,+BAAgC,CAChC,8BACD,CAEA,uEACC,+BAAgC,CAChC,6BACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck .ck-widget_with-resizer {
	/* Make the widget wrapper a relative positioning container for the drag handle. */
	position: relative;
}

.ck .ck-widget__resizer {
	display: none;
	position: absolute;

	/* The wrapper itself should not interfere with the pointer device, only the handles should. */
	pointer-events: none;

	left: 0;
	top: 0;
}

.ck-focused .ck-widget_with-resizer.ck-widget_selected {
	& > .ck-widget__resizer {
		display: block;
	}
}

.ck .ck-widget__resizer__handle {
	position: absolute;

	/* Resizers are the only UI elements that should interfere with a pointer device. */
	pointer-events: all;

	&.ck-widget__resizer__handle-top-left,
	&.ck-widget__resizer__handle-bottom-right {
		cursor: nwse-resize;
	}

	&.ck-widget__resizer__handle-top-right,
	&.ck-widget__resizer__handle-bottom-left {
		cursor: nesw-resize;
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-resizer-size: 10px;

	/* Set the resizer with a 50% offset. */
	--ck-resizer-offset: calc( ( var(--ck-resizer-size) / -2 ) - 2px);
	--ck-resizer-border-width: 1px;
}

.ck .ck-widget__resizer {
	outline: 1px solid var(--ck-color-resizer);
}

.ck .ck-widget__resizer__handle {
	width: var(--ck-resizer-size);
	height: var(--ck-resizer-size);
	background: var(--ck-color-focus-border);
	border: var(--ck-resizer-border-width) solid hsl(0, 0%, 100%);
	border-radius: var(--ck-resizer-border-radius);

	&.ck-widget__resizer__handle-top-left {
		top: var(--ck-resizer-offset);
		left: var(--ck-resizer-offset);
	}

	&.ck-widget__resizer__handle-top-right {
		top: var(--ck-resizer-offset);
		right: var(--ck-resizer-offset);
	}

	&.ck-widget__resizer__handle-bottom-right {
		bottom: var(--ck-resizer-offset);
		right: var(--ck-resizer-offset);
	}

	&.ck-widget__resizer__handle-bottom-left {
		bottom: var(--ck-resizer-offset);
		left: var(--ck-resizer-offset);
	}
}
`],sourceRoot:""}]);const S=y},8508:(f,b,m)=>{m.d(b,{A:()=>S});var v=m(9372),A=m.n(v),x=m(935),y=m.n(x)()(A());y.push([f.id,'.ck .ck-widget .ck-widget__type-around__button{display:block;overflow:hidden;position:absolute;z-index:var(--ck-z-default)}.ck .ck-widget .ck-widget__type-around__button svg{left:50%;position:absolute;top:50%;z-index:calc(var(--ck-z-default) + 2)}.ck .ck-widget .ck-widget__type-around__button.ck-widget__type-around__button_before{left:min(10%,30px);top:calc(var(--ck-widget-outline-thickness)*-.5);transform:translateY(-50%)}.ck .ck-widget .ck-widget__type-around__button.ck-widget__type-around__button_after{bottom:calc(var(--ck-widget-outline-thickness)*-.5);right:min(10%,30px);transform:translateY(50%)}.ck .ck-widget.ck-widget_selected>.ck-widget__type-around>.ck-widget__type-around__button:after,.ck .ck-widget>.ck-widget__type-around>.ck-widget__type-around__button:hover:after{content:"";display:block;left:1px;position:absolute;top:1px;z-index:calc(var(--ck-z-default) + 1)}.ck .ck-widget>.ck-widget__type-around>.ck-widget__type-around__fake-caret{display:none;left:0;position:absolute;right:0}.ck .ck-widget:hover>.ck-widget__type-around>.ck-widget__type-around__fake-caret{left:calc(var(--ck-widget-outline-thickness)*-1);right:calc(var(--ck-widget-outline-thickness)*-1)}.ck .ck-widget.ck-widget_type-around_show-fake-caret_before>.ck-widget__type-around>.ck-widget__type-around__fake-caret{display:block;top:calc(var(--ck-widget-outline-thickness)*-1 - 1px)}.ck .ck-widget.ck-widget_type-around_show-fake-caret_after>.ck-widget__type-around>.ck-widget__type-around__fake-caret{bottom:calc(var(--ck-widget-outline-thickness)*-1 - 1px);display:block}.ck.ck-editor__editable.ck-read-only .ck-widget__type-around,.ck.ck-editor__editable.ck-restricted-editing_mode_restricted .ck-widget__type-around,.ck.ck-editor__editable.ck-widget__type-around_disabled .ck-widget__type-around{display:none}:root{--ck-widget-type-around-button-size:20px;--ck-color-widget-type-around-button-active:var(--ck-color-focus-border);--ck-color-widget-type-around-button-hover:var(--ck-color-widget-hover-border);--ck-color-widget-type-around-button-blurred-editable:var(--ck-color-widget-blurred-border);--ck-color-widget-type-around-button-radar-start-alpha:0;--ck-color-widget-type-around-button-radar-end-alpha:.3;--ck-color-widget-type-around-button-icon:var(--ck-color-base-background)}.ck .ck-widget .ck-widget__type-around__button{background:var(--ck-color-widget-type-around-button);border-radius:100px;height:var(--ck-widget-type-around-button-size);opacity:0;pointer-events:none;transition:opacity var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve),background var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve);width:var(--ck-widget-type-around-button-size)}@media (prefers-reduced-motion:reduce){.ck .ck-widget .ck-widget__type-around__button{transition:none}}.ck .ck-widget .ck-widget__type-around__button svg{height:8px;margin-top:1px;transform:translate(-50%,-50%);transition:transform .5s ease;width:10px}@media (prefers-reduced-motion:reduce){.ck .ck-widget .ck-widget__type-around__button svg{transition:none}}.ck .ck-widget .ck-widget__type-around__button svg *{stroke-dasharray:10;stroke-dashoffset:0;fill:none;stroke:var(--ck-color-widget-type-around-button-icon);stroke-width:1.5px;stroke-linecap:round;stroke-linejoin:round}.ck .ck-widget .ck-widget__type-around__button svg line{stroke-dasharray:7}.ck .ck-widget .ck-widget__type-around__button:hover{animation:ck-widget-type-around-button-sonar 1s ease infinite}.ck .ck-widget .ck-widget__type-around__button:hover svg polyline{animation:ck-widget-type-around-arrow-dash 2s linear}.ck .ck-widget .ck-widget__type-around__button:hover svg line{animation:ck-widget-type-around-arrow-tip-dash 2s linear}@media (prefers-reduced-motion:reduce){.ck .ck-widget .ck-widget__type-around__button:hover,.ck .ck-widget .ck-widget__type-around__button:hover svg line,.ck .ck-widget .ck-widget__type-around__button:hover svg polyline{animation:none}}.ck .ck-widget.ck-widget_selected>.ck-widget__type-around>.ck-widget__type-around__button,.ck .ck-widget:hover>.ck-widget__type-around>.ck-widget__type-around__button{opacity:1;pointer-events:auto}.ck .ck-widget:not(.ck-widget_selected)>.ck-widget__type-around>.ck-widget__type-around__button{background:var(--ck-color-widget-type-around-button-hover)}.ck .ck-widget.ck-widget_selected>.ck-widget__type-around>.ck-widget__type-around__button,.ck .ck-widget>.ck-widget__type-around>.ck-widget__type-around__button:hover{background:var(--ck-color-widget-type-around-button-active)}.ck .ck-widget.ck-widget_selected>.ck-widget__type-around>.ck-widget__type-around__button:after,.ck .ck-widget>.ck-widget__type-around>.ck-widget__type-around__button:hover:after{background:linear-gradient(135deg,hsla(0,0%,100%,0),hsla(0,0%,100%,.3));border-radius:100px;height:calc(var(--ck-widget-type-around-button-size) - 2px);width:calc(var(--ck-widget-type-around-button-size) - 2px)}.ck .ck-widget.ck-widget_with-selection-handle>.ck-widget__type-around>.ck-widget__type-around__button_before{margin-left:20px}.ck .ck-widget .ck-widget__type-around__fake-caret{animation:ck-widget-type-around-fake-caret-pulse 1s linear infinite normal forwards;background:var(--ck-color-base-text);height:1px;outline:1px solid hsla(0,0%,100%,.5);pointer-events:none}.ck .ck-widget.ck-widget_selected.ck-widget_type-around_show-fake-caret_after,.ck .ck-widget.ck-widget_selected.ck-widget_type-around_show-fake-caret_before{outline-color:transparent}.ck .ck-widget.ck-widget_type-around_show-fake-caret_after.ck-widget_selected:hover,.ck .ck-widget.ck-widget_type-around_show-fake-caret_before.ck-widget_selected:hover{outline-color:var(--ck-color-widget-hover-border)}.ck .ck-widget.ck-widget_type-around_show-fake-caret_after>.ck-widget__type-around>.ck-widget__type-around__button,.ck .ck-widget.ck-widget_type-around_show-fake-caret_before>.ck-widget__type-around>.ck-widget__type-around__button{opacity:0;pointer-events:none}.ck .ck-widget.ck-widget_type-around_show-fake-caret_after.ck-widget_selected.ck-widget_with-resizer>.ck-widget__resizer,.ck .ck-widget.ck-widget_type-around_show-fake-caret_after.ck-widget_with-selection-handle.ck-widget_selected:hover>.ck-widget__selection-handle,.ck .ck-widget.ck-widget_type-around_show-fake-caret_after.ck-widget_with-selection-handle.ck-widget_selected>.ck-widget__selection-handle,.ck .ck-widget.ck-widget_type-around_show-fake-caret_before.ck-widget_selected.ck-widget_with-resizer>.ck-widget__resizer,.ck .ck-widget.ck-widget_type-around_show-fake-caret_before.ck-widget_with-selection-handle.ck-widget_selected:hover>.ck-widget__selection-handle,.ck .ck-widget.ck-widget_type-around_show-fake-caret_before.ck-widget_with-selection-handle.ck-widget_selected>.ck-widget__selection-handle{opacity:0}.ck[dir=rtl] .ck-widget.ck-widget_with-selection-handle .ck-widget__type-around>.ck-widget__type-around__button_before{margin-left:0;margin-right:20px}.ck-editor__nested-editable.ck-editor__editable_selected .ck-widget.ck-widget_selected>.ck-widget__type-around>.ck-widget__type-around__button,.ck-editor__nested-editable.ck-editor__editable_selected .ck-widget:hover>.ck-widget__type-around>.ck-widget__type-around__button{opacity:0;pointer-events:none}.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected>.ck-widget__type-around>.ck-widget__type-around__button:not(:hover){background:var(--ck-color-widget-type-around-button-blurred-editable)}.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected>.ck-widget__type-around>.ck-widget__type-around__button:not(:hover) svg *{stroke:#999}@keyframes ck-widget-type-around-arrow-dash{0%{stroke-dashoffset:10}20%,to{stroke-dashoffset:0}}@keyframes ck-widget-type-around-arrow-tip-dash{0%,20%{stroke-dashoffset:7}40%,to{stroke-dashoffset:0}}@keyframes ck-widget-type-around-button-sonar{0%{box-shadow:0 0 0 0 hsla(var(--ck-color-focus-border-coordinates),var(--ck-color-widget-type-around-button-radar-start-alpha))}50%{box-shadow:0 0 0 5px hsla(var(--ck-color-focus-border-coordinates),var(--ck-color-widget-type-around-button-radar-end-alpha))}to{box-shadow:0 0 0 5px hsla(var(--ck-color-focus-border-coordinates),var(--ck-color-widget-type-around-button-radar-start-alpha))}}@keyframes ck-widget-type-around-fake-caret-pulse{0%{opacity:1}49%{opacity:1}50%{opacity:0}99%{opacity:0}to{opacity:1}}',"",{version:3,sources:["webpack://./../ckeditor5-widget/theme/widgettypearound.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-widget/widgettypearound.css"],names:[],mappings:"AASC,+CACC,aAAc,CAEd,eAAgB,CADhB,iBAAkB,CAElB,2BAwBD,CAtBC,mDAGC,QAAS,CAFT,iBAAkB,CAClB,OAAQ,CAER,qCACD,CAEA,qFAGC,kBAAoB,CADpB,gDAAoD,CAGpD,0BACD,CAEA,oFAEC,mDAAuD,CACvD,mBAAqB,CAErB,yBACD,CAUA,mLACC,UAAW,CACX,aAAc,CAGd,QAAS,CAFT,iBAAkB,CAClB,OAAQ,CAER,qCACD,CAMD,2EACC,YAAa,CAEb,MAAO,CADP,iBAAkB,CAElB,OACD,CAOA,iFACC,gDAAqD,CACrD,iDACD,CAKA,wHAEC,aAAc,CADd,qDAED,CAKA,uHACC,wDAA6D,CAC7D,aACD,CAoBD,mOACC,YACD,CC3GA,MACC,wCAAyC,CACzC,wEAAyE,CACzE,8EAA+E,CAC/E,2FAA4F,CAC5F,wDAAyD,CACzD,uDAAwD,CACxD,yEACD,CAgBC,+CAGC,oDAAqD,CACrD,mBAAoB,CAFpB,+CAAgD,CAVjD,SAAU,CACV,mBAAoB,CAYnB,uMAAyM,CAJzM,8CAwED,CAhEC,uCATD,+CAUE,eA+DF,CA9DC,CAEA,mDAEC,UAAW,CAGX,cAAe,CAFf,8BAA+B,CAC/B,6BAA8B,CAH9B,UAwBD,CAlBC,uCAPD,mDAQE,eAiBF,CAhBC,CAEA,qDACC,mBAAoB,CACpB,mBAAoB,CAEpB,SAAU,CACV,qDAAsD,CACtD,kBAAmB,CACnB,oBAAqB,CACrB,qBACD,CAEA,wDACC,kBACD,CAGD,qDAIC,6DA4BD,CAtBE,kEACC,oDACD,CAEA,8DACC,wDACD,CAGD,uCAQE,qLACC,cACD,CAEF,CASD,uKA7FD,SAAU,CACV,mBA8FC,CAOD,gGACC,0DACD,CAOA,uKAEC,2DAQD,CANC,mLAIC,uEAAkF,CADlF,mBAAoB,CADpB,2DAA4D,CAD5D,0DAID,CAOD,8GACC,gBACD,CAKA,mDAGC,mFAAoF,CAOpF,oCAAqC,CARrC,UAAW,CAOX,oCAAwC,CARxC,mBAUD,CAOC,6JAEC,yBACD,CAUA,yKACC,iDACD,CAMA,uOAxKD,SAAU,CACV,mBAyKC,CAoBA,6yBACC,SACD,CASF,uHACC,aAAc,CACd,iBACD,CAYG,iRAxNF,SAAU,CACV,mBAyNE,CAQH,kIACC,qEAKD,CAHC,wIACC,WACD,CAGD,4CACC,GACC,oBACD,CACA,OACC,mBACD,CACD,CAEA,gDACC,OACC,mBACD,CACA,OACC,mBACD,CACD,CAEA,8CACC,GACC,6HACD,CACA,IACC,6HACD,CACA,GACC,+HACD,CACD,CAEA,kDACC,GACC,SACD,CACA,IACC,SACD,CACA,IACC,SACD,CACA,IACC,SACD,CACA,GACC,SACD,CACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck .ck-widget {
	/*
	 * Styles of the type around buttons
	 */
	& .ck-widget__type-around__button {
		display: block;
		position: absolute;
		overflow: hidden;
		z-index: var(--ck-z-default);

		& svg {
			position: absolute;
			top: 50%;
			left: 50%;
			z-index: calc(var(--ck-z-default) + 2);
		}

		&.ck-widget__type-around__button_before {
			/* Place it in the middle of the outline */
			top: calc(-0.5 * var(--ck-widget-outline-thickness));
			left: min(10%, 30px);

			transform: translateY(-50%);
		}

		&.ck-widget__type-around__button_after {
			/* Place it in the middle of the outline */
			bottom: calc(-0.5 * var(--ck-widget-outline-thickness));
			right: min(10%, 30px);

			transform: translateY(50%);
		}
	}

	/*
	 * Styles for the buttons when:
	 * - the widget is selected,
	 * - or the button is being hovered (regardless of the widget state).
	 */
	&.ck-widget_selected > .ck-widget__type-around > .ck-widget__type-around__button,
	& > .ck-widget__type-around > .ck-widget__type-around__button:hover {
		&::after {
			content: "";
			display: block;
			position: absolute;
			top: 1px;
			left: 1px;
			z-index: calc(var(--ck-z-default) + 1);
		}
	}

	/*
	 * Styles for the horizontal "fake caret" which is displayed when the user navigates using the keyboard.
	 */
	& > .ck-widget__type-around > .ck-widget__type-around__fake-caret {
		display: none;
		position: absolute;
		left: 0;
		right: 0;
	}

	/*
	 * When the widget is hovered the "fake caret" would normally be narrower than the
	 * extra outline displayed around the widget. Let's extend the "fake caret" to match
	 * the full width of the widget.
	 */
	&:hover > .ck-widget__type-around > .ck-widget__type-around__fake-caret {
		left: calc( -1 * var(--ck-widget-outline-thickness) );
		right: calc( -1 * var(--ck-widget-outline-thickness) );
	}

	/*
	 * Styles for the horizontal "fake caret" when it should be displayed before the widget (backward keyboard navigation).
	 */
	&.ck-widget_type-around_show-fake-caret_before > .ck-widget__type-around > .ck-widget__type-around__fake-caret {
		top: calc( -1 * var(--ck-widget-outline-thickness) - 1px );
		display: block;
	}

	/*
	 * Styles for the horizontal "fake caret" when it should be displayed after the widget (forward keyboard navigation).
	 */
	&.ck-widget_type-around_show-fake-caret_after > .ck-widget__type-around > .ck-widget__type-around__fake-caret {
		bottom: calc( -1 * var(--ck-widget-outline-thickness) - 1px );
		display: block;
	}
}

/*
 * Integration with the read-only mode of the editor.
 */
.ck.ck-editor__editable.ck-read-only .ck-widget__type-around {
	display: none;
}

/*
 * Integration with the restricted editing mode (feature) of the editor.
 */
.ck.ck-editor__editable.ck-restricted-editing_mode_restricted .ck-widget__type-around {
	display: none;
}

/*
 * Integration with the #isEnabled property of the WidgetTypeAround plugin.
 */
.ck.ck-editor__editable.ck-widget__type-around_disabled .ck-widget__type-around {
	display: none;
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-widget-type-around-button-size: 20px;
	--ck-color-widget-type-around-button-active: var(--ck-color-focus-border);
	--ck-color-widget-type-around-button-hover: var(--ck-color-widget-hover-border);
	--ck-color-widget-type-around-button-blurred-editable: var(--ck-color-widget-blurred-border);
	--ck-color-widget-type-around-button-radar-start-alpha: 0;
	--ck-color-widget-type-around-button-radar-end-alpha: .3;
	--ck-color-widget-type-around-button-icon: var(--ck-color-base-background);
}

@define-mixin ck-widget-type-around-button-visible {
	opacity: 1;
	pointer-events: auto;
}

@define-mixin ck-widget-type-around-button-hidden {
	opacity: 0;
	pointer-events: none;
}

.ck .ck-widget {
	/*
	 * Styles of the type around buttons
	 */
	& .ck-widget__type-around__button {
		width: var(--ck-widget-type-around-button-size);
		height: var(--ck-widget-type-around-button-size);
		background: var(--ck-color-widget-type-around-button);
		border-radius: 100px;
		transition: opacity var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve), background var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve);

		@mixin ck-widget-type-around-button-hidden;

		@media (prefers-reduced-motion: reduce) {
			transition: none;
		}

		& svg {
			width: 10px;
			height: 8px;
			transform: translate(-50%,-50%);
			transition: transform .5s ease;
			margin-top: 1px;

			@media (prefers-reduced-motion: reduce) {
				transition: none;
			}

			& * {
				stroke-dasharray: 10;
				stroke-dashoffset: 0;

				fill: none;
				stroke: var(--ck-color-widget-type-around-button-icon);
				stroke-width: 1.5px;
				stroke-linecap: round;
				stroke-linejoin: round;
			}

			& line {
				stroke-dasharray: 7;
			}
		}

		&:hover {
			/*
			 * Display the "sonar" around the button when hovered.
			 */
			animation: ck-widget-type-around-button-sonar 1s ease infinite;

			/*
			 * Animate active button's icon.
			 */
			& svg {
				& polyline {
					animation: ck-widget-type-around-arrow-dash 2s linear;
				}

				& line {
					animation: ck-widget-type-around-arrow-tip-dash 2s linear;
				}
			}

			@media (prefers-reduced-motion: reduce) {
				animation: none;

				& svg {
					& polyline {
						animation: none;
					}

					& line {
						animation: none;
					}
				}
			}
		}
	}

	/*
	 * Show type around buttons when the widget gets selected or being hovered.
	 */
	&.ck-widget_selected,
	&:hover {
		& > .ck-widget__type-around > .ck-widget__type-around__button {
			@mixin ck-widget-type-around-button-visible;
		}
	}

	/*
	 * Styles for the buttons when the widget is NOT selected (but the buttons are visible
	 * and still can be hovered).
	 */
	&:not(.ck-widget_selected) > .ck-widget__type-around > .ck-widget__type-around__button {
		background: var(--ck-color-widget-type-around-button-hover);
	}

	/*
	 * Styles for the buttons when:
	 * - the widget is selected,
	 * - or the button is being hovered (regardless of the widget state).
	 */
	&.ck-widget_selected > .ck-widget__type-around > .ck-widget__type-around__button,
	& > .ck-widget__type-around > .ck-widget__type-around__button:hover {
		background: var(--ck-color-widget-type-around-button-active);

		&::after {
			width: calc(var(--ck-widget-type-around-button-size) - 2px);
			height: calc(var(--ck-widget-type-around-button-size) - 2px);
			border-radius: 100px;
			background: linear-gradient(135deg, hsla(0,0%,100%,0) 0%, hsla(0,0%,100%,.3) 100%);
		}
	}

	/*
	 * Styles for the "before" button when the widget has a selection handle. Because some space
	 * is consumed by the handle, the button must be moved slightly to the right to let it breathe.
	 */
	&.ck-widget_with-selection-handle > .ck-widget__type-around > .ck-widget__type-around__button_before {
		margin-left: 20px;
	}

	/*
	 * Styles for the horizontal "fake caret" which is displayed when the user navigates using the keyboard.
	 */
	& .ck-widget__type-around__fake-caret {
		pointer-events: none;
		height: 1px;
		animation: ck-widget-type-around-fake-caret-pulse linear 1s infinite normal forwards;

		/*
		 * The semi-transparent-outline+background combo improves the contrast
		 * when the background underneath the fake caret is dark.
		 */
		outline: solid 1px hsla(0, 0%, 100%, .5);
		background: var(--ck-color-base-text);
	}

	/*
	 * Styles of the widget when the "fake caret" is blinking (e.g. upon keyboard navigation).
	 * Despite the widget being physically selected in the model, its outline should disappear.
	 */
	&.ck-widget_selected {
		&.ck-widget_type-around_show-fake-caret_before,
		&.ck-widget_type-around_show-fake-caret_after {
			outline-color: transparent;
		}
	}

	&.ck-widget_type-around_show-fake-caret_before,
	&.ck-widget_type-around_show-fake-caret_after {
		/*
		 * When the "fake caret" is visible we simulate that the widget is not selected
		 * (despite being physically selected), so the outline color should be for the
		 * unselected widget.
		 */
		&.ck-widget_selected:hover {
			outline-color: var(--ck-color-widget-hover-border);
		}

		/*
		 * Styles of the type around buttons when the "fake caret" is blinking (e.g. upon keyboard navigation).
		 * In this state, the type around buttons would collide with the fake carets so they should disappear.
		 */
		& > .ck-widget__type-around > .ck-widget__type-around__button {
			@mixin ck-widget-type-around-button-hidden;
		}

		/*
		 * Fake horizontal caret integration with the selection handle. When the caret is visible, simply
		 * hide the handle because it intersects with the caret (and does not make much sense anyway).
		 */
		&.ck-widget_with-selection-handle {
			&.ck-widget_selected,
			&.ck-widget_selected:hover {
				& > .ck-widget__selection-handle {
					opacity: 0
				}
			}
		}

		/*
		 * Fake horizontal caret integration with the resize UI. When the caret is visible, simply
		 * hide the resize UI because it creates too much noise. It can be visible when the user
		 * hovers the widget, though.
		 */
		&.ck-widget_selected.ck-widget_with-resizer > .ck-widget__resizer {
			opacity: 0
		}
	}
}

/*
 * Styles for the "before" button when the widget has a selection handle in an RTL environment.
 * The selection handler is aligned to the right side of the widget so there is no need to create
 * additional space for it next to the "before" button.
 */
.ck[dir="rtl"] .ck-widget.ck-widget_with-selection-handle .ck-widget__type-around > .ck-widget__type-around__button_before {
	margin-left: 0;
	margin-right: 20px;
}

/*
 * Hide type around buttons when the widget is selected as a child of a selected
 * nested editable (e.g. mulit-cell table selection).
 *
 * See https://github.com/ckeditor/ckeditor5/issues/7263.
 */
.ck-editor__nested-editable.ck-editor__editable_selected {
	& .ck-widget {
		&.ck-widget_selected,
		&:hover {
			& > .ck-widget__type-around > .ck-widget__type-around__button {
				@mixin ck-widget-type-around-button-hidden;
			}
		}
	}
}

/*
 * Styles for the buttons when the widget is selected but the user clicked outside of the editor (blurred the editor).
 */
.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected > .ck-widget__type-around > .ck-widget__type-around__button:not(:hover) {
	background: var(--ck-color-widget-type-around-button-blurred-editable);

	& svg * {
		stroke: hsl(0,0%,60%);
	}
}

@keyframes ck-widget-type-around-arrow-dash {
	0% {
		stroke-dashoffset: 10;
	}
	20%, 100% {
		stroke-dashoffset: 0;
	}
}

@keyframes ck-widget-type-around-arrow-tip-dash {
	0%, 20% {
		stroke-dashoffset: 7;
	}
	40%, 100% {
		stroke-dashoffset: 0;
	}
}

@keyframes ck-widget-type-around-button-sonar {
	0% {
		box-shadow: 0 0 0 0 hsla(var(--ck-color-focus-border-coordinates), var(--ck-color-widget-type-around-button-radar-start-alpha));
	}
	50% {
		box-shadow: 0 0 0 5px hsla(var(--ck-color-focus-border-coordinates), var(--ck-color-widget-type-around-button-radar-end-alpha));
	}
	100% {
		box-shadow: 0 0 0 5px hsla(var(--ck-color-focus-border-coordinates), var(--ck-color-widget-type-around-button-radar-start-alpha));
	}
}

@keyframes ck-widget-type-around-fake-caret-pulse {
	0% {
		opacity: 1;
	}
	49% {
		opacity: 1;
	}
	50% {
		opacity: 0;
	}
	99% {
		opacity: 0;
	}
	100% {
		opacity: 1;
	}
}
`],sourceRoot:""}]);const S=y},935:f=>{f.exports=function(b){var m=[];return m.toString=function(){return this.map(function(v){var A=b(v);return v[2]?"@media ".concat(v[2]," {").concat(A,"}"):A}).join("")},m.i=function(v,A,x){typeof v=="string"&&(v=[[null,v,""]]);var y={};if(x)for(var S=0;S<this.length;S++){var T=this[S][0];T!=null&&(y[T]=!0)}for(var I=0;I<v.length;I++){var F=[].concat(v[I]);x&&y[F[0]]||(A&&(F[2]?F[2]="".concat(A," and ").concat(F[2]):F[2]=A),m.push(F))}},m}},9372:f=>{function b(v,A){return function(x){if(Array.isArray(x))return x}(v)||function(x,y){var S=x&&(typeof Symbol<"u"&&x[Symbol.iterator]||x["@@iterator"]);if(S!=null){var T,I,F=[],N=!0,L=!1;try{for(S=S.call(x);!(N=(T=S.next()).done)&&(F.push(T.value),!y||F.length!==y);N=!0);}catch(B){L=!0,I=B}finally{try{N||S.return==null||S.return()}finally{if(L)throw I}}return F}}(v,A)||function(x,y){if(x){if(typeof x=="string")return m(x,y);var S=Object.prototype.toString.call(x).slice(8,-1);if(S==="Object"&&x.constructor&&(S=x.constructor.name),S==="Map"||S==="Set")return Array.from(x);if(S==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(S))return m(x,y)}}(v,A)||function(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}()}function m(v,A){(A==null||A>v.length)&&(A=v.length);for(var x=0,y=new Array(A);x<A;x++)y[x]=v[x];return y}f.exports=function(v){var A=b(v,4),x=A[1],y=A[3];if(!y)return x;if(typeof btoa=="function"){var S=btoa(unescape(encodeURIComponent(JSON.stringify(y)))),T="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(S),I="/*# ".concat(T," */"),F=y.sources.map(function(N){return"/*# sourceURL=".concat(y.sourceRoot||"").concat(N," */")});return[x].concat(F).concat([I]).join(`
`)}return[x].join(`
`)}},2591:(f,b,m)=>{var v,A=function(){return v===void 0&&(v=!!(window&&document&&document.all&&!window.atob)),v},x=function(){var P={};return function(V){if(P[V]===void 0){var U=document.querySelector(V);if(window.HTMLIFrameElement&&U instanceof window.HTMLIFrameElement)try{U=U.contentDocument.head}catch{U=null}P[V]=U}return P[V]}}(),y=[];function S(P){for(var V=-1,U=0;U<y.length;U++)if(y[U].identifier===P){V=U;break}return V}function T(P,V){for(var U={},W=[],Y=0;Y<P.length;Y++){var J=P[Y],te=V.base?J[0]+V.base:J[0],re=U[te]||0,ae="".concat(te," ").concat(re);U[te]=re+1;var oe=S(ae),me={css:J[1],media:J[2],sourceMap:J[3]};oe!==-1?(y[oe].references++,y[oe].updater(me)):y.push({identifier:ae,updater:G(me,V),references:1}),W.push(ae)}return W}function I(P){var V=document.createElement("style"),U=P.attributes||{};if(U.nonce===void 0){var W=m.nc;W&&(U.nonce=W)}if(Object.keys(U).forEach(function(J){V.setAttribute(J,U[J])}),typeof P.insert=="function")P.insert(V);else{var Y=x(P.insert||"head");if(!Y)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");Y.appendChild(V)}return V}var F,N=(F=[],function(P,V){return F[P]=V,F.filter(Boolean).join(`
`)});function L(P,V,U,W){var Y=U?"":W.media?"@media ".concat(W.media," {").concat(W.css,"}"):W.css;if(P.styleSheet)P.styleSheet.cssText=N(V,Y);else{var J=document.createTextNode(Y),te=P.childNodes;te[V]&&P.removeChild(te[V]),te.length?P.insertBefore(J,te[V]):P.appendChild(J)}}function B(P,V,U){var W=U.css,Y=U.media,J=U.sourceMap;if(Y?P.setAttribute("media",Y):P.removeAttribute("media"),J&&typeof btoa<"u"&&(W+=`
/*# sourceMappingURL=data:application/json;base64,`.concat(btoa(unescape(encodeURIComponent(JSON.stringify(J))))," */")),P.styleSheet)P.styleSheet.cssText=W;else{for(;P.firstChild;)P.removeChild(P.firstChild);P.appendChild(document.createTextNode(W))}}var z=null,H=0;function G(P,V){var U,W,Y;if(V.singleton){var J=H++;U=z||(z=I(V)),W=L.bind(null,U,J,!1),Y=L.bind(null,U,J,!0)}else U=I(V),W=B.bind(null,U,V),Y=function(){(function(te){if(te.parentNode===null)return!1;te.parentNode.removeChild(te)})(U)};return W(P),function(te){if(te){if(te.css===P.css&&te.media===P.media&&te.sourceMap===P.sourceMap)return;W(P=te)}else Y()}}f.exports=function(P,V){(V=V||{}).singleton||typeof V.singleton=="boolean"||(V.singleton=A());var U=T(P=P||[],V);return function(W){if(W=W||[],Object.prototype.toString.call(W)==="[object Array]"){for(var Y=0;Y<U.length;Y++){var J=S(U[Y]);y[J].references--}for(var te=T(W,V),re=0;re<U.length;re++){var ae=S(U[re]);y[ae].references===0&&(y[ae].updater(),y.splice(ae,1))}U=te}}}}},l={};function u(f){var b=l[f];if(b!==void 0)return b.exports;var m=l[f]={id:f,exports:{}};return r[f](m,m.exports,u),m.exports}u.n=f=>{var b=f&&f.__esModule?()=>f.default:()=>f;return u.d(b,{a:b}),b},u.d=(f,b)=>{for(var m in b)u.o(b,m)&&!u.o(f,m)&&Object.defineProperty(f,m,{enumerable:!0,get:b[m]})},u.o=(f,b)=>Object.prototype.hasOwnProperty.call(f,b),u.nc=void 0;var p={};return(()=>{let f;u.d(p,{default:()=>Gg});try{f={window,document}}catch{f={window:{},document:{}}}const b=f,m=function(){try{return navigator.userAgent.toLowerCase()}catch{return""}}();var v;const A={isMac:x(m),isWindows:(v=m,v.indexOf("windows")>-1),isGecko:function(s){return!!s.match(/gecko\/\d+/)}(m),isSafari:function(s){return s.indexOf(" applewebkit/")>-1&&s.indexOf("chrome")===-1}(m),isiOS:function(s){return!!s.match(/iphone|ipad/i)||x(s)&&navigator.maxTouchPoints>0}(m),isAndroid:function(s){return s.indexOf("android")>-1}(m),isBlink:function(s){return s.indexOf("chrome/")>-1&&s.indexOf("edge/")<0}(m),get isMediaForcedColors(){return!!b.window.matchMedia&&b.window.matchMedia("(forced-colors: active)").matches},get isMotionReduced(){return!!b.window.matchMedia&&b.window.matchMedia("(prefers-reduced-motion)").matches},features:{isRegExpUnicodePropertySupported:function(){let s=!1;try{s="ć".search(new RegExp("[\\p{L}]","u"))===0}catch{}return s}()}};function x(s){return s.indexOf("macintosh")>-1}function y(s,e,t,o){t=t||function(g,k){return g===k};const a=Array.isArray(s)?s:Array.prototype.slice.call(s),c=Array.isArray(e)?e:Array.prototype.slice.call(e),d=function(g,k,w){const C=S(g,k,w);if(C===-1)return{firstIndex:-1,lastIndexOld:-1,lastIndexNew:-1};const E=T(g,C),D=T(k,C),M=S(E,D,w),R=g.length-M,j=k.length-M;return{firstIndex:C,lastIndexOld:R,lastIndexNew:j}}(a,c,t);return o?function(g,k){const{firstIndex:w,lastIndexOld:C,lastIndexNew:E}=g;if(w===-1)return Array(k).fill("equal");let D=[];return w>0&&(D=D.concat(Array(w).fill("equal"))),E-w>0&&(D=D.concat(Array(E-w).fill("insert"))),C-w>0&&(D=D.concat(Array(C-w).fill("delete"))),E<k&&(D=D.concat(Array(k-E).fill("equal"))),D}(d,c.length):function(g,k){const w=[],{firstIndex:C,lastIndexOld:E,lastIndexNew:D}=k;return D-C>0&&w.push({index:C,type:"insert",values:g.slice(C,D)}),E-C>0&&w.push({index:C+(D-C),type:"delete",howMany:E-C}),w}(c,d)}function S(s,e,t){for(let o=0;o<Math.max(s.length,e.length);o++)if(s[o]===void 0||e[o]===void 0||!t(s[o],e[o]))return o;return-1}function T(s,e){return s.slice(e).reverse()}function I(s,e,t){t=t||function(R,j){return R===j};const o=s.length,a=e.length;if(o>200||a>200||o+a>300)return I.fastDiff(s,e,t,!0);let c,d;if(a<o){const R=s;s=e,e=R,c="delete",d="insert"}else c="insert",d="delete";const h=s.length,g=e.length,k=g-h,w={},C={};function E(R){const j=(C[R-1]!==void 0?C[R-1]:-1)+1,q=C[R+1]!==void 0?C[R+1]:-1,Z=j>q?-1:1;w[R+Z]&&(w[R]=w[R+Z].slice(0)),w[R]||(w[R]=[]),w[R].push(j>q?c:d);let se=Math.max(j,q),fe=se-R;for(;fe<h&&se<g&&t(s[fe],e[se]);)fe++,se++,w[R].push("equal");return se}let D,M=0;do{for(D=-M;D<k;D++)C[D]=E(D);for(D=k+M;D>k;D--)C[D]=E(D);C[k]=E(k),M++}while(C[k]!==g);return w[k].slice(1)}I.fastDiff=y;const F=function(){return function s(){s.called=!0}};class N{constructor(e,t){this.source=e,this.name=t,this.path=[],this.stop=F(),this.off=F()}}const L=new Array(256).fill("").map((s,e)=>("0"+e.toString(16)).slice(-2));function B(){const s=4294967296*Math.random()>>>0,e=4294967296*Math.random()>>>0,t=4294967296*Math.random()>>>0,o=4294967296*Math.random()>>>0;return"e"+L[255&s]+L[s>>8&255]+L[s>>16&255]+L[s>>24&255]+L[255&e]+L[e>>8&255]+L[e>>16&255]+L[e>>24&255]+L[255&t]+L[t>>8&255]+L[t>>16&255]+L[t>>24&255]+L[255&o]+L[o>>8&255]+L[o>>16&255]+L[o>>24&255]}const z={get(s="normal"){return typeof s!="number"?this[s]||this.normal:s},highest:1e5,high:1e3,normal:0,low:-1e3,lowest:-1e5};function H(s,e){const t=z.get(e.priority);for(let o=0;o<s.length;o++)if(z.get(s[o].priority)<t)return void s.splice(o,0,e);s.push(e)}const G="https://ckeditor.com/docs/ckeditor5/latest/support/error-codes.html";class P extends Error{constructor(e,t,o){super(function(a,c){const d=new WeakSet,h=(w,C)=>{if(typeof C=="object"&&C!==null){if(d.has(C))return`[object ${C.constructor.name}]`;d.add(C)}return C},g=c?` ${JSON.stringify(c,h)}`:"",k=W(a);return a+g+k}(e,o)),this.name="CKEditorError",this.context=t,this.data=o}is(e){return e==="CKEditorError"}static rethrowUnexpectedError(e,t){if(e.is&&e.is("CKEditorError"))throw e;const o=new P(e.message,t);throw o.stack=e.stack,o}}function V(s,e){console.warn(...Y(s,e))}function U(s,e){console.error(...Y(s,e))}function W(s){return`
Read more: ${G}#error-${s}`}function Y(s,e){const t=W(s);return e?[s,e,t]:[s,t]}const J="41.4.2",te=new Date(2024,4,17);if(globalThis.CKEDITOR_VERSION)throw new P("ckeditor-duplicated-modules",null);globalThis.CKEDITOR_VERSION=J;const re=Symbol("listeningTo"),ae=Symbol("emitterId"),oe=Symbol("delegations"),me=ie(Object);function ie(s){return s?class extends s{on(e,t,o){this.listenTo(this,e,t,o)}once(e,t,o){let a=!1;this.listenTo(this,e,(c,...d)=>{a||(a=!0,c.off(),t.call(this,c,...d))},o)}off(e,t){this.stopListening(this,e,t)}listenTo(e,t,o,a={}){let c,d;this[re]||(this[re]={});const h=this[re];Ee(e)||Ne(e);const g=Ee(e);(c=h[g])||(c=h[g]={emitter:e,callbacks:{}}),(d=c.callbacks[t])||(d=c.callbacks[t]=[]),d.push(o),function(k,w,C,E,D){w._addEventListener?w._addEventListener(C,E,D):k._addEventListener.call(w,C,E,D)}(this,e,t,o,a)}stopListening(e,t,o){const a=this[re];let c=e&&Ee(e);const d=a&&c?a[c]:void 0,h=d&&t?d.callbacks[t]:void 0;if(!(!a||e&&!d||t&&!h))if(o)Re(this,e,t,o),h.indexOf(o)!==-1&&(h.length===1?delete d.callbacks[t]:Re(this,e,t,o));else if(h){for(;o=h.pop();)Re(this,e,t,o);delete d.callbacks[t]}else if(d){for(t in d.callbacks)this.stopListening(e,t);delete a[c]}else{for(c in a)this.stopListening(a[c].emitter);delete this[re]}}fire(e,...t){try{const o=e instanceof N?e:new N(this,e),a=o.name;let c=ge(this,a);if(o.path.push(this),c){const h=[o,...t];c=Array.from(c);for(let g=0;g<c.length&&(c[g].callback.apply(this,h),o.off.called&&(delete o.off.called,this._removeEventListener(a,c[g].callback)),!o.stop.called);g++);}const d=this[oe];if(d){const h=d.get(a),g=d.get("*");h&&je(h,o,t),g&&je(g,o,t)}return o.return}catch(o){P.rethrowUnexpectedError(o,this)}}delegate(...e){return{to:(t,o)=>{this[oe]||(this[oe]=new Map),e.forEach(a=>{const c=this[oe].get(a);c?c.set(t,o):this[oe].set(a,new Map([[t,o]]))})}}}stopDelegating(e,t){if(this[oe])if(e)if(t){const o=this[oe].get(e);o&&o.delete(t)}else this[oe].delete(e);else this[oe].clear()}_addEventListener(e,t,o){(function(d,h){const g=Je(d);if(g[h])return;let k=h,w=null;const C=[];for(;k!==""&&!g[k];)g[k]={callbacks:[],childEvents:[]},C.push(g[k]),w&&g[k].childEvents.push(w),w=k,k=k.substr(0,k.lastIndexOf(":"));if(k!==""){for(const E of C)E.callbacks=g[k].callbacks.slice();g[k].childEvents.push(w)}})(this,e);const a=Xe(this,e),c={callback:t,priority:z.get(o.priority)};for(const d of a)H(d,c)}_removeEventListener(e,t){const o=Xe(this,e);for(const a of o)for(let c=0;c<a.length;c++)a[c].callback==t&&(a.splice(c,1),c--)}}:me}function Ne(s,e){s[ae]||(s[ae]=e||B())}function Ee(s){return s[ae]}function Je(s){return s._events||Object.defineProperty(s,"_events",{value:{}}),s._events}function Xe(s,e){const t=Je(s)[e];if(!t)return[];let o=[t.callbacks];for(let a=0;a<t.childEvents.length;a++){const c=Xe(s,t.childEvents[a]);o=o.concat(c)}return o}function ge(s,e){let t;return s._events&&(t=s._events[e])&&t.callbacks.length?t.callbacks:e.indexOf(":")>-1?ge(s,e.substr(0,e.lastIndexOf(":"))):null}function je(s,e,t){for(let[o,a]of s){a?typeof a=="function"&&(a=a(e.name)):a=e.name;const c=new N(e.source,a);c.path=[...e.path],o.fire(c,...t)}}function Re(s,e,t,o){e._removeEventListener?e._removeEventListener(t,o):s._removeEventListener.call(e,t,o)}["on","once","off","listenTo","stopListening","fire","delegate","stopDelegating","_addEventListener","_removeEventListener"].forEach(s=>{ie[s]=me.prototype[s]});const $e=function(s){var e=typeof s;return s!=null&&(e=="object"||e=="function")},vt=Symbol("observableProperties"),st=Symbol("boundObservables"),Ot=Symbol("boundProperties"),nt=Symbol("decoratedMethods"),yt=Symbol("decoratedOriginal"),Wt=K(ie());function K(s){return s?class extends s{set(e,t){if($e(e))return void Object.keys(e).forEach(a=>{this.set(a,e[a])},this);ee(this);const o=this[vt];if(e in this&&!o.has(e))throw new P("observable-set-cannot-override",this);Object.defineProperty(this,e,{enumerable:!0,configurable:!0,get:()=>o.get(e),set(a){const c=o.get(e);let d=this.fire(`set:${e}`,e,a,c);d===void 0&&(d=a),c===d&&o.has(e)||(o.set(e,d),this.fire(`change:${e}`,e,d,c))}}),this[e]=t}bind(...e){if(!e.length||!_e(e))throw new P("observable-bind-wrong-properties",this);if(new Set(e).size!==e.length)throw new P("observable-bind-duplicate-properties",this);ee(this);const t=this[Ot];e.forEach(a=>{if(t.has(a))throw new P("observable-bind-rebind",this)});const o=new Map;return e.forEach(a=>{const c={property:a,to:[]};t.set(a,c),o.set(a,c)}),{to:de,toMany:be,_observable:this,_bindProperties:e,_to:[],_bindings:o}}unbind(...e){if(!this[vt])return;const t=this[Ot],o=this[st];if(e.length){if(!_e(e))throw new P("observable-unbind-wrong-properties",this);e.forEach(a=>{const c=t.get(a);c&&(c.to.forEach(([d,h])=>{const g=o.get(d),k=g[h];k.delete(c),k.size||delete g[h],Object.keys(g).length||(o.delete(d),this.stopListening(d,"change"))}),t.delete(a))})}else o.forEach((a,c)=>{this.stopListening(c,"change")}),o.clear(),t.clear()}decorate(e){ee(this);const t=this[e];if(!t)throw new P("observablemixin-cannot-decorate-undefined",this,{object:this,methodName:e});this.on(e,(o,a)=>{o.return=t.apply(this,a)}),this[e]=function(...o){return this.fire(e,o)},this[e][yt]=t,this[nt]||(this[nt]=[]),this[nt].push(e)}stopListening(e,t,o){if(!e&&this[nt]){for(const a of this[nt])this[a]=this[a][yt];delete this[nt]}super.stopListening(e,t,o)}}:Wt}function ee(s){s[vt]||(Object.defineProperty(s,vt,{value:new Map}),Object.defineProperty(s,st,{value:new Map}),Object.defineProperty(s,Ot,{value:new Map}))}function de(...s){const e=function(...c){if(!c.length)throw new P("observable-bind-to-parse-error",null);const d={to:[]};let h;return typeof c[c.length-1]=="function"&&(d.callback=c.pop()),c.forEach(g=>{if(typeof g=="string")h.properties.push(g);else{if(typeof g!="object")throw new P("observable-bind-to-parse-error",null);h={observable:g,properties:[]},d.to.push(h)}}),d}(...s),t=Array.from(this._bindings.keys()),o=t.length;if(!e.callback&&e.to.length>1)throw new P("observable-bind-to-no-callback",this);if(o>1&&e.callback)throw new P("observable-bind-to-extra-callback",this);var a;e.to.forEach(c=>{if(c.properties.length&&c.properties.length!==o)throw new P("observable-bind-to-properties-length",this);c.properties.length||(c.properties=this._bindProperties)}),this._to=e.to,e.callback&&(this._bindings.get(t[0]).callback=e.callback),a=this._observable,this._to.forEach(c=>{const d=a[st];let h;d.get(c.observable)||a.listenTo(c.observable,"change",(g,k)=>{h=d.get(c.observable)[k],h&&h.forEach(w=>{Se(a,w.property)})})}),function(c){let d;c._bindings.forEach((h,g)=>{c._to.forEach(k=>{d=k.properties[h.callback?0:c._bindProperties.indexOf(g)],h.to.push([k.observable,d]),function(w,C,E,D){const M=w[st],R=M.get(E),j=R||{};j[D]||(j[D]=new Set),j[D].add(C),R||M.set(E,j)}(c._observable,h,k.observable,d)})})}(this),this._bindProperties.forEach(c=>{Se(this._observable,c)})}function be(s,e,t){if(this._bindings.size>1)throw new P("observable-bind-to-many-not-one-binding",this);this.to(...function(o,a){const c=o.map(d=>[d,a]);return Array.prototype.concat.apply([],c)}(s,e),t)}function _e(s){return s.every(e=>typeof e=="string")}function Se(s,e){const t=s[Ot].get(e);let o;t.callback?o=t.callback.apply(s,t.to.map(a=>a[0][a[1]])):(o=t.to[0],o=o[0][o[1]]),Object.prototype.hasOwnProperty.call(s,e)?s[e]=o:s.set(e,o)}["set","bind","unbind","decorate","on","once","off","listenTo","stopListening","fire","delegate","stopDelegating","_addEventListener","_removeEventListener"].forEach(s=>{K[s]=Wt.prototype[s]});class Oe{constructor(){this._replacedElements=[]}replace(e,t){this._replacedElements.push({element:e,newElement:t}),e.style.display="none",t&&e.parentNode.insertBefore(t,e.nextSibling)}restore(){this._replacedElements.forEach(({element:e,newElement:t})=>{e.style.display="",t&&t.remove()}),this._replacedElements=[]}}function Ae(s){let e=0;for(const t of s)e++;return e}function we(s,e){const t=Math.min(s.length,e.length);for(let o=0;o<t;o++)if(s[o]!=e[o])return o;return s.length==e.length?"same":s.length<e.length?"prefix":"extension"}function he(s){return!(!s||!s[Symbol.iterator])}const Te=typeof Sn=="object"&&Sn&&Sn.Object===Object&&Sn;var Fe=typeof self=="object"&&self&&self.Object===Object&&self;const Le=Te||Fe||Function("return this")(),He=Le.Symbol;var et=Object.prototype,at=et.hasOwnProperty,Dt=et.toString,ht=He?He.toStringTag:void 0;const Tn=function(s){var e=at.call(s,ht),t=s[ht];try{s[ht]=void 0;var o=!0}catch{}var a=Dt.call(s);return o&&(e?s[ht]=t:delete s[ht]),a};var To=Object.prototype.toString;const Pr=function(s){return To.call(s)};var ho=He?He.toStringTag:void 0;const Dn=function(s){return s==null?s===void 0?"[object Undefined]":"[object Null]":ho&&ho in Object(s)?Tn(s):Pr(s)},It=Array.isArray,Bt=function(s){return s!=null&&typeof s=="object"},Do=function(s){return typeof s=="string"||!It(s)&&Bt(s)&&Dn(s)=="[object String]"};function Xt(s,e,t={},o=[]){const a=t&&t.xmlns,c=a?s.createElementNS(a,e):s.createElement(e);for(const d in t)c.setAttribute(d,t[d]);!Do(o)&&he(o)||(o=[o]);for(let d of o)Do(d)&&(d=s.createTextNode(d)),c.appendChild(d);return c}const nr=function(s,e){return function(t){return s(e(t))}},or=nr(Object.getPrototypeOf,Object);var ir=Function.prototype,Es=Object.prototype,Ii=ir.toString,Ss=Es.hasOwnProperty,Ts=Ii.call(Object);const An=function(s){if(!Bt(s)||Dn(s)!="[object Object]")return!1;var e=or(s);if(e===null)return!0;var t=Ss.call(e,"constructor")&&e.constructor;return typeof t=="function"&&t instanceof t&&Ii.call(t)==Ts},Mi=function(){this.__data__=[],this.size=0},Oi=function(s,e){return s===e||s!=s&&e!=e},po=function(s,e){for(var t=s.length;t--;)if(Oi(s[t][0],e))return t;return-1};var fc=Array.prototype.splice;const mc=function(s){var e=this.__data__,t=po(e,s);return!(t<0)&&(t==e.length-1?e.pop():fc.call(e,t,1),--this.size,!0)},gc=function(s){var e=this.__data__,t=po(e,s);return t<0?void 0:e[t][1]},za=function(s){return po(this.__data__,s)>-1},Ds=function(s,e){var t=this.__data__,o=po(t,s);return o<0?(++this.size,t.push([s,e])):t[o][1]=e,this};function en(s){var e=-1,t=s==null?0:s.length;for(this.clear();++e<t;){var o=s[e];this.set(o[0],o[1])}}en.prototype.clear=Mi,en.prototype.delete=mc,en.prototype.get=gc,en.prototype.has=za,en.prototype.set=Ds;const Nr=en,bc=function(){this.__data__=new Nr,this.size=0},kc=function(s){var e=this.__data__,t=e.delete(s);return this.size=e.size,t},_c=function(s){return this.__data__.get(s)},wc=function(s){return this.__data__.has(s)},tn=function(s){if(!$e(s))return!1;var e=Dn(s);return e=="[object Function]"||e=="[object GeneratorFunction]"||e=="[object AsyncFunction]"||e=="[object Proxy]"},Is=Le["__core-js_shared__"];var ja=function(){var s=/[^.]+$/.exec(Is&&Is.keys&&Is.keys.IE_PROTO||"");return s?"Symbol(src)_1."+s:""}();const vc=function(s){return!!ja&&ja in s};var Ac=Function.prototype.toString;const pi=function(s){if(s!=null){try{return Ac.call(s)}catch{}try{return s+""}catch{}}return""};var Vn=/^\[object .+?Constructor\]$/,Cc=Function.prototype,yc=Object.prototype,xc=Cc.toString,Ec=yc.hasOwnProperty,Sc=RegExp("^"+xc.call(Ec).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");const Lr=function(s){return!(!$e(s)||vc(s))&&(tn(s)?Sc:Vn).test(pi(s))},$a=function(s,e){return s==null?void 0:s[e]},fo=function(s,e){var t=$a(s,e);return Lr(t)?t:void 0},Hn=fo(Le,"Map"),fi=fo(Object,"create"),Tc=function(){this.__data__=fi?fi(null):{},this.size=0},Dc=function(s){var e=this.has(s)&&delete this.__data__[s];return this.size-=e?1:0,e};var Ic=Object.prototype.hasOwnProperty;const Mc=function(s){var e=this.__data__;if(fi){var t=e[s];return t==="__lodash_hash_undefined__"?void 0:t}return Ic.call(e,s)?e[s]:void 0};var Oc=Object.prototype.hasOwnProperty;const Rr=function(s){var e=this.__data__;return fi?e[s]!==void 0:Oc.call(e,s)},Ms=function(s,e){var t=this.__data__;return this.size+=this.has(s)?0:1,t[s]=fi&&e===void 0?"__lodash_hash_undefined__":e,this};function mo(s){var e=-1,t=s==null?0:s.length;for(this.clear();++e<t;){var o=s[e];this.set(o[0],o[1])}}mo.prototype.clear=Tc,mo.prototype.delete=Dc,mo.prototype.get=Mc,mo.prototype.has=Rr,mo.prototype.set=Ms;const Os=mo,Va=function(){this.size=0,this.__data__={hash:new Os,map:new(Hn||Nr),string:new Os}},Bc=function(s){var e=typeof s;return e=="string"||e=="number"||e=="symbol"||e=="boolean"?s!=="__proto__":s===null},Fr=function(s,e){var t=s.__data__;return Bc(e)?t[typeof e=="string"?"string":"hash"]:t.map},Pc=function(s){var e=Fr(this,s).delete(s);return this.size-=e?1:0,e},Nc=function(s){return Fr(this,s).get(s)},Bs=function(s){return Fr(this,s).has(s)},Lc=function(s,e){var t=Fr(this,s),o=t.size;return t.set(s,e),this.size+=t.size==o?0:1,this};function Bi(s){var e=-1,t=s==null?0:s.length;for(this.clear();++e<t;){var o=s[e];this.set(o[0],o[1])}}Bi.prototype.clear=Va,Bi.prototype.delete=Pc,Bi.prototype.get=Nc,Bi.prototype.has=Bs,Bi.prototype.set=Lc;const Wo=Bi,Io=function(s,e){var t=this.__data__;if(t instanceof Nr){var o=t.__data__;if(!Hn||o.length<199)return o.push([s,e]),this.size=++t.size,this;t=this.__data__=new Wo(o)}return t.set(s,e),this.size=t.size,this};function Un(s){var e=this.__data__=new Nr(s);this.size=e.size}Un.prototype.clear=bc,Un.prototype.delete=kc,Un.prototype.get=_c,Un.prototype.has=wc,Un.prototype.set=Io;const qn=Un,Rc=function(s,e){for(var t=-1,o=s==null?0:s.length;++t<o&&e(s[t],t,s)!==!1;);return s},to=function(){try{var s=fo(Object,"defineProperty");return s({},"",{}),s}catch{}}(),zr=function(s,e,t){e=="__proto__"&&to?to(s,e,{configurable:!0,enumerable:!0,value:t,writable:!0}):s[e]=t};var Fc=Object.prototype.hasOwnProperty;const Ps=function(s,e,t){var o=s[e];Fc.call(s,e)&&Oi(o,t)&&(t!==void 0||e in s)||zr(s,e,t)},Pi=function(s,e,t,o){var a=!t;t||(t={});for(var c=-1,d=e.length;++c<d;){var h=e[c],g=o?o(t[h],s[h],h,t,s):void 0;g===void 0&&(g=s[h]),a?zr(t,h,g):Ps(t,h,g)}return t},Ha=function(s,e){for(var t=-1,o=Array(s);++t<s;)o[t]=e(t);return o},In=function(s){return Bt(s)&&Dn(s)=="[object Arguments]"};var Ns=Object.prototype,Ua=Ns.hasOwnProperty,jr=Ns.propertyIsEnumerable;const Ni=In(function(){return arguments}())?In:function(s){return Bt(s)&&Ua.call(s,"callee")&&!jr.call(s,"callee")},$r=function(){return!1};var qa=n&&!n.nodeType&&n,Ls=qa&&!0&&i&&!i.nodeType&&i,Vr=Ls&&Ls.exports===qa?Le.Buffer:void 0;const Li=(Vr?Vr.isBuffer:void 0)||$r;var Ko=/^(?:0|[1-9]\d*)$/;const rr=function(s,e){var t=typeof s;return!!(e=e??9007199254740991)&&(t=="number"||t!="symbol"&&Ko.test(s))&&s>-1&&s%1==0&&s<e},sr=function(s){return typeof s=="number"&&s>-1&&s%1==0&&s<=9007199254740991};var Nt={};Nt["[object Float32Array]"]=Nt["[object Float64Array]"]=Nt["[object Int8Array]"]=Nt["[object Int16Array]"]=Nt["[object Int32Array]"]=Nt["[object Uint8Array]"]=Nt["[object Uint8ClampedArray]"]=Nt["[object Uint16Array]"]=Nt["[object Uint32Array]"]=!0,Nt["[object Arguments]"]=Nt["[object Array]"]=Nt["[object ArrayBuffer]"]=Nt["[object Boolean]"]=Nt["[object DataView]"]=Nt["[object Date]"]=Nt["[object Error]"]=Nt["[object Function]"]=Nt["[object Map]"]=Nt["[object Number]"]=Nt["[object Object]"]=Nt["[object RegExp]"]=Nt["[object Set]"]=Nt["[object String]"]=Nt["[object WeakMap]"]=!1;const zc=function(s){return Bt(s)&&sr(s.length)&&!!Nt[Dn(s)]},O=function(s){return function(e){return s(e)}};var $=n&&!n.nodeType&&n,Q=$&&!0&&i&&!i.nodeType&&i,pe=Q&&Q.exports===$&&Te.process;const Ye=function(){try{var s=Q&&Q.require&&Q.require("util").types;return s||pe&&pe.binding&&pe.binding("util")}catch{}}();var Ue=Ye&&Ye.isTypedArray;const ct=Ue?O(Ue):zc;var bt=Object.prototype.hasOwnProperty;const sn=function(s,e){var t=It(s),o=!t&&Ni(s),a=!t&&!o&&Li(s),c=!t&&!o&&!a&&ct(s),d=t||o||a||c,h=d?Ha(s.length,String):[],g=h.length;for(var k in s)!e&&!bt.call(s,k)||d&&(k=="length"||a&&(k=="offset"||k=="parent")||c&&(k=="buffer"||k=="byteLength"||k=="byteOffset")||rr(k,g))||h.push(k);return h};var Mt=Object.prototype;const kn=function(s){var e=s&&s.constructor;return s===(typeof e=="function"&&e.prototype||Mt)},Gn=nr(Object.keys,Object);var un=Object.prototype.hasOwnProperty;const Mn=function(s){if(!kn(s))return Gn(s);var e=[];for(var t in Object(s))un.call(s,t)&&t!="constructor"&&e.push(t);return e},an=function(s){return s!=null&&sr(s.length)&&!tn(s)},go=function(s){return an(s)?sn(s):Mn(s)},mi=function(s,e){return s&&Pi(e,go(e),s)},ar=function(s){var e=[];if(s!=null)for(var t in Object(s))e.push(t);return e};var xu=Object.prototype.hasOwnProperty;const Ga=function(s){if(!$e(s))return ar(s);var e=kn(s),t=[];for(var o in s)(o!="constructor"||!e&&xu.call(s,o))&&t.push(o);return t},gi=function(s){return an(s)?sn(s,!0):Ga(s)},A4=function(s,e){return s&&Pi(e,gi(e),s)};var ow=n&&!n.nodeType&&n,iw=ow&&!0&&i&&!i.nodeType&&i,rw=iw&&iw.exports===ow?Le.Buffer:void 0,sw=rw?rw.allocUnsafe:void 0;const aw=function(s,e){if(e)return s.slice();var t=s.length,o=sw?sw(t):new s.constructor(t);return s.copy(o),o},lw=function(s,e){var t=-1,o=s.length;for(e||(e=Array(o));++t<o;)e[t]=s[t];return e},C4=function(s,e){for(var t=-1,o=s==null?0:s.length,a=0,c=[];++t<o;){var d=s[t];e(d,t,s)&&(c[a++]=d)}return c},cw=function(){return[]};var y4=Object.prototype.propertyIsEnumerable,dw=Object.getOwnPropertySymbols;const Vf=dw?function(s){return s==null?[]:(s=Object(s),C4(dw(s),function(e){return y4.call(s,e)}))}:cw,x4=function(s,e){return Pi(s,Vf(s),e)},uw=function(s,e){for(var t=-1,o=e.length,a=s.length;++t<o;)s[a+t]=e[t];return s},hw=Object.getOwnPropertySymbols?function(s){for(var e=[];s;)uw(e,Vf(s)),s=or(s);return e}:cw,E4=function(s,e){return Pi(s,hw(s),e)},pw=function(s,e,t){var o=e(s);return It(s)?o:uw(o,t(s))},Hf=function(s){return pw(s,go,Vf)},S4=function(s){return pw(s,gi,hw)},Uf=fo(Le,"DataView"),qf=fo(Le,"Promise"),Gf=fo(Le,"Set"),Wf=fo(Le,"WeakMap");var fw="[object Map]",mw="[object Promise]",gw="[object Set]",bw="[object WeakMap]",kw="[object DataView]",T4=pi(Uf),D4=pi(Hn),I4=pi(qf),M4=pi(Gf),O4=pi(Wf),Rs=Dn;(Uf&&Rs(new Uf(new ArrayBuffer(1)))!=kw||Hn&&Rs(new Hn)!=fw||qf&&Rs(qf.resolve())!=mw||Gf&&Rs(new Gf)!=gw||Wf&&Rs(new Wf)!=bw)&&(Rs=function(s){var e=Dn(s),t=e=="[object Object]"?s.constructor:void 0,o=t?pi(t):"";if(o)switch(o){case T4:return kw;case D4:return fw;case I4:return mw;case M4:return gw;case O4:return bw}return e});const jc=Rs;var B4=Object.prototype.hasOwnProperty;const P4=function(s){var e=s.length,t=new s.constructor(e);return e&&typeof s[0]=="string"&&B4.call(s,"index")&&(t.index=s.index,t.input=s.input),t},Eu=Le.Uint8Array,Kf=function(s){var e=new s.constructor(s.byteLength);return new Eu(e).set(new Eu(s)),e},N4=function(s,e){var t=e?Kf(s.buffer):s.buffer;return new s.constructor(t,s.byteOffset,s.byteLength)};var L4=/\w*$/;const R4=function(s){var e=new s.constructor(s.source,L4.exec(s));return e.lastIndex=s.lastIndex,e};var _w=He?He.prototype:void 0,ww=_w?_w.valueOf:void 0;const F4=function(s){return ww?Object(ww.call(s)):{}},vw=function(s,e){var t=e?Kf(s.buffer):s.buffer;return new s.constructor(t,s.byteOffset,s.length)},z4=function(s,e,t){var o=s.constructor;switch(e){case"[object ArrayBuffer]":return Kf(s);case"[object Boolean]":case"[object Date]":return new o(+s);case"[object DataView]":return N4(s,t);case"[object Float32Array]":case"[object Float64Array]":case"[object Int8Array]":case"[object Int16Array]":case"[object Int32Array]":case"[object Uint8Array]":case"[object Uint8ClampedArray]":case"[object Uint16Array]":case"[object Uint32Array]":return vw(s,t);case"[object Map]":case"[object Set]":return new o;case"[object Number]":case"[object String]":return new o(s);case"[object RegExp]":return R4(s);case"[object Symbol]":return F4(s)}};var Aw=Object.create;const j4=function(){function s(){}return function(e){if(!$e(e))return{};if(Aw)return Aw(e);s.prototype=e;var t=new s;return s.prototype=void 0,t}}(),Cw=function(s){return typeof s.constructor!="function"||kn(s)?{}:j4(or(s))},$4=function(s){return Bt(s)&&jc(s)=="[object Map]"};var yw=Ye&&Ye.isMap;const V4=yw?O(yw):$4,H4=function(s){return Bt(s)&&jc(s)=="[object Set]"};var xw=Ye&&Ye.isSet;const U4=xw?O(xw):H4;var Ew="[object Arguments]",Sw="[object Function]",Tw="[object Object]",Kt={};Kt[Ew]=Kt["[object Array]"]=Kt["[object ArrayBuffer]"]=Kt["[object DataView]"]=Kt["[object Boolean]"]=Kt["[object Date]"]=Kt["[object Float32Array]"]=Kt["[object Float64Array]"]=Kt["[object Int8Array]"]=Kt["[object Int16Array]"]=Kt["[object Int32Array]"]=Kt["[object Map]"]=Kt["[object Number]"]=Kt[Tw]=Kt["[object RegExp]"]=Kt["[object Set]"]=Kt["[object String]"]=Kt["[object Symbol]"]=Kt["[object Uint8Array]"]=Kt["[object Uint8ClampedArray]"]=Kt["[object Uint16Array]"]=Kt["[object Uint32Array]"]=!0,Kt["[object Error]"]=Kt[Sw]=Kt["[object WeakMap]"]=!1;const Yf=function s(e,t,o,a,c,d){var h,g=1&t,k=2&t,w=4&t;if(o&&(h=c?o(e,a,c,d):o(e)),h!==void 0)return h;if(!$e(e))return e;var C=It(e);if(C){if(h=P4(e),!g)return lw(e,h)}else{var E=jc(e),D=E==Sw||E=="[object GeneratorFunction]";if(Li(e))return aw(e,g);if(E==Tw||E==Ew||D&&!c){if(h=k||D?{}:Cw(e),!g)return k?E4(e,A4(h,e)):x4(e,mi(h,e))}else{if(!Kt[E])return c?e:{};h=z4(e,E,g)}}d||(d=new qn);var M=d.get(e);if(M)return M;d.set(e,h),U4(e)?e.forEach(function(j){h.add(s(j,t,o,j,e,d))}):V4(e)&&e.forEach(function(j,q){h.set(q,s(j,t,o,q,e,d))});var R=C?void 0:(w?k?S4:Hf:k?gi:go)(e);return Rc(R||e,function(j,q){R&&(j=e[q=j]),Ps(h,q,s(j,t,o,q,e,d))}),h},Qf=function(s,e){return Yf(s,5,e=typeof e=="function"?e:void 0)},Fs=function(s){return Bt(s)&&s.nodeType===1&&!An(s)};class Dw{constructor(e,t){this._config={},t&&this.define(Iw(t)),e&&this._setObjectToTarget(this._config,e)}set(e,t){this._setToTarget(this._config,e,t)}define(e,t){this._setToTarget(this._config,e,t,!0)}get(e){return this._getFromSource(this._config,e)}*names(){for(const e of Object.keys(this._config))yield e}_setToTarget(e,t,o,a=!1){if(An(t))return void this._setObjectToTarget(e,t,a);const c=t.split(".");t=c.pop();for(const d of c)An(e[d])||(e[d]={}),e=e[d];if(An(o))return An(e[t])||(e[t]={}),e=e[t],void this._setObjectToTarget(e,o,a);a&&e[t]!==void 0||(e[t]=o)}_getFromSource(e,t){const o=t.split(".");t=o.pop();for(const a of o){if(!An(e[a])){e=null;break}e=e[a]}return e?Iw(e[t]):void 0}_setObjectToTarget(e,t,o){Object.keys(t).forEach(a=>{this._setToTarget(e,a,t[a],o)})}}function Iw(s){return Qf(s,q4)}function q4(s){return Fs(s)||typeof s=="function"?s:void 0}function Hr(s){if(s){if(s.defaultView)return s instanceof s.defaultView.Document;if(s.ownerDocument&&s.ownerDocument.defaultView)return s instanceof s.ownerDocument.defaultView.Node}return!1}function Su(s){const e=Object.prototype.toString.apply(s);return e=="[object Window]"||e=="[object global]"}const Mw=Yo(ie());function Yo(s){return s?class extends s{listenTo(e,t,o,a={}){if(Hr(e)||Su(e)){const c={capture:!!a.useCapture,passive:!!a.usePassive},d=this._getProxyEmitter(e,c)||new G4(e,c);this.listenTo(d,t,o,a)}else super.listenTo(e,t,o,a)}stopListening(e,t,o){if(Hr(e)||Su(e)){const a=this._getAllProxyEmitters(e);for(const c of a)this.stopListening(c,t,o)}else super.stopListening(e,t,o)}_getProxyEmitter(e,t){return function(o,a){const c=o[re];return c&&c[a]?c[a].emitter:null}(this,Ow(e,t))}_getAllProxyEmitters(e){return[{capture:!1,passive:!1},{capture:!1,passive:!0},{capture:!0,passive:!1},{capture:!0,passive:!0}].map(t=>this._getProxyEmitter(e,t)).filter(t=>!!t)}}:Mw}["_getProxyEmitter","_getAllProxyEmitters","on","once","off","listenTo","stopListening","fire","delegate","stopDelegating","_addEventListener","_removeEventListener"].forEach(s=>{Yo[s]=Mw.prototype[s]});class G4 extends ie(){constructor(e,t){super(),Ne(this,Ow(e,t)),this._domNode=e,this._options=t}attach(e){if(this._domListeners&&this._domListeners[e])return;const t=this._createDomListener(e);this._domNode.addEventListener(e,t,this._options),this._domListeners||(this._domListeners={}),this._domListeners[e]=t}detach(e){let t;!this._domListeners[e]||(t=this._events[e])&&t.callbacks.length||this._domListeners[e].removeListener()}_addEventListener(e,t,o){this.attach(e),ie().prototype._addEventListener.call(this,e,t,o)}_removeEventListener(e,t){ie().prototype._removeEventListener.call(this,e,t),this.detach(e)}_createDomListener(e){const t=o=>{this.fire(e,o)};return t.removeListener=()=>{this._domNode.removeEventListener(e,t,this._options),delete this._domListeners[e]},t}}function Ow(s,e){let t=function(o){return o["data-ck-expando"]||(o["data-ck-expando"]=B())}(s);for(const o of Object.keys(e).sort())e[o]&&(t+="-"+o);return t}function Bw(s){const e=s.ownerDocument.defaultView.getComputedStyle(s);return{top:parseInt(e.borderTopWidth,10),right:parseInt(e.borderRightWidth,10),bottom:parseInt(e.borderBottomWidth,10),left:parseInt(e.borderLeftWidth,10)}}function hn(s){return Object.prototype.toString.call(s)=="[object Text]"}function Tu(s){return Object.prototype.toString.apply(s)=="[object Range]"}function Pw(s){return s&&s.parentNode?s.offsetParent===b.document.body?null:s.offsetParent:null}const Nw=["top","right","bottom","left","width","height"];class pt{constructor(e){const t=Tu(e);if(Object.defineProperty(this,"_source",{value:e._source||e,writable:!0,enumerable:!1}),Zf(e)||t)if(t){const o=pt.getDomRangeRects(e);Du(this,pt.getBoundingRect(o))}else Du(this,e.getBoundingClientRect());else if(Su(e)){const{innerWidth:o,innerHeight:a}=e;Du(this,{top:0,right:o,bottom:a,left:0,width:o,height:a})}else Du(this,e)}clone(){return new pt(this)}moveTo(e,t){return this.top=t,this.right=e+this.width,this.bottom=t+this.height,this.left=e,this}moveBy(e,t){return this.top+=t,this.right+=e,this.left+=e,this.bottom+=t,this}getIntersection(e){const t={top:Math.max(this.top,e.top),right:Math.min(this.right,e.right),bottom:Math.min(this.bottom,e.bottom),left:Math.max(this.left,e.left),width:0,height:0};if(t.width=t.right-t.left,t.height=t.bottom-t.top,t.width<0||t.height<0)return null;{const o=new pt(t);return o._source=this._source,o}}getIntersectionArea(e){const t=this.getIntersection(e);return t?t.getArea():0}getArea(){return this.width*this.height}getVisible(){const e=this._source;let t=this.clone();if(Lw(e))return t;let o,a=e,c=e.parentNode||e.commonAncestorContainer;for(;c&&!Lw(c);){const h=((d=c)instanceof HTMLElement?d.ownerDocument.defaultView.getComputedStyle(d).overflow:"visible")==="visible";a instanceof HTMLElement&&Rw(a)==="absolute"&&(o=a);const g=Rw(c);if(h||o&&(g==="relative"&&h||g!=="relative")){a=c,c=c.parentNode;continue}const k=new pt(c),w=t.getIntersection(k);if(!w)return null;w.getArea()<t.getArea()&&(t=w),a=c,c=c.parentNode}var d;return t}isEqual(e){for(const t of Nw)if(this[t]!==e[t])return!1;return!0}contains(e){const t=this.getIntersection(e);return!(!t||!t.isEqual(e))}toAbsoluteRect(){const{scrollX:e,scrollY:t}=b.window,o=this.clone().moveBy(e,t);if(Zf(o._source)){const a=Pw(o._source);a&&function(c,d){const h=new pt(d),g=Bw(d);let k=0,w=0;k-=h.left,w-=h.top,k+=d.scrollLeft,w+=d.scrollTop,k-=g.left,w-=g.top,c.moveBy(k,w)}(o,a)}return o}excludeScrollbarsAndBorders(){const e=this._source;let t,o,a;if(Su(e))t=e.innerWidth-e.document.documentElement.clientWidth,o=e.innerHeight-e.document.documentElement.clientHeight,a=e.getComputedStyle(e.document.documentElement).direction;else{const c=Bw(e);t=e.offsetWidth-e.clientWidth-c.left-c.right,o=e.offsetHeight-e.clientHeight-c.top-c.bottom,a=e.ownerDocument.defaultView.getComputedStyle(e).direction,this.left+=c.left,this.top+=c.top,this.right-=c.right,this.bottom-=c.bottom,this.width=this.right-this.left,this.height=this.bottom-this.top}return this.width-=t,a==="ltr"?this.right-=t:this.left+=t,this.height-=o,this.bottom-=o,this}static getDomRangeRects(e){const t=[],o=Array.from(e.getClientRects());if(o.length)for(const a of o)t.push(new pt(a));else{let a=e.startContainer;hn(a)&&(a=a.parentNode);const c=new pt(a.getBoundingClientRect());c.right=c.left,c.width=0,t.push(c)}return t}static getBoundingRect(e){const t={left:Number.POSITIVE_INFINITY,top:Number.POSITIVE_INFINITY,right:Number.NEGATIVE_INFINITY,bottom:Number.NEGATIVE_INFINITY,width:0,height:0};let o=0;for(const a of e)o++,t.left=Math.min(t.left,a.left),t.top=Math.min(t.top,a.top),t.right=Math.max(t.right,a.right),t.bottom=Math.max(t.bottom,a.bottom);return o==0?null:(t.width=t.right-t.left,t.height=t.bottom-t.top,new pt(t))}}function Du(s,e){for(const t of Nw)s[t]=e[t]}function Lw(s){return!!Zf(s)&&s===s.ownerDocument.body}function Zf(s){return s!==null&&typeof s=="object"&&s.nodeType===1&&typeof s.getBoundingClientRect=="function"}function Rw(s){return s instanceof HTMLElement?s.ownerDocument.defaultView.getComputedStyle(s).position:"static"}const pn=class{constructor(s,e){pn._observerInstance||pn._createObserver(),this._element=s,this._callback=e,pn._addElementCallback(s,e),pn._observerInstance.observe(s)}get element(){return this._element}destroy(){pn._deleteElementCallback(this._element,this._callback)}static _addElementCallback(s,e){pn._elementCallbacks||(pn._elementCallbacks=new Map);let t=pn._elementCallbacks.get(s);t||(t=new Set,pn._elementCallbacks.set(s,t)),t.add(e)}static _deleteElementCallback(s,e){const t=pn._getElementCallbacks(s);t&&(t.delete(e),t.size||(pn._elementCallbacks.delete(s),pn._observerInstance.unobserve(s))),pn._elementCallbacks&&!pn._elementCallbacks.size&&(pn._observerInstance=null,pn._elementCallbacks=null)}static _getElementCallbacks(s){return pn._elementCallbacks?pn._elementCallbacks.get(s):null}static _createObserver(){pn._observerInstance=new b.window.ResizeObserver(s=>{for(const e of s){const t=pn._getElementCallbacks(e.target);if(t)for(const o of t)o(e)}})}};let $c=pn;function Fw(s,e){s instanceof HTMLTextAreaElement&&(s.value=e),s.innerHTML=e}function Wa(s){return e=>e+s}function Vc(s){let e=0;for(;s.previousSibling;)s=s.previousSibling,e++;return e}function zw(s,e,t){s.insertBefore(t,s.childNodes[e]||null)}function Hc(s){return s&&s.nodeType===Node.COMMENT_NODE}function zs(s){return!!(s&&s.getClientRects&&s.getClientRects().length)}$c._observerInstance=null,$c._elementCallbacks=null;var jw=Math.pow;function Iu({element:s,target:e,positions:t,limiter:o,fitInViewport:a,viewportOffsetConfig:c}){tn(e)&&(e=e()),tn(o)&&(o=o());const d=Pw(s),h=function(E){E=Object.assign({top:0,bottom:0,left:0,right:0},E);const D=new pt(b.window);return D.top+=E.top,D.height-=E.top,D.bottom-=E.bottom,D.height-=E.bottom,D}(c),g=new pt(s),k=$w(e,h);let w;if(!k||!h.getIntersection(k))return null;const C={targetRect:k,elementRect:g,positionedElementAncestor:d,viewportRect:h};if(o||a){if(o){const E=$w(o,h);E&&(C.limiterRect=E)}w=function(E,D){const{elementRect:M}=D,R=M.getArea(),j=E.map(se=>new Vw(se,D)).filter(se=>!!se.name);let q=0,Z=null;for(const se of j){const{limiterIntersectionArea:fe,viewportIntersectionArea:Be}=se;if(fe===R)return se;const Qe=jw(Be,2)+jw(fe,2);Qe>q&&(q=Qe,Z=se)}return Z}(t,C)}else w=new Vw(t[0],C);return w}function $w(s,e){const t=new pt(s).getVisible();return t?t.getIntersection(e):null}class Vw{constructor(e,t){const o=e(t.targetRect,t.elementRect,t.viewportRect,t.limiterRect);if(!o)return;const{left:a,top:c,name:d,config:h}=o;this.name=d,this.config=h,this._positioningFunctionCoordinates={left:a,top:c},this._options=t}get left(){return this._absoluteRect.left}get top(){return this._absoluteRect.top}get limiterIntersectionArea(){const e=this._options.limiterRect;return e?e.getIntersectionArea(this._rect):0}get viewportIntersectionArea(){return this._options.viewportRect.getIntersectionArea(this._rect)}get _rect(){return this._cachedRect||(this._cachedRect=this._options.elementRect.clone().moveTo(this._positioningFunctionCoordinates.left,this._positioningFunctionCoordinates.top)),this._cachedRect}get _absoluteRect(){return this._cachedAbsoluteRect||(this._cachedAbsoluteRect=this._rect.toAbsoluteRect()),this._cachedAbsoluteRect}}function Hw(s){const e=s.parentNode;e&&e.removeChild(s)}function W4({window:s,rect:e,alignToTop:t,forceScroll:o,viewportOffset:a}){const c=e.clone().moveBy(0,a.bottom),d=e.clone().moveBy(0,-a.top),h=new pt(s).excludeScrollbarsAndBorders(),g=t&&o,k=[d,c].every(M=>h.contains(M));let{scrollX:w,scrollY:C}=s;const E=w,D=C;g?C-=h.top-e.top+a.top:k||(qw(d,h)?C-=h.top-e.top+a.top:Uw(c,h)&&(C+=t?e.top-h.top-a.top:e.bottom-h.bottom+a.bottom)),k||(Gw(e,h)?w-=h.left-e.left+a.left:Ww(e,h)&&(w+=e.right-h.right+a.right)),w==E&&C===D||s.scrollTo(w,C)}function K4({parent:s,getRect:e,alignToTop:t,forceScroll:o,ancestorOffset:a=0,limiterElement:c}){const d=Jf(s),h=t&&o;let g,k,w;const C=c||d.document.body;for(;s!=C;)k=e(),g=new pt(s).excludeScrollbarsAndBorders(),w=g.contains(k),h?s.scrollTop-=g.top-k.top+a:w||(qw(k,g)?s.scrollTop-=g.top-k.top+a:Uw(k,g)&&(s.scrollTop+=t?k.top-g.top-a:k.bottom-g.bottom+a)),w||(Gw(k,g)?s.scrollLeft-=g.left-k.left+a:Ww(k,g)&&(s.scrollLeft+=k.right-g.right+a)),s=s.parentNode}function Uw(s,e){return s.bottom>e.bottom}function qw(s,e){return s.top<e.top}function Gw(s,e){return s.left<e.left}function Ww(s,e){return s.right>e.right}function Jf(s){return Tu(s)?s.startContainer.ownerDocument.defaultView:s.ownerDocument.defaultView}function Y4(s){if(Tu(s)){let e=s.commonAncestorContainer;return hn(e)&&(e=e.parentNode),e}return s.parentNode}function Kw(s,e){const t=Jf(s),o=new pt(s);if(t===e)return o;{let a=t;for(;a!=e;){const c=a.frameElement,d=new pt(c).excludeScrollbarsAndBorders();o.moveBy(d.left,d.top),a=a.parent}}return o}const Q4={ctrl:"⌃",cmd:"⌘",alt:"⌥",shift:"⇧"},Z4={ctrl:"Ctrl+",alt:"Alt+",shift:"Shift+"},Yw={37:"←",38:"↑",39:"→",40:"↓",9:"⇥",33:"Page Up",34:"Page Down"},kt=function(){const s={pageup:33,pagedown:34,arrowleft:37,arrowup:38,arrowright:39,arrowdown:40,backspace:8,delete:46,enter:13,space:32,esc:27,tab:9,ctrl:1114112,shift:2228224,alt:4456448,cmd:8912896};for(let e=65;e<=90;e++)s[String.fromCharCode(e).toLowerCase()]=e;for(let e=48;e<=57;e++)s[e-48]=e;for(let e=112;e<=123;e++)s["f"+(e-111)]=e;return Object.assign(s,{"'":222,",":108,"-":109,".":110,"/":111,";":186,"=":187,"[":219,"\\":220,"]":221,"`":223}),s}(),J4=Object.fromEntries(Object.entries(kt).map(([s,e])=>{let t;return t=e in Yw?Yw[e]:s.charAt(0).toUpperCase()+s.slice(1),[e,t]}));function Ka(s){let e;if(typeof s=="string"){if(e=kt[s.toLowerCase()],!e)throw new P("keyboard-unknown-key",null,{key:s})}else e=s.keyCode+(s.altKey?kt.alt:0)+(s.ctrlKey?kt.ctrl:0)+(s.shiftKey?kt.shift:0)+(s.metaKey?kt.cmd:0);return e}function Uc(s){return typeof s=="string"&&(s=function(e){return e.split("+").map(t=>t.trim())}(s)),s.map(e=>typeof e=="string"?function(t){if(t.endsWith("!"))return Ka(t.slice(0,-1));const o=Ka(t);return(A.isMac||A.isiOS)&&o==kt.ctrl?kt.cmd:o}(e):e).reduce((e,t)=>t+e,0)}function Mu(s){let e=Uc(s);return Object.entries(A.isMac||A.isiOS?Q4:Z4).reduce((t,[o,a])=>(e&kt[o]&&(e&=~kt[o],t+=a),t),"")+(e?J4[e]:"")}function Xf(s,e){const t=e==="ltr";switch(s){case kt.arrowleft:return t?"left":"right";case kt.arrowright:return t?"right":"left";case kt.arrowup:return"up";case kt.arrowdown:return"down"}}function qt(s){return Array.isArray(s)?s:[s]}const em=function(s,e,t){(t!==void 0&&!Oi(s[e],t)||t===void 0&&!(e in s))&&zr(s,e,t)},Qw=function(s){return function(e,t,o){for(var a=-1,c=Object(e),d=o(e),h=d.length;h--;){var g=d[s?h:++a];if(t(c[g],g,c)===!1)break}return e}}(),X4=function(s){return Bt(s)&&an(s)},tm=function(s,e){if((e!=="constructor"||typeof s[e]!="function")&&e!="__proto__")return s[e]},eO=function(s){return Pi(s,gi(s))},tO=function(s,e,t,o,a,c,d){var h=tm(s,t),g=tm(e,t),k=d.get(g);if(k)em(s,t,k);else{var w=c?c(h,g,t+"",s,e,d):void 0,C=w===void 0;if(C){var E=It(g),D=!E&&Li(g),M=!E&&!D&&ct(g);w=g,E||D||M?It(h)?w=h:X4(h)?w=lw(h):D?(C=!1,w=aw(g,!0)):M?(C=!1,w=vw(g,!0)):w=[]:An(g)||Ni(g)?(w=h,Ni(h)?w=eO(h):$e(h)&&!tn(h)||(w=Cw(g))):C=!1}C&&(d.set(g,w),a(w,g,o,c,d),d.delete(g)),em(s,t,w)}},nO=function s(e,t,o,a,c){e!==t&&Qw(t,function(d,h){if(c||(c=new qn),$e(d))tO(e,t,h,o,s,a,c);else{var g=a?a(tm(e,h),d,h+"",e,t,c):void 0;g===void 0&&(g=d),em(e,h,g)}},gi)},Ur=function(s){return s},oO=function(s,e,t){switch(t.length){case 0:return s.call(e);case 1:return s.call(e,t[0]);case 2:return s.call(e,t[0],t[1]);case 3:return s.call(e,t[0],t[1],t[2])}return s.apply(e,t)};var Zw=Math.max;const iO=function(s,e,t){return e=Zw(e===void 0?s.length-1:e,0),function(){for(var o=arguments,a=-1,c=Zw(o.length-e,0),d=Array(c);++a<c;)d[a]=o[e+a];a=-1;for(var h=Array(e+1);++a<e;)h[a]=o[a];return h[e]=t(d),oO(s,this,h)}},rO=function(s){return function(){return s}},sO=to?function(s,e){return to(s,"toString",{configurable:!0,enumerable:!1,value:rO(e),writable:!0})}:Ur;var aO=Date.now;const lO=function(s){var e=0,t=0;return function(){var o=aO(),a=16-(o-t);if(t=o,a>0){if(++e>=800)return arguments[0]}else e=0;return s.apply(void 0,arguments)}}(sO),cO=function(s,e){return lO(iO(s,e,Ur),s+"")},dO=function(s,e,t){if(!$e(t))return!1;var o=typeof e;return!!(o=="number"?an(t)&&rr(e,t.length):o=="string"&&e in t)&&Oi(t[e],s)},Jw=function(s){return cO(function(e,t){var o=-1,a=t.length,c=a>1?t[a-1]:void 0,d=a>2?t[2]:void 0;for(c=s.length>3&&typeof c=="function"?(a--,c):void 0,d&&dO(t[0],t[1],d)&&(c=a<3?void 0:c,a=1),e=Object(e);++o<a;){var h=t[o];h&&s(e,h,o,c)}return e})},nm=Jw(function(s,e,t){nO(s,e,t)});function uO(s,e,t=1,o){if(typeof t!="number")throw new P("translation-service-quantity-not-a-number",null,{quantity:t});const a=o||b.window.CKEDITOR_TRANSLATIONS,c=function(w){return Object.keys(w).length}(a);c===1&&(s=Object.keys(a)[0]);const d=e.id||e.string;if(c===0||!function(w,C,E){return!!E[w]&&!!E[w].dictionary[C]}(s,d,a))return t!==1?e.plural:e.string;const h=a[s].dictionary,g=a[s].getPluralForm||(w=>w===1?0:1),k=h[d];return typeof k=="string"?k:k[Number(g(t))]}b.window.CKEDITOR_TRANSLATIONS||(b.window.CKEDITOR_TRANSLATIONS={});const hO=["ar","ara","dv","div","fa","per","fas","he","heb","ku","kur","ug","uig"];function Xw(s){return hO.includes(s)?"rtl":"ltr"}class pO{constructor({uiLanguage:e="en",contentLanguage:t,translations:o}={}){this.uiLanguage=e,this.contentLanguage=t||this.uiLanguage,this.uiLanguageDirection=Xw(this.uiLanguage),this.contentLanguageDirection=Xw(this.contentLanguage),this.translations=function(a){return Array.isArray(a)?a.reduce((c,d)=>nm(c,d)):a}(o),this.t=(a,c)=>this._t(a,c)}get language(){return console.warn("locale-deprecated-language-property: The Locale#language property has been deprecated and will be removed in the near future. Please use #uiLanguage and #contentLanguage properties instead."),this.uiLanguage}_t(e,t=[]){t=qt(t),typeof e=="string"&&(e={string:e});const o=e.plural?t[0]:1;return function(a,c){return a.replace(/%(\d+)/g,(d,h)=>h<c.length?c[h]:d)}(uO(this.uiLanguage,e,o,this.translations),t)}}class bi extends ie(){constructor(e={},t={}){super();const o=he(e);if(o||(t=e),this._items=[],this._itemMap=new Map,this._idProperty=t.idProperty||"id",this._bindToExternalToInternalMap=new WeakMap,this._bindToInternalToExternalMap=new WeakMap,this._skippedIndexesFromExternal=[],o)for(const a of e)this._items.push(a),this._itemMap.set(this._getItemIdBeforeAdding(a),a)}get length(){return this._items.length}get first(){return this._items[0]||null}get last(){return this._items[this.length-1]||null}add(e,t){return this.addMany([e],t)}addMany(e,t){if(t===void 0)t=this._items.length;else if(t>this._items.length||t<0)throw new P("collection-add-item-invalid-index",this);let o=0;for(const a of e){const c=this._getItemIdBeforeAdding(a),d=t+o;this._items.splice(d,0,a),this._itemMap.set(c,a),this.fire("add",a,d),o++}return this.fire("change",{added:e,removed:[],index:t}),this}get(e){let t;if(typeof e=="string")t=this._itemMap.get(e);else{if(typeof e!="number")throw new P("collection-get-invalid-arg",this);t=this._items[e]}return t||null}has(e){if(typeof e=="string")return this._itemMap.has(e);{const t=e[this._idProperty];return t&&this._itemMap.has(t)}}getIndex(e){let t;return t=typeof e=="string"?this._itemMap.get(e):e,t?this._items.indexOf(t):-1}remove(e){const[t,o]=this._remove(e);return this.fire("change",{added:[],removed:[t],index:o}),t}map(e,t){return this._items.map(e,t)}forEach(e,t){this._items.forEach(e,t)}find(e,t){return this._items.find(e,t)}filter(e,t){return this._items.filter(e,t)}clear(){this._bindToCollection&&(this.stopListening(this._bindToCollection),this._bindToCollection=null);const e=Array.from(this._items);for(;this.length;)this._remove(0);this.fire("change",{added:[],removed:e,index:0})}bindTo(e){if(this._bindToCollection)throw new P("collection-bind-to-rebind",this);return this._bindToCollection=e,{as:t=>{this._setUpBindToBinding(o=>new t(o))},using:t=>{typeof t=="function"?this._setUpBindToBinding(t):this._setUpBindToBinding(o=>o[t])}}}_setUpBindToBinding(e){const t=this._bindToCollection,o=(a,c,d)=>{const h=t._bindToCollection==this,g=t._bindToInternalToExternalMap.get(c);if(h&&g)this._bindToExternalToInternalMap.set(c,g),this._bindToInternalToExternalMap.set(g,c);else{const k=e(c);if(!k)return void this._skippedIndexesFromExternal.push(d);let w=d;for(const C of this._skippedIndexesFromExternal)d>C&&w--;for(const C of t._skippedIndexesFromExternal)w>=C&&w++;this._bindToExternalToInternalMap.set(c,k),this._bindToInternalToExternalMap.set(k,c),this.add(k,w);for(let C=0;C<t._skippedIndexesFromExternal.length;C++)w<=t._skippedIndexesFromExternal[C]&&t._skippedIndexesFromExternal[C]++}};for(const a of t)o(0,a,t.getIndex(a));this.listenTo(t,"add",o),this.listenTo(t,"remove",(a,c,d)=>{const h=this._bindToExternalToInternalMap.get(c);h&&this.remove(h),this._skippedIndexesFromExternal=this._skippedIndexesFromExternal.reduce((g,k)=>(d<k&&g.push(k-1),d>k&&g.push(k),g),[])})}_getItemIdBeforeAdding(e){const t=this._idProperty;let o;if(t in e){if(o=e[t],typeof o!="string")throw new P("collection-add-invalid-id",this);if(this.get(o))throw new P("collection-add-item-already-exists",this)}else e[t]=o=B();return o}_remove(e){let t,o,a,c=!1;const d=this._idProperty;if(typeof e=="string"?(o=e,a=this._itemMap.get(o),c=!a,a&&(t=this._items.indexOf(a))):typeof e=="number"?(t=e,a=this._items[t],c=!a,a&&(o=a[d])):(a=e,o=a[d],t=this._items.indexOf(a),c=t==-1||!this._itemMap.get(o)),c)throw new P("collection-remove-404",this);this._items.splice(t,1),this._itemMap.delete(o);const h=this._bindToInternalToExternalMap.get(a);return this._bindToInternalToExternalMap.delete(a),this._bindToExternalToInternalMap.delete(h),this.fire("remove",a,t),[a,t]}[Symbol.iterator](){return this._items[Symbol.iterator]()}}function On(s){const e=s.next();return e.done?null:e.value}class Bn extends Yo(K()){constructor(){super(),this._elements=new Set,this._nextEventLoopTimeout=null,this.set("isFocused",!1),this.set("focusedElement",null)}add(e){if(this._elements.has(e))throw new P("focustracker-add-element-already-exist",this);this.listenTo(e,"focus",()=>this._focus(e),{useCapture:!0}),this.listenTo(e,"blur",()=>this._blur(),{useCapture:!0}),this._elements.add(e)}remove(e){e===this.focusedElement&&this._blur(),this._elements.has(e)&&(this.stopListening(e),this._elements.delete(e))}destroy(){this.stopListening()}_focus(e){clearTimeout(this._nextEventLoopTimeout),this.focusedElement=e,this.isFocused=!0}_blur(){clearTimeout(this._nextEventLoopTimeout),this._nextEventLoopTimeout=setTimeout(()=>{this.focusedElement=null,this.isFocused=!1},0)}}class no{constructor(){this._listener=new(Yo())}listenTo(e){this._listener.listenTo(e,"keydown",(t,o)=>{this._listener.fire("_keydown:"+Ka(o),o)})}set(e,t,o={}){const a=Uc(e),c=o.priority;this._listener.listenTo(this._listener,"_keydown:"+a,(d,h)=>{t(h,()=>{h.preventDefault(),h.stopPropagation(),d.stop()}),d.return=!0},{priority:c})}press(e){return!!this._listener.fire("_keydown:"+Ka(e),e)}stopListening(e){this._listener.stopListening(e)}destroy(){this.stopListening()}}function Ri(s){return he(s)?new Map(s):function(e){const t=new Map;for(const o in e)t.set(o,e[o]);return t}(s)}function om(s,e){let t;function o(...a){o.cancel(),t=setTimeout(()=>s(...a),e)}return o.cancel=()=>{clearTimeout(t)},o}function im(s,e){return!!(t=s.charAt(e-1))&&t.length==1&&/[\ud800-\udbff]/.test(t)&&function(o){return!!o&&o.length==1&&/[\udc00-\udfff]/.test(o)}(s.charAt(e));var t}function rm(s,e){return!!(t=s.charAt(e))&&t.length==1&&/[\u0300-\u036f\u1ab0-\u1aff\u1dc0-\u1dff\u20d0-\u20ff\ufe20-\ufe2f]/.test(t);var t}const fO=function(){const s=[new RegExp("\\p{Emoji}[\\u{E0020}-\\u{E007E}]+\\u{E007F}","u"),new RegExp("\\p{Emoji}\\u{FE0F}?\\u{20E3}","u"),new RegExp("\\p{Emoji}\\u{FE0F}","u"),new RegExp("(?=\\p{General_Category=Other_Symbol})\\p{Emoji}\\p{Emoji_Modifier}*","u")],e=new RegExp("\\p{Regional_Indicator}{2}","u").source,t="(?:"+s.map(o=>o.source).join("|")+")";return new RegExp(`${e}|${t}(?:‍${t})*`,"ug")}();function ev(s,e){const t=String(s).matchAll(fO);return Array.from(t).some(o=>o.index<e&&e<o.index+o[0].length)}class Qo extends bi{constructor(e=[]){super(e,{idProperty:"viewUid"}),this.on("add",(t,o,a)=>{this._renderViewIntoCollectionParent(o,a)}),this.on("remove",(t,o)=>{o.element&&this._parentElement&&o.element.remove()}),this._parentElement=null}destroy(){this.map(e=>e.destroy())}setParent(e){this._parentElement=e;for(const t of this)this._renderViewIntoCollectionParent(t)}delegate(...e){if(!e.length||!e.every(t=>typeof t=="string"))throw new P("ui-viewcollection-delegate-wrong-events",this);return{to:t=>{for(const o of this)for(const a of e)o.delegate(a).to(t);this.on("add",(o,a)=>{for(const c of e)a.delegate(c).to(t)}),this.on("remove",(o,a)=>{for(const c of e)a.stopDelegating(c,t)})}}}_renderViewIntoCollectionParent(e,t){e.isRendered||e.render(),e.element&&this._parentElement&&this._parentElement.insertBefore(e.element,this._parentElement.children[t])}remove(e){return super.remove(e)}}class ki extends ie(){constructor(e){super(),Object.assign(this,iv(ov(e))),this._isRendered=!1,this._revertData=null}render(){const e=this._renderNode({intoFragment:!0});return this._isRendered=!0,e}apply(e){return this._revertData={children:[],bindings:[],attributes:{}},this._renderNode({node:e,intoFragment:!1,isApplying:!0,revertData:this._revertData}),e}revert(e){if(!this._revertData)throw new P("ui-template-revert-not-applied",[this,e]);this._revertTemplateFromNode(e,this._revertData)}*getViews(){yield*function*e(t){if(t.children)for(const o of t.children)Bu(o)?yield o:sm(o)&&(yield*e(o))}(this)}static bind(e,t){return{to:(o,a)=>new mO({eventNameOrFunction:o,attribute:o,observable:e,emitter:t,callback:a}),if:(o,a,c)=>new tv({observable:e,emitter:t,attribute:o,valueIfTrue:a,callback:c})}}static extend(e,t){if(e._isRendered)throw new P("template-extend-render",[this,e]);lv(e,iv(ov(t)))}_renderNode(e){let t;if(t=e.node?this.tag&&this.text:this.tag?this.text:!this.text,t)throw new P("ui-template-wrong-syntax",this);return this.text?this._renderText(e):this._renderElement(e)}_renderElement(e){let t=e.node;return t||(t=e.node=document.createElementNS(this.ns||"http://www.w3.org/1999/xhtml",this.tag)),this._renderAttributes(e),this._renderElementChildren(e),this._setUpListeners(e),t}_renderText(e){let t=e.node;return t?e.revertData.text=t.textContent:t=e.node=document.createTextNode(""),Ou(this.text)?this._bindToObservable({schema:this.text,updater:gO(t),data:e}):t.textContent=this.text.join(""),t}_renderAttributes(e){if(!this.attributes)return;const t=e.node,o=e.revertData;for(const a in this.attributes){const c=t.getAttribute(a),d=this.attributes[a];o&&(o.attributes[a]=c);const h=cv(d)?d[0].ns:null;if(Ou(d)){const g=cv(d)?d[0].value:d;o&&dv(a)&&g.unshift(c),this._bindToObservable({schema:g,updater:bO(t,a,h),data:e})}else if(a=="style"&&typeof d[0]!="string")this._renderStyleAttribute(d[0],e);else{o&&c&&dv(a)&&d.unshift(c);const g=d.map(k=>k&&k.value||k).reduce((k,w)=>k.concat(w),[]).reduce(sv,"");Ya(g)||t.setAttributeNS(h,a,g)}}}_renderStyleAttribute(e,t){const o=t.node;for(const a in e){const c=e[a];Ou(c)?this._bindToObservable({schema:[c],updater:kO(o,a),data:t}):o.style[a]=c}}_renderElementChildren(e){const t=e.node,o=e.intoFragment?document.createDocumentFragment():t,a=e.isApplying;let c=0;for(const d of this.children)if(am(d)){if(!a){d.setParent(t);for(const h of d)o.appendChild(h.element)}}else if(Bu(d))a||(d.isRendered||d.render(),o.appendChild(d.element));else if(Hr(d))o.appendChild(d);else if(a){const h={children:[],bindings:[],attributes:{}};e.revertData.children.push(h),d._renderNode({intoFragment:!1,node:o.childNodes[c++],isApplying:!0,revertData:h})}else o.appendChild(d.render());e.intoFragment&&t.appendChild(o)}_setUpListeners(e){if(this.eventListeners)for(const t in this.eventListeners){const o=this.eventListeners[t].map(a=>{const[c,d]=t.split("@");return a.activateDomEventListener(c,d,e)});e.revertData&&e.revertData.bindings.push(o)}}_bindToObservable({schema:e,updater:t,data:o}){const a=o.revertData;nv(e,t,o);const c=e.filter(d=>!Ya(d)).filter(d=>d.observable).map(d=>d.activateAttributeListener(e,t,o));a&&a.bindings.push(c)}_revertTemplateFromNode(e,t){for(const a of t.bindings)for(const c of a)c();if(t.text)return void(e.textContent=t.text);const o=e;for(const a in t.attributes){const c=t.attributes[a];c===null?o.removeAttribute(a):o.setAttribute(a,c)}for(let a=0;a<t.children.length;++a)this._revertTemplateFromNode(o.childNodes[a],t.children[a])}}class qc{constructor(e){this.attribute=e.attribute,this.observable=e.observable,this.emitter=e.emitter,this.callback=e.callback}getValue(e){const t=this.observable[this.attribute];return this.callback?this.callback(t,e):t}activateAttributeListener(e,t,o){const a=()=>nv(e,t,o);return this.emitter.listenTo(this.observable,`change:${this.attribute}`,a),()=>{this.emitter.stopListening(this.observable,`change:${this.attribute}`,a)}}}class mO extends qc{constructor(e){super(e),this.eventNameOrFunction=e.eventNameOrFunction}activateDomEventListener(e,t,o){const a=(c,d)=>{t&&!d.target.matches(t)||(typeof this.eventNameOrFunction=="function"?this.eventNameOrFunction(d):this.observable.fire(this.eventNameOrFunction,d))};return this.emitter.listenTo(o.node,e,a),()=>{this.emitter.stopListening(o.node,e,a)}}}class tv extends qc{constructor(e){super(e),this.valueIfTrue=e.valueIfTrue}getValue(e){return!Ya(super.getValue(e))&&(this.valueIfTrue||!0)}}function Ou(s){return!!s&&(s.value&&(s=s.value),Array.isArray(s)?s.some(Ou):s instanceof qc)}function nv(s,e,{node:t}){const o=function(c,d){return c.map(h=>h instanceof qc?h.getValue(d):h)}(s,t);let a;a=s.length==1&&s[0]instanceof tv?o[0]:o.reduce(sv,""),Ya(a)?e.remove():e.set(a)}function gO(s){return{set(e){s.textContent=e},remove(){s.textContent=""}}}function bO(s,e,t){return{set(o){s.setAttributeNS(t,e,o)},remove(){s.removeAttributeNS(t,e)}}}function kO(s,e){return{set(t){s.style[e]=t},remove(){s.style[e]=null}}}function ov(s){return Qf(s,e=>{if(e&&(e instanceof qc||sm(e)||Bu(e)||am(e)))return e})}function iv(s){if(typeof s=="string"?s=function(e){return{text:[e]}}(s):s.text&&function(e){e.text=qt(e.text)}(s),s.on&&(s.eventListeners=function(e){for(const t in e)rv(e,t);return e}(s.on),delete s.on),!s.text){s.attributes&&function(t){for(const o in t)t[o].value&&(t[o].value=qt(t[o].value)),rv(t,o)}(s.attributes);const e=[];if(s.children)if(am(s.children))e.push(s.children);else for(const t of s.children)sm(t)||Bu(t)||Hr(t)?e.push(t):e.push(new ki(t));s.children=e}return s}function rv(s,e){s[e]=qt(s[e])}function sv(s,e){return Ya(e)?s:Ya(s)?e:`${s} ${e}`}function av(s,e){for(const t in e)s[t]?s[t].push(...e[t]):s[t]=e[t]}function lv(s,e){if(e.attributes&&(s.attributes||(s.attributes={}),av(s.attributes,e.attributes)),e.eventListeners&&(s.eventListeners||(s.eventListeners={}),av(s.eventListeners,e.eventListeners)),e.text&&s.text.push(...e.text),e.children&&e.children.length){if(s.children.length!=e.children.length)throw new P("ui-template-extend-children-mismatch",s);let t=0;for(const o of e.children)lv(s.children[t++],o)}}function Ya(s){return!s&&s!==0}function Bu(s){return s instanceof Ge}function sm(s){return s instanceof ki}function am(s){return s instanceof Qo}function cv(s){return $e(s[0])&&s[0].ns}function dv(s){return s=="class"||s=="style"}var _O=u(2591),De=u.n(_O),uv=u(7676),wO={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};De()(uv.A,wO),uv.A.locals;class Ge extends Yo(K()){constructor(e){super(),this.element=null,this.isRendered=!1,this.locale=e,this.t=e&&e.t,this._viewCollections=new bi,this._unboundChildren=this.createCollection(),this._viewCollections.on("add",(t,o)=>{o.locale=e,o.t=e&&e.t}),this.decorate("render")}get bindTemplate(){return this._bindTemplate?this._bindTemplate:this._bindTemplate=ki.bind(this,this)}createCollection(e){const t=new Qo(e);return this._viewCollections.add(t),t}registerChild(e){he(e)||(e=[e]);for(const t of e)this._unboundChildren.add(t)}deregisterChild(e){he(e)||(e=[e]);for(const t of e)this._unboundChildren.remove(t)}setTemplate(e){this.template=new ki(e)}extendTemplate(e){ki.extend(this.template,e)}render(){if(this.isRendered)throw new P("ui-view-render-already-rendered",this);this.template&&(this.element=this.template.render(),this.registerChild(this.template.getViews())),this.isRendered=!0}destroy(){this.stopListening(),this._viewCollections.map(e=>e.destroy()),this.template&&this.template._revertData&&this.template.revert(this.element)}}function Pu({emitter:s,activator:e,callback:t,contextElements:o}){s.listenTo(document,"mousedown",(a,c)=>{if(!e())return;const d=typeof c.composedPath=="function"?c.composedPath():[],h=typeof o=="function"?o():o;for(const g of h)if(g.contains(c.target)||d.includes(g))return;t()})}function lm(s){return class extends s{disableCssTransitions(){this._isCssTransitionsDisabled=!0}enableCssTransitions(){this._isCssTransitionsDisabled=!1}constructor(...e){super(...e),this.set("_isCssTransitionsDisabled",!1),this.initializeCssTransitionDisablerMixin()}initializeCssTransitionDisablerMixin(){this.extendTemplate({attributes:{class:[this.bindTemplate.if("_isCssTransitionsDisabled","ck-transitions-disabled")]}})}}}function Nu({view:s}){s.listenTo(s.element,"submit",(e,t)=>{t.preventDefault(),s.fire("submit")},{useCapture:!0})}function vO({keystrokeHandler:s,focusTracker:e,gridItems:t,numberOfColumns:o,uiLanguageDirection:a}){const c=typeof o=="number"?()=>o:o;function d(k){return w=>{const C=t.find(M=>M.element===e.focusedElement),E=t.getIndex(C),D=k(E,t);t.get(D).focus(),w.stopPropagation(),w.preventDefault()}}function h(k,w){return k===w-1?0:k+1}function g(k,w){return k===0?w-1:k-1}s.set("arrowright",d((k,w)=>a==="rtl"?g(k,w.length):h(k,w.length))),s.set("arrowleft",d((k,w)=>a==="rtl"?h(k,w.length):g(k,w.length))),s.set("arrowup",d((k,w)=>{let C=k-c();return C<0&&(C=k+c()*Math.floor(w.length/c()),C>w.length-1&&(C-=c())),C})),s.set("arrowdown",d((k,w)=>{let C=k+c();return C>w.length-1&&(C=k%c()),C}))}class ye extends K(){constructor(e){super(),this._disableStack=new Set,this.editor=e,this.set("isEnabled",!0)}forceDisabled(e){this._disableStack.add(e),this._disableStack.size==1&&(this.on("set:isEnabled",hv,{priority:"highest"}),this.isEnabled=!1)}clearForceDisabled(e){this._disableStack.delete(e),this._disableStack.size==0&&(this.off("set:isEnabled",hv),this.isEnabled=!0)}destroy(){this.stopListening()}static get isContextPlugin(){return!1}}function hv(s){s.return=!1,s.stop()}class lt extends K(){constructor(e){super(),this.editor=e,this.set("value",void 0),this.set("isEnabled",!1),this._affectsData=!0,this._isEnabledBasedOnSelection=!0,this._disableStack=new Set,this.decorate("execute"),this.listenTo(this.editor.model.document,"change",()=>{this.refresh()}),this.listenTo(e,"change:isReadOnly",()=>{this.refresh()}),this.on("set:isEnabled",t=>{if(!this.affectsData)return;const o=e.model.document.selection,a=o.getFirstPosition().root.rootName!="$graveyard"&&e.model.canEditAt(o);(e.isReadOnly||this._isEnabledBasedOnSelection&&!a)&&(t.return=!1,t.stop())},{priority:"highest"}),this.on("execute",t=>{this.isEnabled||t.stop()},{priority:"high"})}get affectsData(){return this._affectsData}set affectsData(e){this._affectsData=e}refresh(){this.isEnabled=!0}forceDisabled(e){this._disableStack.add(e),this._disableStack.size==1&&(this.on("set:isEnabled",pv,{priority:"highest"}),this.isEnabled=!1)}clearForceDisabled(e){this._disableStack.delete(e),this._disableStack.size==0&&(this.off("set:isEnabled",pv),this.refresh())}execute(...e){}destroy(){this.stopListening()}}function pv(s){s.return=!1,s.stop()}class fv extends lt{constructor(){super(...arguments),this._childCommandsDefinitions=[]}refresh(){}execute(...e){const t=this._getFirstEnabledCommand();return!!t&&t.execute(e)}registerChildCommand(e,t={}){H(this._childCommandsDefinitions,{command:e,priority:t.priority||"normal"}),e.on("change:isEnabled",()=>this._checkEnabled()),this._checkEnabled()}_checkEnabled(){this.isEnabled=!!this._getFirstEnabledCommand()}_getFirstEnabledCommand(){const e=this._childCommandsDefinitions.find(({command:t})=>t.isEnabled);return e&&e.command}}class mv extends ie(){constructor(e,t=[],o=[]){super(),this._plugins=new Map,this._context=e,this._availablePlugins=new Map;for(const a of t)a.pluginName&&this._availablePlugins.set(a.pluginName,a);this._contextPlugins=new Map;for(const[a,c]of o)this._contextPlugins.set(a,c),this._contextPlugins.set(c,a),a.pluginName&&this._availablePlugins.set(a.pluginName,a)}*[Symbol.iterator](){for(const e of this._plugins)typeof e[0]=="function"&&(yield e)}get(e){const t=this._plugins.get(e);if(!t){let o=e;throw typeof e=="function"&&(o=e.pluginName||e.name),new P("plugincollection-plugin-not-loaded",this._context,{plugin:o})}return t}has(e){return this._plugins.has(e)}init(e,t=[],o=[]){const a=this,c=this._context;(function M(R,j=new Set){R.forEach(q=>{g(q)&&(j.has(q)||(j.add(q),q.pluginName&&!a._availablePlugins.has(q.pluginName)&&a._availablePlugins.set(q.pluginName,q),q.requires&&M(q.requires,j)))})})(e),E(e);const d=[...function M(R,j=new Set){return R.map(q=>g(q)?q:a._availablePlugins.get(q)).reduce((q,Z)=>j.has(Z)?q:(j.add(Z),Z.requires&&(E(Z.requires,Z),M(Z.requires,j).forEach(se=>q.add(se))),q.add(Z)),new Set)}(e.filter(M=>!w(M,t)))];(function(M,R){for(const j of R){if(typeof j!="function")throw new P("plugincollection-replace-plugin-invalid-type",null,{pluginItem:j});const q=j.pluginName;if(!q)throw new P("plugincollection-replace-plugin-missing-name",null,{pluginItem:j});if(j.requires&&j.requires.length)throw new P("plugincollection-plugin-for-replacing-cannot-have-dependencies",null,{pluginName:q});const Z=a._availablePlugins.get(q);if(!Z)throw new P("plugincollection-plugin-for-replacing-not-exist",null,{pluginName:q});const se=M.indexOf(Z);if(se===-1){if(a._contextPlugins.has(Z))return;throw new P("plugincollection-plugin-for-replacing-not-loaded",null,{pluginName:q})}if(Z.requires&&Z.requires.length)throw new P("plugincollection-replaced-plugin-cannot-have-dependencies",null,{pluginName:q});M.splice(se,1,j),a._availablePlugins.set(q,j)}})(d,o);const h=d.map(M=>{let R=a._contextPlugins.get(M);return R=R||new M(c),a._add(M,R),R});return D(h,"init").then(()=>D(h,"afterInit")).then(()=>h);function g(M){return typeof M=="function"}function k(M){return g(M)&&!!M.isContextPlugin}function w(M,R){return R.some(j=>j===M||C(M)===j||C(j)===M)}function C(M){return g(M)?M.pluginName||M.name:M}function E(M,R=null){M.map(j=>g(j)?j:a._availablePlugins.get(j)||j).forEach(j=>{(function(q,Z){if(!g(q))throw Z?new P("plugincollection-soft-required",c,{missingPlugin:q,requiredBy:C(Z)}):new P("plugincollection-plugin-not-found",c,{plugin:q})})(j,R),function(q,Z){if(k(Z)&&!k(q))throw new P("plugincollection-context-required",c,{plugin:C(q),requiredBy:C(Z)})}(j,R),function(q,Z){if(Z&&w(q,t))throw new P("plugincollection-required",c,{plugin:C(q),requiredBy:C(Z)})}(j,R)})}function D(M,R){return M.reduce((j,q)=>q[R]?a._contextPlugins.has(q)?j:j.then(q[R].bind(q)):j,Promise.resolve())}}destroy(){const e=[];for(const[,t]of this)typeof t.destroy!="function"||this._contextPlugins.has(t)||e.push(t.destroy());return Promise.all(e)}_add(e,t){this._plugins.set(e,t);const o=e.pluginName;if(o){if(this._plugins.has(o))throw new P("plugincollection-plugin-name-conflict",null,{pluginName:o,plugin1:this._plugins.get(o).constructor,plugin2:e});this._plugins.set(o,t)}}}var gv=Object.getOwnPropertySymbols,AO=Object.prototype.hasOwnProperty,CO=Object.prototype.propertyIsEnumerable;class bv{constructor(e){this._contextOwner=null;const t=e||{},{translations:o}=t,a=((h,g)=>{var k={};for(var w in h)AO.call(h,w)&&g.indexOf(w)<0&&(k[w]=h[w]);if(h!=null&&gv)for(var w of gv(h))g.indexOf(w)<0&&CO.call(h,w)&&(k[w]=h[w]);return k})(t,["translations"]);this.config=new Dw(a,this.constructor.defaultConfig);const c=this.constructor.builtinPlugins;this.config.define("plugins",c),this.plugins=new mv(this,c);const d=this.config.get("language")||{};this.locale=new pO({uiLanguage:typeof d=="string"?d:d.ui,contentLanguage:this.config.get("language.content"),translations:o}),this.t=this.locale.t,this.editors=new bi}initPlugins(){const e=this.config.get("plugins")||[],t=this.config.get("substitutePlugins")||[];for(const o of e.concat(t)){if(typeof o!="function")throw new P("context-initplugins-constructor-only",null,{Plugin:o});if(o.isContextPlugin!==!0)throw new P("context-initplugins-invalid-plugin",null,{Plugin:o})}return this.plugins.init(e,[],t)}destroy(){return Promise.all(Array.from(this.editors,e=>e.destroy())).then(()=>this.plugins.destroy())}_addEditor(e,t){if(this._contextOwner)throw new P("context-addeditor-private-context");this.editors.add(e),t&&(this._contextOwner=e)}_removeEditor(e){return this.editors.has(e)&&this.editors.remove(e),this._contextOwner===e?this.destroy():Promise.resolve()}_getEditorConfig(){const e={};for(const t of this.config.names())["plugins","removePlugins","extraPlugins"].includes(t)||(e[t]=this.config.get(t));return e}static create(e){return new Promise(t=>{const o=new this(e);t(o.initPlugins().then(()=>o))})}}class Lu extends K(){constructor(e){super(),this.context=e}destroy(){this.stopListening()}static get isContextPlugin(){return!0}}class yO extends no{constructor(e){super(),this.editor=e}set(e,t,o={}){if(typeof t=="string"){const a=t;t=(c,d)=>{this.editor.execute(a),d()}}super.set(e,t,o)}}var kv=u(4098),xO={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};De()(kv.A,xO),kv.A.locals;const Ru=new WeakMap;let _v=!1;function wv({view:s,element:e,text:t,isDirectHost:o=!0,keepOnFocus:a=!1}){const c=s.document;function d(h){Ru.get(c).set(e,{text:h,isDirectHost:o,keepOnFocus:a,hostElement:o?e:null}),s.change(g=>cm(c,g))}Ru.has(c)||(Ru.set(c,new Map),c.registerPostFixer(h=>cm(c,h)),c.on("change:isComposing",()=>{s.change(h=>cm(c,h))},{priority:"high"})),e.is("editableElement")&&e.on("change:placeholder",(h,g,k)=>{d(k)}),e.placeholder?d(e.placeholder):t&&d(t),t&&function(){_v||V("enableplaceholder-deprecated-text-option"),_v=!0}()}function EO(s,e){return!e.hasClass("ck-placeholder")&&(s.addClass("ck-placeholder",e),!0)}function SO(s,e){return!!e.hasClass("ck-placeholder")&&(s.removeClass("ck-placeholder",e),!0)}function TO(s,e){if(!s.isAttached()||Array.from(s.getChildren()).some(a=>!a.is("uiElement")))return!1;const t=s.document,o=t.selection.anchor;return(!t.isComposing||!o||o.parent!==s)&&(!!e||!t.isFocused||!!o&&o.parent!==s)}function cm(s,e){const t=Ru.get(s),o=[];let a=!1;for(const[c,d]of t)d.isDirectHost&&(o.push(c),vv(e,c,d)&&(a=!0));for(const[c,d]of t){if(d.isDirectHost)continue;const h=DO(c);h&&(o.includes(h)||(d.hostElement=h,vv(e,c,d)&&(a=!0)))}return a}function vv(s,e,t){const{text:o,isDirectHost:a,hostElement:c}=t;let d=!1;return c.getAttribute("data-placeholder")!==o&&(s.setAttribute("data-placeholder",o,c),d=!0),(a||e.childCount==1)&&TO(c,t.keepOnFocus)?EO(s,c)&&(d=!0):SO(s,c)&&(d=!0),d}function DO(s){if(s.childCount){const e=s.getChild(0);if(e.is("element")&&!e.is("uiElement")&&!e.is("attributeElement"))return e}return null}class js{is(){throw new Error("is() method is abstract")}}const Av=function(s){return Yf(s,4)};class $s extends ie(js){constructor(e){super(),this.document=e,this.parent=null}get index(){let e;if(!this.parent)return null;if((e=this.parent.getChildIndex(this))==-1)throw new P("view-node-not-found-in-parent",this);return e}get nextSibling(){const e=this.index;return e!==null&&this.parent.getChild(e+1)||null}get previousSibling(){const e=this.index;return e!==null&&this.parent.getChild(e-1)||null}get root(){let e=this;for(;e.parent;)e=e.parent;return e}isAttached(){return this.root.is("rootElement")}getPath(){const e=[];let t=this;for(;t.parent;)e.unshift(t.index),t=t.parent;return e}getAncestors(e={}){const t=[];let o=e.includeSelf?this:this.parent;for(;o;)t[e.parentFirst?"push":"unshift"](o),o=o.parent;return t}getCommonAncestor(e,t={}){const o=this.getAncestors(t),a=e.getAncestors(t);let c=0;for(;o[c]==a[c]&&o[c];)c++;return c===0?null:o[c-1]}isBefore(e){if(this==e||this.root!==e.root)return!1;const t=this.getPath(),o=e.getPath(),a=we(t,o);switch(a){case"prefix":return!0;case"extension":return!1;default:return t[a]<o[a]}}isAfter(e){return this!=e&&this.root===e.root&&!this.isBefore(e)}_remove(){this.parent._removeChildren(this.index)}_fireChange(e,t){this.fire(`change:${e}`,t),this.parent&&this.parent._fireChange(e,t)}toJSON(){const e=Av(this);return delete e.parent,e}}$s.prototype.is=function(s){return s==="node"||s==="view:node"};class $t extends $s{constructor(e,t){super(e),this._textData=t}get data(){return this._textData}get _data(){return this.data}set _data(e){this._fireChange("text",this),this._textData=e}isSimilar(e){return e instanceof $t&&(this===e||this.data===e.data)}_clone(){return new $t(this.document,this.data)}}$t.prototype.is=function(s){return s==="$text"||s==="view:$text"||s==="text"||s==="view:text"||s==="node"||s==="view:node"};class Fi extends js{constructor(e,t,o){if(super(),this.textNode=e,t<0||t>e.data.length)throw new P("view-textproxy-wrong-offsetintext",this);if(o<0||t+o>e.data.length)throw new P("view-textproxy-wrong-length",this);this.data=e.data.substring(t,t+o),this.offsetInText=t}get offsetSize(){return this.data.length}get isPartial(){return this.data.length!==this.textNode.data.length}get parent(){return this.textNode.parent}get root(){return this.textNode.root}get document(){return this.textNode.document}getAncestors(e={}){const t=[];let o=e.includeSelf?this.textNode:this.parent;for(;o!==null;)t[e.parentFirst?"push":"unshift"](o),o=o.parent;return t}}Fi.prototype.is=function(s){return s==="$textProxy"||s==="view:$textProxy"||s==="textProxy"||s==="view:textProxy"};class zi{constructor(...e){this._patterns=[],this.add(...e)}add(...e){for(let t of e)(typeof t=="string"||t instanceof RegExp)&&(t={name:t}),this._patterns.push(t)}match(...e){for(const t of e)for(const o of this._patterns){const a=Cv(t,o);if(a)return{element:t,pattern:o,match:a}}return null}matchAll(...e){const t=[];for(const o of e)for(const a of this._patterns){const c=Cv(o,a);c&&t.push({element:o,pattern:a,match:c})}return t.length>0?t:null}getElementName(){if(this._patterns.length!==1)return null;const e=this._patterns[0],t=e.name;return typeof e=="function"||!t||t instanceof RegExp?null:t}}function Cv(s,e){if(typeof e=="function")return e(s);const t={};return e.name&&(t.name=function(o,a){return o instanceof RegExp?!!a.match(o):o===a}(e.name,s.name),!t.name)||e.attributes&&(t.attributes=function(o,a){const c=new Set(a.getAttributeKeys());return An(o)?(o.style!==void 0&&V("matcher-pattern-deprecated-attributes-style-key",o),o.class!==void 0&&V("matcher-pattern-deprecated-attributes-class-key",o)):(c.delete("style"),c.delete("class")),dm(o,c,d=>a.getAttribute(d))}(e.attributes,s),!t.attributes)||e.classes&&(t.classes=function(o,a){return dm(o,a.getClassNames(),()=>{})}(e.classes,s),!t.classes)||e.styles&&(t.styles=function(o,a){return dm(o,a.getStyleNames(!0),c=>a.getStyle(c))}(e.styles,s),!t.styles)?null:t}function dm(s,e,t){const o=function(d){return Array.isArray(d)?d.map(h=>An(h)?(h.key!==void 0&&h.value!==void 0||V("matcher-pattern-missing-key-or-value",h),[h.key,h.value]):[h,!0]):An(d)?Object.entries(d):[[d,!0]]}(s),a=Array.from(e),c=[];if(o.forEach(([d,h])=>{a.forEach(g=>{(function(k,w){return k===!0||k===w||k instanceof RegExp&&w.match(k)})(d,g)&&function(k,w,C){if(k===!0)return!0;const E=C(w);return k===E||k instanceof RegExp&&!!String(E).match(k)}(h,g,t)&&c.push(g)})}),o.length&&!(c.length<o.length))return c}const Fu=function(s){return typeof s=="symbol"||Bt(s)&&Dn(s)=="[object Symbol]"};var IO=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,MO=/^\w*$/;const um=function(s,e){if(It(s))return!1;var t=typeof s;return!(t!="number"&&t!="symbol"&&t!="boolean"&&s!=null&&!Fu(s))||MO.test(s)||!IO.test(s)||e!=null&&s in Object(e)};function hm(s,e){if(typeof s!="function"||e!=null&&typeof e!="function")throw new TypeError("Expected a function");var t=function(){var o=arguments,a=e?e.apply(this,o):o[0],c=t.cache;if(c.has(a))return c.get(a);var d=s.apply(this,o);return t.cache=c.set(a,d)||c,d};return t.cache=new(hm.Cache||Wo),t}hm.Cache=Wo;const OO=hm,BO=function(s){var e=OO(s,function(o){return t.size===500&&t.clear(),o}),t=e.cache;return e};var PO=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,NO=/\\(\\)?/g,LO=BO(function(s){var e=[];return s.charCodeAt(0)===46&&e.push(""),s.replace(PO,function(t,o,a,c){e.push(a?c.replace(NO,"$1"):o||t)}),e});const RO=LO,FO=function(s,e){for(var t=-1,o=s==null?0:s.length,a=Array(o);++t<o;)a[t]=e(s[t],t,s);return a};var yv=He?He.prototype:void 0,xv=yv?yv.toString:void 0;const zO=function s(e){if(typeof e=="string")return e;if(It(e))return FO(e,s)+"";if(Fu(e))return xv?xv.call(e):"";var t=e+"";return t=="0"&&1/e==-1/0?"-0":t},pm=function(s){return s==null?"":zO(s)},zu=function(s,e){return It(s)?s:um(s,e)?[s]:RO(pm(s))},jO=function(s){var e=s==null?0:s.length;return e?s[e-1]:void 0},Qa=function(s){if(typeof s=="string"||Fu(s))return s;var e=s+"";return e=="0"&&1/s==-1/0?"-0":e},fm=function(s,e){for(var t=0,o=(e=zu(e,s)).length;s!=null&&t<o;)s=s[Qa(e[t++])];return t&&t==o?s:void 0},Ev=function(s,e,t){var o=-1,a=s.length;e<0&&(e=-e>a?0:a+e),(t=t>a?a:t)<0&&(t+=a),a=e>t?0:t-e>>>0,e>>>=0;for(var c=Array(a);++o<a;)c[o]=s[o+e];return c},$O=function(s,e){return e.length<2?s:fm(s,Ev(e,0,-1))},VO=function(s,e){return e=zu(e,s),(s=$O(s,e))==null||delete s[Qa(jO(e))]},HO=function(s,e){return s==null||VO(s,e)},Gc=function(s,e,t){var o=s==null?void 0:fm(s,e);return o===void 0?t:o},UO=function(s,e,t,o){if(!$e(s))return s;for(var a=-1,c=(e=zu(e,s)).length,d=c-1,h=s;h!=null&&++a<c;){var g=Qa(e[a]),k=t;if(g==="__proto__"||g==="constructor"||g==="prototype")return s;if(a!=d){var w=h[g];(k=o?o(w,g,h):void 0)===void 0&&(k=$e(w)?w:rr(e[a+1])?[]:{})}Ps(h,g,k),h=h[g]}return s},qO=function(s,e,t){return s==null?s:UO(s,e,t)};class mm{constructor(e){this._styles={},this._styleProcessor=e}get isEmpty(){return!Object.entries(this._styles).length}get size(){return this.isEmpty?0:this.getStyleNames().length}setTo(e){this.clear();const t=function(o){let a=null,c=0,d=0,h=null;const g=new Map;if(o==="")return g;o.charAt(o.length-1)!=";"&&(o+=";");for(let k=0;k<o.length;k++){const w=o.charAt(k);if(a===null)switch(w){case":":h||(h=o.substr(c,k-c),d=k+1);break;case'"':case"'":a=w;break;case";":{const C=o.substr(d,k-d);h&&g.set(h.trim(),C.trim()),h=null,c=k+1;break}}else w===a&&(a=null)}return g}(e);for(const[o,a]of t)this._styleProcessor.toNormalizedForm(o,a,this._styles)}has(e){if(this.isEmpty)return!1;const t=this._styleProcessor.getReducedForm(e,this._styles).find(([o])=>o===e);return Array.isArray(t)}set(e,t){if($e(e))for(const[o,a]of Object.entries(e))this._styleProcessor.toNormalizedForm(o,a,this._styles);else this._styleProcessor.toNormalizedForm(e,t,this._styles)}remove(e){const t=gm(e);HO(this._styles,t),delete this._styles[e],this._cleanEmptyObjectsOnPath(t)}getNormalized(e){return this._styleProcessor.getNormalized(e,this._styles)}toString(){return this.isEmpty?"":this.getStylesEntries().map(e=>e.join(":")).sort().join(";")+";"}getAsString(e){if(this.isEmpty)return;if(this._styles[e]&&!$e(this._styles[e]))return this._styles[e];const t=this._styleProcessor.getReducedForm(e,this._styles).find(([o])=>o===e);return Array.isArray(t)?t[1]:void 0}getStyleNames(e=!1){return this.isEmpty?[]:e?this._styleProcessor.getStyleNames(this._styles):this.getStylesEntries().map(([t])=>t)}clear(){this._styles={}}getStylesEntries(){const e=[],t=Object.keys(this._styles);for(const o of t)e.push(...this._styleProcessor.getReducedForm(o,this._styles));return e}_cleanEmptyObjectsOnPath(e){const t=e.split(".");if(!(t.length>1))return;const o=t.splice(0,t.length-1).join("."),a=Gc(this._styles,o);a&&!Object.keys(a).length&&this.remove(o)}}class GO{constructor(){this._normalizers=new Map,this._extractors=new Map,this._reducers=new Map,this._consumables=new Map}toNormalizedForm(e,t,o){if($e(t))bm(o,gm(e),t);else if(this._normalizers.has(e)){const a=this._normalizers.get(e),{path:c,value:d}=a(t);bm(o,c,d)}else bm(o,e,t)}getNormalized(e,t){if(!e)return nm({},t);if(t[e]!==void 0)return t[e];if(this._extractors.has(e)){const o=this._extractors.get(e);if(typeof o=="string")return Gc(t,o);const a=o(e,t);if(a)return a}return Gc(t,gm(e))}getReducedForm(e,t){const o=this.getNormalized(e,t);return o===void 0?[]:this._reducers.has(e)?this._reducers.get(e)(o):[[e,o]]}getStyleNames(e){const t=Array.from(this._consumables.keys()).filter(a=>{const c=this.getNormalized(a,e);return c&&typeof c=="object"?Object.keys(c).length:c}),o=new Set([...t,...Object.keys(e)]);return Array.from(o)}getRelatedStyles(e){return this._consumables.get(e)||[]}setNormalizer(e,t){this._normalizers.set(e,t)}setExtractor(e,t){this._extractors.set(e,t)}setReducer(e,t){this._reducers.set(e,t)}setStyleRelation(e,t){this._mapStyleNames(e,t);for(const o of t)this._mapStyleNames(o,[e])}_mapStyleNames(e,t){this._consumables.has(e)||this._consumables.set(e,[]),this._consumables.get(e).push(...t)}}function gm(s){return s.replace("-",".")}function bm(s,e,t){let o=t;$e(t)&&(o=nm({},Gc(s,e),t)),qO(s,e,o)}class Mo extends $s{constructor(e,t,o,a){if(super(e),this._unsafeAttributesToRender=[],this._customProperties=new Map,this.name=t,this._attrs=function(c){const d=Ri(c);for(const[h,g]of d)g===null?d.delete(h):typeof g!="string"&&d.set(h,String(g));return d}(o),this._children=[],a&&this._insertChild(0,a),this._classes=new Set,this._attrs.has("class")){const c=this._attrs.get("class");Sv(this._classes,c),this._attrs.delete("class")}this._styles=new mm(this.document.stylesProcessor),this._attrs.has("style")&&(this._styles.setTo(this._attrs.get("style")),this._attrs.delete("style"))}get childCount(){return this._children.length}get isEmpty(){return this._children.length===0}getChild(e){return this._children[e]}getChildIndex(e){return this._children.indexOf(e)}getChildren(){return this._children[Symbol.iterator]()}*getAttributeKeys(){this._classes.size>0&&(yield"class"),this._styles.isEmpty||(yield"style"),yield*this._attrs.keys()}*getAttributes(){yield*this._attrs.entries(),this._classes.size>0&&(yield["class",this.getAttribute("class")]),this._styles.isEmpty||(yield["style",this.getAttribute("style")])}getAttribute(e){if(e=="class")return this._classes.size>0?[...this._classes].join(" "):void 0;if(e=="style"){const t=this._styles.toString();return t==""?void 0:t}return this._attrs.get(e)}hasAttribute(e){return e=="class"?this._classes.size>0:e=="style"?!this._styles.isEmpty:this._attrs.has(e)}isSimilar(e){if(!(e instanceof Mo))return!1;if(this===e)return!0;if(this.name!=e.name||this._attrs.size!==e._attrs.size||this._classes.size!==e._classes.size||this._styles.size!==e._styles.size)return!1;for(const[t,o]of this._attrs)if(!e._attrs.has(t)||e._attrs.get(t)!==o)return!1;for(const t of this._classes)if(!e._classes.has(t))return!1;for(const t of this._styles.getStyleNames())if(!e._styles.has(t)||e._styles.getAsString(t)!==this._styles.getAsString(t))return!1;return!0}hasClass(...e){for(const t of e)if(!this._classes.has(t))return!1;return!0}getClassNames(){return this._classes.keys()}getStyle(e){return this._styles.getAsString(e)}getNormalizedStyle(e){return this._styles.getNormalized(e)}getStyleNames(e){return this._styles.getStyleNames(e)}hasStyle(...e){for(const t of e)if(!this._styles.has(t))return!1;return!0}findAncestor(...e){const t=new zi(...e);let o=this.parent;for(;o&&!o.is("documentFragment");){if(t.match(o))return o;o=o.parent}return null}getCustomProperty(e){return this._customProperties.get(e)}*getCustomProperties(){yield*this._customProperties.entries()}getIdentity(){const e=Array.from(this._classes).sort().join(","),t=this._styles.toString(),o=Array.from(this._attrs).map(a=>`${a[0]}="${a[1]}"`).sort().join(" ");return this.name+(e==""?"":` class="${e}"`)+(t?` style="${t}"`:"")+(o==""?"":` ${o}`)}shouldRenderUnsafeAttribute(e){return this._unsafeAttributesToRender.includes(e)}_clone(e=!1){const t=[];if(e)for(const a of this.getChildren())t.push(a._clone(e));const o=new this.constructor(this.document,this.name,this._attrs,t);return o._classes=new Set(this._classes),o._styles.set(this._styles.getNormalized()),o._customProperties=new Map(this._customProperties),o.getFillerOffset=this.getFillerOffset,o._unsafeAttributesToRender=this._unsafeAttributesToRender,o}_appendChild(e){return this._insertChild(this.childCount,e)}_insertChild(e,t){this._fireChange("children",this);let o=0;const a=function(c,d){return typeof d=="string"?[new $t(c,d)]:(he(d)||(d=[d]),Array.from(d).map(h=>typeof h=="string"?new $t(c,h):h instanceof Fi?new $t(c,h.data):h))}(this.document,t);for(const c of a)c.parent!==null&&c._remove(),c.parent=this,c.document=this.document,this._children.splice(e,0,c),e++,o++;return o}_removeChildren(e,t=1){this._fireChange("children",this);for(let o=e;o<e+t;o++)this._children[o].parent=null;return this._children.splice(e,t)}_setAttribute(e,t){const o=String(t);this._fireChange("attributes",this),e=="class"?Sv(this._classes,o):e=="style"?this._styles.setTo(o):this._attrs.set(e,o)}_removeAttribute(e){return this._fireChange("attributes",this),e=="class"?this._classes.size>0&&(this._classes.clear(),!0):e=="style"?!this._styles.isEmpty&&(this._styles.clear(),!0):this._attrs.delete(e)}_addClass(e){this._fireChange("attributes",this);for(const t of qt(e))this._classes.add(t)}_removeClass(e){this._fireChange("attributes",this);for(const t of qt(e))this._classes.delete(t)}_setStyle(e,t){this._fireChange("attributes",this),typeof e!="string"?this._styles.set(e):this._styles.set(e,t)}_removeStyle(e){this._fireChange("attributes",this);for(const t of qt(e))this._styles.remove(t)}_setCustomProperty(e,t){this._customProperties.set(e,t)}_removeCustomProperty(e){return this._customProperties.delete(e)}}function Sv(s,e){const t=e.split(/\s+/);s.clear(),t.forEach(o=>s.add(o))}Mo.prototype.is=function(s,e){return e?e===this.name&&(s==="element"||s==="view:element"):s==="element"||s==="view:element"||s==="node"||s==="view:node"};class Wc extends Mo{constructor(e,t,o,a){super(e,t,o,a),this.getFillerOffset=WO}}function WO(){const s=[...this.getChildren()],e=s[this.childCount-1];if(e&&e.is("element","br"))return this.childCount;for(const t of s)if(!t.is("uiElement"))return null;return this.childCount}Wc.prototype.is=function(s,e){return e?e===this.name&&(s==="containerElement"||s==="view:containerElement"||s==="element"||s==="view:element"):s==="containerElement"||s==="view:containerElement"||s==="element"||s==="view:element"||s==="node"||s==="view:node"};class ju extends K(Wc){constructor(e,t,o,a){super(e,t,o,a),this.set("isReadOnly",!1),this.set("isFocused",!1),this.set("placeholder",void 0),this.bind("isReadOnly").to(e),this.bind("isFocused").to(e,"isFocused",c=>c&&e.selection.editableElement==this),this.listenTo(e.selection,"change",()=>{this.isFocused=e.isFocused&&e.selection.editableElement==this})}destroy(){this.stopListening()}}ju.prototype.is=function(s,e){return e?e===this.name&&(s==="editableElement"||s==="view:editableElement"||s==="containerElement"||s==="view:containerElement"||s==="element"||s==="view:element"):s==="editableElement"||s==="view:editableElement"||s==="containerElement"||s==="view:containerElement"||s==="element"||s==="view:element"||s==="node"||s==="view:node"};const Tv=Symbol("rootName");class Dv extends ju{constructor(e,t){super(e,t),this.rootName="main"}get rootName(){return this.getCustomProperty(Tv)}set rootName(e){this._setCustomProperty(Tv,e)}set _name(e){this.name=e}}Dv.prototype.is=function(s,e){return e?e===this.name&&(s==="rootElement"||s==="view:rootElement"||s==="editableElement"||s==="view:editableElement"||s==="containerElement"||s==="view:containerElement"||s==="element"||s==="view:element"):s==="rootElement"||s==="view:rootElement"||s==="editableElement"||s==="view:editableElement"||s==="containerElement"||s==="view:containerElement"||s==="element"||s==="view:element"||s==="node"||s==="view:node"};class Vs{constructor(e={}){if(!e.boundaries&&!e.startPosition)throw new P("view-tree-walker-no-start-position",null);if(e.direction&&e.direction!="forward"&&e.direction!="backward")throw new P("view-tree-walker-unknown-direction",e.startPosition,{direction:e.direction});this.boundaries=e.boundaries||null,e.startPosition?this._position=Me._createAt(e.startPosition):this._position=Me._createAt(e.boundaries[e.direction=="backward"?"end":"start"]),this.direction=e.direction||"forward",this.singleCharacters=!!e.singleCharacters,this.shallow=!!e.shallow,this.ignoreElementEnd=!!e.ignoreElementEnd,this._boundaryStartParent=this.boundaries?this.boundaries.start.parent:null,this._boundaryEndParent=this.boundaries?this.boundaries.end.parent:null}[Symbol.iterator](){return this}get position(){return this._position}skip(e){let t,o;do o=this.position,t=this.next();while(!t.done&&e(t.value));t.done||(this._position=o)}next(){return this.direction=="forward"?this._next():this._previous()}_next(){let e=this.position.clone();const t=this.position,o=e.parent;if(o.parent===null&&e.offset===o.childCount)return{done:!0,value:void 0};if(o===this._boundaryEndParent&&e.offset==this.boundaries.end.offset)return{done:!0,value:void 0};let a;if(o instanceof $t){if(e.isAtEnd)return this._position=Me._createAfter(o),this._next();a=o.data[e.offset]}else a=o.getChild(e.offset);if(a instanceof Mo){if(this.shallow){if(this.boundaries&&this.boundaries.end.isBefore(e))return{done:!0,value:void 0};e.offset++}else e=new Me(a,0);return this._position=e,this._formatReturnValue("elementStart",a,t,e,1)}if(a instanceof $t){if(this.singleCharacters)return e=new Me(a,0),this._position=e,this._next();let c,d=a.data.length;return a==this._boundaryEndParent?(d=this.boundaries.end.offset,c=new Fi(a,0,d),e=Me._createAfter(c)):(c=new Fi(a,0,a.data.length),e.offset++),this._position=e,this._formatReturnValue("text",c,t,e,d)}if(typeof a=="string"){let c;this.singleCharacters?c=1:c=(o===this._boundaryEndParent?this.boundaries.end.offset:o.data.length)-e.offset;const d=new Fi(o,e.offset,c);return e.offset+=c,this._position=e,this._formatReturnValue("text",d,t,e,c)}return e=Me._createAfter(o),this._position=e,this.ignoreElementEnd?this._next():this._formatReturnValue("elementEnd",o,t,e)}_previous(){let e=this.position.clone();const t=this.position,o=e.parent;if(o.parent===null&&e.offset===0)return{done:!0,value:void 0};if(o==this._boundaryStartParent&&e.offset==this.boundaries.start.offset)return{done:!0,value:void 0};let a;if(o instanceof $t){if(e.isAtStart)return this._position=Me._createBefore(o),this._previous();a=o.data[e.offset-1]}else a=o.getChild(e.offset-1);if(a instanceof Mo)return this.shallow?(e.offset--,this._position=e,this._formatReturnValue("elementStart",a,t,e,1)):(e=new Me(a,a.childCount),this._position=e,this.ignoreElementEnd?this._previous():this._formatReturnValue("elementEnd",a,t,e));if(a instanceof $t){if(this.singleCharacters)return e=new Me(a,a.data.length),this._position=e,this._previous();let c,d=a.data.length;if(a==this._boundaryStartParent){const h=this.boundaries.start.offset;c=new Fi(a,h,a.data.length-h),d=c.data.length,e=Me._createBefore(c)}else c=new Fi(a,0,a.data.length),e.offset--;return this._position=e,this._formatReturnValue("text",c,t,e,d)}if(typeof a=="string"){let c;if(this.singleCharacters)c=1;else{const h=o===this._boundaryStartParent?this.boundaries.start.offset:0;c=e.offset-h}e.offset-=c;const d=new Fi(o,e.offset,c);return this._position=e,this._formatReturnValue("text",d,t,e,c)}return e=Me._createBefore(o),this._position=e,this._formatReturnValue("elementStart",o,t,e,1)}_formatReturnValue(e,t,o,a,c){return t instanceof Fi&&(t.offsetInText+t.data.length==t.textNode.data.length&&(this.direction!="forward"||this.boundaries&&this.boundaries.end.isEqual(this.position)?o=Me._createAfter(t.textNode):(a=Me._createAfter(t.textNode),this._position=a)),t.offsetInText===0&&(this.direction!="backward"||this.boundaries&&this.boundaries.start.isEqual(this.position)?o=Me._createBefore(t.textNode):(a=Me._createBefore(t.textNode),this._position=a))),{done:!1,value:{type:e,item:t,previousPosition:o,nextPosition:a,length:c}}}}class Me extends js{constructor(e,t){super(),this.parent=e,this.offset=t}get nodeAfter(){return this.parent.is("$text")?null:this.parent.getChild(this.offset)||null}get nodeBefore(){return this.parent.is("$text")?null:this.parent.getChild(this.offset-1)||null}get isAtStart(){return this.offset===0}get isAtEnd(){const e=this.parent.is("$text")?this.parent.data.length:this.parent.childCount;return this.offset===e}get root(){return this.parent.root}get editableElement(){let e=this.parent;for(;!(e instanceof ju);){if(!e.parent)return null;e=e.parent}return e}getShiftedBy(e){const t=Me._createAt(this),o=t.offset+e;return t.offset=o<0?0:o,t}getLastMatchingPosition(e,t={}){t.startPosition=this;const o=new Vs(t);return o.skip(e),o.position}getAncestors(){return this.parent.is("documentFragment")?[this.parent]:this.parent.getAncestors({includeSelf:!0})}getCommonAncestor(e){const t=this.getAncestors(),o=e.getAncestors();let a=0;for(;t[a]==o[a]&&t[a];)a++;return a===0?null:t[a-1]}isEqual(e){return this.parent==e.parent&&this.offset==e.offset}isBefore(e){return this.compareWith(e)=="before"}isAfter(e){return this.compareWith(e)=="after"}compareWith(e){if(this.root!==e.root)return"different";if(this.isEqual(e))return"same";const t=this.parent.is("node")?this.parent.getPath():[],o=e.parent.is("node")?e.parent.getPath():[];t.push(this.offset),o.push(e.offset);const a=we(t,o);switch(a){case"prefix":return"before";case"extension":return"after";default:return t[a]<o[a]?"before":"after"}}getWalker(e={}){return e.startPosition=this,new Vs(e)}clone(){return new Me(this.parent,this.offset)}static _createAt(e,t){if(e instanceof Me)return new this(e.parent,e.offset);{const o=e;if(t=="end")t=o.is("$text")?o.data.length:o.childCount;else{if(t=="before")return this._createBefore(o);if(t=="after")return this._createAfter(o);if(t!==0&&!t)throw new P("view-createpositionat-offset-required",o)}return new Me(o,t)}}static _createAfter(e){if(e.is("$textProxy"))return new Me(e.textNode,e.offsetInText+e.data.length);if(!e.parent)throw new P("view-position-after-root",e,{root:e});return new Me(e.parent,e.index+1)}static _createBefore(e){if(e.is("$textProxy"))return new Me(e.textNode,e.offsetInText);if(!e.parent)throw new P("view-position-before-root",e,{root:e});return new Me(e.parent,e.index)}}Me.prototype.is=function(s){return s==="position"||s==="view:position"};class tt extends js{constructor(e,t=null){super(),this.start=e.clone(),this.end=t?t.clone():e.clone()}*[Symbol.iterator](){yield*new Vs({boundaries:this,ignoreElementEnd:!0})}get isCollapsed(){return this.start.isEqual(this.end)}get isFlat(){return this.start.parent===this.end.parent}get root(){return this.start.root}getEnlarged(){let e=this.start.getLastMatchingPosition($u,{direction:"backward"}),t=this.end.getLastMatchingPosition($u);return e.parent.is("$text")&&e.isAtStart&&(e=Me._createBefore(e.parent)),t.parent.is("$text")&&t.isAtEnd&&(t=Me._createAfter(t.parent)),new tt(e,t)}getTrimmed(){let e=this.start.getLastMatchingPosition($u);if(e.isAfter(this.end)||e.isEqual(this.end))return new tt(e,e);let t=this.end.getLastMatchingPosition($u,{direction:"backward"});const o=e.nodeAfter,a=t.nodeBefore;return o&&o.is("$text")&&(e=new Me(o,0)),a&&a.is("$text")&&(t=new Me(a,a.data.length)),new tt(e,t)}isEqual(e){return this==e||this.start.isEqual(e.start)&&this.end.isEqual(e.end)}containsPosition(e){return e.isAfter(this.start)&&e.isBefore(this.end)}containsRange(e,t=!1){e.isCollapsed&&(t=!1);const o=this.containsPosition(e.start)||t&&this.start.isEqual(e.start),a=this.containsPosition(e.end)||t&&this.end.isEqual(e.end);return o&&a}getDifference(e){const t=[];return this.isIntersecting(e)?(this.containsPosition(e.start)&&t.push(new tt(this.start,e.start)),this.containsPosition(e.end)&&t.push(new tt(e.end,this.end))):t.push(this.clone()),t}getIntersection(e){if(this.isIntersecting(e)){let t=this.start,o=this.end;return this.containsPosition(e.start)&&(t=e.start),this.containsPosition(e.end)&&(o=e.end),new tt(t,o)}return null}getWalker(e={}){return e.boundaries=this,new Vs(e)}getCommonAncestor(){return this.start.getCommonAncestor(this.end)}getContainedElement(){if(this.isCollapsed)return null;let e=this.start.nodeAfter,t=this.end.nodeBefore;return this.start.parent.is("$text")&&this.start.isAtEnd&&this.start.parent.nextSibling&&(e=this.start.parent.nextSibling),this.end.parent.is("$text")&&this.end.isAtStart&&this.end.parent.previousSibling&&(t=this.end.parent.previousSibling),e&&e.is("element")&&e===t?e:null}clone(){return new tt(this.start,this.end)}*getItems(e={}){e.boundaries=this,e.ignoreElementEnd=!0;const t=new Vs(e);for(const o of t)yield o.item}*getPositions(e={}){e.boundaries=this;const t=new Vs(e);yield t.position;for(const o of t)yield o.nextPosition}isIntersecting(e){return this.start.isBefore(e.end)&&this.end.isAfter(e.start)}static _createFromParentsAndOffsets(e,t,o,a){return new this(new Me(e,t),new Me(o,a))}static _createFromPositionAndShift(e,t){const o=e,a=e.getShiftedBy(t);return t>0?new this(o,a):new this(a,o)}static _createIn(e){return this._createFromParentsAndOffsets(e,0,e,e.childCount)}static _createOn(e){const t=e.is("$textProxy")?e.offsetSize:1;return this._createFromPositionAndShift(Me._createBefore(e),t)}}function $u(s){return!(!s.item.is("attributeElement")&&!s.item.is("uiElement"))}tt.prototype.is=function(s){return s==="range"||s==="view:range"};class _i extends ie(js){constructor(...e){super(),this._ranges=[],this._lastRangeBackward=!1,this._isFake=!1,this._fakeSelectionLabel="",e.length&&this.setTo(...e)}get isFake(){return this._isFake}get fakeSelectionLabel(){return this._fakeSelectionLabel}get anchor(){if(!this._ranges.length)return null;const e=this._ranges[this._ranges.length-1];return(this._lastRangeBackward?e.end:e.start).clone()}get focus(){if(!this._ranges.length)return null;const e=this._ranges[this._ranges.length-1];return(this._lastRangeBackward?e.start:e.end).clone()}get isCollapsed(){return this.rangeCount===1&&this._ranges[0].isCollapsed}get rangeCount(){return this._ranges.length}get isBackward(){return!this.isCollapsed&&this._lastRangeBackward}get editableElement(){return this.anchor?this.anchor.editableElement:null}*getRanges(){for(const e of this._ranges)yield e.clone()}getFirstRange(){let e=null;for(const t of this._ranges)e&&!t.start.isBefore(e.start)||(e=t);return e?e.clone():null}getLastRange(){let e=null;for(const t of this._ranges)e&&!t.end.isAfter(e.end)||(e=t);return e?e.clone():null}getFirstPosition(){const e=this.getFirstRange();return e?e.start.clone():null}getLastPosition(){const e=this.getLastRange();return e?e.end.clone():null}isEqual(e){if(this.isFake!=e.isFake||this.isFake&&this.fakeSelectionLabel!=e.fakeSelectionLabel||this.rangeCount!=e.rangeCount)return!1;if(this.rangeCount===0)return!0;if(!this.anchor.isEqual(e.anchor)||!this.focus.isEqual(e.focus))return!1;for(const t of this._ranges){let o=!1;for(const a of e._ranges)if(t.isEqual(a)){o=!0;break}if(!o)return!1}return!0}isSimilar(e){if(this.isBackward!=e.isBackward)return!1;const t=Ae(this.getRanges());if(t!=Ae(e.getRanges()))return!1;if(t==0)return!0;for(let o of this.getRanges()){o=o.getTrimmed();let a=!1;for(let c of e.getRanges())if(c=c.getTrimmed(),o.start.isEqual(c.start)&&o.end.isEqual(c.end)){a=!0;break}if(!a)return!1}return!0}getSelectedElement(){return this.rangeCount!==1?null:this.getFirstRange().getContainedElement()}setTo(...e){let[t,o,a]=e;if(typeof o=="object"&&(a=o,o=void 0),t===null)this._setRanges([]),this._setFakeOptions(a);else if(t instanceof _i||t instanceof km)this._setRanges(t.getRanges(),t.isBackward),this._setFakeOptions({fake:t.isFake,label:t.fakeSelectionLabel});else if(t instanceof tt)this._setRanges([t],a&&a.backward),this._setFakeOptions(a);else if(t instanceof Me)this._setRanges([new tt(t)]),this._setFakeOptions(a);else if(t instanceof $s){const c=!!a&&!!a.backward;let d;if(o===void 0)throw new P("view-selection-setto-required-second-parameter",this);d=o=="in"?tt._createIn(t):o=="on"?tt._createOn(t):new tt(Me._createAt(t,o)),this._setRanges([d],c),this._setFakeOptions(a)}else{if(!he(t))throw new P("view-selection-setto-not-selectable",this);this._setRanges(t,a&&a.backward),this._setFakeOptions(a)}this.fire("change")}setFocus(e,t){if(this.anchor===null)throw new P("view-selection-setfocus-no-ranges",this);const o=Me._createAt(e,t);if(o.compareWith(this.focus)=="same")return;const a=this.anchor;this._ranges.pop(),o.compareWith(a)=="before"?this._addRange(new tt(o,a),!0):this._addRange(new tt(a,o)),this.fire("change")}_setRanges(e,t=!1){e=Array.from(e),this._ranges=[];for(const o of e)this._addRange(o);this._lastRangeBackward=!!t}_setFakeOptions(e={}){this._isFake=!!e.fake,this._fakeSelectionLabel=e.fake&&e.label||""}_addRange(e,t=!1){if(!(e instanceof tt))throw new P("view-selection-add-range-not-range",this);this._pushRange(e),this._lastRangeBackward=!!t}_pushRange(e){for(const t of this._ranges)if(e.isIntersecting(t))throw new P("view-selection-range-intersects",this,{addedRange:e,intersectingRange:t});this._ranges.push(new tt(e.start,e.end))}}_i.prototype.is=function(s){return s==="selection"||s==="view:selection"};class km extends ie(js){constructor(...e){super(),this._selection=new _i,this._selection.delegate("change").to(this),e.length&&this._selection.setTo(...e)}get isFake(){return this._selection.isFake}get fakeSelectionLabel(){return this._selection.fakeSelectionLabel}get anchor(){return this._selection.anchor}get focus(){return this._selection.focus}get isCollapsed(){return this._selection.isCollapsed}get rangeCount(){return this._selection.rangeCount}get isBackward(){return this._selection.isBackward}get editableElement(){return this._selection.editableElement}get _ranges(){return this._selection._ranges}*getRanges(){yield*this._selection.getRanges()}getFirstRange(){return this._selection.getFirstRange()}getLastRange(){return this._selection.getLastRange()}getFirstPosition(){return this._selection.getFirstPosition()}getLastPosition(){return this._selection.getLastPosition()}getSelectedElement(){return this._selection.getSelectedElement()}isEqual(e){return this._selection.isEqual(e)}isSimilar(e){return this._selection.isSimilar(e)}_setTo(...e){this._selection.setTo(...e)}_setFocus(e,t){this._selection.setFocus(e,t)}}km.prototype.is=function(s){return s==="selection"||s=="documentSelection"||s=="view:selection"||s=="view:documentSelection"};class Za extends N{constructor(e,t,o){super(e,t),this.startRange=o,this._eventPhase="none",this._currentTarget=null}get eventPhase(){return this._eventPhase}get currentTarget(){return this._currentTarget}}const _m=Symbol("bubbling contexts");function wm(s){return class extends s{fire(e,...t){try{const o=e instanceof N?e:new N(this,e),a=vm(this);if(!a.size)return;if(Kc(o,"capturing",this),Ja(a,"$capture",o,...t))return o.return;const c=o.startRange||this.selection.getFirstRange(),d=c?c.getContainedElement():null,h=!!d&&!!Iv(a,d);let g=d||function(k){if(!k)return null;const w=k.start.parent,C=k.end.parent,E=w.getPath(),D=C.getPath();return E.length>D.length?w:C}(c);if(Kc(o,"atTarget",g),!h){if(Ja(a,"$text",o,...t))return o.return;Kc(o,"bubbling",g)}for(;g;){if(g.is("rootElement")){if(Ja(a,"$root",o,...t))return o.return}else if(g.is("element")&&Ja(a,g.name,o,...t))return o.return;if(Ja(a,g,o,...t))return o.return;g=g.parent,Kc(o,"bubbling",g)}return Kc(o,"bubbling",this),Ja(a,"$document",o,...t),o.return}catch(o){P.rethrowUnexpectedError(o,this)}}_addEventListener(e,t,o){const a=qt(o.context||"$document"),c=vm(this);for(const d of a){let h=c.get(d);h||(h=new(ie()),c.set(d,h)),this.listenTo(h,e,t,o)}}_removeEventListener(e,t){const o=vm(this);for(const a of o.values())this.stopListening(a,e,t)}}}{const s=wm(Object);["fire","_addEventListener","_removeEventListener"].forEach(e=>{wm[e]=s.prototype[e]})}function Kc(s,e,t){s instanceof Za&&(s._eventPhase=e,s._currentTarget=t)}function Ja(s,e,t,...o){const a=typeof e=="string"?s.get(e):Iv(s,e);return!!a&&(a.fire(t,...o),t.stop.called)}function Iv(s,e){for(const[t,o]of s)if(typeof t=="function"&&t(e))return o;return null}function vm(s){return s[_m]||(s[_m]=new Map),s[_m]}class Vu extends wm(K()){constructor(e){super(),this._postFixers=new Set,this.selection=new km,this.roots=new bi({idProperty:"rootName"}),this.stylesProcessor=e,this.set("isReadOnly",!1),this.set("isFocused",!1),this.set("isSelecting",!1),this.set("isComposing",!1)}getRoot(e="main"){return this.roots.get(e)}registerPostFixer(e){this._postFixers.add(e)}destroy(){this.roots.forEach(e=>e.destroy()),this.stopListening()}_callPostFixers(e){let t=!1;do for(const o of this._postFixers)if(t=o(e),t)break;while(t)}}class Hs extends Mo{constructor(e,t,o,a){super(e,t,o,a),this._priority=10,this._id=null,this._clonesGroup=null,this.getFillerOffset=KO}get priority(){return this._priority}get id(){return this._id}getElementsWithSameId(){if(this.id===null)throw new P("attribute-element-get-elements-with-same-id-no-id",this);return new Set(this._clonesGroup)}isSimilar(e){return this.id!==null||e.id!==null?this.id===e.id:super.isSimilar(e)&&this.priority==e.priority}_clone(e=!1){const t=super._clone(e);return t._priority=this._priority,t._id=this._id,t}}function KO(){if(Am(this))return null;let s=this.parent;for(;s&&s.is("attributeElement");){if(Am(s)>1)return null;s=s.parent}return!s||Am(s)>1?null:this.childCount}function Am(s){return Array.from(s.getChildren()).filter(e=>!e.is("uiElement")).length}Hs.DEFAULT_PRIORITY=10,Hs.prototype.is=function(s,e){return e?e===this.name&&(s==="attributeElement"||s==="view:attributeElement"||s==="element"||s==="view:element"):s==="attributeElement"||s==="view:attributeElement"||s==="element"||s==="view:element"||s==="node"||s==="view:node"};class Cm extends Mo{constructor(e,t,o,a){super(e,t,o,a),this.getFillerOffset=YO}_insertChild(e,t){if(t&&(t instanceof $s||Array.from(t).length>0))throw new P("view-emptyelement-cannot-add",[this,t]);return 0}}function YO(){return null}Cm.prototype.is=function(s,e){return e?e===this.name&&(s==="emptyElement"||s==="view:emptyElement"||s==="element"||s==="view:element"):s==="emptyElement"||s==="view:emptyElement"||s==="element"||s==="view:element"||s==="node"||s==="view:node"};class Hu extends Mo{constructor(e,t,o,a){super(e,t,o,a),this.getFillerOffset=ZO}_insertChild(e,t){if(t&&(t instanceof $s||Array.from(t).length>0))throw new P("view-uielement-cannot-add",[this,t]);return 0}render(e,t){return this.toDomElement(e)}toDomElement(e){const t=e.createElement(this.name);for(const o of this.getAttributeKeys())t.setAttribute(o,this.getAttribute(o));return t}}function QO(s){s.document.on("arrowKey",(e,t)=>function(o,a,c){if(a.keyCode==kt.arrowright){const d=a.domTarget.ownerDocument.defaultView.getSelection(),h=d.rangeCount==1&&d.getRangeAt(0).collapsed;if(h||a.shiftKey){const g=d.focusNode,k=d.focusOffset,w=c.domPositionToView(g,k);if(w===null)return;let C=!1;const E=w.getLastMatchingPosition(D=>(D.item.is("uiElement")&&(C=!0),!(!D.item.is("uiElement")&&!D.item.is("attributeElement"))));if(C){const D=c.viewPositionToDom(E);h?d.collapse(D.parent,D.offset):d.extend(D.parent,D.offset)}}}}(0,t,s.domConverter),{priority:"low"})}function ZO(){return null}Hu.prototype.is=function(s,e){return e?e===this.name&&(s==="uiElement"||s==="view:uiElement"||s==="element"||s==="view:element"):s==="uiElement"||s==="view:uiElement"||s==="element"||s==="view:element"||s==="node"||s==="view:node"};class ym extends Mo{constructor(e,t,o,a){super(e,t,o,a),this.getFillerOffset=JO}_insertChild(e,t){if(t&&(t instanceof $s||Array.from(t).length>0))throw new P("view-rawelement-cannot-add",[this,t]);return 0}render(e,t){}}function JO(){return null}ym.prototype.is=function(s,e){return e?e===this.name&&(s==="rawElement"||s==="view:rawElement"||s==="element"||s==="view:element"):s==="rawElement"||s==="view:rawElement"||s===this.name||s==="view:"+this.name||s==="element"||s==="view:element"||s==="node"||s==="view:node"};class Us extends ie(js){constructor(e,t){super(),this._children=[],this._customProperties=new Map,this.document=e,t&&this._insertChild(0,t)}[Symbol.iterator](){return this._children[Symbol.iterator]()}get childCount(){return this._children.length}get isEmpty(){return this.childCount===0}get root(){return this}get parent(){return null}get name(){}get getFillerOffset(){}getCustomProperty(e){return this._customProperties.get(e)}*getCustomProperties(){yield*this._customProperties.entries()}_appendChild(e){return this._insertChild(this.childCount,e)}getChild(e){return this._children[e]}getChildIndex(e){return this._children.indexOf(e)}getChildren(){return this._children[Symbol.iterator]()}_insertChild(e,t){this._fireChange("children",this);let o=0;const a=function(c,d){return typeof d=="string"?[new $t(c,d)]:(he(d)||(d=[d]),Array.from(d).map(h=>typeof h=="string"?new $t(c,h):h instanceof Fi?new $t(c,h.data):h))}(this.document,t);for(const c of a)c.parent!==null&&c._remove(),c.parent=this,this._children.splice(e,0,c),e++,o++;return o}_removeChildren(e,t=1){this._fireChange("children",this);for(let o=e;o<e+t;o++)this._children[o].parent=null;return this._children.splice(e,t)}_fireChange(e,t){this.fire("change:"+e,t)}_setCustomProperty(e,t){this._customProperties.set(e,t)}_removeCustomProperty(e){return this._customProperties.delete(e)}}Us.prototype.is=function(s){return s==="documentFragment"||s==="view:documentFragment"};class Mv{constructor(e){this._cloneGroups=new Map,this._slotFactory=null,this.document=e}setSelection(...e){this.document.selection._setTo(...e)}setSelectionFocus(e,t){this.document.selection._setFocus(e,t)}createDocumentFragment(e){return new Us(this.document,e)}createText(e){return new $t(this.document,e)}createAttributeElement(e,t,o={}){const a=new Hs(this.document,e,t);return typeof o.priority=="number"&&(a._priority=o.priority),o.id&&(a._id=o.id),o.renderUnsafeAttributes&&a._unsafeAttributesToRender.push(...o.renderUnsafeAttributes),a}createContainerElement(e,t,o={},a={}){let c=null;An(o)?a=o:c=o;const d=new Wc(this.document,e,t,c);return a.renderUnsafeAttributes&&d._unsafeAttributesToRender.push(...a.renderUnsafeAttributes),d}createEditableElement(e,t,o={}){const a=new ju(this.document,e,t);return o.renderUnsafeAttributes&&a._unsafeAttributesToRender.push(...o.renderUnsafeAttributes),a}createEmptyElement(e,t,o={}){const a=new Cm(this.document,e,t);return o.renderUnsafeAttributes&&a._unsafeAttributesToRender.push(...o.renderUnsafeAttributes),a}createUIElement(e,t,o){const a=new Hu(this.document,e,t);return o&&(a.render=o),a}createRawElement(e,t,o,a={}){const c=new ym(this.document,e,t);return o&&(c.render=o),a.renderUnsafeAttributes&&c._unsafeAttributesToRender.push(...a.renderUnsafeAttributes),c}setAttribute(e,t,o){o._setAttribute(e,t)}removeAttribute(e,t){t._removeAttribute(e)}addClass(e,t){t._addClass(e)}removeClass(e,t){t._removeClass(e)}setStyle(e,t,o){An(e)&&o===void 0?t._setStyle(e):o._setStyle(e,t)}removeStyle(e,t){t._removeStyle(e)}setCustomProperty(e,t,o){o._setCustomProperty(e,t)}removeCustomProperty(e,t){return t._removeCustomProperty(e)}breakAttributes(e){return e instanceof Me?this._breakAttributes(e):this._breakAttributesRange(e)}breakContainer(e){const t=e.parent;if(!t.is("containerElement"))throw new P("view-writer-break-non-container-element",this.document);if(!t.parent)throw new P("view-writer-break-root",this.document);if(e.isAtStart)return Me._createBefore(t);if(!e.isAtEnd){const o=t._clone(!1);this.insert(Me._createAfter(t),o);const a=new tt(e,Me._createAt(t,"end")),c=new Me(o,0);this.move(a,c)}return Me._createAfter(t)}mergeAttributes(e){const t=e.offset,o=e.parent;if(o.is("$text"))return e;if(o.is("attributeElement")&&o.childCount===0){const d=o.parent,h=o.index;return o._remove(),this._removeFromClonedElementsGroup(o),this.mergeAttributes(new Me(d,h))}const a=o.getChild(t-1),c=o.getChild(t);if(!a||!c)return e;if(a.is("$text")&&c.is("$text"))return Bv(a,c);if(a.is("attributeElement")&&c.is("attributeElement")&&a.isSimilar(c)){const d=a.childCount;return a._appendChild(c.getChildren()),c._remove(),this._removeFromClonedElementsGroup(c),this.mergeAttributes(new Me(a,d))}return e}mergeContainers(e){const t=e.nodeBefore,o=e.nodeAfter;if(!(t&&o&&t.is("containerElement")&&o.is("containerElement")))throw new P("view-writer-merge-containers-invalid-position",this.document);const a=t.getChild(t.childCount-1),c=a instanceof $t?Me._createAt(a,"end"):Me._createAt(t,"end");return this.move(tt._createIn(o),Me._createAt(t,"end")),this.remove(tt._createOn(o)),c}insert(e,t){Pv(t=he(t)?[...t]:[t],this.document);const o=t.reduce((d,h)=>{const g=d[d.length-1],k=!h.is("uiElement");return g&&g.breakAttributes==k?g.nodes.push(h):d.push({breakAttributes:k,nodes:[h]}),d},[]);let a=null,c=e;for(const{nodes:d,breakAttributes:h}of o){const g=this._insertNodes(c,d,h);a||(a=g.start),c=g.end}return a?new tt(a,c):new tt(e)}remove(e){const t=e instanceof tt?e:tt._createOn(e);if(Yc(t,this.document),t.isCollapsed)return new Us(this.document);const{start:o,end:a}=this._breakAttributesRange(t,!0),c=o.parent,d=a.offset-o.offset,h=c._removeChildren(o.offset,d);for(const k of h)this._removeFromClonedElementsGroup(k);const g=this.mergeAttributes(o);return t.start=g,t.end=g.clone(),new Us(this.document,h)}clear(e,t){Yc(e,this.document);const o=e.getWalker({direction:"backward",ignoreElementEnd:!0});for(const a of o){const c=a.item;let d;if(c.is("element")&&t.isSimilar(c))d=tt._createOn(c);else if(!a.nextPosition.isAfter(e.start)&&c.is("$textProxy")){const h=c.getAncestors().find(g=>g.is("element")&&t.isSimilar(g));h&&(d=tt._createIn(h))}d&&(d.end.isAfter(e.end)&&(d.end=e.end),d.start.isBefore(e.start)&&(d.start=e.start),this.remove(d))}}move(e,t){let o;if(t.isAfter(e.end)){const a=(t=this._breakAttributes(t,!0)).parent,c=a.childCount;e=this._breakAttributesRange(e,!0),o=this.remove(e),t.offset+=a.childCount-c}else o=this.remove(e);return this.insert(t,o)}wrap(e,t){if(!(t instanceof Hs))throw new P("view-writer-wrap-invalid-attribute",this.document);if(Yc(e,this.document),e.isCollapsed){let a=e.start;a.parent.is("element")&&(o=a.parent,!Array.from(o.getChildren()).some(d=>!d.is("uiElement")))&&(a=a.getLastMatchingPosition(d=>d.item.is("uiElement"))),a=this._wrapPosition(a,t);const c=this.document.selection;return c.isCollapsed&&c.getFirstPosition().isEqual(e.start)&&this.setSelection(a),new tt(a)}return this._wrapRange(e,t);var o}unwrap(e,t){if(!(t instanceof Hs))throw new P("view-writer-unwrap-invalid-attribute",this.document);if(Yc(e,this.document),e.isCollapsed)return e;const{start:o,end:a}=this._breakAttributesRange(e,!0),c=o.parent,d=this._unwrapChildren(c,o.offset,a.offset,t),h=this.mergeAttributes(d.start);h.isEqual(d.start)||d.end.offset--;const g=this.mergeAttributes(d.end);return new tt(h,g)}rename(e,t){const o=new Wc(this.document,e,t.getAttributes());return this.insert(Me._createAfter(t),o),this.move(tt._createIn(t),Me._createAt(o,0)),this.remove(tt._createOn(t)),o}clearClonedElementsGroup(e){this._cloneGroups.delete(e)}createPositionAt(e,t){return Me._createAt(e,t)}createPositionAfter(e){return Me._createAfter(e)}createPositionBefore(e){return Me._createBefore(e)}createRange(e,t){return new tt(e,t)}createRangeOn(e){return tt._createOn(e)}createRangeIn(e){return tt._createIn(e)}createSelection(...e){return new _i(...e)}createSlot(e="children"){if(!this._slotFactory)throw new P("view-writer-invalid-create-slot-context",this.document);return this._slotFactory(this,e)}_registerSlotFactory(e){this._slotFactory=e}_clearSlotFactory(){this._slotFactory=null}_insertNodes(e,t,o){let a,c;if(a=o?xm(e):e.parent.is("$text")?e.parent.parent:e.parent,!a)throw new P("view-writer-invalid-position-container",this.document);c=o?this._breakAttributes(e,!0):e.parent.is("$text")?Em(e):e;const d=a._insertChild(c.offset,t);for(const w of t)this._addToClonedElementsGroup(w);const h=c.getShiftedBy(d),g=this.mergeAttributes(c);g.isEqual(c)||h.offset--;const k=this.mergeAttributes(h);return new tt(g,k)}_wrapChildren(e,t,o,a){let c=t;const d=[];for(;c<o;){const g=e.getChild(c),k=g.is("$text"),w=g.is("attributeElement");if(w&&this._wrapAttributeElement(a,g))d.push(new Me(e,c));else if(k||!w||XO(a,g)){const C=a._clone();g._remove(),C._appendChild(g),e._insertChild(c,C),this._addToClonedElementsGroup(C),d.push(new Me(e,c))}else this._wrapChildren(g,0,g.childCount,a);c++}let h=0;for(const g of d)g.offset-=h,g.offset!=t&&(this.mergeAttributes(g).isEqual(g)||(h++,o--));return tt._createFromParentsAndOffsets(e,t,e,o)}_unwrapChildren(e,t,o,a){let c=t;const d=[];for(;c<o;){const g=e.getChild(c);if(g.is("attributeElement"))if(g.isSimilar(a)){const k=g.getChildren(),w=g.childCount;g._remove(),e._insertChild(c,k),this._removeFromClonedElementsGroup(g),d.push(new Me(e,c),new Me(e,c+w)),c+=w,o+=w-1}else this._unwrapAttributeElement(a,g)?(d.push(new Me(e,c),new Me(e,c+1)),c++):(this._unwrapChildren(g,0,g.childCount,a),c++);else c++}let h=0;for(const g of d)g.offset-=h,!(g.offset==t||g.offset==o)&&(this.mergeAttributes(g).isEqual(g)||(h++,o--));return tt._createFromParentsAndOffsets(e,t,e,o)}_wrapRange(e,t){const{start:o,end:a}=this._breakAttributesRange(e,!0),c=o.parent,d=this._wrapChildren(c,o.offset,a.offset,t),h=this.mergeAttributes(d.start);h.isEqual(d.start)||d.end.offset--;const g=this.mergeAttributes(d.end);return new tt(h,g)}_wrapPosition(e,t){if(t.isSimilar(e.parent))return Ov(e.clone());e.parent.is("$text")&&(e=Em(e));const o=this.createAttributeElement("_wrapPosition-fake-element");o._priority=Number.POSITIVE_INFINITY,o.isSimilar=()=>!1,e.parent._insertChild(e.offset,o);const a=new tt(e,e.getShiftedBy(1));this.wrap(a,t);const c=new Me(o.parent,o.index);o._remove();const d=c.nodeBefore,h=c.nodeAfter;return d instanceof $t&&h instanceof $t?Bv(d,h):Ov(c)}_wrapAttributeElement(e,t){if(!Nv(e,t)||e.name!==t.name||e.priority!==t.priority)return!1;for(const o of e.getAttributeKeys())if(o!=="class"&&o!=="style"&&t.hasAttribute(o)&&t.getAttribute(o)!==e.getAttribute(o))return!1;for(const o of e.getStyleNames())if(t.hasStyle(o)&&t.getStyle(o)!==e.getStyle(o))return!1;for(const o of e.getAttributeKeys())o!=="class"&&o!=="style"&&(t.hasAttribute(o)||this.setAttribute(o,e.getAttribute(o),t));for(const o of e.getStyleNames())t.hasStyle(o)||this.setStyle(o,e.getStyle(o),t);for(const o of e.getClassNames())t.hasClass(o)||this.addClass(o,t);return!0}_unwrapAttributeElement(e,t){if(!Nv(e,t)||e.name!==t.name||e.priority!==t.priority)return!1;for(const o of e.getAttributeKeys())if(o!=="class"&&o!=="style"&&(!t.hasAttribute(o)||t.getAttribute(o)!==e.getAttribute(o)))return!1;if(!t.hasClass(...e.getClassNames()))return!1;for(const o of e.getStyleNames())if(!t.hasStyle(o)||t.getStyle(o)!==e.getStyle(o))return!1;for(const o of e.getAttributeKeys())o!=="class"&&o!=="style"&&this.removeAttribute(o,t);return this.removeClass(Array.from(e.getClassNames()),t),this.removeStyle(Array.from(e.getStyleNames()),t),!0}_breakAttributesRange(e,t=!1){const o=e.start,a=e.end;if(Yc(e,this.document),e.isCollapsed){const g=this._breakAttributes(e.start,t);return new tt(g,g)}const c=this._breakAttributes(a,t),d=c.parent.childCount,h=this._breakAttributes(o,t);return c.offset+=c.parent.childCount-d,new tt(h,c)}_breakAttributes(e,t=!1){const o=e.offset,a=e.parent;if(e.parent.is("emptyElement"))throw new P("view-writer-cannot-break-empty-element",this.document);if(e.parent.is("uiElement"))throw new P("view-writer-cannot-break-ui-element",this.document);if(e.parent.is("rawElement"))throw new P("view-writer-cannot-break-raw-element",this.document);if(!t&&a.is("$text")&&Sm(a.parent)||Sm(a))return e.clone();if(a.is("$text"))return this._breakAttributes(Em(e),t);if(o==a.childCount){const c=new Me(a.parent,a.index+1);return this._breakAttributes(c,t)}if(o===0){const c=new Me(a.parent,a.index);return this._breakAttributes(c,t)}{const c=a.index+1,d=a._clone();a.parent._insertChild(c,d),this._addToClonedElementsGroup(d);const h=a.childCount-o,g=a._removeChildren(o,h);d._appendChild(g);const k=new Me(a.parent,c);return this._breakAttributes(k,t)}}_addToClonedElementsGroup(e){if(!e.root.is("rootElement"))return;if(e.is("element"))for(const a of e.getChildren())this._addToClonedElementsGroup(a);const t=e.id;if(!t)return;let o=this._cloneGroups.get(t);o||(o=new Set,this._cloneGroups.set(t,o)),o.add(e),e._clonesGroup=o}_removeFromClonedElementsGroup(e){if(e.is("element"))for(const a of e.getChildren())this._removeFromClonedElementsGroup(a);const t=e.id;if(!t)return;const o=this._cloneGroups.get(t);o&&o.delete(e)}}function xm(s){let e=s.parent;for(;!Sm(e);){if(!e)return;e=e.parent}return e}function XO(s,e){return s.priority<e.priority||!(s.priority>e.priority)&&s.getIdentity()<e.getIdentity()}function Ov(s){const e=s.nodeBefore;if(e&&e.is("$text"))return new Me(e,e.data.length);const t=s.nodeAfter;return t&&t.is("$text")?new Me(t,0):s}function Em(s){if(s.offset==s.parent.data.length)return new Me(s.parent.parent,s.parent.index+1);if(s.offset===0)return new Me(s.parent.parent,s.parent.index);const e=s.parent.data.slice(s.offset);return s.parent._data=s.parent.data.slice(0,s.offset),s.parent.parent._insertChild(s.parent.index+1,new $t(s.root.document,e)),new Me(s.parent.parent,s.parent.index+1)}function Bv(s,e){const t=s.data.length;return s._data+=e.data,e._remove(),new Me(s,t)}const e3=[$t,Hs,Wc,Cm,ym,Hu];function Pv(s,e){for(const t of s){if(!e3.some(o=>t instanceof o))throw new P("view-writer-insert-invalid-node-type",e);t.is("$text")||Pv(t.getChildren(),e)}}function Sm(s){return s&&(s.is("containerElement")||s.is("documentFragment"))}function Yc(s,e){const t=xm(s.start),o=xm(s.end);if(!t||!o||t!==o)throw new P("view-writer-invalid-range-container",e)}function Nv(s,e){return s.id===null&&e.id===null}const Lv=s=>s.createTextNode(" "),Rv=s=>{const e=s.createElement("span");return e.dataset.ckeFiller="true",e.innerText=" ",e},Fv=s=>{const e=s.createElement("br");return e.dataset.ckeFiller="true",e},wi=7,Qc="⁠".repeat(wi);function Oo(s){return typeof s=="string"?s.substr(0,wi)===Qc:hn(s)&&s.data.substr(0,wi)===Qc}function Xa(s){return s.data.length==wi&&Oo(s)}function zv(s){const e=typeof s=="string"?s:s.data;return Oo(s)?e.slice(wi):e}function t3(s,e){if(e.keyCode==kt.arrowleft){const t=e.domTarget.ownerDocument.defaultView.getSelection();if(t.rangeCount==1&&t.getRangeAt(0).collapsed){const o=t.getRangeAt(0).startContainer,a=t.getRangeAt(0).startOffset;Oo(o)&&a<=wi&&t.collapse(o,0)}}}var jv=u(8264),n3={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};De()(jv.A,n3),jv.A.locals;class o3 extends K(){constructor(e,t){super(),this.domDocuments=new Set,this.markedAttributes=new Set,this.markedChildren=new Set,this.markedTexts=new Set,this._inlineFiller=null,this._fakeSelectionContainer=null,this.domConverter=e,this.selection=t,this.set("isFocused",!1),this.set("isSelecting",!1),A.isBlink&&!A.isAndroid&&this.on("change:isSelecting",()=>{this.isSelecting||this.render()}),this.set("isComposing",!1),this.on("change:isComposing",()=>{this.isComposing||this.render()})}markToSync(e,t){if(e==="text")this.domConverter.mapViewToDom(t.parent)&&this.markedTexts.add(t);else{if(!this.domConverter.mapViewToDom(t))return;if(e==="attributes")this.markedAttributes.add(t);else{if(e!=="children")throw new P("view-renderer-unknown-type",this);this.markedChildren.add(t)}}}render(){if(this.isComposing&&!A.isAndroid)return;let e=null;const t=!(A.isBlink&&!A.isAndroid)||!this.isSelecting;for(const o of this.markedChildren)this._updateChildrenMappings(o);t?(this._inlineFiller&&!this._isSelectionInInlineFiller()&&this._removeInlineFiller(),this._inlineFiller?e=this._getInlineFillerPosition():this._needsInlineFillerAtSelection()&&(e=this.selection.getFirstPosition(),this.markedChildren.add(e.parent))):this._inlineFiller&&this._inlineFiller.parentNode&&(e=this.domConverter.domPositionToView(this._inlineFiller),e&&e.parent.is("$text")&&(e=Me._createBefore(e.parent)));for(const o of this.markedAttributes)this._updateAttrs(o);for(const o of this.markedChildren)this._updateChildren(o,{inlineFillerPosition:e});for(const o of this.markedTexts)!this.markedChildren.has(o.parent)&&this.domConverter.mapViewToDom(o.parent)&&this._updateText(o,{inlineFillerPosition:e});if(t)if(e){const o=this.domConverter.viewPositionToDom(e),a=o.parent.ownerDocument;Oo(o.parent)?this._inlineFiller=o.parent:this._inlineFiller=$v(a,o.parent,o.offset)}else this._inlineFiller=null;this._updateFocus(),this._updateSelection(),this.domConverter._clearTemporaryCustomProperties(),this.markedTexts.clear(),this.markedAttributes.clear(),this.markedChildren.clear()}_updateChildrenMappings(e){const t=this.domConverter.mapViewToDom(e);if(!t)return;const o=Array.from(t.childNodes),a=Array.from(this.domConverter.viewChildrenToDom(e,{withChildren:!1})),c=this._diffNodeLists(o,a),d=this._findUpdateActions(c,o,a,i3);if(d.indexOf("update")!==-1){const h={equal:0,insert:0,delete:0};for(const g of d)if(g==="update"){const k=h.equal+h.insert,w=h.equal+h.delete,C=e.getChild(k);!C||C.is("uiElement")||C.is("rawElement")||this._updateElementMappings(C,o[w]),Hw(a[k]),h.equal++}else h[g]++}}_updateElementMappings(e,t){this.domConverter.unbindDomElement(t),this.domConverter.bindElements(t,e),this.markedChildren.add(e),this.markedAttributes.add(e)}_getInlineFillerPosition(){const e=this.selection.getFirstPosition();return e.parent.is("$text")?Me._createBefore(e.parent):e}_isSelectionInInlineFiller(){if(this.selection.rangeCount!=1||!this.selection.isCollapsed)return!1;const e=this.selection.getFirstPosition(),t=this.domConverter.viewPositionToDom(e);return!!(t&&hn(t.parent)&&Oo(t.parent))}_removeInlineFiller(){const e=this._inlineFiller;if(!Oo(e))throw new P("view-renderer-filler-was-lost",this);Xa(e)?e.remove():e.data=e.data.substr(wi),this._inlineFiller=null}_needsInlineFillerAtSelection(){if(this.selection.rangeCount!=1||!this.selection.isCollapsed)return!1;const e=this.selection.getFirstPosition(),t=e.parent,o=e.offset;if(!this.domConverter.mapViewToDom(t.root)||!t.is("element")||!function(d){if(d.getAttribute("contenteditable")=="false")return!1;const h=d.findAncestor(g=>g.hasAttribute("contenteditable"));return!h||h.getAttribute("contenteditable")=="true"}(t))return!1;const a=e.nodeBefore,c=e.nodeAfter;return!(a instanceof $t||c instanceof $t)&&!!(o!==t.getFillerOffset()||a&&a.is("element","br"))&&(!A.isAndroid||!a&&!c)}_updateText(e,t){const o=this.domConverter.findCorrespondingDomText(e);let a=this.domConverter.viewToDom(e).data;const c=t.inlineFillerPosition;c&&c.parent==e.parent&&c.offset==e.index&&(a=Qc+a),Vv(o,a)}_updateAttrs(e){const t=this.domConverter.mapViewToDom(e);if(!t)return;const o=Array.from(t.attributes).map(c=>c.name),a=e.getAttributeKeys();for(const c of a)this.domConverter.setDomElementAttribute(t,c,e.getAttribute(c),e);for(const c of o)e.hasAttribute(c)||this.domConverter.removeDomElementAttribute(t,c)}_updateChildren(e,t){const o=this.domConverter.mapViewToDom(e);if(!o)return;if(A.isAndroid){let C=null;for(const E of Array.from(o.childNodes)){if(C&&hn(C)&&hn(E)){o.normalize();break}C=E}}const a=t.inlineFillerPosition,c=o.childNodes,d=Array.from(this.domConverter.viewChildrenToDom(e,{bind:!0}));a&&a.parent===e&&$v(o.ownerDocument,d,a.offset);const h=this._diffNodeLists(c,d),g=this._findUpdateActions(h,c,d,r3);let k=0;const w=new Set;for(const C of g)C==="delete"?(w.add(c[k]),Hw(c[k])):C!=="equal"&&C!=="update"||k++;k=0;for(const C of g)C==="insert"?(zw(o,k,d[k]),k++):C==="update"?(Vv(c[k],d[k].data),k++):C==="equal"&&(this._markDescendantTextToSync(this.domConverter.domToView(d[k])),k++);for(const C of w)C.parentNode||this.domConverter.unbindDomElement(C)}_diffNodeLists(e,t){return e=function(o,a){const c=Array.from(o);return c.length==0||!a||c[c.length-1]==a&&c.pop(),c}(e,this._fakeSelectionContainer),I(e,t,s3.bind(null,this.domConverter))}_findUpdateActions(e,t,o,a){if(e.indexOf("insert")===-1||e.indexOf("delete")===-1)return e;let c=[],d=[],h=[];const g={equal:0,insert:0,delete:0};for(const k of e)k==="insert"?h.push(o[g.equal+g.insert]):k==="delete"?d.push(t[g.equal+g.delete]):(c=c.concat(I(d,h,a).map(w=>w==="equal"?"update":w)),c.push("equal"),d=[],h=[]),g[k]++;return c.concat(I(d,h,a).map(k=>k==="equal"?"update":k))}_markDescendantTextToSync(e){if(e){if(e.is("$text"))this.markedTexts.add(e);else if(e.is("element"))for(const t of e.getChildren())this._markDescendantTextToSync(t)}}_updateSelection(){if(A.isBlink&&!A.isAndroid&&this.isSelecting&&!this.markedChildren.size)return;if(this.selection.rangeCount===0)return this._removeDomSelection(),void this._removeFakeSelection();const e=this.domConverter.mapViewToDom(this.selection.editableElement);this.isFocused&&e&&(this.selection.isFake?this._updateFakeSelection(e):this._fakeSelectionContainer&&this._fakeSelectionContainer.isConnected?(this._removeFakeSelection(),this._updateDomSelection(e)):this.isComposing&&A.isAndroid||this._updateDomSelection(e))}_updateFakeSelection(e){const t=e.ownerDocument;this._fakeSelectionContainer||(this._fakeSelectionContainer=function(d){const h=d.createElement("div");return h.className="ck-fake-selection-container",Object.assign(h.style,{position:"fixed",top:0,left:"-9999px",width:"42px"}),h.textContent=" ",h}(t));const o=this._fakeSelectionContainer;if(this.domConverter.bindFakeSelection(o,this.selection),!this._fakeSelectionNeedsUpdate(e))return;o.parentElement&&o.parentElement==e||e.appendChild(o),o.textContent=this.selection.fakeSelectionLabel||" ";const a=t.getSelection(),c=t.createRange();a.removeAllRanges(),c.selectNodeContents(o),a.addRange(c)}_updateDomSelection(e){const t=e.ownerDocument.defaultView.getSelection();if(!this._domSelectionNeedsUpdate(t))return;const o=this.domConverter.viewPositionToDom(this.selection.anchor),a=this.domConverter.viewPositionToDom(this.selection.focus);t.setBaseAndExtent(o.parent,o.offset,a.parent,a.offset),A.isGecko&&function(c,d){let h=c.parent,g=c.offset;if(hn(h)&&Xa(h)&&(g=Vc(h)+1,h=h.parentNode),h.nodeType!=Node.ELEMENT_NODE||g!=h.childNodes.length-1)return;const k=h.childNodes[g];k&&k.tagName=="BR"&&d.addRange(d.getRangeAt(0))}(a,t)}_domSelectionNeedsUpdate(e){if(!this.domConverter.isDomSelectionCorrect(e))return!0;const t=e&&this.domConverter.domSelectionToView(e);return(!t||!this.selection.isEqual(t))&&!(!this.selection.isCollapsed&&this.selection.isSimilar(t))}_fakeSelectionNeedsUpdate(e){const t=this._fakeSelectionContainer,o=e.ownerDocument.getSelection();return!t||t.parentElement!==e||o.anchorNode!==t&&!t.contains(o.anchorNode)||t.textContent!==this.selection.fakeSelectionLabel}_removeDomSelection(){for(const e of this.domDocuments){const t=e.getSelection();if(t.rangeCount){const o=e.activeElement,a=this.domConverter.mapDomToView(o);o&&a&&t.removeAllRanges()}}}_removeFakeSelection(){const e=this._fakeSelectionContainer;e&&e.remove()}_updateFocus(){if(this.isFocused){const e=this.selection.editableElement;e&&this.domConverter.focus(e)}}}function $v(s,e,t){const o=e instanceof Array?e:e.childNodes,a=o[t];if(hn(a))return a.data=Qc+a.data,a;{const c=s.createTextNode(Qc);return Array.isArray(e)?o.splice(t,0,c):zw(e,t,c),c}}function i3(s,e){return Hr(s)&&Hr(e)&&!hn(s)&&!hn(e)&&!Hc(s)&&!Hc(e)&&s.tagName.toLowerCase()===e.tagName.toLowerCase()}function r3(s,e){return Hr(s)&&Hr(e)&&hn(s)&&hn(e)}function s3(s,e,t){return e===t||(hn(e)&&hn(t)?e.data===t.data:!(!s.isBlockFiller(e)||!s.isBlockFiller(t)))}function Vv(s,e){const t=s.data;if(t==e)return;const o=y(t,e);for(const a of o)a.type==="insert"?s.insertData(a.index,a.values.join("")):s.deleteData(a.index,a.howMany)}const a3=Fv(b.document),l3=Lv(b.document),c3=Rv(b.document),Uu="data-ck-unsafe-attribute-",Hv="data-ck-unsafe-element";class qu{constructor(e,{blockFillerMode:t,renderingMode:o="editing"}={}){this._domToViewMapping=new WeakMap,this._viewToDomMapping=new WeakMap,this._fakeSelectionMapping=new WeakMap,this._rawContentElementMatcher=new zi,this._inlineObjectElementMatcher=new zi,this._elementsWithTemporaryCustomProperties=new Set,this.document=e,this.renderingMode=o,this.blockFillerMode=t||(o==="editing"?"br":"nbsp"),this.preElements=["pre"],this.blockElements=["address","article","aside","blockquote","caption","center","dd","details","dir","div","dl","dt","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","legend","li","main","menu","nav","ol","p","pre","section","summary","table","tbody","td","tfoot","th","thead","tr","ul"],this.inlineObjectElements=["object","iframe","input","button","textarea","select","option","video","embed","audio","img","canvas"],this.unsafeElements=["script","style"],this._domDocument=this.renderingMode==="editing"?b.document:b.document.implementation.createHTMLDocument("")}bindFakeSelection(e,t){this._fakeSelectionMapping.set(e,new _i(t))}fakeSelectionToView(e){return this._fakeSelectionMapping.get(e)}bindElements(e,t){this._domToViewMapping.set(e,t),this._viewToDomMapping.set(t,e)}unbindDomElement(e){const t=this._domToViewMapping.get(e);if(t){this._domToViewMapping.delete(e),this._viewToDomMapping.delete(t);for(const o of Array.from(e.children))this.unbindDomElement(o)}}bindDocumentFragments(e,t){this._domToViewMapping.set(e,t),this._viewToDomMapping.set(t,e)}shouldRenderAttribute(e,t,o){return this.renderingMode==="data"||!(e=e.toLowerCase()).startsWith("on")&&(e!=="srcdoc"||!t.match(/\bon\S+\s*=|javascript:|<\s*\/*script/i))&&(o==="img"&&(e==="src"||e==="srcset")||o==="source"&&e==="srcset"||!t.match(/^\s*(javascript:|data:(image\/svg|text\/x?html))/i))}setContentOf(e,t){if(this.renderingMode==="data")return void(e.innerHTML=t);const o=new DOMParser().parseFromString(t,"text/html"),a=o.createDocumentFragment(),c=o.body.childNodes;for(;c.length>0;)a.appendChild(c[0]);const d=o.createTreeWalker(a,NodeFilter.SHOW_ELEMENT),h=[];let g;for(;g=d.nextNode();)h.push(g);for(const k of h){for(const C of k.getAttributeNames())this.setDomElementAttribute(k,C,k.getAttribute(C));const w=k.tagName.toLowerCase();this._shouldRenameElement(w)&&(Gv(w),k.replaceWith(this._createReplacementDomElement(w,k)))}for(;e.firstChild;)e.firstChild.remove();e.append(a)}viewToDom(e,t={}){if(e.is("$text")){const o=this._processDataFromViewText(e);return this._domDocument.createTextNode(o)}{const o=e;if(this.mapViewToDom(o)){if(!o.getCustomProperty("editingPipeline:doNotReuseOnce"))return this.mapViewToDom(o);this._elementsWithTemporaryCustomProperties.add(o)}let a;if(o.is("documentFragment"))a=this._domDocument.createDocumentFragment(),t.bind&&this.bindDocumentFragments(a,o);else{if(o.is("uiElement"))return a=o.name==="$comment"?this._domDocument.createComment(o.getCustomProperty("$rawContent")):o.render(this._domDocument,this),t.bind&&this.bindElements(a,o),a;this._shouldRenameElement(o.name)?(Gv(o.name),a=this._createReplacementDomElement(o.name)):a=o.hasAttribute("xmlns")?this._domDocument.createElementNS(o.getAttribute("xmlns"),o.name):this._domDocument.createElement(o.name),o.is("rawElement")&&o.render(a,this),t.bind&&this.bindElements(a,o);for(const c of o.getAttributeKeys())this.setDomElementAttribute(a,c,o.getAttribute(c),o)}if(t.withChildren!==!1)for(const c of this.viewChildrenToDom(o,t))a instanceof HTMLTemplateElement?a.content.appendChild(c):a.appendChild(c);return a}}setDomElementAttribute(e,t,o,a){const c=this.shouldRenderAttribute(t,o,e.tagName.toLowerCase())||a&&a.shouldRenderUnsafeAttribute(t);c||V("domconverter-unsafe-attribute-detected",{domElement:e,key:t,value:o}),function(d){try{b.document.createAttribute(d)}catch{return!1}return!0}(t)?(e.hasAttribute(t)&&!c?e.removeAttribute(t):e.hasAttribute(Uu+t)&&c&&e.removeAttribute(Uu+t),e.setAttribute(c?t:Uu+t,o)):V("domconverter-invalid-attribute-detected",{domElement:e,key:t,value:o})}removeDomElementAttribute(e,t){t!=Hv&&(e.removeAttribute(t),e.removeAttribute(Uu+t))}*viewChildrenToDom(e,t={}){const o=e.getFillerOffset&&e.getFillerOffset();let a=0;for(const c of e.getChildren()){o===a&&(yield this._getBlockFiller());const d=c.is("element")&&!!c.getCustomProperty("dataPipeline:transparentRendering")&&!On(c.getAttributes());d&&this.renderingMode=="data"?yield*this.viewChildrenToDom(c,t):(d&&V("domconverter-transparent-rendering-unsupported-in-editing-pipeline",{viewElement:c}),yield this.viewToDom(c,t)),a++}o===a&&(yield this._getBlockFiller())}viewRangeToDom(e){const t=this.viewPositionToDom(e.start),o=this.viewPositionToDom(e.end),a=this._domDocument.createRange();return a.setStart(t.parent,t.offset),a.setEnd(o.parent,o.offset),a}viewPositionToDom(e){const t=e.parent;if(t.is("$text")){const o=this.findCorrespondingDomText(t);if(!o)return null;let a=e.offset;return Oo(o)&&(a+=wi),{parent:o,offset:a}}{let o,a,c;if(e.offset===0){if(o=this.mapViewToDom(t),!o)return null;c=o.childNodes[0]}else{const d=e.nodeBefore;if(a=d.is("$text")?this.findCorrespondingDomText(d):this.mapViewToDom(d),!a)return null;o=a.parentNode,c=a.nextSibling}return hn(c)&&Oo(c)?{parent:c,offset:wi}:{parent:o,offset:a?Vc(a)+1:0}}}domToView(e,t={}){const o=[],a=this._domToView(e,t,o),c=a.next().value;return c?(a.next(),this._processDomInlineNodes(null,o,t),c.is("$text")&&c.data.length==0?null:c):null}*domChildrenToView(e,t={},o=[]){let a=[];a=e instanceof HTMLTemplateElement?[...e.content.childNodes]:[...e.childNodes];for(let c=0;c<a.length;c++){const d=a[c],h=this._domToView(d,t,o),g=h.next().value;g!==null&&(this._isBlockViewElement(g)&&this._processDomInlineNodes(e,o,t),yield g,h.next())}this._processDomInlineNodes(e,o,t)}domSelectionToView(e){if(function(a){if(!A.isGecko||!a.rangeCount)return!1;const c=a.getRangeAt(0).startContainer;try{Object.prototype.toString.call(c)}catch{return!0}return!1}(e))return new _i([]);if(e.rangeCount===1){let a=e.getRangeAt(0).startContainer;hn(a)&&(a=a.parentNode);const c=this.fakeSelectionToView(a);if(c)return c}const t=this.isDomSelectionBackward(e),o=[];for(let a=0;a<e.rangeCount;a++){const c=e.getRangeAt(a),d=this.domRangeToView(c);d&&o.push(d)}return new _i(o,{backward:t})}domRangeToView(e){const t=this.domPositionToView(e.startContainer,e.startOffset),o=this.domPositionToView(e.endContainer,e.endOffset);return t&&o?new tt(t,o):null}domPositionToView(e,t=0){if(this.isBlockFiller(e))return this.domPositionToView(e.parentNode,Vc(e));const o=this.mapDomToView(e);if(o&&(o.is("uiElement")||o.is("rawElement")))return Me._createBefore(o);if(hn(e)){if(Xa(e))return this.domPositionToView(e.parentNode,Vc(e));const a=this.findCorrespondingViewText(e);let c=t;return a?(Oo(e)&&(c-=wi,c=c<0?0:c),new Me(a,c)):null}if(t===0){const a=this.mapDomToView(e);if(a)return new Me(a,0)}else{const a=e.childNodes[t-1];if(hn(a)&&Xa(a)||a&&this.isBlockFiller(a))return this.domPositionToView(a.parentNode,Vc(a));const c=hn(a)?this.findCorrespondingViewText(a):this.mapDomToView(a);if(c&&c.parent)return new Me(c.parent,c.index+1)}return null}mapDomToView(e){return this.getHostViewElement(e)||this._domToViewMapping.get(e)}findCorrespondingViewText(e){if(Xa(e))return null;const t=this.getHostViewElement(e);if(t)return t;const o=e.previousSibling;if(o){if(!this.isElement(o))return null;const a=this.mapDomToView(o);if(a){const c=a.nextSibling;return c instanceof $t?c:null}}else{const a=this.mapDomToView(e.parentNode);if(a){const c=a.getChild(0);return c instanceof $t?c:null}}return null}mapViewToDom(e){return this._viewToDomMapping.get(e)}findCorrespondingDomText(e){const t=e.previousSibling;return t&&this.mapViewToDom(t)?this.mapViewToDom(t).nextSibling:!t&&e.parent&&this.mapViewToDom(e.parent)?this.mapViewToDom(e.parent).childNodes[0]:null}focus(e){const t=this.mapViewToDom(e);if(t&&t.ownerDocument.activeElement!==t){const{scrollX:o,scrollY:a}=b.window,c=[];Uv(t,d=>{const{scrollLeft:h,scrollTop:g}=d;c.push([h,g])}),t.focus(),Uv(t,d=>{const[h,g]=c.shift();d.scrollLeft=h,d.scrollTop=g}),b.window.scrollTo(o,a)}}_clearDomSelection(){const e=this.mapViewToDom(this.document.selection.editableElement);if(!e)return;const t=e.ownerDocument.defaultView.getSelection(),o=this.domSelectionToView(t);o&&o.rangeCount>0&&t.removeAllRanges()}isElement(e){return e&&e.nodeType==Node.ELEMENT_NODE}isDocumentFragment(e){return e&&e.nodeType==Node.DOCUMENT_FRAGMENT_NODE}isBlockFiller(e){return this.blockFillerMode=="br"?e.isEqualNode(a3):!(e.tagName!=="BR"||!qv(e,this.blockElements)||e.parentNode.childNodes.length!==1)||e.isEqualNode(c3)||function(t,o){return t.isEqualNode(l3)&&qv(t,o)&&t.parentNode.childNodes.length===1}(e,this.blockElements)}isDomSelectionBackward(e){if(e.isCollapsed)return!1;const t=this._domDocument.createRange();try{t.setStart(e.anchorNode,e.anchorOffset),t.setEnd(e.focusNode,e.focusOffset)}catch{return!1}const o=t.collapsed;return t.detach(),o}getHostViewElement(e){const t=function(o){const a=[];let c=o;for(;c&&c.nodeType!=Node.DOCUMENT_NODE;)a.unshift(c),c=c.parentNode;return a}(e);for(t.pop();t.length;){const o=t.pop(),a=this._domToViewMapping.get(o);if(a&&(a.is("uiElement")||a.is("rawElement")))return a}return null}isDomSelectionCorrect(e){return this._isDomSelectionPositionCorrect(e.anchorNode,e.anchorOffset)&&this._isDomSelectionPositionCorrect(e.focusNode,e.focusOffset)}registerRawContentMatcher(e){this._rawContentElementMatcher.add(e)}registerInlineObjectMatcher(e){this._inlineObjectElementMatcher.add(e)}_clearTemporaryCustomProperties(){for(const e of this._elementsWithTemporaryCustomProperties)e._removeCustomProperty("editingPipeline:doNotReuseOnce");this._elementsWithTemporaryCustomProperties.clear()}_getBlockFiller(){switch(this.blockFillerMode){case"nbsp":return Lv(this._domDocument);case"markedNbsp":return Rv(this._domDocument);case"br":return Fv(this._domDocument)}}_isDomSelectionPositionCorrect(e,t){if(hn(e)&&Oo(e)&&t<wi||this.isElement(e)&&Oo(e.childNodes[t]))return!1;const o=this.mapDomToView(e);return!o||!o.is("uiElement")&&!o.is("rawElement")}*_domToView(e,t,o){if(this.isBlockFiller(e))return null;const a=this.getHostViewElement(e);if(a)return a;if(Hc(e)&&t.skipComments)return null;if(hn(e)){if(Xa(e))return null;{const c=e.data;if(c==="")return null;const d=new $t(this.document,c);return o.push(d),d}}{let c=this.mapDomToView(e);if(c)return this._isInlineObjectElement(c)&&o.push(c),c;if(this.isDocumentFragment(e))c=new Us(this.document),t.bind&&this.bindDocumentFragments(e,c);else{c=this._createViewElement(e,t),t.bind&&this.bindElements(e,c);const h=e.attributes;if(h)for(let g=h.length,k=0;k<g;k++)c._setAttribute(h[k].name,h[k].value);if(this._isViewElementWithRawContent(c,t))return c._setCustomProperty("$rawContent",e.innerHTML),this._isBlockViewElement(c)||o.push(c),c;if(Hc(e))return c._setCustomProperty("$rawContent",e.data),c}yield c;const d=[];if(t.withChildren!==!1)for(const h of this.domChildrenToView(e,t,d))c._appendChild(h);if(this._isInlineObjectElement(c))o.push(c);else for(const h of d)o.push(h)}}_processDomInlineNodes(e,t,o){if(!t.length||e&&!this.isDocumentFragment(e)&&!this._isBlockDomElement(e))return;let a=!1;for(let c=0;c<t.length;c++){const d=t[c];if(!d.is("$text")){a=!1;continue}let h,g=!1;if(d3(d,this.preElements))h=zv(d.data);else{h=d.data.replace(/[ \n\t\r]{1,}/g," "),g=/[^\S\u00A0]/.test(h.charAt(h.length-1));const k=c>0?t[c-1]:null,w=c+1<t.length?t[c+1]:null,C=!k||k.is("element")&&k.name=="br"||a,E=!w&&!Oo(d.data);o.withChildren!==!1&&(C&&(h=h.replace(/^ /,"")),E&&(h=h.replace(/ $/,""))),h=zv(h),h=h.replace(/ \u00A0/g,"  ");const D=w&&w.is("element")&&w.name!="br",M=w&&w.is("$text")&&w.data.charAt(0)==" ";(/[ \u00A0]\u00A0$/.test(h)||!w||D||M)&&(h=h.replace(/\u00A0$/," ")),(C||k&&k.is("element")&&k.name!="br")&&(h=h.replace(/^\u00A0/," "))}h.length==0&&d.parent?(d._remove(),t.splice(c,1),c--):(d._data=h,a=g)}t.length=0}_processDataFromViewText(e){let t=e.data;if(e.getAncestors().some(o=>this.preElements.includes(o.name)))return t;if(t.charAt(0)==" "){const o=this._getTouchingInlineViewNode(e,!1);!(o&&o.is("$textProxy")&&this._nodeEndsWithSpace(o))&&o||(t=" "+t.substr(1))}if(t.charAt(t.length-1)==" "){const o=this._getTouchingInlineViewNode(e,!0),a=o&&o.is("$textProxy")&&o.data.charAt(0)==" ";t.charAt(t.length-2)!=" "&&o&&!a||(t=t.substr(0,t.length-1)+" ")}return t.replace(/ {2}/g,"  ")}_nodeEndsWithSpace(e){if(e.getAncestors().some(o=>this.preElements.includes(o.name)))return!1;const t=this._processDataFromViewText(e);return t.charAt(t.length-1)==" "}_getTouchingInlineViewNode(e,t){const o=new Vs({startPosition:t?Me._createAfter(e):Me._createBefore(e),direction:t?"forward":"backward"});for(const a of o){if(a.item.is("element","br"))return null;if(this._isInlineObjectElement(a.item))return a.item;if(a.item.is("containerElement"))return null;if(a.item.is("$textProxy"))return a.item}return null}_isBlockDomElement(e){return this.isElement(e)&&this.blockElements.includes(e.tagName.toLowerCase())}_isBlockViewElement(e){return e.is("element")&&this.blockElements.includes(e.name)}_isInlineObjectElement(e){return!!e.is("element")&&(e.name=="br"||this.inlineObjectElements.includes(e.name)||!!this._inlineObjectElementMatcher.match(e))}_createViewElement(e,t){if(Hc(e))return new Hu(this.document,"$comment");const o=t.keepOriginalCase?e.tagName:e.tagName.toLowerCase();return new Mo(this.document,o)}_isViewElementWithRawContent(e,t){return t.withChildren!==!1&&e.is("element")&&!!this._rawContentElementMatcher.match(e)}_shouldRenameElement(e){const t=e.toLowerCase();return this.renderingMode==="editing"&&this.unsafeElements.includes(t)}_createReplacementDomElement(e,t){const o=this._domDocument.createElement("span");if(o.setAttribute(Hv,e),t){for(;t.firstChild;)o.appendChild(t.firstChild);for(const a of t.getAttributeNames())o.setAttribute(a,t.getAttribute(a))}return o}}function d3(s,e){return s.getAncestors().some(t=>t.is("element")&&e.includes(t.name))}function Uv(s,e){let t=s;for(;t;)e(t),t=t.parentElement}function qv(s,e){const t=s.parentNode;return!!t&&!!t.tagName&&e.includes(t.tagName.toLowerCase())}function Gv(s){s==="script"&&V("domconverter-unsafe-script-element-detected"),s==="style"&&V("domconverter-unsafe-style-element-detected")}class ji extends Yo(){constructor(e){super(),this._isEnabled=!1,this.view=e,this.document=e.document}get isEnabled(){return this._isEnabled}enable(){this._isEnabled=!0}disable(){this._isEnabled=!1}destroy(){this.disable(),this.stopListening()}checkShouldIgnoreEventFromTarget(e){return e&&e.nodeType===3&&(e=e.parentNode),!(!e||e.nodeType!==1)&&e.matches("[data-cke-ignore-events], [data-cke-ignore-events] *")}}const Wv=Jw(function(s,e){Pi(e,gi(e),s)});class el{constructor(e,t,o){this.view=e,this.document=e.document,this.domEvent=t,this.domTarget=t.target,Wv(this,o)}get target(){return this.view.domConverter.mapDomToView(this.domTarget)}preventDefault(){this.domEvent.preventDefault()}stopPropagation(){this.domEvent.stopPropagation()}}class qr extends ji{constructor(){super(...arguments),this.useCapture=!1}observe(e){(typeof this.domEventType=="string"?[this.domEventType]:this.domEventType).forEach(t=>{this.listenTo(e,t,(o,a)=>{this.isEnabled&&!this.checkShouldIgnoreEventFromTarget(a.target)&&this.onDomEvent(a)},{useCapture:this.useCapture})})}stopObserving(e){this.stopListening(e)}fire(e,t,o){this.isEnabled&&this.document.fire(e,new el(this.view,t,o))}}class u3 extends qr{constructor(){super(...arguments),this.domEventType=["keydown","keyup"]}onDomEvent(e){const t={keyCode:e.keyCode,altKey:e.altKey,ctrlKey:e.ctrlKey,shiftKey:e.shiftKey,metaKey:e.metaKey,get keystroke(){return Ka(this)}};this.fire(e.type,e,t)}}const Tm=function(){return Le.Date.now()};var h3=/\s/;const p3=function(s){for(var e=s.length;e--&&h3.test(s.charAt(e)););return e};var f3=/^\s+/;const m3=function(s){return s&&s.slice(0,p3(s)+1).replace(f3,"")};var g3=/^[-+]0x[0-9a-f]+$/i,b3=/^0b[01]+$/i,k3=/^0o[0-7]+$/i,_3=parseInt;const Kv=function(s){if(typeof s=="number")return s;if(Fu(s))return NaN;if($e(s)){var e=typeof s.valueOf=="function"?s.valueOf():s;s=$e(e)?e+"":e}if(typeof s!="string")return s===0?s:+s;s=m3(s);var t=b3.test(s);return t||k3.test(s)?_3(s.slice(2),t?2:8):g3.test(s)?NaN:+s};var w3=Math.max,v3=Math.min;const tl=function(s,e,t){var o,a,c,d,h,g,k=0,w=!1,C=!1,E=!0;if(typeof s!="function")throw new TypeError("Expected a function");function D(Z){var se=o,fe=a;return o=a=void 0,k=Z,d=s.apply(fe,se)}function M(Z){var se=Z-g;return g===void 0||se>=e||se<0||C&&Z-k>=c}function R(){var Z=Tm();if(M(Z))return j(Z);h=setTimeout(R,function(se){var fe=e-(se-g);return C?v3(fe,c-(se-k)):fe}(Z))}function j(Z){return h=void 0,E&&o?D(Z):(o=a=void 0,d)}function q(){var Z=Tm(),se=M(Z);if(o=arguments,a=this,g=Z,se){if(h===void 0)return function(fe){return k=fe,h=setTimeout(R,e),w?D(fe):d}(g);if(C)return clearTimeout(h),h=setTimeout(R,e),D(g)}return h===void 0&&(h=setTimeout(R,e)),d}return e=Kv(e)||0,$e(t)&&(w=!!t.leading,c=(C="maxWait"in t)?w3(Kv(t.maxWait)||0,e):c,E="trailing"in t?!!t.trailing:E),q.cancel=function(){h!==void 0&&clearTimeout(h),k=0,o=g=a=h=void 0},q.flush=function(){return h===void 0?d:j(Tm())},q};class A3 extends ji{constructor(e){super(e),this._fireSelectionChangeDoneDebounced=tl(t=>{this.document.fire("selectionChangeDone",t)},200)}observe(){const e=this.document;e.on("arrowKey",(t,o)=>{e.selection.isFake&&this.isEnabled&&o.preventDefault()},{context:"$capture"}),e.on("arrowKey",(t,o)=>{e.selection.isFake&&this.isEnabled&&this._handleSelectionMove(o.keyCode)},{priority:"lowest"})}stopObserving(){}destroy(){super.destroy(),this._fireSelectionChangeDoneDebounced.cancel()}_handleSelectionMove(e){const t=this.document.selection,o=new _i(t.getRanges(),{backward:t.isBackward,fake:!1});e!=kt.arrowleft&&e!=kt.arrowup||o.setTo(o.getFirstPosition()),e!=kt.arrowright&&e!=kt.arrowdown||o.setTo(o.getLastPosition());const a={oldSelection:t,newSelection:o,domSelection:null};this.document.fire("selectionChange",a),this._fireSelectionChangeDoneDebounced(a)}}const C3=function(s){return this.__data__.set(s,"__lodash_hash_undefined__"),this},y3=function(s){return this.__data__.has(s)};function Gu(s){var e=-1,t=s==null?0:s.length;for(this.__data__=new Wo;++e<t;)this.add(s[e])}Gu.prototype.add=Gu.prototype.push=C3,Gu.prototype.has=y3;const x3=Gu,E3=function(s,e){for(var t=-1,o=s==null?0:s.length;++t<o;)if(e(s[t],t,s))return!0;return!1},S3=function(s,e){return s.has(e)},Yv=function(s,e,t,o,a,c){var d=1&t,h=s.length,g=e.length;if(h!=g&&!(d&&g>h))return!1;var k=c.get(s),w=c.get(e);if(k&&w)return k==e&&w==s;var C=-1,E=!0,D=2&t?new x3:void 0;for(c.set(s,e),c.set(e,s);++C<h;){var M=s[C],R=e[C];if(o)var j=d?o(R,M,C,e,s,c):o(M,R,C,s,e,c);if(j!==void 0){if(j)continue;E=!1;break}if(D){if(!E3(e,function(q,Z){if(!S3(D,Z)&&(M===q||a(M,q,t,o,c)))return D.push(Z)})){E=!1;break}}else if(M!==R&&!a(M,R,t,o,c)){E=!1;break}}return c.delete(s),c.delete(e),E},T3=function(s){var e=-1,t=Array(s.size);return s.forEach(function(o,a){t[++e]=[a,o]}),t},D3=function(s){var e=-1,t=Array(s.size);return s.forEach(function(o){t[++e]=o}),t};var Qv=He?He.prototype:void 0,Dm=Qv?Qv.valueOf:void 0;const I3=function(s,e,t,o,a,c,d){switch(t){case"[object DataView]":if(s.byteLength!=e.byteLength||s.byteOffset!=e.byteOffset)return!1;s=s.buffer,e=e.buffer;case"[object ArrayBuffer]":return!(s.byteLength!=e.byteLength||!c(new Eu(s),new Eu(e)));case"[object Boolean]":case"[object Date]":case"[object Number]":return Oi(+s,+e);case"[object Error]":return s.name==e.name&&s.message==e.message;case"[object RegExp]":case"[object String]":return s==e+"";case"[object Map]":var h=T3;case"[object Set]":var g=1&o;if(h||(h=D3),s.size!=e.size&&!g)return!1;var k=d.get(s);if(k)return k==e;o|=2,d.set(s,e);var w=Yv(h(s),h(e),o,a,c,d);return d.delete(s),w;case"[object Symbol]":if(Dm)return Dm.call(s)==Dm.call(e)}return!1};var M3=Object.prototype.hasOwnProperty;const O3=function(s,e,t,o,a,c){var d=1&t,h=Hf(s),g=h.length;if(g!=Hf(e).length&&!d)return!1;for(var k=g;k--;){var w=h[k];if(!(d?w in e:M3.call(e,w)))return!1}var C=c.get(s),E=c.get(e);if(C&&E)return C==e&&E==s;var D=!0;c.set(s,e),c.set(e,s);for(var M=d;++k<g;){var R=s[w=h[k]],j=e[w];if(o)var q=d?o(j,R,w,e,s,c):o(R,j,w,s,e,c);if(!(q===void 0?R===j||a(R,j,t,o,c):q)){D=!1;break}M||(M=w=="constructor")}if(D&&!M){var Z=s.constructor,se=e.constructor;Z==se||!("constructor"in s)||!("constructor"in e)||typeof Z=="function"&&Z instanceof Z&&typeof se=="function"&&se instanceof se||(D=!1)}return c.delete(s),c.delete(e),D};var Zv="[object Arguments]",Jv="[object Array]",Wu="[object Object]",Xv=Object.prototype.hasOwnProperty;const B3=function(s,e,t,o,a,c){var d=It(s),h=It(e),g=d?Jv:jc(s),k=h?Jv:jc(e),w=(g=g==Zv?Wu:g)==Wu,C=(k=k==Zv?Wu:k)==Wu,E=g==k;if(E&&Li(s)){if(!Li(e))return!1;d=!0,w=!1}if(E&&!w)return c||(c=new qn),d||ct(s)?Yv(s,e,t,o,a,c):I3(s,e,g,t,o,a,c);if(!(1&t)){var D=w&&Xv.call(s,"__wrapped__"),M=C&&Xv.call(e,"__wrapped__");if(D||M){var R=D?s.value():s,j=M?e.value():e;return c||(c=new qn),a(R,j,t,o,c)}}return!!E&&(c||(c=new qn),O3(s,e,t,o,a,c))},Ku=function s(e,t,o,a,c){return e===t||(e==null||t==null||!Bt(e)&&!Bt(t)?e!=e&&t!=t:B3(e,t,o,a,s,c))},P3=function(s,e,t){var o=(t=typeof t=="function"?t:void 0)?t(s,e):void 0;return o===void 0?Ku(s,e,void 0,t):!!o};class e0 extends ji{constructor(e){super(e),this._config={childList:!0,characterData:!0,subtree:!0},this.domConverter=e.domConverter,this.renderer=e._renderer,this._domElements=new Set,this._mutationObserver=new window.MutationObserver(this._onMutations.bind(this))}flush(){this._onMutations(this._mutationObserver.takeRecords())}observe(e){this._domElements.add(e),this.isEnabled&&this._mutationObserver.observe(e,this._config)}stopObserving(e){if(this._domElements.delete(e),this.isEnabled){this._mutationObserver.disconnect();for(const t of this._domElements)this._mutationObserver.observe(t,this._config)}}enable(){super.enable();for(const e of this._domElements)this._mutationObserver.observe(e,this._config)}disable(){super.disable(),this._mutationObserver.disconnect()}destroy(){super.destroy(),this._mutationObserver.disconnect()}_onMutations(e){if(e.length===0)return;const t=this.domConverter,o=new Set,a=new Set;for(const d of e){const h=t.mapDomToView(d.target);h&&(h.is("uiElement")||h.is("rawElement")||d.type!=="childList"||this._isBogusBrMutation(d)||a.add(h))}for(const d of e){const h=t.mapDomToView(d.target);if((!h||!h.is("uiElement")&&!h.is("rawElement"))&&d.type==="characterData"){const g=t.findCorrespondingViewText(d.target);g&&!a.has(g.parent)?o.add(g):!g&&Oo(d.target)&&a.add(t.mapDomToView(d.target.parentNode))}}let c=!1;for(const d of o)c=!0,this.renderer.markToSync("text",d);for(const d of a){const h=t.mapViewToDom(d),g=Array.from(d.getChildren()),k=Array.from(t.domChildrenToView(h,{withChildren:!1}));P3(g,k,N3)||(c=!0,this.renderer.markToSync("children",d))}c&&this.view.forceRender()}_isBogusBrMutation(e){let t=null;return e.nextSibling===null&&e.removedNodes.length===0&&e.addedNodes.length==1&&(t=this.domConverter.domToView(e.addedNodes[0],{withChildren:!1})),t&&t.is("element","br")}}function N3(s,e){if(!Array.isArray(s))return s===e||!(!s.is("$text")||!e.is("$text"))&&s.data===e.data}class Yu extends qr{constructor(e){super(e),this._isFocusChanging=!1,this.domEventType=["focus","blur"],this.useCapture=!0;const t=this.document;t.on("focus",()=>{this._isFocusChanging=!0,this._renderTimeoutId=setTimeout(()=>{this.flush(),e.change(()=>{})},50)}),t.on("blur",(o,a)=>{const c=t.selection.editableElement;c!==null&&c!==a.target||(t.isFocused=!1,this._isFocusChanging=!1,e.change(()=>{}))})}flush(){this._isFocusChanging&&(this._isFocusChanging=!1,this.document.isFocused=!0)}onDomEvent(e){this.fire(e.type,e)}destroy(){this._renderTimeoutId&&clearTimeout(this._renderTimeoutId),super.destroy()}}class L3 extends ji{constructor(e){super(e),this.mutationObserver=e.getObserver(e0),this.focusObserver=e.getObserver(Yu),this.selection=this.document.selection,this.domConverter=e.domConverter,this._documents=new WeakSet,this._fireSelectionChangeDoneDebounced=tl(t=>{this.document.fire("selectionChangeDone",t)},200),this._clearInfiniteLoopInterval=setInterval(()=>this._clearInfiniteLoop(),1e3),this._documentIsSelectingInactivityTimeoutDebounced=tl(()=>this.document.isSelecting=!1,5e3),this._loopbackCounter=0}observe(e){const t=e.ownerDocument,o=()=>{this.document.isSelecting&&(this._handleSelectionChange(null,t),this.document.isSelecting=!1,this._documentIsSelectingInactivityTimeoutDebounced.cancel())};this.listenTo(e,"selectstart",()=>{this.document.isSelecting=!0,this._documentIsSelectingInactivityTimeoutDebounced()},{priority:"highest"}),this.listenTo(e,"keydown",o,{priority:"highest",useCapture:!0}),this.listenTo(e,"keyup",o,{priority:"highest",useCapture:!0}),this._documents.has(t)||(this.listenTo(t,"mouseup",o,{priority:"highest",useCapture:!0}),this.listenTo(t,"selectionchange",(a,c)=>{this.document.isComposing&&!A.isAndroid||(this._handleSelectionChange(c,t),this._documentIsSelectingInactivityTimeoutDebounced())}),this._documents.add(t))}stopObserving(e){this.stopListening(e)}destroy(){super.destroy(),clearInterval(this._clearInfiniteLoopInterval),this._fireSelectionChangeDoneDebounced.cancel(),this._documentIsSelectingInactivityTimeoutDebounced.cancel()}_reportInfiniteLoop(){}_handleSelectionChange(e,t){if(!this.isEnabled)return;const o=t.defaultView.getSelection();if(this.checkShouldIgnoreEventFromTarget(o.anchorNode))return;this.mutationObserver.flush();const a=this.domConverter.domSelectionToView(o);if(a.rangeCount!=0){if(this.view.hasDomSelection=!0,this.focusObserver.flush(),!this.selection.isEqual(a)||!this.domConverter.isDomSelectionCorrect(o))if(++this._loopbackCounter>60)this._reportInfiniteLoop();else if(this.selection.isSimilar(a))this.view.forceRender();else{const c={oldSelection:this.selection,newSelection:a,domSelection:o};this.document.fire("selectionChange",c),this._fireSelectionChangeDoneDebounced(c)}}else this.view.hasDomSelection=!1}_clearInfiniteLoop(){this._loopbackCounter=0}}class R3 extends qr{constructor(e){super(e),this.domEventType=["compositionstart","compositionupdate","compositionend"];const t=this.document;t.on("compositionstart",()=>{t.isComposing=!0},{priority:"low"}),t.on("compositionend",()=>{t.isComposing=!1},{priority:"low"})}onDomEvent(e){this.fire(e.type,e,{data:e.data})}}class t0{constructor(e,t={}){this._files=t.cacheFiles?n0(e):null,this._native=e}get files(){return this._files||(this._files=n0(this._native)),this._files}get types(){return this._native.types}getData(e){return this._native.getData(e)}setData(e,t){this._native.setData(e,t)}set effectAllowed(e){this._native.effectAllowed=e}get effectAllowed(){return this._native.effectAllowed}set dropEffect(e){this._native.dropEffect=e}get dropEffect(){return this._native.dropEffect}setDragImage(e,t,o){this._native.setDragImage(e,t,o)}get isCanceled(){return this._native.dropEffect=="none"||!!this._native.mozUserCancelled}}function n0(s){const e=Array.from(s.files||[]),t=Array.from(s.items||[]);return e.length?e:t.filter(o=>o.kind==="file").map(o=>o.getAsFile())}class F3 extends qr{constructor(){super(...arguments),this.domEventType="beforeinput"}onDomEvent(e){const t=e.getTargetRanges(),o=this.view,a=o.document;let c=null,d=null,h=[];if(e.dataTransfer&&(c=new t0(e.dataTransfer)),e.data!==null?d=e.data:c&&(d=c.getData("text/plain")),a.selection.isFake)h=Array.from(a.selection.getRanges());else if(t.length)h=t.map(g=>{const k=o.domConverter.domPositionToView(g.startContainer,g.startOffset),w=o.domConverter.domPositionToView(g.endContainer,g.endOffset);return k?o.createRange(k,w):w?o.createRange(w):void 0}).filter(g=>!!g);else if(A.isAndroid){const g=e.target.ownerDocument.defaultView.getSelection();h=Array.from(o.domConverter.domSelectionToView(g).getRanges())}if(A.isAndroid&&e.inputType=="insertCompositionText"&&d&&d.endsWith(`
`))this.fire(e.type,e,{inputType:"insertParagraph",targetRanges:[o.createRange(h[0].end)]});else if(e.inputType=="insertText"&&d&&d.includes(`
`,isColorInherited:!1}),o.extendTemplate({attributes:{style:{width:"53px",height:"10px"}}}),this.setTemplate({tag:"div",attributes:{class:["ck","ck-powered-by"],"aria-hidden":!0},children:[{tag:"a",attributes:{href:"https://ckeditor.com/?utm_source=ckeditor&utm_medium=referral&utm_campaign=701Dn000000hVgmIAE_powered_by_ckeditor_logo",target:"_blank",tabindex:"-1"},children:[...t?[{tag:"span",attributes:{class:["ck","ck-powered-by__label"]},children:[t]}]:[],o],on:{dragstart:a.to(c=>c.preventDefault())}}]})}}function fC(s,e,t){return(o,a)=>{const c=new pt(s);if(c.width<zN||c.height<FN)return null;let d;d=e.position==="inside"?c.bottom-a.height:c.bottom-a.height/2,d-=e.verticalOffset;const h=t(c,a),g=o.clone().moveTo(h,d).getIntersection(a.clone().moveTo(h,d)).getVisible();return!g||g.getArea()<a.getArea()?null:{top:d,left:h,name:`position_${e.position}-side_${e.side}`,config:{withArrow:!1}}}}function mC(s){const e=s.config.get("ui.poweredBy"),t=e&&e.position||"border";return RN({position:t,label:jN,verticalOffset:t==="inside"?5:0,horizontalOffset:5,side:s.locale.contentLanguageDirection==="ltr"?"right":"left"},e)}var gC=u(1801),HN={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};De()(gC.A,HN),gC.A.locals;const bC={POLITE:"polite",ASSERTIVE:"assertive"};class UN{constructor(e){this.editor=e,e.once("ready",()=>{for(const t of Object.values(bC))this.announce("",t)})}announce(e,t=bC.POLITE){const o=this.editor;if(!o.ui.view)return;this.view||(this.view=new qN(o.locale),o.ui.view.body.add(this.view));const{politeness:a,isUnsafeHTML:c}=typeof t=="string"?{politeness:t}:t;let d=this.view.regionViews.find(h=>h.politeness===a);d||(d=new GN(o,a),this.view.regionViews.add(d)),d.announce({announcement:e,isUnsafeHTML:c})}}class qN extends Ge{constructor(e){super(e),this.regionViews=this.createCollection(),this.setTemplate({tag:"div",attributes:{class:["ck","ck-aria-live-announcer"]},children:this.regionViews})}}class GN extends Ge{constructor(e,t){super(e.locale),this.setTemplate({tag:"div",attributes:{role:"region","aria-live":t,"aria-relevant":"additions"},children:[{tag:"ul",attributes:{class:["ck","ck-aria-live-region-list"]}}]}),e.on("destroy",()=>{this._pruneAnnouncementsInterval!==null&&(clearInterval(this._pruneAnnouncementsInterval),this._pruneAnnouncementsInterval=null)}),this.politeness=t,this._domConverter=e.data.htmlProcessor.domConverter,this._pruneAnnouncementsInterval=setInterval(()=>{this.element&&this._listElement.firstChild&&this._listElement.firstChild.remove()},5e3)}announce({announcement:e,isUnsafeHTML:t}){if(!e.trim().length)return;const o=document.createElement("li");t?this._domConverter.setContentOf(o,e):o.innerText=e,this._listElement.appendChild(o)}get _listElement(){return this.element.querySelector("ul")}}var WN=Object.defineProperty,kC=Object.getOwnPropertySymbols,KN=Object.prototype.hasOwnProperty,YN=Object.prototype.propertyIsEnumerable,_C=(s,e,t)=>e in s?WN(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t;class QN extends K(){constructor(e){super(),this.isReady=!1,this._editableElementsMap=new Map,this._focusableToolbarDefinitions=[];const t=e.editing.view;this.editor=e,this.componentFactory=new gN(e),this.focusTracker=new Bn,this.tooltipManager=new ch(e),this.poweredBy=new $N(e),this.ariaLiveAnnouncer=new UN(e),this.set("viewportOffset",this._readViewportOffsetFromConfig()),this.once("ready",()=>{this.isReady=!0}),this.listenTo(t.document,"layoutChanged",this.update.bind(this)),this.listenTo(t,"scrollToTheSelection",this._handleScrollToTheSelection.bind(this)),this._initFocusTracking()}get element(){return null}update(){this.fire("update")}destroy(){this.stopListening(),this.focusTracker.destroy(),this.tooltipManager.destroy(this.editor),this.poweredBy.destroy();for(const e of this._editableElementsMap.values())e.ckeditorInstance=null,this.editor.keystrokes.stopListening(e);this._editableElementsMap=new Map,this._focusableToolbarDefinitions=[]}setEditableElement(e,t){this._editableElementsMap.set(e,t),t.ckeditorInstance||(t.ckeditorInstance=this.editor),this.focusTracker.add(t);const o=()=>{this.editor.editing.view.getDomRoot(e)||this.editor.keystrokes.listenTo(t)};this.isReady?o():this.once("ready",o)}removeEditableElement(e){const t=this._editableElementsMap.get(e);t&&(this._editableElementsMap.delete(e),this.editor.keystrokes.stopListening(t),this.focusTracker.remove(t),t.ckeditorInstance=null)}getEditableElement(e="main"){return this._editableElementsMap.get(e)}getEditableElementsNames(){return this._editableElementsMap.keys()}addToolbar(e,t={}){e.isRendered?(this.focusTracker.add(e.element),this.editor.keystrokes.listenTo(e.element)):e.once("render",()=>{this.focusTracker.add(e.element),this.editor.keystrokes.listenTo(e.element)}),this._focusableToolbarDefinitions.push({toolbarView:e,options:t})}get _editableElements(){return console.warn("editor-ui-deprecated-editable-elements: The EditorUI#_editableElements property has been deprecated and will be removed in the near future.",{editorUI:this}),this._editableElementsMap}_readViewportOffsetFromConfig(){const e=this.editor,t=e.config.get("ui.viewportOffset");if(t)return t;const o=e.config.get("toolbar.viewportTopOffset");return o?(console.warn("editor-ui-deprecated-viewport-offset-config: The `toolbar.vieportTopOffset` configuration option is deprecated. It will be removed from future CKEditor versions. Use `ui.viewportOffset.top` instead."),{top:o}):{top:0}}_initFocusTracking(){const e=this.editor,t=e.editing.view;let o,a;e.keystrokes.set("Alt+F10",(c,d)=>{const h=this.focusTracker.focusedElement;Array.from(this._editableElementsMap.values()).includes(h)&&!Array.from(t.domRoots.values()).includes(h)&&(o=h);const g=this._getCurrentFocusedToolbarDefinition();g&&a||(a=this._getFocusableCandidateToolbarDefinitions());for(let k=0;k<a.length;k++){const w=a.shift();if(a.push(w),w!==g&&this._focusFocusableCandidateToolbar(w)){g&&g.options.afterBlur&&g.options.afterBlur();break}}d()}),e.keystrokes.set("Esc",(c,d)=>{const h=this._getCurrentFocusedToolbarDefinition();h&&(o?(o.focus(),o=null):e.editing.view.focus(),h.options.afterBlur&&h.options.afterBlur(),d())})}_getFocusableCandidateToolbarDefinitions(){const e=[];for(const t of this._focusableToolbarDefinitions){const{toolbarView:o,options:a}=t;(zs(o.element)||a.beforeFocus)&&e.push(t)}return e.sort((t,o)=>wC(t)-wC(o)),e}_getCurrentFocusedToolbarDefinition(){for(const e of this._focusableToolbarDefinitions)if(e.toolbarView.element&&e.toolbarView.element.contains(this.focusTracker.focusedElement))return e;return null}_focusFocusableCandidateToolbar(e){const{toolbarView:t,options:{beforeFocus:o}}=e;return o&&o(),!!zs(t.element)&&(t.focus(),!0)}_handleScrollToTheSelection(e,t){const o=((a,c)=>{for(var d in c||(c={}))KN.call(c,d)&&_C(a,d,c[d]);if(kC)for(var d of kC(c))YN.call(c,d)&&_C(a,d,c[d]);return a})({top:0,bottom:0,left:0,right:0},this.viewportOffset);t.viewportOffset.top+=o.top,t.viewportOffset.bottom+=o.bottom,t.viewportOffset.left+=o.left,t.viewportOffset.right+=o.right}}function wC(s){const{toolbarView:e,options:t}=s;let o=10;return zs(e.element)&&o--,t.isContextual&&o--,o}var vC=u(1185),ZN={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};De()(vC.A,ZN),vC.A.locals;class JN extends Ge{constructor(e){super(e),this.body=new RP(e)}render(){super.render(),this.body.attachToDom()}destroy(){return this.body.detachFromDom(),super.destroy()}}class XN extends JN{constructor(e){super(e),this.top=this.createCollection(),this.main=this.createCollection(),this._voiceLabelView=this._createVoiceLabel(),this.setTemplate({tag:"div",attributes:{class:["ck","ck-reset","ck-editor","ck-rounded-corners"],role:"application",dir:e.uiLanguageDirection,lang:e.uiLanguage,"aria-labelledby":this._voiceLabelView.id},children:[this._voiceLabelView,{tag:"div",attributes:{class:["ck","ck-editor__top","ck-reset_all"],role:"presentation"},children:this.top},{tag:"div",attributes:{class:["ck","ck-editor__main"],role:"presentation"},children:this.main}]})}_createVoiceLabel(){const e=this.t,t=new eh;return t.text=e("Rich Text Editor"),t.extendTemplate({attributes:{class:"ck-voice-label"}}),t}}class eL extends Ge{constructor(e,t,o){super(e),this.name=null,this.setTemplate({tag:"div",attributes:{class:["ck","ck-content","ck-editor__editable","ck-rounded-corners"],lang:e.contentLanguage,dir:e.contentLanguageDirection}}),this.set("isFocused",!1),this._editableElement=o,this._hasExternalElement=!!this._editableElement,this._editingView=t}render(){super.render(),this._hasExternalElement?this.template.apply(this.element=this._editableElement):this._editableElement=this.element,this.on("change:isFocused",()=>this._updateIsFocusedClasses()),this._updateIsFocusedClasses()}destroy(){this._hasExternalElement&&this.template.revert(this._editableElement),super.destroy()}get hasExternalElement(){return this._hasExternalElement}_updateIsFocusedClasses(){const e=this._editingView;function t(o){e.change(a=>{const c=e.document.getRoot(o.name);a.addClass(o.isFocused?"ck-focused":"ck-blurred",c),a.removeClass(o.isFocused?"ck-blurred":"ck-focused",c)})}e.isRenderingInProgress?function o(a){e.once("change:isRenderingInProgress",(c,d,h)=>{h?o(a):t(a)})}(this):t(this)}}class tL extends eL{constructor(e,t,o,a={}){super(e,t,o);const c=e.t;this.extendTemplate({attributes:{role:"textbox",class:"ck-editor__editable_inline"}}),this._generateLabel=a.label||(()=>c("Editor editing area: %0",this.name))}render(){super.render();const e=this._editingView;e.change(t=>{const o=e.document.getRoot(this.name);t.setAttribute("aria-label",this._generateLabel(this),o)})}}class tg extends Lu{static get pluginName(){return"Notification"}init(){this.on("show:warning",(e,t)=>{window.alert(t.message)},{priority:"lowest"})}showSuccess(e,t={}){this._showNotification({message:e,type:"success",namespace:t.namespace,title:t.title})}showInfo(e,t={}){this._showNotification({message:e,type:"info",namespace:t.namespace,title:t.title})}showWarning(e,t={}){this._showNotification({message:e,type:"warning",namespace:t.namespace,title:t.title})}_showNotification(e){const t=e.namespace?`show:${e.type}:${e.namespace}`:`show:${e.type}`;this.fire(t,{message:e.message,type:e.type,title:e.title||""})}}class AC extends K(){constructor(e,t){super(),t&&Wv(this,t),e&&this.set(e)}}var CC=u(991),nL={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};De()(CC.A,nL),CC.A.locals;var yC=u(5380),oL={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};De()(yC.A,oL),yC.A.locals;const uh=Wa("px");class hh extends ye{constructor(e){super(e),this._viewToStack=new Map,this._idToStack=new Map,this._view=null,this._rotatorView=null,this._fakePanelsView=null,this.positionLimiter=()=>{const t=this.editor.editing.view,o=t.document.selection.editableElement;return o?t.domConverter.mapViewToDom(o.root):null},this.set("visibleView",null),this.set("_numberOfStacks",0),this.set("_singleViewMode",!1)}static get pluginName(){return"ContextualBalloon"}destroy(){super.destroy(),this._view&&this._view.destroy(),this._rotatorView&&this._rotatorView.destroy(),this._fakePanelsView&&this._fakePanelsView.destroy()}get view(){return this._view||this._createPanelView(),this._view}hasView(e){return Array.from(this._viewToStack.keys()).includes(e)}add(e){if(this._view||this._createPanelView(),this.hasView(e.view))throw new P("contextualballoon-add-view-exist",[this,e]);const t=e.stackId||"main";if(!this._idToStack.has(t))return this._idToStack.set(t,new Map([[e.view,e]])),this._viewToStack.set(e.view,this._idToStack.get(t)),this._numberOfStacks=this._idToStack.size,void(this._visibleStack&&!e.singleViewMode||this.showStack(t));const o=this._idToStack.get(t);e.singleViewMode&&this.showStack(t),o.set(e.view,e),this._viewToStack.set(e.view,o),o===this._visibleStack&&this._showView(e)}remove(e){if(!this.hasView(e))throw new P("contextualballoon-remove-view-not-exist",[this,e]);const t=this._viewToStack.get(e);this._singleViewMode&&this.visibleView===e&&(this._singleViewMode=!1),this.visibleView===e&&(t.size===1?this._idToStack.size>1?this._showNextStack():(this.view.hide(),this.visibleView=null,this._rotatorView.hideView()):this._showView(Array.from(t.values())[t.size-2])),t.size===1?(this._idToStack.delete(this._getStackId(t)),this._numberOfStacks=this._idToStack.size):t.delete(e),this._viewToStack.delete(e)}updatePosition(e){e&&(this._visibleStack.get(this.visibleView).position=e),this.view.pin(this._getBalloonPosition()),this._fakePanelsView.updatePosition()}showStack(e){this.visibleStack=e;const t=this._idToStack.get(e);if(!t)throw new P("contextualballoon-showstack-stack-not-exist",this);this._visibleStack!==t&&this._showView(Array.from(t.values()).pop())}_createPanelView(){this._view=new _o(this.editor.locale),this.editor.ui.view.body.add(this._view),this.editor.ui.focusTracker.add(this._view.element),this._rotatorView=this._createRotatorView(),this._fakePanelsView=this._createFakePanelsView()}get _visibleStack(){return this._viewToStack.get(this.visibleView)}_getStackId(e){return Array.from(this._idToStack.entries()).find(t=>t[1]===e)[0]}_showNextStack(){const e=Array.from(this._idToStack.values());let t=e.indexOf(this._visibleStack)+1;e[t]||(t=0),this.showStack(this._getStackId(e[t]))}_showPrevStack(){const e=Array.from(this._idToStack.values());let t=e.indexOf(this._visibleStack)-1;e[t]||(t=e.length-1),this.showStack(this._getStackId(e[t]))}_createRotatorView(){const e=new iL(this.editor.locale),t=this.editor.locale.t;return this.view.content.add(e),e.bind("isNavigationVisible").to(this,"_numberOfStacks",this,"_singleViewMode",(o,a)=>!a&&o>1),e.on("change:isNavigationVisible",()=>this.updatePosition(),{priority:"low"}),e.bind("counter").to(this,"visibleView",this,"_numberOfStacks",(o,a)=>{if(a<2)return"";const c=Array.from(this._idToStack.values()).indexOf(this._visibleStack)+1;return t("%0 of %1",[c,a])}),e.buttonNextView.on("execute",()=>{e.focusTracker.isFocused&&this.editor.editing.view.focus(),this._showNextStack()}),e.buttonPrevView.on("execute",()=>{e.focusTracker.isFocused&&this.editor.editing.view.focus(),this._showPrevStack()}),e}_createFakePanelsView(){const e=new rL(this.editor.locale,this.view);return e.bind("numberOfPanels").to(this,"_numberOfStacks",this,"_singleViewMode",(t,o)=>!o&&t>=2?Math.min(t-1,2):0),e.listenTo(this.view,"change:top",()=>e.updatePosition()),e.listenTo(this.view,"change:left",()=>e.updatePosition()),this.editor.ui.view.body.add(e),e}_showView({view:e,balloonClassName:t="",withArrow:o=!0,singleViewMode:a=!1}){this.view.class=t,this.view.withArrow=o,this._rotatorView.showView(e),this.visibleView=e,this.view.pin(this._getBalloonPosition()),this._fakePanelsView.updatePosition(),a&&(this._singleViewMode=!0)}_getBalloonPosition(){let e=Array.from(this._visibleStack.values()).pop().position;return e&&(e.limiter||(e=Object.assign({},e,{limiter:this.positionLimiter})),e=Object.assign({},e,{viewportOffsetConfig:this.editor.ui.viewportOffset})),e}}class iL extends Ge{constructor(e){super(e);const t=e.t,o=this.bindTemplate;this.set("isNavigationVisible",!0),this.focusTracker=new Bn,this.buttonPrevView=this._createButtonView(t("Previous"),it.previousArrow),this.buttonNextView=this._createButtonView(t("Next"),it.nextArrow),this.content=this.createCollection(),this.setTemplate({tag:"div",attributes:{class:["ck","ck-balloon-rotator"],"z-index":"-1"},children:[{tag:"div",attributes:{class:["ck-balloon-rotator__navigation",o.to("isNavigationVisible",a=>a?"":"ck-hidden")]},children:[this.buttonPrevView,{tag:"span",attributes:{class:["ck-balloon-rotator__counter"]},children:[{text:o.to("counter")}]},this.buttonNextView]},{tag:"div",attributes:{class:"ck-balloon-rotator__content"},children:this.content}]})}render(){super.render(),this.focusTracker.add(this.element)}destroy(){super.destroy(),this.focusTracker.destroy()}showView(e){this.hideView(),this.content.add(e)}hideView(){this.content.clear()}_createButtonView(e,t){const o=new Et(this.locale);return o.set({label:e,icon:t,tooltip:!0}),o}}class rL extends Ge{constructor(e,t){super(e);const o=this.bindTemplate;this.set("top",0),this.set("left",0),this.set("height",0),this.set("width",0),this.set("numberOfPanels",0),this.content=this.createCollection(),this._balloonPanelView=t,this.setTemplate({tag:"div",attributes:{class:["ck-fake-panel",o.to("numberOfPanels",a=>a?"":"ck-hidden")],style:{top:o.to("top",uh),left:o.to("left",uh),width:o.to("width",uh),height:o.to("height",uh)}},children:this.content}),this.on("change:numberOfPanels",(a,c,d,h)=>{d>h?this._addPanels(d-h):this._removePanels(h-d),this.updatePosition()})}_addPanels(e){for(;e--;){const t=new Ge;t.setTemplate({tag:"div"}),this.content.add(t),this.registerChild(t)}}_removePanels(e){for(;e--;){const t=this.content.last;this.content.remove(t),this.deregisterChild(t),t.destroy()}}updatePosition(){if(this.numberOfPanels){const{top:e,left:t}=this._balloonPanelView,{width:o,height:a}=new pt(this._balloonPanelView.element);Object.assign(this,{top:e,left:t,width:o,height:a})}}}var xC=u(8298),sL={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};De()(xC.A,sL),xC.A.locals;const sl=Wa("px");class aL extends Ge{constructor(e){super(e);const t=this.bindTemplate;this.set("isActive",!1),this.set("isSticky",!1),this.set("limiterElement",null),this.set("limiterBottomOffset",50),this.set("viewportTopOffset",0),this.set("_marginLeft",null),this.set("_isStickyToTheBottomOfLimiter",!1),this.set("_stickyTopOffset",null),this.set("_stickyBottomOffset",null),this.content=this.createCollection(),this._contentPanelPlaceholder=new ki({tag:"div",attributes:{class:["ck","ck-sticky-panel__placeholder"],style:{display:t.to("isSticky",o=>o?"block":"none"),height:t.to("isSticky",o=>o?sl(this._contentPanelRect.height):null)}}}).render(),this.contentPanelElement=new ki({tag:"div",attributes:{class:["ck","ck-sticky-panel__content",t.if("isSticky","ck-sticky-panel__content_sticky"),t.if("_isStickyToTheBottomOfLimiter","ck-sticky-panel__content_sticky_bottom-limit")],style:{width:t.to("isSticky",o=>o?sl(this._contentPanelPlaceholder.getBoundingClientRect().width):null),top:t.to("_stickyTopOffset",o=>o&&sl(o)),bottom:t.to("_stickyBottomOffset",o=>o&&sl(o)),marginLeft:t.to("_marginLeft")}},children:this.content}).render(),this.setTemplate({tag:"div",attributes:{class:["ck","ck-sticky-panel"]},children:[this._contentPanelPlaceholder,this.contentPanelElement]})}render(){super.render(),this.checkIfShouldBeSticky(),this.listenTo(b.document,"scroll",()=>{this.checkIfShouldBeSticky()},{useCapture:!0}),this.listenTo(this,"change:isActive",()=>{this.checkIfShouldBeSticky()})}checkIfShouldBeSticky(){if(!this.limiterElement||!this.isActive)return void this._unstick();const e=new pt(this.limiterElement);let t=e.getVisible();if(t){const o=new pt(b.window);o.top+=this.viewportTopOffset,o.height-=this.viewportTopOffset,t=t.getIntersection(o)}if(t&&e.top<t.top){const o=t.top;if(o+this._contentPanelRect.height+this.limiterBottomOffset>t.bottom){const a=Math.max(e.bottom-t.bottom,0)+this.limiterBottomOffset;e.bottom-a>e.top+this._contentPanelRect.height?this._stickToBottomOfLimiter(a):this._unstick()}else this._contentPanelRect.height+this.limiterBottomOffset<e.height?this._stickToTopOfAncestors(o):this._unstick()}else this._unstick()}_stickToTopOfAncestors(e){this.isSticky=!0,this._isStickyToTheBottomOfLimiter=!1,this._stickyTopOffset=e,this._stickyBottomOffset=null,this._marginLeft=sl(-b.window.scrollX)}_stickToBottomOfLimiter(e){this.isSticky=!0,this._isStickyToTheBottomOfLimiter=!0,this._stickyTopOffset=null,this._stickyBottomOffset=e,this._marginLeft=sl(-b.window.scrollX)}_unstick(){this.isSticky=!1,this._isStickyToTheBottomOfLimiter=!1,this._stickyTopOffset=null,this._stickyBottomOffset=null,this._marginLeft=null}get _contentPanelRect(){return new pt(this.contentPanelElement)}}class lL extends oh{constructor(e,t){const o=e.t,a=Object.assign({},{showResetButton:!0,showIcon:!0,creator:sh},t);super(e,a.creator),this.label=t.label,this._viewConfig=a,this._viewConfig.showIcon&&(this.iconView=new hr,this.iconView.content=it.loupe,this.fieldWrapperChildren.add(this.iconView,0),this.extendTemplate({attributes:{class:"ck-search__query_with-icon"}})),this._viewConfig.showResetButton&&(this.resetButtonView=new Et(e),this.resetButtonView.set({label:o("Clear"),icon:it.cancel,class:"ck-search__reset",isVisible:!1,tooltip:!0}),this.resetButtonView.on("execute",()=>{this.reset(),this.focus(),this.fire("reset")}),this.resetButtonView.bind("isVisible").to(this.fieldView,"isEmpty",c=>!c),this.fieldWrapperChildren.add(this.resetButtonView),this.extendTemplate({attributes:{class:"ck-search__query_with-reset"}}))}reset(){this.fieldView.reset(),this._viewConfig.showResetButton&&(this.resetButtonView.isVisible=!1)}}class cL extends Ge{constructor(){super();const e=this.bindTemplate;this.set({isVisible:!1,primaryText:"",secondaryText:""}),this.setTemplate({tag:"div",attributes:{class:["ck","ck-search__info",e.if("isVisible","ck-hidden",t=>!t)],tabindex:-1},children:[{tag:"span",children:[{text:[e.to("primaryText")]}]},{tag:"span",children:[{text:[e.to("secondaryText")]}]}]})}focus(){this.element.focus()}}class dL extends Ge{constructor(e){super(e),this.children=this.createCollection(),this.focusTracker=new Bn,this.setTemplate({tag:"div",attributes:{class:["ck","ck-search__results"],tabindex:-1},children:this.children}),this._focusCycler=new Jo({focusables:this.children,focusTracker:this.focusTracker})}render(){super.render();for(const e of this.children)this.focusTracker.add(e.element)}focus(){this._focusCycler.focusFirst()}focusFirst(){this._focusCycler.focusFirst()}focusLast(){this._focusCycler.focusLast()}}var EC=/[\\^$.*+?()[\]{}|]/g,uL=RegExp(EC.source);const SC=function(s){return(s=pm(s))&&uL.test(s)?s.replace(EC,"\\$&"):s};var TC=u(8107),hL={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};De()(TC.A,hL),TC.A.locals;var pL=Object.defineProperty,DC=Object.getOwnPropertySymbols,fL=Object.prototype.hasOwnProperty,mL=Object.prototype.propertyIsEnumerable,IC=(s,e,t)=>e in s?pL(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t;class gL extends Ge{constructor(e,t){super(e),this._config=t,this.filteredView=t.filteredView,this.queryView=this._createSearchTextQueryView(),this.focusTracker=new Bn,this.keystrokes=new no,this.resultsView=new dL(e),this.children=this.createCollection(),this.focusableChildren=this.createCollection([this.queryView,this.resultsView]),this.set("isEnabled",!0),this.set("resultsCount",0),this.set("totalItemsCount",0),t.infoView&&t.infoView.instance?this.infoView=t.infoView.instance:(this.infoView=new cL,this._enableDefaultInfoViewBehavior(),this.on("render",()=>{this.search("")})),this.resultsView.children.addMany([this.infoView,this.filteredView]),this.focusCycler=new Jo({focusables:this.focusableChildren,focusTracker:this.focusTracker,keystrokeHandler:this.keystrokes,actions:{focusPrevious:"shift + tab",focusNext:"tab"}}),this.on("search",(o,{resultsCount:a,totalItemsCount:c})=>{this.resultsCount=a,this.totalItemsCount=c}),this.setTemplate({tag:"div",attributes:{class:["ck","ck-search",t.class||null],tabindex:"-1"},children:this.children})}render(){super.render(),this.children.addMany([this.queryView,this.resultsView]);const e=t=>t.stopPropagation();for(const t of this.focusableChildren)this.focusTracker.add(t.element);this.keystrokes.listenTo(this.element),this.keystrokes.set("arrowright",e),this.keystrokes.set("arrowleft",e),this.keystrokes.set("arrowup",e),this.keystrokes.set("arrowdown",e)}focus(){this.queryView.focus()}reset(){this.queryView.reset(),this.search("")}search(e){const t=e?new RegExp(SC(e),"ig"):null,o=this.filteredView.filter(t);this.fire("search",((a,c)=>{for(var d in c||(c={}))fL.call(c,d)&&IC(a,d,c[d]);if(DC)for(var d of DC(c))mL.call(c,d)&&IC(a,d,c[d]);return a})({query:e},o))}_createSearchTextQueryView(){const e=new lL(this.locale,this._config.queryView);return this.listenTo(e.fieldView,"input",()=>{this.search(e.fieldView.element.value)}),e.on("reset",()=>this.reset()),e.bind("isEnabled").to(this),e}_enableDefaultInfoViewBehavior(){const e=this.locale.t,t=this.infoView;function o(a,{query:c,resultsCount:d,totalItemsCount:h}){return typeof a=="function"?a(c,d,h):a}this.on("search",(a,c)=>{if(c.resultsCount)t.set({isVisible:!1});else{const d=this._config.infoView&&this._config.infoView.text;let h,g;c.totalItemsCount?d&&d.notFound?(h=d.notFound.primary,g=d.notFound.secondary):(h=e("No results found"),g=""):d&&d.noSearchableItems?(h=d.noSearchableItems.primary,g=d.noSearchableItems.secondary):(h=e("No searchable items"),g=""),t.set({primaryText:o(h,c),secondaryText:o(g,c),isVisible:!0})}})}}var MC=u(5727),bL={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};De()(MC.A,bL),MC.A.locals;const ng=class extends gL{constructor(s,e){super(s,e),this._config=e;const t=Wa("px");this.extendTemplate({attributes:{class:["ck-autocomplete"]}});const o=this.resultsView.bindTemplate;this.resultsView.set("isVisible",!1),this.resultsView.set("_position","s"),this.resultsView.set("_width",0),this.resultsView.extendTemplate({attributes:{class:[o.if("isVisible","ck-hidden",a=>!a),o.to("_position",a=>`ck-search__results_${a}`)],style:{width:o.to("_width",t)}}}),this.focusTracker.on("change:isFocused",(a,c,d)=>{this._updateResultsVisibility(),d?this.resultsView.element.scrollTop=0:e.resetOnBlur&&this.queryView.reset()}),this.on("search",()=>{this._updateResultsVisibility(),this._updateResultsViewWidthAndPosition()}),this.keystrokes.set("esc",(a,c)=>{this.resultsView.isVisible&&(this.queryView.focus(),this.resultsView.isVisible=!1,c())}),this.listenTo(b.document,"scroll",()=>{this._updateResultsViewWidthAndPosition()}),this.on("change:isEnabled",()=>{this._updateResultsVisibility()}),this.filteredView.on("execute",(a,{value:c})=>{this.focus(),this.reset(),this.queryView.fieldView.value=this.queryView.fieldView.element.value=c,this.resultsView.isVisible=!1}),this.resultsView.on("change:isVisible",()=>{this._updateResultsViewWidthAndPosition()})}_updateResultsViewWidthAndPosition(){if(!this.resultsView.isVisible)return;this.resultsView._width=new pt(this.queryView.fieldView.element).width;const s=ng._getOptimalPosition({element:this.resultsView.element,target:this.queryView.element,fitInViewport:!0,positions:ng.defaultResultsPositions});this.resultsView._position=s?s.name:"s"}_updateResultsVisibility(){const s=this._config.queryMinChars===void 0?0:this._config.queryMinChars,e=this.queryView.fieldView.element.value.length;this.resultsView.isVisible=this.focusTracker.isFocused&&this.isEnabled&&e>=s}};let OC=ng;OC.defaultResultsPositions=[s=>({top:s.bottom,left:s.left,name:"s"}),(s,e)=>({top:s.top-e.height,left:s.left,name:"n"})],OC._getOptimalPosition=Iu;var BC=u(9529),kL={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};De()(BC.A,kL),BC.A.locals;var PC=u(109),_L={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};De()(PC.A,_L),PC.A.locals;var NC=u(2710),wL={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};De()(NC.A,wL),NC.A.locals;var LC=u(3344),vL={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};De()(LC.A,vL),LC.A.locals;class AL extends Et{constructor(e){super(e);const t=this.bindTemplate;this.set({withText:!0,role:"menuitem"}),this.arrowView=this._createArrowView(),this.extendTemplate({attributes:{class:["ck-menu-bar__menu__button"],"aria-haspopup":!0,"aria-expanded":this.bindTemplate.to("isOn",o=>String(o)),"data-cke-tooltip-disabled":t.to("isOn")},on:{mouseenter:t.to("mouseenter")}})}render(){super.render(),this.children.add(this.arrowView)}_createArrowView(){const e=new hr;return e.content=nh,e.extendTemplate({attributes:{class:"ck-menu-bar__menu__button__arrow"}}),e}}var RC=u(9481),CL={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};De()(RC.A,CL),RC.A.locals;class og extends rl{constructor(e,t){super(e);const o=this.bindTemplate;this.extendTemplate({attributes:{class:["ck-menu-bar__menu__item"]},on:{mouseenter:o.to("mouseenter")}}),this.delegate("mouseenter").to(t)}}var yL=Object.defineProperty,FC=Object.getOwnPropertySymbols,xL=Object.prototype.hasOwnProperty,EL=Object.prototype.propertyIsEnumerable,zC=(s,e,t)=>e in s?yL(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t,jC=(s,e)=>{for(var t in e||(e={}))xL.call(e,t)&&zC(s,t,e[t]);if(FC)for(var t of FC(e))EL.call(e,t)&&zC(s,t,e[t]);return s};const ad={toggleMenusAndFocusItemsOnHover(s){s.on("menu:mouseenter",e=>{if(s.isOpen){for(const t of s.menus){const o=e.path[0],a=o instanceof og&&o.children.first===t;t.isOpen=(e.path.includes(t)||a)&&t.isEnabled}e.source.focus()}})},focusCycleMenusOnArrows(s){const e=s.locale.uiLanguageDirection==="rtl";function t(o,a){const c=s.children.getIndex(o),d=o.isOpen,h=s.children.length,g=s.children.get((c+h+a)%h);o.isOpen=!1,d&&(g.isOpen=!0),g.buttonView.focus()}s.on("menu:arrowright",o=>{t(o.source,e?-1:1)}),s.on("menu:arrowleft",o=>{t(o.source,e?1:-1)})},closeMenusWhenTheBarCloses(s){s.on("change:isOpen",()=>{s.isOpen||s.menus.forEach(e=>{e.isOpen=!1})})},closeMenuWhenAnotherOnTheSameLevelOpens(s){s.on("menu:change:isOpen",(e,t,o)=>{o&&s.menus.filter(a=>e.source.parentMenuView===a.parentMenuView&&e.source!==a&&a.isOpen).forEach(a=>{a.isOpen=!1})})},closeOnClickOutside(s){Pu({emitter:s,activator:()=>s.isOpen,callback:()=>s.close(),contextElements:()=>s.children.map(e=>e.element)})}},Ys={openAndFocusPanelOnArrowDownKey(s){s.keystrokes.set("arrowdown",(e,t)=>{s.focusTracker.focusedElement===s.buttonView.element&&(s.isOpen||(s.isOpen=!0),s.panelView.focus(),t())})},openOnArrowRightKey(s){const e=s.locale.uiLanguageDirection==="rtl"?"arrowleft":"arrowright";s.keystrokes.set(e,(t,o)=>{s.focusTracker.focusedElement===s.buttonView.element&&s.isEnabled&&(s.isOpen||(s.isOpen=!0),s.panelView.focus(),o())})},openOnButtonClick(s){s.buttonView.on("execute",()=>{s.isOpen=!0,s.panelView.focus()})},toggleOnButtonClick(s){s.buttonView.on("execute",()=>{s.isOpen=!s.isOpen,s.isOpen&&s.panelView.focus()})},closeOnArrowLeftKey(s){const e=s.locale.uiLanguageDirection==="rtl"?"arrowright":"arrowleft";s.keystrokes.set(e,(t,o)=>{s.isOpen&&(s.isOpen=!1,s.focus(),o())})},closeOnEscKey(s){s.keystrokes.set("esc",(e,t)=>{s.isOpen&&(s.isOpen=!1,s.focus(),t())})},closeOnParentClose(s){s.parentMenuView.on("change:isOpen",(e,t,o)=>{o||e.source!==s.parentMenuView||(s.isOpen=!1)})}},SL={southEast:s=>({top:s.bottom,left:s.left,name:"se"}),southWest:(s,e)=>({top:s.bottom,left:s.left-e.width+s.width,name:"sw"}),northEast:(s,e)=>({top:s.top-e.height,left:s.left,name:"ne"}),northWest:(s,e)=>({top:s.top-e.height,left:s.left-e.width+s.width,name:"nw"}),eastSouth:s=>({top:s.top,left:s.right-5,name:"es"}),eastNorth:(s,e)=>({top:s.top-e.height,left:s.right-5,name:"en"}),westSouth:(s,e)=>({top:s.top,left:s.left-e.width+5,name:"ws"}),westNorth:(s,e)=>({top:s.top-e.height,left:s.left-e.width+5,name:"wn"})},TL=[{menuId:"file",label:"File",groups:[{groupId:"export",items:["menuBar:exportPdf","menuBar:exportWord"]},{groupId:"import",items:["menuBar:importWord"]},{groupId:"revisionHistory",items:["menuBar:revisionHistory"]}]},{menuId:"edit",label:"Edit",groups:[{groupId:"undo",items:["menuBar:undo","menuBar:redo"]},{groupId:"selectAll",items:["menuBar:selectAll"]},{groupId:"findAndReplace",items:["menuBar:findAndReplace"]}]},{menuId:"view",label:"View",groups:[{groupId:"sourceEditing",items:["menuBar:sourceEditing"]},{groupId:"showBlocks",items:["menuBar:showBlocks"]},{groupId:"restrictedEditingException",items:["menuBar:restrictedEditingException"]}]},{menuId:"insert",label:"Insert",groups:[{groupId:"insertMainWidgets",items:["menuBar:uploadImage","menuBar:ckbox","menuBar:ckfinder","menuBar:insertTable"]},{groupId:"insertInline",items:["menuBar:link","menuBar:comment"]},{groupId:"insertMinorWidgets",items:["menuBar:insertTemplate","menuBar:blockQuote","menuBar:codeBlock","menuBar:htmlEmbed"]},{groupId:"insertStructureWidgets",items:["menuBar:horizontalLine","menuBar:pageBreak","menuBar:tableOfContents"]},{groupId:"restrictedEditing",items:["menuBar:restrictedEditing"]}]},{menuId:"format",label:"Format",groups:[{groupId:"textAndFont",items:[{menuId:"text",label:"Text",groups:[{groupId:"basicStyles",items:["menuBar:bold","menuBar:italic","menuBar:underline","menuBar:strikethrough","menuBar:superscript","menuBar:subscript","menuBar:code"]},{groupId:"textPartLanguage",items:["menuBar:textPartLanguage"]}]},{menuId:"font",label:"Font",groups:[{groupId:"fontProperties",items:["menuBar:fontSize","menuBar:fontFamily"]},{groupId:"fontColors",items:["menuBar:fontColor","menuBar:fontBackgroundColor"]},{groupId:"highlight",items:["menuBar:highlight"]}]},"menuBar:heading"]},{groupId:"list",items:["menuBar:bulletedList","menuBar:numberedList","menuBar:todoList"]},{groupId:"indent",items:["menuBar:alignment","menuBar:indent","menuBar:outdent"]},{groupId:"caseChange",items:["menuBar:caseChange"]},{groupId:"removeFormat",items:["menuBar:removeFormat"]}]},{menuId:"tools",label:"Tools",groups:[{groupId:"aiTools",items:["menuBar:aiAssistant","menuBar:aiCommands"]},{groupId:"tools",items:["menuBar:trackChanges","menuBar:commentsArchive"]}]},{menuId:"help",label:"Help",groups:[{groupId:"help",items:["menuBar:accessibilityHelp"]}]}];function DL({normalizedConfig:s,locale:e,componentFactory:t}){const o=vi(s);return function(a,c){const d=c.removeItems,h=[];c.items=c.items.filter(({menuId:g})=>!d.includes(g)||(h.push(g),!1)),al(c.items,g=>{g.groups=g.groups.filter(({groupId:k})=>!d.includes(k)||(h.push(k),!1));for(const k of g.groups)k.items=k.items.filter(w=>{const C=HC(w);return!d.includes(C)||(h.push(C),!1)})});for(const g of d)h.includes(g)||V("menu-bar-item-could-not-be-removed",{menuBarConfig:a,itemName:g})}(s,o),function(a,c){const d=c.addItems,h=[];for(const g of d){const k=OL(g.position),w=BL(g.position);if(IL(g))if(w){const C=c.items.findIndex(E=>E.menuId===w);C!=-1?k==="before"?(c.items.splice(C,0,g.menu),h.push(g)):k==="after"&&(c.items.splice(C+1,0,g.menu),h.push(g)):$C(c,g.menu,w,k)&&h.push(g)}else k==="start"?(c.items.unshift(g.menu),h.push(g)):k==="end"&&(c.items.push(g.menu),h.push(g));else ML(g)?al(c.items,C=>{if(C.menuId===w)k==="start"?(C.groups.unshift(g.group),h.push(g)):k==="end"&&(C.groups.push(g.group),h.push(g));else{const E=C.groups.findIndex(D=>D.groupId===w);E!==-1&&(k==="before"?(C.groups.splice(E,0,g.group),h.push(g)):k==="after"&&(C.groups.splice(E+1,0,g.group),h.push(g)))}}):$C(c,g.item,w,k)&&h.push(g)}for(const g of d)h.includes(g)||V("menu-bar-item-could-not-be-added",{menuBarConfig:a,addedItemConfig:g})}(s,o),function(a,c,d){al(c.items,h=>{for(const g of h.groups)g.items=g.items.filter(k=>{const w=typeof k=="string"&&!d.has(k);return w&&!c.isUsingDefaultConfig&&V("menu-bar-item-unavailable",{menuBarConfig:a,parentMenuConfig:vi(h),componentName:k}),!w})})}(s,o,t),VC(s,o),function(a,c){const d=c.t,h={File:d({string:"File",id:"MENU_BAR_MENU_FILE"}),Edit:d({string:"Edit",id:"MENU_BAR_MENU_EDIT"}),View:d({string:"View",id:"MENU_BAR_MENU_VIEW"}),Insert:d({string:"Insert",id:"MENU_BAR_MENU_INSERT"}),Format:d({string:"Format",id:"MENU_BAR_MENU_FORMAT"}),Tools:d({string:"Tools",id:"MENU_BAR_MENU_TOOLS"}),Help:d({string:"Help",id:"MENU_BAR_MENU_HELP"}),Text:d({string:"Text",id:"MENU_BAR_MENU_TEXT"}),Font:d({string:"Font",id:"MENU_BAR_MENU_FONT"})};al(a.items,g=>{g.label in h&&(g.label=h[g.label])})}(o,e),o}function $C(s,e,t,o){let a=!1;return al(s.items,c=>{for(const{groupId:d,items:h}of c.groups){if(a)return;if(d===t)o==="start"?(h.unshift(e),a=!0):o==="end"&&(h.push(e),a=!0);else{const g=h.findIndex(k=>HC(k)===t);g!==-1&&(o==="before"?(h.splice(g,0,e),a=!0):o==="after"&&(h.splice(g+1,0,e),a=!0))}}}),a}function VC(s,e){const t=e.isUsingDefaultConfig;let o=!1;e.items=e.items.filter(a=>!!a.groups.length||(ig(s,a,t),!1)),e.items.length?(al(e.items,a=>{a.groups=a.groups.filter(c=>!!c.items.length||(o=!0,!1));for(const c of a.groups)c.items=c.items.filter(d=>!(UC(d)&&!d.groups.length)||(ig(s,d,t),o=!0,!1))}),o&&VC(s,e)):ig(s,s,t)}function ig(s,e,t){t||V("menu-bar-menu-empty",{menuBarConfig:s,emptyMenuConfig:e})}function al(s,e){if(Array.isArray(s))for(const o of s)t(o);function t(o){e(o);for(const a of o.groups)for(const c of a.items)UC(c)&&t(c)}}function IL(s){return typeof s=="object"&&"menu"in s}function ML(s){return typeof s=="object"&&"group"in s}function OL(s){return s.startsWith("start")?"start":s.startsWith("end")?"end":s.startsWith("after")?"after":"before"}function BL(s){const e=s.match(/^[^:]+:(.+)/);return e?e[1]:null}function HC(s){return typeof s=="string"?s:s.menuId}function UC(s){return typeof s=="object"&&"menuId"in s}function PL(s,e){const t=e.element;s.ui.focusTracker.add(t),s.keystrokes.listenTo(t);const o=function(a){let c;return c="items"in a&&a.items?jC({items:a.items,removeItems:[],addItems:[],isVisible:!0,isUsingDefaultConfig:!1},a):jC({items:vi(TL),addItems:[],removeItems:[],isVisible:!0,isUsingDefaultConfig:!0},a),c}(s.config.get("menuBar")||{});e.fillFromConfig(o,s.ui.componentFactory),s.keystrokes.set("Esc",(a,c)=>{t.contains(s.ui.focusTracker.focusedElement)&&(s.editing.view.focus(),c())}),s.keystrokes.set("Alt+F9",(a,c)=>{t.contains(s.ui.focusTracker.focusedElement)||(e.focus(),c())})}var qC=u(9108),NL={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};De()(qC.A,NL),qC.A.locals;class LL extends Ge{constructor(e){super(e);const t=this.bindTemplate;this.set("isVisible",!1),this.set("position","se"),this.children=this.createCollection(),this.setTemplate({tag:"div",attributes:{class:["ck","ck-reset","ck-menu-bar__menu__panel",t.to("position",o=>`ck-menu-bar__menu__panel_position_${o}`),t.if("isVisible","ck-hidden",o=>!o)],tabindex:"-1"},children:this.children,on:{selectstart:t.to(o=>{o.target.tagName.toLocaleLowerCase()!=="input"&&o.preventDefault()})}})}focus(e=1){this.children.length&&(e===1?this.children.first.focus():this.children.last.focus())}}var GC=u(4),RL={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};De()(GC.A,RL),GC.A.locals;const WC=class extends Ge{constructor(s){super(s);const e=this.bindTemplate;this.buttonView=new AL(s),this.buttonView.delegate("mouseenter").to(this),this.buttonView.bind("isOn","isEnabled").to(this,"isOpen","isEnabled"),this.panelView=new LL(s),this.panelView.bind("isVisible").to(this,"isOpen"),this.keystrokes=new no,this.focusTracker=new Bn,this.set("isOpen",!1),this.set("isEnabled",!0),this.set("panelPosition","w"),this.set("class",void 0),this.set("parentMenuView",null),this.setTemplate({tag:"div",attributes:{class:["ck","ck-menu-bar__menu",e.to("class"),e.if("isEnabled","ck-disabled",t=>!t),e.if("parentMenuView","ck-menu-bar__menu_top-level",t=>!t)]},children:[this.buttonView,this.panelView]})}render(){super.render(),this.focusTracker.add(this.buttonView.element),this.focusTracker.add(this.panelView.element),this.keystrokes.listenTo(this.element),Ys.closeOnEscKey(this),this._repositionPanelOnOpen()}_attachBehaviors(){this.parentMenuView?(Ys.openOnButtonClick(this),Ys.openOnArrowRightKey(this),Ys.closeOnArrowLeftKey(this),Ys.closeOnParentClose(this)):(this._propagateArrowKeystrokeEvents(),Ys.openAndFocusPanelOnArrowDownKey(this),Ys.toggleOnButtonClick(this))}_propagateArrowKeystrokeEvents(){this.keystrokes.set("arrowright",(s,e)=>{this.fire("arrowright"),e()}),this.keystrokes.set("arrowleft",(s,e)=>{this.fire("arrowleft"),e()})}_repositionPanelOnOpen(){this.on("change:isOpen",(s,e,t)=>{if(!t)return;const o=WC._getOptimalPosition({element:this.panelView.element,target:this.buttonView.element,fitInViewport:!0,positions:this._panelPositions});this.panelView.position=o?o.name:this._panelPositions[0].name})}focus(){this.buttonView.focus()}get _panelPositions(){const{southEast:s,southWest:e,northEast:t,northWest:o,westSouth:a,eastSouth:c,westNorth:d,eastNorth:h}=SL;return this.locale.uiLanguageDirection==="ltr"?this.parentMenuView?[c,h,a,d]:[s,e,t,o]:this.parentMenuView?[a,d,c,h]:[e,s,o,t]}};let ll=WC;ll._getOptimalPosition=Iu;class rg extends Ym{constructor(e){super(e),this.role="menu"}}var KC=u(977),FL={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};De()(KC.A,FL),KC.A.locals;class Lo extends Et{constructor(e){super(e),this.set({withText:!0,withKeystroke:!0,tooltip:!1,role:"menuitem"}),this.extendTemplate({attributes:{class:["ck-menu-bar__menu__item__button"]}})}}class YC extends SA{constructor(e){super(e),this.set({withText:!0,withKeystroke:!0,tooltip:!1,role:"menuitem"}),this.extendTemplate({attributes:{class:["ck-menu-bar__menu__item__button"]}})}}var QC=u(497),zL={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};De()(QC.A,zL),QC.A.locals;const ZC=["mouseenter","arrowleft","arrowright","change:isOpen"];class jL extends Ge{constructor(e){super(e),this.menus=[];const t=e.t;this.set("isOpen",!1),this._setupIsOpenUpdater(),this.children=this.createCollection(),this.setTemplate({tag:"div",attributes:{class:["ck","ck-menu-bar"],"aria-label":t("Editor menu bar"),role:"menubar"},children:this.children})}fillFromConfig(e,t){const o=DL({normalizedConfig:e,locale:this.locale,componentFactory:t}).items.map(a=>this._createMenu({componentFactory:t,menuDefinition:a}));this.children.addMany(o)}render(){super.render(),ad.toggleMenusAndFocusItemsOnHover(this),ad.closeMenusWhenTheBarCloses(this),ad.closeMenuWhenAnotherOnTheSameLevelOpens(this),ad.focusCycleMenusOnArrows(this),ad.closeOnClickOutside(this)}focus(){this.children.first&&this.children.first.focus()}close(){for(const e of this.children)e.isOpen=!1}registerMenu(e,t=null){t?(e.delegate(...ZC).to(t),e.parentMenuView=t):e.delegate(...ZC).to(this,o=>"menu:"+o),e._attachBehaviors(),this.menus.push(e)}_createMenu({componentFactory:e,menuDefinition:t,parentMenuView:o}){const a=this.locale,c=new ll(a);return this.registerMenu(c,o),c.buttonView.set({label:t.label}),c.once("change:isOpen",()=>{const d=new rg(a);d.ariaLabel=t.label,c.panelView.children.add(d),d.items.addMany(this._createMenuItems({menuDefinition:t,parentMenuView:c,componentFactory:e}))}),c}_createMenuItems({menuDefinition:e,parentMenuView:t,componentFactory:o}){const a=this.locale,c=[];for(const d of e.groups){for(const h of d.items){const g=new og(a,t);if($e(h))g.children.add(this._createMenu({componentFactory:o,menuDefinition:h,parentMenuView:t}));else{const k=this._createMenuItemContentFromFactory({componentName:h,componentFactory:o,parentMenuView:t});if(!k)continue;g.children.add(k)}c.push(g)}d!==e.groups[e.groups.length-1]&&c.push(new Km(a))}return c}_createMenuItemContentFromFactory({componentName:e,parentMenuView:t,componentFactory:o}){const a=o.create(e);return a instanceof ll||a instanceof Lo||a instanceof YC?(this._registerMenuTree(a,t),a.on("execute",()=>{this.close()}),a):(V("menu-bar-component-unsupported",{componentName:e,componentView:a}),null)}_registerMenuTree(e,t){if(!(e instanceof ll))return void e.delegate("mouseenter").to(t);this.registerMenu(e,t);const o=e.panelView.children.filter(c=>c instanceof rg)[0];if(!o)return void e.delegate("mouseenter").to(t);const a=o.items.filter(c=>c instanceof rl);for(const c of a)this._registerMenuTree(c.children.get(0),e)}_setupIsOpenUpdater(){let e;this.on("menu:change:isOpen",(t,o,a)=>{clearTimeout(e),a?this.isOpen=!0:e=setTimeout(()=>{this.isOpen=Array.from(this.children).some(c=>c.isOpen)},0)})}}class $L extends QN{constructor(e,t){super(e),this.view=t,this._toolbarConfig=FA(e.config.get("toolbar")),this._elementReplacer=new Oe,this.listenTo(e.editing.view,"scrollToTheSelection",this._handleScrollToTheSelectionWithStickyPanel.bind(this))}get element(){return this.view.element}init(e){const t=this.editor,o=this.view,a=t.editing.view,c=o.editable,d=a.document.getRoot();c.name=d.rootName,o.render();const h=c.element;this.setEditableElement(c.name,h),o.editable.bind("isFocused").to(this.focusTracker),a.attachDomRoot(h),e&&this._elementReplacer.replace(e,this.element),this._initPlaceholder(),this._initToolbar(),o.menuBarView&&PL(t,o.menuBarView),this._initDialogPluginIntegration(),this.fire("ready")}destroy(){super.destroy();const e=this.view,t=this.editor.editing.view;this._elementReplacer.restore(),t.detachDomRoot(e.editable.name),e.destroy()}_initToolbar(){const e=this.view;e.stickyPanel.bind("isActive").to(this.focusTracker,"isFocused"),e.stickyPanel.limiterElement=e.element,e.stickyPanel.bind("viewportTopOffset").to(this,"viewportOffset",({top:t})=>t||0),e.toolbar.fillFromConfig(this._toolbarConfig,this.componentFactory),this.addToolbar(e.toolbar)}_initPlaceholder(){const e=this.editor,t=e.editing.view,o=t.document.getRoot(),a=e.sourceElement;let c;const d=e.config.get("placeholder");d&&(c=typeof d=="string"?d:d[this.view.editable.name]),!c&&a&&a.tagName.toLowerCase()==="textarea"&&(c=a.getAttribute("placeholder")),c&&(o.placeholder=c),wv({view:t,element:o,isDirectHost:!1,keepOnFocus:!0})}_handleScrollToTheSelectionWithStickyPanel(e,t,o){const a=this.view.stickyPanel;if(a.isSticky){const c=new pt(a.element).height;t.viewportOffset.top+=c}else{const c=()=>{this.editor.editing.view.scrollToTheSelection(o)};this.listenTo(a,"change:isSticky",c),setTimeout(()=>{this.stopListening(a,"change:isSticky",c)},20)}}_initDialogPluginIntegration(){if(!this.editor.plugins.has("Dialog"))return;const e=this.view.stickyPanel,t=this.editor.plugins.get("Dialog");t.on("show",()=>{const o=t.view;o.on("moveTo",(a,c)=>{if(!e.isSticky||o.wasMoved)return;const d=new pt(e.contentPanelElement);c[1]<d.bottom+lh.defaultOffset&&(c[1]=d.bottom+lh.defaultOffset)},{priority:"high"})},{priority:"low"})}}var JC=u(7388),VL={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};De()(JC.A,VL),JC.A.locals;class HL extends XN{constructor(e,t,o={}){super(e),this.stickyPanel=new aL(e),this.toolbar=new Wm(e,{shouldGroupWhenFull:o.shouldToolbarGroupWhenFull}),o.useMenuBar&&(this.menuBarView=new jL(e)),this.editable=new tL(e,t)}render(){super.render(),this.menuBarView?this.stickyPanel.content.addMany([this.menuBarView,this.toolbar]):this.stickyPanel.content.add(this.toolbar),this.top.add(this.stickyPanel),this.main.add(this.editable)}}class XC{constructor(e){if(this.crashes=[],this.state="initializing",this._now=Date.now,this.crashes=[],this._crashNumberLimit=typeof e.crashNumberLimit=="number"?e.crashNumberLimit:3,this._minimumNonErrorTimePeriod=typeof e.minimumNonErrorTimePeriod=="number"?e.minimumNonErrorTimePeriod:5e3,this._boundErrorHandler=t=>{const o="error"in t?t.error:t.reason;o instanceof Error&&this._handleError(o,t)},this._listeners={},!this._restart)throw new Error("The Watchdog class was split into the abstract `Watchdog` class and the `EditorWatchdog` class. Please, use `EditorWatchdog` if you have used the `Watchdog` class previously.")}destroy(){this._stopErrorHandling(),this._listeners={}}on(e,t){this._listeners[e]||(this._listeners[e]=[]),this._listeners[e].push(t)}off(e,t){this._listeners[e]=this._listeners[e].filter(o=>o!==t)}_fire(e,...t){const o=this._listeners[e]||[];for(const a of o)a.apply(this,[null,...t])}_startErrorHandling(){window.addEventListener("error",this._boundErrorHandler),window.addEventListener("unhandledrejection",this._boundErrorHandler)}_stopErrorHandling(){window.removeEventListener("error",this._boundErrorHandler),window.removeEventListener("unhandledrejection",this._boundErrorHandler)}_handleError(e,t){if(this._shouldReactToError(e)){this.crashes.push({message:e.message,stack:e.stack,filename:t instanceof ErrorEvent?t.filename:void 0,lineno:t instanceof ErrorEvent?t.lineno:void 0,colno:t instanceof ErrorEvent?t.colno:void 0,date:this._now()});const o=this._shouldRestart();this.state="crashed",this._fire("stateChange"),this._fire("error",{error:e,causesRestart:o}),o?this._restart():(this.state="crashedPermanently",this._fire("stateChange"))}}_shouldReactToError(e){return e.is&&e.is("CKEditorError")&&e.context!==void 0&&e.context!==null&&this.state==="ready"&&this._isErrorComingFromThisItem(e)}_shouldRestart(){return this.crashes.length<=this._crashNumberLimit?!0:(this.crashes[this.crashes.length-1].date-this.crashes[this.crashes.length-1-this._crashNumberLimit].date)/this._crashNumberLimit>this._minimumNonErrorTimePeriod}}function sg(s,e=new Set){const t=[s],o=new Set;let a=0;for(;t.length>a;){const c=t[a++];if(!o.has(c)&&UL(c)&&!e.has(c))if(o.add(c),Symbol.iterator in c)try{for(const d of c)t.push(d)}catch{}else for(const d in c)d!=="defaultValue"&&t.push(c[d])}return o}function UL(s){const e=Object.prototype.toString.call(s),t=typeof s;return!(t==="number"||t==="boolean"||t==="string"||t==="symbol"||t==="function"||e==="[object Date]"||e==="[object RegExp]"||e==="[object Module]"||s==null||s._watchdogExcluded||s instanceof EventTarget||s instanceof Event)}function ey(s,e,t=new Set){if(s===e&&typeof(o=s)=="object"&&o!==null)return!0;var o;const a=sg(s,t),c=sg(e,t);for(const d of a)if(c.has(d))return!0;return!1}var qL=Object.defineProperty,GL=Object.defineProperties,WL=Object.getOwnPropertyDescriptors,ph=Object.getOwnPropertySymbols,ty=Object.prototype.hasOwnProperty,ny=Object.prototype.propertyIsEnumerable,oy=(s,e,t)=>e in s?qL(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t,ag=(s,e)=>{for(var t in e||(e={}))ty.call(e,t)&&oy(s,t,e[t]);if(ph)for(var t of ph(e))ny.call(e,t)&&oy(s,t,e[t]);return s};class iy extends XC{constructor(e,t={}){super(t),this._editor=null,this._lifecyclePromise=null,this._initUsingData=!0,this._editables={},this._throttledSave=dh(this._save.bind(this),typeof t.saveInterval=="number"?t.saveInterval:5e3),e&&(this._creator=(o,a)=>e.create(o,a)),this._destructor=o=>o.destroy()}get editor(){return this._editor}get _item(){return this._editor}setCreator(e){this._creator=e}setDestructor(e){this._destructor=e}_restart(){return Promise.resolve().then(()=>(this.state="initializing",this._fire("stateChange"),this._destroy())).catch(e=>{console.error("An error happened during the editor destroying.",e)}).then(()=>{const e={},t=[],o=this._config.rootsAttributes||{},a={};for(const[g,k]of Object.entries(this._data.roots))k.isLoaded?(e[g]="",a[g]=o[g]||{}):t.push(g);const c=(d=ag({},this._config),h={extraPlugins:this._config.extraPlugins||[],lazyRoots:t,rootsAttributes:a,_watchdogInitialData:this._data},GL(d,WL(h)));var d,h;return delete c.initialData,c.extraPlugins.push(KL),this._initUsingData?this.create(e,c,c.context):Fs(this._elementOrData)?this.create(this._elementOrData,c,c.context):this.create(this._editables,c,c.context)}).then(()=>{this._fire("restart")})}create(e=this._elementOrData,t=this._config,o){return this._lifecyclePromise=Promise.resolve(this._lifecyclePromise).then(()=>(super._startErrorHandling(),this._elementOrData=e,this._initUsingData=typeof e=="string"||Object.keys(e).length>0&&typeof Object.values(e)[0]=="string",this._config=this._cloneEditorConfiguration(t)||{},this._config.context=o,this._creator(e,this._config))).then(a=>{this._editor=a,a.model.document.on("change:data",this._throttledSave),this._lastDocumentVersion=a.model.document.version,this._data=this._getData(),this._initUsingData||(this._editables=this._getEditables()),this.state="ready",this._fire("stateChange")}).finally(()=>{this._lifecyclePromise=null}),this._lifecyclePromise}destroy(){return this._lifecyclePromise=Promise.resolve(this._lifecyclePromise).then(()=>(this.state="destroyed",this._fire("stateChange"),super.destroy(),this._destroy())).finally(()=>{this._lifecyclePromise=null}),this._lifecyclePromise}_destroy(){return Promise.resolve().then(()=>{this._stopErrorHandling(),this._throttledSave.cancel();const e=this._editor;return this._editor=null,e.model.document.off("change:data",this._throttledSave),this._destructor(e)})}_save(){const e=this._editor.model.document.version;try{this._data=this._getData(),this._initUsingData||(this._editables=this._getEditables()),this._lastDocumentVersion=e}catch(t){console.error(t,"An error happened during restoring editor data. Editor will be restored from the previously saved data.")}}_setExcludedProperties(e){this._excludedProps=e}_getData(){const e=this._editor,t=e.model.document.roots.filter(h=>h.isAttached()&&h.rootName!="$graveyard"),{plugins:o}=e,a=o.has("CommentsRepository")&&o.get("CommentsRepository"),c=o.has("TrackChanges")&&o.get("TrackChanges"),d={roots:{},markers:{},commentThreads:JSON.stringify([]),suggestions:JSON.stringify([])};t.forEach(h=>{d.roots[h.rootName]={content:JSON.stringify(Array.from(h.getChildren())),attributes:JSON.stringify(Array.from(h.getAttributes())),isLoaded:h._isLoaded}});for(const h of e.model.markers)h._affectsData&&(d.markers[h.name]={rangeJSON:h.getRange().toJSON(),usingOperation:h._managedUsingOperations,affectsData:h._affectsData});return a&&(d.commentThreads=JSON.stringify(a.getCommentThreads({toJSON:!0,skipNotAttached:!0}))),c&&(d.suggestions=JSON.stringify(c.getSuggestions({toJSON:!0,skipNotAttached:!0}))),d}_getEditables(){const e={};for(const t of this.editor.model.document.getRootNames()){const o=this.editor.ui.getEditableElement(t);o&&(e[t]=o)}return e}_isErrorComingFromThisItem(e){return ey(this._editor,e.context,this._excludedProps)}_cloneEditorConfiguration(e){return Qf(e,(t,o)=>Fs(t)||o==="context"?t:void 0)}}class KL{constructor(e){this.editor=e,this._data=e.config.get("_watchdogInitialData")}init(){this.editor.data.on("init",e=>{e.stop(),this.editor.model.enqueueChange({isUndoable:!1},t=>{this._restoreCollaborationData(),this._restoreEditorData(t)}),this.editor.data.fire("ready")},{priority:999})}_createNode(e,t){if("name"in t){const o=e.createElement(t.name,t.attributes);if(t.children)for(const a of t.children)o._appendChild(this._createNode(e,a));return o}return e.createText(t.data,t.attributes)}_restoreEditorData(e){const t=this.editor;Object.entries(this._data.roots).forEach(([o,{content:a,attributes:c}])=>{const d=JSON.parse(a),h=JSON.parse(c),g=t.model.document.getRoot(o);for(const[k,w]of h)e.setAttribute(k,w,g);for(const k of d){const w=this._createNode(e,k);e.insert(w,g,"end")}}),Object.entries(this._data.markers).forEach(([o,a])=>{const{document:c}=t.model,d=a,{rangeJSON:{start:h,end:g}}=d,k=((M,R)=>{var j={};for(var q in M)ty.call(M,q)&&R.indexOf(q)<0&&(j[q]=M[q]);if(M!=null&&ph)for(var q of ph(M))R.indexOf(q)<0&&ny.call(M,q)&&(j[q]=M[q]);return j})(d,["rangeJSON"]),w=c.getRoot(h.root),C=e.createPositionFromPath(w,h.path,h.stickiness),E=e.createPositionFromPath(w,g.path,g.stickiness),D=e.createRange(C,E);e.addMarker(o,ag({range:D},k))})}_restoreCollaborationData(){const e=JSON.parse(this._data.commentThreads),t=JSON.parse(this._data.suggestions);e.forEach(o=>{const a=this.editor.config.get("collaboration.channelId"),c=this.editor.plugins.get("CommentsRepository");c.hasCommentThread(o.threadId)&&c.getCommentThread(o.threadId).remove(),c.addCommentThread(ag({channelId:a},o))}),t.forEach(o=>{const a=this.editor.plugins.get("TrackChangesEditing");a.hasSuggestion(o.id)?a.getSuggestion(o.id).attributes=o.attributes:a.addSuggestionData(o)})}}const ld=Symbol("MainQueueId");class YL{constructor(){this._onEmptyCallbacks=[],this._queues=new Map,this._activeActions=0}onEmpty(e){this._onEmptyCallbacks.push(e)}enqueue(e,t){const o=e===ld;this._activeActions++,this._queues.get(e)||this._queues.set(e,Promise.resolve());const a=(o?Promise.all(this._queues.values()):Promise.all([this._queues.get(ld),this._queues.get(e)])).then(t),c=a.catch(()=>{});return this._queues.set(e,c),a.finally(()=>{this._activeActions--,this._queues.get(e)===c&&this._activeActions===0&&this._onEmptyCallbacks.forEach(d=>d())})}}function ry(s){return Array.isArray(s)?s:[s]}class fh extends Hm(MP){constructor(e,t={}){if(!mh(e)&&t.initialData!==void 0)throw new P("editor-create-initial-data",null);super(t),this.config.define("menuBar.isVisible",!1),this.config.get("initialData")===void 0&&this.config.set("initialData",function(d){return mh(d)?(h=d,h instanceof HTMLTextAreaElement?h.value:h.innerHTML):d;var h}(e)),mh(e)&&(this.sourceElement=e),this.model.document.createRoot();const o=!this.config.get("toolbar.shouldNotGroupWhenFull"),a=this.config.get("menuBar"),c=new HL(this.locale,this.editing.view,{shouldToolbarGroupWhenFull:o,useMenuBar:a.isVisible});this.ui=new $L(this,c),function(d){if(!tn(d.updateSourceElement))throw new P("attachtoform-missing-elementapi-interface",d);const h=d.sourceElement;if(function(g){return!!g&&g.tagName.toLowerCase()==="textarea"}(h)&&h.form){let g;const k=h.form,w=()=>d.updateSourceElement();tn(k.submit)&&(g=k.submit,k.submit=()=>{w(),g.apply(k)}),k.addEventListener("submit",w),d.on("destroy",()=>{k.removeEventListener("submit",w),g&&(k.submit=g)})}}(this)}destroy(){return this.sourceElement&&this.updateSourceElement(),this.ui.destroy(),super.destroy()}static create(e,t={}){return new Promise(o=>{const a=new this(e,t);o(a.initPlugins().then(()=>a.ui.init(mh(e)?e:null)).then(()=>a.data.init(a.config.get("initialData"))).then(()=>a.fire("ready")).then(()=>a))})}}function mh(s){return Fs(s)}fh.Context=bv,fh.EditorWatchdog=iy,fh.ContextWatchdog=class extends XC{constructor(s,e={}){super(e),this._watchdogs=new Map,this._context=null,this._contextProps=new Set,this._actionQueues=new YL,this._watchdogConfig=e,this._creator=t=>s.create(t),this._destructor=t=>t.destroy(),this._actionQueues.onEmpty(()=>{this.state==="initializing"&&(this.state="ready",this._fire("stateChange"))})}setCreator(s){this._creator=s}setDestructor(s){this._destructor=s}get context(){return this._context}create(s={}){return this._actionQueues.enqueue(ld,()=>(this._contextConfig=s,this._create()))}getItem(s){return this._getWatchdog(s)._item}getItemState(s){return this._getWatchdog(s).state}add(s){const e=ry(s);return Promise.all(e.map(t=>this._actionQueues.enqueue(t.id,()=>{if(this.state==="destroyed")throw new Error("Cannot add items to destroyed watchdog.");if(!this._context)throw new Error("Context was not created yet. You should call the `ContextWatchdog#create()` method first.");let o;if(this._watchdogs.has(t.id))throw new Error(`Item with the given id is already added: '${t.id}'.`);if(t.type==="editor")return o=new iy(null,this._watchdogConfig),o.setCreator(t.creator),o._setExcludedProperties(this._contextProps),t.destructor&&o.setDestructor(t.destructor),this._watchdogs.set(t.id,o),o.on("error",(a,{error:c,causesRestart:d})=>{this._fire("itemError",{itemId:t.id,error:c}),d&&this._actionQueues.enqueue(t.id,()=>new Promise(h=>{const g=()=>{o.off("restart",g),this._fire("itemRestart",{itemId:t.id}),h()};o.on("restart",g)}))}),o.create(t.sourceElementOrData,t.config,this._context);throw new Error(`Not supported item type: '${t.type}'.`)})))}remove(s){const e=ry(s);return Promise.all(e.map(t=>this._actionQueues.enqueue(t,()=>{const o=this._getWatchdog(t);return this._watchdogs.delete(t),o.destroy()})))}destroy(){return this._actionQueues.enqueue(ld,()=>(this.state="destroyed",this._fire("stateChange"),super.destroy(),this._destroy()))}_restart(){return this._actionQueues.enqueue(ld,()=>(this.state="initializing",this._fire("stateChange"),this._destroy().catch(s=>{console.error("An error happened during destroying the context or items.",s)}).then(()=>this._create()).then(()=>this._fire("restart"))))}_create(){return Promise.resolve().then(()=>(this._startErrorHandling(),this._creator(this._contextConfig))).then(s=>(this._context=s,this._contextProps=sg(this._context),Promise.all(Array.from(this._watchdogs.values()).map(e=>(e._setExcludedProperties(this._contextProps),e.create(void 0,void 0,this._context))))))}_destroy(){return Promise.resolve().then(()=>{this._stopErrorHandling();const s=this._context;return this._context=null,this._contextProps=new Set,Promise.all(Array.from(this._watchdogs.values()).map(e=>e.destroy())).then(()=>this._destructor(s))})}_getWatchdog(s){const e=this._watchdogs.get(s);if(!e)throw new Error(`Item with the given id was not registered: ${s}.`);return e}_isErrorComingFromThisItem(s){for(const e of this._watchdogs.values())if(e._isErrorComingFromThisItem(s))return!1;return ey(this._context,s.context)}};class cd extends qr{constructor(e){super(e),this.domEventType=["paste","copy","cut","drop","dragover","dragstart","dragend","dragenter","dragleave"];const t=this.document;function o(a){return(c,d)=>{d.preventDefault();const h=d.dropRange?[d.dropRange]:null,g=new N(t,a);t.fire(g,{dataTransfer:d.dataTransfer,method:c.name,targetRanges:h,target:d.target,domEvent:d.domEvent}),g.stop.called&&d.stopPropagation()}}this.listenTo(t,"paste",o("clipboardInput"),{priority:"low"}),this.listenTo(t,"drop",o("clipboardInput"),{priority:"low"}),this.listenTo(t,"dragover",o("dragging"),{priority:"low"})}onDomEvent(e){const t="clipboardData"in e?e.clipboardData:e.dataTransfer,o=e.type=="drop"||e.type=="paste",a={dataTransfer:new t0(t,{cacheFiles:o})};e.type!="drop"&&e.type!="dragover"||(a.dropRange=function(c,d){const h=d.target.ownerDocument,g=d.clientX,k=d.clientY;let w;return h.caretRangeFromPoint&&h.caretRangeFromPoint(g,k)?w=h.caretRangeFromPoint(g,k):d.rangeParent&&(w=h.createRange(),w.setStart(d.rangeParent,d.rangeOffset),w.collapse(!0)),w?c.domConverter.domRangeToView(w):null}(this.view,e)),this.fire(e.type,e,a)}}const sy=["figcaption","li"],ay=["ol","ul"];function ly(s){if(s.is("$text")||s.is("$textProxy"))return s.data;if(s.is("element","img")&&s.hasAttribute("alt"))return s.getAttribute("alt");if(s.is("element","br"))return`
`;let e="",t=null;for(const o of s.getChildren())e+=QL(o,t)+ly(o),t=o;return e}function QL(s,e){return e?s.is("element","li")&&!s.isEmpty&&s.getChild(0).is("containerElement")||ay.includes(s.name)&&ay.includes(e.name)?`

`:s.is("containerElement")||e.is("containerElement")?sy.includes(s.name)||sy.includes(e.name)?`
`:`

 * @license Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md.
  * Bootstrap v5.3.1 (https://getbootstrap.com/)
  * Copyright 2011-2023 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */const ts=new Map,Bb={set(i,n,r){ts.has(i)||ts.set(i,new Map);const l=ts.get(i);if(!l.has(n)&&l.size!==0){console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(l.keys())[0]}.`);return}l.set(n,r)},get(i,n){return ts.has(i)&&ts.get(i).get(n)||null},remove(i,n){if(!ts.has(i))return;const r=ts.get(i);r.delete(n),r.size===0&&ts.delete(i)}},cge=1e6,dge=1e3,zk="transitionend",KM=i=>(i&&window.CSS&&window.CSS.escape&&(i=i.replace(/#([^\s"#']+)/g,(n,r)=>`#${CSS.escape(r)}`)),i),uge=i=>i==null?`${i}`:Object.prototype.toString.call(i).match(/\s([a-z]+)/i)[1].toLowerCase(),hge=i=>{do i+=Math.floor(Math.random()*cge);while(document.getElementById(i));return i},pge=i=>{if(!i)return 0;let{transitionDuration:n,transitionDelay:r}=window.getComputedStyle(i);const l=Number.parseFloat(n),u=Number.parseFloat(r);return!l&&!u?0:(n=n.split(",")[0],r=r.split(",")[0],(Number.parseFloat(n)+Number.parseFloat(r))*dge)},YM=i=>{i.dispatchEvent(new Event(zk))},Sr=i=>!i||typeof i!="object"?!1:(typeof i.jquery<"u"&&(i=i[0]),typeof i.nodeType<"u"),bs=i=>Sr(i)?i.jquery?i[0]:i:typeof i=="string"&&i.length>0?document.querySelector(KM(i)):null,hc=i=>{if(!Sr(i)||i.getClientRects().length===0)return!1;const n=getComputedStyle(i).getPropertyValue("visibility")==="visible",r=i.closest("details:not([open])");if(!r)return n;if(r!==i){const l=i.closest("summary");if(l&&l.parentNode!==r||l===null)return!1}return n},ks=i=>!i||i.nodeType!==Node.ELEMENT_NODE||i.classList.contains("disabled")?!0:typeof i.disabled<"u"?i.disabled:i.hasAttribute("disabled")&&i.getAttribute("disabled")!=="false",QM=i=>{if(!document.documentElement.attachShadow)return null;if(typeof i.getRootNode=="function"){const n=i.getRootNode();return n instanceof ShadowRoot?n:null}return i instanceof ShadowRoot?i:i.parentNode?QM(i.parentNode):null},nf=()=>{},wu=i=>{i.offsetHeight},ZM=()=>window.jQuery&&!document.body.hasAttribute("data-bs-no-jquery")?window.jQuery:null,Pb=[],fge=i=>{document.readyState==="loading"?(Pb.length||document.addEventListener("DOMContentLoaded",()=>{for(const n of Pb)n()}),Pb.push(i)):i()},li=()=>document.documentElement.dir==="rtl",hi=i=>{fge(()=>{const n=ZM();if(n){const r=i.NAME,l=n.fn[r];n.fn[r]=i.jQueryInterface,n.fn[r].Constructor=i,n.fn[r].noConflict=()=>(n.fn[r]=l,i.jQueryInterface)}})},Co=(i,n=[],r=i)=>typeof i=="function"?i(...n):r,JM=(i,n,r=!0)=>{if(!r){Co(i);return}const u=pge(n)+5;let p=!1;const f=({target:b})=>{b===n&&(p=!0,n.removeEventListener(zk,f),Co(i))};n.addEventListener(zk,f),setTimeout(()=>{p||YM(n)},u)},X_=(i,n,r,l)=>{const u=i.length;let p=i.indexOf(n);return p===-1?!r&&l?i[u-1]:i[0]:(p+=r?1:-1,l&&(p=(p+u)%u),i[Math.max(0,Math.min(p,u-1))])},mge=/[^.]*(?=\..*)\.|.*/,gge=/\..*/,bge=/::\d+$/,Nb={};let MT=1;const XM={mouseenter:"mouseover",mouseleave:"mouseout"},kge=new Set(["click","dblclick","mouseup","mousedown","contextmenu","mousewheel","DOMMouseScroll","mouseover","mouseout","mousemove","selectstart","selectend","keydown","keypress","keyup","orientationchange","touchstart","touchmove","touchend","touchcancel","pointerdown","pointermove","pointerup","pointerleave","pointercancel","gesturestart","gesturechange","gestureend","focus","blur","change","reset","select","submit","focusin","focusout","load","unload","beforeunload","resize","move","DOMContentLoaded","readystatechange","error","abort","scroll"]);function e4(i,n){return n&&`${n}::${MT++}`||i.uidEvent||MT++}function t4(i){const n=e4(i);return i.uidEvent=n,Nb[n]=Nb[n]||{},Nb[n]}function _ge(i,n){return function r(l){return ew(l,{delegateTarget:i}),r.oneOff&&xe.off(i,l.type,n),n.apply(i,[l])}}function wge(i,n,r){return function l(u){const p=i.querySelectorAll(n);for(let{target:f}=u;f&&f!==this;f=f.parentNode)for(const b of p)if(b===f)return ew(u,{delegateTarget:f}),l.oneOff&&xe.off(i,u.type,n,r),r.apply(f,[u])}}function n4(i,n,r=null){return Object.values(i).find(l=>l.callable===n&&l.delegationSelector===r)}function o4(i,n,r){const l=typeof n=="string",u=l?r:n||r;let p=i4(i);return kge.has(p)||(p=i),[l,u,p]}function OT(i,n,r,l,u){if(typeof n!="string"||!i)return;let[p,f,b]=o4(n,r,l);n in XM&&(f=(T=>function(I){if(!I.relatedTarget||I.relatedTarget!==I.delegateTarget&&!I.delegateTarget.contains(I.relatedTarget))return T.call(this,I)})(f));const m=t4(i),v=m[b]||(m[b]={}),A=n4(v,f,p?r:null);if(A){A.oneOff=A.oneOff&&u;return}const x=e4(f,n.replace(mge,"")),y=p?wge(i,r,f):_ge(i,f);y.delegationSelector=p?r:null,y.callable=f,y.oneOff=u,y.uidEvent=x,v[x]=y,i.addEventListener(b,y,p)}function jk(i,n,r,l,u){const p=n4(n[r],l,u);p&&(i.removeEventListener(r,p,!!u),delete n[r][p.uidEvent])}function vge(i,n,r,l){const u=n[r]||{};for(const[p,f]of Object.entries(u))p.includes(l)&&jk(i,n,r,f.callable,f.delegationSelector)}function i4(i){return i=i.replace(gge,""),XM[i]||i}const xe={on(i,n,r,l){OT(i,n,r,l,!1)},one(i,n,r,l){OT(i,n,r,l,!0)},off(i,n,r,l){if(typeof n!="string"||!i)return;const[u,p,f]=o4(n,r,l),b=f!==n,m=t4(i),v=m[f]||{},A=n.startsWith(".");if(typeof p<"u"){if(!Object.keys(v).length)return;jk(i,m,f,p,u?r:null);return}if(A)for(const x of Object.keys(m))vge(i,m,x,n.slice(1));for(const[x,y]of Object.entries(v)){const S=x.replace(bge,"");(!b||n.includes(S))&&jk(i,m,f,y.callable,y.delegationSelector)}},trigger(i,n,r){if(typeof n!="string"||!i)return null;const l=ZM(),u=i4(n),p=n!==u;let f=null,b=!0,m=!0,v=!1;p&&l&&(f=l.Event(n,r),l(i).trigger(f),b=!f.isPropagationStopped(),m=!f.isImmediatePropagationStopped(),v=f.isDefaultPrevented());const A=ew(new Event(n,{bubbles:b,cancelable:!0}),r);return v&&A.preventDefault(),m&&i.dispatchEvent(A),A.defaultPrevented&&f&&f.preventDefault(),A}};function ew(i,n={}){for(const[r,l]of Object.entries(n))try{i[r]=l}catch{Object.defineProperty(i,r,{configurable:!0,get(){return l}})}return i}function BT(i){if(i==="true")return!0;if(i==="false")return!1;if(i===Number(i).toString())return Number(i);if(i===""||i==="null")return null;if(typeof i!="string")return i;try{return JSON.parse(decodeURIComponent(i))}catch{return i}}function Lb(i){return i.replace(/[A-Z]/g,n=>`-${n.toLowerCase()}`)}const Tr={setDataAttribute(i,n,r){i.setAttribute(`data-bs-${Lb(n)}`,r)},removeDataAttribute(i,n){i.removeAttribute(`data-bs-${Lb(n)}`)},getDataAttributes(i){if(!i)return{};const n={},r=Object.keys(i.dataset).filter(l=>l.startsWith("bs")&&!l.startsWith("bsConfig"));for(const l of r){let u=l.replace(/^bs/,"");u=u.charAt(0).toLowerCase()+u.slice(1,u.length),n[u]=BT(i.dataset[l])}return n},getDataAttribute(i,n){return BT(i.getAttribute(`data-bs-${Lb(n)}`))}};class vu{static get Default(){return{}}static get DefaultType(){return{}}static get NAME(){throw new Error('You have to implement the static method "NAME", for each component!')}_getConfig(n){return n=this._mergeConfigObj(n),n=this._configAfterMerge(n),this._typeCheckConfig(n),n}_configAfterMerge(n){return n}_mergeConfigObj(n,r){const l=Sr(r)?Tr.getDataAttribute(r,"config"):{};return{...this.constructor.Default,...typeof l=="object"?l:{},...Sr(r)?Tr.getDataAttributes(r):{},...typeof n=="object"?n:{}}}_typeCheckConfig(n,r=this.constructor.DefaultType){for(const[l,u]of Object.entries(r)){const p=n[l],f=Sr(p)?"element":uge(p);if(!new RegExp(u).test(f))throw new TypeError(`${this.constructor.NAME.toUpperCase()}: Option "${l}" provided type "${f}" but expected type "${u}".`)}}}const Age="5.3.1";class Di extends vu{constructor(n,r){super(),n=bs(n),n&&(this._element=n,this._config=this._getConfig(r),Bb.set(this._element,this.constructor.DATA_KEY,this))}dispose(){Bb.remove(this._element,this.constructor.DATA_KEY),xe.off(this._element,this.constructor.EVENT_KEY);for(const n of Object.getOwnPropertyNames(this))this[n]=null}_queueCallback(n,r,l=!0){JM(n,r,l)}_getConfig(n){return n=this._mergeConfigObj(n,this._element),n=this._configAfterMerge(n),this._typeCheckConfig(n),n}static getInstance(n){return Bb.get(bs(n),this.DATA_KEY)}static getOrCreateInstance(n,r={}){return this.getInstance(n)||new this(n,typeof r=="object"?r:null)}static get VERSION(){return Age}static get DATA_KEY(){return`bs.${this.NAME}`}static get EVENT_KEY(){return`.${this.DATA_KEY}`}static eventName(n){return`${n}${this.EVENT_KEY}`}}const Rb=i=>{let n=i.getAttribute("data-bs-target");if(!n||n==="#"){let r=i.getAttribute("href");if(!r||!r.includes("#")&&!r.startsWith("."))return null;r.includes("#")&&!r.startsWith("#")&&(r=`#${r.split("#")[1]}`),n=r&&r!=="#"?r.trim():null}return KM(n)},Ke={find(i,n=document.documentElement){return[].concat(...Element.prototype.querySelectorAll.call(n,i))},findOne(i,n=document.documentElement){return Element.prototype.querySelector.call(n,i)},children(i,n){return[].concat(...i.children).filter(r=>r.matches(n))},parents(i,n){const r=[];let l=i.parentNode.closest(n);for(;l;)r.push(l),l=l.parentNode.closest(n);return r},prev(i,n){let r=i.previousElementSibling;for(;r;){if(r.matches(n))return[r];r=r.previousElementSibling}return[]},next(i,n){let r=i.nextElementSibling;for(;r;){if(r.matches(n))return[r];r=r.nextElementSibling}return[]},focusableChildren(i){const n=["a","button","input","textarea","select","details","[tabindex]",'[contenteditable="true"]'].map(r=>`${r}:not([tabindex^="-"])`).join(",");return this.find(n,i).filter(r=>!ks(r)&&hc(r))},getSelectorFromElement(i){const n=Rb(i);return n&&Ke.findOne(n)?n:null},getElementFromSelector(i){const n=Rb(i);return n?Ke.findOne(n):null},getMultipleElementsFromSelector(i){const n=Rb(i);return n?Ke.find(n):[]}},Rf=(i,n="hide")=>{const r=`click.dismiss${i.EVENT_KEY}`,l=i.NAME;xe.on(document,r,`[data-bs-dismiss="${l}"]`,function(u){if(["A","AREA"].includes(this.tagName)&&u.preventDefault(),ks(this))return;const p=Ke.getElementFromSelector(this)||this.closest(`.${l}`);i.getOrCreateInstance(p)[n]()})},Cge="alert",yge="bs.alert",r4=`.${yge}`,xge=`close${r4}`,Ege=`closed${r4}`,Sge="fade",Tge="show";class Ff extends Di{static get NAME(){return Cge}close(){if(xe.trigger(this._element,xge).defaultPrevented)return;this._element.classList.remove(Tge);const r=this._element.classList.contains(Sge);this._queueCallback(()=>this._destroyElement(),this._element,r)}_destroyElement(){this._element.remove(),xe.trigger(this._element,Ege),this.dispose()}static jQueryInterface(n){return this.each(function(){const r=Ff.getOrCreateInstance(this);if(typeof n=="string"){if(r[n]===void 0||n.startsWith("_")||n==="constructor")throw new TypeError(`No method named "${n}"`);r[n](this)}})}}Rf(Ff,"close");hi(Ff);const Dge="button",Ige="bs.button",Mge=`.${Ige}`,Oge=".data-api",Bge="active",PT='[data-bs-toggle="button"]',Pge=`click${Mge}${Oge}`;class zf extends Di{static get NAME(){return Dge}toggle(){this._element.setAttribute("aria-pressed",this._element.classList.toggle(Bge))}static jQueryInterface(n){return this.each(function(){const r=zf.getOrCreateInstance(this);n==="toggle"&&r[n]()})}}xe.on(document,Pge,PT,i=>{i.preventDefault();const n=i.target.closest(PT);zf.getOrCreateInstance(n).toggle()});hi(zf);const Nge="swipe",pc=".bs.swipe",Lge=`touchstart${pc}`,Rge=`touchmove${pc}`,Fge=`touchend${pc}`,zge=`pointerdown${pc}`,jge=`pointerup${pc}`,$ge="touch",Vge="pen",Hge="pointer-event",Uge=40,qge={endCallback:null,leftCallback:null,rightCallback:null},Gge={endCallback:"(function|null)",leftCallback:"(function|null)",rightCallback:"(function|null)"};class of extends vu{constructor(n,r){super(),this._element=n,!(!n||!of.isSupported())&&(this._config=this._getConfig(r),this._deltaX=0,this._supportPointerEvents=!!window.PointerEvent,this._initEvents())}static get Default(){return qge}static get DefaultType(){return Gge}static get NAME(){return Nge}dispose(){xe.off(this._element,pc)}_start(n){if(!this._supportPointerEvents){this._deltaX=n.touches[0].clientX;return}this._eventIsPointerPenTouch(n)&&(this._deltaX=n.clientX)}_end(n){this._eventIsPointerPenTouch(n)&&(this._deltaX=n.clientX-this._deltaX),this._handleSwipe(),Co(this._config.endCallback)}_move(n){this._deltaX=n.touches&&n.touches.length>1?0:n.touches[0].clientX-this._deltaX}_handleSwipe(){const n=Math.abs(this._deltaX);if(n<=Uge)return;const r=n/this._deltaX;this._deltaX=0,r&&Co(r>0?this._config.rightCallback:this._config.leftCallback)}_initEvents(){this._supportPointerEvents?(xe.on(this._element,zge,n=>this._start(n)),xe.on(this._element,jge,n=>this._end(n)),this._element.classList.add(Hge)):(xe.on(this._element,Lge,n=>this._start(n)),xe.on(this._element,Rge,n=>this._move(n)),xe.on(this._element,Fge,n=>this._end(n)))}_eventIsPointerPenTouch(n){return this._supportPointerEvents&&(n.pointerType===Vge||n.pointerType===$ge)}static isSupported(){return"ontouchstart"in document.documentElement||navigator.maxTouchPoints>0}}const Wge="carousel",Kge="bs.carousel",ys=`.${Kge}`,s4=".data-api",Yge="ArrowLeft",Qge="ArrowRight",Zge=500,Dd="next",wl="prev",xl="left",xp="right",Jge=`slide${ys}`,Fb=`slid${ys}`,Xge=`keydown${ys}`,ebe=`mouseenter${ys}`,tbe=`mouseleave${ys}`,nbe=`dragstart${ys}`,obe=`load${ys}${s4}`,ibe=`click${ys}${s4}`,a4="carousel",rp="active",rbe="slide",sbe="carousel-item-end",abe="carousel-item-start",lbe="carousel-item-next",cbe="carousel-item-prev",l4=".active",c4=".carousel-item",dbe=l4+c4,ube=".carousel-item img",hbe=".carousel-indicators",pbe="[data-bs-slide], [data-bs-slide-to]",fbe='[data-bs-ride="carousel"]',mbe={[Yge]:xp,[Qge]:xl},gbe={interval:5e3,keyboard:!0,pause:"hover",ride:!1,touch:!0,wrap:!0},bbe={interval:"(number|boolean)",keyboard:"boolean",pause:"(string|boolean)",ride:"(boolean|string)",touch:"boolean",wrap:"boolean"};class Au extends Di{constructor(n,r){super(n,r),this._interval=null,this._activeElement=null,this._isSliding=!1,this.touchTimeout=null,this._swipeHelper=null,this._indicatorsElement=Ke.findOne(hbe,this._element),this._addEventListeners(),this._config.ride===a4&&this.cycle()}static get Default(){return gbe}static get DefaultType(){return bbe}static get NAME(){return Wge}next(){this._slide(Dd)}nextWhenVisible(){!document.hidden&&hc(this._element)&&this.next()}prev(){this._slide(wl)}pause(){this._isSliding&&YM(this._element),this._clearInterval()}cycle(){this._clearInterval(),this._updateInterval(),this._interval=setInterval(()=>this.nextWhenVisible(),this._config.interval)}_maybeEnableCycle(){if(this._config.ride){if(this._isSliding){xe.one(this._element,Fb,()=>this.cycle());return}this.cycle()}}to(n){const r=this._getItems();if(n>r.length-1||n<0)return;if(this._isSliding){xe.one(this._element,Fb,()=>this.to(n));return}const l=this._getItemIndex(this._getActive());if(l===n)return;const u=n>l?Dd:wl;this._slide(u,r[n])}dispose(){this._swipeHelper&&this._swipeHelper.dispose(),super.dispose()}_configAfterMerge(n){return n.defaultInterval=n.interval,n}_addEventListeners(){this._config.keyboard&&xe.on(this._element,Xge,n=>this._keydown(n)),this._config.pause==="hover"&&(xe.on(this._element,ebe,()=>this.pause()),xe.on(this._element,tbe,()=>this._maybeEnableCycle())),this._config.touch&&of.isSupported()&&this._addTouchEventListeners()}_addTouchEventListeners(){for(const l of Ke.find(ube,this._element))xe.on(l,nbe,u=>u.preventDefault());const r={leftCallback:()=>this._slide(this._directionToOrder(xl)),rightCallback:()=>this._slide(this._directionToOrder(xp)),endCallback:()=>{this._config.pause==="hover"&&(this.pause(),this.touchTimeout&&clearTimeout(this.touchTimeout),this.touchTimeout=setTimeout(()=>this._maybeEnableCycle(),Zge+this._config.interval))}};this._swipeHelper=new of(this._element,r)}_keydown(n){if(/input|textarea/i.test(n.target.tagName))return;const r=mbe[n.key];r&&(n.preventDefault(),this._slide(this._directionToOrder(r)))}_getItemIndex(n){return this._getItems().indexOf(n)}_setActiveIndicatorElement(n){if(!this._indicatorsElement)return;const r=Ke.findOne(l4,this._indicatorsElement);r.classList.remove(rp),r.removeAttribute("aria-current");const l=Ke.findOne(`[data-bs-slide-to="${n}"]`,this._indicatorsElement);l&&(l.classList.add(rp),l.setAttribute("aria-current","true"))}_updateInterval(){const n=this._activeElement||this._getActive();if(!n)return;const r=Number.parseInt(n.getAttribute("data-bs-interval"),10);this._config.interval=r||this._config.defaultInterval}_slide(n,r=null){if(this._isSliding)return;const l=this._getActive(),u=n===Dd,p=r||X_(this._getItems(),l,u,this._config.wrap);if(p===l)return;const f=this._getItemIndex(p),b=S=>xe.trigger(this._element,S,{relatedTarget:p,direction:this._orderToDirection(n),from:this._getItemIndex(l),to:f});if(b(Jge).defaultPrevented||!l||!p)return;const v=!!this._interval;this.pause(),this._isSliding=!0,this._setActiveIndicatorElement(f),this._activeElement=p;const A=u?abe:sbe,x=u?lbe:cbe;p.classList.add(x),wu(p),l.classList.add(A),p.classList.add(A);const y=()=>{p.classList.remove(A,x),p.classList.add(rp),l.classList.remove(rp,x,A),this._isSliding=!1,b(Fb)};this._queueCallback(y,l,this._isAnimated()),v&&this.cycle()}_isAnimated(){return this._element.classList.contains(rbe)}_getActive(){return Ke.findOne(dbe,this._element)}_getItems(){return Ke.find(c4,this._element)}_clearInterval(){this._interval&&(clearInterval(this._interval),this._interval=null)}_directionToOrder(n){return li()?n===xl?wl:Dd:n===xl?Dd:wl}_orderToDirection(n){return li()?n===wl?xl:xp:n===wl?xp:xl}static jQueryInterface(n){return this.each(function(){const r=Au.getOrCreateInstance(this,n);if(typeof n=="number"){r.to(n);return}if(typeof n=="string"){if(r[n]===void 0||n.startsWith("_")||n==="constructor")throw new TypeError(`No method named "${n}"`);r[n]()}})}}xe.on(document,ibe,pbe,function(i){const n=Ke.getElementFromSelector(this);if(!n||!n.classList.contains(a4))return;i.preventDefault();const r=Au.getOrCreateInstance(n),l=this.getAttribute("data-bs-slide-to");if(l){r.to(l),r._maybeEnableCycle();return}if(Tr.getDataAttribute(this,"slide")==="next"){r.next(),r._maybeEnableCycle();return}r.prev(),r._maybeEnableCycle()});xe.on(window,obe,()=>{const i=Ke.find(fbe);for(const n of i)Au.getOrCreateInstance(n)});hi(Au);const kbe="collapse",_be="bs.collapse",Cu=`.${_be}`,wbe=".data-api",vbe=`show${Cu}`,Abe=`shown${Cu}`,Cbe=`hide${Cu}`,ybe=`hidden${Cu}`,xbe=`click${Cu}${wbe}`,zb="show",Tl="collapse",sp="collapsing",Ebe="collapsed",Sbe=`:scope .${Tl} .${Tl}`,Tbe="collapse-horizontal",Dbe="width",Ibe="height",Mbe=".collapse.show, .collapse.collapsing",$k='[data-bs-toggle="collapse"]',Obe={parent:null,toggle:!0},Bbe={parent:"(null|element)",toggle:"boolean"};class au extends Di{constructor(n,r){super(n,r),this._isTransitioning=!1,this._triggerArray=[];const l=Ke.find($k);for(const u of l){const p=Ke.getSelectorFromElement(u),f=Ke.find(p).filter(b=>b===this._element);p!==null&&f.length&&this._triggerArray.push(u)}this._initializeChildren(),this._config.parent||this._addAriaAndCollapsedClass(this._triggerArray,this._isShown()),this._config.toggle&&this.toggle()}static get Default(){return Obe}static get DefaultType(){return Bbe}static get NAME(){return kbe}toggle(){this._isShown()?this.hide():this.show()}show(){if(this._isTransitioning||this._isShown())return;let n=[];if(this._config.parent&&(n=this._getFirstLevelChildren(Mbe).filter(b=>b!==this._element).map(b=>au.getOrCreateInstance(b,{toggle:!1}))),n.length&&n[0]._isTransitioning||xe.trigger(this._element,vbe).defaultPrevented)return;for(const b of n)b.hide();const l=this._getDimension();this._element.classList.remove(Tl),this._element.classList.add(sp),this._element.style[l]=0,this._addAriaAndCollapsedClass(this._triggerArray,!0),this._isTransitioning=!0;const u=()=>{this._isTransitioning=!1,this._element.classList.remove(sp),this._element.classList.add(Tl,zb),this._element.style[l]="",xe.trigger(this._element,Abe)},f=`scroll${l[0].toUpperCase()+l.slice(1)}`;this._queueCallback(u,this._element,!0),this._element.style[l]=`${this._element[f]}px`}hide(){if(this._isTransitioning||!this._isShown()||xe.trigger(this._element,Cbe).defaultPrevented)return;const r=this._getDimension();this._element.style[r]=`${this._element.getBoundingClientRect()[r]}px`,wu(this._element),this._element.classList.add(sp),this._element.classList.remove(Tl,zb);for(const u of this._triggerArray){const p=Ke.getElementFromSelector(u);p&&!this._isShown(p)&&this._addAriaAndCollapsedClass([u],!1)}this._isTransitioning=!0;const l=()=>{this._isTransitioning=!1,this._element.classList.remove(sp),this._element.classList.add(Tl),xe.trigger(this._element,ybe)};this._element.style[r]="",this._queueCallback(l,this._element,!0)}_isShown(n=this._element){return n.classList.contains(zb)}_configAfterMerge(n){return n.toggle=!!n.toggle,n.parent=bs(n.parent),n}_getDimension(){return this._element.classList.contains(Tbe)?Dbe:Ibe}_initializeChildren(){if(!this._config.parent)return;const n=this._getFirstLevelChildren($k);for(const r of n){const l=Ke.getElementFromSelector(r);l&&this._addAriaAndCollapsedClass([r],this._isShown(l))}}_getFirstLevelChildren(n){const r=Ke.find(Sbe,this._config.parent);return Ke.find(n,this._config.parent).filter(l=>!r.includes(l))}_addAriaAndCollapsedClass(n,r){if(n.length)for(const l of n)l.classList.toggle(Ebe,!r),l.setAttribute("aria-expanded",r)}static jQueryInterface(n){const r={};return typeof n=="string"&&/show|hide/.test(n)&&(r.toggle=!1),this.each(function(){const l=au.getOrCreateInstance(this,r);if(typeof n=="string"){if(typeof l[n]>"u")throw new TypeError(`No method named "${n}"`);l[n]()}})}}xe.on(document,xbe,$k,function(i){(i.target.tagName==="A"||i.delegateTarget&&i.delegateTarget.tagName==="A")&&i.preventDefault();for(const n of Ke.getMultipleElementsFromSelector(this))au.getOrCreateInstance(n,{toggle:!1}).toggle()});hi(au);const NT="dropdown",Pbe="bs.dropdown",La=`.${Pbe}`,tw=".data-api",Nbe="Escape",LT="Tab",Lbe="ArrowUp",RT="ArrowDown",Rbe=2,Fbe=`hide${La}`,zbe=`hidden${La}`,jbe=`show${La}`,$be=`shown${La}`,d4=`click${La}${tw}`,u4=`keydown${La}${tw}`,Vbe=`keyup${La}${tw}`,El="show",Hbe="dropup",Ube="dropend",qbe="dropstart",Gbe="dropup-center",Wbe="dropdown-center",da='[data-bs-toggle="dropdown"]:not(.disabled):not(:disabled)',Kbe=`${da}.${El}`,Ep=".dropdown-menu",Ybe=".navbar",Qbe=".navbar-nav",Zbe=".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",Jbe=li()?"top-end":"top-start",Xbe=li()?"top-start":"top-end",eke=li()?"bottom-end":"bottom-start",tke=li()?"bottom-start":"bottom-end",nke=li()?"left-start":"right-start",oke=li()?"right-start":"left-start",ike="top",rke="bottom",ske={autoClose:!0,boundary:"clippingParents",display:"dynamic",offset:[0,2],popperConfig:null,reference:"toggle"},ake={autoClose:"(boolean|string)",boundary:"(string|element)",display:"string",offset:"(array|string|function)",popperConfig:"(null|object|function)",reference:"(string|element|object)"};class Si extends Di{constructor(n,r){super(n,r),this._popper=null,this._parent=this._element.parentNode,this._menu=Ke.next(this._element,Ep)[0]||Ke.prev(this._element,Ep)[0]||Ke.findOne(Ep,this._parent),this._inNavbar=this._detectNavbar()}static get Default(){return ske}static get DefaultType(){return ake}static get NAME(){return NT}toggle(){return this._isShown()?this.hide():this.show()}show(){if(ks(this._element)||this._isShown())return;const n={relatedTarget:this._element};if(!xe.trigger(this._element,jbe,n).defaultPrevented){if(this._createPopper(),"ontouchstart"in document.documentElement&&!this._parent.closest(Qbe))for(const l of[].concat(...document.body.children))xe.on(l,"mouseover",nf);this._element.focus(),this._element.setAttribute("aria-expanded",!0),this._menu.classList.add(El),this._element.classList.add(El),xe.trigger(this._element,$be,n)}}hide(){if(ks(this._element)||!this._isShown())return;const n={relatedTarget:this._element};this._completeHide(n)}dispose(){this._popper&&this._popper.destroy(),super.dispose()}update(){this._inNavbar=this._detectNavbar(),this._popper&&this._popper.update()}_completeHide(n){if(!xe.trigger(this._element,Fbe,n).defaultPrevented){if("ontouchstart"in document.documentElement)for(const l of[].concat(...document.body.children))xe.off(l,"mouseover",nf);this._popper&&this._popper.destroy(),this._menu.classList.remove(El),this._element.classList.remove(El),this._element.setAttribute("aria-expanded","false"),Tr.removeDataAttribute(this._menu,"popper"),xe.trigger(this._element,zbe,n)}}_getConfig(n){if(n=super._getConfig(n),typeof n.reference=="object"&&!Sr(n.reference)&&typeof n.reference.getBoundingClientRect!="function")throw new TypeError(`${NT.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`);return n}_createPopper(){if(typeof WM>"u")throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)");let n=this._element;this._config.reference==="parent"?n=this._parent:Sr(this._config.reference)?n=bs(this._config.reference):typeof this._config.reference=="object"&&(n=this._config.reference);const r=this._getPopperConfig();this._popper=J_(n,this._menu,r)}_isShown(){return this._menu.classList.contains(El)}_getPlacement(){const n=this._parent;if(n.classList.contains(Ube))return nke;if(n.classList.contains(qbe))return oke;if(n.classList.contains(Gbe))return ike;if(n.classList.contains(Wbe))return rke;const r=getComputedStyle(this._menu).getPropertyValue("--bs-position").trim()==="end";return n.classList.contains(Hbe)?r?Xbe:Jbe:r?tke:eke}_detectNavbar(){return this._element.closest(Ybe)!==null}_getOffset(){const{offset:n}=this._config;return typeof n=="string"?n.split(",").map(r=>Number.parseInt(r,10)):typeof n=="function"?r=>n(r,this._element):n}_getPopperConfig(){const n={placement:this._getPlacement(),modifiers:[{name:"preventOverflow",options:{boundary:this._config.boundary}},{name:"offset",options:{offset:this._getOffset()}}]};return(this._inNavbar||this._config.display==="static")&&(Tr.setDataAttribute(this._menu,"popper","static"),n.modifiers=[{name:"applyStyles",enabled:!1}]),{...n,...Co(this._config.popperConfig,[n])}}_selectMenuItem({key:n,target:r}){const l=Ke.find(Zbe,this._menu).filter(u=>hc(u));l.length&&X_(l,r,n===RT,!l.includes(r)).focus()}static jQueryInterface(n){return this.each(function(){const r=Si.getOrCreateInstance(this,n);if(typeof n=="string"){if(typeof r[n]>"u")throw new TypeError(`No method named "${n}"`);r[n]()}})}static clearMenus(n){if(n.button===Rbe||n.type==="keyup"&&n.key!==LT)return;const r=Ke.find(Kbe);for(const l of r){const u=Si.getInstance(l);if(!u||u._config.autoClose===!1)continue;const p=n.composedPath(),f=p.includes(u._menu);if(p.includes(u._element)||u._config.autoClose==="inside"&&!f||u._config.autoClose==="outside"&&f||u._menu.contains(n.target)&&(n.type==="keyup"&&n.key===LT||/input|select|option|textarea|form/i.test(n.target.tagName)))continue;const b={relatedTarget:u._element};n.type==="click"&&(b.clickEvent=n),u._completeHide(b)}}static dataApiKeydownHandler(n){const r=/input|textarea/i.test(n.target.tagName),l=n.key===Nbe,u=[Lbe,RT].includes(n.key);if(!u&&!l||r&&!l)return;n.preventDefault();const p=this.matches(da)?this:Ke.prev(this,da)[0]||Ke.next(this,da)[0]||Ke.findOne(da,n.delegateTarget.parentNode),f=Si.getOrCreateInstance(p);if(u){n.stopPropagation(),f.show(),f._selectMenuItem(n);return}f._isShown()&&(n.stopPropagation(),f.hide(),p.focus())}}xe.on(document,u4,da,Si.dataApiKeydownHandler);xe.on(document,u4,Ep,Si.dataApiKeydownHandler);xe.on(document,d4,Si.clearMenus);xe.on(document,Vbe,Si.clearMenus);xe.on(document,d4,da,function(i){i.preventDefault(),Si.getOrCreateInstance(this).toggle()});hi(Si);const h4="backdrop",lke="fade",FT="show",zT=`mousedown.bs.${h4}`,cke={className:"modal-backdrop",clickCallback:null,isAnimated:!1,isVisible:!0,rootElement:"body"},dke={className:"string",clickCallback:"(function|null)",isAnimated:"boolean",isVisible:"boolean",rootElement:"(element|string)"};class p4 extends vu{constructor(n){super(),this._config=this._getConfig(n),this._isAppended=!1,this._element=null}static get Default(){return cke}static get DefaultType(){return dke}static get NAME(){return h4}show(n){if(!this._config.isVisible){Co(n);return}this._append();const r=this._getElement();this._config.isAnimated&&wu(r),r.classList.add(FT),this._emulateAnimation(()=>{Co(n)})}hide(n){if(!this._config.isVisible){Co(n);return}this._getElement().classList.remove(FT),this._emulateAnimation(()=>{this.dispose(),Co(n)})}dispose(){this._isAppended&&(xe.off(this._element,zT),this._element.remove(),this._isAppended=!1)}_getElement(){if(!this._element){const n=document.createElement("div");n.className=this._config.className,this._config.isAnimated&&n.classList.add(lke),this._element=n}return this._element}_configAfterMerge(n){return n.rootElement=bs(n.rootElement),n}_append(){if(this._isAppended)return;const n=this._getElement();this._config.rootElement.append(n),xe.on(n,zT,()=>{Co(this._config.clickCallback)}),this._isAppended=!0}_emulateAnimation(n){JM(n,this._getElement(),this._config.isAnimated)}}const uke="focustrap",hke="bs.focustrap",rf=`.${hke}`,pke=`focusin${rf}`,fke=`keydown.tab${rf}`,mke="Tab",gke="forward",jT="backward",bke={autofocus:!0,trapElement:null},kke={autofocus:"boolean",trapElement:"element"};class f4 extends vu{constructor(n){super(),this._config=this._getConfig(n),this._isActive=!1,this._lastTabNavDirection=null}static get Default(){return bke}static get DefaultType(){return kke}static get NAME(){return uke}activate(){this._isActive||(this._config.autofocus&&this._config.trapElement.focus(),xe.off(document,rf),xe.on(document,pke,n=>this._handleFocusin(n)),xe.on(document,fke,n=>this._handleKeydown(n)),this._isActive=!0)}deactivate(){this._isActive&&(this._isActive=!1,xe.off(document,rf))}_handleFocusin(n){const{trapElement:r}=this._config;if(n.target===document||n.target===r||r.contains(n.target))return;const l=Ke.focusableChildren(r);l.length===0?r.focus():this._lastTabNavDirection===jT?l[l.length-1].focus():l[0].focus()}_handleKeydown(n){n.key===mke&&(this._lastTabNavDirection=n.shiftKey?jT:gke)}}const $T=".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",VT=".sticky-top",ap="padding-right",HT="margin-right";class Vk{constructor(){this._element=document.body}getWidth(){const n=document.documentElement.clientWidth;return Math.abs(window.innerWidth-n)}hide(){const n=this.getWidth();this._disableOverFlow(),this._setElementAttributes(this._element,ap,r=>r+n),this._setElementAttributes($T,ap,r=>r+n),this._setElementAttributes(VT,HT,r=>r-n)}reset(){this._resetElementAttributes(this._element,"overflow"),this._resetElementAttributes(this._element,ap),this._resetElementAttributes($T,ap),this._resetElementAttributes(VT,HT)}isOverflowing(){return this.getWidth()>0}_disableOverFlow(){this._saveInitialAttribute(this._element,"overflow"),this._element.style.overflow="hidden"}_setElementAttributes(n,r,l){const u=this.getWidth(),p=f=>{if(f!==this._element&&window.innerWidth>f.clientWidth+u)return;this._saveInitialAttribute(f,r);const b=window.getComputedStyle(f).getPropertyValue(r);f.style.setProperty(r,`${l(Number.parseFloat(b))}px`)};this._applyManipulationCallback(n,p)}_saveInitialAttribute(n,r){const l=n.style.getPropertyValue(r);l&&Tr.setDataAttribute(n,r,l)}_resetElementAttributes(n,r){const l=u=>{const p=Tr.getDataAttribute(u,r);if(p===null){u.style.removeProperty(r);return}Tr.removeDataAttribute(u,r),u.style.setProperty(r,p)};this._applyManipulationCallback(n,l)}_applyManipulationCallback(n,r){if(Sr(n)){r(n);return}for(const l of Ke.find(n,this._element))r(l)}}const _ke="modal",wke="bs.modal",ci=`.${wke}`,vke=".data-api",Ake="Escape",Cke=`hide${ci}`,yke=`hidePrevented${ci}`,m4=`hidden${ci}`,g4=`show${ci}`,xke=`shown${ci}`,Eke=`resize${ci}`,Ske=`click.dismiss${ci}`,Tke=`mousedown.dismiss${ci}`,Dke=`keydown.dismiss${ci}`,Ike=`click${ci}${vke}`,UT="modal-open",Mke="fade",qT="show",jb="modal-static",Oke=".modal.show",Bke=".modal-dialog",Pke=".modal-body",Nke='[data-bs-toggle="modal"]',Lke={backdrop:!0,focus:!0,keyboard:!0},Rke={backdrop:"(boolean|string)",focus:"boolean",keyboard:"boolean"};class nc extends Di{constructor(n,r){super(n,r),this._dialog=Ke.findOne(Bke,this._element),this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._isShown=!1,this._isTransitioning=!1,this._scrollBar=new Vk,this._addEventListeners()}static get Default(){return Lke}static get DefaultType(){return Rke}static get NAME(){return _ke}toggle(n){return this._isShown?this.hide():this.show(n)}show(n){this._isShown||this._isTransitioning||xe.trigger(this._element,g4,{relatedTarget:n}).defaultPrevented||(this._isShown=!0,this._isTransitioning=!0,this._scrollBar.hide(),document.body.classList.add(UT),this._adjustDialog(),this._backdrop.show(()=>this._showElement(n)))}hide(){!this._isShown||this._isTransitioning||xe.trigger(this._element,Cke).defaultPrevented||(this._isShown=!1,this._isTransitioning=!0,this._focustrap.deactivate(),this._element.classList.remove(qT),this._queueCallback(()=>this._hideModal(),this._element,this._isAnimated()))}dispose(){xe.off(window,ci),xe.off(this._dialog,ci),this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()}handleUpdate(){this._adjustDialog()}_initializeBackDrop(){return new p4({isVisible:!!this._config.backdrop,isAnimated:this._isAnimated()})}_initializeFocusTrap(){return new f4({trapElement:this._element})}_showElement(n){document.body.contains(this._element)||document.body.append(this._element),this._element.style.display="block",this._element.removeAttribute("aria-hidden"),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.scrollTop=0;const r=Ke.findOne(Pke,this._dialog);r&&(r.scrollTop=0),wu(this._element),this._element.classList.add(qT);const l=()=>{this._config.focus&&this._focustrap.activate(),this._isTransitioning=!1,xe.trigger(this._element,xke,{relatedTarget:n})};this._queueCallback(l,this._dialog,this._isAnimated())}_addEventListeners(){xe.on(this._element,Dke,n=>{if(n.key===Ake){if(this._config.keyboard){this.hide();return}this._triggerBackdropTransition()}}),xe.on(window,Eke,()=>{this._isShown&&!this._isTransitioning&&this._adjustDialog()}),xe.on(this._element,Tke,n=>{xe.one(this._element,Ske,r=>{if(!(this._element!==n.target||this._element!==r.target)){if(this._config.backdrop==="static"){this._triggerBackdropTransition();return}this._config.backdrop&&this.hide()}})})}_hideModal(){this._element.style.display="none",this._element.setAttribute("aria-hidden",!0),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._isTransitioning=!1,this._backdrop.hide(()=>{document.body.classList.remove(UT),this._resetAdjustments(),this._scrollBar.reset(),xe.trigger(this._element,m4)})}_isAnimated(){return this._element.classList.contains(Mke)}_triggerBackdropTransition(){if(xe.trigger(this._element,yke).defaultPrevented)return;const r=this._element.scrollHeight>document.documentElement.clientHeight,l=this._element.style.overflowY;l==="hidden"||this._element.classList.contains(jb)||(r||(this._element.style.overflowY="hidden"),this._element.classList.add(jb),this._queueCallback(()=>{this._element.classList.remove(jb),this._queueCallback(()=>{this._element.style.overflowY=l},this._dialog)},this._dialog),this._element.focus())}_adjustDialog(){const n=this._element.scrollHeight>document.documentElement.clientHeight,r=this._scrollBar.getWidth(),l=r>0;if(l&&!n){const u=li()?"paddingLeft":"paddingRight";this._element.style[u]=`${r}px`}if(!l&&n){const u=li()?"paddingRight":"paddingLeft";this._element.style[u]=`${r}px`}}_resetAdjustments(){this._element.style.paddingLeft="",this._element.style.paddingRight=""}static jQueryInterface(n,r){return this.each(function(){const l=nc.getOrCreateInstance(this,n);if(typeof n=="string"){if(typeof l[n]>"u")throw new TypeError(`No method named "${n}"`);l[n](r)}})}}xe.on(document,Ike,Nke,function(i){const n=Ke.getElementFromSelector(this);["A","AREA"].includes(this.tagName)&&i.preventDefault(),xe.one(n,g4,u=>{u.defaultPrevented||xe.one(n,m4,()=>{hc(this)&&this.focus()})});const r=Ke.findOne(Oke);r&&nc.getInstance(r).hide(),nc.getOrCreateInstance(n).toggle(this)});Rf(nc);hi(nc);const Fke="offcanvas",zke="bs.offcanvas",Br=`.${zke}`,b4=".data-api",jke=`load${Br}${b4}`,$ke="Escape",GT="show",WT="showing",KT="hiding",Vke="offcanvas-backdrop",k4=".offcanvas.show",Hke=`show${Br}`,Uke=`shown${Br}`,qke=`hide${Br}`,YT=`hidePrevented${Br}`,_4=`hidden${Br}`,Gke=`resize${Br}`,Wke=`click${Br}${b4}`,Kke=`keydown.dismiss${Br}`,Yke='[data-bs-toggle="offcanvas"]',Qke={backdrop:!0,keyboard:!0,scroll:!1},Zke={backdrop:"(boolean|string)",keyboard:"boolean",scroll:"boolean"};class _s extends Di{constructor(n,r){super(n,r),this._isShown=!1,this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._addEventListeners()}static get Default(){return Qke}static get DefaultType(){return Zke}static get NAME(){return Fke}toggle(n){return this._isShown?this.hide():this.show(n)}show(n){if(this._isShown||xe.trigger(this._element,Hke,{relatedTarget:n}).defaultPrevented)return;this._isShown=!0,this._backdrop.show(),this._config.scroll||new Vk().hide(),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.classList.add(WT);const l=()=>{(!this._config.scroll||this._config.backdrop)&&this._focustrap.activate(),this._element.classList.add(GT),this._element.classList.remove(WT),xe.trigger(this._element,Uke,{relatedTarget:n})};this._queueCallback(l,this._element,!0)}hide(){if(!this._isShown||xe.trigger(this._element,qke).defaultPrevented)return;this._focustrap.deactivate(),this._element.blur(),this._isShown=!1,this._element.classList.add(KT),this._backdrop.hide();const r=()=>{this._element.classList.remove(GT,KT),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._config.scroll||new Vk().reset(),xe.trigger(this._element,_4)};this._queueCallback(r,this._element,!0)}dispose(){this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()}_initializeBackDrop(){const n=()=>{if(this._config.backdrop==="static"){xe.trigger(this._element,YT);return}this.hide()},r=!!this._config.backdrop;return new p4({className:Vke,isVisible:r,isAnimated:!0,rootElement:this._element.parentNode,clickCallback:r?n:null})}_initializeFocusTrap(){return new f4({trapElement:this._element})}_addEventListeners(){xe.on(this._element,Kke,n=>{if(n.key===$ke){if(this._config.keyboard){this.hide();return}xe.trigger(this._element,YT)}})}static jQueryInterface(n){return this.each(function(){const r=_s.getOrCreateInstance(this,n);if(typeof n=="string"){if(r[n]===void 0||n.startsWith("_")||n==="constructor")throw new TypeError(`No method named "${n}"`);r[n](this)}})}}xe.on(document,Wke,Yke,function(i){const n=Ke.getElementFromSelector(this);if(["A","AREA"].includes(this.tagName)&&i.preventDefault(),ks(this))return;xe.one(n,_4,()=>{hc(this)&&this.focus()});const r=Ke.findOne(k4);r&&r!==n&&_s.getInstance(r).hide(),_s.getOrCreateInstance(n).toggle(this)});xe.on(window,jke,()=>{for(const i of Ke.find(k4))_s.getOrCreateInstance(i).show()});xe.on(window,Gke,()=>{for(const i of Ke.find("[aria-modal][class*=show][class*=offcanvas-]"))getComputedStyle(i).position!=="fixed"&&_s.getOrCreateInstance(i).hide()});Rf(_s);hi(_s);const Jke=/^aria-[\w-]*$/i,w4={"*":["class","dir","id","lang","role",Jke],a:["target","href","title","rel"],area:[],b:[],br:[],col:[],code:[],div:[],em:[],hr:[],h1:[],h2:[],h3:[],h4:[],h5:[],h6:[],i:[],img:["src","srcset","alt","title","width","height"],li:[],ol:[],p:[],pre:[],s:[],small:[],span:[],sub:[],sup:[],strong:[],u:[],ul:[]},Xke=new Set(["background","cite","href","itemtype","longdesc","poster","src","xlink:href"]),e_e=/^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:/?#]*(?:[/?#]|$))/i,t_e=(i,n)=>{const r=i.nodeName.toLowerCase();return n.includes(r)?Xke.has(r)?!!e_e.test(i.nodeValue):!0:n.filter(l=>l instanceof RegExp).some(l=>l.test(r))};function n_e(i,n,r){if(!i.length)return i;if(r&&typeof r=="function")return r(i);const u=new window.DOMParser().parseFromString(i,"text/html"),p=[].concat(...u.body.querySelectorAll("*"));for(const f of p){const b=f.nodeName.toLowerCase();if(!Object.keys(n).includes(b)){f.remove();continue}const m=[].concat(...f.attributes),v=[].concat(n["*"]||[],n[b]||[]);for(const A of m)t_e(A,v)||f.removeAttribute(A.nodeName)}return u.body.innerHTML}const o_e="TemplateFactory",i_e={allowList:w4,content:{},extraClass:"",html:!1,sanitize:!0,sanitizeFn:null,template:"<div></div>"},r_e={allowList:"object",content:"object",extraClass:"(string|function)",html:"boolean",sanitize:"boolean",sanitizeFn:"(null|function)",template:"string"},s_e={entry:"(string|element|function|null)",selector:"(string|element)"};class a_e extends vu{constructor(n){super(),this._config=this._getConfig(n)}static get Default(){return i_e}static get DefaultType(){return r_e}static get NAME(){return o_e}getContent(){return Object.values(this._config.content).map(n=>this._resolvePossibleFunction(n)).filter(Boolean)}hasContent(){return this.getContent().length>0}changeContent(n){return this._checkContent(n),this._config.content={...this._config.content,...n},this}toHtml(){const n=document.createElement("div");n.innerHTML=this._maybeSanitize(this._config.template);for(const[u,p]of Object.entries(this._config.content))this._setContent(n,p,u);const r=n.children[0],l=this._resolvePossibleFunction(this._config.extraClass);return l&&r.classList.add(...l.split(" ")),r}_typeCheckConfig(n){super._typeCheckConfig(n),this._checkContent(n.content)}_checkContent(n){for(const[r,l]of Object.entries(n))super._typeCheckConfig({selector:r,entry:l},s_e)}_setContent(n,r,l){const u=Ke.findOne(l,n);if(u){if(r=this._resolvePossibleFunction(r),!r){u.remove();return}if(Sr(r)){this._putElementInTemplate(bs(r),u);return}if(this._config.html){u.innerHTML=this._maybeSanitize(r);return}u.textContent=r}}_maybeSanitize(n){return this._config.sanitize?n_e(n,this._config.allowList,this._config.sanitizeFn):n}_resolvePossibleFunction(n){return Co(n,[this])}_putElementInTemplate(n,r){if(this._config.html){r.innerHTML="",r.append(n);return}r.textContent=n.textContent}}const l_e="tooltip",c_e=new Set(["sanitize","allowList","sanitizeFn"]),$b="fade",d_e="modal",lp="show",u_e=".tooltip-inner",QT=`.${d_e}`,ZT="hide.bs.modal",Id="hover",Vb="focus",h_e="click",p_e="manual",f_e="hide",m_e="hidden",g_e="show",b_e="shown",k_e="inserted",__e="click",w_e="focusin",v_e="focusout",A_e="mouseenter",C_e="mouseleave",y_e={AUTO:"auto",TOP:"top",RIGHT:li()?"left":"right",BOTTOM:"bottom",LEFT:li()?"right":"left"},x_e={allowList:w4,animation:!0,boundary:"clippingParents",container:!1,customClass:"",delay:0,fallbackPlacements:["top","right","bottom","left"],html:!1,offset:[0,6],placement:"top",popperConfig:null,sanitize:!0,sanitizeFn:null,selector:!1,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',title:"",trigger:"hover focus"},E_e={allowList:"object",animation:"boolean",boundary:"(string|element)",container:"(string|element|boolean)",customClass:"(string|function)",delay:"(number|object)",fallbackPlacements:"array",html:"boolean",offset:"(array|string|function)",placement:"(string|function)",popperConfig:"(null|object|function)",sanitize:"boolean",sanitizeFn:"(null|function)",selector:"(string|boolean)",template:"string",title:"(string|element|function)",trigger:"string"};class Ra extends Di{constructor(n,r){if(typeof WM>"u")throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org)");super(n,r),this._isEnabled=!0,this._timeout=0,this._isHovered=null,this._activeTrigger={},this._popper=null,this._templateFactory=null,this._newContent=null,this.tip=null,this._setListeners(),this._config.selector||this._fixTitle()}static get Default(){return x_e}static get DefaultType(){return E_e}static get NAME(){return l_e}enable(){this._isEnabled=!0}disable(){this._isEnabled=!1}toggleEnabled(){this._isEnabled=!this._isEnabled}toggle(){if(this._isEnabled){if(this._activeTrigger.click=!this._activeTrigger.click,this._isShown()){this._leave();return}this._enter()}}dispose(){clearTimeout(this._timeout),xe.off(this._element.closest(QT),ZT,this._hideModalHandler),this._element.getAttribute("data-bs-original-title")&&this._element.setAttribute("title",this._element.getAttribute("data-bs-original-title")),this._disposePopper(),super.dispose()}show(){if(this._element.style.display==="none")throw new Error("Please use show on visible elements");if(!(this._isWithContent()&&this._isEnabled))return;const n=xe.trigger(this._element,this.constructor.eventName(g_e)),l=(QM(this._element)||this._element.ownerDocument.documentElement).contains(this._element);if(n.defaultPrevented||!l)return;this._disposePopper();const u=this._getTipElement();this._element.setAttribute("aria-describedby",u.getAttribute("id"));const{container:p}=this._config;if(this._element.ownerDocument.documentElement.contains(this.tip)||(p.append(u),xe.trigger(this._element,this.constructor.eventName(k_e))),this._popper=this._createPopper(u),u.classList.add(lp),"ontouchstart"in document.documentElement)for(const b of[].concat(...document.body.children))xe.on(b,"mouseover",nf);const f=()=>{xe.trigger(this._element,this.constructor.eventName(b_e)),this._isHovered===!1&&this._leave(),this._isHovered=!1};this._queueCallback(f,this.tip,this._isAnimated())}hide(){if(!this._isShown()||xe.trigger(this._element,this.constructor.eventName(f_e)).defaultPrevented)return;if(this._getTipElement().classList.remove(lp),"ontouchstart"in document.documentElement)for(const u of[].concat(...document.body.children))xe.off(u,"mouseover",nf);this._activeTrigger[h_e]=!1,this._activeTrigger[Vb]=!1,this._activeTrigger[Id]=!1,this._isHovered=null;const l=()=>{this._isWithActiveTrigger()||(this._isHovered||this._disposePopper(),this._element.removeAttribute("aria-describedby"),xe.trigger(this._element,this.constructor.eventName(m_e)))};this._queueCallback(l,this.tip,this._isAnimated())}update(){this._popper&&this._popper.update()}_isWithContent(){return!!this._getTitle()}_getTipElement(){return this.tip||(this.tip=this._createTipElement(this._newContent||this._getContentForTemplate())),this.tip}_createTipElement(n){const r=this._getTemplateFactory(n).toHtml();if(!r)return null;r.classList.remove($b,lp),r.classList.add(`bs-${this.constructor.NAME}-auto`);const l=hge(this.constructor.NAME).toString();return r.setAttribute("id",l),this._isAnimated()&&r.classList.add($b),r}setContent(n){this._newContent=n,this._isShown()&&(this._disposePopper(),this.show())}_getTemplateFactory(n){return this._templateFactory?this._templateFactory.changeContent(n):this._templateFactory=new a_e({...this._config,content:n,extraClass:this._resolvePossibleFunction(this._config.customClass)}),this._templateFactory}_getContentForTemplate(){return{[u_e]:this._getTitle()}}_getTitle(){return this._resolvePossibleFunction(this._config.title)||this._element.getAttribute("data-bs-original-title")}_initializeOnDelegatedTarget(n){return this.constructor.getOrCreateInstance(n.delegateTarget,this._getDelegateConfig())}_isAnimated(){return this._config.animation||this.tip&&this.tip.classList.contains($b)}_isShown(){return this.tip&&this.tip.classList.contains(lp)}_createPopper(n){const r=Co(this._config.placement,[this,n,this._element]),l=y_e[r.toUpperCase()];return J_(this._element,n,this._getPopperConfig(l))}_getOffset(){const{offset:n}=this._config;return typeof n=="string"?n.split(",").map(r=>Number.parseInt(r,10)):typeof n=="function"?r=>n(r,this._element):n}_resolvePossibleFunction(n){return Co(n,[this._element])}_getPopperConfig(n){const r={placement:n,modifiers:[{name:"flip",options:{fallbackPlacements:this._config.fallbackPlacements}},{name:"offset",options:{offset:this._getOffset()}},{name:"preventOverflow",options:{boundary:this._config.boundary}},{name:"arrow",options:{element:`.${this.constructor.NAME}-arrow`}},{name:"preSetPlacement",enabled:!0,phase:"beforeMain",fn:l=>{this._getTipElement().setAttribute("data-popper-placement",l.state.placement)}}]};return{...r,...Co(this._config.popperConfig,[r])}}_setListeners(){const n=this._config.trigger.split(" ");for(const r of n)if(r==="click")xe.on(this._element,this.constructor.eventName(__e),this._config.selector,l=>{this._initializeOnDelegatedTarget(l).toggle()});else if(r!==p_e){const l=r===Id?this.constructor.eventName(A_e):this.constructor.eventName(w_e),u=r===Id?this.constructor.eventName(C_e):this.constructor.eventName(v_e);xe.on(this._element,l,this._config.selector,p=>{const f=this._initializeOnDelegatedTarget(p);f._activeTrigger[p.type==="focusin"?Vb:Id]=!0,f._enter()}),xe.on(this._element,u,this._config.selector,p=>{const f=this._initializeOnDelegatedTarget(p);f._activeTrigger[p.type==="focusout"?Vb:Id]=f._element.contains(p.relatedTarget),f._leave()})}this._hideModalHandler=()=>{this._element&&this.hide()},xe.on(this._element.closest(QT),ZT,this._hideModalHandler)}_fixTitle(){const n=this._element.getAttribute("title");n&&(!this._element.getAttribute("aria-label")&&!this._element.textContent.trim()&&this._element.setAttribute("aria-label",n),this._element.setAttribute("data-bs-original-title",n),this._element.removeAttribute("title"))}_enter(){if(this._isShown()||this._isHovered){this._isHovered=!0;return}this._isHovered=!0,this._setTimeout(()=>{this._isHovered&&this.show()},this._config.delay.show)}_leave(){this._isWithActiveTrigger()||(this._isHovered=!1,this._setTimeout(()=>{this._isHovered||this.hide()},this._config.delay.hide))}_setTimeout(n,r){clearTimeout(this._timeout),this._timeout=setTimeout(n,r)}_isWithActiveTrigger(){return Object.values(this._activeTrigger).includes(!0)}_getConfig(n){const r=Tr.getDataAttributes(this._element);for(const l of Object.keys(r))c_e.has(l)&&delete r[l];return n={...r,...typeof n=="object"&&n?n:{}},n=this._mergeConfigObj(n),n=this._configAfterMerge(n),this._typeCheckConfig(n),n}_configAfterMerge(n){return n.container=n.container===!1?document.body:bs(n.container),typeof n.delay=="number"&&(n.delay={show:n.delay,hide:n.delay}),typeof n.title=="number"&&(n.title=n.title.toString()),typeof n.content=="number"&&(n.content=n.content.toString()),n}_getDelegateConfig(){const n={};for(const[r,l]of Object.entries(this._config))this.constructor.Default[r]!==l&&(n[r]=l);return n.selector=!1,n.trigger="manual",n}_disposePopper(){this._popper&&(this._popper.destroy(),this._popper=null),this.tip&&(this.tip.remove(),this.tip=null)}static jQueryInterface(n){return this.each(function(){const r=Ra.getOrCreateInstance(this,n);if(typeof n=="string"){if(typeof r[n]>"u")throw new TypeError(`No method named "${n}"`);r[n]()}})}}hi(Ra);const S_e="popover",T_e=".popover-header",D_e=".popover-body",I_e={...Ra.Default,content:"",offset:[0,8],placement:"right",template:'<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',trigger:"click"},M_e={...Ra.DefaultType,content:"(null|string|element|function)"};class jf extends Ra{static get Default(){return I_e}static get DefaultType(){return M_e}static get NAME(){return S_e}_isWithContent(){return this._getTitle()||this._getContent()}_getContentForTemplate(){return{[T_e]:this._getTitle(),[D_e]:this._getContent()}}_getContent(){return this._resolvePossibleFunction(this._config.content)}static jQueryInterface(n){return this.each(function(){const r=jf.getOrCreateInstance(this,n);if(typeof n=="string"){if(typeof r[n]>"u")throw new TypeError(`No method named "${n}"`);r[n]()}})}}hi(jf);const O_e="scrollspy",B_e="bs.scrollspy",nw=`.${B_e}`,P_e=".data-api",N_e=`activate${nw}`,JT=`click${nw}`,L_e=`load${nw}${P_e}`,R_e="dropdown-item",vl="active",F_e='[data-bs-spy="scroll"]',Hb="[href]",z_e=".nav, .list-group",XT=".nav-link",j_e=".nav-item",$_e=".list-group-item",V_e=`${XT}, ${j_e} > ${XT}, ${$_e}`,H_e=".dropdown",U_e=".dropdown-toggle",q_e={offset:null,rootMargin:"0px 0px -25%",smoothScroll:!1,target:null,threshold:[.1,.5,1]},G_e={offset:"(number|null)",rootMargin:"string",smoothScroll:"boolean",target:"element",threshold:"array"};class $f extends Di{constructor(n,r){super(n,r),this._targetLinks=new Map,this._observableSections=new Map,this._rootElement=getComputedStyle(this._element).overflowY==="visible"?null:this._element,this._activeTarget=null,this._observer=null,this._previousScrollData={visibleEntryTop:0,parentScrollTop:0},this.refresh()}static get Default(){return q_e}static get DefaultType(){return G_e}static get NAME(){return O_e}refresh(){this._initializeTargetsAndObservables(),this._maybeEnableSmoothScroll(),this._observer?this._observer.disconnect():this._observer=this._getNewObserver();for(const n of this._observableSections.values())this._observer.observe(n)}dispose(){this._observer.disconnect(),super.dispose()}_configAfterMerge(n){return n.target=bs(n.target)||document.body,n.rootMargin=n.offset?`${n.offset}px 0px -30%`:n.rootMargin,typeof n.threshold=="string"&&(n.threshold=n.threshold.split(",").map(r=>Number.parseFloat(r))),n}_maybeEnableSmoothScroll(){this._config.smoothScroll&&(xe.off(this._config.target,JT),xe.on(this._config.target,JT,Hb,n=>{const r=this._observableSections.get(n.target.hash);if(r){n.preventDefault();const l=this._rootElement||window,u=r.offsetTop-this._element.offsetTop;if(l.scrollTo){l.scrollTo({top:u,behavior:"smooth"});return}l.scrollTop=u}}))}_getNewObserver(){const n={root:this._rootElement,threshold:this._config.threshold,rootMargin:this._config.rootMargin};return new IntersectionObserver(r=>this._observerCallback(r),n)}_observerCallback(n){const r=f=>this._targetLinks.get(`#${f.target.id}`),l=f=>{this._previousScrollData.visibleEntryTop=f.target.offsetTop,this._process(r(f))},u=(this._rootElement||document.documentElement).scrollTop,p=u>=this._previousScrollData.parentScrollTop;this._previousScrollData.parentScrollTop=u;for(const f of n){if(!f.isIntersecting){this._activeTarget=null,this._clearActiveClass(r(f));continue}const b=f.target.offsetTop>=this._previousScrollData.visibleEntryTop;if(p&&b){if(l(f),!u)return;continue}!p&&!b&&l(f)}}_initializeTargetsAndObservables(){this._targetLinks=new Map,this._observableSections=new Map;const n=Ke.find(Hb,this._config.target);for(const r of n){if(!r.hash||ks(r))continue;const l=Ke.findOne(decodeURI(r.hash),this._element);hc(l)&&(this._targetLinks.set(decodeURI(r.hash),r),this._observableSections.set(r.hash,l))}}_process(n){this._activeTarget!==n&&(this._clearActiveClass(this._config.target),this._activeTarget=n,n.classList.add(vl),this._activateParents(n),xe.trigger(this._element,N_e,{relatedTarget:n}))}_activateParents(n){if(n.classList.contains(R_e)){Ke.findOne(U_e,n.closest(H_e)).classList.add(vl);return}for(const r of Ke.parents(n,z_e))for(const l of Ke.prev(r,V_e))l.classList.add(vl)}_clearActiveClass(n){n.classList.remove(vl);const r=Ke.find(`${Hb}.${vl}`,n);for(const l of r)l.classList.remove(vl)}static jQueryInterface(n){return this.each(function(){const r=$f.getOrCreateInstance(this,n);if(typeof n=="string"){if(r[n]===void 0||n.startsWith("_")||n==="constructor")throw new TypeError(`No method named "${n}"`);r[n]()}})}}xe.on(window,L_e,()=>{for(const i of Ke.find(F_e))$f.getOrCreateInstance(i)});hi($f);const W_e="tab",K_e="bs.tab",Fa=`.${K_e}`,Y_e=`hide${Fa}`,Q_e=`hidden${Fa}`,Z_e=`show${Fa}`,J_e=`shown${Fa}`,X_e=`click${Fa}`,ewe=`keydown${Fa}`,twe=`load${Fa}`,nwe="ArrowLeft",eD="ArrowRight",owe="ArrowUp",tD="ArrowDown",Ub="Home",nD="End",ua="active",oD="fade",qb="show",iwe="dropdown",rwe=".dropdown-toggle",swe=".dropdown-menu",Gb=":not(.dropdown-toggle)",awe='.list-group, .nav, [role="tablist"]',lwe=".nav-item, .list-group-item",cwe=`.nav-link${Gb}, .list-group-item${Gb}, [role="tab"]${Gb}`,v4='[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]',Wb=`${cwe}, ${v4}`,dwe=`.${ua}[data-bs-toggle="tab"], .${ua}[data-bs-toggle="pill"], .${ua}[data-bs-toggle="list"]`;class oc extends Di{constructor(n){super(n),this._parent=this._element.closest(awe),this._parent&&(this._setInitialAttributes(this._parent,this._getChildren()),xe.on(this._element,ewe,r=>this._keydown(r)))}static get NAME(){return W_e}show(){const n=this._element;if(this._elemIsActive(n))return;const r=this._getActiveElem(),l=r?xe.trigger(r,Y_e,{relatedTarget:n}):null;xe.trigger(n,Z_e,{relatedTarget:r}).defaultPrevented||l&&l.defaultPrevented||(this._deactivate(r,n),this._activate(n,r))}_activate(n,r){if(!n)return;n.classList.add(ua),this._activate(Ke.getElementFromSelector(n));const l=()=>{if(n.getAttribute("role")!=="tab"){n.classList.add(qb);return}n.removeAttribute("tabindex"),n.setAttribute("aria-selected",!0),this._toggleDropDown(n,!0),xe.trigger(n,J_e,{relatedTarget:r})};this._queueCallback(l,n,n.classList.contains(oD))}_deactivate(n,r){if(!n)return;n.classList.remove(ua),n.blur(),this._deactivate(Ke.getElementFromSelector(n));const l=()=>{if(n.getAttribute("role")!=="tab"){n.classList.remove(qb);return}n.setAttribute("aria-selected",!1),n.setAttribute("tabindex","-1"),this._toggleDropDown(n,!1),xe.trigger(n,Q_e,{relatedTarget:r})};this._queueCallback(l,n,n.classList.contains(oD))}_keydown(n){if(![nwe,eD,owe,tD,Ub,nD].includes(n.key))return;n.stopPropagation(),n.preventDefault();const r=this._getChildren().filter(u=>!ks(u));let l;if([Ub,nD].includes(n.key))l=r[n.key===Ub?0:r.length-1];else{const u=[eD,tD].includes(n.key);l=X_(r,n.target,u,!0)}l&&(l.focus({preventScroll:!0}),oc.getOrCreateInstance(l).show())}_getChildren(){return Ke.find(Wb,this._parent)}_getActiveElem(){return this._getChildren().find(n=>this._elemIsActive(n))||null}_setInitialAttributes(n,r){this._setAttributeIfNotExists(n,"role","tablist");for(const l of r)this._setInitialAttributesOnChild(l)}_setInitialAttributesOnChild(n){n=this._getInnerElement(n);const r=this._elemIsActive(n),l=this._getOuterElement(n);n.setAttribute("aria-selected",r),l!==n&&this._setAttributeIfNotExists(l,"role","presentation"),r||n.setAttribute("tabindex","-1"),this._setAttributeIfNotExists(n,"role","tab"),this._setInitialAttributesOnTargetPanel(n)}_setInitialAttributesOnTargetPanel(n){const r=Ke.getElementFromSelector(n);r&&(this._setAttributeIfNotExists(r,"role","tabpanel"),n.id&&this._setAttributeIfNotExists(r,"aria-labelledby",`${n.id}`))}_toggleDropDown(n,r){const l=this._getOuterElement(n);if(!l.classList.contains(iwe))return;const u=(p,f)=>{const b=Ke.findOne(p,l);b&&b.classList.toggle(f,r)};u(rwe,ua),u(swe,qb),l.setAttribute("aria-expanded",r)}_setAttributeIfNotExists(n,r,l){n.hasAttribute(r)||n.setAttribute(r,l)}_elemIsActive(n){return n.classList.contains(ua)}_getInnerElement(n){return n.matches(Wb)?n:Ke.findOne(Wb,n)}_getOuterElement(n){return n.closest(lwe)||n}static jQueryInterface(n){return this.each(function(){const r=oc.getOrCreateInstance(this);if(typeof n=="string"){if(r[n]===void 0||n.startsWith("_")||n==="constructor")throw new TypeError(`No method named "${n}"`);r[n]()}})}}xe.on(document,X_e,v4,function(i){["A","AREA"].includes(this.tagName)&&i.preventDefault(),!ks(this)&&oc.getOrCreateInstance(this).show()});xe.on(window,twe,()=>{for(const i of Ke.find(dwe))oc.getOrCreateInstance(i)});hi(oc);const uwe="toast",hwe="bs.toast",xs=`.${hwe}`,pwe=`mouseover${xs}`,fwe=`mouseout${xs}`,mwe=`focusin${xs}`,gwe=`focusout${xs}`,bwe=`hide${xs}`,kwe=`hidden${xs}`,_we=`show${xs}`,wwe=`shown${xs}`,vwe="fade",iD="hide",cp="show",dp="showing",Awe={animation:"boolean",autohide:"boolean",delay:"number"},Cwe={animation:!0,autohide:!0,delay:5e3};class yu extends Di{constructor(n,r){super(n,r),this._timeout=null,this._hasMouseInteraction=!1,this._hasKeyboardInteraction=!1,this._setListeners()}static get Default(){return Cwe}static get DefaultType(){return Awe}static get NAME(){return uwe}show(){if(xe.trigger(this._element,_we).defaultPrevented)return;this._clearTimeout(),this._config.animation&&this._element.classList.add(vwe);const r=()=>{this._element.classList.remove(dp),xe.trigger(this._element,wwe),this._maybeScheduleHide()};this._element.classList.remove(iD),wu(this._element),this._element.classList.add(cp,dp),this._queueCallback(r,this._element,this._config.animation)}hide(){if(!this.isShown()||xe.trigger(this._element,bwe).defaultPrevented)return;const r=()=>{this._element.classList.add(iD),this._element.classList.remove(dp,cp),xe.trigger(this._element,kwe)};this._element.classList.add(dp),this._queueCallback(r,this._element,this._config.animation)}dispose(){this._clearTimeout(),this.isShown()&&this._element.classList.remove(cp),super.dispose()}isShown(){return this._element.classList.contains(cp)}_maybeScheduleHide(){this._config.autohide&&(this._hasMouseInteraction||this._hasKeyboardInteraction||(this._timeout=setTimeout(()=>{this.hide()},this._config.delay)))}_onInteraction(n,r){switch(n.type){case"mouseover":case"mouseout":{this._hasMouseInteraction=r;break}case"focusin":case"focusout":{this._hasKeyboardInteraction=r;break}}if(r){this._clearTimeout();return}const l=n.relatedTarget;this._element===l||this._element.contains(l)||this._maybeScheduleHide()}_setListeners(){xe.on(this._element,pwe,n=>this._onInteraction(n,!0)),xe.on(this._element,fwe,n=>this._onInteraction(n,!1)),xe.on(this._element,mwe,n=>this._onInteraction(n,!0)),xe.on(this._element,gwe,n=>this._onInteraction(n,!1))}_clearTimeout(){clearTimeout(this._timeout),this._timeout=null}static jQueryInterface(n){return this.each(function(){const r=yu.getOrCreateInstance(this,n);if(typeof n=="string"){if(typeof r[n]>"u")throw new TypeError(`No method named "${n}"`);r[n](this)}})}}Rf(yu);hi(yu);let ywe=[].slice.call(document.querySelectorAll('[data-bs-toggle="dropdown"]'));ywe.map(function(i){let n={boundary:i.getAttribute("data-bs-boundary")==="viewport"?document.querySelector(".btn"):"clippingParents"};return new Si(i,n)});let xwe=[].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));xwe.map(function(i){let n={delay:{show:50,hide:50},html:i.getAttribute("data-bs-html")==="true",placement:i.getAttribute("data-bs-placement")??"auto"};return new Ra(i,n)});let Ewe=[].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'));Ewe.map(function(i){let n={delay:{show:50,hide:50},html:i.getAttribute("data-bs-html")==="true",placement:i.getAttribute("data-bs-placement")??"auto"};return new jf(i,n)});let Swe=[].slice.call(document.querySelectorAll('[data-bs-toggle="switch-icon"]'));Swe.map(function(i){i.addEventListener("click",n=>{n.stopPropagation(),i.classList.toggle("active")})});let Twe=[].slice.call(document.querySelectorAll('[data-bs-toggle="toast"]'));Twe.map(function(i){return new yu(i)});const rD="tablerTheme",Dwe="light";let sf;const Kb=new Proxy(new URLSearchParams(window.location.search),{get:(i,n)=>i.get(n)});if(Kb.theme)localStorage.setItem(rD,Kb.theme),sf=Kb.theme;else{const i=localStorage.getItem(rD);sf=i||Dwe}sf==="dark"?document.body.setAttribute("data-bs-theme",sf):document.body.removeAttribute("data-bs-theme");window.axios=dn;window.axios.defaults.headers.common["X-Requested-With"]="XMLHttpRequest";const Iwe={name:"Sidebar",components:{Link:Pt}},Mwe={class:"navbar navbar-vertical navbar-expand-lg","data-bs-theme":"dark"},Owe={class:"container-fluid"},Bwe=_("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#sidebar-menu","aria-controls":"sidebar-menu","aria-expanded":"false","aria-label":"Toggle navigation"},[_("span",{class:"navbar-toggler-icon"})],-1),Pwe=_("h1",{class:"navbar-brand navbar-brand-autodark"},[_("a",{href:"/"}," Keloola OS ")],-1),Nwe={class:"navbar-nav flex-row d-lg-none"},Lwe=bn('<div class="nav-item d-none d-lg-flex me-3"><div class="btn-list"><a href="https://github.com/tabler/tabler" class="btn" target="_blank" rel="noreferrer"><svg xmlns="http://www.w3.org/2000/svg" class="icon" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"></path></svg> Source code </a><a href="https://github.com/sponsors/codecalm" class="btn" target="_blank" rel="noreferrer"><svg xmlns="http://www.w3.org/2000/svg" class="icon text-pink" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572"></path></svg> Sponsor </a></div></div><div class="d-none d-lg-flex"><a href="?theme=dark" class="nav-link px-0 hide-theme-dark" title="Enable dark mode" data-bs-toggle="tooltip" data-bs-placement="bottom"><svg xmlns="http://www.w3.org/2000/svg" class="icon" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z"></path></svg></a><a href="?theme=light" class="nav-link px-0 hide-theme-light" title="Enable light mode" data-bs-toggle="tooltip" data-bs-placement="bottom"><svg xmlns="http://www.w3.org/2000/svg" class="icon" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0"></path><path d="M3 12h1m8 -9v1m8 8h1m-9 8v1m-6.4 -15.4l.7 .7m12.1 -.7l-.7 .7m0 11.4l.7 .7m-12.1 -.7l-.7 .7"></path></svg></a><div class="nav-item dropdown d-none d-md-flex me-3"><a href="#" class="nav-link px-0" data-bs-toggle="dropdown" tabindex="-1" aria-label="Show notifications"><svg xmlns="http://www.w3.org/2000/svg" class="icon" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M10 5a2 2 0 1 1 4 0a7 7 0 0 1 4 6v3a4 4 0 0 0 2 3h-16a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6"></path><path d="M9 17v1a3 3 0 0 0 6 0v-1"></path></svg><span class="badge bg-red"></span></a><div class="dropdown-menu dropdown-menu-arrow dropdown-menu-end dropdown-menu-card"><div class="card"><div class="card-header"><h3 class="card-title">Last updates</h3></div><div class="list-group list-group-flush list-group-hoverable"><div class="list-group-item"><div class="row align-items-center"><div class="col-auto"><span class="status-dot status-dot-animated bg-red d-block"></span></div><div class="col text-truncate"><a href="#" class="text-body d-block">Example 1</a><div class="d-block text-secondary text-truncate mt-n1"> Change deprecated html tags to text decoration classes (#29604) </div></div><div class="col-auto"><a href="#" class="list-group-item-actions"><svg xmlns="http://www.w3.org/2000/svg" class="icon text-muted" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z"></path></svg></a></div></div></div><div class="list-group-item"><div class="row align-items-center"><div class="col-auto"><span class="status-dot d-block"></span></div><div class="col text-truncate"><a href="#" class="text-body d-block">Example 2</a><div class="d-block text-secondary text-truncate mt-n1"> justify-content:between ⇒ justify-content:space-between (#29734) </div></div><div class="col-auto"><a href="#" class="list-group-item-actions show"><svg xmlns="http://www.w3.org/2000/svg" class="icon text-yellow" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z"></path></svg></a></div></div></div><div class="list-group-item"><div class="row align-items-center"><div class="col-auto"><span class="status-dot d-block"></span></div><div class="col text-truncate"><a href="#" class="text-body d-block">Example 3</a><div class="d-block text-secondary text-truncate mt-n1"> Update change-version.js (#29736) </div></div><div class="col-auto"><a href="#" class="list-group-item-actions"><svg xmlns="http://www.w3.org/2000/svg" class="icon text-muted" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z"></path></svg></a></div></div></div><div class="list-group-item"><div class="row align-items-center"><div class="col-auto"><span class="status-dot status-dot-animated bg-green d-block"></span></div><div class="col text-truncate"><a href="#" class="text-body d-block">Example 4</a><div class="d-block text-secondary text-truncate mt-n1"> Regenerate package-lock.json (#29730) </div></div><div class="col-auto"><a href="#" class="list-group-item-actions"><svg xmlns="http://www.w3.org/2000/svg" class="icon text-muted" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z"></path></svg></a></div></div></div></div></div></div></div></div>',2),Rwe={class:"nav-item dropdown"},Fwe={href:"#",class:"nav-link d-flex lh-1 text-reset p-0","data-bs-toggle":"dropdown","aria-label":"Open user menu"},zwe=_("span",{class:"avatar avatar-sm",style:{"background-image":"url(./static/avatars/000m.jpg)"}},null,-1),jwe={class:"d-none d-xl-block ps-2"},$we=_("div",{class:"dropdown-menu dropdown-menu-end dropdown-menu-arrow"},[_("a",{href:"./sign-in.html",class:"dropdown-item"},"Logout")],-1),Vwe={class:"collapse navbar-collapse",id:"sidebar-menu"},Hwe={class:"navbar-nav pt-lg-3"},Uwe={class:"nav-item"},qwe=_("span",{class:"nav-link-icon d-md-none d-lg-inline-block"},[_("svg",{xmlns:"http://www.w3.org/2000/svg",class:"icon",width:"24",height:"24",viewBox:"0 0 24 24","stroke-width":"2",stroke:"currentColor",fill:"none","stroke-linecap":"round","stroke-linejoin":"round"},[_("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),_("path",{d:"M5 12l-2 0l9 -9l9 9l-2 0"}),_("path",{d:"M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7"}),_("path",{d:"M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6"})])],-1),Gwe=_("span",{class:"nav-link-title"}," Home ",-1),Wwe={class:"nav-item"},Kwe=_("span",{class:"nav-link-icon d-md-none d-lg-inline-block"},[_("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",class:"icon icon-tabler icons-tabler-outline icon-tabler-news"},[_("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),_("path",{d:"M16 6h3a1 1 0 0 1 1 1v11a2 2 0 0 1 -4 0v-13a1 1 0 0 0 -1 -1h-10a1 1 0 0 0 -1 1v12a3 3 0 0 0 3 3h11"}),_("path",{d:"M8 8l4 0"}),_("path",{d:"M8 12l4 0"}),_("path",{d:"M8 16l4 0"})])],-1),Ywe=_("span",{class:"nav-link-title"}," News ",-1),Qwe={class:"nav-item"},Zwe=_("span",{class:"nav-link-icon d-md-none d-lg-inline-block"},[_("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",class:"icon icon-tabler icons-tabler-outline icon-tabler-link"},[_("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),_("path",{d:"M9 15l6 -6"}),_("path",{d:"M11 6l.463 -.536a5 5 0 0 1 7.071 7.072l-.534 .464"}),_("path",{d:"M13 18l-.397 .534a5.068 5.068 0 0 1 -7.127 0a4.972 4.972 0 0 1 0 -7.071l.524 -.463"})])],-1),Jwe=_("span",{class:"nav-link-title"}," Custom Page",-1),Xwe={class:"nav-item"},eve=_("span",{class:"nav-link-icon d-md-none d-lg-inline-block"},[_("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",class:"icon icon-tabler icons-tabler-outline icon-tabler-question-mark"},[_("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),_("path",{d:"M8 8a3.5 3 0 0 1 3.5 -3h1a3.5 3 0 0 1 3.5 3a3 3 0 0 1 -2 3a3 4 0 0 0 -2 4"}),_("path",{d:"M12 19l0 .01"})])],-1),tve=_("span",{class:"nav-link-title"}," Faq ",-1),nve={class:"nav-item"},ove=_("span",{class:"nav-link-icon d-md-none d-lg-inline-block"},[_("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",class:"icon icon-tabler icons-tabler-outline icon-tabler-message-dots"},[_("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),_("path",{d:"M12 11v.01"}),_("path",{d:"M8 11v.01"}),_("path",{d:"M16 11v.01"}),_("path",{d:"M18 4a3 3 0 0 1 3 3v8a3 3 0 0 1 -3 3h-5l-5 3v-3h-2a3 3 0 0 1 -3 -3v-8a3 3 0 0 1 3 -3z"})])],-1),ive=_("span",{class:"nav-link-title"}," Testimonial ",-1),rve={class:"nav-item dropdown"},sve=_("a",{class:"nav-link dropdown-toggle",href:"#navbar-layout","data-bs-toggle":"dropdown","data-bs-auto-close":"false",role:"button","aria-expanded":"true"},[_("span",{class:"nav-link-icon d-md-none d-lg-inline-block"},[_("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",class:"icon icon-tabler icons-tabler-outline icon-tabler-download"},[_("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),_("path",{d:"M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2"}),_("path",{d:"M7 11l5 5l5 -5"}),_("path",{d:"M12 4l0 12"})])]),_("span",{class:"nav-link-title"}," Download ")],-1),ave={class:"dropdown-menu","data-bs-popper":"static"},lve={class:"dropdown-menu-columns"},cve={class:"dropdown-menu-column"},dve={class:"nav-item"},uve=_("span",{class:"nav-link-icon d-md-none d-lg-inline-block"},[_("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",class:"icon icon-tabler icons-tabler-outline icon-tabler-circles"},[_("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),_("path",{d:"M12 7m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0"}),_("path",{d:"M6.5 17m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0"}),_("path",{d:"M17.5 17m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0"})])],-1),hve=_("span",{class:"nav-link-title"}," Sponsor ",-1),pve={class:"nav-item"},fve=_("span",{class:"nav-link-icon d-md-none d-lg-inline-block"},[_("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",class:"icon icon-tabler icons-tabler-outline icon-tabler-mood-dollar"},[_("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),_("path",{d:"M20.87 10.48a9 9 0 1 0 -7.876 10.465"}),_("path",{d:"M9 10h.01"}),_("path",{d:"M15 10h.01"}),_("path",{d:"M9.5 15c.658 .64 1.56 1 2.5 1c.357 0 .709 -.052 1.043 -.151"}),_("path",{d:"M21 15h-2.5a1.5 1.5 0 0 0 0 3h1a1.5 1.5 0 0 1 0 3h-2.5"}),_("path",{d:"M19 21v1m0 -8v1"})])],-1),mve=_("span",{class:"nav-link-title"}," Donor ",-1),gve={class:"nav-item"},bve=_("span",{class:"nav-link-icon d-md-none d-lg-inline-block"},[_("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",class:"icon icon-tabler icons-tabler-outline icon-tabler-settings"},[_("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),_("path",{d:"M10.325 4.317c.426 -1.756 2.924 -1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543 -.94 3.31 .826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756 .426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543 -.826 3.31 -2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756 -2.924 1.756 -3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543 .94 -3.31 -.826 -2.37 -2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756 -.426 -1.756 -2.924 0 -3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94 -1.543 .826 -3.31 2.37 -2.37c1 .608 2.296 .07 2.572 -1.065z"}),_("path",{d:"M9 12a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"})])],-1),kve=_("span",{class:"nav-link-title"}," Config ",-1);function _ve(i,n,r,l,u,p){const f=Ce("Link");return X(),ne("aside",Mwe,[_("div",Owe,[Bwe,Pwe,_("div",Nwe,[Lwe,_("div",Rwe,[_("a",Fwe,[zwe,_("div",jwe,[_("div",null,ce(i.$page.props.user.name),1)])]),$we])]),_("div",Vwe,[_("ul",Hwe,[_("li",Uwe,[ue(f,{class:"nav-link",href:"/admin"},{default:gt(()=>[qwe,Gwe]),_:1})]),_("li",Wwe,[ue(f,{class:"nav-link",href:"/admin/news"},{default:gt(()=>[Kwe,Ywe]),_:1})]),_("li",Qwe,[ue(f,{class:"nav-link",href:"/admin/custom-page"},{default:gt(()=>[Zwe,Jwe]),_:1})]),_("li",Xwe,[ue(f,{class:"nav-link",href:"/admin/faq"},{default:gt(()=>[eve,tve]),_:1})]),_("li",nve,[ue(f,{class:"nav-link",href:"/admin/testimonial"},{default:gt(()=>[ove,ive]),_:1})]),_("li",rve,[sve,_("div",ave,[_("div",lve,[_("div",cve,[ue(f,{class:"dropdown-item",href:"/admin/os-version"},{default:gt(()=>[ze(" OS Version ")]),_:1}),ue(f,{class:"dropdown-item",href:"/admin/os-edition"},{default:gt(()=>[ze(" OS Edition ")]),_:1})])])])]),_("li",dve,[ue(f,{class:"nav-link",href:"/admin/sponsor-logo"},{default:gt(()=>[uve,hve]),_:1})]),_("li",pve,[ue(f,{class:"nav-link",href:"/admin/donor"},{default:gt(()=>[fve,mve]),_:1})]),_("li",gve,[ue(f,{class:"nav-link",href:"/admin/config"},{default:gt(()=>[bve,kve]),_:1})])])])])])}const wve=qe(Iwe,[["render",_ve]]),vve={name:"Navbar",setup(){function i(){Ze.post("/admin/logout")}return{logout:i}}},Ave={class:"navbar navbar-expand-md d-none d-lg-flex d-print-none"},Cve={class:"container-xl"},yve=_("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbar-menu","aria-controls":"navbar-menu","aria-expanded":"false","aria-label":"Toggle navigation"},[_("span",{class:"navbar-toggler-icon"})],-1),xve={class:"navbar-nav flex-row order-md-last"},Eve=bn('<div class="d-none d-md-flex"><a href="?theme=dark" class="nav-link px-0 hide-theme-dark me-3" title="Enable dark mode" data-bs-toggle="tooltip" data-bs-placement="bottom"><svg xmlns="http://www.w3.org/2000/svg" class="icon" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z"></path></svg></a><a href="?theme=light" class="nav-link px-0 hide-theme-light me-3" title="Enable light mode" data-bs-toggle="tooltip" data-bs-placement="bottom"><svg xmlns="http://www.w3.org/2000/svg" class="icon" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0"></path><path d="M3 12h1m8 -9v1m8 8h1m-9 8v1m-6.4 -15.4l.7 .7m12.1 -.7l-.7 .7m0 11.4l.7 .7m-12.1 -.7l-.7 .7"></path></svg></a></div>',1),Sve={class:"nav-item dropdown"},Tve={href:"#",class:"nav-link d-flex lh-1 text-reset p-0","data-bs-toggle":"dropdown","aria-label":"Open user menu"},Dve=_("span",{class:"avatar avatar-sm",style:{"background-image":"url(./static/avatars/000m.jpg)"}},null,-1),Ive={class:"d-none d-xl-block ps-2"},Mve={class:"dropdown-menu dropdown-menu-end dropdown-menu-arrow"},Ove=_("div",{class:"collapse navbar-collapse",id:"navbar-menu"},[_("div",null,[_("form",{action:"./",method:"get",autocomplete:"off",novalidate:""},[_("div",{class:"input-icon"},[_("span",{class:"input-icon-addon"},[_("svg",{xmlns:"http://www.w3.org/2000/svg",class:"icon",width:"24",height:"24",viewBox:"0 0 24 24","stroke-width":"2",stroke:"currentColor",fill:"none","stroke-linecap":"round","stroke-linejoin":"round"},[_("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),_("path",{d:"M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0"}),_("path",{d:"M21 21l-6 -6"})])]),_("input",{type:"text",value:"",class:"form-control",placeholder:"Search…","aria-label":"Search in website"})])])])],-1);function Bve(i,n,r,l,u,p){return X(),ne("header",Ave,[_("div",Cve,[yve,_("div",xve,[Eve,_("div",Sve,[_("a",Tve,[Dve,_("div",Ive,[_("div",null,ce(i.$page.props.user.name),1)])]),_("div",Mve,[_("a",{href:"#",onClick:n[0]||(n[0]=(...f)=>l.logout&&l.logout(...f)),class:"dropdown-item"},"Logout")])])]),Ove])])}const Pve=qe(vve,[["render",Bve]]),Nve={name:"Footer"},Lve={class:"footer footer-transparent d-print-none mt-auto"},Rve=bn('<div class="container-xl"><div class="row text-center align-items-center flex-row-reverse"><div class="col-12 col-lg-auto mt-3 mt-lg-0"><ul class="list-inline list-inline-dots mb-0"><li class="list-inline-item"> Copyright © 2024 <a href="." class="link-secondary">Keloola OS</a>. All rights reserved. </li><li class="list-inline-item"><a href="#" class="link-secondary" rel="noopener"> v1.0.0 </a></li></ul></div></div></div>',1),Fve=[Rve];function zve(i,n,r,l,u,p){return X(),ne("footer",Lve,Fve)}const jve=qe(Nve,[["render",zve]]),$ve={name:"Layout",components:{Sidebar:wve,Navbar:Pve,Footer:jve}},Vve={class:"page-wrapper"};function Hve(i,n,r,l,u,p){const f=Ce("Sidebar"),b=Ce("Navbar"),m=Ce("Footer");return X(),ne(Pe,null,[ue(f),ue(b),_("div",Vve,[Aa(i.$slots,"default"),ue(m)])],64)}const Uve=qe($ve,[["render",Hve]]);xG({resolve:i=>{let r=Object.assign({"./Pages/Auth/Login.vue":ZG,"./Pages/Config/Form.vue":LW,"./Pages/Config/Index.vue":aY,"./Pages/CustomPage/Form.vue":IY,"./Pages/CustomPage/Index.vue":UY,"./Pages/Dashboard/Index.vue":uZ,"./Pages/Donor/Form.vue":KJ,"./Pages/Donor/Index.vue":lX,"./Pages/Example/Form.vue":MX,"./Pages/Example/Index.vue":qX,"./Pages/Faq/Form.vue":fee,"./Pages/Faq/Index.vue":Tee,"./Pages/News/Form.vue":Zee,"./Pages/News/Index.vue":ute,"./Pages/OsEdition/Form.vue":Xte,"./Pages/OsEdition/Index.vue":fne,"./Pages/OsVersion/Form.vue":Gne,"./Pages/OsVersion/Index.vue":soe,"./Pages/Release/Form.vue":zoe,"./Pages/Release/Index.vue":Xoe,"./Pages/Sponsor/Form.vue":_ie,"./Pages/Sponsor/Index.vue":Bie,"./Pages/SponsorLogo/Form.vue":ore,"./Pages/SponsorLogo/Index.vue":_re,"./Pages/Testimonial/Form.vue":qre,"./Pages/Testimonial/Index.vue":rse,"./Pages/User/Contact.vue":gae,"./Pages/User/CustomPage.vue":xae,"./Pages/User/DetailNews.vue":Pae,"./Pages/User/Donors.vue":oce,"./Pages/User/Download.vue":Ece,"./Pages/User/Faq.vue":$ce,"./Pages/User/GetInvolved.vue":Lde,"./Pages/User/Index.vue":Zhe,"./Pages/User/NewFeature.vue":rpe,"./Pages/User/News.vue":wpe,"./Pages/User/Partners.vue":Epe,"./Pages/User/ReadyDownload.vue":Jpe,"./Pages/User/ReleaseNotes.vue":sfe,"./Pages/User/Sponsors.vue":Dfe,"./Pages/User/Tambora.vue":Zfe,"./Pages/User/Team.vue":ome})[`./Pages/${i}.vue`];return r.default.layout=r.default.layout||Uve,r},setup({el:i,App:n,props:r,plugin:l}){UI({render:()=>wn(n,r)}).use(l).mount(i)}});