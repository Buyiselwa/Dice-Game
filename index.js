var randomNumber1 = Math.floor(Math.random()*6 + 1);
var randomDice = "images/dice" + randomNumber1 + ".png";
var Image1 = document.querySelector(".img1");
Image1.setAttribute("src", randomDice);
var randomNumber2 = Math.floor(Math.random()*6 + 1);
var randomDice2 = "images/dice" + randomNumber2 + ".png";
document.querySelector(".img2").setAttribute("src", randomDice2);

if (randomNumber1 > randomNumber2) {
  document.querySelector(".title").textContent = "Player 1 won!";
}
else if (randomNumber1 < randomNumber2) {
  document.querySelector(".title").textContent = "Player 2 won!";
}
else {
  document.querySelector(".title").textContent = "Draw!";
}
