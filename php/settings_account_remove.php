<?php

include 'script_con.php';

if(isset($_POST['account_id'])) {
    $accountId = $_POST['account_id'];
    $stmt = $con->prepare("DELETE FROM users WHERE id = ?");
    $stmt->bind_param('i', $accountId);
    if ($stmt->execute()) {
        echo '0';
    } else {
        echo '1';
    }
}