const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        
    },
    author: {
        type: String,
        required: true,
        
    },
    description: {
        type: String,
        required: true
    },
    
    publishedDate: {
        type: Date,
        required: true
    },
    
    coverImage: {
        type: String,
        default: 'default-book-cover.jpg'
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    }
});


const Book = mongoose.model('Book', bookSchema);

