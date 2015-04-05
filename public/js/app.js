
var spotr = (function($) {
	var app = {
		views: {},
		collections: {},
		router: null,
	};

	// app.collection.sessions = new SessionCollection;
	app.collections.beta = new BetaList;
	app.views.appView = new AppView;
	app.router = new AppRouter;

	Backbone.history.start();

	return app;
})(jQuery);