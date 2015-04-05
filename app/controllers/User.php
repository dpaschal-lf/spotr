<?php
namespace Controller;
use App;
use Model;

class User extends App\Controller
{
	public function login() 
	{	
		echo 'sadfsf';
		$user = new Model\User();

		$userInfo = $user->get($_POST['email'], $_POST['password']);

		if ($userInfo) {
			session_start();

			$_SESSION['userinfo'] = $userInfo;

			$return = [
				'message' => 'User has successfully logged in',
				'isLoggedIn' => true,
			];
		} else {
			$return = [
				'message' => 'Username/Password is incorrect',
				'isLoggedIn' => false,
			];
		}

		print_r($_SESSION);
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