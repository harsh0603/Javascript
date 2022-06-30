
var randomNumber = Math.random();
randomNumber =randomNumber*6;
randomNumber = Math.floor(randomNumber)+1;

var image = "images/dice"+randomNumber+".png";
document.querySelector(".dice1").setAttribute("src", image);

// this is for the second dice
var randomNumber2 = Math.random();
randomNumber2 =randomNumber2*6;
randomNumber2 = Math.floor(randomNumber2)+1;

var image = "images/dice"+randomNumber2+".png";
document.querySelector(".dice2").setAttribute("src", image);


// if(randomNumber===1){
//     document.querySelector(".dice1").setAttribute("src", "images/dice1.png");
// }else if(randomNumber===2){
//     document.querySelector(".dice1").setAttribute("src", "images/dice2.png");

// }else if(randomNumber===3){
//     document.querySelector(".dice1").setAttribute("src", "images/dice3.png");

// }else if(randomNumber===4){
//     document.querySelector(".dice1").setAttribute("src", "images/dice4.png");

// }else if(randomNumber===5){
//     document.querySelector(".dice1").setAttribute("src", "images/dice5.png");

// }else{
//     document.querySelector(".dice1").setAttribute("src", "images/dice6.png");

// }




if(randomNumber>randomNumber2){
    document.querySelector("h1").innerHTML = " Player 1 wins";
}else if(randomNumber<randomNumber2){
    document.querySelector("h1").innerHTML = " Player 2 wins";
}else{
    document.querySelector("h1").innerHTML = " Both Tie";
}