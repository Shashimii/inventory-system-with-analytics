<?php 

include 'script_con.php';

$stmt = $con->prepare('SELECT action_date, action_time, item_name, item_id, receive_quantity, adj_receive, action_by FROM rm_adj_data');
$stmt->execute();
$result = $stmt->get_result();

$data = array();
while($row = $result->fetch_assoc()) {
    $data[] = $row; 
}

$stmt->close();
$con->close();

header('Content-Type: application/json');
echo json_encode($data);