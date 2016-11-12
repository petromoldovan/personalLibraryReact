import $ from 'superagent';

import config from '../../config/config';


class Api {
    constructor() {
        this.url = config.app.url;
    }

	getUserBooks() {
		return this.request('get', this.url.books)
	}

    request(method, url, opts = {}) {
        const {data} = opts
        return new Promise((resolve, reject) => {
            const request = $[method](url).set('Accept', 'application/json');

            if (data && Object.keys(data).length > 0) {
                request.type('json').send(data);
            }

            request
                .then(response => resolve(response.body))
                .catch(reject)
        })
    }
}

export default Api;
