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
            rawid: row.find('td:nth-child(2)').text(),
            name: row.find('td:nth-child(3)').text(),
            desc: row.find('td:nth-child(4)').text(),
            lot: row.find('td:nth-child(5)').text(),
            bin: row.find('td:nth-child(6)').text(),
            maxquantity: parseInt(row.find('td:nth-child(7)').text()) || parseInt(row.find('td:nth-child(8)').text())
        };

        if (clicked.is('button')) {
            if (selectedQuantity != addLimit) {
                row.addClass('table-success');
            }
            
            const selectedIndex = selectedList.findIndex(item => item.rawid === itemData.rawid);

            if (clicked.hasClass('select') && selectedIndex === -1) {
                if (selectedQuantity != addLimit) {
                    selectedList.push({ ...itemData, quantityselected: 1 });
                    updateSelection();
                    renderSelectedList();
                    listMaxHeight();
                }   
            }
        }
    }

    function updateSelection() {
        selectedQuantity = selectedList.reduce((total, item) => total + item.quantityselected, 0);
        if (selectedQuantity <= 16) {
            selectedBox = 'Small Box will be Used';
            selectedLimit = '16';
        } else if (selectedQuantity <= 24) {
            selectedBox = 'Medium Box will be Used';
            selectedLimit = '24';
        } else {
            selectedBox = 'Large Box will be Used';
            selectedLimit = '32';
        }

        if (selectedQuantity != 0) {
            $('#quantityCount').text(`Selected: ${selectedQuantity}/${selectedLimit} ~ ${selectedBox}`);
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
                const rowRawmatId = row.find('td:nth-child(2)').text();
                if (rowRawmatId === selectedList[itemIndex].rawid) {
                    row.removeClass('table-success');
                }
            });
            selectedList.splice(itemIndex, 1);
            renderSelectedList();
        }
        listMaxHeight();
    });

    $('#search').on('change', function(){
        
    });

    $('#clearSelected').on('click', function() {
        selectedList = [];
        $('#receiveTable tr').removeClass('table-success');
        $('#quantityCount').empty();
        renderSelectedList();
        updateSelection();
        listMaxHeight();
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
});
