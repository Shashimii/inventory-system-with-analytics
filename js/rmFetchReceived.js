$(function(){ 
    let tableData = []; // array of holding the data from php
    let searchFilter = ''; // filtered by selected column
    let searchKey = ''; // user search keyword
    let pageNumber = 1; // starting page number 
    let pageSize = 10; // rows every page 

    function tableFunctions() {
        // function that will fetch the dataset
        function preloadTableData() {
            $.ajax({
                url: './php/rm_received_data.php', // php script that will query the dataset
                method: 'GET', // GET the response (dataset)
                success: function(response) {
                    tableData = response; // stores the response -> tableData array variable
                    receiveTableData(); // displays the table with the start of the tableData array (dataset)

                    // hide the undo button if there is no data
                    if (tableData.length === 0) { 
                        $('#undoReceive').hide();
                    }
                },
                error: function(xhr, status, error) {
                    console.error(xhr.responseText); // error logging -> console
                }
            });
        }
        
        // function that will use and display tableData array to the table
        function receiveTableData() {
            // filtering method before displaying
            let filteredResponse = tableData; // assign the tableData to filteredResponse variable for more understandable processing
            // filter by...
            if (searchKey !== '') { // if searchKey is not blank
                switch (searchFilter) { // switch cases for searchFilter
                    case 'date': // if the selected filter is date 
                        filteredResponse = tableData.filter(item => item.action_date.toLowerCase().includes(searchKey.toLowerCase()));
                        break;
                    case 'desc': // if the selected filter is desc 
                        filteredResponse = tableData.filter(item => item.item_desc.toLowerCase().includes(searchKey.toLowerCase()));
                        break;
                    case 'id': // if the selected filter is id 
                        filteredResponse = tableData.filter(item => item.item_id.toLowerCase().includes(searchKey.toLowerCase()));
                        break;
                    case 'lot': // if the selected filter is lot 
                        filteredResponse = tableData.filter(item => item.item_lot.toLowerCase().includes(searchKey.toLowerCase()));
                        break;
                    case 'bin': // if the selected filter is bin 
                        filteredResponse = tableData.filter(item => item.item_bin.toLowerCase().includes(searchKey.toLowerCase()));
                        break;
                    case 'quantity': // if the selected filter is quantity 
                        filteredResponse = tableData.filter(item => item.quantity_receive.toString().includes(searchKey));
                        break;
                    default:
                        // if no filter selected search by item lot bin combined
                        filteredResponse = tableData.filter(item => `${item.item_id} ${item.item_lot} ${item.item_bin}`.toLocaleLowerCase().includes(searchKey.toLowerCase()));
                        break;
                };
            };


            // pagination method
            // computes the number of rows per page to be displayed
            let startIndex = (pageNumber - 1) * pageSize; // start of the index of row = PageNumber - 1 * pageSize
            let endIndex = startIndex + pageSize; // end of the index of row = startIndex + pageSize
            // assign the filteredResponse (dataset) -> pageData then slice the dataset array /startIndex [row], [row], [row] endIndex/
            let pageData = filteredResponse.slice(startIndex, endIndex);

            // clear the existing rows before displaying the rows
            $('#receiveTable tbody').empty(); 

            // if the length of the array is 0 meaning there is no data
            if (pageData.length === 0) {
                tableRow = '<tr>';
                tableRow += '<td colspan="7" style="text-align: center;">There is No Data</td>'; // show this message
                tableRow += '</tr>';
                $('#receiveTable').append(tableRow);
            } else {
                // if there is data display it
                pageData.forEach(function(item) { // for each row on the array
                    $('#receiveTable tbody').append( // append it to body of the table
                        '<tr>' +
                            '<td>' + item.action_date + '</td>' +
                            '<td>' + item.item_desc + '</td>' +
                            '<td class="table-primary">' + item.item_id + '</td>' +
                            '<td>' + item.item_lot + '</td>' +
                            '<td>' + item.item_bin + '</td>' +
                            '<td class="table-success">' + item.quantity_receive + ' kg</td>' +
                            '<td class="action-btn">' + // actions buttons with attached data of every rows on the button
                                '<button id="useInProduction" data-bs-toggle="modal" data-bs-target="#rmInProductionModal" data-date="' + item.action_date + '" data-name="' + item.item_name + '" data-desc="' + item.item_desc + '" data-id="' + item.item_id + '" data-lot="' + item.item_lot + '" data-bin="' + item.item_bin + '" data-quantity="' + item.quantity_receive + '" class="btn btn-warning btn-sm"><i class="fa-solid fa-arrow-right"></i> Use in Production</button>' +
                                ' ' +
                                //'<button id="adjReceivedQuantity" data-bs-toggle="modal" data-bs-target="#rmAdjReceivedModal" data-date="' + item.action_date + '" data-name="' + item.item_name + '" data-desc="' + item.item_desc + '" data-id="' + item.item_id + '" data-lot="' + item.item_lot + '" data-bin="' + item.item_bin + '" data-quantity="' + item.quantity_receive + '" class="btn btn-info btn-sm"><i class="fa-solid fa-pen-to-square"></i> Adjust Quantity</button>' +
                            '</td>' +
                        '</tr>'
                    );
                });
            }

            // generate pagination numbers attaching the length of the dataset to it
            generatePagination(filteredResponse.length);
        }

        // function for pagination buttons
        function generatePagination(totalItems) { // totalItems -> filteredResponse.length 
            let pagination = $('#receivedTablePagination'); // id of the target div to pagination will be displayed
            pagination.empty(); // empty it first before displaying
            let totalPages = Math.ceil(totalItems / pageSize); // compute for totalPages = totalItems / pageSize

            if (pageNumber > 1) {
                let prevButton = $('<li><a href="#" id="prev"><i class="fa-solid fa-angle-left" style="padding: 5px 0;"></i></a></li>'); // previous button
                pagination.append(prevButton); // appended to pagination
            }

            // compute to ensure 5 buttons at a time will be generated
            let startNumber = Math.max(pageNumber - 2, 1);  // startNumber = pageNumber - 2
            let endNumber = Math.min(startNumber + 4, totalPages); // endNumber = startNumber + 4 = 5

            for (let i = startNumber; i <= endNumber; i++) { // loop while the i is less or equal to total page then increment i
                let li = $('<li></li>'); // <li>
                let a = $('<a href="#">' + i + '</a>'); // <a> with i = number of the pages
                if (i === pageNumber) { // i === current page number
                    li.addClass('active'); // set it active
                }
                li.append(a); // append <a> to <li>
                pagination.append(li); // append <li> with <a> to pagination div
            }

            if (pageNumber < totalPages) {
                let nextButton = $('<li><a href="#" id="next"><i class="fa-solid fa-angle-right" style="padding: 5px 0;"></i></a></li>'); // next button
                pagination.append(nextButton); // appended to pagination
            }
        }
        
        // event listener for pagination clicks
        $('#receivedTablePagination').on('click', 'a', function(event) { // <a> must be clicked
            event.preventDefault(); // prevent default <a href> refresh event
            let targetPage; // selected page
            let currentPage = parseInt($('#receivedTablePagination .active a').text()); // current page
            if ($(this).attr('id') === 'prev') { // if the prev button clicked
                targetPage = Math.max(currentPage - 1, 1); // currentPage - 1 if the result of this is 0 it will be 1
            } else if ($(this).attr('id') === 'next') { // if the next button clicked
                targetPage = Math.min(currentPage + 1, Math.ceil(tableData.length / pageSize)); // current page + 1 and length / pageSize the minimum of this will be the targetPage
            } else { // number is clicked
                targetPage = parseInt($(this).text());  // number of the button will be target page
            }
            pageNumber = targetPage; // updates the value of the pageNumber -> targetPage
            receiveTableData(); // refreshes the table rows
        });

        // initialize the AJAX then call the display function
        preloadTableData();

        // attached to the document instead of element for listening to dynamic rendering
        // search filter listener
        $(document).on('change', '#recSearchFilter', function(){
            searchFilter = $(this).val();
            receiveTableData(); // display search results
        });

        // searchbar listener
        $(document).on('input', '#recSearch', function() { // triggers on input
            searchKey = $(this).val(); // get search keyword from input field #recSearch
            pageNumber = 1; // reset the current pageNumber to 1
            receiveTableData(); // display search results
        });
    }

    // initialize the table
    tableFunctions();

    // show received table listener
    $(document).on('click', '#renderReceive', function(){
        searchKey = ''; // clear the searchKey to reset the table contents
        tableFunctions(); // display data list
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
        $('#rmInProductionModal h3#itemInfoQuantity').text(quantityReceive + ' KG');
        $('#rmInProductionModal p#itemInfoLot').text(itemLot);
        $('#rmInProductionModal p#itemInfoDesc').text(itemDesc);
        $('#rmInProductionModal h2#itemInfoId').text(itemId);
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