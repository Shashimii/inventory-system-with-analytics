$(function(){
let tableData = [];
let searchFilter = ''; 
let searchKey = ''; 
let pageNumber = 1; 
let pageSize = 10; 

    function preloadTableData() {
        $.ajax({
            url: './php/rm_status_data.php', 
            method: 'GET',
            success: function(response) {
                tableData = response;
                statusTableData() 
                console.table(tableData);
            },
            
            error: function(xhr, status, error) {
                console.error(xhr.responseText); 
            }
        });
    };

    function statusTableData() {
        let filteredResponse = tableData; 
        if (searchKey !== '') { 
            switch (searchFilter) { 
                case 'name': 
                    filteredResponse = tableData.filter(item => item.item_name.toLowerCase().includes(searchKey.toLowerCase()));
                    break;
                case 'desc': 
                    filteredResponse = tableData.filter(item => item.item_desc.toLowerCase().includes(searchKey.toLowerCase()));
                    break;
                default:
                    filteredResponse = tableData.filter(item => `${item.item_name} ${item.item_desc}`.toLocaleLowerCase().includes(searchKey.toLowerCase()));
                    break;
            };
        };


        let startIndex = (pageNumber - 1) * pageSize;
        let endIndex = startIndex + pageSize;
        let pageData = filteredResponse.slice(startIndex, endIndex);

        $('#statusTable tbody').empty(); 

        if (pageData.length === 0) {
            tableRow = '<tr>';
            tableRow += '<td colspan="9" style="text-align: center;">There is No Data</td>'; 
            tableRow += '</tr>';
            $('#statusTable').append(tableRow);
        } else {
            pageData.forEach(function(item) { 
                $('#statusTable tbody').append( 
                    '<tr>' +
                        '<td>' + item.item_name + '</td>' +
                        '<td>' + item.item_desc + '</td>' +
                        '<td class="table-success">' + item.total_received + ' KG' + '</td>' +
                        '<td' + (item.total_inProduction != null ? ' class="table-warning"' : '') + '>' + (item.total_inProduction ? item.total_inProduction + ' KG' : '') + '</td>' +
                        '<td' + (item.total_scrap != null ? ' class="table-secondary"' : '') + '>' + (item.total_scrap ? item.total_scrap + ' KG' : '') + '</td>' +
                        '<td' + (item.total_used != null ? ' class="table-danger"' : '') + '>' + (item.total_used ? item.total_used + ' KG' : '') + '</td>' +
                        '<td' + (item.total_ply != null ? ' class="table-info"' : '') + '>' + (item.total_ply ? item.total_ply + ' KG' : '') + '</td>' +
                        '<td' + (item.total_pcs != null ? ' class="table-primary"' : '') + '>' + (item.total_pcs ? item.total_pcs + ' KG' : '') + '</td>' +
                    '</tr>'
                );
            });
        }
        generatePagination(filteredResponse.length);
    }

    function generatePagination(totalItems) { 
        let pagination = $('#statusTablePagination'); 
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
    

    $('#statusTablePagination').on('click', 'a', function(event) { 
        event.preventDefault(); 
        let targetPage; 
        let currentPage = parseInt($('#statusTablePagination .active a').text()); 
        if ($(this).attr('id') === 'prev') {
            targetPage = Math.max(currentPage - 1, 1); 
        } else if ($(this).attr('id') === 'next') { 
            targetPage = Math.min(currentPage + 1, Math.ceil(tableData.length / pageSize)); 
        } else { // number is clicked
            targetPage = parseInt($(this).text());  
        }
        pageNumber = targetPage; 
        statusTableData();
    });


    $(document).on('change', '#searchFilter', function(){
        searchFilter = $(this).val();
        statusTableData();
    });


    $(document).on('input', '#searchBar', function() { 
        searchKey = $(this).val(); 
        pageNumber = 1; 
        statusTableData(); 
    });

    preloadTableData();
});