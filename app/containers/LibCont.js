import {connect} from 'react-redux';

import LibPage from '../components/pages/LibPage';
import {getUserBooks, addNewBook} from '../actions/api';
import {toggleSelectedBook, setLocation} from '../actions/state';


function mapStateToProps(state){
    let books = state.getIn(['data', 'books', 'all', 'books'], null);
    let selectedBooks = state.getIn(['data', 'books', 'selected'], null);

    books = books ? books.toJS() : null;
    selectedBooks = selectedBooks ? selectedBooks.toJS() : [];

    return{books, selectedBooks}
}

function mapDispatchtoProps(dispatch) {
    return {
        onLoadGetBooks: () => {
            dispatch(getUserBooks({then: ()=>{console.log("loading books..")}}))
        },
        onSubmit: (data) => {
            dispatch(addNewBook(data))
        },
        toggleSelectedBook: (id) => {
            dispatch(toggleSelectedBook(id))
        },
        onUnmountSetLocation: () => {
            dispatch(setLocation())
        }
    }
}

const LibCont = connect (
    mapStateToProps,
    mapDispatchtoProps
)(LibPage)

export default LibCont;
