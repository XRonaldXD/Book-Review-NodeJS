const createBook = async (req, res) => {
    const book = req.body;
    const newBook = new Book(book); 
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
    const title = req.params.title;
    try {
        const title = await title.findOne({ roll: roll });
        res.json(book);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

const updateBook = async (req, res) => {
    const title = req.params.title;
    try {
        const updateBook = await Book.findOneAndUpdate({ title: title }, req.body, { new: true });
        res.status(200).json(updateBook);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

const deleteBook = async (req, res) => {
    const title = req.params.title;
    try {
        await Book.findOneAndDelete({title:title});
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