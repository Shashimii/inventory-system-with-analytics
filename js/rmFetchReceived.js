$(function(){ 
    let tableData = []; // Array to hold the entire dataset
    let searchFilter = '';
    let searchKey = '';
    let pageNumber = 1; // Initial page number
    let pageSize = 8; // Number of items per page
    
    // Function to preload the dataset
    function preloadTableData() {
        $.ajax({
            url: './php/rm_received_data.php', // php script
            method: 'GET',
            success: function(response) {
                tableData = response; // Store the entire dataset
                receiveTableData(); // Display initial table
            },
            error: function(xhr, status, error) {
                console.error(xhr.responseText); // Log the error to the console
            }
        });
    }
    
// Function to receive and display table data
    function receiveTableData() {
    let filteredResponse = tableData; // Start with the entire dataset

    // Apply filtering if searchKey is present
    if (searchKey !== '') {
        if (searchFilter !== '') {
            switch (searchFilter) {
                case 'date':
                    filteredResponse = tableData.filter(item => item.action_date.toLowerCase().includes(searchKey.toLowerCase()));
                    break;
                case 'name':
                    filteredResponse = tableData.filter(item => item.item_name.toLowerCase().includes(searchKey.toLowerCase()));
                    break;
                case 'desc':
                    filteredResponse = tableData.filter(item => item.item_desc.toLowerCase().includes(searchKey.toLowerCase()));
                    break;
                case 'id':
                    filteredResponse = tableData.filter(item => item.item_id.toLowerCase().includes(searchKey.toLowerCase()));
                    break;
                case 'lot':
                    filteredResponse = tableData.filter(item => item.item_lot.toLowerCase().includes(searchKey.toLowerCase()));
                    break;
                case 'bin':
                    filteredResponse = tableData.filter(item => item.item_bin.toLowerCase().includes(searchKey.toLowerCase()));
                    break;
                case 'quantity':
                    filteredResponse = tableData.filter(item => item.quantity_receive.toString().includes(searchKey));
                    break;
                default:
                    // If an unknown filter is provided, use the entire dataset
                    break;
            }
        } else {
            // If no specific filter is selected, filter based on all fields
            filteredResponse = tableData.filter(item => {
                return Object.values(item).some(value => {
                    if (typeof value === 'string') {
                        return value.toLowerCase().includes(searchKey.toLowerCase());
                    } else if (typeof value === 'number') {
                        return value.toString().includes(searchKey);
                    }
                });
            });
        }
    }

    // Apply pagination
    let startIndex = (pageNumber - 1) * pageSize;
    let endIndex = startIndex + pageSize;
    let pageData = filteredResponse.slice(startIndex, endIndex);

    // Clear existing table rows
    $('#receiveTable tbody').empty();

    // Display filtered data or "No Data" message
    if (pageData.length === 0) {
        tableRow = '<tr>';
        tableRow += '<td colspan="8" style="text-align: center;">There is No Data</td>';
        tableRow += '</tr>';
        $('#receiveTable').append(tableRow);
    } else {
        pageData.forEach(function(item) {
            // Append table rows
            $('#receiveTable tbody').append(
                '<tr>' +
                    '<td>' + item.action_date + '</td>' +
                    '<td>' + item.item_name + '</td>' +
                    '<td>' + item.item_desc + '</td>' +
                    '<td>' + item.item_id + '</td>' +
                    '<td>' + item.item_lot + '</td>' +
                    '<td>' + item.item_bin + '</td>' +
                    '<td>' + item.quantity_receive + ' KG</td>' +
                    '<td class="action-btn">' +
                        '<button id="useInProduction" data-bs-toggle="modal" data-bs-target="#rmInProductionModal" data-date="' + item.action_date + '" data-name="' + item.item_name + '" data-desc="' + item.item_desc + '" data-id="' + item.item_id + '" data-lot="' + item.item_lot + '" data-bin="' + item.item_bin + '" data-quantity="' + item.quantity_receive + '" class="btn btn-warning btn-sm"><i class="fa-solid fa-arrow-right"></i> Use in Production</button>' +
                        ' ' +
                        '<button id="adjReceivedQuantity" data-bs-toggle="modal" data-bs-target="#rmAdjReceivedModal" data-date="' + item.action_date + '" data-name="' + item.item_name + '" data-desc="' + item.item_desc + '" data-id="' + item.item_id + '" data-lot="' + item.item_lot + '" data-bin="' + item.item_bin + '" data-quantity="' + item.quantity_receive + '" class="btn btn-info btn-sm"><i class="fa-solid fa-pen-to-square"></i> Adjust Quantity</button>' +
                    '</td>' +
                '</tr>'
            );
        });
    }

    // Generate pagination buttons
    generatePagination(filteredResponse.length);
}

    // Function to generate dynamic pagination buttons
    function generatePagination(totalItems) {
        let pagination = $('#pagination');
        pagination.empty();
        let totalPages = Math.ceil(totalItems / pageSize);
        let prevButton = $('<li><a id="prev">&laquo; Prev</a></li>');
        pagination.append(prevButton);

        for (let i = 1; i <= totalPages; i++) {
            let li = $('<li></li>');
            let a = $('<a>' + i + '</a>');
            if (i === pageNumber) {
                li.addClass('active');
            }
            li.append(a);
            pagination.append(li);
        }

        let nextButton = $('<li><a id="next">Next &raquo;</a></li>');
        pagination.append(nextButton);
    }
    
    // Event listener for pagination
    $('#pagination').on('click', 'a', function(event) {
        event.preventDefault();
        let targetPage;
        let currentPage = parseInt($('#pagination .active a').text());
        if ($(this).attr('id') === 'prev') {
            targetPage = Math.max(currentPage - 1, 1);
        } else if ($(this).attr('id') === 'next') {
            targetPage = Math.min(currentPage + 1, Math.ceil(tableData.length / pageSize));
        } else {
            targetPage = parseInt($(this).text());
        }
        pageNumber = targetPage; // Update pageNumber
        receiveTableData(); // Refresh table data
    });

    // Initial setup
    preloadTableData(); // Preload data and display initial table

    
    receiveTableData(); // initial table rows display
    

    // attached to the document instead of element for listening to dynamic rendering
    // search filter listener
    $(document).on('change', '#recSearchFilter', function(){
        searchFilter = $(this).val();
        receiveTableData(); // display search results
    });

    // searchbar listener
    $(document).on('input', '#recSearch', function() { // triggers on input
        searchKey = $(this).val(); // get search keyword from input field #recSearch
        receiveTableData(); // display search results
    });

    // show received table listener
    $(document).on('click', '#renderReceive', function(){
        searchKey = ''; // clear the searchKey to reset the table contents
        receiveTableData(); // display data list
    });

    receiveTableData(); // initial table rows display

    // Search filter listener
    $(document).on('change', '#recSearchFilter', function(){
        searchFilter = $(this).val();
        receiveTableData(); // Display search results
    });

    // Search bar listener
    $(document).on('input', '#recSearch', function() {
        searchKey = $(this).val(); // Get search keyword from input field #recSearch
        receiveTableData(); // Display search results
    });

    // Show received table listener
    $(document).on('click', '#renderReceive', function(){
        searchKey = ''; // Clear the searchKey to reset the table contents
        receiveTableData(); // Display data list
    });

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
});