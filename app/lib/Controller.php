<?php
namespace App;

abstract class Controller 
{
	public function __construct($controller, $action, $id) 
	{
		$this->controller = $controller;
		$this->action = $action;
		$this->id = $id;
		$this->{$this->action}($this->id);
	}

	public function returnView($view) 
	{
		$src = 'app/views/' . $view . '.php';
	
		require_once($src);
	}
}


?>