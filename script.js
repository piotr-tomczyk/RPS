function Start(){
    var player_score = 0;
    var computer_score = 0;
    console.log("THIS IS ROCK, PAPER, SCISSORS GAME !!! \n");
    console.log("YOU WILL BE PLAYING AGAINST THE COMPUTER !!! \n")
    console.log("------------------------------ \n");
    var choice = prompt("PRESS ANY KEY AND THEN ENTER TO START !!!");
    UI(player_score, computer_score);
}
function DrawSign(){
    var min = 1;
    var max = 3;
    return Math.floor(Math.random()*(max));
}
function Exit(player_score, computer_score){
    console.log("FINAL SCORE !!! \n");
    console.log("PLAYER SCORE: " + player_score + "\n");
    console.log("COMPUTER SCORE: " + computer_score + "\n");
    console.log("------------------------------ \n");
    if (player_score > computer_score){
        console.log("PLAYER WINS !!! \n")
    }
    else if (computer_score > player_score){
        console.log("COMPUTER WINS !!! \n");
    }
    else if (computer_score == player_score){
        console.log("DRAW !!! \n");
    }
    console.log("------------------------------ \n");
    return;
}
function UI(player_score, computer_score){
    console.log("CURRENT SCORE \n");
    console.log("PLAYER SCORE: " + player_score + "\n");
    console.log("COMPUTER SCORE: " + computer_score + "\n");
    console.log("------------------------------ \n");
    console.log("TYPE q, THEN ENTER TO EXIT !!! \n TYPE ANY OTHER KEY, THEN ENTER TO CONTINUE !!! \n");
    console.log("------------------------------ \n");
    var choice = prompt();
    if (choice == "q"){
        Exit(player_score, computer_score);
        return;
    }
    else{
        Round(player_score, computer_score);
    }
}
function Round(player_score, computer_score){
    var RPS = ['ROCK', 'PAPER', 'SCISSORS'];
    var valid = true;
    while(valid){
        console.log("PRESS 1 FOR STONE \n");
        console.log("PRESS 2 FOR PAPER \n");
        console.log("PRESS 3 FOR SCISSORS \n");
        var player_pick = prompt();
        if (player_pick == "1" || player_pick == "2" || player_pick == "3"){
            valid = false;
        }
        else{
            valid = true;
        }
    }
    var player_pick = parseInt(player_pick) - 1;
    var computer_pick = DrawSign();
    console.log(RPS[player_pick] + " VS. " + RPS[computer_pick] + "\n");
    console.log("------------------------------ \n");
    if (player_pick == 0){
        if(computer_pick == 0){
            console.log("DRAW !!! \n")
            console.log("EVERYBODY GETS A POINT !!! \n")
            computer_score ++;
            player_score ++;
        }
        if(computer_pick == 1){
            console.log("COMPUTER WINS !!! \n")
            computer_score ++;
        }
        if(computer_pick == 2){
            console.log("PLAYER WINS !!! \n")
            player_score ++;
        }
    }
    if (player_pick == 1){
        if(computer_pick == 0){
            console.log("PLAYER WINS !!! \n")
            player_score ++;
        }
        if(computer_pick == 1){

            console.log("DRAW !!! \n")
            console.log("EVERYBODY GETS A POINT !!! \n")
            computer_score ++;
            player_score ++;
        }
        if(computer_pick == 2){
            console.log("COMPUTER WINS !!! \n")
            computer_score ++;
        }
    }
    if (player_pick == 2){
        if(computer_pick == 0){
            console.log("COMPUTER WINS !!! \n")
            computer_score ++;
        }
        if(computer_pick == 1){
            console.log("PLAYER WINS !!! \n")
            player_score ++;
        }
        if(computer_pick == 2){
            console.log("DRAW !!! \n")
            console.log("EVERYBODY GETS A POINT !!! \n")
            computer_score ++;
            player_score ++;
        }
    }
    console.log("------------------------------ \n")
    UI(player_score, computer_score);
}
Start();