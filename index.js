var count1 = 0;
var count2 = 0;

function RandomFunction(){

    // First random image
    var randomNumber1  = Math.random() * 5;
    randomNumber1  = Math.round(randomNumber1 ) + 1;

    var randomImage1 = "images/dice" + randomNumber1 + ".png";
    document.querySelectorAll("img")[0].setAttribute("src", randomImage1);  

    // Second random image
    var randomNumber2  = Math.random() * 5;
    randomNumber2  = Math.round(randomNumber2 ) + 1;

    var randomImage2 = "images/dice" + randomNumber2 + ".png";
    document.querySelectorAll("img")[1].setAttribute("src", randomImage2);
    
    // Selecting the winner
    if(randomNumber2 > randomNumber1){
        document.querySelector("h1").innerHTML = "Player 2 wins the Game!";
        count2++;
        document.querySelector(".player2").innerHTML = count2;
    }
    else if(randomNumber1 > randomNumber2){
        document.querySelector("h1").innerHTML = "Player 1 wins the Game!";
        count1++;
        document.querySelector(".player1").innerHTML = count1;
    }
    else{
        document.querySelector("h1").innerHTML = "Its a Draw!";
    }

}

function RestartFunction(){
    document.querySelectorAll("img")[0].setAttribute("src", "images/dice6.png");
    document.querySelectorAll("img")[1].setAttribute("src", "images/dice6.png");
    document.querySelector("h1").innerHTML = "Refresh Me";
    document.querySelector(".player1").innerHTML = count1;
    document.querySelector(".player2").innerHTML = count2;
    count1 = 0;
    count2 = 0;
}

function FinishFunction(){
    if(count1 > count2){
        document.querySelector("h1").innerHTML = "Player 1 Finally won the Game!";
    }
    else if(count2 > count1){
        document.querySelector("h1").innerHTML = "Player 2 Finally won the Game!";
    }
    else{
        document.querySelector("h1").innerHTML = "The Game was a Draw!";
    }
    document.querySelectorAll("img")[0].setAttribute("src", "images/dice6.png");
    document.querySelectorAll("img")[1].setAttribute("src", "images/dice6.png");
}