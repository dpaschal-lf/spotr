<?php
namespace App;

abstract class Model
{
	public function __construct() 
	{
		$this->data = new Data();
	}
}

?>