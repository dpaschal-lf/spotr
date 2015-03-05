<?php
define('ROOT', dirname(__FILE__)); 

// $host = 'localhost';
// $user = 'root';
// $pw = 'root';
// $db = 'localhost';

// $conn = new mysqli($host, $user, $pw, $db);

// Autoload classes
spl_autoload_register(function($className) 
{
	$controllers = scandir(ROOT . '/app/controllers');
	$models = scandir(ROOT . '/app/models');

	if (in_array($className . '.php', $controllers)) {
		require ROOT . '/app/controllers/' . $className . '.php';
	} 

	if (in_array($className . '.php', $models)) {
		require ROOT . '/app/models/' . $className . '.php';
	}
});

$app = Bootstrap::getInstance();
$app->init();

$c = new Connector();

print_r($c);

?>
