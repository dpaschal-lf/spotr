define(['jquery', 'underscore', 'backbone', 'lib/text!../templates/uploadBeta.html'], 
	function($, _, Backbone, uploadBetaTemplate) {
		var UploadBetaView = Backbone.View.extend({
			el: '#app-container',

			template: _.template(uploadBetaTemplate),

			events: {
				'click div#uploadBeta-input': 'selectUploadFile',
				'change input#uploadBeta-hidden-input': 'appendFileName',
				'click input#uploadBeta-btn': 'uploadFile',
			},

			initialize: function() {
				this.$el.unbind('click');
				this.render();
			},

			selectUploadFile: function() {
				$('#uploadBeta-hidden-input').trigger('click');
			},

			appendFileName: function(e) {
				var path = e.target.value,
					dir = path.split('\\'),
					fileName = dir.pop(),
					files = e.target.files,
					data = new FormData();

    				$.each(files, function(key, val) {
        				data.append(key, val);
    				});
				
    				$.ajax({
    					url: 'User/test',
    					type: 'POST',
    					data: data,
    					cache: false,
    					processData: false,
    					contentType: false,
    					success: function(response) {
    						console.log(response);
    					}
    				})


				
				this.$el.append(fileName);
			},

			uploadFile: function() {
				
			},

			render: function() {
				this.$el.html(this.template());
				location.hash = 'uploadBeta';

				return this;
			},
		});

		return {
			init: function() {
				app.views.uploadBetaView = new UploadBetaView;
			}
		}
	}
);