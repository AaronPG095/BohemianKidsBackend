import Post from '../../models/postModel.js';

export function getAllPosts(req, res, next) {
  Post.find({})
    .then((posts) => {
      if (!posts) {
        return res
          .status(404)
          .json({ success: false, msg: 'Could not find any posts' });
      } else {
        if (posts.length === 0) {
          return res.status(200).json({
            success: true,
            msg: 'List of posts is empty. ',
            posts,
          });
        } else {
          res
            .status(200)
            .json({ success: true, msg: 'List of all posts: ', posts });
        }
      }
    })
    .catch((err) => {
      next(err);
    });
}
