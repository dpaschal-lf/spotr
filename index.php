<?php

define('ROOT', dirname(__FILE__)); 
define('APPDIR', dirname(__FILE__) . DIRECTORY_SEPARATOR . 'app' . DIRECTORY_SEPARATOR);

session_start();

require_once('app/lib/autoload.php');

require_once('app/views/header.php');

$app = App\Bootstrap::getInstance();

$app->init();

require_once('app/views/footer.php');

echo $app->controller, $app->action;


?>
