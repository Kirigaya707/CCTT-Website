import Review from "../models/Review.js";

export const getVerifiedReviews = async (req, res) => {
  try {
    const reviews = await Review.find({ isVerified: true }).sort({ createdAt: -1 }).limit(10);
    return res.status(200).json({ success: true, data: reviews });
  } catch (error) {
    return res.status(500).json({ success: false, message: "Failed to fetch reviews", error: error.message });
  }
};

export const addReview = async (req, res) => {
  try {
    const review = await Review.create(req.body);
    return res.status(201).json({ success: true, data: review });
  } catch (error) {
    return res.status(400).json({ success: false, message: "Invalid review payload", error: error.message });
  }
};