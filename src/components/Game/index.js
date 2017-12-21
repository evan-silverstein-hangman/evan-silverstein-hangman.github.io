import React from 'react'
import PageContent from 'ui/PageContent'
import PageTitle from 'ui/PageTitle'
import HangmanImageCollection from './HangmanImageCollection'
import GameStats from './GameStats'
import styles from './styles.css'
import HangmanService from 'services/HangmanService'




class Game extends React.Component{
    constructor(){
        super();
        this.state={
            game: HangmanService.getGame()
        }

        // this.showPlayAgainButton = this.showPlayAgainButton.bind(this);
    }

    eventListener= (e)=>{
        this.guessSubmitted(e.key);
    }

    componentWillMount() {
        document.addEventListener("keydown", this.eventListener);
    }

    startNewGame=()=>{
        HangmanService.startNewGame();
        let game = HangmanService.getGame();
        this.setState({game})
    }

    componentWillUnmount(){
        document.removeEventListener('keydown',this.eventListener);
    }

   
    render(){
        let game = this.state.game;
        if(game.gameResult.isCompleted){this.conclusionText(game)}
        return(
            <div>
                {/* <PageTitle text="Game"/> */}
                <PageContent>
                    <div>
                        <button className={styles.btn} onClick={this.startNewGame}> New Game </button>
                        <div className={styles.dashboard}>
                            <div className={styles.screen}>
                                <div className={styles.statsWrapper}>
                                    <GameStats game={game}/>
                                </div>
                                <div className={styles.word}> {convertPlaceHolderToSymbol(game.word)} </div>

                                <div className={styles.hangmanImageWrapper}> 
                                    <HangmanImageCollection wrongGuessesCount={game.wrongGuesses.length}/>
                                </div>

                            </div>
                        
                        </div>
                    </div>
                </PageContent>

            </div>
        )
    }


    
    guessSubmitted(guess){
        let game = HangmanService.getGame();
        if(game.gameResult.isCompleted){return}        
        let guessResult = game.submitGuess(guess);
        if(!guessResult.isValid){
            alert(guessResult.message);
        }
        else{
            this.setState({game});            
        }
        
    }

    conclusionText(game){
        let text =(game.gameResult.isWinner)? "You Win!" : "You Lose. The word was " + '"' + game.answer + '"'; 
        alert(text);
    }
}

function convertPlaceHolderToSymbol(word){
    let newWord = word.split('');
        for(let i = 0; i < newWord.length; i++){
            if(newWord[i] === " "){
                newWord[i] = "_ ";
            }
        }
    return newWord.join('');
}

export default Game;