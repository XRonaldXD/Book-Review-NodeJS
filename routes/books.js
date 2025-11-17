const express = require("express");
const BookController = require("../controllers/bookController");
const router = express.Router();

router.get('/get', BookController.getBooks);
router.get('/:id', BookController.getSpecBook);
router.post('/cb', BookController.createBook);
router.put('/:id', BookController.updateBook);
router.delete('/:id', BookController.deleteBook);

module.exports = router;