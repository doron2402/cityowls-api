var Hapi = require('hapi'),
	Joi = Hapi.types,
	_ = require('lodash'),
	Options = { cors: true },
	Place = require('./routes/place/').Place,
	PlaceLocation = require('./routes/location/');

var server = Hapi.createServer('0.0.0.0',8888,Options);

var routes = [];
routes.push(Place.getPlaceByIdRoute);
routes.push(Place.getPlaceByNameRoute);
routes.push({ method: "GET", path: "/hi/{id}", handler: Place.getPlaceById});
routes = _.union(routes,PlaceLocation.PlaceLocation.mainRoute);
console.log(routes);

server.route(routes);

server.start(function () {
    console.log('Server started at: ' + server.info.uri);
});
