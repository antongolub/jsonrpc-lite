var r=Object.prototype.hasOwnProperty,n="function"==typeof Number.isSafeInteger?Number.isSafeInteger:function(r){return"number"==typeof r&&isFinite(r)&&r===Math.floor(r)&&Math.abs(r)<=9007199254740991},t=function(){this.jsonrpc="2.0"};t.prototype.serialize=function(){return JSON.stringify(this)},t.VERSION="2.0";var e=function(r){function n(n,t,e){r.call(this),this.id=n,this.method=t,void 0!==e&&(this.params=e)}return r&&(n.__proto__=r),(n.prototype=Object.create(r&&r.prototype)).constructor=n,n}(t),o=function(r){function n(n,t){r.call(this),this.method=n,void 0!==t&&(this.params=t)}return r&&(n.__proto__=r),(n.prototype=Object.create(r&&r.prototype)).constructor=n,n}(t),i=function(r){function n(n,t){r.call(this),this.id=n,this.result=t}return r&&(n.__proto__=r),(n.prototype=Object.create(r&&r.prototype)).constructor=n,n}(t),s=function(r){function n(n,t){r.call(this),this.id=n,this.error=t,this.id=n,this.error=t}return r&&(n.__proto__=r),(n.prototype=Object.create(r&&r.prototype)).constructor=n,n}(t),a=function(r,n){this.payload=r,this.type=n,this.payload=r,this.type=n},u=function(r,t,e){this.message=r,this.code=n(t)?t:0,null!=e&&(this.data=e)};function l(r,n,t){var o=new e(r,n,t);return y(o,!0),o}function c(r,n){var t=new o(r,n);return y(t,!0),t}function f(r,n){var t=new i(r,n);return y(t,!0),t}function p(r,n){var t=new s(r,n);return y(t,!0),t}function d(r){if(!E(r))return new a(u.invalidRequest(r),"invalid");var n;try{n=JSON.parse(r)}catch(n){return new a(u.parseError(r),"invalid")}return h(n)}function h(r){if(!Array.isArray(r))return m(r);if(0===r.length)return new a(u.invalidRequest(r),"invalid");for(var n=[],t=0,e=r.length;t<e;t++)n[t]=m(r[t]);return n}u.invalidRequest=function(r){return new u("Invalid request",-32600,r)},u.methodNotFound=function(r){return new u("Method not found",-32601,r)},u.invalidParams=function(r){return new u("Invalid params",-32602,r)},u.internalError=function(r){return new u("Internal error",-32603,r)},u.parseError=function(r){return new u("Parse error",-32700,r)};var v=d;function m(n){var l=null,c=null,f="invalid";if(null==n||n.jsonrpc!==t.VERSION)l=u.invalidRequest(n),f="invalid";else if(r.call(n,"id")){if(r.call(n,"method"))l=y(c=new e(n.id,n.method,n.params)),f="request";else if(r.call(n,"result"))l=y(c=new i(n.id,n.result)),f="success";else if(r.call(n,"error")){var p=n;if(f="error",null==p.error)l=u.internalError(p);else{var d=new u(p.error.message,p.error.code,p.error.data);l=d.message!==p.error.message||d.code!==p.error.code?u.internalError(p):y(c=new s(p.id,d))}}}else l=y(c=new o(n.method,n.params)),f="notification";return null==l&&null!=c?new a(c,f):new a(null!=l?l:u.invalidRequest(n),"invalid")}function y(r,t){var a=null;if(r instanceof e?(null==(a=w(r.id))&&(a=g(r.method)),null==a&&(a=b(r.params))):r instanceof o?null==(a=g(r.method))&&(a=b(r.params)):r instanceof i?null==(a=w(r.id))&&(a=void 0===r.result?u.internalError("Result must exist for success Response objects"):null):r instanceof s&&null==(a=w(r.id,!0))&&(a=function(r){return r instanceof u?n(r.code)?E(r.message)?null:u.internalError("Message must exist or must be a string."):u.internalError("Invalid error code. It must be an integer."):u.internalError("Error must be an instance of JsonRpcError")}(r.error)),t&&null!=a)throw a;return a}function w(r,t){return t&&null===r?null:E(r)||n(r)?null:u.internalError('"id" must be provided, a string or an integer.')}function g(r){return E(r)?null:u.invalidRequest(r)}function b(r){if(void 0===r)return null;if(Array.isArray(r)||null!=(n=r)&&"object"==typeof n&&!Array.isArray(n))try{return JSON.stringify(r),null}catch(n){return u.parseError(r)}var n;return u.invalidParams(r)}function E(r){return""!==r&&"string"==typeof r}var _={JsonRpc:t,JsonRpcError:u,request:l,notification:c,success:f,error:p,parse:d,parseObject:m,parseJsonRpcObject:h,parseJsonRpcString:v},R=_;(global||window).jsonrpc=_;export default _;export{t as JsonRpc,e as RequestObject,o as NotificationObject,i as SuccessObject,s as ErrorObject,a as JsonRpcParsed,u as JsonRpcError,l as request,c as notification,f as success,p as error,d as parse,h as parseJsonRpcObject,v as parseJsonRpcString,m as parseObject,R as jsonrpc};
//# sourceMappingURL=jsonrpc.mjs.map