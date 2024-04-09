$(document).on('click', '#undoReceive', function(){
    $.ajax({
        url: './php/rm_undo_received_data.php',
        method: 'GET',
        success: function(response) {
            lastReceived = response[response.length - 1];

            var date = lastReceived.action_date;
            var time = lastReceived.action_time;
            var user = lastReceived.action_by;
            var name = lastReceived.item_name;
            var id = lastReceived.item_id;

            $('#undoModal p#undoInfoDate').text(date);
            $('#undoModal p#undoInfoTime').text(time);
            $('#undoModal h1#undoInfoName').text(name);
            $('#undoModal p#undoInfoUser').text(user);
            $('#undoModal h4#undoInfoId').text(id);

            $('#undoModal #undoReceivedDate').val(date);
            $('#undoModal #undoReceivedTime').val(time);
            $('#undoModal #undoReceivedName').val(name);
            $('#undoModal #undoReceivedUser').val(user);
            $('#undoModal #undoReceivedId').val(id);
        },
        error: function(xhr, status, error) {
            console.error(xhr.responseText); 
        }
    })
})

$(document).on('click', '#undoInProduction', function(){
        $.ajax({
        url: '',
        method: 'GET',
        success: function(response) {

        },
        error: function(xhr, status, error) {
            
        }
    })
})

$(document).on('click', '#undoDepleted', function(){
    $.ajax({
        url: '',
        method: 'GET',
        success: function(response) {

        },
        error: function(xhr, status, error) {
            
        }
    })  
})

$(document).on('click', '#undoRemove', function(){
    $.ajax({
        url: '',
        method: 'GET',
        success: function(response) {

        },
        error: function(xhr, status, error) {
            
        }
    })
})