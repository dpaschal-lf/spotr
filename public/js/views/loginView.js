define(['jquery', 'underscore', 'backbone', 'lib/text!../pages/login.html'], 
	function($, _, Backbone, loginPage) {
		var LoginView = Backbone.View.extend({
			el: '#app-container',

			events: {
				'click input#login-btn': 'login',
			},

			initialize: function() {
				this.$el.unbind('click');
				this.$el.html(loginPage);
			},

			login: function() {
				var emailVal = $('#email-input').val();
					passwordVal = $('#password-input').val();

				$.ajax({
					url: 'User/login',
					method: 'POST',
					data: {
						email: emailVal,
						password: passwordVal,
					},
					success: function(response) {
						console.log(response);
					},
					error: function(response) {
						console.log(response);
					}
				})
			},

			logout: function() {
				$.ajax({
					url: 'User/logout',
					success: function(response) {
						console.log(response);
					}, 
					error: function(response) {
						console.log(response);
					}
				})
			}
		});

		return {
			init: function() {
				app.views.loginView = new LoginView;
			}
		}
	}
);