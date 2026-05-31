const express = require("express");

const {
  createDiscussion,
  getDiscussions,
  getDiscussionById,
} = require("../controllers/discussionController");

const protect = require("../middleware/authMiddleware");

const router = express.Router();

router.get("/", getDiscussions);
router.get("/:id", getDiscussionById);

router.post("/", protect, createDiscussion);

module.exports = router;