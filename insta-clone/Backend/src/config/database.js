const mongoose = require("mongoose");

async function connectedToDatabase() {
   await mongoose.connect(process.env.MONGO_URI) 
        console.log("MongoDB connected");
    
}
module.exports = connectedToDatabase;