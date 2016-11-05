import React from 'react';

import LoginForm from '../forms/Login'


class LoginPage extends React.Component {
    render() {
        const {onFormSubmit} = this.props;
        return (
            <div className="row">
                <div className="col-md-4 col-md-offset-4">
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
