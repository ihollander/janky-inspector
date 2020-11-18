export const commonDOMProperties = [
  {
    name: "id",
    readOnly: false,
    description: "The unique identifier for the element. Useful for CSS styling and finding an element using querySelector.",
    mdn: "https://developer.mozilla.org/en-US/docs/Web/API/Element/id"
  },
  {
    name: "className",
    readOnly: false,
    description: "The class attribute for the element. You can assign single classes with `element.className = 'my-class'` or multiple classes by separating classes with spaces, like this: `element.className = 'my-class another-class'`. Useful for CSS styling of multiple elements and finding element using querySelector.",
    mdn: "https://developer.mozilla.org/en-US/docs/Web/API/Element/className"
  },
  {
    name: "textContent",
    readOnly: false,
    description: "The content visible inside the element. For example, <h1>Hello</h1> has a textContent of 'Hello'. Basically the same as innerText.",
    mdn: "https://developer.mozilla.org/en-US/docs/Web/API/Node/textContent"
  },
  {
    name: "innerHTML",
    readOnly: false,
    description: "A representation of the element's children as an HTML string. Useful for creating lots of HTML elements from string templates.",
    mdn: "https://developer.mozilla.org/en-US/docs/Web/API/Element/innerHTML"
  },
  {
    name: "children",
    readOnly: true,
    description: "An array-like collection (HTMLCollection) of all the child elements. Useful for dynamically accessing all child elements from a node.",
    mdn: "https://developer.mozilla.org/en-US/docs/Web/API/ParentNode/children"
  },
  {
    name: "parentElement",
    readOnly: true,
    description: "The node's direct parent element. What more do you need to know?",
    mdn: "https://developer.mozilla.org/en-US/docs/Web/API/Node/parentElement"
  },
  {
    name: "value",
    readOnly: false,
    description: "Get/sets the value of a form field. Can only be used with certain elements that a user can enter data into, such as <input>, <textarea>, and <select>. Useful when working with forms and trying to access the information entered into the form. (<li> elements also have a value property, but it won't give you what you want)",
    mdn: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#htmlattrdefvalue"
  },
  // TODO: add style (almost there, need to add input to enter name as well)
  // {
  //   name: "style",
  //   readOnly: false,
  //   mdn: "https://developer.mozilla.org/en-US/docs/Web/API/ElementCSSInlineStyle/style"
  // },
  // {
  //   name: "dataset",
  //   readOnly: false,
  // },
]

export const commonDOMMethods = [
  {
    name: "remove",
    description: "Remove the element from the page",
    mdn: "https://developer.mozilla.org/en-US/docs/Web/API/ChildNode/remove",
    args: []
  },
  {
    name: "querySelector",
    description: "Find the first element that matches the given CSS selector *within* the element",
    mdn: "https://developer.mozilla.org/en-US/docs/Web/API/Element/querySelector",
    args: [
      {
        name: "selector",
        description: "A CSS selector"
      }
    ]
  },
  {
    name: "querySelectorAll",
    description: "Find *all* the elements that matches the given CSS selector *within* the element",
    mdn: "https://developer.mozilla.org/en-US/docs/Web/API/Element/querySelectorAll",
    args: [
      {
        name: "selector",
        description: "A CSS selector"
      }
    ]
  },
  {
    name: "closest",
    description: "Find the closest parent element that matches the given CSS selector",
    mdn: "https://developer.mozilla.org/en-US/docs/Web/API/Element/closest",
    args: [
      {
        name: "selector",
        description: "A CSS selector"
      }
    ]
  },
  {
    name: "matches",
    description: "Checks if the element matches the given CSS selector and returns true or false.",
    mdn: "https://developer.mozilla.org/en-US/docs/Web/API/Element/closest",
    args: [
      {
        name: "selector",
        description: "A CSS selector"
      }
    ]
  },
]