$(function() {
    let selectedList = [];
    let selectedQuantity = 0;
    let selectedLimit;
    let selectedBox = '';
    let addLimit = 32;
    let maxHeight;

    function selectItem(event) {
        const clicked = $(event.target);
        const row = clicked.closest('tr');
        const itemData = {
            date: row.find('td:nth-child(1)').text(),
            rawname: row.find('td:nth-child(2)').text(),
            rawid: row.find('td:nth-child(3)').text(),
            name: row.find('td:nth-child(4)').text(),
            desc: row.find('td:nth-child(5)').text(),
            lot: row.find('td:nth-child(6)').text(),
            bin: row.find('td:nth-child(7)').text(),
            maxquantity: parseInt(row.find('td:nth-child(8)').text()) || parseInt(row.find('td:nth-child(9)').text())
        };

        if (clicked.is('button')) {
            if (selectedQuantity != addLimit) {
                row.addClass('table-success');
            }
            
            const selectedIndex = selectedList.findIndex(item => item.rawid === itemData.rawid);

            if (clicked.hasClass('select') && selectedIndex === -1) {
                if (selectedQuantity != addLimit) {
                    if (selectedList.length === 0) {
                        selectedList.push({ ...itemData, quantityselected: 1 });
                        enableButtons()
                    } else if (selectedList.some(item => item.name === itemData.name)) {
                        selectedList.push({ ...itemData, quantityselected: 1 });
                        enableButtons()
                    } else {
                        row.removeClass('table-success');
                        Swal.fire({
                            title: 'Finished Goods Mismatch',
                            text: 'Select Same Finished Goods',
                            icon: 'error',
                        });
                    }
                    updateSelection();
                    renderSelectedList();
                    listMaxHeight();
                }
            }
        }
    }

    function enableButtons() {
        $('#selectModal').removeAttr('disabled');
        $('#clearSelected').removeAttr('disabled');
    }

    function disableButtons() {
        if (selectedList.length === 0) {
            $('#selectModal').attr('disabled', 'disabled');
            $('#clearSelected').attr('disabled', 'disabled');
        }
    }


    function updateSelection() {
        selectedQuantity = selectedList.reduce((total, item) => total + item.quantityselected, 0);
        if (selectedQuantity <= 16) {
            selectedBox = 'Small';
            selectedLimit = '16';
        } else if (selectedQuantity <= 24) {
            selectedBox = 'Medium';
            selectedLimit = '24';
        } else {
            selectedBox = 'Large';
            selectedLimit = '32';
        }

        if (selectedQuantity != 0) {
            $('#quantityCount').text(`Selected: ${selectedQuantity}/${selectedLimit} ~ ${selectedBox} Box will be used`);
        } else {
            $('#quantityCount').empty();
        }
    }

    function renderSelectedList() {
        const list = selectedList.map(item => `
        <div class='selected-box text-center' style="background-color: #F5F5F5; border-radius: 10px; padding: 10px;">
            <div class="row row-cols-3 g-1">
                <div class='col'>
                    <h6 style="margin: 0px">FG</h6>
                    ${item.name}
                </div>
                <div class='col'>
                    <h6 style="margin: 0px">Description</h6>
                    ${item.desc}
                </div>
                <div class='col'>
                    <h6 style="margin: 0px">Lot</h6>
                    ${item.lot}
                </div>
                <div class='col'>
                    <h6 style="margin: 0px">Date Created</h6>
                    ${item.date}
                </div>
                <div class='col'>
                    <h6 style="margin: 0px">RawMat Id</h6>
                    ${item.rawid}
                </div>
                <div class='col'>
                    <h6 style="margin: 0px">Bin</h6>
                    ${item.bin}
                </div>
            </div>
            <hr class="border border-dark opacity-100" style="padding: 0; margin: 5px;">
            <div style="background-color: #FFFFFF; padding: 5px; border-radius: 5px;">
                <h6>Quantity Selected</h6>
                ${item.quantityselected} / ${item.maxquantity}
                <div class="btn-group" style="width: 100%;">
                    <button class="plus btn btn-sm btn-success" style="width: 49%;" ${selectedQuantity === addLimit ? 'disabled' : ''}><i class="fa-solid fa-plus"></i></button>
                    <button class="minus btn btn-sm btn-danger" style="width: 49%;"><i class="fa-solid fa-minus"></i></button>
                </div>
            </div>
        </div>    
        `).join('');
        $('#selectedList').empty().append(list);
    }

    function maintainHighlight() {
        var tableRowsData = [];
    
        $('#receiveTable tr:not(:has(th))').each(function() { // Ignore rows containing <th> elements
            var rowData = {};
            $(this).find('td').each(function(index) {
                if (index === 2) { // Assuming "rawid" column is at index 2
                    rowData['rawid'] = $(this).text(); // Store the value of "rawid" column
                    return false; // Exit the loop after retrieving "rawid" column value
                }
            });
            tableRowsData.push(rowData);
        });
    
        tableRowsData.forEach(function(rowData, rowIndex) {
            var rowRawid = rowData['rawid'];
            if (selectedList.some(item => item['rawid'] === rowRawid)) {
                $('#receiveTable tr:not(:has(th))').eq(rowIndex).addClass('table-success');
            }
        });
    }
    
    $('#receiveTable').on('click', 'tr', selectItem);

    $('#selectedList').on('click', '.plus', function() {
        const itemIndex = $(this).closest('.selected-box').index();
        if (selectedList[itemIndex].quantityselected < selectedList[itemIndex].maxquantity) {
            selectedList[itemIndex].quantityselected++;
            updateSelection();
            renderSelectedList();
        }
        listMaxHeight();
    });

    $('#selectedList').on('click', '.minus', function() {
        const itemIndex = $(this).closest('.selected-box').index();
        if (selectedList[itemIndex].quantityselected > 0) {
            selectedList[itemIndex].quantityselected--;
            updateSelection();
            renderSelectedList();
        }
        if (selectedList[itemIndex].quantityselected === 0) {   
            $('#receiveTable tr').each(function() {
                const row = $(this);
                const rowRawmatId = row.find('td:nth-child(3)').text();
                if (rowRawmatId === selectedList[itemIndex].rawid) {
                    row.removeClass('table-success');
                }
            });
            selectedList.splice(itemIndex, 1);
            disableButtons()
            renderSelectedList();
        }
        listMaxHeight();
    });

    $('#search').on('input', function(){
        if (selectedList.length != 0) {
            setTimeout(maintainHighlight, 3000);
        }
    });

    $('#receivedTablePagination').on('click', function(event) {
        if (selectedList.length != 0) {
            setTimeout(maintainHighlight, 3000)
        }
    });

    $('#clearSelected').on('click', function() {
        selectedList = [];
        $('#receiveTable tr').removeClass('table-success');
        $('#quantityCount').empty();
        renderSelectedList();
        updateSelection();
        listMaxHeight();
        disableButtons();
    });

    function listMaxHeight() {
        if (selectedQuantity != 0) {
            $('#selectedList').css("max-height", $('#selectedList').height() + "px");
        } else {
            $('#selectedList').css("max-height", maxHeight + "px");
        }
    };

    window.onload = function() {
        maxHeight =  $('#selectedList').height();
    }

    $('#packForm').on('submit', function(event) {
        event.preventDefault();
        const packName = $('#packName').val().trim();
        const packDesc = $('#packDesc').val().trim();
        const packId = $('#packId').val().trim();
        const packStorage = $('#packStorage').val().trim();

        if (packName !== '' && packDesc !== '' && packId !== '' && packStorage !== '') {
            packSelectedItems(packName, packDesc, packId, packStorage);
        } else {
            return
        }
    })

    function packSelectedItems(packName, packDesc, packId, packStorage) {
        if (selectedList.length != 0) {
            var dataToPost = {
                selectedList: selectedList,
                selectedQuantity: selectedQuantity,
                selectedBox: selectedBox,
                packName: packName,
                packDesc: packDesc,
                packId: packId,
                packStorage: packStorage
            };

            // product info
            var pname = packName;
            var pdesc = packDesc;
            var pid = packId;
            var pbin = packStorage;
            var pquantity = selectedQuantity;

            $.ajax({
                url: './php/fg_packaging.php',
                method: 'POST',
                contentType: 'application/json',
                data: JSON.stringify(dataToPost),
                success: function(response) {
                    console.log(response)

                    if (response === '0') {
                        Swal.fire({
                            title: 'Finished Goods Packed',
                            html: '<div style="text-align: center;"><p>Packaging Info</p><table style="margin: 0 auto; text-align: left;"><tr><td><b>Name:</b></td><td>' + pname + '</td></tr><tr><td><b>Description:</b></td><td>' + pdesc + '</td></tr><tr><td><b>Id:</b></td><td>' + pid + '</td></tr><tr><td><b>Storage Bin:</b></td><td>' + pbin + '</td></tr><tr><td><b>Quantity (pcs):</b></td><td>' + pquantity + ' pcs</td></tr></table></div>',
                            icon: 'success',
                        }).then(function() {
                            location.reload();
                        })
                    } else if (response === '2') {
                        Swal.fire({
                            title: 'Oops',
                            html: '<div style="text-align: center; font-family: Arial, sans-serif;">' +
                            '<p style="font-size: 18px; color: #333; margin-bottom: 10px;">Product Id: <span style="color: red;">' + pid + '</span> is Already Recorded in Inventory</p>' +
                            '<p style="font-size: 16px; color: #666;">Are you sure this ID is correct?</p>' +
                            '</div>',
                            icon: 'error',
                        })
                    } else {
                        console.log('Hello? Something Went Wrong on Submitting this data')
                    }
                },
                error: function(xhr, status, error) {
                    console.error(xhr.responseText)
                }
            })
        } else {
            Swal.fire({
                title: 'Selection is Empty',
                text: 'Select Finished Goods to be Packed',
                icon: 'warning',
            }).then(function() {
                location.reload();
            })
        }
    }
});
