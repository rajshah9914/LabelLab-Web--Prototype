# LabelLab-Web

As urbanization takes hold, the elephants have nowhere else to go and end up in fields searching for food.
In villages, elephants are considered pests. Very big and dangerous pests.  They raid crops and devastate and entire year's harvest.
Like any wild animal that is losing its habitat, elephants are becoming more aggressive and people are losing their lives.
Thus, this web-app enhances the features of labeling images which are dynamically uploaded on portal..

The requirement for the project originated with the need to label thousands of images of elephants. However the project was generalized to label not just elephant images, but any animal in general. The web application allows the users to upload batches of images and classify them. It will also have the features to run classifications against a trained model.

Prerequisites:-
Node and npm installed.

## Technology Stack

### Components
  * HTML - Render home page.
  * React Js - Structure for deployment of the web page.
  * Node js - Server implementation to store information of all images uploaded.
  * CSS - Web page styling options and details.
  * Javascript(JSON) - Used to store information for deploying the application, such as dependencies.

## Requirements
  * node --version >= 6
  * npm --version >= 3

## How to deploy?
### Running on localhost

Head to the development branch and follow the given steps.
  * Step 1: Fork the LabelLab Web Application repository and clone it to your machine. 
```
git clone https://github.com/rajshah9914/LabelLab-Web--Prototype.git
```

  * Step 2: Cd into the cloned folder
```
cd labellabs_scorelab
```

  * Step 3: Install all the dependencies with:
```
npm install 
```
  * Step 4: Run on http://localhost:1234 with:
```
npm run dev
```
The react web-app will run at localhost:1234 and will be built.


  * Step 5: To run server:
```
cd server
```
  * Step 6: Run the below step:
```
$ node server.js
```
or 
```
nodemon server.js
```

Server will now run at localhost:5000

Nodemon provides dynamic and automatic changes and deployment.

```
$npm install nodemon --save
```
