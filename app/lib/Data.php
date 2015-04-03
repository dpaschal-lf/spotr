<?php
namespace App;

class Data 
{	
	static $host = 'localhost';
	static $user = 'root';
	static $pw = 'root';
	static $db = 'spotr';

	public function __construct() 
	{	
		$this->conn = new \mysqli(self::$host, self::$user, self::$pw, self::$db);
	}
	
}
?>	



