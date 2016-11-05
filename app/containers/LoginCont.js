import {connect} from 'react-redux';
import {browserHistory} from 'react-router';

import LoginPage from '../components/pages/LoginPage';
import {authUserAction} from '../actions/state'

function mapStateToProps() {
    return {};
}

function mapDispatchToProps(dispatch) {
    return {
        onFormSubmit: (data) => {
            dispatch(authUserAction(data))
        }
    };
}

const LoginCont = connect(
    mapStateToProps,
    mapDispatchToProps
)(LoginPage)

export default LoginCont;
