<?php 

include 'connections.php';

$codeQuery = "SELECT * FROM company_clients";
$result = $con->query($codeQuery);
while ($optionCode = $result->fetch_assoc()) {
    $codeOptions[] = array('companyCode' => $optionCode['company_code']);
}

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <script src="./js/pTables.js"></script>
    <script src="./js/pFetchReceived.js"></script>
    <script src="./js/pFormShip.js"></script>
    <script defer src="./js/alert.js"></script>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Products Stock  | Hiltac</title>
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
                                        <li><a class="dropdown-item" href="rm_history">History</a></li>
                                    </ul>
                                </li>
                                <li class="nav-item dropdown">
                                    <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Finished Goods</a>
                                    <ul class="dropdown-menu">
                                        <li><a class="dropdown-item" href="fg_items">Manage</a></li>
                                        <li><a class="dropdown-item" href="fg_status">Status</a></li>
                                        <li><a class="dropdown-item" href="fg_history">History</a></li>
                                    </ul>
                                </li>
                                <li class="nav-item dropdown">
                                    <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Products</a>
                                    <ul class="dropdown-menu">
                                        <li><a class="dropdown-item active" href="p_stocks">Manage</a></li>
                                        <li><a class="dropdown-item" href="p_status">Status</a></li>
                                        <li><a class="dropdown-item" href="p_history">History</a></li>
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
                <div class="p-manage-row-1">
                    <div class="p-manage-table" id="renderpTable">

                    </div>
                </div>
            </div>
        </div>
    </div>
</body>

<div class="modal" id="pShipModal" data-bs-keyboard="false" tabindex="-1" aria-labelledby="pShipModal" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
            <div class="modal-header">
                <h1 class="modal-title fs-5" id="pShipModal">Ship Products</h1>
                <i class="fa-solid fa-truck-fast"></i>
            </div>
            <div class="modal-body">
                <form id="shipForm">
                    <div class="ipt-container">
                        <label for="shipName">Product Name</label>
                        <input name="ship_name" id="shipName" placeholder="Product Name" title="Product Name" class="form-control form-control-sm" type="text" value="" readonly required>
                        <label for="shipName">Product Description</label>
                        <input name="ship_desc" id="shipDesc" placeholder="Product Description" title="Product Description" class="form-control form-control-sm" type="text" value="" readonly required>
                        <label for="shipId">Product Id</label>
                        <input name="ship_id" id="shipId" placeholder="Product Id" title="Product Id" class="form-control form-control-sm" type="text" value="" readonly required>
                        <label for="shipLot">Product Lot</label>
                        <input name="ship_lot" id="shipLot" placeholder="Product Lot" title="Product Lot" class="form-control form-control-sm" type="text" value="" readonly required>
                        <label for="shipBin">Product Bin</label>
                        <input name="ship_bin" id="shipBin" placeholder="Product Bin" title="Product Bin" class="form-control form-control-sm" type="text" value="" readonly required>
                        <label for="shipQuantity">Product Quantity (PCS)</label>
                        <input name="ship_quantity" id="shipQuantity" placeholder="Product Quantity" title="Product Quantity" class="form-control form-control-sm" type="number" value="" readonly required>
                        <label for="boxType">Box Type</label>
                        <input name="box_type" id="boxType" placeholder="Box Type" title="Box Type" class="form-control form-control-sm" type="text" value="" readonly required>
                        <label for="packName">Client Company Code</label>
                        <select name="company_code" id="companyCode" class="form-select form-select-sm dropdown" required>
                            <option selected hidden value="">Select Company Code</option>
                            <?php 
                                foreach ($codeOptions as $option) {
                                    echo "<option value='" . $option['companyCode'] . "'>" . $option['companyCode'] . "</option>";
                                }
                            ?>
                        </select>
                    </div>
            </div>
            <div class="modal-footer">
                    <button type="submit" id="shipProduct" class="btn btn-success"><i class="fa-solid fa-truck-fast"></i> Ship Product</button>
                </form>
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            </div>
        </div>
    </div>
</div>
</html>
