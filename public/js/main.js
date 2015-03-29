var spotr = (function($) {
	var app = {};

	var SessionModel = Backbone.Model.extend({
		defaults: function() {
			return {
				'0': 0,
				'1': 0,
				'2': 0,
				'3': 0,
				'4': 0,
				'5': 0,
				'6': 0,
				'7': 0,
				'8': 0,
				'9': 0,
				'10': 0,
				'11': 0,
				'12': 0,
				'13': 0,
				'14': 0,
				'15': 0,
			}
		}
	});

	var SessionView = Backbone.View.extend({
		tagName: 'ul',

		className: 'session-item',

		initialize: function() {
			// this.listenTo( this.model, 'change', this.render );
		},
	});

	var Sessions = Backbone.Collection.extend({
		model: SessionModel,
	});

	var AppView = Backbone.View.extend({
		el: '#app-container',

		initialize: function() {
			
		},
	});

	app.appView = new AppView;

	var sessions = new Sessions();

	app.sessions = sessions;

	return app;
})(jQuery);




