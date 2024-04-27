<?php 

include 'script_con.php';
include 'sysDateTime.php';

$stmt = $con->prepare("SELECT SUM(quantity_scrap) AS total_scrap FROM `rm_data` WHERE action_date = ?");
$stmt->bind_param('s', $sys_date);
$stmt->execute();
$result = $stmt->get_result();

$data = array();
while ($row = $result->fetch_assoc()) {
    $data[] = $row;
}

$stmt->close();
$con->close();

header('Content-Type: application/json');
echo json_encode($data);


