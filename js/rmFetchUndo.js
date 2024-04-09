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

            $('#undoReceivedModal p#undoRecievedInfoDate').text(date);
            $('#undoReceivedModal p#undoReceivedInfoTime').text(time);
            $('#undoReceivedModal h1#undoReceivedInfoName').text(name);
            $('#undoReceivedModal p#undoReceivedInfoUser').text(user);
            $('#undoReceivedModal h4#undoReceivedInfoId').text(id);

            $('#undoReceivedModal #undoReceivedDate').val(date);
            $('#undoReceivedModal #undoReceivedTime').val(time);
            $('#undoReceivedModal #undoReceivedName').val(name);
            $('#undoReceivedModal #undoReceivedUser').val(user);
            $('#undoReceivedModal #undoReceivedId').val(id);
        },
        error: function(xhr, status, error) {
            console.error(xhr.responseText); 
        }
    })
})

$(document).on('click', '#undoInProduction', function(){
    $.ajax({
        url: './php/rm_undo_inProdcution_data.php',
        method: 'GET',
        success: function(response) {
            lastReceived = response[response.length - 1];

            var date = lastReceived.action_date;
            var time = lastReceived.action_time;
            var user = lastReceived.action_by;
            var name = lastReceived.item_name;
            var id = lastReceived.item_id;

            $('#undoInProductionModal p#undoInProductionInfoDate').text(date);
            $('#undoInProductionModal p#undoInProductionInfoTime').text(time);
            $('#undoInProductionModal h1#undoInProductionInfoName').text(name);
            $('#undoInProductionModal p#undoInProductionInfoUser').text(user);
            $('#undoInProductionModal h4#undoInProductionInfoId').text(id);

            $('#undoInProductionModal #undoInProductionDate').val(date);
            $('#undoInProductionModal #undoInProductionTime').val(time);
            $('#undoInProductionModal #undoInProductionName').val(name);
            $('#undoInProductionModal #undoInProductionUser').val(user);
            $('#undoInProductionModal #undoInProductionId').val(id);
        },
        error: function(xhr, status, error) {
            console.error(xhr.responseText); 
        }
    })
})

$(document).on('click', '#undoDepleted', function(){
    $.ajax({
        url: './php/rm_undo_depleted_data.php',
        method: 'GET',
        success: function(response) {
            lastReceived = response[response.length - 1];

            var date = lastReceived.action_date;
            var time = lastReceived.action_time;
            var user = lastReceived.action_by;
            var name = lastReceived.item_name;
            var id = lastReceived.item_id;

            $('#undoDepletedModal p#undoDepletedInfoDate').text(date);
            $('#undoDepletedModal p#undoDepletedInfoTime').text(time);
            $('#undoDepletedModal h1#undoDepletedInfoName').text(name);
            $('#undoDepletedModal p#undoDepletedInfoUser').text(user);
            $('#undoDepletedModal h4#undoDepletedInfoId').text(id);

            $('#undoDepletedModal #undoDepletedDate').val(date);
            $('#undoDepletedModal #undoDepletedTime').val(time);
            $('#undoDepletedModal #undoDepletedName').val(name);
            $('#undoDepletedModal #undoDepletedUser').val(user);
            $('#undoDepletedModal #undoDepletedId').val(id);
        },
        error: function(xhr, status, error) {
            console.error(xhr.responseText); 
        }
    })  
})