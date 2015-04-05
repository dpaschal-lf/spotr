var app = {
	views: {},
	collections: {},
	router: null,
};

require.config({
	paths: {
		jquery: [
			'https://ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min',
			'lib/jquery-1.11.2.min',
		],
		underscore: 'lib/underscore',
		backbone: 'lib/backbone',
		templates: '../templates',
		pages: '../pages',
	}
});

/* Router */
require(['jquery', 'underscore', 'backbone', 'router'], 
	function($, _, Backbone, Router) {
		Router.init();
	}
);


