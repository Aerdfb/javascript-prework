function getMoveName(argMoveId){
    if(argMoveId == 1){
      return 'kamień';
    }else if(argMoveId == 2){
        return 'nożyce';
    }else if(argMoveId == 3){
        return 'papier';
    }
  
    printMessage('Nie znam ruchu o id ' + argMoveId + '.');
    return 'nieznany ruch';
  }

let randomNumber = Math.floor(Math.random() * 3 + 1);
console.log('Wylosowana liczba to: ' + randomNumber);

let computerMove = getMoveName(randomNumber)
printMessage('Mój ruch to: ' + computerMove);

let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: nożyce, 3: papier.');
console.log('Gracz wpisał: ' + playerInput);

let playerMove = getMoveName(playerInput);
printMessage('Twój ruch to: ' + playerMove);

function displayResult(argComputerMove, argPlayerMove){
    console.log('moves:', argComputerMove, argPlayerMove);
    if(argComputerMove == getMoveName('1') && argPlayerMove == getMoveName('3')){
        return 'Wygrywasz';
    }else if(argComputerMove == getMoveName('3') && argPlayerMove == getMoveName('2')){
        return 'Wygrywasz';
    }else if(argComputerMove == getMoveName('2') && argPlayerMove == getMoveName('1')){
        return 'Wygrywasz';
    }else
        return 'Przegrywasz';
    }
        
    printMessage('Wynik rundy: ' + displayResult(computerMove, playerMove))
    


// printMessage('Wynik gry:' + displayResult)



