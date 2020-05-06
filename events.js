// https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events
// Events are actions or occurrences that happen in the system you are programming
// which tells you about so you can respond to them in some way fi desired.
//  * the system produces or fires a signal when an even occurs
//  * it provides a mechanism of action can be automatically taken -> run a function
//  * in web events are fired inside the browser window and tend to be attached to a specific item that resides in it e.g. a single element, set of elements, html document loaded
//  * types of events
//    * user clicks on a mouse
//    * user presses a key
//    * user resizes a window
//    * webpage finished to load
//    * form being submitted
//    * video being played
//  * each event has an event handler, which is a block of code that will be run when the event fires
//  * registering an event handler is attaching a block of code to a specific event
//  * event handlers === event listeners
//  * listener listens out for the event and the handler is the code that is run in response to it happening
//  Web events are not part of the core JS language - they are defined as part of the APIs built into the browser
//  <button>Change color</button>

// store the reference to the button
const btn = document.querySelector("button")

function random(number) {
  return Math.floor(Math.random() * (number+1))
}

// registering onclick handler
btn.onclick = function() {
  const rndCol = "rgb(" + random(255) + "," + random(255) + "," + random(255) + ")"
  document.body.style.backgroundColor = rndCol
}

// other types of events
// btn.onfocus -> button is focused
// btn.onblur -> press tab to select a button
// btn.ondblclick
// window.onkeypress, window.onkeydown, window.onkeyup -> when a key pressed
// btn.onmouseover and btn.onmouseout -> mouse pointer is moved over the button

// Don't use inline event handlers
// <button onclick="bgChange()">Press me</button>
// It is not a good idea to mix up your HTML and your JS as it becomes hard to parse

function bgChange() {
  const rndCol = "rgb(" + random(255) + "," + random(255) + "," + random(255) + ")"
  document.body.style.backgroundColor = rndCol
}

// You can easily add an event handler function to all the buttons on the page

const buttons = document.querySelectorAll("button")

buttons.forEach(button => {button.onclick = bgChange})

// The newest type of event mechanism is defined in DOM level 2
const btn = document.querySelector("button")


function bgChange() {
  const rndCol = "rgb(" + random(255) + "," + random(255) + "," + random(255) + ")"
  document.body.style.backgroundColor = rndCol
}

btn.addEventListener("click", bgChange)

// use removeEventListener to remove the listener 
btn.removeEventListener("click", bgChange)

// You should use the addEventListener variants because
//  * you can remove event listeners of the same type
//  * or you can add multiple listeners of the same type 

// Event objects
// Inside a function you might see a parameter `e or evt or event`
//  -> function bgChange(e) {}
//  This is called the object event and it automatically passed to event handlers

function bgChange(e) {
  const rndCol = "rgb(" + random(255) + "," + random(255) + "," + random(255) + ")"
  e.target.style.backgroundColor = rndCol
  console.log(e)
}

btn.addEventListener("click", bgChange)

// The target property of the event object is always a refernce to the element that the event has just occured upon
//  * In this example we are setting the random background color on the button, and not the page
//  * e.target is useful when you want to set the same event handler on multiple elements and do something to all of them when an event occurs on them

const divs = document.querySelectorAll("div")

divs.forEach(div => div.onclick = function (e) {e.target.style.backgroundColor = bgChange()})

// https://developer.mozilla.org/en-US/docs/Web/API/Event

const form = document.querySelector("form")
const fname = document.getElementById("fname")
const lname = document.getElementById("lname")
const para = document.querySelector("p")

form.onsubmit = (e) => {
  if (fname.value === "" || lname.value === "") {
    e.preventDefault()
    para.textContent = "You need to fill in both names"
  }
}

// <div class="hidden">....</div>

const vbox = document.getElementsByClassName("hidden")
vbox.setAttribute("class", "showing")
