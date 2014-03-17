/*
		Place Route
	*********************
	Abstract Route:
		/:Continet/:Country/:city/Place/:type/:id or :name
		/:Continet/USA/:State/:city/Place/:type/:id or :name
		/:Continet/USA/ZIPCODE/:zipcode/Place/:type/:id or :name

	Example:
		/America/USA/California/SanFrancisco/Place/Bar/123 or Beer Garden
		/America/USA/ZIPCODE/94612/123 or Beer Garden
		/MiddleEase/Israel/TelAviv/123 or Gehola

*/

var Place = {},
	_ = require('lodash');

Place.getPlaceById = function(request, reply) {
	console.log(request.params.id);
	var Id = parseInt(request.params.id,10);
	reply({"Place Id": Id});
};

Place.getPlaceByName = function (request, reply) {
	console.log(request.params);
	reply({data: "YAY..."});
};


Place.getPlaceByIdRoute = { method: "GET", path: "/place/id/{id}", handler: Place.getPlaceById };

Place.getPlaceByNameRoute = { method: "GET", path: "/place/name/{name}/{type?}", handler: Place.getPlaceByName };

exports.Place = Place;