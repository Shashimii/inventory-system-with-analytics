<?php
include 'script_con.php';

$stmt = $con->prepare("SELECT item_name,
SUM(quantity_receive) AS total_quantity
FROM `rm_data` WHERE item_data_active = 'Y' GROUP BY item_name ORDER BY id DESC;");
$stmt->execute();
$result = $stmt->get_result();

$data = array();
while ($row = $result->fetch_assoc()) {
    if ($row['total_quantity'] < 2000 || $row['total_quantity'] > 9999) {
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



