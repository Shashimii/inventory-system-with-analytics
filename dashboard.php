<?php
include 'connections.php';
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <script defer src="./js/alert.js"></script>  
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dashboard | Hiltac</title>
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
                                        <li><a class="dropdown-item active" href="dashboard">Dashboard</a></li>
                                        <li><a class="dropdown-item" href="dailyreports">Daily Reports</a></li>
                                        <li><a class="dropdown-item" href="analytics">Analytics</a></li>
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
                                        <li><a class="dropdown-item" href="fg_items">Manage</a></li>
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
                                        <li><a class="dropdown-item" href="settings_items">Items</a></li>
                                        <li><a class="dropdown-item" href="settings_accounts">Accounts</a></li>
                                        <li><a class="dropdown-item" href="settings_data">Backup Data</a></li>
                                    </ul>
                                </li>
                            </ul>
                            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                                <a class="nav-link"><i class="fa-solid fa-user-plus"></i><?php echo $sys_user ?></a>
                                <a class="nav-link"><?php echo $sys_date ?></a>
                                <a class="nav-link" id="sysTime"></a>
                                <div class="notification-wrapper">
                                    <li class="nav-item dropdown">
                                        <a class="nav-link notification-bell" role="button" data-bs-toggle="dropdown"><h6><i class="fa-solid fa-bell"></i></h6></a>
                                        <ul class="dropdown-menu dropdown-menu-end">
                                            <li><h6 class="dropdown-item">Notifications</h6></li>
                                            <li><hr class="dropdown-divider"></li>
                                            <div class="d-grid gap-1" id="notif">
                                                
                                            </div>
                                        </ul>
                                    </li>
                                    <span class="badge" id="notificationCounter"></span>
                                </div>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
        <div class="content-body">
            <div class="main-content">
                <div class="dashboard-main-wrapper">
                    <div class="dashboard-row-1">
                        <div class="dashboard-card-sm">
                            <div class="dashboard-card-sm-row">
                                <div class="dashboard-card-sm-item">
                                    <h3>Raw Material</h3>
                                </div>
                                <div class="dashboard-card-sm-item">
                                    <i class="fa-solid fa-database"></i>
                                </div>
                            </div>
                            <div class="dashboard-card-sm-row">
                                <div class="dashboard-card-sm-item">
                                    <h5>Stocks 0</h5>
                                </div>
                            </div>
                        </div>
                        <div class="dashboard-card-sm">
                            <div class="dashboard-card-sm-row">
                                <div class="dashboard-card-sm-item">
                                    <h3>Finished Goods</h3>
                                </div>
                                <div class="dashboard-card-sm-item">
                                    <i class="fa-solid fa-box-tissue"></i>
                                </div>
                            </div>
                            <div class="dashboard-card-sm-row">
                                <div class="dashboard-card-sm-item">
                                    <h5>Stocks 0</h5>
                                </div>
                            </div>
                        </div>
                        <div class="dashboard-card-sm">
                            <div class="dashboard-card-sm-row">
                                <div class="dashboard-card-sm-item">
                                    <h3>Products</h3>
                                </div>
                                <div class="dashboard-card-sm-item">
                                    <i class="fa-solid fa-boxes-stacked"></i>
                                </div>
                            </div>
                            <div class="dashboard-card-sm-row">
                                <div class="dashboard-card-sm-item">
                                    <h5>Stocks 0</h5>
                                </div>
                            </div>
                        </div>
                        <div class="dashboard-card-sm">
                            <div class="dashboard-card-sm-row">
                                <div class="dashboard-card-sm-item">
                                    <h3>Returned</h3>
                                </div>
                                <div class="dashboard-card-sm-item">
                                    <i class="fa-solid fa-arrow-right-arrow-left"></i>
                                </div>
                            </div>
                            <div class="dashboard-card-sm-row">
                                <div class="dashboard-card-sm-item">
                                    <h5>Products 0</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="dashboard-row-2 ">
                        <div class="dashboard-card-md">
                            <div class="dashboard-card-md-row">
                                <h4>Clients</h4>
                                <i class="fa-solid fa-users"></i>
                            </div>
                            <div class="dashboard-card-md-row">
                                <p>Client Chart Here</p>
                            </div>
                        </div>
                        <div class="dashboard-card-md">
                            <div class="dashboard-card-md-row">
                                <h4>Products</h4>
                                <i class="fa-solid fa-boxes-stacked"></i>
                            </div>
                            <div class="dashboard-card-md-row">
                                <p>Product Chart Here</p>
                            </div>
                        </div>
                        <div class="dashboard-card-md">
                            <div class="dashboard-card-md-row">
                                <h4>Recent Inventory Updates</h4>
                                <i class="fa-solid fa-repeat"></i>
                            </div>
                            <div class="dashboard-card-md-row">
                                <p>Inventory Changes Here</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</body>
</html>
