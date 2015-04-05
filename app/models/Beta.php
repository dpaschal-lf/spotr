<?php
namespace Model;
use App;

class Beta extends App\Model 
{
	public function get($tag)
	{	
		$tag = App\Sanitizer::clean($tag);
		
		$sql = "SELECT users.name, beta.media_path, beta.post_date
				FROM users
				INNER JOIN beta
				ON users.id = beta.users_id
                INNER JOIN problems
                ON beta.problems_id = problems.id
				WHERE problems.tag = '$tag'";

		$results = $this->data->conn->query($sql);

		$return = [];
		
		if ($results->num_rows > 0) {
			while ($beta = $results->fetch_assoc()) {
				$return[] = [
					'name' => $beta['name'],
					'mediaPath' => $beta['media_path'],
					'postDate' => date('m/d', $beta['post_date']),
				];
			}

			return $return;
		} else {
			return false;
		}
	}
}

?>	



