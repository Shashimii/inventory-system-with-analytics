$(function() {
    $('#shipForm').on('submit', function(event) {
        event.preventDefault();

        var name = $('#shipName').val();
        var desc = $('#shipDesc').val();
        var id = $('#shipId').val();
        var lot = $('#shipLot').val();
        var bin = $('#shipBin').val();
        var box = $('#boxType').val();
        var quantity = $('#shipQuantity').val();
        var company = $('#companyCode').val();
        var inputData = $(this).serialize(); 

        $.ajax({
            type: 'POST', 
            url: './php/p_ship.php',
            data: inputData, 
            success: function(response) {
                console.log(response)
                if (response === '0') {
                    Swal.fire({
                        title: 'Products Shipped',
                        html: '<div style="text-align: center;"><p>Product Info</p><table style="margin: 0 auto; text-align: left;"><tr><td><b>Name:</b></td><td>' + name + '</td></tr><tr><td><b>Description:</b></td><td>' + desc + '</td></tr><tr><td><b>Id:</b></td><td>' + id + '</td></tr><tr><td><b>Lot:</b></td><td>' + lot + '</td></tr><tr><td><b>Storage Bin:</b></td><td>' + bin + '</td></tr><tr><td><b>Box Type:</b></td><td>' + box + '</td></tr><tr><td><b>Quantity (pcs):</b></td><td>' + quantity + 'pcs</td></tr><tr><td><b>Company Code:</b></td><td>' + company + '</td></tr></table></div>',
                        icon: 'success',
                    }).then(function() {
                        location.reload();
                    })
                } else if (response === '1') {
                    Swal.fire({
                        title: 'Oops',
                        html: '<div style="text-align: center; font-family: Arial, sans-serif;">' +
                        '<p style="font-size: 18px; color: #333; margin-bottom: 10px;">Product Id: <span style="color: red;">' + id + '</span> is Already Shipped</p>' +
                        '<p style="font-size: 16px; color: #666;">Refresh the Page if this kept Showing</p>' +
                        '</div>',
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
})

