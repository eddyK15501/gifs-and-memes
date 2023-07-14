const giphyAPIKey = '6M9rze3zIiNSUB8y9OBLeDnETWFBztWy';
const memesAPIKey = 'c2b7d1997fb54c2cad5ff44774377108';

let keyword = ''

// ES6 syntax. fetchGifs function called with a parameter
const fetchGifs = (searchTerm) => {
    const requestURL = `https://api.giphy.com/v1/gifs/search?q=${searchTerm}&limit=15&&api_key=${giphyAPIKey}`

    fetch(requestURL)
        .then(res => res.json())
        .then(data => {
            console.log(data)

            // fetchMemes()
        })
}

// fetchMemes function called without a parameter. called with global variable: keyword
const fetchMemes = () => {
    const requestURL = `https://api.humorapi.com/memes/search?api-key=${memesAPIKey}&keywords=${keyword}&media-type=image`

    fetch (requestURL)
        .then(res => res.json())
        .then(data => console.log(data))
}

// ES5 syntax
function searchKeyword(event) {
    // event.preventDefault(). submitting a form refreshes the page. stop the page from refreshing
    event.preventDefault()
    //add search term to global variable: keyword
    keyword = $('#userInput').val()
    // clear search input box
    $('#userInput').val('')

    console.log(keyword)

    // if user typed in a search term, call fetchGifs of the keyword. else, pop up the modal to alert user to do so.
    if (keyword) {
        fetchGifs(keyword)
    } else {
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

        return
    }
}


// addEventListener 
// search for keyword, then click on the button, or press enter, to call searchKeyword function on submit
$('#searchForm').on('submit', searchKeyword)