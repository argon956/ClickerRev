# Cookie Clicker Revisited

Progressive Web Application developed with React and Javascript, that consists of a game in which players score points with every click on the scoring button, as well as with autoclickers that can be purchased with incremental cost, that generate points automatically.

The players appear ranked in a "Hall of Fame" section, can see their score in reduced format of count in units of thousands and millions, and can resume their game from the point they left it by logging in with their name again.

### Project structure

```
cypress
public
├── sw.js
src
├── __test__
├── components
├── helpers
│   ├── storageHelper.js
├── layouts
├── pages
├── App.jsx
├── index.jsx

```

### Used libraries

- `cypress` for end to end testing
- `react-autocomplete-hint` to search autocompletion
- `react-dom` for DOM management with react
- `react-router-dom` to create app routing
- `react-scripts`
- `@testing-library/react` to assist with testing
- `@testing-library/jest-dom` to assist with testing

And other assistive packages for code formatting and page styling:

- `postcss`
- `tailwindcss`

### `Node Version`

v18.12.1

### Running the project

Go to the site of this repository: https://github.com/argon956/ClickerRev

Open a new terminal and clone the project in a folder of your choice.

`> git clone https://github.com/argon956/ClickerRev`

Then, switch to the cloned folder, and run the following command:

`npm install`

Alternatively, you can visit the live instance of this application, with both offline and app install for Google Chrome modes, in [Netlify](https://thunderous-hummingbird-6184f4.netlify.app)

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See [Cypress.io](https://www.cypress.io/) for more information.

### `npx cypress open`

Launches Cypress' test runner gui mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
