
var computerPlay = function(){
    let play = Math.floor(Math.random() * 3);
    switch(play){
        case 0: play = "ROCK"; break;
        case 1: play = "PAPER"; break;
        case 2: play = "SCISSORS"; break;
    }
    return play;
}

var playRound = function(){
    var cpu = computerPlay();
    var player = document.getElementById("playerSelection").value;
    var result = "";

    //Game Logic
    switch(player.toUpperCase()){
        default:
            result = "To play type \"rock\", \"paper\", or \"scissors\".";
            break;
        case "ROCK":
            switch(cpu){
                case "ROCK":
                    result = "Rock against rock; it's a tie game, try again";
                    break;
                case "PAPER":
                    result = "Paper beats rock, yeah I don't get it either. You lose though.";
                    break;
                case "SCISSORS":
                    result = "Rock beats scissors, winner!";
                    break;
            }
            break;
        case "PAPER":
            switch(cpu){
                case "ROCK":
                    result = "Paper beats rock! Don't question it, you win!!";
                    break;
                case "PAPER":
                    result = "Any more paper and we'd have a small pamplet. It's a tie";
                    break;
                case "SCISSORS":
                    result = "Your paper got sliced. You lose. ";
                    break;
            }
            break;
        case "SCISSORS":
            switch(cpu){
                case "ROCK":
                    result = "A rock smashed your scissors. You lose.";
                    break;
                case "PAPER":
                    result = "Snippity dippity. You have the victory";
                    break;
                case "SCISSORS":
                    result = "Tie game, better look away.";
                    break;
            }                     
            break;

    }
    
    document.getElementById("result").innerHTML = result;
    
}

