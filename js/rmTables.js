$(function(){
    function rmRecTableStructure() {
        $('#renderRmTable').empty(); // remove any existing table rows
        var tableStructure = `
        <div class="rm-manage-md-card">
            <div class="rm-manage-md-card-row">
                <div class="rm-manage-md-card-item">
                    <h4><i class="fa-solid fa-database"></i> Raw Material Inventory</h4>
                </div>
                <div class="rm-manage-md-card-btn-searchbar">
                <select id="recSearchFilter" class="form-select form-select-sm dropdown" required>
                    <option selected value="">id lot bin</option>
                    <option value="date">Date Received</option>
                    <option value="desc">Dimensions</option>
                    <option value="id">Id</option>
                    <option value="lot">Lot</option>
                    <option value="bin">Bin</option>
                    <option value="quantity">Quantity</option>
                </select>
                    <input id="recSearch" placeholder="Search..." class="form-control form-control-sm" type="text">
                    <button class="btn btn-success btn-sm" data-bs-toggle="modal"
                        data-bs-target="#receiveModal"><i class="fa-solid fa-hands-holding-circle"></i>
                        Receive
                    </button>
                    <!---<button id="undoReceive" class="btn btn-secondary btn-sm" data-bs-toggle="modal"
                    data-bs-target="#undoReceivedModal"><i class="fa-solid fa-rotate-left"></i>
                        Undo
                    </button>--->
                </div>
            </div>
            <div class="table-body">
                <table class="table table-striped table-responsive table-hover" id="receiveTable">
                    <thead>
                        <tr>
                            <th scope="col">Date Received</th>
                            <th scope="col">Dimensions</th>
                            <th class="table-primary" scope="col">Id</th>
                            <th scope="col">Lot</th>
                            <th scope="col">Bin</th>
                            <th class="table-success" scope="col">Quantity</th>
                            <th scope="col" class="action-btn">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <!--- rmFetchReceived.js --->
                    </tbody>
                </table>
            </div>
            <div class="table-footer">
                <div class="pagination-container">
                    <ul class="pagination" id="receivedTablePagination">
                        <!--- rmFetchReceived.js --->
                    </ul>
                </div>
            </div>
        </div>
        `;

        $('#renderRmTable').append(tableStructure);
    }

    function rmInProTableStructure() {
        $('#renderRmTable').empty(); 
        var tableStructure = `
        <div class="rm-manage-md-card">
            <div class="rm-manage-md-card-row">
                <div class="rm-manage-md-card-item">
                    <h4><i class="fa-solid fa-spinner"></i> Raw Material Production</h4>
                </div>
                <div class="rm-manage-md-card-btn-searchbar">
                <select id="recSearchFilter" class="form-select form-select-sm dropdown" required>
                    <option selected value="">id lot bin</option>
                    <option value="date">Date In</option>
                    <option value="desc">Dimensions</option>
                    <option value="id">Id</option>
                    <option value="lot">Lot</option>
                    <option value="bin">Bin</option>
                    <option value="quantity">Quantity</option>
                </select>
                    <input id="recSearch" placeholder="Search..." class="form-control form-control-sm" type="text">
                    <!---<button id="undoInProduction" class="btn btn-secondary btn-sm" data-bs-toggle="modal"
                    data-bs-target="#undoInProductionModal"><i class="fa-solid fa-rotate-left"></i>
                        Undo
                    </button>--->
                </div>
            </div>
            <div class="table-body">
                <table class="table table-striped table-responsive table-hover" id="inProductionTable">
                    <thead>
                        <tr>
                            <th scope="col">Date In</th>
                            <th scope="col">Dimensions</th>
                            <th class="table-primary" scope="col">Id</th>
                            <th scope="col">Lot</th>
                            <th scope="col">Bin</th>
                            <th class="table-warning" scope="col">Quantity</th>
                            <th scope="col" class="action-btn">Action</th>
                        </tr>
                    </thead>
                    <tbody>

                    </tbody>
                </table>
            </div>
            <div class="table-footer">
                <div class="pagination-container">
                    <ul class="pagination" id="inProductionTablePagination">

                    </ul>
                </div>
            </div>
        </div>
        `;

        $('#renderRmTable').append(tableStructure);
    }

    function rmDepletedTableStructure() {
        $('#renderRmTable').empty(); 
        var tableStructure = `
        <div class="rm-manage-md-card">
            <div class="rm-manage-md-card-row">
                <div class="rm-manage-md-card-item">
                    <h4><i class="fa-regular fa-square-full"></i> Used Raw Material List</h4>
                </div>
                <div class="rm-manage-md-card-btn-searchbar">
                <select id="recSearchFilter" class="form-select form-select-sm dropdown" required>
                    <option selected value="">id lot bin</option>
                    <option value="date">Date In</option>
                    <option value="desc">Dimensions</option>
                    <option value="id">Id</option>
                    <option value="lot">Lot</option>
                    <option value="bin">Bin</option>
                    <option value="quantityScrap">Quantity Scrap</option>
                    <option value="quantityUsed">Quantity Used</option>
                </select>
                    <input id="recSearch" placeholder="Search..." class="form-control form-control-sm" type="text">
                    <!----<button id="undoDepleted" class="btn btn-secondary btn-sm" data-bs-toggle="modal"
                    data-bs-target="#undoDepletedModal"><i class="fa-solid fa-rotate-left"></i>
                        Undo
                    </button>--->
                </div>
            </div>
            <div class="table-body">
                <table class="table table-striped table-responsive table-hover" id="depletedTable">
                    <thead>
                        <tr>
                            <th scope="col">Date Depleted</th>
                            <th scope="col">Dimensions</th>
                            <th class="table-primary" scope="col">Id</th>
                            <th scope="col">Lot</th>
                            <th scope="col">Bin</th>
                            <th class="table-warning" scope="col">Quantity Scrap</th>
                            <th class="table-danger" scope="col">Quantity Used</th>
                            <th scope="col" class="action-btn">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        
                    </tbody>
                </table>
            </div>
            <div class="table-footer">
                <div class="pagination-container">
                    <ul class="pagination" id="depletedTablePagination">

                    </ul>
                </div>
            </div>
        </div>
        `;

        $('#renderRmTable').append(tableStructure);
    }

    function rmHistoryTableStructure() {
        $('#renderHistoryTable').empty(); 
        var tableStructure = `
        <div class="rm-manage-md-card">
            <div class="rm-manage-md-card-row">
                <div class="rm-manage-md-card-item">
                    <h4><i class="fa-solid fa-database"></i> Raw Material History</h4>
                </div>
                <div class="rm-manage-md-card-btn-searchbar">
                <select id="searchFilter" class="form-select form-select-sm dropdown" required>
                    <option selected value="">Id Lot Bin</option>
                    <option value="date">Date Received</option>
                    <option value="time">Time Received</option>
                    <option value="desc">Dimensions</option>
                </select>
                    <input id="searchBar" placeholder="Search..." class="form-control form-control-sm" type="text">
                </div>
            </div>
            <div class="table-body">
                <table class="table table-striped table-responsive table-hover" id="historyTable">
                    <thead>
                        <tr>
                            <th scope="col">Date Received</th>
                            <th scope="col">Time Received</th>
                            <th scope="col">Dimensions</th>
                            <th scope="col">Id</th>
                            <th scope="col">Lot</th>
                            <th scope="col">Bin</th>
                            <th scope="col" class="action-btn">Action</th>
                        </tr>
                    </thead>
                    <tbody>

                    </tbody>
                </table>
            </div>
            <div class="table-footer">
                <div class="pagination-container">
                    <ul class="pagination" id="historyTablePagination">

                    </ul>
                </div>
            </div>
        </div>
        `;

        $('#renderHistoryTable').append(tableStructure);
    }

    function rmStatusTableStructure() {
        $('#renderStatusTable').empty(); 
        var tableStructure = `
        <div class="rm-manage-md-card">
            <div class="rm-status-md-card-row">
                <div class="rm-row-md-card-item">
                    <h4><i class="fa-solid fa-database"></i> Raw Material Status</h4>
                </div>
                <div class="rm-status-md-card-btn-searchbar">
                    <select id="searchFilter" class="form-select form-select-sm dropdown" required>
                        <option selected value="">No Filter</option>
                        <option value="desc">Dimensions</option>
                    </select>
                    <input id="searchBar" placeholder="Search..." class="form-control form-control-sm" type="text">
                </div>
            </div>
            <div class="table-body">
                <table class="table table-striped table-responsive table-hover" id="statusTable">
                    <thead>
                        <tr>
                        <th scope="col">Dimensions</th>
                        <th class="table-success" scope="col">In Stock</th>
                        <th class="table-warning" scope="col">In Production</th>
                        <th class="table-secondary" scope="col">Scrap</th>
                        <th class="table-danger" scope="col">Used</th>
                        <th class="table-info" scope="col">FG</th>
                        <th>Stock Level</th>
                        </tr>
                    </thead>
                    <tbody>

                    </tbody>
                </table>
            </div>
            <div class="table-footer">
                <div class="pagination-container">
                    <ul class="pagination" id="statusTablePagination">

                    </ul>
                </div>
            </div>
        </div>
        `;

        $('#renderStatusTable').append(tableStructure);
    }

    rmRecTableStructure(); // recieve table default displayed
    rmHistoryTableStructure(); // history table display
    rmStatusTableStructure() // status table display


    // switch displays between tables
    $(document).on('click', '#renderReceive', function(){
        rmRecTableStructure();
    })

    $(document).on('click', '#renderInProduction', function(){
        rmInProTableStructure();
    })

    $(document).on('click', '#renderUsed', function(){
        rmDepletedTableStructure();
    })
})

