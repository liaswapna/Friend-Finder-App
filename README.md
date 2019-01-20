# Friend-Finder-App

### Overview
---
A friend-matching app.
Users answer questions about themselves and are displayed with the closest match from the database.

### Getting Started
---
* Clone down repo ``` git clone git@github.com:liaswapna/Friend-Finder-App.git```.
* Navigate to the repo ```cd Friend-Finder-App```.
* Run command ```npm install``` in Terminal or GitBash
* Run command ```node server``` to start ther server.

### Technologies Used
---
* HTML5
* CSS3
* Bootstrap
* Node.js
* Express

### Dependencies
---
```js
{
    "express": "^4.16.4",
}
```

#### Code Explanation
---
* **server.js** : File that sets up the Express server, specifying the port number, the npm packages that need to be loaded, and also the routes, which we have externalized.

* **HTML files:** Servers the front-end of the app.
    * home.html:  This file serves the home page with navigation links to survey page and github.
    * survey.html: This page helps the user to finish the survey and submit it, there by getting the Best match.
* **Routing files:** serves the back-end-routing logic.
    * htmlRoutes.js : This route file display the survey and the homepage based on the URL that is accessed.
    * apiRoutes.js: API routes send back existing content in our server-side data or add new friends.
* **Logic:** Best match is calculated by finding the friend with the minimal difference in scores and then sending that friend to the browser as a JSON object.
    * A modal is then toggled, displaying the the best match to the person who just took the survey.
    * Friends are stored as such:
        ```
        {
            name: "lia",
            photo: "http://via.placeholder.com/640x360",
            scores: [5, 4, 2, 3, 1, 2, 5, 2, 1, 3]
        }
        ```

### Demos
---
* Friend-Finder_App
    * [Heroku Link](https://boiling-forest-41296.herokuapp.com/)