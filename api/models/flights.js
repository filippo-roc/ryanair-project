// come sviluppare l'archivio voli

// informazioni statiche
// id 

// tratte e orari voli

// luogoPartenza
// orarioPartenza

// luogoArrivo
// orarioArrivo

// durata(dinamica)
// tipo volo(diretto)


// VOLO
// idVolo
// idTratta
// data partenza
// prezzo
// numero di posti disponibili
require("../utils/mongoose");

const mongoose = require("mongoose");
const {Schema} = mongoose;

const flightSchema = new Schema({
    departureAirport :{
        type : String,
        required : true
    },
    destinationAirport: {
        type : String,
        required: true
    },
    duration : {
        type : String,
        required : true
    },
    typeOfFlight : {
        type : String,
        required : true,
        validate(value) {
            if(value !== "direct" && value !== "stop") 
            throw new Error("Il tipo volo deve essere : 'direct' o 'stop' ")
        }
    },
    bagsCosts : {
        type : Object,
        required : true
    },
    flightNumber : {
        type : String,
        required : true,
        trim : true
    },
    price : {
        type : Number,
        required :true,
        validate(value){
            if(value <= 0)
            throw new Error("Il prezzo deve essere un valore superiore a 0")
        }
    },
    placesAvaible : {
        type : Number,
        required : true,
        validate(value){
            if(value <= 0)
            throw new Error("Il prezzo deve essere un valore superiore a 0")
        }
    },
    departureDate : {
        type: Date,
        required : true,
    },
    destinationDate : {
        type : Date,
        required: true
    }
});

const Flight = mongoose.model("flight", flightSchema);

module.exports = Flight;
