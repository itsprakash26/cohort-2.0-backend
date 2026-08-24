const express = require("express");
const noteModule = require("./models/notes.model")


const app = express()
app.use(express.json())

app.post("/notes", async (req, res) => {
    const { title, description } = req.body
    const note = await noteModule.create({ title, description })
    res.status(201).json({
        massage: "note created sucessfuly",
        note
    })

})
app.get("/notes", async (req,res)=>{
    const note = await noteModule.find()
    res.status(201).json({
        massage:"note feched",
        note
    })
})


module.exports = app;
