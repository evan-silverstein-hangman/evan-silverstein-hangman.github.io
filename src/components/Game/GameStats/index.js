import React from 'react';
import styles from './styles.css'
import Item from 'ui/Item'


function GameStats(props){
    let game = props.game;
    return(
        <div className={styles.gameStatsContainer}>
            <Item label="Current guess: "> {game.guess} </Item>
            <Item label="Past guesses: "> {game.wrongGuesses.join(', ')} </Item>
            {/* <div className={styles.label}>Current guess: {game.guess} </div>
            <div className={styles.label}>past guesses:{game.wrongGuesses.join(',')}</div> */}
        </div>

    );

}


export default GameStats;
