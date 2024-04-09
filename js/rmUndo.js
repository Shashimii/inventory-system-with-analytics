$(document).on('submit', '#undoReceivedForm', function(event){
    event.preventDefault();

    var inputData = $(this).serialize();
    $.ajax({
        url: './php/rm_undo_received.php',
        method: 'POST',
        data: inputData,
        success: function(response) {
            console.log(response);
            if (response === '0') {
                Swal.fire({
                    title: 'Undoing last Receive',
                    text: 'Last Received Raw Material has been Removed from Inventory',
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