const express = require('express');
const server = express();
const path = require('path');
const router = express.Router();
const port = 3000

server.use('/', router)
server.get("/", function(reg,res){  
    //__dirnamme root path of folder 
    res.sendfile(path.join(__dirname+'/public/index.html') )


})
// server.get('/', (req, res) => res.send('Hello World!'))


server.listen(port || 3000)

console.log('running on port 3000')



