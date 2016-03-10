<?php
  $mysqli = new mysqli('localhost','root','','test');
  $sql = "INSERT INTO `student`( `xuehao`, `name`, `sex`, `age`, `score`) VALUES (100,'zhansan','nan',10,100)";
  $mysqli->query($sql);
?>
