$(function() {
    let tableData = [];
    let searchKey = ''; 
    let pageNumber = 1; 
    let pageSize = 10; 

    function fetchAccounts() {
        $.ajax({
            url: './php/settings_accounts_data.php',
            method: 'GET',
            success: function(response) {
                console.table(response)

                tableData = response; 
                accountTableData(); 
            },
            error: function(xhr, status, error) {
                console.error(xhr.responseText);
            }
        });
    }

    function accountTableData() {
        let filteredResponse = tableData; 
        if (searchKey !== '') { 
            filteredResponse = tableData.filter(item => `${item.user_name} ${item.user_password} ${item.user_type}`.toLocaleLowerCase().includes(searchKey.toLowerCase()));
        };

        let startIndex = (pageNumber - 1) * pageSize;
        let endIndex = startIndex + pageSize;
        let pageData = filteredResponse.slice(startIndex, endIndex);

        $('#accountTable tbody').empty(); 

        if (pageData.length === 0) {
            tableRow = '<tr>';
            tableRow += '<td colspan="3" style="text-align: center;">There is No Data</td>'; 
            tableRow += '</tr>';
            $('#accountTable').append(tableRow);
        } else {
            pageData.forEach(function(item) { 
                $('#accountTable tbody').append( 
                    '<tr>' +
                        '<td>' + item.user_name + '</td>' +
                        '<td>' + item.user_password + '</td>' +
                        '<td>' + item.user_type + '</td>' + +
                    '</tr>'
                );
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

    fetchAccounts()
})