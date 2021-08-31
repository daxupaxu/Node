const notes = require('./notes');
const chalk = require('chalk');
const yargs = require('yargs');
const { string } = require('yargs');

//customize yargs version

yargs.version('1.1.0');

// add command

yargs.command({
  command: 'add',
  describe: 'Add new note',
  builder: {
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string',
    },
    body: {
      describe: 'Note body',
      demandOption: true,
      type: 'string',
    },
  },
  handler: function (argv) {
    notes.addNote(argv.title, argv.body);
  },
});

yargs.command({
  command: 'read',
  describe: 'Read a note',
  handler: function () {
    console.log('Opening your note..!');
  },
});

// Remove command

// List command

yargs.command({
  command: 'list',
  describe: 'show list of notes',
  handler: function () {
    console.log("Here's the list of notes");
  },
});

yargs.command({
  command: 'remove',
  describe: 'Remove note',
  builder: {
    title: {
      describe: 'Title of a note to delete',
      demandOption: true,
      type: 'string',
    },
  },
  handler: function (argv) {
    notes.removeNote(argv.title);
  },
});
yargs.command({
  command: 'read',
  describe: 'Read note',
  builder: {
    title: {
      describe: 'Title of a note to read',
      demandOption: true,
      type: 'string',
    },
  },
  handler: function (argv) {
    notes.readNote(argv.title);
  },
});

//add remove list read
yargs.parse();
