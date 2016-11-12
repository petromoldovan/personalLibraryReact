import axios from 'axios';

class Api {
	getUserBooks() {
		const url= "/assets/books.json";

		return axios.get(url)
			.then(function (response){
				console.log(response);
		    })
            .catch(function (err){
                console.log(err);
            })
	}
}

export default Api;
