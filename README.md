# Crypto Alerts

#### Description: This project aims to alert the user when the crypto currency price reaches the set target price. The page will show a form you can fill out with the cryptocurrency`s ticker and desired target price. When confirmed, it will appear on the monitoring table. The monitoring table will show all the currencies and target prices to monitor. The app will update and check cryptocurrency prices with user-defined targets. When the current price reaches the target price, an alert will be triggered, the corresponding line will change color to green and blink five times.

## Getting Started

If you are on github:

Download the project files (.zip) or clone the project

Install the dependencies:

npm install

change the database credencials in the .env file

It should be filled like this:

MONGODB_URI=mongodb+srv://USERNAME:PASSWORD@cluster0.f2dlqkf.mongodb.net/
MONGODB_DB=crypto

@cluster0.f2dlqkf.mongodb.net/: This part of the URI specifies the MongoDB server's address. If you want to create your own database for this application, you can get it from Atlas MongoDB.

- Create a cluster
- On Deployment/database select connect then mongodb for vs code and the full uri will be provided on "3. Connect to your MongoDB deployment." section.

After changing the database connection information, you can run the application:

npm run dev

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


