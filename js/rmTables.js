$(function(){
    function rmRecTableStructure() {
        $('#renderRmTable').empty(); // remove any existing table rows
        var tableStructure = `
        <div class="rm-manage-md-card">
            <div class="rm-manage-md-card-row">
                <div class="rm-manage-md-card-item">
                    <h4>Received</h4>
                </div>
                <div class="rm-manage-md-card-btn-searchbar">
                <select id="recSearchFilter" class="form-select form-select-sm dropdown" required>
                    <option selected value="">Id Lot Bin</option>
                    <option value="date">Date Received</option>
                    <option value="name">Name</option>
                    <option value="desc">Description</option>
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
                    <button id="undoReceive" class="btn btn-secondary btn-sm" data-bs-toggle="modal"
                    data-bs-target="#undoModal"><i class="fa-solid fa-rotate-left"></i>
                        Undo
                    </button>
                </div>
            </div>
            <div class="table-body">
                <table class="table table-striped table-responsive table-hover" id="receiveTable">
                    <thead>
                        <tr>
                            <th scope="col">Date Received</th>
                            <th scope="col">Raw Material</th>
                            <th scope="col">Description</th>
                            <th scope="col">Id</th>
                            <th scope="col">Lot</th>
                            <th scope="col">Bin</th>
                            <th scope="col">Quantity</th>
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
    rmRecTableStructure(); // recieve table default displayed

    function rmInProTableStructure() {
        $('#renderRmTable').empty(); 
        var tableStructure = `
        <div class="rm-manage-md-card">
            <div class="rm-manage-md-card-row">
                <div class="rm-manage-md-card-item">
                    <h4>In Production</h4>
                </div>
                <div class="rm-manage-md-card-btn-searchbar">
                <select id="recSearchFilter" class="form-select form-select-sm dropdown" required>
                    <option selected value="">Id Lot Bin</option>
                    <option value="date">Date In</option>
                    <option value="name">Name</option>
                    <option value="desc">Description</option>
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
                </div>
            </div>
            <div class="table-body">
                <table class="table table-striped table-responsive table-hover" id="inProductionTable">
                    <thead>
                        <tr>
                            <th scope="col">Date In</th>
                            <th scope="col">Raw Material</th>
                            <th scope="col">Description</th>
                            <th scope="col">Id</th>
                            <th scope="col">Lot</th>
                            <th scope="col">Bin</th>
                            <th scope="col">Quantity</th>
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
                    <h4>Depleted</h4>
                </div>
                <div class="rm-manage-md-card-btn-searchbar">
                <select id="recSearchFilter" class="form-select form-select-sm dropdown" required>
                    <option selected value="">Id Lot Bin</option>
                    <option value="date">Date In</option>
                    <option value="name">Name</option>
                    <option value="desc">Description</option>
                    <option value="id">Id</option>
                    <option value="lot">Lot</option>
                    <option value="bin">Bin</option>
                    <option value="quantityScrap">Quantity Scrap</option>
                    <option value="quantityUsed">Quantity Used</option>
                </select>
                    <input id="recSearch" placeholder="Search..." class="form-control form-control-sm" type="text">
                    <button class="btn btn-success btn-sm" data-bs-toggle="modal"
                        data-bs-target="#receiveModal"><i class="fa-solid fa-hands-holding-circle"></i>
                        Receive
                    </button>
                </div>
            </div>
            <div class="table-body">
                <table class="table table-striped table-responsive table-hover" id="depletedTable">
                    <thead>
                        <tr>
                            <th scope="col">Date In</th>
                            <th scope="col">Raw Material</th>
                            <th scope="col">Description</th>
                            <th scope="col">Id</th>
                            <th scope="col">Lot</th>
                            <th scope="col">Bin</th>
                            <th scope="col">Quantity Scrap</th>
                            <th scope="col">Quantity Used</th>
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

