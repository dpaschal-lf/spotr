<?php
namespace App;

class User 
{
	public function __construct($session)
	{
		if ( isset($session['userinfo']) ) {
			$this->loggedIn = true;
			$this->info = $session['userinfo'];
		}

		$this->data = new Data();
	}

	public function login() 
	{	
		$username = App\Sanitizer::clean( $_POST['username'] );
		
		$password = sha1( $_POST['password'] );

		$sql = "SELECT id, username, name, email, about, access FROM users WHERE username = '$username' AND password = '$password'";

		$result = $this->data->conn->query($sql);

		$success = [];

		if ( $this->data->conn->affected_rows === 1 ) {
			$this->isLoggedIn = true;

			session_start();

			$_SESSION['userinfo'] = $result->fetch_assoc();

			$success = [
				'message' => 'User has successfully logged in',
				'isLoggedIn' => true,
			];
		} else {
			$success = [
				'message' => 'Username/Password is incorrect',
				'isLoggedIn' => false,
			];
		}

		echo json_encode($success);
	}

	public function logout() 
	{
		$_SESSION['userinfo'] = null;

		session_destroy();

		$success = [
			'message' => 'Logout successful',
		];

		echo json_encode($success);	
	}
}

?>