$(function() { 
    $('#rmDepletedForm').on('submit', function(event) { 
        event.preventDefault();
        
        var rm_name = $('#itemName').val(); 
        var rm_desc = $('#itemDesc').val(); 
        var rm_id = $('#itemId').val(); 
        var inputData = $(this).serialize();

        $.ajax({
            type: 'POST',
            url: './php/rm_markDepleted.php',
            data: inputData,
            success: function(response) {
                console.log(response)
                if (response === '0') {
                    Swal.fire({
                        title: 'In Production',
                        text: rm_name + '-' + rm_desc + '-' + rm_id + ' is Marked as Depleted',
                        icon: 'success',
                    }).then(function() {
                        location.reload();
                    })
                } else if (response === '1') {
                    Swal.fire({
                        title: 'Oops',
                        text: rm_name + '-' + rm_desc + '-' + rm_id + ' is Already Marked as Depleted',
                        icon: 'error',
                    }).then(function() {
                        location.reload();
                    })
                } else if (response === '9') {
                    Swal.fire({
                        title: 'Oops',
                        text: rm_name + '-' + rm_desc + '-' + rm_id + ' Scrap is Greater than Raw Material Quantity',
                        icon: 'error',
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

