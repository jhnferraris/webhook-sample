const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json())

app.post('/webhook', async (req, res) => {
  // TODO: You will have to implement the logic of this method.
  console.log(req.url);
  processWebhookNotificationData(req.body);
  res.send({
    processWebhookData: 'success',
  })
});

const processWebhookNotificationData = (data) => {
  console.log(`Processing data`);
  console.log(data);
  console.log(`Done`)
}

app.listen(8080, () => console.log(`Listening on port ${8080}!`));
