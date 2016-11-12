import React from 'react';

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
                        <h4>{elem.name}</h4>
                        Year: <span>{elem.year}</span>
                    </li>
                )
            })
        )
    }

    render() {
        const {books} = this.props;
        console.log(this.props)

        return (
            <div className="LibPage">
                <ul>
                    {this.renderBooks()}
                </ul>
            </div>
        )
    }
}

export default LibPage;
