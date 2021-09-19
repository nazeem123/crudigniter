"use strict";(self.webpackChunkcrudigniter=self.webpackChunkcrudigniter||[]).push([[610],{6165:function(e,t,a){a.d(t,{Z:function(){return E}});var r=a(3366),n=a(7294),l=a(6010),i=a(6698),s=a(6742),c="sidebar_2ahu",o="sidebarItemTitle_2hhb",m="sidebarItemList_2xAf",u="sidebarItem_2UVv",d="sidebarItemLink_1RT6",g="sidebarItemLinkActive_12pM",h=a(4973);function f(e){var t=e.sidebar;return 0===t.items.length?null:n.createElement("nav",{className:(0,l.Z)(c,"thin-scrollbar"),"aria-label":(0,h.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},n.createElement("div",{className:(0,l.Z)(o,"margin-bottom--md")},t.title),n.createElement("ul",{className:m},t.items.map((function(e){return n.createElement("li",{key:e.permalink,className:u},n.createElement(s.Z,{isNavLink:!0,to:e.permalink,className:d,activeClassName:g},e.title))}))))}var p=a(571),v=["sidebar","toc","children"];var E=function(e){var t=e.sidebar,a=e.toc,s=e.children,c=(0,r.Z)(e,v),o=t&&t.items.length>0;return n.createElement(i.Z,c,n.createElement("div",{className:"container margin-vert--lg"},n.createElement("div",{className:"row"},o&&n.createElement("aside",{className:"col col--3"},n.createElement(f,{sidebar:t})),n.createElement("main",{className:(0,l.Z)("col",{"col--7":o,"col--9 col--offset-1":!o}),itemScope:!0,itemType:"http://schema.org/Blog"},s),a&&n.createElement("div",{className:"col col--2"},n.createElement(p.Z,{toc:a})))))}},4884:function(e,t,a){a.d(t,{Z:function(){return N}});var r=a(7294),n=a(6010),l=a(3905),i=a(4973),s=a(6742),c=a(4996),o=a(941),m=a(5867),u=a(6146),d="blogPostTitle_GeHD",g="blogPostData_291c",h="blogPostDetailsFull_3kfx",f=a(7682),p="image_1yU8";var v=function(e){var t=e.author,a=t.name,n=t.title,l=t.url,i=t.imageURL;return r.createElement("div",{className:"avatar margin-bottom--sm"},i&&r.createElement(s.Z,{className:"avatar__photo-link avatar__photo",href:l},r.createElement("img",{className:p,src:i,alt:a})),a&&r.createElement("div",{className:"avatar__intro",itemProp:"author",itemScope:!0,itemType:"https://schema.org/Person"},r.createElement("div",{className:"avatar__name"},r.createElement(s.Z,{href:l,itemProp:"url"},r.createElement("span",{itemProp:"name"},a))),n&&r.createElement("small",{className:"avatar__subtitle",itemProp:"description"},n)))},E="authorCol_1R69";function b(e){var t=e.authors,a=e.assets;return 0===t.length?r.createElement(r.Fragment,null):r.createElement("div",{className:"row margin-top--md margin-bottom--sm"},t.map((function(e,t){var l;return r.createElement("div",{className:(0,n.Z)("col col--6",E),key:t},r.createElement(v,{author:Object.assign({},e,{imageURL:null!=(l=a.authorsImageUrls[t])?l:e.imageURL})}))})))}var N=function(e){var t,a,p,v,E=(p=(0,o.c2)().selectMessage,function(e){var t=Math.ceil(e);return p(t,(0,i.I)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:t}))}),N=(0,c.C)().withBaseUrl,_=e.children,Z=e.frontMatter,k=e.assets,P=e.metadata,T=e.truncated,w=e.isBlogPostPage,L=void 0!==w&&w,y=P.date,C=P.formattedDate,M=P.permalink,U=P.tags,I=P.readingTime,R=P.title,x=P.editUrl,A=P.authors,O=null!=(t=k.image)?t:Z.image;return r.createElement("article",{className:L?void 0:"margin-bottom--xl",itemProp:"blogPost",itemScope:!0,itemType:"http://schema.org/BlogPosting"},(v=L?"h1":"h2",r.createElement("header",null,r.createElement(v,{className:d,itemProp:"headline"},L?R:r.createElement(s.Z,{itemProp:"url",to:M},R)),r.createElement("div",{className:(0,n.Z)(g,"margin-vert--md")},r.createElement("time",{dateTime:y,itemProp:"datePublished"},C),void 0!==I&&r.createElement(r.Fragment,null," \xb7 ",E(I))),r.createElement(b,{authors:A,assets:k}))),O&&r.createElement("meta",{itemProp:"image",content:N(O,{absolute:!0})}),r.createElement("div",{className:"markdown",itemProp:"articleBody"},r.createElement(l.Zo,{components:m.Z},_)),(U.length>0||T)&&r.createElement("footer",{className:(0,n.Z)("row docusaurus-mt-lg",(a={},a[h]=L,a))},U.length>0&&r.createElement("div",{className:(0,n.Z)("col",{"col--9":!L})},r.createElement(f.Z,{tags:U})),L&&x&&r.createElement("div",{className:"col margin-top--sm"},r.createElement(u.Z,{editUrl:x})),!L&&T&&r.createElement("div",{className:"col col--3 text--right"},r.createElement(s.Z,{to:P.permalink,"aria-label":"Read more about "+R},r.createElement("b",null,r.createElement(i.Z,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts"},"Read More"))))))}},9404:function(e,t,a){a.r(t),a.d(t,{default:function(){return o}});var r=a(7294),n=a(6742),l=a(6165),i=a(4884),s=a(4973),c=a(941);function o(e){var t,a=e.metadata,o=e.items,m=e.sidebar,u=a.allTagsPath,d=a.name,g=a.count,h=(t=(0,c.c2)().selectMessage,function(e){return t(e,(0,s.I)({id:"theme.blog.post.plurals",description:'Pluralized label for "{count} posts". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One post|{count} posts"},{count:e}))}),f=(0,s.I)({id:"theme.blog.tagTitle",description:"The title of the page for a blog tag",message:'{nPosts} tagged with "{tagName}"'},{nPosts:h(g),tagName:d});return r.createElement(l.Z,{title:f,wrapperClassName:c.kM.wrapper.blogPages,pageClassName:c.kM.page.blogTagPostListPage,searchMetadatas:{tag:"blog_tags_posts"},sidebar:m},r.createElement("header",{className:"margin-bottom--xl"},r.createElement("h1",null,f),r.createElement(n.Z,{href:u},r.createElement(s.Z,{id:"theme.tags.tagsPageLink",description:"The label of the link targeting the tag list page"},"View All Tags"))),o.map((function(e){var t=e.content;return r.createElement(i.Z,{key:t.metadata.permalink,frontMatter:t.frontMatter,assets:t.assets,metadata:t.metadata,truncated:!0},r.createElement(t,null))})))}},6146:function(e,t,a){a.d(t,{Z:function(){return d}});var r=a(7294),n=a(4973),l=a(7462),i=a(3366),s=a(6010),c="iconEdit_2_ui",o=["className"],m=function(e){var t=e.className,a=(0,i.Z)(e,o);return r.createElement("svg",(0,l.Z)({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,s.Z)(c,t),"aria-hidden":"true"},a),r.createElement("g",null,r.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))},u=a(941);function d(e){var t=e.editUrl;return r.createElement("a",{href:t,target:"_blank",rel:"noreferrer noopener",className:u.kM.common.editThisPage},r.createElement(m,null),r.createElement(n.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}},571:function(e,t,a){a.d(t,{r:function(){return g},Z:function(){return h}});var r=a(7294),n=a(6010),l=a(941);function i(e){var t=e.getBoundingClientRect();return t.top===t.bottom?i(e.parentNode):t}function s(e){var t,a=e.anchorTopOffset,r=Array.from(document.querySelectorAll(".anchor.anchor__h2, .anchor.anchor__h3")),n=r.find((function(e){return i(e).top>=a}));return n?function(e){return e.top>0&&e.bottom<window.innerHeight/2}(i(n))?n:null!=(t=r[r.indexOf(n)-1])?t:null:r[r.length-1]}function c(){var e=(0,r.useRef)(0),t=(0,l.LU)().navbar.hideOnScroll;return(0,r.useEffect)((function(){e.current=t?0:document.querySelector(".navbar").clientHeight}),[t]),e}var o=function(e){var t=(0,r.useRef)(void 0),a=c();(0,r.useEffect)((function(){var r=e.linkClassName,n=e.linkActiveClassName;function l(){var e=function(e){return Array.from(document.getElementsByClassName(e))}(r),l=s({anchorTopOffset:a.current}),i=e.find((function(e){return l&&l.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)}));e.forEach((function(e){!function(e,a){if(a){var r;t.current&&t.current!==e&&(null==(r=t.current)||r.classList.remove(n)),e.classList.add(n),t.current=e}else e.classList.remove(n)}(e,e===i)}))}return document.addEventListener("scroll",l),document.addEventListener("resize",l),l(),function(){document.removeEventListener("scroll",l),document.removeEventListener("resize",l)}}),[e,a])},m="tableOfContents_35-E",u="table-of-contents__link",d={linkClassName:u,linkActiveClassName:"table-of-contents__link--active"};function g(e){var t=e.toc,a=e.isChild;return t.length?r.createElement("ul",{className:a?"":"table-of-contents table-of-contents__left-border"},t.map((function(e){return r.createElement("li",{key:e.id},r.createElement("a",{href:"#"+e.id,className:u,dangerouslySetInnerHTML:{__html:e.value}}),r.createElement(g,{isChild:!0,toc:e.children}))}))):null}var h=function(e){var t=e.toc;return o(d),r.createElement("div",{className:(0,n.Z)(m,"thin-scrollbar")},r.createElement(g,{toc:t}))}},7211:function(e,t,a){a.d(t,{Z:function(){return o}});var r=a(7294),n=a(6010),l=a(6742),i="tag_1Okp",s="tagRegular_3MiF",c="tagWithCount_1HU1";var o=function(e){var t,a=e.permalink,o=e.name,m=e.count;return r.createElement(l.Z,{href:a,className:(0,n.Z)(i,(t={},t[s]=!m,t[c]=m,t))},o,m&&r.createElement("span",null,m))}},7682:function(e,t,a){a.d(t,{Z:function(){return o}});var r=a(7294),n=a(6010),l=a(4973),i=a(7211),s="tags_2ga9",c="tag_11ep";function o(e){var t=e.tags;return r.createElement(r.Fragment,null,r.createElement("b",null,r.createElement(l.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),r.createElement("ul",{className:(0,n.Z)(s,"padding--none","margin-left--sm")},t.map((function(e){var t=e.label,a=e.permalink;return r.createElement("li",{key:a,className:c},r.createElement(i.Z,{name:t,permalink:a}))}))))}}}]);