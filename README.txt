Nigel Mun Shopee UI Developer Internship test task

Github link for code: https://github.com/munnigel/React-Redux-CRUD-booklist

npm version: 8.12.2
node version: 18.4.0

Instructions for using the web app:

1. You can access the webpage deployed from Heroku: https://stormy-crag-55641.herokuapp.com/

2. You can deploy the website locally:

    a. Install all npm dependencies: 
        "npm i react-scripts"

    b. Deploy locally:
        "npm start"

There are several options you can do with this web application: Create, Edit and Delete books in a book list.

In the main page:
There are several books already in the list, as from the books.json file provided. The title, ISBN and genre are first displayed. Hovering over each card will also show the summary.
You can search a book by its title, and the cardview will only show the books that match your input.
Clicking the "Add book" button redirects you to "/add" page. 
Clicking on each book card redirects you to the "/edit/:isbn" page, whereby :isbn is the parameter of the book you are clicking.

In the Add book page:
You have to fill the required details of the books. If required field are not present, the "ADD BOOK" button is disabled.
Clicking the "Back to main page" button redirects you back to "/".

In the Edit book page:
You can either click "UPDATE BOOK" or "DELETE BOOK" whereby each button performs an update or delete request respectively, and redirects you back to "/" page.
Clicking the "Back to main page" button redirects you back to "/".