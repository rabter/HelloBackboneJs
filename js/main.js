// main.js

require.config({
	paths: {
		jquery: 'libs/jquery/jquery.min',
		underscore: 'libs/underscore/underscore-min',
		backbone: 'libs/backbone/backbone-min',
		templates: '../templates'
	}

});

require([
	'app',

], function(App){
	console.log('#2 main.js');
	App.initialize();
});