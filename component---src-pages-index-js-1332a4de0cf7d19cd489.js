(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{RXBc:function(n,e,t){"use strict";t.r(e),t.d(e,"default",(function(){return K}));var a=t("q1tI"),r=t.n(a),i=t("Kvkj"),l=t("MUpH"),c=t("Wbzz"),o=t("vOnD"),m=t("8SHQ");function d(){var n=Object(l.a)(["\n  width: 50%;\n  height: 100%;\n  margin: 0 2em;\n\n  display: flex;\n  flex-direction: column;\n\n  color: #e0e0e0;\n\n  & h1 {\n    line-height: 2.3em;\n    font-size: 2.8em;\n  }\n  & p {\n    font-size: 1.2em;\n    line-height: 1.6em;\n    letter-spacing: .1em;\n  }\n  @media screen and (max-width: 800px) {\n    width: 80%;\n  }\n"]);return d=function(){return n},n}function u(){var n=Object(l.a)(["\n  width: 100%;\n  padding: 2em 0;\n\n  font-size: 16px;\n  line-height: 2em;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  & img {\n    width: 30%;\n  }\n\n  @media screen and (max-width: 800px) {\n    font-size: 12px;\n\n    flex-direction: column-reverse;\n    \n    & img {\n      width: 50%;\n    }\n  }\n  @media screen and (max-width: 450px) {\n    font-size: 10px;\n  }\n"]);return u=function(){return n},n}var s=o.b.div(u()),f=o.b.div(d());function h(){var n=Object(c.c)("211825809");return r.a.createElement(i.f,{style:{background:"linear-gradient(90deg,"+m.a.color.primary.border+","+m.a.color.primary.ft+")"}},r.a.createElement(i.a,null,r.a.createElement(i.e,{color:"#eee",items:n.site.siteMetadata.navItems}),r.a.createElement("div",{style:{width:"100%",display:"flex",justifyContent:"center"}},r.a.createElement("div",{style:{width:"20rem",color:"#fff"}},r.a.createElement(i.c,{items:n.site.siteMetadata.navItems}))),r.a.createElement(s,null,r.a.createElement(f,null,r.a.createElement("h1",null,n.site.siteMetadata.title),r.a.createElement("p",null,n.site.siteMetadata.description)),r.a.createElement("img",{src:n.site.siteMetadata.jumbotron,alt:"coding"}))))}var p=t("KQm4");function x(){var n=Object(l.a)(["\n  display: flex;\n  flex-wrap: wrap;\n\n  & span {\n    margin: .2em 0;\n    padding: .1em .3em;\n    background-color: #bbb;\n    border-radius: 6%;\n    color: #fff;\n    white-space: nowrap;\n  }\n  & span + span {\n    margin-left: 1em;\n  }\n\n"]);return x=function(){return n},n}function g(){var n=Object(l.a)(["\n  margin: 1.6em;\n  padding: .5em 1em;\n  border-radius: 6px;\n  background-color: #f4f4f4;\n  box-shadow:\n    -3px -3px 7px rgba(255, 255, 255, .99),\n     3px  3px 5px rgba(94, 104, 121, .288);\n\n  display: flex;\n  justify-content: space-between;\n  flex-direction: row-reverse;\n  align-items: center;\n  \n  @media screen and (max-width: 500px) {\n    flex-direction: column;\n    align-items: stretch;\n  }\n\n"]);return g=function(){return n},n}function b(){var n=Object(l.a)(["\n  & h2, h3, h4 {\n    color: #333;\n  }\n  & h1 {\n    color: #000;\n    font-size: 1.28em;\n  }\n  & h2 {\n    font-size: 1em;\n    font-weight: normal;\n  }\n  & h4 {\n    font-size: .9em;\n  }\n\n  @media screen and (max-width: 500px) {\n    width: 100%;\n  }\n"]);return b=function(){return n},n}function v(){var n=Object(l.a)(["\n  max-height: 9em;\n  max-width: 9em;\n  @media screen and (max-width: 500px) {\n    max-height: none;\n    max-width: none;\n    width: 60%;\n    margin: 0 auto;\n  }\n\n  & img {\n    display: inline-block;\n    padding: .2em;\n    height: 100%;\n    width: 100%;\n  }\n\n"]);return v=function(){return n},n}function w(){var n=Object(l.a)(["\n  max-width: ",";\n  margin: 0 auto;\n\n  font-size: 16px;\n  line-height: 2em;\n\n  @media screen and (max-width: 500px) {\n    font-size: 10px;\n  }\n"]);return w=function(){return n},n}var E=o.b.div(w(),m.a.size.sectionContainerWidthMax),y=o.b.div(v()),j=o.b.div(b()),z=o.b.div(g()),k=o.b.div(x());function O(){var n,e=Object(c.c)("1948240401"),t=null==e||null===(n=e.allMarkdownRemark)||void 0===n?void 0:n.nodes.filter((function(n){var e;return!(null===(e=n.frontmatter)||void 0===e||!e.id)}));return r.a.createElement(i.f,null,r.a.createElement(E,null,t.map((function(n,e){var t=n.frontmatter||{},a=t.id,i=t.cover,l=t.title,o=t.subtitle,m=t.author,d=t.subject,u=t.category,s=t.tags,f=t.keywords,h=t.created_when,x=s?s.split(";").filter((function(n){return!!n})):[],g=f?f.split(";").filter((function(n){return!!n})):[],b=[].concat(Object(p.a)(x),Object(p.a)(g));return r.a.createElement(c.a,{key:e,to:"/blog/"+a,style:{textDecoration:"none"}},r.a.createElement(z,null,i?r.a.createElement(y,null,r.a.createElement("img",{src:i,alt:"cover"})):r.a.createElement("span",null),r.a.createElement(j,null,r.a.createElement("h1",null,d?"【"+u+"】"+l:l),r.a.createElement("h2",null,o),r.a.createElement(k,null,0===b.length?null:b.map((function(n,e){return r.a.createElement("span",{key:e},n)}))),r.a.createElement("h4",null,h+"  "+m))))}))))}var M=t("yfK2");function I(n){var e=n.context;return r.a.createElement(r.a.Fragment,null,r.a.createElement(i.b,{context:e}),r.a.createElement(i.d,null),r.a.createElement(i.g,null),r.a.createElement(h,null),r.a.createElement(O,null),r.a.createElement(M.a,null))}t("VxdY");function K(){return r.a.createElement(I,{context:{head:"首页"}})}},VxdY:function(n,e,t){}}]);
//# sourceMappingURL=component---src-pages-index-js-1332a4de0cf7d19cd489.js.map