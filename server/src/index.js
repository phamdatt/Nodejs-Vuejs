const express = require("express");
const app = express();

const port = 3000;
const route = require('../src/router/index');

route(app);
app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
