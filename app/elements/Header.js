import React from 'react';
import {Link} from 'react-router';

/*import styles from './Header.css';*/


class Header extends React.Component {
    render(){
        return(
            <nav>
                <Link to="/">Home</Link>
                <Link to="/library">Library</Link>
            </nav>
        )
    }
}

export default Header;
