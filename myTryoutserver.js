const express = require('express')

const app = express()

// ****** Try 01 ******
/* app.get("/", (req, res) => {
    console.log('incoming blank request at localhost3000 - respond with generic message')
    res.send('Simple Express Response here!')
}) */

// ****** Try 02 ******
/* app.get("/", (req, res) => {
    console.log('incoming blank request at localhost3000 - respond with internal Server error')
    res.sendStatus(500)
}) */

// ****** Try 03 ******
/* app.get("/", (req, res) => {
    console.log('incoming blank request at localhost3000 - respond with combined internal Server error and message')
    res.status(500).send("This server is dead - x-/")
})  */

// ****** Try 04 ******
/* app.get("/", (req, res) => {
    console.log('incoming blank request at localhost3000 - respond with download')
    res.download('./assets/downloadThis.gif')
}) */

// ****** Try 05 ******
/* app.set('view engine', 'ejs') //settings for Express
app.set('views', './views') 

app.get("/", (req, res) => {
    console.log('incoming blank request at localhost3000 - respond with ejs to render')
    res.render('response01')
}) */

// ****** Try 06 ******
app.set('view engine', 'ejs')
app.set('views', './views') 

app.get("/", (req, res) => {
    console.log('incoming blank request at localhost3000 - respond with ejs to render')
    res.render('response02', { timestamp: Date.now() })
})

app.listen(3000) // assigning port 3000 to listen
