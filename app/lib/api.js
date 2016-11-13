import $ from 'superagent';

import config from '../../config/config';


class Api {
    constructor() {
        this.url = config.app.url;
    }

	getUserBooks() {
		return this.request('get', this.url.books)
	}

    login(data={}) {
        return this.request('post', this.url.users, data)
    }

    request(method, url, opts = {}) {
        console.log("this is opt")
        console.log(opts)

        const {data} = opts;
        return new Promise((resolve, reject) => {
            const request = $[method](url).set('Accept', 'application/json');

            console.log("this is data in request")
            console.log(data)

            if (data && Object.keys(data).length > 0) {
                request.type('json').send(data);
            }


            console.log(request)

            request
                .then(response => resolve(response.body))
                .catch(reject)
        })
    }
}

export default Api;
