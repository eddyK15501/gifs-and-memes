const giphyAPIKey = '6M9rze3zIiNSUB8y9OBLeDnETWFBztWy';
const memesAPIKey = 'c2b7d1997fb54c2cad5ff44774377108';

const fetchGifs = () => {
    const requestURL = `https://api.giphy.com/v1/gifs/random?api_key=${giphyAPIKey}`

    fetch(requestURL)
        .then(res => res.json())
        .then(data => console.log(data.data))
}

const fetchMemes = () => {
    const requestURL = `https://api.humorapi.com/memes/random?api-key=${memeAPIKey}&media-type=image`

    fetch (requestURL)
        .then(res => res.json())
        .then(data => console.log(data))
}

fetchGifs()
fetchMemes()