import {connect} from 'react-redux';

import LoginPage from '../components/pages/LoginPage';
import {authUserAction} from '../actions/state'

function mapStateToProps() {
    return {};
}

function mapDispatchToProps(dispatch) {
    return {
        onFormSubmit: (data) => {
            console.log(data)
            dispatch(authUserAction(data))
        }
    };
}

const LoginCont = connect(
    mapStateToProps,
    mapDispatchToProps
)(LoginPage)

export default LoginCont;
