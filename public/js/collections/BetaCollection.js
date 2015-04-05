define(['jquery', 'underscore', 'backbone', 'models/BetaModel'],
	function($, _, Backbone, BetaModel) {
		var BetaCollection = Backbone.Collection.extend({
			model: BetaModel,

			fetch: function(options) {
				var self = this,
					$amber = $('#beta-amber');
				
				$.ajax({
					url: 'problem/beta/' + options.input,
					dataType: 'JSON',
					success: function(response){
						self.reset();
						
						for (var i = 0, len = response.data.length; i < len; i++) {
							self.add(response.data[i]);
						}

						if (response.success) {
							$amber.empty();
						} else {
							$amber.html(response.message);	
						}
					},
					error: function(response) {
						$('#beta-amber').empty().html('There has been an error');
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
