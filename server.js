'use strict';
const express = require('express');
const server = express();
const PORT = process.env.PORT || 3030;

server.use(express.static('./public'));

server.get('/',(req,res)=>{
    res.send('home route');
})

server.get('/test',(request,response)=>{
    response.send('You Server is Alive!!');
})

server.listen(PORT,()=>{
    console.log(`Listening on PORT ${PORT}`);
})

