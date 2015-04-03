<?php
namespace Controller;
use App;
use Model;

class Problem extends App\Controller
{
	public function index()
	{
		$this->returnView('problem/index');
	}

	public function beta($tag)
	{	
		$beta = new Model\Beta();
	
		echo json_encode($beta->get($tag));
	}
}




?>