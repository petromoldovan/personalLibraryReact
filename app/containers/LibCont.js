import {connect} from 'react-redux';

import LibPage from '../components/pages/LibPage';

function mapStateToProps(){
    return{}
}

function mapDispatchtoProps() {
    return {}
}

const LibCont = connect (
    mapStateToProps,
    mapDispatchtoProps
)(LibPage)

export default LibCont;
