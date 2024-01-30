const express = require("express");
const router = new express.Router();
const fetch = require("node-fetch");
const urlMiddleware = require("../middleware/urlMiddleware");

router.get("/:type", urlMiddleware, async (req, res) => {
  try {
    const response = await fetch(req.url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!response.ok) {
      return res
        .status(response.status)
        .json({ statusCode: response.status, message: response.statusText });
    }
    const data = await response.json();
    return res.send(data);
  } catch (error) {
    return res.json(error);
  }
});

router.post("/", (req, res) => {
  //validate data
  //send TFL request
  //handle the response
  //send back relevant data to the requester in the response
});

module.exports = router;
