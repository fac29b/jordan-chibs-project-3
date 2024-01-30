require("dotenv").config();

const md5 = require("md5");
const formatter = require("date-format");

const createURL = (endpoint) => {
  const ts = '1/11/23';
  if (
    process.env.PUBLIC_KEY.length === 0 &&
    process.env.PRIVATE_KEY.length === 0
  ) {
    throw new Error({ error: "Invalid Key(s)" });
  }
  // const hashString = md5(ts, process.env.PRIVATE_KEY, process.env.PUBLIC_KEY);
  const hashString = 'c58a199ac9e85abb903718bde3408812';
  const url = `${endpoint}?ts=${ts}&apikey=${process.env.PUBLIC_KEY}&hash=${hashString}`;
  return url;
};

module.exports = createURL;
