import {connect} from 'react-redux';

import App from '../App';


function mapStateToProps(state) {
    const location = state.getIn(['ui', 'location'], null);

    return {location};
}

function mapDispatchToProps() {
    return {}
}

const AppCont = connect(
    mapStateToProps,
    mapDispatchToProps
)(App)

export default AppCont;
