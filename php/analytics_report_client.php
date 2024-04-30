<?php

include 'script_con.php';

$stmt = $con->prepare("SELECT client_company, SUM(shipped_quantity) AS total_shipped_quantity 
FROM products_data 
WHERE item_data_status = ?
GROUP BY client_company 
ORDER BY total_shipped_quantity DESC 
LIMIT 5");
$stmt->bind_param("s", $dataStatusShip);
$stmt->execute();
$result = $stmt->get_result();

$data = [];
while ($row = $result->fetch_assoc()) {
    $data[] = $row;
}

$stmt->close();
$con->close();

header('Content-Type: application/json');
echo json_encode($data);
