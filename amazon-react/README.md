## Command-Line Process

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify

### React Routers
- `npm install react-router-dom`
- In `App.js` add `import { BrowserRouter as Router, Switch, Route } from "react-router-dom";`

### React Currency Format
- `npm i react-currency-format`

### npm
- If npm installations don't work, try using `sudo` in front

### Firebase
- `sudo npm i -g firebase-tools`
- `firebase login`
- `firebase init`
- Choose: Hosting: Configure and deploy Firebase Hosting sites
- Choose: Use an existing project
- Write: build
- `firebase deploy`
- On firebase, go to the project, go to the general settings at the very bottom, and get the config var for the `firebase.js` file
- On Firebase, go to Authentication -> Sign-in method -> Email/Password and click enable and then save

- `npm i firebase`
- In `firebase.js` write: `import firebase from "firebase";`
- Add the following to `firebase.js`:
 
```javascript
  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { db, auth };
```

### Deploying the app
- `npm run build`
- `firebase deploy`

### Stripe 
- `npm i @stripe/stripe-js`
- `npm i @stripe/react-stripe-js`
- import both

### Axios
- `npm i axios`

### Cloud Functions
- `firebase init`
- Choose `Functions: Configure and deploy Cloud Functions``
- Choose `JavaScript``
- Type `y`
- Type `y`
- cd functions
- The functions folder is the back-end of the project

#### Express
- `npm i express`
- In `functions/index.js/`, add `const express = require("express");`

#### Emulate
- In the functions folder: `npm install stripe --save`
- Command: `firebase emulators:start`

#### Moment
- `npm install moment`

#### Deployment 
- `firebase deploy --only functions`
- On the link that gets generated, go to functions in the menu and get the API link for axios