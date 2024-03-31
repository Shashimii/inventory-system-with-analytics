$(function(){
    function rmTableStructure() {
        $('#renderReceiveTable').empty(); // remove any existing table rows
        var tableStructure = `
        <div class="rm-manage-md-card">
            <div class="rm-manage-md-card-row">
                <div class="rm-manage-md-card-item">
                    <h4>Received</h4>
                </div>
                <div class="rm-manage-md-card-btn-searchbar">
                <select id="recSearchFilter" class="form-select form-select-sm dropdown" required>
                    <option selected hidden value="">Filter by...</option>
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
                </div>
            </div>
            <div class="rm-manage-md-card-row">
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
        </div>
        `;

        $('#renderReceiveTable').append(tableStructure);
    }
    rmTableStructure(); //initial table display

    // show received table listener
    $(document).on('click', '#renderReceive', function(){
        rmTableStructure();
    })
})

