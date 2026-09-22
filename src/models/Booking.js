import mongoose from "mongoose";

const BookingSchema = new mongoose.Schema({
  tourId: { type: mongoose.Schema.Types.ObjectId, ref: "Tour", required: true },
  customerName: { type: String, required: true },
  customerPhone: { type: String, required: true },
  seatsBooked: { type: Number, default: 1 },
  mealType: { type: String, enum: ["Veg", "NonVeg"], default: "Veg" },
  totalPrice: { type: Number, required: true },
  status: { type: String, enum: ["Pending", "Confirmed", "Cancelled"], default: "Pending" },
}, { timestamps: true });

export default mongoose.models.Booking || mongoose.model("Booking", BookingSchema);