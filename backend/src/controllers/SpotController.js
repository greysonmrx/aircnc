const User = require("../models/User");
const Spot = require("../models/Spot");

class SpotController {
  async store(req, res) {
    try {
      const { filename } = req.file;
      const { company, techs, price } = req.body;
      const { user_id } = req.headers;

      const user = await User.findById(user_id);

      if (!user) {
        return res.status(400).json({
          message: "Usuário não encontrado"
        });
      }

      const spot = await Spot.create({
        user: user_id,
        thumbnail: filename,
        company,
        techs: techs.split(",").map(tech => tech.trim()),
        price
      });

      return res.status(200).json(spot);
    } catch (err) {
      return res.status(400).json({
        message: "Operação indisponível"
      });
    }
  }
}

module.exports = new SpotController();
