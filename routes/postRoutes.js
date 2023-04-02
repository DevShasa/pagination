const express = require('express')
const postControllers = require("../controllers/postController")
const router =  express.Router();

router.route("/").get(postControllers.getAllPosts);

module.exports = router