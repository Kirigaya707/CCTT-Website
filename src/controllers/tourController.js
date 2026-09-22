import Tour from "../models/Tour.js";

export const getActiveTours = async (req, res) => {
	try {
		const tours = await Tour.find({ isActive: true }).sort({ createdAt: -1 });
		return res.status(200).json({ success: true, count: tours.length, data: tours });
	} catch (error) {
		return res.status(500).json({ success: false, message: "Server Error", error: error.message });
	}
};

export const createTour = async (req, res) => {
	try {
		const newTour = await Tour.create(req.body);
		return res.status(201).json({ success: true, data: newTour });
	} catch (error) {
		return res.status(400).json({ success: false, message: "Invalid Tour Data", error: error.message });
	}
};

export const reserveSeats = async (req, res) => {
	const { tourId, seatsRequested } = req.body;
	try {
		const tour = await Tour.findById(tourId);
		if (!tour || tour.availableSeats < seatsRequested) {
			return res.status(400).json({ success: false, message: "Insufficient seats available" });
		}
		tour.availableSeats -= seatsRequested;
		await tour.save();
		return res.status(200).json({ success: true, remainingSeats: tour.availableSeats });
	} catch (error) {
		return res.status(500).json({ success: false, message: "Booking failed", error: error.message });
	}
};