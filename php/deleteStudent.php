<?php
  $xx = $_GET['id'];
  $mysqli = new mysqli('localhost','root','','test');
  $sql = "DELETE FROM `student` WHERE `id`= '{$xx}' ";
  $mysqli->query($sql);
 ?>
