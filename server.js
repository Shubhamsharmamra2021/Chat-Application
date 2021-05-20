require("dotenv").config();


//connection mongoose
const mongoose = require("mongoose");
mongoose.connect(process.env.DATABASE,{
    useUnifiedTopology: true,
    useNewUrlParser : true,
});

mongoose.connection.on("error", (err) =>{
    console.log("Mongoose Connection ERROR: "+ err.message)
});

mongoose.connection.once('open',()=>{
    console.log("Mongoose Connection Succesful !")

})


//bringing in the models
require("./model/user");
require("./model/chatroom");
require("./model/message");


// server listen
const app =require('./app.js');
app.listen(5000,()=>{
   console.log(`Server listening on port ${5000}`);
});