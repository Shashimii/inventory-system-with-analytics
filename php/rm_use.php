<?php 

include 'script_con.php'; 
include 'sysDateTime.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    if (isset($_POST['item_desc']) && ($_POST['item_id']) && ($_POST['item_lot']) && ($_POST['item_bin']) && ($_POST['item_quantity']) && ($_POST['item_quantity_used']) && ($_POST['fg_name']) && ($_POST['fg_desc']) && ($_POST['fg_bin']) && ($_POST['fg_quantity'])) {
        // raw material
        $rm_desc = $_POST['item_desc'];
        $rm_id = $_POST['item_id'];
        $rm_batch = $_POST['item_lot'];
        $rm_bin = $_POST['item_bin'];
        $rm_quantity = $_POST['item_quantity'];
        $rm_quantity_used = $_POST['item_quantity_used'];
        // scrap
        $rm_scrap = isset($_POST['rm_scrap']) && $_POST['rm_scrap'] ? $_POST['rm_scrap'] : 0;
        // finished goods
        $fg_name = $_POST['fg_name'];
        $fg_desc = $_POST['fg_desc'];
        $fg_bin = $_POST['fg_bin'];
        $fg_quantity = $_POST['fg_quantity'];

        // batch system that will only count the batches daily and reset the next day
        $stmt = $con->prepare("SELECT MAX(item_lot) AS last_batch_num from fg_data WHERE action_date = ? AND item_name = ?");
        $stmt->bind_param("ss", $sys_date, $fg_name);
        $stmt->execute();
        $result = $stmt->get_result();
        $row = $result->fetch_assoc();
        $row['last_batch_num'];
        
        // check if batch number is not blank or null if it is batch number will be 1 as the start of batch
        $batchNumber = $row['last_batch_num'] ? intval(substr($row['last_batch_num'], 5)) + 1 : '1';
        $fg_batch = "Batch" . $batchNumber;

        // auto serial id
        $stmt = $con->prepare("SELECT MAX(item_id) AS last_serial_num from fg_data WHERE item_name = ?");
        $stmt->bind_param("s", $fg_name);
        $stmt->execute();
        $result = $stmt->get_result();
        $row = $result->fetch_assoc();
        $row['last_serial_num'];

        $serialName = strtoupper(substr($fg_name, 0, 3));
        $serialInc = $row['last_serial_num'] ? intval(substr($row['last_serial_num'], 4)) + 1 : '000001';
        $serialPad = str_pad(intval($serialInc), 6, '0', STR_PAD_LEFT);
        $serialNum = $serialPad;

        $fg_id = "F" . $serialName . $serialNum;

        // new quantity
        $rm_quantity_new = $rm_quantity - $rm_quantity_used - $rm_scrap;

        // total OUT
        $total_out = $rm_quantity_used + $rm_scrap;

        // usage check
        $rm_usage_valid = $rm_quantity - $rm_quantity_used;

        // scrap check
        $rm_scrap_valid = $rm_quantity - $rm_scrap;

        // quantity validators
        if ($rm_usage_valid < 0 && $rm_scrap_valid < 0) {
            echo '8';
        } else {
            if ($rm_scrap_valid < 0){ // scrap greater
                echo '7';
            } else if ($rm_usage_valid < 0) { // usage greater
                echo '9';
            } else if ($rm_quantity_new < 0 ) { // new quantity -1
                echo '6';
            } else {
                $stmt = $con->prepare("SELECT * FROM rm_data WHERE item_id = ? AND item_data_status = ?");
                $stmt->bind_param('ss', $rm_id, $dataStatusDepleted);
                $stmt->execute();
                $result = $stmt->get_result();
                $num_rows = $result->num_rows;
                
                if ($num_rows > 0) {
                    echo '1';
                } else {
                    $changeStatus = "UPDATE rm_data SET item_data_active = ? WHERE item_id = ? AND item_data_status = ?";
                    $stmt = $con->prepare($changeStatus);
                    $stmt->bind_param("sss", $dataNotActive, $rm_id, $dataStatusInProduction);
    
                    if ($stmt->execute()) {
                        $changeStatus = "UPDATE rm_data SET item_data_active = ? WHERE item_id = ? AND item_data_status = ?";
                        $stmt = $con->prepare($changeStatus);
                        $stmt->bind_param("sss", $dataNotActive, $rm_id, $dataStatusInUse);
    
                        if ($stmt->execute()) {
                            $InsertProduction = "INSERT INTO rm_data 
                            (action_date, action_time, action_by, item_desc, item_id, item_lot, item_bin, quantity_inProduction, quantity_scrap, quantity_used, item_data_status, item_data_active, quantity_OUT) VALUES 
                            (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
                            $stmt = $con->prepare($InsertProduction);
                            $stmt->bind_param("sssssssiiissi", $sys_date, $sys_time, $sys_user, $rm_desc, $rm_id, $rm_batch, $rm_bin, $rm_quantity_new, $rm_scrap, $rm_quantity_used, $dataStatusInProduction, $dataActive, $total_out);

                            if ($stmt->execute()) {
                                $InsertProduction = "INSERT INTO rm_data 
                                (action_date, action_time, action_by, item_desc, item_id, item_lot, item_bin, fg_created_name, fg_created_desc, quantity_created_pcs, item_data_status, item_data_active) VALUES 
                                (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
                                $stmt = $con->prepare($InsertProduction);
                                $stmt->bind_param("sssssssssiss", $sys_date, $sys_time, $sys_user, $rm_desc, $rm_id, $rm_batch, $rm_bin, $fg_name, $fg_desc, $fg_quantity, $dataStatusInUse, $dataActive);  

                                if ($stmt->execute()) {
                                    $insertItem = "INSERT INTO fg_data
                                    (action_date, action_time, action_by, item_name, item_id, item_desc, item_lot, item_bin, quantity_pcs, item_data_status, item_data_active, quantity_IN) VALUES
                                    (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
                                    $stmt = $con->prepare($insertItem);
                                    $stmt->bind_param("ssssssssissi", $sys_date, $sys_time, $sys_user, $fg_name, $fg_id, $fg_desc, $fg_batch, $fg_bin, $fg_quantity, $dataStatusReceived, $dataActive, $fg_quantity);

                                    if ($stmt->execute()) {
                                        $insertItem = "INSERT INTO fg_data
                                        (action_date, action_time, action_by, item_name, item_id, item_desc, item_lot, item_bin, quantity_pcs, item_data_status, item_data_active) VALUES
                                        (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
                                        $stmt = $con->prepare($insertItem);
                                        $stmt->bind_param("ssssssssiss", $sys_date, $sys_time, $sys_user, $fg_name, $fg_id, $fg_desc, $fg_batch, $fg_bin, $fg_quantity, $dataStatusFloat, $dataActive);

                                        if ($stmt->execute()) {
                                            echo '0';

                                            $stmt->close();
                                        }
                                    }
                                }
                                
                            }
                        }
                    }
                } 
            }
        }
    }
}

