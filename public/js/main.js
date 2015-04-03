var spotr = (function($) {
	var app = {
		views: {},
		collections: {},
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

	// 	template: _.template( $('#session-item-tmpl').html() ),

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
	})

	var BetaView = Backbone.View.extend({
		el: 'div',

		className: 'beta-item',

		template: _.template( '<div><p><%= name %></p><p><%= postDate %></p> <video height="300" width="300" src="<%= mediaPath %>" controls></video></div>' ),

		events: {
			
		},

		initialize: function() {

		},

		html: function() {
			// this.$el.html( this.template( this.model.toJSON() ) );

			return this.template( this.model.toJSON() ) ;
		},

	})

	

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
			// this.listenTo(app.collections.sessions, 'add', this.appendSession);
			this.listenTo(app.collections.beta, 'add', this.appendBeta);
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
			app.collections.beta.fetch({
				url: 'problem/beta/' + $('#problem-id-input').val(),
			});

			console.log('fetched');
		},

		appendBeta: function(beta) {
			var view = new BetaView({model: beta });

			this.$el.append( view.html() );
		}

	});

	var AppRouter = Backbone.Router.extend({
		routes: {
			'': 'index',
			'session': 'session',
			'problem': 'problem',
			'beta': 'beta',
		},

		index: function() {
	
		},

		session: function() {
			window.location.hash = 'session';
		},

		problem: function() {

		},

		beta: function() {

		}
	})

	// app.collection.sessions = new SessionCollection;
	app.collections.beta = new BetaList;
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


