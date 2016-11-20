import React from 'react';

import LibForm from '../forms/Lib';

/*import styles from './LibPage.css';*/

class LibPage extends React.Component {
    componentDidMount() {
        const {onLoadGetBooks} = this.props;
        if (onLoadGetBooks instanceof Function) onLoadGetBooks();
    }

    renderBooks() {
        const {books} = this.props;
        if (!books) return null;
        let bookArr = [];

        Object.keys(books).forEach((key)=>{
            return(
                bookArr.push(books[key])
            )
        });

        return (
            bookArr.map((elem, id)=>{
                return(
                    <li key={id} ref={`book-${id}`}>
                        <h4>{elem.title} ({elem.year})</h4>
                        Author: <span>{elem.author}</span>
                    </li>
                )
            })
        )
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
