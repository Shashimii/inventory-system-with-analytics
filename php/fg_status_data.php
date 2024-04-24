<?php 
include 'script_con.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    if (isset($_POST['start_date']) && ($_POST['end_date'])) {
        $start_date = $_POST['start_date'];
        $end_date = $_POST['end_date'];

        $stmt = $con->prepare("SELECT 
        item_name, 
        item_desc,
        SUM(CASE WHEN item_data_status = 'Float' THEN quantity_pcs ELSE 0 END) AS total_quantity,
        SUM(pack_small) AS total_small,
        SUM(pack_medium) AS total_medium,
        SUM(pack_large) AS total_large
        FROM `fg_data` WHERE action_date BETWEEN ? AND ? AND item_data_status != 'Received' GROUP BY item_name ORDER BY id DESC;");
        $stmt->bind_param("ss", $start_date, $end_date);
        $stmt->execute();
        $result = $stmt->get_result();

        $data = array();
        while ($row = $result->fetch_assoc()) {
            $data[] = $row;
        }

        $stmt->close();
        $con->close();

        header('Content-Type: application/json');
        echo json_encode($data);
    } 
} else {
    $stmt = $con->prepare("SELECT 
    item_name, 
    item_desc,
    SUM(CASE WHEN item_data_status = 'Float' THEN quantity_pcs ELSE 0 END) AS total_quantity,
    SUM(pack_small) AS total_small,
    SUM(pack_medium) AS total_medium,
    SUM(pack_large) AS total_large
    FROM `fg_data` WHERE item_data_status != 'Received' GROUP BY item_name ORDER BY id DESC;");
    $stmt->execute();
    $result = $stmt->get_result();

    $data = array();
    while ($row = $result->fetch_assoc()) {
        $data[] = $row;
    }

    $stmt->close();
    $con->close();

    header('Content-Type: application/json');
    echo json_encode($data);
}




