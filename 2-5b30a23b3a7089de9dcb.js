(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{187:function(t,e,n){"use strict";n.d(e,"a",function(){return r});n(77),n(57),n(36),n(203);var o=function(t){return"string"==typeof t},i=function(t){return Object.keys(t).reduce(function(e,n){return("boolean"==typeof(o=t[n])||o instanceof Boolean)&&!t[n]?e:e+" "+n;var o},"")};function r(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return e.filter(function(t){return null!=t}).map(function(t){return o(t)?t:i(t)}).join(" ")}},188:function(t,e,n){"use strict";n(26);var o=n(0),i=n.n(o),r=n(1),a=n.n(r),s=n(7),l=n.n(s),p=n(187),d=n(156),c=n.n(d),u=n(163),f=n.n(u),h={primary:c.a.primary,secondary:c.a.secondary};function v(t){var e=t.href,n=t.external,o=t.title,r=t.ariaLabel,a=t.color,s=t.className,d=t.children,c={title:o,className:Object(p.a)(f.a.root,h[a],s),"aria-label":r};return n?i.a.createElement("a",Object.assign({href:e},c),d):i.a.createElement(l.a,Object.assign({to:e},c),d)}v.propTypes={href:a.a.string.isRequired,external:a.a.bool,title:a.a.string,ariaLabel:a.a.string,color:a.a.string,className:a.a.string,children:a.a.node},v.defaultProps={external:!1,title:null,ariaLabel:null,color:"primary",className:"",children:null};e.a=v},189:function(t,e,n){"use strict";var o=n(1),i=n.n(o);e.a=i.a.shape({})},190:function(t,e,n){"use strict";n.d(e,"a",function(){return s});n(26);var o=n(0),i=n.n(o),r=n(156),a=n.n(r);function s(t){return function(e){return i.a.createElement(t,Object.assign({theme:a.a},e))}}},192:function(t,e,n){"use strict";var o=n(0),i=n.n(o),r=n(1),a=n.n(r),s=n(195),l=n(9),p=n.n(l),d=n(39),c=n.n(d),u=n(7),f=n.n(u),h=n(217),v=n.n(h),g=n(218),m=n.n(g),y=n(197),w=n(179),b=n.n(w),E="undefined"!=typeof document?document.getElementsByTagName("body")[0]:null;function P(t){var e=t.visible;return i.a.createElement("div",{style:{position:"absolute",width:"100%",height:"100%",backgroundColor:"rgb(75, 75, 75)",opacity:e?.75:0,transition:"opacity 0.2s ease-in-out",pointerEvents:"none"}})}P.propTypes={visible:a.a.bool.isRequired};var O=function(t){function e(){for(var e,n=arguments.length,o=new Array(n),i=0;i<n;i++)o[i]=arguments[i];return(e=t.call.apply(t,[this].concat(o))||this).state={popoverVisible:!1},e.handleWindowResize=function(){return e.hidePopover()},e.handleWindowScroll=function(){return e.hidePopover()},e.handleMenuClick=function(){return e.hidePopover()},e.hidePopover=function(){return e.handlePopoverVisibility(null,!1)},e.handlePopoverVisibility=function(t,n){var o=e.state.popoverVisible;e.setState({popoverVisible:void 0!==n?n:!o})},e}p()(e,t);var n=e.prototype;return n.componentDidMount=function(){window.addEventListener("resize",this.handleWindowResize),window.addEventListener("scroll",this.handleWindowScroll)},n.componentWillUnmount=function(){window.removeEventListener("resize",this.handleWindowResize),window.removeEventListener("scroll",this.handleWindowScroll)},n.render=function(){var t=this.state.popoverVisible,e=this.props,n=e.title,o=e.titleHref,r=function(t){return i.a.createElement(i.a.Fragment,null,i.a.createElement(f.a,{to:"/blog",className:t},"blog"),i.a.createElement(f.a,{to:"/projects",className:t},"projects"))};return i.a.createElement("header",{className:b.a.header},E&&c.a.createPortal(i.a.createElement(P,{visible:t}),E),i.a.createElement(y.a,{underline:!1,className:b.a.brand}),i.a.createElement("span",{className:b.a.separator},"/"),i.a.createElement("h3",{className:b.a.title},o?i.a.createElement("div",{className:b.a.titleLink},n):n),i.a.createElement("span",{className:b.a.desktopMenu},r(b.a.desktopMenuItem)),i.a.createElement("span",{className:b.a.mobileMenu},i.a.createElement(v.a,{isOpen:t,content:i.a.createElement("div",{className:b.a.popoverMenu},r(b.a.popoverMenuItem)),onVisibleChange:this.handlePopoverVisibility,containerStyle:{overflow:"visible"},position:"bottom",windowBorderPadding:0,contentLocation:{top:50,left:0},transitionDuration:.25,onClickOutside:this.hidePopover},i.a.createElement(m.a,{isOpen:t,menuClicked:this.handlePopoverVisibility,width:24,height:20,strokeWidth:1,style:{padding:"1px 0"},containerStyle:{padding:"1px 0"},color:t?"white":"black"}))))},e}(o.PureComponent);O.propTypes={title:a.a.string.isRequired,titleHref:a.a.string},O.defaultProps={titleHref:null};var D=O,R=n(180),C=n.n(R);function T(t){var e=t.pageTitle,n=t.pageDescription,o=t.title,r=t.titleHref,a=t.children;return i.a.createElement(s.a,{pageTitle:e,pageDescription:n},i.a.createElement("div",{className:C.a.container},i.a.createElement(D,{title:o,titleHref:r}),a))}T.propTypes={pageTitle:a.a.string.isRequired,pageDescription:a.a.string.isRequired,title:a.a.string.isRequired,titleHref:a.a.string,children:a.a.node.isRequired},T.defaultProps={titleHref:null};var N=T;e.a=N},194:function(t){t.exports={data:{site:{siteMetadata:{title:"colin tinney"}}}}},195:function(t,e,n){"use strict";var o=n(0),i=n.n(o),r=n(1),a=n.n(r),s=n(201),l=n.n(s),p=n(202),d=n.n(p),c=n(189),u=n(190),f=n(187),h=n(161),v=n.n(h);function g(t){var e=t.theme;return i.a.createElement(d.a,{showUnder:160,style:{bottom:"70px"}},i.a.createElement("div",{className:Object(f.a)(v.a.container,e.button)},"up ↑"))}g.propTypes={theme:c.a.isRequired};var m=Object(u.a)(g),y=n(162),w=n.n(y);function b(t){var e=t.pageTitle,n=t.pageDescription,o=t.children;return i.a.createElement(i.a.Fragment,null,i.a.createElement(l.a,null,i.a.createElement("title",null,e),i.a.createElement("meta",{name:"description",content:n}),i.a.createElement("meta",{property:"og:title",content:e}),i.a.createElement("meta",{property:"og:description",content:n})),i.a.createElement("main",{className:w.a.content,"aria-label":"Content"},o),i.a.createElement(m,null))}b.propTypes={children:a.a.node.isRequired,pageTitle:a.a.string.isRequired,pageDescription:a.a.string.isRequired};var E=b;e.a=E},197:function(t,e,n){"use strict";n(193);var o=n(194),i=n(0),r=n.n(i),a=n(1),s=n.n(a),l=n(56),p=n(187),d=n(188),c=n(164),u=n.n(c);function f(t){var e=t.className,n=t.underline,i=t.large;return r.a.createElement(l.StaticQuery,{query:"677712209",render:function(t){var o;return r.a.createElement("h1",{className:Object(p.a)(u.a.header,(o={},o[u.a.headerUnderline]=n,o[u.a.headerLarge]=i,o),e)},r.a.createElement(d.a,{href:"/",className:u.a.link},t.site.siteMetadata.title))},data:o})}f.propTypes={className:s.a.string,underline:s.a.bool,large:s.a.bool},f.defaultProps={className:"",underline:!0,large:!1};var h=f;e.a=h},217:function(t,e,n){var o;"undefined"!=typeof self&&self,o=function(){return function(t){var e={};function n(o){if(e[o])return e[o].exports;var i=e[o]={i:o,l:!1,exports:{}};return t[o].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:o})},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=2)}([function(t,e){t.exports=n(0)},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.Constants={POPOVER_CONTAINER_CLASS_NAME:"react-tiny-popover-container",DEFAULT_PADDING:6,DEFAULT_WINDOW_PADDING:6,FADE_TRANSITION:.35,DEFAULT_ARROW_COLOR:"black",DEFAULT_POSITIONS:["top","left","right","bottom"],EMPTY_CLIENT_RECT:{top:0,left:0,bottom:0,height:0,right:0,width:0}},e.arrayUnique=function(t){return t.filter(function(t,e,n){return n.indexOf(t)===e})}},function(t,e,n){t.exports=n(3)},function(t,e,n){"use strict";var o,i=this&&this.__extends||(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])},function(t,e){function n(){this.constructor=t}o(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)});Object.defineProperty(e,"__esModule",{value:!0});var r=n(0),a=n(4),s=n(1),l=n(5);e.ArrowContainer=l.ArrowContainer;var p=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.target=null,e.targetRect=null,e.targetPositionIntervalHandler=null,e.popoverDiv=null,e.positionOrder=null,e.willUnmount=!1,e.willMount=!1,e.onResize=function(t){e.renderPopover()},e.onClick=function(t){var n=e.props,o=n.onClickOutside,i=n.isOpen;e.willUnmount||e.willMount||e.popoverDiv.contains(t.target)||e.target.contains(t.target)||!o||!i||o(t)},e}return i(e,t),e.prototype.componentDidMount=function(){var t=this;window.setTimeout(function(){return t.willMount=!1});var e=this.props,n=e.position,o=e.isOpen;this.target=a.findDOMNode(this),this.positionOrder=this.getPositionPriorityOrder(n),this.updatePopover(o)},e.prototype.componentDidUpdate=function(t){var e=t.isOpen,n=t.position,o=t.content,i=this.props,r=i.isOpen,a=i.content,s=i.position;this.positionOrder=this.getPositionPriorityOrder(this.props.position),e===r&&o===a&&n===s||this.updatePopover(r)},e.prototype.componentWillMount=function(){this.willUnmount=!1,this.willMount=!0},e.prototype.componentWillUnmount=function(){this.willUnmount=!0,this.removePopover()},e.prototype.render=function(){return this.props.children},e.prototype.updatePopover=function(t){if(t){if(!this.popoverDiv||!this.popoverDiv.parentNode){var e=this.props.transitionDuration;this.popoverDiv=this.createContainer(),this.popoverDiv.style.opacity="0",this.popoverDiv.style.transition="opacity "+(e||s.Constants.FADE_TRANSITION)+"s",window.document.body.appendChild(this.popoverDiv),window.addEventListener("resize",this.onResize),window.addEventListener("click",this.onClick)}this.renderPopover()}else this.popoverDiv&&this.popoverDiv.parentNode&&this.removePopover()},e.prototype.renderPopover=function(t){var e=this;void 0===t&&(t=0),t>=this.positionOrder.length?this.removePopover():this.renderWithPosition({position:this.positionOrder[t],targetRect:this.target.getBoundingClientRect()},function(n,o){var i,r=e.props,a=r.disableReposition,s=r.contentLocation;if(n&&!a&&"object"!=typeof s)e.renderPopover(t+1);else{var l=e.props,p=l.contentLocation,d=l.align,c=e.getNudgedPopoverPosition(o),u=c.top,f=c.left,h=o.top,v=o.left,g=e.positionOrder[t],m=a?{top:h,left:v}:{top:u,left:f},y=m.top,w=m.left;if(p){var b=e.target.getBoundingClientRect(),E=e.popoverDiv.firstChild.getBoundingClientRect();y=(i="function"==typeof p?p({targetRect:b,popoverRect:E,position:g,align:d,nudgedLeft:f,nudgedTop:u}):p).top,w=i.left,e.popoverDiv.style.left=w.toFixed()+"px",e.popoverDiv.style.top=y.toFixed()+"px"}else{var P=[y+window.pageYOffset,w+window.pageXOffset],O=P[0],D=P[1];e.popoverDiv.style.left=D.toFixed()+"px",e.popoverDiv.style.top=O.toFixed()+"px"}e.popoverDiv.style.width=null,e.popoverDiv.style.height=null,e.renderWithPosition({position:g,nudgedTop:u-o.top,nudgedLeft:f-o.left,targetRect:e.target.getBoundingClientRect(),popoverRect:e.popoverDiv.firstChild.getBoundingClientRect()},function(){e.startTargetPositionListener(10),"1"!==e.popoverDiv.style.opacity&&(e.popoverDiv.style.opacity="1")})}})},e.prototype.startTargetPositionListener=function(t){var e=this;null===this.targetPositionIntervalHandler&&(this.targetPositionIntervalHandler=window.setInterval(function(){var t=e.target.getBoundingClientRect();e.targetPositionHasChanged(e.targetRect,t)&&e.renderPopover(),e.targetRect=t},t))},e.prototype.renderWithPosition=function(t,e){var n,o=this,i=t.position,r=t.nudgedLeft,l=void 0===r?0:r,p=t.nudgedTop,d=void 0===p?0:p,c=t.targetRect,u=void 0===c?s.Constants.EMPTY_CLIENT_RECT:c,f=t.popoverRect,h=void 0===f?s.Constants.EMPTY_CLIENT_RECT:f,v=this.props,g=v.windowBorderPadding,m=v.content,y=v.align;a.unstable_renderSubtreeIntoContainer(this,(n={position:i,nudgedLeft:l,nudgedTop:d,targetRect:u,popoverRect:h,align:y},"function"==typeof m?m(n):m),this.popoverDiv,function(){var t=o.target.getBoundingClientRect(),n=o.popoverDiv.firstChild.getBoundingClientRect(),r=o.getLocationForPosition(i,t,n),a=r.top,s=r.left;e("top"===i&&a<g||"left"===i&&s<g||"right"===i&&s+n.width>window.innerWidth-g||"bottom"===i&&a+n.height>window.innerHeight-g,{width:n.width,height:n.height,top:a,left:s})})},e.prototype.getNudgedPopoverPosition=function(t){var e=t.top,n=t.left,o=t.width,i=t.height,r=this.props.windowBorderPadding;return{top:e=(e=e<r?r:e)+i>window.innerHeight-r?window.innerHeight-r-i:e,left:n=(n=n<r?r:n)+o>window.innerWidth-r?window.innerWidth-r-o:n}},e.prototype.removePopover=function(){var t=this;if(this.popoverDiv){var e=this.props.transitionDuration;this.popoverDiv.style.opacity="0";var n=function(){!t.willUnmount&&t.props.isOpen&&t.popoverDiv.parentNode||(window.clearInterval(t.targetPositionIntervalHandler),window.removeEventListener("resize",t.onResize),window.removeEventListener("click",t.onClick),t.targetPositionIntervalHandler=null,t.popoverDiv.parentNode&&t.popoverDiv.parentNode.removeChild(t.popoverDiv))};this.willUnmount?n():window.setTimeout(n,1e3*(e||s.Constants.FADE_TRANSITION))}},e.prototype.getPositionPriorityOrder=function(t){if(t&&"string"!=typeof t){if(s.Constants.DEFAULT_POSITIONS.every(function(e){return void 0!==t.find(function(t){return t===e})}))return s.arrayUnique(t);var e=s.Constants.DEFAULT_POSITIONS.filter(function(e){return void 0===t.find(function(t){return t===e})});return s.arrayUnique(t.concat(e))}if(t&&"string"==typeof t){e=s.Constants.DEFAULT_POSITIONS.filter(function(e){return e!==t});return s.arrayUnique([t].concat(e))}},e.prototype.createContainer=function(){var t=this.props,e=t.containerStyle,n=t.containerClassName,o=window.document.createElement("div");return o.style.overflow="hidden",e&&Object.keys(e).forEach(function(t){return o.style[t]=e[t]}),o.className=n,o.style.position="absolute",o.style.top="0",o.style.left="0",o},e.prototype.getLocationForPosition=function(t,e,n){var o,i,r=this.props,a=r.padding,s=r.align,l=e.left+e.width/2,p=e.top+e.height/2;switch(t){case"top":o=e.top-n.height-a,i=l-n.width/2,"start"===s&&(i=e.left),"end"===s&&(i=e.right-n.width);break;case"left":o=p-n.height/2,i=e.left-a-n.width,"start"===s&&(o=e.top),"end"===s&&(o=e.bottom-n.height);break;case"bottom":o=e.bottom+a,i=l-n.width/2,"start"===s&&(i=e.left),"end"===s&&(i=e.right-n.width);break;case"right":o=p-n.height/2,i=e.right+a,"start"===s&&(o=e.top),"end"===s&&(o=e.bottom-n.height)}return{top:o,left:i}},e.prototype.targetPositionHasChanged=function(t,e){return null===t||t.left!==e.left||t.top!==e.top||t.width!==e.width||t.height!==e.height},e.defaultProps={padding:s.Constants.DEFAULT_PADDING,windowBorderPadding:s.Constants.DEFAULT_WINDOW_PADDING,position:["top","right","left","bottom"],align:"center",containerClassName:s.Constants.POPOVER_CONTAINER_CLASS_NAME},e}(r.Component);e.default=p},function(t,e){t.exports=n(39)},function(t,e,n){"use strict";var o=this&&this.__assign||Object.assign||function(t){for(var e,n=1,o=arguments.length;n<o;n++)for(var i in e=arguments[n])Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i]);return t};Object.defineProperty(e,"__esModule",{value:!0});var i=n(0),r=n(1);e.ArrowContainer=function(t){var e=t.position,n=t.children,a=t.style,s=t.arrowColor,l=void 0===s?r.Constants.DEFAULT_ARROW_COLOR:s,p=t.arrowSize,d=void 0===p?10:p,c=t.arrowStyle,u=t.popoverRect,f=t.targetRect;return i.createElement("div",{style:o({paddingLeft:"right"===e?d:0,paddingTop:"bottom"===e?d:0,paddingBottom:"top"===e?d:0,paddingRight:"left"===e?d:0},a)},i.createElement("div",{style:o({position:"absolute"},function(){var t=2*d,n=f.top-u.top+f.height/2-t/2,o=f.left-u.left+f.width/2-t/2;switch(o=(o=o<0?0:o)+t>u.width?u.width-t:o,n=(n=n<0?0:n)+t>u.height?u.height-t:n,e){case"right":return{borderTop:d+"px solid transparent",borderBottom:d+"px solid transparent",borderRight:d+"px solid "+l,left:0,top:n};case"left":return{borderTop:d+"px solid transparent",borderBottom:d+"px solid transparent",borderLeft:d+"px solid "+l,right:0,top:n};case"bottom":return{borderLeft:d+"px solid transparent",borderRight:d+"px solid transparent",borderBottom:d+"px solid "+l,top:0,left:o};case"top":default:return{borderLeft:d+"px solid transparent",borderRight:d+"px solid transparent",borderTop:d+"px solid "+l,bottom:0,left:o}}}(),c)}),n)}}])},t.exports=o()},218:function(t,e,n){"use strict";e.__esModule=!0,e.default=a;var o=r(n(0)),i=r(n(1));function r(t){return t&&t.__esModule?t:{default:t}}function a(t){var e=(t.width||36)+"px",n=(t.height||30)+"px",i=parseInt(n.replace("px",""))/2+"px",r=t.isOpen||!1,a=t.strokeWidth||2,s="-"+a/2+"px",l=t.animationDuration||"0.4",p=function(t,e,n){return"translate3d(0,"+(t?i:e)+",0) rotate("+(t?n+"deg":"0")+")"},d={container:{width:e,height:n,position:"relative",transform:"rotate("+(t.rotate||0)+"deg)"},lineBase:{display:"block",height:a+"px",width:"100%",background:t.color||"#000",transitionTimingFunction:"ease",transitionDuration:l+"s",borderRadius:(t.borderRadius||0)+"px",transformOrigin:"center",position:"absolute"},firstLine:{transform:p(r,0,45),marginTop:s},secondLine:{transitionTimingFunction:"ease-out",transitionDuration:l/4+"s",opacity:r?"0":"1",top:i,marginTop:s},thirdLine:{transform:p(r,n,-45),marginTop:s}};return o.default.createElement("div",{style:d.container,onClick:t.menuClicked},o.default.createElement("span",{style:Object.assign({},d.lineBase,d.firstLine)}),o.default.createElement("span",{style:Object.assign({},d.lineBase,d.secondLine)}),o.default.createElement("span",{style:Object.assign({},d.lineBase,d.thirdLine)}))}a.propTypes={isOpen:i.default.bool.isRequired,menuClicked:i.default.func.isRequired,width:i.default.number,height:i.default.number,strokeWidth:i.default.number,rotate:i.default.number,color:i.default.string,borderRadius:i.default.number,animationDuration:i.default.number}}}]);
//# sourceMappingURL=2-5b30a23b3a7089de9dcb.js.map