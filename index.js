const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json())

app.post('/webhook', async (req, res) => {
  // TODO: You will have to implement the logic of this method.
  // processWebhookNotificationData(req.body);
  res.send({
    processWebhookData: 'success',
  })
});

app.listen(8080, () => console.log(`Listening on port ${8080}!`));
