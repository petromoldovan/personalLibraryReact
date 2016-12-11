import React from 'react';
import {Link} from 'react-router';

/*import styles from './Header.css';*/


class Header extends React.Component {
    renderContent() {
        const {location} = this.props;
        let content;

        if (location==='library') {
            content = (
                <nav>
                    <Link to="/">Home</Link>
                    <Link to="/library">Library</Link>
                </nav>
            )
        }
        return content;
    }

    render(){
        return(
            <div>
                {this.renderContent()}
            </div>
        )
    }
}

export default Header;
