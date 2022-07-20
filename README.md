## Shopping Cart

A simple products page, where you can add products to a shopping cart. 


## Installation and Setup Instructions

### Prerequisite

You will need `node` and `npm` installed globally on your machine.

```bash

# install dependencies
npm install

#to start server:
npm run start

#to visit app:
localhost:3000

#to create a build of the app:
npm run build
```

## Reflection

I chose to minimise time spent on the visuals and instead invest more time on the functionality so I used just React and CSS.
One challenge I faced was that when user refreshed the page, any items user has put in their cart was lost. 
To combat this I used local storage to store data on the client's browser so that it persists even after the browser window is closed.