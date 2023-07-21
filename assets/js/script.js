// Global Variables
let searchHistory = []
let keyword = ''

// API Keys
const giphyAPIKey = '6M9rze3zIiNSUB8y9OBLeDnETWFBztWy';
const memesAPIKey = 'c2b7d1997fb54c2cad5ff44774377108';

// Fetch Gifs from the Giphy API
function fetchGifs(searchTerm) {
    // Giphy API request URL, with a maximum search result of 48 Gifs being retrieved back
    const requestURL = `https://api.giphy.com/v1/gifs/search?q=${searchTerm}&limit=48&api_key=${giphyAPIKey}`

    fetch(requestURL)
        .then(res => {
            // Remove hide class from the main container class, to display the Gifs and Memes
            $('.main-container').removeClass('hide')
            return res.json()
        })
        .then(data => {
            // Clear out the .gifs-container in advance, to append new search results
            $('.gifs-container').html('')

            let gifsRetrieved = data.data

            $('.gifs-container').css('display', 'grid')

            // If search results from Giphy API were found
            if (gifsRetrieved.length !== 0) {
                gifsRetrieved.forEach(gif => {
                    let anchorTag = document.createElement('a')
                    anchorTag.setAttribute('href', gif.url)
                    anchorTag.setAttribute('target', '_blank')
                    let imgTag = document.createElement('img')
                    imgTag.setAttribute('src', gif.images.fixed_height.webp)
                    imgTag.setAttribute('alt', gif.title)
                    anchorTag.append(imgTag)
                    $('.gifs-container').append(anchorTag)
                })
            } else {
                // Else, if no search results from Giphy API were found
                let h2Tag = document.createElement('h2')
                h2Tag.setAttribute('id', 'no-gifs-found')
                h2Tag.innerText = 'No gifs were found from search result'
                $('.gifs-container').append(h2Tag)
                $('.gifs-container').css('display', 'block')
            }
            // Call the Humor API to fetch memes data, as well as add the keyword to the recent searches
            fetchMemes(searchTerm)
            addSearchHistory(searchTerm)

            // console.log(data)
        })
}

// Fetch memes from the Humor API 
function fetchMemes(searchKeyword) {
    // Humor API request URL, with media type of images only, and maximum search results of 10
    const requestURL = `https://api.humorapi.com/memes/search?api-key=${memesAPIKey}&keywords=${searchKeyword}&media-type=image&number=10`

    fetch(requestURL)
        .then(res => res.json())
        .then(data => {
            // Clear out the .memes-container in advance, to append new search results
            $('.memes-container').html('')

            let memesRetrieved = data.memes
            
            $('.memes-container').css('display', 'grid')
            
            // If search results from Humor API were found
            if (memesRetrieved.length !== 0) {
                memesRetrieved.forEach(meme => {
                    let anchorTag = document.createElement('a')
                    anchorTag.setAttribute('href', meme.url)
                    anchorTag.setAttribute('target', '_blank')
                    let imgTag = document.createElement('img')
                    imgTag.setAttribute('src', meme.url)
                    imgTag.setAttribute('alt', meme.description)
                    anchorTag.append(imgTag)
                    $('.memes-container').append(anchorTag)
                })
            } else {
                // Else, if no search results from Humor API were found
                let h2Tag = document.createElement('h2')
                h2Tag.setAttribute('id', 'no-memes-found')
                h2Tag.innerText = 'No memes were found from search result'
                $('.memes-container').append(h2Tag)
                $('.memes-container').css('display', 'block')
            }
            
            // console.log(data)
        })
}

// Function that capitalizes the first letter of the word/words, given as a parameter
function caseSensitivity(searchTerm) {
    // Trim off any extra space in the search term being passed to the function in advance
    let trimmedTerm = searchTerm.trim()

    // Convert the input to lowercase and split it into words
    let updateTerm = trimmedTerm.toLowerCase().split(" ");
    let returnTerm = '';
    
    for (let i = 0; i < updateTerm.length; i++) {
        // Caplitalize the first letter of each words
        updateTerm[i] = updateTerm[i][0].toUpperCase() + updateTerm[i].slice(1);
        returnTerm += " " + updateTerm[i];
    }
    // Trim any extra space from the returned string
    return returnTerm.trim();
}

// Prepend a button into the recent searches, if the keyword has not been searched before
function addSearchHistory(searchTerm) {
    // Capitalize the first letter of search keyword/keywords
    let newSearchTerm = caseSensitivity(searchTerm)

    let previouslySearched = false

    // If searched keyword has been searched before, set boolean to true
    for (let i = 0; i < searchHistory.length; i++) {
        if (searchHistory[i] === newSearchTerm) {
            previouslySearched = true
        }
    }

    // If keyword has not been searched before
    if (!previouslySearched) {
        // move keyword to the first index within the searchHistory array
        searchHistory.unshift(newSearchTerm)

        // Create a new search history button and prepend it to the page
        const searchBtn = document.createElement('button')
        searchBtn.classList.add('button', 'is-link', 'mb-4', 'is-fullwidth', 'search-btn')
        searchBtn.innerText = `${searchHistory[0]}`
        $('#recent-search').prepend(searchBtn)
    } else {
        return
    }

    // If searchHistory has a length greater than 7, remove the last index from the array
    if (searchHistory.length > 7) {
        let nodes = document.querySelectorAll('.search-btn')
        let last = nodes[nodes.length - 1]
        last.remove()

        searchHistory.pop()
    }

    // Add the searchHistory array into localStorage
    localStorage.setItem('keywords', JSON.stringify(searchHistory))

    // For each search history buttons created, addEventListener to fetch data
    document.querySelectorAll('.search-btn').forEach(btn => {
        // removeEventListener before addEventListener to prevent event listeners from stacking
        btn.removeEventListener('click', fetchGifs)
        btn.addEventListener('click', (event) => {
            fetchGifs(event.target.innerText)
        })
    })
}

// Get local storage of previously searched keywords
function getLocalStorage() {
    // Retrieve previously searched keywords from local storage
    const keywordStorage = JSON.parse(localStorage.getItem('keywords'))

    // If localStorage is empty, return false
    if (!keywordStorage) {
        return false
    }

    // Populate the initial searchHistory array, with the local storage array
    searchHistory = keywordStorage

    addPreviouslySearched()
}

// Turn the previously searched keywords into a button, and append them onto the webpage on initial render
function addPreviouslySearched() {
    // If searchHistory array is not empty, create a button with the previously searched keywords
    if (searchHistory.length > 0) {
        searchHistory.forEach(search => {
            const searchBtn = document.createElement('button')
            searchBtn.classList.add('button', 'is-link', 'mb-4', 'is-fullwidth', 'search-btn')
            searchBtn.innerText = `${search}`
            $('#recent-search').append(searchBtn)            
        })
    } else if (searchHistory.length > 7) {
        // If the length of searchHistory is greater than 7, then remove the last index from the array
        let nodes = document.querySelectorAll('.search-btn')
        let last = nodes[nodes.length - 1]
        last.remove()
        searchHistory.pop()
    } else {
        return
    }

    // AddEventListener for each previously searched keyword buttons
    document.querySelectorAll('.search-btn').forEach(btn => {
        btn.removeEventListener('click', fetchGifs)
        btn.addEventListener('click', (event) => {
            fetchGifs(event.target.innerText)
        })
    })
}

// Function to open up a modal, to remind user to search for a keyword
function openModal() {
    $('.modal').addClass('is-active')

    function closeModal($el) {
        $el.classList.remove('is-active');
    }

    (document.querySelectorAll('.modal-background, .modal-close, .modal-card-head .delete, .modal-card-foot .button') || []).forEach(($close) => {
        const $target = $close.closest('.modal');
        
        $close.addEventListener('click', () => {
            closeModal($target);
        });
    });
}

// Search a keyword in the input field, to fetch data from API
function searchKeyword(event) {
    event.preventDefault()
    // Store search term into global variable: keyword
    keyword = $('#user-input').val()

    // Clear search input box
    $('#user-input').val('')
    
    // If user typed in a search term, call fetchGifs with the keyword.
    if (keyword) {
        fetchGifs(keyword)        
    } else {
        // Else, pop up the modal to alert user to do so.
        openModal()
        return
    }
}

// AddEventListener when submitting form, to call searchKeyword function
$('#search-form').on('submit', searchKeyword)
// Call getLocalStorage function on initial render
getLocalStorage()




















// searchStory.push(keyword);
// localStorage.setItem("key", JSON.stringify(searchStory));
// populateHistory()


// function populateHistory() {
//     let recent = JSON.parse(localStorage.getItem("key"));
//     console.log(recent);
//     let recentSearchDiv = document.getElementById("recent-search");
//     recentSearchDiv.innerHTML = "";

//     for (let i = recent.length - 8; i < recent.length; i++){
    
//     if (!recent[i]) {
//         i++
//     } else {
//         recentSearchDiv.innerHTML += "<button class='button is-link mb-4 is-fullwidth search-btn'>" + recent[i] + "</button>";
//     }
    
//     let btns = document.getElementsByClassName("search-btn")

//     for (let i = 0; i < btns.length; i++) {
//         btns[i].addEventListener("click", function(event) {
//             let text = event.target.innerText;
//             fetchGifs(text);
//         });
//     }
    
//     }
// }

// let searchStory = [];
// let searchNumber = 0;