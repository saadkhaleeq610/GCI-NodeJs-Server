const express = require('express');
var packageFile = require('./package.json')

//const fs = require('fs');
//let rawdata = fs.readFileSync('package.json');
//const packageFile = JSON.parse(rawdata);

const app = express();
const PORT = 8080;

app.get('/info', (req, res) => {
  let responseContent = { ServerName : packageFile.name,
	Version : packageFile.version
	} 
  res.json(responseContent);
});

app.listen(PORT, () => {
  console.log(`Server running at: http://localhost:${PORT}/`);
});