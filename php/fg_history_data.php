<?php

include 'script_con.php';

$stmt = $con->prepare("SELECT action_date, action_time, item_name, item_id, item_desc, item_lot, item_bin  FROM `fg_data` GROUP BY item_id");
$stmt->execute();
$result1 = $stmt->get_result();

$itemRow = [];

if ($result1->num_rows > 0) {
    while ($row = $result1->fetch_assoc()) {
        $item_identity = $row;  
        $item_id = $item_identity["item_id"];
        $stmt = $con->prepare("SELECT action_date, action_time, action_by, quantity_pcs, pack_small, pack_medium, pack_large, quantity_IN, quantity_OUT FROM `fg_data` WHERE (item_data_status = 'Received' OR item_data_status = 'InUse') AND item_id = ? ORDER BY item_id");
        $stmt->bind_param("s", $item_id);
        $stmt->execute();
        $result2 = $stmt->get_result();

        $item_data = ($result2->num_rows > 0 ? $result2->fetch_all(MYSQLI_ASSOC) : []);

        $itemRow[] = [
            'item' => $item_identity,
            'data' => $item_data,
        ];

    }
}

header('Content-Type: application/json');
echo json_encode($itemRow);

