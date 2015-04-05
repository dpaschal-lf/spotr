define(['jquery', 'underscore', 'backbone', 'views/AppView', 'views/betaListView', 'collections/betaCollection', 'views/uploadBetaView', 'views/loginView'], 
	function($, _, Backbone, AppView, betaListView, betaCollection, betaUploadView, loginView) {
		var AppRouter = Backbone.Router.extend({
				routes: {
					'': 'index',
					'betaList': 'betaList',
					'uploadBeta': 'uploadBeta',
					'login': 'login',
				},
	
				index: function() {
					betaCollection.init();
					AppView.init();
				},
	
				betaList: function() {
					betaCollection.init();
					betaListView.init();
				},

				uploadBeta: function() {
					betaUploadView.init();
				},

				login: function() {
					loginView.init();
				}
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

