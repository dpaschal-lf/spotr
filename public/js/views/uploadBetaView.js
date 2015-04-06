define(['jquery', 'underscore', 'backbone', 'lib/text!../templates/uploadBeta.html'], 
	function($, _, Backbone, uploadBetaPage) {
		var UploadBetaView = Backbone.View.extend({
			el: '#app-container',

			events: {
				'click div#uploadBeta-input': 'selectUploadFile',
				'change input#uploadBeta-hidden-input': 'appendFileName',
				'click input#uploadBeta-btn': 'uploadFile',
			},

			initialize: function() {
				this.$el.unbind('click');
				this.$el.html(uploadBetaPage);
			},

			selectUploadFile: function() {
				$('#uploadBeta-hidden-input').trigger('click');

			},

			appendFileName: function(e) {
				var path = e.target.value,
					dir = path.split('\\'),
					file = dir.pop();
				
				this.$el.append(file);
			},

			uploadFile: function() {
				
			},

			render: function() {
				this.$el.html(uploadBetaPage);
				location.hash = 'uploadBeta';
			},
		});

		return {
			init: function() {
				app.views.uploadBetaView = new UploadBetaView;
			}
		}
	}
);