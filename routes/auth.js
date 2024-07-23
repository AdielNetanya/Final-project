const router = require("express").Router();
const User = require("../modules/User")

router.post("/register", async (req, res) => {
    try {
        //create new user
        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: req.body.password
        });

        //save user and respond
        const user = await newUser.save();
        res.status(200).json(user);
    } catch (err) {
        res.status(500).json(err)
    }
});

module.exports = router