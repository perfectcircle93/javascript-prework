function getMoveName(randomNumber){
  if(randomNumber == 1){
    return 'kamień';
} if(randomNumber == 2){
    return 'papier';
} if(randomNumber == 3){
    return 'nożyce';
} else {
  printMessage('Nie znam ruchu o id ' + randomNumber + '.');
  return 'nieznany ruch';
}
}

//Computer pick

let randomNumber = Math.floor(Math.random() * 3 + 1);

console.log('Wylosowana liczba to: ' + randomNumber);

let computerMove = getMoveName(randomNumber);

/*if(randomNumber == 1){
  computerMove = 'kamień';
} else if(randomNumber == 2){
  computerMove = 'papier';
} else if(randomNumber == 3){
  computerMove = 'nożyce';
}*/

printMessage('Mój ruch to: ' + computerMove);

//Player move

let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

console.log('Gracz wpisał: ' + playerInput);

let playerMove = getMoveName(randomNumber);

/*if(playerInput == '1'){
  playerMove = 'kamień';
} else if(playerInput == '2'){
  playerMove = 'papier';
} else if(playerInput == '3'){
  playerMove = 'nożyce';
}*/

printMessage('Twój ruch to: ' + playerMove);

//Rounds

if(computerMove == playerMove){
  printMessage('Remis');
} else if(computerMove == 'kamień' && playerMove == 'papier'){
  printMessage('Wygrywa komputer');
} else if(computerMove == 'kamień' && playerMove == 'nożyce'){
  printMessage('Wygrywa komputer');
} else if(computerMove == 'papier' && playerMove == 'kamień'){
  printMessage('Ty Wygrywasz!');
} else if(computerMove == 'papier' && playerMove == 'nożyce'){
  printMessage('Ty wygrywasz!');
} else if(computerMove == 'nożyce' && playerMove == 'kamień'){
  printMessage('Ty wygrywasz!');
} else if(computerMove == 'nożyce' && playerMove == 'papier'){
  printMessage('Wygrywa komputer');
} else if(playerMove == 'nieznany ruch'){
  printMessage('Spróbuj ponownie');
}
