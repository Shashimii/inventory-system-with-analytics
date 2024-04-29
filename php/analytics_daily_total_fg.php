<?php

include 'script_con.php';
include 'sysDateTime.php';

$stmt = $con->prepare("SELECT SUM(quantity_pcs) AS total_quantity 
FROM fg_data 
WHERE action_date = ? AND item_data_status = ?");
$stmt->bind_param("ss", $sys_date, $dataStatusReceived);
$stmt->execute();
$result = $stmt->get_result();
 
$row = $result->fetch_assoc();
    $data = $row;

$stmt->close();
$con->close();

header('Content-Type: application/json');
echo json_encode($data);
