require('rootpath')();
require('dotenv').config()
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const db = require('./db');
const { getHeapCodeStatistics } = require('v8');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

async function get_data(){
    return await db.cards.find();
}

app.use('/', (req,res)=>{
    get_data()
        .then(data => data ? res.status(200).json(data) : res.status(400).json({ message: 'resource not found' }))
        .catch(err => res.json(err));
});



const port = process.env.NODE_ENV === 'production' ? (process.env.PORT || 80) : 4000;
app.listen(port, () => {
    console.log('Server listening on port ' + port);
});