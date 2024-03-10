function searchLikeInput(page = 1) { // default value for page is 1 if its not yet repeated
    const searchThis = document.getElementById('searchInput').value; // search keyword from user
    const searchFilter = document.getElementById('searchFilter').value; // search filter

    // perform AJAX request to php script => search_rm_history.php
    fetch(`search_rm_history.php?searchQuery=${searchThis}&searchFilter=${searchFilter}&page=${page}`) // data attached searchInput - searchFilter - page
        .then(response => response.json()) // proccess response
        .then(data => {
            displayResults(data); // holds the array of data from response

            // console.log for debugging
            console.log('R1:', data[0] ? data[0].result1 : null); // Item Identity
            console.log('R2:', data[0] ? data[0].result2 : null); // Item Data
            console.log(data[0] ? data[0].rowCount : null); // Total Count of Rows
            console.log('pages needed:', data[0] ? data[0].pagesNeeded : null); // Pages Needed
            console.log('current page:', data[0] ? data[0].currentPage : null); // Current Page

            const pagesNeeded = data[0] ? data[0].pagesNeeded : 1; // pagesNeeded
            const currentPage = data[0] ? data[0].currentPage : 1; // currentPage

            paginationControls(pagesNeeded, currentPage); // calls the paginationControls and passing the data
        })
        .catch(error => console.error('Error:', error)); // error handler

    function displayResults(data) { // function for rendering the search results and its table
        const resultsContainer = document.getElementById('itemDisplayBody'); // targets the div to be the search results will be displayed
        resultsContainer.innerHTML = ''; // makes it empty first

        if (data.length === 0) { // handler if no results found
            resultsContainer.innerHTML = 'No Results Found';
            return;
        }

        // else proceed render the div and style it using bs5 classes
        const containerDiv = document.createElement('div'); // div
        containerDiv.classList.add('container', 'mt-5'); // classes

        const dataTable = document.createElement('table'); // table
        dataTable.classList.add('table'); 

        const tableThead = document.createElement('thead'); // table header
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

        const tableTbody = document.createElement('tbody'); // table body
        let counter = 1; // accordion counter
        data.forEach(result => { // foreach loop to iterate accordion for every data on the array from AJAX response
            const accordionItemId = "collapse" + counter++; // sets the accordion id and increments the counter for unique id
            const resultElement = document.createElement('tr'); // item identity row with row for collapsing item data rows
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
            const resultTransactionElement = document.createElement('tr'); // item data collapsed row
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

    function paginationControls(pagesNeeded, currentPage) {
        const controlsContainer = document.getElementById('itemDisplayFooter');
        controlsContainer.innerHTML = '';
    
        for (let i = 1; i <= pagesNeeded; i++) {
            const pageNumbers = document.createElement('a');
            pageNumbers.href = `?page=${i}`;
            pageNumbers.textContent = i;
    
            if (i === currentPage) {
                pageNumbers.classList.add('link-offset-3');
            }
    
            pageNumbers.addEventListener('click', function (event) {
                event.preventDefault();
                handlePageChange(i);
            });
    
            controlsContainer.appendChild(pageNumbers);
        }

        // Add "Previous" link
        if (currentPage > 1) {
            const prevLink = document.createElement('a');
            prevLink.href = `?page=${currentPage - 1}`;
            prevLink.textContent = 'Previous';
            prevLink.addEventListener('click', function (event) {
                event.preventDefault();
                handlePageChange(currentPage - 1);
            });
            controlsContainer.appendChild(prevLink);
        }

        // Add "Next" link
        if (currentPage < pagesNeeded) {
            const nextLink = document.createElement('a');
            nextLink.href = `?page=${currentPage + 1}`;
            nextLink.textContent = 'Next';
            nextLink.addEventListener('click', function (event) {
                event.preventDefault();
                handlePageChange(currentPage + 1);
            });
            controlsContainer.appendChild(nextLink);
        }
    }
    

    // function for repeating the proccess but with a different page 
    function handlePageChange(page) { // the function with a page parameter with a value from handlePageChange(i)
        searchLikeInput(page); // calls and pass the value of page to function to repeat the whole process when user change pages
    }
    // REPEAT => searchLikeInput
}
