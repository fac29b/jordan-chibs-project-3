const express = require("express");
const router = new express.Router();
const path = require('path');

router.get("/", (req, res) => {
  res.sendFile(path.resolve('public/index.html'), {data: [{name: "andrew"}]});
});

module.exports = router;