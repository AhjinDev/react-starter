# Starter Kit ReactJS (TypeScript/TailwindCSS/Recoil)

This starter kit is based on the `npx create-react-app starter-kit --template typescript` command. \
We choose to implement [TailwindCSS](https://v2.tailwindcss.com/docs) as the CSS Framework.

For the state management, we decide to use [Recoil](https://recoiljs.org/fr/), a open source state management lib for React and created by Facebook.

The principle language is [TypeScript](https://www.typescriptlang.org/), it is useful for get less debug thanks to Types.

## Project Structure

This structure will evolve during the process of getting a good starter kit

```
project
└───src
│   └───api
│   └───assets
│   └───atoms
│   └───components
│   │   └───%component%
│   └───pages
│   └───lib
│   └───routes
│   └───selectors
```

<u>&#8594; api :</u> contains the API files \
<u>&#8594; assets :</u> contains all the resources (Images/Videos/Sound/Fonts/...) \
<u>&#8594; atoms :</u> contains the atoms files for Recoil \
<u>&#8594; components :</u> contains all the components of the app, 1 folder by component \
<u>&#8594; %component% :</u> contains all the component files  \
<u>&#8594; pages :</u> The pages files \
<u>&#8594; lib :</u> contains all the files for utils and services that will be used by many component \
<u>&#8594; routes :</u> contains the routes files \
<u>&#8594; selectors :</u> contains the selectors files for Recoil \


## Good practices

#### &#8594; One component = One folder 
We need to separate the different component. When a component deals with data/recoil/UI, it can be useful to put the processing into a separate .js file, this have for goal to help us during the testing phase. \

#### &#8594; SMART/DUMB components 
We can separate the component in two sub directory. The SMART one is for the components which manipulate data/recoil/UI and the DUMB one is for the components which only show data.

#### &#8594; Too many props 
When a component have to many props, it can be useful to subdivide it into two or more components to simplify its "tasks".

#### &#8594; PropTypes 
We need to define types of props to get a better debug phase and not waste more time.

#### &#8594; Lib folder 
When a processing function or a service is used by many components, its .js file have to be moved to the lib folder.
When a function don't have a component logic, we put its .js file here.

#### &#8594; Export names 
When we export something, we need to name the export as the name of the file. 

#### &#8594; JEST Test 
Each component get its test file into its own folder.


## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `docker build -t react-image .`

Builds the docker image based on the Dockerfile and .dockerignore.
This image is required to start the app in a Docker container.

### `docker run --rm -p 3000:3000 -v $(pwd)/src:/app/src:ro react-image`

Launch a Docker container based on our docker image created before.

-p : bind our port 3000 on the container's port 3000 \
-v : bind our project folder on the container folder (this allows to dev in the container) 

! WARNING ! \
This command works only on Linux Kernel (Linux/MacOS) 
