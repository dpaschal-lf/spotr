define(['jquery', 'underscore', 'backbone', 'models/BetaModel'],
	function($, _, Backbone, BetaModel) {
		var BetaCollection = Backbone.Collection.extend({
			model: BetaModel,

			fetch: function(options) {
				var self = this;
				
				$.ajax({
					url: 'problem/beta/' + options.input,
					dataType: 'JSON',
					success: function(response){
						for (var i = 0, len = response.data.length; i < len; i++) {
							self.add(response.data[i]);
						}

						console.log(response.message);
					},
					error: function(response) {
						console.log(response);
					}
				}); // ajax
			},

		});

		return {
			init: function() {
				app.collections.betaCollection = new BetaCollection;
			},
		};
	}
);
