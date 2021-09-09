<?php
require '../../main.php';

main("Dragon Curve", function(){
?>
	<h1>Dragon Curve</h1>

	<p>
	Imagine a long, thin strip of paper which has been folded in half many times.
	Opening each fold to 90&deg; approximates the dragon curve. 
	The result of 12 such folds is demonstrated below.
	</p>
	
	<canvas id="canvas" style="margin:0 -1em"></canvas>
	
	<script type="module" src="main.js"></script>
<?php
});
?>
