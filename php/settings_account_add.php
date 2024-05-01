<?php

include 'script_con.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    if (isset($_POST['user']) && ($_POST['password']) && ($_POST['account_type'])) {
        $username = $_POST['user'];
        $password = $_POST['password'];
        $type = $_POST['account_type'];


        $stmt = $con->prepare("SELECT * FROM users WHERE user_name = ?");
        $stmt->bind_param('s', $username);
        $stmt->execute();
        $result = $stmt->get_result();
        $num_rows = $result->num_rows;
        
        if ($num_rows > 0) {
            echo '1'; 
        } else {
            $register_query = "INSERT INTO users (user_name, user_password, user_type) VALUES (?, ?, ?)";
            $stmt = $con->prepare($register_query);
            $stmt->bind_param("sss", $username, $password, $type);
            $stmt->execute();
            echo '0';
        }
    }
}