const { Router } = require('express') //to get package from express, in node_modules
const router = Router();
const User = require('../database/schemas/users'); 
//for checking with users?? maybe connect with register if decide to change mind. maybe forgot password too???
//

router.get('/', async (req, res)=>{ //atm test, should be animo-wall
    try {
        res.render('login',{title: "Login Page"});
    } catch (err) {
        console.error('Error fetching user:', err);
        res.status(500).send('Internal Server Error');
    }
})

router.post('/register', async function(req,res){

});

router.post('/login', async function(req,res){
    const temp = await User.findOne({ id: req.body.id, password: req.body.password });
    if(temp){
        res.sendStatus(200);
    }
    else{
        res.sendStatus(418);
    }
});

module.exports = router;