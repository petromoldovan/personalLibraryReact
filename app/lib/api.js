import $ from 'superagent';

import config from '../../config/config';


class Api {
    constructor() {
        this.url = config.app.url;
    }

	getUserBooks() {
		return this.request('get', this.url.books)
	}

    addNewBook(data) {
        return this.request('post', this.url.books, data)
    }

    login(data={}) {
        return this.request('post', this.url.users, data)
    }

    request(method, url, opts = {}) {
        const {data} = opts;
        return new Promise((resolve, reject) => {
            const request = $[method](url).set('Accept', 'application/json');

            if (data && Object.keys(data).length > 0) {
                request.type('json').send(data);
            }

            if(localStorage.getItem('jwtToken')) {
                request.set('Authorization', `Bearer ${localStorage.getItem('jwtToken')}`)
            }

            request
                .then(response => resolve(response.body))
                .catch(reject)
        })
    }
}

export default Api;
