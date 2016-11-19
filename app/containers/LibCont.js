import {connect} from 'react-redux';

import LibPage from '../components/pages/LibPage';
import {getUserBooks} from '../actions/api';

function mapStateToProps(state){
    let books = state.getIn(['data', 'books', 'all'], null)
    books = books ? books.toJS() : null;

    return{books}
}

function mapDispatchtoProps(dispatch) {
    return {
        onLoadGetBooks: () => {
            dispatch(getUserBooks({then: ()=>{console.log("loading books..")}}))
        }
    }
}

const LibCont = connect (
    mapStateToProps,
    mapDispatchtoProps
)(LibPage)

export default LibCont;
