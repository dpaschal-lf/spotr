var spotr = (function($) {
	var app = {
		views: {},
		collection: {},
		router: null,
	};

	var SessionModel = Backbone.Model.extend({
		defaults: function() {
			return {
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

		events: {
			'click button.increment-btn': 'increment',
			'click button.decrement-btn': 'decrement',
		},

		template: _.template( $('#session-item-template').html() ),

		initialize: function() {
			this.listenTo( this.model, 'change', this.render );
		},

		render: function() {
			this.$el.html( this.template( this.model.toJSON() ) );

			return this;
		},

		increment: function(e) {
			var rowGrade = e.target.getAttribute('data-grade');
	
			this.model.set(rowGrade, this.model.get(rowGrade) + 1);
		},

		decrement: function(e) {
			var rowGrade = e.target.getAttribute('data-grade');
			
			if (this.model.get(rowGrade) > 0) {
				this.model.set(rowGrade, this.model.get(rowGrade) - 1);
			}
		}
	});

	var SessionCollection = Backbone.Collection.extend({
		model: SessionModel,
	});

	var AppView = Backbone.View.extend({
		events: {
			'click button#new-session-btn': 'createSession',
		},

		initialize: function() {
			this.setElement( $('#app-container') );
			// Observes collection for new models and
			// when new model is added, appendSession is called
			// and passed new model
			this.listenTo(app.collection.sessions, 'add', this.appendSession);

		},

		appendSession: function(sessionModel) {
			var view = new SessionView( {model: sessionModel} );

			$('#new-session').html( view.render().el );
		},

		createSession: function() {
			var session = new SessionModel();

			app.collection.sessions.add(session);
		},
	});

	var AppRouter = Backbone.Router.extend({
		routes: {
			'': function() {
			},
			'session': function() {
				app.collection.sessions.add({});
			}

		}
	})

	app.collection.sessions = new SessionCollection;
	app.views.appView = new AppView;
	app.router = new AppRouter;

	Backbone.history.start();

	return app;
})(jQuery);




