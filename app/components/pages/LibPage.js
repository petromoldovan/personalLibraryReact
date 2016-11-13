import React from 'react';

/*import styles from './LibPage.css';*/

class LibPage extends React.Component {
    componentDidMount() {
        const {onLoadGetBooks} = this.props;
        if (onLoadGetBooks instanceof Function) onLoadGetBooks();
    }

    renderBooks() {
        const {books} = this.props;
        if (!books) return null

        return (
            books.map((elem, id)=>{
                return (
                    <li key={id} ref={`book-${id}`}>
                        <h4>{elem.title} ({elem.year})</h4>
                        Author: <span>{elem.author}</span>
                    </li>
                )
            })
        )
    }

    render() {
        const {books} = this.props;

        return (
            <div className="LibPage">
                <h1>List of books</h1>
                <ol>
                    {this.renderBooks()}
                </ol>
            </div>
        )
    }
}

LibPage.propTypes = {
    onLoadGetBooks: React.PropTypes.func.isRequired
}

export default LibPage;
