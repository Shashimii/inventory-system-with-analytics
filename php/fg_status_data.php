<?php 
include 'script_con.php';

$stmt = $con->prepare("SELECT 
item_name, 
item_desc,
SUM(CASE WHEN item_data_status = 'Float' THEN quantity_pcs ELSE 0 END) AS total_quantity,
SUM(pack_small) AS total_small,
SUM(pack_medium) AS total_medium,
SUM(pack_large) AS total_large
FROM `fg_data` WHERE item_data_status != 'Received' AND item_data_active = 'Y' GROUP BY item_name ORDER BY id DESC;");
$stmt->execute();
$result = $stmt->get_result();

$data = array();
while ($row = $result->fetch_assoc()) {
    
    $row['total_quantity'] = intval($row['total_quantity']);
    $row['total_small'] = intval($row['total_small']);
    $row['total_medium'] = intval($row['total_medium']);
    $row['total_large'] = intval($row['total_large']);

    $data[] = $row;
}

$stmt->close();
$con->close();

header('Content-Type: application/json');
echo json_encode($data);





