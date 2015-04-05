define(['jquery', 'underscore', 'backbone', 'views/AppView', 'views/BetaListView', 'collections/BetaCollection'], 
	function($, _, Backbone, AppView, BetaListView, BetaCollection) {
		var AppRouter = Backbone.Router.extend({
				routes: {
					'': 'index',
					'betaList': 'betaList',
				},
	
				index: function() {
					BetaCollection.init();
					AppView.init();
				},
	
				betaList: function() {
					BetaCollection.init();
					BetaListView.init();
				},
		});

		var init = function() {
			app.router = new AppRouter;
			Backbone.history.start();
		};

		return {
			init: init,
		}
	}
);

