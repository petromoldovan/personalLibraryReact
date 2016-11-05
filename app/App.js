import React from 'react';

import {Link} from 'react-router';

class App extends React.Component {
    render(){
        return (
            <div className="AppComponent">
                <Link to="/login">Login</Link>
                {this.props.children}

            </div>
        )
    }
}

export default App;
