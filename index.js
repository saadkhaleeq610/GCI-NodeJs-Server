const express = require('express');
var packageFile = require('./package.json')

const app = express();
const PORT = 8080;

// this is an endpoint which returns server name and the version.
app.get('/info', (req, res) => {
  let responseContent = { ServerName : packageFile.name,
	Version : packageFile.version
	} 
  res.json(responseContent);
});

app.listen(PORT, () => {
  console.log(`Server running at: http://localhost:${PORT}/`);
});