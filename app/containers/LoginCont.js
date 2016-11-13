import {connect} from 'react-redux';
import {browserHistory} from 'react-router';

import LoginPage from '../components/pages/LoginPage';
import {userLogin} from '../actions/api'

function mapStateToProps() {
    return {};
}

function mapDispatchToProps(dispatch) {
    return {
        onFormSubmit: (data) => {
            dispatch(userLogin(data))
        }
    };
}

const LoginCont = connect(
    mapStateToProps,
    mapDispatchToProps
)(LoginPage)

export default LoginCont;
