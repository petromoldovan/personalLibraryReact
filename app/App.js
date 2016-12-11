import React from 'react';

import Header from './elements/Header';


class App extends React.Component {
    render(){
        const {location} = this.props;

        return (
            <div className="AppComponent">
                <Header location={location}/>
                {this.props.children}
            </div>
        )
    }
}

export default App;
