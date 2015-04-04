define(['jquery', 'underscore', 'backbone', 'lib/text!../templates/beta.html'], 
	function($, _, Backbone, betaTmpl) {

		var BetaView = Backbone.View.extend({
			el: 'div',
		
			className: 'beta-item',
		
			template: _.template(betaTmpl),
		
			events: {
					
			},
		
			initialize: function() {
				
			},
		
			html: function() {
				// this.$el.html( this.template( this.model.toJSON() ) );
		
				return this.template( this.model.toJSON() ) ;
			},
		
		});

		return {
			init: function() {
				app.views.betaView = new BetaView;
			},
		}
	} 
);