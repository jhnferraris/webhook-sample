const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json())

app.post('/webhook', async (req, res) => {
  processWebhookNotificationData(req.body);
  res.send({
    webhookDataProcessed: 'success',
  })
});

const processWebhookNotificationData = (data) => {
  // TODO: You will have to implement the logic of this method.
  // i.e. DB updates, fulfillment flow, etc.
  console.log(`Processing data`);
  console.log(data);
  console.log(`Done`)
}

app.listen(8080, () => console.log(`Listening on port ${8080}!`));
