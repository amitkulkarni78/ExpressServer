 const express = require("express");
const router = express.Router();
const user = require("../controllers/userController");
console.log("user routes called");
router.route('/user')
.get(user.getUsers)
.post(user.addUser)


module.exports = router;