<?php 
// add raw material processing script
include 'connection.php';
include 'index.php';


if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    if (isset($_POST['itemName']) && ($_POST['itemId']) && ($_POST['itemQuantity']) && ($_POST['itemDesc']) && ($_POST['itemBin'])) {
        $itemName = $_POST['itemName'];
        $itemId = $_POST['itemId'];
        $itemQuantity = $_POST['itemQuantity'];
        $itemDesc = $_POST['itemDesc'];
        $itemBin = $_POST['itemBin'];
        
        // data status when added
        $itemDataStatus = "HasValue";

        // item batching system
        // start of batch
        $startBatch = "Batch1";

        // fetch last batch
        $fetchLastBatch = "SELECT MAX(item_lot) AS last_batch FROM rm_data WHERE action_date = ?";
        $stmt = mysqli_prepare($connection, $fetchLastBatch);
        if ($stmt) {
            mysqli_stmt_bind_param($stmt, "s", $currentDate);
            mysqli_stmt_execute($stmt);
            $result = mysqli_stmt_get_result($stmt);
            $row = mysqli_fetch_assoc($result);
            
            // initalize new batch by incrementing the last fetched batch
            $newBatch = $row['last_batch'] ? 'Batch'. intval(substr($row['last_batch'], 5)) + 1 : 'Batch1';

            // close the statement
            mysqli_stmt_close($stmt);
        } else {
            // error handling
            echo "Error Executing fetchLastBatch Query: " . mysqli_error($connection);
        }

        // insert item data into database table
        $insertQuery = "INSERT INTO rm_data 
        (action_date, action_time, action_by, item_name, item_desc, item_id, item_lot, item_bin, quantity_receive, item_data_status) 
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
        $stmt = mysqli_prepare($connection, $insertQuery);
        if ($stmt) {
            mysqli_stmt_bind_param($stmt, "ssssssssis", $currentDate, $currentTime, $currentUser, $itemName, $itemDesc, $itemId, $newBatch, $itemBin, $itemQuantity, $itemDataStatus);
            if (mysqli_stmt_execute($stmt)) {
                echo "Raw Material Added";

                mysqli_stmt_close($stmt);
            } else {
                echo "Error Insert Query Cannot by Executed" . mysqli_stmt_error($stmt);
            }
        } else {
            echo "Error Insert Query Cannot be Prepared" . mysqli_error($connection);
        }
    }
}