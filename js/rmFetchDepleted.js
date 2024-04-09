$(function() {
    let tableData = [];
    let searchFilter = ''; 
    let searchKey = ''; 
    let pageNumber = 1; 
    let pageSize = 10; 

    function tableFunctions() {
        function preloadTableData() {
            $.ajax({
                url: './php/rm_depleted_data.php', 
                method: 'GET',
                success: function(response) {
                    tableData = response; 
                    depletedTableData(); 
                },
                error: function(xhr, status, error) {
                    console.error(xhr.responseText); 
                }
            });
        }
        

        function depletedTableData() {
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
                    case 'quantityScrap': 
                        filteredResponse = tableData.filter(item => item.quantity_scrap.toString().includes(searchKey));
                        break;
                    case 'quantityUsed': 
                        filteredResponse = tableData.filter(item => item.quantity_used.toString().includes(searchKey));
                        break;
                    default:
                        filteredResponse = tableData.filter(item => `${item.item_id} ${item.item_lot} ${item.item_bin}`.toLocaleLowerCase().includes(searchKey.toLowerCase()));
                        break;
                };
            };



            let startIndex = (pageNumber - 1) * pageSize;
            let endIndex = startIndex + pageSize;
            let pageData = filteredResponse.slice(startIndex, endIndex);

            $('#depletedTable tbody').empty(); 

            if (pageData.length === 0) {
                tableRow = '<tr>';
                tableRow += '<td colspan="9" style="text-align: center;">There is No Data</td>'; 
                tableRow += '</tr>';
                $('#depletedTable').append(tableRow);
            } else {
                pageData.forEach(function(item) { 
                    $('#depletedTable tbody').append( 
                        '<tr>' +
                            '<td>' + item.action_date + '</td>' +
                            '<td>' + item.item_name + '</td>' +
                            '<td>' + item.item_desc + '</td>' +
                            '<td>' + item.item_id + '</td>' +
                            '<td>' + item.item_lot + '</td>' +
                            '<td>' + item.item_bin + '</td>' +
                            '<td>' + item.quantity_scrap + ' KG</td>' +
                            '<td>' + item.quantity_used + ' KG</td>' +
                            '<td class="action-btn">' +
                            '<button id="removeFromTheList" data-bs-toggle="modal" data-bs-target="#rmRemoveModal" data-date="' + item.action_date + '" data-name="' + item.item_name + '" data-desc="' + item.item_desc + '" data-id="' + item.item_id + '" data-lot="' + item.item_lot + '" data-bin="' + item.item_bin + '" data-quantityscrap="' + item.quantity_scrap + '" data-quantityused="'+ item.quantity_used +'" class="btn btn-danger btn-sm"><i class="fa-solid fa-trash"></i> Remove From the List</button>' +
                            '</td>' +
                        '</tr>'
                    );
                });
            }
            generatePagination(filteredResponse.length);
        }

        function generatePagination(totalItems) { 
            let pagination = $('#depletedTablePagination'); 
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
        

        $('#depletedTablePagination').on('click', 'a', function(event) { 
            event.preventDefault(); 
            let targetPage; 
            let currentPage = parseInt($('#depletedTablePagination .active a').text()); 
            if ($(this).attr('id') === 'prev') {
                targetPage = Math.max(currentPage - 1, 1); 
            } else if ($(this).attr('id') === 'next') { 
                targetPage = Math.min(currentPage + 1, Math.ceil(tableData.length / pageSize)); 
            } else { // number is clicked
                targetPage = parseInt($(this).text());  
            }
            pageNumber = targetPage; 
            depletedTableData();
        });

        preloadTableData();

        $(document).on('change', '#recSearchFilter', function(){
            searchFilter = $(this).val();
            depletedTableData();
        });


        $(document).on('input', '#recSearch', function() { 
            searchKey = $(this).val(); 
            pageNumber = 1; 
            depletedTableData(); 
        });
    }

    tableFunctions();

    $(document).on('click', '#renderUsed', function(){
        searchKey = '';
        tableFunctions();
    });

    $(document).on('click', '#removeFromTheList', function() {
        var actionDate = $(this).data('date');
        var itemName = $(this).data('name');
        var itemDesc = $(this).data('desc');
        var itemId = $(this).data('id');
        var itemLot = $(this).data('lot');
        var itemBin = $(this).data('bin');
        var itemQuantityScrap = $(this).data('quantityscrap');
        var itemQuantityUsed = $(this).data('quantityused');  

        // modal data visualization
        $('#rmRemoveModal p#itemInfoDate').text(actionDate);
        $('#rmRemoveModal h1#itemInfoName').text(itemName);
        $('#rmRemoveModal p#itemInfoQuantityScrap').text(itemQuantityScrap + ' KG'); 
        $('#rmRemoveModal p#itemInfoQuantityUsed').text(itemQuantityUsed + ' KG');
        $('#rmRemoveModal p#itemInfoLot').text(itemLot);
        $('#rmRemoveModal p#itemInfoDesc').text(itemDesc);
        $('#rmRemoveModal p#itemInfoId').text(itemId);
        $('#rmRemoveModal p#itemInfoBin').text(itemBin);
    
        // data attached to the modal to be used
        $('#rmRemoveModal #itemName').val(itemName);
        $('#rmRemoveModal #itemId').val(itemId);
    });
    
});