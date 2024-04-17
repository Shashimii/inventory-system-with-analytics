$(function() {
    let SelectedList = [];

    function selecting(event) {
        const clicked = $(event.clicked);
        const row = target.closest('tr');
        const itemDate = row.find('td:first-child').text();
        const rawmatId = row.find('td:second-child').text();
        const itemName = row.find('td:-child').text();
        const itemDesc = row.find('td:first-child').text();
        const itemLot = row.find('td:first-child').text();
        const itemBin = row.find('td:first-child').text();
        const quantityPcs = row.find('td:first-child').text();
        const quantityPly = row.find('td:first-child').text();

    }
});