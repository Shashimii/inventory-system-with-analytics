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

        let counter = 1;

        data.forEach(result => {
            const accordionItemId = "flush-collapse" + counter++;
            const resultElement = document.createElement('div');
            resultElement.innerHTML =
                `
            <div class='accordion accordion-flush' id='accordionDataRow'>
                <div class='accordion-item'>
                    <h2 class='accordion-header'>
                    <button class='accordion-button collapsed' type='button' data-bs-toggle='collapse' data-bs-target='#${accordionItemId}' aria-expanded='false' aria-controls='flush-collapseOne'>
                    ${result.result1 ? result.result1.item_name : ''} / ${result.result1 ? result.result1.item_desc : ''} / ${result.result1 ? result.result1.item_id : ''} / ${result.result1 ? result.result1.item_lot : ''} / ${result.result1 ? result.result1.item_bin : ''}
                    </button>
                    </h2>
                        <div id='${accordionItemId}' class='accordion-collapse collapse'>
                                <div class='accordion-body'>
                                <table class='table table-bordered'>
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
                                            <td>${item.action_date}</td>
                                            <td>${item.action_time}</td>
                                            <td>${item.action_by}</td>
                                            <td>${item.quantity_receive}</td>
                                            <td>${item.quantity_inProduction}</td>
                                            <td>${item.quantity_scrap}</td>
                                            <td>${item.quantity_used}</td>
                                        </tr>
                                    `).join('') : ''}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>      
            </div>

            `;

            resultsContainer.appendChild(resultElement);
        })
    }
}
