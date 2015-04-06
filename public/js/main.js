var app = {
	views: {},
	collections: {},
	router: null,
	user: null,
};

require.config({
	paths: {
		jquery: [
			'https://ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min',
			'lib/jquery-1.11.2.min',
		],
		underscore: 'lib/underscore-min',
		backbone: 'lib/backbone-min',
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


function test() {
	$.ajax({
		url: 'User/login',
		method: 'POST',
		data: {
			email: 'jibrianh@gmail.com',
			password: 'deliriou5',
		},
		success: function(response) {
			console.log(response);
		},
		error: function(response) {
			console.log(response);
		}
	})
}



var html = '<h1><% if (name === "brian") { %><%= name %> <% } else { %> kjkjsfsdf <% } %></h1>'



