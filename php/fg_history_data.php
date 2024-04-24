<?php

include 'script_con.php';

$stmt = $con->prepare("SELECT action_date, action_time, from_rm_name, from_rm_id, item_name, item_desc, item_lot, item_bin  FROM `fg_data` GROUP BY from_rm_id");
$stmt->execute();
$result1 = $stmt->get_result();

if ($result1->num_rows > 0) {
    while ($row = $result1->fetch_assoc()) {
        $item_identity = $row;
        $from_id = $item_identity["from_rm_id"];
        $from_name = $item_identity["from_rm_name"];
        $stmt = $con->prepare("SELECT action_date, action_time, action_by, quantity_pcs, pack_small, pack_medium, pack_large FROM `fg_data` WHERE (item_data_status = 'Received' OR item_data_status = 'InUse') AND from_rm_id = ? AND from_rm_name = ? ORDER BY from_rm_id");
        $stmt->bind_param("ss", $from_id, $from_name);
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