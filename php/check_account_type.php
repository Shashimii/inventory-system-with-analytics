<?php

include 'script_con.php';

$stmt = $con->prepare('SELECT login_type FROM u_logged');
$stmt->execute();
$result = $stmt->get_result();
$type = $result->fetch_assoc();

$login_type = $type['login_type'];

echo $login_type;
