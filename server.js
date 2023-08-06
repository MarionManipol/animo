const express = require('express') //to get package from express, in node_modules
const exphbs = require('express-handlebars')

//const usersRoute = require('./routes/users') // for testusers

const animoPgRoute = require('./routes/animo-page')
const annouPgRoute = require('./routes/announcement-page')
const profePgRoute = require('./routes/professors-page')
const profiPgRoute = require('./routes/profile-page')
const regisPgRoute = require('./routes/register-page')
const loginPgRoute = require('./routes/login-page')


require('./database') // for database

const app = express() //call app express
const port = 3000

//like an import, so make sure its at start n stuffs
app.use(express.json())//register middle layer stuffs, this one is for POST, a function to invoke in middle of main functions
//for url encoded data, express.urlencoded()
app.use(express.urlencoded({ extended: false }))

// styler babey
app.use(express.static(__dirname + '/public'))

app.engine("hbs", exphbs.engine({extname: 'hbs'}));

app.set("view engine", "hbs")//set default file extenstion for views as .hbs
app.set("views", "./views")//set dir for views


app.use((req,res,next)=>{//function that works with multiple routes, routes bein the one under here???
    //console.log(req.url); // returns like the /users, /posts stuffs
    console.log(`${req.method}:${req.url}`)//log method and url, GET:/users
    next();
})//function???

//routes
//app.use('/users', usersRoute); // express now knows about router and can call stuffs // for testusers

//routes - page edition
app.use('/animo-page', animoPgRoute);
app.use('/professors-page', profePgRoute);
app.use('/profile-page', profiPgRoute);
app.use('/announcement-page', annouPgRoute);
app.use('/register-page', regisPgRoute);
app.use('/login-page', loginPgRoute);
//app.use('/api',usersRoute), prefixed with api so it'll be /api/users/n stuff
//purpose of prefixing, can remove the /users in users.js so its just'/' or '/:name' stuffs

app.get('/', (req, res)=>{ //when localhost boots up, goes to /home (page)
    res.redirect('/animo-page')
})


app.listen(port, () => { //listen to port, ()=> call back function
  console.log(`MC app listening on port ${port}`)
})

// ctrl + c to stop terminal batch jobber
