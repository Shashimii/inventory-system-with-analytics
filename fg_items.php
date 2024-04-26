<?php 

include 'connections.php';

$nameQuery = "SELECT * FROM products_registered";
$result = $con->query($nameQuery);
while ($optionProduct = $result->fetch_assoc()) {
    $productOptions[] = array('product_name' => $optionProduct['product_name'], 'product_desc' => $optionProduct['product_desc']);
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
                                        <li><a class="dropdown-item" href="rm_history">History</a></li>
                                    </ul>
                                </li>
                                <li class="nav-item dropdown">
                                    <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Finished Goods</a>
                                    <ul class="dropdown-menu">
                                        <li><a class="dropdown-item active" href="fg_items">Manage</a></li>
                                        <li><a class="dropdown-item" href="fg_status">Status</a></li>
                                        <li><a class="dropdown-item" href="fg_history">History</a></li>
                                    </ul>
                                </li>
                                <li class="nav-item dropdown">
                                    <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Products</a>
                                    <ul class="dropdown-menu">
                                        <li><a class="dropdown-item" href="p_stocks">Manage</a></li>
                                        <li><a class="dropdown-item" href="p_status">Status</a></li>
                                        <li><a class="dropdown-item" href="p_history">History</a></li>
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
                                    <button id="selectModal" data-bs-toggle="modal" data-bs-target="#fgPackModal" class="btn btn-sm btn-success" disabled>Pack Finished Goods</button>
                                </div>
                                <div class="d-grid gap-2">
                                    <button id="clearSelected" class="btn btn-sm btn-secondary" disabled>Clear Selected</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</body>

<div class="modal" id="fgPackModal" data-bs-keyboard="false" tabindex="-1" aria-labelledby="fgPackModal" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
            <div class="modal-header">
                <h1 class="modal-title fs-5" id="fgPackModal">Pack Finished Goods</h1>
                <i class="fa-solid fa-box"></i>
            </div>
            <div class="modal-body">
                <form id="packForm">
                    <div class="ipt-container">
                        <label for="packName">Product Name</label>
                        <select name="pack_name" id="packName" class="form-select form-select-sm dropdown" required>
                            <option selected hidden value="">Select Product Name</option>
                            <?php 
                                foreach ($productOptions as $option) {
                                echo "<option value='". $option['product_name'] ."' data-description='". $option['product_desc'] ."'>". $option['product_name'] ."</option>";
                                }
                            ?>
                        </select>
                        <label for="packDesc">Product Description</label>
                        <input name="pack_desc" id="packDesc" placeholder="Product Description" title="Product Description" class="form-control form-control-sm" type="text" value="" readonly required>
                            <script>
                                $('#packName').on('change', function() {
                                    var selectedName = $(this).find(':selected');
                                    var selectedDesc = selectedName.data('description');
                                    $('#packDesc').val(selectedDesc)
                                })
                            </script>
                        <label for="packId">Product Id</label>
                        <input name="pack_id" id="packId" placeholder="Enter Product Id" pattern="[a-zA-Z0-9 ]*" title="Avoid unecessary special characters" maxlength="20" class="form-control form-control-sm" type="text" required>
                        <label for="packStorage">Storage Bin</label>
                        <input name="pack_storage" id="packStorage" placeholder="Enter Storage Bin" pattern="[a-zA-Z0-9 ]*" title="Avoid unecessary special characters" maxlength="20" class="form-control form-control-sm" type="text" required>
                    </div>
            </div>
            <div class="modal-footer">
                    <button type="submit" id="packSelected" class="btn btn-success">Pack Finished Goods</button>
                </form>
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            </div>
        </div>
    </div>
</div>
</html>
