(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{159:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),i=t(1),l=t.n(i),s=t(197),c=t(199),o=t(202),u=t(55),d=t(200),m=t(206),p=t(201),f=t(191),h=t(192),g=t(189),b=t(190),v=t(171),y=t.n(v),E={primary:y.a.primary,secondary:y.a.secondary};function q(e){var a=e.theme,t=e.href,n=e.external,i=e.title,l=e.text,s=e.ariaLabel,c=e.color,o=e.className;return r.a.createElement(b.a,{href:t,external:n,title:i,ariaLabel:s,color:c,className:Object(g.a)(y.a.anchorButton,E[c],a.button,o)},l)}q.propTypes={theme:f.a.isRequired,href:l.a.string.isRequired,external:l.a.bool,title:l.a.string,text:l.a.string.isRequired,ariaLabel:l.a.string,color:l.a.string,className:l.a.string},q.defaultProps={external:!1,title:null,ariaLabel:null,color:"primary",className:""};var x=Object(h.a)(q),R=t(172),N=t.n(R);function k(e){var a=e.theme,t=e.data,n=(void 0===t?{}:t).site,i=(n=void 0===n?{}:n).siteMetadata,l=(i=void 0===i?{}:i).social,s=void 0===l?{}:l,c=i.contact,o=void 0===c?{}:c;return r.a.createElement("div",{className:N.a.container},r.a.createElement("div",{className:N.a.container__social},r.a.createElement(b.a,{title:s.github+" on GitHub",href:"https://github.com/"+s.github,external:!0,ariaLabel:"GitHub profile"},r.a.createElement(d.a,{icon:m.b,className:N.a.icon,size:"lg"})),r.a.createElement(b.a,{title:s.linkedin+" on LinkedIn",href:"https://linkedin.com/in/"+s.linkedin,external:!0,"aria-label":"LinkedIn profile"},r.a.createElement(d.a,{icon:m.c,className:N.a.icon,size:"lg"})),r.a.createElement(b.a,{title:s.fiveHundredPx+" on 500px",href:"https://500px.com/"+s.fiveHundredPx,external:!0,"aria-label":"500px profile"},r.a.createElement(d.a,{icon:m.a,className:N.a.icon,size:"lg"}))),r.a.createElement("div",{className:N.a.container__email},r.a.createElement(b.a,{href:"mailto:"+o.email,external:!0},r.a.createElement(d.a,{icon:p.b,className:N.a.icon+" "+N.a.email__icon}),o.displayedEmail)),r.a.createElement(x,{href:o.resumeUrl,external:!0,text:"resume",color:"secondary",className:Object(g.a)(N.a.container__resume,a.button)}))}k.propTypes={theme:f.a.isRequired,data:l.a.shape({site:l.a.shape({siteMetadata:l.a.shape({contact:l.a.shape({email:l.a.string.isRequired,displayedEmail:l.a.string.isRequired,resumeUrl:l.a.string.isRequired}).isRequired,social:l.a.shape({github:l.a.string.isRequired,linkedin:l.a.string.isRequired,fiveHundredPx:l.a.string.isRequired}).isRequired}).isRequired}).isRequired}).isRequired};var j=Object(h.a)(k);var O=function(){return r.a.createElement(u.StaticQuery,{query:"2415355733",render:function(e){return r.a.createElement(j,{data:e})},data:o})},T=(t(194),t(173)),L=t.n(T);function w(e){var a=e.links;return r.a.createElement("div",{className:""+L.a.container},a.map(function(e){var a=e.to,t=e.name;return r.a.createElement(x,{key:a,href:a,color:"primary",text:t})}))}w.propTypes={links:l.a.arrayOf(l.a.shape({to:l.a.string.isRequired,name:l.a.string.isRequired})).isRequired};var _=w,P=t(174),M=t.n(P);function H(e){var a=e.data,t=(void 0===a?{}:a).site,n=(t=void 0===t?{}:t).siteMetadata,i=(n=void 0===n?{}:n).title;return r.a.createElement(s.a,{pageTitle:i,pageDescription:"A personal website"},r.a.createElement("div",{className:M.a.container},r.a.createElement("header",null,r.a.createElement(c.a,null),r.a.createElement(_,{links:[{to:"/about",name:"about"},{to:"/blog",name:"blog"},{to:"/projects",name:"projects"}]})),r.a.createElement("main",{className:M.a.contactCard},r.a.createElement(O,null))))}t.d(a,"default",function(){return H}),H.propTypes={data:l.a.shape({site:l.a.shape({siteMetadata:l.a.shape({title:l.a.string.isRequired}).isRequired}).isRequired}).isRequired}},189:function(e,a,t){"use strict";t.d(a,"a",function(){return i});t(76),t(56),t(205);var n=function(e){return"string"==typeof e},r=function(e){return Object.keys(e).reduce(function(a,t){return("boolean"==typeof(n=e[t])||n instanceof Boolean)&&!e[t]?a:a+" "+t;var n},"")};function i(){for(var e=arguments.length,a=new Array(e),t=0;t<e;t++)a[t]=arguments[t];return a.filter(function(e){return null!=e}).map(function(e){return n(e)?e:r(e)}).join(" ")}},190:function(e,a,t){"use strict";t(26);var n=t(0),r=t.n(n),i=t(1),l=t.n(i),s=t(7),c=t.n(s),o=t(189),u=t(155),d=t.n(u),m=t(163),p=t.n(m),f={primary:d.a.primary,secondary:d.a.secondary};function h(e){var a=e.href,t=e.external,n=e.title,i=e.ariaLabel,l=e.color,s=e.className,u=e.children,d={title:n,className:Object(o.a)(p.a.root,f[l],s),"aria-label":i};return t?r.a.createElement("a",Object.assign({href:a},d),u):r.a.createElement(c.a,Object.assign({to:a},d),u)}h.propTypes={href:l.a.string.isRequired,external:l.a.bool,title:l.a.string,ariaLabel:l.a.string,color:l.a.string,className:l.a.string,children:l.a.node},h.defaultProps={external:!1,title:null,ariaLabel:null,color:"primary",className:"",children:null};a.a=h},191:function(e,a,t){"use strict";var n=t(1),r=t.n(n);a.a=r.a.shape({})},192:function(e,a,t){"use strict";t.d(a,"a",function(){return s});t(26);var n=t(0),r=t.n(n),i=t(155),l=t.n(i);function s(e){return function(a){return r.a.createElement(e,Object.assign({theme:l.a},a))}}},196:function(e){e.exports={data:{site:{siteMetadata:{title:"colin tinney"}}}}},197:function(e,a,t){"use strict";var n=t(0),r=t.n(n),i=t(1),l=t.n(i),s=t(203),c=t.n(s),o=t(204),u=t.n(o),d=t(191),m=t(192),p=t(189),f=t(161),h=t.n(f);function g(e){var a=e.theme;return r.a.createElement(u.a,{showUnder:160,style:{bottom:"70px"}},r.a.createElement("div",{className:Object(p.a)(h.a.container,a.button)},"up ↑"))}g.propTypes={theme:d.a.isRequired};var b=Object(m.a)(g),v=t(162),y=t.n(v);function E(e){var a=e.pageTitle,t=e.pageDescription,n=e.children;return r.a.createElement(r.a.Fragment,null,r.a.createElement(c.a,null,r.a.createElement("title",null,a),r.a.createElement("meta",{name:"description",content:t}),r.a.createElement("meta",{property:"og:title",content:a}),r.a.createElement("meta",{property:"og:description",content:t})),r.a.createElement("main",{className:y.a.content,"aria-label":"Content"},n),r.a.createElement(b,null))}E.propTypes={children:l.a.node.isRequired,pageTitle:l.a.string.isRequired,pageDescription:l.a.string.isRequired};var q=E;a.a=q},199:function(e,a,t){"use strict";t(195);var n=t(196),r=t(0),i=t.n(r),l=t(1),s=t.n(l),c=t(55),o=t(189),u=t(190),d=t(164),m=t.n(d);function p(e){var a=e.underline;return i.a.createElement(c.StaticQuery,{query:"677712209",render:function(e){var t;return i.a.createElement("h1",{className:Object(o.a)(m.a.header,(t={},t[m.a.headerUnderline]=a,t))},i.a.createElement(u.a,{href:"/",className:m.a.link},e.site.siteMetadata.title))},data:n})}p.propTypes={underline:s.a.bool},p.defaultProps={underline:!0};var f=p;a.a=f},202:function(e){e.exports={data:{site:{siteMetadata:{contact:{name:"Colin Tinney",email:"colintinney@gmail.com",displayedEmail:"colintinney [at] gmail.com",resumeUrl:"https://drive.google.com/open?id=1pBYBPWx7LyOyUcabGnse4_ItVXkwoufG"},social:{github:"cdtinney",linkedin:"cdtinney",fiveHundredPx:"colintinney"}}}}}}}]);
//# sourceMappingURL=component---src-pages-home-home-js-7fdc3ac635bfa76316ee.js.map