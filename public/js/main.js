var spotr = (function($) {
	var app = {
		views: {},
		collection: {},
		router: null,
	};

	// var SessionModel = Backbone.Model.extend({
	// 	defaults: function() {
			
	// 	},
	// });

	// var SessionView = Backbone.View.extend({
	// 	tagName: 'ul',

	// 	className: 'session-item',

	// 	events: {
	// 		'click button.increment-btn': 'increment',
	// 		'click button.decrement-btn': 'decrement',
	// 	},

	// 	template: _.template( $('#session-item-template').html() ),

	// 	initialize: function() {
	// 		this.listenTo( this.model, 'change', this.render );
	// 	},

	// 	render: function() {
	// 		this.$el.html( this.template( this.model.toJSON() ) );

	// 		return this;
	// 	},

	// 	increment: function(e) {
	// 		var rowGrade = e.target.getAttribute('data-grade');
	
	// 		this.model.set(rowGrade, this.model.get(rowGrade) + 1);
	// 	},

	// 	decrement: function(e) {
	// 		var rowGrade = e.target.getAttribute('data-grade');
			
	// 		if (this.model.get(rowGrade) > 0) {
	// 			this.model.set(rowGrade, this.model.get(rowGrade) - 1);
	// 		}
	// 	}
	// });

	// var SessionCollection = Backbone.Collection.extend({
	// 	model: SessionModel,
	// });

	var UploadedBeta = Backbone.Model.extend({
		defaults: function() {
			return {

			}
		},

		urlRoot: 'problem/beta',

		url: function() {
			var url = this.urlRoot + '/'  + this.id;

			return url;
		}
	});

	var BetaList = Backbone.Collection.extend({
		model: UploadedBeta,

		url: 'problem/beta/',

		initialize: function () {
			var self = this;

			this.fetch({
				url: self.url + 'maad',
			});
		}
	})

	window.foo = new BetaList;

	var AppView = Backbone.View.extend({
		events: {
			'click button#beta-btn': 'loadBetaList',
			'click button#session-btn': 'loadNewSession',
			'click button#get-beta-btn': 'getBetaList',

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

		loadBetaList: function() {
			this.$el.load('problem/index');
		},

		loadNewSession: function() {
			// this.$el.load('routes/beta/list');
			
		},

		getBetaList: function() {

		}

	});

	var AppRouter = Backbone.Router.extend({
		routes: {
			'': 'index',
			'session': 'session',
			'problem': 'problem',
		},

		index: function() {
	
		},

		session: function() {
			window.location.hash = 'session';
		},

		problem: function() {

		}
	})

	// app.collection.sessions = new SessionCollection;
	app.views.appView = new AppView;
	app.router = new AppRouter;

	Backbone.history.start();

	return app;
})(jQuery);


function test() {
	$.ajax({
		url: 'problem/beta',
		data: {
			id: 'maad'
		},
		method: 'get',
		dataType: 'JSON',
		success: function(response) {
			console.log(response);
		},
		error: function(response) {
			console.log(response);
		}

	})
}


