$(function(){
    function pRecTableStructure() {
        $('#renderpTable').empty();
        var tableStructure = `
        <div class="rm-manage-md-card">
            <div class="rm-manage-md-card-row">
                <div class="rm-manage-md-card-item">
                    <h4>Products Stocks</h4>
                </div>
                <div class="rm-manage-md-card-btn-searchbar">
                <select id="searchFilter" class="form-select form-select-sm dropdown" required>
                    <option selected value="">Id Lot Bin</option>
                    <option value="date">Date Created</option>
                    <option value="staff">Staff</option>
                    <option value="name">Product Name</option>
                    <option value="desc">Description</option>
                </select>
                    <input id="search" placeholder="Search..." class="form-control form-control-sm" type="text">
                </div>
            </div>
            <div class="table-body">
                <table class="table table-striped table-responsive table-hover" id="receiveTable">
                    <thead>
                        <tr>
                            <th scope="col">Date Created</th>
                            <th scope="col">Staff</th>
                            <th class="table-primary" scope="col">Product</th>
                            <th scope="col">Description</th>
                            <th class="table-primary" scope="col">Product Id</th>
                            <th scope="col">Lot</th>
                            <th scope="col">Bin</th>
                            <th class="table-info" scope="col">Small Box</th>
                            <th class="table-warning" scope="col">Medium Box</th>
                            <th class="table-danger" scope="col">Large Box</th>
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
                    <h4>Transaction History</h4>
                </div>
                <div class="rm-manage-md-card-btn-searchbar">
                <select id="searchFilter" class="form-select form-select-sm dropdown" required>
                    <option selected value="">Id Lot Bin</option>
                    <option value="date">Date Created</option>
                    <option value="time">Time Created</option>
                    <option value="name">Product Name</option>
                    <option value="desc">Product Description</option>
                    <option value="id">Product Id</option>
                    <option value="lot">Product Lot</option>
                    <option value="bin">Product Bin</option>
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
                            <th scope="col">Product</th>
                            <th scope="col">Description</th>
                            <th scope="col">Product Id</th>
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
    pHistoryTableStructure();
});