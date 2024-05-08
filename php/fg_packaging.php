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

        $stmt = $con->prepare("SELECT MAX(item_id) AS last_serial_num from products_data WHERE item_name = ?");
        $stmt->bind_param("s", $packName);
        $stmt->execute();
        $result = $stmt->get_result();
        $row = $result->fetch_assoc();
        $row['last_serial_num'];

        $serialName = strtoupper(substr($packName, 0, 3));
        $serialInc = $row['last_serial_num'] ? intval(substr($row['last_serial_num'], 4)) + 1 : '000001';
        $serialPad = str_pad(intval($serialInc), 6, '0', STR_PAD_LEFT);
        $serialNum = $serialPad;

        $packId = "P" . $serialName . $serialNum;

        $successQuery = false;

        $stmtCheck = $con->prepare("SELECT item_id FROM products_data WHERE item_id = ?");
        $stmtCheck->bind_param("s", $packId);
        $stmtCheck->execute();
        $result = $stmtCheck->get_result();
        $num_rows = $result->num_rows;
        
        if ($num_rows > 0) {
            echo '2';
        } else {
            foreach ($selectedList as $row) {
                $name = $row['name'];
                $fgid = $row['id'];
                $desc = $row['desc'];
                $lot = $row['lot'];
                $bin = $row['bin'];
                $date = $row['date'];
                $quantity = $row['quantityselected'];
    
                $stmt1 = $con->prepare("SELECT quantity_pcs, item_id FROM fg_data WHERE item_id = ? AND item_data_status = ?");
                $stmt1->bind_param('ss', $fgid, $dataStatusFloat);
                if ($stmt1->execute()) {
                    $result1 = $stmt1->get_result();
                    $row1 = $result1->fetch_assoc();
    
                    $itemQuantity = $row1['quantity_pcs'];
                    $newQuantity = $itemQuantity - $quantity;
    
                    if ($selectedBox === 'Small') {
                        $stmt2 = $con->prepare("INSERT INTO fg_data 
                        (action_date, action_time, action_by, item_name, item_id, item_desc, item_lot, item_bin, quantity_pcs, pack_small, item_data_status, item_data_active, quantity_OUT)
                        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)");
                        $stmt2->bind_param('ssssssssiissi', $sys_date, $sys_time, $sys_user, $name, $fgid, $desc, $lot, $bin, $newQuantity, $quantity, $dataStatusInUse, $dataActive, $quantity);
                        if ($stmt2->execute()) {
                            $stmt3 = $con->prepare("UPDATE fg_data 
                            SET quantity_pcs = ? 
                            WHERE item_id = ? AND item_data_status = ?");
                            $stmt3->bind_param("iss", $newQuantity, $fgid, $dataStatusFloat);

                            if ($stmt3->execute()) {
                                $successQuery = true;
                            }
                        };
                    } else {
                        $successQuery = false;
                    }
                };
    
                if ($newQuantity === 0) {
                    $stmtRemove = $con->prepare("UPDATE fg_data SET item_data_active = ? WHERE item_id = ? AND item_data_status = ?");
                    $stmtRemove->bind_param("sss", $dataNotActive, $fgid, $dataStatusFloat);
                    if ($stmtRemove->execute()) {   
                        $successQuery = true;
                    };
                }
            }

            if($successQuery) {

                if ($selectedBox === 'Small') {
                    $stmtInsert = $con->prepare("INSERT INTO products_data 
                    (action_date, action_time, action_by, item_name, item_desc, item_id, item_lot, item_bin, pack_small, item_data_status, item_data_active, quantity_IN) 
                    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)");
                    $stmtInsert->bind_param("ssssssssissi", $sys_date, $sys_time, $sys_user, $packName, $packDesc, $packId, $pack_batch, $packStorage, $selectedQuantity, $dataStatusReceived, $dataActive, $selectedQuantity);
                    if ($stmtInsert->execute()) {
                        echo "0";
                    }
                } 
            } else {
                echo '1';
            }
        }
    }
}