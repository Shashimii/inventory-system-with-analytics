function searchLikeInput() {
    const searchThis = document.getElementById('searchInput').value;
    const searchFilter = document.getElementById('searchFilter').value;

    //AJAX
    fetch(`search_rm_history.php?searchQuery=${searchThis}&searchFilter=${searchFilter}`)
    .then(response => response.json())
    .then(data => {
        displayResults(data);
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
                        ${result.item_name} / ${result.item_desc} / ${result.item_id} / ${result.item_lot} / ${result.item_bin}
                    </button>
                    </h2>
                <div id='${accordionItemId}' class='accordion-collapse collapse'>
                        <div class='accordion-body'>
                            Date: ${result.action_date} - Time: ${result.action_time} - Received: ${result.quantityReceive} - Action By: ${result.action_by} <br>
                            Date: ${result.action_date} - Time: ${result.action_time} - In Production: ${result.quantityInProduction} - Action By: ${result.action_by}<br>
                            Date: ${result.action_date} - Time: ${result.action_time} - Used: ${result.quantityUsed} - Action By: ${result.action_by} <br>
                            Date: ${result.action_date} - Time: ${result.action_time} - Scrap: ${result.quantityScrap} - Action By: ${result.action_by}<br>
                        </div>
                    </div>
                </div>      
            </div>

            `;

            resultsContainer.appendChild(resultElement);
        })
    }
}

