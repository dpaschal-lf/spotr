<?php
namespace App;

class Sanitizer
{
	public static function clean($input) {
		return htmlentities(addslashes($input));
	}
}

?>