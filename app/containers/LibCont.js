import {connect} from 'react-redux';

import LibPage from '../components/pages/LibPage';
import {getUserBooks} from '../actions/api';

function mapStateToProps(){
    return{}
}

function mapDispatchtoProps(dispatch) {
    return {
        onLoadGetBooks: () => {
            dispatch(getUserBooks())
        }
    }
}

const LibCont = connect (
    mapStateToProps,
    mapDispatchtoProps
)(LibPage)

export default LibCont;
