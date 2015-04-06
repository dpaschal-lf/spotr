define(['jquery', 'underscore', 'backbone', 'lib/text!../templates/login.html'], 
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
					dataType: 'JSON',
					data: {
						email: emailVal,
						password: passwordVal,
					},
					success: function(response) {
						app.user = {
							isloggedIn: response.isLoggedIn,
						}
					},
					error: function(response) {
						console.log(response);
					}
				})
			},

			logout: function() {
				$.ajax({
					url: 'User/logout',
					dataType: 'JSON',
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