const giphyAPIKey = '6M9rze3zIiNSUB8y9OBLeDnETWFBztWy';
const memesAPIKey = 'c2b7d1997fb54c2cad5ff44774377108';

const fetchGifs = () => {
    const requestURL = `https://api.giphy.com/v1/gifs/random?api_key=${giphyAPIKey}`

    fetch(requestURL)
        .then(res => res.json())
        .then(data => console.log(data.data))
}

const fetchMemes = () => {
    const requestURL = `https://api.humorapi.com/memes/random?api-key=${memesAPIKey}&media-type=image`

    fetch (requestURL)
        .then(res => res.json())
        .then(data => console.log(data))
}

fetchGifs()
fetchMemes()
/*
searchBtn = document.getElementById("searchBtn");
//creating a variable so that we can alternate colors of the the recent search blocks
let colorChoice = 1;
//variable to determine which search we are on
let searchNumber = 0

//adds an event listener that gets the target of the event then goes and finds the texxt input from the child element
searchBtn.addEventListener("click", function(event){
    let z = event.target;
    let zParent = z.parent.getAttribute("id");
    //saves the text input? this is probably not correct
    let input = zParent.userInput.text;
    //saves the text to local storage with the search number as the key
    localStorage.setItem(("" + searchNumber),("" + input));
    //increases search number
    searchNumber++;

});

*/

/*
//saves the div where the new buttons are going
recentSearch = document.getElementById("recentSearch");
*/

/*
//takes the last nine searches and appends them to the div
 for (let i = searchNumber-9; i < searchNumber+1; i++){

    recentSearch.innerHTML += "<button class = 'button" + colorChoice + "'>" + localStorage.getItem("" + i) + "</button>";

    //once we make css for classes 1 2 and 3 this should set the background color to our three favorites and should alternate
    if (colorChoice === 1){
        colorChoice++
    }else if (colorChoice === 2){
        colorChoice ++
    }else{
        colorChoice = 1
    }

};

*/
