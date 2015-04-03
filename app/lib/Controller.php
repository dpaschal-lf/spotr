<?php
namespace App;

abstract class Controller 
{
	public function __construct($controller, $action) 
	{
		$this->controller = $controller;
		$this->action = $action;
		$this->{$this->action}();
	}

	public function returnView($view) 
	{
		$src = 'app/views/' . $view . '.php';
		
		require_once($src);
	}
}


?>