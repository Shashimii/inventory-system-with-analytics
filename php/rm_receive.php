<?php 

include 'script_con.php'; // $sys_user $dataStatusReceived $dataActive
include 'sysDateTime.php'; // $sys_date $sys_time

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    if (isset($_POST['rec_rm_name']) && ($_POST['rec_rm_desc']) && ($_POST['rec_rm_id']) && ($_POST['rec_rm_bin']) && ($_POST['rec_rm_quantity'])) {
        $rm_name = $_POST['rec_rm_name'];
        $rm_desc = $_POST['rec_rm_desc'];
        $rm_id = $_POST['rec_rm_id'];
        $rm_bin = $_POST['rec_rm_bin'];
        $rm_quantity = $_POST['rec_rm_quantity'];
        
        // batch system that will only count the batches daily and reset the next day
        $stmt = $con->prepare("SELECT MAX(item_lot) AS last_batch_num from rm_data WHERE action_date = ? AND item_name = ?");
        $stmt->bind_param("ss", $sys_date, $rm_name);
        $stmt->execute();
        $result = $stmt->get_result();
        $row = $result->fetch_assoc();
        $row['last_batch_num'];
        
        // check if batch number is not blank or null if it is batch number will be 1 as the start of batch
        $batchNumber = $row['last_batch_num'] ? intval(substr($row['last_batch_num'], 5)) + 1 : '1';
        $rm_batch = "Batch" . $batchNumber;

        $stmt = $con->prepare("SELECT * FROM rm_data WHERE item_id = ?");
        $stmt->bind_param('s', $rm_id);
        $stmt->execute();
        $result = $stmt->get_result();
        $num_rows = $result->num_rows;

        if ($num_rows > 0) {
            // item already received
            echo '1';
        } else {
            // insert raw material to database
            $insertItem = "INSERT INTO rm_data 
            (action_date, action_time, action_by, item_name, item_desc, item_id, item_lot, item_bin, quantity_receive, item_data_status, item_data_active) VALUES 
            (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
            $stmt = $con->prepare($insertItem);
            $stmt->bind_param("ssssssssiss", $sys_date, $sys_time, $sys_user, $rm_name, $rm_desc, $rm_id, $rm_batch, $rm_bin, $rm_quantity, $dataStatusReceived, $dataActive);
            if ($stmt->execute()) {
                // item receive 
                echo '0';
            } else {
                // sql error
                echo '3';
            }
            $stmt->close();
        }
    }
}
