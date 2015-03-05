<?php
class Connector 
{	
	private $host = 'localhost';
	private $root = 'root';
	private $pw = 'root';
	private $db = 'localhost';

	public function __construct() 
	{
		$this->conn = new mysqli($host, $user, $pw, $db);
	}
}

?>	



