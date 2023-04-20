// const fs = require("fs");
// const util = require("util");
// const writeFileAsync = util.promisify(fs.writeFile);
// const readFileAsync = util.promisify(fs.readFile);

// var noteContents;
// module.exports = function (app) {

//     // Populate the  notes from the JSON file
//     app.get("/api/notes", function (req, res) {
//         readFileAsync("db/db.json", "utf8").then(function (data) {
//             noteContents = JSON.parse(data);
//             res.json(noteContents);
//         });
//     });
//     app.get("/api/notes/:id", function (req, res) {
//         let chosenId = parseInt(req.params.id);
//         for (let i = 0; i < noteContents.length; i++) {
//             if (chosenId === noteContents[i].id) {
//                 res.json(noteContents[i]);
//             }
//         }
//     });
   
//     // Posts new notes to the JSON file when entered and saved
//     app.post("/api/notes", function (req, res) {
//         let newNote = req.body;
//         noteContents.push(newNote);
//         let noteJSON = JSON.stringify(noteContents, null, 2);
//         writeFileAsync("db/db.json", noteJSON).then(function () {
//             console.log("Note has been saved");
//         });
//         res.json(noteContents);
//     });

//     // Function to delete notes when trash can is clicked
//     app.delete("/api/notes/:id", function (req, res) {
//         let chosenId = parseInt(req.params.id);
//         for (let i = 0; i < noteContents.length; i++) {
//             if (chosenId === noteContents[i].id) {
//                 noteContents.splice(i, 1);
//                 let noteJSON = JSON.stringify(noteContents, null, 2);
//                 writeFileAsync("db/db.json", noteJSON).then(function () {
//                     console.log("Note has been deleted");
//                 });
//             }
//         }
//         res.json(noteContents);
//     });
// };