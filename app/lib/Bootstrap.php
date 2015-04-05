<?php
namespace App;
use Controller;
use Model;

class Bootstrap 
{
	protected function __construct()
	{

		if ($_GET['controller'] === '') {
			$this->controller = 'home';
		} else {
			$this->controller = $_GET['controller'];
		}

		if ($_GET['action'] === '') {
			$this->action = 'index';
		} else {
			$this->action = $_GET['action'];
		}


		if ($_GET['id'] === '') {
			$this->id = 'index';
		} else {
			$this->id = $_GET['id'];
		}
	}

	public static function getInstance()
	{
		static $instance = null;

		if (!$instance) {
			$instance = new Bootstrap();
		}

		return $instance;
	}

	private function __clone() {}

	public function init() 
	{
		session_start();

		$GLOBALS['user'] = new User();

		if (class_exists('Controller\\' . $this->controller)) {
			$parents = class_parents('Controller\\' . $this->controller);

			if (in_array('App\Controller', $parents)) {
				if (method_exists("Controller\\$this->controller", $this->action)) {
					$class = "Controller\\$this->controller";
					return new $class($this->controller, $this->action, $this->id);
				} else {
					echo 'error one';
				} 
			} else {
				echo 'not in array';
			}
		} else {
			echo 'class does not exist';
		}
	}
}

?>