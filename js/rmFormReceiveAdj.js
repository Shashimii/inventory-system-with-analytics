$(function() { 
    $('#rmAdjustmentForm').on('submit', function(event) { 
        event.preventDefault();

        var rm_name = $('#itemNameAdj').val(); 
        var rm_id = $('#itemIdAdj').val(); 
        var inputData = $(this).serialize(); 

        $.ajax({
            type: 'POST', 
            url: './php/rm_receive_adj.php', 
            data: inputData, 
            success: function(response) {
                console.log(response)
                if (response === '0') {
                    Swal.fire({
                        title: 'Adjusted',
                        text: rm_name + '-' + rm_id + ' Receive Quantity is Adjusted',
                        icon: 'success',
                    }).then(function() {
                        window.location.href = window.location.href;
                    })
                } else if (response === '1') {
                    Swal.fire({
                        title: 'Oops',
                        text: rm_name + '-' + rm_id + ' Received Quantity cannot be Adjusted',
                        icon: 'error',
                    }).then(function() {
                        window.location.href = window.location.href;
                    })
                } else {
                    console.log('Hello? Something Went Wrong on Submitting this data')
                }
            },
            error: function(xhr, status, error) {
                console.error(xhr.responseText); // Log the error to the console
            }
        })
    })
})