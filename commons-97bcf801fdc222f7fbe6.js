(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"0mN4":function(t,e,n){"use strict";n("OGtf")("fixed",(function(t){return function(){return t(this,"tt","","")}}))},Bl7J:function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));n("q1tI");var r=n("qKvR");function a(t){var e=t.children;return Object(r.a)("div",{style:{margin:"3em auto",maxWidth:"1400px",padding:"0 1rem"}},e)}},JCAc:function(t,e,n){"use strict";n.d(e,"a",(function(){return u}));n("bWfx"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("DNiP"),n("xfY5"),n("rE2o"),n("ioFf");var r=n("wx14"),a=n("zLVn"),i=n("q1tI");n("Tze0"),n("8+KV"),n("QLaP");function o(t){return"default"+t.charAt(0).toUpperCase()+t.substr(1)}function s(t){var e=function(t,e){if("object"!=typeof t||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,e||"default");if("object"!=typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"==typeof e?e:String(e)}function u(t,e){return Object.keys(e).reduce((function(n,u){var c,l=n,f=l[o(u)],p=l[u],d=Object(a.a)(l,[o(u),u].map(s)),v=e[u],h=function(t,e,n){var r=Object(i.useRef)(void 0!==t),a=Object(i.useState)(e),o=a[0],s=a[1],u=void 0!==t,c=r.current;return r.current=u,!u&&c&&o!==e&&s(e),[u?t:o,Object(i.useCallback)((function(t){for(var e=arguments.length,r=new Array(e>1?e-1:0),a=1;a<e;a++)r[a-1]=arguments[a];n&&n.apply(void 0,[t].concat(r)),s(t)}),[n])]}(p,f,t[v]),m=h[0],g=h[1];return Object(r.a)({},d,((c={})[u]=m,c[v]=g,c))}),t)}n("hHhE"),n("f3/d"),n("dI71"),n("94VI")},OGtf:function(t,e,n){var r=n("XKFU"),a=n("eeVq"),i=n("vhPU"),o=/"/g,s=function(t,e,n,r){var a=String(i(t)),s="<"+e;return""!==n&&(s+=" "+n+'="'+String(r).replace(o,"&quot;")+'"'),s+">"+a+"</"+e+">"};t.exports=function(t,e){var n={};n[t]=e(s),r(r.P+r.F*a((function(){var e=""[t]('"');return e!==e.toLowerCase()||e.split('"').length>3})),"String",n)}},QA0p:function(t,e,n){"use strict";n("91GP"),n("f3/d"),e.__esModule=!0,e.default=function(t,e){var n=void 0===e?{}:e,r=n.propTypes,i=n.defaultProps,o=n.allowFallback,s=void 0!==o&&o,u=n.displayName,c=void 0===u?t.name||t.displayName:u,l=function(e,n){return t(e,n)};return Object.assign(a.default.forwardRef||!s?a.default.forwardRef(l):function(t){return l(t,null)},{displayName:c,propTypes:r,defaultProps:i})};var r,a=(r=n("q1tI"))&&r.__esModule?r:{default:r}},RMg3:function(t,e,n){"use strict";var r=n("q1tI"),a=n.n(r),i=(n("0mN4"),n("wx14")),o=n("zLVn"),s=n("TSYQ"),u=n.n(s),c=n("JCAc"),l=(n("pIFo"),/-(.)/g);n("f3/d"),n("QA0p");var f=a.a.createContext({});f.Consumer,f.Provider;function p(t,e){var n=Object(r.useContext)(f);return t||n[e]||e}var d=function(t){return t[0].toUpperCase()+(e=t,e.replace(l,(function(t,e){return e.toUpperCase()}))).slice(1);var e};var v=a.a.forwardRef((function(t,e){var n=t.bsPrefix,r=t.className,s=t.as,c=Object(o.a)(t,["bsPrefix","className","as"]);n=p(n,"navbar-brand");var l=s||(c.href?"a":"span");return a.a.createElement(l,Object(i.a)({},c,{ref:e,className:u()(r,n)}))}));v.displayName="NavbarBrand";var h=v,m=n("dI71");n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("8+KV");function g(t){var e=function(t){return t&&t.ownerDocument||document}(t);return e&&e.defaultView||window}var E=/([A-Z])/g;var x=/^ms-/;function b(t){return function(t){return t.replace(E,"-$1").toLowerCase()}(t).replace(x,"-ms-")}var y=/^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;var N=function(t,e){var n="",r="";if("string"==typeof e)return t.style.getPropertyValue(b(e))||function(t,e){return g(t).getComputedStyle(t,e)}(t).getPropertyValue(b(e));Object.keys(e).forEach((function(a){var i=e[a];i||0===i?!function(t){return!(!t||!y.test(t))}(a)?n+=b(a)+": "+i+";":r+=a+"("+i+") ":t.style.removeProperty(b(a))})),r&&(n+="transform: "+r+";"),t.style.cssText+=";"+n},O=(n("V+eJ"),n("ctsM")),C=!1,w=!1;try{var j={get passive(){return C=!0},get once(){return w=C=!0}};O.a&&(window.addEventListener("test",j,j),window.removeEventListener("test",j,!0))}catch(dt){}var S=function(t,e,n,r){if(r&&"boolean"!=typeof r&&!w){var a=r.once,i=r.capture,o=n;!w&&a&&(o=n.__once||function t(r){this.removeEventListener(e,t,i),n.call(this,r)},n.__once=o),t.addEventListener(e,o,C?r:i)}t.addEventListener(e,n,r)};var k=function(t,e,n,r){var a=r&&"boolean"!=typeof r?r.capture:r;t.removeEventListener(e,n,a),n.__once&&t.removeEventListener(e,n.__once,a)};var T=function(t,e,n,r){return S(t,e,n,r),function(){k(t,e,n,r)}};O.a&&window;function P(t,e,n){void 0===n&&(n=5);var r=!1,a=setTimeout((function(){r||function(t){var e=document.createEvent("HTMLEvents");e.initEvent("transitionend",!0,!0),t.dispatchEvent(e)}(t)}),e+n),i=T(t,"transitionend",(function(){r=!0}),{once:!0});return function(){clearTimeout(a),i()}}var I=function(t,e,n){var r,a;null==n&&(r=N(t,"transitionDuration")||"",a=-1===r.indexOf("ms")?1e3:1,n=parseFloat(r)*a||0);var i=P(t,n),o=T(t,"transitionend",e);return function(){i(),o()}},_=n("i8i4"),L=n.n(_),R=!1,D=a.a.createContext(null),A=function(t){function e(e,n){var r;r=t.call(this,e,n)||this;var a,i=n&&!n.isMounting?e.enter:e.appear;return r.appearStatus=null,e.in?i?(a="exited",r.appearStatus="entering"):a="entered":a=e.unmountOnExit||e.mountOnEnter?"unmounted":"exited",r.state={status:a},r.nextCallback=null,r}Object(m.a)(e,t),e.getDerivedStateFromProps=function(t,e){return t.in&&"unmounted"===e.status?{status:"exited"}:null};var n=e.prototype;return n.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},n.componentDidUpdate=function(t){var e=null;if(t!==this.props){var n=this.state.status;this.props.in?"entering"!==n&&"entered"!==n&&(e="entering"):"entering"!==n&&"entered"!==n||(e="exiting")}this.updateStatus(!1,e)},n.componentWillUnmount=function(){this.cancelNextCallback()},n.getTimeouts=function(){var t,e,n,r=this.props.timeout;return t=e=n=r,null!=r&&"number"!=typeof r&&(t=r.exit,e=r.enter,n=void 0!==r.appear?r.appear:e),{exit:t,enter:e,appear:n}},n.updateStatus=function(t,e){void 0===t&&(t=!1),null!==e?(this.cancelNextCallback(),"entering"===e?this.performEnter(t):this.performExit()):this.props.unmountOnExit&&"exited"===this.state.status&&this.setState({status:"unmounted"})},n.performEnter=function(t){var e=this,n=this.props.enter,r=this.context?this.context.isMounting:t,a=this.props.nodeRef?[r]:[L.a.findDOMNode(this),r],i=a[0],o=a[1],s=this.getTimeouts(),u=r?s.appear:s.enter;!t&&!n||R?this.safeSetState({status:"entered"},(function(){e.props.onEntered(i)})):(this.props.onEnter(i,o),this.safeSetState({status:"entering"},(function(){e.props.onEntering(i,o),e.onTransitionEnd(u,(function(){e.safeSetState({status:"entered"},(function(){e.props.onEntered(i,o)}))}))})))},n.performExit=function(){var t=this,e=this.props.exit,n=this.getTimeouts(),r=this.props.nodeRef?void 0:L.a.findDOMNode(this);e&&!R?(this.props.onExit(r),this.safeSetState({status:"exiting"},(function(){t.props.onExiting(r),t.onTransitionEnd(n.exit,(function(){t.safeSetState({status:"exited"},(function(){t.props.onExited(r)}))}))}))):this.safeSetState({status:"exited"},(function(){t.props.onExited(r)}))},n.cancelNextCallback=function(){null!==this.nextCallback&&(this.nextCallback.cancel(),this.nextCallback=null)},n.safeSetState=function(t,e){e=this.setNextCallback(e),this.setState(t,e)},n.setNextCallback=function(t){var e=this,n=!0;return this.nextCallback=function(r){n&&(n=!1,e.nextCallback=null,t(r))},this.nextCallback.cancel=function(){n=!1},this.nextCallback},n.onTransitionEnd=function(t,e){this.setNextCallback(e);var n=this.props.nodeRef?this.props.nodeRef.current:L.a.findDOMNode(this),r=null==t&&!this.props.addEndListener;if(n&&!r){if(this.props.addEndListener){var a=this.props.nodeRef?[this.nextCallback]:[n,this.nextCallback],i=a[0],o=a[1];this.props.addEndListener(i,o)}null!=t&&setTimeout(this.nextCallback,t)}else setTimeout(this.nextCallback,0)},n.render=function(){var t=this.state.status;if("unmounted"===t)return null;var e=this.props,n=e.children,r=(e.in,e.mountOnEnter,e.unmountOnExit,e.appear,e.enter,e.exit,e.timeout,e.addEndListener,e.onEnter,e.onEntering,e.onEntered,e.onExit,e.onExiting,e.onExited,e.nodeRef,Object(o.a)(e,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]));return a.a.createElement(D.Provider,{value:null},"function"==typeof n?n(t,r):a.a.cloneElement(a.a.Children.only(n),r))},e}(a.a.Component);function V(){}A.contextType=D,A.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:V,onEntering:V,onEntered:V,onExit:V,onExiting:V,onExited:V},A.UNMOUNTED="unmounted",A.EXITED="exited",A.ENTERING="entering",A.ENTERED="entered",A.EXITING="exiting";var M=A;n("0l/t"),n("DNiP");var F,q=function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return e.filter((function(t){return null!=t})).reduce((function(t,e){if("function"!=typeof e)throw new Error("Invalid Argument Type, must only provide functions, undefined, or null.");return null===t?e:function(){for(var n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];t.apply(this,r),e.apply(this,r)}}),null)};function U(t){t.offsetHeight}var G={height:["marginTop","marginBottom"],width:["marginLeft","marginRight"]};var B=((F={}).exited="collapse",F.exiting="collapsing",F.entering="collapsing",F.entered="collapse show",F),X={in:!1,timeout:300,mountOnEnter:!1,unmountOnExit:!1,appear:!1,dimension:"height",getDimensionValue:function(t,e){var n=e["offset"+t[0].toUpperCase()+t.slice(1)],r=G[t];return n+parseInt(N(e,r[0]),10)+parseInt(N(e,r[1]),10)}},J=function(t){function e(){for(var e,n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];return(e=t.call.apply(t,[this].concat(r))||this).handleEnter=function(t){t.style[e.getDimension()]="0"},e.handleEntering=function(t){var n=e.getDimension();t.style[n]=e._getScrollDimensionValue(t,n)},e.handleEntered=function(t){t.style[e.getDimension()]=null},e.handleExit=function(t){var n=e.getDimension();t.style[n]=e.props.getDimensionValue(n,t)+"px",U(t)},e.handleExiting=function(t){t.style[e.getDimension()]=null},e}Object(m.a)(e,t);var n=e.prototype;return n.getDimension=function(){return"function"==typeof this.props.dimension?this.props.dimension():this.props.dimension},n._getScrollDimensionValue=function(t,e){return t["scroll"+e[0].toUpperCase()+e.slice(1)]+"px"},n.render=function(){var t=this,e=this.props,n=e.onEnter,r=e.onEntering,s=e.onEntered,c=e.onExit,l=e.onExiting,f=e.className,p=e.children,d=Object(o.a)(e,["onEnter","onEntering","onEntered","onExit","onExiting","className","children"]);delete d.dimension,delete d.getDimensionValue;var v=q(this.handleEnter,n),h=q(this.handleEntering,r),m=q(this.handleEntered,s),g=q(this.handleExit,c),E=q(this.handleExiting,l);return a.a.createElement(M,Object(i.a)({addEndListener:I},d,{"aria-expanded":d.role?d.in:null,onEnter:v,onEntering:h,onEntered:m,onExit:g,onExiting:E}),(function(e,n){return a.a.cloneElement(p,Object(i.a)({},n,{className:u()(f,p.props.className,B[e],"width"===t.getDimension()&&"width")}))}))},e}(a.a.Component);J.defaultProps=X;var K=J,Y=a.a.createContext(null),W=a.a.forwardRef((function(t,e){var n=t.children,r=t.bsPrefix,s=Object(o.a)(t,["children","bsPrefix"]);return r=p(r,"navbar-collapse"),a.a.createElement(Y.Consumer,null,(function(t){return a.a.createElement(K,Object(i.a)({in:!(!t||!t.expanded)},s),a.a.createElement("div",{ref:e,className:r},n))}))}));W.displayName="NavbarCollapse";var Z=W,z=n("ZCiN"),H=a.a.forwardRef((function(t,e){var n=t.bsPrefix,s=t.className,c=t.children,l=t.label,f=t.as,d=void 0===f?"button":f,v=t.onClick,h=Object(o.a)(t,["bsPrefix","className","children","label","as","onClick"]);n=p(n,"navbar-toggler");var m=Object(r.useContext)(Y)||{},g=m.onToggle,E=m.expanded,x=Object(z.a)((function(t){v&&v(t),g&&g()}));return"button"===d&&(h.type="button"),a.a.createElement(d,Object(i.a)({},h,{ref:e,onClick:x,"aria-label":l,className:u()(s,n,!E&&"collapsed")}),c||a.a.createElement("span",{className:n+"-icon"}))}));H.displayName="NavbarToggle",H.defaultProps={label:"Toggle navigation"};var Q,$,tt,et,nt,rt,at,it,ot,st=H,ut=a.a.createContext(),ct=a.a.forwardRef((function(t,e){var n=Object(c.a)(t,{expanded:"onToggle"}),s=n.bsPrefix,l=n.expand,f=n.variant,d=n.bg,v=n.fixed,h=n.sticky,m=n.className,g=n.children,E=n.as,x=void 0===E?"nav":E,b=n.expanded,y=n.onToggle,N=n.onSelect,O=n.collapseOnSelect,C=Object(o.a)(n,["bsPrefix","expand","variant","bg","fixed","sticky","className","children","as","expanded","onToggle","onSelect","collapseOnSelect"]);s=p(s,"navbar");var w=Object(r.useCallback)((function(){N&&N.apply(void 0,arguments),O&&b&&y(!1)}),[N,O,b,y]);void 0===C.role&&"nav"!==x&&(C.role="navigation");var j=s+"-expand";"string"==typeof l&&(j=j+"-"+l);var S=Object(r.useMemo)((function(){return{onToggle:function(){return y(!b)},bsPrefix:s,expanded:b}}),[s,b,y]);return a.a.createElement(Y.Provider,{value:S},a.a.createElement(ut.Provider,{value:w},a.a.createElement(x,Object(i.a)({ref:e},C,{className:u()(m,s,l&&j,f&&s+"-"+f,d&&"bg-"+d,h&&"sticky-"+h,v&&"fixed-"+v)}),g)))}));ct.defaultProps={expand:!0,variant:"light",collapseOnSelect:!1},ct.displayName="Navbar",ct.Brand=h,ct.Toggle=st,ct.Collapse=Z,ct.Text=(Q="navbar-text",et=(tt=void 0===($={Component:"span"})?{}:$).displayName,nt=void 0===et?d(Q):et,rt=tt.Component,at=void 0===rt?"div":rt,it=tt.defaultProps,(ot=a.a.forwardRef((function(t,e){var n=t.className,r=t.bsPrefix,s=t.as,c=void 0===s?at:s,l=Object(o.a)(t,["className","bsPrefix","as"]),f=p(r,Q);return a.a.createElement(c,Object(i.a)({ref:e,className:u()(n,f)},l))}))).defaultProps=it,ot.displayName=nt,ot);var lt=ct,ft=n("qKvR");var pt=function(t){var e,n;function r(){return t.apply(this,arguments)||this}return n=t,(e=r).prototype=Object.create(n.prototype),e.prototype.constructor=e,e.__proto__=n,r.prototype.render=function(){return Object(ft.a)(lt,{sticky:"top",expand:"lg",variant:"light",bg:"light"},Object(ft.a)(lt.Brand,{href:"https://nikkih95159.github.io/personal-website/"},"Home"),Object(ft.a)(lt.Brand,{href:"https://nikkih95159.github.io/personal-website/photos"},"Photos"))},r}(a.a.PureComponent);e.a=pt},TSYQ:function(t,e,n){var r;n("LK8F"),function(){"use strict";var n={}.hasOwnProperty;function a(){for(var t=[],e=0;e<arguments.length;e++){var r=arguments[e];if(r){var i=typeof r;if("string"===i||"number"===i)t.push(r);else if(Array.isArray(r)&&r.length){var o=a.apply(null,r);o&&t.push(o)}else if("object"===i)for(var s in r)n.call(r,s)&&r[s]&&t.push(s)}}return t.join(" ")}t.exports?(a.default=a,t.exports=a):void 0===(r=function(){return a}.apply(e,[]))||(t.exports=r)}()},ZCiN:function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var r=n("q1tI");var a=function(t){var e=Object(r.useRef)(t);return Object(r.useEffect)((function(){e.current=t}),[t]),e};function i(t){var e=a(t);return Object(r.useCallback)((function(){return e.current&&e.current.apply(e,arguments)}),[e])}},ctsM:function(t,e,n){"use strict";e.a=!("undefined"==typeof window||!window.document||!window.document.createElement)},dI71:function(t,e,n){"use strict";function r(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,t.__proto__=e}n.d(e,"a",(function(){return r}))},wx14:function(t,e,n){"use strict";function r(){return(r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}n.d(e,"a",(function(){return r}))},xfY5:function(t,e,n){"use strict";var r=n("dyZX"),a=n("aagx"),i=n("LZWt"),o=n("Xbzi"),s=n("apmT"),u=n("eeVq"),c=n("kJMx").f,l=n("EemH").f,f=n("hswa").f,p=n("qncB").trim,d=r.Number,v=d,h=d.prototype,m="Number"==i(n("Kuth")(h)),g="trim"in String.prototype,E=function(t){var e=s(t,!1);if("string"==typeof e&&e.length>2){var n,r,a,i=(e=g?e.trim():p(e,3)).charCodeAt(0);if(43===i||45===i){if(88===(n=e.charCodeAt(2))||120===n)return NaN}else if(48===i){switch(e.charCodeAt(1)){case 66:case 98:r=2,a=49;break;case 79:case 111:r=8,a=55;break;default:return+e}for(var o,u=e.slice(2),c=0,l=u.length;c<l;c++)if((o=u.charCodeAt(c))<48||o>a)return NaN;return parseInt(u,r)}}return+e};if(!d(" 0o1")||!d("0b1")||d("+0x1")){d=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof d&&(m?u((function(){h.valueOf.call(n)})):"Number"!=i(n))?o(new v(E(e)),n,d):E(e)};for(var x,b=n("nh4g")?c(v):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),y=0;b.length>y;y++)a(v,x=b[y])&&!a(d,x)&&f(d,x,l(v,x));d.prototype=h,h.constructor=d,n("KroJ")(r,"Number",d)}},zLVn:function(t,e,n){"use strict";function r(t,e){if(null==t)return{};var n,r,a={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}n.d(e,"a",(function(){return r}))}}]);
//# sourceMappingURL=commons-97bcf801fdc222f7fbe6.js.map