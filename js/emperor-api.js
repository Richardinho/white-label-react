
let apiURL = '/api';

class EmperorAPI {

	load (queryString = '') {

		return fetch(apiURL + '/emperors' + queryString).then(function (response) {
			return response.json()
		});
	}

	loadEmperor (id) {

		return fetch(apiURL + '/emperor?id=' + id).then(function (response) {
			return response.text();
		});

	}
}

export default new EmperorAPI();