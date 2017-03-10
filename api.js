var express = require('express')

var fs = require('fs');
var path = require('path');

var router = express.Router()

var defaultParams = {
	'year-from' : -50,
	'year-to'   : 300,
	'dynasty'   : 'all',
	'sort-by'   : 'succession'
};

var EMPERORS_FILE = path.join(__dirname, 'data/emperors.json');

router.get('/emperor', function(req, res) {
	setTimeout(function () {
		res.sendFile(createEmperorFileName(req.param('id')));
	}, 0); //  choking response time
});

router.get('/emperors', function(req, res) {
	fs.readFile(EMPERORS_FILE, function(err, data) {
		if (err) {
			console.error(err);
			process.exit(1);
		}
		var json = JSON.parse(data);

		var dynastyFilterOption = getDynastyFilterOption(req);
		var yearFrom = getYearFrom(req);
		var yearTo = getYearTo(req);
		var sortOption = getSortOption(req);

		var filtered = filterBy(json, dynastyFilterOption, yearFrom, yearTo);

		setTimeout(function () {
			res.json({
				results : sortBy(filtered, sortOption),
				criteria : {
					'dynasty' : dynastyFilterOption,
					'yearFrom' : yearFrom,
					'yearTo' : yearTo,
					'sortBy' : sortOption,
					minYear : -50,
					maxYear : 400,
					dynasties : [
						'all',
						'Julio-Claudian',
						'Flavian',
						'Nerva-Antonine',
						'Severan',
						'Gordian'
					],
					sortingOrders : [
						'reign-asc',
						'reign-desc',
						'succession'
					]
				}
			});
		}, 0); //  choking response time
	});
});

function createEmperorFileName (id) {
	return path.join(__dirname, 'data/emperors/' + id + '.html');
}

function getYearFrom(request) {
	var yearFrom = request.param('year-from');
	return yearFrom ? yearFrom : defaultParams['year-from'];
}

function getYearTo(request) {
	var yearTo = request.param('year-to');
	return yearTo ? yearTo : defaultParams['year-to'];
}

function getSortOption (request) {
	var sortBy = request.param('sort-by');
	return sortBy ? sortBy : 'succession';
}

function getDynastyFilterOption(request) {
	var dynasty = request.param('dynasty');
	return dynasty ? dynasty : defaultParams['dynasty']; // default for the moment
}

function filterBy(data, dynasty, from, to) {

	data = data.filter(function(emperor){
		return emperor.to > from && emperor.from < to;
	});

	return data.filter(function(emperor) {
		if(dynasty == 'all') return true;
		return emperor.dynasty == dynasty;
	});
}

function sortBy(data, sortOption) {
	if(sortOption == 'reign-asc') {
		return data.sort(function (a,b) {
			return getReign(a) - getReign(b);
		});
	} else if(sortOption == 'reign-desc'){
		return data.sort(function (a,b) {
			return getReign(b) - getReign(a);
		});
	} else { //  succession
		return data.sort(function (a,b) {
			return a.from - b.from;
		});
	}
}

function getReign(emperor) {
	return emperor.to - emperor.from;
}

module.exports = router
