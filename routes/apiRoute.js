const express = require('express');
const app = express();
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');

// Route to read the db.json file and return all saved notes as JSON
app.get('/api/notes', (req, res) => {
  fs.readFile(__dirname + '/db.json', (err, data) => {
    if (err) throw err;
    let notes = JSON.parse(data);
    res.json(notes);
  });
});

// Route to receive a new note to save on the request body, add it to the db.json file, and return the new note to the client
app.post('/api/notes', (req, res) => {
  let newNote = req.body;
  newNote.id = uuidv4();
  fs.readFile(__dirname + '/db.json', (err, data) => {
    if (err) throw err;
    let notes = JSON.parse(data);
    notes.push(newNote);
    fs.writeFile(__dirname + '/db.json', JSON.stringify(notes), (err) => {
      if (err) throw err;
      res.json(newNote);
    });
  });
});

// Start the server
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});