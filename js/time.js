function syncTime() {
    $.ajax({
        url: './php/realTime.php',
        type: 'GET',
        success: function(response) {
            var curTime = response.trim();
            $('#sysTime').text(curTime)
        },

        error: function(xhr, status, error) {
            console.error('time script error: ', error)
        }
    })
}

syncTime();
setInterval(syncTime, 10000)

$(function() {
    function loadAccountType() {
        $.ajax({
            url: './php/check_account_type.php',
            type: 'GET',
            success: function(response) {
                var accType = response;
                
                if (accType === 'manager') {
                    $('#accSetHide').addClass('d-none');
                    
                    var hiddenReplacement =`
                    <div class="container">
                        <div class="row justify-content-center">
                            <div class="col-md-8">
                                <div class="card border-danger">
                                    <div class="card-body text-center">
                                        <h1 class="card-title">Account Settings is only Available on Admin Accounts</h1>
                                        <button id="logout" class="btn btn-danger btn-sm w-100" onclick="window.location.href = 'logout.php'">Logout</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    `;
                    $('#accSetHidden').append(hiddenReplacement);
                }

                if (accType === 'checker') {

                    $('#pManageWrapper').addClass('d-none');

                    var hiddenReplacement =`
                    <div class="container">
                        <div class="row justify-content-center">
                            <div class="col-md-8">
                                <div class="card border-danger">
                                    <div class="card-body text-center">
                                        <h1 class="card-title">Products Managing is only Available on Manager or Admin Accounts</h1>
                                        <button id="logout" class="btn btn-danger btn-sm w-100" onclick="window.location.href = 'logout.php'">Logout</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    `;
                    $('#pManageHidden').append(hiddenReplacement);
                    

                    
                    $('#fgManageWrapper').addClass('d-none');

                    var hiddenReplacement =`
                    <div class="container">
                        <div class="row justify-content-center">
                            <div class="col-md-8">
                                <div class="card border-danger">
                                    <div class="card-body text-center">
                                        <h1 class="card-title">Finished Goods Managing is only Available on Manager or Admin Accounts</h1>
                                        <button id="logout" class="btn btn-danger btn-sm w-100" onclick="window.location.href = 'logout.php'">Logout</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    `;
                    $('#fgManageHidden').append(hiddenReplacement);



                    $('#rmManageWrapper').addClass('d-none');

                    var hiddenReplacement =`
                    <div class="container">
                        <div class="row justify-content-center">
                            <div class="col-md-8">
                                <div class="card border-danger">
                                    <div class="card-body text-center">
                                        <h1 class="card-title">Raw Material Managing is only Available on Manager or Admin Accounts</h1>
                                        <button id="logout" class="btn btn-danger btn-sm w-100" onclick="window.location.href = 'logout.php'">Logout</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    `;
                    $('#rmManageHidden').append(hiddenReplacement);


                    
                    $('#itemSetHide').addClass('d-none');
                    $('#itemTableSetHide').addClass('d-none');

                    var hiddenReplacement =`
                    <div class="container">
                        <div class="row justify-content-center">
                            <div class="col-md-8">
                                <div class="card border-danger">
                                    <div class="card-body text-center">
                                        <h1 class="card-title">Items Settings is only Available on Admin Accounts</h1>
                                        <button id="logout" class="btn btn-danger btn-sm w-100" onclick="window.location.href = 'logout.php'">Logout</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    `;
                    $('#itemSetHidden').append(hiddenReplacement);



                    $('#accSetHide').addClass('d-none');
                    
                    var hiddenReplacement =`
                    <div class="container">
                        <div class="row justify-content-center">
                            <div class="col-md-8">
                                <div class="card border-danger">
                                    <div class="card-body text-center">
                                        <h1 class="card-title">Account Settings is only Available on Admin Accounts</h1>
                                        <button id="logout" class="btn btn-danger btn-sm w-100" onclick="window.location.href = 'logout.php'">Logout</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    `;
                    $('#accSetHidden').append(hiddenReplacement);
                }                
            }
        })
    }

    loadAccountType();
});