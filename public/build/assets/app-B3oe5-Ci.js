function hD(i,n){return function(){return i.apply(n,arguments)}}const{toString:e8}=Object.prototype,{getPrototypeOf:Wk}=Object,uf=(i=>n=>{const r=e8.call(n);return i[r]||(i[r]=r.slice(8,-1).toLowerCase())})(Object.create(null)),Mi=i=>(i=i.toLowerCase(),n=>uf(n)===i),hf=i=>n=>typeof n===i,{isArray:sc}=Array,Qd=hf("undefined");function t8(i){return i!==null&&!Qd(i)&&i.constructor!==null&&!Qd(i.constructor)&&si(i.constructor.isBuffer)&&i.constructor.isBuffer(i)}const pD=Mi("ArrayBuffer");function n8(i){let n;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?n=ArrayBuffer.isView(i):n=i&&i.buffer&&pD(i.buffer),n}const o8=hf("string"),si=hf("function"),fD=hf("number"),pf=i=>i!==null&&typeof i=="object",i8=i=>i===!0||i===!1,pp=i=>{if(uf(i)!=="object")return!1;const n=Wk(i);return(n===null||n===Object.prototype||Object.getPrototypeOf(n)===null)&&!(Symbol.toStringTag in i)&&!(Symbol.iterator in i)},r8=Mi("Date"),s8=Mi("File"),a8=Mi("Blob"),l8=Mi("FileList"),c8=i=>pf(i)&&si(i.pipe),d8=i=>{let n;return i&&(typeof FormData=="function"&&i instanceof FormData||si(i.append)&&((n=uf(i))==="formdata"||n==="object"&&si(i.toString)&&i.toString()==="[object FormData]"))},u8=Mi("URLSearchParams"),[h8,p8,f8,m8]=["ReadableStream","Request","Response","Headers"].map(Mi),g8=i=>i.trim?i.trim():i.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function lu(i,n,{allOwnKeys:r=!1}={}){if(i===null||typeof i>"u")return;let l,u;if(typeof i!="object"&&(i=[i]),sc(i))for(l=0,u=i.length;l<u;l++)n.call(null,i[l],l,i);else{const p=r?Object.getOwnPropertyNames(i):Object.keys(i),f=p.length;let b;for(l=0;l<f;l++)b=p[l],n.call(null,i[b],b,i)}}function mD(i,n){n=n.toLowerCase();const r=Object.keys(i);let l=r.length,u;for(;l-- >0;)if(u=r[l],n===u.toLowerCase())return u;return null}const gD=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,bD=i=>!Qd(i)&&i!==gD;function Qb(){const{caseless:i}=bD(this)&&this||{},n={},r=(l,u)=>{const p=i&&mD(n,u)||u;pp(n[p])&&pp(l)?n[p]=Qb(n[p],l):pp(l)?n[p]=Qb({},l):sc(l)?n[p]=l.slice():n[p]=l};for(let l=0,u=arguments.length;l<u;l++)arguments[l]&&lu(arguments[l],r);return n}const b8=(i,n,r,{allOwnKeys:l}={})=>(lu(n,(u,p)=>{r&&si(u)?i[p]=hD(u,r):i[p]=u},{allOwnKeys:l}),i),k8=i=>(i.charCodeAt(0)===65279&&(i=i.slice(1)),i),_8=(i,n,r,l)=>{i.prototype=Object.create(n.prototype,l),i.prototype.constructor=i,Object.defineProperty(i,"super",{value:n.prototype}),r&&Object.assign(i.prototype,r)},w8=(i,n,r,l)=>{let u,p,f;const b={};if(n=n||{},i==null)return n;do{for(u=Object.getOwnPropertyNames(i),p=u.length;p-- >0;)f=u[p],(!l||l(f,i,n))&&!b[f]&&(n[f]=i[f],b[f]=!0);i=r!==!1&&Wk(i)}while(i&&(!r||r(i,n))&&i!==Object.prototype);return n},v8=(i,n,r)=>{i=String(i),(r===void 0||r>i.length)&&(r=i.length),r-=n.length;const l=i.indexOf(n,r);return l!==-1&&l===r},A8=i=>{if(!i)return null;if(sc(i))return i;let n=i.length;if(!fD(n))return null;const r=new Array(n);for(;n-- >0;)r[n]=i[n];return r},C8=(i=>n=>i&&n instanceof i)(typeof Uint8Array<"u"&&Wk(Uint8Array)),y8=(i,n)=>{const l=(i&&i[Symbol.iterator]).call(i);let u;for(;(u=l.next())&&!u.done;){const p=u.value;n.call(i,p[0],p[1])}},x8=(i,n)=>{let r;const l=[];for(;(r=i.exec(n))!==null;)l.push(r);return l},E8=Mi("HTMLFormElement"),S8=i=>i.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(r,l,u){return l.toUpperCase()+u}),R2=(({hasOwnProperty:i})=>(n,r)=>i.call(n,r))(Object.prototype),T8=Mi("RegExp"),kD=(i,n)=>{const r=Object.getOwnPropertyDescriptors(i),l={};lu(r,(u,p)=>{let f;(f=n(u,p,i))!==!1&&(l[p]=f||u)}),Object.defineProperties(i,l)},D8=i=>{kD(i,(n,r)=>{if(si(i)&&["arguments","caller","callee"].indexOf(r)!==-1)return!1;const l=i[r];if(si(l)){if(n.enumerable=!1,"writable"in n){n.writable=!1;return}n.set||(n.set=()=>{throw Error("Can not rewrite read-only method '"+r+"'")})}})},I8=(i,n)=>{const r={},l=u=>{u.forEach(p=>{r[p]=!0})};return sc(i)?l(i):l(String(i).split(n)),r},M8=()=>{},O8=(i,n)=>i!=null&&Number.isFinite(i=+i)?i:n,Kg="abcdefghijklmnopqrstuvwxyz",F2="0123456789",_D={DIGIT:F2,ALPHA:Kg,ALPHA_DIGIT:Kg+Kg.toUpperCase()+F2},B8=(i=16,n=_D.ALPHA_DIGIT)=>{let r="";const{length:l}=n;for(;i--;)r+=n[Math.random()*l|0];return r};function P8(i){return!!(i&&si(i.append)&&i[Symbol.toStringTag]==="FormData"&&i[Symbol.iterator])}const N8=i=>{const n=new Array(10),r=(l,u)=>{if(pf(l)){if(n.indexOf(l)>=0)return;if(!("toJSON"in l)){n[u]=l;const p=sc(l)?[]:{};return lu(l,(f,b)=>{const m=r(f,u+1);!Qd(m)&&(p[b]=m)}),n[u]=void 0,p}}return l};return r(i,0)},L8=Mi("AsyncFunction"),R8=i=>i&&(pf(i)||si(i))&&si(i.then)&&si(i.catch),pe={isArray:sc,isArrayBuffer:pD,isBuffer:t8,isFormData:d8,isArrayBufferView:n8,isString:o8,isNumber:fD,isBoolean:i8,isObject:pf,isPlainObject:pp,isReadableStream:h8,isRequest:p8,isResponse:f8,isHeaders:m8,isUndefined:Qd,isDate:r8,isFile:s8,isBlob:a8,isRegExp:T8,isFunction:si,isStream:c8,isURLSearchParams:u8,isTypedArray:C8,isFileList:l8,forEach:lu,merge:Qb,extend:b8,trim:g8,stripBOM:k8,inherits:_8,toFlatObject:w8,kindOf:uf,kindOfTest:Mi,endsWith:v8,toArray:A8,forEachEntry:y8,matchAll:x8,isHTMLForm:E8,hasOwnProperty:R2,hasOwnProp:R2,reduceDescriptors:kD,freezeMethods:D8,toObjectSet:I8,toCamelCase:S8,noop:M8,toFiniteNumber:O8,findKey:mD,global:gD,isContextDefined:bD,ALPHABET:_D,generateString:B8,isSpecCompliantForm:P8,toJSONObject:N8,isAsyncFn:L8,isThenable:R8};function st(i,n,r,l,u){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=i,this.name="AxiosError",n&&(this.code=n),r&&(this.config=r),l&&(this.request=l),u&&(this.response=u)}pe.inherits(st,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:pe.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const wD=st.prototype,vD={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(i=>{vD[i]={value:i}});Object.defineProperties(st,vD);Object.defineProperty(wD,"isAxiosError",{value:!0});st.from=(i,n,r,l,u,p)=>{const f=Object.create(wD);return pe.toFlatObject(i,f,function(m){return m!==Error.prototype},b=>b!=="isAxiosError"),st.call(f,i.message,n,r,l,u),f.cause=i,f.name=i.name,p&&Object.assign(f,p),f};const F8=null;function Zb(i){return pe.isPlainObject(i)||pe.isArray(i)}function AD(i){return pe.endsWith(i,"[]")?i.slice(0,-2):i}function z2(i,n,r){return i?i.concat(n).map(function(u,p){return u=AD(u),!r&&p?"["+u+"]":u}).join(r?".":""):n}function z8(i){return pe.isArray(i)&&!i.some(Zb)}const j8=pe.toFlatObject(pe,{},null,function(n){return/^is[A-Z]/.test(n)});function ff(i,n,r){if(!pe.isObject(i))throw new TypeError("target must be an object");n=n||new FormData,r=pe.toFlatObject(r,{metaTokens:!0,dots:!1,indexes:!1},!1,function(I,F){return!pe.isUndefined(F[I])});const l=r.metaTokens,u=r.visitor||v,p=r.dots,f=r.indexes,m=(r.Blob||typeof Blob<"u"&&Blob)&&pe.isSpecCompliantForm(n);if(!pe.isFunction(u))throw new TypeError("visitor must be a function");function A(T){if(T===null)return"";if(pe.isDate(T))return T.toISOString();if(!m&&pe.isBlob(T))throw new st("Blob is not supported. Use a Buffer instead.");return pe.isArrayBuffer(T)||pe.isTypedArray(T)?m&&typeof Blob=="function"?new Blob([T]):Buffer.from(T):T}function v(T,I,F){let N=T;if(T&&!F&&typeof T=="object"){if(pe.endsWith(I,"{}"))I=l?I:I.slice(0,-2),T=JSON.stringify(T);else if(pe.isArray(T)&&z8(T)||(pe.isFileList(T)||pe.endsWith(I,"[]"))&&(N=pe.toArray(T)))return I=AD(I),N.forEach(function(B,z){!(pe.isUndefined(B)||B===null)&&n.append(f===!0?z2([I],z,p):f===null?I:I+"[]",A(B))}),!1}return Zb(T)?!0:(n.append(z2(F,I,p),A(T)),!1)}const x=[],C=Object.assign(j8,{defaultVisitor:v,convertValue:A,isVisitable:Zb});function E(T,I){if(!pe.isUndefined(T)){if(x.indexOf(T)!==-1)throw Error("Circular reference detected in "+I.join("."));x.push(T),pe.forEach(T,function(N,L){(!(pe.isUndefined(N)||N===null)&&u.call(n,N,pe.isString(L)?L.trim():L,I,C))===!0&&E(N,I?I.concat(L):[L])}),x.pop()}}if(!pe.isObject(i))throw new TypeError("data must be an object");return E(i),n}function j2(i){const n={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(i).replace(/[!'()~]|%20|%00/g,function(l){return n[l]})}function Kk(i,n){this._pairs=[],i&&ff(i,this,n)}const CD=Kk.prototype;CD.append=function(n,r){this._pairs.push([n,r])};CD.toString=function(n){const r=n?function(l){return n.call(this,l,j2)}:j2;return this._pairs.map(function(u){return r(u[0])+"="+r(u[1])},"").join("&")};function $8(i){return encodeURIComponent(i).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function yD(i,n,r){if(!n)return i;const l=r&&r.encode||$8,u=r&&r.serialize;let p;if(u?p=u(n,r):p=pe.isURLSearchParams(n)?n.toString():new Kk(n,r).toString(l),p){const f=i.indexOf("#");f!==-1&&(i=i.slice(0,f)),i+=(i.indexOf("?")===-1?"?":"&")+p}return i}class $2{constructor(){this.handlers=[]}use(n,r,l){return this.handlers.push({fulfilled:n,rejected:r,synchronous:l?l.synchronous:!1,runWhen:l?l.runWhen:null}),this.handlers.length-1}eject(n){this.handlers[n]&&(this.handlers[n]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(n){pe.forEach(this.handlers,function(l){l!==null&&n(l)})}}const xD={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},V8=typeof URLSearchParams<"u"?URLSearchParams:Kk,H8=typeof FormData<"u"?FormData:null,U8=typeof Blob<"u"?Blob:null,q8={isBrowser:!0,classes:{URLSearchParams:V8,FormData:H8,Blob:U8},protocols:["http","https","file","blob","url","data"]},Yk=typeof window<"u"&&typeof document<"u",G8=(i=>Yk&&["ReactNative","NativeScript","NS"].indexOf(i)<0)(typeof navigator<"u"&&navigator.product),W8=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",K8=Yk&&window.location.href||"http://localhost",Y8=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:Yk,hasStandardBrowserEnv:G8,hasStandardBrowserWebWorkerEnv:W8,origin:K8},Symbol.toStringTag,{value:"Module"})),Ti={...Y8,...q8};function Q8(i,n){return ff(i,new Ti.classes.URLSearchParams,Object.assign({visitor:function(r,l,u,p){return Ti.isNode&&pe.isBuffer(r)?(this.append(l,r.toString("base64")),!1):p.defaultVisitor.apply(this,arguments)}},n))}function Z8(i){return pe.matchAll(/\w+|\[(\w*)]/g,i).map(n=>n[0]==="[]"?"":n[1]||n[0])}function J8(i){const n={},r=Object.keys(i);let l;const u=r.length;let p;for(l=0;l<u;l++)p=r[l],n[p]=i[p];return n}function ED(i){function n(r,l,u,p){let f=r[p++];if(f==="__proto__")return!0;const b=Number.isFinite(+f),m=p>=r.length;return f=!f&&pe.isArray(u)?u.length:f,m?(pe.hasOwnProp(u,f)?u[f]=[u[f],l]:u[f]=l,!b):((!u[f]||!pe.isObject(u[f]))&&(u[f]=[]),n(r,l,u[f],p)&&pe.isArray(u[f])&&(u[f]=J8(u[f])),!b)}if(pe.isFormData(i)&&pe.isFunction(i.entries)){const r={};return pe.forEachEntry(i,(l,u)=>{n(Z8(l),u,r,0)}),r}return null}function X8(i,n,r){if(pe.isString(i))try{return(n||JSON.parse)(i),pe.trim(i)}catch(l){if(l.name!=="SyntaxError")throw l}return(r||JSON.stringify)(i)}const cu={transitional:xD,adapter:["xhr","http","fetch"],transformRequest:[function(n,r){const l=r.getContentType()||"",u=l.indexOf("application/json")>-1,p=pe.isObject(n);if(p&&pe.isHTMLForm(n)&&(n=new FormData(n)),pe.isFormData(n))return u?JSON.stringify(ED(n)):n;if(pe.isArrayBuffer(n)||pe.isBuffer(n)||pe.isStream(n)||pe.isFile(n)||pe.isBlob(n)||pe.isReadableStream(n))return n;if(pe.isArrayBufferView(n))return n.buffer;if(pe.isURLSearchParams(n))return r.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),n.toString();let b;if(p){if(l.indexOf("application/x-www-form-urlencoded")>-1)return Q8(n,this.formSerializer).toString();if((b=pe.isFileList(n))||l.indexOf("multipart/form-data")>-1){const m=this.env&&this.env.FormData;return ff(b?{"files[]":n}:n,m&&new m,this.formSerializer)}}return p||u?(r.setContentType("application/json",!1),X8(n)):n}],transformResponse:[function(n){const r=this.transitional||cu.transitional,l=r&&r.forcedJSONParsing,u=this.responseType==="json";if(pe.isResponse(n)||pe.isReadableStream(n))return n;if(n&&pe.isString(n)&&(l&&!this.responseType||u)){const f=!(r&&r.silentJSONParsing)&&u;try{return JSON.parse(n)}catch(b){if(f)throw b.name==="SyntaxError"?st.from(b,st.ERR_BAD_RESPONSE,this,null,this.response):b}}return n}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:Ti.classes.FormData,Blob:Ti.classes.Blob},validateStatus:function(n){return n>=200&&n<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};pe.forEach(["delete","get","head","post","put","patch"],i=>{cu.headers[i]={}});const e9=pe.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),t9=i=>{const n={};let r,l,u;return i&&i.split(`
`).forEach(function(f){u=f.indexOf(":"),r=f.substring(0,u).trim().toLowerCase(),l=f.substring(u+1).trim(),!(!r||n[r]&&e9[r])&&(r==="set-cookie"?n[r]?n[r].push(l):n[r]=[l]:n[r]=n[r]?n[r]+", "+l:l)}),n},V2=Symbol("internals");function xd(i){return i&&String(i).trim().toLowerCase()}function fp(i){return i===!1||i==null?i:pe.isArray(i)?i.map(fp):String(i)}function n9(i){const n=Object.create(null),r=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let l;for(;l=r.exec(i);)n[l[1]]=l[2];return n}const o9=i=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(i.trim());function Yg(i,n,r,l,u){if(pe.isFunction(l))return l.call(this,n,r);if(u&&(n=r),!!pe.isString(n)){if(pe.isString(l))return n.indexOf(l)!==-1;if(pe.isRegExp(l))return l.test(n)}}function i9(i){return i.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(n,r,l)=>r.toUpperCase()+l)}function r9(i,n){const r=pe.toCamelCase(" "+n);["get","set","has"].forEach(l=>{Object.defineProperty(i,l+r,{value:function(u,p,f){return this[l].call(this,n,u,p,f)},configurable:!0})})}class To{constructor(n){n&&this.set(n)}set(n,r,l){const u=this;function p(b,m,A){const v=xd(m);if(!v)throw new Error("header name must be a non-empty string");const x=pe.findKey(u,v);(!x||u[x]===void 0||A===!0||A===void 0&&u[x]!==!1)&&(u[x||m]=fp(b))}const f=(b,m)=>pe.forEach(b,(A,v)=>p(A,v,m));if(pe.isPlainObject(n)||n instanceof this.constructor)f(n,r);else if(pe.isString(n)&&(n=n.trim())&&!o9(n))f(t9(n),r);else if(pe.isHeaders(n))for(const[b,m]of n.entries())p(m,b,l);else n!=null&&p(r,n,l);return this}get(n,r){if(n=xd(n),n){const l=pe.findKey(this,n);if(l){const u=this[l];if(!r)return u;if(r===!0)return n9(u);if(pe.isFunction(r))return r.call(this,u,l);if(pe.isRegExp(r))return r.exec(u);throw new TypeError("parser must be boolean|regexp|function")}}}has(n,r){if(n=xd(n),n){const l=pe.findKey(this,n);return!!(l&&this[l]!==void 0&&(!r||Yg(this,this[l],l,r)))}return!1}delete(n,r){const l=this;let u=!1;function p(f){if(f=xd(f),f){const b=pe.findKey(l,f);b&&(!r||Yg(l,l[b],b,r))&&(delete l[b],u=!0)}}return pe.isArray(n)?n.forEach(p):p(n),u}clear(n){const r=Object.keys(this);let l=r.length,u=!1;for(;l--;){const p=r[l];(!n||Yg(this,this[p],p,n,!0))&&(delete this[p],u=!0)}return u}normalize(n){const r=this,l={};return pe.forEach(this,(u,p)=>{const f=pe.findKey(l,p);if(f){r[f]=fp(u),delete r[p];return}const b=n?i9(p):String(p).trim();b!==p&&delete r[p],r[b]=fp(u),l[b]=!0}),this}concat(...n){return this.constructor.concat(this,...n)}toJSON(n){const r=Object.create(null);return pe.forEach(this,(l,u)=>{l!=null&&l!==!1&&(r[u]=n&&pe.isArray(l)?l.join(", "):l)}),r}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([n,r])=>n+": "+r).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(n){return n instanceof this?n:new this(n)}static concat(n,...r){const l=new this(n);return r.forEach(u=>l.set(u)),l}static accessor(n){const l=(this[V2]=this[V2]={accessors:{}}).accessors,u=this.prototype;function p(f){const b=xd(f);l[b]||(r9(u,f),l[b]=!0)}return pe.isArray(n)?n.forEach(p):p(n),this}}To.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);pe.reduceDescriptors(To.prototype,({value:i},n)=>{let r=n[0].toUpperCase()+n.slice(1);return{get:()=>i,set(l){this[r]=l}}});pe.freezeMethods(To);function Qg(i,n){const r=this||cu,l=n||r,u=To.from(l.headers);let p=l.data;return pe.forEach(i,function(b){p=b.call(r,p,u.normalize(),n?n.status:void 0)}),u.normalize(),p}function SD(i){return!!(i&&i.__CANCEL__)}function ac(i,n,r){st.call(this,i??"canceled",st.ERR_CANCELED,n,r),this.name="CanceledError"}pe.inherits(ac,st,{__CANCEL__:!0});function TD(i,n,r){const l=r.config.validateStatus;!r.status||!l||l(r.status)?i(r):n(new st("Request failed with status code "+r.status,[st.ERR_BAD_REQUEST,st.ERR_BAD_RESPONSE][Math.floor(r.status/100)-4],r.config,r.request,r))}function s9(i){const n=/^([-+\w]{1,25})(:?\/\/|:)/.exec(i);return n&&n[1]||""}function a9(i,n){i=i||10;const r=new Array(i),l=new Array(i);let u=0,p=0,f;return n=n!==void 0?n:1e3,function(m){const A=Date.now(),v=l[p];f||(f=A),r[u]=m,l[u]=A;let x=p,C=0;for(;x!==u;)C+=r[x++],x=x%i;if(u=(u+1)%i,u===p&&(p=(p+1)%i),A-f<n)return;const E=v&&A-v;return E?Math.round(C*1e3/E):void 0}}function l9(i,n){let r=0;const l=1e3/n;let u=null;return function(){const f=this===!0,b=Date.now();if(f||b-r>l)return u&&(clearTimeout(u),u=null),r=b,i.apply(null,arguments);u||(u=setTimeout(()=>(u=null,r=Date.now(),i.apply(null,arguments)),l-(b-r)))}}const Tp=(i,n,r=3)=>{let l=0;const u=a9(50,250);return l9(p=>{const f=p.loaded,b=p.lengthComputable?p.total:void 0,m=f-l,A=u(m),v=f<=b;l=f;const x={loaded:f,total:b,progress:b?f/b:void 0,bytes:m,rate:A||void 0,estimated:A&&b&&v?(b-f)/A:void 0,event:p,lengthComputable:b!=null};x[n?"download":"upload"]=!0,i(x)},r)},c9=Ti.hasStandardBrowserEnv?function(){const n=/(msie|trident)/i.test(navigator.userAgent),r=document.createElement("a");let l;function u(p){let f=p;return n&&(r.setAttribute("href",f),f=r.href),r.setAttribute("href",f),{href:r.href,protocol:r.protocol?r.protocol.replace(/:$/,""):"",host:r.host,search:r.search?r.search.replace(/^\?/,""):"",hash:r.hash?r.hash.replace(/^#/,""):"",hostname:r.hostname,port:r.port,pathname:r.pathname.charAt(0)==="/"?r.pathname:"/"+r.pathname}}return l=u(window.location.href),function(f){const b=pe.isString(f)?u(f):f;return b.protocol===l.protocol&&b.host===l.host}}():function(){return function(){return!0}}(),d9=Ti.hasStandardBrowserEnv?{write(i,n,r,l,u,p){const f=[i+"="+encodeURIComponent(n)];pe.isNumber(r)&&f.push("expires="+new Date(r).toGMTString()),pe.isString(l)&&f.push("path="+l),pe.isString(u)&&f.push("domain="+u),p===!0&&f.push("secure"),document.cookie=f.join("; ")},read(i){const n=document.cookie.match(new RegExp("(^|;\\s*)("+i+")=([^;]*)"));return n?decodeURIComponent(n[3]):null},remove(i){this.write(i,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function u9(i){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(i)}function h9(i,n){return n?i.replace(/\/?\/$/,"")+"/"+n.replace(/^\/+/,""):i}function DD(i,n){return i&&!u9(n)?h9(i,n):n}const H2=i=>i instanceof To?{...i}:i;function xa(i,n){n=n||{};const r={};function l(A,v,x){return pe.isPlainObject(A)&&pe.isPlainObject(v)?pe.merge.call({caseless:x},A,v):pe.isPlainObject(v)?pe.merge({},v):pe.isArray(v)?v.slice():v}function u(A,v,x){if(pe.isUndefined(v)){if(!pe.isUndefined(A))return l(void 0,A,x)}else return l(A,v,x)}function p(A,v){if(!pe.isUndefined(v))return l(void 0,v)}function f(A,v){if(pe.isUndefined(v)){if(!pe.isUndefined(A))return l(void 0,A)}else return l(void 0,v)}function b(A,v,x){if(x in n)return l(A,v);if(x in i)return l(void 0,A)}const m={url:p,method:p,data:p,baseURL:f,transformRequest:f,transformResponse:f,paramsSerializer:f,timeout:f,timeoutMessage:f,withCredentials:f,withXSRFToken:f,adapter:f,responseType:f,xsrfCookieName:f,xsrfHeaderName:f,onUploadProgress:f,onDownloadProgress:f,decompress:f,maxContentLength:f,maxBodyLength:f,beforeRedirect:f,transport:f,httpAgent:f,httpsAgent:f,cancelToken:f,socketPath:f,responseEncoding:f,validateStatus:b,headers:(A,v)=>u(H2(A),H2(v),!0)};return pe.forEach(Object.keys(Object.assign({},i,n)),function(v){const x=m[v]||u,C=x(i[v],n[v],v);pe.isUndefined(C)&&x!==b||(r[v]=C)}),r}const ID=i=>{const n=xa({},i);let{data:r,withXSRFToken:l,xsrfHeaderName:u,xsrfCookieName:p,headers:f,auth:b}=n;n.headers=f=To.from(f),n.url=yD(DD(n.baseURL,n.url),i.params,i.paramsSerializer),b&&f.set("Authorization","Basic "+btoa((b.username||"")+":"+(b.password?unescape(encodeURIComponent(b.password)):"")));let m;if(pe.isFormData(r)){if(Ti.hasStandardBrowserEnv||Ti.hasStandardBrowserWebWorkerEnv)f.setContentType(void 0);else if((m=f.getContentType())!==!1){const[A,...v]=m?m.split(";").map(x=>x.trim()).filter(Boolean):[];f.setContentType([A||"multipart/form-data",...v].join("; "))}}if(Ti.hasStandardBrowserEnv&&(l&&pe.isFunction(l)&&(l=l(n)),l||l!==!1&&c9(n.url))){const A=u&&p&&d9.read(p);A&&f.set(u,A)}return n},p9=typeof XMLHttpRequest<"u",f9=p9&&function(i){return new Promise(function(r,l){const u=ID(i);let p=u.data;const f=To.from(u.headers).normalize();let{responseType:b}=u,m;function A(){u.cancelToken&&u.cancelToken.unsubscribe(m),u.signal&&u.signal.removeEventListener("abort",m)}let v=new XMLHttpRequest;v.open(u.method.toUpperCase(),u.url,!0),v.timeout=u.timeout;function x(){if(!v)return;const E=To.from("getAllResponseHeaders"in v&&v.getAllResponseHeaders()),I={data:!b||b==="text"||b==="json"?v.responseText:v.response,status:v.status,statusText:v.statusText,headers:E,config:i,request:v};TD(function(N){r(N),A()},function(N){l(N),A()},I),v=null}"onloadend"in v?v.onloadend=x:v.onreadystatechange=function(){!v||v.readyState!==4||v.status===0&&!(v.responseURL&&v.responseURL.indexOf("file:")===0)||setTimeout(x)},v.onabort=function(){v&&(l(new st("Request aborted",st.ECONNABORTED,u,v)),v=null)},v.onerror=function(){l(new st("Network Error",st.ERR_NETWORK,u,v)),v=null},v.ontimeout=function(){let T=u.timeout?"timeout of "+u.timeout+"ms exceeded":"timeout exceeded";const I=u.transitional||xD;u.timeoutErrorMessage&&(T=u.timeoutErrorMessage),l(new st(T,I.clarifyTimeoutError?st.ETIMEDOUT:st.ECONNABORTED,u,v)),v=null},p===void 0&&f.setContentType(null),"setRequestHeader"in v&&pe.forEach(f.toJSON(),function(T,I){v.setRequestHeader(I,T)}),pe.isUndefined(u.withCredentials)||(v.withCredentials=!!u.withCredentials),b&&b!=="json"&&(v.responseType=u.responseType),typeof u.onDownloadProgress=="function"&&v.addEventListener("progress",Tp(u.onDownloadProgress,!0)),typeof u.onUploadProgress=="function"&&v.upload&&v.upload.addEventListener("progress",Tp(u.onUploadProgress)),(u.cancelToken||u.signal)&&(m=E=>{v&&(l(!E||E.type?new ac(null,i,v):E),v.abort(),v=null)},u.cancelToken&&u.cancelToken.subscribe(m),u.signal&&(u.signal.aborted?m():u.signal.addEventListener("abort",m)));const C=s9(u.url);if(C&&Ti.protocols.indexOf(C)===-1){l(new st("Unsupported protocol "+C+":",st.ERR_BAD_REQUEST,i));return}v.send(p||null)})},m9=(i,n)=>{let r=new AbortController,l;const u=function(m){if(!l){l=!0,f();const A=m instanceof Error?m:this.reason;r.abort(A instanceof st?A:new ac(A instanceof Error?A.message:A))}};let p=n&&setTimeout(()=>{u(new st(`timeout ${n} of ms exceeded`,st.ETIMEDOUT))},n);const f=()=>{i&&(p&&clearTimeout(p),p=null,i.forEach(m=>{m&&(m.removeEventListener?m.removeEventListener("abort",u):m.unsubscribe(u))}),i=null)};i.forEach(m=>m&&m.addEventListener&&m.addEventListener("abort",u));const{signal:b}=r;return b.unsubscribe=f,[b,()=>{p&&clearTimeout(p),p=null}]},g9=function*(i,n){let r=i.byteLength;if(!n||r<n){yield i;return}let l=0,u;for(;l<r;)u=l+n,yield i.slice(l,u),l=u},b9=async function*(i,n,r){for await(const l of i)yield*g9(ArrayBuffer.isView(l)?l:await r(String(l)),n)},U2=(i,n,r,l,u)=>{const p=b9(i,n,u);let f=0;return new ReadableStream({type:"bytes",async pull(b){const{done:m,value:A}=await p.next();if(m){b.close(),l();return}let v=A.byteLength;r&&r(f+=v),b.enqueue(new Uint8Array(A))},cancel(b){return l(b),p.return()}},{highWaterMark:2})},q2=(i,n)=>{const r=i!=null;return l=>setTimeout(()=>n({lengthComputable:r,total:i,loaded:l}))},mf=typeof fetch=="function"&&typeof Request=="function"&&typeof Response=="function",MD=mf&&typeof ReadableStream=="function",Jb=mf&&(typeof TextEncoder=="function"?(i=>n=>i.encode(n))(new TextEncoder):async i=>new Uint8Array(await new Response(i).arrayBuffer())),k9=MD&&(()=>{let i=!1;const n=new Request(Ti.origin,{body:new ReadableStream,method:"POST",get duplex(){return i=!0,"half"}}).headers.has("Content-Type");return i&&!n})(),G2=64*1024,Xb=MD&&!!(()=>{try{return pe.isReadableStream(new Response("").body)}catch{}})(),Dp={stream:Xb&&(i=>i.body)};mf&&(i=>{["text","arrayBuffer","blob","formData","stream"].forEach(n=>{!Dp[n]&&(Dp[n]=pe.isFunction(i[n])?r=>r[n]():(r,l)=>{throw new st(`Response type '${n}' is not supported`,st.ERR_NOT_SUPPORT,l)})})})(new Response);const _9=async i=>{if(i==null)return 0;if(pe.isBlob(i))return i.size;if(pe.isSpecCompliantForm(i))return(await new Request(i).arrayBuffer()).byteLength;if(pe.isArrayBufferView(i))return i.byteLength;if(pe.isURLSearchParams(i)&&(i=i+""),pe.isString(i))return(await Jb(i)).byteLength},w9=async(i,n)=>{const r=pe.toFiniteNumber(i.getContentLength());return r??_9(n)},v9=mf&&(async i=>{let{url:n,method:r,data:l,signal:u,cancelToken:p,timeout:f,onDownloadProgress:b,onUploadProgress:m,responseType:A,headers:v,withCredentials:x="same-origin",fetchOptions:C}=ID(i);A=A?(A+"").toLowerCase():"text";let[E,T]=u||p||f?m9([u,p],f):[],I,F;const N=()=>{!I&&setTimeout(()=>{E&&E.unsubscribe()}),I=!0};let L;try{if(m&&k9&&r!=="get"&&r!=="head"&&(L=await w9(v,l))!==0){let W=new Request(n,{method:"POST",body:l,duplex:"half"}),P;pe.isFormData(l)&&(P=W.headers.get("content-type"))&&v.setContentType(P),W.body&&(l=U2(W.body,G2,q2(L,Tp(m)),null,Jb))}pe.isString(x)||(x=x?"cors":"omit"),F=new Request(n,{...C,signal:E,method:r.toUpperCase(),headers:v.normalize().toJSON(),body:l,duplex:"half",withCredentials:x});let B=await fetch(F);const z=Xb&&(A==="stream"||A==="response");if(Xb&&(b||z)){const W={};["status","statusText","headers"].forEach(H=>{W[H]=B[H]});const P=pe.toFiniteNumber(B.headers.get("content-length"));B=new Response(U2(B.body,G2,b&&q2(P,Tp(b,!0)),z&&N,Jb),W)}A=A||"text";let U=await Dp[pe.findKey(Dp,A)||"text"](B,i);return!z&&N(),T&&T(),await new Promise((W,P)=>{TD(W,P,{data:U,headers:To.from(B.headers),status:B.status,statusText:B.statusText,config:i,request:F})})}catch(B){throw N(),B&&B.name==="TypeError"&&/fetch/i.test(B.message)?Object.assign(new st("Network Error",st.ERR_NETWORK,i,F),{cause:B.cause||B}):st.from(B,B&&B.code,i,F)}}),ek={http:F8,xhr:f9,fetch:v9};pe.forEach(ek,(i,n)=>{if(i){try{Object.defineProperty(i,"name",{value:n})}catch{}Object.defineProperty(i,"adapterName",{value:n})}});const W2=i=>`- ${i}`,A9=i=>pe.isFunction(i)||i===null||i===!1,OD={getAdapter:i=>{i=pe.isArray(i)?i:[i];const{length:n}=i;let r,l;const u={};for(let p=0;p<n;p++){r=i[p];let f;if(l=r,!A9(r)&&(l=ek[(f=String(r)).toLowerCase()],l===void 0))throw new st(`Unknown adapter '${f}'`);if(l)break;u[f||"#"+p]=l}if(!l){const p=Object.entries(u).map(([b,m])=>`adapter ${b} `+(m===!1?"is not supported by the environment":"is not available in the build"));let f=n?p.length>1?`since :
`+p.map(W2).join(`
`):" "+W2(p[0]):"as no adapter specified";throw new st("There is no suitable adapter to dispatch the request "+f,"ERR_NOT_SUPPORT")}return l},adapters:ek};function Zg(i){if(i.cancelToken&&i.cancelToken.throwIfRequested(),i.signal&&i.signal.aborted)throw new ac(null,i)}function K2(i){return Zg(i),i.headers=To.from(i.headers),i.data=Qg.call(i,i.transformRequest),["post","put","patch"].indexOf(i.method)!==-1&&i.headers.setContentType("application/x-www-form-urlencoded",!1),OD.getAdapter(i.adapter||cu.adapter)(i).then(function(l){return Zg(i),l.data=Qg.call(i,i.transformResponse,l),l.headers=To.from(l.headers),l},function(l){return SD(l)||(Zg(i),l&&l.response&&(l.response.data=Qg.call(i,i.transformResponse,l.response),l.response.headers=To.from(l.response.headers))),Promise.reject(l)})}const BD="1.7.2",Qk={};["object","boolean","number","function","string","symbol"].forEach((i,n)=>{Qk[i]=function(l){return typeof l===i||"a"+(n<1?"n ":" ")+i}});const Y2={};Qk.transitional=function(n,r,l){function u(p,f){return"[Axios v"+BD+"] Transitional option '"+p+"'"+f+(l?". "+l:"")}return(p,f,b)=>{if(n===!1)throw new st(u(f," has been removed"+(r?" in "+r:"")),st.ERR_DEPRECATED);return r&&!Y2[f]&&(Y2[f]=!0,console.warn(u(f," has been deprecated since v"+r+" and will be removed in the near future"))),n?n(p,f,b):!0}};function C9(i,n,r){if(typeof i!="object")throw new st("options must be an object",st.ERR_BAD_OPTION_VALUE);const l=Object.keys(i);let u=l.length;for(;u-- >0;){const p=l[u],f=n[p];if(f){const b=i[p],m=b===void 0||f(b,p,i);if(m!==!0)throw new st("option "+p+" must be "+m,st.ERR_BAD_OPTION_VALUE);continue}if(r!==!0)throw new st("Unknown option "+p,st.ERR_BAD_OPTION)}}const tk={assertOptions:C9,validators:Qk},Xr=tk.validators;class ga{constructor(n){this.defaults=n,this.interceptors={request:new $2,response:new $2}}async request(n,r){try{return await this._request(n,r)}catch(l){if(l instanceof Error){let u;Error.captureStackTrace?Error.captureStackTrace(u={}):u=new Error;const p=u.stack?u.stack.replace(/^.+\n/,""):"";try{l.stack?p&&!String(l.stack).endsWith(p.replace(/^.+\n.+\n/,""))&&(l.stack+=`
`+p):l.stack=p}catch{}}throw l}}_request(n,r){typeof n=="string"?(r=r||{},r.url=n):r=n||{},r=xa(this.defaults,r);const{transitional:l,paramsSerializer:u,headers:p}=r;l!==void 0&&tk.assertOptions(l,{silentJSONParsing:Xr.transitional(Xr.boolean),forcedJSONParsing:Xr.transitional(Xr.boolean),clarifyTimeoutError:Xr.transitional(Xr.boolean)},!1),u!=null&&(pe.isFunction(u)?r.paramsSerializer={serialize:u}:tk.assertOptions(u,{encode:Xr.function,serialize:Xr.function},!0)),r.method=(r.method||this.defaults.method||"get").toLowerCase();let f=p&&pe.merge(p.common,p[r.method]);p&&pe.forEach(["delete","get","head","post","put","patch","common"],T=>{delete p[T]}),r.headers=To.concat(f,p);const b=[];let m=!0;this.interceptors.request.forEach(function(I){typeof I.runWhen=="function"&&I.runWhen(r)===!1||(m=m&&I.synchronous,b.unshift(I.fulfilled,I.rejected))});const A=[];this.interceptors.response.forEach(function(I){A.push(I.fulfilled,I.rejected)});let v,x=0,C;if(!m){const T=[K2.bind(this),void 0];for(T.unshift.apply(T,b),T.push.apply(T,A),C=T.length,v=Promise.resolve(r);x<C;)v=v.then(T[x++],T[x++]);return v}C=b.length;let E=r;for(x=0;x<C;){const T=b[x++],I=b[x++];try{E=T(E)}catch(F){I.call(this,F);break}}try{v=K2.call(this,E)}catch(T){return Promise.reject(T)}for(x=0,C=A.length;x<C;)v=v.then(A[x++],A[x++]);return v}getUri(n){n=xa(this.defaults,n);const r=DD(n.baseURL,n.url);return yD(r,n.params,n.paramsSerializer)}}pe.forEach(["delete","get","head","options"],function(n){ga.prototype[n]=function(r,l){return this.request(xa(l||{},{method:n,url:r,data:(l||{}).data}))}});pe.forEach(["post","put","patch"],function(n){function r(l){return function(p,f,b){return this.request(xa(b||{},{method:n,headers:l?{"Content-Type":"multipart/form-data"}:{},url:p,data:f}))}}ga.prototype[n]=r(),ga.prototype[n+"Form"]=r(!0)});class Zk{constructor(n){if(typeof n!="function")throw new TypeError("executor must be a function.");let r;this.promise=new Promise(function(p){r=p});const l=this;this.promise.then(u=>{if(!l._listeners)return;let p=l._listeners.length;for(;p-- >0;)l._listeners[p](u);l._listeners=null}),this.promise.then=u=>{let p;const f=new Promise(b=>{l.subscribe(b),p=b}).then(u);return f.cancel=function(){l.unsubscribe(p)},f},n(function(p,f,b){l.reason||(l.reason=new ac(p,f,b),r(l.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(n){if(this.reason){n(this.reason);return}this._listeners?this._listeners.push(n):this._listeners=[n]}unsubscribe(n){if(!this._listeners)return;const r=this._listeners.indexOf(n);r!==-1&&this._listeners.splice(r,1)}static source(){let n;return{token:new Zk(function(u){n=u}),cancel:n}}}function y9(i){return function(r){return i.apply(null,r)}}function x9(i){return pe.isObject(i)&&i.isAxiosError===!0}const nk={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(nk).forEach(([i,n])=>{nk[n]=i});function PD(i){const n=new ga(i),r=hD(ga.prototype.request,n);return pe.extend(r,ga.prototype,n,{allOwnKeys:!0}),pe.extend(r,n,null,{allOwnKeys:!0}),r.create=function(u){return PD(xa(i,u))},r}const dn=PD(cu);dn.Axios=ga;dn.CanceledError=ac;dn.CancelToken=Zk;dn.isCancel=SD;dn.VERSION=BD;dn.toFormData=ff;dn.AxiosError=st;dn.Cancel=dn.CanceledError;dn.all=function(n){return Promise.all(n)};dn.spread=y9;dn.isAxiosError=x9;dn.mergeConfig=xa;dn.AxiosHeaders=To;dn.formToJSON=i=>ED(pe.isHTMLForm(i)?new FormData(i):i);dn.getAdapter=OD.getAdapter;dn.HttpStatusCode=nk;dn.default=dn;var wn=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Pa(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}function ND(i){if(i.__esModule)return i;var n=i.default;if(typeof n=="function"){var r=function l(){return this instanceof l?Reflect.construct(n,arguments,this.constructor):n.apply(this,arguments)};r.prototype=n.prototype}else r={};return Object.defineProperty(r,"__esModule",{value:!0}),Object.keys(i).forEach(function(l){var u=Object.getOwnPropertyDescriptor(i,l);Object.defineProperty(r,l,u.get?u:{enumerable:!0,get:function(){return i[l]}})}),r}var E9=function(n){return S9(n)&&!T9(n)};function S9(i){return!!i&&typeof i=="object"}function T9(i){var n=Object.prototype.toString.call(i);return n==="[object RegExp]"||n==="[object Date]"||M9(i)}var D9=typeof Symbol=="function"&&Symbol.for,I9=D9?Symbol.for("react.element"):60103;function M9(i){return i.$$typeof===I9}function O9(i){return Array.isArray(i)?[]:{}}function Zd(i,n){return n.clone!==!1&&n.isMergeableObject(i)?Hl(O9(i),i,n):i}function B9(i,n,r){return i.concat(n).map(function(l){return Zd(l,r)})}function P9(i,n){if(!n.customMerge)return Hl;var r=n.customMerge(i);return typeof r=="function"?r:Hl}function N9(i){return Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(i).filter(function(n){return Object.propertyIsEnumerable.call(i,n)}):[]}function Q2(i){return Object.keys(i).concat(N9(i))}function LD(i,n){try{return n in i}catch{return!1}}function L9(i,n){return LD(i,n)&&!(Object.hasOwnProperty.call(i,n)&&Object.propertyIsEnumerable.call(i,n))}function R9(i,n,r){var l={};return r.isMergeableObject(i)&&Q2(i).forEach(function(u){l[u]=Zd(i[u],r)}),Q2(n).forEach(function(u){L9(i,u)||(LD(i,u)&&r.isMergeableObject(n[u])?l[u]=P9(u,r)(i[u],n[u],r):l[u]=Zd(n[u],r))}),l}function Hl(i,n,r){r=r||{},r.arrayMerge=r.arrayMerge||B9,r.isMergeableObject=r.isMergeableObject||E9,r.cloneUnlessOtherwiseSpecified=Zd;var l=Array.isArray(n),u=Array.isArray(i),p=l===u;return p?l?r.arrayMerge(i,n,r):R9(i,n,r):Zd(n,r)}Hl.all=function(n,r){if(!Array.isArray(n))throw new Error("first argument should be an array");return n.reduce(function(l,u){return Hl(l,u,r)},{})};var F9=Hl,z9=F9;const j9=Pa(z9);var $9=Error,V9=EvalError,H9=RangeError,U9=ReferenceError,RD=SyntaxError,du=TypeError,q9=URIError,G9=function(){if(typeof Symbol!="function"||typeof Object.getOwnPropertySymbols!="function")return!1;if(typeof Symbol.iterator=="symbol")return!0;var n={},r=Symbol("test"),l=Object(r);if(typeof r=="string"||Object.prototype.toString.call(r)!=="[object Symbol]"||Object.prototype.toString.call(l)!=="[object Symbol]")return!1;var u=42;n[r]=u;for(r in n)return!1;if(typeof Object.keys=="function"&&Object.keys(n).length!==0||typeof Object.getOwnPropertyNames=="function"&&Object.getOwnPropertyNames(n).length!==0)return!1;var p=Object.getOwnPropertySymbols(n);if(p.length!==1||p[0]!==r||!Object.prototype.propertyIsEnumerable.call(n,r))return!1;if(typeof Object.getOwnPropertyDescriptor=="function"){var f=Object.getOwnPropertyDescriptor(n,r);if(f.value!==u||f.enumerable!==!0)return!1}return!0},Z2=typeof Symbol<"u"&&Symbol,W9=G9,K9=function(){return typeof Z2!="function"||typeof Symbol!="function"||typeof Z2("foo")!="symbol"||typeof Symbol("bar")!="symbol"?!1:W9()},Jg={__proto__:null,foo:{}},Y9=Object,Q9=function(){return{__proto__:Jg}.foo===Jg.foo&&!(Jg instanceof Y9)},Z9="Function.prototype.bind called on incompatible ",J9=Object.prototype.toString,X9=Math.max,e$="[object Function]",J2=function(n,r){for(var l=[],u=0;u<n.length;u+=1)l[u]=n[u];for(var p=0;p<r.length;p+=1)l[p+n.length]=r[p];return l},t$=function(n,r){for(var l=[],u=r,p=0;u<n.length;u+=1,p+=1)l[p]=n[u];return l},n$=function(i,n){for(var r="",l=0;l<i.length;l+=1)r+=i[l],l+1<i.length&&(r+=n);return r},o$=function(n){var r=this;if(typeof r!="function"||J9.apply(r)!==e$)throw new TypeError(Z9+r);for(var l=t$(arguments,1),u,p=function(){if(this instanceof u){var v=r.apply(this,J2(l,arguments));return Object(v)===v?v:this}return r.apply(n,J2(l,arguments))},f=X9(0,r.length-l.length),b=[],m=0;m<f;m++)b[m]="$"+m;if(u=Function("binder","return function ("+n$(b,",")+"){ return binder.apply(this,arguments); }")(p),r.prototype){var A=function(){};A.prototype=r.prototype,u.prototype=new A,A.prototype=null}return u},i$=o$,Jk=Function.prototype.bind||i$,r$=Function.prototype.call,s$=Object.prototype.hasOwnProperty,a$=Jk,l$=a$.call(r$,s$),bt,c$=$9,d$=V9,u$=H9,h$=U9,Ul=RD,Ol=du,p$=q9,FD=Function,Xg=function(i){try{return FD('"use strict"; return ('+i+").constructor;")()}catch{}},ba=Object.getOwnPropertyDescriptor;if(ba)try{ba({},"")}catch{ba=null}var eb=function(){throw new Ol},f$=ba?function(){try{return arguments.callee,eb}catch{try{return ba(arguments,"callee").get}catch{return eb}}}():eb,_l=K9(),m$=Q9(),Nn=Object.getPrototypeOf||(m$?function(i){return i.__proto__}:null),xl={},g$=typeof Uint8Array>"u"||!Nn?bt:Nn(Uint8Array),ka={__proto__:null,"%AggregateError%":typeof AggregateError>"u"?bt:AggregateError,"%Array%":Array,"%ArrayBuffer%":typeof ArrayBuffer>"u"?bt:ArrayBuffer,"%ArrayIteratorPrototype%":_l&&Nn?Nn([][Symbol.iterator]()):bt,"%AsyncFromSyncIteratorPrototype%":bt,"%AsyncFunction%":xl,"%AsyncGenerator%":xl,"%AsyncGeneratorFunction%":xl,"%AsyncIteratorPrototype%":xl,"%Atomics%":typeof Atomics>"u"?bt:Atomics,"%BigInt%":typeof BigInt>"u"?bt:BigInt,"%BigInt64Array%":typeof BigInt64Array>"u"?bt:BigInt64Array,"%BigUint64Array%":typeof BigUint64Array>"u"?bt:BigUint64Array,"%Boolean%":Boolean,"%DataView%":typeof DataView>"u"?bt:DataView,"%Date%":Date,"%decodeURI%":decodeURI,"%decodeURIComponent%":decodeURIComponent,"%encodeURI%":encodeURI,"%encodeURIComponent%":encodeURIComponent,"%Error%":c$,"%eval%":eval,"%EvalError%":d$,"%Float32Array%":typeof Float32Array>"u"?bt:Float32Array,"%Float64Array%":typeof Float64Array>"u"?bt:Float64Array,"%FinalizationRegistry%":typeof FinalizationRegistry>"u"?bt:FinalizationRegistry,"%Function%":FD,"%GeneratorFunction%":xl,"%Int8Array%":typeof Int8Array>"u"?bt:Int8Array,"%Int16Array%":typeof Int16Array>"u"?bt:Int16Array,"%Int32Array%":typeof Int32Array>"u"?bt:Int32Array,"%isFinite%":isFinite,"%isNaN%":isNaN,"%IteratorPrototype%":_l&&Nn?Nn(Nn([][Symbol.iterator]())):bt,"%JSON%":typeof JSON=="object"?JSON:bt,"%Map%":typeof Map>"u"?bt:Map,"%MapIteratorPrototype%":typeof Map>"u"||!_l||!Nn?bt:Nn(new Map()[Symbol.iterator]()),"%Math%":Math,"%Number%":Number,"%Object%":Object,"%parseFloat%":parseFloat,"%parseInt%":parseInt,"%Promise%":typeof Promise>"u"?bt:Promise,"%Proxy%":typeof Proxy>"u"?bt:Proxy,"%RangeError%":u$,"%ReferenceError%":h$,"%Reflect%":typeof Reflect>"u"?bt:Reflect,"%RegExp%":RegExp,"%Set%":typeof Set>"u"?bt:Set,"%SetIteratorPrototype%":typeof Set>"u"||!_l||!Nn?bt:Nn(new Set()[Symbol.iterator]()),"%SharedArrayBuffer%":typeof SharedArrayBuffer>"u"?bt:SharedArrayBuffer,"%String%":String,"%StringIteratorPrototype%":_l&&Nn?Nn(""[Symbol.iterator]()):bt,"%Symbol%":_l?Symbol:bt,"%SyntaxError%":Ul,"%ThrowTypeError%":f$,"%TypedArray%":g$,"%TypeError%":Ol,"%Uint8Array%":typeof Uint8Array>"u"?bt:Uint8Array,"%Uint8ClampedArray%":typeof Uint8ClampedArray>"u"?bt:Uint8ClampedArray,"%Uint16Array%":typeof Uint16Array>"u"?bt:Uint16Array,"%Uint32Array%":typeof Uint32Array>"u"?bt:Uint32Array,"%URIError%":p$,"%WeakMap%":typeof WeakMap>"u"?bt:WeakMap,"%WeakRef%":typeof WeakRef>"u"?bt:WeakRef,"%WeakSet%":typeof WeakSet>"u"?bt:WeakSet};if(Nn)try{null.error}catch(i){var b$=Nn(Nn(i));ka["%Error.prototype%"]=b$}var k$=function i(n){var r;if(n==="%AsyncFunction%")r=Xg("async function () {}");else if(n==="%GeneratorFunction%")r=Xg("function* () {}");else if(n==="%AsyncGeneratorFunction%")r=Xg("async function* () {}");else if(n==="%AsyncGenerator%"){var l=i("%AsyncGeneratorFunction%");l&&(r=l.prototype)}else if(n==="%AsyncIteratorPrototype%"){var u=i("%AsyncGenerator%");u&&Nn&&(r=Nn(u.prototype))}return ka[n]=r,r},X2={__proto__:null,"%ArrayBufferPrototype%":["ArrayBuffer","prototype"],"%ArrayPrototype%":["Array","prototype"],"%ArrayProto_entries%":["Array","prototype","entries"],"%ArrayProto_forEach%":["Array","prototype","forEach"],"%ArrayProto_keys%":["Array","prototype","keys"],"%ArrayProto_values%":["Array","prototype","values"],"%AsyncFunctionPrototype%":["AsyncFunction","prototype"],"%AsyncGenerator%":["AsyncGeneratorFunction","prototype"],"%AsyncGeneratorPrototype%":["AsyncGeneratorFunction","prototype","prototype"],"%BooleanPrototype%":["Boolean","prototype"],"%DataViewPrototype%":["DataView","prototype"],"%DatePrototype%":["Date","prototype"],"%ErrorPrototype%":["Error","prototype"],"%EvalErrorPrototype%":["EvalError","prototype"],"%Float32ArrayPrototype%":["Float32Array","prototype"],"%Float64ArrayPrototype%":["Float64Array","prototype"],"%FunctionPrototype%":["Function","prototype"],"%Generator%":["GeneratorFunction","prototype"],"%GeneratorPrototype%":["GeneratorFunction","prototype","prototype"],"%Int8ArrayPrototype%":["Int8Array","prototype"],"%Int16ArrayPrototype%":["Int16Array","prototype"],"%Int32ArrayPrototype%":["Int32Array","prototype"],"%JSONParse%":["JSON","parse"],"%JSONStringify%":["JSON","stringify"],"%MapPrototype%":["Map","prototype"],"%NumberPrototype%":["Number","prototype"],"%ObjectPrototype%":["Object","prototype"],"%ObjProto_toString%":["Object","prototype","toString"],"%ObjProto_valueOf%":["Object","prototype","valueOf"],"%PromisePrototype%":["Promise","prototype"],"%PromiseProto_then%":["Promise","prototype","then"],"%Promise_all%":["Promise","all"],"%Promise_reject%":["Promise","reject"],"%Promise_resolve%":["Promise","resolve"],"%RangeErrorPrototype%":["RangeError","prototype"],"%ReferenceErrorPrototype%":["ReferenceError","prototype"],"%RegExpPrototype%":["RegExp","prototype"],"%SetPrototype%":["Set","prototype"],"%SharedArrayBufferPrototype%":["SharedArrayBuffer","prototype"],"%StringPrototype%":["String","prototype"],"%SymbolPrototype%":["Symbol","prototype"],"%SyntaxErrorPrototype%":["SyntaxError","prototype"],"%TypedArrayPrototype%":["TypedArray","prototype"],"%TypeErrorPrototype%":["TypeError","prototype"],"%Uint8ArrayPrototype%":["Uint8Array","prototype"],"%Uint8ClampedArrayPrototype%":["Uint8ClampedArray","prototype"],"%Uint16ArrayPrototype%":["Uint16Array","prototype"],"%Uint32ArrayPrototype%":["Uint32Array","prototype"],"%URIErrorPrototype%":["URIError","prototype"],"%WeakMapPrototype%":["WeakMap","prototype"],"%WeakSetPrototype%":["WeakSet","prototype"]},uu=Jk,Ip=l$,_$=uu.call(Function.call,Array.prototype.concat),w$=uu.call(Function.apply,Array.prototype.splice),eS=uu.call(Function.call,String.prototype.replace),Mp=uu.call(Function.call,String.prototype.slice),v$=uu.call(Function.call,RegExp.prototype.exec),A$=/[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g,C$=/\\(\\)?/g,y$=function(n){var r=Mp(n,0,1),l=Mp(n,-1);if(r==="%"&&l!=="%")throw new Ul("invalid intrinsic syntax, expected closing `%`");if(l==="%"&&r!=="%")throw new Ul("invalid intrinsic syntax, expected opening `%`");var u=[];return eS(n,A$,function(p,f,b,m){u[u.length]=b?eS(m,C$,"$1"):f||p}),u},x$=function(n,r){var l=n,u;if(Ip(X2,l)&&(u=X2[l],l="%"+u[0]+"%"),Ip(ka,l)){var p=ka[l];if(p===xl&&(p=k$(l)),typeof p>"u"&&!r)throw new Ol("intrinsic "+n+" exists, but is not available. Please file an issue!");return{alias:u,name:l,value:p}}throw new Ul("intrinsic "+n+" does not exist!")},lc=function(n,r){if(typeof n!="string"||n.length===0)throw new Ol("intrinsic name must be a non-empty string");if(arguments.length>1&&typeof r!="boolean")throw new Ol('"allowMissing" argument must be a boolean');if(v$(/^%?[^%]*%?$/,n)===null)throw new Ul("`%` may not be present anywhere but at the beginning and end of the intrinsic name");var l=y$(n),u=l.length>0?l[0]:"",p=x$("%"+u+"%",r),f=p.name,b=p.value,m=!1,A=p.alias;A&&(u=A[0],w$(l,_$([0,1],A)));for(var v=1,x=!0;v<l.length;v+=1){var C=l[v],E=Mp(C,0,1),T=Mp(C,-1);if((E==='"'||E==="'"||E==="`"||T==='"'||T==="'"||T==="`")&&E!==T)throw new Ul("property names with quotes must have matching quotes");if((C==="constructor"||!x)&&(m=!0),u+="."+C,f="%"+u+"%",Ip(ka,f))b=ka[f];else if(b!=null){if(!(C in b)){if(!r)throw new Ol("base intrinsic for "+n+" exists, but the property is not available.");return}if(ba&&v+1>=l.length){var I=ba(b,C);x=!!I,x&&"get"in I&&!("originalValue"in I.get)?b=I.get:b=b[C]}else x=Ip(b,C),b=b[C];x&&!m&&(ka[f]=b)}}return b},zD={exports:{}},tb,tS;function Xk(){if(tS)return tb;tS=1;var i=lc,n=i("%Object.defineProperty%",!0)||!1;if(n)try{n({},"a",{value:1})}catch{n=!1}return tb=n,tb}var E$=lc,mp=E$("%Object.getOwnPropertyDescriptor%",!0);if(mp)try{mp([],"length")}catch{mp=null}var jD=mp,nS=Xk(),S$=RD,wl=du,oS=jD,T$=function(n,r,l){if(!n||typeof n!="object"&&typeof n!="function")throw new wl("`obj` must be an object or a function`");if(typeof r!="string"&&typeof r!="symbol")throw new wl("`property` must be a string or a symbol`");if(arguments.length>3&&typeof arguments[3]!="boolean"&&arguments[3]!==null)throw new wl("`nonEnumerable`, if provided, must be a boolean or null");if(arguments.length>4&&typeof arguments[4]!="boolean"&&arguments[4]!==null)throw new wl("`nonWritable`, if provided, must be a boolean or null");if(arguments.length>5&&typeof arguments[5]!="boolean"&&arguments[5]!==null)throw new wl("`nonConfigurable`, if provided, must be a boolean or null");if(arguments.length>6&&typeof arguments[6]!="boolean")throw new wl("`loose`, if provided, must be a boolean");var u=arguments.length>3?arguments[3]:null,p=arguments.length>4?arguments[4]:null,f=arguments.length>5?arguments[5]:null,b=arguments.length>6?arguments[6]:!1,m=!!oS&&oS(n,r);if(nS)nS(n,r,{configurable:f===null&&m?m.configurable:!f,enumerable:u===null&&m?m.enumerable:!u,value:l,writable:p===null&&m?m.writable:!p});else if(b||!u&&!p&&!f)n[r]=l;else throw new S$("This environment does not support defining a property as non-configurable, non-writable, or non-enumerable.")},ok=Xk(),$D=function(){return!!ok};$D.hasArrayLengthDefineBug=function(){if(!ok)return null;try{return ok([],"length",{value:1}).length!==1}catch{return!0}};var D$=$D,I$=lc,iS=T$,M$=D$(),rS=jD,sS=du,O$=I$("%Math.floor%"),B$=function(n,r){if(typeof n!="function")throw new sS("`fn` is not a function");if(typeof r!="number"||r<0||r>4294967295||O$(r)!==r)throw new sS("`length` must be a positive 32-bit integer");var l=arguments.length>2&&!!arguments[2],u=!0,p=!0;if("length"in n&&rS){var f=rS(n,"length");f&&!f.configurable&&(u=!1),f&&!f.writable&&(p=!1)}return(u||p||!l)&&(M$?iS(n,"length",r,!0,!0):iS(n,"length",r)),n};(function(i){var n=Jk,r=lc,l=B$,u=du,p=r("%Function.prototype.apply%"),f=r("%Function.prototype.call%"),b=r("%Reflect.apply%",!0)||n.call(f,p),m=Xk(),A=r("%Math.max%");i.exports=function(C){if(typeof C!="function")throw new u("a function is required");var E=b(n,f,arguments);return l(E,1+A(0,C.length-(arguments.length-1)),!0)};var v=function(){return b(n,p,arguments)};m?m(i.exports,"apply",{value:v}):i.exports.apply=v})(zD);var P$=zD.exports,VD=lc,HD=P$,N$=HD(VD("String.prototype.indexOf")),L$=function(n,r){var l=VD(n,!!r);return typeof l=="function"&&N$(n,".prototype.")>-1?HD(l):l};const R$={},F$=Object.freeze(Object.defineProperty({__proto__:null,default:R$},Symbol.toStringTag,{value:"Module"})),z$=ND(F$);var e_=typeof Map=="function"&&Map.prototype,nb=Object.getOwnPropertyDescriptor&&e_?Object.getOwnPropertyDescriptor(Map.prototype,"size"):null,Op=e_&&nb&&typeof nb.get=="function"?nb.get:null,aS=e_&&Map.prototype.forEach,t_=typeof Set=="function"&&Set.prototype,ob=Object.getOwnPropertyDescriptor&&t_?Object.getOwnPropertyDescriptor(Set.prototype,"size"):null,Bp=t_&&ob&&typeof ob.get=="function"?ob.get:null,lS=t_&&Set.prototype.forEach,j$=typeof WeakMap=="function"&&WeakMap.prototype,Fd=j$?WeakMap.prototype.has:null,$$=typeof WeakSet=="function"&&WeakSet.prototype,zd=$$?WeakSet.prototype.has:null,V$=typeof WeakRef=="function"&&WeakRef.prototype,cS=V$?WeakRef.prototype.deref:null,H$=Boolean.prototype.valueOf,U$=Object.prototype.toString,q$=Function.prototype.toString,G$=String.prototype.match,n_=String.prototype.slice,cs=String.prototype.replace,W$=String.prototype.toUpperCase,dS=String.prototype.toLowerCase,UD=RegExp.prototype.test,uS=Array.prototype.concat,Qi=Array.prototype.join,K$=Array.prototype.slice,hS=Math.floor,ik=typeof BigInt=="function"?BigInt.prototype.valueOf:null,ib=Object.getOwnPropertySymbols,rk=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?Symbol.prototype.toString:null,ql=typeof Symbol=="function"&&typeof Symbol.iterator=="object",Jn=typeof Symbol=="function"&&Symbol.toStringTag&&(typeof Symbol.toStringTag===ql||!0)?Symbol.toStringTag:null,qD=Object.prototype.propertyIsEnumerable,pS=(typeof Reflect=="function"?Reflect.getPrototypeOf:Object.getPrototypeOf)||([].__proto__===Array.prototype?function(i){return i.__proto__}:null);function fS(i,n){if(i===1/0||i===-1/0||i!==i||i&&i>-1e3&&i<1e3||UD.call(/e/,n))return n;var r=/[0-9](?=(?:[0-9]{3})+(?![0-9]))/g;if(typeof i=="number"){var l=i<0?-hS(-i):hS(i);if(l!==i){var u=String(l),p=n_.call(n,u.length+1);return cs.call(u,r,"$&_")+"."+cs.call(cs.call(p,/([0-9]{3})/g,"$&_"),/_$/,"")}}return cs.call(n,r,"$&_")}var sk=z$,mS=sk.custom,gS=WD(mS)?mS:null,Y$=function i(n,r,l,u){var p=r||{};if(is(p,"quoteStyle")&&p.quoteStyle!=="single"&&p.quoteStyle!=="double")throw new TypeError('option "quoteStyle" must be "single" or "double"');if(is(p,"maxStringLength")&&(typeof p.maxStringLength=="number"?p.maxStringLength<0&&p.maxStringLength!==1/0:p.maxStringLength!==null))throw new TypeError('option "maxStringLength", if provided, must be a positive integer, Infinity, or `null`');var f=is(p,"customInspect")?p.customInspect:!0;if(typeof f!="boolean"&&f!=="symbol")throw new TypeError("option \"customInspect\", if provided, must be `true`, `false`, or `'symbol'`");if(is(p,"indent")&&p.indent!==null&&p.indent!=="	"&&!(parseInt(p.indent,10)===p.indent&&p.indent>0))throw new TypeError('option "indent" must be "\\t", an integer > 0, or `null`');if(is(p,"numericSeparator")&&typeof p.numericSeparator!="boolean")throw new TypeError('option "numericSeparator", if provided, must be `true` or `false`');var b=p.numericSeparator;if(typeof n>"u")return"undefined";if(n===null)return"null";if(typeof n=="boolean")return n?"true":"false";if(typeof n=="string")return YD(n,p);if(typeof n=="number"){if(n===0)return 1/0/n>0?"0":"-0";var m=String(n);return b?fS(n,m):m}if(typeof n=="bigint"){var A=String(n)+"n";return b?fS(n,A):A}var v=typeof p.depth>"u"?5:p.depth;if(typeof l>"u"&&(l=0),l>=v&&v>0&&typeof n=="object")return ak(n)?"[Array]":"[Object]";var x=pV(p,l);if(typeof u>"u")u=[];else if(KD(u,n)>=0)return"[Circular]";function C(te,re,ae){if(re&&(u=K$.call(u),u.push(re)),ae){var oe={depth:p.depth};return is(p,"quoteStyle")&&(oe.quoteStyle=p.quoteStyle),i(te,oe,l+1,u)}return i(te,p,l+1,u)}if(typeof n=="function"&&!bS(n)){var E=iV(n),T=zh(n,C);return"[Function"+(E?": "+E:" (anonymous)")+"]"+(T.length>0?" { "+Qi.call(T,", ")+" }":"")}if(WD(n)){var I=ql?cs.call(String(n),/^(Symbol\(.*\))_[^)]*$/,"$1"):rk.call(n);return typeof n=="object"&&!ql?Ed(I):I}if(dV(n)){for(var F="<"+dS.call(String(n.nodeName)),N=n.attributes||[],L=0;L<N.length;L++)F+=" "+N[L].name+"="+GD(Q$(N[L].value),"double",p);return F+=">",n.childNodes&&n.childNodes.length&&(F+="..."),F+="</"+dS.call(String(n.nodeName))+">",F}if(ak(n)){if(n.length===0)return"[]";var B=zh(n,C);return x&&!hV(B)?"["+lk(B,x)+"]":"[ "+Qi.call(B,", ")+" ]"}if(J$(n)){var z=zh(n,C);return!("cause"in Error.prototype)&&"cause"in n&&!qD.call(n,"cause")?"{ ["+String(n)+"] "+Qi.call(uS.call("[cause]: "+C(n.cause),z),", ")+" }":z.length===0?"["+String(n)+"]":"{ ["+String(n)+"] "+Qi.call(z,", ")+" }"}if(typeof n=="object"&&f){if(gS&&typeof n[gS]=="function"&&sk)return sk(n,{depth:v-l});if(f!=="symbol"&&typeof n.inspect=="function")return n.inspect()}if(rV(n)){var U=[];return aS&&aS.call(n,function(te,re){U.push(C(re,n,!0)+" => "+C(te,n))}),kS("Map",Op.call(n),U,x)}if(lV(n)){var W=[];return lS&&lS.call(n,function(te){W.push(C(te,n))}),kS("Set",Bp.call(n),W,x)}if(sV(n))return rb("WeakMap");if(cV(n))return rb("WeakSet");if(aV(n))return rb("WeakRef");if(eV(n))return Ed(C(Number(n)));if(nV(n))return Ed(C(ik.call(n)));if(tV(n))return Ed(H$.call(n));if(X$(n))return Ed(C(String(n)));if(typeof window<"u"&&n===window)return"{ [object Window] }";if(typeof globalThis<"u"&&n===globalThis||typeof wn<"u"&&n===wn)return"{ [object globalThis] }";if(!Z$(n)&&!bS(n)){var P=zh(n,C),H=pS?pS(n)===Object.prototype:n instanceof Object||n.constructor===Object,V=n instanceof Object?"":"null prototype",q=!H&&Jn&&Object(n)===n&&Jn in n?n_.call(Cs(n),8,-1):V?"Object":"",Y=H||typeof n.constructor!="function"?"":n.constructor.name?n.constructor.name+" ":"",J=Y+(q||V?"["+Qi.call(uS.call([],q||[],V||[]),": ")+"] ":"");return P.length===0?J+"{}":x?J+"{"+lk(P,x)+"}":J+"{ "+Qi.call(P,", ")+" }"}return String(n)};function GD(i,n,r){var l=(r.quoteStyle||n)==="double"?'"':"'";return l+i+l}function Q$(i){return cs.call(String(i),/"/g,"&quot;")}function ak(i){return Cs(i)==="[object Array]"&&(!Jn||!(typeof i=="object"&&Jn in i))}function Z$(i){return Cs(i)==="[object Date]"&&(!Jn||!(typeof i=="object"&&Jn in i))}function bS(i){return Cs(i)==="[object RegExp]"&&(!Jn||!(typeof i=="object"&&Jn in i))}function J$(i){return Cs(i)==="[object Error]"&&(!Jn||!(typeof i=="object"&&Jn in i))}function X$(i){return Cs(i)==="[object String]"&&(!Jn||!(typeof i=="object"&&Jn in i))}function eV(i){return Cs(i)==="[object Number]"&&(!Jn||!(typeof i=="object"&&Jn in i))}function tV(i){return Cs(i)==="[object Boolean]"&&(!Jn||!(typeof i=="object"&&Jn in i))}function WD(i){if(ql)return i&&typeof i=="object"&&i instanceof Symbol;if(typeof i=="symbol")return!0;if(!i||typeof i!="object"||!rk)return!1;try{return rk.call(i),!0}catch{}return!1}function nV(i){if(!i||typeof i!="object"||!ik)return!1;try{return ik.call(i),!0}catch{}return!1}var oV=Object.prototype.hasOwnProperty||function(i){return i in this};function is(i,n){return oV.call(i,n)}function Cs(i){return U$.call(i)}function iV(i){if(i.name)return i.name;var n=G$.call(q$.call(i),/^function\s*([\w$]+)/);return n?n[1]:null}function KD(i,n){if(i.indexOf)return i.indexOf(n);for(var r=0,l=i.length;r<l;r++)if(i[r]===n)return r;return-1}function rV(i){if(!Op||!i||typeof i!="object")return!1;try{Op.call(i);try{Bp.call(i)}catch{return!0}return i instanceof Map}catch{}return!1}function sV(i){if(!Fd||!i||typeof i!="object")return!1;try{Fd.call(i,Fd);try{zd.call(i,zd)}catch{return!0}return i instanceof WeakMap}catch{}return!1}function aV(i){if(!cS||!i||typeof i!="object")return!1;try{return cS.call(i),!0}catch{}return!1}function lV(i){if(!Bp||!i||typeof i!="object")return!1;try{Bp.call(i);try{Op.call(i)}catch{return!0}return i instanceof Set}catch{}return!1}function cV(i){if(!zd||!i||typeof i!="object")return!1;try{zd.call(i,zd);try{Fd.call(i,Fd)}catch{return!0}return i instanceof WeakSet}catch{}return!1}function dV(i){return!i||typeof i!="object"?!1:typeof HTMLElement<"u"&&i instanceof HTMLElement?!0:typeof i.nodeName=="string"&&typeof i.getAttribute=="function"}function YD(i,n){if(i.length>n.maxStringLength){var r=i.length-n.maxStringLength,l="... "+r+" more character"+(r>1?"s":"");return YD(n_.call(i,0,n.maxStringLength),n)+l}var u=cs.call(cs.call(i,/(['\\])/g,"\\$1"),/[\x00-\x1f]/g,uV);return GD(u,"single",n)}function uV(i){var n=i.charCodeAt(0),r={8:"b",9:"t",10:"n",12:"f",13:"r"}[n];return r?"\\"+r:"\\x"+(n<16?"0":"")+W$.call(n.toString(16))}function Ed(i){return"Object("+i+")"}function rb(i){return i+" { ? }"}function kS(i,n,r,l){var u=l?lk(r,l):Qi.call(r,", ");return i+" ("+n+") {"+u+"}"}function hV(i){for(var n=0;n<i.length;n++)if(KD(i[n],`
`)>=0)return!1;return!0}function pV(i,n){var r;if(i.indent==="	")r="	";else if(typeof i.indent=="number"&&i.indent>0)r=Qi.call(Array(i.indent+1)," ");else return null;return{base:r,prev:Qi.call(Array(n+1),r)}}function lk(i,n){if(i.length===0)return"";var r=`
`+n.prev+n.base;return r+Qi.call(i,","+r)+`
`+n.prev}function zh(i,n){var r=ak(i),l=[];if(r){l.length=i.length;for(var u=0;u<i.length;u++)l[u]=is(i,u)?n(i[u],i):""}var p=typeof ib=="function"?ib(i):[],f;if(ql){f={};for(var b=0;b<p.length;b++)f["$"+p[b]]=p[b]}for(var m in i)is(i,m)&&(r&&String(Number(m))===m&&m<i.length||ql&&f["$"+m]instanceof Symbol||(UD.call(/[^\w$]/,m)?l.push(n(m,i)+": "+n(i[m],i)):l.push(m+": "+n(i[m],i))));if(typeof ib=="function")for(var A=0;A<p.length;A++)qD.call(i,p[A])&&l.push("["+n(p[A])+"]: "+n(i[p[A]],i));return l}var QD=lc,cc=L$,fV=Y$,mV=du,jh=QD("%WeakMap%",!0),$h=QD("%Map%",!0),gV=cc("WeakMap.prototype.get",!0),bV=cc("WeakMap.prototype.set",!0),kV=cc("WeakMap.prototype.has",!0),_V=cc("Map.prototype.get",!0),wV=cc("Map.prototype.set",!0),vV=cc("Map.prototype.has",!0),o_=function(i,n){for(var r=i,l;(l=r.next)!==null;r=l)if(l.key===n)return r.next=l.next,l.next=i.next,i.next=l,l},AV=function(i,n){var r=o_(i,n);return r&&r.value},CV=function(i,n,r){var l=o_(i,n);l?l.value=r:i.next={key:n,next:i.next,value:r}},yV=function(i,n){return!!o_(i,n)},xV=function(){var n,r,l,u={assert:function(p){if(!u.has(p))throw new mV("Side channel does not contain "+fV(p))},get:function(p){if(jh&&p&&(typeof p=="object"||typeof p=="function")){if(n)return gV(n,p)}else if($h){if(r)return _V(r,p)}else if(l)return AV(l,p)},has:function(p){if(jh&&p&&(typeof p=="object"||typeof p=="function")){if(n)return kV(n,p)}else if($h){if(r)return vV(r,p)}else if(l)return yV(l,p);return!1},set:function(p,f){jh&&p&&(typeof p=="object"||typeof p=="function")?(n||(n=new jh),bV(n,p,f)):$h?(r||(r=new $h),wV(r,p,f)):(l||(l={key:{},next:null}),CV(l,p,f))}};return u},EV=String.prototype.replace,SV=/%20/g,sb={RFC1738:"RFC1738",RFC3986:"RFC3986"},i_={default:sb.RFC3986,formatters:{RFC1738:function(i){return EV.call(i,SV,"+")},RFC3986:function(i){return String(i)}},RFC1738:sb.RFC1738,RFC3986:sb.RFC3986},TV=i_,ab=Object.prototype.hasOwnProperty,ua=Array.isArray,Gi=function(){for(var i=[],n=0;n<256;++n)i.push("%"+((n<16?"0":"")+n.toString(16)).toUpperCase());return i}(),DV=function(n){for(;n.length>1;){var r=n.pop(),l=r.obj[r.prop];if(ua(l)){for(var u=[],p=0;p<l.length;++p)typeof l[p]<"u"&&u.push(l[p]);r.obj[r.prop]=u}}},ZD=function(n,r){for(var l=r&&r.plainObjects?Object.create(null):{},u=0;u<n.length;++u)typeof n[u]<"u"&&(l[u]=n[u]);return l},IV=function i(n,r,l){if(!r)return n;if(typeof r!="object"){if(ua(n))n.push(r);else if(n&&typeof n=="object")(l&&(l.plainObjects||l.allowPrototypes)||!ab.call(Object.prototype,r))&&(n[r]=!0);else return[n,r];return n}if(!n||typeof n!="object")return[n].concat(r);var u=n;return ua(n)&&!ua(r)&&(u=ZD(n,l)),ua(n)&&ua(r)?(r.forEach(function(p,f){if(ab.call(n,f)){var b=n[f];b&&typeof b=="object"&&p&&typeof p=="object"?n[f]=i(b,p,l):n.push(p)}else n[f]=p}),n):Object.keys(r).reduce(function(p,f){var b=r[f];return ab.call(p,f)?p[f]=i(p[f],b,l):p[f]=b,p},u)},MV=function(n,r){return Object.keys(r).reduce(function(l,u){return l[u]=r[u],l},n)},OV=function(i,n,r){var l=i.replace(/\+/g," ");if(r==="iso-8859-1")return l.replace(/%[0-9a-f]{2}/gi,unescape);try{return decodeURIComponent(l)}catch{return l}},lb=1024,BV=function(n,r,l,u,p){if(n.length===0)return n;var f=n;if(typeof n=="symbol"?f=Symbol.prototype.toString.call(n):typeof n!="string"&&(f=String(n)),l==="iso-8859-1")return escape(f).replace(/%u[0-9a-f]{4}/gi,function(E){return"%26%23"+parseInt(E.slice(2),16)+"%3B"});for(var b="",m=0;m<f.length;m+=lb){for(var A=f.length>=lb?f.slice(m,m+lb):f,v=[],x=0;x<A.length;++x){var C=A.charCodeAt(x);if(C===45||C===46||C===95||C===126||C>=48&&C<=57||C>=65&&C<=90||C>=97&&C<=122||p===TV.RFC1738&&(C===40||C===41)){v[v.length]=A.charAt(x);continue}if(C<128){v[v.length]=Gi[C];continue}if(C<2048){v[v.length]=Gi[192|C>>6]+Gi[128|C&63];continue}if(C<55296||C>=57344){v[v.length]=Gi[224|C>>12]+Gi[128|C>>6&63]+Gi[128|C&63];continue}x+=1,C=65536+((C&1023)<<10|A.charCodeAt(x)&1023),v[v.length]=Gi[240|C>>18]+Gi[128|C>>12&63]+Gi[128|C>>6&63]+Gi[128|C&63]}b+=v.join("")}return b},PV=function(n){for(var r=[{obj:{o:n},prop:"o"}],l=[],u=0;u<r.length;++u)for(var p=r[u],f=p.obj[p.prop],b=Object.keys(f),m=0;m<b.length;++m){var A=b[m],v=f[A];typeof v=="object"&&v!==null&&l.indexOf(v)===-1&&(r.push({obj:f,prop:A}),l.push(v))}return DV(r),n},NV=function(n){return Object.prototype.toString.call(n)==="[object RegExp]"},LV=function(n){return!n||typeof n!="object"?!1:!!(n.constructor&&n.constructor.isBuffer&&n.constructor.isBuffer(n))},RV=function(n,r){return[].concat(n,r)},FV=function(n,r){if(ua(n)){for(var l=[],u=0;u<n.length;u+=1)l.push(r(n[u]));return l}return r(n)},JD={arrayToObject:ZD,assign:MV,combine:RV,compact:PV,decode:OV,encode:BV,isBuffer:LV,isRegExp:NV,maybeMap:FV,merge:IV},XD=xV,gp=JD,jd=i_,zV=Object.prototype.hasOwnProperty,e5={brackets:function(n){return n+"[]"},comma:"comma",indices:function(n,r){return n+"["+r+"]"},repeat:function(n){return n}},Ki=Array.isArray,jV=Array.prototype.push,t5=function(i,n){jV.apply(i,Ki(n)?n:[n])},$V=Date.prototype.toISOString,_S=jd.default,xn={addQueryPrefix:!1,allowDots:!1,allowEmptyArrays:!1,arrayFormat:"indices",charset:"utf-8",charsetSentinel:!1,delimiter:"&",encode:!0,encodeDotInKeys:!1,encoder:gp.encode,encodeValuesOnly:!1,format:_S,formatter:jd.formatters[_S],indices:!1,serializeDate:function(n){return $V.call(n)},skipNulls:!1,strictNullHandling:!1},VV=function(n){return typeof n=="string"||typeof n=="number"||typeof n=="boolean"||typeof n=="symbol"||typeof n=="bigint"},cb={},HV=function i(n,r,l,u,p,f,b,m,A,v,x,C,E,T,I,F,N,L){for(var B=n,z=L,U=0,W=!1;(z=z.get(cb))!==void 0&&!W;){var P=z.get(n);if(U+=1,typeof P<"u"){if(P===U)throw new RangeError("Cyclic object value");W=!0}typeof z.get(cb)>"u"&&(U=0)}if(typeof v=="function"?B=v(r,B):B instanceof Date?B=E(B):l==="comma"&&Ki(B)&&(B=gp.maybeMap(B,function(Se){return Se instanceof Date?E(Se):Se})),B===null){if(f)return A&&!F?A(r,xn.encoder,N,"key",T):r;B=""}if(VV(B)||gp.isBuffer(B)){if(A){var H=F?r:A(r,xn.encoder,N,"key",T);return[I(H)+"="+I(A(B,xn.encoder,N,"value",T))]}return[I(r)+"="+I(String(B))]}var V=[];if(typeof B>"u")return V;var q;if(l==="comma"&&Ki(B))F&&A&&(B=gp.maybeMap(B,A)),q=[{value:B.length>0?B.join(",")||null:void 0}];else if(Ki(v))q=v;else{var Y=Object.keys(B);q=x?Y.sort(x):Y}var J=m?r.replace(/\./g,"%2E"):r,te=u&&Ki(B)&&B.length===1?J+"[]":J;if(p&&Ki(B)&&B.length===0)return te+"[]";for(var re=0;re<q.length;++re){var ae=q[re],oe=typeof ae=="object"&&typeof ae.value<"u"?ae.value:B[ae];if(!(b&&oe===null)){var ge=C&&m?ae.replace(/\./g,"%2E"):ae,ie=Ki(B)?typeof l=="function"?l(te,ge):te:te+(C?"."+ge:"["+ge+"]");L.set(n,U);var Le=XD();Le.set(cb,L),t5(V,i(oe,ie,l,u,p,f,b,m,l==="comma"&&F&&Ki(B)?null:A,v,x,C,E,T,I,F,N,Le))}}return V},UV=function(n){if(!n)return xn;if(typeof n.allowEmptyArrays<"u"&&typeof n.allowEmptyArrays!="boolean")throw new TypeError("`allowEmptyArrays` option can only be `true` or `false`, when provided");if(typeof n.encodeDotInKeys<"u"&&typeof n.encodeDotInKeys!="boolean")throw new TypeError("`encodeDotInKeys` option can only be `true` or `false`, when provided");if(n.encoder!==null&&typeof n.encoder<"u"&&typeof n.encoder!="function")throw new TypeError("Encoder has to be a function.");var r=n.charset||xn.charset;if(typeof n.charset<"u"&&n.charset!=="utf-8"&&n.charset!=="iso-8859-1")throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");var l=jd.default;if(typeof n.format<"u"){if(!zV.call(jd.formatters,n.format))throw new TypeError("Unknown format option provided.");l=n.format}var u=jd.formatters[l],p=xn.filter;(typeof n.filter=="function"||Ki(n.filter))&&(p=n.filter);var f;if(n.arrayFormat in e5?f=n.arrayFormat:"indices"in n?f=n.indices?"indices":"repeat":f=xn.arrayFormat,"commaRoundTrip"in n&&typeof n.commaRoundTrip!="boolean")throw new TypeError("`commaRoundTrip` must be a boolean, or absent");var b=typeof n.allowDots>"u"?n.encodeDotInKeys===!0?!0:xn.allowDots:!!n.allowDots;return{addQueryPrefix:typeof n.addQueryPrefix=="boolean"?n.addQueryPrefix:xn.addQueryPrefix,allowDots:b,allowEmptyArrays:typeof n.allowEmptyArrays=="boolean"?!!n.allowEmptyArrays:xn.allowEmptyArrays,arrayFormat:f,charset:r,charsetSentinel:typeof n.charsetSentinel=="boolean"?n.charsetSentinel:xn.charsetSentinel,commaRoundTrip:n.commaRoundTrip,delimiter:typeof n.delimiter>"u"?xn.delimiter:n.delimiter,encode:typeof n.encode=="boolean"?n.encode:xn.encode,encodeDotInKeys:typeof n.encodeDotInKeys=="boolean"?n.encodeDotInKeys:xn.encodeDotInKeys,encoder:typeof n.encoder=="function"?n.encoder:xn.encoder,encodeValuesOnly:typeof n.encodeValuesOnly=="boolean"?n.encodeValuesOnly:xn.encodeValuesOnly,filter:p,format:l,formatter:u,serializeDate:typeof n.serializeDate=="function"?n.serializeDate:xn.serializeDate,skipNulls:typeof n.skipNulls=="boolean"?n.skipNulls:xn.skipNulls,sort:typeof n.sort=="function"?n.sort:null,strictNullHandling:typeof n.strictNullHandling=="boolean"?n.strictNullHandling:xn.strictNullHandling}},qV=function(i,n){var r=i,l=UV(n),u,p;typeof l.filter=="function"?(p=l.filter,r=p("",r)):Ki(l.filter)&&(p=l.filter,u=p);var f=[];if(typeof r!="object"||r===null)return"";var b=e5[l.arrayFormat],m=b==="comma"&&l.commaRoundTrip;u||(u=Object.keys(r)),l.sort&&u.sort(l.sort);for(var A=XD(),v=0;v<u.length;++v){var x=u[v];l.skipNulls&&r[x]===null||t5(f,HV(r[x],x,b,m,l.allowEmptyArrays,l.strictNullHandling,l.skipNulls,l.encodeDotInKeys,l.encode?l.encoder:null,l.filter,l.sort,l.allowDots,l.serializeDate,l.format,l.formatter,l.encodeValuesOnly,l.charset,A))}var C=f.join(l.delimiter),E=l.addQueryPrefix===!0?"?":"";return l.charsetSentinel&&(l.charset==="iso-8859-1"?E+="utf8=%26%2310003%3B&":E+="utf8=%E2%9C%93&"),C.length>0?E+C:""},Gl=JD,ck=Object.prototype.hasOwnProperty,GV=Array.isArray,gn={allowDots:!1,allowEmptyArrays:!1,allowPrototypes:!1,allowSparse:!1,arrayLimit:20,charset:"utf-8",charsetSentinel:!1,comma:!1,decodeDotInKeys:!1,decoder:Gl.decode,delimiter:"&",depth:5,duplicates:"combine",ignoreQueryPrefix:!1,interpretNumericEntities:!1,parameterLimit:1e3,parseArrays:!0,plainObjects:!1,strictNullHandling:!1},WV=function(i){return i.replace(/&#(\d+);/g,function(n,r){return String.fromCharCode(parseInt(r,10))})},n5=function(i,n){return i&&typeof i=="string"&&n.comma&&i.indexOf(",")>-1?i.split(","):i},KV="utf8=%26%2310003%3B",YV="utf8=%E2%9C%93",QV=function(n,r){var l={__proto__:null},u=r.ignoreQueryPrefix?n.replace(/^\?/,""):n;u=u.replace(/%5B/gi,"[").replace(/%5D/gi,"]");var p=r.parameterLimit===1/0?void 0:r.parameterLimit,f=u.split(r.delimiter,p),b=-1,m,A=r.charset;if(r.charsetSentinel)for(m=0;m<f.length;++m)f[m].indexOf("utf8=")===0&&(f[m]===YV?A="utf-8":f[m]===KV&&(A="iso-8859-1"),b=m,m=f.length);for(m=0;m<f.length;++m)if(m!==b){var v=f[m],x=v.indexOf("]="),C=x===-1?v.indexOf("="):x+1,E,T;C===-1?(E=r.decoder(v,gn.decoder,A,"key"),T=r.strictNullHandling?null:""):(E=r.decoder(v.slice(0,C),gn.decoder,A,"key"),T=Gl.maybeMap(n5(v.slice(C+1),r),function(F){return r.decoder(F,gn.decoder,A,"value")})),T&&r.interpretNumericEntities&&A==="iso-8859-1"&&(T=WV(T)),v.indexOf("[]=")>-1&&(T=GV(T)?[T]:T);var I=ck.call(l,E);I&&r.duplicates==="combine"?l[E]=Gl.combine(l[E],T):(!I||r.duplicates==="last")&&(l[E]=T)}return l},ZV=function(i,n,r,l){for(var u=l?n:n5(n,r),p=i.length-1;p>=0;--p){var f,b=i[p];if(b==="[]"&&r.parseArrays)f=r.allowEmptyArrays&&(u===""||r.strictNullHandling&&u===null)?[]:[].concat(u);else{f=r.plainObjects?Object.create(null):{};var m=b.charAt(0)==="["&&b.charAt(b.length-1)==="]"?b.slice(1,-1):b,A=r.decodeDotInKeys?m.replace(/%2E/g,"."):m,v=parseInt(A,10);!r.parseArrays&&A===""?f={0:u}:!isNaN(v)&&b!==A&&String(v)===A&&v>=0&&r.parseArrays&&v<=r.arrayLimit?(f=[],f[v]=u):A!=="__proto__"&&(f[A]=u)}u=f}return u},JV=function(n,r,l,u){if(n){var p=l.allowDots?n.replace(/\.([^.[]+)/g,"[$1]"):n,f=/(\[[^[\]]*])/,b=/(\[[^[\]]*])/g,m=l.depth>0&&f.exec(p),A=m?p.slice(0,m.index):p,v=[];if(A){if(!l.plainObjects&&ck.call(Object.prototype,A)&&!l.allowPrototypes)return;v.push(A)}for(var x=0;l.depth>0&&(m=b.exec(p))!==null&&x<l.depth;){if(x+=1,!l.plainObjects&&ck.call(Object.prototype,m[1].slice(1,-1))&&!l.allowPrototypes)return;v.push(m[1])}return m&&v.push("["+p.slice(m.index)+"]"),ZV(v,r,l,u)}},XV=function(n){if(!n)return gn;if(typeof n.allowEmptyArrays<"u"&&typeof n.allowEmptyArrays!="boolean")throw new TypeError("`allowEmptyArrays` option can only be `true` or `false`, when provided");if(typeof n.decodeDotInKeys<"u"&&typeof n.decodeDotInKeys!="boolean")throw new TypeError("`decodeDotInKeys` option can only be `true` or `false`, when provided");if(n.decoder!==null&&typeof n.decoder<"u"&&typeof n.decoder!="function")throw new TypeError("Decoder has to be a function.");if(typeof n.charset<"u"&&n.charset!=="utf-8"&&n.charset!=="iso-8859-1")throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");var r=typeof n.charset>"u"?gn.charset:n.charset,l=typeof n.duplicates>"u"?gn.duplicates:n.duplicates;if(l!=="combine"&&l!=="first"&&l!=="last")throw new TypeError("The duplicates option must be either combine, first, or last");var u=typeof n.allowDots>"u"?n.decodeDotInKeys===!0?!0:gn.allowDots:!!n.allowDots;return{allowDots:u,allowEmptyArrays:typeof n.allowEmptyArrays=="boolean"?!!n.allowEmptyArrays:gn.allowEmptyArrays,allowPrototypes:typeof n.allowPrototypes=="boolean"?n.allowPrototypes:gn.allowPrototypes,allowSparse:typeof n.allowSparse=="boolean"?n.allowSparse:gn.allowSparse,arrayLimit:typeof n.arrayLimit=="number"?n.arrayLimit:gn.arrayLimit,charset:r,charsetSentinel:typeof n.charsetSentinel=="boolean"?n.charsetSentinel:gn.charsetSentinel,comma:typeof n.comma=="boolean"?n.comma:gn.comma,decodeDotInKeys:typeof n.decodeDotInKeys=="boolean"?n.decodeDotInKeys:gn.decodeDotInKeys,decoder:typeof n.decoder=="function"?n.decoder:gn.decoder,delimiter:typeof n.delimiter=="string"||Gl.isRegExp(n.delimiter)?n.delimiter:gn.delimiter,depth:typeof n.depth=="number"||n.depth===!1?+n.depth:gn.depth,duplicates:l,ignoreQueryPrefix:n.ignoreQueryPrefix===!0,interpretNumericEntities:typeof n.interpretNumericEntities=="boolean"?n.interpretNumericEntities:gn.interpretNumericEntities,parameterLimit:typeof n.parameterLimit=="number"?n.parameterLimit:gn.parameterLimit,parseArrays:n.parseArrays!==!1,plainObjects:typeof n.plainObjects=="boolean"?n.plainObjects:gn.plainObjects,strictNullHandling:typeof n.strictNullHandling=="boolean"?n.strictNullHandling:gn.strictNullHandling}},eH=function(i,n){var r=XV(n);if(i===""||i===null||typeof i>"u")return r.plainObjects?Object.create(null):{};for(var l=typeof i=="string"?QV(i,r):i,u=r.plainObjects?Object.create(null):{},p=Object.keys(l),f=0;f<p.length;++f){var b=p[f],m=JV(b,l[b],r,typeof i=="string");u=Gl.merge(u,m,r)}return r.allowSparse===!0?u:Gl.compact(u)},tH=qV,nH=eH,oH=i_,wS={formats:oH,parse:nH,stringify:tH},o5={exports:{}};/* NProgress, (c) 2013, 2014 Rico Sta. Cruz - http://ricostacruz.com/nprogress
 * @license MIT */(function(i,n){(function(r,l){i.exports=l()})(wn,function(){var r={};r.version="0.2.0";var l=r.settings={minimum:.08,easing:"ease",positionUsing:"",speed:200,trickle:!0,trickleRate:.02,trickleSpeed:800,showSpinner:!0,barSelector:'[role="bar"]',spinnerSelector:'[role="spinner"]',parent:"body",template:'<div class="bar" role="bar"><div class="peg"></div></div><div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'};r.configure=function(T){var I,F;for(I in T)F=T[I],F!==void 0&&T.hasOwnProperty(I)&&(l[I]=F);return this},r.status=null,r.set=function(T){var I=r.isStarted();T=u(T,l.minimum,1),r.status=T===1?null:T;var F=r.render(!I),N=F.querySelector(l.barSelector),L=l.speed,B=l.easing;return F.offsetWidth,b(function(z){l.positionUsing===""&&(l.positionUsing=r.getPositioningCSS()),m(N,f(T,L,B)),T===1?(m(F,{transition:"none",opacity:1}),F.offsetWidth,setTimeout(function(){m(F,{transition:"all "+L+"ms linear",opacity:0}),setTimeout(function(){r.remove(),z()},L)},L)):setTimeout(z,L)}),this},r.isStarted=function(){return typeof r.status=="number"},r.start=function(){r.status||r.set(0);var T=function(){setTimeout(function(){r.status&&(r.trickle(),T())},l.trickleSpeed)};return l.trickle&&T(),this},r.done=function(T){return!T&&!r.status?this:r.inc(.3+.5*Math.random()).set(1)},r.inc=function(T){var I=r.status;return I?(typeof T!="number"&&(T=(1-I)*u(Math.random()*I,.1,.95)),I=u(I+T,0,.994),r.set(I)):r.start()},r.trickle=function(){return r.inc(Math.random()*l.trickleRate)},function(){var T=0,I=0;r.promise=function(F){return!F||F.state()==="resolved"?this:(I===0&&r.start(),T++,I++,F.always(function(){I--,I===0?(T=0,r.done()):r.set((T-I)/T)}),this)}}(),r.render=function(T){if(r.isRendered())return document.getElementById("nprogress");v(document.documentElement,"nprogress-busy");var I=document.createElement("div");I.id="nprogress",I.innerHTML=l.template;var F=I.querySelector(l.barSelector),N=T?"-100":p(r.status||0),L=document.querySelector(l.parent),B;return m(F,{transition:"all 0 linear",transform:"translate3d("+N+"%,0,0)"}),l.showSpinner||(B=I.querySelector(l.spinnerSelector),B&&E(B)),L!=document.body&&v(L,"nprogress-custom-parent"),L.appendChild(I),I},r.remove=function(){x(document.documentElement,"nprogress-busy"),x(document.querySelector(l.parent),"nprogress-custom-parent");var T=document.getElementById("nprogress");T&&E(T)},r.isRendered=function(){return!!document.getElementById("nprogress")},r.getPositioningCSS=function(){var T=document.body.style,I="WebkitTransform"in T?"Webkit":"MozTransform"in T?"Moz":"msTransform"in T?"ms":"OTransform"in T?"O":"";return I+"Perspective"in T?"translate3d":I+"Transform"in T?"translate":"margin"};function u(T,I,F){return T<I?I:T>F?F:T}function p(T){return(-1+T)*100}function f(T,I,F){var N;return l.positionUsing==="translate3d"?N={transform:"translate3d("+p(T)+"%,0,0)"}:l.positionUsing==="translate"?N={transform:"translate("+p(T)+"%,0)"}:N={"margin-left":p(T)+"%"},N.transition="all "+I+"ms "+F,N}var b=function(){var T=[];function I(){var F=T.shift();F&&F(I)}return function(F){T.push(F),T.length==1&&I()}}(),m=function(){var T=["Webkit","O","Moz","ms"],I={};function F(z){return z.replace(/^-ms-/,"ms-").replace(/-([\da-z])/gi,function(U,W){return W.toUpperCase()})}function N(z){var U=document.body.style;if(z in U)return z;for(var W=T.length,P=z.charAt(0).toUpperCase()+z.slice(1),H;W--;)if(H=T[W]+P,H in U)return H;return z}function L(z){return z=F(z),I[z]||(I[z]=N(z))}function B(z,U,W){U=L(U),z.style[U]=W}return function(z,U){var W=arguments,P,H;if(W.length==2)for(P in U)H=U[P],H!==void 0&&U.hasOwnProperty(P)&&B(z,P,H);else B(z,W[1],W[2])}}();function A(T,I){var F=typeof T=="string"?T:C(T);return F.indexOf(" "+I+" ")>=0}function v(T,I){var F=C(T),N=F+I;A(F,I)||(T.className=N.substring(1))}function x(T,I){var F=C(T),N;A(T,I)&&(N=F.replace(" "+I+" "," "),T.className=N.substring(1,N.length-1))}function C(T){return(" "+(T.className||"")+" ").replace(/\s+/gi," ")}function E(T){T&&T.parentNode&&T.parentNode.removeChild(T)}return r})})(o5);var iH=o5.exports;const Zi=Pa(iH);function i5(i,n){let r;return function(...l){clearTimeout(r),r=setTimeout(()=>i.apply(this,l),n)}}function Or(i,n){return document.dispatchEvent(new CustomEvent(`inertia:${i}`,n))}var rH=i=>Or("before",{cancelable:!0,detail:{visit:i}}),sH=i=>Or("error",{detail:{errors:i}}),aH=i=>Or("exception",{cancelable:!0,detail:{exception:i}}),vS=i=>Or("finish",{detail:{visit:i}}),lH=i=>Or("invalid",{cancelable:!0,detail:{response:i}}),Sd=i=>Or("navigate",{detail:{page:i}}),cH=i=>Or("progress",{detail:{progress:i}}),dH=i=>Or("start",{detail:{visit:i}}),uH=i=>Or("success",{detail:{page:i}});function dk(i){return i instanceof File||i instanceof Blob||i instanceof FileList&&i.length>0||i instanceof FormData&&Array.from(i.values()).some(n=>dk(n))||typeof i=="object"&&i!==null&&Object.values(i).some(n=>dk(n))}function r5(i,n=new FormData,r=null){i=i||{};for(let l in i)Object.prototype.hasOwnProperty.call(i,l)&&a5(n,s5(r,l),i[l]);return n}function s5(i,n){return i?i+"["+n+"]":n}function a5(i,n,r){if(Array.isArray(r))return Array.from(r.keys()).forEach(l=>a5(i,s5(n,l.toString()),r[l]));if(r instanceof Date)return i.append(n,r.toISOString());if(r instanceof File)return i.append(n,r,r.name);if(r instanceof Blob)return i.append(n,r);if(typeof r=="boolean")return i.append(n,r?"1":"0");if(typeof r=="string")return i.append(n,r);if(typeof r=="number")return i.append(n,`${r}`);if(r==null)return i.append(n,"");r5(r,i,n)}var hH={modal:null,listener:null,show(i){typeof i=="object"&&(i=`All Inertia requests must receive a valid Inertia response, however a plain JSON response was received.<hr>${JSON.stringify(i)}`);let n=document.createElement("html");n.innerHTML=i,n.querySelectorAll("a").forEach(l=>l.setAttribute("target","_top")),this.modal=document.createElement("div"),this.modal.style.position="fixed",this.modal.style.width="100vw",this.modal.style.height="100vh",this.modal.style.padding="50px",this.modal.style.boxSizing="border-box",this.modal.style.backgroundColor="rgba(0, 0, 0, .6)",this.modal.style.zIndex=2e5,this.modal.addEventListener("click",()=>this.hide());let r=document.createElement("iframe");if(r.style.backgroundColor="white",r.style.borderRadius="5px",r.style.width="100%",r.style.height="100%",this.modal.appendChild(r),document.body.prepend(this.modal),document.body.style.overflow="hidden",!r.contentWindow)throw new Error("iframe not yet ready.");r.contentWindow.document.open(),r.contentWindow.document.write(n.outerHTML),r.contentWindow.document.close(),this.listener=this.hideOnEscape.bind(this),document.addEventListener("keydown",this.listener)},hide(){this.modal.outerHTML="",this.modal=null,document.body.style.overflow="visible",document.removeEventListener("keydown",this.listener)},hideOnEscape(i){i.keyCode===27&&this.hide()}};function vl(i){return new URL(i.toString(),window.location.toString())}function l5(i,n,r,l="brackets"){let u=/^https?:\/\//.test(n.toString()),p=u||n.toString().startsWith("/"),f=!p&&!n.toString().startsWith("#")&&!n.toString().startsWith("?"),b=n.toString().includes("?")||i==="get"&&Object.keys(r).length,m=n.toString().includes("#"),A=new URL(n.toString(),"http://localhost");return i==="get"&&Object.keys(r).length&&(A.search=wS.stringify(j9(wS.parse(A.search,{ignoreQueryPrefix:!0}),r),{encodeValuesOnly:!0,arrayFormat:l}),r={}),[[u?`${A.protocol}//${A.host}`:"",p?A.pathname:"",f?A.pathname.substring(1):"",b?A.search:"",m?A.hash:""].join(""),r]}function Td(i){return i=new URL(i.href),i.hash="",i}var AS=typeof window>"u",pH=class{constructor(){this.visitId=null}init({initialPage:i,resolveComponent:n,swapComponent:r}){this.page=i,this.resolveComponent=n,this.swapComponent=r,this.setNavigationType(),this.clearRememberedStateOnReload(),this.isBackForwardVisit()?this.handleBackForwardVisit(this.page):this.isLocationVisit()?this.handleLocationVisit(this.page):this.handleInitialPageVisit(this.page),this.setupEventListeners()}setNavigationType(){this.navigationType=window.performance&&window.performance.getEntriesByType("navigation").length>0?window.performance.getEntriesByType("navigation")[0].type:"navigate"}clearRememberedStateOnReload(){var i;this.navigationType==="reload"&&((i=window.history.state)!=null&&i.rememberedState)&&delete window.history.state.rememberedState}handleInitialPageVisit(i){this.page.url+=window.location.hash,this.setPage(i,{preserveState:!0}).then(()=>Sd(i))}setupEventListeners(){window.addEventListener("popstate",this.handlePopstateEvent.bind(this)),document.addEventListener("scroll",i5(this.handleScrollEvent.bind(this),100),!0)}scrollRegions(){return document.querySelectorAll("[scroll-region]")}handleScrollEvent(i){typeof i.target.hasAttribute=="function"&&i.target.hasAttribute("scroll-region")&&this.saveScrollPositions()}saveScrollPositions(){this.replaceState({...this.page,scrollRegions:Array.from(this.scrollRegions()).map(i=>({top:i.scrollTop,left:i.scrollLeft}))})}resetScrollPositions(){window.scrollTo(0,0),this.scrollRegions().forEach(i=>{typeof i.scrollTo=="function"?i.scrollTo(0,0):(i.scrollTop=0,i.scrollLeft=0)}),this.saveScrollPositions(),window.location.hash&&setTimeout(()=>{var i;return(i=document.getElementById(window.location.hash.slice(1)))==null?void 0:i.scrollIntoView()})}restoreScrollPositions(){this.page.scrollRegions&&this.scrollRegions().forEach((i,n)=>{let r=this.page.scrollRegions[n];if(r)typeof i.scrollTo=="function"?i.scrollTo(r.left,r.top):(i.scrollTop=r.top,i.scrollLeft=r.left);else return})}isBackForwardVisit(){return window.history.state&&this.navigationType==="back_forward"}handleBackForwardVisit(i){window.history.state.version=i.version,this.setPage(window.history.state,{preserveScroll:!0,preserveState:!0}).then(()=>{this.restoreScrollPositions(),Sd(i)})}locationVisit(i,n){try{let r={preserveScroll:n};window.sessionStorage.setItem("inertiaLocationVisit",JSON.stringify(r)),window.location.href=i.href,Td(window.location).href===Td(i).href&&window.location.reload()}catch{return!1}}isLocationVisit(){try{return window.sessionStorage.getItem("inertiaLocationVisit")!==null}catch{return!1}}handleLocationVisit(i){var r,l;let n=JSON.parse(window.sessionStorage.getItem("inertiaLocationVisit")||"");window.sessionStorage.removeItem("inertiaLocationVisit"),i.url+=window.location.hash,i.rememberedState=((r=window.history.state)==null?void 0:r.rememberedState)??{},i.scrollRegions=((l=window.history.state)==null?void 0:l.scrollRegions)??[],this.setPage(i,{preserveScroll:n.preserveScroll,preserveState:!0}).then(()=>{n.preserveScroll&&this.restoreScrollPositions(),Sd(i)})}isLocationVisitResponse(i){return!!(i&&i.status===409&&i.headers["x-inertia-location"])}isInertiaResponse(i){return!!(i!=null&&i.headers["x-inertia"])}createVisitId(){return this.visitId={},this.visitId}cancelVisit(i,{cancelled:n=!1,interrupted:r=!1}){i&&!i.completed&&!i.cancelled&&!i.interrupted&&(i.cancelToken.abort(),i.onCancel(),i.completed=!1,i.cancelled=n,i.interrupted=r,vS(i),i.onFinish(i))}finishVisit(i){!i.cancelled&&!i.interrupted&&(i.completed=!0,i.cancelled=!1,i.interrupted=!1,vS(i),i.onFinish(i))}resolvePreserveOption(i,n){return typeof i=="function"?i(n):i==="errors"?Object.keys(n.props.errors||{}).length>0:i}cancel(){this.activeVisit&&this.cancelVisit(this.activeVisit,{cancelled:!0})}visit(i,{method:n="get",data:r={},replace:l=!1,preserveScroll:u=!1,preserveState:p=!1,only:f=[],except:b=[],headers:m={},errorBag:A="",forceFormData:v=!1,onCancelToken:x=()=>{},onBefore:C=()=>{},onStart:E=()=>{},onProgress:T=()=>{},onFinish:I=()=>{},onCancel:F=()=>{},onSuccess:N=()=>{},onError:L=()=>{},queryStringArrayFormat:B="brackets"}={}){let z=typeof i=="string"?vl(i):i;if((dk(r)||v)&&!(r instanceof FormData)&&(r=r5(r)),!(r instanceof FormData)){let[H,V]=l5(n,z,r,B);z=vl(H),r=V}let U={url:z,method:n,data:r,replace:l,preserveScroll:u,preserveState:p,only:f,except:b,headers:m,errorBag:A,forceFormData:v,queryStringArrayFormat:B,cancelled:!1,completed:!1,interrupted:!1};if(C(U)===!1||!rH(U))return;this.activeVisit&&this.cancelVisit(this.activeVisit,{interrupted:!0}),this.saveScrollPositions();let W=this.createVisitId();this.activeVisit={...U,onCancelToken:x,onBefore:C,onStart:E,onProgress:T,onFinish:I,onCancel:F,onSuccess:N,onError:L,queryStringArrayFormat:B,cancelToken:new AbortController},x({cancel:()=>{this.activeVisit&&this.cancelVisit(this.activeVisit,{cancelled:!0})}}),dH(U),E(U);let P=!!(f.length||b.length);dn({method:n,url:Td(z).href,data:n==="get"?{}:r,params:n==="get"?r:{},signal:this.activeVisit.cancelToken.signal,headers:{...m,Accept:"text/html, application/xhtml+xml","X-Requested-With":"XMLHttpRequest","X-Inertia":!0,...P?{"X-Inertia-Partial-Component":this.page.component}:{},...f.length?{"X-Inertia-Partial-Data":f.join(",")}:{},...b.length?{"X-Inertia-Partial-Except":b.join(",")}:{},...A&&A.length?{"X-Inertia-Error-Bag":A}:{},...this.page.version?{"X-Inertia-Version":this.page.version}:{}},onUploadProgress:H=>{r instanceof FormData&&(H.percentage=H.progress?Math.round(H.progress*100):0,cH(H),T(H))}}).then(H=>{var J;if(!this.isInertiaResponse(H))return Promise.reject({response:H});let V=H.data;P&&V.component===this.page.component&&(V.props={...this.page.props,...V.props}),u=this.resolvePreserveOption(u,V),p=this.resolvePreserveOption(p,V),p&&((J=window.history.state)!=null&&J.rememberedState)&&V.component===this.page.component&&(V.rememberedState=window.history.state.rememberedState);let q=z,Y=vl(V.url);return q.hash&&!Y.hash&&Td(q).href===Y.href&&(Y.hash=q.hash,V.url=Y.href),this.setPage(V,{visitId:W,replace:l,preserveScroll:u,preserveState:p})}).then(()=>{let H=this.page.props.errors||{};if(Object.keys(H).length>0){let V=A?H[A]?H[A]:{}:H;return sH(V),L(V)}return uH(this.page),N(this.page)}).catch(H=>{if(this.isInertiaResponse(H.response))return this.setPage(H.response.data,{visitId:W});if(this.isLocationVisitResponse(H.response)){let V=vl(H.response.headers["x-inertia-location"]),q=z;q.hash&&!V.hash&&Td(q).href===V.href&&(V.hash=q.hash),this.locationVisit(V,u===!0)}else if(H.response)lH(H.response)&&hH.show(H.response.data);else return Promise.reject(H)}).then(()=>{this.activeVisit&&this.finishVisit(this.activeVisit)}).catch(H=>{if(!dn.isCancel(H)){let V=aH(H);if(this.activeVisit&&this.finishVisit(this.activeVisit),V)return Promise.reject(H)}})}setPage(i,{visitId:n=this.createVisitId(),replace:r=!1,preserveScroll:l=!1,preserveState:u=!1}={}){return Promise.resolve(this.resolveComponent(i.component)).then(p=>{n===this.visitId&&(i.scrollRegions=i.scrollRegions||[],i.rememberedState=i.rememberedState||{},r=r||vl(i.url).href===window.location.href,r?this.replaceState(i):this.pushState(i),this.swapComponent({component:p,page:i,preserveState:u}).then(()=>{l||this.resetScrollPositions(),r||Sd(i)}))})}pushState(i){this.page=i,window.history.pushState(i,"",i.url)}replaceState(i){this.page=i,window.history.replaceState(i,"",i.url)}handlePopstateEvent(i){if(i.state!==null){let n=i.state,r=this.createVisitId();Promise.resolve(this.resolveComponent(n.component)).then(l=>{r===this.visitId&&(this.page=n,this.swapComponent({component:l,page:n,preserveState:!1}).then(()=>{this.restoreScrollPositions(),Sd(n)}))})}else{let n=vl(this.page.url);n.hash=window.location.hash,this.replaceState({...this.page,url:n.href}),this.resetScrollPositions()}}get(i,n={},r={}){return this.visit(i,{...r,method:"get",data:n})}reload(i={}){return this.visit(window.location.href,{...i,preserveScroll:!0,preserveState:!0})}replace(i,n={}){return console.warn(`Inertia.replace() has been deprecated and will be removed in a future release. Please use Inertia.${n.method??"get"}() instead.`),this.visit(i,{preserveState:!0,...n,replace:!0})}post(i,n={},r={}){return this.visit(i,{preserveState:!0,...r,method:"post",data:n})}put(i,n={},r={}){return this.visit(i,{preserveState:!0,...r,method:"put",data:n})}patch(i,n={},r={}){return this.visit(i,{preserveState:!0,...r,method:"patch",data:n})}delete(i,n={}){return this.visit(i,{preserveState:!0,...n,method:"delete"})}remember(i,n="default"){var r;AS||this.replaceState({...this.page,rememberedState:{...(r=this.page)==null?void 0:r.rememberedState,[n]:i}})}restore(i="default"){var n,r;if(!AS)return(r=(n=window.history.state)==null?void 0:n.rememberedState)==null?void 0:r[i]}on(i,n){let r=l=>{let u=n(l);l.cancelable&&!l.defaultPrevented&&u===!1&&l.preventDefault()};return document.addEventListener(`inertia:${i}`,r),()=>document.removeEventListener(`inertia:${i}`,r)}},fH={buildDOMElement(i){let n=document.createElement("template");n.innerHTML=i;let r=n.content.firstChild;if(!i.startsWith("<script "))return r;let l=document.createElement("script");return l.innerHTML=r.innerHTML,r.getAttributeNames().forEach(u=>{l.setAttribute(u,r.getAttribute(u)||"")}),l},isInertiaManagedElement(i){return i.nodeType===Node.ELEMENT_NODE&&i.getAttribute("inertia")!==null},findMatchingElementIndex(i,n){let r=i.getAttribute("inertia");return r!==null?n.findIndex(l=>l.getAttribute("inertia")===r):-1},update:i5(function(i){let n=i.map(r=>this.buildDOMElement(r));Array.from(document.head.childNodes).filter(r=>this.isInertiaManagedElement(r)).forEach(r=>{var p,f;let l=this.findMatchingElementIndex(r,n);if(l===-1){(p=r==null?void 0:r.parentNode)==null||p.removeChild(r);return}let u=n.splice(l,1)[0];u&&!r.isEqualNode(u)&&((f=r==null?void 0:r.parentNode)==null||f.replaceChild(u,r))}),n.forEach(r=>document.head.appendChild(r))},1)};function mH(i,n,r){let l={},u=0;function p(){let v=u+=1;return l[v]=[],v.toString()}function f(v){v===null||Object.keys(l).indexOf(v)===-1||(delete l[v],A())}function b(v,x=[]){v!==null&&Object.keys(l).indexOf(v)>-1&&(l[v]=x),A()}function m(){let v=n(""),x={...v?{title:`<title inertia="">${v}</title>`}:{}},C=Object.values(l).reduce((E,T)=>E.concat(T),[]).reduce((E,T)=>{if(T.indexOf("<")===-1)return E;if(T.indexOf("<title ")===0){let F=T.match(/(<title [^>]+>)(.*?)(<\/title>)/);return E.title=F?`${F[1]}${n(F[2])}${F[3]}`:T,E}let I=T.match(/ inertia="[^"]+"/);return I?E[I[0]]=T:E[Object.keys(E).length]=T,E},x);return Object.values(C)}function A(){i?r(m()):fH.update(m())}return A(),{forceUpdate:A,createProvider:function(){let v=p();return{update:x=>b(v,x),disconnect:()=>f(v)}}}}var c5=null;function gH(i){document.addEventListener("inertia:start",bH.bind(null,i)),document.addEventListener("inertia:progress",kH),document.addEventListener("inertia:finish",_H)}function bH(i){c5=setTimeout(()=>Zi.start(),i)}function kH(i){var n;Zi.isStarted()&&((n=i.detail.progress)!=null&&n.percentage)&&Zi.set(Math.max(Zi.status,i.detail.progress.percentage/100*.9))}function _H(i){if(clearTimeout(c5),Zi.isStarted())i.detail.visit.completed?Zi.done():i.detail.visit.interrupted?Zi.set(0):i.detail.visit.cancelled&&(Zi.done(),Zi.remove());else return}function wH(i){let n=document.createElement("style");n.type="text/css",n.textContent=`
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
  `,document.head.appendChild(n)}function vH({delay:i=250,color:n="#29d",includeCSS:r=!0,showSpinner:l=!1}={}){gH(i),Zi.configure({showSpinner:l}),r&&wH(n)}function AH(i){let n=i.currentTarget.tagName.toLowerCase()==="a";return!(i.target&&(i==null?void 0:i.target).isContentEditable||i.defaultPrevented||n&&i.which>1||n&&i.altKey||n&&i.ctrlKey||n&&i.metaKey||n&&i.shiftKey)}var Ze=new pH;/**
* @vue/shared v3.4.33
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function gf(i,n){const r=new Set(i.split(","));return l=>r.has(l)}const jt={},Bl=[],So=()=>{},CH=()=>!1,hu=i=>i.charCodeAt(0)===111&&i.charCodeAt(1)===110&&(i.charCodeAt(2)>122||i.charCodeAt(2)<97),r_=i=>i.startsWith("onUpdate:"),sn=Object.assign,s_=(i,n)=>{const r=i.indexOf(n);r>-1&&i.splice(r,1)},yH=Object.prototype.hasOwnProperty,Dt=(i,n)=>yH.call(i,n),$e=Array.isArray,Pl=i=>dc(i)==="[object Map]",Na=i=>dc(i)==="[object Set]",CS=i=>dc(i)==="[object Date]",xH=i=>dc(i)==="[object RegExp]",nt=i=>typeof i=="function",nn=i=>typeof i=="string",tr=i=>typeof i=="symbol",Ut=i=>i!==null&&typeof i=="object",a_=i=>(Ut(i)||nt(i))&&nt(i.then)&&nt(i.catch),d5=Object.prototype.toString,dc=i=>d5.call(i),EH=i=>dc(i).slice(8,-1),u5=i=>dc(i)==="[object Object]",l_=i=>nn(i)&&i!=="NaN"&&i[0]!=="-"&&""+parseInt(i,10)===i,Nl=gf(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),bf=i=>{const n=Object.create(null);return r=>n[r]||(n[r]=i(r))},SH=/-(\w)/g,Zn=bf(i=>i.replace(SH,(n,r)=>r?r.toUpperCase():"")),TH=/\B([A-Z])/g,xo=bf(i=>i.replace(TH,"-$1").toLowerCase()),pu=bf(i=>i.charAt(0).toUpperCase()+i.slice(1)),$d=bf(i=>i?`on${pu(i)}`:""),Ii=(i,n)=>!Object.is(i,n),Ll=(i,...n)=>{for(let r=0;r<i.length;r++)i[r](...n)},h5=(i,n,r,l=!1)=>{Object.defineProperty(i,n,{configurable:!0,enumerable:!1,writable:l,value:r})},Pp=i=>{const n=parseFloat(i);return isNaN(n)?i:n},Np=i=>{const n=nn(i)?Number(i):NaN;return isNaN(n)?i:n};let yS;const p5=()=>yS||(yS=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{}),DH="Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt,console,Error",IH=gf(DH);function fu(i){if($e(i)){const n={};for(let r=0;r<i.length;r++){const l=i[r],u=nn(l)?PH(l):fu(l);if(u)for(const p in u)n[p]=u[p]}return n}else if(nn(i)||Ut(i))return i}const MH=/;(?![^(]*\))/g,OH=/:([^]+)/,BH=/\/\*[^]*?\*\//g;function PH(i){const n={};return i.replace(BH,"").split(MH).forEach(r=>{if(r){const l=r.split(OH);l.length>1&&(n[l[0].trim()]=l[1].trim())}}),n}function Kn(i){let n="";if(nn(i))n=i;else if($e(i))for(let r=0;r<i.length;r++){const l=Kn(i[r]);l&&(n+=l+" ")}else if(Ut(i))for(const r in i)i[r]&&(n+=r+" ");return n.trim()}function NH(i){if(!i)return null;let{class:n,style:r}=i;return n&&!nn(n)&&(i.class=Kn(n)),r&&(i.style=fu(r)),i}const LH="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",RH=gf(LH);function f5(i){return!!i||i===""}function FH(i,n){if(i.length!==n.length)return!1;let r=!0;for(let l=0;r&&l<i.length;l++)r=fs(i[l],n[l]);return r}function fs(i,n){if(i===n)return!0;let r=CS(i),l=CS(n);if(r||l)return r&&l?i.getTime()===n.getTime():!1;if(r=tr(i),l=tr(n),r||l)return i===n;if(r=$e(i),l=$e(n),r||l)return r&&l?FH(i,n):!1;if(r=Ut(i),l=Ut(n),r||l){if(!r||!l)return!1;const u=Object.keys(i).length,p=Object.keys(n).length;if(u!==p)return!1;for(const f in i){const b=i.hasOwnProperty(f),m=n.hasOwnProperty(f);if(b&&!m||!b&&m||!fs(i[f],n[f]))return!1}}return String(i)===String(n)}function kf(i,n){return i.findIndex(r=>fs(r,n))}const m5=i=>!!(i&&i.__v_isRef===!0),le=i=>nn(i)?i:i==null?"":$e(i)||Ut(i)&&(i.toString===d5||!nt(i.toString))?m5(i)?le(i.value):JSON.stringify(i,g5,2):String(i),g5=(i,n)=>m5(n)?g5(i,n.value):Pl(n)?{[`Map(${n.size})`]:[...n.entries()].reduce((r,[l,u],p)=>(r[db(l,p)+" =>"]=u,r),{})}:Na(n)?{[`Set(${n.size})`]:[...n.values()].map(r=>db(r))}:tr(n)?db(n):Ut(n)&&!$e(n)&&!u5(n)?String(n):n,db=(i,n="")=>{var r;return tr(i)?`Symbol(${(r=i.description)!=null?r:n})`:i};/**
* @vue/reactivity v3.4.33
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let $o;class c_{constructor(n=!1){this.detached=n,this._active=!0,this.effects=[],this.cleanups=[],this.parent=$o,!n&&$o&&(this.index=($o.scopes||($o.scopes=[])).push(this)-1)}get active(){return this._active}run(n){if(this._active){const r=$o;try{return $o=this,n()}finally{$o=r}}}on(){$o=this}off(){$o=this.parent}stop(n){if(this._active){let r,l;for(r=0,l=this.effects.length;r<l;r++)this.effects[r].stop();for(r=0,l=this.cleanups.length;r<l;r++)this.cleanups[r]();if(this.scopes)for(r=0,l=this.scopes.length;r<l;r++)this.scopes[r].stop(!0);if(!this.detached&&this.parent&&!n){const u=this.parent.scopes.pop();u&&u!==this&&(this.parent.scopes[this.index]=u,u.index=this.index)}this.parent=void 0,this._active=!1}}}function zH(i){return new c_(i)}function b5(i,n=$o){n&&n.active&&n.effects.push(i)}function k5(){return $o}function jH(i){$o&&$o.cleanups.push(i)}let _a;class Wl{constructor(n,r,l,u){this.fn=n,this.trigger=r,this.scheduler=l,this.active=!0,this.deps=[],this._dirtyLevel=4,this._trackId=0,this._runnings=0,this._shouldSchedule=!1,this._depsLength=0,b5(this,u)}get dirty(){if(this._dirtyLevel===2||this._dirtyLevel===3){this._dirtyLevel=1,ys();for(let n=0;n<this._depsLength;n++){const r=this.deps[n];if(r.computed&&($H(r.computed),this._dirtyLevel>=4))break}this._dirtyLevel===1&&(this._dirtyLevel=0),xs()}return this._dirtyLevel>=4}set dirty(n){this._dirtyLevel=n?4:0}run(){if(this._dirtyLevel=0,!this.active)return this.fn();let n=us,r=_a;try{return us=!0,_a=this,this._runnings++,xS(this),this.fn()}finally{ES(this),this._runnings--,_a=r,us=n}}stop(){this.active&&(xS(this),ES(this),this.onStop&&this.onStop(),this.active=!1)}}function $H(i){return i.value}function xS(i){i._trackId++,i._depsLength=0}function ES(i){if(i.deps.length>i._depsLength){for(let n=i._depsLength;n<i.deps.length;n++)_5(i.deps[n],i);i.deps.length=i._depsLength}}function _5(i,n){const r=i.get(n);r!==void 0&&n._trackId!==r&&(i.delete(n),i.size===0&&i.cleanup())}function VH(i,n){i.effect instanceof Wl&&(i=i.effect.fn);const r=new Wl(i,So,()=>{r.dirty&&r.run()});n&&(sn(r,n),n.scope&&b5(r,n.scope)),(!n||!n.lazy)&&r.run();const l=r.run.bind(r);return l.effect=r,l}function HH(i){i.effect.stop()}let us=!0,uk=0;const w5=[];function ys(){w5.push(us),us=!1}function xs(){const i=w5.pop();us=i===void 0?!0:i}function d_(){uk++}function u_(){for(uk--;!uk&&hk.length;)hk.shift()()}function v5(i,n,r){if(n.get(i)!==i._trackId){n.set(i,i._trackId);const l=i.deps[i._depsLength];l!==n?(l&&_5(l,i),i.deps[i._depsLength++]=n):i._depsLength++}}const hk=[];function A5(i,n,r){d_();for(const l of i.keys()){let u;l._dirtyLevel<n&&(u??(u=i.get(l)===l._trackId))&&(l._shouldSchedule||(l._shouldSchedule=l._dirtyLevel===0),l._dirtyLevel=n),l._shouldSchedule&&(u??(u=i.get(l)===l._trackId))&&(l.trigger(),(!l._runnings||l.allowRecurse)&&l._dirtyLevel!==2&&(l._shouldSchedule=!1,l.scheduler&&hk.push(l.scheduler)))}u_()}const C5=(i,n)=>{const r=new Map;return r.cleanup=i,r.computed=n,r},Lp=new WeakMap,wa=Symbol(""),pk=Symbol("");function Io(i,n,r){if(us&&_a){let l=Lp.get(i);l||Lp.set(i,l=new Map);let u=l.get(r);u||l.set(r,u=C5(()=>l.delete(r))),v5(_a,u)}}function Sr(i,n,r,l,u,p){const f=Lp.get(i);if(!f)return;let b=[];if(n==="clear")b=[...f.values()];else if(r==="length"&&$e(i)){const m=Number(l);f.forEach((A,v)=>{(v==="length"||!tr(v)&&v>=m)&&b.push(A)})}else switch(r!==void 0&&b.push(f.get(r)),n){case"add":$e(i)?l_(r)&&b.push(f.get("length")):(b.push(f.get(wa)),Pl(i)&&b.push(f.get(pk)));break;case"delete":$e(i)||(b.push(f.get(wa)),Pl(i)&&b.push(f.get(pk)));break;case"set":Pl(i)&&b.push(f.get(wa));break}d_();for(const m of b)m&&A5(m,4);u_()}function UH(i,n){const r=Lp.get(i);return r&&r.get(n)}const qH=gf("__proto__,__v_isRef,__isVue"),y5=new Set(Object.getOwnPropertyNames(Symbol).filter(i=>i!=="arguments"&&i!=="caller").map(i=>Symbol[i]).filter(tr)),SS=GH();function GH(){const i={};return["includes","indexOf","lastIndexOf"].forEach(n=>{i[n]=function(...r){const l=yt(this);for(let p=0,f=this.length;p<f;p++)Io(l,"get",p+"");const u=l[n](...r);return u===-1||u===!1?l[n](...r.map(yt)):u}}),["push","pop","shift","unshift","splice"].forEach(n=>{i[n]=function(...r){ys(),d_();const l=yt(this)[n].apply(this,r);return u_(),xs(),l}}),i}function WH(i){tr(i)||(i=String(i));const n=yt(this);return Io(n,"has",i),n.hasOwnProperty(i)}class x5{constructor(n=!1,r=!1){this._isReadonly=n,this._isShallow=r}get(n,r,l){const u=this._isReadonly,p=this._isShallow;if(r==="__v_isReactive")return!u;if(r==="__v_isReadonly")return u;if(r==="__v_isShallow")return p;if(r==="__v_raw")return l===(u?p?M5:I5:p?D5:T5).get(n)||Object.getPrototypeOf(n)===Object.getPrototypeOf(l)?n:void 0;const f=$e(n);if(!u){if(f&&Dt(SS,r))return Reflect.get(SS,r,l);if(r==="hasOwnProperty")return WH}const b=Reflect.get(n,r,l);return(tr(r)?y5.has(r):qH(r))||(u||Io(n,"get",r),p)?b:Vn(b)?f&&l_(r)?b:b.value:Ut(b)?u?p_(b):on(b):b}}class E5 extends x5{constructor(n=!1){super(!1,n)}set(n,r,l,u){let p=n[r];if(!this._isShallow){const m=ms(p);if(!Ea(l)&&!ms(l)&&(p=yt(p),l=yt(l)),!$e(n)&&Vn(p)&&!Vn(l))return m?!1:(p.value=l,!0)}const f=$e(n)&&l_(r)?Number(r)<n.length:Dt(n,r),b=Reflect.set(n,r,l,u);return n===yt(u)&&(f?Ii(l,p)&&Sr(n,"set",r,l):Sr(n,"add",r,l)),b}deleteProperty(n,r){const l=Dt(n,r);n[r];const u=Reflect.deleteProperty(n,r);return u&&l&&Sr(n,"delete",r,void 0),u}has(n,r){const l=Reflect.has(n,r);return(!tr(r)||!y5.has(r))&&Io(n,"has",r),l}ownKeys(n){return Io(n,"iterate",$e(n)?"length":wa),Reflect.ownKeys(n)}}class S5 extends x5{constructor(n=!1){super(!0,n)}set(n,r){return!0}deleteProperty(n,r){return!0}}const KH=new E5,YH=new S5,QH=new E5(!0),ZH=new S5(!0),h_=i=>i,_f=i=>Reflect.getPrototypeOf(i);function Vh(i,n,r=!1,l=!1){i=i.__v_raw;const u=yt(i),p=yt(n);r||(Ii(n,p)&&Io(u,"get",n),Io(u,"get",p));const{has:f}=_f(u),b=l?h_:r?m_:Jd;if(f.call(u,n))return b(i.get(n));if(f.call(u,p))return b(i.get(p));i!==u&&i.get(n)}function Hh(i,n=!1){const r=this.__v_raw,l=yt(r),u=yt(i);return n||(Ii(i,u)&&Io(l,"has",i),Io(l,"has",u)),i===u?r.has(i):r.has(i)||r.has(u)}function Uh(i,n=!1){return i=i.__v_raw,!n&&Io(yt(i),"iterate",wa),Reflect.get(i,"size",i)}function TS(i,n=!1){!n&&!Ea(i)&&!ms(i)&&(i=yt(i));const r=yt(this);return _f(r).has.call(r,i)||(r.add(i),Sr(r,"add",i,i)),this}function DS(i,n,r=!1){!r&&!Ea(n)&&!ms(n)&&(n=yt(n));const l=yt(this),{has:u,get:p}=_f(l);let f=u.call(l,i);f||(i=yt(i),f=u.call(l,i));const b=p.call(l,i);return l.set(i,n),f?Ii(n,b)&&Sr(l,"set",i,n):Sr(l,"add",i,n),this}function IS(i){const n=yt(this),{has:r,get:l}=_f(n);let u=r.call(n,i);u||(i=yt(i),u=r.call(n,i)),l&&l.call(n,i);const p=n.delete(i);return u&&Sr(n,"delete",i,void 0),p}function MS(){const i=yt(this),n=i.size!==0,r=i.clear();return n&&Sr(i,"clear",void 0,void 0),r}function qh(i,n){return function(l,u){const p=this,f=p.__v_raw,b=yt(f),m=n?h_:i?m_:Jd;return!i&&Io(b,"iterate",wa),f.forEach((A,v)=>l.call(u,m(A),m(v),p))}}function Gh(i,n,r){return function(...l){const u=this.__v_raw,p=yt(u),f=Pl(p),b=i==="entries"||i===Symbol.iterator&&f,m=i==="keys"&&f,A=u[i](...l),v=r?h_:n?m_:Jd;return!n&&Io(p,"iterate",m?pk:wa),{next(){const{value:x,done:C}=A.next();return C?{value:x,done:C}:{value:b?[v(x[0]),v(x[1])]:v(x),done:C}},[Symbol.iterator](){return this}}}}function es(i){return function(...n){return i==="delete"?!1:i==="clear"?void 0:this}}function JH(){const i={get(p){return Vh(this,p)},get size(){return Uh(this)},has:Hh,add:TS,set:DS,delete:IS,clear:MS,forEach:qh(!1,!1)},n={get(p){return Vh(this,p,!1,!0)},get size(){return Uh(this)},has:Hh,add(p){return TS.call(this,p,!0)},set(p,f){return DS.call(this,p,f,!0)},delete:IS,clear:MS,forEach:qh(!1,!0)},r={get(p){return Vh(this,p,!0)},get size(){return Uh(this,!0)},has(p){return Hh.call(this,p,!0)},add:es("add"),set:es("set"),delete:es("delete"),clear:es("clear"),forEach:qh(!0,!1)},l={get(p){return Vh(this,p,!0,!0)},get size(){return Uh(this,!0)},has(p){return Hh.call(this,p,!0)},add:es("add"),set:es("set"),delete:es("delete"),clear:es("clear"),forEach:qh(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(p=>{i[p]=Gh(p,!1,!1),r[p]=Gh(p,!0,!1),n[p]=Gh(p,!1,!0),l[p]=Gh(p,!0,!0)}),[i,r,n,l]}const[XH,eU,tU,nU]=JH();function wf(i,n){const r=n?i?nU:tU:i?eU:XH;return(l,u,p)=>u==="__v_isReactive"?!i:u==="__v_isReadonly"?i:u==="__v_raw"?l:Reflect.get(Dt(r,u)&&u in l?r:l,u,p)}const oU={get:wf(!1,!1)},iU={get:wf(!1,!0)},rU={get:wf(!0,!1)},sU={get:wf(!0,!0)},T5=new WeakMap,D5=new WeakMap,I5=new WeakMap,M5=new WeakMap;function aU(i){switch(i){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function lU(i){return i.__v_skip||!Object.isExtensible(i)?0:aU(EH(i))}function on(i){return ms(i)?i:vf(i,!1,KH,oU,T5)}function O5(i){return vf(i,!1,QH,iU,D5)}function p_(i){return vf(i,!0,YH,rU,I5)}function cU(i){return vf(i,!0,ZH,sU,M5)}function vf(i,n,r,l,u){if(!Ut(i)||i.__v_raw&&!(n&&i.__v_isReactive))return i;const p=u.get(i);if(p)return p;const f=lU(i);if(f===0)return i;const b=new Proxy(i,f===2?l:r);return u.set(i,b),b}function va(i){return ms(i)?va(i.__v_raw):!!(i&&i.__v_isReactive)}function ms(i){return!!(i&&i.__v_isReadonly)}function Ea(i){return!!(i&&i.__v_isShallow)}function f_(i){return i?!!i.__v_raw:!1}function yt(i){const n=i&&i.__v_raw;return n?yt(n):i}function Rp(i){return Object.isExtensible(i)&&h5(i,"__v_skip",!0),i}const Jd=i=>Ut(i)?on(i):i,m_=i=>Ut(i)?p_(i):i;class B5{constructor(n,r,l,u){this.getter=n,this._setter=r,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this.effect=new Wl(()=>n(this._value),()=>Rl(this,this.effect._dirtyLevel===2?2:3)),this.effect.computed=this,this.effect.active=this._cacheable=!u,this.__v_isReadonly=l}get value(){const n=yt(this);return(!n._cacheable||n.effect.dirty)&&Ii(n._value,n._value=n.effect.run())&&Rl(n,4),g_(n),n.effect._dirtyLevel>=2&&Rl(n,2),n._value}set value(n){this._setter(n)}get _dirty(){return this.effect.dirty}set _dirty(n){this.effect.dirty=n}}function dU(i,n,r=!1){let l,u;const p=nt(i);return p?(l=i,u=So):(l=i.get,u=i.set),new B5(l,u,p||!u,r)}function g_(i){var n;us&&_a&&(i=yt(i),v5(_a,(n=i.dep)!=null?n:i.dep=C5(()=>i.dep=void 0,i instanceof B5?i:void 0)))}function Rl(i,n=4,r,l){i=yt(i);const u=i.dep;u&&A5(u,n)}function Vn(i){return!!(i&&i.__v_isRef===!0)}function vt(i){return N5(i,!1)}function P5(i){return N5(i,!0)}function N5(i,n){return Vn(i)?i:new uU(i,n)}class uU{constructor(n,r){this.__v_isShallow=r,this.dep=void 0,this.__v_isRef=!0,this._rawValue=r?n:yt(n),this._value=r?n:Jd(n)}get value(){return g_(this),this._value}set value(n){const r=this.__v_isShallow||Ea(n)||ms(n);n=r?n:yt(n),Ii(n,this._rawValue)&&(this._rawValue,this._rawValue=n,this._value=r?n:Jd(n),Rl(this,4))}}function hU(i){Rl(i,4)}function b_(i){return Vn(i)?i.value:i}function pU(i){return nt(i)?i():b_(i)}const fU={get:(i,n,r)=>b_(Reflect.get(i,n,r)),set:(i,n,r,l)=>{const u=i[n];return Vn(u)&&!Vn(r)?(u.value=r,!0):Reflect.set(i,n,r,l)}};function k_(i){return va(i)?i:new Proxy(i,fU)}class mU{constructor(n){this.dep=void 0,this.__v_isRef=!0;const{get:r,set:l}=n(()=>g_(this),()=>Rl(this));this._get=r,this._set=l}get value(){return this._get()}set value(n){this._set(n)}}function L5(i){return new mU(i)}function gU(i){const n=$e(i)?new Array(i.length):{};for(const r in i)n[r]=R5(i,r);return n}class bU{constructor(n,r,l){this._object=n,this._key=r,this._defaultValue=l,this.__v_isRef=!0}get value(){const n=this._object[this._key];return n===void 0?this._defaultValue:n}set value(n){this._object[this._key]=n}get dep(){return UH(yt(this._object),this._key)}}class kU{constructor(n){this._getter=n,this.__v_isRef=!0,this.__v_isReadonly=!0}get value(){return this._getter()}}function _U(i,n,r){return Vn(i)?i:nt(i)?new kU(i):Ut(i)&&arguments.length>1?R5(i,n,r):vt(i)}function R5(i,n,r){const l=i[n];return Vn(l)?l:new bU(i,n,r)}const wU={GET:"get",HAS:"has",ITERATE:"iterate"},vU={SET:"set",ADD:"add",DELETE:"delete",CLEAR:"clear"};/**
* @vue/runtime-core v3.4.33
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function AU(i,n){}const CU={SETUP_FUNCTION:0,0:"SETUP_FUNCTION",RENDER_FUNCTION:1,1:"RENDER_FUNCTION",WATCH_GETTER:2,2:"WATCH_GETTER",WATCH_CALLBACK:3,3:"WATCH_CALLBACK",WATCH_CLEANUP:4,4:"WATCH_CLEANUP",NATIVE_EVENT_HANDLER:5,5:"NATIVE_EVENT_HANDLER",COMPONENT_EVENT_HANDLER:6,6:"COMPONENT_EVENT_HANDLER",VNODE_HOOK:7,7:"VNODE_HOOK",DIRECTIVE_HOOK:8,8:"DIRECTIVE_HOOK",TRANSITION_HOOK:9,9:"TRANSITION_HOOK",APP_ERROR_HANDLER:10,10:"APP_ERROR_HANDLER",APP_WARN_HANDLER:11,11:"APP_WARN_HANDLER",FUNCTION_REF:12,12:"FUNCTION_REF",ASYNC_COMPONENT_LOADER:13,13:"ASYNC_COMPONENT_LOADER",SCHEDULER:14,14:"SCHEDULER",COMPONENT_UPDATE:15,15:"COMPONENT_UPDATE"},yU={sp:"serverPrefetch hook",bc:"beforeCreate hook",c:"created hook",bm:"beforeMount hook",m:"mounted hook",bu:"beforeUpdate hook",u:"updated",bum:"beforeUnmount hook",um:"unmounted hook",a:"activated hook",da:"deactivated hook",ec:"errorCaptured hook",rtc:"renderTracked hook",rtg:"renderTriggered hook",0:"setup function",1:"render function",2:"watcher getter",3:"watcher callback",4:"watcher cleanup function",5:"native event handler",6:"component event handler",7:"vnode hook",8:"directive hook",9:"transition hook",10:"app errorHandler",11:"app warnHandler",12:"ref function",13:"async component loader",14:"scheduler flush",15:"component update"};function Tr(i,n,r,l){try{return l?i(...l):i()}catch(u){La(u,n,r)}}function Ho(i,n,r,l){if(nt(i)){const u=Tr(i,n,r,l);return u&&a_(u)&&u.catch(p=>{La(p,n,r)}),u}if($e(i)){const u=[];for(let p=0;p<i.length;p++)u.push(Ho(i[p],n,r,l));return u}}function La(i,n,r,l=!0){const u=n?n.vnode:null;if(n){let p=n.parent;const f=n.proxy,b=`https://vuejs.org/error-reference/#runtime-${r}`;for(;p;){const A=p.ec;if(A){for(let v=0;v<A.length;v++)if(A[v](i,f,b)===!1)return}p=p.parent}const m=n.appContext.config.errorHandler;if(m){ys(),Tr(m,null,10,[i,f,b]),xs();return}}xU(i,r,u,l)}function xU(i,n,r,l=!0){console.error(i)}let Xd=!1,fk=!1;const Yn=[];let Ji=0;const Fl=[];let rs=null,ha=0;const F5=Promise.resolve();let __=null;function mu(i){const n=__||F5;return i?n.then(this?i.bind(this):i):n}function EU(i){let n=Ji+1,r=Yn.length;for(;n<r;){const l=n+r>>>1,u=Yn[l],p=eu(u);p<i||p===i&&u.pre?n=l+1:r=l}return n}function Af(i){(!Yn.length||!Yn.includes(i,Xd&&i.allowRecurse?Ji+1:Ji))&&(i.id==null?Yn.push(i):Yn.splice(EU(i.id),0,i),z5())}function z5(){!Xd&&!fk&&(fk=!0,__=F5.then(j5))}function SU(i){const n=Yn.indexOf(i);n>Ji&&Yn.splice(n,1)}function Fp(i){$e(i)?Fl.push(...i):(!rs||!rs.includes(i,i.allowRecurse?ha+1:ha))&&Fl.push(i),z5()}function OS(i,n,r=Xd?Ji+1:0){for(;r<Yn.length;r++){const l=Yn[r];if(l&&l.pre){if(i&&l.id!==i.uid)continue;Yn.splice(r,1),r--,l()}}}function zp(i){if(Fl.length){const n=[...new Set(Fl)].sort((r,l)=>eu(r)-eu(l));if(Fl.length=0,rs){rs.push(...n);return}for(rs=n,ha=0;ha<rs.length;ha++){const r=rs[ha];r.active!==!1&&r()}rs=null,ha=0}}const eu=i=>i.id==null?1/0:i.id,TU=(i,n)=>{const r=eu(i)-eu(n);if(r===0){if(i.pre&&!n.pre)return-1;if(n.pre&&!i.pre)return 1}return r};function j5(i){fk=!1,Xd=!0,Yn.sort(TU);try{for(Ji=0;Ji<Yn.length;Ji++){const n=Yn[Ji];n&&n.active!==!1&&Tr(n,n.i,n.i?15:14)}}finally{Ji=0,Yn.length=0,zp(),Xd=!1,__=null,(Yn.length||Fl.length)&&j5()}}let El,Wh=[];function $5(i,n){var r,l;El=i,El?(El.enabled=!0,Wh.forEach(({event:u,args:p})=>El.emit(u,...p)),Wh=[]):typeof window<"u"&&window.HTMLElement&&!((l=(r=window.navigator)==null?void 0:r.userAgent)!=null&&l.includes("jsdom"))?((n.__VUE_DEVTOOLS_HOOK_REPLAY__=n.__VUE_DEVTOOLS_HOOK_REPLAY__||[]).push(p=>{$5(p,n)}),setTimeout(()=>{El||(n.__VUE_DEVTOOLS_HOOK_REPLAY__=null,Wh=[])},3e3)):Wh=[]}let Sn=null,Cf=null;function tu(i){const n=Sn;return Sn=i,Cf=i&&i.type.__scopeId||null,n}function V5(i){Cf=i}function H5(){Cf=null}const DU=i=>kt;function kt(i,n=Sn,r){if(!n||i._n)return i;const l=(...u)=>{l._d&&Ck(-1);const p=tu(n);let f;try{f=i(...u)}finally{tu(p),l._d&&Ck(1)}return f};return l._n=!0,l._c=!0,l._d=!0,l}function mt(i,n){if(Sn===null)return i;const r=_u(Sn),l=i.dirs||(i.dirs=[]);for(let u=0;u<n.length;u++){let[p,f,b,m=jt]=n[u];p&&(nt(p)&&(p={mounted:p,updated:p}),p.deep&&ls(f),l.push({dir:p,instance:r,value:f,oldValue:void 0,arg:b,modifiers:m}))}return i}function Yi(i,n,r,l){const u=i.dirs,p=n&&n.dirs;for(let f=0;f<u.length;f++){const b=u[f];p&&(b.oldValue=p[f].value);let m=b.dir[l];m&&(ys(),Ho(m,r,8,[i.el,b,i,n]),xs())}}const ss=Symbol("_leaveCb"),Kh=Symbol("_enterCb");function w_(){const i={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Es(()=>{i.isMounted=!0}),Ra(()=>{i.isUnmounting=!0}),i}const oi=[Function,Array],v_={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:oi,onEnter:oi,onAfterEnter:oi,onEnterCancelled:oi,onBeforeLeave:oi,onLeave:oi,onAfterLeave:oi,onLeaveCancelled:oi,onBeforeAppear:oi,onAppear:oi,onAfterAppear:oi,onAppearCancelled:oi},U5=i=>{const n=i.subTree;return n.component?U5(n.component):n},IU={name:"BaseTransition",props:v_,setup(i,{slots:n}){const r=Pr(),l=w_();return()=>{const u=n.default&&yf(n.default(),!0);if(!u||!u.length)return;let p=u[0];if(u.length>1){for(const C of u)if(C.type!==zn){p=C;break}}const f=yt(i),{mode:b}=f;if(l.isLeaving)return ub(p);const m=BS(p);if(!m)return ub(p);let A=Kl(m,f,l,r,C=>A=C);gs(m,A);const v=r.subTree,x=v&&BS(v);if(x&&x.type!==zn&&!Si(m,x)&&U5(r).type!==zn){const C=Kl(x,f,l,r);if(gs(x,C),b==="out-in"&&m.type!==zn)return l.isLeaving=!0,C.afterLeave=()=>{l.isLeaving=!1,r.update.active!==!1&&(r.effect.dirty=!0,r.update())},ub(p);b==="in-out"&&m.type!==zn&&(C.delayLeave=(E,T,I)=>{const F=G5(l,x);F[String(x.key)]=x,E[ss]=()=>{T(),E[ss]=void 0,delete A.delayedLeave},A.delayedLeave=I})}return p}}},q5=IU;function G5(i,n){const{leavingVNodes:r}=i;let l=r.get(n.type);return l||(l=Object.create(null),r.set(n.type,l)),l}function Kl(i,n,r,l,u){const{appear:p,mode:f,persisted:b=!1,onBeforeEnter:m,onEnter:A,onAfterEnter:v,onEnterCancelled:x,onBeforeLeave:C,onLeave:E,onAfterLeave:T,onLeaveCancelled:I,onBeforeAppear:F,onAppear:N,onAfterAppear:L,onAppearCancelled:B}=n,z=String(i.key),U=G5(r,i),W=(V,q)=>{V&&Ho(V,l,9,q)},P=(V,q)=>{const Y=q[1];W(V,q),$e(V)?V.every(J=>J.length<=1)&&Y():V.length<=1&&Y()},H={mode:f,persisted:b,beforeEnter(V){let q=m;if(!r.isMounted)if(p)q=F||m;else return;V[ss]&&V[ss](!0);const Y=U[z];Y&&Si(i,Y)&&Y.el[ss]&&Y.el[ss](),W(q,[V])},enter(V){let q=A,Y=v,J=x;if(!r.isMounted)if(p)q=N||A,Y=L||v,J=B||x;else return;let te=!1;const re=V[Kh]=ae=>{te||(te=!0,ae?W(J,[V]):W(Y,[V]),H.delayedLeave&&H.delayedLeave(),V[Kh]=void 0)};q?P(q,[V,re]):re()},leave(V,q){const Y=String(i.key);if(V[Kh]&&V[Kh](!0),r.isUnmounting)return q();W(C,[V]);let J=!1;const te=V[ss]=re=>{J||(J=!0,q(),re?W(I,[V]):W(T,[V]),V[ss]=void 0,U[Y]===i&&delete U[Y])};U[Y]=i,E?P(E,[V,te]):te()},clone(V){const q=Kl(V,n,r,l,u);return u&&u(q),q}};return H}function ub(i){if(gu(i))return i=nr(i),i.children=null,i}function BS(i){if(!gu(i))return i;const{shapeFlag:n,children:r}=i;if(r){if(n&16)return r[0];if(n&32&&nt(r.default))return r.default()}}function gs(i,n){i.shapeFlag&6&&i.component?gs(i.component.subTree,n):i.shapeFlag&128?(i.ssContent.transition=n.clone(i.ssContent),i.ssFallback.transition=n.clone(i.ssFallback)):i.transition=n}function yf(i,n=!1,r){let l=[],u=0;for(let p=0;p<i.length;p++){let f=i[p];const b=r==null?f.key:String(r)+String(f.key!=null?f.key:p);f.type===Pe?(f.patchFlag&128&&u++,l=l.concat(yf(f.children,n,b))):(n||f.type!==zn)&&l.push(b!=null?nr(f,{key:b}):f)}if(u>1)for(let p=0;p<l.length;p++)l[p].patchFlag=-2;return l}/*! #__NO_SIDE_EFFECTS__ */function uc(i,n){return nt(i)?sn({name:i.name},n,{setup:i}):i}const Aa=i=>!!i.type.__asyncLoader;/*! #__NO_SIDE_EFFECTS__ */function MU(i){nt(i)&&(i={loader:i});const{loader:n,loadingComponent:r,errorComponent:l,delay:u=200,timeout:p,suspensible:f=!0,onError:b}=i;let m=null,A,v=0;const x=()=>(v++,m=null,C()),C=()=>{let E;return m||(E=m=n().catch(T=>{if(T=T instanceof Error?T:new Error(String(T)),b)return new Promise((I,F)=>{b(T,()=>I(x()),()=>F(T),v+1)});throw T}).then(T=>E!==m&&m?m:(T&&(T.__esModule||T[Symbol.toStringTag]==="Module")&&(T=T.default),A=T,T)))};return uc({name:"AsyncComponentWrapper",__asyncLoader:C,get __asyncResolved(){return A},setup(){const E=En;if(A)return()=>hb(A,E);const T=L=>{m=null,La(L,E,13,!l)};if(f&&E.suspense||ku)return C().then(L=>()=>hb(L,E)).catch(L=>(T(L),()=>l?ue(l,{error:L}):null));const I=vt(!1),F=vt(),N=vt(!!u);return u&&setTimeout(()=>{N.value=!1},u),p!=null&&setTimeout(()=>{if(!I.value&&!F.value){const L=new Error(`Async component timed out after ${p}ms.`);T(L),F.value=L}},p),C().then(()=>{I.value=!0,E.parent&&gu(E.parent.vnode)&&(E.parent.effect.dirty=!0,Af(E.parent.update))}).catch(L=>{T(L),F.value=L}),()=>{if(I.value&&A)return hb(A,E);if(F.value&&l)return ue(l,{error:F.value});if(r&&!N.value)return ue(r)}}})}function hb(i,n){const{ref:r,props:l,children:u,ce:p}=n.vnode,f=ue(i,l,u);return f.ref=r,f.ce=p,delete n.vnode.ce,f}const gu=i=>i.type.__isKeepAlive,OU={name:"KeepAlive",__isKeepAlive:!0,props:{include:[String,RegExp,Array],exclude:[String,RegExp,Array],max:[String,Number]},setup(i,{slots:n}){const r=Pr(),l=r.ctx;if(!l.renderer)return()=>{const L=n.default&&n.default();return L&&L.length===1?L[0]:L};const u=new Map,p=new Set;let f=null;const b=r.suspense,{renderer:{p:m,m:A,um:v,o:{createElement:x}}}=l,C=x("div");l.activate=(L,B,z,U,W)=>{const P=L.component;A(L,B,z,0,b),m(P.vnode,L,B,z,P,b,U,L.slotScopeIds,W),Ln(()=>{P.isDeactivated=!1,P.a&&Ll(P.a);const H=L.props&&L.props.onVnodeMounted;H&&Co(H,P.parent,L)},b)},l.deactivate=L=>{const B=L.component;Vp(B.m),Vp(B.a),A(L,C,null,1,b),Ln(()=>{B.da&&Ll(B.da);const z=L.props&&L.props.onVnodeUnmounted;z&&Co(z,B.parent,L),B.isDeactivated=!0},b)};function E(L){pb(L),v(L,r,b,!0)}function T(L){u.forEach((B,z)=>{const U=Tk(B.type);U&&(!L||!L(U))&&I(z)})}function I(L){const B=u.get(L);!f||!Si(B,f)?E(B):f&&pb(f),u.delete(L),p.delete(L)}hs(()=>[i.include,i.exclude],([L,B])=>{L&&T(z=>Pd(L,z)),B&&T(z=>!Pd(B,z))},{flush:"post",deep:!0});let F=null;const N=()=>{F!=null&&(vk(r.subTree.type)?Ln(()=>{u.set(F,Yh(r.subTree))},r.subTree.suspense):u.set(F,Yh(r.subTree)))};return Es(N),hc(N),Ra(()=>{u.forEach(L=>{const{subTree:B,suspense:z}=r,U=Yh(B);if(L.type===U.type&&L.key===U.key){pb(U);const W=U.component.da;W&&Ln(W,z);return}E(L)})}),()=>{if(F=null,!n.default)return null;const L=n.default(),B=L[0];if(L.length>1)return f=null,L;if(!ks(B)||!(B.shapeFlag&4)&&!(B.shapeFlag&128))return f=null,B;let z=Yh(B);const U=z.type,W=Tk(Aa(z)?z.type.__asyncResolved||{}:U),{include:P,exclude:H,max:V}=i;if(P&&(!W||!Pd(P,W))||H&&W&&Pd(H,W))return f=z,B;const q=z.key==null?U:z.key,Y=u.get(q);return z.el&&(z=nr(z),B.shapeFlag&128&&(B.ssContent=z)),F=q,Y?(z.el=Y.el,z.component=Y.component,z.transition&&gs(z,z.transition),z.shapeFlag|=512,p.delete(q),p.add(q)):(p.add(q),V&&p.size>parseInt(V,10)&&I(p.values().next().value)),z.shapeFlag|=256,f=z,vk(B.type)?B:z}}},BU=OU;function Pd(i,n){return $e(i)?i.some(r=>Pd(r,n)):nn(i)?i.split(",").includes(n):xH(i)?i.test(n):!1}function W5(i,n){Y5(i,"a",n)}function K5(i,n){Y5(i,"da",n)}function Y5(i,n,r=En){const l=i.__wdc||(i.__wdc=()=>{let u=r;for(;u;){if(u.isDeactivated)return;u=u.parent}return i()});if(xf(n,l,r),r){let u=r.parent;for(;u&&u.parent;)gu(u.parent.vnode)&&PU(l,n,r,u),u=u.parent}}function PU(i,n,r,l){const u=xf(n,i,l,!0);Ef(()=>{s_(l[n],u)},r)}function pb(i){i.shapeFlag&=-257,i.shapeFlag&=-513}function Yh(i){return i.shapeFlag&128?i.ssContent:i}function xf(i,n,r=En,l=!1){if(r){const u=r[i]||(r[i]=[]),p=n.__weh||(n.__weh=(...f)=>{ys();const b=Da(r),m=Ho(n,r,i,f);return b(),xs(),m});return l?u.unshift(p):u.push(p),p}}const Br=i=>(n,r=En)=>{(!ku||i==="sp")&&xf(i,(...l)=>n(...l),r)},Q5=Br("bm"),Es=Br("m"),A_=Br("bu"),hc=Br("u"),Ra=Br("bum"),Ef=Br("um"),Z5=Br("sp"),J5=Br("rtg"),X5=Br("rtc");function eI(i,n=En){xf("ec",i,n)}const C_="components",NU="directives";function Ae(i,n){return y_(C_,i,!0,n)||i}const tI=Symbol.for("v-ndc");function LU(i){return nn(i)?y_(C_,i,!1)||i:i||tI}function RU(i){return y_(NU,i)}function y_(i,n,r=!0,l=!1){const u=Sn||En;if(u){const p=u.type;if(i===C_){const b=Tk(p,!1);if(b&&(b===n||b===Zn(n)||b===pu(Zn(n))))return p}const f=PS(u[i]||p[i],n)||PS(u.appContext[i],n);return!f&&l?p:f}}function PS(i,n){return i&&(i[n]||i[Zn(n)]||i[pu(Zn(n))])}function Zt(i,n,r,l){let u;const p=r&&r[l];if($e(i)||nn(i)){u=new Array(i.length);for(let f=0,b=i.length;f<b;f++)u[f]=n(i[f],f,void 0,p&&p[f])}else if(typeof i=="number"){u=new Array(i);for(let f=0;f<i;f++)u[f]=n(f+1,f,void 0,p&&p[f])}else if(Ut(i))if(i[Symbol.iterator])u=Array.from(i,(f,b)=>n(f,b,void 0,p&&p[b]));else{const f=Object.keys(i);u=new Array(f.length);for(let b=0,m=f.length;b<m;b++){const A=f[b];u[b]=n(i[A],A,b,p&&p[b])}}else u=[];return r&&(r[l]=u),u}function FU(i,n){for(let r=0;r<n.length;r++){const l=n[r];if($e(l))for(let u=0;u<l.length;u++)i[l[u].name]=l[u].fn;else l&&(i[l.name]=l.key?(...u)=>{const p=l.fn(...u);return p&&(p.key=l.key),p}:l.fn)}return i}function Sa(i,n,r={},l,u){if(Sn.isCE||Sn.parent&&Aa(Sn.parent)&&Sn.parent.isCE)return n!=="default"&&(r.name=n),ue("slot",r,l&&l());let p=i[n];p&&p._c&&(p._d=!1),ee();const f=p&&nI(p(r)),b=bs(Pe,{key:(r.key||f&&f.key||`_${n}`)+(!f&&l?"_fb":"")},f||(l?l():[]),f&&i._===1?64:-2);return!u&&b.scopeId&&(b.slotScopeIds=[b.scopeId+"-s"]),p&&p._c&&(p._d=!0),b}function nI(i){return i.some(n=>ks(n)?!(n.type===zn||n.type===Pe&&!nI(n.children)):!0)?i:null}function zU(i,n){const r={};for(const l in i)r[n&&/[A-Z]/.test(l)?`on:${l}`:$d(l)]=i[l];return r}const mk=i=>i?RI(i)?_u(i):mk(i.parent):null,Vd=sn(Object.create(null),{$:i=>i,$el:i=>i.vnode.el,$data:i=>i.data,$props:i=>i.props,$attrs:i=>i.attrs,$slots:i=>i.slots,$refs:i=>i.refs,$parent:i=>mk(i.parent),$root:i=>mk(i.root),$emit:i=>i.emit,$options:i=>x_(i),$forceUpdate:i=>i.f||(i.f=()=>{i.effect.dirty=!0,Af(i.update)}),$nextTick:i=>i.n||(i.n=mu.bind(i.proxy)),$watch:i=>Cq.bind(i)}),fb=(i,n)=>i!==jt&&!i.__isScriptSetup&&Dt(i,n),gk={get({_:i},n){if(n==="__v_skip")return!0;const{ctx:r,setupState:l,data:u,props:p,accessCache:f,type:b,appContext:m}=i;let A;if(n[0]!=="$"){const E=f[n];if(E!==void 0)switch(E){case 1:return l[n];case 2:return u[n];case 4:return r[n];case 3:return p[n]}else{if(fb(l,n))return f[n]=1,l[n];if(u!==jt&&Dt(u,n))return f[n]=2,u[n];if((A=i.propsOptions[0])&&Dt(A,n))return f[n]=3,p[n];if(r!==jt&&Dt(r,n))return f[n]=4,r[n];bk&&(f[n]=0)}}const v=Vd[n];let x,C;if(v)return n==="$attrs"&&Io(i.attrs,"get",""),v(i);if((x=b.__cssModules)&&(x=x[n]))return x;if(r!==jt&&Dt(r,n))return f[n]=4,r[n];if(C=m.config.globalProperties,Dt(C,n))return C[n]},set({_:i},n,r){const{data:l,setupState:u,ctx:p}=i;return fb(u,n)?(u[n]=r,!0):l!==jt&&Dt(l,n)?(l[n]=r,!0):Dt(i.props,n)||n[0]==="$"&&n.slice(1)in i?!1:(p[n]=r,!0)},has({_:{data:i,setupState:n,accessCache:r,ctx:l,appContext:u,propsOptions:p}},f){let b;return!!r[f]||i!==jt&&Dt(i,f)||fb(n,f)||(b=p[0])&&Dt(b,f)||Dt(l,f)||Dt(Vd,f)||Dt(u.config.globalProperties,f)},defineProperty(i,n,r){return r.get!=null?i._.accessCache[n]=0:Dt(r,"value")&&this.set(i,n,r.value,null),Reflect.defineProperty(i,n,r)}},jU=sn({},gk,{get(i,n){if(n!==Symbol.unscopables)return gk.get(i,n,i)},has(i,n){return n[0]!=="_"&&!IH(n)}});function $U(){return null}function VU(){return null}function HU(i){}function UU(i){}function qU(){return null}function GU(){}function WU(i,n){return null}function KU(){return oI().slots}function YU(){return oI().attrs}function oI(){const i=Pr();return i.setupContext||(i.setupContext=jI(i))}function nu(i){return $e(i)?i.reduce((n,r)=>(n[r]=null,n),{}):i}function QU(i,n){const r=nu(i);for(const l in n){if(l.startsWith("__skip"))continue;let u=r[l];u?$e(u)||nt(u)?u=r[l]={type:u,default:n[l]}:u.default=n[l]:u===null&&(u=r[l]={default:n[l]}),u&&n[`__skip_${l}`]&&(u.skipFactory=!0)}return r}function ZU(i,n){return!i||!n?i||n:$e(i)&&$e(n)?i.concat(n):sn({},nu(i),nu(n))}function JU(i,n){const r={};for(const l in i)n.includes(l)||Object.defineProperty(r,l,{enumerable:!0,get:()=>i[l]});return r}function XU(i){const n=Pr();let r=i();return xk(),a_(r)&&(r=r.catch(l=>{throw Da(n),l})),[r,()=>Da(n)]}let bk=!0;function eq(i){const n=x_(i),r=i.proxy,l=i.ctx;bk=!1,n.beforeCreate&&NS(n.beforeCreate,i,"bc");const{data:u,computed:p,methods:f,watch:b,provide:m,inject:A,created:v,beforeMount:x,mounted:C,beforeUpdate:E,updated:T,activated:I,deactivated:F,beforeDestroy:N,beforeUnmount:L,destroyed:B,unmounted:z,render:U,renderTracked:W,renderTriggered:P,errorCaptured:H,serverPrefetch:V,expose:q,inheritAttrs:Y,components:J,directives:te,filters:re}=n;if(A&&tq(A,l,null),f)for(const ge in f){const ie=f[ge];nt(ie)&&(l[ge]=ie.bind(r))}if(u){const ge=u.call(r,r);Ut(ge)&&(i.data=on(ge))}if(bk=!0,p)for(const ge in p){const ie=p[ge],Le=nt(ie)?ie.bind(r,r):nt(ie.get)?ie.get.bind(r,r):So,Se=!nt(ie)&&nt(ie.set)?ie.set.bind(r):So,Je=I_({get:Le,set:Se});Object.defineProperty(l,ge,{enumerable:!0,configurable:!0,get:()=>Je.value,set:Xe=>Je.value=Xe})}if(b)for(const ge in b)iI(b[ge],l,r,ge);if(m){const ge=nt(m)?m.call(r):m;Reflect.ownKeys(ge).forEach(ie=>{Sf(ie,ge[ie])})}v&&NS(v,i,"c");function oe(ge,ie){$e(ie)?ie.forEach(Le=>ge(Le.bind(r))):ie&&ge(ie.bind(r))}if(oe(Q5,x),oe(Es,C),oe(A_,E),oe(hc,T),oe(W5,I),oe(K5,F),oe(eI,H),oe(X5,W),oe(J5,P),oe(Ra,L),oe(Ef,z),oe(Z5,V),$e(q))if(q.length){const ge=i.exposed||(i.exposed={});q.forEach(ie=>{Object.defineProperty(ge,ie,{get:()=>r[ie],set:Le=>r[ie]=Le})})}else i.exposed||(i.exposed={});U&&i.render===So&&(i.render=U),Y!=null&&(i.inheritAttrs=Y),J&&(i.components=J),te&&(i.directives=te)}function tq(i,n,r=So){$e(i)&&(i=kk(i));for(const l in i){const u=i[l];let p;Ut(u)?"default"in u?p=Hd(u.from||l,u.default,!0):p=Hd(u.from||l):p=Hd(u),Vn(p)?Object.defineProperty(n,l,{enumerable:!0,configurable:!0,get:()=>p.value,set:f=>p.value=f}):n[l]=p}}function NS(i,n,r){Ho($e(i)?i.map(l=>l.bind(n.proxy)):i.bind(n.proxy),n,r)}function iI(i,n,r,l){const u=l.includes(".")?EI(r,l):()=>r[l];if(nn(i)){const p=n[i];nt(p)&&hs(u,p)}else if(nt(i))hs(u,i.bind(r));else if(Ut(i))if($e(i))i.forEach(p=>iI(p,n,r,l));else{const p=nt(i.handler)?i.handler.bind(r):n[i.handler];nt(p)&&hs(u,p,i)}}function x_(i){const n=i.type,{mixins:r,extends:l}=n,{mixins:u,optionsCache:p,config:{optionMergeStrategies:f}}=i.appContext,b=p.get(n);let m;return b?m=b:!u.length&&!r&&!l?m=n:(m={},u.length&&u.forEach(A=>jp(m,A,f,!0)),jp(m,n,f)),Ut(n)&&p.set(n,m),m}function jp(i,n,r,l=!1){const{mixins:u,extends:p}=n;p&&jp(i,p,r,!0),u&&u.forEach(f=>jp(i,f,r,!0));for(const f in n)if(!(l&&f==="expose")){const b=nq[f]||r&&r[f];i[f]=b?b(i[f],n[f]):n[f]}return i}const nq={data:LS,props:RS,emits:RS,methods:Nd,computed:Nd,beforeCreate:ro,created:ro,beforeMount:ro,mounted:ro,beforeUpdate:ro,updated:ro,beforeDestroy:ro,beforeUnmount:ro,destroyed:ro,unmounted:ro,activated:ro,deactivated:ro,errorCaptured:ro,serverPrefetch:ro,components:Nd,directives:Nd,watch:iq,provide:LS,inject:oq};function LS(i,n){return n?i?function(){return sn(nt(i)?i.call(this,this):i,nt(n)?n.call(this,this):n)}:n:i}function oq(i,n){return Nd(kk(i),kk(n))}function kk(i){if($e(i)){const n={};for(let r=0;r<i.length;r++)n[i[r]]=i[r];return n}return i}function ro(i,n){return i?[...new Set([].concat(i,n))]:n}function Nd(i,n){return i?sn(Object.create(null),i,n):n}function RS(i,n){return i?$e(i)&&$e(n)?[...new Set([...i,...n])]:sn(Object.create(null),nu(i),nu(n??{})):n}function iq(i,n){if(!i)return n;if(!n)return i;const r=sn(Object.create(null),i);for(const l in n)r[l]=ro(i[l],n[l]);return r}function rI(){return{app:null,config:{isNativeTag:CH,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let rq=0;function sq(i,n){return function(l,u=null){nt(l)||(l=sn({},l)),u!=null&&!Ut(u)&&(u=null);const p=rI(),f=new WeakSet;let b=!1;const m=p.app={_uid:rq++,_component:l,_props:u,_container:null,_context:p,_instance:null,version:VI,get config(){return p.config},set config(A){},use(A,...v){return f.has(A)||(A&&nt(A.install)?(f.add(A),A.install(m,...v)):nt(A)&&(f.add(A),A(m,...v))),m},mixin(A){return p.mixins.includes(A)||p.mixins.push(A),m},component(A,v){return v?(p.components[A]=v,m):p.components[A]},directive(A,v){return v?(p.directives[A]=v,m):p.directives[A]},mount(A,v,x){if(!b){const C=ue(l,u);return C.appContext=p,x===!0?x="svg":x===!1&&(x=void 0),v&&n?n(C,A):i(C,A,x),b=!0,m._container=A,A.__vue_app__=m,_u(C.component)}},unmount(){b&&(i(null,m._container),delete m._container.__vue_app__)},provide(A,v){return p.provides[A]=v,m},runWithContext(A){const v=zl;zl=m;try{return A()}finally{zl=v}}};return m}}let zl=null;function Sf(i,n){if(En){let r=En.provides;const l=En.parent&&En.parent.provides;l===r&&(r=En.provides=Object.create(l)),r[i]=n}}function Hd(i,n,r=!1){const l=En||Sn;if(l||zl){const u=l?l.parent==null?l.vnode.appContext&&l.vnode.appContext.provides:l.parent.provides:zl._context.provides;if(u&&i in u)return u[i];if(arguments.length>1)return r&&nt(n)?n.call(l&&l.proxy):n}}function aq(){return!!(En||Sn||zl)}const sI={},aI=()=>Object.create(sI),lI=i=>Object.getPrototypeOf(i)===sI;function lq(i,n,r,l=!1){const u={},p=aI();i.propsDefaults=Object.create(null),cI(i,n,u,p);for(const f in i.propsOptions[0])f in u||(u[f]=void 0);r?i.props=l?u:O5(u):i.type.props?i.props=u:i.props=p,i.attrs=p}function cq(i,n,r,l){const{props:u,attrs:p,vnode:{patchFlag:f}}=i,b=yt(u),[m]=i.propsOptions;let A=!1;if((l||f>0)&&!(f&16)){if(f&8){const v=i.vnode.dynamicProps;for(let x=0;x<v.length;x++){let C=v[x];if(Tf(i.emitsOptions,C))continue;const E=n[C];if(m)if(Dt(p,C))E!==p[C]&&(p[C]=E,A=!0);else{const T=Zn(C);u[T]=_k(m,b,T,E,i,!1)}else E!==p[C]&&(p[C]=E,A=!0)}}}else{cI(i,n,u,p)&&(A=!0);let v;for(const x in b)(!n||!Dt(n,x)&&((v=xo(x))===x||!Dt(n,v)))&&(m?r&&(r[x]!==void 0||r[v]!==void 0)&&(u[x]=_k(m,b,x,void 0,i,!0)):delete u[x]);if(p!==b)for(const x in p)(!n||!Dt(n,x))&&(delete p[x],A=!0)}A&&Sr(i.attrs,"set","")}function cI(i,n,r,l){const[u,p]=i.propsOptions;let f=!1,b;if(n)for(let m in n){if(Nl(m))continue;const A=n[m];let v;u&&Dt(u,v=Zn(m))?!p||!p.includes(v)?r[v]=A:(b||(b={}))[v]=A:Tf(i.emitsOptions,m)||(!(m in l)||A!==l[m])&&(l[m]=A,f=!0)}if(p){const m=yt(r),A=b||jt;for(let v=0;v<p.length;v++){const x=p[v];r[x]=_k(u,m,x,A[x],i,!Dt(A,x))}}return f}function _k(i,n,r,l,u,p){const f=i[r];if(f!=null){const b=Dt(f,"default");if(b&&l===void 0){const m=f.default;if(f.type!==Function&&!f.skipFactory&&nt(m)){const{propsDefaults:A}=u;if(r in A)l=A[r];else{const v=Da(u);l=A[r]=m.call(null,n),v()}}else l=m}f[0]&&(p&&!b?l=!1:f[1]&&(l===""||l===xo(r))&&(l=!0))}return l}const dq=new WeakMap;function dI(i,n,r=!1){const l=r?dq:n.propsCache,u=l.get(i);if(u)return u;const p=i.props,f={},b=[];let m=!1;if(!nt(i)){const v=x=>{m=!0;const[C,E]=dI(x,n,!0);sn(f,C),E&&b.push(...E)};!r&&n.mixins.length&&n.mixins.forEach(v),i.extends&&v(i.extends),i.mixins&&i.mixins.forEach(v)}if(!p&&!m)return Ut(i)&&l.set(i,Bl),Bl;if($e(p))for(let v=0;v<p.length;v++){const x=Zn(p[v]);FS(x)&&(f[x]=jt)}else if(p)for(const v in p){const x=Zn(v);if(FS(x)){const C=p[v],E=f[x]=$e(C)||nt(C)?{type:C}:sn({},C);if(E){const T=$S(Boolean,E.type),I=$S(String,E.type);E[0]=T>-1,E[1]=I<0||T<I,(T>-1||Dt(E,"default"))&&b.push(x)}}}const A=[f,b];return Ut(i)&&l.set(i,A),A}function FS(i){return i[0]!=="$"&&!Nl(i)}function zS(i){return i===null?"null":typeof i=="function"?i.name||"":typeof i=="object"&&i.constructor&&i.constructor.name||""}function jS(i,n){return zS(i)===zS(n)}function $S(i,n){return $e(n)?n.findIndex(r=>jS(r,i)):nt(n)&&jS(n,i)?0:-1}const uI=i=>i[0]==="_"||i==="$stable",E_=i=>$e(i)?i.map(yo):[yo(i)],uq=(i,n,r)=>{if(n._n)return n;const l=kt((...u)=>E_(n(...u)),r);return l._c=!1,l},hI=(i,n,r)=>{const l=i._ctx;for(const u in i){if(uI(u))continue;const p=i[u];if(nt(p))n[u]=uq(u,p,l);else if(p!=null){const f=E_(p);n[u]=()=>f}}},pI=(i,n)=>{const r=E_(n);i.slots.default=()=>r},fI=(i,n,r)=>{for(const l in n)(r||l!=="_")&&(i[l]=n[l])},hq=(i,n,r)=>{const l=i.slots=aI();if(i.vnode.shapeFlag&32){const u=n._;u?(fI(l,n,r),r&&h5(l,"_",u,!0)):hI(n,l)}else n&&pI(i,n)},pq=(i,n,r)=>{const{vnode:l,slots:u}=i;let p=!0,f=jt;if(l.shapeFlag&32){const b=n._;b?r&&b===1?p=!1:fI(u,n,r):(p=!n.$stable,hI(n,u)),f=n}else n&&(pI(i,n),f={default:1});if(p)for(const b in u)!uI(b)&&f[b]==null&&delete u[b]};function $p(i,n,r,l,u=!1){if($e(i)){i.forEach((C,E)=>$p(C,n&&($e(n)?n[E]:n),r,l,u));return}if(Aa(l)&&!u)return;const p=l.shapeFlag&4?_u(l.component):l.el,f=u?null:p,{i:b,r:m}=i,A=n&&n.r,v=b.refs===jt?b.refs={}:b.refs,x=b.setupState;if(A!=null&&A!==m&&(nn(A)?(v[A]=null,Dt(x,A)&&(x[A]=null)):Vn(A)&&(A.value=null)),nt(m))Tr(m,b,12,[f,v]);else{const C=nn(m),E=Vn(m);if(C||E){const T=()=>{if(i.f){const I=C?Dt(x,m)?x[m]:v[m]:m.value;u?$e(I)&&s_(I,p):$e(I)?I.includes(p)||I.push(p):C?(v[m]=[p],Dt(x,m)&&(x[m]=v[m])):(m.value=[p],i.k&&(v[i.k]=m.value))}else C?(v[m]=f,Dt(x,m)&&(x[m]=f)):E&&(m.value=f,i.k&&(v[i.k]=f))};f?(T.id=-1,Ln(T,r)):T()}}}const mI=Symbol("_vte"),fq=i=>i.__isTeleport,Ud=i=>i&&(i.disabled||i.disabled===""),VS=i=>typeof SVGElement<"u"&&i instanceof SVGElement,HS=i=>typeof MathMLElement=="function"&&i instanceof MathMLElement,wk=(i,n)=>{const r=i&&i.to;return nn(r)?n?n(r):null:r},mq={name:"Teleport",__isTeleport:!0,process(i,n,r,l,u,p,f,b,m,A){const{mc:v,pc:x,pbc:C,o:{insert:E,querySelector:T,createText:I,createComment:F}}=A,N=Ud(n.props);let{shapeFlag:L,children:B,dynamicChildren:z}=n;if(i==null){const U=n.el=I(""),W=n.anchor=I(""),P=n.target=wk(n.props,T),H=n.targetStart=I(""),V=n.targetAnchor=I("");E(U,r,l),E(W,r,l),H[mI]=V,P&&(E(H,P),E(V,P),f==="svg"||VS(P)?f="svg":(f==="mathml"||HS(P))&&(f="mathml"));const q=(Y,J)=>{L&16&&v(B,Y,J,u,p,f,b,m)};N?q(r,W):P&&q(P,V)}else{n.el=i.el,n.targetStart=i.targetStart;const U=n.anchor=i.anchor,W=n.target=i.target,P=n.targetAnchor=i.targetAnchor,H=Ud(i.props),V=H?r:W,q=H?U:P;if(f==="svg"||VS(W)?f="svg":(f==="mathml"||HS(W))&&(f="mathml"),z?(C(i.dynamicChildren,z,V,u,p,f,b),S_(i,n,!0)):m||x(i,n,V,q,u,p,f,b,!1),N)H?n.props&&i.props&&n.props.to!==i.props.to&&(n.props.to=i.props.to):Qh(n,r,U,A,1);else if((n.props&&n.props.to)!==(i.props&&i.props.to)){const Y=n.target=wk(n.props,T);Y&&Qh(n,Y,null,A,0)}else H&&Qh(n,W,P,A,1)}gI(n)},remove(i,n,r,{um:l,o:{remove:u}},p){const{shapeFlag:f,children:b,anchor:m,targetStart:A,targetAnchor:v,target:x,props:C}=i;if(x&&(u(A),u(v)),p&&u(m),f&16){const E=p||!Ud(C);for(let T=0;T<b.length;T++){const I=b[T];l(I,n,r,E,!!I.dynamicChildren)}}},move:Qh,hydrate:gq};function Qh(i,n,r,{o:{insert:l},m:u},p=2){p===0&&l(i.targetAnchor,n,r);const{el:f,anchor:b,shapeFlag:m,children:A,props:v}=i,x=p===2;if(x&&l(f,n,r),(!x||Ud(v))&&m&16)for(let C=0;C<A.length;C++)u(A[C],n,r,2);x&&l(b,n,r)}function gq(i,n,r,l,u,p,{o:{nextSibling:f,parentNode:b,querySelector:m}},A){const v=n.target=wk(n.props,m);if(v){const x=v._lpa||v.firstChild;if(n.shapeFlag&16)if(Ud(n.props))n.anchor=A(f(i),n,b(i),r,l,u,p),n.targetAnchor=x;else{n.anchor=f(i);let C=x;for(;C;)if(C=f(C),C&&C.nodeType===8&&C.data==="teleport anchor"){n.targetAnchor=C,v._lpa=n.targetAnchor&&f(n.targetAnchor);break}A(x,n,v,r,l,u,p)}gI(n)}return n.anchor&&f(n.anchor)}const bq=mq;function gI(i){const n=i.ctx;if(n&&n.ut){let r=i.children[0].el;for(;r&&r!==i.targetAnchor;)r.nodeType===1&&r.setAttribute("data-v-owner",n.uid),r=r.nextSibling;n.ut()}}let US=!1;const Al=()=>{US||(console.error("Hydration completed but contains mismatches."),US=!0)},kq=i=>i.namespaceURI.includes("svg")&&i.tagName!=="foreignObject",_q=i=>i.namespaceURI.includes("MathML"),Zh=i=>{if(kq(i))return"svg";if(_q(i))return"mathml"},Jh=i=>i.nodeType===8;function wq(i){const{mt:n,p:r,o:{patchProp:l,createText:u,nextSibling:p,parentNode:f,remove:b,insert:m,createComment:A}}=i,v=(B,z)=>{if(!z.hasChildNodes()){r(null,B,z),zp(),z._vnode=B;return}x(z.firstChild,B,null,null,null),zp(),z._vnode=B},x=(B,z,U,W,P,H=!1)=>{H=H||!!z.dynamicChildren;const V=Jh(B)&&B.data==="[",q=()=>I(B,z,U,W,P,V),{type:Y,ref:J,shapeFlag:te,patchFlag:re}=z;let ae=B.nodeType;z.el=B,re===-2&&(H=!1,z.dynamicChildren=null);let oe=null;switch(Y){case ps:ae!==3?z.children===""?(m(z.el=u(""),f(B),B),oe=B):oe=q():(B.data!==z.children&&(Al(),B.data=z.children),oe=p(B));break;case zn:L(B)?(oe=p(B),N(z.el=B.content.firstChild,B,U)):ae!==8||V?oe=q():oe=p(B);break;case Ca:if(V&&(B=p(B),ae=B.nodeType),ae===1||ae===3){oe=B;const ge=!z.children.length;for(let ie=0;ie<z.staticCount;ie++)ge&&(z.children+=oe.nodeType===1?oe.outerHTML:oe.data),ie===z.staticCount-1&&(z.anchor=oe),oe=p(oe);return V?p(oe):oe}else q();break;case Pe:V?oe=T(B,z,U,W,P,H):oe=q();break;default:if(te&1)(ae!==1||z.type.toLowerCase()!==B.tagName.toLowerCase())&&!L(B)?oe=q():oe=C(B,z,U,W,P,H);else if(te&6){z.slotScopeIds=P;const ge=f(B);if(V?oe=F(B):Jh(B)&&B.data==="teleport start"?oe=F(B,B.data,"teleport end"):oe=p(B),n(z,ge,null,U,W,Zh(ge),H),Aa(z)){let ie;V?(ie=ue(Pe),ie.anchor=oe?oe.previousSibling:ge.lastChild):ie=B.nodeType===3?ze(""):ue("div"),ie.el=B,z.component.subTree=ie}}else te&64?ae!==8?oe=q():oe=z.type.hydrate(B,z,U,W,P,H,i,E):te&128&&(oe=z.type.hydrate(B,z,U,W,Zh(f(B)),P,H,i,x))}return J!=null&&$p(J,null,W,z),oe},C=(B,z,U,W,P,H)=>{H=H||!!z.dynamicChildren;const{type:V,props:q,patchFlag:Y,shapeFlag:J,dirs:te,transition:re}=z,ae=V==="input"||V==="option";if(ae||Y!==-1){te&&Yi(z,null,U,"created");let oe=!1;if(L(B)){oe=wI(W,re)&&U&&U.vnode.props&&U.vnode.props.appear;const ie=B.content.firstChild;oe&&re.beforeEnter(ie),N(ie,B,U),z.el=B=ie}if(J&16&&!(q&&(q.innerHTML||q.textContent))){let ie=E(B.firstChild,z,B,U,W,P,H);for(;ie;){Al();const Le=ie;ie=ie.nextSibling,b(Le)}}else J&8&&B.textContent!==z.children&&(Al(),B.textContent=z.children);if(q){if(ae||!H||Y&48)for(const ie in q)(ae&&(ie.endsWith("value")||ie==="indeterminate")||hu(ie)&&!Nl(ie)||ie[0]===".")&&l(B,ie,null,q[ie],void 0,U);else if(q.onClick)l(B,"onClick",null,q.onClick,void 0,U);else if(Y&4&&va(q.style))for(const ie in q.style)q.style[ie]}let ge;(ge=q&&q.onVnodeBeforeMount)&&Co(ge,U,z),te&&Yi(z,null,U,"beforeMount"),((ge=q&&q.onVnodeMounted)||te||oe)&&II(()=>{ge&&Co(ge,U,z),oe&&re.enter(B),te&&Yi(z,null,U,"mounted")},W)}return B.nextSibling},E=(B,z,U,W,P,H,V)=>{V=V||!!z.dynamicChildren;const q=z.children,Y=q.length;for(let J=0;J<Y;J++){const te=V?q[J]:q[J]=yo(q[J]),re=te.type===ps;if(B){if(re&&!V){let ae=q[J+1];ae&&(ae=yo(ae)).type===ps&&(m(u(B.data.slice(te.children.length)),U,p(B)),B.data=te.children)}B=x(B,te,W,P,H,V)}else re&&!te.children?m(te.el=u(""),U):(Al(),r(null,te,U,null,W,P,Zh(U),H))}return B},T=(B,z,U,W,P,H)=>{const{slotScopeIds:V}=z;V&&(P=P?P.concat(V):V);const q=f(B),Y=E(p(B),z,q,U,W,P,H);return Y&&Jh(Y)&&Y.data==="]"?p(z.anchor=Y):(Al(),m(z.anchor=A("]"),q,Y),Y)},I=(B,z,U,W,P,H)=>{if(Al(),z.el=null,H){const Y=F(B);for(;;){const J=p(B);if(J&&J!==Y)b(J);else break}}const V=p(B),q=f(B);return b(B),r(null,z,q,V,U,W,Zh(q),P),V},F=(B,z="[",U="]")=>{let W=0;for(;B;)if(B=p(B),B&&Jh(B)&&(B.data===z&&W++,B.data===U)){if(W===0)return p(B);W--}return B},N=(B,z,U)=>{const W=z.parentNode;W&&W.replaceChild(B,z);let P=U;for(;P;)P.vnode.el===z&&(P.vnode.el=P.subTree.el=B),P=P.parent},L=B=>B.nodeType===1&&B.tagName.toLowerCase()==="template";return[v,x]}const Ln=II;function bI(i){return _I(i)}function kI(i){return _I(i,wq)}function _I(i,n){const r=p5();r.__VUE__=!0;const{insert:l,remove:u,patchProp:p,createElement:f,createText:b,createComment:m,setText:A,setElementText:v,parentNode:x,nextSibling:C,setScopeId:E=So,insertStaticContent:T}=i,I=(K,X,de,_e=null,ke=null,ye=null,Me=void 0,xe=null,ve=!!X.dynamicChildren)=>{if(K===X)return;K&&!Si(K,X)&&(_e=At(K),Xe(K,ke,ye,!0),K=null),X.patchFlag===-2&&(ve=!1,X.dynamicChildren=null);const{type:he,ref:De,shapeFlag:Re}=X;switch(he){case ps:F(K,X,de,_e);break;case zn:N(K,X,de,_e);break;case Ca:K==null&&L(X,de,_e,Me);break;case Pe:J(K,X,de,_e,ke,ye,Me,xe,ve);break;default:Re&1?U(K,X,de,_e,ke,ye,Me,xe,ve):Re&6?te(K,X,de,_e,ke,ye,Me,xe,ve):(Re&64||Re&128)&&he.process(K,X,de,_e,ke,ye,Me,xe,ve,ot)}De!=null&&ke&&$p(De,K&&K.ref,ye,X||K,!X)},F=(K,X,de,_e)=>{if(K==null)l(X.el=b(X.children),de,_e);else{const ke=X.el=K.el;X.children!==K.children&&A(ke,X.children)}},N=(K,X,de,_e)=>{K==null?l(X.el=m(X.children||""),de,_e):X.el=K.el},L=(K,X,de,_e)=>{[K.el,K.anchor]=T(K.children,X,de,_e,K.el,K.anchor)},B=({el:K,anchor:X},de,_e)=>{let ke;for(;K&&K!==X;)ke=C(K),l(K,de,_e),K=ke;l(X,de,_e)},z=({el:K,anchor:X})=>{let de;for(;K&&K!==X;)de=C(K),u(K),K=de;u(X)},U=(K,X,de,_e,ke,ye,Me,xe,ve)=>{X.type==="svg"?Me="svg":X.type==="math"&&(Me="mathml"),K==null?W(X,de,_e,ke,ye,Me,xe,ve):V(K,X,ke,ye,Me,xe,ve)},W=(K,X,de,_e,ke,ye,Me,xe)=>{let ve,he;const{props:De,shapeFlag:Re,transition:Ne,dirs:He}=K;if(ve=K.el=f(K.type,ye,De&&De.is,De),Re&8?v(ve,K.children):Re&16&&H(K.children,ve,null,_e,ke,mb(K,ye),Me,xe),He&&Yi(K,null,_e,"created"),P(ve,K,K.scopeId,Me,_e),De){for(const ht in De)ht!=="value"&&!Nl(ht)&&p(ve,ht,null,De[ht],ye,_e);"value"in De&&p(ve,"value",null,De.value,ye),(he=De.onVnodeBeforeMount)&&Co(he,_e,K)}He&&Yi(K,null,_e,"beforeMount");const Ye=wI(ke,Ne);Ye&&Ne.beforeEnter(ve),l(ve,X,de),((he=De&&De.onVnodeMounted)||Ye||He)&&Ln(()=>{he&&Co(he,_e,K),Ye&&Ne.enter(ve),He&&Yi(K,null,_e,"mounted")},ke)},P=(K,X,de,_e,ke)=>{if(de&&E(K,de),_e)for(let ye=0;ye<_e.length;ye++)E(K,_e[ye]);if(ke){let ye=ke.subTree;if(X===ye){const Me=ke.vnode;P(K,Me,Me.scopeId,Me.slotScopeIds,ke.parent)}}},H=(K,X,de,_e,ke,ye,Me,xe,ve=0)=>{for(let he=ve;he<K.length;he++){const De=K[he]=xe?as(K[he]):yo(K[he]);I(null,De,X,de,_e,ke,ye,Me,xe)}},V=(K,X,de,_e,ke,ye,Me)=>{const xe=X.el=K.el;let{patchFlag:ve,dynamicChildren:he,dirs:De}=X;ve|=K.patchFlag&16;const Re=K.props||jt,Ne=X.props||jt;let He;if(de&&aa(de,!1),(He=Ne.onVnodeBeforeUpdate)&&Co(He,de,X,K),De&&Yi(X,K,de,"beforeUpdate"),de&&aa(de,!0),(Re.innerHTML&&Ne.innerHTML==null||Re.textContent&&Ne.textContent==null)&&v(xe,""),he?q(K.dynamicChildren,he,xe,de,_e,mb(X,ke),ye):Me||ie(K,X,xe,null,de,_e,mb(X,ke),ye,!1),ve>0){if(ve&16)Y(xe,Re,Ne,de,ke);else if(ve&2&&Re.class!==Ne.class&&p(xe,"class",null,Ne.class,ke),ve&4&&p(xe,"style",Re.style,Ne.style,ke),ve&8){const Ye=X.dynamicProps;for(let ht=0;ht<Ye.length;ht++){const ct=Ye[ht],pt=Re[ct],Tn=Ne[ct];(Tn!==pt||ct==="value")&&p(xe,ct,pt,Tn,ke,de)}}ve&1&&K.children!==X.children&&v(xe,X.children)}else!Me&&he==null&&Y(xe,Re,Ne,de,ke);((He=Ne.onVnodeUpdated)||De)&&Ln(()=>{He&&Co(He,de,X,K),De&&Yi(X,K,de,"updated")},_e)},q=(K,X,de,_e,ke,ye,Me)=>{for(let xe=0;xe<X.length;xe++){const ve=K[xe],he=X[xe],De=ve.el&&(ve.type===Pe||!Si(ve,he)||ve.shapeFlag&70)?x(ve.el):de;I(ve,he,De,null,_e,ke,ye,Me,!0)}},Y=(K,X,de,_e,ke)=>{if(X!==de){if(X!==jt)for(const ye in X)!Nl(ye)&&!(ye in de)&&p(K,ye,X[ye],null,ke,_e);for(const ye in de){if(Nl(ye))continue;const Me=de[ye],xe=X[ye];Me!==xe&&ye!=="value"&&p(K,ye,xe,Me,ke,_e)}"value"in de&&p(K,"value",X.value,de.value,ke)}},J=(K,X,de,_e,ke,ye,Me,xe,ve)=>{const he=X.el=K?K.el:b(""),De=X.anchor=K?K.anchor:b("");let{patchFlag:Re,dynamicChildren:Ne,slotScopeIds:He}=X;He&&(xe=xe?xe.concat(He):He),K==null?(l(he,de,_e),l(De,de,_e),H(X.children||[],de,De,ke,ye,Me,xe,ve)):Re>0&&Re&64&&Ne&&K.dynamicChildren?(q(K.dynamicChildren,Ne,de,ke,ye,Me,xe),(X.key!=null||ke&&X===ke.subTree)&&S_(K,X,!0)):ie(K,X,de,De,ke,ye,Me,xe,ve)},te=(K,X,de,_e,ke,ye,Me,xe,ve)=>{X.slotScopeIds=xe,K==null?X.shapeFlag&512?ke.ctx.activate(X,de,_e,Me,ve):re(X,de,_e,ke,ye,Me,ve):ae(K,X,ve)},re=(K,X,de,_e,ke,ye,Me)=>{const xe=K.component=LI(K,_e,ke);if(gu(K)&&(xe.ctx.renderer=ot),FI(xe,!1,Me),xe.asyncDep){if(ke&&ke.registerDep(xe,oe,Me),!K.el){const ve=xe.subTree=ue(zn);N(null,ve,X,de)}}else oe(xe,K,X,de,ke,ye,Me)},ae=(K,X,de)=>{const _e=X.component=K.component;if(Dq(K,X,de))if(_e.asyncDep&&!_e.asyncResolved){ge(_e,X,de);return}else _e.next=X,SU(_e.update),_e.effect.dirty=!0,_e.update();else X.el=K.el,_e.vnode=X},oe=(K,X,de,_e,ke,ye,Me)=>{const xe=()=>{if(K.isMounted){let{next:De,bu:Re,u:Ne,parent:He,vnode:Ye}=K;{const Mo=vI(K);if(Mo){De&&(De.el=Ye.el,ge(K,De,Me)),Mo.asyncDep.then(()=>{K.isUnmounted||xe()});return}}let ht=De,ct;aa(K,!1),De?(De.el=Ye.el,ge(K,De,Me)):De=Ye,Re&&Ll(Re),(ct=De.props&&De.props.onVnodeBeforeUpdate)&&Co(ct,He,De,Ye),aa(K,!0);const pt=bp(K),Tn=K.subTree;K.subTree=pt,I(Tn,pt,x(Tn.el),At(Tn),K,ke,ye),De.el=pt.el,ht===null&&T_(K,pt.el),Ne&&Ln(Ne,ke),(ct=De.props&&De.props.onVnodeUpdated)&&Ln(()=>Co(ct,He,De,Ye),ke)}else{let De;const{el:Re,props:Ne}=X,{bm:He,m:Ye,parent:ht}=K,ct=Aa(X);if(aa(K,!1),He&&Ll(He),!ct&&(De=Ne&&Ne.onVnodeBeforeMount)&&Co(De,ht,X),aa(K,!0),Re&&Wt){const pt=()=>{K.subTree=bp(K),Wt(Re,K.subTree,K,ke,null)};ct?X.type.__asyncLoader().then(()=>!K.isUnmounted&&pt()):pt()}else{const pt=K.subTree=bp(K);I(null,pt,de,_e,K,ke,ye),X.el=pt.el}if(Ye&&Ln(Ye,ke),!ct&&(De=Ne&&Ne.onVnodeMounted)){const pt=X;Ln(()=>Co(De,ht,pt),ke)}(X.shapeFlag&256||ht&&Aa(ht.vnode)&&ht.vnode.shapeFlag&256)&&K.a&&Ln(K.a,ke),K.isMounted=!0,X=de=_e=null}},ve=K.effect=new Wl(xe,So,()=>Af(he),K.scope),he=K.update=()=>{ve.dirty&&ve.run()};he.i=K,he.id=K.uid,aa(K,!0),he()},ge=(K,X,de)=>{X.component=K;const _e=K.vnode.props;K.vnode=X,K.next=null,cq(K,X.props,_e,de),pq(K,X.children,de),ys(),OS(K),xs()},ie=(K,X,de,_e,ke,ye,Me,xe,ve=!1)=>{const he=K&&K.children,De=K?K.shapeFlag:0,Re=X.children,{patchFlag:Ne,shapeFlag:He}=X;if(Ne>0){if(Ne&128){Se(he,Re,de,_e,ke,ye,Me,xe,ve);return}else if(Ne&256){Le(he,Re,de,_e,ke,ye,Me,xe,ve);return}}He&8?(De&16&&Ve(he,ke,ye),Re!==he&&v(de,Re)):De&16?He&16?Se(he,Re,de,_e,ke,ye,Me,xe,ve):Ve(he,ke,ye,!0):(De&8&&v(de,""),He&16&&H(Re,de,_e,ke,ye,Me,xe,ve))},Le=(K,X,de,_e,ke,ye,Me,xe,ve)=>{K=K||Bl,X=X||Bl;const he=K.length,De=X.length,Re=Math.min(he,De);let Ne;for(Ne=0;Ne<Re;Ne++){const He=X[Ne]=ve?as(X[Ne]):yo(X[Ne]);I(K[Ne],He,de,null,ke,ye,Me,xe,ve)}he>De?Ve(K,ke,ye,!0,!1,Re):H(X,de,_e,ke,ye,Me,xe,ve,Re)},Se=(K,X,de,_e,ke,ye,Me,xe,ve)=>{let he=0;const De=X.length;let Re=K.length-1,Ne=De-1;for(;he<=Re&&he<=Ne;){const He=K[he],Ye=X[he]=ve?as(X[he]):yo(X[he]);if(Si(He,Ye))I(He,Ye,de,null,ke,ye,Me,xe,ve);else break;he++}for(;he<=Re&&he<=Ne;){const He=K[Re],Ye=X[Ne]=ve?as(X[Ne]):yo(X[Ne]);if(Si(He,Ye))I(He,Ye,de,null,ke,ye,Me,xe,ve);else break;Re--,Ne--}if(he>Re){if(he<=Ne){const He=Ne+1,Ye=He<De?X[He].el:_e;for(;he<=Ne;)I(null,X[he]=ve?as(X[he]):yo(X[he]),de,Ye,ke,ye,Me,xe,ve),he++}}else if(he>Ne)for(;he<=Re;)Xe(K[he],ke,ye,!0),he++;else{const He=he,Ye=he,ht=new Map;for(he=Ye;he<=Ne;he++){const It=X[he]=ve?as(X[he]):yo(X[he]);It.key!=null&&ht.set(It.key,he)}let ct,pt=0;const Tn=Ne-Ye+1;let Mo=!1,Lr=0;const po=new Array(Tn);for(he=0;he<Tn;he++)po[he]=0;for(he=He;he<=Re;he++){const It=K[he];if(pt>=Tn){Xe(It,ke,ye,!0);continue}let Bt;if(It.key!=null)Bt=ht.get(It.key);else for(ct=Ye;ct<=Ne;ct++)if(po[ct-Ye]===0&&Si(It,X[ct])){Bt=ct;break}Bt===void 0?Xe(It,ke,ye,!0):(po[Bt-Ye]=he+1,Bt>=Lr?Lr=Bt:Mo=!0,I(It,X[Bt],de,null,ke,ye,Me,xe,ve),pt++)}const Dn=Mo?vq(po):Bl;for(ct=Dn.length-1,he=Tn-1;he>=0;he--){const It=Ye+he,Bt=X[It],Oo=It+1<De?X[It+1].el:_e;po[he]===0?I(null,Bt,de,Oo,ke,ye,Me,xe,ve):Mo&&(ct<0||he!==Dn[ct]?Je(Bt,de,Oo,2):ct--)}}},Je=(K,X,de,_e,ke=null)=>{const{el:ye,type:Me,transition:xe,children:ve,shapeFlag:he}=K;if(he&6){Je(K.component.subTree,X,de,_e);return}if(he&128){K.suspense.move(X,de,_e);return}if(he&64){Me.move(K,X,de,ot);return}if(Me===Pe){l(ye,X,de);for(let Re=0;Re<ve.length;Re++)Je(ve[Re],X,de,_e);l(K.anchor,X,de);return}if(Me===Ca){B(K,X,de);return}if(_e!==2&&he&1&&xe)if(_e===0)xe.beforeEnter(ye),l(ye,X,de),Ln(()=>xe.enter(ye),ke);else{const{leave:Re,delayLeave:Ne,afterLeave:He}=xe,Ye=()=>l(ye,X,de),ht=()=>{Re(ye,()=>{Ye(),He&&He()})};Ne?Ne(ye,Ye,ht):ht()}else l(ye,X,de)},Xe=(K,X,de,_e=!1,ke=!1)=>{const{type:ye,props:Me,ref:xe,children:ve,dynamicChildren:he,shapeFlag:De,patchFlag:Re,dirs:Ne,cacheIndex:He}=K;if(Re===-2&&(ke=!1),xe!=null&&$p(xe,null,de,K,!0),He!=null&&(X.renderCache[He]=void 0),De&256){X.ctx.deactivate(K);return}const Ye=De&1&&Ne,ht=!Aa(K);let ct;if(ht&&(ct=Me&&Me.onVnodeBeforeUnmount)&&Co(ct,X,K),De&6)Fe(K.component,de,_e);else{if(De&128){K.suspense.unmount(de,_e);return}Ye&&Yi(K,null,X,"beforeUnmount"),De&64?K.type.remove(K,X,de,ot,_e):he&&!he.hasOnce&&(ye!==Pe||Re>0&&Re&64)?Ve(he,X,de,!1,!0):(ye===Pe&&Re&384||!ke&&De&16)&&Ve(ve,X,de),_e&&be(K)}(ht&&(ct=Me&&Me.onVnodeUnmounted)||Ye)&&Ln(()=>{ct&&Co(ct,X,K),Ye&&Yi(K,null,X,"unmounted")},de)},be=K=>{const{type:X,el:de,anchor:_e,transition:ke}=K;if(X===Pe){je(de,_e);return}if(X===Ca){z(K);return}const ye=()=>{u(de),ke&&!ke.persisted&&ke.afterLeave&&ke.afterLeave()};if(K.shapeFlag&1&&ke&&!ke.persisted){const{leave:Me,delayLeave:xe}=ke,ve=()=>Me(de,ye);xe?xe(K.el,ye,ve):ve()}else ye()},je=(K,X)=>{let de;for(;K!==X;)de=C(K),u(K),K=de;u(X)},Fe=(K,X,de)=>{const{bum:_e,scope:ke,update:ye,subTree:Me,um:xe,m:ve,a:he}=K;Vp(ve),Vp(he),_e&&Ll(_e),ke.stop(),ye&&(ye.active=!1,Xe(Me,K,X,de)),xe&&Ln(xe,X),Ln(()=>{K.isUnmounted=!0},X),X&&X.pendingBranch&&!X.isUnmounted&&K.asyncDep&&!K.asyncResolved&&K.suspenseId===X.pendingId&&(X.deps--,X.deps===0&&X.resolve())},Ve=(K,X,de,_e=!1,ke=!1,ye=0)=>{for(let Me=ye;Me<K.length;Me++)Xe(K[Me],X,de,_e,ke)},At=K=>{if(K.shapeFlag&6)return At(K.component.subTree);if(K.shapeFlag&128)return K.suspense.next();const X=C(K.anchor||K.el),de=X&&X[mI];return de?C(de):X};let at=!1;const Ot=(K,X,de)=>{K==null?X._vnode&&Xe(X._vnode,null,null,!0):I(X._vnode||null,K,X,null,null,null,de),at||(at=!0,OS(),zp(),at=!1),X._vnode=K},ot={p:I,um:Xe,m:Je,r:be,mt:re,mc:H,pc:ie,pbc:q,n:At,o:i};let xt,Wt;return n&&([xt,Wt]=n(ot)),{render:Ot,hydrate:xt,createApp:sq(Ot,xt)}}function mb({type:i,props:n},r){return r==="svg"&&i==="foreignObject"||r==="mathml"&&i==="annotation-xml"&&n&&n.encoding&&n.encoding.includes("html")?void 0:r}function aa({effect:i,update:n},r){i.allowRecurse=n.allowRecurse=r}function wI(i,n){return(!i||i&&!i.pendingBranch)&&n&&!n.persisted}function S_(i,n,r=!1){const l=i.children,u=n.children;if($e(l)&&$e(u))for(let p=0;p<l.length;p++){const f=l[p];let b=u[p];b.shapeFlag&1&&!b.dynamicChildren&&((b.patchFlag<=0||b.patchFlag===32)&&(b=u[p]=as(u[p]),b.el=f.el),!r&&b.patchFlag!==-2&&S_(f,b)),b.type===ps&&(b.el=f.el)}}function vq(i){const n=i.slice(),r=[0];let l,u,p,f,b;const m=i.length;for(l=0;l<m;l++){const A=i[l];if(A!==0){if(u=r[r.length-1],i[u]<A){n[l]=u,r.push(l);continue}for(p=0,f=r.length-1;p<f;)b=p+f>>1,i[r[b]]<A?p=b+1:f=b;A<i[r[p]]&&(p>0&&(n[l]=r[p-1]),r[p]=l)}}for(p=r.length,f=r[p-1];p-- >0;)r[p]=f,f=n[f];return r}function vI(i){const n=i.subTree.component;if(n)return n.asyncDep&&!n.asyncResolved?n:vI(n)}function Vp(i){if(i)for(let n=0;n<i.length;n++)i[n].active=!1}const AI=Symbol.for("v-scx"),CI=()=>Hd(AI);function Aq(i,n){return bu(i,null,n)}function yI(i,n){return bu(i,null,{flush:"post"})}function xI(i,n){return bu(i,null,{flush:"sync"})}const Xh={};function hs(i,n,r){return bu(i,n,r)}function bu(i,n,{immediate:r,deep:l,flush:u,once:p,onTrack:f,onTrigger:b}=jt){if(n&&p){const W=n;n=(...P)=>{W(...P),U()}}const m=En,A=W=>l===!0?W:ls(W,l===!1?1:void 0);let v,x=!1,C=!1;if(Vn(i)?(v=()=>i.value,x=Ea(i)):va(i)?(v=()=>A(i),x=!0):$e(i)?(C=!0,x=i.some(W=>va(W)||Ea(W)),v=()=>i.map(W=>{if(Vn(W))return W.value;if(va(W))return A(W);if(nt(W))return Tr(W,m,2)})):nt(i)?n?v=()=>Tr(i,m,2):v=()=>(E&&E(),Ho(i,m,3,[T])):v=So,n&&l){const W=v;v=()=>ls(W())}let E,T=W=>{E=B.onStop=()=>{Tr(W,m,4),E=B.onStop=void 0}},I;if(ku)if(T=So,n?r&&Ho(n,m,3,[v(),C?[]:void 0,T]):v(),u==="sync"){const W=CI();I=W.__watcherHandles||(W.__watcherHandles=[])}else return So;let F=C?new Array(i.length).fill(Xh):Xh;const N=()=>{if(!(!B.active||!B.dirty))if(n){const W=B.run();(l||x||(C?W.some((P,H)=>Ii(P,F[H])):Ii(W,F)))&&(E&&E(),Ho(n,m,3,[W,F===Xh?void 0:C&&F[0]===Xh?[]:F,T]),F=W)}else B.run()};N.allowRecurse=!!n;let L;u==="sync"?L=N:u==="post"?L=()=>Ln(N,m&&m.suspense):(N.pre=!0,m&&(N.id=m.uid),L=()=>Af(N));const B=new Wl(v,So,L),z=k5(),U=()=>{B.stop(),z&&s_(z.effects,B)};return n?r?N():F=B.run():u==="post"?Ln(B.run.bind(B),m&&m.suspense):B.run(),I&&I.push(U),U}function Cq(i,n,r){const l=this.proxy,u=nn(i)?i.includes(".")?EI(l,i):()=>l[i]:i.bind(l,l);let p;nt(n)?p=n:(p=n.handler,r=n);const f=Da(this),b=bu(u,p.bind(l),r);return f(),b}function EI(i,n){const r=n.split(".");return()=>{let l=i;for(let u=0;u<r.length&&l;u++)l=l[r[u]];return l}}function ls(i,n=1/0,r){if(n<=0||!Ut(i)||i.__v_skip||(r=r||new Set,r.has(i)))return i;if(r.add(i),n--,Vn(i))ls(i.value,n,r);else if($e(i))for(let l=0;l<i.length;l++)ls(i[l],n,r);else if(Na(i)||Pl(i))i.forEach(l=>{ls(l,n,r)});else if(u5(i)){for(const l in i)ls(i[l],n,r);for(const l of Object.getOwnPropertySymbols(i))Object.prototype.propertyIsEnumerable.call(i,l)&&ls(i[l],n,r)}return i}function yq(i,n,r=jt){const l=Pr(),u=Zn(n),p=xo(n),f=SI(i,n),b=L5((m,A)=>{let v,x,C;return xI(()=>{const E=i[n];Ii(v,E)&&(v=E,A())}),{get(){return m(),r.get?r.get(v):v},set(E){if(!Ii(E,v))return;const T=l.vnode.props;T&&(n in T||u in T||p in T)&&(`onUpdate:${n}`in T||`onUpdate:${u}`in T||`onUpdate:${p}`in T)||(v=E,A());const I=r.set?r.set(E):E;l.emit(`update:${n}`,I),E!==I&&E!==x&&I===C&&A(),x=E,C=I}}});return b[Symbol.iterator]=()=>{let m=0;return{next(){return m<2?{value:m++?f||jt:b,done:!1}:{done:!0}}}},b}const SI=(i,n)=>n==="modelValue"||n==="model-value"?i.modelModifiers:i[`${n}Modifiers`]||i[`${Zn(n)}Modifiers`]||i[`${xo(n)}Modifiers`];function xq(i,n,...r){if(i.isUnmounted)return;const l=i.vnode.props||jt;let u=r;const p=n.startsWith("update:"),f=p&&SI(l,n.slice(7));f&&(f.trim&&(u=r.map(v=>nn(v)?v.trim():v)),f.number&&(u=r.map(Pp)));let b,m=l[b=$d(n)]||l[b=$d(Zn(n))];!m&&p&&(m=l[b=$d(xo(n))]),m&&Ho(m,i,6,u);const A=l[b+"Once"];if(A){if(!i.emitted)i.emitted={};else if(i.emitted[b])return;i.emitted[b]=!0,Ho(A,i,6,u)}}function TI(i,n,r=!1){const l=n.emitsCache,u=l.get(i);if(u!==void 0)return u;const p=i.emits;let f={},b=!1;if(!nt(i)){const m=A=>{const v=TI(A,n,!0);v&&(b=!0,sn(f,v))};!r&&n.mixins.length&&n.mixins.forEach(m),i.extends&&m(i.extends),i.mixins&&i.mixins.forEach(m)}return!p&&!b?(Ut(i)&&l.set(i,null),null):($e(p)?p.forEach(m=>f[m]=null):sn(f,p),Ut(i)&&l.set(i,f),f)}function Tf(i,n){return!i||!hu(n)?!1:(n=n.slice(2).replace(/Once$/,""),Dt(i,n[0].toLowerCase()+n.slice(1))||Dt(i,xo(n))||Dt(i,n))}function bp(i){const{type:n,vnode:r,proxy:l,withProxy:u,propsOptions:[p],slots:f,attrs:b,emit:m,render:A,renderCache:v,props:x,data:C,setupState:E,ctx:T,inheritAttrs:I}=i,F=tu(i);let N,L;try{if(r.shapeFlag&4){const z=u||l,U=z;N=yo(A.call(U,z,v,x,E,C,T)),L=b}else{const z=n;N=yo(z.length>1?z(x,{attrs:b,slots:f,emit:m}):z(x,null)),L=n.props?b:Sq(b)}}catch(z){qd.length=0,La(z,i,1),N=ue(zn)}let B=N;if(L&&I!==!1){const z=Object.keys(L),{shapeFlag:U}=B;z.length&&U&7&&(p&&z.some(r_)&&(L=Tq(L,p)),B=nr(B,L,!1,!0))}return r.dirs&&(B=nr(B,null,!1,!0),B.dirs=B.dirs?B.dirs.concat(r.dirs):r.dirs),r.transition&&(B.transition=r.transition),N=B,tu(F),N}function Eq(i,n=!0){let r;for(let l=0;l<i.length;l++){const u=i[l];if(ks(u)){if(u.type!==zn||u.children==="v-if"){if(r)return;r=u}}else return}return r}const Sq=i=>{let n;for(const r in i)(r==="class"||r==="style"||hu(r))&&((n||(n={}))[r]=i[r]);return n},Tq=(i,n)=>{const r={};for(const l in i)(!r_(l)||!(l.slice(9)in n))&&(r[l]=i[l]);return r};function Dq(i,n,r){const{props:l,children:u,component:p}=i,{props:f,children:b,patchFlag:m}=n,A=p.emitsOptions;if(n.dirs||n.transition)return!0;if(r&&m>=0){if(m&1024)return!0;if(m&16)return l?qS(l,f,A):!!f;if(m&8){const v=n.dynamicProps;for(let x=0;x<v.length;x++){const C=v[x];if(f[C]!==l[C]&&!Tf(A,C))return!0}}}else return(u||b)&&(!b||!b.$stable)?!0:l===f?!1:l?f?qS(l,f,A):!0:!!f;return!1}function qS(i,n,r){const l=Object.keys(n);if(l.length!==Object.keys(i).length)return!0;for(let u=0;u<l.length;u++){const p=l[u];if(n[p]!==i[p]&&!Tf(r,p))return!0}return!1}function T_({vnode:i,parent:n},r){for(;n;){const l=n.subTree;if(l.suspense&&l.suspense.activeBranch===i&&(l.el=i.el),l===i)(i=n.vnode).el=r,n=n.parent;else break}}const vk=i=>i.__isSuspense;let Ak=0;const Iq={name:"Suspense",__isSuspense:!0,process(i,n,r,l,u,p,f,b,m,A){if(i==null)Oq(n,r,l,u,p,f,b,m,A);else{if(p&&p.deps>0&&!i.suspense.isInFallback){n.suspense=i.suspense,n.suspense.vnode=n,n.el=i.el;return}Bq(i,n,r,l,u,f,b,m,A)}},hydrate:Pq,normalize:Nq},Mq=Iq;function ou(i,n){const r=i.props&&i.props[n];nt(r)&&r()}function Oq(i,n,r,l,u,p,f,b,m){const{p:A,o:{createElement:v}}=m,x=v("div"),C=i.suspense=DI(i,u,l,n,x,r,p,f,b,m);A(null,C.pendingBranch=i.ssContent,x,null,l,C,p,f),C.deps>0?(ou(i,"onPending"),ou(i,"onFallback"),A(null,i.ssFallback,n,r,l,null,p,f),jl(C,i.ssFallback)):C.resolve(!1,!0)}function Bq(i,n,r,l,u,p,f,b,{p:m,um:A,o:{createElement:v}}){const x=n.suspense=i.suspense;x.vnode=n,n.el=i.el;const C=n.ssContent,E=n.ssFallback,{activeBranch:T,pendingBranch:I,isInFallback:F,isHydrating:N}=x;if(I)x.pendingBranch=C,Si(C,I)?(m(I,C,x.hiddenContainer,null,u,x,p,f,b),x.deps<=0?x.resolve():F&&(N||(m(T,E,r,l,u,null,p,f,b),jl(x,E)))):(x.pendingId=Ak++,N?(x.isHydrating=!1,x.activeBranch=I):A(I,u,x),x.deps=0,x.effects.length=0,x.hiddenContainer=v("div"),F?(m(null,C,x.hiddenContainer,null,u,x,p,f,b),x.deps<=0?x.resolve():(m(T,E,r,l,u,null,p,f,b),jl(x,E))):T&&Si(C,T)?(m(T,C,r,l,u,x,p,f,b),x.resolve(!0)):(m(null,C,x.hiddenContainer,null,u,x,p,f,b),x.deps<=0&&x.resolve()));else if(T&&Si(C,T))m(T,C,r,l,u,x,p,f,b),jl(x,C);else if(ou(n,"onPending"),x.pendingBranch=C,C.shapeFlag&512?x.pendingId=C.component.suspenseId:x.pendingId=Ak++,m(null,C,x.hiddenContainer,null,u,x,p,f,b),x.deps<=0)x.resolve();else{const{timeout:L,pendingId:B}=x;L>0?setTimeout(()=>{x.pendingId===B&&x.fallback(E)},L):L===0&&x.fallback(E)}}function DI(i,n,r,l,u,p,f,b,m,A,v=!1){const{p:x,m:C,um:E,n:T,o:{parentNode:I,remove:F}}=A;let N;const L=Lq(i);L&&n&&n.pendingBranch&&(N=n.pendingId,n.deps++);const B=i.props?Np(i.props.timeout):void 0,z=p,U={vnode:i,parent:n,parentComponent:r,namespace:f,container:l,hiddenContainer:u,deps:0,pendingId:Ak++,timeout:typeof B=="number"?B:-1,activeBranch:null,pendingBranch:null,isInFallback:!v,isHydrating:v,isUnmounted:!1,effects:[],resolve(W=!1,P=!1){const{vnode:H,activeBranch:V,pendingBranch:q,pendingId:Y,effects:J,parentComponent:te,container:re}=U;let ae=!1;U.isHydrating?U.isHydrating=!1:W||(ae=V&&q.transition&&q.transition.mode==="out-in",ae&&(V.transition.afterLeave=()=>{Y===U.pendingId&&(C(q,re,p===z?T(V):p,0),Fp(J))}),V&&(I(V.el)!==U.hiddenContainer&&(p=T(V)),E(V,te,U,!0)),ae||C(q,re,p,0)),jl(U,q),U.pendingBranch=null,U.isInFallback=!1;let oe=U.parent,ge=!1;for(;oe;){if(oe.pendingBranch){oe.effects.push(...J),ge=!0;break}oe=oe.parent}!ge&&!ae&&Fp(J),U.effects=[],L&&n&&n.pendingBranch&&N===n.pendingId&&(n.deps--,n.deps===0&&!P&&n.resolve()),ou(H,"onResolve")},fallback(W){if(!U.pendingBranch)return;const{vnode:P,activeBranch:H,parentComponent:V,container:q,namespace:Y}=U;ou(P,"onFallback");const J=T(H),te=()=>{U.isInFallback&&(x(null,W,q,J,V,null,Y,b,m),jl(U,W))},re=W.transition&&W.transition.mode==="out-in";re&&(H.transition.afterLeave=te),U.isInFallback=!0,E(H,V,null,!0),re||te()},move(W,P,H){U.activeBranch&&C(U.activeBranch,W,P,H),U.container=W},next(){return U.activeBranch&&T(U.activeBranch)},registerDep(W,P,H){const V=!!U.pendingBranch;V&&U.deps++;const q=W.vnode.el;W.asyncDep.catch(Y=>{La(Y,W,0)}).then(Y=>{if(W.isUnmounted||U.isUnmounted||U.pendingId!==W.suspenseId)return;W.asyncResolved=!0;const{vnode:J}=W;Ek(W,Y,!1),q&&(J.el=q);const te=!q&&W.subTree.el;P(W,J,I(q||W.subTree.el),q?null:T(W.subTree),U,f,H),te&&F(te),T_(W,J.el),V&&--U.deps===0&&U.resolve()})},unmount(W,P){U.isUnmounted=!0,U.activeBranch&&E(U.activeBranch,r,W,P),U.pendingBranch&&E(U.pendingBranch,r,W,P)}};return U}function Pq(i,n,r,l,u,p,f,b,m){const A=n.suspense=DI(n,l,r,i.parentNode,document.createElement("div"),null,u,p,f,b,!0),v=m(i,A.pendingBranch=n.ssContent,r,A,p,f);return A.deps===0&&A.resolve(!1,!0),v}function Nq(i){const{shapeFlag:n,children:r}=i,l=n&32;i.ssContent=GS(l?r.default:r),i.ssFallback=l?GS(r.fallback):ue(zn)}function GS(i){let n;if(nt(i)){const r=Ta&&i._c;r&&(i._d=!1,ee()),i=i(),r&&(i._d=!0,n=Qn,MI())}return $e(i)&&(i=Eq(i)),i=yo(i),n&&!i.dynamicChildren&&(i.dynamicChildren=n.filter(r=>r!==i)),i}function II(i,n){n&&n.pendingBranch?$e(i)?n.effects.push(...i):n.effects.push(i):Fp(i)}function jl(i,n){i.activeBranch=n;const{vnode:r,parentComponent:l}=i;let u=n.el;for(;!u&&n.component;)n=n.component.subTree,u=n.el;r.el=u,l&&l.subTree===r&&(l.vnode.el=u,T_(l,u))}function Lq(i){const n=i.props&&i.props.suspensible;return n!=null&&n!==!1}const Pe=Symbol.for("v-fgt"),ps=Symbol.for("v-txt"),zn=Symbol.for("v-cmt"),Ca=Symbol.for("v-stc"),qd=[];let Qn=null;function ee(i=!1){qd.push(Qn=i?null:[])}function MI(){qd.pop(),Qn=qd[qd.length-1]||null}let Ta=1;function Ck(i){Ta+=i,i<0&&Qn&&(Qn.hasOnce=!0)}function OI(i){return i.dynamicChildren=Ta>0?Qn||Bl:null,MI(),Ta>0&&Qn&&Qn.push(i),i}function ne(i,n,r,l,u,p){return OI(_(i,n,r,l,u,p,!0))}function bs(i,n,r,l,u){return OI(ue(i,n,r,l,u,!0))}function ks(i){return i?i.__v_isVNode===!0:!1}function Si(i,n){return i.type===n.type&&i.key===n.key}function Rq(i){}const BI=({key:i})=>i??null,kp=({ref:i,ref_key:n,ref_for:r})=>(typeof i=="number"&&(i=""+i),i!=null?nn(i)||Vn(i)||nt(i)?{i:Sn,r:i,k:n,f:!!r}:i:null);function _(i,n=null,r=null,l=0,u=null,p=i===Pe?0:1,f=!1,b=!1){const m={__v_isVNode:!0,__v_skip:!0,type:i,props:n,key:n&&BI(n),ref:n&&kp(n),scopeId:Cf,slotScopeIds:null,children:r,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:p,patchFlag:l,dynamicProps:u,dynamicChildren:null,appContext:null,ctx:Sn};return b?(D_(m,r),p&128&&i.normalize(m)):r&&(m.shapeFlag|=nn(r)?8:16),Ta>0&&!f&&Qn&&(m.patchFlag>0||p&6)&&m.patchFlag!==32&&Qn.push(m),m}const ue=Fq;function Fq(i,n=null,r=null,l=0,u=null,p=!1){if((!i||i===tI)&&(i=zn),ks(i)){const b=nr(i,n,!0);return r&&D_(b,r),Ta>0&&!p&&Qn&&(b.shapeFlag&6?Qn[Qn.indexOf(i)]=b:Qn.push(b)),b.patchFlag=-2,b}if(qq(i)&&(i=i.__vccOpts),n){n=PI(n);let{class:b,style:m}=n;b&&!nn(b)&&(n.class=Kn(b)),Ut(m)&&(f_(m)&&!$e(m)&&(m=sn({},m)),n.style=fu(m))}const f=nn(i)?1:vk(i)?128:fq(i)?64:Ut(i)?4:nt(i)?2:0;return _(i,n,r,l,u,f,p,!0)}function PI(i){return i?f_(i)||lI(i)?sn({},i):i:null}function nr(i,n,r=!1,l=!1){const{props:u,ref:p,patchFlag:f,children:b,transition:m}=i,A=n?NI(u||{},n):u,v={__v_isVNode:!0,__v_skip:!0,type:i.type,props:A,key:A&&BI(A),ref:n&&n.ref?r&&p?$e(p)?p.concat(kp(n)):[p,kp(n)]:kp(n):p,scopeId:i.scopeId,slotScopeIds:i.slotScopeIds,children:b,target:i.target,targetStart:i.targetStart,targetAnchor:i.targetAnchor,staticCount:i.staticCount,shapeFlag:i.shapeFlag,patchFlag:n&&i.type!==Pe?f===-1?16:f|16:f,dynamicProps:i.dynamicProps,dynamicChildren:i.dynamicChildren,appContext:i.appContext,dirs:i.dirs,transition:m,component:i.component,suspense:i.suspense,ssContent:i.ssContent&&nr(i.ssContent),ssFallback:i.ssFallback&&nr(i.ssFallback),el:i.el,anchor:i.anchor,ctx:i.ctx,ce:i.ce};return m&&l&&gs(v,m.clone(v)),v}function ze(i=" ",n=0){return ue(ps,null,i,n)}function bn(i,n){const r=ue(Ca,null,i);return r.staticCount=n,r}function Te(i="",n=!1){return n?(ee(),bs(zn,null,i)):ue(zn,null,i)}function yo(i){return i==null||typeof i=="boolean"?ue(zn):$e(i)?ue(Pe,null,i.slice()):typeof i=="object"?as(i):ue(ps,null,String(i))}function as(i){return i.el===null&&i.patchFlag!==-1||i.memo?i:nr(i)}function D_(i,n){let r=0;const{shapeFlag:l}=i;if(n==null)n=null;else if($e(n))r=16;else if(typeof n=="object")if(l&65){const u=n.default;u&&(u._c&&(u._d=!1),D_(i,u()),u._c&&(u._d=!0));return}else{r=32;const u=n._;!u&&!lI(n)?n._ctx=Sn:u===3&&Sn&&(Sn.slots._===1?n._=1:(n._=2,i.patchFlag|=1024))}else nt(n)?(n={default:n,_ctx:Sn},r=32):(n=String(n),l&64?(r=16,n=[ze(n)]):r=8);i.children=n,i.shapeFlag|=r}function NI(...i){const n={};for(let r=0;r<i.length;r++){const l=i[r];for(const u in l)if(u==="class")n.class!==l.class&&(n.class=Kn([n.class,l.class]));else if(u==="style")n.style=fu([n.style,l.style]);else if(hu(u)){const p=n[u],f=l[u];f&&p!==f&&!($e(p)&&p.includes(f))&&(n[u]=p?[].concat(p,f):f)}else u!==""&&(n[u]=l[u])}return n}function Co(i,n,r,l=null){Ho(i,n,7,[r,l])}const zq=rI();let jq=0;function LI(i,n,r){const l=i.type,u=(n?n.appContext:i.appContext)||zq,p={uid:jq++,vnode:i,type:l,parent:n,appContext:u,root:null,next:null,subTree:null,effect:null,update:null,scope:new c_(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:n?n.provides:Object.create(u.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:dI(l,u),emitsOptions:TI(l,u),emit:null,emitted:null,propsDefaults:jt,inheritAttrs:l.inheritAttrs,ctx:jt,data:jt,props:jt,attrs:jt,slots:jt,refs:jt,setupState:jt,setupContext:null,suspense:r,suspenseId:r?r.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return p.ctx={_:p},p.root=n?n.root:p,p.emit=xq.bind(null,p),i.ce&&i.ce(p),p}let En=null;const Pr=()=>En||Sn;let Hp,yk;{const i=p5(),n=(r,l)=>{let u;return(u=i[r])||(u=i[r]=[]),u.push(l),p=>{u.length>1?u.forEach(f=>f(p)):u[0](p)}};Hp=n("__VUE_INSTANCE_SETTERS__",r=>En=r),yk=n("__VUE_SSR_SETTERS__",r=>ku=r)}const Da=i=>{const n=En;return Hp(i),i.scope.on(),()=>{i.scope.off(),Hp(n)}},xk=()=>{En&&En.scope.off(),Hp(null)};function RI(i){return i.vnode.shapeFlag&4}let ku=!1;function FI(i,n=!1,r=!1){n&&yk(n);const{props:l,children:u}=i.vnode,p=RI(i);lq(i,l,p,n),hq(i,u,r);const f=p?$q(i,n):void 0;return n&&yk(!1),f}function $q(i,n){const r=i.type;i.accessCache=Object.create(null),i.proxy=new Proxy(i.ctx,gk);const{setup:l}=r;if(l){const u=i.setupContext=l.length>1?jI(i):null,p=Da(i);ys();const f=Tr(l,i,0,[i.props,u]);if(xs(),p(),a_(f)){if(f.then(xk,xk),n)return f.then(b=>{Ek(i,b,n)}).catch(b=>{La(b,i,0)});i.asyncDep=f}else Ek(i,f,n)}else zI(i,n)}function Ek(i,n,r){nt(n)?i.type.__ssrInlineRender?i.ssrRender=n:i.render=n:Ut(n)&&(i.setupState=k_(n)),zI(i,r)}let Up,Sk;function Vq(i){Up=i,Sk=n=>{n.render._rc&&(n.withProxy=new Proxy(n.ctx,jU))}}const Hq=()=>!Up;function zI(i,n,r){const l=i.type;if(!i.render){if(!n&&Up&&!l.render){const u=l.template||x_(i).template;if(u){const{isCustomElement:p,compilerOptions:f}=i.appContext.config,{delimiters:b,compilerOptions:m}=l,A=sn(sn({isCustomElement:p,delimiters:b},f),m);l.render=Up(u,A)}}i.render=l.render||So,Sk&&Sk(i)}{const u=Da(i);ys();try{eq(i)}finally{xs(),u()}}}const Uq={get(i,n){return Io(i,"get",""),i[n]}};function jI(i){const n=r=>{i.exposed=r||{}};return{attrs:new Proxy(i.attrs,Uq),slots:i.slots,emit:i.emit,expose:n}}function _u(i){return i.exposed?i.exposeProxy||(i.exposeProxy=new Proxy(k_(Rp(i.exposed)),{get(n,r){if(r in n)return n[r];if(r in Vd)return Vd[r](i)},has(n,r){return r in n||r in Vd}})):i.proxy}function Tk(i,n=!0){return nt(i)?i.displayName||i.name:i.name||n&&i.__name}function qq(i){return nt(i)&&"__vccOpts"in i}const I_=(i,n)=>dU(i,n,ku);function _n(i,n,r){const l=arguments.length;return l===2?Ut(n)&&!$e(n)?ks(n)?ue(i,null,[n]):ue(i,n):ue(i,null,n):(l>3?r=Array.prototype.slice.call(arguments,2):l===3&&ks(r)&&(r=[r]),ue(i,n,r))}function Gq(){}function Wq(i,n,r,l){const u=r[l];if(u&&$I(u,i))return u;const p=n();return p.memo=i.slice(),p.cacheIndex=l,r[l]=p}function $I(i,n){const r=i.memo;if(r.length!=n.length)return!1;for(let l=0;l<r.length;l++)if(Ii(r[l],n[l]))return!1;return Ta>0&&Qn&&Qn.push(i),!0}const VI="3.4.33",Kq=So,Yq=yU,Qq=El,Zq=$5,Jq={createComponentInstance:LI,setupComponent:FI,renderComponentRoot:bp,setCurrentRenderingInstance:tu,isVNode:ks,normalizeVNode:yo,getComponentPublicInstance:_u},Xq=Jq,eG=null,tG=null,nG=null;/**
* @vue/runtime-dom v3.4.33
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const oG="http://www.w3.org/2000/svg",iG="http://www.w3.org/1998/Math/MathML",Cr=typeof document<"u"?document:null,WS=Cr&&Cr.createElement("template"),rG={insert:(i,n,r)=>{n.insertBefore(i,r||null)},remove:i=>{const n=i.parentNode;n&&n.removeChild(i)},createElement:(i,n,r,l)=>{const u=n==="svg"?Cr.createElementNS(oG,i):n==="mathml"?Cr.createElementNS(iG,i):r?Cr.createElement(i,{is:r}):Cr.createElement(i);return i==="select"&&l&&l.multiple!=null&&u.setAttribute("multiple",l.multiple),u},createText:i=>Cr.createTextNode(i),createComment:i=>Cr.createComment(i),setText:(i,n)=>{i.nodeValue=n},setElementText:(i,n)=>{i.textContent=n},parentNode:i=>i.parentNode,nextSibling:i=>i.nextSibling,querySelector:i=>Cr.querySelector(i),setScopeId(i,n){i.setAttribute(n,"")},insertStaticContent(i,n,r,l,u,p){const f=r?r.previousSibling:n.lastChild;if(u&&(u===p||u.nextSibling))for(;n.insertBefore(u.cloneNode(!0),r),!(u===p||!(u=u.nextSibling)););else{WS.innerHTML=l==="svg"?`<svg>${i}</svg>`:l==="mathml"?`<math>${i}</math>`:i;const b=WS.content;if(l==="svg"||l==="mathml"){const m=b.firstChild;for(;m.firstChild;)b.appendChild(m.firstChild);b.removeChild(m)}n.insertBefore(b,r)}return[f?f.nextSibling:n.firstChild,r?r.previousSibling:n.lastChild]}},ts="transition",Dd="animation",Yl=Symbol("_vtc"),M_=(i,{slots:n})=>_n(q5,UI(i),n);M_.displayName="Transition";const HI={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},sG=M_.props=sn({},v_,HI),la=(i,n=[])=>{$e(i)?i.forEach(r=>r(...n)):i&&i(...n)},KS=i=>i?$e(i)?i.some(n=>n.length>1):i.length>1:!1;function UI(i){const n={};for(const J in i)J in HI||(n[J]=i[J]);if(i.css===!1)return n;const{name:r="v",type:l,duration:u,enterFromClass:p=`${r}-enter-from`,enterActiveClass:f=`${r}-enter-active`,enterToClass:b=`${r}-enter-to`,appearFromClass:m=p,appearActiveClass:A=f,appearToClass:v=b,leaveFromClass:x=`${r}-leave-from`,leaveActiveClass:C=`${r}-leave-active`,leaveToClass:E=`${r}-leave-to`}=i,T=aG(u),I=T&&T[0],F=T&&T[1],{onBeforeEnter:N,onEnter:L,onEnterCancelled:B,onLeave:z,onLeaveCancelled:U,onBeforeAppear:W=N,onAppear:P=L,onAppearCancelled:H=B}=n,V=(J,te,re)=>{os(J,te?v:b),os(J,te?A:f),re&&re()},q=(J,te)=>{J._isLeaving=!1,os(J,x),os(J,E),os(J,C),te&&te()},Y=J=>(te,re)=>{const ae=J?P:L,oe=()=>V(te,J,re);la(ae,[te,oe]),YS(()=>{os(te,J?m:p),wr(te,J?v:b),KS(ae)||QS(te,l,I,oe)})};return sn(n,{onBeforeEnter(J){la(N,[J]),wr(J,p),wr(J,f)},onBeforeAppear(J){la(W,[J]),wr(J,m),wr(J,A)},onEnter:Y(!1),onAppear:Y(!0),onLeave(J,te){J._isLeaving=!0;const re=()=>q(J,te);wr(J,x),wr(J,C),GI(),YS(()=>{J._isLeaving&&(os(J,x),wr(J,E),KS(z)||QS(J,l,F,re))}),la(z,[J,re])},onEnterCancelled(J){V(J,!1),la(B,[J])},onAppearCancelled(J){V(J,!0),la(H,[J])},onLeaveCancelled(J){q(J),la(U,[J])}})}function aG(i){if(i==null)return null;if(Ut(i))return[gb(i.enter),gb(i.leave)];{const n=gb(i);return[n,n]}}function gb(i){return Np(i)}function wr(i,n){n.split(/\s+/).forEach(r=>r&&i.classList.add(r)),(i[Yl]||(i[Yl]=new Set)).add(n)}function os(i,n){n.split(/\s+/).forEach(l=>l&&i.classList.remove(l));const r=i[Yl];r&&(r.delete(n),r.size||(i[Yl]=void 0))}function YS(i){requestAnimationFrame(()=>{requestAnimationFrame(i)})}let lG=0;function QS(i,n,r,l){const u=i._endId=++lG,p=()=>{u===i._endId&&l()};if(r)return setTimeout(p,r);const{type:f,timeout:b,propCount:m}=qI(i,n);if(!f)return l();const A=f+"end";let v=0;const x=()=>{i.removeEventListener(A,C),p()},C=E=>{E.target===i&&++v>=m&&x()};setTimeout(()=>{v<m&&x()},b+1),i.addEventListener(A,C)}function qI(i,n){const r=window.getComputedStyle(i),l=T=>(r[T]||"").split(", "),u=l(`${ts}Delay`),p=l(`${ts}Duration`),f=ZS(u,p),b=l(`${Dd}Delay`),m=l(`${Dd}Duration`),A=ZS(b,m);let v=null,x=0,C=0;n===ts?f>0&&(v=ts,x=f,C=p.length):n===Dd?A>0&&(v=Dd,x=A,C=m.length):(x=Math.max(f,A),v=x>0?f>A?ts:Dd:null,C=v?v===ts?p.length:m.length:0);const E=v===ts&&/\b(transform|all)(,|$)/.test(l(`${ts}Property`).toString());return{type:v,timeout:x,propCount:C,hasTransform:E}}function ZS(i,n){for(;i.length<n.length;)i=i.concat(i);return Math.max(...n.map((r,l)=>JS(r)+JS(i[l])))}function JS(i){return i==="auto"?0:Number(i.slice(0,-1).replace(",","."))*1e3}function GI(){return document.body.offsetHeight}function cG(i,n,r){const l=i[Yl];l&&(n=(n?[n,...l]:[...l]).join(" ")),n==null?i.removeAttribute("class"):r?i.setAttribute("class",n):i.className=n}const qp=Symbol("_vod"),WI=Symbol("_vsh"),KI={beforeMount(i,{value:n},{transition:r}){i[qp]=i.style.display==="none"?"":i.style.display,r&&n?r.beforeEnter(i):Id(i,n)},mounted(i,{value:n},{transition:r}){r&&n&&r.enter(i)},updated(i,{value:n,oldValue:r},{transition:l}){!n!=!r&&(l?n?(l.beforeEnter(i),Id(i,!0),l.enter(i)):l.leave(i,()=>{Id(i,!1)}):Id(i,n))},beforeUnmount(i,{value:n}){Id(i,n)}};function Id(i,n){i.style.display=n?i[qp]:"none",i[WI]=!n}function dG(){KI.getSSRProps=({value:i})=>{if(!i)return{style:{display:"none"}}}}const YI=Symbol("");function uG(i){const n=Pr();if(!n)return;const r=n.ut=(u=i(n.proxy))=>{Array.from(document.querySelectorAll(`[data-v-owner="${n.uid}"]`)).forEach(p=>Ik(p,u))},l=()=>{const u=i(n.proxy);Dk(n.subTree,u),r(u)};Es(()=>{yI(l);const u=new MutationObserver(l);u.observe(n.subTree.el.parentNode,{childList:!0}),Ef(()=>u.disconnect())})}function Dk(i,n){if(i.shapeFlag&128){const r=i.suspense;i=r.activeBranch,r.pendingBranch&&!r.isHydrating&&r.effects.push(()=>{Dk(r.activeBranch,n)})}for(;i.component;)i=i.component.subTree;if(i.shapeFlag&1&&i.el)Ik(i.el,n);else if(i.type===Pe)i.children.forEach(r=>Dk(r,n));else if(i.type===Ca){let{el:r,anchor:l}=i;for(;r&&(Ik(r,n),r!==l);)r=r.nextSibling}}function Ik(i,n){if(i.nodeType===1){const r=i.style;let l="";for(const u in n)r.setProperty(`--${u}`,n[u]),l+=`--${u}: ${n[u]};`;r[YI]=l}}const hG=/(^|;)\s*display\s*:/;function pG(i,n,r){const l=i.style,u=nn(r);let p=!1;if(r&&!u){if(n)if(nn(n))for(const f of n.split(";")){const b=f.slice(0,f.indexOf(":")).trim();r[b]==null&&_p(l,b,"")}else for(const f in n)r[f]==null&&_p(l,f,"");for(const f in r)f==="display"&&(p=!0),_p(l,f,r[f])}else if(u){if(n!==r){const f=l[YI];f&&(r+=";"+f),l.cssText=r,p=hG.test(r)}}else n&&i.removeAttribute("style");qp in i&&(i[qp]=p?l.display:"",i[WI]&&(l.display="none"))}const XS=/\s*!important$/;function _p(i,n,r){if($e(r))r.forEach(l=>_p(i,n,l));else if(r==null&&(r=""),n.startsWith("--"))i.setProperty(n,r);else{const l=fG(i,n);XS.test(r)?i.setProperty(xo(l),r.replace(XS,""),"important"):i[l]=r}}const eT=["Webkit","Moz","ms"],bb={};function fG(i,n){const r=bb[n];if(r)return r;let l=Zn(n);if(l!=="filter"&&l in i)return bb[n]=l;l=pu(l);for(let u=0;u<eT.length;u++){const p=eT[u]+l;if(p in i)return bb[n]=p}return n}const tT="http://www.w3.org/1999/xlink";function nT(i,n,r,l,u,p=RH(n)){l&&n.startsWith("xlink:")?r==null?i.removeAttributeNS(tT,n.slice(6,n.length)):i.setAttributeNS(tT,n,r):r==null||p&&!f5(r)?i.removeAttribute(n):i.setAttribute(n,p?"":tr(r)?String(r):r)}function mG(i,n,r,l){if(n==="innerHTML"||n==="textContent"){if(r==null)return;i[n]=r;return}const u=i.tagName;if(n==="value"&&u!=="PROGRESS"&&!u.includes("-")){const f=u==="OPTION"?i.getAttribute("value")||"":i.value,b=r==null?"":String(r);(f!==b||!("_value"in i))&&(i.value=b),r==null&&i.removeAttribute(n),i._value=r;return}let p=!1;if(r===""||r==null){const f=typeof i[n];f==="boolean"?r=f5(r):r==null&&f==="string"?(r="",p=!0):f==="number"&&(r=0,p=!0)}try{i[n]=r}catch{}p&&i.removeAttribute(n)}function yr(i,n,r,l){i.addEventListener(n,r,l)}function gG(i,n,r,l){i.removeEventListener(n,r,l)}const oT=Symbol("_vei");function bG(i,n,r,l,u=null){const p=i[oT]||(i[oT]={}),f=p[n];if(l&&f)f.value=l;else{const[b,m]=kG(n);if(l){const A=p[n]=vG(l,u);yr(i,b,A,m)}else f&&(gG(i,b,f,m),p[n]=void 0)}}const iT=/(?:Once|Passive|Capture)$/;function kG(i){let n;if(iT.test(i)){n={};let l;for(;l=i.match(iT);)i=i.slice(0,i.length-l[0].length),n[l[0].toLowerCase()]=!0}return[i[2]===":"?i.slice(3):xo(i.slice(2)),n]}let kb=0;const _G=Promise.resolve(),wG=()=>kb||(_G.then(()=>kb=0),kb=Date.now());function vG(i,n){const r=l=>{if(!l._vts)l._vts=Date.now();else if(l._vts<=r.attached)return;Ho(AG(l,r.value),n,5,[l])};return r.value=i,r.attached=wG(),r}function AG(i,n){if($e(n)){const r=i.stopImmediatePropagation;return i.stopImmediatePropagation=()=>{r.call(i),i._stopped=!0},n.map(l=>u=>!u._stopped&&l&&l(u))}else return n}const rT=i=>i.charCodeAt(0)===111&&i.charCodeAt(1)===110&&i.charCodeAt(2)>96&&i.charCodeAt(2)<123,CG=(i,n,r,l,u,p)=>{const f=u==="svg";n==="class"?cG(i,l,f):n==="style"?pG(i,r,l):hu(n)?r_(n)||bG(i,n,r,l,p):(n[0]==="."?(n=n.slice(1),!0):n[0]==="^"?(n=n.slice(1),!1):yG(i,n,l,f))?(mG(i,n,l),!i.tagName.includes("-")&&(n==="value"||n==="checked"||n==="selected")&&nT(i,n,l,f,p,n!=="value")):(n==="true-value"?i._trueValue=l:n==="false-value"&&(i._falseValue=l),nT(i,n,l,f))};function yG(i,n,r,l){if(l)return!!(n==="innerHTML"||n==="textContent"||n in i&&rT(n)&&nt(r));if(n==="spellcheck"||n==="draggable"||n==="translate"||n==="form"||n==="list"&&i.tagName==="INPUT"||n==="type"&&i.tagName==="TEXTAREA")return!1;if(n==="width"||n==="height"){const u=i.tagName;if(u==="IMG"||u==="VIDEO"||u==="CANVAS"||u==="SOURCE")return!1}return rT(n)&&nn(r)?!1:n in i}/*! #__NO_SIDE_EFFECTS__ */function QI(i,n,r){const l=uc(i,n);class u extends Df{constructor(f){super(l,f,r)}}return u.def=l,u}/*! #__NO_SIDE_EFFECTS__ */const xG=(i,n)=>QI(i,n,sM),EG=typeof HTMLElement<"u"?HTMLElement:class{};class Df extends EG{constructor(n,r={},l){super(),this._def=n,this._props=r,this._instance=null,this._connected=!1,this._resolved=!1,this._numberProps=null,this._ob=null,this.shadowRoot&&l?l(this._createVNode(),this.shadowRoot):(this.attachShadow({mode:"open"}),this._def.__asyncLoader||this._resolveProps(this._def))}connectedCallback(){this._connected=!0,this._instance||(this._resolved?this._update():this._resolveDef())}disconnectedCallback(){this._connected=!1,mu(()=>{this._connected||(this._ob&&(this._ob.disconnect(),this._ob=null),Mk(null,this.shadowRoot),this._instance=null)})}_resolveDef(){this._resolved=!0;for(let l=0;l<this.attributes.length;l++)this._setAttr(this.attributes[l].name);this._ob=new MutationObserver(l=>{for(const u of l)this._setAttr(u.attributeName)}),this._ob.observe(this,{attributes:!0});const n=(l,u=!1)=>{const{props:p,styles:f}=l;let b;if(p&&!$e(p))for(const m in p){const A=p[m];(A===Number||A&&A.type===Number)&&(m in this._props&&(this._props[m]=Np(this._props[m])),(b||(b=Object.create(null)))[Zn(m)]=!0)}this._numberProps=b,u&&this._resolveProps(l),this._applyStyles(f),this._update()},r=this._def.__asyncLoader;r?r().then(l=>n(l,!0)):n(this._def)}_resolveProps(n){const{props:r}=n,l=$e(r)?r:Object.keys(r||{});for(const u of Object.keys(this))u[0]!=="_"&&l.includes(u)&&this._setProp(u,this[u],!0,!1);for(const u of l.map(Zn))Object.defineProperty(this,u,{get(){return this._getProp(u)},set(p){this._setProp(u,p)}})}_setAttr(n){let r=this.hasAttribute(n)?this.getAttribute(n):void 0;const l=Zn(n);this._numberProps&&this._numberProps[l]&&(r=Np(r)),this._setProp(l,r,!1)}_getProp(n){return this._props[n]}_setProp(n,r,l=!0,u=!0){r!==this._props[n]&&(this._props[n]=r,u&&this._instance&&this._update(),l&&(r===!0?this.setAttribute(xo(n),""):typeof r=="string"||typeof r=="number"?this.setAttribute(xo(n),r+""):r||this.removeAttribute(xo(n))))}_update(){Mk(this._createVNode(),this.shadowRoot)}_createVNode(){const n=ue(this._def,sn({},this._props));return this._instance||(n.ce=r=>{this._instance=r,r.isCE=!0;const l=(p,f)=>{this.dispatchEvent(new CustomEvent(p,{detail:f}))};r.emit=(p,...f)=>{l(p,f),xo(p)!==p&&l(xo(p),f)};let u=this;for(;u=u&&(u.parentNode||u.host);)if(u instanceof Df){r.parent=u._instance,r.provides=u._instance.provides;break}}),n}_applyStyles(n){n&&n.forEach(r=>{const l=document.createElement("style");l.textContent=r,this.shadowRoot.appendChild(l)})}}function SG(i="$style"){{const n=Pr();if(!n)return jt;const r=n.type.__cssModules;if(!r)return jt;const l=r[i];return l||jt}}const ZI=new WeakMap,JI=new WeakMap,Gp=Symbol("_moveCb"),sT=Symbol("_enterCb"),XI={name:"TransitionGroup",props:sn({},sG,{tag:String,moveClass:String}),setup(i,{slots:n}){const r=Pr(),l=w_();let u,p;return hc(()=>{if(!u.length)return;const f=i.moveClass||`${i.name||"v"}-move`;if(!BG(u[0].el,r.vnode.el,f))return;u.forEach(IG),u.forEach(MG);const b=u.filter(OG);GI(),b.forEach(m=>{const A=m.el,v=A.style;wr(A,f),v.transform=v.webkitTransform=v.transitionDuration="";const x=A[Gp]=C=>{C&&C.target!==A||(!C||/transform$/.test(C.propertyName))&&(A.removeEventListener("transitionend",x),A[Gp]=null,os(A,f))};A.addEventListener("transitionend",x)})}),()=>{const f=yt(i),b=UI(f);let m=f.tag||Pe;if(u=[],p)for(let A=0;A<p.length;A++){const v=p[A];v.el&&v.el instanceof Element&&(u.push(v),gs(v,Kl(v,b,l,r)),ZI.set(v,v.el.getBoundingClientRect()))}p=n.default?yf(n.default()):[];for(let A=0;A<p.length;A++){const v=p[A];v.key!=null&&gs(v,Kl(v,b,l,r))}return ue(m,null,p)}}},TG=i=>delete i.mode;XI.props;const DG=XI;function IG(i){const n=i.el;n[Gp]&&n[Gp](),n[sT]&&n[sT]()}function MG(i){JI.set(i,i.el.getBoundingClientRect())}function OG(i){const n=ZI.get(i),r=JI.get(i),l=n.left-r.left,u=n.top-r.top;if(l||u){const p=i.el.style;return p.transform=p.webkitTransform=`translate(${l}px,${u}px)`,p.transitionDuration="0s",i}}function BG(i,n,r){const l=i.cloneNode(),u=i[Yl];u&&u.forEach(b=>{b.split(/\s+/).forEach(m=>m&&l.classList.remove(m))}),r.split(/\s+/).forEach(b=>b&&l.classList.add(b)),l.style.display="none";const p=n.nodeType===1?n:n.parentNode;p.appendChild(l);const{hasTransform:f}=qI(l);return p.removeChild(l),f}const _s=i=>{const n=i.props["onUpdate:modelValue"]||!1;return $e(n)?r=>Ll(n,r):n};function PG(i){i.target.composing=!0}function aT(i){const n=i.target;n.composing&&(n.composing=!1,n.dispatchEvent(new Event("input")))}const ai=Symbol("_assign"),ut={created(i,{modifiers:{lazy:n,trim:r,number:l}},u){i[ai]=_s(u);const p=l||u.props&&u.props.type==="number";yr(i,n?"change":"input",f=>{if(f.target.composing)return;let b=i.value;r&&(b=b.trim()),p&&(b=Pp(b)),i[ai](b)}),r&&yr(i,"change",()=>{i.value=i.value.trim()}),n||(yr(i,"compositionstart",PG),yr(i,"compositionend",aT),yr(i,"change",aT))},mounted(i,{value:n}){i.value=n??""},beforeUpdate(i,{value:n,oldValue:r,modifiers:{lazy:l,trim:u,number:p}},f){if(i[ai]=_s(f),i.composing)return;const b=(p||i.type==="number")&&!/^0\d/.test(i.value)?Pp(i.value):i.value,m=n??"";b!==m&&(document.activeElement===i&&i.type!=="range"&&(l&&n===r||u&&i.value.trim()===m)||(i.value=m))}},O_={deep:!0,created(i,n,r){i[ai]=_s(r),yr(i,"change",()=>{const l=i._modelValue,u=Ql(i),p=i.checked,f=i[ai];if($e(l)){const b=kf(l,u),m=b!==-1;if(p&&!m)f(l.concat(u));else if(!p&&m){const A=[...l];A.splice(b,1),f(A)}}else if(Na(l)){const b=new Set(l);p?b.add(u):b.delete(u),f(b)}else f(eM(i,p))})},mounted:lT,beforeUpdate(i,n,r){i[ai]=_s(r),lT(i,n,r)}};function lT(i,{value:n,oldValue:r},l){i._modelValue=n,$e(n)?i.checked=kf(n,l.props.value)>-1:Na(n)?i.checked=n.has(l.props.value):n!==r&&(i.checked=fs(n,eM(i,!0)))}const B_={created(i,{value:n},r){i.checked=fs(n,r.props.value),i[ai]=_s(r),yr(i,"change",()=>{i[ai](Ql(i))})},beforeUpdate(i,{value:n,oldValue:r},l){i[ai]=_s(l),n!==r&&(i.checked=fs(n,l.props.value))}},If={deep:!0,created(i,{value:n,modifiers:{number:r}},l){const u=Na(n);yr(i,"change",()=>{const p=Array.prototype.filter.call(i.options,f=>f.selected).map(f=>r?Pp(Ql(f)):Ql(f));i[ai](i.multiple?u?new Set(p):p:p[0]),i._assigning=!0,mu(()=>{i._assigning=!1})}),i[ai]=_s(l)},mounted(i,{value:n,modifiers:{number:r}}){cT(i,n)},beforeUpdate(i,n,r){i[ai]=_s(r)},updated(i,{value:n,modifiers:{number:r}}){i._assigning||cT(i,n)}};function cT(i,n,r){const l=i.multiple,u=$e(n);if(!(l&&!u&&!Na(n))){for(let p=0,f=i.options.length;p<f;p++){const b=i.options[p],m=Ql(b);if(l)if(u){const A=typeof m;A==="string"||A==="number"?b.selected=n.some(v=>String(v)===String(m)):b.selected=kf(n,m)>-1}else b.selected=n.has(m);else if(fs(Ql(b),n)){i.selectedIndex!==p&&(i.selectedIndex=p);return}}!l&&i.selectedIndex!==-1&&(i.selectedIndex=-1)}}function Ql(i){return"_value"in i?i._value:i.value}function eM(i,n){const r=n?"_trueValue":"_falseValue";return r in i?i[r]:n}const tM={created(i,n,r){ep(i,n,r,null,"created")},mounted(i,n,r){ep(i,n,r,null,"mounted")},beforeUpdate(i,n,r,l){ep(i,n,r,l,"beforeUpdate")},updated(i,n,r,l){ep(i,n,r,l,"updated")}};function nM(i,n){switch(i){case"SELECT":return If;case"TEXTAREA":return ut;default:switch(n){case"checkbox":return O_;case"radio":return B_;default:return ut}}}function ep(i,n,r,l,u){const f=nM(i.tagName,r.props&&r.props.type)[u];f&&f(i,n,r,l)}function NG(){ut.getSSRProps=({value:i})=>({value:i}),B_.getSSRProps=({value:i},n)=>{if(n.props&&fs(n.props.value,i))return{checked:!0}},O_.getSSRProps=({value:i},n)=>{if($e(i)){if(n.props&&kf(i,n.props.value)>-1)return{checked:!0}}else if(Na(i)){if(n.props&&i.has(n.props.value))return{checked:!0}}else if(i)return{checked:!0}},tM.getSSRProps=(i,n)=>{if(typeof n.type!="string")return;const r=nM(n.type.toUpperCase(),n.props&&n.props.type);if(r.getSSRProps)return r.getSSRProps(i,n)}}const LG=["ctrl","shift","alt","meta"],RG={stop:i=>i.stopPropagation(),prevent:i=>i.preventDefault(),self:i=>i.target!==i.currentTarget,ctrl:i=>!i.ctrlKey,shift:i=>!i.shiftKey,alt:i=>!i.altKey,meta:i=>!i.metaKey,left:i=>"button"in i&&i.button!==0,middle:i=>"button"in i&&i.button!==1,right:i=>"button"in i&&i.button!==2,exact:(i,n)=>LG.some(r=>i[`${r}Key`]&&!n.includes(r))},uo=(i,n)=>{const r=i._withMods||(i._withMods={}),l=n.join(".");return r[l]||(r[l]=(u,...p)=>{for(let f=0;f<n.length;f++){const b=RG[n[f]];if(b&&b(u,n))return}return i(u,...p)})},FG={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},zG=(i,n)=>{const r=i._withKeys||(i._withKeys={}),l=n.join(".");return r[l]||(r[l]=u=>{if(!("key"in u))return;const p=xo(u.key);if(n.some(f=>f===p||FG[f]===p))return i(u)})},oM=sn({patchProp:CG},rG);let Gd,dT=!1;function iM(){return Gd||(Gd=bI(oM))}function rM(){return Gd=dT?Gd:kI(oM),dT=!0,Gd}const Mk=(...i)=>{iM().render(...i)},sM=(...i)=>{rM().hydrate(...i)},aM=(...i)=>{const n=iM().createApp(...i),{mount:r}=n;return n.mount=l=>{const u=dM(l);if(!u)return;const p=n._component;!nt(p)&&!p.render&&!p.template&&(p.template=u.innerHTML),u.innerHTML="";const f=r(u,!1,cM(u));return u instanceof Element&&(u.removeAttribute("v-cloak"),u.setAttribute("data-v-app","")),f},n},lM=(...i)=>{const n=rM().createApp(...i),{mount:r}=n;return n.mount=l=>{const u=dM(l);if(u)return r(u,!0,cM(u))},n};function cM(i){if(i instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&i instanceof MathMLElement)return"mathml"}function dM(i){return nn(i)?document.querySelector(i):i}let uT=!1;const jG=()=>{uT||(uT=!0,NG(),dG())};/**
* vue v3.4.33
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const $G=()=>{},VG=Object.freeze(Object.defineProperty({__proto__:null,BaseTransition:q5,BaseTransitionPropsValidators:v_,Comment:zn,DeprecationTypes:nG,EffectScope:c_,ErrorCodes:CU,ErrorTypeStrings:Yq,Fragment:Pe,KeepAlive:BU,ReactiveEffect:Wl,Static:Ca,Suspense:Mq,Teleport:bq,Text:ps,TrackOpTypes:wU,Transition:M_,TransitionGroup:DG,TriggerOpTypes:vU,VueElement:Df,assertNumber:AU,callWithAsyncErrorHandling:Ho,callWithErrorHandling:Tr,camelize:Zn,capitalize:pu,cloneVNode:nr,compatUtils:tG,compile:$G,computed:I_,createApp:aM,createBlock:bs,createCommentVNode:Te,createElementBlock:ne,createElementVNode:_,createHydrationRenderer:kI,createPropsRestProxy:JU,createRenderer:bI,createSSRApp:lM,createSlots:FU,createStaticVNode:bn,createTextVNode:ze,createVNode:ue,customRef:L5,defineAsyncComponent:MU,defineComponent:uc,defineCustomElement:QI,defineEmits:VU,defineExpose:HU,defineModel:GU,defineOptions:UU,defineProps:$U,defineSSRCustomElement:xG,defineSlots:qU,devtools:Qq,effect:VH,effectScope:zH,getCurrentInstance:Pr,getCurrentScope:k5,getTransitionRawChildren:yf,guardReactiveProps:PI,h:_n,handleError:La,hasInjectionContext:aq,hydrate:sM,initCustomFormatter:Gq,initDirectivesForSSR:jG,inject:Hd,isMemoSame:$I,isProxy:f_,isReactive:va,isReadonly:ms,isRef:Vn,isRuntimeOnly:Hq,isShallow:Ea,isVNode:ks,markRaw:Rp,mergeDefaults:QU,mergeModels:ZU,mergeProps:NI,nextTick:mu,normalizeClass:Kn,normalizeProps:NH,normalizeStyle:fu,onActivated:W5,onBeforeMount:Q5,onBeforeUnmount:Ra,onBeforeUpdate:A_,onDeactivated:K5,onErrorCaptured:eI,onMounted:Es,onRenderTracked:X5,onRenderTriggered:J5,onScopeDispose:jH,onServerPrefetch:Z5,onUnmounted:Ef,onUpdated:hc,openBlock:ee,popScopeId:H5,provide:Sf,proxyRefs:k_,pushScopeId:V5,queuePostFlushCb:Fp,reactive:on,readonly:p_,ref:vt,registerRuntimeCompiler:Vq,render:Mk,renderList:Zt,renderSlot:Sa,resolveComponent:Ae,resolveDirective:RU,resolveDynamicComponent:LU,resolveFilter:eG,resolveTransitionHooks:Kl,setBlockTracking:Ck,setDevtoolsHook:Zq,setTransitionHooks:gs,shallowReactive:O5,shallowReadonly:cU,shallowRef:P5,ssrContextKey:AI,ssrUtils:Xq,stop:HH,toDisplayString:le,toHandlerKey:$d,toHandlers:zU,toRaw:yt,toRef:_U,toRefs:gU,toValue:pU,transformVNodeArgs:Rq,triggerRef:hU,unref:b_,useAttrs:YU,useCssModule:SG,useCssVars:uG,useModel:yq,useSSRContext:CI,useSlots:KU,useTransitionState:w_,vModelCheckbox:O_,vModelDynamic:tM,vModelRadio:B_,vModelSelect:If,vModelText:ut,vShow:KI,version:VI,warn:Kq,watch:hs,watchEffect:Aq,watchPostEffect:yI,watchSyncEffect:xI,withAsyncContext:XU,withCtx:kt,withDefaults:WU,withDirectives:mt,withKeys:zG,withMemo:Wq,withModifiers:uo,withScopeId:DU},Symbol.toStringTag,{value:"Module"}));var Wp={exports:{}};Wp.exports;(function(i,n){var r=200,l="__lodash_hash_undefined__",u=9007199254740991,p="[object Arguments]",f="[object Array]",b="[object Boolean]",m="[object Date]",A="[object Error]",v="[object Function]",x="[object GeneratorFunction]",C="[object Map]",E="[object Number]",T="[object Object]",I="[object Promise]",F="[object RegExp]",N="[object Set]",L="[object String]",B="[object Symbol]",z="[object WeakMap]",U="[object ArrayBuffer]",W="[object DataView]",P="[object Float32Array]",H="[object Float64Array]",V="[object Int8Array]",q="[object Int16Array]",Y="[object Int32Array]",J="[object Uint8Array]",te="[object Uint8ClampedArray]",re="[object Uint16Array]",ae="[object Uint32Array]",oe=/[\\^$.*+?()[\]{}|]/g,ge=/\w*$/,ie=/^\[object .+?Constructor\]$/,Le=/^(?:0|[1-9]\d*)$/,Se={};Se[p]=Se[f]=Se[U]=Se[W]=Se[b]=Se[m]=Se[P]=Se[H]=Se[V]=Se[q]=Se[Y]=Se[C]=Se[E]=Se[T]=Se[F]=Se[N]=Se[L]=Se[B]=Se[J]=Se[te]=Se[re]=Se[ae]=!0,Se[A]=Se[v]=Se[z]=!1;var Je=typeof wn=="object"&&wn&&wn.Object===Object&&wn,Xe=typeof self=="object"&&self&&self.Object===Object&&self,be=Je||Xe||Function("return this")(),je=n&&!n.nodeType&&n,Fe=je&&!0&&i&&!i.nodeType&&i,Ve=Fe&&Fe.exports===je;function At(O,$){return O.set($[0],$[1]),O}function at(O,$){return O.add($),O}function Ot(O,$){for(var Q=-1,fe=O?O.length:0;++Q<fe&&$(O[Q],Q,O)!==!1;);return O}function ot(O,$){for(var Q=-1,fe=$.length,et=O.length;++Q<fe;)O[et+Q]=$[Q];return O}function xt(O,$,Q,fe){for(var et=-1,Ue=O?O.length:0;++et<Ue;)Q=$(Q,O[et],et,O);return Q}function Wt(O,$){for(var Q=-1,fe=Array(O);++Q<O;)fe[Q]=$(Q);return fe}function K(O,$){return O==null?void 0:O[$]}function X(O){var $=!1;if(O!=null&&typeof O.toString!="function")try{$=!!(O+"")}catch{}return $}function de(O){var $=-1,Q=Array(O.size);return O.forEach(function(fe,et){Q[++$]=[et,fe]}),Q}function _e(O,$){return function(Q){return O($(Q))}}function ke(O){var $=-1,Q=Array(O.size);return O.forEach(function(fe){Q[++$]=fe}),Q}var ye=Array.prototype,Me=Function.prototype,xe=Object.prototype,ve=be["__core-js_shared__"],he=function(){var O=/[^.]+$/.exec(ve&&ve.keys&&ve.keys.IE_PROTO||"");return O?"Symbol(src)_1."+O:""}(),De=Me.toString,Re=xe.hasOwnProperty,Ne=xe.toString,He=RegExp("^"+De.call(Re).replace(oe,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),Ye=Ve?be.Buffer:void 0,ht=be.Symbol,ct=be.Uint8Array,pt=_e(Object.getPrototypeOf,Object),Tn=Object.create,Mo=xe.propertyIsEnumerable,Lr=ye.splice,po=Object.getOwnPropertySymbols,Dn=Ye?Ye.isBuffer:void 0,It=_e(Object.keys,Object),Bt=Bo(be,"DataView"),Oo=Bo(be,"Map"),Xt=Bo(be,"Promise"),ir=Bo(be,"Set"),rr=Bo(be,"WeakMap"),sr=Bo(Object,"create"),Ms=In(Bt),Bi=In(Oo),Os=In(Xt),Bs=In(ir),vn=In(rr),Pi=ht?ht.prototype:void 0,Ni=Pi?Pi.valueOf:void 0;function fo(O){var $=-1,Q=O?O.length:0;for(this.clear();++$<Q;){var fe=O[$];this.set(fe[0],fe[1])}}function bc(){this.__data__=sr?sr(null):{}}function kc(O){return this.has(O)&&delete this.__data__[O]}function _c(O){var $=this.__data__;if(sr){var Q=$[O];return Q===l?void 0:Q}return Re.call($,O)?$[O]:void 0}function $a(O){var $=this.__data__;return sr?$[O]!==void 0:Re.call($,O)}function Ps(O,$){var Q=this.__data__;return Q[O]=sr&&$===void 0?l:$,this}fo.prototype.clear=bc,fo.prototype.delete=kc,fo.prototype.get=_c,fo.prototype.has=$a,fo.prototype.set=Ps;function en(O){var $=-1,Q=O?O.length:0;for(this.clear();++$<Q;){var fe=O[$];this.set(fe[0],fe[1])}}function Rr(){this.__data__=[]}function wc(O){var $=this.__data__,Q=mo($,O);if(Q<0)return!1;var fe=$.length-1;return Q==fe?$.pop():Lr.call($,Q,1),!0}function vc(O){var $=this.__data__,Q=mo($,O);return Q<0?void 0:$[Q][1]}function Ac(O){return mo(this.__data__,O)>-1}function Cc(O,$){var Q=this.__data__,fe=mo(Q,O);return fe<0?Q.push([O,$]):Q[fe][1]=$,this}en.prototype.clear=Rr,en.prototype.delete=wc,en.prototype.get=vc,en.prototype.has=Ac,en.prototype.set=Cc;function tn(O){var $=-1,Q=O?O.length:0;for(this.clear();++$<Q;){var fe=O[$];this.set(fe[0],fe[1])}}function Ns(){this.__data__={hash:new fo,map:new(Oo||en),string:new fo}}function Va(O){return Ko(this,O).delete(O)}function yc(O){return Ko(this,O).get(O)}function xc(O){return Ko(this,O).has(O)}function fi(O,$){return Ko(this,O).set(O,$),this}tn.prototype.clear=Ns,tn.prototype.delete=Va,tn.prototype.get=yc,tn.prototype.has=xc,tn.prototype.set=fi;function Hn(O){this.__data__=new en(O)}function Ec(){this.__data__=new en}function Sc(O){return this.__data__.delete(O)}function Tc(O){return this.__data__.get(O)}function Dc(O){return this.__data__.has(O)}function Ic(O,$){var Q=this.__data__;if(Q instanceof en){var fe=Q.__data__;if(!Oo||fe.length<r-1)return fe.push([O,$]),this;Q=this.__data__=new tn(fe)}return Q.set(O,$),this}Hn.prototype.clear=Ec,Hn.prototype.delete=Sc,Hn.prototype.get=Tc,Hn.prototype.has=Dc,Hn.prototype.set=Ic;function Fr(O,$){var Q=Fi(O)||Vr(O)?Wt(O.length,String):[],fe=Q.length,et=!!fe;for(var Ue in O)Re.call(O,Ue)&&!(et&&(Ue=="length"||$c(Ue,fe)))&&Q.push(Ue);return Q}function Ha(O,$,Q){var fe=O[$];(!(Re.call(O,$)&&Ga(fe,Q))||Q===void 0&&!($ in O))&&(O[$]=Q)}function mo(O,$){for(var Q=O.length;Q--;)if(Ga(O[Q][0],$))return Q;return-1}function Un(O,$){return O&&Fs($,lr($),O)}function mi(O,$,Q,fe,et,Ue,gt){var _t;if(fe&&(_t=Ue?fe(O,et,Ue,gt):fe(O)),_t!==void 0)return _t;if(!Yo(O))return O;var rn=Fi(O);if(rn){if(_t=jc(O),!$)return Fc(O,_t)}else{var Mt=Gn(O),kn=Mt==v||Mt==x;if($s(O))return zr(O,$);if(Mt==T||Mt==p||kn&&!Ue){if(X(O))return Ue?O:{};if(_t=oo(kn?{}:O),!$)return zc(O,Un(_t,O))}else{if(!Se[Mt])return Ue?O:{};_t=$r(O,Mt,mi,$)}}gt||(gt=new Hn);var Wn=gt.get(O);if(Wn)return Wn;if(gt.set(O,_t),!rn)var un=Q?Li(O):lr(O);return Ot(un||O,function(Mn,an){un&&(an=Mn,Mn=O[an]),Ha(_t,an,mi(Mn,$,Q,fe,an,O,gt))}),_t}function Mc(O){return Yo(O)?Tn(O):{}}function Oc(O,$,Q){var fe=$(O);return Fi(O)?fe:ot(fe,Q(O))}function Bc(O){return Ne.call(O)}function Pc(O){if(!Yo(O)||Ri(O))return!1;var $=Ur(O)||X(O)?He:ie;return $.test(In(O))}function Nc(O){if(!qa(O))return It(O);var $=[];for(var Q in Object(O))Re.call(O,Q)&&Q!="constructor"&&$.push(Q);return $}function zr(O,$){if($)return O.slice();var Q=new O.constructor(O.length);return O.copy(Q),Q}function Ls(O){var $=new O.constructor(O.byteLength);return new ct($).set(new ct(O)),$}function go(O,$){var Q=$?Ls(O.buffer):O.buffer;return new O.constructor(Q,O.byteOffset,O.byteLength)}function Rs(O,$,Q){var fe=$?Q(de(O),!0):de(O);return xt(fe,At,new O.constructor)}function Ua(O){var $=new O.constructor(O.source,ge.exec(O));return $.lastIndex=O.lastIndex,$}function Lc(O,$,Q){var fe=$?Q(ke(O),!0):ke(O);return xt(fe,at,new O.constructor)}function jr(O){return Ni?Object(Ni.call(O)):{}}function Rc(O,$){var Q=$?Ls(O.buffer):O.buffer;return new O.constructor(Q,O.byteOffset,O.length)}function Fc(O,$){var Q=-1,fe=O.length;for($||($=Array(fe));++Q<fe;)$[Q]=O[Q];return $}function Fs(O,$,Q,fe){Q||(Q={});for(var et=-1,Ue=$.length;++et<Ue;){var gt=$[et],_t=void 0;Ha(Q,gt,_t===void 0?O[gt]:_t)}return Q}function zc(O,$){return Fs(O,qn(O),$)}function Li(O){return Oc(O,lr,qn)}function Ko(O,$){var Q=O.__data__;return zs($)?Q[typeof $=="string"?"string":"hash"]:Q.map}function Bo(O,$){var Q=K(O,$);return Pc(Q)?Q:void 0}var qn=po?_e(po,Object):Nt,Gn=Bc;(Bt&&Gn(new Bt(new ArrayBuffer(1)))!=W||Oo&&Gn(new Oo)!=C||Xt&&Gn(Xt.resolve())!=I||ir&&Gn(new ir)!=N||rr&&Gn(new rr)!=z)&&(Gn=function(O){var $=Ne.call(O),Q=$==T?O.constructor:void 0,fe=Q?In(Q):void 0;if(fe)switch(fe){case Ms:return W;case Bi:return C;case Os:return I;case Bs:return N;case vn:return z}return $});function jc(O){var $=O.length,Q=O.constructor($);return $&&typeof O[0]=="string"&&Re.call(O,"index")&&(Q.index=O.index,Q.input=O.input),Q}function oo(O){return typeof O.constructor=="function"&&!qa(O)?Mc(pt(O)):{}}function $r(O,$,Q,fe){var et=O.constructor;switch($){case U:return Ls(O);case b:case m:return new et(+O);case W:return go(O,fe);case P:case H:case V:case q:case Y:case J:case te:case re:case ae:return Rc(O,fe);case C:return Rs(O,fe,Q);case E:case L:return new et(O);case F:return Ua(O);case N:return Lc(O,fe,Q);case B:return jr(O)}}function $c(O,$){return $=$??u,!!$&&(typeof O=="number"||Le.test(O))&&O>-1&&O%1==0&&O<$}function zs(O){var $=typeof O;return $=="string"||$=="number"||$=="symbol"||$=="boolean"?O!=="__proto__":O===null}function Ri(O){return!!he&&he in O}function qa(O){var $=O&&O.constructor,Q=typeof $=="function"&&$.prototype||xe;return O===Q}function In(O){if(O!=null){try{return De.call(O)}catch{}try{return O+""}catch{}}return""}function js(O){return mi(O,!0,!0)}function Ga(O,$){return O===$||O!==O&&$!==$}function Vr(O){return Wa(O)&&Re.call(O,"callee")&&(!Mo.call(O,"callee")||Ne.call(O)==p)}var Fi=Array.isArray;function Hr(O){return O!=null&&zi(O.length)&&!Ur(O)}function Wa(O){return ar(O)&&Hr(O)}var $s=Dn||Vc;function Ur(O){var $=Yo(O)?Ne.call(O):"";return $==v||$==x}function zi(O){return typeof O=="number"&&O>-1&&O%1==0&&O<=u}function Yo(O){var $=typeof O;return!!O&&($=="object"||$=="function")}function ar(O){return!!O&&typeof O=="object"}function lr(O){return Hr(O)?Fr(O):Nc(O)}function Nt(){return[]}function Vc(){return!1}i.exports=js})(Wp,Wp.exports);var HG=Wp.exports;const Wi=Pa(HG);var Kp={exports:{}};Kp.exports;(function(i,n){var r=200,l="__lodash_hash_undefined__",u=1,p=2,f=9007199254740991,b="[object Arguments]",m="[object Array]",A="[object AsyncFunction]",v="[object Boolean]",x="[object Date]",C="[object Error]",E="[object Function]",T="[object GeneratorFunction]",I="[object Map]",F="[object Number]",N="[object Null]",L="[object Object]",B="[object Promise]",z="[object Proxy]",U="[object RegExp]",W="[object Set]",P="[object String]",H="[object Symbol]",V="[object Undefined]",q="[object WeakMap]",Y="[object ArrayBuffer]",J="[object DataView]",te="[object Float32Array]",re="[object Float64Array]",ae="[object Int8Array]",oe="[object Int16Array]",ge="[object Int32Array]",ie="[object Uint8Array]",Le="[object Uint8ClampedArray]",Se="[object Uint16Array]",Je="[object Uint32Array]",Xe=/[\\^$.*+?()[\]{}|]/g,be=/^\[object .+?Constructor\]$/,je=/^(?:0|[1-9]\d*)$/,Fe={};Fe[te]=Fe[re]=Fe[ae]=Fe[oe]=Fe[ge]=Fe[ie]=Fe[Le]=Fe[Se]=Fe[Je]=!0,Fe[b]=Fe[m]=Fe[Y]=Fe[v]=Fe[J]=Fe[x]=Fe[C]=Fe[E]=Fe[I]=Fe[F]=Fe[L]=Fe[U]=Fe[W]=Fe[P]=Fe[q]=!1;var Ve=typeof wn=="object"&&wn&&wn.Object===Object&&wn,At=typeof self=="object"&&self&&self.Object===Object&&self,at=Ve||At||Function("return this")(),Ot=n&&!n.nodeType&&n,ot=Ot&&!0&&i&&!i.nodeType&&i,xt=ot&&ot.exports===Ot,Wt=xt&&Ve.process,K=function(){try{return Wt&&Wt.binding&&Wt.binding("util")}catch{}}(),X=K&&K.isTypedArray;function de(O,$){for(var Q=-1,fe=O==null?0:O.length,et=0,Ue=[];++Q<fe;){var gt=O[Q];$(gt,Q,O)&&(Ue[et++]=gt)}return Ue}function _e(O,$){for(var Q=-1,fe=$.length,et=O.length;++Q<fe;)O[et+Q]=$[Q];return O}function ke(O,$){for(var Q=-1,fe=O==null?0:O.length;++Q<fe;)if($(O[Q],Q,O))return!0;return!1}function ye(O,$){for(var Q=-1,fe=Array(O);++Q<O;)fe[Q]=$(Q);return fe}function Me(O){return function($){return O($)}}function xe(O,$){return O.has($)}function ve(O,$){return O==null?void 0:O[$]}function he(O){var $=-1,Q=Array(O.size);return O.forEach(function(fe,et){Q[++$]=[et,fe]}),Q}function De(O,$){return function(Q){return O($(Q))}}function Re(O){var $=-1,Q=Array(O.size);return O.forEach(function(fe){Q[++$]=fe}),Q}var Ne=Array.prototype,He=Function.prototype,Ye=Object.prototype,ht=at["__core-js_shared__"],ct=He.toString,pt=Ye.hasOwnProperty,Tn=function(){var O=/[^.]+$/.exec(ht&&ht.keys&&ht.keys.IE_PROTO||"");return O?"Symbol(src)_1."+O:""}(),Mo=Ye.toString,Lr=RegExp("^"+ct.call(pt).replace(Xe,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),po=xt?at.Buffer:void 0,Dn=at.Symbol,It=at.Uint8Array,Bt=Ye.propertyIsEnumerable,Oo=Ne.splice,Xt=Dn?Dn.toStringTag:void 0,ir=Object.getOwnPropertySymbols,rr=po?po.isBuffer:void 0,sr=De(Object.keys,Object),Ms=qn(at,"DataView"),Bi=qn(at,"Map"),Os=qn(at,"Promise"),Bs=qn(at,"Set"),vn=qn(at,"WeakMap"),Pi=qn(Object,"create"),Ni=In(Ms),fo=In(Bi),bc=In(Os),kc=In(Bs),_c=In(vn),$a=Dn?Dn.prototype:void 0,Ps=$a?$a.valueOf:void 0;function en(O){var $=-1,Q=O==null?0:O.length;for(this.clear();++$<Q;){var fe=O[$];this.set(fe[0],fe[1])}}function Rr(){this.__data__=Pi?Pi(null):{},this.size=0}function wc(O){var $=this.has(O)&&delete this.__data__[O];return this.size-=$?1:0,$}function vc(O){var $=this.__data__;if(Pi){var Q=$[O];return Q===l?void 0:Q}return pt.call($,O)?$[O]:void 0}function Ac(O){var $=this.__data__;return Pi?$[O]!==void 0:pt.call($,O)}function Cc(O,$){var Q=this.__data__;return this.size+=this.has(O)?0:1,Q[O]=Pi&&$===void 0?l:$,this}en.prototype.clear=Rr,en.prototype.delete=wc,en.prototype.get=vc,en.prototype.has=Ac,en.prototype.set=Cc;function tn(O){var $=-1,Q=O==null?0:O.length;for(this.clear();++$<Q;){var fe=O[$];this.set(fe[0],fe[1])}}function Ns(){this.__data__=[],this.size=0}function Va(O){var $=this.__data__,Q=zr($,O);if(Q<0)return!1;var fe=$.length-1;return Q==fe?$.pop():Oo.call($,Q,1),--this.size,!0}function yc(O){var $=this.__data__,Q=zr($,O);return Q<0?void 0:$[Q][1]}function xc(O){return zr(this.__data__,O)>-1}function fi(O,$){var Q=this.__data__,fe=zr(Q,O);return fe<0?(++this.size,Q.push([O,$])):Q[fe][1]=$,this}tn.prototype.clear=Ns,tn.prototype.delete=Va,tn.prototype.get=yc,tn.prototype.has=xc,tn.prototype.set=fi;function Hn(O){var $=-1,Q=O==null?0:O.length;for(this.clear();++$<Q;){var fe=O[$];this.set(fe[0],fe[1])}}function Ec(){this.size=0,this.__data__={hash:new en,map:new(Bi||tn),string:new en}}function Sc(O){var $=Bo(this,O).delete(O);return this.size-=$?1:0,$}function Tc(O){return Bo(this,O).get(O)}function Dc(O){return Bo(this,O).has(O)}function Ic(O,$){var Q=Bo(this,O),fe=Q.size;return Q.set(O,$),this.size+=Q.size==fe?0:1,this}Hn.prototype.clear=Ec,Hn.prototype.delete=Sc,Hn.prototype.get=Tc,Hn.prototype.has=Dc,Hn.prototype.set=Ic;function Fr(O){var $=-1,Q=O==null?0:O.length;for(this.__data__=new Hn;++$<Q;)this.add(O[$])}function Ha(O){return this.__data__.set(O,l),this}function mo(O){return this.__data__.has(O)}Fr.prototype.add=Fr.prototype.push=Ha,Fr.prototype.has=mo;function Un(O){var $=this.__data__=new tn(O);this.size=$.size}function mi(){this.__data__=new tn,this.size=0}function Mc(O){var $=this.__data__,Q=$.delete(O);return this.size=$.size,Q}function Oc(O){return this.__data__.get(O)}function Bc(O){return this.__data__.has(O)}function Pc(O,$){var Q=this.__data__;if(Q instanceof tn){var fe=Q.__data__;if(!Bi||fe.length<r-1)return fe.push([O,$]),this.size=++Q.size,this;Q=this.__data__=new Hn(fe)}return Q.set(O,$),this.size=Q.size,this}Un.prototype.clear=mi,Un.prototype.delete=Mc,Un.prototype.get=Oc,Un.prototype.has=Bc,Un.prototype.set=Pc;function Nc(O,$){var Q=Vr(O),fe=!Q&&Ga(O),et=!Q&&!fe&&Hr(O),Ue=!Q&&!fe&&!et&&ar(O),gt=Q||fe||et||Ue,_t=gt?ye(O.length,String):[],rn=_t.length;for(var Mt in O)pt.call(O,Mt)&&!(gt&&(Mt=="length"||et&&(Mt=="offset"||Mt=="parent")||Ue&&(Mt=="buffer"||Mt=="byteLength"||Mt=="byteOffset")||$r(Mt,rn)))&&_t.push(Mt);return _t}function zr(O,$){for(var Q=O.length;Q--;)if(js(O[Q][0],$))return Q;return-1}function Ls(O,$,Q){var fe=$(O);return Vr(O)?fe:_e(fe,Q(O))}function go(O){return O==null?O===void 0?V:N:Xt&&Xt in Object(O)?Gn(O):qa(O)}function Rs(O){return Yo(O)&&go(O)==b}function Ua(O,$,Q,fe,et){return O===$?!0:O==null||$==null||!Yo(O)&&!Yo($)?O!==O&&$!==$:Lc(O,$,Q,fe,Ua,et)}function Lc(O,$,Q,fe,et,Ue){var gt=Vr(O),_t=Vr($),rn=gt?m:oo(O),Mt=_t?m:oo($);rn=rn==b?L:rn,Mt=Mt==b?L:Mt;var kn=rn==L,Wn=Mt==L,un=rn==Mt;if(un&&Hr(O)){if(!Hr($))return!1;gt=!0,kn=!1}if(un&&!kn)return Ue||(Ue=new Un),gt||ar(O)?Fs(O,$,Q,fe,et,Ue):zc(O,$,rn,Q,fe,et,Ue);if(!(Q&u)){var Mn=kn&&pt.call(O,"__wrapped__"),an=Wn&&pt.call($,"__wrapped__");if(Mn||an){var bo=Mn?O.value():O,gi=an?$.value():$;return Ue||(Ue=new Un),et(bo,gi,Q,fe,Ue)}}return un?(Ue||(Ue=new Un),Li(O,$,Q,fe,et,Ue)):!1}function jr(O){if(!zi(O)||zs(O))return!1;var $=$s(O)?Lr:be;return $.test(In(O))}function Rc(O){return Yo(O)&&Ur(O.length)&&!!Fe[go(O)]}function Fc(O){if(!Ri(O))return sr(O);var $=[];for(var Q in Object(O))pt.call(O,Q)&&Q!="constructor"&&$.push(Q);return $}function Fs(O,$,Q,fe,et,Ue){var gt=Q&u,_t=O.length,rn=$.length;if(_t!=rn&&!(gt&&rn>_t))return!1;var Mt=Ue.get(O);if(Mt&&Ue.get($))return Mt==$;var kn=-1,Wn=!0,un=Q&p?new Fr:void 0;for(Ue.set(O,$),Ue.set($,O);++kn<_t;){var Mn=O[kn],an=$[kn];if(fe)var bo=gt?fe(an,Mn,kn,$,O,Ue):fe(Mn,an,kn,O,$,Ue);if(bo!==void 0){if(bo)continue;Wn=!1;break}if(un){if(!ke($,function(gi,cr){if(!xe(un,cr)&&(Mn===gi||et(Mn,gi,Q,fe,Ue)))return un.push(cr)})){Wn=!1;break}}else if(!(Mn===an||et(Mn,an,Q,fe,Ue))){Wn=!1;break}}return Ue.delete(O),Ue.delete($),Wn}function zc(O,$,Q,fe,et,Ue,gt){switch(Q){case J:if(O.byteLength!=$.byteLength||O.byteOffset!=$.byteOffset)return!1;O=O.buffer,$=$.buffer;case Y:return!(O.byteLength!=$.byteLength||!Ue(new It(O),new It($)));case v:case x:case F:return js(+O,+$);case C:return O.name==$.name&&O.message==$.message;case U:case P:return O==$+"";case I:var _t=he;case W:var rn=fe&u;if(_t||(_t=Re),O.size!=$.size&&!rn)return!1;var Mt=gt.get(O);if(Mt)return Mt==$;fe|=p,gt.set(O,$);var kn=Fs(_t(O),_t($),fe,et,Ue,gt);return gt.delete(O),kn;case H:if(Ps)return Ps.call(O)==Ps.call($)}return!1}function Li(O,$,Q,fe,et,Ue){var gt=Q&u,_t=Ko(O),rn=_t.length,Mt=Ko($),kn=Mt.length;if(rn!=kn&&!gt)return!1;for(var Wn=rn;Wn--;){var un=_t[Wn];if(!(gt?un in $:pt.call($,un)))return!1}var Mn=Ue.get(O);if(Mn&&Ue.get($))return Mn==$;var an=!0;Ue.set(O,$),Ue.set($,O);for(var bo=gt;++Wn<rn;){un=_t[Wn];var gi=O[un],cr=$[un];if(fe)var Eu=gt?fe(cr,gi,un,$,O,Ue):fe(gi,cr,un,O,$,Ue);if(!(Eu===void 0?gi===cr||et(gi,cr,Q,fe,Ue):Eu)){an=!1;break}bo||(bo=un=="constructor")}if(an&&!bo){var Ka=O.constructor,bi=$.constructor;Ka!=bi&&"constructor"in O&&"constructor"in $&&!(typeof Ka=="function"&&Ka instanceof Ka&&typeof bi=="function"&&bi instanceof bi)&&(an=!1)}return Ue.delete(O),Ue.delete($),an}function Ko(O){return Ls(O,lr,jc)}function Bo(O,$){var Q=O.__data__;return $c($)?Q[typeof $=="string"?"string":"hash"]:Q.map}function qn(O,$){var Q=ve(O,$);return jr(Q)?Q:void 0}function Gn(O){var $=pt.call(O,Xt),Q=O[Xt];try{O[Xt]=void 0;var fe=!0}catch{}var et=Mo.call(O);return fe&&($?O[Xt]=Q:delete O[Xt]),et}var jc=ir?function(O){return O==null?[]:(O=Object(O),de(ir(O),function($){return Bt.call(O,$)}))}:Nt,oo=go;(Ms&&oo(new Ms(new ArrayBuffer(1)))!=J||Bi&&oo(new Bi)!=I||Os&&oo(Os.resolve())!=B||Bs&&oo(new Bs)!=W||vn&&oo(new vn)!=q)&&(oo=function(O){var $=go(O),Q=$==L?O.constructor:void 0,fe=Q?In(Q):"";if(fe)switch(fe){case Ni:return J;case fo:return I;case bc:return B;case kc:return W;case _c:return q}return $});function $r(O,$){return $=$??f,!!$&&(typeof O=="number"||je.test(O))&&O>-1&&O%1==0&&O<$}function $c(O){var $=typeof O;return $=="string"||$=="number"||$=="symbol"||$=="boolean"?O!=="__proto__":O===null}function zs(O){return!!Tn&&Tn in O}function Ri(O){var $=O&&O.constructor,Q=typeof $=="function"&&$.prototype||Ye;return O===Q}function qa(O){return Mo.call(O)}function In(O){if(O!=null){try{return ct.call(O)}catch{}try{return O+""}catch{}}return""}function js(O,$){return O===$||O!==O&&$!==$}var Ga=Rs(function(){return arguments}())?Rs:function(O){return Yo(O)&&pt.call(O,"callee")&&!Bt.call(O,"callee")},Vr=Array.isArray;function Fi(O){return O!=null&&Ur(O.length)&&!$s(O)}var Hr=rr||Vc;function Wa(O,$){return Ua(O,$)}function $s(O){if(!zi(O))return!1;var $=go(O);return $==E||$==T||$==A||$==z}function Ur(O){return typeof O=="number"&&O>-1&&O%1==0&&O<=f}function zi(O){var $=typeof O;return O!=null&&($=="object"||$=="function")}function Yo(O){return O!=null&&typeof O=="object"}var ar=X?Me(X):Rc;function lr(O){return Fi(O)?Nc(O):Fc(O)}function Nt(){return[]}function Vc(){return!1}i.exports=Wa})(Kp,Kp.exports);var UG=Kp.exports;const qG=Pa(UG);var GG={created(){if(!this.$options.remember)return;Array.isArray(this.$options.remember)&&(this.$options.remember={data:this.$options.remember}),typeof this.$options.remember=="string"&&(this.$options.remember={data:[this.$options.remember]}),typeof this.$options.remember.data=="string"&&(this.$options.remember={data:[this.$options.remember.data]});let i=this.$options.remember.key instanceof Function?this.$options.remember.key.call(this):this.$options.remember.key,n=Ze.restore(i),r=this.$options.remember.data.filter(u=>!(this[u]!==null&&typeof this[u]=="object"&&this[u].__rememberable===!1)),l=u=>this[u]!==null&&typeof this[u]=="object"&&typeof this[u].__remember=="function"&&typeof this[u].__restore=="function";r.forEach(u=>{this[u]!==void 0&&n!==void 0&&n[u]!==void 0&&(l(u)?this[u].__restore(n[u]):this[u]=n[u]),this.$watch(u,()=>{Ze.remember(r.reduce((p,f)=>({...p,[f]:Wi(l(f)?this[f].__remember():this[f])}),{}),i)},{immediate:!0,deep:!0})})}},WG=GG;function KG(i,n){let r=typeof i=="string"?i:null,l=typeof i=="string"?n:i,u=r?Ze.restore(r):null,p=Wi(typeof l=="object"?l:l()),f=null,b=null,m=v=>v,A=on({...u?u.data:Wi(p),isDirty:!1,errors:u?u.errors:{},hasErrors:!1,processing:!1,progress:null,wasSuccessful:!1,recentlySuccessful:!1,data(){return Object.keys(p).reduce((v,x)=>(v[x]=this[x],v),{})},transform(v){return m=v,this},defaults(v,x){if(typeof l=="function")throw new Error("You cannot call `defaults()` when using a function to define your form data.");return typeof v>"u"?p=this.data():p=Object.assign({},Wi(p),typeof v=="string"?{[v]:x}:v),this},reset(...v){let x=Wi(typeof l=="object"?p:l()),C=Wi(x);return v.length===0?(p=C,Object.assign(this,x)):Object.keys(x).filter(E=>v.includes(E)).forEach(E=>{p[E]=C[E],this[E]=x[E]}),this},setError(v,x){return Object.assign(this.errors,typeof v=="string"?{[v]:x}:v),this.hasErrors=Object.keys(this.errors).length>0,this},clearErrors(...v){return this.errors=Object.keys(this.errors).reduce((x,C)=>({...x,...v.length>0&&!v.includes(C)?{[C]:this.errors[C]}:{}}),{}),this.hasErrors=Object.keys(this.errors).length>0,this},submit(v,x,C={}){let E=m(this.data()),T={...C,onCancelToken:I=>{if(f=I,C.onCancelToken)return C.onCancelToken(I)},onBefore:I=>{if(this.wasSuccessful=!1,this.recentlySuccessful=!1,clearTimeout(b),C.onBefore)return C.onBefore(I)},onStart:I=>{if(this.processing=!0,C.onStart)return C.onStart(I)},onProgress:I=>{if(this.progress=I,C.onProgress)return C.onProgress(I)},onSuccess:async I=>{this.processing=!1,this.progress=null,this.clearErrors(),this.wasSuccessful=!0,this.recentlySuccessful=!0,b=setTimeout(()=>this.recentlySuccessful=!1,2e3);let F=C.onSuccess?await C.onSuccess(I):null;return p=Wi(this.data()),this.isDirty=!1,F},onError:I=>{if(this.processing=!1,this.progress=null,this.clearErrors().setError(I),C.onError)return C.onError(I)},onCancel:()=>{if(this.processing=!1,this.progress=null,C.onCancel)return C.onCancel()},onFinish:I=>{if(this.processing=!1,this.progress=null,f=null,C.onFinish)return C.onFinish(I)}};v==="delete"?Ze.delete(x,{...T,data:E}):Ze[v](x,E,T)},get(v,x){this.submit("get",v,x)},post(v,x){this.submit("post",v,x)},put(v,x){this.submit("put",v,x)},patch(v,x){this.submit("patch",v,x)},delete(v,x){this.submit("delete",v,x)},cancel(){f&&f.cancel()},__rememberable:r===null,__remember(){return{data:this.data(),errors:this.errors}},__restore(v){Object.assign(this,v.data),this.setError(v.errors)}});return hs(A,v=>{A.isDirty=!qG(A.data(),p),r&&Ze.remember(Wi(v.__remember()),r)},{immediate:!0,deep:!0}),A}var jo=vt(null),Ld=vt(null),_b=P5(null),tp=vt(null),Ok=null,YG=uc({name:"Inertia",props:{initialPage:{type:Object,required:!0},initialComponent:{type:Object,required:!1},resolveComponent:{type:Function,required:!1},titleCallback:{type:Function,required:!1,default:i=>i},onHeadUpdate:{type:Function,required:!1,default:()=>()=>{}}},setup({initialPage:i,initialComponent:n,resolveComponent:r,titleCallback:l,onHeadUpdate:u}){jo.value=n?Rp(n):null,Ld.value=i,tp.value=null;let p=typeof window>"u";return Ok=mH(p,l,u),p||(Ze.init({initialPage:i,resolveComponent:r,swapComponent:async f=>{jo.value=Rp(f.component),Ld.value=f.page,tp.value=f.preserveState?tp.value:Date.now()}}),Ze.on("navigate",()=>Ok.forceUpdate())),()=>{if(jo.value){jo.value.inheritAttrs=!!jo.value.inheritAttrs;let f=_n(jo.value,{...Ld.value.props,key:tp.value});return _b.value&&(jo.value.layout=_b.value,_b.value=null),jo.value.layout?typeof jo.value.layout=="function"?jo.value.layout(_n,f):(Array.isArray(jo.value.layout)?jo.value.layout:[jo.value.layout]).concat(f).reverse().reduce((b,m)=>(m.inheritAttrs=!!m.inheritAttrs,_n(m,{...Ld.value.props},()=>b))):f}}}}),QG=YG,ZG={install(i){Ze.form=KG,Object.defineProperty(i.config.globalProperties,"$inertia",{get:()=>Ze}),Object.defineProperty(i.config.globalProperties,"$page",{get:()=>Ld.value}),Object.defineProperty(i.config.globalProperties,"$headManager",{get:()=>Ok}),i.mixin(WG)}};async function JG({id:i="app",resolve:n,setup:r,title:l,progress:u={},page:p,render:f}){let b=typeof window>"u",m=b?null:document.getElementById(i),A=p||JSON.parse(m.dataset.page),v=E=>Promise.resolve(n(E)).then(T=>T.default||T),x=[],C=await v(A.component).then(E=>r({el:m,App:QG,props:{initialPage:A,initialComponent:E,resolveComponent:v,titleCallback:l,onHeadUpdate:b?T=>x=T:null},plugin:ZG}));if(!b&&u&&vH(u),b){let E=await f(lM({render:()=>_n("div",{id:i,"data-page":JSON.stringify(A),innerHTML:C?f(C):""})}));return{head:x,body:E}}}var XG=uc({props:{title:{type:String,required:!1}},data(){return{provider:this.$headManager.createProvider()}},beforeUnmount(){this.provider.disconnect()},methods:{isUnaryTag(i){return["area","base","br","col","embed","hr","img","input","keygen","link","meta","param","source","track","wbr"].indexOf(i.type)>-1},renderTagStart(i){i.props=i.props||{},i.props.inertia=i.props["head-key"]!==void 0?i.props["head-key"]:"";let n=Object.keys(i.props).reduce((r,l)=>{let u=i.props[l];return["key","head-key"].includes(l)?r:u===""?r+` ${l}`:r+` ${l}="${u}"`},"");return`<${i.type}${n}>`},renderTagChildren(i){return typeof i.children=="string"?i.children:i.children.reduce((n,r)=>n+this.renderTag(r),"")},isFunctionNode(i){return typeof i.type=="function"},isComponentNode(i){return typeof i.type=="object"},isCommentNode(i){return/(comment|cmt)/i.test(i.type.toString())},isFragmentNode(i){return/(fragment|fgt|symbol\(\))/i.test(i.type.toString())},isTextNode(i){return/(text|txt)/i.test(i.type.toString())},renderTag(i){if(this.isTextNode(i))return i.children;if(this.isFragmentNode(i)||this.isCommentNode(i))return"";let n=this.renderTagStart(i);return i.children&&(n+=this.renderTagChildren(i)),this.isUnaryTag(i)||(n+=`</${i.type}>`),n},addTitleElement(i){return this.title&&!i.find(n=>n.startsWith("<title"))&&i.push(`<title inertia>${this.title}</title>`),i},renderNodes(i){return this.addTitleElement(i.flatMap(n=>this.resolveNode(n)).map(n=>this.renderTag(n)).filter(n=>n))},resolveNode(i){return this.isFunctionNode(i)?this.resolveNode(i.type()):this.isComponentNode(i)?(console.warn("Using components in the <Head> component is not supported."),[]):this.isTextNode(i)&&i.children?i:this.isFragmentNode(i)&&i.children?i.children.flatMap(n=>this.resolveNode(n)):this.isCommentNode(i)?[]:i}},render(){this.provider.update(this.renderNodes(this.$slots.default?this.$slots.default():[]))}}),Jt=XG,eW=uc({name:"Link",props:{as:{type:String,default:"a"},data:{type:Object,default:()=>({})},href:{type:String,required:!0},method:{type:String,default:"get"},replace:{type:Boolean,default:!1},preserveScroll:{type:Boolean,default:!1},preserveState:{type:Boolean,default:null},only:{type:Array,default:()=>[]},except:{type:Array,default:()=>[]},headers:{type:Object,default:()=>({})},queryStringArrayFormat:{type:String,default:"brackets"}},setup(i,{slots:n,attrs:r}){return()=>{let l=i.as.toLowerCase(),u=i.method.toLowerCase(),[p,f]=l5(u,i.href||"",i.data,i.queryStringArrayFormat);return l==="a"&&u!=="get"&&console.warn(`Creating POST/PUT/PATCH/DELETE <a> links is discouraged as it causes "Open Link in New Tab/Window" accessibility issues.

Please specify a more appropriate element using the "as" attribute. For example:

<Link href="${p}" method="${u}" as="button">...</Link>`),_n(i.as,{...r,...l==="a"?{href:p}:{},onClick:b=>{AH(b)&&(b.preventDefault(),Ze.visit(p,{data:f,method:u,replace:i.replace,preserveScroll:i.preserveScroll,preserveState:i.preserveState??u!=="get",only:i.only,except:i.except,headers:i.headers,onCancelToken:r.onCancelToken||(()=>({})),onBefore:r.onBefore||(()=>({})),onStart:r.onStart||(()=>({})),onProgress:r.onProgress||(()=>({})),onFinish:r.onFinish||(()=>({})),onCancel:r.onCancel||(()=>({})),onSuccess:r.onSuccess||(()=>({})),onError:r.onError||(()=>({}))}))}},n)}}}),Pt=eW;const qe=(i,n)=>{const r=i.__vccOpts||i;for(const[l,u]of n)r[l]=u;return r},tW={};function nW(i,n){return ee(),ne("div",null,[Sa(i.$slots,"default")])}const oW=qe(tW,[["render",nW]]),iW={components:{Head:Jt,Link:Pt},props:{errors:Object},layout:oW,setup(){const i=on({email:"",password:""});async function n(){let r=i.email,l=i.password;await Ze.post("/login",{email:r,password:l}),i.password=""}return{user:i,login:n}}},rW={class:"d-flex flex-column"},sW={class:"page page-center",style:{"margin-top":"100px"}},aW={class:"container container-tight py-4"},lW=_("div",{class:"text-center mb-4"},[_("h3",null,"Starter Template")],-1),cW={class:"card card-md"},dW={class:"card-body"},uW=_("h2",{class:"h2 text-center mb-4"}," Login to your account ",-1),hW={key:0,class:"alert alert-danger",role:"alert"},pW={class:"mb-3"},fW=_("label",{class:"form-label"},"Email address",-1),mW={key:0,class:"form-text text-danger"},gW={class:"mb-2"},bW=_("label",{class:"form-label"},"Password",-1),kW={class:"input-group input-group-flat"},_W=bn('<span class="input-group-text"><a href="#" class="link-secondary" title="Show password" data-bs-toggle="tooltip"><svg xmlns="http://www.w3.org/2000/svg" class="icon" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M10 12a2 2 0 1 0 4 0a2 2 0 0 0 -4 0"></path><path d="M21 12c-2.4 4 -5.4 6 -9 6c-3.6 0 -6.6 -2 -9 -6c2.4 -4 5.4 -6 9 -6c3.6 0 6.6 2 9 6"></path></svg></a></span>',1),wW={key:0,class:"form-text text-danger"},vW=_("div",{class:"form-footer"},[_("button",{type:"submit",class:"btn btn-primary w-100"}," Sign in ")],-1);function AW(i,n,r,l,u,p){return ee(),ne("div",null,[_("div",rW,[_("div",sW,[_("div",aW,[lW,_("div",cW,[_("div",dW,[uW,i.$page.props.flash.error?(ee(),ne("div",hW,le(i.$page.props.flash.error),1)):Te("",!0),_("form",{action:"./",method:"get",autocomplete:"off",novalidate:"",onSubmit:n[2]||(n[2]=uo((...f)=>l.login&&l.login(...f),["prevent"]))},[_("div",pW,[fW,mt(_("input",{type:"email",class:"form-control",placeholder:"your@email.com",autocomplete:"off","onUpdate:modelValue":n[0]||(n[0]=f=>l.user.email=f)},null,512),[[ut,l.user.email]]),r.errors.email?(ee(),ne("small",mW,le(r.errors.email),1)):Te("",!0)]),_("div",gW,[bW,_("div",kW,[mt(_("input",{type:"password",class:"form-control",placeholder:"Your password",autocomplete:"off","onUpdate:modelValue":n[1]||(n[1]=f=>l.user.password=f)},null,512),[[ut,l.user.password]]),_W]),r.errors.password?(ee(),ne("small",wW,le(r.errors.password),1)):Te("",!0)]),vW],32)])])])])])])}const CW=qe(iW,[["render",AW]]),yW=Object.freeze(Object.defineProperty({__proto__:null,default:CW},Symbol.toStringTag,{value:"Module"}));var Yp={exports:{}};Yp.exports;(function(i,n){(function(r){const l=r.en=r.en||{};l.dictionary=Object.assign(l.dictionary||{},{"(may require <kbd>Fn</kbd>)":"(may require <kbd>Fn</kbd>)","%0 of %1":"%0 of %1",Accept:"Accept",Accessibility:"Accessibility","Accessibility help":"Accessibility help","Align cell text to the bottom":"Align cell text to the bottom","Align cell text to the center":"Align cell text to the center","Align cell text to the left":"Align cell text to the left","Align cell text to the middle":"Align cell text to the middle","Align cell text to the right":"Align cell text to the right","Align cell text to the top":"Align cell text to the top","Align table to the left":"Align table to the left","Align table to the right":"Align table to the right",Alignment:"Alignment",Aquamarine:"Aquamarine",Background:"Background","Below, you can find a list of keyboard shortcuts that can be used in the editor.":"Below, you can find a list of keyboard shortcuts that can be used in the editor.",Black:"Black","Block quote":"Block quote",Blue:"Blue",Bold:"Bold","Bold text":"Bold text",Border:"Border","Break text":"Break text","Bulleted List":"Bulleted List","Bulleted list styles toolbar":"Bulleted list styles toolbar",Cancel:"Cancel","Cannot access default workspace.":"Cannot access default workspace.","Cannot determine a category for the uploaded file.":"Cannot determine a category for the uploaded file.","Cannot upload file:":"Cannot upload file:","Caption for image: %0":"Caption for image: %0","Caption for the image":"Caption for the image","Cell properties":"Cell properties","Center table":"Center table","Centered image":"Centered image","Change image text alternative":"Change image text alternative","Choose heading":"Choose heading",Circle:"Circle",Clear:"Clear","Click to edit block":"Click to edit block",Close:"Close","Close contextual balloons, dropdowns, and dialogs":"Close contextual balloons, dropdowns, and dialogs",Code:"Code",Color:"Color","Color picker":"Color picker",Column:"Column","Content editing keystrokes":"Content editing keystrokes","Copy selected content":"Copy selected content","Could not insert image at the current position.":"Could not insert image at the current position.","Could not obtain resized image URL.":"Could not obtain resized image URL.","Create link":"Create link",Custom:"Custom","Custom image size":"Custom image size",Dashed:"Dashed",Decimal:"Decimal","Decimal with leading zero":"Decimal with leading zero","Decrease indent":"Decrease indent","Decrease list item indent":"Decrease list item indent","Delete column":"Delete column","Delete row":"Delete row","Dim grey":"Dim grey",Dimensions:"Dimensions",Disc:"Disc",Dotted:"Dotted",Double:"Double",Downloadable:"Downloadable","Drag to move":"Drag to move","Dropdown toolbar":"Dropdown toolbar","Edit block":"Edit block","Edit image":"Edit image","Edit link":"Edit link","Editor block content toolbar":"Editor block content toolbar","Editor contextual toolbar":"Editor contextual toolbar","Editor dialog":"Editor dialog","Editor editing area: %0":"Editor editing area: %0","Editor menu bar":"Editor menu bar","Editor toolbar":"Editor toolbar","Enter image caption":"Enter image caption","Enter table caption":"Enter table caption","Entering a to-do list":"Entering a to-do list","Error during image upload":"Error during image upload","Execute the currently focused button. Executing buttons that interact with the editor content moves the focus back to the content.":"Execute the currently focused button. Executing buttons that interact with the editor content moves the focus back to the content.","Failed to determine category of edited image.":"Failed to determine category of edited image.","Full size image":"Full size image",Green:"Green",Grey:"Grey",Groove:"Groove","Header column":"Header column","Header row":"Header row",Heading:"Heading","Heading 1":"Heading 1","Heading 2":"Heading 2","Heading 3":"Heading 3","Heading 4":"Heading 4","Heading 5":"Heading 5","Heading 6":"Heading 6",Height:"Height","Help Contents. To close this dialog press ESC.":"Help Contents. To close this dialog press ESC.",HEX:"HEX","Horizontal text alignment toolbar":"Horizontal text alignment toolbar","Image from computer":"Image from computer","Image resize list":"Image resize list","Image toolbar":"Image toolbar","Image upload complete":"Image upload complete","image widget":"image widget","In line":"In line","Increase indent":"Increase indent","Increase list item indent":"Increase list item indent",Insert:"Insert","Insert a hard break (a new paragraph)":"Insert a hard break (a new paragraph)","Insert a new paragraph directly after a widget":"Insert a new paragraph directly after a widget","Insert a new paragraph directly before a widget":"Insert a new paragraph directly before a widget","Insert a new table row (when in the last cell of a table)":"Insert a new table row (when in the last cell of a table)","Insert a soft break (a <code>&lt;br&gt;</code> element)":"Insert a soft break (a <code>&lt;br&gt;</code> element)","Insert column left":"Insert column left","Insert column right":"Insert column right","Insert image":"Insert image","Insert image via URL":"Insert image via URL","Insert image with file manager":"Insert image with file manager","Insert media":"Insert media","Insert paragraph after block":"Insert paragraph after block","Insert paragraph before block":"Insert paragraph before block","Insert row above":"Insert row above","Insert row below":"Insert row below","Insert table":"Insert table","Insert with file manager":"Insert with file manager","Inserting image failed":"Inserting image failed",Inset:"Inset","Invalid start index value.":"Invalid start index value.",Italic:"Italic","Italic text":"Italic text","Justify cell text":"Justify cell text","Keystrokes that can be used in a list":"Keystrokes that can be used in a list","Keystrokes that can be used in a table cell":"Keystrokes that can be used in a table cell","Keystrokes that can be used when a widget is selected (for example: image, table, etc.)":"Keystrokes that can be used when a widget is selected (for example: image, table, etc.)","Leaving a to-do list":"Leaving a to-do list","Left aligned image":"Left aligned image","Light blue":"Light blue","Light green":"Light green","Light grey":"Light grey",Link:"Link","Link image":"Link image","Link URL":"Link URL","Link URL must not be empty.":"Link URL must not be empty.","List properties":"List properties","Lower-latin":"Lower-latin","Lower–roman":"Lower–roman","Media toolbar":"Media toolbar","Media URL":"Media URL","media widget":"media widget",MENU_BAR_MENU_EDIT:"Edit",MENU_BAR_MENU_FILE:"File",MENU_BAR_MENU_FONT:"Font",MENU_BAR_MENU_FORMAT:"Format",MENU_BAR_MENU_HELP:"Help",MENU_BAR_MENU_INSERT:"Insert",MENU_BAR_MENU_TEXT:"Text",MENU_BAR_MENU_TOOLS:"Tools",MENU_BAR_MENU_VIEW:"View","Merge cell down":"Merge cell down","Merge cell left":"Merge cell left","Merge cell right":"Merge cell right","Merge cell up":"Merge cell up","Merge cells":"Merge cells","Move focus between form fields (inputs, buttons, etc.)":"Move focus between form fields (inputs, buttons, etc.)","Move focus in and out of an active dialog window":"Move focus in and out of an active dialog window","Move focus to the menu bar, navigate between menu bars":"Move focus to the menu bar, navigate between menu bars","Move focus to the toolbar, navigate between toolbars":"Move focus to the toolbar, navigate between toolbars","Move out of a link":"Move out of a link","Move out of an inline code style":"Move out of an inline code style","Move the caret to allow typing directly after a widget":"Move the caret to allow typing directly after a widget","Move the caret to allow typing directly before a widget":"Move the caret to allow typing directly before a widget","Move the selection to the next cell":"Move the selection to the next cell","Move the selection to the previous cell":"Move the selection to the previous cell","Navigate through the table":"Navigate through the table","Navigate through the toolbar or menu bar":"Navigate through the toolbar or menu bar",Next:"Next","No results found":"No results found","No searchable items":"No searchable items",None:"None","Numbered List":"Numbered List","Numbered list styles toolbar":"Numbered list styles toolbar","Open file manager":"Open file manager","Open in a new tab":"Open in a new tab","Open link in new tab":"Open link in new tab","Open media in new tab":"Open media in new tab","Open the accessibility help dialog":"Open the accessibility help dialog",Orange:"Orange",Original:"Original",Outset:"Outset",Padding:"Padding",Paragraph:"Paragraph","Paste content":"Paste content","Paste content as plain text":"Paste content as plain text","Paste the media URL in the input.":"Paste the media URL in the input.",'Please enter a valid color (e.g. "ff0000").':'Please enter a valid color (e.g. "ff0000").',"Press %0 for help.":"Press %0 for help.","Press Enter to type after or press Shift + Enter to type before the widget":"Press Enter to type after or press Shift + Enter to type before the widget",Previous:"Previous","Processing the edited image.":"Processing the edited image.",Purple:"Purple",Red:"Red",Redo:"Redo","Remove color":"Remove color","Replace from computer":"Replace from computer","Replace image":"Replace image","Replace image from computer":"Replace image from computer","Replace image with file manager":"Replace image with file manager","Replace with file manager":"Replace with file manager","Resize image":"Resize image","Resize image (in %0)":"Resize image (in %0)","Resize image to %0":"Resize image to %0","Resize image to the original size":"Resize image to the original size","Restore default":"Restore default","Reversed order":"Reversed order","Revert autoformatting action":"Revert autoformatting action","Rich Text Editor":"Rich Text Editor",Ridge:"Ridge","Right aligned image":"Right aligned image",Row:"Row",Save:"Save","Select all":"Select all","Select column":"Select column","Select row":"Select row","Selecting resized image failed":"Selecting resized image failed","Server failed to process the image.":"Server failed to process the image.","Show more items":"Show more items","Side image":"Side image",Solid:"Solid","Split cell horizontally":"Split cell horizontally","Split cell vertically":"Split cell vertically",Square:"Square","Start at":"Start at","Start index must be greater than 0.":"Start index must be greater than 0.",Strikethrough:"Strikethrough","Strikethrough text":"Strikethrough text",Style:"Style",Subscript:"Subscript",Superscript:"Superscript",Table:"Table","Table alignment toolbar":"Table alignment toolbar","Table cell text alignment":"Table cell text alignment","Table properties":"Table properties","Table toolbar":"Table toolbar","Text alternative":"Text alternative",'The color is invalid. Try "#FF0000" or "rgb(255,0,0)" or "red".':'The color is invalid. Try "#FF0000" or "rgb(255,0,0)" or "red".',"The URL must not be empty.":"The URL must not be empty.",'The value is invalid. Try "10px" or "2em" or simply "2".':'The value is invalid. Try "10px" or "2em" or simply "2".',"The value must not be empty.":"The value must not be empty.","The value should be a plain number.":"The value should be a plain number.","These keyboard shortcuts allow for quick access to content editing features.":"These keyboard shortcuts allow for quick access to content editing features.","This link has no URL":"This link has no URL","This media URL is not supported.":"This media URL is not supported.","Tip: Paste the URL into the content to embed faster.":"Tip: Paste the URL into the content to embed faster.","To-do List":"To-do List","Toggle caption off":"Toggle caption off","Toggle caption on":"Toggle caption on","Toggle the circle list style":"Toggle the circle list style","Toggle the decimal list style":"Toggle the decimal list style","Toggle the decimal with leading zero list style":"Toggle the decimal with leading zero list style","Toggle the disc list style":"Toggle the disc list style","Toggle the lower–latin list style":"Toggle the lower–latin list style","Toggle the lower–roman list style":"Toggle the lower–roman list style","Toggle the square list style":"Toggle the square list style","Toggle the upper–latin list style":"Toggle the upper–latin list style","Toggle the upper–roman list style":"Toggle the upper–roman list style",Turquoise:"Turquoise","Type or paste your content here.":"Type or paste your content here.","Type your title":"Type your title",Underline:"Underline","Underline text":"Underline text",Undo:"Undo",Unlink:"Unlink",Update:"Update","Update image URL":"Update image URL","Upload failed":"Upload failed","Upload from computer":"Upload from computer","Upload image from computer":"Upload image from computer","Upload in progress":"Upload in progress","Uploading image":"Uploading image","Upper-latin":"Upper-latin","Upper-roman":"Upper-roman","Use the following keystrokes for more efficient navigation in the CKEditor 5 user interface.":"Use the following keystrokes for more efficient navigation in the CKEditor 5 user interface.","User interface and content navigation keystrokes":"User interface and content navigation keystrokes","Vertical text alignment toolbar":"Vertical text alignment toolbar",White:"White","Widget toolbar":"Widget toolbar",Width:"Width","Wrap text":"Wrap text",Yellow:"Yellow"})})(window.CKEDITOR_TRANSLATIONS||(window.CKEDITOR_TRANSLATIONS={})),function(r,l){i.exports=l()}(self,()=>(()=>{var r={9246:(f,b,m)=>{const A=m(6931),v={};for(const C of Object.keys(A))v[A[C]]=C;const x={rgb:{channels:3,labels:"rgb"},hsl:{channels:3,labels:"hsl"},hsv:{channels:3,labels:"hsv"},hwb:{channels:3,labels:"hwb"},cmyk:{channels:4,labels:"cmyk"},xyz:{channels:3,labels:"xyz"},lab:{channels:3,labels:"lab"},lch:{channels:3,labels:"lch"},hex:{channels:1,labels:["hex"]},keyword:{channels:1,labels:["keyword"]},ansi16:{channels:1,labels:["ansi16"]},ansi256:{channels:1,labels:["ansi256"]},hcg:{channels:3,labels:["h","c","g"]},apple:{channels:3,labels:["r16","g16","b16"]},gray:{channels:1,labels:["gray"]}};f.exports=x;for(const C of Object.keys(x)){if(!("channels"in x[C]))throw new Error("missing channels property: "+C);if(!("labels"in x[C]))throw new Error("missing channel labels property: "+C);if(x[C].labels.length!==x[C].channels)throw new Error("channel and label counts mismatch: "+C);const{channels:E,labels:T}=x[C];delete x[C].channels,delete x[C].labels,Object.defineProperty(x[C],"channels",{value:E}),Object.defineProperty(x[C],"labels",{value:T})}x.rgb.hsl=function(C){const E=C[0]/255,T=C[1]/255,I=C[2]/255,F=Math.min(E,T,I),N=Math.max(E,T,I),L=N-F;let B,z;N===F?B=0:E===N?B=(T-I)/L:T===N?B=2+(I-E)/L:I===N&&(B=4+(E-T)/L),B=Math.min(60*B,360),B<0&&(B+=360);const U=(F+N)/2;return z=N===F?0:U<=.5?L/(N+F):L/(2-N-F),[B,100*z,100*U]},x.rgb.hsv=function(C){let E,T,I,F,N;const L=C[0]/255,B=C[1]/255,z=C[2]/255,U=Math.max(L,B,z),W=U-Math.min(L,B,z),P=function(H){return(U-H)/6/W+.5};return W===0?(F=0,N=0):(N=W/U,E=P(L),T=P(B),I=P(z),L===U?F=I-T:B===U?F=.3333333333333333+E-I:z===U&&(F=.6666666666666666+T-E),F<0?F+=1:F>1&&(F-=1)),[360*F,100*N,100*U]},x.rgb.hwb=function(C){const E=C[0],T=C[1];let I=C[2];const F=x.rgb.hsl(C)[0],N=1/255*Math.min(E,Math.min(T,I));return I=1-.00392156862745098*Math.max(E,Math.max(T,I)),[F,100*N,100*I]},x.rgb.cmyk=function(C){const E=C[0]/255,T=C[1]/255,I=C[2]/255,F=Math.min(1-E,1-T,1-I);return[100*((1-E-F)/(1-F)||0),100*((1-T-F)/(1-F)||0),100*((1-I-F)/(1-F)||0),100*F]},x.rgb.keyword=function(C){const E=v[C];if(E)return E;let T,I=1/0;for(const L of Object.keys(A)){const B=A[L],z=(N=B,((F=C)[0]-N[0])**2+(F[1]-N[1])**2+(F[2]-N[2])**2);z<I&&(I=z,T=L)}var F,N;return T},x.keyword.rgb=function(C){return A[C]},x.rgb.xyz=function(C){let E=C[0]/255,T=C[1]/255,I=C[2]/255;return E=E>.04045?((E+.055)/1.055)**2.4:E/12.92,T=T>.04045?((T+.055)/1.055)**2.4:T/12.92,I=I>.04045?((I+.055)/1.055)**2.4:I/12.92,[100*(.4124*E+.3576*T+.1805*I),100*(.2126*E+.7152*T+.0722*I),100*(.0193*E+.1192*T+.9505*I)]},x.rgb.lab=function(C){const E=x.rgb.xyz(C);let T=E[0],I=E[1],F=E[2];return T/=95.047,I/=100,F/=108.883,T=T>.008856?T**.3333333333333333:7.787*T+.13793103448275862,I=I>.008856?I**.3333333333333333:7.787*I+.13793103448275862,F=F>.008856?F**.3333333333333333:7.787*F+.13793103448275862,[116*I-16,500*(T-I),200*(I-F)]},x.hsl.rgb=function(C){const E=C[0]/360,T=C[1]/100,I=C[2]/100;let F,N,L;if(T===0)return L=255*I,[L,L,L];F=I<.5?I*(1+T):I+T-I*T;const B=2*I-F,z=[0,0,0];for(let U=0;U<3;U++)N=E+.3333333333333333*-(U-1),N<0&&N++,N>1&&N--,L=6*N<1?B+6*(F-B)*N:2*N<1?F:3*N<2?B+(F-B)*(.6666666666666666-N)*6:B,z[U]=255*L;return z},x.hsl.hsv=function(C){const E=C[0];let T=C[1]/100,I=C[2]/100,F=T;const N=Math.max(I,.01);return I*=2,T*=I<=1?I:2-I,F*=N<=1?N:2-N,[E,100*(I===0?2*F/(N+F):2*T/(I+T)),100*((I+T)/2)]},x.hsv.rgb=function(C){const E=C[0]/60,T=C[1]/100;let I=C[2]/100;const F=Math.floor(E)%6,N=E-Math.floor(E),L=255*I*(1-T),B=255*I*(1-T*N),z=255*I*(1-T*(1-N));switch(I*=255,F){case 0:return[I,z,L];case 1:return[B,I,L];case 2:return[L,I,z];case 3:return[L,B,I];case 4:return[z,L,I];case 5:return[I,L,B]}},x.hsv.hsl=function(C){const E=C[0],T=C[1]/100,I=C[2]/100,F=Math.max(I,.01);let N,L;L=(2-T)*I;const B=(2-T)*F;return N=T*F,N/=B<=1?B:2-B,N=N||0,L/=2,[E,100*N,100*L]},x.hwb.rgb=function(C){const E=C[0]/360;let T=C[1]/100,I=C[2]/100;const F=T+I;let N;F>1&&(T/=F,I/=F);const L=Math.floor(6*E),B=1-I;N=6*E-L,1&L&&(N=1-N);const z=T+N*(B-T);let U,W,P;switch(L){default:case 6:case 0:U=B,W=z,P=T;break;case 1:U=z,W=B,P=T;break;case 2:U=T,W=B,P=z;break;case 3:U=T,W=z,P=B;break;case 4:U=z,W=T,P=B;break;case 5:U=B,W=T,P=z}return[255*U,255*W,255*P]},x.cmyk.rgb=function(C){const E=C[0]/100,T=C[1]/100,I=C[2]/100,F=C[3]/100;return[255*(1-Math.min(1,E*(1-F)+F)),255*(1-Math.min(1,T*(1-F)+F)),255*(1-Math.min(1,I*(1-F)+F))]},x.xyz.rgb=function(C){const E=C[0]/100,T=C[1]/100,I=C[2]/100;let F,N,L;return F=3.2406*E+-1.5372*T+-.4986*I,N=-.9689*E+1.8758*T+.0415*I,L=.0557*E+-.204*T+1.057*I,F=F>.0031308?1.055*F**.4166666666666667-.055:12.92*F,N=N>.0031308?1.055*N**.4166666666666667-.055:12.92*N,L=L>.0031308?1.055*L**.4166666666666667-.055:12.92*L,F=Math.min(Math.max(0,F),1),N=Math.min(Math.max(0,N),1),L=Math.min(Math.max(0,L),1),[255*F,255*N,255*L]},x.xyz.lab=function(C){let E=C[0],T=C[1],I=C[2];return E/=95.047,T/=100,I/=108.883,E=E>.008856?E**.3333333333333333:7.787*E+.13793103448275862,T=T>.008856?T**.3333333333333333:7.787*T+.13793103448275862,I=I>.008856?I**.3333333333333333:7.787*I+.13793103448275862,[116*T-16,500*(E-T),200*(T-I)]},x.lab.xyz=function(C){let E,T,I;T=(C[0]+16)/116,E=C[1]/500+T,I=T-C[2]/200;const F=T**3,N=E**3,L=I**3;return T=F>.008856?F:(T-.13793103448275862)/7.787,E=N>.008856?N:(E-.13793103448275862)/7.787,I=L>.008856?L:(I-.13793103448275862)/7.787,E*=95.047,T*=100,I*=108.883,[E,T,I]},x.lab.lch=function(C){const E=C[0],T=C[1],I=C[2];let F;return F=360*Math.atan2(I,T)/2/Math.PI,F<0&&(F+=360),[E,Math.sqrt(T*T+I*I),F]},x.lch.lab=function(C){const E=C[0],T=C[1],I=C[2]/360*2*Math.PI;return[E,T*Math.cos(I),T*Math.sin(I)]},x.rgb.ansi16=function(C,E=null){const[T,I,F]=C;let N=E===null?x.rgb.hsv(C)[2]:E;if(N=Math.round(N/50),N===0)return 30;let L=30+(Math.round(F/255)<<2|Math.round(I/255)<<1|Math.round(T/255));return N===2&&(L+=60),L},x.hsv.ansi16=function(C){return x.rgb.ansi16(x.hsv.rgb(C),C[2])},x.rgb.ansi256=function(C){const E=C[0],T=C[1],I=C[2];return E===T&&T===I?E<8?16:E>248?231:Math.round((E-8)/247*24)+232:16+36*Math.round(E/255*5)+6*Math.round(T/255*5)+Math.round(I/255*5)},x.ansi16.rgb=function(C){let E=C%10;if(E===0||E===7)return C>50&&(E+=3.5),E=E/10.5*255,[E,E,E];const T=.5*(1+~~(C>50));return[(1&E)*T*255,(E>>1&1)*T*255,(E>>2&1)*T*255]},x.ansi256.rgb=function(C){if(C>=232){const T=10*(C-232)+8;return[T,T,T]}let E;return C-=16,[Math.floor(C/36)/5*255,Math.floor((E=C%36)/6)/5*255,E%6/5*255]},x.rgb.hex=function(C){const E=(((255&Math.round(C[0]))<<16)+((255&Math.round(C[1]))<<8)+(255&Math.round(C[2]))).toString(16).toUpperCase();return"000000".substring(E.length)+E},x.hex.rgb=function(C){const E=C.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);if(!E)return[0,0,0];let T=E[0];E[0].length===3&&(T=T.split("").map(F=>F+F).join(""));const I=parseInt(T,16);return[I>>16&255,I>>8&255,255&I]},x.rgb.hcg=function(C){const E=C[0]/255,T=C[1]/255,I=C[2]/255,F=Math.max(Math.max(E,T),I),N=Math.min(Math.min(E,T),I),L=F-N;let B,z;return B=L<1?N/(1-L):0,z=L<=0?0:F===E?(T-I)/L%6:F===T?2+(I-E)/L:4+(E-T)/L,z/=6,z%=1,[360*z,100*L,100*B]},x.hsl.hcg=function(C){const E=C[1]/100,T=C[2]/100,I=T<.5?2*E*T:2*E*(1-T);let F=0;return I<1&&(F=(T-.5*I)/(1-I)),[C[0],100*I,100*F]},x.hsv.hcg=function(C){const E=C[1]/100,T=C[2]/100,I=E*T;let F=0;return I<1&&(F=(T-I)/(1-I)),[C[0],100*I,100*F]},x.hcg.rgb=function(C){const E=C[0]/360,T=C[1]/100,I=C[2]/100;if(T===0)return[255*I,255*I,255*I];const F=[0,0,0],N=E%1*6,L=N%1,B=1-L;let z=0;switch(Math.floor(N)){case 0:F[0]=1,F[1]=L,F[2]=0;break;case 1:F[0]=B,F[1]=1,F[2]=0;break;case 2:F[0]=0,F[1]=1,F[2]=L;break;case 3:F[0]=0,F[1]=B,F[2]=1;break;case 4:F[0]=L,F[1]=0,F[2]=1;break;default:F[0]=1,F[1]=0,F[2]=B}return z=(1-T)*I,[255*(T*F[0]+z),255*(T*F[1]+z),255*(T*F[2]+z)]},x.hcg.hsv=function(C){const E=C[1]/100,T=E+C[2]/100*(1-E);let I=0;return T>0&&(I=E/T),[C[0],100*I,100*T]},x.hcg.hsl=function(C){const E=C[1]/100,T=C[2]/100*(1-E)+.5*E;let I=0;return T>0&&T<.5?I=E/(2*T):T>=.5&&T<1&&(I=E/(2*(1-T))),[C[0],100*I,100*T]},x.hcg.hwb=function(C){const E=C[1]/100,T=E+C[2]/100*(1-E);return[C[0],100*(T-E),100*(1-T)]},x.hwb.hcg=function(C){const E=C[1]/100,T=1-C[2]/100,I=T-E;let F=0;return I<1&&(F=(T-I)/(1-I)),[C[0],100*I,100*F]},x.apple.rgb=function(C){return[C[0]/65535*255,C[1]/65535*255,C[2]/65535*255]},x.rgb.apple=function(C){return[C[0]/255*65535,C[1]/255*65535,C[2]/255*65535]},x.gray.rgb=function(C){return[C[0]/100*255,C[0]/100*255,C[0]/100*255]},x.gray.hsl=function(C){return[0,0,C[0]]},x.gray.hsv=x.gray.hsl,x.gray.hwb=function(C){return[0,100,C[0]]},x.gray.cmyk=function(C){return[0,0,0,C[0]]},x.gray.lab=function(C){return[C[0],0,0]},x.gray.hex=function(C){const E=255&Math.round(C[0]/100*255),T=((E<<16)+(E<<8)+E).toString(16).toUpperCase();return"000000".substring(T.length)+T},x.rgb.gray=function(C){return[(C[0]+C[1]+C[2])/3/255*100]}},9047:(f,b,m)=>{const A=m(9246),v=m(802),x={};Object.keys(A).forEach(C=>{x[C]={},Object.defineProperty(x[C],"channels",{value:A[C].channels}),Object.defineProperty(x[C],"labels",{value:A[C].labels});const E=v(C);Object.keys(E).forEach(T=>{const I=E[T];x[C][T]=function(F){const N=function(...L){const B=L[0];if(B==null)return B;B.length>1&&(L=B);const z=F(L);if(typeof z=="object")for(let U=z.length,W=0;W<U;W++)z[W]=Math.round(z[W]);return z};return"conversion"in F&&(N.conversion=F.conversion),N}(I),x[C][T].raw=function(F){const N=function(...L){const B=L[0];return B==null?B:(B.length>1&&(L=B),F(L))};return"conversion"in F&&(N.conversion=F.conversion),N}(I)})}),f.exports=x},802:(f,b,m)=>{const A=m(9246);function v(E){const T=function(){const F={},N=Object.keys(A);for(let L=N.length,B=0;B<L;B++)F[N[B]]={distance:-1,parent:null};return F}(),I=[E];for(T[E].distance=0;I.length;){const F=I.pop(),N=Object.keys(A[F]);for(let L=N.length,B=0;B<L;B++){const z=N[B],U=T[z];U.distance===-1&&(U.distance=T[F].distance+1,U.parent=F,I.unshift(z))}}return T}function x(E,T){return function(I){return T(E(I))}}function C(E,T){const I=[T[E].parent,E];let F=A[T[E].parent][E],N=T[E].parent;for(;T[N].parent;)I.unshift(T[N].parent),F=x(A[T[N].parent][N],F),N=T[N].parent;return F.conversion=I,F}f.exports=function(E){const T=v(E),I={},F=Object.keys(T);for(let N=F.length,L=0;L<N;L++){const B=F[L];T[B].parent!==null&&(I[B]=C(B,T))}return I}},6931:f=>{f.exports={aliceblue:[240,248,255],antiquewhite:[250,235,215],aqua:[0,255,255],aquamarine:[127,255,212],azure:[240,255,255],beige:[245,245,220],bisque:[255,228,196],black:[0,0,0],blanchedalmond:[255,235,205],blue:[0,0,255],blueviolet:[138,43,226],brown:[165,42,42],burlywood:[222,184,135],cadetblue:[95,158,160],chartreuse:[127,255,0],chocolate:[210,105,30],coral:[255,127,80],cornflowerblue:[100,149,237],cornsilk:[255,248,220],crimson:[220,20,60],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgoldenrod:[184,134,11],darkgray:[169,169,169],darkgreen:[0,100,0],darkgrey:[169,169,169],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkseagreen:[143,188,143],darkslateblue:[72,61,139],darkslategray:[47,79,79],darkslategrey:[47,79,79],darkturquoise:[0,206,209],darkviolet:[148,0,211],deeppink:[255,20,147],deepskyblue:[0,191,255],dimgray:[105,105,105],dimgrey:[105,105,105],dodgerblue:[30,144,255],firebrick:[178,34,34],floralwhite:[255,250,240],forestgreen:[34,139,34],fuchsia:[255,0,255],gainsboro:[220,220,220],ghostwhite:[248,248,255],gold:[255,215,0],goldenrod:[218,165,32],gray:[128,128,128],green:[0,128,0],greenyellow:[173,255,47],grey:[128,128,128],honeydew:[240,255,240],hotpink:[255,105,180],indianred:[205,92,92],indigo:[75,0,130],ivory:[255,255,240],khaki:[240,230,140],lavender:[230,230,250],lavenderblush:[255,240,245],lawngreen:[124,252,0],lemonchiffon:[255,250,205],lightblue:[173,216,230],lightcoral:[240,128,128],lightcyan:[224,255,255],lightgoldenrodyellow:[250,250,210],lightgray:[211,211,211],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightsalmon:[255,160,122],lightseagreen:[32,178,170],lightskyblue:[135,206,250],lightslategray:[119,136,153],lightslategrey:[119,136,153],lightsteelblue:[176,196,222],lightyellow:[255,255,224],lime:[0,255,0],limegreen:[50,205,50],linen:[250,240,230],magenta:[255,0,255],maroon:[128,0,0],mediumaquamarine:[102,205,170],mediumblue:[0,0,205],mediumorchid:[186,85,211],mediumpurple:[147,112,219],mediumseagreen:[60,179,113],mediumslateblue:[123,104,238],mediumspringgreen:[0,250,154],mediumturquoise:[72,209,204],mediumvioletred:[199,21,133],midnightblue:[25,25,112],mintcream:[245,255,250],mistyrose:[255,228,225],moccasin:[255,228,181],navajowhite:[255,222,173],navy:[0,0,128],oldlace:[253,245,230],olive:[128,128,0],olivedrab:[107,142,35],orange:[255,165,0],orangered:[255,69,0],orchid:[218,112,214],palegoldenrod:[238,232,170],palegreen:[152,251,152],paleturquoise:[175,238,238],palevioletred:[219,112,147],papayawhip:[255,239,213],peachpuff:[255,218,185],peru:[205,133,63],pink:[255,192,203],plum:[221,160,221],powderblue:[176,224,230],purple:[128,0,128],rebeccapurple:[102,51,153],red:[255,0,0],rosybrown:[188,143,143],royalblue:[65,105,225],saddlebrown:[139,69,19],salmon:[250,128,114],sandybrown:[244,164,96],seagreen:[46,139,87],seashell:[255,245,238],sienna:[160,82,45],silver:[192,192,192],skyblue:[135,206,235],slateblue:[106,90,205],slategray:[112,128,144],slategrey:[112,128,144],snow:[255,250,250],springgreen:[0,255,127],steelblue:[70,130,180],tan:[210,180,140],teal:[0,128,128],thistle:[216,191,216],tomato:[255,99,71],turquoise:[64,224,208],violet:[238,130,238],wheat:[245,222,179],white:[255,255,255],whitesmoke:[245,245,245],yellow:[255,255,0],yellowgreen:[154,205,50]}},4199:(f,b,m)=>{m.d(b,{A:()=>E});var A=m(9372),v=m.n(A),x=m(935),C=m.n(x)()(v());C.push([f.id,".ck-content code{background-color:hsla(0,0%,78%,.3);border-radius:2px;padding:.15em}.ck.ck-editor__editable .ck-code_selected{background-color:hsla(0,0%,78%,.5)}","",{version:3,sources:["webpack://./../ckeditor5-basic-styles/theme/code.css"],names:[],mappings:"AAKA,iBACC,kCAAuC,CAEvC,iBAAkB,CADlB,aAED,CAEA,0CACC,kCACD",sourcesContent:[`/*
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
`],sourceRoot:""}]);const E=C},8708:(f,b,m)=>{m.d(b,{A:()=>E});var A=m(9372),v=m.n(A),x=m(935),C=m.n(x)()(v());C.push([f.id,".ck-content blockquote{border-left:5px solid #ccc;font-style:italic;margin-left:0;margin-right:0;overflow:hidden;padding-left:1.5em;padding-right:1.5em}.ck-content[dir=rtl] blockquote{border-left:0;border-right:5px solid #ccc}","",{version:3,sources:["webpack://./../ckeditor5-block-quote/theme/blockquote.css"],names:[],mappings:"AAKA,uBAWC,0BAAsC,CADtC,iBAAkB,CAFlB,aAAc,CACd,cAAe,CAPf,eAAgB,CAIhB,kBAAmB,CADnB,mBAOD,CAEA,gCACC,aAAc,CACd,2BACD",sourcesContent:[`/*
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
`],sourceRoot:""}]);const E=C},1866:(f,b,m)=>{m.d(b,{A:()=>E});var A=m(9372),v=m.n(A),x=m(935),C=m.n(x)()(v());C.push([f.id,':root{--ck-image-processing-highlight-color:#f9fafa;--ck-image-processing-background-color:#e3e5e8}.ck.ck-editor__editable .image.image-processing{position:relative}.ck.ck-editor__editable .image.image-processing:before{animation:ck-image-processing-animation 2s linear infinite;background:linear-gradient(90deg,var(--ck-image-processing-background-color),var(--ck-image-processing-highlight-color),var(--ck-image-processing-background-color));background-size:200% 100%;content:"";height:100%;left:0;position:absolute;top:0;width:100%;z-index:1}.ck.ck-editor__editable .image.image-processing img{height:100%}@keyframes ck-image-processing-animation{0%{background-position:200% 0}to{background-position:-200% 0}}',"",{version:3,sources:["webpack://./../ckeditor5-ckbox/theme/ckboximageedit.css"],names:[],mappings:"AAKA,MAEC,6CAAyD,CACzD,8CACD,CAIE,gDACC,iBA2BD,CAzBC,uDAmBC,0DAA2D,CAR3D,oKAKC,CACD,yBAA0B,CAhB1B,UAAW,CAOX,WAAY,CAHZ,MAAO,CAFP,iBAAkB,CAClB,KAAM,CAKN,UAAW,CAHX,SAcD,CAEA,oDACC,WACD,CAKH,yCACC,GACC,0BACD,CACA,GACC,2BACD,CACD",sourcesContent:[`/*
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
`],sourceRoot:""}]);const E=C},7793:(f,b,m)=>{m.d(b,{A:()=>E});var A=m(9372),v=m.n(A),x=m(935),C=m.n(x)()(v());C.push([f.id,'.ck.ck-editor__editable .ck.ck-clipboard-drop-target-position{display:inline;pointer-events:none;position:relative}.ck.ck-editor__editable .ck.ck-clipboard-drop-target-position span{position:absolute;width:0}.ck.ck-editor__editable .ck-widget:-webkit-drag>.ck-widget__selection-handle,.ck.ck-editor__editable .ck-widget:-webkit-drag>.ck-widget__type-around{display:none}.ck.ck-clipboard-drop-target-line{pointer-events:none;position:absolute}:root{--ck-clipboard-drop-target-dot-width:12px;--ck-clipboard-drop-target-dot-height:8px;--ck-clipboard-drop-target-color:var(--ck-color-focus-border)}.ck.ck-editor__editable .ck.ck-clipboard-drop-target-position span{background:var(--ck-clipboard-drop-target-color);border:1px solid var(--ck-clipboard-drop-target-color);bottom:calc(var(--ck-clipboard-drop-target-dot-height)*-.5);margin-left:-1px;top:calc(var(--ck-clipboard-drop-target-dot-height)*-.5)}.ck.ck-editor__editable .ck.ck-clipboard-drop-target-position span:after{border-color:var(--ck-clipboard-drop-target-color) transparent transparent transparent;border-style:solid;border-width:calc(var(--ck-clipboard-drop-target-dot-height)) calc(var(--ck-clipboard-drop-target-dot-width)*.5) 0 calc(var(--ck-clipboard-drop-target-dot-width)*.5);content:"";display:block;height:0;left:50%;position:absolute;top:calc(var(--ck-clipboard-drop-target-dot-height)*-.5);transform:translateX(-50%);width:0}.ck.ck-editor__editable .ck-widget.ck-clipboard-drop-target-range{outline:var(--ck-widget-outline-thickness) solid var(--ck-clipboard-drop-target-color)!important}.ck.ck-editor__editable .ck-widget:-webkit-drag{zoom:.6;outline:none!important}.ck.ck-clipboard-drop-target-line{background:var(--ck-clipboard-drop-target-color);border:1px solid var(--ck-clipboard-drop-target-color);height:0;margin-top:-1px}.ck.ck-clipboard-drop-target-line:before{border-style:solid;content:"";height:0;position:absolute;top:calc(var(--ck-clipboard-drop-target-dot-width)*-.5);width:0}[dir=ltr] .ck.ck-clipboard-drop-target-line:before{border-color:transparent transparent transparent var(--ck-clipboard-drop-target-color);border-width:calc(var(--ck-clipboard-drop-target-dot-width)*.5) 0 calc(var(--ck-clipboard-drop-target-dot-width)*.5) var(--ck-clipboard-drop-target-dot-height);left:-1px}[dir=rtl] .ck.ck-clipboard-drop-target-line:before{border-color:transparent var(--ck-clipboard-drop-target-color) transparent transparent;border-width:calc(var(--ck-clipboard-drop-target-dot-width)*.5) var(--ck-clipboard-drop-target-dot-height) calc(var(--ck-clipboard-drop-target-dot-width)*.5) 0;right:-1px}',"",{version:3,sources:["webpack://./../ckeditor5-clipboard/theme/clipboard.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-clipboard/clipboard.css"],names:[],mappings:"AASC,8DACC,cAAe,CAEf,mBAAoB,CADpB,iBAOD,CAJC,mEACC,iBAAkB,CAClB,OACD,CAWA,qJACC,YACD,CAIF,kCAEC,mBAAoB,CADpB,iBAED,CC9BA,MACC,yCAA0C,CAC1C,yCAA0C,CAC1C,6DACD,CAOE,mEAIC,gDAAiD,CADjD,sDAAuD,CAFvD,2DAA8D,CAI9D,gBAAiB,CAHjB,wDAqBD,CAfC,yEAWC,sFAAuF,CAEvF,kBAAmB,CADnB,qKAA0K,CAX1K,UAAW,CAIX,aAAc,CAFd,QAAS,CAIT,QAAS,CADT,iBAAkB,CAElB,wDAA2D,CAE3D,0BAA2B,CAR3B,OAYD,CAOF,kEACC,gGACD,CAKA,gDACC,OAAS,CACT,sBACD,CAGD,kCAGC,gDAAiD,CADjD,sDAAuD,CADvD,QAAS,CAGT,eAwBD,CAtBC,yCAMC,kBAAmB,CALnB,UAAW,CAIX,QAAS,CAHT,iBAAkB,CAClB,uDAA0D,CAC1D,OAiBD,CArBA,mDAYE,sFAAuF,CADvF,+JAAoK,CAFpK,SAYF,CArBA,mDAmBE,sFAAuF,CADvF,+JAAmK,CAFnK,UAKF",sourcesContent:[`/*
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
`],sourceRoot:""}]);const E=C},7388:(f,b,m)=>{m.d(b,{A:()=>E});var A=m(9372),v=m.n(A),x=m(935),C=m.n(x)()(v());C.push([f.id,".ck.ck-editor{position:relative}.ck.ck-editor .ck-editor__top .ck-sticky-panel .ck-toolbar{z-index:var(--ck-z-panel)}.ck.ck-editor__top .ck-sticky-panel .ck-sticky-panel__content{border-radius:0}.ck-rounded-corners .ck.ck-editor__top .ck-sticky-panel .ck-sticky-panel__content,.ck.ck-editor__top .ck-sticky-panel .ck-sticky-panel__content.ck-rounded-corners{border-radius:var(--ck-border-radius);border-bottom-left-radius:0;border-bottom-right-radius:0}.ck.ck-editor__top .ck-sticky-panel .ck-sticky-panel__content{border:solid var(--ck-color-base-border);border-width:1px 1px 0}.ck.ck-editor__top .ck-sticky-panel .ck-sticky-panel__content.ck-sticky-panel__content_sticky{border-bottom-width:1px}.ck.ck-editor__top .ck-sticky-panel .ck-sticky-panel__content .ck-menu-bar,.ck.ck-editor__top .ck-sticky-panel .ck-sticky-panel__content .ck-toolbar{border:0}.ck.ck-editor__main>.ck-editor__editable{background:var(--ck-color-base-background);border-radius:0}.ck-rounded-corners .ck.ck-editor__main>.ck-editor__editable,.ck.ck-editor__main>.ck-editor__editable.ck-rounded-corners{border-radius:var(--ck-border-radius);border-top-left-radius:0;border-top-right-radius:0}.ck.ck-editor__main>.ck-editor__editable:not(.ck-focused){border-color:var(--ck-color-base-border)}","",{version:3,sources:["webpack://./../ckeditor5-editor-classic/theme/classiceditor.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-editor-classic/classiceditor.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css"],names:[],mappings:"AAKA,cAIC,iBAMD,CAJC,2DAEC,yBACD,CCLC,8DCED,eDeC,CAjBA,mKCMA,qCAAsC,CDJpC,2BAA4B,CAC5B,4BAcF,CAjBA,8DAOC,wCAAsB,CAAtB,sBAUD,CARC,8FACC,uBACD,CAEA,qJAEC,QACD,CAMH,yCAEC,0CAA2C,CCtB3C,eDgCD,CAZA,yHChBE,qCAAsC,CDqBtC,wBAAyB,CACzB,yBAMF,CAHC,0DACC,wCACD",sourcesContent:[`/*
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
`],sourceRoot:""}]);const E=C},4098:(f,b,m)=>{m.d(b,{A:()=>E});var A=m(9372),v=m.n(A),x=m(935),C=m.n(x)()(v());C.push([f.id,".ck .ck-placeholder,.ck.ck-placeholder{position:relative}.ck .ck-placeholder:before,.ck.ck-placeholder:before{content:attr(data-placeholder);left:0;pointer-events:none;position:absolute;right:0}.ck.ck-read-only .ck-placeholder:before{display:none}.ck.ck-reset_all .ck-placeholder{position:relative}@media (forced-colors:active){.ck .ck-placeholder,.ck.ck-placeholder{forced-color-adjust:preserve-parent-color}}.ck .ck-placeholder:before,.ck.ck-placeholder:before{cursor:text}@media (forced-colors:none){.ck .ck-placeholder:before,.ck.ck-placeholder:before{color:var(--ck-color-engine-placeholder-text)}}@media (forced-colors:active){.ck .ck-placeholder:before,.ck.ck-placeholder:before{font-style:italic;margin-left:1px}}","",{version:3,sources:["webpack://./../ckeditor5-engine/theme/placeholder.css","webpack://./../ckeditor5-ui/theme/mixins/_mediacolors.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-engine/placeholder.css"],names:[],mappings:"AAMA,uCAEC,iBAWD,CATC,qDAIC,8BAA+B,CAF/B,MAAO,CAKP,mBAAoB,CANpB,iBAAkB,CAElB,OAKD,CAKA,wCACC,YACD,CAQD,iCACC,iBACD,CC7BC,8BACC,uCCOA,yCDLA,CACD,CCOA,qDACC,WAmBD,CDvBA,4BACC,qDCMC,6CDJD,CACD,CAZA,8BACC,qDCsBC,iBAAkB,CAMlB,eD1BD,CACD",sourcesContent:[`/*
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
`],sourceRoot:""}]);const E=C},8264:(f,b,m)=>{m.d(b,{A:()=>E});var A=m(9372),v=m.n(A),x=m(935),C=m.n(x)()(v());C.push([f.id,".ck.ck-editor__editable span[data-ck-unsafe-element]{display:none}","",{version:3,sources:["webpack://./../ckeditor5-engine/theme/renderer.css"],names:[],mappings:"AAMA,qDACC,YACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/* Elements marked by the Renderer as hidden should be invisible in the editor. */
.ck.ck-editor__editable span[data-ck-unsafe-element] {
	display: none;
}
`],sourceRoot:""}]);const E=C},6269:(f,b,m)=>{m.d(b,{A:()=>E});var A=m(9372),v=m.n(A),x=m(935),C=m.n(x)()(v());C.push([f.id,".ck.ck-heading_heading1{font-size:20px}.ck.ck-heading_heading2{font-size:17px}.ck.ck-heading_heading3{font-size:14px}.ck[class*=ck-heading_heading]{font-weight:700}.ck.ck-dropdown.ck-heading-dropdown .ck-dropdown__button .ck-button__label{width:8em}.ck.ck-dropdown.ck-heading-dropdown .ck-dropdown__panel .ck-list__item{min-width:18em}","",{version:3,sources:["webpack://./../ckeditor5-heading/theme/heading.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-heading/heading.css"],names:[],mappings:"AAKA,wBACC,cACD,CAEA,wBACC,cACD,CAEA,wBACC,cACD,CAEA,+BACC,eACD,CCZC,2EACC,SACD,CAEA,uEACC,cACD",sourcesContent:[`/*
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
`],sourceRoot:""}]);const E=C},265:(f,b,m)=>{m.d(b,{A:()=>E});var A=m(9372),v=m.n(A),x=m(935),C=m.n(x)()(v());C.push([f.id,".ck-content .image{clear:both;display:table;margin:.9em auto;min-width:50px;text-align:center}.ck-content .image img{display:block;height:auto;margin:0 auto;max-width:100%;min-width:100%}.ck-content .image-inline{align-items:flex-start;display:inline-flex;max-width:100%}.ck-content .image-inline picture{display:flex}.ck-content .image-inline img,.ck-content .image-inline picture{flex-grow:1;flex-shrink:1;max-width:100%}.ck.ck-editor__editable .image>figcaption.ck-placeholder:before{overflow:hidden;padding-left:inherit;padding-right:inherit;text-overflow:ellipsis;white-space:nowrap}.ck.ck-editor__editable .image{z-index:1}.ck.ck-editor__editable .image.ck-widget_selected{z-index:2}.ck.ck-editor__editable .image-inline{z-index:1}.ck.ck-editor__editable .image-inline.ck-widget_selected{z-index:2}.ck.ck-editor__editable .image-inline.ck-widget_selected ::selection{display:none}.ck.ck-editor__editable .image-inline img{height:auto}.ck.ck-editor__editable td .image-inline img,.ck.ck-editor__editable th .image-inline img{max-width:none}","",{version:3,sources:["webpack://./../ckeditor5-image/theme/image.css"],names:[],mappings:"AAMC,mBAEC,UAAW,CADX,aAAc,CAOd,gBAAkB,CAGlB,cAAe,CARf,iBA2BD,CAjBC,uBAEC,aAAc,CAad,WAAY,CAVZ,aAAc,CAGd,cAAe,CAGf,cAKD,CAGD,0BAYC,sBAAuB,CANvB,mBAAoB,CAGpB,cAoBD,CAdC,kCACC,YACD,CAGA,gEAGC,WAAY,CACZ,aAAc,CAGd,cACD,CAUD,gEASC,eAAgB,CARhB,oBAAqB,CACrB,qBAAsB,CAQtB,sBAAuB,CAFvB,kBAGD,CAKA,+BACC,SASD,CAHC,kDACC,SACD,CAMD,sCACC,SAkBD,CAZC,yDACC,SAUD,CAHC,qEACC,YACD,CAMF,0CACC,WACD,CAMC,0FACC,cACD",sourcesContent:[`/*
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
`],sourceRoot:""}]);const E=C},5247:(f,b,m)=>{m.d(b,{A:()=>E});var A=m(9372),v=m.n(A),x=m(935),C=m.n(x)()(v());C.push([f.id,":root{--ck-color-image-caption-background:#f7f7f7;--ck-color-image-caption-text:#333;--ck-color-image-caption-highlighted-background:#fd0}.ck-content .image>figcaption{background-color:var(--ck-color-image-caption-background);caption-side:bottom;color:var(--ck-color-image-caption-text);display:table-caption;font-size:.75em;outline-offset:-1px;padding:.6em;word-break:break-word}@media (forced-colors:active){.ck-content .image>figcaption{background-color:unset;color:unset}}@media (forced-colors:none){.ck.ck-editor__editable .image>figcaption.image__caption_highlighted{animation:ck-image-caption-highlight .6s ease-out}}@media (prefers-reduced-motion:reduce){.ck.ck-editor__editable .image>figcaption.image__caption_highlighted{animation:none}}@keyframes ck-image-caption-highlight{0%{background-color:var(--ck-color-image-caption-highlighted-background)}to{background-color:var(--ck-color-image-caption-background)}}","",{version:3,sources:["webpack://./../ckeditor5-image/theme/imagecaption.css","webpack://./../ckeditor5-ui/theme/mixins/_mediacolors.css"],names:[],mappings:"AAOA,MACC,2CAAoD,CACpD,kCAA8C,CAC9C,oDACD,CAGA,8BAKC,yDAA0D,CAH1D,mBAAoB,CAEpB,wCAAyC,CAHzC,qBAAsB,CAMtB,eAAgB,CAChB,mBAAoB,CAFpB,YAAa,CAHb,qBAYD,CAJC,8BAXD,8BAYE,sBAAuB,CACvB,WAEF,CADC,CCdA,4BACC,qEDmBA,iDCjBA,CACD,CDmBA,uCALD,qEAME,cAEF,CADC,CAGD,sCACC,GACC,qEACD,CAEA,GACC,yDACD,CACD",sourcesContent:[`/*
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
`],sourceRoot:""}]);const E=C},4642:(f,b,m)=>{m.d(b,{A:()=>E});var A=m(9372),v=m.n(A),x=m(935),C=m.n(x)()(v());C.push([f.id,".ck.ck-image-custom-resize-form{align-items:flex-start;display:flex;flex-direction:row;flex-wrap:nowrap}.ck.ck-image-custom-resize-form .ck-labeled-field-view{display:inline-block}.ck.ck-image-custom-resize-form .ck-label{display:none}@media screen and (max-width:600px){.ck.ck-image-custom-resize-form{flex-wrap:wrap}.ck.ck-image-custom-resize-form .ck-labeled-field-view{flex-basis:100%}.ck.ck-image-custom-resize-form .ck-button{flex-basis:50%}}","",{version:3,sources:["webpack://./../ckeditor5-image/theme/imagecustomresizeform.css","webpack://./../ckeditor5-ui/theme/mixins/_rwd.css"],names:[],mappings:"AAOA,gCAIC,sBAAuB,CAHvB,YAAa,CACb,kBAAmB,CACnB,gBAsBD,CAnBC,uDACC,oBACD,CAEA,0CACC,YACD,CCbA,oCDCD,gCAeE,cAUF,CARE,uDACC,eACD,CAEA,2CACC,cACD,CCtBD",sourcesContent:[`/*
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
`],sourceRoot:""}]);const E=C},3350:(f,b,m)=>{m.d(b,{A:()=>E});var A=m(9372),v=m.n(A),x=m(935),C=m.n(x)()(v());C.push([f.id,".ck.ck-image-insert-url .ck-image-insert-url__action-row{display:grid;grid-template-columns:repeat(2,1fr)}:root{--ck-image-insert-insert-by-url-width:250px}.ck.ck-image-insert-url{--ck-input-width:100%}.ck.ck-image-insert-url .ck-image-insert-url__action-row{grid-column-gap:var(--ck-spacing-large);margin-top:var(--ck-spacing-large)}.ck.ck-image-insert-url .ck-image-insert-url__action-row .ck-button-cancel,.ck.ck-image-insert-url .ck-image-insert-url__action-row .ck-button-save{justify-content:center;min-width:auto}.ck.ck-image-insert-url .ck-image-insert-url__action-row .ck-button .ck-button__label{color:var(--ck-color-text)}.ck.ck-image-insert-form>.ck.ck-button{display:block;padding:var(--ck-list-button-padding);width:100%}[dir=ltr] .ck.ck-image-insert-form>.ck.ck-button{text-align:left}[dir=rtl] .ck.ck-image-insert-form>.ck.ck-button{text-align:right}.ck.ck-image-insert-form>.ck.ck-collapsible:not(:first-child){border-top:1px solid var(--ck-color-base-border)}.ck.ck-image-insert-form>.ck.ck-collapsible:not(:last-child){border-bottom:1px solid var(--ck-color-base-border)}.ck.ck-image-insert-form>.ck.ck-collapsible,.ck.ck-image-insert-form>.ck.ck-image-insert-url{min-width:var(--ck-image-insert-insert-by-url-width)}.ck.ck-image-insert-form>.ck.ck-image-insert-url{padding:var(--ck-spacing-large)}.ck.ck-image-insert-form:focus{outline:none}","",{version:3,sources:["webpack://./../ckeditor5-image/theme/imageinsert.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-image/imageinsert.css"],names:[],mappings:"AAMC,yDACC,YAAa,CACb,mCACD,CCFD,MACC,2CACD,CAEA,wBACC,qBAgBD,CAdC,yDACC,uCAAwC,CACxC,kCAWD,CATC,oJAEC,sBAAuB,CACvB,cACD,CAEA,sFACC,0BACD,CAKD,uCACC,aAAc,CAEd,qCAAsC,CADtC,UAUD,CAZA,iDAME,eAMF,CAZA,iDAUE,gBAEF,CAGC,8DACC,gDACD,CAEA,6DACC,mDACD,CAMD,6FAJC,oDAOD,CAHA,iDAEC,+BACD,CAEA,+BACC,YACD",sourcesContent:[`/*
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
`],sourceRoot:""}]);const E=C},7378:(f,b,m)=>{m.d(b,{A:()=>E});var A=m(9372),v=m.n(A),x=m(935),C=m.n(x)()(v());C.push([f.id,".ck.ck-editor__editable img.image_placeholder{background-size:100% 100%}","",{version:3,sources:["webpack://./../ckeditor5-image/theme/imageplaceholder.css"],names:[],mappings:"AAMC,8CACC,yBACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-editor__editable {
	& img.image_placeholder {
		background-size: 100% 100%;
	}
}
`],sourceRoot:""}]);const E=C},3469:(f,b,m)=>{m.d(b,{A:()=>E});var A=m(9372),v=m.n(A),x=m(935),C=m.n(x)()(v());C.push([f.id,".ck-content img.image_resized{height:auto}.ck-content .image.image_resized{box-sizing:border-box;display:block;max-width:100%}.ck-content .image.image_resized img{width:100%}.ck-content .image.image_resized>figcaption{display:block}.ck.ck-editor__editable td .image-inline.image_resized img,.ck.ck-editor__editable th .image-inline.image_resized img{max-width:100%}[dir=ltr] .ck.ck-button.ck-button_with-text.ck-resize-image-button .ck-button__icon{margin-right:var(--ck-spacing-standard)}[dir=rtl] .ck.ck-button.ck-button_with-text.ck-resize-image-button .ck-button__icon{margin-left:var(--ck-spacing-standard)}.ck.ck-dropdown .ck-button.ck-resize-image-button .ck-button__label{width:4em}","",{version:3,sources:["webpack://./../ckeditor5-image/theme/imageresize.css"],names:[],mappings:"AAMA,8BACC,WACD,CAEA,iCAQC,qBAAsB,CADtB,aAAc,CANd,cAkBD,CATC,qCAEC,UACD,CAEA,4CAEC,aACD,CAQC,sHACC,cACD,CAIF,oFACC,uCACD,CAEA,oFACC,sCACD,CAEA,oEACC,SACD",sourcesContent:[`/*
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
`],sourceRoot:""}]);const E=C},6386:(f,b,m)=>{m.d(b,{A:()=>E});var A=m(9372),v=m.n(A),x=m(935),C=m.n(x)()(v());C.push([f.id,":root{--ck-image-style-spacing:1.5em;--ck-inline-image-style-spacing:calc(var(--ck-image-style-spacing)/2)}.ck-content .image-style-block-align-left,.ck-content .image-style-block-align-right{max-width:calc(100% - var(--ck-image-style-spacing))}.ck-content .image-style-align-left,.ck-content .image-style-align-right{clear:none}.ck-content .image-style-side{float:right;margin-left:var(--ck-image-style-spacing);max-width:50%}.ck-content .image-style-align-left{float:left;margin-right:var(--ck-image-style-spacing)}.ck-content .image-style-align-center{margin-left:auto;margin-right:auto}.ck-content .image-style-align-right{float:right;margin-left:var(--ck-image-style-spacing)}.ck-content .image-style-block-align-right{margin-left:auto;margin-right:0}.ck-content .image-style-block-align-left{margin-left:0;margin-right:auto}.ck-content p+.image-style-align-left,.ck-content p+.image-style-align-right,.ck-content p+.image-style-side{margin-top:0}.ck-content .image-inline.image-style-align-left,.ck-content .image-inline.image-style-align-right{margin-bottom:var(--ck-inline-image-style-spacing);margin-top:var(--ck-inline-image-style-spacing)}.ck-content .image-inline.image-style-align-left{margin-right:var(--ck-inline-image-style-spacing)}.ck-content .image-inline.image-style-align-right{margin-left:var(--ck-inline-image-style-spacing)}.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open>.ck-splitbutton__action:not(.ck-disabled),.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open>.ck-splitbutton__arrow:not(.ck-disabled),.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open>.ck-splitbutton__arrow:not(.ck-disabled):not(:hover),.ck.ck-splitbutton.ck-splitbutton_flatten:hover>.ck-splitbutton__action:not(.ck-disabled),.ck.ck-splitbutton.ck-splitbutton_flatten:hover>.ck-splitbutton__arrow:not(.ck-disabled),.ck.ck-splitbutton.ck-splitbutton_flatten:hover>.ck-splitbutton__arrow:not(.ck-disabled):not(:hover){background-color:var(--ck-color-button-on-background)}.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open>.ck-splitbutton__action:not(.ck-disabled):after,.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open>.ck-splitbutton__arrow:not(.ck-disabled):after,.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open>.ck-splitbutton__arrow:not(.ck-disabled):not(:hover):after,.ck.ck-splitbutton.ck-splitbutton_flatten:hover>.ck-splitbutton__action:not(.ck-disabled):after,.ck.ck-splitbutton.ck-splitbutton_flatten:hover>.ck-splitbutton__arrow:not(.ck-disabled):after,.ck.ck-splitbutton.ck-splitbutton_flatten:hover>.ck-splitbutton__arrow:not(.ck-disabled):not(:hover):after{display:none}.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open:hover>.ck-splitbutton__action:not(.ck-disabled),.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open:hover>.ck-splitbutton__arrow:not(.ck-disabled),.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open:hover>.ck-splitbutton__arrow:not(.ck-disabled):not(:hover){background-color:var(--ck-color-button-on-hover-background)}","",{version:3,sources:["webpack://./../ckeditor5-image/theme/imagestyle.css"],names:[],mappings:"AAKA,MACC,8BAA+B,CAC/B,qEACD,CAMC,qFAEC,oDACD,CAIA,yEAEC,UACD,CAEA,8BACC,WAAY,CACZ,yCAA0C,CAC1C,aACD,CAEA,oCACC,UAAW,CACX,0CACD,CAEA,sCACC,gBAAiB,CACjB,iBACD,CAEA,qCACC,WAAY,CACZ,yCACD,CAEA,2CAEC,gBAAiB,CADjB,cAED,CAEA,0CACC,aAAc,CACd,iBACD,CAGA,6GAGC,YACD,CAGC,mGAGC,kDAAmD,CADnD,+CAED,CAEA,iDACC,iDACD,CAEA,kDACC,gDACD,CAUC,0lBAGC,qDAKD,CAHC,8nBACC,YACD,CAKD,oVAGC,2DACD",sourcesContent:[`/*
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
`],sourceRoot:""}]);const E=C},7693:(f,b,m)=>{m.d(b,{A:()=>E});var A=m(9372),v=m.n(A),x=m(935),C=m.n(x)()(v());C.push([f.id,'.ck-image-upload-complete-icon{border-radius:50%;display:block;position:absolute;right:min(var(--ck-spacing-medium),6%);top:min(var(--ck-spacing-medium),6%);z-index:1}.ck-image-upload-complete-icon:after{content:"";position:absolute}:root{--ck-color-image-upload-icon:#fff;--ck-color-image-upload-icon-background:#008a00;--ck-image-upload-icon-size:20;--ck-image-upload-icon-width:2px;--ck-image-upload-icon-is-visible:clamp(0px,100% - 50px,1px)}.ck-image-upload-complete-icon{animation-delay:0ms,3s;animation-duration:.5s,.5s;animation-fill-mode:forwards,forwards;animation-name:ck-upload-complete-icon-show,ck-upload-complete-icon-hide;background:var(--ck-color-image-upload-icon-background);font-size:calc(1px*var(--ck-image-upload-icon-size));height:calc(var(--ck-image-upload-icon-is-visible)*var(--ck-image-upload-icon-size));opacity:0;overflow:hidden;width:calc(var(--ck-image-upload-icon-is-visible)*var(--ck-image-upload-icon-size))}.ck-image-upload-complete-icon:after{animation-delay:.5s;animation-duration:.5s;animation-fill-mode:forwards;animation-name:ck-upload-complete-icon-check;border-right:var(--ck-image-upload-icon-width) solid var(--ck-color-image-upload-icon);border-top:var(--ck-image-upload-icon-width) solid var(--ck-color-image-upload-icon);box-sizing:border-box;height:0;left:25%;opacity:0;top:50%;transform:scaleX(-1) rotate(135deg);transform-origin:left top;width:0}@media (prefers-reduced-motion:reduce){.ck-image-upload-complete-icon{animation-duration:0ms}.ck-image-upload-complete-icon:after{animation:none;height:.45em;opacity:1;width:.3em}}@keyframes ck-upload-complete-icon-show{0%{opacity:0}to{opacity:1}}@keyframes ck-upload-complete-icon-hide{0%{opacity:1}to{opacity:0}}@keyframes ck-upload-complete-icon-check{0%{height:0;opacity:1;width:0}33%{height:0;width:.3em}to{height:.45em;opacity:1;width:.3em}}',"",{version:3,sources:["webpack://./../ckeditor5-image/theme/imageuploadicon.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-image/imageuploadicon.css"],names:[],mappings:"AAKA,+BAUC,iBAAkB,CATlB,aAAc,CACd,iBAAkB,CAOlB,sCAAwC,CADxC,oCAAsC,CAGtC,SAMD,CAJC,qCACC,UAAW,CACX,iBACD,CChBD,MACC,iCAA8C,CAC9C,+CAA4D,CAG5D,8BAA+B,CAC/B,gCAAiC,CACjC,4DACD,CAEA,+BAWC,sBAA4B,CAN5B,0BAAgC,CADhC,qCAAuC,CADvC,wEAA0E,CAD1E,uDAAwD,CAMxD,oDAAuD,CAWvD,oFAAuF,CAlBvF,SAAU,CAgBV,eAAgB,CAChB,mFAqCD,CAjCC,qCAgBC,mBAAsB,CADtB,sBAAyB,CAEzB,4BAA6B,CAH7B,4CAA6C,CAF7C,sFAAuF,CADvF,oFAAqF,CASrF,qBAAsB,CAdtB,QAAS,CAJT,QAAS,CAGT,SAAU,CADV,OAAQ,CAKR,mCAAoC,CACpC,yBAA0B,CAH1B,OAcD,CAEA,uCA7CD,+BA8CE,sBASF,CAPE,qCACC,cAAe,CAGf,YAAc,CAFd,SAAU,CACV,UAED,CACD,CAGD,wCACC,GACC,SACD,CAEA,GACC,SACD,CACD,CAEA,wCACC,GACC,SACD,CAEA,GACC,SACD,CACD,CAEA,yCACC,GAGC,QAAS,CAFT,SAAU,CACV,OAED,CACA,IAEC,QAAS,CADT,UAED,CACA,GAGC,YAAc,CAFd,SAAU,CACV,UAED,CACD",sourcesContent:[`/*
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
`],sourceRoot:""}]);const E=C},1559:(f,b,m)=>{m.d(b,{A:()=>E});var A=m(9372),v=m.n(A),x=m(935),C=m.n(x)()(v());C.push([f.id,'.ck .ck-upload-placeholder-loader{align-items:center;display:flex;justify-content:center;left:0;position:absolute;top:0}.ck .ck-upload-placeholder-loader:before{content:"";position:relative}:root{--ck-color-upload-placeholder-loader:#b3b3b3;--ck-upload-placeholder-loader-size:32px;--ck-upload-placeholder-image-aspect-ratio:2.8}.ck .ck-image-upload-placeholder{margin:0;width:100%}.ck .ck-image-upload-placeholder.image-inline{width:calc(var(--ck-upload-placeholder-loader-size)*2*var(--ck-upload-placeholder-image-aspect-ratio))}.ck .ck-image-upload-placeholder img{aspect-ratio:var(--ck-upload-placeholder-image-aspect-ratio)}.ck .ck-upload-placeholder-loader{height:100%;width:100%}.ck .ck-upload-placeholder-loader:before{animation:ck-upload-placeholder-loader 1s linear infinite;border-radius:50%;border-right:2px solid transparent;border-top:3px solid var(--ck-color-upload-placeholder-loader);height:var(--ck-upload-placeholder-loader-size);width:var(--ck-upload-placeholder-loader-size)}@keyframes ck-upload-placeholder-loader{to{transform:rotate(1turn)}}',"",{version:3,sources:["webpack://./../ckeditor5-image/theme/imageuploadloader.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-image/imageuploadloader.css"],names:[],mappings:"AAKA,kCAGC,kBAAmB,CADnB,YAAa,CAEb,sBAAuB,CAEvB,MAAO,CALP,iBAAkB,CAIlB,KAOD,CAJC,yCACC,UAAW,CACX,iBACD,CCXD,MACC,4CAAqD,CACrD,wCAAyC,CACzC,8CACD,CAEA,iCAGC,QAAS,CADT,UAgBD,CAbC,8CACC,sGACD,CAEA,qCAOC,4DACD,CAGD,kCAEC,WAAY,CADZ,UAWD,CARC,yCAMC,yDAA0D,CAH1D,iBAAkB,CAElB,kCAAmC,CADnC,8DAA+D,CAF/D,+CAAgD,CADhD,8CAMD,CAGD,wCACC,GACC,uBACD,CACD",sourcesContent:[`/*
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
`],sourceRoot:""}]);const E=C},2267:(f,b,m)=>{m.d(b,{A:()=>E});var A=m(9372),v=m.n(A),x=m(935),C=m.n(x)()(v());C.push([f.id,".ck.ck-editor__editable .image,.ck.ck-editor__editable .image-inline{position:relative}.ck.ck-editor__editable .image .ck-progress-bar,.ck.ck-editor__editable .image-inline .ck-progress-bar{left:0;position:absolute;top:0}.ck.ck-editor__editable .image-inline.ck-appear,.ck.ck-editor__editable .image.ck-appear{animation:fadeIn .7s}@media (prefers-reduced-motion:reduce){.ck.ck-editor__editable .image-inline.ck-appear,.ck.ck-editor__editable .image.ck-appear{animation:none;opacity:1}}.ck.ck-editor__editable .image .ck-progress-bar,.ck.ck-editor__editable .image-inline .ck-progress-bar{background:var(--ck-color-upload-bar-background);height:2px;transition:width .1s;width:0}@keyframes fadeIn{0%{opacity:0}to{opacity:1}}","",{version:3,sources:["webpack://./../ckeditor5-image/theme/imageuploadprogress.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-image/imageuploadprogress.css"],names:[],mappings:"AAMC,qEAEC,iBACD,CAGA,uGAIC,MAAO,CAFP,iBAAkB,CAClB,KAED,CCRC,yFACC,oBAMD,CAJC,uCAHD,yFAKE,cAAe,CADf,SAGF,CADC,CAKF,uGAIC,gDAAiD,CAFjD,UAAW,CAGX,oBAAuB,CAFvB,OAGD,CAGD,kBACC,GAAO,SAAY,CACnB,GAAO,SAAY,CACpB",sourcesContent:[`/*
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
`],sourceRoot:""}]);const E=C},4062:(f,b,m)=>{m.d(b,{A:()=>E});var A=m(9372),v=m.n(A),x=m(935),C=m.n(x)()(v());C.push([f.id,".ck.ck-text-alternative-form{display:flex;flex-direction:row;flex-wrap:nowrap}.ck.ck-text-alternative-form .ck-labeled-field-view{display:inline-block}.ck.ck-text-alternative-form .ck-label{display:none}@media screen and (max-width:600px){.ck.ck-text-alternative-form{flex-wrap:wrap}.ck.ck-text-alternative-form .ck-labeled-field-view{flex-basis:100%}.ck.ck-text-alternative-form .ck-button{flex-basis:50%}}","",{version:3,sources:["webpack://./../ckeditor5-image/theme/textalternativeform.css","webpack://./../ckeditor5-ui/theme/mixins/_rwd.css"],names:[],mappings:"AAOA,6BACC,YAAa,CACb,kBAAmB,CACnB,gBAqBD,CAnBC,oDACC,oBACD,CAEA,uCACC,YACD,CCZA,oCDCD,6BAcE,cAUF,CARE,oDACC,eACD,CAEA,wCACC,cACD,CCrBD",sourcesContent:[`/*
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
`],sourceRoot:""}]);const E=C},7719:(f,b,m)=>{m.d(b,{A:()=>E});var A=m(9372),v=m.n(A),x=m(935),C=m.n(x)()(v());C.push([f.id,".ck .ck-link_selected{background:var(--ck-color-link-selected-background)}.ck .ck-link_selected span.image-inline{outline:var(--ck-widget-outline-thickness) solid var(--ck-color-link-selected-background)}.ck .ck-fake-link-selection{background:var(--ck-color-link-fake-selection)}.ck .ck-fake-link-selection_collapsed{border-right:1px solid var(--ck-color-base-text);height:100%;margin-right:-1px;outline:1px solid hsla(0,0%,100%,.5)}","",{version:3,sources:["webpack://./../ckeditor5-theme-lark/theme/ckeditor5-link/link.css"],names:[],mappings:"AAMA,sBACC,mDAMD,CAHC,wCACC,yFACD,CAOD,4BACC,8CACD,CAGA,sCAEC,gDAAiD,CADjD,WAAY,CAEZ,iBAAkB,CAClB,oCACD",sourcesContent:[`/*
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
`],sourceRoot:""}]);const E=C},8762:(f,b,m)=>{m.d(b,{A:()=>E});var A=m(9372),v=m.n(A),x=m(935),C=m.n(x)()(v());C.push([f.id,".ck.ck-link-actions{display:flex;flex-direction:row;flex-wrap:nowrap}.ck.ck-link-actions .ck-link-actions__preview{display:inline-block}.ck.ck-link-actions .ck-link-actions__preview .ck-button__label{overflow:hidden}@media screen and (max-width:600px){.ck.ck-link-actions{flex-wrap:wrap}.ck.ck-link-actions .ck-link-actions__preview{flex-basis:100%}.ck.ck-link-actions .ck-button:not(.ck-link-actions__preview){flex-basis:50%}}.ck.ck-link-actions .ck-button.ck-link-actions__preview{padding-left:0;padding-right:0}.ck.ck-link-actions .ck-button.ck-link-actions__preview .ck-button__label{color:var(--ck-color-link-default);cursor:pointer;max-width:var(--ck-input-width);min-width:3em;padding:0 var(--ck-spacing-medium);text-align:center;text-overflow:ellipsis}.ck.ck-link-actions .ck-button.ck-link-actions__preview .ck-button__label:hover{text-decoration:underline}.ck.ck-link-actions .ck-button.ck-link-actions__preview,.ck.ck-link-actions .ck-button.ck-link-actions__preview:active,.ck.ck-link-actions .ck-button.ck-link-actions__preview:focus,.ck.ck-link-actions .ck-button.ck-link-actions__preview:hover{background:none}.ck.ck-link-actions .ck-button.ck-link-actions__preview:active{box-shadow:none}.ck.ck-link-actions .ck-button.ck-link-actions__preview:focus .ck-button__label{text-decoration:underline}[dir=ltr] .ck.ck-link-actions .ck-button:not(:first-child),[dir=rtl] .ck.ck-link-actions .ck-button:not(:last-child){margin-left:var(--ck-spacing-standard)}@media screen and (max-width:600px){.ck.ck-link-actions .ck-button.ck-link-actions__preview{margin:var(--ck-spacing-standard) var(--ck-spacing-standard) 0}.ck.ck-link-actions .ck-button.ck-link-actions__preview .ck-button__label{max-width:100%;min-width:0}[dir=ltr] .ck.ck-link-actions .ck-button:not(.ck-link-actions__preview),[dir=rtl] .ck.ck-link-actions .ck-button:not(.ck-link-actions__preview){margin-left:0}}","",{version:3,sources:["webpack://./../ckeditor5-link/theme/linkactions.css","webpack://./../ckeditor5-ui/theme/mixins/_rwd.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-link/linkactions.css"],names:[],mappings:"AAOA,oBACC,YAAa,CACb,kBAAmB,CACnB,gBAqBD,CAnBC,8CACC,oBAKD,CAHC,gEACC,eACD,CCXD,oCDCD,oBAcE,cAUF,CARE,8CACC,eACD,CAEA,8DACC,cACD,CCrBD,CCIA,wDACC,cAAe,CACf,eAmCD,CAjCC,0EAEC,kCAAmC,CAEnC,cAAe,CAIf,+BAAgC,CAChC,aAAc,CARd,kCAAmC,CASnC,iBAAkB,CAPlB,sBAYD,CAHC,gFACC,yBACD,CAGD,mPAIC,eACD,CAEA,+DACC,eACD,CAGC,gFACC,yBACD,CAWD,qHACC,sCACD,CDtDD,oCC0DC,wDACC,8DAMD,CAJC,0EAEC,cAAe,CADf,WAED,CAGD,gJAME,aAEF,CDzED",sourcesContent:[`/*
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
`],sourceRoot:""}]);const E=C},3817:(f,b,m)=>{m.d(b,{A:()=>E});var A=m(9372),v=m.n(A),x=m(935),C=m.n(x)()(v());C.push([f.id,".ck.ck-link-form{align-items:flex-start;display:flex}.ck.ck-link-form .ck-label{display:none}@media screen and (max-width:600px){.ck.ck-link-form{flex-wrap:wrap}.ck.ck-link-form .ck-labeled-field-view{flex-basis:100%}.ck.ck-link-form .ck-button{flex-basis:50%}}.ck.ck-link-form_layout-vertical{display:block}.ck.ck-link-form_layout-vertical .ck-button.ck-button-cancel,.ck.ck-link-form_layout-vertical .ck-button.ck-button-save{margin-top:var(--ck-spacing-medium)}.ck.ck-link-form_layout-vertical{min-width:var(--ck-input-width);padding:0}.ck.ck-link-form_layout-vertical .ck-labeled-field-view{margin:var(--ck-spacing-large) var(--ck-spacing-large) var(--ck-spacing-small)}.ck.ck-link-form_layout-vertical .ck-labeled-field-view .ck-input-text{min-width:0;width:100%}.ck.ck-link-form_layout-vertical>.ck-button{border-radius:0;margin:0;padding:var(--ck-spacing-standard);width:50%}.ck.ck-link-form_layout-vertical>.ck-button:not(:focus){border-top:1px solid var(--ck-color-base-border)}[dir=ltr] .ck.ck-link-form_layout-vertical>.ck-button,[dir=rtl] .ck.ck-link-form_layout-vertical>.ck-button{margin-left:0}[dir=rtl] .ck.ck-link-form_layout-vertical>.ck-button:last-of-type{border-right:1px solid var(--ck-color-base-border)}.ck.ck-link-form_layout-vertical .ck.ck-list{margin:var(--ck-spacing-standard) var(--ck-spacing-large)}.ck.ck-link-form_layout-vertical .ck.ck-list .ck-button.ck-switchbutton{padding:0;width:100%}.ck.ck-link-form_layout-vertical .ck.ck-list .ck-button.ck-switchbutton:hover{background:none}","",{version:3,sources:["webpack://./../ckeditor5-link/theme/linkform.css","webpack://./../ckeditor5-ui/theme/mixins/_rwd.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-link/linkform.css"],names:[],mappings:"AAOA,iBAEC,sBAAuB,CADvB,YAkBD,CAfC,2BACC,YACD,CCPA,oCDCD,iBASE,cAUF,CARE,wCACC,eACD,CAEA,4BACC,cACD,CChBD,CDwBD,iCACC,aAYD,CALE,wHAEC,mCACD,CEhCF,iCAEC,+BAAgC,CADhC,SAgDD,CA7CC,wDACC,8EAMD,CAJC,uEACC,WAAY,CACZ,UACD,CAGD,4CAIC,eAAgB,CAFhB,QAAS,CADT,kCAAmC,CAEnC,SAkBD,CAfC,wDACC,gDACD,CARD,4GAeE,aAMF,CAJE,mEACC,kDACD,CAKF,6CACC,yDAUD,CARC,wEACC,SAAU,CACV,UAKD,CAHC,8EACC,eACD",sourcesContent:[`/*
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
`],sourceRoot:""}]);const E=C},4808:(f,b,m)=>{m.d(b,{A:()=>E});var A=m(9372),v=m.n(A),x=m(935),C=m.n(x)()(v());C.push([f.id,'.ck.ck-editor__editable a span.image-inline:after,.ck.ck-editor__editable figure.image>a:after{display:block;position:absolute}:root{--ck-link-image-indicator-icon-size:20;--ck-link-image-indicator-icon-is-visible:clamp(0px,100% - 50px,1px)}.ck.ck-editor__editable a span.image-inline:after,.ck.ck-editor__editable figure.image>a:after{background-color:rgba(0,0,0,.4);background-image:url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyMCAyMCI+PHBhdGggZmlsbD0iI2ZmZiIgZD0ibTExLjA3NyAxNSAuOTkxLTEuNDE2YS43NS43NSAwIDEgMSAxLjIyOS44NmwtMS4xNDggMS42NGEuNzUuNzUgMCAwIDEtLjIxNy4yMDYgNS4yNTEgNS4yNTEgMCAwIDEtOC41MDMtNS45NTUuNy43IDAgMCAxIC4xMi0uMjc0bDEuMTQ3LTEuNjM5YS43NS43NSAwIDEgMSAxLjIyOC44Nkw0LjkzMyAxMC43bC4wMDYuMDAzYTMuNzUgMy43NSAwIDAgMCA2LjEzMiA0LjI5NHptNS40OTQtNS4zMzVhLjc1Ljc1IDAgMCAxLS4xMi4yNzRsLTEuMTQ3IDEuNjM5YS43NS43NSAwIDEgMS0xLjIyOC0uODZsLjg2LTEuMjNhMy43NSAzLjc1IDAgMCAwLTYuMTQ0LTQuMzAxbC0uODYgMS4yMjlhLjc1Ljc1IDAgMCAxLTEuMjI5LS44NmwxLjE0OC0xLjY0YS43NS43NSAwIDAgMSAuMjE3LS4yMDYgNS4yNTEgNS4yNTEgMCAwIDEgOC41MDMgNS45NTVtLTQuNTYzLTIuNTMyYS43NS43NSAwIDAgMSAuMTg0IDEuMDQ1bC0zLjE1NSA0LjUwNWEuNzUuNzUgMCAxIDEtMS4yMjktLjg2bDMuMTU1LTQuNTA2YS43NS43NSAwIDAgMSAxLjA0NS0uMTg0Ii8+PC9zdmc+");background-position:50%;background-repeat:no-repeat;background-size:14px;border-radius:100%;content:"";height:calc(var(--ck-link-image-indicator-icon-is-visible)*var(--ck-link-image-indicator-icon-size));overflow:hidden;right:min(var(--ck-spacing-medium),6%);top:min(var(--ck-spacing-medium),6%);width:calc(var(--ck-link-image-indicator-icon-is-visible)*var(--ck-link-image-indicator-icon-size))}',"",{version:3,sources:["webpack://./../ckeditor5-link/theme/linkimage.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-link/linkimage.css"],names:[],mappings:"AASE,+FACC,aAAc,CACd,iBACD,CCPF,MAEC,sCAAuC,CACvC,oEACD,CAME,+FAUC,+BAAqC,CACrC,k2BAA+3B,CAG/3B,uBAA2B,CAD3B,2BAA4B,CAD5B,oBAAqB,CAGrB,kBAAmB,CAdnB,UAAW,CAsBX,oGAAuG,CAFvG,eAAgB,CAbhB,sCAAwC,CADxC,oCAAsC,CAetC,mGAED",sourcesContent:[`/*
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

`],sourceRoot:""}]);const E=C},1232:(f,b,m)=>{m.d(b,{A:()=>E});var A=m(9372),v=m.n(A),x=m(935),C=m.n(x)()(v());C.push([f.id,".ck-editor__editable .ck-list-bogus-paragraph{display:block}","",{version:3,sources:["webpack://./../ckeditor5-list/theme/documentlist.css"],names:[],mappings:"AAKA,8CACC,aACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck-editor__editable .ck-list-bogus-paragraph {
	display: block;
}
`],sourceRoot:""}]);const E=C},6903:(f,b,m)=>{m.d(b,{A:()=>E});var A=m(9372),v=m.n(A),x=m(935),C=m.n(x)()(v());C.push([f.id,".ck-content ol{list-style-type:decimal}.ck-content ol ol{list-style-type:lower-latin}.ck-content ol ol ol{list-style-type:lower-roman}.ck-content ol ol ol ol{list-style-type:upper-latin}.ck-content ol ol ol ol ol{list-style-type:upper-roman}.ck-content ul{list-style-type:disc}.ck-content ul ul{list-style-type:circle}.ck-content ul ul ul,.ck-content ul ul ul ul{list-style-type:square}","",{version:3,sources:["webpack://./../ckeditor5-list/theme/list.css"],names:[],mappings:"AAKA,eACC,uBAiBD,CAfC,kBACC,2BAaD,CAXC,qBACC,2BASD,CAPC,wBACC,2BAKD,CAHC,2BACC,2BACD,CAMJ,eACC,oBAaD,CAXC,kBACC,sBASD,CAJE,6CACC,sBACD",sourcesContent:[`/*
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
`],sourceRoot:""}]);const E=C},9968:(f,b,m)=>{m.d(b,{A:()=>E});var A=m(9372),v=m.n(A),x=m(935),C=m.n(x)()(v());C.push([f.id,".ck.ck-list-properties.ck-list-properties_without-styles{padding:var(--ck-spacing-large)}.ck.ck-list-properties.ck-list-properties_without-styles>*{min-width:14em}.ck.ck-list-properties.ck-list-properties_without-styles>*+*{margin-top:var(--ck-spacing-standard)}.ck.ck-list-properties.ck-list-properties_with-numbered-properties>.ck-list-styles-list{grid-template-columns:repeat(4,auto)}.ck.ck-list-properties.ck-list-properties_with-numbered-properties>.ck-collapsible{border-top:1px solid var(--ck-color-base-border)}.ck.ck-list-properties.ck-list-properties_with-numbered-properties>.ck-collapsible>.ck-collapsible__children>*{width:100%}.ck.ck-list-properties.ck-list-properties_with-numbered-properties>.ck-collapsible>.ck-collapsible__children>*+*{margin-top:var(--ck-spacing-standard)}.ck.ck-list-properties .ck.ck-numbered-list-properties__start-index .ck-input{min-width:auto;width:100%}.ck.ck-list-properties .ck.ck-numbered-list-properties__reversed-order{background:transparent;margin-bottom:calc(var(--ck-spacing-tiny)*-1);padding-left:0;padding-right:0}.ck.ck-list-properties .ck.ck-numbered-list-properties__reversed-order:active,.ck.ck-list-properties .ck.ck-numbered-list-properties__reversed-order:hover{background:none;border-color:transparent;box-shadow:none}","",{version:3,sources:["webpack://./../ckeditor5-theme-lark/theme/ckeditor5-list/listproperties.css"],names:[],mappings:"AAOC,yDACC,+BASD,CAPC,2DACC,cAKD,CAHC,6DACC,qCACD,CASD,wFACC,oCACD,CAGA,mFACC,gDAWD,CARE,+GACC,UAKD,CAHC,iHACC,qCACD,CAMJ,8EACC,cAAe,CACf,UACD,CAEA,uEACC,sBAAuB,CAGvB,6CAAgD,CAFhD,cAAe,CACf,eAQD,CALC,2JAGC,eAAgB,CADhB,wBAAyB,CADzB,eAGD",sourcesContent:[`/*
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
`],sourceRoot:""}]);const E=C},7141:(f,b,m)=>{m.d(b,{A:()=>E});var A=m(9372),v=m.n(A),x=m(935),C=m.n(x)()(v());C.push([f.id,".ck.ck-list-styles-list{display:grid}:root{--ck-list-style-button-size:44px}.ck.ck-list-styles-list{column-gap:var(--ck-spacing-medium);grid-template-columns:repeat(3,auto);padding:var(--ck-spacing-large);row-gap:var(--ck-spacing-medium)}.ck.ck-list-styles-list .ck-button{box-sizing:content-box;margin:0;padding:0}.ck.ck-list-styles-list .ck-button,.ck.ck-list-styles-list .ck-button .ck-icon{height:var(--ck-list-style-button-size);width:var(--ck-list-style-button-size)}","",{version:3,sources:["webpack://./../ckeditor5-list/theme/liststyles.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-list/liststyles.css"],names:[],mappings:"AAKA,wBACC,YACD,CCFA,MACC,gCACD,CAEA,wBAGC,mCAAoC,CAFpC,oCAAwC,CAGxC,+BAAgC,CAFhC,gCA4BD,CAxBC,mCAiBC,sBAAuB,CAPvB,QAAS,CANT,SAmBD,CAJC,+EAhBA,uCAAwC,CADxC,sCAoBA",sourcesContent:[`/*
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
`],sourceRoot:""}]);const E=C},8991:(f,b,m)=>{m.d(b,{A:()=>E});var A=m(9372),v=m.n(A),x=m(935),C=m.n(x)()(v());C.push([f.id,':root{--ck-todo-list-checkmark-size:16px}.ck-content .todo-list{list-style:none}.ck-content .todo-list li{margin-bottom:5px;position:relative}.ck-content .todo-list li .todo-list{margin-top:5px}.ck-content .todo-list .todo-list__label>input{-webkit-appearance:none;border:0;display:inline-block;height:var(--ck-todo-list-checkmark-size);left:-25px;margin-left:0;margin-right:-15px;position:relative;right:0;vertical-align:middle;width:var(--ck-todo-list-checkmark-size)}.ck-content[dir=rtl] .todo-list .todo-list__label>input{left:0;margin-left:-15px;margin-right:0;right:-25px}.ck-content .todo-list .todo-list__label>input:before{border:1px solid #333;border-radius:2px;box-sizing:border-box;content:"";display:block;height:100%;position:absolute;transition:box-shadow .25s ease-in-out;width:100%}@media (prefers-reduced-motion:reduce){.ck-content .todo-list .todo-list__label>input:before{transition:none}}.ck-content .todo-list .todo-list__label>input:after{border-color:transparent;border-style:solid;border-width:0 calc(var(--ck-todo-list-checkmark-size)/8) calc(var(--ck-todo-list-checkmark-size)/8) 0;box-sizing:content-box;content:"";display:block;height:calc(var(--ck-todo-list-checkmark-size)/2.6);left:calc(var(--ck-todo-list-checkmark-size)/3);pointer-events:none;position:absolute;top:calc(var(--ck-todo-list-checkmark-size)/5.3);transform:rotate(45deg);width:calc(var(--ck-todo-list-checkmark-size)/5.3)}.ck-content .todo-list .todo-list__label>input[checked]:before{background:#26ab33;border-color:#26ab33}.ck-content .todo-list .todo-list__label>input[checked]:after{border-color:#fff}.ck-content .todo-list .todo-list__label .todo-list__label__description{vertical-align:middle}.ck-content .todo-list .todo-list__label.todo-list__label_without-description input[type=checkbox]{position:absolute}.ck-editor__editable.ck-content .todo-list .todo-list__label>input,.ck-editor__editable.ck-content .todo-list .todo-list__label>span[contenteditable=false]>input{cursor:pointer}.ck-editor__editable.ck-content .todo-list .todo-list__label>input:hover:before,.ck-editor__editable.ck-content .todo-list .todo-list__label>span[contenteditable=false]>input:hover:before{box-shadow:0 0 0 5px rgba(0,0,0,.1)}.ck-editor__editable.ck-content .todo-list .todo-list__label>span[contenteditable=false]>input{-webkit-appearance:none;border:0;display:inline-block;height:var(--ck-todo-list-checkmark-size);left:-25px;margin-left:0;margin-right:-15px;position:relative;right:0;vertical-align:middle;width:var(--ck-todo-list-checkmark-size)}.ck-editor__editable.ck-content[dir=rtl] .todo-list .todo-list__label>span[contenteditable=false]>input{left:0;margin-left:-15px;margin-right:0;right:-25px}.ck-editor__editable.ck-content .todo-list .todo-list__label>span[contenteditable=false]>input:before{border:1px solid #333;border-radius:2px;box-sizing:border-box;content:"";display:block;height:100%;position:absolute;transition:box-shadow .25s ease-in-out;width:100%}@media (prefers-reduced-motion:reduce){.ck-editor__editable.ck-content .todo-list .todo-list__label>span[contenteditable=false]>input:before{transition:none}}.ck-editor__editable.ck-content .todo-list .todo-list__label>span[contenteditable=false]>input:after{border-color:transparent;border-style:solid;border-width:0 calc(var(--ck-todo-list-checkmark-size)/8) calc(var(--ck-todo-list-checkmark-size)/8) 0;box-sizing:content-box;content:"";display:block;height:calc(var(--ck-todo-list-checkmark-size)/2.6);left:calc(var(--ck-todo-list-checkmark-size)/3);pointer-events:none;position:absolute;top:calc(var(--ck-todo-list-checkmark-size)/5.3);transform:rotate(45deg);width:calc(var(--ck-todo-list-checkmark-size)/5.3)}.ck-editor__editable.ck-content .todo-list .todo-list__label>span[contenteditable=false]>input[checked]:before{background:#26ab33;border-color:#26ab33}.ck-editor__editable.ck-content .todo-list .todo-list__label>span[contenteditable=false]>input[checked]:after{border-color:#fff}.ck-editor__editable.ck-content .todo-list .todo-list__label.todo-list__label_without-description input[type=checkbox]{position:absolute}',"",{version:3,sources:["webpack://./../ckeditor5-list/theme/todolist.css"],names:[],mappings:"AAKA,MACC,kCACD,CA4EA,uBACC,eAwBD,CAtBC,0BAEC,iBAAkB,CADlB,iBAMD,CAHC,qCACC,cACD,CAIA,+CAtFD,uBAAwB,CAQxB,QAAS,CAPT,oBAAqB,CAGrB,yCAA0C,CAO1C,UAAW,CAGX,aAAc,CAFd,kBAAmB,CAVnB,iBAAkB,CAWlB,OAAQ,CARR,qBAAsB,CAFtB,wCAqFC,CAFA,wDApEA,MAAO,CAGP,iBAAkB,CAFlB,cAAe,CACf,WAoEA,CAhED,sDAOC,qBAAiC,CACjC,iBAAkB,CALlB,qBAAsB,CACtB,UAAW,CAHX,aAAc,CAKd,WAAY,CAJZ,iBAAkB,CAOlB,sCAAwC,CAJxC,UASD,CAHC,uCAXD,sDAYE,eAEF,CADC,CAGD,qDAaC,wBAAyB,CADzB,kBAAmB,CAEnB,sGAA+G,CAX/G,sBAAuB,CAEvB,UAAW,CAJX,aAAc,CAUd,mDAAwD,CAHxD,+CAAoD,CAJpD,mBAAoB,CAFpB,iBAAkB,CAOlB,gDAAqD,CAMrD,uBAAwB,CALxB,kDAMD,CAGC,+DACC,kBAA8B,CAC9B,oBACD,CAEA,8DACC,iBACD,CAwBA,wEACC,qBACD,CAEA,mGACC,iBACD,CAYD,kKAEC,cAKD,CAHC,4LACC,mCACD,CAMD,+FAxHA,uBAAwB,CAQxB,QAAS,CAPT,oBAAqB,CAGrB,yCAA0C,CAO1C,UAAW,CAGX,aAAc,CAFd,kBAAmB,CAVnB,iBAAkB,CAWlB,OAAQ,CARR,qBAAsB,CAFtB,wCAuHA,CAFA,wGAtGC,MAAO,CAGP,iBAAkB,CAFlB,cAAe,CACf,WAsGD,CAlGA,sGAOC,qBAAiC,CACjC,iBAAkB,CALlB,qBAAsB,CACtB,UAAW,CAHX,aAAc,CAKd,WAAY,CAJZ,iBAAkB,CAOlB,sCAAwC,CAJxC,UASD,CAHC,uCAXD,sGAYE,eAEF,CADC,CAGD,qGAaC,wBAAyB,CADzB,kBAAmB,CAEnB,sGAA+G,CAX/G,sBAAuB,CAEvB,UAAW,CAJX,aAAc,CAUd,mDAAwD,CAHxD,+CAAoD,CAJpD,mBAAoB,CAFpB,iBAAkB,CAOlB,gDAAqD,CAMrD,uBAAwB,CALxB,kDAMD,CAGC,+GACC,kBAA8B,CAC9B,oBACD,CAEA,8GACC,iBACD,CA2DA,uHACC,iBACD",sourcesContent:[`/*
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
`],sourceRoot:""}]);const E=C},70:(f,b,m)=>{m.d(b,{A:()=>E});var A=m(9372),v=m.n(A),x=m(935),C=m.n(x)()(v());C.push([f.id,".ck-content .media{clear:both;display:block;margin:.9em 0;min-width:15em}","",{version:3,sources:["webpack://./../ckeditor5-media-embed/theme/mediaembed.css"],names:[],mappings:"AAKA,mBAGC,UAAW,CASX,aAAc,CAJd,aAAe,CAQf,cACD",sourcesContent:[`/*
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
`],sourceRoot:""}]);const E=C},7048:(f,b,m)=>{m.d(b,{A:()=>E});var A=m(9372),v=m.n(A),x=m(935),C=m.n(x)()(v());C.push([f.id,'.ck-media__wrapper .ck-media__placeholder{align-items:center;display:flex;flex-direction:column}.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__url{max-width:100%;position:relative}.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__url .ck-media__placeholder__url__text{display:block;overflow:hidden}.ck-media__wrapper[data-oembed-url*="facebook.com"] .ck-media__placeholder__icon *,.ck-media__wrapper[data-oembed-url*="goo.gl/maps"] .ck-media__placeholder__icon *,.ck-media__wrapper[data-oembed-url*="google.com/maps"] .ck-media__placeholder__icon *,.ck-media__wrapper[data-oembed-url*="instagram.com"] .ck-media__placeholder__icon *,.ck-media__wrapper[data-oembed-url*="maps.app.goo.gl"] .ck-media__placeholder__icon *,.ck-media__wrapper[data-oembed-url*="maps.google.com"] .ck-media__placeholder__icon *,.ck-media__wrapper[data-oembed-url*="twitter.com"] .ck-media__placeholder__icon *{display:none}.ck-editor__editable:not(.ck-read-only) .ck-media__wrapper>:not(.ck-media__placeholder),.ck-editor__editable:not(.ck-read-only) .ck-widget:not(.ck-widget_selected) .ck-media__placeholder{pointer-events:none}:root{--ck-media-embed-placeholder-icon-size:3em;--ck-color-media-embed-placeholder-url-text:#757575;--ck-color-media-embed-placeholder-url-text-hover:var(--ck-color-base-text)}.ck-media__wrapper{margin:0 auto}.ck-media__wrapper .ck-media__placeholder{background:var(--ck-color-base-foreground);padding:calc(var(--ck-spacing-standard)*3)}.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__icon{background-position:50%;background-size:cover;height:var(--ck-media-embed-placeholder-icon-size);margin-bottom:var(--ck-spacing-large);min-width:var(--ck-media-embed-placeholder-icon-size)}.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__icon .ck-icon{height:100%;width:100%}.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__url__text{color:var(--ck-color-media-embed-placeholder-url-text);font-style:italic;text-align:center;text-overflow:ellipsis;white-space:nowrap}.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__url__text:hover{color:var(--ck-color-media-embed-placeholder-url-text-hover);cursor:pointer;text-decoration:underline}.ck-media__wrapper[data-oembed-url*="open.spotify.com"]{max-height:380px;max-width:300px}.ck-media__wrapper[data-oembed-url*="goo.gl/maps"] .ck-media__placeholder__icon,.ck-media__wrapper[data-oembed-url*="google.com/maps"] .ck-media__placeholder__icon,.ck-media__wrapper[data-oembed-url*="maps.app.goo.gl"] .ck-media__placeholder__icon,.ck-media__wrapper[data-oembed-url*="maps.google.com"] .ck-media__placeholder__icon{background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNTAuMzc4IiBoZWlnaHQ9IjI1NC4xNjciIHZpZXdCb3g9IjAgMCA2Ni4yNDYgNjcuMjQ4Ij48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTcyLjUzMSAtMjE4LjQ1NSlzY2FsZSguOTgwMTIpIj48cmVjdCB3aWR0aD0iNjAuMDk5IiBoZWlnaHQ9IjYwLjA5OSIgeD0iMTc2LjAzMSIgeT0iMjMxLjM5OSIgZmlsbD0iIzM0YTY2OCIgcGFpbnQtb3JkZXI9Im1hcmtlcnMgc3Ryb2tlIGZpbGwiIHJ4PSI1LjIzOCIgcnk9IjUuMjM4Ii8+PHBhdGggZmlsbD0iIzVjODhjNSIgZD0ibTIwNi40NzcgMjYwLjktMjguOTg3IDI4Ljk4N2E1LjIyIDUuMjIgMCAwIDAgMy43OCAxLjYxaDQ5LjYyMWMxLjY5NCAwIDMuMTktLjc5OCA0LjE0Ni0yLjAzN3oiLz48cGF0aCBmaWxsPSIjZGQ0YjNlIiBkPSJNMjI2Ljc0MiAyMjIuOTg4Yy05LjI2NiAwLTE2Ljc3NyA3LjE3LTE2Ljc3NyAxNi4wMTQuMDA3IDIuNzYyLjY2MyA1LjQ3NCAyLjA5MyA3Ljg3NS40My43MDMuODMgMS40MDggMS4xOSAyLjEwN3EuNS43NTMuOTUgMS41MDguNTE1LjcxNS45ODggMS40NGMxLjMxIDEuNzY5IDIuNSAzLjUwMiAzLjYzNyA1LjE2OC43OTMgMS4yNzUgMS42ODMgMi42NCAyLjQ2NiAzLjk5IDIuMzYzIDQuMDk0IDQuMDA3IDguMDkyIDQuNiAxMy45MTR2LjAxMmMuMTgyLjQxMi41MTYuNjY2Ljg3OS42NjcuNDAzLS4wMDEuNzY4LS4zMTQuOTMtLjc5OS42MDMtNS43NTYgMi4yMzgtOS43MjkgNC41ODUtMTMuNzk0Ljc4Mi0xLjM1IDEuNjczLTIuNzE1IDIuNDY1LTMuOTkgMS4xMzctMS42NjYgMi4zMjgtMy40IDMuNjM4LTUuMTY5cS40NzMtLjcyMy45ODgtMS40MzkuNDUtLjc1NS45NS0xLjUwOGMuMzU5LS43Ljc2LTEuNDA0IDEuMTktMi4xMDcgMS40MjYtMi40MDIgMi01LjExNCAyLjAwNC03Ljg3NSAwLTguODQ0LTcuNTExLTE2LjAxNC0xNi43NzYtMTYuMDE0IiBwYWludC1vcmRlcj0ibWFya2VycyBzdHJva2UgZmlsbCIvPjxlbGxpcHNlIGN4PSIyMjYuNzQyIiBjeT0iMjM5LjAwMiIgZmlsbD0iIzgwMmQyNyIgcGFpbnQtb3JkZXI9Im1hcmtlcnMgc3Ryb2tlIGZpbGwiIHJ4PSI1LjgyOCIgcnk9IjUuNTY0Ii8+PHBhdGggZmlsbD0iI2ZmZiIgZD0iTTE5MC4zMDEgMjM3LjI4M2MtNC42NyAwLTguNDU3IDMuODUzLTguNDU3IDguNjA2czMuNzg2IDguNjA3IDguNDU3IDguNjA3YzMuMDQzIDAgNC44MDYtLjk1OCA2LjMzNy0yLjUxNiAxLjUzLTEuNTU3IDIuMDg3LTMuOTEzIDIuMDg3LTYuMjlxLS4wMDEtLjU0My0uMDY0LTEuMDc5aC04LjI1N3YzLjA0M2g0Ljg1Yy0uMTk3Ljc1OS0uNTMxIDEuNDUtMS4wNTggMS45ODYtLjk0Mi45NTgtMi4wMjggMS41NDgtMy45MDEgMS41NDgtMi44NzYgMC01LjIwOC0yLjM3Mi01LjIwOC01LjI5OSAwLTIuOTI2IDIuMzMyLTUuMjk5IDUuMjA4LTUuMjk5IDEuMzk5IDAgMi42MTguNDA3IDMuNTg0IDEuMjkzbDIuMzgxLTIuMzhxLS4wMDEtLjAwMy0uMDA0LS4wMDVjLTEuNTg4LTEuNTI0LTMuNjItMi4yMTUtNS45NTUtMi4yMTVtNC40MyA1LjY2LjAwMy4wMDZ2LS4wMDN6IiBwYWludC1vcmRlcj0ibWFya2VycyBzdHJva2UgZmlsbCIvPjxwYXRoIGZpbGw9IiNjM2MzYzMiIGQ9Im0yMTUuMTg0IDI1MS45MjktNy45OCA3Ljk3OSAyOC40NzcgMjguNDc1YTUuMiA1LjIgMCAwIDAgLjQ0OS0yLjEyM3YtMzEuMTY1Yy0uNDY5LjY3NS0uOTM0IDEuMzQ5LTEuMzgyIDIuMDA1LS43OTIgMS4yNzUtMS42ODIgMi42NC0yLjQ2NSAzLjk5LTIuMzQ3IDQuMDY1LTMuOTgyIDguMDM4LTQuNTg1IDEzLjc5NC0uMTYyLjQ4NS0uNTI3Ljc5OC0uOTMuNzk5LS4zNjMtLjAwMS0uNjk3LS4yNTUtLjg3OS0uNjY3di0uMDEyYy0uNTkzLTUuODIyLTIuMjM3LTkuODItNC42LTEzLjkxNC0uNzgzLTEuMzUtMS42NzMtMi43MTUtMi40NjYtMy45OS0xLjEzNy0xLjY2Ni0yLjMyNy0zLjQtMy42MzctNS4xNjl6Ii8+PHBhdGggZmlsbD0iI2ZkZGM0ZiIgZD0ibTIxMi45ODMgMjQ4LjQ5NS0zNi45NTIgMzYuOTUzdi44MTJhNS4yMjcgNS4yMjcgMCAwIDAgNS4yMzggNS4yMzhoMS4wMTVsMzUuNjY2LTM1LjY2NmExMzYgMTM2IDAgMCAwLTIuNzY0LTMuOSAzOCAzOCAwIDAgMC0uOTg5LTEuNDQgMzUgMzUgMCAwIDAtLjk1LTEuNTA4Yy0uMDgzLS4xNjItLjE3Ni0uMzI2LS4yNjQtLjQ4OSIgcGFpbnQtb3JkZXI9Im1hcmtlcnMgc3Ryb2tlIGZpbGwiLz48cGF0aCBmaWxsPSIjZmZmIiBkPSJtMjExLjk5OCAyNjEuMDgzLTYuMTUyIDYuMTUxIDI0LjI2NCAyNC4yNjRoLjc4MWE1LjIyNyA1LjIyNyAwIDAgMCA1LjIzOS01LjIzOHYtMS4wNDV6IiBwYWludC1vcmRlcj0ibWFya2VycyBzdHJva2UgZmlsbCIvPjwvZz48L3N2Zz4=)}.ck-media__wrapper[data-oembed-url*="facebook.com"] .ck-media__placeholder{background:#4268b3}.ck-media__wrapper[data-oembed-url*="facebook.com"] .ck-media__placeholder .ck-media__placeholder__icon{background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDI0IiBoZWlnaHQ9IjEwMjQiPjxwYXRoIGZpbGw9IiNGRkZGRkUiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTk2Ny40ODQgMEg1Ni41MTdDMjUuMzA0IDAgMCAyNS4zMDQgMCA1Ni41MTd2OTEwLjk2NkMwIDk5OC42OTQgMjUuMjk3IDEwMjQgNTYuNTIyIDEwMjRINTQ3VjYyOEg0MTRWNDczaDEzM1YzNTkuMDI5YzAtMTMyLjI2MiA4MC43NzMtMjA0LjI4MiAxOTguNzU2LTIwNC4yODIgNTYuNTEzIDAgMTA1LjA4NiA0LjIwOCAxMTkuMjQ0IDYuMDg5VjI5OWwtODEuNjE2LjAzN2MtNjMuOTkzIDAtNzYuMzg0IDMwLjQ5Mi03Ni4zODQgNzUuMjM2VjQ3M2gxNTMuNDg3bC0xOS45ODYgMTU1SDcwN3YzOTZoMjYwLjQ4NGMzMS4yMTMgMCA1Ni41MTYtMjUuMzAzIDU2LjUxNi01Ni41MTZWNTYuNTE1QzEwMjQgMjUuMzAzIDk5OC42OTcgMCA5NjcuNDg0IDAiLz48L3N2Zz4=)}.ck-media__wrapper[data-oembed-url*="facebook.com"] .ck-media__placeholder .ck-media__placeholder__url__text{color:#cdf}.ck-media__wrapper[data-oembed-url*="facebook.com"] .ck-media__placeholder .ck-media__placeholder__url__text:hover{color:#fff}.ck-media__wrapper[data-oembed-url*="instagram.com"] .ck-media__placeholder{background:linear-gradient(-135deg,#1400c7,#b800b1,#f50000)}.ck-media__wrapper[data-oembed-url*="instagram.com"] .ck-media__placeholder .ck-media__placeholder__icon{background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iNTA0IiBoZWlnaHQ9IjUwNCI+PGRlZnM+PHBhdGggaWQ9ImEiIGQ9Ik0wIC4xNTloNTAzLjg0MVY1MDMuOTRIMHoiLz48L2RlZnM+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48bWFzayBpZD0iYiIgZmlsbD0iI2ZmZiI+PHVzZSB4bGluazpocmVmPSIjYSIvPjwvbWFzaz48cGF0aCBmaWxsPSIjRkZGIiBkPSJNMjUxLjkyMS4xNTljLTY4LjQxOCAwLTc2Ljk5Ny4yOS0xMDMuODY3IDEuNTE2LTI2LjgxNCAxLjIyMy00NS4xMjcgNS40ODItNjEuMTUxIDExLjcxLTE2LjU2NiA2LjQzNy0zMC42MTUgMTUuMDUxLTQ0LjYyMSAyOS4wNTYtMTQuMDA1IDE0LjAwNi0yMi42MTkgMjguMDU1LTI5LjA1NiA0NC42MjEtNi4yMjggMTYuMDI0LTEwLjQ4NyAzNC4zMzctMTEuNzEgNjEuMTUxQy4yOSAxNzUuMDgzIDAgMTgzLjY2MiAwIDI1Mi4wOGMwIDY4LjQxNy4yOSA3Ni45OTYgMS41MTYgMTAzLjg2NiAxLjIyMyAyNi44MTQgNS40ODIgNDUuMTI3IDExLjcxIDYxLjE1MSA2LjQzNyAxNi41NjYgMTUuMDUxIDMwLjYxNSAyOS4wNTYgNDQuNjIxIDE0LjAwNiAxNC4wMDUgMjguMDU1IDIyLjYxOSA0NC42MjEgMjkuMDU3IDE2LjAyNCA2LjIyNyAzNC4zMzcgMTAuNDg2IDYxLjE1MSAxMS43MDkgMjYuODcgMS4yMjYgMzUuNDQ5IDEuNTE2IDEwMy44NjcgMS41MTYgNjguNDE3IDAgNzYuOTk2LS4yOSAxMDMuODY2LTEuNTE2IDI2LjgxNC0xLjIyMyA0NS4xMjctNS40ODIgNjEuMTUxLTExLjcwOSAxNi41NjYtNi40MzggMzAuNjE1LTE1LjA1MiA0NC42MjEtMjkuMDU3IDE0LjAwNS0xNC4wMDYgMjIuNjE5LTI4LjA1NSAyOS4wNTctNDQuNjIxIDYuMjI3LTE2LjAyNCAxMC40ODYtMzQuMzM3IDExLjcwOS02MS4xNTEgMS4yMjYtMjYuODcgMS41MTYtMzUuNDQ5IDEuNTE2LTEwMy44NjYgMC02OC40MTgtLjI5LTc2Ljk5Ny0xLjUxNi0xMDMuODY3LTEuMjIzLTI2LjgxNC01LjQ4Mi00NS4xMjctMTEuNzA5LTYxLjE1MS02LjQzOC0xNi41NjYtMTUuMDUyLTMwLjYxNS0yOS4wNTctNDQuNjIxLTE0LjAwNi0xNC4wMDUtMjguMDU1LTIyLjYxOS00NC42MjEtMjkuMDU2LTE2LjAyNC02LjIyOC0zNC4zMzctMTAuNDg3LTYxLjE1MS0xMS43MUMzMjguOTE3LjQ0OSAzMjAuMzM4LjE1OSAyNTEuOTIxLjE1OW0wIDQ1LjM5MWM2Ny4yNjUgMCA3NS4yMzMuMjU3IDEwMS43OTcgMS40NjkgMjQuNTYyIDEuMTIgMzcuOTAxIDUuMjI0IDQ2Ljc3OCA4LjY3NCAxMS43NTkgNC41NyAyMC4xNTEgMTAuMDI5IDI4Ljk2NiAxOC44NDVzMTQuMjc1IDE3LjIwNyAxOC44NDUgMjguOTY2YzMuNDUgOC44NzcgNy41NTQgMjIuMjE2IDguNjc0IDQ2Ljc3OCAxLjIxMiAyNi41NjQgMS40NjkgMzQuNTMyIDEuNDY5IDEwMS43OTggMCA2Ny4yNjUtLjI1NyA3NS4yMzMtMS40NjkgMTAxLjc5Ny0xLjEyIDI0LjU2Mi01LjIyNCAzNy45MDEtOC42NzQgNDYuNzc4LTQuNTcgMTEuNzU5LTEwLjAyOSAyMC4xNTEtMTguODQ1IDI4Ljk2NnMtMTcuMjA3IDE0LjI3NS0yOC45NjYgMTguODQ1Yy04Ljg3NyAzLjQ1LTIyLjIxNiA3LjU1NC00Ni43NzggOC42NzQtMjYuNTYgMS4yMTItMzQuNTI3IDEuNDY5LTEwMS43OTcgMS40NjktNjcuMjcxIDAtNzUuMjM3LS4yNTctMTAxLjc5OC0xLjQ2OS0yNC41NjItMS4xMi0zNy45MDEtNS4yMjQtNDYuNzc4LTguNjc0LTExLjc1OS00LjU3LTIwLjE1MS0xMC4wMjktMjguOTY2LTE4Ljg0NXMtMTQuMjc1LTE3LjIwNy0xOC44NDUtMjguOTY2Yy0zLjQ1LTguODc3LTcuNTU0LTIyLjIxNi04LjY3NC00Ni43NzgtMS4yMTItMjYuNTY0LTEuNDY5LTM0LjUzMi0xLjQ2OS0xMDEuNzk3IDAtNjcuMjY2LjI1Ny03NS4yMzQgMS40NjktMTAxLjc5OCAxLjEyLTI0LjU2MiA1LjIyNC0zNy45MDEgOC42NzQtNDYuNzc4IDQuNTctMTEuNzU5IDEwLjAyOS0yMC4xNTEgMTguODQ1LTI4Ljk2NnMxNy4yMDctMTQuMjc1IDI4Ljk2Ni0xOC44NDVjOC44NzctMy40NSAyMi4yMTYtNy41NTQgNDYuNzc4LTguNjc0IDI2LjU2NC0xLjIxMiAzNC41MzItMS40NjkgMTAxLjc5OC0xLjQ2OSIgbWFzaz0idXJsKCNiKSIvPjxwYXRoIGZpbGw9IiNGRkYiIGQ9Ik0yNTEuOTIxIDMzNi4wNTNjLTQ2LjM3OCAwLTgzLjk3NC0zNy41OTYtODMuOTc0LTgzLjk3M3MzNy41OTYtODMuOTc0IDgzLjk3NC04My45NzRjNDYuMzc3IDAgODMuOTczIDM3LjU5NiA4My45NzMgODMuOTc0IDAgNDYuMzc3LTM3LjU5NiA4My45NzMtODMuOTczIDgzLjk3M20wLTIxMy4zMzhjLTcxLjQ0NyAwLTEyOS4zNjUgNTcuOTE4LTEyOS4zNjUgMTI5LjM2NSAwIDcxLjQ0NiA1Ny45MTggMTI5LjM2NCAxMjkuMzY1IDEyOS4zNjQgNzEuNDQ2IDAgMTI5LjM2NC01Ny45MTggMTI5LjM2NC0xMjkuMzY0IDAtNzEuNDQ3LTU3LjkxOC0xMjkuMzY1LTEyOS4zNjQtMTI5LjM2NU00MTYuNjI3IDExNy42MDRjMCAxNi42OTYtMTMuNTM1IDMwLjIzLTMwLjIzMSAzMC4yMy0xNi42OTUgMC0zMC4yMy0xMy41MzQtMzAuMjMtMzAuMjNzMTMuNTM1LTMwLjIzMSAzMC4yMy0zMC4yMzFjMTYuNjk2IDAgMzAuMjMxIDEzLjUzNSAzMC4yMzEgMzAuMjMxIi8+PC9nPjwvc3ZnPg==)}.ck-media__wrapper[data-oembed-url*="instagram.com"] .ck-media__placeholder .ck-media__placeholder__url__text{color:#ffe0fe}.ck-media__wrapper[data-oembed-url*="instagram.com"] .ck-media__placeholder .ck-media__placeholder__url__text:hover{color:#fff}.ck-media__wrapper[data-oembed-url*="twitter.com"] .ck.ck-media__placeholder{background:linear-gradient(90deg,#71c6f4,#0d70a5)}.ck-media__wrapper[data-oembed-url*="twitter.com"] .ck.ck-media__placeholder .ck-media__placeholder__icon{background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbDpzcGFjZT0icHJlc2VydmUiIHZpZXdCb3g9IjAgMCA0MDAgNDAwIj48cGF0aCBkPSJNNDAwIDIwMGMwIDExMC41LTg5LjUgMjAwLTIwMCAyMDBTMCAzMTAuNSAwIDIwMCA4OS41IDAgMjAwIDBzMjAwIDg5LjUgMjAwIDIwME0xNjMuNCAzMDUuNWM4OC43IDAgMTM3LjItNzMuNSAxMzcuMi0xMzcuMiAwLTIuMSAwLTQuMi0uMS02LjIgOS40LTYuOCAxNy42LTE1LjMgMjQuMS0yNS04LjYgMy44LTE3LjkgNi40LTI3LjcgNy42IDEwLTYgMTcuNi0xNS40IDIxLjItMjYuNy05LjMgNS41LTE5LjYgOS41LTMwLjYgMTEuNy04LjgtOS40LTIxLjMtMTUuMi0zNS4yLTE1LjItMjYuNiAwLTQ4LjIgMjEuNi00OC4yIDQ4LjIgMCAzLjguNCA3LjUgMS4zIDExLTQwLjEtMi03NS42LTIxLjItOTkuNC01MC40LTQuMSA3LjEtNi41IDE1LjQtNi41IDI0LjIgMCAxNi43IDguNSAzMS41IDIxLjUgNDAuMS03LjktLjItMTUuMy0yLjQtMjEuOC02di42YzAgMjMuNCAxNi42IDQyLjggMzguNyA0Ny4zLTQgMS4xLTguMyAxLjctMTIuNyAxLjctMy4xIDAtNi4xLS4zLTkuMS0uOSA2LjEgMTkuMiAyMy45IDMzLjEgNDUgMzMuNS0xNi41IDEyLjktMzcuMyAyMC42LTU5LjkgMjAuNi0zLjkgMC03LjctLjItMTEuNS0uNyAyMS4xIDEzLjggNDYuNSAyMS44IDczLjcgMjEuOCIgc3R5bGU9ImZpbGw6I2ZmZiIvPjwvc3ZnPg==)}.ck-media__wrapper[data-oembed-url*="twitter.com"] .ck.ck-media__placeholder .ck-media__placeholder__url__text{color:#b8e6ff}.ck-media__wrapper[data-oembed-url*="twitter.com"] .ck.ck-media__placeholder .ck-media__placeholder__url__text:hover{color:#fff}',"",{version:3,sources:["webpack://./../ckeditor5-media-embed/theme/mediaembedediting.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-media-embed/mediaembedediting.css"],names:[],mappings:"AAMC,0CAGC,kBAAmB,CAFnB,YAAa,CACb,qBAcD,CAXC,sEAEC,cAAe,CAEf,iBAMD,CAJC,wGAEC,aAAc,CADd,eAED,CAWD,6kBACC,YACD,CAYF,2LACC,mBACD,CC1CA,MACC,0CAA2C,CAE3C,mDAA4D,CAC5D,2EACD,CAEA,mBACC,aA+FD,CA7FC,0CAEC,0CAA2C,CAD3C,0CA6BD,CA1BC,uEAIC,uBAA2B,CAC3B,qBAAsB,CAHtB,kDAAmD,CACnD,qCAAsC,CAFtC,qDAUD,CAJC,gFAEC,WAAY,CADZ,UAED,CAGD,4EACC,sDAAuD,CAGvD,iBAAkB,CADlB,iBAAkB,CAElB,sBAAuB,CAHvB,kBAUD,CALC,kFACC,4DAA6D,CAC7D,cAAe,CACf,yBACD,CAIF,wDAEC,gBAAiB,CADjB,eAED,CAEA,4UAIC,goGACD,CAEA,2EACC,kBAaD,CAXC,wGACC,orBACD,CAEA,6GACC,UAKD,CAHC,mHACC,UACD,CAIF,4EACC,2DAcD,CAZC,yGACC,o+GACD,CAGA,8GACC,aAKD,CAHC,oHACC,UACD,CAIF,6EAEC,iDAaD,CAXC,0GACC,g/BACD,CAEA,+GACC,aAKD,CAHC,qHACC,UACD",sourcesContent:[`/*
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
`],sourceRoot:""}]);const E=C},5651:(f,b,m)=>{m.d(b,{A:()=>E});var A=m(9372),v=m.n(A),x=m(935),C=m.n(x)()(v());C.push([f.id,".ck.ck-media-form{align-items:flex-start;display:flex;flex-direction:row;flex-wrap:nowrap}.ck.ck-media-form .ck-labeled-field-view{display:inline-block}.ck.ck-media-form .ck-label{display:none}@media screen and (max-width:600px){.ck.ck-media-form{flex-wrap:wrap}.ck.ck-media-form .ck-labeled-field-view{flex-basis:100%}.ck.ck-media-form .ck-button{flex-basis:50%}}","",{version:3,sources:["webpack://./../ckeditor5-media-embed/theme/mediaform.css","webpack://./../ckeditor5-ui/theme/mixins/_rwd.css"],names:[],mappings:"AAOA,kBAEC,sBAAuB,CADvB,YAAa,CAEb,kBAAmB,CACnB,gBAqBD,CAnBC,yCACC,oBACD,CAEA,4BACC,YACD,CCbA,oCDCD,kBAeE,cAUF,CARE,yCACC,eACD,CAEA,6BACC,cACD,CCtBD",sourcesContent:[`/*
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
`],sourceRoot:""}]);const E=C},5506:(f,b,m)=>{m.d(b,{A:()=>E});var A=m(9372),v=m.n(A),x=m(935),C=m.n(x)()(v());C.push([f.id,".ck.ck-input-color{display:flex;flex-direction:row-reverse;width:100%}.ck.ck-input-color>input.ck.ck-input-text{flex-grow:1;min-width:auto}.ck.ck-input-color>div.ck.ck-dropdown{min-width:auto}.ck.ck-input-color>div.ck.ck-dropdown>.ck-input-color__button .ck-dropdown__arrow{display:none}.ck.ck-input-color .ck.ck-input-color__button{display:flex}.ck.ck-input-color .ck.ck-input-color__button .ck.ck-input-color__button__preview{overflow:hidden;position:relative}.ck.ck-input-color .ck.ck-input-color__button .ck.ck-input-color__button__preview>.ck.ck-input-color__button__preview__no-color-indicator{display:block;position:absolute}[dir=ltr] .ck.ck-input-color>.ck.ck-input-text{border-bottom-right-radius:0;border-top-right-radius:0}[dir=rtl] .ck.ck-input-color>.ck.ck-input-text{border-bottom-left-radius:0;border-top-left-radius:0}.ck.ck-input-color>.ck.ck-input-text:focus{z-index:0}.ck.ck-input-color>.ck.ck-dropdown>.ck.ck-button.ck-input-color__button{padding:0}[dir=ltr] .ck.ck-input-color>.ck.ck-dropdown>.ck.ck-button.ck-input-color__button{border-bottom-left-radius:0;border-top-left-radius:0}[dir=ltr] .ck.ck-input-color>.ck.ck-dropdown>.ck.ck-button.ck-input-color__button:not(:focus){border-left:1px solid transparent}[dir=rtl] .ck.ck-input-color>.ck.ck-dropdown>.ck.ck-button.ck-input-color__button{border-bottom-right-radius:0;border-top-right-radius:0}[dir=rtl] .ck.ck-input-color>.ck.ck-dropdown>.ck.ck-button.ck-input-color__button:not(:focus){border-right:1px solid transparent}.ck.ck-input-color>.ck.ck-dropdown>.ck.ck-button.ck-input-color__button.ck-disabled{background:var(--ck-color-input-disabled-background)}.ck.ck-input-color>.ck.ck-dropdown>.ck.ck-button.ck-input-color__button>.ck.ck-input-color__button__preview{border-radius:0}.ck-rounded-corners .ck.ck-input-color>.ck.ck-dropdown>.ck.ck-button.ck-input-color__button>.ck.ck-input-color__button__preview,.ck.ck-input-color>.ck.ck-dropdown>.ck.ck-button.ck-input-color__button>.ck.ck-input-color__button__preview.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-input-color>.ck.ck-dropdown>.ck.ck-button.ck-input-color__button>.ck.ck-input-color__button__preview{border:1px solid var(--ck-color-input-border);height:20px;width:20px}.ck.ck-input-color>.ck.ck-dropdown>.ck.ck-button.ck-input-color__button>.ck.ck-input-color__button__preview>.ck.ck-input-color__button__preview__no-color-indicator{background:red;border-radius:2px;height:150%;left:50%;top:-30%;transform:rotate(45deg);transform-origin:50%;width:8%}.ck.ck-input-color .ck.ck-input-color__remove-color{border-bottom-left-radius:0;border-bottom-right-radius:0;padding:calc(var(--ck-spacing-standard)/2) var(--ck-spacing-standard);width:100%}.ck.ck-input-color .ck.ck-input-color__remove-color:not(:focus){border-bottom:1px solid var(--ck-color-input-border)}[dir=ltr] .ck.ck-input-color .ck.ck-input-color__remove-color{border-top-right-radius:0}[dir=rtl] .ck.ck-input-color .ck.ck-input-color__remove-color{border-top-left-radius:0}.ck.ck-input-color .ck.ck-input-color__remove-color .ck.ck-icon{margin-right:var(--ck-spacing-standard)}[dir=rtl] .ck.ck-input-color .ck.ck-input-color__remove-color .ck.ck-icon{margin-left:var(--ck-spacing-standard);margin-right:0}","",{version:3,sources:["webpack://./../ckeditor5-table/theme/colorinput.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-table/colorinput.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css"],names:[],mappings:"AAKA,mBAEC,YAAa,CACb,0BAA2B,CAF3B,UAgCD,CA5BC,0CAEC,WAAY,CADZ,cAED,CAEA,sCACC,cAMD,CAHC,kFACC,YACD,CAGD,8CAEC,YAWD,CATC,kFAEC,eAAgB,CADhB,iBAOD,CAJC,0IAEC,aAAc,CADd,iBAED,CC1BF,+CAGE,4BAA6B,CAD7B,yBAcF,CAhBA,+CAQE,2BAA4B,CAD5B,wBASF,CAHC,2CACC,SACD,CAIA,wEACC,SA0CD,CA3CA,kFAKE,2BAA4B,CAD5B,wBAuCF,CApCE,8FACC,iCACD,CATF,kFAcE,4BAA6B,CAD7B,yBA8BF,CA3BE,8FACC,kCACD,CAGD,oFACC,oDACD,CAEA,4GC1CF,eD2DE,CAjBA,+PCtCD,qCDuDC,CAjBA,4GAKC,6CAA8C,CAD9C,WAAY,CADZ,UAcD,CAVC,oKAKC,cAA6B,CAC7B,iBAAkB,CAHlB,WAAY,CADZ,QAAS,CADT,QAAS,CAMT,uBAAwB,CACxB,oBAAqB,CAJrB,QAKD,CAKH,oDAIC,2BAA4B,CAC5B,4BAA6B,CAH7B,qEAAwE,CADxE,UA0BD,CApBC,gEACC,oDACD,CATD,8DAYE,yBAeF,CA3BA,8DAgBE,wBAWF,CARC,gEACC,uCAMD,CAPA,0EAKE,sCAAuC,CADvC,cAGF",sourcesContent:[`/*
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
`],sourceRoot:""}]);const E=C},4043:(f,b,m)=>{m.d(b,{A:()=>E});var A=m(9372),v=m.n(A),x=m(935),C=m.n(x)()(v());C.push([f.id,".ck.ck-form{padding:0 0 var(--ck-spacing-large)}.ck.ck-form:focus{outline:none}.ck.ck-form .ck.ck-input-text{min-width:100%;width:0}.ck.ck-form .ck.ck-dropdown{min-width:100%}.ck.ck-form .ck.ck-dropdown .ck-dropdown__button:not(:focus){border:1px solid var(--ck-color-base-border)}.ck.ck-form .ck.ck-dropdown .ck-dropdown__button .ck-button__label{width:100%}","",{version:3,sources:["webpack://./../ckeditor5-theme-lark/theme/ckeditor5-table/form.css"],names:[],mappings:"AAKA,YACC,mCAyBD,CAvBC,kBAEC,YACD,CAEA,8BACC,cAAe,CACf,OACD,CAEA,4BACC,cAWD,CARE,6DACC,4CACD,CAEA,mEACC,UACD",sourcesContent:[`/*
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
`],sourceRoot:""}]);const E=C},2655:(f,b,m)=>{m.d(b,{A:()=>E});var A=m(9372),v=m.n(A),x=m(935),C=m.n(x)()(v());C.push([f.id,".ck.ck-form__row{display:flex;flex-direction:row;flex-wrap:nowrap;justify-content:space-between}.ck.ck-form__row>:not(.ck-label){flex-grow:1}.ck.ck-form__row.ck-table-form__action-row .ck-button-cancel,.ck.ck-form__row.ck-table-form__action-row .ck-button-save{justify-content:center}.ck.ck-form__row{padding:var(--ck-spacing-standard) var(--ck-spacing-large) 0}[dir=ltr] .ck.ck-form__row>:not(.ck-label)+*{margin-left:var(--ck-spacing-large)}[dir=rtl] .ck.ck-form__row>:not(.ck-label)+*{margin-right:var(--ck-spacing-large)}.ck.ck-form__row>.ck-label{min-width:100%;width:100%}.ck.ck-form__row.ck-table-form__action-row{margin-top:var(--ck-spacing-large)}.ck.ck-form__row.ck-table-form__action-row .ck-button .ck-button__label{color:var(--ck-color-text)}","",{version:3,sources:["webpack://./../ckeditor5-table/theme/formrow.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-table/formrow.css"],names:[],mappings:"AAKA,iBACC,YAAa,CACb,kBAAmB,CACnB,gBAAiB,CACjB,6BAaD,CAVC,iCACC,WACD,CAGC,wHAEC,sBACD,CCbF,iBACC,4DA2BD,CAvBE,6CAEE,mCAMF,CARA,6CAME,oCAEF,CAGD,2BAEC,cAAe,CADf,UAED,CAEA,2CACC,kCAKD,CAHC,wEACC,0BACD",sourcesContent:[`/*
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
`],sourceRoot:""}]);const E=C},5032:(f,b,m)=>{m.d(b,{A:()=>E});var A=m(9372),v=m.n(A),x=m(935),C=m.n(x)()(v());C.push([f.id,".ck .ck-insert-table-dropdown__grid{display:flex;flex-direction:row;flex-wrap:wrap}:root{--ck-insert-table-dropdown-padding:10px;--ck-insert-table-dropdown-box-height:11px;--ck-insert-table-dropdown-box-width:12px;--ck-insert-table-dropdown-box-margin:1px}.ck .ck-insert-table-dropdown__grid{padding:var(--ck-insert-table-dropdown-padding) var(--ck-insert-table-dropdown-padding) 0;width:calc(var(--ck-insert-table-dropdown-box-width)*10 + var(--ck-insert-table-dropdown-box-margin)*20 + var(--ck-insert-table-dropdown-padding)*2)}.ck .ck-insert-table-dropdown__label,.ck[dir=rtl] .ck-insert-table-dropdown__label{text-align:center}.ck .ck-insert-table-dropdown-grid-box{border:1px solid var(--ck-color-base-border);border-radius:1px;margin:var(--ck-insert-table-dropdown-box-margin);min-height:var(--ck-insert-table-dropdown-box-height);min-width:var(--ck-insert-table-dropdown-box-width);outline:none;transition:none}@media (prefers-reduced-motion:reduce){.ck .ck-insert-table-dropdown-grid-box{transition:none}}.ck .ck-insert-table-dropdown-grid-box:focus{box-shadow:none}.ck .ck-insert-table-dropdown-grid-box.ck-on{background:var(--ck-color-focus-outer-shadow);border-color:var(--ck-color-focus-border)}","",{version:3,sources:["webpack://./../ckeditor5-table/theme/inserttable.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-table/inserttable.css"],names:[],mappings:"AAKA,oCACC,YAAa,CACb,kBAAmB,CACnB,cACD,CCJA,MACC,uCAAwC,CACxC,0CAA2C,CAC3C,yCAA0C,CAC1C,yCACD,CAEA,oCAGC,yFAA0F,CAD1F,oJAED,CAEA,mFAEC,iBACD,CAEA,uCAIC,4CAA6C,CAC7C,iBAAkB,CAFlB,iDAAkD,CADlD,qDAAsD,CADtD,mDAAoD,CAKpD,YAAa,CACb,eAcD,CAZC,uCATD,uCAUE,eAWF,CAVC,CAEA,6CACC,eACD,CAEA,6CAEC,6CAA8C,CAD9C,yCAED",sourcesContent:[`/*
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

`],sourceRoot:""}]);const E=C},2329:(f,b,m)=>{m.d(b,{A:()=>E});var A=m(9372),v=m.n(A),x=m(935),C=m.n(x)()(v());C.push([f.id,".ck-content .table{display:table;margin:.9em auto}.ck-content .table table{border:1px double #b3b3b3;border-collapse:collapse;border-spacing:0;height:100%;width:100%}.ck-content .table table td,.ck-content .table table th{border:1px solid #bfbfbf;min-width:2em;padding:.4em}.ck-content .table table th{background:rgba(0,0,0,.05);font-weight:700}.ck-content[dir=rtl] .table th{text-align:right}.ck-content[dir=ltr] .table th{text-align:left}.ck-editor__editable .ck-table-bogus-paragraph{display:inline-block;width:100%}","",{version:3,sources:["webpack://./../ckeditor5-table/theme/table.css"],names:[],mappings:"AAKA,mBAKC,aAAc,CADd,gBAiCD,CA9BC,yBAYC,yBAAkC,CAVlC,wBAAyB,CACzB,gBAAiB,CAKjB,WAAY,CADZ,UAsBD,CAfC,wDAQC,wBAAiC,CANjC,aAAc,CACd,YAMD,CAEA,4BAEC,0BAA+B,CAD/B,eAED,CAMF,+BACC,gBACD,CAEA,+BACC,eACD,CAEA,+CAKC,oBAAqB,CAMrB,UACD",sourcesContent:[`/*
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
`],sourceRoot:""}]);const E=C},4143:(f,b,m)=>{m.d(b,{A:()=>E});var A=m(9372),v=m.n(A),x=m(935),C=m.n(x)()(v());C.push([f.id,":root{--ck-color-selector-caption-background:#f7f7f7;--ck-color-selector-caption-text:#333;--ck-color-selector-caption-highlighted-background:#fd0}.ck-content .table>figcaption{background-color:var(--ck-color-selector-caption-background);caption-side:top;color:var(--ck-color-selector-caption-text);display:table-caption;font-size:.75em;outline-offset:-1px;padding:.6em;text-align:center;word-break:break-word}@media (forced-colors:active){.ck-content .table>figcaption{background-color:unset;color:unset}}@media (forced-colors:none){.ck.ck-editor__editable .table>figcaption.table__caption_highlighted{animation:ck-table-caption-highlight .6s ease-out}}.ck.ck-editor__editable .table>figcaption.ck-placeholder:before{overflow:hidden;padding-left:inherit;padding-right:inherit;text-overflow:ellipsis;white-space:nowrap}@keyframes ck-table-caption-highlight{0%{background-color:var(--ck-color-selector-caption-highlighted-background)}to{background-color:var(--ck-color-selector-caption-background)}}","",{version:3,sources:["webpack://./../ckeditor5-table/theme/tablecaption.css","webpack://./../ckeditor5-ui/theme/mixins/_mediacolors.css"],names:[],mappings:"AAOA,MACC,8CAAuD,CACvD,qCAAiD,CACjD,uDACD,CAGA,8BAMC,4DAA6D,CAJ7D,gBAAiB,CAGjB,2CAA4C,CAJ5C,qBAAsB,CAOtB,eAAgB,CAChB,mBAAoB,CAFpB,YAAa,CAHb,iBAAkB,CADlB,qBAaD,CCxBC,8BACC,8BDoBA,sBAAuB,CACvB,WCnBA,CACD,CAIA,4BDqBC,qEACC,iDACD,CCnBD,CDsBA,gEASC,eAAgB,CARhB,oBAAqB,CACrB,qBAAsB,CAQtB,sBAAuB,CAFvB,kBAGD,CAGD,sCACC,GACC,wEACD,CAEA,GACC,4DACD,CACD",sourcesContent:[`/*
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
`],sourceRoot:""}]);const E=C},8986:(f,b,m)=>{m.d(b,{A:()=>E});var A=m(9372),v=m.n(A),x=m(935),C=m.n(x)()(v());C.push([f.id,".ck.ck-table-cell-properties-form .ck-form__row.ck-table-cell-properties-form__alignment-row{flex-wrap:wrap}.ck.ck-table-cell-properties-form .ck-form__row.ck-table-cell-properties-form__alignment-row .ck.ck-toolbar:first-of-type{flex-grow:0.57}.ck.ck-table-cell-properties-form .ck-form__row.ck-table-cell-properties-form__alignment-row .ck.ck-toolbar:last-of-type{flex-grow:0.43}.ck.ck-table-cell-properties-form .ck-form__row.ck-table-cell-properties-form__alignment-row .ck.ck-toolbar .ck-button{flex-grow:1}.ck.ck-table-cell-properties-form{width:320px}.ck.ck-table-cell-properties-form .ck-form__row.ck-table-cell-properties-form__padding-row{align-self:flex-end;padding:0;width:25%}.ck.ck-table-cell-properties-form .ck-form__row.ck-table-cell-properties-form__alignment-row .ck.ck-toolbar{background:none;margin-top:var(--ck-spacing-standard)}","",{version:3,sources:["webpack://./../ckeditor5-table/theme/tablecellproperties.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-table/tablecellproperties.css"],names:[],mappings:"AAOE,6FACC,cAiBD,CAdE,0HAEC,cACD,CAEA,yHAEC,cACD,CAEA,uHACC,WACD,CClBJ,kCACC,WAkBD,CAfE,2FACC,mBAAoB,CACpB,SAAU,CACV,SACD,CAGC,4GACC,eAAgB,CAGhB,qCACD",sourcesContent:[`/*
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
`],sourceRoot:""}]);const E=C},8795:(f,b,m)=>{m.d(b,{A:()=>E});var A=m(9372),v=m.n(A),x=m(935),C=m.n(x)()(v());C.push([f.id,":root{--ck-color-selector-column-resizer-hover:var(--ck-color-base-active);--ck-table-column-resizer-width:7px;--ck-table-column-resizer-position-offset:calc(var(--ck-table-column-resizer-width)*-0.5 - 0.5px)}.ck-content .table .ck-table-resized{table-layout:fixed}.ck-content .table table{overflow:hidden}.ck-content .table td,.ck-content .table th{overflow-wrap:break-word;position:relative}.ck.ck-editor__editable .table .ck-table-column-resizer{bottom:0;cursor:col-resize;position:absolute;right:var(--ck-table-column-resizer-position-offset);top:0;user-select:none;width:var(--ck-table-column-resizer-width);z-index:var(--ck-z-default)}.ck.ck-editor__editable .table[draggable] .ck-table-column-resizer,.ck.ck-editor__editable.ck-column-resize_disabled .table .ck-table-column-resizer{display:none}.ck.ck-editor__editable .table .ck-table-column-resizer:hover,.ck.ck-editor__editable .table .ck-table-column-resizer__active{background-color:var(--ck-color-selector-column-resizer-hover);bottom:-999999px;opacity:.25;top:-999999px}.ck.ck-editor__editable[dir=rtl] .table .ck-table-column-resizer{left:var(--ck-table-column-resizer-position-offset);right:unset}","",{version:3,sources:["webpack://./../ckeditor5-table/theme/tablecolumnresize.css"],names:[],mappings:"AAKA,MACC,oEAAqE,CACrE,mCAAoC,CAIpC,iGACD,CAEA,qCACC,kBACD,CAEA,yBACC,eACD,CAEA,4CAIC,wBAAyB,CACzB,iBACD,CAEA,wDAGC,QAAS,CAGT,iBAAkB,CALlB,iBAAkB,CAGlB,oDAAqD,CAFrD,KAAM,CAKN,gBAAiB,CAFjB,0CAA2C,CAG3C,2BACD,CAQA,qJACC,YACD,CAEA,8HAEC,8DAA+D,CAO/D,gBAAiB,CANjB,WAAa,CAKb,aAED,CAEA,iEACC,mDAAoD,CACpD,WACD",sourcesContent:[`/*
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
`],sourceRoot:""}]);const E=C},8137:(f,b,m)=>{m.d(b,{A:()=>E});var A=m(9372),v=m.n(A),x=m(935),C=m.n(x)()(v());C.push([f.id,":root{--ck-color-selector-focused-cell-background:rgba(158,201,250,.3)}.ck-widget.table td.ck-editor__nested-editable.ck-editor__nested-editable_focused,.ck-widget.table td.ck-editor__nested-editable:focus,.ck-widget.table th.ck-editor__nested-editable.ck-editor__nested-editable_focused,.ck-widget.table th.ck-editor__nested-editable:focus{background:var(--ck-color-selector-focused-cell-background);border-style:none;outline:1px solid var(--ck-color-focus-border);outline-offset:-1px}","",{version:3,sources:["webpack://./../ckeditor5-theme-lark/theme/ckeditor5-table/tableediting.css"],names:[],mappings:"AAKA,MACC,gEACD,CAKE,8QAGC,2DAA4D,CAK5D,iBAAkB,CAClB,8CAA+C,CAC/C,mBACD",sourcesContent:[`/*
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
`],sourceRoot:""}]);const E=C},1623:(f,b,m)=>{m.d(b,{A:()=>E});var A=m(9372),v=m.n(A),x=m(935),C=m.n(x)()(v());C.push([f.id,'.ck.ck-table-form .ck-form__row.ck-table-form__background-row,.ck.ck-table-form .ck-form__row.ck-table-form__border-row{flex-wrap:wrap}.ck.ck-table-form .ck-form__row.ck-table-form__dimensions-row{align-items:center;flex-wrap:wrap}.ck.ck-table-form .ck-form__row.ck-table-form__dimensions-row .ck-labeled-field-view{align-items:center;display:flex;flex-direction:column-reverse}.ck.ck-table-form .ck-form__row.ck-table-form__dimensions-row .ck-labeled-field-view .ck.ck-dropdown,.ck.ck-table-form .ck-form__row.ck-table-form__dimensions-row .ck-table-form__dimension-operator{flex-grow:0}.ck.ck-table-form .ck.ck-labeled-field-view{position:relative}.ck.ck-table-form .ck.ck-labeled-field-view .ck.ck-labeled-field-view__status{bottom:calc(var(--ck-table-properties-error-arrow-size)*-1);left:50%;position:absolute;transform:translate(-50%,100%);z-index:1}.ck.ck-table-form .ck.ck-labeled-field-view .ck.ck-labeled-field-view__status:after{content:"";left:50%;position:absolute;top:calc(var(--ck-table-properties-error-arrow-size)*-1);transform:translateX(-50%)}:root{--ck-table-properties-error-arrow-size:6px;--ck-table-properties-min-error-width:150px}.ck.ck-table-form .ck-form__row.ck-table-form__border-row .ck-labeled-field-view>.ck-label{font-size:var(--ck-font-size-tiny);text-align:center}.ck.ck-table-form .ck-form__row.ck-table-form__border-row .ck-table-form__border-style,.ck.ck-table-form .ck-form__row.ck-table-form__border-row .ck-table-form__border-width{max-width:80px;min-width:80px;width:80px}.ck.ck-table-form .ck-form__row.ck-table-form__dimensions-row{padding:0}.ck.ck-table-form .ck-form__row.ck-table-form__dimensions-row .ck-table-form__dimensions-row__height,.ck.ck-table-form .ck-form__row.ck-table-form__dimensions-row .ck-table-form__dimensions-row__width{margin:0}.ck.ck-table-form .ck-form__row.ck-table-form__dimensions-row .ck-table-form__dimension-operator{align-self:flex-end;display:inline-block;height:var(--ck-ui-component-min-height);line-height:var(--ck-ui-component-min-height);margin:0 var(--ck-spacing-small)}.ck.ck-table-form .ck.ck-labeled-field-view{padding-top:var(--ck-spacing-standard)}.ck.ck-table-form .ck.ck-labeled-field-view .ck.ck-labeled-field-view__status{border-radius:0}.ck-rounded-corners .ck.ck-table-form .ck.ck-labeled-field-view .ck.ck-labeled-field-view__status,.ck.ck-table-form .ck.ck-labeled-field-view .ck.ck-labeled-field-view__status.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-table-form .ck.ck-labeled-field-view .ck.ck-labeled-field-view__status{background:var(--ck-color-base-error);color:var(--ck-color-base-background);min-width:var(--ck-table-properties-min-error-width);padding:var(--ck-spacing-small) var(--ck-spacing-medium);text-align:center}.ck.ck-table-form .ck.ck-labeled-field-view .ck.ck-labeled-field-view__status:after{border-color:transparent transparent var(--ck-color-base-error) transparent;border-style:solid;border-width:0 var(--ck-table-properties-error-arrow-size) var(--ck-table-properties-error-arrow-size) var(--ck-table-properties-error-arrow-size)}.ck.ck-table-form .ck.ck-labeled-field-view .ck.ck-labeled-field-view__status{animation:ck-table-form-labeled-view-status-appear .15s ease both}@media (prefers-reduced-motion:reduce){.ck.ck-table-form .ck.ck-labeled-field-view .ck.ck-labeled-field-view__status{animation:none}}.ck.ck-table-form .ck.ck-labeled-field-view .ck-input.ck-error:not(:focus)+.ck.ck-labeled-field-view__status{display:none}@keyframes ck-table-form-labeled-view-status-appear{0%{opacity:0}to{opacity:1}}',"",{version:3,sources:["webpack://./../ckeditor5-table/theme/tableform.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-table/tableform.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css"],names:[],mappings:"AAWE,wHACC,cACD,CAEA,8DAEC,kBAAmB,CADnB,cAgBD,CAbC,qFAGC,kBAAmB,CAFnB,YAAa,CACb,6BAMD,CAEA,sMACC,WACD,CAIF,4CAEC,iBAoBD,CAlBC,8EAGC,2DAAgE,CADhE,QAAS,CADT,iBAAkB,CAGlB,8BAA+B,CAG/B,SAUD,CAPC,oFACC,UAAW,CAGX,QAAS,CAFT,iBAAkB,CAClB,wDAA6D,CAE7D,0BACD,CChDH,MACC,0CAA2C,CAC3C,2CACD,CAMI,2FACC,kCAAmC,CACnC,iBACD,CAGD,8KAIC,cAAe,CADf,cAAe,CADf,UAGD,CAGD,8DACC,SAcD,CAZC,yMAEC,QACD,CAEA,iGACC,mBAAoB,CACpB,oBAAqB,CACrB,wCAAyC,CACzC,6CAA8C,CAC9C,gCACD,CAIF,4CACC,sCA6BD,CA3BC,8ECxCD,eD6DC,CArBA,mMCpCA,qCDyDA,CArBA,8EAGC,qCAAsC,CACtC,qCAAsC,CAEtC,oDAAqD,CADrD,wDAAyD,CAEzD,iBAcD,CAXC,oFACC,2EAA4E,CAE5E,kBAAmB,CADnB,kJAED,CAdD,8EAgBC,iEAKD,CAHC,uCAlBD,8EAmBE,cAEF,CADC,CAID,6GACC,YACD,CAIF,oDACC,GACC,SACD,CAEA,GACC,SACD,CACD",sourcesContent:[`/*
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
`],sourceRoot:""}]);const E=C},5562:(f,b,m)=>{m.d(b,{A:()=>E});var A=m(9372),v=m.n(A),x=m(935),C=m.n(x)()(v());C.push([f.id,".ck.ck-table-properties-form .ck-form__row.ck-table-properties-form__alignment-row{align-content:baseline;flex-basis:0;flex-wrap:wrap}.ck.ck-table-properties-form .ck-form__row.ck-table-properties-form__alignment-row .ck.ck-toolbar .ck-toolbar__items{flex-wrap:nowrap}.ck.ck-table-properties-form{width:320px}.ck.ck-table-properties-form .ck-form__row.ck-table-properties-form__alignment-row{align-self:flex-end;padding:0}.ck.ck-table-properties-form .ck-form__row.ck-table-properties-form__alignment-row .ck.ck-toolbar{background:none;margin-top:var(--ck-spacing-standard)}.ck.ck-table-properties-form .ck-form__row.ck-table-properties-form__alignment-row .ck.ck-toolbar .ck-toolbar__items>*{width:40px}","",{version:3,sources:["webpack://./../ckeditor5-table/theme/tableproperties.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-table/tableproperties.css"],names:[],mappings:"AAOE,mFAGC,sBAAuB,CADvB,YAAa,CADb,cAOD,CAHC,qHACC,gBACD,CCTH,6BACC,WAmBD,CAhBE,mFACC,mBAAoB,CACpB,SAYD,CAVC,kGACC,eAAgB,CAGhB,qCAKD,CAHC,uHACC,UACD",sourcesContent:[`/*
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
`],sourceRoot:""}]);const E=C},8423:(f,b,m)=>{m.d(b,{A:()=>E});var A=m(9372),v=m.n(A),x=m(935),C=m.n(x)()(v());C.push([f.id,':root{--ck-table-selected-cell-background:rgba(158,207,250,.3)}.ck.ck-editor__editable .table table td.ck-editor__editable_selected,.ck.ck-editor__editable .table table th.ck-editor__editable_selected{box-shadow:unset;caret-color:transparent;outline:unset;position:relative}.ck.ck-editor__editable .table table td.ck-editor__editable_selected:after,.ck.ck-editor__editable .table table th.ck-editor__editable_selected:after{background-color:var(--ck-table-selected-cell-background);bottom:0;content:"";left:0;pointer-events:none;position:absolute;right:0;top:0}.ck.ck-editor__editable .table table td.ck-editor__editable_selected ::selection,.ck.ck-editor__editable .table table td.ck-editor__editable_selected:focus,.ck.ck-editor__editable .table table th.ck-editor__editable_selected ::selection,.ck.ck-editor__editable .table table th.ck-editor__editable_selected:focus{background-color:transparent}.ck.ck-editor__editable .table table td.ck-editor__editable_selected .ck-widget,.ck.ck-editor__editable .table table th.ck-editor__editable_selected .ck-widget{outline:unset}.ck.ck-editor__editable .table table td.ck-editor__editable_selected .ck-widget>.ck-widget__selection-handle,.ck.ck-editor__editable .table table th.ck-editor__editable_selected .ck-widget>.ck-widget__selection-handle{display:none}',"",{version:3,sources:["webpack://./../ckeditor5-theme-lark/theme/ckeditor5-table/tableselection.css"],names:[],mappings:"AAKA,MACC,wDACD,CAGC,0IAKC,gBAAiB,CAFjB,uBAAwB,CACxB,aAAc,CAFd,iBAiCD,CA3BC,sJAGC,yDAA0D,CAK1D,QAAS,CAPT,UAAW,CAKX,MAAO,CAJP,mBAAoB,CAEpB,iBAAkB,CAGlB,OAAQ,CAFR,KAID,CAEA,wTAEC,4BACD,CAMA,gKACC,aAKD,CAHC,0NACC,YACD",sourcesContent:[`/*
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
`],sourceRoot:""}]);const E=C},1801:(f,b,m)=>{m.d(b,{A:()=>E});var A=m(9372),v=m.n(A),x=m(935),C=m.n(x)()(v());C.push([f.id,".ck.ck-aria-live-announcer{left:-10000px;position:absolute;top:-10000px}.ck.ck-aria-live-region-list{list-style-type:none}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/arialiveannouncer/arialiveannouncer.css"],names:[],mappings:"AAKA,2BAEC,aAAc,CADd,iBAAkB,CAElB,YACD,CAEA,6BACC,oBACD",sourcesContent:[`/*
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
`],sourceRoot:""}]);const E=C},5727:(f,b,m)=>{m.d(b,{A:()=>E});var A=m(9372),v=m.n(A),x=m(935),C=m.n(x)()(v());C.push([f.id,".ck.ck-autocomplete{position:relative}.ck.ck-autocomplete>.ck-search__results{position:absolute;z-index:var(--ck-z-panel)}.ck.ck-autocomplete>.ck-search__results.ck-search__results_n{bottom:100%}.ck.ck-autocomplete>.ck-search__results.ck-search__results_s{bottom:auto;top:100%}.ck.ck-autocomplete>.ck-search__results{border-radius:0}.ck-rounded-corners .ck.ck-autocomplete>.ck-search__results,.ck.ck-autocomplete>.ck-search__results.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-autocomplete>.ck-search__results{background:var(--ck-color-base-background);border:1px solid var(--ck-color-dropdown-panel-border);box-shadow:var(--ck-drop-shadow),0 0;max-height:200px;min-width:auto;overflow-y:auto}.ck.ck-autocomplete>.ck-search__results.ck-search__results_n{border-bottom-left-radius:0;border-bottom-right-radius:0;margin-bottom:-1px}.ck.ck-autocomplete>.ck-search__results.ck-search__results_s{border-top-left-radius:0;border-top-right-radius:0;margin-top:-1px}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/autocomplete/autocomplete.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/autocomplete/autocomplete.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_shadow.css"],names:[],mappings:"AAKA,oBACC,iBAeD,CAbC,wCACC,iBAAkB,CAClB,yBAUD,CARC,6DACC,WACD,CAEA,6DAEC,WAAY,CADZ,QAED,CCVD,wCCEA,eDuBA,CAzBA,uHCMC,qCDmBD,CAzBA,wCAMC,0CAA2C,CAC3C,sDAAuD,CEPxD,oCAA8B,CFI7B,gBAAiB,CAIjB,cAAe,CAHf,eAoBD,CAfC,6DACC,2BAA4B,CAC5B,4BAA6B,CAG7B,kBACD,CAEA,6DACC,wBAAyB,CACzB,yBAA0B,CAG1B,eACD",sourcesContent:[`/*
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
`],sourceRoot:""}]);const E=C},9715:(f,b,m)=>{m.d(b,{A:()=>E});var A=m(9372),v=m.n(A),x=m(935),C=m.n(x)()(v());C.push([f.id,".ck.ck-button,a.ck.ck-button{align-items:center;display:inline-flex;position:relative;-moz-user-select:none;-webkit-user-select:none;-ms-user-select:none;user-select:none}[dir=ltr] .ck.ck-button,[dir=ltr] a.ck.ck-button{justify-content:left}[dir=rtl] .ck.ck-button,[dir=rtl] a.ck.ck-button{justify-content:right}.ck.ck-button .ck-button__label,a.ck.ck-button .ck-button__label{display:none}.ck.ck-button.ck-button_with-text .ck-button__label,a.ck.ck-button.ck-button_with-text .ck-button__label{display:inline-block}.ck.ck-button:not(.ck-button_with-text),a.ck.ck-button:not(.ck-button_with-text){justify-content:center}.ck.ck-button,a.ck.ck-button{background:var(--ck-color-button-default-background)}.ck.ck-button:not(.ck-disabled):hover,a.ck.ck-button:not(.ck-disabled):hover{background:var(--ck-color-button-default-hover-background)}.ck.ck-button:not(.ck-disabled):active,a.ck.ck-button:not(.ck-disabled):active{background:var(--ck-color-button-default-active-background)}.ck.ck-button.ck-disabled,a.ck.ck-button.ck-disabled{background:var(--ck-color-button-default-disabled-background)}.ck.ck-button,a.ck.ck-button{border-radius:0}.ck-rounded-corners .ck.ck-button,.ck-rounded-corners a.ck.ck-button,.ck.ck-button.ck-rounded-corners,a.ck.ck-button.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-button,a.ck.ck-button{-webkit-appearance:none;border:1px solid transparent;cursor:default;font-size:inherit;line-height:1;min-height:var(--ck-ui-component-min-height);min-width:var(--ck-ui-component-min-height);padding:var(--ck-spacing-tiny);text-align:center;transition:box-shadow .2s ease-in-out,border .2s ease-in-out;vertical-align:middle;white-space:nowrap}@media (prefers-reduced-motion:reduce){.ck.ck-button,a.ck.ck-button{transition:none}}.ck.ck-button:active,.ck.ck-button:focus,a.ck.ck-button:active,a.ck.ck-button:focus{border:var(--ck-focus-ring);box-shadow:var(--ck-focus-outer-shadow),0 0;outline:none}.ck.ck-button .ck-button__icon use,.ck.ck-button .ck-button__icon use *,a.ck.ck-button .ck-button__icon use,a.ck.ck-button .ck-button__icon use *{color:inherit}.ck.ck-button .ck-button__label,a.ck.ck-button .ck-button__label{color:inherit;cursor:inherit;font-size:inherit;font-weight:inherit;vertical-align:middle}[dir=ltr] .ck.ck-button .ck-button__label,[dir=ltr] a.ck.ck-button .ck-button__label{text-align:left}[dir=rtl] .ck.ck-button .ck-button__label,[dir=rtl] a.ck.ck-button .ck-button__label{text-align:right}.ck.ck-button .ck-button__keystroke,a.ck.ck-button .ck-button__keystroke{color:inherit}[dir=ltr] .ck.ck-button .ck-button__keystroke,[dir=ltr] a.ck.ck-button .ck-button__keystroke{margin-left:var(--ck-spacing-large)}[dir=rtl] .ck.ck-button .ck-button__keystroke,[dir=rtl] a.ck.ck-button .ck-button__keystroke{margin-right:var(--ck-spacing-large)}.ck.ck-button .ck-button__keystroke,a.ck.ck-button .ck-button__keystroke{opacity:.5}.ck.ck-button.ck-disabled:active,.ck.ck-button.ck-disabled:focus,a.ck.ck-button.ck-disabled:active,a.ck.ck-button.ck-disabled:focus{box-shadow:var(--ck-focus-disabled-outer-shadow),0 0}.ck.ck-button.ck-disabled .ck-button__icon,.ck.ck-button.ck-disabled .ck-button__label,a.ck.ck-button.ck-disabled .ck-button__icon,a.ck.ck-button.ck-disabled .ck-button__label{opacity:var(--ck-disabled-opacity)}.ck.ck-button.ck-disabled .ck-button__keystroke,a.ck.ck-button.ck-disabled .ck-button__keystroke{opacity:.3}.ck.ck-button.ck-button_with-text,a.ck.ck-button.ck-button_with-text{padding:var(--ck-spacing-tiny) var(--ck-spacing-standard)}[dir=ltr] .ck.ck-button.ck-button_with-text .ck-button__icon,[dir=ltr] a.ck.ck-button.ck-button_with-text .ck-button__icon{margin-left:calc(var(--ck-spacing-small)*-1);margin-right:var(--ck-spacing-small)}[dir=rtl] .ck.ck-button.ck-button_with-text .ck-button__icon,[dir=rtl] a.ck.ck-button.ck-button_with-text .ck-button__icon{margin-left:var(--ck-spacing-small);margin-right:calc(var(--ck-spacing-small)*-1)}.ck.ck-button.ck-button_with-keystroke .ck-button__label,a.ck.ck-button.ck-button_with-keystroke .ck-button__label{flex-grow:1}.ck.ck-button.ck-on,a.ck.ck-button.ck-on{background:var(--ck-color-button-on-background)}.ck.ck-button.ck-on:not(.ck-disabled):hover,a.ck.ck-button.ck-on:not(.ck-disabled):hover{background:var(--ck-color-button-on-hover-background)}.ck.ck-button.ck-on:not(.ck-disabled):active,a.ck.ck-button.ck-on:not(.ck-disabled):active{background:var(--ck-color-button-on-active-background)}.ck.ck-button.ck-on.ck-disabled,a.ck.ck-button.ck-on.ck-disabled{background:var(--ck-color-button-on-disabled-background)}.ck.ck-button.ck-on,a.ck.ck-button.ck-on{color:var(--ck-color-button-on-color)}.ck.ck-button.ck-button-save,a.ck.ck-button.ck-button-save{color:var(--ck-color-button-save)}.ck.ck-button.ck-button-cancel,a.ck.ck-button.ck-button-cancel{color:var(--ck-color-button-cancel)}.ck.ck-button-action,a.ck.ck-button-action{background:var(--ck-color-button-action-background)}.ck.ck-button-action:not(.ck-disabled):hover,a.ck.ck-button-action:not(.ck-disabled):hover{background:var(--ck-color-button-action-hover-background)}.ck.ck-button-action:not(.ck-disabled):active,a.ck.ck-button-action:not(.ck-disabled):active{background:var(--ck-color-button-action-active-background)}.ck.ck-button-action.ck-disabled,a.ck.ck-button-action.ck-disabled{background:var(--ck-color-button-action-disabled-background)}.ck.ck-button-action,a.ck.ck-button-action{color:var(--ck-color-button-action-text)}.ck.ck-button-bold,a.ck.ck-button-bold{font-weight:700}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/button/button.css","webpack://./../ckeditor5-ui/theme/mixins/_unselectable.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/button/button.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/mixins/_button.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_focus.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_shadow.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_disabled.css"],names:[],mappings:"AAQA,6BAMC,kBAAmB,CADnB,mBAAoB,CADpB,iBAAkB,CCHlB,qBAAsB,CACtB,wBAAyB,CACzB,oBAAqB,CACrB,gBD0BD,CA9BA,iDASE,oBAqBF,CA9BA,iDAaE,qBAiBF,CAdC,iEACC,YACD,CAGC,yGACC,oBACD,CAID,iFACC,sBACD,CEzBD,6BCAC,oDD+ID,CC5IE,6EACC,0DACD,CAEA,+EACC,2DACD,CAID,qDACC,6DACD,CDfD,6BEDC,eFgJD,CA/IA,wIEGE,qCF4IF,CA/IA,6BA6BC,uBAAwB,CANxB,4BAA6B,CAjB7B,cAAe,CAcf,iBAAkB,CAHlB,aAAc,CAJd,4CAA6C,CAD7C,2CAA4C,CAJ5C,8BAA+B,CAC/B,iBAAkB,CAiBlB,4DAA8D,CAnB9D,qBAAsB,CAFtB,kBA0ID,CAhHC,uCA/BD,6BAgCE,eA+GF,CA9GC,CAEA,oFGpCA,2BAA2B,CCF3B,2CAA8B,CDC9B,YHyCA,CAIC,kJAEC,aACD,CAGD,iEAIC,aAAc,CACd,cAAe,CAHf,iBAAkB,CAClB,mBAAoB,CAMpB,qBASD,CAlBA,qFAYE,eAMF,CAlBA,qFAgBE,gBAEF,CAEA,yEACC,aAWD,CAZA,6FAIE,mCAQF,CAZA,6FAQE,oCAIF,CAZA,yEAWC,UACD,CAIC,oIIxFD,oDJ4FC,CAOA,gLKnGD,kCLqGC,CAEA,iGACC,UACD,CAGD,qEACC,yDAcD,CAXC,2HAEE,4CAA+C,CAC/C,oCAOF,CAVA,2HAQE,mCAAoC,CADpC,6CAGF,CAKA,mHACC,WACD,CAID,yCClIA,+CDsIA,CCnIC,yFACC,qDACD,CAEA,2FACC,sDACD,CAID,iEACC,wDACD,CDmHA,yCAGC,qCACD,CAEA,2DACC,iCACD,CAEA,+DACC,mCACD,CAID,2CClJC,mDDuJD,CCpJE,2FACC,yDACD,CAEA,6FACC,0DACD,CAID,mEACC,4DACD,CDmID,2CAIC,wCACD,CAEA,uCAEC,eACD",sourcesContent:[`/*
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
`],sourceRoot:""}]);const E=C},4391:(f,b,m)=>{m.d(b,{A:()=>E});var A=m(9372),v=m.n(A),x=m(935),C=m.n(x)()(v());C.push([f.id,".ck.ck-button.ck-switchbutton .ck-button__toggle,.ck.ck-button.ck-switchbutton .ck-button__toggle .ck-button__toggle__inner{display:block}:root{--ck-switch-button-toggle-width:2.6153846154em;--ck-switch-button-toggle-inner-size:calc(1.07692em + 1px);--ck-switch-button-translation:calc(var(--ck-switch-button-toggle-width) - var(--ck-switch-button-toggle-inner-size) - 2px);--ck-switch-button-inner-hover-shadow:0 0 0 5px var(--ck-color-switch-button-inner-shadow)}.ck.ck-button.ck-switchbutton,.ck.ck-button.ck-switchbutton.ck-on:active,.ck.ck-button.ck-switchbutton.ck-on:focus,.ck.ck-button.ck-switchbutton.ck-on:hover,.ck.ck-button.ck-switchbutton:active,.ck.ck-button.ck-switchbutton:focus,.ck.ck-button.ck-switchbutton:hover{background:transparent;color:inherit}[dir=ltr] .ck.ck-button.ck-switchbutton .ck-button__label{margin-right:calc(var(--ck-spacing-large)*2)}[dir=rtl] .ck.ck-button.ck-switchbutton .ck-button__label{margin-left:calc(var(--ck-spacing-large)*2)}.ck.ck-button.ck-switchbutton .ck-button__toggle{border-radius:0}.ck-rounded-corners .ck.ck-button.ck-switchbutton .ck-button__toggle,.ck.ck-button.ck-switchbutton .ck-button__toggle.ck-rounded-corners{border-radius:var(--ck-border-radius)}[dir=ltr] .ck.ck-button.ck-switchbutton .ck-button__toggle{margin-left:auto}[dir=rtl] .ck.ck-button.ck-switchbutton .ck-button__toggle{margin-right:auto}.ck.ck-button.ck-switchbutton .ck-button__toggle{background:var(--ck-color-switch-button-off-background);border:1px solid transparent;transition:background .4s ease,box-shadow .2s ease-in-out,outline .2s ease-in-out;width:var(--ck-switch-button-toggle-width)}.ck.ck-button.ck-switchbutton .ck-button__toggle .ck-button__toggle__inner{border-radius:0}.ck-rounded-corners .ck.ck-button.ck-switchbutton .ck-button__toggle .ck-button__toggle__inner,.ck.ck-button.ck-switchbutton .ck-button__toggle .ck-button__toggle__inner.ck-rounded-corners{border-radius:var(--ck-border-radius);border-radius:calc(var(--ck-border-radius)*.5)}.ck.ck-button.ck-switchbutton .ck-button__toggle .ck-button__toggle__inner{background:var(--ck-color-switch-button-inner-background);height:var(--ck-switch-button-toggle-inner-size);transition:all .3s ease;width:var(--ck-switch-button-toggle-inner-size)}@media (prefers-reduced-motion:reduce){.ck.ck-button.ck-switchbutton .ck-button__toggle .ck-button__toggle__inner{transition:none}}.ck.ck-button.ck-switchbutton .ck-button__toggle:hover{background:var(--ck-color-switch-button-off-hover-background)}.ck.ck-button.ck-switchbutton .ck-button__toggle:hover .ck-button__toggle__inner{box-shadow:var(--ck-switch-button-inner-hover-shadow)}.ck.ck-button.ck-switchbutton.ck-disabled .ck-button__toggle{opacity:var(--ck-disabled-opacity)}.ck.ck-button.ck-switchbutton:focus{border-color:transparent;box-shadow:none;outline:none}.ck.ck-button.ck-switchbutton:focus .ck-button__toggle{box-shadow:0 0 0 1px var(--ck-color-base-background),0 0 0 5px var(--ck-color-focus-outer-shadow);outline:var(--ck-focus-ring);outline-offset:1px}.ck.ck-button.ck-switchbutton.ck-on .ck-button__toggle{background:var(--ck-color-switch-button-on-background)}.ck.ck-button.ck-switchbutton.ck-on .ck-button__toggle:hover{background:var(--ck-color-switch-button-on-hover-background)}[dir=ltr] .ck.ck-button.ck-switchbutton.ck-on .ck-button__toggle .ck-button__toggle__inner{transform:translateX(var( --ck-switch-button-translation ))}[dir=rtl] .ck.ck-button.ck-switchbutton.ck-on .ck-button__toggle .ck-button__toggle__inner{transform:translateX(calc(var( --ck-switch-button-translation )*-1))}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/button/switchbutton.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/button/switchbutton.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_disabled.css"],names:[],mappings:"AASE,4HACC,aACD,CCCF,MAEC,8CAA+C,CAE/C,0DAAgE,CAChE,2HAIC,CACD,0FACD,CAOC,0QAEC,sBAAuB,CADvB,aAED,CAEA,0DAGE,4CAOF,CAVA,0DAQE,2CAEF,CAEA,iDCpCA,eDgFA,CA5CA,yIChCC,qCD4ED,CA5CA,2DAKE,gBAuCF,CA5CA,2DAUE,iBAkCF,CA5CA,iDAkBC,uDAAwD,CAFxD,4BAA6B,CAD7B,iFAAsF,CAEtF,0CA2BD,CAxBC,2ECxDD,eDuEC,CAfA,6LCpDA,qCAAsC,CDsDpC,8CAaF,CAfA,2EAOC,yDAA0D,CAD1D,gDAAiD,CAIjD,uBAA0B,CAL1B,+CAUD,CAHC,uCAZD,2EAaE,eAEF,CADC,CAGD,uDACC,6DAKD,CAHC,iFACC,qDACD,CAIF,6DEpFA,kCFsFA,CAGA,oCACC,wBAAyB,CAEzB,eAAgB,CADhB,YAQD,CALC,uDACC,iGAAmG,CAEnG,4BAA6B,CAD7B,kBAED,CAKA,uDACC,sDAkBD,CAhBC,6DACC,4DACD,CAEA,2FAKE,2DAMF,CAXA,2FASE,oEAEF",sourcesContent:[`/*
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
`],sourceRoot:""}]);const E=C},25:(f,b,m)=>{m.d(b,{A:()=>E});var A=m(9372),v=m.n(A),x=m(935),C=m.n(x)()(v());C.push([f.id,".ck.ck-collapsible.ck-collapsible_collapsed>.ck-collapsible__children{display:none}:root{--ck-collapsible-arrow-size:calc(var(--ck-icon-size)*0.5)}.ck.ck-collapsible>.ck.ck-button{border-radius:0;color:inherit;font-weight:700;padding:var(--ck-list-button-padding);width:100%}.ck.ck-collapsible>.ck.ck-button:focus{background:transparent}.ck.ck-collapsible>.ck.ck-button:active,.ck.ck-collapsible>.ck.ck-button:hover:not(:focus),.ck.ck-collapsible>.ck.ck-button:not(:focus){background:transparent;border-color:transparent;box-shadow:none}.ck.ck-collapsible>.ck.ck-button>.ck-icon{margin-right:var(--ck-spacing-medium);width:var(--ck-collapsible-arrow-size)}.ck.ck-collapsible>.ck-collapsible__children{padding:var(--ck-spacing-medium) var(--ck-spacing-large) var(--ck-spacing-large)}.ck.ck-collapsible.ck-collapsible_collapsed>.ck.ck-button .ck-icon{transform:rotate(-90deg)}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/collapsible/collapsible.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/collapsible/collapsible.css"],names:[],mappings:"AAMC,sEACC,YACD,CCHD,MACC,yDACD,CAGC,iCAIC,eAAgB,CAChB,aAAc,CAHd,eAAiB,CACjB,qCAAsC,CAFtC,UAoBD,CAdC,uCACC,sBACD,CAEA,wIACC,sBAAuB,CACvB,wBAAyB,CACzB,eACD,CAEA,0CACC,qCAAsC,CACtC,sCACD,CAGD,6CACC,gFACD,CAGC,mEACC,wBACD",sourcesContent:[`/*
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
`],sourceRoot:""}]);const E=C},7317:(f,b,m)=>{m.d(b,{A:()=>E});var A=m(9372),v=m.n(A),x=m(935),C=m.n(x)()(v());C.push([f.id,".ck.ck-color-grid{display:grid}:root{--ck-color-grid-tile-size:24px;--ck-color-color-grid-check-icon:#166fd4}.ck.ck-color-grid{grid-gap:5px;padding:8px}.ck.ck-color-grid__tile{transition:box-shadow .2s ease}@media (forced-colors:none){.ck.ck-color-grid__tile{border:0;height:var(--ck-color-grid-tile-size);min-height:var(--ck-color-grid-tile-size);min-width:var(--ck-color-grid-tile-size);padding:0;width:var(--ck-color-grid-tile-size)}.ck.ck-color-grid__tile.ck-on,.ck.ck-color-grid__tile:focus:not(.ck-disabled),.ck.ck-color-grid__tile:hover:not(.ck-disabled){border:0}.ck.ck-color-grid__tile.ck-color-selector__color-tile_bordered{box-shadow:0 0 0 1px var(--ck-color-base-border)}.ck.ck-color-grid__tile.ck-on{box-shadow:inset 0 0 0 1px var(--ck-color-base-background),0 0 0 2px var(--ck-color-base-text)}.ck.ck-color-grid__tile:focus:not(.ck-disabled),.ck.ck-color-grid__tile:hover:not(.ck-disabled){box-shadow:inset 0 0 0 1px var(--ck-color-base-background),0 0 0 2px var(--ck-color-focus-border)}}@media (forced-colors:active){.ck.ck-color-grid__tile{height:unset;min-height:unset;min-width:unset;padding:0 var(--ck-spacing-small);width:unset}.ck.ck-color-grid__tile .ck-button__label{display:inline-block}}@media (prefers-reduced-motion:reduce){.ck.ck-color-grid__tile{transition:none}}.ck.ck-color-grid__tile.ck-disabled{cursor:unset;transition:unset}.ck.ck-color-grid__tile .ck.ck-icon{color:var(--ck-color-color-grid-check-icon);display:none}.ck.ck-color-grid__tile.ck-on .ck.ck-icon{display:block}.ck.ck-color-grid__label{padding:0 var(--ck-spacing-standard)}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/colorgrid/colorgrid.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/colorgrid/colorgrid.css","webpack://./../ckeditor5-ui/theme/mixins/_mediacolors.css"],names:[],mappings:"AAKA,kBACC,YACD,CCCA,MACC,8BAA+B,CAK/B,wCACD,CAEA,kBACC,YAAa,CACb,WACD,CAEA,wBACC,8BAkED,CC3EC,4BACC,wBDgBA,QAAS,CAJT,qCAAsC,CAEtC,yCAA0C,CAD1C,wCAAyC,CAEzC,SAAU,CAJV,oCCTA,CDgBA,8HAIC,QACD,CAEA,+DACC,gDACD,CAEA,8BACC,8FACD,CAEA,gGAEC,iGACD,CCjCD,CAZA,8BACC,wBDqDA,YAAa,CAEb,gBAAiB,CADjB,eAAgB,CAEhB,iCAAkC,CAJlC,WClDA,CDwDA,0CACC,oBACD,CCzDD,CD4DA,uCAhDD,wBAiDE,eAkBF,CAjBC,CAEA,oCACC,YAAa,CACb,gBACD,CAEA,oCAEC,2CAA4C,CAD5C,YAED,CAGC,0CACC,aACD,CAIF,yBACC,oCACD",sourcesContent:[`/*
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
`],sourceRoot:""}]);const E=C},1905:(f,b,m)=>{m.d(b,{A:()=>E});var A=m(9372),v=m.n(A),x=m(935),C=m.n(x)()(v());C.push([f.id,".color-picker-hex-input{width:max-content}.color-picker-hex-input .ck.ck-input{min-width:unset}.ck.ck-color-picker__row{display:flex;flex-direction:row;flex-wrap:nowrap;justify-content:space-between;margin:var(--ck-spacing-large) 0 0;width:unset}.ck.ck-color-picker__row .ck.ck-labeled-field-view{padding-top:unset}.ck.ck-color-picker__row .ck.ck-input-text{width:unset}.ck.ck-color-picker__row .ck-color-picker__hash-view{padding-right:var(--ck-spacing-medium);padding-top:var(--ck-spacing-tiny)}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/colorpicker/colorpicker.css"],names:[],mappings:"AAKA,wBACC,iBAKD,CAHC,qCACC,eACD,CAGD,yBACC,YAAa,CACb,kBAAmB,CACnB,gBAAiB,CACjB,6BAA8B,CAC9B,kCAAmC,CACnC,WAcD,CAZC,mDACC,iBACD,CAEA,2CACC,WACD,CAEA,qDAEC,sCAAuC,CADvC,kCAED",sourcesContent:[`/*
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
`],sourceRoot:""}]);const E=C},6309:(f,b,m)=>{m.d(b,{A:()=>E});var A=m(9372),v=m.n(A),x=m(935),C=m.n(x)()(v());C.push([f.id,".ck.ck-color-selector .ck-color-grids-fragment .ck-button.ck-color-selector__color-picker,.ck.ck-color-selector .ck-color-grids-fragment .ck-button.ck-color-selector__remove-color{align-items:center;display:flex}[dir=rtl] .ck.ck-color-selector .ck-color-grids-fragment .ck-button.ck-color-selector__color-picker,[dir=rtl] .ck.ck-color-selector .ck-color-grids-fragment .ck-button.ck-color-selector__remove-color{justify-content:flex-start}.ck.ck-color-selector .ck-color-picker-fragment .ck.ck-color-selector_action-bar{display:flex;flex-direction:row;justify-content:space-around}.ck.ck-color-selector .ck-color-picker-fragment .ck.ck-color-selector_action-bar .ck-button-cancel,.ck.ck-color-selector .ck-color-picker-fragment .ck.ck-color-selector_action-bar .ck-button-save{flex:1}.ck.ck-color-selector .ck-color-grids-fragment .ck-button.ck-color-selector__color-picker,.ck.ck-color-selector .ck-color-grids-fragment .ck-button.ck-color-selector__remove-color{width:100%}.ck.ck-color-selector .ck-color-grids-fragment .ck-button.ck-color-selector__color-picker{border-bottom-left-radius:0;border-bottom-right-radius:0;padding:calc(var(--ck-spacing-standard)/2) var(--ck-spacing-standard)}.ck.ck-color-selector .ck-color-grids-fragment .ck-button.ck-color-selector__color-picker:not(:focus){border-top:1px solid var(--ck-color-base-border)}[dir=ltr] .ck.ck-color-selector .ck-color-grids-fragment .ck-button.ck-color-selector__color-picker .ck.ck-icon{margin-right:var(--ck-spacing-standard)}[dir=rtl] .ck.ck-color-selector .ck-color-grids-fragment .ck-button.ck-color-selector__color-picker .ck.ck-icon{margin-left:var(--ck-spacing-standard)}.ck.ck-color-selector .ck-color-grids-fragment label.ck.ck-color-grid__label{font-weight:unset}.ck.ck-color-selector .ck-color-picker-fragment .ck.ck-color-picker{padding:8px}.ck.ck-color-selector .ck-color-picker-fragment .ck.ck-color-picker .hex-color-picker{height:100px;min-width:180px}.ck.ck-color-selector .ck-color-picker-fragment .ck.ck-color-picker .hex-color-picker::part(saturation){border-radius:var(--ck-border-radius) var(--ck-border-radius) 0 0}.ck.ck-color-selector .ck-color-picker-fragment .ck.ck-color-picker .hex-color-picker::part(hue){border-radius:0 0 var(--ck-border-radius) var(--ck-border-radius)}.ck.ck-color-selector .ck-color-picker-fragment .ck.ck-color-picker .hex-color-picker::part(hue-pointer),.ck.ck-color-selector .ck-color-picker-fragment .ck.ck-color-picker .hex-color-picker::part(saturation-pointer){height:15px;width:15px}.ck.ck-color-selector .ck-color-picker-fragment .ck.ck-color-selector_action-bar{padding:0 8px 8px}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/colorselector/colorselector.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/colorselector/colorselector.css"],names:[],mappings:"AAUE,oLAGC,kBAAmB,CADnB,YAMD,CARA,wMAME,0BAEF,CAKA,iFACC,YAAa,CACb,kBAAmB,CACnB,4BAMD,CAJC,oMAEC,MACD,CCrBD,oLAEC,UACD,CAEA,0FAEC,2BAA4B,CAC5B,4BAA6B,CAF7B,qEAiBD,CAbC,sGACC,gDACD,CAEA,gHAEE,uCAMF,CARA,gHAME,sCAEF,CAGD,6EACC,iBACD,CAKA,oEACC,WAoBD,CAlBC,sFACC,YAAa,CACb,eAeD,CAbC,wGACC,iEACD,CAEA,iGACC,iEACD,CAEA,yNAGC,WAAY,CADZ,UAED,CAIF,iFACC,iBACD",sourcesContent:[`/*
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
`],sourceRoot:""}]);const E=C},9819:(f,b,m)=>{m.d(b,{A:()=>E});var A=m(9372),v=m.n(A),x=m(935),C=m.n(x)()(v());C.push([f.id,".ck.ck-dialog-overlay{bottom:0;left:0;overscroll-behavior:none;position:fixed;right:0;top:0;user-select:none}.ck.ck-dialog-overlay.ck-dialog-overlay__transparent{animation:none;background:none;pointer-events:none}.ck.ck-dialog{overscroll-behavior:none;position:absolute;width:fit-content}.ck.ck-dialog .ck.ck-form__header{flex-shrink:0}.ck.ck-dialog .ck.ck-form__header .ck-form__header__label{cursor:grab}.ck.ck-dialog-overlay.ck-dialog-overlay__transparent .ck.ck-dialog{pointer-events:all}:root{--ck-dialog-overlay-background-color:rgba(0,0,0,.5);--ck-dialog-drop-shadow:0px 0px 6px 2px rgba(0,0,0,.15);--ck-dialog-max-width:100vw;--ck-dialog-max-height:90vh;--ck-color-dialog-background:var(--ck-color-base-background);--ck-color-dialog-form-header-border:var(--ck-color-base-border)}.ck.ck-dialog-overlay{animation:ck-dialog-fade-in .3s;background:var(--ck-dialog-overlay-background-color);z-index:var(--ck-z-dialog)}.ck.ck-dialog{border-radius:0}.ck-rounded-corners .ck.ck-dialog,.ck.ck-dialog.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-dialog{box-shadow:var(--ck-drop-shadow),0 0;--ck-drop-shadow:var(--ck-dialog-drop-shadow);background:var(--ck-color-dialog-background);border:1px solid var(--ck-color-base-border);max-height:var(--ck-dialog-max-height);max-width:var(--ck-dialog-max-width)}.ck.ck-dialog .ck.ck-form__header{border-bottom:1px solid var(--ck-color-dialog-form-header-border)}@keyframes ck-dialog-fade-in{0%{background:transparent}to{background:var(--ck-dialog-overlay-background-color)}}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/dialog/dialog.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/dialog/dialog.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_shadow.css"],names:[],mappings:"AAKA,sBAKC,QAAS,CACT,MAAO,CAJP,wBAAyB,CAEzB,cAAe,CAGf,OAAQ,CACR,KAAM,CAPN,gBAcD,CALC,qDAEC,cAAe,CACf,eAAgB,CAFhB,mBAGD,CAGD,cACC,wBAAyB,CAEzB,iBAAkB,CADlB,iBAcD,CAXC,kCACC,aAKD,CAHC,0DACC,WACD,CAVF,mEAcE,kBAEF,CC7BA,MACC,mDAA2D,CAC3D,uDAA8D,CAC9D,2BAA4B,CAC5B,2BAA4B,CAC5B,4DAA6D,CAC7D,gEACD,CAEA,sBACC,+BAAgC,CAChC,oDAAqD,CACrD,0BACD,CAEA,cCbC,eD2BD,CAdA,mECTE,qCDuBF,CAdA,cEfC,oCAA8B,CFmB9B,6CAA8C,CAE9C,4CAA6C,CAG7C,4CAA6C,CAF7C,sCAAuC,CACvC,oCAMD,CAHC,kCACC,iEACD,CAGD,6BACC,GACC,sBACD,CAEA,GACC,oDACD,CACD",sourcesContent:[`/*
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
`],sourceRoot:""}]);const E=C},9822:(f,b,m)=>{m.d(b,{A:()=>E});var A=m(9372),v=m.n(A),x=m(935),C=m.n(x)()(v());C.push([f.id,".ck.ck-dialog .ck.ck-dialog__actions{display:flex;justify-content:flex-end;padding:var(--ck-spacing-large)}.ck.ck-dialog .ck.ck-dialog__actions>*+*{margin-left:var(--ck-spacing-large)}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/dialog/dialogactions.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/dialog/dialogactions.css"],names:[],mappings:"AAMC,qCACC,YAAa,CACb,wBAAyB,CCDzB,+BDED,CCAC,yCACC,mCACD",sourcesContent:[`/*
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
`],sourceRoot:""}]);const E=C},8149:(f,b,m)=>{m.d(b,{A:()=>E});var A=m(9372),v=m.n(A),x=m(935),C=m.n(x)()(v());C.push([f.id,":root{--ck-dropdown-max-width:75vw}.ck.ck-dropdown{display:inline-block;position:relative}.ck.ck-dropdown .ck-dropdown__arrow{pointer-events:none;z-index:var(--ck-z-default)}.ck.ck-dropdown .ck-button.ck-dropdown__button{width:100%}.ck.ck-dropdown .ck-dropdown__panel{display:none;max-width:var(--ck-dropdown-max-width);position:absolute;z-index:var(--ck-z-panel)}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel-visible{display:inline-block}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_n,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_ne,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_nme,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_nmw,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_nw{bottom:100%}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_s,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_se,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_sme,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_smw,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_sw{bottom:auto;top:100%}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_ne,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_se{left:0}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_nw,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_sw{right:0}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_n,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_s{left:50%;transform:translateX(-50%)}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_nmw,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_smw{left:75%;transform:translateX(-75%)}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_nme,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_sme{left:25%;transform:translateX(-25%)}.ck.ck-toolbar .ck-dropdown__panel{z-index:calc(var(--ck-z-panel) + 1)}:root{--ck-dropdown-arrow-size:calc(var(--ck-icon-size)*0.5)}.ck.ck-dropdown{font-size:inherit}.ck.ck-dropdown .ck-dropdown__arrow{width:var(--ck-dropdown-arrow-size)}[dir=ltr] .ck.ck-dropdown .ck-dropdown__arrow{margin-left:var(--ck-spacing-standard);right:var(--ck-spacing-standard)}[dir=rtl] .ck.ck-dropdown .ck-dropdown__arrow{left:var(--ck-spacing-standard);margin-right:var(--ck-spacing-small)}.ck.ck-dropdown.ck-disabled .ck-dropdown__arrow{opacity:var(--ck-disabled-opacity)}[dir=ltr] .ck.ck-dropdown .ck-button.ck-dropdown__button:not(.ck-button_with-text){padding-left:var(--ck-spacing-small)}[dir=rtl] .ck.ck-dropdown .ck-button.ck-dropdown__button:not(.ck-button_with-text){padding-right:var(--ck-spacing-small)}.ck.ck-dropdown .ck-button.ck-dropdown__button .ck-button__label{overflow:hidden;text-overflow:ellipsis;width:7em}.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-disabled .ck-button__label{opacity:var(--ck-disabled-opacity)}.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-on{border-bottom-left-radius:0;border-bottom-right-radius:0}.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-dropdown__button_label-width_auto .ck-button__label{width:auto}.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-off:active,.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-on:active{box-shadow:none}.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-off:active:focus,.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-on:active:focus{box-shadow:var(--ck-focus-outer-shadow),0 0}.ck.ck-dropdown__panel{border-radius:0}.ck-rounded-corners .ck.ck-dropdown__panel,.ck.ck-dropdown__panel.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-dropdown__panel{background:var(--ck-color-dropdown-panel-background);border:1px solid var(--ck-color-dropdown-panel-border);bottom:0;box-shadow:var(--ck-drop-shadow),0 0;min-width:100%}.ck.ck-dropdown__panel.ck-dropdown__panel_se{border-top-left-radius:0}.ck.ck-dropdown__panel.ck-dropdown__panel_sw{border-top-right-radius:0}.ck.ck-dropdown__panel.ck-dropdown__panel_ne{border-bottom-left-radius:0}.ck.ck-dropdown__panel.ck-dropdown__panel_nw{border-bottom-right-radius:0}.ck.ck-dropdown__panel:focus{outline:none}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/dropdown/dropdown.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/dropdown/dropdown.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_disabled.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_shadow.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css"],names:[],mappings:"AAKA,MACC,4BACD,CAEA,gBACC,oBAAqB,CACrB,iBA2ED,CAzEC,oCACC,mBAAoB,CACpB,2BACD,CAGA,+CACC,UACD,CAEA,oCACC,YAAa,CAEb,sCAAuC,CAEvC,iBAAkB,CAHlB,yBA4DD,CAvDC,+DACC,oBACD,CAEA,mSAKC,WACD,CAEA,mSAUC,WAAY,CADZ,QAED,CAEA,oHAEC,MACD,CAEA,oHAEC,OACD,CAEA,kHAGC,QAAS,CACT,0BACD,CAEA,sHAGC,QAAS,CACT,0BACD,CAEA,sHAGC,QAAS,CACT,0BACD,CAQF,mCACC,mCACD,CCpFA,MACC,sDACD,CAEA,gBAEC,iBA2ED,CAzEC,oCACC,mCACD,CAGC,8CAIC,sCAAuC,CAHvC,gCAID,CAIA,8CACC,+BAAgC,CAGhC,oCACD,CAGD,gDC/BA,kCDiCA,CAIE,mFAEC,oCACD,CAIA,mFAEC,qCACD,CAID,iEAEC,eAAgB,CAChB,sBAAuB,CAFvB,SAGD,CAGA,6EC1DD,kCD4DC,CAGA,qDACC,2BAA4B,CAC5B,4BACD,CAEA,sGACC,UACD,CAGA,yHAEC,eAKD,CAHC,qIE7EF,2CF+EE,CAKH,uBGlFC,eHkHD,CAhCA,qFG9EE,qCH8GF,CAhCA,uBAIC,oDAAqD,CACrD,sDAAuD,CACvD,QAAS,CE1FT,oCAA8B,CF6F9B,cAuBD,CAnBC,6CACC,wBACD,CAEA,6CACC,yBACD,CAEA,6CACC,2BACD,CAEA,6CACC,4BACD,CAEA,6BACC,YACD",sourcesContent:[`/*
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
`],sourceRoot:""}]);const E=C},3629:(f,b,m)=>{m.d(b,{A:()=>E});var A=m(9372),v=m.n(A),x=m(935),C=m.n(x)()(v());C.push([f.id,".ck.ck-dropdown>.ck-dropdown__panel>.ck-list{border-radius:0}.ck-rounded-corners .ck.ck-dropdown>.ck-dropdown__panel>.ck-list,.ck.ck-dropdown>.ck-dropdown__panel>.ck-list.ck-rounded-corners{border-radius:var(--ck-border-radius);border-top-left-radius:0}.ck.ck-dropdown>.ck-dropdown__panel>.ck-list .ck-list__item:first-child>.ck-button{border-radius:0}.ck-rounded-corners .ck.ck-dropdown>.ck-dropdown__panel>.ck-list .ck-list__item:first-child>.ck-button,.ck.ck-dropdown>.ck-dropdown__panel>.ck-list .ck-list__item:first-child>.ck-button.ck-rounded-corners{border-radius:var(--ck-border-radius);border-bottom-left-radius:0;border-bottom-right-radius:0;border-top-left-radius:0}.ck.ck-dropdown>.ck-dropdown__panel>.ck-list .ck-list__item:last-child>.ck-button{border-radius:0}.ck-rounded-corners .ck.ck-dropdown>.ck-dropdown__panel>.ck-list .ck-list__item:last-child>.ck-button,.ck.ck-dropdown>.ck-dropdown__panel>.ck-list .ck-list__item:last-child>.ck-button.ck-rounded-corners{border-radius:var(--ck-border-radius);border-top-left-radius:0;border-top-right-radius:0}","",{version:3,sources:["webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/dropdown/listdropdown.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css"],names:[],mappings:"AAOA,6CCIC,eDqBD,CAzBA,iICQE,qCAAsC,CDJtC,wBAqBF,CAfE,mFCND,eDYC,CANA,6MCFA,qCAAsC,CDKpC,2BAA4B,CAC5B,4BAA6B,CAF7B,wBAIF,CAEA,kFCdD,eDmBC,CALA,2MCVA,qCAAsC,CDYpC,wBAAyB,CACzB,yBAEF",sourcesContent:[`/*
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
`],sourceRoot:""}]);const E=C},1792:(f,b,m)=>{m.d(b,{A:()=>E});var A=m(9372),v=m.n(A),x=m(935),C=m.n(x)()(v());C.push([f.id,'.ck.ck-splitbutton{font-size:inherit}.ck.ck-splitbutton .ck-splitbutton__action:focus{z-index:calc(var(--ck-z-default) + 1)}:root{--ck-color-split-button-hover-background:#ebebeb;--ck-color-split-button-hover-border:#b3b3b3}[dir=ltr] .ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__action,[dir=ltr] .ck.ck-splitbutton:hover>.ck-splitbutton__action{border-bottom-right-radius:unset;border-top-right-radius:unset}[dir=rtl] .ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__action,[dir=rtl] .ck.ck-splitbutton:hover>.ck-splitbutton__action{border-bottom-left-radius:unset;border-top-left-radius:unset}.ck.ck-splitbutton>.ck-splitbutton__arrow{min-width:unset}[dir=ltr] .ck.ck-splitbutton>.ck-splitbutton__arrow{border-bottom-left-radius:unset;border-top-left-radius:unset}[dir=rtl] .ck.ck-splitbutton>.ck-splitbutton__arrow{border-bottom-right-radius:unset;border-top-right-radius:unset}.ck.ck-splitbutton>.ck-splitbutton__arrow svg{width:var(--ck-dropdown-arrow-size)}.ck.ck-splitbutton>.ck-splitbutton__arrow:not(:focus){border-bottom-width:0;border-top-width:0}.ck.ck-splitbutton.ck-splitbutton_open>.ck-button:not(.ck-on):not(.ck-disabled):not(:hover),.ck.ck-splitbutton:hover>.ck-button:not(.ck-on):not(.ck-disabled):not(:hover){background:var(--ck-color-split-button-hover-background)}.ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__arrow:not(.ck-disabled):after,.ck.ck-splitbutton:hover>.ck-splitbutton__arrow:not(.ck-disabled):after{background-color:var(--ck-color-split-button-hover-border);content:"";height:100%;position:absolute;width:1px}.ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__arrow:focus:after,.ck.ck-splitbutton:hover>.ck-splitbutton__arrow:focus:after{--ck-color-split-button-hover-border:var(--ck-color-focus-border)}[dir=ltr] .ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__arrow:not(.ck-disabled):after,[dir=ltr] .ck.ck-splitbutton:hover>.ck-splitbutton__arrow:not(.ck-disabled):after{left:-1px}[dir=rtl] .ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__arrow:not(.ck-disabled):after,[dir=rtl] .ck.ck-splitbutton:hover>.ck-splitbutton__arrow:not(.ck-disabled):after{right:-1px}.ck.ck-splitbutton.ck-splitbutton_open{border-radius:0}.ck-rounded-corners .ck.ck-splitbutton.ck-splitbutton_open,.ck.ck-splitbutton.ck-splitbutton_open.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck-rounded-corners .ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__action,.ck.ck-splitbutton.ck-splitbutton_open.ck-rounded-corners>.ck-splitbutton__action{border-bottom-left-radius:0}.ck-rounded-corners .ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__arrow,.ck.ck-splitbutton.ck-splitbutton_open.ck-rounded-corners>.ck-splitbutton__arrow{border-bottom-right-radius:0}',"",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/dropdown/splitbutton.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/dropdown/splitbutton.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css"],names:[],mappings:"AAKA,mBAEC,iBAKD,CAHC,iDACC,qCACD,CCJD,MACC,gDAAyD,CACzD,4CACD,CAMC,oIAKE,gCAAiC,CADjC,6BASF,CAbA,oIAWE,+BAAgC,CADhC,4BAGF,CAEA,0CAGC,eAiBD,CApBA,oDAQE,+BAAgC,CADhC,4BAaF,CApBA,oDAcE,gCAAiC,CADjC,6BAOF,CAHC,8CACC,mCACD,CAKD,sDAEC,qBAAwB,CADxB,kBAED,CAQC,0KACC,wDACD,CAIA,8JAKC,0DAA2D,CAJ3D,UAAW,CAGX,WAAY,CAFZ,iBAAkB,CAClB,SAGD,CAGA,sIACC,iEACD,CAGC,kLACC,SACD,CAIA,kLACC,UACD,CAMF,uCCzFA,eDmGA,CAVA,qHCrFC,qCD+FD,CARE,qKACC,2BACD,CAEA,mKACC,4BACD",sourcesContent:[`/*
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
`],sourceRoot:""}]);const E=C},1666:(f,b,m)=>{m.d(b,{A:()=>E});var A=m(9372),v=m.n(A),x=m(935),C=m.n(x)()(v());C.push([f.id,":root{--ck-toolbar-dropdown-max-width:60vw}.ck.ck-toolbar-dropdown>.ck-dropdown__panel{max-width:var(--ck-toolbar-dropdown-max-width);width:max-content}.ck.ck-toolbar-dropdown>.ck-dropdown__panel .ck-button:focus{z-index:calc(var(--ck-z-default) + 1)}.ck.ck-toolbar-dropdown .ck-toolbar{border:0}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/dropdown/toolbardropdown.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/dropdown/toolbardropdown.css"],names:[],mappings:"AAKA,MACC,oCACD,CAEA,4CAGC,8CAA+C,CAD/C,iBAQD,CAJE,6DACC,qCACD,CCZF,oCACC,QACD",sourcesContent:[`/*
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
`],sourceRoot:""}]);const E=C},8527:(f,b,m)=>{m.d(b,{A:()=>E});var A=m(9372),v=m.n(A),x=m(935),C=m.n(x)()(v());C.push([f.id,":root{--ck-accessibility-help-dialog-max-width:600px;--ck-accessibility-help-dialog-max-height:400px;--ck-accessibility-help-dialog-border-color:#ccced1;--ck-accessibility-help-dialog-code-background-color:#ededed;--ck-accessibility-help-dialog-kbd-shadow-color:#9c9c9c}.ck.ck-accessibility-help-dialog .ck-accessibility-help-dialog__content{border:1px solid transparent;max-height:var(--ck-accessibility-help-dialog-max-height);max-width:var(--ck-accessibility-help-dialog-max-width);overflow:auto;padding:var(--ck-spacing-large);user-select:text}.ck.ck-accessibility-help-dialog .ck-accessibility-help-dialog__content:focus{border:var(--ck-focus-ring);box-shadow:var(--ck-focus-outer-shadow),0 0;outline:none}.ck.ck-accessibility-help-dialog .ck-accessibility-help-dialog__content{*{white-space:normal}}.ck.ck-accessibility-help-dialog .ck-accessibility-help-dialog__content .ck-label{display:none}.ck.ck-accessibility-help-dialog .ck-accessibility-help-dialog__content h3{font-size:1.2em;font-weight:700}.ck.ck-accessibility-help-dialog .ck-accessibility-help-dialog__content h4{font-size:1em;font-weight:700}.ck.ck-accessibility-help-dialog .ck-accessibility-help-dialog__content h3,.ck.ck-accessibility-help-dialog .ck-accessibility-help-dialog__content h4,.ck.ck-accessibility-help-dialog .ck-accessibility-help-dialog__content p,.ck.ck-accessibility-help-dialog .ck-accessibility-help-dialog__content table{margin:1em 0}.ck.ck-accessibility-help-dialog .ck-accessibility-help-dialog__content dl{border-bottom:none;border-top:1px solid var(--ck-accessibility-help-dialog-border-color);display:grid;grid-template-columns:2fr 1fr}.ck.ck-accessibility-help-dialog .ck-accessibility-help-dialog__content dl dd,.ck.ck-accessibility-help-dialog .ck-accessibility-help-dialog__content dl dt{border-bottom:1px solid var(--ck-accessibility-help-dialog-border-color);padding:.4em 0}.ck.ck-accessibility-help-dialog .ck-accessibility-help-dialog__content dl dt{grid-column-start:1}.ck.ck-accessibility-help-dialog .ck-accessibility-help-dialog__content dl dd{grid-column-start:2;text-align:right}.ck.ck-accessibility-help-dialog .ck-accessibility-help-dialog__content code,.ck.ck-accessibility-help-dialog .ck-accessibility-help-dialog__content kbd{background:var(--ck-accessibility-help-dialog-code-background-color);border-radius:2px;display:inline-block;font-size:.9em;line-height:1;padding:.4em;text-align:center;vertical-align:middle}.ck.ck-accessibility-help-dialog .ck-accessibility-help-dialog__content code{font-family:monospace}.ck.ck-accessibility-help-dialog .ck-accessibility-help-dialog__content kbd{box-shadow:0 1px 1px var(--ck-accessibility-help-dialog-kbd-shadow-color);margin:0 1px;min-width:1.8em}.ck.ck-accessibility-help-dialog .ck-accessibility-help-dialog__content kbd+kbd{margin-left:2px}","",{version:3,sources:["webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/editorui/accessibilityhelp.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_focus.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_shadow.css"],names:[],mappings:"AAQA,MACC,8CAA+C,CAC/C,+CAAgD,CAChD,mDAA8D,CAC9D,4DAAyE,CACzE,uDACD,CAEA,wEAOC,4BAA6B,CAJ7B,yDAA0D,CAD1D,uDAAwD,CAExD,aAAc,CAHd,+BAAgC,CAIhC,gBAgFD,CA5EC,8ECdA,2BAA2B,CCF3B,2CAA8B,CDC9B,YDkBA,CAZD,wEAcC,EACC,kBACD,CAqED,CAlEC,kFACC,YACD,CAEA,2EAEC,eAAgB,CADhB,eAED,CAEA,2EAEC,aAAc,CADd,eAED,CAEA,8SAIC,YACD,CAEA,2EAIC,kBAAmB,CADnB,qEAAsE,CAFtE,YAAa,CACb,6BAiBD,CAbC,4JACC,wEAAyE,CACzE,cACD,CAEA,8EACC,mBACD,CAEA,8EACC,mBAAoB,CACpB,gBACD,CAGD,yJAEC,oEAAqE,CAIrE,iBAAkB,CALlB,oBAAqB,CAOrB,cAAe,CAHf,aAAc,CAFd,YAAa,CAIb,iBAAkB,CAHlB,qBAKD,CAEA,6EACC,qBACD,CAEA,4EAEC,yEAA4E,CAC5E,YAAa,CAFb,eAOD,CAHC,gFACC,eACD",sourcesContent:[`/*
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
`],sourceRoot:""}]);const E=C},1185:(f,b,m)=>{m.d(b,{A:()=>E});var A=m(9372),v=m.n(A),x=m(935),C=m.n(x)()(v());C.push([f.id,":root{--ck-color-editable-blur-selection:#d9d9d9}.ck.ck-editor__editable:not(.ck-editor__nested-editable){border-radius:0}.ck-rounded-corners .ck.ck-editor__editable:not(.ck-editor__nested-editable),.ck.ck-editor__editable.ck-rounded-corners:not(.ck-editor__nested-editable){border-radius:var(--ck-border-radius)}.ck.ck-editor__editable.ck-focused:not(.ck-editor__nested-editable){border:var(--ck-focus-ring);box-shadow:var(--ck-inner-shadow),0 0;outline:none}.ck.ck-editor__editable_inline{border:1px solid transparent;overflow:auto;padding:0 var(--ck-spacing-standard)}.ck.ck-editor__editable_inline[dir=ltr]{text-align:left}.ck.ck-editor__editable_inline[dir=rtl]{text-align:right}.ck.ck-editor__editable_inline>:first-child{margin-top:var(--ck-spacing-large)}.ck.ck-editor__editable_inline>:last-child{margin-bottom:var(--ck-spacing-large)}.ck.ck-editor__editable_inline.ck-blurred ::selection{background:var(--ck-color-editable-blur-selection)}.ck.ck-balloon-panel.ck-toolbar-container[class*=arrow_n]:after{border-bottom-color:var(--ck-color-panel-background)}.ck.ck-balloon-panel.ck-toolbar-container[class*=arrow_s]:after{border-top-color:var(--ck-color-panel-background)}","",{version:3,sources:["webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/editorui/editorui.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_focus.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_shadow.css"],names:[],mappings:"AAWA,MACC,0CACD,CAEA,yDCJC,eDWD,CAPA,yJCAE,qCDOF,CAJC,oEEPA,2BAA2B,CCF3B,qCAA8B,CDC9B,YFWA,CAGD,+BAGC,4BAA6B,CAF7B,aAAc,CACd,oCA6BD,CA1BC,wCACC,eACD,CAEA,wCACC,gBACD,CAGA,4CACC,kCACD,CAGA,2CAKC,qCACD,CAGA,sDACC,kDACD,CAKA,gEACC,oDACD,CAIA,gEACC,iDACD",sourcesContent:[`/*
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
`],sourceRoot:""}]);const E=C},7913:(f,b,m)=>{m.d(b,{A:()=>E});var A=m(9372),v=m.n(A),x=m(935),C=m.n(x)()(v());C.push([f.id,".ck.ck-form__header{align-items:center;display:flex;flex-direction:row;flex-wrap:nowrap;justify-content:space-between}.ck.ck-form__header h2.ck-form__header__label{flex-grow:1}:root{--ck-form-header-height:44px}.ck.ck-form__header{border-bottom:1px solid var(--ck-color-base-border);height:var(--ck-form-header-height);line-height:var(--ck-form-header-height);padding:var(--ck-spacing-small) var(--ck-spacing-large)}[dir=ltr] .ck.ck-form__header>.ck-icon{margin-right:var(--ck-spacing-medium)}[dir=rtl] .ck.ck-form__header>.ck-icon{margin-left:var(--ck-spacing-medium)}.ck.ck-form__header .ck-form__header__label{--ck-font-size-base:15px;font-weight:700}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/formheader/formheader.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/formheader/formheader.css"],names:[],mappings:"AAKA,oBAIC,kBAAmB,CAHnB,YAAa,CACb,kBAAmB,CACnB,gBAAiB,CAEjB,6BAKD,CAHC,8CACC,WACD,CCPD,MACC,4BACD,CAEA,oBAIC,mDAAoD,CAFpD,mCAAoC,CACpC,wCAAyC,CAFzC,uDAmBD,CAdC,uCAEE,qCAMF,CARA,uCAME,oCAEF,CAEA,4CACC,wBAAyB,CACzB,eACD",sourcesContent:[`/*
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
`],sourceRoot:""}]);const E=C},9529:(f,b,m)=>{m.d(b,{A:()=>E});var A=m(9372),v=m.n(A),x=m(935),C=m.n(x)()(v());C.push([f.id,".ck.ck-highlighted-text mark{background:var(--ck-color-highlight-background);font-size:inherit;font-weight:inherit;line-height:inherit;vertical-align:initial}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/highlightedtext/highlightedtext.css"],names:[],mappings:"AAKA,6BACC,+CAAgD,CAIhD,iBAAkB,CAFlB,mBAAoB,CACpB,mBAAoB,CAFpB,sBAID",sourcesContent:[`/*
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
`],sourceRoot:""}]);const E=C},7621:(f,b,m)=>{m.d(b,{A:()=>E});var A=m(9372),v=m.n(A),x=m(935),C=m.n(x)()(v());C.push([f.id,".ck.ck-icon{vertical-align:middle}:root{--ck-icon-size:calc(var(--ck-line-height-base)*var(--ck-font-size-normal))}.ck.ck-icon{font-size:.8333350694em;height:var(--ck-icon-size);width:var(--ck-icon-size);will-change:transform}.ck.ck-icon,.ck.ck-icon *{cursor:inherit}.ck.ck-icon.ck-icon_inherit-color,.ck.ck-icon.ck-icon_inherit-color *{color:inherit}.ck.ck-icon.ck-icon_inherit-color :not([fill]){fill:currentColor}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/icon/icon.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/icon/icon.css"],names:[],mappings:"AAKA,YACC,qBACD,CCFA,MACC,0EACD,CAEA,YAKC,uBAAwB,CAHxB,0BAA2B,CAD3B,yBAA0B,CAU1B,qBAoBD,CAlBC,0BALA,cAQA,CAMC,sEACC,aAMD,CAJC,+CAEC,iBACD",sourcesContent:[`/*
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
`],sourceRoot:""}]);const E=C},253:(f,b,m)=>{m.d(b,{A:()=>E});var A=m(9372),v=m.n(A),x=m(935),C=m.n(x)()(v());C.push([f.id,":root{--ck-input-width:18em;--ck-input-text-width:var(--ck-input-width)}.ck.ck-input{border-radius:0}.ck-rounded-corners .ck.ck-input,.ck.ck-input.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-input{background:var(--ck-color-input-background);border:1px solid var(--ck-color-input-border);min-height:var(--ck-ui-component-min-height);min-width:var(--ck-input-width);padding:var(--ck-spacing-extra-tiny) var(--ck-spacing-medium);transition:box-shadow .1s ease-in-out,border .1s ease-in-out}@media (prefers-reduced-motion:reduce){.ck.ck-input{transition:none}}.ck.ck-input:focus{border:var(--ck-focus-ring);box-shadow:var(--ck-focus-outer-shadow),0 0;outline:none}.ck.ck-input[readonly]{background:var(--ck-color-input-disabled-background);border:1px solid var(--ck-color-input-disabled-border);color:var(--ck-color-input-disabled-text)}.ck.ck-input[readonly]:focus{box-shadow:var(--ck-focus-disabled-outer-shadow),0 0}.ck.ck-input.ck-error{animation:ck-input-shake .3s ease both;border-color:var(--ck-color-input-error-border)}@media (prefers-reduced-motion:reduce){.ck.ck-input.ck-error{animation:none}}.ck.ck-input.ck-error:focus{box-shadow:var(--ck-focus-error-outer-shadow),0 0}@keyframes ck-input-shake{20%{transform:translateX(-2px)}40%{transform:translateX(2px)}60%{transform:translateX(-1px)}80%{transform:translateX(1px)}}","",{version:3,sources:["webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/input/input.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_focus.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_shadow.css"],names:[],mappings:"AASA,MACC,qBAAsB,CAGtB,2CACD,CAEA,aCLC,eDmDD,CA9CA,iECDE,qCD+CF,CA9CA,aAGC,2CAA4C,CAC5C,6CAA8C,CAK9C,4CAA6C,CAH7C,+BAAgC,CADhC,6DAA8D,CAO9D,4DAkCD,CAhCC,uCAdD,aAeE,eA+BF,CA9BC,CAEA,mBEvBA,2BAA2B,CCF3B,2CAA8B,CDC9B,YF2BA,CAEA,uBAEC,oDAAqD,CADrD,sDAAuD,CAEvD,yCAMD,CAJC,6BGnCD,oDHsCC,CAGD,sBAEC,sCAAuC,CADvC,+CAUD,CAPC,uCAJD,sBAKE,cAMF,CALC,CAEA,4BGjDD,iDHmDC,CAIF,0BACC,IACC,0BACD,CAEA,IACC,yBACD,CAEA,IACC,0BACD,CAEA,IACC,yBACD,CACD",sourcesContent:[`/*
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
`],sourceRoot:""}]);const E=C},7801:(f,b,m)=>{m.d(b,{A:()=>E});var A=m(9372),v=m.n(A),x=m(935),C=m.n(x)()(v());C.push([f.id,".ck.ck-label{display:block}.ck.ck-voice-label{display:none}.ck.ck-label{font-weight:700}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/label/label.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/label/label.css"],names:[],mappings:"AAKA,aACC,aACD,CAEA,mBACC,YACD,CCNA,aACC,eACD",sourcesContent:[`/*
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
`],sourceRoot:""}]);const E=C},4962:(f,b,m)=>{m.d(b,{A:()=>E});var A=m(9372),v=m.n(A),x=m(935),C=m.n(x)()(v());C.push([f.id,".ck.ck-labeled-field-view>.ck.ck-labeled-field-view__input-wrapper{display:flex;position:relative}.ck.ck-labeled-field-view .ck.ck-label{display:block;position:absolute}:root{--ck-labeled-field-view-transition:.1s cubic-bezier(0,0,0.24,0.95);--ck-labeled-field-empty-unfocused-max-width:100% - 2 * var(--ck-spacing-medium);--ck-labeled-field-label-default-position-x:var(--ck-spacing-medium);--ck-labeled-field-label-default-position-y:calc(var(--ck-font-size-base)*0.6);--ck-color-labeled-field-label-background:var(--ck-color-base-background)}.ck.ck-labeled-field-view{border-radius:0}.ck-rounded-corners .ck.ck-labeled-field-view,.ck.ck-labeled-field-view.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-labeled-field-view>.ck.ck-labeled-field-view__input-wrapper{width:100%}.ck.ck-labeled-field-view>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{top:0}[dir=ltr] .ck.ck-labeled-field-view>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{left:0;transform:translate(var(--ck-spacing-medium),-6px) scale(.75);transform-origin:0 0}[dir=rtl] .ck.ck-labeled-field-view>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{right:0;transform:translate(calc(var(--ck-spacing-medium)*-1),-6px) scale(.75);transform-origin:100% 0}.ck.ck-labeled-field-view>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{background:var(--ck-color-labeled-field-label-background);font-weight:400;line-height:normal;max-width:100%;overflow:hidden;padding:0 calc(var(--ck-font-size-tiny)*.5);pointer-events:none;text-overflow:ellipsis;transition:transform var(--ck-labeled-field-view-transition),padding var(--ck-labeled-field-view-transition),background var(--ck-labeled-field-view-transition)}@media (prefers-reduced-motion:reduce){.ck.ck-labeled-field-view>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{transition:none}}.ck.ck-labeled-field-view.ck-error .ck-input:not([readonly])+.ck.ck-label,.ck.ck-labeled-field-view.ck-error>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{color:var(--ck-color-base-error)}.ck.ck-labeled-field-view .ck-labeled-field-view__status{font-size:var(--ck-font-size-small);margin-top:var(--ck-spacing-small);white-space:normal}.ck.ck-labeled-field-view .ck-labeled-field-view__status.ck-labeled-field-view__status_error{color:var(--ck-color-base-error)}.ck.ck-labeled-field-view.ck-disabled>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label,.ck.ck-labeled-field-view.ck-labeled-field-view_empty:not(.ck-labeled-field-view_focused)>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{color:var(--ck-color-input-disabled-text)}[dir=ltr] .ck.ck-labeled-field-view.ck-disabled.ck-labeled-field-view_empty:not(.ck-labeled-field-view_placeholder)>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label,[dir=ltr] .ck.ck-labeled-field-view.ck-labeled-field-view_empty:not(.ck-labeled-field-view_focused):not(.ck-labeled-field-view_placeholder):not(.ck-error)>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{transform:translate(var(--ck-labeled-field-label-default-position-x),var(--ck-labeled-field-label-default-position-y)) scale(1)}[dir=rtl] .ck.ck-labeled-field-view.ck-disabled.ck-labeled-field-view_empty:not(.ck-labeled-field-view_placeholder)>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label,[dir=rtl] .ck.ck-labeled-field-view.ck-labeled-field-view_empty:not(.ck-labeled-field-view_focused):not(.ck-labeled-field-view_placeholder):not(.ck-error)>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{transform:translate(calc(var(--ck-labeled-field-label-default-position-x)*-1),var(--ck-labeled-field-label-default-position-y)) scale(1)}.ck.ck-labeled-field-view.ck-disabled.ck-labeled-field-view_empty:not(.ck-labeled-field-view_placeholder)>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label,.ck.ck-labeled-field-view.ck-labeled-field-view_empty:not(.ck-labeled-field-view_focused):not(.ck-labeled-field-view_placeholder):not(.ck-error)>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{background:transparent;max-width:calc(var(--ck-labeled-field-empty-unfocused-max-width));padding:0}.ck.ck-labeled-field-view>.ck.ck-labeled-field-view__input-wrapper>.ck-dropdown>.ck.ck-button{background:transparent}.ck.ck-labeled-field-view.ck-labeled-field-view_empty>.ck.ck-labeled-field-view__input-wrapper>.ck-dropdown>.ck-button>.ck-button__label{opacity:0}.ck.ck-labeled-field-view.ck-labeled-field-view_empty:not(.ck-labeled-field-view_focused):not(.ck-labeled-field-view_placeholder)>.ck.ck-labeled-field-view__input-wrapper>.ck-dropdown+.ck-label{max-width:calc(var(--ck-labeled-field-empty-unfocused-max-width) - var(--ck-dropdown-arrow-size) - var(--ck-spacing-standard))}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/labeledfield/labeledfieldview.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/labeledfield/labeledfieldview.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css"],names:[],mappings:"AAMC,mEACC,YAAa,CACb,iBACD,CAEA,uCACC,aAAc,CACd,iBACD,CCND,MACC,kEAAsE,CACtE,gFAAiF,CACjF,oEAAqE,CACrE,8EAAiF,CACjF,yEACD,CAEA,0BCLC,eDmHD,CA9GA,2FCDE,qCD+GF,CA3GC,mEACC,UAwCD,CAtCC,gFACC,KAoCD,CArCA,0FAIE,MAAS,CAGT,6DAA+D,CAF/D,oBAgCF,CArCA,0FAWE,OAAU,CAEV,sEAA0E,CAD1E,uBAyBF,CArCA,gFAkBC,yDAA0D,CAG1D,eAAmB,CADnB,kBAAoB,CAOpB,cAAe,CAFf,eAAgB,CANhB,2CAA8C,CAH9C,mBAAoB,CAQpB,sBAAuB,CAKvB,+JAQD,CAHC,uCAlCD,gFAmCE,eAEF,CADC,CASD,mKACC,gCACD,CAGD,yDACC,mCAAoC,CACpC,kCAAmC,CAInC,kBAKD,CAHC,6FACC,gCACD,CAID,4OAEC,yCACD,CAIA,2XAGE,+HAYF,CAfA,2XAOE,wIAQF,CAfA,uWAaC,sBAAuB,CAFvB,iEAAkE,CAGlE,SACD,CAKA,8FACC,sBACD,CAGA,yIACC,SACD,CAGA,kMACC,8HACD",sourcesContent:[`/*
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
`],sourceRoot:""}]);const E=C},5199:(f,b,m)=>{m.d(b,{A:()=>E});var A=m(9372),v=m.n(A),x=m(935),C=m.n(x)()(v());C.push([f.id,".ck.ck-list{display:flex;flex-direction:column;-moz-user-select:none;-webkit-user-select:none;-ms-user-select:none;user-select:none}.ck.ck-list .ck-list__item,.ck.ck-list .ck-list__separator{display:block}.ck.ck-list .ck-list__item>:focus{position:relative;z-index:var(--ck-z-default)}:root{--ck-list-button-padding:calc(var(--ck-line-height-base)*0.11*var(--ck-font-size-base)) calc(var(--ck-line-height-base)*0.4*var(--ck-font-size-base))}.ck.ck-list{border-radius:0}.ck-rounded-corners .ck.ck-list,.ck.ck-list.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-list{background:var(--ck-color-list-background);list-style-type:none}.ck.ck-list__item{cursor:default;min-width:12em}.ck.ck-list__item>.ck-button{border-radius:0;min-height:unset;width:100%}[dir=ltr] .ck.ck-list__item>.ck-button{text-align:left}[dir=rtl] .ck.ck-list__item>.ck-button{text-align:right}.ck.ck-list__item>.ck-button{padding:var(--ck-list-button-padding)}.ck.ck-list__item>.ck-button:active{box-shadow:none}.ck.ck-list__item>.ck-button.ck-on{background:var(--ck-color-list-button-on-background);color:var(--ck-color-list-button-on-text)}.ck.ck-list__item>.ck-button.ck-on:active{box-shadow:none}.ck.ck-list__item>.ck-button.ck-on:hover:not(.ck-disabled){background:var(--ck-color-list-button-on-background-focus)}.ck.ck-list__item>.ck-button.ck-on:focus:not(.ck-switchbutton):not(.ck-disabled){border-color:var(--ck-color-base-background)}.ck.ck-list__item>.ck-button:hover:not(.ck-disabled){background:var(--ck-color-list-button-hover-background)}.ck.ck-list__item>.ck-switchbutton.ck-on{background:var(--ck-color-list-background);color:inherit}.ck.ck-list__item>.ck-switchbutton.ck-on:hover:not(.ck-disabled){background:var(--ck-color-list-button-hover-background);color:inherit}.ck-list .ck-list__group{padding-top:var(--ck-spacing-medium);:not(.ck-hidden)~&{border-top:1px solid var(--ck-color-base-border)}}.ck-list .ck-list__group>.ck-label{font-size:11px;font-weight:700;padding:var(--ck-spacing-medium) var(--ck-spacing-medium) 0 var(--ck-spacing-medium)}.ck.ck-list__separator{background:var(--ck-color-base-border);height:1px;width:100%}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/list/list.css","webpack://./../ckeditor5-ui/theme/mixins/_unselectable.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/list/list.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css"],names:[],mappings:"AAOA,YAGC,YAAa,CACb,qBAAsB,CCFtB,qBAAsB,CACtB,wBAAyB,CACzB,oBAAqB,CACrB,gBDaD,CAZC,2DAEC,aACD,CAKA,kCACC,iBAAkB,CAClB,2BACD,CEdD,MACC,qJAGD,CAEA,YCLC,eDUD,CALA,+DCDE,qCDMF,CALA,YAIC,0CAA2C,CAD3C,oBAED,CAEA,kBACC,cAAe,CACf,cA2DD,CAzDC,6BAGC,eAAgB,CAFhB,gBAAiB,CACjB,UAwCD,CA1CA,uCAME,eAoCF,CA1CA,uCAUE,gBAgCF,CA1CA,6BAgBC,qCA0BD,CAxBC,oCACC,eACD,CAEA,mCACC,oDAAqD,CACrD,yCAaD,CAXC,0CACC,eACD,CAEA,2DACC,0DACD,CAEA,iFACC,4CACD,CAGD,qDACC,uDACD,CAMA,yCACC,0CAA2C,CAC3C,aAMD,CAJC,iEACC,uDAAwD,CACxD,aACD,CAKH,yBACC,oCAAqC,CAGrC,mBACC,gDACD,CAOD,CALC,mCACC,cAAe,CACf,eAAiB,CACjB,oFACD,CAGD,uBAGC,sCAAuC,CAFvC,UAAW,CACX,UAED",sourcesContent:[`/*
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
`],sourceRoot:""}]);const E=C},497:(f,b,m)=>{m.d(b,{A:()=>E});var A=m(9372),v=m.n(A),x=m(935),C=m.n(x)()(v());C.push([f.id,".ck.ck-menu-bar{background:var(--ck-color-base-background);border:1px solid var(--ck-color-toolbar-border);display:flex;flex-wrap:wrap;gap:var(--ck-spacing-small);justify-content:flex-start;padding:var(--ck-spacing-small);width:100%}","",{version:3,sources:["webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/menubar/menubar.css"],names:[],mappings:"AAKA,gBAIC,0CAA2C,CAG3C,+CAAgD,CANhD,YAAa,CACb,cAAe,CAIf,2BAA4B,CAH5B,0BAA2B,CAE3B,+BAAgC,CAGhC,UACD",sourcesContent:[`/*
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
`],sourceRoot:""}]);const E=C},4:(f,b,m)=>{m.d(b,{A:()=>E});var A=m(9372),v=m.n(A),x=m(935),C=m.n(x)()(v());C.push([f.id,".ck.ck-menu-bar__menu{display:block;font-size:inherit;position:relative}.ck.ck-menu-bar__menu.ck-menu-bar__menu_top-level{max-width:100%}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/menubar/menubarmenu.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/menubar/menubarmenu.css"],names:[],mappings:"AAKA,sBACC,aAAc,CCCd,iBAAkB,CDAlB,iBACD,CCCC,kDACC,cACD",sourcesContent:[`/*
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
`],sourceRoot:""}]);const E=C},3344:(f,b,m)=>{m.d(b,{A:()=>E});var A=m(9372),v=m.n(A),x=m(935),C=m.n(x)()(v());C.push([f.id,".ck.ck-menu-bar__menu>.ck-menu-bar__menu__button>.ck-menu-bar__menu__button__arrow{pointer-events:none;z-index:var(--ck-z-default)}.ck.ck-menu-bar__menu>.ck-menu-bar__menu__button{padding:var(--ck-list-button-padding);width:100%}.ck.ck-menu-bar__menu>.ck-menu-bar__menu__button>.ck-button__label{flex-grow:1;overflow:hidden;text-overflow:ellipsis}.ck.ck-menu-bar__menu>.ck-menu-bar__menu__button.ck-disabled>.ck-button__label{opacity:var(--ck-disabled-opacity)}[dir=ltr] .ck.ck-menu-bar__menu>.ck-menu-bar__menu__button:not(.ck-button_with-text){padding-left:var(--ck-spacing-small)}[dir=rtl] .ck.ck-menu-bar__menu>.ck-menu-bar__menu__button:not(.ck-button_with-text){padding-right:var(--ck-spacing-small)}.ck.ck-menu-bar__menu.ck-menu-bar__menu_top-level>.ck-menu-bar__menu__button{min-height:unset;padding:var(--ck-spacing-small) var(--ck-spacing-medium)}.ck.ck-menu-bar__menu.ck-menu-bar__menu_top-level>.ck-menu-bar__menu__button .ck-button__label{line-height:unset;width:unset}.ck.ck-menu-bar__menu.ck-menu-bar__menu_top-level>.ck-menu-bar__menu__button.ck-on{border-bottom-left-radius:0;border-bottom-right-radius:0}.ck.ck-menu-bar__menu.ck-menu-bar__menu_top-level>.ck-menu-bar__menu__button .ck-icon{display:none}.ck.ck-menu-bar__menu:not(.ck-menu-bar__menu_top-level) .ck-menu-bar__menu__button{border-radius:0}.ck.ck-menu-bar__menu:not(.ck-menu-bar__menu_top-level) .ck-menu-bar__menu__button:focus{border-color:transparent;box-shadow:none}.ck.ck-menu-bar__menu:not(.ck-menu-bar__menu_top-level) .ck-menu-bar__menu__button:focus:not(.ck-on){background:var(--ck-color-button-default-hover-background)}.ck.ck-menu-bar__menu:not(.ck-menu-bar__menu_top-level) .ck-menu-bar__menu__button:not(:has(.ck-button__icon))>.ck-button__label{margin-left:calc(var(--ck-icon-size) - var(--ck-spacing-small))}.ck.ck-menu-bar__menu:not(.ck-menu-bar__menu_top-level) .ck-menu-bar__menu__button>.ck-menu-bar__menu__button__arrow{width:var(--ck-dropdown-arrow-size)}[dir=ltr] .ck.ck-menu-bar__menu:not(.ck-menu-bar__menu_top-level) .ck-menu-bar__menu__button>.ck-menu-bar__menu__button__arrow{transform:rotate(-90deg)}[dir=rtl] .ck.ck-menu-bar__menu:not(.ck-menu-bar__menu_top-level) .ck-menu-bar__menu__button>.ck-menu-bar__menu__button__arrow{transform:rotate(90deg)}.ck.ck-menu-bar__menu:not(.ck-menu-bar__menu_top-level) .ck-menu-bar__menu__button.ck-disabled>.ck-menu-bar__menu__button__arrow{opacity:var(--ck-disabled-opacity)}[dir=ltr] .ck.ck-menu-bar__menu:not(.ck-menu-bar__menu_top-level) .ck-menu-bar__menu__button>.ck-menu-bar__menu__button__arrow{margin-left:var(--ck-spacing-standard);right:var(--ck-spacing-standard)}[dir=rtl] .ck.ck-menu-bar__menu:not(.ck-menu-bar__menu_top-level) .ck-menu-bar__menu__button>.ck-menu-bar__menu__button__arrow{left:var(--ck-spacing-standard);margin-right:var(--ck-spacing-small)}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/menubar/menubarmenubutton.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/menubar/menubarmenubutton.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_disabled.css"],names:[],mappings:"AAMC,mFACC,mBAAoB,CACpB,2BACD,CCIA,iDACC,qCAAsC,CACtC,UAuBD,CArBC,mEACC,WAAY,CACZ,eAAgB,CAChB,sBACD,CAEA,+ECdD,kCDgBC,CAGC,qFACC,oCACD,CAIA,qFACC,qCACD,CAOF,6EAEC,gBAAiB,CADjB,wDAgBD,CAbC,+FAEC,iBAAkB,CADlB,WAED,CAEA,mFACC,2BAA4B,CAC5B,4BACD,CAEA,sFACC,YACD,CAMD,mFACC,eAiDD,CA/CC,yFACC,wBAAyB,CACzB,eAKD,CAHC,qGACC,0DACD,CAID,iIACC,+DACD,CAEA,qHACC,mCASD,CAVA,+HAIE,wBAMF,CAVA,+HAQE,uBAEF,CAEA,iICrFD,kCDuFC,CAGC,+HAIC,sCAAuC,CAHvC,gCAID,CAIA,+HACC,+BAAgC,CAGhC,oCACD",sourcesContent:[`/*
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
`],sourceRoot:""}]);const E=C},9481:(f,b,m)=>{m.d(b,{A:()=>E});var A=m(9372),v=m.n(A),x=m(935),C=m.n(x)()(v());C.push([f.id,":root{--ck-menu-bar-menu-item-min-width:18em}.ck.ck-menu-bar__menu .ck.ck-menu-bar__menu__item{min-width:var(--ck-menu-bar-menu-item-min-width)}","",{version:3,sources:["webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/menubar/menubarmenulistitem.css"],names:[],mappings:"AAKA,MACC,sCACD,CAEA,kDACC,gDACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-menu-bar-menu-item-min-width: 18em;
}

.ck.ck-menu-bar__menu .ck.ck-menu-bar__menu__item {
	min-width: var(--ck-menu-bar-menu-item-min-width);
}
`],sourceRoot:""}]);const E=C},977:(f,b,m)=>{m.d(b,{A:()=>E});var A=m(9372),v=m.n(A),x=m(935),C=m.n(x)()(v());C.push([f.id,".ck.ck-menu-bar__menu .ck-button.ck-menu-bar__menu__item__button{border-radius:0}.ck.ck-menu-bar__menu .ck-button.ck-menu-bar__menu__item__button>.ck-spinner-container,.ck.ck-menu-bar__menu .ck-button.ck-menu-bar__menu__item__button>.ck-spinner-container .ck-spinner{--ck-toolbar-spinner-size:20px}.ck.ck-menu-bar__menu .ck-button.ck-menu-bar__menu__item__button>.ck-spinner-container{margin-left:calc(var(--ck-spacing-small)*-1);margin-right:var(--ck-spacing-small)}.ck.ck-menu-bar__menu .ck-button.ck-menu-bar__menu__item__button:focus{border-color:transparent;box-shadow:none}.ck.ck-menu-bar__menu .ck-button.ck-menu-bar__menu__item__button:focus:not(.ck-on){background:var(--ck-color-button-default-hover-background)}.ck.ck-menu-bar__menu.ck-menu-bar__menu_top-level>.ck-menu-bar__menu__panel>ul>.ck-menu-bar__menu__item>.ck-menu-bar__menu__item__button:not(:has(.ck-button__icon))>.ck-button__label{margin-left:calc(var(--ck-icon-size) - var(--ck-spacing-small))}","",{version:3,sources:["webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/menubar/menubarmenulistitembutton.css"],names:[],mappings:"AASC,iEACC,eA0BD,CAxBC,0LAGC,8BACD,CAEA,uFAEC,4CAA+C,CAC/C,oCACD,CAMA,uEACC,wBAAyB,CACzB,eAKD,CAHC,mFACC,0DACD,CASD,uLACC,+DACD",sourcesContent:[`/*
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


`],sourceRoot:""}]);const E=C},9108:(f,b,m)=>{m.d(b,{A:()=>E});var A=m(9372),v=m.n(A),x=m(935),C=m.n(x)()(v());C.push([f.id,":root{--ck-menu-bar-menu-max-width:75vw;--ck-menu-bar-nested-menu-horizontal-offset:5px}.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel{max-width:var(--ck-menu-bar-menu-max-width);position:absolute;z-index:var(--ck-z-panel)}.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel.ck-menu-bar__menu__panel_position_ne,.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel.ck-menu-bar__menu__panel_position_nw{bottom:100%}.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel.ck-menu-bar__menu__panel_position_se,.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel.ck-menu-bar__menu__panel_position_sw{bottom:auto;top:100%}.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel.ck-menu-bar__menu__panel_position_ne,.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel.ck-menu-bar__menu__panel_position_se{left:0}.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel.ck-menu-bar__menu__panel_position_nw,.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel.ck-menu-bar__menu__panel_position_sw{right:0}.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel.ck-menu-bar__menu__panel_position_en,.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel.ck-menu-bar__menu__panel_position_es{left:calc(100% - var(--ck-menu-bar-nested-menu-horizontal-offset))}.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel.ck-menu-bar__menu__panel_position_es{top:0}.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel.ck-menu-bar__menu__panel_position_en{bottom:0}.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel.ck-menu-bar__menu__panel_position_wn,.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel.ck-menu-bar__menu__panel_position_ws{right:calc(100% - var(--ck-menu-bar-nested-menu-horizontal-offset))}.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel.ck-menu-bar__menu__panel_position_ws{top:0}.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel.ck-menu-bar__menu__panel_position_wn{bottom:0}:root{--ck-menu-bar-menu-panel-max-width:75vw}.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel{border-radius:0}.ck-rounded-corners .ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel,.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel{background:var(--ck-color-dropdown-panel-background);border:1px solid var(--ck-color-dropdown-panel-border);bottom:0;box-shadow:var(--ck-drop-shadow),0 0;height:fit-content;max-width:var(--ck-menu-bar-menu-panel-max-width)}.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel.ck-menu-bar__menu__panel_position_es,.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel.ck-menu-bar__menu__panel_position_se{border-top-left-radius:0}.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel.ck-menu-bar__menu__panel_position_sw,.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel.ck-menu-bar__menu__panel_position_ws{border-top-right-radius:0}.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel.ck-menu-bar__menu__panel_position_en,.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel.ck-menu-bar__menu__panel_position_ne{border-bottom-left-radius:0}.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel.ck-menu-bar__menu__panel_position_nw,.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel.ck-menu-bar__menu__panel_position_wn{border-bottom-right-radius:0}.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel:focus{outline:none}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/menubar/menubarmenupanel.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/menubar/menubarmenupanel.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_shadow.css"],names:[],mappings:"AAKA,MACC,iCAAkC,CAClC,+CACD,CAEA,mDAEC,2CAA4C,CAC5C,iBAAkB,CAFlB,yBAkDD,CA9CC,gLAEC,WACD,CAEA,gLAGC,WAAY,CADZ,QAED,CAEA,gLAEC,MACD,CAEA,gLAEC,OACD,CAEA,gLAEC,kEACD,CAEA,wFACC,KACD,CAEA,wFACC,QACD,CAEA,gLAEC,mEACD,CAEA,wFACC,KACD,CAEA,wFACC,QACD,CCpDD,MACC,uCACD,CAEA,mDCDC,eDmCD,CAlCA,6ICGE,qCD+BF,CAlCA,mDAIC,oDAAqD,CACrD,sDAAuD,CACvD,QAAS,CETT,oCAA8B,CFU9B,kBAAmB,CACnB,iDA0BD,CAvBC,gLAEC,wBACD,CAEA,gLAEC,yBACD,CAEA,gLAEC,2BACD,CAEA,gLAEC,4BACD,CAEA,yDACC,YACD",sourcesContent:[`/*
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
`],sourceRoot:""}]);const E=C},3710:(f,b,m)=>{m.d(b,{A:()=>E});var A=m(9372),v=m.n(A),x=m(935),C=m.n(x)()(v());C.push([f.id,':root{--ck-balloon-panel-arrow-z-index:calc(var(--ck-z-default) - 3)}.ck.ck-balloon-panel{display:none;position:absolute;z-index:var(--ck-z-panel)}.ck.ck-balloon-panel.ck-balloon-panel_with-arrow:after,.ck.ck-balloon-panel.ck-balloon-panel_with-arrow:before{content:"";position:absolute}.ck.ck-balloon-panel.ck-balloon-panel_with-arrow:before{z-index:var(--ck-balloon-panel-arrow-z-index)}.ck.ck-balloon-panel.ck-balloon-panel_with-arrow:after{z-index:calc(var(--ck-balloon-panel-arrow-z-index) + 1)}.ck.ck-balloon-panel[class*=arrow_n]:before{z-index:var(--ck-balloon-panel-arrow-z-index)}.ck.ck-balloon-panel[class*=arrow_n]:after{z-index:calc(var(--ck-balloon-panel-arrow-z-index) + 1)}.ck.ck-balloon-panel[class*=arrow_s]:before{z-index:var(--ck-balloon-panel-arrow-z-index)}.ck.ck-balloon-panel[class*=arrow_s]:after{z-index:calc(var(--ck-balloon-panel-arrow-z-index) + 1)}.ck.ck-balloon-panel.ck-balloon-panel_visible{display:block}:root{--ck-balloon-border-width:1px;--ck-balloon-arrow-offset:2px;--ck-balloon-arrow-height:10px;--ck-balloon-arrow-half-width:8px;--ck-balloon-arrow-drop-shadow:0 2px 2px var(--ck-color-shadow-drop)}.ck.ck-balloon-panel{border-radius:0}.ck-rounded-corners .ck.ck-balloon-panel,.ck.ck-balloon-panel.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-balloon-panel{background:var(--ck-color-panel-background);border:var(--ck-balloon-border-width) solid var(--ck-color-panel-border);box-shadow:var(--ck-drop-shadow),0 0;min-height:15px}.ck.ck-balloon-panel.ck-balloon-panel_with-arrow:after,.ck.ck-balloon-panel.ck-balloon-panel_with-arrow:before{border-style:solid;height:0;width:0}.ck.ck-balloon-panel[class*=arrow_n]:after,.ck.ck-balloon-panel[class*=arrow_n]:before{border-width:0 var(--ck-balloon-arrow-half-width) var(--ck-balloon-arrow-height) var(--ck-balloon-arrow-half-width)}.ck.ck-balloon-panel[class*=arrow_n]:before{border-color:transparent transparent var(--ck-color-panel-border) transparent;margin-top:calc(var(--ck-balloon-border-width)*-1)}.ck.ck-balloon-panel[class*=arrow_n]:after{border-color:transparent transparent var(--ck-color-panel-background) transparent;margin-top:calc(var(--ck-balloon-arrow-offset) - var(--ck-balloon-border-width))}.ck.ck-balloon-panel[class*=arrow_s]:after,.ck.ck-balloon-panel[class*=arrow_s]:before{border-width:var(--ck-balloon-arrow-height) var(--ck-balloon-arrow-half-width) 0 var(--ck-balloon-arrow-half-width)}.ck.ck-balloon-panel[class*=arrow_s]:before{border-color:var(--ck-color-panel-border) transparent transparent;filter:drop-shadow(var(--ck-balloon-arrow-drop-shadow));margin-bottom:calc(var(--ck-balloon-border-width)*-1)}.ck.ck-balloon-panel[class*=arrow_s]:after{border-color:var(--ck-color-panel-background) transparent transparent transparent;margin-bottom:calc(var(--ck-balloon-arrow-offset) - var(--ck-balloon-border-width))}.ck.ck-balloon-panel[class*=arrow_e]:after,.ck.ck-balloon-panel[class*=arrow_e]:before{border-width:var(--ck-balloon-arrow-half-width) 0 var(--ck-balloon-arrow-half-width) var(--ck-balloon-arrow-height)}.ck.ck-balloon-panel[class*=arrow_e]:before{border-color:transparent transparent transparent var(--ck-color-panel-border);margin-right:calc(var(--ck-balloon-border-width)*-1)}.ck.ck-balloon-panel[class*=arrow_e]:after{border-color:transparent transparent transparent var(--ck-color-panel-background);margin-right:calc(var(--ck-balloon-arrow-offset) - var(--ck-balloon-border-width))}.ck.ck-balloon-panel[class*=arrow_w]:after,.ck.ck-balloon-panel[class*=arrow_w]:before{border-width:var(--ck-balloon-arrow-half-width) var(--ck-balloon-arrow-height) var(--ck-balloon-arrow-half-width) 0}.ck.ck-balloon-panel[class*=arrow_w]:before{border-color:transparent var(--ck-color-panel-border) transparent transparent;margin-left:calc(var(--ck-balloon-border-width)*-1)}.ck.ck-balloon-panel[class*=arrow_w]:after{border-color:transparent var(--ck-color-panel-background) transparent transparent;margin-left:calc(var(--ck-balloon-arrow-offset) - var(--ck-balloon-border-width))}.ck.ck-balloon-panel.ck-balloon-panel_arrow_n:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_n:before{left:50%;margin-left:calc(var(--ck-balloon-arrow-half-width)*-1);top:calc(var(--ck-balloon-arrow-height)*-1)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_nw:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_nw:before{left:calc(var(--ck-balloon-arrow-half-width)*2);top:calc(var(--ck-balloon-arrow-height)*-1)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_ne:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_ne:before{right:calc(var(--ck-balloon-arrow-half-width)*2);top:calc(var(--ck-balloon-arrow-height)*-1)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_s:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_s:before{bottom:calc(var(--ck-balloon-arrow-height)*-1);left:50%;margin-left:calc(var(--ck-balloon-arrow-half-width)*-1)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_sw:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_sw:before{bottom:calc(var(--ck-balloon-arrow-height)*-1);left:calc(var(--ck-balloon-arrow-half-width)*2)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_se:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_se:before{bottom:calc(var(--ck-balloon-arrow-height)*-1);right:calc(var(--ck-balloon-arrow-half-width)*2)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_sme:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_sme:before{bottom:calc(var(--ck-balloon-arrow-height)*-1);margin-right:calc(var(--ck-balloon-arrow-half-width)*2);right:25%}.ck.ck-balloon-panel.ck-balloon-panel_arrow_smw:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_smw:before{bottom:calc(var(--ck-balloon-arrow-height)*-1);left:25%;margin-left:calc(var(--ck-balloon-arrow-half-width)*2)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_nme:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_nme:before{margin-right:calc(var(--ck-balloon-arrow-half-width)*2);right:25%;top:calc(var(--ck-balloon-arrow-height)*-1)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_nmw:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_nmw:before{left:25%;margin-left:calc(var(--ck-balloon-arrow-half-width)*2);top:calc(var(--ck-balloon-arrow-height)*-1)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_e:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_e:before{margin-top:calc(var(--ck-balloon-arrow-half-width)*-1);right:calc(var(--ck-balloon-arrow-height)*-1);top:50%}.ck.ck-balloon-panel.ck-balloon-panel_arrow_w:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_w:before{left:calc(var(--ck-balloon-arrow-height)*-1);margin-top:calc(var(--ck-balloon-arrow-half-width)*-1);top:50%}',"",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/panel/balloonpanel.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/panel/balloonpanel.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_shadow.css"],names:[],mappings:"AAKA,MAEC,8DACD,CAEA,qBACC,YAAa,CACb,iBAAkB,CAElB,yBAyCD,CAtCE,+GAEC,UAAW,CACX,iBACD,CAEA,wDACC,6CACD,CAEA,uDACC,uDACD,CAIA,4CACC,6CACD,CAEA,2CACC,uDACD,CAIA,4CACC,6CACD,CAEA,2CACC,uDACD,CAGD,8CACC,aACD,CC9CD,MACC,6BAA8B,CAC9B,6BAA8B,CAC9B,8BAA+B,CAC/B,iCAAkC,CAClC,oEACD,CAEA,qBCLC,eDmMD,CA9LA,iFCDE,qCD+LF,CA9LA,qBAMC,2CAA4C,CAC5C,wEAAyE,CEdzE,oCAA8B,CFW9B,eA0LD,CApLE,+GAIC,kBAAmB,CADnB,QAAS,CADT,OAGD,CAIA,uFAEC,mHACD,CAEA,4CACC,6EAA8E,CAC9E,kDACD,CAEA,2CACC,iFAAkF,CAClF,gFACD,CAIA,uFAEC,mHACD,CAEA,4CACC,iEAAkE,CAClE,uDAAwD,CACxD,qDACD,CAEA,2CACC,iFAAkF,CAClF,mFACD,CAIA,uFAEC,mHACD,CAEA,4CACC,6EAA8E,CAC9E,oDACD,CAEA,2CACC,iFAAkF,CAClF,kFACD,CAIA,uFAEC,mHACD,CAEA,4CACC,6EAA8E,CAC9E,mDACD,CAEA,2CACC,iFAAkF,CAClF,iFACD,CAIA,yGAEC,QAAS,CACT,uDAA0D,CAC1D,2CACD,CAIA,2GAEC,+CAAkD,CAClD,2CACD,CAIA,2GAEC,gDAAmD,CACnD,2CACD,CAIA,yGAIC,8CAAiD,CAFjD,QAAS,CACT,uDAED,CAIA,2GAGC,8CAAiD,CADjD,+CAED,CAIA,2GAGC,8CAAiD,CADjD,gDAED,CAIA,6GAIC,8CAAiD,CADjD,uDAA0D,CAD1D,SAGD,CAIA,6GAIC,8CAAiD,CAFjD,QAAS,CACT,sDAED,CAIA,6GAGC,uDAA0D,CAD1D,SAAU,CAEV,2CACD,CAIA,6GAEC,QAAS,CACT,sDAAyD,CACzD,2CACD,CAIA,yGAGC,sDAAyD,CADzD,6CAAgD,CAEhD,OACD,CAIA,yGAEC,4CAA+C,CAC/C,sDAAyD,CACzD,OACD",sourcesContent:[`/*
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
`],sourceRoot:""}]);const E=C},991:(f,b,m)=>{m.d(b,{A:()=>E});var A=m(9372),v=m.n(A),x=m(935),C=m.n(x)()(v());C.push([f.id,".ck .ck-balloon-rotator__navigation{align-items:center;display:flex;justify-content:center}.ck .ck-balloon-rotator__content .ck-toolbar{justify-content:center}.ck .ck-balloon-rotator__navigation{background:var(--ck-color-toolbar-background);border-bottom:1px solid var(--ck-color-toolbar-border);padding:0 var(--ck-spacing-small)}.ck .ck-balloon-rotator__navigation>*{margin-bottom:var(--ck-spacing-small);margin-right:var(--ck-spacing-small);margin-top:var(--ck-spacing-small)}.ck .ck-balloon-rotator__navigation .ck-balloon-rotator__counter{margin-left:var(--ck-spacing-small);margin-right:var(--ck-spacing-standard)}.ck .ck-balloon-rotator__content .ck.ck-annotation-wrapper{box-shadow:none}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/panel/balloonrotator.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/panel/balloonrotator.css"],names:[],mappings:"AAKA,oCAEC,kBAAmB,CADnB,YAAa,CAEb,sBACD,CAKA,6CACC,sBACD,CCXA,oCACC,6CAA8C,CAC9C,sDAAuD,CACvD,iCAgBD,CAbC,sCAGC,qCAAsC,CAFtC,oCAAqC,CACrC,kCAED,CAGA,iEAIC,mCAAoC,CAHpC,uCAID,CAMA,2DACC,eACD",sourcesContent:[`/*
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
`],sourceRoot:""}]);const E=C},5380:(f,b,m)=>{m.d(b,{A:()=>E});var A=m(9372),v=m.n(A),x=m(935),C=m.n(x)()(v());C.push([f.id,".ck .ck-fake-panel{position:absolute;z-index:calc(var(--ck-z-panel) - 1)}.ck .ck-fake-panel div{position:absolute}.ck .ck-fake-panel div:first-child{z-index:2}.ck .ck-fake-panel div:nth-child(2){z-index:1}:root{--ck-balloon-fake-panel-offset-horizontal:6px;--ck-balloon-fake-panel-offset-vertical:6px}.ck .ck-fake-panel div{background:var(--ck-color-panel-background);border:1px solid var(--ck-color-panel-border);border-radius:var(--ck-border-radius);box-shadow:var(--ck-drop-shadow),0 0;height:100%;min-height:15px;width:100%}.ck .ck-fake-panel div:first-child{margin-left:var(--ck-balloon-fake-panel-offset-horizontal);margin-top:var(--ck-balloon-fake-panel-offset-vertical)}.ck .ck-fake-panel div:nth-child(2){margin-left:calc(var(--ck-balloon-fake-panel-offset-horizontal)*2);margin-top:calc(var(--ck-balloon-fake-panel-offset-vertical)*2)}.ck .ck-fake-panel div:nth-child(3){margin-left:calc(var(--ck-balloon-fake-panel-offset-horizontal)*3);margin-top:calc(var(--ck-balloon-fake-panel-offset-vertical)*3)}.ck .ck-balloon-panel_arrow_s+.ck-fake-panel,.ck .ck-balloon-panel_arrow_se+.ck-fake-panel,.ck .ck-balloon-panel_arrow_sw+.ck-fake-panel{--ck-balloon-fake-panel-offset-vertical:-6px}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/panel/fakepanel.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/panel/fakepanel.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_shadow.css"],names:[],mappings:"AAKA,mBACC,iBAAkB,CAGlB,mCACD,CAEA,uBACC,iBACD,CAEA,mCACC,SACD,CAEA,oCACC,SACD,CCfA,MACC,6CAA8C,CAC9C,2CACD,CAGA,uBAKC,2CAA4C,CAC5C,6CAA8C,CAC9C,qCAAsC,CCXtC,oCAA8B,CDc9B,WAAY,CAPZ,eAAgB,CAMhB,UAED,CAEA,mCACC,0DAA2D,CAC3D,uDACD,CAEA,oCACC,kEAAqE,CACrE,+DACD,CACA,oCACC,kEAAqE,CACrE,+DACD,CAGA,yIAGC,4CACD",sourcesContent:[`/*
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
`],sourceRoot:""}]);const E=C},8298:(f,b,m)=>{m.d(b,{A:()=>E});var A=m(9372),v=m.n(A),x=m(935),C=m.n(x)()(v());C.push([f.id,".ck.ck-sticky-panel .ck-sticky-panel__content_sticky{position:fixed;top:0;z-index:var(--ck-z-panel)}.ck.ck-sticky-panel .ck-sticky-panel__content_sticky_bottom-limit{position:absolute;top:auto}.ck.ck-sticky-panel .ck-sticky-panel__content_sticky{border-top-left-radius:0;border-top-right-radius:0;border-width:0 1px 1px;box-shadow:var(--ck-drop-shadow),0 0}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/panel/stickypanel.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/panel/stickypanel.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_shadow.css"],names:[],mappings:"AAMC,qDAEC,cAAe,CACf,KAAM,CAFN,yBAGD,CAEA,kEAEC,iBAAkB,CADlB,QAED,CCPA,qDAIC,wBAAyB,CACzB,yBAA0B,CAF1B,sBAAuB,CCFxB,oCDKA",sourcesContent:[`/*
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
`],sourceRoot:""}]);const E=C},2722:(f,b,m)=>{m.d(b,{A:()=>E});var A=m(9372),v=m.n(A),x=m(935),C=m.n(x)()(v());C.push([f.id,'.ck-vertical-form .ck-button:after{bottom:-1px;content:"";position:absolute;right:-1px;top:-1px;width:0;z-index:1}.ck-vertical-form .ck-button:focus:after{display:none}@media screen and (max-width:600px){.ck.ck-responsive-form .ck-button:after{bottom:-1px;content:"";position:absolute;right:-1px;top:-1px;width:0;z-index:1}.ck.ck-responsive-form .ck-button:focus:after{display:none}}.ck-vertical-form>.ck-button:nth-last-child(2):after{border-right:1px solid var(--ck-color-base-border)}.ck.ck-responsive-form{padding:var(--ck-spacing-large)}.ck.ck-responsive-form:focus{outline:none}[dir=ltr] .ck.ck-responsive-form>:not(:first-child),[dir=rtl] .ck.ck-responsive-form>:not(:last-child){margin-left:var(--ck-spacing-standard)}@media screen and (max-width:600px){.ck.ck-responsive-form{padding:0;width:calc(var(--ck-input-width)*.8)}.ck.ck-responsive-form .ck-labeled-field-view{margin:var(--ck-spacing-large) var(--ck-spacing-large) 0}.ck.ck-responsive-form .ck-labeled-field-view .ck-input-number,.ck.ck-responsive-form .ck-labeled-field-view .ck-input-text{min-width:0;width:100%}.ck.ck-responsive-form .ck-labeled-field-view .ck-labeled-field-view__error{white-space:normal}.ck.ck-responsive-form>.ck-button:nth-last-child(2):after{border-right:1px solid var(--ck-color-base-border)}.ck.ck-responsive-form>.ck-button:last-child,.ck.ck-responsive-form>.ck-button:nth-last-child(2){border-radius:0;margin-top:var(--ck-spacing-large);padding:var(--ck-spacing-standard)}.ck.ck-responsive-form>.ck-button:last-child:not(:focus),.ck.ck-responsive-form>.ck-button:nth-last-child(2):not(:focus){border-top:1px solid var(--ck-color-base-border)}[dir=ltr] .ck.ck-responsive-form>.ck-button:last-child,[dir=ltr] .ck.ck-responsive-form>.ck-button:nth-last-child(2),[dir=rtl] .ck.ck-responsive-form>.ck-button:last-child,[dir=rtl] .ck.ck-responsive-form>.ck-button:nth-last-child(2){margin-left:0}[dir=rtl] .ck.ck-responsive-form>.ck-button:last-child:last-of-type,[dir=rtl] .ck.ck-responsive-form>.ck-button:nth-last-child(2):last-of-type{border-right:1px solid var(--ck-color-base-border)}}',"",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/responsive-form/responsiveform.css","webpack://./../ckeditor5-ui/theme/mixins/_rwd.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/responsive-form/responsiveform.css"],names:[],mappings:"AAQC,mCAMC,WAAY,CALZ,UAAW,CAEX,iBAAkB,CAClB,UAAW,CACX,QAAS,CAHT,OAAQ,CAKR,SACD,CAEA,yCACC,YACD,CCdA,oCDoBE,wCAMC,WAAY,CALZ,UAAW,CAEX,iBAAkB,CAClB,UAAW,CACX,QAAS,CAHT,OAAQ,CAKR,SACD,CAEA,8CACC,YACD,CC9BF,CCAD,qDACC,kDACD,CAEA,uBACC,+BAoED,CAlEC,6BAEC,YACD,CASC,uGACC,sCACD,CDvBD,oCCMD,uBAqBE,SAAU,CACV,oCA+CF,CA7CE,8CACC,wDAYD,CAVC,4HAEC,WAAY,CACZ,UACD,CAGA,4EACC,kBACD,CAKA,0DACC,kDACD,CAGD,iGAIC,eAAgB,CADhB,kCAAmC,CADnC,kCAmBD,CAfC,yHACC,gDACD,CARD,0OAeE,aAMF,CAJE,+IACC,kDACD,CDrEH",sourcesContent:[`/*
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
`],sourceRoot:""}]);const E=C},8107:(f,b,m)=>{m.d(b,{A:()=>E});var A=m(9372),v=m.n(A),x=m(935),C=m.n(x)()(v());C.push([f.id,".ck.ck-search>.ck-labeled-field-view>.ck-labeled-field-view__input-wrapper>.ck-icon{position:absolute;top:50%;transform:translateY(-50%)}[dir=ltr] .ck.ck-search>.ck-labeled-field-view>.ck-labeled-field-view__input-wrapper>.ck-icon{left:var(--ck-spacing-medium)}[dir=rtl] .ck.ck-search>.ck-labeled-field-view>.ck-labeled-field-view__input-wrapper>.ck-icon{right:var(--ck-spacing-medium)}.ck.ck-search>.ck-labeled-field-view .ck-search__reset{position:absolute;top:50%;transform:translateY(-50%)}.ck.ck-search>.ck-search__results>.ck-search__info>span:first-child{display:block}.ck.ck-search>.ck-search__results>.ck-search__info:not(.ck-hidden)~*{display:none}:root{--ck-search-field-view-horizontal-spacing:calc(var(--ck-icon-size) + var(--ck-spacing-medium))}.ck.ck-search>.ck-labeled-field-view .ck-input{width:100%}.ck.ck-search>.ck-labeled-field-view.ck-search__query_with-icon{--ck-labeled-field-label-default-position-x:var(--ck-search-field-view-horizontal-spacing)}.ck.ck-search>.ck-labeled-field-view.ck-search__query_with-icon>.ck-labeled-field-view__input-wrapper>.ck-icon{opacity:.5;pointer-events:none}.ck.ck-search>.ck-labeled-field-view.ck-search__query_with-icon .ck-input{width:100%}[dir=ltr] .ck.ck-search>.ck-labeled-field-view.ck-search__query_with-icon .ck-input,[dir=rtl] .ck.ck-search>.ck-labeled-field-view.ck-search__query_with-icon .ck-input:not(.ck-input-text_empty){padding-left:var(--ck-search-field-view-horizontal-spacing)}.ck.ck-search>.ck-labeled-field-view.ck-search__query_with-reset{--ck-labeled-field-empty-unfocused-max-width:100% - 2 * var(--ck-search-field-view-horizontal-spacing)}.ck.ck-search>.ck-labeled-field-view.ck-search__query_with-reset.ck-labeled-field-view_empty{--ck-labeled-field-empty-unfocused-max-width:100% - var(--ck-search-field-view-horizontal-spacing) - var(--ck-spacing-medium)}.ck.ck-search>.ck-labeled-field-view.ck-search__query_with-reset .ck-search__reset{background:none;min-height:auto;min-width:auto;opacity:.5;padding:0}[dir=ltr] .ck.ck-search>.ck-labeled-field-view.ck-search__query_with-reset .ck-search__reset{right:var(--ck-spacing-medium)}[dir=rtl] .ck.ck-search>.ck-labeled-field-view.ck-search__query_with-reset .ck-search__reset{left:var(--ck-spacing-medium)}.ck.ck-search>.ck-labeled-field-view.ck-search__query_with-reset .ck-search__reset:hover{opacity:1}.ck.ck-search>.ck-labeled-field-view.ck-search__query_with-reset .ck-input{width:100%}[dir=ltr] .ck.ck-search>.ck-labeled-field-view.ck-search__query_with-reset .ck-input:not(.ck-input-text_empty),[dir=rtl] .ck.ck-search>.ck-labeled-field-view.ck-search__query_with-reset .ck-input{padding-right:var(--ck-search-field-view-horizontal-spacing)}.ck.ck-search>.ck-search__results{min-width:100%}.ck.ck-search>.ck-search__results>.ck-search__info{padding:var(--ck-spacing-medium) var(--ck-spacing-large);width:100%}.ck.ck-search>.ck-search__results>.ck-search__info *{white-space:normal}.ck.ck-search>.ck-search__results>.ck-search__info>span:first-child{font-weight:700}.ck.ck-search>.ck-search__results>.ck-search__info>span:last-child{margin-top:var(--ck-spacing-medium)}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/search/search.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/search/search.css"],names:[],mappings:"AASE,oFACC,iBAAkB,CAClB,OAAQ,CACR,0BASD,CAZA,8FAME,6BAMF,CAZA,8FAUE,8BAEF,CAEA,uDACC,iBAAkB,CAClB,OAAQ,CACR,0BACD,CAKC,oEACC,aACD,CAGA,qEACC,YACD,CChCH,MACC,8FACD,CAIE,+CACC,UACD,CAEA,gEACC,0FAoBD,CAlBC,+GACC,UAAW,CACX,mBACD,CAEA,0EACC,UAWD,CAJE,kMACC,2DACD,CAKH,iEACC,sGAwCD,CAtCC,6FACC,6HACD,CAEA,mFAIC,eAAgB,CAFhB,eAAgB,CADhB,cAAe,CAIf,UAAW,CACX,SAaD,CAnBA,6FASE,8BAUF,CAnBA,6FAaE,6BAMF,CAHC,yFACC,SACD,CAGD,2EACC,UAWD,CAZA,oMAUE,4DAEF,CAIF,kCACC,cAkBD,CAhBC,mDAEC,wDAAyD,CADzD,UAcD,CAXC,qDACC,kBACD,CAEA,oEACC,eACD,CAEA,mEACC,mCACD",sourcesContent:[`/*
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

`],sourceRoot:""}]);const E=C},109:(f,b,m)=>{m.d(b,{A:()=>E});var A=m(9372),v=m.n(A),x=m(935),C=m.n(x)()(v());C.push([f.id,".ck.ck-spinner-container{display:block;position:relative}.ck.ck-spinner{left:0;margin:0 auto;position:absolute;right:0;top:50%;transform:translateY(-50%);z-index:1}:root{--ck-toolbar-spinner-size:18px}.ck.ck-spinner-container{animation:rotate 1.5s linear infinite;height:var(--ck-toolbar-spinner-size);width:var(--ck-toolbar-spinner-size)}@media (prefers-reduced-motion:reduce){.ck.ck-spinner-container{animation-duration:3s}}.ck.ck-spinner{border:2px solid var(--ck-color-text);border-radius:50%;border-top:2px solid transparent;height:var(--ck-toolbar-spinner-size);width:var(--ck-toolbar-spinner-size)}@keyframes rotate{to{transform:rotate(1turn)}}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/spinner/spinner.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/spinner/spinner.css"],names:[],mappings:"AASA,yBACC,aAAc,CACd,iBACD,CAEA,eAGC,MAAO,CAEP,aAAc,CAJd,iBAAkB,CAGlB,OAAQ,CAFR,OAAQ,CAIR,0BAA2B,CAC3B,SACD,CCjBA,MACC,8BACD,CAEA,yBAGC,qCAAsC,CADtC,qCAAsC,CADtC,oCAOD,CAHC,uCALD,yBAME,qBAEF,CADC,CAGD,eAKC,qCAA6B,CAF7B,iBAAkB,CAElB,gCAA6B,CAH7B,qCAAsC,CADtC,oCAKD,CAEA,kBACC,GACC,uBACD,CACD",sourcesContent:[`/*
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
`],sourceRoot:""}]);const E=C},1671:(f,b,m)=>{m.d(b,{A:()=>E});var A=m(9372),v=m.n(A),x=m(935),C=m.n(x)()(v());C.push([f.id,".ck-textarea{overflow-x:hidden}","",{version:3,sources:["webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/textarea/textarea.css"],names:[],mappings:"AASA,aACC,iBACD",sourcesContent:[`/*
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
`],sourceRoot:""}]);const E=C},2710:(f,b,m)=>{m.d(b,{A:()=>E});var A=m(9372),v=m.n(A),x=m(935),C=m.n(x)()(v());C.push([f.id,".ck.ck-block-toolbar-button{position:absolute;z-index:var(--ck-z-default)}:root{--ck-color-block-toolbar-button:var(--ck-color-text);--ck-block-toolbar-button-size:var(--ck-font-size-normal)}.ck.ck-block-toolbar-button{color:var(--ck-color-block-toolbar-button);font-size:var(--ck-block-toolbar-size)}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/toolbar/blocktoolbar.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/toolbar/blocktoolbar.css"],names:[],mappings:"AAKA,4BACC,iBAAkB,CAClB,2BACD,CCHA,MACC,oDAAqD,CACrD,yDACD,CAEA,4BACC,0CAA2C,CAC3C,sCACD",sourcesContent:[`/*
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
`],sourceRoot:""}]);const E=C},9677:(f,b,m)=>{m.d(b,{A:()=>E});var A=m(9372),v=m.n(A),x=m(935),C=m.n(x)()(v());C.push([f.id,".ck.ck-toolbar{align-items:center;display:flex;flex-flow:row nowrap;-moz-user-select:none;-webkit-user-select:none;-ms-user-select:none;user-select:none}.ck.ck-toolbar>.ck-toolbar__items{align-items:center;display:flex;flex-flow:row wrap;flex-grow:1}.ck.ck-toolbar .ck.ck-toolbar__separator{display:inline-block}.ck.ck-toolbar .ck.ck-toolbar__separator:first-child,.ck.ck-toolbar .ck.ck-toolbar__separator:last-child{display:none}.ck.ck-toolbar .ck-toolbar__line-break{flex-basis:100%}.ck.ck-toolbar.ck-toolbar_grouping>.ck-toolbar__items{flex-wrap:nowrap}.ck.ck-toolbar.ck-toolbar_vertical>.ck-toolbar__items{flex-direction:column}.ck.ck-toolbar.ck-toolbar_floating>.ck-toolbar__items{flex-wrap:nowrap}.ck.ck-toolbar>.ck.ck-toolbar__grouped-dropdown>.ck-dropdown__button .ck-dropdown__arrow{display:none}.ck.ck-toolbar{border-radius:0}.ck-rounded-corners .ck.ck-toolbar,.ck.ck-toolbar.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-toolbar{background:var(--ck-color-toolbar-background);border:1px solid var(--ck-color-toolbar-border);padding:0 var(--ck-spacing-small)}.ck.ck-toolbar .ck.ck-toolbar__separator{align-self:stretch;background:var(--ck-color-toolbar-border);margin-bottom:var(--ck-spacing-small);margin-top:var(--ck-spacing-small);min-width:1px;width:1px}.ck.ck-toolbar .ck-toolbar__line-break{height:0}.ck.ck-toolbar>.ck-toolbar__items>:not(.ck-toolbar__line-break){margin-right:var(--ck-spacing-small)}.ck.ck-toolbar>.ck-toolbar__items:empty+.ck.ck-toolbar__separator{display:none}.ck.ck-toolbar>.ck-toolbar__items>:not(.ck-toolbar__line-break),.ck.ck-toolbar>.ck.ck-toolbar__grouped-dropdown{margin-bottom:var(--ck-spacing-small);margin-top:var(--ck-spacing-small)}.ck.ck-toolbar.ck-toolbar_vertical{padding:0}.ck.ck-toolbar.ck-toolbar_vertical>.ck-toolbar__items>.ck{border-radius:0;margin:0;width:100%}.ck.ck-toolbar.ck-toolbar_compact{padding:0}.ck.ck-toolbar.ck-toolbar_compact>.ck-toolbar__items>*{margin:0}.ck.ck-toolbar.ck-toolbar_compact>.ck-toolbar__items>:not(:first-child):not(:last-child){border-radius:0}.ck.ck-toolbar>.ck.ck-toolbar__grouped-dropdown>.ck.ck-button.ck-dropdown__button{padding-left:var(--ck-spacing-tiny)}.ck.ck-toolbar .ck-toolbar__nested-toolbar-dropdown>.ck-dropdown__panel{min-width:auto}.ck.ck-toolbar .ck-toolbar__nested-toolbar-dropdown>.ck-button>.ck-button__label{max-width:7em;width:auto}.ck.ck-toolbar:focus{outline:none}.ck-toolbar-container .ck.ck-toolbar{border:0}.ck.ck-toolbar[dir=rtl]>.ck-toolbar__items>.ck,[dir=rtl] .ck.ck-toolbar>.ck-toolbar__items>.ck{margin-right:0}.ck.ck-toolbar[dir=rtl]:not(.ck-toolbar_compact)>.ck-toolbar__items>.ck,[dir=rtl] .ck.ck-toolbar:not(.ck-toolbar_compact)>.ck-toolbar__items>.ck{margin-left:var(--ck-spacing-small)}.ck.ck-toolbar[dir=rtl]>.ck-toolbar__items>.ck:last-child,[dir=rtl] .ck.ck-toolbar>.ck-toolbar__items>.ck:last-child{margin-left:0}.ck.ck-toolbar.ck-toolbar_compact[dir=rtl]>.ck-toolbar__items>.ck:first-child,[dir=rtl] .ck.ck-toolbar.ck-toolbar_compact>.ck-toolbar__items>.ck:first-child{border-bottom-left-radius:0;border-top-left-radius:0}.ck.ck-toolbar.ck-toolbar_compact[dir=rtl]>.ck-toolbar__items>.ck:last-child,[dir=rtl] .ck.ck-toolbar.ck-toolbar_compact>.ck-toolbar__items>.ck:last-child{border-bottom-right-radius:0;border-top-right-radius:0}.ck.ck-toolbar.ck-toolbar_grouping[dir=rtl]>.ck-toolbar__items:not(:empty):not(:only-child),.ck.ck-toolbar[dir=rtl]>.ck.ck-toolbar__separator,[dir=rtl] .ck.ck-toolbar.ck-toolbar_grouping>.ck-toolbar__items:not(:empty):not(:only-child),[dir=rtl] .ck.ck-toolbar>.ck.ck-toolbar__separator{margin-left:var(--ck-spacing-small)}.ck.ck-toolbar[dir=ltr]>.ck-toolbar__items>.ck:last-child,[dir=ltr] .ck.ck-toolbar>.ck-toolbar__items>.ck:last-child{margin-right:0}.ck.ck-toolbar.ck-toolbar_compact[dir=ltr]>.ck-toolbar__items>.ck:first-child,[dir=ltr] .ck.ck-toolbar.ck-toolbar_compact>.ck-toolbar__items>.ck:first-child{border-bottom-right-radius:0;border-top-right-radius:0}.ck.ck-toolbar.ck-toolbar_compact[dir=ltr]>.ck-toolbar__items>.ck:last-child,[dir=ltr] .ck.ck-toolbar.ck-toolbar_compact>.ck-toolbar__items>.ck:last-child{border-bottom-left-radius:0;border-top-left-radius:0}.ck.ck-toolbar.ck-toolbar_grouping[dir=ltr]>.ck-toolbar__items:not(:empty):not(:only-child),.ck.ck-toolbar[dir=ltr]>.ck.ck-toolbar__separator,[dir=ltr] .ck.ck-toolbar.ck-toolbar_grouping>.ck-toolbar__items:not(:empty):not(:only-child),[dir=ltr] .ck.ck-toolbar>.ck.ck-toolbar__separator{margin-right:var(--ck-spacing-small)}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/toolbar/toolbar.css","webpack://./../ckeditor5-ui/theme/mixins/_unselectable.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/toolbar/toolbar.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css"],names:[],mappings:"AAOA,eAKC,kBAAmB,CAFnB,YAAa,CACb,oBAAqB,CCFrB,qBAAsB,CACtB,wBAAyB,CACzB,oBAAqB,CACrB,gBD6CD,CA3CC,kCAGC,kBAAmB,CAFnB,YAAa,CACb,kBAAmB,CAEnB,WAED,CAEA,yCACC,oBAWD,CAJC,yGAEC,YACD,CAGD,uCACC,eACD,CAEA,sDACC,gBACD,CAEA,sDACC,qBACD,CAEA,sDACC,gBACD,CAGC,yFACC,YACD,CE/CF,eCGC,eDwGD,CA3GA,qECOE,qCDoGF,CA3GA,eAGC,6CAA8C,CAE9C,+CAAgD,CADhD,iCAuGD,CApGC,yCACC,kBAAmB,CAGnB,yCAA0C,CAO1C,qCAAsC,CADtC,kCAAmC,CAPnC,aAAc,CADd,SAUD,CAEA,uCACC,QACD,CAGC,gEAEC,oCACD,CAIA,kEACC,YACD,CAGD,gHAIC,qCAAsC,CADtC,kCAED,CAEA,mCAEC,SAaD,CAVC,0DAQC,eAAgB,CAHhB,QAAS,CAHT,UAOD,CAGD,kCAEC,SAWD,CATC,uDAEC,QAMD,CAHC,yFACC,eACD,CASD,kFACC,mCACD,CAMA,wEACC,cACD,CAEA,iFACC,aAAc,CACd,UACD,CAGD,qBACC,YACD,CAtGD,qCAyGE,QAEF,CAYC,+FACC,cACD,CAEA,iJAEC,mCACD,CAEA,qHACC,aACD,CAIC,6JAEC,2BAA4B,CAD5B,wBAED,CAGA,2JAEC,4BAA6B,CAD7B,yBAED,CASD,8RACC,mCACD,CAWA,qHACC,cACD,CAIC,6JAEC,4BAA6B,CAD7B,yBAED,CAGA,2JAEC,2BAA4B,CAD5B,wBAED,CASD,8RACC,oCACD",sourcesContent:[`/*
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
`],sourceRoot:""}]);const E=C},9205:(f,b,m)=>{m.d(b,{A:()=>E});var A=m(9372),v=m.n(A),x=m(935),C=m.n(x)()(v());C.push([f.id,".ck.ck-balloon-panel.ck-tooltip{-moz-user-select:none;-webkit-user-select:none;-ms-user-select:none;user-select:none;z-index:calc(var(--ck-z-dialog) + 100);--ck-balloon-border-width:0px;--ck-balloon-arrow-offset:0px;--ck-balloon-arrow-half-width:4px;--ck-balloon-arrow-height:4px;--ck-tooltip-text-padding:4px;--ck-color-panel-background:var(--ck-color-tooltip-background);padding:0 var(--ck-spacing-medium)}.ck.ck-balloon-panel.ck-tooltip .ck-tooltip__text{color:var(--ck-color-tooltip-text);font-size:.9em;line-height:1.5}.ck.ck-balloon-panel.ck-tooltip.ck-tooltip_multi-line .ck-tooltip__text{display:inline-block;max-width:200px;padding:var(--ck-tooltip-text-padding) 0;white-space:break-spaces}.ck.ck-balloon-panel.ck-tooltip{box-shadow:none}.ck.ck-balloon-panel.ck-tooltip:before{display:none}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/tooltip/tooltip.css","webpack://./../ckeditor5-ui/theme/mixins/_unselectable.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/tooltip/tooltip.css"],names:[],mappings:"AAOA,gCCEC,qBAAsB,CACtB,wBAAyB,CACzB,oBAAqB,CACrB,gBAAgB,CDFhB,sCAAyC,CEFzC,6BAA8B,CAC9B,6BAA8B,CAC9B,iCAAkC,CAClC,6BAA8B,CAC9B,6BAA8B,CAC9B,8DAA+D,CAE/D,kCFJD,CEMC,kDAGC,kCAAmC,CAFnC,cAAe,CACf,eAED,CAEA,wEAEC,oBAAqB,CAErB,eAAgB,CADhB,wCAAyC,CAFzC,wBAID,CArBD,gCAwBC,eAMD,CAHC,uCACC,YACD",sourcesContent:[`/*
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
`],sourceRoot:""}]);const E=C},7676:(f,b,m)=>{m.d(b,{A:()=>E});var A=m(9372),v=m.n(A),x=m(935),C=m.n(x)()(v());C.push([f.id,".ck-hidden{display:none!important}:root{--ck-z-default:1;--ck-z-panel:calc(var(--ck-z-default) + 999);--ck-z-dialog:9999}.ck-transitions-disabled,.ck-transitions-disabled *{transition:none!important}:root{--ck-powered-by-line-height:10px;--ck-powered-by-padding-vertical:2px;--ck-powered-by-padding-horizontal:4px;--ck-powered-by-text-color:#4f4f4f;--ck-powered-by-border-radius:var(--ck-border-radius);--ck-powered-by-background:#fff;--ck-powered-by-border-color:var(--ck-color-focus-border)}.ck.ck-balloon-panel.ck-powered-by-balloon{--ck-border-radius:var(--ck-powered-by-border-radius);background:var(--ck-powered-by-background);box-shadow:none;min-height:unset;z-index:calc(var(--ck-z-panel) - 1)}.ck.ck-balloon-panel.ck-powered-by-balloon .ck.ck-powered-by{line-height:var(--ck-powered-by-line-height)}.ck.ck-balloon-panel.ck-powered-by-balloon .ck.ck-powered-by a{align-items:center;cursor:pointer;display:flex;filter:grayscale(80%);line-height:var(--ck-powered-by-line-height);opacity:.66;padding:var(--ck-powered-by-padding-vertical) var(--ck-powered-by-padding-horizontal)}.ck.ck-balloon-panel.ck-powered-by-balloon .ck.ck-powered-by .ck-powered-by__label{color:var(--ck-powered-by-text-color);cursor:pointer;font-size:7.5px;font-weight:700;letter-spacing:-.2px;line-height:normal;margin-right:4px;padding-left:2px;text-transform:uppercase}.ck.ck-balloon-panel.ck-powered-by-balloon .ck.ck-powered-by .ck-icon{cursor:pointer;display:block}.ck.ck-balloon-panel.ck-powered-by-balloon .ck.ck-powered-by:hover a{filter:grayscale(0);opacity:1}.ck.ck-balloon-panel.ck-powered-by-balloon[class*=position_inside]{border-color:transparent}.ck.ck-balloon-panel.ck-powered-by-balloon[class*=position_border]{border:var(--ck-focus-ring);border-color:var(--ck-powered-by-border-color)}:root{--ck-color-base-foreground:#fafafa;--ck-color-base-background:#fff;--ck-color-base-border:#ccced1;--ck-color-base-action:#53a336;--ck-color-base-focus:#6cb5f9;--ck-color-base-text:#333;--ck-color-base-active:#2977ff;--ck-color-base-active-focus:#0d65ff;--ck-color-base-error:#db3700;--ck-color-focus-border-coordinates:218,81.8%,56.9%;--ck-color-focus-border:hsl(var(--ck-color-focus-border-coordinates));--ck-color-focus-outer-shadow:#cae1fc;--ck-color-focus-disabled-shadow:rgba(119,186,248,.3);--ck-color-focus-error-shadow:rgba(255,64,31,.3);--ck-color-text:var(--ck-color-base-text);--ck-color-shadow-drop:rgba(0,0,0,.15);--ck-color-shadow-drop-active:rgba(0,0,0,.2);--ck-color-shadow-inner:rgba(0,0,0,.1);--ck-color-button-default-background:transparent;--ck-color-button-default-hover-background:#f0f0f0;--ck-color-button-default-active-background:#f0f0f0;--ck-color-button-default-disabled-background:transparent;--ck-color-button-on-background:#f0f7ff;--ck-color-button-on-hover-background:#dbecff;--ck-color-button-on-active-background:#dbecff;--ck-color-button-on-disabled-background:#f0f2f4;--ck-color-button-on-color:#2977ff;--ck-color-button-action-background:var(--ck-color-base-action);--ck-color-button-action-hover-background:#4d9d30;--ck-color-button-action-active-background:#4d9d30;--ck-color-button-action-disabled-background:#7ec365;--ck-color-button-action-text:var(--ck-color-base-background);--ck-color-button-save:#008a00;--ck-color-button-cancel:#db3700;--ck-color-switch-button-off-background:#939393;--ck-color-switch-button-off-hover-background:#7d7d7d;--ck-color-switch-button-on-background:var(--ck-color-button-action-background);--ck-color-switch-button-on-hover-background:#4d9d30;--ck-color-switch-button-inner-background:var(--ck-color-base-background);--ck-color-switch-button-inner-shadow:rgba(0,0,0,.1);--ck-color-dropdown-panel-background:var(--ck-color-base-background);--ck-color-dropdown-panel-border:var(--ck-color-base-border);--ck-color-dialog-background:var(--ck-custom-background);--ck-color-dialog-form-header-border:var(--ck-custom-border);--ck-color-input-background:var(--ck-color-base-background);--ck-color-input-border:var(--ck-color-base-border);--ck-color-input-error-border:var(--ck-color-base-error);--ck-color-input-text:var(--ck-color-base-text);--ck-color-input-disabled-background:#f2f2f2;--ck-color-input-disabled-border:var(--ck-color-base-border);--ck-color-input-disabled-text:#757575;--ck-color-list-background:var(--ck-color-base-background);--ck-color-list-button-hover-background:var(--ck-color-button-default-hover-background);--ck-color-list-button-on-background:var(--ck-color-button-on-color);--ck-color-list-button-on-background-focus:var(--ck-color-button-on-color);--ck-color-list-button-on-text:var(--ck-color-base-background);--ck-color-panel-background:var(--ck-color-base-background);--ck-color-panel-border:var(--ck-color-base-border);--ck-color-toolbar-background:var(--ck-color-base-background);--ck-color-toolbar-border:var(--ck-color-base-border);--ck-color-tooltip-background:var(--ck-color-base-text);--ck-color-tooltip-text:var(--ck-color-base-background);--ck-color-engine-placeholder-text:#707070;--ck-color-upload-bar-background:#6cb5f9;--ck-color-link-default:#0000f0;--ck-color-link-selected-background:rgba(31,176,255,.1);--ck-color-link-fake-selection:rgba(31,176,255,.3);--ck-color-highlight-background:#ff0;--ck-color-light-red:#fcc;--ck-disabled-opacity:.5;--ck-focus-outer-shadow-geometry:0 0 0 3px;--ck-focus-outer-shadow:var(--ck-focus-outer-shadow-geometry) var(--ck-color-focus-outer-shadow);--ck-focus-disabled-outer-shadow:var(--ck-focus-outer-shadow-geometry) var(--ck-color-focus-disabled-shadow);--ck-focus-error-outer-shadow:var(--ck-focus-outer-shadow-geometry) var(--ck-color-focus-error-shadow);--ck-focus-ring:1px solid var(--ck-color-focus-border);--ck-font-size-base:13px;--ck-line-height-base:1.84615;--ck-font-face:Helvetica,Arial,Tahoma,Verdana,Sans-Serif;--ck-font-size-tiny:0.7em;--ck-font-size-small:0.75em;--ck-font-size-normal:1em;--ck-font-size-big:1.4em;--ck-font-size-large:1.8em;--ck-ui-component-min-height:2.3em}.ck-reset_all :not(.ck-reset_all-excluded *),.ck.ck-reset,.ck.ck-reset_all{background:transparent;border:0;box-sizing:border-box;height:auto;margin:0;padding:0;position:static;text-decoration:none;transition:none;vertical-align:middle;width:auto;word-wrap:break-word}.ck-reset_all :not(.ck-reset_all-excluded *),.ck.ck-reset_all{border-collapse:collapse;color:var(--ck-color-text);cursor:auto;float:none;font:normal normal normal var(--ck-font-size-base)/var(--ck-line-height-base) var(--ck-font-face);text-align:left;white-space:nowrap}.ck-reset_all .ck-rtl :not(.ck-reset_all-excluded *){text-align:right}.ck-reset_all iframe:not(.ck-reset_all-excluded *){vertical-align:inherit}.ck-reset_all textarea:not(.ck-reset_all-excluded *){white-space:pre-wrap}.ck-reset_all input[type=password]:not(.ck-reset_all-excluded *),.ck-reset_all input[type=text]:not(.ck-reset_all-excluded *),.ck-reset_all textarea:not(.ck-reset_all-excluded *){cursor:text}.ck-reset_all input[type=password][disabled]:not(.ck-reset_all-excluded *),.ck-reset_all input[type=text][disabled]:not(.ck-reset_all-excluded *),.ck-reset_all textarea[disabled]:not(.ck-reset_all-excluded *){cursor:default}.ck-reset_all fieldset:not(.ck-reset_all-excluded *){border:2px groove #dfdee3;padding:10px}.ck-reset_all button:not(.ck-reset_all-excluded *)::-moz-focus-inner{border:0;padding:0}.ck[dir=rtl],.ck[dir=rtl] .ck{text-align:right}:root{--ck-border-radius:2px;--ck-inner-shadow:2px 2px 3px var(--ck-color-shadow-inner) inset;--ck-drop-shadow:0 1px 2px 1px var(--ck-color-shadow-drop);--ck-drop-shadow-active:0 3px 6px 1px var(--ck-color-shadow-drop-active);--ck-spacing-unit:0.6em;--ck-spacing-large:calc(var(--ck-spacing-unit)*1.5);--ck-spacing-standard:var(--ck-spacing-unit);--ck-spacing-medium:calc(var(--ck-spacing-unit)*0.8);--ck-spacing-small:calc(var(--ck-spacing-unit)*0.5);--ck-spacing-tiny:calc(var(--ck-spacing-unit)*0.3);--ck-spacing-extra-tiny:calc(var(--ck-spacing-unit)*0.16)}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/globals/_hidden.css","webpack://./../ckeditor5-ui/theme/globals/_zindex.css","webpack://./../ckeditor5-ui/theme/globals/_transition.css","webpack://./../ckeditor5-ui/theme/globals/_poweredby.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_colors.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_disabled.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_focus.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_fonts.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_reset.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_rounded.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_shadow.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_spacing.css"],names:[],mappings:"AAQA,WAGC,sBACD,CCPA,MACC,gBAAiB,CACjB,4CAA+C,CAC/C,kBACD,CCDA,oDAEC,yBACD,CCNA,MACC,gCAAiC,CACjC,oCAAqC,CACrC,sCAAuC,CACvC,kCAA2C,CAC3C,qDAAsD,CACtD,+BAA4C,CAC5C,yDACD,CAEA,2CACC,qDAAsD,CAGtD,0CAA2C,CAD3C,eAAgB,CAEhB,gBAAiB,CACjB,mCAiDD,CA/CC,6DACC,4CAoCD,CAlCC,+DAGC,kBAAmB,CAFnB,cAAe,CACf,YAAa,CAGb,qBAAsB,CACtB,4CAA6C,CAF7C,WAAY,CAGZ,qFACD,CAEA,mFASC,qCAAsC,CAFtC,cAAe,CANf,eAAgB,CAIhB,eAAiB,CAHjB,oBAAqB,CAMrB,kBAAmB,CAFnB,gBAAiB,CAHjB,gBAAiB,CACjB,wBAOD,CAEA,sEAEC,cAAe,CADf,aAED,CAGC,qEACC,mBAAqB,CACrB,SACD,CAIF,mEACC,wBACD,CAEA,mEACC,2BAA4B,CAC5B,8CACD,CChED,MACC,kCAAmD,CACnD,+BAAoD,CACpD,8BAAkD,CAClD,8BAAuD,CACvD,6BAAmD,CACnD,yBAA+C,CAC/C,8BAAsD,CACtD,oCAA4D,CAC5D,6BAAkD,CAIlD,mDAA4D,CAC5D,qEAA+E,CAC/E,qCAA4D,CAC5D,qDAA8D,CAC9D,gDAAyD,CACzD,yCAAqD,CACrD,sCAAsD,CACtD,4CAA0D,CAC1D,sCAAsD,CAItD,gDAAuD,CACvD,kDAAiE,CACjE,mDAAkE,CAClE,yDAA8D,CAE9D,uCAA6D,CAC7D,6CAAoE,CACpE,8CAAoE,CACpE,gDAAiE,CACjE,kCAAyD,CAGzD,+DAAsE,CACtE,iDAAsE,CACtE,kDAAsE,CACtE,oDAAoE,CACpE,6DAAsE,CAEtE,8BAAoD,CACpD,gCAAqD,CAErD,+CAA8D,CAC9D,qDAAiE,CACjE,+EAAqF,CACrF,oDAAuE,CACvE,yEAA8E,CAC9E,oDAAgE,CAIhE,oEAA2E,CAC3E,4DAAoE,CAIpE,wDAAiE,CACjE,4DAAmE,CAInE,2DAAoE,CACpE,mDAA6D,CAC7D,wDAAgE,CAChE,+CAA0D,CAC1D,4CAA2D,CAC3D,4DAAoE,CACpE,sCAAsD,CAItD,0DAAmE,CACnE,uFAA6F,CAC7F,oEAA2E,CAC3E,0EAA+E,CAC/E,8DAAsE,CAItE,2DAAoE,CACpE,mDAA6D,CAI7D,6DAAsE,CACtE,qDAA+D,CAI/D,uDAAgE,CAChE,uDAAiE,CAIjE,0CAAyD,CAIzD,wCAA2D,CAI3D,+BAAoD,CACpD,uDAAmE,CACnE,kDAAgE,CAIhE,oCAAyD,CAIzD,yBAAgD,CChHhD,wBAAyB,CCAzB,0CAA2C,CAK3C,gGAAiG,CAKjG,4GAA6G,CAK7G,sGAAuG,CAKvG,sDAAuD,CCvBvD,wBAAyB,CACzB,6BAA8B,CAC9B,wDAA6D,CAE7D,yBAA0B,CAC1B,2BAA4B,CAC5B,yBAA0B,CAC1B,wBAAyB,CACzB,0BAA2B,CCJ3B,kCJgHD,CI1GA,2EAYC,sBAAuB,CADvB,QAAS,CART,qBAAsB,CAEtB,WAAY,CAIZ,QAAS,CACT,SAAU,CAJV,eAAgB,CAOhB,oBAAqB,CAErB,eAAgB,CADhB,qBAAsB,CAVtB,UAAW,CAcX,oBACD,CAKA,8DAGC,wBAAyB,CAEzB,0BAA2B,CAG3B,WAAY,CACZ,UAAW,CALX,iGAAkG,CAElG,eAAgB,CAChB,kBAGD,CAGC,qDACC,gBACD,CAEA,mDAEC,sBACD,CAEA,qDACC,oBACD,CAEA,mLAGC,WACD,CAEA,iNAGC,cACD,CAEA,qDAEC,yBAAoC,CADpC,YAED,CAEA,qEAGC,QAAQ,CADR,SAED,CAMD,8BAEC,gBACD,CCxFA,MACC,sBAAuB,CCAvB,gEAAiE,CAKjE,0DAA2D,CAK3D,wEAAyE,CCbzE,uBAA8B,CAC9B,mDAA2D,CAC3D,4CAAkD,CAClD,oDAA4D,CAC5D,mDAA2D,CAC3D,kDAA2D,CAC3D,yDFFD",sourcesContent:[`/*
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
`],sourceRoot:""}]);const E=C},695:(f,b,m)=>{m.d(b,{A:()=>E});var A=m(9372),v=m.n(A),x=m(935),C=m.n(x)()(v());C.push([f.id,":root{--ck-color-resizer:var(--ck-color-focus-border);--ck-color-resizer-tooltip-background:#262626;--ck-color-resizer-tooltip-text:#f2f2f2;--ck-resizer-border-radius:var(--ck-border-radius);--ck-resizer-tooltip-offset:10px;--ck-resizer-tooltip-height:calc(var(--ck-spacing-small)*2 + 10px)}.ck .ck-widget,.ck .ck-widget.ck-widget_with-selection-handle{position:relative}.ck .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle{position:absolute}.ck .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle .ck-icon{display:block}.ck .ck-widget.ck-widget_with-selection-handle.ck-widget_selected>.ck-widget__selection-handle,.ck .ck-widget.ck-widget_with-selection-handle:hover>.ck-widget__selection-handle{visibility:visible}.ck .ck-size-view{background:var(--ck-color-resizer-tooltip-background);border:1px solid var(--ck-color-resizer-tooltip-text);border-radius:var(--ck-resizer-border-radius);color:var(--ck-color-resizer-tooltip-text);display:block;font-size:var(--ck-font-size-tiny);height:var(--ck-resizer-tooltip-height);line-height:var(--ck-resizer-tooltip-height);padding:0 var(--ck-spacing-small)}.ck .ck-size-view.ck-orientation-above-center,.ck .ck-size-view.ck-orientation-bottom-left,.ck .ck-size-view.ck-orientation-bottom-right,.ck .ck-size-view.ck-orientation-top-left,.ck .ck-size-view.ck-orientation-top-right{position:absolute}.ck .ck-size-view.ck-orientation-top-left{left:var(--ck-resizer-tooltip-offset);top:var(--ck-resizer-tooltip-offset)}.ck .ck-size-view.ck-orientation-top-right{right:var(--ck-resizer-tooltip-offset);top:var(--ck-resizer-tooltip-offset)}.ck .ck-size-view.ck-orientation-bottom-right{bottom:var(--ck-resizer-tooltip-offset);right:var(--ck-resizer-tooltip-offset)}.ck .ck-size-view.ck-orientation-bottom-left{bottom:var(--ck-resizer-tooltip-offset);left:var(--ck-resizer-tooltip-offset)}.ck .ck-size-view.ck-orientation-above-center{left:50%;top:calc(var(--ck-resizer-tooltip-height)*-1);transform:translate(-50%)}:root{--ck-widget-outline-thickness:3px;--ck-widget-handler-icon-size:16px;--ck-widget-handler-animation-duration:200ms;--ck-widget-handler-animation-curve:ease;--ck-color-widget-blurred-border:#dedede;--ck-color-widget-hover-border:#ffc83d;--ck-color-widget-editable-focus-background:var(--ck-color-base-background);--ck-color-widget-drag-handler-icon-color:var(--ck-color-base-background)}.ck .ck-widget{outline-color:transparent;outline-style:solid;outline-width:var(--ck-widget-outline-thickness);transition:outline-color var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve)}@media (prefers-reduced-motion:reduce){.ck .ck-widget{transition:none}}.ck .ck-widget.ck-widget_selected,.ck .ck-widget.ck-widget_selected:hover{outline:var(--ck-widget-outline-thickness) solid var(--ck-color-focus-border)}.ck .ck-widget:hover{outline-color:var(--ck-color-widget-hover-border)}.ck .ck-editor__nested-editable{border:1px solid transparent}.ck .ck-editor__nested-editable.ck-editor__nested-editable_focused,.ck .ck-editor__nested-editable:focus{border:var(--ck-focus-ring);box-shadow:var(--ck-inner-shadow),0 0;outline:none}@media (forced-colors:none){.ck .ck-editor__nested-editable.ck-editor__nested-editable_focused,.ck .ck-editor__nested-editable:focus{background-color:var(--ck-color-widget-editable-focus-background)}}.ck .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle{background-color:transparent;border-radius:var(--ck-border-radius) var(--ck-border-radius) 0 0;box-sizing:border-box;left:calc(0px - var(--ck-widget-outline-thickness));opacity:0;padding:4px;top:0;transform:translateY(-100%);transition:background-color var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve),visibility var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve),opacity var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve)}@media (prefers-reduced-motion:reduce){.ck .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle{transition:none}}.ck .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle .ck-icon{color:var(--ck-color-widget-drag-handler-icon-color);height:var(--ck-widget-handler-icon-size);width:var(--ck-widget-handler-icon-size)}.ck .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle .ck-icon .ck-icon__selected-indicator{opacity:0;transition:opacity .3s var(--ck-widget-handler-animation-curve)}@media (prefers-reduced-motion:reduce){.ck .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle .ck-icon .ck-icon__selected-indicator{transition:none}}.ck .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle:hover .ck-icon .ck-icon__selected-indicator{opacity:1}.ck .ck-widget.ck-widget_with-selection-handle:hover>.ck-widget__selection-handle{background-color:var(--ck-color-widget-hover-border);opacity:1}.ck .ck-widget.ck-widget_with-selection-handle.ck-widget_selected:hover>.ck-widget__selection-handle,.ck .ck-widget.ck-widget_with-selection-handle.ck-widget_selected>.ck-widget__selection-handle{background-color:var(--ck-color-focus-border);opacity:1}.ck .ck-widget.ck-widget_with-selection-handle.ck-widget_selected:hover>.ck-widget__selection-handle .ck-icon .ck-icon__selected-indicator,.ck .ck-widget.ck-widget_with-selection-handle.ck-widget_selected>.ck-widget__selection-handle .ck-icon .ck-icon__selected-indicator{opacity:1}.ck[dir=rtl] .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle{left:auto;right:calc(0px - var(--ck-widget-outline-thickness))}.ck.ck-editor__editable.ck-read-only .ck-widget{transition:none}.ck.ck-editor__editable.ck-read-only .ck-widget:not(.ck-widget_selected){--ck-widget-outline-thickness:0px}.ck.ck-editor__editable.ck-read-only .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle,.ck.ck-editor__editable.ck-read-only .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle:hover{background:var(--ck-color-widget-blurred-border)}.ck.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected,.ck.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected:hover{outline-color:var(--ck-color-widget-blurred-border)}.ck.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected.ck-widget_with-selection-handle:hover>.ck-widget__selection-handle,.ck.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected.ck-widget_with-selection-handle:hover>.ck-widget__selection-handle:hover,.ck.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected.ck-widget_with-selection-handle>.ck-widget__selection-handle,.ck.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected.ck-widget_with-selection-handle>.ck-widget__selection-handle:hover{background:var(--ck-color-widget-blurred-border)}.ck.ck-editor__editable blockquote>.ck-widget.ck-widget_with-selection-handle:first-child,.ck.ck-editor__editable>.ck-widget.ck-widget_with-selection-handle:first-child{margin-top:calc(1em + var(--ck-widget-handler-icon-size))}","",{version:3,sources:["webpack://./../ckeditor5-widget/theme/widget.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-widget/widget.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_focus.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_shadow.css","webpack://./../ckeditor5-ui/theme/mixins/_mediacolors.css"],names:[],mappings:"AAKA,MACC,+CAAgD,CAChD,6CAAsD,CACtD,uCAAgD,CAEhD,kDAAmD,CACnD,gCAAiC,CACjC,kEACD,CAOA,8DAEC,iBAqBD,CAnBC,4EACC,iBAOD,CALC,qFAGC,aACD,CASD,iLACC,kBACD,CAGD,kBACC,qDAAsD,CAEtD,qDAAsD,CACtD,6CAA8C,CAF9C,0CAA2C,CAI3C,aAAc,CADd,kCAAmC,CAGnC,uCAAwC,CACxC,4CAA6C,CAF7C,iCAsCD,CAlCC,8NAKC,iBACD,CAEA,0CAEC,qCAAsC,CADtC,oCAED,CAEA,2CAEC,sCAAuC,CADvC,oCAED,CAEA,8CACC,uCAAwC,CACxC,sCACD,CAEA,6CACC,uCAAwC,CACxC,qCACD,CAGA,8CAEC,QAAS,CADT,6CAAgD,CAEhD,yBACD,CChFD,MACC,iCAAkC,CAClC,kCAAmC,CACnC,4CAA6C,CAC7C,wCAAyC,CAEzC,wCAAiD,CACjD,sCAAkD,CAClD,2EAA4E,CAC5E,yEACD,CAEA,eAGC,yBAA0B,CAD1B,mBAAoB,CADpB,gDAAiD,CAGjD,6GAcD,CAZC,uCAND,eAOE,eAWF,CAVC,CAEA,0EAEC,6EACD,CAEA,qBACC,iDACD,CAGD,gCACC,4BAYD,CARC,yGCnCA,2BAA2B,CCF3B,qCAA8B,CDC9B,YD2CA,CGvCA,4BACC,yGHoCC,iEGlCD,CACD,CHuCA,4EAKC,4BAA6B,CAa7B,iEAAkE,CAhBlE,qBAAsB,CAoBtB,mDAAoD,CAhBpD,SAAU,CALV,WAAY,CAsBZ,KAAM,CAFN,2BAA4B,CAT5B,6SAwCD,CA3BC,uCAzBD,4EA0BE,eA0BF,CAzBC,CAEA,qFAIC,oDAAqD,CADrD,yCAA0C,CAD1C,wCAeD,CAVC,kHACC,SAAU,CAGV,+DAKD,CAHC,uCAND,kHAOE,eAEF,CADC,CAKF,wHACC,SACD,CAID,kFAEC,oDAAqD,CADrD,SAED,CAKC,oMAEC,6CAA8C,CAD9C,SAOD,CAHC,gRACC,SACD,CAOH,qFACC,SAAU,CACV,oDACD,CAGA,gDAEC,eAkBD,CAhBC,yEAOC,iCACD,CAGC,gOAEC,gDACD,CAOD,wIAEC,mDAQD,CALE,ghBAEC,gDACD,CAKH,yKAOC,yDACD",sourcesContent:[`/*
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
`],sourceRoot:""}]);const E=C},4095:(f,b,m)=>{m.d(b,{A:()=>E});var A=m(9372),v=m.n(A),x=m(935),C=m.n(x)()(v());C.push([f.id,".ck .ck-widget_with-resizer{position:relative}.ck .ck-widget__resizer{display:none;left:0;pointer-events:none;position:absolute;top:0}.ck-focused .ck-widget_with-resizer.ck-widget_selected>.ck-widget__resizer{display:block}.ck .ck-widget__resizer__handle{pointer-events:all;position:absolute}.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-bottom-right,.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-top-left{cursor:nwse-resize}.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-bottom-left,.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-top-right{cursor:nesw-resize}:root{--ck-resizer-size:10px;--ck-resizer-offset:calc(var(--ck-resizer-size)/-2 - 2px);--ck-resizer-border-width:1px}.ck .ck-widget__resizer{outline:1px solid var(--ck-color-resizer)}.ck .ck-widget__resizer__handle{background:var(--ck-color-focus-border);border:var(--ck-resizer-border-width) solid #fff;border-radius:var(--ck-resizer-border-radius);height:var(--ck-resizer-size);width:var(--ck-resizer-size)}.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-top-left{left:var(--ck-resizer-offset);top:var(--ck-resizer-offset)}.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-top-right{right:var(--ck-resizer-offset);top:var(--ck-resizer-offset)}.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-bottom-right{bottom:var(--ck-resizer-offset);right:var(--ck-resizer-offset)}.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-bottom-left{bottom:var(--ck-resizer-offset);left:var(--ck-resizer-offset)}","",{version:3,sources:["webpack://./../ckeditor5-widget/theme/widgetresize.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-widget/widgetresize.css"],names:[],mappings:"AAKA,4BAEC,iBACD,CAEA,wBACC,YAAa,CAMb,MAAO,CAFP,mBAAoB,CAHpB,iBAAkB,CAMlB,KACD,CAGC,2EACC,aACD,CAGD,gCAIC,kBAAmB,CAHnB,iBAcD,CATC,4IAEC,kBACD,CAEA,4IAEC,kBACD,CCpCD,MACC,sBAAuB,CAGvB,yDAAiE,CACjE,6BACD,CAEA,wBACC,yCACD,CAEA,gCAGC,uCAAwC,CACxC,gDAA6D,CAC7D,6CAA8C,CAH9C,6BAA8B,CAD9B,4BAyBD,CAnBC,oEAEC,6BAA8B,CAD9B,4BAED,CAEA,qEAEC,8BAA+B,CAD/B,4BAED,CAEA,wEACC,+BAAgC,CAChC,8BACD,CAEA,uEACC,+BAAgC,CAChC,6BACD",sourcesContent:[`/*
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
`],sourceRoot:""}]);const E=C},8508:(f,b,m)=>{m.d(b,{A:()=>E});var A=m(9372),v=m.n(A),x=m(935),C=m.n(x)()(v());C.push([f.id,'.ck .ck-widget .ck-widget__type-around__button{display:block;overflow:hidden;position:absolute;z-index:var(--ck-z-default)}.ck .ck-widget .ck-widget__type-around__button svg{left:50%;position:absolute;top:50%;z-index:calc(var(--ck-z-default) + 2)}.ck .ck-widget .ck-widget__type-around__button.ck-widget__type-around__button_before{left:min(10%,30px);top:calc(var(--ck-widget-outline-thickness)*-.5);transform:translateY(-50%)}.ck .ck-widget .ck-widget__type-around__button.ck-widget__type-around__button_after{bottom:calc(var(--ck-widget-outline-thickness)*-.5);right:min(10%,30px);transform:translateY(50%)}.ck .ck-widget.ck-widget_selected>.ck-widget__type-around>.ck-widget__type-around__button:after,.ck .ck-widget>.ck-widget__type-around>.ck-widget__type-around__button:hover:after{content:"";display:block;left:1px;position:absolute;top:1px;z-index:calc(var(--ck-z-default) + 1)}.ck .ck-widget>.ck-widget__type-around>.ck-widget__type-around__fake-caret{display:none;left:0;position:absolute;right:0}.ck .ck-widget:hover>.ck-widget__type-around>.ck-widget__type-around__fake-caret{left:calc(var(--ck-widget-outline-thickness)*-1);right:calc(var(--ck-widget-outline-thickness)*-1)}.ck .ck-widget.ck-widget_type-around_show-fake-caret_before>.ck-widget__type-around>.ck-widget__type-around__fake-caret{display:block;top:calc(var(--ck-widget-outline-thickness)*-1 - 1px)}.ck .ck-widget.ck-widget_type-around_show-fake-caret_after>.ck-widget__type-around>.ck-widget__type-around__fake-caret{bottom:calc(var(--ck-widget-outline-thickness)*-1 - 1px);display:block}.ck.ck-editor__editable.ck-read-only .ck-widget__type-around,.ck.ck-editor__editable.ck-restricted-editing_mode_restricted .ck-widget__type-around,.ck.ck-editor__editable.ck-widget__type-around_disabled .ck-widget__type-around{display:none}:root{--ck-widget-type-around-button-size:20px;--ck-color-widget-type-around-button-active:var(--ck-color-focus-border);--ck-color-widget-type-around-button-hover:var(--ck-color-widget-hover-border);--ck-color-widget-type-around-button-blurred-editable:var(--ck-color-widget-blurred-border);--ck-color-widget-type-around-button-radar-start-alpha:0;--ck-color-widget-type-around-button-radar-end-alpha:.3;--ck-color-widget-type-around-button-icon:var(--ck-color-base-background)}.ck .ck-widget .ck-widget__type-around__button{background:var(--ck-color-widget-type-around-button);border-radius:100px;height:var(--ck-widget-type-around-button-size);opacity:0;pointer-events:none;transition:opacity var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve),background var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve);width:var(--ck-widget-type-around-button-size)}@media (prefers-reduced-motion:reduce){.ck .ck-widget .ck-widget__type-around__button{transition:none}}.ck .ck-widget .ck-widget__type-around__button svg{height:8px;margin-top:1px;transform:translate(-50%,-50%);transition:transform .5s ease;width:10px}@media (prefers-reduced-motion:reduce){.ck .ck-widget .ck-widget__type-around__button svg{transition:none}}.ck .ck-widget .ck-widget__type-around__button svg *{stroke-dasharray:10;stroke-dashoffset:0;fill:none;stroke:var(--ck-color-widget-type-around-button-icon);stroke-width:1.5px;stroke-linecap:round;stroke-linejoin:round}.ck .ck-widget .ck-widget__type-around__button svg line{stroke-dasharray:7}.ck .ck-widget .ck-widget__type-around__button:hover{animation:ck-widget-type-around-button-sonar 1s ease infinite}.ck .ck-widget .ck-widget__type-around__button:hover svg polyline{animation:ck-widget-type-around-arrow-dash 2s linear}.ck .ck-widget .ck-widget__type-around__button:hover svg line{animation:ck-widget-type-around-arrow-tip-dash 2s linear}@media (prefers-reduced-motion:reduce){.ck .ck-widget .ck-widget__type-around__button:hover,.ck .ck-widget .ck-widget__type-around__button:hover svg line,.ck .ck-widget .ck-widget__type-around__button:hover svg polyline{animation:none}}.ck .ck-widget.ck-widget_selected>.ck-widget__type-around>.ck-widget__type-around__button,.ck .ck-widget:hover>.ck-widget__type-around>.ck-widget__type-around__button{opacity:1;pointer-events:auto}.ck .ck-widget:not(.ck-widget_selected)>.ck-widget__type-around>.ck-widget__type-around__button{background:var(--ck-color-widget-type-around-button-hover)}.ck .ck-widget.ck-widget_selected>.ck-widget__type-around>.ck-widget__type-around__button,.ck .ck-widget>.ck-widget__type-around>.ck-widget__type-around__button:hover{background:var(--ck-color-widget-type-around-button-active)}.ck .ck-widget.ck-widget_selected>.ck-widget__type-around>.ck-widget__type-around__button:after,.ck .ck-widget>.ck-widget__type-around>.ck-widget__type-around__button:hover:after{background:linear-gradient(135deg,hsla(0,0%,100%,0),hsla(0,0%,100%,.3));border-radius:100px;height:calc(var(--ck-widget-type-around-button-size) - 2px);width:calc(var(--ck-widget-type-around-button-size) - 2px)}.ck .ck-widget.ck-widget_with-selection-handle>.ck-widget__type-around>.ck-widget__type-around__button_before{margin-left:20px}.ck .ck-widget .ck-widget__type-around__fake-caret{animation:ck-widget-type-around-fake-caret-pulse 1s linear infinite normal forwards;background:var(--ck-color-base-text);height:1px;outline:1px solid hsla(0,0%,100%,.5);pointer-events:none}.ck .ck-widget.ck-widget_selected.ck-widget_type-around_show-fake-caret_after,.ck .ck-widget.ck-widget_selected.ck-widget_type-around_show-fake-caret_before{outline-color:transparent}.ck .ck-widget.ck-widget_type-around_show-fake-caret_after.ck-widget_selected:hover,.ck .ck-widget.ck-widget_type-around_show-fake-caret_before.ck-widget_selected:hover{outline-color:var(--ck-color-widget-hover-border)}.ck .ck-widget.ck-widget_type-around_show-fake-caret_after>.ck-widget__type-around>.ck-widget__type-around__button,.ck .ck-widget.ck-widget_type-around_show-fake-caret_before>.ck-widget__type-around>.ck-widget__type-around__button{opacity:0;pointer-events:none}.ck .ck-widget.ck-widget_type-around_show-fake-caret_after.ck-widget_selected.ck-widget_with-resizer>.ck-widget__resizer,.ck .ck-widget.ck-widget_type-around_show-fake-caret_after.ck-widget_with-selection-handle.ck-widget_selected:hover>.ck-widget__selection-handle,.ck .ck-widget.ck-widget_type-around_show-fake-caret_after.ck-widget_with-selection-handle.ck-widget_selected>.ck-widget__selection-handle,.ck .ck-widget.ck-widget_type-around_show-fake-caret_before.ck-widget_selected.ck-widget_with-resizer>.ck-widget__resizer,.ck .ck-widget.ck-widget_type-around_show-fake-caret_before.ck-widget_with-selection-handle.ck-widget_selected:hover>.ck-widget__selection-handle,.ck .ck-widget.ck-widget_type-around_show-fake-caret_before.ck-widget_with-selection-handle.ck-widget_selected>.ck-widget__selection-handle{opacity:0}.ck[dir=rtl] .ck-widget.ck-widget_with-selection-handle .ck-widget__type-around>.ck-widget__type-around__button_before{margin-left:0;margin-right:20px}.ck-editor__nested-editable.ck-editor__editable_selected .ck-widget.ck-widget_selected>.ck-widget__type-around>.ck-widget__type-around__button,.ck-editor__nested-editable.ck-editor__editable_selected .ck-widget:hover>.ck-widget__type-around>.ck-widget__type-around__button{opacity:0;pointer-events:none}.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected>.ck-widget__type-around>.ck-widget__type-around__button:not(:hover){background:var(--ck-color-widget-type-around-button-blurred-editable)}.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected>.ck-widget__type-around>.ck-widget__type-around__button:not(:hover) svg *{stroke:#999}@keyframes ck-widget-type-around-arrow-dash{0%{stroke-dashoffset:10}20%,to{stroke-dashoffset:0}}@keyframes ck-widget-type-around-arrow-tip-dash{0%,20%{stroke-dashoffset:7}40%,to{stroke-dashoffset:0}}@keyframes ck-widget-type-around-button-sonar{0%{box-shadow:0 0 0 0 hsla(var(--ck-color-focus-border-coordinates),var(--ck-color-widget-type-around-button-radar-start-alpha))}50%{box-shadow:0 0 0 5px hsla(var(--ck-color-focus-border-coordinates),var(--ck-color-widget-type-around-button-radar-end-alpha))}to{box-shadow:0 0 0 5px hsla(var(--ck-color-focus-border-coordinates),var(--ck-color-widget-type-around-button-radar-start-alpha))}}@keyframes ck-widget-type-around-fake-caret-pulse{0%{opacity:1}49%{opacity:1}50%{opacity:0}99%{opacity:0}to{opacity:1}}',"",{version:3,sources:["webpack://./../ckeditor5-widget/theme/widgettypearound.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-widget/widgettypearound.css"],names:[],mappings:"AASC,+CACC,aAAc,CAEd,eAAgB,CADhB,iBAAkB,CAElB,2BAwBD,CAtBC,mDAGC,QAAS,CAFT,iBAAkB,CAClB,OAAQ,CAER,qCACD,CAEA,qFAGC,kBAAoB,CADpB,gDAAoD,CAGpD,0BACD,CAEA,oFAEC,mDAAuD,CACvD,mBAAqB,CAErB,yBACD,CAUA,mLACC,UAAW,CACX,aAAc,CAGd,QAAS,CAFT,iBAAkB,CAClB,OAAQ,CAER,qCACD,CAMD,2EACC,YAAa,CAEb,MAAO,CADP,iBAAkB,CAElB,OACD,CAOA,iFACC,gDAAqD,CACrD,iDACD,CAKA,wHAEC,aAAc,CADd,qDAED,CAKA,uHACC,wDAA6D,CAC7D,aACD,CAoBD,mOACC,YACD,CC3GA,MACC,wCAAyC,CACzC,wEAAyE,CACzE,8EAA+E,CAC/E,2FAA4F,CAC5F,wDAAyD,CACzD,uDAAwD,CACxD,yEACD,CAgBC,+CAGC,oDAAqD,CACrD,mBAAoB,CAFpB,+CAAgD,CAVjD,SAAU,CACV,mBAAoB,CAYnB,uMAAyM,CAJzM,8CAwED,CAhEC,uCATD,+CAUE,eA+DF,CA9DC,CAEA,mDAEC,UAAW,CAGX,cAAe,CAFf,8BAA+B,CAC/B,6BAA8B,CAH9B,UAwBD,CAlBC,uCAPD,mDAQE,eAiBF,CAhBC,CAEA,qDACC,mBAAoB,CACpB,mBAAoB,CAEpB,SAAU,CACV,qDAAsD,CACtD,kBAAmB,CACnB,oBAAqB,CACrB,qBACD,CAEA,wDACC,kBACD,CAGD,qDAIC,6DA4BD,CAtBE,kEACC,oDACD,CAEA,8DACC,wDACD,CAGD,uCAQE,qLACC,cACD,CAEF,CASD,uKA7FD,SAAU,CACV,mBA8FC,CAOD,gGACC,0DACD,CAOA,uKAEC,2DAQD,CANC,mLAIC,uEAAkF,CADlF,mBAAoB,CADpB,2DAA4D,CAD5D,0DAID,CAOD,8GACC,gBACD,CAKA,mDAGC,mFAAoF,CAOpF,oCAAqC,CARrC,UAAW,CAOX,oCAAwC,CARxC,mBAUD,CAOC,6JAEC,yBACD,CAUA,yKACC,iDACD,CAMA,uOAxKD,SAAU,CACV,mBAyKC,CAoBA,6yBACC,SACD,CASF,uHACC,aAAc,CACd,iBACD,CAYG,iRAxNF,SAAU,CACV,mBAyNE,CAQH,kIACC,qEAKD,CAHC,wIACC,WACD,CAGD,4CACC,GACC,oBACD,CACA,OACC,mBACD,CACD,CAEA,gDACC,OACC,mBACD,CACA,OACC,mBACD,CACD,CAEA,8CACC,GACC,6HACD,CACA,IACC,6HACD,CACA,GACC,+HACD,CACD,CAEA,kDACC,GACC,SACD,CACA,IACC,SACD,CACA,IACC,SACD,CACA,IACC,SACD,CACA,GACC,SACD,CACD",sourcesContent:[`/*
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
`],sourceRoot:""}]);const E=C},935:f=>{f.exports=function(b){var m=[];return m.toString=function(){return this.map(function(A){var v=b(A);return A[2]?"@media ".concat(A[2]," {").concat(v,"}"):v}).join("")},m.i=function(A,v,x){typeof A=="string"&&(A=[[null,A,""]]);var C={};if(x)for(var E=0;E<this.length;E++){var T=this[E][0];T!=null&&(C[T]=!0)}for(var I=0;I<A.length;I++){var F=[].concat(A[I]);x&&C[F[0]]||(v&&(F[2]?F[2]="".concat(v," and ").concat(F[2]):F[2]=v),m.push(F))}},m}},9372:f=>{function b(A,v){return function(x){if(Array.isArray(x))return x}(A)||function(x,C){var E=x&&(typeof Symbol<"u"&&x[Symbol.iterator]||x["@@iterator"]);if(E!=null){var T,I,F=[],N=!0,L=!1;try{for(E=E.call(x);!(N=(T=E.next()).done)&&(F.push(T.value),!C||F.length!==C);N=!0);}catch(B){L=!0,I=B}finally{try{N||E.return==null||E.return()}finally{if(L)throw I}}return F}}(A,v)||function(x,C){if(x){if(typeof x=="string")return m(x,C);var E=Object.prototype.toString.call(x).slice(8,-1);if(E==="Object"&&x.constructor&&(E=x.constructor.name),E==="Map"||E==="Set")return Array.from(x);if(E==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(E))return m(x,C)}}(A,v)||function(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}()}function m(A,v){(v==null||v>A.length)&&(v=A.length);for(var x=0,C=new Array(v);x<v;x++)C[x]=A[x];return C}f.exports=function(A){var v=b(A,4),x=v[1],C=v[3];if(!C)return x;if(typeof btoa=="function"){var E=btoa(unescape(encodeURIComponent(JSON.stringify(C)))),T="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(E),I="/*# ".concat(T," */"),F=C.sources.map(function(N){return"/*# sourceURL=".concat(C.sourceRoot||"").concat(N," */")});return[x].concat(F).concat([I]).join(`
`)}return[x].join(`
`)}},2591:(f,b,m)=>{var A,v=function(){return A===void 0&&(A=!!(window&&document&&document.all&&!window.atob)),A},x=function(){var P={};return function(H){if(P[H]===void 0){var V=document.querySelector(H);if(window.HTMLIFrameElement&&V instanceof window.HTMLIFrameElement)try{V=V.contentDocument.head}catch{V=null}P[H]=V}return P[H]}}(),C=[];function E(P){for(var H=-1,V=0;V<C.length;V++)if(C[V].identifier===P){H=V;break}return H}function T(P,H){for(var V={},q=[],Y=0;Y<P.length;Y++){var J=P[Y],te=H.base?J[0]+H.base:J[0],re=V[te]||0,ae="".concat(te," ").concat(re);V[te]=re+1;var oe=E(ae),ge={css:J[1],media:J[2],sourceMap:J[3]};oe!==-1?(C[oe].references++,C[oe].updater(ge)):C.push({identifier:ae,updater:W(ge,H),references:1}),q.push(ae)}return q}function I(P){var H=document.createElement("style"),V=P.attributes||{};if(V.nonce===void 0){var q=m.nc;q&&(V.nonce=q)}if(Object.keys(V).forEach(function(J){H.setAttribute(J,V[J])}),typeof P.insert=="function")P.insert(H);else{var Y=x(P.insert||"head");if(!Y)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");Y.appendChild(H)}return H}var F,N=(F=[],function(P,H){return F[P]=H,F.filter(Boolean).join(`
`)});function L(P,H,V,q){var Y=V?"":q.media?"@media ".concat(q.media," {").concat(q.css,"}"):q.css;if(P.styleSheet)P.styleSheet.cssText=N(H,Y);else{var J=document.createTextNode(Y),te=P.childNodes;te[H]&&P.removeChild(te[H]),te.length?P.insertBefore(J,te[H]):P.appendChild(J)}}function B(P,H,V){var q=V.css,Y=V.media,J=V.sourceMap;if(Y?P.setAttribute("media",Y):P.removeAttribute("media"),J&&typeof btoa<"u"&&(q+=`
/*# sourceMappingURL=data:application/json;base64,`.concat(btoa(unescape(encodeURIComponent(JSON.stringify(J))))," */")),P.styleSheet)P.styleSheet.cssText=q;else{for(;P.firstChild;)P.removeChild(P.firstChild);P.appendChild(document.createTextNode(q))}}var z=null,U=0;function W(P,H){var V,q,Y;if(H.singleton){var J=U++;V=z||(z=I(H)),q=L.bind(null,V,J,!1),Y=L.bind(null,V,J,!0)}else V=I(H),q=B.bind(null,V,H),Y=function(){(function(te){if(te.parentNode===null)return!1;te.parentNode.removeChild(te)})(V)};return q(P),function(te){if(te){if(te.css===P.css&&te.media===P.media&&te.sourceMap===P.sourceMap)return;q(P=te)}else Y()}}f.exports=function(P,H){(H=H||{}).singleton||typeof H.singleton=="boolean"||(H.singleton=v());var V=T(P=P||[],H);return function(q){if(q=q||[],Object.prototype.toString.call(q)==="[object Array]"){for(var Y=0;Y<V.length;Y++){var J=E(V[Y]);C[J].references--}for(var te=T(q,H),re=0;re<V.length;re++){var ae=E(V[re]);C[ae].references===0&&(C[ae].updater(),C.splice(ae,1))}V=te}}}}},l={};function u(f){var b=l[f];if(b!==void 0)return b.exports;var m=l[f]={id:f,exports:{}};return r[f](m,m.exports,u),m.exports}u.n=f=>{var b=f&&f.__esModule?()=>f.default:()=>f;return u.d(b,{a:b}),b},u.d=(f,b)=>{for(var m in b)u.o(b,m)&&!u.o(f,m)&&Object.defineProperty(f,m,{enumerable:!0,get:b[m]})},u.o=(f,b)=>Object.prototype.hasOwnProperty.call(f,b),u.nc=void 0;var p={};return(()=>{let f;u.d(p,{default:()=>Wg});try{f={window,document}}catch{f={window:{},document:{}}}const b=f,m=function(){try{return navigator.userAgent.toLowerCase()}catch{return""}}();var A;const v={isMac:x(m),isWindows:(A=m,A.indexOf("windows")>-1),isGecko:function(s){return!!s.match(/gecko\/\d+/)}(m),isSafari:function(s){return s.indexOf(" applewebkit/")>-1&&s.indexOf("chrome")===-1}(m),isiOS:function(s){return!!s.match(/iphone|ipad/i)||x(s)&&navigator.maxTouchPoints>0}(m),isAndroid:function(s){return s.indexOf("android")>-1}(m),isBlink:function(s){return s.indexOf("chrome/")>-1&&s.indexOf("edge/")<0}(m),get isMediaForcedColors(){return!!b.window.matchMedia&&b.window.matchMedia("(forced-colors: active)").matches},get isMotionReduced(){return!!b.window.matchMedia&&b.window.matchMedia("(prefers-reduced-motion)").matches},features:{isRegExpUnicodePropertySupported:function(){let s=!1;try{s="ć".search(new RegExp("[\\p{L}]","u"))===0}catch{}return s}()}};function x(s){return s.indexOf("macintosh")>-1}function C(s,e,t,o){t=t||function(g,k){return g===k};const a=Array.isArray(s)?s:Array.prototype.slice.call(s),c=Array.isArray(e)?e:Array.prototype.slice.call(e),d=function(g,k,w){const y=E(g,k,w);if(y===-1)return{firstIndex:-1,lastIndexOld:-1,lastIndexNew:-1};const S=T(g,y),D=T(k,y),M=E(S,D,w),R=g.length-M,j=k.length-M;return{firstIndex:y,lastIndexOld:R,lastIndexNew:j}}(a,c,t);return o?function(g,k){const{firstIndex:w,lastIndexOld:y,lastIndexNew:S}=g;if(w===-1)return Array(k).fill("equal");let D=[];return w>0&&(D=D.concat(Array(w).fill("equal"))),S-w>0&&(D=D.concat(Array(S-w).fill("insert"))),y-w>0&&(D=D.concat(Array(y-w).fill("delete"))),S<k&&(D=D.concat(Array(k-S).fill("equal"))),D}(d,c.length):function(g,k){const w=[],{firstIndex:y,lastIndexOld:S,lastIndexNew:D}=k;return D-y>0&&w.push({index:y,type:"insert",values:g.slice(y,D)}),S-y>0&&w.push({index:y+(D-y),type:"delete",howMany:S-y}),w}(c,d)}function E(s,e,t){for(let o=0;o<Math.max(s.length,e.length);o++)if(s[o]===void 0||e[o]===void 0||!t(s[o],e[o]))return o;return-1}function T(s,e){return s.slice(e).reverse()}function I(s,e,t){t=t||function(R,j){return R===j};const o=s.length,a=e.length;if(o>200||a>200||o+a>300)return I.fastDiff(s,e,t,!0);let c,d;if(a<o){const R=s;s=e,e=R,c="delete",d="insert"}else c="insert",d="delete";const h=s.length,g=e.length,k=g-h,w={},y={};function S(R){const j=(y[R-1]!==void 0?y[R-1]:-1)+1,G=y[R+1]!==void 0?y[R+1]:-1,Z=j>G?-1:1;w[R+Z]&&(w[R]=w[R+Z].slice(0)),w[R]||(w[R]=[]),w[R].push(j>G?c:d);let se=Math.max(j,G),me=se-R;for(;me<h&&se<g&&t(s[me],e[se]);)me++,se++,w[R].push("equal");return se}let D,M=0;do{for(D=-M;D<k;D++)y[D]=S(D);for(D=k+M;D>k;D--)y[D]=S(D);y[k]=S(k),M++}while(y[k]!==g);return w[k].slice(1)}I.fastDiff=C;const F=function(){return function s(){s.called=!0}};class N{constructor(e,t){this.source=e,this.name=t,this.path=[],this.stop=F(),this.off=F()}}const L=new Array(256).fill("").map((s,e)=>("0"+e.toString(16)).slice(-2));function B(){const s=4294967296*Math.random()>>>0,e=4294967296*Math.random()>>>0,t=4294967296*Math.random()>>>0,o=4294967296*Math.random()>>>0;return"e"+L[255&s]+L[s>>8&255]+L[s>>16&255]+L[s>>24&255]+L[255&e]+L[e>>8&255]+L[e>>16&255]+L[e>>24&255]+L[255&t]+L[t>>8&255]+L[t>>16&255]+L[t>>24&255]+L[255&o]+L[o>>8&255]+L[o>>16&255]+L[o>>24&255]}const z={get(s="normal"){return typeof s!="number"?this[s]||this.normal:s},highest:1e5,high:1e3,normal:0,low:-1e3,lowest:-1e5};function U(s,e){const t=z.get(e.priority);for(let o=0;o<s.length;o++)if(z.get(s[o].priority)<t)return void s.splice(o,0,e);s.push(e)}const W="https://ckeditor.com/docs/ckeditor5/latest/support/error-codes.html";class P extends Error{constructor(e,t,o){super(function(a,c){const d=new WeakSet,h=(w,y)=>{if(typeof y=="object"&&y!==null){if(d.has(y))return`[object ${y.constructor.name}]`;d.add(y)}return y},g=c?` ${JSON.stringify(c,h)}`:"",k=q(a);return a+g+k}(e,o)),this.name="CKEditorError",this.context=t,this.data=o}is(e){return e==="CKEditorError"}static rethrowUnexpectedError(e,t){if(e.is&&e.is("CKEditorError"))throw e;const o=new P(e.message,t);throw o.stack=e.stack,o}}function H(s,e){console.warn(...Y(s,e))}function V(s,e){console.error(...Y(s,e))}function q(s){return`
Read more: ${W}#error-${s}`}function Y(s,e){const t=q(s);return e?[s,e,t]:[s,t]}const J="41.4.2",te=new Date(2024,4,17);if(globalThis.CKEDITOR_VERSION)throw new P("ckeditor-duplicated-modules",null);globalThis.CKEDITOR_VERSION=J;const re=Symbol("listeningTo"),ae=Symbol("emitterId"),oe=Symbol("delegations"),ge=ie(Object);function ie(s){return s?class extends s{on(e,t,o){this.listenTo(this,e,t,o)}once(e,t,o){let a=!1;this.listenTo(this,e,(c,...d)=>{a||(a=!0,c.off(),t.call(this,c,...d))},o)}off(e,t){this.stopListening(this,e,t)}listenTo(e,t,o,a={}){let c,d;this[re]||(this[re]={});const h=this[re];Se(e)||Le(e);const g=Se(e);(c=h[g])||(c=h[g]={emitter:e,callbacks:{}}),(d=c.callbacks[t])||(d=c.callbacks[t]=[]),d.push(o),function(k,w,y,S,D){w._addEventListener?w._addEventListener(y,S,D):k._addEventListener.call(w,y,S,D)}(this,e,t,o,a)}stopListening(e,t,o){const a=this[re];let c=e&&Se(e);const d=a&&c?a[c]:void 0,h=d&&t?d.callbacks[t]:void 0;if(!(!a||e&&!d||t&&!h))if(o)Fe(this,e,t,o),h.indexOf(o)!==-1&&(h.length===1?delete d.callbacks[t]:Fe(this,e,t,o));else if(h){for(;o=h.pop();)Fe(this,e,t,o);delete d.callbacks[t]}else if(d){for(t in d.callbacks)this.stopListening(e,t);delete a[c]}else{for(c in a)this.stopListening(a[c].emitter);delete this[re]}}fire(e,...t){try{const o=e instanceof N?e:new N(this,e),a=o.name;let c=be(this,a);if(o.path.push(this),c){const h=[o,...t];c=Array.from(c);for(let g=0;g<c.length&&(c[g].callback.apply(this,h),o.off.called&&(delete o.off.called,this._removeEventListener(a,c[g].callback)),!o.stop.called);g++);}const d=this[oe];if(d){const h=d.get(a),g=d.get("*");h&&je(h,o,t),g&&je(g,o,t)}return o.return}catch(o){P.rethrowUnexpectedError(o,this)}}delegate(...e){return{to:(t,o)=>{this[oe]||(this[oe]=new Map),e.forEach(a=>{const c=this[oe].get(a);c?c.set(t,o):this[oe].set(a,new Map([[t,o]]))})}}}stopDelegating(e,t){if(this[oe])if(e)if(t){const o=this[oe].get(e);o&&o.delete(t)}else this[oe].delete(e);else this[oe].clear()}_addEventListener(e,t,o){(function(d,h){const g=Je(d);if(g[h])return;let k=h,w=null;const y=[];for(;k!==""&&!g[k];)g[k]={callbacks:[],childEvents:[]},y.push(g[k]),w&&g[k].childEvents.push(w),w=k,k=k.substr(0,k.lastIndexOf(":"));if(k!==""){for(const S of y)S.callbacks=g[k].callbacks.slice();g[k].childEvents.push(w)}})(this,e);const a=Xe(this,e),c={callback:t,priority:z.get(o.priority)};for(const d of a)U(d,c)}_removeEventListener(e,t){const o=Xe(this,e);for(const a of o)for(let c=0;c<a.length;c++)a[c].callback==t&&(a.splice(c,1),c--)}}:ge}function Le(s,e){s[ae]||(s[ae]=e||B())}function Se(s){return s[ae]}function Je(s){return s._events||Object.defineProperty(s,"_events",{value:{}}),s._events}function Xe(s,e){const t=Je(s)[e];if(!t)return[];let o=[t.callbacks];for(let a=0;a<t.childEvents.length;a++){const c=Xe(s,t.childEvents[a]);o=o.concat(c)}return o}function be(s,e){let t;return s._events&&(t=s._events[e])&&t.callbacks.length?t.callbacks:e.indexOf(":")>-1?be(s,e.substr(0,e.lastIndexOf(":"))):null}function je(s,e,t){for(let[o,a]of s){a?typeof a=="function"&&(a=a(e.name)):a=e.name;const c=new N(e.source,a);c.path=[...e.path],o.fire(c,...t)}}function Fe(s,e,t,o){e._removeEventListener?e._removeEventListener(t,o):s._removeEventListener.call(e,t,o)}["on","once","off","listenTo","stopListening","fire","delegate","stopDelegating","_addEventListener","_removeEventListener"].forEach(s=>{ie[s]=ge.prototype[s]});const Ve=function(s){var e=typeof s;return s!=null&&(e=="object"||e=="function")},At=Symbol("observableProperties"),at=Symbol("boundObservables"),Ot=Symbol("boundProperties"),ot=Symbol("decoratedMethods"),xt=Symbol("decoratedOriginal"),Wt=K(ie());function K(s){return s?class extends s{set(e,t){if(Ve(e))return void Object.keys(e).forEach(a=>{this.set(a,e[a])},this);X(this);const o=this[At];if(e in this&&!o.has(e))throw new P("observable-set-cannot-override",this);Object.defineProperty(this,e,{enumerable:!0,configurable:!0,get:()=>o.get(e),set(a){const c=o.get(e);let d=this.fire(`set:${e}`,e,a,c);d===void 0&&(d=a),c===d&&o.has(e)||(o.set(e,d),this.fire(`change:${e}`,e,d,c))}}),this[e]=t}bind(...e){if(!e.length||!ke(e))throw new P("observable-bind-wrong-properties",this);if(new Set(e).size!==e.length)throw new P("observable-bind-duplicate-properties",this);X(this);const t=this[Ot];e.forEach(a=>{if(t.has(a))throw new P("observable-bind-rebind",this)});const o=new Map;return e.forEach(a=>{const c={property:a,to:[]};t.set(a,c),o.set(a,c)}),{to:de,toMany:_e,_observable:this,_bindProperties:e,_to:[],_bindings:o}}unbind(...e){if(!this[At])return;const t=this[Ot],o=this[at];if(e.length){if(!ke(e))throw new P("observable-unbind-wrong-properties",this);e.forEach(a=>{const c=t.get(a);c&&(c.to.forEach(([d,h])=>{const g=o.get(d),k=g[h];k.delete(c),k.size||delete g[h],Object.keys(g).length||(o.delete(d),this.stopListening(d,"change"))}),t.delete(a))})}else o.forEach((a,c)=>{this.stopListening(c,"change")}),o.clear(),t.clear()}decorate(e){X(this);const t=this[e];if(!t)throw new P("observablemixin-cannot-decorate-undefined",this,{object:this,methodName:e});this.on(e,(o,a)=>{o.return=t.apply(this,a)}),this[e]=function(...o){return this.fire(e,o)},this[e][xt]=t,this[ot]||(this[ot]=[]),this[ot].push(e)}stopListening(e,t,o){if(!e&&this[ot]){for(const a of this[ot])this[a]=this[a][xt];delete this[ot]}super.stopListening(e,t,o)}}:Wt}function X(s){s[At]||(Object.defineProperty(s,At,{value:new Map}),Object.defineProperty(s,at,{value:new Map}),Object.defineProperty(s,Ot,{value:new Map}))}function de(...s){const e=function(...c){if(!c.length)throw new P("observable-bind-to-parse-error",null);const d={to:[]};let h;return typeof c[c.length-1]=="function"&&(d.callback=c.pop()),c.forEach(g=>{if(typeof g=="string")h.properties.push(g);else{if(typeof g!="object")throw new P("observable-bind-to-parse-error",null);h={observable:g,properties:[]},d.to.push(h)}}),d}(...s),t=Array.from(this._bindings.keys()),o=t.length;if(!e.callback&&e.to.length>1)throw new P("observable-bind-to-no-callback",this);if(o>1&&e.callback)throw new P("observable-bind-to-extra-callback",this);var a;e.to.forEach(c=>{if(c.properties.length&&c.properties.length!==o)throw new P("observable-bind-to-properties-length",this);c.properties.length||(c.properties=this._bindProperties)}),this._to=e.to,e.callback&&(this._bindings.get(t[0]).callback=e.callback),a=this._observable,this._to.forEach(c=>{const d=a[at];let h;d.get(c.observable)||a.listenTo(c.observable,"change",(g,k)=>{h=d.get(c.observable)[k],h&&h.forEach(w=>{ye(a,w.property)})})}),function(c){let d;c._bindings.forEach((h,g)=>{c._to.forEach(k=>{d=k.properties[h.callback?0:c._bindProperties.indexOf(g)],h.to.push([k.observable,d]),function(w,y,S,D){const M=w[at],R=M.get(S),j=R||{};j[D]||(j[D]=new Set),j[D].add(y),R||M.set(S,j)}(c._observable,h,k.observable,d)})})}(this),this._bindProperties.forEach(c=>{ye(this._observable,c)})}function _e(s,e,t){if(this._bindings.size>1)throw new P("observable-bind-to-many-not-one-binding",this);this.to(...function(o,a){const c=o.map(d=>[d,a]);return Array.prototype.concat.apply([],c)}(s,e),t)}function ke(s){return s.every(e=>typeof e=="string")}function ye(s,e){const t=s[Ot].get(e);let o;t.callback?o=t.callback.apply(s,t.to.map(a=>a[0][a[1]])):(o=t.to[0],o=o[0][o[1]]),Object.prototype.hasOwnProperty.call(s,e)?s[e]=o:s.set(e,o)}["set","bind","unbind","decorate","on","once","off","listenTo","stopListening","fire","delegate","stopDelegating","_addEventListener","_removeEventListener"].forEach(s=>{K[s]=Wt.prototype[s]});class Me{constructor(){this._replacedElements=[]}replace(e,t){this._replacedElements.push({element:e,newElement:t}),e.style.display="none",t&&e.parentNode.insertBefore(t,e.nextSibling)}restore(){this._replacedElements.forEach(({element:e,newElement:t})=>{e.style.display="",t&&t.remove()}),this._replacedElements=[]}}function xe(s){let e=0;for(const t of s)e++;return e}function ve(s,e){const t=Math.min(s.length,e.length);for(let o=0;o<t;o++)if(s[o]!=e[o])return o;return s.length==e.length?"same":s.length<e.length?"prefix":"extension"}function he(s){return!(!s||!s[Symbol.iterator])}const De=typeof wn=="object"&&wn&&wn.Object===Object&&wn;var Re=typeof self=="object"&&self&&self.Object===Object&&self;const Ne=De||Re||Function("return this")(),He=Ne.Symbol;var Ye=Object.prototype,ht=Ye.hasOwnProperty,ct=Ye.toString,pt=He?He.toStringTag:void 0;const Tn=function(s){var e=ht.call(s,pt),t=s[pt];try{s[pt]=void 0;var o=!0}catch{}var a=ct.call(s);return o&&(e?s[pt]=t:delete s[pt]),a};var Mo=Object.prototype.toString;const Lr=function(s){return Mo.call(s)};var po=He?He.toStringTag:void 0;const Dn=function(s){return s==null?s===void 0?"[object Undefined]":"[object Null]":po&&po in Object(s)?Tn(s):Lr(s)},It=Array.isArray,Bt=function(s){return s!=null&&typeof s=="object"},Oo=function(s){return typeof s=="string"||!It(s)&&Bt(s)&&Dn(s)=="[object String]"};function Xt(s,e,t={},o=[]){const a=t&&t.xmlns,c=a?s.createElementNS(a,e):s.createElement(e);for(const d in t)c.setAttribute(d,t[d]);!Oo(o)&&he(o)||(o=[o]);for(let d of o)Oo(d)&&(d=s.createTextNode(d)),c.appendChild(d);return c}const ir=function(s,e){return function(t){return s(e(t))}},rr=ir(Object.getPrototypeOf,Object);var sr=Function.prototype,Ms=Object.prototype,Bi=sr.toString,Os=Ms.hasOwnProperty,Bs=Bi.call(Object);const vn=function(s){if(!Bt(s)||Dn(s)!="[object Object]")return!1;var e=rr(s);if(e===null)return!0;var t=Os.call(e,"constructor")&&e.constructor;return typeof t=="function"&&t instanceof t&&Bi.call(t)==Bs},Pi=function(){this.__data__=[],this.size=0},Ni=function(s,e){return s===e||s!=s&&e!=e},fo=function(s,e){for(var t=s.length;t--;)if(Ni(s[t][0],e))return t;return-1};var bc=Array.prototype.splice;const kc=function(s){var e=this.__data__,t=fo(e,s);return!(t<0)&&(t==e.length-1?e.pop():bc.call(e,t,1),--this.size,!0)},_c=function(s){var e=this.__data__,t=fo(e,s);return t<0?void 0:e[t][1]},$a=function(s){return fo(this.__data__,s)>-1},Ps=function(s,e){var t=this.__data__,o=fo(t,s);return o<0?(++this.size,t.push([s,e])):t[o][1]=e,this};function en(s){var e=-1,t=s==null?0:s.length;for(this.clear();++e<t;){var o=s[e];this.set(o[0],o[1])}}en.prototype.clear=Pi,en.prototype.delete=kc,en.prototype.get=_c,en.prototype.has=$a,en.prototype.set=Ps;const Rr=en,wc=function(){this.__data__=new Rr,this.size=0},vc=function(s){var e=this.__data__,t=e.delete(s);return this.size=e.size,t},Ac=function(s){return this.__data__.get(s)},Cc=function(s){return this.__data__.has(s)},tn=function(s){if(!Ve(s))return!1;var e=Dn(s);return e=="[object Function]"||e=="[object GeneratorFunction]"||e=="[object AsyncFunction]"||e=="[object Proxy]"},Ns=Ne["__core-js_shared__"];var Va=function(){var s=/[^.]+$/.exec(Ns&&Ns.keys&&Ns.keys.IE_PROTO||"");return s?"Symbol(src)_1."+s:""}();const yc=function(s){return!!Va&&Va in s};var xc=Function.prototype.toString;const fi=function(s){if(s!=null){try{return xc.call(s)}catch{}try{return s+""}catch{}}return""};var Hn=/^\[object .+?Constructor\]$/,Ec=Function.prototype,Sc=Object.prototype,Tc=Ec.toString,Dc=Sc.hasOwnProperty,Ic=RegExp("^"+Tc.call(Dc).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");const Fr=function(s){return!(!Ve(s)||yc(s))&&(tn(s)?Ic:Hn).test(fi(s))},Ha=function(s,e){return s==null?void 0:s[e]},mo=function(s,e){var t=Ha(s,e);return Fr(t)?t:void 0},Un=mo(Ne,"Map"),mi=mo(Object,"create"),Mc=function(){this.__data__=mi?mi(null):{},this.size=0},Oc=function(s){var e=this.has(s)&&delete this.__data__[s];return this.size-=e?1:0,e};var Bc=Object.prototype.hasOwnProperty;const Pc=function(s){var e=this.__data__;if(mi){var t=e[s];return t==="__lodash_hash_undefined__"?void 0:t}return Bc.call(e,s)?e[s]:void 0};var Nc=Object.prototype.hasOwnProperty;const zr=function(s){var e=this.__data__;return mi?e[s]!==void 0:Nc.call(e,s)},Ls=function(s,e){var t=this.__data__;return this.size+=this.has(s)?0:1,t[s]=mi&&e===void 0?"__lodash_hash_undefined__":e,this};function go(s){var e=-1,t=s==null?0:s.length;for(this.clear();++e<t;){var o=s[e];this.set(o[0],o[1])}}go.prototype.clear=Mc,go.prototype.delete=Oc,go.prototype.get=Pc,go.prototype.has=zr,go.prototype.set=Ls;const Rs=go,Ua=function(){this.size=0,this.__data__={hash:new Rs,map:new(Un||Rr),string:new Rs}},Lc=function(s){var e=typeof s;return e=="string"||e=="number"||e=="symbol"||e=="boolean"?s!=="__proto__":s===null},jr=function(s,e){var t=s.__data__;return Lc(e)?t[typeof e=="string"?"string":"hash"]:t.map},Rc=function(s){var e=jr(this,s).delete(s);return this.size-=e?1:0,e},Fc=function(s){return jr(this,s).get(s)},Fs=function(s){return jr(this,s).has(s)},zc=function(s,e){var t=jr(this,s),o=t.size;return t.set(s,e),this.size+=t.size==o?0:1,this};function Li(s){var e=-1,t=s==null?0:s.length;for(this.clear();++e<t;){var o=s[e];this.set(o[0],o[1])}}Li.prototype.clear=Ua,Li.prototype.delete=Rc,Li.prototype.get=Fc,Li.prototype.has=Fs,Li.prototype.set=zc;const Ko=Li,Bo=function(s,e){var t=this.__data__;if(t instanceof Rr){var o=t.__data__;if(!Un||o.length<199)return o.push([s,e]),this.size=++t.size,this;t=this.__data__=new Ko(o)}return t.set(s,e),this.size=t.size,this};function qn(s){var e=this.__data__=new Rr(s);this.size=e.size}qn.prototype.clear=wc,qn.prototype.delete=vc,qn.prototype.get=Ac,qn.prototype.has=Cc,qn.prototype.set=Bo;const Gn=qn,jc=function(s,e){for(var t=-1,o=s==null?0:s.length;++t<o&&e(s[t],t,s)!==!1;);return s},oo=function(){try{var s=mo(Object,"defineProperty");return s({},"",{}),s}catch{}}(),$r=function(s,e,t){e=="__proto__"&&oo?oo(s,e,{configurable:!0,enumerable:!0,value:t,writable:!0}):s[e]=t};var $c=Object.prototype.hasOwnProperty;const zs=function(s,e,t){var o=s[e];$c.call(s,e)&&Ni(o,t)&&(t!==void 0||e in s)||$r(s,e,t)},Ri=function(s,e,t,o){var a=!t;t||(t={});for(var c=-1,d=e.length;++c<d;){var h=e[c],g=void 0;g===void 0&&(g=s[h]),a?$r(t,h,g):zs(t,h,g)}return t},qa=function(s,e){for(var t=-1,o=Array(s);++t<s;)o[t]=e(t);return o},In=function(s){return Bt(s)&&Dn(s)=="[object Arguments]"};var js=Object.prototype,Ga=js.hasOwnProperty,Vr=js.propertyIsEnumerable;const Fi=In(function(){return arguments}())?In:function(s){return Bt(s)&&Ga.call(s,"callee")&&!Vr.call(s,"callee")},Hr=function(){return!1};var Wa=n&&!n.nodeType&&n,$s=Wa&&!0&&i&&!i.nodeType&&i,Ur=$s&&$s.exports===Wa?Ne.Buffer:void 0;const zi=(Ur?Ur.isBuffer:void 0)||Hr;var Yo=/^(?:0|[1-9]\d*)$/;const ar=function(s,e){var t=typeof s;return!!(e=e??9007199254740991)&&(t=="number"||t!="symbol"&&Yo.test(s))&&s>-1&&s%1==0&&s<e},lr=function(s){return typeof s=="number"&&s>-1&&s%1==0&&s<=9007199254740991};var Nt={};Nt["[object Float32Array]"]=Nt["[object Float64Array]"]=Nt["[object Int8Array]"]=Nt["[object Int16Array]"]=Nt["[object Int32Array]"]=Nt["[object Uint8Array]"]=Nt["[object Uint8ClampedArray]"]=Nt["[object Uint16Array]"]=Nt["[object Uint32Array]"]=!0,Nt["[object Arguments]"]=Nt["[object Array]"]=Nt["[object ArrayBuffer]"]=Nt["[object Boolean]"]=Nt["[object DataView]"]=Nt["[object Date]"]=Nt["[object Error]"]=Nt["[object Function]"]=Nt["[object Map]"]=Nt["[object Number]"]=Nt["[object Object]"]=Nt["[object RegExp]"]=Nt["[object Set]"]=Nt["[object String]"]=Nt["[object WeakMap]"]=!1;const Vc=function(s){return Bt(s)&&lr(s.length)&&!!Nt[Dn(s)]},O=function(s){return function(e){return s(e)}};var $=n&&!n.nodeType&&n,Q=$&&!0&&i&&!i.nodeType&&i,fe=Q&&Q.exports===$&&De.process;const et=function(){try{var s=Q&&Q.require&&Q.require("util").types;return s||fe&&fe.binding&&fe.binding("util")}catch{}}();var Ue=et&&et.isTypedArray;const gt=Ue?O(Ue):Vc;var _t=Object.prototype.hasOwnProperty;const rn=function(s,e){var t=It(s),o=!t&&Fi(s),a=!t&&!o&&zi(s),c=!t&&!o&&!a&&gt(s),d=t||o||a||c,h=d?qa(s.length,String):[],g=h.length;for(var k in s)!e&&!_t.call(s,k)||d&&(k=="length"||a&&(k=="offset"||k=="parent")||c&&(k=="buffer"||k=="byteLength"||k=="byteOffset")||ar(k,g))||h.push(k);return h};var Mt=Object.prototype;const kn=function(s){var e=s&&s.constructor;return s===(typeof e=="function"&&e.prototype||Mt)},Wn=ir(Object.keys,Object);var un=Object.prototype.hasOwnProperty;const Mn=function(s){if(!kn(s))return Wn(s);var e=[];for(var t in Object(s))un.call(s,t)&&t!="constructor"&&e.push(t);return e},an=function(s){return s!=null&&lr(s.length)&&!tn(s)},bo=function(s){return an(s)?rn(s):Mn(s)},gi=function(s,e){return s&&Ri(e,bo(e),s)},cr=function(s){var e=[];if(s!=null)for(var t in Object(s))e.push(t);return e};var Eu=Object.prototype.hasOwnProperty;const Ka=function(s){if(!Ve(s))return cr(s);var e=kn(s),t=[];for(var o in s)(o!="constructor"||!e&&Eu.call(s,o))&&t.push(o);return t},bi=function(s){return an(s)?rn(s,!0):Ka(s)},z4=function(s,e){return s&&Ri(e,bi(e),s)};var rw=n&&!n.nodeType&&n,sw=rw&&!0&&i&&!i.nodeType&&i,aw=sw&&sw.exports===rw?Ne.Buffer:void 0,lw=aw?aw.allocUnsafe:void 0;const cw=function(s,e){if(e)return s.slice();var t=s.length,o=lw?lw(t):new s.constructor(t);return s.copy(o),o},dw=function(s,e){var t=-1,o=s.length;for(e||(e=Array(o));++t<o;)e[t]=s[t];return e},j4=function(s,e){for(var t=-1,o=s==null?0:s.length,a=0,c=[];++t<o;){var d=s[t];e(d,t,s)&&(c[a++]=d)}return c},uw=function(){return[]};var $4=Object.prototype.propertyIsEnumerable,hw=Object.getOwnPropertySymbols;const Uf=hw?function(s){return s==null?[]:(s=Object(s),j4(hw(s),function(e){return $4.call(s,e)}))}:uw,V4=function(s,e){return Ri(s,Uf(s),e)},pw=function(s,e){for(var t=-1,o=e.length,a=s.length;++t<o;)s[a+t]=e[t];return s},fw=Object.getOwnPropertySymbols?function(s){for(var e=[];s;)pw(e,Uf(s)),s=rr(s);return e}:uw,H4=function(s,e){return Ri(s,fw(s),e)},mw=function(s,e,t){var o=e(s);return It(s)?o:pw(o,t(s))},qf=function(s){return mw(s,bo,Uf)},U4=function(s){return mw(s,bi,fw)},Gf=mo(Ne,"DataView"),Wf=mo(Ne,"Promise"),Kf=mo(Ne,"Set"),Yf=mo(Ne,"WeakMap");var gw="[object Map]",bw="[object Promise]",kw="[object Set]",_w="[object WeakMap]",ww="[object DataView]",q4=fi(Gf),G4=fi(Un),W4=fi(Wf),K4=fi(Kf),Y4=fi(Yf),Vs=Dn;(Gf&&Vs(new Gf(new ArrayBuffer(1)))!=ww||Un&&Vs(new Un)!=gw||Wf&&Vs(Wf.resolve())!=bw||Kf&&Vs(new Kf)!=kw||Yf&&Vs(new Yf)!=_w)&&(Vs=function(s){var e=Dn(s),t=e=="[object Object]"?s.constructor:void 0,o=t?fi(t):"";if(o)switch(o){case q4:return ww;case G4:return gw;case W4:return bw;case K4:return kw;case Y4:return _w}return e});const Hc=Vs;var Q4=Object.prototype.hasOwnProperty;const Z4=function(s){var e=s.length,t=new s.constructor(e);return e&&typeof s[0]=="string"&&Q4.call(s,"index")&&(t.index=s.index,t.input=s.input),t},Su=Ne.Uint8Array,Qf=function(s){var e=new s.constructor(s.byteLength);return new Su(e).set(new Su(s)),e},J4=function(s,e){var t=e?Qf(s.buffer):s.buffer;return new s.constructor(t,s.byteOffset,s.byteLength)};var X4=/\w*$/;const eO=function(s){var e=new s.constructor(s.source,X4.exec(s));return e.lastIndex=s.lastIndex,e};var vw=He?He.prototype:void 0,Aw=vw?vw.valueOf:void 0;const tO=function(s){return Aw?Object(Aw.call(s)):{}},Cw=function(s,e){var t=e?Qf(s.buffer):s.buffer;return new s.constructor(t,s.byteOffset,s.length)},nO=function(s,e,t){var o=s.constructor;switch(e){case"[object ArrayBuffer]":return Qf(s);case"[object Boolean]":case"[object Date]":return new o(+s);case"[object DataView]":return J4(s,t);case"[object Float32Array]":case"[object Float64Array]":case"[object Int8Array]":case"[object Int16Array]":case"[object Int32Array]":case"[object Uint8Array]":case"[object Uint8ClampedArray]":case"[object Uint16Array]":case"[object Uint32Array]":return Cw(s,t);case"[object Map]":case"[object Set]":return new o;case"[object Number]":case"[object String]":return new o(s);case"[object RegExp]":return eO(s);case"[object Symbol]":return tO(s)}};var yw=Object.create;const oO=function(){function s(){}return function(e){if(!Ve(e))return{};if(yw)return yw(e);s.prototype=e;var t=new s;return s.prototype=void 0,t}}(),xw=function(s){return typeof s.constructor!="function"||kn(s)?{}:oO(rr(s))},iO=function(s){return Bt(s)&&Hc(s)=="[object Map]"};var Ew=et&&et.isMap;const rO=Ew?O(Ew):iO,sO=function(s){return Bt(s)&&Hc(s)=="[object Set]"};var Sw=et&&et.isSet;const aO=Sw?O(Sw):sO;var Tw="[object Arguments]",Dw="[object Function]",Iw="[object Object]",Kt={};Kt[Tw]=Kt["[object Array]"]=Kt["[object ArrayBuffer]"]=Kt["[object DataView]"]=Kt["[object Boolean]"]=Kt["[object Date]"]=Kt["[object Float32Array]"]=Kt["[object Float64Array]"]=Kt["[object Int8Array]"]=Kt["[object Int16Array]"]=Kt["[object Int32Array]"]=Kt["[object Map]"]=Kt["[object Number]"]=Kt[Iw]=Kt["[object RegExp]"]=Kt["[object Set]"]=Kt["[object String]"]=Kt["[object Symbol]"]=Kt["[object Uint8Array]"]=Kt["[object Uint8ClampedArray]"]=Kt["[object Uint16Array]"]=Kt["[object Uint32Array]"]=!0,Kt["[object Error]"]=Kt[Dw]=Kt["[object WeakMap]"]=!1;const Zf=function s(e,t,o,a,c,d){var h,g=1&t,k=2&t,w=4&t;if(o&&(h=c?o(e,a,c,d):o(e)),h!==void 0)return h;if(!Ve(e))return e;var y=It(e);if(y){if(h=Z4(e),!g)return dw(e,h)}else{var S=Hc(e),D=S==Dw||S=="[object GeneratorFunction]";if(zi(e))return cw(e,g);if(S==Iw||S==Tw||D&&!c){if(h=k||D?{}:xw(e),!g)return k?H4(e,z4(h,e)):V4(e,gi(h,e))}else{if(!Kt[S])return c?e:{};h=nO(e,S,g)}}d||(d=new Gn);var M=d.get(e);if(M)return M;d.set(e,h),aO(e)?e.forEach(function(j){h.add(s(j,t,o,j,e,d))}):rO(e)&&e.forEach(function(j,G){h.set(G,s(j,t,o,G,e,d))});var R=y?void 0:(w?k?U4:qf:k?bi:bo)(e);return jc(R||e,function(j,G){R&&(j=e[G=j]),zs(h,G,s(j,t,o,G,e,d))}),h},Jf=function(s,e){return Zf(s,5,e=typeof e=="function"?e:void 0)},Hs=function(s){return Bt(s)&&s.nodeType===1&&!vn(s)};class Mw{constructor(e,t){this._config={},t&&this.define(Ow(t)),e&&this._setObjectToTarget(this._config,e)}set(e,t){this._setToTarget(this._config,e,t)}define(e,t){this._setToTarget(this._config,e,t,!0)}get(e){return this._getFromSource(this._config,e)}*names(){for(const e of Object.keys(this._config))yield e}_setToTarget(e,t,o,a=!1){if(vn(t))return void this._setObjectToTarget(e,t,a);const c=t.split(".");t=c.pop();for(const d of c)vn(e[d])||(e[d]={}),e=e[d];if(vn(o))return vn(e[t])||(e[t]={}),e=e[t],void this._setObjectToTarget(e,o,a);a&&e[t]!==void 0||(e[t]=o)}_getFromSource(e,t){const o=t.split(".");t=o.pop();for(const a of o){if(!vn(e[a])){e=null;break}e=e[a]}return e?Ow(e[t]):void 0}_setObjectToTarget(e,t,o){Object.keys(t).forEach(a=>{this._setToTarget(e,a,t[a],o)})}}function Ow(s){return Jf(s,lO)}function lO(s){return Hs(s)||typeof s=="function"?s:void 0}function qr(s){if(s){if(s.defaultView)return s instanceof s.defaultView.Document;if(s.ownerDocument&&s.ownerDocument.defaultView)return s instanceof s.ownerDocument.defaultView.Node}return!1}function Tu(s){const e=Object.prototype.toString.apply(s);return e=="[object Window]"||e=="[object global]"}const Bw=Qo(ie());function Qo(s){return s?class extends s{listenTo(e,t,o,a={}){if(qr(e)||Tu(e)){const c={capture:!!a.useCapture,passive:!!a.usePassive},d=this._getProxyEmitter(e,c)||new cO(e,c);this.listenTo(d,t,o,a)}else super.listenTo(e,t,o,a)}stopListening(e,t,o){if(qr(e)||Tu(e)){const a=this._getAllProxyEmitters(e);for(const c of a)this.stopListening(c,t,o)}else super.stopListening(e,t,o)}_getProxyEmitter(e,t){return function(o,a){const c=o[re];return c&&c[a]?c[a].emitter:null}(this,Pw(e,t))}_getAllProxyEmitters(e){return[{capture:!1,passive:!1},{capture:!1,passive:!0},{capture:!0,passive:!1},{capture:!0,passive:!0}].map(t=>this._getProxyEmitter(e,t)).filter(t=>!!t)}}:Bw}["_getProxyEmitter","_getAllProxyEmitters","on","once","off","listenTo","stopListening","fire","delegate","stopDelegating","_addEventListener","_removeEventListener"].forEach(s=>{Qo[s]=Bw.prototype[s]});class cO extends ie(){constructor(e,t){super(),Le(this,Pw(e,t)),this._domNode=e,this._options=t}attach(e){if(this._domListeners&&this._domListeners[e])return;const t=this._createDomListener(e);this._domNode.addEventListener(e,t,this._options),this._domListeners||(this._domListeners={}),this._domListeners[e]=t}detach(e){let t;!this._domListeners[e]||(t=this._events[e])&&t.callbacks.length||this._domListeners[e].removeListener()}_addEventListener(e,t,o){this.attach(e),ie().prototype._addEventListener.call(this,e,t,o)}_removeEventListener(e,t){ie().prototype._removeEventListener.call(this,e,t),this.detach(e)}_createDomListener(e){const t=o=>{this.fire(e,o)};return t.removeListener=()=>{this._domNode.removeEventListener(e,t,this._options),delete this._domListeners[e]},t}}function Pw(s,e){let t=function(o){return o["data-ck-expando"]||(o["data-ck-expando"]=B())}(s);for(const o of Object.keys(e).sort())e[o]&&(t+="-"+o);return t}function Nw(s){const e=s.ownerDocument.defaultView.getComputedStyle(s);return{top:parseInt(e.borderTopWidth,10),right:parseInt(e.borderRightWidth,10),bottom:parseInt(e.borderBottomWidth,10),left:parseInt(e.borderLeftWidth,10)}}function hn(s){return Object.prototype.toString.call(s)=="[object Text]"}function Du(s){return Object.prototype.toString.apply(s)=="[object Range]"}function Lw(s){return s&&s.parentNode?s.offsetParent===b.document.body?null:s.offsetParent:null}const Rw=["top","right","bottom","left","width","height"];class ft{constructor(e){const t=Du(e);if(Object.defineProperty(this,"_source",{value:e._source||e,writable:!0,enumerable:!1}),Xf(e)||t)if(t){const o=ft.getDomRangeRects(e);Iu(this,ft.getBoundingRect(o))}else Iu(this,e.getBoundingClientRect());else if(Tu(e)){const{innerWidth:o,innerHeight:a}=e;Iu(this,{top:0,right:o,bottom:a,left:0,width:o,height:a})}else Iu(this,e)}clone(){return new ft(this)}moveTo(e,t){return this.top=t,this.right=e+this.width,this.bottom=t+this.height,this.left=e,this}moveBy(e,t){return this.top+=t,this.right+=e,this.left+=e,this.bottom+=t,this}getIntersection(e){const t={top:Math.max(this.top,e.top),right:Math.min(this.right,e.right),bottom:Math.min(this.bottom,e.bottom),left:Math.max(this.left,e.left),width:0,height:0};if(t.width=t.right-t.left,t.height=t.bottom-t.top,t.width<0||t.height<0)return null;{const o=new ft(t);return o._source=this._source,o}}getIntersectionArea(e){const t=this.getIntersection(e);return t?t.getArea():0}getArea(){return this.width*this.height}getVisible(){const e=this._source;let t=this.clone();if(Fw(e))return t;let o,a=e,c=e.parentNode||e.commonAncestorContainer;for(;c&&!Fw(c);){const h=((d=c)instanceof HTMLElement?d.ownerDocument.defaultView.getComputedStyle(d).overflow:"visible")==="visible";a instanceof HTMLElement&&zw(a)==="absolute"&&(o=a);const g=zw(c);if(h||o&&(g==="relative"&&h||g!=="relative")){a=c,c=c.parentNode;continue}const k=new ft(c),w=t.getIntersection(k);if(!w)return null;w.getArea()<t.getArea()&&(t=w),a=c,c=c.parentNode}var d;return t}isEqual(e){for(const t of Rw)if(this[t]!==e[t])return!1;return!0}contains(e){const t=this.getIntersection(e);return!(!t||!t.isEqual(e))}toAbsoluteRect(){const{scrollX:e,scrollY:t}=b.window,o=this.clone().moveBy(e,t);if(Xf(o._source)){const a=Lw(o._source);a&&function(c,d){const h=new ft(d),g=Nw(d);let k=0,w=0;k-=h.left,w-=h.top,k+=d.scrollLeft,w+=d.scrollTop,k-=g.left,w-=g.top,c.moveBy(k,w)}(o,a)}return o}excludeScrollbarsAndBorders(){const e=this._source;let t,o,a;if(Tu(e))t=e.innerWidth-e.document.documentElement.clientWidth,o=e.innerHeight-e.document.documentElement.clientHeight,a=e.getComputedStyle(e.document.documentElement).direction;else{const c=Nw(e);t=e.offsetWidth-e.clientWidth-c.left-c.right,o=e.offsetHeight-e.clientHeight-c.top-c.bottom,a=e.ownerDocument.defaultView.getComputedStyle(e).direction,this.left+=c.left,this.top+=c.top,this.right-=c.right,this.bottom-=c.bottom,this.width=this.right-this.left,this.height=this.bottom-this.top}return this.width-=t,a==="ltr"?this.right-=t:this.left+=t,this.height-=o,this.bottom-=o,this}static getDomRangeRects(e){const t=[],o=Array.from(e.getClientRects());if(o.length)for(const a of o)t.push(new ft(a));else{let a=e.startContainer;hn(a)&&(a=a.parentNode);const c=new ft(a.getBoundingClientRect());c.right=c.left,c.width=0,t.push(c)}return t}static getBoundingRect(e){const t={left:Number.POSITIVE_INFINITY,top:Number.POSITIVE_INFINITY,right:Number.NEGATIVE_INFINITY,bottom:Number.NEGATIVE_INFINITY,width:0,height:0};let o=0;for(const a of e)o++,t.left=Math.min(t.left,a.left),t.top=Math.min(t.top,a.top),t.right=Math.max(t.right,a.right),t.bottom=Math.max(t.bottom,a.bottom);return o==0?null:(t.width=t.right-t.left,t.height=t.bottom-t.top,new ft(t))}}function Iu(s,e){for(const t of Rw)s[t]=e[t]}function Fw(s){return!!Xf(s)&&s===s.ownerDocument.body}function Xf(s){return s!==null&&typeof s=="object"&&s.nodeType===1&&typeof s.getBoundingClientRect=="function"}function zw(s){return s instanceof HTMLElement?s.ownerDocument.defaultView.getComputedStyle(s).position:"static"}const pn=class{constructor(s,e){pn._observerInstance||pn._createObserver(),this._element=s,this._callback=e,pn._addElementCallback(s,e),pn._observerInstance.observe(s)}get element(){return this._element}destroy(){pn._deleteElementCallback(this._element,this._callback)}static _addElementCallback(s,e){pn._elementCallbacks||(pn._elementCallbacks=new Map);let t=pn._elementCallbacks.get(s);t||(t=new Set,pn._elementCallbacks.set(s,t)),t.add(e)}static _deleteElementCallback(s,e){const t=pn._getElementCallbacks(s);t&&(t.delete(e),t.size||(pn._elementCallbacks.delete(s),pn._observerInstance.unobserve(s))),pn._elementCallbacks&&!pn._elementCallbacks.size&&(pn._observerInstance=null,pn._elementCallbacks=null)}static _getElementCallbacks(s){return pn._elementCallbacks?pn._elementCallbacks.get(s):null}static _createObserver(){pn._observerInstance=new b.window.ResizeObserver(s=>{for(const e of s){const t=pn._getElementCallbacks(e.target);if(t)for(const o of t)o(e)}})}};let Uc=pn;function jw(s,e){s instanceof HTMLTextAreaElement&&(s.value=e),s.innerHTML=e}function Ya(s){return e=>e+s}function qc(s){let e=0;for(;s.previousSibling;)s=s.previousSibling,e++;return e}function $w(s,e,t){s.insertBefore(t,s.childNodes[e]||null)}function Gc(s){return s&&s.nodeType===Node.COMMENT_NODE}function Us(s){return!!(s&&s.getClientRects&&s.getClientRects().length)}Uc._observerInstance=null,Uc._elementCallbacks=null;var Vw=Math.pow;function Mu({element:s,target:e,positions:t,limiter:o,fitInViewport:a,viewportOffsetConfig:c}){tn(e)&&(e=e()),tn(o)&&(o=o());const d=Lw(s),h=function(S){S=Object.assign({top:0,bottom:0,left:0,right:0},S);const D=new ft(b.window);return D.top+=S.top,D.height-=S.top,D.bottom-=S.bottom,D.height-=S.bottom,D}(c),g=new ft(s),k=Hw(e,h);let w;if(!k||!h.getIntersection(k))return null;const y={targetRect:k,elementRect:g,positionedElementAncestor:d,viewportRect:h};if(o||a){if(o){const S=Hw(o,h);S&&(y.limiterRect=S)}w=function(S,D){const{elementRect:M}=D,R=M.getArea(),j=S.map(se=>new Uw(se,D)).filter(se=>!!se.name);let G=0,Z=null;for(const se of j){const{limiterIntersectionArea:me,viewportIntersectionArea:Be}=se;if(me===R)return se;const Qe=Vw(Be,2)+Vw(me,2);Qe>G&&(G=Qe,Z=se)}return Z}(t,y)}else w=new Uw(t[0],y);return w}function Hw(s,e){const t=new ft(s).getVisible();return t?t.getIntersection(e):null}class Uw{constructor(e,t){const o=e(t.targetRect,t.elementRect,t.viewportRect,t.limiterRect);if(!o)return;const{left:a,top:c,name:d,config:h}=o;this.name=d,this.config=h,this._positioningFunctionCoordinates={left:a,top:c},this._options=t}get left(){return this._absoluteRect.left}get top(){return this._absoluteRect.top}get limiterIntersectionArea(){const e=this._options.limiterRect;return e?e.getIntersectionArea(this._rect):0}get viewportIntersectionArea(){return this._options.viewportRect.getIntersectionArea(this._rect)}get _rect(){return this._cachedRect||(this._cachedRect=this._options.elementRect.clone().moveTo(this._positioningFunctionCoordinates.left,this._positioningFunctionCoordinates.top)),this._cachedRect}get _absoluteRect(){return this._cachedAbsoluteRect||(this._cachedAbsoluteRect=this._rect.toAbsoluteRect()),this._cachedAbsoluteRect}}function qw(s){const e=s.parentNode;e&&e.removeChild(s)}function dO({window:s,rect:e,alignToTop:t,forceScroll:o,viewportOffset:a}){const c=e.clone().moveBy(0,a.bottom),d=e.clone().moveBy(0,-a.top),h=new ft(s).excludeScrollbarsAndBorders(),g=t&&o,k=[d,c].every(M=>h.contains(M));let{scrollX:w,scrollY:y}=s;const S=w,D=y;g?y-=h.top-e.top+a.top:k||(Ww(d,h)?y-=h.top-e.top+a.top:Gw(c,h)&&(y+=t?e.top-h.top-a.top:e.bottom-h.bottom+a.bottom)),k||(Kw(e,h)?w-=h.left-e.left+a.left:Yw(e,h)&&(w+=e.right-h.right+a.right)),w==S&&y===D||s.scrollTo(w,y)}function uO({parent:s,getRect:e,alignToTop:t,forceScroll:o,ancestorOffset:a=0,limiterElement:c}){const d=em(s),h=t&&o;let g,k,w;const y=c||d.document.body;for(;s!=y;)k=e(),g=new ft(s).excludeScrollbarsAndBorders(),w=g.contains(k),h?s.scrollTop-=g.top-k.top+a:w||(Ww(k,g)?s.scrollTop-=g.top-k.top+a:Gw(k,g)&&(s.scrollTop+=t?k.top-g.top-a:k.bottom-g.bottom+a)),w||(Kw(k,g)?s.scrollLeft-=g.left-k.left+a:Yw(k,g)&&(s.scrollLeft+=k.right-g.right+a)),s=s.parentNode}function Gw(s,e){return s.bottom>e.bottom}function Ww(s,e){return s.top<e.top}function Kw(s,e){return s.left<e.left}function Yw(s,e){return s.right>e.right}function em(s){return Du(s)?s.startContainer.ownerDocument.defaultView:s.ownerDocument.defaultView}function hO(s){if(Du(s)){let e=s.commonAncestorContainer;return hn(e)&&(e=e.parentNode),e}return s.parentNode}function Qw(s,e){const t=em(s),o=new ft(s);if(t===e)return o;{let a=t;for(;a!=e;){const c=a.frameElement,d=new ft(c).excludeScrollbarsAndBorders();o.moveBy(d.left,d.top),a=a.parent}}return o}const pO={ctrl:"⌃",cmd:"⌘",alt:"⌥",shift:"⇧"},fO={ctrl:"Ctrl+",alt:"Alt+",shift:"Shift+"},Zw={37:"←",38:"↑",39:"→",40:"↓",9:"⇥",33:"Page Up",34:"Page Down"},wt=function(){const s={pageup:33,pagedown:34,arrowleft:37,arrowup:38,arrowright:39,arrowdown:40,backspace:8,delete:46,enter:13,space:32,esc:27,tab:9,ctrl:1114112,shift:2228224,alt:4456448,cmd:8912896};for(let e=65;e<=90;e++)s[String.fromCharCode(e).toLowerCase()]=e;for(let e=48;e<=57;e++)s[e-48]=e;for(let e=112;e<=123;e++)s["f"+(e-111)]=e;return Object.assign(s,{"'":222,",":108,"-":109,".":110,"/":111,";":186,"=":187,"[":219,"\\":220,"]":221,"`":223}),s}(),mO=Object.fromEntries(Object.entries(wt).map(([s,e])=>{let t;return t=e in Zw?Zw[e]:s.charAt(0).toUpperCase()+s.slice(1),[e,t]}));function Qa(s){let e;if(typeof s=="string"){if(e=wt[s.toLowerCase()],!e)throw new P("keyboard-unknown-key",null,{key:s})}else e=s.keyCode+(s.altKey?wt.alt:0)+(s.ctrlKey?wt.ctrl:0)+(s.shiftKey?wt.shift:0)+(s.metaKey?wt.cmd:0);return e}function Wc(s){return typeof s=="string"&&(s=function(e){return e.split("+").map(t=>t.trim())}(s)),s.map(e=>typeof e=="string"?function(t){if(t.endsWith("!"))return Qa(t.slice(0,-1));const o=Qa(t);return(v.isMac||v.isiOS)&&o==wt.ctrl?wt.cmd:o}(e):e).reduce((e,t)=>t+e,0)}function Ou(s){let e=Wc(s);return Object.entries(v.isMac||v.isiOS?pO:fO).reduce((t,[o,a])=>(e&wt[o]&&(e&=~wt[o],t+=a),t),"")+(e?mO[e]:"")}function tm(s,e){const t=e==="ltr";switch(s){case wt.arrowleft:return t?"left":"right";case wt.arrowright:return t?"right":"left";case wt.arrowup:return"up";case wt.arrowdown:return"down"}}function qt(s){return Array.isArray(s)?s:[s]}const nm=function(s,e,t){(t!==void 0&&!Ni(s[e],t)||t===void 0&&!(e in s))&&$r(s,e,t)},Jw=function(s){return function(e,t,o){for(var a=-1,c=Object(e),d=o(e),h=d.length;h--;){var g=d[++a];if(t(c[g],g,c)===!1)break}return e}}(),gO=function(s){return Bt(s)&&an(s)},Xw=function(s,e){if((e!=="constructor"||typeof s[e]!="function")&&e!="__proto__")return s[e]},bO=function(s){return Ri(s,bi(s))},kO=function(s,e,t,o,a,c,d){var h=Xw(s,t),g=Xw(e,t),k=d.get(g);if(k)nm(s,t,k);else{var w=void 0,y=w===void 0;if(y){var S=It(g),D=!S&&zi(g),M=!S&&!D&&gt(g);w=g,S||D||M?It(h)?w=h:gO(h)?w=dw(h):D?(y=!1,w=cw(g,!0)):M?(y=!1,w=Cw(g,!0)):w=[]:vn(g)||Fi(g)?(w=h,Fi(h)?w=bO(h):Ve(h)&&!tn(h)||(w=xw(g))):y=!1}y&&(d.set(g,w),a(w,g,o,c,d),d.delete(g)),nm(s,t,w)}},_O=function s(e,t,o,a,c){e!==t&&Jw(t,function(d,h){if(c||(c=new Gn),Ve(d))kO(e,t,h,o,s,a,c);else{var g=void 0;g===void 0&&(g=d),nm(e,h,g)}},bi)},Gr=function(s){return s},wO=function(s,e,t){switch(t.length){case 0:return s.call(e);case 1:return s.call(e,t[0]);case 2:return s.call(e,t[0],t[1]);case 3:return s.call(e,t[0],t[1],t[2])}return s.apply(e,t)};var ev=Math.max;const vO=function(s,e,t){return e=ev(e===void 0?s.length-1:e,0),function(){for(var o=arguments,a=-1,c=ev(o.length-e,0),d=Array(c);++a<c;)d[a]=o[e+a];a=-1;for(var h=Array(e+1);++a<e;)h[a]=o[a];return h[e]=t(d),wO(s,this,h)}},AO=function(s){return function(){return s}},CO=oo?function(s,e){return oo(s,"toString",{configurable:!0,enumerable:!1,value:AO(e),writable:!0})}:Gr;var yO=Date.now;const xO=function(s){var e=0,t=0;return function(){var o=yO(),a=16-(o-t);if(t=o,a>0){if(++e>=800)return arguments[0]}else e=0;return s.apply(void 0,arguments)}}(CO),EO=function(s,e){return xO(vO(s,e,Gr),s+"")},SO=function(s,e,t){if(!Ve(t))return!1;var o=typeof e;return!!(o=="number"?an(t)&&ar(e,t.length):o=="string"&&e in t)&&Ni(t[e],s)},tv=function(s){return EO(function(e,t){var o=-1,a=t.length,c=a>1?t[a-1]:void 0,d=a>2?t[2]:void 0;for(c=s.length>3&&typeof c=="function"?(a--,c):void 0,d&&SO(t[0],t[1],d)&&(c=a<3?void 0:c,a=1),e=Object(e);++o<a;){var h=t[o];h&&s(e,h,o,c)}return e})},om=tv(function(s,e,t){_O(s,e,t)});function TO(s,e,t=1,o){if(typeof t!="number")throw new P("translation-service-quantity-not-a-number",null,{quantity:t});const a=o||b.window.CKEDITOR_TRANSLATIONS,c=function(w){return Object.keys(w).length}(a);c===1&&(s=Object.keys(a)[0]);const d=e.id||e.string;if(c===0||!function(w,y,S){return!!S[w]&&!!S[w].dictionary[y]}(s,d,a))return t!==1?e.plural:e.string;const h=a[s].dictionary,g=a[s].getPluralForm||(w=>w===1?0:1),k=h[d];return typeof k=="string"?k:k[Number(g(t))]}b.window.CKEDITOR_TRANSLATIONS||(b.window.CKEDITOR_TRANSLATIONS={});const DO=["ar","ara","dv","div","fa","per","fas","he","heb","ku","kur","ug","uig"];function nv(s){return DO.includes(s)?"rtl":"ltr"}class IO{constructor({uiLanguage:e="en",contentLanguage:t,translations:o}={}){this.uiLanguage=e,this.contentLanguage=t||this.uiLanguage,this.uiLanguageDirection=nv(this.uiLanguage),this.contentLanguageDirection=nv(this.contentLanguage),this.translations=function(a){return Array.isArray(a)?a.reduce((c,d)=>om(c,d)):a}(o),this.t=(a,c)=>this._t(a,c)}get language(){return console.warn("locale-deprecated-language-property: The Locale#language property has been deprecated and will be removed in the near future. Please use #uiLanguage and #contentLanguage properties instead."),this.uiLanguage}_t(e,t=[]){t=qt(t),typeof e=="string"&&(e={string:e});const o=e.plural?t[0]:1;return function(a,c){return a.replace(/%(\d+)/g,(d,h)=>h<c.length?c[h]:d)}(TO(this.uiLanguage,e,o,this.translations),t)}}class ki extends ie(){constructor(e={},t={}){super();const o=he(e);if(o||(t=e),this._items=[],this._itemMap=new Map,this._idProperty=t.idProperty||"id",this._bindToExternalToInternalMap=new WeakMap,this._bindToInternalToExternalMap=new WeakMap,this._skippedIndexesFromExternal=[],o)for(const a of e)this._items.push(a),this._itemMap.set(this._getItemIdBeforeAdding(a),a)}get length(){return this._items.length}get first(){return this._items[0]||null}get last(){return this._items[this.length-1]||null}add(e,t){return this.addMany([e],t)}addMany(e,t){if(t===void 0)t=this._items.length;else if(t>this._items.length||t<0)throw new P("collection-add-item-invalid-index",this);let o=0;for(const a of e){const c=this._getItemIdBeforeAdding(a),d=t+o;this._items.splice(d,0,a),this._itemMap.set(c,a),this.fire("add",a,d),o++}return this.fire("change",{added:e,removed:[],index:t}),this}get(e){let t;if(typeof e=="string")t=this._itemMap.get(e);else{if(typeof e!="number")throw new P("collection-get-invalid-arg",this);t=this._items[e]}return t||null}has(e){if(typeof e=="string")return this._itemMap.has(e);{const t=e[this._idProperty];return t&&this._itemMap.has(t)}}getIndex(e){let t;return t=typeof e=="string"?this._itemMap.get(e):e,t?this._items.indexOf(t):-1}remove(e){const[t,o]=this._remove(e);return this.fire("change",{added:[],removed:[t],index:o}),t}map(e,t){return this._items.map(e,t)}forEach(e,t){this._items.forEach(e,t)}find(e,t){return this._items.find(e,t)}filter(e,t){return this._items.filter(e,t)}clear(){this._bindToCollection&&(this.stopListening(this._bindToCollection),this._bindToCollection=null);const e=Array.from(this._items);for(;this.length;)this._remove(0);this.fire("change",{added:[],removed:e,index:0})}bindTo(e){if(this._bindToCollection)throw new P("collection-bind-to-rebind",this);return this._bindToCollection=e,{as:t=>{this._setUpBindToBinding(o=>new t(o))},using:t=>{typeof t=="function"?this._setUpBindToBinding(t):this._setUpBindToBinding(o=>o[t])}}}_setUpBindToBinding(e){const t=this._bindToCollection,o=(a,c,d)=>{const h=t._bindToCollection==this,g=t._bindToInternalToExternalMap.get(c);if(h&&g)this._bindToExternalToInternalMap.set(c,g),this._bindToInternalToExternalMap.set(g,c);else{const k=e(c);if(!k)return void this._skippedIndexesFromExternal.push(d);let w=d;for(const y of this._skippedIndexesFromExternal)d>y&&w--;for(const y of t._skippedIndexesFromExternal)w>=y&&w++;this._bindToExternalToInternalMap.set(c,k),this._bindToInternalToExternalMap.set(k,c),this.add(k,w);for(let y=0;y<t._skippedIndexesFromExternal.length;y++)w<=t._skippedIndexesFromExternal[y]&&t._skippedIndexesFromExternal[y]++}};for(const a of t)o(0,a,t.getIndex(a));this.listenTo(t,"add",o),this.listenTo(t,"remove",(a,c,d)=>{const h=this._bindToExternalToInternalMap.get(c);h&&this.remove(h),this._skippedIndexesFromExternal=this._skippedIndexesFromExternal.reduce((g,k)=>(d<k&&g.push(k-1),d>k&&g.push(k),g),[])})}_getItemIdBeforeAdding(e){const t=this._idProperty;let o;if(t in e){if(o=e[t],typeof o!="string")throw new P("collection-add-invalid-id",this);if(this.get(o))throw new P("collection-add-item-already-exists",this)}else e[t]=o=B();return o}_remove(e){let t,o,a,c=!1;const d=this._idProperty;if(typeof e=="string"?(o=e,a=this._itemMap.get(o),c=!a,a&&(t=this._items.indexOf(a))):typeof e=="number"?(t=e,a=this._items[t],c=!a,a&&(o=a[d])):(a=e,o=a[d],t=this._items.indexOf(a),c=t==-1||!this._itemMap.get(o)),c)throw new P("collection-remove-404",this);this._items.splice(t,1),this._itemMap.delete(o);const h=this._bindToInternalToExternalMap.get(a);return this._bindToInternalToExternalMap.delete(a),this._bindToExternalToInternalMap.delete(h),this.fire("remove",a,t),[a,t]}[Symbol.iterator](){return this._items[Symbol.iterator]()}}function On(s){const e=s.next();return e.done?null:e.value}class Bn extends Qo(K()){constructor(){super(),this._elements=new Set,this._nextEventLoopTimeout=null,this.set("isFocused",!1),this.set("focusedElement",null)}add(e){if(this._elements.has(e))throw new P("focustracker-add-element-already-exist",this);this.listenTo(e,"focus",()=>this._focus(e),{useCapture:!0}),this.listenTo(e,"blur",()=>this._blur(),{useCapture:!0}),this._elements.add(e)}remove(e){e===this.focusedElement&&this._blur(),this._elements.has(e)&&(this.stopListening(e),this._elements.delete(e))}destroy(){this.stopListening()}_focus(e){clearTimeout(this._nextEventLoopTimeout),this.focusedElement=e,this.isFocused=!0}_blur(){clearTimeout(this._nextEventLoopTimeout),this._nextEventLoopTimeout=setTimeout(()=>{this.focusedElement=null,this.isFocused=!1},0)}}class io{constructor(){this._listener=new(Qo())}listenTo(e){this._listener.listenTo(e,"keydown",(t,o)=>{this._listener.fire("_keydown:"+Qa(o),o)})}set(e,t,o={}){const a=Wc(e),c=o.priority;this._listener.listenTo(this._listener,"_keydown:"+a,(d,h)=>{t(h,()=>{h.preventDefault(),h.stopPropagation(),d.stop()}),d.return=!0},{priority:c})}press(e){return!!this._listener.fire("_keydown:"+Qa(e),e)}stopListening(e){this._listener.stopListening(e)}destroy(){this.stopListening()}}function ji(s){return he(s)?new Map(s):function(e){const t=new Map;for(const o in e)t.set(o,e[o]);return t}(s)}function im(s,e){let t;function o(...a){o.cancel(),t=setTimeout(()=>s(...a),e)}return o.cancel=()=>{clearTimeout(t)},o}function rm(s,e){return!!(t=s.charAt(e-1))&&t.length==1&&/[\ud800-\udbff]/.test(t)&&function(o){return!!o&&o.length==1&&/[\udc00-\udfff]/.test(o)}(s.charAt(e));var t}function sm(s,e){return!!(t=s.charAt(e))&&t.length==1&&/[\u0300-\u036f\u1ab0-\u1aff\u1dc0-\u1dff\u20d0-\u20ff\ufe20-\ufe2f]/.test(t);var t}const MO=function(){const s=[new RegExp("\\p{Emoji}[\\u{E0020}-\\u{E007E}]+\\u{E007F}","u"),new RegExp("\\p{Emoji}\\u{FE0F}?\\u{20E3}","u"),new RegExp("\\p{Emoji}\\u{FE0F}","u"),new RegExp("(?=\\p{General_Category=Other_Symbol})\\p{Emoji}\\p{Emoji_Modifier}*","u")],e=new RegExp("\\p{Regional_Indicator}{2}","u").source,t="(?:"+s.map(o=>o.source).join("|")+")";return new RegExp(`${e}|${t}(?:‍${t})*`,"ug")}();function ov(s,e){const t=String(s).matchAll(MO);return Array.from(t).some(o=>o.index<e&&e<o.index+o[0].length)}class Zo extends ki{constructor(e=[]){super(e,{idProperty:"viewUid"}),this.on("add",(t,o,a)=>{this._renderViewIntoCollectionParent(o,a)}),this.on("remove",(t,o)=>{o.element&&this._parentElement&&o.element.remove()}),this._parentElement=null}destroy(){this.map(e=>e.destroy())}setParent(e){this._parentElement=e;for(const t of this)this._renderViewIntoCollectionParent(t)}delegate(...e){if(!e.length||!e.every(t=>typeof t=="string"))throw new P("ui-viewcollection-delegate-wrong-events",this);return{to:t=>{for(const o of this)for(const a of e)o.delegate(a).to(t);this.on("add",(o,a)=>{for(const c of e)a.delegate(c).to(t)}),this.on("remove",(o,a)=>{for(const c of e)a.stopDelegating(c,t)})}}}_renderViewIntoCollectionParent(e,t){e.isRendered||e.render(),e.element&&this._parentElement&&this._parentElement.insertBefore(e.element,this._parentElement.children[t])}remove(e){return super.remove(e)}}class _i extends ie(){constructor(e){super(),Object.assign(this,av(sv(e))),this._isRendered=!1,this._revertData=null}render(){const e=this._renderNode({intoFragment:!0});return this._isRendered=!0,e}apply(e){return this._revertData={children:[],bindings:[],attributes:{}},this._renderNode({node:e,intoFragment:!1,isApplying:!0,revertData:this._revertData}),e}revert(e){if(!this._revertData)throw new P("ui-template-revert-not-applied",[this,e]);this._revertTemplateFromNode(e,this._revertData)}*getViews(){yield*function*e(t){if(t.children)for(const o of t.children)Pu(o)?yield o:am(o)&&(yield*e(o))}(this)}static bind(e,t){return{to:(o,a)=>new OO({eventNameOrFunction:o,attribute:o,observable:e,emitter:t,callback:a}),if:(o,a,c)=>new iv({observable:e,emitter:t,attribute:o,valueIfTrue:a,callback:c})}}static extend(e,t){if(e._isRendered)throw new P("template-extend-render",[this,e]);uv(e,av(sv(t)))}_renderNode(e){let t;if(t=e.node?this.tag&&this.text:this.tag?this.text:!this.text,t)throw new P("ui-template-wrong-syntax",this);return this.text?this._renderText(e):this._renderElement(e)}_renderElement(e){let t=e.node;return t||(t=e.node=document.createElementNS(this.ns||"http://www.w3.org/1999/xhtml",this.tag)),this._renderAttributes(e),this._renderElementChildren(e),this._setUpListeners(e),t}_renderText(e){let t=e.node;return t?e.revertData.text=t.textContent:t=e.node=document.createTextNode(""),Bu(this.text)?this._bindToObservable({schema:this.text,updater:BO(t),data:e}):t.textContent=this.text.join(""),t}_renderAttributes(e){if(!this.attributes)return;const t=e.node,o=e.revertData;for(const a in this.attributes){const c=t.getAttribute(a),d=this.attributes[a];o&&(o.attributes[a]=c);const h=hv(d)?d[0].ns:null;if(Bu(d)){const g=hv(d)?d[0].value:d;o&&pv(a)&&g.unshift(c),this._bindToObservable({schema:g,updater:PO(t,a,h),data:e})}else if(a=="style"&&typeof d[0]!="string")this._renderStyleAttribute(d[0],e);else{o&&c&&pv(a)&&d.unshift(c);const g=d.map(k=>k&&k.value||k).reduce((k,w)=>k.concat(w),[]).reduce(cv,"");Za(g)||t.setAttributeNS(h,a,g)}}}_renderStyleAttribute(e,t){const o=t.node;for(const a in e){const c=e[a];Bu(c)?this._bindToObservable({schema:[c],updater:NO(o,a),data:t}):o.style[a]=c}}_renderElementChildren(e){const t=e.node,o=e.intoFragment?document.createDocumentFragment():t,a=e.isApplying;let c=0;for(const d of this.children)if(lm(d)){if(!a){d.setParent(t);for(const h of d)o.appendChild(h.element)}}else if(Pu(d))a||(d.isRendered||d.render(),o.appendChild(d.element));else if(qr(d))o.appendChild(d);else if(a){const h={children:[],bindings:[],attributes:{}};e.revertData.children.push(h),d._renderNode({intoFragment:!1,node:o.childNodes[c++],isApplying:!0,revertData:h})}else o.appendChild(d.render());e.intoFragment&&t.appendChild(o)}_setUpListeners(e){if(this.eventListeners)for(const t in this.eventListeners){const o=this.eventListeners[t].map(a=>{const[c,d]=t.split("@");return a.activateDomEventListener(c,d,e)});e.revertData&&e.revertData.bindings.push(o)}}_bindToObservable({schema:e,updater:t,data:o}){const a=o.revertData;rv(e,t,o);const c=e.filter(d=>!Za(d)).filter(d=>d.observable).map(d=>d.activateAttributeListener(e,t,o));a&&a.bindings.push(c)}_revertTemplateFromNode(e,t){for(const a of t.bindings)for(const c of a)c();if(t.text)return void(e.textContent=t.text);const o=e;for(const a in t.attributes){const c=t.attributes[a];c===null?o.removeAttribute(a):o.setAttribute(a,c)}for(let a=0;a<t.children.length;++a)this._revertTemplateFromNode(o.childNodes[a],t.children[a])}}class Kc{constructor(e){this.attribute=e.attribute,this.observable=e.observable,this.emitter=e.emitter,this.callback=e.callback}getValue(e){const t=this.observable[this.attribute];return this.callback?this.callback(t,e):t}activateAttributeListener(e,t,o){const a=()=>rv(e,t,o);return this.emitter.listenTo(this.observable,`change:${this.attribute}`,a),()=>{this.emitter.stopListening(this.observable,`change:${this.attribute}`,a)}}}class OO extends Kc{constructor(e){super(e),this.eventNameOrFunction=e.eventNameOrFunction}activateDomEventListener(e,t,o){const a=(c,d)=>{t&&!d.target.matches(t)||(typeof this.eventNameOrFunction=="function"?this.eventNameOrFunction(d):this.observable.fire(this.eventNameOrFunction,d))};return this.emitter.listenTo(o.node,e,a),()=>{this.emitter.stopListening(o.node,e,a)}}}class iv extends Kc{constructor(e){super(e),this.valueIfTrue=e.valueIfTrue}getValue(e){return!Za(super.getValue(e))&&(this.valueIfTrue||!0)}}function Bu(s){return!!s&&(s.value&&(s=s.value),Array.isArray(s)?s.some(Bu):s instanceof Kc)}function rv(s,e,{node:t}){const o=function(c,d){return c.map(h=>h instanceof Kc?h.getValue(d):h)}(s,t);let a;a=s.length==1&&s[0]instanceof iv?o[0]:o.reduce(cv,""),Za(a)?e.remove():e.set(a)}function BO(s){return{set(e){s.textContent=e},remove(){s.textContent=""}}}function PO(s,e,t){return{set(o){s.setAttributeNS(t,e,o)},remove(){s.removeAttributeNS(t,e)}}}function NO(s,e){return{set(t){s.style[e]=t},remove(){s.style[e]=null}}}function sv(s){return Jf(s,e=>{if(e&&(e instanceof Kc||am(e)||Pu(e)||lm(e)))return e})}function av(s){if(typeof s=="string"?s=function(e){return{text:[e]}}(s):s.text&&function(e){e.text=qt(e.text)}(s),s.on&&(s.eventListeners=function(e){for(const t in e)lv(e,t);return e}(s.on),delete s.on),!s.text){s.attributes&&function(t){for(const o in t)t[o].value&&(t[o].value=qt(t[o].value)),lv(t,o)}(s.attributes);const e=[];if(s.children)if(lm(s.children))e.push(s.children);else for(const t of s.children)am(t)||Pu(t)||qr(t)?e.push(t):e.push(new _i(t));s.children=e}return s}function lv(s,e){s[e]=qt(s[e])}function cv(s,e){return Za(e)?s:Za(s)?e:`${s} ${e}`}function dv(s,e){for(const t in e)s[t]?s[t].push(...e[t]):s[t]=e[t]}function uv(s,e){if(e.attributes&&(s.attributes||(s.attributes={}),dv(s.attributes,e.attributes)),e.eventListeners&&(s.eventListeners||(s.eventListeners={}),dv(s.eventListeners,e.eventListeners)),e.text&&s.text.push(...e.text),e.children&&e.children.length){if(s.children.length!=e.children.length)throw new P("ui-template-extend-children-mismatch",s);let t=0;for(const o of e.children)uv(s.children[t++],o)}}function Za(s){return!s&&s!==0}function Pu(s){return s instanceof Ge}function am(s){return s instanceof _i}function lm(s){return s instanceof Zo}function hv(s){return Ve(s[0])&&s[0].ns}function pv(s){return s=="class"||s=="style"}var LO=u(2591),Ie=u.n(LO),fv=u(7676),RO={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};Ie()(fv.A,RO),fv.A.locals;class Ge extends Qo(K()){constructor(e){super(),this.element=null,this.isRendered=!1,this.locale=e,this.t=e&&e.t,this._viewCollections=new ki,this._unboundChildren=this.createCollection(),this._viewCollections.on("add",(t,o)=>{o.locale=e,o.t=e&&e.t}),this.decorate("render")}get bindTemplate(){return this._bindTemplate?this._bindTemplate:this._bindTemplate=_i.bind(this,this)}createCollection(e){const t=new Zo(e);return this._viewCollections.add(t),t}registerChild(e){he(e)||(e=[e]);for(const t of e)this._unboundChildren.add(t)}deregisterChild(e){he(e)||(e=[e]);for(const t of e)this._unboundChildren.remove(t)}setTemplate(e){this.template=new _i(e)}extendTemplate(e){_i.extend(this.template,e)}render(){if(this.isRendered)throw new P("ui-view-render-already-rendered",this);this.template&&(this.element=this.template.render(),this.registerChild(this.template.getViews())),this.isRendered=!0}destroy(){this.stopListening(),this._viewCollections.map(e=>e.destroy()),this.template&&this.template._revertData&&this.template.revert(this.element)}}function Nu({emitter:s,activator:e,callback:t,contextElements:o}){s.listenTo(document,"mousedown",(a,c)=>{if(!e())return;const d=typeof c.composedPath=="function"?c.composedPath():[],h=typeof o=="function"?o():o;for(const g of h)if(g.contains(c.target)||d.includes(g))return;t()})}function cm(s){return class extends s{disableCssTransitions(){this._isCssTransitionsDisabled=!0}enableCssTransitions(){this._isCssTransitionsDisabled=!1}constructor(...e){super(...e),this.set("_isCssTransitionsDisabled",!1),this.initializeCssTransitionDisablerMixin()}initializeCssTransitionDisablerMixin(){this.extendTemplate({attributes:{class:[this.bindTemplate.if("_isCssTransitionsDisabled","ck-transitions-disabled")]}})}}}function Lu({view:s}){s.listenTo(s.element,"submit",(e,t)=>{t.preventDefault(),s.fire("submit")},{useCapture:!0})}function FO({keystrokeHandler:s,focusTracker:e,gridItems:t,numberOfColumns:o,uiLanguageDirection:a}){const c=typeof o=="number"?()=>o:o;function d(k){return w=>{const y=t.find(M=>M.element===e.focusedElement),S=t.getIndex(y),D=k(S,t);t.get(D).focus(),w.stopPropagation(),w.preventDefault()}}function h(k,w){return k===w-1?0:k+1}function g(k,w){return k===0?w-1:k-1}s.set("arrowright",d((k,w)=>a==="rtl"?g(k,w.length):h(k,w.length))),s.set("arrowleft",d((k,w)=>a==="rtl"?h(k,w.length):g(k,w.length))),s.set("arrowup",d((k,w)=>{let y=k-c();return y<0&&(y=k+c()*Math.floor(w.length/c()),y>w.length-1&&(y-=c())),y})),s.set("arrowdown",d((k,w)=>{let y=k+c();return y>w.length-1&&(y=k%c()),y}))}class Ce extends K(){constructor(e){super(),this._disableStack=new Set,this.editor=e,this.set("isEnabled",!0)}forceDisabled(e){this._disableStack.add(e),this._disableStack.size==1&&(this.on("set:isEnabled",mv,{priority:"highest"}),this.isEnabled=!1)}clearForceDisabled(e){this._disableStack.delete(e),this._disableStack.size==0&&(this.off("set:isEnabled",mv),this.isEnabled=!0)}destroy(){this.stopListening()}static get isContextPlugin(){return!1}}function mv(s){s.return=!1,s.stop()}class lt extends K(){constructor(e){super(),this.editor=e,this.set("value",void 0),this.set("isEnabled",!1),this._affectsData=!0,this._isEnabledBasedOnSelection=!0,this._disableStack=new Set,this.decorate("execute"),this.listenTo(this.editor.model.document,"change",()=>{this.refresh()}),this.listenTo(e,"change:isReadOnly",()=>{this.refresh()}),this.on("set:isEnabled",t=>{if(!this.affectsData)return;const o=e.model.document.selection,a=o.getFirstPosition().root.rootName!="$graveyard"&&e.model.canEditAt(o);(e.isReadOnly||this._isEnabledBasedOnSelection&&!a)&&(t.return=!1,t.stop())},{priority:"highest"}),this.on("execute",t=>{this.isEnabled||t.stop()},{priority:"high"})}get affectsData(){return this._affectsData}set affectsData(e){this._affectsData=e}refresh(){this.isEnabled=!0}forceDisabled(e){this._disableStack.add(e),this._disableStack.size==1&&(this.on("set:isEnabled",gv,{priority:"highest"}),this.isEnabled=!1)}clearForceDisabled(e){this._disableStack.delete(e),this._disableStack.size==0&&(this.off("set:isEnabled",gv),this.refresh())}execute(...e){}destroy(){this.stopListening()}}function gv(s){s.return=!1,s.stop()}class bv extends lt{constructor(){super(...arguments),this._childCommandsDefinitions=[]}refresh(){}execute(...e){const t=this._getFirstEnabledCommand();return!!t&&t.execute(e)}registerChildCommand(e,t={}){U(this._childCommandsDefinitions,{command:e,priority:t.priority||"normal"}),e.on("change:isEnabled",()=>this._checkEnabled()),this._checkEnabled()}_checkEnabled(){this.isEnabled=!!this._getFirstEnabledCommand()}_getFirstEnabledCommand(){const e=this._childCommandsDefinitions.find(({command:t})=>t.isEnabled);return e&&e.command}}class kv extends ie(){constructor(e,t=[],o=[]){super(),this._plugins=new Map,this._context=e,this._availablePlugins=new Map;for(const a of t)a.pluginName&&this._availablePlugins.set(a.pluginName,a);this._contextPlugins=new Map;for(const[a,c]of o)this._contextPlugins.set(a,c),this._contextPlugins.set(c,a),a.pluginName&&this._availablePlugins.set(a.pluginName,a)}*[Symbol.iterator](){for(const e of this._plugins)typeof e[0]=="function"&&(yield e)}get(e){const t=this._plugins.get(e);if(!t){let o=e;throw typeof e=="function"&&(o=e.pluginName||e.name),new P("plugincollection-plugin-not-loaded",this._context,{plugin:o})}return t}has(e){return this._plugins.has(e)}init(e,t=[],o=[]){const a=this,c=this._context;(function M(R,j=new Set){R.forEach(G=>{g(G)&&(j.has(G)||(j.add(G),G.pluginName&&!a._availablePlugins.has(G.pluginName)&&a._availablePlugins.set(G.pluginName,G),G.requires&&M(G.requires,j)))})})(e),S(e);const d=[...function M(R,j=new Set){return R.map(G=>g(G)?G:a._availablePlugins.get(G)).reduce((G,Z)=>j.has(Z)?G:(j.add(Z),Z.requires&&(S(Z.requires,Z),M(Z.requires,j).forEach(se=>G.add(se))),G.add(Z)),new Set)}(e.filter(M=>!w(M,t)))];(function(M,R){for(const j of R){if(typeof j!="function")throw new P("plugincollection-replace-plugin-invalid-type",null,{pluginItem:j});const G=j.pluginName;if(!G)throw new P("plugincollection-replace-plugin-missing-name",null,{pluginItem:j});if(j.requires&&j.requires.length)throw new P("plugincollection-plugin-for-replacing-cannot-have-dependencies",null,{pluginName:G});const Z=a._availablePlugins.get(G);if(!Z)throw new P("plugincollection-plugin-for-replacing-not-exist",null,{pluginName:G});const se=M.indexOf(Z);if(se===-1){if(a._contextPlugins.has(Z))return;throw new P("plugincollection-plugin-for-replacing-not-loaded",null,{pluginName:G})}if(Z.requires&&Z.requires.length)throw new P("plugincollection-replaced-plugin-cannot-have-dependencies",null,{pluginName:G});M.splice(se,1,j),a._availablePlugins.set(G,j)}})(d,o);const h=d.map(M=>{let R=a._contextPlugins.get(M);return R=R||new M(c),a._add(M,R),R});return D(h,"init").then(()=>D(h,"afterInit")).then(()=>h);function g(M){return typeof M=="function"}function k(M){return g(M)&&!!M.isContextPlugin}function w(M,R){return R.some(j=>j===M||y(M)===j||y(j)===M)}function y(M){return g(M)?M.pluginName||M.name:M}function S(M,R=null){M.map(j=>g(j)?j:a._availablePlugins.get(j)||j).forEach(j=>{(function(G,Z){if(!g(G))throw Z?new P("plugincollection-soft-required",c,{missingPlugin:G,requiredBy:y(Z)}):new P("plugincollection-plugin-not-found",c,{plugin:G})})(j,R),function(G,Z){if(k(Z)&&!k(G))throw new P("plugincollection-context-required",c,{plugin:y(G),requiredBy:y(Z)})}(j,R),function(G,Z){if(Z&&w(G,t))throw new P("plugincollection-required",c,{plugin:y(G),requiredBy:y(Z)})}(j,R)})}function D(M,R){return M.reduce((j,G)=>G[R]?a._contextPlugins.has(G)?j:j.then(G[R].bind(G)):j,Promise.resolve())}}destroy(){const e=[];for(const[,t]of this)typeof t.destroy!="function"||this._contextPlugins.has(t)||e.push(t.destroy());return Promise.all(e)}_add(e,t){this._plugins.set(e,t);const o=e.pluginName;if(o){if(this._plugins.has(o))throw new P("plugincollection-plugin-name-conflict",null,{pluginName:o,plugin1:this._plugins.get(o).constructor,plugin2:e});this._plugins.set(o,t)}}}var _v=Object.getOwnPropertySymbols,zO=Object.prototype.hasOwnProperty,jO=Object.prototype.propertyIsEnumerable;class wv{constructor(e){this._contextOwner=null;const t=e||{},{translations:o}=t,a=((h,g)=>{var k={};for(var w in h)zO.call(h,w)&&g.indexOf(w)<0&&(k[w]=h[w]);if(h!=null&&_v)for(var w of _v(h))g.indexOf(w)<0&&jO.call(h,w)&&(k[w]=h[w]);return k})(t,["translations"]);this.config=new Mw(a,this.constructor.defaultConfig);const c=this.constructor.builtinPlugins;this.config.define("plugins",c),this.plugins=new kv(this,c);const d=this.config.get("language")||{};this.locale=new IO({uiLanguage:typeof d=="string"?d:d.ui,contentLanguage:this.config.get("language.content"),translations:o}),this.t=this.locale.t,this.editors=new ki}initPlugins(){const e=this.config.get("plugins")||[],t=this.config.get("substitutePlugins")||[];for(const o of e.concat(t)){if(typeof o!="function")throw new P("context-initplugins-constructor-only",null,{Plugin:o});if(o.isContextPlugin!==!0)throw new P("context-initplugins-invalid-plugin",null,{Plugin:o})}return this.plugins.init(e,[],t)}destroy(){return Promise.all(Array.from(this.editors,e=>e.destroy())).then(()=>this.plugins.destroy())}_addEditor(e,t){if(this._contextOwner)throw new P("context-addeditor-private-context");this.editors.add(e),t&&(this._contextOwner=e)}_removeEditor(e){return this.editors.has(e)&&this.editors.remove(e),this._contextOwner===e?this.destroy():Promise.resolve()}_getEditorConfig(){const e={};for(const t of this.config.names())["plugins","removePlugins","extraPlugins"].includes(t)||(e[t]=this.config.get(t));return e}static create(e){return new Promise(t=>{const o=new this(e);t(o.initPlugins().then(()=>o))})}}class Ru extends K(){constructor(e){super(),this.context=e}destroy(){this.stopListening()}static get isContextPlugin(){return!0}}class $O extends io{constructor(e){super(),this.editor=e}set(e,t,o={}){if(typeof t=="string"){const a=t;t=(c,d)=>{this.editor.execute(a),d()}}super.set(e,t,o)}}var vv=u(4098),VO={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};Ie()(vv.A,VO),vv.A.locals;const Fu=new WeakMap;let Av=!1;function Cv({view:s,element:e,text:t,isDirectHost:o=!0,keepOnFocus:a=!1}){const c=s.document;function d(h){Fu.get(c).set(e,{text:h,isDirectHost:o,keepOnFocus:a,hostElement:o?e:null}),s.change(g=>dm(c,g))}Fu.has(c)||(Fu.set(c,new Map),c.registerPostFixer(h=>dm(c,h)),c.on("change:isComposing",()=>{s.change(h=>dm(c,h))},{priority:"high"})),e.is("editableElement")&&e.on("change:placeholder",(h,g,k)=>{d(k)}),e.placeholder?d(e.placeholder):t&&d(t),t&&function(){Av||H("enableplaceholder-deprecated-text-option"),Av=!0}()}function HO(s,e){return!e.hasClass("ck-placeholder")&&(s.addClass("ck-placeholder",e),!0)}function UO(s,e){return!!e.hasClass("ck-placeholder")&&(s.removeClass("ck-placeholder",e),!0)}function qO(s,e){if(!s.isAttached()||Array.from(s.getChildren()).some(a=>!a.is("uiElement")))return!1;const t=s.document,o=t.selection.anchor;return(!t.isComposing||!o||o.parent!==s)&&(!!e||!t.isFocused||!!o&&o.parent!==s)}function dm(s,e){const t=Fu.get(s),o=[];let a=!1;for(const[c,d]of t)d.isDirectHost&&(o.push(c),yv(e,c,d)&&(a=!0));for(const[c,d]of t){if(d.isDirectHost)continue;const h=GO(c);h&&(o.includes(h)||(d.hostElement=h,yv(e,c,d)&&(a=!0)))}return a}function yv(s,e,t){const{text:o,isDirectHost:a,hostElement:c}=t;let d=!1;return c.getAttribute("data-placeholder")!==o&&(s.setAttribute("data-placeholder",o,c),d=!0),(a||e.childCount==1)&&qO(c,t.keepOnFocus)?HO(s,c)&&(d=!0):UO(s,c)&&(d=!0),d}function GO(s){if(s.childCount){const e=s.getChild(0);if(e.is("element")&&!e.is("uiElement")&&!e.is("attributeElement"))return e}return null}class qs{is(){throw new Error("is() method is abstract")}}const xv=function(s){return Zf(s,4)};class Gs extends ie(qs){constructor(e){super(),this.document=e,this.parent=null}get index(){let e;if(!this.parent)return null;if((e=this.parent.getChildIndex(this))==-1)throw new P("view-node-not-found-in-parent",this);return e}get nextSibling(){const e=this.index;return e!==null&&this.parent.getChild(e+1)||null}get previousSibling(){const e=this.index;return e!==null&&this.parent.getChild(e-1)||null}get root(){let e=this;for(;e.parent;)e=e.parent;return e}isAttached(){return this.root.is("rootElement")}getPath(){const e=[];let t=this;for(;t.parent;)e.unshift(t.index),t=t.parent;return e}getAncestors(e={}){const t=[];let o=e.includeSelf?this:this.parent;for(;o;)t[e.parentFirst?"push":"unshift"](o),o=o.parent;return t}getCommonAncestor(e,t={}){const o=this.getAncestors(t),a=e.getAncestors(t);let c=0;for(;o[c]==a[c]&&o[c];)c++;return c===0?null:o[c-1]}isBefore(e){if(this==e||this.root!==e.root)return!1;const t=this.getPath(),o=e.getPath(),a=ve(t,o);switch(a){case"prefix":return!0;case"extension":return!1;default:return t[a]<o[a]}}isAfter(e){return this!=e&&this.root===e.root&&!this.isBefore(e)}_remove(){this.parent._removeChildren(this.index)}_fireChange(e,t){this.fire(`change:${e}`,t),this.parent&&this.parent._fireChange(e,t)}toJSON(){const e=xv(this);return delete e.parent,e}}Gs.prototype.is=function(s){return s==="node"||s==="view:node"};class $t extends Gs{constructor(e,t){super(e),this._textData=t}get data(){return this._textData}get _data(){return this.data}set _data(e){this._fireChange("text",this),this._textData=e}isSimilar(e){return e instanceof $t&&(this===e||this.data===e.data)}_clone(){return new $t(this.document,this.data)}}$t.prototype.is=function(s){return s==="$text"||s==="view:$text"||s==="text"||s==="view:text"||s==="node"||s==="view:node"};class $i extends qs{constructor(e,t,o){if(super(),this.textNode=e,t<0||t>e.data.length)throw new P("view-textproxy-wrong-offsetintext",this);if(o<0||t+o>e.data.length)throw new P("view-textproxy-wrong-length",this);this.data=e.data.substring(t,t+o),this.offsetInText=t}get offsetSize(){return this.data.length}get isPartial(){return this.data.length!==this.textNode.data.length}get parent(){return this.textNode.parent}get root(){return this.textNode.root}get document(){return this.textNode.document}getAncestors(e={}){const t=[];let o=e.includeSelf?this.textNode:this.parent;for(;o!==null;)t[e.parentFirst?"push":"unshift"](o),o=o.parent;return t}}$i.prototype.is=function(s){return s==="$textProxy"||s==="view:$textProxy"||s==="textProxy"||s==="view:textProxy"};class Vi{constructor(...e){this._patterns=[],this.add(...e)}add(...e){for(let t of e)(typeof t=="string"||t instanceof RegExp)&&(t={name:t}),this._patterns.push(t)}match(...e){for(const t of e)for(const o of this._patterns){const a=Ev(t,o);if(a)return{element:t,pattern:o,match:a}}return null}matchAll(...e){const t=[];for(const o of e)for(const a of this._patterns){const c=Ev(o,a);c&&t.push({element:o,pattern:a,match:c})}return t.length>0?t:null}getElementName(){if(this._patterns.length!==1)return null;const e=this._patterns[0],t=e.name;return typeof e=="function"||!t||t instanceof RegExp?null:t}}function Ev(s,e){if(typeof e=="function")return e(s);const t={};return e.name&&(t.name=function(o,a){return o instanceof RegExp?!!a.match(o):o===a}(e.name,s.name),!t.name)||e.attributes&&(t.attributes=function(o,a){const c=new Set(a.getAttributeKeys());return vn(o)?(o.style!==void 0&&H("matcher-pattern-deprecated-attributes-style-key",o),o.class!==void 0&&H("matcher-pattern-deprecated-attributes-class-key",o)):(c.delete("style"),c.delete("class")),um(o,c,d=>a.getAttribute(d))}(e.attributes,s),!t.attributes)||e.classes&&(t.classes=function(o,a){return um(o,a.getClassNames(),()=>{})}(e.classes,s),!t.classes)||e.styles&&(t.styles=function(o,a){return um(o,a.getStyleNames(!0),c=>a.getStyle(c))}(e.styles,s),!t.styles)?null:t}function um(s,e,t){const o=function(d){return Array.isArray(d)?d.map(h=>vn(h)?(h.key!==void 0&&h.value!==void 0||H("matcher-pattern-missing-key-or-value",h),[h.key,h.value]):[h,!0]):vn(d)?Object.entries(d):[[d,!0]]}(s),a=Array.from(e),c=[];if(o.forEach(([d,h])=>{a.forEach(g=>{(function(k,w){return k===!0||k===w||k instanceof RegExp&&w.match(k)})(d,g)&&function(k,w,y){if(k===!0)return!0;const S=y(w);return k===S||k instanceof RegExp&&!!String(S).match(k)}(h,g,t)&&c.push(g)})}),o.length&&!(c.length<o.length))return c}const zu=function(s){return typeof s=="symbol"||Bt(s)&&Dn(s)=="[object Symbol]"};var WO=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,KO=/^\w*$/;const hm=function(s,e){if(It(s))return!1;var t=typeof s;return!(t!="number"&&t!="symbol"&&t!="boolean"&&s!=null&&!zu(s))||KO.test(s)||!WO.test(s)||e!=null&&s in Object(e)};function pm(s,e){if(typeof s!="function"||e!=null&&typeof e!="function")throw new TypeError("Expected a function");var t=function(){var o=arguments,a=e?e.apply(this,o):o[0],c=t.cache;if(c.has(a))return c.get(a);var d=s.apply(this,o);return t.cache=c.set(a,d)||c,d};return t.cache=new(pm.Cache||Ko),t}pm.Cache=Ko;const YO=pm,QO=function(s){var e=YO(s,function(o){return t.size===500&&t.clear(),o}),t=e.cache;return e};var ZO=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,JO=/\\(\\)?/g,XO=QO(function(s){var e=[];return s.charCodeAt(0)===46&&e.push(""),s.replace(ZO,function(t,o,a,c){e.push(a?c.replace(JO,"$1"):o||t)}),e});const e3=XO,t3=function(s,e){for(var t=-1,o=s==null?0:s.length,a=Array(o);++t<o;)a[t]=e(s[t],t,s);return a};var Sv=He?He.prototype:void 0,Tv=Sv?Sv.toString:void 0;const n3=function s(e){if(typeof e=="string")return e;if(It(e))return t3(e,s)+"";if(zu(e))return Tv?Tv.call(e):"";var t=e+"";return t=="0"&&1/e==-1/0?"-0":t},fm=function(s){return s==null?"":n3(s)},ju=function(s,e){return It(s)?s:hm(s,e)?[s]:e3(fm(s))},o3=function(s){var e=s==null?0:s.length;return e?s[e-1]:void 0},Ja=function(s){if(typeof s=="string"||zu(s))return s;var e=s+"";return e=="0"&&1/s==-1/0?"-0":e},mm=function(s,e){for(var t=0,o=(e=ju(e,s)).length;s!=null&&t<o;)s=s[Ja(e[t++])];return t&&t==o?s:void 0},Dv=function(s,e,t){var o=-1,a=s.length;e<0&&(e=-e>a?0:a+e),(t=t>a?a:t)<0&&(t+=a),a=e>t?0:t-e>>>0,e>>>=0;for(var c=Array(a);++o<a;)c[o]=s[o+e];return c},i3=function(s,e){return e.length<2?s:mm(s,Dv(e,0,-1))},r3=function(s,e){return e=ju(e,s),(s=i3(s,e))==null||delete s[Ja(o3(e))]},s3=function(s,e){return s==null||r3(s,e)},Yc=function(s,e,t){var o=s==null?void 0:mm(s,e);return o===void 0?t:o},a3=function(s,e,t,o){if(!Ve(s))return s;for(var a=-1,c=(e=ju(e,s)).length,d=c-1,h=s;h!=null&&++a<c;){var g=Ja(e[a]),k=t;if(g==="__proto__"||g==="constructor"||g==="prototype")return s;if(a!=d){var w=h[g];(k=void 0)==void 0&&(k=Ve(w)?w:ar(e[a+1])?[]:{})}zs(h,g,k),h=h[g]}return s},l3=function(s,e,t){return s==null?s:a3(s,e,t)};class gm{constructor(e){this._styles={},this._styleProcessor=e}get isEmpty(){return!Object.entries(this._styles).length}get size(){return this.isEmpty?0:this.getStyleNames().length}setTo(e){this.clear();const t=function(o){let a=null,c=0,d=0,h=null;const g=new Map;if(o==="")return g;o.charAt(o.length-1)!=";"&&(o+=";");for(let k=0;k<o.length;k++){const w=o.charAt(k);if(a===null)switch(w){case":":h||(h=o.substr(c,k-c),d=k+1);break;case'"':case"'":a=w;break;case";":{const y=o.substr(d,k-d);h&&g.set(h.trim(),y.trim()),h=null,c=k+1;break}}else w===a&&(a=null)}return g}(e);for(const[o,a]of t)this._styleProcessor.toNormalizedForm(o,a,this._styles)}has(e){if(this.isEmpty)return!1;const t=this._styleProcessor.getReducedForm(e,this._styles).find(([o])=>o===e);return Array.isArray(t)}set(e,t){if(Ve(e))for(const[o,a]of Object.entries(e))this._styleProcessor.toNormalizedForm(o,a,this._styles);else this._styleProcessor.toNormalizedForm(e,t,this._styles)}remove(e){const t=bm(e);s3(this._styles,t),delete this._styles[e],this._cleanEmptyObjectsOnPath(t)}getNormalized(e){return this._styleProcessor.getNormalized(e,this._styles)}toString(){return this.isEmpty?"":this.getStylesEntries().map(e=>e.join(":")).sort().join(";")+";"}getAsString(e){if(this.isEmpty)return;if(this._styles[e]&&!Ve(this._styles[e]))return this._styles[e];const t=this._styleProcessor.getReducedForm(e,this._styles).find(([o])=>o===e);return Array.isArray(t)?t[1]:void 0}getStyleNames(e=!1){return this.isEmpty?[]:e?this._styleProcessor.getStyleNames(this._styles):this.getStylesEntries().map(([t])=>t)}clear(){this._styles={}}getStylesEntries(){const e=[],t=Object.keys(this._styles);for(const o of t)e.push(...this._styleProcessor.getReducedForm(o,this._styles));return e}_cleanEmptyObjectsOnPath(e){const t=e.split(".");if(!(t.length>1))return;const o=t.splice(0,t.length-1).join("."),a=Yc(this._styles,o);a&&!Object.keys(a).length&&this.remove(o)}}class c3{constructor(){this._normalizers=new Map,this._extractors=new Map,this._reducers=new Map,this._consumables=new Map}toNormalizedForm(e,t,o){if(Ve(t))km(o,bm(e),t);else if(this._normalizers.has(e)){const a=this._normalizers.get(e),{path:c,value:d}=a(t);km(o,c,d)}else km(o,e,t)}getNormalized(e,t){if(!e)return om({},t);if(t[e]!==void 0)return t[e];if(this._extractors.has(e)){const o=this._extractors.get(e);if(typeof o=="string")return Yc(t,o);const a=o(e,t);if(a)return a}return Yc(t,bm(e))}getReducedForm(e,t){const o=this.getNormalized(e,t);return o===void 0?[]:this._reducers.has(e)?this._reducers.get(e)(o):[[e,o]]}getStyleNames(e){const t=Array.from(this._consumables.keys()).filter(a=>{const c=this.getNormalized(a,e);return c&&typeof c=="object"?Object.keys(c).length:c}),o=new Set([...t,...Object.keys(e)]);return Array.from(o)}getRelatedStyles(e){return this._consumables.get(e)||[]}setNormalizer(e,t){this._normalizers.set(e,t)}setExtractor(e,t){this._extractors.set(e,t)}setReducer(e,t){this._reducers.set(e,t)}setStyleRelation(e,t){this._mapStyleNames(e,t);for(const o of t)this._mapStyleNames(o,[e])}_mapStyleNames(e,t){this._consumables.has(e)||this._consumables.set(e,[]),this._consumables.get(e).push(...t)}}function bm(s){return s.replace("-",".")}function km(s,e,t){let o=t;Ve(t)&&(o=om({},Yc(s,e),t)),l3(s,e,o)}class Po extends Gs{constructor(e,t,o,a){if(super(e),this._unsafeAttributesToRender=[],this._customProperties=new Map,this.name=t,this._attrs=function(c){const d=ji(c);for(const[h,g]of d)g===null?d.delete(h):typeof g!="string"&&d.set(h,String(g));return d}(o),this._children=[],a&&this._insertChild(0,a),this._classes=new Set,this._attrs.has("class")){const c=this._attrs.get("class");Iv(this._classes,c),this._attrs.delete("class")}this._styles=new gm(this.document.stylesProcessor),this._attrs.has("style")&&(this._styles.setTo(this._attrs.get("style")),this._attrs.delete("style"))}get childCount(){return this._children.length}get isEmpty(){return this._children.length===0}getChild(e){return this._children[e]}getChildIndex(e){return this._children.indexOf(e)}getChildren(){return this._children[Symbol.iterator]()}*getAttributeKeys(){this._classes.size>0&&(yield"class"),this._styles.isEmpty||(yield"style"),yield*this._attrs.keys()}*getAttributes(){yield*this._attrs.entries(),this._classes.size>0&&(yield["class",this.getAttribute("class")]),this._styles.isEmpty||(yield["style",this.getAttribute("style")])}getAttribute(e){if(e=="class")return this._classes.size>0?[...this._classes].join(" "):void 0;if(e=="style"){const t=this._styles.toString();return t==""?void 0:t}return this._attrs.get(e)}hasAttribute(e){return e=="class"?this._classes.size>0:e=="style"?!this._styles.isEmpty:this._attrs.has(e)}isSimilar(e){if(!(e instanceof Po))return!1;if(this===e)return!0;if(this.name!=e.name||this._attrs.size!==e._attrs.size||this._classes.size!==e._classes.size||this._styles.size!==e._styles.size)return!1;for(const[t,o]of this._attrs)if(!e._attrs.has(t)||e._attrs.get(t)!==o)return!1;for(const t of this._classes)if(!e._classes.has(t))return!1;for(const t of this._styles.getStyleNames())if(!e._styles.has(t)||e._styles.getAsString(t)!==this._styles.getAsString(t))return!1;return!0}hasClass(...e){for(const t of e)if(!this._classes.has(t))return!1;return!0}getClassNames(){return this._classes.keys()}getStyle(e){return this._styles.getAsString(e)}getNormalizedStyle(e){return this._styles.getNormalized(e)}getStyleNames(e){return this._styles.getStyleNames(e)}hasStyle(...e){for(const t of e)if(!this._styles.has(t))return!1;return!0}findAncestor(...e){const t=new Vi(...e);let o=this.parent;for(;o&&!o.is("documentFragment");){if(t.match(o))return o;o=o.parent}return null}getCustomProperty(e){return this._customProperties.get(e)}*getCustomProperties(){yield*this._customProperties.entries()}getIdentity(){const e=Array.from(this._classes).sort().join(","),t=this._styles.toString(),o=Array.from(this._attrs).map(a=>`${a[0]}="${a[1]}"`).sort().join(" ");return this.name+(e==""?"":` class="${e}"`)+(t?` style="${t}"`:"")+(o==""?"":` ${o}`)}shouldRenderUnsafeAttribute(e){return this._unsafeAttributesToRender.includes(e)}_clone(e=!1){const t=[];if(e)for(const a of this.getChildren())t.push(a._clone(e));const o=new this.constructor(this.document,this.name,this._attrs,t);return o._classes=new Set(this._classes),o._styles.set(this._styles.getNormalized()),o._customProperties=new Map(this._customProperties),o.getFillerOffset=this.getFillerOffset,o._unsafeAttributesToRender=this._unsafeAttributesToRender,o}_appendChild(e){return this._insertChild(this.childCount,e)}_insertChild(e,t){this._fireChange("children",this);let o=0;const a=function(c,d){return typeof d=="string"?[new $t(c,d)]:(he(d)||(d=[d]),Array.from(d).map(h=>typeof h=="string"?new $t(c,h):h instanceof $i?new $t(c,h.data):h))}(this.document,t);for(const c of a)c.parent!==null&&c._remove(),c.parent=this,c.document=this.document,this._children.splice(e,0,c),e++,o++;return o}_removeChildren(e,t=1){this._fireChange("children",this);for(let o=e;o<e+t;o++)this._children[o].parent=null;return this._children.splice(e,t)}_setAttribute(e,t){const o=String(t);this._fireChange("attributes",this),e=="class"?Iv(this._classes,o):e=="style"?this._styles.setTo(o):this._attrs.set(e,o)}_removeAttribute(e){return this._fireChange("attributes",this),e=="class"?this._classes.size>0&&(this._classes.clear(),!0):e=="style"?!this._styles.isEmpty&&(this._styles.clear(),!0):this._attrs.delete(e)}_addClass(e){this._fireChange("attributes",this);for(const t of qt(e))this._classes.add(t)}_removeClass(e){this._fireChange("attributes",this);for(const t of qt(e))this._classes.delete(t)}_setStyle(e,t){this._fireChange("attributes",this),typeof e!="string"?this._styles.set(e):this._styles.set(e,t)}_removeStyle(e){this._fireChange("attributes",this);for(const t of qt(e))this._styles.remove(t)}_setCustomProperty(e,t){this._customProperties.set(e,t)}_removeCustomProperty(e){return this._customProperties.delete(e)}}function Iv(s,e){const t=e.split(/\s+/);s.clear(),t.forEach(o=>s.add(o))}Po.prototype.is=function(s,e){return e?e===this.name&&(s==="element"||s==="view:element"):s==="element"||s==="view:element"||s==="node"||s==="view:node"};class Qc extends Po{constructor(e,t,o,a){super(e,t,o,a),this.getFillerOffset=d3}}function d3(){const s=[...this.getChildren()],e=s[this.childCount-1];if(e&&e.is("element","br"))return this.childCount;for(const t of s)if(!t.is("uiElement"))return null;return this.childCount}Qc.prototype.is=function(s,e){return e?e===this.name&&(s==="containerElement"||s==="view:containerElement"||s==="element"||s==="view:element"):s==="containerElement"||s==="view:containerElement"||s==="element"||s==="view:element"||s==="node"||s==="view:node"};class $u extends K(Qc){constructor(e,t,o,a){super(e,t,o,a),this.set("isReadOnly",!1),this.set("isFocused",!1),this.set("placeholder",void 0),this.bind("isReadOnly").to(e),this.bind("isFocused").to(e,"isFocused",c=>c&&e.selection.editableElement==this),this.listenTo(e.selection,"change",()=>{this.isFocused=e.isFocused&&e.selection.editableElement==this})}destroy(){this.stopListening()}}$u.prototype.is=function(s,e){return e?e===this.name&&(s==="editableElement"||s==="view:editableElement"||s==="containerElement"||s==="view:containerElement"||s==="element"||s==="view:element"):s==="editableElement"||s==="view:editableElement"||s==="containerElement"||s==="view:containerElement"||s==="element"||s==="view:element"||s==="node"||s==="view:node"};const Mv=Symbol("rootName");class Ov extends $u{constructor(e,t){super(e,t),this.rootName="main"}get rootName(){return this.getCustomProperty(Mv)}set rootName(e){this._setCustomProperty(Mv,e)}set _name(e){this.name=e}}Ov.prototype.is=function(s,e){return e?e===this.name&&(s==="rootElement"||s==="view:rootElement"||s==="editableElement"||s==="view:editableElement"||s==="containerElement"||s==="view:containerElement"||s==="element"||s==="view:element"):s==="rootElement"||s==="view:rootElement"||s==="editableElement"||s==="view:editableElement"||s==="containerElement"||s==="view:containerElement"||s==="element"||s==="view:element"||s==="node"||s==="view:node"};class Ws{constructor(e={}){if(!e.boundaries&&!e.startPosition)throw new P("view-tree-walker-no-start-position",null);if(e.direction&&e.direction!="forward"&&e.direction!="backward")throw new P("view-tree-walker-unknown-direction",e.startPosition,{direction:e.direction});this.boundaries=e.boundaries||null,e.startPosition?this._position=Oe._createAt(e.startPosition):this._position=Oe._createAt(e.boundaries[e.direction=="backward"?"end":"start"]),this.direction=e.direction||"forward",this.singleCharacters=!!e.singleCharacters,this.shallow=!!e.shallow,this.ignoreElementEnd=!!e.ignoreElementEnd,this._boundaryStartParent=this.boundaries?this.boundaries.start.parent:null,this._boundaryEndParent=this.boundaries?this.boundaries.end.parent:null}[Symbol.iterator](){return this}get position(){return this._position}skip(e){let t,o;do o=this.position,t=this.next();while(!t.done&&e(t.value));t.done||(this._position=o)}next(){return this.direction=="forward"?this._next():this._previous()}_next(){let e=this.position.clone();const t=this.position,o=e.parent;if(o.parent===null&&e.offset===o.childCount)return{done:!0,value:void 0};if(o===this._boundaryEndParent&&e.offset==this.boundaries.end.offset)return{done:!0,value:void 0};let a;if(o instanceof $t){if(e.isAtEnd)return this._position=Oe._createAfter(o),this._next();a=o.data[e.offset]}else a=o.getChild(e.offset);if(a instanceof Po){if(this.shallow){if(this.boundaries&&this.boundaries.end.isBefore(e))return{done:!0,value:void 0};e.offset++}else e=new Oe(a,0);return this._position=e,this._formatReturnValue("elementStart",a,t,e,1)}if(a instanceof $t){if(this.singleCharacters)return e=new Oe(a,0),this._position=e,this._next();let c,d=a.data.length;return a==this._boundaryEndParent?(d=this.boundaries.end.offset,c=new $i(a,0,d),e=Oe._createAfter(c)):(c=new $i(a,0,a.data.length),e.offset++),this._position=e,this._formatReturnValue("text",c,t,e,d)}if(typeof a=="string"){let c;this.singleCharacters?c=1:c=(o===this._boundaryEndParent?this.boundaries.end.offset:o.data.length)-e.offset;const d=new $i(o,e.offset,c);return e.offset+=c,this._position=e,this._formatReturnValue("text",d,t,e,c)}return e=Oe._createAfter(o),this._position=e,this.ignoreElementEnd?this._next():this._formatReturnValue("elementEnd",o,t,e)}_previous(){let e=this.position.clone();const t=this.position,o=e.parent;if(o.parent===null&&e.offset===0)return{done:!0,value:void 0};if(o==this._boundaryStartParent&&e.offset==this.boundaries.start.offset)return{done:!0,value:void 0};let a;if(o instanceof $t){if(e.isAtStart)return this._position=Oe._createBefore(o),this._previous();a=o.data[e.offset-1]}else a=o.getChild(e.offset-1);if(a instanceof Po)return this.shallow?(e.offset--,this._position=e,this._formatReturnValue("elementStart",a,t,e,1)):(e=new Oe(a,a.childCount),this._position=e,this.ignoreElementEnd?this._previous():this._formatReturnValue("elementEnd",a,t,e));if(a instanceof $t){if(this.singleCharacters)return e=new Oe(a,a.data.length),this._position=e,this._previous();let c,d=a.data.length;if(a==this._boundaryStartParent){const h=this.boundaries.start.offset;c=new $i(a,h,a.data.length-h),d=c.data.length,e=Oe._createBefore(c)}else c=new $i(a,0,a.data.length),e.offset--;return this._position=e,this._formatReturnValue("text",c,t,e,d)}if(typeof a=="string"){let c;if(this.singleCharacters)c=1;else{const h=o===this._boundaryStartParent?this.boundaries.start.offset:0;c=e.offset-h}e.offset-=c;const d=new $i(o,e.offset,c);return this._position=e,this._formatReturnValue("text",d,t,e,c)}return e=Oe._createBefore(o),this._position=e,this._formatReturnValue("elementStart",o,t,e,1)}_formatReturnValue(e,t,o,a,c){return t instanceof $i&&(t.offsetInText+t.data.length==t.textNode.data.length&&(this.direction!="forward"||this.boundaries&&this.boundaries.end.isEqual(this.position)?o=Oe._createAfter(t.textNode):(a=Oe._createAfter(t.textNode),this._position=a)),t.offsetInText===0&&(this.direction!="backward"||this.boundaries&&this.boundaries.start.isEqual(this.position)?o=Oe._createBefore(t.textNode):(a=Oe._createBefore(t.textNode),this._position=a))),{done:!1,value:{type:e,item:t,previousPosition:o,nextPosition:a,length:c}}}}class Oe extends qs{constructor(e,t){super(),this.parent=e,this.offset=t}get nodeAfter(){return this.parent.is("$text")?null:this.parent.getChild(this.offset)||null}get nodeBefore(){return this.parent.is("$text")?null:this.parent.getChild(this.offset-1)||null}get isAtStart(){return this.offset===0}get isAtEnd(){const e=this.parent.is("$text")?this.parent.data.length:this.parent.childCount;return this.offset===e}get root(){return this.parent.root}get editableElement(){let e=this.parent;for(;!(e instanceof $u);){if(!e.parent)return null;e=e.parent}return e}getShiftedBy(e){const t=Oe._createAt(this),o=t.offset+e;return t.offset=o<0?0:o,t}getLastMatchingPosition(e,t={}){t.startPosition=this;const o=new Ws(t);return o.skip(e),o.position}getAncestors(){return this.parent.is("documentFragment")?[this.parent]:this.parent.getAncestors({includeSelf:!0})}getCommonAncestor(e){const t=this.getAncestors(),o=e.getAncestors();let a=0;for(;t[a]==o[a]&&t[a];)a++;return a===0?null:t[a-1]}isEqual(e){return this.parent==e.parent&&this.offset==e.offset}isBefore(e){return this.compareWith(e)=="before"}isAfter(e){return this.compareWith(e)=="after"}compareWith(e){if(this.root!==e.root)return"different";if(this.isEqual(e))return"same";const t=this.parent.is("node")?this.parent.getPath():[],o=e.parent.is("node")?e.parent.getPath():[];t.push(this.offset),o.push(e.offset);const a=ve(t,o);switch(a){case"prefix":return"before";case"extension":return"after";default:return t[a]<o[a]?"before":"after"}}getWalker(e={}){return e.startPosition=this,new Ws(e)}clone(){return new Oe(this.parent,this.offset)}static _createAt(e,t){if(e instanceof Oe)return new this(e.parent,e.offset);{const o=e;if(t=="end")t=o.is("$text")?o.data.length:o.childCount;else{if(t=="before")return this._createBefore(o);if(t=="after")return this._createAfter(o);if(t!==0&&!t)throw new P("view-createpositionat-offset-required",o)}return new Oe(o,t)}}static _createAfter(e){if(e.is("$textProxy"))return new Oe(e.textNode,e.offsetInText+e.data.length);if(!e.parent)throw new P("view-position-after-root",e,{root:e});return new Oe(e.parent,e.index+1)}static _createBefore(e){if(e.is("$textProxy"))return new Oe(e.textNode,e.offsetInText);if(!e.parent)throw new P("view-position-before-root",e,{root:e});return new Oe(e.parent,e.index)}}Oe.prototype.is=function(s){return s==="position"||s==="view:position"};class tt extends qs{constructor(e,t=null){super(),this.start=e.clone(),this.end=t?t.clone():e.clone()}*[Symbol.iterator](){yield*new Ws({boundaries:this,ignoreElementEnd:!0})}get isCollapsed(){return this.start.isEqual(this.end)}get isFlat(){return this.start.parent===this.end.parent}get root(){return this.start.root}getEnlarged(){let e=this.start.getLastMatchingPosition(Vu,{direction:"backward"}),t=this.end.getLastMatchingPosition(Vu);return e.parent.is("$text")&&e.isAtStart&&(e=Oe._createBefore(e.parent)),t.parent.is("$text")&&t.isAtEnd&&(t=Oe._createAfter(t.parent)),new tt(e,t)}getTrimmed(){let e=this.start.getLastMatchingPosition(Vu);if(e.isAfter(this.end)||e.isEqual(this.end))return new tt(e,e);let t=this.end.getLastMatchingPosition(Vu,{direction:"backward"});const o=e.nodeAfter,a=t.nodeBefore;return o&&o.is("$text")&&(e=new Oe(o,0)),a&&a.is("$text")&&(t=new Oe(a,a.data.length)),new tt(e,t)}isEqual(e){return this==e||this.start.isEqual(e.start)&&this.end.isEqual(e.end)}containsPosition(e){return e.isAfter(this.start)&&e.isBefore(this.end)}containsRange(e,t=!1){e.isCollapsed&&(t=!1);const o=this.containsPosition(e.start)||t&&this.start.isEqual(e.start),a=this.containsPosition(e.end)||t&&this.end.isEqual(e.end);return o&&a}getDifference(e){const t=[];return this.isIntersecting(e)?(this.containsPosition(e.start)&&t.push(new tt(this.start,e.start)),this.containsPosition(e.end)&&t.push(new tt(e.end,this.end))):t.push(this.clone()),t}getIntersection(e){if(this.isIntersecting(e)){let t=this.start,o=this.end;return this.containsPosition(e.start)&&(t=e.start),this.containsPosition(e.end)&&(o=e.end),new tt(t,o)}return null}getWalker(e={}){return e.boundaries=this,new Ws(e)}getCommonAncestor(){return this.start.getCommonAncestor(this.end)}getContainedElement(){if(this.isCollapsed)return null;let e=this.start.nodeAfter,t=this.end.nodeBefore;return this.start.parent.is("$text")&&this.start.isAtEnd&&this.start.parent.nextSibling&&(e=this.start.parent.nextSibling),this.end.parent.is("$text")&&this.end.isAtStart&&this.end.parent.previousSibling&&(t=this.end.parent.previousSibling),e&&e.is("element")&&e===t?e:null}clone(){return new tt(this.start,this.end)}*getItems(e={}){e.boundaries=this,e.ignoreElementEnd=!0;const t=new Ws(e);for(const o of t)yield o.item}*getPositions(e={}){e.boundaries=this;const t=new Ws(e);yield t.position;for(const o of t)yield o.nextPosition}isIntersecting(e){return this.start.isBefore(e.end)&&this.end.isAfter(e.start)}static _createFromParentsAndOffsets(e,t,o,a){return new this(new Oe(e,t),new Oe(o,a))}static _createFromPositionAndShift(e,t){const o=e,a=e.getShiftedBy(t);return t>0?new this(o,a):new this(a,o)}static _createIn(e){return this._createFromParentsAndOffsets(e,0,e,e.childCount)}static _createOn(e){const t=e.is("$textProxy")?e.offsetSize:1;return this._createFromPositionAndShift(Oe._createBefore(e),t)}}function Vu(s){return!(!s.item.is("attributeElement")&&!s.item.is("uiElement"))}tt.prototype.is=function(s){return s==="range"||s==="view:range"};class wi extends ie(qs){constructor(...e){super(),this._ranges=[],this._lastRangeBackward=!1,this._isFake=!1,this._fakeSelectionLabel="",e.length&&this.setTo(...e)}get isFake(){return this._isFake}get fakeSelectionLabel(){return this._fakeSelectionLabel}get anchor(){if(!this._ranges.length)return null;const e=this._ranges[this._ranges.length-1];return(this._lastRangeBackward?e.end:e.start).clone()}get focus(){if(!this._ranges.length)return null;const e=this._ranges[this._ranges.length-1];return(this._lastRangeBackward?e.start:e.end).clone()}get isCollapsed(){return this.rangeCount===1&&this._ranges[0].isCollapsed}get rangeCount(){return this._ranges.length}get isBackward(){return!this.isCollapsed&&this._lastRangeBackward}get editableElement(){return this.anchor?this.anchor.editableElement:null}*getRanges(){for(const e of this._ranges)yield e.clone()}getFirstRange(){let e=null;for(const t of this._ranges)e&&!t.start.isBefore(e.start)||(e=t);return e?e.clone():null}getLastRange(){let e=null;for(const t of this._ranges)e&&!t.end.isAfter(e.end)||(e=t);return e?e.clone():null}getFirstPosition(){const e=this.getFirstRange();return e?e.start.clone():null}getLastPosition(){const e=this.getLastRange();return e?e.end.clone():null}isEqual(e){if(this.isFake!=e.isFake||this.isFake&&this.fakeSelectionLabel!=e.fakeSelectionLabel||this.rangeCount!=e.rangeCount)return!1;if(this.rangeCount===0)return!0;if(!this.anchor.isEqual(e.anchor)||!this.focus.isEqual(e.focus))return!1;for(const t of this._ranges){let o=!1;for(const a of e._ranges)if(t.isEqual(a)){o=!0;break}if(!o)return!1}return!0}isSimilar(e){if(this.isBackward!=e.isBackward)return!1;const t=xe(this.getRanges());if(t!=xe(e.getRanges()))return!1;if(t==0)return!0;for(let o of this.getRanges()){o=o.getTrimmed();let a=!1;for(let c of e.getRanges())if(c=c.getTrimmed(),o.start.isEqual(c.start)&&o.end.isEqual(c.end)){a=!0;break}if(!a)return!1}return!0}getSelectedElement(){return this.rangeCount!==1?null:this.getFirstRange().getContainedElement()}setTo(...e){let[t,o,a]=e;if(typeof o=="object"&&(a=o,o=void 0),t===null)this._setRanges([]),this._setFakeOptions(a);else if(t instanceof wi||t instanceof _m)this._setRanges(t.getRanges(),t.isBackward),this._setFakeOptions({fake:t.isFake,label:t.fakeSelectionLabel});else if(t instanceof tt)this._setRanges([t],a&&a.backward),this._setFakeOptions(a);else if(t instanceof Oe)this._setRanges([new tt(t)]),this._setFakeOptions(a);else if(t instanceof Gs){const c=!!a&&!!a.backward;let d;if(o===void 0)throw new P("view-selection-setto-required-second-parameter",this);d=o=="in"?tt._createIn(t):o=="on"?tt._createOn(t):new tt(Oe._createAt(t,o)),this._setRanges([d],c),this._setFakeOptions(a)}else{if(!he(t))throw new P("view-selection-setto-not-selectable",this);this._setRanges(t,a&&a.backward),this._setFakeOptions(a)}this.fire("change")}setFocus(e,t){if(this.anchor===null)throw new P("view-selection-setfocus-no-ranges",this);const o=Oe._createAt(e,t);if(o.compareWith(this.focus)=="same")return;const a=this.anchor;this._ranges.pop(),o.compareWith(a)=="before"?this._addRange(new tt(o,a),!0):this._addRange(new tt(a,o)),this.fire("change")}_setRanges(e,t=!1){e=Array.from(e),this._ranges=[];for(const o of e)this._addRange(o);this._lastRangeBackward=!!t}_setFakeOptions(e={}){this._isFake=!!e.fake,this._fakeSelectionLabel=e.fake&&e.label||""}_addRange(e,t=!1){if(!(e instanceof tt))throw new P("view-selection-add-range-not-range",this);this._pushRange(e),this._lastRangeBackward=!!t}_pushRange(e){for(const t of this._ranges)if(e.isIntersecting(t))throw new P("view-selection-range-intersects",this,{addedRange:e,intersectingRange:t});this._ranges.push(new tt(e.start,e.end))}}wi.prototype.is=function(s){return s==="selection"||s==="view:selection"};class _m extends ie(qs){constructor(...e){super(),this._selection=new wi,this._selection.delegate("change").to(this),e.length&&this._selection.setTo(...e)}get isFake(){return this._selection.isFake}get fakeSelectionLabel(){return this._selection.fakeSelectionLabel}get anchor(){return this._selection.anchor}get focus(){return this._selection.focus}get isCollapsed(){return this._selection.isCollapsed}get rangeCount(){return this._selection.rangeCount}get isBackward(){return this._selection.isBackward}get editableElement(){return this._selection.editableElement}get _ranges(){return this._selection._ranges}*getRanges(){yield*this._selection.getRanges()}getFirstRange(){return this._selection.getFirstRange()}getLastRange(){return this._selection.getLastRange()}getFirstPosition(){return this._selection.getFirstPosition()}getLastPosition(){return this._selection.getLastPosition()}getSelectedElement(){return this._selection.getSelectedElement()}isEqual(e){return this._selection.isEqual(e)}isSimilar(e){return this._selection.isSimilar(e)}_setTo(...e){this._selection.setTo(...e)}_setFocus(e,t){this._selection.setFocus(e,t)}}_m.prototype.is=function(s){return s==="selection"||s=="documentSelection"||s=="view:selection"||s=="view:documentSelection"};class Xa extends N{constructor(e,t,o){super(e,t),this.startRange=o,this._eventPhase="none",this._currentTarget=null}get eventPhase(){return this._eventPhase}get currentTarget(){return this._currentTarget}}const wm=Symbol("bubbling contexts");function vm(s){return class extends s{fire(e,...t){try{const o=e instanceof N?e:new N(this,e),a=Am(this);if(!a.size)return;if(Zc(o,"capturing",this),el(a,"$capture",o,...t))return o.return;const c=o.startRange||this.selection.getFirstRange(),d=c?c.getContainedElement():null,h=!!d&&!!Bv(a,d);let g=d||function(k){if(!k)return null;const w=k.start.parent,y=k.end.parent,S=w.getPath(),D=y.getPath();return S.length>D.length?w:y}(c);if(Zc(o,"atTarget",g),!h){if(el(a,"$text",o,...t))return o.return;Zc(o,"bubbling",g)}for(;g;){if(g.is("rootElement")){if(el(a,"$root",o,...t))return o.return}else if(g.is("element")&&el(a,g.name,o,...t))return o.return;if(el(a,g,o,...t))return o.return;g=g.parent,Zc(o,"bubbling",g)}return Zc(o,"bubbling",this),el(a,"$document",o,...t),o.return}catch(o){P.rethrowUnexpectedError(o,this)}}_addEventListener(e,t,o){const a=qt(o.context||"$document"),c=Am(this);for(const d of a){let h=c.get(d);h||(h=new(ie()),c.set(d,h)),this.listenTo(h,e,t,o)}}_removeEventListener(e,t){const o=Am(this);for(const a of o.values())this.stopListening(a,e,t)}}}{const s=vm(Object);["fire","_addEventListener","_removeEventListener"].forEach(e=>{vm[e]=s.prototype[e]})}function Zc(s,e,t){s instanceof Xa&&(s._eventPhase=e,s._currentTarget=t)}function el(s,e,t,...o){const a=typeof e=="string"?s.get(e):Bv(s,e);return!!a&&(a.fire(t,...o),t.stop.called)}function Bv(s,e){for(const[t,o]of s)if(typeof t=="function"&&t(e))return o;return null}function Am(s){return s[wm]||(s[wm]=new Map),s[wm]}class Hu extends vm(K()){constructor(e){super(),this._postFixers=new Set,this.selection=new _m,this.roots=new ki({idProperty:"rootName"}),this.stylesProcessor=e,this.set("isReadOnly",!1),this.set("isFocused",!1),this.set("isSelecting",!1),this.set("isComposing",!1)}getRoot(e="main"){return this.roots.get(e)}registerPostFixer(e){this._postFixers.add(e)}destroy(){this.roots.forEach(e=>e.destroy()),this.stopListening()}_callPostFixers(e){let t=!1;do for(const o of this._postFixers)if(t=o(e),t)break;while(t)}}class Ks extends Po{constructor(e,t,o,a){super(e,t,o,a),this._priority=10,this._id=null,this._clonesGroup=null,this.getFillerOffset=u3}get priority(){return this._priority}get id(){return this._id}getElementsWithSameId(){if(this.id===null)throw new P("attribute-element-get-elements-with-same-id-no-id",this);return new Set(this._clonesGroup)}isSimilar(e){return this.id!==null||e.id!==null?this.id===e.id:super.isSimilar(e)&&this.priority==e.priority}_clone(e=!1){const t=super._clone(e);return t._priority=this._priority,t._id=this._id,t}}function u3(){if(Cm(this))return null;let s=this.parent;for(;s&&s.is("attributeElement");){if(Cm(s)>1)return null;s=s.parent}return!s||Cm(s)>1?null:this.childCount}function Cm(s){return Array.from(s.getChildren()).filter(e=>!e.is("uiElement")).length}Ks.DEFAULT_PRIORITY=10,Ks.prototype.is=function(s,e){return e?e===this.name&&(s==="attributeElement"||s==="view:attributeElement"||s==="element"||s==="view:element"):s==="attributeElement"||s==="view:attributeElement"||s==="element"||s==="view:element"||s==="node"||s==="view:node"};class ym extends Po{constructor(e,t,o,a){super(e,t,o,a),this.getFillerOffset=h3}_insertChild(e,t){if(t&&(t instanceof Gs||Array.from(t).length>0))throw new P("view-emptyelement-cannot-add",[this,t]);return 0}}function h3(){return null}ym.prototype.is=function(s,e){return e?e===this.name&&(s==="emptyElement"||s==="view:emptyElement"||s==="element"||s==="view:element"):s==="emptyElement"||s==="view:emptyElement"||s==="element"||s==="view:element"||s==="node"||s==="view:node"};class Uu extends Po{constructor(e,t,o,a){super(e,t,o,a),this.getFillerOffset=f3}_insertChild(e,t){if(t&&(t instanceof Gs||Array.from(t).length>0))throw new P("view-uielement-cannot-add",[this,t]);return 0}render(e,t){return this.toDomElement(e)}toDomElement(e){const t=e.createElement(this.name);for(const o of this.getAttributeKeys())t.setAttribute(o,this.getAttribute(o));return t}}function p3(s){s.document.on("arrowKey",(e,t)=>function(o,a,c){if(a.keyCode==wt.arrowright){const d=a.domTarget.ownerDocument.defaultView.getSelection(),h=d.rangeCount==1&&d.getRangeAt(0).collapsed;if(h||a.shiftKey){const g=d.focusNode,k=d.focusOffset,w=c.domPositionToView(g,k);if(w===null)return;let y=!1;const S=w.getLastMatchingPosition(D=>(D.item.is("uiElement")&&(y=!0),!(!D.item.is("uiElement")&&!D.item.is("attributeElement"))));if(y){const D=c.viewPositionToDom(S);h?d.collapse(D.parent,D.offset):d.extend(D.parent,D.offset)}}}}(0,t,s.domConverter),{priority:"low"})}function f3(){return null}Uu.prototype.is=function(s,e){return e?e===this.name&&(s==="uiElement"||s==="view:uiElement"||s==="element"||s==="view:element"):s==="uiElement"||s==="view:uiElement"||s==="element"||s==="view:element"||s==="node"||s==="view:node"};class xm extends Po{constructor(e,t,o,a){super(e,t,o,a),this.getFillerOffset=m3}_insertChild(e,t){if(t&&(t instanceof Gs||Array.from(t).length>0))throw new P("view-rawelement-cannot-add",[this,t]);return 0}render(e,t){}}function m3(){return null}xm.prototype.is=function(s,e){return e?e===this.name&&(s==="rawElement"||s==="view:rawElement"||s==="element"||s==="view:element"):s==="rawElement"||s==="view:rawElement"||s===this.name||s==="view:"+this.name||s==="element"||s==="view:element"||s==="node"||s==="view:node"};class Ys extends ie(qs){constructor(e,t){super(),this._children=[],this._customProperties=new Map,this.document=e,t&&this._insertChild(0,t)}[Symbol.iterator](){return this._children[Symbol.iterator]()}get childCount(){return this._children.length}get isEmpty(){return this.childCount===0}get root(){return this}get parent(){return null}get name(){}get getFillerOffset(){}getCustomProperty(e){return this._customProperties.get(e)}*getCustomProperties(){yield*this._customProperties.entries()}_appendChild(e){return this._insertChild(this.childCount,e)}getChild(e){return this._children[e]}getChildIndex(e){return this._children.indexOf(e)}getChildren(){return this._children[Symbol.iterator]()}_insertChild(e,t){this._fireChange("children",this);let o=0;const a=function(c,d){return typeof d=="string"?[new $t(c,d)]:(he(d)||(d=[d]),Array.from(d).map(h=>typeof h=="string"?new $t(c,h):h instanceof $i?new $t(c,h.data):h))}(this.document,t);for(const c of a)c.parent!==null&&c._remove(),c.parent=this,this._children.splice(e,0,c),e++,o++;return o}_removeChildren(e,t=1){this._fireChange("children",this);for(let o=e;o<e+t;o++)this._children[o].parent=null;return this._children.splice(e,t)}_fireChange(e,t){this.fire("change:"+e,t)}_setCustomProperty(e,t){this._customProperties.set(e,t)}_removeCustomProperty(e){return this._customProperties.delete(e)}}Ys.prototype.is=function(s){return s==="documentFragment"||s==="view:documentFragment"};class Pv{constructor(e){this._cloneGroups=new Map,this._slotFactory=null,this.document=e}setSelection(...e){this.document.selection._setTo(...e)}setSelectionFocus(e,t){this.document.selection._setFocus(e,t)}createDocumentFragment(e){return new Ys(this.document,e)}createText(e){return new $t(this.document,e)}createAttributeElement(e,t,o={}){const a=new Ks(this.document,e,t);return typeof o.priority=="number"&&(a._priority=o.priority),o.id&&(a._id=o.id),o.renderUnsafeAttributes&&a._unsafeAttributesToRender.push(...o.renderUnsafeAttributes),a}createContainerElement(e,t,o={},a={}){let c=null;vn(o)?a=o:c=o;const d=new Qc(this.document,e,t,c);return a.renderUnsafeAttributes&&d._unsafeAttributesToRender.push(...a.renderUnsafeAttributes),d}createEditableElement(e,t,o={}){const a=new $u(this.document,e,t);return o.renderUnsafeAttributes&&a._unsafeAttributesToRender.push(...o.renderUnsafeAttributes),a}createEmptyElement(e,t,o={}){const a=new ym(this.document,e,t);return o.renderUnsafeAttributes&&a._unsafeAttributesToRender.push(...o.renderUnsafeAttributes),a}createUIElement(e,t,o){const a=new Uu(this.document,e,t);return o&&(a.render=o),a}createRawElement(e,t,o,a={}){const c=new xm(this.document,e,t);return o&&(c.render=o),a.renderUnsafeAttributes&&c._unsafeAttributesToRender.push(...a.renderUnsafeAttributes),c}setAttribute(e,t,o){o._setAttribute(e,t)}removeAttribute(e,t){t._removeAttribute(e)}addClass(e,t){t._addClass(e)}removeClass(e,t){t._removeClass(e)}setStyle(e,t,o){vn(e)&&o===void 0?t._setStyle(e):o._setStyle(e,t)}removeStyle(e,t){t._removeStyle(e)}setCustomProperty(e,t,o){o._setCustomProperty(e,t)}removeCustomProperty(e,t){return t._removeCustomProperty(e)}breakAttributes(e){return e instanceof Oe?this._breakAttributes(e):this._breakAttributesRange(e)}breakContainer(e){const t=e.parent;if(!t.is("containerElement"))throw new P("view-writer-break-non-container-element",this.document);if(!t.parent)throw new P("view-writer-break-root",this.document);if(e.isAtStart)return Oe._createBefore(t);if(!e.isAtEnd){const o=t._clone(!1);this.insert(Oe._createAfter(t),o);const a=new tt(e,Oe._createAt(t,"end")),c=new Oe(o,0);this.move(a,c)}return Oe._createAfter(t)}mergeAttributes(e){const t=e.offset,o=e.parent;if(o.is("$text"))return e;if(o.is("attributeElement")&&o.childCount===0){const d=o.parent,h=o.index;return o._remove(),this._removeFromClonedElementsGroup(o),this.mergeAttributes(new Oe(d,h))}const a=o.getChild(t-1),c=o.getChild(t);if(!a||!c)return e;if(a.is("$text")&&c.is("$text"))return Lv(a,c);if(a.is("attributeElement")&&c.is("attributeElement")&&a.isSimilar(c)){const d=a.childCount;return a._appendChild(c.getChildren()),c._remove(),this._removeFromClonedElementsGroup(c),this.mergeAttributes(new Oe(a,d))}return e}mergeContainers(e){const t=e.nodeBefore,o=e.nodeAfter;if(!(t&&o&&t.is("containerElement")&&o.is("containerElement")))throw new P("view-writer-merge-containers-invalid-position",this.document);const a=t.getChild(t.childCount-1),c=a instanceof $t?Oe._createAt(a,"end"):Oe._createAt(t,"end");return this.move(tt._createIn(o),Oe._createAt(t,"end")),this.remove(tt._createOn(o)),c}insert(e,t){Rv(t=he(t)?[...t]:[t],this.document);const o=t.reduce((d,h)=>{const g=d[d.length-1],k=!h.is("uiElement");return g&&g.breakAttributes==k?g.nodes.push(h):d.push({breakAttributes:k,nodes:[h]}),d},[]);let a=null,c=e;for(const{nodes:d,breakAttributes:h}of o){const g=this._insertNodes(c,d,h);a||(a=g.start),c=g.end}return a?new tt(a,c):new tt(e)}remove(e){const t=e instanceof tt?e:tt._createOn(e);if(Jc(t,this.document),t.isCollapsed)return new Ys(this.document);const{start:o,end:a}=this._breakAttributesRange(t,!0),c=o.parent,d=a.offset-o.offset,h=c._removeChildren(o.offset,d);for(const k of h)this._removeFromClonedElementsGroup(k);const g=this.mergeAttributes(o);return t.start=g,t.end=g.clone(),new Ys(this.document,h)}clear(e,t){Jc(e,this.document);const o=e.getWalker({direction:"backward",ignoreElementEnd:!0});for(const a of o){const c=a.item;let d;if(c.is("element")&&t.isSimilar(c))d=tt._createOn(c);else if(!a.nextPosition.isAfter(e.start)&&c.is("$textProxy")){const h=c.getAncestors().find(g=>g.is("element")&&t.isSimilar(g));h&&(d=tt._createIn(h))}d&&(d.end.isAfter(e.end)&&(d.end=e.end),d.start.isBefore(e.start)&&(d.start=e.start),this.remove(d))}}move(e,t){let o;if(t.isAfter(e.end)){const a=(t=this._breakAttributes(t,!0)).parent,c=a.childCount;e=this._breakAttributesRange(e,!0),o=this.remove(e),t.offset+=a.childCount-c}else o=this.remove(e);return this.insert(t,o)}wrap(e,t){if(!(t instanceof Ks))throw new P("view-writer-wrap-invalid-attribute",this.document);if(Jc(e,this.document),e.isCollapsed){let a=e.start;a.parent.is("element")&&(o=a.parent,!Array.from(o.getChildren()).some(d=>!d.is("uiElement")))&&(a=a.getLastMatchingPosition(d=>d.item.is("uiElement"))),a=this._wrapPosition(a,t);const c=this.document.selection;return c.isCollapsed&&c.getFirstPosition().isEqual(e.start)&&this.setSelection(a),new tt(a)}return this._wrapRange(e,t);var o}unwrap(e,t){if(!(t instanceof Ks))throw new P("view-writer-unwrap-invalid-attribute",this.document);if(Jc(e,this.document),e.isCollapsed)return e;const{start:o,end:a}=this._breakAttributesRange(e,!0),c=o.parent,d=this._unwrapChildren(c,o.offset,a.offset,t),h=this.mergeAttributes(d.start);h.isEqual(d.start)||d.end.offset--;const g=this.mergeAttributes(d.end);return new tt(h,g)}rename(e,t){const o=new Qc(this.document,e,t.getAttributes());return this.insert(Oe._createAfter(t),o),this.move(tt._createIn(t),Oe._createAt(o,0)),this.remove(tt._createOn(t)),o}clearClonedElementsGroup(e){this._cloneGroups.delete(e)}createPositionAt(e,t){return Oe._createAt(e,t)}createPositionAfter(e){return Oe._createAfter(e)}createPositionBefore(e){return Oe._createBefore(e)}createRange(e,t){return new tt(e,t)}createRangeOn(e){return tt._createOn(e)}createRangeIn(e){return tt._createIn(e)}createSelection(...e){return new wi(...e)}createSlot(e="children"){if(!this._slotFactory)throw new P("view-writer-invalid-create-slot-context",this.document);return this._slotFactory(this,e)}_registerSlotFactory(e){this._slotFactory=e}_clearSlotFactory(){this._slotFactory=null}_insertNodes(e,t,o){let a,c;if(a=o?Em(e):e.parent.is("$text")?e.parent.parent:e.parent,!a)throw new P("view-writer-invalid-position-container",this.document);c=o?this._breakAttributes(e,!0):e.parent.is("$text")?Sm(e):e;const d=a._insertChild(c.offset,t);for(const w of t)this._addToClonedElementsGroup(w);const h=c.getShiftedBy(d),g=this.mergeAttributes(c);g.isEqual(c)||h.offset--;const k=this.mergeAttributes(h);return new tt(g,k)}_wrapChildren(e,t,o,a){let c=t;const d=[];for(;c<o;){const g=e.getChild(c),k=g.is("$text"),w=g.is("attributeElement");if(w&&this._wrapAttributeElement(a,g))d.push(new Oe(e,c));else if(k||!w||g3(a,g)){const y=a._clone();g._remove(),y._appendChild(g),e._insertChild(c,y),this._addToClonedElementsGroup(y),d.push(new Oe(e,c))}else this._wrapChildren(g,0,g.childCount,a);c++}let h=0;for(const g of d)g.offset-=h,g.offset!=t&&(this.mergeAttributes(g).isEqual(g)||(h++,o--));return tt._createFromParentsAndOffsets(e,t,e,o)}_unwrapChildren(e,t,o,a){let c=t;const d=[];for(;c<o;){const g=e.getChild(c);if(g.is("attributeElement"))if(g.isSimilar(a)){const k=g.getChildren(),w=g.childCount;g._remove(),e._insertChild(c,k),this._removeFromClonedElementsGroup(g),d.push(new Oe(e,c),new Oe(e,c+w)),c+=w,o+=w-1}else this._unwrapAttributeElement(a,g)?(d.push(new Oe(e,c),new Oe(e,c+1)),c++):(this._unwrapChildren(g,0,g.childCount,a),c++);else c++}let h=0;for(const g of d)g.offset-=h,!(g.offset==t||g.offset==o)&&(this.mergeAttributes(g).isEqual(g)||(h++,o--));return tt._createFromParentsAndOffsets(e,t,e,o)}_wrapRange(e,t){const{start:o,end:a}=this._breakAttributesRange(e,!0),c=o.parent,d=this._wrapChildren(c,o.offset,a.offset,t),h=this.mergeAttributes(d.start);h.isEqual(d.start)||d.end.offset--;const g=this.mergeAttributes(d.end);return new tt(h,g)}_wrapPosition(e,t){if(t.isSimilar(e.parent))return Nv(e.clone());e.parent.is("$text")&&(e=Sm(e));const o=this.createAttributeElement("_wrapPosition-fake-element");o._priority=Number.POSITIVE_INFINITY,o.isSimilar=()=>!1,e.parent._insertChild(e.offset,o);const a=new tt(e,e.getShiftedBy(1));this.wrap(a,t);const c=new Oe(o.parent,o.index);o._remove();const d=c.nodeBefore,h=c.nodeAfter;return d instanceof $t&&h instanceof $t?Lv(d,h):Nv(c)}_wrapAttributeElement(e,t){if(!Fv(e,t)||e.name!==t.name||e.priority!==t.priority)return!1;for(const o of e.getAttributeKeys())if(o!=="class"&&o!=="style"&&t.hasAttribute(o)&&t.getAttribute(o)!==e.getAttribute(o))return!1;for(const o of e.getStyleNames())if(t.hasStyle(o)&&t.getStyle(o)!==e.getStyle(o))return!1;for(const o of e.getAttributeKeys())o!=="class"&&o!=="style"&&(t.hasAttribute(o)||this.setAttribute(o,e.getAttribute(o),t));for(const o of e.getStyleNames())t.hasStyle(o)||this.setStyle(o,e.getStyle(o),t);for(const o of e.getClassNames())t.hasClass(o)||this.addClass(o,t);return!0}_unwrapAttributeElement(e,t){if(!Fv(e,t)||e.name!==t.name||e.priority!==t.priority)return!1;for(const o of e.getAttributeKeys())if(o!=="class"&&o!=="style"&&(!t.hasAttribute(o)||t.getAttribute(o)!==e.getAttribute(o)))return!1;if(!t.hasClass(...e.getClassNames()))return!1;for(const o of e.getStyleNames())if(!t.hasStyle(o)||t.getStyle(o)!==e.getStyle(o))return!1;for(const o of e.getAttributeKeys())o!=="class"&&o!=="style"&&this.removeAttribute(o,t);return this.removeClass(Array.from(e.getClassNames()),t),this.removeStyle(Array.from(e.getStyleNames()),t),!0}_breakAttributesRange(e,t=!1){const o=e.start,a=e.end;if(Jc(e,this.document),e.isCollapsed){const g=this._breakAttributes(e.start,t);return new tt(g,g)}const c=this._breakAttributes(a,t),d=c.parent.childCount,h=this._breakAttributes(o,t);return c.offset+=c.parent.childCount-d,new tt(h,c)}_breakAttributes(e,t=!1){const o=e.offset,a=e.parent;if(e.parent.is("emptyElement"))throw new P("view-writer-cannot-break-empty-element",this.document);if(e.parent.is("uiElement"))throw new P("view-writer-cannot-break-ui-element",this.document);if(e.parent.is("rawElement"))throw new P("view-writer-cannot-break-raw-element",this.document);if(!t&&a.is("$text")&&Tm(a.parent)||Tm(a))return e.clone();if(a.is("$text"))return this._breakAttributes(Sm(e),t);if(o==a.childCount){const c=new Oe(a.parent,a.index+1);return this._breakAttributes(c,t)}if(o===0){const c=new Oe(a.parent,a.index);return this._breakAttributes(c,t)}{const c=a.index+1,d=a._clone();a.parent._insertChild(c,d),this._addToClonedElementsGroup(d);const h=a.childCount-o,g=a._removeChildren(o,h);d._appendChild(g);const k=new Oe(a.parent,c);return this._breakAttributes(k,t)}}_addToClonedElementsGroup(e){if(!e.root.is("rootElement"))return;if(e.is("element"))for(const a of e.getChildren())this._addToClonedElementsGroup(a);const t=e.id;if(!t)return;let o=this._cloneGroups.get(t);o||(o=new Set,this._cloneGroups.set(t,o)),o.add(e),e._clonesGroup=o}_removeFromClonedElementsGroup(e){if(e.is("element"))for(const a of e.getChildren())this._removeFromClonedElementsGroup(a);const t=e.id;if(!t)return;const o=this._cloneGroups.get(t);o&&o.delete(e)}}function Em(s){let e=s.parent;for(;!Tm(e);){if(!e)return;e=e.parent}return e}function g3(s,e){return s.priority<e.priority||!(s.priority>e.priority)&&s.getIdentity()<e.getIdentity()}function Nv(s){const e=s.nodeBefore;if(e&&e.is("$text"))return new Oe(e,e.data.length);const t=s.nodeAfter;return t&&t.is("$text")?new Oe(t,0):s}function Sm(s){if(s.offset==s.parent.data.length)return new Oe(s.parent.parent,s.parent.index+1);if(s.offset===0)return new Oe(s.parent.parent,s.parent.index);const e=s.parent.data.slice(s.offset);return s.parent._data=s.parent.data.slice(0,s.offset),s.parent.parent._insertChild(s.parent.index+1,new $t(s.root.document,e)),new Oe(s.parent.parent,s.parent.index+1)}function Lv(s,e){const t=s.data.length;return s._data+=e.data,e._remove(),new Oe(s,t)}const b3=[$t,Ks,Qc,ym,xm,Uu];function Rv(s,e){for(const t of s){if(!b3.some(o=>t instanceof o))throw new P("view-writer-insert-invalid-node-type",e);t.is("$text")||Rv(t.getChildren(),e)}}function Tm(s){return s&&(s.is("containerElement")||s.is("documentFragment"))}function Jc(s,e){const t=Em(s.start),o=Em(s.end);if(!t||!o||t!==o)throw new P("view-writer-invalid-range-container",e)}function Fv(s,e){return s.id===null&&e.id===null}const zv=s=>s.createTextNode(" "),jv=s=>{const e=s.createElement("span");return e.dataset.ckeFiller="true",e.innerText=" ",e},$v=s=>{const e=s.createElement("br");return e.dataset.ckeFiller="true",e},vi=7,Xc="⁠".repeat(vi);function No(s){return typeof s=="string"?s.substr(0,vi)===Xc:hn(s)&&s.data.substr(0,vi)===Xc}function tl(s){return s.data.length==vi&&No(s)}function Vv(s){const e=typeof s=="string"?s:s.data;return No(s)?e.slice(vi):e}function k3(s,e){if(e.keyCode==wt.arrowleft){const t=e.domTarget.ownerDocument.defaultView.getSelection();if(t.rangeCount==1&&t.getRangeAt(0).collapsed){const o=t.getRangeAt(0).startContainer,a=t.getRangeAt(0).startOffset;No(o)&&a<=vi&&t.collapse(o,0)}}}var Hv=u(8264),_3={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};Ie()(Hv.A,_3),Hv.A.locals;class w3 extends K(){constructor(e,t){super(),this.domDocuments=new Set,this.markedAttributes=new Set,this.markedChildren=new Set,this.markedTexts=new Set,this._inlineFiller=null,this._fakeSelectionContainer=null,this.domConverter=e,this.selection=t,this.set("isFocused",!1),this.set("isSelecting",!1),v.isBlink&&!v.isAndroid&&this.on("change:isSelecting",()=>{this.isSelecting||this.render()}),this.set("isComposing",!1),this.on("change:isComposing",()=>{this.isComposing||this.render()})}markToSync(e,t){if(e==="text")this.domConverter.mapViewToDom(t.parent)&&this.markedTexts.add(t);else{if(!this.domConverter.mapViewToDom(t))return;if(e==="attributes")this.markedAttributes.add(t);else{if(e!=="children")throw new P("view-renderer-unknown-type",this);this.markedChildren.add(t)}}}render(){if(this.isComposing&&!v.isAndroid)return;let e=null;const t=!(v.isBlink&&!v.isAndroid)||!this.isSelecting;for(const o of this.markedChildren)this._updateChildrenMappings(o);t?(this._inlineFiller&&!this._isSelectionInInlineFiller()&&this._removeInlineFiller(),this._inlineFiller?e=this._getInlineFillerPosition():this._needsInlineFillerAtSelection()&&(e=this.selection.getFirstPosition(),this.markedChildren.add(e.parent))):this._inlineFiller&&this._inlineFiller.parentNode&&(e=this.domConverter.domPositionToView(this._inlineFiller),e&&e.parent.is("$text")&&(e=Oe._createBefore(e.parent)));for(const o of this.markedAttributes)this._updateAttrs(o);for(const o of this.markedChildren)this._updateChildren(o,{inlineFillerPosition:e});for(const o of this.markedTexts)!this.markedChildren.has(o.parent)&&this.domConverter.mapViewToDom(o.parent)&&this._updateText(o,{inlineFillerPosition:e});if(t)if(e){const o=this.domConverter.viewPositionToDom(e),a=o.parent.ownerDocument;No(o.parent)?this._inlineFiller=o.parent:this._inlineFiller=Uv(a,o.parent,o.offset)}else this._inlineFiller=null;this._updateFocus(),this._updateSelection(),this.domConverter._clearTemporaryCustomProperties(),this.markedTexts.clear(),this.markedAttributes.clear(),this.markedChildren.clear()}_updateChildrenMappings(e){const t=this.domConverter.mapViewToDom(e);if(!t)return;const o=Array.from(t.childNodes),a=Array.from(this.domConverter.viewChildrenToDom(e,{withChildren:!1})),c=this._diffNodeLists(o,a),d=this._findUpdateActions(c,o,a,v3);if(d.indexOf("update")!==-1){const h={equal:0,insert:0,delete:0};for(const g of d)if(g==="update"){const k=h.equal+h.insert,w=h.equal+h.delete,y=e.getChild(k);!y||y.is("uiElement")||y.is("rawElement")||this._updateElementMappings(y,o[w]),qw(a[k]),h.equal++}else h[g]++}}_updateElementMappings(e,t){this.domConverter.unbindDomElement(t),this.domConverter.bindElements(t,e),this.markedChildren.add(e),this.markedAttributes.add(e)}_getInlineFillerPosition(){const e=this.selection.getFirstPosition();return e.parent.is("$text")?Oe._createBefore(e.parent):e}_isSelectionInInlineFiller(){if(this.selection.rangeCount!=1||!this.selection.isCollapsed)return!1;const e=this.selection.getFirstPosition(),t=this.domConverter.viewPositionToDom(e);return!!(t&&hn(t.parent)&&No(t.parent))}_removeInlineFiller(){const e=this._inlineFiller;if(!No(e))throw new P("view-renderer-filler-was-lost",this);tl(e)?e.remove():e.data=e.data.substr(vi),this._inlineFiller=null}_needsInlineFillerAtSelection(){if(this.selection.rangeCount!=1||!this.selection.isCollapsed)return!1;const e=this.selection.getFirstPosition(),t=e.parent,o=e.offset;if(!this.domConverter.mapViewToDom(t.root)||!t.is("element")||!function(d){if(d.getAttribute("contenteditable")=="false")return!1;const h=d.findAncestor(g=>g.hasAttribute("contenteditable"));return!h||h.getAttribute("contenteditable")=="true"}(t))return!1;const a=e.nodeBefore,c=e.nodeAfter;return!(a instanceof $t||c instanceof $t)&&!!(o!==t.getFillerOffset()||a&&a.is("element","br"))&&(!v.isAndroid||!a&&!c)}_updateText(e,t){const o=this.domConverter.findCorrespondingDomText(e);let a=this.domConverter.viewToDom(e).data;const c=t.inlineFillerPosition;c&&c.parent==e.parent&&c.offset==e.index&&(a=Xc+a),qv(o,a)}_updateAttrs(e){const t=this.domConverter.mapViewToDom(e);if(!t)return;const o=Array.from(t.attributes).map(c=>c.name),a=e.getAttributeKeys();for(const c of a)this.domConverter.setDomElementAttribute(t,c,e.getAttribute(c),e);for(const c of o)e.hasAttribute(c)||this.domConverter.removeDomElementAttribute(t,c)}_updateChildren(e,t){const o=this.domConverter.mapViewToDom(e);if(!o)return;if(v.isAndroid){let y=null;for(const S of Array.from(o.childNodes)){if(y&&hn(y)&&hn(S)){o.normalize();break}y=S}}const a=t.inlineFillerPosition,c=o.childNodes,d=Array.from(this.domConverter.viewChildrenToDom(e,{bind:!0}));a&&a.parent===e&&Uv(o.ownerDocument,d,a.offset);const h=this._diffNodeLists(c,d),g=this._findUpdateActions(h,c,d,A3);let k=0;const w=new Set;for(const y of g)y==="delete"?(w.add(c[k]),qw(c[k])):y!=="equal"&&y!=="update"||k++;k=0;for(const y of g)y==="insert"?($w(o,k,d[k]),k++):y==="update"?(qv(c[k],d[k].data),k++):y==="equal"&&(this._markDescendantTextToSync(this.domConverter.domToView(d[k])),k++);for(const y of w)y.parentNode||this.domConverter.unbindDomElement(y)}_diffNodeLists(e,t){return e=function(o,a){const c=Array.from(o);return c.length==0||!a||c[c.length-1]==a&&c.pop(),c}(e,this._fakeSelectionContainer),I(e,t,C3.bind(null,this.domConverter))}_findUpdateActions(e,t,o,a){if(e.indexOf("insert")===-1||e.indexOf("delete")===-1)return e;let c=[],d=[],h=[];const g={equal:0,insert:0,delete:0};for(const k of e)k==="insert"?h.push(o[g.equal+g.insert]):k==="delete"?d.push(t[g.equal+g.delete]):(c=c.concat(I(d,h,a).map(w=>w==="equal"?"update":w)),c.push("equal"),d=[],h=[]),g[k]++;return c.concat(I(d,h,a).map(k=>k==="equal"?"update":k))}_markDescendantTextToSync(e){if(e){if(e.is("$text"))this.markedTexts.add(e);else if(e.is("element"))for(const t of e.getChildren())this._markDescendantTextToSync(t)}}_updateSelection(){if(v.isBlink&&!v.isAndroid&&this.isSelecting&&!this.markedChildren.size)return;if(this.selection.rangeCount===0)return this._removeDomSelection(),void this._removeFakeSelection();const e=this.domConverter.mapViewToDom(this.selection.editableElement);this.isFocused&&e&&(this.selection.isFake?this._updateFakeSelection(e):this._fakeSelectionContainer&&this._fakeSelectionContainer.isConnected?(this._removeFakeSelection(),this._updateDomSelection(e)):this.isComposing&&v.isAndroid||this._updateDomSelection(e))}_updateFakeSelection(e){const t=e.ownerDocument;this._fakeSelectionContainer||(this._fakeSelectionContainer=function(d){const h=d.createElement("div");return h.className="ck-fake-selection-container",Object.assign(h.style,{position:"fixed",top:0,left:"-9999px",width:"42px"}),h.textContent=" ",h}(t));const o=this._fakeSelectionContainer;if(this.domConverter.bindFakeSelection(o,this.selection),!this._fakeSelectionNeedsUpdate(e))return;o.parentElement&&o.parentElement==e||e.appendChild(o),o.textContent=this.selection.fakeSelectionLabel||" ";const a=t.getSelection(),c=t.createRange();a.removeAllRanges(),c.selectNodeContents(o),a.addRange(c)}_updateDomSelection(e){const t=e.ownerDocument.defaultView.getSelection();if(!this._domSelectionNeedsUpdate(t))return;const o=this.domConverter.viewPositionToDom(this.selection.anchor),a=this.domConverter.viewPositionToDom(this.selection.focus);t.setBaseAndExtent(o.parent,o.offset,a.parent,a.offset),v.isGecko&&function(c,d){let h=c.parent,g=c.offset;if(hn(h)&&tl(h)&&(g=qc(h)+1,h=h.parentNode),h.nodeType!=Node.ELEMENT_NODE||g!=h.childNodes.length-1)return;const k=h.childNodes[g];k&&k.tagName=="BR"&&d.addRange(d.getRangeAt(0))}(a,t)}_domSelectionNeedsUpdate(e){if(!this.domConverter.isDomSelectionCorrect(e))return!0;const t=e&&this.domConverter.domSelectionToView(e);return(!t||!this.selection.isEqual(t))&&!(!this.selection.isCollapsed&&this.selection.isSimilar(t))}_fakeSelectionNeedsUpdate(e){const t=this._fakeSelectionContainer,o=e.ownerDocument.getSelection();return!t||t.parentElement!==e||o.anchorNode!==t&&!t.contains(o.anchorNode)||t.textContent!==this.selection.fakeSelectionLabel}_removeDomSelection(){for(const e of this.domDocuments){const t=e.getSelection();if(t.rangeCount){const o=e.activeElement,a=this.domConverter.mapDomToView(o);o&&a&&t.removeAllRanges()}}}_removeFakeSelection(){const e=this._fakeSelectionContainer;e&&e.remove()}_updateFocus(){if(this.isFocused){const e=this.selection.editableElement;e&&this.domConverter.focus(e)}}}function Uv(s,e,t){const o=e instanceof Array?e:e.childNodes,a=o[t];if(hn(a))return a.data=Xc+a.data,a;{const c=s.createTextNode(Xc);return Array.isArray(e)?o.splice(t,0,c):$w(e,t,c),c}}function v3(s,e){return qr(s)&&qr(e)&&!hn(s)&&!hn(e)&&!Gc(s)&&!Gc(e)&&s.tagName.toLowerCase()===e.tagName.toLowerCase()}function A3(s,e){return qr(s)&&qr(e)&&hn(s)&&hn(e)}function C3(s,e,t){return e===t||(hn(e)&&hn(t)?e.data===t.data:!(!s.isBlockFiller(e)||!s.isBlockFiller(t)))}function qv(s,e){const t=s.data;if(t==e)return;const o=C(t,e);for(const a of o)a.type==="insert"?s.insertData(a.index,a.values.join("")):s.deleteData(a.index,a.howMany)}const y3=$v(b.document),x3=zv(b.document),E3=jv(b.document),qu="data-ck-unsafe-attribute-",Gv="data-ck-unsafe-element";class Gu{constructor(e,{blockFillerMode:t,renderingMode:o="editing"}={}){this._domToViewMapping=new WeakMap,this._viewToDomMapping=new WeakMap,this._fakeSelectionMapping=new WeakMap,this._rawContentElementMatcher=new Vi,this._inlineObjectElementMatcher=new Vi,this._elementsWithTemporaryCustomProperties=new Set,this.document=e,this.renderingMode=o,this.blockFillerMode=t||(o==="editing"?"br":"nbsp"),this.preElements=["pre"],this.blockElements=["address","article","aside","blockquote","caption","center","dd","details","dir","div","dl","dt","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","legend","li","main","menu","nav","ol","p","pre","section","summary","table","tbody","td","tfoot","th","thead","tr","ul"],this.inlineObjectElements=["object","iframe","input","button","textarea","select","option","video","embed","audio","img","canvas"],this.unsafeElements=["script","style"],this._domDocument=this.renderingMode==="editing"?b.document:b.document.implementation.createHTMLDocument("")}bindFakeSelection(e,t){this._fakeSelectionMapping.set(e,new wi(t))}fakeSelectionToView(e){return this._fakeSelectionMapping.get(e)}bindElements(e,t){this._domToViewMapping.set(e,t),this._viewToDomMapping.set(t,e)}unbindDomElement(e){const t=this._domToViewMapping.get(e);if(t){this._domToViewMapping.delete(e),this._viewToDomMapping.delete(t);for(const o of Array.from(e.children))this.unbindDomElement(o)}}bindDocumentFragments(e,t){this._domToViewMapping.set(e,t),this._viewToDomMapping.set(t,e)}shouldRenderAttribute(e,t,o){return this.renderingMode==="data"||!(e=e.toLowerCase()).startsWith("on")&&(e!=="srcdoc"||!t.match(/\bon\S+\s*=|javascript:|<\s*\/*script/i))&&(o==="img"&&(e==="src"||e==="srcset")||o==="source"&&e==="srcset"||!t.match(/^\s*(javascript:|data:(image\/svg|text\/x?html))/i))}setContentOf(e,t){if(this.renderingMode==="data")return void(e.innerHTML=t);const o=new DOMParser().parseFromString(t,"text/html"),a=o.createDocumentFragment(),c=o.body.childNodes;for(;c.length>0;)a.appendChild(c[0]);const d=o.createTreeWalker(a,NodeFilter.SHOW_ELEMENT),h=[];let g;for(;g=d.nextNode();)h.push(g);for(const k of h){for(const y of k.getAttributeNames())this.setDomElementAttribute(k,y,k.getAttribute(y));const w=k.tagName.toLowerCase();this._shouldRenameElement(w)&&(Yv(w),k.replaceWith(this._createReplacementDomElement(w,k)))}for(;e.firstChild;)e.firstChild.remove();e.append(a)}viewToDom(e,t={}){if(e.is("$text")){const o=this._processDataFromViewText(e);return this._domDocument.createTextNode(o)}{const o=e;if(this.mapViewToDom(o)){if(!o.getCustomProperty("editingPipeline:doNotReuseOnce"))return this.mapViewToDom(o);this._elementsWithTemporaryCustomProperties.add(o)}let a;if(o.is("documentFragment"))a=this._domDocument.createDocumentFragment(),t.bind&&this.bindDocumentFragments(a,o);else{if(o.is("uiElement"))return a=o.name==="$comment"?this._domDocument.createComment(o.getCustomProperty("$rawContent")):o.render(this._domDocument,this),t.bind&&this.bindElements(a,o),a;this._shouldRenameElement(o.name)?(Yv(o.name),a=this._createReplacementDomElement(o.name)):a=o.hasAttribute("xmlns")?this._domDocument.createElementNS(o.getAttribute("xmlns"),o.name):this._domDocument.createElement(o.name),o.is("rawElement")&&o.render(a,this),t.bind&&this.bindElements(a,o);for(const c of o.getAttributeKeys())this.setDomElementAttribute(a,c,o.getAttribute(c),o)}if(t.withChildren!==!1)for(const c of this.viewChildrenToDom(o,t))a instanceof HTMLTemplateElement?a.content.appendChild(c):a.appendChild(c);return a}}setDomElementAttribute(e,t,o,a){const c=this.shouldRenderAttribute(t,o,e.tagName.toLowerCase())||a&&a.shouldRenderUnsafeAttribute(t);c||H("domconverter-unsafe-attribute-detected",{domElement:e,key:t,value:o}),function(d){try{b.document.createAttribute(d)}catch{return!1}return!0}(t)?(e.hasAttribute(t)&&!c?e.removeAttribute(t):e.hasAttribute(qu+t)&&c&&e.removeAttribute(qu+t),e.setAttribute(c?t:qu+t,o)):H("domconverter-invalid-attribute-detected",{domElement:e,key:t,value:o})}removeDomElementAttribute(e,t){t!=Gv&&(e.removeAttribute(t),e.removeAttribute(qu+t))}*viewChildrenToDom(e,t={}){const o=e.getFillerOffset&&e.getFillerOffset();let a=0;for(const c of e.getChildren()){o===a&&(yield this._getBlockFiller());const d=c.is("element")&&!!c.getCustomProperty("dataPipeline:transparentRendering")&&!On(c.getAttributes());d&&this.renderingMode=="data"?yield*this.viewChildrenToDom(c,t):(d&&H("domconverter-transparent-rendering-unsupported-in-editing-pipeline",{viewElement:c}),yield this.viewToDom(c,t)),a++}o===a&&(yield this._getBlockFiller())}viewRangeToDom(e){const t=this.viewPositionToDom(e.start),o=this.viewPositionToDom(e.end),a=this._domDocument.createRange();return a.setStart(t.parent,t.offset),a.setEnd(o.parent,o.offset),a}viewPositionToDom(e){const t=e.parent;if(t.is("$text")){const o=this.findCorrespondingDomText(t);if(!o)return null;let a=e.offset;return No(o)&&(a+=vi),{parent:o,offset:a}}{let o,a,c;if(e.offset===0){if(o=this.mapViewToDom(t),!o)return null;c=o.childNodes[0]}else{const d=e.nodeBefore;if(a=d.is("$text")?this.findCorrespondingDomText(d):this.mapViewToDom(d),!a)return null;o=a.parentNode,c=a.nextSibling}return hn(c)&&No(c)?{parent:c,offset:vi}:{parent:o,offset:a?qc(a)+1:0}}}domToView(e,t={}){const o=[],a=this._domToView(e,t,o),c=a.next().value;return c?(a.next(),this._processDomInlineNodes(null,o,t),c.is("$text")&&c.data.length==0?null:c):null}*domChildrenToView(e,t={},o=[]){let a=[];a=e instanceof HTMLTemplateElement?[...e.content.childNodes]:[...e.childNodes];for(let c=0;c<a.length;c++){const d=a[c],h=this._domToView(d,t,o),g=h.next().value;g!==null&&(this._isBlockViewElement(g)&&this._processDomInlineNodes(e,o,t),yield g,h.next())}this._processDomInlineNodes(e,o,t)}domSelectionToView(e){if(function(a){if(!v.isGecko||!a.rangeCount)return!1;const c=a.getRangeAt(0).startContainer;try{Object.prototype.toString.call(c)}catch{return!0}return!1}(e))return new wi([]);if(e.rangeCount===1){let a=e.getRangeAt(0).startContainer;hn(a)&&(a=a.parentNode);const c=this.fakeSelectionToView(a);if(c)return c}const t=this.isDomSelectionBackward(e),o=[];for(let a=0;a<e.rangeCount;a++){const c=e.getRangeAt(a),d=this.domRangeToView(c);d&&o.push(d)}return new wi(o,{backward:t})}domRangeToView(e){const t=this.domPositionToView(e.startContainer,e.startOffset),o=this.domPositionToView(e.endContainer,e.endOffset);return t&&o?new tt(t,o):null}domPositionToView(e,t=0){if(this.isBlockFiller(e))return this.domPositionToView(e.parentNode,qc(e));const o=this.mapDomToView(e);if(o&&(o.is("uiElement")||o.is("rawElement")))return Oe._createBefore(o);if(hn(e)){if(tl(e))return this.domPositionToView(e.parentNode,qc(e));const a=this.findCorrespondingViewText(e);let c=t;return a?(No(e)&&(c-=vi,c=c<0?0:c),new Oe(a,c)):null}if(t===0){const a=this.mapDomToView(e);if(a)return new Oe(a,0)}else{const a=e.childNodes[t-1];if(hn(a)&&tl(a)||a&&this.isBlockFiller(a))return this.domPositionToView(a.parentNode,qc(a));const c=hn(a)?this.findCorrespondingViewText(a):this.mapDomToView(a);if(c&&c.parent)return new Oe(c.parent,c.index+1)}return null}mapDomToView(e){return this.getHostViewElement(e)||this._domToViewMapping.get(e)}findCorrespondingViewText(e){if(tl(e))return null;const t=this.getHostViewElement(e);if(t)return t;const o=e.previousSibling;if(o){if(!this.isElement(o))return null;const a=this.mapDomToView(o);if(a){const c=a.nextSibling;return c instanceof $t?c:null}}else{const a=this.mapDomToView(e.parentNode);if(a){const c=a.getChild(0);return c instanceof $t?c:null}}return null}mapViewToDom(e){return this._viewToDomMapping.get(e)}findCorrespondingDomText(e){const t=e.previousSibling;return t&&this.mapViewToDom(t)?this.mapViewToDom(t).nextSibling:!t&&e.parent&&this.mapViewToDom(e.parent)?this.mapViewToDom(e.parent).childNodes[0]:null}focus(e){const t=this.mapViewToDom(e);if(t&&t.ownerDocument.activeElement!==t){const{scrollX:o,scrollY:a}=b.window,c=[];Wv(t,d=>{const{scrollLeft:h,scrollTop:g}=d;c.push([h,g])}),t.focus(),Wv(t,d=>{const[h,g]=c.shift();d.scrollLeft=h,d.scrollTop=g}),b.window.scrollTo(o,a)}}_clearDomSelection(){const e=this.mapViewToDom(this.document.selection.editableElement);if(!e)return;const t=e.ownerDocument.defaultView.getSelection(),o=this.domSelectionToView(t);o&&o.rangeCount>0&&t.removeAllRanges()}isElement(e){return e&&e.nodeType==Node.ELEMENT_NODE}isDocumentFragment(e){return e&&e.nodeType==Node.DOCUMENT_FRAGMENT_NODE}isBlockFiller(e){return this.blockFillerMode=="br"?e.isEqualNode(y3):!(e.tagName!=="BR"||!Kv(e,this.blockElements)||e.parentNode.childNodes.length!==1)||e.isEqualNode(E3)||function(t,o){return t.isEqualNode(x3)&&Kv(t,o)&&t.parentNode.childNodes.length===1}(e,this.blockElements)}isDomSelectionBackward(e){if(e.isCollapsed)return!1;const t=this._domDocument.createRange();try{t.setStart(e.anchorNode,e.anchorOffset),t.setEnd(e.focusNode,e.focusOffset)}catch{return!1}const o=t.collapsed;return t.detach(),o}getHostViewElement(e){const t=function(o){const a=[];let c=o;for(;c&&c.nodeType!=Node.DOCUMENT_NODE;)a.unshift(c),c=c.parentNode;return a}(e);for(t.pop();t.length;){const o=t.pop(),a=this._domToViewMapping.get(o);if(a&&(a.is("uiElement")||a.is("rawElement")))return a}return null}isDomSelectionCorrect(e){return this._isDomSelectionPositionCorrect(e.anchorNode,e.anchorOffset)&&this._isDomSelectionPositionCorrect(e.focusNode,e.focusOffset)}registerRawContentMatcher(e){this._rawContentElementMatcher.add(e)}registerInlineObjectMatcher(e){this._inlineObjectElementMatcher.add(e)}_clearTemporaryCustomProperties(){for(const e of this._elementsWithTemporaryCustomProperties)e._removeCustomProperty("editingPipeline:doNotReuseOnce");this._elementsWithTemporaryCustomProperties.clear()}_getBlockFiller(){switch(this.blockFillerMode){case"nbsp":return zv(this._domDocument);case"markedNbsp":return jv(this._domDocument);case"br":return $v(this._domDocument)}}_isDomSelectionPositionCorrect(e,t){if(hn(e)&&No(e)&&t<vi||this.isElement(e)&&No(e.childNodes[t]))return!1;const o=this.mapDomToView(e);return!o||!o.is("uiElement")&&!o.is("rawElement")}*_domToView(e,t,o){if(this.isBlockFiller(e))return null;const a=this.getHostViewElement(e);if(a)return a;if(Gc(e)&&t.skipComments)return null;if(hn(e)){if(tl(e))return null;{const c=e.data;if(c==="")return null;const d=new $t(this.document,c);return o.push(d),d}}{let c=this.mapDomToView(e);if(c)return this._isInlineObjectElement(c)&&o.push(c),c;if(this.isDocumentFragment(e))c=new Ys(this.document),t.bind&&this.bindDocumentFragments(e,c);else{c=this._createViewElement(e,t),t.bind&&this.bindElements(e,c);const h=e.attributes;if(h)for(let g=h.length,k=0;k<g;k++)c._setAttribute(h[k].name,h[k].value);if(this._isViewElementWithRawContent(c,t))return c._setCustomProperty("$rawContent",e.innerHTML),this._isBlockViewElement(c)||o.push(c),c;if(Gc(e))return c._setCustomProperty("$rawContent",e.data),c}yield c;const d=[];if(t.withChildren!==!1)for(const h of this.domChildrenToView(e,t,d))c._appendChild(h);if(this._isInlineObjectElement(c))o.push(c);else for(const h of d)o.push(h)}}_processDomInlineNodes(e,t,o){if(!t.length||e&&!this.isDocumentFragment(e)&&!this._isBlockDomElement(e))return;let a=!1;for(let c=0;c<t.length;c++){const d=t[c];if(!d.is("$text")){a=!1;continue}let h,g=!1;if(S3(d,this.preElements))h=Vv(d.data);else{h=d.data.replace(/[ \n\t\r]{1,}/g," "),g=/[^\S\u00A0]/.test(h.charAt(h.length-1));const k=c>0?t[c-1]:null,w=c+1<t.length?t[c+1]:null,y=!k||k.is("element")&&k.name=="br"||a,S=!w&&!No(d.data);o.withChildren!==!1&&(y&&(h=h.replace(/^ /,"")),S&&(h=h.replace(/ $/,""))),h=Vv(h),h=h.replace(/ \u00A0/g,"  ");const D=w&&w.is("element")&&w.name!="br",M=w&&w.is("$text")&&w.data.charAt(0)==" ";(/[ \u00A0]\u00A0$/.test(h)||!w||D||M)&&(h=h.replace(/\u00A0$/," ")),(y||k&&k.is("element")&&k.name!="br")&&(h=h.replace(/^\u00A0/," "))}h.length==0&&d.parent?(d._remove(),t.splice(c,1),c--):(d._data=h,a=g)}t.length=0}_processDataFromViewText(e){let t=e.data;if(e.getAncestors().some(o=>this.preElements.includes(o.name)))return t;if(t.charAt(0)==" "){const o=this._getTouchingInlineViewNode(e,!1);!(o&&o.is("$textProxy")&&this._nodeEndsWithSpace(o))&&o||(t=" "+t.substr(1))}if(t.charAt(t.length-1)==" "){const o=this._getTouchingInlineViewNode(e,!0),a=o&&o.is("$textProxy")&&o.data.charAt(0)==" ";t.charAt(t.length-2)!=" "&&o&&!a||(t=t.substr(0,t.length-1)+" ")}return t.replace(/ {2}/g,"  ")}_nodeEndsWithSpace(e){if(e.getAncestors().some(o=>this.preElements.includes(o.name)))return!1;const t=this._processDataFromViewText(e);return t.charAt(t.length-1)==" "}_getTouchingInlineViewNode(e,t){const o=new Ws({startPosition:t?Oe._createAfter(e):Oe._createBefore(e),direction:t?"forward":"backward"});for(const a of o){if(a.item.is("element","br"))return null;if(this._isInlineObjectElement(a.item))return a.item;if(a.item.is("containerElement"))return null;if(a.item.is("$textProxy"))return a.item}return null}_isBlockDomElement(e){return this.isElement(e)&&this.blockElements.includes(e.tagName.toLowerCase())}_isBlockViewElement(e){return e.is("element")&&this.blockElements.includes(e.name)}_isInlineObjectElement(e){return!!e.is("element")&&(e.name=="br"||this.inlineObjectElements.includes(e.name)||!!this._inlineObjectElementMatcher.match(e))}_createViewElement(e,t){if(Gc(e))return new Uu(this.document,"$comment");const o=t.keepOriginalCase?e.tagName:e.tagName.toLowerCase();return new Po(this.document,o)}_isViewElementWithRawContent(e,t){return t.withChildren!==!1&&e.is("element")&&!!this._rawContentElementMatcher.match(e)}_shouldRenameElement(e){const t=e.toLowerCase();return this.renderingMode==="editing"&&this.unsafeElements.includes(t)}_createReplacementDomElement(e,t){const o=this._domDocument.createElement("span");if(o.setAttribute(Gv,e),t){for(;t.firstChild;)o.appendChild(t.firstChild);for(const a of t.getAttributeNames())o.setAttribute(a,t.getAttribute(a))}return o}}function S3(s,e){return s.getAncestors().some(t=>t.is("element")&&e.includes(t.name))}function Wv(s,e){let t=s;for(;t;)e(t),t=t.parentElement}function Kv(s,e){const t=s.parentNode;return!!t&&!!t.tagName&&e.includes(t.tagName.toLowerCase())}function Yv(s){s==="script"&&H("domconverter-unsafe-script-element-detected"),s==="style"&&H("domconverter-unsafe-style-element-detected")}class Hi extends Qo(){constructor(e){super(),this._isEnabled=!1,this.view=e,this.document=e.document}get isEnabled(){return this._isEnabled}enable(){this._isEnabled=!0}disable(){this._isEnabled=!1}destroy(){this.disable(),this.stopListening()}checkShouldIgnoreEventFromTarget(e){return e&&e.nodeType===3&&(e=e.parentNode),!(!e||e.nodeType!==1)&&e.matches("[data-cke-ignore-events], [data-cke-ignore-events] *")}}const Qv=tv(function(s,e){Ri(e,bi(e),s)});class nl{constructor(e,t,o){this.view=e,this.document=e.document,this.domEvent=t,this.domTarget=t.target,Qv(this,o)}get target(){return this.view.domConverter.mapDomToView(this.domTarget)}preventDefault(){this.domEvent.preventDefault()}stopPropagation(){this.domEvent.stopPropagation()}}class Wr extends Hi{constructor(){super(...arguments),this.useCapture=!1}observe(e){(typeof this.domEventType=="string"?[this.domEventType]:this.domEventType).forEach(t=>{this.listenTo(e,t,(o,a)=>{this.isEnabled&&!this.checkShouldIgnoreEventFromTarget(a.target)&&this.onDomEvent(a)},{useCapture:this.useCapture})})}stopObserving(e){this.stopListening(e)}fire(e,t,o){this.isEnabled&&this.document.fire(e,new nl(this.view,t,o))}}class T3 extends Wr{constructor(){super(...arguments),this.domEventType=["keydown","keyup"]}onDomEvent(e){const t={keyCode:e.keyCode,altKey:e.altKey,ctrlKey:e.ctrlKey,shiftKey:e.shiftKey,metaKey:e.metaKey,get keystroke(){return Qa(this)}};this.fire(e.type,e,t)}}const Dm=function(){return Ne.Date.now()};var D3=/\s/;const I3=function(s){for(var e=s.length;e--&&D3.test(s.charAt(e)););return e};var M3=/^\s+/;const O3=function(s){return s&&s.slice(0,I3(s)+1).replace(M3,"")};var B3=/^[-+]0x[0-9a-f]+$/i,P3=/^0b[01]+$/i,N3=/^0o[0-7]+$/i,L3=parseInt;const Zv=function(s){if(typeof s=="number")return s;if(zu(s))return NaN;if(Ve(s)){var e=typeof s.valueOf=="function"?s.valueOf():s;s=Ve(e)?e+"":e}if(typeof s!="string")return s===0?s:+s;s=O3(s);var t=P3.test(s);return t||N3.test(s)?L3(s.slice(2),t?2:8):B3.test(s)?NaN:+s};var R3=Math.max,F3=Math.min;const ol=function(s,e,t){var o,a,c,d,h,g,k=0,w=!1,y=!1,S=!0;if(typeof s!="function")throw new TypeError("Expected a function");function D(Z){var se=o,me=a;return o=a=void 0,k=Z,d=s.apply(me,se)}function M(Z){var se=Z-g;return g===void 0||se>=e||se<0||y&&Z-k>=c}function R(){var Z=Dm();if(M(Z))return j(Z);h=setTimeout(R,function(se){var me=e-(se-g);return y?F3(me,c-(se-k)):me}(Z))}function j(Z){return h=void 0,S&&o?D(Z):(o=a=void 0,d)}function G(){var Z=Dm(),se=M(Z);if(o=arguments,a=this,g=Z,se){if(h===void 0)return function(me){return k=me,h=setTimeout(R,e),w?D(me):d}(g);if(y)return clearTimeout(h),h=setTimeout(R,e),D(g)}return h===void 0&&(h=setTimeout(R,e)),d}return e=Zv(e)||0,Ve(t)&&(w=!!t.leading,c=(y="maxWait"in t)?R3(Zv(t.maxWait)||0,e):c,S="trailing"in t?!!t.trailing:S),G.cancel=function(){h!==void 0&&clearTimeout(h),k=0,o=g=a=h=void 0},G.flush=function(){return h===void 0?d:j(Dm())},G};class z3 extends Hi{constructor(e){super(e),this._fireSelectionChangeDoneDebounced=ol(t=>{this.document.fire("selectionChangeDone",t)},200)}observe(){const e=this.document;e.on("arrowKey",(t,o)=>{e.selection.isFake&&this.isEnabled&&o.preventDefault()},{context:"$capture"}),e.on("arrowKey",(t,o)=>{e.selection.isFake&&this.isEnabled&&this._handleSelectionMove(o.keyCode)},{priority:"lowest"})}stopObserving(){}destroy(){super.destroy(),this._fireSelectionChangeDoneDebounced.cancel()}_handleSelectionMove(e){const t=this.document.selection,o=new wi(t.getRanges(),{backward:t.isBackward,fake:!1});e!=wt.arrowleft&&e!=wt.arrowup||o.setTo(o.getFirstPosition()),e!=wt.arrowright&&e!=wt.arrowdown||o.setTo(o.getLastPosition());const a={oldSelection:t,newSelection:o,domSelection:null};this.document.fire("selectionChange",a),this._fireSelectionChangeDoneDebounced(a)}}const j3=function(s){return this.__data__.set(s,"__lodash_hash_undefined__"),this},$3=function(s){return this.__data__.has(s)};function Wu(s){var e=-1,t=s==null?0:s.length;for(this.__data__=new Ko;++e<t;)this.add(s[e])}Wu.prototype.add=Wu.prototype.push=j3,Wu.prototype.has=$3;const V3=Wu,H3=function(s,e){for(var t=-1,o=s==null?0:s.length;++t<o;)if(e(s[t],t,s))return!0;return!1},U3=function(s,e){return s.has(e)},Jv=function(s,e,t,o,a,c){var d=1&t,h=s.length,g=e.length;if(h!=g&&!(d&&g>h))return!1;var k=c.get(s),w=c.get(e);if(k&&w)return k==e&&w==s;var y=-1,S=!0,D=2&t?new V3:void 0;for(c.set(s,e),c.set(e,s);++y<h;){var M=s[y],R=e[y];if(o)var j=d?o(R,M,y,e,s,c):o(M,R,y,s,e,c);if(j!==void 0){if(j)continue;S=!1;break}if(D){if(!H3(e,function(G,Z){if(!U3(D,Z)&&(M===G||a(M,G,t,o,c)))return D.push(Z)})){S=!1;break}}else if(M!==R&&!a(M,R,t,o,c)){S=!1;break}}return c.delete(s),c.delete(e),S},q3=function(s){var e=-1,t=Array(s.size);return s.forEach(function(o,a){t[++e]=[a,o]}),t},G3=function(s){var e=-1,t=Array(s.size);return s.forEach(function(o){t[++e]=o}),t};var Xv=He?He.prototype:void 0,Im=Xv?Xv.valueOf:void 0;const W3=function(s,e,t,o,a,c,d){switch(t){case"[object DataView]":if(s.byteLength!=e.byteLength||s.byteOffset!=e.byteOffset)return!1;s=s.buffer,e=e.buffer;case"[object ArrayBuffer]":return!(s.byteLength!=e.byteLength||!c(new Su(s),new Su(e)));case"[object Boolean]":case"[object Date]":case"[object Number]":return Ni(+s,+e);case"[object Error]":return s.name==e.name&&s.message==e.message;case"[object RegExp]":case"[object String]":return s==e+"";case"[object Map]":var h=q3;case"[object Set]":var g=1&o;if(h||(h=G3),s.size!=e.size&&!g)return!1;var k=d.get(s);if(k)return k==e;o|=2,d.set(s,e);var w=Jv(h(s),h(e),o,a,c,d);return d.delete(s),w;case"[object Symbol]":if(Im)return Im.call(s)==Im.call(e)}return!1};var K3=Object.prototype.hasOwnProperty;const Y3=function(s,e,t,o,a,c){var d=1&t,h=qf(s),g=h.length;if(g!=qf(e).length&&!d)return!1;for(var k=g;k--;){var w=h[k];if(!(d?w in e:K3.call(e,w)))return!1}var y=c.get(s),S=c.get(e);if(y&&S)return y==e&&S==s;var D=!0;c.set(s,e),c.set(e,s);for(var M=d;++k<g;){var R=s[w=h[k]],j=e[w];if(o)var G=d?o(j,R,w,e,s,c):o(R,j,w,s,e,c);if(!(G===void 0?R===j||a(R,j,t,o,c):G)){D=!1;break}M||(M=w=="constructor")}if(D&&!M){var Z=s.constructor,se=e.constructor;Z==se||!("constructor"in s)||!("constructor"in e)||typeof Z=="function"&&Z instanceof Z&&typeof se=="function"&&se instanceof se||(D=!1)}return c.delete(s),c.delete(e),D};var e0="[object Arguments]",t0="[object Array]",Ku="[object Object]",n0=Object.prototype.hasOwnProperty;const Q3=function(s,e,t,o,a,c){var d=It(s),h=It(e),g=d?t0:Hc(s),k=h?t0:Hc(e),w=(g=g==e0?Ku:g)==Ku,y=(k=k==e0?Ku:k)==Ku,S=g==k;if(S&&zi(s)){if(!zi(e))return!1;d=!0,w=!1}if(S&&!w)return c||(c=new Gn),d||gt(s)?Jv(s,e,t,o,a,c):W3(s,e,g,t,o,a,c);if(!(1&t)){var D=w&&n0.call(s,"__wrapped__"),M=y&&n0.call(e,"__wrapped__");if(D||M){var R=D?s.value():s,j=M?e.value():e;return c||(c=new Gn),a(R,j,t,o,c)}}return!!S&&(c||(c=new Gn),Y3(s,e,t,o,a,c))},Yu=function s(e,t,o,a,c){return e===t||(e==null||t==null||!Bt(e)&&!Bt(t)?e!=e&&t!=t:Q3(e,t,o,a,s,c))},Z3=function(s,e,t){var o=(t=typeof t=="function"?t:void 0)?t(s,e):void 0;return o===void 0?Yu(s,e,void 0,t):!!o};class o0 extends Hi{constructor(e){super(e),this._config={childList:!0,characterData:!0,subtree:!0},this.domConverter=e.domConverter,this.renderer=e._renderer,this._domElements=new Set,this._mutationObserver=new window.MutationObserver(this._onMutations.bind(this))}flush(){this._onMutations(this._mutationObserver.takeRecords())}observe(e){this._domElements.add(e),this.isEnabled&&this._mutationObserver.observe(e,this._config)}stopObserving(e){if(this._domElements.delete(e),this.isEnabled){this._mutationObserver.disconnect();for(const t of this._domElements)this._mutationObserver.observe(t,this._config)}}enable(){super.enable();for(const e of this._domElements)this._mutationObserver.observe(e,this._config)}disable(){super.disable(),this._mutationObserver.disconnect()}destroy(){super.destroy(),this._mutationObserver.disconnect()}_onMutations(e){if(e.length===0)return;const t=this.domConverter,o=new Set,a=new Set;for(const d of e){const h=t.mapDomToView(d.target);h&&(h.is("uiElement")||h.is("rawElement")||d.type!=="childList"||this._isBogusBrMutation(d)||a.add(h))}for(const d of e){const h=t.mapDomToView(d.target);if((!h||!h.is("uiElement")&&!h.is("rawElement"))&&d.type==="characterData"){const g=t.findCorrespondingViewText(d.target);g&&!a.has(g.parent)?o.add(g):!g&&No(d.target)&&a.add(t.mapDomToView(d.target.parentNode))}}let c=!1;for(const d of o)c=!0,this.renderer.markToSync("text",d);for(const d of a){const h=t.mapViewToDom(d),g=Array.from(d.getChildren()),k=Array.from(t.domChildrenToView(h,{withChildren:!1}));Z3(g,k,J3)||(c=!0,this.renderer.markToSync("children",d))}c&&this.view.forceRender()}_isBogusBrMutation(e){let t=null;return e.nextSibling===null&&e.removedNodes.length===0&&e.addedNodes.length==1&&(t=this.domConverter.domToView(e.addedNodes[0],{withChildren:!1})),t&&t.is("element","br")}}function J3(s,e){if(!Array.isArray(s))return s===e||!(!s.is("$text")||!e.is("$text"))&&s.data===e.data}class Qu extends Wr{constructor(e){super(e),this._isFocusChanging=!1,this.domEventType=["focus","blur"],this.useCapture=!0;const t=this.document;t.on("focus",()=>{this._isFocusChanging=!0,this._renderTimeoutId=setTimeout(()=>{this.flush(),e.change(()=>{})},50)}),t.on("blur",(o,a)=>{const c=t.selection.editableElement;c!==null&&c!==a.target||(t.isFocused=!1,this._isFocusChanging=!1,e.change(()=>{}))})}flush(){this._isFocusChanging&&(this._isFocusChanging=!1,this.document.isFocused=!0)}onDomEvent(e){this.fire(e.type,e)}destroy(){this._renderTimeoutId&&clearTimeout(this._renderTimeoutId),super.destroy()}}class X3 extends Hi{constructor(e){super(e),this.mutationObserver=e.getObserver(o0),this.focusObserver=e.getObserver(Qu),this.selection=this.document.selection,this.domConverter=e.domConverter,this._documents=new WeakSet,this._fireSelectionChangeDoneDebounced=ol(t=>{this.document.fire("selectionChangeDone",t)},200),this._clearInfiniteLoopInterval=setInterval(()=>this._clearInfiniteLoop(),1e3),this._documentIsSelectingInactivityTimeoutDebounced=ol(()=>this.document.isSelecting=!1,5e3),this._loopbackCounter=0}observe(e){const t=e.ownerDocument,o=()=>{this.document.isSelecting&&(this._handleSelectionChange(null,t),this.document.isSelecting=!1,this._documentIsSelectingInactivityTimeoutDebounced.cancel())};this.listenTo(e,"selectstart",()=>{this.document.isSelecting=!0,this._documentIsSelectingInactivityTimeoutDebounced()},{priority:"highest"}),this.listenTo(e,"keydown",o,{priority:"highest",useCapture:!0}),this.listenTo(e,"keyup",o,{priority:"highest",useCapture:!0}),this._documents.has(t)||(this.listenTo(t,"mouseup",o,{priority:"highest",useCapture:!0}),this.listenTo(t,"selectionchange",(a,c)=>{this.document.isComposing&&!v.isAndroid||(this._handleSelectionChange(c,t),this._documentIsSelectingInactivityTimeoutDebounced())}),this._documents.add(t))}stopObserving(e){this.stopListening(e)}destroy(){super.destroy(),clearInterval(this._clearInfiniteLoopInterval),this._fireSelectionChangeDoneDebounced.cancel(),this._documentIsSelectingInactivityTimeoutDebounced.cancel()}_reportInfiniteLoop(){}_handleSelectionChange(e,t){if(!this.isEnabled)return;const o=t.defaultView.getSelection();if(this.checkShouldIgnoreEventFromTarget(o.anchorNode))return;this.mutationObserver.flush();const a=this.domConverter.domSelectionToView(o);if(a.rangeCount!=0){if(this.view.hasDomSelection=!0,this.focusObserver.flush(),!this.selection.isEqual(a)||!this.domConverter.isDomSelectionCorrect(o))if(++this._loopbackCounter>60)this._reportInfiniteLoop();else if(this.selection.isSimilar(a))this.view.forceRender();else{const c={oldSelection:this.selection,newSelection:a,domSelection:o};this.document.fire("selectionChange",c),this._fireSelectionChangeDoneDebounced(c)}}else this.view.hasDomSelection=!1}_clearInfiniteLoop(){this._loopbackCounter=0}}class eB extends Wr{constructor(e){super(e),this.domEventType=["compositionstart","compositionupdate","compositionend"];const t=this.document;t.on("compositionstart",()=>{t.isComposing=!0},{priority:"low"}),t.on("compositionend",()=>{t.isComposing=!1},{priority:"low"})}onDomEvent(e){this.fire(e.type,e,{data:e.data})}}class i0{constructor(e,t={}){this._files=t.cacheFiles?r0(e):null,this._native=e}get files(){return this._files||(this._files=r0(this._native)),this._files}get types(){return this._native.types}getData(e){return this._native.getData(e)}setData(e,t){this._native.setData(e,t)}set effectAllowed(e){this._native.effectAllowed=e}get effectAllowed(){return this._native.effectAllowed}set dropEffect(e){this._native.dropEffect=e}get dropEffect(){return this._native.dropEffect}setDragImage(e,t,o){this._native.setDragImage(e,t,o)}get isCanceled(){return this._native.dropEffect=="none"||!!this._native.mozUserCancelled}}function r0(s){const e=Array.from(s.files||[]),t=Array.from(s.items||[]);return e.length?e:t.filter(o=>o.kind==="file").map(o=>o.getAsFile())}class tB extends Wr{constructor(){super(...arguments),this.domEventType="beforeinput"}onDomEvent(e){const t=e.getTargetRanges(),o=this.view,a=o.document;let c=null,d=null,h=[];if(e.dataTransfer&&(c=new i0(e.dataTransfer)),e.data!==null?d=e.data:c&&(d=c.getData("text/plain")),a.selection.isFake)h=Array.from(a.selection.getRanges());else if(t.length)h=t.map(g=>{const k=o.domConverter.domPositionToView(g.startContainer,g.startOffset),w=o.domConverter.domPositionToView(g.endContainer,g.endOffset);return k?o.createRange(k,w):w?o.createRange(w):void 0}).filter(g=>!!g);else if(v.isAndroid){const g=e.target.ownerDocument.defaultView.getSelection();h=Array.from(o.domConverter.domSelectionToView(g).getRanges())}if(v.isAndroid&&e.inputType=="insertCompositionText"&&d&&d.endsWith(`
`))this.fire(e.type,e,{inputType:"insertParagraph",targetRanges:[o.createRange(h[0].end)]});else if(e.inputType=="insertText"&&d&&d.includes(`
`,isColorInherited:!1}),o.extendTemplate({attributes:{style:{width:"53px",height:"10px"}}}),this.setTemplate({tag:"div",attributes:{class:["ck","ck-powered-by"],"aria-hidden":!0},children:[{tag:"a",attributes:{href:"https://ckeditor.com/?utm_source=ckeditor&utm_medium=referral&utm_campaign=701Dn000000hVgmIAE_powered_by_ckeditor_logo",target:"_blank",tabindex:"-1"},children:[...t?[{tag:"span",attributes:{class:["ck","ck-powered-by__label"]},children:[t]}]:[],o],on:{dragstart:a.to(c=>c.preventDefault())}}]})}}function gC(s,e,t){return(o,a)=>{const c=new ft(s);if(c.width<nL||c.height<tL)return null;let d;d=e.position==="inside"?c.bottom-a.height:c.bottom-a.height/2,d-=e.verticalOffset;const h=t(c,a),g=o.clone().moveTo(h,d).getIntersection(a.clone().moveTo(h,d)).getVisible();return!g||g.getArea()<a.getArea()?null:{top:d,left:h,name:`position_${e.position}-side_${e.side}`,config:{withArrow:!1}}}}function bC(s){const e=s.config.get("ui.poweredBy"),t=e&&e.position||"border";return eL({position:t,label:oL,verticalOffset:t==="inside"?5:0,horizontalOffset:5,side:s.locale.contentLanguageDirection==="ltr"?"right":"left"},e)}var kC=u(1801),sL={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};Ie()(kC.A,sL),kC.A.locals;const _C={POLITE:"polite",ASSERTIVE:"assertive"};class aL{constructor(e){this.editor=e,e.once("ready",()=>{for(const t of Object.values(_C))this.announce("",t)})}announce(e,t=_C.POLITE){const o=this.editor;if(!o.ui.view)return;this.view||(this.view=new lL(o.locale),o.ui.view.body.add(this.view));const{politeness:a,isUnsafeHTML:c}=typeof t=="string"?{politeness:t}:t;let d=this.view.regionViews.find(h=>h.politeness===a);d||(d=new cL(o,a),this.view.regionViews.add(d)),d.announce({announcement:e,isUnsafeHTML:c})}}class lL extends Ge{constructor(e){super(e),this.regionViews=this.createCollection(),this.setTemplate({tag:"div",attributes:{class:["ck","ck-aria-live-announcer"]},children:this.regionViews})}}class cL extends Ge{constructor(e,t){super(e.locale),this.setTemplate({tag:"div",attributes:{role:"region","aria-live":t,"aria-relevant":"additions"},children:[{tag:"ul",attributes:{class:["ck","ck-aria-live-region-list"]}}]}),e.on("destroy",()=>{this._pruneAnnouncementsInterval!==null&&(clearInterval(this._pruneAnnouncementsInterval),this._pruneAnnouncementsInterval=null)}),this.politeness=t,this._domConverter=e.data.htmlProcessor.domConverter,this._pruneAnnouncementsInterval=setInterval(()=>{this.element&&this._listElement.firstChild&&this._listElement.firstChild.remove()},5e3)}announce({announcement:e,isUnsafeHTML:t}){if(!e.trim().length)return;const o=document.createElement("li");t?this._domConverter.setContentOf(o,e):o.innerText=e,this._listElement.appendChild(o)}get _listElement(){return this.element.querySelector("ul")}}var dL=Object.defineProperty,wC=Object.getOwnPropertySymbols,uL=Object.prototype.hasOwnProperty,hL=Object.prototype.propertyIsEnumerable,vC=(s,e,t)=>e in s?dL(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t;class pL extends K(){constructor(e){super(),this.isReady=!1,this._editableElementsMap=new Map,this._focusableToolbarDefinitions=[];const t=e.editing.view;this.editor=e,this.componentFactory=new BN(e),this.focusTracker=new Bn,this.tooltipManager=new dh(e),this.poweredBy=new iL(e),this.ariaLiveAnnouncer=new aL(e),this.set("viewportOffset",this._readViewportOffsetFromConfig()),this.once("ready",()=>{this.isReady=!0}),this.listenTo(t.document,"layoutChanged",this.update.bind(this)),this.listenTo(t,"scrollToTheSelection",this._handleScrollToTheSelection.bind(this)),this._initFocusTracking()}get element(){return null}update(){this.fire("update")}destroy(){this.stopListening(),this.focusTracker.destroy(),this.tooltipManager.destroy(this.editor),this.poweredBy.destroy();for(const e of this._editableElementsMap.values())e.ckeditorInstance=null,this.editor.keystrokes.stopListening(e);this._editableElementsMap=new Map,this._focusableToolbarDefinitions=[]}setEditableElement(e,t){this._editableElementsMap.set(e,t),t.ckeditorInstance||(t.ckeditorInstance=this.editor),this.focusTracker.add(t);const o=()=>{this.editor.editing.view.getDomRoot(e)||this.editor.keystrokes.listenTo(t)};this.isReady?o():this.once("ready",o)}removeEditableElement(e){const t=this._editableElementsMap.get(e);t&&(this._editableElementsMap.delete(e),this.editor.keystrokes.stopListening(t),this.focusTracker.remove(t),t.ckeditorInstance=null)}getEditableElement(e="main"){return this._editableElementsMap.get(e)}getEditableElementsNames(){return this._editableElementsMap.keys()}addToolbar(e,t={}){e.isRendered?(this.focusTracker.add(e.element),this.editor.keystrokes.listenTo(e.element)):e.once("render",()=>{this.focusTracker.add(e.element),this.editor.keystrokes.listenTo(e.element)}),this._focusableToolbarDefinitions.push({toolbarView:e,options:t})}get _editableElements(){return console.warn("editor-ui-deprecated-editable-elements: The EditorUI#_editableElements property has been deprecated and will be removed in the near future.",{editorUI:this}),this._editableElementsMap}_readViewportOffsetFromConfig(){const e=this.editor,t=e.config.get("ui.viewportOffset");if(t)return t;const o=e.config.get("toolbar.viewportTopOffset");return o?(console.warn("editor-ui-deprecated-viewport-offset-config: The `toolbar.vieportTopOffset` configuration option is deprecated. It will be removed from future CKEditor versions. Use `ui.viewportOffset.top` instead."),{top:o}):{top:0}}_initFocusTracking(){const e=this.editor,t=e.editing.view;let o,a;e.keystrokes.set("Alt+F10",(c,d)=>{const h=this.focusTracker.focusedElement;Array.from(this._editableElementsMap.values()).includes(h)&&!Array.from(t.domRoots.values()).includes(h)&&(o=h);const g=this._getCurrentFocusedToolbarDefinition();g&&a||(a=this._getFocusableCandidateToolbarDefinitions());for(let k=0;k<a.length;k++){const w=a.shift();if(a.push(w),w!==g&&this._focusFocusableCandidateToolbar(w)){g&&g.options.afterBlur&&g.options.afterBlur();break}}d()}),e.keystrokes.set("Esc",(c,d)=>{const h=this._getCurrentFocusedToolbarDefinition();h&&(o?(o.focus(),o=null):e.editing.view.focus(),h.options.afterBlur&&h.options.afterBlur(),d())})}_getFocusableCandidateToolbarDefinitions(){const e=[];for(const t of this._focusableToolbarDefinitions){const{toolbarView:o,options:a}=t;(Us(o.element)||a.beforeFocus)&&e.push(t)}return e.sort((t,o)=>AC(t)-AC(o)),e}_getCurrentFocusedToolbarDefinition(){for(const e of this._focusableToolbarDefinitions)if(e.toolbarView.element&&e.toolbarView.element.contains(this.focusTracker.focusedElement))return e;return null}_focusFocusableCandidateToolbar(e){const{toolbarView:t,options:{beforeFocus:o}}=e;return o&&o(),!!Us(t.element)&&(t.focus(),!0)}_handleScrollToTheSelection(e,t){const o=((a,c)=>{for(var d in c||(c={}))uL.call(c,d)&&vC(a,d,c[d]);if(wC)for(var d of wC(c))hL.call(c,d)&&vC(a,d,c[d]);return a})({top:0,bottom:0,left:0,right:0},this.viewportOffset);t.viewportOffset.top+=o.top,t.viewportOffset.bottom+=o.bottom,t.viewportOffset.left+=o.left,t.viewportOffset.right+=o.right}}function AC(s){const{toolbarView:e,options:t}=s;let o=10;return Us(e.element)&&o--,t.isContextual&&o--,o}var CC=u(1185),fL={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};Ie()(CC.A,fL),CC.A.locals;class mL extends Ge{constructor(e){super(e),this.body=new eN(e)}render(){super.render(),this.body.attachToDom()}destroy(){return this.body.detachFromDom(),super.destroy()}}class gL extends mL{constructor(e){super(e),this.top=this.createCollection(),this.main=this.createCollection(),this._voiceLabelView=this._createVoiceLabel(),this.setTemplate({tag:"div",attributes:{class:["ck","ck-reset","ck-editor","ck-rounded-corners"],role:"application",dir:e.uiLanguageDirection,lang:e.uiLanguage,"aria-labelledby":this._voiceLabelView.id},children:[this._voiceLabelView,{tag:"div",attributes:{class:["ck","ck-editor__top","ck-reset_all"],role:"presentation"},children:this.top},{tag:"div",attributes:{class:["ck","ck-editor__main"],role:"presentation"},children:this.main}]})}_createVoiceLabel(){const e=this.t,t=new th;return t.text=e("Rich Text Editor"),t.extendTemplate({attributes:{class:"ck-voice-label"}}),t}}class bL extends Ge{constructor(e,t,o){super(e),this.name=null,this.setTemplate({tag:"div",attributes:{class:["ck","ck-content","ck-editor__editable","ck-rounded-corners"],lang:e.contentLanguage,dir:e.contentLanguageDirection}}),this.set("isFocused",!1),this._editableElement=o,this._hasExternalElement=!!this._editableElement,this._editingView=t}render(){super.render(),this._hasExternalElement?this.template.apply(this.element=this._editableElement):this._editableElement=this.element,this.on("change:isFocused",()=>this._updateIsFocusedClasses()),this._updateIsFocusedClasses()}destroy(){this._hasExternalElement&&this.template.revert(this._editableElement),super.destroy()}get hasExternalElement(){return this._hasExternalElement}_updateIsFocusedClasses(){const e=this._editingView;function t(o){e.change(a=>{const c=e.document.getRoot(o.name);a.addClass(o.isFocused?"ck-focused":"ck-blurred",c),a.removeClass(o.isFocused?"ck-blurred":"ck-focused",c)})}e.isRenderingInProgress?function o(a){e.once("change:isRenderingInProgress",(c,d,h)=>{h?o(a):t(a)})}(this):t(this)}}class kL extends bL{constructor(e,t,o,a={}){super(e,t,o);const c=e.t;this.extendTemplate({attributes:{role:"textbox",class:"ck-editor__editable_inline"}}),this._generateLabel=a.label||(()=>c("Editor editing area: %0",this.name))}render(){super.render();const e=this._editingView;e.change(t=>{const o=e.document.getRoot(this.name);t.setAttribute("aria-label",this._generateLabel(this),o)})}}class ng extends Ru{static get pluginName(){return"Notification"}init(){this.on("show:warning",(e,t)=>{window.alert(t.message)},{priority:"lowest"})}showSuccess(e,t={}){this._showNotification({message:e,type:"success",namespace:t.namespace,title:t.title})}showInfo(e,t={}){this._showNotification({message:e,type:"info",namespace:t.namespace,title:t.title})}showWarning(e,t={}){this._showNotification({message:e,type:"warning",namespace:t.namespace,title:t.title})}_showNotification(e){const t=e.namespace?`show:${e.type}:${e.namespace}`:`show:${e.type}`;this.fire(t,{message:e.message,type:e.type,title:e.title||""})}}class yC extends K(){constructor(e,t){super(),t&&Qv(this,t),e&&this.set(e)}}var xC=u(991),_L={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};Ie()(xC.A,_L),xC.A.locals;var EC=u(5380),wL={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};Ie()(EC.A,wL),EC.A.locals;const hh=Ya("px");class ph extends Ce{constructor(e){super(e),this._viewToStack=new Map,this._idToStack=new Map,this._view=null,this._rotatorView=null,this._fakePanelsView=null,this.positionLimiter=()=>{const t=this.editor.editing.view,o=t.document.selection.editableElement;return o?t.domConverter.mapViewToDom(o.root):null},this.set("visibleView",null),this.set("_numberOfStacks",0),this.set("_singleViewMode",!1)}static get pluginName(){return"ContextualBalloon"}destroy(){super.destroy(),this._view&&this._view.destroy(),this._rotatorView&&this._rotatorView.destroy(),this._fakePanelsView&&this._fakePanelsView.destroy()}get view(){return this._view||this._createPanelView(),this._view}hasView(e){return Array.from(this._viewToStack.keys()).includes(e)}add(e){if(this._view||this._createPanelView(),this.hasView(e.view))throw new P("contextualballoon-add-view-exist",[this,e]);const t=e.stackId||"main";if(!this._idToStack.has(t))return this._idToStack.set(t,new Map([[e.view,e]])),this._viewToStack.set(e.view,this._idToStack.get(t)),this._numberOfStacks=this._idToStack.size,void(this._visibleStack&&!e.singleViewMode||this.showStack(t));const o=this._idToStack.get(t);e.singleViewMode&&this.showStack(t),o.set(e.view,e),this._viewToStack.set(e.view,o),o===this._visibleStack&&this._showView(e)}remove(e){if(!this.hasView(e))throw new P("contextualballoon-remove-view-not-exist",[this,e]);const t=this._viewToStack.get(e);this._singleViewMode&&this.visibleView===e&&(this._singleViewMode=!1),this.visibleView===e&&(t.size===1?this._idToStack.size>1?this._showNextStack():(this.view.hide(),this.visibleView=null,this._rotatorView.hideView()):this._showView(Array.from(t.values())[t.size-2])),t.size===1?(this._idToStack.delete(this._getStackId(t)),this._numberOfStacks=this._idToStack.size):t.delete(e),this._viewToStack.delete(e)}updatePosition(e){e&&(this._visibleStack.get(this.visibleView).position=e),this.view.pin(this._getBalloonPosition()),this._fakePanelsView.updatePosition()}showStack(e){this.visibleStack=e;const t=this._idToStack.get(e);if(!t)throw new P("contextualballoon-showstack-stack-not-exist",this);this._visibleStack!==t&&this._showView(Array.from(t.values()).pop())}_createPanelView(){this._view=new wo(this.editor.locale),this.editor.ui.view.body.add(this._view),this.editor.ui.focusTracker.add(this._view.element),this._rotatorView=this._createRotatorView(),this._fakePanelsView=this._createFakePanelsView()}get _visibleStack(){return this._viewToStack.get(this.visibleView)}_getStackId(e){return Array.from(this._idToStack.entries()).find(t=>t[1]===e)[0]}_showNextStack(){const e=Array.from(this._idToStack.values());let t=e.indexOf(this._visibleStack)+1;e[t]||(t=0),this.showStack(this._getStackId(e[t]))}_showPrevStack(){const e=Array.from(this._idToStack.values());let t=e.indexOf(this._visibleStack)-1;e[t]||(t=e.length-1),this.showStack(this._getStackId(e[t]))}_createRotatorView(){const e=new vL(this.editor.locale),t=this.editor.locale.t;return this.view.content.add(e),e.bind("isNavigationVisible").to(this,"_numberOfStacks",this,"_singleViewMode",(o,a)=>!a&&o>1),e.on("change:isNavigationVisible",()=>this.updatePosition(),{priority:"low"}),e.bind("counter").to(this,"visibleView",this,"_numberOfStacks",(o,a)=>{if(a<2)return"";const c=Array.from(this._idToStack.values()).indexOf(this._visibleStack)+1;return t("%0 of %1",[c,a])}),e.buttonNextView.on("execute",()=>{e.focusTracker.isFocused&&this.editor.editing.view.focus(),this._showNextStack()}),e.buttonPrevView.on("execute",()=>{e.focusTracker.isFocused&&this.editor.editing.view.focus(),this._showPrevStack()}),e}_createFakePanelsView(){const e=new AL(this.editor.locale,this.view);return e.bind("numberOfPanels").to(this,"_numberOfStacks",this,"_singleViewMode",(t,o)=>!o&&t>=2?Math.min(t-1,2):0),e.listenTo(this.view,"change:top",()=>e.updatePosition()),e.listenTo(this.view,"change:left",()=>e.updatePosition()),this.editor.ui.view.body.add(e),e}_showView({view:e,balloonClassName:t="",withArrow:o=!0,singleViewMode:a=!1}){this.view.class=t,this.view.withArrow=o,this._rotatorView.showView(e),this.visibleView=e,this.view.pin(this._getBalloonPosition()),this._fakePanelsView.updatePosition(),a&&(this._singleViewMode=!0)}_getBalloonPosition(){let e=Array.from(this._visibleStack.values()).pop().position;return e&&(e.limiter||(e=Object.assign({},e,{limiter:this.positionLimiter})),e=Object.assign({},e,{viewportOffsetConfig:this.editor.ui.viewportOffset})),e}}class vL extends Ge{constructor(e){super(e);const t=e.t,o=this.bindTemplate;this.set("isNavigationVisible",!0),this.focusTracker=new Bn,this.buttonPrevView=this._createButtonView(t("Previous"),it.previousArrow),this.buttonNextView=this._createButtonView(t("Next"),it.nextArrow),this.content=this.createCollection(),this.setTemplate({tag:"div",attributes:{class:["ck","ck-balloon-rotator"],"z-index":"-1"},children:[{tag:"div",attributes:{class:["ck-balloon-rotator__navigation",o.to("isNavigationVisible",a=>a?"":"ck-hidden")]},children:[this.buttonPrevView,{tag:"span",attributes:{class:["ck-balloon-rotator__counter"]},children:[{text:o.to("counter")}]},this.buttonNextView]},{tag:"div",attributes:{class:"ck-balloon-rotator__content"},children:this.content}]})}render(){super.render(),this.focusTracker.add(this.element)}destroy(){super.destroy(),this.focusTracker.destroy()}showView(e){this.hideView(),this.content.add(e)}hideView(){this.content.clear()}_createButtonView(e,t){const o=new St(this.locale);return o.set({label:e,icon:t,tooltip:!0}),o}}class AL extends Ge{constructor(e,t){super(e);const o=this.bindTemplate;this.set("top",0),this.set("left",0),this.set("height",0),this.set("width",0),this.set("numberOfPanels",0),this.content=this.createCollection(),this._balloonPanelView=t,this.setTemplate({tag:"div",attributes:{class:["ck-fake-panel",o.to("numberOfPanels",a=>a?"":"ck-hidden")],style:{top:o.to("top",hh),left:o.to("left",hh),width:o.to("width",hh),height:o.to("height",hh)}},children:this.content}),this.on("change:numberOfPanels",(a,c,d,h)=>{d>h?this._addPanels(d-h):this._removePanels(h-d),this.updatePosition()})}_addPanels(e){for(;e--;){const t=new Ge;t.setTemplate({tag:"div"}),this.content.add(t),this.registerChild(t)}}_removePanels(e){for(;e--;){const t=this.content.last;this.content.remove(t),this.deregisterChild(t),t.destroy()}}updatePosition(){if(this.numberOfPanels){const{top:e,left:t}=this._balloonPanelView,{width:o,height:a}=new ft(this._balloonPanelView.element);Object.assign(this,{top:e,left:t,width:o,height:a})}}}var SC=u(8298),CL={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};Ie()(SC.A,CL),SC.A.locals;const ll=Ya("px");class yL extends Ge{constructor(e){super(e);const t=this.bindTemplate;this.set("isActive",!1),this.set("isSticky",!1),this.set("limiterElement",null),this.set("limiterBottomOffset",50),this.set("viewportTopOffset",0),this.set("_marginLeft",null),this.set("_isStickyToTheBottomOfLimiter",!1),this.set("_stickyTopOffset",null),this.set("_stickyBottomOffset",null),this.content=this.createCollection(),this._contentPanelPlaceholder=new _i({tag:"div",attributes:{class:["ck","ck-sticky-panel__placeholder"],style:{display:t.to("isSticky",o=>o?"block":"none"),height:t.to("isSticky",o=>o?ll(this._contentPanelRect.height):null)}}}).render(),this.contentPanelElement=new _i({tag:"div",attributes:{class:["ck","ck-sticky-panel__content",t.if("isSticky","ck-sticky-panel__content_sticky"),t.if("_isStickyToTheBottomOfLimiter","ck-sticky-panel__content_sticky_bottom-limit")],style:{width:t.to("isSticky",o=>o?ll(this._contentPanelPlaceholder.getBoundingClientRect().width):null),top:t.to("_stickyTopOffset",o=>o&&ll(o)),bottom:t.to("_stickyBottomOffset",o=>o&&ll(o)),marginLeft:t.to("_marginLeft")}},children:this.content}).render(),this.setTemplate({tag:"div",attributes:{class:["ck","ck-sticky-panel"]},children:[this._contentPanelPlaceholder,this.contentPanelElement]})}render(){super.render(),this.checkIfShouldBeSticky(),this.listenTo(b.document,"scroll",()=>{this.checkIfShouldBeSticky()},{useCapture:!0}),this.listenTo(this,"change:isActive",()=>{this.checkIfShouldBeSticky()})}checkIfShouldBeSticky(){if(!this.limiterElement||!this.isActive)return void this._unstick();const e=new ft(this.limiterElement);let t=e.getVisible();if(t){const o=new ft(b.window);o.top+=this.viewportTopOffset,o.height-=this.viewportTopOffset,t=t.getIntersection(o)}if(t&&e.top<t.top){const o=t.top;if(o+this._contentPanelRect.height+this.limiterBottomOffset>t.bottom){const a=Math.max(e.bottom-t.bottom,0)+this.limiterBottomOffset;e.bottom-a>e.top+this._contentPanelRect.height?this._stickToBottomOfLimiter(a):this._unstick()}else this._contentPanelRect.height+this.limiterBottomOffset<e.height?this._stickToTopOfAncestors(o):this._unstick()}else this._unstick()}_stickToTopOfAncestors(e){this.isSticky=!0,this._isStickyToTheBottomOfLimiter=!1,this._stickyTopOffset=e,this._stickyBottomOffset=null,this._marginLeft=ll(-b.window.scrollX)}_stickToBottomOfLimiter(e){this.isSticky=!0,this._isStickyToTheBottomOfLimiter=!0,this._stickyTopOffset=null,this._stickyBottomOffset=e,this._marginLeft=ll(-b.window.scrollX)}_unstick(){this.isSticky=!1,this._isStickyToTheBottomOfLimiter=!1,this._stickyTopOffset=null,this._stickyBottomOffset=null,this._marginLeft=null}get _contentPanelRect(){return new ft(this.contentPanelElement)}}class xL extends ih{constructor(e,t){const o=e.t,a=Object.assign({},{showResetButton:!0,showIcon:!0,creator:ah},t);super(e,a.creator),this.label=t.label,this._viewConfig=a,this._viewConfig.showIcon&&(this.iconView=new fr,this.iconView.content=it.loupe,this.fieldWrapperChildren.add(this.iconView,0),this.extendTemplate({attributes:{class:"ck-search__query_with-icon"}})),this._viewConfig.showResetButton&&(this.resetButtonView=new St(e),this.resetButtonView.set({label:o("Clear"),icon:it.cancel,class:"ck-search__reset",isVisible:!1,tooltip:!0}),this.resetButtonView.on("execute",()=>{this.reset(),this.focus(),this.fire("reset")}),this.resetButtonView.bind("isVisible").to(this.fieldView,"isEmpty",c=>!c),this.fieldWrapperChildren.add(this.resetButtonView),this.extendTemplate({attributes:{class:"ck-search__query_with-reset"}}))}reset(){this.fieldView.reset(),this._viewConfig.showResetButton&&(this.resetButtonView.isVisible=!1)}}class EL extends Ge{constructor(){super();const e=this.bindTemplate;this.set({isVisible:!1,primaryText:"",secondaryText:""}),this.setTemplate({tag:"div",attributes:{class:["ck","ck-search__info",e.if("isVisible","ck-hidden",t=>!t)],tabindex:-1},children:[{tag:"span",children:[{text:[e.to("primaryText")]}]},{tag:"span",children:[{text:[e.to("secondaryText")]}]}]})}focus(){this.element.focus()}}class SL extends Ge{constructor(e){super(e),this.children=this.createCollection(),this.focusTracker=new Bn,this.setTemplate({tag:"div",attributes:{class:["ck","ck-search__results"],tabindex:-1},children:this.children}),this._focusCycler=new Xo({focusables:this.children,focusTracker:this.focusTracker})}render(){super.render();for(const e of this.children)this.focusTracker.add(e.element)}focus(){this._focusCycler.focusFirst()}focusFirst(){this._focusCycler.focusFirst()}focusLast(){this._focusCycler.focusLast()}}var TC=/[\\^$.*+?()[\]{}|]/g,TL=RegExp(TC.source);const DC=function(s){return(s=fm(s))&&TL.test(s)?s.replace(TC,"\\$&"):s};var IC=u(8107),DL={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};Ie()(IC.A,DL),IC.A.locals;var IL=Object.defineProperty,MC=Object.getOwnPropertySymbols,ML=Object.prototype.hasOwnProperty,OL=Object.prototype.propertyIsEnumerable,OC=(s,e,t)=>e in s?IL(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t;class BL extends Ge{constructor(e,t){super(e),this._config=t,this.filteredView=t.filteredView,this.queryView=this._createSearchTextQueryView(),this.focusTracker=new Bn,this.keystrokes=new io,this.resultsView=new SL(e),this.children=this.createCollection(),this.focusableChildren=this.createCollection([this.queryView,this.resultsView]),this.set("isEnabled",!0),this.set("resultsCount",0),this.set("totalItemsCount",0),t.infoView&&t.infoView.instance?this.infoView=t.infoView.instance:(this.infoView=new EL,this._enableDefaultInfoViewBehavior(),this.on("render",()=>{this.search("")})),this.resultsView.children.addMany([this.infoView,this.filteredView]),this.focusCycler=new Xo({focusables:this.focusableChildren,focusTracker:this.focusTracker,keystrokeHandler:this.keystrokes,actions:{focusPrevious:"shift + tab",focusNext:"tab"}}),this.on("search",(o,{resultsCount:a,totalItemsCount:c})=>{this.resultsCount=a,this.totalItemsCount=c}),this.setTemplate({tag:"div",attributes:{class:["ck","ck-search",t.class||null],tabindex:"-1"},children:this.children})}render(){super.render(),this.children.addMany([this.queryView,this.resultsView]);const e=t=>t.stopPropagation();for(const t of this.focusableChildren)this.focusTracker.add(t.element);this.keystrokes.listenTo(this.element),this.keystrokes.set("arrowright",e),this.keystrokes.set("arrowleft",e),this.keystrokes.set("arrowup",e),this.keystrokes.set("arrowdown",e)}focus(){this.queryView.focus()}reset(){this.queryView.reset(),this.search("")}search(e){const t=e?new RegExp(DC(e),"ig"):null,o=this.filteredView.filter(t);this.fire("search",((a,c)=>{for(var d in c||(c={}))ML.call(c,d)&&OC(a,d,c[d]);if(MC)for(var d of MC(c))OL.call(c,d)&&OC(a,d,c[d]);return a})({query:e},o))}_createSearchTextQueryView(){const e=new xL(this.locale,this._config.queryView);return this.listenTo(e.fieldView,"input",()=>{this.search(e.fieldView.element.value)}),e.on("reset",()=>this.reset()),e.bind("isEnabled").to(this),e}_enableDefaultInfoViewBehavior(){const e=this.locale.t,t=this.infoView;function o(a,{query:c,resultsCount:d,totalItemsCount:h}){return typeof a=="function"?a(c,d,h):a}this.on("search",(a,c)=>{if(c.resultsCount)t.set({isVisible:!1});else{const d=this._config.infoView&&this._config.infoView.text;let h,g;c.totalItemsCount?d&&d.notFound?(h=d.notFound.primary,g=d.notFound.secondary):(h=e("No results found"),g=""):d&&d.noSearchableItems?(h=d.noSearchableItems.primary,g=d.noSearchableItems.secondary):(h=e("No searchable items"),g=""),t.set({primaryText:o(h,c),secondaryText:o(g,c),isVisible:!0})}})}}var BC=u(5727),PL={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};Ie()(BC.A,PL),BC.A.locals;const og=class extends BL{constructor(s,e){super(s,e),this._config=e;const t=Ya("px");this.extendTemplate({attributes:{class:["ck-autocomplete"]}});const o=this.resultsView.bindTemplate;this.resultsView.set("isVisible",!1),this.resultsView.set("_position","s"),this.resultsView.set("_width",0),this.resultsView.extendTemplate({attributes:{class:[o.if("isVisible","ck-hidden",a=>!a),o.to("_position",a=>`ck-search__results_${a}`)],style:{width:o.to("_width",t)}}}),this.focusTracker.on("change:isFocused",(a,c,d)=>{this._updateResultsVisibility(),d?this.resultsView.element.scrollTop=0:e.resetOnBlur&&this.queryView.reset()}),this.on("search",()=>{this._updateResultsVisibility(),this._updateResultsViewWidthAndPosition()}),this.keystrokes.set("esc",(a,c)=>{this.resultsView.isVisible&&(this.queryView.focus(),this.resultsView.isVisible=!1,c())}),this.listenTo(b.document,"scroll",()=>{this._updateResultsViewWidthAndPosition()}),this.on("change:isEnabled",()=>{this._updateResultsVisibility()}),this.filteredView.on("execute",(a,{value:c})=>{this.focus(),this.reset(),this.queryView.fieldView.value=this.queryView.fieldView.element.value=c,this.resultsView.isVisible=!1}),this.resultsView.on("change:isVisible",()=>{this._updateResultsViewWidthAndPosition()})}_updateResultsViewWidthAndPosition(){if(!this.resultsView.isVisible)return;this.resultsView._width=new ft(this.queryView.fieldView.element).width;const s=og._getOptimalPosition({element:this.resultsView.element,target:this.queryView.element,fitInViewport:!0,positions:og.defaultResultsPositions});this.resultsView._position=s?s.name:"s"}_updateResultsVisibility(){const s=this._config.queryMinChars===void 0?0:this._config.queryMinChars,e=this.queryView.fieldView.element.value.length;this.resultsView.isVisible=this.focusTracker.isFocused&&this.isEnabled&&e>=s}};let PC=og;PC.defaultResultsPositions=[s=>({top:s.bottom,left:s.left,name:"s"}),(s,e)=>({top:s.top-e.height,left:s.left,name:"n"})],PC._getOptimalPosition=Mu;var NC=u(9529),NL={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};Ie()(NC.A,NL),NC.A.locals;var LC=u(109),LL={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};Ie()(LC.A,LL),LC.A.locals;var RC=u(2710),RL={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};Ie()(RC.A,RL),RC.A.locals;var FC=u(3344),FL={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};Ie()(FC.A,FL),FC.A.locals;class zL extends St{constructor(e){super(e);const t=this.bindTemplate;this.set({withText:!0,role:"menuitem"}),this.arrowView=this._createArrowView(),this.extendTemplate({attributes:{class:["ck-menu-bar__menu__button"],"aria-haspopup":!0,"aria-expanded":this.bindTemplate.to("isOn",o=>String(o)),"data-cke-tooltip-disabled":t.to("isOn")},on:{mouseenter:t.to("mouseenter")}})}render(){super.render(),this.children.add(this.arrowView)}_createArrowView(){const e=new fr;return e.content=oh,e.extendTemplate({attributes:{class:"ck-menu-bar__menu__button__arrow"}}),e}}var zC=u(9481),jL={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};Ie()(zC.A,jL),zC.A.locals;class ig extends al{constructor(e,t){super(e);const o=this.bindTemplate;this.extendTemplate({attributes:{class:["ck-menu-bar__menu__item"]},on:{mouseenter:o.to("mouseenter")}}),this.delegate("mouseenter").to(t)}}var $L=Object.defineProperty,jC=Object.getOwnPropertySymbols,VL=Object.prototype.hasOwnProperty,HL=Object.prototype.propertyIsEnumerable,$C=(s,e,t)=>e in s?$L(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t,VC=(s,e)=>{for(var t in e||(e={}))VL.call(e,t)&&$C(s,t,e[t]);if(jC)for(var t of jC(e))HL.call(e,t)&&$C(s,t,e[t]);return s};const dd={toggleMenusAndFocusItemsOnHover(s){s.on("menu:mouseenter",e=>{if(s.isOpen){for(const t of s.menus){const o=e.path[0],a=o instanceof ig&&o.children.first===t;t.isOpen=(e.path.includes(t)||a)&&t.isEnabled}e.source.focus()}})},focusCycleMenusOnArrows(s){const e=s.locale.uiLanguageDirection==="rtl";function t(o,a){const c=s.children.getIndex(o),d=o.isOpen,h=s.children.length,g=s.children.get((c+h+a)%h);o.isOpen=!1,d&&(g.isOpen=!0),g.buttonView.focus()}s.on("menu:arrowright",o=>{t(o.source,e?-1:1)}),s.on("menu:arrowleft",o=>{t(o.source,e?1:-1)})},closeMenusWhenTheBarCloses(s){s.on("change:isOpen",()=>{s.isOpen||s.menus.forEach(e=>{e.isOpen=!1})})},closeMenuWhenAnotherOnTheSameLevelOpens(s){s.on("menu:change:isOpen",(e,t,o)=>{o&&s.menus.filter(a=>e.source.parentMenuView===a.parentMenuView&&e.source!==a&&a.isOpen).forEach(a=>{a.isOpen=!1})})},closeOnClickOutside(s){Nu({emitter:s,activator:()=>s.isOpen,callback:()=>s.close(),contextElements:()=>s.children.map(e=>e.element)})}},ea={openAndFocusPanelOnArrowDownKey(s){s.keystrokes.set("arrowdown",(e,t)=>{s.focusTracker.focusedElement===s.buttonView.element&&(s.isOpen||(s.isOpen=!0),s.panelView.focus(),t())})},openOnArrowRightKey(s){const e=s.locale.uiLanguageDirection==="rtl"?"arrowleft":"arrowright";s.keystrokes.set(e,(t,o)=>{s.focusTracker.focusedElement===s.buttonView.element&&s.isEnabled&&(s.isOpen||(s.isOpen=!0),s.panelView.focus(),o())})},openOnButtonClick(s){s.buttonView.on("execute",()=>{s.isOpen=!0,s.panelView.focus()})},toggleOnButtonClick(s){s.buttonView.on("execute",()=>{s.isOpen=!s.isOpen,s.isOpen&&s.panelView.focus()})},closeOnArrowLeftKey(s){const e=s.locale.uiLanguageDirection==="rtl"?"arrowright":"arrowleft";s.keystrokes.set(e,(t,o)=>{s.isOpen&&(s.isOpen=!1,s.focus(),o())})},closeOnEscKey(s){s.keystrokes.set("esc",(e,t)=>{s.isOpen&&(s.isOpen=!1,s.focus(),t())})},closeOnParentClose(s){s.parentMenuView.on("change:isOpen",(e,t,o)=>{o||e.source!==s.parentMenuView||(s.isOpen=!1)})}},UL={southEast:s=>({top:s.bottom,left:s.left,name:"se"}),southWest:(s,e)=>({top:s.bottom,left:s.left-e.width+s.width,name:"sw"}),northEast:(s,e)=>({top:s.top-e.height,left:s.left,name:"ne"}),northWest:(s,e)=>({top:s.top-e.height,left:s.left-e.width+s.width,name:"nw"}),eastSouth:s=>({top:s.top,left:s.right-5,name:"es"}),eastNorth:(s,e)=>({top:s.top-e.height,left:s.right-5,name:"en"}),westSouth:(s,e)=>({top:s.top,left:s.left-e.width+5,name:"ws"}),westNorth:(s,e)=>({top:s.top-e.height,left:s.left-e.width+5,name:"wn"})},qL=[{menuId:"file",label:"File",groups:[{groupId:"export",items:["menuBar:exportPdf","menuBar:exportWord"]},{groupId:"import",items:["menuBar:importWord"]},{groupId:"revisionHistory",items:["menuBar:revisionHistory"]}]},{menuId:"edit",label:"Edit",groups:[{groupId:"undo",items:["menuBar:undo","menuBar:redo"]},{groupId:"selectAll",items:["menuBar:selectAll"]},{groupId:"findAndReplace",items:["menuBar:findAndReplace"]}]},{menuId:"view",label:"View",groups:[{groupId:"sourceEditing",items:["menuBar:sourceEditing"]},{groupId:"showBlocks",items:["menuBar:showBlocks"]},{groupId:"restrictedEditingException",items:["menuBar:restrictedEditingException"]}]},{menuId:"insert",label:"Insert",groups:[{groupId:"insertMainWidgets",items:["menuBar:uploadImage","menuBar:ckbox","menuBar:ckfinder","menuBar:insertTable"]},{groupId:"insertInline",items:["menuBar:link","menuBar:comment"]},{groupId:"insertMinorWidgets",items:["menuBar:insertTemplate","menuBar:blockQuote","menuBar:codeBlock","menuBar:htmlEmbed"]},{groupId:"insertStructureWidgets",items:["menuBar:horizontalLine","menuBar:pageBreak","menuBar:tableOfContents"]},{groupId:"restrictedEditing",items:["menuBar:restrictedEditing"]}]},{menuId:"format",label:"Format",groups:[{groupId:"textAndFont",items:[{menuId:"text",label:"Text",groups:[{groupId:"basicStyles",items:["menuBar:bold","menuBar:italic","menuBar:underline","menuBar:strikethrough","menuBar:superscript","menuBar:subscript","menuBar:code"]},{groupId:"textPartLanguage",items:["menuBar:textPartLanguage"]}]},{menuId:"font",label:"Font",groups:[{groupId:"fontProperties",items:["menuBar:fontSize","menuBar:fontFamily"]},{groupId:"fontColors",items:["menuBar:fontColor","menuBar:fontBackgroundColor"]},{groupId:"highlight",items:["menuBar:highlight"]}]},"menuBar:heading"]},{groupId:"list",items:["menuBar:bulletedList","menuBar:numberedList","menuBar:todoList"]},{groupId:"indent",items:["menuBar:alignment","menuBar:indent","menuBar:outdent"]},{groupId:"caseChange",items:["menuBar:caseChange"]},{groupId:"removeFormat",items:["menuBar:removeFormat"]}]},{menuId:"tools",label:"Tools",groups:[{groupId:"aiTools",items:["menuBar:aiAssistant","menuBar:aiCommands"]},{groupId:"tools",items:["menuBar:trackChanges","menuBar:commentsArchive"]}]},{menuId:"help",label:"Help",groups:[{groupId:"help",items:["menuBar:accessibilityHelp"]}]}];function GL({normalizedConfig:s,locale:e,componentFactory:t}){const o=Ai(s);return function(a,c){const d=c.removeItems,h=[];c.items=c.items.filter(({menuId:g})=>!d.includes(g)||(h.push(g),!1)),cl(c.items,g=>{g.groups=g.groups.filter(({groupId:k})=>!d.includes(k)||(h.push(k),!1));for(const k of g.groups)k.items=k.items.filter(w=>{const y=qC(w);return!d.includes(y)||(h.push(y),!1)})});for(const g of d)h.includes(g)||H("menu-bar-item-could-not-be-removed",{menuBarConfig:a,itemName:g})}(s,o),function(a,c){const d=c.addItems,h=[];for(const g of d){const k=YL(g.position),w=QL(g.position);if(WL(g))if(w){const y=c.items.findIndex(S=>S.menuId===w);y!=-1?k==="before"?(c.items.splice(y,0,g.menu),h.push(g)):k==="after"&&(c.items.splice(y+1,0,g.menu),h.push(g)):HC(c,g.menu,w,k)&&h.push(g)}else k==="start"?(c.items.unshift(g.menu),h.push(g)):k==="end"&&(c.items.push(g.menu),h.push(g));else KL(g)?cl(c.items,y=>{if(y.menuId===w)k==="start"?(y.groups.unshift(g.group),h.push(g)):k==="end"&&(y.groups.push(g.group),h.push(g));else{const S=y.groups.findIndex(D=>D.groupId===w);S!==-1&&(k==="before"?(y.groups.splice(S,0,g.group),h.push(g)):k==="after"&&(y.groups.splice(S+1,0,g.group),h.push(g)))}}):HC(c,g.item,w,k)&&h.push(g)}for(const g of d)h.includes(g)||H("menu-bar-item-could-not-be-added",{menuBarConfig:a,addedItemConfig:g})}(s,o),function(a,c,d){cl(c.items,h=>{for(const g of h.groups)g.items=g.items.filter(k=>{const w=typeof k=="string"&&!d.has(k);return w&&!c.isUsingDefaultConfig&&H("menu-bar-item-unavailable",{menuBarConfig:a,parentMenuConfig:Ai(h),componentName:k}),!w})})}(s,o,t),UC(s,o),function(a,c){const d=c.t,h={File:d({string:"File",id:"MENU_BAR_MENU_FILE"}),Edit:d({string:"Edit",id:"MENU_BAR_MENU_EDIT"}),View:d({string:"View",id:"MENU_BAR_MENU_VIEW"}),Insert:d({string:"Insert",id:"MENU_BAR_MENU_INSERT"}),Format:d({string:"Format",id:"MENU_BAR_MENU_FORMAT"}),Tools:d({string:"Tools",id:"MENU_BAR_MENU_TOOLS"}),Help:d({string:"Help",id:"MENU_BAR_MENU_HELP"}),Text:d({string:"Text",id:"MENU_BAR_MENU_TEXT"}),Font:d({string:"Font",id:"MENU_BAR_MENU_FONT"})};cl(a.items,g=>{g.label in h&&(g.label=h[g.label])})}(o,e),o}function HC(s,e,t,o){let a=!1;return cl(s.items,c=>{for(const{groupId:d,items:h}of c.groups){if(a)return;if(d===t)o==="start"?(h.unshift(e),a=!0):o==="end"&&(h.push(e),a=!0);else{const g=h.findIndex(k=>qC(k)===t);g!==-1&&(o==="before"?(h.splice(g,0,e),a=!0):o==="after"&&(h.splice(g+1,0,e),a=!0))}}}),a}function UC(s,e){const t=e.isUsingDefaultConfig;let o=!1;e.items=e.items.filter(a=>!!a.groups.length||(rg(s,a,t),!1)),e.items.length?(cl(e.items,a=>{a.groups=a.groups.filter(c=>!!c.items.length||(o=!0,!1));for(const c of a.groups)c.items=c.items.filter(d=>!(GC(d)&&!d.groups.length)||(rg(s,d,t),o=!0,!1))}),o&&UC(s,e)):rg(s,s,t)}function rg(s,e,t){t||H("menu-bar-menu-empty",{menuBarConfig:s,emptyMenuConfig:e})}function cl(s,e){if(Array.isArray(s))for(const o of s)t(o);function t(o){e(o);for(const a of o.groups)for(const c of a.items)GC(c)&&t(c)}}function WL(s){return typeof s=="object"&&"menu"in s}function KL(s){return typeof s=="object"&&"group"in s}function YL(s){return s.startsWith("start")?"start":s.startsWith("end")?"end":s.startsWith("after")?"after":"before"}function QL(s){const e=s.match(/^[^:]+:(.+)/);return e?e[1]:null}function qC(s){return typeof s=="string"?s:s.menuId}function GC(s){return typeof s=="object"&&"menuId"in s}function ZL(s,e){const t=e.element;s.ui.focusTracker.add(t),s.keystrokes.listenTo(t);const o=function(a){let c;return c="items"in a&&a.items?VC({items:a.items,removeItems:[],addItems:[],isVisible:!0,isUsingDefaultConfig:!1},a):VC({items:Ai(qL),addItems:[],removeItems:[],isVisible:!0,isUsingDefaultConfig:!0},a),c}(s.config.get("menuBar")||{});e.fillFromConfig(o,s.ui.componentFactory),s.keystrokes.set("Esc",(a,c)=>{t.contains(s.ui.focusTracker.focusedElement)&&(s.editing.view.focus(),c())}),s.keystrokes.set("Alt+F9",(a,c)=>{t.contains(s.ui.focusTracker.focusedElement)||(e.focus(),c())})}var WC=u(9108),JL={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};Ie()(WC.A,JL),WC.A.locals;class XL extends Ge{constructor(e){super(e);const t=this.bindTemplate;this.set("isVisible",!1),this.set("position","se"),this.children=this.createCollection(),this.setTemplate({tag:"div",attributes:{class:["ck","ck-reset","ck-menu-bar__menu__panel",t.to("position",o=>`ck-menu-bar__menu__panel_position_${o}`),t.if("isVisible","ck-hidden",o=>!o)],tabindex:"-1"},children:this.children,on:{selectstart:t.to(o=>{o.target.tagName.toLocaleLowerCase()!=="input"&&o.preventDefault()})}})}focus(e=1){this.children.length&&(e===1?this.children.first.focus():this.children.last.focus())}}var KC=u(4),eR={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};Ie()(KC.A,eR),KC.A.locals;const YC=class extends Ge{constructor(s){super(s);const e=this.bindTemplate;this.buttonView=new zL(s),this.buttonView.delegate("mouseenter").to(this),this.buttonView.bind("isOn","isEnabled").to(this,"isOpen","isEnabled"),this.panelView=new XL(s),this.panelView.bind("isVisible").to(this,"isOpen"),this.keystrokes=new io,this.focusTracker=new Bn,this.set("isOpen",!1),this.set("isEnabled",!0),this.set("panelPosition","w"),this.set("class",void 0),this.set("parentMenuView",null),this.setTemplate({tag:"div",attributes:{class:["ck","ck-menu-bar__menu",e.to("class"),e.if("isEnabled","ck-disabled",t=>!t),e.if("parentMenuView","ck-menu-bar__menu_top-level",t=>!t)]},children:[this.buttonView,this.panelView]})}render(){super.render(),this.focusTracker.add(this.buttonView.element),this.focusTracker.add(this.panelView.element),this.keystrokes.listenTo(this.element),ea.closeOnEscKey(this),this._repositionPanelOnOpen()}_attachBehaviors(){this.parentMenuView?(ea.openOnButtonClick(this),ea.openOnArrowRightKey(this),ea.closeOnArrowLeftKey(this),ea.closeOnParentClose(this)):(this._propagateArrowKeystrokeEvents(),ea.openAndFocusPanelOnArrowDownKey(this),ea.toggleOnButtonClick(this))}_propagateArrowKeystrokeEvents(){this.keystrokes.set("arrowright",(s,e)=>{this.fire("arrowright"),e()}),this.keystrokes.set("arrowleft",(s,e)=>{this.fire("arrowleft"),e()})}_repositionPanelOnOpen(){this.on("change:isOpen",(s,e,t)=>{if(!t)return;const o=YC._getOptimalPosition({element:this.panelView.element,target:this.buttonView.element,fitInViewport:!0,positions:this._panelPositions});this.panelView.position=o?o.name:this._panelPositions[0].name})}focus(){this.buttonView.focus()}get _panelPositions(){const{southEast:s,southWest:e,northEast:t,northWest:o,westSouth:a,eastSouth:c,westNorth:d,eastNorth:h}=UL;return this.locale.uiLanguageDirection==="ltr"?this.parentMenuView?[c,h,a,d]:[s,e,t,o]:this.parentMenuView?[a,d,c,h]:[e,s,o,t]}};let dl=YC;dl._getOptimalPosition=Mu;class sg extends Qm{constructor(e){super(e),this.role="menu"}}var QC=u(977),tR={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};Ie()(QC.A,tR),QC.A.locals;class zo extends St{constructor(e){super(e),this.set({withText:!0,withKeystroke:!0,tooltip:!1,role:"menuitem"}),this.extendTemplate({attributes:{class:["ck-menu-bar__menu__item__button"]}})}}class ZC extends DA{constructor(e){super(e),this.set({withText:!0,withKeystroke:!0,tooltip:!1,role:"menuitem"}),this.extendTemplate({attributes:{class:["ck-menu-bar__menu__item__button"]}})}}var JC=u(497),nR={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};Ie()(JC.A,nR),JC.A.locals;const XC=["mouseenter","arrowleft","arrowright","change:isOpen"];class oR extends Ge{constructor(e){super(e),this.menus=[];const t=e.t;this.set("isOpen",!1),this._setupIsOpenUpdater(),this.children=this.createCollection(),this.setTemplate({tag:"div",attributes:{class:["ck","ck-menu-bar"],"aria-label":t("Editor menu bar"),role:"menubar"},children:this.children})}fillFromConfig(e,t){const o=GL({normalizedConfig:e,locale:this.locale,componentFactory:t}).items.map(a=>this._createMenu({componentFactory:t,menuDefinition:a}));this.children.addMany(o)}render(){super.render(),dd.toggleMenusAndFocusItemsOnHover(this),dd.closeMenusWhenTheBarCloses(this),dd.closeMenuWhenAnotherOnTheSameLevelOpens(this),dd.focusCycleMenusOnArrows(this),dd.closeOnClickOutside(this)}focus(){this.children.first&&this.children.first.focus()}close(){for(const e of this.children)e.isOpen=!1}registerMenu(e,t=null){t?(e.delegate(...XC).to(t),e.parentMenuView=t):e.delegate(...XC).to(this,o=>"menu:"+o),e._attachBehaviors(),this.menus.push(e)}_createMenu({componentFactory:e,menuDefinition:t,parentMenuView:o}){const a=this.locale,c=new dl(a);return this.registerMenu(c,o),c.buttonView.set({label:t.label}),c.once("change:isOpen",()=>{const d=new sg(a);d.ariaLabel=t.label,c.panelView.children.add(d),d.items.addMany(this._createMenuItems({menuDefinition:t,parentMenuView:c,componentFactory:e}))}),c}_createMenuItems({menuDefinition:e,parentMenuView:t,componentFactory:o}){const a=this.locale,c=[];for(const d of e.groups){for(const h of d.items){const g=new ig(a,t);if(Ve(h))g.children.add(this._createMenu({componentFactory:o,menuDefinition:h,parentMenuView:t}));else{const k=this._createMenuItemContentFromFactory({componentName:h,componentFactory:o,parentMenuView:t});if(!k)continue;g.children.add(k)}c.push(g)}d!==e.groups[e.groups.length-1]&&c.push(new Ym(a))}return c}_createMenuItemContentFromFactory({componentName:e,parentMenuView:t,componentFactory:o}){const a=o.create(e);return a instanceof dl||a instanceof zo||a instanceof ZC?(this._registerMenuTree(a,t),a.on("execute",()=>{this.close()}),a):(H("menu-bar-component-unsupported",{componentName:e,componentView:a}),null)}_registerMenuTree(e,t){if(!(e instanceof dl))return void e.delegate("mouseenter").to(t);this.registerMenu(e,t);const o=e.panelView.children.filter(c=>c instanceof sg)[0];if(!o)return void e.delegate("mouseenter").to(t);const a=o.items.filter(c=>c instanceof al);for(const c of a)this._registerMenuTree(c.children.get(0),e)}_setupIsOpenUpdater(){let e;this.on("menu:change:isOpen",(t,o,a)=>{clearTimeout(e),a?this.isOpen=!0:e=setTimeout(()=>{this.isOpen=Array.from(this.children).some(c=>c.isOpen)},0)})}}class iR extends pL{constructor(e,t){super(e),this.view=t,this._toolbarConfig=jA(e.config.get("toolbar")),this._elementReplacer=new Me,this.listenTo(e.editing.view,"scrollToTheSelection",this._handleScrollToTheSelectionWithStickyPanel.bind(this))}get element(){return this.view.element}init(e){const t=this.editor,o=this.view,a=t.editing.view,c=o.editable,d=a.document.getRoot();c.name=d.rootName,o.render();const h=c.element;this.setEditableElement(c.name,h),o.editable.bind("isFocused").to(this.focusTracker),a.attachDomRoot(h),e&&this._elementReplacer.replace(e,this.element),this._initPlaceholder(),this._initToolbar(),o.menuBarView&&ZL(t,o.menuBarView),this._initDialogPluginIntegration(),this.fire("ready")}destroy(){super.destroy();const e=this.view,t=this.editor.editing.view;this._elementReplacer.restore(),t.detachDomRoot(e.editable.name),e.destroy()}_initToolbar(){const e=this.view;e.stickyPanel.bind("isActive").to(this.focusTracker,"isFocused"),e.stickyPanel.limiterElement=e.element,e.stickyPanel.bind("viewportTopOffset").to(this,"viewportOffset",({top:t})=>t||0),e.toolbar.fillFromConfig(this._toolbarConfig,this.componentFactory),this.addToolbar(e.toolbar)}_initPlaceholder(){const e=this.editor,t=e.editing.view,o=t.document.getRoot(),a=e.sourceElement;let c;const d=e.config.get("placeholder");d&&(c=typeof d=="string"?d:d[this.view.editable.name]),!c&&a&&a.tagName.toLowerCase()==="textarea"&&(c=a.getAttribute("placeholder")),c&&(o.placeholder=c),Cv({view:t,element:o,isDirectHost:!1,keepOnFocus:!0})}_handleScrollToTheSelectionWithStickyPanel(e,t,o){const a=this.view.stickyPanel;if(a.isSticky){const c=new ft(a.element).height;t.viewportOffset.top+=c}else{const c=()=>{this.editor.editing.view.scrollToTheSelection(o)};this.listenTo(a,"change:isSticky",c),setTimeout(()=>{this.stopListening(a,"change:isSticky",c)},20)}}_initDialogPluginIntegration(){if(!this.editor.plugins.has("Dialog"))return;const e=this.view.stickyPanel,t=this.editor.plugins.get("Dialog");t.on("show",()=>{const o=t.view;o.on("moveTo",(a,c)=>{if(!e.isSticky||o.wasMoved)return;const d=new ft(e.contentPanelElement);c[1]<d.bottom+ch.defaultOffset&&(c[1]=d.bottom+ch.defaultOffset)},{priority:"high"})},{priority:"low"})}}var ey=u(7388),rR={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};Ie()(ey.A,rR),ey.A.locals;class sR extends gL{constructor(e,t,o={}){super(e),this.stickyPanel=new yL(e),this.toolbar=new Km(e,{shouldGroupWhenFull:o.shouldToolbarGroupWhenFull}),o.useMenuBar&&(this.menuBarView=new oR(e)),this.editable=new kL(e,t)}render(){super.render(),this.menuBarView?this.stickyPanel.content.addMany([this.menuBarView,this.toolbar]):this.stickyPanel.content.add(this.toolbar),this.top.add(this.stickyPanel),this.main.add(this.editable)}}class ty{constructor(e){if(this.crashes=[],this.state="initializing",this._now=Date.now,this.crashes=[],this._crashNumberLimit=typeof e.crashNumberLimit=="number"?e.crashNumberLimit:3,this._minimumNonErrorTimePeriod=typeof e.minimumNonErrorTimePeriod=="number"?e.minimumNonErrorTimePeriod:5e3,this._boundErrorHandler=t=>{const o="error"in t?t.error:t.reason;o instanceof Error&&this._handleError(o,t)},this._listeners={},!this._restart)throw new Error("The Watchdog class was split into the abstract `Watchdog` class and the `EditorWatchdog` class. Please, use `EditorWatchdog` if you have used the `Watchdog` class previously.")}destroy(){this._stopErrorHandling(),this._listeners={}}on(e,t){this._listeners[e]||(this._listeners[e]=[]),this._listeners[e].push(t)}off(e,t){this._listeners[e]=this._listeners[e].filter(o=>o!==t)}_fire(e,...t){const o=this._listeners[e]||[];for(const a of o)a.apply(this,[null,...t])}_startErrorHandling(){window.addEventListener("error",this._boundErrorHandler),window.addEventListener("unhandledrejection",this._boundErrorHandler)}_stopErrorHandling(){window.removeEventListener("error",this._boundErrorHandler),window.removeEventListener("unhandledrejection",this._boundErrorHandler)}_handleError(e,t){if(this._shouldReactToError(e)){this.crashes.push({message:e.message,stack:e.stack,filename:t instanceof ErrorEvent?t.filename:void 0,lineno:t instanceof ErrorEvent?t.lineno:void 0,colno:t instanceof ErrorEvent?t.colno:void 0,date:this._now()});const o=this._shouldRestart();this.state="crashed",this._fire("stateChange"),this._fire("error",{error:e,causesRestart:o}),o?this._restart():(this.state="crashedPermanently",this._fire("stateChange"))}}_shouldReactToError(e){return e.is&&e.is("CKEditorError")&&e.context!==void 0&&e.context!==null&&this.state==="ready"&&this._isErrorComingFromThisItem(e)}_shouldRestart(){return this.crashes.length<=this._crashNumberLimit?!0:(this.crashes[this.crashes.length-1].date-this.crashes[this.crashes.length-1-this._crashNumberLimit].date)/this._crashNumberLimit>this._minimumNonErrorTimePeriod}}function ag(s,e=new Set){const t=[s],o=new Set;let a=0;for(;t.length>a;){const c=t[a++];if(!o.has(c)&&aR(c)&&!e.has(c))if(o.add(c),Symbol.iterator in c)try{for(const d of c)t.push(d)}catch{}else for(const d in c)d!=="defaultValue"&&t.push(c[d])}return o}function aR(s){const e=Object.prototype.toString.call(s),t=typeof s;return!(t==="number"||t==="boolean"||t==="string"||t==="symbol"||t==="function"||e==="[object Date]"||e==="[object RegExp]"||e==="[object Module]"||s==null||s._watchdogExcluded||s instanceof EventTarget||s instanceof Event)}function ny(s,e,t=new Set){if(s===e&&typeof(o=s)=="object"&&o!==null)return!0;var o;const a=ag(s,t),c=ag(e,t);for(const d of a)if(c.has(d))return!0;return!1}var lR=Object.defineProperty,cR=Object.defineProperties,dR=Object.getOwnPropertyDescriptors,fh=Object.getOwnPropertySymbols,oy=Object.prototype.hasOwnProperty,iy=Object.prototype.propertyIsEnumerable,ry=(s,e,t)=>e in s?lR(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t,lg=(s,e)=>{for(var t in e||(e={}))oy.call(e,t)&&ry(s,t,e[t]);if(fh)for(var t of fh(e))iy.call(e,t)&&ry(s,t,e[t]);return s};class sy extends ty{constructor(e,t={}){super(t),this._editor=null,this._lifecyclePromise=null,this._initUsingData=!0,this._editables={},this._throttledSave=uh(this._save.bind(this),typeof t.saveInterval=="number"?t.saveInterval:5e3),e&&(this._creator=(o,a)=>e.create(o,a)),this._destructor=o=>o.destroy()}get editor(){return this._editor}get _item(){return this._editor}setCreator(e){this._creator=e}setDestructor(e){this._destructor=e}_restart(){return Promise.resolve().then(()=>(this.state="initializing",this._fire("stateChange"),this._destroy())).catch(e=>{console.error("An error happened during the editor destroying.",e)}).then(()=>{const e={},t=[],o=this._config.rootsAttributes||{},a={};for(const[g,k]of Object.entries(this._data.roots))k.isLoaded?(e[g]="",a[g]=o[g]||{}):t.push(g);const c=(d=lg({},this._config),h={extraPlugins:this._config.extraPlugins||[],lazyRoots:t,rootsAttributes:a,_watchdogInitialData:this._data},cR(d,dR(h)));var d,h;return delete c.initialData,c.extraPlugins.push(uR),this._initUsingData?this.create(e,c,c.context):Hs(this._elementOrData)?this.create(this._elementOrData,c,c.context):this.create(this._editables,c,c.context)}).then(()=>{this._fire("restart")})}create(e=this._elementOrData,t=this._config,o){return this._lifecyclePromise=Promise.resolve(this._lifecyclePromise).then(()=>(super._startErrorHandling(),this._elementOrData=e,this._initUsingData=typeof e=="string"||Object.keys(e).length>0&&typeof Object.values(e)[0]=="string",this._config=this._cloneEditorConfiguration(t)||{},this._config.context=o,this._creator(e,this._config))).then(a=>{this._editor=a,a.model.document.on("change:data",this._throttledSave),this._lastDocumentVersion=a.model.document.version,this._data=this._getData(),this._initUsingData||(this._editables=this._getEditables()),this.state="ready",this._fire("stateChange")}).finally(()=>{this._lifecyclePromise=null}),this._lifecyclePromise}destroy(){return this._lifecyclePromise=Promise.resolve(this._lifecyclePromise).then(()=>(this.state="destroyed",this._fire("stateChange"),super.destroy(),this._destroy())).finally(()=>{this._lifecyclePromise=null}),this._lifecyclePromise}_destroy(){return Promise.resolve().then(()=>{this._stopErrorHandling(),this._throttledSave.cancel();const e=this._editor;return this._editor=null,e.model.document.off("change:data",this._throttledSave),this._destructor(e)})}_save(){const e=this._editor.model.document.version;try{this._data=this._getData(),this._initUsingData||(this._editables=this._getEditables()),this._lastDocumentVersion=e}catch(t){console.error(t,"An error happened during restoring editor data. Editor will be restored from the previously saved data.")}}_setExcludedProperties(e){this._excludedProps=e}_getData(){const e=this._editor,t=e.model.document.roots.filter(h=>h.isAttached()&&h.rootName!="$graveyard"),{plugins:o}=e,a=o.has("CommentsRepository")&&o.get("CommentsRepository"),c=o.has("TrackChanges")&&o.get("TrackChanges"),d={roots:{},markers:{},commentThreads:JSON.stringify([]),suggestions:JSON.stringify([])};t.forEach(h=>{d.roots[h.rootName]={content:JSON.stringify(Array.from(h.getChildren())),attributes:JSON.stringify(Array.from(h.getAttributes())),isLoaded:h._isLoaded}});for(const h of e.model.markers)h._affectsData&&(d.markers[h.name]={rangeJSON:h.getRange().toJSON(),usingOperation:h._managedUsingOperations,affectsData:h._affectsData});return a&&(d.commentThreads=JSON.stringify(a.getCommentThreads({toJSON:!0,skipNotAttached:!0}))),c&&(d.suggestions=JSON.stringify(c.getSuggestions({toJSON:!0,skipNotAttached:!0}))),d}_getEditables(){const e={};for(const t of this.editor.model.document.getRootNames()){const o=this.editor.ui.getEditableElement(t);o&&(e[t]=o)}return e}_isErrorComingFromThisItem(e){return ny(this._editor,e.context,this._excludedProps)}_cloneEditorConfiguration(e){return Jf(e,(t,o)=>Hs(t)||o==="context"?t:void 0)}}class uR{constructor(e){this.editor=e,this._data=e.config.get("_watchdogInitialData")}init(){this.editor.data.on("init",e=>{e.stop(),this.editor.model.enqueueChange({isUndoable:!1},t=>{this._restoreCollaborationData(),this._restoreEditorData(t)}),this.editor.data.fire("ready")},{priority:999})}_createNode(e,t){if("name"in t){const o=e.createElement(t.name,t.attributes);if(t.children)for(const a of t.children)o._appendChild(this._createNode(e,a));return o}return e.createText(t.data,t.attributes)}_restoreEditorData(e){const t=this.editor;Object.entries(this._data.roots).forEach(([o,{content:a,attributes:c}])=>{const d=JSON.parse(a),h=JSON.parse(c),g=t.model.document.getRoot(o);for(const[k,w]of h)e.setAttribute(k,w,g);for(const k of d){const w=this._createNode(e,k);e.insert(w,g,"end")}}),Object.entries(this._data.markers).forEach(([o,a])=>{const{document:c}=t.model,d=a,{rangeJSON:{start:h,end:g}}=d,k=((M,R)=>{var j={};for(var G in M)oy.call(M,G)&&R.indexOf(G)<0&&(j[G]=M[G]);if(M!=null&&fh)for(var G of fh(M))R.indexOf(G)<0&&iy.call(M,G)&&(j[G]=M[G]);return j})(d,["rangeJSON"]),w=c.getRoot(h.root),y=e.createPositionFromPath(w,h.path,h.stickiness),S=e.createPositionFromPath(w,g.path,g.stickiness),D=e.createRange(y,S);e.addMarker(o,lg({range:D},k))})}_restoreCollaborationData(){const e=JSON.parse(this._data.commentThreads),t=JSON.parse(this._data.suggestions);e.forEach(o=>{const a=this.editor.config.get("collaboration.channelId"),c=this.editor.plugins.get("CommentsRepository");c.hasCommentThread(o.threadId)&&c.getCommentThread(o.threadId).remove(),c.addCommentThread(lg({channelId:a},o))}),t.forEach(o=>{const a=this.editor.plugins.get("TrackChangesEditing");a.hasSuggestion(o.id)?a.getSuggestion(o.id).attributes=o.attributes:a.addSuggestionData(o)})}}const ud=Symbol("MainQueueId");class hR{constructor(){this._onEmptyCallbacks=[],this._queues=new Map,this._activeActions=0}onEmpty(e){this._onEmptyCallbacks.push(e)}enqueue(e,t){const o=e===ud;this._activeActions++,this._queues.get(e)||this._queues.set(e,Promise.resolve());const a=(o?Promise.all(this._queues.values()):Promise.all([this._queues.get(ud),this._queues.get(e)])).then(t),c=a.catch(()=>{});return this._queues.set(e,c),a.finally(()=>{this._activeActions--,this._queues.get(e)===c&&this._activeActions===0&&this._onEmptyCallbacks.forEach(d=>d())})}}function ay(s){return Array.isArray(s)?s:[s]}class mh extends Um(KP){constructor(e,t={}){if(!gh(e)&&t.initialData!==void 0)throw new P("editor-create-initial-data",null);super(t),this.config.define("menuBar.isVisible",!1),this.config.get("initialData")===void 0&&this.config.set("initialData",function(d){return gh(d)?(h=d,h instanceof HTMLTextAreaElement?h.value:h.innerHTML):d;var h}(e)),gh(e)&&(this.sourceElement=e),this.model.document.createRoot();const o=!this.config.get("toolbar.shouldNotGroupWhenFull"),a=this.config.get("menuBar"),c=new sR(this.locale,this.editing.view,{shouldToolbarGroupWhenFull:o,useMenuBar:a.isVisible});this.ui=new iR(this,c),function(d){if(!tn(d.updateSourceElement))throw new P("attachtoform-missing-elementapi-interface",d);const h=d.sourceElement;if(function(g){return!!g&&g.tagName.toLowerCase()==="textarea"}(h)&&h.form){let g;const k=h.form,w=()=>d.updateSourceElement();tn(k.submit)&&(g=k.submit,k.submit=()=>{w(),g.apply(k)}),k.addEventListener("submit",w),d.on("destroy",()=>{k.removeEventListener("submit",w),g&&(k.submit=g)})}}(this)}destroy(){return this.sourceElement&&this.updateSourceElement(),this.ui.destroy(),super.destroy()}static create(e,t={}){return new Promise(o=>{const a=new this(e,t);o(a.initPlugins().then(()=>a.ui.init(gh(e)?e:null)).then(()=>a.data.init(a.config.get("initialData"))).then(()=>a.fire("ready")).then(()=>a))})}}function gh(s){return Hs(s)}mh.Context=wv,mh.EditorWatchdog=sy,mh.ContextWatchdog=class extends ty{constructor(s,e={}){super(e),this._watchdogs=new Map,this._context=null,this._contextProps=new Set,this._actionQueues=new hR,this._watchdogConfig=e,this._creator=t=>s.create(t),this._destructor=t=>t.destroy(),this._actionQueues.onEmpty(()=>{this.state==="initializing"&&(this.state="ready",this._fire("stateChange"))})}setCreator(s){this._creator=s}setDestructor(s){this._destructor=s}get context(){return this._context}create(s={}){return this._actionQueues.enqueue(ud,()=>(this._contextConfig=s,this._create()))}getItem(s){return this._getWatchdog(s)._item}getItemState(s){return this._getWatchdog(s).state}add(s){const e=ay(s);return Promise.all(e.map(t=>this._actionQueues.enqueue(t.id,()=>{if(this.state==="destroyed")throw new Error("Cannot add items to destroyed watchdog.");if(!this._context)throw new Error("Context was not created yet. You should call the `ContextWatchdog#create()` method first.");let o;if(this._watchdogs.has(t.id))throw new Error(`Item with the given id is already added: '${t.id}'.`);if(t.type==="editor")return o=new sy(null,this._watchdogConfig),o.setCreator(t.creator),o._setExcludedProperties(this._contextProps),t.destructor&&o.setDestructor(t.destructor),this._watchdogs.set(t.id,o),o.on("error",(a,{error:c,causesRestart:d})=>{this._fire("itemError",{itemId:t.id,error:c}),d&&this._actionQueues.enqueue(t.id,()=>new Promise(h=>{const g=()=>{o.off("restart",g),this._fire("itemRestart",{itemId:t.id}),h()};o.on("restart",g)}))}),o.create(t.sourceElementOrData,t.config,this._context);throw new Error(`Not supported item type: '${t.type}'.`)})))}remove(s){const e=ay(s);return Promise.all(e.map(t=>this._actionQueues.enqueue(t,()=>{const o=this._getWatchdog(t);return this._watchdogs.delete(t),o.destroy()})))}destroy(){return this._actionQueues.enqueue(ud,()=>(this.state="destroyed",this._fire("stateChange"),super.destroy(),this._destroy()))}_restart(){return this._actionQueues.enqueue(ud,()=>(this.state="initializing",this._fire("stateChange"),this._destroy().catch(s=>{console.error("An error happened during destroying the context or items.",s)}).then(()=>this._create()).then(()=>this._fire("restart"))))}_create(){return Promise.resolve().then(()=>(this._startErrorHandling(),this._creator(this._contextConfig))).then(s=>(this._context=s,this._contextProps=ag(this._context),Promise.all(Array.from(this._watchdogs.values()).map(e=>(e._setExcludedProperties(this._contextProps),e.create(void 0,void 0,this._context))))))}_destroy(){return Promise.resolve().then(()=>{this._stopErrorHandling();const s=this._context;return this._context=null,this._contextProps=new Set,Promise.all(Array.from(this._watchdogs.values()).map(e=>e.destroy())).then(()=>this._destructor(s))})}_getWatchdog(s){const e=this._watchdogs.get(s);if(!e)throw new Error(`Item with the given id was not registered: ${s}.`);return e}_isErrorComingFromThisItem(s){for(const e of this._watchdogs.values())if(e._isErrorComingFromThisItem(s))return!1;return ny(this._context,s.context)}};class hd extends Wr{constructor(e){super(e),this.domEventType=["paste","copy","cut","drop","dragover","dragstart","dragend","dragenter","dragleave"];const t=this.document;function o(a){return(c,d)=>{d.preventDefault();const h=d.dropRange?[d.dropRange]:null,g=new N(t,a);t.fire(g,{dataTransfer:d.dataTransfer,method:c.name,targetRanges:h,target:d.target,domEvent:d.domEvent}),g.stop.called&&d.stopPropagation()}}this.listenTo(t,"paste",o("clipboardInput"),{priority:"low"}),this.listenTo(t,"drop",o("clipboardInput"),{priority:"low"}),this.listenTo(t,"dragover",o("dragging"),{priority:"low"})}onDomEvent(e){const t="clipboardData"in e?e.clipboardData:e.dataTransfer,o=e.type=="drop"||e.type=="paste",a={dataTransfer:new i0(t,{cacheFiles:o})};e.type!="drop"&&e.type!="dragover"||(a.dropRange=function(c,d){const h=d.target.ownerDocument,g=d.clientX,k=d.clientY;let w;return h.caretRangeFromPoint&&h.caretRangeFromPoint(g,k)?w=h.caretRangeFromPoint(g,k):d.rangeParent&&(w=h.createRange(),w.setStart(d.rangeParent,d.rangeOffset),w.collapse(!0)),w?c.domConverter.domRangeToView(w):null}(this.view,e)),this.fire(e.type,e,a)}}const ly=["figcaption","li"],cy=["ol","ul"];function dy(s){if(s.is("$text")||s.is("$textProxy"))return s.data;if(s.is("element","img")&&s.hasAttribute("alt"))return s.getAttribute("alt");if(s.is("element","br"))return`
`;let e="",t=null;for(const o of s.getChildren())e+=pR(o,t)+dy(o),t=o;return e}function pR(s,e){return e?s.is("element","li")&&!s.isEmpty&&s.getChild(0).is("containerElement")||cy.includes(s.name)&&cy.includes(e.name)?`

`:s.is("containerElement")||e.is("containerElement")?ly.includes(s.name)||ly.includes(e.name)?`
`:`

 * @license Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md.
  * Bootstrap v5.3.1 (https://getbootstrap.com/)
  * Copyright 2011-2023 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */const ns=new Map,Pb={set(i,n,r){ns.has(i)||ns.set(i,new Map);const l=ns.get(i);if(!l.has(n)&&l.size!==0){console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(l.keys())[0]}.`);return}l.set(n,r)},get(i,n){return ns.has(i)&&ns.get(i).get(n)||null},remove(i,n){if(!ns.has(i))return;const r=ns.get(i);r.delete(n),r.size===0&&ns.delete(i)}},zge=1e6,jge=1e3,Hk="transitionend",u4=i=>(i&&window.CSS&&window.CSS.escape&&(i=i.replace(/#([^\s"#']+)/g,(n,r)=>`#${CSS.escape(r)}`)),i),$ge=i=>i==null?`${i}`:Object.prototype.toString.call(i).match(/\s([a-z]+)/i)[1].toLowerCase(),Vge=i=>{do i+=Math.floor(Math.random()*zge);while(document.getElementById(i));return i},Hge=i=>{if(!i)return 0;let{transitionDuration:n,transitionDelay:r}=window.getComputedStyle(i);const l=Number.parseFloat(n),u=Number.parseFloat(r);return!l&&!u?0:(n=n.split(",")[0],r=r.split(",")[0],(Number.parseFloat(n)+Number.parseFloat(r))*jge)},h4=i=>{i.dispatchEvent(new Event(Hk))},Dr=i=>!i||typeof i!="object"?!1:(typeof i.jquery<"u"&&(i=i[0]),typeof i.nodeType<"u"),ws=i=>Dr(i)?i.jquery?i[0]:i:typeof i=="string"&&i.length>0?document.querySelector(u4(i)):null,mc=i=>{if(!Dr(i)||i.getClientRects().length===0)return!1;const n=getComputedStyle(i).getPropertyValue("visibility")==="visible",r=i.closest("details:not([open])");if(!r)return n;if(r!==i){const l=i.closest("summary");if(l&&l.parentNode!==r||l===null)return!1}return n},vs=i=>!i||i.nodeType!==Node.ELEMENT_NODE||i.classList.contains("disabled")?!0:typeof i.disabled<"u"?i.disabled:i.hasAttribute("disabled")&&i.getAttribute("disabled")!=="false",p4=i=>{if(!document.documentElement.attachShadow)return null;if(typeof i.getRootNode=="function"){const n=i.getRootNode();return n instanceof ShadowRoot?n:null}return i instanceof ShadowRoot?i:i.parentNode?p4(i.parentNode):null},af=()=>{},vu=i=>{i.offsetHeight},f4=()=>window.jQuery&&!document.body.hasAttribute("data-bs-no-jquery")?window.jQuery:null,Nb=[],Uge=i=>{document.readyState==="loading"?(Nb.length||document.addEventListener("DOMContentLoaded",()=>{for(const n of Nb)n()}),Nb.push(i)):i()},ci=()=>document.documentElement.dir==="rtl",pi=i=>{Uge(()=>{const n=f4();if(n){const r=i.NAME,l=n.fn[r];n.fn[r]=i.jQueryInterface,n.fn[r].Constructor=i,n.fn[r].noConflict=()=>(n.fn[r]=l,i.jQueryInterface)}})},Eo=(i,n=[],r=i)=>typeof i=="function"?i(...n):r,m4=(i,n,r=!0)=>{if(!r){Eo(i);return}const u=Hge(n)+5;let p=!1;const f=({target:b})=>{b===n&&(p=!0,n.removeEventListener(Hk,f),Eo(i))};n.addEventListener(Hk,f),setTimeout(()=>{p||h4(n)},u)},tw=(i,n,r,l)=>{const u=i.length;let p=i.indexOf(n);return p===-1?!r&&l?i[u-1]:i[0]:(p+=r?1:-1,l&&(p=(p+u)%u),i[Math.max(0,Math.min(p,u-1))])},qge=/[^.]*(?=\..*)\.|.*/,Gge=/\..*/,Wge=/::\d+$/,Lb={};let RT=1;const g4={mouseenter:"mouseover",mouseleave:"mouseout"},Kge=new Set(["click","dblclick","mouseup","mousedown","contextmenu","mousewheel","DOMMouseScroll","mouseover","mouseout","mousemove","selectstart","selectend","keydown","keypress","keyup","orientationchange","touchstart","touchmove","touchend","touchcancel","pointerdown","pointermove","pointerup","pointerleave","pointercancel","gesturestart","gesturechange","gestureend","focus","blur","change","reset","select","submit","focusin","focusout","load","unload","beforeunload","resize","move","DOMContentLoaded","readystatechange","error","abort","scroll"]);function b4(i,n){return n&&`${n}::${RT++}`||i.uidEvent||RT++}function k4(i){const n=b4(i);return i.uidEvent=n,Lb[n]=Lb[n]||{},Lb[n]}function Yge(i,n){return function r(l){return nw(l,{delegateTarget:i}),r.oneOff&&Ee.off(i,l.type,n),n.apply(i,[l])}}function Qge(i,n,r){return function l(u){const p=i.querySelectorAll(n);for(let{target:f}=u;f&&f!==this;f=f.parentNode)for(const b of p)if(b===f)return nw(u,{delegateTarget:f}),l.oneOff&&Ee.off(i,u.type,n,r),r.apply(f,[u])}}function _4(i,n,r=null){return Object.values(i).find(l=>l.callable===n&&l.delegationSelector===r)}function w4(i,n,r){const l=typeof n=="string",u=l?r:n||r;let p=v4(i);return Kge.has(p)||(p=i),[l,u,p]}function FT(i,n,r,l,u){if(typeof n!="string"||!i)return;let[p,f,b]=w4(n,r,l);n in g4&&(f=(T=>function(I){if(!I.relatedTarget||I.relatedTarget!==I.delegateTarget&&!I.delegateTarget.contains(I.relatedTarget))return T.call(this,I)})(f));const m=k4(i),A=m[b]||(m[b]={}),v=_4(A,f,p?r:null);if(v){v.oneOff=v.oneOff&&u;return}const x=b4(f,n.replace(qge,"")),C=p?Qge(i,r,f):Yge(i,f);C.delegationSelector=p?r:null,C.callable=f,C.oneOff=u,C.uidEvent=x,A[x]=C,i.addEventListener(b,C,p)}function Uk(i,n,r,l,u){const p=_4(n[r],l,u);p&&(i.removeEventListener(r,p,!!u),delete n[r][p.uidEvent])}function Zge(i,n,r,l){const u=n[r]||{};for(const[p,f]of Object.entries(u))p.includes(l)&&Uk(i,n,r,f.callable,f.delegationSelector)}function v4(i){return i=i.replace(Gge,""),g4[i]||i}const Ee={on(i,n,r,l){FT(i,n,r,l,!1)},one(i,n,r,l){FT(i,n,r,l,!0)},off(i,n,r,l){if(typeof n!="string"||!i)return;const[u,p,f]=w4(n,r,l),b=f!==n,m=k4(i),A=m[f]||{},v=n.startsWith(".");if(typeof p<"u"){if(!Object.keys(A).length)return;Uk(i,m,f,p,u?r:null);return}if(v)for(const x of Object.keys(m))Zge(i,m,x,n.slice(1));for(const[x,C]of Object.entries(A)){const E=x.replace(Wge,"");(!b||n.includes(E))&&Uk(i,m,f,C.callable,C.delegationSelector)}},trigger(i,n,r){if(typeof n!="string"||!i)return null;const l=f4(),u=v4(n),p=n!==u;let f=null,b=!0,m=!0,A=!1;p&&l&&(f=l.Event(n,r),l(i).trigger(f),b=!f.isPropagationStopped(),m=!f.isImmediatePropagationStopped(),A=f.isDefaultPrevented());const v=nw(new Event(n,{bubbles:b,cancelable:!0}),r);return A&&v.preventDefault(),m&&i.dispatchEvent(v),v.defaultPrevented&&f&&f.preventDefault(),v}};function nw(i,n={}){for(const[r,l]of Object.entries(n))try{i[r]=l}catch{Object.defineProperty(i,r,{configurable:!0,get(){return l}})}return i}function zT(i){if(i==="true")return!0;if(i==="false")return!1;if(i===Number(i).toString())return Number(i);if(i===""||i==="null")return null;if(typeof i!="string")return i;try{return JSON.parse(decodeURIComponent(i))}catch{return i}}function Rb(i){return i.replace(/[A-Z]/g,n=>`-${n.toLowerCase()}`)}const Ir={setDataAttribute(i,n,r){i.setAttribute(`data-bs-${Rb(n)}`,r)},removeDataAttribute(i,n){i.removeAttribute(`data-bs-${Rb(n)}`)},getDataAttributes(i){if(!i)return{};const n={},r=Object.keys(i.dataset).filter(l=>l.startsWith("bs")&&!l.startsWith("bsConfig"));for(const l of r){let u=l.replace(/^bs/,"");u=u.charAt(0).toLowerCase()+u.slice(1,u.length),n[u]=zT(i.dataset[l])}return n},getDataAttribute(i,n){return zT(i.getAttribute(`data-bs-${Rb(n)}`))}};class Au{static get Default(){return{}}static get DefaultType(){return{}}static get NAME(){throw new Error('You have to implement the static method "NAME", for each component!')}_getConfig(n){return n=this._mergeConfigObj(n),n=this._configAfterMerge(n),this._typeCheckConfig(n),n}_configAfterMerge(n){return n}_mergeConfigObj(n,r){const l=Dr(r)?Ir.getDataAttribute(r,"config"):{};return{...this.constructor.Default,...typeof l=="object"?l:{},...Dr(r)?Ir.getDataAttributes(r):{},...typeof n=="object"?n:{}}}_typeCheckConfig(n,r=this.constructor.DefaultType){for(const[l,u]of Object.entries(r)){const p=n[l],f=Dr(p)?"element":$ge(p);if(!new RegExp(u).test(f))throw new TypeError(`${this.constructor.NAME.toUpperCase()}: Option "${l}" provided type "${f}" but expected type "${u}".`)}}}const Jge="5.3.1";class Oi extends Au{constructor(n,r){super(),n=ws(n),n&&(this._element=n,this._config=this._getConfig(r),Pb.set(this._element,this.constructor.DATA_KEY,this))}dispose(){Pb.remove(this._element,this.constructor.DATA_KEY),Ee.off(this._element,this.constructor.EVENT_KEY);for(const n of Object.getOwnPropertyNames(this))this[n]=null}_queueCallback(n,r,l=!0){m4(n,r,l)}_getConfig(n){return n=this._mergeConfigObj(n,this._element),n=this._configAfterMerge(n),this._typeCheckConfig(n),n}static getInstance(n){return Pb.get(ws(n),this.DATA_KEY)}static getOrCreateInstance(n,r={}){return this.getInstance(n)||new this(n,typeof r=="object"?r:null)}static get VERSION(){return Jge}static get DATA_KEY(){return`bs.${this.NAME}`}static get EVENT_KEY(){return`.${this.DATA_KEY}`}static eventName(n){return`${n}${this.EVENT_KEY}`}}const Fb=i=>{let n=i.getAttribute("data-bs-target");if(!n||n==="#"){let r=i.getAttribute("href");if(!r||!r.includes("#")&&!r.startsWith("."))return null;r.includes("#")&&!r.startsWith("#")&&(r=`#${r.split("#")[1]}`),n=r&&r!=="#"?r.trim():null}return u4(n)},Ke={find(i,n=document.documentElement){return[].concat(...Element.prototype.querySelectorAll.call(n,i))},findOne(i,n=document.documentElement){return Element.prototype.querySelector.call(n,i)},children(i,n){return[].concat(...i.children).filter(r=>r.matches(n))},parents(i,n){const r=[];let l=i.parentNode.closest(n);for(;l;)r.push(l),l=l.parentNode.closest(n);return r},prev(i,n){let r=i.previousElementSibling;for(;r;){if(r.matches(n))return[r];r=r.previousElementSibling}return[]},next(i,n){let r=i.nextElementSibling;for(;r;){if(r.matches(n))return[r];r=r.nextElementSibling}return[]},focusableChildren(i){const n=["a","button","input","textarea","select","details","[tabindex]",'[contenteditable="true"]'].map(r=>`${r}:not([tabindex^="-"])`).join(",");return this.find(n,i).filter(r=>!vs(r)&&mc(r))},getSelectorFromElement(i){const n=Fb(i);return n&&Ke.findOne(n)?n:null},getElementFromSelector(i){const n=Fb(i);return n?Ke.findOne(n):null},getMultipleElementsFromSelector(i){const n=Fb(i);return n?Ke.find(n):[]}},zf=(i,n="hide")=>{const r=`click.dismiss${i.EVENT_KEY}`,l=i.NAME;Ee.on(document,r,`[data-bs-dismiss="${l}"]`,function(u){if(["A","AREA"].includes(this.tagName)&&u.preventDefault(),vs(this))return;const p=Ke.getElementFromSelector(this)||this.closest(`.${l}`);i.getOrCreateInstance(p)[n]()})},Xge="alert",ebe="bs.alert",A4=`.${ebe}`,tbe=`close${A4}`,nbe=`closed${A4}`,obe="fade",ibe="show";class jf extends Oi{static get NAME(){return Xge}close(){if(Ee.trigger(this._element,tbe).defaultPrevented)return;this._element.classList.remove(ibe);const r=this._element.classList.contains(obe);this._queueCallback(()=>this._destroyElement(),this._element,r)}_destroyElement(){this._element.remove(),Ee.trigger(this._element,nbe),this.dispose()}static jQueryInterface(n){return this.each(function(){const r=jf.getOrCreateInstance(this);if(typeof n=="string"){if(r[n]===void 0||n.startsWith("_")||n==="constructor")throw new TypeError(`No method named "${n}"`);r[n](this)}})}}zf(jf,"close");pi(jf);const rbe="button",sbe="bs.button",abe=`.${sbe}`,lbe=".data-api",cbe="active",jT='[data-bs-toggle="button"]',dbe=`click${abe}${lbe}`;class $f extends Oi{static get NAME(){return rbe}toggle(){this._element.setAttribute("aria-pressed",this._element.classList.toggle(cbe))}static jQueryInterface(n){return this.each(function(){const r=$f.getOrCreateInstance(this);n==="toggle"&&r[n]()})}}Ee.on(document,dbe,jT,i=>{i.preventDefault();const n=i.target.closest(jT);$f.getOrCreateInstance(n).toggle()});pi($f);const ube="swipe",gc=".bs.swipe",hbe=`touchstart${gc}`,pbe=`touchmove${gc}`,fbe=`touchend${gc}`,mbe=`pointerdown${gc}`,gbe=`pointerup${gc}`,bbe="touch",kbe="pen",_be="pointer-event",wbe=40,vbe={endCallback:null,leftCallback:null,rightCallback:null},Abe={endCallback:"(function|null)",leftCallback:"(function|null)",rightCallback:"(function|null)"};class lf extends Au{constructor(n,r){super(),this._element=n,!(!n||!lf.isSupported())&&(this._config=this._getConfig(r),this._deltaX=0,this._supportPointerEvents=!!window.PointerEvent,this._initEvents())}static get Default(){return vbe}static get DefaultType(){return Abe}static get NAME(){return ube}dispose(){Ee.off(this._element,gc)}_start(n){if(!this._supportPointerEvents){this._deltaX=n.touches[0].clientX;return}this._eventIsPointerPenTouch(n)&&(this._deltaX=n.clientX)}_end(n){this._eventIsPointerPenTouch(n)&&(this._deltaX=n.clientX-this._deltaX),this._handleSwipe(),Eo(this._config.endCallback)}_move(n){this._deltaX=n.touches&&n.touches.length>1?0:n.touches[0].clientX-this._deltaX}_handleSwipe(){const n=Math.abs(this._deltaX);if(n<=wbe)return;const r=n/this._deltaX;this._deltaX=0,r&&Eo(r>0?this._config.rightCallback:this._config.leftCallback)}_initEvents(){this._supportPointerEvents?(Ee.on(this._element,mbe,n=>this._start(n)),Ee.on(this._element,gbe,n=>this._end(n)),this._element.classList.add(_be)):(Ee.on(this._element,hbe,n=>this._start(n)),Ee.on(this._element,pbe,n=>this._move(n)),Ee.on(this._element,fbe,n=>this._end(n)))}_eventIsPointerPenTouch(n){return this._supportPointerEvents&&(n.pointerType===kbe||n.pointerType===bbe)}static isSupported(){return"ontouchstart"in document.documentElement||navigator.maxTouchPoints>0}}const Cbe="carousel",ybe="bs.carousel",Ds=`.${ybe}`,C4=".data-api",xbe="ArrowLeft",Ebe="ArrowRight",Sbe=500,Od="next",Cl="prev",Tl="left",Ep="right",Tbe=`slide${Ds}`,zb=`slid${Ds}`,Dbe=`keydown${Ds}`,Ibe=`mouseenter${Ds}`,Mbe=`mouseleave${Ds}`,Obe=`dragstart${Ds}`,Bbe=`load${Ds}${C4}`,Pbe=`click${Ds}${C4}`,y4="carousel",ap="active",Nbe="slide",Lbe="carousel-item-end",Rbe="carousel-item-start",Fbe="carousel-item-next",zbe="carousel-item-prev",x4=".active",E4=".carousel-item",jbe=x4+E4,$be=".carousel-item img",Vbe=".carousel-indicators",Hbe="[data-bs-slide], [data-bs-slide-to]",Ube='[data-bs-ride="carousel"]',qbe={[xbe]:Ep,[Ebe]:Tl},Gbe={interval:5e3,keyboard:!0,pause:"hover",ride:!1,touch:!0,wrap:!0},Wbe={interval:"(number|boolean)",keyboard:"boolean",pause:"(string|boolean)",ride:"(boolean|string)",touch:"boolean",wrap:"boolean"};class Cu extends Oi{constructor(n,r){super(n,r),this._interval=null,this._activeElement=null,this._isSliding=!1,this.touchTimeout=null,this._swipeHelper=null,this._indicatorsElement=Ke.findOne(Vbe,this._element),this._addEventListeners(),this._config.ride===y4&&this.cycle()}static get Default(){return Gbe}static get DefaultType(){return Wbe}static get NAME(){return Cbe}next(){this._slide(Od)}nextWhenVisible(){!document.hidden&&mc(this._element)&&this.next()}prev(){this._slide(Cl)}pause(){this._isSliding&&h4(this._element),this._clearInterval()}cycle(){this._clearInterval(),this._updateInterval(),this._interval=setInterval(()=>this.nextWhenVisible(),this._config.interval)}_maybeEnableCycle(){if(this._config.ride){if(this._isSliding){Ee.one(this._element,zb,()=>this.cycle());return}this.cycle()}}to(n){const r=this._getItems();if(n>r.length-1||n<0)return;if(this._isSliding){Ee.one(this._element,zb,()=>this.to(n));return}const l=this._getItemIndex(this._getActive());if(l===n)return;const u=n>l?Od:Cl;this._slide(u,r[n])}dispose(){this._swipeHelper&&this._swipeHelper.dispose(),super.dispose()}_configAfterMerge(n){return n.defaultInterval=n.interval,n}_addEventListeners(){this._config.keyboard&&Ee.on(this._element,Dbe,n=>this._keydown(n)),this._config.pause==="hover"&&(Ee.on(this._element,Ibe,()=>this.pause()),Ee.on(this._element,Mbe,()=>this._maybeEnableCycle())),this._config.touch&&lf.isSupported()&&this._addTouchEventListeners()}_addTouchEventListeners(){for(const l of Ke.find($be,this._element))Ee.on(l,Obe,u=>u.preventDefault());const r={leftCallback:()=>this._slide(this._directionToOrder(Tl)),rightCallback:()=>this._slide(this._directionToOrder(Ep)),endCallback:()=>{this._config.pause==="hover"&&(this.pause(),this.touchTimeout&&clearTimeout(this.touchTimeout),this.touchTimeout=setTimeout(()=>this._maybeEnableCycle(),Sbe+this._config.interval))}};this._swipeHelper=new lf(this._element,r)}_keydown(n){if(/input|textarea/i.test(n.target.tagName))return;const r=qbe[n.key];r&&(n.preventDefault(),this._slide(this._directionToOrder(r)))}_getItemIndex(n){return this._getItems().indexOf(n)}_setActiveIndicatorElement(n){if(!this._indicatorsElement)return;const r=Ke.findOne(x4,this._indicatorsElement);r.classList.remove(ap),r.removeAttribute("aria-current");const l=Ke.findOne(`[data-bs-slide-to="${n}"]`,this._indicatorsElement);l&&(l.classList.add(ap),l.setAttribute("aria-current","true"))}_updateInterval(){const n=this._activeElement||this._getActive();if(!n)return;const r=Number.parseInt(n.getAttribute("data-bs-interval"),10);this._config.interval=r||this._config.defaultInterval}_slide(n,r=null){if(this._isSliding)return;const l=this._getActive(),u=n===Od,p=r||tw(this._getItems(),l,u,this._config.wrap);if(p===l)return;const f=this._getItemIndex(p),b=E=>Ee.trigger(this._element,E,{relatedTarget:p,direction:this._orderToDirection(n),from:this._getItemIndex(l),to:f});if(b(Tbe).defaultPrevented||!l||!p)return;const A=!!this._interval;this.pause(),this._isSliding=!0,this._setActiveIndicatorElement(f),this._activeElement=p;const v=u?Rbe:Lbe,x=u?Fbe:zbe;p.classList.add(x),vu(p),l.classList.add(v),p.classList.add(v);const C=()=>{p.classList.remove(v,x),p.classList.add(ap),l.classList.remove(ap,x,v),this._isSliding=!1,b(zb)};this._queueCallback(C,l,this._isAnimated()),A&&this.cycle()}_isAnimated(){return this._element.classList.contains(Nbe)}_getActive(){return Ke.findOne(jbe,this._element)}_getItems(){return Ke.find(E4,this._element)}_clearInterval(){this._interval&&(clearInterval(this._interval),this._interval=null)}_directionToOrder(n){return ci()?n===Tl?Cl:Od:n===Tl?Od:Cl}_orderToDirection(n){return ci()?n===Cl?Tl:Ep:n===Cl?Ep:Tl}static jQueryInterface(n){return this.each(function(){const r=Cu.getOrCreateInstance(this,n);if(typeof n=="number"){r.to(n);return}if(typeof n=="string"){if(r[n]===void 0||n.startsWith("_")||n==="constructor")throw new TypeError(`No method named "${n}"`);r[n]()}})}}Ee.on(document,Pbe,Hbe,function(i){const n=Ke.getElementFromSelector(this);if(!n||!n.classList.contains(y4))return;i.preventDefault();const r=Cu.getOrCreateInstance(n),l=this.getAttribute("data-bs-slide-to");if(l){r.to(l),r._maybeEnableCycle();return}if(Ir.getDataAttribute(this,"slide")==="next"){r.next(),r._maybeEnableCycle();return}r.prev(),r._maybeEnableCycle()});Ee.on(window,Bbe,()=>{const i=Ke.find(Ube);for(const n of i)Cu.getOrCreateInstance(n)});pi(Cu);const Kbe="collapse",Ybe="bs.collapse",yu=`.${Ybe}`,Qbe=".data-api",Zbe=`show${yu}`,Jbe=`shown${yu}`,Xbe=`hide${yu}`,eke=`hidden${yu}`,tke=`click${yu}${Qbe}`,jb="show",Ml="collapse",lp="collapsing",nke="collapsed",oke=`:scope .${Ml} .${Ml}`,ike="collapse-horizontal",rke="width",ske="height",ake=".collapse.show, .collapse.collapsing",qk='[data-bs-toggle="collapse"]',lke={parent:null,toggle:!0},cke={parent:"(null|element)",toggle:"boolean"};class au extends Oi{constructor(n,r){super(n,r),this._isTransitioning=!1,this._triggerArray=[];const l=Ke.find(qk);for(const u of l){const p=Ke.getSelectorFromElement(u),f=Ke.find(p).filter(b=>b===this._element);p!==null&&f.length&&this._triggerArray.push(u)}this._initializeChildren(),this._config.parent||this._addAriaAndCollapsedClass(this._triggerArray,this._isShown()),this._config.toggle&&this.toggle()}static get Default(){return lke}static get DefaultType(){return cke}static get NAME(){return Kbe}toggle(){this._isShown()?this.hide():this.show()}show(){if(this._isTransitioning||this._isShown())return;let n=[];if(this._config.parent&&(n=this._getFirstLevelChildren(ake).filter(b=>b!==this._element).map(b=>au.getOrCreateInstance(b,{toggle:!1}))),n.length&&n[0]._isTransitioning||Ee.trigger(this._element,Zbe).defaultPrevented)return;for(const b of n)b.hide();const l=this._getDimension();this._element.classList.remove(Ml),this._element.classList.add(lp),this._element.style[l]=0,this._addAriaAndCollapsedClass(this._triggerArray,!0),this._isTransitioning=!0;const u=()=>{this._isTransitioning=!1,this._element.classList.remove(lp),this._element.classList.add(Ml,jb),this._element.style[l]="",Ee.trigger(this._element,Jbe)},f=`scroll${l[0].toUpperCase()+l.slice(1)}`;this._queueCallback(u,this._element,!0),this._element.style[l]=`${this._element[f]}px`}hide(){if(this._isTransitioning||!this._isShown()||Ee.trigger(this._element,Xbe).defaultPrevented)return;const r=this._getDimension();this._element.style[r]=`${this._element.getBoundingClientRect()[r]}px`,vu(this._element),this._element.classList.add(lp),this._element.classList.remove(Ml,jb);for(const u of this._triggerArray){const p=Ke.getElementFromSelector(u);p&&!this._isShown(p)&&this._addAriaAndCollapsedClass([u],!1)}this._isTransitioning=!0;const l=()=>{this._isTransitioning=!1,this._element.classList.remove(lp),this._element.classList.add(Ml),Ee.trigger(this._element,eke)};this._element.style[r]="",this._queueCallback(l,this._element,!0)}_isShown(n=this._element){return n.classList.contains(jb)}_configAfterMerge(n){return n.toggle=!!n.toggle,n.parent=ws(n.parent),n}_getDimension(){return this._element.classList.contains(ike)?rke:ske}_initializeChildren(){if(!this._config.parent)return;const n=this._getFirstLevelChildren(qk);for(const r of n){const l=Ke.getElementFromSelector(r);l&&this._addAriaAndCollapsedClass([r],this._isShown(l))}}_getFirstLevelChildren(n){const r=Ke.find(oke,this._config.parent);return Ke.find(n,this._config.parent).filter(l=>!r.includes(l))}_addAriaAndCollapsedClass(n,r){if(n.length)for(const l of n)l.classList.toggle(nke,!r),l.setAttribute("aria-expanded",r)}static jQueryInterface(n){const r={};return typeof n=="string"&&/show|hide/.test(n)&&(r.toggle=!1),this.each(function(){const l=au.getOrCreateInstance(this,r);if(typeof n=="string"){if(typeof l[n]>"u")throw new TypeError(`No method named "${n}"`);l[n]()}})}}Ee.on(document,tke,qk,function(i){(i.target.tagName==="A"||i.delegateTarget&&i.delegateTarget.tagName==="A")&&i.preventDefault();for(const n of Ke.getMultipleElementsFromSelector(this))au.getOrCreateInstance(n,{toggle:!1}).toggle()});pi(au);const $T="dropdown",dke="bs.dropdown",Fa=`.${dke}`,ow=".data-api",uke="Escape",VT="Tab",hke="ArrowUp",HT="ArrowDown",pke=2,fke=`hide${Fa}`,mke=`hidden${Fa}`,gke=`show${Fa}`,bke=`shown${Fa}`,S4=`click${Fa}${ow}`,T4=`keydown${Fa}${ow}`,kke=`keyup${Fa}${ow}`,Dl="show",_ke="dropup",wke="dropend",vke="dropstart",Ake="dropup-center",Cke="dropdown-center",fa='[data-bs-toggle="dropdown"]:not(.disabled):not(:disabled)',yke=`${fa}.${Dl}`,Sp=".dropdown-menu",xke=".navbar",Eke=".navbar-nav",Ske=".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",Tke=ci()?"top-end":"top-start",Dke=ci()?"top-start":"top-end",Ike=ci()?"bottom-end":"bottom-start",Mke=ci()?"bottom-start":"bottom-end",Oke=ci()?"left-start":"right-start",Bke=ci()?"right-start":"left-start",Pke="top",Nke="bottom",Lke={autoClose:!0,boundary:"clippingParents",display:"dynamic",offset:[0,2],popperConfig:null,reference:"toggle"},Rke={autoClose:"(boolean|string)",boundary:"(string|element)",display:"string",offset:"(array|string|function)",popperConfig:"(null|object|function)",reference:"(string|element|object)"};class Di extends Oi{constructor(n,r){super(n,r),this._popper=null,this._parent=this._element.parentNode,this._menu=Ke.next(this._element,Sp)[0]||Ke.prev(this._element,Sp)[0]||Ke.findOne(Sp,this._parent),this._inNavbar=this._detectNavbar()}static get Default(){return Lke}static get DefaultType(){return Rke}static get NAME(){return $T}toggle(){return this._isShown()?this.hide():this.show()}show(){if(vs(this._element)||this._isShown())return;const n={relatedTarget:this._element};if(!Ee.trigger(this._element,gke,n).defaultPrevented){if(this._createPopper(),"ontouchstart"in document.documentElement&&!this._parent.closest(Eke))for(const l of[].concat(...document.body.children))Ee.on(l,"mouseover",af);this._element.focus(),this._element.setAttribute("aria-expanded",!0),this._menu.classList.add(Dl),this._element.classList.add(Dl),Ee.trigger(this._element,bke,n)}}hide(){if(vs(this._element)||!this._isShown())return;const n={relatedTarget:this._element};this._completeHide(n)}dispose(){this._popper&&this._popper.destroy(),super.dispose()}update(){this._inNavbar=this._detectNavbar(),this._popper&&this._popper.update()}_completeHide(n){if(!Ee.trigger(this._element,fke,n).defaultPrevented){if("ontouchstart"in document.documentElement)for(const l of[].concat(...document.body.children))Ee.off(l,"mouseover",af);this._popper&&this._popper.destroy(),this._menu.classList.remove(Dl),this._element.classList.remove(Dl),this._element.setAttribute("aria-expanded","false"),Ir.removeDataAttribute(this._menu,"popper"),Ee.trigger(this._element,mke,n)}}_getConfig(n){if(n=super._getConfig(n),typeof n.reference=="object"&&!Dr(n.reference)&&typeof n.reference.getBoundingClientRect!="function")throw new TypeError(`${$T.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`);return n}_createPopper(){if(typeof d4>"u")throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)");let n=this._element;this._config.reference==="parent"?n=this._parent:Dr(this._config.reference)?n=ws(this._config.reference):typeof this._config.reference=="object"&&(n=this._config.reference);const r=this._getPopperConfig();this._popper=ew(n,this._menu,r)}_isShown(){return this._menu.classList.contains(Dl)}_getPlacement(){const n=this._parent;if(n.classList.contains(wke))return Oke;if(n.classList.contains(vke))return Bke;if(n.classList.contains(Ake))return Pke;if(n.classList.contains(Cke))return Nke;const r=getComputedStyle(this._menu).getPropertyValue("--bs-position").trim()==="end";return n.classList.contains(_ke)?r?Dke:Tke:r?Mke:Ike}_detectNavbar(){return this._element.closest(xke)!==null}_getOffset(){const{offset:n}=this._config;return typeof n=="string"?n.split(",").map(r=>Number.parseInt(r,10)):typeof n=="function"?r=>n(r,this._element):n}_getPopperConfig(){const n={placement:this._getPlacement(),modifiers:[{name:"preventOverflow",options:{boundary:this._config.boundary}},{name:"offset",options:{offset:this._getOffset()}}]};return(this._inNavbar||this._config.display==="static")&&(Ir.setDataAttribute(this._menu,"popper","static"),n.modifiers=[{name:"applyStyles",enabled:!1}]),{...n,...Eo(this._config.popperConfig,[n])}}_selectMenuItem({key:n,target:r}){const l=Ke.find(Ske,this._menu).filter(u=>mc(u));l.length&&tw(l,r,n===HT,!l.includes(r)).focus()}static jQueryInterface(n){return this.each(function(){const r=Di.getOrCreateInstance(this,n);if(typeof n=="string"){if(typeof r[n]>"u")throw new TypeError(`No method named "${n}"`);r[n]()}})}static clearMenus(n){if(n.button===pke||n.type==="keyup"&&n.key!==VT)return;const r=Ke.find(yke);for(const l of r){const u=Di.getInstance(l);if(!u||u._config.autoClose===!1)continue;const p=n.composedPath(),f=p.includes(u._menu);if(p.includes(u._element)||u._config.autoClose==="inside"&&!f||u._config.autoClose==="outside"&&f||u._menu.contains(n.target)&&(n.type==="keyup"&&n.key===VT||/input|select|option|textarea|form/i.test(n.target.tagName)))continue;const b={relatedTarget:u._element};n.type==="click"&&(b.clickEvent=n),u._completeHide(b)}}static dataApiKeydownHandler(n){const r=/input|textarea/i.test(n.target.tagName),l=n.key===uke,u=[hke,HT].includes(n.key);if(!u&&!l||r&&!l)return;n.preventDefault();const p=this.matches(fa)?this:Ke.prev(this,fa)[0]||Ke.next(this,fa)[0]||Ke.findOne(fa,n.delegateTarget.parentNode),f=Di.getOrCreateInstance(p);if(u){n.stopPropagation(),f.show(),f._selectMenuItem(n);return}f._isShown()&&(n.stopPropagation(),f.hide(),p.focus())}}Ee.on(document,T4,fa,Di.dataApiKeydownHandler);Ee.on(document,T4,Sp,Di.dataApiKeydownHandler);Ee.on(document,S4,Di.clearMenus);Ee.on(document,kke,Di.clearMenus);Ee.on(document,S4,fa,function(i){i.preventDefault(),Di.getOrCreateInstance(this).toggle()});pi(Di);const D4="backdrop",Fke="fade",UT="show",qT=`mousedown.bs.${D4}`,zke={className:"modal-backdrop",clickCallback:null,isAnimated:!1,isVisible:!0,rootElement:"body"},jke={className:"string",clickCallback:"(function|null)",isAnimated:"boolean",isVisible:"boolean",rootElement:"(element|string)"};class I4 extends Au{constructor(n){super(),this._config=this._getConfig(n),this._isAppended=!1,this._element=null}static get Default(){return zke}static get DefaultType(){return jke}static get NAME(){return D4}show(n){if(!this._config.isVisible){Eo(n);return}this._append();const r=this._getElement();this._config.isAnimated&&vu(r),r.classList.add(UT),this._emulateAnimation(()=>{Eo(n)})}hide(n){if(!this._config.isVisible){Eo(n);return}this._getElement().classList.remove(UT),this._emulateAnimation(()=>{this.dispose(),Eo(n)})}dispose(){this._isAppended&&(Ee.off(this._element,qT),this._element.remove(),this._isAppended=!1)}_getElement(){if(!this._element){const n=document.createElement("div");n.className=this._config.className,this._config.isAnimated&&n.classList.add(Fke),this._element=n}return this._element}_configAfterMerge(n){return n.rootElement=ws(n.rootElement),n}_append(){if(this._isAppended)return;const n=this._getElement();this._config.rootElement.append(n),Ee.on(n,qT,()=>{Eo(this._config.clickCallback)}),this._isAppended=!0}_emulateAnimation(n){m4(n,this._getElement(),this._config.isAnimated)}}const $ke="focustrap",Vke="bs.focustrap",cf=`.${Vke}`,Hke=`focusin${cf}`,Uke=`keydown.tab${cf}`,qke="Tab",Gke="forward",GT="backward",Wke={autofocus:!0,trapElement:null},Kke={autofocus:"boolean",trapElement:"element"};class M4 extends Au{constructor(n){super(),this._config=this._getConfig(n),this._isActive=!1,this._lastTabNavDirection=null}static get Default(){return Wke}static get DefaultType(){return Kke}static get NAME(){return $ke}activate(){this._isActive||(this._config.autofocus&&this._config.trapElement.focus(),Ee.off(document,cf),Ee.on(document,Hke,n=>this._handleFocusin(n)),Ee.on(document,Uke,n=>this._handleKeydown(n)),this._isActive=!0)}deactivate(){this._isActive&&(this._isActive=!1,Ee.off(document,cf))}_handleFocusin(n){const{trapElement:r}=this._config;if(n.target===document||n.target===r||r.contains(n.target))return;const l=Ke.focusableChildren(r);l.length===0?r.focus():this._lastTabNavDirection===GT?l[l.length-1].focus():l[0].focus()}_handleKeydown(n){n.key===qke&&(this._lastTabNavDirection=n.shiftKey?GT:Gke)}}const WT=".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",KT=".sticky-top",cp="padding-right",YT="margin-right";class Gk{constructor(){this._element=document.body}getWidth(){const n=document.documentElement.clientWidth;return Math.abs(window.innerWidth-n)}hide(){const n=this.getWidth();this._disableOverFlow(),this._setElementAttributes(this._element,cp,r=>r+n),this._setElementAttributes(WT,cp,r=>r+n),this._setElementAttributes(KT,YT,r=>r-n)}reset(){this._resetElementAttributes(this._element,"overflow"),this._resetElementAttributes(this._element,cp),this._resetElementAttributes(WT,cp),this._resetElementAttributes(KT,YT)}isOverflowing(){return this.getWidth()>0}_disableOverFlow(){this._saveInitialAttribute(this._element,"overflow"),this._element.style.overflow="hidden"}_setElementAttributes(n,r,l){const u=this.getWidth(),p=f=>{if(f!==this._element&&window.innerWidth>f.clientWidth+u)return;this._saveInitialAttribute(f,r);const b=window.getComputedStyle(f).getPropertyValue(r);f.style.setProperty(r,`${l(Number.parseFloat(b))}px`)};this._applyManipulationCallback(n,p)}_saveInitialAttribute(n,r){const l=n.style.getPropertyValue(r);l&&Ir.setDataAttribute(n,r,l)}_resetElementAttributes(n,r){const l=u=>{const p=Ir.getDataAttribute(u,r);if(p===null){u.style.removeProperty(r);return}Ir.removeDataAttribute(u,r),u.style.setProperty(r,p)};this._applyManipulationCallback(n,l)}_applyManipulationCallback(n,r){if(Dr(n)){r(n);return}for(const l of Ke.find(n,this._element))r(l)}}const Yke="modal",Qke="bs.modal",di=`.${Qke}`,Zke=".data-api",Jke="Escape",Xke=`hide${di}`,e_e=`hidePrevented${di}`,O4=`hidden${di}`,B4=`show${di}`,t_e=`shown${di}`,n_e=`resize${di}`,o_e=`click.dismiss${di}`,i_e=`mousedown.dismiss${di}`,r_e=`keydown.dismiss${di}`,s_e=`click${di}${Zke}`,QT="modal-open",a_e="fade",ZT="show",$b="modal-static",l_e=".modal.show",c_e=".modal-dialog",d_e=".modal-body",u_e='[data-bs-toggle="modal"]',h_e={backdrop:!0,focus:!0,keyboard:!0},p_e={backdrop:"(boolean|string)",focus:"boolean",keyboard:"boolean"};class ic extends Oi{constructor(n,r){super(n,r),this._dialog=Ke.findOne(c_e,this._element),this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._isShown=!1,this._isTransitioning=!1,this._scrollBar=new Gk,this._addEventListeners()}static get Default(){return h_e}static get DefaultType(){return p_e}static get NAME(){return Yke}toggle(n){return this._isShown?this.hide():this.show(n)}show(n){this._isShown||this._isTransitioning||Ee.trigger(this._element,B4,{relatedTarget:n}).defaultPrevented||(this._isShown=!0,this._isTransitioning=!0,this._scrollBar.hide(),document.body.classList.add(QT),this._adjustDialog(),this._backdrop.show(()=>this._showElement(n)))}hide(){!this._isShown||this._isTransitioning||Ee.trigger(this._element,Xke).defaultPrevented||(this._isShown=!1,this._isTransitioning=!0,this._focustrap.deactivate(),this._element.classList.remove(ZT),this._queueCallback(()=>this._hideModal(),this._element,this._isAnimated()))}dispose(){Ee.off(window,di),Ee.off(this._dialog,di),this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()}handleUpdate(){this._adjustDialog()}_initializeBackDrop(){return new I4({isVisible:!!this._config.backdrop,isAnimated:this._isAnimated()})}_initializeFocusTrap(){return new M4({trapElement:this._element})}_showElement(n){document.body.contains(this._element)||document.body.append(this._element),this._element.style.display="block",this._element.removeAttribute("aria-hidden"),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.scrollTop=0;const r=Ke.findOne(d_e,this._dialog);r&&(r.scrollTop=0),vu(this._element),this._element.classList.add(ZT);const l=()=>{this._config.focus&&this._focustrap.activate(),this._isTransitioning=!1,Ee.trigger(this._element,t_e,{relatedTarget:n})};this._queueCallback(l,this._dialog,this._isAnimated())}_addEventListeners(){Ee.on(this._element,r_e,n=>{if(n.key===Jke){if(this._config.keyboard){this.hide();return}this._triggerBackdropTransition()}}),Ee.on(window,n_e,()=>{this._isShown&&!this._isTransitioning&&this._adjustDialog()}),Ee.on(this._element,i_e,n=>{Ee.one(this._element,o_e,r=>{if(!(this._element!==n.target||this._element!==r.target)){if(this._config.backdrop==="static"){this._triggerBackdropTransition();return}this._config.backdrop&&this.hide()}})})}_hideModal(){this._element.style.display="none",this._element.setAttribute("aria-hidden",!0),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._isTransitioning=!1,this._backdrop.hide(()=>{document.body.classList.remove(QT),this._resetAdjustments(),this._scrollBar.reset(),Ee.trigger(this._element,O4)})}_isAnimated(){return this._element.classList.contains(a_e)}_triggerBackdropTransition(){if(Ee.trigger(this._element,e_e).defaultPrevented)return;const r=this._element.scrollHeight>document.documentElement.clientHeight,l=this._element.style.overflowY;l==="hidden"||this._element.classList.contains($b)||(r||(this._element.style.overflowY="hidden"),this._element.classList.add($b),this._queueCallback(()=>{this._element.classList.remove($b),this._queueCallback(()=>{this._element.style.overflowY=l},this._dialog)},this._dialog),this._element.focus())}_adjustDialog(){const n=this._element.scrollHeight>document.documentElement.clientHeight,r=this._scrollBar.getWidth(),l=r>0;if(l&&!n){const u=ci()?"paddingLeft":"paddingRight";this._element.style[u]=`${r}px`}if(!l&&n){const u=ci()?"paddingRight":"paddingLeft";this._element.style[u]=`${r}px`}}_resetAdjustments(){this._element.style.paddingLeft="",this._element.style.paddingRight=""}static jQueryInterface(n,r){return this.each(function(){const l=ic.getOrCreateInstance(this,n);if(typeof n=="string"){if(typeof l[n]>"u")throw new TypeError(`No method named "${n}"`);l[n](r)}})}}Ee.on(document,s_e,u_e,function(i){const n=Ke.getElementFromSelector(this);["A","AREA"].includes(this.tagName)&&i.preventDefault(),Ee.one(n,B4,u=>{u.defaultPrevented||Ee.one(n,O4,()=>{mc(this)&&this.focus()})});const r=Ke.findOne(l_e);r&&ic.getInstance(r).hide(),ic.getOrCreateInstance(n).toggle(this)});zf(ic);pi(ic);const f_e="offcanvas",m_e="bs.offcanvas",Nr=`.${m_e}`,P4=".data-api",g_e=`load${Nr}${P4}`,b_e="Escape",JT="show",XT="showing",eD="hiding",k_e="offcanvas-backdrop",N4=".offcanvas.show",__e=`show${Nr}`,w_e=`shown${Nr}`,v_e=`hide${Nr}`,tD=`hidePrevented${Nr}`,L4=`hidden${Nr}`,A_e=`resize${Nr}`,C_e=`click${Nr}${P4}`,y_e=`keydown.dismiss${Nr}`,x_e='[data-bs-toggle="offcanvas"]',E_e={backdrop:!0,keyboard:!0,scroll:!1},S_e={backdrop:"(boolean|string)",keyboard:"boolean",scroll:"boolean"};class As extends Oi{constructor(n,r){super(n,r),this._isShown=!1,this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._addEventListeners()}static get Default(){return E_e}static get DefaultType(){return S_e}static get NAME(){return f_e}toggle(n){return this._isShown?this.hide():this.show(n)}show(n){if(this._isShown||Ee.trigger(this._element,__e,{relatedTarget:n}).defaultPrevented)return;this._isShown=!0,this._backdrop.show(),this._config.scroll||new Gk().hide(),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.classList.add(XT);const l=()=>{(!this._config.scroll||this._config.backdrop)&&this._focustrap.activate(),this._element.classList.add(JT),this._element.classList.remove(XT),Ee.trigger(this._element,w_e,{relatedTarget:n})};this._queueCallback(l,this._element,!0)}hide(){if(!this._isShown||Ee.trigger(this._element,v_e).defaultPrevented)return;this._focustrap.deactivate(),this._element.blur(),this._isShown=!1,this._element.classList.add(eD),this._backdrop.hide();const r=()=>{this._element.classList.remove(JT,eD),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._config.scroll||new Gk().reset(),Ee.trigger(this._element,L4)};this._queueCallback(r,this._element,!0)}dispose(){this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()}_initializeBackDrop(){const n=()=>{if(this._config.backdrop==="static"){Ee.trigger(this._element,tD);return}this.hide()},r=!!this._config.backdrop;return new I4({className:k_e,isVisible:r,isAnimated:!0,rootElement:this._element.parentNode,clickCallback:r?n:null})}_initializeFocusTrap(){return new M4({trapElement:this._element})}_addEventListeners(){Ee.on(this._element,y_e,n=>{if(n.key===b_e){if(this._config.keyboard){this.hide();return}Ee.trigger(this._element,tD)}})}static jQueryInterface(n){return this.each(function(){const r=As.getOrCreateInstance(this,n);if(typeof n=="string"){if(r[n]===void 0||n.startsWith("_")||n==="constructor")throw new TypeError(`No method named "${n}"`);r[n](this)}})}}Ee.on(document,C_e,x_e,function(i){const n=Ke.getElementFromSelector(this);if(["A","AREA"].includes(this.tagName)&&i.preventDefault(),vs(this))return;Ee.one(n,L4,()=>{mc(this)&&this.focus()});const r=Ke.findOne(N4);r&&r!==n&&As.getInstance(r).hide(),As.getOrCreateInstance(n).toggle(this)});Ee.on(window,g_e,()=>{for(const i of Ke.find(N4))As.getOrCreateInstance(i).show()});Ee.on(window,A_e,()=>{for(const i of Ke.find("[aria-modal][class*=show][class*=offcanvas-]"))getComputedStyle(i).position!=="fixed"&&As.getOrCreateInstance(i).hide()});zf(As);pi(As);const T_e=/^aria-[\w-]*$/i,R4={"*":["class","dir","id","lang","role",T_e],a:["target","href","title","rel"],area:[],b:[],br:[],col:[],code:[],div:[],em:[],hr:[],h1:[],h2:[],h3:[],h4:[],h5:[],h6:[],i:[],img:["src","srcset","alt","title","width","height"],li:[],ol:[],p:[],pre:[],s:[],small:[],span:[],sub:[],sup:[],strong:[],u:[],ul:[]},D_e=new Set(["background","cite","href","itemtype","longdesc","poster","src","xlink:href"]),I_e=/^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:/?#]*(?:[/?#]|$))/i,M_e=(i,n)=>{const r=i.nodeName.toLowerCase();return n.includes(r)?D_e.has(r)?!!I_e.test(i.nodeValue):!0:n.filter(l=>l instanceof RegExp).some(l=>l.test(r))};function O_e(i,n,r){if(!i.length)return i;if(r&&typeof r=="function")return r(i);const u=new window.DOMParser().parseFromString(i,"text/html"),p=[].concat(...u.body.querySelectorAll("*"));for(const f of p){const b=f.nodeName.toLowerCase();if(!Object.keys(n).includes(b)){f.remove();continue}const m=[].concat(...f.attributes),A=[].concat(n["*"]||[],n[b]||[]);for(const v of m)M_e(v,A)||f.removeAttribute(v.nodeName)}return u.body.innerHTML}const B_e="TemplateFactory",P_e={allowList:R4,content:{},extraClass:"",html:!1,sanitize:!0,sanitizeFn:null,template:"<div></div>"},N_e={allowList:"object",content:"object",extraClass:"(string|function)",html:"boolean",sanitize:"boolean",sanitizeFn:"(null|function)",template:"string"},L_e={entry:"(string|element|function|null)",selector:"(string|element)"};class R_e extends Au{constructor(n){super(),this._config=this._getConfig(n)}static get Default(){return P_e}static get DefaultType(){return N_e}static get NAME(){return B_e}getContent(){return Object.values(this._config.content).map(n=>this._resolvePossibleFunction(n)).filter(Boolean)}hasContent(){return this.getContent().length>0}changeContent(n){return this._checkContent(n),this._config.content={...this._config.content,...n},this}toHtml(){const n=document.createElement("div");n.innerHTML=this._maybeSanitize(this._config.template);for(const[u,p]of Object.entries(this._config.content))this._setContent(n,p,u);const r=n.children[0],l=this._resolvePossibleFunction(this._config.extraClass);return l&&r.classList.add(...l.split(" ")),r}_typeCheckConfig(n){super._typeCheckConfig(n),this._checkContent(n.content)}_checkContent(n){for(const[r,l]of Object.entries(n))super._typeCheckConfig({selector:r,entry:l},L_e)}_setContent(n,r,l){const u=Ke.findOne(l,n);if(u){if(r=this._resolvePossibleFunction(r),!r){u.remove();return}if(Dr(r)){this._putElementInTemplate(ws(r),u);return}if(this._config.html){u.innerHTML=this._maybeSanitize(r);return}u.textContent=r}}_maybeSanitize(n){return this._config.sanitize?O_e(n,this._config.allowList,this._config.sanitizeFn):n}_resolvePossibleFunction(n){return Eo(n,[this])}_putElementInTemplate(n,r){if(this._config.html){r.innerHTML="",r.append(n);return}r.textContent=n.textContent}}const F_e="tooltip",z_e=new Set(["sanitize","allowList","sanitizeFn"]),Vb="fade",j_e="modal",dp="show",$_e=".tooltip-inner",nD=`.${j_e}`,oD="hide.bs.modal",Bd="hover",Hb="focus",V_e="click",H_e="manual",U_e="hide",q_e="hidden",G_e="show",W_e="shown",K_e="inserted",Y_e="click",Q_e="focusin",Z_e="focusout",J_e="mouseenter",X_e="mouseleave",ewe={AUTO:"auto",TOP:"top",RIGHT:ci()?"left":"right",BOTTOM:"bottom",LEFT:ci()?"right":"left"},twe={allowList:R4,animation:!0,boundary:"clippingParents",container:!1,customClass:"",delay:0,fallbackPlacements:["top","right","bottom","left"],html:!1,offset:[0,6],placement:"top",popperConfig:null,sanitize:!0,sanitizeFn:null,selector:!1,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',title:"",trigger:"hover focus"},nwe={allowList:"object",animation:"boolean",boundary:"(string|element)",container:"(string|element|boolean)",customClass:"(string|function)",delay:"(number|object)",fallbackPlacements:"array",html:"boolean",offset:"(array|string|function)",placement:"(string|function)",popperConfig:"(null|object|function)",sanitize:"boolean",sanitizeFn:"(null|function)",selector:"(string|boolean)",template:"string",title:"(string|element|function)",trigger:"string"};class za extends Oi{constructor(n,r){if(typeof d4>"u")throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org)");super(n,r),this._isEnabled=!0,this._timeout=0,this._isHovered=null,this._activeTrigger={},this._popper=null,this._templateFactory=null,this._newContent=null,this.tip=null,this._setListeners(),this._config.selector||this._fixTitle()}static get Default(){return twe}static get DefaultType(){return nwe}static get NAME(){return F_e}enable(){this._isEnabled=!0}disable(){this._isEnabled=!1}toggleEnabled(){this._isEnabled=!this._isEnabled}toggle(){if(this._isEnabled){if(this._activeTrigger.click=!this._activeTrigger.click,this._isShown()){this._leave();return}this._enter()}}dispose(){clearTimeout(this._timeout),Ee.off(this._element.closest(nD),oD,this._hideModalHandler),this._element.getAttribute("data-bs-original-title")&&this._element.setAttribute("title",this._element.getAttribute("data-bs-original-title")),this._disposePopper(),super.dispose()}show(){if(this._element.style.display==="none")throw new Error("Please use show on visible elements");if(!(this._isWithContent()&&this._isEnabled))return;const n=Ee.trigger(this._element,this.constructor.eventName(G_e)),l=(p4(this._element)||this._element.ownerDocument.documentElement).contains(this._element);if(n.defaultPrevented||!l)return;this._disposePopper();const u=this._getTipElement();this._element.setAttribute("aria-describedby",u.getAttribute("id"));const{container:p}=this._config;if(this._element.ownerDocument.documentElement.contains(this.tip)||(p.append(u),Ee.trigger(this._element,this.constructor.eventName(K_e))),this._popper=this._createPopper(u),u.classList.add(dp),"ontouchstart"in document.documentElement)for(const b of[].concat(...document.body.children))Ee.on(b,"mouseover",af);const f=()=>{Ee.trigger(this._element,this.constructor.eventName(W_e)),this._isHovered===!1&&this._leave(),this._isHovered=!1};this._queueCallback(f,this.tip,this._isAnimated())}hide(){if(!this._isShown()||Ee.trigger(this._element,this.constructor.eventName(U_e)).defaultPrevented)return;if(this._getTipElement().classList.remove(dp),"ontouchstart"in document.documentElement)for(const u of[].concat(...document.body.children))Ee.off(u,"mouseover",af);this._activeTrigger[V_e]=!1,this._activeTrigger[Hb]=!1,this._activeTrigger[Bd]=!1,this._isHovered=null;const l=()=>{this._isWithActiveTrigger()||(this._isHovered||this._disposePopper(),this._element.removeAttribute("aria-describedby"),Ee.trigger(this._element,this.constructor.eventName(q_e)))};this._queueCallback(l,this.tip,this._isAnimated())}update(){this._popper&&this._popper.update()}_isWithContent(){return!!this._getTitle()}_getTipElement(){return this.tip||(this.tip=this._createTipElement(this._newContent||this._getContentForTemplate())),this.tip}_createTipElement(n){const r=this._getTemplateFactory(n).toHtml();if(!r)return null;r.classList.remove(Vb,dp),r.classList.add(`bs-${this.constructor.NAME}-auto`);const l=Vge(this.constructor.NAME).toString();return r.setAttribute("id",l),this._isAnimated()&&r.classList.add(Vb),r}setContent(n){this._newContent=n,this._isShown()&&(this._disposePopper(),this.show())}_getTemplateFactory(n){return this._templateFactory?this._templateFactory.changeContent(n):this._templateFactory=new R_e({...this._config,content:n,extraClass:this._resolvePossibleFunction(this._config.customClass)}),this._templateFactory}_getContentForTemplate(){return{[$_e]:this._getTitle()}}_getTitle(){return this._resolvePossibleFunction(this._config.title)||this._element.getAttribute("data-bs-original-title")}_initializeOnDelegatedTarget(n){return this.constructor.getOrCreateInstance(n.delegateTarget,this._getDelegateConfig())}_isAnimated(){return this._config.animation||this.tip&&this.tip.classList.contains(Vb)}_isShown(){return this.tip&&this.tip.classList.contains(dp)}_createPopper(n){const r=Eo(this._config.placement,[this,n,this._element]),l=ewe[r.toUpperCase()];return ew(this._element,n,this._getPopperConfig(l))}_getOffset(){const{offset:n}=this._config;return typeof n=="string"?n.split(",").map(r=>Number.parseInt(r,10)):typeof n=="function"?r=>n(r,this._element):n}_resolvePossibleFunction(n){return Eo(n,[this._element])}_getPopperConfig(n){const r={placement:n,modifiers:[{name:"flip",options:{fallbackPlacements:this._config.fallbackPlacements}},{name:"offset",options:{offset:this._getOffset()}},{name:"preventOverflow",options:{boundary:this._config.boundary}},{name:"arrow",options:{element:`.${this.constructor.NAME}-arrow`}},{name:"preSetPlacement",enabled:!0,phase:"beforeMain",fn:l=>{this._getTipElement().setAttribute("data-popper-placement",l.state.placement)}}]};return{...r,...Eo(this._config.popperConfig,[r])}}_setListeners(){const n=this._config.trigger.split(" ");for(const r of n)if(r==="click")Ee.on(this._element,this.constructor.eventName(Y_e),this._config.selector,l=>{this._initializeOnDelegatedTarget(l).toggle()});else if(r!==H_e){const l=r===Bd?this.constructor.eventName(J_e):this.constructor.eventName(Q_e),u=r===Bd?this.constructor.eventName(X_e):this.constructor.eventName(Z_e);Ee.on(this._element,l,this._config.selector,p=>{const f=this._initializeOnDelegatedTarget(p);f._activeTrigger[p.type==="focusin"?Hb:Bd]=!0,f._enter()}),Ee.on(this._element,u,this._config.selector,p=>{const f=this._initializeOnDelegatedTarget(p);f._activeTrigger[p.type==="focusout"?Hb:Bd]=f._element.contains(p.relatedTarget),f._leave()})}this._hideModalHandler=()=>{this._element&&this.hide()},Ee.on(this._element.closest(nD),oD,this._hideModalHandler)}_fixTitle(){const n=this._element.getAttribute("title");n&&(!this._element.getAttribute("aria-label")&&!this._element.textContent.trim()&&this._element.setAttribute("aria-label",n),this._element.setAttribute("data-bs-original-title",n),this._element.removeAttribute("title"))}_enter(){if(this._isShown()||this._isHovered){this._isHovered=!0;return}this._isHovered=!0,this._setTimeout(()=>{this._isHovered&&this.show()},this._config.delay.show)}_leave(){this._isWithActiveTrigger()||(this._isHovered=!1,this._setTimeout(()=>{this._isHovered||this.hide()},this._config.delay.hide))}_setTimeout(n,r){clearTimeout(this._timeout),this._timeout=setTimeout(n,r)}_isWithActiveTrigger(){return Object.values(this._activeTrigger).includes(!0)}_getConfig(n){const r=Ir.getDataAttributes(this._element);for(const l of Object.keys(r))z_e.has(l)&&delete r[l];return n={...r,...typeof n=="object"&&n?n:{}},n=this._mergeConfigObj(n),n=this._configAfterMerge(n),this._typeCheckConfig(n),n}_configAfterMerge(n){return n.container=n.container===!1?document.body:ws(n.container),typeof n.delay=="number"&&(n.delay={show:n.delay,hide:n.delay}),typeof n.title=="number"&&(n.title=n.title.toString()),typeof n.content=="number"&&(n.content=n.content.toString()),n}_getDelegateConfig(){const n={};for(const[r,l]of Object.entries(this._config))this.constructor.Default[r]!==l&&(n[r]=l);return n.selector=!1,n.trigger="manual",n}_disposePopper(){this._popper&&(this._popper.destroy(),this._popper=null),this.tip&&(this.tip.remove(),this.tip=null)}static jQueryInterface(n){return this.each(function(){const r=za.getOrCreateInstance(this,n);if(typeof n=="string"){if(typeof r[n]>"u")throw new TypeError(`No method named "${n}"`);r[n]()}})}}pi(za);const owe="popover",iwe=".popover-header",rwe=".popover-body",swe={...za.Default,content:"",offset:[0,8],placement:"right",template:'<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',trigger:"click"},awe={...za.DefaultType,content:"(null|string|element|function)"};class Vf extends za{static get Default(){return swe}static get DefaultType(){return awe}static get NAME(){return owe}_isWithContent(){return this._getTitle()||this._getContent()}_getContentForTemplate(){return{[iwe]:this._getTitle(),[rwe]:this._getContent()}}_getContent(){return this._resolvePossibleFunction(this._config.content)}static jQueryInterface(n){return this.each(function(){const r=Vf.getOrCreateInstance(this,n);if(typeof n=="string"){if(typeof r[n]>"u")throw new TypeError(`No method named "${n}"`);r[n]()}})}}pi(Vf);const lwe="scrollspy",cwe="bs.scrollspy",iw=`.${cwe}`,dwe=".data-api",uwe=`activate${iw}`,iD=`click${iw}`,hwe=`load${iw}${dwe}`,pwe="dropdown-item",yl="active",fwe='[data-bs-spy="scroll"]',Ub="[href]",mwe=".nav, .list-group",rD=".nav-link",gwe=".nav-item",bwe=".list-group-item",kwe=`${rD}, ${gwe} > ${rD}, ${bwe}`,_we=".dropdown",wwe=".dropdown-toggle",vwe={offset:null,rootMargin:"0px 0px -25%",smoothScroll:!1,target:null,threshold:[.1,.5,1]},Awe={offset:"(number|null)",rootMargin:"string",smoothScroll:"boolean",target:"element",threshold:"array"};class Hf extends Oi{constructor(n,r){super(n,r),this._targetLinks=new Map,this._observableSections=new Map,this._rootElement=getComputedStyle(this._element).overflowY==="visible"?null:this._element,this._activeTarget=null,this._observer=null,this._previousScrollData={visibleEntryTop:0,parentScrollTop:0},this.refresh()}static get Default(){return vwe}static get DefaultType(){return Awe}static get NAME(){return lwe}refresh(){this._initializeTargetsAndObservables(),this._maybeEnableSmoothScroll(),this._observer?this._observer.disconnect():this._observer=this._getNewObserver();for(const n of this._observableSections.values())this._observer.observe(n)}dispose(){this._observer.disconnect(),super.dispose()}_configAfterMerge(n){return n.target=ws(n.target)||document.body,n.rootMargin=n.offset?`${n.offset}px 0px -30%`:n.rootMargin,typeof n.threshold=="string"&&(n.threshold=n.threshold.split(",").map(r=>Number.parseFloat(r))),n}_maybeEnableSmoothScroll(){this._config.smoothScroll&&(Ee.off(this._config.target,iD),Ee.on(this._config.target,iD,Ub,n=>{const r=this._observableSections.get(n.target.hash);if(r){n.preventDefault();const l=this._rootElement||window,u=r.offsetTop-this._element.offsetTop;if(l.scrollTo){l.scrollTo({top:u,behavior:"smooth"});return}l.scrollTop=u}}))}_getNewObserver(){const n={root:this._rootElement,threshold:this._config.threshold,rootMargin:this._config.rootMargin};return new IntersectionObserver(r=>this._observerCallback(r),n)}_observerCallback(n){const r=f=>this._targetLinks.get(`#${f.target.id}`),l=f=>{this._previousScrollData.visibleEntryTop=f.target.offsetTop,this._process(r(f))},u=(this._rootElement||document.documentElement).scrollTop,p=u>=this._previousScrollData.parentScrollTop;this._previousScrollData.parentScrollTop=u;for(const f of n){if(!f.isIntersecting){this._activeTarget=null,this._clearActiveClass(r(f));continue}const b=f.target.offsetTop>=this._previousScrollData.visibleEntryTop;if(p&&b){if(l(f),!u)return;continue}!p&&!b&&l(f)}}_initializeTargetsAndObservables(){this._targetLinks=new Map,this._observableSections=new Map;const n=Ke.find(Ub,this._config.target);for(const r of n){if(!r.hash||vs(r))continue;const l=Ke.findOne(decodeURI(r.hash),this._element);mc(l)&&(this._targetLinks.set(decodeURI(r.hash),r),this._observableSections.set(r.hash,l))}}_process(n){this._activeTarget!==n&&(this._clearActiveClass(this._config.target),this._activeTarget=n,n.classList.add(yl),this._activateParents(n),Ee.trigger(this._element,uwe,{relatedTarget:n}))}_activateParents(n){if(n.classList.contains(pwe)){Ke.findOne(wwe,n.closest(_we)).classList.add(yl);return}for(const r of Ke.parents(n,mwe))for(const l of Ke.prev(r,kwe))l.classList.add(yl)}_clearActiveClass(n){n.classList.remove(yl);const r=Ke.find(`${Ub}.${yl}`,n);for(const l of r)l.classList.remove(yl)}static jQueryInterface(n){return this.each(function(){const r=Hf.getOrCreateInstance(this,n);if(typeof n=="string"){if(r[n]===void 0||n.startsWith("_")||n==="constructor")throw new TypeError(`No method named "${n}"`);r[n]()}})}}Ee.on(window,hwe,()=>{for(const i of Ke.find(fwe))Hf.getOrCreateInstance(i)});pi(Hf);const Cwe="tab",ywe="bs.tab",ja=`.${ywe}`,xwe=`hide${ja}`,Ewe=`hidden${ja}`,Swe=`show${ja}`,Twe=`shown${ja}`,Dwe=`click${ja}`,Iwe=`keydown${ja}`,Mwe=`load${ja}`,Owe="ArrowLeft",sD="ArrowRight",Bwe="ArrowUp",aD="ArrowDown",qb="Home",lD="End",ma="active",cD="fade",Gb="show",Pwe="dropdown",Nwe=".dropdown-toggle",Lwe=".dropdown-menu",Wb=":not(.dropdown-toggle)",Rwe='.list-group, .nav, [role="tablist"]',Fwe=".nav-item, .list-group-item",zwe=`.nav-link${Wb}, .list-group-item${Wb}, [role="tab"]${Wb}`,F4='[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]',Kb=`${zwe}, ${F4}`,jwe=`.${ma}[data-bs-toggle="tab"], .${ma}[data-bs-toggle="pill"], .${ma}[data-bs-toggle="list"]`;class rc extends Oi{constructor(n){super(n),this._parent=this._element.closest(Rwe),this._parent&&(this._setInitialAttributes(this._parent,this._getChildren()),Ee.on(this._element,Iwe,r=>this._keydown(r)))}static get NAME(){return Cwe}show(){const n=this._element;if(this._elemIsActive(n))return;const r=this._getActiveElem(),l=r?Ee.trigger(r,xwe,{relatedTarget:n}):null;Ee.trigger(n,Swe,{relatedTarget:r}).defaultPrevented||l&&l.defaultPrevented||(this._deactivate(r,n),this._activate(n,r))}_activate(n,r){if(!n)return;n.classList.add(ma),this._activate(Ke.getElementFromSelector(n));const l=()=>{if(n.getAttribute("role")!=="tab"){n.classList.add(Gb);return}n.removeAttribute("tabindex"),n.setAttribute("aria-selected",!0),this._toggleDropDown(n,!0),Ee.trigger(n,Twe,{relatedTarget:r})};this._queueCallback(l,n,n.classList.contains(cD))}_deactivate(n,r){if(!n)return;n.classList.remove(ma),n.blur(),this._deactivate(Ke.getElementFromSelector(n));const l=()=>{if(n.getAttribute("role")!=="tab"){n.classList.remove(Gb);return}n.setAttribute("aria-selected",!1),n.setAttribute("tabindex","-1"),this._toggleDropDown(n,!1),Ee.trigger(n,Ewe,{relatedTarget:r})};this._queueCallback(l,n,n.classList.contains(cD))}_keydown(n){if(![Owe,sD,Bwe,aD,qb,lD].includes(n.key))return;n.stopPropagation(),n.preventDefault();const r=this._getChildren().filter(u=>!vs(u));let l;if([qb,lD].includes(n.key))l=r[n.key===qb?0:r.length-1];else{const u=[sD,aD].includes(n.key);l=tw(r,n.target,u,!0)}l&&(l.focus({preventScroll:!0}),rc.getOrCreateInstance(l).show())}_getChildren(){return Ke.find(Kb,this._parent)}_getActiveElem(){return this._getChildren().find(n=>this._elemIsActive(n))||null}_setInitialAttributes(n,r){this._setAttributeIfNotExists(n,"role","tablist");for(const l of r)this._setInitialAttributesOnChild(l)}_setInitialAttributesOnChild(n){n=this._getInnerElement(n);const r=this._elemIsActive(n),l=this._getOuterElement(n);n.setAttribute("aria-selected",r),l!==n&&this._setAttributeIfNotExists(l,"role","presentation"),r||n.setAttribute("tabindex","-1"),this._setAttributeIfNotExists(n,"role","tab"),this._setInitialAttributesOnTargetPanel(n)}_setInitialAttributesOnTargetPanel(n){const r=Ke.getElementFromSelector(n);r&&(this._setAttributeIfNotExists(r,"role","tabpanel"),n.id&&this._setAttributeIfNotExists(r,"aria-labelledby",`${n.id}`))}_toggleDropDown(n,r){const l=this._getOuterElement(n);if(!l.classList.contains(Pwe))return;const u=(p,f)=>{const b=Ke.findOne(p,l);b&&b.classList.toggle(f,r)};u(Nwe,ma),u(Lwe,Gb),l.setAttribute("aria-expanded",r)}_setAttributeIfNotExists(n,r,l){n.hasAttribute(r)||n.setAttribute(r,l)}_elemIsActive(n){return n.classList.contains(ma)}_getInnerElement(n){return n.matches(Kb)?n:Ke.findOne(Kb,n)}_getOuterElement(n){return n.closest(Fwe)||n}static jQueryInterface(n){return this.each(function(){const r=rc.getOrCreateInstance(this);if(typeof n=="string"){if(r[n]===void 0||n.startsWith("_")||n==="constructor")throw new TypeError(`No method named "${n}"`);r[n]()}})}}Ee.on(document,Dwe,F4,function(i){["A","AREA"].includes(this.tagName)&&i.preventDefault(),!vs(this)&&rc.getOrCreateInstance(this).show()});Ee.on(window,Mwe,()=>{for(const i of Ke.find(jwe))rc.getOrCreateInstance(i)});pi(rc);const $we="toast",Vwe="bs.toast",Is=`.${Vwe}`,Hwe=`mouseover${Is}`,Uwe=`mouseout${Is}`,qwe=`focusin${Is}`,Gwe=`focusout${Is}`,Wwe=`hide${Is}`,Kwe=`hidden${Is}`,Ywe=`show${Is}`,Qwe=`shown${Is}`,Zwe="fade",dD="hide",up="show",hp="showing",Jwe={animation:"boolean",autohide:"boolean",delay:"number"},Xwe={animation:!0,autohide:!0,delay:5e3};class xu extends Oi{constructor(n,r){super(n,r),this._timeout=null,this._hasMouseInteraction=!1,this._hasKeyboardInteraction=!1,this._setListeners()}static get Default(){return Xwe}static get DefaultType(){return Jwe}static get NAME(){return $we}show(){if(Ee.trigger(this._element,Ywe).defaultPrevented)return;this._clearTimeout(),this._config.animation&&this._element.classList.add(Zwe);const r=()=>{this._element.classList.remove(hp),Ee.trigger(this._element,Qwe),this._maybeScheduleHide()};this._element.classList.remove(dD),vu(this._element),this._element.classList.add(up,hp),this._queueCallback(r,this._element,this._config.animation)}hide(){if(!this.isShown()||Ee.trigger(this._element,Wwe).defaultPrevented)return;const r=()=>{this._element.classList.add(dD),this._element.classList.remove(hp,up),Ee.trigger(this._element,Kwe)};this._element.classList.add(hp),this._queueCallback(r,this._element,this._config.animation)}dispose(){this._clearTimeout(),this.isShown()&&this._element.classList.remove(up),super.dispose()}isShown(){return this._element.classList.contains(up)}_maybeScheduleHide(){this._config.autohide&&(this._hasMouseInteraction||this._hasKeyboardInteraction||(this._timeout=setTimeout(()=>{this.hide()},this._config.delay)))}_onInteraction(n,r){switch(n.type){case"mouseover":case"mouseout":{this._hasMouseInteraction=r;break}case"focusin":case"focusout":{this._hasKeyboardInteraction=r;break}}if(r){this._clearTimeout();return}const l=n.relatedTarget;this._element===l||this._element.contains(l)||this._maybeScheduleHide()}_setListeners(){Ee.on(this._element,Hwe,n=>this._onInteraction(n,!0)),Ee.on(this._element,Uwe,n=>this._onInteraction(n,!1)),Ee.on(this._element,qwe,n=>this._onInteraction(n,!0)),Ee.on(this._element,Gwe,n=>this._onInteraction(n,!1))}_clearTimeout(){clearTimeout(this._timeout),this._timeout=null}static jQueryInterface(n){return this.each(function(){const r=xu.getOrCreateInstance(this,n);if(typeof n=="string"){if(typeof r[n]>"u")throw new TypeError(`No method named "${n}"`);r[n](this)}})}}zf(xu);pi(xu);let eve=[].slice.call(document.querySelectorAll('[data-bs-toggle="dropdown"]'));eve.map(function(i){let n={boundary:i.getAttribute("data-bs-boundary")==="viewport"?document.querySelector(".btn"):"clippingParents"};return new Di(i,n)});let tve=[].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));tve.map(function(i){let n={delay:{show:50,hide:50},html:i.getAttribute("data-bs-html")==="true",placement:i.getAttribute("data-bs-placement")??"auto"};return new za(i,n)});let nve=[].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'));nve.map(function(i){let n={delay:{show:50,hide:50},html:i.getAttribute("data-bs-html")==="true",placement:i.getAttribute("data-bs-placement")??"auto"};return new Vf(i,n)});let ove=[].slice.call(document.querySelectorAll('[data-bs-toggle="switch-icon"]'));ove.map(function(i){i.addEventListener("click",n=>{n.stopPropagation(),i.classList.toggle("active")})});let ive=[].slice.call(document.querySelectorAll('[data-bs-toggle="toast"]'));ive.map(function(i){return new xu(i)});const uD="tablerTheme",rve="light";let df;const Yb=new Proxy(new URLSearchParams(window.location.search),{get:(i,n)=>i.get(n)});if(Yb.theme)localStorage.setItem(uD,Yb.theme),df=Yb.theme;else{const i=localStorage.getItem(uD);df=i||rve}df==="dark"?document.body.setAttribute("data-bs-theme",df):document.body.removeAttribute("data-bs-theme");window.axios=dn;window.axios.defaults.headers.common["X-Requested-With"]="XMLHttpRequest";const sve={name:"Sidebar",components:{Link:Pt}},ave={class:"navbar navbar-vertical navbar-expand-lg","data-bs-theme":"dark"},lve={class:"container-fluid"},cve=_("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#sidebar-menu","aria-controls":"sidebar-menu","aria-expanded":"false","aria-label":"Toggle navigation"},[_("span",{class:"navbar-toggler-icon"})],-1),dve=_("h1",{class:"navbar-brand navbar-brand-autodark"},[_("a",{href:"/"}," Keloola OS ")],-1),uve={class:"navbar-nav flex-row d-lg-none"},hve=bn('<div class="nav-item d-none d-lg-flex me-3"><div class="btn-list"><a href="https://github.com/tabler/tabler" class="btn" target="_blank" rel="noreferrer"><svg xmlns="http://www.w3.org/2000/svg" class="icon" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"></path></svg> Source code </a><a href="https://github.com/sponsors/codecalm" class="btn" target="_blank" rel="noreferrer"><svg xmlns="http://www.w3.org/2000/svg" class="icon text-pink" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572"></path></svg> Sponsor </a></div></div><div class="d-none d-lg-flex"><a href="?theme=dark" class="nav-link px-0 hide-theme-dark" title="Enable dark mode" data-bs-toggle="tooltip" data-bs-placement="bottom"><svg xmlns="http://www.w3.org/2000/svg" class="icon" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z"></path></svg></a><a href="?theme=light" class="nav-link px-0 hide-theme-light" title="Enable light mode" data-bs-toggle="tooltip" data-bs-placement="bottom"><svg xmlns="http://www.w3.org/2000/svg" class="icon" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0"></path><path d="M3 12h1m8 -9v1m8 8h1m-9 8v1m-6.4 -15.4l.7 .7m12.1 -.7l-.7 .7m0 11.4l.7 .7m-12.1 -.7l-.7 .7"></path></svg></a><div class="nav-item dropdown d-none d-md-flex me-3"><a href="#" class="nav-link px-0" data-bs-toggle="dropdown" tabindex="-1" aria-label="Show notifications"><svg xmlns="http://www.w3.org/2000/svg" class="icon" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M10 5a2 2 0 1 1 4 0a7 7 0 0 1 4 6v3a4 4 0 0 0 2 3h-16a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6"></path><path d="M9 17v1a3 3 0 0 0 6 0v-1"></path></svg><span class="badge bg-red"></span></a><div class="dropdown-menu dropdown-menu-arrow dropdown-menu-end dropdown-menu-card"><div class="card"><div class="card-header"><h3 class="card-title">Last updates</h3></div><div class="list-group list-group-flush list-group-hoverable"><div class="list-group-item"><div class="row align-items-center"><div class="col-auto"><span class="status-dot status-dot-animated bg-red d-block"></span></div><div class="col text-truncate"><a href="#" class="text-body d-block">Example 1</a><div class="d-block text-secondary text-truncate mt-n1"> Change deprecated html tags to text decoration classes (#29604) </div></div><div class="col-auto"><a href="#" class="list-group-item-actions"><svg xmlns="http://www.w3.org/2000/svg" class="icon text-muted" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z"></path></svg></a></div></div></div><div class="list-group-item"><div class="row align-items-center"><div class="col-auto"><span class="status-dot d-block"></span></div><div class="col text-truncate"><a href="#" class="text-body d-block">Example 2</a><div class="d-block text-secondary text-truncate mt-n1"> justify-content:between ⇒ justify-content:space-between (#29734) </div></div><div class="col-auto"><a href="#" class="list-group-item-actions show"><svg xmlns="http://www.w3.org/2000/svg" class="icon text-yellow" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z"></path></svg></a></div></div></div><div class="list-group-item"><div class="row align-items-center"><div class="col-auto"><span class="status-dot d-block"></span></div><div class="col text-truncate"><a href="#" class="text-body d-block">Example 3</a><div class="d-block text-secondary text-truncate mt-n1"> Update change-version.js (#29736) </div></div><div class="col-auto"><a href="#" class="list-group-item-actions"><svg xmlns="http://www.w3.org/2000/svg" class="icon text-muted" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z"></path></svg></a></div></div></div><div class="list-group-item"><div class="row align-items-center"><div class="col-auto"><span class="status-dot status-dot-animated bg-green d-block"></span></div><div class="col text-truncate"><a href="#" class="text-body d-block">Example 4</a><div class="d-block text-secondary text-truncate mt-n1"> Regenerate package-lock.json (#29730) </div></div><div class="col-auto"><a href="#" class="list-group-item-actions"><svg xmlns="http://www.w3.org/2000/svg" class="icon text-muted" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z"></path></svg></a></div></div></div></div></div></div></div></div>',2),pve={class:"nav-item dropdown"},fve={href:"#",class:"nav-link d-flex lh-1 text-reset p-0","data-bs-toggle":"dropdown","aria-label":"Open user menu"},mve=_("span",{class:"avatar avatar-sm",style:{"background-image":"url(./static/avatars/000m.jpg)"}},null,-1),gve={class:"d-none d-xl-block ps-2"},bve=_("div",{class:"dropdown-menu dropdown-menu-end dropdown-menu-arrow"},[_("a",{href:"./sign-in.html",class:"dropdown-item"},"Logout")],-1),kve={class:"collapse navbar-collapse",id:"sidebar-menu"},_ve={class:"navbar-nav pt-lg-3"},wve={class:"nav-item"},vve=_("span",{class:"nav-link-icon d-md-none d-lg-inline-block"},[_("svg",{xmlns:"http://www.w3.org/2000/svg",class:"icon",width:"24",height:"24",viewBox:"0 0 24 24","stroke-width":"2",stroke:"currentColor",fill:"none","stroke-linecap":"round","stroke-linejoin":"round"},[_("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),_("path",{d:"M5 12l-2 0l9 -9l9 9l-2 0"}),_("path",{d:"M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7"}),_("path",{d:"M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6"})])],-1),Ave=_("span",{class:"nav-link-title"}," Home ",-1),Cve={class:"nav-item"},yve=_("span",{class:"nav-link-icon d-md-none d-lg-inline-block"},[_("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",class:"icon icon-tabler icons-tabler-outline icon-tabler-news"},[_("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),_("path",{d:"M16 6h3a1 1 0 0 1 1 1v11a2 2 0 0 1 -4 0v-13a1 1 0 0 0 -1 -1h-10a1 1 0 0 0 -1 1v12a3 3 0 0 0 3 3h11"}),_("path",{d:"M8 8l4 0"}),_("path",{d:"M8 12l4 0"}),_("path",{d:"M8 16l4 0"})])],-1),xve=_("span",{class:"nav-link-title"}," News ",-1),Eve={class:"nav-item"},Sve=_("span",{class:"nav-link-icon d-md-none d-lg-inline-block"},[_("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",class:"icon icon-tabler icons-tabler-outline icon-tabler-link"},[_("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),_("path",{d:"M9 15l6 -6"}),_("path",{d:"M11 6l.463 -.536a5 5 0 0 1 7.071 7.072l-.534 .464"}),_("path",{d:"M13 18l-.397 .534a5.068 5.068 0 0 1 -7.127 0a4.972 4.972 0 0 1 0 -7.071l.524 -.463"})])],-1),Tve=_("span",{class:"nav-link-title"}," Custom Page",-1),Dve={class:"nav-item"},Ive=_("span",{class:"nav-link-icon d-md-none d-lg-inline-block"},[_("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",class:"icon icon-tabler icons-tabler-outline icon-tabler-question-mark"},[_("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),_("path",{d:"M8 8a3.5 3 0 0 1 3.5 -3h1a3.5 3 0 0 1 3.5 3a3 3 0 0 1 -2 3a3 4 0 0 0 -2 4"}),_("path",{d:"M12 19l0 .01"})])],-1),Mve=_("span",{class:"nav-link-title"}," Faq ",-1),Ove={class:"nav-item"},Bve=_("span",{class:"nav-link-icon d-md-none d-lg-inline-block"},[_("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",class:"icon icon-tabler icons-tabler-outline icon-tabler-message-dots"},[_("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),_("path",{d:"M12 11v.01"}),_("path",{d:"M8 11v.01"}),_("path",{d:"M16 11v.01"}),_("path",{d:"M18 4a3 3 0 0 1 3 3v8a3 3 0 0 1 -3 3h-5l-5 3v-3h-2a3 3 0 0 1 -3 -3v-8a3 3 0 0 1 3 -3z"})])],-1),Pve=_("span",{class:"nav-link-title"}," Testimonial ",-1),Nve={class:"nav-item dropdown"},Lve=_("a",{class:"nav-link dropdown-toggle",href:"#navbar-layout","data-bs-toggle":"dropdown","data-bs-auto-close":"false",role:"button","aria-expanded":"true"},[_("span",{class:"nav-link-icon d-md-none d-lg-inline-block"},[_("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",class:"icon icon-tabler icons-tabler-outline icon-tabler-download"},[_("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),_("path",{d:"M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2"}),_("path",{d:"M7 11l5 5l5 -5"}),_("path",{d:"M12 4l0 12"})])]),_("span",{class:"nav-link-title"}," Download ")],-1),Rve={class:"dropdown-menu","data-bs-popper":"static"},Fve={class:"dropdown-menu-columns"},zve={class:"dropdown-menu-column"},jve={class:"nav-item"},$ve=_("span",{class:"nav-link-icon d-md-none d-lg-inline-block"},[_("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",class:"icon icon-tabler icons-tabler-outline icon-tabler-circles"},[_("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),_("path",{d:"M12 7m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0"}),_("path",{d:"M6.5 17m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0"}),_("path",{d:"M17.5 17m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0"})])],-1),Vve=_("span",{class:"nav-link-title"}," Sponsor ",-1),Hve={class:"nav-item"},Uve=_("span",{class:"nav-link-icon d-md-none d-lg-inline-block"},[_("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",class:"icon icon-tabler icons-tabler-outline icon-tabler-mood-dollar"},[_("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),_("path",{d:"M20.87 10.48a9 9 0 1 0 -7.876 10.465"}),_("path",{d:"M9 10h.01"}),_("path",{d:"M15 10h.01"}),_("path",{d:"M9.5 15c.658 .64 1.56 1 2.5 1c.357 0 .709 -.052 1.043 -.151"}),_("path",{d:"M21 15h-2.5a1.5 1.5 0 0 0 0 3h1a1.5 1.5 0 0 1 0 3h-2.5"}),_("path",{d:"M19 21v1m0 -8v1"})])],-1),qve=_("span",{class:"nav-link-title"}," Donor ",-1),Gve={class:"nav-item"},Wve=_("span",{class:"nav-link-icon d-md-none d-lg-inline-block"},[_("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",class:"icon icon-tabler icons-tabler-outline icon-tabler-settings"},[_("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),_("path",{d:"M10.325 4.317c.426 -1.756 2.924 -1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543 -.94 3.31 .826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756 .426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543 -.826 3.31 -2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756 -2.924 1.756 -3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543 .94 -3.31 -.826 -2.37 -2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756 -.426 -1.756 -2.924 0 -3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94 -1.543 .826 -3.31 2.37 -2.37c1 .608 2.296 .07 2.572 -1.065z"}),_("path",{d:"M9 12a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"})])],-1),Kve=_("span",{class:"nav-link-title"}," Config ",-1);function Yve(i,n,r,l,u,p){const f=Ae("Link");return ee(),ne("aside",ave,[_("div",lve,[cve,dve,_("div",uve,[hve,_("div",pve,[_("a",fve,[mve,_("div",gve,[_("div",null,le(i.$page.props.user.name),1)])]),bve])]),_("div",kve,[_("ul",_ve,[_("li",wve,[ue(f,{class:"nav-link",href:"/admin"},{default:kt(()=>[vve,Ave]),_:1})]),_("li",Cve,[ue(f,{class:"nav-link",href:"/admin/news"},{default:kt(()=>[yve,xve]),_:1})]),_("li",Eve,[ue(f,{class:"nav-link",href:"/admin/custom-page"},{default:kt(()=>[Sve,Tve]),_:1})]),_("li",Dve,[ue(f,{class:"nav-link",href:"/admin/faq"},{default:kt(()=>[Ive,Mve]),_:1})]),_("li",Ove,[ue(f,{class:"nav-link",href:"/admin/testimonial"},{default:kt(()=>[Bve,Pve]),_:1})]),_("li",Nve,[Lve,_("div",Rve,[_("div",Fve,[_("div",zve,[ue(f,{class:"dropdown-item",href:"/admin/os-version"},{default:kt(()=>[ze(" OS Version ")]),_:1}),ue(f,{class:"dropdown-item",href:"/admin/os-edition"},{default:kt(()=>[ze(" OS Edition ")]),_:1})])])])]),_("li",jve,[ue(f,{class:"nav-link",href:"/admin/sponsor-logo"},{default:kt(()=>[$ve,Vve]),_:1})]),_("li",Hve,[ue(f,{class:"nav-link",href:"/admin/donor"},{default:kt(()=>[Uve,qve]),_:1})]),_("li",Gve,[ue(f,{class:"nav-link",href:"/admin/config"},{default:kt(()=>[Wve,Kve]),_:1})])])])])])}const Qve=qe(sve,[["render",Yve]]),Zve={name:"Navbar",setup(){function i(){Ze.post("/admin/logout")}return{logout:i}}},Jve={class:"navbar navbar-expand-md d-none d-lg-flex d-print-none"},Xve={class:"container-xl"},e0e=_("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbar-menu","aria-controls":"navbar-menu","aria-expanded":"false","aria-label":"Toggle navigation"},[_("span",{class:"navbar-toggler-icon"})],-1),t0e={class:"navbar-nav flex-row order-md-last"},n0e=bn('<div class="d-none d-md-flex"><a href="?theme=dark" class="nav-link px-0 hide-theme-dark me-3" title="Enable dark mode" data-bs-toggle="tooltip" data-bs-placement="bottom"><svg xmlns="http://www.w3.org/2000/svg" class="icon" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z"></path></svg></a><a href="?theme=light" class="nav-link px-0 hide-theme-light me-3" title="Enable light mode" data-bs-toggle="tooltip" data-bs-placement="bottom"><svg xmlns="http://www.w3.org/2000/svg" class="icon" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0"></path><path d="M3 12h1m8 -9v1m8 8h1m-9 8v1m-6.4 -15.4l.7 .7m12.1 -.7l-.7 .7m0 11.4l.7 .7m-12.1 -.7l-.7 .7"></path></svg></a></div>',1),o0e={class:"nav-item dropdown"},i0e={href:"#",class:"nav-link d-flex lh-1 text-reset p-0","data-bs-toggle":"dropdown","aria-label":"Open user menu"},r0e=_("span",{class:"avatar avatar-sm",style:{"background-image":"url(./static/avatars/000m.jpg)"}},null,-1),s0e={class:"d-none d-xl-block ps-2"},a0e={class:"dropdown-menu dropdown-menu-end dropdown-menu-arrow"},l0e=_("div",{class:"collapse navbar-collapse",id:"navbar-menu"},[_("div",null,[_("form",{action:"./",method:"get",autocomplete:"off",novalidate:""},[_("div",{class:"input-icon"},[_("span",{class:"input-icon-addon"},[_("svg",{xmlns:"http://www.w3.org/2000/svg",class:"icon",width:"24",height:"24",viewBox:"0 0 24 24","stroke-width":"2",stroke:"currentColor",fill:"none","stroke-linecap":"round","stroke-linejoin":"round"},[_("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),_("path",{d:"M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0"}),_("path",{d:"M21 21l-6 -6"})])]),_("input",{type:"text",value:"",class:"form-control",placeholder:"Search…","aria-label":"Search in website"})])])])],-1);function c0e(i,n,r,l,u,p){return ee(),ne("header",Jve,[_("div",Xve,[e0e,_("div",t0e,[n0e,_("div",o0e,[_("a",i0e,[r0e,_("div",s0e,[_("div",null,le(i.$page.props.user.name),1)])]),_("div",a0e,[_("a",{href:"#",onClick:n[0]||(n[0]=(...f)=>l.logout&&l.logout(...f)),class:"dropdown-item"},"Logout")])])]),l0e])])}const d0e=qe(Zve,[["render",c0e]]),u0e={name:"Footer"},h0e={class:"footer footer-transparent d-print-none mt-auto"},p0e=bn('<div class="container-xl"><div class="row text-center align-items-center flex-row-reverse"><div class="col-12 col-lg-auto mt-3 mt-lg-0"><ul class="list-inline list-inline-dots mb-0"><li class="list-inline-item"> Copyright © 2024 <a href="." class="link-secondary">Keloola OS</a>. All rights reserved. </li><li class="list-inline-item"><a href="#" class="link-secondary" rel="noopener"> v1.0.0 </a></li></ul></div></div></div>',1),f0e=[p0e];function m0e(i,n,r,l,u,p){return ee(),ne("footer",h0e,f0e)}const g0e=qe(u0e,[["render",m0e]]),b0e={name:"Layout",components:{Sidebar:Qve,Navbar:d0e,Footer:g0e}},k0e={class:"page-wrapper"};function _0e(i,n,r,l,u,p){const f=Ae("Sidebar"),b=Ae("Navbar"),m=Ae("Footer");return ee(),ne(Pe,null,[ue(f),ue(b),_("div",k0e,[Sa(i.$slots,"default"),ue(m)])],64)}const w0e=qe(b0e,[["render",_0e]]);JG({resolve:i=>{let r=Object.assign({"./Pages/Auth/Login.vue":yW,"./Pages/Config/Form.vue":cK,"./Pages/Config/Index.vue":PY,"./Pages/CustomPage/Form.vue":oQ,"./Pages/CustomPage/Index.vue":bQ,"./Pages/Dashboard/Index.vue":FZ,"./Pages/Donor/Form.vue":vX,"./Pages/Donor/Index.vue":NX,"./Pages/Example/Form.vue":iee,"./Pages/Example/Index.vue":kee,"./Pages/Faq/Form.vue":$ee,"./Pages/Faq/Index.vue":tte,"./Pages/News/Form.vue":yte,"./Pages/News/Index.vue":Fte,"./Pages/OsEdition/Form.vue":Ene,"./Pages/OsEdition/Index.vue":$ne,"./Pages/OsVersion/Form.vue":_oe,"./Pages/OsVersion/Index.vue":Boe,"./Pages/Release/Form.vue":hie,"./Pages/Release/Index.vue":Eie,"./Pages/Sponsor/Form.vue":Gie,"./Pages/Sponsor/Index.vue":sre,"./Pages/SponsorLogo/Form.vue":Ire,"./Pages/SponsorLogo/Index.vue":Gre,"./Pages/Testimonial/Form.vue":kse,"./Pages/Testimonial/Index.vue":Ose,"./Pages/User/Contact.vue":Hae,"./Pages/User/CustomPage.vue":Jae,"./Pages/User/DetailNews.vue":ale,"./Pages/User/Donors.vue":Ice,"./Pages/User/Download.vue":Xce,"./Pages/User/Faq.vue":fde,"./Pages/User/GetInvolved.vue":cue,"./Pages/User/Index.vue":xpe,"./Pages/User/NewFeature.vue":Bpe,"./Pages/User/News.vue":Kpe,"./Pages/User/Partners.vue":efe,"./Pages/User/ReadyDownload.vue":Efe,"./Pages/User/ReleaseNotes.vue":Pfe,"./Pages/User/Sponsors.vue":ome,"./Pages/User/Tambora.vue":Sme,"./Pages/User/Team.vue":Bme})[`./Pages/${i}.vue`];return r.default.layout=r.default.layout||w0e,r},setup({el:i,App:n,props:r,plugin:l}){aM({render:()=>_n(n,r)}).use(l).mount(i)}});