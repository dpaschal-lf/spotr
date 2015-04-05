<?php
namespace Model;
use App;

class User extends App\Model
{
	public function get($email, $password) {
		$email = App\Sanitizer::clean($email);
		$password = App\Sanitizer::clean($password);

		$sql = "SELECT id, name, email, height, weight, ape_index 
				FROM users 
				WHERE email = '$email' 
				AND password = '$password'";

		$result = $this->data->conn->query($sql);

		if ( $this->data->conn->affected_rows === 1 ) {
			return $result->fetch_assoc();
		} else {
			return false;
		}
	} // get
}

?>	

