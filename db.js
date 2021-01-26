const mongoose = require('mongoose');
const connectionOptions = { useCreateIndex: true, useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false };
mongoose.connect(process.env.MONGODB_URI , connectionOptions);
mongoose.Promise = global.Promise;

const Schema = mongoose.Schema;

const schema = new Schema({
    class: { type: Number,  required: true },
    subject: { type: String, required: true },
    faculty:{type:String,required:true},
    description: { type: String,required:true },
    image: { type: String,  required: true },
    topics: { type: Array, required: true }
},{collection:'classCards'});

module.exports = {
    cards: mongoose.model('cards', schema)
};