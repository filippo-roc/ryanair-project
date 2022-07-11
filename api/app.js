const express = require('express');

const cors = require("cors");
const corsOptions = {
    origin: '*',
    credentials: true,            //access-control-allow-credentials:true
    optionSuccessStatus: 200,
}

const app = express();
app.use(cors(corsOptions));


app.use(express.json()) // bisogna configurare express per eleborare json

const flightRoutes = require("./routes/flight");
const userRoutes = require("./routes/users");
app.use(flightRoutes);
app.use(userRoutes);





app.listen(8000);