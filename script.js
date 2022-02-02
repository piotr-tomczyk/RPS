function DrawSign(){
    var max = 3;
    return Math.floor(Math.random()*(max));
}
function Start(){
    var player_score = 0;
    var computer_score = 0;
    var round_count = 5;
    alert("THIS IS ROCK, PAPER, SCISSORS GAME !!! \n YOU WILL BE PLAYING AGAINST THE COMPUTER !!!");
    UI(player_score, computer_score, round_count);
}
function UI(player_score, computer_score, round_count){
    const score = document.querySelector('#score');
    const round_info = document.querySelector('#round-info');
    if (round_count == 0){
        score.textContent = player_score + " vs. " + computer_score;
        Exit(player_score, computer_score);
        return;
    }
    else{
        round_info.textContent = "ROUND " + (6 - round_count) + "/5";
        score.textContent = player_score + " vs. " + computer_score;
        Round(player_score, computer_score, round_count);
    }
}
function Exit(player_score, computer_score){
    if (player_score > computer_score){
        alert("FINAL SCORE !!! \n PLAYER SCORE: " + player_score + "\n COMPUTER SCORE: " + computer_score + "\n PLAYER WINS !!!");
    }
    else if (computer_score > player_score){
        alert("FINAL SCORE !!! \n PLAYER SCORE: " + player_score + "\n COMPUTER SCORE: " + computer_score + "\n COMPUTER WINS !!!");
    }
    else if (computer_score == player_score){
        alert("FINAL SCORE !!! \n PLAYER SCORE: " + player_score + "\n COMPUTER SCORE: " + computer_score + "\n DRAW !!!");
    }
    Start();
    return;
}
function Round(player_score, computer_score, round_count){
    var player_pick = 0;
    var lock = false;
    var rock = document.querySelector("#rock");
    var paper = document.querySelector("#paper");
    var scissors = document.querySelector("#scissors");
    rock.addEventListener('click', function (){
        if(!lock){
            player_pick = 0;
            lock = true;
            ContinueRound(player_score, computer_score, round_count, player_pick);
        }
    });
    paper.addEventListener('click', function (){
        if(!lock){
            player_pick = 1;
            lock = true;
            ContinueRound(player_score, computer_score, round_count, player_pick);
        }
    });
    scissors.addEventListener('click', function (){
        if(!lock){
            player_pick = 2;
            lock = true;
            ContinueRound(player_score, computer_score, round_count, player_pick);
        }
    });
}
function ContinueRound(player_score, computer_score, round_count, player_pick){
    var RPS = ['ROCK', 'PAPER', 'SCISSORS'];
    var computer_pick = DrawSign();
    alert(RPS[player_pick] + " VS. " + RPS[computer_pick]);
    if (player_pick == 0){
        if(computer_pick == 0){
            alert("DRAW !!! \n EVERYBODY GETS A POINT !!!");
            computer_score ++;
            player_score ++;
        }
        if(computer_pick == 1){
            alert("COMPUTER WINS !!! \n");
            computer_score ++;
        }
        if(computer_pick == 2){
            alert("PLAYER WINS !!! \n");
            player_score ++;
        }
    }
    if (player_pick == 1){
        if(computer_pick == 0){
            alert("PLAYER WINS !!! \n");
            player_score ++;
        }
        if(computer_pick == 1){

            alert("DRAW !!! \n EVERYBODY GETS A POINT !!!")
            computer_score ++;
            player_score ++;
        }
        if(computer_pick == 2){
            alert("COMPUTER WINS !!! \n")
            computer_score ++;
        }
    }
    if (player_pick == 2){
        if(computer_pick == 0){
            alert("COMPUTER WINS !!! \n")
            computer_score ++;
        }
        if(computer_pick == 1){
            alert("PLAYER WINS !!! \n")
            player_score ++;
        }
        if(computer_pick == 2){
            alert("DRAW !!! \n EVERYBODY GETS A POINT !!!")
            computer_score ++;
            player_score ++;
        }
    }
    round_count--;
    UI(player_score, computer_score, round_count);
}
Start();