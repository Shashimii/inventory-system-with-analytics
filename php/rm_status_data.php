<?php 
include 'script_con.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    if (isset($_POST['start_date']) && ($_POST['end_date'])) {
        $start_date = $_POST['start_date'];
        $end_date = $_POST['end_date'];

        $stmt = $con->prepare("SELECT item_name, item_desc,
        SUM(quantity_receive) AS total_received,
        SUM(quantity_inProduction) AS total_inProduction,
        SUM(quantity_scrap) AS total_scrap,
        SUM(quantity_used) AS total_used,
        SUM(quantity_created_pcs) AS total_pcs
        FROM `rm_data` WHERE action_date BETWEEN ? AND ? GROUP BY item_name ORDER BY id DESC;");
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
    $stmt = $con->prepare("SELECT item_name, item_desc,
    SUM(quantity_receive) AS total_received,
    SUM(quantity_inProduction) AS total_inProduction,
    SUM(quantity_scrap) AS total_scrap,
    SUM(quantity_used) AS total_used,
    SUM(quantity_created_pcs) AS total_pcs
    FROM `rm_data` GROUP BY item_name ORDER BY id DESC;");
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




