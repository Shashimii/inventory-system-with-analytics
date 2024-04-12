$(function() { 
    $('#rmDepletedForm').on('submit', function(event) { 
        event.preventDefault();
        var fg_name = $('#FgName').val();
        var fg_desc = $('#FgDesc').val();
        var fg_id = $('#FgId').val();
        var rm_name = $('#ditemName').val(); 
        var rm_desc = $('#ditemDesc').val(); 
        var rm_id = $('#ditemId').val(); 
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
                        })
                        break;
                    case '2':
                        Swal.fire({
                            title: 'Oops',
                            text: fg_name + '-' + fg_desc + '-' + fg_id + ' is Already on Finished Goods',
                            icon: 'error',
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

