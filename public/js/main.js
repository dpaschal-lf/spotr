var spotr = (function($) {
	var app = {};

	var SessionModel = Backbone.Model.extend({
		defaults: function() {
			return {
				v0: 0,
				v1: 0,
				v2: 0,
				v3: 0,
				v4: 0,
				v5: 0,
				v6: 0,
				v7: 0,
				v8: 0,
				v9: 0,
				v10: 0,
				v11: 0,
				v12: 0,
				v13: 0,
				v14: 0,
				v15: 0,
			}
		},
	});

	var SessionView = Backbone.View.extend({
		tagName: 'ul',

		className: 'session-item',

		template: _.template( $('#session-item-template').html() ),

		initialize: function() {
			this.render();
		},

		render: function() {
			this.$el.html( this.template( this.model.toJSON() ) );

			return this;
		}
	});

	var SessionCollection = Backbone.Collection.extend({
		model: SessionModel,
	});

	app.sessionCollection = new SessionCollection;

	var AppView = Backbone.View.extend({
		el: '#app-container',

		events: {
			'click button#new-session-btn': 'createSession',
		},

		initialize: function() {
			// Observes collection for new models and
			// when new model is added, appendSession is called
			// and passed new model
			this.listenTo(app.sessionCollection, 'add', this.appendSession);
		},

		appendSession: function(sessionModel) {
			var view = new SessionView( {model: sessionModel} );

			$('#new-session').html( view.render().el );
		},

		createSession: function() {
			var session = new SessionModel();

			console.log(session.toJSON());
			app.sessionCollection.add(session);


		},
	});

	app.appView = new AppView;

	var AppRouter = Backbone.Router.extend({
		routes: {
			'': function() {
				
			},

		}
	})

	app.router = new AppRouter;

	Backbone.history.start();

	return app;
})(jQuery);




