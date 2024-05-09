$(function() {
    function fetchTotalCounts() {
        var rmPromise = $.ajax({
            url: './php/dashboard_rm_count_data.php', 
            method: 'GET'
        });
    
        var fgPromise = $.ajax({
            url: './php/dashboard_fg_count_data.php', 
            method: 'GET'
        });
    
        var pPromise = $.ajax({
            url: './php/dashboard_p_count_data.php', 
            method: 'GET'
        });

        var sPromise = $.ajax({
            url: './php/dashboard_s_count_data.php', 
            method: 'GET'
        });
    
        Promise.all([rmPromise, fgPromise, pPromise, sPromise])
    
        .then(function(responses) {
            var rmTotal = parseInt(responses[0]);
            var fgTotal = parseInt(responses[1]);
            var pTotal = parseInt(responses[2]);
            var sTotal = parseInt(responses[3]);

            displayTotal(rmTotal, fgTotal, pTotal, sTotal);

        })
        .catch(function(error) {
            console.error(error);
        });
    }

    function displayTotal(rmTotal, fgTotal, pTotal, sTotal) {
        var rmCount = `${rmTotal ? rmTotal.toLocaleString('en') : '0'}kg`;
        $('#rmStocks').append(rmCount);

        
        var fgCount = `${fgTotal ? fgTotal.toLocaleString('en') : '0'}pcs`;
        $('#fgStocks').append(fgCount);

        
        var pCount = `${pTotal ? pTotal.toLocaleString('en') : ''}pcs`;
        $('#pStocks').append(pCount);

        
        var sCount = `${sTotal ? sTotal.toLocaleString('en') : ''}pcs`;
        $('#sStocks').append(sCount);
    }

    function fetchClients() {
        $.ajax({
            url: './php/dashboard_clients_data.php', 
            method: 'GET',
            success: function(response) {
                displayClients(response)
            },
            error: function(xhr, status, error) {
                console.error(xhr.responseText); 
            }
        });
    }

    function displayClients(data) {
        if (data.length === 0) {
            var clients = `
            <div class="container mt-1">
                <div class="card shadow">
                    <div class="card-body">
                        <h5 class="card-title" style="color: #666;"><i>No Clients<i></h5>
                        </p>
                    </div>
                </div>
            </div>
        `;
        $('#clients').append(clients);
        } else {
            data.forEach(function(data) {
                shipQuantity = parseInt(data.total_quantity)
                var clients = `
                <div class="container mt-1">
                    <div class="card shadow">
                        <div class="card-body">
                            <h5 class="card-title"><i class="fa-solid fa-user"></i> ${data.client_company}</h5>
                            <p class="card-text">
                            <i class="fa-solid fa-truck-fast"></i> <strong>Shipped:</strong> ${shipQuantity.toLocaleString('en')}pcs<br>
                            </p>
                        </div>
                    </div>
                </div>
            `;
            $('#clients').append(clients);
            })
        }
    }

    
    function fetchProducts() {
        $.ajax({
            url: './php/dashboard_products_data.php', 
            method: 'GET',
            success: function(response) {
                displayProducts(response)
            },
            error: function(xhr, status, error) {
                console.error(xhr.responseText); 
            }
        });
    }

    function displayProducts(data) {
        if (data.length === 0) {
            var products = `
            <div class="container mt-1">
                <div class="card shadow">
                    <div class="card-body">
                        <h5 class="card-title" style="color: #666;"><i>No Products<i></h5>
                        </p>
                    </div>
                </div>
            </div>
        `;
        $('#products').append(products);
        } else {
            data.forEach(function(data) {
                productQuantity = parseInt(data.total_quantity)
                var products = `
                <div class="container mt-1">
                    <div class="card shadow">
                        <div class="card-body">
                            <h5 class="card-title"><i class="fa-solid fa-boxes-stacked"></i> ${data.item_name}</h5>
                            <p class="card-text">
                            <i class="fa-solid fa-hashtag"></i> <strong>Quantity:</strong> ${productQuantity.toLocaleString('en')}pcs<br>
                            <i>Description: ${data.item_desc}</i><br>
                            </p>
                        </div>
                    </div>
                </div>
            `;
            $('#products').append(products);
            })
        }
    }

    fetchTotalCounts()
    fetchClients()
    fetchProducts()
});