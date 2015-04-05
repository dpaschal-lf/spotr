define(['jquery', 'underscore', 'backbone', 'models/BetaModel'],
	function($, _, Backbone, BetaModel) {
		var BetaCollection = Backbone.Collection.extend({
			model: BetaModel,
		});

		return {
			init: function() {
				app.collections.betaCollection = new BetaCollection;
			},
		};
	}
);
