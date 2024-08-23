const bcrypt = require('bcryptjs');

// Middleware to hash passwords
const hashPassword = async (req, res, next) => {
  if (req.body.password && req.method === 'POST') {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    req.body.password = hashedPassword;
  }
  try {
    if (req.body.password) {
      const hashedPassword = await bcrypt.hash(req.body.password, 10);
      req.body.password = hashedPassword;
    }
    next();
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = hashPassword;
