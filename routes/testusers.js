const { Router } = require('express'); //Router function moment
const router = Router(); // similar to express instance, registering stuff for this specific router


//app.use logging can be here instead to only get get requesties
//req, res, then there's a third parameter, can be next, which invokes next middleware function, like a chain of middlewares
router.get('/', 
    /*(request,response,next)=>{
        console.log('Before Handling Request')//need response back, get stuck
        next();//this nexts next
    },*/
    (req, res, next)=>{ // good practice to put in the status code as well, successful n stutff
        //res.cookie('visited', true) // can be anything lmao
        //res.cookie('visited', true, {maxAge: 10000,})//like for popups n other stuffs like client logged in time
        res.status(200).send(users) //can do users[0] since array
        next();
    },
    () => {
        console.log('Finished Handling Request')
        //response.send(403) // sends error in console because can only send once
    }
)

router.get('/:name', (req,res)=>{ // route parameter, :name. /stuff/:substuff/:substuff/ can also do :substuff&:substuff, and /stuff/:substuff/substuff's stuff/:substuff's substuff
    const {name} = req.params //pulling name from req.params based on name, object destructuring
    const user = users.find((user)=>user.name===name) //find user based on name, call back function, return first record that matches.
    if (user){ //check to see user is found, case-sensitive
        res.status(200).send(user)
    } else {
        res.status(404).send('Not Found')
    }

    console.log(req.params) //allow to create an api, last parameter be dynamic
}) //if you run localhost:3000/users/Gobby, it will return {name:'Gobby'} on the console, coowls

// post for creating new resource
router.post('/', (request,response)=>{
    console.log(request.body)//request.body, gets all properties in the body
    users.push(request.body)//will give updated grocery list in postman stuffs
    response.send(201)
})

module.exports = router;//exports router