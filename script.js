var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var random1 = document.querySelector(".random1");
var random2 = document.querySelector(".random2");


function setGradient() {
    body.style.background = 
    "linear-gradient(to right, " 
    + color1.value 
    + "," 
    + color2.value 
    + ")";
    css.textContent = body.style.background + ";"
}

color1.addEventListener("input", setGradient)

color2.addEventListener("input", setGradient)

// var randomColor1 = function() {
//     var letters = '0123456789ABCDEF';
//     var color = '#';
//     for (var i = 0; i < 6; i++) {
//         color += letters[Math.floor(Math.random() * 16)]
//     }
//     color1.value = color; 
//     setGradient();

// }

// var randomColor2 = function() {
//     var letters = '0123456789ABCDEF';
//     var color = '#';
//     for (var i = 0; i < 6; i++) {
//         color += letters[Math.floor(Math.random() * 16)]
//     }
//     color2.value = color; 
//     setGradient();
// }

// random1.addEventListener("click", randomColor1)
// random2.addEventListener("click", randomColor2)

function randomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)]
    }
    return color;
}

function randomBackground() {
    color1.value = randomColor();
    color2.value = randomColor();
    setGradient();
}


random1.addEventListener("click", randomBackground)
// random2.addEventListener("click", randomColor2)