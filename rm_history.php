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
                    <img class="logo" src="assets/logo.jpg" alt="logo" height="40">
                    <a class="navbar-brand">Hiltac IMS</a>
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
                    $fetchQuery = "SELECT action_date, action_time, action_by, item_name, item_desc, item_id, item_lot, item_bin FROM rm_data GROUP BY item_id ORDER BY id ASC";
                    $fetchResult = mysqli_query($connection, $fetchQuery);
                    $itHasData = mysqli_num_rows($fetchResult);
                    if ($itHasData > 0) {
                        $itemIndex = 1;
                        echo "<div class='container mt-5'>
                                <table class='table'>
                                    <thead>
                                    <tr>
                                        <th>Material Name</th>
                                        <th>Description</th>
                                        <th>ID</th>
                                        <th>Batch Number</th>
                                        <th>Pallet Number</th>
                                        <th>Date Received</th>
                                        <th>Time Received</th>
                                        <th>Received By</th>
                                        <th></th>
                                    </tr>
                                    </thead>
                                    <tbody>";
                                    while ($row = mysqli_fetch_assoc($fetchResult)) {
                                        $accordionItemId = 'collapse' . $itemIndex;
                                echo   "<tr>
                                            <td>{$row['item_name']}</td>
                                            <td>{$row['item_desc']}</td>
                                            <td>{$row['item_id']}</td>
                                            <td>{$row['item_lot']}</td>
                                            <td>{$row['item_bin']}</td>
                                            <td>{$row['action_date']}</td>
                                            <td>{$row['action_time']}</td>
                                            <td>{$row['action_by']}</td>
                                            <td>
                                            <button class='btn btn-primary' type='button' data-bs-toggle='collapse' data-bs-target='#$accordionItemId' aria-expanded='false' aria-controls='$accordionItemId'>
                                            View Transactions
                                            </button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td colspan='9'>
                                                <div class='collapse' id='$accordionItemId'>";
                                                // fetch 4 item data rows related to the item_id then echo it
                                                $innerfetchQuery = "SELECT * FROM rm_data WHERE item_id = '{$row['item_id']}'";
                                                $innerfetchResult = mysqli_query($connection, $innerfetchQuery);
                                                echo "<table class='table table-bordered'>
                                                        <thead>
                                                                <tr>
                                                                <th>Action Date</th>
                                                                <th>Action Time</th>
                                                                <th>Action By</th>
                                                                <th>Quantity Receive</th>
                                                                <th>Quantity in Production</th>
                                                                <th>Quantity Scrap</th>
                                                                <th>Quantity Used</th>
                                                                </tr>
                                                        </thead>
                                                      <tbody>"; 
                                                while ($inner_row = mysqli_fetch_assoc($innerfetchResult)) {
                                                echo "<tr>
                                                        <td>{$inner_row['action_date']}</td>
                                                        <td>{$inner_row['action_time']}</td>
                                                        <td>{$inner_row['action_by']}</td>
                                                        <td>{$inner_row['quantity_receive']}</td>
                                                        <td>{$inner_row['quantity_inProduction']}</td>
                                                        <td>{$inner_row['quantity_used']}</td>
                                                        <td>{$inner_row['quantity_scrap']}</td>
                                                    </tr>";
                                                    }
                                                echo "</tbody>
                                                </table>
                                            </td>
                                        </tr>";
                            $itemIndex++; // increments for generating unique id for every accordion rows
                        }
                        echo "</table>
                        </div>";
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
</body>
</html>
