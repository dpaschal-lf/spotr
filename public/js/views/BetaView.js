var BetaView = Backbone.View.extend({
	el: 'div',

	className: 'beta-item',

	template: _.template( '<div><p><%= name %></p><p><%= postDate %></p> <video height="300" width="300" src="<%= mediaPath %>" controls></video></div>' ),

	events: {
			
	},

	initialize: function() {

	},

	html: function() {
		// this.$el.html( this.template( this.model.toJSON() ) );

		return this.template( this.model.toJSON() ) ;
	},

});