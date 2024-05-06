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
            tableRow += '<td colspan="8" style="text-align: center;">There is No Data</td>'; 
            tableRow += '</tr>';
            $('#statusTable').append(tableRow);
        } else {
            pageData.forEach(function(item) { 
                $('#statusTable tbody').append( 
                    '<tr>' +
                        '<td class="table-primary">' + item.item_desc + '</td>' +
                        '<td>' + (item.total_quantity ?  item.total_quantity + ' kg' : 0 + ' kg') + '</td>' +
                        '<td>' + (item.total_inProduction ? item.total_inProduction + ' kg' : 0 + ' kg') + '</td>' +
                        '<td>' + (item.total_used ? item.total_used + ' kg' : 0 + ' kg') + '</td>' +
                        '<td>' + (item.total_pcs ? item.total_pcs + ' pcs' : 0 + ' pcs') + '</td>' +
                        '<td>' + (item.total_scrap ? item.total_scrap + ' kg' : 0 + ' kg') + '</td>' +
                        '<td' + 
                        (item.total_quantity < 2000 ? ' class="table-danger"' : '') +
                        (item.total_quantity >= 2000 && item.total_quantity <= 9999 ? ' class="table-success"' : '') +
                        (item.total_quantity > 9999 ? ' class="table-warning"' : '') +
                        '>' + 
                            (item.total_quantity < 2000 ? 'Low' : '') + 
                            (item.total_quantity >= 2000 && item.total_quantity <= 9999 ? 'Normal' : '') +
                            (item.total_quantity > 9999 ? 'Overstock' : '') +
                        '</td>' +
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
        } else {
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

    $('#dateAdjustForm').on('submit', function(event) {
        event.preventDefault();

        if ($('#startDate').val() === '') {
            $('#startDate').tooltip('show');
            return; 
        } else if ($('#endDate').val() === ''){
            $('#endDate').tooltip('show');
            return; 
        }

        var inputData = $(this).serialize();
        var notFormated = inputData.split("&");
        var formatted = [];
    
        for (var i = 0; i < notFormated.length; i++) {
            var keyValue = notFormated[i].split("=");
            var key = keyValue[0];
            var value = keyValue[1];
    
            if (key.includes("date")) {
                var splitDate = value.split("-");
                var formatDate = splitDate[1] + "/" + splitDate[2] + "/" + splitDate[0];
                value = formatDate;
            }
    
            if (key === "start_date") {
                start_date = value;
            } else if (key === "end_date"){
                end_date = value;
            }
    
            formatted.push(key + "=" + value);
        }
    
        var formattedInputData = formatted.join("&");
    
        console.log(start_date);
        console.log(end_date);
    
        $.ajax({
            type: 'POST', 
            url: './php/rm_status_data.php',
            data: formattedInputData,
            success: function(response) {
                if(response) {
                    tableData = response;
                    statusTableData();
                    $('#dateRangeDisplay').val(start_date + ' - ' + end_date);
                }
            },
            error: function(xhr, status, error) {
                console.error(xhr.responseText);
            }
        });

        $('#dateRangeModal').modal('hide');
    });

    preloadTableData();
});