# Volvo - Code Test

This test has been deployed to Vercel [here](https://volvo-test.vercel.app/)

## Brief

- Implement new design by team's designer, which shows the latest and greatest recharge cars on the website
- Use React and TypeScript
- Fetch cars data from the client side and render it in the browser
- Generate links to the learn and shop pages of each car by concatantating the ID of the car to the learn and shop URLs

## Process

- I began by creating a next app, using the TypeScript template and installed React and react-router-dom. To this new project, I added the data files to test rendering the data in the app and then moved on to creating a reusable car tile component which could be reused for each car
- By creating a component that would render each car, and needing to pass the car data to the component, I needed to create an interface which could be passed to the component as a type. I did this by copying the structure of the data from the JSON file
- I moved on to
- Moved on to routing as I knew the product owner had specified we could generate links to learn and shop urls with the product ID

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Challenges

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Things to improve
