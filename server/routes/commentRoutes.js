const express = require("express");

const {
  addComment,
  getComments,
} = require("../controllers/commentController");

const protect = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/", protect, addComment);

router.get("/:id", getComments);

module.exports = router;