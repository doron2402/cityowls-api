/*
		Location Route
	*********************
	Abstract Route:
		/:Continet/:Country/:city
		/:Continet/USA/:State/:city
		/:Continet/USA/ZIPCODE/:zipcode

	Example:
		/America/USA/California/SanFrancisco
		/America/USA/ZIPCODE/94612
		/MiddleEase/Israel/TelAviv

*/

var PlaceLocation = {}
_ = require('lodash');

/*
	Looking for type of place
*/
PlaceLocation.switchType = function(type, cb) {
	var typeObj = {
		'bars': 'bars',
		'bar': 'bars',
		'club': 'clubs',
		'clubs': 'clubs',
		'caffee': 'caffes',
		'caffes': 'caffes',
		'tosee': 'tosee',
		'resturants': 'resturants',
		'resturant': 'resturants'
		};
	if (typeObj[type] !== undefined){
		return cb(null, typeObj[type]);
	}else
		return cb({err: 'Could not find the type : ' + type}, null);

}

/*
	Get place by city in the USA
*/
PlaceLocation.getPlaceByCityUS = function (request, reply) {

	console.log(request.params);
	var city = request.params.city || 'San Francisco',
		state = request.params.state || 'California',
		data = {
			bars: [
				{name: 'bar 1', address: '500 Howard st', city: city, state: state, FB_checkins: 104, Twitter: 123, FourSqure: 12},
				{name: 'bar 2', address: '504 Howard st', city: city, state: state, FB_checkins: 104, Twitter: 123, FourSqure: 12}
			],
			clubs: [
				{name: 'club 1', address: '500 Howard st', city: city, state: state, FB_checkins: 104, Twitter: 123, FourSqure: 12},
				{name: 'club 2', address: '500 Howard st', city: city, state: state, FB_checkins: 104, Twitter: 123, FourSqure: 12}
			],
			resturants: [
				{name: 'resturant 123', address: '500 Howard st', city: city, state: state, FB_checkins: 104, Twitter: 123, FourSqure: 12},
				{name: 'resturant 3', address: '500 Howard st', city: city, state: state, FB_checkins: 104, Twitter: 123, FourSqure: 12}
			],
			caffes: [
				{name: 'caffee 123', address: '500 Howard st', city: city, state: state, FB_checkins: 104, Twitter: 123, FourSqure: 12},
				{name: 'caffee 3', address: '500 Howard st', city: city, state: state, FB_checkins: 104, Twitter: 123, FourSqure: 12}
			],
			tosee: [
				{name: 'statue of something', address: '500 Howard st', city: city, state: state, FB_checkins: 104, Twitter: 123, FourSqure: 12},
				{name: 'some other church', address: '500 Howard st', city: city, state: state, FB_checkins: 104, Twitter: 123, FourSqure: 12}
			]
		};

	PlaceLocation.switchType(request.params.type, function(err, type){
		if (err == null)
			data = data[type];

		var DateRet = {
			state: state,
			city:  city,
			type: type,
			data: data,
			err: err
		};

		reply(DateRet);

	});
};

/*
	get place by city around the world
*/
PlaceLocation.getPlaceByCity = function (request, reply) {
	console.log(request.params);
	reply(request.params);
};

PlaceLocation.getPlaceByZipCodeUS = function (request, reply) {
	console.log(request.params);
	var zipcode = parseInt(request.params.zipcode,10);
	reply({data: zipcode});
};

// Return an array of objects with places by location
PlaceLocation.mainRoute = [
{ method: "GET", path: '/America/USA/{state}/{city}/{type?}', handler: PlaceLocation.getPlaceByCityUS },
{ method: "GET", path: '/{continet}/{country}/{city}/{type?}', handler: PlaceLocation.getPlaceByCity },
{ method: "GET", path: '/America/USA/ZIPCODE/{zipcode}/{type?}', handler: PlaceLocation.getPlaceByZipCodeUS }
];

exports.PlaceLocation = PlaceLocation;