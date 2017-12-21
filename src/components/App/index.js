import React from 'react'
import Navbar from 'components/App/Navbar'
import{Route, Switch} from 'react-router-dom'
import Game from 'components/Game'
import styles from './styles.css'
// import HangmanService from 'services/HangmanService'

class App extends React.Component{
    render(){
        return(
            <div className={styles.content}>
                {/* <Navbar/> */}
                <div className={styles.title}> Hangman </div>
                <div className={styles.page}>
                    <Switch>
                        <Route path='/'
                                exact render={()=><Game />}/>

                        {/* <Route path='/highscore' render={
                            ()=><Highscore records={records}/>} />

                        <Route path='/instructions' component={Instructions} /> */}
                    </Switch>
                </div>
            </div>
        )
    }
}

export default App;