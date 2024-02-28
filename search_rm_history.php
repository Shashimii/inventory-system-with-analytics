<?php
// PDO type php script to prevent sql injection
$host = 'localhost';
$username = 'root';
$password = '';
$database = 'imsdatabase';

try {
    // Establish database connection
    $pdo = new PDO("mysql:host=$host;dbname=$database", $username, $password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    // Get search query
    // if empty set null if not set the value of the variable
    $search = isset($_GET['searchQuery']) ? $_GET['searchQuery'] : '';
    $filter = isset($_GET['searchFilter']) ? $_GET['searchFilter'] : '';

    // Perform search
    $searchDatabase = "SELECT action_date, action_time, action_by, item_name, item_desc, item_id, item_lot, item_bin, SUM(quantity_receive) AS quantityReceive, SUM(quantity_inProduction) AS quantityInProduction, SUM(quantity_scrap) AS quantityScrap, SUM(quantity_used) AS quantityUsed FROM rm_data WHERE $filter LIKE :search GROUP BY item_id ORDER BY id ASC";
    $stmt = $pdo->prepare($searchDatabase);
    $stmt->bindValue(':search', "%$search%", PDO::PARAM_STR);
    
    // Execute the statement
    $stmt->execute();

    // Fetch the results
    $results = $stmt->fetchAll(PDO::FETCH_ASSOC);

    // Return the results as JSON
    header('Content-Type: application/json');
    echo json_encode($results);

} catch (PDOException $e) {
    echo "Error: " . $e->getMessage();
}

