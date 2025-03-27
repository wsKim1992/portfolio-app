function e(e,t){for(var n=0;n<t.length;n++){const r=t[n]
if('string'!=typeof r&&!Array.isArray(r))for(const t in r)if('default'!==t&&!(t in e)){const n=Object.getOwnPropertyDescriptor(r,t)
n&&Object.defineProperty(e,t,n.get?n:{enumerable:!0,get:()=>r[t]})}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:'Module'}))}function t(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,'default')?e.default:e}!function(){const e=document.createElement('link').relList
if(!(e&&e.supports&&e.supports('modulepreload'))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e)
new MutationObserver((e=>{for(const n of e)if('childList'===n.type)for(const e of n.addedNodes)'LINK'===e.tagName&&'modulepreload'===e.rel&&t(e)})).observe(document,{childList:!0,subtree:!0})}function t(e){if(e.ep)return
e.ep=!0
const t=function(e){const t={}
return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),'use-credentials'===e.crossOrigin?t.credentials='include':'anonymous'===e.crossOrigin?t.credentials='omit':t.credentials='same-origin',t}(e)
fetch(e.href,t)}}()
var n,r,a,o,l={exports:{}},i={},s=(r||(r=1,l.exports=function(){if(n)return i
n=1
var e=Symbol.for('react.transitional.element'),t=Symbol.for('react.fragment')
function r(t,n,r){var a=null
if(void 0!==r&&(a=''+r),void 0!==n.key&&(a=''+n.key),'key'in n)for(var o in r={},n)'key'!==o&&(r[o]=n[o])
else r=n
return n=r.ref,{$$typeof:e,type:t,key:a,ref:void 0!==n?n:null,props:r}}return i.Fragment=t,i.jsx=r,i.jsxs=r,i}()),l.exports),c={exports:{}},u={}
function d(){if(a)return u
a=1
var e=Symbol.for('react.transitional.element'),t=Symbol.for('react.portal'),n=Symbol.for('react.fragment'),r=Symbol.for('react.strict_mode'),o=Symbol.for('react.profiler'),l=Symbol.for('react.consumer'),i=Symbol.for('react.context'),s=Symbol.for('react.forward_ref'),c=Symbol.for('react.suspense'),d=Symbol.for('react.memo'),f=Symbol.for('react.lazy'),p=Symbol.iterator,m={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},h=Object.assign,v={}
function g(e,t,n){this.props=e,this.context=t,this.refs=v,this.updater=n||m}function y(){}function b(e,t,n){this.props=e,this.context=t,this.refs=v,this.updater=n||m}g.prototype.isReactComponent={},g.prototype.setState=function(e,t){if('object'!=typeof e&&'function'!=typeof e&&null!=e)throw Error('takes an object of state variables to update or a function which returns an object of state variables.')
this.updater.enqueueSetState(this,e,t,'setState')},g.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,'forceUpdate')},y.prototype=g.prototype
var w=b.prototype=new y
w.constructor=b,h(w,g.prototype),w.isPureReactComponent=!0
var x=Array.isArray,C={H:null,A:null,T:null,S:null},S=Object.prototype.hasOwnProperty
function E(t,n,r,a,o,l){return r=l.ref,{$$typeof:e,type:t,key:n,ref:void 0!==r?r:null,props:l}}function k(t){return'object'==typeof t&&null!==t&&t.$$typeof===e}var N=/\/+/g
function R(e,t){return'object'==typeof e&&null!==e&&null!=e.key?(n=''+e.key,r={'=':'=0',':':'=2'},'$'+n.replace(/[=:]/g,(function(e){return r[e]}))):t.toString(36)
var n,r}function P(){}function T(n,r,a,o,l){var i=typeof n
'undefined'!==i&&'boolean'!==i||(n=null)
var s,c,u=!1
if(null===n)u=!0
else switch(i){case'bigint':case'string':case'number':u=!0
break
case'object':switch(n.$$typeof){case e:case t:u=!0
break
case f:return T((u=n._init)(n._payload),r,a,o,l)}}if(u)return l=l(n),u=''===o?'.'+R(n,0):o,x(l)?(a='',null!=u&&(a=u.replace(N,'$&/')+'/'),T(l,r,a,'',(function(e){return e}))):null!=l&&(k(l)&&(s=l,c=a+(null==l.key||n&&n.key===l.key?'':(''+l.key).replace(N,'$&/')+'/')+u,l=E(s.type,c,void 0,0,0,s.props)),r.push(l)),1
u=0
var d,m=''===o?'.':o+':'
if(x(n))for(var h=0;h<n.length;h++)u+=T(o=n[h],r,a,i=m+R(o,h),l)
else if('function'==typeof(h=null===(d=n)||'object'!=typeof d?null:'function'==typeof(d=p&&d[p]||d['@@iterator'])?d:null))for(n=h.call(n),h=0;!(o=n.next()).done;)u+=T(o=o.value,r,a,i=m+R(o,h++),l)
else if('object'===i){if('function'==typeof n.then)return T(function(e){switch(e.status){case'fulfilled':return e.value
case'rejected':throw e.reason
default:switch('string'==typeof e.status?e.then(P,P):(e.status='pending',e.then((function(t){'pending'===e.status&&(e.status='fulfilled',e.value=t)}),(function(t){'pending'===e.status&&(e.status='rejected',e.reason=t)}))),e.status){case'fulfilled':return e.value
case'rejected':throw e.reason}}throw e}(n),r,a,o,l)
throw r=String(n),Error('Objects are not valid as a React child (found: '+('[object Object]'===r?'object with keys {'+Object.keys(n).join(', ')+'}':r)+'). If you meant to render a collection of children, use an array instead.')}return u}function M(e,t,n){if(null==e)return e
var r=[],a=0
return T(e,r,'','',(function(e){return t.call(n,e,a++)})),r}function _(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default
throw e._result}var L='function'==typeof reportError?reportError:function(e){if('object'==typeof window&&'function'==typeof window.ErrorEvent){var t=new window.ErrorEvent('error',{bubbles:!0,cancelable:!0,message:'object'==typeof e&&null!==e&&'string'==typeof e.message?String(e.message):String(e),error:e})
if(!window.dispatchEvent(t))return}else if('object'==typeof process&&'function'==typeof process.emit)return void process.emit('uncaughtException',e)}
function D(){}return u.Children={map:M,forEach:function(e,t,n){M(e,(function(){t.apply(this,arguments)}),n)},count:function(e){var t=0
return M(e,(function(){t++})),t},toArray:function(e){return M(e,(function(e){return e}))||[]},only:function(e){if(!k(e))throw Error('React.Children.only expected to receive a single React element child.')
return e}},u.Component=g,u.Fragment=n,u.Profiler=o,u.PureComponent=b,u.StrictMode=r,u.Suspense=c,u.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=C,u.act=function(){throw Error('act(...) is not supported in production builds of React.')},u.cache=function(e){return function(){return e.apply(null,arguments)}},u.cloneElement=function(e,t,n){if(null==e)throw Error('The argument must be a React element, but you passed '+e+'.')
var r=h({},e.props),a=e.key
if(null!=t)for(o in t.ref,void 0!==t.key&&(a=''+t.key),t)!S.call(t,o)||'key'===o||'__self'===o||'__source'===o||'ref'===o&&void 0===t.ref||(r[o]=t[o])
var o=arguments.length-2
if(1===o)r.children=n
else if(1<o){for(var l=Array(o),i=0;i<o;i++)l[i]=arguments[i+2]
r.children=l}return E(e.type,a,void 0,0,0,r)},u.createContext=function(e){return(e={$$typeof:i,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider=e,e.Consumer={$$typeof:l,_context:e},e},u.createElement=function(e,t,n){var r,a={},o=null
if(null!=t)for(r in void 0!==t.key&&(o=''+t.key),t)S.call(t,r)&&'key'!==r&&'__self'!==r&&'__source'!==r&&(a[r]=t[r])
var l=arguments.length-2
if(1===l)a.children=n
else if(1<l){for(var i=Array(l),s=0;s<l;s++)i[s]=arguments[s+2]
a.children=i}if(e&&e.defaultProps)for(r in l=e.defaultProps)void 0===a[r]&&(a[r]=l[r])
return E(e,o,void 0,0,0,a)},u.createRef=function(){return{current:null}},u.forwardRef=function(e){return{$$typeof:s,render:e}},u.isValidElement=k,u.lazy=function(e){return{$$typeof:f,_payload:{_status:-1,_result:e},_init:_}},u.memo=function(e,t){return{$$typeof:d,type:e,compare:void 0===t?null:t}},u.startTransition=function(e){var t=C.T,n={}
C.T=n
try{var r=e(),a=C.S
null!==a&&a(n,r),'object'==typeof r&&null!==r&&'function'==typeof r.then&&r.then(D,L)}catch(o){L(o)}finally{C.T=t}},u.unstable_useCacheRefresh=function(){return C.H.useCacheRefresh()},u.use=function(e){return C.H.use(e)},u.useActionState=function(e,t,n){return C.H.useActionState(e,t,n)},u.useCallback=function(e,t){return C.H.useCallback(e,t)},u.useContext=function(e){return C.H.useContext(e)},u.useDebugValue=function(){},u.useDeferredValue=function(e,t){return C.H.useDeferredValue(e,t)},u.useEffect=function(e,t){return C.H.useEffect(e,t)},u.useId=function(){return C.H.useId()},u.useImperativeHandle=function(e,t,n){return C.H.useImperativeHandle(e,t,n)},u.useInsertionEffect=function(e,t){return C.H.useInsertionEffect(e,t)},u.useLayoutEffect=function(e,t){return C.H.useLayoutEffect(e,t)},u.useMemo=function(e,t){return C.H.useMemo(e,t)},u.useOptimistic=function(e,t){return C.H.useOptimistic(e,t)},u.useReducer=function(e,t,n){return C.H.useReducer(e,t,n)},u.useRef=function(e){return C.H.useRef(e)},u.useState=function(e){return C.H.useState(e)},u.useSyncExternalStore=function(e,t,n){return C.H.useSyncExternalStore(e,t,n)},u.useTransition=function(){return C.H.useTransition()},u.version='19.0.0',u}function f(){return o||(o=1,c.exports=d()),c.exports}var p=f()
const m=t(p),h=e({__proto__:null,default:m},[p])
var v,g,y,b,w,x,C={exports:{}},S={},E={exports:{}},k={},N={exports:{}},R={}
function P(){return b||(b=1,function e(){if('undefined'!=typeof __REACT_DEVTOOLS_GLOBAL_HOOK__&&'function'==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE)try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(t){}}(),N.exports=function(){if(y)return R
y=1
var e=f()
function t(e){var t='https://react.dev/errors/'+e
if(1<arguments.length){t+='?args[]='+encodeURIComponent(arguments[1])
for(var n=2;n<arguments.length;n++)t+='&args[]='+encodeURIComponent(arguments[n])}return'Minified React error #'+e+'; visit '+t+' for the full message or use the non-minified dev environment for full errors and additional helpful warnings.'}function n(){}var r={d:{f:n,r:function(){throw Error(t(522))},D:n,C:n,L:n,m:n,X:n,S:n,M:n},p:0,findDOMNode:null},a=Symbol.for('react.portal'),o=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE
function l(e,t){return'font'===e?'':'string'==typeof t?'use-credentials'===t?t:'':void 0}return R.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,R.createPortal=function(e,n){var r=2<arguments.length&&void 0!==arguments[2]?arguments[2]:null
if(!n||1!==n.nodeType&&9!==n.nodeType&&11!==n.nodeType)throw Error(t(299))
return function(e,t,n){var r=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null
return{$$typeof:a,key:null==r?null:''+r,children:e,containerInfo:t,implementation:n}}(e,n,null,r)},R.flushSync=function(e){var t=o.T,n=r.p
try{if(o.T=null,r.p=2,e)return e()}finally{o.T=t,r.p=n,r.d.f()}},R.preconnect=function(e,t){'string'==typeof e&&(t=t?'string'==typeof(t=t.crossOrigin)?'use-credentials'===t?t:'':void 0:null,r.d.C(e,t))},R.prefetchDNS=function(e){'string'==typeof e&&r.d.D(e)},R.preinit=function(e,t){if('string'==typeof e&&t&&'string'==typeof t.as){var n=t.as,a=l(n,t.crossOrigin),o='string'==typeof t.integrity?t.integrity:void 0,i='string'==typeof t.fetchPriority?t.fetchPriority:void 0
'style'===n?r.d.S(e,'string'==typeof t.precedence?t.precedence:void 0,{crossOrigin:a,integrity:o,fetchPriority:i}):'script'===n&&r.d.X(e,{crossOrigin:a,integrity:o,fetchPriority:i,nonce:'string'==typeof t.nonce?t.nonce:void 0})}},R.preinitModule=function(e,t){if('string'==typeof e)if('object'==typeof t&&null!==t){if(null==t.as||'script'===t.as){var n=l(t.as,t.crossOrigin)
r.d.M(e,{crossOrigin:n,integrity:'string'==typeof t.integrity?t.integrity:void 0,nonce:'string'==typeof t.nonce?t.nonce:void 0})}}else null==t&&r.d.M(e)},R.preload=function(e,t){if('string'==typeof e&&'object'==typeof t&&null!==t&&'string'==typeof t.as){var n=t.as,a=l(n,t.crossOrigin)
r.d.L(e,n,{crossOrigin:a,integrity:'string'==typeof t.integrity?t.integrity:void 0,nonce:'string'==typeof t.nonce?t.nonce:void 0,type:'string'==typeof t.type?t.type:void 0,fetchPriority:'string'==typeof t.fetchPriority?t.fetchPriority:void 0,referrerPolicy:'string'==typeof t.referrerPolicy?t.referrerPolicy:void 0,imageSrcSet:'string'==typeof t.imageSrcSet?t.imageSrcSet:void 0,imageSizes:'string'==typeof t.imageSizes?t.imageSizes:void 0,media:'string'==typeof t.media?t.media:void 0})}},R.preloadModule=function(e,t){if('string'==typeof e)if(t){var n=l(t.as,t.crossOrigin)
r.d.m(e,{as:'string'==typeof t.as&&'script'!==t.as?t.as:void 0,crossOrigin:n,integrity:'string'==typeof t.integrity?t.integrity:void 0})}else r.d.m(e)},R.requestFormReset=function(e){r.d.r(e)},R.unstable_batchedUpdates=function(e,t){return e(t)},R.useFormState=function(e,t,n){return o.H.useFormState(e,t,n)},R.useFormStatus=function(){return o.H.useHostTransitionStatus()},R.version='19.0.0',R}()),N.exports}var T,M=(x||(x=1,function e(){if('undefined'!=typeof __REACT_DEVTOOLS_GLOBAL_HOOK__&&'function'==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE)try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(t){}}(),C.exports=function(){if(w)return S
w=1
var e=(g||(g=1,E.exports=(v||(v=1,function(e){function t(e,t){var n=e.length
e.push(t)
e:for(;0<n;){var r=n-1>>>1,o=e[r]
if(!(0<a(o,t)))break e
e[r]=t,e[n]=o,n=r}}function n(e){return 0===e.length?null:e[0]}function r(e){if(0===e.length)return null
var t=e[0],n=e.pop()
if(n!==t){e[0]=n
e:for(var r=0,o=e.length,l=o>>>1;r<l;){var i=2*(r+1)-1,s=e[i],c=i+1,u=e[c]
if(0>a(s,n))c<o&&0>a(u,s)?(e[r]=u,e[c]=n,r=c):(e[r]=s,e[i]=n,r=i)
else{if(!(c<o&&0>a(u,n)))break e
e[r]=u,e[c]=n,r=c}}}return t}function a(e,t){var n=e.sortIndex-t.sortIndex
return 0!==n?n:e.id-t.id}if(e.unstable_now=void 0,'object'==typeof performance&&'function'==typeof performance.now){var o=performance
e.unstable_now=function(){return o.now()}}else{var l=Date,i=l.now()
e.unstable_now=function(){return l.now()-i}}var s=[],c=[],u=1,d=null,f=3,p=!1,m=!1,h=!1,v='function'==typeof setTimeout?setTimeout:null,g='function'==typeof clearTimeout?clearTimeout:null,y='undefined'!=typeof setImmediate?setImmediate:null
function b(e){for(var a=n(c);null!==a;){if(null===a.callback)r(c)
else{if(!(a.startTime<=e))break
r(c),a.sortIndex=a.expirationTime,t(s,a)}a=n(c)}}function w(e){if(h=!1,b(e),!m)if(null!==n(s))m=!0,M()
else{var t=n(c)
null!==t&&_(w,t.startTime-e)}}var x,C=!1,S=-1,E=5,k=-1
function N(){return!(e.unstable_now()-k<E)}function R(){if(C){var t=e.unstable_now()
k=t
var a=!0
try{e:{m=!1,h&&(h=!1,g(S),S=-1),p=!0
var o=f
try{t:{for(b(t),d=n(s);null!==d&&!(d.expirationTime>t&&N());){var l=d.callback
if('function'==typeof l){d.callback=null,f=d.priorityLevel
var i=l(d.expirationTime<=t)
if(t=e.unstable_now(),'function'==typeof i){d.callback=i,b(t),a=!0
break t}d===n(s)&&r(s),b(t)}else r(s)
d=n(s)}if(null!==d)a=!0
else{var u=n(c)
null!==u&&_(w,u.startTime-t),a=!1}}break e}finally{d=null,f=o,p=!1}a=void 0}}finally{a?x():C=!1}}}if('function'==typeof y)x=function(){y(R)}
else if('undefined'!=typeof MessageChannel){var P=new MessageChannel,T=P.port2
P.port1.onmessage=R,x=function(){T.postMessage(null)}}else x=function(){v(R,0)}
function M(){C||(C=!0,x())}function _(t,n){S=v((function(){t(e.unstable_now())}),n)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(e){e.callback=null},e.unstable_continueExecution=function(){m||p||(m=!0,M())},e.unstable_forceFrameRate=function(e){0>e||125<e||(E=0<e?Math.floor(1e3/e):5)},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_getFirstCallbackNode=function(){return n(s)},e.unstable_next=function(e){switch(f){case 1:case 2:case 3:var t=3
break
default:t=f}var n=f
f=t
try{return e()}finally{f=n}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break
default:e=3}var n=f
f=e
try{return t()}finally{f=n}},e.unstable_scheduleCallback=function(r,a,o){var l=e.unstable_now()
switch(o='object'==typeof o&&null!==o&&'number'==typeof(o=o.delay)&&0<o?l+o:l,r){case 1:var i=-1
break
case 2:i=250
break
case 5:i=1073741823
break
case 4:i=1e4
break
default:i=5e3}return r={id:u++,callback:a,priorityLevel:r,startTime:o,expirationTime:i=o+i,sortIndex:-1},o>l?(r.sortIndex=o,t(c,r),null===n(s)&&r===n(c)&&(h?(g(S),S=-1):h=!0,_(w,o-l))):(r.sortIndex=i,t(s,r),m||p||(m=!0,M())),r},e.unstable_shouldYield=N,e.unstable_wrapCallback=function(e){var t=f
return function(){var n=f
f=t
try{return e.apply(this,arguments)}finally{f=n}}}}(k)),k)),E.exports),t=f(),n=P()
function r(e){var t='https://react.dev/errors/'+e
if(1<arguments.length){t+='?args[]='+encodeURIComponent(arguments[1])
for(var n=2;n<arguments.length;n++)t+='&args[]='+encodeURIComponent(arguments[n])}return'Minified React error #'+e+'; visit '+t+' for the full message or use the non-minified dev environment for full errors and additional helpful warnings.'}function a(e){return!(!e||1!==e.nodeType&&9!==e.nodeType&&11!==e.nodeType)}var o=Symbol.for('react.element'),l=Symbol.for('react.transitional.element'),i=Symbol.for('react.portal'),s=Symbol.for('react.fragment'),c=Symbol.for('react.strict_mode'),u=Symbol.for('react.profiler'),d=Symbol.for('react.provider'),p=Symbol.for('react.consumer'),m=Symbol.for('react.context'),h=Symbol.for('react.forward_ref'),y=Symbol.for('react.suspense'),b=Symbol.for('react.suspense_list'),x=Symbol.for('react.memo'),C=Symbol.for('react.lazy'),N=Symbol.for('react.offscreen'),R=Symbol.for('react.memo_cache_sentinel'),T=Symbol.iterator
function M(e){return null===e||'object'!=typeof e?null:'function'==typeof(e=T&&e[T]||e['@@iterator'])?e:null}var _=Symbol.for('react.client.reference')
function L(e){if(null==e)return null
if('function'==typeof e)return e.$$typeof===_?null:e.displayName||e.name||null
if('string'==typeof e)return e
switch(e){case s:return'Fragment'
case i:return'Portal'
case u:return'Profiler'
case c:return'StrictMode'
case y:return'Suspense'
case b:return'SuspenseList'}if('object'==typeof e)switch(e.$$typeof){case m:return(e.displayName||'Context')+'.Provider'
case p:return(e._context.displayName||'Context')+'.Consumer'
case h:var t=e.render
return(e=e.displayName)||(e=''!==(e=t.displayName||t.name||'')?'ForwardRef('+e+')':'ForwardRef'),e
case x:return null!==(t=e.displayName||null)?t:L(e.type)||'Memo'
case C:t=e._payload,e=e._init
try{return L(e(t))}catch(n){}}return null}var D,j,I=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,A=Object.assign
function O(e){if(void 0===D)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/)
D=t&&t[1]||'',j=-1<n.stack.indexOf('\n    at')?' (<anonymous>)':-1<n.stack.indexOf('@')?'@unknown:0:0':''}return'\n'+D+e+j}var z=!1
function F(e,t){if(!e||z)return''
z=!0
var n=Error.prepareStackTrace
Error.prepareStackTrace=void 0
try{var r={DetermineComponentFrameRoot:function(){try{if(t){var n=function(){throw Error()}
if(Object.defineProperty(n.prototype,'props',{set:function(){throw Error()}}),'object'==typeof Reflect&&Reflect.construct){try{Reflect.construct(n,[])}catch(a){var r=a}Reflect.construct(e,[],n)}else{try{n.call()}catch(o){r=o}e.call(n.prototype)}}else{try{throw Error()}catch(l){r=l}(n=e())&&'function'==typeof n.catch&&n.catch((function(){}))}}catch(i){if(i&&r&&'string'==typeof i.stack)return[i.stack,r.stack]}return[null,null]}}
r.DetermineComponentFrameRoot.displayName='DetermineComponentFrameRoot'
var a=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,'name')
a&&a.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,'name',{value:'DetermineComponentFrameRoot'})
var o=r.DetermineComponentFrameRoot(),l=o[0],i=o[1]
if(l&&i){var s=l.split('\n'),c=i.split('\n')
for(a=r=0;r<s.length&&!s[r].includes('DetermineComponentFrameRoot');)r++
for(;a<c.length&&!c[a].includes('DetermineComponentFrameRoot');)a++
if(r===s.length||a===c.length)for(r=s.length-1,a=c.length-1;1<=r&&0<=a&&s[r]!==c[a];)a--
for(;1<=r&&0<=a;r--,a--)if(s[r]!==c[a]){if(1!==r||1!==a)do{if(r--,0>--a||s[r]!==c[a]){var u='\n'+s[r].replace(' at new ',' at ')
return e.displayName&&u.includes('<anonymous>')&&(u=u.replace('<anonymous>',e.displayName)),u}}while(1<=r&&0<=a)
break}}}finally{z=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:'')?O(n):''}function B(e){switch(e.tag){case 26:case 27:case 5:return O(e.type)
case 16:return O('Lazy')
case 13:return O('Suspense')
case 19:return O('SuspenseList')
case 0:case 15:return F(e.type,!1)
case 11:return F(e.type.render,!1)
case 1:return F(e.type,!0)
default:return''}}function $(e){try{var t=''
do{t+=B(e),e=e.return}while(e)
return t}catch(n){return'\nError generating stack: '+n.message+'\n'+n.stack}}function H(e){var t=e,n=e
if(e.alternate)for(;t.return;)t=t.return
else{e=t
do{!!(4098&(t=e).flags)&&(n=t.return),e=t.return}while(e)}return 3===t.tag?n:null}function V(e){if(13===e.tag){var t=e.memoizedState
if(null===t&&null!==(e=e.alternate)&&(t=e.memoizedState),null!==t)return t.dehydrated}return null}function W(e){if(H(e)!==e)throw Error(r(188))}function U(e){var t=e.tag
if(5===t||26===t||27===t||6===t)return e
for(e=e.child;null!==e;){if(null!==(t=U(e)))return t
e=e.sibling}return null}var K=Array.isArray,G=n.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,q={pending:!1,data:null,method:null,action:null},Y=[],X=-1
function Q(e){return{current:e}}function Z(e){0>X||(e.current=Y[X],Y[X]=null,X--)}function J(e,t){X++,Y[X]=e.current,e.current=t}var ee=Q(null),te=Q(null),ne=Q(null),re=Q(null)
function ae(e,t){switch(J(ne,t),J(te,e),J(ee,null),e=t.nodeType){case 9:case 11:t=(t=t.documentElement)&&(t=t.namespaceURI)?td(t):0
break
default:if(t=(e=8===e?t.parentNode:t).tagName,e=e.namespaceURI)t=nd(e=td(e),t)
else switch(t){case'svg':t=1
break
case'math':t=2
break
default:t=0}}Z(ee),J(ee,t)}function oe(){Z(ee),Z(te),Z(ne)}function le(e){null!==e.memoizedState&&J(re,e)
var t=ee.current,n=nd(t,e.type)
t!==n&&(J(te,e),J(ee,n))}function ie(e){te.current===e&&(Z(ee),Z(te)),re.current===e&&(Z(re),$d._currentValue=q)}var se=Object.prototype.hasOwnProperty,ce=e.unstable_scheduleCallback,ue=e.unstable_cancelCallback,de=e.unstable_shouldYield,fe=e.unstable_requestPaint,pe=e.unstable_now,me=e.unstable_getCurrentPriorityLevel,he=e.unstable_ImmediatePriority,ve=e.unstable_UserBlockingPriority,ge=e.unstable_NormalPriority,ye=e.unstable_LowPriority,be=e.unstable_IdlePriority,we=e.log,xe=e.unstable_setDisableYieldValue,Ce=null,Se=null
function Ee(e){if('function'==typeof we&&xe(e),Se&&'function'==typeof Se.setStrictMode)try{Se.setStrictMode(Ce,e)}catch(t){}}var ke=Math.clz32?Math.clz32:function(e){return 0==(e>>>=0)?32:31-(Ne(e)/Re|0)|0},Ne=Math.log,Re=Math.LN2,Pe=128,Te=4194304
function Me(e){var t=42&e
if(0!==t)return t
switch(e&-e){case 1:return 1
case 2:return 2
case 4:return 4
case 8:return 8
case 16:return 16
case 32:return 32
case 64:return 64
case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return 4194176&e
case 4194304:case 8388608:case 16777216:case 33554432:return 62914560&e
case 67108864:return 67108864
case 134217728:return 134217728
case 268435456:return 268435456
case 536870912:return 536870912
case 1073741824:return 0
default:return e}}function _e(e,t){var n=e.pendingLanes
if(0===n)return 0
var r=0,a=e.suspendedLanes,o=e.pingedLanes,l=e.warmLanes
e=0!==e.finishedLanes
var i=134217727&n
return 0!==i?0!=(n=i&~a)?r=Me(n):0!=(o&=i)?r=Me(o):e||0!=(l=i&~l)&&(r=Me(l)):0!=(i=n&~a)?r=Me(i):0!==o?r=Me(o):e||0!=(l=n&~l)&&(r=Me(l)),0===r?0:0===t||t===r||t&a||!((a=r&-r)>=(l=t&-t)||32===a&&4194176&l)?r:t}function Le(e,t){return!(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)}function De(e,t){switch(e){case 1:case 2:case 4:case 8:return t+250
case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3
default:return-1}}function je(){var e=Pe
return!(4194176&(Pe<<=1))&&(Pe=128),e}function Ie(){var e=Te
return!(62914560&(Te<<=1))&&(Te=4194304),e}function Ae(e){for(var t=[],n=0;31>n;n++)t.push(e)
return t}function Oe(e,t){e.pendingLanes|=t,268435456!==t&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function ze(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t
var r=31-ke(t)
e.entangledLanes|=t,e.entanglements[r]=1073741824|e.entanglements[r]|4194218&n}function Fe(e,t){var n=e.entangledLanes|=t
for(e=e.entanglements;n;){var r=31-ke(n),a=1<<r
a&t|e[r]&t&&(e[r]|=t),n&=~a}}function Be(e){return 2<(e&=-e)?8<e?134217727&e?32:268435456:8:2}function $e(){var e=G.p
return 0!==e?e:void 0===(e=window.event)?32:nf(e.type)}var He=Math.random().toString(36).slice(2),Ve='__reactFiber$'+He,We='__reactProps$'+He,Ue='__reactContainer$'+He,Ke='__reactEvents$'+He,Ge='__reactListeners$'+He,qe='__reactHandles$'+He,Ye='__reactResources$'+He,Xe='__reactMarker$'+He
function Qe(e){delete e[Ve],delete e[We],delete e[Ke],delete e[Ge],delete e[qe]}function Ze(e){var t=e[Ve]
if(t)return t
for(var n=e.parentNode;n;){if(t=n[Ue]||n[Ve]){if(n=t.alternate,null!==t.child||null!==n&&null!==n.child)for(e=pd(e);null!==e;){if(n=e[Ve])return n
e=pd(e)}return t}n=(e=n).parentNode}return null}function Je(e){if(e=e[Ve]||e[Ue]){var t=e.tag
if(5===t||6===t||13===t||26===t||27===t||3===t)return e}return null}function et(e){var t=e.tag
if(5===t||26===t||27===t||6===t)return e.stateNode
throw Error(r(33))}function tt(e){var t=e[Ye]
return t||(t=e[Ye]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function nt(e){e[Xe]=!0}var rt=new Set,at={}
function ot(e,t){lt(e,t),lt(e+'Capture',t)}function lt(e,t){for(at[e]=t,e=0;e<t.length;e++)rt.add(t[e])}var it=!('undefined'==typeof window||void 0===window.document||void 0===window.document.createElement),st=RegExp('^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$'),ct={},ut={}
function dt(e,t,n){if(a=t,se.call(ut,a)||!se.call(ct,a)&&(st.test(a)?ut[a]=!0:(ct[a]=!0,0)))if(null===n)e.removeAttribute(t)
else{switch(typeof n){case'undefined':case'function':case'symbol':return void e.removeAttribute(t)
case'boolean':var r=t.toLowerCase().slice(0,5)
if('data-'!==r&&'aria-'!==r)return void e.removeAttribute(t)}e.setAttribute(t,''+n)}var a}function ft(e,t,n){if(null===n)e.removeAttribute(t)
else{switch(typeof n){case'undefined':case'function':case'symbol':case'boolean':return void e.removeAttribute(t)}e.setAttribute(t,''+n)}}function pt(e,t,n,r){if(null===r)e.removeAttribute(n)
else{switch(typeof r){case'undefined':case'function':case'symbol':case'boolean':return void e.removeAttribute(n)}e.setAttributeNS(t,n,''+r)}}function mt(e){switch(typeof e){case'bigint':case'boolean':case'number':case'string':case'undefined':case'object':return e
default:return''}}function ht(e){var t=e.type
return(e=e.nodeName)&&'input'===e.toLowerCase()&&('checkbox'===t||'radio'===t)}function vt(e){e._valueTracker||(e._valueTracker=function(e){var t=ht(e)?'checked':'value',n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=''+e[t]
if(!e.hasOwnProperty(t)&&void 0!==n&&'function'==typeof n.get&&'function'==typeof n.set){var a=n.get,o=n.set
return Object.defineProperty(e,t,{configurable:!0,get:function(){return a.call(this)},set:function(e){r=''+e,o.call(this,e)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(e){r=''+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}(e))}function gt(e){if(!e)return!1
var t=e._valueTracker
if(!t)return!0
var n=t.getValue(),r=''
return e&&(r=ht(e)?e.checked?'true':'false':e.value),(e=r)!==n&&(t.setValue(e),!0)}function yt(e){if(void 0===(e=e||('undefined'!=typeof document?document:void 0)))return null
try{return e.activeElement||e.body}catch(t){return e.body}}var bt=/[\n"\\]/g
function wt(e){return e.replace(bt,(function(e){return'\\'+e.charCodeAt(0).toString(16)+' '}))}function xt(e,t,n,r,a,o,l,i){e.name='',null!=l&&'function'!=typeof l&&'symbol'!=typeof l&&'boolean'!=typeof l?e.type=l:e.removeAttribute('type'),null!=t?'number'===l?(0===t&&''===e.value||e.value!=t)&&(e.value=''+mt(t)):e.value!==''+mt(t)&&(e.value=''+mt(t)):'submit'!==l&&'reset'!==l||e.removeAttribute('value'),null!=t?St(e,l,mt(t)):null!=n?St(e,l,mt(n)):null!=r&&e.removeAttribute('value'),null==a&&null!=o&&(e.defaultChecked=!!o),null!=a&&(e.checked=a&&'function'!=typeof a&&'symbol'!=typeof a),null!=i&&'function'!=typeof i&&'symbol'!=typeof i&&'boolean'!=typeof i?e.name=''+mt(i):e.removeAttribute('name')}function Ct(e,t,n,r,a,o,l,i){if(null!=o&&'function'!=typeof o&&'symbol'!=typeof o&&'boolean'!=typeof o&&(e.type=o),null!=t||null!=n){if(('submit'===o||'reset'===o)&&null==t)return
n=null!=n?''+mt(n):'',t=null!=t?''+mt(t):n,i||t===e.value||(e.value=t),e.defaultValue=t}r='function'!=typeof(r=null!=r?r:a)&&'symbol'!=typeof r&&!!r,e.checked=i?e.checked:!!r,e.defaultChecked=!!r,null!=l&&'function'!=typeof l&&'symbol'!=typeof l&&'boolean'!=typeof l&&(e.name=l)}function St(e,t,n){'number'===t&&yt(e.ownerDocument)===e||e.defaultValue===''+n||(e.defaultValue=''+n)}function Et(e,t,n,r){if(e=e.options,t){t={}
for(var a=0;a<n.length;a++)t['$'+n[a]]=!0
for(n=0;n<e.length;n++)a=t.hasOwnProperty('$'+e[n].value),e[n].selected!==a&&(e[n].selected=a),a&&r&&(e[n].defaultSelected=!0)}else{for(n=''+mt(n),t=null,a=0;a<e.length;a++){if(e[a].value===n)return e[a].selected=!0,void(r&&(e[a].defaultSelected=!0))
null!==t||e[a].disabled||(t=e[a])}null!==t&&(t.selected=!0)}}function kt(e,t,n){null==t||((t=''+mt(t))!==e.value&&(e.value=t),null!=n)?e.defaultValue=null!=n?''+mt(n):'':e.defaultValue!==t&&(e.defaultValue=t)}function Nt(e,t,n,a){if(null==t){if(null!=a){if(null!=n)throw Error(r(92))
if(K(a)){if(1<a.length)throw Error(r(93))
a=a[0]}n=a}null==n&&(n=''),t=n}n=mt(t),e.defaultValue=n,(a=e.textContent)===n&&''!==a&&null!==a&&(e.value=a)}function Rt(e,t){if(t){var n=e.firstChild
if(n&&n===e.lastChild&&3===n.nodeType)return void(n.nodeValue=t)}e.textContent=t}var Pt=new Set('animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp'.split(' '))
function Tt(e,t,n){var r=0===t.indexOf('--')
null==n||'boolean'==typeof n||''===n?r?e.setProperty(t,''):'float'===t?e.cssFloat='':e[t]='':r?e.setProperty(t,n):'number'!=typeof n||0===n||Pt.has(t)?'float'===t?e.cssFloat=n:e[t]=(''+n).trim():e[t]=n+'px'}function Mt(e,t,n){if(null!=t&&'object'!=typeof t)throw Error(r(62))
if(e=e.style,null!=n){for(var a in n)!n.hasOwnProperty(a)||null!=t&&t.hasOwnProperty(a)||(0===a.indexOf('--')?e.setProperty(a,''):'float'===a?e.cssFloat='':e[a]='')
for(var o in t)a=t[o],t.hasOwnProperty(o)&&n[o]!==a&&Tt(e,o,a)}else for(var l in t)t.hasOwnProperty(l)&&Tt(e,l,t[l])}function _t(e){if(-1===e.indexOf('-'))return!1
switch(e){case'annotation-xml':case'color-profile':case'font-face':case'font-face-src':case'font-face-uri':case'font-face-format':case'font-face-name':case'missing-glyph':return!1
default:return!0}}var Lt=new Map([['acceptCharset','accept-charset'],['htmlFor','for'],['httpEquiv','http-equiv'],['crossOrigin','crossorigin'],['accentHeight','accent-height'],['alignmentBaseline','alignment-baseline'],['arabicForm','arabic-form'],['baselineShift','baseline-shift'],['capHeight','cap-height'],['clipPath','clip-path'],['clipRule','clip-rule'],['colorInterpolation','color-interpolation'],['colorInterpolationFilters','color-interpolation-filters'],['colorProfile','color-profile'],['colorRendering','color-rendering'],['dominantBaseline','dominant-baseline'],['enableBackground','enable-background'],['fillOpacity','fill-opacity'],['fillRule','fill-rule'],['floodColor','flood-color'],['floodOpacity','flood-opacity'],['fontFamily','font-family'],['fontSize','font-size'],['fontSizeAdjust','font-size-adjust'],['fontStretch','font-stretch'],['fontStyle','font-style'],['fontVariant','font-variant'],['fontWeight','font-weight'],['glyphName','glyph-name'],['glyphOrientationHorizontal','glyph-orientation-horizontal'],['glyphOrientationVertical','glyph-orientation-vertical'],['horizAdvX','horiz-adv-x'],['horizOriginX','horiz-origin-x'],['imageRendering','image-rendering'],['letterSpacing','letter-spacing'],['lightingColor','lighting-color'],['markerEnd','marker-end'],['markerMid','marker-mid'],['markerStart','marker-start'],['overlinePosition','overline-position'],['overlineThickness','overline-thickness'],['paintOrder','paint-order'],['panose-1','panose-1'],['pointerEvents','pointer-events'],['renderingIntent','rendering-intent'],['shapeRendering','shape-rendering'],['stopColor','stop-color'],['stopOpacity','stop-opacity'],['strikethroughPosition','strikethrough-position'],['strikethroughThickness','strikethrough-thickness'],['strokeDasharray','stroke-dasharray'],['strokeDashoffset','stroke-dashoffset'],['strokeLinecap','stroke-linecap'],['strokeLinejoin','stroke-linejoin'],['strokeMiterlimit','stroke-miterlimit'],['strokeOpacity','stroke-opacity'],['strokeWidth','stroke-width'],['textAnchor','text-anchor'],['textDecoration','text-decoration'],['textRendering','text-rendering'],['transformOrigin','transform-origin'],['underlinePosition','underline-position'],['underlineThickness','underline-thickness'],['unicodeBidi','unicode-bidi'],['unicodeRange','unicode-range'],['unitsPerEm','units-per-em'],['vAlphabetic','v-alphabetic'],['vHanging','v-hanging'],['vIdeographic','v-ideographic'],['vMathematical','v-mathematical'],['vectorEffect','vector-effect'],['vertAdvY','vert-adv-y'],['vertOriginX','vert-origin-x'],['vertOriginY','vert-origin-y'],['wordSpacing','word-spacing'],['writingMode','writing-mode'],['xmlnsXlink','xmlns:xlink'],['xHeight','x-height']]),Dt=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i
function jt(e){return Dt.test(''+e)?'javascript:throw new Error(\'React has blocked a javascript: URL as a security precaution.\')':e}var It=null
function At(e){return(e=e.target||e.srcElement||window).correspondingUseElement&&(e=e.correspondingUseElement),3===e.nodeType?e.parentNode:e}var Ot=null,zt=null
function Ft(e){var t=Je(e)
if(t&&(e=t.stateNode)){var n=e[We]||null
e:switch(e=t.stateNode,t.type){case'input':if(xt(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,'radio'===n.type&&null!=t){for(n=e;n.parentNode;)n=n.parentNode
for(n=n.querySelectorAll('input[name="'+wt(''+t)+'"][type="radio"]'),t=0;t<n.length;t++){var a=n[t]
if(a!==e&&a.form===e.form){var o=a[We]||null
if(!o)throw Error(r(90))
xt(a,o.value,o.defaultValue,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name)}}for(t=0;t<n.length;t++)(a=n[t]).form===e.form&&gt(a)}break e
case'textarea':kt(e,n.value,n.defaultValue)
break e
case'select':null!=(t=n.value)&&Et(e,!!n.multiple,t,!1)}}}var Bt=!1
function $t(e,t,n){if(Bt)return e(t,n)
Bt=!0
try{return e(t)}finally{if(Bt=!1,(null!==Ot||null!==zt)&&(Vc(),Ot&&(t=Ot,e=zt,zt=Ot=null,Ft(t),e)))for(t=0;t<e.length;t++)Ft(e[t])}}function Ht(e,t){var n=e.stateNode
if(null===n)return null
var a=n[We]||null
if(null===a)return null
n=a[t]
e:switch(t){case'onClick':case'onClickCapture':case'onDoubleClick':case'onDoubleClickCapture':case'onMouseDown':case'onMouseDownCapture':case'onMouseMove':case'onMouseMoveCapture':case'onMouseUp':case'onMouseUpCapture':case'onMouseEnter':(a=!a.disabled)||(a=!('button'===(e=e.type)||'input'===e||'select'===e||'textarea'===e)),e=!a
break e
default:e=!1}if(e)return null
if(n&&'function'!=typeof n)throw Error(r(231,t,typeof n))
return n}var Vt=!1
if(it)try{var Wt={}
Object.defineProperty(Wt,'passive',{get:function(){Vt=!0}}),window.addEventListener('test',Wt,Wt),window.removeEventListener('test',Wt,Wt)}catch(Rf){Vt=!1}var Ut=null,Kt=null,Gt=null
function qt(){if(Gt)return Gt
var e,t,n=Kt,r=n.length,a='value'in Ut?Ut.value:Ut.textContent,o=a.length
for(e=0;e<r&&n[e]===a[e];e++);var l=r-e
for(t=1;t<=l&&n[r-t]===a[o-t];t++);return Gt=a.slice(e,1<t?1-t:void 0)}function Yt(e){var t=e.keyCode
return'charCode'in e?0===(e=e.charCode)&&13===t&&(e=13):e=t,10===e&&(e=13),32<=e||13===e?e:0}function Xt(){return!0}function Qt(){return!1}function Zt(e){function t(t,n,r,a,o){for(var l in this._reactName=t,this._targetInst=r,this.type=n,this.nativeEvent=a,this.target=o,this.currentTarget=null,e)e.hasOwnProperty(l)&&(t=e[l],this[l]=t?t(a):a[l])
return this.isDefaultPrevented=(null!=a.defaultPrevented?a.defaultPrevented:!1===a.returnValue)?Xt:Qt,this.isPropagationStopped=Qt,this}return A(t.prototype,{preventDefault:function(){this.defaultPrevented=!0
var e=this.nativeEvent
e&&(e.preventDefault?e.preventDefault():'unknown'!=typeof e.returnValue&&(e.returnValue=!1),this.isDefaultPrevented=Xt)},stopPropagation:function(){var e=this.nativeEvent
e&&(e.stopPropagation?e.stopPropagation():'unknown'!=typeof e.cancelBubble&&(e.cancelBubble=!0),this.isPropagationStopped=Xt)},persist:function(){},isPersistent:Xt}),t}var Jt,en,tn,nn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},rn=Zt(nn),an=A({},nn,{view:0,detail:0}),on=Zt(an),ln=A({},an,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:yn,button:0,buttons:0,relatedTarget:function(e){return void 0===e.relatedTarget?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return'movementX'in e?e.movementX:(e!==tn&&(tn&&'mousemove'===e.type?(Jt=e.screenX-tn.screenX,en=e.screenY-tn.screenY):en=Jt=0,tn=e),Jt)},movementY:function(e){return'movementY'in e?e.movementY:en}}),sn=Zt(ln),cn=Zt(A({},ln,{dataTransfer:0})),un=Zt(A({},an,{relatedTarget:0})),dn=Zt(A({},nn,{animationName:0,elapsedTime:0,pseudoElement:0})),fn=Zt(A({},nn,{clipboardData:function(e){return'clipboardData'in e?e.clipboardData:window.clipboardData}})),pn=Zt(A({},nn,{data:0})),mn={Esc:'Escape',Spacebar:' ',Left:'ArrowLeft',Up:'ArrowUp',Right:'ArrowRight',Down:'ArrowDown',Del:'Delete',Win:'OS',Menu:'ContextMenu',Apps:'ContextMenu',Scroll:'ScrollLock',MozPrintableKey:'Unidentified'},hn={8:'Backspace',9:'Tab',12:'Clear',13:'Enter',16:'Shift',17:'Control',18:'Alt',19:'Pause',20:'CapsLock',27:'Escape',32:' ',33:'PageUp',34:'PageDown',35:'End',36:'Home',37:'ArrowLeft',38:'ArrowUp',39:'ArrowRight',40:'ArrowDown',45:'Insert',46:'Delete',112:'F1',113:'F2',114:'F3',115:'F4',116:'F5',117:'F6',118:'F7',119:'F8',120:'F9',121:'F10',122:'F11',123:'F12',144:'NumLock',145:'ScrollLock',224:'Meta'},vn={Alt:'altKey',Control:'ctrlKey',Meta:'metaKey',Shift:'shiftKey'}
function gn(e){var t=this.nativeEvent
return t.getModifierState?t.getModifierState(e):!!(e=vn[e])&&!!t[e]}function yn(){return gn}var bn=Zt(A({},an,{key:function(e){if(e.key){var t=mn[e.key]||e.key
if('Unidentified'!==t)return t}return'keypress'===e.type?13===(e=Yt(e))?'Enter':String.fromCharCode(e):'keydown'===e.type||'keyup'===e.type?hn[e.keyCode]||'Unidentified':''},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:yn,charCode:function(e){return'keypress'===e.type?Yt(e):0},keyCode:function(e){return'keydown'===e.type||'keyup'===e.type?e.keyCode:0},which:function(e){return'keypress'===e.type?Yt(e):'keydown'===e.type||'keyup'===e.type?e.keyCode:0}})),wn=Zt(A({},ln,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0})),xn=Zt(A({},an,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:yn})),Cn=Zt(A({},nn,{propertyName:0,elapsedTime:0,pseudoElement:0})),Sn=Zt(A({},ln,{deltaX:function(e){return'deltaX'in e?e.deltaX:'wheelDeltaX'in e?-e.wheelDeltaX:0},deltaY:function(e){return'deltaY'in e?e.deltaY:'wheelDeltaY'in e?-e.wheelDeltaY:'wheelDelta'in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0})),En=Zt(A({},nn,{newState:0,oldState:0})),kn=[9,13,27,32],Nn=it&&'CompositionEvent'in window,Rn=null
it&&'documentMode'in document&&(Rn=document.documentMode)
var Pn=it&&'TextEvent'in window&&!Rn,Tn=it&&(!Nn||Rn&&8<Rn&&11>=Rn),Mn=String.fromCharCode(32),_n=!1
function Ln(e,t){switch(e){case'keyup':return-1!==kn.indexOf(t.keyCode)
case'keydown':return 229!==t.keyCode
case'keypress':case'mousedown':case'focusout':return!0
default:return!1}}function Dn(e){return'object'==typeof(e=e.detail)&&'data'in e?e.data:null}var jn=!1,In={color:!0,date:!0,datetime:!0,'datetime-local':!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0}
function An(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase()
return'input'===t?!!In[e.type]:'textarea'===t}function On(e,t,n,r){Ot?zt?zt.push(r):zt=[r]:Ot=r,0<(t=$u(t,'onChange')).length&&(n=new rn('onChange','change',null,n,r),e.push({event:n,listeners:t}))}var zn=null,Fn=null
function Bn(e){Du(e,0)}function $n(e){if(gt(et(e)))return e}function Hn(e,t){if('change'===e)return t}var Vn=!1
if(it){var Wn
if(it){var Un='oninput'in document
if(!Un){var Kn=document.createElement('div')
Kn.setAttribute('oninput','return;'),Un='function'==typeof Kn.oninput}Wn=Un}else Wn=!1
Vn=Wn&&(!document.documentMode||9<document.documentMode)}function Gn(){zn&&(zn.detachEvent('onpropertychange',qn),Fn=zn=null)}function qn(e){if('value'===e.propertyName&&$n(Fn)){var t=[]
On(t,Fn,e,At(e)),$t(Bn,t)}}function Yn(e,t,n){'focusin'===e?(Gn(),Fn=n,(zn=t).attachEvent('onpropertychange',qn)):'focusout'===e&&Gn()}function Xn(e){if('selectionchange'===e||'keyup'===e||'keydown'===e)return $n(Fn)}function Qn(e,t){if('click'===e)return $n(t)}function Zn(e,t){if('input'===e||'change'===e)return $n(t)}var Jn='function'==typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e==1/t)||e!=e&&t!=t}
function er(e,t){if(Jn(e,t))return!0
if('object'!=typeof e||null===e||'object'!=typeof t||null===t)return!1
var n=Object.keys(e),r=Object.keys(t)
if(n.length!==r.length)return!1
for(r=0;r<n.length;r++){var a=n[r]
if(!se.call(t,a)||!Jn(e[a],t[a]))return!1}return!0}function tr(e){for(;e&&e.firstChild;)e=e.firstChild
return e}function nr(e,t){var n,r=tr(e)
for(e=0;r;){if(3===r.nodeType){if(n=e+r.textContent.length,e<=t&&n>=t)return{node:r,offset:t-e}
e=n}e:{for(;r;){if(r.nextSibling){r=r.nextSibling
break e}r=r.parentNode}r=void 0}r=tr(r)}}function rr(e,t){return!(!e||!t)&&(e===t||(!e||3!==e.nodeType)&&(t&&3===t.nodeType?rr(e,t.parentNode):'contains'in e?e.contains(t):!!e.compareDocumentPosition&&!!(16&e.compareDocumentPosition(t))))}function ar(e){for(var t=yt((e=null!=e&&null!=e.ownerDocument&&null!=e.ownerDocument.defaultView?e.ownerDocument.defaultView:window).document);t instanceof e.HTMLIFrameElement;){try{var n='string'==typeof t.contentWindow.location.href}catch(r){n=!1}if(!n)break
t=yt((e=t.contentWindow).document)}return t}function or(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase()
return t&&('input'===t&&('text'===e.type||'search'===e.type||'tel'===e.type||'url'===e.type||'password'===e.type)||'textarea'===t||'true'===e.contentEditable)}function lr(e,t){var n=ar(t)
t=e.focusedElem
var r=e.selectionRange
if(n!==t&&t&&t.ownerDocument&&rr(t.ownerDocument.documentElement,t)){if(null!==r&&or(t))if(e=r.start,void 0===(n=r.end)&&(n=e),'selectionStart'in t)t.selectionStart=e,t.selectionEnd=Math.min(n,t.value.length)
else if((n=(e=t.ownerDocument||document)&&e.defaultView||window).getSelection){n=n.getSelection()
var a=t.textContent.length,o=Math.min(r.start,a)
r=void 0===r.end?o:Math.min(r.end,a),!n.extend&&o>r&&(a=r,r=o,o=a),a=nr(t,o)
var l=nr(t,r)
a&&l&&(1!==n.rangeCount||n.anchorNode!==a.node||n.anchorOffset!==a.offset||n.focusNode!==l.node||n.focusOffset!==l.offset)&&((e=e.createRange()).setStart(a.node,a.offset),n.removeAllRanges(),o>r?(n.addRange(e),n.extend(l.node,l.offset)):(e.setEnd(l.node,l.offset),n.addRange(e)))}for(e=[],n=t;n=n.parentNode;)1===n.nodeType&&e.push({element:n,left:n.scrollLeft,top:n.scrollTop})
for('function'==typeof t.focus&&t.focus(),t=0;t<e.length;t++)(n=e[t]).element.scrollLeft=n.left,n.element.scrollTop=n.top}}var ir=it&&'documentMode'in document&&11>=document.documentMode,sr=null,cr=null,ur=null,dr=!1
function fr(e,t,n){var r=n.window===n?n.document:9===n.nodeType?n:n.ownerDocument
dr||null==sr||sr!==yt(r)||(r='selectionStart'in(r=sr)&&or(r)?{start:r.selectionStart,end:r.selectionEnd}:{anchorNode:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection()).anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset},ur&&er(ur,r)||(ur=r,0<(r=$u(cr,'onSelect')).length&&(t=new rn('onSelect','select',null,t,n),e.push({event:t,listeners:r}),t.target=sr)))}function pr(e,t){var n={}
return n[e.toLowerCase()]=t.toLowerCase(),n['Webkit'+e]='webkit'+t,n['Moz'+e]='moz'+t,n}var mr={animationend:pr('Animation','AnimationEnd'),animationiteration:pr('Animation','AnimationIteration'),animationstart:pr('Animation','AnimationStart'),transitionrun:pr('Transition','TransitionRun'),transitionstart:pr('Transition','TransitionStart'),transitioncancel:pr('Transition','TransitionCancel'),transitionend:pr('Transition','TransitionEnd')},hr={},vr={}
function gr(e){if(hr[e])return hr[e]
if(!mr[e])return e
var t,n=mr[e]
for(t in n)if(n.hasOwnProperty(t)&&t in vr)return hr[e]=n[t]
return e}it&&(vr=document.createElement('div').style,'AnimationEvent'in window||(delete mr.animationend.animation,delete mr.animationiteration.animation,delete mr.animationstart.animation),'TransitionEvent'in window||delete mr.transitionend.transition)
var yr=gr('animationend'),br=gr('animationiteration'),wr=gr('animationstart'),xr=gr('transitionrun'),Cr=gr('transitionstart'),Sr=gr('transitioncancel'),Er=gr('transitionend'),kr=new Map,Nr='abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll scrollEnd toggle touchMove waiting wheel'.split(' ')
function Rr(e,t){kr.set(e,t),ot(t,[e])}var Pr=[],Tr=0,Mr=0
function _r(){for(var e=Tr,t=Mr=Tr=0;t<e;){var n=Pr[t]
Pr[t++]=null
var r=Pr[t]
Pr[t++]=null
var a=Pr[t]
Pr[t++]=null
var o=Pr[t]
if(Pr[t++]=null,null!==r&&null!==a){var l=r.pending
null===l?a.next=a:(a.next=l.next,l.next=a),r.pending=a}0!==o&&Ir(n,a,o)}}function Lr(e,t,n,r){Pr[Tr++]=e,Pr[Tr++]=t,Pr[Tr++]=n,Pr[Tr++]=r,Mr|=r,e.lanes|=r,null!==(e=e.alternate)&&(e.lanes|=r)}function Dr(e,t,n,r){return Lr(e,t,n,r),Ar(e)}function jr(e,t){return Lr(e,null,null,t),Ar(e)}function Ir(e,t,n){e.lanes|=n
var r=e.alternate
null!==r&&(r.lanes|=n)
for(var a=!1,o=e.return;null!==o;)o.childLanes|=n,null!==(r=o.alternate)&&(r.childLanes|=n),22===o.tag&&(null===(e=o.stateNode)||1&e._visibility||(a=!0)),e=o,o=o.return
a&&null!==t&&3===e.tag&&(o=e.stateNode,a=31-ke(n),null===(e=(o=o.hiddenUpdates)[a])?o[a]=[t]:e.push(t),t.lane=536870912|n)}function Ar(e){if(50<Dc)throw Dc=0,jc=null,Error(r(185))
for(var t=e.return;null!==t;)t=(e=t).return
return 3===e.tag?e.stateNode:null}var Or={},zr=new WeakMap
function Fr(e,t){if('object'==typeof e&&null!==e){var n=zr.get(e)
return void 0!==n?n:(t={value:e,source:t,stack:$(t)},zr.set(e,t),t)}return{value:e,source:t,stack:$(t)}}var Br=[],$r=0,Hr=null,Vr=0,Wr=[],Ur=0,Kr=null,Gr=1,qr=''
function Yr(e,t){Br[$r++]=Vr,Br[$r++]=Hr,Hr=e,Vr=t}function Xr(e,t,n){Wr[Ur++]=Gr,Wr[Ur++]=qr,Wr[Ur++]=Kr,Kr=e
var r=Gr
e=qr
var a=32-ke(r)-1
r&=~(1<<a),n+=1
var o=32-ke(t)+a
if(30<o){var l=a-a%5
o=(r&(1<<l)-1).toString(32),r>>=l,a-=l,Gr=1<<32-ke(t)+a|n<<a|r,qr=o+e}else Gr=1<<o|n<<a|r,qr=e}function Qr(e){null!==e.return&&(Yr(e,1),Xr(e,1,0))}function Zr(e){for(;e===Hr;)Hr=Br[--$r],Br[$r]=null,Vr=Br[--$r],Br[$r]=null
for(;e===Kr;)Kr=Wr[--Ur],Wr[Ur]=null,qr=Wr[--Ur],Wr[Ur]=null,Gr=Wr[--Ur],Wr[Ur]=null}var Jr=null,ea=null,ta=!1,na=null,ra=!1,aa=Error(r(519))
function oa(e){throw ua(Fr(Error(r(418,'')),e)),aa}function la(e){var t=e.stateNode,n=e.type,r=e.memoizedProps
switch(t[Ve]=e,t[We]=r,n){case'dialog':ju('cancel',t),ju('close',t)
break
case'iframe':case'object':case'embed':ju('load',t)
break
case'video':case'audio':for(n=0;n<_u.length;n++)ju(_u[n],t)
break
case'source':ju('error',t)
break
case'img':case'image':case'link':ju('error',t),ju('load',t)
break
case'details':ju('toggle',t)
break
case'input':ju('invalid',t),Ct(t,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0),vt(t)
break
case'select':ju('invalid',t)
break
case'textarea':ju('invalid',t),Nt(t,r.value,r.defaultValue,r.children),vt(t)}'string'!=typeof(n=r.children)&&'number'!=typeof n&&'bigint'!=typeof n||t.textContent===''+n||!0===r.suppressHydrationWarning||Gu(t.textContent,n)?(null!=r.popover&&(ju('beforetoggle',t),ju('toggle',t)),null!=r.onScroll&&ju('scroll',t),null!=r.onScrollEnd&&ju('scrollend',t),null!=r.onClick&&(t.onclick=qu),t=!0):t=!1,t||oa(e)}function ia(e){for(Jr=e.return;Jr;)switch(Jr.tag){case 3:case 27:return void(ra=!0)
case 5:case 13:return void(ra=!1)
default:Jr=Jr.return}}function sa(e){if(e!==Jr)return!1
if(!ta)return ia(e),ta=!0,!1
var t,n=!1
if((t=3!==e.tag&&27!==e.tag)&&((t=5===e.tag)&&(t=!('form'!==(t=e.type)&&'button'!==t)||rd(e.type,e.memoizedProps)),t=!t),t&&(n=!0),n&&ea&&oa(e),ia(e),13===e.tag){if(!(e=null!==(e=e.memoizedState)?e.dehydrated:null))throw Error(r(317))
e:{for(e=e.nextSibling,n=0;e;){if(8===e.nodeType)if('/$'===(t=e.data)){if(0===n){ea=fd(e.nextSibling)
break e}n--}else'$'!==t&&'$!'!==t&&'$?'!==t||n++
e=e.nextSibling}ea=null}}else ea=Jr?fd(e.stateNode.nextSibling):null
return!0}function ca(){ea=Jr=null,ta=!1}function ua(e){null===na?na=[e]:na.push(e)}var da=Error(r(460)),fa=Error(r(474)),pa={then:function(){}}
function ma(e){return'fulfilled'===(e=e.status)||'rejected'===e}function ha(){}function va(e,t,n){switch(void 0===(n=e[n])?e.push(t):n!==t&&(t.then(ha,ha),t=n),t.status){case'fulfilled':return t.value
case'rejected':if((e=t.reason)===da)throw Error(r(483))
throw e
default:if('string'==typeof t.status)t.then(ha,ha)
else{if(null!==(e=lc)&&100<e.shellSuspendCounter)throw Error(r(482));(e=t).status='pending',e.then((function(e){if('pending'===t.status){var n=t
n.status='fulfilled',n.value=e}}),(function(e){if('pending'===t.status){var n=t
n.status='rejected',n.reason=e}}))}switch(t.status){case'fulfilled':return t.value
case'rejected':if((e=t.reason)===da)throw Error(r(483))
throw e}throw ga=t,da}}var ga=null
function ya(){if(null===ga)throw Error(r(459))
var e=ga
return ga=null,e}var ba=null,wa=0
function xa(e){var t=wa
return wa+=1,null===ba&&(ba=[]),va(ba,e,t)}function Ca(e,t){t=t.props.ref,e.ref=void 0!==t?t:null}function Sa(e,t){if(t.$$typeof===o)throw Error(r(525))
throw e=Object.prototype.toString.call(t),Error(r(31,'[object Object]'===e?'object with keys {'+Object.keys(t).join(', ')+'}':e))}function Ea(e){return(0,e._init)(e._payload)}function ka(e){function t(t,n){if(e){var r=t.deletions
null===r?(t.deletions=[n],t.flags|=16):r.push(n)}}function n(n,r){if(!e)return null
for(;null!==r;)t(n,r),r=r.sibling
return null}function a(e){for(var t=new Map;null!==e;)null!==e.key?t.set(e.key,e):t.set(e.index,e),e=e.sibling
return t}function o(e,t){return(e=Hs(e,t)).index=0,e.sibling=null,e}function c(t,n,r){return t.index=r,e?null!==(r=t.alternate)?(r=r.index)<n?(t.flags|=33554434,n):r:(t.flags|=33554434,n):(t.flags|=1048576,n)}function u(t){return e&&null===t.alternate&&(t.flags|=33554434),t}function d(e,t,n,r){return null===t||6!==t.tag?((t=Gs(n,e.mode,r)).return=e,t):((t=o(t,n)).return=e,t)}function f(e,t,n,r){var a=n.type
return a===s?h(e,t,n.props.children,r,n.key):null!==t&&(t.elementType===a||'object'==typeof a&&null!==a&&a.$$typeof===C&&Ea(a)===t.type)?(Ca(t=o(t,n.props),n),t.return=e,t):(Ca(t=Ws(n.type,n.key,n.props,null,e.mode,r),n),t.return=e,t)}function p(e,t,n,r){return null===t||4!==t.tag||t.stateNode.containerInfo!==n.containerInfo||t.stateNode.implementation!==n.implementation?((t=qs(n,e.mode,r)).return=e,t):((t=o(t,n.children||[])).return=e,t)}function h(e,t,n,r,a){return null===t||7!==t.tag?((t=Us(n,e.mode,r,a)).return=e,t):((t=o(t,n)).return=e,t)}function v(e,t,n){if('string'==typeof t&&''!==t||'number'==typeof t||'bigint'==typeof t)return(t=Gs(''+t,e.mode,n)).return=e,t
if('object'==typeof t&&null!==t){switch(t.$$typeof){case l:return Ca(n=Ws(t.type,t.key,t.props,null,e.mode,n),t),n.return=e,n
case i:return(t=qs(t,e.mode,n)).return=e,t
case C:return v(e,t=(0,t._init)(t._payload),n)}if(K(t)||M(t))return(t=Us(t,e.mode,n,null)).return=e,t
if('function'==typeof t.then)return v(e,xa(t),n)
if(t.$$typeof===m)return v(e,_i(e,t),n)
Sa(e,t)}return null}function g(e,t,n,r){var a=null!==t?t.key:null
if('string'==typeof n&&''!==n||'number'==typeof n||'bigint'==typeof n)return null!==a?null:d(e,t,''+n,r)
if('object'==typeof n&&null!==n){switch(n.$$typeof){case l:return n.key===a?f(e,t,n,r):null
case i:return n.key===a?p(e,t,n,r):null
case C:return g(e,t,n=(a=n._init)(n._payload),r)}if(K(n)||M(n))return null!==a?null:h(e,t,n,r,null)
if('function'==typeof n.then)return g(e,t,xa(n),r)
if(n.$$typeof===m)return g(e,t,_i(e,n),r)
Sa(e,n)}return null}function y(e,t,n,r,a){if('string'==typeof r&&''!==r||'number'==typeof r||'bigint'==typeof r)return d(t,e=e.get(n)||null,''+r,a)
if('object'==typeof r&&null!==r){switch(r.$$typeof){case l:return f(t,e=e.get(null===r.key?n:r.key)||null,r,a)
case i:return p(t,e=e.get(null===r.key?n:r.key)||null,r,a)
case C:return y(e,t,n,r=(0,r._init)(r._payload),a)}if(K(r)||M(r))return h(t,e=e.get(n)||null,r,a,null)
if('function'==typeof r.then)return y(e,t,n,xa(r),a)
if(r.$$typeof===m)return y(e,t,n,_i(t,r),a)
Sa(t,r)}return null}function b(d,f,p,h){if('object'==typeof p&&null!==p&&p.type===s&&null===p.key&&(p=p.props.children),'object'==typeof p&&null!==p){switch(p.$$typeof){case l:e:{for(var w=p.key;null!==f;){if(f.key===w){if((w=p.type)===s){if(7===f.tag){n(d,f.sibling),(h=o(f,p.props.children)).return=d,d=h
break e}}else if(f.elementType===w||'object'==typeof w&&null!==w&&w.$$typeof===C&&Ea(w)===f.type){n(d,f.sibling),Ca(h=o(f,p.props),p),h.return=d,d=h
break e}n(d,f)
break}t(d,f),f=f.sibling}p.type===s?((h=Us(p.props.children,d.mode,h,p.key)).return=d,d=h):(Ca(h=Ws(p.type,p.key,p.props,null,d.mode,h),p),h.return=d,d=h)}return u(d)
case i:e:{for(w=p.key;null!==f;){if(f.key===w){if(4===f.tag&&f.stateNode.containerInfo===p.containerInfo&&f.stateNode.implementation===p.implementation){n(d,f.sibling),(h=o(f,p.children||[])).return=d,d=h
break e}n(d,f)
break}t(d,f),f=f.sibling}(h=qs(p,d.mode,h)).return=d,d=h}return u(d)
case C:return b(d,f,p=(w=p._init)(p._payload),h)}if(K(p))return function(r,o,l,i){for(var s=null,u=null,d=o,f=o=0,p=null;null!==d&&f<l.length;f++){d.index>f?(p=d,d=null):p=d.sibling
var m=g(r,d,l[f],i)
if(null===m){null===d&&(d=p)
break}e&&d&&null===m.alternate&&t(r,d),o=c(m,o,f),null===u?s=m:u.sibling=m,u=m,d=p}if(f===l.length)return n(r,d),ta&&Yr(r,f),s
if(null===d){for(;f<l.length;f++)null!==(d=v(r,l[f],i))&&(o=c(d,o,f),null===u?s=d:u.sibling=d,u=d)
return ta&&Yr(r,f),s}for(d=a(d);f<l.length;f++)null!==(p=y(d,r,f,l[f],i))&&(e&&null!==p.alternate&&d.delete(null===p.key?f:p.key),o=c(p,o,f),null===u?s=p:u.sibling=p,u=p)
return e&&d.forEach((function(e){return t(r,e)})),ta&&Yr(r,f),s}(d,f,p,h)
if(M(p)){if('function'!=typeof(w=M(p)))throw Error(r(150))
return function(o,l,i,s){if(null==i)throw Error(r(151))
for(var u=null,d=null,f=l,p=l=0,m=null,h=i.next();null!==f&&!h.done;p++,h=i.next()){f.index>p?(m=f,f=null):m=f.sibling
var b=g(o,f,h.value,s)
if(null===b){null===f&&(f=m)
break}e&&f&&null===b.alternate&&t(o,f),l=c(b,l,p),null===d?u=b:d.sibling=b,d=b,f=m}if(h.done)return n(o,f),ta&&Yr(o,p),u
if(null===f){for(;!h.done;p++,h=i.next())null!==(h=v(o,h.value,s))&&(l=c(h,l,p),null===d?u=h:d.sibling=h,d=h)
return ta&&Yr(o,p),u}for(f=a(f);!h.done;p++,h=i.next())null!==(h=y(f,o,p,h.value,s))&&(e&&null!==h.alternate&&f.delete(null===h.key?p:h.key),l=c(h,l,p),null===d?u=h:d.sibling=h,d=h)
return e&&f.forEach((function(e){return t(o,e)})),ta&&Yr(o,p),u}(d,f,p=w.call(p),h)}if('function'==typeof p.then)return b(d,f,xa(p),h)
if(p.$$typeof===m)return b(d,f,_i(d,p),h)
Sa(d,p)}return'string'==typeof p&&''!==p||'number'==typeof p||'bigint'==typeof p?(p=''+p,null!==f&&6===f.tag?(n(d,f.sibling),(h=o(f,p)).return=d,d=h):(n(d,f),(h=Gs(p,d.mode,h)).return=d,d=h),u(d)):n(d,f)}return function(e,t,n,r){try{wa=0
var a=b(e,t,n,r)
return ba=null,a}catch(l){if(l===da)throw l
var o=Bs(29,l,null,e.mode)
return o.lanes=r,o.return=e,o}}}var Na=ka(!0),Ra=ka(!1),Pa=Q(null),Ta=Q(0)
function Ma(e,t){J(Ta,e=mc),J(Pa,t),mc=e|t.baseLanes}function _a(){J(Ta,mc),J(Pa,Pa.current)}function La(){mc=Ta.current,Z(Pa),Z(Ta)}var Da=Q(null),ja=null
function Ia(e){var t=e.alternate
J(Fa,1&Fa.current),J(Da,e),null===ja&&(null===t||null!==Pa.current||null!==t.memoizedState)&&(ja=e)}function Aa(e){if(22===e.tag){if(J(Fa,Fa.current),J(Da,e),null===ja){var t=e.alternate
null!==t&&null!==t.memoizedState&&(ja=e)}}else Oa()}function Oa(){J(Fa,Fa.current),J(Da,Da.current)}function za(e){Z(Da),ja===e&&(ja=null),Z(Fa)}var Fa=Q(0)
function Ba(e){for(var t=e;null!==t;){if(13===t.tag){var n=t.memoizedState
if(null!==n&&(null===(n=n.dehydrated)||'$?'===n.data||'$!'===n.data))return t}else if(19===t.tag&&void 0!==t.memoizedProps.revealOrder){if(128&t.flags)return t}else if(null!==t.child){t.child.return=t,t=t.child
continue}if(t===e)break
for(;null===t.sibling;){if(null===t.return||t.return===e)return null
t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var $a='undefined'!=typeof AbortController?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(t,n){e.push(n)}}
this.abort=function(){t.aborted=!0,e.forEach((function(e){return e()}))}},Ha=e.unstable_scheduleCallback,Va=e.unstable_NormalPriority,Wa={$$typeof:m,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0}
function Ua(){return{controller:new $a,data:new Map,refCount:0}}function Ka(e){e.refCount--,0===e.refCount&&Ha(Va,(function(){e.controller.abort()}))}var Ga=null,qa=0,Ya=0,Xa=null
function Qa(){if(0==--qa&&null!==Ga){null!==Xa&&(Xa.status='fulfilled')
var e=Ga
Ga=null,Ya=0,Xa=null
for(var t=0;t<e.length;t++)(0,e[t])()}}var Za=I.S
I.S=function(e,t){'object'==typeof t&&null!==t&&'function'==typeof t.then&&function(e,t){if(null===Ga){var n=Ga=[]
qa=0,Ya=Nu(),Xa={status:'pending',value:void 0,then:function(e){n.push(e)}}}qa++,t.then(Qa,Qa)}(0,t),null!==Za&&Za(e,t)}
var Ja=Q(null)
function eo(){var e=Ja.current
return null!==e?e:lc.pooledCache}function to(e,t){J(Ja,null===t?Ja.current:t.pool)}function no(){var e=eo()
return null===e?null:{parent:Wa._currentValue,pool:e}}var ro=0,ao=null,oo=null,lo=null,io=!1,so=!1,co=!1,uo=0,fo=0,po=null,mo=0
function ho(){throw Error(r(321))}function vo(e,t){if(null===t)return!1
for(var n=0;n<t.length&&n<e.length;n++)if(!Jn(e[n],t[n]))return!1
return!0}function go(e,t,n,r,a,o){return ro=o,ao=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,I.H=null===e||null===e.memoizedState?_l:Ll,co=!1,o=n(r,a),co=!1,so&&(o=bo(t,n,r,a)),yo(e),o}function yo(e){I.H=Ml
var t=null!==oo&&null!==oo.next
if(ro=0,lo=oo=ao=null,io=!1,fo=0,po=null,t)throw Error(r(300))
null===e||Yl||null!==(e=e.dependencies)&&Pi(e)&&(Yl=!0)}function bo(e,t,n,a){ao=e
var o=0
do{if(so&&(po=null),fo=0,so=!1,25<=o)throw Error(r(301))
if(o+=1,lo=oo=null,null!=e.updateQueue){var l=e.updateQueue
l.lastEffect=null,l.events=null,l.stores=null,null!=l.memoCache&&(l.memoCache.index=0)}I.H=Dl,l=t(n,a)}while(so)
return l}function wo(){var e=I.H,t=e.useState()[0]
return t='function'==typeof t.then?No(t):t,e=e.useState()[0],(null!==oo?oo.memoizedState:null)!==e&&(ao.flags|=1024),t}function xo(){var e=0!==uo
return uo=0,e}function Co(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function So(e){if(io){for(e=e.memoizedState;null!==e;){var t=e.queue
null!==t&&(t.pending=null),e=e.next}io=!1}ro=0,lo=oo=ao=null,so=!1,fo=uo=0,po=null}function Eo(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null}
return null===lo?ao.memoizedState=lo=e:lo=lo.next=e,lo}function ko(){if(null===oo){var e=ao.alternate
e=null!==e?e.memoizedState:null}else e=oo.next
var t=null===lo?ao.memoizedState:lo.next
if(null!==t)lo=t,oo=e
else{if(null===e){if(null===ao.alternate)throw Error(r(467))
throw Error(r(310))}e={memoizedState:(oo=e).memoizedState,baseState:oo.baseState,baseQueue:oo.baseQueue,queue:oo.queue,next:null},null===lo?ao.memoizedState=lo=e:lo=lo.next=e}return lo}function No(e){var t=fo
return fo+=1,null===po&&(po=[]),e=va(po,e,t),t=ao,null===(null===lo?t.memoizedState:lo.next)&&(t=t.alternate,I.H=null===t||null===t.memoizedState?_l:Ll),e}function Ro(e){if(null!==e&&'object'==typeof e){if('function'==typeof e.then)return No(e)
if(e.$$typeof===m)return Mi(e)}throw Error(r(438,String(e)))}function Po(e){var t=null,n=ao.updateQueue
if(null!==n&&(t=n.memoCache),null==t){var r=ao.alternate
null!==r&&null!==(r=r.updateQueue)&&null!=(r=r.memoCache)&&(t={data:r.data.map((function(e){return e.slice()})),index:0})}if(null==t&&(t={data:[],index:0}),null===n&&(n={lastEffect:null,events:null,stores:null,memoCache:null},ao.updateQueue=n),n.memoCache=t,void 0===(n=t.data[t.index]))for(n=t.data[t.index]=Array(e),r=0;r<e;r++)n[r]=R
return t.index++,n}function To(e,t){return'function'==typeof t?t(e):t}function Mo(e){return _o(ko(),oo,e)}function _o(e,t,n){var a=e.queue
if(null===a)throw Error(r(311))
a.lastRenderedReducer=n
var o=e.baseQueue,l=a.pending
if(null!==l){if(null!==o){var i=o.next
o.next=l.next,l.next=i}t.baseQueue=o=l,a.pending=null}if(l=e.baseState,null===o)e.memoizedState=l
else{var s=i=null,c=null,u=t=o.next,d=!1
do{var f=-536870913&u.lane
if(f!==u.lane?(sc&f)===f:(ro&f)===f){var p=u.revertLane
if(0===p)null!==c&&(c=c.next={lane:0,revertLane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),f===Ya&&(d=!0)
else{if((ro&p)===p){u=u.next,p===Ya&&(d=!0)
continue}f={lane:0,revertLane:u.revertLane,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},null===c?(s=c=f,i=l):c=c.next=f,ao.lanes|=p,vc|=p}f=u.action,co&&n(l,f),l=u.hasEagerState?u.eagerState:n(l,f)}else p={lane:f,revertLane:u.revertLane,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},null===c?(s=c=p,i=l):c=c.next=p,ao.lanes|=f,vc|=f
u=u.next}while(null!==u&&u!==t)
if(null===c?i=l:c.next=s,!Jn(l,e.memoizedState)&&(Yl=!0,d&&null!==(n=Xa)))throw n
e.memoizedState=l,e.baseState=i,e.baseQueue=c,a.lastRenderedState=l}return null===o&&(a.lanes=0),[e.memoizedState,a.dispatch]}function Lo(e){var t=ko(),n=t.queue
if(null===n)throw Error(r(311))
n.lastRenderedReducer=e
var a=n.dispatch,o=n.pending,l=t.memoizedState
if(null!==o){n.pending=null
var i=o=o.next
do{l=e(l,i.action),i=i.next}while(i!==o)
Jn(l,t.memoizedState)||(Yl=!0),t.memoizedState=l,null===t.baseQueue&&(t.baseState=l),n.lastRenderedState=l}return[l,a]}function Do(e,t,n){var a=ao,o=ko(),l=ta
if(l){if(void 0===n)throw Error(r(407))
n=n()}else n=t()
var i=!Jn((oo||o).memoizedState,n)
if(i&&(o.memoizedState=n,Yl=!0),o=o.queue,al(Ao.bind(null,a,o,e),[e]),o.getSnapshot!==t||i||null!==lo&&1&lo.memoizedState.tag){if(a.flags|=2048,Jo(9,Io.bind(null,a,o,n,t),{destroy:void 0},null),null===lc)throw Error(r(349))
l||60&ro||jo(a,t,n)}return n}function jo(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},null===(t=ao.updateQueue)?(t={lastEffect:null,events:null,stores:null,memoCache:null},ao.updateQueue=t,t.stores=[e]):null===(n=t.stores)?t.stores=[e]:n.push(e)}function Io(e,t,n,r){t.value=n,t.getSnapshot=r,Oo(t)&&zo(e)}function Ao(e,t,n){return n((function(){Oo(t)&&zo(e)}))}function Oo(e){var t=e.getSnapshot
e=e.value
try{var n=t()
return!Jn(e,n)}catch(r){return!0}}function zo(e){var t=jr(e,2)
null!==t&&Oc(t,0,2)}function Fo(e){var t=Eo()
if('function'==typeof e){var n=e
if(e=n(),co){Ee(!0)
try{n()}finally{Ee(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:To,lastRenderedState:e},t}function Bo(e,t,n,r){return e.baseState=n,_o(e,oo,'function'==typeof r?r:To)}function $o(e,t,n,a,o){if(Rl(e))throw Error(r(485))
if(null!==(e=t.action)){var l={payload:o,action:e,next:null,isTransition:!0,status:'pending',value:null,reason:null,listeners:[],then:function(e){l.listeners.push(e)}}
null!==I.T?n(!0):l.isTransition=!1,a(l),null===(n=t.pending)?(l.next=t.pending=l,Ho(t,l)):(l.next=n.next,t.pending=n.next=l)}}function Ho(e,t){var n=t.action,r=t.payload,a=e.state
if(t.isTransition){var o=I.T,l={}
I.T=l
try{var i=n(a,r),s=I.S
null!==s&&s(l,i),Vo(e,t,i)}catch(c){Uo(e,t,c)}finally{I.T=o}}else try{Vo(e,t,o=n(a,r))}catch(u){Uo(e,t,u)}}function Vo(e,t,n){null!==n&&'object'==typeof n&&'function'==typeof n.then?n.then((function(n){Wo(e,t,n)}),(function(n){return Uo(e,t,n)})):Wo(e,t,n)}function Wo(e,t,n){t.status='fulfilled',t.value=n,Ko(t),e.state=n,null!==(t=e.pending)&&((n=t.next)===t?e.pending=null:(n=n.next,t.next=n,Ho(e,n)))}function Uo(e,t,n){var r=e.pending
if(e.pending=null,null!==r){r=r.next
do{t.status='rejected',t.reason=n,Ko(t),t=t.next}while(t!==r)}e.action=null}function Ko(e){e=e.listeners
for(var t=0;t<e.length;t++)(0,e[t])()}function Go(e,t){return t}function qo(e,t){if(ta){var n=lc.formState
if(null!==n){e:{var r=ao
if(ta){if(ea){t:{for(var a=ea,o=ra;8!==a.nodeType;){if(!o){a=null
break t}if(null===(a=fd(a.nextSibling))){a=null
break t}}a='F!'===(o=a.data)||'F'===o?a:null}if(a){ea=fd(a.nextSibling),r='F!'===a.data
break e}}oa(r)}r=!1}r&&(t=n[0])}}return(n=Eo()).memoizedState=n.baseState=t,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Go,lastRenderedState:t},n.queue=r,n=El.bind(null,ao,r),r.dispatch=n,r=Fo(!1),o=Nl.bind(null,ao,!1,r.queue),a={state:t,dispatch:null,action:e,pending:null},(r=Eo()).queue=a,n=$o.bind(null,ao,a,o,n),a.dispatch=n,r.memoizedState=e,[t,n,!1]}function Yo(e){return Xo(ko(),oo,e)}function Xo(e,t,n){t=_o(e,t,Go)[0],e=Mo(To)[0],t='object'==typeof t&&null!==t&&'function'==typeof t.then?No(t):t
var r=ko(),a=r.queue,o=a.dispatch
return n!==r.memoizedState&&(ao.flags|=2048,Jo(9,Qo.bind(null,a,n),{destroy:void 0},null)),[t,o,e]}function Qo(e,t){e.action=t}function Zo(e){var t=ko(),n=oo
if(null!==n)return Xo(t,n,e)
ko(),t=t.memoizedState
var r=(n=ko()).queue.dispatch
return n.memoizedState=e,[t,r,!1]}function Jo(e,t,n,r){return e={tag:e,create:t,inst:n,deps:r,next:null},null===(t=ao.updateQueue)&&(t={lastEffect:null,events:null,stores:null,memoCache:null},ao.updateQueue=t),null===(n=t.lastEffect)?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e),e}function el(){return ko().memoizedState}function tl(e,t,n,r){var a=Eo()
ao.flags|=e,a.memoizedState=Jo(1|t,n,{destroy:void 0},void 0===r?null:r)}function nl(e,t,n,r){var a=ko()
r=void 0===r?null:r
var o=a.memoizedState.inst
null!==oo&&null!==r&&vo(r,oo.memoizedState.deps)?a.memoizedState=Jo(t,n,o,r):(ao.flags|=e,a.memoizedState=Jo(1|t,n,o,r))}function rl(e,t){tl(8390656,8,e,t)}function al(e,t){nl(2048,8,e,t)}function ol(e,t){return nl(4,2,e,t)}function ll(e,t){return nl(4,4,e,t)}function il(e,t){if('function'==typeof t){e=e()
var n=t(e)
return function(){'function'==typeof n?n():t(null)}}if(null!=t)return e=e(),t.current=e,function(){t.current=null}}function sl(e,t,n){n=null!=n?n.concat([e]):null,nl(4,4,il.bind(null,t,e),n)}function cl(){}function ul(e,t){var n=ko()
t=void 0===t?null:t
var r=n.memoizedState
return null!==t&&vo(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function dl(e,t){var n=ko()
t=void 0===t?null:t
var r=n.memoizedState
if(null!==t&&vo(t,r[1]))return r[0]
if(r=e(),co){Ee(!0)
try{e()}finally{Ee(!1)}}return n.memoizedState=[r,t],r}function fl(e,t,n){return void 0===n||1073741824&ro?e.memoizedState=t:(e.memoizedState=n,e=Ac(),ao.lanes|=e,vc|=e,n)}function pl(e,t,n,r){return Jn(n,t)?n:null!==Pa.current?(e=fl(e,n,r),Jn(e,t)||(Yl=!0),e):42&ro?(e=Ac(),ao.lanes|=e,vc|=e,t):(Yl=!0,e.memoizedState=n)}function ml(e,t,n,r,a){var o=G.p
G.p=0!==o&&8>o?o:8
var l,i,s,c=I.T,u={}
I.T=u,Nl(e,!1,t,n)
try{var d=a(),f=I.S
null!==f&&f(u,d),null!==d&&'object'==typeof d&&'function'==typeof d.then?kl(e,t,(l=r,i=[],s={status:'pending',value:null,reason:null,then:function(e){i.push(e)}},d.then((function(){s.status='fulfilled',s.value=l
for(var e=0;e<i.length;e++)(0,i[e])(l)}),(function(e){for(s.status='rejected',s.reason=e,e=0;e<i.length;e++)(0,i[e])(void 0)})),s),Ic()):kl(e,t,r,Ic())}catch(p){kl(e,t,{then:function(){},status:'rejected',reason:p},Ic())}finally{G.p=o,I.T=c}}function hl(){}function vl(e,t,n,a){if(5!==e.tag)throw Error(r(476))
var o=gl(e).queue
ml(e,o,t,q,null===n?hl:function(){return yl(e),n(a)})}function gl(e){var t=e.memoizedState
if(null!==t)return t
var n={}
return(t={memoizedState:q,baseState:q,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:To,lastRenderedState:q},next:null}).next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:To,lastRenderedState:n},next:null},e.memoizedState=t,null!==(e=e.alternate)&&(e.memoizedState=t),t}function yl(e){kl(e,gl(e).next.queue,{},Ic())}function bl(){return Mi($d)}function wl(){return ko().memoizedState}function xl(){return ko().memoizedState}function Cl(e){for(var t=e.return;null!==t;){switch(t.tag){case 24:case 3:var n=Ic(),r=Oi(t,e=Ai(n),n)
return null!==r&&(Oc(r,0,n),zi(r,t,n)),t={cache:Ua()},void(e.payload=t)}t=t.return}}function Sl(e,t,n){var r=Ic()
n={lane:r,revertLane:0,action:n,hasEagerState:!1,eagerState:null,next:null},Rl(e)?Pl(t,n):null!==(n=Dr(e,t,n,r))&&(Oc(n,0,r),Tl(n,t,r))}function El(e,t,n){kl(e,t,n,Ic())}function kl(e,t,n,r){var a={lane:r,revertLane:0,action:n,hasEagerState:!1,eagerState:null,next:null}
if(Rl(e))Pl(t,a)
else{var o=e.alternate
if(0===e.lanes&&(null===o||0===o.lanes)&&null!==(o=t.lastRenderedReducer))try{var l=t.lastRenderedState,i=o(l,n)
if(a.hasEagerState=!0,a.eagerState=i,Jn(i,l))return Lr(e,t,a,0),null===lc&&_r(),!1}catch(s){}if(null!==(n=Dr(e,t,a,r)))return Oc(n,0,r),Tl(n,t,r),!0}return!1}function Nl(e,t,n,a){if(a={lane:2,revertLane:Nu(),action:a,hasEagerState:!1,eagerState:null,next:null},Rl(e)){if(t)throw Error(r(479))}else null!==(t=Dr(e,n,a,2))&&Oc(t,0,2)}function Rl(e){var t=e.alternate
return e===ao||null!==t&&t===ao}function Pl(e,t){so=io=!0
var n=e.pending
null===n?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Tl(e,t,n){if(4194176&n){var r=t.lanes
n|=r&=e.pendingLanes,t.lanes=n,Fe(e,n)}}var Ml={readContext:Mi,use:Ro,useCallback:ho,useContext:ho,useEffect:ho,useImperativeHandle:ho,useLayoutEffect:ho,useInsertionEffect:ho,useMemo:ho,useReducer:ho,useRef:ho,useState:ho,useDebugValue:ho,useDeferredValue:ho,useTransition:ho,useSyncExternalStore:ho,useId:ho}
Ml.useCacheRefresh=ho,Ml.useMemoCache=ho,Ml.useHostTransitionStatus=ho,Ml.useFormState=ho,Ml.useActionState=ho,Ml.useOptimistic=ho
var _l={readContext:Mi,use:Ro,useCallback:function(e,t){return Eo().memoizedState=[e,void 0===t?null:t],e},useContext:Mi,useEffect:rl,useImperativeHandle:function(e,t,n){n=null!=n?n.concat([e]):null,tl(4194308,4,il.bind(null,t,e),n)},useLayoutEffect:function(e,t){return tl(4194308,4,e,t)},useInsertionEffect:function(e,t){tl(4,2,e,t)},useMemo:function(e,t){var n=Eo()
t=void 0===t?null:t
var r=e()
if(co){Ee(!0)
try{e()}finally{Ee(!1)}}return n.memoizedState=[r,t],r},useReducer:function(e,t,n){var r=Eo()
if(void 0!==n){var a=n(t)
if(co){Ee(!0)
try{n(t)}finally{Ee(!1)}}}else a=t
return r.memoizedState=r.baseState=a,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:a},r.queue=e,e=e.dispatch=Sl.bind(null,ao,e),[r.memoizedState,e]},useRef:function(e){return e={current:e},Eo().memoizedState=e},useState:function(e){var t=(e=Fo(e)).queue,n=El.bind(null,ao,t)
return t.dispatch=n,[e.memoizedState,n]},useDebugValue:cl,useDeferredValue:function(e,t){return fl(Eo(),e,t)},useTransition:function(){var e=Fo(!1)
return e=ml.bind(null,ao,e.queue,!0,!1),Eo().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var a=ao,o=Eo()
if(ta){if(void 0===n)throw Error(r(407))
n=n()}else{if(n=t(),null===lc)throw Error(r(349))
60&sc||jo(a,t,n)}o.memoizedState=n
var l={value:n,getSnapshot:t}
return o.queue=l,rl(Ao.bind(null,a,l,e),[e]),a.flags|=2048,Jo(9,Io.bind(null,a,l,n,t),{destroy:void 0},null),n},useId:function(){var e=Eo(),t=lc.identifierPrefix
if(ta){var n=qr
t=':'+t+'R'+(n=(Gr&~(1<<32-ke(Gr)-1)).toString(32)+n),0<(n=uo++)&&(t+='H'+n.toString(32)),t+=':'}else t=':'+t+'r'+(n=mo++).toString(32)+':'
return e.memoizedState=t},useCacheRefresh:function(){return Eo().memoizedState=Cl.bind(null,ao)}}
_l.useMemoCache=Po,_l.useHostTransitionStatus=bl,_l.useFormState=qo,_l.useActionState=qo,_l.useOptimistic=function(e){var t=Eo()
t.memoizedState=t.baseState=e
var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null}
return t.queue=n,t=Nl.bind(null,ao,!0,n),n.dispatch=t,[e,t]}
var Ll={readContext:Mi,use:Ro,useCallback:ul,useContext:Mi,useEffect:al,useImperativeHandle:sl,useInsertionEffect:ol,useLayoutEffect:ll,useMemo:dl,useReducer:Mo,useRef:el,useState:function(){return Mo(To)},useDebugValue:cl,useDeferredValue:function(e,t){return pl(ko(),oo.memoizedState,e,t)},useTransition:function(){var e=Mo(To)[0],t=ko().memoizedState
return['boolean'==typeof e?e:No(e),t]},useSyncExternalStore:Do,useId:wl}
Ll.useCacheRefresh=xl,Ll.useMemoCache=Po,Ll.useHostTransitionStatus=bl,Ll.useFormState=Yo,Ll.useActionState=Yo,Ll.useOptimistic=function(e,t){return Bo(ko(),0,e,t)}
var Dl={readContext:Mi,use:Ro,useCallback:ul,useContext:Mi,useEffect:al,useImperativeHandle:sl,useInsertionEffect:ol,useLayoutEffect:ll,useMemo:dl,useReducer:Lo,useRef:el,useState:function(){return Lo(To)},useDebugValue:cl,useDeferredValue:function(e,t){var n=ko()
return null===oo?fl(n,e,t):pl(n,oo.memoizedState,e,t)},useTransition:function(){var e=Lo(To)[0],t=ko().memoizedState
return['boolean'==typeof e?e:No(e),t]},useSyncExternalStore:Do,useId:wl}
function jl(e,t,n,r){n=null==(n=n(r,t=e.memoizedState))?t:A({},t,n),e.memoizedState=n,0===e.lanes&&(e.updateQueue.baseState=n)}Dl.useCacheRefresh=xl,Dl.useMemoCache=Po,Dl.useHostTransitionStatus=bl,Dl.useFormState=Zo,Dl.useActionState=Zo,Dl.useOptimistic=function(e,t){var n=ko()
return null!==oo?Bo(n,0,e,t):(n.baseState=e,[e,n.queue.dispatch])}
var Il={isMounted:function(e){return!!(e=e._reactInternals)&&H(e)===e},enqueueSetState:function(e,t,n){e=e._reactInternals
var r=Ic(),a=Ai(r)
a.payload=t,null!=n&&(a.callback=n),null!==(t=Oi(e,a,r))&&(Oc(t,0,r),zi(t,e,r))},enqueueReplaceState:function(e,t,n){e=e._reactInternals
var r=Ic(),a=Ai(r)
a.tag=1,a.payload=t,null!=n&&(a.callback=n),null!==(t=Oi(e,a,r))&&(Oc(t,0,r),zi(t,e,r))},enqueueForceUpdate:function(e,t){e=e._reactInternals
var n=Ic(),r=Ai(n)
r.tag=2,null!=t&&(r.callback=t),null!==(t=Oi(e,r,n))&&(Oc(t,0,n),zi(t,e,n))}}
function Al(e,t,n,r,a,o,l){return'function'==typeof(e=e.stateNode).shouldComponentUpdate?e.shouldComponentUpdate(r,o,l):!(t.prototype&&t.prototype.isPureReactComponent&&er(n,r)&&er(a,o))}function Ol(e,t,n,r){e=t.state,'function'==typeof t.componentWillReceiveProps&&t.componentWillReceiveProps(n,r),'function'==typeof t.UNSAFE_componentWillReceiveProps&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Il.enqueueReplaceState(t,t.state,null)}function zl(e,t){var n=t
if('ref'in t)for(var r in n={},t)'ref'!==r&&(n[r]=t[r])
if(e=e.defaultProps)for(var a in n===t&&(n=A({},n)),e)void 0===n[a]&&(n[a]=e[a])
return n}var Fl='function'==typeof reportError?reportError:function(e){if('object'==typeof window&&'function'==typeof window.ErrorEvent){var t=new window.ErrorEvent('error',{bubbles:!0,cancelable:!0,message:'object'==typeof e&&null!==e&&'string'==typeof e.message?String(e.message):String(e),error:e})
if(!window.dispatchEvent(t))return}else if('object'==typeof process&&'function'==typeof process.emit)return void process.emit('uncaughtException',e)}
function Bl(e){Fl(e)}function $l(e){}function Hl(e){Fl(e)}function Vl(e,t){try{(0,e.onUncaughtError)(t.value,{componentStack:t.stack})}catch(n){setTimeout((function(){throw n}))}}function Wl(e,t,n){try{(0,e.onCaughtError)(n.value,{componentStack:n.stack,errorBoundary:1===t.tag?t.stateNode:null})}catch(r){setTimeout((function(){throw r}))}}function Ul(e,t,n){return(n=Ai(n)).tag=3,n.payload={element:null},n.callback=function(){Vl(e,t)},n}function Kl(e){return(e=Ai(e)).tag=3,e}function Gl(e,t,n,r){var a=n.type.getDerivedStateFromError
if('function'==typeof a){var o=r.value
e.payload=function(){return a(o)},e.callback=function(){Wl(t,n,r)}}var l=n.stateNode
null!==l&&'function'==typeof l.componentDidCatch&&(e.callback=function(){Wl(t,n,r),'function'!=typeof a&&(null===Rc?Rc=new Set([this]):Rc.add(this))
var e=r.stack
this.componentDidCatch(r.value,{componentStack:null!==e?e:''})})}var ql=Error(r(461)),Yl=!1
function Xl(e,t,n,r){t.child=null===e?Ra(t,null,n,r):Na(t,e.child,n,r)}function Ql(e,t,n,r,a){n=n.render
var o=t.ref
if('ref'in r){var l={}
for(var i in r)'ref'!==i&&(l[i]=r[i])}else l=r
return Ti(t),r=go(e,t,n,l,o,a),i=xo(),null===e||Yl?(ta&&i&&Qr(t),t.flags|=1,Xl(e,t,r,a),t.child):(Co(e,t,a),gi(e,t,a))}function Zl(e,t,n,r,a){if(null===e){var o=n.type
return'function'!=typeof o||$s(o)||void 0!==o.defaultProps||null!==n.compare?((e=Ws(n.type,null,r,t,t.mode,a)).ref=t.ref,e.return=t,t.child=e):(t.tag=15,t.type=o,Jl(e,t,o,r,a))}if(o=e.child,!yi(e,a)){var l=o.memoizedProps
if((n=null!==(n=n.compare)?n:er)(l,r)&&e.ref===t.ref)return gi(e,t,a)}return t.flags|=1,(e=Hs(o,r)).ref=t.ref,e.return=t,t.child=e}function Jl(e,t,n,r,a){if(null!==e){var o=e.memoizedProps
if(er(o,r)&&e.ref===t.ref){if(Yl=!1,t.pendingProps=r=o,!yi(e,a))return t.lanes=e.lanes,gi(e,t,a)
131072&e.flags&&(Yl=!0)}}return ri(e,t,n,r,a)}function ei(e,t,n){var r=t.pendingProps,a=r.children,o=!!(2&t.stateNode._pendingVisibility),l=null!==e?e.memoizedState:null
if(ni(e,t),'hidden'===r.mode||o){if(128&t.flags){if(r=null!==l?l.baseLanes|n:n,null!==e){for(a=t.child=e.child,o=0;null!==a;)o=o|a.lanes|a.childLanes,a=a.sibling
t.childLanes=o&~r}else t.childLanes=0,t.child=null
return ti(e,t,r,n)}if(!(536870912&n))return t.lanes=t.childLanes=536870912,ti(e,t,null!==l?l.baseLanes|n:n,n)
t.memoizedState={baseLanes:0,cachePool:null},null!==e&&to(0,null!==l?l.cachePool:null),null!==l?Ma(t,l):_a(),Aa(t)}else null!==l?(to(0,l.cachePool),Ma(t,l),Oa(),t.memoizedState=null):(null!==e&&to(0,null),_a(),Oa())
return Xl(e,t,a,n),t.child}function ti(e,t,n,r){var a=eo()
return a=null===a?null:{parent:Wa._currentValue,pool:a},t.memoizedState={baseLanes:n,cachePool:a},null!==e&&to(0,null),_a(),Aa(t),null!==e&&Ri(e,t,r,!0),null}function ni(e,t){var n=t.ref
if(null===n)null!==e&&null!==e.ref&&(t.flags|=2097664)
else{if('function'!=typeof n&&'object'!=typeof n)throw Error(r(284))
null!==e&&e.ref===n||(t.flags|=2097664)}}function ri(e,t,n,r,a){return Ti(t),n=go(e,t,n,r,void 0,a),r=xo(),null===e||Yl?(ta&&r&&Qr(t),t.flags|=1,Xl(e,t,n,a),t.child):(Co(e,t,a),gi(e,t,a))}function ai(e,t,n,r,a,o){return Ti(t),t.updateQueue=null,n=bo(t,r,n,a),yo(e),r=xo(),null===e||Yl?(ta&&r&&Qr(t),t.flags|=1,Xl(e,t,n,o),t.child):(Co(e,t,o),gi(e,t,o))}function oi(e,t,n,r,a){if(Ti(t),null===t.stateNode){var o=Or,l=n.contextType
'object'==typeof l&&null!==l&&(o=Mi(l)),o=new n(r,o),t.memoizedState=null!==o.state&&void 0!==o.state?o.state:null,o.updater=Il,t.stateNode=o,o._reactInternals=t,(o=t.stateNode).props=r,o.state=t.memoizedState,o.refs={},ji(t),l=n.contextType,o.context='object'==typeof l&&null!==l?Mi(l):Or,o.state=t.memoizedState,'function'==typeof(l=n.getDerivedStateFromProps)&&(jl(t,n,l,r),o.state=t.memoizedState),'function'==typeof n.getDerivedStateFromProps||'function'==typeof o.getSnapshotBeforeUpdate||'function'!=typeof o.UNSAFE_componentWillMount&&'function'!=typeof o.componentWillMount||(l=o.state,'function'==typeof o.componentWillMount&&o.componentWillMount(),'function'==typeof o.UNSAFE_componentWillMount&&o.UNSAFE_componentWillMount(),l!==o.state&&Il.enqueueReplaceState(o,o.state,null),Hi(t,r,o,a),$i(),o.state=t.memoizedState),'function'==typeof o.componentDidMount&&(t.flags|=4194308),r=!0}else if(null===e){o=t.stateNode
var i=t.memoizedProps,s=zl(n,i)
o.props=s
var c=o.context,u=n.contextType
l=Or,'object'==typeof u&&null!==u&&(l=Mi(u))
var d=n.getDerivedStateFromProps
u='function'==typeof d||'function'==typeof o.getSnapshotBeforeUpdate,i=t.pendingProps!==i,u||'function'!=typeof o.UNSAFE_componentWillReceiveProps&&'function'!=typeof o.componentWillReceiveProps||(i||c!==l)&&Ol(t,o,r,l),Di=!1
var f=t.memoizedState
o.state=f,Hi(t,r,o,a),$i(),c=t.memoizedState,i||f!==c||Di?('function'==typeof d&&(jl(t,n,d,r),c=t.memoizedState),(s=Di||Al(t,n,s,r,f,c,l))?(u||'function'!=typeof o.UNSAFE_componentWillMount&&'function'!=typeof o.componentWillMount||('function'==typeof o.componentWillMount&&o.componentWillMount(),'function'==typeof o.UNSAFE_componentWillMount&&o.UNSAFE_componentWillMount()),'function'==typeof o.componentDidMount&&(t.flags|=4194308)):('function'==typeof o.componentDidMount&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=c),o.props=r,o.state=c,o.context=l,r=s):('function'==typeof o.componentDidMount&&(t.flags|=4194308),r=!1)}else{o=t.stateNode,Ii(e,t),u=zl(n,l=t.memoizedProps),o.props=u,d=t.pendingProps,f=o.context,c=n.contextType,s=Or,'object'==typeof c&&null!==c&&(s=Mi(c)),(c='function'==typeof(i=n.getDerivedStateFromProps)||'function'==typeof o.getSnapshotBeforeUpdate)||'function'!=typeof o.UNSAFE_componentWillReceiveProps&&'function'!=typeof o.componentWillReceiveProps||(l!==d||f!==s)&&Ol(t,o,r,s),Di=!1,f=t.memoizedState,o.state=f,Hi(t,r,o,a),$i()
var p=t.memoizedState
l!==d||f!==p||Di||null!==e&&null!==e.dependencies&&Pi(e.dependencies)?('function'==typeof i&&(jl(t,n,i,r),p=t.memoizedState),(u=Di||Al(t,n,u,r,f,p,s)||null!==e&&null!==e.dependencies&&Pi(e.dependencies))?(c||'function'!=typeof o.UNSAFE_componentWillUpdate&&'function'!=typeof o.componentWillUpdate||('function'==typeof o.componentWillUpdate&&o.componentWillUpdate(r,p,s),'function'==typeof o.UNSAFE_componentWillUpdate&&o.UNSAFE_componentWillUpdate(r,p,s)),'function'==typeof o.componentDidUpdate&&(t.flags|=4),'function'==typeof o.getSnapshotBeforeUpdate&&(t.flags|=1024)):('function'!=typeof o.componentDidUpdate||l===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),'function'!=typeof o.getSnapshotBeforeUpdate||l===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=p),o.props=r,o.state=p,o.context=s,r=u):('function'!=typeof o.componentDidUpdate||l===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),'function'!=typeof o.getSnapshotBeforeUpdate||l===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return o=r,ni(e,t),r=!!(128&t.flags),o||r?(o=t.stateNode,n=r&&'function'!=typeof n.getDerivedStateFromError?null:o.render(),t.flags|=1,null!==e&&r?(t.child=Na(t,e.child,null,a),t.child=Na(t,null,n,a)):Xl(e,t,n,a),t.memoizedState=o.state,e=t.child):e=gi(e,t,a),e}function li(e,t,n,r){return ca(),t.flags|=256,Xl(e,t,n,r),t.child}var ii={dehydrated:null,treeContext:null,retryLane:0}
function si(e){return{baseLanes:e,cachePool:no()}}function ci(e,t,n){return e=null!==e?e.childLanes&~n:0,t&&(e|=bc),e}function ui(e,t,n){var a,o=t.pendingProps,l=!1,i=!!(128&t.flags)
if((a=i)||(a=(null===e||null!==e.memoizedState)&&!!(2&Fa.current)),a&&(l=!0,t.flags&=-129),a=!!(32&t.flags),t.flags&=-33,null===e){if(ta){if(l?Ia(t):Oa(),ta){var s,c=ea
if(s=c){e:{for(s=c,c=ra;8!==s.nodeType;){if(!c){c=null
break e}if(null===(s=fd(s.nextSibling))){c=null
break e}}c=s}null!==c?(t.memoizedState={dehydrated:c,treeContext:null!==Kr?{id:Gr,overflow:qr}:null,retryLane:536870912},(s=Bs(18,null,null,0)).stateNode=c,s.return=t,t.child=s,Jr=t,ea=null,s=!0):s=!1}s||oa(t)}if(null!==(c=t.memoizedState)&&null!==(c=c.dehydrated))return'$!'===c.data?t.lanes=16:t.lanes=536870912,null
za(t)}return c=o.children,o=o.fallback,l?(Oa(),c=fi({mode:'hidden',children:c},l=t.mode),o=Us(o,l,n,null),c.return=t,o.return=t,c.sibling=o,t.child=c,(l=t.child).memoizedState=si(n),l.childLanes=ci(e,a,n),t.memoizedState=ii,o):(Ia(t),di(t,c))}if(null!==(s=e.memoizedState)&&null!==(c=s.dehydrated)){if(i)256&t.flags?(Ia(t),t.flags&=-257,t=pi(e,t,n)):null!==t.memoizedState?(Oa(),t.child=e.child,t.flags|=128,t=null):(Oa(),l=o.fallback,c=t.mode,o=fi({mode:'visible',children:o.children},c),(l=Us(l,c,n,null)).flags|=2,o.return=t,l.return=t,o.sibling=l,t.child=o,Na(t,e.child,null,n),(o=t.child).memoizedState=si(n),o.childLanes=ci(e,a,n),t.memoizedState=ii,t=l)
else if(Ia(t),'$!'===c.data){if(a=c.nextSibling&&c.nextSibling.dataset)var u=a.dgst
a=u,(o=Error(r(419))).stack='',o.digest=a,ua({value:o,source:null,stack:null}),t=pi(e,t,n)}else if(Yl||Ri(e,t,n,!1),a=!!(n&e.childLanes),Yl||a){if(null!==(a=lc)){if(42&(o=n&-n))o=1
else switch(o){case 2:o=1
break
case 8:o=4
break
case 32:o=16
break
case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:o=64
break
case 268435456:o=134217728
break
default:o=0}if(0!==(o=o&(a.suspendedLanes|n)?0:o)&&o!==s.retryLane)throw s.retryLane=o,jr(e,o),Oc(a,0,o),ql}'$?'===c.data||Yc(),t=pi(e,t,n)}else'$?'===c.data?(t.flags|=128,t.child=e.child,t=fu.bind(null,e),c._reactRetry=t,t=null):(e=s.treeContext,ea=fd(c.nextSibling),Jr=t,ta=!0,na=null,ra=!1,null!==e&&(Wr[Ur++]=Gr,Wr[Ur++]=qr,Wr[Ur++]=Kr,Gr=e.id,qr=e.overflow,Kr=t),(t=di(t,o.children)).flags|=4096)
return t}return l?(Oa(),l=o.fallback,c=t.mode,u=(s=e.child).sibling,(o=Hs(s,{mode:'hidden',children:o.children})).subtreeFlags=31457280&s.subtreeFlags,null!==u?l=Hs(u,l):(l=Us(l,c,n,null)).flags|=2,l.return=t,o.return=t,o.sibling=l,t.child=o,o=l,l=t.child,null===(c=e.child.memoizedState)?c=si(n):(null!==(s=c.cachePool)?(u=Wa._currentValue,s=s.parent!==u?{parent:u,pool:u}:s):s=no(),c={baseLanes:c.baseLanes|n,cachePool:s}),l.memoizedState=c,l.childLanes=ci(e,a,n),t.memoizedState=ii,o):(Ia(t),e=(n=e.child).sibling,(n=Hs(n,{mode:'visible',children:o.children})).return=t,n.sibling=null,null!==e&&(null===(a=t.deletions)?(t.deletions=[e],t.flags|=16):a.push(e)),t.child=n,t.memoizedState=null,n)}function di(e,t){return(t=fi({mode:'visible',children:t},e.mode)).return=e,e.child=t}function fi(e,t){return Ks(e,t,0,null)}function pi(e,t,n){return Na(t,e.child,null,n),(e=di(t,t.pendingProps.children)).flags|=2,t.memoizedState=null,e}function mi(e,t,n){e.lanes|=t
var r=e.alternate
null!==r&&(r.lanes|=t),ki(e.return,t,n)}function hi(e,t,n,r,a){var o=e.memoizedState
null===o?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:a}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=a)}function vi(e,t,n){var r=t.pendingProps,a=r.revealOrder,o=r.tail
if(Xl(e,t,r.children,n),2&(r=Fa.current))r=1&r|2,t.flags|=128
else{if(null!==e&&128&e.flags)e:for(e=t.child;null!==e;){if(13===e.tag)null!==e.memoizedState&&mi(e,n,t)
else if(19===e.tag)mi(e,n,t)
else if(null!==e.child){e.child.return=e,e=e.child
continue}if(e===t)break e
for(;null===e.sibling;){if(null===e.return||e.return===t)break e
e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}switch(J(Fa,r),a){case'forwards':for(n=t.child,a=null;null!==n;)null!==(e=n.alternate)&&null===Ba(e)&&(a=n),n=n.sibling
null===(n=a)?(a=t.child,t.child=null):(a=n.sibling,n.sibling=null),hi(t,!1,a,n,o)
break
case'backwards':for(n=null,a=t.child,t.child=null;null!==a;){if(null!==(e=a.alternate)&&null===Ba(e)){t.child=a
break}e=a.sibling,a.sibling=n,n=a,a=e}hi(t,!0,n,null,o)
break
case'together':hi(t,!1,null,null,void 0)
break
default:t.memoizedState=null}return t.child}function gi(e,t,n){if(null!==e&&(t.dependencies=e.dependencies),vc|=t.lanes,!(n&t.childLanes)){if(null===e)return null
if(Ri(e,t,n,!1),!(n&t.childLanes))return null}if(null!==e&&t.child!==e.child)throw Error(r(153))
if(null!==t.child){for(n=Hs(e=t.child,e.pendingProps),t.child=n,n.return=t;null!==e.sibling;)e=e.sibling,(n=n.sibling=Hs(e,e.pendingProps)).return=t
n.sibling=null}return t.child}function yi(e,t){return!!(e.lanes&t)||!(null===(e=e.dependencies)||!Pi(e))}function bi(e,t,n){if(null!==e)if(e.memoizedProps!==t.pendingProps)Yl=!0
else{if(!(yi(e,n)||128&t.flags))return Yl=!1,function(e,t,n){switch(t.tag){case 3:ae(t,t.stateNode.containerInfo),Si(0,Wa,e.memoizedState.cache),ca()
break
case 27:case 5:le(t)
break
case 4:ae(t,t.stateNode.containerInfo)
break
case 10:Si(0,t.type,t.memoizedProps.value)
break
case 13:var r=t.memoizedState
if(null!==r)return null!==r.dehydrated?(Ia(t),t.flags|=128,null):n&t.child.childLanes?ui(e,t,n):(Ia(t),null!==(e=gi(e,t,n))?e.sibling:null)
Ia(t)
break
case 19:var a=!!(128&e.flags)
if((r=!!(n&t.childLanes))||(Ri(e,t,n,!1),r=!!(n&t.childLanes)),a){if(r)return vi(e,t,n)
t.flags|=128}if(null!==(a=t.memoizedState)&&(a.rendering=null,a.tail=null,a.lastEffect=null),J(Fa,Fa.current),r)break
return null
case 22:case 23:return t.lanes=0,ei(e,t,n)
case 24:Si(0,Wa,e.memoizedState.cache)}return gi(e,t,n)}(e,t,n)
Yl=!!(131072&e.flags)}else Yl=!1,ta&&1048576&t.flags&&Xr(t,Vr,t.index)
switch(t.lanes=0,t.tag){case 16:e:{e=t.pendingProps
var a=t.elementType,o=a._init
if(a=o(a._payload),t.type=a,'function'!=typeof a){if(null!=a){if((o=a.$$typeof)===h){t.tag=11,t=Ql(null,t,a,e,n)
break e}if(o===x){t.tag=14,t=Zl(null,t,a,e,n)
break e}}throw t=L(a)||a,Error(r(306,t,''))}$s(a)?(e=zl(a,e),t.tag=1,t=oi(null,t,a,e,n)):(t.tag=0,t=ri(null,t,a,e,n))}return t
case 0:return ri(e,t,t.type,t.pendingProps,n)
case 1:return oi(e,t,a=t.type,o=zl(a,t.pendingProps),n)
case 3:e:{if(ae(t,t.stateNode.containerInfo),null===e)throw Error(r(387))
var l=t.pendingProps
a=(o=t.memoizedState).element,Ii(e,t),Hi(t,l,null,n)
var i=t.memoizedState
if(l=i.cache,Si(0,Wa,l),l!==o.cache&&Ni(t,[Wa],n,!0),$i(),l=i.element,o.isDehydrated){if(o={element:l,isDehydrated:!1,cache:i.cache},t.updateQueue.baseState=o,t.memoizedState=o,256&t.flags){t=li(e,t,l,n)
break e}if(l!==a){ua(a=Fr(Error(r(424)),t)),t=li(e,t,l,n)
break e}for(ea=fd(t.stateNode.containerInfo.firstChild),Jr=t,ta=!0,na=null,ra=!0,n=Ra(t,null,l,n),t.child=n;n;)n.flags=-3&n.flags|4096,n=n.sibling}else{if(ca(),l===a){t=gi(e,t,n)
break e}Xl(e,t,l,n)}t=t.child}return t
case 26:return ni(e,t),null===e?(n=xd(t.type,null,t.pendingProps,null))?t.memoizedState=n:ta||(n=t.type,e=t.pendingProps,(a=ed(ne.current).createElement(n))[Ve]=t,a[We]=e,Qu(a,n,e),nt(a),t.stateNode=a):t.memoizedState=xd(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null
case 27:return le(t),null===e&&ta&&(a=t.stateNode=md(t.type,t.pendingProps,ne.current),Jr=t,ra=!0,ea=fd(a.firstChild)),a=t.pendingProps.children,null!==e||ta?Xl(e,t,a,n):t.child=Na(t,null,a,n),ni(e,t),t.child
case 5:return null===e&&ta&&((o=a=ea)&&(null!==(a=function(e,t,n,r){for(;1===e.nodeType;){var a=n
if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!r&&('INPUT'!==e.nodeName||'hidden'!==e.type))break}else if(r){if(!e[Xe])switch(t){case'meta':if(!e.hasAttribute('itemprop'))break
return e
case'link':if('stylesheet'===(o=e.getAttribute('rel'))&&e.hasAttribute('data-precedence'))break
if(o!==a.rel||e.getAttribute('href')!==(null==a.href?null:a.href)||e.getAttribute('crossorigin')!==(null==a.crossOrigin?null:a.crossOrigin)||e.getAttribute('title')!==(null==a.title?null:a.title))break
return e
case'style':if(e.hasAttribute('data-precedence'))break
return e
case'script':if(((o=e.getAttribute('src'))!==(null==a.src?null:a.src)||e.getAttribute('type')!==(null==a.type?null:a.type)||e.getAttribute('crossorigin')!==(null==a.crossOrigin?null:a.crossOrigin))&&o&&e.hasAttribute('async')&&!e.hasAttribute('itemprop'))break
return e
default:return e}}else{if('input'!==t||'hidden'!==e.type)return e
var o=null==a.name?null:''+a.name
if('hidden'===a.type&&e.getAttribute('name')===o)return e}if(null===(e=fd(e.nextSibling)))break}return null}(a,t.type,t.pendingProps,ra))?(t.stateNode=a,Jr=t,ea=fd(a.firstChild),ra=!1,o=!0):o=!1),o||oa(t)),le(t),o=t.type,l=t.pendingProps,i=null!==e?e.memoizedProps:null,a=l.children,rd(o,l)?a=null:null!==i&&rd(o,i)&&(t.flags|=32),null!==t.memoizedState&&(o=go(e,t,wo,null,null,n),$d._currentValue=o),ni(e,t),Xl(e,t,a,n),t.child
case 6:return null===e&&ta&&((e=n=ea)&&(null!==(n=function(e,t,n){if(''===t)return null
for(;3!==e.nodeType;){if((1!==e.nodeType||'INPUT'!==e.nodeName||'hidden'!==e.type)&&!n)return null
if(null===(e=fd(e.nextSibling)))return null}return e}(n,t.pendingProps,ra))?(t.stateNode=n,Jr=t,ea=null,e=!0):e=!1),e||oa(t)),null
case 13:return ui(e,t,n)
case 4:return ae(t,t.stateNode.containerInfo),a=t.pendingProps,null===e?t.child=Na(t,null,a,n):Xl(e,t,a,n),t.child
case 11:return Ql(e,t,t.type,t.pendingProps,n)
case 7:return Xl(e,t,t.pendingProps,n),t.child
case 8:case 12:return Xl(e,t,t.pendingProps.children,n),t.child
case 10:return a=t.pendingProps,Si(0,t.type,a.value),Xl(e,t,a.children,n),t.child
case 9:return o=t.type._context,a=t.pendingProps.children,Ti(t),a=a(o=Mi(o)),t.flags|=1,Xl(e,t,a,n),t.child
case 14:return Zl(e,t,t.type,t.pendingProps,n)
case 15:return Jl(e,t,t.type,t.pendingProps,n)
case 19:return vi(e,t,n)
case 22:return ei(e,t,n)
case 24:return Ti(t),a=Mi(Wa),null===e?(null===(o=eo())&&(o=lc,l=Ua(),o.pooledCache=l,l.refCount++,null!==l&&(o.pooledCacheLanes|=n),o=l),t.memoizedState={parent:a,cache:o},ji(t),Si(0,Wa,o)):(!!(e.lanes&n)&&(Ii(e,t),Hi(t,null,null,n),$i()),o=e.memoizedState,l=t.memoizedState,o.parent!==a?(o={parent:a,cache:a},t.memoizedState=o,0===t.lanes&&(t.memoizedState=t.updateQueue.baseState=o),Si(0,Wa,a)):(a=l.cache,Si(0,Wa,a),a!==o.cache&&Ni(t,[Wa],n,!0))),Xl(e,t,t.pendingProps.children,n),t.child
case 29:throw t.pendingProps}throw Error(r(156,t.tag))}var wi=Q(null),xi=null,Ci=null
function Si(e,t,n){J(wi,t._currentValue),t._currentValue=n}function Ei(e){e._currentValue=wi.current,Z(wi)}function ki(e,t,n){for(;null!==e;){var r=e.alternate
if((e.childLanes&t)!==t?(e.childLanes|=t,null!==r&&(r.childLanes|=t)):null!==r&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break
e=e.return}}function Ni(e,t,n,a){var o=e.child
for(null!==o&&(o.return=e);null!==o;){var l=o.dependencies
if(null!==l){var i=o.child
l=l.firstContext
e:for(;null!==l;){var s=l
l=o
for(var c=0;c<t.length;c++)if(s.context===t[c]){l.lanes|=n,null!==(s=l.alternate)&&(s.lanes|=n),ki(l.return,n,e),a||(i=null)
break e}l=s.next}}else if(18===o.tag){if(null===(i=o.return))throw Error(r(341))
i.lanes|=n,null!==(l=i.alternate)&&(l.lanes|=n),ki(i,n,e),i=null}else i=o.child
if(null!==i)i.return=o
else for(i=o;null!==i;){if(i===e){i=null
break}if(null!==(o=i.sibling)){o.return=i.return,i=o
break}i=i.return}o=i}}function Ri(e,t,n,a){e=null
for(var o=t,l=!1;null!==o;){if(!l)if(524288&o.flags)l=!0
else if(262144&o.flags)break
if(10===o.tag){var i=o.alternate
if(null===i)throw Error(r(387))
if(null!==(i=i.memoizedProps)){var s=o.type
Jn(o.pendingProps.value,i.value)||(null!==e?e.push(s):e=[s])}}else if(o===re.current){if(null===(i=o.alternate))throw Error(r(387))
i.memoizedState.memoizedState!==o.memoizedState.memoizedState&&(null!==e?e.push($d):e=[$d])}o=o.return}null!==e&&Ni(t,e,n,a),t.flags|=262144}function Pi(e){for(e=e.firstContext;null!==e;){if(!Jn(e.context._currentValue,e.memoizedValue))return!0
e=e.next}return!1}function Ti(e){xi=e,Ci=null,null!==(e=e.dependencies)&&(e.firstContext=null)}function Mi(e){return Li(xi,e)}function _i(e,t){return null===xi&&Ti(e),Li(e,t)}function Li(e,t){var n=t._currentValue
if(t={context:t,memoizedValue:n,next:null},null===Ci){if(null===e)throw Error(r(308))
Ci=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else Ci=Ci.next=t
return n}var Di=!1
function ji(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Ii(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Ai(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Oi(e,t,n){var r=e.updateQueue
if(null===r)return null
if(r=r.shared,2&oc){var a=r.pending
return null===a?t.next=t:(t.next=a.next,a.next=t),r.pending=t,t=Ar(e),Ir(e,null,n),t}return Lr(e,r,t,n),Ar(e)}function zi(e,t,n){if(null!==(t=t.updateQueue)&&(t=t.shared,4194176&n)){var r=t.lanes
n|=r&=e.pendingLanes,t.lanes=n,Fe(e,n)}}function Fi(e,t){var n=e.updateQueue,r=e.alternate
if(null!==r&&n===(r=r.updateQueue)){var a=null,o=null
if(null!==(n=n.firstBaseUpdate)){do{var l={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null}
null===o?a=o=l:o=o.next=l,n=n.next}while(null!==n)
null===o?a=o=t:o=o.next=t}else a=o=t
return n={baseState:r.baseState,firstBaseUpdate:a,lastBaseUpdate:o,shared:r.shared,callbacks:r.callbacks},void(e.updateQueue=n)}null===(e=n.lastBaseUpdate)?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var Bi=!1
function $i(){if(Bi&&null!==Xa)throw Xa}function Hi(e,t,n,r){Bi=!1
var a=e.updateQueue
Di=!1
var o=a.firstBaseUpdate,l=a.lastBaseUpdate,i=a.shared.pending
if(null!==i){a.shared.pending=null
var s=i,c=s.next
s.next=null,null===l?o=c:l.next=c,l=s
var u=e.alternate
null!==u&&(i=(u=u.updateQueue).lastBaseUpdate)!==l&&(null===i?u.firstBaseUpdate=c:i.next=c,u.lastBaseUpdate=s)}if(null!==o){var d=a.baseState
for(l=0,u=c=s=null,i=o;;){var f=-536870913&i.lane,p=f!==i.lane
if(p?(sc&f)===f:(r&f)===f){0!==f&&f===Ya&&(Bi=!0),null!==u&&(u=u.next={lane:0,tag:i.tag,payload:i.payload,callback:null,next:null})
e:{var m=e,h=i
f=t
var v=n
switch(h.tag){case 1:if('function'==typeof(m=h.payload)){d=m.call(v,d,f)
break e}d=m
break e
case 3:m.flags=-65537&m.flags|128
case 0:if(null==(f='function'==typeof(m=h.payload)?m.call(v,d,f):m))break e
d=A({},d,f)
break e
case 2:Di=!0}}null!==(f=i.callback)&&(e.flags|=64,p&&(e.flags|=8192),null===(p=a.callbacks)?a.callbacks=[f]:p.push(f))}else p={lane:f,tag:i.tag,payload:i.payload,callback:i.callback,next:null},null===u?(c=u=p,s=d):u=u.next=p,l|=f
if(null===(i=i.next)){if(null===(i=a.shared.pending))break
i=(p=i).next,p.next=null,a.lastBaseUpdate=p,a.shared.pending=null}}null===u&&(s=d),a.baseState=s,a.firstBaseUpdate=c,a.lastBaseUpdate=u,null===o&&(a.shared.lanes=0),vc|=l,e.lanes=l,e.memoizedState=d}}function Vi(e,t){if('function'!=typeof e)throw Error(r(191,e))
e.call(t)}function Wi(e,t){var n=e.callbacks
if(null!==n)for(e.callbacks=null,e=0;e<n.length;e++)Vi(n[e],t)}function Ui(e,t){try{var n=t.updateQueue,r=null!==n?n.lastEffect:null
if(null!==r){var a=r.next
n=a
do{if((n.tag&e)===e){r=void 0
var o=n.create,l=n.inst
r=o(),l.destroy=r}n=n.next}while(n!==a)}}catch(i){su(t,t.return,i)}}function Ki(e,t,n){try{var r=t.updateQueue,a=null!==r?r.lastEffect:null
if(null!==a){var o=a.next
r=o
do{if((r.tag&e)===e){var l=r.inst,i=l.destroy
if(void 0!==i){l.destroy=void 0,a=t
var s=n
try{i()}catch(c){su(a,s,c)}}}r=r.next}while(r!==o)}}catch(c){su(t,t.return,c)}}function Gi(e){var t=e.updateQueue
if(null!==t){var n=e.stateNode
try{Wi(t,n)}catch(r){su(e,e.return,r)}}}function qi(e,t,n){n.props=zl(e.type,e.memoizedProps),n.state=e.memoizedState
try{n.componentWillUnmount()}catch(r){su(e,t,r)}}function Yi(e,t){try{var n=e.ref
if(null!==n){var r=e.stateNode
switch(e.tag){case 26:case 27:case 5:var a=r
break
default:a=r}'function'==typeof n?e.refCleanup=n(a):n.current=a}}catch(o){su(e,t,o)}}function Xi(e,t){var n=e.ref,r=e.refCleanup
if(null!==n)if('function'==typeof r)try{r()}catch(a){su(e,t,a)}finally{e.refCleanup=null,null!=(e=e.alternate)&&(e.refCleanup=null)}else if('function'==typeof n)try{n(null)}catch(o){su(e,t,o)}else n.current=null}function Qi(e){var t=e.type,n=e.memoizedProps,r=e.stateNode
try{e:switch(t){case'button':case'input':case'select':case'textarea':n.autoFocus&&r.focus()
break e
case'img':n.src?r.src=n.src:n.srcSet&&(r.srcset=n.srcSet)}}catch(a){su(e,e.return,a)}}function Zi(e,t,n){try{var a=e.stateNode
!function(e,t,n,a){switch(t){case'div':case'span':case'svg':case'path':case'a':case'g':case'p':case'li':break
case'input':var o=null,l=null,i=null,s=null,c=null,u=null,d=null
for(m in n){var f=n[m]
if(n.hasOwnProperty(m)&&null!=f)switch(m){case'checked':case'value':break
case'defaultValue':c=f
default:a.hasOwnProperty(m)||Yu(e,t,m,null,a,f)}}for(var p in a){var m=a[p]
if(f=n[p],a.hasOwnProperty(p)&&(null!=m||null!=f))switch(p){case'type':l=m
break
case'name':o=m
break
case'checked':u=m
break
case'defaultChecked':d=m
break
case'value':i=m
break
case'defaultValue':s=m
break
case'children':case'dangerouslySetInnerHTML':if(null!=m)throw Error(r(137,t))
break
default:m!==f&&Yu(e,t,p,m,a,f)}}return void xt(e,i,s,c,u,d,l,o)
case'select':for(l in m=i=s=p=null,n)if(c=n[l],n.hasOwnProperty(l)&&null!=c)switch(l){case'value':break
case'multiple':m=c
default:a.hasOwnProperty(l)||Yu(e,t,l,null,a,c)}for(o in a)if(l=a[o],c=n[o],a.hasOwnProperty(o)&&(null!=l||null!=c))switch(o){case'value':p=l
break
case'defaultValue':s=l
break
case'multiple':i=l
default:l!==c&&Yu(e,t,o,l,a,c)}return t=s,n=i,a=m,void(null!=p?Et(e,!!n,p,!1):!!a!=!!n&&(null!=t?Et(e,!!n,t,!0):Et(e,!!n,n?[]:'',!1)))
case'textarea':for(s in m=p=null,n)if(o=n[s],n.hasOwnProperty(s)&&null!=o&&!a.hasOwnProperty(s))switch(s){case'value':case'children':break
default:Yu(e,t,s,null,a,o)}for(i in a)if(o=a[i],l=n[i],a.hasOwnProperty(i)&&(null!=o||null!=l))switch(i){case'value':p=o
break
case'defaultValue':m=o
break
case'children':break
case'dangerouslySetInnerHTML':if(null!=o)throw Error(r(91))
break
default:o!==l&&Yu(e,t,i,o,a,l)}return void kt(e,p,m)
case'option':for(var h in n)p=n[h],n.hasOwnProperty(h)&&null!=p&&!a.hasOwnProperty(h)&&('selected'===h?e.selected=!1:Yu(e,t,h,null,a,p))
for(c in a)p=a[c],m=n[c],!a.hasOwnProperty(c)||p===m||null==p&&null==m||('selected'===c?e.selected=p&&'function'!=typeof p&&'symbol'!=typeof p:Yu(e,t,c,p,a,m))
return
case'img':case'link':case'area':case'base':case'br':case'col':case'embed':case'hr':case'keygen':case'meta':case'param':case'source':case'track':case'wbr':case'menuitem':for(var v in n)p=n[v],n.hasOwnProperty(v)&&null!=p&&!a.hasOwnProperty(v)&&Yu(e,t,v,null,a,p)
for(u in a)if(p=a[u],m=n[u],a.hasOwnProperty(u)&&p!==m&&(null!=p||null!=m))switch(u){case'children':case'dangerouslySetInnerHTML':if(null!=p)throw Error(r(137,t))
break
default:Yu(e,t,u,p,a,m)}return
default:if(_t(t)){for(var g in n)p=n[g],n.hasOwnProperty(g)&&void 0!==p&&!a.hasOwnProperty(g)&&Xu(e,t,g,void 0,a,p)
for(d in a)p=a[d],m=n[d],!a.hasOwnProperty(d)||p===m||void 0===p&&void 0===m||Xu(e,t,d,p,a,m)
return}}for(var y in n)p=n[y],n.hasOwnProperty(y)&&null!=p&&!a.hasOwnProperty(y)&&Yu(e,t,y,null,a,p)
for(f in a)p=a[f],m=n[f],!a.hasOwnProperty(f)||p===m||null==p&&null==m||Yu(e,t,f,p,a,m)}(a,e.type,n,t),a[We]=t}catch(o){su(e,e.return,o)}}function Ji(e){return 5===e.tag||3===e.tag||26===e.tag||27===e.tag||4===e.tag}function es(e){e:for(;;){for(;null===e.sibling;){if(null===e.return||Ji(e.return))return null
e=e.return}for(e.sibling.return=e.return,e=e.sibling;5!==e.tag&&6!==e.tag&&27!==e.tag&&18!==e.tag;){if(2&e.flags)continue e
if(null===e.child||4===e.tag)continue e
e.child.return=e,e=e.child}if(!(2&e.flags))return e.stateNode}}function ts(e,t,n){var r=e.tag
if(5===r||6===r)e=e.stateNode,t?8===n.nodeType?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(8===n.nodeType?(t=n.parentNode).insertBefore(e,n):(t=n).appendChild(e),null!=(n=n._reactRootContainer)||null!==t.onclick||(t.onclick=qu))
else if(4!==r&&27!==r&&null!==(e=e.child))for(ts(e,t,n),e=e.sibling;null!==e;)ts(e,t,n),e=e.sibling}function ns(e,t,n){var r=e.tag
if(5===r||6===r)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e)
else if(4!==r&&27!==r&&null!==(e=e.child))for(ns(e,t,n),e=e.sibling;null!==e;)ns(e,t,n),e=e.sibling}var rs=!1,as=!1,os=!1,ls='function'==typeof WeakSet?WeakSet:Set,is=null,ss=!1
function cs(e,t,n){var r=n.flags
switch(n.tag){case 0:case 11:case 15:Cs(e,n),4&r&&Ui(5,n)
break
case 1:if(Cs(e,n),4&r)if(e=n.stateNode,null===t)try{e.componentDidMount()}catch(i){su(n,n.return,i)}else{var a=zl(n.type,t.memoizedProps)
t=t.memoizedState
try{e.componentDidUpdate(a,t,e.__reactInternalSnapshotBeforeUpdate)}catch(s){su(n,n.return,s)}}64&r&&Gi(n),512&r&&Yi(n,n.return)
break
case 3:if(Cs(e,n),64&r&&null!==(r=n.updateQueue)){if(e=null,null!==n.child)switch(n.child.tag){case 27:case 5:case 1:e=n.child.stateNode}try{Wi(r,e)}catch(i){su(n,n.return,i)}}break
case 26:Cs(e,n),512&r&&Yi(n,n.return)
break
case 27:case 5:Cs(e,n),null===t&&4&r&&Qi(n),512&r&&Yi(n,n.return)
break
case 12:default:Cs(e,n)
break
case 13:Cs(e,n),4&r&&hs(e,n)
break
case 22:if(!(a=null!==n.memoizedState||rs)){t=null!==t&&null!==t.memoizedState||as
var o=rs,l=as
rs=a,(as=t)&&!l?Es(e,n,!!(8772&n.subtreeFlags)):Cs(e,n),rs=o,as=l}512&r&&('manual'===n.memoizedProps.mode?Yi(n,n.return):Xi(n,n.return))}}function us(e){var t=e.alternate
null!==t&&(e.alternate=null,us(t)),e.child=null,e.deletions=null,e.sibling=null,5===e.tag&&null!==(t=e.stateNode)&&Qe(t),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var ds=null,fs=!1
function ps(e,t,n){for(n=n.child;null!==n;)ms(e,t,n),n=n.sibling}function ms(e,t,n){if(Se&&'function'==typeof Se.onCommitFiberUnmount)try{Se.onCommitFiberUnmount(Ce,n)}catch(l){}switch(n.tag){case 26:as||Xi(n,t),ps(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode).parentNode.removeChild(n)
break
case 27:as||Xi(n,t)
var r=ds,a=fs
for(ds=n.stateNode,ps(e,t,n),t=(n=n.stateNode).attributes;t.length;)n.removeAttributeNode(t[0])
Qe(n),ds=r,fs=a
break
case 5:as||Xi(n,t)
case 6:a=ds
var o=fs
if(ds=null,ps(e,t,n),fs=o,null!==(ds=a))if(fs)try{e=ds,r=n.stateNode,8===e.nodeType?e.parentNode.removeChild(r):e.removeChild(r)}catch(i){su(n,t,i)}else try{ds.removeChild(n.stateNode)}catch(i){su(n,t,i)}break
case 18:null!==ds&&(fs?(t=ds,n=n.stateNode,8===t.nodeType?ud(t.parentNode,n):1===t.nodeType&&ud(t,n),xf(t)):ud(ds,n.stateNode))
break
case 4:r=ds,a=fs,ds=n.stateNode.containerInfo,fs=!0,ps(e,t,n),ds=r,fs=a
break
case 0:case 11:case 14:case 15:as||Ki(2,n,t),as||Ki(4,n,t),ps(e,t,n)
break
case 1:as||(Xi(n,t),'function'==typeof(r=n.stateNode).componentWillUnmount&&qi(n,t,r)),ps(e,t,n)
break
case 21:ps(e,t,n)
break
case 22:as||Xi(n,t),as=(r=as)||null!==n.memoizedState,ps(e,t,n),as=r
break
default:ps(e,t,n)}}function hs(e,t){if(null===t.memoizedState&&null!==(e=t.alternate)&&null!==(e=e.memoizedState)&&null!==(e=e.dehydrated))try{xf(e)}catch(n){su(t,t.return,n)}}function vs(e,t){var n=function(e){switch(e.tag){case 13:case 19:var t=e.stateNode
return null===t&&(t=e.stateNode=new ls),t
case 22:return null===(t=(e=e.stateNode)._retryCache)&&(t=e._retryCache=new ls),t
default:throw Error(r(435,e.tag))}}(e)
t.forEach((function(t){var r=pu.bind(null,e,t)
n.has(t)||(n.add(t),t.then(r,r))}))}function gs(e,t){var n=t.deletions
if(null!==n)for(var a=0;a<n.length;a++){var o=n[a],l=e,i=t,s=i
e:for(;null!==s;){switch(s.tag){case 27:case 5:ds=s.stateNode,fs=!1
break e
case 3:case 4:ds=s.stateNode.containerInfo,fs=!0
break e}s=s.return}if(null===ds)throw Error(r(160))
ms(l,i,o),ds=null,fs=!1,null!==(l=o.alternate)&&(l.return=null),o.return=null}if(13878&t.subtreeFlags)for(t=t.child;null!==t;)bs(t,e),t=t.sibling}var ys=null
function bs(e,t){var n=e.alternate,a=e.flags
switch(e.tag){case 0:case 11:case 14:case 15:gs(t,e),ws(e),4&a&&(Ki(3,e,e.return),Ui(3,e),Ki(5,e,e.return))
break
case 1:gs(t,e),ws(e),512&a&&(as||null===n||Xi(n,n.return)),64&a&&rs&&null!==(e=e.updateQueue)&&null!==(a=e.callbacks)&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=null===n?a:n.concat(a))
break
case 26:var o=ys
if(gs(t,e),ws(e),512&a&&(as||null===n||Xi(n,n.return)),4&a){var l=null!==n?n.memoizedState:null
if(a=e.memoizedState,null===n)if(null===a)if(null===e.stateNode){e:{a=e.type,n=e.memoizedProps,o=o.ownerDocument||o
t:switch(a){case'title':(!(l=o.getElementsByTagName('title')[0])||l[Xe]||l[Ve]||'http://www.w3.org/2000/svg'===l.namespaceURI||l.hasAttribute('itemprop'))&&(l=o.createElement(a),o.head.insertBefore(l,o.querySelector('head > title'))),Qu(l,a,n),l[Ve]=e,nt(l),a=l
break e
case'link':var i=Ld('link','href',o).get(a+(n.href||''))
if(i)for(var s=0;s<i.length;s++)if((l=i[s]).getAttribute('href')===(null==n.href?null:n.href)&&l.getAttribute('rel')===(null==n.rel?null:n.rel)&&l.getAttribute('title')===(null==n.title?null:n.title)&&l.getAttribute('crossorigin')===(null==n.crossOrigin?null:n.crossOrigin)){i.splice(s,1)
break t}Qu(l=o.createElement(a),a,n),o.head.appendChild(l)
break
case'meta':if(i=Ld('meta','content',o).get(a+(n.content||'')))for(s=0;s<i.length;s++)if((l=i[s]).getAttribute('content')===(null==n.content?null:''+n.content)&&l.getAttribute('name')===(null==n.name?null:n.name)&&l.getAttribute('property')===(null==n.property?null:n.property)&&l.getAttribute('http-equiv')===(null==n.httpEquiv?null:n.httpEquiv)&&l.getAttribute('charset')===(null==n.charSet?null:n.charSet)){i.splice(s,1)
break t}Qu(l=o.createElement(a),a,n),o.head.appendChild(l)
break
default:throw Error(r(468,a))}l[Ve]=e,nt(l),a=l}e.stateNode=a}else Dd(o,e.type,e.stateNode)
else e.stateNode=Rd(o,a,e.memoizedProps)
else l!==a?(null===l?null!==n.stateNode&&(n=n.stateNode).parentNode.removeChild(n):l.count--,null===a?Dd(o,e.type,e.stateNode):Rd(o,a,e.memoizedProps)):null===a&&null!==e.stateNode&&Zi(e,e.memoizedProps,n.memoizedProps)}break
case 27:if(4&a&&null===e.alternate){o=e.stateNode,l=e.memoizedProps
try{for(var c=o.firstChild;c;){var u=c.nextSibling,d=c.nodeName
c[Xe]||'HEAD'===d||'BODY'===d||'SCRIPT'===d||'STYLE'===d||'LINK'===d&&'stylesheet'===c.rel.toLowerCase()||o.removeChild(c),c=u}for(var f=e.type,p=o.attributes;p.length;)o.removeAttributeNode(p[0])
Qu(o,f,l),o[Ve]=e,o[We]=l}catch(h){su(e,e.return,h)}}case 5:if(gs(t,e),ws(e),512&a&&(as||null===n||Xi(n,n.return)),32&e.flags){o=e.stateNode
try{Rt(o,'')}catch(h){su(e,e.return,h)}}4&a&&null!=e.stateNode&&Zi(e,o=e.memoizedProps,null!==n?n.memoizedProps:o),1024&a&&(os=!0)
break
case 6:if(gs(t,e),ws(e),4&a){if(null===e.stateNode)throw Error(r(162))
a=e.memoizedProps,n=e.stateNode
try{n.nodeValue=a}catch(h){su(e,e.return,h)}}break
case 3:if(_d=null,o=ys,ys=gd(t.containerInfo),gs(t,e),ys=o,ws(e),4&a&&null!==n&&n.memoizedState.isDehydrated)try{xf(t.containerInfo)}catch(h){su(e,e.return,h)}os&&(os=!1,xs(e))
break
case 4:a=ys,ys=gd(e.stateNode.containerInfo),gs(t,e),ws(e),ys=a
break
case 12:gs(t,e),ws(e)
break
case 13:gs(t,e),ws(e),8192&e.child.flags&&null!==e.memoizedState!=(null!==n&&null!==n.memoizedState)&&(Ec=pe()),4&a&&null!==(a=e.updateQueue)&&(e.updateQueue=null,vs(e,a))
break
case 22:if(512&a&&(as||null===n||Xi(n,n.return)),c=null!==e.memoizedState,u=null!==n&&null!==n.memoizedState,rs=(d=rs)||c,as=(f=as)||u,gs(t,e),as=f,rs=d,ws(e),(t=e.stateNode)._current=e,t._visibility&=-3,t._visibility|=2&t._pendingVisibility,8192&a&&(t._visibility=c?-2&t._visibility:1|t._visibility,c&&(t=rs||as,null===n||u||t||Ss(e)),null===e.memoizedProps||'manual'!==e.memoizedProps.mode))e:for(n=null,t=e;;){if(5===t.tag||26===t.tag||27===t.tag){if(null===n){u=n=t
try{if(o=u.stateNode,c)'function'==typeof(l=o.style).setProperty?l.setProperty('display','none','important'):l.display='none'
else{i=u.stateNode
var m=null!=(s=u.memoizedProps.style)&&s.hasOwnProperty('display')?s.display:null
i.style.display=null==m||'boolean'==typeof m?'':(''+m).trim()}}catch(h){su(u,u.return,h)}}}else if(6===t.tag){if(null===n){u=t
try{u.stateNode.nodeValue=c?'':u.memoizedProps}catch(h){su(u,u.return,h)}}}else if((22!==t.tag&&23!==t.tag||null===t.memoizedState||t===e)&&null!==t.child){t.child.return=t,t=t.child
continue}if(t===e)break e
for(;null===t.sibling;){if(null===t.return||t.return===e)break e
n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}4&a&&null!==(a=e.updateQueue)&&null!==(n=a.retryQueue)&&(a.retryQueue=null,vs(e,n))
break
case 19:gs(t,e),ws(e),4&a&&null!==(a=e.updateQueue)&&(e.updateQueue=null,vs(e,a))
break
case 21:break
default:gs(t,e),ws(e)}}function ws(e){var t=e.flags
if(2&t){try{if(27!==e.tag){e:{for(var n=e.return;null!==n;){if(Ji(n)){var a=n
break e}n=n.return}throw Error(r(160))}switch(a.tag){case 27:var o=a.stateNode
ns(e,es(e),o)
break
case 5:var l=a.stateNode
32&a.flags&&(Rt(l,''),a.flags&=-33),ns(e,es(e),l)
break
case 3:case 4:var i=a.stateNode.containerInfo
ts(e,es(e),i)
break
default:throw Error(r(161))}}}catch(s){su(e,e.return,s)}e.flags&=-3}4096&t&&(e.flags&=-4097)}function xs(e){if(1024&e.subtreeFlags)for(e=e.child;null!==e;){var t=e
xs(t),5===t.tag&&1024&t.flags&&t.stateNode.reset(),e=e.sibling}}function Cs(e,t){if(8772&t.subtreeFlags)for(t=t.child;null!==t;)cs(e,t.alternate,t),t=t.sibling}function Ss(e){for(e=e.child;null!==e;){var t=e
switch(t.tag){case 0:case 11:case 14:case 15:Ki(4,t,t.return),Ss(t)
break
case 1:Xi(t,t.return)
var n=t.stateNode
'function'==typeof n.componentWillUnmount&&qi(t,t.return,n),Ss(t)
break
case 26:case 27:case 5:Xi(t,t.return),Ss(t)
break
case 22:Xi(t,t.return),null===t.memoizedState&&Ss(t)
break
default:Ss(t)}e=e.sibling}}function Es(e,t,n){for(n=n&&!!(8772&t.subtreeFlags),t=t.child;null!==t;){var r=t.alternate,a=e,o=t,l=o.flags
switch(o.tag){case 0:case 11:case 15:Es(a,o,n),Ui(4,o)
break
case 1:if(Es(a,o,n),'function'==typeof(a=(r=o).stateNode).componentDidMount)try{a.componentDidMount()}catch(c){su(r,r.return,c)}if(null!==(a=(r=o).updateQueue)){var i=r.stateNode
try{var s=a.shared.hiddenCallbacks
if(null!==s)for(a.shared.hiddenCallbacks=null,a=0;a<s.length;a++)Vi(s[a],i)}catch(c){su(r,r.return,c)}}n&&64&l&&Gi(o),Yi(o,o.return)
break
case 26:case 27:case 5:Es(a,o,n),n&&null===r&&4&l&&Qi(o),Yi(o,o.return)
break
case 12:default:Es(a,o,n)
break
case 13:Es(a,o,n),n&&4&l&&hs(a,o)
break
case 22:null===o.memoizedState&&Es(a,o,n),Yi(o,o.return)}t=t.sibling}}function ks(e,t){var n=null
null!==e&&null!==e.memoizedState&&null!==e.memoizedState.cachePool&&(n=e.memoizedState.cachePool.pool),e=null,null!==t.memoizedState&&null!==t.memoizedState.cachePool&&(e=t.memoizedState.cachePool.pool),e!==n&&(null!=e&&e.refCount++,null!=n&&Ka(n))}function Ns(e,t){e=null,null!==t.alternate&&(e=t.alternate.memoizedState.cache),(t=t.memoizedState.cache)!==e&&(t.refCount++,null!=e&&Ka(e))}function Rs(e,t,n,r){if(10256&t.subtreeFlags)for(t=t.child;null!==t;)Ps(e,t,n,r),t=t.sibling}function Ps(e,t,n,r){var a=t.flags
switch(t.tag){case 0:case 11:case 15:Rs(e,t,n,r),2048&a&&Ui(9,t)
break
case 3:Rs(e,t,n,r),2048&a&&(e=null,null!==t.alternate&&(e=t.alternate.memoizedState.cache),(t=t.memoizedState.cache)!==e&&(t.refCount++,null!=e&&Ka(e)))
break
case 12:if(2048&a){Rs(e,t,n,r),e=t.stateNode
try{var o=t.memoizedProps,l=o.id,i=o.onPostCommit
'function'==typeof i&&i(l,null===t.alternate?'mount':'update',e.passiveEffectDuration,-0)}catch(s){su(t,t.return,s)}}else Rs(e,t,n,r)
break
case 23:break
case 22:o=t.stateNode,null!==t.memoizedState?4&o._visibility?Rs(e,t,n,r):Ms(e,t):4&o._visibility?Rs(e,t,n,r):(o._visibility|=4,Ts(e,t,n,r,!!(10256&t.subtreeFlags))),2048&a&&ks(t.alternate,t)
break
case 24:Rs(e,t,n,r),2048&a&&Ns(t.alternate,t)
break
default:Rs(e,t,n,r)}}function Ts(e,t,n,r,a){for(a=a&&!!(10256&t.subtreeFlags),t=t.child;null!==t;){var o=e,l=t,i=n,s=r,c=l.flags
switch(l.tag){case 0:case 11:case 15:Ts(o,l,i,s,a),Ui(8,l)
break
case 23:break
case 22:var u=l.stateNode
null!==l.memoizedState?4&u._visibility?Ts(o,l,i,s,a):Ms(o,l):(u._visibility|=4,Ts(o,l,i,s,a)),a&&2048&c&&ks(l.alternate,l)
break
case 24:Ts(o,l,i,s,a),a&&2048&c&&Ns(l.alternate,l)
break
default:Ts(o,l,i,s,a)}t=t.sibling}}function Ms(e,t){if(10256&t.subtreeFlags)for(t=t.child;null!==t;){var n=e,r=t,a=r.flags
switch(r.tag){case 22:Ms(n,r),2048&a&&ks(r.alternate,r)
break
case 24:Ms(n,r),2048&a&&Ns(r.alternate,r)
break
default:Ms(n,r)}t=t.sibling}}var _s=8192
function Ls(e){if(e.subtreeFlags&_s)for(e=e.child;null!==e;)Ds(e),e=e.sibling}function Ds(e){switch(e.tag){case 26:Ls(e),e.flags&_s&&null!==e.memoizedState&&function(e,t,n){if(null===Id)throw Error(r(475))
var a=Id
if(!('stylesheet'!==t.type||'string'==typeof n.media&&!1===matchMedia(n.media).matches||4&t.state.loading)){if(null===t.instance){var o=Cd(n.href),l=e.querySelector(Sd(o))
if(l)return null!==(e=l._p)&&'object'==typeof e&&'function'==typeof e.then&&(a.count++,a=Od.bind(a),e.then(a,a)),t.state.loading|=4,t.instance=l,void nt(l)
l=e.ownerDocument||e,n=Ed(n),(o=hd.get(o))&&Td(n,o),nt(l=l.createElement('link'))
var i=l
i._p=new Promise((function(e,t){i.onload=e,i.onerror=t})),Qu(l,'link',n),t.instance=l}null===a.stylesheets&&(a.stylesheets=new Map),a.stylesheets.set(t,e),(e=t.state.preload)&&!(3&t.state.loading)&&(a.count++,t=Od.bind(a),e.addEventListener('load',t),e.addEventListener('error',t))}}(ys,e.memoizedState,e.memoizedProps)
break
case 5:default:Ls(e)
break
case 3:case 4:var t=ys
ys=gd(e.stateNode.containerInfo),Ls(e),ys=t
break
case 22:null===e.memoizedState&&(null!==(t=e.alternate)&&null!==t.memoizedState?(t=_s,_s=16777216,Ls(e),_s=t):Ls(e))}}function js(e){var t=e.alternate
if(null!==t&&null!==(e=t.child)){t.child=null
do{t=e.sibling,e.sibling=null,e=t}while(null!==e)}}function Is(e){var t=e.deletions
if(16&e.flags){if(null!==t)for(var n=0;n<t.length;n++){var r=t[n]
is=r,zs(r,e)}js(e)}if(10256&e.subtreeFlags)for(e=e.child;null!==e;)As(e),e=e.sibling}function As(e){switch(e.tag){case 0:case 11:case 15:Is(e),2048&e.flags&&Ki(9,e,e.return)
break
case 3:case 12:default:Is(e)
break
case 22:var t=e.stateNode
null!==e.memoizedState&&4&t._visibility&&(null===e.return||13!==e.return.tag)?(t._visibility&=-5,Os(e)):Is(e)}}function Os(e){var t=e.deletions
if(16&e.flags){if(null!==t)for(var n=0;n<t.length;n++){var r=t[n]
is=r,zs(r,e)}js(e)}for(e=e.child;null!==e;){switch((t=e).tag){case 0:case 11:case 15:Ki(8,t,t.return),Os(t)
break
case 22:4&(n=t.stateNode)._visibility&&(n._visibility&=-5,Os(t))
break
default:Os(t)}e=e.sibling}}function zs(e,t){for(;null!==is;){var n=is
switch(n.tag){case 0:case 11:case 15:Ki(8,n,t)
break
case 23:case 22:if(null!==n.memoizedState&&null!==n.memoizedState.cachePool){var r=n.memoizedState.cachePool.pool
null!=r&&r.refCount++}break
case 24:Ka(n.memoizedState.cache)}if(null!==(r=n.child))r.return=n,is=r
else e:for(n=e;null!==is;){var a=(r=is).sibling,o=r.return
if(us(r),r===n){is=null
break e}if(null!==a){a.return=o,is=a
break e}is=o}}}function Fs(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Bs(e,t,n,r){return new Fs(e,t,n,r)}function $s(e){return!(!(e=e.prototype)||!e.isReactComponent)}function Hs(e,t){var n=e.alternate
return null===n?((n=Bs(e.tag,t,e.key,e.mode)).elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=31457280&e.flags,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=null===t?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function Vs(e,t){e.flags&=31457282
var n=e.alternate
return null===n?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=null===t?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function Ws(e,t,n,a,o,l){var i=0
if(a=e,'function'==typeof e)$s(e)&&(i=1)
else if('string'==typeof e)i=function(e,t,n){if(1===n||null!=t.itemProp)return!1
switch(e){case'meta':case'title':return!0
case'style':if('string'!=typeof t.precedence||'string'!=typeof t.href||''===t.href)break
return!0
case'link':if('string'!=typeof t.rel||'string'!=typeof t.href||''===t.href||t.onLoad||t.onError)break
return'stylesheet'!==t.rel||(e=t.disabled,'string'==typeof t.precedence&&null==e)
case'script':if(t.async&&'function'!=typeof t.async&&'symbol'!=typeof t.async&&!t.onLoad&&!t.onError&&t.src&&'string'==typeof t.src)return!0}return!1}(e,n,ee.current)?26:'html'===e||'head'===e||'body'===e?27:5
else e:switch(e){case s:return Us(n.children,o,l,t)
case c:i=8,o|=24
break
case u:return(e=Bs(12,n,t,2|o)).elementType=u,e.lanes=l,e
case y:return(e=Bs(13,n,t,o)).elementType=y,e.lanes=l,e
case b:return(e=Bs(19,n,t,o)).elementType=b,e.lanes=l,e
case N:return Ks(n,o,l,t)
default:if('object'==typeof e&&null!==e)switch(e.$$typeof){case d:case m:i=10
break e
case p:i=9
break e
case h:i=11
break e
case x:i=14
break e
case C:i=16,a=null
break e}i=29,n=Error(r(130,null===e?'null':typeof e,'')),a=null}return(t=Bs(i,n,t,o)).elementType=e,t.type=a,t.lanes=l,t}function Us(e,t,n,r){return(e=Bs(7,e,r,t)).lanes=n,e}function Ks(e,t,n,a){(e=Bs(22,e,a,t)).elementType=N,e.lanes=n
var o={_visibility:1,_pendingVisibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null,_current:null,detach:function(){var e=o._current
if(null===e)throw Error(r(456))
if(!(2&o._pendingVisibility)){var t=jr(e,2)
null!==t&&(o._pendingVisibility|=2,Oc(t,0,2))}},attach:function(){var e=o._current
if(null===e)throw Error(r(456))
if(2&o._pendingVisibility){var t=jr(e,2)
null!==t&&(o._pendingVisibility&=-3,Oc(t,0,2))}}}
return e.stateNode=o,e}function Gs(e,t,n){return(e=Bs(6,e,null,t)).lanes=n,e}function qs(e,t,n){return(t=Bs(4,null!==e.children?e.children:[],e.key,t)).lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Ys(e){e.flags|=4}function Xs(e,t){if('stylesheet'!==t.type||4&t.state.loading)e.flags&=-16777217
else if(e.flags|=16777216,!jd(t)){if(null!==(t=Da.current)&&((4194176&sc)===sc?null!==ja:(62914560&sc)!==sc&&!(536870912&sc)||t!==ja))throw ga=pa,fa
e.flags|=8192}}function Qs(e,t){null!==t&&(e.flags|=4),16384&e.flags&&(t=22!==e.tag?Ie():536870912,e.lanes|=t,wc|=t)}function Zs(e,t){if(!ta)switch(e.tailMode){case'hidden':t=e.tail
for(var n=null;null!==t;)null!==t.alternate&&(n=t),t=t.sibling
null===n?e.tail=null:n.sibling=null
break
case'collapsed':n=e.tail
for(var r=null;null!==n;)null!==n.alternate&&(r=n),n=n.sibling
null===r?t||null===e.tail?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Js(e){var t=null!==e.alternate&&e.alternate.child===e.child,n=0,r=0
if(t)for(var a=e.child;null!==a;)n|=a.lanes|a.childLanes,r|=31457280&a.subtreeFlags,r|=31457280&a.flags,a.return=e,a=a.sibling
else for(a=e.child;null!==a;)n|=a.lanes|a.childLanes,r|=a.subtreeFlags,r|=a.flags,a.return=e,a=a.sibling
return e.subtreeFlags|=r,e.childLanes=n,t}function ec(e,t,n){var a=t.pendingProps
switch(Zr(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:case 1:return Js(t),null
case 3:return n=t.stateNode,a=null,null!==e&&(a=e.memoizedState.cache),t.memoizedState.cache!==a&&(t.flags|=2048),Ei(Wa),oe(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),null!==e&&null!==e.child||(sa(t)?Ys(t):null===e||e.memoizedState.isDehydrated&&!(256&t.flags)||(t.flags|=1024,null!==na&&(Fc(na),na=null))),Js(t),null
case 26:return n=t.memoizedState,null===e?(Ys(t),null!==n?(Js(t),Xs(t,n)):(Js(t),t.flags&=-16777217)):n?n!==e.memoizedState?(Ys(t),Js(t),Xs(t,n)):(Js(t),t.flags&=-16777217):(e.memoizedProps!==a&&Ys(t),Js(t),t.flags&=-16777217),null
case 27:ie(t),n=ne.current
var o=t.type
if(null!==e&&null!=t.stateNode)e.memoizedProps!==a&&Ys(t)
else{if(!a){if(null===t.stateNode)throw Error(r(166))
return Js(t),null}e=ee.current,sa(t)?la(t):(e=md(o,a,n),t.stateNode=e,Ys(t))}return Js(t),null
case 5:if(ie(t),n=t.type,null!==e&&null!=t.stateNode)e.memoizedProps!==a&&Ys(t)
else{if(!a){if(null===t.stateNode)throw Error(r(166))
return Js(t),null}if(e=ee.current,sa(t))la(t)
else{switch(o=ed(ne.current),e){case 1:e=o.createElementNS('http://www.w3.org/2000/svg',n)
break
case 2:e=o.createElementNS('http://www.w3.org/1998/Math/MathML',n)
break
default:switch(n){case'svg':e=o.createElementNS('http://www.w3.org/2000/svg',n)
break
case'math':e=o.createElementNS('http://www.w3.org/1998/Math/MathML',n)
break
case'script':(e=o.createElement('div')).innerHTML='<script><\/script>',e=e.removeChild(e.firstChild)
break
case'select':e='string'==typeof a.is?o.createElement('select',{is:a.is}):o.createElement('select'),a.multiple?e.multiple=!0:a.size&&(e.size=a.size)
break
default:e='string'==typeof a.is?o.createElement(n,{is:a.is}):o.createElement(n)}}e[Ve]=t,e[We]=a
e:for(o=t.child;null!==o;){if(5===o.tag||6===o.tag)e.appendChild(o.stateNode)
else if(4!==o.tag&&27!==o.tag&&null!==o.child){o.child.return=o,o=o.child
continue}if(o===t)break e
for(;null===o.sibling;){if(null===o.return||o.return===t)break e
o=o.return}o.sibling.return=o.return,o=o.sibling}t.stateNode=e
e:switch(Qu(e,n,a),n){case'button':case'input':case'select':case'textarea':e=!!a.autoFocus
break e
case'img':e=!0
break e
default:e=!1}e&&Ys(t)}}return Js(t),t.flags&=-16777217,null
case 6:if(e&&null!=t.stateNode)e.memoizedProps!==a&&Ys(t)
else{if('string'!=typeof a&&null===t.stateNode)throw Error(r(166))
if(e=ne.current,sa(t)){if(e=t.stateNode,n=t.memoizedProps,a=null,null!==(o=Jr))switch(o.tag){case 27:case 5:a=o.memoizedProps}e[Ve]=t,(e=!!(e.nodeValue===n||null!==a&&!0===a.suppressHydrationWarning||Gu(e.nodeValue,n)))||oa(t)}else(e=ed(e).createTextNode(a))[Ve]=t,t.stateNode=e}return Js(t),null
case 13:if(a=t.memoizedState,null===e||null!==e.memoizedState&&null!==e.memoizedState.dehydrated){if(o=sa(t),null!==a&&null!==a.dehydrated){if(null===e){if(!o)throw Error(r(318))
if(!(o=null!==(o=t.memoizedState)?o.dehydrated:null))throw Error(r(317))
o[Ve]=t}else ca(),!(128&t.flags)&&(t.memoizedState=null),t.flags|=4
Js(t),o=!1}else null!==na&&(Fc(na),na=null),o=!0
if(!o)return 256&t.flags?(za(t),t):(za(t),null)}if(za(t),128&t.flags)return t.lanes=n,t
if(n=null!==a,e=null!==e&&null!==e.memoizedState,n){o=null,null!==(a=t.child).alternate&&null!==a.alternate.memoizedState&&null!==a.alternate.memoizedState.cachePool&&(o=a.alternate.memoizedState.cachePool.pool)
var l=null
null!==a.memoizedState&&null!==a.memoizedState.cachePool&&(l=a.memoizedState.cachePool.pool),l!==o&&(a.flags|=2048)}return n!==e&&n&&(t.child.flags|=8192),Qs(t,t.updateQueue),Js(t),null
case 4:return oe(),null===e&&Ou(t.stateNode.containerInfo),Js(t),null
case 10:return Ei(t.type),Js(t),null
case 19:if(Z(Fa),null===(o=t.memoizedState))return Js(t),null
if(a=!!(128&t.flags),null===(l=o.rendering))if(a)Zs(o,!1)
else{if(0!==hc||null!==e&&128&e.flags)for(e=t.child;null!==e;){if(null!==(l=Ba(e))){for(t.flags|=128,Zs(o,!1),e=l.updateQueue,t.updateQueue=e,Qs(t,e),t.subtreeFlags=0,e=n,n=t.child;null!==n;)Vs(n,e),n=n.sibling
return J(Fa,1&Fa.current|2),t.child}e=e.sibling}null!==o.tail&&pe()>kc&&(t.flags|=128,a=!0,Zs(o,!1),t.lanes=4194304)}else{if(!a)if(null!==(e=Ba(l))){if(t.flags|=128,a=!0,e=e.updateQueue,t.updateQueue=e,Qs(t,e),Zs(o,!0),null===o.tail&&'hidden'===o.tailMode&&!l.alternate&&!ta)return Js(t),null}else 2*pe()-o.renderingStartTime>kc&&536870912!==n&&(t.flags|=128,a=!0,Zs(o,!1),t.lanes=4194304)
o.isBackwards?(l.sibling=t.child,t.child=l):(null!==(e=o.last)?e.sibling=l:t.child=l,o.last=l)}return null!==o.tail?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=pe(),t.sibling=null,e=Fa.current,J(Fa,a?1&e|2:1&e),t):(Js(t),null)
case 22:case 23:return za(t),La(),a=null!==t.memoizedState,null!==e?null!==e.memoizedState!==a&&(t.flags|=8192):a&&(t.flags|=8192),a?!!(536870912&n)&&!(128&t.flags)&&(Js(t),6&t.subtreeFlags&&(t.flags|=8192)):Js(t),null!==(n=t.updateQueue)&&Qs(t,n.retryQueue),n=null,null!==e&&null!==e.memoizedState&&null!==e.memoizedState.cachePool&&(n=e.memoizedState.cachePool.pool),a=null,null!==t.memoizedState&&null!==t.memoizedState.cachePool&&(a=t.memoizedState.cachePool.pool),a!==n&&(t.flags|=2048),null!==e&&Z(Ja),null
case 24:return n=null,null!==e&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),Ei(Wa),Js(t),null
case 25:return null}throw Error(r(156,t.tag))}function tc(e,t){switch(Zr(t),t.tag){case 1:return 65536&(e=t.flags)?(t.flags=-65537&e|128,t):null
case 3:return Ei(Wa),oe(),65536&(e=t.flags)&&!(128&e)?(t.flags=-65537&e|128,t):null
case 26:case 27:case 5:return ie(t),null
case 13:if(za(t),null!==(e=t.memoizedState)&&null!==e.dehydrated){if(null===t.alternate)throw Error(r(340))
ca()}return 65536&(e=t.flags)?(t.flags=-65537&e|128,t):null
case 19:return Z(Fa),null
case 4:return oe(),null
case 10:return Ei(t.type),null
case 22:case 23:return za(t),La(),null!==e&&Z(Ja),65536&(e=t.flags)?(t.flags=-65537&e|128,t):null
case 24:return Ei(Wa),null
default:return null}}function nc(e,t){switch(Zr(t),t.tag){case 3:Ei(Wa),oe()
break
case 26:case 27:case 5:ie(t)
break
case 4:oe()
break
case 13:za(t)
break
case 19:Z(Fa)
break
case 10:Ei(t.type)
break
case 22:case 23:za(t),La(),null!==e&&Z(Ja)
break
case 24:Ei(Wa)}}var rc={getCacheForType:function(e){var t=Mi(Wa),n=t.data.get(e)
return void 0===n&&(n=e(),t.data.set(e,n)),n}},ac='function'==typeof WeakMap?WeakMap:Map,oc=0,lc=null,ic=null,sc=0,cc=0,uc=null,dc=!1,fc=!1,pc=!1,mc=0,hc=0,vc=0,gc=0,yc=0,bc=0,wc=0,xc=null,Cc=null,Sc=!1,Ec=0,kc=1/0,Nc=null,Rc=null,Pc=!1,Tc=null,Mc=0,_c=0,Lc=null,Dc=0,jc=null
function Ic(){return 2&oc&&0!==sc?sc&-sc:null!==I.T?0!==Ya?Ya:Nu():$e()}function Ac(){0===bc&&(bc=536870912&sc&&!ta?536870912:je())
var e=Da.current
return null!==e&&(e.flags|=32),bc}function Oc(e,t,n){(e===lc&&2===cc||null!==e.cancelPendingCommit)&&(Uc(e,0),Hc(e,sc,bc,!1)),Oe(e,n),2&oc&&e===lc||(e===lc&&(!(2&oc)&&(gc|=n),4===hc&&Hc(e,sc,bc,!1)),wu(e))}function zc(e,t,n){if(6&oc)throw Error(r(327))
for(var a=!n&&!(60&t)&&!(t&e.expiredLanes)||Le(e,t),o=a?function(e,t){var n=oc
oc|=2
var a=Gc(),o=qc()
lc!==e||sc!==t?(Nc=null,kc=pe()+500,Uc(e,t)):fc=Le(e,t)
e:for(;;)try{if(0!==cc&&null!==ic){t=ic
var l=uc
t:switch(cc){case 1:cc=0,uc=null,tu(e,t,l,1)
break
case 2:if(ma(l)){cc=0,uc=null,eu(t)
break}t=function(){2===cc&&lc===e&&(cc=7),wu(e)},l.then(t,t)
break e
case 3:cc=7
break e
case 4:cc=5
break e
case 7:ma(l)?(cc=0,uc=null,eu(t)):(cc=0,uc=null,tu(e,t,l,7))
break
case 5:var i=null
switch(ic.tag){case 26:i=ic.memoizedState
case 5:case 27:var s=ic
if(!i||jd(i)){cc=0,uc=null
var c=s.sibling
if(null!==c)ic=c
else{var u=s.return
null!==u?(ic=u,nu(u)):ic=null}break t}}cc=0,uc=null,tu(e,t,l,5)
break
case 6:cc=0,uc=null,tu(e,t,l,6)
break
case 8:Wc(),hc=6
break e
default:throw Error(r(462))}}Zc()
break}catch(d){Kc(e,d)}return Ci=xi=null,I.H=a,I.A=o,oc=n,null!==ic?0:(lc=null,sc=0,_r(),hc)}(e,t):Xc(e,t,!0),l=a;;){if(0===o){fc&&!a&&Hc(e,t,0,!1)
break}if(6===o)Hc(e,t,0,!dc)
else{if(n=e.current.alternate,l&&!$c(n)){o=Xc(e,t,!1),l=!1
continue}if(2===o){if(l=t,e.errorRecoveryDisabledLanes&l)var i=0
else i=0!=(i=-536870913&e.pendingLanes)?i:536870912&i?536870912:0
if(0!==i){t=i
e:{var s=e
o=xc
var c=s.current.memoizedState.isDehydrated
if(c&&(Uc(s,i).flags|=256),2!==(i=Xc(s,i,!1))){if(pc&&!c){s.errorRecoveryDisabledLanes|=l,gc|=l,o=4
break e}l=Cc,Cc=o,null!==l&&Fc(l)}o=i}if(l=!1,2!==o)continue}}if(1===o){Uc(e,0),Hc(e,t,0,!0)
break}e:{switch(a=e,o){case 0:case 1:throw Error(r(345))
case 4:if((4194176&t)===t){Hc(a,t,bc,!dc)
break e}break
case 2:Cc=null
break
case 3:case 5:break
default:throw Error(r(329))}if(a.finishedWork=n,a.finishedLanes=t,(62914560&t)===t&&10<(l=Ec+300-pe())){if(Hc(a,t,bc,!dc),0!==_e(a,0))break e
a.timeoutHandle=od(Bc.bind(null,a,n,Cc,Nc,Sc,t,bc,gc,wc,dc,2,-0,0),l)}else Bc(a,n,Cc,Nc,Sc,t,bc,gc,wc,dc,0,-0,0)}}break}wu(e)}function Fc(e){null===Cc?Cc=e:Cc.push.apply(Cc,e)}function Bc(e,t,n,a,o,l,i,s,c,u,d,f,p){var m=t.subtreeFlags
if((8192&m||!(16785408&~m))&&(Id={stylesheets:null,count:0,unsuspend:Ad},Ds(t),null!==(t=function(){if(null===Id)throw Error(r(475))
var e=Id
return e.stylesheets&&0===e.count&&Fd(e,e.stylesheets),0<e.count?function(t){var n=setTimeout((function(){if(e.stylesheets&&Fd(e,e.stylesheets),e.unsuspend){var t=e.unsuspend
e.unsuspend=null,t()}}),6e4)
return e.unsuspend=t,function(){e.unsuspend=null,clearTimeout(n)}}:null}())))return e.cancelPendingCommit=t(au.bind(null,e,n,a,o,i,s,c,1,f,p)),void Hc(e,l,i,!u)
au(e,n,a,o,i,s,c)}function $c(e){for(var t=e;;){var n=t.tag
if((0===n||11===n||15===n)&&16384&t.flags&&null!==(n=t.updateQueue)&&null!==(n=n.stores))for(var r=0;r<n.length;r++){var a=n[r],o=a.getSnapshot
a=a.value
try{if(!Jn(o(),a))return!1}catch(l){return!1}}if(n=t.child,16384&t.subtreeFlags&&null!==n)n.return=t,t=n
else{if(t===e)break
for(;null===t.sibling;){if(null===t.return||t.return===e)return!0
t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Hc(e,t,n,r){t&=~yc,t&=~gc,e.suspendedLanes|=t,e.pingedLanes&=~t,r&&(e.warmLanes|=t),r=e.expirationTimes
for(var a=t;0<a;){var o=31-ke(a),l=1<<o
r[o]=-1,a&=~l}0!==n&&ze(e,n,t)}function Vc(){return!!(6&oc)||(xu(0),!1)}function Wc(){if(null!==ic){if(0===cc)var e=ic.return
else Ci=xi=null,So(e=ic),ba=null,wa=0,e=ic
for(;null!==e;)nc(e.alternate,e),e=e.return
ic=null}}function Uc(e,t){e.finishedWork=null,e.finishedLanes=0
var n=e.timeoutHandle;-1!==n&&(e.timeoutHandle=-1,ld(n)),null!==(n=e.cancelPendingCommit)&&(e.cancelPendingCommit=null,n()),Wc(),lc=e,ic=n=Hs(e.current,null),sc=t,cc=0,uc=null,dc=!1,fc=Le(e,t),pc=!1,wc=bc=yc=gc=vc=hc=0,Cc=xc=null,Sc=!1,8&t&&(t|=32&t)
var r=e.entangledLanes
if(0!==r)for(e=e.entanglements,r&=t;0<r;){var a=31-ke(r),o=1<<a
t|=e[a],r&=~o}return mc=t,_r(),n}function Kc(e,t){ao=null,I.H=Ml,t===da?(t=ya(),cc=3):t===fa?(t=ya(),cc=4):cc=t===ql?8:null!==t&&'object'==typeof t&&'function'==typeof t.then?6:1,uc=t,null===ic&&(hc=1,Vl(e,Fr(t,e.current)))}function Gc(){var e=I.H
return I.H=Ml,null===e?Ml:e}function qc(){var e=I.A
return I.A=rc,e}function Yc(){hc=4,dc||(4194176&sc)!==sc&&null!==Da.current||(fc=!0),!(134217727&vc)&&!(134217727&gc)||null===lc||Hc(lc,sc,bc,!1)}function Xc(e,t,n){var r=oc
oc|=2
var a=Gc(),o=qc()
lc===e&&sc===t||(Nc=null,Uc(e,t)),t=!1
var l=hc
e:for(;;)try{if(0!==cc&&null!==ic){var i=ic,s=uc
switch(cc){case 8:Wc(),l=6
break e
case 3:case 2:case 6:null===Da.current&&(t=!0)
var c=cc
if(cc=0,uc=null,tu(e,i,s,c),n&&fc){l=0
break e}break
default:c=cc,cc=0,uc=null,tu(e,i,s,c)}}Qc(),l=hc
break}catch(u){Kc(e,u)}return t&&e.shellSuspendCounter++,Ci=xi=null,oc=r,I.H=a,I.A=o,null===ic&&(lc=null,sc=0,_r()),l}function Qc(){for(;null!==ic;)Jc(ic)}function Zc(){for(;null!==ic&&!de();)Jc(ic)}function Jc(e){var t=bi(e.alternate,e,mc)
e.memoizedProps=e.pendingProps,null===t?nu(e):ic=t}function eu(e){var t=e,n=t.alternate
switch(t.tag){case 15:case 0:t=ai(n,t,t.pendingProps,t.type,void 0,sc)
break
case 11:t=ai(n,t,t.pendingProps,t.type.render,t.ref,sc)
break
case 5:So(t)
default:nc(n,t),t=bi(n,t=ic=Vs(t,mc),mc)}e.memoizedProps=e.pendingProps,null===t?nu(e):ic=t}function tu(e,t,n,a){Ci=xi=null,So(t),ba=null,wa=0
var o=t.return
try{if(function(e,t,n,a,o){if(n.flags|=32768,null!==a&&'object'==typeof a&&'function'==typeof a.then){if(null!==(t=n.alternate)&&Ri(t,n,o,!0),null!==(n=Da.current)){switch(n.tag){case 13:return null===ja?Yc():null===n.alternate&&0===hc&&(hc=3),n.flags&=-257,n.flags|=65536,n.lanes=o,a===pa?n.flags|=16384:(null===(t=n.updateQueue)?n.updateQueue=new Set([a]):t.add(a),cu(e,a,o)),!1
case 22:return n.flags|=65536,a===pa?n.flags|=16384:(null===(t=n.updateQueue)?(t={transitions:null,markerInstances:null,retryQueue:new Set([a])},n.updateQueue=t):null===(n=t.retryQueue)?t.retryQueue=new Set([a]):n.add(a),cu(e,a,o)),!1}throw Error(r(435,n.tag))}return cu(e,a,o),Yc(),!1}if(ta)return null!==(t=Da.current)?(!(65536&t.flags)&&(t.flags|=256),t.flags|=65536,t.lanes=o,a!==aa&&ua(Fr(e=Error(r(422),{cause:a}),n))):(a!==aa&&ua(Fr(t=Error(r(423),{cause:a}),n)),(e=e.current.alternate).flags|=65536,o&=-o,e.lanes|=o,a=Fr(a,n),Fi(e,o=Ul(e.stateNode,a,o)),4!==hc&&(hc=2)),!1
var l=Error(r(520),{cause:a})
if(l=Fr(l,n),null===xc?xc=[l]:xc.push(l),4!==hc&&(hc=2),null===t)return!0
a=Fr(a,n),n=t
do{switch(n.tag){case 3:return n.flags|=65536,e=o&-o,n.lanes|=e,Fi(n,e=Ul(n.stateNode,a,e)),!1
case 1:if(t=n.type,l=n.stateNode,!(128&n.flags||'function'!=typeof t.getDerivedStateFromError&&(null===l||'function'!=typeof l.componentDidCatch||null!==Rc&&Rc.has(l))))return n.flags|=65536,o&=-o,n.lanes|=o,Gl(o=Kl(o),e,n,a),Fi(n,o),!1}n=n.return}while(null!==n)
return!1}(e,o,t,n,sc))return hc=1,Vl(e,Fr(n,e.current)),void(ic=null)}catch(l){if(null!==o)throw ic=o,l
return hc=1,Vl(e,Fr(n,e.current)),void(ic=null)}32768&t.flags?(ta||1===a?e=!0:fc||536870912&sc?e=!1:(dc=e=!0,(2===a||3===a||6===a)&&null!==(a=Da.current)&&13===a.tag&&(a.flags|=16384)),ru(t,e)):nu(t)}function nu(e){var t=e
do{if(32768&t.flags)return void ru(t,dc)
e=t.return
var n=ec(t.alternate,t,mc)
if(null!==n)return void(ic=n)
if(null!==(t=t.sibling))return void(ic=t)
ic=t=e}while(null!==t)
0===hc&&(hc=5)}function ru(e,t){do{var n=tc(e.alternate,e)
if(null!==n)return n.flags&=32767,void(ic=n)
if(null!==(n=e.return)&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&null!==(e=e.sibling))return void(ic=e)
ic=e=n}while(null!==e)
hc=6,ic=null}function au(e,t,n,a,o,l,i,s,c,u){var d=I.T,f=G.p
try{G.p=2,I.T=null,function(e,t,n,a,o,l,i,s){do{lu()}while(null!==Tc)
if(6&oc)throw Error(r(327))
var c=e.finishedWork
if(a=e.finishedLanes,null===c)return null
if(e.finishedWork=null,e.finishedLanes=0,c===e.current)throw Error(r(177))
e.callbackNode=null,e.callbackPriority=0,e.cancelPendingCommit=null
var u=c.lanes|c.childLanes
if(function(e,t,n,r,a,o){var l=e.pendingLanes
e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0
var i=e.entanglements,s=e.expirationTimes,c=e.hiddenUpdates
for(n=l&~n;0<n;){var u=31-ke(n),d=1<<u
i[u]=0,s[u]=-1
var f=c[u]
if(null!==f)for(c[u]=null,u=0;u<f.length;u++){var p=f[u]
null!==p&&(p.lane&=-536870913)}n&=~d}0!==r&&ze(e,r,0),0!==o&&0===a&&0!==e.tag&&(e.suspendedLanes|=o&~(l&~t))}(e,a,u|=Mr,l,i,s),e===lc&&(ic=lc=null,sc=0),!(10256&c.subtreeFlags)&&!(10256&c.flags)||Pc||(Pc=!0,_c=u,Lc=n,ce(ge,(function(){return lu(),null}))),n=!!(15990&c.flags),15990&c.subtreeFlags||n?(n=I.T,I.T=null,l=G.p,G.p=2,i=oc,oc|=4,function(e,t){if(e=e.containerInfo,Zu=Yd,or(e=ar(e))){if('selectionStart'in e)var n={start:e.selectionStart,end:e.selectionEnd}
else e:{var a=(n=(n=e.ownerDocument)&&n.defaultView||window).getSelection&&n.getSelection()
if(a&&0!==a.rangeCount){n=a.anchorNode
var o=a.anchorOffset,l=a.focusNode
a=a.focusOffset
try{n.nodeType,l.nodeType}catch(v){n=null
break e}var i=0,s=-1,c=-1,u=0,d=0,f=e,p=null
t:for(;;){for(var m;f!==n||0!==o&&3!==f.nodeType||(s=i+o),f!==l||0!==a&&3!==f.nodeType||(c=i+a),3===f.nodeType&&(i+=f.nodeValue.length),null!==(m=f.firstChild);)p=f,f=m
for(;;){if(f===e)break t
if(p===n&&++u===o&&(s=i),p===l&&++d===a&&(c=i),null!==(m=f.nextSibling))break
p=(f=p).parentNode}f=m}n=-1===s||-1===c?null:{start:s,end:c}}else n=null}n=n||{start:0,end:0}}else n=null
for(Ju={focusedElem:e,selectionRange:n},Yd=!1,is=t;null!==is;)if(e=(t=is).child,1028&t.subtreeFlags&&null!==e)e.return=t,is=e
else for(;null!==is;){switch(l=(t=is).alternate,e=t.flags,t.tag){case 0:case 11:case 15:case 5:case 26:case 27:case 6:case 4:case 17:break
case 1:if(1024&e&&null!==l){e=void 0,n=t,o=l.memoizedProps,l=l.memoizedState,a=n.stateNode
try{var h=zl(n.type,o,(n.elementType,n.type))
e=a.getSnapshotBeforeUpdate(h,l),a.__reactInternalSnapshotBeforeUpdate=e}catch(g){su(n,n.return,g)}}break
case 3:if(1024&e)if(9===(n=(e=t.stateNode.containerInfo).nodeType))dd(e)
else if(1===n)switch(e.nodeName){case'HEAD':case'HTML':case'BODY':dd(e)
break
default:e.textContent=''}break
default:if(1024&e)throw Error(r(163))}if(null!==(e=t.sibling)){e.return=t.return,is=e
break}is=t.return}h=ss,ss=!1}(e,c),bs(c,e),lr(Ju,e.containerInfo),Yd=!!Zu,Ju=Zu=null,e.current=c,cs(e,c.alternate,c),fe(),oc=i,G.p=l,I.T=n):e.current=c,Pc?(Pc=!1,Tc=e,Mc=a):ou(e,u),0===(u=e.pendingLanes)&&(Rc=null),function(e){if(Se&&'function'==typeof Se.onCommitFiberRoot)try{Se.onCommitFiberRoot(Ce,e,void 0,!(128&~e.current.flags))}catch(t){}}(c.stateNode),wu(e),null!==t)for(o=e.onRecoverableError,c=0;c<t.length;c++)o((u=t[c]).value,{componentStack:u.stack})
!!(3&Mc)&&lu(),u=e.pendingLanes,4194218&a&&42&u?e===jc?Dc++:(Dc=0,jc=e):Dc=0,xu(0)}(e,t,n,a,f,o,l,i)}finally{I.T=d,G.p=f}}function ou(e,t){0==(e.pooledCacheLanes&=t)&&null!=(t=e.pooledCache)&&(e.pooledCache=null,Ka(t))}function lu(){if(null!==Tc){var e=Tc,t=_c
_c=0
var n=Be(Mc),a=I.T,o=G.p
try{if(G.p=32>n?32:n,I.T=null,null===Tc)var l=!1
else{n=Lc,Lc=null
var i=Tc,s=Mc
if(Tc=null,Mc=0,6&oc)throw Error(r(331))
var c=oc
if(oc|=4,As(i.current),Ps(i,i.current,s,n),oc=c,xu(0),Se&&'function'==typeof Se.onPostCommitFiberRoot)try{Se.onPostCommitFiberRoot(Ce,i)}catch(u){}l=!0}return l}finally{G.p=o,I.T=a,ou(e,t)}}return!1}function iu(e,t,n){t=Fr(n,t),null!==(e=Oi(e,t=Ul(e.stateNode,t,2),2))&&(Oe(e,2),wu(e))}function su(e,t,n){if(3===e.tag)iu(e,e,n)
else for(;null!==t;){if(3===t.tag){iu(t,e,n)
break}if(1===t.tag){var r=t.stateNode
if('function'==typeof t.type.getDerivedStateFromError||'function'==typeof r.componentDidCatch&&(null===Rc||!Rc.has(r))){e=Fr(n,e),null!==(r=Oi(t,n=Kl(2),2))&&(Gl(n,r,t,e),Oe(r,2),wu(r))
break}}t=t.return}}function cu(e,t,n){var r=e.pingCache
if(null===r){r=e.pingCache=new ac
var a=new Set
r.set(t,a)}else void 0===(a=r.get(t))&&(a=new Set,r.set(t,a))
a.has(n)||(pc=!0,a.add(n),e=uu.bind(null,e,t,n),t.then(e,e))}function uu(e,t,n){var r=e.pingCache
null!==r&&r.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,lc===e&&(sc&n)===n&&(4===hc||3===hc&&(62914560&sc)===sc&&300>pe()-Ec?!(2&oc)&&Uc(e,0):yc|=n,wc===sc&&(wc=0)),wu(e)}function du(e,t){0===t&&(t=Ie()),null!==(e=jr(e,t))&&(Oe(e,t),wu(e))}function fu(e){var t=e.memoizedState,n=0
null!==t&&(n=t.retryLane),du(e,n)}function pu(e,t){var n=0
switch(e.tag){case 13:var a=e.stateNode,o=e.memoizedState
null!==o&&(n=o.retryLane)
break
case 19:a=e.stateNode
break
case 22:a=e.stateNode._retryCache
break
default:throw Error(r(314))}null!==a&&a.delete(t),du(e,n)}var mu=null,hu=null,vu=!1,gu=!1,yu=!1,bu=0
function wu(e){var t
e!==hu&&null===e.next&&(null===hu?mu=hu=e:hu=hu.next=e),gu=!0,vu||(vu=!0,t=Cu,sd((function(){6&oc?ce(he,t):t()})))}function xu(e,t){if(!yu&&gu){yu=!0
do{for(var n=!1,r=mu;null!==r;){if(0!==e){var a=r.pendingLanes
if(0===a)var o=0
else{var l=r.suspendedLanes,i=r.pingedLanes
o=(1<<31-ke(42|e)+1)-1,o=201326677&(o&=a&~(l&~i))?201326677&o|1:o?2|o:0}0!==o&&(n=!0,ku(r,o))}else o=sc,!(3&(o=_e(r,r===lc?o:0)))||Le(r,o)||(n=!0,ku(r,o))
r=r.next}}while(n)
yu=!1}}function Cu(){gu=vu=!1
var e,t=0
0!==bu&&(((e=window.event)&&'popstate'===e.type?e!==ad&&(ad=e,!0):(ad=null,!1))&&(t=bu),bu=0)
for(var n=pe(),r=null,a=mu;null!==a;){var o=a.next,l=Su(a,n)
0===l?(a.next=null,null===r?mu=o:r.next=o,null===o&&(hu=r)):(r=a,(0!==t||3&l)&&(gu=!0)),a=o}xu(t)}function Su(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,a=e.expirationTimes,o=-62914561&e.pendingLanes;0<o;){var l=31-ke(o),i=1<<l,s=a[l];-1===s?i&n&&!(i&r)||(a[l]=De(i,t)):s<=t&&(e.expiredLanes|=i),o&=~i}if(n=sc,n=_e(e,e===(t=lc)?n:0),r=e.callbackNode,0===n||e===t&&2===cc||null!==e.cancelPendingCommit)return null!==r&&null!==r&&ue(r),e.callbackNode=null,e.callbackPriority=0
if(!(3&n)||Le(e,n)){if((t=n&-n)===e.callbackPriority)return t
switch(null!==r&&ue(r),Be(n)){case 2:case 8:n=ve
break
case 32:default:n=ge
break
case 268435456:n=be}return r=Eu.bind(null,e),n=ce(n,r),e.callbackPriority=t,e.callbackNode=n,t}return null!==r&&null!==r&&ue(r),e.callbackPriority=2,e.callbackNode=null,2}function Eu(e,t){var n=e.callbackNode
if(lu()&&e.callbackNode!==n)return null
var r=sc
return 0===(r=_e(e,e===lc?r:0))?null:(zc(e,r,t),Su(e,pe()),null!=e.callbackNode&&e.callbackNode===n?Eu.bind(null,e):null)}function ku(e,t){if(lu())return null
zc(e,t,!0)}function Nu(){return 0===bu&&(bu=je()),bu}function Ru(e){return null==e||'symbol'==typeof e||'boolean'==typeof e?null:'function'==typeof e?e:jt(''+e)}function Pu(e,t){var n=t.ownerDocument.createElement('input')
return n.name=t.name,n.value=t.value,e.id&&n.setAttribute('form',e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}for(var Tu=0;Tu<Nr.length;Tu++){var Mu=Nr[Tu]
Rr(Mu.toLowerCase(),'on'+(Mu[0].toUpperCase()+Mu.slice(1)))}Rr(yr,'onAnimationEnd'),Rr(br,'onAnimationIteration'),Rr(wr,'onAnimationStart'),Rr('dblclick','onDoubleClick'),Rr('focusin','onFocus'),Rr('focusout','onBlur'),Rr(xr,'onTransitionRun'),Rr(Cr,'onTransitionStart'),Rr(Sr,'onTransitionCancel'),Rr(Er,'onTransitionEnd'),lt('onMouseEnter',['mouseout','mouseover']),lt('onMouseLeave',['mouseout','mouseover']),lt('onPointerEnter',['pointerout','pointerover']),lt('onPointerLeave',['pointerout','pointerover']),ot('onChange','change click focusin focusout input keydown keyup selectionchange'.split(' ')),ot('onSelect','focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange'.split(' ')),ot('onBeforeInput',['compositionend','keypress','textInput','paste']),ot('onCompositionEnd','compositionend focusout keydown keypress keyup mousedown'.split(' ')),ot('onCompositionStart','compositionstart focusout keydown keypress keyup mousedown'.split(' ')),ot('onCompositionUpdate','compositionupdate focusout keydown keypress keyup mousedown'.split(' '))
var _u='abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting'.split(' '),Lu=new Set('beforetoggle cancel close invalid load scroll scrollend toggle'.split(' ').concat(_u))
function Du(e,t){t=!!(4&t)
for(var n=0;n<e.length;n++){var r=e[n],a=r.event
r=r.listeners
e:{var o=void 0
if(t)for(var l=r.length-1;0<=l;l--){var i=r[l],s=i.instance,c=i.currentTarget
if(i=i.listener,s!==o&&a.isPropagationStopped())break e
o=i,a.currentTarget=c
try{o(a)}catch(u){Fl(u)}a.currentTarget=null,o=s}else for(l=0;l<r.length;l++){if(s=(i=r[l]).instance,c=i.currentTarget,i=i.listener,s!==o&&a.isPropagationStopped())break e
o=i,a.currentTarget=c
try{o(a)}catch(u){Fl(u)}a.currentTarget=null,o=s}}}}function ju(e,t){var n=t[Ke]
void 0===n&&(n=t[Ke]=new Set)
var r=e+'__bubble'
n.has(r)||(zu(t,e,2,!1),n.add(r))}function Iu(e,t,n){var r=0
t&&(r|=4),zu(n,e,r,t)}var Au='_reactListening'+Math.random().toString(36).slice(2)
function Ou(e){if(!e[Au]){e[Au]=!0,rt.forEach((function(t){'selectionchange'!==t&&(Lu.has(t)||Iu(t,!1,e),Iu(t,!0,e))}))
var t=9===e.nodeType?e:e.ownerDocument
null===t||t[Au]||(t[Au]=!0,Iu('selectionchange',!1,t))}}function zu(e,t,n,r){switch(nf(t)){case 2:var a=Xd
break
case 8:a=Qd
break
default:a=Zd}n=a.bind(null,t,n,e),a=void 0,!Vt||'touchstart'!==t&&'touchmove'!==t&&'wheel'!==t||(a=!0),r?void 0!==a?e.addEventListener(t,n,{capture:!0,passive:a}):e.addEventListener(t,n,!0):void 0!==a?e.addEventListener(t,n,{passive:a}):e.addEventListener(t,n,!1)}function Fu(e,t,n,r,a){var o=r
if(!(1&t||2&t||null===r))e:for(;;){if(null===r)return
var l=r.tag
if(3===l||4===l){var i=r.stateNode.containerInfo
if(i===a||8===i.nodeType&&i.parentNode===a)break
if(4===l)for(l=r.return;null!==l;){var s=l.tag
if((3===s||4===s)&&((s=l.stateNode.containerInfo)===a||8===s.nodeType&&s.parentNode===a))return
l=l.return}for(;null!==i;){if(null===(l=Ze(i)))return
if(5===(s=l.tag)||6===s||26===s||27===s){r=o=l
continue e}i=i.parentNode}}r=r.return}$t((function(){var r=o,a=At(n),l=[]
e:{var i=kr.get(e)
if(void 0!==i){var s=rn,c=e
switch(e){case'keypress':if(0===Yt(n))break e
case'keydown':case'keyup':s=bn
break
case'focusin':c='focus',s=un
break
case'focusout':c='blur',s=un
break
case'beforeblur':case'afterblur':s=un
break
case'click':if(2===n.button)break e
case'auxclick':case'dblclick':case'mousedown':case'mousemove':case'mouseup':case'mouseout':case'mouseover':case'contextmenu':s=sn
break
case'drag':case'dragend':case'dragenter':case'dragexit':case'dragleave':case'dragover':case'dragstart':case'drop':s=cn
break
case'touchcancel':case'touchend':case'touchmove':case'touchstart':s=xn
break
case yr:case br:case wr:s=dn
break
case Er:s=Cn
break
case'scroll':case'scrollend':s=on
break
case'wheel':s=Sn
break
case'copy':case'cut':case'paste':s=fn
break
case'gotpointercapture':case'lostpointercapture':case'pointercancel':case'pointerdown':case'pointermove':case'pointerout':case'pointerover':case'pointerup':s=wn
break
case'toggle':case'beforetoggle':s=En}var u=!!(4&t),d=!u&&('scroll'===e||'scrollend'===e),f=u?null!==i?i+'Capture':null:i
u=[]
for(var p,m=r;null!==m;){var h=m
if(p=h.stateNode,5!==(h=h.tag)&&26!==h&&27!==h||null===p||null===f||null!=(h=Ht(m,f))&&u.push(Bu(m,h,p)),d)break
m=m.return}0<u.length&&(i=new s(i,c,null,n,a),l.push({event:i,listeners:u}))}}if(!(7&t)){if(s='mouseout'===e||'pointerout'===e,(!(i='mouseover'===e||'pointerover'===e)||n===It||!(c=n.relatedTarget||n.fromElement)||!Ze(c)&&!c[Ue])&&(s||i)&&(i=a.window===a?a:(i=a.ownerDocument)?i.defaultView||i.parentWindow:window,s?(s=r,null!==(c=(c=n.relatedTarget||n.toElement)?Ze(c):null)&&(d=H(c),u=c.tag,c!==d||5!==u&&27!==u&&6!==u)&&(c=null)):(s=null,c=r),s!==c)){if(u=sn,h='onMouseLeave',f='onMouseEnter',m='mouse','pointerout'!==e&&'pointerover'!==e||(u=wn,h='onPointerLeave',f='onPointerEnter',m='pointer'),d=null==s?i:et(s),p=null==c?i:et(c),(i=new u(h,m+'leave',s,n,a)).target=d,i.relatedTarget=p,h=null,Ze(a)===r&&((u=new u(f,m+'enter',c,n,a)).target=p,u.relatedTarget=d,h=u),d=h,s&&c)e:{for(f=c,m=0,p=u=s;p;p=Hu(p))m++
for(p=0,h=f;h;h=Hu(h))p++
for(;0<m-p;)u=Hu(u),m--
for(;0<p-m;)f=Hu(f),p--
for(;m--;){if(u===f||null!==f&&u===f.alternate)break e
u=Hu(u),f=Hu(f)}u=null}else u=null
null!==s&&Vu(l,i,s,u,!1),null!==c&&null!==d&&Vu(l,d,c,u,!0)}if('select'===(s=(i=r?et(r):window).nodeName&&i.nodeName.toLowerCase())||'input'===s&&'file'===i.type)var v=Hn
else if(An(i))if(Vn)v=Zn
else{v=Xn
var g=Yn}else!(s=i.nodeName)||'input'!==s.toLowerCase()||'checkbox'!==i.type&&'radio'!==i.type?r&&_t(r.elementType)&&(v=Hn):v=Qn
switch(v&&(v=v(e,r))?On(l,v,n,a):(g&&g(e,i,r),'focusout'===e&&r&&'number'===i.type&&null!=r.memoizedProps.value&&St(i,'number',i.value)),g=r?et(r):window,e){case'focusin':(An(g)||'true'===g.contentEditable)&&(sr=g,cr=r,ur=null)
break
case'focusout':ur=cr=sr=null
break
case'mousedown':dr=!0
break
case'contextmenu':case'mouseup':case'dragend':dr=!1,fr(l,n,a)
break
case'selectionchange':if(ir)break
case'keydown':case'keyup':fr(l,n,a)}var y
if(Nn)e:{switch(e){case'compositionstart':var b='onCompositionStart'
break e
case'compositionend':b='onCompositionEnd'
break e
case'compositionupdate':b='onCompositionUpdate'
break e}b=void 0}else jn?Ln(e,n)&&(b='onCompositionEnd'):'keydown'===e&&229===n.keyCode&&(b='onCompositionStart')
b&&(Tn&&'ko'!==n.locale&&(jn||'onCompositionStart'!==b?'onCompositionEnd'===b&&jn&&(y=qt()):(Kt='value'in(Ut=a)?Ut.value:Ut.textContent,jn=!0)),0<(g=$u(r,b)).length&&(b=new pn(b,e,null,n,a),l.push({event:b,listeners:g}),(y||null!==(y=Dn(n)))&&(b.data=y))),(y=Pn?function(e,t){switch(e){case'compositionend':return Dn(t)
case'keypress':return 32!==t.which?null:(_n=!0,Mn)
case'textInput':return(e=t.data)===Mn&&_n?null:e
default:return null}}(e,n):function(e,t){if(jn)return'compositionend'===e||!Nn&&Ln(e,t)?(e=qt(),Gt=Kt=Ut=null,jn=!1,e):null
switch(e){case'paste':default:return null
case'keypress':if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char
if(t.which)return String.fromCharCode(t.which)}return null
case'compositionend':return Tn&&'ko'!==t.locale?null:t.data}}(e,n))&&0<(b=$u(r,'onBeforeInput')).length&&(g=new pn('onBeforeInput','beforeinput',null,n,a),l.push({event:g,listeners:b}),g.data=y),function(e,t,n,r,a){if('submit'===t&&n&&n.stateNode===a){var o=Ru((a[We]||null).action),l=r.submitter
l&&null!==(t=(t=l[We]||null)?Ru(t.formAction):l.getAttribute('formAction'))&&(o=t,l=null)
var i=new rn('action','action',null,r,a)
e.push({event:i,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(0!==bu){var e=l?Pu(a,l):new FormData(a)
vl(n,{pending:!0,data:e,method:a.method,action:o},null,e)}}else'function'==typeof o&&(i.preventDefault(),e=l?Pu(a,l):new FormData(a),vl(n,{pending:!0,data:e,method:a.method,action:o},o,e))},currentTarget:a}]})}}(l,e,r,n,a)}Du(l,t)}))}function Bu(e,t,n){return{instance:e,listener:t,currentTarget:n}}function $u(e,t){for(var n=t+'Capture',r=[];null!==e;){var a=e,o=a.stateNode
5!==(a=a.tag)&&26!==a&&27!==a||null===o||(null!=(a=Ht(e,n))&&r.unshift(Bu(e,a,o)),null!=(a=Ht(e,t))&&r.push(Bu(e,a,o))),e=e.return}return r}function Hu(e){if(null===e)return null
do{e=e.return}while(e&&5!==e.tag&&27!==e.tag)
return e||null}function Vu(e,t,n,r,a){for(var o=t._reactName,l=[];null!==n&&n!==r;){var i=n,s=i.alternate,c=i.stateNode
if(i=i.tag,null!==s&&s===r)break
5!==i&&26!==i&&27!==i||null===c||(s=c,a?null!=(c=Ht(n,o))&&l.unshift(Bu(n,c,s)):a||null!=(c=Ht(n,o))&&l.push(Bu(n,c,s))),n=n.return}0!==l.length&&e.push({event:t,listeners:l})}var Wu=/\r\n?/g,Uu=/\u0000|\uFFFD/g
function Ku(e){return('string'==typeof e?e:''+e).replace(Wu,'\n').replace(Uu,'')}function Gu(e,t){return t=Ku(t),Ku(e)===t}function qu(){}function Yu(e,t,n,a,o,l){switch(n){case'children':'string'==typeof a?'body'===t||'textarea'===t&&''===a||Rt(e,a):('number'==typeof a||'bigint'==typeof a)&&'body'!==t&&Rt(e,''+a)
break
case'className':ft(e,'class',a)
break
case'tabIndex':ft(e,'tabindex',a)
break
case'dir':case'role':case'viewBox':case'width':case'height':ft(e,n,a)
break
case'style':Mt(e,a,l)
break
case'data':if('object'!==t){ft(e,'data',a)
break}case'src':case'href':if(''===a&&('a'!==t||'href'!==n)){e.removeAttribute(n)
break}if(null==a||'function'==typeof a||'symbol'==typeof a||'boolean'==typeof a){e.removeAttribute(n)
break}a=jt(''+a),e.setAttribute(n,a)
break
case'action':case'formAction':if('function'==typeof a){e.setAttribute(n,'javascript:throw new Error(\'A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().\')')
break}if('function'==typeof l&&('formAction'===n?('input'!==t&&Yu(e,t,'name',o.name,o,null),Yu(e,t,'formEncType',o.formEncType,o,null),Yu(e,t,'formMethod',o.formMethod,o,null),Yu(e,t,'formTarget',o.formTarget,o,null)):(Yu(e,t,'encType',o.encType,o,null),Yu(e,t,'method',o.method,o,null),Yu(e,t,'target',o.target,o,null))),null==a||'symbol'==typeof a||'boolean'==typeof a){e.removeAttribute(n)
break}a=jt(''+a),e.setAttribute(n,a)
break
case'onClick':null!=a&&(e.onclick=qu)
break
case'onScroll':null!=a&&ju('scroll',e)
break
case'onScrollEnd':null!=a&&ju('scrollend',e)
break
case'dangerouslySetInnerHTML':if(null!=a){if('object'!=typeof a||!('__html'in a))throw Error(r(61))
if(null!=(n=a.__html)){if(null!=o.children)throw Error(r(60))
e.innerHTML=n}}break
case'multiple':e.multiple=a&&'function'!=typeof a&&'symbol'!=typeof a
break
case'muted':e.muted=a&&'function'!=typeof a&&'symbol'!=typeof a
break
case'suppressContentEditableWarning':case'suppressHydrationWarning':case'defaultValue':case'defaultChecked':case'innerHTML':case'ref':case'autoFocus':break
case'xlinkHref':if(null==a||'function'==typeof a||'boolean'==typeof a||'symbol'==typeof a){e.removeAttribute('xlink:href')
break}n=jt(''+a),e.setAttributeNS('http://www.w3.org/1999/xlink','xlink:href',n)
break
case'contentEditable':case'spellCheck':case'draggable':case'value':case'autoReverse':case'externalResourcesRequired':case'focusable':case'preserveAlpha':null!=a&&'function'!=typeof a&&'symbol'!=typeof a?e.setAttribute(n,''+a):e.removeAttribute(n)
break
case'inert':case'allowFullScreen':case'async':case'autoPlay':case'controls':case'default':case'defer':case'disabled':case'disablePictureInPicture':case'disableRemotePlayback':case'formNoValidate':case'hidden':case'loop':case'noModule':case'noValidate':case'open':case'playsInline':case'readOnly':case'required':case'reversed':case'scoped':case'seamless':case'itemScope':a&&'function'!=typeof a&&'symbol'!=typeof a?e.setAttribute(n,''):e.removeAttribute(n)
break
case'capture':case'download':!0===a?e.setAttribute(n,''):!1!==a&&null!=a&&'function'!=typeof a&&'symbol'!=typeof a?e.setAttribute(n,a):e.removeAttribute(n)
break
case'cols':case'rows':case'size':case'span':null!=a&&'function'!=typeof a&&'symbol'!=typeof a&&!isNaN(a)&&1<=a?e.setAttribute(n,a):e.removeAttribute(n)
break
case'rowSpan':case'start':null==a||'function'==typeof a||'symbol'==typeof a||isNaN(a)?e.removeAttribute(n):e.setAttribute(n,a)
break
case'popover':ju('beforetoggle',e),ju('toggle',e),dt(e,'popover',a)
break
case'xlinkActuate':pt(e,'http://www.w3.org/1999/xlink','xlink:actuate',a)
break
case'xlinkArcrole':pt(e,'http://www.w3.org/1999/xlink','xlink:arcrole',a)
break
case'xlinkRole':pt(e,'http://www.w3.org/1999/xlink','xlink:role',a)
break
case'xlinkShow':pt(e,'http://www.w3.org/1999/xlink','xlink:show',a)
break
case'xlinkTitle':pt(e,'http://www.w3.org/1999/xlink','xlink:title',a)
break
case'xlinkType':pt(e,'http://www.w3.org/1999/xlink','xlink:type',a)
break
case'xmlBase':pt(e,'http://www.w3.org/XML/1998/namespace','xml:base',a)
break
case'xmlLang':pt(e,'http://www.w3.org/XML/1998/namespace','xml:lang',a)
break
case'xmlSpace':pt(e,'http://www.w3.org/XML/1998/namespace','xml:space',a)
break
case'is':dt(e,'is',a)
break
case'innerText':case'textContent':break
default:(!(2<n.length)||'o'!==n[0]&&'O'!==n[0]||'n'!==n[1]&&'N'!==n[1])&&dt(e,n=Lt.get(n)||n,a)}}function Xu(e,t,n,a,o,l){switch(n){case'style':Mt(e,a,l)
break
case'dangerouslySetInnerHTML':if(null!=a){if('object'!=typeof a||!('__html'in a))throw Error(r(61))
if(null!=(n=a.__html)){if(null!=o.children)throw Error(r(60))
e.innerHTML=n}}break
case'children':'string'==typeof a?Rt(e,a):('number'==typeof a||'bigint'==typeof a)&&Rt(e,''+a)
break
case'onScroll':null!=a&&ju('scroll',e)
break
case'onScrollEnd':null!=a&&ju('scrollend',e)
break
case'onClick':null!=a&&(e.onclick=qu)
break
case'suppressContentEditableWarning':case'suppressHydrationWarning':case'innerHTML':case'ref':case'innerText':case'textContent':break
default:at.hasOwnProperty(n)||('o'!==n[0]||'n'!==n[1]||(o=n.endsWith('Capture'),t=n.slice(2,o?n.length-7:void 0),'function'==typeof(l=null!=(l=e[We]||null)?l[n]:null)&&e.removeEventListener(t,l,o),'function'!=typeof a)?n in e?e[n]=a:!0===a?e.setAttribute(n,''):dt(e,n,a):('function'!=typeof l&&null!==l&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,a,o)))}}function Qu(e,t,n){switch(t){case'div':case'span':case'svg':case'path':case'a':case'g':case'p':case'li':break
case'img':ju('error',e),ju('load',e)
var a,o=!1,l=!1
for(a in n)if(n.hasOwnProperty(a)){var i=n[a]
if(null!=i)switch(a){case'src':o=!0
break
case'srcSet':l=!0
break
case'children':case'dangerouslySetInnerHTML':throw Error(r(137,t))
default:Yu(e,t,a,i,n,null)}}return l&&Yu(e,t,'srcSet',n.srcSet,n,null),void(o&&Yu(e,t,'src',n.src,n,null))
case'input':ju('invalid',e)
var s=a=i=l=null,c=null,u=null
for(o in n)if(n.hasOwnProperty(o)){var d=n[o]
if(null!=d)switch(o){case'name':l=d
break
case'type':i=d
break
case'checked':c=d
break
case'defaultChecked':u=d
break
case'value':a=d
break
case'defaultValue':s=d
break
case'children':case'dangerouslySetInnerHTML':if(null!=d)throw Error(r(137,t))
break
default:Yu(e,t,o,d,n,null)}}return Ct(e,a,s,c,u,i,l,!1),void vt(e)
case'select':for(l in ju('invalid',e),o=i=a=null,n)if(n.hasOwnProperty(l)&&null!=(s=n[l]))switch(l){case'value':a=s
break
case'defaultValue':i=s
break
case'multiple':o=s
default:Yu(e,t,l,s,n,null)}return t=a,n=i,e.multiple=!!o,void(null!=t?Et(e,!!o,t,!1):null!=n&&Et(e,!!o,n,!0))
case'textarea':for(i in ju('invalid',e),a=l=o=null,n)if(n.hasOwnProperty(i)&&null!=(s=n[i]))switch(i){case'value':o=s
break
case'defaultValue':l=s
break
case'children':a=s
break
case'dangerouslySetInnerHTML':if(null!=s)throw Error(r(91))
break
default:Yu(e,t,i,s,n,null)}return Nt(e,o,l,a),void vt(e)
case'option':for(c in n)n.hasOwnProperty(c)&&null!=(o=n[c])&&('selected'===c?e.selected=o&&'function'!=typeof o&&'symbol'!=typeof o:Yu(e,t,c,o,n,null))
return
case'dialog':ju('cancel',e),ju('close',e)
break
case'iframe':case'object':ju('load',e)
break
case'video':case'audio':for(o=0;o<_u.length;o++)ju(_u[o],e)
break
case'image':ju('error',e),ju('load',e)
break
case'details':ju('toggle',e)
break
case'embed':case'source':case'link':ju('error',e),ju('load',e)
case'area':case'base':case'br':case'col':case'hr':case'keygen':case'meta':case'param':case'track':case'wbr':case'menuitem':for(u in n)if(n.hasOwnProperty(u)&&null!=(o=n[u]))switch(u){case'children':case'dangerouslySetInnerHTML':throw Error(r(137,t))
default:Yu(e,t,u,o,n,null)}return
default:if(_t(t)){for(d in n)n.hasOwnProperty(d)&&void 0!==(o=n[d])&&Xu(e,t,d,o,n,void 0)
return}}for(s in n)n.hasOwnProperty(s)&&null!=(o=n[s])&&Yu(e,t,s,o,n,null)}var Zu=null,Ju=null
function ed(e){return 9===e.nodeType?e:e.ownerDocument}function td(e){switch(e){case'http://www.w3.org/2000/svg':return 1
case'http://www.w3.org/1998/Math/MathML':return 2
default:return 0}}function nd(e,t){if(0===e)switch(t){case'svg':return 1
case'math':return 2
default:return 0}return 1===e&&'foreignObject'===t?0:e}function rd(e,t){return'textarea'===e||'noscript'===e||'string'==typeof t.children||'number'==typeof t.children||'bigint'==typeof t.children||'object'==typeof t.dangerouslySetInnerHTML&&null!==t.dangerouslySetInnerHTML&&null!=t.dangerouslySetInnerHTML.__html}var ad=null,od='function'==typeof setTimeout?setTimeout:void 0,ld='function'==typeof clearTimeout?clearTimeout:void 0,id='function'==typeof Promise?Promise:void 0,sd='function'==typeof queueMicrotask?queueMicrotask:void 0!==id?function(e){return id.resolve(null).then(e).catch(cd)}:od
function cd(e){setTimeout((function(){throw e}))}function ud(e,t){var n=t,r=0
do{var a=n.nextSibling
if(e.removeChild(n),a&&8===a.nodeType)if('/$'===(n=a.data)){if(0===r)return e.removeChild(a),void xf(t)
r--}else'$'!==n&&'$?'!==n&&'$!'!==n||r++
n=a}while(n)
xf(t)}function dd(e){var t=e.firstChild
for(t&&10===t.nodeType&&(t=t.nextSibling);t;){var n=t
switch(t=t.nextSibling,n.nodeName){case'HTML':case'HEAD':case'BODY':dd(n),Qe(n)
continue
case'SCRIPT':case'STYLE':continue
case'LINK':if('stylesheet'===n.rel.toLowerCase())continue}e.removeChild(n)}}function fd(e){for(;null!=e;e=e.nextSibling){var t=e.nodeType
if(1===t||3===t)break
if(8===t){if('$'===(t=e.data)||'$!'===t||'$?'===t||'F!'===t||'F'===t)break
if('/$'===t)return null}}return e}function pd(e){e=e.previousSibling
for(var t=0;e;){if(8===e.nodeType){var n=e.data
if('$'===n||'$!'===n||'$?'===n){if(0===t)return e
t--}else'/$'===n&&t++}e=e.previousSibling}return null}function md(e,t,n){switch(t=ed(n),e){case'html':if(!(e=t.documentElement))throw Error(r(452))
return e
case'head':if(!(e=t.head))throw Error(r(453))
return e
case'body':if(!(e=t.body))throw Error(r(454))
return e
default:throw Error(r(451))}}var hd=new Map,vd=new Set
function gd(e){return'function'==typeof e.getRootNode?e.getRootNode():e.ownerDocument}var yd=G.d
G.d={f:function(){var e=yd.f(),t=Vc()
return e||t},r:function(e){var t=Je(e)
null!==t&&5===t.tag&&'form'===t.type?yl(t):yd.r(e)},D:function(e){yd.D(e),wd('dns-prefetch',e,null)},C:function(e,t){yd.C(e,t),wd('preconnect',e,t)},L:function(e,t,n){yd.L(e,t,n)
var r=bd
if(r&&e&&t){var a='link[rel="preload"][as="'+wt(t)+'"]'
'image'===t&&n&&n.imageSrcSet?(a+='[imagesrcset="'+wt(n.imageSrcSet)+'"]','string'==typeof n.imageSizes&&(a+='[imagesizes="'+wt(n.imageSizes)+'"]')):a+='[href="'+wt(e)+'"]'
var o=a
switch(t){case'style':o=Cd(e)
break
case'script':o=kd(e)}hd.has(o)||(e=A({rel:'preload',href:'image'===t&&n&&n.imageSrcSet?void 0:e,as:t},n),hd.set(o,e),null!==r.querySelector(a)||'style'===t&&r.querySelector(Sd(o))||'script'===t&&r.querySelector(Nd(o))||(Qu(t=r.createElement('link'),'link',e),nt(t),r.head.appendChild(t)))}},m:function(e,t){yd.m(e,t)
var n=bd
if(n&&e){var r=t&&'string'==typeof t.as?t.as:'script',a='link[rel="modulepreload"][as="'+wt(r)+'"][href="'+wt(e)+'"]',o=a
switch(r){case'audioworklet':case'paintworklet':case'serviceworker':case'sharedworker':case'worker':case'script':o=kd(e)}if(!hd.has(o)&&(e=A({rel:'modulepreload',href:e},t),hd.set(o,e),null===n.querySelector(a))){switch(r){case'audioworklet':case'paintworklet':case'serviceworker':case'sharedworker':case'worker':case'script':if(n.querySelector(Nd(o)))return}Qu(r=n.createElement('link'),'link',e),nt(r),n.head.appendChild(r)}}},X:function(e,t){yd.X(e,t)
var n=bd
if(n&&e){var r=tt(n).hoistableScripts,a=kd(e),o=r.get(a)
o||((o=n.querySelector(Nd(a)))||(e=A({src:e,async:!0},t),(t=hd.get(a))&&Md(e,t),nt(o=n.createElement('script')),Qu(o,'link',e),n.head.appendChild(o)),o={type:'script',instance:o,count:1,state:null},r.set(a,o))}},S:function(e,t,n){yd.S(e,t,n)
var r=bd
if(r&&e){var a=tt(r).hoistableStyles,o=Cd(e)
t=t||'default'
var l=a.get(o)
if(!l){var i={loading:0,preload:null}
if(l=r.querySelector(Sd(o)))i.loading=5
else{e=A({rel:'stylesheet',href:e,'data-precedence':t},n),(n=hd.get(o))&&Td(e,n)
var s=l=r.createElement('link')
nt(s),Qu(s,'link',e),s._p=new Promise((function(e,t){s.onload=e,s.onerror=t})),s.addEventListener('load',(function(){i.loading|=1})),s.addEventListener('error',(function(){i.loading|=2})),i.loading|=4,Pd(l,t,r)}l={type:'stylesheet',instance:l,count:1,state:i},a.set(o,l)}}},M:function(e,t){yd.M(e,t)
var n=bd
if(n&&e){var r=tt(n).hoistableScripts,a=kd(e),o=r.get(a)
o||((o=n.querySelector(Nd(a)))||(e=A({src:e,async:!0,type:'module'},t),(t=hd.get(a))&&Md(e,t),nt(o=n.createElement('script')),Qu(o,'link',e),n.head.appendChild(o)),o={type:'script',instance:o,count:1,state:null},r.set(a,o))}}}
var bd='undefined'==typeof document?null:document
function wd(e,t,n){var r=bd
if(r&&'string'==typeof t&&t){var a=wt(t)
a='link[rel="'+e+'"][href="'+a+'"]','string'==typeof n&&(a+='[crossorigin="'+n+'"]'),vd.has(a)||(vd.add(a),e={rel:e,crossOrigin:n,href:t},null===r.querySelector(a)&&(Qu(t=r.createElement('link'),'link',e),nt(t),r.head.appendChild(t)))}}function xd(e,t,n,a){var o,l,i,s,c=(c=ne.current)?gd(c):null
if(!c)throw Error(r(446))
switch(e){case'meta':case'title':return null
case'style':return'string'==typeof n.precedence&&'string'==typeof n.href?(t=Cd(n.href),(a=(n=tt(c).hoistableStyles).get(t))||(a={type:'style',instance:null,count:0,state:null},n.set(t,a)),a):{type:'void',instance:null,count:0,state:null}
case'link':if('stylesheet'===n.rel&&'string'==typeof n.href&&'string'==typeof n.precedence){e=Cd(n.href)
var u=tt(c).hoistableStyles,d=u.get(e)
if(d||(c=c.ownerDocument||c,d={type:'stylesheet',instance:null,count:0,state:{loading:0,preload:null}},u.set(e,d),(u=c.querySelector(Sd(e)))&&!u._p&&(d.instance=u,d.state.loading=5),hd.has(e)||(n={rel:'preload',as:'style',href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},hd.set(e,n),u||(o=c,l=e,i=n,s=d.state,o.querySelector('link[rel="preload"][as="style"]['+l+']')?s.loading=1:(l=o.createElement('link'),s.preload=l,l.addEventListener('load',(function(){return s.loading|=1})),l.addEventListener('error',(function(){return s.loading|=2})),Qu(l,'link',i),nt(l),o.head.appendChild(l))))),t&&null===a)throw Error(r(528,''))
return d}if(t&&null!==a)throw Error(r(529,''))
return null
case'script':return t=n.async,'string'==typeof(n=n.src)&&t&&'function'!=typeof t&&'symbol'!=typeof t?(t=kd(n),(a=(n=tt(c).hoistableScripts).get(t))||(a={type:'script',instance:null,count:0,state:null},n.set(t,a)),a):{type:'void',instance:null,count:0,state:null}
default:throw Error(r(444,e))}}function Cd(e){return'href="'+wt(e)+'"'}function Sd(e){return'link[rel="stylesheet"]['+e+']'}function Ed(e){return A({},e,{'data-precedence':e.precedence,precedence:null})}function kd(e){return'[src="'+wt(e)+'"]'}function Nd(e){return'script[async]'+e}function Rd(e,t,n){if(t.count++,null===t.instance)switch(t.type){case'style':var a=e.querySelector('style[data-href~="'+wt(n.href)+'"]')
if(a)return t.instance=a,nt(a),a
var o=A({},n,{'data-href':n.href,'data-precedence':n.precedence,href:null,precedence:null})
return nt(a=(e.ownerDocument||e).createElement('style')),Qu(a,'style',o),Pd(a,n.precedence,e),t.instance=a
case'stylesheet':o=Cd(n.href)
var l=e.querySelector(Sd(o))
if(l)return t.state.loading|=4,t.instance=l,nt(l),l
a=Ed(n),(o=hd.get(o))&&Td(a,o),nt(l=(e.ownerDocument||e).createElement('link'))
var i=l
return i._p=new Promise((function(e,t){i.onload=e,i.onerror=t})),Qu(l,'link',a),t.state.loading|=4,Pd(l,n.precedence,e),t.instance=l
case'script':return l=kd(n.src),(o=e.querySelector(Nd(l)))?(t.instance=o,nt(o),o):(a=n,(o=hd.get(l))&&Md(a=A({},n),o),nt(o=(e=e.ownerDocument||e).createElement('script')),Qu(o,'link',a),e.head.appendChild(o),t.instance=o)
case'void':return null
default:throw Error(r(443,t.type))}else'stylesheet'===t.type&&!(4&t.state.loading)&&(a=t.instance,t.state.loading|=4,Pd(a,n.precedence,e))
return t.instance}function Pd(e,t,n){for(var r=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),a=r.length?r[r.length-1]:null,o=a,l=0;l<r.length;l++){var i=r[l]
if(i.dataset.precedence===t)o=i
else if(o!==a)break}o?o.parentNode.insertBefore(e,o.nextSibling):(t=9===n.nodeType?n.head:n).insertBefore(e,t.firstChild)}function Td(e,t){null==e.crossOrigin&&(e.crossOrigin=t.crossOrigin),null==e.referrerPolicy&&(e.referrerPolicy=t.referrerPolicy),null==e.title&&(e.title=t.title)}function Md(e,t){null==e.crossOrigin&&(e.crossOrigin=t.crossOrigin),null==e.referrerPolicy&&(e.referrerPolicy=t.referrerPolicy),null==e.integrity&&(e.integrity=t.integrity)}var _d=null
function Ld(e,t,n){if(null===_d){var r=new Map,a=_d=new Map
a.set(n,r)}else(r=(a=_d).get(n))||(r=new Map,a.set(n,r))
if(r.has(e))return r
for(r.set(e,null),n=n.getElementsByTagName(e),a=0;a<n.length;a++){var o=n[a]
if(!(o[Xe]||o[Ve]||'link'===e&&'stylesheet'===o.getAttribute('rel'))&&'http://www.w3.org/2000/svg'!==o.namespaceURI){var l=o.getAttribute(t)||''
l=e+l
var i=r.get(l)
i?i.push(o):r.set(l,[o])}}return r}function Dd(e,t,n){(e=e.ownerDocument||e).head.insertBefore(n,'title'===t?e.querySelector('head > title'):null)}function jd(e){return!!('stylesheet'!==e.type||3&e.state.loading)}var Id=null
function Ad(){}function Od(){if(this.count--,0===this.count)if(this.stylesheets)Fd(this,this.stylesheets)
else if(this.unsuspend){var e=this.unsuspend
this.unsuspend=null,e()}}var zd=null
function Fd(e,t){e.stylesheets=null,null!==e.unsuspend&&(e.count++,zd=new Map,t.forEach(Bd,e),zd=null,Od.call(e))}function Bd(e,t){if(!(4&t.state.loading)){var n=zd.get(e)
if(n)var r=n.get(null)
else{n=new Map,zd.set(e,n)
for(var a=e.querySelectorAll('link[data-precedence],style[data-precedence]'),o=0;o<a.length;o++){var l=a[o]
'LINK'!==l.nodeName&&'not all'===l.getAttribute('media')||(n.set(l.dataset.precedence,l),r=l)}r&&n.set(null,r)}l=(a=t.instance).getAttribute('data-precedence'),(o=n.get(l)||r)===r&&n.set(null,a),n.set(l,a),this.count++,r=Od.bind(this),a.addEventListener('load',r),a.addEventListener('error',r),o?o.parentNode.insertBefore(a,o.nextSibling):(e=9===e.nodeType?e.head:e).insertBefore(a,e.firstChild),t.state.loading|=4}}var $d={$$typeof:m,Provider:null,Consumer:null,_currentValue:q,_currentValue2:q,_threadCount:0}
function Hd(e,t,n,r,a,o,l,i){this.tag=1,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Ae(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.finishedLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ae(0),this.hiddenUpdates=Ae(null),this.identifierPrefix=r,this.onUncaughtError=a,this.onCaughtError=o,this.onRecoverableError=l,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=i,this.incompleteTransitions=new Map}function Vd(e,t,n,r,a,o,l,i,s,c,u,d){return e=new Hd(e,t,n,l,i,s,c,d),t=1,!0===o&&(t|=24),o=Bs(3,null,null,t),e.current=o,o.stateNode=e,(t=Ua()).refCount++,e.pooledCache=t,t.refCount++,o.memoizedState={element:r,isDehydrated:n,cache:t},ji(o),e}function Wd(e){return e?e=Or:Or}function Ud(e,t,n,r,a,o){a=Wd(a),null===r.context?r.context=a:r.pendingContext=a,(r=Ai(t)).payload={element:n},null!==(o=void 0===o?null:o)&&(r.callback=o),null!==(n=Oi(e,r,t))&&(Oc(n,0,t),zi(n,e,t))}function Kd(e,t){if(null!==(e=e.memoizedState)&&null!==e.dehydrated){var n=e.retryLane
e.retryLane=0!==n&&n<t?n:t}}function Gd(e,t){Kd(e,t),(e=e.alternate)&&Kd(e,t)}function qd(e){if(13===e.tag){var t=jr(e,67108864)
null!==t&&Oc(t,0,67108864),Gd(e,67108864)}}var Yd=!0
function Xd(e,t,n,r){var a=I.T
I.T=null
var o=G.p
try{G.p=2,Zd(e,t,n,r)}finally{G.p=o,I.T=a}}function Qd(e,t,n,r){var a=I.T
I.T=null
var o=G.p
try{G.p=8,Zd(e,t,n,r)}finally{G.p=o,I.T=a}}function Zd(e,t,n,r){if(Yd){var a=Jd(r)
if(null===a)Fu(e,t,r,ef,n),ff(e,r)
else if(function(e,t,n,r,a){switch(t){case'focusin':return af=pf(af,e,t,n,r,a),!0
case'dragenter':return of=pf(of,e,t,n,r,a),!0
case'mouseover':return lf=pf(lf,e,t,n,r,a),!0
case'pointerover':var o=a.pointerId
return sf.set(o,pf(sf.get(o)||null,e,t,n,r,a)),!0
case'gotpointercapture':return o=a.pointerId,cf.set(o,pf(cf.get(o)||null,e,t,n,r,a)),!0}return!1}(a,e,t,n,r))r.stopPropagation()
else if(ff(e,r),4&t&&-1<df.indexOf(e)){for(;null!==a;){var o=Je(a)
if(null!==o)switch(o.tag){case 3:if((o=o.stateNode).current.memoizedState.isDehydrated){var l=Me(o.pendingLanes)
if(0!==l){var i=o
for(i.pendingLanes|=2,i.entangledLanes|=2;l;){var s=1<<31-ke(l)
i.entanglements[1]|=s,l&=~s}wu(o),!(6&oc)&&(kc=pe()+500,xu(0))}}break
case 13:null!==(i=jr(o,2))&&Oc(i,0,2),Vc(),Gd(o,2)}if(null===(o=Jd(r))&&Fu(e,t,r,ef,n),o===a)break
a=o}null!==a&&r.stopPropagation()}else Fu(e,t,r,null,n)}}function Jd(e){return tf(e=At(e))}var ef=null
function tf(e){if(ef=null,null!==(e=Ze(e))){var t=H(e)
if(null===t)e=null
else{var n=t.tag
if(13===n){if(null!==(e=V(t)))return e
e=null}else if(3===n){if(t.stateNode.current.memoizedState.isDehydrated)return 3===t.tag?t.stateNode.containerInfo:null
e=null}else t!==e&&(e=null)}}return ef=e,null}function nf(e){switch(e){case'beforetoggle':case'cancel':case'click':case'close':case'contextmenu':case'copy':case'cut':case'auxclick':case'dblclick':case'dragend':case'dragstart':case'drop':case'focusin':case'focusout':case'input':case'invalid':case'keydown':case'keypress':case'keyup':case'mousedown':case'mouseup':case'paste':case'pause':case'play':case'pointercancel':case'pointerdown':case'pointerup':case'ratechange':case'reset':case'resize':case'seeked':case'submit':case'toggle':case'touchcancel':case'touchend':case'touchstart':case'volumechange':case'change':case'selectionchange':case'textInput':case'compositionstart':case'compositionend':case'compositionupdate':case'beforeblur':case'afterblur':case'beforeinput':case'blur':case'fullscreenchange':case'focus':case'hashchange':case'popstate':case'select':case'selectstart':return 2
case'drag':case'dragenter':case'dragexit':case'dragleave':case'dragover':case'mousemove':case'mouseout':case'mouseover':case'pointermove':case'pointerout':case'pointerover':case'scroll':case'touchmove':case'wheel':case'mouseenter':case'mouseleave':case'pointerenter':case'pointerleave':return 8
case'message':switch(me()){case he:return 2
case ve:return 8
case ge:case ye:return 32
case be:return 268435456
default:return 32}default:return 32}}var rf=!1,af=null,of=null,lf=null,sf=new Map,cf=new Map,uf=[],df='mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset'.split(' ')
function ff(e,t){switch(e){case'focusin':case'focusout':af=null
break
case'dragenter':case'dragleave':of=null
break
case'mouseover':case'mouseout':lf=null
break
case'pointerover':case'pointerout':sf.delete(t.pointerId)
break
case'gotpointercapture':case'lostpointercapture':cf.delete(t.pointerId)}}function pf(e,t,n,r,a,o){return null===e||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[a]},null!==t&&null!==(t=Je(t))&&qd(t),e):(e.eventSystemFlags|=r,t=e.targetContainers,null!==a&&-1===t.indexOf(a)&&t.push(a),e)}function mf(e){var t=Ze(e.target)
if(null!==t){var n=H(t)
if(null!==n)if(13===(t=n.tag)){if(null!==(t=V(n)))return e.blockedOn=t,void function(e){var t=G.p
try{return G.p=e,function(){if(13===n.tag){var e=Ic(),t=jr(n,e)
null!==t&&Oc(t,0,e),Gd(n,e)}}()}finally{G.p=t}}(e.priority)}else if(3===t&&n.stateNode.current.memoizedState.isDehydrated)return void(e.blockedOn=3===n.tag?n.stateNode.containerInfo:null)}e.blockedOn=null}function hf(e){if(null!==e.blockedOn)return!1
for(var t=e.targetContainers;0<t.length;){var n=Jd(e.nativeEvent)
if(null!==n)return null!==(t=Je(n))&&qd(t),e.blockedOn=n,!1
var r=new(n=e.nativeEvent).constructor(n.type,n)
It=r,n.target.dispatchEvent(r),It=null,t.shift()}return!0}function vf(e,t,n){hf(e)&&n.delete(t)}function gf(){rf=!1,null!==af&&hf(af)&&(af=null),null!==of&&hf(of)&&(of=null),null!==lf&&hf(lf)&&(lf=null),sf.forEach(vf),cf.forEach(vf)}function yf(t,n){t.blockedOn===n&&(t.blockedOn=null,rf||(rf=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,gf)))}var bf=null
function wf(t){bf!==t&&(bf=t,e.unstable_scheduleCallback(e.unstable_NormalPriority,(function(){bf===t&&(bf=null)
for(var e=0;e<t.length;e+=3){var n=t[e],r=t[e+1],a=t[e+2]
if('function'!=typeof r){if(null===tf(r||n))continue
break}var o=Je(n)
null!==o&&(t.splice(e,3),e-=3,vl(o,{pending:!0,data:a,method:n.method,action:r},r,a))}})))}function xf(e){function t(t){return yf(t,e)}null!==af&&yf(af,e),null!==of&&yf(of,e),null!==lf&&yf(lf,e),sf.forEach(t),cf.forEach(t)
for(var n=0;n<uf.length;n++){var r=uf[n]
r.blockedOn===e&&(r.blockedOn=null)}for(;0<uf.length&&null===(n=uf[0]).blockedOn;)mf(n),null===n.blockedOn&&uf.shift()
if(null!=(n=(e.ownerDocument||e).$$reactFormReplay))for(r=0;r<n.length;r+=3){var a=n[r],o=n[r+1],l=a[We]||null
if('function'==typeof o)l||wf(n)
else if(l){var i=null
if(o&&o.hasAttribute('formAction')){if(a=o,l=o[We]||null)i=l.formAction
else if(null!==tf(a))continue}else i=l.action
'function'==typeof i?n[r+1]=i:(n.splice(r,3),r-=3),wf(n)}}}function Cf(e){this._internalRoot=e}function Sf(e){this._internalRoot=e}Sf.prototype.render=Cf.prototype.render=function(e){var t=this._internalRoot
if(null===t)throw Error(r(409))
Ud(t.current,Ic(),e,t,null,null)},Sf.prototype.unmount=Cf.prototype.unmount=function(){var e=this._internalRoot
if(null!==e){this._internalRoot=null
var t=e.containerInfo
0===e.tag&&lu(),Ud(e.current,2,null,e,null,null),Vc(),t[Ue]=null}},Sf.prototype.unstable_scheduleHydration=function(e){if(e){var t=$e()
e={blockedOn:null,target:e,priority:t}
for(var n=0;n<uf.length&&0!==t&&t<uf[n].priority;n++);uf.splice(n,0,e),0===n&&mf(e)}}
var Ef=t.version
if('19.0.0'!==Ef)throw Error(r(527,Ef,'19.0.0'))
G.findDOMNode=function(e){var t=e._reactInternals
if(void 0===t){if('function'==typeof e.render)throw Error(r(188))
throw e=Object.keys(e).join(','),Error(r(268,e))}return e=function(e){var t=e.alternate
if(!t){if(null===(t=H(e)))throw Error(r(188))
return t!==e?null:e}for(var n=e,a=t;;){var o=n.return
if(null===o)break
var l=o.alternate
if(null===l){if(null!==(a=o.return)){n=a
continue}break}if(o.child===l.child){for(l=o.child;l;){if(l===n)return W(o),e
if(l===a)return W(o),t
l=l.sibling}throw Error(r(188))}if(n.return!==a.return)n=o,a=l
else{for(var i=!1,s=o.child;s;){if(s===n){i=!0,n=o,a=l
break}if(s===a){i=!0,a=o,n=l
break}s=s.sibling}if(!i){for(s=l.child;s;){if(s===n){i=!0,n=l,a=o
break}if(s===a){i=!0,a=l,n=o
break}s=s.sibling}if(!i)throw Error(r(189))}}if(n.alternate!==a)throw Error(r(190))}if(3!==n.tag)throw Error(r(188))
return n.stateNode.current===n?e:t}(t),null===(e=null!==e?U(e):null)?null:e.stateNode}
var kf={bundleType:0,version:'19.0.0',rendererPackageName:'react-dom',currentDispatcherRef:I,findFiberByHostInstance:Ze,reconcilerVersion:'19.0.0'}
if('undefined'!=typeof __REACT_DEVTOOLS_GLOBAL_HOOK__){var Nf=__REACT_DEVTOOLS_GLOBAL_HOOK__
if(!Nf.isDisabled&&Nf.supportsFiber)try{Ce=Nf.inject(kf),Se=Nf}catch(Pf){}}return S.createRoot=function(e,t){if(!a(e))throw Error(r(299))
var n=!1,o='',l=Bl,i=$l,s=Hl
return null!=t&&(!0===t.unstable_strictMode&&(n=!0),void 0!==t.identifierPrefix&&(o=t.identifierPrefix),void 0!==t.onUncaughtError&&(l=t.onUncaughtError),void 0!==t.onCaughtError&&(i=t.onCaughtError),void 0!==t.onRecoverableError&&(s=t.onRecoverableError),void 0!==t.unstable_transitionCallbacks&&t.unstable_transitionCallbacks),t=Vd(e,1,!1,null,0,n,o,l,i,s,0,null),e[Ue]=t.current,Ou(8===e.nodeType?e.parentNode:e),new Cf(t)},S.hydrateRoot=function(e,t,n){if(!a(e))throw Error(r(299))
var o=!1,l='',i=Bl,s=$l,c=Hl,u=null
return null!=n&&(!0===n.unstable_strictMode&&(o=!0),void 0!==n.identifierPrefix&&(l=n.identifierPrefix),void 0!==n.onUncaughtError&&(i=n.onUncaughtError),void 0!==n.onCaughtError&&(s=n.onCaughtError),void 0!==n.onRecoverableError&&(c=n.onRecoverableError),void 0!==n.unstable_transitionCallbacks&&n.unstable_transitionCallbacks,void 0!==n.formState&&(u=n.formState)),(t=Vd(e,1,!0,t,0,o,l,i,s,c,0,u)).context=Wd(null),n=t.current,(l=Ai(o=Ic())).callback=null,Oi(n,l,o),t.current.lanes=o,Oe(t,o),wu(t),e[Ue]=t.current,Ou(e),new Sf(t)},S.version='19.0.0',S}()),C.exports),_={}
!function(){if(T)return _
T=1,Object.defineProperty(_,'__esModule',{value:!0}),_.parse=function(e,t){const n=new o,r=e.length
if(r<2)return n
const a=(null==t?void 0:t.decode)||s
let c=0
do{const t=e.indexOf('=',c)
if(-1===t)break
const o=e.indexOf(';',c),s=-1===o?r:o
if(t>s){c=e.lastIndexOf(';',t-1)+1
continue}const u=l(e,c,t),d=i(e,t,u),f=e.slice(u,d)
if(void 0===n[f]){let r=l(e,t+1,s),o=i(e,s,r)
const c=a(e.slice(r,o))
n[f]=c}c=s+1}while(c<r)
return n},_.serialize=function(o,l,i){const s=(null==i?void 0:i.encode)||encodeURIComponent
if(!e.test(o))throw new TypeError(`argument name is invalid: ${o}`)
const c=s(l)
if(!t.test(c))throw new TypeError(`argument val is invalid: ${l}`)
let u=o+'='+c
if(!i)return u
if(void 0!==i.maxAge){if(!Number.isInteger(i.maxAge))throw new TypeError(`option maxAge is invalid: ${i.maxAge}`)
u+='; Max-Age='+i.maxAge}if(i.domain){if(!n.test(i.domain))throw new TypeError(`option domain is invalid: ${i.domain}`)
u+='; Domain='+i.domain}if(i.path){if(!r.test(i.path))throw new TypeError(`option path is invalid: ${i.path}`)
u+='; Path='+i.path}if(i.expires){if(!function(e){return'[object Date]'===a.call(e)}(i.expires)||!Number.isFinite(i.expires.valueOf()))throw new TypeError(`option expires is invalid: ${i.expires}`)
u+='; Expires='+i.expires.toUTCString()}if(i.httpOnly&&(u+='; HttpOnly'),i.secure&&(u+='; Secure'),i.partitioned&&(u+='; Partitioned'),i.priority)switch('string'==typeof i.priority?i.priority.toLowerCase():void 0){case'low':u+='; Priority=Low'
break
case'medium':u+='; Priority=Medium'
break
case'high':u+='; Priority=High'
break
default:throw new TypeError(`option priority is invalid: ${i.priority}`)}if(i.sameSite)switch('string'==typeof i.sameSite?i.sameSite.toLowerCase():i.sameSite){case!0:case'strict':u+='; SameSite=Strict'
break
case'lax':u+='; SameSite=Lax'
break
case'none':u+='; SameSite=None'
break
default:throw new TypeError(`option sameSite is invalid: ${i.sameSite}`)}return u}
const e=/^[\u0021-\u003A\u003C\u003E-\u007E]+$/,t=/^[\u0021-\u003A\u003C-\u007E]*$/,n=/^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,r=/^[\u0020-\u003A\u003D-\u007E]*$/,a=Object.prototype.toString,o=(()=>{const e=function(){}
return e.prototype=Object.create(null),e})()
function l(e,t,n){do{const n=e.charCodeAt(t)
if(32!==n&&9!==n)return t}while(++t<n)
return n}function i(e,t,n){for(;t>n;){const n=e.charCodeAt(--t)
if(32!==n&&9!==n)return t+1}return n}function s(e){if(-1===e.indexOf('%'))return e
try{return decodeURIComponent(e)}catch(t){return e}}}()
var L='popstate'
function D(e,t){if(!1===e||null==e)throw new Error(t)}function j(e,t){if(!e)try{throw new Error(t)}catch(n){}}function I(e,t){return{usr:e.state,key:e.key,idx:t}}function A(e,t,n=null,r){return{pathname:'string'==typeof e?e:e.pathname,search:'',hash:'',...'string'==typeof t?z(t):t,state:n,key:t&&t.key||r||Math.random().toString(36).substring(2,10)}}function O({pathname:e='/',search:t='',hash:n=''}){return t&&'?'!==t&&(e+='?'===t.charAt(0)?t:'?'+t),n&&'#'!==n&&(e+='#'===n.charAt(0)?n:'#'+n),e}function z(e){let t={}
if(e){let n=e.indexOf('#')
n>=0&&(t.hash=e.substring(n),e=e.substring(0,n))
let r=e.indexOf('?')
r>=0&&(t.search=e.substring(r),e=e.substring(0,r)),e&&(t.pathname=e)}return t}var F=new Set(['lazy','caseSensitive','path','id','index','children'])
function B(e,t,n=[],r={}){return e.map(((e,a)=>{let o=[...n,String(a)],l='string'==typeof e.id?e.id:o.join('-')
if(D(!0!==e.index||!e.children,'Cannot specify children on an index route'),D(!r[l],`Found a route id collision on id "${l}".  Route id's must be globally unique within Data Router usages`),function(e){return!0===e.index}(e)){let n={...e,...t(e),id:l}
return r[l]=n,n}{let n={...e,...t(e),id:l,children:void 0}
return r[l]=n,e.children&&(n.children=B(e.children,t,o,r)),n}}))}function $(e,t,n='/'){return H(e,t,n,!1)}function H(e,t,n,r){let a=ne(('string'==typeof t?z(t):t).pathname||'/',n)
if(null==a)return null
let o=V(e)
!function(e){e.sort(((e,t)=>e.score!==t.score?t.score-e.score:function(e,t){return e.length===t.length&&e.slice(0,-1).every(((e,n)=>e===t[n]))?e[e.length-1]-t[t.length-1]:0}(e.routesMeta.map((e=>e.childrenIndex)),t.routesMeta.map((e=>e.childrenIndex)))))}(o)
let l=null
for(let i=0;null==l&&i<o.length;++i){let e=te(a)
l=J(o[i],e,r)}return l}function V(e,t=[],n=[],r=''){let a=(e,a,o)=>{let l={relativePath:void 0===o?e.path||'':o,caseSensitive:!0===e.caseSensitive,childrenIndex:a,route:e}
l.relativePath.startsWith('/')&&(D(l.relativePath.startsWith(r),`Absolute route path "${l.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),l.relativePath=l.relativePath.slice(r.length))
let i=ie([r,l.relativePath]),s=n.concat(l)
e.children&&e.children.length>0&&(D(!0!==e.index,`Index routes must not have child routes. Please remove all child routes from route path "${i}".`),V(e.children,t,s,i)),(null!=e.path||e.index)&&t.push({path:i,score:Z(i,e.index),routesMeta:s})}
return e.forEach(((e,t)=>{var n
if(''!==e.path&&(null==(n=e.path)?void 0:n.includes('?')))for(let r of W(e.path))a(e,t,r)
else a(e,t)})),t}function W(e){let t=e.split('/')
if(0===t.length)return[]
let[n,...r]=t,a=n.endsWith('?'),o=n.replace(/\?$/,'')
if(0===r.length)return a?[o,'']:[o]
let l=W(r.join('/')),i=[]
return i.push(...l.map((e=>''===e?o:[o,e].join('/')))),a&&i.push(...l),i.map((t=>e.startsWith('/')&&''===t?'/':t))}var U=/^:[\w-]+$/,K=3,G=2,q=1,Y=10,X=-2,Q=e=>'*'===e
function Z(e,t){let n=e.split('/'),r=n.length
return n.some(Q)&&(r+=X),t&&(r+=G),n.filter((e=>!Q(e))).reduce(((e,t)=>e+(U.test(t)?K:''===t?q:Y)),r)}function J(e,t,n=!1){let{routesMeta:r}=e,a={},o='/',l=[]
for(let i=0;i<r.length;++i){let e=r[i],s=i===r.length-1,c='/'===o?t:t.slice(o.length)||'/',u=ee({path:e.relativePath,caseSensitive:e.caseSensitive,end:s},c),d=e.route
if(!u&&s&&n&&!r[r.length-1].route.index&&(u=ee({path:e.relativePath,caseSensitive:e.caseSensitive,end:!1},c)),!u)return null
Object.assign(a,u.params),l.push({params:a,pathname:ie([o,u.pathname]),pathnameBase:se(ie([o,u.pathnameBase])),route:d}),'/'!==u.pathnameBase&&(o=ie([o,u.pathnameBase]))}return l}function ee(e,t){'string'==typeof e&&(e={path:e,caseSensitive:!1,end:!0})
let[n,r]=function(e,t=!1,n=!0){j('*'===e||!e.endsWith('*')||e.endsWith('/*'),`Route path "${e}" will be treated as if it were "${e.replace(/\*$/,'/*')}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e.replace(/\*$/,'/*')}".`)
let r=[],a='^'+e.replace(/\/*\*?$/,'').replace(/^\/*/,'/').replace(/[\\.*+^${}|()[\]]/g,'\\$&').replace(/\/:([\w-]+)(\?)?/g,((e,t,n)=>(r.push({paramName:t,isOptional:null!=n}),n?'/?([^\\/]+)?':'/([^\\/]+)')))
return e.endsWith('*')?(r.push({paramName:'*'}),a+='*'===e||'/*'===e?'(.*)$':'(?:\\/(.+)|\\/*)$'):n?a+='\\/*$':''!==e&&'/'!==e&&(a+='(?:(?=\\/|$))'),[new RegExp(a,t?void 0:'i'),r]}(e.path,e.caseSensitive,e.end),a=t.match(n)
if(!a)return null
let o=a[0],l=o.replace(/(.)\/+$/,'$1'),i=a.slice(1)
return{params:r.reduce(((e,{paramName:t,isOptional:n},r)=>{if('*'===t){let e=i[r]||''
l=o.slice(0,o.length-e.length).replace(/(.)\/+$/,'$1')}const a=i[r]
return e[t]=n&&!a?void 0:(a||'').replace(/%2F/g,'/'),e}),{}),pathname:o,pathnameBase:l,pattern:e}}function te(e){try{return e.split('/').map((e=>decodeURIComponent(e).replace(/\//g,'%2F'))).join('/')}catch(t){return j(!1,`The URL path "${e}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`),e}}function ne(e,t){if('/'===t)return e
if(!e.toLowerCase().startsWith(t.toLowerCase()))return null
let n=t.endsWith('/')?t.length-1:t.length,r=e.charAt(n)
return r&&'/'!==r?null:e.slice(n)||'/'}function re(e,t,n,r){return`Cannot include a '${e}' character in a manually specified \`to.${t}\` field [${JSON.stringify(r)}].  Please separate it out to the \`to.${n}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function ae(e){return e.filter(((e,t)=>0===t||e.route.path&&e.route.path.length>0))}function oe(e){let t=ae(e)
return t.map(((e,n)=>n===t.length-1?e.pathname:e.pathnameBase))}function le(e,t,n,r=!1){let a
'string'==typeof e?a=z(e):(a={...e},D(!a.pathname||!a.pathname.includes('?'),re('?','pathname','search',a)),D(!a.pathname||!a.pathname.includes('#'),re('#','pathname','hash',a)),D(!a.search||!a.search.includes('#'),re('#','search','hash',a)))
let o,l=''===e||''===a.pathname,i=l?'/':a.pathname
if(null==i)o=n
else{let e=t.length-1
if(!r&&i.startsWith('..')){let t=i.split('/')
for(;'..'===t[0];)t.shift(),e-=1
a.pathname=t.join('/')}o=e>=0?t[e]:'/'}let s=function(e,t='/'){let{pathname:n,search:r='',hash:a=''}='string'==typeof e?z(e):e,o=n?n.startsWith('/')?n:function(e,t){let n=t.replace(/\/+$/,'').split('/')
return e.split('/').forEach((e=>{'..'===e?n.length>1&&n.pop():'.'!==e&&n.push(e)})),n.length>1?n.join('/'):'/'}(n,t):t
return{pathname:o,search:ce(r),hash:ue(a)}}(a,o),c=i&&'/'!==i&&i.endsWith('/'),u=(l||'.'===i)&&n.endsWith('/')
return s.pathname.endsWith('/')||!c&&!u||(s.pathname+='/'),s}var ie=e=>e.join('/').replace(/\/\/+/g,'/'),se=e=>e.replace(/\/+$/,'').replace(/^\/*/,'/'),ce=e=>e&&'?'!==e?e.startsWith('?')?e:'?'+e:'',ue=e=>e&&'#'!==e?e.startsWith('#')?e:'#'+e:'',de=class{constructor(e,t,n,r=!1){this.status=e,this.statusText=t||'',this.internal=r,n instanceof Error?(this.data=n.toString(),this.error=n):this.data=n}}
function fe(e){return null!=e&&'number'==typeof e.status&&'string'==typeof e.statusText&&'boolean'==typeof e.internal&&'data'in e}var pe=['POST','PUT','PATCH','DELETE'],me=new Set(pe),he=['GET',...pe],ve=new Set(he),ge=new Set([301,302,303,307,308]),ye=new Set([307,308]),be={state:'idle',location:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},we={state:'idle',data:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},xe={state:'unblocked',proceed:void 0,reset:void 0,location:void 0},Ce=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Se=e=>({hasErrorBoundary:Boolean(e.hasErrorBoundary)}),Ee='remix-router-transitions',ke=Symbol('ResetLoaderData')
function Ne(e,t,n,r,a,o){let l,i
if(a){l=[]
for(let e of t)if(l.push(e),e.route.id===a){i=e
break}}else l=t,i=t[t.length-1]
let s=le(r||'.',oe(l),ne(e.pathname,n)||e.pathname,'path'===o)
if(null==r&&(s.search=e.search,s.hash=e.hash),(null==r||''===r||'.'===r)&&i){let e=nt(s.search)
if(i.route.index&&!e)s.search=s.search?s.search.replace(/^\?/,'?index&'):'?index'
else if(!i.route.index&&e){let e=new URLSearchParams(s.search),t=e.getAll('index')
e.delete('index'),t.filter((e=>e)).forEach((t=>e.append('index',t)))
let n=e.toString()
s.search=n?`?${n}`:''}}return'/'!==n&&(s.pathname='/'===s.pathname?n:ie([n,s.pathname])),O(s)}function Re(e,t,n){if(!n||!function(e){return null!=e&&('formData'in e&&null!=e.formData||'body'in e&&void 0!==e.body)}(n))return{path:t}
if(n.formMethod&&(r=n.formMethod,!ve.has(r.toUpperCase())))return{path:t,error:Ge(405,{method:n.formMethod})}
var r
let a,o,l=()=>({path:t,error:Ge(400,{type:'invalid-body'})}),i=(n.formMethod||'get').toUpperCase(),s=Ye(t)
if(void 0!==n.body){if('text/plain'===n.formEncType){if(!tt(i))return l()
let e='string'==typeof n.body?n.body:n.body instanceof FormData||n.body instanceof URLSearchParams?Array.from(n.body.entries()).reduce(((e,[t,n])=>`${e}${t}=${n}\n`),''):String(n.body)
return{path:t,submission:{formMethod:i,formAction:s,formEncType:n.formEncType,formData:void 0,json:void 0,text:e}}}if('application/json'===n.formEncType){if(!tt(i))return l()
try{let e='string'==typeof n.body?JSON.parse(n.body):n.body
return{path:t,submission:{formMethod:i,formAction:s,formEncType:n.formEncType,formData:void 0,json:e,text:void 0}}}catch(d){return l()}}}if(D('function'==typeof FormData,'FormData is not available in this environment'),n.formData)a=Be(n.formData),o=n.formData
else if(n.body instanceof FormData)a=Be(n.body),o=n.body
else if(n.body instanceof URLSearchParams)a=n.body,o=$e(a)
else if(null==n.body)a=new URLSearchParams,o=new FormData
else try{a=new URLSearchParams(n.body),o=$e(a)}catch(d){return l()}let c={formMethod:i,formAction:s,formEncType:n&&n.formEncType||'application/x-www-form-urlencoded',formData:o,json:void 0,text:void 0}
if(tt(c.formMethod))return{path:t,submission:c}
let u=z(t)
return e&&u.search&&nt(u.search)&&a.append('index',''),u.search=`?${a}`,{path:O(u),submission:c}}function Pe(e,t,n=!1){let r=e.findIndex((e=>e.route.id===t))
return r>=0?e.slice(0,n?r+1:r):e}function Te(e,t,n,r,a,o,l,i,s,c,u,d,f,p){let m=p?Qe(p[1])?p[1].error:p[1].data:void 0,h=e.createURL(t.location),v=e.createURL(a),g=n
o&&t.errors?g=Pe(n,Object.keys(t.errors)[0],!0):p&&Qe(p[1])&&(g=Pe(n,p[0]))
let y=p?p[1].statusCode:void 0,b=y&&y>=400,w=g.filter(((e,n)=>{let{route:a}=e
if(a.lazy)return!0
if(null==a.loader)return!1
if(o)return Me(a,t.loaderData,t.errors)
if(function(e,t,n){let r=!t||n.route.id!==t.route.id,a=!e.hasOwnProperty(n.route.id)
return r||a}(t.loaderData,t.matches[n],e))return!0
let i=t.matches[n],s=e
return Le(e,{currentUrl:h,currentParams:i.params,nextUrl:v,nextParams:s.params,...r,actionResult:m,actionStatus:y,defaultShouldRevalidate:!b&&(l||h.pathname+h.search===v.pathname+v.search||h.search!==v.search||_e(i,s))})})),x=[]
return c.forEach(((e,a)=>{if(o||!n.some((t=>t.route.id===e.routeId))||s.has(a))return
let c=$(d,e.path,f)
if(!c)return void x.push({key:a,routeId:e.routeId,path:e.path,matches:null,match:null,controller:null})
let p=t.fetchers.get(a),g=rt(c,e.path),w=!1
u.has(a)?w=!1:i.has(a)?(i.delete(a),w=!0):w=p&&'idle'!==p.state&&void 0===p.data?l:Le(g,{currentUrl:h,currentParams:t.matches[t.matches.length-1].params,nextUrl:v,nextParams:n[n.length-1].params,...r,actionResult:m,actionStatus:y,defaultShouldRevalidate:!b&&l}),w&&x.push({key:a,routeId:e.routeId,path:e.path,matches:c,match:g,controller:new AbortController})})),[w,x]}function Me(e,t,n){if(e.lazy)return!0
if(!e.loader)return!1
let r=null!=t&&void 0!==t[e.id],a=null!=n&&void 0!==n[e.id]
return!(!r&&a)&&('function'==typeof e.loader&&!0===e.loader.hydrate||!r&&!a)}function _e(e,t){let n=e.route.path
return e.pathname!==t.pathname||null!=n&&n.endsWith('*')&&e.params['*']!==t.params['*']}function Le(e,t){if(e.route.shouldRevalidate){let n=e.route.shouldRevalidate(t)
if('boolean'==typeof n)return n}return t.defaultShouldRevalidate}function De(e,t,n,r,a){let o
if(e){let t=r[e]
D(t,`No route found to patch children into: routeId = ${e}`),t.children||(t.children=[]),o=t.children}else o=n
let l=B(t.filter((e=>!o.some((t=>je(e,t))))),a,[e||'_','patch',String((null==o?void 0:o.length)||'0')],r)
o.push(...l)}function je(e,t){return'id'in e&&'id'in t&&e.id===t.id||e.index===t.index&&e.path===t.path&&e.caseSensitive===t.caseSensitive&&(!(e.children&&0!==e.children.length||t.children&&0!==t.children.length)||e.children.every(((e,n)=>{var r
return null==(r=t.children)?void 0:r.some((t=>je(e,t)))})))}async function Ie({matches:e}){let t=e.filter((e=>e.shouldLoad))
return(await Promise.all(t.map((e=>e.resolve())))).reduce(((e,n,r)=>Object.assign(e,{[t[r].route.id]:n})),{})}async function Ae(e){var t,n,r,a,o,l
let{result:i,type:s}=e
if(et(i)){let e
try{let t=i.headers.get('Content-Type')
e=t&&/\bapplication\/json\b/.test(t)?null==i.body?null:await i.json():await i.text()}catch(c){return{type:'error',error:c}}return'error'===s?{type:'error',error:new de(i.status,i.statusText,e),statusCode:i.status,headers:i.headers}:{type:'data',data:e,statusCode:i.status,headers:i.headers}}return'error'===s?Je(i)?i.data instanceof Error?{type:'error',error:i.data,statusCode:null==(t=i.init)?void 0:t.status,headers:(null==(n=i.init)?void 0:n.headers)?new Headers(i.init.headers):void 0}:{type:'error',error:new de((null==(r=i.init)?void 0:r.status)||500,void 0,i.data),statusCode:fe(i)?i.status:void 0,headers:(null==(a=i.init)?void 0:a.headers)?new Headers(i.init.headers):void 0}:{type:'error',error:i,statusCode:fe(i)?i.status:void 0}:Je(i)?{type:'data',data:i.data,statusCode:null==(o=i.init)?void 0:o.status,headers:(null==(l=i.init)?void 0:l.headers)?new Headers(i.init.headers):void 0}:{type:'data',data:i}}function Oe(e,t,n,r,a){let o=e.headers.get('Location')
if(D(o,'Redirects returned/thrown from loaders/actions must have a Location header'),!Ce.test(o)){let l=r.slice(0,r.findIndex((e=>e.route.id===n))+1)
o=Ne(new URL(t.url),l,a,o),e.headers.set('Location',o)}return e}function ze(e,t,n){if(Ce.test(e)){let r=e,a=r.startsWith('//')?new URL(t.protocol+r):new URL(r),o=null!=ne(a.pathname,n)
if(a.origin===t.origin&&o)return a.pathname+a.search+a.hash}return e}function Fe(e,t,n,r){let a=e.createURL(Ye(t)).toString(),o={signal:n}
if(r&&tt(r.formMethod)){let{formMethod:e,formEncType:t}=r
o.method=e.toUpperCase(),'application/json'===t?(o.headers=new Headers({'Content-Type':t}),o.body=JSON.stringify(r.json)):'text/plain'===t?o.body=r.text:'application/x-www-form-urlencoded'===t&&r.formData?o.body=Be(r.formData):o.body=r.formData}return new Request(a,o)}function Be(e){let t=new URLSearchParams
for(let[n,r]of e.entries())t.append(n,'string'==typeof r?r:r.name)
return t}function $e(e){let t=new FormData
for(let[n,r]of e.entries())t.append(n,r)
return t}function He(e,t,n,r,a,o){let{loaderData:l,errors:i}=function(e,t,n,r=!1,a=!1){let o,l={},i=null,s=!1,c={},u=n&&Qe(n[1])?n[1].error:void 0
return e.forEach((n=>{if(!(n.route.id in t))return
let d=n.route.id,f=t[d]
if(D(!Ze(f),'Cannot handle redirect results in processLoaderData'),Qe(f)){let t=f.error
if(void 0!==u&&(t=u,u=void 0),i=i||{},a)i[d]=t
else{let n=Ue(e,d)
null==i[n.route.id]&&(i[n.route.id]=t)}r||(l[d]=ke),s||(s=!0,o=fe(f.error)?f.error.status:500),f.headers&&(c[d]=f.headers)}else l[d]=f.data,f.statusCode&&200!==f.statusCode&&!s&&(o=f.statusCode),f.headers&&(c[d]=f.headers)})),void 0!==u&&n&&(i={[n[0]]:u},l[n[0]]=void 0),{loaderData:l,errors:i,statusCode:o||200,loaderHeaders:c}}(t,n,r)
return a.forEach((t=>{let{key:n,match:r,controller:a}=t,l=o[n]
if(D(l,'Did not find corresponding fetcher result'),!a||!a.signal.aborted)if(Qe(l)){let t=Ue(e.matches,null==r?void 0:r.route.id)
i&&i[t.route.id]||(i={...i,[t.route.id]:l.error}),e.fetchers.delete(n)}else if(Ze(l))D(!1,'Unhandled fetcher revalidation redirect')
else{let t=it(l.data)
e.fetchers.set(n,t)}})),{loaderData:l,errors:i}}function Ve(e,t,n,r){let a=Object.entries(t).filter((([,e])=>e!==ke)).reduce(((e,[t,n])=>(e[t]=n,e)),{})
for(let o of n){let n=o.route.id
if(!t.hasOwnProperty(n)&&e.hasOwnProperty(n)&&o.route.loader&&(a[n]=e[n]),r&&r.hasOwnProperty(n))break}return a}function We(e){return e?Qe(e[1])?{actionData:{}}:{actionData:{[e[0]]:e[1].data}}:{}}function Ue(e,t){return(t?e.slice(0,e.findIndex((e=>e.route.id===t))+1):[...e]).reverse().find((e=>!0===e.route.hasErrorBoundary))||e[0]}function Ke(e){let t=1===e.length?e[0]:e.find((e=>e.index||!e.path||'/'===e.path))||{id:'__shim-error-route__'}
return{matches:[{params:{},pathname:'',pathnameBase:'',route:t}],route:t}}function Ge(e,{pathname:t,routeId:n,method:r,type:a,message:o}={}){let l='Unknown Server Error',i='Unknown @remix-run/router error'
return 400===e?(l='Bad Request',r&&t&&n?i=`You made a ${r} request to "${t}" but did not provide a \`loader\` for route "${n}", so there is no way to handle the request.`:'invalid-body'===a&&(i='Unable to encode submission body')):403===e?(l='Forbidden',i=`Route "${n}" does not match URL "${t}"`):404===e?(l='Not Found',i=`No route matches URL "${t}"`):405===e&&(l='Method Not Allowed',r&&t&&n?i=`You made a ${r.toUpperCase()} request to "${t}" but did not provide an \`action\` for route "${n}", so there is no way to handle the request.`:r&&(i=`Invalid request method "${r.toUpperCase()}"`)),new de(e||500,l,new Error(i),!0)}function qe(e){let t=Object.entries(e)
for(let n=t.length-1;n>=0;n--){let[e,r]=t[n]
if(Ze(r))return{key:e,result:r}}}function Ye(e){return O({...'string'==typeof e?z(e):e,hash:''})}function Xe(e){return et(e.result)&&ge.has(e.result.status)}function Qe(e){return'error'===e.type}function Ze(e){return'redirect'===(e&&e.type)}function Je(e){return'object'==typeof e&&null!=e&&'type'in e&&'data'in e&&'init'in e&&'DataWithResponseInit'===e.type}function et(e){return null!=e&&'number'==typeof e.status&&'string'==typeof e.statusText&&'object'==typeof e.headers&&void 0!==e.body}function tt(e){return me.has(e.toUpperCase())}function nt(e){return new URLSearchParams(e).getAll('index').some((e=>''===e))}function rt(e,t){let n='string'==typeof t?z(t).search:t.search
if(e[e.length-1].route.index&&nt(n||''))return e[e.length-1]
let r=ae(e)
return r[r.length-1]}function at(e){let{formMethod:t,formAction:n,formEncType:r,text:a,formData:o,json:l}=e
if(t&&n&&r)return null!=a?{formMethod:t,formAction:n,formEncType:r,formData:void 0,json:void 0,text:a}:null!=o?{formMethod:t,formAction:n,formEncType:r,formData:o,json:void 0,text:void 0}:void 0!==l?{formMethod:t,formAction:n,formEncType:r,formData:void 0,json:l,text:void 0}:void 0}function ot(e,t){return t?{state:'loading',location:e,formMethod:t.formMethod,formAction:t.formAction,formEncType:t.formEncType,formData:t.formData,json:t.json,text:t.text}:{state:'loading',location:e,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0}}function lt(e,t){return e?{state:'loading',formMethod:e.formMethod,formAction:e.formAction,formEncType:e.formEncType,formData:e.formData,json:e.json,text:e.text,data:t}:{state:'loading',formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:t}}function it(e){return{state:'idle',formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:e}}var st=p.createContext(null)
st.displayName='DataRouter'
var ct=p.createContext(null)
ct.displayName='DataRouterState'
var ut=p.createContext({isTransitioning:!1})
ut.displayName='ViewTransition'
var dt=p.createContext(new Map)
dt.displayName='Fetchers',p.createContext(null).displayName='Await'
var ft=p.createContext(null)
ft.displayName='Navigation'
var pt=p.createContext(null)
pt.displayName='Location'
var mt=p.createContext({outlet:null,matches:[],isDataRoute:!1})
mt.displayName='Route'
var ht=p.createContext(null)
function vt(){return null!=p.useContext(pt)}function gt(){return D(vt(),'useLocation() may be used only in the context of a <Router> component.'),p.useContext(pt).location}ht.displayName='RouteError'
var yt='You should call navigate() in a React.useEffect(), not when your component is first rendered.'
function bt(e){p.useContext(ft).static||p.useLayoutEffect(e)}function wt(){let{isDataRoute:e}=p.useContext(mt)
return e?function(){let{router:e}=function(){let e=p.useContext(st)
return D(e,Nt('useNavigate')),e}(),t=Rt('useNavigate'),n=p.useRef(!1)
bt((()=>{n.current=!0}))
let r=p.useCallback((async(r,a={})=>{j(n.current,yt),n.current&&('number'==typeof r?e.navigate(r):await e.navigate(r,{fromRouteId:t,...a}))}),[e,t])
return r}():function(){D(vt(),'useNavigate() may be used only in the context of a <Router> component.')
let e=p.useContext(st),{basename:t,navigator:n}=p.useContext(ft),{matches:r}=p.useContext(mt),{pathname:a}=gt(),o=JSON.stringify(oe(r)),l=p.useRef(!1)
bt((()=>{l.current=!0}))
let i=p.useCallback(((r,i={})=>{if(j(l.current,yt),!l.current)return
if('number'==typeof r)return void n.go(r)
let s=le(r,JSON.parse(o),a,'path'===i.relative)
null==e&&'/'!==t&&(s.pathname='/'===s.pathname?t:ie([t,s.pathname])),(i.replace?n.replace:n.push)(s,i.state,i)}),[t,n,o,a,e])
return i}()}function xt(e,{relative:t}={}){let{matches:n}=p.useContext(mt),{pathname:r}=gt(),a=JSON.stringify(oe(n))
return p.useMemo((()=>le(e,JSON.parse(a),r,'path'===t)),[e,a,r,t])}function Ct(){let e=function(){var e
let t=p.useContext(ht),n=function(){let e=p.useContext(ct)
return D(e,Nt('useRouteError')),e}(),r=Rt('useRouteError')
return void 0!==t?t:null==(e=n.errors)?void 0:e[r]}(),t=fe(e)?`${e.status} ${e.statusText}`:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,r='rgba(200,200,200, 0.5)',a={padding:'0.5rem',backgroundColor:r},o={padding:'2px 4px',backgroundColor:r},l=null
return l=p.createElement(p.Fragment,null,p.createElement('p',null,'\ud83d\udcbf Hey developer \ud83d\udc4b'),p.createElement('p',null,'You can provide a way better UX than this when your app throws errors by providing your own ',p.createElement('code',{style:o},'ErrorBoundary'),' or',' ',p.createElement('code',{style:o},'errorElement'),' prop on your route.')),p.createElement(p.Fragment,null,p.createElement('h2',null,'Unexpected Application Error!'),p.createElement('h3',{style:{fontStyle:'italic'}},t),n?p.createElement('pre',{style:a},n):null,l)}p.createContext(null)
var St=p.createElement(Ct,null),Et=class extends p.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||'idle'!==t.revalidation&&'idle'===e.revalidation?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:void 0!==e.error?e.error:t.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){}render(){return void 0!==this.state.error?p.createElement(mt.Provider,{value:this.props.routeContext},p.createElement(ht.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}
function kt({routeContext:e,match:t,children:n}){let r=p.useContext(st)
return r&&r.static&&r.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=t.route.id),p.createElement(mt.Provider,{value:e},n)}function Nt(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Rt(e){let t=function(e){let t=p.useContext(mt)
return D(t,Nt(e)),t}(e),n=t.matches[t.matches.length-1]
return D(n.route.id,`${e} can only be used on routes that contain a unique "id"`),n.route.id}var Pt={}
function Tt(e,t,n){t||Pt[e]||(Pt[e]=!0,j(!1,n))}var Mt={}
function _t(e,t){e||Mt[t]||(Mt[t]=!0)}var Lt=class{constructor(){this.status='pending',this.promise=new Promise(((e,t)=>{this.resolve=t=>{'pending'===this.status&&(this.status='resolved',e(t))},this.reject=e=>{'pending'===this.status&&(this.status='rejected',t(e))}}))}}
function Dt({router:e,flushSync:t}){let[n,r]=p.useState(e.state),[a,o]=p.useState(),[l,i]=p.useState({isTransitioning:!1}),[s,c]=p.useState(),[u,d]=p.useState(),[f,m]=p.useState(),h=p.useRef(new Map),v=p.useCallback(((n,{deletedFetchers:a,flushSync:l,viewTransitionOpts:f})=>{n.fetchers.forEach(((e,t)=>{void 0!==e.data&&h.current.set(t,e.data)})),a.forEach((e=>h.current.delete(e))),_t(!1===l||null!=t,'You provided the `flushSync` option to a router update, but you are not using the `<RouterProvider>` from `react-router/dom` so `ReactDOM.flushSync()` is unavailable.  Please update your app to `import { RouterProvider } from "react-router/dom"` and ensure you have `react-dom` installed as a dependency to use the `flushSync` option.')
let v=null!=e.window&&null!=e.window.document&&'function'==typeof e.window.document.startViewTransition
if(_t(null==f||v,'You provided the `viewTransition` option to a router update, but you do not appear to be running in a DOM environment as `window.startViewTransition` is not available.'),f&&v){if(t&&l){t((()=>{u&&(s&&s.resolve(),u.skipTransition()),i({isTransitioning:!0,flushSync:!0,currentLocation:f.currentLocation,nextLocation:f.nextLocation})}))
let a=e.window.document.startViewTransition((()=>{t((()=>r(n)))}))
return a.finished.finally((()=>{t((()=>{c(void 0),d(void 0),o(void 0),i({isTransitioning:!1})}))})),void t((()=>d(a)))}u?(s&&s.resolve(),u.skipTransition(),m({state:n,currentLocation:f.currentLocation,nextLocation:f.nextLocation})):(o(n),i({isTransitioning:!0,flushSync:!1,currentLocation:f.currentLocation,nextLocation:f.nextLocation}))}else t&&l?t((()=>r(n))):p.startTransition((()=>r(n)))}),[e.window,t,u,s])
p.useLayoutEffect((()=>e.subscribe(v)),[e,v]),p.useEffect((()=>{l.isTransitioning&&!l.flushSync&&c(new Lt)}),[l]),p.useEffect((()=>{if(s&&a&&e.window){let t=a,n=s.promise,l=e.window.document.startViewTransition((async()=>{p.startTransition((()=>r(t))),await n}))
l.finished.finally((()=>{c(void 0),d(void 0),o(void 0),i({isTransitioning:!1})})),d(l)}}),[a,s,e.window]),p.useEffect((()=>{s&&a&&n.location.key===a.location.key&&s.resolve()}),[s,u,n.location,a]),p.useEffect((()=>{!l.isTransitioning&&f&&(o(f.state),i({isTransitioning:!0,flushSync:!1,currentLocation:f.currentLocation,nextLocation:f.nextLocation}),m(void 0))}),[l.isTransitioning,f])
let g=p.useMemo((()=>({createHref:e.createHref,encodeLocation:e.encodeLocation,go:t=>e.navigate(t),push:(t,n,r)=>e.navigate(t,{state:n,preventScrollReset:null==r?void 0:r.preventScrollReset}),replace:(t,n,r)=>e.navigate(t,{replace:!0,state:n,preventScrollReset:null==r?void 0:r.preventScrollReset})})),[e]),y=e.basename||'/',b=p.useMemo((()=>({router:e,navigator:g,static:!1,basename:y})),[e,g,y])
return p.createElement(p.Fragment,null,p.createElement(st.Provider,{value:b},p.createElement(ct.Provider,{value:n},p.createElement(dt.Provider,{value:h.current},p.createElement(ut.Provider,{value:l},p.createElement(It,{basename:y,location:n.location,navigationType:n.historyAction,navigator:g},p.createElement(jt,{routes:e.routes,future:e.future,state:n})))))),null)}var jt=p.memo((function({routes:e,future:t,state:n}){return function(e,t,n){D(vt(),'useRoutes() may be used only in the context of a <Router> component.')
let r,{navigator:a,static:o}=p.useContext(ft),{matches:l}=p.useContext(mt),i=l[l.length-1],s=i?i.params:{},c=i?i.pathname:'/',u=i?i.pathnameBase:'/',d=i&&i.route
{let e=d&&d.path||''
Tt(c,!d||e.endsWith('*')||e.endsWith('*?'),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${c}" (under <Route path="${e}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.\n\nPlease change the parent <Route path="${e}"> to <Route path="${'/'===e?'*':`${e}/*`}">.`)}r=gt()
let f=r.pathname||'/',m=f
if('/'!==u){let e=u.replace(/^\//,'').split('/')
m='/'+f.replace(/^\//,'').split('/').slice(e.length).join('/')}let h=!o&&n&&n.matches&&n.matches.length>0?n.matches:$(e,{pathname:m})
return j(d||null!=h,`No routes matched location "${r.pathname}${r.search}${r.hash}" `),j(null==h||void 0!==h[h.length-1].route.element||void 0!==h[h.length-1].route.Component||void 0!==h[h.length-1].route.lazy,`Matched leaf route at location "${r.pathname}${r.search}${r.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`),function(e,t=[],n=null){if(null==e){if(!n)return null
if(n.errors)e=n.matches
else{if(0!==t.length||n.initialized||!(n.matches.length>0))return null
e=n.matches}}let r=e,a=null==n?void 0:n.errors
if(null!=a){let e=r.findIndex((e=>e.route.id&&void 0!==(null==a?void 0:a[e.route.id])))
D(e>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(a).join(',')}`),r=r.slice(0,Math.min(r.length,e+1))}let o=!1,l=-1
if(n)for(let i=0;i<r.length;i++){let e=r[i]
if((e.route.HydrateFallback||e.route.hydrateFallbackElement)&&(l=i),e.route.id){let{loaderData:t,errors:a}=n,i=e.route.loader&&!t.hasOwnProperty(e.route.id)&&(!a||void 0===a[e.route.id])
if(e.route.lazy||i){o=!0,r=l>=0?r.slice(0,l+1):[r[0]]
break}}}return r.reduceRight(((e,i,s)=>{let c,u=!1,d=null,f=null
n&&(c=a&&i.route.id?a[i.route.id]:void 0,d=i.route.errorElement||St,o&&(l<0&&0===s?(Tt('route-fallback',!1,'No `HydrateFallback` element provided to render during initial hydration'),u=!0,f=null):l===s&&(u=!0,f=i.route.hydrateFallbackElement||null)))
let m=t.concat(r.slice(0,s+1)),h=()=>{let t
return t=c?d:u?f:i.route.Component?p.createElement(i.route.Component,null):i.route.element?i.route.element:e,p.createElement(kt,{match:i,routeContext:{outlet:e,matches:m,isDataRoute:null!=n},children:t})}
return n&&(i.route.ErrorBoundary||i.route.errorElement||0===s)?p.createElement(Et,{location:n.location,revalidation:n.revalidation,component:d,error:c,children:h(),routeContext:{outlet:null,matches:m,isDataRoute:!0}}):h()}),null)}(h&&h.map((e=>Object.assign({},e,{params:Object.assign({},s,e.params),pathname:ie([u,a.encodeLocation?a.encodeLocation(e.pathname).pathname:e.pathname]),pathnameBase:'/'===e.pathnameBase?u:ie([u,a.encodeLocation?a.encodeLocation(e.pathnameBase).pathname:e.pathnameBase])}))),l,n)}(e,0,n)}))
function It({basename:e='/',children:t=null,location:n,navigationType:r='POP',navigator:a,static:o=!1}){D(!vt(),'You cannot render a <Router> inside another <Router>. You should never have more than one in your app.')
let l=e.replace(/^\/*/,'/'),i=p.useMemo((()=>({basename:l,navigator:a,static:o,future:{}})),[l,a,o])
'string'==typeof n&&(n=z(n))
let{pathname:s='/',search:c='',hash:u='',state:d=null,key:f='default'}=n,m=p.useMemo((()=>{let e=ne(s,l)
return null==e?null:{location:{pathname:e,search:c,hash:u,state:d,key:f},navigationType:r}}),[l,s,c,u,d,f,r])
return j(null!=m,`<Router basename="${l}"> is not able to match the URL "${s}${c}${u}" because it does not start with the basename, so the <Router> won't render anything.`),null==m?null:p.createElement(ft.Provider,{value:i},p.createElement(pt.Provider,{children:t,value:m}))}var At='get',Ot='application/x-www-form-urlencoded'
function zt(e){return null!=e&&'string'==typeof e.tagName}var Ft=null,Bt=new Set(['application/x-www-form-urlencoded','multipart/form-data','text/plain'])
function $t(e){return null==e||Bt.has(e)?e:(j(!1,`"${e}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Ot}"`),null)}function Ht(e,t){if(!1===e||null==e)throw new Error(t)}function Vt(e){return null!=e&&(null==e.href?'preload'===e.rel&&'string'==typeof e.imageSrcSet&&'string'==typeof e.imageSizes:'string'==typeof e.rel&&'string'==typeof e.href)}function Wt(e,t,n,r,a,o){let l=(e,t)=>!n[t]||e.route.id!==n[t].route.id,i=(e,t)=>{var r
return n[t].pathname!==e.pathname||(null==(r=n[t].route.path)?void 0:r.endsWith('*'))&&n[t].params['*']!==e.params['*']}
return'assets'===o?t.filter(((e,t)=>l(e,t)||i(e,t))):'data'===o?t.filter(((t,o)=>{var s
let c=r.routes[t.route.id]
if(!c||!c.hasLoader)return!1
if(l(t,o)||i(t,o))return!0
if(t.route.shouldRevalidate){let r=t.route.shouldRevalidate({currentUrl:new URL(a.pathname+a.search+a.hash,window.origin),currentParams:(null==(s=n[0])?void 0:s.params)||{},nextUrl:new URL(e,window.origin),nextParams:t.params,defaultShouldRevalidate:!0})
if('boolean'==typeof r)return r}return!0})):[]}var Ut=p.createContext(void 0)
function Kt(){let e=p.useContext(Ut)
return Ht(e,'You must render this element inside a <HydratedRouter> element'),e}function Gt(e,t){return n=>{e&&e(n),n.defaultPrevented||t(n)}}function qt({page:e,...t}){let{router:n}=function(){let e=p.useContext(st)
return Ht(e,'You must render this element inside a <DataRouterContext.Provider> element'),e}(),r=p.useMemo((()=>$(n.routes,e,n.basename)),[n.routes,e,n.basename])
return r?p.createElement(Yt,{page:e,matches:r,...t}):null}function Yt({page:e,matches:t,...n}){let r=gt(),{manifest:a,routeModules:o}=Kt(),{loaderData:l,matches:i}=function(){let e=p.useContext(ct)
return Ht(e,'You must render this element inside a <DataRouterStateContext.Provider> element'),e}(),s=p.useMemo((()=>Wt(e,t,i,a,r,'data')),[e,t,i,a,r]),c=p.useMemo((()=>Wt(e,t,i,a,r,'assets')),[e,t,i,a,r]),u=p.useMemo((()=>{if(e===r.pathname+r.search+r.hash)return[]
let n=new Set,i=!1
if(t.forEach((e=>{var t
let r=a.routes[e.route.id]
r&&r.hasLoader&&(!s.some((t=>t.route.id===e.route.id))&&e.route.id in l&&(null==(t=o[e.route.id])?void 0:t.shouldRevalidate)||r.hasClientLoader?i=!0:n.add(e.route.id))})),0===n.size)return[]
let c=function(e){let t='string'==typeof e?new URL(e,'undefined'==typeof window?'server://singlefetch/':window.location.origin):e
return'/'===t.pathname?t.pathname='_root.data':t.pathname=`${t.pathname.replace(/\/$/,'')}.data`,t}(e)
return i&&n.size>0&&c.searchParams.set('_routes',t.filter((e=>n.has(e.route.id))).map((e=>e.route.id)).join(',')),[c.pathname+c.search]}),[l,r,a,s,t,e,o]),d=p.useMemo((()=>function(e,t,{includeHydrateFallback:n}={}){return r=e.map((e=>{let r=t.routes[e.route.id]
if(!r)return[]
let a=[r.module]
return r.clientActionModule&&(a=a.concat(r.clientActionModule)),r.clientLoaderModule&&(a=a.concat(r.clientLoaderModule)),n&&r.hydrateFallbackModule&&(a=a.concat(r.hydrateFallbackModule)),r.imports&&(a=a.concat(r.imports)),a})).flat(1),[...new Set(r)]
var r}(c,a)),[c,a]),f=function(e){let{manifest:t,routeModules:n}=Kt(),[r,a]=p.useState([])
return p.useEffect((()=>{let r=!1
return async function(e,t,n){return function(e){let t=new Set
return new Set(void 0),e.reduce(((e,n)=>{let r=JSON.stringify(function(e){let t={},n=Object.keys(e).sort()
for(let r of n)t[r]=e[r]
return t}(n))
return t.has(r)||(t.add(r),e.push({key:r,link:n})),e}),[])}((await Promise.all(e.map((async e=>{let r=t.routes[e.route.id]
if(r){let e=await async function(e,t){if(e.id in t)return t[e.id]
try{let n=await import(e.module)
return t[e.id]=n,n}catch(n){return window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise((()=>{}))}}(r,n)
return e.links?e.links():[]}return[]})))).flat(1).filter(Vt).filter((e=>'stylesheet'===e.rel||'preload'===e.rel)).map((e=>'stylesheet'===e.rel?{...e,rel:'prefetch',as:'style'}:{...e,rel:'prefetch'})))}(e,t,n).then((e=>{r||a(e)})),()=>{r=!0}}),[e,t,n]),r}(c)
return p.createElement(p.Fragment,null,u.map((e=>p.createElement('link',{key:e,rel:'prefetch',as:'fetch',href:e,...n}))),d.map((e=>p.createElement('link',{key:e,rel:'modulepreload',href:e,...n}))),f.map((({key:e,link:t})=>p.createElement('link',{key:e,...t}))))}function Xt(...e){return t=>{e.forEach((e=>{'function'==typeof e?e(t):null!=e&&(e.current=t)}))}}Ut.displayName='FrameworkContext'
var Qt='undefined'!=typeof window&&void 0!==window.document&&void 0!==window.document.createElement
try{Qt&&(window.__reactRouterVersion='7.2.0')}catch(EC){}function Zt(e){if(!e)return null
let t=Object.entries(e),n={}
for(let[r,a]of t)if(a&&'RouteErrorResponse'===a.__type)n[r]=new de(a.status,a.statusText,a.data,!0===a.internal)
else if(a&&'Error'===a.__type){if(a.__subType){let e=window[a.__subType]
if('function'==typeof e)try{let t=new e(a.message)
t.stack='',n[r]=t}catch(EC){}}if(null==n[r]){let e=new Error(a.message)
e.stack='',n[r]=e}}else n[r]=a
return n}var Jt=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,en=p.forwardRef((function({onClick:e,discover:t='render',prefetch:n='none',relative:r,reloadDocument:a,replace:o,state:l,target:i,to:s,preventScrollReset:c,viewTransition:u,...d},f){let m,{basename:h}=p.useContext(ft),v='string'==typeof s&&Jt.test(s),g=!1
if('string'==typeof s&&v&&(m=s,Qt))try{let e=new URL(window.location.href),t=s.startsWith('//')?new URL(e.protocol+s):new URL(s),n=ne(t.pathname,h)
t.origin===e.origin&&null!=n?s=n+t.search+t.hash:g=!0}catch(EC){j(!1,`<Link to="${s}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let y=function(e,{relative:t}={}){D(vt(),'useHref() may be used only in the context of a <Router> component.')
let{basename:n,navigator:r}=p.useContext(ft),{hash:a,pathname:o,search:l}=xt(e,{relative:t}),i=o
return'/'!==n&&(i='/'===o?n:ie([n,o])),r.createHref({pathname:i,search:l,hash:a})}(s,{relative:r}),[b,w,x]=function(e,t){let n=p.useContext(Ut),[r,a]=p.useState(!1),[o,l]=p.useState(!1),{onFocus:i,onBlur:s,onMouseEnter:c,onMouseLeave:u,onTouchStart:d}=t,f=p.useRef(null)
p.useEffect((()=>{if('render'===e&&l(!0),'viewport'===e){let e=new IntersectionObserver((e=>{e.forEach((e=>{l(e.isIntersecting)}))}),{threshold:.5})
return f.current&&e.observe(f.current),()=>{e.disconnect()}}}),[e]),p.useEffect((()=>{if(r){let e=setTimeout((()=>{l(!0)}),100)
return()=>{clearTimeout(e)}}}),[r])
let m=()=>{a(!0)},h=()=>{a(!1),l(!1)}
return n?'intent'!==e?[o,f,{}]:[o,f,{onFocus:Gt(i,m),onBlur:Gt(s,h),onMouseEnter:Gt(c,m),onMouseLeave:Gt(u,h),onTouchStart:Gt(d,m)}]:[!1,f,{}]}(n,d),C=function(e,{target:t,replace:n,state:r,preventScrollReset:a,relative:o,viewTransition:l}={}){let i=wt(),s=gt(),c=xt(e,{relative:o})
return p.useCallback((u=>{if(function(e,t){return!(0!==e.button||t&&'_self'!==t||function(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}(e))}(u,t)){u.preventDefault()
let t=void 0!==n?n:O(s)===O(c)
i(e,{replace:t,state:r,preventScrollReset:a,relative:o,viewTransition:l})}}),[s,i,c,n,r,t,e,a,o,l])}(s,{replace:o,state:l,target:i,preventScrollReset:c,relative:r,viewTransition:u}),S=p.createElement('a',{...d,...x,href:m||y,onClick:g||a?e:function(t){e&&e(t),t.defaultPrevented||C(t)},ref:Xt(f,w),target:i,'data-discover':v||'render'!==t?void 0:'true'})
return b&&!v?p.createElement(p.Fragment,null,S,p.createElement(qt,{page:y})):S}))
en.displayName='Link'
var tn=p.forwardRef((function({'aria-current':e='page',caseSensitive:t=!1,className:n='',end:r=!1,style:a,to:o,viewTransition:l,children:i,...s},c){let u=xt(o,{relative:s.relative}),d=gt(),f=p.useContext(ct),{navigator:m,basename:h}=p.useContext(ft),v=null!=f&&function(e,t={}){let n=p.useContext(ut)
D(null!=n,'`useViewTransitionState` must be used within `react-router-dom`\'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?')
let{basename:r}=rn('useViewTransitionState'),a=xt(e,{relative:t.relative})
if(!n.isTransitioning)return!1
let o=ne(n.currentLocation.pathname,r)||n.currentLocation.pathname,l=ne(n.nextLocation.pathname,r)||n.nextLocation.pathname
return null!=ee(a.pathname,l)||null!=ee(a.pathname,o)}(u)&&!0===l,g=m.encodeLocation?m.encodeLocation(u).pathname:u.pathname,y=d.pathname,b=f&&f.navigation&&f.navigation.location?f.navigation.location.pathname:null
t||(y=y.toLowerCase(),b=b?b.toLowerCase():null,g=g.toLowerCase()),b&&h&&(b=ne(b,h)||b)
const w='/'!==g&&g.endsWith('/')?g.length-1:g.length
let x,C=y===g||!r&&y.startsWith(g)&&'/'===y.charAt(w),S=null!=b&&(b===g||!r&&b.startsWith(g)&&'/'===b.charAt(g.length)),E={isActive:C,isPending:S,isTransitioning:v},k=C?e:void 0
x='function'==typeof n?n(E):[n,C?'active':null,S?'pending':null,v?'transitioning':null].filter(Boolean).join(' ')
let N='function'==typeof a?a(E):a
return p.createElement(en,{...s,'aria-current':k,className:x,ref:c,style:N,to:o,viewTransition:l},'function'==typeof i?i(E):i)}))
tn.displayName='NavLink'
var nn=p.forwardRef((({discover:e='render',fetcherKey:t,navigate:n,reloadDocument:r,replace:a,state:o,method:l=At,action:i,onSubmit:s,relative:c,preventScrollReset:u,viewTransition:d,...f},m)=>{let h=function(){let{router:e}=rn('useSubmit'),{basename:t}=p.useContext(ft),n=Rt('useRouteId')
return p.useCallback((async(r,a={})=>{let{action:o,method:l,encType:i,formData:s,body:c}=function(e,t){let n,r,a,o,l
if(zt(i=e)&&'form'===i.tagName.toLowerCase()){let l=e.getAttribute('action')
r=l?ne(l,t):null,n=e.getAttribute('method')||At,a=$t(e.getAttribute('enctype'))||Ot,o=new FormData(e)}else if(function(e){return zt(e)&&'button'===e.tagName.toLowerCase()}(e)||function(e){return zt(e)&&'input'===e.tagName.toLowerCase()}(e)&&('submit'===e.type||'image'===e.type)){let l=e.form
if(null==l)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>')
let i=e.getAttribute('formaction')||l.getAttribute('action')
if(r=i?ne(i,t):null,n=e.getAttribute('formmethod')||l.getAttribute('method')||At,a=$t(e.getAttribute('formenctype'))||$t(l.getAttribute('enctype'))||Ot,o=new FormData(l,e),!function(){if(null===Ft)try{new FormData(document.createElement('form'),0),Ft=!1}catch(EC){Ft=!0}return Ft}()){let{name:t,type:n,value:r}=e
if('image'===n){let e=t?`${t}.`:''
o.append(`${e}x`,'0'),o.append(`${e}y`,'0')}else t&&o.append(t,r)}}else{if(zt(e))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">')
n=At,r=null,a=Ot,l=e}var i
return o&&'text/plain'===a&&(l=o,o=void 0),{action:r,method:n.toLowerCase(),encType:a,formData:o,body:l}}(r,t)
if(!1===a.navigate){let t=a.fetcherKey||on()
await e.fetch(t,n,a.action||o,{preventScrollReset:a.preventScrollReset,formData:s,body:c,formMethod:a.method||l,formEncType:a.encType||i,flushSync:a.flushSync})}else await e.navigate(a.action||o,{preventScrollReset:a.preventScrollReset,formData:s,body:c,formMethod:a.method||l,formEncType:a.encType||i,replace:a.replace,state:a.state,fromRouteId:n,flushSync:a.flushSync,viewTransition:a.viewTransition})}),[e,t,n])}(),v=function(e,{relative:t}={}){let{basename:n}=p.useContext(ft),r=p.useContext(mt)
D(r,'useFormAction must be used inside a RouteContext')
let[a]=r.matches.slice(-1),o={...xt(e||'.',{relative:t})},l=gt()
if(null==e){o.search=l.search
let e=new URLSearchParams(o.search),t=e.getAll('index')
if(t.some((e=>''===e))){e.delete('index'),t.filter((e=>e)).forEach((t=>e.append('index',t)))
let n=e.toString()
o.search=n?`?${n}`:''}}return e&&'.'!==e||!a.route.index||(o.search=o.search?o.search.replace(/^\?/,'?index&'):'?index'),'/'!==n&&(o.pathname='/'===o.pathname?n:ie([n,o.pathname])),O(o)}(i,{relative:c}),g='get'===l.toLowerCase()?'get':'post',y='string'==typeof i&&Jt.test(i)
return p.createElement('form',{ref:m,method:g,action:v,onSubmit:r?s:e=>{if(s&&s(e),e.defaultPrevented)return
e.preventDefault()
let r=e.nativeEvent.submitter,i=(null==r?void 0:r.getAttribute('formmethod'))||l
h(r||e.currentTarget,{fetcherKey:t,method:i,navigate:n,replace:a,state:o,relative:c,preventScrollReset:u,viewTransition:d})},...f,'data-discover':y||'render'!==e?void 0:'true'})}))
function rn(e){let t=p.useContext(st)
return D(t,function(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}(e)),t}nn.displayName='Form'
var an=0,on=()=>`__${String(++an)}__`
new TextEncoder
var ln=P()
const sn=t(ln)
function cn(e){return p.createElement(Dt,{flushSync:ln.flushSync,...e})}function un(e,t){if('function'==typeof e)return e(t)
null!=e&&(e.current=t)}function dn(...e){return t=>{let n=!1
const r=e.map((e=>{const r=un(e,t)
return n||'function'!=typeof r||(n=!0),r}))
if(n)return()=>{for(let t=0;t<r.length;t++){const n=r[t]
'function'==typeof n?n():un(e[t],null)}}}}function fn(...e){return p.useCallback(dn(...e),e)}var pn=p.forwardRef(((e,t)=>{const{children:n,...r}=e,a=p.Children.toArray(n),o=a.find(vn)
if(o){const e=o.props.children,n=a.map((t=>t===o?p.Children.count(e)>1?p.Children.only(null):p.isValidElement(e)?e.props.children:null:t))
return s.jsx(mn,{...r,ref:t,children:p.isValidElement(e)?p.cloneElement(e,void 0,n):null})}return s.jsx(mn,{...r,ref:t,children:n})}))
pn.displayName='Slot'
var mn=p.forwardRef(((e,t)=>{const{children:n,...r}=e
if(p.isValidElement(n)){const e=function(e){var t,n
let r=null==(t=Object.getOwnPropertyDescriptor(e.props,'ref'))?void 0:t.get,a=r&&'isReactWarning'in r&&r.isReactWarning
return a?e.ref:(r=null==(n=Object.getOwnPropertyDescriptor(e,'ref'))?void 0:n.get,a=r&&'isReactWarning'in r&&r.isReactWarning,a?e.props.ref:e.props.ref||e.ref)}(n),a=function(e,t){const n={...t}
for(const r in t){const a=e[r],o=t[r];/^on[A-Z]/.test(r)?a&&o?n[r]=(...e)=>{o(...e),a(...e)}:a&&(n[r]=a):'style'===r?n[r]={...a,...o}:'className'===r&&(n[r]=[a,o].filter(Boolean).join(' '))}return{...e,...n}}(r,n.props)
return n.type!==p.Fragment&&(a.ref=t?dn(t,e):e),p.cloneElement(n,a)}return p.Children.count(n)>1?p.Children.only(null):null}))
mn.displayName='SlotClone'
var hn=({children:e})=>s.jsx(s.Fragment,{children:e})
function vn(e){return p.isValidElement(e)&&e.type===hn}var gn=pn,yn=['a','button','div','form','h2','h3','img','input','label','li','nav','ol','p','span','svg','ul'].reduce(((e,t)=>{const n=p.forwardRef(((e,n)=>{const{asChild:r,...a}=e,o=r?pn:t
return'undefined'!=typeof window&&(window[Symbol.for('radix-ui')]=!0),s.jsx(o,{...a,ref:n})}))
return n.displayName=`Primitive.${t}`,{...e,[t]:n}}),{})
function bn(e,t){e&&ln.flushSync((()=>e.dispatchEvent(t)))}var wn=p.forwardRef(((e,t)=>s.jsx(yn.span,{...e,ref:t,style:{position:'absolute',border:0,width:1,height:1,padding:0,margin:-1,overflow:'hidden',clip:'rect(0, 0, 0, 0)',whiteSpace:'nowrap',wordWrap:'normal',...e.style}})))
wn.displayName='VisuallyHidden'
var xn=wn,Cn=({children:e,label:t})=>{const n=p.Children.only(e)
return s.jsxs(s.Fragment,{children:[p.cloneElement(n,{'aria-hidden':'true',focusable:'false'}),s.jsx(xn,{children:t})]})}
Cn.displayName='AccessibleIcon'
var Sn=Cn
function En(e,t=[]){let n=[]
const r=()=>{const t=n.map((e=>p.createContext(e)))
return function(n){const r=(null==n?void 0:n[e])||t
return p.useMemo((()=>({[`__scope${e}`]:{...n,[e]:r}})),[n,r])}}
return r.scopeName=e,[function(t,r){const a=p.createContext(r),o=n.length
n=[...n,r]
const l=t=>{var n
const{scope:r,children:l,...i}=t,c=(null==(n=null==r?void 0:r[e])?void 0:n[o])||a,u=p.useMemo((()=>i),Object.values(i))
return s.jsx(c.Provider,{value:u,children:l})}
return l.displayName=t+'Provider',[l,function(n,l){var i
const s=(null==(i=null==l?void 0:l[e])?void 0:i[o])||a,c=p.useContext(s)
if(c)return c
if(void 0!==r)return r
throw new Error(`\`${n}\` must be used within \`${t}\``)}]},kn(r,...t)]}function kn(...e){const t=e[0]
if(1===e.length)return t
const n=()=>{const n=e.map((e=>({useScope:e(),scopeName:e.scopeName})))
return function(e){const r=n.reduce(((t,{useScope:n,scopeName:r})=>({...t,...n(e)[`__scope${r}`]})),{})
return p.useMemo((()=>({[`__scope${t.scopeName}`]:r})),[r])}}
return n.scopeName=t.scopeName,n}function Nn(e){const t=e+'CollectionProvider',[n,r]=En(t),[a,o]=n(t,{collectionRef:{current:null},itemMap:new Map}),l=e=>{const{scope:t,children:n}=e,r=m.useRef(null),o=m.useRef(new Map).current
return s.jsx(a,{scope:t,itemMap:o,collectionRef:r,children:n})}
l.displayName=t
const i=e+'CollectionSlot',c=m.forwardRef(((e,t)=>{const{scope:n,children:r}=e,a=fn(t,o(i,n).collectionRef)
return s.jsx(pn,{ref:a,children:r})}))
c.displayName=i
const u=e+'CollectionItemSlot',d='data-radix-collection-item',f=m.forwardRef(((e,t)=>{const{scope:n,children:r,...a}=e,l=m.useRef(null),i=fn(t,l),c=o(u,n)
return m.useEffect((()=>(c.itemMap.set(l,{ref:l,...a}),()=>{c.itemMap.delete(l)}))),s.jsx(pn,{[d]:'',ref:i,children:r})}))
return f.displayName=u,[{Provider:l,Slot:c,ItemSlot:f},function(t){const n=o(e+'CollectionConsumer',t)
return m.useCallback((()=>{const e=n.collectionRef.current
if(!e)return[]
const t=Array.from(e.querySelectorAll(`[${d}]`))
return Array.from(n.itemMap.values()).sort(((e,n)=>t.indexOf(e.ref.current)-t.indexOf(n.ref.current)))}),[n.collectionRef,n.itemMap])},r]}function Rn(e,t,{checkForDefaultPrevented:n=!0}={}){return function(r){if(null==e||e(r),!1===n||!r.defaultPrevented)return null==t?void 0:t(r)}}function Pn(e){const t=p.useRef(e)
return p.useEffect((()=>{t.current=e})),p.useMemo((()=>(...e)=>{var n
return null==(n=t.current)?void 0:n.call(t,...e)}),[])}function Tn({prop:e,defaultProp:t,onChange:n=()=>{}}){const[r,a]=function({defaultProp:e,onChange:t}){const n=p.useState(e),[r]=n,a=p.useRef(r),o=Pn(t)
return p.useEffect((()=>{a.current!==r&&(o(r),a.current=r)}),[r,a,o]),n}({defaultProp:t,onChange:n}),o=void 0!==e,l=o?e:r,i=Pn(n)
return[l,p.useCallback((t=>{if(o){const n='function'==typeof t?t(e):t
n!==e&&i(n)}else a(t)}),[o,e,a,i])]}var Mn=Boolean(null==globalThis?void 0:globalThis.document)?p.useLayoutEffect:()=>{},_n=e=>{const{present:t,children:n}=e,r=function(e){const[t,n]=p.useState(),r=p.useRef({}),a=p.useRef(e),o=p.useRef('none'),l=e?'mounted':'unmounted',[i,s]=function(e,t){return p.useReducer(((e,n)=>t[e][n]??e),e)}(l,{mounted:{UNMOUNT:'unmounted',ANIMATION_OUT:'unmountSuspended'},unmountSuspended:{MOUNT:'mounted',ANIMATION_END:'unmounted'},unmounted:{MOUNT:'mounted'}})
return p.useEffect((()=>{const e=Ln(r.current)
o.current='mounted'===i?e:'none'}),[i]),Mn((()=>{const t=r.current,n=a.current
if(n!==e){const r=o.current,l=Ln(t)
e?s('MOUNT'):'none'===l||'none'===(null==t?void 0:t.display)?s('UNMOUNT'):s(n&&r!==l?'ANIMATION_OUT':'UNMOUNT'),a.current=e}}),[e,s]),Mn((()=>{if(t){let e
const n=t.ownerDocument.defaultView??window,l=o=>{const l=Ln(r.current).includes(o.animationName)
if(o.target===t&&l&&(s('ANIMATION_END'),!a.current)){const r=t.style.animationFillMode
t.style.animationFillMode='forwards',e=n.setTimeout((()=>{'forwards'===t.style.animationFillMode&&(t.style.animationFillMode=r)}))}},i=e=>{e.target===t&&(o.current=Ln(r.current))}
return t.addEventListener('animationstart',i),t.addEventListener('animationcancel',l),t.addEventListener('animationend',l),()=>{n.clearTimeout(e),t.removeEventListener('animationstart',i),t.removeEventListener('animationcancel',l),t.removeEventListener('animationend',l)}}s('ANIMATION_END')}),[t,s]),{isPresent:['mounted','unmountSuspended'].includes(i),ref:p.useCallback((e=>{e&&(r.current=getComputedStyle(e)),n(e)}),[])}}(t),a='function'==typeof n?n({present:r.isPresent}):p.Children.only(n),o=fn(r.ref,function(e){var t,n
let r=null==(t=Object.getOwnPropertyDescriptor(e.props,'ref'))?void 0:t.get,a=r&&'isReactWarning'in r&&r.isReactWarning
return a?e.ref:(r=null==(n=Object.getOwnPropertyDescriptor(e,'ref'))?void 0:n.get,a=r&&'isReactWarning'in r&&r.isReactWarning,a?e.props.ref:e.props.ref||e.ref)}(a))
return'function'==typeof n||r.isPresent?p.cloneElement(a,{ref:o}):null}
function Ln(e){return(null==e?void 0:e.animationName)||'none'}_n.displayName='Presence'
var Dn=h['useId'.toString()]||(()=>{}),jn=0
function In(e){const[t,n]=p.useState(Dn())
return Mn((()=>{n((e=>e??String(jn++)))}),[e]),t?`radix-${t}`:''}var An=p.createContext(void 0),On=e=>{const{dir:t,children:n}=e
return s.jsx(An.Provider,{value:t,children:n})}
function zn(e){const t=p.useContext(An)
return e||t||'ltr'}var Fn=On
const Bn=Object.freeze(Object.defineProperty({__proto__:null,DirectionProvider:On,Provider:Fn,useDirection:zn},Symbol.toStringTag,{value:'Module'}))
var $n,Hn='dismissableLayer.update',Vn=p.createContext({layers:new Set,layersWithOutsidePointerEventsDisabled:new Set,branches:new Set}),Wn=p.forwardRef(((e,t)=>{const{disableOutsidePointerEvents:n=!1,onEscapeKeyDown:r,onPointerDownOutside:a,onFocusOutside:o,onInteractOutside:l,onDismiss:i,...c}=e,u=p.useContext(Vn),[d,f]=p.useState(null),m=(null==d?void 0:d.ownerDocument)??(null==globalThis?void 0:globalThis.document),[,h]=p.useState({}),v=fn(t,(e=>f(e))),g=Array.from(u.layers),[y]=[...u.layersWithOutsidePointerEventsDisabled].slice(-1),b=g.indexOf(y),w=d?g.indexOf(d):-1,x=u.layersWithOutsidePointerEventsDisabled.size>0,C=w>=b,S=function(e,t=(null==globalThis?void 0:globalThis.document)){const n=Pn(e),r=p.useRef(!1),a=p.useRef((()=>{}))
return p.useEffect((()=>{const e=e=>{if(e.target&&!r.current){let r=function(){Kn('dismissableLayer.pointerDownOutside',n,o,{discrete:!0})}
const o={originalEvent:e}
'touch'===e.pointerType?(t.removeEventListener('click',a.current),a.current=r,t.addEventListener('click',a.current,{once:!0})):r()}else t.removeEventListener('click',a.current)
r.current=!1},o=window.setTimeout((()=>{t.addEventListener('pointerdown',e)}),0)
return()=>{window.clearTimeout(o),t.removeEventListener('pointerdown',e),t.removeEventListener('click',a.current)}}),[t,n]),{onPointerDownCapture:()=>r.current=!0}}((e=>{const t=e.target,n=[...u.branches].some((e=>e.contains(t)))
C&&!n&&(null==a||a(e),null==l||l(e),e.defaultPrevented||null==i||i())}),m),E=function(e,t=(null==globalThis?void 0:globalThis.document)){const n=Pn(e),r=p.useRef(!1)
return p.useEffect((()=>{const e=e=>{e.target&&!r.current&&Kn('dismissableLayer.focusOutside',n,{originalEvent:e},{discrete:!1})}
return t.addEventListener('focusin',e),()=>t.removeEventListener('focusin',e)}),[t,n]),{onFocusCapture:()=>r.current=!0,onBlurCapture:()=>r.current=!1}}((e=>{const t=e.target;[...u.branches].some((e=>e.contains(t)))||(null==o||o(e),null==l||l(e),e.defaultPrevented||null==i||i())}),m)
return function(e,t=(null==globalThis?void 0:globalThis.document)){const n=Pn(e)
p.useEffect((()=>{const e=e=>{'Escape'===e.key&&n(e)}
return t.addEventListener('keydown',e,{capture:!0}),()=>t.removeEventListener('keydown',e,{capture:!0})}),[n,t])}((e=>{w===u.layers.size-1&&(null==r||r(e),!e.defaultPrevented&&i&&(e.preventDefault(),i()))}),m),p.useEffect((()=>{if(d)return n&&(0===u.layersWithOutsidePointerEventsDisabled.size&&($n=m.body.style.pointerEvents,m.body.style.pointerEvents='none'),u.layersWithOutsidePointerEventsDisabled.add(d)),u.layers.add(d),Un(),()=>{n&&1===u.layersWithOutsidePointerEventsDisabled.size&&(m.body.style.pointerEvents=$n)}}),[d,m,n,u]),p.useEffect((()=>()=>{d&&(u.layers.delete(d),u.layersWithOutsidePointerEventsDisabled.delete(d),Un())}),[d,u]),p.useEffect((()=>{const e=()=>h({})
return document.addEventListener(Hn,e),()=>document.removeEventListener(Hn,e)}),[]),s.jsx(yn.div,{...c,ref:v,style:{pointerEvents:x?C?'auto':'none':void 0,...e.style},onFocusCapture:Rn(e.onFocusCapture,E.onFocusCapture),onBlurCapture:Rn(e.onBlurCapture,E.onBlurCapture),onPointerDownCapture:Rn(e.onPointerDownCapture,S.onPointerDownCapture)})}))
function Un(){const e=new CustomEvent(Hn)
document.dispatchEvent(e)}function Kn(e,t,n,{discrete:r}){const a=n.originalEvent.target,o=new CustomEvent(e,{bubbles:!1,cancelable:!0,detail:n})
t&&a.addEventListener(e,t,{once:!0}),r?bn(a,o):a.dispatchEvent(o)}Wn.displayName='DismissableLayer',p.forwardRef(((e,t)=>{const n=p.useContext(Vn),r=p.useRef(null),a=fn(t,r)
return p.useEffect((()=>{const e=r.current
if(e)return n.branches.add(e),()=>{n.branches.delete(e)}}),[n.branches]),s.jsx(yn.div,{...e,ref:a})})).displayName='DismissableLayerBranch'
var Gn='focusScope.autoFocusOnMount',qn='focusScope.autoFocusOnUnmount',Yn={bubbles:!1,cancelable:!0},Xn=p.forwardRef(((e,t)=>{const{loop:n=!1,trapped:r=!1,onMountAutoFocus:a,onUnmountAutoFocus:o,...l}=e,[i,c]=p.useState(null),u=Pn(a),d=Pn(o),f=p.useRef(null),m=fn(t,(e=>c(e))),h=p.useRef({paused:!1,pause(){this.paused=!0},resume(){this.paused=!1}}).current
p.useEffect((()=>{if(r){let e=function(e){if(h.paused||!i)return
const t=e.target
i.contains(t)?f.current=t:er(f.current,{select:!0})},t=function(e){if(h.paused||!i)return
const t=e.relatedTarget
null!==t&&(i.contains(t)||er(f.current,{select:!0}))},n=function(e){if(document.activeElement===document.body)for(const t of e)t.removedNodes.length>0&&er(i)}
document.addEventListener('focusin',e),document.addEventListener('focusout',t)
const r=new MutationObserver(n)
return i&&r.observe(i,{childList:!0,subtree:!0}),()=>{document.removeEventListener('focusin',e),document.removeEventListener('focusout',t),r.disconnect()}}}),[r,i,h.paused]),p.useEffect((()=>{if(i){tr.add(h)
const e=document.activeElement
if(!i.contains(e)){const t=new CustomEvent(Gn,Yn)
i.addEventListener(Gn,u),i.dispatchEvent(t),t.defaultPrevented||(function(e,{select:t=!1}={}){const n=document.activeElement
for(const r of e)if(er(r,{select:t}),document.activeElement!==n)return}(Qn(i).filter((e=>'A'!==e.tagName)),{select:!0}),document.activeElement===e&&er(i))}return()=>{i.removeEventListener(Gn,u),setTimeout((()=>{const t=new CustomEvent(qn,Yn)
i.addEventListener(qn,d),i.dispatchEvent(t),t.defaultPrevented||er(e??document.body,{select:!0}),i.removeEventListener(qn,d),tr.remove(h)}),0)}}}),[i,u,d,h])
const v=p.useCallback((e=>{if(!n&&!r)return
if(h.paused)return
const t='Tab'===e.key&&!e.altKey&&!e.ctrlKey&&!e.metaKey,a=document.activeElement
if(t&&a){const t=e.currentTarget,[r,o]=function(e){const t=Qn(e)
return[Zn(t,e),Zn(t.reverse(),e)]}(t)
r&&o?e.shiftKey||a!==o?e.shiftKey&&a===r&&(e.preventDefault(),n&&er(o,{select:!0})):(e.preventDefault(),n&&er(r,{select:!0})):a===t&&e.preventDefault()}}),[n,r,h.paused])
return s.jsx(yn.div,{tabIndex:-1,...l,ref:m,onKeyDown:v})}))
function Qn(e){const t=[],n=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode:e=>{const t='INPUT'===e.tagName&&'hidden'===e.type
return e.disabled||e.hidden||t?NodeFilter.FILTER_SKIP:e.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}})
for(;n.nextNode();)t.push(n.currentNode)
return t}function Zn(e,t){for(const n of e)if(!Jn(n,{upTo:t}))return n}function Jn(e,{upTo:t}){if('hidden'===getComputedStyle(e).visibility)return!0
for(;e;){if(void 0!==t&&e===t)return!1
if('none'===getComputedStyle(e).display)return!0
e=e.parentElement}return!1}function er(e,{select:t=!1}={}){if(e&&e.focus){const n=document.activeElement
e.focus({preventScroll:!0}),e!==n&&function(e){return e instanceof HTMLInputElement&&'select'in e}(e)&&t&&e.select()}}Xn.displayName='FocusScope'
var tr=function(){let e=[]
return{add(t){const n=e[0]
t!==n&&(null==n||n.pause()),e=nr(e,t),e.unshift(t)},remove(t){var n
e=nr(e,t),null==(n=e[0])||n.resume()}}}()
function nr(e,t){const n=[...e],r=n.indexOf(t)
return-1!==r&&n.splice(r,1),n}var rr=p.forwardRef(((e,t)=>{var n
const{container:r,...a}=e,[o,l]=p.useState(!1)
Mn((()=>l(!0)),[])
const i=r||o&&(null==(n=null==globalThis?void 0:globalThis.document)?void 0:n.body)
return i?sn.createPortal(s.jsx(yn.div,{...a,ref:t}),i):null}))
rr.displayName='Portal'
var ar=0
function or(){p.useEffect((()=>{const e=document.querySelectorAll('[data-radix-focus-guard]')
return document.body.insertAdjacentElement('afterbegin',e[0]??lr()),document.body.insertAdjacentElement('beforeend',e[1]??lr()),ar++,()=>{1===ar&&document.querySelectorAll('[data-radix-focus-guard]').forEach((e=>e.remove())),ar--}}),[])}function lr(){const e=document.createElement('span')
return e.setAttribute('data-radix-focus-guard',''),e.tabIndex=0,e.style.outline='none',e.style.opacity='0',e.style.position='fixed',e.style.pointerEvents='none',e}var ir=function(){return ir=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])
return e},ir.apply(this,arguments)}
function sr(e,t){var n={}
for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r])
if(null!=e&&'function'==typeof Object.getOwnPropertySymbols){var a=0
for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n}'function'==typeof SuppressedError&&SuppressedError
var cr='right-scroll-bar-position',ur='width-before-scroll-bar'
function dr(e,t){return'function'==typeof e?e(t):e&&(e.current=t),e}var fr='undefined'!=typeof window?p.useLayoutEffect:p.useEffect,pr=new WeakMap
function mr(e){return e}var hr=function(e){var t=e.sideCar,n=sr(e,['sideCar'])
if(!t)throw new Error('Sidecar: please provide `sideCar` property to import the right car')
var r=t.read()
if(!r)throw new Error('Sidecar medium not found')
return p.createElement(r,ir({},n))}
hr.isSideCarExport=!0
var vr=function(e){void 0===e&&(e={})
var t=function(e,t){void 0===t&&(t=mr)
var n=[],r=!1
return{read:function(){if(r)throw new Error('Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.')
return n.length?n[n.length-1]:null},useMedium:function(e){var a=t(e,r)
return n.push(a),function(){n=n.filter((function(e){return e!==a}))}},assignSyncMedium:function(e){for(r=!0;n.length;){var t=n
n=[],t.forEach(e)}n={push:function(t){return e(t)},filter:function(){return n}}},assignMedium:function(e){r=!0
var t=[]
if(n.length){var a=n
n=[],a.forEach(e),t=n}var o=function(){var n=t
t=[],n.forEach(e)},l=function(){return Promise.resolve().then(o)}
l(),n={push:function(e){t.push(e),l()},filter:function(e){return t=t.filter(e),n}}}}}()
return t.options=ir({async:!0,ssr:!1},e),t}(),gr=function(){},yr=p.forwardRef((function(e,t){var n=p.useRef(null),r=p.useState({onScrollCapture:gr,onWheelCapture:gr,onTouchMoveCapture:gr}),a=r[0],o=r[1],l=e.forwardProps,i=e.children,s=e.className,c=e.removeScrollBar,u=e.enabled,d=e.shards,f=e.sideCar,m=e.noIsolation,h=e.inert,v=e.allowPinchZoom,g=e.as,y=void 0===g?'div':g,b=e.gapMode,w=sr(e,['forwardProps','children','className','removeScrollBar','enabled','shards','sideCar','noIsolation','inert','allowPinchZoom','as','gapMode']),x=f,C=function(e){var t,n,r=(t=function(t){return e.forEach((function(e){return dr(e,t)}))},(n=p.useState((function(){return{value:null,callback:t,facade:{get current(){return n.value},set current(e){var t=n.value
t!==e&&(n.value=e,n.callback(e,t))}}}}))[0]).callback=t,n.facade)
return fr((function(){var t=pr.get(r)
if(t){var n=new Set(t),a=new Set(e),o=r.current
n.forEach((function(e){a.has(e)||dr(e,null)})),a.forEach((function(e){n.has(e)||dr(e,o)}))}pr.set(r,e)}),[e]),r}([n,t]),S=ir(ir({},w),a)
return p.createElement(p.Fragment,null,u&&p.createElement(x,{sideCar:vr,removeScrollBar:c,shards:d,noIsolation:m,inert:h,setCallbacks:o,allowPinchZoom:!!v,lockRef:n,gapMode:b}),l?p.cloneElement(p.Children.only(i),ir(ir({},S),{ref:C})):p.createElement(y,ir({},S,{className:s,ref:C}),i))}))
yr.defaultProps={enabled:!0,removeScrollBar:!0,inert:!1},yr.classNames={fullWidth:ur,zeroRight:cr}
var br=function(){var e,t,n,r=(t=0,n=null,e={add:function(e){var r,a
0==t&&(n=function(){if(!document)return null
var e=document.createElement('style')
e.type='text/css'
var t=function(){if('undefined'!=typeof __webpack_nonce__)return __webpack_nonce__}()
return t&&e.setAttribute('nonce',t),e}())&&(a=e,(r=n).styleSheet?r.styleSheet.cssText=a:r.appendChild(document.createTextNode(a)),function(e){(document.head||document.getElementsByTagName('head')[0]).appendChild(e)}(n)),t++},remove:function(){! --t&&n&&(n.parentNode&&n.parentNode.removeChild(n),n=null)}},function(t,n){p.useEffect((function(){return e.add(t),function(){e.remove()}}),[t&&n])})
return function(e){var t=e.styles,n=e.dynamic
return r(t,n),null}},wr={left:0,top:0,right:0,gap:0},xr=function(e){return parseInt(e||'',10)||0},Cr=br(),Sr='data-scroll-locked',Er=function(e,t,n,r){var a=e.left,o=e.top,l=e.right,i=e.gap
return void 0===n&&(n='margin'),'\n  .'.concat('with-scroll-bars-hidden',' {\n   overflow: hidden ').concat(r,';\n   padding-right: ').concat(i,'px ').concat(r,';\n  }\n  body[').concat(Sr,'] {\n    overflow: hidden ').concat(r,';\n    overscroll-behavior: contain;\n    ').concat([t&&'position: relative '.concat(r,';'),'margin'===n&&'\n    padding-left: '.concat(a,'px;\n    padding-top: ').concat(o,'px;\n    padding-right: ').concat(l,'px;\n    margin-left:0;\n    margin-top:0;\n    margin-right: ').concat(i,'px ').concat(r,';\n    '),'padding'===n&&'padding-right: '.concat(i,'px ').concat(r,';')].filter(Boolean).join(''),'\n  }\n  \n  .').concat(cr,' {\n    right: ').concat(i,'px ').concat(r,';\n  }\n  \n  .').concat(ur,' {\n    margin-right: ').concat(i,'px ').concat(r,';\n  }\n  \n  .').concat(cr,' .').concat(cr,' {\n    right: 0 ').concat(r,';\n  }\n  \n  .').concat(ur,' .').concat(ur,' {\n    margin-right: 0 ').concat(r,';\n  }\n  \n  body[').concat(Sr,'] {\n    ').concat('--removed-body-scroll-bar-size',': ').concat(i,'px;\n  }\n')},kr=function(){var e=parseInt(document.body.getAttribute(Sr)||'0',10)
return isFinite(e)?e:0},Nr=function(e){var t=e.noRelative,n=e.noImportant,r=e.gapMode,a=void 0===r?'margin':r
p.useEffect((function(){return document.body.setAttribute(Sr,(kr()+1).toString()),function(){var e=kr()-1
e<=0?document.body.removeAttribute(Sr):document.body.setAttribute(Sr,e.toString())}}),[])
var o=p.useMemo((function(){return function(e){if(void 0===e&&(e='margin'),'undefined'==typeof window)return wr
var t=function(e){var t=window.getComputedStyle(document.body),n=t['padding'===e?'paddingLeft':'marginLeft'],r=t['padding'===e?'paddingTop':'marginTop'],a=t['padding'===e?'paddingRight':'marginRight']
return[xr(n),xr(r),xr(a)]}(e),n=document.documentElement.clientWidth,r=window.innerWidth
return{left:t[0],top:t[1],right:t[2],gap:Math.max(0,r-n+t[2]-t[0])}}(a)}),[a])
return p.createElement(Cr,{styles:Er(o,!t,a,n?'':'!important')})},Rr=!1
if('undefined'!=typeof window)try{var Pr=Object.defineProperty({},'passive',{get:function(){return Rr=!0,!0}})
window.addEventListener('test',Pr,Pr),window.removeEventListener('test',Pr,Pr)}catch(kC){Rr=!1}var Tr=!!Rr&&{passive:!1},Mr=function(e,t){if(!(e instanceof Element))return!1
var n=window.getComputedStyle(e)
return'hidden'!==n[t]&&!(n.overflowY===n.overflowX&&!function(e){return'TEXTAREA'===e.tagName}(e)&&'visible'===n[t])},_r=function(e,t){var n=t.ownerDocument,r=t
do{if('undefined'!=typeof ShadowRoot&&r instanceof ShadowRoot&&(r=r.host),Lr(e,r)){var a=Dr(e,r)
if(a[1]>a[2])return!0}r=r.parentNode}while(r&&r!==n.body)
return!1},Lr=function(e,t){return'v'===e?function(e){return Mr(e,'overflowY')}(t):function(e){return Mr(e,'overflowX')}(t)},Dr=function(e,t){return'v'===e?[(n=t).scrollTop,n.scrollHeight,n.clientHeight]:function(e){return[e.scrollLeft,e.scrollWidth,e.clientWidth]}(t)
var n},jr=function(e){return'changedTouches'in e?[e.changedTouches[0].clientX,e.changedTouches[0].clientY]:[0,0]},Ir=function(e){return[e.deltaX,e.deltaY]},Ar=function(e){return e&&'current'in e?e.current:e},Or=function(e){return'\n  .block-interactivity-'.concat(e,' {pointer-events: none;}\n  .allow-interactivity-').concat(e,' {pointer-events: all;}\n')},zr=0,Fr=[]
function Br(e){for(var t=null;null!==e;)e instanceof ShadowRoot&&(t=e.host,e=e.host),e=e.parentNode
return t}const $r=(Hr=function(e){var t=p.useRef([]),n=p.useRef([0,0]),r=p.useRef(),a=p.useState(zr++)[0],o=p.useState(br)[0],l=p.useRef(e)
p.useEffect((function(){l.current=e}),[e]),p.useEffect((function(){if(e.inert){document.body.classList.add('block-interactivity-'.concat(a))
var t=function(e,t,n){if(n||2===arguments.length)for(var r,a=0,o=t.length;a<o;a++)!r&&a in t||(r||(r=Array.prototype.slice.call(t,0,a)),r[a]=t[a])
return e.concat(r||Array.prototype.slice.call(t))}([e.lockRef.current],(e.shards||[]).map(Ar),!0).filter(Boolean)
return t.forEach((function(e){return e.classList.add('allow-interactivity-'.concat(a))})),function(){document.body.classList.remove('block-interactivity-'.concat(a)),t.forEach((function(e){return e.classList.remove('allow-interactivity-'.concat(a))}))}}}),[e.inert,e.lockRef.current,e.shards])
var i=p.useCallback((function(e,t){if('touches'in e&&2===e.touches.length||'wheel'===e.type&&e.ctrlKey)return!l.current.allowPinchZoom
var a,o=jr(e),i=n.current,s='deltaX'in e?e.deltaX:i[0]-o[0],c='deltaY'in e?e.deltaY:i[1]-o[1],u=e.target,d=Math.abs(s)>Math.abs(c)?'h':'v'
if('touches'in e&&'h'===d&&'range'===u.type)return!1
var f=_r(d,u)
if(!f)return!0
if(f?a=d:(a='v'===d?'h':'v',f=_r(d,u)),!f)return!1
if(!r.current&&'changedTouches'in e&&(s||c)&&(r.current=a),!a)return!0
var p=r.current||a
return function(e,t,n,r){var a=function(e,t){return'h'===e&&'rtl'===t?-1:1}(e,window.getComputedStyle(t).direction),o=a*r,l=n.target,i=t.contains(l),s=!1,c=o>0,u=0,d=0
do{var f=Dr(e,l),p=f[0],m=f[1]-f[2]-a*p;(p||m)&&Lr(e,l)&&(u+=m,d+=p),l=l instanceof ShadowRoot?l.host:l.parentNode}while(!i&&l!==document.body||i&&(t.contains(l)||t===l))
return(c&&Math.abs(u)<1||!c&&Math.abs(d)<1)&&(s=!0),s}(p,t,e,'h'===p?s:c)}),[]),s=p.useCallback((function(e){var n=e
if(Fr.length&&Fr[Fr.length-1]===o){var r='deltaY'in n?Ir(n):jr(n),a=t.current.filter((function(e){return e.name===n.type&&(e.target===n.target||n.target===e.shadowParent)&&(t=e.delta,a=r,t[0]===a[0]&&t[1]===a[1])
var t,a}))[0]
if(a&&a.should)n.cancelable&&n.preventDefault()
else if(!a){var s=(l.current.shards||[]).map(Ar).filter(Boolean).filter((function(e){return e.contains(n.target)}));(s.length>0?i(n,s[0]):!l.current.noIsolation)&&n.cancelable&&n.preventDefault()}}}),[]),c=p.useCallback((function(e,n,r,a){var o={name:e,delta:n,target:r,should:a,shadowParent:Br(r)}
t.current.push(o),setTimeout((function(){t.current=t.current.filter((function(e){return e!==o}))}),1)}),[]),u=p.useCallback((function(e){n.current=jr(e),r.current=void 0}),[]),d=p.useCallback((function(t){c(t.type,Ir(t),t.target,i(t,e.lockRef.current))}),[]),f=p.useCallback((function(t){c(t.type,jr(t),t.target,i(t,e.lockRef.current))}),[])
p.useEffect((function(){return Fr.push(o),e.setCallbacks({onScrollCapture:d,onWheelCapture:d,onTouchMoveCapture:f}),document.addEventListener('wheel',s,Tr),document.addEventListener('touchmove',s,Tr),document.addEventListener('touchstart',u,Tr),function(){Fr=Fr.filter((function(e){return e!==o})),document.removeEventListener('wheel',s,Tr),document.removeEventListener('touchmove',s,Tr),document.removeEventListener('touchstart',u,Tr)}}),[])
var m=e.removeScrollBar,h=e.inert
return p.createElement(p.Fragment,null,h?p.createElement(o,{styles:Or(a)}):null,m?p.createElement(Nr,{gapMode:e.gapMode}):null)},vr.useMedium(Hr),hr)
var Hr,Vr=p.forwardRef((function(e,t){return p.createElement(yr,ir({},e,{ref:t,sideCar:$r}))}))
Vr.classNames=yr.classNames
var Wr=new WeakMap,Ur=new WeakMap,Kr={},Gr=0,qr=function(e){return e&&(e.host||qr(e.parentNode))},Yr=function(e,t,n){void 0===n&&(n='data-aria-hidden')
var r=Array.from(Array.isArray(e)?e:[e]),a=function(e){return'undefined'==typeof document?null:(Array.isArray(e)?e[0]:e).ownerDocument.body}(e)
return a?(r.push.apply(r,Array.from(a.querySelectorAll('[aria-live]'))),function(e,t,n,r){var a=function(e,t){return t.map((function(t){if(e.contains(t))return t
var n=qr(t)
return n&&e.contains(n)?n:null})).filter((function(e){return Boolean(e)}))}(t,Array.isArray(e)?e:[e])
Kr[n]||(Kr[n]=new WeakMap)
var o=Kr[n],l=[],i=new Set,s=new Set(a),c=function(e){e&&!i.has(e)&&(i.add(e),c(e.parentNode))}
a.forEach(c)
var u=function(e){e&&!s.has(e)&&Array.prototype.forEach.call(e.children,(function(e){if(i.has(e))u(e)
else try{var t=e.getAttribute(r),a=null!==t&&'false'!==t,s=(Wr.get(e)||0)+1,c=(o.get(e)||0)+1
Wr.set(e,s),o.set(e,c),l.push(e),1===s&&a&&Ur.set(e,!0),1===c&&e.setAttribute(n,'true'),a||e.setAttribute(r,'true')}catch(EC){}}))}
return u(t),i.clear(),Gr++,function(){l.forEach((function(e){var t=Wr.get(e)-1,a=o.get(e)-1
Wr.set(e,t),o.set(e,a),t||(Ur.has(e)||e.removeAttribute(r),Ur.delete(e)),a||e.removeAttribute(n)})),--Gr||(Wr=new WeakMap,Wr=new WeakMap,Ur=new WeakMap,Kr={})}}(r,a,n,'aria-hidden')):function(){return null}},Xr='Dialog',[Qr,Zr]=En(Xr),[Jr,ea]=Qr(Xr),ta='DialogTrigger',na=p.forwardRef(((e,t)=>{const{__scopeDialog:n,...r}=e,a=ea(ta,n),o=fn(t,a.triggerRef)
return s.jsx(yn.button,{type:'button','aria-haspopup':'dialog','aria-expanded':a.open,'aria-controls':a.contentId,'data-state':xa(a.open),...r,ref:o,onClick:Rn(e.onClick,a.onOpenToggle)})}))
na.displayName=ta
var ra='DialogPortal',[aa,oa]=Qr(ra,{forceMount:void 0}),la=e=>{const{__scopeDialog:t,forceMount:n,children:r,container:a}=e,o=ea(ra,t)
return s.jsx(aa,{scope:t,forceMount:n,children:p.Children.map(r,(e=>s.jsx(_n,{present:n||o.open,children:s.jsx(rr,{asChild:!0,container:a,children:e})})))})}
la.displayName=ra
var ia='DialogOverlay',sa=p.forwardRef(((e,t)=>{const n=oa(ia,e.__scopeDialog),{forceMount:r=n.forceMount,...a}=e,o=ea(ia,e.__scopeDialog)
return o.modal?s.jsx(_n,{present:r||o.open,children:s.jsx(ca,{...a,ref:t})}):null}))
sa.displayName=ia
var ca=p.forwardRef(((e,t)=>{const{__scopeDialog:n,...r}=e,a=ea(ia,n)
return s.jsx(Vr,{as:pn,allowPinchZoom:!0,shards:[a.contentRef],children:s.jsx(yn.div,{'data-state':xa(a.open),...r,ref:t,style:{pointerEvents:'auto',...r.style}})})})),ua='DialogContent',da=p.forwardRef(((e,t)=>{const n=oa(ua,e.__scopeDialog),{forceMount:r=n.forceMount,...a}=e,o=ea(ua,e.__scopeDialog)
return s.jsx(_n,{present:r||o.open,children:o.modal?s.jsx(fa,{...a,ref:t}):s.jsx(pa,{...a,ref:t})})}))
da.displayName=ua
var fa=p.forwardRef(((e,t)=>{const n=ea(ua,e.__scopeDialog),r=p.useRef(null),a=fn(t,n.contentRef,r)
return p.useEffect((()=>{const e=r.current
if(e)return Yr(e)}),[]),s.jsx(ma,{...e,ref:a,trapFocus:n.open,disableOutsidePointerEvents:!0,onCloseAutoFocus:Rn(e.onCloseAutoFocus,(e=>{var t
e.preventDefault(),null==(t=n.triggerRef.current)||t.focus()})),onPointerDownOutside:Rn(e.onPointerDownOutside,(e=>{const t=e.detail.originalEvent,n=0===t.button&&!0===t.ctrlKey;(2===t.button||n)&&e.preventDefault()})),onFocusOutside:Rn(e.onFocusOutside,(e=>e.preventDefault()))})})),pa=p.forwardRef(((e,t)=>{const n=ea(ua,e.__scopeDialog),r=p.useRef(!1),a=p.useRef(!1)
return s.jsx(ma,{...e,ref:t,trapFocus:!1,disableOutsidePointerEvents:!1,onCloseAutoFocus:t=>{var o,l
null==(o=e.onCloseAutoFocus)||o.call(e,t),t.defaultPrevented||(r.current||null==(l=n.triggerRef.current)||l.focus(),t.preventDefault()),r.current=!1,a.current=!1},onInteractOutside:t=>{var o,l
null==(o=e.onInteractOutside)||o.call(e,t),t.defaultPrevented||(r.current=!0,'pointerdown'===t.detail.originalEvent.type&&(a.current=!0))
const i=t.target;(null==(l=n.triggerRef.current)?void 0:l.contains(i))&&t.preventDefault(),'focusin'===t.detail.originalEvent.type&&a.current&&t.preventDefault()}})})),ma=p.forwardRef(((e,t)=>{const{__scopeDialog:n,trapFocus:r,onOpenAutoFocus:a,onCloseAutoFocus:o,...l}=e,i=ea(ua,n),c=p.useRef(null),u=fn(t,c)
return or(),s.jsxs(s.Fragment,{children:[s.jsx(Xn,{asChild:!0,loop:!0,trapped:r,onMountAutoFocus:a,onUnmountAutoFocus:o,children:s.jsx(Wn,{role:'dialog',id:i.contentId,'aria-describedby':i.descriptionId,'aria-labelledby':i.titleId,'data-state':xa(i.open),...l,ref:u,onDismiss:()=>i.onOpenChange(!1)})}),s.jsxs(s.Fragment,{children:[s.jsx(ka,{titleId:i.titleId}),s.jsx(Na,{contentRef:c,descriptionId:i.descriptionId})]})]})})),ha='DialogTitle',va=p.forwardRef(((e,t)=>{const{__scopeDialog:n,...r}=e,a=ea(ha,n)
return s.jsx(yn.h2,{id:a.titleId,...r,ref:t})}))
va.displayName=ha
var ga='DialogDescription',ya=p.forwardRef(((e,t)=>{const{__scopeDialog:n,...r}=e,a=ea(ga,n)
return s.jsx(yn.p,{id:a.descriptionId,...r,ref:t})}))
ya.displayName=ga
var ba='DialogClose',wa=p.forwardRef(((e,t)=>{const{__scopeDialog:n,...r}=e,a=ea(ba,n)
return s.jsx(yn.button,{type:'button',...r,ref:t,onClick:Rn(e.onClick,(()=>a.onOpenChange(!1)))})}))
function xa(e){return e?'open':'closed'}wa.displayName=ba
var Ca='DialogTitleWarning',[Sa,Ea]=function(e,t){const n=p.createContext(t),r=e=>{const{children:t,...r}=e,a=p.useMemo((()=>r),Object.values(r))
return s.jsx(n.Provider,{value:a,children:t})}
return r.displayName=e+'Provider',[r,function(r){const a=p.useContext(n)
if(a)return a
if(void 0!==t)return t
throw new Error(`\`${r}\` must be used within \`${e}\``)}]}(Ca,{contentName:ua,titleName:ha,docsSlug:'dialog'}),ka=({titleId:e})=>{const t=Ea(Ca),n=`\`${t.contentName}\` requires a \`${t.titleName}\` for the component to be accessible for screen reader users.\n\nIf you want to hide the \`${t.titleName}\`, you can wrap it with our VisuallyHidden component.\n\nFor more information, see https://radix-ui.com/primitives/docs/components/${t.docsSlug}`
return p.useEffect((()=>{e&&document.getElementById(e)}),[n,e]),null},Na=({contentRef:e,descriptionId:t})=>{const n=`Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${Ea('DialogDescriptionWarning').contentName}}.`
return p.useEffect((()=>{var n
const r=null==(n=e.current)?void 0:n.getAttribute('aria-describedby')
t&&r&&document.getElementById(t)}),[n,e,t]),null},Ra=na,Pa=la,Ta=sa,Ma=da,_a=va,La=ya,Da=wa,[ja,Ia]=En('AlertDialog',[Zr]),Aa=Zr(),Oa=p.forwardRef(((e,t)=>{const{__scopeAlertDialog:n,...r}=e,a=Aa(n)
return s.jsx(Ra,{...a,...r,ref:t})}))
Oa.displayName='AlertDialogTrigger'
var za=e=>{const{__scopeAlertDialog:t,...n}=e,r=Aa(t)
return s.jsx(Pa,{...r,...n})}
za.displayName='AlertDialogPortal'
var Fa=p.forwardRef(((e,t)=>{const{__scopeAlertDialog:n,...r}=e,a=Aa(n)
return s.jsx(Ta,{...a,...r,ref:t})}))
Fa.displayName='AlertDialogOverlay'
var Ba='AlertDialogContent',[$a,Ha]=ja(Ba),Va=p.forwardRef(((e,t)=>{const{__scopeAlertDialog:n,children:r,...a}=e,o=Aa(n),l=p.useRef(null),i=fn(t,l),c=p.useRef(null)
return s.jsx(Sa,{contentName:Ba,titleName:Wa,docsSlug:'alert-dialog',children:s.jsx($a,{scope:n,cancelRef:c,children:s.jsxs(Ma,{role:'alertdialog',...o,...a,ref:i,onOpenAutoFocus:Rn(a.onOpenAutoFocus,(e=>{var t
e.preventDefault(),null==(t=c.current)||t.focus({preventScroll:!0})})),onPointerDownOutside:e=>e.preventDefault(),onInteractOutside:e=>e.preventDefault(),children:[s.jsx(hn,{children:r}),s.jsx(Qa,{contentRef:l})]})})})}))
Va.displayName=Ba
var Wa='AlertDialogTitle',Ua=p.forwardRef(((e,t)=>{const{__scopeAlertDialog:n,...r}=e,a=Aa(n)
return s.jsx(_a,{...a,...r,ref:t})}))
Ua.displayName=Wa
var Ka='AlertDialogDescription',Ga=p.forwardRef(((e,t)=>{const{__scopeAlertDialog:n,...r}=e,a=Aa(n)
return s.jsx(La,{...a,...r,ref:t})}))
Ga.displayName=Ka
var qa=p.forwardRef(((e,t)=>{const{__scopeAlertDialog:n,...r}=e,a=Aa(n)
return s.jsx(Da,{...a,...r,ref:t})}))
qa.displayName='AlertDialogAction'
var Ya='AlertDialogCancel',Xa=p.forwardRef(((e,t)=>{const{__scopeAlertDialog:n,...r}=e,{cancelRef:a}=Ha(Ya,n),o=Aa(n),l=fn(t,a)
return s.jsx(Da,{...o,...r,ref:l})}))
Xa.displayName=Ya
var Qa=({contentRef:e})=>{const t=`\`${Ba}\` requires a description for the component to be accessible for screen reader users.\n\nYou can add a description to the \`${Ba}\` by passing a \`${Ka}\` component as a child, which also benefits sighted users by adding visible context to the dialog.\n\nAlternatively, you can use your own component as a description by assigning it an \`id\` and passing the same value to the \`aria-describedby\` prop in \`${Ba}\`. If the description is confusing or duplicative for sighted users, you can use the \`@radix-ui/react-visually-hidden\` primitive as a wrapper around your description component.\n\nFor more information, see https://radix-ui.com/primitives/docs/components/alert-dialog`
return p.useEffect((()=>{var t
document.getElementById(null==(t=e.current)?void 0:t.getAttribute('aria-describedby'))}),[t,e]),null},Za=Oa,Ja=za,eo=Fa,to=Va,no=qa,ro=Xa,ao=Ua,oo=Ga,lo='Avatar',[io,so]=En(lo),[co,uo]=io(lo),fo=p.forwardRef(((e,t)=>{const{__scopeAvatar:n,...r}=e,[a,o]=p.useState('idle')
return s.jsx(co,{scope:n,imageLoadingStatus:a,onImageLoadingStatusChange:o,children:s.jsx(yn.span,{...r,ref:t})})}))
fo.displayName=lo
var po='AvatarImage',mo=p.forwardRef(((e,t)=>{const{__scopeAvatar:n,src:r,onLoadingStatusChange:a=()=>{},...o}=e,l=uo(po,n),i=function(e,t){const[n,r]=p.useState('idle')
return Mn((()=>{if(!e)return void r('error')
let n=!0
const a=new window.Image,o=e=>()=>{n&&r(e)}
return r('loading'),a.onload=o('loaded'),a.onerror=o('error'),a.src=e,t&&(a.referrerPolicy=t),()=>{n=!1}}),[e,t]),n}(r,o.referrerPolicy),c=Pn((e=>{a(e),l.onImageLoadingStatusChange(e)}))
return Mn((()=>{'idle'!==i&&c(i)}),[i,c]),'loaded'===i?s.jsx(yn.img,{...o,ref:t,src:r}):null}))
mo.displayName=po
var ho='AvatarFallback',vo=p.forwardRef(((e,t)=>{const{__scopeAvatar:n,delayMs:r,...a}=e,o=uo(ho,n),[l,i]=p.useState(void 0===r)
return p.useEffect((()=>{if(void 0!==r){const e=window.setTimeout((()=>i(!0)),r)
return()=>window.clearTimeout(e)}}),[r]),l&&'loaded'!==o.imageLoadingStatus?s.jsx(yn.span,{...a,ref:t}):null}))
vo.displayName=ho
var go=fo,yo=mo,bo=vo
function wo(e){const t=p.useRef({value:e,previous:e})
return p.useMemo((()=>(t.current.value!==e&&(t.current.previous=t.current.value,t.current.value=e),t.current.previous)),[e])}function xo(e){const[t,n]=p.useState(void 0)
return Mn((()=>{if(e){n({width:e.offsetWidth,height:e.offsetHeight})
const t=new ResizeObserver((t=>{if(!Array.isArray(t))return
if(!t.length)return
const r=t[0]
let a,o
if('borderBoxSize'in r){const e=r.borderBoxSize,t=Array.isArray(e)?e[0]:e
a=t.inlineSize,o=t.blockSize}else a=e.offsetWidth,o=e.offsetHeight
n({width:a,height:o})}))
return t.observe(e,{box:'border-box'}),()=>t.unobserve(e)}n(void 0)}),[e]),t}var Co='Checkbox',[So,Eo]=En(Co),[ko,No]=So(Co),Ro=p.forwardRef(((e,t)=>{const{__scopeCheckbox:n,name:r,checked:a,defaultChecked:o,required:l,disabled:i,value:c='on',onCheckedChange:u,form:d,...f}=e,[m,h]=p.useState(null),v=fn(t,(e=>h(e))),g=p.useRef(!1),y=!m||d||!!m.closest('form'),[b=!1,w]=Tn({prop:a,defaultProp:o,onChange:u}),x=p.useRef(b)
return p.useEffect((()=>{const e=null==m?void 0:m.form
if(e){const t=()=>w(x.current)
return e.addEventListener('reset',t),()=>e.removeEventListener('reset',t)}}),[m,w]),s.jsxs(ko,{scope:n,state:b,disabled:i,children:[s.jsx(yn.button,{type:'button',role:'checkbox','aria-checked':_o(b)?'mixed':b,'aria-required':l,'data-state':Lo(b),'data-disabled':i?'':void 0,disabled:i,value:c,...f,ref:v,onKeyDown:Rn(e.onKeyDown,(e=>{'Enter'===e.key&&e.preventDefault()})),onClick:Rn(e.onClick,(e=>{w((e=>!!_o(e)||!e)),y&&(g.current=e.isPropagationStopped(),g.current||e.stopPropagation())}))}),y&&s.jsx(Mo,{control:m,bubbles:!g.current,name:r,value:c,checked:b,required:l,disabled:i,form:d,style:{transform:'translateX(-100%)'},defaultChecked:!_o(o)&&o})]})}))
Ro.displayName=Co
var Po='CheckboxIndicator',To=p.forwardRef(((e,t)=>{const{__scopeCheckbox:n,forceMount:r,...a}=e,o=No(Po,n)
return s.jsx(_n,{present:r||_o(o.state)||!0===o.state,children:s.jsx(yn.span,{'data-state':Lo(o.state),'data-disabled':o.disabled?'':void 0,...a,ref:t,style:{pointerEvents:'none',...e.style}})})}))
To.displayName=Po
var Mo=e=>{const{control:t,checked:n,bubbles:r=!0,defaultChecked:a,...o}=e,l=p.useRef(null),i=wo(n),c=xo(t)
p.useEffect((()=>{const e=l.current,t=window.HTMLInputElement.prototype,a=Object.getOwnPropertyDescriptor(t,'checked').set
if(i!==n&&a){const t=new Event('click',{bubbles:r})
e.indeterminate=_o(n),a.call(e,!_o(n)&&n),e.dispatchEvent(t)}}),[i,n,r])
const u=p.useRef(!_o(n)&&n)
return s.jsx('input',{type:'checkbox','aria-hidden':!0,defaultChecked:a??u.current,...o,tabIndex:-1,ref:l,style:{...e.style,...c,position:'absolute',pointerEvents:'none',opacity:0,margin:0}})}
function _o(e){return'indeterminate'===e}function Lo(e){return _o(e)?'indeterminate':e?'checked':'unchecked'}var Do=Ro,jo=To
const Io=['top','right','bottom','left'],Ao=Math.min,Oo=Math.max,zo=Math.round,Fo=Math.floor,Bo=e=>({x:e,y:e}),$o={left:'right',right:'left',bottom:'top',top:'bottom'},Ho={start:'end',end:'start'}
function Vo(e,t,n){return Oo(e,Ao(t,n))}function Wo(e,t){return'function'==typeof e?e(t):e}function Uo(e){return e.split('-')[0]}function Ko(e){return e.split('-')[1]}function Go(e){return'x'===e?'y':'x'}function qo(e){return'y'===e?'height':'width'}function Yo(e){return['top','bottom'].includes(Uo(e))?'y':'x'}function Xo(e){return Go(Yo(e))}function Qo(e){return e.replace(/start|end/g,(e=>Ho[e]))}function Zo(e){return e.replace(/left|right|bottom|top/g,(e=>$o[e]))}function Jo(e){return'number'!=typeof e?function(e){return{top:0,right:0,bottom:0,left:0,...e}}(e):{top:e,right:e,bottom:e,left:e}}function el(e){const{x:t,y:n,width:r,height:a}=e
return{width:r,height:a,top:n,left:t,right:t+r,bottom:n+a,x:t,y:n}}function tl(e,t,n){let{reference:r,floating:a}=e
const o=Yo(t),l=Xo(t),i=qo(l),s=Uo(t),c='y'===o,u=r.x+r.width/2-a.width/2,d=r.y+r.height/2-a.height/2,f=r[i]/2-a[i]/2
let p
switch(s){case'top':p={x:u,y:r.y-a.height}
break
case'bottom':p={x:u,y:r.y+r.height}
break
case'right':p={x:r.x+r.width,y:d}
break
case'left':p={x:r.x-a.width,y:d}
break
default:p={x:r.x,y:r.y}}switch(Ko(t)){case'start':p[l]-=f*(n&&c?-1:1)
break
case'end':p[l]+=f*(n&&c?-1:1)}return p}async function nl(e,t){var n
void 0===t&&(t={})
const{x:r,y:a,platform:o,rects:l,elements:i,strategy:s}=e,{boundary:c='clippingAncestors',rootBoundary:u='viewport',elementContext:d='floating',altBoundary:f=!1,padding:p=0}=Wo(t,e),m=Jo(p),h=i[f?'floating'===d?'reference':'floating':d],v=el(await o.getClippingRect({element:null==(n=await(null==o.isElement?void 0:o.isElement(h)))||n?h:h.contextElement||await(null==o.getDocumentElement?void 0:o.getDocumentElement(i.floating)),boundary:c,rootBoundary:u,strategy:s})),g='floating'===d?{x:r,y:a,width:l.floating.width,height:l.floating.height}:l.reference,y=await(null==o.getOffsetParent?void 0:o.getOffsetParent(i.floating)),b=await(null==o.isElement?void 0:o.isElement(y))&&await(null==o.getScale?void 0:o.getScale(y))||{x:1,y:1},w=el(o.convertOffsetParentRelativeRectToViewportRelativeRect?await o.convertOffsetParentRelativeRectToViewportRelativeRect({elements:i,rect:g,offsetParent:y,strategy:s}):g)
return{top:(v.top-w.top+m.top)/b.y,bottom:(w.bottom-v.bottom+m.bottom)/b.y,left:(v.left-w.left+m.left)/b.x,right:(w.right-v.right+m.right)/b.x}}function rl(e,t){return{top:e.top-t.height,right:e.right-t.width,bottom:e.bottom-t.height,left:e.left-t.width}}function al(e){return Io.some((t=>e[t]>=0))}function ol(){return'undefined'!=typeof window}function ll(e){return cl(e)?(e.nodeName||'').toLowerCase():'#document'}function il(e){var t
return(null==e||null==(t=e.ownerDocument)?void 0:t.defaultView)||window}function sl(e){var t
return null==(t=(cl(e)?e.ownerDocument:e.document)||window.document)?void 0:t.documentElement}function cl(e){return!!ol()&&(e instanceof Node||e instanceof il(e).Node)}function ul(e){return!!ol()&&(e instanceof Element||e instanceof il(e).Element)}function dl(e){return!!ol()&&(e instanceof HTMLElement||e instanceof il(e).HTMLElement)}function fl(e){return!(!ol()||'undefined'==typeof ShadowRoot)&&(e instanceof ShadowRoot||e instanceof il(e).ShadowRoot)}function pl(e){const{overflow:t,overflowX:n,overflowY:r,display:a}=bl(e)
return/auto|scroll|overlay|hidden|clip/.test(t+r+n)&&!['inline','contents'].includes(a)}function ml(e){return['table','td','th'].includes(ll(e))}function hl(e){return[':popover-open',':modal'].some((t=>{try{return e.matches(t)}catch(EC){return!1}}))}function vl(e){const t=gl(),n=ul(e)?bl(e):e
return['transform','translate','scale','rotate','perspective'].some((e=>!!n[e]&&'none'!==n[e]))||!!n.containerType&&'normal'!==n.containerType||!t&&!!n.backdropFilter&&'none'!==n.backdropFilter||!t&&!!n.filter&&'none'!==n.filter||['transform','translate','scale','rotate','perspective','filter'].some((e=>(n.willChange||'').includes(e)))||['paint','layout','strict','content'].some((e=>(n.contain||'').includes(e)))}function gl(){return!('undefined'==typeof CSS||!CSS.supports)&&CSS.supports('-webkit-backdrop-filter','none')}function yl(e){return['html','body','#document'].includes(ll(e))}function bl(e){return il(e).getComputedStyle(e)}function wl(e){return ul(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.scrollX,scrollTop:e.scrollY}}function xl(e){if('html'===ll(e))return e
const t=e.assignedSlot||e.parentNode||fl(e)&&e.host||sl(e)
return fl(t)?t.host:t}function Cl(e){const t=xl(e)
return yl(t)?e.ownerDocument?e.ownerDocument.body:e.body:dl(t)&&pl(t)?t:Cl(t)}function Sl(e,t,n){var r
void 0===t&&(t=[]),void 0===n&&(n=!0)
const a=Cl(e),o=a===(null==(r=e.ownerDocument)?void 0:r.body),l=il(a)
if(o){const e=El(l)
return t.concat(l,l.visualViewport||[],pl(a)?a:[],e&&n?Sl(e):[])}return t.concat(a,Sl(a,[],n))}function El(e){return e.parent&&Object.getPrototypeOf(e.parent)?e.frameElement:null}function kl(e){const t=bl(e)
let n=parseFloat(t.width)||0,r=parseFloat(t.height)||0
const a=dl(e),o=a?e.offsetWidth:n,l=a?e.offsetHeight:r,i=zo(n)!==o||zo(r)!==l
return i&&(n=o,r=l),{width:n,height:r,$:i}}function Nl(e){return ul(e)?e:e.contextElement}function Rl(e){const t=Nl(e)
if(!dl(t))return Bo(1)
const n=t.getBoundingClientRect(),{width:r,height:a,$:o}=kl(t)
let l=(o?zo(n.width):n.width)/r,i=(o?zo(n.height):n.height)/a
return l&&Number.isFinite(l)||(l=1),i&&Number.isFinite(i)||(i=1),{x:l,y:i}}const Pl=Bo(0)
function Tl(e){const t=il(e)
return gl()&&t.visualViewport?{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}:Pl}function Ml(e,t,n,r){void 0===t&&(t=!1),void 0===n&&(n=!1)
const a=e.getBoundingClientRect(),o=Nl(e)
let l=Bo(1)
t&&(r?ul(r)&&(l=Rl(r)):l=Rl(e))
const i=function(e,t,n){return void 0===t&&(t=!1),!(!n||t&&n!==il(e))&&t}(o,n,r)?Tl(o):Bo(0)
let s=(a.left+i.x)/l.x,c=(a.top+i.y)/l.y,u=a.width/l.x,d=a.height/l.y
if(o){const e=il(o),t=r&&ul(r)?il(r):r
let n=e,a=El(n)
for(;a&&r&&t!==n;){const e=Rl(a),t=a.getBoundingClientRect(),r=bl(a),o=t.left+(a.clientLeft+parseFloat(r.paddingLeft))*e.x,l=t.top+(a.clientTop+parseFloat(r.paddingTop))*e.y
s*=e.x,c*=e.y,u*=e.x,d*=e.y,s+=o,c+=l,n=il(a),a=El(n)}}return el({width:u,height:d,x:s,y:c})}function _l(e,t){const n=wl(e).scrollLeft
return t?t.left+n:Ml(sl(e)).left+n}function Ll(e,t,n){void 0===n&&(n=!1)
const r=e.getBoundingClientRect()
return{x:r.left+t.scrollLeft-(n?0:_l(e,r)),y:r.top+t.scrollTop}}function Dl(e,t,n){let r
if('viewport'===t)r=function(e,t){const n=il(e),r=sl(e),a=n.visualViewport
let o=r.clientWidth,l=r.clientHeight,i=0,s=0
if(a){o=a.width,l=a.height
const e=gl();(!e||e&&'fixed'===t)&&(i=a.offsetLeft,s=a.offsetTop)}return{width:o,height:l,x:i,y:s}}(e,n)
else if('document'===t)r=function(e){const t=sl(e),n=wl(e),r=e.ownerDocument.body,a=Oo(t.scrollWidth,t.clientWidth,r.scrollWidth,r.clientWidth),o=Oo(t.scrollHeight,t.clientHeight,r.scrollHeight,r.clientHeight)
let l=-n.scrollLeft+_l(e)
const i=-n.scrollTop
return'rtl'===bl(r).direction&&(l+=Oo(t.clientWidth,r.clientWidth)-a),{width:a,height:o,x:l,y:i}}(sl(e))
else if(ul(t))r=function(e,t){const n=Ml(e,!0,'fixed'===t),r=n.top+e.clientTop,a=n.left+e.clientLeft,o=dl(e)?Rl(e):Bo(1)
return{width:e.clientWidth*o.x,height:e.clientHeight*o.y,x:a*o.x,y:r*o.y}}(t,n)
else{const n=Tl(e)
r={x:t.x-n.x,y:t.y-n.y,width:t.width,height:t.height}}return el(r)}function jl(e,t){const n=xl(e)
return!(n===t||!ul(n)||yl(n))&&('fixed'===bl(n).position||jl(n,t))}function Il(e,t,n){const r=dl(t),a=sl(t),o='fixed'===n,l=Ml(e,!0,o,t)
let i={scrollLeft:0,scrollTop:0}
const s=Bo(0)
if(r||!r&&!o)if(('body'!==ll(t)||pl(a))&&(i=wl(t)),r){const e=Ml(t,!0,o,t)
s.x=e.x+t.clientLeft,s.y=e.y+t.clientTop}else a&&(s.x=_l(a))
const c=!a||r||o?Bo(0):Ll(a,i)
return{x:l.left+i.scrollLeft-s.x-c.x,y:l.top+i.scrollTop-s.y-c.y,width:l.width,height:l.height}}function Al(e){return'static'===bl(e).position}function Ol(e,t){if(!dl(e)||'fixed'===bl(e).position)return null
if(t)return t(e)
let n=e.offsetParent
return sl(e)===n&&(n=n.ownerDocument.body),n}function zl(e,t){const n=il(e)
if(hl(e))return n
if(!dl(e)){let t=xl(e)
for(;t&&!yl(t);){if(ul(t)&&!Al(t))return t
t=xl(t)}return n}let r=Ol(e,t)
for(;r&&ml(r)&&Al(r);)r=Ol(r,t)
return r&&yl(r)&&Al(r)&&!vl(r)?n:r||function(e){let t=xl(e)
for(;dl(t)&&!yl(t);){if(vl(t))return t
if(hl(t))return null
t=xl(t)}return null}(e)||n}const Fl={convertOffsetParentRelativeRectToViewportRelativeRect:function(e){let{elements:t,rect:n,offsetParent:r,strategy:a}=e
const o='fixed'===a,l=sl(r),i=!!t&&hl(t.floating)
if(r===l||i&&o)return n
let s={scrollLeft:0,scrollTop:0},c=Bo(1)
const u=Bo(0),d=dl(r)
if((d||!d&&!o)&&(('body'!==ll(r)||pl(l))&&(s=wl(r)),dl(r))){const e=Ml(r)
c=Rl(r),u.x=e.x+r.clientLeft,u.y=e.y+r.clientTop}const f=!l||d||o?Bo(0):Ll(l,s,!0)
return{width:n.width*c.x,height:n.height*c.y,x:n.x*c.x-s.scrollLeft*c.x+u.x+f.x,y:n.y*c.y-s.scrollTop*c.y+u.y+f.y}},getDocumentElement:sl,getClippingRect:function(e){let{element:t,boundary:n,rootBoundary:r,strategy:a}=e
const o=[...'clippingAncestors'===n?hl(t)?[]:function(e,t){const n=t.get(e)
if(n)return n
let r=Sl(e,[],!1).filter((e=>ul(e)&&'body'!==ll(e))),a=null
const o='fixed'===bl(e).position
let l=o?xl(e):e
for(;ul(l)&&!yl(l);){const t=bl(l),n=vl(l)
n||'fixed'!==t.position||(a=null),(o?!n&&!a:!n&&'static'===t.position&&a&&['absolute','fixed'].includes(a.position)||pl(l)&&!n&&jl(e,l))?r=r.filter((e=>e!==l)):a=t,l=xl(l)}return t.set(e,r),r}(t,this._c):[].concat(n),r],l=o[0],i=o.reduce(((e,n)=>{const r=Dl(t,n,a)
return e.top=Oo(r.top,e.top),e.right=Ao(r.right,e.right),e.bottom=Ao(r.bottom,e.bottom),e.left=Oo(r.left,e.left),e}),Dl(t,l,a))
return{width:i.right-i.left,height:i.bottom-i.top,x:i.left,y:i.top}},getOffsetParent:zl,getElementRects:async function(e){const t=this.getOffsetParent||zl,n=this.getDimensions,r=await n(e.floating)
return{reference:Il(e.reference,await t(e.floating),e.strategy),floating:{x:0,y:0,width:r.width,height:r.height}}},getClientRects:function(e){return Array.from(e.getClientRects())},getDimensions:function(e){const{width:t,height:n}=kl(e)
return{width:t,height:n}},getScale:Rl,isElement:ul,isRTL:function(e){return'rtl'===bl(e).direction}}
function Bl(e,t){return e.x===t.x&&e.y===t.y&&e.width===t.width&&e.height===t.height}const $l=function(e){return void 0===e&&(e=0),{name:'offset',options:e,async fn(t){var n,r
const{x:a,y:o,placement:l,middlewareData:i}=t,s=await async function(e,t){const{placement:n,platform:r,elements:a}=e,o=await(null==r.isRTL?void 0:r.isRTL(a.floating)),l=Uo(n),i=Ko(n),s='y'===Yo(n),c=['left','top'].includes(l)?-1:1,u=o&&s?-1:1,d=Wo(t,e)
let{mainAxis:f,crossAxis:p,alignmentAxis:m}='number'==typeof d?{mainAxis:d,crossAxis:0,alignmentAxis:null}:{mainAxis:d.mainAxis||0,crossAxis:d.crossAxis||0,alignmentAxis:d.alignmentAxis}
return i&&'number'==typeof m&&(p='end'===i?-1*m:m),s?{x:p*u,y:f*c}:{x:f*c,y:p*u}}(t,e)
return l===(null==(n=i.offset)?void 0:n.placement)&&null!=(r=i.arrow)&&r.alignmentOffset?{}:{x:a+s.x,y:o+s.y,data:{...s,placement:l}}}}},Hl=function(e){return void 0===e&&(e={}),{name:'shift',options:e,async fn(t){const{x:n,y:r,placement:a}=t,{mainAxis:o=!0,crossAxis:l=!1,limiter:i={fn:e=>{let{x:t,y:n}=e
return{x:t,y:n}}},...s}=Wo(e,t),c={x:n,y:r},u=await nl(t,s),d=Yo(Uo(a)),f=Go(d)
let p=c[f],m=c[d]
if(o){const e='y'===f?'bottom':'right'
p=Vo(p+u['y'===f?'top':'left'],p,p-u[e])}if(l){const e='y'===d?'bottom':'right'
m=Vo(m+u['y'===d?'top':'left'],m,m-u[e])}const h=i.fn({...t,[f]:p,[d]:m})
return{...h,data:{x:h.x-n,y:h.y-r,enabled:{[f]:o,[d]:l}}}}}},Vl=function(e){return void 0===e&&(e={}),{name:'flip',options:e,async fn(t){var n,r
const{placement:a,middlewareData:o,rects:l,initialPlacement:i,platform:s,elements:c}=t,{mainAxis:u=!0,crossAxis:d=!0,fallbackPlacements:f,fallbackStrategy:p='bestFit',fallbackAxisSideDirection:m='none',flipAlignment:h=!0,...v}=Wo(e,t)
if(null!=(n=o.arrow)&&n.alignmentOffset)return{}
const g=Uo(a),y=Yo(i),b=Uo(i)===i,w=await(null==s.isRTL?void 0:s.isRTL(c.floating)),x=f||(b||!h?[Zo(i)]:function(e){const t=Zo(e)
return[Qo(e),t,Qo(t)]}(i)),C='none'!==m
!f&&C&&x.push(...function(e,t,n,r){const a=Ko(e)
let o=function(e,t,n){const r=['left','right'],a=['right','left'],o=['top','bottom'],l=['bottom','top']
switch(e){case'top':case'bottom':return n?t?a:r:t?r:a
case'left':case'right':return t?o:l
default:return[]}}(Uo(e),'start'===n,r)
return a&&(o=o.map((e=>e+'-'+a)),t&&(o=o.concat(o.map(Qo)))),o}(i,h,m,w))
const S=[i,...x],E=await nl(t,v),k=[]
let N=(null==(r=o.flip)?void 0:r.overflows)||[]
if(u&&k.push(E[g]),d){const e=function(e,t,n){void 0===n&&(n=!1)
const r=Ko(e),a=Xo(e),o=qo(a)
let l='x'===a?r===(n?'end':'start')?'right':'left':'start'===r?'bottom':'top'
return t.reference[o]>t.floating[o]&&(l=Zo(l)),[l,Zo(l)]}(a,l,w)
k.push(E[e[0]],E[e[1]])}if(N=[...N,{placement:a,overflows:k}],!k.every((e=>e<=0))){var R,P
const e=((null==(R=o.flip)?void 0:R.index)||0)+1,t=S[e]
if(t)return{data:{index:e,overflows:N},reset:{placement:t}}
let n=null==(P=N.filter((e=>e.overflows[0]<=0)).sort(((e,t)=>e.overflows[1]-t.overflows[1]))[0])?void 0:P.placement
if(!n)switch(p){case'bestFit':{var T
const e=null==(T=N.filter((e=>{if(C){const t=Yo(e.placement)
return t===y||'y'===t}return!0})).map((e=>[e.placement,e.overflows.filter((e=>e>0)).reduce(((e,t)=>e+t),0)])).sort(((e,t)=>e[1]-t[1]))[0])?void 0:T[0]
e&&(n=e)
break}case'initialPlacement':n=i}if(a!==n)return{reset:{placement:n}}}return{}}}},Wl=function(e){return void 0===e&&(e={}),{name:'size',options:e,async fn(t){var n,r
const{placement:a,rects:o,platform:l,elements:i}=t,{apply:s=()=>{},...c}=Wo(e,t),u=await nl(t,c),d=Uo(a),f=Ko(a),p='y'===Yo(a),{width:m,height:h}=o.floating
let v,g
'top'===d||'bottom'===d?(v=d,g=f===(await(null==l.isRTL?void 0:l.isRTL(i.floating))?'start':'end')?'left':'right'):(g=d,v='end'===f?'top':'bottom')
const y=h-u.top-u.bottom,b=m-u.left-u.right,w=Ao(h-u[v],y),x=Ao(m-u[g],b),C=!t.middlewareData.shift
let S=w,E=x
if(null!=(n=t.middlewareData.shift)&&n.enabled.x&&(E=b),null!=(r=t.middlewareData.shift)&&r.enabled.y&&(S=y),C&&!f){const e=Oo(u.left,0),t=Oo(u.right,0),n=Oo(u.top,0),r=Oo(u.bottom,0)
p?E=m-2*(0!==e||0!==t?e+t:Oo(u.left,u.right)):S=h-2*(0!==n||0!==r?n+r:Oo(u.top,u.bottom))}await s({...t,availableWidth:E,availableHeight:S})
const k=await l.getDimensions(i.floating)
return m!==k.width||h!==k.height?{reset:{rects:!0}}:{}}}},Ul=function(e){return void 0===e&&(e={}),{name:'hide',options:e,async fn(t){const{rects:n}=t,{strategy:r='referenceHidden',...a}=Wo(e,t)
switch(r){case'referenceHidden':{const e=rl(await nl(t,{...a,elementContext:'reference'}),n.reference)
return{data:{referenceHiddenOffsets:e,referenceHidden:al(e)}}}case'escaped':{const e=rl(await nl(t,{...a,altBoundary:!0}),n.floating)
return{data:{escapedOffsets:e,escaped:al(e)}}}default:return{}}}}},Kl=e=>({name:'arrow',options:e,async fn(t){const{x:n,y:r,placement:a,rects:o,platform:l,elements:i,middlewareData:s}=t,{element:c,padding:u=0}=Wo(e,t)||{}
if(null==c)return{}
const d=Jo(u),f={x:n,y:r},p=Xo(a),m=qo(p),h=await l.getDimensions(c),v='y'===p,g=v?'top':'left',y=v?'bottom':'right',b=v?'clientHeight':'clientWidth',w=o.reference[m]+o.reference[p]-f[p]-o.floating[m],x=f[p]-o.reference[p],C=await(null==l.getOffsetParent?void 0:l.getOffsetParent(c))
let S=C?C[b]:0
S&&await(null==l.isElement?void 0:l.isElement(C))||(S=i.floating[b]||o.floating[m])
const E=w/2-x/2,k=S/2-h[m]/2-1,N=Ao(d[g],k),R=Ao(d[y],k),P=N,T=S-h[m]-R,M=S/2-h[m]/2+E,_=Vo(P,M,T),L=!s.arrow&&null!=Ko(a)&&M!==_&&o.reference[m]/2-(M<P?N:R)-h[m]/2<0,D=L?M<P?M-P:M-T:0
return{[p]:f[p]+D,data:{[p]:_,centerOffset:M-_-D,...L&&{alignmentOffset:D}},reset:L}}}),Gl=function(e){return void 0===e&&(e={}),{options:e,fn(t){const{x:n,y:r,placement:a,rects:o,middlewareData:l}=t,{offset:i=0,mainAxis:s=!0,crossAxis:c=!0}=Wo(e,t),u={x:n,y:r},d=Yo(a),f=Go(d)
let p=u[f],m=u[d]
const h=Wo(i,t),v='number'==typeof h?{mainAxis:h,crossAxis:0}:{mainAxis:0,crossAxis:0,...h}
if(s){const e='y'===f?'height':'width',t=o.reference[f]-o.floating[e]+v.mainAxis,n=o.reference[f]+o.reference[e]-v.mainAxis
p<t?p=t:p>n&&(p=n)}if(c){var g,y
const e='y'===f?'width':'height',t=['top','left'].includes(Uo(a)),n=o.reference[d]-o.floating[e]+(t&&(null==(g=l.offset)?void 0:g[d])||0)+(t?0:v.crossAxis),r=o.reference[d]+o.reference[e]+(t?0:(null==(y=l.offset)?void 0:y[d])||0)-(t?v.crossAxis:0)
m<n?m=n:m>r&&(m=r)}return{[f]:p,[d]:m}}}}
var ql='undefined'!=typeof document?p.useLayoutEffect:p.useEffect
function Yl(e,t){if(e===t)return!0
if(typeof e!=typeof t)return!1
if('function'==typeof e&&e.toString()===t.toString())return!0
let n,r,a
if(e&&t&&'object'==typeof e){if(Array.isArray(e)){if(n=e.length,n!==t.length)return!1
for(r=n;0!=r--;)if(!Yl(e[r],t[r]))return!1
return!0}if(a=Object.keys(e),n=a.length,n!==Object.keys(t).length)return!1
for(r=n;0!=r--;)if(!{}.hasOwnProperty.call(t,a[r]))return!1
for(r=n;0!=r--;){const n=a[r]
if(!('_owner'===n&&e.$$typeof||Yl(e[n],t[n])))return!1}return!0}return e!=e&&t!=t}function Xl(e){return'undefined'==typeof window?1:(e.ownerDocument.defaultView||window).devicePixelRatio||1}function Ql(e,t){const n=Xl(e)
return Math.round(t*n)/n}function Zl(e){const t=p.useRef(e)
return ql((()=>{t.current=e})),t}const Jl=e=>({name:'arrow',options:e,fn(t){const{element:n,padding:r}='function'==typeof e?e(t):e
return n&&(a=n,{}.hasOwnProperty.call(a,'current'))?null!=n.current?Kl({element:n.current,padding:r}).fn(t):{}:n?Kl({element:n,padding:r}).fn(t):{}
var a}}),ei=(e,t)=>({...$l(e),options:[e,t]}),ti=(e,t)=>({...Hl(e),options:[e,t]}),ni=(e,t)=>({...Gl(e),options:[e,t]}),ri=(e,t)=>({...Vl(e),options:[e,t]}),ai=(e,t)=>({...Wl(e),options:[e,t]}),oi=(e,t)=>({...Ul(e),options:[e,t]}),li=(e,t)=>({...Jl(e),options:[e,t]})
var ii=p.forwardRef(((e,t)=>{const{children:n,width:r=10,height:a=5,...o}=e
return s.jsx(yn.svg,{...o,ref:t,width:r,height:a,viewBox:'0 0 30 10',preserveAspectRatio:'none',children:e.asChild?n:s.jsx('polygon',{points:'0,0 30,0 15,10'})})}))
ii.displayName='Arrow'
var si=ii,ci='Popper',[ui,di]=En(ci),[fi,pi]=ui(ci),mi=e=>{const{__scopePopper:t,children:n}=e,[r,a]=p.useState(null)
return s.jsx(fi,{scope:t,anchor:r,onAnchorChange:a,children:n})}
mi.displayName=ci
var hi='PopperAnchor',vi=p.forwardRef(((e,t)=>{const{__scopePopper:n,virtualRef:r,...a}=e,o=pi(hi,n),l=p.useRef(null),i=fn(t,l)
return p.useEffect((()=>{o.onAnchorChange((null==r?void 0:r.current)||l.current)})),r?null:s.jsx(yn.div,{...a,ref:i})}))
vi.displayName=hi
var gi='PopperContent',[yi,bi]=ui(gi),wi=p.forwardRef(((e,t)=>{var n,r,a,o,l,i
const{__scopePopper:c,side:u='bottom',sideOffset:d=0,align:f='center',alignOffset:m=0,arrowPadding:h=0,avoidCollisions:v=!0,collisionBoundary:g=[],collisionPadding:y=0,sticky:b='partial',hideWhenDetached:w=!1,updatePositionStrategy:x='optimized',onPlaced:C,...S}=e,E=pi(gi,c),[k,N]=p.useState(null),R=fn(t,(e=>N(e))),[P,T]=p.useState(null),M=xo(P),_=(null==M?void 0:M.width)??0,L=(null==M?void 0:M.height)??0,D=u+('center'!==f?'-'+f:''),j='number'==typeof y?y:{top:0,right:0,bottom:0,left:0,...y},I=Array.isArray(g)?g:[g],A=I.length>0,O={padding:j,boundary:I.filter(Ei),altBoundary:A},{refs:z,floatingStyles:F,placement:B,isPositioned:$,middlewareData:H}=function(e){void 0===e&&(e={})
const{placement:t='bottom',strategy:n='absolute',middleware:r=[],platform:a,elements:{reference:o,floating:l}={},transform:i=!0,whileElementsMounted:s,open:c}=e,[u,d]=p.useState({x:0,y:0,strategy:n,placement:t,middlewareData:{},isPositioned:!1}),[f,m]=p.useState(r)
Yl(f,r)||m(r)
const[h,v]=p.useState(null),[g,y]=p.useState(null),b=p.useCallback((e=>{e!==S.current&&(S.current=e,v(e))}),[]),w=p.useCallback((e=>{e!==E.current&&(E.current=e,y(e))}),[]),x=o||h,C=l||g,S=p.useRef(null),E=p.useRef(null),k=p.useRef(u),N=null!=s,R=Zl(s),P=Zl(a),T=Zl(c),M=p.useCallback((()=>{if(!S.current||!E.current)return
const e={placement:t,strategy:n,middleware:f}
P.current&&(e.platform=P.current),((e,t,n)=>{const r=new Map,a={platform:Fl,...n},o={...a.platform,_c:r}
return(async(e,t,n)=>{const{placement:r='bottom',strategy:a='absolute',middleware:o=[],platform:l}=n,i=o.filter(Boolean),s=await(null==l.isRTL?void 0:l.isRTL(t))
let c=await l.getElementRects({reference:e,floating:t,strategy:a}),{x:u,y:d}=tl(c,r,s),f=r,p={},m=0
for(let h=0;h<i.length;h++){const{name:n,fn:o}=i[h],{x:v,y:g,data:y,reset:b}=await o({x:u,y:d,initialPlacement:r,placement:f,strategy:a,middlewareData:p,rects:c,platform:l,elements:{reference:e,floating:t}})
u=null!=v?v:u,d=null!=g?g:d,p={...p,[n]:{...p[n],...y}},b&&m<=50&&(m++,'object'==typeof b&&(b.placement&&(f=b.placement),b.rects&&(c=!0===b.rects?await l.getElementRects({reference:e,floating:t,strategy:a}):b.rects),({x:u,y:d}=tl(c,f,s))),h=-1)}return{x:u,y:d,placement:f,strategy:a,middlewareData:p}})(e,t,{...a,platform:o})})(S.current,E.current,e).then((e=>{const t={...e,isPositioned:!1!==T.current}
_.current&&!Yl(k.current,t)&&(k.current=t,ln.flushSync((()=>{d(t)})))}))}),[f,t,n,P,T])
ql((()=>{!1===c&&k.current.isPositioned&&(k.current.isPositioned=!1,d((e=>({...e,isPositioned:!1}))))}),[c])
const _=p.useRef(!1)
ql((()=>(_.current=!0,()=>{_.current=!1})),[]),ql((()=>{if(x&&(S.current=x),C&&(E.current=C),x&&C){if(R.current)return R.current(x,C,M)
M()}}),[x,C,M,R,N])
const L=p.useMemo((()=>({reference:S,floating:E,setReference:b,setFloating:w})),[b,w]),D=p.useMemo((()=>({reference:x,floating:C})),[x,C]),j=p.useMemo((()=>{const e={position:n,left:0,top:0}
if(!D.floating)return e
const t=Ql(D.floating,u.x),r=Ql(D.floating,u.y)
return i?{...e,transform:'translate('+t+'px, '+r+'px)',...Xl(D.floating)>=1.5&&{willChange:'transform'}}:{position:n,left:t,top:r}}),[n,i,D.floating,u.x,u.y])
return p.useMemo((()=>({...u,update:M,refs:L,elements:D,floatingStyles:j})),[u,M,L,D,j])}({strategy:'fixed',placement:D,whileElementsMounted:(...e)=>function(e,t,n,r){void 0===r&&(r={})
const{ancestorScroll:a=!0,ancestorResize:o=!0,elementResize:l='function'==typeof ResizeObserver,layoutShift:i='function'==typeof IntersectionObserver,animationFrame:s=!1}=r,c=Nl(e),u=a||o?[...c?Sl(c):[],...Sl(t)]:[]
u.forEach((e=>{a&&e.addEventListener('scroll',n,{passive:!0}),o&&e.addEventListener('resize',n)}))
const d=c&&i?function(e,t){let n,r=null
const a=sl(e)
function o(){var e
clearTimeout(n),null==(e=r)||e.disconnect(),r=null}return function l(i,s){void 0===i&&(i=!1),void 0===s&&(s=1),o()
const c=e.getBoundingClientRect(),{left:u,top:d,width:f,height:p}=c
if(i||t(),!f||!p)return
const m={rootMargin:-Fo(d)+'px '+-Fo(a.clientWidth-(u+f))+'px '+-Fo(a.clientHeight-(d+p))+'px '+-Fo(u)+'px',threshold:Oo(0,Ao(1,s))||1}
let h=!0
function v(t){const r=t[0].intersectionRatio
if(r!==s){if(!h)return l()
r?l(!1,r):n=setTimeout((()=>{l(!1,1e-7)}),1e3)}1!==r||Bl(c,e.getBoundingClientRect())||l(),h=!1}try{r=new IntersectionObserver(v,{...m,root:a.ownerDocument})}catch(EC){r=new IntersectionObserver(v,m)}r.observe(e)}(!0),o}(c,n):null
let f,p=-1,m=null
l&&(m=new ResizeObserver((e=>{let[r]=e
r&&r.target===c&&m&&(m.unobserve(t),cancelAnimationFrame(p),p=requestAnimationFrame((()=>{var e
null==(e=m)||e.observe(t)}))),n()})),c&&!s&&m.observe(c),m.observe(t))
let h=s?Ml(e):null
return s&&function t(){const r=Ml(e)
h&&!Bl(h,r)&&n(),h=r,f=requestAnimationFrame(t)}(),n(),()=>{var e
u.forEach((e=>{a&&e.removeEventListener('scroll',n),o&&e.removeEventListener('resize',n)})),null==d||d(),null==(e=m)||e.disconnect(),m=null,s&&cancelAnimationFrame(f)}}(...e,{animationFrame:'always'===x}),elements:{reference:E.anchor},middleware:[ei({mainAxis:d+L,alignmentAxis:m}),v&&ti({mainAxis:!0,crossAxis:!1,limiter:'partial'===b?ni():void 0,...O}),v&&ri({...O}),ai({...O,apply:({elements:e,rects:t,availableWidth:n,availableHeight:r})=>{const{width:a,height:o}=t.reference,l=e.floating.style
l.setProperty('--radix-popper-available-width',`${n}px`),l.setProperty('--radix-popper-available-height',`${r}px`),l.setProperty('--radix-popper-anchor-width',`${a}px`),l.setProperty('--radix-popper-anchor-height',`${o}px`)}}),P&&li({element:P,padding:h}),ki({arrowWidth:_,arrowHeight:L}),w&&oi({strategy:'referenceHidden',...O})]}),[V,W]=Ni(B),U=Pn(C)
Mn((()=>{$&&(null==U||U())}),[$,U])
const K=null==(n=H.arrow)?void 0:n.x,G=null==(r=H.arrow)?void 0:r.y,q=0!==(null==(a=H.arrow)?void 0:a.centerOffset),[Y,X]=p.useState()
return Mn((()=>{k&&X(window.getComputedStyle(k).zIndex)}),[k]),s.jsx('div',{ref:z.setFloating,'data-radix-popper-content-wrapper':'',style:{...F,transform:$?F.transform:'translate(0, -200%)',minWidth:'max-content',zIndex:Y,'--radix-popper-transform-origin':[null==(o=H.transformOrigin)?void 0:o.x,null==(l=H.transformOrigin)?void 0:l.y].join(' '),...(null==(i=H.hide)?void 0:i.referenceHidden)&&{visibility:'hidden',pointerEvents:'none'}},dir:e.dir,children:s.jsx(yi,{scope:c,placedSide:V,onArrowChange:T,arrowX:K,arrowY:G,shouldHideArrow:q,children:s.jsx(yn.div,{'data-side':V,'data-align':W,...S,ref:R,style:{...S.style,animation:$?void 0:'none'}})})})}))
wi.displayName=gi
var xi='PopperArrow',Ci={top:'bottom',right:'left',bottom:'top',left:'right'},Si=p.forwardRef((function(e,t){const{__scopePopper:n,...r}=e,a=bi(xi,n),o=Ci[a.placedSide]
return s.jsx('span',{ref:a.onArrowChange,style:{position:'absolute',left:a.arrowX,top:a.arrowY,[o]:0,transformOrigin:{top:'',right:'0 0',bottom:'center 0',left:'100% 0'}[a.placedSide],transform:{top:'translateY(100%)',right:'translateY(50%) rotate(90deg) translateX(-50%)',bottom:'rotate(180deg)',left:'translateY(50%) rotate(-90deg) translateX(50%)'}[a.placedSide],visibility:a.shouldHideArrow?'hidden':void 0},children:s.jsx(si,{...r,ref:t,style:{...r.style,display:'block'}})})}))
function Ei(e){return null!==e}Si.displayName=xi
var ki=e=>({name:'transformOrigin',options:e,fn(t){var n,r,a
const{placement:o,rects:l,middlewareData:i}=t,s=0!==(null==(n=i.arrow)?void 0:n.centerOffset),c=s?0:e.arrowWidth,u=s?0:e.arrowHeight,[d,f]=Ni(o),p={start:'0%',center:'50%',end:'100%'}[f],m=((null==(r=i.arrow)?void 0:r.x)??0)+c/2,h=((null==(a=i.arrow)?void 0:a.y)??0)+u/2
let v='',g=''
return'bottom'===d?(v=s?p:`${m}px`,g=-u+'px'):'top'===d?(v=s?p:`${m}px`,g=`${l.floating.height+u}px`):'right'===d?(v=-u+'px',g=s?p:`${h}px`):'left'===d&&(v=`${l.floating.width+u}px`,g=s?p:`${h}px`),{data:{x:v,y:g}}}})
function Ni(e){const[t,n='center']=e.split('-')
return[t,n]}var Ri=mi,Pi=vi,Ti=wi,Mi=Si,_i='rovingFocusGroup.onEntryFocus',Li={bubbles:!1,cancelable:!0},Di='RovingFocusGroup',[ji,Ii,Ai]=Nn(Di),[Oi,zi]=En(Di,[Ai]),[Fi,Bi]=Oi(Di),$i=p.forwardRef(((e,t)=>s.jsx(ji.Provider,{scope:e.__scopeRovingFocusGroup,children:s.jsx(ji.Slot,{scope:e.__scopeRovingFocusGroup,children:s.jsx(Hi,{...e,ref:t})})})))
$i.displayName=Di
var Hi=p.forwardRef(((e,t)=>{const{__scopeRovingFocusGroup:n,orientation:r,loop:a=!1,dir:o,currentTabStopId:l,defaultCurrentTabStopId:i,onCurrentTabStopIdChange:c,onEntryFocus:u,preventScrollOnEntryFocus:d=!1,...f}=e,m=p.useRef(null),h=fn(t,m),v=zn(o),[g=null,y]=Tn({prop:l,defaultProp:i,onChange:c}),[b,w]=p.useState(!1),x=Pn(u),C=Ii(n),S=p.useRef(!1),[E,k]=p.useState(0)
return p.useEffect((()=>{const e=m.current
if(e)return e.addEventListener(_i,x),()=>e.removeEventListener(_i,x)}),[x]),s.jsx(Fi,{scope:n,orientation:r,dir:v,loop:a,currentTabStopId:g,onItemFocus:p.useCallback((e=>y(e)),[y]),onItemShiftTab:p.useCallback((()=>w(!0)),[]),onFocusableItemAdd:p.useCallback((()=>k((e=>e+1))),[]),onFocusableItemRemove:p.useCallback((()=>k((e=>e-1))),[]),children:s.jsx(yn.div,{tabIndex:b||0===E?-1:0,'data-orientation':r,...f,ref:h,style:{outline:'none',...e.style},onMouseDown:Rn(e.onMouseDown,(()=>{S.current=!0})),onFocus:Rn(e.onFocus,(e=>{const t=!S.current
if(e.target===e.currentTarget&&t&&!b){const t=new CustomEvent(_i,Li)
if(e.currentTarget.dispatchEvent(t),!t.defaultPrevented){const e=C().filter((e=>e.focusable))
Ki([e.find((e=>e.active)),e.find((e=>e.id===g)),...e].filter(Boolean).map((e=>e.ref.current)),d)}}S.current=!1})),onBlur:Rn(e.onBlur,(()=>w(!1)))})})})),Vi='RovingFocusGroupItem',Wi=p.forwardRef(((e,t)=>{const{__scopeRovingFocusGroup:n,focusable:r=!0,active:a=!1,tabStopId:o,...l}=e,i=In(),c=o||i,u=Bi(Vi,n),d=u.currentTabStopId===c,f=Ii(n),{onFocusableItemAdd:m,onFocusableItemRemove:h}=u
return p.useEffect((()=>{if(r)return m(),()=>h()}),[r,m,h]),s.jsx(ji.ItemSlot,{scope:n,id:c,focusable:r,active:a,children:s.jsx(yn.span,{tabIndex:d?0:-1,'data-orientation':u.orientation,...l,ref:t,onMouseDown:Rn(e.onMouseDown,(e=>{r?u.onItemFocus(c):e.preventDefault()})),onFocus:Rn(e.onFocus,(()=>u.onItemFocus(c))),onKeyDown:Rn(e.onKeyDown,(e=>{if('Tab'===e.key&&e.shiftKey)return void u.onItemShiftTab()
if(e.target!==e.currentTarget)return
const t=function(e,t,n){const r=function(e,t){return'rtl'!==t?e:'ArrowLeft'===e?'ArrowRight':'ArrowRight'===e?'ArrowLeft':e}(e.key,n)
return'vertical'===t&&['ArrowLeft','ArrowRight'].includes(r)||'horizontal'===t&&['ArrowUp','ArrowDown'].includes(r)?void 0:Ui[r]}(e,u.orientation,u.dir)
if(void 0!==t){if(e.metaKey||e.ctrlKey||e.altKey||e.shiftKey)return
e.preventDefault()
let a=f().filter((e=>e.focusable)).map((e=>e.ref.current))
if('last'===t)a.reverse()
else if('prev'===t||'next'===t){'prev'===t&&a.reverse()
const o=a.indexOf(e.currentTarget)
a=u.loop?(r=o+1,(n=a).map(((e,t)=>n[(r+t)%n.length]))):a.slice(o+1)}setTimeout((()=>Ki(a)))}var n,r}))})})}))
Wi.displayName=Vi
var Ui={ArrowLeft:'prev',ArrowUp:'prev',ArrowRight:'next',ArrowDown:'next',PageUp:'first',Home:'first',PageDown:'last',End:'last'}
function Ki(e,t=!1){const n=document.activeElement
for(const r of e){if(r===n)return
if(r.focus({preventScroll:t}),document.activeElement!==n)return}}var Gi=$i,qi=Wi,Yi=['Enter',' '],Xi=['ArrowUp','PageDown','End'],Qi=['ArrowDown','PageUp','Home',...Xi],Zi={ltr:[...Yi,'ArrowRight'],rtl:[...Yi,'ArrowLeft']},Ji={ltr:['ArrowLeft'],rtl:['ArrowRight']},es='Menu',[ts,ns,rs]=Nn(es),[as,os]=En(es,[rs,di,zi]),ls=di(),is=zi(),[ss,cs]=as(es),[us,ds]=as(es),fs=p.forwardRef(((e,t)=>{const{__scopeMenu:n,...r}=e,a=ls(n)
return s.jsx(Pi,{...a,...r,ref:t})}))
fs.displayName='MenuAnchor'
var ps='MenuPortal',[ms,hs]=as(ps,{forceMount:void 0}),vs=e=>{const{__scopeMenu:t,forceMount:n,children:r,container:a}=e,o=cs(ps,t)
return s.jsx(ms,{scope:t,forceMount:n,children:s.jsx(_n,{present:n||o.open,children:s.jsx(rr,{asChild:!0,container:a,children:r})})})}
vs.displayName=ps
var gs='MenuContent',[ys,bs]=as(gs),ws=p.forwardRef(((e,t)=>{const n=hs(gs,e.__scopeMenu),{forceMount:r=n.forceMount,...a}=e,o=cs(gs,e.__scopeMenu),l=ds(gs,e.__scopeMenu)
return s.jsx(ts.Provider,{scope:e.__scopeMenu,children:s.jsx(_n,{present:r||o.open,children:s.jsx(ts.Slot,{scope:e.__scopeMenu,children:l.modal?s.jsx(xs,{...a,ref:t}):s.jsx(Cs,{...a,ref:t})})})})})),xs=p.forwardRef(((e,t)=>{const n=cs(gs,e.__scopeMenu),r=p.useRef(null),a=fn(t,r)
return p.useEffect((()=>{const e=r.current
if(e)return Yr(e)}),[]),s.jsx(Ss,{...e,ref:a,trapFocus:n.open,disableOutsidePointerEvents:n.open,disableOutsideScroll:!0,onFocusOutside:Rn(e.onFocusOutside,(e=>e.preventDefault()),{checkForDefaultPrevented:!1}),onDismiss:()=>n.onOpenChange(!1)})})),Cs=p.forwardRef(((e,t)=>{const n=cs(gs,e.__scopeMenu)
return s.jsx(Ss,{...e,ref:t,trapFocus:!1,disableOutsidePointerEvents:!1,disableOutsideScroll:!1,onDismiss:()=>n.onOpenChange(!1)})})),Ss=p.forwardRef(((e,t)=>{const{__scopeMenu:n,loop:r=!1,trapFocus:a,onOpenAutoFocus:o,onCloseAutoFocus:l,disableOutsidePointerEvents:i,onEntryFocus:c,onEscapeKeyDown:u,onPointerDownOutside:d,onFocusOutside:f,onInteractOutside:m,onDismiss:h,disableOutsideScroll:v,...g}=e,y=cs(gs,n),b=ds(gs,n),w=ls(n),x=is(n),C=ns(n),[S,E]=p.useState(null),k=p.useRef(null),N=fn(t,k,y.onContentChange),R=p.useRef(0),P=p.useRef(''),T=p.useRef(0),M=p.useRef(null),_=p.useRef('right'),L=p.useRef(0),D=v?Vr:p.Fragment,j=v?{as:pn,allowPinchZoom:!0}:void 0
p.useEffect((()=>()=>window.clearTimeout(R.current)),[]),or()
const I=p.useCallback((e=>{var t,n
return _.current===(null==(t=M.current)?void 0:t.side)&&function(e,t){return!!t&&function(e,t){const{x:n,y:r}=e
let a=!1
for(let o=0,l=t.length-1;o<t.length;l=o++){const e=t[o].x,i=t[o].y,s=t[l].x,c=t[l].y
i>r!=c>r&&n<(s-e)*(r-i)/(c-i)+e&&(a=!a)}return a}({x:e.clientX,y:e.clientY},t)}(e,null==(n=M.current)?void 0:n.area)}),[])
return s.jsx(ys,{scope:n,searchRef:P,onItemEnter:p.useCallback((e=>{I(e)&&e.preventDefault()}),[I]),onItemLeave:p.useCallback((e=>{var t
I(e)||(null==(t=k.current)||t.focus(),E(null))}),[I]),onTriggerLeave:p.useCallback((e=>{I(e)&&e.preventDefault()}),[I]),pointerGraceTimerRef:T,onPointerGraceIntentChange:p.useCallback((e=>{M.current=e}),[]),children:s.jsx(D,{...j,children:s.jsx(Xn,{asChild:!0,trapped:a,onMountAutoFocus:Rn(o,(e=>{var t
e.preventDefault(),null==(t=k.current)||t.focus({preventScroll:!0})})),onUnmountAutoFocus:l,children:s.jsx(Wn,{asChild:!0,disableOutsidePointerEvents:i,onEscapeKeyDown:u,onPointerDownOutside:d,onFocusOutside:f,onInteractOutside:m,onDismiss:h,children:s.jsx(Gi,{asChild:!0,...x,dir:b.dir,orientation:'vertical',loop:r,currentTabStopId:S,onCurrentTabStopIdChange:E,onEntryFocus:Rn(c,(e=>{b.isUsingKeyboardRef.current||e.preventDefault()})),preventScrollOnEntryFocus:!0,children:s.jsx(Ti,{role:'menu','aria-orientation':'vertical','data-state':Ys(y.open),'data-radix-menu-content':'',dir:b.dir,...w,...g,ref:N,style:{outline:'none',...g.style},onKeyDown:Rn(g.onKeyDown,(e=>{const t=e.target.closest('[data-radix-menu-content]')===e.currentTarget,n=e.ctrlKey||e.altKey||e.metaKey,r=1===e.key.length
t&&('Tab'===e.key&&e.preventDefault(),!n&&r&&(e=>{var t,n
const r=P.current+e,a=C().filter((e=>!e.disabled)),o=document.activeElement,l=null==(t=a.find((e=>e.ref.current===o)))?void 0:t.textValue,i=function(e,t,n){const r=t.length>1&&Array.from(t).every((e=>e===t[0]))?t[0]:t,a=n?e.indexOf(n):-1
let o=(l=e,i=Math.max(a,0),l.map(((e,t)=>l[(i+t)%l.length])))
var l,i
1===r.length&&(o=o.filter((e=>e!==n)))
const s=o.find((e=>e.toLowerCase().startsWith(r.toLowerCase())))
return s!==n?s:void 0}(a.map((e=>e.textValue)),r,l),s=null==(n=a.find((e=>e.textValue===i)))?void 0:n.ref.current
!function e(t){P.current=t,window.clearTimeout(R.current),''!==t&&(R.current=window.setTimeout((()=>e('')),1e3))}(r),s&&setTimeout((()=>s.focus()))})(e.key))
const a=k.current
if(e.target!==a)return
if(!Qi.includes(e.key))return
e.preventDefault()
const o=C().filter((e=>!e.disabled)).map((e=>e.ref.current))
Xi.includes(e.key)&&o.reverse(),function(e){const t=document.activeElement
for(const n of e){if(n===t)return
if(n.focus(),document.activeElement!==t)return}}(o)})),onBlur:Rn(e.onBlur,(e=>{e.currentTarget.contains(e.target)||(window.clearTimeout(R.current),P.current='')})),onPointerMove:Rn(e.onPointerMove,Zs((e=>{const t=e.target,n=L.current!==e.clientX
if(e.currentTarget.contains(t)&&n){const t=e.clientX>L.current?'right':'left'
_.current=t,L.current=e.clientX}})))})})})})})})}))
ws.displayName=gs
var Es=p.forwardRef(((e,t)=>{const{__scopeMenu:n,...r}=e
return s.jsx(yn.div,{role:'group',...r,ref:t})}))
Es.displayName='MenuGroup'
var ks=p.forwardRef(((e,t)=>{const{__scopeMenu:n,...r}=e
return s.jsx(yn.div,{...r,ref:t})}))
ks.displayName='MenuLabel'
var Ns='MenuItem',Rs='menu.itemSelect',Ps=p.forwardRef(((e,t)=>{const{disabled:n=!1,onSelect:r,...a}=e,o=p.useRef(null),l=ds(Ns,e.__scopeMenu),i=bs(Ns,e.__scopeMenu),c=fn(t,o),u=p.useRef(!1)
return s.jsx(Ts,{...a,ref:c,disabled:n,onClick:Rn(e.onClick,(()=>{const e=o.current
if(!n&&e){const t=new CustomEvent(Rs,{bubbles:!0,cancelable:!0})
e.addEventListener(Rs,(e=>null==r?void 0:r(e)),{once:!0}),bn(e,t),t.defaultPrevented?u.current=!1:l.onClose()}})),onPointerDown:t=>{var n
null==(n=e.onPointerDown)||n.call(e,t),u.current=!0},onPointerUp:Rn(e.onPointerUp,(e=>{var t
u.current||null==(t=e.currentTarget)||t.click()})),onKeyDown:Rn(e.onKeyDown,(e=>{const t=''!==i.searchRef.current
n||t&&' '===e.key||Yi.includes(e.key)&&(e.currentTarget.click(),e.preventDefault())}))})}))
Ps.displayName=Ns
var Ts=p.forwardRef(((e,t)=>{const{__scopeMenu:n,disabled:r=!1,textValue:a,...o}=e,l=bs(Ns,n),i=is(n),c=p.useRef(null),u=fn(t,c),[d,f]=p.useState(!1),[m,h]=p.useState('')
return p.useEffect((()=>{const e=c.current
e&&h((e.textContent??'').trim())}),[o.children]),s.jsx(ts.ItemSlot,{scope:n,disabled:r,textValue:a??m,children:s.jsx(qi,{asChild:!0,...i,focusable:!r,children:s.jsx(yn.div,{role:'menuitem','data-highlighted':d?'':void 0,'aria-disabled':r||void 0,'data-disabled':r?'':void 0,...o,ref:u,onPointerMove:Rn(e.onPointerMove,Zs((e=>{r?l.onItemLeave(e):(l.onItemEnter(e),e.defaultPrevented||e.currentTarget.focus({preventScroll:!0}))}))),onPointerLeave:Rn(e.onPointerLeave,Zs((e=>l.onItemLeave(e)))),onFocus:Rn(e.onFocus,(()=>f(!0))),onBlur:Rn(e.onBlur,(()=>f(!1)))})})})})),Ms=p.forwardRef(((e,t)=>{const{checked:n=!1,onCheckedChange:r,...a}=e
return s.jsx(zs,{scope:e.__scopeMenu,checked:n,children:s.jsx(Ps,{role:'menuitemcheckbox','aria-checked':Xs(n)?'mixed':n,...a,ref:t,'data-state':Qs(n),onSelect:Rn(a.onSelect,(()=>null==r?void 0:r(!!Xs(n)||!n)),{checkForDefaultPrevented:!1})})})}))
Ms.displayName='MenuCheckboxItem'
var _s='MenuRadioGroup',[Ls,Ds]=as(_s,{value:void 0,onValueChange:()=>{}}),js=p.forwardRef(((e,t)=>{const{value:n,onValueChange:r,...a}=e,o=Pn(r)
return s.jsx(Ls,{scope:e.__scopeMenu,value:n,onValueChange:o,children:s.jsx(Es,{...a,ref:t})})}))
js.displayName=_s
var Is='MenuRadioItem',As=p.forwardRef(((e,t)=>{const{value:n,...r}=e,a=Ds(Is,e.__scopeMenu),o=n===a.value
return s.jsx(zs,{scope:e.__scopeMenu,checked:o,children:s.jsx(Ps,{role:'menuitemradio','aria-checked':o,...r,ref:t,'data-state':Qs(o),onSelect:Rn(r.onSelect,(()=>{var e
return null==(e=a.onValueChange)?void 0:e.call(a,n)}),{checkForDefaultPrevented:!1})})})}))
As.displayName=Is
var Os='MenuItemIndicator',[zs,Fs]=as(Os,{checked:!1}),Bs=p.forwardRef(((e,t)=>{const{__scopeMenu:n,forceMount:r,...a}=e,o=Fs(Os,n)
return s.jsx(_n,{present:r||Xs(o.checked)||!0===o.checked,children:s.jsx(yn.span,{...a,ref:t,'data-state':Qs(o.checked)})})}))
Bs.displayName=Os
var $s=p.forwardRef(((e,t)=>{const{__scopeMenu:n,...r}=e
return s.jsx(yn.div,{role:'separator','aria-orientation':'horizontal',...r,ref:t})}))
$s.displayName='MenuSeparator'
var Hs=p.forwardRef(((e,t)=>{const{__scopeMenu:n,...r}=e,a=ls(n)
return s.jsx(Mi,{...a,...r,ref:t})}))
Hs.displayName='MenuArrow'
var[Vs,Ws]=as('MenuSub'),Us='MenuSubTrigger',Ks=p.forwardRef(((e,t)=>{const n=cs(Us,e.__scopeMenu),r=ds(Us,e.__scopeMenu),a=Ws(Us,e.__scopeMenu),o=bs(Us,e.__scopeMenu),l=p.useRef(null),{pointerGraceTimerRef:i,onPointerGraceIntentChange:c}=o,u={__scopeMenu:e.__scopeMenu},d=p.useCallback((()=>{l.current&&window.clearTimeout(l.current),l.current=null}),[])
return p.useEffect((()=>d),[d]),p.useEffect((()=>{const e=i.current
return()=>{window.clearTimeout(e),c(null)}}),[i,c]),s.jsx(fs,{asChild:!0,...u,children:s.jsx(Ts,{id:a.triggerId,'aria-haspopup':'menu','aria-expanded':n.open,'aria-controls':a.contentId,'data-state':Ys(n.open),...e,ref:dn(t,a.onTriggerChange),onClick:t=>{var r
null==(r=e.onClick)||r.call(e,t),e.disabled||t.defaultPrevented||(t.currentTarget.focus(),n.open||n.onOpenChange(!0))},onPointerMove:Rn(e.onPointerMove,Zs((t=>{o.onItemEnter(t),t.defaultPrevented||e.disabled||n.open||l.current||(o.onPointerGraceIntentChange(null),l.current=window.setTimeout((()=>{n.onOpenChange(!0),d()}),100))}))),onPointerLeave:Rn(e.onPointerLeave,Zs((e=>{var t,r
d()
const a=null==(t=n.content)?void 0:t.getBoundingClientRect()
if(a){const t=null==(r=n.content)?void 0:r.dataset.side,l='right'===t,s=l?-5:5,c=a[l?'left':'right'],u=a[l?'right':'left']
o.onPointerGraceIntentChange({area:[{x:e.clientX+s,y:e.clientY},{x:c,y:a.top},{x:u,y:a.top},{x:u,y:a.bottom},{x:c,y:a.bottom}],side:t}),window.clearTimeout(i.current),i.current=window.setTimeout((()=>o.onPointerGraceIntentChange(null)),300)}else{if(o.onTriggerLeave(e),e.defaultPrevented)return
o.onPointerGraceIntentChange(null)}}))),onKeyDown:Rn(e.onKeyDown,(t=>{var a
const l=''!==o.searchRef.current
e.disabled||l&&' '===t.key||Zi[r.dir].includes(t.key)&&(n.onOpenChange(!0),null==(a=n.content)||a.focus(),t.preventDefault())}))})})}))
Ks.displayName=Us
var Gs='MenuSubContent',qs=p.forwardRef(((e,t)=>{const n=hs(gs,e.__scopeMenu),{forceMount:r=n.forceMount,...a}=e,o=cs(gs,e.__scopeMenu),l=ds(gs,e.__scopeMenu),i=Ws(Gs,e.__scopeMenu),c=p.useRef(null),u=fn(t,c)
return s.jsx(ts.Provider,{scope:e.__scopeMenu,children:s.jsx(_n,{present:r||o.open,children:s.jsx(ts.Slot,{scope:e.__scopeMenu,children:s.jsx(Ss,{id:i.contentId,'aria-labelledby':i.triggerId,...a,ref:u,align:'start',side:'rtl'===l.dir?'left':'right',disableOutsidePointerEvents:!1,disableOutsideScroll:!1,trapFocus:!1,onOpenAutoFocus:e=>{var t
l.isUsingKeyboardRef.current&&(null==(t=c.current)||t.focus()),e.preventDefault()},onCloseAutoFocus:e=>e.preventDefault(),onFocusOutside:Rn(e.onFocusOutside,(e=>{e.target!==i.trigger&&o.onOpenChange(!1)})),onEscapeKeyDown:Rn(e.onEscapeKeyDown,(e=>{l.onClose(),e.preventDefault()})),onKeyDown:Rn(e.onKeyDown,(e=>{var t
const n=e.currentTarget.contains(e.target),r=Ji[l.dir].includes(e.key)
n&&r&&(o.onOpenChange(!1),null==(t=i.trigger)||t.focus(),e.preventDefault())}))})})})})}))
function Ys(e){return e?'open':'closed'}function Xs(e){return'indeterminate'===e}function Qs(e){return Xs(e)?'indeterminate':e?'checked':'unchecked'}function Zs(e){return t=>'mouse'===t.pointerType?e(t):void 0}qs.displayName=Gs
var Js=fs,ec=vs,tc=ws,nc=Es,rc=ks,ac=Ps,oc=Ms,lc=js,ic=As,sc=Bs,cc=$s,uc=Hs,dc=Ks,fc=qs,pc='ContextMenu',[mc,hc]=En(pc,[os]),vc=os(),[gc,yc]=mc(pc),bc='ContextMenuTrigger',wc=p.forwardRef(((e,t)=>{const{__scopeContextMenu:n,disabled:r=!1,...a}=e,o=yc(bc,n),l=vc(n),i=p.useRef({x:0,y:0}),c=p.useRef({getBoundingClientRect:()=>DOMRect.fromRect({width:0,height:0,...i.current})}),u=p.useRef(0),d=p.useCallback((()=>window.clearTimeout(u.current)),[]),f=e=>{i.current={x:e.clientX,y:e.clientY},o.onOpenChange(!0)}
return p.useEffect((()=>d),[d]),p.useEffect((()=>{r&&d()}),[r,d]),s.jsxs(s.Fragment,{children:[s.jsx(Js,{...l,virtualRef:c}),s.jsx(yn.span,{'data-state':o.open?'open':'closed','data-disabled':r?'':void 0,...a,ref:t,style:{WebkitTouchCallout:'none',...e.style},onContextMenu:r?e.onContextMenu:Rn(e.onContextMenu,(e=>{d(),f(e),e.preventDefault()})),onPointerDown:r?e.onPointerDown:Rn(e.onPointerDown,jc((e=>{d(),u.current=window.setTimeout((()=>f(e)),700)}))),onPointerMove:r?e.onPointerMove:Rn(e.onPointerMove,jc(d)),onPointerCancel:r?e.onPointerCancel:Rn(e.onPointerCancel,jc(d)),onPointerUp:r?e.onPointerUp:Rn(e.onPointerUp,jc(d))})]})}))
wc.displayName=bc
var xc=e=>{const{__scopeContextMenu:t,...n}=e,r=vc(t)
return s.jsx(ec,{...r,...n})}
xc.displayName='ContextMenuPortal'
var Cc='ContextMenuContent',Sc=p.forwardRef(((e,t)=>{const{__scopeContextMenu:n,...r}=e,a=yc(Cc,n),o=vc(n),l=p.useRef(!1)
return s.jsx(tc,{...o,...r,ref:t,side:'right',sideOffset:2,align:'start',onCloseAutoFocus:t=>{var n
null==(n=e.onCloseAutoFocus)||n.call(e,t),!t.defaultPrevented&&l.current&&t.preventDefault(),l.current=!1},onInteractOutside:t=>{var n
null==(n=e.onInteractOutside)||n.call(e,t),t.defaultPrevented||a.modal||(l.current=!0)},style:{...e.style,'--radix-context-menu-content-transform-origin':'var(--radix-popper-transform-origin)','--radix-context-menu-content-available-width':'var(--radix-popper-available-width)','--radix-context-menu-content-available-height':'var(--radix-popper-available-height)','--radix-context-menu-trigger-width':'var(--radix-popper-anchor-width)','--radix-context-menu-trigger-height':'var(--radix-popper-anchor-height)'}})}))
Sc.displayName=Cc
var Ec=p.forwardRef(((e,t)=>{const{__scopeContextMenu:n,...r}=e,a=vc(n)
return s.jsx(nc,{...a,...r,ref:t})}))
Ec.displayName='ContextMenuGroup'
var kc=p.forwardRef(((e,t)=>{const{__scopeContextMenu:n,...r}=e,a=vc(n)
return s.jsx(rc,{...a,...r,ref:t})}))
kc.displayName='ContextMenuLabel'
var Nc=p.forwardRef(((e,t)=>{const{__scopeContextMenu:n,...r}=e,a=vc(n)
return s.jsx(ac,{...a,...r,ref:t})}))
Nc.displayName='ContextMenuItem'
var Rc=p.forwardRef(((e,t)=>{const{__scopeContextMenu:n,...r}=e,a=vc(n)
return s.jsx(oc,{...a,...r,ref:t})}))
Rc.displayName='ContextMenuCheckboxItem'
var Pc=p.forwardRef(((e,t)=>{const{__scopeContextMenu:n,...r}=e,a=vc(n)
return s.jsx(lc,{...a,...r,ref:t})}))
Pc.displayName='ContextMenuRadioGroup'
var Tc=p.forwardRef(((e,t)=>{const{__scopeContextMenu:n,...r}=e,a=vc(n)
return s.jsx(ic,{...a,...r,ref:t})}))
Tc.displayName='ContextMenuRadioItem'
var Mc=p.forwardRef(((e,t)=>{const{__scopeContextMenu:n,...r}=e,a=vc(n)
return s.jsx(sc,{...a,...r,ref:t})}))
Mc.displayName='ContextMenuItemIndicator'
var _c=p.forwardRef(((e,t)=>{const{__scopeContextMenu:n,...r}=e,a=vc(n)
return s.jsx(cc,{...a,...r,ref:t})}))
_c.displayName='ContextMenuSeparator',p.forwardRef(((e,t)=>{const{__scopeContextMenu:n,...r}=e,a=vc(n)
return s.jsx(uc,{...a,...r,ref:t})})).displayName='ContextMenuArrow'
var Lc=p.forwardRef(((e,t)=>{const{__scopeContextMenu:n,...r}=e,a=vc(n)
return s.jsx(dc,{...a,...r,ref:t})}))
Lc.displayName='ContextMenuSubTrigger'
var Dc=p.forwardRef(((e,t)=>{const{__scopeContextMenu:n,...r}=e,a=vc(n)
return s.jsx(fc,{...a,...r,ref:t,style:{...e.style,'--radix-context-menu-content-transform-origin':'var(--radix-popper-transform-origin)','--radix-context-menu-content-available-width':'var(--radix-popper-available-width)','--radix-context-menu-content-available-height':'var(--radix-popper-available-height)','--radix-context-menu-trigger-width':'var(--radix-popper-anchor-width)','--radix-context-menu-trigger-height':'var(--radix-popper-anchor-height)'}})}))
function jc(e){return t=>'mouse'!==t.pointerType?e(t):void 0}Dc.displayName='ContextMenuSubContent'
var Ic=wc,Ac=xc,Oc=Sc,zc=Ec,Fc=kc,Bc=Nc,$c=Rc,Hc=Pc,Vc=Tc,Wc=Mc,Uc=_c,Kc=Lc,Gc=Dc,qc='DropdownMenu',[Yc,Xc]=En(qc,[os]),Qc=os(),[Zc,Jc]=Yc(qc),eu='DropdownMenuTrigger',tu=p.forwardRef(((e,t)=>{const{__scopeDropdownMenu:n,disabled:r=!1,...a}=e,o=Jc(eu,n),l=Qc(n)
return s.jsx(Js,{asChild:!0,...l,children:s.jsx(yn.button,{type:'button',id:o.triggerId,'aria-haspopup':'menu','aria-expanded':o.open,'aria-controls':o.open?o.contentId:void 0,'data-state':o.open?'open':'closed','data-disabled':r?'':void 0,disabled:r,...a,ref:dn(t,o.triggerRef),onPointerDown:Rn(e.onPointerDown,(e=>{r||0!==e.button||!1!==e.ctrlKey||(o.onOpenToggle(),o.open||e.preventDefault())})),onKeyDown:Rn(e.onKeyDown,(e=>{r||(['Enter',' '].includes(e.key)&&o.onOpenToggle(),'ArrowDown'===e.key&&o.onOpenChange(!0),['Enter',' ','ArrowDown'].includes(e.key)&&e.preventDefault())}))})})}))
tu.displayName=eu
var nu=e=>{const{__scopeDropdownMenu:t,...n}=e,r=Qc(t)
return s.jsx(ec,{...r,...n})}
nu.displayName='DropdownMenuPortal'
var ru='DropdownMenuContent',au=p.forwardRef(((e,t)=>{const{__scopeDropdownMenu:n,...r}=e,a=Jc(ru,n),o=Qc(n),l=p.useRef(!1)
return s.jsx(tc,{id:a.contentId,'aria-labelledby':a.triggerId,...o,...r,ref:t,onCloseAutoFocus:Rn(e.onCloseAutoFocus,(e=>{var t
l.current||null==(t=a.triggerRef.current)||t.focus(),l.current=!1,e.preventDefault()})),onInteractOutside:Rn(e.onInteractOutside,(e=>{const t=e.detail.originalEvent,n=0===t.button&&!0===t.ctrlKey,r=2===t.button||n
a.modal&&!r||(l.current=!0)})),style:{...e.style,'--radix-dropdown-menu-content-transform-origin':'var(--radix-popper-transform-origin)','--radix-dropdown-menu-content-available-width':'var(--radix-popper-available-width)','--radix-dropdown-menu-content-available-height':'var(--radix-popper-available-height)','--radix-dropdown-menu-trigger-width':'var(--radix-popper-anchor-width)','--radix-dropdown-menu-trigger-height':'var(--radix-popper-anchor-height)'}})}))
au.displayName=ru
var ou=p.forwardRef(((e,t)=>{const{__scopeDropdownMenu:n,...r}=e,a=Qc(n)
return s.jsx(nc,{...a,...r,ref:t})}))
ou.displayName='DropdownMenuGroup'
var lu=p.forwardRef(((e,t)=>{const{__scopeDropdownMenu:n,...r}=e,a=Qc(n)
return s.jsx(rc,{...a,...r,ref:t})}))
lu.displayName='DropdownMenuLabel'
var iu=p.forwardRef(((e,t)=>{const{__scopeDropdownMenu:n,...r}=e,a=Qc(n)
return s.jsx(ac,{...a,...r,ref:t})}))
iu.displayName='DropdownMenuItem'
var su=p.forwardRef(((e,t)=>{const{__scopeDropdownMenu:n,...r}=e,a=Qc(n)
return s.jsx(oc,{...a,...r,ref:t})}))
su.displayName='DropdownMenuCheckboxItem'
var cu=p.forwardRef(((e,t)=>{const{__scopeDropdownMenu:n,...r}=e,a=Qc(n)
return s.jsx(lc,{...a,...r,ref:t})}))
cu.displayName='DropdownMenuRadioGroup'
var uu=p.forwardRef(((e,t)=>{const{__scopeDropdownMenu:n,...r}=e,a=Qc(n)
return s.jsx(ic,{...a,...r,ref:t})}))
uu.displayName='DropdownMenuRadioItem'
var du=p.forwardRef(((e,t)=>{const{__scopeDropdownMenu:n,...r}=e,a=Qc(n)
return s.jsx(sc,{...a,...r,ref:t})}))
du.displayName='DropdownMenuItemIndicator'
var fu=p.forwardRef(((e,t)=>{const{__scopeDropdownMenu:n,...r}=e,a=Qc(n)
return s.jsx(cc,{...a,...r,ref:t})}))
fu.displayName='DropdownMenuSeparator',p.forwardRef(((e,t)=>{const{__scopeDropdownMenu:n,...r}=e,a=Qc(n)
return s.jsx(uc,{...a,...r,ref:t})})).displayName='DropdownMenuArrow'
var pu=p.forwardRef(((e,t)=>{const{__scopeDropdownMenu:n,...r}=e,a=Qc(n)
return s.jsx(dc,{...a,...r,ref:t})}))
pu.displayName='DropdownMenuSubTrigger'
var mu=p.forwardRef(((e,t)=>{const{__scopeDropdownMenu:n,...r}=e,a=Qc(n)
return s.jsx(fc,{...a,...r,ref:t,style:{...e.style,'--radix-dropdown-menu-content-transform-origin':'var(--radix-popper-transform-origin)','--radix-dropdown-menu-content-available-width':'var(--radix-popper-available-width)','--radix-dropdown-menu-content-available-height':'var(--radix-popper-available-height)','--radix-dropdown-menu-trigger-width':'var(--radix-popper-anchor-width)','--radix-dropdown-menu-trigger-height':'var(--radix-popper-anchor-height)'}})}))
mu.displayName='DropdownMenuSubContent'
var hu,vu=tu,gu=nu,yu=au,bu=ou,wu=lu,xu=iu,Cu=su,Su=cu,Eu=uu,ku=du,Nu=fu,Ru=pu,Pu=mu,Tu='HoverCard',[Mu,_u]=En(Tu,[di]),Lu=di(),[Du,ju]=Mu(Tu),Iu='HoverCardTrigger',Au=p.forwardRef(((e,t)=>{const{__scopeHoverCard:n,...r}=e,a=ju(Iu,n),o=Lu(n)
return s.jsx(Pi,{asChild:!0,...o,children:s.jsx(yn.a,{'data-state':a.open?'open':'closed',...r,ref:t,onPointerEnter:Rn(e.onPointerEnter,Wu(a.onOpen)),onPointerLeave:Rn(e.onPointerLeave,Wu(a.onClose)),onFocus:Rn(e.onFocus,a.onOpen),onBlur:Rn(e.onBlur,a.onClose),onTouchStart:Rn(e.onTouchStart,(e=>e.preventDefault()))})})}))
Au.displayName=Iu
var Ou='HoverCardPortal',[zu,Fu]=Mu(Ou,{forceMount:void 0}),Bu=e=>{const{__scopeHoverCard:t,forceMount:n,children:r,container:a}=e,o=ju(Ou,t)
return s.jsx(zu,{scope:t,forceMount:n,children:s.jsx(_n,{present:n||o.open,children:s.jsx(rr,{asChild:!0,container:a,children:r})})})}
Bu.displayName=Ou
var $u='HoverCardContent',Hu=p.forwardRef(((e,t)=>{const n=Fu($u,e.__scopeHoverCard),{forceMount:r=n.forceMount,...a}=e,o=ju($u,e.__scopeHoverCard)
return s.jsx(_n,{present:r||o.open,children:s.jsx(Vu,{'data-state':o.open?'open':'closed',...a,onPointerEnter:Rn(e.onPointerEnter,Wu(o.onOpen)),onPointerLeave:Rn(e.onPointerLeave,Wu(o.onClose)),ref:t})})}))
Hu.displayName=$u
var Vu=p.forwardRef(((e,t)=>{const{__scopeHoverCard:n,onEscapeKeyDown:r,onPointerDownOutside:a,onFocusOutside:o,onInteractOutside:l,...i}=e,c=ju($u,n),u=Lu(n),d=p.useRef(null),f=fn(t,d),[m,h]=p.useState(!1)
return p.useEffect((()=>{if(m){const e=document.body
return hu=e.style.userSelect||e.style.webkitUserSelect,e.style.userSelect='none',e.style.webkitUserSelect='none',()=>{e.style.userSelect=hu,e.style.webkitUserSelect=hu}}}),[m]),p.useEffect((()=>{if(d.current){const e=()=>{h(!1),c.isPointerDownOnContentRef.current=!1,setTimeout((()=>{var e
''!==(null==(e=document.getSelection())?void 0:e.toString())&&(c.hasSelectionRef.current=!0)}))}
return document.addEventListener('pointerup',e),()=>{document.removeEventListener('pointerup',e),c.hasSelectionRef.current=!1,c.isPointerDownOnContentRef.current=!1}}}),[c.isPointerDownOnContentRef,c.hasSelectionRef]),p.useEffect((()=>{d.current&&function(e){const t=[],n=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode:e=>e.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP})
for(;n.nextNode();)t.push(n.currentNode)
return t}(d.current).forEach((e=>e.setAttribute('tabindex','-1')))})),s.jsx(Wn,{asChild:!0,disableOutsidePointerEvents:!1,onInteractOutside:l,onEscapeKeyDown:r,onPointerDownOutside:a,onFocusOutside:Rn(o,(e=>{e.preventDefault()})),onDismiss:c.onDismiss,children:s.jsx(Ti,{...u,...i,onPointerDown:Rn(i.onPointerDown,(e=>{e.currentTarget.contains(e.target)&&h(!0),c.hasSelectionRef.current=!1,c.isPointerDownOnContentRef.current=!0})),ref:f,style:{...i.style,userSelect:m?'text':void 0,WebkitUserSelect:m?'text':void 0,'--radix-hover-card-content-transform-origin':'var(--radix-popper-transform-origin)','--radix-hover-card-content-available-width':'var(--radix-popper-available-width)','--radix-hover-card-content-available-height':'var(--radix-popper-available-height)','--radix-hover-card-trigger-width':'var(--radix-popper-anchor-width)','--radix-hover-card-trigger-height':'var(--radix-popper-anchor-height)'}})})}))
function Wu(e){return t=>'touch'===t.pointerType?void 0:e()}p.forwardRef(((e,t)=>{const{__scopeHoverCard:n,...r}=e,a=Lu(n)
return s.jsx(Mi,{...a,...r,ref:t})})).displayName='HoverCardArrow'
var Uu=Au,Ku=Bu,Gu=Hu,qu='NavigationMenu',[Yu,Xu,Qu]=Nn(qu),[Zu,Ju,ed]=Nn(qu),[td,nd]=En(qu,[Qu,ed]),[rd,ad]=td(qu),[od,ld]=td(qu),id=p.forwardRef(((e,t)=>{const{__scopeNavigationMenu:n,value:r,onValueChange:a,defaultValue:o,delayDuration:l=200,skipDelayDuration:i=300,orientation:c='horizontal',dir:u,...d}=e,[f,m]=p.useState(null),h=fn(t,(e=>m(e))),v=zn(u),g=p.useRef(0),y=p.useRef(0),b=p.useRef(0),[w,x]=p.useState(!0),[C='',S]=Tn({prop:r,onChange:e=>{const t=i>0
''!==e?(window.clearTimeout(b.current),t&&x(!1)):(window.clearTimeout(b.current),b.current=window.setTimeout((()=>x(!0)),i)),null==a||a(e)},defaultProp:o}),E=p.useCallback((()=>{window.clearTimeout(y.current),y.current=window.setTimeout((()=>S('')),150)}),[S]),k=p.useCallback((e=>{window.clearTimeout(y.current),S(e)}),[S]),N=p.useCallback((e=>{C===e?window.clearTimeout(y.current):g.current=window.setTimeout((()=>{window.clearTimeout(y.current),S(e)}),l)}),[C,S,l])
return p.useEffect((()=>()=>{window.clearTimeout(g.current),window.clearTimeout(y.current),window.clearTimeout(b.current)}),[]),s.jsx(cd,{scope:n,isRootMenu:!0,value:C,dir:v,orientation:c,rootNavigationMenu:f,onTriggerEnter:e=>{window.clearTimeout(g.current),w?N(e):k(e)},onTriggerLeave:()=>{window.clearTimeout(g.current),E()},onContentEnter:()=>window.clearTimeout(y.current),onContentLeave:E,onItemSelect:e=>{S((t=>t===e?'':e))},onItemDismiss:()=>S(''),children:s.jsx(yn.nav,{'aria-label':'Main','data-orientation':c,dir:v,...d,ref:h})})}))
id.displayName=qu
var sd='NavigationMenuSub'
p.forwardRef(((e,t)=>{const{__scopeNavigationMenu:n,value:r,onValueChange:a,defaultValue:o,orientation:l='horizontal',...i}=e,c=ad(sd,n),[u='',d]=Tn({prop:r,onChange:a,defaultProp:o})
return s.jsx(cd,{scope:n,isRootMenu:!1,value:u,dir:c.dir,orientation:l,rootNavigationMenu:c.rootNavigationMenu,onTriggerEnter:e=>d(e),onItemSelect:e=>d(e),onItemDismiss:()=>d(''),children:s.jsx(yn.div,{'data-orientation':l,...i,ref:t})})})).displayName=sd
var cd=e=>{const{scope:t,isRootMenu:n,rootNavigationMenu:r,dir:a,orientation:o,children:l,value:i,onItemSelect:c,onItemDismiss:u,onTriggerEnter:d,onTriggerLeave:f,onContentEnter:m,onContentLeave:h}=e,[v,g]=p.useState(null),[y,b]=p.useState(new Map),[w,x]=p.useState(null)
return s.jsx(rd,{scope:t,isRootMenu:n,rootNavigationMenu:r,value:i,previousValue:wo(i),baseId:In(),dir:a,orientation:o,viewport:v,onViewportChange:g,indicatorTrack:w,onIndicatorTrackChange:x,onTriggerEnter:Pn(d),onTriggerLeave:Pn(f),onContentEnter:Pn(m),onContentLeave:Pn(h),onItemSelect:Pn(c),onItemDismiss:Pn(u),onViewportContentChange:p.useCallback(((e,t)=>{b((n=>(n.set(e,t),new Map(n))))}),[]),onViewportContentRemove:p.useCallback((e=>{b((t=>t.has(e)?(t.delete(e),new Map(t)):t))}),[]),children:s.jsx(Yu.Provider,{scope:t,children:s.jsx(od,{scope:t,items:y,children:l})})})},ud='NavigationMenuList',dd=p.forwardRef(((e,t)=>{const{__scopeNavigationMenu:n,...r}=e,a=ad(ud,n),o=s.jsx(yn.ul,{'data-orientation':a.orientation,...r,ref:t})
return s.jsx(yn.div,{style:{position:'relative'},ref:a.onIndicatorTrackChange,children:s.jsx(Yu.Slot,{scope:n,children:a.isRootMenu?s.jsx(Rd,{asChild:!0,children:o}):o})})}))
dd.displayName=ud
var fd='NavigationMenuItem',[pd,md]=td(fd),hd=p.forwardRef(((e,t)=>{const{__scopeNavigationMenu:n,value:r,...a}=e,o=In(),l=r||o||'LEGACY_REACT_AUTO_VALUE',i=p.useRef(null),c=p.useRef(null),u=p.useRef(null),d=p.useRef((()=>{})),f=p.useRef(!1),m=p.useCallback(((e='start')=>{if(i.current){d.current()
const t=Md(i.current)
t.length&&_d('start'===e?t:t.reverse())}}),[]),h=p.useCallback((()=>{if(i.current){const e=Md(i.current)
e.length&&(d.current=function(e){return e.forEach((e=>{e.dataset.tabindex=e.getAttribute('tabindex')||'',e.setAttribute('tabindex','-1')})),()=>{e.forEach((e=>{const t=e.dataset.tabindex
e.setAttribute('tabindex',t)}))}}(e))}}),[])
return s.jsx(pd,{scope:n,value:l,triggerRef:c,contentRef:i,focusProxyRef:u,wasEscapeCloseRef:f,onEntryKeyDown:m,onFocusProxyEnter:m,onRootContentClose:h,onContentFocusOutside:h,children:s.jsx(yn.li,{...a,ref:t})})}))
hd.displayName=fd
var vd='NavigationMenuTrigger'
p.forwardRef(((e,t)=>{const{__scopeNavigationMenu:n,disabled:r,...a}=e,o=ad(vd,e.__scopeNavigationMenu),l=md(vd,e.__scopeNavigationMenu),i=p.useRef(null),c=fn(i,l.triggerRef,t),u=jd(o.baseId,l.value),d=Id(o.baseId,l.value),f=p.useRef(!1),m=p.useRef(!1),h=l.value===o.value
return s.jsxs(s.Fragment,{children:[s.jsx(Yu.ItemSlot,{scope:n,value:l.value,children:s.jsx(Td,{asChild:!0,children:s.jsx(yn.button,{id:u,disabled:r,'data-disabled':r?'':void 0,'data-state':Dd(h),'aria-expanded':h,'aria-controls':d,...a,ref:c,onPointerEnter:Rn(e.onPointerEnter,(()=>{m.current=!1,l.wasEscapeCloseRef.current=!1})),onPointerMove:Rn(e.onPointerMove,Ad((()=>{r||m.current||l.wasEscapeCloseRef.current||f.current||(o.onTriggerEnter(l.value),f.current=!0)}))),onPointerLeave:Rn(e.onPointerLeave,Ad((()=>{r||(o.onTriggerLeave(),f.current=!1)}))),onClick:Rn(e.onClick,(()=>{o.onItemSelect(l.value),m.current=h})),onKeyDown:Rn(e.onKeyDown,(e=>{const t={horizontal:'ArrowDown',vertical:'rtl'===o.dir?'ArrowLeft':'ArrowRight'}[o.orientation]
h&&e.key===t&&(l.onEntryKeyDown(),e.preventDefault())}))})})}),h&&s.jsxs(s.Fragment,{children:[s.jsx(xn,{'aria-hidden':!0,tabIndex:0,ref:l.focusProxyRef,onFocus:e=>{const t=l.contentRef.current,n=e.relatedTarget,r=n===i.current,a=null==t?void 0:t.contains(n)
!r&&a||l.onFocusProxyEnter(r?'start':'end')}}),o.viewport&&s.jsx('span',{'aria-owns':d})]})]})})).displayName=vd
var gd='navigationMenu.linkSelect',yd=p.forwardRef(((e,t)=>{const{__scopeNavigationMenu:n,active:r,onSelect:a,...o}=e
return s.jsx(Td,{asChild:!0,children:s.jsx(yn.a,{'data-active':r?'':void 0,'aria-current':r?'page':void 0,...o,ref:t,onClick:Rn(e.onClick,(e=>{const t=e.target,n=new CustomEvent(gd,{bubbles:!0,cancelable:!0})
t.addEventListener(gd,(e=>null==a?void 0:a(e)),{once:!0}),bn(t,n),n.defaultPrevented||e.metaKey||bn(t,new CustomEvent(Sd,{bubbles:!0,cancelable:!0}))}),{checkForDefaultPrevented:!1})})})}))
yd.displayName='NavigationMenuLink'
var bd='NavigationMenuIndicator'
p.forwardRef(((e,t)=>{const{forceMount:n,...r}=e,a=ad(bd,e.__scopeNavigationMenu),o=Boolean(a.value)
return a.indicatorTrack?sn.createPortal(s.jsx(_n,{present:n||o,children:s.jsx(wd,{...r,ref:t})}),a.indicatorTrack):null})).displayName=bd
var wd=p.forwardRef(((e,t)=>{const{__scopeNavigationMenu:n,...r}=e,a=ad(bd,n),o=Xu(n),[l,i]=p.useState(null),[c,u]=p.useState(null),d='horizontal'===a.orientation,f=Boolean(a.value)
p.useEffect((()=>{var e
const t=null==(e=o().find((e=>e.value===a.value)))?void 0:e.ref.current
t&&i(t)}),[o,a.value])
const m=()=>{l&&u({size:d?l.offsetWidth:l.offsetHeight,offset:d?l.offsetLeft:l.offsetTop})}
return Ld(l,m),Ld(a.indicatorTrack,m),c?s.jsx(yn.div,{'aria-hidden':!0,'data-state':f?'visible':'hidden','data-orientation':a.orientation,...r,ref:t,style:{position:'absolute',...d?{left:0,width:c.size+'px',transform:`translateX(${c.offset}px)`}:{top:0,height:c.size+'px',transform:`translateY(${c.offset}px)`},...r.style}}):null})),xd='NavigationMenuContent'
p.forwardRef(((e,t)=>{const{forceMount:n,...r}=e,a=ad(xd,e.__scopeNavigationMenu),o=md(xd,e.__scopeNavigationMenu),l=fn(o.contentRef,t),i=o.value===a.value,c={value:o.value,triggerRef:o.triggerRef,focusProxyRef:o.focusProxyRef,wasEscapeCloseRef:o.wasEscapeCloseRef,onContentFocusOutside:o.onContentFocusOutside,onRootContentClose:o.onRootContentClose,...r}
return a.viewport?s.jsx(Cd,{forceMount:n,...c,ref:l}):s.jsx(_n,{present:n||i,children:s.jsx(Ed,{'data-state':Dd(i),...c,ref:l,onPointerEnter:Rn(e.onPointerEnter,a.onContentEnter),onPointerLeave:Rn(e.onPointerLeave,Ad(a.onContentLeave)),style:{pointerEvents:!i&&a.isRootMenu?'none':void 0,...c.style}})})})).displayName=xd
var Cd=p.forwardRef(((e,t)=>{const n=ad(xd,e.__scopeNavigationMenu),{onViewportContentChange:r,onViewportContentRemove:a}=n
return Mn((()=>{r(e.value,{ref:t,...e})}),[e,t,r]),Mn((()=>()=>a(e.value)),[e.value,a]),null})),Sd='navigationMenu.rootContentDismiss',Ed=p.forwardRef(((e,t)=>{const{__scopeNavigationMenu:n,value:r,triggerRef:a,focusProxyRef:o,wasEscapeCloseRef:l,onRootContentClose:i,onContentFocusOutside:c,...u}=e,d=ad(xd,n),f=p.useRef(null),m=fn(f,t),h=jd(d.baseId,r),v=Id(d.baseId,r),g=Xu(n),y=p.useRef(null),{onItemDismiss:b}=d
p.useEffect((()=>{const e=f.current
if(d.isRootMenu&&e){const t=()=>{var t
b(),i(),e.contains(document.activeElement)&&(null==(t=a.current)||t.focus())}
return e.addEventListener(Sd,t),()=>e.removeEventListener(Sd,t)}}),[d.isRootMenu,e.value,a,b,i])
const w=p.useMemo((()=>{const e=g().map((e=>e.value))
'rtl'===d.dir&&e.reverse()
const t=e.indexOf(d.value),n=e.indexOf(d.previousValue),a=r===d.value,o=n===e.indexOf(r)
if(!a&&!o)return y.current
const l=(()=>{if(t!==n){if(a&&-1!==n)return t>n?'from-end':'from-start'
if(o&&-1!==t)return t>n?'to-start':'to-end'}return null})()
return y.current=l,l}),[d.previousValue,d.value,d.dir,g,r])
return s.jsx(Rd,{asChild:!0,children:s.jsx(Wn,{id:v,'aria-labelledby':h,'data-motion':w,'data-orientation':d.orientation,...u,ref:m,disableOutsidePointerEvents:!1,onDismiss:()=>{var e
const t=new Event(Sd,{bubbles:!0,cancelable:!0})
null==(e=f.current)||e.dispatchEvent(t)},onFocusOutside:Rn(e.onFocusOutside,(e=>{var t
c()
const n=e.target;(null==(t=d.rootNavigationMenu)?void 0:t.contains(n))&&e.preventDefault()})),onPointerDownOutside:Rn(e.onPointerDownOutside,(e=>{var t
const n=e.target,r=g().some((e=>{var t
return null==(t=e.ref.current)?void 0:t.contains(n)})),a=d.isRootMenu&&(null==(t=d.viewport)?void 0:t.contains(n));(r||a||!d.isRootMenu)&&e.preventDefault()})),onKeyDown:Rn(e.onKeyDown,(e=>{var t
const n=e.altKey||e.ctrlKey||e.metaKey
if('Tab'===e.key&&!n){const n=Md(e.currentTarget),r=document.activeElement,a=n.findIndex((e=>e===r))
_d(e.shiftKey?n.slice(0,a).reverse():n.slice(a+1,n.length))?e.preventDefault():null==(t=o.current)||t.focus()}})),onEscapeKeyDown:Rn(e.onEscapeKeyDown,(e=>{l.current=!0}))})})})),kd='NavigationMenuViewport'
p.forwardRef(((e,t)=>{const{forceMount:n,...r}=e,a=ad(kd,e.__scopeNavigationMenu),o=Boolean(a.value)
return s.jsx(_n,{present:n||o,children:s.jsx(Nd,{...r,ref:t})})})).displayName=kd
var Nd=p.forwardRef(((e,t)=>{const{__scopeNavigationMenu:n,children:r,...a}=e,o=ad(kd,n),l=fn(t,o.onViewportChange),i=ld(xd,e.__scopeNavigationMenu),[c,u]=p.useState(null),[d,f]=p.useState(null),m=c?(null==c?void 0:c.width)+'px':void 0,h=c?(null==c?void 0:c.height)+'px':void 0,v=Boolean(o.value),g=v?o.value:o.previousValue
return Ld(d,(()=>{d&&u({width:d.offsetWidth,height:d.offsetHeight})})),s.jsx(yn.div,{'data-state':Dd(v),'data-orientation':o.orientation,...a,ref:l,style:{pointerEvents:!v&&o.isRootMenu?'none':void 0,'--radix-navigation-menu-viewport-width':m,'--radix-navigation-menu-viewport-height':h,...a.style},onPointerEnter:Rn(e.onPointerEnter,o.onContentEnter),onPointerLeave:Rn(e.onPointerLeave,Ad(o.onContentLeave)),children:Array.from(i.items).map((([e,{ref:t,forceMount:n,...r}])=>{const a=g===e
return s.jsx(_n,{present:n||a,children:s.jsx(Ed,{...r,ref:dn(t,(e=>{a&&e&&f(e)}))})},e)}))})})),Rd=p.forwardRef(((e,t)=>{const{__scopeNavigationMenu:n,...r}=e,a=ad('FocusGroup',n)
return s.jsx(Zu.Provider,{scope:n,children:s.jsx(Zu.Slot,{scope:n,children:s.jsx(yn.div,{dir:a.dir,...r,ref:t})})})})),Pd=['ArrowRight','ArrowLeft','ArrowUp','ArrowDown'],Td=p.forwardRef(((e,t)=>{const{__scopeNavigationMenu:n,...r}=e,a=Ju(n),o=ad('FocusGroupItem',n)
return s.jsx(Zu.ItemSlot,{scope:n,children:s.jsx(yn.button,{...r,ref:t,onKeyDown:Rn(e.onKeyDown,(e=>{if(['Home','End',...Pd].includes(e.key)){let t=a().map((e=>e.ref.current))
if(['rtl'===o.dir?'ArrowRight':'ArrowLeft','ArrowUp','End'].includes(e.key)&&t.reverse(),Pd.includes(e.key)){const n=t.indexOf(e.currentTarget)
t=t.slice(n+1)}setTimeout((()=>_d(t))),e.preventDefault()}}))})})}))
function Md(e){const t=[],n=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode:e=>{const t='INPUT'===e.tagName&&'hidden'===e.type
return e.disabled||e.hidden||t?NodeFilter.FILTER_SKIP:e.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}})
for(;n.nextNode();)t.push(n.currentNode)
return t}function _d(e){const t=document.activeElement
return e.some((e=>e===t||(e.focus(),document.activeElement!==t)))}function Ld(e,t){const n=Pn(t)
Mn((()=>{let t=0
if(e){const r=new ResizeObserver((()=>{cancelAnimationFrame(t),t=window.requestAnimationFrame(n)}))
return r.observe(e),()=>{window.cancelAnimationFrame(t),r.unobserve(e)}}}),[e,n])}function Dd(e){return e?'open':'closed'}function jd(e,t){return`${e}-trigger-${t}`}function Id(e,t){return`${e}-content-${t}`}function Ad(e){return t=>'mouse'===t.pointerType?e(t):void 0}var Od=id,zd=dd,Fd=hd,Bd=yd,$d='Popover',[Hd,Vd]=En($d,[di]),Wd=di(),[Ud,Kd]=Hd($d),Gd=e=>{const{__scopePopover:t,children:n,open:r,defaultOpen:a,onOpenChange:o,modal:l=!1}=e,i=Wd(t),c=p.useRef(null),[u,d]=p.useState(!1),[f=!1,m]=Tn({prop:r,defaultProp:a,onChange:o})
return s.jsx(Ri,{...i,children:s.jsx(Ud,{scope:t,contentId:In(),triggerRef:c,open:f,onOpenChange:m,onOpenToggle:p.useCallback((()=>m((e=>!e))),[m]),hasCustomAnchor:u,onCustomAnchorAdd:p.useCallback((()=>d(!0)),[]),onCustomAnchorRemove:p.useCallback((()=>d(!1)),[]),modal:l,children:n})})}
Gd.displayName=$d
var qd='PopoverAnchor',Yd=p.forwardRef(((e,t)=>{const{__scopePopover:n,...r}=e,a=Kd(qd,n),o=Wd(n),{onCustomAnchorAdd:l,onCustomAnchorRemove:i}=a
return p.useEffect((()=>(l(),()=>i())),[l,i]),s.jsx(Pi,{...o,...r,ref:t})}))
Yd.displayName=qd
var Xd='PopoverTrigger',Qd=p.forwardRef(((e,t)=>{const{__scopePopover:n,...r}=e,a=Kd(Xd,n),o=Wd(n),l=fn(t,a.triggerRef),i=s.jsx(yn.button,{type:'button','aria-haspopup':'dialog','aria-expanded':a.open,'aria-controls':a.contentId,'data-state':uf(a.open),...r,ref:l,onClick:Rn(e.onClick,a.onOpenToggle)})
return a.hasCustomAnchor?i:s.jsx(Pi,{asChild:!0,...o,children:i})}))
Qd.displayName=Xd
var Zd='PopoverPortal',[Jd,ef]=Hd(Zd,{forceMount:void 0}),tf=e=>{const{__scopePopover:t,forceMount:n,children:r,container:a}=e,o=Kd(Zd,t)
return s.jsx(Jd,{scope:t,forceMount:n,children:s.jsx(_n,{present:n||o.open,children:s.jsx(rr,{asChild:!0,container:a,children:r})})})}
tf.displayName=Zd
var nf='PopoverContent',rf=p.forwardRef(((e,t)=>{const n=ef(nf,e.__scopePopover),{forceMount:r=n.forceMount,...a}=e,o=Kd(nf,e.__scopePopover)
return s.jsx(_n,{present:r||o.open,children:o.modal?s.jsx(af,{...a,ref:t}):s.jsx(of,{...a,ref:t})})}))
rf.displayName=nf
var af=p.forwardRef(((e,t)=>{const n=Kd(nf,e.__scopePopover),r=p.useRef(null),a=fn(t,r),o=p.useRef(!1)
return p.useEffect((()=>{const e=r.current
if(e)return Yr(e)}),[]),s.jsx(Vr,{as:pn,allowPinchZoom:!0,children:s.jsx(lf,{...e,ref:a,trapFocus:n.open,disableOutsidePointerEvents:!0,onCloseAutoFocus:Rn(e.onCloseAutoFocus,(e=>{var t
e.preventDefault(),o.current||null==(t=n.triggerRef.current)||t.focus()})),onPointerDownOutside:Rn(e.onPointerDownOutside,(e=>{const t=e.detail.originalEvent,n=0===t.button&&!0===t.ctrlKey,r=2===t.button||n
o.current=r}),{checkForDefaultPrevented:!1}),onFocusOutside:Rn(e.onFocusOutside,(e=>e.preventDefault()),{checkForDefaultPrevented:!1})})})})),of=p.forwardRef(((e,t)=>{const n=Kd(nf,e.__scopePopover),r=p.useRef(!1),a=p.useRef(!1)
return s.jsx(lf,{...e,ref:t,trapFocus:!1,disableOutsidePointerEvents:!1,onCloseAutoFocus:t=>{var o,l
null==(o=e.onCloseAutoFocus)||o.call(e,t),t.defaultPrevented||(r.current||null==(l=n.triggerRef.current)||l.focus(),t.preventDefault()),r.current=!1,a.current=!1},onInteractOutside:t=>{var o,l
null==(o=e.onInteractOutside)||o.call(e,t),t.defaultPrevented||(r.current=!0,'pointerdown'===t.detail.originalEvent.type&&(a.current=!0))
const i=t.target;(null==(l=n.triggerRef.current)?void 0:l.contains(i))&&t.preventDefault(),'focusin'===t.detail.originalEvent.type&&a.current&&t.preventDefault()}})})),lf=p.forwardRef(((e,t)=>{const{__scopePopover:n,trapFocus:r,onOpenAutoFocus:a,onCloseAutoFocus:o,disableOutsidePointerEvents:l,onEscapeKeyDown:i,onPointerDownOutside:c,onFocusOutside:u,onInteractOutside:d,...f}=e,p=Kd(nf,n),m=Wd(n)
return or(),s.jsx(Xn,{asChild:!0,loop:!0,trapped:r,onMountAutoFocus:a,onUnmountAutoFocus:o,children:s.jsx(Wn,{asChild:!0,disableOutsidePointerEvents:l,onInteractOutside:d,onEscapeKeyDown:i,onPointerDownOutside:c,onFocusOutside:u,onDismiss:()=>p.onOpenChange(!1),children:s.jsx(Ti,{'data-state':uf(p.open),role:'dialog',id:p.contentId,...m,...f,ref:t,style:{...f.style,'--radix-popover-content-transform-origin':'var(--radix-popper-transform-origin)','--radix-popover-content-available-width':'var(--radix-popper-available-width)','--radix-popover-content-available-height':'var(--radix-popper-available-height)','--radix-popover-trigger-width':'var(--radix-popper-anchor-width)','--radix-popover-trigger-height':'var(--radix-popper-anchor-height)'}})})})})),sf='PopoverClose',cf=p.forwardRef(((e,t)=>{const{__scopePopover:n,...r}=e,a=Kd(sf,n)
return s.jsx(yn.button,{type:'button',...r,ref:t,onClick:Rn(e.onClick,(()=>a.onOpenChange(!1)))})}))
function uf(e){return e?'open':'closed'}cf.displayName=sf,p.forwardRef(((e,t)=>{const{__scopePopover:n,...r}=e,a=Wd(n)
return s.jsx(Mi,{...a,...r,ref:t})})).displayName='PopoverArrow'
var df=Gd,ff=Yd,pf=Qd,mf=tf,hf=rf,vf=cf,gf='Progress',[yf,bf]=En(gf),[wf,xf]=yf(gf),Cf=p.forwardRef(((e,t)=>{const{__scopeProgress:n,value:r=null,max:a,getValueLabel:o=kf,...l}=e;(a||0===a)&&Pf(a)
const i=Pf(a)?a:100
null!==r&&Tf(r,i)
const c=Tf(r,i)?r:null,u=Rf(c)?o(c,i):void 0
return s.jsx(wf,{scope:n,value:c,max:i,children:s.jsx(yn.div,{'aria-valuemax':i,'aria-valuemin':0,'aria-valuenow':Rf(c)?c:void 0,'aria-valuetext':u,role:'progressbar','data-state':Nf(c,i),'data-value':c??void 0,'data-max':i,...l,ref:t})})}))
Cf.displayName=gf
var Sf='ProgressIndicator',Ef=p.forwardRef(((e,t)=>{const{__scopeProgress:n,...r}=e,a=xf(Sf,n)
return s.jsx(yn.div,{'data-state':Nf(a.value,a.max),'data-value':a.value??void 0,'data-max':a.max,...r,ref:t})}))
function kf(e,t){return`${Math.round(e/t*100)}%`}function Nf(e,t){return null==e?'indeterminate':e===t?'complete':'loading'}function Rf(e){return'number'==typeof e}function Pf(e){return Rf(e)&&!isNaN(e)&&e>0}function Tf(e,t){return Rf(e)&&!isNaN(e)&&e<=t&&e>=0}Ef.displayName=Sf
var Mf=Cf,_f=Ef,Lf='Radio',[Df,jf]=En(Lf),[If,Af]=Df(Lf),Of=p.forwardRef(((e,t)=>{const{__scopeRadio:n,name:r,checked:a=!1,required:o,disabled:l,value:i='on',onCheck:c,form:u,...d}=e,[f,m]=p.useState(null),h=fn(t,(e=>m(e))),v=p.useRef(!1),g=!f||u||!!f.closest('form')
return s.jsxs(If,{scope:n,checked:a,disabled:l,children:[s.jsx(yn.button,{type:'button',role:'radio','aria-checked':a,'data-state':$f(a),'data-disabled':l?'':void 0,disabled:l,value:i,...d,ref:h,onClick:Rn(e.onClick,(e=>{a||null==c||c(),g&&(v.current=e.isPropagationStopped(),v.current||e.stopPropagation())}))}),g&&s.jsx(Bf,{control:f,bubbles:!v.current,name:r,value:i,checked:a,required:o,disabled:l,form:u,style:{transform:'translateX(-100%)'}})]})}))
Of.displayName=Lf
var zf='RadioIndicator',Ff=p.forwardRef(((e,t)=>{const{__scopeRadio:n,forceMount:r,...a}=e,o=Af(zf,n)
return s.jsx(_n,{present:r||o.checked,children:s.jsx(yn.span,{'data-state':$f(o.checked),'data-disabled':o.disabled?'':void 0,...a,ref:t})})}))
Ff.displayName=zf
var Bf=e=>{const{control:t,checked:n,bubbles:r=!0,...a}=e,o=p.useRef(null),l=wo(n),i=xo(t)
return p.useEffect((()=>{const e=o.current,t=window.HTMLInputElement.prototype,a=Object.getOwnPropertyDescriptor(t,'checked').set
if(l!==n&&a){const t=new Event('click',{bubbles:r})
a.call(e,n),e.dispatchEvent(t)}}),[l,n,r]),s.jsx('input',{type:'radio','aria-hidden':!0,defaultChecked:n,...a,tabIndex:-1,ref:o,style:{...e.style,...i,position:'absolute',pointerEvents:'none',opacity:0,margin:0}})}
function $f(e){return e?'checked':'unchecked'}var Hf=['ArrowUp','ArrowDown','ArrowLeft','ArrowRight'],Vf='RadioGroup',[Wf,Uf]=En(Vf,[zi,jf]),Kf=zi(),Gf=jf(),[qf,Yf]=Wf(Vf),Xf=p.forwardRef(((e,t)=>{const{__scopeRadioGroup:n,name:r,defaultValue:a,value:o,required:l=!1,disabled:i=!1,orientation:c,dir:u,loop:d=!0,onValueChange:f,...p}=e,m=Kf(n),h=zn(u),[v,g]=Tn({prop:o,defaultProp:a,onChange:f})
return s.jsx(qf,{scope:n,name:r,required:l,disabled:i,value:v,onValueChange:g,children:s.jsx(Gi,{asChild:!0,...m,orientation:c,dir:h,loop:d,children:s.jsx(yn.div,{role:'radiogroup','aria-required':l,'aria-orientation':c,'data-disabled':i?'':void 0,dir:h,...p,ref:t})})})}))
Xf.displayName=Vf
var Qf='RadioGroupItem',Zf=p.forwardRef(((e,t)=>{const{__scopeRadioGroup:n,disabled:r,...a}=e,o=Yf(Qf,n),l=o.disabled||r,i=Kf(n),c=Gf(n),u=p.useRef(null),d=fn(t,u),f=o.value===a.value,m=p.useRef(!1)
return p.useEffect((()=>{const e=e=>{Hf.includes(e.key)&&(m.current=!0)},t=()=>m.current=!1
return document.addEventListener('keydown',e),document.addEventListener('keyup',t),()=>{document.removeEventListener('keydown',e),document.removeEventListener('keyup',t)}}),[]),s.jsx(qi,{asChild:!0,...i,focusable:!l,active:f,children:s.jsx(Of,{disabled:l,required:o.required,checked:f,...c,...a,name:o.name,ref:d,onCheck:()=>o.onValueChange(a.value),onKeyDown:Rn((e=>{'Enter'===e.key&&e.preventDefault()})),onFocus:Rn(a.onFocus,(()=>{var e
m.current&&(null==(e=u.current)||e.click())}))})})}))
Zf.displayName=Qf,p.forwardRef(((e,t)=>{const{__scopeRadioGroup:n,...r}=e,a=Gf(n)
return s.jsx(Ff,{...a,...r,ref:t})})).displayName='RadioGroupIndicator'
var Jf=Xf,ep=Zf
function tp(e,[t,n]){return Math.min(n,Math.max(t,e))}var np='ScrollArea',[rp,ap]=En(np),[op,lp]=rp(np),ip=p.forwardRef(((e,t)=>{const{__scopeScrollArea:n,type:r='hover',dir:a,scrollHideDelay:o=600,...l}=e,[i,c]=p.useState(null),[u,d]=p.useState(null),[f,m]=p.useState(null),[h,v]=p.useState(null),[g,y]=p.useState(null),[b,w]=p.useState(0),[x,C]=p.useState(0),[S,E]=p.useState(!1),[k,N]=p.useState(!1),R=fn(t,(e=>c(e))),P=zn(a)
return s.jsx(op,{scope:n,type:r,dir:P,scrollHideDelay:o,scrollArea:i,viewport:u,onViewportChange:d,content:f,onContentChange:m,scrollbarX:h,onScrollbarXChange:v,scrollbarXEnabled:S,onScrollbarXEnabledChange:E,scrollbarY:g,onScrollbarYChange:y,scrollbarYEnabled:k,onScrollbarYEnabledChange:N,onCornerWidthChange:w,onCornerHeightChange:C,children:s.jsx(yn.div,{dir:P,...l,ref:R,style:{position:'relative','--radix-scroll-area-corner-width':b+'px','--radix-scroll-area-corner-height':x+'px',...e.style}})})}))
ip.displayName=np
var sp='ScrollAreaViewport',cp=p.forwardRef(((e,t)=>{const{__scopeScrollArea:n,children:r,nonce:a,...o}=e,l=lp(sp,n),i=fn(t,p.useRef(null),l.onViewportChange)
return s.jsxs(s.Fragment,{children:[s.jsx('style',{dangerouslySetInnerHTML:{__html:'[data-radix-scroll-area-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-scroll-area-viewport]::-webkit-scrollbar{display:none}'},nonce:a}),s.jsx(yn.div,{'data-radix-scroll-area-viewport':'',...o,ref:i,style:{overflowX:l.scrollbarXEnabled?'scroll':'hidden',overflowY:l.scrollbarYEnabled?'scroll':'hidden',...e.style},children:s.jsx('div',{ref:l.onContentChange,style:{minWidth:'100%',display:'table'},children:r})})]})}))
cp.displayName=sp
var up='ScrollAreaScrollbar',dp=p.forwardRef(((e,t)=>{const{forceMount:n,...r}=e,a=lp(up,e.__scopeScrollArea),{onScrollbarXEnabledChange:o,onScrollbarYEnabledChange:l}=a,i='horizontal'===e.orientation
return p.useEffect((()=>(i?o(!0):l(!0),()=>{i?o(!1):l(!1)})),[i,o,l]),'hover'===a.type?s.jsx(fp,{...r,ref:t,forceMount:n}):'scroll'===a.type?s.jsx(pp,{...r,ref:t,forceMount:n}):'auto'===a.type?s.jsx(mp,{...r,ref:t,forceMount:n}):'always'===a.type?s.jsx(hp,{...r,ref:t}):null}))
dp.displayName=up
var fp=p.forwardRef(((e,t)=>{const{forceMount:n,...r}=e,a=lp(up,e.__scopeScrollArea),[o,l]=p.useState(!1)
return p.useEffect((()=>{const e=a.scrollArea
let t=0
if(e){const n=()=>{window.clearTimeout(t),l(!0)},r=()=>{t=window.setTimeout((()=>l(!1)),a.scrollHideDelay)}
return e.addEventListener('pointerenter',n),e.addEventListener('pointerleave',r),()=>{window.clearTimeout(t),e.removeEventListener('pointerenter',n),e.removeEventListener('pointerleave',r)}}}),[a.scrollArea,a.scrollHideDelay]),s.jsx(_n,{present:n||o,children:s.jsx(mp,{'data-state':o?'visible':'hidden',...r,ref:t})})})),pp=p.forwardRef(((e,t)=>{const{forceMount:n,...r}=e,a=lp(up,e.__scopeScrollArea),o='horizontal'===e.orientation,l=jp((()=>c('SCROLL_END')),100),[i,c]=(u={hidden:{SCROLL:'scrolling'},scrolling:{SCROLL_END:'idle',POINTER_ENTER:'interacting'},interacting:{SCROLL:'interacting',POINTER_LEAVE:'idle'},idle:{HIDE:'hidden',SCROLL:'scrolling',POINTER_ENTER:'interacting'}},p.useReducer(((e,t)=>u[e][t]??e),'hidden'))
var u
return p.useEffect((()=>{if('idle'===i){const e=window.setTimeout((()=>c('HIDE')),a.scrollHideDelay)
return()=>window.clearTimeout(e)}}),[i,a.scrollHideDelay,c]),p.useEffect((()=>{const e=a.viewport,t=o?'scrollLeft':'scrollTop'
if(e){let n=e[t]
const r=()=>{const r=e[t]
n!==r&&(c('SCROLL'),l()),n=r}
return e.addEventListener('scroll',r),()=>e.removeEventListener('scroll',r)}}),[a.viewport,o,c,l]),s.jsx(_n,{present:n||'hidden'!==i,children:s.jsx(hp,{'data-state':'hidden'===i?'hidden':'visible',...r,ref:t,onPointerEnter:Rn(e.onPointerEnter,(()=>c('POINTER_ENTER'))),onPointerLeave:Rn(e.onPointerLeave,(()=>c('POINTER_LEAVE')))})})})),mp=p.forwardRef(((e,t)=>{const n=lp(up,e.__scopeScrollArea),{forceMount:r,...a}=e,[o,l]=p.useState(!1),i='horizontal'===e.orientation,c=jp((()=>{if(n.viewport){const e=n.viewport.offsetWidth<n.viewport.scrollWidth,t=n.viewport.offsetHeight<n.viewport.scrollHeight
l(i?e:t)}}),10)
return Ip(n.viewport,c),Ip(n.content,c),s.jsx(_n,{present:r||o,children:s.jsx(hp,{'data-state':o?'visible':'hidden',...a,ref:t})})})),hp=p.forwardRef(((e,t)=>{const{orientation:n='vertical',...r}=e,a=lp(up,e.__scopeScrollArea),o=p.useRef(null),l=p.useRef(0),[i,c]=p.useState({content:0,viewport:0,scrollbar:{size:0,paddingStart:0,paddingEnd:0}}),u=Pp(i.viewport,i.content),d={...r,sizes:i,onSizesChange:c,hasThumb:Boolean(u>0&&u<1),onThumbChange:e=>o.current=e,onThumbPointerUp:()=>l.current=0,onThumbPointerDown:e=>l.current=e}
function f(e,t){return function(e,t,n,r='ltr'){const a=Tp(n),o=t||a/2,l=a-o,i=n.scrollbar.paddingStart+o,s=n.scrollbar.size-n.scrollbar.paddingEnd-l,c=n.content-n.viewport
return _p([i,s],'ltr'===r?[0,c]:[-1*c,0])(e)}(e,l.current,i,t)}return'horizontal'===n?s.jsx(vp,{...d,ref:t,onThumbPositionChange:()=>{if(a.viewport&&o.current){const e=Mp(a.viewport.scrollLeft,i,a.dir)
o.current.style.transform=`translate3d(${e}px, 0, 0)`}},onWheelScroll:e=>{a.viewport&&(a.viewport.scrollLeft=e)},onDragScroll:e=>{a.viewport&&(a.viewport.scrollLeft=f(e,a.dir))}}):'vertical'===n?s.jsx(gp,{...d,ref:t,onThumbPositionChange:()=>{if(a.viewport&&o.current){const e=Mp(a.viewport.scrollTop,i)
o.current.style.transform=`translate3d(0, ${e}px, 0)`}},onWheelScroll:e=>{a.viewport&&(a.viewport.scrollTop=e)},onDragScroll:e=>{a.viewport&&(a.viewport.scrollTop=f(e))}}):null})),vp=p.forwardRef(((e,t)=>{const{sizes:n,onSizesChange:r,...a}=e,o=lp(up,e.__scopeScrollArea),[l,i]=p.useState(),c=p.useRef(null),u=fn(t,c,o.onScrollbarXChange)
return p.useEffect((()=>{c.current&&i(getComputedStyle(c.current))}),[c]),s.jsx(wp,{'data-orientation':'horizontal',...a,ref:u,sizes:n,style:{bottom:0,left:'rtl'===o.dir?'var(--radix-scroll-area-corner-width)':0,right:'ltr'===o.dir?'var(--radix-scroll-area-corner-width)':0,'--radix-scroll-area-thumb-width':Tp(n)+'px',...e.style},onThumbPointerDown:t=>e.onThumbPointerDown(t.x),onDragScroll:t=>e.onDragScroll(t.x),onWheelScroll:(t,n)=>{if(o.viewport){const r=o.viewport.scrollLeft+t.deltaX
e.onWheelScroll(r),Lp(r,n)&&t.preventDefault()}},onResize:()=>{c.current&&o.viewport&&l&&r({content:o.viewport.scrollWidth,viewport:o.viewport.offsetWidth,scrollbar:{size:c.current.clientWidth,paddingStart:Rp(l.paddingLeft),paddingEnd:Rp(l.paddingRight)}})}})})),gp=p.forwardRef(((e,t)=>{const{sizes:n,onSizesChange:r,...a}=e,o=lp(up,e.__scopeScrollArea),[l,i]=p.useState(),c=p.useRef(null),u=fn(t,c,o.onScrollbarYChange)
return p.useEffect((()=>{c.current&&i(getComputedStyle(c.current))}),[c]),s.jsx(wp,{'data-orientation':'vertical',...a,ref:u,sizes:n,style:{top:0,right:'ltr'===o.dir?0:void 0,left:'rtl'===o.dir?0:void 0,bottom:'var(--radix-scroll-area-corner-height)','--radix-scroll-area-thumb-height':Tp(n)+'px',...e.style},onThumbPointerDown:t=>e.onThumbPointerDown(t.y),onDragScroll:t=>e.onDragScroll(t.y),onWheelScroll:(t,n)=>{if(o.viewport){const r=o.viewport.scrollTop+t.deltaY
e.onWheelScroll(r),Lp(r,n)&&t.preventDefault()}},onResize:()=>{c.current&&o.viewport&&l&&r({content:o.viewport.scrollHeight,viewport:o.viewport.offsetHeight,scrollbar:{size:c.current.clientHeight,paddingStart:Rp(l.paddingTop),paddingEnd:Rp(l.paddingBottom)}})}})})),[yp,bp]=rp(up),wp=p.forwardRef(((e,t)=>{const{__scopeScrollArea:n,sizes:r,hasThumb:a,onThumbChange:o,onThumbPointerUp:l,onThumbPointerDown:i,onThumbPositionChange:c,onDragScroll:u,onWheelScroll:d,onResize:f,...m}=e,h=lp(up,n),[v,g]=p.useState(null),y=fn(t,(e=>g(e))),b=p.useRef(null),w=p.useRef(''),x=h.viewport,C=r.content-r.viewport,S=Pn(d),E=Pn(c),k=jp(f,10)
function N(e){if(b.current){const t=e.clientX-b.current.left,n=e.clientY-b.current.top
u({x:t,y:n})}}return p.useEffect((()=>{const e=e=>{const t=e.target;(null==v?void 0:v.contains(t))&&S(e,C)}
return document.addEventListener('wheel',e,{passive:!1}),()=>document.removeEventListener('wheel',e,{passive:!1})}),[x,v,C,S]),p.useEffect(E,[r,E]),Ip(v,k),Ip(h.content,k),s.jsx(yp,{scope:n,scrollbar:v,hasThumb:a,onThumbChange:Pn(o),onThumbPointerUp:Pn(l),onThumbPositionChange:E,onThumbPointerDown:Pn(i),children:s.jsx(yn.div,{...m,ref:y,style:{position:'absolute',...m.style},onPointerDown:Rn(e.onPointerDown,(e=>{0===e.button&&(e.target.setPointerCapture(e.pointerId),b.current=v.getBoundingClientRect(),w.current=document.body.style.webkitUserSelect,document.body.style.webkitUserSelect='none',h.viewport&&(h.viewport.style.scrollBehavior='auto'),N(e))})),onPointerMove:Rn(e.onPointerMove,N),onPointerUp:Rn(e.onPointerUp,(e=>{const t=e.target
t.hasPointerCapture(e.pointerId)&&t.releasePointerCapture(e.pointerId),document.body.style.webkitUserSelect=w.current,h.viewport&&(h.viewport.style.scrollBehavior=''),b.current=null}))})})})),xp='ScrollAreaThumb',Cp=p.forwardRef(((e,t)=>{const{forceMount:n,...r}=e,a=bp(xp,e.__scopeScrollArea)
return s.jsx(_n,{present:n||a.hasThumb,children:s.jsx(Sp,{ref:t,...r})})})),Sp=p.forwardRef(((e,t)=>{const{__scopeScrollArea:n,style:r,...a}=e,o=lp(xp,n),l=bp(xp,n),{onThumbPositionChange:i}=l,c=fn(t,(e=>l.onThumbChange(e))),u=p.useRef(void 0),d=jp((()=>{u.current&&(u.current(),u.current=void 0)}),100)
return p.useEffect((()=>{const e=o.viewport
if(e){const t=()=>{if(d(),!u.current){const t=Dp(e,i)
u.current=t,i()}}
return i(),e.addEventListener('scroll',t),()=>e.removeEventListener('scroll',t)}}),[o.viewport,d,i]),s.jsx(yn.div,{'data-state':l.hasThumb?'visible':'hidden',...a,ref:c,style:{width:'var(--radix-scroll-area-thumb-width)',height:'var(--radix-scroll-area-thumb-height)',...r},onPointerDownCapture:Rn(e.onPointerDownCapture,(e=>{const t=e.target.getBoundingClientRect(),n=e.clientX-t.left,r=e.clientY-t.top
l.onThumbPointerDown({x:n,y:r})})),onPointerUp:Rn(e.onPointerUp,l.onThumbPointerUp)})}))
Cp.displayName=xp
var Ep='ScrollAreaCorner',kp=p.forwardRef(((e,t)=>{const n=lp(Ep,e.__scopeScrollArea),r=Boolean(n.scrollbarX&&n.scrollbarY)
return'scroll'!==n.type&&r?s.jsx(Np,{...e,ref:t}):null}))
kp.displayName=Ep
var Np=p.forwardRef(((e,t)=>{const{__scopeScrollArea:n,...r}=e,a=lp(Ep,n),[o,l]=p.useState(0),[i,c]=p.useState(0),u=Boolean(o&&i)
return Ip(a.scrollbarX,(()=>{var e
const t=(null==(e=a.scrollbarX)?void 0:e.offsetHeight)||0
a.onCornerHeightChange(t),c(t)})),Ip(a.scrollbarY,(()=>{var e
const t=(null==(e=a.scrollbarY)?void 0:e.offsetWidth)||0
a.onCornerWidthChange(t),l(t)})),u?s.jsx(yn.div,{...r,ref:t,style:{width:o,height:i,position:'absolute',right:'ltr'===a.dir?0:void 0,left:'rtl'===a.dir?0:void 0,bottom:0,...e.style}}):null}))
function Rp(e){return e?parseInt(e,10):0}function Pp(e,t){const n=e/t
return isNaN(n)?0:n}function Tp(e){const t=Pp(e.viewport,e.content),n=e.scrollbar.paddingStart+e.scrollbar.paddingEnd,r=(e.scrollbar.size-n)*t
return Math.max(r,18)}function Mp(e,t,n='ltr'){const r=Tp(t),a=t.scrollbar.paddingStart+t.scrollbar.paddingEnd,o=t.scrollbar.size-a,l=t.content-t.viewport,i=o-r,s=tp(e,'ltr'===n?[0,l]:[-1*l,0])
return _p([0,l],[0,i])(s)}function _p(e,t){return n=>{if(e[0]===e[1]||t[0]===t[1])return t[0]
const r=(t[1]-t[0])/(e[1]-e[0])
return t[0]+r*(n-e[0])}}function Lp(e,t){return e>0&&e<t}var Dp=(e,t=()=>{})=>{let n={left:e.scrollLeft,top:e.scrollTop},r=0
return function a(){const o={left:e.scrollLeft,top:e.scrollTop},l=n.left!==o.left,i=n.top!==o.top;(l||i)&&t(),n=o,r=window.requestAnimationFrame(a)}(),()=>window.cancelAnimationFrame(r)}
function jp(e,t){const n=Pn(e),r=p.useRef(0)
return p.useEffect((()=>()=>window.clearTimeout(r.current)),[]),p.useCallback((()=>{window.clearTimeout(r.current),r.current=window.setTimeout(n,t)}),[n,t])}function Ip(e,t){const n=Pn(t)
Mn((()=>{let t=0
if(e){const r=new ResizeObserver((()=>{cancelAnimationFrame(t),t=window.requestAnimationFrame(n)}))
return r.observe(e),()=>{window.cancelAnimationFrame(t),r.unobserve(e)}}}),[e,n])}var Ap=ip,Op=cp,zp=dp,Fp=Cp,Bp=kp,$p=[' ','Enter','ArrowUp','ArrowDown'],Hp=[' ','Enter'],Vp='Select',[Wp,Up,Kp]=Nn(Vp),[Gp,qp]=En(Vp,[Kp,di]),Yp=di(),[Xp,Qp]=Gp(Vp),[Zp,Jp]=Gp(Vp),em='SelectTrigger',tm=p.forwardRef(((e,t)=>{const{__scopeSelect:n,disabled:r=!1,...a}=e,o=Yp(n),l=Qp(em,n),i=l.disabled||r,c=fn(t,l.onTriggerChange),u=Up(n),d=p.useRef('touch'),[f,m,h]=zm((e=>{const t=u().filter((e=>!e.disabled)),n=t.find((e=>e.value===l.value)),r=Fm(t,e,n)
void 0!==r&&l.onValueChange(r.value)})),v=e=>{i||(l.onOpenChange(!0),h()),e&&(l.triggerPointerDownPosRef.current={x:Math.round(e.pageX),y:Math.round(e.pageY)})}
return s.jsx(Pi,{asChild:!0,...o,children:s.jsx(yn.button,{type:'button',role:'combobox','aria-controls':l.contentId,'aria-expanded':l.open,'aria-required':l.required,'aria-autocomplete':'none',dir:l.dir,'data-state':l.open?'open':'closed',disabled:i,'data-disabled':i?'':void 0,'data-placeholder':Om(l.value)?'':void 0,...a,ref:c,onClick:Rn(a.onClick,(e=>{e.currentTarget.focus(),'mouse'!==d.current&&v(e)})),onPointerDown:Rn(a.onPointerDown,(e=>{d.current=e.pointerType
const t=e.target
t.hasPointerCapture(e.pointerId)&&t.releasePointerCapture(e.pointerId),0===e.button&&!1===e.ctrlKey&&'mouse'===e.pointerType&&(v(e),e.preventDefault())})),onKeyDown:Rn(a.onKeyDown,(e=>{const t=''!==f.current
e.ctrlKey||e.altKey||e.metaKey||1!==e.key.length||m(e.key),t&&' '===e.key||$p.includes(e.key)&&(v(),e.preventDefault())}))})})}))
tm.displayName=em
var nm='SelectValue',rm=p.forwardRef(((e,t)=>{const{__scopeSelect:n,className:r,style:a,children:o,placeholder:l='',...i}=e,c=Qp(nm,n),{onValueNodeHasChildrenChange:u}=c,d=void 0!==o,f=fn(t,c.onValueNodeChange)
return Mn((()=>{u(d)}),[u,d]),s.jsx(yn.span,{...i,ref:f,style:{pointerEvents:'none'},children:Om(c.value)?s.jsx(s.Fragment,{children:l}):o})}))
rm.displayName=nm
var am=p.forwardRef(((e,t)=>{const{__scopeSelect:n,children:r,...a}=e
return s.jsx(yn.span,{'aria-hidden':!0,...a,ref:t,children:r||'\u25bc'})}))
am.displayName='SelectIcon'
var om=e=>s.jsx(rr,{asChild:!0,...e})
om.displayName='SelectPortal'
var lm='SelectContent',im=p.forwardRef(((e,t)=>{const n=Qp(lm,e.__scopeSelect),[r,a]=p.useState()
if(Mn((()=>{a(new DocumentFragment)}),[]),!n.open){const t=r
return t?ln.createPortal(s.jsx(cm,{scope:e.__scopeSelect,children:s.jsx(Wp.Slot,{scope:e.__scopeSelect,children:s.jsx('div',{children:e.children})})}),t):null}return s.jsx(dm,{...e,ref:t})}))
im.displayName=lm
var sm=10,[cm,um]=Gp(lm),dm=p.forwardRef(((e,t)=>{const{__scopeSelect:n,position:r='item-aligned',onCloseAutoFocus:a,onEscapeKeyDown:o,onPointerDownOutside:l,side:i,sideOffset:c,align:u,alignOffset:d,arrowPadding:f,collisionBoundary:m,collisionPadding:h,sticky:v,hideWhenDetached:g,avoidCollisions:y,...b}=e,w=Qp(lm,n),[x,C]=p.useState(null),[S,E]=p.useState(null),k=fn(t,(e=>C(e))),[N,R]=p.useState(null),[P,T]=p.useState(null),M=Up(n),[_,L]=p.useState(!1),D=p.useRef(!1)
p.useEffect((()=>{if(x)return Yr(x)}),[x]),or()
const j=p.useCallback((e=>{const[t,...n]=M().map((e=>e.ref.current)),[r]=n.slice(-1),a=document.activeElement
for(const o of e){if(o===a)return
if(null==o||o.scrollIntoView({block:'nearest'}),o===t&&S&&(S.scrollTop=0),o===r&&S&&(S.scrollTop=S.scrollHeight),null==o||o.focus(),document.activeElement!==a)return}}),[M,S]),I=p.useCallback((()=>j([N,x])),[j,N,x])
p.useEffect((()=>{_&&I()}),[_,I])
const{onOpenChange:A,triggerPointerDownPosRef:O}=w
p.useEffect((()=>{if(x){let e={x:0,y:0}
const t=t=>{var n,r
e={x:Math.abs(Math.round(t.pageX)-((null==(n=O.current)?void 0:n.x)??0)),y:Math.abs(Math.round(t.pageY)-((null==(r=O.current)?void 0:r.y)??0))}},n=n=>{e.x<=10&&e.y<=10?n.preventDefault():x.contains(n.target)||A(!1),document.removeEventListener('pointermove',t),O.current=null}
return null!==O.current&&(document.addEventListener('pointermove',t),document.addEventListener('pointerup',n,{capture:!0,once:!0})),()=>{document.removeEventListener('pointermove',t),document.removeEventListener('pointerup',n,{capture:!0})}}}),[x,A,O]),p.useEffect((()=>{const e=()=>A(!1)
return window.addEventListener('blur',e),window.addEventListener('resize',e),()=>{window.removeEventListener('blur',e),window.removeEventListener('resize',e)}}),[A])
const[z,F]=zm((e=>{const t=M().filter((e=>!e.disabled)),n=t.find((e=>e.ref.current===document.activeElement)),r=Fm(t,e,n)
r&&setTimeout((()=>r.ref.current.focus()))})),B=p.useCallback(((e,t,n)=>{const r=!D.current&&!n;(void 0!==w.value&&w.value===t||r)&&(R(e),r&&(D.current=!0))}),[w.value]),$=p.useCallback((()=>null==x?void 0:x.focus()),[x]),H=p.useCallback(((e,t,n)=>{const r=!D.current&&!n;(void 0!==w.value&&w.value===t||r)&&T(e)}),[w.value]),V='popper'===r?pm:fm,W=V===pm?{side:i,sideOffset:c,align:u,alignOffset:d,arrowPadding:f,collisionBoundary:m,collisionPadding:h,sticky:v,hideWhenDetached:g,avoidCollisions:y}:{}
return s.jsx(cm,{scope:n,content:x,viewport:S,onViewportChange:E,itemRefCallback:B,selectedItem:N,onItemLeave:$,itemTextRefCallback:H,focusSelectedItem:I,selectedItemText:P,position:r,isPositioned:_,searchRef:z,children:s.jsx(Vr,{as:pn,allowPinchZoom:!0,children:s.jsx(Xn,{asChild:!0,trapped:w.open,onMountAutoFocus:e=>{e.preventDefault()},onUnmountAutoFocus:Rn(a,(e=>{var t
null==(t=w.trigger)||t.focus({preventScroll:!0}),e.preventDefault()})),children:s.jsx(Wn,{asChild:!0,disableOutsidePointerEvents:!0,onEscapeKeyDown:o,onPointerDownOutside:l,onFocusOutside:e=>e.preventDefault(),onDismiss:()=>w.onOpenChange(!1),children:s.jsx(V,{role:'listbox',id:w.contentId,'data-state':w.open?'open':'closed',dir:w.dir,onContextMenu:e=>e.preventDefault(),...b,...W,onPlaced:()=>L(!0),ref:k,style:{display:'flex',flexDirection:'column',outline:'none',...b.style},onKeyDown:Rn(b.onKeyDown,(e=>{const t=e.ctrlKey||e.altKey||e.metaKey
if('Tab'===e.key&&e.preventDefault(),t||1!==e.key.length||F(e.key),['ArrowUp','ArrowDown','Home','End'].includes(e.key)){let t=M().filter((e=>!e.disabled)).map((e=>e.ref.current))
if(['ArrowUp','End'].includes(e.key)&&(t=t.slice().reverse()),['ArrowUp','ArrowDown'].includes(e.key)){const n=e.target,r=t.indexOf(n)
t=t.slice(r+1)}setTimeout((()=>j(t))),e.preventDefault()}}))})})})})})}))
dm.displayName='SelectContentImpl'
var fm=p.forwardRef(((e,t)=>{const{__scopeSelect:n,onPlaced:r,...a}=e,o=Qp(lm,n),l=um(lm,n),[i,c]=p.useState(null),[u,d]=p.useState(null),f=fn(t,(e=>d(e))),m=Up(n),h=p.useRef(!1),v=p.useRef(!0),{viewport:g,selectedItem:y,selectedItemText:b,focusSelectedItem:w}=l,x=p.useCallback((()=>{if(o.trigger&&o.valueNode&&i&&u&&g&&y&&b){const e=o.trigger.getBoundingClientRect(),t=u.getBoundingClientRect(),n=o.valueNode.getBoundingClientRect(),a=b.getBoundingClientRect()
if('rtl'!==o.dir){const r=a.left-t.left,o=n.left-r,l=e.left-o,s=e.width+l,c=Math.max(s,t.width),u=window.innerWidth-sm,d=tp(o,[sm,Math.max(sm,u-c)])
i.style.minWidth=s+'px',i.style.left=d+'px'}else{const r=t.right-a.right,o=window.innerWidth-n.right-r,l=window.innerWidth-e.right-o,s=e.width+l,c=Math.max(s,t.width),u=window.innerWidth-sm,d=tp(o,[sm,Math.max(sm,u-c)])
i.style.minWidth=s+'px',i.style.right=d+'px'}const l=m(),s=window.innerHeight-2*sm,c=g.scrollHeight,d=window.getComputedStyle(u),f=parseInt(d.borderTopWidth,10),p=parseInt(d.paddingTop,10),v=parseInt(d.borderBottomWidth,10),w=f+p+c+parseInt(d.paddingBottom,10)+v,x=Math.min(5*y.offsetHeight,w),C=window.getComputedStyle(g),S=parseInt(C.paddingTop,10),E=parseInt(C.paddingBottom,10),k=e.top+e.height/2-sm,N=s-k,R=y.offsetHeight/2,P=f+p+(y.offsetTop+R),T=w-P
if(P<=k){const e=l.length>0&&y===l[l.length-1].ref.current
i.style.bottom='0px'
const t=u.clientHeight-g.offsetTop-g.offsetHeight,n=P+Math.max(N,R+(e?E:0)+t+v)
i.style.height=n+'px'}else{const e=l.length>0&&y===l[0].ref.current
i.style.top='0px'
const t=Math.max(k,f+g.offsetTop+(e?S:0)+R)+T
i.style.height=t+'px',g.scrollTop=P-k+g.offsetTop}i.style.margin=`${sm}px 0`,i.style.minHeight=x+'px',i.style.maxHeight=s+'px',null==r||r(),requestAnimationFrame((()=>h.current=!0))}}),[m,o.trigger,o.valueNode,i,u,g,y,b,o.dir,r])
Mn((()=>x()),[x])
const[C,S]=p.useState()
Mn((()=>{u&&S(window.getComputedStyle(u).zIndex)}),[u])
const E=p.useCallback((e=>{e&&!0===v.current&&(x(),null==w||w(),v.current=!1)}),[x,w])
return s.jsx(mm,{scope:n,contentWrapper:i,shouldExpandOnScrollRef:h,onScrollButtonChange:E,children:s.jsx('div',{ref:c,style:{display:'flex',flexDirection:'column',position:'fixed',zIndex:C},children:s.jsx(yn.div,{...a,ref:f,style:{boxSizing:'border-box',maxHeight:'100%',...a.style}})})})}))
fm.displayName='SelectItemAlignedPosition'
var pm=p.forwardRef(((e,t)=>{const{__scopeSelect:n,align:r='start',collisionPadding:a=sm,...o}=e,l=Yp(n)
return s.jsx(Ti,{...l,...o,ref:t,align:r,collisionPadding:a,style:{boxSizing:'border-box',...o.style,'--radix-select-content-transform-origin':'var(--radix-popper-transform-origin)','--radix-select-content-available-width':'var(--radix-popper-available-width)','--radix-select-content-available-height':'var(--radix-popper-available-height)','--radix-select-trigger-width':'var(--radix-popper-anchor-width)','--radix-select-trigger-height':'var(--radix-popper-anchor-height)'}})}))
pm.displayName='SelectPopperPosition'
var[mm,hm]=Gp(lm,{}),vm='SelectViewport',gm=p.forwardRef(((e,t)=>{const{__scopeSelect:n,nonce:r,...a}=e,o=um(vm,n),l=hm(vm,n),i=fn(t,o.onViewportChange),c=p.useRef(0)
return s.jsxs(s.Fragment,{children:[s.jsx('style',{dangerouslySetInnerHTML:{__html:'[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}'},nonce:r}),s.jsx(Wp.Slot,{scope:n,children:s.jsx(yn.div,{'data-radix-select-viewport':'',role:'presentation',...a,ref:i,style:{position:'relative',flex:1,overflow:'hidden auto',...a.style},onScroll:Rn(a.onScroll,(e=>{const t=e.currentTarget,{contentWrapper:n,shouldExpandOnScrollRef:r}=l
if((null==r?void 0:r.current)&&n){const e=Math.abs(c.current-t.scrollTop)
if(e>0){const r=window.innerHeight-2*sm,a=parseFloat(n.style.minHeight),o=parseFloat(n.style.height),l=Math.max(a,o)
if(l<r){const a=l+e,o=Math.min(r,a),i=a-o
n.style.height=o+'px','0px'===n.style.bottom&&(t.scrollTop=i>0?i:0,n.style.justifyContent='flex-end')}}}c.current=t.scrollTop}))})})]})}))
gm.displayName=vm
var ym='SelectGroup',[bm,wm]=Gp(ym),xm=p.forwardRef(((e,t)=>{const{__scopeSelect:n,...r}=e,a=In()
return s.jsx(bm,{scope:n,id:a,children:s.jsx(yn.div,{role:'group','aria-labelledby':a,...r,ref:t})})}))
xm.displayName=ym
var Cm='SelectLabel',Sm=p.forwardRef(((e,t)=>{const{__scopeSelect:n,...r}=e,a=wm(Cm,n)
return s.jsx(yn.div,{id:a.id,...r,ref:t})}))
Sm.displayName=Cm
var Em='SelectItem',[km,Nm]=Gp(Em),Rm=p.forwardRef(((e,t)=>{const{__scopeSelect:n,value:r,disabled:a=!1,textValue:o,...l}=e,i=Qp(Em,n),c=um(Em,n),u=i.value===r,[d,f]=p.useState(o??''),[m,h]=p.useState(!1),v=fn(t,(e=>{var t
return null==(t=c.itemRefCallback)?void 0:t.call(c,e,r,a)})),g=In(),y=p.useRef('touch'),b=()=>{a||(i.onValueChange(r),i.onOpenChange(!1))}
if(''===r)throw new Error('A <Select.Item /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder.')
return s.jsx(km,{scope:n,value:r,disabled:a,textId:g,isSelected:u,onItemTextChange:p.useCallback((e=>{f((t=>t||((null==e?void 0:e.textContent)??'').trim()))}),[]),children:s.jsx(Wp.ItemSlot,{scope:n,value:r,disabled:a,textValue:d,children:s.jsx(yn.div,{role:'option','aria-labelledby':g,'data-highlighted':m?'':void 0,'aria-selected':u&&m,'data-state':u?'checked':'unchecked','aria-disabled':a||void 0,'data-disabled':a?'':void 0,tabIndex:a?void 0:-1,...l,ref:v,onFocus:Rn(l.onFocus,(()=>h(!0))),onBlur:Rn(l.onBlur,(()=>h(!1))),onClick:Rn(l.onClick,(()=>{'mouse'!==y.current&&b()})),onPointerUp:Rn(l.onPointerUp,(()=>{'mouse'===y.current&&b()})),onPointerDown:Rn(l.onPointerDown,(e=>{y.current=e.pointerType})),onPointerMove:Rn(l.onPointerMove,(e=>{var t
y.current=e.pointerType,a?null==(t=c.onItemLeave)||t.call(c):'mouse'===y.current&&e.currentTarget.focus({preventScroll:!0})})),onPointerLeave:Rn(l.onPointerLeave,(e=>{var t
e.currentTarget===document.activeElement&&(null==(t=c.onItemLeave)||t.call(c))})),onKeyDown:Rn(l.onKeyDown,(e=>{var t
''!==(null==(t=c.searchRef)?void 0:t.current)&&' '===e.key||(Hp.includes(e.key)&&b(),' '===e.key&&e.preventDefault())}))})})})}))
Rm.displayName=Em
var Pm='SelectItemText',Tm=p.forwardRef(((e,t)=>{const{__scopeSelect:n,className:r,style:a,...o}=e,l=Qp(Pm,n),i=um(Pm,n),c=Nm(Pm,n),u=Jp(Pm,n),[d,f]=p.useState(null),m=fn(t,(e=>f(e)),c.onItemTextChange,(e=>{var t
return null==(t=i.itemTextRefCallback)?void 0:t.call(i,e,c.value,c.disabled)})),h=null==d?void 0:d.textContent,v=p.useMemo((()=>s.jsx('option',{value:c.value,disabled:c.disabled,children:h},c.value)),[c.disabled,c.value,h]),{onNativeOptionAdd:g,onNativeOptionRemove:y}=u
return Mn((()=>(g(v),()=>y(v))),[g,y,v]),s.jsxs(s.Fragment,{children:[s.jsx(yn.span,{id:c.textId,...o,ref:m}),c.isSelected&&l.valueNode&&!l.valueNodeHasChildren?ln.createPortal(o.children,l.valueNode):null]})}))
Tm.displayName=Pm
var Mm='SelectItemIndicator',_m=p.forwardRef(((e,t)=>{const{__scopeSelect:n,...r}=e
return Nm(Mm,n).isSelected?s.jsx(yn.span,{'aria-hidden':!0,...r,ref:t}):null}))
_m.displayName=Mm
var Lm='SelectScrollUpButton'
p.forwardRef(((e,t)=>{const n=um(Lm,e.__scopeSelect),r=hm(Lm,e.__scopeSelect),[a,o]=p.useState(!1),l=fn(t,r.onScrollButtonChange)
return Mn((()=>{if(n.viewport&&n.isPositioned){let e=function(){const e=t.scrollTop>0
o(e)}
const t=n.viewport
return e(),t.addEventListener('scroll',e),()=>t.removeEventListener('scroll',e)}}),[n.viewport,n.isPositioned]),a?s.jsx(jm,{...e,ref:l,onAutoScroll:()=>{const{viewport:e,selectedItem:t}=n
e&&t&&(e.scrollTop=e.scrollTop-t.offsetHeight)}}):null})).displayName=Lm
var Dm='SelectScrollDownButton'
p.forwardRef(((e,t)=>{const n=um(Dm,e.__scopeSelect),r=hm(Dm,e.__scopeSelect),[a,o]=p.useState(!1),l=fn(t,r.onScrollButtonChange)
return Mn((()=>{if(n.viewport&&n.isPositioned){let e=function(){const e=t.scrollHeight-t.clientHeight,n=Math.ceil(t.scrollTop)<e
o(n)}
const t=n.viewport
return e(),t.addEventListener('scroll',e),()=>t.removeEventListener('scroll',e)}}),[n.viewport,n.isPositioned]),a?s.jsx(jm,{...e,ref:l,onAutoScroll:()=>{const{viewport:e,selectedItem:t}=n
e&&t&&(e.scrollTop=e.scrollTop+t.offsetHeight)}}):null})).displayName=Dm
var jm=p.forwardRef(((e,t)=>{const{__scopeSelect:n,onAutoScroll:r,...a}=e,o=um('SelectScrollButton',n),l=p.useRef(null),i=Up(n),c=p.useCallback((()=>{null!==l.current&&(window.clearInterval(l.current),l.current=null)}),[])
return p.useEffect((()=>()=>c()),[c]),Mn((()=>{var e
const t=i().find((e=>e.ref.current===document.activeElement))
null==(e=null==t?void 0:t.ref.current)||e.scrollIntoView({block:'nearest'})}),[i]),s.jsx(yn.div,{'aria-hidden':!0,...a,ref:t,style:{flexShrink:0,...a.style},onPointerDown:Rn(a.onPointerDown,(()=>{null===l.current&&(l.current=window.setInterval(r,50))})),onPointerMove:Rn(a.onPointerMove,(()=>{var e
null==(e=o.onItemLeave)||e.call(o),null===l.current&&(l.current=window.setInterval(r,50))})),onPointerLeave:Rn(a.onPointerLeave,(()=>{c()}))})})),Im=p.forwardRef(((e,t)=>{const{__scopeSelect:n,...r}=e
return s.jsx(yn.div,{'aria-hidden':!0,...r,ref:t})}))
Im.displayName='SelectSeparator'
var Am='SelectArrow'
function Om(e){return''===e||void 0===e}function zm(e){const t=Pn(e),n=p.useRef(''),r=p.useRef(0),a=p.useCallback((e=>{const a=n.current+e
t(a),function e(t){n.current=t,window.clearTimeout(r.current),''!==t&&(r.current=window.setTimeout((()=>e('')),1e3))}(a)}),[t]),o=p.useCallback((()=>{n.current='',window.clearTimeout(r.current)}),[])
return p.useEffect((()=>()=>window.clearTimeout(r.current)),[]),[n,a,o]}function Fm(e,t,n){const r=t.length>1&&Array.from(t).every((e=>e===t[0]))?t[0]:t,a=n?e.indexOf(n):-1
let o=(l=e,i=Math.max(a,0),l.map(((e,t)=>l[(i+t)%l.length])))
var l,i
1===r.length&&(o=o.filter((e=>e!==n)))
const s=o.find((e=>e.textValue.toLowerCase().startsWith(r.toLowerCase())))
return s!==n?s:void 0}p.forwardRef(((e,t)=>{const{__scopeSelect:n,...r}=e,a=Yp(n),o=Qp(Am,n),l=um(Am,n)
return o.open&&'popper'===l.position?s.jsx(Mi,{...a,...r,ref:t}):null})).displayName=Am,p.forwardRef(((e,t)=>{const{value:n,...r}=e,a=p.useRef(null),o=fn(t,a),l=wo(n)
return p.useEffect((()=>{const e=a.current,t=window.HTMLSelectElement.prototype,r=Object.getOwnPropertyDescriptor(t,'value').set
if(l!==n&&r){const t=new Event('change',{bubbles:!0})
r.call(e,n),e.dispatchEvent(t)}}),[l,n]),s.jsx(wn,{asChild:!0,children:s.jsx('select',{...r,ref:o,defaultValue:n})})})).displayName='BubbleSelect'
var Bm=tm,$m=rm,Hm=am,Vm=om,Wm=im,Um=gm,Km=xm,Gm=Sm,qm=Rm,Ym=Tm,Xm=_m,Qm=Im,Zm=['PageUp','PageDown'],Jm=['ArrowUp','ArrowDown','ArrowLeft','ArrowRight'],eh={'from-left':['Home','PageDown','ArrowDown','ArrowLeft'],'from-right':['Home','PageDown','ArrowDown','ArrowRight'],'from-bottom':['Home','PageDown','ArrowDown','ArrowLeft'],'from-top':['Home','PageDown','ArrowUp','ArrowLeft']},th='Slider',[nh,rh,ah]=Nn(th),[oh,lh]=En(th,[ah]),[ih,sh]=oh(th),ch=p.forwardRef(((e,t)=>{const{name:n,min:r=0,max:a=100,step:o=1,orientation:l='horizontal',disabled:i=!1,minStepsBetweenThumbs:c=0,defaultValue:u=[r],value:d,onValueChange:f=()=>{},onValueCommit:m=()=>{},inverted:h=!1,form:v,...g}=e,y=p.useRef(new Set),b=p.useRef(0),w='horizontal'===l?fh:ph,[x=[],C]=Tn({prop:d,defaultProp:u,onChange:e=>{var t
null==(t=[...y.current][b.current])||t.focus(),f(e)}}),S=p.useRef(x)
function E(e,t,{commit:n}={commit:!1}){const l=function(e){return(String(e).split('.')[1]||'').length}(o),i=function(e,t){const n=Math.pow(10,t)
return Math.round(e*n)/n}(Math.round((e-r)/o)*o+r,l),s=tp(i,[r,a])
C(((e=[])=>{const r=function(e=[],t,n){const r=[...e]
return r[n]=t,r.sort(((e,t)=>e-t))}(e,s,t)
if(function(e,t){if(t>0){const n=function(e){return e.slice(0,-1).map(((t,n)=>e[n+1]-t))}(e)
return Math.min(...n)>=t}return!0}(r,c*o)){b.current=r.indexOf(s)
const t=String(r)!==String(e)
return t&&n&&m(r),t?r:e}return e}))}return s.jsx(ih,{scope:e.__scopeSlider,name:n,disabled:i,min:r,max:a,valueIndexToChangeRef:b,thumbs:y.current,values:x,orientation:l,form:v,children:s.jsx(nh.Provider,{scope:e.__scopeSlider,children:s.jsx(nh.Slot,{scope:e.__scopeSlider,children:s.jsx(w,{'aria-disabled':i,'data-disabled':i?'':void 0,...g,ref:t,onPointerDown:Rn(g.onPointerDown,(()=>{i||(S.current=x)})),min:r,max:a,inverted:h,onSlideStart:i?void 0:function(e){const t=function(e,t){if(1===e.length)return 0
const n=e.map((e=>Math.abs(e-t))),r=Math.min(...n)
return n.indexOf(r)}(x,e)
E(e,t)},onSlideMove:i?void 0:function(e){E(e,b.current)},onSlideEnd:i?void 0:function(){const e=S.current[b.current]
x[b.current]!==e&&m(x)},onHomeKeyDown:()=>!i&&E(r,0,{commit:!0}),onEndKeyDown:()=>!i&&E(a,x.length-1,{commit:!0}),onStepKeyDown:({event:e,direction:t})=>{if(!i){const n=Zm.includes(e.key)||e.shiftKey&&Jm.includes(e.key)?10:1,r=b.current
E(x[r]+o*n*t,r,{commit:!0})}}})})})})}))
ch.displayName=th
var[uh,dh]=oh(th,{startEdge:'left',endEdge:'right',size:'width',direction:1}),fh=p.forwardRef(((e,t)=>{const{min:n,max:r,dir:a,inverted:o,onSlideStart:l,onSlideMove:i,onSlideEnd:c,onStepKeyDown:u,...d}=e,[f,m]=p.useState(null),h=fn(t,(e=>m(e))),v=p.useRef(void 0),g=zn(a),y='ltr'===g,b=y&&!o||!y&&o
function w(e){const t=v.current||f.getBoundingClientRect(),a=Eh([0,t.width],b?[n,r]:[r,n])
return v.current=t,a(e-t.left)}return s.jsx(uh,{scope:e.__scopeSlider,startEdge:b?'left':'right',endEdge:b?'right':'left',direction:b?1:-1,size:'width',children:s.jsx(mh,{dir:g,'data-orientation':'horizontal',...d,ref:h,style:{...d.style,'--radix-slider-thumb-transform':'translateX(-50%)'},onSlideStart:e=>{const t=w(e.clientX)
null==l||l(t)},onSlideMove:e=>{const t=w(e.clientX)
null==i||i(t)},onSlideEnd:()=>{v.current=void 0,null==c||c()},onStepKeyDown:e=>{const t=eh[b?'from-left':'from-right'].includes(e.key)
null==u||u({event:e,direction:t?-1:1})}})})})),ph=p.forwardRef(((e,t)=>{const{min:n,max:r,inverted:a,onSlideStart:o,onSlideMove:l,onSlideEnd:i,onStepKeyDown:c,...u}=e,d=p.useRef(null),f=fn(t,d),m=p.useRef(void 0),h=!a
function v(e){const t=m.current||d.current.getBoundingClientRect(),a=Eh([0,t.height],h?[r,n]:[n,r])
return m.current=t,a(e-t.top)}return s.jsx(uh,{scope:e.__scopeSlider,startEdge:h?'bottom':'top',endEdge:h?'top':'bottom',size:'height',direction:h?1:-1,children:s.jsx(mh,{'data-orientation':'vertical',...u,ref:f,style:{...u.style,'--radix-slider-thumb-transform':'translateY(50%)'},onSlideStart:e=>{const t=v(e.clientY)
null==o||o(t)},onSlideMove:e=>{const t=v(e.clientY)
null==l||l(t)},onSlideEnd:()=>{m.current=void 0,null==i||i()},onStepKeyDown:e=>{const t=eh[h?'from-bottom':'from-top'].includes(e.key)
null==c||c({event:e,direction:t?-1:1})}})})})),mh=p.forwardRef(((e,t)=>{const{__scopeSlider:n,onSlideStart:r,onSlideMove:a,onSlideEnd:o,onHomeKeyDown:l,onEndKeyDown:i,onStepKeyDown:c,...u}=e,d=sh(th,n)
return s.jsx(yn.span,{...u,ref:t,onKeyDown:Rn(e.onKeyDown,(e=>{'Home'===e.key?(l(e),e.preventDefault()):'End'===e.key?(i(e),e.preventDefault()):Zm.concat(Jm).includes(e.key)&&(c(e),e.preventDefault())})),onPointerDown:Rn(e.onPointerDown,(e=>{const t=e.target
t.setPointerCapture(e.pointerId),e.preventDefault(),d.thumbs.has(t)?t.focus():r(e)})),onPointerMove:Rn(e.onPointerMove,(e=>{e.target.hasPointerCapture(e.pointerId)&&a(e)})),onPointerUp:Rn(e.onPointerUp,(e=>{const t=e.target
t.hasPointerCapture(e.pointerId)&&(t.releasePointerCapture(e.pointerId),o(e))}))})})),hh='SliderTrack',vh=p.forwardRef(((e,t)=>{const{__scopeSlider:n,...r}=e,a=sh(hh,n)
return s.jsx(yn.span,{'data-disabled':a.disabled?'':void 0,'data-orientation':a.orientation,...r,ref:t})}))
vh.displayName=hh
var gh='SliderRange',yh=p.forwardRef(((e,t)=>{const{__scopeSlider:n,...r}=e,a=sh(gh,n),o=dh(gh,n),l=fn(t,p.useRef(null)),i=a.values.length,c=a.values.map((e=>Sh(e,a.min,a.max))),u=i>1?Math.min(...c):0,d=100-Math.max(...c)
return s.jsx(yn.span,{'data-orientation':a.orientation,'data-disabled':a.disabled?'':void 0,...r,ref:l,style:{...e.style,[o.startEdge]:u+'%',[o.endEdge]:d+'%'}})}))
yh.displayName=gh
var bh='SliderThumb',wh=p.forwardRef(((e,t)=>{const n=rh(e.__scopeSlider),[r,a]=p.useState(null),o=fn(t,(e=>a(e))),l=p.useMemo((()=>r?n().findIndex((e=>e.ref.current===r)):-1),[n,r])
return s.jsx(xh,{...e,ref:o,index:l})})),xh=p.forwardRef(((e,t)=>{const{__scopeSlider:n,index:r,name:a,...o}=e,l=sh(bh,n),i=dh(bh,n),[c,u]=p.useState(null),d=fn(t,(e=>u(e))),f=!c||l.form||!!c.closest('form'),m=xo(c),h=l.values[r],v=void 0===h?0:Sh(h,l.min,l.max),g=function(e,t){return t>2?`Value ${e+1} of ${t}`:2===t?['Minimum','Maximum'][e]:void 0}(r,l.values.length),y=null==m?void 0:m[i.size],b=y?function(e,t,n){const r=e/2
return(r-Eh([0,50],[0,r])(t)*n)*n}(y,v,i.direction):0
return p.useEffect((()=>{if(c)return l.thumbs.add(c),()=>{l.thumbs.delete(c)}}),[c,l.thumbs]),s.jsxs('span',{style:{transform:'var(--radix-slider-thumb-transform)',position:'absolute',[i.startEdge]:`calc(${v}% + ${b}px)`},children:[s.jsx(nh.ItemSlot,{scope:e.__scopeSlider,children:s.jsx(yn.span,{role:'slider','aria-label':e['aria-label']||g,'aria-valuemin':l.min,'aria-valuenow':h,'aria-valuemax':l.max,'aria-orientation':l.orientation,'data-orientation':l.orientation,'data-disabled':l.disabled?'':void 0,tabIndex:l.disabled?void 0:0,...o,ref:d,style:void 0===h?{display:'none'}:e.style,onFocus:Rn(e.onFocus,(()=>{l.valueIndexToChangeRef.current=r}))})}),f&&s.jsx(Ch,{name:a??(l.name?l.name+(l.values.length>1?'[]':''):void 0),form:l.form,value:h},r)]})}))
wh.displayName=bh
var Ch=e=>{const{value:t,...n}=e,r=p.useRef(null),a=wo(t)
return p.useEffect((()=>{const e=r.current,n=window.HTMLInputElement.prototype,o=Object.getOwnPropertyDescriptor(n,'value').set
if(a!==t&&o){const n=new Event('input',{bubbles:!0})
o.call(e,t),e.dispatchEvent(n)}}),[a,t]),s.jsx('input',{style:{display:'none'},...n,ref:r,defaultValue:t})}
function Sh(e,t,n){return tp(100/(n-t)*(e-t),[0,100])}function Eh(e,t){return n=>{if(e[0]===e[1]||t[0]===t[1])return t[0]
const r=(t[1]-t[0])/(e[1]-e[0])
return t[0]+r*(n-e[0])}}var kh=ch,Nh=vh,Rh=yh,Ph=wh,Th='Switch',[Mh,_h]=En(Th),[Lh,Dh]=Mh(Th),jh=p.forwardRef(((e,t)=>{const{__scopeSwitch:n,name:r,checked:a,defaultChecked:o,required:l,disabled:i,value:c='on',onCheckedChange:u,form:d,...f}=e,[m,h]=p.useState(null),v=fn(t,(e=>h(e))),g=p.useRef(!1),y=!m||d||!!m.closest('form'),[b=!1,w]=Tn({prop:a,defaultProp:o,onChange:u})
return s.jsxs(Lh,{scope:n,checked:b,disabled:i,children:[s.jsx(yn.button,{type:'button',role:'switch','aria-checked':b,'aria-required':l,'data-state':zh(b),'data-disabled':i?'':void 0,disabled:i,value:c,...f,ref:v,onClick:Rn(e.onClick,(e=>{w((e=>!e)),y&&(g.current=e.isPropagationStopped(),g.current||e.stopPropagation())}))}),y&&s.jsx(Oh,{control:m,bubbles:!g.current,name:r,value:c,checked:b,required:l,disabled:i,form:d,style:{transform:'translateX(-100%)'}})]})}))
jh.displayName=Th
var Ih='SwitchThumb',Ah=p.forwardRef(((e,t)=>{const{__scopeSwitch:n,...r}=e,a=Dh(Ih,n)
return s.jsx(yn.span,{'data-state':zh(a.checked),'data-disabled':a.disabled?'':void 0,...r,ref:t})}))
Ah.displayName=Ih
var Oh=e=>{const{control:t,checked:n,bubbles:r=!0,...a}=e,o=p.useRef(null),l=wo(n),i=xo(t)
return p.useEffect((()=>{const e=o.current,t=window.HTMLInputElement.prototype,a=Object.getOwnPropertyDescriptor(t,'checked').set
if(l!==n&&a){const t=new Event('click',{bubbles:r})
a.call(e,n),e.dispatchEvent(t)}}),[l,n,r]),s.jsx('input',{type:'checkbox','aria-hidden':!0,defaultChecked:n,...a,tabIndex:-1,ref:o,style:{...e.style,...i,position:'absolute',pointerEvents:'none',opacity:0,margin:0}})}
function zh(e){return e?'checked':'unchecked'}var Fh=jh,Bh=Ah,$h='Tabs',[Hh,Vh]=En($h,[zi]),Wh=zi(),[Uh,Kh]=Hh($h),Gh=p.forwardRef(((e,t)=>{const{__scopeTabs:n,value:r,onValueChange:a,defaultValue:o,orientation:l='horizontal',dir:i,activationMode:c='automatic',...u}=e,d=zn(i),[f,p]=Tn({prop:r,onChange:a,defaultProp:o})
return s.jsx(Uh,{scope:n,baseId:In(),value:f,onValueChange:p,orientation:l,dir:d,activationMode:c,children:s.jsx(yn.div,{dir:d,'data-orientation':l,...u,ref:t})})}))
Gh.displayName=$h
var qh='TabsList',Yh=p.forwardRef(((e,t)=>{const{__scopeTabs:n,loop:r=!0,...a}=e,o=Kh(qh,n),l=Wh(n)
return s.jsx(Gi,{asChild:!0,...l,orientation:o.orientation,dir:o.dir,loop:r,children:s.jsx(yn.div,{role:'tablist','aria-orientation':o.orientation,...a,ref:t})})}))
Yh.displayName=qh
var Xh='TabsTrigger',Qh=p.forwardRef(((e,t)=>{const{__scopeTabs:n,value:r,disabled:a=!1,...o}=e,l=Kh(Xh,n),i=Wh(n),c=ev(l.baseId,r),u=tv(l.baseId,r),d=r===l.value
return s.jsx(qi,{asChild:!0,...i,focusable:!a,active:d,children:s.jsx(yn.button,{type:'button',role:'tab','aria-selected':d,'aria-controls':u,'data-state':d?'active':'inactive','data-disabled':a?'':void 0,disabled:a,id:c,...o,ref:t,onMouseDown:Rn(e.onMouseDown,(e=>{a||0!==e.button||!1!==e.ctrlKey?e.preventDefault():l.onValueChange(r)})),onKeyDown:Rn(e.onKeyDown,(e=>{[' ','Enter'].includes(e.key)&&l.onValueChange(r)})),onFocus:Rn(e.onFocus,(()=>{const e='manual'!==l.activationMode
d||a||!e||l.onValueChange(r)}))})})}))
Qh.displayName=Xh
var Zh='TabsContent',Jh=p.forwardRef(((e,t)=>{const{__scopeTabs:n,value:r,forceMount:a,children:o,...l}=e,i=Kh(Zh,n),c=ev(i.baseId,r),u=tv(i.baseId,r),d=r===i.value,f=p.useRef(d)
return p.useEffect((()=>{const e=requestAnimationFrame((()=>f.current=!1))
return()=>cancelAnimationFrame(e)}),[]),s.jsx(_n,{present:a||d,children:({present:n})=>s.jsx(yn.div,{'data-state':d?'active':'inactive','data-orientation':i.orientation,role:'tabpanel','aria-labelledby':c,hidden:!n,id:u,tabIndex:0,...l,ref:t,style:{...e.style,animationDuration:f.current?'0s':void 0},children:n&&o})})}))
function ev(e,t){return`${e}-trigger-${t}`}function tv(e,t){return`${e}-content-${t}`}Jh.displayName=Zh
var nv=Gh,rv=Yh,av=Qh,ov=Jh,lv=p.forwardRef(((e,t)=>{const{pressed:n,defaultPressed:r=!1,onPressedChange:a,...o}=e,[l=!1,i]=Tn({prop:n,onChange:a,defaultProp:r})
return s.jsx(yn.button,{type:'button','aria-pressed':l,'data-state':l?'on':'off','data-disabled':e.disabled?'':void 0,...o,ref:t,onClick:Rn(e.onClick,(()=>{e.disabled||i(!l)}))})}))
lv.displayName='Toggle'
var iv='ToggleGroup',[sv,cv]=En(iv,[zi]),uv=zi(),dv=m.forwardRef(((e,t)=>{const{type:n,...r}=e
if('single'===n){const e=r
return s.jsx(mv,{...e,ref:t})}if('multiple'===n){const e=r
return s.jsx(hv,{...e,ref:t})}throw new Error(`Missing prop \`type\` expected on \`${iv}\``)}))
dv.displayName=iv
var[fv,pv]=sv(iv),mv=m.forwardRef(((e,t)=>{const{value:n,defaultValue:r,onValueChange:a=()=>{},...o}=e,[l,i]=Tn({prop:n,defaultProp:r,onChange:a})
return s.jsx(fv,{scope:e.__scopeToggleGroup,type:'single',value:l?[l]:[],onItemActivate:i,onItemDeactivate:m.useCallback((()=>i('')),[i]),children:s.jsx(yv,{...o,ref:t})})})),hv=m.forwardRef(((e,t)=>{const{value:n,defaultValue:r,onValueChange:a=()=>{},...o}=e,[l=[],i]=Tn({prop:n,defaultProp:r,onChange:a}),c=m.useCallback((e=>i(((t=[])=>[...t,e]))),[i]),u=m.useCallback((e=>i(((t=[])=>t.filter((t=>t!==e))))),[i])
return s.jsx(fv,{scope:e.__scopeToggleGroup,type:'multiple',value:l,onItemActivate:c,onItemDeactivate:u,children:s.jsx(yv,{...o,ref:t})})}))
dv.displayName=iv
var[vv,gv]=sv(iv),yv=m.forwardRef(((e,t)=>{const{__scopeToggleGroup:n,disabled:r=!1,rovingFocus:a=!0,orientation:o,dir:l,loop:i=!0,...c}=e,u=uv(n),d=zn(l),f={role:'group',dir:d,...c}
return s.jsx(vv,{scope:n,rovingFocus:a,disabled:r,children:a?s.jsx(Gi,{asChild:!0,...u,orientation:o,dir:d,loop:i,children:s.jsx(yn.div,{...f,ref:t})}):s.jsx(yn.div,{...f,ref:t})})})),bv='ToggleGroupItem',wv=m.forwardRef(((e,t)=>{const n=pv(bv,e.__scopeToggleGroup),r=gv(bv,e.__scopeToggleGroup),a=uv(e.__scopeToggleGroup),o=n.value.includes(e.value),l=r.disabled||e.disabled,i={...e,pressed:o,disabled:l},c=m.useRef(null)
return r.rovingFocus?s.jsx(qi,{asChild:!0,...a,focusable:!l,active:o,ref:c,children:s.jsx(xv,{...i,ref:t})}):s.jsx(xv,{...i,ref:t})}))
wv.displayName=bv
var xv=m.forwardRef(((e,t)=>{const{__scopeToggleGroup:n,value:r,...a}=e,o=pv(bv,n),l={role:'radio','aria-checked':e.pressed,'aria-pressed':void 0},i='single'===o.type?l:void 0
return s.jsx(lv,{...i,...a,ref:t,onPressedChange:e=>{e?o.onItemActivate(r):o.onItemDeactivate(r)}})})),Cv=dv,Sv=wv,[Ev,kv]=En('Tooltip',[di]),Nv=di(),Rv='TooltipProvider',Pv=700,Tv='tooltip.open',[Mv,_v]=Ev(Rv),Lv=e=>{const{__scopeTooltip:t,delayDuration:n=Pv,skipDelayDuration:r=300,disableHoverableContent:a=!1,children:o}=e,[l,i]=p.useState(!0),c=p.useRef(!1),u=p.useRef(0)
return p.useEffect((()=>{const e=u.current
return()=>window.clearTimeout(e)}),[]),s.jsx(Mv,{scope:t,isOpenDelayed:l,delayDuration:n,onOpen:p.useCallback((()=>{window.clearTimeout(u.current),i(!1)}),[]),onClose:p.useCallback((()=>{window.clearTimeout(u.current),u.current=window.setTimeout((()=>i(!0)),r)}),[r]),isPointerInTransitRef:c,onPointerInTransitChange:p.useCallback((e=>{c.current=e}),[]),disableHoverableContent:a,children:o})}
Lv.displayName=Rv
var Dv='Tooltip',[jv,Iv]=Ev(Dv),Av=e=>{const{__scopeTooltip:t,children:n,open:r,defaultOpen:a=!1,onOpenChange:o,disableHoverableContent:l,delayDuration:i}=e,c=_v(Dv,e.__scopeTooltip),u=Nv(t),[d,f]=p.useState(null),m=In(),h=p.useRef(0),v=l??c.disableHoverableContent,g=i??c.delayDuration,y=p.useRef(!1),[b=!1,w]=Tn({prop:r,defaultProp:a,onChange:e=>{e?(c.onOpen(),document.dispatchEvent(new CustomEvent(Tv))):c.onClose(),null==o||o(e)}}),x=p.useMemo((()=>b?y.current?'delayed-open':'instant-open':'closed'),[b]),C=p.useCallback((()=>{window.clearTimeout(h.current),h.current=0,y.current=!1,w(!0)}),[w]),S=p.useCallback((()=>{window.clearTimeout(h.current),h.current=0,w(!1)}),[w]),E=p.useCallback((()=>{window.clearTimeout(h.current),h.current=window.setTimeout((()=>{y.current=!0,w(!0),h.current=0}),g)}),[g,w])
return p.useEffect((()=>()=>{h.current&&(window.clearTimeout(h.current),h.current=0)}),[]),s.jsx(Ri,{...u,children:s.jsx(jv,{scope:t,contentId:m,open:b,stateAttribute:x,trigger:d,onTriggerChange:f,onTriggerEnter:p.useCallback((()=>{c.isOpenDelayed?E():C()}),[c.isOpenDelayed,E,C]),onTriggerLeave:p.useCallback((()=>{v?S():(window.clearTimeout(h.current),h.current=0)}),[S,v]),onOpen:C,onClose:S,disableHoverableContent:v,children:n})})}
Av.displayName=Dv
var Ov='TooltipTrigger',zv=p.forwardRef(((e,t)=>{const{__scopeTooltip:n,...r}=e,a=Iv(Ov,n),o=_v(Ov,n),l=Nv(n),i=fn(t,p.useRef(null),a.onTriggerChange),c=p.useRef(!1),u=p.useRef(!1),d=p.useCallback((()=>c.current=!1),[])
return p.useEffect((()=>()=>document.removeEventListener('pointerup',d)),[d]),s.jsx(Pi,{asChild:!0,...l,children:s.jsx(yn.button,{'aria-describedby':a.open?a.contentId:void 0,'data-state':a.stateAttribute,...r,ref:i,onPointerMove:Rn(e.onPointerMove,(e=>{'touch'!==e.pointerType&&(u.current||o.isPointerInTransitRef.current||(a.onTriggerEnter(),u.current=!0))})),onPointerLeave:Rn(e.onPointerLeave,(()=>{a.onTriggerLeave(),u.current=!1})),onPointerDown:Rn(e.onPointerDown,(()=>{c.current=!0,document.addEventListener('pointerup',d,{once:!0})})),onFocus:Rn(e.onFocus,(()=>{c.current||a.onOpen()})),onBlur:Rn(e.onBlur,a.onClose),onClick:Rn(e.onClick,a.onClose)})})}))
zv.displayName=Ov
var Fv='TooltipPortal',[Bv,$v]=Ev(Fv,{forceMount:void 0}),Hv=e=>{const{__scopeTooltip:t,forceMount:n,children:r,container:a}=e,o=Iv(Fv,t)
return s.jsx(Bv,{scope:t,forceMount:n,children:s.jsx(_n,{present:n||o.open,children:s.jsx(rr,{asChild:!0,container:a,children:r})})})}
Hv.displayName=Fv
var Vv='TooltipContent',Wv=p.forwardRef(((e,t)=>{const n=$v(Vv,e.__scopeTooltip),{forceMount:r=n.forceMount,side:a='top',...o}=e,l=Iv(Vv,e.__scopeTooltip)
return s.jsx(_n,{present:r||l.open,children:l.disableHoverableContent?s.jsx(qv,{side:a,...o,ref:t}):s.jsx(Uv,{side:a,...o,ref:t})})})),Uv=p.forwardRef(((e,t)=>{const n=Iv(Vv,e.__scopeTooltip),r=_v(Vv,e.__scopeTooltip),a=p.useRef(null),o=fn(t,a),[l,i]=p.useState(null),{trigger:c,onClose:u}=n,d=a.current,{onPointerInTransitChange:f}=r,m=p.useCallback((()=>{i(null),f(!1)}),[f]),h=p.useCallback(((e,t)=>{const n=e.currentTarget,r={x:e.clientX,y:e.clientY},a=function(e,t,n=5){const r=[]
switch(t){case'top':r.push({x:e.x-n,y:e.y+n},{x:e.x+n,y:e.y+n})
break
case'bottom':r.push({x:e.x-n,y:e.y-n},{x:e.x+n,y:e.y-n})
break
case'left':r.push({x:e.x+n,y:e.y-n},{x:e.x+n,y:e.y+n})
break
case'right':r.push({x:e.x-n,y:e.y-n},{x:e.x-n,y:e.y+n})}return r}(r,function(e,t){const n=Math.abs(t.top-e.y),r=Math.abs(t.bottom-e.y),a=Math.abs(t.right-e.x),o=Math.abs(t.left-e.x)
switch(Math.min(n,r,a,o)){case o:return'left'
case a:return'right'
case n:return'top'
case r:return'bottom'
default:throw new Error('unreachable')}}(r,n.getBoundingClientRect())),o=function(e){const t=e.slice()
return t.sort(((e,t)=>e.x<t.x?-1:e.x>t.x?1:e.y<t.y?-1:e.y>t.y?1:0)),function(e){if(e.length<=1)return e.slice()
const t=[]
for(let r=0;r<e.length;r++){const n=e[r]
for(;t.length>=2;){const e=t[t.length-1],r=t[t.length-2]
if(!((e.x-r.x)*(n.y-r.y)>=(e.y-r.y)*(n.x-r.x)))break
t.pop()}t.push(n)}t.pop()
const n=[]
for(let r=e.length-1;r>=0;r--){const t=e[r]
for(;n.length>=2;){const e=n[n.length-1],r=n[n.length-2]
if(!((e.x-r.x)*(t.y-r.y)>=(e.y-r.y)*(t.x-r.x)))break
n.pop()}n.push(t)}return n.pop(),1===t.length&&1===n.length&&t[0].x===n[0].x&&t[0].y===n[0].y?t:t.concat(n)}(t)}([...a,...function(e){const{top:t,right:n,bottom:r,left:a}=e
return[{x:a,y:t},{x:n,y:t},{x:n,y:r},{x:a,y:r}]}(t.getBoundingClientRect())])
i(o),f(!0)}),[f])
return p.useEffect((()=>()=>m()),[m]),p.useEffect((()=>{if(c&&d){const e=e=>h(e,d),t=e=>h(e,c)
return c.addEventListener('pointerleave',e),d.addEventListener('pointerleave',t),()=>{c.removeEventListener('pointerleave',e),d.removeEventListener('pointerleave',t)}}}),[c,d,h,m]),p.useEffect((()=>{if(l){const e=e=>{const t=e.target,n={x:e.clientX,y:e.clientY},r=(null==c?void 0:c.contains(t))||(null==d?void 0:d.contains(t)),a=!function(e,t){const{x:n,y:r}=e
let a=!1
for(let o=0,l=t.length-1;o<t.length;l=o++){const e=t[o].x,i=t[o].y,s=t[l].x,c=t[l].y
i>r!=c>r&&n<(s-e)*(r-i)/(c-i)+e&&(a=!a)}return a}(n,l)
r?m():a&&(m(),u())}
return document.addEventListener('pointermove',e),()=>document.removeEventListener('pointermove',e)}}),[c,d,l,u,m]),s.jsx(qv,{...e,ref:o})})),[Kv,Gv]=Ev(Dv,{isInside:!1}),qv=p.forwardRef(((e,t)=>{const{__scopeTooltip:n,children:r,'aria-label':a,onEscapeKeyDown:o,onPointerDownOutside:l,...i}=e,c=Iv(Vv,n),u=Nv(n),{onClose:d}=c
return p.useEffect((()=>(document.addEventListener(Tv,d),()=>document.removeEventListener(Tv,d))),[d]),p.useEffect((()=>{if(c.trigger){const e=e=>{const t=e.target;(null==t?void 0:t.contains(c.trigger))&&d()}
return window.addEventListener('scroll',e,{capture:!0}),()=>window.removeEventListener('scroll',e,{capture:!0})}}),[c.trigger,d]),s.jsx(Wn,{asChild:!0,disableOutsidePointerEvents:!1,onEscapeKeyDown:o,onPointerDownOutside:l,onFocusOutside:e=>e.preventDefault(),onDismiss:d,children:s.jsxs(Ti,{'data-state':c.stateAttribute,...u,...i,ref:t,style:{...i.style,'--radix-tooltip-content-transform-origin':'var(--radix-popper-transform-origin)','--radix-tooltip-content-available-width':'var(--radix-popper-available-width)','--radix-tooltip-content-available-height':'var(--radix-popper-available-height)','--radix-tooltip-trigger-width':'var(--radix-popper-anchor-width)','--radix-tooltip-trigger-height':'var(--radix-popper-anchor-height)'},children:[s.jsx(hn,{children:r}),s.jsx(Kv,{scope:n,isInside:!0,children:s.jsx(xn,{id:c.contentId,role:'tooltip',children:a||r})})]})})}))
Wv.displayName=Vv
var Yv='TooltipArrow',Xv=p.forwardRef(((e,t)=>{const{__scopeTooltip:n,...r}=e,a=Nv(n)
return Gv(Yv,n).isInside?null:s.jsx(Mi,{...a,...r,ref:t})}))
Xv.displayName=Yv
var Qv=Lv,Zv=Av,Jv=zv,eg=Hv,tg=Wv,ng=Xv
const rg=Sn
var ag,og,lg={exports:{}}
const ig=t((ag||(ag=1,og=lg,function(){var e={}.hasOwnProperty
function t(){for(var e='',t=0;t<arguments.length;t++){var a=arguments[t]
a&&(e=r(e,n(a)))}return e}function n(n){if('string'==typeof n||'number'==typeof n)return n
if('object'!=typeof n)return''
if(Array.isArray(n))return t.apply(null,n)
if(n.toString!==Object.prototype.toString&&!n.toString.toString().includes('[native code]'))return n.toString()
var a=''
for(var o in n)e.call(n,o)&&n[o]&&(a=r(a,o))
return a}function r(e,t){return t?e?e+' '+t:e+t:e}og.exports?(t.default=t,og.exports=t):window.classNames=t}()),lg.exports)),sg={asChild:{type:'boolean'}},cg={width:{type:'string',className:'rt-r-w',customProperties:['--width'],responsive:!0},minWidth:{type:'string',className:'rt-r-min-w',customProperties:['--min-width'],responsive:!0},maxWidth:{type:'string',className:'rt-r-max-w',customProperties:['--max-width'],responsive:!0}},ug={height:{type:'string',className:'rt-r-h',customProperties:['--height'],responsive:!0},minHeight:{type:'string',className:'rt-r-min-h',customProperties:['--min-height'],responsive:!0},maxHeight:{type:'string',className:'rt-r-max-h',customProperties:['--max-height'],responsive:!0}},dg={...sg,align:{type:'enum',className:'rt-r-align',values:['start','center'],default:'center'},size:{type:'enum',className:'rt-r-size',values:['1','2','3','4'],default:'3',responsive:!0},width:cg.width,minWidth:cg.minWidth,maxWidth:{...cg.maxWidth,default:'600px'},...ug},fg=['gray','gold','bronze','brown','yellow','amber','orange','tomato','red','ruby','crimson','pink','plum','purple','violet','iris','indigo','blue','cyan','teal','jade','green','grass','lime','mint','sky'],pg={color:{type:'enum',values:fg,default:void 0}},mg={color:{type:'enum',values:fg,default:''}},hg={highContrast:{type:'boolean',className:'rt-high-contrast',default:void 0}},vg={trim:{type:'enum',className:'rt-r-lt',values:['normal','start','end','both'],responsive:!0}},gg={align:{type:'enum',className:'rt-r-ta',values:['left','center','right'],responsive:!0}},yg={wrap:{type:'enum',className:'rt-r-tw',values:['wrap','nowrap','pretty','balance'],responsive:!0}},bg={truncate:{type:'boolean',className:'rt-truncate'}},wg={weight:{type:'enum',className:'rt-r-weight',values:['light','regular','medium','bold'],responsive:!0}},xg={as:{type:'enum',values:['h1','h2','h3','h4','h5','h6'],default:'h1'},...sg,size:{type:'enum',className:'rt-r-size',values:['1','2','3','4','5','6','7','8','9'],default:'6',responsive:!0},...wg,...gg,...vg,...bg,...yg,...pg,...hg},Cg=['initial','xs','sm','md','lg','xl']
function Sg(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function Eg(e){return'object'==typeof e&&Object.keys(e).some((e=>Cg.includes(e)))}function kg({className:e,customProperties:t,...n}){const r=Ng({allowArbitraryValues:!0,className:e,...n}),a=function({customProperties:e,value:t,propValues:n,parseValue:r=e=>e}){let a={}
if(t&&('string'!=typeof t||!n.includes(t))){if('string'==typeof t&&(a=Object.fromEntries(e.map((e=>[e,t])))),Eg(t)){const r=t
for(const t in r){if(!Sg(r,t)||!Cg.includes(t))continue
const o=r[t]
if(!n.includes(o))for(const n of e)a={['initial'===t?n:`${n}-${t}`]:o,...a}}}for(const e in a){const t=a[e]
void 0!==t&&(a[e]=r(t))}return a}}({customProperties:t,...n})
return[r,a]}function Ng({allowArbitraryValues:e,value:t,className:n,propValues:r,parseValue:a=e=>e}){const o=[]
if(t){if('string'==typeof t&&r.includes(t))return Rg(n,t,a)
if(Eg(t)){const l=t
for(const t in l){if(!Sg(l,t)||!Cg.includes(t))continue
const i=l[t]
if(void 0!==i)if(r.includes(i)){const e=Rg(n,i,a),r='initial'===t?e:`${t}:${e}`
o.push(r)}else if(e){const e='initial'===t?n:`${t}:${n}`
o.push(e)}}return o.join(' ')}if(e)return n}}function Rg(e,t,n){const r=e?'-':'',a=n(t),o=null==a?void 0:a.startsWith('-')
return`${o?'-':''}${e}${r}${o?null==a?void 0:a.substring(1):a}`}function Pg(...e){let t={}
for(const n of e)n&&(t={...t,...n})
return Object.keys(t).length?t:void 0}function Tg(e,...t){let n,r
const a={...e},o=function(...e){return Object.assign({},...e)}(...t)
for(const l in o){let e=a[l]
const t=o[l]
if(void 0!==t.default&&void 0===e&&(e=t.default),'enum'===t.type&&![t.default,...t.values].includes(e)&&!Eg(e)&&(e=t.default),a[l]=e,'className'in t&&t.className){delete a[l]
const o='responsive'in t
if(!e||Eg(e)&&!o)continue
if(Eg(e)&&(void 0!==t.default&&void 0===e.initial&&(e.initial=t.default),'enum'===t.type&&([t.default,...t.values].includes(e.initial)||(e.initial=t.default))),'enum'===t.type){const r=Ng({allowArbitraryValues:!1,value:e,className:t.className,propValues:t.values,parseValue:t.parseValue})
n=ig(n,r)
continue}if('string'===t.type||'enum | string'===t.type){const a='string'===t.type?[]:t.values,[o,l]=kg({className:t.className,customProperties:t.customProperties,propValues:a,parseValue:t.parseValue,value:e})
r=Pg(r,l),n=ig(n,o)
continue}if('boolean'===t.type&&e){n=ig(n,t.className)
continue}}}return a.className=ig(n,e.className),a.style=Pg(r,e.style),a}const Mg=['0','1','2','3','4','5','6','7','8','9','-1','-2','-3','-4','-5','-6','-7','-8','-9'],_g={m:{type:'enum | string',values:Mg,responsive:!0,className:'rt-r-m',customProperties:['--m']},mx:{type:'enum | string',values:Mg,responsive:!0,className:'rt-r-mx',customProperties:['--ml','--mr']},my:{type:'enum | string',values:Mg,responsive:!0,className:'rt-r-my',customProperties:['--mt','--mb']},mt:{type:'enum | string',values:Mg,responsive:!0,className:'rt-r-mt',customProperties:['--mt']},mr:{type:'enum | string',values:Mg,responsive:!0,className:'rt-r-mr',customProperties:['--mr']},mb:{type:'enum | string',values:Mg,responsive:!0,className:'rt-r-mb',customProperties:['--mb']},ml:{type:'enum | string',values:Mg,responsive:!0,className:'rt-r-ml',customProperties:['--ml']}},Lg=p.forwardRef(((e,t)=>{const{children:n,className:r,asChild:a,as:o='h1',color:l,...i}=Tg(e,xg,_g)
return p.createElement(gn,{'data-accent-color':l,...i,ref:t,className:ig('rt-Heading',r)},a?n:p.createElement(o,null,n))}))
Lg.displayName='Heading'
const Dg={as:{type:'enum',values:['span','div','label','p'],default:'span'},...sg,size:{type:'enum',className:'rt-r-size',values:['1','2','3','4','5','6','7','8','9'],responsive:!0},...wg,...gg,...vg,...bg,...yg,...pg,...hg},jg=p.forwardRef(((e,t)=>{const{children:n,className:r,asChild:a,as:o='span',color:l,...i}=Tg(e,Dg,_g)
return p.createElement(gn,{'data-accent-color':l,...i,ref:t,className:ig('rt-Text',r)},a?n:p.createElement(o,null,n))}))
function Ig(e){switch(e){case'tomato':case'red':case'ruby':case'crimson':case'pink':case'plum':case'purple':case'violet':return'mauve'
case'iris':case'indigo':case'blue':case'sky':case'cyan':return'slate'
case'teal':case'jade':case'mint':case'green':return'sage'
case'grass':case'lime':return'olive'
case'yellow':case'amber':case'orange':case'brown':case'gold':case'bronze':return'sand'
case'gray':return'gray'}}jg.displayName='Text'
const Ag=['none','small','medium','large','full'],Og={radius:{type:'enum',values:Ag,default:void 0}},zg={hasBackground:{default:!0},appearance:{default:'inherit'},accentColor:{values:fg,default:'indigo'},grayColor:{values:['auto','gray','mauve','slate','sage','olive','sand'],default:'auto'},panelBackground:{values:['solid','translucent'],default:'translucent'},radius:{values:Ag,default:'medium'},scaling:{values:['90%','95%','100%','105%','110%'],default:'100%'}},Fg=()=>{},Bg=p.createContext(void 0)
function $g(){const e=p.useContext(Bg)
if(void 0===e)throw new Error('`useThemeContext` must be used within a `Theme`')
return e}const Hg=p.forwardRef(((e,t)=>void 0===p.useContext(Bg)?p.createElement(Qv,{delayDuration:200},p.createElement(Fn,{dir:'ltr'},p.createElement(Vg,{...e,ref:t}))):p.createElement(Wg,{...e,ref:t})))
Hg.displayName='Theme'
const Vg=p.forwardRef(((e,t)=>{const{appearance:n=zg.appearance.default,accentColor:r=zg.accentColor.default,grayColor:a=zg.grayColor.default,panelBackground:o=zg.panelBackground.default,radius:l=zg.radius.default,scaling:i=zg.scaling.default,hasBackground:s=zg.hasBackground.default,...c}=e,[u,d]=p.useState(n)
p.useEffect((()=>d(n)),[n])
const[f,m]=p.useState(r)
p.useEffect((()=>m(r)),[r])
const[h,v]=p.useState(a)
p.useEffect((()=>v(a)),[a])
const[g,y]=p.useState(o)
p.useEffect((()=>y(o)),[o])
const[b,w]=p.useState(l)
p.useEffect((()=>w(l)),[l])
const[x,C]=p.useState(i)
return p.useEffect((()=>C(i)),[i]),p.createElement(Wg,{...c,ref:t,isRoot:!0,hasBackground:s,appearance:u,accentColor:f,grayColor:h,panelBackground:g,radius:b,scaling:x,onAppearanceChange:d,onAccentColorChange:m,onGrayColorChange:v,onPanelBackgroundChange:y,onRadiusChange:w,onScalingChange:C})}))
Vg.displayName='ThemeRoot'
const Wg=p.forwardRef(((e,t)=>{const n=p.useContext(Bg),{asChild:r,isRoot:a,hasBackground:o,appearance:l=(null==n?void 0:n.appearance)??zg.appearance.default,accentColor:i=(null==n?void 0:n.accentColor)??zg.accentColor.default,grayColor:s=(null==n?void 0:n.resolvedGrayColor)??zg.grayColor.default,panelBackground:c=(null==n?void 0:n.panelBackground)??zg.panelBackground.default,radius:u=(null==n?void 0:n.radius)??zg.radius.default,scaling:d=(null==n?void 0:n.scaling)??zg.scaling.default,onAppearanceChange:f=Fg,onAccentColorChange:m=Fg,onGrayColorChange:h=Fg,onPanelBackgroundChange:v=Fg,onRadiusChange:g=Fg,onScalingChange:y=Fg,...b}=e,w=r?gn:'div',x='auto'===s?Ig(i):s,C='light'===e.appearance||'dark'===e.appearance,S=void 0===o?a||C:o
return p.createElement(Bg.Provider,{value:p.useMemo((()=>({appearance:l,accentColor:i,grayColor:s,resolvedGrayColor:x,panelBackground:c,radius:u,scaling:d,onAppearanceChange:f,onAccentColorChange:m,onGrayColorChange:h,onPanelBackgroundChange:v,onRadiusChange:g,onScalingChange:y})),[l,i,s,x,c,u,d,f,m,h,v,g,y])},p.createElement(w,{'data-is-root-theme':a?'true':'false','data-accent-color':i,'data-gray-color':x,'data-has-background':S?'true':'false','data-panel-background':c,'data-radius':u,'data-scaling':d,ref:t,...b,className:ig('radix-themes',{light:'light'===l,dark:'dark'===l},b.className)}))}))
Wg.displayName='ThemeImpl'
const Ug=e=>{if(!p.isValidElement(e))throw Error(`Expected a single React Element child, but got: ${p.Children.toArray(e).map((e=>'object'==typeof e&&'type'in e&&'string'==typeof e.type?e.type:typeof e)).join(', ')}`)
return e}
p.forwardRef((({children:e,...t},n)=>p.createElement(Za,{...t,ref:n,asChild:!0},Ug(e)))).displayName='AlertDialog.Trigger',p.forwardRef((({align:e,...t},n)=>{const{align:r,...a}=dg,{className:o}=Tg({align:e},{align:r}),{className:l,forceMount:i,container:s,...c}=Tg(t,a)
return p.createElement(Ja,{container:s,forceMount:i},p.createElement(Hg,{asChild:!0},p.createElement(eo,{className:'rt-BaseDialogOverlay rt-AlertDialogOverlay'},p.createElement('div',{className:'rt-BaseDialogScroll rt-AlertDialogScroll'},p.createElement('div',{className:`rt-BaseDialogScrollPadding rt-AlertDialogScrollPadding ${o}`},p.createElement(to,{...c,ref:n,className:ig('rt-BaseDialogContent','rt-AlertDialogContent',l)}))))))})).displayName='AlertDialog.Content',p.forwardRef(((e,t)=>p.createElement(ao,{asChild:!0},p.createElement(Lg,{size:'5',mb:'3',trim:'start',...e,asChild:!1,ref:t})))).displayName='AlertDialog.Title',p.forwardRef(((e,t)=>p.createElement(oo,{asChild:!0},p.createElement(jg,{as:'p',size:'3',...e,asChild:!1,ref:t})))).displayName='AlertDialog.Description',p.forwardRef((({children:e,...t},n)=>p.createElement(no,{...t,ref:n,asChild:!0},Ug(e)))).displayName='AlertDialog.Action',p.forwardRef((({children:e,...t},n)=>p.createElement(ro,{...t,ref:n,asChild:!0},Ug(e)))).displayName='AlertDialog.Cancel'
const Kg={...sg,size:{type:'enum',className:'rt-r-size',values:['1','2','3','4','5','6','7','8','9'],default:'3',responsive:!0},variant:{type:'enum',className:'rt-variant',values:['solid','soft'],default:'soft'},...mg,...hg,...Og,fallback:{type:'ReactNode',required:!0}}
function Gg(e,t){const{asChild:n,children:r}=e
if(!n)return'function'==typeof t?t(r):t
const a=p.Children.only(r)
return p.cloneElement(a,{children:'function'==typeof t?t(a.props.children):t})}p.forwardRef(((e,t)=>{const{asChild:n,children:r,className:a,style:o,color:l,radius:i,...s}=Tg(e,Kg,_g)
return p.createElement(go,{'data-accent-color':l,'data-radius':i,className:ig('rt-reset','rt-AvatarRoot',a),style:o,asChild:n},Gg({asChild:n,children:r},p.createElement(qg,{ref:t,...s})))})).displayName='Avatar'
const qg=p.forwardRef((({fallback:e,...t},n)=>{const[r,a]=p.useState('idle')
return p.createElement(p.Fragment,null,'idle'===r||'loading'===r?p.createElement('span',{className:'rt-AvatarFallback'}):null,'error'===r?p.createElement(bo,{className:ig('rt-AvatarFallback',{'rt-one-letter':'string'==typeof e&&1===e.length,'rt-two-letters':'string'==typeof e&&2===e.length}),delayMs:0},e):null,p.createElement(yo,{ref:n,className:'rt-AvatarImage',...t,onLoadingStatusChange:e=>{var n
null==(n=t.onLoadingStatusChange)||n.call(t,e),a(e)}}))}))
qg.displayName='AvatarImpl'
const Yg={...sg,size:{type:'enum',className:'rt-r-size',values:['1','2','3'],default:'1',responsive:!0},variant:{type:'enum',className:'rt-variant',values:['solid','soft','surface','outline'],default:'soft'},...mg,...hg,...Og}
p.forwardRef(((e,t)=>{const{asChild:n,className:r,color:a,radius:o,...l}=Tg(e,Yg,_g),i=n?gn:'span'
return p.createElement(i,{'data-accent-color':a,'data-radius':o,...l,ref:t,className:ig('rt-reset','rt-Badge',r)})})).displayName='Badge',p.forwardRef(((e,t)=>{const{asChild:n,children:r,className:a,...o}=e,l=n?gn:'blockquote'
return p.createElement(jg,{asChild:!0,...o,ref:t,className:ig('rt-Blockquote',a)},p.createElement(l,null,r))})).displayName='Blockquote'
const Xg=gn,Qg={as:{type:'enum',values:['div','span'],default:'div'},...sg,display:{type:'enum',className:'rt-r-display',values:['none','inline','inline-block','block'],responsive:!0}},Zg=['0','1','2','3','4','5','6','7','8','9'],Jg={p:{type:'enum | string',className:'rt-r-p',customProperties:['--p'],values:Zg,responsive:!0},px:{type:'enum | string',className:'rt-r-px',customProperties:['--pl','--pr'],values:Zg,responsive:!0},py:{type:'enum | string',className:'rt-r-py',customProperties:['--pt','--pb'],values:Zg,responsive:!0},pt:{type:'enum | string',className:'rt-r-pt',customProperties:['--pt'],values:Zg,responsive:!0},pr:{type:'enum | string',className:'rt-r-pr',customProperties:['--pr'],values:Zg,responsive:!0},pb:{type:'enum | string',className:'rt-r-pb',customProperties:['--pb'],values:Zg,responsive:!0},pl:{type:'enum | string',className:'rt-r-pl',customProperties:['--pl'],values:Zg,responsive:!0}},ey=['visible','hidden','clip','scroll','auto'],ty=['0','1','2','3','4','5','6','7','8','9','-1','-2','-3','-4','-5','-6','-7','-8','-9'],ny={...Jg,...cg,...ug,position:{type:'enum',className:'rt-r-position',values:['static','relative','absolute','fixed','sticky'],responsive:!0},inset:{type:'enum | string',className:'rt-r-inset',customProperties:['--inset'],values:ty,responsive:!0},top:{type:'enum | string',className:'rt-r-top',customProperties:['--top'],values:ty,responsive:!0},right:{type:'enum | string',className:'rt-r-right',customProperties:['--right'],values:ty,responsive:!0},bottom:{type:'enum | string',className:'rt-r-bottom',customProperties:['--bottom'],values:ty,responsive:!0},left:{type:'enum | string',className:'rt-r-left',customProperties:['--left'],values:ty,responsive:!0},overflow:{type:'enum',className:'rt-r-overflow',values:ey,responsive:!0},overflowX:{type:'enum',className:'rt-r-ox',values:ey,responsive:!0},overflowY:{type:'enum',className:'rt-r-oy',values:ey,responsive:!0},flexBasis:{type:'string',className:'rt-r-fb',customProperties:['--flex-basis'],responsive:!0},flexShrink:{type:'enum | string',className:'rt-r-fs',customProperties:['--flex-shrink'],values:['0','1'],responsive:!0},flexGrow:{type:'enum | string',className:'rt-r-fg',customProperties:['--flex-grow'],values:['0','1'],responsive:!0},gridArea:{type:'string',className:'rt-r-ga',customProperties:['--grid-area'],responsive:!0},gridColumn:{type:'string',className:'rt-r-gc',customProperties:['--grid-column'],responsive:!0},gridColumnStart:{type:'string',className:'rt-r-gcs',customProperties:['--grid-column-start'],responsive:!0},gridColumnEnd:{type:'string',className:'rt-r-gce',customProperties:['--grid-column-end'],responsive:!0},gridRow:{type:'string',className:'rt-r-gr',customProperties:['--grid-row'],responsive:!0},gridRowStart:{type:'string',className:'rt-r-grs',customProperties:['--grid-row-start'],responsive:!0},gridRowEnd:{type:'string',className:'rt-r-gre',customProperties:['--grid-row-end'],responsive:!0}},ry=p.forwardRef(((e,t)=>{const{className:n,asChild:r,as:a='div',...o}=Tg(e,Qg,ny,_g)
return p.createElement(r?Xg:a,{...o,ref:t,className:ig('rt-Box',n)})}))
ry.displayName='Box'
const ay={...sg,size:{type:'enum',className:'rt-r-size',values:['1','2','3','4'],default:'2',responsive:!0},variant:{type:'enum',className:'rt-variant',values:['classic','solid','soft','surface','outline','ghost'],default:'solid'},...mg,...hg,...Og,loading:{type:'boolean',className:'rt-loading',default:!1}},oy=['0','1','2','3','4','5','6','7','8','9'],ly={gap:{type:'enum | string',className:'rt-r-gap',customProperties:['--gap'],values:oy,responsive:!0},gapX:{type:'enum | string',className:'rt-r-cg',customProperties:['--column-gap'],values:oy,responsive:!0},gapY:{type:'enum | string',className:'rt-r-rg',customProperties:['--row-gap'],values:oy,responsive:!0}},iy={as:{type:'enum',values:['div','span'],default:'div'},...sg,display:{type:'enum',className:'rt-r-display',values:['none','inline-flex','flex'],responsive:!0},direction:{type:'enum',className:'rt-r-fd',values:['row','column','row-reverse','column-reverse'],responsive:!0},align:{type:'enum',className:'rt-r-ai',values:['start','center','end','baseline','stretch'],responsive:!0},justify:{type:'enum',className:'rt-r-jc',values:['start','center','end','between'],parseValue:function(e){return'between'===e?'space-between':e},responsive:!0},wrap:{type:'enum',className:'rt-r-fw',values:['nowrap','wrap','wrap-reverse'],responsive:!0},...ly},sy=p.forwardRef(((e,t)=>{const{className:n,asChild:r,as:a='div',...o}=Tg(e,iy,ny,_g)
return p.createElement(r?Xg:a,{...o,ref:t,className:ig('rt-Flex',n)})}))
sy.displayName='Flex'
const cy={size:{type:'enum',className:'rt-r-size',values:['1','2','3'],default:'2',responsive:!0},loading:{type:'boolean',default:!0}},uy=p.forwardRef(((e,t)=>{const{className:n,children:r,loading:a,...o}=Tg(e,cy,_g)
if(!a)return r
const l=p.createElement('span',{...o,ref:t,className:ig('rt-Spinner',n)},p.createElement('span',{className:'rt-SpinnerLeaf'}),p.createElement('span',{className:'rt-SpinnerLeaf'}),p.createElement('span',{className:'rt-SpinnerLeaf'}),p.createElement('span',{className:'rt-SpinnerLeaf'}),p.createElement('span',{className:'rt-SpinnerLeaf'}),p.createElement('span',{className:'rt-SpinnerLeaf'}),p.createElement('span',{className:'rt-SpinnerLeaf'}),p.createElement('span',{className:'rt-SpinnerLeaf'}))
return void 0===r?l:p.createElement(sy,{asChild:!0,position:'relative',align:'center',justify:'center'},p.createElement('span',null,p.createElement('span',{'aria-hidden':!0,style:{display:'contents',visibility:'hidden'},inert:void 0},r),p.createElement(sy,{asChild:!0,align:'center',justify:'center',position:'absolute',inset:'0'},p.createElement('span',null,l))))}))
uy.displayName='Spinner'
const dy=xn
function fy(e,t){if(void 0!==e)return'string'==typeof e?t(e):Object.fromEntries(Object.entries(e).map((([e,n])=>[e,t(n)])))}function py(e){return'3'===e?'3':'2'}function my(e){switch(e){case'1':return'1'
case'2':case'3':return'2'
case'4':return'3'}}const hy=p.forwardRef(((e,t)=>{const{size:n=ay.size.default}=e,{className:r,children:a,asChild:o,color:l,radius:i,disabled:s=e.loading,...c}=Tg(e,ay,_g),u=o?gn:'button'
return p.createElement(u,{'data-disabled':s||void 0,'data-accent-color':l,'data-radius':i,...c,ref:t,className:ig('rt-reset','rt-BaseButton',r),disabled:s},e.loading?p.createElement(p.Fragment,null,p.createElement('span',{style:{display:'contents',visibility:'hidden'},'aria-hidden':!0},a),p.createElement(dy,null,a),p.createElement(sy,{asChild:!0,align:'center',justify:'center',position:'absolute',inset:'0'},p.createElement('span',null,p.createElement(uy,{size:fy(n,my)})))):a)}))
hy.displayName='BaseButton'
const vy=p.forwardRef((({className:e,...t},n)=>p.createElement(hy,{...t,ref:n,className:ig('rt-Button',e)})))
vy.displayName='Button'
const gy={...sg,size:{type:'enum',className:'rt-r-size',values:['1','2','3'],default:'2',responsive:!0},variant:{type:'enum',className:'rt-variant',values:['soft','surface','outline'],default:'soft'},...mg,...hg},yy=p.createContext({})
p.forwardRef(((e,t)=>{const{size:n=gy.size.default}=e,{asChild:r,children:a,className:o,color:l,...i}=Tg(e,gy,_g),s=r?gn:'div'
return p.createElement(s,{'data-accent-color':l,...i,className:ig('rt-CalloutRoot',o),ref:t},p.createElement(yy.Provider,{value:p.useMemo((()=>({size:n})),[n])},a))})).displayName='Callout.Root',p.forwardRef((({className:e,...t},n)=>p.createElement('div',{...t,className:ig('rt-CalloutIcon',e),ref:n}))).displayName='Callout.Icon',p.forwardRef((({className:e,...t},n)=>{const{size:r}=p.useContext(yy)
return p.createElement(jg,{as:'p',size:fy(r,py),...t,asChild:!1,ref:n,className:ig('rt-CalloutText',e)})})).displayName='Callout.Text'
const by={...sg,size:{type:'enum',className:'rt-r-size',values:['1','2','3','4','5'],default:'1',responsive:!0},variant:{type:'enum',className:'rt-variant',values:['surface','classic','ghost'],default:'surface'}}
p.forwardRef(((e,t)=>{const{asChild:n,className:r,...a}=Tg(e,by,_g),o=n?gn:'div'
return p.createElement(o,{ref:t,...a,className:ig('rt-reset','rt-BaseCard','rt-Card',r)})})).displayName='Card'
var wy=yn
wy.dispatchDiscreteCustomEvent=bn,wy.Root=yn
const{useDirection:xy}=Bn,Cy='CheckboxGroup',[Sy,Ey]=En(Cy,[zi,Eo]),ky=zi(),Ny=Eo(),[Ry,Py]=Sy(Cy),Ty=p.forwardRef(((e,t)=>{const{__scopeCheckboxGroup:n,name:r,defaultValue:a,value:o,required:l=!1,disabled:i=!1,orientation:s,dir:c,loop:u=!0,onValueChange:d,...f}=e,m=ky(n),h=xy(c),[v=[],g]=Tn({prop:o,defaultProp:a,onChange:d}),y=p.useCallback((e=>g(((t=[])=>[...t,e]))),[g]),b=p.useCallback((e=>g(((t=[])=>t.filter((t=>t!==e))))),[g])
return p.createElement(Ry,{scope:n,name:r,required:l,disabled:i,value:v,onItemCheck:y,onItemUncheck:b},p.createElement(Gi,{asChild:!0,...m,orientation:s,dir:h,loop:u},p.createElement(wy.div,{role:'group','data-disabled':i?'':void 0,dir:h,...f,ref:t})))}))
Ty.displayName=Cy
const My='CheckboxGroupItem',_y=p.forwardRef(((e,t)=>{var n
const{__scopeCheckboxGroup:r,disabled:a,...o}=e,l=Py(My,r),i=l.disabled||a,s=ky(r),c=Ny(r),u=fn(t,p.useRef(null)),d=null==(n=l.value)?void 0:n.includes(o.value)
return p.createElement(qi,{asChild:!0,...s,focusable:!i,active:d},p.createElement(Do,{name:l.name,disabled:i,required:l.required,checked:d,...c,...o,ref:u,onCheckedChange:t=>{t?l.onItemCheck(e.value):l.onItemUncheck(e.value)}}))}))
_y.displayName=My
const Ly=p.forwardRef(((e,t)=>{const{__scopeCheckboxGroup:n,...r}=e,a=Ny(n)
return p.createElement(jo,{...a,...r,ref:t})}))
Ly.displayName='CheckboxGroupIndicator'
const Dy=Ty,jy=_y,Iy=Ly,Ay={as:{type:'enum',values:['div','span'],default:'div'},...sg,display:{type:'enum',className:'rt-r-display',values:['none','inline-grid','grid'],responsive:!0},areas:{type:'string',className:'rt-r-gta',customProperties:['--grid-template-areas'],responsive:!0},columns:{type:'enum | string',className:'rt-r-gtc',customProperties:['--grid-template-columns'],values:['1','2','3','4','5','6','7','8','9'],parseValue:Oy,responsive:!0},rows:{type:'enum | string',className:'rt-r-gtr',customProperties:['--grid-template-rows'],values:['1','2','3','4','5','6','7','8','9'],parseValue:Oy,responsive:!0},flow:{type:'enum',className:'rt-r-gaf',values:['row','column','dense','row-dense','column-dense'],responsive:!0},align:{type:'enum',className:'rt-r-ai',values:['start','center','end','baseline','stretch'],responsive:!0},justify:{type:'enum',className:'rt-r-jc',values:['start','center','end','between'],parseValue:function(e){return'between'===e?'space-between':e},responsive:!0},...ly}
function Oy(e){return Ay.columns.values.includes(e)?e:(null==e?void 0:e.match(/^\d+$/))?`repeat(${e}, minmax(0, 1fr))`:e}const zy={...sg,size:{type:'enum',className:'rt-r-size',values:['1','2','3'],default:'2',responsive:!0},variant:{type:'enum',className:'rt-variant',values:['surface','classic'],default:'surface'},...pg,...hg,columns:{...Ay.columns,default:'repeat(auto-fit, minmax(200px, 1fr))'},gap:{...Ay.gap,default:'4'}},Fy={size:{type:'enum',className:'rt-r-size',values:['1','2','3'],default:'2',responsive:!0},variant:{type:'enum',className:'rt-variant',values:['classic','surface','soft'],default:'surface'},...pg,...hg},By=p.forwardRef(((e,t)=>{const{className:n,asChild:r,as:a='div',...o}=Tg(e,Ay,ny,_g)
return p.createElement(r?Xg:a,{...o,ref:t,className:ig('rt-Grid',n)})}))
By.displayName='Grid'
const $y=m.forwardRef(((e,t)=>m.createElement('svg',{width:'9',height:'9',viewBox:'0 0 9 9',fill:'currentcolor',xmlns:'http://www.w3.org/2000/svg',...e,ref:t},m.createElement('path',{fillRule:'evenodd',clipRule:'evenodd',d:'M0.75 4.5C0.75 4.08579 1.08579 3.75 1.5 3.75H7.5C7.91421 3.75 8.25 4.08579 8.25 4.5C8.25 4.91421 7.91421 5.25 7.5 5.25H1.5C1.08579 5.25 0.75 4.91421 0.75 4.5Z'}))))
$y.displayName='ThickDividerHorizontalIcon'
const Hy=m.forwardRef(((e,t)=>m.createElement('svg',{width:'9',height:'9',viewBox:'0 0 9 9',fill:'currentcolor',xmlns:'http://www.w3.org/2000/svg',...e,ref:t},m.createElement('path',{fillRule:'evenodd',clipRule:'evenodd',d:'M8.53547 0.62293C8.88226 0.849446 8.97976 1.3142 8.75325 1.66099L4.5083 8.1599C4.38833 8.34356 4.19397 8.4655 3.9764 8.49358C3.75883 8.52167 3.53987 8.45309 3.3772 8.30591L0.616113 5.80777C0.308959 5.52987 0.285246 5.05559 0.563148 4.74844C0.84105 4.44128 1.31533 4.41757 1.62249 4.69547L3.73256 6.60459L7.49741 0.840706C7.72393 0.493916 8.18868 0.396414 8.53547 0.62293Z'}))))
Hy.displayName='ThickCheckIcon'
const Vy=m.forwardRef(((e,t)=>m.createElement('svg',{width:'9',height:'9',viewBox:'0 0 9 9',fill:'currentcolor',xmlns:'http://www.w3.org/2000/svg',...e,ref:t},m.createElement('path',{d:'M0.135232 3.15803C0.324102 2.95657 0.640521 2.94637 0.841971 3.13523L4.5 6.56464L8.158 3.13523C8.3595 2.94637 8.6759 2.95657 8.8648 3.15803C9.0536 3.35949 9.0434 3.67591 8.842 3.86477L4.84197 7.6148C4.64964 7.7951 4.35036 7.7951 4.15803 7.6148L0.158031 3.86477C-0.0434285 3.67591 -0.0536285 3.35949 0.135232 3.15803Z'}))))
Vy.displayName='ChevronDownIcon'
const Wy=m.forwardRef(((e,t)=>m.createElement('svg',{width:'9',height:'9',viewBox:'0 0 9 9',fill:'currentcolor',xmlns:'http://www.w3.org/2000/svg',...e,ref:t},m.createElement('path',{fillRule:'evenodd',clipRule:'evenodd',d:'M3.23826 0.201711C3.54108 -0.0809141 4.01567 -0.0645489 4.29829 0.238264L7.79829 3.98826C8.06724 4.27642 8.06724 4.72359 7.79829 5.01174L4.29829 8.76174C4.01567 9.06455 3.54108 9.08092 3.23826 8.79829C2.93545 8.51567 2.91909 8.04108 3.20171 7.73826L6.22409 4.5L3.20171 1.26174C2.91909 0.958928 2.93545 0.484337 3.23826 0.201711Z'}))))
Wy.displayName='ThickChevronRightIcon'
const Uy='CheckboxCards',[Ky]=En(Uy,[Ey]),Gy=Ey(),[qy,Yy]=Ky(Uy)
p.forwardRef(((e,t)=>{const{__scopeCheckboxCards:n,className:r,color:a,...o}=Tg(e,zy,_g),l=Gy(n)
return p.createElement(qy,{scope:n,size:e.size,highContrast:e.highContrast},p.createElement(By,{asChild:!0},p.createElement(Dy,{...l,'data-accent-color':a,...o,ref:t,className:ig('rt-CheckboxCardsRoot',r)})))})).displayName='CheckboxCards.Root',p.forwardRef((({__scopeCheckboxCards:e,children:t,className:n,style:r,...a},o)=>{const l=Yy('CheckboxCardsItem',e),i=Gy(e),{className:s}=Tg({size:null==l?void 0:l.size,variant:'surface',highContrast:null==l?void 0:l.highContrast},Fy)
return p.createElement('label',{className:ig('rt-BaseCard','rt-CheckboxCardsItem',n),style:r},t,p.createElement(jy,{...i,...a,ref:o,className:ig('rt-reset','rt-BaseCheckboxRoot','rt-CheckboxCardCheckbox',s)},p.createElement(Iy,{...i,asChild:!0,className:'rt-BaseCheckboxIndicator'},p.createElement(Hy,null))))})).displayName='CheckboxCards.Item'
const Xy={...sg,...Fy},Qy='CheckboxGroup',[Zy]=En(Qy,[Ey]),Jy=Ey(),[eb,tb]=Zy(Qy)
p.forwardRef((({color:e=Xy.color.default,highContrast:t=Xy.highContrast.default,size:n=Xy.size.default,variant:r=Xy.variant.default,...a},o)=>{const{__scopeCheckboxGroup:l,className:i,...s}=Tg(a,_g),c=Jy(l)
return p.createElement(eb,{scope:l,color:e,size:n,highContrast:t,variant:r},p.createElement(Dy,{...c,...s,ref:o,className:ig('rt-CheckboxGroupRoot',i)}))})).displayName='CheckboxGroup.Root',p.forwardRef(((e,t)=>{const{__scopeCheckboxGroup:n,children:r,className:a,style:o,...l}=e,{size:i}=tb('CheckboxGroupItem',n)
return r?p.createElement(jg,{as:'label',size:i,className:ig('rt-CheckboxGroupItem',a),style:o},p.createElement(nb,{__scopeCheckboxGroup:n,...l,ref:t}),r&&p.createElement('span',{className:'rt-CheckboxGroupItemInner'},r)):p.createElement(nb,{__scopeCheckboxGroup:n,...l,ref:t,className:a,style:o})})).displayName='CheckboxGroup.Item'
const nb=p.forwardRef((({__scopeCheckboxGroup:e,...t},n)=>{const r=tb('CheckboxGroupItemCheckbox',e),a=Jy(e),{color:o,className:l}=Tg({...t,...r},Xy,_g)
return p.createElement(jy,{...a,'data-accent-color':o,...t,ref:n,className:ig('rt-reset','rt-BaseCheckboxRoot','rt-CheckboxGroupItemCheckbox',l)},p.createElement(Iy,{...a,asChild:!0,className:'rt-BaseCheckboxIndicator'},p.createElement(Hy,null)))}))
nb.displayName='CheckboxGroup.ItemCheckbox',p.forwardRef(((e,t)=>{const{className:n,color:r,checked:a,defaultChecked:o,onCheckedChange:l,...i}=Tg(e,Fy,_g),[s,c]=Tn({prop:a,defaultProp:o,onChange:l})
return p.createElement(Do,{'data-accent-color':r,...i,defaultChecked:o,checked:s,onCheckedChange:c,asChild:!1,ref:t,className:ig('rt-reset','rt-BaseCheckboxRoot','rt-CheckboxRoot',n)},p.createElement(jo,{asChild:!0,className:'rt-BaseCheckboxIndicator rt-CheckboxIndicator'},p.createElement('indeterminate'===s?$y:Hy,null)))})).displayName='Checkbox'
const rb={...sg,size:{type:'enum',className:'rt-r-size',values:['1','2','3','4','5','6','7','8','9'],responsive:!0},variant:{type:'enum',className:'rt-variant',values:['solid','soft','outline','ghost'],default:'soft'},...wg,...mg,...hg,...bg,...yg}
p.forwardRef(((e,t)=>{const{asChild:n,className:r,color:a,...o}=Tg(e,rb,_g),l='ghost'===e.variant?a||void 0:a,i=n?gn:'code'
return p.createElement(i,{'data-accent-color':l,...o,ref:t,className:ig('rt-reset','rt-Code',r)})})).displayName='Code'
const ab={...sg,size:{type:'enum',className:'rt-r-size',values:['1','2','3','4'],default:'4',responsive:!0},display:{type:'enum',className:'rt-r-display',values:['none','initial'],parseValue:function(e){return'initial'===e?'flex':e},responsive:!0},align:{type:'enum',className:'rt-r-ai',values:['left','center','right'],parseValue:function(e){return'left'===e?'start':'right'===e?'end':e},responsive:!0}}
p.forwardRef((({width:e,minWidth:t,maxWidth:n,height:r,minHeight:a,maxHeight:o,...l},i)=>{const{asChild:s,children:c,className:u,...d}=Tg(l,ab,ny,_g),{className:f,style:m}=Tg({width:e,minWidth:t,maxWidth:n,height:r,minHeight:a,maxHeight:o},cg,ug),h=s?gn:'div'
return p.createElement(h,{...d,ref:i,className:ig('rt-Container',u)},Gg({asChild:s,children:c},(e=>p.createElement('div',{className:ig('rt-ContainerInner',f),style:m},e))))})).displayName='Container'
const ob={...sg,size:{values:['1','2','3'],default:'1'},...Og,scrollbars:{default:'both'}},lb=_g.m.values,ib=p.forwardRef(((e,t)=>{const{rest:n,...r}=function(e){const{m:t,mx:n,my:r,mt:a,mr:o,mb:l,ml:i,...s}=e
return{m:t,mx:n,my:r,mt:a,mr:o,mb:l,ml:i,rest:s}}(e),[a,o]=function(e){const[t,n]=kg({className:'rt-r-m',customProperties:['--margin'],propValues:lb,value:e.m}),[r,a]=kg({className:'rt-r-mx',customProperties:['--margin-left','--margin-right'],propValues:lb,value:e.mx}),[o,l]=kg({className:'rt-r-my',customProperties:['--margin-top','--margin-bottom'],propValues:lb,value:e.my}),[i,s]=kg({className:'rt-r-mt',customProperties:['--margin-top'],propValues:lb,value:e.mt}),[c,u]=kg({className:'rt-r-mr',customProperties:['--margin-right'],propValues:lb,value:e.mr}),[d,f]=kg({className:'rt-r-mb',customProperties:['--margin-bottom'],propValues:lb,value:e.mb}),[p,m]=kg({className:'rt-r-ml',customProperties:['--margin-left'],propValues:lb,value:e.ml})
return[ig(t,r,o,i,c,d,p),Pg(n,a,l,s,u,f,m)]}(r),{asChild:l,children:i,className:s,style:c,type:u,scrollHideDelay:d=('scroll'!==u?0:void 0),dir:f,size:m=ob.size.default,radius:h=ob.radius.default,scrollbars:v=ob.scrollbars.default,...g}=n
return p.createElement(Ap,{type:u,scrollHideDelay:d,className:ig('rt-ScrollAreaRoot',a,s),style:Pg(o,c),asChild:l},Gg({asChild:l,children:i},(e=>p.createElement(p.Fragment,null,p.createElement(Op,{...g,ref:t,className:'rt-ScrollAreaViewport'},e),p.createElement('div',{className:'rt-ScrollAreaViewportFocusRing'}),'vertical'!==v?p.createElement(zp,{'data-radius':h,orientation:'horizontal',className:ig('rt-ScrollAreaScrollbar',Ng({className:'rt-r-size',value:m,propValues:ob.size.values}))},p.createElement(Fp,{className:'rt-ScrollAreaThumb'})):null,'horizontal'!==v?p.createElement(zp,{'data-radius':h,orientation:'vertical',className:ig('rt-ScrollAreaScrollbar',Ng({className:'rt-r-size',value:m,propValues:ob.size.values}))},p.createElement(Fp,{className:'rt-ScrollAreaThumb'})):null,'both'===v?p.createElement(Bp,{className:'rt-ScrollAreaCorner'}):null))))}))
ib.displayName='ScrollArea'
const sb={size:{type:'enum',className:'rt-r-size',values:['1','2'],default:'2',responsive:!0},variant:{type:'enum',className:'rt-variant',values:['solid','soft'],default:'solid'},...pg,...hg},cb={...sg,...pg},ub={...pg},db={...pg}
p.forwardRef((({children:e,...t},n)=>p.createElement(Ic,{...t,ref:n,asChild:!0},Ug(e)))).displayName='ContextMenu.Trigger'
const fb=p.createContext({})
p.forwardRef(((e,t)=>{const n=$g(),{size:r=sb.size.default,variant:a=sb.variant.default,highContrast:o=sb.highContrast.default}=e,{className:l,children:i,color:s,container:c,forceMount:u,...d}=Tg(e,sb),f=s||n.accentColor
return p.createElement(Ac,{container:c,forceMount:u},p.createElement(Hg,{asChild:!0},p.createElement(Oc,{'data-accent-color':f,alignOffset:4*-Number(r),collisionPadding:10,...d,asChild:!1,ref:t,className:ig('rt-PopperContent','rt-BaseMenuContent','rt-ContextMenuContent',l)},p.createElement(ib,{type:'auto'},p.createElement('div',{className:ig('rt-BaseMenuViewport','rt-ContextMenuViewport')},p.createElement(fb.Provider,{value:p.useMemo((()=>({size:r,variant:a,color:f,highContrast:o})),[r,a,f,o])},i))))))})).displayName='ContextMenu.Content',p.forwardRef((({className:e,...t},n)=>p.createElement(Fc,{...t,asChild:!1,ref:n,className:ig('rt-BaseMenuLabel','rt-ContextMenuLabel',e)}))).displayName='ContextMenu.Label',p.forwardRef(((e,t)=>{const{className:n,children:r,color:a=cb.color.default,shortcut:o,...l}=e
return p.createElement(Bc,{'data-accent-color':a,...l,ref:t,className:ig('rt-reset','rt-BaseMenuItem','rt-ContextMenuItem',n)},p.createElement(hn,null,r),o&&p.createElement('div',{className:'rt-BaseMenuShortcut rt-ContextMenuShortcut'},o))})).displayName='ContextMenu.Item',p.forwardRef((({className:e,...t},n)=>p.createElement(zc,{...t,asChild:!1,ref:n,className:ig('rt-BaseMenuGroup','rt-ContextMenuGroup',e)}))).displayName='ContextMenu.Group',p.forwardRef((({className:e,...t},n)=>p.createElement(Hc,{...t,asChild:!1,ref:n,className:ig('rt-BaseMenuRadioGroup','rt-ContextMenuRadioGroup',e)}))).displayName='ContextMenu.RadioGroup',p.forwardRef(((e,t)=>{const{children:n,className:r,color:a=db.color.default,...o}=e
return p.createElement(Vc,{...o,asChild:!1,ref:t,'data-accent-color':a,className:ig('rt-BaseMenuItem','rt-BaseMenuRadioItem','rt-ContextMenuItem','rt-ContextMenuRadioItem',r)},p.createElement(hn,null,n),p.createElement(Wc,{className:'rt-BaseMenuItemIndicator rt-ContextMenuItemIndicator'},p.createElement(Hy,{className:'rt-BaseMenuItemIndicatorIcon rt-ContextMenuItemIndicatorIcon'})))})).displayName='ContextMenu.RadioItem',p.forwardRef(((e,t)=>{const{children:n,className:r,shortcut:a,color:o=ub.color.default,...l}=e
return p.createElement($c,{...l,asChild:!1,ref:t,'data-accent-color':o,className:ig('rt-BaseMenuItem','rt-BaseMenuCheckboxItem','rt-ContextMenuItem','rt-ContextMenuCheckboxItem',r)},p.createElement(hn,null,n),p.createElement(Wc,{className:'rt-BaseMenuItemIndicator rt-ContextMenuItemIndicator'},p.createElement(Hy,{className:'rt-BaseMenuItemIndicatorIcon rt-ContextMenuItemIndicatorIcon'})),a&&p.createElement('div',{className:'rt-BaseMenuShortcut rt-ContextMenuShortcut'},a))})).displayName='ContextMenu.CheckboxItem',p.forwardRef(((e,t)=>{const{className:n,children:r,...a}=e
return p.createElement(Kc,{...a,asChild:!1,ref:t,className:ig('rt-BaseMenuItem','rt-BaseMenuSubTrigger','rt-ContextMenuItem','rt-ContextMenuSubTrigger',n)},r,p.createElement('div',{className:'rt-BaseMenuShortcut rt-ContextMenuShortcut'},p.createElement(Wy,{className:'rt-BaseMenuSubTriggerIcon rt-ContextMenuSubTriggerIcon'})))})).displayName='ContextMenu.SubTrigger',p.forwardRef(((e,t)=>{const{size:n,variant:r,color:a,highContrast:o}=p.useContext(fb),{className:l,children:i,container:s,forceMount:c,...u}=Tg({size:n,variant:r,color:a,highContrast:o,...e},sb)
return p.createElement(Ac,{container:s,forceMount:c},p.createElement(Hg,{asChild:!0},p.createElement(Gc,{'data-accent-color':a,alignOffset:4*-Number(n),sideOffset:1,collisionPadding:10,...u,asChild:!1,ref:t,className:ig('rt-PopperContent','rt-BaseMenuContent','rt-BaseMenuSubContent','rt-ContextMenuContent','rt-ContextMenuSubContent',l)},p.createElement(ib,{type:'auto'},p.createElement('div',{className:ig('rt-BaseMenuViewport','rt-ContextMenuViewport')},i)))))})).displayName='ContextMenu.SubContent',p.forwardRef((({className:e,...t},n)=>p.createElement(Uc,{...t,asChild:!1,ref:n,className:ig('rt-BaseMenuSeparator','rt-ContextMenuSeparator',e)}))).displayName='ContextMenu.Separator'
const pb={orientation:{type:'enum',className:'rt-r-orientation',values:['horizontal','vertical'],default:'horizontal',responsive:!0},size:{type:'enum',className:'rt-r-size',values:['1','2','3'],default:'2',responsive:!0},trim:{...vg.trim,className:'rt-r-trim'}},mb={align:{type:'enum',className:'rt-r-ai',values:['start','center','end','baseline','stretch'],responsive:!0}},hb={...cg,...pg,...hg}
p.forwardRef(((e,t)=>{const{className:n,...r}=Tg(e,pb,_g)
return p.createElement(jg,{asChild:!0},p.createElement('dl',{...r,ref:t,className:ig('rt-DataListRoot',n)}))})).displayName='DataList.Root',p.forwardRef(((e,t)=>{const{className:n,...r}=Tg(e,mb)
return p.createElement('div',{...r,ref:t,className:ig('rt-DataListItem',n)})})).displayName='DataList.Item',p.forwardRef(((e,t)=>{const{className:n,color:r,...a}=Tg(e,hb)
return p.createElement('dt',{...a,'data-accent-color':r,ref:t,className:ig('rt-DataListLabel',n)})})).displayName='DataList.Label',p.forwardRef((({children:e,className:t,...n},r)=>p.createElement('dd',{...n,ref:r,className:ig(t,'rt-DataListValue')},e))).displayName='DataList.Value',p.forwardRef((({children:e,...t},n)=>p.createElement(Ra,{...t,ref:n,asChild:!0},Ug(e)))).displayName='Dialog.Trigger',p.forwardRef((({align:e,...t},n)=>{const{align:r,...a}=dg,{className:o}=Tg({align:e},{align:r}),{className:l,forceMount:i,container:s,...c}=Tg(t,a)
return p.createElement(Pa,{container:s,forceMount:i},p.createElement(Hg,{asChild:!0},p.createElement(Ta,{className:'rt-BaseDialogOverlay rt-DialogOverlay'},p.createElement('div',{className:'rt-BaseDialogScroll rt-DialogScroll'},p.createElement('div',{className:`rt-BaseDialogScrollPadding rt-DialogScrollPadding ${o}`},p.createElement(Ma,{...c,ref:n,className:ig('rt-BaseDialogContent','rt-DialogContent',l)}))))))})).displayName='Dialog.Content',p.forwardRef(((e,t)=>p.createElement(_a,{asChild:!0},p.createElement(Lg,{size:'5',mb:'3',trim:'start',...e,asChild:!1,ref:t})))).displayName='Dialog.Title',p.forwardRef(((e,t)=>p.createElement(La,{asChild:!0},p.createElement(jg,{as:'p',size:'3',...e,asChild:!1,ref:t})))).displayName='Dialog.Description',p.forwardRef((({children:e,...t},n)=>p.createElement(Da,{...t,ref:n,asChild:!0},Ug(e)))).displayName='Dialog.Close',p.forwardRef((({children:e,...t},n)=>p.createElement(vu,{...t,ref:n,asChild:!0},Ug(e)))).displayName='DropdownMenu.Trigger'
const vb=p.createContext({})
p.forwardRef(((e,t)=>{const n=$g(),{size:r=sb.size.default,variant:a=sb.variant.default,highContrast:o=sb.highContrast.default}=e,{className:l,children:i,color:s,container:c,forceMount:u,...d}=Tg(e,sb),f=s||n.accentColor
return p.createElement(gu,{container:c,forceMount:u},p.createElement(Hg,{asChild:!0},p.createElement(yu,{'data-accent-color':f,align:'start',sideOffset:4,collisionPadding:10,...d,asChild:!1,ref:t,className:ig('rt-PopperContent','rt-BaseMenuContent','rt-DropdownMenuContent',l)},p.createElement(ib,{type:'auto'},p.createElement('div',{className:ig('rt-BaseMenuViewport','rt-DropdownMenuViewport')},p.createElement(vb.Provider,{value:p.useMemo((()=>({size:r,variant:a,color:f,highContrast:o})),[r,a,f,o])},i))))))})).displayName='DropdownMenu.Content',p.forwardRef((({className:e,...t},n)=>p.createElement(wu,{...t,asChild:!1,ref:n,className:ig('rt-BaseMenuLabel','rt-DropdownMenuLabel',e)}))).displayName='DropdownMenu.Label',p.forwardRef(((e,t)=>{const{className:n,children:r,color:a=cb.color.default,shortcut:o,...l}=e
return p.createElement(xu,{'data-accent-color':a,...l,ref:t,className:ig('rt-reset','rt-BaseMenuItem','rt-DropdownMenuItem',n)},p.createElement(hn,null,r),o&&p.createElement('div',{className:'rt-BaseMenuShortcut rt-DropdownMenuShortcut'},o))})).displayName='DropdownMenu.Item',p.forwardRef((({className:e,...t},n)=>p.createElement(bu,{...t,asChild:!1,ref:n,className:ig('rt-BaseMenuGroup','rt-DropdownMenuGroup',e)}))).displayName='DropdownMenu.Group',p.forwardRef((({className:e,...t},n)=>p.createElement(Su,{...t,asChild:!1,ref:n,className:ig('rt-BaseMenuRadioGroup','rt-DropdownMenuRadioGroup',e)}))).displayName='DropdownMenu.RadioGroup',p.forwardRef(((e,t)=>{const{children:n,className:r,color:a=db.color.default,...o}=e
return p.createElement(Eu,{...o,asChild:!1,ref:t,'data-accent-color':a,className:ig('rt-BaseMenuItem','rt-BaseMenuRadioItem','rt-DropdownMenuItem','rt-DropdownMenuRadioItem',r)},n,p.createElement(ku,{className:'rt-BaseMenuItemIndicator rt-DropdownMenuItemIndicator'},p.createElement(Hy,{className:'rt-BaseMenuItemIndicatorIcon rt-DropdownMenuItemIndicatorIcon'})))})).displayName='DropdownMenu.RadioItem',p.forwardRef(((e,t)=>{const{children:n,className:r,shortcut:a,color:o=ub.color.default,...l}=e
return p.createElement(Cu,{...l,asChild:!1,ref:t,'data-accent-color':o,className:ig('rt-BaseMenuItem','rt-BaseMenuCheckboxItem','rt-DropdownMenuItem','rt-DropdownMenuCheckboxItem',r)},n,p.createElement(ku,{className:'rt-BaseMenuItemIndicator rt-DropdownMenuItemIndicator'},p.createElement(Hy,{className:'rt-BaseMenuItemIndicatorIcon rt-ContextMenuItemIndicatorIcon'})),a&&p.createElement('div',{className:'rt-BaseMenuShortcut rt-DropdownMenuShortcut'},a))})).displayName='DropdownMenu.CheckboxItem',p.forwardRef(((e,t)=>{const{className:n,children:r,...a}=e
return p.createElement(Ru,{...a,asChild:!1,ref:t,className:ig('rt-BaseMenuItem','rt-BaseMenuSubTrigger','rt-DropdownMenuItem','rt-DropdownMenuSubTrigger',n)},r,p.createElement('div',{className:'rt-BaseMenuShortcut rt-DropdownMenuShortcut'},p.createElement(Wy,{className:'rt-BaseMenuSubTriggerIcon rt-DropdownMenuSubtriggerIcon'})))})).displayName='DropdownMenu.SubTrigger',p.forwardRef(((e,t)=>{const{size:n,variant:r,color:a,highContrast:o}=p.useContext(vb),{className:l,children:i,container:s,forceMount:c,...u}=Tg({size:n,variant:r,color:a,highContrast:o,...e},sb)
return p.createElement(gu,{container:s,forceMount:c},p.createElement(Hg,{asChild:!0},p.createElement(Pu,{'data-accent-color':a,alignOffset:4*-Number(n),sideOffset:1,collisionPadding:10,...u,asChild:!1,ref:t,className:ig('rt-PopperContent','rt-BaseMenuContent','rt-BaseMenuSubContent','rt-DropdownMenuContent','rt-DropdownMenuSubContent',l)},p.createElement(ib,{type:'auto'},p.createElement('div',{className:ig('rt-BaseMenuViewport','rt-DropdownMenuViewport')},i)))))})).displayName='DropdownMenu.SubContent',p.forwardRef((({className:e,...t},n)=>p.createElement(Nu,{...t,asChild:!1,ref:n,className:ig('rt-BaseMenuSeparator','rt-DropdownMenuSeparator',e)}))).displayName='DropdownMenu.Separator'
const gb={...sg,...bg,...yg}
p.forwardRef(((e,t)=>{const{asChild:n,className:r,...a}=Tg(e,gb),o=n?gn:'em'
return p.createElement(o,{...a,ref:t,className:ig('rt-Em',r)})})).displayName='Em'
const yb={...sg,size:{type:'enum',className:'rt-r-size',values:['1','2','3'],default:'2',responsive:!0},width:cg.width,minWidth:cg.minWidth,maxWidth:{...cg.maxWidth,default:'480px'},...ug}
p.forwardRef((({children:e,className:t,...n},r)=>p.createElement(Uu,{ref:r,className:ig('rt-HoverCardTrigger',t),...n,asChild:!0},Ug(e)))).displayName='HoverCard.Trigger',p.forwardRef(((e,t)=>{const{className:n,forceMount:r,container:a,...o}=Tg(e,yb)
return p.createElement(Ku,{container:a,forceMount:r},p.createElement(Hg,{asChild:!0},p.createElement(Gu,{align:'start',sideOffset:8,collisionPadding:10,...o,ref:t,className:ig('rt-PopperContent','rt-HoverCardContent',n)})))})).displayName='HoverCard.Content'
const bb=p.forwardRef((({className:e,...t},n)=>p.createElement(hy,{...t,ref:n,className:ig('rt-IconButton',e)})))
bb.displayName='IconButton'
const wb=['current','0'],xb={...sg,side:{type:'enum',className:'rt-r-side',values:['all','x','y','top','bottom','left','right'],default:'all',responsive:!0},clip:{type:'enum',className:'rt-r-clip',values:['border-box','padding-box'],default:'border-box',responsive:!0},p:{type:'enum',className:'rt-r-p',values:wb,parseValue:Cb,responsive:!0},px:{type:'enum',className:'rt-r-px',values:wb,parseValue:Cb,responsive:!0},py:{type:'enum',className:'rt-r-py',values:wb,parseValue:Cb,responsive:!0},pt:{type:'enum',className:'rt-r-pt',values:wb,parseValue:Cb,responsive:!0},pr:{type:'enum',className:'rt-r-pr',values:wb,parseValue:Cb,responsive:!0},pb:{type:'enum',className:'rt-r-pb',values:wb,parseValue:Cb,responsive:!0},pl:{type:'enum',className:'rt-r-pl',values:wb,parseValue:Cb,responsive:!0}}
function Cb(e){return'current'===e?'inset':e}p.forwardRef(((e,t)=>{const{asChild:n,className:r,...a}=Tg(e,xb,_g),o=n?gn:'div'
return p.createElement(o,{...a,ref:t,className:ig('rt-Inset',r)})})).displayName='Inset'
const Sb={...sg,size:{type:'enum',className:'rt-r-size',values:['1','2','3','4','5','6','7','8','9'],responsive:!0}},Eb=p.forwardRef(((e,t)=>{const{asChild:n,className:r,...a}=Tg(e,Sb,_g),o=n?gn:'kbd'
return p.createElement(o,{...a,ref:t,className:ig('rt-reset','rt-Kbd',r)})}))
Eb.displayName='Kbd'
const kb={...sg,size:{type:'enum',className:'rt-r-size',values:['1','2','3','4','5','6','7','8','9'],responsive:!0},...wg,...vg,...bg,...yg,underline:{type:'enum',className:'rt-underline',values:['auto','always','hover','none'],default:'auto'},...mg,...hg}
p.forwardRef(((e,t)=>{const{children:n,className:r,color:a,asChild:o,...l}=Tg(e,kb)
return p.createElement(jg,{...l,'data-accent-color':a,ref:t,asChild:!0,className:ig('rt-reset','rt-Link',r)},o?n:p.createElement('a',null,n))})).displayName='Link'
const Nb={...sg,size:{type:'enum',className:'rt-r-size',values:['1','2','3','4'],default:'2',responsive:!0},width:cg.width,minWidth:cg.minWidth,maxWidth:{...cg.maxWidth,default:'480px'},...ug},Rb=e=>p.createElement(df,{...e})
Rb.displayName='Popover.Root'
const Pb=p.forwardRef((({children:e,...t},n)=>p.createElement(pf,{...t,ref:n,asChild:!0},Ug(e))))
Pb.displayName='Popover.Trigger'
const Tb=p.forwardRef(((e,t)=>{const{className:n,forceMount:r,container:a,...o}=Tg(e,Nb)
return p.createElement(mf,{container:a,forceMount:r},p.createElement(Hg,{asChild:!0},p.createElement(hf,{align:'start',sideOffset:8,collisionPadding:10,...o,ref:t,className:ig('rt-PopperContent','rt-PopoverContent',n)})))}))
Tb.displayName='Popover.Content',p.forwardRef((({children:e,...t},n)=>p.createElement(vf,{...t,ref:n,asChild:!0},Ug(e)))).displayName='Popover.Close',p.forwardRef((({children:e,...t},n)=>p.createElement(ff,{...t,ref:n}))).displayName='Popover.Anchor'
const Mb={size:{type:'enum',className:'rt-r-size',values:['1','2','3'],default:'2',responsive:!0},variant:{type:'enum',className:'rt-variant',values:['classic','surface','soft'],default:'surface'},...pg,...hg,...Og,duration:{type:'string'}}
p.forwardRef(((e,t)=>{const{className:n,style:r,color:a,radius:o,duration:l,...i}=Tg(e,Mb,_g)
return p.createElement(Mf,{'data-accent-color':a,'data-radius':o,ref:t,className:ig('rt-ProgressRoot',n),style:Pg({'--progress-duration':'value'in i?void 0:l,'--progress-value':'value'in i?i.value:void 0,'--progress-max':'max'in i?i.max:void 0},r),...i,asChild:!1},p.createElement(_f,{className:'rt-ProgressIndicator'}))})).displayName='Progress'
const _b={...sg,...bg,...yg}
p.forwardRef(((e,t)=>{const{asChild:n,className:r,...a}=Tg(e,_b),o=n?gn:'q'
return p.createElement(o,{...a,ref:t,className:ig('rt-Quote',r)})})).displayName='Quote'
const Lb={...sg,size:{type:'enum',className:'rt-r-size',values:['1','2','3'],default:'2',responsive:!0},variant:{type:'enum',className:'rt-variant',values:['surface','classic'],default:'surface'},...pg,...hg,columns:{...Ay.columns,default:'repeat(auto-fit, minmax(160px, 1fr))'},gap:{...Ay.gap,default:'4'}}
p.forwardRef(((e,t)=>{const{className:n,color:r,...a}=Tg(e,Lb,_g)
return p.createElement(By,{asChild:!0},p.createElement(Jf,{'data-accent-color':r,...a,ref:t,className:ig('rt-RadioCardsRoot',n)}))})).displayName='RadioCards.Root',p.forwardRef((({className:e,...t},n)=>p.createElement(ep,{...t,asChild:!1,ref:n,className:ig('rt-reset','rt-BaseCard','rt-RadioCardsItem',e)}))).displayName='RadioCards.Item'
const Db={...sg,size:{type:'enum',className:'rt-r-size',values:['1','2','3'],default:'2',responsive:!0},variant:{type:'enum',className:'rt-variant',values:['classic','surface','soft'],default:'surface'},...pg,...hg},jb='RadioGroup',[Ib]=En(jb,[Uf]),Ab=Uf(),[Ob,zb]=Ib(jb)
p.forwardRef((({color:e=Db.color.default,highContrast:t=Db.highContrast.default,size:n=Db.size.default,variant:r=Db.variant.default,...a},o)=>{const{__scopeRadioGroup:l,className:i,...s}=Tg(a,_g),c=Ab(l)
return p.createElement(Ob,{scope:l,color:e,highContrast:t,size:n,variant:r},p.createElement(Jf,{...c,...s,ref:o,className:ig('rt-RadioGroupRoot',i)}))})).displayName='RadioGroup.Root',p.forwardRef(((e,t)=>{const{__scopeRadioGroup:n,children:r,className:a,style:o,...l}=e,{size:i}=zb('RadioGroupItem',n)
return r?p.createElement(jg,{as:'label',size:i,className:ig('rt-RadioGroupItem',a),style:o},p.createElement(Fb,{__scopeRadioGroup:n,...l,ref:t}),r&&p.createElement('span',{className:'rt-RadioGroupItemInner'},r)):p.createElement(Fb,{__scopeRadioGroup:n,...l,ref:t,className:a,style:o})})).displayName='RadioGroup.Item'
const Fb=p.forwardRef((({__scopeRadioGroup:e,...t},n)=>{const r=zb('RadioGroupItemRadio',e),a=Ab(e),{color:o,className:l}=Tg({...t,...r},Db,_g)
return p.createElement(ep,{...a,'data-accent-color':o,...t,asChild:!1,ref:n,className:ig('rt-reset','rt-BaseRadioRoot',l)})}))
Fb.displayName='RadioGroup.ItemRadio'
const Bb={size:{type:'enum',className:'rt-r-size',values:['1','2','3'],default:'2',responsive:!0},variant:{type:'enum',className:'rt-variant',values:['classic','surface','soft'],default:'surface'},...pg,...hg}
p.forwardRef(((e,t)=>{const n=p.useRef(null),{className:r,color:a,onChange:o,onValueChange:l,...i}=Tg(e,Bb,_g)
return p.createElement('input',{type:'radio','data-accent-color':a,...i,onChange:Rn(o,(e=>null==l?void 0:l(e.currentTarget.value))),ref:dn(n,t),className:ig('rt-reset','rt-BaseRadioRoot','rt-RadioRoot',r)})})).displayName='Radio',p.forwardRef((({className:e,children:t,...n},r)=>p.createElement(gn,{...n,ref:r,className:ig('rt-reset',e)},Ug(t)))).displayName='Reset'
const $b={disabled:{type:'boolean',className:'disabled',default:!1},size:{type:'enum',className:'rt-r-size',values:['1','2','3'],default:'2',responsive:!0},variant:{type:'enum',className:'rt-variant',values:['surface','classic'],default:'surface'},...Og}
p.forwardRef(((e,t)=>{const{className:n,children:r,radius:a,value:o,defaultValue:l,onValueChange:i,...s}=Tg(e,$b,_g),[c,u]=Tn({prop:o,onChange:i,defaultProp:l})
return p.createElement(Cv,{'data-disabled':e.disabled||void 0,'data-radius':a,ref:t,className:ig('rt-SegmentedControlRoot',n),onValueChange:e=>{e&&u(e)},...s,type:'single',value:c,asChild:!1,disabled:!!e.disabled},r,p.createElement('div',{className:'rt-SegmentedControlIndicator'}))})).displayName='SegmentedControl.Root',p.forwardRef((({children:e,className:t,...n},r)=>p.createElement(Sv,{ref:r,className:ig('rt-reset','rt-SegmentedControlItem',t),...n,disabled:!1,asChild:!1},p.createElement('span',{className:'rt-SegmentedControlItemSeparator'}),p.createElement('span',{className:'rt-SegmentedControlItemLabel'},p.createElement('span',{className:'rt-SegmentedControlItemLabelActive'},e),p.createElement('span',{className:'rt-SegmentedControlItemLabelInactive','aria-hidden':!0},e))))).displayName='SegmentedControl.Item'
const Hb={...sg,size:{type:'enum',className:'rt-r-size',values:['1','2','3','4'],default:'3',responsive:!0},display:{type:'enum',className:'rt-r-display',values:['none','initial'],parseValue:function(e){return'initial'===e?'block':e},responsive:!0}}
p.forwardRef(((e,t)=>{const{asChild:n,className:r,...a}=Tg(e,Hb,ny,_g),o=n?gn:'section'
return p.createElement(o,{...a,ref:t,className:ig('rt-Section',r)})})).displayName='Section'
const Vb={size:{type:'enum',className:'rt-r-size',values:['1','2','3'],default:'2',responsive:!0}},Wb={variant:{type:'enum',className:'rt-variant',values:['classic','surface','soft','ghost'],default:'surface'},...pg,...Og,placeholder:{type:'string'}},Ub={variant:{type:'enum',className:'rt-variant',values:['solid','soft'],default:'solid'},...pg,...hg},Kb=p.createContext({})
p.forwardRef(((e,t)=>{const n=p.useContext(Kb),{children:r,className:a,color:o,radius:l,placeholder:i,...s}=Tg({size:null==n?void 0:n.size,...e},{size:Vb.size},Wb,_g)
return p.createElement(Bm,{asChild:!0},p.createElement('button',{'data-accent-color':o,'data-radius':l,...s,ref:t,className:ig('rt-reset','rt-SelectTrigger',a)},p.createElement('span',{className:'rt-SelectTriggerInner'},p.createElement($m,{placeholder:i},r)),p.createElement(Hm,{asChild:!0},p.createElement(Vy,{className:'rt-SelectIcon'}))))})).displayName='Select.Trigger',p.forwardRef(((e,t)=>{const n=p.useContext(Kb),{className:r,children:a,color:o,container:l,...i}=Tg({size:null==n?void 0:n.size,...e},{size:Vb.size},Ub),s=$g(),c=o||s.accentColor
return p.createElement(Vm,{container:l},p.createElement(Hg,{asChild:!0},p.createElement(Wm,{'data-accent-color':c,sideOffset:4,...i,asChild:!1,ref:t,className:ig({'rt-PopperContent':'popper'===i.position},'rt-SelectContent',r)},p.createElement(Ap,{type:'auto',className:'rt-ScrollAreaRoot'},p.createElement(Um,{asChild:!0,className:'rt-SelectViewport'},p.createElement(Op,{className:'rt-ScrollAreaViewport',style:{overflowY:void 0}},a)),p.createElement(zp,{className:'rt-ScrollAreaScrollbar rt-r-size-1',orientation:'vertical'},p.createElement(Fp,{className:'rt-ScrollAreaThumb'}))))))})).displayName='Select.Content',p.forwardRef(((e,t)=>{const{className:n,children:r,...a}=e
return p.createElement(qm,{...a,asChild:!1,ref:t,className:ig('rt-SelectItem',n)},p.createElement(Xm,{className:'rt-SelectItemIndicator'},p.createElement(Hy,{className:'rt-SelectItemIndicatorIcon'})),p.createElement(Ym,null,r))})).displayName='Select.Item',p.forwardRef((({className:e,...t},n)=>p.createElement(Km,{...t,asChild:!1,ref:n,className:ig('rt-SelectGroup',e)}))).displayName='Select.Group',p.forwardRef((({className:e,...t},n)=>p.createElement(Gm,{...t,asChild:!1,ref:n,className:ig('rt-SelectLabel',e)}))).displayName='Select.Label',p.forwardRef((({className:e,...t},n)=>p.createElement(Qm,{...t,asChild:!1,ref:n,className:ig('rt-SelectSeparator',e)}))).displayName='Select.Separator'
const Gb={orientation:{type:'enum',className:'rt-r-orientation',values:['horizontal','vertical'],default:'horizontal',responsive:!0},size:{type:'enum',className:'rt-r-size',values:['1','2','3','4'],default:'1',responsive:!0},color:{...pg.color,default:'gray'},decorative:{type:'boolean',default:!0}}
p.forwardRef(((e,t)=>{const{className:n,color:r,decorative:a,...o}=Tg(e,Gb,_g)
return p.createElement('span',{'data-accent-color':r,role:a?void 0:'separator',...o,ref:t,className:ig('rt-Separator',n)})})).displayName='Separator'
const qb=parseFloat(p.version)>=19||'',Yb={loading:{type:'boolean',default:!0},...cg,...ug}
p.forwardRef(((e,t)=>{const{children:n,className:r,loading:a,...o}=Tg(e,Yb,_g)
if(!a)return n
const l=p.isValidElement(n)?gn:'span'
return p.createElement(l,{ref:t,'aria-hidden':!0,className:ig('rt-Skeleton',r),'data-inline-skeleton':!p.isValidElement(n)||void 0,tabIndex:-1,inert:qb,...o},n)})).displayName='Skeleton'
const Xb={size:{type:'enum',className:'rt-r-size',values:['1','2','3'],default:'2',responsive:!0},variant:{type:'enum',className:'rt-variant',values:['classic','surface','soft'],default:'surface'},...pg,...hg,...Og}
p.forwardRef(((e,t)=>{const{className:n,color:r,radius:a,tabIndex:o,...l}=Tg(e,Xb,_g)
return p.createElement(kh,{'data-accent-color':r,'data-radius':a,ref:t,...l,asChild:!1,className:ig('rt-SliderRoot',n)},p.createElement(Nh,{className:'rt-SliderTrack'},p.createElement(Rh,{className:ig('rt-SliderRange',{'rt-high-contrast':e.highContrast}),'data-inverted':l.inverted?'':void 0})),(l.value??l.defaultValue??[]).map(((e,t)=>p.createElement(Ph,{key:t,className:'rt-SliderThumb',...void 0!==o?{tabIndex:o}:void 0}))))})).displayName='Slider'
const Qb={...sg,...bg,...yg}
p.forwardRef(((e,t)=>{const{asChild:n,className:r,...a}=Tg(e,Qb),o=n?gn:'strong'
return p.createElement(o,{...a,ref:t,className:ig('rt-Strong',r)})})).displayName='Strong'
const Zb={size:{type:'enum',className:'rt-r-size',values:['1','2','3'],default:'2',responsive:!0},variant:{type:'enum',className:'rt-variant',values:['classic','surface','soft'],default:'surface'},...pg,...hg,...Og}
p.forwardRef(((e,t)=>{const{className:n,color:r,radius:a,...o}=Tg(e,Zb,_g)
return p.createElement(Fh,{'data-accent-color':r,'data-radius':a,...o,asChild:!1,ref:t,className:ig('rt-reset','rt-SwitchRoot',n)},p.createElement(Bh,{className:ig('rt-SwitchThumb',{'rt-high-contrast':e.highContrast})}))})).displayName='Switch'
const Jb={size:{type:'enum',className:'rt-r-size',values:['1','2'],default:'2',responsive:!0},wrap:{type:'enum',className:'rt-r-fw',values:['nowrap','wrap','wrap-reverse'],responsive:!0},justify:{type:'enum',className:'rt-r-jc',values:['start','center','end'],responsive:!0},...pg,...hg},ew=p.forwardRef(((e,t)=>{const{children:n,className:r,color:a,...o}=Tg(e,Jb,_g)
return p.createElement(Od,{className:'rt-TabNavRoot','data-accent-color':a,...o,asChild:!1,ref:t},p.createElement(zd,{className:ig('rt-reset','rt-BaseTabList','rt-TabNavList',r)},n))}))
ew.displayName='TabNav.Root'
const tw=p.forwardRef(((e,t)=>{const{asChild:n,children:r,className:a,...o}=e
return p.createElement(Fd,{className:'rt-TabNavItem'},p.createElement(Bd,{...o,ref:t,className:ig('rt-reset','rt-BaseTabListTrigger','rt-TabNavLink',a),onSelect:void 0,asChild:n},Gg({asChild:n,children:r},(e=>p.createElement(p.Fragment,null,p.createElement('span',{className:'rt-BaseTabListTriggerInner rt-TabNavLinkInner'},e),p.createElement('span',{className:'rt-BaseTabListTriggerInnerHidden rt-TabNavLinkInnerHidden'},e))))))}))
tw.displayName='TabNav.Link'
const nw={size:{type:'enum',className:'rt-r-size',values:['1','2','3'],default:'2',responsive:!0},variant:{type:'enum',className:'rt-variant',values:['surface','ghost'],default:'ghost'},layout:{type:'enum',className:'rt-r-tl',values:['auto','fixed'],responsive:!0}},rw={align:{type:'enum',className:'rt-r-va',values:['start','center','end','baseline'],parseValue:function(e){return{baseline:'baseline',start:'top',center:'middle',end:'bottom'}[e]},responsive:!0}},aw={justify:{type:'enum',className:'rt-r-ta',values:['start','center','end'],parseValue:function(e){return{start:'left',center:'center',end:'right'}[e]},responsive:!0},...cg,...Jg}
p.forwardRef(((e,t)=>{const{layout:n,...r}=nw,{className:a,children:o,layout:l,...i}=Tg(e,r,_g),s=Ng({value:l,className:nw.layout.className,propValues:nw.layout.values})
return p.createElement('div',{ref:t,className:ig('rt-TableRoot',a),...i},p.createElement(ib,null,p.createElement('table',{className:ig('rt-TableRootTable',s)},o)))})).displayName='Table.Root',p.forwardRef((({className:e,...t},n)=>p.createElement('thead',{...t,ref:n,className:ig('rt-TableHeader',e)}))).displayName='Table.Header',p.forwardRef((({className:e,...t},n)=>p.createElement('tbody',{...t,ref:n,className:ig('rt-TableBody',e)}))).displayName='Table.Body',p.forwardRef(((e,t)=>{const{className:n,...r}=Tg(e,rw)
return p.createElement('tr',{...r,ref:t,className:ig('rt-TableRow',n)})})).displayName='Table.Row',p.forwardRef(((e,t)=>{const{className:n,...r}=Tg(e,aw)
return p.createElement('td',{className:ig('rt-TableCell',n),ref:t,...r})})).displayName='Table.Cell',p.forwardRef(((e,t)=>{const{className:n,...r}=Tg(e,aw)
return p.createElement('th',{className:ig('rt-TableCell','rt-TableColumnHeaderCell',n),scope:'col',ref:t,...r})})).displayName='Table.ColumnHeaderCell',p.forwardRef(((e,t)=>{const{className:n,...r}=Tg(e,aw)
return p.createElement('th',{className:ig('rt-TableCell','rt-TableRowHeaderCell',n),scope:'row',ref:t,...r})})).displayName='Table.RowHeaderCell',p.forwardRef(((e,t)=>{const{className:n,...r}=Tg(e,_g)
return p.createElement(nv,{...r,ref:t,className:ig('rt-TabsRoot',n)})})).displayName='Tabs.Root',p.forwardRef(((e,t)=>{const{className:n,color:r,...a}=Tg(e,Jb,_g)
return p.createElement(rv,{'data-accent-color':r,...a,asChild:!1,ref:t,className:ig('rt-BaseTabList','rt-TabsList',n)})})).displayName='Tabs.List',p.forwardRef(((e,t)=>{const{className:n,children:r,...a}=e
return p.createElement(av,{...a,asChild:!1,ref:t,className:ig('rt-reset','rt-BaseTabListTrigger','rt-TabsTrigger',n)},p.createElement('span',{className:'rt-BaseTabListTriggerInner rt-TabsTriggerInner'},r),p.createElement('span',{className:'rt-BaseTabListTriggerInnerHidden rt-TabsTriggerInnerHidden'},r))})).displayName='Tabs.Trigger',p.forwardRef(((e,t)=>{const{className:n,...r}=Tg(e,_g)
return p.createElement(ov,{...r,ref:t,className:ig('rt-TabsContent',n)})})).displayName='Tabs.Content'
const ow={size:{type:'enum',className:'rt-r-size',values:['1','2','3'],default:'2',responsive:!0},variant:{type:'enum',className:'rt-variant',values:['classic','surface','soft'],default:'surface'},resize:{type:'enum',className:'rt-r-resize',values:['none','vertical','horizontal','both'],responsive:!0},...pg,...Og}
p.forwardRef(((e,t)=>{const{className:n,color:r,radius:a,style:o,...l}=Tg(e,ow,_g)
return p.createElement('div',{'data-accent-color':r,'data-radius':a,className:ig('rt-TextAreaRoot',n),style:o},p.createElement('textarea',{className:'rt-reset rt-TextAreaInput',ref:t,...l}))})).displayName='TextArea'
const lw={size:{type:'enum',className:'rt-r-size',values:['1','2','3'],default:'2',responsive:!0},variant:{type:'enum',className:'rt-variant',values:['classic','surface','soft'],default:'surface'},...pg,...Og},iw={side:{type:'enum',values:['left','right']},...pg,gap:iy.gap,px:Jg.px,pl:Jg.pl,pr:Jg.pr}
p.forwardRef(((e,t)=>{const n=p.useRef(null),{children:r,className:a,color:o,radius:l,style:i,...s}=Tg(e,lw,_g)
return p.createElement('div',{'data-accent-color':o,'data-radius':l,style:i,className:ig('rt-TextFieldRoot',a),onPointerDown:e=>{const t=e.target
if(t.closest('input, button, a'))return
const r=n.current
if(!r)return
const a=t.closest('\n            .rt-TextFieldSlot[data-side=\'right\'],\n            .rt-TextFieldSlot:not([data-side=\'right\']) ~ .rt-TextFieldSlot:not([data-side=\'left\'])\n          ')?r.value.length:0
requestAnimationFrame((()=>{try{r.setSelectionRange(a,a)}catch{}r.focus()}))}},p.createElement('input',{spellCheck:'false',...s,ref:dn(n,t),className:'rt-reset rt-TextFieldInput'}),r)})).displayName='TextField.Root',p.forwardRef(((e,t)=>{const{className:n,color:r,side:a,...o}=Tg(e,iw)
return p.createElement('div',{'data-accent-color':r,'data-side':a,...o,ref:t,className:ig('rt-TextFieldSlot',n)})})).displayName='TextField.Slot',p.forwardRef((({defaultOpen:e=!0,...t},n)=>{const[r,a]=p.useState(e)
return p.createElement(sw,{...t,ref:n,open:r,onOpenChange:a})})).displayName='ThemePanel'
const sw=p.forwardRef(((e,t)=>{const{open:n,onOpenChange:r,onAppearanceChange:a,...o}=e,l=$g(),{appearance:i,onAppearanceChange:s,accentColor:c,onAccentColorChange:u,grayColor:d,onGrayColorChange:f,panelBackground:m,onPanelBackgroundChange:h,radius:v,onRadiusChange:g,scaling:y,onScalingChange:b}=l,w=void 0!==a,x=Pn(a),C=p.useCallback((e=>{const t=function(){const e=document.createElement('style')
return e.appendChild(document.createTextNode('*,*::before,*::after{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}')),document.head.appendChild(e),()=>{window.getComputedStyle(document.body),setTimeout((()=>{document.head.removeChild(e)}),1)}}()
'inherit'===i?(w?x(e):(P(e),function(e){const t=document.documentElement,n=t.classList.contains('light-theme'),r=t.classList.contains('dark-theme'),a=t.classList.contains('light'),o=t.classList.contains('dark');(n||r)&&(t.classList.remove('light-theme','dark-theme'),t.style.colorScheme=e,t.classList.add(`${e}-theme`)),(a||o)&&(t.classList.remove('light','dark'),t.style.colorScheme=e,t.classList.add(e)),!n&&!r&&!a&&!o&&(t.style.colorScheme=e,t.classList.add(e))}(e)),t()):s(e)}),[i,s,w,x]),S=Ig(c),E='auto'===d?S:d,[k,N]=p.useState('idle'),[R,P]=p.useState('inherit'===i?null:i),T='\n      [contenteditable],\n      [role="combobox"],\n      [role="listbox"],\n      [role="menu"],\n      input:not([type="radio"], [type="checkbox"]),\n      select,\n      textarea\n    '
return p.useEffect((()=>{function e(e){var t,a
const o=e.altKey||e.ctrlKey||e.shiftKey||e.metaKey,l=null==(t=document.activeElement)?void 0:t.closest(T)
'T'===(null==(a=e.key)?void 0:a.toUpperCase())&&!o&&!l&&r(!n)}return document.addEventListener('keydown',e),()=>document.removeEventListener('keydown',e)}),[r,n,T]),p.useEffect((()=>{function e(e){var t,n
const r=e.altKey||e.ctrlKey||e.shiftKey||e.metaKey,a=null==(t=document.activeElement)?void 0:t.closest(T)
'D'===(null==(n=e.key)?void 0:n.toUpperCase())&&!r&&!a&&C('light'===R?'dark':'light')}return document.addEventListener('keydown',e),()=>document.removeEventListener('keydown',e)}),[C,R,T]),p.useEffect((()=>{const e=document.documentElement,t=document.body
function n(){const n=e.classList.contains('dark')||e.classList.contains('dark-theme')||t.classList.contains('dark')||t.classList.contains('dark-theme')
P('inherit'===i?n?'dark':'light':i)}const r=new MutationObserver((function(e){e.forEach((function(e){'class'===e.attributeName&&n()}))}))
return n(),'inherit'===i&&(r.observe(e,{attributes:!0}),r.observe(t,{attributes:!0})),()=>r.disconnect()}),[i]),p.createElement(Hg,{asChild:!0,radius:'medium',scaling:'100%'},p.createElement(sy,{direction:'column',position:'fixed',top:'0',right:'0',mr:'4',mt:'4',inert:n?void 0:qb,...o,ref:t,style:{zIndex:9999,overflow:'hidden',maxHeight:'calc(100vh - var(--space-4) - var(--space-4))',borderRadius:'var(--radius-4)',backgroundColor:'var(--color-panel-solid)',transformOrigin:'top center',transitionProperty:'transform, box-shadow',transitionDuration:'200ms',transitionTimingFunction:n?'ease-out':'ease-in',transform:n?'none':'translateX(105%)',boxShadow:n?'var(--shadow-5)':'var(--shadow-2)',...e.style}},p.createElement(ib,null,p.createElement(ry,{flexGrow:'1',p:'5',position:'relative'},p.createElement(ry,{position:'absolute',top:'0',right:'0',m:'2'},p.createElement(dw,{content:'Press T to show/hide the Theme Panel',side:'bottom',sideOffset:6},p.createElement(Eb,{asChild:!0,size:'3',tabIndex:0,className:'rt-ThemePanelShortcut'},p.createElement('button',{onClick:()=>r(!n)},'T')))),p.createElement(Lg,{size:'5',trim:'both',as:'h3',mb:'5'},'Theme'),p.createElement(jg,{id:'accent-color-title',as:'p',size:'2',weight:'medium',mt:'5'},'Accent color'),p.createElement(By,{columns:'10',gap:'2',mt:'3',role:'group','aria-labelledby':'accent-color-title'},zg.accentColor.values.map((e=>p.createElement('label',{key:e,className:'rt-ThemePanelSwatch',style:{backgroundColor:`var(--${e}-9)`}},p.createElement(dw,{content:`${cw(e)}${'gray'===c&&'gray'!==E?` (${cw(E)})`:''}`},p.createElement('input',{className:'rt-ThemePanelSwatchInput',type:'radio',name:'accentColor',value:e,checked:c===e,onChange:e=>u(e.target.value)})))))),p.createElement(sy,{asChild:!0,align:'center',justify:'between'},p.createElement(jg,{as:'p',id:'gray-color-title',size:'2',weight:'medium',mt:'5'},'Gray color')),p.createElement(By,{columns:'10',gap:'2',mt:'3',role:'group','aria-labelledby':'gray-color-title'},zg.grayColor.values.map((e=>p.createElement(sy,{key:e,asChild:!0,align:'center',justify:'center'},p.createElement('label',{className:'rt-ThemePanelSwatch',style:{backgroundColor:'auto'===e?`var(--${S}-9)`:'gray'===e?'var(--gray-9)':`var(--${e}-9)`,filter:'gray'===e?'saturate(0)':void 0}},p.createElement(dw,{content:`${cw(e)}${'auto'===e?` (${cw(S)})`:''}`},p.createElement('input',{className:'rt-ThemePanelSwatchInput',type:'radio',name:'grayColor',value:e,checked:d===e,onChange:e=>f(e.target.value)}))))))),p.createElement(jg,{id:'appearance-title',as:'p',size:'2',weight:'medium',mt:'5'},'Appearance'),p.createElement(By,{columns:'2',gap:'2',mt:'3',role:'group','aria-labelledby':'appearance-title'},['light','dark'].map((e=>p.createElement('label',{key:e,className:'rt-ThemePanelRadioCard'},p.createElement('input',{className:'rt-ThemePanelRadioCardInput',type:'radio',name:'appearance',value:e,checked:R===e,onChange:e=>C(e.target.value)}),p.createElement(sy,{align:'center',justify:'center',height:'32px',gap:'2'},'light'===e?p.createElement('svg',{width:'15',height:'15',viewBox:'0 0 15 15',fill:'none',xmlns:'http://www.w3.org/2000/svg',style:{margin:'0 -1px'}},p.createElement('path',{d:'M7.5 0C7.77614 0 8 0.223858 8 0.5V2.5C8 2.77614 7.77614 3 7.5 3C7.22386 3 7 2.77614 7 2.5V0.5C7 0.223858 7.22386 0 7.5 0ZM2.1967 2.1967C2.39196 2.00144 2.70854 2.00144 2.90381 2.1967L4.31802 3.61091C4.51328 3.80617 4.51328 4.12276 4.31802 4.31802C4.12276 4.51328 3.80617 4.51328 3.61091 4.31802L2.1967 2.90381C2.00144 2.70854 2.00144 2.39196 2.1967 2.1967ZM0.5 7C0.223858 7 0 7.22386 0 7.5C0 7.77614 0.223858 8 0.5 8H2.5C2.77614 8 3 7.77614 3 7.5C3 7.22386 2.77614 7 2.5 7H0.5ZM2.1967 12.8033C2.00144 12.608 2.00144 12.2915 2.1967 12.0962L3.61091 10.682C3.80617 10.4867 4.12276 10.4867 4.31802 10.682C4.51328 10.8772 4.51328 11.1938 4.31802 11.3891L2.90381 12.8033C2.70854 12.9986 2.39196 12.9986 2.1967 12.8033ZM12.5 7C12.2239 7 12 7.22386 12 7.5C12 7.77614 12.2239 8 12.5 8H14.5C14.7761 8 15 7.77614 15 7.5C15 7.22386 14.7761 7 14.5 7H12.5ZM10.682 4.31802C10.4867 4.12276 10.4867 3.80617 10.682 3.61091L12.0962 2.1967C12.2915 2.00144 12.608 2.00144 12.8033 2.1967C12.9986 2.39196 12.9986 2.70854 12.8033 2.90381L11.3891 4.31802C11.1938 4.51328 10.8772 4.51328 10.682 4.31802ZM8 12.5C8 12.2239 7.77614 12 7.5 12C7.22386 12 7 12.2239 7 12.5V14.5C7 14.7761 7.22386 15 7.5 15C7.77614 15 8 14.7761 8 14.5V12.5ZM10.682 10.682C10.8772 10.4867 11.1938 10.4867 11.3891 10.682L12.8033 12.0962C12.9986 12.2915 12.9986 12.608 12.8033 12.8033C12.608 12.9986 12.2915 12.9986 12.0962 12.8033L10.682 11.3891C10.4867 11.1938 10.4867 10.8772 10.682 10.682ZM5.5 7.5C5.5 6.39543 6.39543 5.5 7.5 5.5C8.60457 5.5 9.5 6.39543 9.5 7.5C9.5 8.60457 8.60457 9.5 7.5 9.5C6.39543 9.5 5.5 8.60457 5.5 7.5ZM7.5 4.5C5.84315 4.5 4.5 5.84315 4.5 7.5C4.5 9.15685 5.84315 10.5 7.5 10.5C9.15685 10.5 10.5 9.15685 10.5 7.5C10.5 5.84315 9.15685 4.5 7.5 4.5Z',fill:'currentColor',fillRule:'evenodd',clipRule:'evenodd'})):p.createElement('svg',{width:'15',height:'15',viewBox:'0 0 15 15',fill:'none',xmlns:'http://www.w3.org/2000/svg',style:{margin:'0 -1px'}},p.createElement('path',{d:'M2.89998 0.499976C2.89998 0.279062 2.72089 0.0999756 2.49998 0.0999756C2.27906 0.0999756 2.09998 0.279062 2.09998 0.499976V1.09998H1.49998C1.27906 1.09998 1.09998 1.27906 1.09998 1.49998C1.09998 1.72089 1.27906 1.89998 1.49998 1.89998H2.09998V2.49998C2.09998 2.72089 2.27906 2.89998 2.49998 2.89998C2.72089 2.89998 2.89998 2.72089 2.89998 2.49998V1.89998H3.49998C3.72089 1.89998 3.89998 1.72089 3.89998 1.49998C3.89998 1.27906 3.72089 1.09998 3.49998 1.09998H2.89998V0.499976ZM5.89998 3.49998C5.89998 3.27906 5.72089 3.09998 5.49998 3.09998C5.27906 3.09998 5.09998 3.27906 5.09998 3.49998V4.09998H4.49998C4.27906 4.09998 4.09998 4.27906 4.09998 4.49998C4.09998 4.72089 4.27906 4.89998 4.49998 4.89998H5.09998V5.49998C5.09998 5.72089 5.27906 5.89998 5.49998 5.89998C5.72089 5.89998 5.89998 5.72089 5.89998 5.49998V4.89998H6.49998C6.72089 4.89998 6.89998 4.72089 6.89998 4.49998C6.89998 4.27906 6.72089 4.09998 6.49998 4.09998H5.89998V3.49998ZM1.89998 6.49998C1.89998 6.27906 1.72089 6.09998 1.49998 6.09998C1.27906 6.09998 1.09998 6.27906 1.09998 6.49998V7.09998H0.499976C0.279062 7.09998 0.0999756 7.27906 0.0999756 7.49998C0.0999756 7.72089 0.279062 7.89998 0.499976 7.89998H1.09998V8.49998C1.09998 8.72089 1.27906 8.89997 1.49998 8.89997C1.72089 8.89997 1.89998 8.72089 1.89998 8.49998V7.89998H2.49998C2.72089 7.89998 2.89998 7.72089 2.89998 7.49998C2.89998 7.27906 2.72089 7.09998 2.49998 7.09998H1.89998V6.49998ZM8.54406 0.98184L8.24618 0.941586C8.03275 0.917676 7.90692 1.1655 8.02936 1.34194C8.17013 1.54479 8.29981 1.75592 8.41754 1.97445C8.91878 2.90485 9.20322 3.96932 9.20322 5.10022C9.20322 8.37201 6.82247 11.0878 3.69887 11.6097C3.45736 11.65 3.20988 11.6772 2.96008 11.6906C2.74563 11.702 2.62729 11.9535 2.77721 12.1072C2.84551 12.1773 2.91535 12.2458 2.98667 12.3128L3.05883 12.3795L3.31883 12.6045L3.50684 12.7532L3.62796 12.8433L3.81491 12.9742L3.99079 13.089C4.11175 13.1651 4.23536 13.2375 4.36157 13.3059L4.62496 13.4412L4.88553 13.5607L5.18837 13.6828L5.43169 13.7686C5.56564 13.8128 5.70149 13.8529 5.83857 13.8885C5.94262 13.9155 6.04767 13.9401 6.15405 13.9622C6.27993 13.9883 6.40713 14.0109 6.53544 14.0298L6.85241 14.0685L7.11934 14.0892C7.24637 14.0965 7.37436 14.1002 7.50322 14.1002C11.1483 14.1002 14.1032 11.1453 14.1032 7.50023C14.1032 7.25044 14.0893 7.00389 14.0623 6.76131L14.0255 6.48407C13.991 6.26083 13.9453 6.04129 13.8891 5.82642C13.8213 5.56709 13.7382 5.31398 13.6409 5.06881L13.5279 4.80132L13.4507 4.63542L13.3766 4.48666C13.2178 4.17773 13.0353 3.88295 12.8312 3.60423L12.6782 3.40352L12.4793 3.16432L12.3157 2.98361L12.1961 2.85951L12.0355 2.70246L11.8134 2.50184L11.4925 2.24191L11.2483 2.06498L10.9562 1.87446L10.6346 1.68894L10.3073 1.52378L10.1938 1.47176L9.95488 1.3706L9.67791 1.2669L9.42566 1.1846L9.10075 1.09489L8.83599 1.03486L8.54406 0.98184ZM10.4032 5.30023C10.4032 4.27588 10.2002 3.29829 9.83244 2.40604C11.7623 3.28995 13.1032 5.23862 13.1032 7.50023C13.1032 10.593 10.596 13.1002 7.50322 13.1002C6.63646 13.1002 5.81597 12.9036 5.08355 12.5522C6.5419 12.0941 7.81081 11.2082 8.74322 10.0416C8.87963 10.2284 9.10028 10.3497 9.34928 10.3497C9.76349 10.3497 10.0993 10.0139 10.0993 9.59971C10.0993 9.24256 9.84965 8.94373 9.51535 8.86816C9.57741 8.75165 9.63653 8.63334 9.6926 8.51332C9.88358 8.63163 10.1088 8.69993 10.35 8.69993C11.0403 8.69993 11.6 8.14028 11.6 7.44993C11.6 6.75976 11.0406 6.20024 10.3505 6.19993C10.3853 5.90487 10.4032 5.60464 10.4032 5.30023Z',fill:'currentColor',fillRule:'evenodd',clipRule:'evenodd'})),p.createElement(jg,{size:'1',weight:'medium'},cw(e))))))),p.createElement(jg,{id:'radius-title',as:'p',size:'2',weight:'medium',mt:'5'},'Radius'),p.createElement(By,{columns:'5',gap:'2',mt:'3',role:'group','aria-labelledby':'radius-title'},zg.radius.values.map((e=>p.createElement(sy,{key:e,direction:'column',align:'center'},p.createElement('label',{className:'rt-ThemePanelRadioCard'},p.createElement('input',{className:'rt-ThemePanelRadioCardInput',type:'radio',name:'radius',id:`theme-panel-radius-${e}`,value:e,checked:v===e,onChange:e=>g(e.target.value)}),p.createElement(Hg,{asChild:!0,radius:e},p.createElement(ry,{m:'3',width:'32px',height:'32px',style:{borderTopLeftRadius:'full'===e?'80%':'var(--radius-5)',backgroundImage:'linear-gradient(to bottom right, var(--accent-3), var(--accent-4))',borderTop:'2px solid var(--accent-a8)',borderLeft:'2px solid var(--accent-a8)'}}))),p.createElement(ry,{asChild:!0,pt:'2'},p.createElement(jg,{asChild:!0,size:'1',color:'gray'},p.createElement('label',{htmlFor:`theme-panel-radius-${e}`},cw(e)))))))),p.createElement(jg,{id:'scaling-title',as:'p',size:'2',weight:'medium',mt:'5'},'Scaling'),p.createElement(By,{columns:'5',gap:'2',mt:'3',role:'group','aria-labelledby':'scaling-title'},zg.scaling.values.map((e=>p.createElement('label',{key:e,className:'rt-ThemePanelRadioCard'},p.createElement('input',{className:'rt-ThemePanelRadioCardInput',type:'radio',name:'scaling',value:e,checked:y===e,onChange:e=>b(e.target.value)}),p.createElement(sy,{align:'center',justify:'center',height:'32px'},p.createElement(Hg,{asChild:!0,scaling:e},p.createElement(sy,{align:'center',justify:'center'},p.createElement(jg,{size:'1',weight:'medium'},cw(e))))))))),p.createElement(sy,{mt:'5',align:'center',gap:'2'},p.createElement(jg,{id:'panel-background-title',as:'p',size:'2',weight:'medium'},'Panel background'),p.createElement(Rb,null,p.createElement(Pb,null,p.createElement(bb,{size:'1',variant:'ghost',color:'gray'},p.createElement(rg,{label:'Learn more about panel background options'},p.createElement('svg',{width:'15',height:'15',viewBox:'0 0 15 15',fill:'currentColor',xmlns:'http://www.w3.org/2000/svg'},p.createElement('path',{d:'M7.49991 0.876892C3.84222 0.876892 0.877075 3.84204 0.877075 7.49972C0.877075 11.1574 3.84222 14.1226 7.49991 14.1226C11.1576 14.1226 14.1227 11.1574 14.1227 7.49972C14.1227 3.84204 11.1576 0.876892 7.49991 0.876892ZM1.82707 7.49972C1.82707 4.36671 4.36689 1.82689 7.49991 1.82689C10.6329 1.82689 13.1727 4.36671 13.1727 7.49972C13.1727 10.6327 10.6329 13.1726 7.49991 13.1726C4.36689 13.1726 1.82707 10.6327 1.82707 7.49972ZM8.24992 4.49999C8.24992 4.9142 7.91413 5.24999 7.49992 5.24999C7.08571 5.24999 6.74992 4.9142 6.74992 4.49999C6.74992 4.08577 7.08571 3.74999 7.49992 3.74999C7.91413 3.74999 8.24992 4.08577 8.24992 4.49999ZM6.00003 5.99999H6.50003H7.50003C7.77618 5.99999 8.00003 6.22384 8.00003 6.49999V9.99999H8.50003H9.00003V11H8.50003H7.50003H6.50003H6.00003V9.99999H6.50003H7.00003V6.99999H6.50003H6.00003V5.99999Z',fillRule:'evenodd',clipRule:'evenodd'}))))),p.createElement(Tb,{size:'1',style:{maxWidth:220},side:'top',align:'center'},p.createElement(jg,{as:'p',size:'2'},'Whether Card and Table panels are translucent, showing some of\xa0the background behind them.')))),p.createElement(By,{columns:'2',gap:'2',mt:'3',role:'group','aria-labelledby':'panel-background-title'},zg.panelBackground.values.map((e=>p.createElement('label',{key:e,className:'rt-ThemePanelRadioCard'},p.createElement('input',{className:'rt-ThemePanelRadioCardInput',type:'radio',name:'panelBackground',value:e,checked:m===e,onChange:e=>h(e.target.value)}),p.createElement(sy,{align:'center',justify:'center',height:'32px',gap:'2'},'solid'===e?p.createElement('svg',{width:'15',height:'15',viewBox:'0 0 15 15',fill:'none',xmlns:'http://www.w3.org/2000/svg',style:{margin:'0 -2px'}},p.createElement('path',{d:'M0.877075 7.49988C0.877075 3.84219 3.84222 0.877045 7.49991 0.877045C11.1576 0.877045 14.1227 3.84219 14.1227 7.49988C14.1227 11.1575 11.1576 14.1227 7.49991 14.1227C3.84222 14.1227 0.877075 11.1575 0.877075 7.49988ZM7.49991 1.82704C4.36689 1.82704 1.82708 4.36686 1.82708 7.49988C1.82708 10.6329 4.36689 13.1727 7.49991 13.1727C10.6329 13.1727 13.1727 10.6329 13.1727 7.49988C13.1727 4.36686 10.6329 1.82704 7.49991 1.82704Z',fill:'currentColor',fillRule:'evenodd',clipRule:'evenodd'})):p.createElement('svg',{width:'15',height:'15',viewBox:'0 0 15 15',fill:'none',xmlns:'http://www.w3.org/2000/svg',style:{margin:'0 -2px'}},p.createElement('path',{opacity:'.05',d:'M6.78296 13.376C8.73904 9.95284 8.73904 5.04719 6.78296 1.62405L7.21708 1.37598C9.261 4.95283 9.261 10.0472 7.21708 13.624L6.78296 13.376Z',fill:'currentColor',fillRule:'evenodd',clipRule:'evenodd'}),p.createElement('path',{opacity:'.1',d:'M7.28204 13.4775C9.23929 9.99523 9.23929 5.00475 7.28204 1.52248L7.71791 1.2775C9.76067 4.9119 9.76067 10.0881 7.71791 13.7225L7.28204 13.4775Z',fill:'currentColor',fillRule:'evenodd',clipRule:'evenodd'}),p.createElement('path',{opacity:'.15',d:'M7.82098 13.5064C9.72502 9.99523 9.72636 5.01411 7.82492 1.50084L8.26465 1.26285C10.2465 4.92466 10.2451 10.085 8.26052 13.7448L7.82098 13.5064Z',fill:'currentColor',fillRule:'evenodd',clipRule:'evenodd'}),p.createElement('path',{opacity:'.2',d:'M8.41284 13.429C10.1952 9.92842 10.1957 5.07537 8.41435 1.57402L8.85999 1.34729C10.7139 4.99113 10.7133 10.0128 8.85841 13.6559L8.41284 13.429Z',fill:'currentColor',fillRule:'evenodd',clipRule:'evenodd'}),p.createElement('path',{opacity:'.25',d:'M9.02441 13.2956C10.6567 9.8379 10.6586 5.17715 9.03005 1.71656L9.48245 1.50366C11.1745 5.09919 11.1726 9.91629 9.47657 13.5091L9.02441 13.2956Z',fill:'currentColor',fillRule:'evenodd',clipRule:'evenodd'}),p.createElement('path',{opacity:'.3',d:'M9.66809 13.0655C11.1097 9.69572 11.1107 5.3121 9.67088 1.94095L10.1307 1.74457C11.6241 5.24121 11.6231 9.76683 10.1278 13.2622L9.66809 13.0655Z',fill:'currentColor',fillRule:'evenodd',clipRule:'evenodd'}),p.createElement('path',{opacity:'.35',d:'M10.331 12.7456C11.5551 9.52073 11.5564 5.49103 10.3347 2.26444L10.8024 2.0874C12.0672 5.42815 12.0659 9.58394 10.7985 12.9231L10.331 12.7456Z',fill:'currentColor',fillRule:'evenodd',clipRule:'evenodd'}),p.createElement('path',{opacity:'.4',d:'M11.0155 12.2986C11.9938 9.29744 11.9948 5.71296 11.0184 2.71067L11.4939 2.55603C12.503 5.6589 12.502 9.35178 11.4909 12.4535L11.0155 12.2986Z',fill:'currentColor',fillRule:'evenodd',clipRule:'evenodd'}),p.createElement('path',{opacity:'.45',d:'M11.7214 11.668C12.4254 9.01303 12.4262 5.99691 11.7237 3.34116L12.2071 3.21329C12.9318 5.95292 12.931 9.05728 12.2047 11.7961L11.7214 11.668Z',fill:'currentColor',fillRule:'evenodd',clipRule:'evenodd'}),p.createElement('path',{opacity:'.5',d:'M12.4432 10.752C12.8524 8.63762 12.8523 6.36089 12.4429 4.2466L12.9338 4.15155C13.3553 6.32861 13.3554 8.66985 12.9341 10.847L12.4432 10.752Z',fill:'currentColor',fillRule:'evenodd',clipRule:'evenodd'}),p.createElement('path',{d:'M0.877075 7.49988C0.877075 3.84219 3.84222 0.877045 7.49991 0.877045C11.1576 0.877045 14.1227 3.84219 14.1227 7.49988C14.1227 11.1575 11.1576 14.1227 7.49991 14.1227C3.84222 14.1227 0.877075 11.1575 0.877075 7.49988ZM7.49991 1.82704C4.36689 1.82704 1.82708 4.36686 1.82708 7.49988C1.82708 10.6329 4.36689 13.1727 7.49991 13.1727C10.6329 13.1727 13.1727 10.6329 13.1727 7.49988C13.1727 4.36686 10.6329 1.82704 7.49991 1.82704Z',fill:'currentColor',fillRule:'evenodd',clipRule:'evenodd'})),p.createElement(jg,{size:'1',weight:'medium'},cw(e))))))),p.createElement(vy,{mt:'5',style:{width:'100%'},onClick:async function(){const e={appearance:i===zg.appearance.default?void 0:i,accentColor:c===zg.accentColor.default?void 0:c,grayColor:d===zg.grayColor.default?void 0:d,panelBackground:m===zg.panelBackground.default?void 0:m,radius:v===zg.radius.default?void 0:v,scaling:y===zg.scaling.default?void 0:y},t=Object.keys(e).filter((t=>void 0!==e[t])).map((t=>`${t}="${e[t]}"`)).join(' '),n=t?`<Theme ${t}>`:'<Theme>'
N('copying'),await navigator.clipboard.writeText(n),N('copied'),setTimeout((()=>N('idle')),2e3)}},'copied'===k?'Copied':'Copy Theme')))))}))
function cw(e){return e.charAt(0).toUpperCase()+e.slice(1)}sw.displayName='ThemePanelImpl'
const uw={content:{type:'ReactNode',required:!0},width:cg.width,minWidth:cg.minWidth,maxWidth:{...cg.maxWidth,default:'360px'}},dw=p.forwardRef(((e,t)=>{const{children:n,className:r,open:a,defaultOpen:o,onOpenChange:l,delayDuration:i,disableHoverableContent:s,content:c,container:u,forceMount:d,...f}=Tg(e,uw),m={open:a,defaultOpen:o,onOpenChange:l,delayDuration:i,disableHoverableContent:s}
return p.createElement(Zv,{...m},p.createElement(Jv,{asChild:!0},n),p.createElement(eg,{container:u,forceMount:d},p.createElement(Hg,{asChild:!0},p.createElement(tg,{sideOffset:4,collisionPadding:10,...f,asChild:!1,ref:t,className:ig('rt-TooltipContent',r)},p.createElement(jg,{as:'p',className:'rt-TooltipText',size:'1'},c),p.createElement(ng,{className:'rt-TooltipArrow'})))))}))
dw.displayName='Tooltip'
const fw=()=>s.jsx(sy,{children:'Experiences'}),pw=e=>Symbol.iterator in e,mw=e=>'entries'in e,hw=(e,t)=>{const n=e instanceof Map?e:new Map(e.entries()),r=t instanceof Map?t:new Map(t.entries())
if(n.size!==r.size)return!1
for(const[a,o]of n)if(!Object.is(o,r.get(a)))return!1
return!0},vw=e=>{let t
const n=new Set,r=(e,r)=>{const a='function'==typeof e?e(t):e
if(!Object.is(a,t)){const e=t
t=(null!=r?r:'object'!=typeof a||null===a)?a:Object.assign({},t,a),n.forEach((n=>n(t,e)))}},a=()=>t,o={setState:r,getState:a,getInitialState:()=>l,subscribe:e=>(n.add(e),()=>n.delete(e))},l=t=e(r,a,o)
return o},gw=e=>e,yw=(()=>{const e=(n=e=>({introElemObserver:void 0,setIntroElemObserver(t){e((e=>({...e,introElemObserver:'function'==typeof t?t():t})))},initIntroElemObserver:()=>{e((e=>{var t
return e.introElemObserver&&(null==(t=e.introElemObserver)||t.disconnect()),{...e,introElemObserver:null}}))}}))?vw(n):vw,t=t=>function(e,t=gw){const n=m.useSyncExternalStore(e.subscribe,(()=>t(e.getState())),(()=>t(e.getInitialState())))
return m.useDebugValue(n),n}(e,t)
var n
return Object.assign(t,e),t})()
var bw,ww='colors',xw='sizes',Cw='space',Sw={gap:Cw,gridGap:Cw,columnGap:Cw,gridColumnGap:Cw,rowGap:Cw,gridRowGap:Cw,inset:Cw,insetBlock:Cw,insetBlockEnd:Cw,insetBlockStart:Cw,insetInline:Cw,insetInlineEnd:Cw,insetInlineStart:Cw,margin:Cw,marginTop:Cw,marginRight:Cw,marginBottom:Cw,marginLeft:Cw,marginBlock:Cw,marginBlockEnd:Cw,marginBlockStart:Cw,marginInline:Cw,marginInlineEnd:Cw,marginInlineStart:Cw,padding:Cw,paddingTop:Cw,paddingRight:Cw,paddingBottom:Cw,paddingLeft:Cw,paddingBlock:Cw,paddingBlockEnd:Cw,paddingBlockStart:Cw,paddingInline:Cw,paddingInlineEnd:Cw,paddingInlineStart:Cw,top:Cw,right:Cw,bottom:Cw,left:Cw,scrollMargin:Cw,scrollMarginTop:Cw,scrollMarginRight:Cw,scrollMarginBottom:Cw,scrollMarginLeft:Cw,scrollMarginX:Cw,scrollMarginY:Cw,scrollMarginBlock:Cw,scrollMarginBlockEnd:Cw,scrollMarginBlockStart:Cw,scrollMarginInline:Cw,scrollMarginInlineEnd:Cw,scrollMarginInlineStart:Cw,scrollPadding:Cw,scrollPaddingTop:Cw,scrollPaddingRight:Cw,scrollPaddingBottom:Cw,scrollPaddingLeft:Cw,scrollPaddingX:Cw,scrollPaddingY:Cw,scrollPaddingBlock:Cw,scrollPaddingBlockEnd:Cw,scrollPaddingBlockStart:Cw,scrollPaddingInline:Cw,scrollPaddingInlineEnd:Cw,scrollPaddingInlineStart:Cw,fontSize:'fontSizes',background:ww,backgroundColor:ww,backgroundImage:ww,borderImage:ww,border:ww,borderBlock:ww,borderBlockEnd:ww,borderBlockStart:ww,borderBottom:ww,borderBottomColor:ww,borderColor:ww,borderInline:ww,borderInlineEnd:ww,borderInlineStart:ww,borderLeft:ww,borderLeftColor:ww,borderRight:ww,borderRightColor:ww,borderTop:ww,borderTopColor:ww,caretColor:ww,color:ww,columnRuleColor:ww,fill:ww,outline:ww,outlineColor:ww,stroke:ww,textDecorationColor:ww,fontFamily:'fonts',fontWeight:'fontWeights',lineHeight:'lineHeights',letterSpacing:'letterSpacings',blockSize:xw,minBlockSize:xw,maxBlockSize:xw,inlineSize:xw,minInlineSize:xw,maxInlineSize:xw,width:xw,minWidth:xw,maxWidth:xw,height:xw,minHeight:xw,maxHeight:xw,flexBasis:xw,gridTemplateColumns:xw,gridTemplateRows:xw,borderWidth:'borderWidths',borderTopWidth:'borderWidths',borderRightWidth:'borderWidths',borderBottomWidth:'borderWidths',borderLeftWidth:'borderWidths',borderStyle:'borderStyles',borderTopStyle:'borderStyles',borderRightStyle:'borderStyles',borderBottomStyle:'borderStyles',borderLeftStyle:'borderStyles',borderRadius:'radii',borderTopLeftRadius:'radii',borderTopRightRadius:'radii',borderBottomRightRadius:'radii',borderBottomLeftRadius:'radii',boxShadow:'shadows',textShadow:'shadows',transition:'transitions',zIndex:'zIndices'},Ew=(e,t)=>'function'==typeof t?{'()':Function.prototype.toString.call(t)}:t,kw=()=>{const e=Object.create(null)
return(t,n,...r)=>{const a=(o=t,JSON.stringify(o,Ew))
var o
return a in e?e[a]:e[a]=n(t,...r)}},Nw=Symbol.for('sxs.internal'),Rw=(e,t)=>Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)),Pw=e=>{for(const t in e)return!0
return!1},{hasOwnProperty:Tw}=Object.prototype,Mw=e=>e.includes('-')?e:e.replace(/[A-Z]/g,(e=>'-'+e.toLowerCase())),_w=/\s+(?![^()]*\))/,Lw=e=>t=>e(...'string'==typeof t?String(t).split(_w):[t]),Dw={appearance:e=>({WebkitAppearance:e,appearance:e}),backfaceVisibility:e=>({WebkitBackfaceVisibility:e,backfaceVisibility:e}),backdropFilter:e=>({WebkitBackdropFilter:e,backdropFilter:e}),backgroundClip:e=>({WebkitBackgroundClip:e,backgroundClip:e}),boxDecorationBreak:e=>({WebkitBoxDecorationBreak:e,boxDecorationBreak:e}),clipPath:e=>({WebkitClipPath:e,clipPath:e}),content:e=>({content:e.includes('"')||e.includes('\'')||/^([A-Za-z]+\([^]*|[^]*-quote|inherit|initial|none|normal|revert|unset)$/.test(e)?e:`"${e}"`}),hyphens:e=>({WebkitHyphens:e,hyphens:e}),maskImage:e=>({WebkitMaskImage:e,maskImage:e}),maskSize:e=>({WebkitMaskSize:e,maskSize:e}),tabSize:e=>({MozTabSize:e,tabSize:e}),textSizeAdjust:e=>({WebkitTextSizeAdjust:e,textSizeAdjust:e}),userSelect:e=>({WebkitUserSelect:e,userSelect:e}),marginBlock:Lw(((e,t)=>({marginBlockStart:e,marginBlockEnd:t||e}))),marginInline:Lw(((e,t)=>({marginInlineStart:e,marginInlineEnd:t||e}))),maxSize:Lw(((e,t)=>({maxBlockSize:e,maxInlineSize:t||e}))),minSize:Lw(((e,t)=>({minBlockSize:e,minInlineSize:t||e}))),paddingBlock:Lw(((e,t)=>({paddingBlockStart:e,paddingBlockEnd:t||e}))),paddingInline:Lw(((e,t)=>({paddingInlineStart:e,paddingInlineEnd:t||e})))},jw=/([\d.]+)([^]*)/,Iw=(e,t)=>e.length?e.reduce(((e,n)=>(e.push(...t.map((e=>e.includes('&')?e.replace(/&/g,/[ +>|~]/.test(n)&&/&.*&/.test(e)?`:is(${n})`:n):n+' '+e))),e)),[]):t,Aw=(e,t)=>e in Ow&&'string'==typeof t?t.replace(/^((?:[^]*[^\w-])?)(fit-content|stretch)((?:[^\w-][^]*)?)$/,((t,n,r,a)=>n+('stretch'===r?`-moz-available${a};${Mw(e)}:${n}-webkit-fill-available`:`-moz-fit-content${a};${Mw(e)}:${n}fit-content`)+a)):String(t),Ow={blockSize:1,height:1,inlineSize:1,maxBlockSize:1,maxHeight:1,maxInlineSize:1,maxWidth:1,minBlockSize:1,minHeight:1,minInlineSize:1,minWidth:1,width:1},zw=e=>e?e+'-':'',Fw=(e,t,n)=>e.replace(/([+-])?((?:\d+(?:\.\d*)?|\.\d+)(?:[Ee][+-]?\d+)?)?(\$|--)([$\w-]+)/g,((e,r,a,o,l)=>'$'==o==!!a?e:(r||'--'==o?'calc(':'')+'var(--'+('$'===o?zw(t)+(l.includes('$')?'':zw(n))+l.replace(/\$/g,'-'):l)+')'+(r||'--'==o?'*'+(r||'')+(a||'1')+')':''))),Bw=/\s*,\s*(?![^()]*\))/,$w=Object.prototype.toString,Hw=(e,t,n,r,a)=>{let o,l,i
const s=(e,t,n)=>{let c,u
const d=e=>{for(c in e){const m=64===c.charCodeAt(0),h=m&&Array.isArray(e[c])?e[c]:[e[c]]
for(u of h){const e=/[A-Z]/.test(p=c)?p:p.replace(/-[^]/g,(e=>e[1].toUpperCase())),h='object'==typeof u&&u&&u.toString===$w&&(!r.utils[e]||!t.length)
if(e in r.utils&&!h){const t=r.utils[e]
if(t!==l){l=t,d(t(u)),l=null
continue}}else if(e in Dw){const t=Dw[e]
if(t!==i){i=t,d(t(u)),i=null
continue}}if(m&&(f=c.slice(1)in r.media?'@media '+r.media[c.slice(1)]:c,c=f.replace(/\(\s*([\w-]+)\s*(=|<|<=|>|>=)\s*([\w-]+)\s*(?:(<|<=|>|>=)\s*([\w-]+)\s*)?\)/g,((e,t,n,r,a,o)=>{const l=jw.test(t),i=.0625*(l?-1:1),[s,c]=l?[r,t]:[t,r]
return'('+('='===n[0]?'':'>'===n[0]===l?'max-':'min-')+s+':'+('='!==n[0]&&1===n.length?c.replace(jw,((e,t,r)=>Number(t)+i*('>'===n?1:-1)+r)):c)+(a?') and ('+('>'===a[0]?'min-':'max-')+s+':'+(1===a.length?o.replace(jw,((e,t,n)=>Number(t)+i*('>'===a?-1:1)+n)):o):'')+')'}))),h){const e=m?n.concat(c):[...n],r=m?[...t]:Iw(t,c.split(Bw))
void 0!==o&&a(Vw(...o)),o=void 0,s(u,r,e)}else void 0===o&&(o=[[],t,n]),c=m||36!==c.charCodeAt(0)?c:`--${zw(r.prefix)}${c.slice(1).replace(/\$/g,'-')}`,u=h?u:'number'==typeof u?u&&e in Ww?String(u)+'px':String(u):Fw(Aw(e,null==u?'':u),r.prefix,r.themeMap[e]),o[0].push(`${m?`${c} `:`${Mw(c)}:`}${u}`)}}var f,p}
d(e),void 0!==o&&a(Vw(...o)),o=void 0}
s(e,t,n)},Vw=(e,t,n)=>`${n.map((e=>`${e}{`)).join('')}${t.length?`${t.join(',')}{`:''}${e.join(';')}${t.length?'}':''}${Array(n.length?n.length+1:0).join('}')}`,Ww={animationDelay:1,animationDuration:1,backgroundSize:1,blockSize:1,border:1,borderBlock:1,borderBlockEnd:1,borderBlockEndWidth:1,borderBlockStart:1,borderBlockStartWidth:1,borderBlockWidth:1,borderBottom:1,borderBottomLeftRadius:1,borderBottomRightRadius:1,borderBottomWidth:1,borderEndEndRadius:1,borderEndStartRadius:1,borderInlineEnd:1,borderInlineEndWidth:1,borderInlineStart:1,borderInlineStartWidth:1,borderInlineWidth:1,borderLeft:1,borderLeftWidth:1,borderRadius:1,borderRight:1,borderRightWidth:1,borderSpacing:1,borderStartEndRadius:1,borderStartStartRadius:1,borderTop:1,borderTopLeftRadius:1,borderTopRightRadius:1,borderTopWidth:1,borderWidth:1,bottom:1,columnGap:1,columnRule:1,columnRuleWidth:1,columnWidth:1,containIntrinsicSize:1,flexBasis:1,fontSize:1,gap:1,gridAutoColumns:1,gridAutoRows:1,gridTemplateColumns:1,gridTemplateRows:1,height:1,inlineSize:1,inset:1,insetBlock:1,insetBlockEnd:1,insetBlockStart:1,insetInline:1,insetInlineEnd:1,insetInlineStart:1,left:1,letterSpacing:1,margin:1,marginBlock:1,marginBlockEnd:1,marginBlockStart:1,marginBottom:1,marginInline:1,marginInlineEnd:1,marginInlineStart:1,marginLeft:1,marginRight:1,marginTop:1,maxBlockSize:1,maxHeight:1,maxInlineSize:1,maxWidth:1,minBlockSize:1,minHeight:1,minInlineSize:1,minWidth:1,offsetDistance:1,offsetRotate:1,outline:1,outlineOffset:1,outlineWidth:1,overflowClipMargin:1,padding:1,paddingBlock:1,paddingBlockEnd:1,paddingBlockStart:1,paddingBottom:1,paddingInline:1,paddingInlineEnd:1,paddingInlineStart:1,paddingLeft:1,paddingRight:1,paddingTop:1,perspective:1,right:1,rowGap:1,scrollMargin:1,scrollMarginBlock:1,scrollMarginBlockEnd:1,scrollMarginBlockStart:1,scrollMarginBottom:1,scrollMarginInline:1,scrollMarginInlineEnd:1,scrollMarginInlineStart:1,scrollMarginLeft:1,scrollMarginRight:1,scrollMarginTop:1,scrollPadding:1,scrollPaddingBlock:1,scrollPaddingBlockEnd:1,scrollPaddingBlockStart:1,scrollPaddingBottom:1,scrollPaddingInline:1,scrollPaddingInlineEnd:1,scrollPaddingInlineStart:1,scrollPaddingLeft:1,scrollPaddingRight:1,scrollPaddingTop:1,shapeMargin:1,textDecoration:1,textDecorationThickness:1,textIndent:1,textUnderlineOffset:1,top:1,transitionDelay:1,transitionDuration:1,verticalAlign:1,width:1,wordSpacing:1},Uw=e=>String.fromCharCode(e+(e>25?39:97)),Kw=e=>(e=>{let t,n=''
for(t=Math.abs(e);t>52;t=t/52|0)n=Uw(t%52)+n
return Uw(t%52)+n})(((e,t)=>{let n=t.length
for(;n;)e=33*e^t.charCodeAt(--n)
return e})(5381,JSON.stringify(e))>>>0),Gw=['themed','global','styled','onevar','resonevar','allvar','inline'],qw=e=>{if(e.href&&!e.href.startsWith(location.origin))return!1
try{return!!e.cssRules}catch(t){return!1}},Yw=e=>{let t
const n=()=>{const{cssRules:e}=t.sheet
return[].map.call(e,((n,r)=>{const{cssText:a}=n
let o=''
if(a.startsWith('--sxs'))return''
if(e[r-1]&&(o=e[r-1].cssText).startsWith('--sxs')){if(!n.cssRules.length)return''
for(const e in t.rules)if(t.rules[e].group===n)return`--sxs{--sxs:${[...t.rules[e].cache].join(' ')}}${a}`
return n.cssRules.length?`${o}${a}`:''}return a})).join('')},r=()=>{if(t){const{rules:e,sheet:n}=t
if(!n.deleteRule){for(;3===Object(Object(n.cssRules)[0]).type;)n.cssRules.splice(0,1)
n.cssRules=[]}for(const t in e)delete e[t]}const a=Object(e).styleSheets||[]
for(const e of a)if(qw(e)){for(let a=0,o=e.cssRules;o[a];++a){const l=Object(o[a])
if(1!==l.type)continue
const i=Object(o[a+1])
if(4!==i.type)continue;++a
const{cssText:s}=l
if(!s.startsWith('--sxs'))continue
const c=s.slice(14,-3).trim().split(/\s+/),u=Gw[c[0]]
u&&(t||(t={sheet:e,reset:r,rules:{},toString:n}),t.rules[u]={group:i,index:a,cache:new Set(c)})}if(t)break}if(!t){const a=(e,t)=>({type:t,cssRules:[],insertRule(e,t){this.cssRules.splice(t,0,a(e,{import:3,undefined:1}[(e.toLowerCase().match(/^@([a-z]+)/)||[])[1]]||4))},get cssText(){return'@media{}'===e?`@media{${[].map.call(this.cssRules,(e=>e.cssText)).join('')}}`:e}})
t={sheet:e?(e.head||e).appendChild(document.createElement('style')).sheet:a('','text/css'),rules:{},reset:r,toString:n}}const{sheet:o,rules:l}=t
for(let e=Gw.length-1;e>=0;--e){const t=Gw[e]
if(!l[t]){const n=Gw[e+1],r=l[n]?l[n].index:o.cssRules.length
o.insertRule('@media{}',r),o.insertRule(`--sxs{--sxs:${e}}`,r),l[t]={group:o.cssRules[r+1],index:r,cache:new Set([e])}}Xw(l[t])}}
return r(),t},Xw=e=>{const t=e.group
let n=t.cssRules.length
e.apply=e=>{try{t.insertRule(e,n),++n}catch(r){}}},Qw=Symbol(),Zw=kw(),Jw=(e,t)=>Zw(e,(()=>(...n)=>{let r={type:null,composers:new Set}
for(const t of n)if(null!=t)if(t[Nw]){null==r.type&&(r.type=t[Nw].type)
for(const e of t[Nw].composers)r.composers.add(e)}else t.constructor!==Object||t.$$typeof?null==r.type&&(r.type=t):r.composers.add(ex(t,e))
return null==r.type&&(r.type='span'),r.composers.size||r.composers.add(['PJLV',{},[],[],{},[]]),tx(e,r,t)})),ex=({variants:e,compoundVariants:t,defaultVariants:n,...r},a)=>{const o=`${zw(a.prefix)}c-${Kw(r)}`,l=[],i=[],s=Object.create(null),c=[]
for(const f in n)s[f]=String(n[f])
if('object'==typeof e&&e)for(const f in e){u=s,d=f,Tw.call(u,d)||(s[f]='undefined')
const t=e[f]
for(const e in t){const n={[f]:String(e)}
'undefined'===String(e)&&c.push(f)
const r=t[e],a=[n,r,!Pw(r)]
l.push(a)}}var u,d
if('object'==typeof t&&t)for(const f of t){let{css:e,...t}=f
e='object'==typeof e&&e||{}
for(const r in t)t[r]=String(t[r])
const n=[t,e,!Pw(e)]
i.push(n)}return[o,r,l,i,s,c]},tx=(e,t,n)=>{const[r,a,o,l]=nx(t.composers),i='function'==typeof t.type||t.type.$$typeof?(e=>{function t(){for(let n=0;n<t[Qw].length;n++){const[r,a]=t[Qw][n]
e.rules[r].apply(a)}return t[Qw]=[],null}return t[Qw]=[],t.rules={},Gw.forEach((e=>t.rules[e]={apply:n=>t[Qw].push([e,n])})),t})(n):null,s=(i||n).rules,c=`.${r}${a.length>1?`:where(.${a.slice(1).join('.')})`:''}`,u=u=>{u='object'==typeof u&&u||ax
const{css:d,...f}=u,p={}
for(const e in o)if(delete f[e],e in u){let t=u[e]
'object'==typeof t&&t?p[e]={'@initial':o[e],...t}:(t=String(t),p[e]='undefined'!==t||l.has(e)?t:o[e])}else p[e]=o[e]
const m=new Set([...a])
for(const[r,a,o,l]of t.composers){n.rules.styled.cache.has(r)||(n.rules.styled.cache.add(r),Hw(a,[`.${r}`],[],e,(e=>{s.styled.apply(e)})))
const t=rx(o,p,e.media),i=rx(l,p,e.media,!0)
for(const a of t)if(void 0!==a)for(const[t,o,l]of a){const a=`${r}-${Kw(o)}-${t}`
m.add(a)
const i=(l?n.rules.resonevar:n.rules.onevar).cache,c=l?s.resonevar:s.onevar
i.has(a)||(i.add(a),Hw(o,[`.${a}`],[],e,(e=>{c.apply(e)})))}for(const a of i)if(void 0!==a)for(const[t,o]of a){const a=`${r}-${Kw(o)}-${t}`
m.add(a),n.rules.allvar.cache.has(a)||(n.rules.allvar.cache.add(a),Hw(o,[`.${a}`],[],e,(e=>{s.allvar.apply(e)})))}}if('object'==typeof d&&d){const t=`${r}-i${Kw(d)}-css`
m.add(t),n.rules.inline.cache.has(t)||(n.rules.inline.cache.add(t),Hw(d,[`.${t}`],[],e,(e=>{s.inline.apply(e)})))}for(const e of String(u.className||'').trim().split(/\s+/))e&&m.add(e)
const h=f.className=[...m].join(' ')
return{type:t.type,className:h,selector:c,props:f,toString:()=>h,deferredInjector:i}}
return Rw(u,{className:r,selector:c,[Nw]:t,toString:()=>(n.rules.styled.cache.has(r)||u(),r)})},nx=e=>{let t=''
const n=[],r={},a=[]
for(const[o,,,,l,i]of e){''===t&&(t=o),n.push(o),a.push(...i)
for(const e in l){const t=l[e];(void 0===r[e]||'undefined'!==t||i.includes(t))&&(r[e]=t)}}return[t,n,r,new Set(a)]},rx=(e,t,n,r)=>{const a=[]
e:for(let[o,l,i]of e){if(i)continue
let e,s=0,c=!1
for(e in o){const r=o[e]
let a=t[e]
if(a!==r){if('object'!=typeof a||!a)continue e
{let e,t,o=0
for(const l in a){if(r===String(a[l])){if('@initial'!==l){const e=l.slice(1);(t=t||[]).push(e in n?n[e]:l.replace(/^@media ?/,'')),c=!0}s+=o,e=!0}++o}if(t&&t.length&&(l={['@media '+t.join(', ')]:l}),!e)continue e}}}(a[s]=a[s]||[]).push([r?'cv':`${e}-${o[e]}`,l,c])}return a},ax={},ox=kw(),lx=(e,t)=>ox(e,(()=>(...n)=>{const r=()=>{for(let r of n){r='object'==typeof r&&r||{}
let n=Kw(r)
if(!t.rules.global.cache.has(n)){if(t.rules.global.cache.add(n),'@import'in r){let e=[].indexOf.call(t.sheet.cssRules,t.rules.themed.group)-1
for(let n of[].concat(r['@import']))n=n.includes('"')||n.includes('\'')?n:`"${n}"`,t.sheet.insertRule(`@import ${n};`,e++)
delete r['@import']}Hw(r,[],[],e,(e=>{t.rules.global.apply(e)}))}}return''}
return Rw(r,{toString:r})})),ix=kw(),sx=(e,t)=>ix(e,(()=>n=>{const r=`${zw(e.prefix)}k-${Kw(n)}`,a=()=>{if(!t.rules.global.cache.has(r)){t.rules.global.cache.add(r)
const a=[]
Hw(n,[],[],e,(e=>a.push(e)))
const o=`@keyframes ${r}{${a.join('')}}`
t.rules.global.apply(o)}return r}
return Rw(a,{get name(){return a()},toString:a})})),cx=class{constructor(e,t,n,r){this.token=null==e?'':String(e),this.value=null==t?'':String(t),this.scale=null==n?'':String(n),this.prefix=null==r?'':String(r)}get computedValue(){return'var('+this.variable+')'}get variable(){return'--'+zw(this.prefix)+zw(this.scale)+this.token}toString(){return this.computedValue}},ux=kw(),dx=(e,t)=>ux(e,(()=>(n,r)=>{r='object'==typeof n&&n||Object(r)
const a=`.${n=(n='string'==typeof n?n:'')||`${zw(e.prefix)}t-${Kw(r)}`}`,o={},l=[]
for(const t in r){o[t]={}
for(const n in r[t]){const a=`--${zw(e.prefix)}${t}-${n}`,i=Fw(String(r[t][n]),e.prefix,t)
o[t][n]=new cx(n,i,t,e.prefix),l.push(`${a}:${i}`)}}const i=()=>{if(l.length&&!t.rules.themed.cache.has(n)){t.rules.themed.cache.add(n)
const a=`${r===e.theme?':root,':''}.${n}{${l.join(';')}}`
t.rules.themed.apply(a)}return n}
return{...o,get className(){return i()},selector:a,toString:i}})),fx=kw(),px=kw(),mx=()=>bw||(bw=(()=>{const e=(()=>{let e=!1
const t=fx(void 0,(t=>{e=!0
const n='prefix'in(t='object'==typeof t&&t||{})?String(t.prefix):'',r='object'==typeof t.media&&t.media||{},a='object'==typeof t.root?t.root||null:globalThis.document||null,o='object'==typeof t.theme&&t.theme||{},l={prefix:n,media:r,theme:o,themeMap:'object'==typeof t.themeMap&&t.themeMap||{...Sw},utils:'object'==typeof t.utils&&t.utils||{}},i=Yw(a),s={css:Jw(l,i),globalCss:lx(l,i),keyframes:sx(l,i),createTheme:dx(l,i),reset(){i.reset(),s.theme.toString()},theme:{},sheet:i,config:l,prefix:n,getCssText:i.toString,toString:i.toString}
return String(s.theme=s.createTheme(o)),s}))
return e||t.reset(),t})()
return e.styled=(({config:e,sheet:t})=>px(e,(()=>{const n=Jw(e,t)
return(...e)=>{const t=n(...e),r=t[Nw].type,a=m.forwardRef(((e,n)=>{const a=e&&e.as||r,{props:o,deferredInjector:l}=t(e)
return delete o.as,o.ref=n,l?m.createElement(m.Fragment,null,m.createElement(a,o),m.createElement(l,null)):m.createElement(a,o)}))
return a.className=t.className,a.displayName=`Styled.${r.displayName||r.name||r}`,a.selector=t.selector,a.toString=()=>t.selector,a[Nw]=t[Nw],a}})))(e),e})()),hx=(...e)=>mx().keyframes(...e),vx=(...e)=>mx().styled(...e)
const gx=vx(jg,{fontSize:'35.5px',fontWeight:'500',color:'var(--color-base-background)'}),yx=vx(jg,{fontSize:'35.5px',fontWeight:'500',color:'var(--color-base-background)'}),bx=vx(jg,{fontSize:'55.5px',fontWeight:'600',color:'var(--color-base-background)'}),wx=hx({'0%':{opacity:0,transform:'translateY(30px) scaleX(0.0)'},'100%':{opacity:1,transform:'translateY(0px) scaleX(1.0)'}}),xx=hx({'0%':{color:'#fff',transform:'scaleX(0.0)'},'100%':{color:'var(--color-base-secondary)',transform:'scaleX(1.0)'}}),Cx=hx({'0%':{opacity:0,transform:'translateY(60px)'},'100%':{opacity:1,transform:'translateY(0px)'}}),Sx=vx(ry,{width:'65px',height:'65px',borderRadius:'32.5px',boxSizing:'border-box',background:'var(--color-base-primary)',transition:'background 0.65s ease-out',color:'#fff',cursor:'pointer',display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'center','&:hover':{background:'var(--color-base-secondary)','.url-link':{transform:'scaleX(1.0)',opacity:'1'}}}),Ex=vx(ry,{display:'flex',flexDirection:'row',alignItems:'center',gap:'10px',position:'absolute',left:'0px',width:'fit-content',height:'inherit',padding:'10.5px',paddingLeft:'65.5px',boxSizing:'border-box',borderRadius:'inherit',fontSize:'19.5px',fontWeight:'bold',border:'3px solid var(--color-base-secondary)',color:'#fff',transition:'transform 0.65s ease-out',transform:'scaleX(0.0)',transformOrigin:'center left',opacity:'0',overflow:'hidden'}),kx=hx({'0%':{opacity:'0',transform:'translateY(-10px)'},'100%':{opacity:'1',transform:'translateY(0px)'}}),Nx=vx(ry,{width:'100dvw',height:'100dvh',overflowX:'hidden',overflowY:'auto',background:'var(--color-dark-primary)'}),Rx=vx(sy,{position:'sticky',top:'0px',width:'100%',padding:'15.5px',flexDirection:'row',alignItems:'center',justifyContent:'space-between',boxSizing:'border-box',background:'linear-gradient(45deg,var(--color-dark-primary), var(--color-base-primary))',zIndex:'100'}),Px=vx(tw,{fontSize:'15.5px',fontWeight:'500',transition:'color 0.35s',color:'var(--color-base-background)',padding:'10px',opacity:'0',animationFillMode:'both',cursor:'pointer',background:'transparent',animation:`${kx} 0.5s ease-out forwards`,'&:hover':{background:'transparent',color:'var(--color-base-secondary)'}}),Tx=vx(ry,{backgroundImage:'url(/static/img/code.png)',backgroundSize:'cover',backgroundPosition:'center',backgroundRepeat:'no-repeat',width:'100dvw',height:'100dvh',overflow:'hidden',position:'relative',display:'flex',flexDirection:'column',justifyContent:'flex-end',alignItems:'center'}),Mx=vx(vy,{width:'fit-content',padding:'10px 3.5px',boxSizing:'border-box',fontSize:'21.5px',fontWeight:'400',borderRadius:'5.5px',background:'var(--color-base-secondary)',transform:'background 0.55s',color:'var(--color-base-background)','&:hover':{background:'var(--color-base-secondary)'},cursor:'pointer'}),_x=hx({'0%':{transform:'translateY(100px)',opacity:'0'},'100%':{transform:'translateY(0px)',opacity:'1'}}),Lx=vx(ry,{padding:'15.5px 15px',borderRadius:'25.5px',border:'5px solid transparent',position:'absolute',top:'calc(50% + 30px)',left:'calc(50% + 40px)',zIndex:1,fontSize:'22.5px',fontWeight:'bold',backgroundColor:'linear-gradient(45deg,var(--color-base-secondary), var(--color-base-background))',backgroundClip:'text',animation:`${_x} 1.8s 1 both`,'-webkit-text-fill-color':'#fff','&::before':{content:'""',position:'absolute',top:'-5px',left:'-5px',right:'-5px',bottom:'-5px',borderRadius:'30.5px',background:'linear-gradient(45deg, var(--color-base-secondary), var(--color-base-background))',zIndex:-1},'&::after':{content:'""',position:'absolute',top:'0',left:'0',right:'0',bottom:'0',borderRadius:'25.5px',background:'var(--color-base-primary)',zIndex:-1}}),Dx=vx(ry,{margin:'0 auto',boxSizing:'border-box',width:'1280px',fontSize:'35.5px'}),jx=vx(ry,{width:'64.5%',height:'fit-content',padding:'20px',boxSizing:'border-box',background:'var(--color-base-primary)',borderRadius:'1rem',cursor:'pointer',color:'#fff',transition:'background 0.55s ease-in','&:hover':{background:'var(--color-base-secondary)',color:'var(--color-base-text)'}}),Ix=vx(jg,{fontSize:'inherit',fontWeight:'600',color:'var( --color-base-secondary)',overflow:'hidden'}),Ax=vx(ry,{width:'100%',fontSize:'1.15rem',fontWeight:'400',color:'inherit'}),Ox=vx(sy,{flexDirection:'column',gap:'12.5px',width:'inherit'}),zx=p.createContext({isHovered:!1}),Fx=({children:e})=>{const{isHovered:t}=p.useContext(zx),n=p.useRef(null)
return p.useEffect((()=>{n.current&&t&&(e=>{const t=e.querySelectorAll('.highlighted-char')
t.length&&(e=>{let t=0,n=-1
const r=()=>{t<=e.length&&e[t]?(e[t].style.setProperty('transform','rotateY(360deg)'),t+=1,n=requestAnimationFrame(r)):cancelAnimationFrame(n)};-1===n&&r()})(t)})(n.current)}),[t]),s.jsx(Ix,{ref:n,children:'string'==typeof e?e.split('').map(((e,n)=>s.jsx(jg,{as:'span',className:'highlighted-char',style:{display:'inline-block',fontSize:'inherit',fontWeight:'500',color:t?'rgb(58, 134, 255)':'inherit',transition:'transform 0.43s ease-out',transform:t?'rotateX(360deg)':'rotateX(0deg)'},children:e},`${e}_${n}`))):e})},Bx=({subtitle:e,text:t})=>{const[n,r]=p.useState(!1)
return s.jsxs(jx,{onMouseOver:()=>{r(!0)},onMouseLeave:()=>{r(!1)},className:'intro-box',css:{transition:'transform 0.65s linear, background 0.23s ease-in',transform:'translate3d(0, 0, 0) scale(0.0, 0.0)'},children:[s.jsx(gx,{as:'h3',css:{color:'inherit',fontSize:'1.5rem',fontWeight:'600'},children:e}),s.jsx(zx.Provider,{value:{isHovered:n},children:s.jsx(Ax,{as:'article',children:t})})]})},$x=()=>s.jsxs(s.Fragment,{children:[s.jsx(Bx,{subtitle:'Q: \ub2f9\uc2e0\uc740 \uc5b4\ub5a4 \uac1c\ubc1c\uc790 \uc778\uac00\uc694?',text:s.jsxs(jg,{children:['\uc800\ub294 ',s.jsx(Fx,{children:'Tactical'}),'\ud55c \uac1c\ubc1c\uc790 \uc785\ub2c8\ub2e4. \ud504\ub85c\uc81d\ud2b8\uc5d0 \uc784\ud560 \ub54c, \uc7a5/\ub2e8\uae30 \uac04\uc758 \ubaa9\ud45c\uc640 \uc5c5\ubb34\uc758 \uc6b0\uc120\uc21c\uc704\ub97c \uc801\uc808\ud558\uac8c \uc124\uc815\ud569\ub2c8\ub2e4. ',s.jsx('br',{}),' \ub610\ud55c \uac1c\ubc1c \uacb0\uacfc\ubb3c\uc758 ',s.jsx(Fx,{children:'Quality'}),'\ub97c \ucd5c\uc801\ud654 \ud558\uae30 \uc704\ud574\uc11c, \uc81c\ud488\uc5d0 \ub300\ud55c \ubcf8\uc9c8\uacfc \uae30\ud68d \uadf8\ub9ac\uace0 \ub300\uc0c1 \uc0ac\uc6a9\uc790\ub4e4\uc5d0 \ub300\ud55c \uae4a\uc740 \uc774\ud574\ub97c \uc6b0\uc120\uc73c\ub85c \ud55c \ucc44\ub85c \uac1c\ubc1c\uc791\uc5c5\uc744 \uc9c4\ud589\ud569\ub2c8\ub2e4.']})}),s.jsx(Bx,{subtitle:'Q: \uc18c\ud504\ud2b8\uc6e8\uc5b4 \uac1c\ubc1c\uc744 \ud560 \ub54c \uc5b4\ub5a4 \ubc29\uc2dd\uc73c\ub85c \uc791\uc5c5\uc744 \uc9c4\ud589\ud558\ub098\uc694?',text:s.jsxs(jg,{children:['1. \ud3b8\ub9ac\ud558\uac8c \uc720\uc9c0 \ubcf4\uc218 \ud560 \uc218 \uc788\uace0, \xa0 \ubc18\ubcf5\uc131\uc774 \ucd5c\uc18c\ud654\ub41c',' ',s.jsx(Fx,{children:'Clean Architecture'}),'\ud615\ud0dc\ub97c \uac16\ucd98 CodeBase \ud615\ud0dc\ub97c \uc9c0\ud5a5\ud569\ub2c8\ub2e4. \ubaa8\ub4c8\uac04\uc758',' ',s.jsx(Fx,{children:' \uad00\uc2ec\uc0ac \ubd84\ub9ac'}),'\uc640',s.jsx(Fx,{children:'\ucd94\uc0c1\ud654 (Abstraction)'}),' ','\uacfc\uc815\uc744 \ud1b5\ud574 ',s.jsx(Fx,{children:'\uc720\uc5f0\uc131'}),'\uacfc',' ',s.jsx(Fx,{children:'\ud655\uc7a5\uc131'}),' \uc744 \uc9c0\ub2cc \uc18c\ud504\ud2b8\uc6e8\uc5b4 Archtecture\ub97c \uc801\uc6a9\ud558\uae30 \uc704\ud574 \ub178\ub825\ud569\ub2c8\ub2e4.',s.jsx('br',{}),s.jsx('br',{}),'2. ',s.jsx(Fx,{children:'Agile'}),' \ud55c \ubc29\uc2dd\uc73c\ub85c \uc791\uc5c5\uc744 \uc9c4\ud589\ud574 \uc654\uc2b5\ub2c8\ub2e4.',' ',s.jsx(Fx,{children:'Scrum'}),' \ud68c\uc758\ub97c \ud1b5\ud574\uc11c \ub2e4\uc591\ud55c \uc9c1\uad70\uc5d0 \uc18c\uc18d\ub41c \ub3d9\ub8cc\ub4e4\uacfc \uc9c1\uba74\ud55c \ubb38\uc81c\ub97c \ub2e4\uac01\ub3c4\ub85c \uc811\uadfc\ud569\ub2c8\ub2e4. ',s.jsx('br',{}),'\ub610\ud55c, \uc9c0\uc18d\uc801\uc778 \ud68c\uace0\ub97c \ud1b5\ud574, \uac1c\uc120\uc0ac\ud56d\uc744 \ub2e4\uc74c\ubc88',' ',s.jsx(Fx,{children:'Sprint'}),'\uc5d0 \uc801\uadf9 \ubc18\uc601\ud558\uc5ec, \uc81c\ud488\uc758 \ud488\uc9c8\uc744 \ub192\ud614\uc2b5\ub2c8\ub2e4.']})}),s.jsx(Bx,{subtitle:'Q: \ucee4\ub9ac\uc5b4\uc758 \uad81\uad6d\uc801\uc778 \ubaa9\ud45c\ub294?',text:s.jsxs(jg,{children:[s.jsx(Fx,{children:'\ub300\uccb4 \ubd88\uac00\ub2a5\ud55c \uac1c\ubc1c\uc790'}),'\uac00 \ub418\ub294 \uac83\uc774 \ubaa9\ud45c\uc785\ub2c8\ub2e4. \uadf8\ub807\ub2e4\uba74, \ub300\uccb4\uac00 \ubd88\uac00\ub2a5\ud55c \uac1c\ubc1c\uc790\ub780 \uc5b4\ub5a4 \uac1c\ubc1c\uc790\uc77c \uae4c\uc694? \uadf8\ub9ac\uace0 \ub300\uccb4\uac00 \ubd88\uac00\ub2a5\ud55c \uc778\uc7ac\uac00 \ub418\uae30 \uc704\ud574\uc120 \uc5b4\ub5a4 \uc5ed\ub7c9\ub4e4\uc744 \uac16\ucdb0\uc57c \ud560\uae4c\uc694?']})}),s.jsx(Bx,{subtitle:'Q: \ub300\uccb4 \ubd88\uac00\ub2a5\ud55c \uac1c\ubc1c\uc790\uc640 \uac16\ucdb0\uc57c \ud560 \uc5ed\ub7c9\uc774\ub780?',text:s.jsxs(jg,{children:[s.jsx(Fx,{children:'\ub300\uccb4 \ubd88\uac00\ub2a5\ud55c \uac1c\ubc1c\uc790'}),'\ub780 \uafb8\uc900\ud55c Performace \ub97c \ud1b5\ud574 \uc18c\uc18d\ub41c \ud68c\uc0ac\uc5d0 \uafb8\uc900\ud55c \uc218\uc775\uc744 \ub9cc\ub4e4\uc5b4 \uc8fc\ub294 \uac1c\ubc1c\uc790 \uc785\ub2c8\ub2e4.',' ',s.jsx(Fx,{children:'Front End \uac1c\ubc1c\uc790'}),'\ub294 \uace0\uac1d\uc5d0\uac8c \uc11c\ube44\uc2a4\ub97c \uc804\ub2ec\ud558\ub294 \ub9e4\uac1c\uccb4\ub97c \uac1c\ubc1c\ud569\ub2c8\ub2e4. \uadf8\ub807\uae30 \ub54c\ubb38\uc5d0, \uc0ac\uc6a9\uc790\uac00 \uace0\uac1d\uc774 \ub418\uac8c \ub9cc\ub4dc\ub294',' ',s.jsx(Fx,{children:'User Experience'}),'\ub97c \uc81c\uacf5\ud558\uae30 \uc704\ud574\uc11c\ub294, \uac1c\ubc1c \ubc0f',s.jsx(Fx,{children:'Computer Science'}),' \uc5d0 \ub300\ud55c \uc9c0\uc2dd\ub4e4\uacfc',' ',s.jsx(Fx,{children:'\uc81c\ud488\uacfc \uace0\uac1d\ub4e4\uc5d0 \ub300\ud55c \ud1b5\ucc30'}),' ','\uc774 \ud544\uc694\ud569\ub2c8\ub2e4. \uc774\ub7ec\ud55c \ucee4\ub9ac\uc5b4\uc758 \ubaa9\ud45c\ub97c \ub2ec\uc131\ud558\uae30 \uc704\ud574, \uc6b4\uc601\uccb4\uc81c\uc640 \ucef4\ud4e8\ud130 \uad6c\uc870 \ubc0f front end \uc9c0\uc2dd\ub4e4\uc5d0 \ub300\ud55c \uafb8\uc900\ud55c \ud559\uc2b5\uc744 \ud1b5\ud574 \uac1c\ubc1c \ub2a5\ub825\uc744 \uafb8\uc900\ud788 \uae38\ub7ec \uc654\uc2b5\ub2c8\ub2e4. \uadf8\ub9ac\uace0 \ub2f4\ub2f9\ud558\uace0 \uc788\ub294 \uc81c\ud488\uacfc \uace0\uac1d\ub4e4\uc744 \uc5ec\ub7ec \uad00\uc810\uc5d0\uc11c \uc774\ud574\ud558\uae30 \uc704\ud558\uc5ec, \uc778\ubb38\ud559\uacfc \uc0ac\ud68c\ud604\uc0c1\uc5d0 \ub300\ud558\uc5ec \uc5f0\uad6c\ud558\uace0 \uace0\ucc30\ud558\uc600\uc2b5\ub2c8\ub2e4.',s.jsx('br',{}),' ',s.jsx('br',{})]})})]}),Hx=p.memo((()=>{const e=p.useRef(null),t=yw(function(){const e=m.useRef(void 0)
return t=>{const n=(e=>e.introElemObserver)(t)
return r=e.current,a=n,Object.is(r,a)||'object'==typeof r&&null!==r&&'object'==typeof a&&null!==a&&(pw(r)&&pw(a)?mw(r)&&mw(a)?hw(r,a):((e,t)=>{const n=e[Symbol.iterator](),r=t[Symbol.iterator]()
let a=n.next(),o=r.next()
for(;!a.done&&!o.done;){if(!Object.is(a.value,o.value))return!1
a=n.next(),o=r.next()}return!!a.done&&!!o.done})(r,a):hw({entries:()=>Object.entries(r)},{entries:()=>Object.entries(a)}))?e.current:e.current=n
var r,a}}())
return p.useEffect((()=>{if(t&&e.current)return t.observe(e.current),()=>{e.current&&t.unobserve(e.current)}}),[t]),s.jsxs(Dx,{children:[s.jsx(gx,{as:'h2',css:{width:'inherit'},children:'Intro'}),s.jsx(Ox,{className:'intro-box-layout',ref:e,children:s.jsx($x,{})})]})})),Vx=()=>s.jsx(sy,{children:'Projects'}),Wx=()=>s.jsx(sy,{children:'Tech Stacks'}),Ux=e=>['intro','experiences','techStacks','projects'].includes(e),Kx=()=>s.jsx(ry,{children:s.jsx(jg,{asChild:!0,style:{fontSize:'22.5px',fontWeight:'600',color:'var(--color-base-background)',animationName:`${Cx}`,animationDelay:'1.75s',animationDuration:'1.5s',animationFillMode:'both'},children:s.jsxs('article',{children:['4\ub144\ub3d9\uc548 Front End \uac1c\ubc1c\uc790\ub85c\uc11c \uc5c5\ubb34\ub97c \uc218\ud589\ud558\uba70,',s.jsx('br',{}),'\ucd5c\uc801\uc758 User Experience \ub97c \uc81c\uacf5\ud558\ub294',s.jsx('br',{}),' \uc548\uc815\uc801\uc774\uace0 \ucd5c\uc801\ud654\ub41c Front End Application\uc744',s.jsx('br',{}),'\ub9cc\ub4e4\uc5b4 \uc654\uc2b5\ub2c8\ub2e4.']})})}),Gx=()=>s.jsxs(sy,{direction:'column',gap:'15.5px',style:{width:'inherit',marginTop:'15.5px'},children:[s.jsx(ry,{children:'\uc548\ub155\ud558\uc138\uc694'.split('').map(((e,t)=>s.jsx(jg,{style:{fontSize:'28.8px',fontWeight:'500',color:'var(--color-base-secondary)',animationName:`${wx}`,animationDelay:t<10?`0.${t}s`:t/10+'s',animationDuration:'1s',animationFillMode:'both'},children:e},`${t}_${e}`)))}),s.jsxs(ry,{style:{width:'inherit'},children:[s.jsx(yx,{css:{display:'inline-block',animationName:`${xx}`,animationDelay:'0.5s',animationDuration:'1.5s',animationFillMode:'both'},as:'span',children:'\ucc3d\uc758\uc131'}),s.jsx(yx,{as:'span',children:'\xa0\uacfc\xa0'}),s.jsx(yx,{as:'span',css:{display:'inline-block',animationName:`${xx}`,animationDelay:'0.5s',animationDuration:'1.5s',animationFillMode:'both'},children:'\uc815\uad50\ud568'}),s.jsx(yx,{as:'span',children:'\uc744 \uacb8\ube44\ud55c'})]})]}),qx=()=>s.jsx(ry,{style:{width:'inherit',animationName:`${Cx}`,animationDelay:'1.3s',animationDuration:'1.5s',animationFillMode:'both',margin:'0px'},asChild:!0,children:s.jsxs('h1',{children:[s.jsx(bx,{as:'span',children:'Front End \uac1c\ubc1c\uc790 '}),s.jsx(bx,{css:{color:'rgb(100, 255, 218)'},children:'\uae40\uc6b0\uc11d \uc785\ub2c8\ub2e4'})]})}),Yx=()=>s.jsx(sy,{direction:'column',style:{width:'1280px',height:'fit-content',margin:'0px auto',padding:'0px 25.5px',boxSizing:'border-box'},children:s.jsxs(ry,{style:{marginTop:'155px'},children:[s.jsx(Gx,{}),s.jsx(qx,{}),s.jsx(Kx,{})]})}),Xx=()=>s.jsx(Nx,{asChild:!0,css:{background:'radial-gradient(circle, #3A86FF 0%, #0A192F 70%), url(/src/assets/img/image.png)',backgroundPosition:'center',backgroundSize:'contain',backgroundRepeat:'no-repeat'},children:s.jsx('section',{children:s.jsx(Yx,{})})})
function Qx(e,t){if(null==e)return{}
var n,r,a={},o=Object.keys(e)
for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n])
return a}var Zx=['color'],Jx=p.forwardRef((function(e,t){var n=e.color,r=void 0===n?'currentColor':n,a=Qx(e,Zx)
return p.createElement('svg',Object.assign({width:'15',height:'15',viewBox:'0 0 15 15',fill:'none',xmlns:'http://www.w3.org/2000/svg'},a,{ref:t}),p.createElement('path',{d:'M1 9.50006C1 10.3285 1.67157 11.0001 2.5 11.0001H4L4 10.0001H2.5C2.22386 10.0001 2 9.7762 2 9.50006L2 2.50006C2 2.22392 2.22386 2.00006 2.5 2.00006L9.5 2.00006C9.77614 2.00006 10 2.22392 10 2.50006V4.00002H5.5C4.67158 4.00002 4 4.67159 4 5.50002V12.5C4 13.3284 4.67158 14 5.5 14H12.5C13.3284 14 14 13.3284 14 12.5V5.50002C14 4.67159 13.3284 4.00002 12.5 4.00002H11V2.50006C11 1.67163 10.3284 1.00006 9.5 1.00006H2.5C1.67157 1.00006 1 1.67163 1 2.50006V9.50006ZM5 5.50002C5 5.22388 5.22386 5.00002 5.5 5.00002H12.5C12.7761 5.00002 13 5.22388 13 5.50002V12.5C13 12.7762 12.7761 13 12.5 13H5.5C5.22386 13 5 12.7762 5 12.5V5.50002Z',fill:r,fillRule:'evenodd',clipRule:'evenodd'}))})),eC=['color'],tC=p.forwardRef((function(e,t){var n=e.color,r=void 0===n?'currentColor':n,a=Qx(e,eC)
return p.createElement('svg',Object.assign({width:'15',height:'15',viewBox:'0 0 15 15',fill:'none',xmlns:'http://www.w3.org/2000/svg'},a,{ref:t}),p.createElement('path',{d:'M1 2C0.447715 2 0 2.44772 0 3V12C0 12.5523 0.447715 13 1 13H14C14.5523 13 15 12.5523 15 12V3C15 2.44772 14.5523 2 14 2H1ZM1 3L14 3V3.92494C13.9174 3.92486 13.8338 3.94751 13.7589 3.99505L7.5 7.96703L1.24112 3.99505C1.16621 3.94751 1.0826 3.92486 1 3.92494V3ZM1 4.90797V12H14V4.90797L7.74112 8.87995C7.59394 8.97335 7.40606 8.97335 7.25888 8.87995L1 4.90797Z',fill:r,fillRule:'evenodd',clipRule:'evenodd'}))})),nC=['color'],rC=p.forwardRef((function(e,t){var n=e.color,r=void 0===n?'currentColor':n,a=Qx(e,nC)
return p.createElement('svg',Object.assign({width:'15',height:'15',viewBox:'0 0 15 15',fill:'none',xmlns:'http://www.w3.org/2000/svg'},a,{ref:t}),p.createElement('path',{d:'M7.49933 0.25C3.49635 0.25 0.25 3.49593 0.25 7.50024C0.25 10.703 2.32715 13.4206 5.2081 14.3797C5.57084 14.446 5.70302 14.2222 5.70302 14.0299C5.70302 13.8576 5.69679 13.4019 5.69323 12.797C3.67661 13.235 3.25112 11.825 3.25112 11.825C2.92132 10.9874 2.44599 10.7644 2.44599 10.7644C1.78773 10.3149 2.49584 10.3238 2.49584 10.3238C3.22353 10.375 3.60629 11.0711 3.60629 11.0711C4.25298 12.1788 5.30335 11.8588 5.71638 11.6732C5.78225 11.205 5.96962 10.8854 6.17658 10.7043C4.56675 10.5209 2.87415 9.89918 2.87415 7.12104C2.87415 6.32925 3.15677 5.68257 3.62053 5.17563C3.54576 4.99226 3.29697 4.25521 3.69174 3.25691C3.69174 3.25691 4.30015 3.06196 5.68522 3.99973C6.26337 3.83906 6.8838 3.75895 7.50022 3.75583C8.1162 3.75895 8.73619 3.83906 9.31523 3.99973C10.6994 3.06196 11.3069 3.25691 11.3069 3.25691C11.7026 4.25521 11.4538 4.99226 11.3795 5.17563C11.8441 5.68257 12.1245 6.32925 12.1245 7.12104C12.1245 9.9063 10.4292 10.5192 8.81452 10.6985C9.07444 10.9224 9.30633 11.3648 9.30633 12.0413C9.30633 13.0102 9.29742 13.7922 9.29742 14.0299C9.29742 14.2239 9.42828 14.4496 9.79591 14.3788C12.6746 13.4179 14.75 10.7025 14.75 7.50024C14.75 3.49593 11.5036 0.25 7.49933 0.25Z',fill:r,fillRule:'evenodd',clipRule:'evenodd'}))})),aC=['color'],oC=p.forwardRef((function(e,t){var n=e.color,r=void 0===n?'currentColor':n,a=Qx(e,aC)
return p.createElement('svg',Object.assign({width:'15',height:'15',viewBox:'0 0 15 15',fill:'none',xmlns:'http://www.w3.org/2000/svg'},a,{ref:t}),p.createElement('path',{d:'M7.07926 0.222253C7.31275 -0.007434 7.6873 -0.007434 7.92079 0.222253L14.6708 6.86227C14.907 7.09465 14.9101 7.47453 14.6778 7.71076C14.4454 7.947 14.0655 7.95012 13.8293 7.71773L13 6.90201V12.5C13 12.7761 12.7762 13 12.5 13H2.50002C2.22388 13 2.00002 12.7761 2.00002 12.5V6.90201L1.17079 7.71773C0.934558 7.95012 0.554672 7.947 0.32229 7.71076C0.0899079 7.47453 0.0930283 7.09465 0.32926 6.86227L7.07926 0.222253ZM7.50002 1.49163L12 5.91831V12H10V8.49999C10 8.22385 9.77617 7.99999 9.50002 7.99999H6.50002C6.22388 7.99999 6.00002 8.22385 6.00002 8.49999V12H3.00002V5.91831L7.50002 1.49163ZM7.00002 12H9.00002V8.99999H7.00002V12Z',fill:r,fillRule:'evenodd',clipRule:'evenodd'}))})),lC=['color'],iC=p.forwardRef((function(e,t){var n=e.color,r=void 0===n?'currentColor':n,a=Qx(e,lC)
return p.createElement('svg',Object.assign({width:'15',height:'15',viewBox:'0 0 15 15',fill:'none',xmlns:'http://www.w3.org/2000/svg'},a,{ref:t}),p.createElement('path',{d:'M3.25781 3.11684C3.67771 3.45796 3.83523 3.43193 4.62369 3.37933L12.0571 2.93299C12.2147 2.93299 12.0836 2.77571 12.0311 2.74957L10.7965 1.85711C10.56 1.67347 10.2448 1.46315 9.64083 1.51576L2.44308 2.04074C2.18059 2.06677 2.12815 2.19801 2.2327 2.30322L3.25781 3.11684ZM3.7041 4.84917V12.6704C3.7041 13.0907 3.91415 13.248 4.38693 13.222L12.5562 12.7493C13.0292 12.7233 13.0819 12.4341 13.0819 12.0927V4.32397C13.0819 3.98306 12.9508 3.79921 12.6612 3.82545L4.12422 4.32397C3.80918 4.35044 3.7041 4.50803 3.7041 4.84917ZM11.7688 5.26872C11.8212 5.50518 11.7688 5.74142 11.5319 5.76799L11.1383 5.84641V11.6205C10.7965 11.8042 10.4814 11.9092 10.2188 11.9092C9.79835 11.9092 9.69305 11.7779 9.37812 11.3844L6.80345 7.34249V11.2532L7.61816 11.437C7.61816 11.437 7.61816 11.9092 6.96086 11.9092L5.14879 12.0143C5.09615 11.9092 5.14879 11.647 5.33259 11.5944L5.80546 11.4634V6.29276L5.1489 6.24015C5.09625 6.00369 5.22739 5.66278 5.5954 5.63631L7.53935 5.50528L10.2188 9.5998V5.97765L9.53564 5.89924C9.4832 5.61018 9.69305 5.40028 9.95576 5.37425L11.7688 5.26872ZM1.83874 1.33212L9.32557 0.780787C10.245 0.701932 10.4815 0.754753 11.0594 1.17452L13.4492 2.85424C13.8436 3.14309 13.975 3.22173 13.975 3.53661V12.7493C13.975 13.3266 13.7647 13.6681 13.0293 13.7203L4.33492 14.2454C3.78291 14.2717 3.52019 14.193 3.23111 13.8253L1.47116 11.5419C1.1558 11.1216 1.02466 10.8071 1.02466 10.4392V2.25041C1.02466 1.77825 1.23504 1.38441 1.83874 1.33212Z',fill:r}))}))
const sC=({link:e,Icon:t})=>s.jsxs(Sx,{children:[s.jsx(t,{style:{width:'45.5px',height:'45.5px'}}),s.jsxs(Ex,{className:'url-link',children:[s.jsx(Jx,{onClick:()=>(async e=>{await window.navigator.clipboard.writeText(e)})(e),style:{width:'25.5px',height:'25.5px',color:'var(--color-base-secondary)'}}),s.jsx(jg,{style:{maxWidth:'350px',textOverflow:'ellipsis',whiteSpace:'pre',overflow:'hidden'},children:e})]})]}),cC=()=>s.jsxs(sy,{direction:'column',gap:'10px',style:{width:'fit-content',position:'fixed',left:'55px',bottom:'100px'},children:[s.jsx(sC,{link:'https://github.com/wsKim1992',Icon:rC}),s.jsx(sC,{link:'https://www.notion.so/Front-End-1159c9380598801cb4fcc92134a80349?pvs=4',Icon:iC}),s.jsx(sC,{link:'wooseokkim1992@gmail.com',Icon:tC})]}),uC=()=>{const e=wt(),{hash:t}=gt()
return s.jsx(Rx,{asChild:!0,css:{width:'fit-content',padding:'0px',background:'transparent'},children:s.jsx('nav',{children:s.jsx(ew,{children:Object.keys(wC).map(((n,r)=>Ux(n)?s.jsx(Px,{css:{animationDelay:100*r+'ms'},href:`${wC[n].link}`,onClick:r=>{r.preventDefault(),r.stopPropagation(),t===wC[n].link?(e(''),setTimeout((()=>{e(wC[n].link)}),10)):e(wC[n].link)},children:wC[n].text},n):null))})})})},dC=()=>s.jsx(Rx,{asChild:!0,children:s.jsxs('nav',{children:[s.jsx(ry,{asChild:!0,style:{width:'fit-content',height:'fit-content',display:'flex',flexDirection:'row',alignItems:'center',gap:'12.5px',justifyContent:'center'},children:s.jsxs(tn,{to:'/main',children:[s.jsx(oC,{style:{width:'25px',height:'25px',color:'#3A86FF'}}),s.jsx(jg,{style:{fontSize:'18.5px',fontWeight:'550',color:'#3A86FF'},children:'Home'})]})}),s.jsx(uC,{})]})}),fC=p.forwardRef((({hash:e,children:t,css:n},r)=>{const a=p.useRef(null)
return p.useImperativeHandle(r,(()=>({scrollWithIn:()=>{a.current&&(({hash:e,Elem:t,options:n={behavior:'smooth',block:'center',inline:'center'}})=>{const r=e.split('#')[1]
Ux(r)&&t.scrollIntoView(n)})({hash:e,Elem:a.current})}}))),s.jsx(Nx,{asChild:!0,ref:a,css:n,children:s.jsx('section',{children:t})})})),pC=({text:e,positionObj:t={top:'calc(50% +30px)',left:'calc(50% +30px)'},animationDelay:n='200ms'})=>s.jsx(Lx,{css:{top:t.top,left:t.left,animationDelay:n},children:e}),mC=({text:e,css:t,handleClick:n})=>{const r=vx(Mx,t??{})
return s.jsx(r,{onClick:n,children:e})},hC=hx({'0%':{opacity:1},'50%':{opacity:0},'100%':{opacity:1}}),vC=vx(ry,{fontSize:'65.5px',fontWeight:'500',color:'var(--color-base-background)','.cursor':{margin:'2.5px 10px',display:'inline-block',height:'60px',width:'1.5px',background:'#fff',animation:`${hC} 0.5s ease-in-out infinite`}}),gC=({text:e})=>{const t=wt(),n=p.useRef(null)
return p.useEffect((()=>{if(n.current){let t=(({elem:e,textArr:t})=>{let n=0,r=-1
const a=()=>{if(n>=t.length){const t=document.createElement('span')
return t.setAttribute('class','cursor'),e.appendChild(t),void cancelAnimationFrame(r)}if(-1!==r){const r='\n'===t[n]?'<br/>':t[n]
e.innerHTML+=r,n++}r=requestAnimationFrame(a)}
return a(),r})({elem:n.current,textArr:e.replaceAll('\\n','\n').split('')})
return()=>{cancelAnimationFrame(t)}}}),[]),s.jsx(ry,{asChild:!0,style:{position:'absolute',top:'10%',left:'10%',overflow:'hidden',whiteSpace:'nowrap'},children:s.jsxs('section',{children:[s.jsx(vC,{asChild:!0,ref:n,children:s.jsx('h1',{ref:n})}),s.jsx(mC,{text:'Enter',handleClick:()=>{t(bC.main)},css:{width:'250px',background:'var(--color-base-primary)',marginTop:'50px',padding:'25px 20px',boxSizing:'border-box'}})]})})},yC=()=>s.jsxs(Tx,{children:[s.jsx(gC,{text:'Front End \uac1c\ubc1c\uc790\\n \uae40\uc6b0\uc11d\\n Web Page'}),s.jsx(pC,{text:'# Front End',positionObj:{top:'150px',left:'calc(50% + 354px)'},animationDelay:Math.ceil(300*Math.random()).toFixed(0)+'ms'}),s.jsx(pC,{text:'# 5\ub144\ucc28 \uac1c\ubc1c\uc790',positionObj:{top:'410px',left:'calc(50% + 234px)'},animationDelay:Math.ceil(300*Math.random()).toFixed(0)+'ms'}),s.jsx(pC,{text:'# React',positionObj:{top:'610px',left:'calc(50% + 54px)'},animationDelay:Math.ceil(100*Math.random()).toFixed(0)+'ms'}),s.jsx(pC,{text:'# B2C \uc5d0\uc11c B2B \uae4c\uc9c0',positionObj:{top:'315px',left:'calc(50% +174px)'},animationDelay:Math.ceil(100*Math.random()).toFixed(0)+'ms'})]}),bC={main:'/main'},wC={intro:{text:'Intro',link:'#intro'},experiences:{text:'experiences',link:'#experiences'},techStacks:{text:'tech stacks',link:'#tech-stacks'},projects:{text:'projects',link:'#projects'}},xC=(CC=[{path:'/',children:[{index:!0,Component:()=>s.jsx(ry,{style:{width:'100dvw',height:'100dvh'},children:s.jsx(yC,{})})}]},{path:bC.main,Component:()=>{const e=yw((e=>e.setIntroElemObserver)),t=yw((e=>e.initIntroElemObserver)),n=p.useRef(null),r=p.createRef(),a=p.createRef(),o=p.createRef(),l=p.createRef(),{hash:i}=gt()
return p.useEffect((()=>(n.current&&e((({rootElem:e})=>{let t=null
return(({cb:e,options:t})=>new IntersectionObserver(e,t))({cb:n=>{const r=n.filter((e=>e.target.classList.contains('intro-box-layout')))[0]
if(r.isIntersecting){const{top:n}=r.intersectionRect
null===t&&(t=(({rootElem:e,introBoxLayout:t,introBoxLayoutTop:n})=>r=>{const{scrollTop:a}=e
a-n<=0&&t.querySelectorAll('.intro-box').forEach((e=>{const{top:t}=e.getBoundingClientRect(),n=(r=a/t,Math.round(r)>=.85?1:a/t)
var r
e.style.setProperty('transform',`scale(${n},${n})`)}))})({rootElem:e,introBoxLayout:r.target,introBoxLayoutTop:n}),e.addEventListener('scroll',t))}else r.isIntersecting||t&&(e.removeEventListener('scroll',t),t=null)},options:{root:e,rootMargin:'0px'}})})({rootElem:n.current})),()=>{t()})),[]),p.useEffect((()=>{r.current&&'#intro'===i?r.current.scrollWithIn():a.current&&'#experiences'===i?a.current.scrollWithIn():o.current&&'#tech-stacks'===i?o.current.scrollWithIn():l.current&&'#projects'===i&&l.current.scrollWithIn()}),[i]),s.jsx(Nx,{asChild:!0,ref:n,children:s.jsxs('main',{children:[s.jsx(dC,{}),s.jsx(Xx,{}),s.jsx(cC,{}),s.jsx(fC,{hash:'#intro',ref:r,css:{overflow:'hidden',height:'fit-content',paddingBottom:'45px'},children:s.jsx(Hx,{})}),s.jsx(fC,{hash:'#experiences',ref:a,css:{overflow:'hidden',background:'red'},children:s.jsx(fw,{})}),s.jsx(fC,{hash:'#tech-stacks',ref:o,css:{overflow:'hidden'},children:s.jsx(Wx,{})}),s.jsx(fC,{ref:l,hash:'#projects',css:{overflow:'hidden'},children:s.jsx(Vx,{})})]})})}}],function(e){const t=e.window?e.window:'undefined'!=typeof window?window:void 0,n=void 0!==t&&void 0!==t.document&&void 0!==t.document.createElement
D(e.routes.length>0,'You must provide a non-empty routes array to createRouter')
let r,a,o,l=e.mapRouteProperties||Se,i={},s=B(e.routes,l,void 0,i),c=e.basename||'/',u=e.dataStrategy||Ie,d=e.patchRoutesOnNavigation,f={...e.future},p=null,m=new Set,h=null,v=null,g=null,y=null!=e.hydrationData,b=$(s,e.history.location,c),w=!1,x=null
if(null==b&&!d){let t=Ge(404,{pathname:e.history.location.pathname}),{matches:n,route:r}=Ke(s)
b=n,x={[r.id]:t}}if(b&&!e.hydrationData&&_e(b,s,e.history.location.pathname).active&&(b=null),b)if(b.some((e=>e.route.lazy)))a=!1
else if(b.some((e=>e.route.loader))){let t=e.hydrationData?e.hydrationData.loaderData:null,n=e.hydrationData?e.hydrationData.errors:null
if(n){let e=b.findIndex((e=>void 0!==n[e.route.id]))
a=b.slice(0,e+1).every((e=>!Me(e.route,t,n)))}else a=b.every((e=>!Me(e.route,t,n)))}else a=!0
else{a=!1,b=[]
let t=_e(null,s,e.history.location.pathname)
t.active&&t.matches&&(w=!0,b=t.matches)}let C,S,E={historyAction:e.history.action,location:e.history.location,matches:b,initialized:a,navigation:be,restoreScrollPosition:null==e.hydrationData&&null,preventScrollReset:!1,revalidation:'idle',loaderData:e.hydrationData&&e.hydrationData.loaderData||{},actionData:e.hydrationData&&e.hydrationData.actionData||null,errors:e.hydrationData&&e.hydrationData.errors||x,fetchers:new Map,blockers:new Map},k='POP',N=!1,R=!1,P=new Map,T=null,M=!1,_=!1,L=new Set,I=new Map,O=0,z=-1,V=new Map,W=new Set,U=new Map,K=new Map,G=new Set,q=new Map,Y=null
function X(e,t={}){E={...E,...e}
let n=[],r=[]
E.fetchers.forEach(((e,t)=>{'idle'===e.state&&(G.has(t)?n.push(t):r.push(t))})),G.forEach((e=>{E.fetchers.has(e)||I.has(e)||n.push(e)})),[...m].forEach((e=>e(E,{deletedFetchers:n,viewTransitionOpts:t.viewTransitionOpts,flushSync:!0===t.flushSync}))),n.forEach((e=>se(e))),r.forEach((e=>E.fetchers.delete(e)))}function Q(t,n,{flushSync:a}={}){var o,l
let i,c=null!=E.actionData&&null!=E.navigation.formMethod&&tt(E.navigation.formMethod)&&'loading'===E.navigation.state&&!0!==(null==(o=t.state)?void 0:o._isRedirect)
i=n.actionData?Object.keys(n.actionData).length>0?n.actionData:null:c?E.actionData:null
let u=n.loaderData?Ve(E.loaderData,n.loaderData,n.matches||[],n.errors):E.loaderData,d=E.blockers
d.size>0&&(d=new Map(d),d.forEach(((e,t)=>d.set(t,xe))))
let f,p=!0===N||null!=E.navigation.formMethod&&tt(E.navigation.formMethod)&&!0!==(null==(l=t.state)?void 0:l._isRedirect)
if(r&&(s=r,r=void 0),M||'POP'===k||('PUSH'===k?e.history.push(t,t.state):'REPLACE'===k&&e.history.replace(t,t.state)),'POP'===k){let e=P.get(E.location.pathname)
e&&e.has(t.pathname)?f={currentLocation:E.location,nextLocation:t}:P.has(t.pathname)&&(f={currentLocation:t,nextLocation:E.location})}else if(R){let e=P.get(E.location.pathname)
e?e.add(t.pathname):(e=new Set([t.pathname]),P.set(E.location.pathname,e)),f={currentLocation:E.location,nextLocation:t}}X({...n,actionData:i,loaderData:u,historyAction:k,location:t,initialized:!0,navigation:be,revalidation:'idle',restoreScrollPosition:Pe(t,n.matches||E.matches),preventScrollReset:p,blockers:d},{viewTransitionOpts:f,flushSync:!0===a}),k='POP',N=!1,R=!1,M=!1,_=!1,null==Y||Y.resolve(),Y=null}async function Z(t,n,a){C&&C.abort(),C=null,k=t,M=!0===(a&&a.startUninterruptedRevalidation),function(e,t){if(h&&g){let n=ke(e,t)
h[n]=g()}}(E.location,E.matches),N=!0===(a&&a.preventScrollReset),R=!0===(a&&a.enableViewTransition)
let o=r||s,l=a&&a.overrideNavigation,i=(null==a?void 0:a.initialHydration)&&E.matches&&E.matches.length>0&&!w?E.matches:$(o,n,c),u=!0===(a&&a.flushSync)
if(i&&E.initialized&&!_&&(f=n,(d=E.location).pathname===f.pathname&&d.search===f.search&&(''===d.hash?''!==f.hash:d.hash===f.hash||''!==f.hash))&&!(a&&a.submission&&tt(a.submission.formMethod)))return void Q(n,{matches:i},{flushSync:u})
var d,f
let p=_e(i,o,n.pathname)
if(p.active&&p.matches&&(i=p.matches),!i){let{error:e,notFoundMatches:t,route:r}=ge(n.pathname)
return void Q(n,{matches:t,loaderData:{},errors:{[r.id]:e}},{flushSync:u})}C=new AbortController
let m,v=Fe(e.history,n,C.signal,a&&a.submission)
if(a&&a.pendingError)m=[Ue(i).route.id,{type:'error',error:a.pendingError}]
else if(a&&a.submission&&tt(a.submission.formMethod)){let t=await async function(e,t,n,r,a,o={}){ae()
let l,i=function(e,t){return{state:'submitting',location:e,formMethod:t.formMethod,formAction:t.formAction,formEncType:t.formEncType,formData:t.formData,json:t.json,text:t.text}}(t,n)
if(X({navigation:i},{flushSync:!0===o.flushSync}),a){let n=await Le(r,t.pathname,e.signal)
if('aborted'===n.type)return{shortCircuited:!0}
if('error'===n.type){let e=Ue(n.partialMatches).route.id
return{matches:n.partialMatches,pendingActionResult:[e,{type:'error',error:n.error}]}}if(!n.matches){let{notFoundMatches:e,error:n,route:r}=ge(t.pathname)
return{matches:e,pendingActionResult:[r.id,{type:'error',error:n}]}}r=n.matches}let s=rt(r,t)
if(s.route.action||s.route.lazy){if(l=(await te('action',0,e,[s],r,null))[s.route.id],e.signal.aborted)return{shortCircuited:!0}}else l={type:'error',error:Ge(405,{method:e.method,pathname:t.pathname,routeId:s.route.id})}
if(Ze(l)){let t
return t=o&&null!=o.replace?o.replace:ze(l.response.headers.get('Location'),new URL(e.url),c)===E.location.pathname+E.location.search,await ee(e,l,!0,{submission:n,replace:t}),{shortCircuited:!0}}if(Qe(l)){let e=Ue(r,s.route.id)
return!0!==(o&&o.replace)&&(k='PUSH'),{matches:r,pendingActionResult:[e.route.id,l]}}return{matches:r,pendingActionResult:[s.route.id,l]}}(v,n,a.submission,i,p.active,{replace:a.replace,flushSync:u})
if(t.shortCircuited)return
if(t.pendingActionResult){let[e,r]=t.pendingActionResult
if(Qe(r)&&fe(r.error)&&404===r.error.status)return C=null,void Q(n,{matches:t.matches,loaderData:{},errors:{[e]:r.error}})}i=t.matches||i,m=t.pendingActionResult,l=ot(n,a.submission),u=!1,p.active=!1,v=Fe(e.history,v.url,v.signal)}let{shortCircuited:y,matches:b,loaderData:x,errors:S}=await async function(t,n,a,o,l,i,u,d,f,p,m){let h=l||ot(n,i),v=i||u||at(h),g=!M&&!f
if(o){if(g){let e=J(m)
X({navigation:h,...void 0!==e?{actionData:e}:{}},{flushSync:p})}let e=await Le(a,n.pathname,t.signal)
if('aborted'===e.type)return{shortCircuited:!0}
if('error'===e.type){let t=Ue(e.partialMatches).route.id
return{matches:e.partialMatches,loaderData:{},errors:{[t]:e.error}}}if(!e.matches){let{error:e,notFoundMatches:t,route:r}=ge(n.pathname)
return{matches:t,loaderData:{},errors:{[r.id]:e}}}a=e.matches}let y=r||s,[b,w]=Te(e.history,E,a,v,n,!0===f,_,L,G,U,W,y,c,m)
if(z=++O,0===b.length&&0===w.length){let e=de()
return Q(n,{matches:a,loaderData:{},errors:m&&Qe(m[1])?{[m[0]]:m[1].error}:null,...We(m),...e?{fetchers:new Map(E.fetchers)}:{}},{flushSync:p}),{shortCircuited:!0}}if(g){let e={}
if(!o){e.navigation=h
let t=J(m)
void 0!==t&&(e.actionData=t)}w.length>0&&(e.fetchers=function(e){return e.forEach((e=>{let t=E.fetchers.get(e.key),n=lt(void 0,t?t.data:void 0)
E.fetchers.set(e.key,n)})),new Map(E.fetchers)}(w)),X(e,{flushSync:p})}w.forEach((e=>{ce(e.key),e.controller&&I.set(e.key,e.controller)}))
let x=()=>w.forEach((e=>ce(e.key)))
C&&C.signal.addEventListener('abort',x)
let{loaderResults:S,fetcherResults:k}=await re(0,a,b,w,t)
if(t.signal.aborted)return{shortCircuited:!0}
C&&C.signal.removeEventListener('abort',x),w.forEach((e=>I.delete(e.key)))
let N=qe(S)
if(N)return await ee(t,N.result,!0,{replace:d}),{shortCircuited:!0}
if(N=qe(k),N)return W.add(N.key),await ee(t,N.result,!0,{replace:d}),{shortCircuited:!0}
let{loaderData:R,errors:P}=He(E,a,S,m,w,k)
f&&E.errors&&(P={...E.errors,...P})
let T=de(),D=pe(z)
return{matches:a,loaderData:R,errors:P,...T||D||w.length>0?{fetchers:new Map(E.fetchers)}:{}}}(v,n,i,p.active,l,a&&a.submission,a&&a.fetcherSubmission,a&&a.replace,a&&!0===a.initialHydration,u,m)
y||(C=null,Q(n,{matches:b||i,...We(m),loaderData:x,errors:S}))}function J(e){return e&&!Qe(e[1])?{[e[0]]:e[1].data}:E.actionData?0===Object.keys(E.actionData).length?null:E.actionData:void 0}async function ee(r,a,o,{submission:l,fetcherSubmission:i,preventScrollReset:s,replace:u}={}){a.response.headers.has('X-Remix-Revalidate')&&(_=!0)
let d=a.response.headers.get('Location')
D(d,'Expected a Location header on the redirect Response'),d=ze(d,new URL(r.url),c)
let f=A(E.location,d,{_isRedirect:!0})
if(n){let n=!1
if(a.response.headers.has('X-Remix-Reload-Document'))n=!0
else if(Ce.test(d)){const r=e.history.createURL(d)
n=r.origin!==t.location.origin||null==ne(r.pathname,c)}if(n)return void(u?t.location.replace(d):t.location.assign(d))}C=null
let p=!0===u||a.response.headers.has('X-Remix-Replace')?'REPLACE':'PUSH',{formMethod:m,formAction:h,formEncType:v}=E.navigation
!l&&!i&&m&&h&&v&&(l=at(E.navigation))
let g=l||i
if(ye.has(a.response.status)&&g&&tt(g.formMethod))await Z(p,f,{submission:{...g,formAction:d},preventScrollReset:s||N,enableViewTransition:o?R:void 0})
else{let e=ot(f,l)
await Z(p,f,{overrideNavigation:e,fetcherSubmission:i,preventScrollReset:s||N,enableViewTransition:o?R:void 0})}}async function te(e,t,n,r,a,o){let s,d={}
try{s=await async function(e,t,n,r,a,o,l,i,s,c){let u=o.map((e=>e.route.lazy?async function(e,t,n){if(!e.lazy)return
let r=await e.lazy()
if(!e.lazy)return
let a=n[e.id]
D(a,'No route found in manifest')
let o={}
for(let l in r){let e=void 0!==a[l]&&'hasErrorBoundary'!==l
j(!e,`Route "${a.id}" has a static property "${l}" defined but its lazy function is also returning a value for this property. The lazy route property "${l}" will be ignored.`),e||F.has(l)||(o[l]=r[l])}Object.assign(a,o),Object.assign(a,{...t(a),lazy:void 0})}(e.route,s,i):void 0)),d=o.map(((e,n)=>{let o=u[n],l=a.some((t=>t.route.id===e.route.id))
return{...e,shouldLoad:l,resolve:async n=>(n&&'GET'===r.method&&(e.route.lazy||e.route.loader)&&(l=!0),l?async function(e,t,n,r,a,o){let l,i,s=r=>{let l,s=new Promise(((e,t)=>l=t))
i=()=>l(),t.signal.addEventListener('abort',i)
let c=a=>'function'!=typeof r?Promise.reject(new Error(`You cannot call the handler for a route which defines a boolean "${e}" [routeId: ${n.route.id}]`)):r({request:t,params:n.params,context:o},...void 0!==a?[a]:[]),u=(async()=>{try{return{type:'data',result:await(a?a((e=>c(e))):c())}}catch(EC){return{type:'error',result:EC}}})()
return Promise.race([u,s])}
try{let a=n.route[e]
if(r)if(a){let e,[t]=await Promise.all([s(a).catch((t=>{e=t})),r])
if(void 0!==e)throw e
l=t}else{if(await r,a=n.route[e],!a){if('action'===e){let e=new URL(t.url),r=e.pathname+e.search
throw Ge(405,{method:t.method,pathname:r,routeId:n.route.id})}return{type:'data',result:void 0}}l=await s(a)}else{if(!a){let e=new URL(t.url)
throw Ge(404,{pathname:e.pathname+e.search})}l=await s(a)}}catch(EC){return{type:'error',result:EC}}finally{i&&t.signal.removeEventListener('abort',i)}return l}(t,r,e,o,n,c):Promise.resolve({type:'data',result:void 0}))}})),f=await e({matches:d,request:r,params:o[0].params,fetcherKey:l,context:c})
try{await Promise.all(u)}catch(EC){}return f}(u,e,0,n,r,a,o,i,l)}catch(EC){return r.forEach((t=>{d[t.route.id]={type:'error',error:EC}})),d}for(let[l,i]of Object.entries(s))if(Xe(i)){let e=i.result
d[l]={type:'redirect',response:Oe(e,n,l,a,c)}}else d[l]=await Ae(i)
return d}async function re(t,n,r,a,o){let l=te('loader',0,o,r,n,null),i=Promise.all(a.map((async t=>{if(t.matches&&t.match&&t.controller){let n=(await te('loader',0,Fe(e.history,t.path,t.controller.signal),[t.match],t.matches,t.key))[t.match.route.id]
return{[t.key]:n}}return Promise.resolve({[t.key]:{type:'error',error:Ge(404,{pathname:t.path})}})})))
return{loaderResults:await l,fetcherResults:(await i).reduce(((e,t)=>Object.assign(e,t)),{})}}function ae(){_=!0,U.forEach(((e,t)=>{I.has(t)&&L.add(t),ce(t)}))}function oe(e,t,n={}){E.fetchers.set(e,t),X({fetchers:new Map(E.fetchers)},{flushSync:!0===(n&&n.flushSync)})}function le(e,t,n,r={}){let a=Ue(E.matches,t)
se(e),X({errors:{[a.route.id]:n},fetchers:new Map(E.fetchers)},{flushSync:!0===(r&&r.flushSync)})}function ie(e){return K.set(e,(K.get(e)||0)+1),G.has(e)&&G.delete(e),E.fetchers.get(e)||we}function se(e){let t=E.fetchers.get(e)
!I.has(e)||t&&'loading'===t.state&&V.has(e)||ce(e),U.delete(e),V.delete(e),W.delete(e),G.delete(e),L.delete(e),E.fetchers.delete(e)}function ce(e){let t=I.get(e)
t&&(t.abort(),I.delete(e))}function ue(e){for(let t of e){let e=it(ie(t).data)
E.fetchers.set(t,e)}}function de(){let e=[],t=!1
for(let n of W){let r=E.fetchers.get(n)
D(r,`Expected fetcher: ${n}`),'loading'===r.state&&(W.delete(n),e.push(n),t=!0)}return ue(e),t}function pe(e){let t=[]
for(let[n,r]of V)if(r<e){let e=E.fetchers.get(n)
D(e,`Expected fetcher: ${n}`),'loading'===e.state&&(ce(n),V.delete(n),t.push(n))}return ue(t),t.length>0}function me(e){E.blockers.delete(e),q.delete(e)}function he(e,t){let n=E.blockers.get(e)||xe
D('unblocked'===n.state&&'blocked'===t.state||'blocked'===n.state&&'blocked'===t.state||'blocked'===n.state&&'proceeding'===t.state||'blocked'===n.state&&'unblocked'===t.state||'proceeding'===n.state&&'unblocked'===t.state,`Invalid blocker state transition: ${n.state} -> ${t.state}`)
let r=new Map(E.blockers)
r.set(e,t),X({blockers:r})}function ve({currentLocation:e,nextLocation:t,historyAction:n}){if(0===q.size)return
q.size>1&&j(!1,'A router only supports one blocker at a time')
let r=Array.from(q.entries()),[a,o]=r[r.length-1],l=E.blockers.get(a)
return l&&'proceeding'===l.state?void 0:o({currentLocation:e,nextLocation:t,historyAction:n})?a:void 0}function ge(e){let t=Ge(404,{pathname:e}),n=r||s,{matches:a,route:o}=Ke(n)
return{notFoundMatches:a,route:o,error:t}}function ke(e,t){return v&&v(e,t.map((e=>function(e,t){let{route:n,pathname:r,params:a}=e
return{id:n.id,pathname:r,params:a,data:t[n.id],handle:n.handle}}(e,E.loaderData))))||e.key}function Pe(e,t){if(h){let n=ke(e,t),r=h[n]
if('number'==typeof r)return r}return null}function _e(e,t,n){if(d){if(!e)return{active:!0,matches:H(t,n,c,!0)||[]}
if(Object.keys(e[0].params).length>0)return{active:!0,matches:H(t,n,c,!0)}}return{active:!1,matches:null}}async function Le(e,t,n){if(!d)return{type:'success',matches:e}
let a=e
for(;;){let e=null==r,o=r||s,u=i
try{await d({signal:n,path:t,matches:a,patch:(e,t)=>{n.aborted||De(e,t,o,u,l)}})}catch(EC){return{type:'error',error:EC,partialMatches:a}}finally{e&&!n.aborted&&(s=[...s])}if(n.aborted)return{type:'aborted'}
let f=$(o,t,c)
if(f)return{type:'success',matches:f}
let p=H(o,t,c,!0)
if(!p||a.length===p.length&&a.every(((e,t)=>e.route.id===p[t].route.id)))return{type:'success',matches:null}
a=p}}return o={get basename(){return c},get future(){return f},get state(){return E},get routes(){return s},get window(){return t},initialize:function(){if(p=e.history.listen((({action:t,location:n,delta:r})=>{if(S)return S(),void(S=void 0)
j(0===q.size||null!=r,'You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.')
let a=ve({currentLocation:E.location,nextLocation:n,historyAction:t})
if(a&&null!=r){let t=new Promise((e=>{S=e}))
return e.history.go(-1*r),void he(a,{state:'blocked',location:n,proceed(){he(a,{state:'proceeding',proceed:void 0,reset:void 0,location:n}),t.then((()=>e.history.go(r)))},reset(){let e=new Map(E.blockers)
e.set(a,xe),X({blockers:e})}})}return Z(t,n)})),n){!function(e,t){try{let n=e.sessionStorage.getItem(Ee)
if(n){let e=JSON.parse(n)
for(let[n,r]of Object.entries(e||{}))r&&Array.isArray(r)&&t.set(n,new Set(r||[]))}}catch(EC){}}(t,P)
let e=()=>function(e,t){if(t.size>0){let r={}
for(let[e,n]of t)r[e]=[...n]
try{e.sessionStorage.setItem(Ee,JSON.stringify(r))}catch(n){j(!1,`Failed to save applied view transitions in sessionStorage (${n}).`)}}}(t,P)
t.addEventListener('pagehide',e),T=()=>t.removeEventListener('pagehide',e)}return E.initialized||Z('POP',E.location,{initialHydration:!0}),o},subscribe:function(e){return m.add(e),()=>m.delete(e)},enableScrollRestoration:function(e,t,n){if(h=e,g=t,v=n||null,!y&&E.navigation===be){y=!0
let e=Pe(E.location,E.matches)
null!=e&&X({restoreScrollPosition:e})}return()=>{h=null,g=null,v=null}},navigate:async function t(n,r){if('number'==typeof n)return void e.history.go(n)
let a=Ne(E.location,E.matches,c,n,null==r?void 0:r.fromRouteId,null==r?void 0:r.relative),{path:o,submission:l,error:i}=Re(!1,a,r),s=E.location,u=A(E.location,o,r&&r.state)
u={...u,...e.history.encodeLocation(u)}
let d=r&&null!=r.replace?r.replace:void 0,f='PUSH'
!0===d?f='REPLACE':!1===d||null!=l&&tt(l.formMethod)&&l.formAction===E.location.pathname+E.location.search&&(f='REPLACE')
let p=r&&'preventScrollReset'in r?!0===r.preventScrollReset:void 0,m=!0===(r&&r.flushSync),h=ve({currentLocation:s,nextLocation:u,historyAction:f})
h?he(h,{state:'blocked',location:u,proceed(){he(h,{state:'proceeding',proceed:void 0,reset:void 0,location:u}),t(n,r)},reset(){let e=new Map(E.blockers)
e.set(h,xe),X({blockers:e})}}):await Z(f,u,{submission:l,pendingError:i,preventScrollReset:p,replace:r&&r.replace,enableViewTransition:r&&r.viewTransition,flushSync:m})},fetch:async function(t,n,a,o){ce(t)
let l=!0===(o&&o.flushSync),i=r||s,u=Ne(E.location,E.matches,c,a,n,null==o?void 0:o.relative),d=$(i,u,c),f=_e(d,i,u)
if(f.active&&f.matches&&(d=f.matches),!d)return void le(t,n,Ge(404,{pathname:u}),{flushSync:l})
let{path:p,submission:m,error:h}=Re(!0,u,o)
if(h)return void le(t,n,h,{flushSync:l})
let v=rt(d,p),g=!0===(o&&o.preventScrollReset)
m&&tt(m.formMethod)?await async function(t,n,a,o,l,i,u,d,f){function p(e){if(!e.route.action&&!e.route.lazy){let e=Ge(405,{method:f.formMethod,pathname:a,routeId:n})
return le(t,n,e,{flushSync:u}),!0}return!1}if(ae(),U.delete(t),!i&&p(o))return
let m=E.fetchers.get(t)
oe(t,function(e,t){return{state:'submitting',formMethod:e.formMethod,formAction:e.formAction,formEncType:e.formEncType,formData:e.formData,json:e.json,text:e.text,data:t?t.data:void 0}}(f,m),{flushSync:u})
let h=new AbortController,v=Fe(e.history,a,h.signal,f)
if(i){let e=await Le(l,a,v.signal)
if('aborted'===e.type)return
if('error'===e.type)return void le(t,n,e.error,{flushSync:u})
if(!e.matches)return void le(t,n,Ge(404,{pathname:a}),{flushSync:u})
if(p(o=rt(l=e.matches,a)))return}I.set(t,h)
let g=O,y=(await te('action',0,v,[o],l,t))[o.route.id]
if(v.signal.aborted)return void(I.get(t)===h&&I.delete(t))
if(G.has(t)){if(Ze(y)||Qe(y))return void oe(t,it(void 0))}else{if(Ze(y))return I.delete(t),z>g?void oe(t,it(void 0)):(W.add(t),oe(t,lt(f)),ee(v,y,!1,{fetcherSubmission:f,preventScrollReset:d}))
if(Qe(y))return void le(t,n,y.error)}let b=E.navigation.location||E.location,w=Fe(e.history,b,h.signal),x=r||s,S='idle'!==E.navigation.state?$(x,E.navigation.location,c):E.matches
D(S,'Didn\'t find any matches after fetcher action')
let N=++O
V.set(t,N)
let R=lt(f,y.data)
E.fetchers.set(t,R)
let[P,T]=Te(e.history,E,S,f,b,!1,_,L,G,U,W,x,c,[o.route.id,y])
T.filter((e=>e.key!==t)).forEach((e=>{let t=e.key,n=E.fetchers.get(t),r=lt(void 0,n?n.data:void 0)
E.fetchers.set(t,r),ce(t),e.controller&&I.set(t,e.controller)})),X({fetchers:new Map(E.fetchers)})
let M=()=>T.forEach((e=>ce(e.key)))
h.signal.addEventListener('abort',M)
let{loaderResults:j,fetcherResults:A}=await re(0,S,P,T,w)
if(h.signal.aborted)return
h.signal.removeEventListener('abort',M),V.delete(t),I.delete(t),T.forEach((e=>I.delete(e.key)))
let F=qe(j)
if(F)return ee(w,F.result,!1,{preventScrollReset:d})
if(F=qe(A),F)return W.add(F.key),ee(w,F.result,!1,{preventScrollReset:d})
let{loaderData:B,errors:H}=He(E,S,j,void 0,T,A)
if(E.fetchers.has(t)){let e=it(y.data)
E.fetchers.set(t,e)}pe(N),'loading'===E.navigation.state&&N>z?(D(k,'Expected pending action'),C&&C.abort(),Q(E.navigation.location,{matches:S,loaderData:B,errors:H,fetchers:new Map(E.fetchers)})):(X({errors:H,loaderData:Ve(E.loaderData,B,S,H),fetchers:new Map(E.fetchers)}),_=!1)}(t,n,p,v,d,f.active,l,g,m):(U.set(t,{routeId:n,path:p}),await async function(t,n,r,a,o,l,i,s,c){let u=E.fetchers.get(t)
oe(t,lt(c,u?u.data:void 0),{flushSync:i})
let d=new AbortController,f=Fe(e.history,r,d.signal)
if(l){let e=await Le(o,r,f.signal)
if('aborted'===e.type)return
if('error'===e.type)return void le(t,n,e.error,{flushSync:i})
if(!e.matches)return void le(t,n,Ge(404,{pathname:r}),{flushSync:i})
a=rt(o=e.matches,r)}I.set(t,d)
let p=O,m=(await te('loader',0,f,[a],o,t))[a.route.id]
if(I.get(t)===d&&I.delete(t),!f.signal.aborted){if(!G.has(t))return Ze(m)?z>p?void oe(t,it(void 0)):(W.add(t),void(await ee(f,m,!1,{preventScrollReset:s}))):void(Qe(m)?le(t,n,m.error):oe(t,it(m.data)))
oe(t,it(void 0))}}(t,n,p,v,d,f.active,l,g,m))},revalidate:function(){Y||(Y=function(){let e,t,n=new Promise(((r,a)=>{e=async e=>{r(e)
try{await n}catch(EC){}},t=async e=>{a(e)
try{await n}catch(EC){}}}))
return{promise:n,resolve:e,reject:t}}()),ae(),X({revalidation:'loading'})
let e=Y.promise
return'submitting'===E.navigation.state?e:'idle'===E.navigation.state?(Z(E.historyAction,E.location,{startUninterruptedRevalidation:!0}),e):(Z(k||E.historyAction,E.navigation.location,{overrideNavigation:E.navigation,enableViewTransition:!0===R}),e)},createHref:t=>e.history.createHref(t),encodeLocation:t=>e.history.encodeLocation(t),getFetcher:ie,deleteFetcher:function(e){let t=(K.get(e)||0)-1
t<=0?(K.delete(e),G.add(e)):K.set(e,t),X({fetchers:new Map(E.fetchers)})},dispose:function(){p&&p(),T&&T(),m.clear(),C&&C.abort(),E.fetchers.forEach(((e,t)=>se(t))),E.blockers.forEach(((e,t)=>me(t)))},getBlocker:function(e,t){let n=E.blockers.get(e)||xe
return q.get(e)!==t&&q.set(e,t),n},deleteBlocker:me,patchRoutes:function(e,t){let n=null==r
De(e,t,r||s,i,l),n&&(s=[...s],X({}))},_internalFetchControllers:I,_internalSetRoutes:function(e){i={},r=B(e,l,void 0,i)}},o}({basename:void 0,future:void 0,history:function(e={}){return function(e,t,n,r={}){let{window:a=document.defaultView,v5Compat:o=!1}=r,l=a.history,i='POP',s=null,c=u()
function u(){return(l.state||{idx:null}).idx}function d(){i='POP'
let e=u(),t=null==e?null:e-c
c=e,s&&s({action:i,location:p.location,delta:t})}function f(e){let t='null'!==a.location.origin?a.location.origin:a.location.href,n='string'==typeof e?e:O(e)
return n=n.replace(/ $/,'%20'),D(t,`No window.location.(origin|href) available to create URL for href: ${n}`),new URL(n,t)}null==c&&(c=0,l.replaceState({...l.state,idx:c},''))
let p={get action(){return i},get location(){return e(a,l)},listen(e){if(s)throw new Error('A history only accepts one active listener')
return a.addEventListener(L,d),s=e,()=>{a.removeEventListener(L,d),s=null}},createHref:e=>t(a,e),createURL:f,encodeLocation(e){let t=f(e)
return{pathname:t.pathname,search:t.search,hash:t.hash}},push:function(e,t){i='PUSH'
let n=A(p.location,e,t)
c=u()+1
let r=I(n,c),d=p.createHref(n)
try{l.pushState(r,'',d)}catch(f){if(f instanceof DOMException&&'DataCloneError'===f.name)throw f
a.location.assign(d)}o&&s&&s({action:i,location:p.location,delta:1})},replace:function(e,t){i='REPLACE'
let n=A(p.location,e,t)
c=u()
let r=I(n,c),a=p.createHref(n)
l.replaceState(r,'',a),o&&s&&s({action:i,location:p.location,delta:0})},go:e=>l.go(e)}
return p}((function(e,t){let{pathname:n,search:r,hash:a}=e.location
return A('',{pathname:n,search:r,hash:a},t.state&&t.state.usr||null,t.state&&t.state.key||'default')}),(function(e,t){return'string'==typeof t?t:O(t)}),0,e)}({window:void 0}),hydrationData:function(){let e=null==window?void 0:window.__staticRouterHydrationData
return e&&e.errors&&(e={...e,errors:Zt(e.errors)}),e}(),routes:CC,mapRouteProperties:function(e){let t={hasErrorBoundary:e.hasErrorBoundary||null!=e.ErrorBoundary||null!=e.errorElement}
return e.Component&&(e.element&&j(!1,'You should not include both `Component` and `element` on your route - `Component` will be used.'),Object.assign(t,{element:p.createElement(e.Component),Component:void 0})),e.HydrateFallback&&(e.hydrateFallbackElement&&j(!1,'You should not include both `HydrateFallback` and `hydrateFallbackElement` on your route - `HydrateFallback` will be used.'),Object.assign(t,{hydrateFallbackElement:p.createElement(e.HydrateFallback),HydrateFallback:void 0})),e.ErrorBoundary&&(e.errorElement&&j(!1,'You should not include both `ErrorBoundary` and `errorElement` on your route - `ErrorBoundary` will be used.'),Object.assign(t,{errorElement:p.createElement(e.ErrorBoundary),ErrorBoundary:void 0})),t},dataStrategy:void 0,patchRoutesOnNavigation:void 0,window:void 0}).initialize())
var CC
function SC(){return s.jsx(Hg,{children:s.jsx(ry,{style:{width:'100dvw',height:'100dvh',overflow:'hidden'},children:s.jsx(cn,{router:xC})})})}M.createRoot(document.getElementById('root')).render(s.jsx(p.StrictMode,{children:s.jsx(SC,{})}))
