const express = require("express");
const noteModule = require("./models/notes.model")


const app = express()
app.use(express.json())
/**
 * post /notes
 * get /notes
 * delete /notes/:id
 */


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
    res.status(200).json({
        massage:"note feched",
        note
    })
})
app.delete("/notes/:id" , async (req,res)=>{
    const { id } = req.params
    const note = await noteModule.findByIdAndDelete(id)
    res.status(200).json({
        massage:"note deleted",
        note
    })
})



module.exports = app;
