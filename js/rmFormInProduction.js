$(function() { // document ready function
    $('#rmInProductionForm').on('submit', function(event) { 
        event.preventDefault();
        
        var rm_name = $('#itemName').val(); 
        var rm_desc = $('#itemDesc').val(); 
        var rm_id = $('#itemId').val();
        var rm_lot = $('#itemLot').val();
        var rm_bin = $('#itemBin').val(); 
        var rm_quantity = $('#quantityReceive').val(); 
        var inputData = $(this).serialize();

        $.ajax({
            type: 'POST',
            url: './php/rm_InProduction.php',
            data: inputData,
            success: function(response) {
                console.log(response)
                if (response === '0') {
                    Swal.fire({
                        title: 'Raw Material In Production',
                        html: '<div style="text-align: center;"><p>Raw Material Info</p><table style="margin: 0 auto; text-align: left;"><tr><td><b>Name:</b></td><td>' + rm_name + '</td></tr><tr><td><b>Description:</b></td><td>' + rm_desc + '</td></tr><tr><td><b>Id:</b></td><td>' + rm_id + '</td></tr><tr><td><b>Lot:</b></td><td>' + rm_lot + '</td></tr><tr><td><b>Bin:</b></td><td>' + rm_bin + '</td></tr><tr><td><b>Quantity (kg):</b></td><td>' + rm_quantity + ' kg</td></tr></table></div>',
                        icon: 'success',
                    }).then(function() {
                        location.reload();
                    })
                } else if (response === '1') {
                    Swal.fire({
                        title: 'Oops',
                        text: 'Already In Production',
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

