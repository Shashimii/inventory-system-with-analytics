<?php
include 'script_con.php';

$stmt = $con->prepare("SELECT item_name, item_desc,
COALESCE(SUM(pack_small), 0) + COALESCE(SUM(pack_medium), 0) + COALESCE(SUM(pack_large), 0) AS total_quantity,
SUM(pack_small) AS total_small,
SUM(pack_medium) AS total_medium,
SUM(pack_large) AS total_large,
SUM(shipped_quantity) AS total_ship
FROM products_data 
WHERE item_data_active = ?
GROUP BY item_name, item_desc 
ORDER BY id DESC;");

$stmt->bind_param("s", $dataActive);
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