const fs = require('fs');

const getNotes = function () {
  return 'My notes here';
};

const readNote = (title) => {
  const notes = loadNotes();
  const note = notes.find((note) => note.title === title);
  if (note) {
    return console.log(note);
  }
  return console.log('Cannot find note');
};

const addNote = function (title, body) {
  const notes = loadNotes();
  const duplicateNote = notes.find((note) => note.title === title);

  debugger;

  if (!duplicateNote) {
    notes.push({
      title,
      body,
    });
    saveNotes(notes);
    console.log('New note added');
  } else {
    console.log('Dont duplicate titles!');
  }
};

const removeNote = function (title) {
  const notes = loadNotes();
  const findNote = notes.filter(function (note) {
    return note.title === title;
  });
  if (findNote.length === 0) {
    return console.log('Cannot find note!');
  } else if (findNote.length >= 1) {
  }
};

const saveNotes = function (notes) {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync('notes.json', dataJSON);
};

const loadNotes = function () {
  try {
    const dataBuffer = fs.readFileSync('notes.json');
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (e) {
    return [];
  }
};

module.exports = {
  getNotes,
  addNote,
  removeNote,
  readNote,
};
