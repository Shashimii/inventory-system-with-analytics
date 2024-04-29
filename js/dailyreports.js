$(function() {
    var rmReceivedPromise = $.ajax({
        url: './php/daily_rm_received.php', 
        method: 'GET'
    });

    var rmUsedPromise = $.ajax({
        url: './php/daily_rm_used.php', 
        method: 'GET'
    });

    var rmScrapPromise = $.ajax({
        url: './php/daily_rm_scrap.php', 
        method: 'GET'
    });

    var fgProducedPromise = $.ajax({
        url: './php/daily_fg_produced.php', 
        method: 'GET'
    });

    var pProducedPromise = $.ajax({
        url: './php/daily_p_produced.php', 
        method: 'GET'
    });

    var pShipPromise = $.ajax({
        url: './php/daily_p_shipped.php', 
        method: 'GET'
    });

    Promise.all([
        rmReceivedPromise, 
        rmUsedPromise,
        rmScrapPromise,
        fgProducedPromise, 
        pProducedPromise,
        pShipPromise,
    ])

    .then(function(responses) {
        var rmReceived = responses[0];
        var rmUsed = responses[1];
        var rmScrap = responses[2];
        var fgProduced = responses[3];
        var pProduced = responses[4];
        var pShipped = responses[5];

        renderRmReceived(rmReceived);
        renderRmUsed(rmUsed);
        renderRmScrap(rmScrap);
        renderFgProduced(fgProduced);
        renderPProduced(pProduced);
        renderPShipped(pShipped);
    })
    .catch(function(error) {
        console.error(error);
    });

    function renderRmReceived(rmReceived) {
        $('#rmReceived').empty();
        if (rmReceived.length === 0) {
            var renderData =  `
            <tr class="table-row">
                <td><i>No Received Raw Material</i></td>
            </tr>
            `;
            $('#rmReceived').append(renderData);
        } else {
            rmReceived.forEach(function(data) {
                var renderData =  `
                <tr class="table-row">
                    <td><strong><i>Name:</i></strong> ${data.item_name}</td>
                    <td><strong><i>ID:</i></strong> ${data.item_id}</td>
                    <td><strong><i>Qty:</i></strong> ${data.quantity_receive}kg</td>
                </tr>
                `;
                $('#rmReceived').append(renderData);
            });
        }
    }

    function renderRmUsed(rmUsed) {
        $('#rmUsed').empty();
        if (rmUsed.length === 0) {
            var renderData =  `
            <tr class="table-row">
                <td><i> No Used Raw Material</i></td>
            </tr>
            `;
            $('#rmUsed').append(renderData);
        } else {
            rmUsed.forEach(function(data) {
                var renderData =  `
                <tr class="table-row">
                    <td><strong><i>Name:</i></strong> ${data.item_name}</td>
                    <td><strong><i>ID:</i></strong> ${data.item_id}</td>
                    <td><strong><i>Qty:</i></strong> ${data.quantity_used}kg</td>
                </tr>
                `;
                $('#rmUsed').append(renderData);
            });
        }
        console.log(rmUsed);
    }

    function renderRmScrap(rmScrap) {
        $('#rmScrap').empty();
        rmScrap.forEach(function(data) {
            if (data.total_scrap === null) {
                var renderData =  `
                <tr class="table-row">
                    <td><i>No Raw Material Scrap</i></td>
                </tr>
                `;
                $('#rmScrap').append(renderData);
            } else {
                rmScrap.forEach(function(data) {
                    var renderData =  `
                    <tr class="table-row">
                        <td><strong><i>Production Scrap:</i></strong> ${data.total_scrap}kg</td>
                    </tr>
                    `;
                    $('#rmScrap').append(renderData);
                });
            }
        })
    }

    function renderFgProduced(fgProduced) {
        $('#fgProduced').empty();
        if (fgProduced.length === 0) {
            var renderData =  `
            <tr class="table-row">
                <td><i>No Fg Produced</i></td>
            </tr>
            `;
            $('#fgProduced').append(renderData);
        } else {
            fgProduced.forEach(function(data) {
                var renderData =  `
                <tr class="table-row">
                    <td><strong><i>Name:</i></strong> ${data.item_name}</td>
                    <td><strong><i>Qty:</i></strong> ${data.quantity_pcs}pcs</td>
                </tr>
                `;
                $('#fgProduced').append(renderData);
            });
        }
    }

    function renderPProduced(pProduced) {
        $('#pProduced').empty();
        if (pProduced.length === 0) {
            var renderData =  `
            <tr class="table-row">
                <td><i>No Product Produced</i></td>
            </tr>
            `;
            $('#pProduced').append(renderData);
        } else {
            pProduced.forEach(function(data) {
                var renderData =  `
                <tr class="table-row">
                    <td><strong><i>Name:</i></strong> ${data.item_name}</td>
                `;
                if (data.pack_small != null) {
                    renderData +=`
                    <td><strong><i>Small Box:</i></strong> ${data.pack_small}pcs</td>
                </tr>
                `;
                } else if (data.pack_medium != null) {
                    renderData +=`
                    <td><strong><i>Medium Box:</i></strong> ${data.pack_medium}pcs</td>
                </tr>
                `;
                } else if (data.pack_large != null) {
                    renderData +=`
                    <td><strong><i>Large Box:</i></strong> ${data.pack_large}pcs</td>
                </tr>
                `;
                }

                $('#pProduced').append(renderData);
            });
        }
    }

    function renderPShipped(pShipped) {
        $('#pShipped').empty();
        if (pShipped.length === 0) {
            var renderData =  `
            <tr class="table-row">
                <td><i>No Products Shipped</i></td>
            </tr>
            `;
            $('#pShipped').append(renderData);
        } else {
            pShipped.forEach(function(data) {
                var renderData =  `
                <tr class="table-row">
                    <td><strong><i>Name:</i></strong> ${data.item_name}</td>
                    <td><strong><i>Product Id:</i></strong> ${data.item_id}</td>
                    <td><strong><i>Ship Qty:</i></strong> ${data.shipped_quantity}pcs</td>
                </tr>
                `;
                $('#pShipped').append(renderData);
            });
        }
    }

    $('#toggle-print').on('click', function() {
        window.print();
    });
});