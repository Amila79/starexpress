

// non ssl


 const app = require('./app');
// const server = require('http').Server(app);

// server.listen("443","0.0.0.0", ()=> {
//    console.log('Server Started at port:'+"443");
// });



//non ssl




//ssl code

var fs = require('fs');
var http = require('http');
var https = require('https');
var privateKey  = fs.readFileSync('sslcert/newpkey.key', 'utf8');
var certificate = fs.readFileSync('sslcert/www_stargarments_lk.crt', 'utf8');

var credentials = {key: privateKey, cert: certificate};
//const express = require('express');
//const app = express();

// your express configuration here

var httpServer = http.createServer(app);
var httpsServer = https.createServer(credentials, app);

httpServer.listen("8080",()=>{
    console.log('HTTP Server Started at port:'+"8080");
});
httpsServer.listen("8443",()=>{
    console.log('HTTPS Server Started at port:'+"8443");
});


//ssl code
