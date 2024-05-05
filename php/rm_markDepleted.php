<?php 

include 'script_con.php'; 
include 'sysDateTime.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    if (isset($_POST['item_desc']) && ($_POST['item_id']) && ($_POST['item_lot']) && ($_POST['item_bin']) && ($_POST['item_quantity'] && ($_POST['fg_name']) && ($_POST['fg_desc']) && ($_POST['fg_bin']) && ($_POST['fg_quantity']))) {
        // raw material
        $rm_desc = $_POST['item_desc'];
        $rm_id = $_POST['item_id'];
        $rm_batch = $_POST['item_lot'];
        $rm_bin = $_POST['item_bin'];
        $rm_quantity = $_POST['item_quantity'];
        // finished goods
        $fg_name = $_POST['fg_name'];
        $fg_desc = $_POST['fg_desc'];
        $fg_bin = $_POST['fg_bin'];
        $fg_quantity = $_POST['fg_quantity'];
        // scrap quantity
        $scrap_quantity = isset($_POST['quantity_scrap']) ? $_POST['quantity_scrap'] : 0;

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

        // scrap and used computation
        $rm_quantity_used = $rm_quantity - $scrap_quantity;
        
        if ($rm_quantity_used === 0) {
            echo '8';
        } else if ($rm_quantity_used < 0) {
            echo '9';
        } else {
            $stmt = $con->prepare("SELECT * FROM rm_data WHERE item_id = ? AND item_data_status = ?");
            $stmt->bind_param('ss', $rm_id, $dataStatusDepleted);
            $stmt->execute();
            $result = $stmt->get_result();
            $num_rows = $result->num_rows;
            
            if ($num_rows > 0) {
                echo '1';
            } else {
                $insertItem = "INSERT INTO rm_data 
                (action_date, action_time, action_by, item_desc, item_id, item_lot, item_bin, quantity_scrap, quantity_used, fg_created_name, fg_created_desc, quantity_created_pcs, item_data_status, item_data_active) VALUES 
                (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
                $stmt = $con->prepare($insertItem);
                $stmt->bind_param("sssssssiississ", $sys_date, $sys_time, $sys_user, $rm_desc, $rm_id, $rm_batch, $rm_bin, $scrap_quantity, $rm_quantity_used, $fg_name, $fg_desc, $fg_quantity, $dataStatusDepleted, $dataActive);

                if ($stmt->execute()) {
                    $changeStatus = "UPDATE rm_data SET item_data_active = ? WHERE item_id = ? AND item_data_status = ?";
                    $stmt = $con->prepare($changeStatus);
                    $stmt->bind_param("sss", $dataNotActive, $rm_id, $dataStatusInProduction);

                    if($stmt->execute()) {
                        $insertFg = "INSERT INTO fg_data 
                        (action_date, action_time, action_by, item_name, item_desc, item_lot, item_bin, quantity_pcs, from_rm_name, from_rm_id, item_data_status, item_data_active) VALUES 
                        (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
                        $stmt = $con->prepare($insertFg);
                        $stmt->bind_param("sssssssissss", $sys_date, $sys_time, $sys_user, $fg_name, $fg_desc, $fg_batch, $fg_bin, $fg_quantity, $rm_name, $rm_id, $dataStatusReceived, $dataActive);

                        if($stmt->execute()) {
                            $insertFg = "INSERT INTO fg_data 
                            (action_date, action_time, action_by, item_name, item_desc, item_lot, item_bin, quantity_pcs, from_rm_name, from_rm_id, item_data_status, item_data_active) VALUES 
                            (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
                            $stmt = $con->prepare($insertFg);
                            $stmt->bind_param("sssssssissss", $sys_date, $sys_time, $sys_user, $fg_name, $fg_desc, $fg_batch, $fg_bin, $fg_quantity, $rm_name, $rm_id, $dataStatusFloat, $dataActive);

                            if($stmt->execute()) {
                                echo '0';
                            } else {
                                echo '7';
                            }
                        } else {
                            echo '6';
                        }
                    } else {
                        echo '4';
                    }
                } else {
                    echo '3';
                }
                $stmt->close();
            }
        } 
    }
}





