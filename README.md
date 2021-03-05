<html lang="fr">
    <head>
        <meta charset="utf-8">
        <title>GifMignon</title>
    </head>

  <body>

 	$bdd = new PDO('mysql:host=127.0.0.1;dbname=primfx;charset=utf8','root','');
 
$articles = $bdd->query('SELECT titre FROM articles ORDER BY id DESC');
if(isset($_GET['q']) AND !empty($_GET['q'])) {
   $q = htmlspecialchars($_GET['q']);
   $articles = $bdd->query('SELECT titre FROM articles WHERE titre LIKE "%'.$q.'%" ORDER BY id DESC');
   if($articles->rowCount() == 0) {
      $articles = $bdd->query('SELECT titre FROM articles WHERE CONCAT(titre, contenu) LIKE "%'.$q.'%" ORDER BY id DESC');
   }
}
?>
<form method="GET">
   <input type="search" name="q" placeholder="Recherche..." />
   <input type="submit" value="Valider" />
</form>
<?php if($articles->rowCount() > 0) { ?>
   <ul>
   <?php while($a = $articles->fetch()) { ?>
      <li><?= $a['titre'] ?></li>
   <?php } ?>
   </ul>
<?php } else { ?>
Aucun résultat pour: <?= $q ?>...
<?php } ?>
</form>
    <p>tag :</p>
      <p> mignon <input type="checkbox"/></p>
      <p> jeux-videos <input type="checkbox"/></p>
      <p> animes <input type="checkbox"/></p>
      <p> irl <input type="checkbox"/></p>
<p></p>
<img class="project-pic" src="https://img.cloudygif.com/full/f254e23e6c781897.gif" style="width: 250px;" />
<a href="https://maevebestdev.github.io/PixelArt/">pixel art</a>

<img class="project-pic" src="https://media.tenor.com/images/4fd49de4149a6d348e04f2465a3970af/tenor.gif" style="width: 250px;" />
<a href="https://maevebestdev.github.io/Anime/">anime</a>

<img class="project-pic" src="https://m.gifmania.be/Gif-Animes-Jeux-Video/Animations-Jeux-Video-Arcade-Classiques/Images-Gif-Jeux-Video-Classiques/Jeux-Video-Classiques-67074.gif" style="width: 250px;" />
<a href="https://maevebestdev.github.io/Jeux_Videos/">Jeux videos</a>
<p></p>
    <a href="https://maevebestdev.github.io/Sondage/">SONDAGE !</a>
    <p></p>
    <a href="https://maevebestdev.github.io/About_Us/">About us</a>
    <a href="https://maevebestdev.github.io/Help/">Help</a>
    <a href="https://maevebestdev.github.io/Contact_Us/">Contact us</a>
    </body>
</html>
<p></p>
