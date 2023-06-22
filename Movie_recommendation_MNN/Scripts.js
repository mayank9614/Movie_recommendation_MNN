// Our watchlist array
let watchlist = ['Inception', 'Interstellar', 'Django Unchained'];

// Function to display the watchlist
function displayWatchlist() {
    let watchlistSection = document.getElementById('watchlist');

    // Get the <ul> element inside the watchlist section
    let ulElement = watchlistSection.getElementsByTagName('ul')[0];

    // Remove all existing child nodes
    while (ulElement.firstChild) {
        ulElement.removeChild(ulElement.firstChild);
    }

    // Add movies to the watchlist
    for (let i = 0; i < watchlist.length; i++) {
        let newListItem = document.createElement('li');
        newListItem.textContent = watchlist[i];
        ulElement.appendChild(newListItem);
    }
}

// Call the display function when the window loads
window.onload = function () {
    displayWatchlist();
}
