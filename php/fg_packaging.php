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
        $packName = $data['packName'];
        $packDesc = $data['packDesc'];
        $packId = $data['packId'];
        $packStorage = $data['packStorage'];

        // batch system that will only count the batches daily and reset the next day
        $stmt = $con->prepare("SELECT MAX(item_lot) AS last_batch_num from products_data WHERE action_date = ? AND item_name = ?");
        $stmt->bind_param("ss", $sys_date, $packName);
        $stmt->execute();
        $result = $stmt->get_result();
        $row = $result->fetch_assoc();
        $row['last_batch_num'];
        
        // check if batch number is not blank or null if it is batch number will be 1 as the start of batch
        $batchNumber = $row['last_batch_num'] ? intval(substr($row['last_batch_num'], 5)) + 1 : '1';
        $pack_batch = "Batch" . $batchNumber;

        $successQuery = false;

        foreach ($selectedList as $row) {
            $date = $row['date'];
            $rawname = $row['rawname'];
            $rawid = $row['rawid'];
            $name = $row['name'];
            $desc = $row['desc'];
            $lot = $row['lot'];
            $bin = $row['bin'];
            $quantity = $row['quantityselected'];

            $stmt1 = $con->prepare("SELECT quantity_pcs FROM fg_data WHERE from_rm_id = ? AND item_data_status = ?");
            $stmt1->bind_param('ss', $rawid, $dataStatusFloat);
            if ($stmt1->execute()) {
                $result1 = $stmt1->get_result();
                $row1 = $result1->fetch_assoc();

                $itemQuantity = $row1['quantity_pcs'];
                $newQuantity = $itemQuantity - $quantity;

                if ($selectedBox === 'Small') {
                    $stmt2 = $con->prepare("INSERT INTO fg_data 
                    (action_date, action_time, action_by, item_name, item_desc, item_lot, item_bin, from_rm_name, from_rm_id, quantity_pcs, pack_small, item_data_status, item_data_active)
                    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)");
                    $stmt2->bind_param('sssssssssiiss', $sys_date, $sys_time, $sys_user, $name, $desc, $lot, $bin, $rawname, $rawid, $newQuantity, $quantity, $dataStatusInUse, $dataActive);
                    if ($stmt2->execute()) {
                        $stmt3 = $con->prepare("UPDATE fg_data SET
                        quantity_pcs = ? WHERE from_rm_name = ? AND from_rm_id = ? AND item_data_status = ?");
                        $stmt3->bind_param("isss", $newQuantity, $rawname, $rawid, $dataStatusFloat);
                        if ($stmt3->execute()) {
                            $successQuery = true;
                        }
                    }; 
                } else if ($selectedBox === 'Medium') {
                    $stmt2 = $con->prepare("INSERT INTO fg_data 
                    (action_date, action_time, action_by, item_name, item_desc, item_lot, item_bin, from_rm_name, from_rm_id, quantity_pcs, pack_medium, item_data_status, item_data_active)
                    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)");
                    $stmt2->bind_param('sssssssssiiss', $sys_date, $sys_time, $sys_user, $name, $desc, $lot, $bin, $rawname, $rawid, $newQuantity, $quantity, $dataStatusInUse, $dataActive);
                    if ($stmt2->execute()) {
                        $stmt3 = $con->prepare("UPDATE fg_data SET
                        quantity_pcs = ? WHERE from_rm_name = ? AND from_rm_id = ? AND item_data_status = ?");
                        $stmt3->bind_param("isss", $newQuantity, $rawname, $rawid, $dataStatusFloat);
                        if ($stmt3->execute()) {
                            $successQuery = true;
                        }
                    }
                } else if ($selectedBox === 'Large') {
                    $stmt2 = $con->prepare("INSERT INTO fg_data 
                    (action_date, action_time, action_by, item_name, item_desc, item_lot, item_bin, from_rm_name, from_rm_id, quantity_pcs, pack_large, item_data_status, item_data_active)
                    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)");
                    $stmt2->bind_param('sssssssssiiss', $sys_date, $sys_time, $sys_user, $name, $desc, $lot, $bin, $rawname, $rawid, $newQuantity, $quantity, $dataStatusInUse, $dataActive);
                    if ($stmt2->execute()) {
                        $stmt3 = $con->prepare("UPDATE fg_data SET
                        quantity_pcs = ? WHERE from_rm_name = ? AND from_rm_id = ? AND item_data_status = ?");
                        $stmt3->bind_param("isss", $newQuantity, $rawname, $rawid, $dataStatusFloat);
                        if ($stmt3->execute()) {
                            $successQuery = true;
                        }
                    }
                } else {
                    $successQuery = false;
                }
            };

            if ($newQuantity === 0) {
                $stmtRemove = $con->prepare("UPDATE fg_data SET item_data_active = ? WHERE from_rm_id = ? AND item_data_status = ?");
                $stmtRemove->bind_param("sss", $dataNotActive, $rawid, $dataStatusFloat);
                if ($stmtRemove->execute()) {   
                    $successQuery = true;
                };
            }
        }

        if($successQuery) {
            if ($selectedBox === 'Small') {
                $stmtInsert = $con->prepare("INSERT INTO products_data 
                (action_date, action_time, action_by, item_name, item_desc, item_id, item_lot, item_bin, pack_small, item_data_status, item_data_active) 
                VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)");
                $stmtInsert->bind_param("ssssssssiss", $sys_date, $sys_time, $sys_user, $packName, $packDesc, $packId, $pack_batch, $packStorage, $selectedQuantity, $dataStatusReceived, $dataActive);
                if ($stmtInsert->execute()) {
                    echo "0";
                }
            } else if ($selectedBox === 'Medium') {
                $stmtInsert = $con->prepare("INSERT INTO products_data 
                (action_date, action_time, action_by, item_name, item_desc, item_id, item_lot, item_bin, pack_medium, item_data_status, item_data_active) 
                VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)");
                $stmtInsert->bind_param("ssssssssiss", $sys_date, $sys_time, $sys_user, $packName, $packDesc, $packId, $pack_batch, $packStorage, $selectedQuantity, $dataStatusReceived, $dataActive);
                if ($stmtInsert->execute()) {
                    echo "0";
                }
            } else if ($selectedBox === 'Large') {
                $stmtInsert = $con->prepare("INSERT INTO products_data 
                (action_date, action_time, action_by, item_name, item_desc, item_id, item_lot, item_bin, pack_large, item_data_status, item_data_active) 
                VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)");
                $stmtInsert->bind_param("ssssssssiss", $sys_date, $sys_time, $sys_user, $packName, $packDesc, $packId, $pack_batch, $packStorage, $selectedQuantity, $dataStatusReceived, $dataActive);
                if ($stmtInsert->execute()) {
                    echo "0";
                }
            }
        } else {
            echo '1';
        }
    }
}