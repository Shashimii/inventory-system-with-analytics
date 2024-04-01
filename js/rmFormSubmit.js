$(function() { // document ready function
    $('#rm_register_form').on('submit', function(event) { // on submit
        event.preventDefault();

        var rm_name = $('#regRmName').val(); // inputed name
        var rm_desc = $('#regRmDesc').val(); // inputed description

        $.ajax({
            type: 'POST', // type of request on php script
            url: './php/rm_register.php', // php script
            success: function(response) {
                if (response === '0') {
                    Swal.fire({
                        title: 'Registered',
                        text: rm_name + '-' + rm_desc + ' is Successfully Registered',
                        icon: 'success',
                    }).then(function() {
                        window.location.href = window.location.href;
                    })
                } else if (response === '1') {
                    Swal.fire({
                        title: 'Oops',
                        text: rm_name + '-' + rm_desc + ' is Already Registered',
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
