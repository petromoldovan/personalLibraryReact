import React from 'react';

class LoginForm extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            user: '',
            password: ''
        }

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(e){
        this.setState({[e.target.name]: e.target.value})
    }

    onSubmit(e) {
        e.preventDefault();

        const {onFormSubmit} = this.props

        if(onFormSubmit instanceof Function) onFormSubmit(this.state);
    }

    render() {
        return (
            <form onSubmit={this.onSubmit}>
                <div className="form-group">
                    <label className="control-label" htmlFor="user">User</label>
                    <input type="text"
                           className="form-control"
                           name="user"
                           id="name"
                           onChange={this.onChange}
                           value={this.state.user}/>
                </div>
                <div className="form-group">
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
