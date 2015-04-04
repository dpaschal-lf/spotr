define(['jquery', 'underscore', 'backbone'], function($, _, Backbone) {
	var AppRouter = Backbone.Router.extend({
			routes: {
				'': 'index',
				'session': 'session',
				'problem': 'problem',
				'beta': 'beta',
			},
	
			index: function() {
				var appView = new AppView;
			},
	
			session: function() {
				
			},
	
			problem: function() {
	
			},
	
			beta: function() {
			
			}
	});

	var init = function() {
		var router = new AppRouter;
	};

	return {
		init: init,
	}
	
});

