// Here's an example of how you can read the notes from the db.json file:
const fs = require("fs");
const path = require("path");
const notes = require("../db/db.json");
// This is the function we want to test
const { createNewNote, validateNote } = require("../lib/notes");
// This is the test suite
describe("notes", () => {
  // This is the test for the createNewNote() function
  describe("createNewNote", () => {
    // This is the test for creating a note object
    it("should create a new note object", () => {
      // This is an example of a mock data
      const note = createNewNote(
        { title: "Test Title", text: "Test text" },
        notes
      );
      // This is an example of an expected value
      const expectedNote = {
        title: "Test Title",
        text: "Test text",
        id: expect.any(String),
      };
      // This is an example of a Jest expectation
      expect(note).toEqual(expectedNote);
    });
    // This is the test for when data is invalid
    it("should return an error when title or text is not entered", () => {
      const cb = jest.fn();
      const note = createNewNote({ title: "Test Title" }, notes);
      expect(cb).toBeCalled();
    });
  });
  // This is the test for the validateNote() function
  describe("validateNote", () => {
    // This is the test for when data is valid
    it("should return false when title or text is not entered", () => {
      const invalidNote = {
        title: "Test Title",
      };
      const actual = validateNote();
      expect(actual).toBe(false);
    });
  });
});