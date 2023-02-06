<?php 
// include('../model/connect.php');
$response = $bdd->query('SELECT * FROM gallery');
$datas = [];

while($row = $response->fetch()){
    array_push($datas,$row['img_source']);
    array_push($datas,$row['img_tags']);
}
?>