import Booking from "../models/Booking.js";
import Tour from "../models/Tour.js";

export const createBooking = async (req, res) => {
  try {
    const { tourId, customerName, customerPhone, seatsBooked, mealType } = req.body;
    const tour = await Tour.findById(tourId);
    if (!tour || tour.availableSeats < seatsBooked) {
      return res.status(400).json({ success: false, message: "Seats unavailable" });
    }
    const pricePerSeat = mealType === "NonVeg" && tour.priceNonVeg ? tour.priceNonVeg : tour.priceVeg;
    const totalPrice = pricePerSeat * seatsBooked;
    const newBooking = await Booking.create({ tourId, customerName, customerPhone, seatsBooked, mealType, totalPrice });
    tour.availableSeats -= seatsBooked;
    await tour.save();
    return res.status(201).json({ success: true, data: newBooking });
  } catch (error) {
    return res.status(500).json({ success: false, message: "Server error", error: error.message });
  }
};