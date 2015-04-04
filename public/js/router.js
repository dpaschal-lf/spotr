define(['jquery', 'underscore', 'backbone', 'public/js/views/AppView.js'], 
	function($, _, Backbone, AppView) {
		var AppRouter = Backbone.Router.extend({
				routes: {
					'': 'index',
					'session': 'session',
					'problem': 'problem',
					'beta': 'beta',
				},
	
				index: function() {
					AppView.init();
				},
	
				session: function() {

				},
	
				problem: function() {

				},
	
				beta: function() {

					require(['jquery', 'underscore', 'backbone', 'views/BetaView'], 
						function($, _, Backbone, BetaView) {
							BetaView.init();
						}
					);
				},
		});

		var init = function() {
			app.router = new AppRouter;
		};

		return {
			init: init,
		}
	}
);

