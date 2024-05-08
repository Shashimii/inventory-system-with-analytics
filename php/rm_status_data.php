<?php 
include 'script_con.php';

$stmt = $con->prepare("SELECT item_desc,
    SUM(CASE WHEN (item_data_active = 'Y') THEN quantity_receive ELSE 0 END) AS total_quantity,
    SUM(CASE WHEN (item_data_active = 'Y') THEN quantity_inProduction ELSE 0 END) AS total_inProduction,
    SUM(CASE WHEN (item_data_active = 'Y' OR item_data_active = 'N') THEN quantity_scrap ELSE 0 END) AS total_scrap,
    SUM(CASE WHEN (item_data_active = 'Y' OR item_data_active = 'N') THEN quantity_used ELSE 0 END) AS total_used,
    SUM(CASE WHEN (item_data_active = 'Y' OR item_data_active = 'N') THEN quantity_created_pcs ELSE 0 END) AS total_pcs
    FROM rm_data
    WHERE item_data_status != 'Depleted'
    GROUP BY item_desc
    ORDER BY id DESC");
$stmt->execute();
$result = $stmt->get_result();

$data = array();
while ($row = $result->fetch_assoc()) {

    $row['total_quantity'] = intval($row['total_quantity']);
    $row['total_inProduction'] = intval($row['total_inProduction']);
    $row['total_scrap'] = intval($row['total_scrap']);
    $row['total_used'] = intval($row['total_used']);
    $row['total_pcs'] = intval($row['total_pcs']);
    
    $data[] = $row;
}

$stmt->close();
$con->close();

header('Content-Type: application/json');
echo json_encode($data);





