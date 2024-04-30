<?php

include 'script_con.php';
include 'sysDateTime.php';

// get month only
$getMonth = explode('/', $sys_date);
$month = $getMonth[0];

$stmt_fg = $con->prepare("SELECT SUM(quantity_pcs) AS total_fg 
FROM `fg_data` 
WHERE SUBSTRING_INDEX(action_date, '/', 1) = ? AND item_data_status = ?");
$stmt_fg->bind_param("ss", $month, $dataStatusReceived);
$stmt_fg->execute();
$result_fg = $stmt_fg->get_result();

$row_fg = $result_fg->fetch_assoc();
$total_fg = $row_fg['total_fg'];

$stmt_p = $con->prepare("SELECT SUM(shipped_quantity) AS total_p 
FROM `products_data` 
WHERE SUBSTRING_INDEX(action_date, '/', 1) = ? AND item_data_status = ?");
$stmt_p->bind_param("ss", $month, $dataStatusShip);
$stmt_p->execute();
$result_p = $stmt_p->get_result();

$row_p = $result_p->fetch_assoc();
$total_p = $row_p['total_p'];

$stmt_fg->close();
$stmt_p->close();
$con->close();

// Check if the values are null
if (is_null($total_fg)) {
    $total_fg = 0;
}

if (is_null($total_p)) {
    $total_p = 0;
}

// store the 2 results into one array
$data[] = array(
    'total_fg' => $total_fg,
    'total_p' => $total_p
);


header('Content-Type: application/json');
echo json_encode($data);