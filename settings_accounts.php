<?php
    include 'connections.php';
?>


<!DOCTYPE html>
<html lang="en">
<head>
    <script src="./js/settingsAccounts.js"></script>
    <script src="./js/settingsFetchAccounts.js"></script>
    <script src="./js/settingsAccountsRemove.js"></script>
    <script defer src="./js/alert.js"></script> 
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Accounts Settings | Hiltac</title>
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
                                        <li><a class="dropdown-item active" href="settings_accounts">Accounts</a></li>
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
                <div class="s-acc-c">
                    <div class="s-header">
                        <h3>Account Settings</h3>
                    </div>
                    <hr class="border border-danger border-3 opacity-100" style="margin: 0; padding: 0;">
                    <div class="s-body">
                        <div class="accounts">
                            <div id="accountTable" class="s-container">

                            </div>
                        </div>
                        <div class="s-accounts">
                            <div class="s-card">
                                <div class="d-grid gap-2">
                                    <button id='registerAcc' data-bs-toggle="modal" data-bs-target="#addAccount" class="btn btn-success btn-sm">Add Accounts</button>
                                    <button id='Logout' class="btn btn-danger btn-sm" onclick="window.location.href = 'logout.php'">Logout</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</body>


<!-- Modal -->
<div class="modal" id="addAccount" data-bs-keyboard="false" tabindex="-1" aria-labelledby="addAccount" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
            <div class="modal-header">
                <h1 class="modal-title fs-5" id="addAccount">Add Account</h1>
                <i class="fa-solid fa-users"></i>
            </div>
            <div class="modal-body">
                <form id="addAccountForm">
                    <div class="ipt-container">
                        <label for="username">Username</label>
                        <input class="form-control form-control-sm" type="text" name="user" required placeholder="Username" pattern="[a-zA-Z0-9]+" title="Enter Username">
                        <label for="userpass">Password/Pin</label>
                        <input class="form-control form-control-sm" type="password" name="password" id="password-input" pattern="[0-9]{8}" title="Enter correct PIN" required placeholder="Enter Password/Pin">
                        <label for="accountType">Account Type</label>
                        <select name="account_type" id="accountType" class="form-select form-select-sm dropdown" required>
                            <option selected hidden value="">Select Account Type</option>
                            <option value="Admin">Admin</option>
                        </select>
                    </div>
            </div>
            <div class="modal-footer">
                    <button type="submit" class="btn btn-success">Add Account</button>
                </form>
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            </div>
        </div>
    </div>
</div>

<div class="modal" id="removeAccountModal" data-bs-keyboard="false" tabindex="-1" aria-labelledby="removeAccountModal" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
            <div class="modal-header">
                <h1 class="modal-title fs-5" id="removeAccountModal">Remove Account</h1>
                <i class="fa-solid fa-users"></i>
            </div>
            <div class="modal-body">
                <form id="removeAccountForm">
                    <div class="ipt-container">
                        <label for="username">Username</label>
                        <input class="form-control form-control-sm" id="displayUser" type="text" value="" readonly>
                        <label for="userpass">Password/Pin</label>
                        <input class="form-control form-control-sm" id="displayPassword" type="text" value="" readonly>
                        <label for="accountType">Account Type</label>
                        <input name="account_type" id="displayType" class="form-control form-control-sm" type="text" value="" readonly>
                    </div>
            </div>
            <div class="modal-footer">
                    <input type="hidden" name="account_id" id="thisId" value="">
                    <button type="submit" class="btn btn-danger">Remove Account</button>
                </form>
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            </div>
        </div>
    </div>
</div>

</html>