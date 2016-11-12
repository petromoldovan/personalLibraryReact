import React from 'react';

import LoginForm from '../forms/Login'


class LoginPage extends React.Component {
    render() {
        const {onFormSubmit} = this.props;
        return (
            <div className="LoginFormInner">
                <div className="row">
                    <LoginForm onFormSubmit={onFormSubmit}/>
                </div>
            </div>
        )
    }
}

LoginForm.propTypes = {
    onFormSubmit: React.PropTypes.func.isRequired
}

export default LoginPage;
