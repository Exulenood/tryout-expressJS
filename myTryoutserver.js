const express = require('express')

const app = express()

app.get("/", (req, res) => {
    console.log('incoming blank request at localhost3000')
    res.send('Simple Express Response here!')
})

app.listen(3000) // assigning port 3000 to listen
