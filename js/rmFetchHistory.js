$(function(){
    let tableData = [];
    let searchFilter = ''; 
    let searchKey = '';
    let pageNumber = 1; 
    let pageSize = 10; 

    function preloadTableData() {
        $.ajax({
            url: './php/rm_history_data.php', 
            method: 'GET',
            success: function(response) {
                console.log(response)
                tableData = response;
                historyTableData(); 
            },
            error: function(xhr, status, error) {
                console.error(xhr.responseText); 
            }
        });
    }

    function historyTableData() {
        let filteredResponse = tableData; 
        if (searchKey !== '') { 
            switch (searchFilter) { 
                case 'date': 
                    filteredResponse = tableData.filter(item => item.item.action_date.toLowerCase().includes(searchKey.toLowerCase()));
                    break;
                case 'time': 
                    filteredResponse = tableData.filter(item => item.item.action_time.toLowerCase().includes(searchKey.toLowerCase()));
                    break;
                case 'desc': 
                    filteredResponse = tableData.filter(item => item.item.item_desc.toLowerCase().includes(searchKey.toLowerCase()));
                    break;
                case 'id': 
                    filteredResponse = tableData.filter(item => item.item.item_id.toLowerCase().includes(searchKey.toLowerCase()));
                    break;
                case 'lot': 
                    filteredResponse = tableData.filter(item => item.item.item_lot.toLowerCase().includes(searchKey.toLowerCase()));
                    break;
                case 'bin': 
                    filteredResponse = tableData.filter(item => item.item.item_bin.toLowerCase().includes(searchKey.toLowerCase()));
                    break;
                default:
                    filteredResponse = tableData.filter(item => `${item.item.item_id} ${item.item.item_desc} ${item.item.item_lot} ${item.item.item_bin} ${item.item.action_time} ${item.item.action_date}`.toLocaleLowerCase().includes(searchKey.toLowerCase()));
                    break;
            };
        };

        let startIndex = (pageNumber - 1) * pageSize;
        let endIndex = startIndex + pageSize;
        let pageData = filteredResponse.slice(startIndex, endIndex);

        $('#historyTable tbody').empty(); 
        if (pageData.length === 0) {
            tableRow = '<tr>';
            tableRow += '<td colspan="7" style="text-align: center;">There is No Data</td>'; // show this message
            tableRow += '</tr>';
            $('#historyTable').append(tableRow);
        } else {
            var $tbody = $('#historyTable tbody');
            var historyAccordion = '';
            pageData.forEach(function(item, index) {
                var accordionId = "collapse" + index;
                historyAccordion += `
                    <tr>
                        <td class="text-center">${item.item.item_id}</td>
                        <td class="text-center">${item.item.item_desc}</td>
                        <td class="text-center">${item.item.item_lot}</td>
                        <td class="text-center">${item.item.item_bin}</td>
                        <td class="text-center">${item.item.action_time}</td>
                        <td class="text-center">${item.item.action_date}</td>
                        <td class="action-btn">
                            <button class="btn btn-secondary" type="button" data-bs-toggle="collapse" data-bs-target="#${accordionId}" aria-expanded="false" aria-controls="${accordionId}">View Transactions</button>
                            <tr>
                                <td colspan="8" style="box-shadow: inset 0px 0px 20px -1px rgba(0,0,0,0.3);">
                                    <div class="collapse" id="${accordionId}">
                                        <table class="table table-bordered table-responsive table-hover">
                                            <thead>
                                                <tr>
                                                    <th class="table-primary text-center">Date</th>
                                                    <th class="table-primary text-center">Time</th>
                                                    <th class="table-primary text-center">Action By</th>
                                                    <th class="text-center">Received</th>
                                                    <th class="text-center">In Production</th>
                                                    <th class="text-center">Used</th>
                                                    <th class="text-center">Scrap</th>
                                                    <th class="text-center">FG</th>
                                                    <th class="text-center">IN</th>
                                                    <th class="text-center">OUT</th>
                                                </tr>
                                            </thead>
                                            <tbody class="table-group-divider">`;
                                            item.data.forEach(function(data){
                                                historyAccordion +=`
                                                <tr>
                                                <td class="table-primary text-center">${data.action_date ? data.action_date : ''}</td>
                                                <td class="table-primary text-center">${data.action_time ? data.action_time : ''}</td>
                                                <td class="table-primary text-center">${data.action_by ? data.action_by : ''}</td>
                                                <td class="text-center">${data.quantity_receive ? data.quantity_receive.toLocaleString('en') + ' kg': ''}</td>
                                                <td class="text-center">${data.quantity_inProduction ? data.quantity_inProduction.toLocaleString('en')  + ' kg': ''}</td>
                                                <td class="text-center">${data.quantity_used ? data.quantity_used.toLocaleString('en')  + ' kg': ''}</td>
                                                <td class="text-center">${data.quantity_scrap ? data.quantity_scrap.toLocaleString('en')  + ' kg': ''}</td>
                                                <td class="text-center">${data.quantity_created_pcs ? data.quantity_created_pcs.toLocaleString('en')  + ' pcs': ''}</td>
                                                <td class="text-center">${data.quantity_IN ? data.quantity_IN.toLocaleString('en')  + ' kg': ''}</td>
                                                <td class="text-center">${data.quantity_OUT ? data.quantity_OUT.toLocaleString('en')  + ' kg': ''}</td>
                                            </tr>`;
                                            })
                                            historyAccordion +=`
                                            </tbody>
                                        </table>
                                    </div>
                                </td>
                            </tr>
                        </td>
                    </tr>
                `;
            });
        $tbody.append(historyAccordion);
        };
        generatePagination(filteredResponse.length);
    }

    function generatePagination(totalItems) { 
        let pagination = $('#historyTablePagination'); 
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

        // added off to fix multiple call of historyTableData()
        $(document).off('click', '#historyTablePagination a').on('click', '#historyTablePagination a', function(event) { 
            event.preventDefault(); 
            let targetPage; 
            let currentPage = parseInt($('#historyTablePagination .active a').text()); 
            if ($(this).attr('id') === 'prev') {
                targetPage = Math.max(currentPage - 1, 1); 
            } else if ($(this).attr('id') === 'next') { 
                targetPage = Math.min(currentPage + 1, Math.ceil(tableData.length / pageSize)); 
            } else {
                targetPage = parseInt($(this).text());  
            }
            pageNumber = targetPage; 
            historyTableData();
        });
    }
        
    $(document).on('change', '#searchFilter', function(){
        searchFilter = $(this).val();
        historyTableData();
    });

    $(document).on('input', '#searchBar', function() { 
        searchKey = $(this).val(); 
        pageNumber = 1; 
        historyTableData(); 
    }); 
    preloadTableData();
});