var randomvar1 = Math.random()*6;
randomvar1 = Math.floor(randomvar1)+1;
var randomvar2 = Math.random()*6;
randomvar2 = Math.floor(randomvar2)+1;

if(randomvar1 == randomvar2){
    document.querySelector("h1").innerHTML= "Draw";
}

else if(randomvar2 > randomvar1){
    document.querySelector("h1").innerHTML= "Player2 Wins";
}

else if(randomvar1 > randomvar2){
    document.querySelector("h1").innerHTML= "Player1 Wins";
}



//if random var is equal to one then the below is displayed the same is followed for each one

if (randomvar1 === 1 ){
     document.querySelector(".img1").setAttribute("src","images/dice1.png");
     
}
if( randomvar2 === 1){
    document.querySelector(".img2").setAttribute("src","images/dice1.png");
    
}




if (randomvar1 === 2){
    document.querySelector(".img1").setAttribute("src","images/dice2.png");
   
}
if( randomvar2 === 2){
    document.querySelector(".img2").setAttribute("src","images/dice2.png");
    
}




if (randomvar1 == 3){
    document.querySelector(".img1").setAttribute("src","images/dice3.png")
   
}
if( randomvar2 == 3){
    document.querySelector(".img2").setAttribute("src","images/dice3.png");
    
}



if (randomvar1 == 4){
    document.querySelector(".img1").setAttribute("src","images/dice4.png")
    
}
if( randomvar2 == 4){
    document.querySelector(".img2").setAttribute("src","images/dice4.png");
    
}




if (randomvar1 == 5){
    document.querySelector(".img1").setAttribute("src","images/dice5.png")
}
if( randomvar2 == 5){
    document.querySelector(".img2").setAttribute("src","images/dice5.png");
    
}



if (randomvar1 === 6){
     document.querySelector(".img1").setAttribute("src","images/dice6.png")
}
if( randomvar2 === 6){
    document.querySelector(".img2").setAttribute("src","images/dice6.png");
    
}
