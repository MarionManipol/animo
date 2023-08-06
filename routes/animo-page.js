const { Router } = require('express') //to get package from express, in node_modules
const router = Router();
const posts = require('../database/schemas/posts');
const Post = require('../database/schemas/posts');
const currentDate = new Date();
const formattedDate = `${currentDate.getMonth() + 1}/${currentDate.getDate()}/${currentDate.getFullYear()}`;

router.get('/', (req, res)=>{ //atm test, should be animo-wall
    posts.find({})
        //.populate('user') // user: ????
        .lean()
        .exec()
        .then((posts)=>{
            //console.log('Posts after population:', posts)
            //console.log('User data after population:', posts[0].user)
            res.render("animo", {// renders view with same name as first param in views folder, second param arguments for handle bars placeholders, handlebars expressions
                title: "Animo Wall",
                posts: posts
            })
        })
        .catch((err)=>{
            console.error("Error fetching posts:", err);
            res.status(500).send("Internal Server Error");
        })
})


router.post('/upvote', async (req, res) => {
    try {
        const post = await posts.findOneAndUpdate(
            { _id: req.body._id },
            { $inc: { likes: 1 } },
            { new: true } // This option returns the updated document
        );
        
        res.json({ message: 'Like successful', updatedPost: post });
    } catch (error) {
        console.error("Error liking post:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

router.post('/submit', async function(req,res){
    let post = new posts({
        username: req.body.username,
        profile_picture: req.body.profile_picture,
        content: req.body.content,
        date: formattedDate
    });
    try{
        await posts.create(post);
        res.sendStatus(200);
    }catch(error){
        console.log(error);
        res.sendStatus(500);
    }
});
module.exports = router;