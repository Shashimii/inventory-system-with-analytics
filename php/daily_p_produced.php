<?php 

include 'script_con.php';
include 'sysDateTime.php';

$stmt = $con->prepare("SELECT item_name, item_id, pack_small, pack_medium, pack_large FROM products_data WHERE action_date = ? AND item_data_status = ?");
$stmt->bind_param('ss', $sys_date, $dataStatusReceived);
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


