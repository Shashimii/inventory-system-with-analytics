<?php 

include 'script_con.php';

$stmt = $con->prepare("SELECT action_date, action_by, item_name, item_desc, item_id, item_id, item_lot, item_bin, pack_small, pack_medium, pack_large FROM products_data WHERE item_data_status = ? AND item_data_active = ?");
$stmt->bind_param("ss", $dataStatusReceived, $dataActive);
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