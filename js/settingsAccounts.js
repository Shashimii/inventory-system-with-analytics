$(function() {
    function accountsTable() {
        $('#accountTable').empty(); // remove any existing table rows
        var tableStructure = `
        <div class="rm-manage-md-card">
            <div class="rm-manage-md-card-row">
                <div class="rm-manage-md-card-item">
                    <h4><i class="fa-solid fa-users"></i> Accounts</h4>
                </div>
                <div class="rm-manage-md-card-btn-searchbar">
                    <input id="recSearch" placeholder="Search..." class="form-control form-control-sm" type="text">
                </div>
            </div>
            <div class="table-body">
                <table class="table table-striped table-responsive table-hover" id="accountTable">
                    <thead>
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Password</th>
                            <th scope="col">Account Type</th>
                        </tr>
                    </thead>
                    <tbody>

                    </tbody>
                </table>
            </div>
            <div class="table-footer">
                <div class="pagination-container">
                    <ul class="pagination" id="accountPagination">

                    </ul>
                </div>
            </div>
        </div>
        `;

        $('#accountTable').append(tableStructure);
    }

    accountsTable()
});