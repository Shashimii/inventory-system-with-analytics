<!DOCTYPE html>
<html lang="en">
<head>
    <link rel="stylesheet" href="node_modules/bootstrap/dist/css/bootstrap.min.css">
    <script src="node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"></script>
    <script src="rm_history_script.js"></script>
    <link rel="stylesheet" href="style.css">
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Inventory History | Hiltac</title>
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
    
                </div>
                <div class="item-display-footer" id="itemDisplayFooter">

                </div>
            </div>
        </div>
    </div>
</body>
</html>
