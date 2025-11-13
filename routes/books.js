const express = require("express");
const BookController = require("../controllers/bookController");
const router = express.Router();

router.get('/', BookController.getBooks);
router.get('/:title', BookController.getSpecBook);
router.post('/', BookController.createBook);
router.patch('/:title', BookController.updateBook);
router.delete('/:title', BookController.deleteBook);

module.exports = router;