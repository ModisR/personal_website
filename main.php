<?php
function main($title, $content)
{?>
    <!DOCTYPE html>
    <html>
        <head>
        <meta charset="utf-8">
        <link rel="stylesheet" href="/assets/main.css">
        <title><?=$title?></title>
    </head>
    
    <body>
        <main><?=$content()?></main>
        <footer>
            <div>&copy 2021 Modestas Ruk&scaron;naitis</div>
        </footer>
    </body>
    </html>

<?php }?>
