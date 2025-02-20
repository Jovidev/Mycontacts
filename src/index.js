const express = require('express');

const routes = require('./routes'); // Import the routes module

const app = express();

app.use(express.json()); // Use the JSON middleware

app.use(routes); // Use the routes module

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});