(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{180:function(e,a,t){"use strict";t.r(a),t.d(a,"default",function(){return u}),t.d(a,"pageQuery",function(){return p});var n=t(0),r=t.n(n),i=t(1),l=t.n(i),c=t(201),s=t(181),o=t.n(s);function u(e){var a=e.data.markdownRemark,t=a.frontmatter,n=t.title,i=t.date,l=a.excerpt,s="blog - "+n;return r.a.createElement(c.a,{pageTitle:s,pageDescription:l},r.a.createElement("article",null,r.a.createElement("header",null,r.a.createElement("h1",{className:o.a.title},n),r.a.createElement("p",{className:o.a.date},i)),r.a.createElement("div",{className:o.a.content,dangerouslySetInnerHTML:{__html:a.html}})))}u.propTypes={data:l.a.shape({markdownRemark:l.a.shape({frontmatter:l.a.shape({title:l.a.string.isRequired}).isRequired,html:l.a.string.isRequired,excerpt:l.a.string.isRequired}).isRequired}).isRequired};var p="1924889696"},188:function(e,a,t){"use strict";t.d(a,"a",function(){return i});t(75),t(56),t(199);var n=function(e){return"string"==typeof e},r=function(e){return Object.keys(e).reduce(function(a,t){return("boolean"==typeof(n=e[t])||n instanceof Boolean)&&!e[t]?a:a+" "+t;var n},"")};function i(){for(var e=arguments.length,a=new Array(e),t=0;t<e;t++)a[t]=arguments[t];return a.filter(function(e){return null!=e}).map(function(e){return n(e)?e:r(e)}).join(" ")}},189:function(e,a,t){"use strict";t(26);var n=t(0),r=t.n(n),i=t(1),l=t.n(i),c=t(7),s=t.n(c),o=t(188),u=t(155),p=t.n(u),m=t(158),d=t.n(m),f={primary:p.a.primary,secondary:p.a.secondary};function g(e){var a=e.href,t=e.external,n=e.title,i=e.ariaLabel,l=e.color,c=e.className,u=e.children,p={title:n,className:Object(o.a)(d.a.root,f[l],c),"aria-label":i};return t?r.a.createElement("a",Object.assign({href:a},p),u):r.a.createElement(s.a,Object.assign({to:a},p),u)}g.propTypes={href:l.a.string.isRequired,external:l.a.bool,title:l.a.string,ariaLabel:l.a.string,color:l.a.string,className:l.a.string,children:l.a.node},g.defaultProps={external:!1,title:null,ariaLabel:null,color:"primary",className:"",children:null};a.a=g},190:function(e,a,t){"use strict";var n=t(1),r=t.n(n);a.a=r.a.shape({})},191:function(e,a,t){"use strict";t.d(a,"a",function(){return c});t(26);var n=t(0),r=t.n(n),i=t(155),l=t.n(i);function c(e){return function(a){return r.a.createElement(e,Object.assign({theme:l.a},a))}}},192:function(e){e.exports={data:{site:{siteMetadata:{title:"colin tinney"}}}}},193:function(e,a,t){"use strict";var n=t(0),r=t.n(n),i=t(1),l=t.n(i),c=t(197),s=t.n(c),o=t(198),u=t.n(o),p=t(190),m=t(191),d=t(188),f=t(156),g=t.n(f);function h(e){var a=e.theme;return r.a.createElement(u.a,{showUnder:160},r.a.createElement("div",{className:Object(d.a)(g.a.container,a.button)},"up ↑"))}h.propTypes={theme:p.a.isRequired};var E=Object(m.a)(h),v=t(157),b=t.n(v);function y(e){var a=e.pageTitle,t=e.pageDescription,n=e.children;return r.a.createElement(r.a.Fragment,null,r.a.createElement(s.a,null,r.a.createElement("title",null,a),r.a.createElement("meta",{name:"description",content:t}),r.a.createElement("meta",{property:"og:title",content:a}),r.a.createElement("meta",{property:"og:description",content:t})),r.a.createElement("main",{className:b.a.content,"aria-label":"Content"},n),r.a.createElement(E,null))}y.propTypes={children:l.a.node.isRequired,pageTitle:l.a.string.isRequired,pageDescription:l.a.string.isRequired};var R=y;a.a=R},194:function(e,a,t){"use strict";t(196);var n=t(192),r=t(0),i=t.n(r),l=t(1),c=t.n(l),s=t(55),o=t(188),u=t(189),p=t(159),m=t.n(p);function d(e){var a=e.underline;return i.a.createElement(s.StaticQuery,{query:"677712209",render:function(e){var t;return i.a.createElement("h1",{className:Object(o.a)(m.a.header,(t={},t[m.a.headerUnderline]=a,t))},i.a.createElement(u.a,{href:"/",className:m.a.link},e.site.siteMetadata.title))},data:n})}d.propTypes={underline:c.a.bool},d.defaultProps={underline:!0};var f=d;a.a=f},195:function(e,a,t){"use strict";var n=t(0),r=t.n(n),i=t(1),l=t.n(i),c=t(193),s=t(194),o=t(189),u=t(160),p=t.n(u);function m(e){var a=e.pageTitle,t=e.pageDescription,n=e.title,i=e.titleHref,l=e.children;return r.a.createElement(c.a,{pageTitle:a,pageDescription:t},r.a.createElement("div",{className:p.a.container},r.a.createElement("header",{className:p.a.header},r.a.createElement("span",{className:p.a.brandContainer},r.a.createElement(s.a,{underline:!1})),r.a.createElement("span",{className:p.a.titleContainer},r.a.createElement("span",{className:p.a.separator},"/"),r.a.createElement("h3",{className:p.a.title},i?r.a.createElement(o.a,{className:p.a.titleLink,href:i},n):n))),l))}m.propTypes={pageTitle:l.a.string.isRequired,pageDescription:l.a.string.isRequired,title:l.a.string.isRequired,titleHref:l.a.string,children:l.a.node.isRequired},m.defaultProps={titleHref:null};var d=m;a.a=d},201:function(e,a,t){"use strict";var n=t(0),r=t.n(n),i=t(1),l=t.n(i),c=t(195),s=t(166),o=t.n(s);function u(e){var a=e.pageTitle,t=e.pageDescription,n=e.children;return r.a.createElement(c.a,{pageTitle:a,pageDescription:t,title:"blog",titleHref:"/blog"},r.a.createElement("main",{className:o.a.container},n))}u.propTypes={children:l.a.node.isRequired,pageTitle:l.a.string.isRequired,pageDescription:l.a.string.isRequired};var p=u;a.a=p}}]);
//# sourceMappingURL=component---src-templates-blog-post-blog-post-js-50d94d6296ac79ac8a11.js.map