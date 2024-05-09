$(function(){
    function pRecTableStructure() {
        $('#renderpTable').empty();
        var tableStructure = `
        <div class="rm-manage-md-card">
            <div class="rm-manage-md-card-row">
                <div class="rm-manage-md-card-item">
                    <h4><i class="fa-solid fa-boxes-stacked"></i> Products Stocks</h4>
                </div>
                <div class="rm-manage-md-card-btn-searchbar">
                <select id="searchFilter" class="form-select form-select-sm dropdown" required>
                    <option selected value="">No Filter</option>
                    <option value="id">Serial Id</option>
                    <option value="name">Product</option>
                    <option value="desc">Dimensions</option>
                    <option value="lot">Lot</option>
                    <option value="staff">Staff</option>
                    <option value="date">Date Created</option>
                </select>
                    <input id="search" placeholder="Search..." class="form-control form-control-sm" type="text">
                </div>
            </div>
            <div class="table-body">
                <table class="table table-striped table-responsive table-hover" id="receiveTable">
                    <thead>
                        <tr>
                            <th class="table-primary text-center" scope="col">Product Id</th>
                            <th class="text-center" scope="col">Product</th>
                            <th class="text-center" scope="col">Dimensions</th>
                            <th class="text-center" scope="col">Lot</th>
                            <th class="text-center" scope="col">Bin</th>
                            <th class="text-center" scope="col">In Small Boxes</th>
                            <th class="text-center" scope="col">In Medium Boxes</th>
                            <th class="text-center" scope="col">In Large Boxes</th>
                            <th class="text-center" scope="col">Date Created</th>
                            <th class="text-center" scope="col">Staff</th>
                            <th scope="col">Actions</th>
                        </tr>
                    </thead>
                    <tbody>

                    </tbody>
                </table>
            </div>
            <div class="table-footer">
                <div class="pagination-container">
                    <ul class="pagination" id="receivedTablePagination">

                    </ul>
                </div>
            </div>
        </div>
        `;

        $('#renderpTable').append(tableStructure);
    }
    pRecTableStructure();

    function pHistoryTableStructure() {
        $('#renderHistoryTable').empty(); 
        var tableStructure = `
        <div class="rm-manage-md-card">
            <div class="rm-manage-md-card-row">
                <div class="rm-manage-md-card-item">
                    <h4><i class="fa-solid fa-boxes-stacked"></i> Products History</h4>
                </div>
                <div class="rm-manage-md-card-btn-searchbar">
                <select id="searchFilter" class="form-select form-select-sm dropdown" required>
                    <option selected value="">No Filter</option>
                    <option value="id">Serial Id</option>
                    <option value="name">Product</option>
                    <option value="desc">Dimensions</option>
                    <option value="lot">Lot</option>
                    <option value="bin">Bin</option>
                    <option value="time">Time Created</option>
                    <option value="date">Date Created</option>
                </select>
                    <input id="searchBar" placeholder="Search..." class="form-control form-control-sm" type="text">
                </div>
            </div>
            <div class="table-body">
                <table class="table table-striped table-responsive table-hover" id="historyTable">
                    <thead>
                        <tr>
                            <th class="text-center" scope="col">Product Id</th>
                            <th class="text-center" scope="col">Product</th>
                            <th class="text-center" scope="col">Dimensions</th>
                            <th class="text-center" scope="col">Lot</th>
                            <th class="text-center" scope="col">Bin</th>
                            <th class="text-center" scope="col">Time Created</th>
                            <th class="text-center" scope="col">Date Created</th>
                            <th class="text-center" scope="col" class="action-btn">Action</th>
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
    pHistoryTableStructure();

    function pStatusTableStructure() {
        $('#renderStatusTable').empty(); 
        var tableStructure = `
        <div class="rm-manage-md-card">
            <div class="rm-status-md-card-row">
                <div class="rm-row-md-card-item">
                    <h4><i class="fa-solid fa-boxes-stacked"></i> Products Status</h4>
                </div>
                <div class="rm-status-md-card-btn-searchbar">
                    <select id="searchFilter" class="form-select form-select-sm dropdown" required>
                        <option selected value="">No Filter</option>
                        <option value="name">Name</option>
                        <option value="desc">Dimensions</option>
                    </select>
                    <input id="searchBar" placeholder="Search..." class="form-control form-control-sm" type="text">
                </div>
            </div>
            <div class="table-body">
                <table class="table table-striped table-responsive table-hover" id="statusTable">
                    <thead>
                        <tr>
                        <th class="table-primary text-center" scope="col">Products</th>
                        <th class="text-center" scope="col">Dimensions</th>
                        <th class="text-center" scope="col">In Stock</th>
                        <th class="text-center" scope="col">In Small Boxes</th>
                        <th class="text-center" scope="col">In Medium Boxes</th>
                        <th class="text-center" scope="col">In Large Boxes</th>
                        <th class="text-center" scope="col">Shipped</th>
                        <th class="text-center">Stock Level</th>
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

    pStatusTableStructure()
});