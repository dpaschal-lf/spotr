define(['jquery', 'underscore', 'backbone', 'views/AppView', 'views/betaListView', 'collections/betaCollection', 'views/uploadBetaView'], 
	function($, _, Backbone, AppView, betaListView, betaCollection, betaUploadView) {
		var AppRouter = Backbone.Router.extend({
				routes: {
					'': 'index',
					'betaList': 'betaList',
					'uploadBeta': 'uploadBeta',
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

