$(function() {
    let tableData = [];
    let searchFilter = ''; 
    let searchKey = ''; 
    let pageNumber = 1; 
    let pageSize = 10; 

    function tableFunctions() {
        function preloadTableData() {
            $.ajax({
                url: './php/rm_inProduction_data.php', 
                method: 'GET',
                success: function(response) {
                    tableData = response; 
                    inProductionTableData(); 

                    if (tableData.length === 0) { 
                        $('#undoInProduction').hide();
                    }
                },
                error: function(xhr, status, error) {
                    console.error(xhr.responseText); 
                }
            });
        }
        

        function inProductionTableData() {
            let filteredResponse = tableData; 
            if (searchKey !== '') { 
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
                        filteredResponse = tableData.filter(item => item.quantity_inProduction.toString().includes(searchKey));
                        break;
                    default:
                        filteredResponse = tableData.filter(item => `${item.item_id} ${item.item_desc} ${item.item_lot} ${item.item_bin} ${item.action_date}`.toLocaleLowerCase().includes(searchKey.toLowerCase()));
                        break;
                };
            };



            let startIndex = (pageNumber - 1) * pageSize;
            let endIndex = startIndex + pageSize;
            let pageData = filteredResponse.slice(startIndex, endIndex);

            $('#inProductionTable tbody').empty(); 

            if (pageData.length === 0) {
                tableRow = '<tr>';
                tableRow += '<td colspan="7" style="text-align: center;">There is No Data</td>'; 
                tableRow += '</tr>';
                $('#inProductionTable').append(tableRow);
            } else {
                pageData.forEach(function(item) {
                    if (item.quantity_inProduction != 0) {
                        $('#inProductionTable tbody').append( 
                            '<tr>' +
                                '<td class="table-primary text-center">' + item.item_id + '</td>' +
                                '<td class="text-center">' + item.item_desc + '</td>' +
                                '<td class="text-center">' + item.item_lot + '</td>' +
                                '<td class="text-center">' + item.item_bin + '</td>' +
                                '<td class="text-center">' + item.action_date + '</td>' +
                                '<td class="text-center">' + item.quantity_inProduction.toLocaleString('en')  + ' kg</td>' +
                                '<td class="action-btn">' +
                                    '<button id="rawmatUse" data-bs-toggle="modal" data-bs-target="#rmUseModal" data-date="' + item.action_date + '" data-desc="' + item.item_desc + '" data-id="' + item.item_id + '" data-lot="' + item.item_lot + '" data-bin="' + item.item_bin + '" data-quantity="' + item.quantity_inProduction + '" class="btn btn-primary btn-sm"> Use Quantity</button>' +
                                    '<button hidden id="markAsDepleted" data-bs-toggle="modal" data-bs-target="#rmDepletedModal" data-date="' + item.action_date + '" data-desc="' + item.item_desc + '" data-id="' + item.item_id + '" data-lot="' + item.item_lot + '" data-bin="' + item.item_bin + '" data-quantity="' + item.quantity_inProduction + '" class="btn btn-secondary btn-sm"> Mark as Depleted</button>' +
                                '</td>' +
                            '</tr>'
                        );
                    } else {
                        $('#inProductionTable tbody').append( 
                                '<tr>' +
                                '<td class="table-primary text-center">' + item.item_id + '</td>' +
                                '<td class="text-center">' + item.item_desc + '</td>' +
                                '<td class="text-center">' + item.item_lot + '</td>' +
                                '<td class="text-center">' + item.item_bin + '</td>' +
                                '<td class="text-center">' + item.action_date + '</td>' +
                                '<td class="text-center">' + item.quantity_inProduction.toLocaleString('en')  + ' kg</td>' +
                                '<td class="action-btn">' +
                                    '<button hidden id="rawmatUse" data-bs-toggle="modal" data-bs-target="#rmUseModal" data-date="' + item.action_date + '" data-desc="' + item.item_desc + '" data-id="' + item.item_id + '" data-lot="' + item.item_lot + '" data-bin="' + item.item_bin + '" data-quantity="' + item.quantity_inProduction + '" class="btn btn-primary btn-sm"> Use Quantity</button>' +
                                    '<button id="markAsDepleted" data-bs-toggle="modal" data-bs-target="#rmDepletedModal" data-date="' + item.action_date + '" data-desc="' + item.item_desc + '" data-id="' + item.item_id + '" data-lot="' + item.item_lot + '" data-bin="' + item.item_bin + '" data-quantity="' + item.quantity_inProduction + '" class="btn btn-secondary btn-sm"> Mark as Depleted</button>' +
                                '</td>' +
                            '</tr>'
                        );
                    }
                });
            }
            generatePagination(filteredResponse.length);
        }

        function generatePagination(totalItems) { 
            let pagination = $('#inProductionTablePagination'); 
            pagination.empty();
            let totalPages = Math.ceil(totalItems / pageSize);

            if (pageNumber > 1) {
                let prevButton = $('<li><a href="#" id="prev"><i class="fa-solid fa-angle-left" style="padding: 5px 0;"></i></a></li>'); 
                pagination.append(prevButton); 
            }


            let startNumber = Math.max(pageNumber - 2, 1);  
            let endNumber = Math.min(startNumber + 4, totalPages); 

            for (let i = startNumber; i <= endNumber; i++) { 
                let li = $('<li></li>'); 
                let a = $('<a href="#">' + i + '</a>'); 
                if (i === pageNumber) { 
                    li.addClass('active'); 
                }
                li.append(a); 
                pagination.append(li); 
            }

            if (pageNumber < totalPages) {
                let nextButton = $('<li><a href="#" id="next"><i class="fa-solid fa-angle-right" style="padding: 5px 0;"></i></a></li>'); // next button
                pagination.append(nextButton); 
            }
        }
        

        $('#inProductionTablePagination').on('click', 'a', function(event) { 
            event.preventDefault(); 
            let targetPage; 
            let currentPage = parseInt($('#inProductionTablePagination .active a').text()); 
            if ($(this).attr('id') === 'prev') {
                targetPage = Math.max(currentPage - 1, 1); 
            } else if ($(this).attr('id') === 'next') { 
                targetPage = Math.min(currentPage + 1, Math.ceil(tableData.length / pageSize)); 
            } else { // number is clicked
                targetPage = parseInt($(this).text());  
            }
            pageNumber = targetPage; 
            inProductionTableData();
        });

        preloadTableData();

        $(document).on('change', '#recSearchFilter', function(){
            searchFilter = $(this).val();
            inProductionTableData();
        });


        $(document).on('input', '#recSearch', function() { 
            searchKey = $(this).val(); 
            pageNumber = 1; 
            inProductionTableData(); 
        });
    }

    tableFunctions();

    $(document).on('click', '#renderInProduction', function(){
        searchKey = '';
        tableFunctions();
    });

    $(document).on('click', '#rawmatUse', function() {
        var actionDate = $(this).data('date');
        var itemDesc = $(this).data('desc');
        var itemId = $(this).data('id');
        var itemLot = $(this).data('lot');
        var itemBin = $(this).data('bin');
        var itemQuantity = $(this).data('quantity');

        // visual
        $('#rmUseModal p#itemInfoDate').text(actionDate);
        $('#rmUseModal h3#itemInfoQuantity').text(itemQuantity.toLocaleString('en')  + ' KG');
        $('#rmUseModal p#itemInfoLot').text(itemLot);
        $('#rmUseModal p#itemInfoDesc').text(itemDesc);
        $('#rmUseModal h1#itemInfoId').text(itemId);
        $('#rmUseModal p#itemInfoBin').text(itemBin); 

        // attach data
        $('#rmUseModal #uitemDesc').val(itemDesc);
        $('#rmUseModal #uitemId').val(itemId);
        $('#rmUseModal #uitemLot').val(itemLot);
        $('#rmUseModal #uitemBin').val(itemBin);
        $('#rmUseModal #uitemQuantity').val(itemQuantity);
    })

    $(document).on('click', '#markAsDepleted', function() {
        var actionDate = $(this).data('date');
        var itemDesc = $(this).data('desc');
        var itemId = $(this).data('id');
        var itemLot = $(this).data('lot');
        var itemBin = $(this).data('bin');
        var itemQuantity = $(this).data('quantity');

        // visual
        $('#rmDepletedModal p#itemInfoDate').text(actionDate);
        $('#rmDepletedModal h3#itemInfoQuantity').text(itemQuantity.toLocaleString('en') + ' KG');
        $('#rmDepletedModal p#itemInfoLot').text(itemLot);
        $('#rmDepletedModal p#itemInfoDesc').text(itemDesc);
        $('#rmDepletedModal h1#itemInfoId').text(itemId);
        $('#rmDepletedModal p#itemInfoBin').text(itemBin);

        // attach data
        $('#rmDepletedModal #ditemDesc').val(itemDesc);
        $('#rmDepletedModal #ditemId').val(itemId);
        $('#rmDepletedModal #ditemLot').val(itemLot);
        $('#rmDepletedModal #ditemBin').val(itemBin);
    });
});