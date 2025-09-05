
function verifyRole(role) {
  return function (req, res, next) {
    if (req.user && req.user.role === role) {
      return next();
    }
    return res.status(403).json({ message: 'Forbidden: Insufficient permissions' });
  };
}

module.exports = verifyRole;