$(function() { // document ready function
    $('#rm_receive_form').on('submit', function(event) { // on submit
        event.preventDefault();

        var rm_name = $('#recRmName').val(); // inputed name
        var rm_desc = $('#recRmDesc').val(); // inputed description
        var rm_id = $('#recRmId').val(); // inputed Id
        var rm_quantity = $('#recRmQuantity').val() //inputed Quantity
        var inputData = $(this).serialize(); // seralize data from form

        $.ajax({
            type: 'POST', // type of request on php script
            url: './php/rm_receive.php', // php script
            data: inputData, // seralized data to POST request
            success: function(response) {
                console.log(response)
                if (response === '0') {
                    Swal.fire({
                        title: 'Received',
                        text: rm_name + '-' + rm_desc + '-' + rm_id + '-' + rm_quantity +'KG is Successfully Received',
                        icon: 'success',
                    }).then(function() {
                        location.reload();
                    })
                } else if (response === '1') {
                    Swal.fire({
                        title: 'Oops',
                        text: rm_name + '-' + rm_desc + '-' + rm_id + '-' + rm_quantity + 'KG is Already Received',
                        icon: 'error',
                    }).then(function() {
                        location.reload();
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













