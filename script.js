function DrawSign(){
    var max = 3;
    return Math.floor(Math.random()*(max));
}
function Start(){
    var player_score = 0;
    var computer_score = 0;
    var round_count = 5;
    const game_info = document.querySelector('#game_info');
    game_info.textContent = "THIS IS ROCK, PAPER, SCISSORS GAME !!! \n YOU WILL BE PLAYING AGAINST THE COMPUTER !!!";
    game_info.style.cssText = "font-size: 30px; font-weight: bold; text-align: center";
    UI(player_score, computer_score, round_count);
}
function UI(player_score, computer_score, round_count){
    const score_content = document.querySelector('#score-content');
    const round_info = document.querySelector('#round-info');
    if (round_count == 0){
        score_content.textContent = player_score + " vs. " + computer_score;
        Exit(player_score, computer_score);
        return;
    }
    else{
        round_info.textContent = "ROUND " + (6 - round_count) + "/5";
        score_content.textContent = player_score + " vs. " + computer_score;
        Round(player_score, computer_score, round_count);
    }
}
function Exit(player_score, computer_score){
    const div1 = document.querySelector("#one");
    const div2 = document.querySelector("#two");
    const div3 = document.querySelector("#three");
    if (player_score > computer_score){
        div1.textContent = "FINAL SCORE !!!";
        div2.textContent = "PLAYER SCORE: " + player_score + "!!! COMPUTER SCORE: " + computer_score + " !!!";
        div3.textContent = "PLAYER WINS !!!";
    }
    else if (computer_score > player_score){
        div1.textContent = "FINAL SCORE !!!";
        div2.textContent = "PLAYER SCORE: " + player_score + "!!! COMPUTER SCORE: " + computer_score;
        div3.textContent = "COMPUTER WINS !!!";
    }
    else if (computer_score == player_score){
        div1.textContent = "FINAL SCORE !!!";
        div2.textContent = "PLAYER SCORE: " + player_score + "!!! COMPUTER SCORE: " + computer_score + " !!!";
        div3.textContent = "DRAW !!!";
    }
    const hidden = document.querySelector('#hidden');
    const rock = document.querySelector("#rock");
    const paper = document.querySelector("#paper");
    const scissors = document.querySelector("#scissors");
    const buttons = document.querySelector("#buttons");
    if(window.screen.width > 500)
        buttons.style.cssText = "padding-right:6%"
    else
        buttons.style.cssText = "padding-right:20%"
    rock.style.cssText = "display: none";
    paper.style.cssText = "display: none";
    scissors.style.cssText = "display: none";
    hidden.style.cssText = "display: block;";
    hidden.addEventListener('click', function (){
        div1.textContent = "";
        div2.textContent = "";
        div3.textContent = "";
        rock.style.cssText = "display: block";
        paper.style.cssText = "display: block";
        scissors.style.cssText = "display: block";
        hidden.style.cssText = "display: none";
        buttons.style.cssText = "padding-right:0%"
        Start();
    })
}
function Round(player_score, computer_score, round_count){
    var player_pick = 0;
    var lock = false;
    const rock = document.querySelector("#rock");
    const paper = document.querySelector("#paper");
    const scissors = document.querySelector("#scissors");
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
    const div = document.querySelector('#two');
    const div1 = document.querySelector('#three');
    const div2 = document.querySelector('#one');
    div2.textContent = RPS[player_pick] + " VS. " + RPS[computer_pick];
    div2.style.color = "red";
    if (player_pick == 0){
        if(computer_pick == 0){
            div.textContent = "DRAW !!!";
            div1.textContent = "EVERYBODY GETS A POINT !!!";
            computer_score ++;
            player_score ++;
        }
        if(computer_pick == 1){
            div1.textContent = "COMPUTER WINS !!!";
            computer_score ++;
        }
        if(computer_pick == 2){
            div1.textContent = "PLAYER WINS !!!";
            player_score ++;
        }
    }
    if (player_pick == 1){
        if(computer_pick == 0){
            div1.textContent = "PLAYER WINS !!!";
            player_score ++;
        }
        if(computer_pick == 1){
            div.textContent = "DRAW !!!";
            div1.textContent = "EVERYBODY GETS A POINT !!!";
            computer_score ++;
            player_score ++;
        }
        if(computer_pick == 2){
            div1.textContent = "COMPUTER WINS !!!";
            computer_score ++;
        }
    }
    if (player_pick == 2){
        if(computer_pick == 0){
            div1.textContent = "COMPUTER WINS !!!";
            computer_score ++;
        }
        if(computer_pick == 1){
            div1.textContent = "PLAYER WINS !!!";
            player_score ++;
        }
        if(computer_pick == 2){
            div.textContent = "DRAW !!!";
            div1.textContent = "EVERYBODY GETS A POINT !!!";
            computer_score ++;
            player_score ++;
        }
    }
    round_count--;
    UI(player_score, computer_score, round_count);
}
Start();