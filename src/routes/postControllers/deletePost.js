import Post from '../../models/postModel.js';

export const deletePost = async (req, res, next) => {

  try {
    const { id } = req.params;
    const postToDelete = await Post.deleteOne({ _id: id });
    res
      .status(200)
      .json({ success: true, msg: 'Post was delete.' });
  } catch (err) {
    next(err);
  }
};
