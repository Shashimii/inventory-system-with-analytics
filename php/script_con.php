<?php

$con = mysqli_connect ("localhost", "root", "", "imsdatabase");
if (mysqli_connect_errno()) {
    echo "<script>alert('Failed Database Connection: " . mysqli_connect_error() . "');</script>";
}

$sys_user = 'Developer';
$dataActive = 'Y';
$dataNotActive = 'N';
$dataStatusReceived = 'Received';
$dataStatusInProduction = 'InProduction';
$dataStatusDepleted = 'Depleted';
