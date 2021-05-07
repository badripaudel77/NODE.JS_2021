const express = require('express')
const dotenv = require('dotenv')

const connectDB = require('./config/db')

const User = require('./models/User')

const app = express()

app.use(express.json()) //dont need bodyParser
//load the config file
dotenv.config({path: './config/config.env' })

//connect to DB
connectDB()

//register ejs view engine
//ref : https://www.digitalocean.com/community/tutorials/how-to-use-ejs-to-template-your-node-application
app.set('view engine', 'ejs');

//middleware for css [static files]
app.use(express.static('public'))

//attach data to req
app.use(express.urlencoded({ extended : true }))

app.get('/', (req,res) => {
    //send backto index page
    //res.sendFile('./views/index.html', { root : __dirname})
    //views is default that express is gonna look, if not set like app.set('views', 'foldername')
    
    //get all the users from the database
    User.find({}).sort( {createdAt : -1})
    .then(result => {
         res.render('index', {indexTitle : 'Node.js 2021 Lockdown - Nepal', users : result})
    })
    .catch(error => res.send(error))
})

app.get('/about', (req,res) => {
    //send backto index page
    //res.sendFile('./views/about.html', { root : __dirname})
    res.render('about', {aboutTitle : 'About Page'}) //pass the data [title]
})

app.get('/add-user', (req,res) => {
    //send to add user page
    res.render('add-user', {addUserTitle : 'Add User'}) //pass the data [title]
})

app.post('/addUser', (req, res) => {
    const user = new User(req.body)
    user.save()
    .then(result => { 
        res.redirect('/')
    })
    .catch(err => console.log(err))
})

app.get('/users', (req,res) => {
    res.redirect('/')
})

//get one user 
app.get('/users/:id', (req,res) => {
  const id = req.params.id
  console.log(id );
  const user = User.findById(id)
  .then(result => console.log("single user is " + result.fullname + " lives in " + result.address))
  .catch(e => console.log("eror fetching single user" + e))
})

app.use((req, res) => {
    res.sendFile('./views/pagenotfound.html', { root : __dirname})
})

app.listen(3001, () => {
    console.log("Server got connected to PORT 3001")
})