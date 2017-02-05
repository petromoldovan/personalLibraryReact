import React from 'react';

import LibForm from '../forms/Lib';
import classnames from 'classnames';

/*import styles from './LibPage.css';*/

class LibPage extends React.Component {
    constructor(props) {
        super(props);

        this.onClick=this.onClick.bind(this);
    }

    componentWillUnmount() {
        const {onUnmountSetLocation} = this.props;
        if(onUnmountSetLocation && onUnmountSetLocation instanceof Function) onUnmountSetLocation();
    }

    componentDidMount() {
        const {onLoadGetBooks} = this.props;
        if (onLoadGetBooks instanceof Function) onLoadGetBooks();
    }

    renderBooks() {
        const {books, selectedBooks} = this.props;
        if (!books) return null;
        let bookArr = [];

        Object.keys(books).forEach((key)=>{
            return(
                bookArr.push(books[key])
            )
        });

        return (
            bookArr.map((elem, id)=>{
                let classNames = classnames('listItem', {selected: selectedBooks.indexOf(elem.id)>=0})
                return(
                    <li key={id} ref={`book-${id}`} className={classNames} onClick={() => this.onClick(elem.id)}>
                        <h4>{elem.title} ({elem.year})</h4>
                        Author: <span>{elem.author}</span>
                    </li>
                )
            })
        )
    }

    onClick(id) {
        let { selectedBooks, toggleSelectedBook } = this.props;

        if (id && selectedBooks.indexOf(id) >= 0) return null;

        let newSelected = selectedBooks;
        newSelected.push(id);

        if (toggleSelectedBook && toggleSelectedBook instanceof Function) toggleSelectedBook(newSelected);
    }

    render() {
        const {books, onSubmit} = this.props;

        return (
            <div className="LibPage">
                <div className="row">
                    <div className="col-sm-6 col-sm-offset-3">
                        <h2>Add new book</h2>
                        <LibForm onSubmit={onSubmit}/>
                    </div>
                </div>

                <div className="booksList">
                    <h2>List of books</h2>
                    <ol>
                        {this.renderBooks()}
                    </ol>
                </div>


            </div>
        )
    }
}

LibPage.propTypes = {
    onLoadGetBooks: React.PropTypes.func.isRequired
}

export default LibPage;
