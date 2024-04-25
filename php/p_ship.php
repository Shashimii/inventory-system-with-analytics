<?php 

include 'script_con.php';
include 'sysDateTime.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    if (isset($_POST['ship_name']) && ($_POST['ship_desc']) && ($_POST['ship_id']) && ($_POST['ship_lot']) && ($_POST['ship_bin']) && ($_POST['ship_quantity']) && ($_POST['box_type']) && ($_POST['company_code'])) {
        $name = $_POST['ship_name'];
        $desc = $_POST['ship_desc'];
        $id = $_POST['ship_id'];
        $lot = $_POST['ship_lot'];
        $bin = $_POST['ship_bin'];
        $quantity = $_POST['ship_quantity'];
        $boxType = $_POST['box_type'];
        $code = $_POST['company_code'];

        $stmt = $con->prepare("SELECT * FROM products_data WHERE item_id = ? AND item_data_status = ?");
        $stmt->bind_param("ss", $id, $dataStatusShip);
        $stmt->execute();
        $result = $stmt->get_result();
        $num_rows = $result->num_rows;

        if ($num_rows > 0) {
            echo '1';
        } else {
            if ($boxType === 'Small') {
                $InsertShip = "INSERT INTO products_data
                (action_date, action_time, action_by, item_name, item_desc, item_id, item_lot, item_bin, pack_small, client_company, item_data_status, item_data_active) VALUES
                (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
                $stmt = $con->prepare($InsertShip);
                $stmt->bind_param("ssssssssisss", $sys_date, $sys_time, $sys_user, $name, $desc, $id, $lot, $bin, $quantity, $code, $dataStatusShip, $dataActive);
                if ($stmt->execute()) {
                    $updateStatus = "UPDATE products_data SET item_data_active = ? WHERE item_name = ? AND item_id = ?";
                    $stmt= $con->prepare($updateStatus);
                    $stmt->bind_param("sss", $dataNotActive, $name, $id);
                    if ($stmt->execute()) {
                        echo "0";
                    }
                } else {
                    echo "2";
                }
            } else if ($boxType === "Medium") {
                $InsertShip = "INSERT INTO products_data
                (action_date, action_time, action_by, item_name, item_desc, item_id, item_lot, item_bin, pack_medium, client_company, item_data_status, item_data_active) VALUES
                (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
                $stmt = $con->prepare($InsertShip);
                $stmt->bind_param("ssssssssisss", $sys_date, $sys_time, $sys_user, $name, $desc, $id, $lot, $bin, $quantity, $code, $dataStatusShip, $dataActive);
                if ($stmt->execute()) {
                    $updateStatus = "UPDATE products_data SET item_data_active = ? WHERE item_name = ? AND item_id = ?";
                    $stmt= $con->prepare($updateStatus);
                    $stmt->bind_param("sss", $dataNotActive, $name, $id);
                    if ($stmt->execute()) {
                        echo "0";
                    }
                } else {
                    echo "2";
                }
            } else if ( $boxType === "Large") {
                $InsertShip = "INSERT INTO products_data
                (action_date, action_time, action_by, item_name, item_desc, item_id, item_lot, item_bin, pack_large, client_company, item_data_status, item_data_active) VALUES
                (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
                $stmt = $con->prepare($InsertShip);
                $stmt->bind_param("ssssssssisss", $sys_date, $sys_time, $sys_user, $name, $desc, $id, $lot, $bin, $quantity, $code, $dataStatusShip, $dataActive);
                if ($stmt->execute()) {
                    $updateStatus = "UPDATE products_data SET item_data_active = ? WHERE item_name = ? AND item_id = ?";
                    $stmt= $con->prepare($updateStatus);
                    $stmt->bind_param("sss", $dataNotActive, $name, $id);
                    if ($stmt->execute()) {
                        echo "0";
                    }
                } else {
                    echo "2";
                }
            }
        }
    }
}