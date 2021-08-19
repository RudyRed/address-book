# address-book

This is a pure React client-side address book app.

Deployed version:
https://frozen-wildwood-01402.herokuapp.com/

## Approach

### Over all approach

- First I drew a small wire frame of what i wanted the app to look like
- Using that wireframe I identified different components that each of the pages should be broken down into
  - Use a simple design, the app didn’t have any reason to be overly complex, making it simple made responsiveness straightforward
- Looked for a pretty standard React boilerplate using Material-UI inorder to speed up development
- Focused on one page at a time and developed the pages as such, using TDD
  -First focused on smaller components on the pages like the `List`, `ListItem` and `PeopleCard`
  - Then focused on creating the service (the data fetch)
  - Then created the `Layout` component
  - Then put it all together on the actual page file
  - Then Cleaned up the CSS styling to put it all together
- Next focused on the deployment of the application on Heroku creating a quick simple express server to serve the necessary files

### What features you implemented

- Created a home page with a list of people showing their picture and their full names
  - Created this page with a general Layout component used on both pages, a List component and a ListItem component
- Clicking on a list row will bring the user to the persons relevant details page with their picture, first and last name, and their phone number

### Given more time, what else would you have liked to complete and how long would it have taken you?

- Given more time I would have liked to have added some type of loading component, be that a general circular loading component, or preferably used Material-UI’s Skeleton to better preserve the page layout and make the difference between the loaded and loading states less jarring.

  - This would not have taken too long, maybe 2 hours, mostly to get the sizing/styling correct so there are not any shifts in the page layout between states. Adding the loading states to the useEffect hooks would be straightforward, with just adding a setLoading(true) before the async function is called and then adding setLoading(false) within the async function what will be triggered after the await if/when the proper data is returned from the fetch

- Another feature I would have liked to add would have been infinite scrolling. The [following library](https://www.npmjs.com/package/react-infinite-scroll-component) would have made this much easier. This would drastically improve the app and allow for more users to appear on the homepage in a way that required minimal effort from the user, yet because it’s really just a different form of pagination would not have a negative impact on performance.

  - This would have taken probably 4 hours. There would need to be some investigation into this library. Some time needed to implement it. The services currently being used in the app would have to be changed to handle pagination. And everything would have to be properly tested

- Lastly there is currently no fallback state should the fetches fail to return data. There would need to be some sort of fallback state to tell the user that the loading portion is complete, it just failed to return the relevant data
  - This would probably take around 2-3 hours, mostly because I would need to figure out some sort of design for the fallback state, but shouldn't be difficult over all

### Given more time, what else would you have done to make the project more robust?

- There currently is is not any proper error handling within the app so that would need ot be implemented to prevent the app from crashing
- Proper use of PropTypes would be good to ensure that components are being used correctly and with props of the correct type to prevent unexpected behaviours.
- currently on the server, pages/routes other than the home page are not properly handled. If you preform a hard refresh on the Heroku version nothing will load. This would need to be fixed.
- the boiler plate is using older versions of a lot of the libraries, it would be good to properly up them
- i also dont love how the boilerplate was set up to use `.js` files. JSX should really only be used in `.jsx` files and `.js` files should only really have Javascript. I don't have a good reason really other than the newer standards are to use `.jsx` files wherever JSX is used, so it really just comes down to good practice and the fact that `.jsx` is more clear about what is actually inside the file.

## Install dependencies

```
yarn install
```

## Run for dev

```
yarn dev
```

## Deploying to Heroku

### Install Heroku-CLI

[more info here](https://devcenter.heroku.com/articles/heroku-cli#download-and-install)

```
brew tap heroku/brew && brew install heroku
```

### Create Heroku app

from this repo's root run the following

```
heroku create
```

This will also create a Heroku remote allowing you to push changes directly to your Heroku app. you will need to create a Heroku account as well, the CLI will provide instructions on this.

### Deploying the app

This will deploy the code for this app to the Heroku remote, it will also return the URL to your app

```
git push heroku main
```
