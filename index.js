// console.log("Hello World")

// require('dotenv').config()

import dotenv from "dotenv";
dotenv.config();

import express  from "express";
// const express = require('express')




const app = express()
// const port = process.env.PORT || 4000

app.get('/', (req, res)=> {
    res.send('Hello World!')

})

app.get('/insta', (req, res)=> {
    res.json({
        name: "Gaurav singh rathore",
        type: "fitness",
        followers: 700,
    })
    // res.send('gaurav singh rathore')
    

})

app.listen(process.env.PORT || 4000,() => {
    console.log(`listneing on port ${process.env.PORT || 4000}`)
} )
