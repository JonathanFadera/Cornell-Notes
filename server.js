const express = require('express');
const path = require('path');
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

// GET and POST request

app.get("/api/notes", (req, res) => {
  fs.readFile(path.join(__dirname, "/db/db.json"), (err, data) => {
    if (err) throw err;
    const notes = JSON.parse(data);
    res.json(notes);
  });
});

// Read all notes from the db.json file
let notes = JSON.parse(fs.readFileSync('db.json'));

// DELETE /api/notes/:id endpoint
app.delete('/api/notes/:id', (req, res) => {
  const id = req.params.id;

  // Find the note with the given id property
  const index = notes.findIndex((note) => note.id === id);

  // If the note is found, remove it and rewrite the notes to the db.json file
  if (index !== -1) {
    notes.splice(index, 1);
    fs.writeFileSync('db.json', JSON.stringify(notes));
    res.sendStatus(204); // No Content
  } else {
    res.sendStatus(404); // Not Found
  }
});

app.post('/api/notes', (req, res) => {
  const { title, text } = req.body;
  if (!title || !text) {
    throw new Error("title and text cannot be blank");
  }
  const newNote = { title, text, id: uuidv4() };
  fs.readFile(path.join(__dirname, "/db/db.json"), (err, data) => {
    if (err) {
      console.log(err);
    }
    else {
      const dbNotes = JSON.parse(data);
      dbNotes.push(newNote);
      fs.writeFile("./db/db.json", JSON.stringify(dbNotes), (err) =>
        err ? console.error(err) : console.log("Successfully added note."))
    }

  })
  const response = {
    body: newNote
  }
  console.log(response)
  res.json(response)
})

// HTML routes for notes.html and index.html

app.get("/notes", (req, res) => {
  res.sendFile(path.join(__dirname, "/public/notes.html"));
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "/public/index.html"));
});

app.listen(PORT, () =>
  console.log(`Listening for requests on port ${PORT}`)

);
