<?php

include 'connections.php';

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <script src="./js/analytics.js"></script>
    <script defer src="./js/alert.js"></script> 
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>template | Hiltac</title>
</head>
<body>
    <div class="main">
        <div class="content-head">
            <div class="navbar-container">
                <nav class="navbar navbar-expand-lg fixed-top" style="background-color: #CD1818">
                    <div class="container-fluid">
                        <a class="navbar-brand">
                            <img src="./assets/logo.jpg" alt="Logo" width="45" height="40" class="d-inline-block align-text-top" style="border-radius: 50%;">
                        </a>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                                <li class="nav-item dropdown">
                                    <a class="nav-link dropdown-toggle" href="dashboard" role="button" data-bs-toggle="dropdown" aria-expanded="false">Inventory</a>
                                    <ul class="dropdown-menu">
                                        <li><a class="dropdown-item" href="dashboard">Dashboard</a></li>
                                        <li><a class="dropdown-item" href="dailyreports">Daily Reports</a></li>
                                        <li><a class="dropdown-item active" href="analytics">Analytics</a></li>
                                    </ul>
                                </li>
                                <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Raw Materials</a>
                                    <ul class="dropdown-menu">
                                        <li><a class="dropdown-item" href="rm_items">Manage</a></li>
                                        <li><a class="dropdown-item" href="rm_status">Status</a></li>
                                        <li><a class="dropdown-item" href="rm_history">Transaction History</a></li>
                                    </ul>
                                </li>
                                <li class="nav-item dropdown">
                                    <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Finished Goods</a>
                                    <ul class="dropdown-menu">
                                        <li><a class="dropdown-item" href="fg_items">Manage</a></li>
                                        <li><a class="dropdown-item" href="fg_status">Status</a></li>
                                        <li><a class="dropdown-item" href="fg_history">Transaction History</a></li>
                                    </ul>
                                </li>
                                <li class="nav-item dropdown">
                                    <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Products</a>
                                    <ul class="dropdown-menu">
                                        <li><a class="dropdown-item" href="p_stocks">Manage</a></li>
                                        <li><a class="dropdown-item" href="p_status">Status</a></li>
                                        <li><a class="dropdown-item" href="p_history">Transaction History</a></li>
                                    </ul>
                                </li>
                                <li class="nav-item dropdown">
                                    <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Settings</a>
                                    <ul class="dropdown-menu">
                                        <li><a class="dropdown-item" href="settings_items">Items</a></li>
                                        <li><a class="dropdown-item" href="settings_accounts">Accounts</a></li>
                                        <li><a class="dropdown-item" href="settings_data">Backup Data</a></li>
                                    </ul>
                                </li>
                            </ul>
                            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                                <a class="nav-link"><i class="fa-solid fa-user-plus"></i><?php echo $sys_user ?></a>
                                <a class="nav-link"><?php echo $sys_date ?></a>
                                <a class="nav-link" id="sysTime"></a>
                                <div class="notification-wrapper">
                                    <li class="nav-item dropdown">
                                        <a class="nav-link notification-bell" role="button" data-bs-toggle="dropdown"><h6><i class="fa-solid fa-bell"></i></h6></a>
                                        <ul class="dropdown-menu dropdown-menu-end">
                                            <li><h6 class="dropdown-item">Notifications</h6></li>
                                            <li><hr class="dropdown-divider"></li>
                                            <div class="d-grid gap-1" id="notif">
                                                
                                            </div>
                                        </ul>
                                    </li>
                                    <span class="badge" id="notificationCounter"></span>
                                </div>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
        <div class="content-body">
            <div class="main-content">
                <div class="an-main">
                    <div class="an-header">
                        <h3>Inventory Analytics</h3>
                    </div>
                    <hr class="border border-danger border-3 opacity-100" style="margin: 0; padding: 0;">
                    <div class="an-daily">
                        <div class="an-header">
                            <h4><i>Daily Reports</i></h4>
                        </div>
                        <div class="an-body">
                            <div class="an-daily-card">
                                <div class="an-card-header">
                                    <h4>Used Raw Materials</h4>
                                </div>
                                <div id="rmDailyBody" class="an-card-body" style="font-family: Arial, sans-serif; font-size: 18px; line-height: 1.6; color: #333;">
                                    <h4>Raw Materials Used Today<h4>
                                        <table class="table table-borderless table-danger">
                                            <thead>
                                                <tr>
                                                    <th>Time Used</th>
                                                    <th>Raw Material</th>
                                                    <th>Id</th>
                                                    <th>Quantity Used</th>
                                                </tr>
                                            </thead>
                                            <tbody id="rmCount">

                                            </tbody>
                                        </table>    
                                    <h4>Total Quantity of Raw Materials used</h4>
                                    <h4 id="rmTotal" style="font-weight: bold; color: red;"></h4>
                                </div>
                            </div>
                            <div class="an-daily-card">
                                <div class="an-card-header">
                                    <h4>Finished Products Produced</h4>
                                </div>
                                <div id="fgDailyBody" class="an-card-body" style="font-family: Arial, sans-serif; font-size: 18px; line-height: 1.6; color: #333;">
                                    <h4>Finished Goods Produced Today<h4>
                                        <table class="table table-borderless table-success">
                                            <thead>
                                                <tr>
                                                    <th>Time Used</th>
                                                    <th>Finished Goods</th>
                                                    <th>RawMat used Id</th>
                                                    <th>Quantity Produced</th>
                                                </tr>
                                            </thead>
                                            <tbody id="fgCount">

                                            </tbody>
                                        </table>    
                                    <h4>Total Quantity of Finished Goods produced</h4>
                                    <h4 id="fgTotal" style="font-weight: bold; color: green;"></h4>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr class="border border-danger border-3 opacity-100" style="margin: 0; padding: 0;">
                    <div class="an-monthly">
                        <div class="an-header">
                            <h4><i>Monthly Analytics</i></h4>
                        </div>
                    </div>
                    <div class="an-monthly-body">
                        <div class="an-monthly-card">
                            <div class="an-card-header">
                                <h4>Finished Goods Produced <span style="color: #666;">(pcs)</span></h4>
                            </div>
                            <div class="an-card-body" style="height: 450px;">
                                <canvas id="fgMonthlyChart"></canvas>
                            </div>
                        </div>
                        <div class="an-monthly-card">
                            <div class="an-card-header">
                                <h4>Products Shipped <span style="color: #666;">(pcs)</span></h4>
                            </div>
                            <div class="an-card-body" style="height: 450px;">
                                <canvas id="pMonthlyChart"></canvas>
                            </div>
                        </div>
                    </div>
                    <hr class="border border-danger border-3 opacity-100" style="margin: 0; padding: 0;">
                    <div class="an-client">
                        <div class="an-header">
                            <h4><i>Clients</i></h4>
                        </div>
                    </div>
                    <div class="an-client-body">
                        <div class="an-client-card">
                            <div class="an-card-header">
                                <h4>Product Shippments</h4>
                            </div>
                            <div class="an-card-body" style="height: 450px;">
                                <canvas id="clientChart"></canvas>
                            </div>
                        </div>
                    </div>
                    <hr class="border border-danger border-3 opacity-100" style="margin: 0; padding: 0;">
                    <div class="an-analysis">
                        <div class="an-header">
                            <h4><i>Results</i></h4>
                        </div>
                    </div>
                    <div class="an-analysis-body">
                        <div class="an-analysis-card">
                            <div class="an-card-header">
                                <h4>Inventory</h4>
                            </div>
                            <div class="an-analysis-card-body" style="height: 450px;">
                               <div class="analysis-card">
                                    <div class="analysis-card-header">
                                        <h4>Daily Report</h4>
                                    </div>
                                    <div class="analysis-card-body" style="font-family: Arial, sans-serif; font-size: 18px; line-height: 1.6; color: #333;">
                                        <div class="card-chart" style="height: 200px">
                                            <canvas id="dailyReportChart"></canvas>
                                        </div>
                                        <div class="card-info">
                                            <h4>Info</h4>
                                        </div>
                                    </div>
                               </div>
                               <div class="analysis-card">
                                    <div class="analysis-card-header">
                                        <h4>Monthly Report</h4>
                                    </div>
                                    <div class="analysis-card-body">
                                        <div class="card-chart" style="height: 200px">
                                            <canvas id="monthlyReportChart"></canvas>
                                        </div>
                                        <div class="card-info">
                                            <h4>Info</h4>
                                        </div>
                                    </div>
                               </div>
                               <div class="analysis-card">
                                    <div class="analysis-card-header">
                                        <h4>Top 5 Clients</h4>
                                    </div>
                                    <div class="analysis-card-body">
                                        <div class="card-chart" style="height: 200px; padding-top: 30px">
                                            <canvas id="clientReportChart"></canvas>
                                        </div>
                                        <div class="card-info">
                                            <h4>Info</h4>
                                        </div>
                                    </div>
                               </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</body>
</html>

<!-- chartjs configurations -->
<script>
fetch('./php/analytics_monthly_fg_produced.php')
.then(response => response.json())
.then(data => {
    var ctx = document.getElementById('fgMonthlyChart').getContext('2d');

    var myLineChart1 = new Chart(ctx, {
    type: 'line',
    data: {
        datasets: data, 
    },
    options: {
        scales: {
            x: {
        grid: {
            display: true,           // Set to true to show x-axis grid lines
        },
        ticks: {
            color: 'black',           // X-axis label color
            beginAtZero: true
        },            
    },
        y: {
            grid: {
                display: true,            // Set to true to show y-axis grid lines
                borderWidth: 1,           // Width of the grid lines
                drawBorder: false,        // Set to true to draw a border around the chart
                drawOnChartArea: true,    // Set to true to draw grid lines on the chart area
                drawTicks: false,         // Set to true to draw ticks on the grid lines
            },
            ticks: {
            color: 'black',           // Y-axis label color
            },
        }
        },
        elements: {
            line: {
                tension: 0.2  // Adjust the tension value here (0 = straight lines, 1 = very curved lines)
            }
        }
        }
    });
})
.catch(error => {
    console.error('Error fetching data:', error);
});

fetch('./php/analytics_monthly_p_ship.php')
.then(response => response.json())
.then(data => {
    var ctx = document.getElementById('pMonthlyChart').getContext('2d');

    var myLineChart2 = new Chart(ctx, {
    type: 'line',
    data: {
        datasets: data, 
    },
    options: {
        scales: {
            x: {
        grid: {
            display: true,           // Set to true to show x-axis grid lines
        },
        ticks: {
            color: 'black',           // X-axis label color
            beginAtZero: true
        },            
    },
        y: {
            grid: {
                display: true,            // Set to true to show y-axis grid lines
                borderWidth: 1,           // Width of the grid lines
                drawBorder: false,        // Set to true to draw a border around the chart
                drawOnChartArea: true,    // Set to true to draw grid lines on the chart area
                drawTicks: false,         // Set to true to draw ticks on the grid lines
            },
            ticks: {
            color: 'black',           // Y-axis label color
            },
        }
        },
        elements: {
            line: {
                tension: 0.2  // Adjust the tension value here (0 = straight lines, 1 = very curved lines)
            }
        }
        }
    });
})
.catch(error => {
    console.error('Error fetching data:', error);
});


fetch('./php/analytics_client.php')
.then(response => response.json())
.then(data => {
    const labels = data.map(entry => entry.client_company);
    const quantities = data.map(entry => entry.total_quantity);

    const randomColor = () => {
let r, g, b;
do {
    r = Math.floor(Math.random() * 128); // Limit the range to generate darker colors
    g = Math.floor(Math.random() * 128);
    b = Math.floor(Math.random() * 128);
} while (r + g + b > 128); // Ensure the combined RGB value is below a certain threshold to generate dark colors
const alpha = Math.random() * 0.9; // Generate random alpha value between 0 and 0.9
return `rgba(${r}, ${g}, ${b}, ${alpha})`; // Use rgba format to include alpha value
};


// Generate random colors for each bar
const backgroundColors = labels.map(() => randomColor());

const ctx = document.getElementById('clientChart').getContext('2d');
    const clientChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [{
                label: 'Shipped Count (pcs)',
                data: quantities,
                backgroundColor: backgroundColors, // Use the generated random colors
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            },
            plugins: {
                legend: {
                    display: false
                }
            }
        }
    });
})
.catch(error => {
    console.error('Error fetching data:', error);
});


fetch('./php/analytics_report_daily.php')
.then(response => response.json())
.then(data => {

    // Summing up the total quantities for both categories
    const total_rm = data.reduce((acc, entry) => acc + parseInt(entry.total_rm), 0);
    const total_fg = data.reduce((acc, entry) => acc + parseInt(entry.total_fg), 0);

    const ctx = document.getElementById('dailyReportChart').getContext('2d');
    const dailyReportChart = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ["RM Used (kg)", "FG Produced (pcs)"],
            datasets: [{
                data: [total_rm, total_fg], // Ensure these variables are correctly defined and hold numeric values
                backgroundColor: ["#FF6384", "#36A2EB"],
                borderWidth: 1
            }]
        },
        options: {
            plugins: {
                legend: {
                    display: true // Hides the legend
                },
                tooltip: {
                    enabled: true // Disables tooltips
                }
            }
        }
    });
})
.catch(error => {
    console.error('Error fetching data:', error);
});


fetch('./php/analytics_report_monthly.php')
.then(response => response.json())
.then(data => {

    // Summing up the total quantities for both categories
    const total_fg = data.reduce((acc, entry) => acc + parseInt(entry.total_fg), 0);
    const total_p = data.reduce((acc, entry) => acc + parseInt(entry.total_p), 0);

    const ctx = document.getElementById('monthlyReportChart').getContext('2d');
    const dailyReportChart = new Chart(ctx, {
        type: 'pie',
        data: {
            labels: ["FG Produced (pcs)", "Products Ship (pcs)"],
            datasets: [{
                data: [total_fg, total_p], // Ensure these variables are correctly defined and hold numeric values
                backgroundColor: ["#FF6384", "#36A2EB"],
                borderWidth: 1
            }]
        },
        options: {
            plugins: {
                legend: {
                    display: true // Hides the legend
                },
                tooltip: {
                    enabled: true // Disables tooltips
                }
            }
        }
    });
})
.catch(error => {
    console.error('Error fetching data:', error);
});


fetch('./php/analytics_report_client.php')
.then(response => response.json())
.then(data => {
    const labels = data.map(entry => entry.client_company);
    const quantities = data.map(entry => entry.total_shipped_quantity);

    const randomColor = () => {
let r, g, b;
do {
    r = Math.floor(Math.random() * 128); // Limit the range to generate darker colors
    g = Math.floor(Math.random() * 128);
    b = Math.floor(Math.random() * 128);
} while (r + g + b > 128); // Ensure the combined RGB value is below a certain threshold to generate dark colors
const alpha = Math.random() * 0.9; // Generate random alpha value between 0 and 0.9
return `rgba(${r}, ${g}, ${b}, ${alpha})`; // Use rgba format to include alpha value
};


// Generate random colors for each bar
const backgroundColors = labels.map(() => randomColor());

const ctx = document.getElementById('clientReportChart').getContext('2d');
    const clientChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [{
                label: 'Shipped Count (pcs)',
                data: quantities,
                backgroundColor: backgroundColors, // Use the generated random colors
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                   display: false
                }
            },
            plugins: {
                legend: {
                    display: true
                }
            }
        }
    });
})
.catch(error => {
    console.error('Error fetching data:', error);
});


</script>
                   