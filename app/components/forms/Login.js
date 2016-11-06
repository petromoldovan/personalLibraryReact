import React from 'react';
import validate from 'validate.js'

import VALIDATION_RULES from '../../validators/Login';

class LoginForm extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            user: '',
            password: '',
            errors: {}
        }

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    validate () {
        const {user, password} = this.state;
        return validate({user, password}, VALIDATION_RULES)
    }

    onChange(e){
        this.setState({[e.target.name]: e.target.value})
    }

    onSubmit(e) {
        e.preventDefault();

        //return errors object if there are any
        const errors = this.validate() || {};
        this.setState({errors});
        if (Object.keys(errors).length > 0) return;

        const {onFormSubmit} = this.props
        if(onFormSubmit instanceof Function) onFormSubmit(this.state);
    }

    renderError(field) {
        const messages = this.state.errors[field] || [];

        if (messages.length === 0) return;

        return messages.map((message, id) => {
            return (
                <span key={id} className="form-error">
                    {message}
                </span>
            )
        })
    }

    render() {
        return (
            <form onSubmit={this.onSubmit} className="LoginForm">
                <div className="form-group">
                    {this.renderError('user')}
                    <label className="control-label" htmlFor="user">User</label>
                    <input type="text"
                           className="form-control"
                           name="user"
                           id="name"
                           onChange={this.onChange}
                           value={this.state.user}/>
                </div>
                <div className="form-group">
                    {this.renderError('password')}
                    <label className="control-label" htmlFor="password">Password</label>
                    <input type="password"
                           className="form-control"
                           name="password"
                           id="password"
                           onChange={this.onChange}
                           value={this.state.password}/>
                </div>
                <div className="form-group">
                    <button className="btn btn-primary btn-lg">
                        Submit
                    </button>
                </div>
            </form>
        )
    }
}

LoginForm.propTypes = {
    onFormSubmit: React.PropTypes.func.isRequired
}

export default LoginForm;
