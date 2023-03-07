import Post from '../../models/postModel.js';

export const updatePost = async (req, res, next) => {
  try {
    const { id } = req.params;
    const postToUpdate = await Post.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (postToUpdate === null) {
      return res
        .status(404)
        .json({ success: false, msg: 'Could not find post with this id.' });
    } else {
      res.status(200).json({
        success: true,
        msg: 'Post updated successful.',
        post: postToUpdate,
      });
    }
  } catch (err) {
    next(err);
  }
};
