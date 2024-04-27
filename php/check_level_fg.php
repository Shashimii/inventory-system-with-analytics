<?php 
include 'script_con.php';

$stmt = $con->prepare("SELECT item_name,
SUM(CASE WHEN item_data_status = 'Float' THEN quantity_pcs ELSE 0 END) AS total_quantity
FROM `fg_data` WHERE item_data_status != 'Received' AND item_data_active = 'Y' GROUP BY item_name ORDER BY id DESC;");
$stmt->execute();
$result = $stmt->get_result();

$data = array();
while ($row = $result->fetch_assoc()) {
    if ($row['total_quantity'] < 1000 || $row['total_quantity'] > 4999) {
        if($row['total_quantity'] === null) {
            $row['total_quantity'] = '0';
        }
        $data[] = $row;
    }
}

$stmt->close();
$con->close();

header('Content-Type: application/json');
echo json_encode($data);





