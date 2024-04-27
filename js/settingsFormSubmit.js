$(function() { // document ready function
    $('#rmForm').on('submit', function(event) { // on submit
        event.preventDefault();

        var item_name = $('#itemRmName').val(); // inputed name
        var item_desc = $('#itemRmDesc').val(); // inputed description
        var inputData = $(this).serialize(); // searlize data from php

        $.ajax({
            type: 'POST', // type of request on php script
            url: './php/rm_register.php', // php script
            data: inputData, // data from php script
            success: function(response) {
                if (response === '0') {
                    Swal.fire({
                        title: 'Raw Material Registered',
                        html: '<div style="text-align: center;"><p>Raw Material Info</p><table style="margin: 0 auto; text-align: left;"><tr><td><b>Name:</b></td><td>' + item_name + '</td></tr><tr><td><b>Description:</b></td><td>' + item_desc + '</td></tr></table></div>',
                        icon: 'success',
                    }).then(function() {
                        location.reload();
                    })
                } else if (response === '1') {
                    Swal.fire({
                        title: 'Raw Material Already Registered',
                        html: '<div style="text-align: center;"><p>Raw Material Name</p><table style="margin: 0 auto; text-align: left;"><tr><td><b>Name:</b></td><td>' + item_name + '</td></tr></table></div>',
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

    $('#fgForm').on('submit', function(event) {
        event.preventDefault();

        var item_name = $('#itemFgName').val(); 
        var item_desc = $('#itemFgDesc').val();
        var inputData = $(this).serialize(); 

        $.ajax({
            type: 'POST', 
            url: './php/fg_register.php', 
            data: inputData,
            success: function(response) {
                if (response === '0') {
                    Swal.fire({
                        title: 'Finished Good Registered',
                        html: '<div style="text-align: center;"><p>Finished Goods Info</p><table style="margin: 0 auto; text-align: left;"><tr><td><b>Name:</b></td><td>' + item_name + '</td></tr><tr><td><b>Description:</b></td><td>' + item_desc + '</td></tr></table></div>',
                        icon: 'success',
                    }).then(function() {
                        location.reload();
                    })
                } else if (response === '1') {
                    Swal.fire({
                        title: 'Finished Good Already Registered',
                        html: '<div style="text-align: center;"><p>Finished Good Name</p><table style="margin: 0 auto; text-align: left;"><tr><td><b>Name:</b></td><td>' + item_name + '</td></tr></table></div>',
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

    $('#pForm').on('submit', function(event) {
        event.preventDefault();

        var item_name = $('#itemPName').val(); 
        var item_desc = $('#itemPDesc').val();
        var inputData = $(this).serialize(); 

        $.ajax({
            type: 'POST', 
            url: './php/p_register.php', 
            data: inputData,
            success: function(response) {
                if (response === '0') {
                    Swal.fire({
                        title: 'Product Registered',
                        html: '<div style="text-align: center;"><p>Product Info</p><table style="margin: 0 auto; text-align: left;"><tr><td><b>Name:</b></td><td>' + item_name + '</td></tr><tr><td><b>Description:</b></td><td>' + item_desc + '</td></tr></table></div>',
                        icon: 'success',
                    }).then(function() {
                        location.reload();
                    })
                } else if (response === '1') {
                    Swal.fire({
                        title: 'Product Already Registered',
                        html: '<div style="text-align: center;"><p>Product Name</p><table style="margin: 0 auto; text-align: left;"><tr><td><b>Name:</b></td><td>' + item_name + '</td></tr></table></div>',
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

    $('#cForm').on('submit', function(event) {
        event.preventDefault();

        var item_name = $('#itemCName').val(); 
        var inputData = $(this).serialize(); 

        $.ajax({
            type: 'POST', 
            url: './php/client_register.php', 
            data: inputData,
            success: function(response) {
                if (response === '0') {
                    Swal.fire({
                        title: 'Client Code Registered',
                        html: '<div style="text-align: center;"><p>Client Code</p><table style="margin: 0 auto; text-align: left;"><tr><td><b>Code:</b></td><td>' + item_name + '</td></tr></table></div>',
                        icon: 'success',
                    }).then(function() {
                        location.reload();
                    })
                } else if (response === '1') {
                    Swal.fire({
                        title: 'Client Code Already Registered',
                        html: '<div style="text-align: center;"><p>Client Code</p><table style="margin: 0 auto; text-align: left;"><tr><td><b>Code:</b></td><td>' + item_name + '</td></tr></table></div>',
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

