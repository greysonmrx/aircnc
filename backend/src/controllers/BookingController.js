const Booking = require("../models/Booking");

class BookingController {
  async store(req, res) {
    try {
      const { user_id } = req.headers;
      const { spot_id } = req.params;
      const { date } = req.body;

      const booking = await Booking.create({
        user: user_id,
        spot: spot_id,
        date
      });

      await booking
        .populate("spot")
        .populate("user")
        .execPopulate();

      return res.status(200).json(booking);
    } catch (err) {
      return res.status(400).json({
        message: "Operação indisponível"
      });
    }
  }
}

module.exports = new BookingController();
