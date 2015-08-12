// router.js

define([
	'jquery',
	'underscore',
	'backbone',
	'views/home/HomeView'
], function($, _, Backbone, HomeView) {
	var AppRouter = Backbone.Router.extend({
		routes: {
			
			//default
			'': 'defaultAction'
		}
	});

	var initialize = function() {
		console.log('#4 router.js');
		var app_router = new AppRouter;

		app_router.on('route:defaultAction', function(actions) {

			console.log('#6 router.js > app_router.on');
			var homeView = new HomeView();
			homeView.render();

		});

		Backbone.history.start();

	};
	return {
		initialize: initialize
	};
});