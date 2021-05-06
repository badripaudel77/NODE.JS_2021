const express = require('express')
const app = express()

//register ejs view engine
//ref : https://www.digitalocean.com/community/tutorials/how-to-use-ejs-to-template-your-node-application
app.set('view engine', 'ejs');

const PORT = 3001 || process.env.PORT
app.listen(PORT, (req, res) => {
    console.log("Server started running")
})

app.get('/', (req,res) => {
    //send backto index page
    //res.sendFile('./views/index.html', { root : __dirname})
    //views is default that express is gonna look, if not set like app.set('views', 'foldername')
    res.render('index')
})

app.get('/about', (req,res) => {
    //send backto index page
    //res.sendFile('./views/about.html', { root : __dirname})
    res.render('about')
})

app.use((req, res) => {
    res.sendFile('./views/pagenotfound.html', { root : __dirname})
})