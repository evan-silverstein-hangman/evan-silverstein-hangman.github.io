import React from 'react'
import styles from './styles.css'

class Item extends React.Component{
    render(){
        return(
            <div className={styles.itemContainer}>
                <div className={styles.col1}>
                    {this.props.label}
                </div>
                <div className={styles.col2}>
                     {this.props.children}
                </div>
         
            </div>
        )
    }
}

export default Item;