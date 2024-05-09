<?php
include 'connections.php';
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <script defer src="./js/settingsFormSubmit.js"></script>   
    <script defer src="./js/settingsFetchItems.js"></script>     
    <script defer src="./js/alert.js"></script> 
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Item Settings | Hiltac</title>
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
                                        <li><a class="dropdown-item active" href="settings_items">Items</a></li>
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
                <div class="s-container">
                    <div class="s-header">
                        <h3><i class="fa-solid fa-list"></i> Inventory Items Settings</h3>
                        <div id="itemSetHide"class="s-buttons">
                            <button class="btn btn-sm btn-primary" data-bs-toggle="modal" data-bs-target="#rmModal">Register Raw Material</button>
                            <button class="btn btn-sm btn-primary" data-bs-toggle="modal" data-bs-target="#fgModal">Register Finished Goods</button>
                            <button class="btn btn-sm btn-primary" data-bs-toggle="modal" data-bs-target="#pModal">Register Products</button>
                            <button class="btn btn-sm btn-primary" data-bs-toggle="modal" data-bs-target="#cModal">Register Client Code</button>
                        </div>
                    </div>
                    <div id="itemSetHidden" class="hidden-container">

                    </div>
                    <div id="itemTableSetHide" class="s-tables">
                        <div class="s-c-table" id="rm">

                        </div>
                        <div class="s-c-table" id="fg">

                        </div>
                        <div class="s-c-table" id="p">

                        </div>
                        <div class="s-c-table" id="c">

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</body>

<!-- rm -->
<div class="modal" id="rmModal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="rmModal" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
            <div class="modal-header">
                <h1 class="modal-title fs-5" id="rmModal">Register Raw Materials</h1>
                <i class="fa-solid fa-plus"></i>
            </div>
            <div class="modal-body">
                <form id="rmForm">
                    <div class="rm-form-container">
                        <div class="ipt-container">
                            <label for="itemRmName">Name</label>
                            <input name="item_name" id="itemRmName" placeholder="Enter Raw Material Name" pattern="[a-zA-Z0-9 ]*" title="Avoid unecessary special characters" maxlength="20" class="form-control form-control-sm" type="text" required>
                        </div>
                        <div class="ipt-container">
                            <label for="itemRmDesc">Description</label>
                            <input name="item_desc" id="itemRmDesc" placeholder="Enter Raw Material Description" pattern="[a-zA-Z0-9 ]*" title="Avoid unecessary special characters" maxlength="20" class="form-control form-control-sm" type="text" required>
                        </div>
                    </div>
            </div>
            <div class="modal-footer">
                <button type="submit" class="btn btn-success">Register Raw Material</button>
                </form>
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            </div>
        </div>
    </div>
</div>

<!-- fg -->
<div class="modal" id="fgModal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="fgModal" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
            <div class="modal-header">
                <h1 class="modal-title fs-5" id="fgModal">Register Finished Goods</h1>
                <i class="fa-solid fa-plus"></i>
            </div>
            <div class="modal-body">
                <form id="fgForm">
                    <div class="rm-form-container">
                        <div class="ipt-container">
                            <label for="itemFgName">Name</label>
                            <input name="item_name" id="itemFgName" placeholder="Enter Finished Good Name" pattern="[a-zA-Z0-9 ]*" title="Avoid unecessary special characters" maxlength="20" class="form-control form-control-sm" type="text" required>
                        </div>
                        <div class="ipt-container">
                            <label for="itemFgDesc">Description</label>
                            <input name="item_desc" id="itemFgDesc" placeholder="Enter Finished Good Description" pattern="[a-zA-Z0-9 ]*" title="Avoid unecessary special characters" maxlength="20" class="form-control form-control-sm" type="text" required>
                        </div>
                    </div>
            </div>
            <div class="modal-footer">
                <button type="submit" class="btn btn-success">Register Finished Goods</button>
                </form>
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            </div>
        </div>
    </div>
</div>

<!-- p -->
<div class="modal" id="pModal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="pModal" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
            <div class="modal-header">
                <h1 class="modal-title fs-5" id="pModal">Register Products</h1>
                <i class="fa-solid fa-plus"></i>
            </div>
            <div class="modal-body">
                <form id="pForm">
                    <div class="rm-form-container">
                        <div class="ipt-container">
                            <label for="itemPName">Name</label>
                            <input name="item_name" id="itemPName" placeholder="Enter Product Name" pattern="[a-zA-Z0-9 ]*" title="Avoid unecessary special characters" maxlength="20" class="form-control form-control-sm" type="text" required>
                        </div>
                        <div class="ipt-container">
                            <label for="itemPDesc">Description</label>
                            <input name="item_desc" id="itemPDesc" placeholder="Enter Product Description" pattern="[a-zA-Z0-9 ]*" title="Avoid unecessary special characters" maxlength="20" class="form-control form-control-sm" type="text" required>
                        </div>
                    </div>
            </div>
            <div class="modal-footer">
                <button type="submit" class="btn btn-success">Register Products</button>
                </form>
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            </div>
        </div>
    </div>
</div>

<!-- c -->
<div class="modal" id="cModal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="cModal" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
            <div class="modal-header">
                <h1 class="modal-title fs-5" id="cModal">Register Client Code</h1>
                <i class="fa-solid fa-plus"></i>
            </div>
            <div class="modal-body">
                <form id="cForm">
                    <div class="rm-form-container">
                        <div class="ipt-container">
                            <label for="itemCName">Client Code</label>
                            <input name="item_name" id="itemCName" placeholder="Enter Client Code" pattern="[a-zA-Z0-9 ]*" title="Avoid unecessary special characters" maxlength="20" class="form-control form-control-sm" type="text" required>
                        </div>
                    </div>
            </div>
            <div class="modal-footer">
                <button type="submit" class="btn btn-success">Register Client Code</button>
                </form>
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            </div>
        </div>
    </div>
</div>
</html>

