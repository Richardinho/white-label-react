
const API_URL = 'https://white-label-api.herokuapp.com/api/emperors';

class EmperorAPI {

	load (queryString = '') {
		return fetch(API_URL + queryString).then(function (response) {
			return response.json()
		});
	}
}

export default new EmperorAPI();