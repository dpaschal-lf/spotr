<?php
// namespace Controller;

class Home extends Controller 
{
	public function index() 
	{
		$this->return_view('session/new');
	}
}

?>