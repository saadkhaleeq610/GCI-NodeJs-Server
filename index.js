const express = require('express');

const fs = require('fs');
let rawdata = fs.readFileSync('package.json');
const packageFile = JSON.parse(rawdata);

const app = express();
const PORT = 8080;

app.get('/info', (req, res) => {
    res.json(packageFile);
  });

app.listen(PORT, () => {
  console.log(`Server running at: http://localhost:${PORT}/`);
});