import mongoose from "mongoose";

const ReviewSchema = new mongoose.Schema({
  authorName: { type: String, required: true },
  rating: { type: Number, min: 1, max: 5, required: true },
  reviewText: { type: String, required: true },
  source: { type: String, enum: ["Google Maps", "Feedback Form", "Direct"], default: "Google Maps" },
  isVerified: { type: Boolean, default: true },
}, { timestamps: true });

export default mongoose.models.Review || mongoose.model("Review", ReviewSchema);