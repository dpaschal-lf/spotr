define(['jquery', 'underscore', 'backbone', 'views/BetaView', 'collections/betaCollection', 'lib/text!../pages/home.html'], 
	function($, _, Backbone, BetaView, betaCollection, homePage) {

		var AppView = Backbone.View.extend({
			events: {
				// 'click div#beta-btn': 'loadBetaList',
				'click button#get-beta-btn': 'getBetaList',
			},
	
			initialize: function() {
				this.setElement( $('#app-container') );
				this.$el.html(homePage);
				// Observes collection for new models and
				// when new model is added, appendSession is called
				// and passed new model
				// this.listenTo(app.collections.sessions, 'add', this.appendSession);
				this.listenTo(app.collections.betaCollection, 'add', this.appendBeta);
			},
		
			loadBetaList: function() {
				this.$el.load('problem/index');
			},
	
			getBetaList: function() {
				app.collections.betaCollection.fetch({
					url: 'problem/beta/' + $('#problem-id-input').val(),
				});
			},
	
			appendBeta: function(beta) {
				var view = new BetaView({model: beta });
	
				this.$el.append( view.render().el );
			}
	
		});
	
		return {
			init: function() {
				app.views.appView = new AppView;
			}
		}

}); 