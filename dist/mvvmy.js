!function(t,n){"object"==typeof exports&&"object"==typeof module?module.exports=n():"function"==typeof define&&define.amd?define([],n):"object"==typeof exports?exports.Mvvmy=n():t.Mvvmy=n()}(this,function(){return function(t){var n={};function e(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}return e.m=t,e.c=n,e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:r})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,n){if(1&n&&(t=e(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(e.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var o in t)e.d(r,o,function(n){return t[n]}.bind(null,o));return r},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},e.p="",e(e.s=72)}([function(t,n,e){var r=e(28)("wks"),o=e(18),i=e(2).Symbol,u="function"==typeof i;(t.exports=function(t){return r[t]||(r[t]=u&&i[t]||(u?i:o)("Symbol."+t))}).store=r},function(t,n,e){var r=e(2),o=e(9),i=e(3),u=e(12),c=e(19),f=function(t,n,e){var a,s,l,p,v=t&f.F,h=t&f.G,y=t&f.S,d=t&f.P,g=t&f.B,x=h?r:y?r[n]||(r[n]={}):(r[n]||{}).prototype,m=h?o:o[n]||(o[n]={}),b=m.prototype||(m.prototype={});for(a in h&&(e=n),e)l=((s=!v&&x&&void 0!==x[a])?x:e)[a],p=g&&s?c(l,r):d&&"function"==typeof l?c(Function.call,l):l,x&&u(x,a,l,t&f.U),m[a]!=l&&i(m,a,p),d&&b[a]!=l&&(b[a]=l)};r.core=o,f.F=1,f.G=2,f.S=4,f.P=8,f.B=16,f.W=32,f.U=64,f.R=128,t.exports=f},function(t,n){var e=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=e)},function(t,n,e){var r=e(4),o=e(17);t.exports=e(5)?function(t,n,e){return r.f(t,n,o(1,e))}:function(t,n,e){return t[n]=e,t}},function(t,n,e){var r=e(10),o=e(37),i=e(38),u=Object.defineProperty;n.f=e(5)?Object.defineProperty:function(t,n,e){if(r(t),n=i(n,!0),r(e),o)try{return u(t,n,e)}catch(t){}if("get"in e||"set"in e)throw TypeError("Accessors not supported!");return"value"in e&&(t[n]=e.value),t}},function(t,n,e){t.exports=!e(11)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},function(t,n){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,n){t.exports=function(t){if(null==t)throw TypeError("Can't call method on  "+t);return t}},function(t,n){t.exports={}},function(t,n){var e=t.exports={version:"2.5.7"};"number"==typeof __e&&(__e=e)},function(t,n,e){var r=e(6);t.exports=function(t){if(!r(t))throw TypeError(t+" is not an object!");return t}},function(t,n){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,n,e){var r=e(2),o=e(3),i=e(13),u=e(18)("src"),c=Function.toString,f=(""+c).split("toString");e(9).inspectSource=function(t){return c.call(t)},(t.exports=function(t,n,e,c){var a="function"==typeof e;a&&(i(e,"name")||o(e,"name",n)),t[n]!==e&&(a&&(i(e,u)||o(e,u,t[n]?""+t[n]:f.join(String(n)))),t===r?t[n]=e:c?t[n]?t[n]=e:o(t,n,e):(delete t[n],o(t,n,e)))})(Function.prototype,"toString",function(){return"function"==typeof this&&this[u]||c.call(this)})},function(t,n){var e={}.hasOwnProperty;t.exports=function(t,n){return e.call(t,n)}},function(t,n){var e={}.toString;t.exports=function(t){return e.call(t).slice(8,-1)}},function(t,n,e){var r=e(22),o=Math.min;t.exports=function(t){return t>0?o(r(t),9007199254740991):0}},function(t,n,e){var r=e(7);t.exports=function(t){return Object(r(t))}},function(t,n){t.exports=function(t,n){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:n}}},function(t,n){var e=0,r=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++e+r).toString(36))}},function(t,n,e){var r=e(25);t.exports=function(t,n,e){if(r(t),void 0===n)return t;switch(e){case 1:return function(e){return t.call(n,e)};case 2:return function(e,r){return t.call(n,e,r)};case 3:return function(e,r,o){return t.call(n,e,r,o)}}return function(){return t.apply(n,arguments)}}},function(t,n,e){var r=e(21),o=e(7);t.exports=function(t){return r(o(t))}},function(t,n,e){var r=e(14);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==r(t)?t.split(""):Object(t)}},function(t,n){var e=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:e)(t)}},function(t,n,e){var r=e(28)("keys"),o=e(18);t.exports=function(t){return r[t]||(r[t]=o(t))}},function(t,n,e){var r=e(6),o=e(2).document,i=r(o)&&r(o.createElement);t.exports=function(t){return i?o.createElement(t):{}}},function(t,n){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},function(t,n,e){var r=e(20),o=e(15),i=e(40);t.exports=function(t){return function(n,e,u){var c,f=r(n),a=o(f.length),s=i(u,a);if(t&&e!=e){for(;a>s;)if((c=f[s++])!=c)return!0}else for(;a>s;s++)if((t||s in f)&&f[s]===e)return t||s||0;return!t&&-1}}},function(t,n,e){var r=e(0)("unscopables"),o=Array.prototype;null==o[r]&&e(3)(o,r,{}),t.exports=function(t){o[r][t]=!0}},function(t,n,e){var r=e(9),o=e(2),i=o["__core-js_shared__"]||(o["__core-js_shared__"]={});(t.exports=function(t,n){return i[t]||(i[t]=void 0!==n?n:{})})("versions",[]).push({version:r.version,mode:e(29)?"pure":"global",copyright:"© 2018 Denis Pushkarev (zloirock.ru)"})},function(t,n){t.exports=!1},function(t,n,e){var r=e(6),o=e(14),i=e(0)("match");t.exports=function(t){var n;return r(t)&&(void 0!==(n=t[i])?!!n:"RegExp"==o(t))}},function(t,n,e){"use strict";var r=e(29),o=e(1),i=e(12),u=e(3),c=e(8),f=e(47),a=e(34),s=e(52),l=e(0)("iterator"),p=!([].keys&&"next"in[].keys()),v=function(){return this};t.exports=function(t,n,e,h,y,d,g){f(e,n,h);var x,m,b,S=function(t){if(!p&&t in j)return j[t];switch(t){case"keys":case"values":return function(){return new e(this,t)}}return function(){return new e(this,t)}},O=n+" Iterator",w="values"==y,_=!1,j=t.prototype,A=j[l]||j["@@iterator"]||y&&j[y],T=A||S(y),E=y?w?S("entries"):T:void 0,P="Array"==n&&j.entries||A;if(P&&(b=s(P.call(new t)))!==Object.prototype&&b.next&&(a(b,O,!0),r||"function"==typeof b[l]||u(b,l,v)),w&&A&&"values"!==A.name&&(_=!0,T=function(){return A.call(this)}),r&&!g||!p&&!_&&j[l]||u(j,l,T),c[n]=T,c[O]=v,y)if(x={values:w?T:S("values"),keys:d?T:S("keys"),entries:E},g)for(m in x)m in j||i(j,m,x[m]);else o(o.P+o.F*(p||_),n,x);return x}},function(t,n,e){var r=e(50),o=e(33);t.exports=Object.keys||function(t){return r(t,o)}},function(t,n){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},function(t,n,e){var r=e(4).f,o=e(13),i=e(0)("toStringTag");t.exports=function(t,n,e){t&&!o(t=e?t:t.prototype,i)&&r(t,i,{configurable:!0,value:n})}},function(t,n,e){"use strict";var r=e(11);t.exports=function(t,n){return!!t&&r(function(){n?t.call(null,function(){},1):t.call(null)})}},function(t,n,e){var r=e(1);r(r.S+r.F*!e(5),"Object",{defineProperty:e(4).f})},function(t,n,e){t.exports=!e(5)&&!e(11)(function(){return 7!=Object.defineProperty(e(24)("div"),"a",{get:function(){return 7}}).a})},function(t,n,e){var r=e(6);t.exports=function(t,n){if(!r(t))return t;var e,o;if(n&&"function"==typeof(e=t.toString)&&!r(o=e.call(t)))return o;if("function"==typeof(e=t.valueOf)&&!r(o=e.call(t)))return o;if(!n&&"function"==typeof(e=t.toString)&&!r(o=e.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},function(t,n,e){"use strict";var r=e(1),o=e(26)(!0);r(r.P,"Array",{includes:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}}),e(27)("includes")},function(t,n,e){var r=e(22),o=Math.max,i=Math.min;t.exports=function(t,n){return(t=r(t))<0?o(t+n,0):i(t,n)}},function(t,n,e){"use strict";var r=e(1),o=e(42);r(r.P+r.F*e(43)("includes"),"String",{includes:function(t){return!!~o(this,t,"includes").indexOf(t,arguments.length>1?arguments[1]:void 0)}})},function(t,n,e){var r=e(30),o=e(7);t.exports=function(t,n,e){if(r(n))throw TypeError("String#"+e+" doesn't accept regex!");return String(o(t))}},function(t,n,e){var r=e(0)("match");t.exports=function(t){var n=/./;try{"/./"[t](n)}catch(e){try{return n[r]=!1,!"/./"[t](n)}catch(t){}}return!0}},function(t,n,e){var r=e(4).f,o=Function.prototype,i=/^\s*function ([^ (]*)/;"name"in o||e(5)&&r(o,"name",{configurable:!0,get:function(){try{return(""+this).match(i)[1]}catch(t){return""}}})},function(t,n,e){"use strict";var r=e(46)(!0);e(31)(String,"String",function(t){this._t=String(t),this._i=0},function(){var t,n=this._t,e=this._i;return e>=n.length?{value:void 0,done:!0}:(t=r(n,e),this._i+=t.length,{value:t,done:!1})})},function(t,n,e){var r=e(22),o=e(7);t.exports=function(t){return function(n,e){var i,u,c=String(o(n)),f=r(e),a=c.length;return f<0||f>=a?t?"":void 0:(i=c.charCodeAt(f))<55296||i>56319||f+1===a||(u=c.charCodeAt(f+1))<56320||u>57343?t?c.charAt(f):i:t?c.slice(f,f+2):u-56320+(i-55296<<10)+65536}}},function(t,n,e){"use strict";var r=e(48),o=e(17),i=e(34),u={};e(3)(u,e(0)("iterator"),function(){return this}),t.exports=function(t,n,e){t.prototype=r(u,{next:o(1,e)}),i(t,n+" Iterator")}},function(t,n,e){var r=e(10),o=e(49),i=e(33),u=e(23)("IE_PROTO"),c=function(){},f=function(){var t,n=e(24)("iframe"),r=i.length;for(n.style.display="none",e(51).appendChild(n),n.src="javascript:",(t=n.contentWindow.document).open(),t.write("<script>document.F=Object<\/script>"),t.close(),f=t.F;r--;)delete f.prototype[i[r]];return f()};t.exports=Object.create||function(t,n){var e;return null!==t?(c.prototype=r(t),e=new c,c.prototype=null,e[u]=t):e=f(),void 0===n?e:o(e,n)}},function(t,n,e){var r=e(4),o=e(10),i=e(32);t.exports=e(5)?Object.defineProperties:function(t,n){o(t);for(var e,u=i(n),c=u.length,f=0;c>f;)r.f(t,e=u[f++],n[e]);return t}},function(t,n,e){var r=e(13),o=e(20),i=e(26)(!1),u=e(23)("IE_PROTO");t.exports=function(t,n){var e,c=o(t),f=0,a=[];for(e in c)e!=u&&r(c,e)&&a.push(e);for(;n.length>f;)r(c,e=n[f++])&&(~i(a,e)||a.push(e));return a}},function(t,n,e){var r=e(2).document;t.exports=r&&r.documentElement},function(t,n,e){var r=e(13),o=e(16),i=e(23)("IE_PROTO"),u=Object.prototype;t.exports=Object.getPrototypeOf||function(t){return t=o(t),r(t,i)?t[i]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?u:null}},function(t,n,e){"use strict";var r=e(19),o=e(1),i=e(16),u=e(54),c=e(55),f=e(15),a=e(56),s=e(57);o(o.S+o.F*!e(59)(function(t){Array.from(t)}),"Array",{from:function(t){var n,e,o,l,p=i(t),v="function"==typeof this?this:Array,h=arguments.length,y=h>1?arguments[1]:void 0,d=void 0!==y,g=0,x=s(p);if(d&&(y=r(y,h>2?arguments[2]:void 0,2)),null==x||v==Array&&c(x))for(e=new v(n=f(p.length));n>g;g++)a(e,g,d?y(p[g],g):p[g]);else for(l=x.call(p),e=new v;!(o=l.next()).done;g++)a(e,g,d?u(l,y,[o.value,g],!0):o.value);return e.length=g,e}})},function(t,n,e){var r=e(10);t.exports=function(t,n,e,o){try{return o?n(r(e)[0],e[1]):n(e)}catch(n){var i=t.return;throw void 0!==i&&r(i.call(t)),n}}},function(t,n,e){var r=e(8),o=e(0)("iterator"),i=Array.prototype;t.exports=function(t){return void 0!==t&&(r.Array===t||i[o]===t)}},function(t,n,e){"use strict";var r=e(4),o=e(17);t.exports=function(t,n,e){n in t?r.f(t,n,o(0,e)):t[n]=e}},function(t,n,e){var r=e(58),o=e(0)("iterator"),i=e(8);t.exports=e(9).getIteratorMethod=function(t){if(null!=t)return t[o]||t["@@iterator"]||i[r(t)]}},function(t,n,e){var r=e(14),o=e(0)("toStringTag"),i="Arguments"==r(function(){return arguments}());t.exports=function(t){var n,e,u;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(e=function(t,n){try{return t[n]}catch(t){}}(n=Object(t),o))?e:i?r(n):"Object"==(u=r(n))&&"function"==typeof n.callee?"Arguments":u}},function(t,n,e){var r=e(0)("iterator"),o=!1;try{var i=[7][r]();i.return=function(){o=!0},Array.from(i,function(){throw 2})}catch(t){}t.exports=function(t,n){if(!n&&!o)return!1;var e=!1;try{var i=[7],u=i[r]();u.next=function(){return{done:e=!0}},i[r]=function(){return u},t(i)}catch(t){}return e}},function(t,n,e){for(var r=e(61),o=e(32),i=e(12),u=e(2),c=e(3),f=e(8),a=e(0),s=a("iterator"),l=a("toStringTag"),p=f.Array,v={CSSRuleList:!0,CSSStyleDeclaration:!1,CSSValueList:!1,ClientRectList:!1,DOMRectList:!1,DOMStringList:!1,DOMTokenList:!0,DataTransferItemList:!1,FileList:!1,HTMLAllCollection:!1,HTMLCollection:!1,HTMLFormElement:!1,HTMLSelectElement:!1,MediaList:!0,MimeTypeArray:!1,NamedNodeMap:!1,NodeList:!0,PaintRequestList:!1,Plugin:!1,PluginArray:!1,SVGLengthList:!1,SVGNumberList:!1,SVGPathSegList:!1,SVGPointList:!1,SVGStringList:!1,SVGTransformList:!1,SourceBufferList:!1,StyleSheetList:!0,TextTrackCueList:!1,TextTrackList:!1,TouchList:!1},h=o(v),y=0;y<h.length;y++){var d,g=h[y],x=v[g],m=u[g],b=m&&m.prototype;if(b&&(b[s]||c(b,s,p),b[l]||c(b,l,g),f[g]=p,x))for(d in r)b[d]||i(b,d,r[d],!0)}},function(t,n,e){"use strict";var r=e(27),o=e(62),i=e(8),u=e(20);t.exports=e(31)(Array,"Array",function(t,n){this._t=u(t),this._i=0,this._k=n},function(){var t=this._t,n=this._k,e=this._i++;return!t||e>=t.length?(this._t=void 0,o(1)):o(0,"keys"==n?e:"values"==n?t[e]:[e,t[e]])},"values"),i.Arguments=i.Array,r("keys"),r("values"),r("entries")},function(t,n){t.exports=function(t,n){return{value:n,done:!!t}}},function(t,n,e){"use strict";var r=e(1),o=e(64)(0),i=e(35)([].forEach,!0);r(r.P+r.F*!i,"Array",{forEach:function(t){return o(this,t,arguments[1])}})},function(t,n,e){var r=e(19),o=e(21),i=e(16),u=e(15),c=e(65);t.exports=function(t,n){var e=1==t,f=2==t,a=3==t,s=4==t,l=6==t,p=5==t||l,v=n||c;return function(n,c,h){for(var y,d,g=i(n),x=o(g),m=r(c,h,3),b=u(x.length),S=0,O=e?v(n,b):f?v(n,0):void 0;b>S;S++)if((p||S in x)&&(d=m(y=x[S],S,g),t))if(e)O[S]=d;else if(d)switch(t){case 3:return!0;case 5:return y;case 6:return S;case 2:O.push(y)}else if(s)return!1;return l?-1:a||s?s:O}}},function(t,n,e){var r=e(66);t.exports=function(t,n){return new(r(t))(n)}},function(t,n,e){var r=e(6),o=e(67),i=e(0)("species");t.exports=function(t){var n;return o(t)&&("function"!=typeof(n=t.constructor)||n!==Array&&!o(n.prototype)||(n=void 0),r(n)&&null===(n=n[i])&&(n=void 0)),void 0===n?Array:n}},function(t,n,e){var r=e(14);t.exports=Array.isArray||function(t){return"Array"==r(t)}},function(t,n,e){"use strict";var r=e(1),o=e(69);r(r.P+r.F*!e(35)([].reduce,!0),"Array",{reduce:function(t){return o(this,t,arguments.length,arguments[1],!1)}})},function(t,n,e){var r=e(25),o=e(16),i=e(21),u=e(15);t.exports=function(t,n,e,c,f){r(n);var a=o(t),s=i(a),l=u(a.length),p=f?l-1:0,v=f?-1:1;if(e<2)for(;;){if(p in s){c=s[p],p+=v;break}if(p+=v,f?p<0:l<=p)throw TypeError("Reduce of empty array with no initial value")}for(;f?p>=0:l>p;p+=v)p in s&&(c=n(c,s[p],p,a));return c}},function(t,n,e){e(71)("split",2,function(t,n,r){"use strict";var o=e(30),i=r,u=[].push;if("c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length){var c=void 0===/()??/.exec("")[1];r=function(t,n){var e=String(this);if(void 0===t&&0===n)return[];if(!o(t))return i.call(e,t,n);var r,f,a,s,l,p=[],v=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),h=0,y=void 0===n?4294967295:n>>>0,d=new RegExp(t.source,v+"g");for(c||(r=new RegExp("^"+d.source+"$(?!\\s)",v));(f=d.exec(e))&&!((a=f.index+f[0].length)>h&&(p.push(e.slice(h,f.index)),!c&&f.length>1&&f[0].replace(r,function(){for(l=1;l<arguments.length-2;l++)void 0===arguments[l]&&(f[l]=void 0)}),f.length>1&&f.index<e.length&&u.apply(p,f.slice(1)),s=f[0].length,h=a,p.length>=y));)d.lastIndex===f.index&&d.lastIndex++;return h===e.length?!s&&d.test("")||p.push(""):p.push(e.slice(h)),p.length>y?p.slice(0,y):p}}else"0".split(void 0,0).length&&(r=function(t,n){return void 0===t&&0===n?[]:i.call(this,t,n)});return[function(e,o){var i=t(this),u=null==e?void 0:e[n];return void 0!==u?u.call(e,i,o):r.call(String(i),e,o)},r]})},function(t,n,e){"use strict";var r=e(3),o=e(12),i=e(11),u=e(7),c=e(0);t.exports=function(t,n,e){var f=c(t),a=e(u,f,""[t]),s=a[0],l=a[1];i(function(){var n={};return n[f]=function(){return 7},7!=""[t](n)})&&(o(String.prototype,t,s),r(RegExp.prototype,f,2==n?function(t,n){return l.call(t,this,n)}:function(t){return l.call(t,this)}))}},function(t,n,e){"use strict";e.r(n);e(36),e(39),e(41),e(44),e(45),e(53),e(60),e(63),e(68),e(70);var r={getVal:function(t,n){return n.split(".").reduce(function(t,n){return t[n]},t.$data)},text:function(t,n,e){},model:function(t,n,e){var r=this.updater.modelUpdater;r&&r(t,this.getVal(n,e))},updater:{textUpdater:function(t,n){t.textContent=n},modelUpdater:function(t,n){t.value=n}}};function o(t,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var i=function(){function t(n,e){if(function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,t),this.el=this.isElementNode(n)?n:document.querySelector(n),this.vm=e,this.el){var r=this.node2fragment(this.el);this.compile(r),this.el.appendChild(r)}}var n,e,i;return n=t,(e=[{key:"compile",value:function(t){var n=this,e=t.childNodes;Array.from(e).forEach(function(t){n.isElementNode(t)?(n.complieElement(t),n.compile(t)):n.complieText(t)})}},{key:"complieElement",value:function(t){var n=this,e=t.attributes;Array.from(e).forEach(function(e){var o=e.name;if(n.isDirective(o)){var i=e.value,u=o.slice(2);r[u](t,n.vm,i)}})}},{key:"complieText",value:function(t){var n=t.textContent;/\{\{([^}]+)\}\}/g.test(n)&&(console.log(n),r.text(t,this.vm,n))}},{key:"isDirective",value:function(t){return t.includes("v-")}},{key:"isElementNode",value:function(t){return 1==t.nodeType}},{key:"node2fragment",value:function(t){for(var n,e=document.createDocumentFragment();n=t.firstChild;)e.appendChild(n);return e}}])&&o(n.prototype,e),i&&o(n,i),t}();n.default=function t(n){!function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,t),this.$el=n.el,this.$data=n.data,this.$el&&new i(this.$el,this)}}]).default});