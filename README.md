# webhook-sample

This is a sample of a webhook that can be used on any system (e.g. gateways) that will notify your application via a POST endpoint

## How to call the webhook using the sample

### Setup

1. Clone the repository
2. Go to the project: `$ cd webhook-sample`
3. Install dependencies `$ npm install`
4. Run the server `$ npm start`

### Calling the webhook

The server will run on port 8080 on your localhost (When you go to production, you will have to use a different domain). 
You can either do a curl command or use a curl client application (e.g. POSTMAN) for the sake of testing.

Screenshot of Postman
<img width="1025" alt="Screen Shot 2022-05-19 at 8 43 35 AM" src="https://user-images.githubusercontent.com/3207153/169178624-7d3398ea-4d10-4a47-a9e3-0fdaf4965844.png">

On live applications, webhook endpoints are typically registered on the 3rd party APIs (e.g. payment service providers) to enable these APIs to notify their client's applications.
