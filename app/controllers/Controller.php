<?php
// namespace Controller;

abstract class Controller 
{
	public function __construct($controller, $action) 
	{
		$this->controller = $controller;
		$this->action = $action;
		$this->{$this->action}();
	}

	public function return_view($view) 
	{
		$src = 'app/views/' . $view . '.php';
		
		require($src);
	}
}


?>