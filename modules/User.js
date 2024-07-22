const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
        username: {
            type: String,
            min: 3,
            max: 30,
            unique: true,
            required: true
        },
        email: {
            type: String,
            max: 60,
            unique: true,
            required: true
        },
        password: {
            type: String,
            min: 6,
            required: true
        },
        profilePicture: {
            type: String,
            default: ""
        },
        coverPicture: {
            type: String,
            default: ""
        },
        followers: {
            type: Array,
            default: []
        },
        following: {
            type: Array,
            default: []
        },
        isAdmin: {
            type: Boolean,
            default: false
        }
    },
    {timestamps: true}
);

module.exports = mongoose.model("User", userSchema);
