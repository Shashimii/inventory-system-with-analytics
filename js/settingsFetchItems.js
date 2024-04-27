$(function() {
    
    function fetchData() {
        var rmPromise = $.ajax({
            url: './php/item_rm_data.php', 
            method: 'GET'
        });
    
        var fgPromise = $.ajax({
            url: './php/item_fg_data.php', 
            method: 'GET'
        });
    
        var pPromise = $.ajax({
            url: './php/item_p_data.php', 
            method: 'GET'
        });

        var cPromise = $.ajax({
            url: './php/item_customer_data.php', 
            method: 'GET'
        });
    
        Promise.all([rmPromise, fgPromise, pPromise, cPromise])
    
        .then(function(responses) {
            var rm = responses[0];
            var fg = responses[1];
            var p = responses[2];
            var c = responses[3];
            renderItemSettingsTables(rm, fg, p, c);
        })
        .catch(function(error) {
            console.error(error);
        });
    }

    function renderItemSettingsTables(rm, fg, p, c) {
        var rmTable = `
        <table class="table table-striped table-bordered">
            <thead class="table-danger">
                <tr>
                    <th scope="col">Raw Material</th>
                    <th scope="col">Description</th>
                    <th scope="col">Action</th>
                </tr>
            </thead>
            <tbody id="rmTableBody">
        `;

        rm.forEach(item => {
            rmTable += `
                <tr>
                    <td>${item.rm_name}</td>
                    <td>${item.rm_description}</td>
                    <td>
                        <button class="btn btn-danger btn-sm rmDelete" data-id="${item.id}" data-name="${item.rm_name}" data-desc="${item.rm_description}">
                            Remove
                        </button>
                    </td>
                </tr>
            `;
        });

        rmTable += `
                </tbody>
            </table>
        `;
        $('#rm').append(rmTable);


        var fgTable = `
        <table class="table table-striped table-bordered">
            <thead class="table-danger">
                <tr>
                    <th scope="col">Finished Goods</th>
                    <th scope="col">Description</th>
                    <th scope="col">Action</th>
                </tr>
            </thead>
            <tbody id="fgTableBody">
        `;

        fg.forEach(item => {
            fgTable += `
                <tr>
                    <td>${item.fg_name}</td>
                    <td>${item.fg_description}</td>
                    <td>
                    <button class="btn btn-danger btn-sm fgDelete" data-id="${item.id}" data-name="${item.fg_name}" data-desc="${item.fg_description}">
                            Remove
                        </button>
                    </td>
                </tr>
            `;
        });

        fgTable += `
                </tbody>
            </table>
        `;
        $('#fg').append(fgTable);


        var pTable = `
        <table class="table table-striped table-bordered">
            <thead class="table-danger">
                <tr>
                    <th scope="col">Products</th>
                    <th scope="col">Description</th>
                    <th scope="col">Action</th>
                </tr>
            </thead>
            <tbody id="fgTableBody">
        `;

        p.forEach(item => {
            pTable += `
                <tr>
                    <td>${item.product_name}</td>
                    <td>${item.product_desc}</td>
                    <td>
                        <button class="btn btn-danger btn-sm pDelete" data-id="${item.id}" data-name="${item.product_name}" data-desc="${item.product_desc}">
                            Remove
                        </button>
                    </td>
                </tr>
            `;
        });

        pTable += `
                </tbody>
            </table>
        `;
        $('#p').append(pTable);


        var cTable = `
        <table class="table table-striped table-bordered">
            <thead class="table-danger">
                <tr>
                    <th scope="col">Company Code</th>
                    <th scope="col">Action</th>
                </tr>
            </thead>
            <tbody id="fgTableBody">
        `;

        c.forEach(item => {
            cTable += `
                <tr>
                    <td>${item.company_code}</td>
                    <td>
                        <button class="btn btn-danger btn-sm cDelete" data-id="${item.id}" data-name="${item.company_code}">
                            Remove
                        </button>
                    </td>
                </tr>
            `;
        });

        cTable += `
                </tbody>
            </table>
        `;
        $('#c').append(cTable);
    }

    fetchData()

    $(document).on('click', '.rmDelete', function() {
        var name = $(this).data('name');
        var desc = $(this).data('desc');
        var deleteId = $(this).data('id');
        $.ajax({
            url: './php/delete_item_rm.php', 
            method: 'POST',
            data: { id: deleteId },
            success: function(response) {
                if (response === '0') {
                    Swal.fire({
                        title: 'Raw Material Deleted',
                        html: '<div style="text-align: center;"><p>Raw Material Info</p><table style="margin: 0 auto; text-align: left;"><tr><td><b>Name:</b></td><td>' + name + '</td></tr><tr><td><b>Description:</b></td><td>' + desc + '</td></tr></table></div>',
                        icon: 'success',
                    }).then(function() {
                        location.reload();
                    })
                } else if (response === '1') {
                    Swal.fire({
                        title: 'Oops',
                        text: 'Something went Wrong',
                        icon: 'error',
                    }).then(function() {
                        location.reload();
                    })
                } else {
                    console.log('Hello? Something Went Wrong on Submitting this data')
                }
            },
            error: function(xhr, status, error) {
                console.error('Error:', error);
            }
        });
    })

    $(document).on('click', '.fgDelete', function() {
        var name = $(this).data('name');
        var desc = $(this).data('desc');
        var deleteId = $(this).data('id');
        $.ajax({
            url: './php/delete_item_fg.php', 
            method: 'POST',
            data: { id: deleteId },
            success: function(response) {
                if (response === '0') {
                    Swal.fire({
                        title: 'Finished Good Deleted',
                        html: '<div style="text-align: center;"><p>Finished Good Info</p><table style="margin: 0 auto; text-align: left;"><tr><td><b>Name:</b></td><td>' + name + '</td></tr><tr><td><b>Description:</b></td><td>' + desc + '</td></tr></table></div>',
                        icon: 'success',
                    }).then(function() {
                        location.reload();
                    })
                } else if (response === '1') {
                    Swal.fire({
                        title: 'Oops',
                        text: 'Something went Wrong',
                        icon: 'error',
                    }).then(function() {
                        location.reload();
                    })
                } else {
                    console.log('Hello? Something Went Wrong on Submitting this data')
                }
            },
            error: function(xhr, status, error) {
                console.error('Error:', error);
            }
        });
    })

    $(document).on('click', '.pDelete', function() {
        var name = $(this).data('name');
        var desc = $(this).data('desc');
        var deleteId = $(this).data('id');
        $.ajax({
            url: './php/delete_item_p.php', 
            method: 'POST',
            data: { id: deleteId },
            success: function(response) {
                if (response === '0') {
                    Swal.fire({
                        title: 'Product Deleted',
                        html: '<div style="text-align: center;"><p>Product Info</p><table style="margin: 0 auto; text-align: left;"><tr><td><b>Name:</b></td><td>' + name + '</td></tr><tr><td><b>Description:</b></td><td>' + desc + '</td></tr></table></div>',
                        icon: 'success',
                    }).then(function() {
                        location.reload();
                    })
                } else if (response === '1') {
                    Swal.fire({
                        title: 'Oops',
                        text: 'Something went Wrong',
                        icon: 'error',
                    }).then(function() {
                        location.reload();
                    })
                } else {
                    console.log('Hello? Something Went Wrong on Submitting this data')
                }
            },
            error: function(xhr, status, error) {
                console.error('Error:', error);
            }
        });
    })

    $(document).on('click', '.cDelete', function() {
        var name = $(this).data('name');
        var deleteId = $(this).data('id');
        $.ajax({
            url: './php/delete_item_c.php', 
            method: 'POST',
            data: { id: deleteId },
            success: function(response) {
                if (response === '0') {
                    Swal.fire({
                        title: 'Client Code Deleted',
                        html: '<div style="text-align: center;"><p>Client Code Info</p><table style="margin: 0 auto; text-align: left;"><tr><td><b>Client Code:</b></td><td>' + name + '</td></tr></table></div>',
                        icon: 'success',
                    }).then(function() {
                        location.reload();
                    })
                } else if (response === '1') {
                    Swal.fire({
                        title: 'Oops',
                        text: 'Something went Wrong',
                        icon: 'error',
                    }).then(function() {
                        location.reload();
                    })
                } else {
                    console.log('Hello? Something Went Wrong on Submitting this data')
                }
            },
            error: function(xhr, status, error) {
                console.error('Error:', error);
            }
        });
    })
    
})