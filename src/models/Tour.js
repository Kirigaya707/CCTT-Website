import mongoose from "mongoose";

const TourSchema = new mongoose.Schema({
  title: { type: String, required: true },
  slug: { type: String, required: true, unique: true },
  category: {
    type: String,
    enum: ["Himalayan High-Passes", "Cultural Heritage Trails", "Mindful Escapes", "Scenic Road Journeys"],
    required: true,
  },
  pickupLocation: { type: String, default: "Esplanade, Kolkata" },
  pickupTime: { type: String, default: "8:00 AM" },
  transportType: { type: String, default: "AC Luxury Mini Bus" },
  priceVeg: { type: Number, required: true },
  priceNonVeg: { type: Number },
  totalSeats: { type: Number, default: 30 },
  availableSeats: { type: Number, default: 30 },
  inclusions: [{ type: String }],
  itineraryList: [{ type: String }],
  isActive: { type: Boolean, default: true },
}, { timestamps: true });

export default mongoose.models.Tour || mongoose.model("Tour", TourSchema);