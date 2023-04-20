const fs = require("fs");
const util = require("util");
const writeFileAsync = util.promisify(fs.writeFile);
const readFileAsync = util.promisify(fs.readFile);

var noteContents;
module.exports = function(app) {

    // populate saved notes from JSON file
    app.get("/api/notes", function(req, res) {
        readFileAsync("./db/db.json", "utf8")
           .then(function(data) {
                noteContents = JSON.parse(data);
                res.json(noteContents);
            })
           .catch(function(err) {
                console.log(err);
            });
    });

    // add new note to saved notes
    app.post("/api/notes", function(req, res) {
        noteContents.push(req.body);
        writeFileAsync("./db/db.json", JSON.stringify(noteContents))
           .then(function() {
                res.json(noteContents);
            })
           .catch(function(err) {
                console.log(err);
            });
    });

    // delete note from saved notes
    app.delete("/api/notes/:id", function(req, res) {
        noteContents.splice(req.params.id, 1);
        writeFileAsync("./db/db.json", JSON.stringify(noteContents))
          .then(function() {
                res.json(noteContents);
            })
          .catch(function(err) {
                console.log("Note has been deleted");
            });
    });
};
