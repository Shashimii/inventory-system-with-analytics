$(function() {
    let selectedList = [];
    let selectedQuantity;
    let selectedLimit;
    let selectedBox = '';
    let addLimit = 32;
    let maxHeight;
    let zeroSelected = false;
    let inputError = 0;

    function selectItem(event) {
        const clicked = $(event.target);
        const row = clicked.closest('tr');
        const itemData = {
            name: row.find('td:nth-child(1)').text(),
            id: row.find('td:nth-child(2)').text(),
            desc: row.find('td:nth-child(3)').text(),
            lot: row.find('td:nth-child(4)').text(),
            bin: row.find('td:nth-child(5)').text(),
            date: row.find('td:nth-child(6)').text(),
            maxquantity: parseInt(row.find('td:nth-child(7)').text().replace(/,/g, ''))
        };

        if (clicked.is('button')) {
            if (selectedQuantity != addLimit) {
                row.addClass('table-success');
            }
            
            const selectedIndex = selectedList.findIndex(item => item.id === itemData.id);

            if (clicked.hasClass('select') && selectedIndex === -1) {
                if (selectedQuantity != addLimit) {
                    if (selectedList.length === 0) {
                        selectedList.push({ ...itemData, quantityselected: 0 });
                        enableButtons()
                    } else if (selectedList.some(item => item.name === itemData.name)) {
                        selectedList.push({ ...itemData, quantityselected: 0 });
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

                $('#packName').val(itemData.name);
                $('#packDesc').val(itemData.desc);
            }

        }
    }

    function enableButtons() {
        $('#selectModal').removeAttr('disabled');
        $('#clearSelected').removeAttr('disabled');
        $('#quantityInvalid').empty();
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
            $('#quantityCount').text(`Selected: ${selectedQuantity.toLocaleString('en')}/${selectedLimit} ~ ${selectedBox} Box will be used`);
      
        } else {
            $('#quantityCount').empty();
        }

        if (selectedQuantity > 32) {
            $('#quantityInvalid').empty();
            var invalidQuantityMsg =`
                <p style="color: red"><b>Selected Quantity is Over the Limit</b></p>
            `;
            
            $('#quantityInvalid').append(invalidQuantityMsg);
            $('#selectModal').attr('disabled', 'disabled');

        } else if (selectedQuantity < 1){
            $('#quantityInvalid').empty();
            $('#selectModal').attr('disabled', 'disabled');

        } else if (inputError > 0) {
            $('#quantityInvalid').empty();
            $('#selectModal').attr('disabled', 'disabled');
        } else {
            $('#quantityInvalid').empty();
            $('#selectModal').removeAttr('disabled');
        }
    }


    function renderNoSelected() {
        if (selectedList.length === 0) {
            const noList = `
            <div style="text-align: center; margin-top: 20px;">
                <p style="font-size: 18px; color: #333;">No Finished Goods Selected</p>
            </div>`
            $('#selectedList').empty().append(noList);
        }
    }

    if (selectedList.length === 0) {
        renderNoSelected();
    }

    function renderSelectedList() {
        const list = selectedList.map(item => `
        <div class='selected-box text-center' style="background-color: #F5F5F5; border-radius: 10px; padding: 10px;">
            <div class="row row-cols-3 g-1">
                <div class='col'>
                    <h6 style="margin: 0px">Finished Goods</h6>
                    ${item.name}
                </div>
                <div class='col'>
                    <h6 style="margin: 0px">Serial Id</h6>
                    ${item.id}
                </div>
                <div class='col'>
                    <h6 style="margin: 0px">Dimensions</h6>
                    ${item.desc}
                </div>
                <div class='col'>
                    <h6 style="margin: 0px">Lot</h6>
                    ${item.lot}
                </div>
                <div class='col'>
                    <h6 style="margin: 0px">Bin</h6>
                    ${item.bin}
                </div>
                <div class='col'>
                <h6 style="margin: 0px">Date Created</h6>
                ${item.date}
            </div>
            </div>
            <hr class="border border-dark opacity-100" style="padding: 0; margin: 5px;">
            <div style="background-color: #FFFFFF; padding: 5px; border-radius: 5px;">
                <h6>Quantity Selected</h6>
                <div class="row">
                    <div class="col-md-6" style="padding-inline: 100px 0">
                        <input id="quantityInput" class="form-control form-control-sm w-70 text-center" type="number" pattern="[0-9]+" value="${item.quantityselected}"> 
                    </div>
                    <div class="col-md-6">
                        <p class="text-start">/ ${item.maxquantity.toLocaleString('en')}</p>
                    </div>
                </div>
            </div>
            <div class="input-card-button d-flex justify-content-end" style="width: 100%;">
                <button class="remove btn btn-sm btn-danger" style="width: 25%;"><i class="fa-solid fa-x"></i></button>
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
                if (index === 1) { // Assuming "id" column is at index 2
                    rowData['id'] = $(this).text(); // Store the value of "id" column
                    return false; // Exit the loop after retrieving "id" column value
                }
            });
            tableRowsData.push(rowData);
        });
    
        tableRowsData.forEach(function(rowData, rowIndex) {
            var rowid = rowData['id'];
            if (selectedList.some(item => item['id'] === rowid)) {
                $('#receiveTable tr:not(:has(th))').eq(rowIndex).addClass('table-success');
            }
        });
    }
    
    $('#receiveTable').on('click', 'tr', selectItem);

    $(document).on('input', '#quantityInput', function() { 
        const itemIndex = $(this).closest('.selected-box').index();
        inputQuantity = $(this).val();

        const maxQuantity = parseInt($(this).closest('.row').find('.text-start').text().trim().split('/')[1].replace(/,/g, ''));

        if(inputQuantity[0] === '0') {
            $(this).get(0).setCustomValidity("Enter a valid quantity");
        } else if (parseInt(inputQuantity) > maxQuantity) {
            $(this).get(0).setCustomValidity("This Finished Goods quantity is only " + maxQuantity.toLocaleString('en'));
            inputError++;
        } else {
            pushQuantity = parseInt(inputQuantity);
            selectedList[itemIndex].quantityselected = pushQuantity ? pushQuantity : 0;
            $(this).get(0).setCustomValidity("");
            inputError = 0;
        }

        $(this).get(0).reportValidity();
        updateSelection();
        listMaxHeight();

        console.log(selectedQuantity)
    })

    $(document).on('click', '.remove', function() {
        const itemIndex = $(this).closest('.selected-box').index();

        $('#receiveTable tr').each(function() {
            const row = $(this);
            const rowRawmatId = row.find('td:nth-child(2)').text();
            if (rowRawmatId === selectedList[itemIndex].id) {
                row.removeClass('table-success');
            }
        });
        selectedList.splice(itemIndex, 1);
        disableButtons()
        renderSelectedList();
        updateSelection();
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
        renderNoSelected();
    });

    function listMaxHeight() {
        $('#selectedList').css("max-height", $('#selectedList').height() + "px");
        $('#selectedList').css("max-height", maxHeight + "px");
    };

    window.onload = function() {
        maxHeight =  $('#selectedList').height();
    }

    $('#packForm').on('submit', function(event) {
        event.preventDefault();
        for (var i = 0; i < selectedList.length; i++) {
            if (selectedList[i].quantityselected === 0) {
                zeroSelected = true;
                break;
            }
        }

        if (zeroSelected) {
            console.log("MOHAHAHAHA🐸🐸🐸")
            zeroSelected = false;
        }

        const packName = $('#packName').val().trim();
        const packDesc = $('#packDesc').val().trim();
        const packStorage = $('#packStorage').val().trim();

        if (packName !== '' && packDesc !== '' && packStorage !== '') {
            packSelectedItems(packName, packDesc, packStorage);
        } else {
            return
        }
    })

    function packSelectedItems(packName, packDesc, packStorage) {
        if (selectedList.length != 0) {
            var dataToPost = {
                selectedList: selectedList,
                selectedQuantity: selectedQuantity,
                selectedBox: selectedBox,
                packName: packName,
                packDesc: packDesc,
                packStorage: packStorage
            };

            // product info
            var pname = packName;
            var pdesc = packDesc;
            var pbin = packStorage;
            var pquantity = selectedQuantity;

            $.ajax({
                url: './php/fg_packaging.php',
                method: 'POST',
                contentType: 'application/json',
                data: JSON.stringify(dataToPost),
                success: function(response) {
                    console.log(response)
                    pid = response;

                    Swal.fire({
                        title: 'Finished Goods Packed',
                        html: '<div style="text-align: center;"><p>Packaging Info</p><table style="margin: 0 auto; text-align: left;"><tr><td><b>Name:</b></td><td>' + pname + '</td></tr><tr><td><b>Description:</b></td><td>' + pdesc + '</td></tr><tr><td><b>Id:</b></td><td>' + pid + '</td></tr><tr><td><b>Storage Bin:</b></td><td>' + pbin + '</td></tr><tr><td><b>Quantity (pcs):</b></td><td>' + pquantity + ' pcs</td></tr></table></div>',
                        icon: 'success',
                    }).then(function() {
                        location.reload();
                    })
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

    function log() {
        console.table(selectedList)
    }
    setInterval(log, 10000)
});
