<?php

include 'login_con.php';

$loggedNone = 'none';
$loggedId = 1;

$stmt = $con->prepare("UPDATE u_logged SET login_type = ? WHERE id = ?");
$stmt->bind_param("si", $loggedNone, $loggedId);
$stmt->execute();

session_start();
session_unset();
session_destroy();

header("location: login");