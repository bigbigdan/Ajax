<?php
  sleep(1);
  $mysqli = new mysqli('localhost','root','root','test');
  $sql = "UPDATE `student` SET `{$_POST[key]}`= '{$_POST[value]}' WHERE `id`='{$_POST[id]}'";
  echo $sql;
  if( $mysqli->query($sql) ){
    echo 5;
  }
 ?>
