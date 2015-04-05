define(['jquery', 'underscore', 'backbone', 'lib/text!../pages/uploadBeta.html'], 
	function($, _, Backbone, uploadBetaPage) {
		var UploadBetaView = Backbone.View.extend({
			el: '#app-container',

			events: function() {

			},

			initialize: function() {
				this.$el.html(uploadBetaPage);
			},
		});

		return {
			init: function() {
				app.views.uploadBetaView = new UploadBetaView;
			}
		}
	}
);