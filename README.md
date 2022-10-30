### Simple Recipes Finder


## Current Update
I'm currently updating my old recipe web application project with new UI.
![image](https://user-images.githubusercontent.com/64029918/198901095-1570fc06-9323-438f-b5c1-9ab31c4dedf2.png)


6 components:
- Input error warning
- Recipes cards
- Card Container
- Recipes Details
- Liked Recipe Page

3 Client routing:
- Recipes cards
- Card Container
- Landing Page
- Liked Recipe page

## Installation

//First enter this into your console and press enter:
``` 
$ npm install
```
It uses JSON server as backend.
Please download JSON server globally by:

```
$ npm install -g json-server
```
To run the frontend, use the command:

```
$ npm start
```

To run the JSON server, use the command:

```
$ npm run server #
```
The Json server is set to run on Localhost: 4000 at the moment but, you can always change that by accessing script section in the package.json file.
It should look like this:

```
// Change the number after "port" to change the JSON port number.
"server": "json-server --watch db.json --port 4000"
```

## Recipe web application (Outdated look)

![image](https://user-images.githubusercontent.com/64029918/152034898-2b379e0c-7dc9-46b1-8072-b8d4bb6db672.png)
I created a simple recipe finder using spoonacular API and React JS framework.
It simply allow users to enter food name and the app automatically displays 10 recipes related to what the user searched.

![image](https://user-images.githubusercontent.com/64029918/152035152-21f3befe-5762-4182-a1c7-a10f0db95428.png)
Each recipes provides an image of the recipe, title, and the link. The link takes the user to recipe card page where user can see the picture, title, preparation time, and the link to the original recipe. 

In addition, there is a "Go back" button to go back to the search page.
![image](https://user-images.githubusercontent.com/64029918/152035638-c128d9d5-8f7e-457e-a5ca-c81b3979cb01.png)
