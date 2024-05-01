var lowstockRm = 0;
var overstockRm = 0;
var lowstockFg = 0;
var overstockFg = 0;
var lowstockP = 0;
var overstockP = 0;
var totalNotif = 0; 



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
        generateIssue(rmList, fgList, pList);
    })
    .catch(function(error) {
        console.error(error);
    });
}

function pushNotif(rmList, fgList, pList) {
    $('#notif').empty();
    $('#alerts').empty();

    lowstockRm = 0;
    overstockRm = 0;
    lowstockFg = 0;
    overstockFg = 0;
    lowstockP = 0;
    overstockP = 0;  

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

            lowstockRm++
            
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

            overstockRm++   
        }
        
        $('#notif').append(rmNotif);
        $('#alerts').append(rmNotif);
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

            lowstockFg++

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

            overstockFg++
            
        }
        
        $('#notif').append(fgNotif);
        $('#alerts').append(fgNotif);
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

            lowstockP++

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

            overstockP++
        }
        
        $('#notif').append(pNotif);
        $('#alerts').append(pNotif);
    })
}

function countNotif(rmList, fgList, pList) {
    $('#notificationCounter').empty();
    $('#issueNum').empty();
    $('#issueTxt').empty();  
    totalNotif = rmList.length + fgList.length + pList.length;
    var count = `
        ${totalNotif}
    `;

    var text = `
        <h4>There are <span style="color: red;">${totalNotif}</span> issues on the Inventory<h4>
    `;
    
    $('#notificationCounter').append(count);
    $('#issueTxt').append(text);
    $('#issueNum').append(count);
}

setInterval(alertCheck, 1000);


function generateIssue(rmList, fgList, pList) {
    if (totalNotif != 0) {
        $('#cardIssue').empty()
        if (rmList.length > 0) {
            if (lowstockRm != 0) {
                var pushIssue =`
                    <p>There are <span style="color: red;">${lowstockRm}</span> Raw Materials that are low or out of stock</p>
                `;
                $('#cardIssue').append(pushIssue)
            }
    
            if (overstockRm != 0) {
                var pushIssue =`
                    <p>There are <span style="color: red;">${overstockRm}</span> Raw Materials that are overstock</p>
                `;
                $('#cardIssue').append(pushIssue)
            }
        }
    
        if (fgList.length > 0) {
            if (lowstockFg != 0) {
                var pushIssue =`
                    <p>There are <span style="color: red;">${lowstockFg}</span> Finished Goods that are low or out of stock</p>
                `;
                $('#cardIssue').append(pushIssue)
            }
    
            if (overstockFg != 0) {
                var pushIssue =`
                    <p>There are <span style="color: red;">${overstockFg}</span> Finished Goods that are overstock</p>
                `;
                $('#cardIssue').append(pushIssue)
            }
        }
    
        if (pList.length > 0) {
            if (lowstockP != 0) {
                var pushIssue =`
                    <p>There are <span style="color: red;">${lowstockP}</span> Products that are low or out of stock</p>
                `;
                $('#cardIssue').append(pushIssue)
            }
    
            if (overstockP != 0) {
                var pushIssue =`
                    <p>There are <span style="color: red;">${overstockP}</span> Products that are overstock</p>
                `;
                $('#cardIssue').append(pushIssue)
            }
        }
    } else {
        $('#issueInventory').empty();
        var noIssue =`
            <h4 style="color: #666;"><i>No Inventory Issues</i></h4>
        `;
        $('#issueInventory').append(noIssue);
    }
}
