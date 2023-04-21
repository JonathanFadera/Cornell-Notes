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

// Define DELETE route for deleting a note by ID
app.delete('/api/notes/:id', (req, res) => {
  const { id } = req.params;

  // Read all notes from db.json file
  fs.readFile('db.json', 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      return res.status(500).send('Error reading notes');
    }

    let notes = JSON.parse(data);

    // Remove note with given ID from notes array
    notes = notes.filter(note => note.id !== parseInt(id));

    // Write updated notes array to db.json file
    fs.writeFile('db.json', JSON.stringify(notes), err => {
      if (err) {
        console.error(err);
        return res.status(500).send('Error writing notes');
      }

      return res.send(`Note with ID ${id} deleted successfully`);
    });
  });
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
  console.log(`Listening for requests on port ${PORT}!`)
);