
var packageJson = {
  "name": "app",
  "version": "1.0.0",
  "description": "TEst",
  "main": "app.js",
  "scripts": {
    "test": "npm run dev",
    "start": "node app.js"
  },
  "repository": {
    "type": "git",
    "url": "no"
  },
  "keywords": [
    "no"
  ],
  "author": "no",
  "license": "UNLICENSED",
  "dependencies": {
    "express": "^4.21.2",
    "swagger-ui-express": "^5.0.1",
    "yamljs": "^0.3.0"
  }
};

var express = require('express');
var app = express();

var swaggerUi =  require('swagger-ui-express');
var YAML = require('yamljs');
const swaggerDocument = YAML.load('./swagger.yaml');

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.get('/', function (req, res) {
  res.send('Hello World!');
});
app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
  console.log(packageJson);
});