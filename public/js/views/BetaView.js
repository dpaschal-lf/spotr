define(['jquery', 'underscore', 'backbone', 'lib/text!../templates/beta.html'], 
	function($, _, Backbone, betaTmpl) {

		var BetaView = Backbone.View.extend({
			tagName: 'div',

			className: 'beta',

			template: _.template(betaTmpl),
		
			events: {
					
			},
		
			initialize: function() {
				
			},
		
			render: function() {
				this.$el.html(this.template(this.model.toJSON()));

				return this;
			},
		
		});

		return BetaView;
	
	} 
);