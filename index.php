<?php
require 'vendor/autoload.php';
require 'main.php';

main("Home", function(){
	$pd = new Parsedown();
	$md = file_get_contents('assets/CV.md');
	echo $pd->text($md);
});
?>