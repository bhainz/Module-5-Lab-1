function logger(req, res, next) {
    console.log(`${new Date().toISOString()} - ${req.method} ${req.url}`);
    next(); // Pass control to the next middleware function
  }
  
  module.exports = logger;