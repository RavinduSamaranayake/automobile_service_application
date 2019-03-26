const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const items = require('./routes/api/items')

const app = express()

//Body Parser middleware
app.use(bodyParser.json());

// DB config 
const db = require('./config/keys').MongoURI;

 
//connect to mongo

mongoose.connect(db,{ useNewUrlParser:true})

    .then(() => console.log('Connected to mongodb successfully!'))

    .catch(err => console.log(err));


//Use Routes

app.use('/api/items',items);




const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));