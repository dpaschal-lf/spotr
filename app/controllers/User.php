<?php
namespace Controller;
use App;
use Model;

class User extends App\Controller
{
	public function login() 
	{	
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

		echo json_encode($return);
	}

	public function logout() 
	{
		$_SESSION['userinfo'] = null;

		session_destroy();

		$return = [
			'message' => 'Logout successful',
		];

		echo json_encode($return);	
	}

	public function test() 
	{
		print_r($_FILES);
	}
}
?>