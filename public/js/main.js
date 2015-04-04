require.config({
	paths: {
		jquery: [
			'https://ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min',
			'lib/jquery-1.11.2.min',
		],
		underscore: 'lib/underscore',
		backbone: 'lib/backbone',
		templates: '../templates',
	}
});

require(['jquery', 'underscore', 'backbone', 'router'], function($, _, Backbone, Router) {
	Router.init();
});





require(['lib/text!../templates/beta.html'], function(beta) {
  console.log(beta);
})
