const express = require('express');
const app = express();
const path = require('path');
const port = process.env.PORT || 3000;
require('dotenv').config();
console.log(process.env)

//MAILGUN CONFIG
var api_key = 'key-044e7da5e47304c0c2a643c4731eb80a';
var domain = 'sandbox5a845859a2ef48048a8bf0bbd47d02b6.mailgun.org';
var mailgun = require('mailgun-js')({apiKey: api_key, domain: domain});

//DATA PARSING
app.use(express.urlencoded({extended:false}));
app.use(express.json());

//APP CONFIG
app.use(express.static(__dirname));
app.use(express.static(__dirname + '/public'));

//ROUTES
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.post('/email', (req, res) => {
    const {subject, email, message} = req.body;
    var data = {
        from: email,
        to: 'jason.chu614@gmail.com',
        subject: subject,
        text: message + " jrfg22766"
      };
       
      mailgun.messages().send(data, function (error, body) {
          if(error) {
              console.log(error);
          }
            console.log(body);
      });
});

app.listen(port, process.env.IP, function(req, res) {
    console.log("Server side running");
});