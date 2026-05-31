const Comment = require("../models/Comment");

const addComment = async (req, res) => {
  try {
    const comment = await Comment.create({
      discussionId: req.body.discussionId,
      userId: req.user.id,
      text: req.body.text,
    });

    res.status(201).json(comment);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const getComments = async (req, res) => {
  try {
    const comments = await Comment.find({
      discussionId: req.params.id,
    })
      .populate("userId", "name")
      .sort({ createdAt: -1 });

    res.json(comments);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  addComment,
  getComments,
};