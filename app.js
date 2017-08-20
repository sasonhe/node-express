var express  = require('express');
var app = express();
var router = require('./routes/index');
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:true}));

app.set('view engine','html');
app.engine('html',require('ejs').__express);
app.set('views',__dirname+'/views');
app.use(express.static(__dirname+'/public'));

app.use('/',router);

app.listen(3000);
