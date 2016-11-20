import React from 'react';


class LibForm extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            title: '',
            author: '',
            year: '',
            volumes: '',
            isLoading: false
        }

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(e){
        this.setState({[e.target.name]: e.target.value})
    }

    onSubmit(e) {
        e.preventDefault();
        const {onSubmit} = this.props;

        let data = {
            title: this.state.title,
            author: this.state.author,
            year: this.state.year,
            volumes: this.state.volumes
        }

        if(onSubmit instanceof Function) onSubmit({data})
    }

    render() {
        return (
            <form onSubmit={this.onSubmit} className="LibForm">
                <div className="form-group">
                    <label className="control-label" htmlFor="title">Title</label>
                    <input type="text"
                           className="form-control"
                           name="title"
                           id="title"
                           onChange={this.onChange}
                           value={this.state.title}/>
                </div>
                <div className="form-group">
                    <label className="control-label" htmlFor="password">Author</label>
                    <input type="text"
                           className="form-control"
                           name="author"
                           id="author"
                           onChange={this.onChange}
                           value={this.state.author}/>
                </div>
                <div className="form-group double">
                    <div className="col-sm-6">
                        <label className="control-label" htmlFor="password">Year</label>
                        <input type="text"
                               className="form-control"
                               name="year"
                               id="year"
                               onChange={this.onChange}
                               value={this.state.year}/>
                    </div>
                    <div className="col-sm-6">
                        <label className="control-label" htmlFor="password">Volumes</label>
                        <input type="text"
                               className="form-control"
                               name="volumes"
                               id="volumes"
                               onChange={this.onChange}
                               value={this.state.volumes}/>
                    </div>
                </div>
                <div className="form-group">
                    <button className="btn btn-primary btn-lg" disabled={this.state.isLoading}>
                        Submit
                    </button>
                </div>
            </form>
        )
    }
}


export default LibForm;
