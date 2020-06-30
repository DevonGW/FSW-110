let newH1 = document.createElement("nh1");
newH1.textContent = "Welcome To My JS Site"
let header = document.getElementById("nh1") ;
header.append(newH1)

let newP = document.createElement("p")
newP.textContent = "Lorem Ipsum Lorem Ipsum Lorem Ipsum"
document.body.prepend(newP)

let newLi = document.createElement("li");
newLi.textContent = "headphones, radio, water, food, shoes"
let myList = document.getElementById("list") ;
myList.append(newLi)




// Create a new html and js file, then link them together.
// In the js file, create the following elements and append them to the DOM so they show up when the website is visited.
// H1 with the text “Welcome to my JS site”
// P wit the text “All of this was created with Javascript”
// An Ordered list (ol) with at least three items (li).
// Each li should also display text.
// Remember, you will need to first add the li’s to the ol before putting the ol on the DOM.
