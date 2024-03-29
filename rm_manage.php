<!DOCTYPE html>
<html lang="en">
<head>
    <link rel="stylesheet" href="node_modules/bootstrap/dist/css/bootstrap.min.css">
    <script src="node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"></script>
    <link rel="stylesheet" href="style.css">
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Manage Inventory | Hiltac</title>
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
        <div class="item-display">
            <div class="item-display-header">
                <div class="item-display-header-info">
                    <h3>Manage Raw Materials</h3>   
                </div>
                <div class="item-display-header-buttons">
                    <button class="btn btn-success btn-sm" data-bs-toggle="modal" data-bs-target="#ReceiveItemModal">Receive Raw Materials</button> <!--Receive Modal Start-->
                    <div class="modal fade" id="ReceiveItemModal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="ReceiveItemModal" aria-hidden="true">
                        <div class="modal-dialog modal-dialog-centered modal-xl">
                          <div class="modal-content">
                            <div class="modal-header">
                              <h1 class="modal-title fs-5" id="ReceiveItemModal">Receive Raw Materials</h1>
                              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <div class="receive-item-form">
                                    <form method="POST" action="rmADD.php">
                                        <div class="form-grid-custom">
                                            <div class="from-input">
                                                <label for="ItemId">Raw Material Id</label>
                                                <input class="form-control" type="text" name="itemId" id="ItemId" placeholder="Enter Raw Material Id" aria-label="Enter Raw Material Id" pattern="[A-Za-z0-9\-]{3,20}" title="Please enter only letters between 3 and 20 characters" required>
                                            </div>
                                            <div class="from-input">
                                                <label for="ItemName">Raw Material Name</label>
                                                <input class="form-control" type="text" name="itemName" id="ItemName" placeholder="Enter Raw Material Name" aria-label="Enter Raw Material Name" pattern="[A-Za-z0-9\-]{3,20}" title="Please enter only letters between 3 and 20 characters" required>
                                            </div>
                                            <div class="from-input">
                                                <label for="ItemType">Raw Material Type</label>
                                                <input class="form-control" type="text" name="itemType"  id="ItemType" placeholder="Enter Raw Material Type" aria-label="Enter Raw Material Type" pattern="[A-Za-z0-9\-]{3,20}" title="Please enter only letters between 3 and 20 characters" required>
                                            </div>
                                            <div class="from-input">
                                                <label for="ItemBin">Storage Bin</label>
                                                <input class="form-control" type="text" name="itemBin" id="ItemBin" placeholder="Enter Storage Bin" aria-label="Enter Storage Bin" pattern="[A-Za-z0-9\-]{3,20}" title="Please enter only letters between 3 and 20 characters" required>
                                            </div>
                                            <div class="from-input">
                                                <label for="ItemReceiveQuantity">Reciving Quantity</label>
                                                <input class="form-control" type="number" name="itemReceiveQuantity" id="ItemReceiveQuantity" placeholder="Enter Receiving Quantity" aria-label="Enter Receiving Quantity" pattern="[0-9\-]" title="Please enter the correct quantity" min="1" max="3000" required>
                                            </div>
                                        </div>
                                </div>
                            </div>
                            <div class="modal-footer">
                              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close Window</button>
                              <button type="submit" class="btn btn-primary">Receive Raw Materials</button>
                                    </form> <!--form extended-->
                            </div>
                          </div>
                        </div>
                    </div> <!--Receive Modal End-->
                </div>
            </div>
            <div class="item-manage-body">
                <div class="item-manage-body-row1">
                    <div class="manage-container">
                        <h3>Received</h3>
                    </div>
                    <div class="manage-container">
                        <h3>In Production</h3>
                    </div>
                    <div class="manage-container">
                        <h3>Used Log</h3>
                    </div>
                </div>
                <div class="item-manage-body-row2">
                    <div class="manage-container">
                        <h3>Adjustment Log</h3>
                    </div>
                </div>
            </div>
            <div class="item-display-footer">

            </div>
        </div>
    </div>
</body>
</html>
