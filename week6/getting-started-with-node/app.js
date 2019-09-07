const http = require('http');
const fs = require('fs');

// const I_LOVE = require('./config');
// the above line prints out I love  { I_LOVE: 'lamp' }
// below we destructure the config object
// It's the same as saying:
// const I_LOVE = require('./config').I_LOVE;
const { I_LOVE } = require('./config');

// my own new variable below:
const { TCTNC } = require('./config');

console.log("I love", I_LOVE);
console.log("Attention,", TCTNC);

const hostname = '127.0.0.1';
const port = 3000;

fs.readFile('index.html', (err,html) => {
  if(err) {
    throw err;
  }

  const server = http.createServer( (req, res) => {
    res.statusCode = 200;
    res.setHeader = ('Content-type', 'text/html');
    res.write(html);
    res.end();
  });

  server.listen(port, hostname, () => {
    console.log('Our awesome testing server running on port ' + port + '...');
  });


});


