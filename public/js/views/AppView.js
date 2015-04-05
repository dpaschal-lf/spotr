define(['jquery', 'underscore', 'backbone', 'views/BetaView', 'collections/betaCollection', 'lib/text!../pages/home.html'], 
	function($, _, Backbone, BetaView, betaCollection, homePage) {

		var AppView = Backbone.View.extend({
			el: '#app-container',

			events: {
				
			},
	
			initialize: function() {
				this.$el.unbind('click');
				this.$el.html(homePage);
				// Observes collection for new models and
				// when new model is added, appendSession is called
				// and passed new model
				// this.listenTo(app.collections.sessions, 'add', this.appendSession);
				this.listenTo(app.collections.betaCollection, 'add', this.appendBeta);
			},

			render: function() {
				this.$el.html(homePage);
				location.hash = '';
			}
			
		});
	
		return {
			init: function() {
				app.views.appView = new AppView;
			}
		}

}); 