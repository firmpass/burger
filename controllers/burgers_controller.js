const express = require("express");

const router = express.Router();


//Import the model (burger.js) to use its database functions.
var burger = require("../models/burger.js");

//Create all our routes and set up logic within those routes where required.
router.get("/", (req, res)=> {
    res.render("index");
})

module.exports = router;