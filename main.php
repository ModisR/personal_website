<?php
function main($title, $content) {
?>
	<!DOCTYPE html>
	<html>
	<head>
		<meta charset="utf-8">
		<link rel="stylesheet" href="/assets/main.css">
		<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.6.0/font/bootstrap-icons.css">
		<title><?=$title?></title>
	</head>
	
	<body>

		<header>
		<div>
			<div id="social-links">
				<a class="bi-github" href="https://github.com/ModisR" title="Github"></a>
				<a class="bi-linkedin" href="https://www.linkedin.com/in/modestas-ruk%C5%A1naitis-6211331b4/" title="LinkedIn"></a>
				<a class="bi-facebook" href="https://www.facebook.com/profile.php?id=100012345096243" title="Facebook"></a>
				<a class="bi-instagram" href="https://www.instagram.com/the_send_fez/" title="Instagram"></a>
			<div>
		</div>
		</header>

		<main>
		<div>
			<?=$content()?>
		</div>
		</main>

		<footer>
			<div>&copy; 2021 Modestas Ruk&scaron;naitis</div>
		</footer>

	</body>
	</html>
<?php }?>
