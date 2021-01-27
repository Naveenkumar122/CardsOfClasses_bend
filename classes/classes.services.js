const db = require('../db');
const cards = db.cards;

module.exports ={
    getByID,
    getData
}

async function getData(){
    return await cards.find();
}

async function getByID(id){
    return await cards.findById(id);
}