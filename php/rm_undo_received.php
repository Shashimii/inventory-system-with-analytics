<?php 

include 'script_con.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    if (isset($_POST['action_date']) && ($_POST['action_time']) && ($_POST['item_name']) && ($_POST['action_by']) && ($_POST['item_id'])) {
        $action_date = $_POST['action_date'];
        $action_time = $_POST['action_time'];
        $item_name = $_POST['item_name'];
        $action_by = $_POST['action_by'];
        $item_id = $_POST['item_id'];

        $stmt = $con->prepare("DELETE FROM rm_data WHERE action_date = ? AND action_time = ? AND item_name = ? AND action_by = ? AND item_id = ?");
        $stmt->bind_param('sssss', $action_date, $action_time, $item_name, $action_by, $item_id);
        $stmt->execute();

        if ($stmt->affected_rows > 0) {
            echo '0';
        } else {
            echo '1';
        }

        $stmt->close();
        $con->close();
    } else {
        echo '2';
    }
}