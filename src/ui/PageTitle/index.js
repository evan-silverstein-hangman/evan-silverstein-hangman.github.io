import React from 'react';
import styles from './styles.css';

class PageTitle extends React.Component{
    render(){
        return(
            <div className={styles.pageTitle}> {this.props.text} </div>
        )
    }
}

export default PageTitle;