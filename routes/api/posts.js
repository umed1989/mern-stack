const express = require("express");
const router = express.Router();
router.get("/posts", (req, res) => res.json({ msg: "Posts Works" }));

module.exports = router;
