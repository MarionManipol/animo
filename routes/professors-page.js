const { Router } = require('express') //to get package from express, in node_modules
const router = Router();
const professors = require('../database/schemas/professors');

router.get('/', (req, res)=>{ //atm test, should be animo-wall
    professors.find({})
        .lean()
        .exec()
        .then((professors)=>{
            
            res.render("profs", {// renders view with same name as first param in views folder, second param arguments for handle bars placeholders, handlebars expressions
                title: "Prof's To Pick",
                professors: professors
            })
        })
        .catch((err)=>{
            console.error("Error fetching professors:", err);
            res.status(500).send("Internal Server Error");
        })
})

router.post('/upvote', async (req, res) => {
    try {
        const professor = await professors.findOneAndUpdate(
            { _id: req.body._id },
            { $inc: { upvotes: 1 } },
            { new: true } // This option returns the updated document
        );
        
        res.json({ message: 'Upvote successful', updatedProfessor: professor });
    } catch (error) {
        console.error("Error upvoting professor:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

router.post('/downvote', async (req, res) => {
    try {
        const professor = await professors.findOneAndUpdate(
            { _id: req.body._id },
            { $inc: { downvotes: 1 } },
            { new: true } // This option returns the updated document
        );
        
        res.json({ message: 'Downvote successful', updatedProfessor: professor });
    } catch (error) {
        console.error("Error upvoting professor:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

module.exports = router;