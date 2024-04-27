<?php

include 'script_con.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    if (isset($_POST['item_name']) && ($_POST['item_desc'])) {
        $item_name = $_POST['item_name'];
        $item_desc = $_POST['item_desc'];

        $stmt = $con->prepare("SELECT * FROM fg_registered WHERE fg_name = ?");
        $stmt->bind_param('s', $item_name);
        $stmt->execute();
        $result = $stmt->get_result();
        $num_rows = $result->num_rows;
        
        if ($num_rows > 0) {
            // item registered
            echo '1'; // sends 1 as response to ajax
        } else {
            // item not yet registered
            $register_query = "INSERT INTO fg_registered (fg_name, fg_description) VALUES (?, ?)";
            $stmt = $con->prepare($register_query);
            $stmt->bind_param("ss", $item_name, $item_desc);
            $stmt->execute();
            echo '0'; // sends 0 as response to ajax
        }
    }
}