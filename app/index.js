console.log("hello from parcel")
console.log("hello form parcel 2")

const btns = document.querySelectorAll("button")

console.log(btns)

const showMe = (e) => {
  e.target.style.backgroundColor = "rgb(100, 100, 100)"
}

btns.forEach(button => button.addEventListener("click", showMe))
