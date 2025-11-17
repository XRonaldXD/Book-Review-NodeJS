const express = require("express");
const ReviewController = require("../controllers/reviewController");
const router = express.Router();

// Create a new review
router.post("/", ReviewController.createReview);
// Get all reviews
router.get("/", ReviewController.getReviews);
// Get a specific review by ID
router.get("/:id", ReviewController.getSpecReview);
// Update a review by ID
router.put("/:id", ReviewController.updateReview);
// Delete a review by ID
router.delete("/:id", ReviewController.deleteReview);


module.exports = router;