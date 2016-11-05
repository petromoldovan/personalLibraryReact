import React from 'react';



class LoginPage extends React.Component {


    render(){
        return (
            <div>
                <h1>this is login page</h1>
                {this.props.children}
            </div>
        )
    }
}

export default LoginPage;