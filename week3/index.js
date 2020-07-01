let helloList = document.createElement("hello")
helloList.textContent = "Hello World"
let header = document.getElementById("hello") ;
header.append(helloList)



for (let i = 0; i <10; i++){
let helloList = document.createElement("hello") 
helloList.textContent = "Hello World"
let header = document.getElementById("hello") 
header.append(helloList) 
document.getElementById("hello").style.backgroundColor = "red";
}



const names = ["steve", "larry", "joe”, “shirley”, “steph”, “nate”, “rick”, “emily"]

let nameList = document.getElementById("names")

for (var i = 0; i < names.length; i++){
    const allNames = document.createElement("li")
    allNames.textContent = names[i]
    nameList.append(allNames) + "<br>"
}



// 1. Create a new directory with an html and js file, then link them together.
// 2. Create an H1 tag with the text “Hello World”, and append it to the DOM (test and make sure it is showing up on the website)
// 3. Create a for-loop, repeat this process 10 times so that 10 H1’s with the text “Hello World” show up when the website is visited.
// 4. Add some style to the H1's in Step 3.
// 5. Create a new array using the following information:

 

// const names = [“steve”, “larry”, “joe”, “shirley”, “steph”, “nate”, “rick”, “emily”]


// 6. Create a for loop that iterates through the array in Step 5.