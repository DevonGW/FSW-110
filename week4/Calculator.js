document.getElementById("addition").style.backgroundColor = "pink";
document.getElementById("addition").style.padding = "70px 70px 70px 70px";
document.getElementById("addition").style.margin = "50px 20px 10px 30px";


document.getElementById("subtraction").style.backgroundColor = "Aqua";
document.getElementById("subtraction").style.padding = "70px 70px 70px 70px";
document.getElementById("subtraction").style.margin = "50px 20px 10px 30px";

document.getElementById("multiplication").style.backgroundColor = "Chartreuse";
document.getElementById("multiplication").style.padding = "70px 70px 70px 70px";
document.getElementById("multiplication").style.margin = "50px 20px 10px 30px";



function calc()
{
    var n1 = parseFloat(document.getElementById('n1').value);
    var n2 = parseFloat(document.getElementById('n2').value);
    
    var oper = document.getElementById('operators').value;
    
    if(oper === '+')
    {
        document.getElementById('result').value = n1+n2;
    };

    
    
    if(oper === '-')
    {
        document.getElementById('result').value = n1-n2;
    }
    
    
    if(oper === 'X')
    {
        document.getElementById('result').value = n1*n2;
    }
}




// You will have one section (<div>) for each math operation (so 3 sections) total
// Each section has two inputs to take the first and second numbers
// Each section will have a button to perform the operation
// You will inject the result into the HTML (not an alert)
// Your website will have 3 colors
// Your website will have proper padding/spacing to lay things out nicely.  m,mmm