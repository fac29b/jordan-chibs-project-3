const createURL = require("../utils/createURL");

const urlMiddleware = (req, res, next) => {
  const type = req.params.type;
  req.url = createURL(`https://gateway.marvel.com/v1/public/${type}`); 
  next();
};

module.exports = urlMiddleware;
