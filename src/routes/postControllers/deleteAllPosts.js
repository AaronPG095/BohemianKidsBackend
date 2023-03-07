import Post from '../../models/postModel.js';

export const deleteAllPosts = async (req, res, next) => {
  try {
    const { id } = req.params;
    const deletedPosts = await Post.deleteMany({});
    console.log(deletedPosts)
    if (deletedPosts.deletedCount === 0) {
      res.status(404).json({ success: false, msg: 'No posts to delete.' });
    } else {
      res.status(200).json({ success: true, msg: 'All posts deleted.' });
    }
  } catch (err) {
    next(err);
  }
};
