<?php 

include 'script_con.php'; 
include 'sysDateTime.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    if (isset($_POST['item_desc']) && ($_POST['item_id']) && ($_POST['item_lot']) && ($_POST['item_bin']) && ($_POST['item_quantity'])) {
        // raw material
        $rm_desc = $_POST['item_desc'];
        $rm_id = $_POST['item_id'];
        $rm_batch = $_POST['item_lot'];
        $rm_bin = $_POST['item_bin'];
        $rm_quantity_used = $_POST['item_quantity'];

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
            } else {
                echo '3';
            }
            $stmt->close();
        }
    }
}





