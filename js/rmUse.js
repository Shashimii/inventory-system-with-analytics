$(function() { 
    $('#rmUseForm').on('submit', function(event) { 
        event.preventDefault();

        var rm_desc = $('#uitemDesc').val(); 
        var rm_id = $('#uitemId').val(); 
        var rm_lot = $('#uitemLot').val();
        var rm_bin = $('#uitemBin').val();
        var rm_quantity = $('#uitemQuantity').val();

        var rm_use  = $('#rmUseQuantity').val();
        var rm_scrap = $('#rmScrap').val();

        var inputData = $(this).serialize();

        if (!rm_scrap) {
            rm_scrap = 0;
        }

        $.ajax({
            type: 'POST',
            url: './php/rm_use.php',
            data: inputData,
            success: function(response) {
                console.log(response)
                switch(response) {
                    case '0':
                        Swal.fire({
                            title: 'Raw Material Usage Added',
                            html: '<div style="text-align: center;">' +
                            '<p>Raw Material Info</p>' +
                            '<table style="margin: 0 auto; text-align: left;">' +
                            '<tr><td><b>Serial Id:</b></td><td>' + rm_id + '</td></tr>' +
                            '<tr><td><b>Dimensions:</b></td><td>' + rm_desc + '</td></tr>' +
                            '<tr><td><b>Lot:</b></td><td>' + rm_lot + '</td></tr>' +
                            '<tr><td><b>Bin:</b></td><td>' + rm_bin + '</td></tr>' +
                            '<tr><td><b>Quantity:</b></td><td>' + rm_quantity + ' kg</td></tr>' +
                            '<tr><td><b>Used Quantity:</b></td><td>' + rm_use + ' kg</td></tr>' +
                            '<tr><td><b>Production Scrap:</b></td><td>' + rm_scrap + ' kg</td></tr>' +
                            '</table>' +
                            '</div>',
                            icon: 'success',
                        }).then(function() {
                            location.reload();
                        })
                        break;
                    case '1':
                        Swal.fire({
                            title: 'Oops',
                            html: '<div style="text-align: center; font-family: Arial, sans-serif;">' +
                            '<p style="font-size: 18px; color: #333; margin-bottom: 10px;">Raw Material Id: <span style="color: red;">' + rm_id + '</span> Already Used</p>' +
                            '<p style="font-size: 16px; color: #666;">Refresh the Page if this kept Showing</p>' +
                            '</div>',
                            icon: 'error',
                        })
                        break;
                    case '8':
                        Swal.fire({
                            title: 'Oops',
                            html: '<div style="text-align: center; font-family: Arial, sans-serif;">' +
                            '<p style="font-size: 18px; color: #333;">Quantity Usage and Production Scrap is Greater than Raw Material Quantity</p>' +
                            '<p style="font-size: 18px; color: #333;">Check your usage and production scrap quantity</p></div>',
                            icon: 'error',
                        })
                        break;
                    case '9':
                        Swal.fire({
                            title: 'Oops',
                            html: '<div style="text-align: center; font-family: Arial, sans-serif;">' +
                            '<p style="font-size: 18px; color: #333;">Usage is Grater than Raw Material Quantity</p>' +
                            '<p style="font-size: 18px; color: #333;">Check your usage quantity</p></div>',
                            icon: 'error',
                        })
                        break;
                    case '7':
                        Swal.fire({
                            title: 'Oops',
                            html: '<div style="text-align: center; font-family: Arial, sans-serif;">' +
                            '<p style="font-size: 18px; color: #333;">Production Scrap is Greater than Raw Material Quantity</p>' +
                            '<p style="font-size: 18px; color: #333;">Check your scrap quantity</p></div>',
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