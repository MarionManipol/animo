//this is not the main file, just a duplicate just in case
const express = require('express') //to get package from express, in node_modules
const app = express() //call app express
const port = 3000
//like an import, so make sure its at start n stuff uwu
app.use(express.json())//register middle layer stuffs, this one is for POST, a function to invoke in middle of main functions
//for url encoded data, express.urlencoded()
app.use((req,res,next)=>{//function that works with multiple routes, routes bein the one under here???
    //console.log(req.url); // returns like the /users, /posts stuffs
    console.log(`${req.method}:${req.url}`)//log method and url, GET:/users
    next();
})//function???

const users = [//pseudodatabase for now, for testing
    { name: 'Anson' , age: 22 },
    { name: 'Kelvin', age: 21 },
    { name: 'Michelle', age:20}
]

const posts = [
    { title: 'My favorite foods' },
    { title: 'My favorite games uwo' }
]

//get is for asking resources, just that
app.get('/', (req, res) => {// get route '/', (req,res) // request client to node app, res nodeapp to client
    res.send({
        msg: 'Hello!',
        user: {}
    })

})

//localhost:3000 on web browser, actually shows!

//need route to access the website through webrouser, declare route, multiple possible

//app.use logging can be here instead to only get get requesties
//req, res, then there's a third parameter, can be next, which invokes next middleware function, like a chain of middlewares
app.get('/users', 
    /*(request,response,next)=>{
        console.log('Before Handling Request')//need response back, get stuck
        next();//this nexts next
    },*/
    (req, res, next)=>{ // good practice to put in the status code as well, successful n stutff
        res.status(200).send(users) //can do users[0] since array
        next();
    },
    () => {
        console.log('Finished Handling Request')
        //response.send(403) // sends error in console because can only send once
    }
)

app.get('/users/:name', (req,res)=>{ // route parameter, :name. /stuff/:substuff/:substuff/ can also do :substuff&:substuff, and /stuff/:substuff/substuff's stuff/:substuff's substuff
    const {name} = req.params //pulling name from req.params based on name, object destructuring
    const user = users.find((user)=>user.name===name) //find user based on name, call back function, return first record that matches.
    if (user){ //check to see user is found, case-sensitive
        res.status(200).send(user)
    } else {
        res.status(404).send('Not Found')
    }

    console.log(req.params) //allow to create an api, last parameter be dynamic
}) //if you run localhost:3000/users/Gobby, it will return {name:'Gobby'} on the console, coowls
  
app.get('/posts', (req,res)=>{
    console.log(req.query) // to see object looks like
    const {title} = req.query
    if (title) {
        const post=posts.find((post)=>post.title===title) //find post based on title
        if (post) res.status(200).send(post)
        else res.status(404).send('Not Found')
    }
    res.status(200).send(posts)
})






// post for creating new resource
app.post('/users', (request,response)=>{
    console.log(request.body)//request.body, gets all properties in the body
    users.push(request.body)//will give updated grocery list in postman stuffs
    response.send(201)
})







app.listen(port, () => { //listen to port, ()=> call back function
  console.log(`MC app listening on port ${port}`)
})

// ctrl + c to stop terminal batch jobber