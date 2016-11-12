import React from 'react';

import {Link} from 'react-router';
import styles from './App.css';

class App extends React.Component {
    render(){
        return (
            <div className={styles.AppComponent}>
                <Link to="/">Login</Link>
                <Link to="/library">Library</Link>
                {this.props.children}
            </div>
        )
    }
}

export default App;
