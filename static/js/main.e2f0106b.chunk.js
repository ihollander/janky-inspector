(this["webpackJsonpjanky-inspector"]=this["webpackJsonpjanky-inspector"]||[]).push([[0],{24:function(e,n,t){},33:function(e,n,t){"use strict";t.r(n);var r=t(0),l=t(1),o=t.n(l),i=t(13),c=t.n(i),a=(t(24),t(4)),s=t(2),d=t(3);function m(){var e=Object(s.a)(["\n  .highlight {\n    background-color: rgb(173, 219, 255, 0.8) !important;\n    outline: 1px solid rgb(35, 159, 255) !important;\n  }\n\n  .selected {\n    background-color: rgba(235, 198, 255, 0.8) !important;\n    outline: 1px solid rgb(178, 35, 255) !important;\n  }\n"]);return m=function(){return e},e}var u=d.a.div(m());var h=function(e){var n=e.html,t=e.selectedElement,o=e.onSelectedElement,i=e.highlightedElement,c=e.onHighlightedElement,a=Object(l.useRef)();return Object(l.useEffect)((function(){var e=a.current,n=function(e){var n=e.target;n!==t&&o(n)},r=function(e){var n=e.target;n!==i&&c(n)},l=function(){c(null)};if(e)return e.addEventListener("click",n),e.addEventListener("mouseover",r),e.addEventListener("mouseout",l),function(){e.removeEventListener("click",n),e.removeEventListener("mouseover",r),e.removeEventListener("mouseout",l)}}),[i,n,t,c,o]),Object(r.jsx)(u,{ref:a,id:"container",children:Object(r.jsx)("div",{dangerouslySetInnerHTML:{__html:n}})})},p=t(7);var j=function(e){var n=e.html,t=e.setHtml,l=e.isLiveEditor,o=e.setIsLiveEditor;return Object(r.jsx)("div",{onMouseEnter:function(){return o(!0)},onMouseLeave:function(){return o(!1)},style:{height:"100%"},children:Object(r.jsx)(p.Controlled,{value:n,onBeforeChange:function(e,n,r){l&&t(r)},options:{mode:"xml",htmlMode:!0,theme:"material"}})})};function f(){var e=Object(s.a)(["\n  list-style: none;\n  padding: 0;\n  font-weight: bold;\n\n  .name {\n    color: blue;\n  }\n\n  .value {\n    color: purple;\n  }\n"]);return f=function(){return e},e}var g=d.a.ul(f());var b=function(e){var n=e.selectedElement;return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("h2",{children:"Attributes"}),Object(r.jsx)(g,{children:Array.from(n.attributes).map((function(e){var n=e.name,t=e.value;return Object(r.jsxs)("li",{children:[Object(r.jsx)("span",{className:"name",children:n}),"=",Object(r.jsxs)("span",{className:"value",children:['"',t,'"']})]},n)}))})]})},v=t(18),O=[{name:"id",readOnly:!1,description:"The unique identifier for the element. Useful for CSS styling and finding an element using querySelector.",mdn:"https://developer.mozilla.org/en-US/docs/Web/API/Element/id"},{name:"className",readOnly:!1,description:"The class attribute for the element. You can assign single classes with `element.className = 'my-class'` or multiple classes by separating classes with spaces, like this: `element.className = 'my-class another-class'`. Useful for CSS styling of multiple elements and finding element using querySelector.",mdn:"https://developer.mozilla.org/en-US/docs/Web/API/Element/className"},{name:"textContent",readOnly:!1,description:"The content visible inside the element. For example, <h1>Hello</h1> has a textContent of 'Hello'. Basically the same as innerText.",mdn:"https://developer.mozilla.org/en-US/docs/Web/API/Node/textContent"},{name:"innerHTML",readOnly:!1,description:"A representation of the element's children as an HTML string. Useful for creating lots of HTML elements from string templates.",mdn:"https://developer.mozilla.org/en-US/docs/Web/API/Element/innerHTML"},{name:"children",readOnly:!0,description:"An array-like collection (HTMLCollection) of all the child elements. Useful for dynamically accessing all child elements from a node.",mdn:"https://developer.mozilla.org/en-US/docs/Web/API/ParentNode/children"},{name:"parentElement",readOnly:!0,description:"The node's direct parent element. What more do you need to know?",mdn:"https://developer.mozilla.org/en-US/docs/Web/API/Node/parentElement"},{name:"value",readOnly:!1,description:"Get/sets the value of a form field. Can only be used with certain elements that a user can enter data into, such as <input>, <textarea>, and <select>. Useful when working with forms and trying to access the information entered into the form. (<li> elements also have a value property, but it won't give you what you want)",mdn:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#htmlattrdefvalue"}],E=[{name:"remove",description:"Remove the element from the page",mdn:"https://developer.mozilla.org/en-US/docs/Web/API/ChildNode/remove",args:[]},{name:"querySelector",description:"Find the first element that matches the given CSS selector *within* the element",mdn:"https://developer.mozilla.org/en-US/docs/Web/API/Element/querySelector",args:[{name:"selector",description:"A CSS selector"}]},{name:"querySelectorAll",description:"Find *all* the elements that matches the given CSS selector *within* the element",mdn:"https://developer.mozilla.org/en-US/docs/Web/API/Element/querySelectorAll",args:[{name:"selector",description:"A CSS selector"}]},{name:"closest",description:"Find the closest parent element that matches the given CSS selector",mdn:"https://developer.mozilla.org/en-US/docs/Web/API/Element/closest",args:[{name:"selector",description:"A CSS selector"}]},{name:"matches",description:"Checks if the element matches the given CSS selector and returns true or false.",mdn:"https://developer.mozilla.org/en-US/docs/Web/API/Element/closest",args:[{name:"selector",description:"A CSS selector"}]}];function S(){var e=Object(s.a)(["\n  color: blue;\n  cursor: pointer;\n"]);return S=function(){return e},e}var x=d.a.span(S());var y=function(e){var n=e.element,t=e.onSelectedElement,l=e.onHighlightedElement;return Object(r.jsxs)(x,{onClick:function(){return t(n)},onMouseOver:function(){return l(n)},onMouseOut:function(){return l(null)},children:["<",n.tagName.toLowerCase(),">"]})};function L(){var e=Object(s.a)(["\n  list-style: none;\n  padding: 0;\n\n  a {\n    font-size: 0.75em;\n  }\n\n  h3 {\n    margin-bottom: 0.1rem;\n  }\n\n  p {\n    margin-top: 0.25rem;\n    color: #333;\n  }\n"]);return L=function(){return e},e}var C=d.a.ul(L());function H(e){var n=e.element,t=e.name,o=e.args,i=e.description,c=e.mdn,s=e.onHighlightedElement,d=e.onSelectedElement,m=(e.onUpdateSelectedElement,o.map((function(e){return e.name})).join(", ")),u=o.reduce((function(e,n){return e.push([n.name,""]),e}),[]),h=Object(l.useState)(u),p=Object(a.a)(h,2),j=p[0],f=p[1],g=Object(l.useState)("run method to see return value"),b=Object(a.a)(g,2),O=b[0],E=b[1],S=j.map((function(e){return Object(a.a)(e,2)[1]})),x=n.tagName.toLowerCase()+"."+t+"("+S.map((function(e){return'"'.concat(e,'"')})).join(", ")+")";return Object(r.jsxs)("li",{children:[Object(r.jsxs)("h3",{children:[Object(r.jsx)("em",{children:"Element."}),t,"(",m,") ",Object(r.jsx)("a",{href:c,target:"_blank",rel:"noreferrer",children:"MDN"})]}),Object(r.jsx)("p",{children:i}),Object(r.jsxs)("form",{onSubmit:function(e){e.preventDefault();var r=n[t].apply(n,Object(v.a)(S));E(r)},style:{marginLeft:"1rem"},children:[Object(r.jsx)("h4",{children:"Arguments"}),0===o.length?Object(r.jsx)("p",{children:"(none)"}):o.map((function(e){return Object(r.jsxs)("label",{children:[e.name,": ",Object(r.jsx)("input",{type:"text",value:j[e.name],onChange:function(n){var t=n.target;f((function(n){return n.map((function(n){return n[0]===e.name?[e.name,t.value]:n}))}))}})]},e.name)})),Object(r.jsx)("h4",{children:"Preview"}),Object(r.jsx)("p",{children:x}),Object(r.jsx)("input",{type:"submit",value:"Run method"}),Object(r.jsx)("h4",{children:"Return Value"}),Object(r.jsx)("p",{children:O instanceof HTMLElement?Object(r.jsx)(y,{element:O,onSelectedElement:d,onHighlightedElement:s}):O instanceof NodeList?Array.from(O).map((function(e){return Object(r.jsx)(y,{element:e,onSelectedElement:d,onHighlightedElement:s})})):void 0===O?"undefined":null===O?"null":O.toString()})]})]})}var M=function(e){var n=e.selectedElement,t=e.onSelectedElement,l=e.onHighlightedElement,o=e.onUpdateSelectedElement,i=(e.onUpdateSelectedElementStyle,E.map((function(e){return Object(r.jsx)(H,{element:n,name:e.name,description:e.description,mdn:e.mdn,args:e.args,onHighlightedElement:l,onSelectedElement:t,onUpdateSelectedElement:o},e.name)})));return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("h2",{children:"Common Methods"}),Object(r.jsx)(C,{children:i})]})},w=t(17);function U(){var e=Object(s.a)(["\n  list-style: none;\n  padding: 0;\n\n  a {\n    font-size: 0.75em;\n  }\n\n  h3 {\n    margin-bottom: 0.1rem;\n  }\n\n  p {\n    margin-top: 0.25rem;\n    color: #333;\n  }\n\n  .selectable {\n    color: blue;\n    cursor: pointer;\n  }\n"]);return U=function(){return e},e}var A=d.a.ul(U());function T(e){var n=e.name,t=e.description,l=e.mdn,o=e.children;return Object(r.jsxs)("li",{children:[Object(r.jsxs)("h3",{children:[n," ",Object(r.jsx)("a",{href:l,target:"_blank",rel:"noreferrer",children:"MDN"})]}),Object(r.jsx)("p",{children:t}),Object(r.jsxs)("span",{children:[n," = "]}),o]})}function k(e){var n=e.element,t=e.onSelectedElement,l=e.onHighlightedElement;return Object(r.jsxs)("span",{className:"selectable",onClick:function(){return t(n)},onMouseOver:function(){return l(n)},onMouseOut:function(){return l(null)},children:["<",n.tagName.toLowerCase(),">"]})}var N=function(e){var n=e.selectedElement,t=e.onSelectedElement,l=e.onHighlightedElement,o=e.onUpdateSelectedElement,i=e.onUpdateSelectedElementStyle,c=O.filter((function(e){return e.name in n})).map((function(e){var c,a=n[e.name];if(a instanceof HTMLElement)c=Object(r.jsx)(k,{element:a,onSelectedElement:t,onHighlightedElement:l});else if(a instanceof HTMLCollection)c=a.length?Array.from(a).map((function(e,n){return Object(r.jsx)(k,{element:e,onSelectedElement:t,onHighlightedElement:l},n)})):"[]";else if(a instanceof CSSStyleDeclaration)if(a.length){var s,d=[],m=Object(w.a)(a);try{var u=function(){var e=s.value;d.push(Object(r.jsx)("li",{children:Object(r.jsxs)("label",{children:[e,":"," ",Object(r.jsx)("input",{type:"text",value:a[e],onChange:function(n){var t=n.target;i(e,t.value)}})]})},e))};for(m.s();!(s=m.n()).done;)u()}catch(j){m.e(j)}finally{m.f()}c=Object(r.jsx)("ul",{children:d})}else c="{}";else if(a instanceof DOMStringMap){var h=[];for(var p in a)h.push("".concat(p,": ").concat(a[p]));c=h.length?h.join(", "):"{}"}else c=e.readOnly?a:Object(r.jsx)("input",{type:"text",value:a,onChange:function(n){var t=n.target;o(e.name,t.value)}});return Object(r.jsx)(T,{name:e.name,description:e.description,mdn:e.mdn,children:c},e.name)}));return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("h2",{children:"Common Properties"}),Object(r.jsx)(A,{children:c})]})};function I(){var e=Object(s.a)(["\n  .CodeMirror {\n    height: auto;\n  }\n"]);return I=function(){return e},e}function z(){var e=Object(s.a)(["\n  .tag {\n    color: blue\n  }\n\n  .id {\n    color: purple\n  }\n"]);return z=function(){return e},e}var W=d.a.h1(z()),P=Object(d.a)(p.Controlled)(I());var q=function(e){var n=e.selectedElement,t=e.onSelectedElement,l=e.onHighlightedElement,o=e.onUpdateSelectedElement,i=e.onUpdateSelectedElementStyle;if(!n)return null;var c=function(e){var n="",t=e.className.split(" ").filter((function(e){return"selected"!==e&&"highlight"!==e}));return e.id.length?n+="#"+e.id:t.length&&(n+="."+t.join(".")),n}(n);return Object(r.jsxs)("div",{children:[Object(r.jsxs)(W,{children:["Element:"," ",Object(r.jsx)("span",{className:"tag",children:n.tagName.toLowerCase()}),Object(r.jsx)("span",{className:"id",children:c})]}),Object(r.jsx)(P,{value:n.outerHTML,options:{mode:"xml",htmlMode:!0,theme:"material",readOnly:!0,lineWrapping:!0}}),Object(r.jsx)(b,{selectedElement:n}),Object(r.jsx)("hr",{}),Object(r.jsx)(N,{selectedElement:n,onHighlightedElement:l,onSelectedElement:t,onUpdateSelectedElement:o,onUpdateSelectedElementStyle:i}),Object(r.jsx)("hr",{}),Object(r.jsx)(M,{selectedElement:n,onHighlightedElement:l,onSelectedElement:t,onUpdateSelectedElement:o})]})};function D(){var e=Object(s.a)(["\n  grid-area: inspector;\n  background-color: aliceblue;\n  overflow-y: scroll;\n  padding: 0 1rem;\n"]);return D=function(){return e},e}function F(){var e=Object(s.a)(["\n  grid-area: editor;\n  background-color: azure;\n  overflow: auto;\n\n  .react-codemirror2 {\n    height: 100%;\n  }\n\n  .CodeMirror {\n    height: 100%;\n  }\n"]);return F=function(){return e},e}function R(){var e=Object(s.a)(["\n  grid-area: content;\n  cursor: pointer;\n  overflow: auto;\n  padding: 1rem;\n"]);return R=function(){return e},e}function _(){var e=Object(s.a)(['\n  margin: 0;\n  padding: 0;\n  display: grid;\n  grid-template-areas: \n    "content inspector"\n    "editor inspector"\n  ;\n  grid-template-columns: 1fr 1fr;\n  grid-template-rows: 1fr 1fr;\n  width: 100vw;\n  height: 100vh;\n  font-size: 16px;\n']);return _=function(){return e},e}var B=d.a.main(_()),J=d.a.div(R()),G=d.a.div(F()),V=d.a.div(D()),Y='<h1 id="welcome">Welcome to Janky Inspector</h1>\n<p class="description">\n  <em>\n    A playground to learn about the DOM \n    and common methods for interacting with HTML Elements\n  </em>\n</p>\n<p>\n  <em>It\'s like a less powerful version of the Dev Tools!</em>\n  \ud83e\udd20\n</p>\n<p>On this page, you\'ll find:</p>\n\n<ul class="list">\n  <li>\n    \ud83d\udcc4 HTML Content (this part of the page)\n  </li>\n  <li>\n    \u27a1\ufe0f An interactive Inspector tool where you can see common DOM properties and methods (try editing the text fields and running some methods)\n  </li>\n  <li>\n   \u2b07\ufe0f A text Editor where you can update the HTML displayed in the Content section (you can edit the existing HTML, or paste in some fresh content)\n  </li>\n</ul>\n\n<p id="help" style="font-weight: bold; color: red">\n  To get started, click this element it to show the details in the Inspector!\n</p>\n';var K=function(){var e=Object(l.useState)(Y),n=Object(a.a)(e,2),t=n[0],o=n[1],i=Object(l.useState)(Y),c=Object(a.a)(i,2),s=c[0],d=c[1],m=Object(l.useState)(!1),u=Object(a.a)(m,2),p=u[0],f=u[1],g=Object(l.useState)(null),b=Object(a.a)(g,2),v=b[0],O=b[1],E=Object(l.useState)({selectedElement:null}),S=Object(a.a)(E,2),x=S[0].selectedElement,y=S[1],L=function(e){var n=null===v||void 0===v?void 0:v.closest("#container");n&&n.querySelectorAll(".highlight").forEach((function(e){return e.classList.remove("highlight")})),null===e||void 0===e||e.classList.add("highlight"),O(e)},C=function(e){var n=null===x||void 0===x?void 0:x.closest("#container");n&&n.querySelectorAll(".selected").forEach((function(e){return e.classList.remove("selected")})),null===e||void 0===e||e.classList.add("selected"),y((function(){return{selectedElement:e}}))};return Object(r.jsxs)(B,{children:[Object(r.jsx)(J,{children:Object(r.jsx)(h,{html:t,selectedElement:x,onSelectedElement:C,highlightedElement:v,onHighlightedElement:L})}),Object(r.jsx)(G,{children:Object(r.jsx)(j,{html:s,setHtml:function(e){o(e),d(e),y({selectedElement:null})},isLiveEditor:p,setIsLiveEditor:f})}),Object(r.jsx)(V,{children:Object(r.jsx)(q,{selectedElement:x,onSelectedElement:C,onHighlightedElement:L,onUpdateSelectedElement:function(e,n){x[e]=n;var t=x.closest("#container > div");t&&d(t.innerHTML),y((function(){return{selectedElement:x}}))},onUpdateSelectedElementStyle:function(e,n){x.style[e]=n;var t=x.closest("#container > div");t&&d(t.innerHTML),y((function(){return{selectedElement:x}}))}})})]})};t(30),t(31),t(32);c.a.render(Object(r.jsx)(o.a.StrictMode,{children:Object(r.jsx)(K,{})}),document.getElementById("root"))}},[[33,1,2]]]);
//# sourceMappingURL=main.e2f0106b.chunk.js.map