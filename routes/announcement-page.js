const { Router } = require('express') 
const router = Router();
const announcement = require('../database/schemas/announcements');

router.get('/', (req, res) => {
    announcement.find({})
        .lean()
        .exec()
        .then((announcement)=>{
            res.render("announcements", {// renders view with same name as first param in views folder, second param arguments for handle bars placeholders, handlebars expressions
                title: "Announcements",
                announcement: announcement
            })
        })
        .catch((err)=>{
            console.error("Error fetching announcements:", err);
            res.status(500).send("Internal Server Error");
        })
});

module.exports = router;
