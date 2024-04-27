function alertCheck() {
    var rmPromise = $.ajax({
        url: './php/check_level_rm.php', 
        method: 'GET'
    });

    var fgPromise = $.ajax({
        url: './php/check_level_fg.php', 
        method: 'GET'
    });

    var pPromise = $.ajax({
        url: './php/check_level_p.php', 
        method: 'GET'
    });

    Promise.all([rmPromise, fgPromise, pPromise])

    .then(function(responses) {
        var rmList = responses[0];
        var fgList = responses[1];
        var pList = responses[2];
        pushNotif(rmList, fgList, pList);
        countNotif(rmList, fgList, pList);
    })
    .catch(function(error) {
        console.error(error);
    });
}

function pushNotif(rmList, fgList, pList) {
    $('#notif').empty(); 
    rmList.forEach(function(notification) {
        if (notification.total_quantity < 2000) {
            var rmNotif = `
            <li style="background-color: #F3D0D7;">
                <a class="dropdown-item" href="rm_status">
                    <h6>${notification.item_name} Stock Level is Low</h6>
                    <p>In Stock: ${notification.total_quantity}kg</p>
                    <p class="notif" style="color: #666"><i>Raw Material<i></p>
                </a>
            </li>
        `;
        } else if (notification.total_quantity > 9999) {
            var rmNotif = `
            <li style="background-color: #FFFDCB;">
                <a class="dropdown-item" href="rm_status">
                    <h6>${notification.item_name} Stock Level is Overstock</h6>
                    <p>In Stock: ${notification.total_quantity}kg</p>
                    <p class="notif" style="color: #666"><i>Raw Material<i></p>
                </a>
            </li>
        `;
        }
        
        $('#notif').append(rmNotif);
    })

    fgList.forEach(function(notification) {
        if (notification.total_quantity < 1000) {
            var fgNotif = `
            <li style="background-color: #F3D0D7;">
                <a class="dropdown-item" href="fg_status">
                    <h6>${notification.item_name} Stock Level is Low</h6>
                    <p>In Stock: ${notification.total_quantity}pcs</p>
                    <p class="notif" style="color: #666"><i>Finished Goods<i></p>
                </a>
            </li>
        `;
        } else if (notification.total_quantity > 4999) {
            var fgNotif = `
            <li style="background-color: #FFFDCB;">
                <a class="dropdown-item" href="fg_status">
                    <h6>${notification.item_name} Stock Level is Overstock</h6>
                    <p>In Stock: ${notification.total_quantity}pcs</p>
                    <p class="notif" style="color: #666"><i>Finished Goods<i></p>
                </a>
            </li>
        `;
        }
        
        $('#notif').append(fgNotif);
    })

    pList.forEach(function(notification) {
        if (notification.total_quantity < 1000) {
            var pNotif = `
            <li style="background-color: #F3D0D7;">
                <a class="dropdown-item" href="p_status">
                    <h6>${notification.item_name} Stock Level is Low</h6>
                    <p>In Stock: ${notification.total_quantity}pcs</p>
                    <p class="notif" style="color: #666"><i>Products<i></p>
                </a>
            </li>
        `;
        } else if (notification.total_quantity > 4999) {
            var pNotif = `
            <li style="background-color: #FFFDCB;">
                <a class="dropdown-item" href="p_status">
                    <h6>${notification.item_name} Stock Level is Overstock</h6>
                    <p>In Stock: ${notification.total_quantity}pcs</p>
                    <p class="notif" style="color: #666"><i>Products<i></p>
                </a>
            </li>
        `;
        }
        
        $('#notif').append(pNotif);
    })
}

function countNotif(rmList, fgList, pList) {
    $('#notificationCounter').empty(); 
    var totalNotif = rmList.length + fgList.length + pList.length;
    var count = `
        ${totalNotif}
    `;
    
    $('#notificationCounter').append(count);
}

setInterval(alertCheck, 1000);