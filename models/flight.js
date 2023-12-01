const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const destinationSchema = {
    airport: {
        type: String,
        enum: ['DIA', 'LAX', 'LGA', 'PIT']
    },
    arrival: Date
}

const flightSchema = new Schema({
    airline: {
        type: String,
        enum: ['Delta', 'United', 'Frontier']
    },
    airport: {
        type: String,
        enum: ['DIA', 'LAX', 'LGA', 'PIT'],
        default: 'DIA'
    },
   flightNo: {
    type: Number,
    min: 10,
    max: 9999
   },
   departs: Date,
   destination: [destinationSchema]
})

module.exports = mongoose.model('Flight', flightSchema)