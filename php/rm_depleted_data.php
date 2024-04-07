<?php 

include 'script_con.php';

$stmt = $con->prepare("SELECT action_date, item_name, item_desc, item_id, item_lot, item_bin, quantity_scrap, quantity_used FROM rm_data WHERE item_data_status = '$dataStatusDepleted' AND item_data_active = '$dataActive' AND quantity_scrap AND quantity_used IS NOT NULL");
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

