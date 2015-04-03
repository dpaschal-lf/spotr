<?php
namespace Controller;
use App;
use Model;

class Home extends App\Controller 
{
	public function index() 
	{
		require_once('app/views/header.php');
		$this->returnView('home/index');
		require_once('app/views/footer.php');
	}
}

?>