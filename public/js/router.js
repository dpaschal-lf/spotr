define(['jquery', 'underscore', 'backbone', 'views/AppView', 'views/betaListView', 'collections/betaCollection'], 
	function($, _, Backbone, AppView, betaListView, betaCollection) {
		var AppRouter = Backbone.Router.extend({
				routes: {
					'': 'index',
					'betaList': 'betaList',
				},
	
				index: function() {
					betaCollection.init();
					AppView.init();
				},
	
				betaList: function() {
					betaCollection.init();
					betaListView.init();
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

