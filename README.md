![GA Logo](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png)

# MEN Stack CRUD Lab (part 1): Create and Read

This entire lab should be done in a git repo.  Commit after every step or more.  There should be at least 12 commits for this part.

Come up with something to CRUD that has at least two properties. Don't get carried away (this time). 

1. Initialize a git repo.
1. Initialize a Node project. Make an initial commit. 
1. Make an express app that runs. Commit.
1. Make it render a page for "new". Commit.
1. Make a "create" route. Commit.
1. Have the form on "new" page post to the "create" route. Commit.
1. Connect express to mongo by installing and setting up mongoose. Commit once it logs a successful connection message.
1. Create the schema and model for your thing that you are CRUDding. Commit.
1. Make sure you can concisely and precisely answer these questions: 
    * What is a schema?  
    * What is a model?  
    * What is the difference?  
    * What is the relationship between them?
1. In the "create" route, use mongoose to add a document to your databse (`.create()`) based on what is in `req.body`. If you're having issues, check: is your `req.body` `undefined`? Where does `req.body` come from? Is there something you need to add to your app to make `req.body` be defined? (Yes, there is.) Commit.
1. Make an "index" page which displays all the models created by the app so far. Commit.
1. The "create" route redirect to the index page _after_ the model has been created. Commit.
1. Give your app the ability to render a "show" page. Commit.
1. Each item on the index page should link to the "show" page for that item. Commit.
