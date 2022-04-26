# Volvo - Code Test

This test has been deployed to Vercel [here](https://volvo-test.vercel.app/)

## Brief

- Implement new design by team's designer, which shows the latest and greatest recharge cars on the website
- Use React and TypeScript
- Fetch cars data from the client side and render it in the browser
- Generate links to the learn and shop pages of each car by concatantating the ID of the car to the learn and shop URLs

## Features

- The user accesses the page and is presented with the most recent recharge cars from Volvo
- Each car has a learn and shop button beneath its image. By clicking on either of these buttons, the user is taken to a dedicated learn page for that car, or a shop page to buy
- The user can also access a car's dedicated learn page by clicking on the image of the car. This is highlighted (on desktop) to the user with the cursor changing to a pointer and with a subtle border appearing around the image when the user hovers over the image
- At the top of the homepage, the user can also filter the cars by the car body type. When a body type is clicked, only cars with that matching body type will be displayed. The user can also click on the 'all' button which will reset the filter and display all cars. For a more helpful experience for the user, the buttons have a subtle visual change when hovered over
- On the homepage, the user on mobile can scroll through the cars by swiping but there are also buttons which can scroll horizontally with a click
- On the cars' dedicated learn pages, the user can click on a button to take them back to the cars or click on a link to take them to the shop page
- On the shop page, the user can see the car's image, details and a buy button where they could place a purchase. On this page there is also a button to take them back to the all cars page. They are also able to go back to the car's specific learn page by clicking on the image of the car. The user is made aware that there is an action associated with this as

## Process

- I began by creating a next app, using the TypeScript template and installed React and react-router-dom. To this new project, I added the data files to test rendering the data in the app and then moved on to creating a reusable car tile component which could be reused for each car
- By creating a component that would render each car, and needing to pass the car data to the component, I needed to create an interface which could be passed to the component as a type. I did this by copying the structure of the data from the JSON file
- I moved on to routing as the product owner had specified this. I utilised Next's routing facility for a straightforward method for implementing this
- When this had been implemented, I started styling the app and decided to use sass. This would help me to make the app more consistent with color, font and sizing variables passed through the app
- I also started to focus on the responsiveness of the app and decided to use the CSS grid system for this with changes occurring when the screen is under 768px (average tablet size) and some when the screen width is 425px and below

## Future improvements

- There are some areas where the code repeats
- The 'HomeScreen' component contains a few features which could be separated out into separate files to make it easier to manage
- The layout of the learn and shop pages could be improved but this may be because there is not a lot of information to display. If this were a product for real release it would contain more information as well as brand logos to make the page feel more complete
- A facility to purchase from the shop page
