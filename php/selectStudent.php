<?php
// sleep(1);
$mysqli = new mysqli("localhost", "root", "", "test");
$query = "SELECT * FROM student ORDER by ID";
$result = $mysqli->query($query);
$row = $result->fetch_all(MYSQLI_ASSOC);
echo json_encode($row);
?>
