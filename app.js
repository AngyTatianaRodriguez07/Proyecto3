const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();
const alert = require('alert-node');



const routes = require('./routes/index.js');

//configuracion 
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


//middlewares
app.use((req, res, next) => {
    console.log(`${req.url} -${req.method}`);
    next();
});

app.use(express.static(path.join(__dirname,'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());


//rutas
app.use(routes);

// static files
app.use(express.static(path.join(__dirname, 'public')));

//inicio del servidor 
app.listen(app.get('port'), () =>{
    console.log('servidor en puerto', app.get('port'))
}) ;