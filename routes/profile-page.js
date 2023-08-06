const { Router } = require('express') //to get package from express, in node_modules
const router = Router();
const User = require('../database/schemas/users');
const Post = require('../database/schemas/posts');

router.get('/:username', async (req, res)=>{ //atm test, should be animo-wall
    const { username } = req.params;
    try {
        const user = await User.findOne({ username }).lean().exec();
        if (!user) {
            return res.status(404).send('User not found :(');
        }
        
        const posts = await Post.find({ username: user.username }).lean().exec();

        res.render('profile',{ user, posts , title: user.username + "'s Profile"});
    } catch (err) {
        console.error('Error fetching user:', err);
        res.status(500).send('Internal Server Error');
    }
})

module.exports = router;