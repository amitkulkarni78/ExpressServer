const express = require("express");
const router = express.Router();
const books = require("../controllers/bookController");
console.log("books routes called");
router.route('/books')
.get(books.getBooks)


module.exports = router;