<?php
namespace App;

class Sanitizer
{
	public function clean($input) {
		return htmlentities( addslashes($input) );
	}
}

?>