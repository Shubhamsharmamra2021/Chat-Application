const express = require ("express");

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));


//bring into routes
app.use("/user",require("./routes/user"));

//setup error handler
const errorHandlers = require("./handlers/errorHandler");
app.use(errorHandlers.notFound);
app.use(errorHandlers.mongoseErrors);
if(process.env.ENV === "DEVELOPMENT"){
    app.use(errorHandlers.developmentErrors);
} else{
    app.use(errorHandlers.productionErrors);
}

module.exports = app;