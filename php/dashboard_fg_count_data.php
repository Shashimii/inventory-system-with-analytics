<?php

include 'script_con.php';

$stmt = $con->prepare("SELECT SUM(quantity_pcs) AS total_quantity FROM `fg_data` WHERE item_data_status = ? AND item_data_active = ?");
$stmt->bind_param("ss", $dataStatusFloat, $dataActive);

if ($stmt->execute()) {
    $result = $stmt->get_result();
    $row = $result->fetch_assoc();

    echo $row['total_quantity'];
} else {
    echo '1';
}