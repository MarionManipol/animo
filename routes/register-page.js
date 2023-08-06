const { Router } = require('express') //to get package from express, in node_modules
const users = require('../database/schemas/users');
const router = Router();

const User = require('../database/schemas/users'); 
//maybe for registering database here? need way to generate new users too hmm
//post/getting forms?

router.get('/', async (req, res)=>{ //atm test, should be animo-wall
    try {
        res.render('register',{title: "Registration"});
    } catch (err) {
        console.error('Error fetching user:', err);
        res.status(500).send('Internal Server Error');
    }
})

router.post('/register', async function(req,res){
    let user = new users({
        username: req.body.username,
        id: req.body.id,
        email: req.body.email,
        password: req.body.password
    });
    try{
        await users.create(user);
        res.sendStatus(200);
    }catch (error){
        console.log(error);
        res.sendStatus(500);
    }
});

router.get('/checkIDNo', async function(req, res) {
    // your code here
    const temp = await users.findOne({ 
        id: req.query.id
    });
    if(temp){
        res.sendStatus(404);
    }
    else{
        res.sendStatus(200);
    }
});



module.exports = router;