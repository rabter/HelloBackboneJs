define([
	'jquery',
	'underscore',
	'backbone',
	'text!templates/home/homeTemplate.html'
], function($, _, Backbone, homeTemplate) {

	var HomeView = Backbone.View.extend({
		el: $("#content"),
		events: {
			"click #btn1": "drawData"
		},
		drawData: function(e) { 
			alert('Click Button');
			
		},
		render: function() {
			console.log('#5 HomeView.js');
			this.$el.html(homeTemplate)
		}
	});

	return HomeView;
});