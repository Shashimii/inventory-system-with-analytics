<?php

include 'script_con.php';
include 'sysDateTime.php';

$stmt = $con->prepare("SELECT SUM(quantity_used) AS total_quantity 
FROM rm_data 
WHERE action_date = ? AND item_data_status = ?");
$stmt->bind_param("ss", $sys_date, $dataStatusDepleted);
$stmt->execute();
$result = $stmt->get_result();
 
$row = $result->fetch_assoc();
    $data = $row;

$stmt->close();
$con->close();

header('Content-Type: application/json');
echo json_encode($data);
