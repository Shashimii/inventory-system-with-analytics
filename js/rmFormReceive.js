$(function() { // document ready function
    $('#rm_receive_form').on('submit', function(event) { // on submit
        event.preventDefault();

        var rm_name = $('#recRmName').val(); // inputed name
        var rm_desc = $('#recRmDesc').val(); // inputed description
        var rm_id = $('#recRmId').val(); // inputed Id
        var rm_bin = $('#recRmBin').val();
        var rm_quantity = $('#recRmQuantity').val() //inputed Quantity
        var inputData = $(this).serialize(); // seralize data from form

        $.ajax({
            type: 'POST', // type of request on php script
            url: './php/rm_receive.php', // php script
            data: inputData, // seralized data to POST request
            success: function(response) {
                if (response === '0') {
                    Swal.fire({
                        title: 'Raw Material Received',
                        html: '<div style="text-align: center;"><p>Raw Material Info</p><table style="margin: 0 auto; text-align: left;"><tr><td><b>Name:</b></td><td>' + rm_name + '</td></tr><tr><td><b>Description:</b></td><td>' + rm_desc + '</td></tr><tr><td><b>Id:</b></td><td>' + rm_id + '</td></tr><tr><td><b>Storage Bin:</b></td><td>' + rm_bin + '</td></tr><tr><td><b>Quantity (kg):</b></td><td>' + rm_quantity + ' kg</td></tr></table></div>',
                        icon: 'success',
                    }).then(function() {
                        location.reload();
                    })
                } else if (response === '1') {
                    Swal.fire({
                        title: 'Oops',
                        html: '<div style="text-align: center; font-family: Arial, sans-serif;">' +
                        '<p style="font-size: 18px; color: #333; margin-bottom: 10px;">Raw Material Id: <span style="color: red;">' + rm_id + '</span> is Already Recorded in Inventory</p>' +
                        '<p style="font-size: 16px; color: #666;">Are you sure this ID is correct?</p>' +
                        '</div>',
                        icon: 'error',
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













