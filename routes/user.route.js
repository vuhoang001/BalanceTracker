const express = require("express");
const router = express.Router();
const UserController = require("../controllers/user.controller");
router.get("/", UserController.GetUser);
router.post("/", UserController.CreateUsre);
module.exports = router;
