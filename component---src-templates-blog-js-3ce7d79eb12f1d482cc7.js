"use strict";(self.webpackChunkBlog1=self.webpackChunkBlog1||[]).push([[744],{8770:function(e,t,l){l.r(t),l.d(t,{default:function(){return b}});var n=l(2982),a=l(9197),r=l(2772),o=l(9953),c=l(7294),m=l(7367),i=l(9),s=l(6752),d=m.C6.HEIGHT.HEADER_BAR_HEIGHT,u=m.C6.HEIGHT.FOOTER_BAR_HEIGHT,g=m.C6.WIDTH.PC_MODE_THRESHOLD,E=(0,i.default)(a.W2).withConfig({displayName:"blog__BodyContainer",componentId:"sc-1pczva4-0"})(["display:flex;align-items:flex-start;gap:1rem;position:relative;@media screen and (max-width:","){flex-direction:column;align-items:stretch;}"],g),p=(0,i.default)(a.W2).withConfig({displayName:"blog__Card",componentId:"sc-1pczva4-1"})(["background-color:#fff;border-radius:8px;padding:1rem;"]),y=(0,i.default)(a.W2).withConfig({displayName:"blog__BlogHeaderArea",componentId:"sc-1pczva4-2"})(["text-align:center;padding:0 0 1rem;border-bottom:1px solid ",";& h1{font-size:2.5rem;line-height:5rem;}"],"rgba("+m.C6.color.black.RGB+", 0.3)"),f=i.default.span.withConfig({displayName:"blog__TagContainer",componentId:"sc-1pczva4-3"})(["margin-top:.6em;display:flex;gap:.5rem;font-size:.8rem;"]),h=function(e){var t=e.matter;e.tags;return c.createElement(y,{margin:"1rem 0"},c.createElement("h1",null,t.title),c.createElement("p",{className:"ft-0.9",style:{color:"rgba("+m.C6.color.black.RGB+", 0.6)"}},c.createElement("span",null,"作者："),c.createElement(a.Cd,{to:"/?author="+t.author},c.createElement("span",{style:{color:m.C6.color.secondary.HEX}},t.author)),"    ",c.createElement("span",null,"时间："),c.createElement("span",{style:{color:m.C6.color.secondary.HEX}},t.updated_when),"    ",c.createElement("span",null,"分类："),c.createElement(a.Cd,{to:"/?category="+t.category},c.createElement("span",{style:{color:m.C6.color.secondary.HEX}},t.category))))},C=function(e){var t=e.matter;return c.createElement("table",null,c.createElement("tr",null,c.createElement("td",null,c.createElement("span",{className:"ft-09"},"主题："),c.createElement(a.Cd,{to:"/?subject="+t.subject},c.createElement("span",{className:"ft-08"},""+t.subject)))))},v=function(e){var t=e.queryKey,l=e.tags;return c.createElement(f,null,l.map((function(e,l){return c.createElement(a.Cd,{to:"/?"+t+"="+e},c.createElement(a.Vp,{key:l,variant:"purple"},e))})))};function b(e){var t,l,i,g,y=e.pageContext,f=(0,s.iP)().isPCMode,b=(null==y?void 0:y.html)||"",H=(null==y?void 0:y.frontmatter)||{},_=(null==H||null===(t=H.tags)||void 0===t?void 0:t.length)>0?null==H||null===(l=H.tags)||void 0===l?void 0:l.split(";"):null,k=(null==H||null===(i=H.keywords)||void 0===i?void 0:i.length)>0?null==H||null===(g=H.keywords)||void 0===g?void 0:g.split(";"):null,w=[],x=[];null!=_&&_.length&&w.push.apply(w,(0,n.Z)(_)),null!=k&&k.length&&x.push.apply(x,(0,n.Z)(k));var N=Array.from(new Set(w)),T=Array.from(new Set(x));return c.createElement(c.Fragment,null,c.createElement(o.Z,null),c.createElement(r.HE,{context:{headTitle:H.title}}),c.createElement(a.Segment,{height:d,background:m.C6.color.primary.HEX,color:m.C6.color.white.HEX,className:"relative-position z-level-800"},c.createElement(r.h4,null)),c.createElement(a.Segment,{background:"rgba("+m.C6.color.black.RGB+", 0.1)",padding:f?"2rem":".5rem",style:{minHeight:"100vh"}},c.createElement(E,null,c.createElement(p,{className:"debugx",style:{flex:1}},c.createElement(h,{matter:H}),c.createElement(a.MarkdownHTMLRender,{dangerouslySetInnerHTML:{__html:b}})),c.createElement("div",{style:{flex:"none",minWidth:"10rem"}},c.createElement(p,null,c.createElement(C,{matter:H})),!!N.length&&c.createElement(p,{margin:"1rem 0 0 0"},c.createElement("p",{className:"ft-09"},"Tags"),c.createElement(v,{queryKey:"tags",tags:N})),!!T.length&&c.createElement(p,{margin:"1rem 0 0 0"},c.createElement("p",{className:"ft-09"},"Keywords"),c.createElement(v,{queryKey:"keywords",tags:T}))))),c.createElement(a.Segment,{background:m.C6.color.black.HEX,color:m.C6.color.white.HEX,padding:"1.2rem 0",style:{minHeight:u,gap:"1em"},className:"text-align-center"},c.createElement(r.$_,null)))}}}]);
//# sourceMappingURL=component---src-templates-blog-js-3ce7d79eb12f1d482cc7.js.map