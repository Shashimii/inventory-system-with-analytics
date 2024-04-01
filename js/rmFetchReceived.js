$(function(){
    let tableRow = '';
    let searchFilter = '';
    let searchKey = '';

    function recieveTableData() {
        $.ajax({
            url: './php/rm_received_data.php', // php script
            method: 'GET',

            success: function(response) {
                // process the response
                switch (searchFilter) { // search filter function
                    case 'date': // filter name
                    var filteredResponse = response.filter(function(item) { // filter function
                        return typeof item.action_date === 'string' && item.action_date.toLowerCase().includes(searchKey.toLowerCase()); // return filtered results based on searchkey
                    });
                    
                    $('#receiveTable tbody').empty(); // remove any existing table rows
    
                    if (filteredResponse.length === 0) { // if no results display nothing matched message
                        tableRow = '<tr>'; 
                        tableRow += '<td colspan="8"style="text-align: center;">' + 'There is No Data' + '</td>';
                        tableRow += '</tr>';
                        $('#receiveTable').append(tableRow);
                    } else { // else display the results
                        filteredResponse.forEach(function(item) { 
                            tableRow = '<tr>';
                            tableRow += '<td>' + item.action_date + '</td>';
                            tableRow += '<td>' + item.item_name + '</td>';
                            tableRow += '<td>' + item.item_desc + '</td>';
                            tableRow += '<td>' + item.item_id + '</td>';
                            tableRow += '<td>' + item.item_lot + '</td>';
                            tableRow += '<td>' + item.item_bin + '</td>';
                            tableRow += '<td>' + item.quantity_receive + ' KG</td>';
                            tableRow += '<td class="action-btn">'; 
                            tableRow += '<button id="useInProduction" data-bs-toggle="modal" data-bs-target="#rmInProductionModal" data-date="'+ item.action_date +'" data-name="'+ item.item_name +'" data-desc="'+ item.item_desc +'" data-id="'+ item.item_id +'" data-lot="'+ item.item_lot +'" data-bin="'+ item.item_bin +'" data-quantity="'+ item.quantity_receive +'" class="btn btn-warning btn-sm"><i class="fa-solid fa-arrow-right"></i> Use in Production</button>';
                            tableRow += ' ';
                            tableRow += '<button id="adjReceivedQuantity" data-bs-toggle="modal" data-bs-target="#rmAdjReceivedModal" data-date="'+ item.action_date +'" data-name="'+ item.item_name +'" data-desc="'+ item.item_desc +'" data-id="'+ item.item_id +'" data-lot="'+ item.item_lot +'" data-bin="'+ item.item_bin +'" data-quantity="'+ item.quantity_receive +'" class="btn btn-info btn-sm"><i class="fa-solid fa-pen-to-square"></i> Adjust Quantity</button>';
                            tableRow += '</td>';
                            tableRow += '</tr>';
                            $('#receiveTable').append(tableRow); // appends on the table 
                        })
                    }
                    break;

                    case 'name': // filter name
                        var filteredResponse = response.filter(function(item) { // filter function
                            return typeof item.item_name === 'string' && item.item_name.toLowerCase().includes(searchKey.toLowerCase()); // return filtered results based on searchkey
                        });
                        
                        $('#receiveTable tbody').empty(); // remove any existing table rows
        
                        if (filteredResponse.length === 0) { // if no results display nothing matched message
                            tableRow = '<tr>'; 
                            tableRow += '<td colspan="8"style="text-align: center;">' + 'There is No Data' + '</td>';
                            tableRow += '</tr>';
                            $('#receiveTable').append(tableRow);
                        } else { // else display the results
                            filteredResponse.forEach(function(item) { 
                                tableRow = '<tr>';
                                tableRow += '<td>' + item.action_date + '</td>';
                                tableRow += '<td>' + item.item_name + '</td>';
                                tableRow += '<td>' + item.item_desc + '</td>';
                                tableRow += '<td>' + item.item_id + '</td>';
                                tableRow += '<td>' + item.item_lot + '</td>';
                                tableRow += '<td>' + item.item_bin + '</td>';
                                tableRow += '<td>' + item.quantity_receive + ' KG</td>';
                                tableRow += '<td class="action-btn">'; 
                                tableRow += '<button id="useInProduction" data-bs-toggle="modal" data-bs-target="#rmInProductionModal" data-date="'+ item.action_date +'" data-name="'+ item.item_name +'" data-desc="'+ item.item_desc +'" data-id="'+ item.item_id +'" data-lot="'+ item.item_lot +'" data-bin="'+ item.item_bin +'" data-quantity="'+ item.quantity_receive +'" class="btn btn-warning btn-sm"><i class="fa-solid fa-arrow-right"></i> Use in Production</button>';
                                tableRow += ' ';
                                tableRow += '<button id="adjReceivedQuantity" data-bs-toggle="modal" data-bs-target="#rmAdjReceivedModal" data-date="'+ item.action_date +'" data-name="'+ item.item_name +'" data-desc="'+ item.item_desc +'" data-id="'+ item.item_id +'" data-lot="'+ item.item_lot +'" data-bin="'+ item.item_bin +'" data-quantity="'+ item.quantity_receive +'" class="btn btn-info btn-sm"><i class="fa-solid fa-pen-to-square"></i> Adjust Quantity</button>';
                                tableRow += '</td>';
                                tableRow += '</tr>';
                                $('#receiveTable').append(tableRow); // appends on the table 
                            })
                        }
                        break;

                    case 'desc':
                        var filteredResponse = response.filter(function(item) {
                            return typeof item.item_desc === 'string' && item.item_desc.toLowerCase().includes(searchKey.toLowerCase());
                        });
                        
                        $('#receiveTable tbody').empty(); // remove any existing table rows
        
                        if (filteredResponse.length === 0) {
                            tableRow = '<tr>'; 
                            tableRow += '<td colspan="8"style="text-align: center;">' + 'There is No Data' + '</td>';
                            tableRow += '</tr>';
                            $('#receiveTable').append(tableRow);
                        } else {
                            filteredResponse.forEach(function(item) {
                                tableRow = '<tr>';
                                tableRow += '<td>' + item.action_date + '</td>';
                                tableRow += '<td>' + item.item_name + '</td>';
                                tableRow += '<td>' + item.item_desc + '</td>';
                                tableRow += '<td>' + item.item_id + '</td>';
                                tableRow += '<td>' + item.item_lot + '</td>';
                                tableRow += '<td>' + item.item_bin + '</td>';
                                tableRow += '<td>' + item.quantity_receive + ' KG</td>';
                                tableRow += '<td class="action-btn">'; 
                                tableRow += '<button id="useInProduction" data-bs-toggle="modal" data-bs-target="#rmInProductionModal" data-date="'+ item.action_date +'" data-name="'+ item.item_name +'" data-desc="'+ item.item_desc +'" data-id="'+ item.item_id +'" data-lot="'+ item.item_lot +'" data-bin="'+ item.item_bin +'" data-quantity="'+ item.quantity_receive +'" class="btn btn-warning btn-sm"><i class="fa-solid fa-arrow-right"></i> Use in Production</button>';
                                tableRow += ' ';
                                tableRow += '<button id="adjReceivedQuantity" data-bs-toggle="modal" data-bs-target="#rmAdjReceivedModal" data-date="'+ item.action_date +'" data-name="'+ item.item_name +'" data-desc="'+ item.item_desc +'" data-id="'+ item.item_id +'" data-lot="'+ item.item_lot +'" data-bin="'+ item.item_bin +'" data-quantity="'+ item.quantity_receive +'" class="btn btn-info btn-sm"><i class="fa-solid fa-pen-to-square"></i> Adjust Quantity</button>';
                                tableRow += '</td>';
                                tableRow += '</tr>';
                                $('#receiveTable').append(tableRow);
                            })
                        }
                        break;

                    case 'id':
                        var filteredResponse = response.filter(function(item) {
                            return typeof item.item_id === 'string' && item.item_id.toLowerCase().includes(searchKey.toLowerCase());
                        });
                        
                        $('#receiveTable tbody').empty(); // remove any existing table rows
        
                        if (filteredResponse.length === 0) {
                            tableRow = '<tr>'; 
                            tableRow += '<td colspan="8"style="text-align: center;">' + 'There is No Data' + '</td>';
                            tableRow += '</tr>';
                            $('#receiveTable').append(tableRow);
                        } else {
                            filteredResponse.forEach(function(item) {
                                tableRow = '<tr>';
                                tableRow += '<td>' + item.action_date + '</td>';
                                tableRow += '<td>' + item.item_name + '</td>';
                                tableRow += '<td>' + item.item_desc + '</td>';
                                tableRow += '<td>' + item.item_id + '</td>';
                                tableRow += '<td>' + item.item_lot + '</td>';
                                tableRow += '<td>' + item.item_bin + '</td>';
                                tableRow += '<td>' + item.quantity_receive + ' KG</td>';
                                tableRow += '<td class="action-btn">'; 
                                tableRow += '<button id="useInProduction" data-bs-toggle="modal" data-bs-target="#rmInProductionModal" data-date="'+ item.action_date +'" data-name="'+ item.item_name +'" data-desc="'+ item.item_desc +'" data-id="'+ item.item_id +'" data-lot="'+ item.item_lot +'" data-bin="'+ item.item_bin +'" data-quantity="'+ item.quantity_receive +'" class="btn btn-warning btn-sm"><i class="fa-solid fa-arrow-right"></i> Use in Production</button>';
                                tableRow += ' ';
                                tableRow += '<button id="adjReceivedQuantity" data-bs-toggle="modal" data-bs-target="#rmAdjReceivedModal" data-date="'+ item.action_date +'" data-name="'+ item.item_name +'" data-desc="'+ item.item_desc +'" data-id="'+ item.item_id +'" data-lot="'+ item.item_lot +'" data-bin="'+ item.item_bin +'" data-quantity="'+ item.quantity_receive +'" class="btn btn-info btn-sm"><i class="fa-solid fa-pen-to-square"></i> Adjust Quantity</button>';
                                tableRow += '</td>';
                                tableRow += '</tr>';
                                $('#receiveTable').append(tableRow);
                            })
                        }
                        break;

                    case 'lot':
                        var filteredResponse = response.filter(function(item) {
                            return typeof item.item_lot === 'string' && item.item_lot.toLowerCase().includes(searchKey.toLowerCase());
                        });
                        
                        $('#receiveTable tbody').empty(); // remove any existing table rows
        
                        if (filteredResponse.length === 0) {
                            tableRow = '<tr>'; 
                            tableRow += '<td colspan="8"style="text-align: center;">' + 'There is No Data' + '</td>';
                            tableRow += '</tr>';
                            $('#receiveTable').append(tableRow);
                        } else {
                            filteredResponse.forEach(function(item) {
                                tableRow = '<tr>';
                                tableRow += '<td>' + item.action_date + '</td>';
                                tableRow += '<td>' + item.item_name + '</td>';
                                tableRow += '<td>' + item.item_desc + '</td>';
                                tableRow += '<td>' + item.item_id + '</td>';
                                tableRow += '<td>' + item.item_lot + '</td>';
                                tableRow += '<td>' + item.item_bin + '</td>';
                                tableRow += '<td>' + item.quantity_receive + ' KG</td>';
                                tableRow += '<td class="action-btn">'; 
                                tableRow += '<button id="useInProduction" data-bs-toggle="modal" data-bs-target="#rmInProductionModal" data-date="'+ item.action_date +'" data-name="'+ item.item_name +'" data-desc="'+ item.item_desc +'" data-id="'+ item.item_id +'" data-lot="'+ item.item_lot +'" data-bin="'+ item.item_bin +'" data-quantity="'+ item.quantity_receive +'" class="btn btn-warning btn-sm"><i class="fa-solid fa-arrow-right"></i> Use in Production</button>';
                                tableRow += ' ';
                                tableRow += '<button id="adjReceivedQuantity" data-bs-toggle="modal" data-bs-target="#rmAdjReceivedModal" data-date="'+ item.action_date +'" data-name="'+ item.item_name +'" data-desc="'+ item.item_desc +'" data-id="'+ item.item_id +'" data-lot="'+ item.item_lot +'" data-bin="'+ item.item_bin +'" data-quantity="'+ item.quantity_receive +'" class="btn btn-info btn-sm"><i class="fa-solid fa-pen-to-square"></i> Adjust Quantity</button>';
                                tableRow += '</td>';
                                tableRow += '</tr>';
                                $('#receiveTable').append(tableRow);
                            })
                        }
                        break;

                    case 'bin':
                        var filteredResponse = response.filter(function(item) {
                            return typeof item.item_bin === 'string' && item.item_bin.toLowerCase().includes(searchKey.toLowerCase());
                        });
                        
                        $('#receiveTable tbody').empty(); // remove any existing table rows
        
                        if (filteredResponse.length === 0) {
                            tableRow = '<tr>'; 
                            tableRow += '<td colspan="8"style="text-align: center;">' + 'There is No Data' + '</td>';
                            tableRow += '</tr>';
                            $('#receiveTable').append(tableRow);
                        } else {
                            filteredResponse.forEach(function(item) {
                                tableRow = '<tr>';
                                tableRow += '<td>' + item.action_date + '</td>';
                                tableRow += '<td>' + item.item_name + '</td>';
                                tableRow += '<td>' + item.item_desc + '</td>';
                                tableRow += '<td>' + item.item_id + '</td>';
                                tableRow += '<td>' + item.item_lot + '</td>';
                                tableRow += '<td>' + item.item_bin + '</td>';
                                tableRow += '<td>' + item.quantity_receive + ' KG</td>';
                                tableRow += '<td class="action-btn">'; 
                                tableRow += '<button id="useInProduction" data-bs-toggle="modal" data-bs-target="#rmInProductionModal" data-date="'+ item.action_date +'" data-name="'+ item.item_name +'" data-desc="'+ item.item_desc +'" data-id="'+ item.item_id +'" data-lot="'+ item.item_lot +'" data-bin="'+ item.item_bin +'" data-quantity="'+ item.quantity_receive +'" class="btn btn-warning btn-sm"><i class="fa-solid fa-arrow-right"></i> Use in Production</button>';
                                tableRow += ' ';
                                tableRow += '<button id="adjReceivedQuantity" data-bs-toggle="modal" data-bs-target="#rmAdjReceivedModal" data-date="'+ item.action_date +'" data-name="'+ item.item_name +'" data-desc="'+ item.item_desc +'" data-id="'+ item.item_id +'" data-lot="'+ item.item_lot +'" data-bin="'+ item.item_bin +'" data-quantity="'+ item.quantity_receive +'" class="btn btn-info btn-sm"><i class="fa-solid fa-pen-to-square"></i> Adjust Quantity</button>';
                                tableRow += '</td>';
                                tableRow += '</tr>';
                                $('#receiveTable').append(tableRow);
                            })
                        }
                        break;

                    case 'quantity':
                        var filteredResponse = response.filter(function(item) {
                            return item.quantity_receive !== null && item.quantity_receive.toString().includes(searchKey);
                        });
                        
                        $('#receiveTable tbody').empty(); // remove any existing table rows
        
                        if (filteredResponse.length === 0) {
                            tableRow = '<tr>'; 
                            tableRow += '<td colspan="8"style="text-align: center;">' + 'There is No Data' + '</td>';
                            tableRow += '</tr>';
                            $('#receiveTable').append(tableRow);
                        } else {
                            filteredResponse.forEach(function(item) {
                                tableRow = '<tr>';
                                tableRow += '<td>' + item.action_date + '</td>';
                                tableRow += '<td>' + item.item_name + '</td>';
                                tableRow += '<td>' + item.item_desc + '</td>';
                                tableRow += '<td>' + item.item_id + '</td>';
                                tableRow += '<td>' + item.item_lot + '</td>';
                                tableRow += '<td>' + item.item_bin + '</td>';
                                tableRow += '<td>' + item.quantity_receive + ' KG</td>';
                                tableRow += '<td class="action-btn">'; 
                                tableRow += '<button id="useInProduction" data-bs-toggle="modal" data-bs-target="#rmInProductionModal" data-date="'+ item.action_date +'" data-name="'+ item.item_name +'" data-desc="'+ item.item_desc +'" data-id="'+ item.item_id +'" data-lot="'+ item.item_lot +'" data-bin="'+ item.item_bin +'" data-quantity="'+ item.quantity_receive +'" class="btn btn-warning btn-sm"><i class="fa-solid fa-arrow-right"></i> Use in Production</button>';
                                tableRow += ' ';
                                tableRow += '<button id="adjReceivedQuantity" data-bs-toggle="modal" data-bs-target="#rmAdjReceivedModal" data-date="'+ item.action_date +'" data-name="'+ item.item_name +'" data-desc="'+ item.item_desc +'" data-id="'+ item.item_id +'" data-lot="'+ item.item_lot +'" data-bin="'+ item.item_bin +'" data-quantity="'+ item.quantity_receive +'" class="btn btn-info btn-sm"><i class="fa-solid fa-pen-to-square"></i> Adjust Quantity</button>';
                                tableRow += '</td>';
                                tableRow += '</tr>';
                                $('#receiveTable').append(tableRow);
                            })
                        }
                        break;

                    default:
                    var filteredResponse = response.filter(function(item) {
                        return Object.values(item).some(value => {
                            if (typeof value === 'string') {
                                return value.toLowerCase().includes(searchKey.toLowerCase());
                            } else if (typeof value === 'number') {
                                return value.toString().includes(searchKey);
                            }
                        });
                        // return item.item_name.includes('B');
                    });
                    
                    $('#receiveTable tbody').empty(); // remove any existing table rows
    
                    if (filteredResponse.length === 0) {
                        tableRow = '<tr>'; 
                        tableRow += '<td colspan="8"style="text-align: center;">' + 'There is No Data' + '</td>';
                        tableRow += '</tr>';
                        $('#receiveTable').append(tableRow);
                    } else {
                        filteredResponse.forEach(function(item) {
                            tableRow = '<tr>';
                            tableRow += '<td>' + item.action_date + '</td>';
                            tableRow += '<td>' + item.item_name + '</td>';
                            tableRow += '<td>' + item.item_desc + '</td>';
                            tableRow += '<td>' + item.item_id + '</td>';
                            tableRow += '<td>' + item.item_lot + '</td>';
                            tableRow += '<td>' + item.item_bin + '</td>';
                            tableRow += '<td>' + item.quantity_receive + ' KG</td>';
                            tableRow += '<td class="action-btn">'; 
                            tableRow += '<button id="useInProduction" data-bs-toggle="modal" data-bs-target="#rmInProductionModal" data-date="'+ item.action_date +'" data-name="'+ item.item_name +'" data-desc="'+ item.item_desc +'" data-id="'+ item.item_id +'" data-lot="'+ item.item_lot +'" data-bin="'+ item.item_bin +'" data-quantity="'+ item.quantity_receive +'" class="btn btn-warning btn-sm"><i class="fa-solid fa-arrow-right"></i> Use in Production</button>';
                            tableRow += ' ';
                            tableRow += '<button id="adjReceivedQuantity" data-bs-toggle="modal" data-bs-target="#rmAdjReceivedModal" data-date="'+ item.action_date +'" data-name="'+ item.item_name +'" data-desc="'+ item.item_desc +'" data-id="'+ item.item_id +'" data-lot="'+ item.item_lot +'" data-bin="'+ item.item_bin +'" data-quantity="'+ item.quantity_receive +'" class="btn btn-info btn-sm"><i class="fa-solid fa-pen-to-square"></i> Adjust Quantity</button>';
                            tableRow += '</td>';
                            tableRow += '</tr>';
                            $('#receiveTable').append(tableRow);
                        })
                    }
                }
            },
            error: function(xhr, status, error) {
                console.error(xhr.responseText); // Log the error to the console
            }
        })
    }
    recieveTableData(); // initial table rows display

    //attached to the document instead of element for listening to dynamic rendering
    // search filter listener
    $(document).on('change', '#recSearchFilter', function(){
        searchFilter = $(this).val();
        recieveTableData(); // display search results
    })
    // searchbar listener
    $(document).on('input', '#recSearch', function() { // triggers on input
        searchKey = $(this).val(); // get search keyword from input field #recSearch
        recieveTableData(); // display search results
    });
    // show received table listener
    $(document).on('click', '#renderReceive', function(){
        searchKey = ''; // clear the searchKey to reset the table contents
        recieveTableData(); // display data list
    })

    // button for In Production
    $(document).on('click', '#useInProduction', function() {
        // attached data from button assigned to variable
        var actionDate = $(this).data('date');
        var itemName = $(this).data('name');
        var itemDesc = $(this).data('desc');
        var itemId = $(this).data('id');
        var itemLot = $(this).data('lot');
        var itemBin = $(this).data('bin');
        var quantityReceive = $(this).data('quantity'); 

        // modal data vizualization
        $('#rmInProductionModal p#itemInfoDate').text(actionDate);
        $('#rmInProductionModal h1#itemInfoName').text(itemName);
        $('#rmInProductionModal h3#itemInfoQuantity').text(quantityReceive + ' KG');
        $('#rmInProductionModal p#itemInfoLot').text(itemLot);
        $('#rmInProductionModal p#itemInfoDesc').text(itemDesc);
        $('#rmInProductionModal p#itemInfoId').text(itemId);
        $('#rmInProductionModal p#itemInfoBin').text(itemBin);

        // data attached to the modal to be used
        $('#rmInProductionModal #itemName').val(itemName);
        $('#rmInProductionModal #itemDesc').val(itemDesc);
        $('#rmInProductionModal #itemId').val(itemId);
        $('#rmInProductionModal #itemLot').val(itemLot);
        $('#rmInProductionModal #itemBin').val(itemBin);
        $('#rmInProductionModal #quantityReceive').val(quantityReceive);
    });

    // button for adjusting quantity
    $(document).on('click', '#adjReceivedQuantity', function() {
        // attached data from button assigned to variable
        var actionDate = $(this).data('date');
        var itemName = $(this).data('name');
        var itemDesc = $(this).data('desc');
        var itemId = $(this).data('id');
        var itemLot = $(this).data('lot');
        var itemBin = $(this).data('bin');
        var quantityReceive = $(this).data('quantity'); 

        // modal data vizualization
        $('#rmAdjReceivedModal p#itemInfoDate').text(actionDate);
        $('#rmAdjReceivedModal h1#itemInfoName').text(itemName);
        $('#rmAdjReceivedModal h3#itemInfoQuantity').text(quantityReceive + ' KG');
        $('#rmAdjReceivedModal p#itemInfoLot').text(itemLot);
        $('#rmAdjReceivedModal p#itemInfoDesc').text(itemDesc);
        $('#rmAdjReceivedModal p#itemInfoId').text(itemId);
        $('#rmAdjReceivedModal p#itemInfoBin').text(itemBin);

        // data attached to the modal to be used
        $('#rmAdjReceivedModal #itemNameAdj').val(itemName);
        $('#rmAdjReceivedModal #itemIdAdj').val(itemId);
        $('#rmAdjReceivedModal #quantityReceive').val(quantityReceive);
    });
})