$(function(){
    function fgRecTableStructure() {
        $('#renderfgTable').empty();
        var tableStructure = `
        <div class="rm-manage-md-card">
            <div class="rm-manage-md-card-row">
                <div class="rm-manage-md-card-item">
                    <h4>Finished Goods</h4>
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
                            <th scope="col">Date Created</th>
                            <th scope="col">RawMat</th>
                            <th class="table-warning" scope="col">RawMat Id</th>
                            <th class="table-primary" scope="col">Finished Goods</th>
                            <th scope="col">Description</th>
                            <th scope="col">Lot</th>
                            <th scope="col">Bin</th>
                            <th class="table-success" scope="col">Quantity (PCS)</th>
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
                    <h4>Transaction History</h4>
                </div>
                <div class="rm-manage-md-card-btn-searchbar">
                <select id="searchFilter" class="form-select form-select-sm dropdown" required>
                    <option selected value="">Id Lot Bin</option>
                    <option value="date">Date Created</option>
                    <option value="time">Time Created</option>
                    <option value="name">FG Name</option>
                    <option value="desc">FG Description</option>
                </select>
                    <input id="searchBar" placeholder="Search..." class="form-control form-control-sm" type="text">
                </div>
            </div>
            <div class="table-body">
                <table class="table table-striped table-responsive table-hover" id="historyTable">
                    <thead>
                        <tr>
                            <th scope="col">Date Created</th>
                            <th scope="col">Time Created</th>
                            <th scope="col">Raw Material Name</th>
                            <th scope="col">Raw Material Id</th>
                            <th scope="col">Finished Goods</th>
                            <th scope="col">Description</th>
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
    fgHistoryTableStructure();
});