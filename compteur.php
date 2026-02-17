<?php
$file = 'visites.txt';
$log = 'log.txt';
$ip = $_SERVER['REMOTE_ADDR'];
$ip_a_exclure = ['176.171.57.254']; // ← ton IP

if (in_array($ip, $ip_a_exclure)) {
  exit;
}

// Incrémente le compteur
if (!file_exists($file)) {
  file_put_contents($file, "0");
}
$visites = (int) file_get_contents($file);
$visites++;
file_put_contents($file, $visites);

// Localisation estimée
$geo = @file_get_contents("http://ip-api.com/json/$ip?fields=city,regionName,country");
$geoData = json_decode($geo, true);
$ville = $geoData['city'] ?? 'Inconnue';
$region = $geoData['regionName'] ?? '';
$pays = $geoData['country'] ?? '';

// URL visitée
$page = $_SERVER['HTTP_REFERER'] ?? 'Accès direct';

// Clics spécifiques (si appel AJAX avec paramètre)
$action = $_POST['action'] ?? 'connexion';

// Horodatage
$date = date("Y-m-d H:i:s");
$ligne = "$date - IP: $ip - $action - Page: $page - Localisation: $ville, $region, $pays\n";
file_put_contents($log, $ligne, FILE_APPEND);
?>