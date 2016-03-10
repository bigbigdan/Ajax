<?php
  $xuehao = $_GET['x'];
  $mysqli = new mysqli('localhost','root','','test');
  $sql = "UPDATE `student` SET `xuehao`= '{$xuehao}' WHERE `id`=18";
  $mysqli->query($sql);
 ?>
