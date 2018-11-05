var express = require('express');
var router = express.Router();
const http = require('http');
const querystring = require('querystring');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET home page. */
router.get('/hola', function(req, res, next) {
  const demoJwt = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJtZXJjdXJlIjp7InN1YnNjcmliZSI6WyJmb28iLCJiYXIiXSwicHVibGlzaCI6WyJmb28iXX19.LRLvirgONK13JgacQ_VbcjySbVhkSmHy3IznH3tA9PM';

  const postData = querystring.stringify({
    'topic': 'messages',
    'data': JSON.stringify({ foo: 'updated value' }),
  });
  console.log('wazaaa antes del req');
  const reqTohub = http.request({
    hostname: 'localhost',
    port: '80',
    path: '/hub',
    method: 'POST',
    headers: {
        Authorization: `Bearer ${demoJwt}`,
        // the JWT must have a mercure.pulish key containing an array of targets (can be empty for public updates)
        // the JWT key must be shared between the hub and the server
        'Content-Type': 'application/x-www-form-urlencoded',
        'Content-Length': Buffer.byteLength(postData),
    }
    }, (resp)=>{
      console.log('wazaaa despues del req');
      console.log(`Status: ${resp.statusCode}`);
      console.log(`Headers: ${JSON.stringify(resp.headers)}`);
      res.render('hola', { title: 'HOLAAAAA' });
    });
    reqTohub.write(postData);
    reqTohub.end();
    
});

module.exports = router;
