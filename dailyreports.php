<?php 

include 'connections.php';

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <script src="./js/dailyreports.js"></script>
    <script defer src="./js/alert.js"></script> 
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Daily Reports | Hiltac</title>
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
                                        <li><a class="dropdown-item active" href="dailyreports">Daily Reports</a></li>
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
                                    </ul>
                                </li>
                            </ul>
                            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                                <a class="nav-link"><?php echo $user_icon ?><?php echo $sys_user ?></a>
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
                <div class="daily-content">
                    <div class="daily-header">
                        <div>
                            <img src="./assets/logo.jpg" alt="Logo" width="55" height="50" class="d-inline-block align-text-top" style="border-radius: 50%;">
                        </div>
                        <div class="company-title">
                            <h3><i>HILTAC Manufacturing and Trading Inc.</i></h3>
                        </div>
                    </div>
                    <hr class="border border-danger border-3 opacity-100" style="margin: 0; padding: 0;">
                    <div class="daily-body">
                        <div class="daily-count">
                            <h4><span class="material-symbols-outlined" style="font-size: 30px;">pallet</span> Raw Material</h4>
                            <div class="daily-card-wrapper">
                                <div class="daily-card">
                                    <h5><span class="material-symbols-outlined" style="font-size: 30px;">call_received</span> Received</h5>
                                    <div id="rmReceived">

                                    </div>
                                </div>
                                <div class="daily-card">
                                    <h5><span class="material-symbols-outlined" style="font-size: 30px">close</span> Marked as Depleted</h5>
                                    <div id="rmUsed">

                                    </div>
                                </div>
                                <div class="daily-card">
                                    <h5><i class="fa-solid fa-scroll"></i> Scrap</h5>
                                    <div id="rmScrap">

                                    </div>
                                </div>
                            </div>  
                        </div>
                        <div class="daily-count">
                            <h4><i class="fa-solid fa-toilet-paper"></i> Finished Goods</h4>
                            <div class="daily-card-wrapper">
                                <div class="daily-card">
                                    <h5><span class="material-symbols-outlined" style="font-size: 30px;">procedure</span> Produced</h5>
                                    <div id="fgProduced">

                                    </div>
                                </div>
                            </div>  
                        </div>
                        <div class="daily-count">
                            <h4><span class="material-symbols-outlined" style="font-size: 30px;">package_2</span> Products</h4>
                            <div class="daily-card-wrapper">
                                <div class="daily-card">
                                    <h5><span class="material-symbols-outlined" style="font-size: 30px;">procedure</span> Produced</h5>
                                    <div id="pProduced">

                                    </div>
                                </div>
                                <div class="daily-card">
                                    <h5><span class="material-symbols-outlined" style="font-size: 30px;">local_shipping</span> Shipped</h5>
                                    <div id="pShipped">

                                    </div>
                                </div>
                            </div>  
                        </div>
                    </div>
                    <hr class="border border-danger border-3 opacity-100" style="margin: 0; padding: 0;">
                    <div class="daily-footer">
                        <button id="toggle-print" class="btn btn-sm btn-primary"><i class="fa-solid fa-print"></i> Print</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</body>
</html>

<style>
    @media print {
        .content-head{
            display: none !important;
        }

        .daily-footer{
            display: none !important;
        }
    }
</style>
