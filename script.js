

/*
Assignment:
Create Rock Paper Scissors game with 5 rounds. Have the computer randomly decide which to choose.
Record score of who wins.
*/

/*
Game plan.
Create variables for player and computer score, ask player which option they want.
*/

let player = 0;
let computer = 0;
let tie = 0;

let hand = ["rock", "paper", "scissors"];

function compHand(hand){
    let x = Math.floor(Math.random() * 3);
    return hand[x];
}

let count = 0;
/*
5 round game
*/
while(count < 5){

    let choice = prompt("Rock, Paper or Scissors?");

    choice = choice.toLowerCase();

    let compChoice = compHand(hand);

    switch(choice) {
        case "rock":
            alert("You chose Rock.");
            if(compChoice == "scissors"){
                player++;
                alert("Computer rolled Scissors, you rocked him! Point to Player!");
            }
            else if(compChoice == "paper"){
                computer++;
                alert("Computer rolled Paper, thats a wrap! Point to Computer!");
            }
            else {
                tie++;
                alert("Computer rolled Rock, are you guys rocking it or what?");
            }
            break;
        case "paper":
            alert("You chose Paper.");
            if(compChoice == "scissors"){
                computer++;
                alert("Computer rolled Scissors, you're in pieces! Point to Computer!");
            }
            else if(compChoice == "paper"){
                tie++;
                alert("Computer rolled Paper, writing a book or something?");
            }
            else {
                alert("Computer rolled Rock....Sad!");
                player++;
            }
            break;
        case "scissors":
            alert("You chose Scissors.");
            if(compChoice == "scissors"){
                tie++;
                alert("Computer rolled Scissors, are you two gonna...;)");
            }
            else if(compChoice == "paper"){
                player++;
                alert("Computer rolled Paper, he's in pieces!");
            }
            else {
                alert("Computer rolled Rock, smashing!");
                computer++;
            }
            break;
        default:
            alert("You chose none and have forfeited this round to the computer, you foo!");
            computer++;
    }

    alert("Player score: " + player + "\nComputer score: " + computer + "\nTied scores: " + tie + "\nTurns left: " + (4 - count));

    count++;
}

/*
End of game stats
 */

if(player > computer){

    alert("Congratulations! You won! \nPlayer got: " + player + "\nComputer got: " + computer + "\nTied rounds: " + tie);

}

else if(computer > player){
    alert("Oof! You lost! \nPlayer got: " + player + "\nComputer got: " + computer + "\nTied rounds: " + tie);
    alert("Better luck next time!");
}
else {
    alert("A...tie? How'd you do that?! \nPlayer got: " + player + "\nComputer got: " + computer + "\nTied rounds: " + tie);
}