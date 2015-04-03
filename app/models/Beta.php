<?php
namespace Model;
use App;

class Beta extends App\Model 
{
	public function get($tag)
	{
		$sql = "SELECT users.name, problems_media.media_path, problems_media.post_date
				FROM users
				INNER JOIN problems_media
				ON users.id = problems_media.users_id
                INNER JOIN problems
                ON problems_media.problems_id = problems.id
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
		}
	}
}

?>	



