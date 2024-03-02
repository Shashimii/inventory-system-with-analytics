<?php
try {
    include 'connection.php';

    $search = isset($_GET['searchQuery']) ? $_GET['searchQuery'] : '';
    $filter = isset($_GET['searchFilter']) ? $_GET['searchFilter'] : '';

    $searchItem = "SELECT action_date, action_time, action_by, item_name, item_desc, item_id, item_lot, item_bin FROM rm_data WHERE $filter LIKE ? GROUP BY item_id ORDER BY id ASC";
    $stmt = $connection->prepare($searchItem);
    $searchKeyword = '%' . $search .'%';
    $stmt->bind_param('s', $searchKeyword);
    $stmt->execute();
    $result1 = $stmt->get_result();
    
    $itemData = [];

    if (mysqli_num_rows($result1) > 0) {
        while ($row = $result1->fetch_assoc()) {
            $item_id = $row['item_id'];
            $fetchItemData = "SELECT action_date, action_time, action_by, quantity_receive, quantity_inProduction, quantity_scrap, quantity_used FROM rm_data 
            WHERE item_id = ? ORDER BY id ASC";
            $stmt2 = $connection->prepare($fetchItemData);
            $stmt2->bind_param('s', $item_id);
            $stmt2->execute();
            $result2 = $stmt2->get_result();

            // Initialize $result2Data inside the loop
            $result2Data = ($result2->num_rows > 0) ? $result2->fetch_all(MYSQLI_ASSOC) : [];

            $itemData[] = [
                'result1' => $row,
                'result2' => $result2Data,
            ];
        }
    } else {
        // No rows found in $result1
        $itemData = [];
    }

    // return the results as JSON
    header('Content-Type: application/json');
    echo json_encode($itemData);

} catch (PDOException $e) {
    echo "Error: " . $e->getMessage();
}

