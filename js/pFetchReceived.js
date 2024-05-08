$(function(){
    let tableData = [];
    let searchFilter = ''; 
    let searchKey = ''; 
    let pageNumber = 1; 
    let pageSize = 10; 

    function preloadTableData() {
        $.ajax({
            url: './php/p_received_data.php',
            method: 'GET',
            success: function(response) {
                tableData = response;
                fgReceivedTableData();
                console.table(tableData)
            },
            error: function(xhr, status, error) {
                console.error(xhr.responseText);
            }
        });
    }

    function fgReceivedTableData() {
        let filteredResponse = tableData;
        if (searchKey !== '') { 
            switch (searchFilter) { 
                case 'date': 
                    filteredResponse = tableData.filter(item => item.action_date.toLowerCase().includes(searchKey.toLowerCase()));
                    break;
                case 'staff':
                    filteredResponse = tableData.filter(item => item.action_by.toLowerCase().includes(searchKey.toLowerCase()));
                    break;
                case 'name': 
                    filteredResponse = tableData.filter(item => item.item_name.toLowerCase().includes(searchKey.toLowerCase()));
                    break;
                case 'desc':
                    filteredResponse = tableData.filter(item => item.item_desc.toLowerCase().includes(searchKey.toLowerCase()));
                    break;
                default:
                    filteredResponse = tableData.filter(item => `${item.item_id} ${item.item_lot} ${item.item_bin}`.toLocaleLowerCase().includes(searchKey.toLowerCase()));
                    break;
            };
        };

        
        let startIndex = (pageNumber - 1) * pageSize;
        let endIndex = startIndex + pageSize;
        let pageData = filteredResponse.slice(startIndex, endIndex);

        $('#receiveTable tbody').empty(); 

        if (pageData.length === 0) {
            tableRow = '<tr>';
            tableRow += '<td colspan="11" style="text-align: center;">There is No Data</td>'; 
            tableRow += '</tr>';
            $('#receiveTable').append(tableRow);
        } else {
            pageData.forEach(function(item) { 
                $('#receiveTable tbody').append( 
                    '<tr class="">' +
                        '<td class="table-primary">' + item.item_id + '</td>' +
                        '<td>' + item.item_name + '</td>' +
                        '<td>' + item.item_desc + '</td>' +
                        '<td>' + item.item_lot + '</td>' +
                        '<td>' + item.item_bin + '</td>' +
                        '<td>' + (item.pack_small ? item.pack_small + ' pcs': '') + '</td>' +
                        '<td>' + (item.pack_medium ? item.pack_medium + ' pcs': '') + '</td>' +
                        '<td>' + (item.pack_large ? item.pack_large + ' pcs': '') + '</td>' +
                        '<td>' + item.action_date + '</td>' +
                        '<td>' + item.action_by + '</td>' +
                        '<td>' +
                        '<button id="pShip" class="select btn btn-primary btn-sm col mx-1" data-bs-toggle="modal" data-bs-target="#pShipModal" data-name="' + item.item_name + '" data-desc="' + item.item_desc + '" data-id="' + item.item_id + '" data-lot="' + item.item_lot + '" data-bin="' + item.item_bin + '" data-quantity="' + (item.pack_small ? item.pack_small : '') + (item.pack_medium ? item.pack_medium : '') + (item.pack_large ? item.pack_large : '') + '" data-box="' + (item.pack_small ? 'Small' : '') + (item.pack_medium ? 'Medium' : '') + (item.pack_large ? 'Large' : '') + '"><i class="fa-solid fa-truck-fast"></i> Ship</button>' +
                        '</td>' +
                    '</tr>'
                );
            });
        }
        generatePagination(filteredResponse.length);
    }

    function generatePagination(totalItems) { 
        let pagination = $('#receivedTablePagination'); 
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
    

    $('#receivedTablePagination').on('click', 'a', function(event) { 
        event.preventDefault(); 
        let targetPage; 
        let currentPage = parseInt($('#receivedTablePagination .active a').text()); 
        if ($(this).attr('id') === 'prev') {
            targetPage = Math.max(currentPage - 1, 1); 
        } else if ($(this).attr('id') === 'next') { 
            targetPage = Math.min(currentPage + 1, Math.ceil(tableData.length / pageSize)); 
        } else {
            targetPage = parseInt($(this).text());  
        }
        pageNumber = targetPage; 
        fgReceivedTableData();
    });

    
    $(document).on('change', '#searchFilter', function(){
        searchFilter = $(this).val();
        fgReceivedTableData();
    });


    $(document).on('input', '#search', function() { 
        searchKey = $(this).val(); 
        pageNumber = 1; 
        fgReceivedTableData(); 
    });

    preloadTableData();
    
    $(document).on('click', '#pShip', function() {
        var itemName = $(this).data('name');
        var itemDesc = $(this).data('desc');
        var itemId = $(this).data('id');
        var itemLot = $(this).data('lot');
        var itemBin = $(this).data('bin');
        var itemQuantity = $(this).data('quantity');
        var boxType = $(this).data('box');

        $('#pShipModal #shipName').val(itemName);
        $('#pShipModal #shipDesc').val(itemDesc);
        $('#pShipModal #shipId').val(itemId);
        $('#pShipModal #shipLot').val(itemLot);
        $('#pShipModal #shipBin').val(itemBin);
        $('#pShipModal #shipQuantity').val(itemQuantity);
        $('#pShipModal #boxType').val(boxType);
    });
})