const fs = require("fs");
const {
  createNewNote,
  validateNote,
  deleteNote,
} = require("../lib/notes");
const {
  notes
} = require("../db/db.json");
const {
  test,
  expect
} = require("@jest/globals");
const {
  describe
} = require("yargs");
const {
  it
} = require("mocha");


jest.mock('fs');

test("creates a note object", () => {
  const note = createNewNote({
      name: "Test",
      text: "Test",
      id: "1234"
    },
    notes
  );
  expect(note).toMatchSnapshot();
});

test("validates a note object", () => {
  const note = {
    name: "Test",
    text: "Test",
    id: "1234"
  };
  const invalidNote = {
    name: "Test",
    id: "1234"
  };
  const result = validateNote(note);
  const result2 = validateNote(invalidNote);
  expect(result).toBe(true);
  expect(result2).toBe(false);
});

test("deletes a note", () => {
  const note = {
    name: "Test",
    text: "Test",
    id: "1234"
  };
  const result = deleteNote(note, notes);
  expect(result).toBe(true);
});