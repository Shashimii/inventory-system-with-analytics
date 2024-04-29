<?php

include 'script_con.php';

$stmt = $con->prepare("SELECT client_company, SUM(shipped_quantity) AS total_quantity 
FROM products_data WHERE item_data_status = ? GROUP BY client_company");
$stmt->bind_param("s", $dataStatusShip);
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
