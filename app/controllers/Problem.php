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

	public function betaList()
	{
		$m = new Model\Problem();

		print_r($m);
	}
}

?>