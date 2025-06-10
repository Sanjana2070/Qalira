# Qalira
Qalira is a digital platform designed to simplify the search for dance and music classes.

## Backend Setup
The `server` folder contains an Express application using MongoDB. Create a `.env` file inside `server` with the following variables:

```
MONGO_URI=<your MongoDB connection string>
JWT_SECRET=<random string>
FIREBASE_SERVICE_ACCOUNT=<JSON credentials string>
RAZORPAY_KEY_ID=<your Razorpay key id>
RAZORPAY_KEY_SECRET=<your Razorpay key secret>
PORT=5000
```

After installing dependencies (`npm install`) you can start the API with `node server.js`.
