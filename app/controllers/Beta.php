<?php
namespace Controller;
use App;
use Model;

class Beta extends App\Controller
{
	public function index()
	{
		$this->returnView('beta/index');
	}

	public function spray($tag)
	{	
		$beta = new Model\Beta();
	
		if ($beta->get($tag)) {
			echo json_encode($beta->get($tag));
		} else {
			echo 'No matches';
		}
	}
}




?>