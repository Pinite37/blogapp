const roleAuthorization = (requiredRole) => (req, res, next) => {
    if (!req.user || req.user.role !== requiredRole) {
      console.log(`User role is not ${requiredRole}, user role:`, req.user ? req.user.role : 'undefined');
      return res.status(403).json({ message: "You are not authorized to perform this action" });
    }
    next();
};
  
module.exports = roleAuthorization;
  