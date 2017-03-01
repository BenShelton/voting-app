// dependencies
const express = require('express');
const app = express();

// environment variables
const port = process.env.PORT;

// routes
app.get('/', (req, res) => {
  res.send('Hello'); 
});

// 404 handling
app.use((req, res) => {
  res.status(404).redirect('/'); 
});

// start server
app.listen(port, () => console.log('Server listening on port ' + port));