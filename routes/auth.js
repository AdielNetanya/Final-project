const router = require("express").Router();
const User = require("../modules/User")

router.post("/register", async (req, res) => {
    const newUser = await new User({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
    })

    try{
        const user = await newUser.save()
        res.status(200).json(user)
    }catch (err){
        console.log(err)
    }
})

module.exports = router