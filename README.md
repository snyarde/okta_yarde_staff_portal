# This project is a mashup of tecniques to learn React.
Starting with [React Authentication App With Okta](https://www.youtube.com/watch?v=5j4FXMQBzmg)

Create directory to hold project and cd into it

### `npx create-react-app .`

Setup gh-pages starting about 14 min in [GitHub Pages Deploy & Domain](https://www.youtube.com/watch?v=SKXkC4SqtRk)

### `npm i gh-pages`

Edit package.json with homepage and build directive then build and deploy:

### `npm run build`
### `npm run deploy`

The URL is in settings under [GitHub Pages](https://snyarde.github.io/okta_yarde_staff_portal/). Optionally connect a domain.

Install the router. Also a quick tutorial on it here: [Learn React Router in 5 Minutes - A Beginner's Tutorial](https://www.freecodecamp.org/news/react-router-in-5-minutes/)

### `npm i react-router-dom`

Add the okta react sdk to the project [Okta Authentication Quickstart Guides](https://developer.okta.com/quickstart/#/react/nodejs/express)

### `npm i @okta/okta-react`

Add the okta sign in widget

### `npm i @okta/okta-signin-widget`

There are a few different tutorials in Okta. The Okta React YouTube video is based on this [Okta Sign-In Widget](https://developer.okta.com/code/react/okta_react_sign-in_widget/)

Also the tutorial above might need to be updated for this bug fix [Okta Widget CSS errors](https://devforum.okta.com/t/okta-widget-css-errors/5827)

The code in the video is also a bit out of date. They've updated the example code to use a more secure flow. I've commented out the lines to keep the original flow. However I should read this post and improve this [Implement the OAuth 2.0 Authorization Code with PKCE Flow](https://developer.okta.com/blog/2019/08/22/okta-authjs-pkce)

Finally, GitHub Pages has some limitations in terms of serving up SPAs. I was able to fix part of the issue with having the correct base URL show but not correct the second issue with the Okta redirect URI not being found. Tried to follow the instructions here but it only created an infinite loop of 404s being redirected to itself. [So you want to host your Single Page React App on GitHub Pages?](https://itnext.io/so-you-want-to-host-your-single-age-react-app-on-github-pages-a826ab01e48)

----------

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
