<?php

spl_autoload_register(function($class){
	$class = explode('\\', $class);
	$class = array_pop($class);
	$library_path = APPDIR . 'lib' . DIRECTORY_SEPARATOR;
	$path_arr = explode('_', $class);
	if( count( $path_arr ) > 1 ){
		array_pop($path_arr);
		foreach( $path_arr as $folder ){
			$library_path .= $folder . DIRECTORY_SEPARATOR;
		}
	}
	$file_path = $library_path . $class . '.php';
	if(file_exists( $file_path ) ){
		require_once($file_path);
	}
});

spl_autoload_register(function($class){
	$class = explode('\\', $class);
    $class = array_pop($class);
    $sub_folders = array();
    $sub_folders[] = "";
    $sub_folders[] = "api";
    foreach( $sub_folders as $sub_folder ){
    	$controller_path = APPDIR . 'controllers' . DIRECTORY_SEPARATOR . (!empty($sub_folder) ? $sub_folder.DIRECTORY_SEPARATOR : '');
	    $path_arr = explode('_', $class);
	    if( count( $path_arr ) > 1 ){
		    array_pop($path_arr);
		    foreach( $path_arr as $folder ){
			    $controller_path .= $folder . DIRECTORY_SEPARATOR;
		    }
	    }
	    $file_path = $controller_path . $class . '.php';
	    if(file_exists( $file_path ) ){
		    require_once($file_path);
        }
    }
});

spl_autoload_register(function($class){
	$class = explode('\\', $class);
	$class = array_pop($class);
	$model_path = APPDIR . 'models' . DIRECTORY_SEPARATOR;
	$path_arr = explode('_', $class);
	if( count( $path_arr ) > 1 ){
		array_pop($path_arr);
		foreach( $path_arr as $folder ){
			$model_path .= $folder . DIRECTORY_SEPARATOR;
		}
	}
	$file_path = $model_path . $class . '.php';
	if(file_exists( $file_path ) ){
		require_once($file_path);
	}
});

?>