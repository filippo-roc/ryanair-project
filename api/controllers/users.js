const User = require("../models/users");

exports.createUser = function (req, res) {
    try {
        const firstname = req.body.firstname.trim();
        const lastname = req.body.lastname.trim();
        const email = req.body.email.trim();
        const password = req.body.password.trim();
        //check the validity of the values
        if (firstname.length === 0)
            throw new Error("Nome non valido")
        if (lastname.length === 0)
            throw new Error("Cognome non valido")
        if (!email.includes("@"))
            throw new Error("L'email deve contenere: @")
        if (password.length < 7)
            throw new Error("Password troppo corta")
        if (password.includes("password"))
            throw new Error("La password non può contenere la parola :  'password' ");
        //create an object with the data to save  creo un oggetto con i dati da salvare
        const userData = { firstname, lastname, email, password }
        // create the user
        const user = new User(userData);
        if(!user) {
        throw new Error("Email già in uso")
    }
        // save
        user.save();

        res.send(user)
    } catch (error) {
        console.log('problema con la creazione utente :', error.message);
        res.status(400).send(error)
    }
}


exports.login = function(req,res){
    console.log("sono login",req.body);
    res.send({email : req.body.email, password : req.body.password, firstname : "Filippo", lastname : "Roccamatisi"});
}