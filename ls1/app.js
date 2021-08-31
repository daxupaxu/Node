const fs = require('fs')

fs.writeFileSync('notes.txt', 'First text being written by writeFileSync func ');
fs.appendFileSync('notes.txt', ' appended another text');