<?php 

include 'connection.php';

?>




<!DOCTYPE html>
<html lang="en">
<head>
    <link rel="stylesheet" href="node_modules/bootstrap/dist/css/bootstrap.min.css">
    <script src="node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"></script>
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
                            <select class="form-select form-select-sm" name="itemSearchFilter">
                            <option hidden selected>Search By...</option>
                            <option>Filter2</option>
                            <option>Filter3</option>
                            </select>
                        </div>
                        <div class="searchbar-input">
                        <input class="form-control form-control-sm" type="text" placeholder="Search..." aria-label=".form-control-sm" name="searchKeyword">
                        </div>
                    </div>
                </div>
                <div class="item-display-body">
                    <?php 
                    $rowCountQuery = "SELECT * FROM rm_data";
                    $fetchResult = mysqli_query($connection, $rowCountQuery);

                    $numOfRows = mysqli_num_rows($fetchResult); // total number of rows on the table
                    $page = isset($_GET['page']) ? (int)$_GET['page'] : 1;
                    $rowPerPage = 2;
                    $offset = ($page - 1) * $rowPerPage;
                    $pagesNeeded = ceil($numOfRows / $rowPerPage); // compute for pages needed

                    // display the rows 
                    $fetchQuery = "SELECT * FROM rm_data ORDER BY id DESC LIMIT $rowPerPage OFFSET $offset";
                    $fetchResult = mysqli_query($connection, $fetchQuery);
                    if (mysqli_num_rows($fetchResult) > 0) {
                        while ($row = mysqli_fetch_assoc($fetchResult)) {
                            echo "ID:" . $row['id'] . ", " . $row['action_date'] . "|" . $row['action_time'] . "|" . $row['action_by'] . "|" . $row['item_name'] . "|" . $row['item_desc'] . "|" . $row['item_id'] . "|" . $row['item_lot'] . "|" . $row['item_bin'] . "<br>";
                        }       
                        mysqli_free_result($fetchResult);
                        
                        // pagination controls
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
                        echo "there are no data";
                    }

                    ?>
                </div>
                <div class="item-display-footer">

                </div>
            </div>
        </div>
    </div>

    <div class="web-footer">

    </div>
</body>
</html>