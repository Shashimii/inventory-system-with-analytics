<?php 

include 'script_con.php'; // $sys_user $dataStatusInProduction $dataStatusReceived $dataNotActive
include 'sysDateTime.php'; // $sys_date $sys_time

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    if (isset($_POST['item_name']) && ($_POST['item_desc']) && ($_POST['item_id']) && ($_POST['item_lot']) && ($_POST['item_bin']) && ($_POST['quantity_receive'])) {
        $rm_name = $_POST['item_name'];
        $rm_desc = $_POST['item_desc'];
        $rm_id = $_POST['item_id'];
        $rm_batch = $_POST['item_lot'];
        $rm_bin = $_POST['item_bin'];
        $rm_quantity = $_POST['quantity_receive'];

        // query to check
        $stmt = $con->prepare("SELECT * FROM rm_data WHERE item_name = ? AND item_id = ? AND item_data_status = ?");
        $stmt->bind_param('sss', $rm_name, $rm_id, $dataStatusInProduction);
        $stmt->execute();
        $result = $stmt->get_result();
        $num_rows = $result->num_rows;

        if ($num_rows > 0) {
            // item already in production
            echo '1';
        } else {
            // insert raw material to database
            $insertItem = "INSERT INTO rm_data 
            (action_date, action_time, action_by, item_name, item_desc, item_id, item_lot, item_bin, quantity_InProduction, item_data_status, item_data_active) VALUES 
            (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
            $stmt = $con->prepare($insertItem);
            $stmt->bind_param("ssssssssiss", $sys_date, $sys_time, $sys_user, $rm_name, $rm_desc, $rm_id, $rm_batch, $rm_bin, $rm_quantity, $dataStatusInProduction, $dataActive);
            if ($stmt->execute()) {
                // change receive data active status Y -> N 
                $changeStatus = "UPDATE rm_data SET item_data_active = ? WHERE item_name = ? AND item_id = ? AND item_data_status = ?";
                $stmt = $con->prepare($changeStatus);
                $stmt->bind_param("ssss", $dataNotActive, $rm_name, $rm_id, $dataStatusReceived);
                if($stmt->execute()) {
                    echo '0';
                } else {
                    // sql error
                    echo '4';
                }
            } else {
                // sql error
                echo '3';
            }
            $stmt->close();
        }
    }
}
