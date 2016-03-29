<?php
sleep(1);
  $where = implode( " OR `id`= ", $_POST['ids'] );
  $where = " `id` = ".$where;
  $mysqli = new mysqli('localhost','root','root','test');
  $sql = "DELETE FROM `student` WHERE ".$where;
  if( $mysqli->query($sql) ){
    echo 5;
  };
 ?>
