const Spot = require("../models/Spot");

class DashboardController {
  async show(req, res) {
    try {
      const { user_id } = req.headers;

      const spots = await Spot.find({ user: user_id });

      return res.status(200).json(spots);
    } catch (err) {
      return res.status(400).json({
        message: "Operação indisponível"
      });
    }
  }
}

module.exports = new DashboardController();
