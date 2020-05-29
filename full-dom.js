// Source: https://www.digitalocean.com/community/tutorial_series/understanding-the-dom-document-object-model
// What is DOM
// **********************

// The Document Object Model (DOM) connects web pages to scripts or programming languages by representing the structure 
// of a document—such as the HTML representing a web page—in memory. Usually that means JavaScript, although modeling HTML, 
// SVG, or XML documents as objects is not part of the core JavaScript language, as such.

// The DOM represents a document with a logical tree. Each branch of the tree ends in a node, and each node contains objects. 
// DOM methods allow programmatic access to the tree. With them you can change the document's structure, style, or content.
// Nodes can also have event handlers attached to them. Once an event is triggered, the event handlers get executed.
// Source: https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model

// DOM is an interfrace that allows a programming languge to manipulate content, structure and style of a website
// JavaScript is the client-side scripting language that connects to the DOM in an internet browser
// A website consist of the **HTML document**:
//  * The browser parses HTML and CSS, 
//  * Also it creates the representation of the document that is known as Document object model
//  * The model allows JavaScript to access the content and elements of the website document as objects

document.body
// outputs the body of the HTML document, where
// document is an object and
// body is a property of that object we have accessed with dot notation

document.body.style.backgroundColor = "fuchsia"
// we can change some of the live properties of the body object on this website
// we are editing the style attribute
// assigning `fuchsia` to the baground color of the body is now part of the DOM, but the source code hasn't changed

// DOM is the representation of the HTML document as an JavaScript object that we can manipulate
// There are many different WEB APIs of the browser e.g.
// navigator -> API for the Navigator 
// window -> API for the Window
// document -> API for the HTML document


// The DOM is often referred to as the DOM tree and consists of a tree of objects called nodes.

// <a href="index.html" id="nav">Home</a>
// a is the tag
// href, and id are the attribute
// index.html is the attribute value
// Home is the text
// Everything between the opening and closing tag combined make the entire HTML element


let navLink = document.getElementById("nav")
// the element is now assigned to a variable
console.log(navLink) // <a id="nav" href="index.html">Home</a>

// navLink now contains the the anchor element, from here we can modify attributes and values
navLink.href = "https://www.wikipedia.org"
navLink.textContent = "Navigate to Wikipedia"
console.log(navLink) // <a id="nav" href="https://www.wikipedia.org/">Navigate to Wikipedia</a>

// DOM Tree and Node
// *******************************

// DOM is structured as a tree of objects called nodes and that nodes can be text, comment, or element
// All items in the DOM are defined as nodes, there are three main types of Nodes
//  * Element node
//  * Text node
//  * Comment node
//  When an HTML element is an item in the DOM, it is referred to as an element node.
//  Any lone text outside of an element is a text node
//  HTML comment is a comment node
//  Document node is the root of all nodes
//  The DOM sonsists of a tree structure of nested nodes, which is often referred to as the DOM tree
//  The html element node is parent node. head and body are siblings, children of html
//  $0 is a variables that holds the currently active element in Developer Tools

$0.nodeType // 1 which stands for an HTML element
// Every node has a nodeType property, there is a list of all node type constants
document.body.nodeType // outputs 1 which is an ELEMENT_NODE


// Modifying the DOM with Events
// An event in JavaScript is an action the user has taken
//  * mouse hover
//  * click
//  * press a key on a keyboard
// To listen to events of a user we can add an event lister to an HTML element

// <button id="changeBackground">Change Background Color</button>

let button = document.getElementById("changeBackground")
// addEventListener will tell the button to listen for a click and perform function once clicked
// button.addEventListener("click", () => {/* action will go here */})
button.addEventListener("click", () => document.body.style.backgroundColor = "fuchsia")

// Access Elements in the DOM
// *******************************************

// getElementById() -> Selector Syntax #id
// getElementsByClassName() -> Selector Syntax .class
// getElementsByTagName() -> Tag (HTML Tag of an element)
// querySelector() -> single Selector
// querySelectorAll() -> all Selector

// The id attirbute is unique to a single element in the DOM

const demoId = document.getElementById("demo")
console.log(demoId) // <div id="demo">Access me by ID</div>
demoId.style.border = '1px solid purple';

// The class attribute is used to acces one or more specific elements in the DOM
const demoClass = document.getElementsByClassName("demo")

// demoClass.style.border = '1px solid orange'; // Uncaught TypeError: Cannot set property 'border' of undefined
// returns an error because we have an array-like object of HTML elements
console.log(demoClass) // (2) [div.demo, div.demo]
// JavaScript arrays must be accessed with an index number
// Therefore change the first element of this array by using an index of 0
demoClass[0].style.border = "1px solid orange"
// To change all elements in the class we can apply a for loop

const articles = document.getElementsByTagName("article")
console.log(articles) // (2) [article, article]
// similar to an example before we can apply either the indexing or the for loop to change all elements

// querySelector(), comma-separated values function as an OR operator
// querySelector("div, article"), will match div or article, whichever appears first in the document
const demoQuery = document.querySelector("#demo-query")

// querySelectorAll(), comma-separated values function as an AND operator
// querySelectorAll("div, article") will match all div and article values in the document
const demoClass = document.querySelectorAll(".demo-query-all")

// How to traverse the DOM
// ************************

// DOM is a structured tree of nodes with the document node at the root and every other node (element, text, comment) as the branches
// Root Nodes
//  * The document object is the root of every node in the DOM
//  * The document object is a property of the window object
//  * The window object is the global, top-level object representing a tab in the browser
//  * The window object has access to the toolbar, height, width, prompts and alerts
//  * The document consists of what is inside of the inner window
// Property: document -> Node: #document -> Node Type: DOCUMENT_NODE
// Property: document.documentElement -> Node: html -> Node Type: ELEMENT_NODE
// Property: document.head -> Node: head -> Node Type: ELEMENT_NODE
// Property: document.body -> Node: body -> Node Type: ELEMENT_NODE
// IMPORTANT: Since the html, head, and body are so common, they have their own properties on the document
// if you want to access HTML elements on the page you need to use the selectors to access the elements

const p = document.getElementsByTagName("p")[0]
console.log(p.parentNode) // <body>...</body>
// returns body because this is the parentNode of p that is inside the body element
console.log(p.parentNode.parentNode) // <html>...</html>
// returns html element because the parent of p is body and the parent of body is html

// assign html object to html variable
const html = document.documentElement

console.log(html.parentNode) // > #document

// Children Nodes
// The children of a node are the nodes that are one level below it
// Any nodes beyond one level of nesting are referred as descendants
// childNodes -> Child Nodes
// firstChild -> First Child Node
// lastChild -> Last Child Node
// children -> Element Child Nodes
// firstElementChild -> First Child Element Node
// lastElementChild -> Last Child Element Node

console.log(ul.childNodes) // (7) [text, li, text, li, text, li, text]
// In addition to the three li elements, it also gets four text nodes
// This is because the identation between elements is counted in the DOM as text nodes
ul.firstChild.style.background = 'yellow'; // >     Uncaught TypeError: Cannot set property 'background' of undefined
// In order to neglect the whitespaces the text nodes we should use children, firstElementChild, lastElementChild to retrieve only the element nodes e.g. ul.children will only return the three li elements
ul.firstElementChild.style.background = 'yellow'; // works well
// we can use for loops to iterate over the children elements

//  <p>The world's leading source on <strong>shark</strong> related information.</p>
//  Since p element has both text and elements inside of it, the childNodes propery is helpful for accessing that information
for (let element of p.ChildNodes) {
  console.log(element)
}
// "The world's leading source on "
// <strong>​shark​</strong>​
// " related information."

// childNodes and children do not return arrays with all the Array properties and methods, but they have similar functionality JS arrays. You cann access nodes by index number, or find their length property

document.body.children[3].lastElementChild.style.background = 'fuchsia';

// Sibling Nodes
// The siblings of a node are any node on the same tree level in the DOM
// The siblings do not have to be the same type of node: text, element, comment can be siblings
// previousSibling
// nextSibling
// previousElementSibling
// nextElementSibling
// Sibling properties work the same way as the children nodes, in that there is a set of properties to traverse all nodes and a set of properties for only element nodes.

// Since we created our DOM from scratch and not as JS web app, we will need to use the element sibling properties to access the previous and next element nodes, as there is white space in the DOM.
const tiger = ul.children[1]
tiger.nextElementSibling.style.background = "coral"
tiger.previousElementSibling.style.background = "aquamarine"

// Make Changes to the DOM
// ***************************

// In a static website, elements are added to the page by directly writing HTML in an `.html` file
// In a dynamic web app, elements and text are often added with JavaScript
// The creteElement() and createTextNode() methods are used to create a new nodes in the DOM
// createElement() -> create a new element node
// createTextNode() -> create a new text node
// node.textContent -> get or set the text content of an element node
// node.innerHTML -> get or set the HTML content of an element

// It creates an empty p element
const paragraph = document.createElement("p")
console.log(paragraph) // <p></p>

// To add text to the element
paragraph.textContent = "I'm a brand new paragraph"
console.log(paragraph) // <p>I'm a brand new paragraph.</p>

// is not recommended since there is a possible cross-site scripting (XSS) risk associated
// as inline JavaScript can be added to an element
paragraph.innerHTML = "I'm a paragraph with <strong>bold</strong> text."

const text = document.createTextNode("I'm a new text node")
console.log(text) // "I'm a new text node."

// Inserting Nodes into the DOM
// In order to see the new text and elements on the front end, we will need to insert them into the document
// node.appendChild() -> add a node as the last child of a parent element
// node.insertBefore() -> insert a node into the parent element before a specified sibling node
// node.replaceChild() -> replace an existing node with a new node

const todoList = document.querySelector("ul")
const newTodo = document.createElement("li")
newTodo.textContent = "Do homework"
todoList.appendChild(newTodo)

// This is how we insert a new li element before other li elements inside ul (todoList)
const anotherTodo = document.createElement("li")
anotherTodo.textContent = "Pay bills"
todoList.insertBefore(anotherTodo, todoList.firstElementChild)

const modifiedTodo = document.createElement("li")
modifiedTodo.textContent = "Feed the dog"
// parentNode.replaceChild(newNode, oldNode)
// will replace the third element child of the list with the modified to-do
todoList.replaceChild(modifiedTodo, todoList.children[2])

// Removing Nodes form the DOM
// node.removeChild() -> Remove child node
// node.remove() -> Remove node
todoList.removeChild(todoList.lastElementChild)
todoList.children[1].remove()


// Modify Attribues, Classes and Styles in the DOM
// ***********************************************

// The methods getElementsByClassName() and getElementsByTagName() will return HTML collections
// which do not have access to the forEach() method that querySelectorAll() has
// In these cases you will need to use a standard for loop to iterate through the collection

// Modifying Attributes 
// Attributes are values that contain additional information about HTML elements
// They come in name/value pairs and depend on the element
// src is an attribute of an img tag
// href is an attribute of an a tag
// class, id, style are attributes too
// hasAttribute() -> returns true or false -> element.hasAttribute("href")
// getAttribute() -> returns the value of a specified attribute or null -> element.getAttribute("href")
// setAttribute() -> adds or updates value of an attributre -> element.setAttribute("href", "index.html")
// removeAttribute() -> removes an attribute from an elements -> element.removeAttribute("href")
// sets a new src value
img.src = "https://example.com/shark.png"

// Modifying Classes
// The class attribute corresponds to CSS class selectors
// The CSS class selector matches elements based on the contents of their class attributes
// className -> gets or sets class value -> element.className
// classList.add() -> adds one or more class values -> element.classList.add("active")
// classList.toggle() -> toggles class on or off -> element.classList.toggle("active")
// classList.contains() -> checks if class value exists -> element.classList.contains("active")
// classList.replace() -> replaces an exisitng class value with new class value -> element.classList.replace("old", "new")
// classList.remove() -> remove a class value -> element.classList.remove("active")
const div = document.querySelector("div")
div.className = "warning"

const activeDiv = document.querySelector(".active")

activeDiv.classList.ad("hidden") // Add the hidden class
activeDiv.classList.remove("hidden") // Remove the hidden class
activeDiv.classList.toggle("hidden") // Switch between true and false
activeDiv.classList.replace("active", "warning") // Replace active class with warning class
// using classList.add() will add a new class to the list of existing classes
// you can also add multiple classes as comma-separated strings
// you can also use setAttribute to modify the class of an element

// Modifying Styles
// The style property represents the inline styles on an HTML element
const div = document.querySelector("div")
// this option will remove all existing inline styles from the element
div.setAttribute("style", "text-align: center")
// other option to change the style is to use the style attribute directly
// css properties are written in kebab-case, which is lowercase words separated by dashes
// in JS the css properties are written in camelCase
div.style.height = "100px"
div.style.width = "100px"
div.style.border = "2px solid black"
// if many stylistic changes are to be applied to an element, 
// the best course of action is to appley the styles to a class and add a new class

// Understanding Events in JavaScript
// **********************************

// Events are actions that take place in the browser that can be initiated by either the user 
// or browser itself
//  * the page finishes loading
//  * user clicks a button
//  * user hovers over a dropdown
//  * user submits a form
//  * user presses a key on a keyboard
// When a user clicks a button an event is fired
//  * An event handler is a JS function that runs when an event fires
//  * Event listener attaches a responsive interface to an element, which allows that 
//    particular element to wait and listen for the given event to fire
// There are three ways to assign events to elements:
//  * Inline event handlers
//  * Event handler properties
//  * Event listeners


// Inline event
// is not recommended to use
// <button onclick="changeText()">Click me</button>

function changeText() {
  const p = document.querySelector("p")
  p.textContent = "I changed because of an inline event handler"
}

// Event Handler Properties
// Event handlers do not follow the camelCase convention that most JS code adheres to
// Notice that the code is onclick, not onClick
const button = document.querySelector("button")
// Note that when passing a function reference to the onclick property
// we do not include parens, as we are not invoking the function in that moment
// by only passing a refernce to it (inversion of control)
button.onclick = changeText

// Event Listeners
// An event listener watches for an event on an element
// Instead of assigning the event directly to a property on the element
// we will use addEventListener() method to listen for the event
// notice that with the first two methods, a click evnet was referred to as onclick
// but with the event listeners it is referred to as click
// Every event listener drops the on from the word
// You can assign more than one event and remove events too
button.addEventListener("click", changeText)
// you can add event listeners on the document and window object
window.addEventListener("load", () => console.log("loaded"))
// you can remove listeners
button.removeEventListener("click", alertText)

// List of Common Events
// * Mouse events:
//    * click -> is a compound even that is comprised of combined mousedown and mouseup events
//    * dblclick
//    * mouseenter -> mouseenter and mouseleave in tandem recreates a hover effect
//    * mouseleave
//    * mousemove
// * Form Events
//    * submit
//    * focus -> fires when an element such as input receives a focus
//    * blur -> fires when an element loses focus
// * Keyboard Events
//    * keydown
//    * keyup
//    * keypress
//    * If a parameter, known as an event object is passed through the event listener
//      we can access more information about the action that took place: keyCode, key, and code
//      If the user presses the letter a key on the keyboard the following properties pertaining to that key will surface: keyCode: 65, key: a, code: KeyA

document.addEventListener("keydown", event => {
  console.log("key: "  + event.keyCode)
  console.log("key: " + event.key)
  console.log("code: " + event.code)
})

// Event Object
// The event object consists of properties and methods that all events can access
// In addition to the generic Event object, each type of event has its own extention
// such as KeyboardEvent and MouseEvent
// The Event object is passed through a listener function as a parameter
document.addEventListener("keydown", event => {
  const element = document.querySelector("p")

  const a = "KeyA"
  const s = "KeyS"
  const d = "KeyD"
  const w = "KeyW"

  switch (event.code) {
    case a:
      element.textContent = "Left"
      break
    case s:
      element.textContent = "Down"
      break
    case d:
      element.textContent = "Right"
      break
    case w:
      element.textContent = "Up"
      break
  }
})

// The target property of the Event interfrace is a reference to the object onto which the event was dispatched
// With event.target we can place one event listener on the outer section element
// and get the most deeply nested element
const section = document.querySelector("section")
section.addEventListener("click", event => {
  console.log(event.target)
})
// Clicking on any one of the elements inside section will return output of the relevant
// specific element to the console using event.target. This is extremely useful, as it allows 
// to playe only one event listener that can be used to access many nested elements


// EventObject
// To properly handle an event we'd want to know more about what's happened. Not just a "click" or "keydown", but 
// which key was presed and so on.
//   * When an even happens, the browser creates an event object, puts details into it and passes it as an argument to the handler

// <input type="button" value="Click me" id="elem">
// getting pointer coordinates from the event object
elem.onclick = function(event) {
  alert(event.type + " at " + event.currentTarget)
  alert("Coordinates: " + event.clientX + ":" + event.clientY)
}
// event.type: here it's click
// event.currentTarget: element that handled the event, exactly the same as `this` unless the handler is an arrow function
// event.clientX / event.clientY: window-relative coordinates of the cursor, for pointer events
// There are more properties. May of them depend on the event type: keyboard events have one set of properties, pointer event another one
