# Project One - GIFs & Memes

## Description

The GIFs & Memes site is a web application that allows users to easily search and navigate to memes and GIFs using keywords. This application aims to provide a convenient way for users to discover and share humorous content with their friends and family.

## User Stories

```
AS A user
I WANT the ability to navigate to the GIFs & Memes site
SO I can view the site

AS A user
I WANT the ability to have a navigation bar
SO the title GIFs and Memes displays

AS A user
I WANT the ability to have a GIFs link in the navigation bar
SO the page scrolls me to the section of the page that has the GIFs displays from the search results

AS A user
I WANT the ability to have a Memes link in the navigation bar
SO the page scrolls me to the section of the page that has the Memes displays from the search results

AS A user
I WANT the ability to use the Search bar
SO that all the GIFs and Memes are populated in a grid

AS A user
I WANT the ability to store previous searches in the local storage
SO that my previous search display under the Search bar and I can access those searches again
```

## Acceptance Criteria

```
SCENARIO: The user views the page
   GIVEN the user navigates to the URL
   AND the page displays
   WHEN the user views the page
   THEN the navigation bar displays at the top of the page
   AND the navigation bar includes the title "GIFs & Memes"
   AND the navigation bar includes two links named "GIFs" and "Memes"
   AND the links are clickable
   WHEN the user clicks the GIFs link
   THEN the user is navigated to the GIFs section of the page
   WHEN the user clicks the Memes link
   THEN the user is navigated to the Memes section of the page
   WHEN the user views the search bar
   THEN the search bar displays on the left side of the page
   AND the search bar column takes 20% of the total view of the page
   AND the search results will display on the right side of the page
   WHEN the user executes a search
   THEN the search results will display in a GIFs section and a Memes section
   AND the GIFs and memes will be in a grid
   AND the grid takes 80% of the total view of the page
   AND all previous searches will display under the search bar

SCENARIO: The user clicks the GIFs and memes
   GIVEN a search has been executed
   AND the search results display in the grid
   WHEN the user clicks a GIF from the results
   THEN the user is navigated to the original site location of the GIF
   WHEN the user clicks a meme from the results
   THEN the user is navigated to the original site location of the meme
```

## Wireframe

![Wireframe](https://github.com/eddyK15501/gifs-and-memes/assets/134161776/5bb81da9-355d-4738-b98e-2f7c88119d57)

## Technologies Used

- **Front-end:**
  1. HTML
  2. Bulma CSS Framework
  3. CSS (personalizations by team)
  4. JavaScript
- **APIs:**
  1. Humor API: https://humorapi.com/docs/#Search-Memes
  2. GIFY API: https://developers.giphy.com/

## Contributors

- Andrew Epermanis
- Edward Kim
- Elaine Luckey
- Michaela Steele
- Alex Stock

## Breakdown of Tasks

- Set up repository and file structure
- Create wire frame
- Select a CSS Framework (Bulma selected)
- Select 2 APIs to call (Humor API & GIFY API selected)
- Create & style navigation bar
- Update README.md with all needed information (Acceptance Criteria, User Stories, Tasks, Links, Screenshots, etc.)
- Add an "a" tag or "link" tag to add a link to the original location of the gif or meme
- Create a grid on the right side of the page for the GIFs and Memes to display
- GIFs and Memes will display in a group of 12 - 15 each
- Create a search bar on the left side of the page
- Add all searches to local storage
- Create a GIF link and a Meme link to scroll the user to the appropriate search results section of the page
- Add JavaScript fetch for console.log data
- Responsive site (navigation bar, search bar, search results, etc.)
- Call 2 APIs in JavaScript

## License

This project is licensed under the MIT License

## Link to Deployed Application

## Screenshots of Deployed Application
