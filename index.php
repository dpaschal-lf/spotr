<?php
define('ROOT', dirname(__FILE__)); 

session_start();

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

require_once('app/lib/header.php');

$app = Bootstrap::getInstance();
$app->init();

require_once('app/lib/footer.php');


?>
