var Player1 = prompt("Name ");

var Player2 = prompt("Name ");



var randomNumber1 = Math.floor(Math.random()*6+1);


var randomDiceİmage = "dice"+randomNumber1+".png";

var randomImageSource = "images/"+randomDiceİmage;

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSource);

var randomNumber2 = Math.floor(Math.random()*6+1);

var randomDiceİmage = "dice"+randomNumber2+".png";

var randomImageSource = "images/"+randomDiceİmage;

var image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src",randomImageSource);


if (randomNumber1>randomNumber2){

message = document.querySelectorAll("h1")[0];

message.innerHTML = Player1 + " Wins";
}


else if (randomNumber1 < randomNumber2){
message = document.querySelectorAll("h1")[0];

message.innerHTML = Player2 + " Wins";


}


else{
message = document.querySelectorAll("h1")[0];

message.innerHTML = "Draw";


}
