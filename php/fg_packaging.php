<?php 

include 'script_con.php';
include 'sysDateTime.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $json = file_get_contents('php://input');
    $data = json_decode($json, true);

    if ($data === null) {
        echo json_encode(['error' => 'Fail to decode JSON data']);
    } else {
        $selectedList = $data['selectedList'];
        $selectedQuantity = $data['selectedQuantity'];
        $selectedBox = $data['selectedBox'];

        $successQuery = 'false';

        foreach ($selectedList as $row) {
            $date = $row['date'];
            $rawname = $row['rawname'];
            $rawid = $row['rawid'];
            $name = $row['name'];
            $desc = $row['desc'];
            $lot = $row['lot'];
            $bin = $row['bin'];
            $quantity = $row['quantityselected'];

            $stmt = $con->prepare("SELECT quantity_pcs FROM fg_data WHERE from_rm_id = ? AND item_data_status = ?");
            $stmt->bind_param('ss', $rawid, $dataStatusFloat);
            if ($stmt->execute()) {
                $result = $stmt->get_result();
                $row = $result->fetch_assoc();

                $itemQuantity = $row['quantity_pcs'];

                $newQuantity = $itemQuantity - $quantity;

                if ($selectedBox === 'Small') {
                    $stmt = $con->prepare("INSERT INTO fg_data 
                    (action_date, action_time, action_by, item_name, item_desc, item_lot, item_bin, from_rm_name, from_rm_id, quantity_pcs, pack_small, item_data_status, item_data_active)
                    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)");
                    $stmt->bind_param('sssssssssiiss', $sys_date, $sys_time, $sys_user, $name, $desc, $lot, $bin, $rawname, $rawid, $newQuantity, $quantity, $dataStatusInUse, $dataActive);
                    if ($stmt->execute()) {
                        $stmt = $con->prepare("UPDATE fg_data SET
                        quantity_pcs = ? WHERE from_rm_name = ? AND from_rm_id = ? AND item_data_status = ?");
                        $stmt->bind_param("isss", $newQuantity, $rawname, $rawid, $dataStatusFloat);
                        if ($stmt->execute()) {
                            $successCheck = 'true';
                        }
                    }; 
                };
            };
        }

        if($successQuery) {
            echo '0';
        } else {
            echo '1';
        }
    }
}