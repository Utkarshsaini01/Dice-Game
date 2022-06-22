// random numbers 1-6
var dice1 =  Math.floor(Math.random()*6) + 1;
var dice2 =  Math.floor(Math.random()*6) + 1;

// if player 1 Wins

if(dice1 > dice2){
  document.querySelector("h1").innerHTML="🚩Player 1 Wins!";
}

// if Draw
else if(dice1 < dice2){
  document.querySelector("h1").innerHTML="Player 2 Wins!🚩";
}

// if player 2 wins
else{
  document.querySelector("h1").innerHTML="Draw!";
}

// for first Dice
var diceImg = "dice"+dice1+".png"; //dice1.png - dice6.png
var randomImageSrc = "images/"+diceImg; //images/dice1.png - images/dice6.png
var img1 = document.querySelectorAll("img")[0];
img1.setAttribute("src", randomImageSrc);

// for second Dice
var diceImg2 = "dice"+dice2+".png";
var randomImageSrc2 = "images/"+diceImg2;
var img2 = document.querySelectorAll("img")[1];
img2.setAttribute("src", randomImageSrc2);
