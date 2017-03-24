
let apiURL = '/api';

export class API {

	fetchEmperors(queryString = '') {

		return fetch(apiURL + '/emperors' + queryString).then(function (response) {
			return response.json()
		});
	}

	fetchEmperor (id) {

		return fetch(apiURL + '/emperor?id=' + id).then(function (response) {
			return response.text();
		});

	}
}

