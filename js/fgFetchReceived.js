$(function(){
    let tableData = [];
    let searchFilter = ''; 
    let searchKey = ''; 
    let pageNumber = 1; 
    let pageSize = 10; 

    function preloadTableData() {
        $.ajax({
            url: './php/fg_received_data.php',
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
                case 'name': 
                    filteredResponse = tableData.filter(item => item.item_name.toLowerCase().includes(searchKey.toLowerCase()));
                    break;
                case 'desc':
                    filteredResponse = tableData.filter(item => item.item_desc.toLowerCase().includes(searchKey.toLowerCase()));
                    break;
                case 'lot': 
                    filteredResponse = tableData.filter(item => item.item_lot.toLowerCase().includes(searchKey.toLowerCase()));
                    break;
                case 'bin':  
                    filteredResponse = tableData.filter(item => item.item_bin.toLowerCase().includes(searchKey.toLowerCase()));
                    break;
                case 'quantityPcs': 
                    filteredResponse = tableData.filter(item => item.quantity_pcs.toString().includes(searchKey));
                    break;
                case 'quantityPly': 
                    filteredResponse = tableData.filter(item => item.quantity_ply.toString().includes(searchKey));
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
            tableRow += '<td colspan="9" style="text-align: center;">There is No Data</td>'; 
            tableRow += '</tr>';
            $('#receiveTable').append(tableRow);
        } else {
            pageData.forEach(function(item) { 
                $('#receiveTable tbody').append( 
                    '<tr>' +
                        '<td>' + item.action_date + '</td>' +
                        '<td>' + item.item_name + '</td>' +
                        '<td>' + item.item_desc + '</td>' +
                        '<td>' + item.item_lot + '</td>' +
                        '<td>' + item.item_bin + '</td>' +
                        '<td>' + (item.quantity_pcs ? item.quantity_pcs : '') + '</td>' +
                        '<td>' + (item.quantity_ply ? item.quantity_ply : '')+ '</td>' +
                        '<td class="action-btn">' +
                        '<button id="fgPack" data-bs-toggle="modal" data-bs-target="#fgPackModal" data-date="' + item.action_date + '" data-name="' + item.item_name + '" data-desc="' + item.item_desc + '" data-lot="' + item.item_lot + '" data-bin="' + item.item_bin + '" data-quantitypcs="' + item.quantity_pcs + '" data-quantityply="'+ item.quantity_ply +'" class="btn btn-primary btn-sm"><i class="fa-solid fa-box"></i> Pack</button>' +
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
    
    $(document).on('click', '#removeFromTheList', function() {
        var actionDate = $(this).data('date');
        var itemName = $(this).data('name');
        var itemDesc = $(this).data('desc');
        var itemLot = $(this).data('lot');
        var itemBin = $(this).data('bin');
        var itemQuantityPly = $(this).data('quantitypcs');
        var itemQuantityPcs = $(this).data('quantityply');  

        $('#rmRemoveModal p#itemInfoDate').text(actionDate);
        $('#rmRemoveModal h1#itemInfoName').text(itemName);
        $('#rmRemoveModal p#itemInfoQuantityPcs').text(itemQuantityPcs + ' KG'); 
        $('#rmRemoveModal p#itemInfoQuantityPly').text(itemQuantityPly + ' KG');
        $('#rmRemoveModal p#itemInfoLot').text(itemLot);
        $('#rmRemoveModal p#itemInfoDesc').text(itemDesc);
        $('#rmRemoveModal p#itemInfoBin').text(itemBin);

        $('#rmRemoveModal #itemName').val(itemName);
        $('#rmRemoveModal #itemId').val(itemId);
    });
})