define(['jquery', 'underscore', 'backbone'],
	function($, _, Backbone) {
		var BetaModel = Backbone.Model.extend({
			defaults: function() {
				return {

			}
		},

		urlRoot: 'problem/beta',

		url: function() {
			var url = this.urlRoot + '/'  + this.id;

			return url;
		},
	});

	return BetaModel;

	}
);

