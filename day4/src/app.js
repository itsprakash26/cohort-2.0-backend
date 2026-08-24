const express = require("express");

const app = express()

app.use(express.json())

const notes = []

app.get("/", (req, res) => {
    res.send("hello")
})
app.post("/notes", (req, res) => {
    notes.push(req.body)
    res.send("notes")
    console.log(notes)

})
app.get("/notes", (req, res) => {
    res.send(notes)
})
app.delete("/notes/:index", (req, res) => {
    delete notes[req.params.index]
    res.send("notes delete sucessfuly")
})
app.patch("/notes/:index", (req, res) => {
    notes[req.params.index].dec = req.body.dec
    res.send("notes Updated")
})

module.exports = app