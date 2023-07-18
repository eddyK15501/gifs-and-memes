// API Keys
const giphyAPIKey = '6M9rze3zIiNSUB8y9OBLeDnETWFBztWy';
const memesAPIKey = 'c2b7d1997fb54c2cad5ff44774377108';

// global variables
let keyword = ''

// ES6 syntax. fetchGifs function called with a parameter
const fetchGifs = (searchTerm) => {
    const requestURL = `https://api.giphy.com/v1/gifs/search?q=${searchTerm}&limit=48&&api_key=${giphyAPIKey}`

    fetch(requestURL)
        .then(res => res.json())
        .then(data => {
            console.log(data)

            let fetchedData = data.data

            for (let i = 0; i < 10; i++) {
                console.log(fetchedData[i].images.fixed_height.webp)
            }

            fetchMemes()
        })
}

// fetchMemes function called without a parameter. API endpoint query params called with global variable: keyword
const fetchMemes = () => {
    const requestURL = `https://api.humorapi.com/memes/search?api-key=${memesAPIKey}&keywords=${keyword}&media-type=image&number=10`

    fetch (requestURL)
        .then(res => res.json())
        .then(data => {
            console.log(data)

            let fetchedData = data.memes;

            fetchedData.forEach(data => {
                console.log(data.url)
            })
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
    } else {
        openModal()
        return
    }
}


// addEventListener 
// submit form to call searchKeyword function
$('#search-form').on('submit', searchKeyword)



// searchForm = document.getElementById("searchForm");
// //creating a variable so that we can alternate colors of the the recent search blocks
// /*let colorChoice = 1;*/
// //variable to determine which search we are on
// let searchNumber = 0;

// //adds an event listener that gets the target of the event then goes and finds the texxt input from the child element
// searchForm.addEventListener("submit", function(event){
//     let z = event.target;
//     //let zParent = z.parentElement.getAttribute("id");
//     //saves the text input? this is probably not correct
//     let input = document.getElementById("userInput").value;
//     //saves the text to local storage with the search number as the key
//     localStorage.setItem(("" + searchNumber),("" + input));
//     //increases search number
//     searchNumber++;
// });

// //saves the div where the new buttons are going
// recentSearch = document.getElementById("recentSearch");



// //takes the last nine searches and appends them to the div
//  for (let i = 0; i < searchNumber +1; i++){
//     if(localStorage.getItem(""+ i) === null){
//         i++
//     }else{
//     recentSearch.innerHTML += "<button class = 'button'>" + localStorage.getItem("" + i) + "</button>";
//     };
//     //once we make css for classes 1 2 and 3 this should set the background color to our three favorites and should alternate
//     /*if (colorChoice === 1){
//         colorChoice++
//     }else if (colorChoice === 2){
//         colorChoice ++
//     }else{
//         colorChoice = 1
//     }*/
// };