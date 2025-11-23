const Book = require('../models/Book');


const createBook = async (req, res) => {
    // Check if user is authenticated
    if (!req.user) {
        return res.status(401).json({ message: 'You must be logged in to create a book' });
    }
    
    try {
        const newbook = new Book({
            ...req.body,
            createdBy: req.user._id  // Add user ID from authenticated session
        });
        await newbook.save();
        res.json(newbook);
    } catch(error) {
        res.status(409).json({message: error.message});
    }
}

const getBooks = async (req, res) => {
    try {
        const book = await Book.find();
        res.json(book);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

const getSpecBook = async (req, res) => {
    const id = req.params.id;
    try {
        const book = await Book.findById(id);
        res.json(book);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

const updateBook = async (req, res) => {
    const id = req.params.id;
    
    try {
        await Book.findByIdAndUpdate(id, req.body, { new: true });
        const updateBook = await Book.findById(id);
        res.status(200).json(updateBook);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

const deleteBook = async (req, res) => {
    const id = req.params.id;
    try {
        await Book.findByIdAndDelete(id);
        res.status(200).json({ message: "Book deleted successfully" });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

module.exports = {
    createBook,
    getBooks,
    getSpecBook,
    updateBook,
    deleteBook
};