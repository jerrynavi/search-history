let searchHistoryBtn = document.querySelector('#search-btn');
let searchInput = document.querySelector('#search');
const form = document.querySelector("#form");
const historyList = document.querySelector('.searches ul');

searchHistoryBtn.addEventListener('click', searchHistoryList);

function searchHistoryList(event) {
    const searchHistoryValue = searchInput.value;

    let history = document.createElement('li');
    let text = document.createElement('p');
    text.textContent = searchHistoryValue;
    
    // history.setAttribute('type', 'li');

    // if (arr[0].length > 0) {
    //     for (let index = 0; index < arr.length; index++) {
    //         const className = arr[index];
    //         history.classList.add(className);
    //     }
    history.append(text);
    historyList.append(history);
    resetSearchInput()
}
    function resetSearchInput() {
        searchInput.reset();
    }