$(function() {
    let tableRow = '';
    let searchFilter = '';
    let searchKey = '';

    function receiveAdjTableData() {
        $.ajax({
            url: './php/rm_received_data_adj.php',
            method: 'GET',
            success: function(response) {
                switch (searchFilter) {
                    case 'date':
                        var filteredResponse = response.filter(function(item) { 
                            return typeof item.action_date === 'string' && item.action_date.toLowerCase().includes(searchKey.toLowerCase()); 
                        });
                        
                        $('#receiveAdjTable tbody').empty();
                    
                        if (filteredResponse.length === 0) {
                            tableRow = '<tr>'; 
                            tableRow += '<td colspan="7"style="text-align: center;">' + 'There is No Data' + '</td>';
                            tableRow += '</tr>';
                            $('#receiveAdjTable').append(tableRow);
                        } else {
                            filteredResponse.forEach(function(item){
                                tableRow ='<tr>';
                                tableRow +='<td>' + item.action_date + '</td>';
                                tableRow +='<td>' + item.action_time + '</td>';
                                tableRow +='<td>' + item.item_name + '</td>';
                                tableRow +='<td>' + item.item_id + '</td>';
                                tableRow +='<td>' + item.receive_quantity + ' KG</td>';
                                tableRow +='<td>' + item.adj_receive + ' KG</td>';
                                tableRow +='<td>' + item.action_by + '</td>';
                                tableRow +='</tr>'
                                
                                $('#receiveAdjTable').append(tableRow);
                            })
                        }
                        break;
    
                    case 'time':
                        var filteredResponse = response.filter(function(item) { 
                            return typeof item.action_time === 'string' && item.action_time.toLowerCase().includes(searchKey.toLowerCase()); 
                        });
                        
                        $('#receiveAdjTable tbody').empty();
                    
                        if (filteredResponse.length === 0) {
                            tableRow = '<tr>'; 
                            tableRow += '<td colspan="7"style="text-align: center;">' + 'There is No Data' + '</td>';
                            tableRow += '</tr>';
                            $('#receiveAdjTable').append(tableRow);
                        } else {
                            filteredResponse.forEach(function(item){
                                tableRow ='<tr>';
                                tableRow +='<td>' + item.action_date + '</td>';
                                tableRow +='<td>' + item.action_time + '</td>';
                                tableRow +='<td>' + item.item_name + '</td>';
                                tableRow +='<td>' + item.item_id + '</td>';
                                tableRow +='<td>' + item.receive_quantity + ' KG</td>';
                                tableRow +='<td>' + item.adj_receive + ' KG</td>';
                                tableRow +='<td>' + item.action_by + '</td>';
                                tableRow +='</tr>'
                                
                                $('#receiveAdjTable').append(tableRow);
                            })
                        }
                        break;
    
                    case 'name':
                        var filteredResponse = response.filter(function(item) { 
                            return typeof item.item_name === 'string' && item.item_name.toLowerCase().includes(searchKey.toLowerCase()); 
                        });
                        
                        $('#receiveAdjTable tbody').empty();
                    
                        if (filteredResponse.length === 0) {
                            tableRow = '<tr>'; 
                            tableRow += '<td colspan="7"style="text-align: center;">' + 'There is No Data' + '</td>';
                            tableRow += '</tr>';
                            $('#receiveAdjTable').append(tableRow);
                        } else {
                            filteredResponse.forEach(function(item){
                                tableRow ='<tr>';
                                tableRow +='<td>' + item.action_date + '</td>';
                                tableRow +='<td>' + item.action_time + '</td>';
                                tableRow +='<td>' + item.item_name + '</td>';
                                tableRow +='<td>' + item.item_id + '</td>';
                                tableRow +='<td>' + item.receive_quantity + ' KG</td>';
                                tableRow +='<td>' + item.adj_receive + ' KG</td>';
                                tableRow +='<td>' + item.action_by + '</td>';
                                tableRow +='</tr>'
                                
                                $('#receiveAdjTable').append(tableRow);
                            })
                        }
                        break;
    
                    case 'id':
                        var filteredResponse = response.filter(function(item) { 
                            return typeof item.item_id === 'string' && item.item_id.toLowerCase().includes(searchKey.toLowerCase()); 
                        });
                        
                        $('#receiveAdjTable tbody').empty();
                    
                        if (filteredResponse.length === 0) {
                            tableRow = '<tr>'; 
                            tableRow += '<td colspan="7"style="text-align: center;">' + 'There is No Data' + '</td>';
                            tableRow += '</tr>';
                            $('#receiveAdjTable').append(tableRow);
                        } else {
                            filteredResponse.forEach(function(item){
                                tableRow ='<tr>';
                                tableRow +='<td>' + item.action_date + '</td>';
                                tableRow +='<td>' + item.action_time + '</td>';
                                tableRow +='<td>' + item.item_name + '</td>';
                                tableRow +='<td>' + item.item_id + '</td>';
                                tableRow +='<td>' + item.receive_quantity + ' KG</td>';
                                tableRow +='<td>' + item.adj_receive + ' KG</td>';
                                tableRow +='<td>' + item.action_by + '</td>';
                                tableRow +='</tr>'
                                
                                $('#receiveAdjTable').append(tableRow);
                            })
                        }
                        break;
    
                    case 'receiveQuantity':
                        var filteredResponse = response.filter(function(item) {
                            return item.receive_quantity !== null && item.receive_quantity.toString().includes(searchKey);
                        });
                        
                        $('#receiveAdjTable tbody').empty(); 
        
                        if (filteredResponse.length === 0) {
                            tableRow = '<tr>'; 
                            tableRow += '<td colspan="7"style="text-align: center;">' + 'There is No Data' + '</td>';
                            tableRow += '</tr>';
                            $('#receiveAdjTable').append(tableRow);
                        } else {
                            filteredResponse.forEach(function(item){
                                tableRow ='<tr>';
                                tableRow +='<td>' + item.action_date + '</td>';
                                tableRow +='<td>' + item.action_time + '</td>';
                                tableRow +='<td>' + item.item_name + '</td>';
                                tableRow +='<td>' + item.item_id + '</td>';
                                tableRow +='<td>' + item.receive_quantity + ' KG</td>';
                                tableRow +='<td>' + item.adj_receive + ' KG</td>';
                                tableRow +='<td>' + item.action_by + '</td>';
                                tableRow +='</tr>'
                                
                                $('#receiveAdjTable').append(tableRow);
                            })
                        }
                        break;
    
                    case 'adjustedQuantity':
                        var filteredResponse = response.filter(function(item) {
                            return item.adj_receive !== null && item.adj_receive.toString().includes(searchKey);
                        });
                        
                        $('#receiveAdjTable tbody').empty(); 
        
                        if (filteredResponse.length === 0) {
                            tableRow = '<tr>'; 
                            tableRow += '<td colspan="7"style="text-align: center;">' + 'There is No Data' + '</td>';
                            tableRow += '</tr>';
                            $('#receiveAdjTable').append(tableRow);
                        } else {
                            filteredResponse.forEach(function(item){
                                tableRow ='<tr>';
                                tableRow +='<td>' + item.action_date + '</td>';
                                tableRow +='<td>' + item.action_time + '</td>';
                                tableRow +='<td>' + item.item_name + '</td>';
                                tableRow +='<td>' + item.item_id + '</td>';
                                tableRow +='<td>' + item.receive_quantity + ' KG</td>';
                                tableRow +='<td>' + item.adj_receive + ' KG</td>';
                                tableRow +='<td>' + item.action_by + '</td>';
                                tableRow +='</tr>'
                                
                                $('#receiveAdjTable').append(tableRow);
                            })
                        }
                        break;
    
                    case 'user':
                        var filteredResponse = response.filter(function(item) { 
                            return typeof item.action_by === 'string' && item.action_by.toLowerCase().includes(searchKey.toLowerCase()); 
                        });
                        
                        $('#receiveAdjTable tbody').empty();
                    
                        if (filteredResponse.length === 0) {
                            tableRow = '<tr>'; 
                            tableRow += '<td colspan="7"style="text-align: center;">' + 'There is No Data' + '</td>';
                            tableRow += '</tr>';
                            $('#receiveAdjTable').append(tableRow);
                        } else {
                            filteredResponse.forEach(function(item){
                                tableRow ='<tr>';
                                tableRow +='<td>' + item.action_date + '</td>';
                                tableRow +='<td>' + item.action_time + '</td>';
                                tableRow +='<td>' + item.item_name + '</td>';
                                tableRow +='<td>' + item.item_id + '</td>';
                                tableRow +='<td>' + item.receive_quantity + ' KG</td>';
                                tableRow +='<td>' + item.adj_receive + ' KG</td>';
                                tableRow +='<td>' + item.action_by + '</td>';
                                tableRow +='</tr>'
                                
                                $('#receiveAdjTable').append(tableRow);
                            })
                        }
                        break;
    
                    default:
                        var filteredResponse = response.filter(function(item) {
                            return Object.values(item).some(value => {
                                if (typeof value === 'string') {
                                    return value.toLowerCase().includes(searchKey.toLowerCase());
                                } else if (typeof value === 'number') {
                                    return value.toString().includes(searchKey);
                                }
                            });
                        });
                        $('#receiveAdjTable tbody').empty();
                    
                        if (filteredResponse.length === 0) {
                            tableRow = '<tr>'; 
                            tableRow += '<td colspan="7"style="text-align: center;">' + 'There is No Data' + '</td>';
                            tableRow += '</tr>';
                            $('#receiveAdjTable').append(tableRow);
                        } else {
                            filteredResponse.forEach(function(item){
                                tableRow ='<tr>';
                                tableRow +='<td>' + item.action_date + '</td>';
                                tableRow +='<td>' + item.action_time + '</td>';
                                tableRow +='<td>' + item.item_name + '</td>';
                                tableRow +='<td>' + item.item_id + '</td>';
                                tableRow +='<td>' + item.receive_quantity + ' KG</td>';
                                tableRow +='<td>' + item.adj_receive + ' KG</td>';
                                tableRow +='<td>' + item.action_by + '</td>';
                                tableRow +='</tr>'
                                
                                $('#receiveAdjTable').append(tableRow);
                            })
                        }
                        break;
                }
            },
            error: function(xhr, status, error){
                console.log(xhr.responseText);
            }
        });
    }
    receiveAdjTableData();

    $(document).on('click', '#renderReceive', function(){
        searchKey = '';
        receiveAdjTableData(); 
    })

    $(document).on('change', '#recAdjSearchFilter', function(){
        searchFilter = $(this).val();
        receiveAdjTableData();
    })

    $(document).on('input', '#recAdjSearch', function(){
        searchKey = $(this).val();
        receiveAdjTableData();
    })
    
});
