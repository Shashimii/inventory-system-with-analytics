<?php

include 'script_con.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    if (isset($_POST['reg_rm_name']) && ($_POST['reg_rm_desc'])) {
        $rm_name = $_POST['reg_rm_name'];
        $rm_desc = $_POST['reg_rm_desc'];

        $stmt = $con->prepare("SELECT * FROM rm_registered WHERE rm_name = ? AND rm_description = ?");
        $stmt->bind_param('ss', $rm_name, $rm_desc);
        $stmt->execute();
        $result = $stmt->get_result();
        $num_rows = $result->num_rows;
        
        if ($num_rows > 0) {
            // item registered
            echo '1'; // sends 1 as response to ajax
        } else {
            // item not yet registered
            $register_query = "INSERT INTO rm_registered (rm_name, rm_description) VALUES ( ?, ?)";
            $stmt = $con->prepare($register_query);
            $stmt->bind_param("ss", $rm_name, $rm_desc);
            $stmt->execute();
            echo '0'; // sends 0 as response to ajax
        }
    }
}