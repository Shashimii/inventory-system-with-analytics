$(function(){
    function fgRecTableStructure() {
        $('#renderfgTable').empty();
        var tableStructure = `
        <div class="rm-manage-md-card">
            <div class="rm-manage-md-card-row">
                <div class="rm-manage-md-card-item">
                    <h4><i class="fa-solid fa-toilet-paper"></i> Finished Goods Inventory</h4>
                </div>
                <div class="rm-manage-md-card-btn-searchbar">
                <select id="searchFilter" class="form-select form-select-sm dropdown" required>
                    <option selected value="">No Filter</option>
                    <option value="date">Date Created</option>
                    <option value="id">Raw Material Id</option>
                    <option value="name">Name</option>
                    <option value="desc">Description</option>
                    <option value="lot">Lot</option>
                    <option value="bin">Bin</option>
                    <option value="quantityPcs">Quantity</option>
                </select>
                    <input id="search" placeholder="Search..." class="form-control form-control-sm" type="text">
                </div>
            </div>
            <div class="table-body">
                <table class="table table-striped table-responsive table-hover" id="receiveTable">
                    <thead>
                        <tr>
                            <th class="table-primary" scope="col">Finished Goods</th>
                            <th class="table-primary" scope="col">Serial Id</th>
                            <th scope="col">Dimensions</th>
                            <th scope="col">Lot</th>
                            <th scope="col">Bin</th>
                            <th scope="col">Date Created</th>
                            <th scope="col">Quantity</th>
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

        $('#renderfgTable').append(tableStructure);
    }
    fgRecTableStructure();


    function fgHistoryTableStructure() {
        $('#renderHistoryTable').empty(); 
        var tableStructure = `
        <div class="rm-manage-md-card">
            <div class="rm-manage-md-card-row">
                <div class="rm-manage-md-card-item">
                    <h4><i class="fa-solid fa-toilet-paper"></i> Finished Goods History</h4>
                </div>
                <div class="rm-manage-md-card-btn-searchbar">
                <select id="searchFilter" class="form-select form-select-sm dropdown" required>
                    <option selected value="">No Filter</option>
                    <option value="date">Date Created</option>
                    <option value="time">Time Created</option>
                    <option value="rawname">Raw Material Name</option>
                    <option value="rawid">Raw Material Id</option>
                    <option value="name">FG Name</option>
                    <option value="desc">FG Description</option>
                    <option value="lot">FG Lot</option>
                    <option value="bin">FG Bin</option>
                </select>
                    <input id="searchBar" placeholder="Search..." class="form-control form-control-sm" type="text">
                </div>
            </div>
            <div class="table-body">
                <table class="table table-striped table-responsive table-hover" id="historyTable">
                    <thead>
                        <tr>
                            <th scope="col">Serial Id</th>
                            <th scope="col">Finished Goods</th>
                            <th scope="col">Dimensions</th>
                            <th scope="col">Lot</th>
                            <th scope="col">Bin</th>
                            <th scope="col">Date Created</th>
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
    fgHistoryTableStructure();

    
    function fgStatusTableStructure() {
        $('#renderStatusTable').empty(); 
        var tableStructure = `
        <div class="rm-manage-md-card">
            <div class="rm-status-md-card-row">
                <div class="rm-row-md-card-item">
                    <h4><i class="fa-solid fa-toilet-paper"></i> Finished Goods Status</h4>
                </div>
                <div class="rm-status-md-card-btn-searchbar">
                    <select id="searchFilter" class="form-select form-select-sm dropdown" required>
                        <option selected value="">No Filter</option>
                        <option value="name">Name</option>
                        <option value="desc">Description</option>
                    </select>
                    <input id="searchBar" placeholder="Search..." class="form-control form-control-sm" type="text">
                </div>
            </div>
            <div class="table-body">
                <table class="table table-striped table-responsive table-hover" id="statusTable">
                    <thead>
                        <tr>
                        <th class="table-primary" scope="col">Finished Goods</th>
                        <th scope="col">Dimensions</th>
                        <th scope="col">In Stock</th>
                        <th scope="col">Packed Small</th>
                        <th scope="col">Packed Medium</th>
                        <th scope="col">Packed Large</th>
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

    fgStatusTableStructure()
});