{
  const playGame = function(playerInput) {

  /*funkcje*/
  const getMoveName = function(choiceInNumber){
    if(choiceInNumber == 1) return 'kamień';
    if(choiceInNumber == 2) return 'papier';
    if(choiceInNumber == 3) return 'nożyce';
  }

  const displayResult = function(computerMove, playerMove) {
    if(computerMove == playerMove){
      printMessage('Remis');
    } else if(
        (computerMove == 'kamień' && playerMove == 'papier') ||
        (computerMove == 'kamień' && playerMove == 'nożyce') ||
        (computerMove == 'nożyce' && playerMove == 'papier')
      ) {
        printMessage('Wygrywa komputer');
      }
      else {
        printMessage('Ty Wygrywasz')
      }
  }

  /*proces gry*/

  //czyścimy komunikaty
  clearMessages();

  //zamiana numeru na tekst
  const playerMove = getMoveName(playerInput),
  // wybór komputera + zamiana na tekst
    choiceInNumber = Math.floor(Math.random() * 3 + 1),
    computerMove = getMoveName(choiceInNumber);

  //wybory w html-u
  printMessage('Mój ruch to: ' + computerMove);
  printMessage('Twój ruch to: ' + playerMove);



  //Zwycięzca
  displayResult(computerMove, playerMove);

  }

  //Wybór gracza
  document.getElementById('play-rock').addEventListener('click', function(){
      playGame(1);
  });
  document.getElementById('play-paper').addEventListener('click', function(){
      playGame(2);
  });
  document.getElementById('play-scissors').addEventListener('click', function(){
      playGame(3);
  });

}
