// API Keys
const giphyAPIKey = '6M9rze3zIiNSUB8y9OBLeDnETWFBztWy';
const memesAPIKey = 'c2b7d1997fb54c2cad5ff44774377108';

// global variables
let keyword = ''

// ES6 syntax. fetchGifs function called with a parameter
const fetchGifs = (searchTerm) => {
    const requestURL = `https://api.giphy.com/v1/gifs/search?q=${searchTerm}&limit=48&&api_key=${giphyAPIKey}`

    fetch(requestURL)
        .then(res => {
            $('.main-container').removeClass('hide')
            return res.json()
        })
        .then(data => {
            $('.gifs-container').html('')

            let gifsRetrieved = data.data

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
                let h2Tag = document.createElement('h2')
                h2Tag.setAttribute('id', 'no-gifs-found')
                h2Tag.innerText = 'No gifs were found from search result'
                $('.gifs-container').append(h2Tag)
            }

            fetchMemes(searchTerm)
            // console.log(data)
        })
}

// fetchMemes function called without a parameter. API endpoint query params called with global variable: keyword
const fetchMemes = (searchKeyword) => {
    const requestURL = `https://api.humorapi.com/memes/search?api-key=${memesAPIKey}&keywords=${searchKeyword}&media-type=image&number=10`

    fetch (requestURL)
        .then(res => res.json())
        .then(data => {
            $('.memes-container').html('')

            let memesRetrieved = data.memes

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
            }
            
            
            console.log(data)
        })
}

// ES5 syntax
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

// search a keyword in the input field, to fetch data from API
function searchKeyword(event) {
    // event.preventDefault(). submitting a form refreshes the page; stop the page from refreshing
    event.preventDefault()
    //store search term into global variable: keyword
    keyword = $('#user-input').val()

    // clear search input box
    $('#user-input').val('')

    console.log(keyword)
    

    // if user typed in a search term, call fetchGifs with the keyword. else, pop up the modal to alert user to do so.
    if (keyword) {
        fetchGifs(keyword)
        searchStory.push(keyword) ;
        console.log(searchStory);
        localStorage.setItem("key", JSON.stringify(searchStory));
        populateHistory()

    } else {
        openModal()
        return
    }
}

function populateHistory(){
    let recent = JSON.parse(localStorage.getItem("key"));
    console.log(recent);
    let recentSearchDiv = document.getElementById("recent-search")
    recentSearchDiv.innerHTML = ""

    for (let i = 0; i < recent.length; i++){
    recentSearchDiv.innerHTML += "<button class='button is-link mb-4 is-fullwidth search-btn'>" + recent[i] + "</button>";
}
}


// addEventListener 
// submit form to call searchKeyword function

let searchStory = [];
let searchNumber = 0;

$('#search-form').on('submit', searchKeyword)



