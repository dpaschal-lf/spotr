<?php
namespace Controller;
use App;
use Model;

class Home extends App\Controller 
{
	public function index() 
	{
		$this->returnView('home/index');	
	}
}

?>