<?php

include 'script_con.php';

$stmt = $con->prepare("SELECT action_date, action_time, action_by, item_name, item_desc, item_id, item_lot, item_bin FROM rm_data WHERE item_data_status = '$dataStatusReceived' ORDER BY id DESC");
$stmt->execute();
$result1 = $stmt->get_result();

$itemRow = [];

if ($result1->num_rows > 0) {
    while ($row = $result1->fetch_assoc()) {
        $item_identity = $row;
        $item_name = $item_identity['item_name'];
        $item_id = $item_identity['item_id'];
        $stmt = $con->prepare("SELECT action_date, action_time, action_by, quantity_receive, quantity_inProduction, quantity_scrap, quantity_used, quantity_created_ply, quantity_created_pcs FROM rm_data WHERE item_name = ? AND item_id = ?");
        $stmt->bind_param('ss', $item_name, $item_id);
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