<?php 

include 'script_con.php'; 
include 'sysDateTime.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    if (isset($_POST['item_name']) && ($_POST['item_desc']) && ($_POST['item_id']) && ($_POST['item_lot']) && ($_POST['item_bin']) && ($_POST['item_quantity'] && ($_POST['fg_quantity']) && ($_POST['fg_unit']) && ($_POST['fg_unit']) && ($_POST['quantity_scrap']))) {
        $rm_name = $_POST['item_name'];
        $rm_desc = $_POST['item_desc'];
        $rm_id = $_POST['item_id'];
        $rm_batch = $_POST['item_lot'];
        $rm_bin = $_POST['item_bin'];
        $rm_quantity = $_POST['item_quantity'];
        $fg_quantity = $_POST['fg_quantity'];
        $fg_unit = $_POST['fg_unit'];
        $scrap_quantity = $_POST['quantity_scrap'];
        $rm_quantity_used = $rm_quantity - $scrap_quantity;

        if ($rm_quantity_used === 0) {
            echo '8';
        } else if ($rm_quantity_used < 0) {
            echo '9';
        } else {
            $stmt = $con->prepare("SELECT * FROM rm_data WHERE item_name = ? AND item_id = ? AND item_data_status = ?");
            $stmt->bind_param('sss', $rm_name, $rm_id, $dataStatusDepleted);
            $stmt->execute();
            $result = $stmt->get_result();
            $num_rows = $result->num_rows;
    
            if ($num_rows > 0) {
                echo '1';
            } else if ($fg_unit === 'PLY') {
                $insertItem = "INSERT INTO rm_data 
                (action_date, action_time, action_by, item_name, item_desc, item_id, item_lot, item_bin, quantity_scrap, quantity_used, quantity_created_ply, item_data_status, item_data_active) VALUES 
                (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
                $stmt = $con->prepare($insertItem);
                $stmt->bind_param("ssssssssiiiss", $sys_date, $sys_time, $sys_user, $rm_name, $rm_desc, $rm_id, $rm_batch, $rm_bin, $scrap_quantity, $rm_quantity_used, $fg_quantity, $dataStatusDepleted, $dataActive);
                if ($stmt->execute()) {
                    $changeStatus = "UPDATE rm_data SET item_data_active = ? WHERE item_name = ? AND item_id = ? AND item_data_status = ?";
                    $stmt = $con->prepare($changeStatus);
                    $stmt->bind_param("ssss", $dataNotActive, $rm_name, $rm_id, $dataStatusInProduction);
                    if($stmt->execute()) {
                        echo '0';
                    } else {
                        echo '4';
                    }
                } else {
                    echo '3';
                }
                $stmt->close();
            } else if ($fg_unit === 'PCS') {
                $insertItem = "INSERT INTO rm_data 
                (action_date, action_time, action_by, item_name, item_desc, item_id, item_lot, item_bin, quantity_scrap, quantity_used, quantity_created_pcs, item_data_status, item_data_active) VALUES 
                (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
                $stmt = $con->prepare($insertItem);
                $stmt->bind_param("ssssssssiiiss", $sys_date, $sys_time, $sys_user, $rm_name, $rm_desc, $rm_id, $rm_batch, $rm_bin, $scrap_quantity, $rm_quantity_used, $fg_quantity, $dataStatusDepleted, $dataActive);
                if ($stmt->execute()) {
                    $changeStatus = "UPDATE rm_data SET item_data_active = ? WHERE item_name = ? AND item_id = ? AND item_data_status = ?";
                    $stmt = $con->prepare($changeStatus);
                    $stmt->bind_param("ssss", $dataNotActive, $rm_name, $rm_id, $dataStatusInProduction);
                    if($stmt->execute()) {
                        echo '0';
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





