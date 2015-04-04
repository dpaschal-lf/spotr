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
		location.hash = 'beta';
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