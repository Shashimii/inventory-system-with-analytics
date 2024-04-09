<?php

include 'script_con.php';

$stmt = $con->prepare("SELECT COALESCE(MAX(id), 0) AS selected_id FROM rm_data WHERE item_data_status = '$dataStatusDepleted' AND item_data_active = '$dataActive'");
$stmt->execute();
$result = $stmt->get_result();
$row = $result->fetch_assoc();

$selected_id = $row['selected_id'];

if ($selected_id > 0) {
    $stmt = $con->prepare("SELECT action_date, action_time, action_by, item_name, item_id FROM rm_data WHERE id = '$selected_id'");
    $stmt->execute();
    $result = $stmt->get_result();

    $data = array();
        while ($row = $result->fetch_assoc()) {
        $data[] = $row;
    }
}

$stmt->close();
$con->close();

header('Content-Type: application/json');
echo json_encode($data);
