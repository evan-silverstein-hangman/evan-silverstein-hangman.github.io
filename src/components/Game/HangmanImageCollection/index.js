import React from 'react'
import styles from './styles.css'
import classnames from 'classnames'


function HangmanImageCollection(props){
    let count  = props.wrongGuessesCount;
    let hidden = {display: "none"};
    return (
        
        <div>
            <div className={styles.hangmanContainer}>
                    <div style={!(count>1)? hidden: {}} className={styles.hat}>
                        <div className={styles["hat__brim"]}></div>
                    </div>

                    <div style={!(count>0)? hidden: {}} className={styles.head}>
                        <div className={classnames(styles["head__eye"], styles["head__eye--left"])}></div>
                        <div className={classnames(styles["head__eye"], styles["head__eye--right"])}></div>    
                        <div className={styles["head__nose"]}></div>
                    </div>
                <div style={!(count>2)? hidden: {}} className={styles['body--top']}>
                    <div className={classnames(styles["body__button"], styles["body__button--top"])}></div>
                    <div className={classnames(styles["body__button]"], styles["body__button--middle"])}></div>
                    <div className={classnames(styles["body__button"], styles["body__button--bottom"])}></div>
                    <div style={!(count>4)? hidden: {}} className={styles['leftArm']}></div>
                    <div style={!(count>5)? hidden: {}}  className={styles['rightArm']}></div>
                </div>
                <div style={!(count>3)? hidden: {}} className={styles["body--bottom"]}></div> 
                
            </div>
        </div>
    )
    
}





export default HangmanImageCollection