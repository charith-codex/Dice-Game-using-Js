//player1
var randomNumber1 = Math.floor(Math.random() * 6) + 1; //1-6

var randomImage = "dice" + randomNumber1 + ".png";  //dice1.png - dice6.png
var randomImageSource = "images/" + randomImage;

var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImageSource);


//player2
var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomImageSource2 = "images/dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);;


//Won message
if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 1 Won";
} else if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 2 Won";
} else {
    document.querySelector("h1").innerHTML = "Draw";
}


