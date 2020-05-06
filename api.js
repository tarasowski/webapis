// API is an abstraction over implementation in -> out
// API is an interface to something

// Browser APIs are built into your web browser and are able to expose data from the browser
//  * Example: Web Audio API provides JS construct for manipulating audio in the browser - taking an audio track, altering its volume applying effects to it, etc. In the background the browser is actually using some complex lower-level code (C++) to do the actual audio processing.

// What can APIs do?
// There are numbers of APIs available in modern browsers that allow to do various things
//  * DOM API for manipulating documents loaded into browser. Allows you to manipulate HTML and CSS, creating, removing and chaning HTML
//  * Fetch API for fetching data from the server. It allows to update data without reloading the whole entire page 
//  * Canvas & WebGL API allow programmatically update the pixel data contained in an HTML canvas element to create 2D and 3D scenes.
//  * Audio and Video APIs: allow to do things with multimedia such as creating custom UI control for playing audio and video, displaying text tracks like captions and subtitles or adding effects to audio tracks
//  * Device APIs allow to manipulate and retrieve data from modern device hardware e.g. system notifications or vibration hardware
//  * Client-side storage API allow to store data on the client-side that saves state beteen page loads and work when the device is offline

//  How do APIs work?
//  Your code interacts with APIs using one or more JS objects, which serve as containers for the data the API uses (contained in object properties), and the functionality the API makes available (contained in object methods)
//  An object is a collection of related data and functionality (which consists of variables and functions which are called properties and methods when they are inside objects).

// AudioContext represents an graph that can be used to manipulate audio playing inside the browser
//  * it has number of methods and properties available to manipulate that audio
const AudioContext = window.AudioContext || window.webkitAudioContext;
const audioCtx = new AudioContext()
const audioElement = document.querySelector("audio")
const audioSource = audioCtx.createMediaElementSource(audioElement);
// ....
//
// When using an API, you should make sure you know where the entry point is for the API. 
// Web Audio API: this is simple its the AudioContext object, which needs to be used to do any audito manipulation
// DOM API has an entry point in the Document object or an instance of an HTML element that you want to affect in some way

const em = document.createElement("em")
const para = document.querySelector("p")
em.textConent = "Hello there"
para.appendChild(em)

// Some APIs use events to handle changes in state
// XMLHttpRequest object has a number of events available on them for example `load` event is fired when a response has been returned and is now available

// The lines below create a new instance of a request object using XMLHttpRequest() constructor
let requestUrl = "http://...."
let request = new XMLHttpRequest()
request.open("GET", requestUrl)
request.responseType = "json"
request.send()

// The `onload` handler specivies what we want to do with the response
request.onload = function () {
  const superHeroes = request.response
  populateHeader(superHeroes)
  showHeroes(superHeroes)
}

// Source: https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/



