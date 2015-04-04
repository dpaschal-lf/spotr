var SessionView = Backbone.View.extend({
	tagName: 'ul',

	className: 'session-item',

	events: {
		'click button.increment-btn': 'increment',
		'click button.decrement-btn': 'decrement',
	},

	template: _.template( $('#session-item-tmpl').html() ),

	initialize: function() {
		this.listenTo( this.model, 'change', this.render );
	},

	render: function() {
		this.$el.html( this.template( this.model.toJSON() ) );

		return this;
	},

	increment: function(e) {
		var rowGrade = e.target.getAttribute('data-grade');

		this.model.set(rowGrade, this.model.get(rowGrade) + 1);
	},

	decrement: function(e) {
		var rowGrade = e.target.getAttribute('data-grade');
		
		if (this.model.get(rowGrade) > 0) {
			this.model.set(rowGrade, this.model.get(rowGrade) - 1);
		}
	},
});