# React Section Portfolio

#### A web developer portfolio updated to use more recent knowlegde acquired from my time at Epicodus

#### By Christopher Davila

## Technologies Used

* _React_
* _JSX_
* _Node.js_
* _javascript_
* _Html_
* _EmailJS_
* _Sass_
* _Fort Awesome icon, brand and react libraries_
* _react Routers_



## Description
* This is a revamp of an earlier project from the introduction to programming section of Epicodus corriculum.  The first project was a simple html/css portfolio. This project will use much of the up to date knowledge aqcuired in the React section of the course for a sleeker and more reactive designed portfolio. It uses React and Sass to develop and interactive site with animation on load, and is connected to EmailJS service to functionally send input from the contact form to my actual Email.

## Setup/Installation Requirements

* 1. Clone this repo using `\$ git clone https://github.com/ChrisRDavila/react-section-portfolio.git`
to clone the GitHub repository.
* 2. Open your terminal (e.g., Terminal or GitBash) and navigate to the correct directory using `\$ cd react-section-portfolio` and run "npm install" to download all the package dependencies.
* 3. Next run `\$ npm run start` to start the server. Once the server loads, the webpage should load automatically but if not type in the localhost route that your terminal shows like `https://localhost:3000/`.
* 4. If creating your own porfolio, go to [EmailJS](https://www.emailjs.com/) to create your own free EmailJS account in order to obtain your own public key, template and service ID's for your own project
* 5. React and this project should come bootstrapped with .env-cmd dependency but make sure your project is able to recognize environmental variables by checking the package.json file or running `\$ npm i env-cmd`. Also make sure to add and commit your .gitignore file with .env in it for privacy.
* 6. create a .env file and save your public keys to a variable that begins with REACT_APP_ and proceeded by whatever name desired. It may be easiest to use the variables already being used in the project, just remove the process.env. when setting up the variables in the .env file.
* 7. test out EmailJS by filling out contact form and verifying that an email was indeed sent to your email upon submitting.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Known Bugs

* _No known bugs as of yet_

## License
[MIT](https://github.com/ChrisRDavila/react-section-portfolio/blob/main/License.txt)
