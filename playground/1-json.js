const fs = require('fs');

// const book = {
//   title: 'title of the book',
//   author: 'author of the book',
// };

// const bookJSON = JSON.stringify(book);

// fs.writeFileSync('1-json.json', bookJSON);

const dataBuffer = fs.readFileSync('1-json.json');
const dataJSON = dataBuffer.toString();

const user = JSON.parse(dataJSON);

(user.name = 'Dave'), (user.planet = 'Earth'), (user.age = 22);

const userJSON = JSON.stringify(user);
fs.writeFileSync('1-json.json', userJSON);
