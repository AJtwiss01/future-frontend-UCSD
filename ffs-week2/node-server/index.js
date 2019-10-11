const express = require('express');
const server = express();
const path = require('path');
const router = express.Router();

// router.get('/',function(req,res){
//   res.sendFile(path.join(__dirname+'/public/index.html'));
//   //__dirname : It will resolve to your project folder.
// });


//add the router
server.set('view engine', 'pug');
server.use('/', router);
server.use(express.static(__dirname +'/public'))

server.get('/', function (req, res) {
  res.render('index', { title: 'Hey', message: 'Hello there!' })
})
server.post('/', function(req, res){
  console.log(req);
  res.send("recieved your request!");
});
server.listen(process.env.port || 3000);

console.log('Running at Port 3000');