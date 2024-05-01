$(function() {
    $('#addAccountForm').on('submit', function(event) {
        event.preventDefault();

        var inputData = $(this).serialize();
        console.log(inputData);

        $.ajax({
            type: 'POST',
            url: './php/settings_account_add.php',
            data: inputData,
            success: function(response) {
                console.log(response)
                if (response === '0') {
                    Swal.fire({
                        title: 'Account Added',
                        text: 'Account can be now used for Login',
                        icon: 'success',
                    }).then(function() {
                        location.reload();
                    })
                } else if (response === '1') {
                    Swal.fire({
                        title: 'Oops',
                        text: 'Already Added',
                        icon: 'error',
                    }).then(function() {
                        location.reload();
                    })
                } else {
                    console.log('Hello? Something Went Wrong on Submitting this data')
                }
            },
            error: function(xhr, status, error) {
                console.error(xhr.responseText); 
            }
        })
    })

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