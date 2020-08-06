const express = require('express');
const bodyParser = require('body-parser')
const app = express();
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json())

const calculate = (strInput) => {
  console.log(`strInput: ${strInput}`)
  const checkResult = strInput.includes('--') ? strInput.replace('--','+') : strInput
  let toReturn;
  try {
    return eval(checkResult) || ""  + ""
  } catch (e) {
    return `Error; given input is not valid`
  }
}
app.get('/calculate', (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  console.log(`req.body.str: ${JSON.stringify(req.body)}`)
  const result = calculate(req.body.str);
  res.send({
    result
  });
});

app.listen(5000, () =>
  console.log(`Example app listening on port 5000}!`),
);