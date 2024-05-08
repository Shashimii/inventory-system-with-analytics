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
        $('#rmTotal').empty();  
        $('#fgTotal').empty();

        if (rmCount.length === 0) {
            $('#rmDailyBody').empty();
            var noTotal = `
                <h4 style="color: #666;"><i>No Used Raw Material as of Today</i></h4>
            `;
            $('#rmDailyBody').append(noTotal);
        } else {
            rmCount.forEach(function(data) {
                var renderRmCount =`
                    <tr>
                        <td>${data.action_time}</td>
                        <td>${data.item_desc}</td>
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
        }

        if (fgCount.length === 0) {
            $('#fgDailyBody').empty();
            var noTotal = `
                <h4 style="color: #666;"><i>No Finished Goods Produced as of Today</i></h4>
            `;
            $('#fgDailyBody').append(noTotal);
        } else {
            fgCount.forEach(function(data) {
                var renderFgCount =`
                    <tr>
                        <td>${data.action_time}</td>
                        <td>${data.item_name}</td>
                        <td>${data.item_id}</td>
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
    }

    function fetchResultsData() {
        var dailyPromise = $.ajax({
            url: './php/analytics_report_daily.php', 
            method: 'GET'
        });

        var monthlyPromise = $.ajax({
            url: './php/analytics_report_monthly.php', 
            method: 'GET'
        });
    
    
        var topClientPromise = $.ajax({
            url: './php/analytics_report_client.php', 
            method: 'GET'
        });

        Promise.all([dailyPromise, monthlyPromise, topClientPromise])
    
        .then(function(responses) {
            var daily = responses[0];
            var monthly = responses[1];
            var topClient = responses[2];

            renderResultsData(daily, monthly, topClient);
        })
        .catch(function(error) {
            console.error(error);
        });
    }

    function renderResultsData(daily, monthly, topClient) {
        var dailyResult = daily[0];
        var monthlyResult = monthly[0];

        var resultData = `
            ${dailyResult.total_rm}kg
        `;
        $('#resultsDailyRm').append(resultData);

        var resultData = `
            ${dailyResult.total_fg}pcs
        `;
        $('#resultsDailyFg').append(resultData);

        var resultData = `
            ${monthlyResult.total_fg}pcs
        `;
        $('#resultsMonthlyFg').append(resultData);

        var resultData = `
            ${monthlyResult.total_p}pcs
        `;
        $('#resultsMonthlyP').append(resultData);

        topClient.forEach(function(data) {
            var resultClientData = `
                ${data.client_company} you shipped
                ${data.total_shipped_quantity}pcs</br>
                
            `;
            $('#clientTopResults').append(resultClientData);
        })
    }

    fetchResultsData()
    fetchDailyData();
})


