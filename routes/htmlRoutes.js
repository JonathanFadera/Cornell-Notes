const express = require('express');
const app = express();

// Route to serve the notes.html file
app.get('/notes', (req, res) => {
  res.sendFile(__dirname + '/public/notes.html');
});

// Route to serve the index.html file for all other routes
app.get('*', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

// Start the server
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
