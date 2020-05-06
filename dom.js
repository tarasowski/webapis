// Source: https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Manipulating_documents

// Web browsers are complicated with many moving parts, many which can't be controlled or manipulated by a web developer using JS. It cannot access e.g. passwords or any sensitive data on your PC.
// Web API gives us access to a lot of functionality that enable us to manipulate web pages
//  * Window object: the window is the browser tab that a web page is loaded into; you can do things like return the window's size, manipulate the document loaded into that winodw, store data specific to that document on the client-side e.g. using local database attach event handlers to the current window
//  * Navigator object: represents the state and identity of the browser (i.e. user-agent). Can be used to retrieve user's preferred language, a media stream from the user's webcam
//  * Document object: the actual page loaded into the window. You can use this object to return and manipulate information on the HTML and CSS that comprises the document e.g. get a reference to a DOM element, change its text content, apply new styles, delete element and so on
//
// visualize DOM: https://software.hixie.ch/utilities/js/live-dom-viewer/

// Window object
window.innerWidth
window.innerHeight

// Navigator object
navigator.language

// The document loaded inn each one of your browser tabs is represented by a document object model
//  * This is a tree structure representation created by the browser that enables the HTML structure to be easliy accessed by programming language. E.g. browser itself uses it to apply styling and other information to the correct elements as it renders a page, and developers can manipulate DOM with JS after the page has been rendered.

// To manipulate an element inside the DOM, you need to select it and store a reference in a variable

const link = document.querySelector("a")

// Now we have the lement reference stores in a variable we can start to manipulate it using properties and methods

// Let's change the text inside the link by updating the value of the Node.textContent
link.textContent = "Mozilla Developer Network"

// Lets change the URL the link is pointing to
link.href = "https://developer.mozilla.org"

// Document.querySelector("a") will match the first <a> in the document and returns a Node
// Document.querySelectorAll("a") will match every <a> in the document and return array-like object called NodeList 

// Grab the reference to the section
const sect = document.querySelector("section")

// Create new paragraph and give it some text
const para = document.createElement("p")
para.textContent = "We hope you enjoyed the ride"
// append the new paragraph at the end of the section
sect.appendChild(para)

const text = document.createTextNode(" - the premier source for web development knowledge")
const linkPara = document.querySelector("p")
linkPara.appendChild(text)

// We can add inline styles directly onto elements you want to dynamically style them
// This is done with HTMLElement.style property, which contains inline styling information

para.style.color = "white"
para.style.backgroundColor = "black"
para.style.padding = "10px"
para.style.width = "250px"
para.style.textAlign = "center"

// First we select a Node with the help of Document object (document.querySelector("a"))
// We manipulate a node with (Node.textContent)

// Grab the refernce to the div and grab the width and height of the viewport
const div = document.querySelector("div")
let winWidth = window.innerWidth
let winHeight = window.innerHeight

// We set dynamically the width and height of the div equal that of the viewport
div.style.width = winWidth + "px"
div.style.height = winHeight + "px"

// Window object has an evnet that is fired every time the window is resized
// Once the window is resized it will rerun the function each time
window.onresize = function() {
  winWidth = window.innerWidth
  winHeight = window.innerHeight
  div.style.width = winWidth + "px"
  div.style.height = winHeight + "px"
}
