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
        $('#selectModal').attr('disabled', 'disabled');
        $('#clearSelected').attr('disabled', 'disabled');
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
            <div class='selected-box text-center' style="background-color: #98EECC;">
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
                <hr class="border border-dark opacity-100" style="padding: 0; margin: 0;">
                <div style="background-color: #F0DBAF; margin: 1px;">
                    <h6>Quantity Selected</h6>
                    ${item.quantityselected} / ${item.maxquantity}
                    <div>
                        <button class="plus btn btn-sm btn-success" ${selectedQuantity === addLimit ? 'disabled' : ''}><i class="fa-solid fa-plus"></i></button>
                        <button class="minus btn btn-sm btn-danger"><i class="fa-solid fa-minus"></i></button>
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

            $.ajax({
                url: './php/fg_packaging.php',
                method: 'POST',
                contentType: 'application/json',
                data: JSON.stringify(dataToPost),
                success: function(response) {
                    console.log(response)

                    if (response === '0') {
                        Swal.fire({
                            title: 'Packed',
                            text: 'Finished Goods is Packed',
                            icon: 'success',
                        }).then(function() {
                            location.reload();
                        })
                    } else if (response === '2') {
                        Swal.fire({
                            title: 'Already There',
                            text: 'Product with Same Id Already Packed',
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
