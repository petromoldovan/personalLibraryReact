import React from 'react';

import Header from './elements/Header';


class App extends React.Component {
    render(){
        return (
            <div className="AppComponent">
                <Header />
                {this.props.children}
            </div>
        )
    }
}

export default App;
