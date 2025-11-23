const Review = require('../models/Review');


const createReview = async (req, res) => {

    if(!req.user) {
        return res.status(401).json({ message: 'You must be logged in to create a review' });
    }

    const newReview = new Review({
        ...req.body,
        createdBy: req.user._id  // Add user ID from authenticated session
    });
    try {
        await newReview.save();
        res.json(newReview);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }

}

const getReviews = async (req, res) => {
    try {
        const review = await Review.find();
        res.json(review);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

const getSpecReview = async (req, res) => {
    const id = req.params.id;
    try {
        const review = await Review.findById(id);
        res.json(review);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

const updateReview = async (req, res) => {
    const id = req.params.id;

    try {
        await Review.findByIdAndUpdate(id, req.body, { new: true });
        const updateReview = await Review.findById(id);
        res.status(200).json(updateReview);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

const deleteReview = async (req, res) => {
    const id = req.params.id;
    try {
        await Review.findByIdAndDelete(id);
        res.status(200).json({ message: "Review deleted successfully" });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

module.exports = {
    createReview,
    getReviews,
    getSpecReview,
    updateReview,
    deleteReview
};