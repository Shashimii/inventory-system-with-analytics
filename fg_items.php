<?php 

include 'connections.php';

$nameQuery = "SELECT * FROM fg_registered";
$result = $con->query($nameQuery);
while ($optionFg = $result->fetch_assoc()) {
    $FgOptions[] = array('fg_name' => $optionFg['fg_name'], 'fg_desc' => $optionFg['fg_description']);
}

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <script src="./js/fgTables.js"></script>
    <script src="./js/fgFetchReceived.js"></script>
    <script src="./js/fgPack.js"></script>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Finished Goods | Hiltac</title>
</head>
<body>
    <div class="main">
        <div class="content-head">
            <div class="navbar-container">
                <nav class="navbar navbar-expand-lg fixed-top" style="background-color: #CD1818">
                    <div class="container-fluid">
                        <a class="navbar-brand">
                            <img src="./assets/logo.jpg" alt="Logo" width="45" height="40" class="d-inline-block align-text-top" style="border-radius: 50%;">
                        </a>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                                <li class="nav-item dropdown">
                                    <a class="nav-link dropdown-toggle" href="dashboard" role="button" data-bs-toggle="dropdown" aria-expanded="false">Inventory</a>
                                    <ul class="dropdown-menu">
                                        <li><a class="dropdown-item" href="dashboard">Dashboard</a></li>
                                        <li><a class="dropdown-item" href="dailyreports">Daily Reports</a></li>
                                    </ul>
                                </li>
                                <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Raw Materials</a>
                                    <ul class="dropdown-menu">
                                        <li><a class="dropdown-item" href="rm_items">Manage</a></li>
                                        <li><a class="dropdown-item" href="rm_status">Status</a></li>
                                        <li><a class="dropdown-item" href="rm_history">Transaction History</a></li>
                                    </ul>
                                </li>
                                <li class="nav-item dropdown">
                                    <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Finished Goods</a>
                                    <ul class="dropdown-menu">
                                        <li><a class="dropdown-item active" href="fg_items">Manage</a></li>
                                        <li><a class="dropdown-item" href="fg_status">Status</a></li>
                                        <li><a class="dropdown-item" href="fg_history">Transaction History</a></li>
                                    </ul>
                                </li>
                                <li class="nav-item dropdown">
                                    <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Products</a>
                                    <ul class="dropdown-menu">
                                        <li><a class="dropdown-item" href="p_stocks">Manage</a></li>
                                        <li><a class="dropdown-item" href="p_status">Status</a></li>
                                        <li><a class="dropdown-item" href="p_history">Transaction History</a></li>
                                    </ul>
                                </li>
                                <li class="nav-item dropdown">
                                    <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Settings</a>
                                    <ul class="dropdown-menu">
                                        <li><a class="dropdown-item" href="settings_accounts">Accounts</a></li>
                                        <li><a class="dropdown-item" href="settings_data">Backup Data</a></li>
                                    </ul>
                                </li>
                            </ul>
                            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                                <a class="nav-link"><i class="fa-solid fa-user-plus"></i><?php echo $sys_user ?></a>
                                <a class="nav-link"><?php echo $sys_date ?></a>
                                <a class="nav-link" id="sysTime"></a>
                                <div class="badge">
                                    <p>99+</p>
                                    <li class="nav-item dropdown">
                                        <a class="nav-link" role="button" data-bs-toggle="dropdown"><h6><i class="fa-solid fa-bell"></i></h6></a>
                                        <ul class="dropdown-menu dropdown-menu-end">
                                            <li><h6 class="dropdown-item">Notifications</h6></li>
                                            <li><hr class="dropdown-divider"></li>
                                            <li><a class="dropdown-item" href="notif">AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA</a></li>
                                            <li><a class="dropdown-item" href="notif">AAA</a></li>
                                            <li><a class="dropdown-item" href="notif">AAA</a></li>
                                            <li><a class="dropdown-item" href="notif">AAA</a></li>
                                            <li><a class="dropdown-item" href="notif">AAA</a></li>
                                        </ul>
                                    </li>
                                </div>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
        <div class="content-body">
            <div class="main-content">
                <div class="fg-manage-row-1">
                    <div class="fg-manage-table" id="renderfgTable">

                    </div>
                    <div class="fg-manage-list">
                        <div>
                            <h3>Selected Raw Materials</h3>
                            <hr class="border border-danger border-2 opacity-75">
                        </div>
                        <div class="selected-list" id="selectedList">

                        </div>
                        <div class="selected-list-btn">
                        <hr class="border border-danger border-2 opacity-75">
                            <div class="selected-counter">
                                <h5 id="quantityCount"></h5>
                            </div>
                            <div class="row row-cols-1 g-2">
                                <div class="d-grid gap-2">
                                    <button id="packSelected" class="btn btn-sm btn-primary">Pack Raw Material</button>
                                </div>
                                <div class="d-grid gap-2">
                                    <button id="clearSelected" class="btn btn-sm btn-secondary">Clear Selected</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</body>
</html>
