require('dotenv').config();
const express = require('express');
const session = require('express-session');
const massive = require('massive');
const bodyParser = require('body-parser');
const c = require('./controller');

const app = express();
app.use(bodyParser.json());


massive(process.env.CONNECTION_STRING).then(db => {app.set('db', db)});

// app.use(session({
//     secret: process.env.SESSION_SECRET,
//     resave: false, 
//     saveUninitialized: true
// }))

app.get('/api/houses', c.getHouses);

app.post('/api/houses', c.postProperty);

app.delete(`/api/houses/:id`, c.deleteProperty);















const port = 4000;
app.listen(port, ()=>console.log(`server listening on port ${port}`))