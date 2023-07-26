# Project One - MemeFlix

## Description

MemeFlix is a web application that allows users to search for GIFs & Memes, upon searching a keyword. This website provides a convenient way for users to discover and share humorous content with friends and family. So get searching & start scrolling!

#### The API key for the memes, was upgraded to make 1000 requests per day. That upgrade will be deactivated on Aug. 14th, 2023. From that day on, Humor API will only be able to make 20 requests per day. If the memes do not seem to appear on the page, it may be due to this cause.

## Link to Deployed Application

https://eddyk15501.github.io/gifs-and-memes/


## Technologies Used

- **Front-end:**
  1. HTML
  2. Bulma CSS Framework
  3. CSS (personalizations by team)
  4. JavaScript
- **APIs:**
  1. Humor API: https://humorapi.com/docs/#Search-Memes
  2. GIPHY API: https://developers.giphy.com/

## Contributors

- Andrew Epermanis
- Edward Kim
- Elaine Luckey
- Michaela Steele
- Alex Stock

## Wireframe

![Wireframe](https://github.com/eddyK15501/gifs-and-memes/assets/134161776/5bb81da9-355d-4738-b98e-2f7c88119d57)

## Screenshots of the Deployed Application

#### Laptop L - 1440px
![alt text](./assets/images/screenshots/Screenshot%202023-07-23%20at%203.29.23%20PM.png)
![alt text](./assets/images/screenshots/Screenshot%202023-07-23%20at%203.29.35%20PM.png)

## User Stories

```
AS A user
I WANT the ability to navigate to the MemeFlix site
SO I can view the site

AS A user
I WANT the ability to have a navigation bar
SO the title MemeFlix displays

AS A user
I WANT the ability to have a GIFs link in the navigation bar
SO the page scrolls to the section of the page that has the GIFs displayed from the search results

AS A user
I WANT the ability to have a Memes link in the navigation bar
SO the page scrolls to the section of the page that has the Memes displayed from the search results

AS A user
I WANT the ability to use the Search bar
SO that all the GIFs and Memes are populated in a grid

AS A user
I WANT the ability to store previous searches in the local storage
SO that my previous searches display under the Search bar and I can access those searches again
```

## Acceptance Criteria

```
SCENARIO: The user views the page
   GIVEN the user navigates to the URL
   AND the page displays
   WHEN the user views the page
   THEN the navigation bar displays at the top of the page
   AND the navigation bar includes the title "MemeFlix"
   AND the navigation bar includes two links named "GIFs" and "Memes"
   AND the links are clickable
   WHEN the user clicks the GIFs link
   THEN the user is navigated to the GIFs section of the page
   WHEN the user clicks the Memes link
   THEN the user is navigated to the Memes section of the page
   WHEN the user views the search bar
   THEN the search bar displays on the left side of the page
   AND the search bar column takes 25% of the total view of the page
   AND the search results will display on the right side of the page
   WHEN the user executes a search
   THEN the search results will display in a GIFs section and a Memes section
   AND the displayed results will be styled in a CSS grid format
   AND all previous searches will display under the search bar

SCENARIO: The user clicks the MemeFlix
   GIVEN a search has been executed
   AND the search results display in the grid
   WHEN the user clicks a GIF from the results
   THEN the user is navigated to the original site location of the GIF
   WHEN the user clicks a Meme from the results
   THEN the user is navigated to the original site location of the Meme
```

## Breakdown of Tasks

- Set up repository and file structure
- Create wire frame
- Select a CSS Framework (Bulma selected)
- Select 2 APIs to call (Humor API & GIPHY API selected)
- Create & style navigation bar
- Add a scroll functionality on the navbar, to navigate the user to the appropriate section of the page
- Call 2 APIs in JavaScript to retrieve data on console.log
- Create a search bar on the left side of the page
- Pop up modal if form input is submitted empty, without a search keyword
- Add JavaScript to fetch data from both API calls, and append data onto the page
- Add an anchor tag to the gifs and memes, to hyperlink back to the original URL
- Append buttons with previously searched keywords, from local storage
- Create a CSS grid layout on the right side of the page for both the gifs and memes container
- Make the website responsive, for different screen sizes (navigation bar, search bar, search results, etc.)
- Update README.md with all needed information (Acceptance Criteria, User Stories, Tasks, Links, Screenshots, etc.)

## License

This project is licensed under the MIT License