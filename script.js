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

        data.forEach(result => {
            const resultElement = document.createElement('div');
            resultElement.textContent = `${result.id}:${result.action_date}|${result.action_time}|${result.action_by}|${result.item_name}|${result.item_desc}|${result.item_id}|${result.item_lot}|${result.item_bin}`;
            resultsContainer.appendChild(resultElement);
        })
    }
}

