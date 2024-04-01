<?php 

include 'script_con.php'; // $sys_user $dataStatusInProduction $dataStatusReceived $dataNotActive
include 'sysDateTime.php'; // $sys_date $sys_time

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    if (isset($_POST['item_name']) && ($_POST['item_id']) && ($_POST['quantity_receive']) && ($_POST['adj_quantity_receive'])) {
        $rm_name = $_POST['item_name'];
        $rm_id = $_POST['item_id'];
        $rm_quantity = $_POST['quantity_receive'];
        $rm_adj_quantity = $_POST['adj_quantity_receive'];

        // query to check
        $stmt = $con->prepare("SELECT * FROM rm_data WHERE item_name = ? AND item_id = ? AND item_data_status = ?");
        $stmt->bind_param('sss', $rm_name, $rm_id, $dataStatusReceived);
        $stmt->execute();
        $result = $stmt->get_result();
        $num_rows = $result->num_rows;

        if ($num_rows > 0) {
            // insert adjustment record to database
            $insertItem = "INSERT INTO rm_adj_data 
            (action_date, action_time, action_by, item_name, item_id, receive_quantity, adj_receive) VALUES 
            (?, ?, ?, ?, ?, ?, ?)";
            $stmt = $con->prepare($insertItem);
            $stmt->bind_param("sssssii", $sys_date, $sys_time, $sys_user, $rm_name, $rm_id, $rm_quantity, $rm_adj_quantity);
            if ($stmt->execute()) {
                // adjust receive quantity
                $adjQuantity = "UPDATE rm_data SET quantity_receive = ? WHERE item_name = ? AND item_id = ?";
                $stmt = $con->prepare($adjQuantity);
                $stmt->bind_param("sss", $rm_adj_quantity, $rm_name, $rm_id);
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
        } else {
            // item is not existing
            echo '1';
        }
    }
}