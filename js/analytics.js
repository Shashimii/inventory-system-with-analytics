$(function() {
    function fetchDailyData() {
        var rmPromise = $.ajax({
            url: './php/analytics_daily_rm_used.php', 
            method: 'GET'
        });

        var rmTotalPromise = $.ajax({
            url: './php/analytics_daily_total_rm.php', 
            method: 'GET'
        });
    
    
        var fgPromise = $.ajax({
            url: './php/analytics_daily_fg_created.php', 
            method: 'GET'
        });

        var fgTotalPromise = $.ajax({
            url: './php/analytics_daily_total_fg.php', 
            method: 'GET'
        });

        Promise.all([rmPromise, rmTotalPromise, fgPromise, fgTotalPromise])
    
        .then(function(responses) {
            var rmCount = responses[0];
            var rmTotal = responses[1];
            var fgCount = responses[2];
            var fgTotal = responses[3];
            renderDailyData(rmCount, rmTotal, fgCount, fgTotal);
        })
        .catch(function(error) {
            console.error(error);
        });
    }

    function renderDailyData(rmCount, rmTotal, fgCount, fgTotal) {
        $('#rmCount').empty();  
        $('#fgCount').empty();
        
        rmCount.forEach(function(data) {
            var renderRmCount =`
                <tr>
                    <td>${data.action_time}</td>
                    <td>${data.item_name}</td>
                    <td>${data.item_id}</td>
                    <td>${data.quantity_used}kg</td>
                </tr>
            `;
            $('#rmCount').append(renderRmCount);
        })

        var renderRmTotal =`
            ${rmTotal.total_quantity}kg
        `;
        $('#rmTotal').append(renderRmTotal);

        fgCount.forEach(function(data) {
            var renderFgCount =`
                <tr>
                    <td>${data.action_time}</td>
                    <td>${data.item_name}</td>
                    <td>${data.from_rm_id}</td>
                    <td>${data.quantity_pcs}pcs</td>
                </tr>
            `;
            $('#fgCount').append(renderFgCount);
        })

        var renderFgTotal =`
            ${fgTotal.total_quantity}pcs
        `;
        $('#fgTotal').append(renderFgTotal);
    }
    fetchDailyData();
})


