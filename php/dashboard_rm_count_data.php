<?php

include 'script_con.php';

$stmt = $con->prepare("SELECT SUM(quantity_receive) AS total_quantity FROM `rm_data` WHERE item_data_status = ? AND item_data_active = ?");
$stmt->bind_param("ss", $dataStatusReceived, $dataActive);

if ($stmt->execute()) {
    $result = $stmt->get_result();
    $row = $result->fetch_assoc();

    echo $row['total_quantity'];
} else {
    echo '1';
}