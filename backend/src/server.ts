import express from "express";

const app = express()

const PORT = 1000

app.listen( PORT, ()=> {
    console.log("running on localhost:1000")
})