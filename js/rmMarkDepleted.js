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
                switch(response) {
                    case '0':
                        Swal.fire({
                            title: 'In Production',
                            text: rm_name + '-' + rm_desc + '-' + rm_id + ' is Marked as Depleted',
                            icon: 'success',
                        }).then(function() {
                            location.reload();
                        })
                        break;
                    case '1':
                        Swal.fire({
                            title: 'Oops',
                            text: rm_name + '-' + rm_desc + '-' + rm_id + ' is Already Marked as Depleted',
                            icon: 'error',
                        }).then(function() {
                            location.reload();
                        })
                        break;
                    case '9':
                        Swal.fire({
                            title: 'Oops',
                            text: 'Scrap is Greater than Raw Material Quantity',
                            icon: 'error',
                        })
                        break;
                    case '8':
                        Swal.fire({
                            title: 'Oops',
                            text: 'Raw Material is not Used',
                            icon: 'error',
                        })
                        break;
                    default:
                        console.log('Hello? Something Went Wrong on Submitting this data')
                        break;
                }
            },
            error: function(xhr, status, error) {
                console.error(xhr.responseText); 
            }
        })
    })
})

