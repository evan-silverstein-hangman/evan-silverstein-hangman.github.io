import Hangman from 'models/Hangman'


let words = [
    'hey',
    'person',
    'you',
    'think',
    'youre',
    'better',
    'than',
    'me'
  ] 

let pastGames = [];
let game = new Hangman(words);
   

class HangmanService {

    startNewGame = ()=>{
        game = new Hangman(words);
    }

    getGame = ()=>{
        return game;
    }

    gameIsCompleted = (game)=>{
        pastGames.push(game)
        this.startNewGame();
    }

    

}



export default new HangmanService();
