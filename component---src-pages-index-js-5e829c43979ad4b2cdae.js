(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"/8hW":function(t,e,n){t.exports=n.p+"static/portfolio-fc96ef4c76989b4c651e79eb626fde18.png"},"0RwA":function(t,e,n){"use strict";n("pIFo"),n("/SS/"),n("hHhE"),n("V+eJ"),n("91GP"),n("LK8F"),n("rE2o"),n("ioFf"),n("rGqo"),n("HAE/"),Object.defineProperty(e,"__esModule",{value:!0});var r=function(t,e){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return function(t,e){var n=[],r=!0,o=!1,a=void 0;try{for(var i,c=t[Symbol.iterator]();!(r=(i=c.next()).done)&&(n.push(i.value),!e||n.length!==e);r=!0);}catch(l){o=!0,a=l}finally{try{!r&&c.return&&c.return()}finally{if(o)throw a}}return n}(t,e);throw new TypeError("Invalid attempt to destructure non-iterable instance")},o=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},a=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),i=s(n("q1tI")),c=s(n("17x9")),l=n("Zuji");function s(t){return t&&t.__esModule?t:{default:t}}var u=function(t){function e(t){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e);var n=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t));return n._handleClick=function(t){n.state.beforeAnimate(t),t&&t.preventDefault(),(0,l.animateScroll)(n.state.to,n.state.target,n.state.animate).then((function(e){e&&(n.state.disableHistory||(0,l.updateHistory)(e),n.state.afterAnimate(t))}))},n.state=e._stateHelper(t),n.simulateClick=n._handleClick,n}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,t),a(e,[{key:"componentWillReceiveProps",value:function(t){this.setState(e._stateHelper(t))}},{key:"render",value:function(){var t=this.props,e=(t.to,t.target,t.animate,t.beforeAnimate,t.afterAnimate,t.disableHistory,function(t,e){var n={};for(var r in t)e.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r]);return n}(t,["to","target","animate","beforeAnimate","afterAnimate","disableHistory"]));return this.props.children?i.default.createElement("a",o({},e,{href:"#"+this.state.to,onClick:this._handleClick})):null}}],[{key:"_normalizeId",value:function(t){return t&&t.replace(/^#/,"")||""}},{key:"_stateHelper",value:function(t){var n=t.animate||{},r=n.offset,o=void 0===r?0:r,a=n.duration,i=void 0===a?400:a,c=n.easing,l=void 0===c?p:c;return{to:e._normalizeId(t.to),target:e._normalizeId(t.target),animate:{offset:o,duration:i,easing:l},beforeAnimate:t.beforeAnimate||function(){},afterAnimate:t.afterAnimate||function(){},disableHistory:t.disableHistory}}},{key:"getDerivedStateFromProps",value:function(t){return e._stateHelper(t)}}]),e}(i.default.Component);function p(t,e,n,r,o){return-r*(e/=o)*(e-2)+n}u.propTypes={to:c.default.string.isRequired,target:c.default.string,animate:c.default.shape({offset:c.default.number,duration:c.default.number,easing:c.default.func}),beforeAnimate:c.default.func,afterAnimate:c.default.func,disableHistory:c.default.bool,children:c.default.node},e.default=u;var f=r(/^v?((\d+)\.(\d+)\.(\d+))(?:-([\dA-Za-z\-]+(?:\.[\dA-Za-z\-]+)*))?(?:\+([\dA-Za-z\-]+(?:\.[\dA-Za-z\-]+)*))?$/.exec(i.default.version),4),d=f[2],m=f[3];d>=16&&m>=3&&delete u.prototype.componentWillReceiveProps},"9VmF":function(t,e,n){"use strict";var r=n("XKFU"),o=n("ne8i"),a=n("0sh+"),i="".startsWith;r(r.P+r.F*n("UUeW")("startsWith"),"String",{startsWith:function(t){var e=a(this,t,"startsWith"),n=o(Math.min(arguments.length>1?arguments[1]:void 0,e.length)),r=String(t);return i?i.call(e,r,n):e.slice(n,n+r.length)===r}})},CnYw:function(t,e,n){t.exports=n.p+"static/gym-pal-94907a1e98c29a2e3830006d01370c4c.png"},NAVQ:function(t,e,n){"use strict";t.exports=n("NjAn").default},NjAn:function(t,e,n){"use strict";n("91GP"),n("8+KV"),n("T39b"),n("rGqo"),n("yt8O"),n("Btvt"),n("9AAn"),n("XfO3"),n("HEwt"),n("LK8F"),n("HAE/"),Object.defineProperty(e,"__esModule",{value:!0});var r,o=n("xEkU"),a=(r=o)&&r.__esModule?r:{default:r};var i=new Map,c=new Set,l=!1,s=0;function u(){return(new Date).getTime()}function p(t){var e=t.fn,n=t.args;e.apply(void 0,function(t){if(Array.isArray(t)){for(var e=0,n=Array(t.length);e<t.length;e++)n[e]=t[e];return n}return Array.from(t)}(n))}function f(){var t=u();i.forEach(function(t){return function(e,n){var r=e.nextTick,o=e.ms,a=e.mode;t-r>=0&&(c.add(e),0===a?i.delete(n):i.set(n,Object.assign({},e,{nextTick:r+o})))}}(t)),0!==c.size&&(c.forEach(p),c.clear()),0!==i.size?(0,a.default)(f):l=!1}function d(t){var e=t.fn,n=t.ms,r=void 0===n?0:n,o=t.args,c=t.mode;if(!e)return null;var p=s;return i.set(p,{fn:e,ms:r,nextTick:u()+r,args:o,mode:c}),l||(l=!0,(0,a.default)(f)),s+=1,p}function m(t){i.has(t)&&i.delete(t),0===i.size&&(l=!1)}e.default={setTimeout:function(t){for(var e=arguments.length,n=Array(e>2?e-2:0),r=2;r<e;r++)n[r-2]=arguments[r];var o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return d({fn:t,ms:o,args:n,mode:0})},clearTimeout:m,setInterval:function(t){for(var e=arguments.length,n=Array(e>2?e-2:0),r=2;r<e;r++)n[r-2]=arguments[r];var o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return d({fn:t,ms:o,args:n,mode:1})},clearInterval:m}},QOY4:function(t,e,n){t.exports=n.p+"static/cnn-52161fdcb3928f007f50ac393dfdf3ad.png"},RXBc:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return B}));var r=n("q1tI"),o=n.n(r),a=n("Bl7J"),i=n("qKvR");var c=function(t){var e,n;function r(){return t.apply(this,arguments)||this}return n=t,(e=r).prototype=Object.create(n.prototype),e.prototype.constructor=e,e.__proto__=n,r.prototype.render=function(){return Object(i.a)("div",{className:"about-container"},Object(i.a)("h2",{id:"about",className:"about-title"},"About"),Object(i.a)("div",{className:"about-description"},Object(i.a)("p",null,"I am currently seeking full time opportunities in web development. And I love taking photos!")))},r}(o.a.Component);var l=function(t){var e,n;function r(){return t.apply(this,arguments)||this}return n=t,(e=r).prototype=Object.create(n.prototype),e.prototype.constructor=e,e.__proto__=n,r.prototype.render=function(){return Object(i.a)("div",{className:"contact-links"},Object(i.a)("span",null,Object(i.a)("a",{rel:"noopener noreferrer",target:"_blank",href:"mailto:nhardima@ucsd.edu"},"nhardima@ucsd.edu")),Object(i.a)("span",null,Object(i.a)("a",{rel:"noopener noreferrer",target:"_blank",href:"https://www.linkedin.com/in/nikki-hardiman/"},"LinkedIn")),Object(i.a)("span",null,Object(i.a)("a",{rel:"noopener noreferrer",target:"_blank",href:"https://github.com/nikkih95159"},"Github")))},r}(o.a.Component),s=n("0RwA"),u=n.n(s);var p=function(t){var e,n;function r(){return t.apply(this,arguments)||this}n=t,(e=r).prototype=Object.create(n.prototype),e.prototype.constructor=e,e.__proto__=n;var o=r.prototype;return o.componentDidMount=function(){this.refs.navbar.addEventListener("click",(function(t){"Projects"===t.target.innerText?document.getElementById("projects").scrollIntoView({behavior:"smooth"}):"Contact"===t.target.innerText&&document.getElementById("contact").scrollIntoView({behavior:"smooth"})}))},o.render=function(){return Object(i.a)("div",{className:"navbar-container"},Object(i.a)("nav",{className:"navbar",ref:"navbar"},Object(i.a)("a",{href:"."},"Home"),Object(i.a)(u.a,{to:"#projects"},"Projects"),Object(i.a)(u.a,{to:"#contact"},"Contact"),Object(i.a)("a",{href:"./photos"},"Photos")))},r}(o.a.PureComponent);function f(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,t.__proto__=e}var d=function(t){function e(){return t.apply(this,arguments)||this}return f(e,t),e.prototype.render=function(){return Object(i.a)("span",{className:"project-skill"},this.props.skill)},e}(o.a.PureComponent),m=function(t){function e(){return t.apply(this,arguments)||this}return f(e,t),e.prototype.render=function(){return Object(i.a)("div",{className:"project-skills"},this.props.skills.map((function(t,e){return Object(i.a)(d,{skill:t,key:e})})))},e}(o.a.PureComponent),b=function(t){function e(){return t.apply(this,arguments)||this}return f(e,t),e.prototype.render=function(){var t=this.props.links.github;return Object(i.a)("div",{className:"project-links"},Object(i.a)("a",{href:t,rel:"noopener noreferrer",target:"_blank",className:"project-link secondary"},"Github"))},e}(o.a.PureComponent),y=function(t){function e(){return t.apply(this,arguments)||this}return f(e,t),e.prototype.render=function(){var t=this.props,e=t.image,n=t.title,r=t.description,o=t.skills,a=t.links;return Object(i.a)("div",{className:"project-card"},Object(i.a)("img",{className:"project-image",src:e,alt:"project"}),Object(i.a)("div",{className:"project-background"}),Object(i.a)("div",{className:"project-content"},Object(i.a)("h3",null,n),Object(i.a)("p",{dangerouslySetInnerHTML:{__html:r}}),Object(i.a)(m,{skills:o}),Object(i.a)(b,{links:a})))},e}(o.a.PureComponent),h=function(t){function e(){return t.apply(this,arguments)||this}return f(e,t),e.prototype.render=function(){var t=this.props.projects;return Object(i.a)("div",{className:"projects-container"},t.map((function(t){return Object(i.a)(y,{title:t.title,description:t.description,skills:t.skills,links:t.links,image:t.image,key:t.title})})))},e}(o.a.PureComponent),v=(n("2Spj"),n("9VmF"),n("Tze0"),n("KKXr"),n("DNiP"),n("pIFo"),n("bWfx"),n("XfO3"),n("HEwt"),n("a1Th"),n("h7Nl"),n("LK8F"),n("V+eJ"),n("WLL4"),n("jm62"),n("8+KV"),n("0l/t"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("HAE/"),n("rE2o"),n("ioFf"),n("7O5W")),g=n("17x9"),j=n.n(g);function O(t){return(O="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function k(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function w(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function x(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?w(Object(n),!0).forEach((function(e){k(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):w(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function _(t,e){if(null==t)return{};var n,r,o=function(t,e){if(null==t)return{};var n,r,o={},a=Object.keys(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}function A(t){return function(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function P(t){return e=t,(e-=0)==e?t:(t=t.replace(/[\-_\s]+(.)?/g,(function(t,e){return e?e.toUpperCase():""}))).substr(0,1).toLowerCase()+t.substr(1);var e}function S(t){return t.split(";").map((function(t){return t.trim()})).filter((function(t){return t})).reduce((function(t,e){var n,r=e.indexOf(":"),o=P(e.slice(0,r)),a=e.slice(r+1).trim();return o.startsWith("webkit")?t[(n=o,n.charAt(0).toUpperCase()+n.slice(1))]=a:t[o]=a,t}),{})}var T=!1;try{T=!0}catch(U){}function C(t){return null===t?null:"object"===O(t)&&t.prefix&&t.iconName?t:Array.isArray(t)&&2===t.length?{prefix:t[0],iconName:t[1]}:"string"==typeof t?{prefix:"fas",iconName:t}:void 0}function E(t,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?k({},t,e):{}}function N(t){var e=t.forwardedRef,n=_(t,["forwardedRef"]),r=n.icon,o=n.mask,a=n.symbol,i=n.className,c=n.title,l=C(r),s=E("classes",[].concat(A(function(t){var e,n=t.spin,r=t.pulse,o=t.fixedWidth,a=t.inverse,i=t.border,c=t.listItem,l=t.flip,s=t.size,u=t.rotation,p=t.pull,f=(k(e={"fa-spin":n,"fa-pulse":r,"fa-fw":o,"fa-inverse":a,"fa-border":i,"fa-li":c,"fa-flip-horizontal":"horizontal"===l||"both"===l,"fa-flip-vertical":"vertical"===l||"both"===l},"fa-".concat(s),null!=s),k(e,"fa-rotate-".concat(u),null!=u&&0!==u),k(e,"fa-pull-".concat(p),null!=p),k(e,"fa-swap-opacity",t.swapOpacity),e);return Object.keys(f).map((function(t){return f[t]?t:null})).filter((function(t){return t}))}(n)),A(i.split(" ")))),u=E("transform","string"==typeof n.transform?v.d.transform(n.transform):n.transform),p=E("mask",C(o)),f=Object(v.b)(l,x({},s,{},u,{},p,{symbol:a,title:c}));if(!f)return function(){var t;!T&&console&&"function"==typeof console.error&&(t=console).error.apply(t,arguments)}("Could not find icon",l),null;var d=f.abstract,m={ref:e};return Object.keys(n).forEach((function(t){N.defaultProps.hasOwnProperty(t)||(m[t]=n[t])})),I(d[0],m)}N.displayName="FontAwesomeIcon",N.propTypes={border:j.a.bool,className:j.a.string,mask:j.a.oneOfType([j.a.object,j.a.array,j.a.string]),fixedWidth:j.a.bool,inverse:j.a.bool,flip:j.a.oneOf(["horizontal","vertical","both"]),icon:j.a.oneOfType([j.a.object,j.a.array,j.a.string]),listItem:j.a.bool,pull:j.a.oneOf(["right","left"]),pulse:j.a.bool,rotation:j.a.oneOf([0,90,180,270]),size:j.a.oneOf(["lg","xs","sm","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:j.a.bool,symbol:j.a.oneOfType([j.a.bool,j.a.string]),title:j.a.string,transform:j.a.oneOfType([j.a.string,j.a.object]),swapOpacity:j.a.bool},N.defaultProps={border:!1,className:"",mask:null,fixedWidth:!1,inverse:!1,flip:null,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,symbol:!1,title:"",transform:null,swapOpacity:!1};var I=function t(e,n){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if("string"==typeof n)return n;var o=(n.children||[]).map((function(n){return t(e,n)})),a=Object.keys(n.attributes||{}).reduce((function(t,e){var r=n.attributes[e];switch(e){case"class":t.attrs.className=r,delete n.attributes.class;break;case"style":t.attrs.style=S(r);break;default:0===e.indexOf("aria-")||0===e.indexOf("data-")?t.attrs[e.toLowerCase()]=r:t.attrs[P(e)]=r}return t}),{attrs:{}}),i=r.style,c=void 0===i?{}:i,l=_(r,["style"]);return a.attrs.style=x({},a.attrs.style,{},c),e.apply(void 0,[n.tag,x({},a.attrs,{},l)].concat(A(o)))}.bind(null,o.a.createElement);var H=function(t){var e,r;function o(){return t.apply(this,arguments)||this}return r=t,(e=o).prototype=Object.create(r.prototype),e.prototype.constructor=e,e.__proto__=r,o.prototype.render=function(){return Object(i.a)("div",{className:"background-container"},Object(i.a)("img",{src:n("uJqY"),alt:"background"}),Object(i.a)("div",{className:"centered"},Object(i.a)("h1",null,"Nikki Hardiman")),Object(i.a)("div",{className:"image-location"},Object(i.a)(N,{icon:["fas","map-marker-alt"]}),Object(i.a)("p",null,"Queenstown, NZ")))},o}(o.a.Component),F=n("QOY4"),z=n.n(F),R=n("CnYw"),W=n.n(R),M=n("aVlu"),L=n.n(M),D=n("cpEV"),V=n.n(D),q=n("/8hW"),G=n.n(q),J=n("U+jq"),K=[{title:"Todo Extension",description:"A Google Chrome extension, inspired by Momentum, that allows you to do update your todos on Chrome and a corresponding android app.",skills:["HTML","CSS","JavaScript","Java"],image:n.n(J).a,links:{github:"https://github.com/nikkih95159/WebTodoExt"}},{title:"Image Classification",description:"A neural network project for a deep learning class where I trained a convolutional neural network on landmark images from Google.",skills:["Python","Pytorch"],image:z.a,links:{github:"https://github.com/nikkih95159/COGS181Project"}},{title:"Gym-Pal",description:"Team project for a design interaction class at UCSD. Produces specialized workouts catered towards the user's specified muscles.",skills:["HTML","CSS","JavaScript"],image:W.a,links:{github:"https://github.com/nikkih95159/Gym-Pal"}},{title:"Video Player",description:"Part of a challenge for an internship at IGN. Contains a stylized video player pulled from the IGN API with more related videos and descriptions.",skills:["HTML","CSS","JavaScript"],image:L.a,links:{github:"https://github.com/nikkih95159/IGN"}},{title:"Spotify Playlist",description:"Largely inspired from the Youtuber, TheComeUp. Takes liked videos from YouTube and creates a new Spotify playlist and includes suggested songs based on Spotify's API.",skills:["Python"],image:V.a,links:{github:"https://github.com/nikkih95159/Spotify-Playlist"}},{title:"Portfolio",description:"This website! Created with React and Gatsby.",skills:["HTML","Sass","JavaScript","ReactJS"],image:G.a,links:{github:"https://github.com/nikkih95159/personal-website"}}];var B=function(t){var e,n;function r(){return t.apply(this,arguments)||this}n=t,(e=r).prototype=Object.create(n.prototype),e.prototype.constructor=e,e.__proto__=n;var o=r.prototype;return o.componentDidMount=function(){var t=document.getElementById("scrollTop");window.onscroll=function(){document.body.scrollTop>20||document.documentElement.scrollTop>20?t.style.display="block":(t.style.display="none",window.history.replaceState("","","."))}},o.topFunction=function(){window.scrollTo({top:0,behavior:"smooth"}),window.history.replaceState("","",".")},o.render=function(){return Object(i.a)("div",{className:"container-lg"},Object(i.a)("button",{onClick:this.topFunction,id:"scrollTop"}," ^"),Object(i.a)(a.a,null,Object(i.a)(p,null),Object(i.a)(H,null),Object(i.a)(c,null),Object(i.a)("h2",{id:"projects",className:"section-title"},"Projects"),Object(i.a)(h,{projects:K}),Object(i.a)("h2",{id:"contact",className:"section-title"},"Contact"),Object(i.a)(l,null)))},r}(o.a.Component)},"U+jq":function(t,e,n){t.exports=n.p+"static/todoext-95d3ebad49485576e2afa1f3f2f1a933.jpg"},WLL4:function(t,e,n){var r=n("XKFU");r(r.S+r.F*!n("nh4g"),"Object",{defineProperties:n("FJW5")})},Zuji:function(t,e,n){"use strict";n("VRzm"),n("Btvt"),n("HAE/"),Object.defineProperty(e,"__esModule",{value:!0}),e.animateScroll=void 0,e.updateHistory=function(t){t="#"+t,history.pushState?history.pushState(null,null,t):location.hash=t};var r,o,a=n("NAVQ");e.animateScroll=(r=void 0,o=void 0,function(t,e,n){var i=document.getElementById(e);function c(){return i?i.scrollTop:document.documentElement.scrollTop||document.body.scrollTop}function l(t){i?i.scrollTop=t:document.documentElement.scrollTop=document.body.scrollTop=t}return new Promise((function(e,s){var u=t?document.getElementById(t):document.body;if(!u)return s(new Error("Cannot find element: #"+t));var p,f=n.offset,d=n.duration,m=n.easing,b=c(),y=(p=i?i.getBoundingClientRect().top:0,u.getBoundingClientRect().top-p+c()+f-b);r&&((0,a.clearTimeout)(r),o()),o=e,function n(){var o=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,i=20,c=o+i,s=m(null,c,b,y,d);if(l(s),!(c<d))return r=void 0,e(t);r=(0,a.setTimeout)((function(){n(c)}),i)}()}))})},aVlu:function(t,e,n){t.exports=n.p+"static/ign-cbedcd728d14602d3276a80bd14d8803.png"},bQgK:function(t,e,n){(function(e){n("eM6i"),function(){var n,r,o,a,i,c;"undefined"!=typeof performance&&null!==performance&&performance.now?t.exports=function(){return performance.now()}:null!=e&&e.hrtime?(t.exports=function(){return(n()-i)/1e6},r=e.hrtime,a=(n=function(){var t;return 1e9*(t=r())[0]+t[1]})(),c=1e9*e.uptime(),i=a-c):Date.now?(t.exports=function(){return Date.now()-o},o=Date.now()):(t.exports=function(){return(new Date).getTime()-o},o=(new Date).getTime())}.call(this)}).call(this,n("8oxB"))},cpEV:function(t,e,n){t.exports=n.p+"static/spotify-fcb683fd88f7d6c73c7e8ce165dafdaf.png"},jm62:function(t,e,n){var r=n("XKFU"),o=n("mQtv"),a=n("aCFj"),i=n("EemH"),c=n("8a7r");r(r.S,"Object",{getOwnPropertyDescriptors:function(t){for(var e,n,r=a(t),l=i.f,s=o(r),u={},p=0;s.length>p;)void 0!==(n=l(r,e=s[p++]))&&c(u,e,n);return u}})},mQtv:function(t,e,n){var r=n("kJMx"),o=n("JiEa"),a=n("y3w9"),i=n("dyZX").Reflect;t.exports=i&&i.ownKeys||function(t){var e=r.f(a(t)),n=o.f;return n?e.concat(n(t)):e}},uJqY:function(t,e,n){t.exports=n.p+"static/background2-ce5fa620b82f1cf391596c6b13569657.jpg"},xEkU:function(t,e,n){(function(e){for(var r=n("bQgK"),o="undefined"==typeof window?e:window,a=["moz","webkit"],i="AnimationFrame",c=o["request"+i],l=o["cancel"+i]||o["cancelRequest"+i],s=0;!c&&s<a.length;s++)c=o[a[s]+"Request"+i],l=o[a[s]+"Cancel"+i]||o[a[s]+"CancelRequest"+i];if(!c||!l){var u=0,p=0,f=[];c=function(t){if(0===f.length){var e=r(),n=Math.max(0,1e3/60-(e-u));u=n+e,setTimeout((function(){var t=f.slice(0);f.length=0;for(var e=0;e<t.length;e++)if(!t[e].cancelled)try{t[e].callback(u)}catch(n){setTimeout((function(){throw n}),0)}}),Math.round(n))}return f.push({handle:++p,callback:t,cancelled:!1}),p},l=function(t){for(var e=0;e<f.length;e++)f[e].handle===t&&(f[e].cancelled=!0)}}t.exports=function(t){return c.call(o,t)},t.exports.cancel=function(){l.apply(o,arguments)},t.exports.polyfill=function(t){t||(t=o),t.requestAnimationFrame=c,t.cancelAnimationFrame=l}}).call(this,n("yLpj"))}}]);
//# sourceMappingURL=component---src-pages-index-js-5e829c43979ad4b2cdae.js.map