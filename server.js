const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const fs = require("fs");
const bodyParser = require('body-parser');

const urlencodedParser = express.urlencoded({extended: false});
app.use(bodyParser.json());

app.listen(port, () => console.log(`Listening on port ${port}`));

app.get('/express_backend', (req, res) => {
  let fileContent = fs.readFileSync("notesData.json", "utf8");
  res.send({data: fileContent});
});

app.post('/express_backend_2', urlencodedParser, (req, res) => {
  if(!req.body) return response.sendStatus(400);
  console.log(req.body);
  let fileContent = fs.appendFileSync("notesData.json", JSON.stringify(req.body));
});
