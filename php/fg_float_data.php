<?php 

include 'script_con.php';

$stmt = $con->prepare("SELECT action_date, item_name, item_desc, item_lot, item_bin, from_rm_name, from_rm_id, quantity_pcs FROM fg_data WHERE item_data_status = '$dataStatusFloat' AND item_data_active = '$dataActive' ORDER BY id DESC");
$stmt->execute();
$result = $stmt->get_result();

$data = array();
while ($row = $result->fetch_assoc()) {
    $data[] = $row;
}

// Close the connection
$stmt->close();
$con->close();

// Send the data as JSON
header('Content-Type: application/json');
echo json_encode($data);

