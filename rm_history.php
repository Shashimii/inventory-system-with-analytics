<?php 

include 'connection.php';

?>




<!DOCTYPE html>
<html lang="en">
<head>
    <link rel="stylesheet" href="node_modules/bootstrap/dist/css/bootstrap.min.css">
    <script src="node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"></script>
    <script src="script.js"></script>
    <link rel="stylesheet" href="style.css">
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Hiltac Inventory</title>
</head>
<body>
    <div class="web-header">
        <div class="navbar-container">
            <nav class="navbar navbar-expand-lg bg-body-tertiary">
                <div class="container-fluid">
                    <a class="navbar-brand">Navbar</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Raw Materials</a>
                                <ul class="dropdown-menu">
                                    <li><a class="dropdown-item" href="raw_items">Manage Raw Material</a></li>
                                    <li><a class="dropdown-item" href="raw_status">Raw Material Status</a></li>
                                    <li><a class="dropdown-item" href="raw_history">View Transaction History</a></li>
                                </ul>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Finished Goods</a>
                                <ul class="dropdown-menu">
                                    <li><a class="dropdown-item" href="fg_items">Manage Finished Goods</a></li>
                                    <li><a class="dropdown-item" href="fg_status">Finished Goods Status</a></li>
                                    <li><a class="dropdown-item" href="fg_history">View Transaction History</a></li>
                                </ul>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Products</a>
                                <ul class="dropdown-menu">
                                    <li><a class="dropdown-item" href="p_stocks">Products Stocks</a></li>
                                    <li><a class="dropdown-item" href="p_status">Stocks Count</a></li>
                                    <li><a class="dropdown-item" href="p_history">View Transaction History</a></li>
                                </ul>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Settings</a>
                                <ul class="dropdown-menu">
                                    <li><a class="dropdown-item" href="settings">Account Settings</a></li>
                                </ul>
                            </li>
                        </ul>
                        <div class="ms-auto mb-2 mb-lg-0">
                            <a class="navbar-brand">Test</a>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    </div>

    <div class="web-main">
        <div class="item-data-container">
            <div class="item-display">
                <div class="item-display-header">
                    <div class="item-display-header-info">
                        <h3>Raw Material History</h3>
                    </div>
                    <div class="item-display-header-searchbar">
                        <div class="searchbar-filter">
                            <select id="searchFilter" class="form-select form-select-sm" name="itemSearchFilter">
                            <option hidden selected value="item_id">Search By...</option>
                            <option value="action_date">Date Added</option>
                            <option value="action_time">Time Added</option>
                            <option value="action_by">Added By</option>
                            <option value="item_name">Raw Material Name</option>
                            <option value="item_id">Raw Material Id</option>
                            <option value="item_lot">Batch Number</option>
                            <option value="item_bin">Pallet Number</option>
                            <option value="quantity_receive">Received Quantity</option>
                            </select>
                        </div>
                        <div class="searchbar-input">
                        <input id="searchInput" oninput="searchLikeInput()" class="form-control form-control-sm" type="text" placeholder="Search..." aria-label=".form-control-sm" name="searchKeyword">
                        </div>
                    </div>
                </div>
                <div class="item-display-body" id="itemDisplayBody">
                    <?php 
                    $rowCountQuery = "SELECT * FROM rm_data GROUP BY item_id";
                    $fetchResult = mysqli_query($connection, $rowCountQuery);

                    $numOfRows = mysqli_num_rows($fetchResult); // total number of rows on the table
                    $page = isset($_GET['page']) ? (int)$_GET['page'] : 1;
                    $rowPerPage = 5;
                    $offset = ($page - 1) * $rowPerPage;
                    $pagesNeeded = ceil($numOfRows / $rowPerPage); // compute for pages needed

                    // display the rows 
                    $fetchQuery = "SELECT action_date, action_time, action_by, item_name, item_desc, item_id, item_lot, item_bin, SUM(quantity_receive) AS quantityReceive, SUM(quantity_inProduction) AS quantityInProduction, SUM(quantity_scrap) AS quantityScrap, SUM(quantity_used) AS quantityUsed FROM rm_data GROUP BY item_id ORDER BY id ASC";
                    $fetchResult = mysqli_query($connection, $fetchQuery);
                    $itHasData = mysqli_num_rows($fetchResult);
                    if ($itHasData > 0) {
                        $itemIndex = 1;
                        while ($row = mysqli_fetch_assoc($fetchResult)) {
                            $accordionItemId = 'flush-collapse' . $itemIndex;
                            echo   "<div class='accordion accordion-flush' id='accordionDataRow'>
                                        <div class='accordion-item'>
                                            <h2 class='accordion-header'>
                                            <button class='accordion-button collapsed' type='button' data-bs-toggle='collapse' data-bs-target='#$accordionItemId' aria-expanded='false' aria-controls='flush-collapseOne'>
                                               ". $row['item_name']." / ". $row['item_desc'] ." / ". $row['item_id'] ." / ". $row['item_lot'] ." / ". $row['item_bin'] ." 
                                            </button>
                                            </h2>
                                        <div id='$accordionItemId' class='accordion-collapse collapse'>
                                                <div class='accordion-body'>
                                                    Date: ". $row['action_date'] ." - Time: ". $row['action_time'] ." - Received: ". $row['quantityReceive'] ." - Action By: ". $row['action_by'] ."<br>
                                                    Date: ". $row['action_date'] ." - Time: ". $row['action_time'] ." - In Production: ". $row['quantityInProduction'] ." - Action By: ". $row['action_by'] ."<br>
                                                    Date: ". $row['action_date'] ." - Time: ". $row['action_time'] ." - Used: ". $row['quantityUsed'] ." - Action By: ". $row['action_by'] ."<br>
                                                    Date: ". $row['action_date'] ." - Time: ". $row['action_time'] ." - Scrap: ". $row['quantityScrap'] ." - Action By: ". $row['action_by'] ."<br>
                                                </div>
                                            </div>
                                        </div>      
                                    </div>";
                            $itemIndex++; // increments for generating unique id for every accordion rows
                        }       
                        mysqli_free_result($fetchResult);
                    } else {
                        echo "there are no data";
                    }

                    ?>
                </div>
                <div class="item-display-footer">
                    <?php 
                    
                    // pagination controls
                    if ($itHasData > 0) {
                        echo "<div class='page-numbers'>";
                        for ($i = 1; $i <= $pagesNeeded; $i++) {
                            echo '<a href="?page=' . $i .'">' . $i . '</a> ';
                        };
                        echo "</div>";
    
                        if ($page > 1) {
                            echo '<a href="?page=' . ($page - 1) . '">Prev</a>';
                        }
    
                        if ($page < $pagesNeeded) { // intialize max page number
                            echo '<a href="?page=' . ($page + 1) . '">Next</a>';
                        }    
                    } else {
                        // dont show any controls do nothing
                    }
                    ?>
                </div>
            </div>
        </div>
    </div>

    <div class="web-footer">

    </div>
</body>
</html>
