let colors = [
    "orange",
    "red",
    "green",
    "blue",
    "yellow",
]

let colorList = document.getElementById("list")

for(var i = 0; i< colors.length; i++){
    let newColor = document.createElement("h2")
    newColor.textContent = colors[i]
    colorList.append(newColor)
    newColor.style.fontSize = "20px"
    newColor.style.fontWeight = "lighter"
    newColor.style.fontFamily = "sans-serif"
    newColor.style.color = "cornflowerblue"
}
    document.querySelector("list").classList.add("new-class")


// 1. Create a new folder with an html, css, and js file (Hint: Make sure the html file is linked to the css and js file)
// 2. In the JS file, create a list of 5 H2 elements on the DOM using a for loop (Hint: this was covered in the previous assignment). Give them whatever text you would like.
// 3. Using the .style property, edit the element’s styles in your js to have:


// Font-size: 20px
// Font-weight: lighter
// Font-family: sans-serif
// Color: cornflowerblue


// 4. Go to your CSS file and create a class called .border that has:


// 2px solid black border,
// 5px padding
// 5px margin


// 5. Back in your JS, add that class to the elements being created using classList.