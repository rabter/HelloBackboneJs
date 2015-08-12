// app.js

define([
	'jquery',
	'underscore',
	'backbone',
	'router', // Request router.js
], function($, _, Backbone, Router){
	var initialize = function() {
		console.log('#3 app.js');
		Router.initialize();
	}

	return {
		initialize: initialize
	}
});