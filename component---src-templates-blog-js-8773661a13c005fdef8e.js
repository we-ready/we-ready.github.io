"use strict";(self.webpackChunkBlog1=self.webpackChunkBlog1||[]).push([[744],{8770:function(e,t,l){l.r(t),l.d(t,{default:function(){return v}});var a=l(2982),n=l(9197),r=l(2772),o=l(9953),c=l(7294),m=l(7367),i=l(9),s=l(6752),d=m.C6.HEIGHT.HEADER_BAR_HEIGHT,u=m.C6.HEIGHT.FOOTER_BAR_HEIGHT,g=m.C6.WIDTH.PC_MODE_THRESHOLD,E=(0,i.default)(n.W2).withConfig({displayName:"blog__BodyContainer",componentId:"sc-1pczva4-0"})(["display:flex;align-items:flex-start;gap:1rem;position:relative;@media screen and (max-width:","){flex-direction:column;align-items:stretch;}"],g),p=(0,i.default)(n.W2).withConfig({displayName:"blog__Card",componentId:"sc-1pczva4-1"})(["background-color:#fff;border-radius:8px;padding:1rem;"]),h=(0,i.default)(n.W2).withConfig({displayName:"blog__BlogHeaderArea",componentId:"sc-1pczva4-2"})(["text-align:center;padding:0 0 1rem;border-bottom:1px solid ",";& h1{font-size:2.5rem;line-height:5rem;}"],"rgba("+m.C6.color.black.RGB+", 0.3)"),f=i.default.span.withConfig({displayName:"blog__TagContainer",componentId:"sc-1pczva4-3"})(["margin-top:.6em;display:flex;gap:.5rem;font-size:.8rem;"]),y=function(e){var t=e.matter;e.tags;return c.createElement(h,{margin:"1rem 0"},c.createElement("h1",null,t.title),c.createElement("p",{className:"ft-0.9",style:{color:"rgba("+m.C6.color.black.RGB+", 0.6)"}},c.createElement("span",null,"作者："),c.createElement(n.Cd,{to:"/?authors="+t.authors},c.createElement("span",{style:{color:m.C6.color.secondary.HEX}},t.authors)),"    ",c.createElement("span",null,"时间："),c.createElement("span",{style:{color:m.C6.color.secondary.HEX}},t.updated_when),"    ",c.createElement("span",null,"分类："),c.createElement(n.Cd,{to:"/?category="+t.category},c.createElement("span",{style:{color:m.C6.color.secondary.HEX}},t.category))))},C=function(e){var t=e.matter;return c.createElement("table",null,c.createElement("tr",null,c.createElement("td",null,c.createElement("span",{className:"ft-09"},"主题："),c.createElement(n.Cd,{to:"/?subject="+t.subject},c.createElement("span",{className:"ft-08"},""+t.subject)))))},b=function(e){var t=e.queryKey,l=e.tags;return c.createElement(f,null,l.map((function(e,l){return c.createElement(n.Cd,{to:"/?"+t+"="+e},c.createElement(n.Vp,{key:l,variant:"purple"},e))})))};function v(e){var t,l,i,g,h=e.pageContext,f=(0,s.iP)().isPCMode,v=(null==h?void 0:h.html)||"",H=(null==h?void 0:h.frontmatter)||{},w=(null==H||null===(t=H.tags)||void 0===t?void 0:t.length)>0?null==H||null===(l=H.tags)||void 0===l?void 0:l.split(";"):null,_=(null==H||null===(i=H.keywords)||void 0===i?void 0:i.length)>0?null==H||null===(g=H.keywords)||void 0===g?void 0:g.split(";"):null,k=[],x=[];null!=w&&w.length&&k.push.apply(k,(0,a.Z)(w)),null!=_&&_.length&&x.push.apply(x,(0,a.Z)(_));var N=Array.from(new Set(k)),T=Array.from(new Set(x));return c.createElement(c.Fragment,null,c.createElement(o.Z,null),c.createElement(r.HE,{context:{headTitle:H.title}}),c.createElement(n.Segment,{height:d,background:m.C6.color.primary.HEX,color:m.C6.color.white.HEX,className:"relative-position z-level-800"},c.createElement(r.h4,null)),c.createElement(n.Segment,{background:"rgba("+m.C6.color.black.RGB+", 0.1)",padding:f?"2rem":".5rem",style:{minHeight:"100vh"}},c.createElement(E,null,c.createElement(p,{className:"debugx",style:{flex:1}},c.createElement(y,{matter:H}),c.createElement(n.Markdown2HtmlRender,{__html:v})),c.createElement("div",{style:{flex:"none",minWidth:"10rem"}},c.createElement(p,null,c.createElement(C,{matter:H})),!!N.length&&c.createElement(p,{margin:"1rem 0 0 0"},c.createElement("p",{className:"ft-09"},"Tags"),c.createElement(b,{queryKey:"tags",tags:N})),!!T.length&&c.createElement(p,{margin:"1rem 0 0 0"},c.createElement("p",{className:"ft-09"},"Keywords"),c.createElement(b,{queryKey:"keywords",tags:T})),c.createElement(p,{margin:"1rem 0 0 0"},c.createElement("a",{href:"https://www.gitee.com/"+H.title,target:"_blank"},"Edit"))))),c.createElement(n.Segment,{background:m.C6.color.black.HEX,color:m.C6.color.white.HEX,padding:"1.2rem 0",style:{minHeight:u,gap:"1em"},className:"text-align-center"},c.createElement(r.$_,null)))}}}]);
//# sourceMappingURL=component---src-templates-blog-js-8773661a13c005fdef8e.js.map