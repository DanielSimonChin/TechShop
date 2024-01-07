# TechShop
Full-stack eCommerce application for buying and selling tech products. Built with ReactJS, MongoDB, Express, Node.js <br/>
Website URL: https://techshop-live.netlify.app/


## Features

- Full-featured shopping cart
- Product reviews and ratings
- Top products carousel
- Product pagination
- Product search feature
- User profile with orders
- Admin product management
- Admin user management
- Admin Order details page
- Mark orders as delivered option
- Checkout process (shipping, payment method, etc)
- PayPal / credit card integration
- Database seeder (products & users)


## Usage

- Create a MongoDB database and obtain your `MongoDB URI` - [MongoDB Atlas](https://www.mongodb.com/cloud/atlas/register)
- Create a PayPal account and obtain your `Client ID` - [PayPal Developer](https://developer.paypal.com/)

### Env Variables

Create `.env` file in the /backend folder.

```
NODE_ENV=<development or production>
PORT=5000
MONGO_URI=<your mongo db uri>
JWT_SECRET=<arbitrary jwt secret key>
PAYPAL_CLIENT_ID=<your paypal client id>
PAYPAL_APP_SECRET=<your pay pal app secret>
PAGINATION_LIMIT=8
PAYPAL_API_URL=https://api-m.sandbox.paypal.com
CORS_ORIGIN=http://localhost:<PORT>
```

### Install Dependencies (frontend & backend)

```
cd backend
npm install
cd frontend
npm install
```

### Run

```
# Run frontend (:3000) & backend (:5000)
npm start client

# Run backend only
node server.js
```

## Build & Deploy

```
# Create frontend prod build
cd frontend
npm run build
```

### Seed Database

You can use the following commands to seed the database with some sample users and products as well as destroy all data

```
# Import data
npm run data:import

# Destroy data
npm run data:destroy
```

```
Sample User Logins

admin@email.com (Admin)
123456

john@email.com (Customer)
123456

jane@email.com (Customer)
123456
```
