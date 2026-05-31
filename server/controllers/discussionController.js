const Discussion = require("../models/Discussion");

const createDiscussion = async (req, res) => {
  try {
    const discussion = await Discussion.create({
      title: req.body.title,
      content: req.body.content,
      author: req.user.id,
    });

    res.status(201).json(discussion);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const getDiscussions = async (req, res) => {
  try {
    const discussions =
      await Discussion.find().populate(
        "author",
        "name email"
      );

    res.json(discussions);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const getDiscussionById = async (req, res) => {
  try {
    const discussion =
      await Discussion.findById(
        req.params.id
      ).populate("author", "name email");

    res.json(discussion);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  createDiscussion,
  getDiscussions,
  getDiscussionById,
};