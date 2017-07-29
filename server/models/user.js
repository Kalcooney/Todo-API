const mongoose = require("mongoose");

let userSchema = mongoose.Schema({
    email: {
        type: String,
        required: true,
        trim: true,
        minlength: 1
    }
});

let User = mongoose.model("User", userSchema);

module.exports = {User};