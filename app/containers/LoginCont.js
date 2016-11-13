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
            const then = browserHistory.push('library')
            dispatch(userLogin(data), {then})
        }
    };
}

const LoginCont = connect(
    mapStateToProps,
    mapDispatchToProps
)(LoginPage)

export default LoginCont;
