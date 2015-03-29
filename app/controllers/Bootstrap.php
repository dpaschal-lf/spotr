<?php
class Bootstrap 
{
	protected function __construct()
	{
		if ($_GET['controller'] === '') {
			$this->controller = 'Home';
		} else {
			$this->controller = ucfirst($_GET['controller']);
		}

		if ($_GET['action'] === '') {
			$this->action = 'index';
		} else {
			$this->action = $_GET['action'];
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

	// prevent cloning of instance
	private function __clone() {}

	public function init() 
	{
		if (class_exists($this->controller)) {
			$parents = class_parents($this->controller);
			if (in_array('Controller', $parents)) {
				if (method_exists($this->controller, $this->action)) {
					return new $this->controller($this->controller, $this->action);
				} else {
					echo 'error one';
				} 
			} else {
				echo 'error two';
			}
		} else {
			echo 'error three';
		}
	}
}

?>