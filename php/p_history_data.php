<?php

include 'script_con.php';

$stmt = $con->prepare("SELECT action_date, action_time, item_name, item_desc, item_id, item_lot, item_bin  FROM `products_data` GROUP BY item_id ORDER BY id DESC");
$stmt->execute();
$result1 = $stmt->get_result();

if ($result1->num_rows > 0) {
    while ($row = $result1->fetch_assoc()) {
        $item_identity = $row;
        $from_id = $item_identity["item_id"];
        $from_name = $item_identity["item_name"];
        $stmt = $con->prepare("SELECT action_date, action_time, action_by, pack_small, pack_medium, pack_large, shipped_quantity, client_company FROM `products_data` WHERE item_id = ? AND item_name = ? ORDER BY item_id");
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