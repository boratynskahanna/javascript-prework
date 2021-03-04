let buttonRock = document.getElementById('play-rock');
let buttonPaper = document.getElementById('play-paper');
let buttonScissors = document.getElementById('play-scissors');


function playGame(playerMove){
    clearMessages();

console.log('Gracz wpisał: ' + playerMove);
printMessage('Twój ruch to: ' + playerMove);

let randomNumber = Math.floor(Math.random() * 3 + 1);
console.log('Wylosowana liczba to: ' + randomNumber);
let computerMove = getMoveName(randomNumber);
printMessage('Mój ruch to: ' + computerMove);

displayResult(computerMove, playerMove);
}



// Move Function
function getMoveName(argMoveId){
    console.log('wywołano funkcję getMoveName z argumentem: ' + argMoveId);
    if(argMoveId == 1){
        return 'kamień';
    }   else if(argMoveId == 2) {
        return 'papier';
    }   else if(argMoveId == 3) {
        return 'nożyce';
    }   else {
        printMessage('Nie znam ruchu o id ' + argMoveId + '.');
        return 'nieznany ruch';
    }
  }


// Display Result Function

function displayResult(argComputerMove, argPlayerMove){
    console.log('wywołano funkcję displayResults z argumentami: ' + argComputerMove + ', ' + argPlayerMove);
    printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);
    if(argComputerMove == 'kamień' && argPlayerMove == 'papier'){
        printMessage('Ty wygrywasz!');
    }   else if(argComputerMove == 'nożyce' && argPlayerMove == 'kamień'){
        printMessage('Ty wygrywasz!');
    }   else if(argComputerMove == 'papier' && argPlayerMove == 'nożyce'){
        printMessage('Ty wygrywasz!');
    }   else if(argComputerMove == argPlayerMove){
        printMessage('Remis!');
    }   else if(argPlayerMove == 'nieznany ruch'){
        printMessage('Gracz wpisał błędny numer!');
    }   else {
        printMessage('Komputer wygrywa!');
    }
}
    

buttonRock.addEventListener('click', function(){
    playGame('kamień');
  });

buttonPaper.addEventListener('click', function(){
    playGame('papier');
  });

buttonScissors.addEventListener('click', function(){
    playGame('nożyce');
  });

