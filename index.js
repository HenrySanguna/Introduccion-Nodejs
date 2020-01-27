const express = require('express');

//Exportacion global de la funcion info: var log = require('./modules/my-log');
const { info,error } = require('./src/modules/my-log');

const { countries } = require('countries-list');

const app = express();

app.get('/', (request, response) => {
  response.status(200).send('HELLO');
});

app.get('/info', (request, response) => {
  response.send('INFO nodemon');
});

app.get('*', (request, response) => {
  response.status(404).send('NOT FOUND');
});



/*
var server = http.createServer(function (request, response) {
    
    var parsed = url.parse(request.url);
    console.log('parsed', parsed);
    var pathname= parsed.pathname;

    var query = querystring.parse(parsed.query);
    console.log('query', query);
    
    if(pathname=="/"){
        response.writeHead(200,{'Content-Type':'text/html'});
        response.write('<html><body><p>HOME PAGE</p></body></html>');
        response.end();
    }else if(pathname=="/exit"){
        response.writeHead(200,{'Content-Type':'text/html'});
        response.write('<html><body><p>BYE</p></body></html>');
        response.end();
    }else if(pathname=="/countries"){
        response.writeHead(200,{'Content-Type':'application/json'});
        response.write(JSON.stringify(countries[query.code]));
        response.end();
    }else if(pathname=="/info"){
       // Exportacion global de info var result = log.info(request.url);
       var result = info(request.url);
        response.writeHead(200,{'Content-Type':'text/html'});
        response.write(result);
        response.end();
    }else{
        response.writeHead(400,{'Content-Type':'text/html'});
        response.write('<html><body><p>NOT FOUND</p></body></html>');
        response.end();
    }
  }) */

app.listen(4000, function() {
  console.log('running on 4000');
});
