$(function() { 
    let sqlData = [];
    let searchFilter = '';
    let searchKey = '';
    let pageNumber = 1;
    let pageSize = 10;

    function loadRecAdjData() {
        $.ajax({
            url: './php/rm_received_data_adj',
            method: 'GET',
            success: function(response) {
                sqlData = response;
                recAdjTableDisplay();
            },
            error: function(xhr, status, error) {
                console.error(xhr.responseText);
            }
        });
    }

    function recAdjTableDisplay() {
        let filteredData = sqlData;
        if (searchKey !== '') {
            switch (searchFilter) { 
                case 'date':
                filteredData = sqlData.filter(item => item.action_date.toLowerCase().includes(searchKey.toLowerCase()));
                    break;
                case 'time': 
                filteredData = sqlData.filter(item => item.action_time.toLowerCase().includes(searchKey.toLowerCase()));
                    break;
                case 'name':
                filteredData = sqlData.filter(item => item.item_name.toLowerCase().includes(searchKey.toLowerCase()));
                    break;
                case 'id': 
                filteredData = sqlData.filter(item => item.item_id.toLowerCase().includes(searchKey.toLowerCase()));
                    break;
                case 'receiveQuantity': 
                filteredData = sqlData.filter(item => item.receive_quantity.toString().includes(searchKey));
                    break;
                case 'adjustedQuantity':
                filteredData = sqlData.filter(item => item.adj_receive.toString().includes(searchKey));
                    break;
                case 'user':
                filteredData = sqlData.filter(item => item.action_by.toLowerCase().includes(searchKey.toLowerCase()));
                    break;
                default:
                    filteredData = sqlData.filter(item => {
                        return Object.values(item).some(value => {
                            if (typeof value === 'string') {
                                return value.toLowerCase().includes(searchKey.toLowerCase());
                            } else if (typeof value === 'number') {
                                return value.toString().includes(searchKey);
                            }
                        });
                    });
                    break;
            };
        };

        let startIndex = (pageNumber - 1) * pageSize;
        let endIndex = startIndex + pageSize;
        let pageRows = filteredData.slice(startIndex, endIndex);

        $('#receiveAdjTable tbody').empty();

        if (pageRows.length === 0) {
            tableRow = '<tr>';
            tableRow += '<td colspan="8" style="text-align: center;">There is No Data</td>';
            tableRow += '</tr>';
            $('#receiveAdjTable').append(tableRow);
        } else {
            pageRows.forEach(function(item) {
                $('#receiveAdjTable tbody').append(
                    '<tr>' +
                    '<td>' + item.action_date + '</td>' +
                    '<td>' + item.action_time + '</td>' +
                    '<td>' + item.item_name + '</td>' +
                    '<td>' + item.item_id + '</td>' +
                    '<td>' + item.receive_quantity + ' KG</td>' +
                    '<td>' + item.adj_receive + ' KG</td>' +
                    '<td>' + item.action_by + '</td>' +
                '</tr>'
                );
            });
        }
        paginationNum(filteredData.length);
    };

    function paginationNum(totalItems) {
        let pagination = $('#receivedAdjTablePagination'); 
        pagination.empty();
        let totalPages = Math.ceil(totalItems / pageSize); 

        if (pageNumber > 1) {
            let prevButton = $('<li><a href="#" id="prev">&laquo; Prev</a></li>'); 
            pagination.append(prevButton); 
        }

        let startNumber = Math.max(pageNumber - 2, 1);  
        let endNumber = Math.min(startNumber + 4, totalPages); 

        for (let i = startNumber; i <= endNumber; i++) { 
            let li = $('<li></li>'); // <li>
            let a = $('<a href="#">' + i + '</a>'); 
            if (i === pageNumber) { 
                li.addClass('active'); 
            }
            li.append(a);
            pagination.append(li);
        }

        if (pageNumber < totalPages) {
            let nextButton = $('<li><a href="#" id="next">Next &raquo;</a></li>'); 
            pagination.append(nextButton); 
        }
    }

     // event listener for pagination clicks
     $('#receivedAdjTablePagination').on('click', 'a', function(event) {
        event.preventDefault(); 
        let targetPage;
        let currentPage = parseInt($('#receivedAdjTablePagination .active a').text()); 
        if ($(this).attr('id') === 'prev') { 
            targetPage = Math.max(currentPage - 1, 1); 
        } else if ($(this).attr('id') === 'next') { 
            targetPage = Math.min(currentPage + 1, Math.ceil(sqlData.length / pageSize)); 
        } else {
            targetPage = parseInt($(this).text());  
        }
        pageNumber = targetPage; 
        recAdjTableDisplay();
    });

    loadRecAdjData();

    $(document).on('click', '#renderReceive', function(){
        searchKey = '';
        recAdjTableDisplay(); 
    })

    $(document).on('change', '#recAdjSearchFilter', function(){
        searchFilter = $(this).val();
        recAdjTableDisplay();
    })

    $(document).on('input', '#recAdjSearch', function(){
        searchKey = $(this).val();
        pageNumber = 1;
        recAdjTableDisplay();
    })
    
});
