import {connect} from 'react-redux';

import App from '../App';

function mapStateToProps() {
    return {};
}

function mapDispatchToProps() {
    return {};
}

const AppCont = connect(
    mapStateToProps,
    mapDispatchToProps
)(App)

export default AppCont;
