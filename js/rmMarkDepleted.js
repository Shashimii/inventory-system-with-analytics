$(function() { 
    $('#rmDepletedForm').on('submit', function(event) { 
        event.preventDefault();

        var rm_desc = $('#ditemDesc').val(); 
        var rm_id = $('#ditemId').val(); 
        var rm_lot = $('#ditemLot').val();
        var rm_bin = $('#ditemBin').val();
        var scrap_quantity = $('#rmScrap').val();
        if (!scrap_quantity) {
            scrap_quantity = 0;
        }

        var inputData = $(this).serialize();

        Swal.fire({
            title: "Are you Sure?",
            html: '<div style="text-align: center;">' +
                  '<p>Raw Material Info</p>' +
                  '<table style="margin: 0 auto; text-align: left;">' +
                  '<tr><td><b>Serial Id:</b></td><td>' + rm_id + '</td></tr>' +
                  '<tr><td><b>Dimensions:</b></td><td>' + rm_desc + '</td></tr>' +
                  '<tr><td><b>Lot:</b></td><td>' + rm_lot + '</td></tr>' +
                  '<tr><td><b>Bin:</b></td><td>' + rm_bin + '</td></tr>' +
                  '<tr><td><b>Production Scrap:</b></td><td>' + scrap_quantity + ' kg</td></tr>' +
                  '</table>' +
                  '<p style="margin-block: 20px 0px;">This Raw Material will be Marked as Depleted</p>' +
                  '<p style="margin: 0px;">Production Scrap will be Recorded</p>' +
                  '</div>',
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#d33",
            cancelButtonColor: "#948380",
            confirmButtonText: "Mark Raw Material as Depleted"
        }).then((result) => {
            if (result.isConfirmed) {
                $.ajax({
                    type: 'POST',
                    url: './php/rm_markDepleted.php',
                    data: inputData,
                    success: function(response) {
                        console.log(response)
                        switch(response) {
                            case '0':
                                Swal.fire({
                                    title: 'Raw Material Marked as Depleted',
                                    html: '<div style="text-align: center;">' +
                                    '<p>Raw Material Info</p>' +
                                    '<table style="margin: 0 auto; text-align: left;">' +
                                    '<tr><td><b>Serial Id:</b></td><td>' + rm_id + '</td></tr>' +
                                    '<tr><td><b>Dimensions:</b></td><td>' + rm_desc + '</td></tr>' +
                                    '<tr><td><b>Lot:</b></td><td>' + rm_lot + '</td></tr>' +
                                    '<tr><td><b>Bin:</b></td><td>' + rm_bin + '</td></tr>' +
                                    '<tr><td><b>Production Scrap:</b></td><td>' + scrap_quantity + ' kg</td></tr>' +
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
                                    '<p style="font-size: 18px; color: #333; margin-bottom: 10px;">Raw Material Id: <span style="color: red;">' + rm_id + '</span> is Already Marked as Depleted</p>' +
                                    '<p style="font-size: 16px; color: #666;">Refresh the Page if this kept Showing</p>' +
                                    '</div>',
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
            }
        });
    })
})

