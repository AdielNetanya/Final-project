const router = require("express").Router();
const User = require("../modules/User")
const bcrypt = require("bcrypt");

router.post("/register", async (req, res) => {
    try {
        //generate new password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(req.body.password, salt);

        //create new user
        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: hashedPassword
        });

        //save user and respond
        const user = await newUser.save();
        res.status(200).json(user);
    } catch (err) {
        res.status(500).json(err)
    }
});

router.post("/login", async (req, res) => {
    try {
        const user = await User.findOne({email: req.body.email});
        !user && res.status(404).json("User not found");

        console.log(user.password)
        console.log(req.body.password)
        const validPassword = await req.body.password === user.password // req.body.password === user.password
        console.log(validPassword)
        !validPassword && res.status(400).json("Wrong password!")

        res.status(200).json(user);
    }catch (e){
        res.status(500).json(e);    }
});

module.exports = router