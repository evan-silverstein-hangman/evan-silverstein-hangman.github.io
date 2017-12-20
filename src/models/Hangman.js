
import GuessResult from './GuessResult'
import GameResult from './GameResult'



function Hangman(words){
    this.words = words;
    this.guess = "";
    this.submitGuess = (guess)=>submitGuess(guess.toLowerCase(),this);
    this.answer = "";
    this.word = "";
    this.pastGuesses = [];
    this.wrongGuesses = [];
    this.gameResult = new GameResult();
    initializeGame(this);
}


function initializeGame(game){
  if(!game.words.length>0){throw new Error("the list of words must be greater than 0 to begin playing")}
  game.answer = getRandomWord(game.words).toLowerCase();
  game.word = (" ").repeat(game.answer.length);

}

function submitGuess(guess, game){
  if(game.gameResult.isCompleted){throw new Error("this hangman game has already completed"); }
  let guessResult = validateGuess(guess, game.pastGuesses);
  if(!guessResult.isValid){return guessResult;}
  else{
    game.guess = guess;
    game.pastGuesses.push(guess);
    if(!isCorrectGuess(guess, game.answer)){
      game.wrongGuesses.push(guess);
      guessResult.message = 'the guess "' + guess + '" is incorrect. Try again!';
    }
    else{
      updateWord(game);
      guessResult.isCorrect = true;
      guessResult.message = "correct guess!"
    }
    updateGame(game);
  }
  return guessResult;
}


function updateGame(game){

  game.gameResult.isCompleted = (game.wrongGuesses.length>5 || game.word === game.answer);
  game.gameResult.isWinner = (game.word === game.answer);
}


function updateWord(game){
  let updatedWord = game.word.split('');
  for(let i = 0; i < game.answer.length; i++){
   if(game.answer[i]===game.guess){
    updatedWord[i] = game.guess;
   }

  }
  game.word = updatedWord.join('');
}



function validateGuess(guess, pastGuesses){
  let guessResult = new GuessResult(guess);
  let isOnlyAlphabet = (/^[A-Za-z]+$/).test(guess);                  
  if(guess.length !== 1){guessResult.message = 'the guess "' + guess + '" is invalid. Each guess can only be 1 character.';}
  else if(!isNaN(guess)){guessResult.message = 'the guess "' + guess + '" is invalid. The guess cannot be a number.';}
  else if(!isOnlyAlphabet){guessResult.message = 'the guess "' + guess + '" is invalid. The guess cannot consist of any symbols or special characters.';}
  else if(isDuplicateGuess(guess,pastGuesses)){guessResult.message = 'the guess "' + guess + '" has previously been guessed. Try again!';}  
  else{
    guessResult.isValid = true;
  }
  return guessResult;
}


function isCorrectGuess(guess, answer){
  return answer.includes(guess);

}

function isDuplicateGuess(guess,pastGuesses){
  let guesses = pastGuesses;
  for(let i = 0; i < guesses.length; i++){
      if(guesses[i] === guess){
        return true;
      }
  }
  return false;

}

function getRandomWord(words){
  const index = Math.floor(Math.random()*words.length);
  return words[index];
}

export default Hangman