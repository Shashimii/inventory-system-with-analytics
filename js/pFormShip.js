$(function() {
    $('#shipForm').on('submit', function(event) {
        event.preventDefault();

        var inputData = $(this).serialize(); 

        $.ajax({
            type: 'POST', 
            url: './php/p_ship.php',
            data: inputData, 
            success: function(response) {
                console.log(response)
                if (response === '0') {
                    Swal.fire({
                        title: 'Shipped',
                        text: 'Shipped',
                        icon: 'success',
                    }).then(function() {
                        location.reload();
                    })
                } else if (response === '1') {
                    Swal.fire({
                        title: 'Oops',
                        text: 'Already Shipped',
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

