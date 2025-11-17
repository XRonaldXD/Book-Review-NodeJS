const express = require("express");
const BookController = require("../controllers/bookController");
const router = express.Router();

// Get all books
router.get('/', BookController.getBooks);
// Create a new book
router.post('/', BookController.createBook);
// Get a specific book by ID
router.get('/:id', BookController.getSpecBook);
// Update a book by ID  
router.put('/:id', BookController.updateBook);
// Delete a book by ID
router.delete('/:id', BookController.deleteBook);

module.exports = router;