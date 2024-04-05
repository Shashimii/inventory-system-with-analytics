$(function() { // document ready function
    $('#rmInProductionForm').on('submit', function(event) { 
        event.preventDefault();
        
        var rm_name = $('#itemName').val(); 
        var rm_desc = $('#itemDesc').val(); 
        var rm_id = $('#itemId').val(); 
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
                        title: 'In Production',
                        text: rm_name + '-' + rm_desc + '-' + rm_id + '-' + rm_quantity + ' KG is In Production Now',
                        icon: 'success',
                    }).then(function() {
                        location.reload();
                    })
                } else if (response === '1') {
                    Swal.fire({
                        title: 'Oops',
                        text: rm_name + '-' + rm_desc + '-' + rm_id + '-' + rm_quantity + ' KG is Already In Production',
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

