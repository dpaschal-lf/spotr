define(['jquery', 'underscore', 'backbone', 'views/BetaView', 'collections/betaCollection', 'lib/text!../pages/betaList.html'],
	function($, _, Backbone, BetaView, betaCollection, betaListPage) {
		var BetaListView = Backbone.View.extend({
			el: '#app-container',

			events: {
				'click div#getBeta-btn': 'getBetaList',
				'click div.betaExpand-btn': 'showVideo',
				'click div#close-btn': 'returnHome',
			},

			initialize: function() {
				this.$el.html(betaListPage);

				this.listenTo(app.collections.betaCollection, 'add', this.appendBeta);
			},

			getBetaList: function() {
				app.collections.betaCollection.fetch({
					url: 'problem/beta/' + $('#problem-id-input').val(),
				});
			},
	
			appendBeta: function(beta) {
				var view = new BetaView({model: beta });
				this.$el.append( view.render().el );
			},

			showVideo: function(e) {
				$(e.target).parents().eq(0).toggleClass('selected');
			},

			returnHome: function() {
				location.hash = '';
			}


		});

		return {
			init: function() {
				app.views.betaListView = new BetaListView;
			}
		}
	}
);