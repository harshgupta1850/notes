const express = require("express")
const notes = require("./data/notes")
const dotenv = require("dotenv")
const app = express()

dotenv.config()
app.get("/",(req,res)=>{
  res.send("api is running")
})

app.get("/api/notes",(req,res)=>{
  res.json(notes)
})

app.get("/api/notes/:id",(req,res)=>{
  const note = notes.find((note)=> note._id === req.params.id)
  res.json(note)
})

const PORT = process.env.PORT || 5000
app.listen(PORT,console.log(`server started on ${PORT}`))