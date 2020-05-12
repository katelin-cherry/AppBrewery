var randomNumber1=Math.random();
randomNumber1=Math.floor(randomNumber1*6)+1;
var imageNumberLeft="images/dice"+randomNumber1+".png";
var imageNameLeft=document.querySelector("img.img1").setAttribute("src", imageNumberLeft);

var randomNumber2=Math.random();
randomNumber2=Math.floor(randomNumber2*6)+1;
var imageNumberRight="images/dice"+randomNumber2+".png";
var imageNameRight=document.querySelector("img.img2").setAttribute("src", imageNumberRight);
//var imageRight=document.querySelector("img.img2");
//imageRight.setAttribute("src",imageNumberRight)


if (randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML="🚩Player 1 Wins"
}
else if (randomNumber1<randomNumber2){
    document.querySelector("h1").innerHTML="Player 2 Wins 🚩"
}
else if (randomNumber1==randomNumber2){
    document.querySelector("h1").innerHTML="Draw"
}
