define(['jquery', 'underscore', 'backbone', 'views/BetaView', 'collections/betaCollection', 'lib/text!../pages/betaList.html'],
	function($, _, Backbone, BetaView, betaCollection, betaListPage) {
		var BetaListView = Backbone.View.extend({
			el: '#app-container',

			events: {
				'click div#getBeta-btn': 'getBetaList',
				'click div.betaExpand-btn': 'showVideo',
			},

			initialize: function() {
				this.$el.html(betaListPage);

				this.listenTo(app.collections.betaCollection, 'add', this.appendBeta);
				this.listenTo(app.collections.betaCollection, 'reset', this.removeBeta);
			},

			getBetaList: function() {
				var inputVal = $('#problem-id-input').val(),
					$amber = $('#beta-amber');

				app.collections.betaCollection.reset();

				if (!inputVal) {
					$('#beta-amber').html('Please provide problem id');
				} else {
					app.collections.betaCollection.fetch({
						url: '/problem/beta/' + inputVal,
						success: function() {
							$amber.empty();
						},
						error: function() {
							$amber.empty().html('No matches found');
						}
					});	
				}
			},
	
			appendBeta: function(beta) {
				var view = new BetaView({model: beta });
				this.$el.append( view.render().el );
			},

			removeBeta: function() {
				$('.beta').remove();
			},

			// not reliable
			showVideo: function(e) {
				$(e.target).parents().eq(0).toggleClass('selected');
			},

		});

		return {
			init: function() {
				app.views.betaListView = new BetaListView();
			}
		}
	}
);




