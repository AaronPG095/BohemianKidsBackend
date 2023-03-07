import Post from '../../models/postModel.js';

export const getOnePost = async (req, res, next) => {
  try {
    const { id } = req.params;
    const post = await Post.findById(id);
    if (post === null) {
      return res
        .status(404)
        .json({ success: false, msg: 'Could not find post with this id.' });
    } else {
      res.status(200).json({
        success: true,
        msg: `Post found.`,
        post: post,
      });
    }
  } catch (err) {
    next(err);
  }
};
