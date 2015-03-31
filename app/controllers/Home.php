<?php
namespace Controller;
use App;

class Home extends App\Controller 
{
	public function index() 
	{
		$this->return_view('session/new');
	}
}

?>