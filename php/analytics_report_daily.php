<?php

include 'script_con.php';
include 'sysDateTime.php';

$stmt_rm = $con->prepare("SELECT SUM(quantity_used) AS total_rm 
FROM rm_data 
WHERE action_date = ? AND item_data_status = ?");
$stmt_rm->bind_param("ss", $sys_date, $dataStatusDepleted);
$stmt_rm->execute();
$result_rm = $stmt_rm->get_result();

$row_rm = $result_rm->fetch_assoc();
$total_rm = $row_rm['total_rm'];

$stmt_fg = $con->prepare("SELECT SUM(quantity_pcs) AS total_fg 
FROM fg_data 
WHERE action_date = ? AND item_data_status = ?");
$stmt_fg->bind_param("ss", $sys_date, $dataStatusReceived);
$stmt_fg->execute();
$result_fg = $stmt_fg->get_result();

$row_fg = $result_fg->fetch_assoc();
$total_fg = $row_fg['total_fg'];

$stmt_rm->close();
$stmt_fg->close();
$con->close();

// Check if the values are null
if (is_null($total_rm)) {
    $total_rm = 0;
}

if (is_null($total_fg)) {
    $total_fg = 0;
}

// store the 2 results into one array
$data[] = array(
    'total_rm' => $total_rm,
    'total_fg' => $total_fg
);


header('Content-Type: application/json');
echo json_encode($data);