import React from 'react';

import Header from './elements/Header';
import styles from './App.css';

class App extends React.Component {
    render(){
        return (
            <div className={styles.AppComponent}>
                <Header />
                {this.props.children}
            </div>
        )
    }
}

export default App;
