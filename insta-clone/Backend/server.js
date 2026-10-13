require("dotenv").config();
const app = require("./src/app")
const connectedToDatabase = require("./src/config/database")

connectedToDatabase();

app.listen(3000, () => {
    console.log("server is running on 3000");
})