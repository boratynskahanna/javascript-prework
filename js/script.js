const buttonRock = document.getElementById('play-rock');
const buttonPaper = document.getElementById('play-paper');
const buttonScissors = document.getElementById('play-scissors');
const resultHTML = document.getElementById('result');

const result = {
    computer: 0,
    player: 0
}

const playGame = function(playerMove){
    const randomNumber = Math.floor(Math.random() * 3 + 1);
    const computerMove = getMoveName(randomNumber);

    clearMessages();
    printMessage('Twój ruch to: ' + playerMove);
    printMessage('Mój ruch to: ' + computerMove);
    displayResult(computerMove, playerMove);
}

// Move Function
const getMoveName = function(argMoveId) {
    if (argMoveId === 1) {
        return 'kamień';
    } else if (argMoveId === 2) {
        return 'papier';
    } else if (argMoveId === 3) {
        return 'nożyce';
    } else {
        printMessage(`Nie znam ruchu o id ${argMoveId}.`);
        return 'nieznany ruch';
    }
}

// Display Result Function
const displayResult = function(argComputerMove, argPlayerMove) {
    printMessage(`Zagrałem ${argComputerMove}, a Ty ${argPlayerMove}`);
    if (argComputerMove === 'kamień' && argPlayerMove === 'papier') {
        showResult('player');
    } else if (argComputerMove === 'nożyce' && argPlayerMove === 'kamień') {
        showResult('player');
    } else if (argComputerMove === 'papier' && argPlayerMove === 'nożyce') {
        showResult('player');
    } else if (argComputerMove === argPlayerMove) {
        showResult('draw')
    } else {
        showResult('computer');
    }
}

const showResult = function(winner) {
    if (winner === 'computer') {
        result.computer++;
        printMessage('Komputer wygrywa!');
    } else if (winner === 'player') {
        result.player++;
        printMessage('Ty wygrywasz!');
    } else if (winner === 'draw') {
        printMessage('Remis!');
    }
    resultHTML.innerText = `Computer: ${result.computer}, Player: ${result.player}`;
}
    
buttonRock.addEventListener('click', function() {
    playGame('kamień');
});

buttonPaper.addEventListener('click', function() {
    playGame('papier');
});

buttonScissors.addEventListener('click', function() {
    playGame('nożyce');
});
