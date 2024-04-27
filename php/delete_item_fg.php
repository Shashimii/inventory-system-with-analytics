<?php

include 'script_con.php';

if(isset($_POST['id'])) {
    $itemId = $_POST['id'];
    $stmt = $con->prepare("DELETE FROM fg_registered WHERE id = ?");
    $stmt->bind_param('i', $itemId);
    if ($stmt->execute()) {
        echo '0';
    } else {
        echo '1';
    }
}