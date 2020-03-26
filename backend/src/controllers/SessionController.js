const User = require("../models/User");

class SessionController {
  async store(req, res) {
    try {
      const { email } = req.body;

      let user = await User.findOne({ email });

      if (!user) {
        user = await User.create({ email });
      }

      return res.status(200).json(user);
    } catch (err) {
      return res.status(400).json({
        message: "Operação indisponível"
      });
    }
  }
}

module.exports = new SessionController();
