# Crypto Alerts
#### Video Demo:  <URL HERE>
#### Description: This project aims to alert the user when the crypto currency price reaches the set target price. The page will show a form you can fill out with the cryptocurrency`s ticker and desired target price. When confirmed, it will appear on the monitoring table. The monitoring table will show all the currencies and target prices to monitor. The app will update and check cryptocurrency prices with user-defined targets. When the current price reaches the target price, an alert will be triggered, the corresponding line will change color to green and flash five times.

Components detail:

libs/mongodb.ts : This component provides a function (connectDatabase) that connects to a MongoDB database using Mongoose, and it includes error handling and caching to improve performance by reusing existing connections when possible.

models/coins: This module defines a Mongoose schema for a "Coins" collection with two fields (name and target), creates a Mongoose model, if it does not already exists, based on that schema, and exports the model for use in other parts of the application.

src/app/api/coins/route.tsx: This route contains serverless functions handle HTTP requests in order to GET, ADD, and DELETE coins from a MongoDB database using the defined "Coins" model and the connectDatabase function.

src/app/components/Alert.tsx: This component fetches data from a server using the useSWR hook from the SWR library, and renders a list of coins with their details. It will be responsible for displaying a list of active alerts.

src/app/components/Coins.tsx: It represents a row in the table (Alert). It fetches live cryptocurrency price data using the Coinbase API, displays information (name, price and target) about a particular cryptocurrency in a table row, and provides visual feedback based on target conditions. It also uses the RemoveBtn component for removing the coin.

src/app/components/Forms.tsx: this component provides a form for users to add new cryptocurrency alerts. It fetches data from the Coinbase API to verify the existence of the coin, sends a POST request to the server to add a new alert, and updates the context to trigger a re-render of the alert list.

src/app/components/RemoveBtn.tsx: this component provides a button with a trash icon for removing a coin alert. When clicked, it prompts the user for confirmation and, if confirmed, sends a DELETE request to the server to remove the corresponding coin alert and triggers an update in the context.

src/app/context/UpdateContext.tsx: It is a context which aims to manage updates in the application state, in order to update the page client-side instantly on every request throught triggerUpdate.

src/app/context/page.tsx: This code represents a page component (Home) which receive the main components in order to render it on the main page (Form and Alert).

src/app/context/layout.tsx: This component serve as a higher-order layout component to provide global styles and context to the rest of your application.

src/styles/global.css: It is used for defining global styles that apply to the entire application.

src/styles/components/Alert.module.css: It is used to style the Alert.tsx component.
src/styles/components/Coins.module.css: It is used to style the Coins.tsx component.
src/styles/components/Form.module.css: It is used to style the Form.tsx component.

.env: It is a configuration for connecting to a MongoDB database using environment variables. Such as, MONGODB_URI: This environment variable contains the URI (Uniform Resource Identifier) for connecting to the MongoDB database, and MONGODB_DB: This environment variable specifies the name of the MongoDB database to be used, which is set to crypto. The combination of these two environment variables is used to establish a connection to a MongoDB database using a Mongoose library.

TODO
###

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
