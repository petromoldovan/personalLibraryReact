import {connect} from 'react-redux';

import LoginPage from '../components/pages/LoginPage';

function mapStateToProps() {
    return {};
}

function mapDispatchToProps() {
    return {};
}

const LoginCont = connect(
    mapStateToProps,
    mapDispatchToProps
)(LoginPage)

export default LoginCont;
