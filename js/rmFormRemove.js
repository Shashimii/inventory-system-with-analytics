$(function() { 
    $('#rmRemoveForm').on('submit', function(event) { 
        event.preventDefault();
        
        var inputData = $(this).serialize();

        $.ajax({
            type: 'POST',
            url: './php/rm_remove.php',
            data: inputData,
            success: function(response) {
                console.log(response)
                if (response === '0') {
                    Swal.fire({
                        title: 'Removed',
                        text: 'Raw Material Successfully Removed from the List',
                        icon: 'success',
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