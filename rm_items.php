<?php
include 'connections.php';

$RmOptions = [];
$FgOptions = [];

// raw material names
$nameQuery = "SELECT * FROM rm_registered";
$result = $con->query($nameQuery);
while ($optionRm = $result->fetch_assoc()) {
    $RmOptions[] = array('rm_name' => $optionRm['rm_name'], 'rm_desc' => $optionRm['rm_description']);
}

// fg names
$nameQuery = "SELECT * FROM fg_registered";
$result = $con->query($nameQuery);
while ($optionFg = $result->fetch_assoc()) {
    $FgOptions[] = array('fg_name' => $optionFg['fg_name'], 'fg_desc' => $optionFg['fg_description']);
}

?>

<!DOCTYPE html>
<html lang="en">

<head>
    <script defer src="./js/rmFormSubmit.js"></script>
    <script defer src="./js/rmFormReceive.js"></script>
    <script defer src="./js/rmFormInProduction.js"></script>
    <script defer src="./js/rmMarkDepleted.js"></script>
    <script defer src="./js/rmFormRemove.js"></script>
    <script defer src="./js/rmFormReceiveAdj.js"></script>
    <script defer src="./js/rmUndo.js"></script>
    <script src="./js/rmTables.js"></script> <!-- render the table first -->
    <script src="./js/rmFetchReceived.js"></script> <!-- attach the event listeners -->
    <script src="./js/rmFetchInProduction.js"></script>
    <script src="./js/rmFetchDepleted.js"></script>
    <script src="./js/rmFetchUndo.js"></script>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Raw Materials | Hiltac</title>
</head>

<body>
    <div class="main">
        <div class="content-head">
            <div class="navbar-container">
                <nav class="navbar navbar-expand-lg fixed-top" style="background-color: #CD1818">
                    <div class="container-fluid">
                        <a class="navbar-brand">
                            <img src="./assets/logo.jpg" alt="Logo" width="45" height="40"
                                class="d-inline-block align-text-top" style="border-radius: 50%;">
                        </a>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                                <li class="nav-item dropdown">
                                    <a class="nav-link dropdown-toggle" href="dashboard" role="button"
                                        data-bs-toggle="dropdown" aria-expanded="false">Inventory</a>
                                    <ul class="dropdown-menu">
                                        <li><a class="dropdown-item" href="dashboard">Dashboard</a></li>
                                        <li><a class="dropdown-item" href="dailyreports">Daily Reports</a></li>
                                    </ul>
                                </li>
                                <li class="nav-item dropdown">
                                    <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                                        aria-expanded="false">Raw Materials</a>
                                    <ul class="dropdown-menu">
                                        <li><a class="dropdown-item active" href="rm_items">Manage</a></li>
                                        <li><a class="dropdown-item" href="rm_status">Status</a></li>
                                        <li><a class="dropdown-item" href="rm_history">Transaction History</a></li>
                                    </ul>
                                </li>
                                <li class="nav-item dropdown">
                                    <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                                        aria-expanded="false">Finished Goods</a>
                                    <ul class="dropdown-menu">
                                        <li><a class="dropdown-item" href="fg_items">Manage</a></li>
                                        <li><a class="dropdown-item" href="fg_status">Status</a></li>
                                        <li><a class="dropdown-item" href="fg_history">Transaction History</a></li>
                                    </ul>
                                </li>
                                <li class="nav-item dropdown">
                                    <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                                        aria-expanded="false">Products</a>
                                    <ul class="dropdown-menu">
                                        <li><a class="dropdown-item" href="p_stocks">Manage</a></li>
                                        <li><a class="dropdown-item" href="p_status">Status</a></li>
                                        <li><a class="dropdown-item" href="p_history">Transaction History</a></li>
                                    </ul>
                                </li>
                                <li class="nav-item dropdown">
                                    <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                                        aria-expanded="false">Settings</a>
                                    <ul class="dropdown-menu">
                                        <li><a class="dropdown-item" href="settings_accounts">Accounts</a></li>
                                        <li><a class="dropdown-item" href="settings_data">Backup Data</a></li>
                                    </ul>
                                </li>
                            </ul>
                            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                                <a class="nav-link"><i class="fa-solid fa-user-plus"></i>
                                    <?php echo $sys_user ?>
                                </a>
                                <a class="nav-link">
                                    <?php echo $sys_date ?>
                                </a>
                                <a class="nav-link" id="sysTime"></a>
                                <div class="badge">
                                    <p>99+</p>
                                    <li class="nav-item dropdown">
                                        <a class="nav-link" role="button" data-bs-toggle="dropdown">
                                            <h6><i class="fa-solid fa-bell"></i></h6>
                                        </a>
                                        <ul class="dropdown-menu dropdown-menu-end">
                                            <li>
                                                <h6 class="dropdown-item">Notifications</h6>
                                            </li>
                                            <li>
                                                <hr class="dropdown-divider">
                                            </li>
                                            <li><a class="dropdown-item"
                                                    href="notif">AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA</a></li>
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
                <div class="rm-manage-main-wrapper">
                    <div class="rm-manage-row-1">
                        <div class="rm-manage-sm-card">
                            <div class="rm-manage-sm-card-item">
                                <h5>Manage Raw Materials</h5>
                            </div>
                            <div class="rm-manage-sm-card-item">
                                <button class="btn btn-success btn-sm" id="renderReceive"><i class="fa-solid fa-hands-holding-circle"></i> Received Raw Materials</button>
                                <button class="btn btn-secondary btn-sm" id="renderInProduction"><i class="fa-solid fa-spinner"></i> In Production Raw Materials</button>
                                <button class="btn btn-danger btn-sm" id="renderUsed"><i class="fa-regular fa-square-full"></i> Depleted Raw Materials</button>
                                <button class="btn btn-warning btn-sm" data-bs-toggle="modal" data-bs-target="#rmRegisterModal"><i class="fa-solid fa-plus"></i> Register Raw Materials</button>
                            </div>
                        </div>
                    </div>
                    <div class="rm-manage-row-2" id="renderRmTable">
                            <!--- rmTables.js --->
                    </div>
                </div>
            </div>
        </div>
    </div>
</body>

<!-- Modal -->

<!-- Register -->
<div class="modal" id="rmRegisterModal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="rmRegisterModal" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
            <div class="modal-header">
                <h1 class="modal-title fs-5" id="rmRegisterModal">Register Raw Materials</h1>
                <i class="fa-solid fa-plus"></i>
            </div>
            <div class="modal-body">
                <form id="rm_register_form">
                    <div class="rm-form-container">
                        <div class="ipt-container">
                            <label for="regRmName">Name</label>
                            <input name="reg_rm_name" id="regRmName" placeholder="Enter Raw Material Name" pattern="[a-zA-Z0-9 ]*" title="Avoid unecessary special characters" maxlength="20" class="form-control form-control-sm" type="text" required>
                        </div>
                        <div class="ipt-container">
                            <label for="regRmDesc">Description</label>
                            <input name="reg_rm_desc" id="regRmDesc" placeholder="Enter Raw Material Name" pattern="[a-zA-Z0-9 ]*" title="Avoid unecessary special characters" maxlength="20" class="form-control form-control-sm" type="text" required>
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

<!-- Receive -->
<div class="modal" id="receiveModal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="receiveModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
            <div class="modal-header">
                <h1 class="modal-title fs-5" id="receiveModalLabel">Receive Raw Materials</h1>
                <i class="fa-solid fa-hands-holding-circle"></i>
            </div>
            <div class="modal-body">
                <form id="rm_receive_form">
                    <div class="rm-form-container">
                        <div class="ipt-container">
                            <label for="recRmName">Raw Material</label>
                            <select name="rec_rm_name" id="recRmName" class="form-select form-select-sm dropdown" required>
                                <option selected hidden value="">Select Raw Material</option>
                                <?php 
                                 foreach ($RmOptions as $option) {
                                    echo "<option value='". $option['rm_name'] ."' data-description='". $option['rm_desc'] ."'>". $option['rm_name'] ."</option>";
                                 }
                                ?>
                            </select>
                        </div>
                        <div class="ipt-container">
                            <label for="recRmDesc">Description</label>
                            <input name="rec_rm_desc" id="recRmDesc" placeholder="Raw Material Description" title="Raw Material Description" class="form-control form-control-sm" type="text" value="" readonly required>
                            <script>
                                $('#recRmName').on('change', function() {
                                    var selectedRmName = $(this).find(':selected');
                                    var selectedRmDesc = selectedRmName.data('description');
                                    $('#recRmDesc').val(selectedRmDesc)
                                })
                            </script>
                        </div>
                        <div class="ipt-container">
                            <label for="recRmId">Id</label>
                            <input name="rec_rm_id" id="recRmId" placeholder="Enter Raw Material Id" pattern="[a-zA-Z0-9 ]*" title="Avoid unecessary special characters" maxlength="20" class="form-control form-control-sm" type="text" required>
                        </div>

                        <div class="ipt-container">
                            <label for="recRmBin">Storage Bin</label>
                            <input name="rec_rm_bin" id="recRmBin" placeholder="Enter Raw Material Bin" pattern="[a-zA-Z0-9 ]*" title="Avoid unecessary special characters" maxlength="15" class="form-control form-control-sm" type="text" required>
                        </div>

                        <div class="ipt-container">
                            <label for="recRmQuantity">Quantity (KG)</label>
                            <input name="rec_rm_quantity" id="recRmQuantity" placeholder="Enter Raw Material Quantity" pattern="[a-zA-Z0-9 ]*" title="Avoid unecessary special characters" min="1" max="100000" class="form-control form-control-sm" type="number" required>
                        </div>
                    </div>
            </div>
            <div class="modal-footer">
                <button type="submit" class="btn btn-success">Receive Raw Material</button>
                </form>
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            </div>
        </div>
    </div>
</div>

<!-- ==>InProduction -->
<div class="modal" id="rmInProductionModal" data-bs-keyboard="false" tabindex="-1" aria-labelledby="rmInProductionModal" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
            <div class="modal-header">
                <h1 class="modal-title fs-5" id="rmInProductionModal">Use Raw Material in Production</h1>
                <i class="fa-solid fa-database"></i>
            </div>
            <div class="modal-body">
                <div class="rm-info-container">
                    <div class="rm-info-header">
                        <div class="info-header-container">
                            <h1 id="itemInfoName"></h1>
                            <h3 id="itemInfoQuantity"></h3>
                        </div>
                        <div class="info-header-container">
                            <h5>Date Received</h5>
                            <p id="itemInfoDate"></p>
                        </div>
                    </div>
                    <hr>
                    <div class="info-container">
                        <div>
                            <h5>Description</h5>
                            <p id="itemInfoDesc"></p>
                        </div>
                        <div>
                            <h5>Id</h5>
                            <p id="itemInfoId"></p>
                        </div>
                        <div>
                            <h5>Lot</h5>
                            <p id="itemInfoLot"></p>
                        </div>
                        <div>
                            <h5>Storage Bin</h5>
                            <p id="itemInfoBin"></p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="modal-footer">
                <form id="rmInProductionForm">
                    <input type="hidden" name="item_name" id="itemName" value="">
                    <input type="hidden" name="item_desc" id="itemDesc" value="">
                    <input type="hidden" name="item_id" id="itemId" value="">
                    <input type="hidden" name="item_lot" id="itemLot" value="">
                    <input type="hidden" name="item_bin" id="itemBin" value="">
                    <input type="hidden" name="quantity_receive" id="quantityReceive" value="">
                    <button type="submit" class="btn btn-warning"><i class="fa-solid fa-arrow-right"></i> Use In Production</button>
                </form>
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            </div>
        </div>
    </div>
</div>

<!-- ==>Depleted -->
<div class="modal" id="rmDepletedModal" data-bs-keyboard="false" tabindex="-1" aria-labelledby="rmDepletedModal" aria-hidden="true">
    <div class="modal-dialog modal-xl modal-dialog-centered">
        <div class="modal-content">
            <div class="modal-header">
                <h1 class="modal-title fs-5" id="rmDepletedModal">Mark Raw Material as Depleted</h1>
                <i class="fa-solid fa-database"></i>
            </div>
            <div class="modal-body">
                <div class="rm-depleted-form-container">
                    <div class="rm-info-container">
                        <h4>Raw Material Used</h4>
                        <hr>
                        <div class="rm-info-header">
                            <div class="info-header-container">
                                <h1 id="itemInfoName"></h1>
                                <h3 id="itemInfoQuantity"></h3>
                            </div>
                            <div class="info-header-container">
                                <h5>Date In</h5>
                                <p id="itemInfoDate"></p>
                            </div>
                        </div>
                        <hr>
                        <div class="info-container">
                            <div>
                                <h5>Description</h5>
                                <p id="itemInfoDesc"></p>
                            </div>
                            <div>
                                <h5>Id</h5>
                                <p id="itemInfoId"></p>
                            </div>
                            <div>
                                <h5>Lot</h5>
                                <p id="itemInfoLot"></p>
                            </div>
                            <div>
                                <h5>Storage Bin</h5>
                                <p id="itemInfoBin"></p>
                            </div>
                        </div>
                    </div>
                    <div class="rm-depleted-form">
                        <h4>Finished Goods Created</h4>
                        <hr>
                        <form id="rmDepletedForm">
                            <label for="FgName">FG Name</label>
                            <select name="fg_name" id="FgName" class="form-select form-select-sm dropdown" required>
                                <option selected hidden value="">Select Fg Name</option>
                                <?php 
                                 foreach ($FgOptions as $option) {
                                    echo "<option value='". $option['fg_name'] ."' data-description='". $option['fg_desc'] ."' data-unit='". $option['fg_unit'] ."'>". $option['fg_name'] ."</option>";
                                 }
                                ?>
                            </select>

                            <label for="FgDesc">FG Description</label>
                            <input name="fg_desc" id="FgDesc" placeholder="Description" title="Finished Goods Description" class="form-control form-control-sm" type="text" value="" readonly required>
                            <script>
                                $('#FgName').on('change', function() {
                                    var selectedFgName = $(this).find(':selected');
                                    var selectedFgDesc = selectedFgName.data('description');
                                    $('#FgDesc').val(selectedFgDesc)
                                })
                            </script>

                            <label for="recRmBin">FG Storage Bin</label>
                            <input name="fg_bin" id="FgBin" placeholder="Enter Finished Goods Bin" pattern="[a-zA-Z0-9 ]*" title="Avoid unecessary special characters" maxlength="15" class="form-control form-control-sm" type="text" required>

                            <label for="fgQuantity">FG Quantity (PCS)</label>
                            <input name="fg_quantity" id="fgQuantity" placeholder="Enter Finished Goods Quantity" pattern="[a-zA-Z0-9 ]*" title="Avoid unecessary special characters" min="1" max="100000" class="form-control form-control-sm" type="number" required>

                            <label for="scrapQuantity">Production Scrap (KG)</label>
                            <input name="quantity_scrap" id="scrapQuantity" placeholder="Enter Scrap (KG)" pattern="[a-zA-Z0-9 ]*" title="Avoid unecessary special characters" min="0" max="100000" class="form-control form-control-sm" type="number" required>
                    </div>
                </div>
            </div>
            <div class="modal-footer">
                            <input type="hidden" name="item_name" id="ditemName" value="">
                            <input type="hidden" name="item_desc" id="ditemDesc" value="">
                            <input type="hidden" name="item_id" id="ditemId" value="">
                            <input type="hidden" name="item_lot" id="ditemLot" value="">
                            <input type="hidden" name="item_bin" id="ditemBin" value="">
                            <input type="hidden" name="item_quantity" id="ditemQuantity" value="">
                            <button type="submit" class="btn btn-danger"><i class="fa-solid fa-xmark"></i> Mark as Depleted</button>
                        </form>
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            </div>
        </div>
    </div>
</div>

<!-- ==>Remove -->
<div class="modal" id="rmRemoveModal" data-bs-keyboard="false" tabindex="-1" aria-labelledby="rmRemoveModal" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
            <div class="modal-header">
                <h1 class="modal-title fs-5" id="rmRemoveModal">Raw Material Info</h1>
                <i class="fa-solid fa-database"></i>
            </div>
            <div class="modal-body">
                <div class="rm-info-container">
                    <div class="rm-info-header">
                        <div class="info-header-container">
                            <h1 id="itemInfoName"></h1>
                        </div>
                        <div class="info-header-container">
                            <h5>Date Depleted</h5>
                            <p id="itemInfoDate"></p>
                        </div>
                    </div>
                    <hr>
                    <div class="info-container">
                        <div>
                            <h5>Description</h5>
                            <p id="itemInfoDesc"></p>
                        </div>
                        <div>
                            <h5>Id</h5>
                            <p id="itemInfoId"></p>
                        </div>
                        <div>
                            <h5>Lot</h5>
                            <p id="itemInfoLot"></p>
                        </div>
                        <div>
                            <h5>Storage Bin</h5>
                            <p id="itemInfoBin"></p>
                        </div>
                    </div>
                    <hr>
                    <div class="info-container">
                        <div>
                            <h5>Fg Created</h5>
                            <p id="itemInfoFgName"></p>
                        </div>
                        <div>
                            <h5>Fg Description</h5>
                            <p id="itemInfoFgDesc"></p>
                        </div>
                        <div>
                            <h5>Fg Quantity</h5>
                            <p id="itemInfoQuantityFg"></p>
                        </div>
                    </div>
                    <hr>
                    <div class="info-quantity-container">
                        <div>
                            <h5>Quantity Scrap</h5>
                            <p id="itemInfoQuantityScrap"></p>
                        </div>
                        <div>
                            <h5>Quantity Used</h5>
                            <p id="itemInfoQuantityUsed"></p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="modal-footer">
                <form id="rmRemoveForm">
                    <input type="hidden" name="item_name" id="itemName" value="">
                    <input type="hidden" name="item_id" id="itemId" value="">
                    <button type="submit" class="btn btn-danger"><i class="fa-solid fa-trash"></i> Remove From the List</button>
                </form>
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            </div>
        </div>
    </div>
</div>


<!-- Adjust Quantity -->
<div class="modal" id="rmAdjReceivedModal" data-bs-keyboard="false" tabindex="-1" aria-labelledby="rmAdjReceivedModal" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
            <div class="modal-header">
                <h1 class="modal-title fs-5" id="rmAdjReceivedModal">Adjust Quantity</h1>
                <i class="fa-solid fa-pen-to-square"></i>
            </div>
            <div class="modal-body">
                <div class="rm-info-container">
                    <div class="rm-info-header">
                        <div class="info-header-container">
                            <h1 id="itemInfoName"></h1>
                            <h3 id="itemInfoQuantity"></h3>
                        </div>
                        <div class="info-header-container">
                            <h5>Date Received</h5>
                            <p id="itemInfoDate"></p>
                            <h5>Id</h5>
                            <p id="itemInfoId"></p>
                        </div>
                    </div>
                    <hr>
                    <div>
                    <form id="rmAdjustmentForm">
                        <label for="adjQuantityReceive">Enter New Quantity</label>
                        <input name="adj_quantity_receive" id="adjQuantityReceive" placeholder="New Quantity (KG)" pattern="[a-zA-Z0-9 ]*" title="Avoid unecessary special characters" min="1" max="100000" class="form-control form-control-sm" type="number" required>
                    </div>
                </div>
            </div>
            <div class="modal-footer">
                    <input type="hidden" name="item_name" id="itemNameAdj" value="">
                    <input type="hidden" name="item_id" id="itemIdAdj" value="">
                    <input type="hidden" name="quantity_receive" id="quantityReceive" value="">
                    <button type="submit" class="btn btn-info"><i class="fa-solid fa-pen-to-square"></i> Adjust Quantity</button>
                </form>
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            </div>
        </div>
    </div>
</div>

<!-- Undo Received -->
<div class="modal" id="undoReceivedModal" data-bs-keyboard="false" tabindex="-1" aria-labelledby="undoReceivedModal" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
            <div class="modal-header">
                <h1 class="modal-title fs-5" id="undoReceivedModal">Undo Last Received Raw Material</h1>
                <i class="fa-solid fa-rotate-left"></i>
            </div>
            <div class="modal-body">
                <div class="rm-info-container">
                    <div class="rm-info-header">
                        <div class="info-header-container">
                            <h1 id="undoReceivedInfoName"></h1>
                            <h4 id="undoReceivedInfoId"></h4>
                        </div>
                        <div class="info-header-container">
                            <h5>Date Received</h5>
                            <p id="undoRecievedInfoDate"></p>
                            <h5>Time Received</h5>
                            <p id="undoReceivedInfoTime"></p>
                        </div>
                    </div>
                    <hr>
                    <div class="info-container">
                        <div>
                            <h5>Received By</h5>
                            <p id="undoReceivedInfoUser"></p>
                        </div>
                    </div>
                    <h6><i class="fa-solid fa-triangle-exclamation"></i> This Raw Material will be Removed from the Inventory if you Undo your Last Received</h6>
                </div>
            </div>
            <div class="modal-footer">
                <form id="undoReceivedForm">
                    <input type="hidden" name="action_date" id="undoReceivedDate" value="">
                    <input type="hidden" name="action_time" id="undoReceivedTime" value="">
                    <input type="hidden" name="item_name" id="undoReceivedName" value="">
                    <input type="hidden" name="action_by" id="undoReceivedUser" value="">
                    <input type="hidden" name="item_id" id="undoReceivedId" value="">
                    <button type="submit" class="btn btn-danger"><i class="fa-solid fa-triangle-exclamation"></i> Undo Last Received Raw Material</button>
                </form>
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            </div>
        </div>
    </div>
</div>

<!-- Undo In Production -->
<div class="modal" id="undoInProductionModal" data-bs-keyboard="false" tabindex="-1" aria-labelledby="undoInProductionModal" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
            <div class="modal-header">
                <h1 class="modal-title fs-5" id="undoInProductionModal">Undo Last In Production Raw Material</h1>
                <i class="fa-solid fa-rotate-left"></i>
            </div>
            <div class="modal-body">
                <div class="rm-info-container">
                    <div class="rm-info-header">
                        <div class="info-header-container">
                            <h1 id="undoInProductionInfoName"></h1>
                            <h4 id="undoInProductionInfoId"></h4>
                        </div>
                        <div class="info-header-container">
                            <h5>Date In</h5>
                            <p id="undoInProductionInfoDate"></p>
                            <h5>Time In</h5>
                            <p id="undoInProductionInfoTime"></p>
                        </div>
                    </div>
                    <hr>
                    <div class="info-container">
                        <div>
                            <h5>In Production By</h5>
                            <p id="undoInProductionInfoUser"></p>
                        </div>
                    </div>
                    <h6><i class="fa-solid fa-triangle-exclamation"></i> This Raw Material will be Returned to Received if you Undo your Last In Production</h6>
                </div>
            </div>
            <div class="modal-footer">
                <form id="undoInProductionForm">
                    <input type="hidden" name="action_date" id="undoInProductionDate" value="">
                    <input type="hidden" name="action_time" id="undoInProductionTime" value="">
                    <input type="hidden" name="item_name" id="undoInProductionName" value="">
                    <input type="hidden" name="action_by" id="undoInProductionUser" value="">
                    <input type="hidden" name="item_id" id="undoInProductionId" value="">
                    <button type="submit" class="btn btn-danger"><i class="fa-solid fa-triangle-exclamation"></i> Undo Last In Production Raw Material</button>
                </form>
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            </div>
        </div>
    </div>
</div>

<!-- Undo Depleted -->
<div class="modal" id="undoDepletedModal" data-bs-keyboard="false" tabindex="-1" aria-labelledby="undoDepletedModal" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
            <div class="modal-header">
                <h1 class="modal-title fs-5" id="undoDepletedModal">Undo Last Marked as Depleted Raw Material</h1>
                <i class="fa-solid fa-database"></i>
            </div>
            <div class="modal-body">
                <div class="rm-info-container">
                    <div class="rm-info-header">
                        <div class="info-header-container">
                            <h1 id="undoDepletedInfoName"></h1>
                            <h4 id="undoDepletedInfoId"></h4>
                        </div>
                        <div class="info-header-container">
                            <h5>Date Depleted</h5>
                            <p id="undoDepletedInfoDate"></p>
                            <h5>Time Depleted</h5>
                            <p id="undoDepletedInfoTime"></p>
                        </div>
                    </div>
                    <hr>
                    <div class="info-container">
                        <div>
                            <h5>In Production By</h5>
                            <p id="undoDepletedInfoUser"></p>
                        </div>
                    </div>
                    <h6><i class="fa-solid fa-triangle-exclamation"></i> This Raw Material will be Returned Back to Production if you Undo your Last Marked as Depleted</h6>
                </div>
            </div>
            <div class="modal-footer">
                <form id="undoDepletedForm">
                    <input type="hidden" name="action_date" id="undoDepletedDate" value="">
                    <input type="hidden" name="action_time" id="undoDepletedTime" value="">
                    <input type="hidden" name="item_name" id="undoDepletedName" value="">
                    <input type="hidden" name="action_by" id="undoDepletedUser" value="">
                    <input type="hidden" name="item_id" id="undoDepletedId" value="">
                    <button type="submit" class="btn btn-danger"><i class="fa-solid fa-triangle-exclamation"></i> Undo Last Marked as Depleted Raw Material</button>
                </form>
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            </div>
        </div>
    </div>
</div>
</html>