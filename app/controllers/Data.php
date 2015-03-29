<?php
class Data 
{	
	static $host = 'localhost';
	static $root = 'root';
	static $pw = 'root';
	static $db = 'spotr';

	public function __construct() 
	{
		$this->conn = new mysqli(Self::$host, Self::$user, Self::$pw, Self::$db);
	}

}

?>	



