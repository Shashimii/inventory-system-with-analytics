<?php 

include 'script_con.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    if (isset($_POST['item_name']) && ($_POST['item_id'])) {
        $rm_name = $_POST['item_name'];
        $rm_id = $_POST['item_id'];

        $stmt = $con->prepare("SELECT * FROM rm_data WHERE item_name = ? AND item_id = ? AND item_data_status = ?");
        $stmt->bind_param('sss', $rm_name, $rm_id, $dataStatusDepleted);
        $stmt->execute();
        $result = $stmt->get_result();
        $num_rows = $result->num_rows;

        if ($num_rows < 0) {
            echo '1';
        } else {
            $changeStatus = "UPDATE rm_data SET item_data_active = ? WHERE item_name = ? AND item_id = ? AND item_data_status = ?";
            $stmt = $con->prepare($changeStatus);
            $stmt->bind_param("ssss", $dataNotActive, $rm_name, $rm_id, $dataStatusDepleted);
            if($stmt->execute()) {
                echo '0';
            } else {
                echo '2';
            }
            $stmt->close();
        }
    }
}
