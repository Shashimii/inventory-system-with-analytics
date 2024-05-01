$(function() { 
    $('#removeAccountForm').on('submit', function(event) { 
        event.preventDefault();
        
        var inputData = $(this).serialize();
        console.log(inputData);

        $.ajax({
            type: 'POST',
            url: './php/settings_account_remove.php',
            data: inputData,
            success: function(response) {
                console.log(response)
                if (response === '0') {
                    Swal.fire({
                        title: 'Account Removed',
                        text: 'Account Successfully Removed',
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