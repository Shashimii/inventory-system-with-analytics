<?php 

include 'script_con.php'; 
include 'sysDateTime.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    if (isset($_POST['item_desc']) && ($_POST['item_id']) && ($_POST['item_lot']) && ($_POST['item_bin'])) {
        
        $rm_desc = $_POST['item_desc'];
        $rm_id = $_POST['item_id'];
        $rm_batch = $_POST['item_lot'];
        $rm_bin = $_POST['item_bin'];
        $rm_scrap = isset($_POST['rm_scrap']) && $_POST['rm_scrap'] ? $_POST['rm_scrap'] : 0;

        $stmt = $con->prepare("SELECT quantity_receive FROM rm_data WHERE item_id = ? AND item_data_status = ?");
        $stmt->bind_param("ss", $rm_id, $dataStatusReceived);
        if ($stmt->execute()) {
            $result = $stmt->get_result();
            $row = $result->fetch_assoc();
            
            $rm_received = $row['quantity_receive'];
        }

        $rm_used = $rm_received - $rm_scrap;

        $stmt = $con->prepare("SELECT * FROM rm_data WHERE item_id = ? AND item_data_status = ?");
        $stmt->bind_param('ss', $rm_id, $dataStatusDepleted);
        $stmt->execute();
        $result = $stmt->get_result();
        $num_rows = $result->num_rows;
        
        if ($num_rows > 0) {
            echo '1';
        } else {
            $insertItem = "INSERT INTO rm_data 
            (action_date, action_time, action_by, item_desc, item_id, item_lot, item_bin, quantity_scrap, item_data_status, item_data_active) VALUES 
            (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
            $stmt = $con->prepare($insertItem);
            $stmt->bind_param("sssssssiss", $sys_date, $sys_time, $sys_user, $rm_desc, $rm_id, $rm_batch, $rm_bin, $rm_scrap, $dataStatusInUse, $dataActive);

            if ($stmt->execute()) {
                $changeStatus = "UPDATE rm_data SET item_data_active = ? WHERE item_id = ? AND item_data_status = ?";
                $stmt = $con->prepare($changeStatus);
                $stmt->bind_param("sss", $dataNotActive, $rm_id, $dataStatusInProduction);

                if ($stmt->execute()) {
                    $insertDepleted = "INSERT INTO rm_data 
                    (action_date, action_time, action_by, item_desc, item_id, item_lot, item_bin, quantity_scrap, quantity_used, item_data_status, item_data_active) VALUES 
                    (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
                    $stmt = $con->prepare($insertDepleted);
                    $stmt->bind_param("sssssssiiss", $sys_date, $sys_time, $sys_user, $rm_desc, $rm_id, $rm_batch, $rm_bin, $rm_scrap, $rm_used, $dataStatusDepleted, $dataActive);

                    if ($stmt->execute()) {
                        echo '0';
                    }
                }
            } else {
                echo '2';
            }
            $stmt->close();
        }
    }
}





