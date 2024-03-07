function searchLikeInput() {
    const searchThis = document.getElementById('searchInput').value;
    const searchFilter = document.getElementById('searchFilter').value;

    // AJAX
    fetch(`search_rm_history.php?searchQuery=${searchThis}&searchFilter=${searchFilter}`)
        .then(response => response.json())
        .then(data => {
            displayResults(data);

            console.log('R1:', data[0] ? data[0].result1 : null);
            console.log('R2:', data[0] ? data[0].result2 : null);
        })
        .catch(error => console.error('Error:', error));

    function displayResults(data) {
        const resultsContainer = document.getElementById('itemDisplayBody');
        resultsContainer.innerHTML = '';

        if (data.length === 0) {
            resultsContainer.innerHTML = 'No Results Found';
            return;
        }

        const containerDiv = document.createElement('div');
        containerDiv.classList.add('container', 'mt-5');

        const dataTable = document.createElement('table');
        dataTable.classList.add('table');

        const tableThead = document.createElement('thead');
        tableThead.innerHTML = `
        <tr>
            <th>Material Name</th>
            <th>Description</th>
            <th>ID</th>
            <th>Batch Number</th>
            <th>Pallet Number</th>
            <th>Date Received</th>
            <th>Time Received</th>
            <th>Received By</th>
            <th></th>
        </tr>
        `;

        dataTable.appendChild(tableThead);

        const tableTbody = document.createElement('tbody');
        let counter = 1;
        data.forEach(result => {
            const accordionItemId = "collapse" + counter++;
            const resultElement = document.createElement('tr');
            resultElement.innerHTML =
                `
                <td>${result.result1 ? result.result1.item_name : ''}</td>
                <td>${result.result1 ? result.result1.item_desc : ''}</td>
                <td>${result.result1 ? result.result1.item_id : ''}</td>
                <td>${result.result1 ? result.result1.item_lot : ''}</td>
                <td>${result.result1 ? result.result1.item_bin : ''}</td>
                <td>${result.result1 ? result.result1.action_date : ''}</td>
                <td>${result.result1 ? result.result1.action_time : ''}</td>
                <td>${result.result1 ? result.result1.action_by : ''}</td>
                <td>
                    <button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#${accordionItemId}" aria-expanded="false" aria-controls="collapse1">
                    View Transactions
                    </button>
                </td>
                `;
            const resultTransactionElement = document.createElement('tr');
            resultTransactionElement.innerHTML = 
            `
            <td colspan="9">
                <div class="collapse" id="${accordionItemId}">
                    <table class="table table-bordered">
                        <thead>
                            <tr>
                                <th>Action Date</th>
                                <th>Action Time</th>
                                <th>Action By</th>
                                <th>Quantity Receive</th>
                                <th>Quantity in Production</th>
                                <th>Quantity Scrap</th>
                                <th>Quantity Used</th>
                            </tr>
                        </thead>
                        <tbody>
                            ${result.result2 ? result.result2.map(item => `
                            <tr>
                                <td>${item.action_date || ''}</td>
                                <td>${item.action_time || ''}</td>
                                <td>${item.action_by || ''}</td>
                                <td>${item.quantity_receive || ''}</td>
                                <td>${item.quantity_inProduction || ''}</td>
                                <td>${item.quantity_scrap || ''}</td>
                                <td>${item.quantity_used || ''}</td>
                            </tr>
                            `).join('') : ''}
                        </tbody>
                    </table>
                </div>
            </td>
            `;

            tableTbody.appendChild(resultElement);
            tableTbody.appendChild(resultTransactionElement);
        })

        dataTable.appendChild(tableTbody);
        containerDiv.appendChild(dataTable);
        resultsContainer.appendChild(containerDiv);
    }
}
