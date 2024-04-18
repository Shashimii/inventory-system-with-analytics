$(function() {
    let selectedList = [];

    function selecting(event) {
        const clicked = $(event.target);
        const row = clicked.closest('tr');
        const itemDate = row.find('td:nth-child(1)').text();
        const rawmatId = row.find('td:nth-child(2)').text();
        const itemName = row.find('td:nth-child(3)').text();
        const itemDesc = row.find('td:nth-child(4)').text();
        const itemLot = row.find('td:nth-child(5)').text();
        const itemBin = row.find('td:nth-child(6)').text();
        const quantityPcs = parseInt(row.find('td:nth-child(7)').text());
        const quantityPly = parseInt(row.find('td:nth-child(8)').text());

        if (!isNaN(quantityPcs)) {
            quantity = quantityPcs;
        } else {
            quantity = quantityPly;
        }

        const selectedIndex = selectedList.findIndex(item => item.rawid === rawmatId);

        if (clicked.hasClass('select')) {
            if (selectedIndex === -1) {
                selectedList.push({ date: itemDate, rawid: rawmatId, name: itemName, desc: itemDesc, lot: itemLot, bin: itemBin, maxquantity: quantity, quantityselected: 1 })
                renderselectedList()
            }
        }
    }

    function renderselectedList() {
        let list = '';
        for (let i = 0; i < selectedList.length; i++) {
            const item = selectedList[i];
            list +=`
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
                            <button class="plus btn btn-sm btn-success"><i class="fa-solid fa-plus"></i></button>
                            <button class="minus btn btn-sm btn-danger"><i class="fa-solid fa-minus"></i></button>
                        </div>
                    </div>
                </div>
            `;
        }

        $('#selectedList').empty()
        $('#selectedList').append(list);
    }

    $('#selectedList').on('click', '.plus', function() {
        console.log('plus');
        const itemIndex = $(this).closest('.selected-box').index();
        if (selectedList[itemIndex].quantityselected != selectedList[itemIndex].maxquantity) {
            selectedList[itemIndex].quantityselected++
            renderselectedList()
        }
    });
    
    $('#selectedList').on('click', '.minus', function() {
        console.log('minus');
        const itemIndex = $(this).closest('.selected-box').index();
        if (selectedList[itemIndex].quantityselected > 0) {
            selectedList[itemIndex].quantityselected--
            renderselectedList()
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
            renderselectedList()
        }
    });
    

    $('#receiveTable').on('click', 'tr', function(event) {
        const clickedElement = $(event.target);
        if (clickedElement.is('button')) {
            selecting(event);
            $(this).addClass('table-success');
        }
    });

    $('#clearSelected').on('click', function() {
        selectedList.length = 0;
        console.log('clicked')
        $('tr').removeClass('table-success');
        renderselectedList()
    })

    window.onload = function() {
        var fgManageList = $('#selectedList');
        var currentHeight = fgManageList.height();
        fgManageList.css("max-height", currentHeight + "px");
    };
});