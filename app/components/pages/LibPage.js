import React from 'react';

class LibPage extends React.Component {
    componentDidMount() {
        const {onLoadGetBooks} = this.props;

        if (onLoadGetBooks instanceof Function) onLoadGetBooks();
    }

    render() {
        return (
            <div className="LibPage">
                this is lib
            </div>
        )
    }
}

export default LibPage;
