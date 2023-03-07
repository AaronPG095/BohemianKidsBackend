import Post from '../../models/postModel.js';

export async function addPost(req, res, next) {
  try {
    const newPost = new Post({
      title: req.body.title,
      img: req.body.img,
      description: req.body.description,
      date: req.body.date,
      changeAt: new Date(),
    });

    newPost
      .save()
      .then(async (post) => {
        res.status(200).json({
          success: true,
          post: post,
          msg: 'Post added successfully',
        });
      })
      .catch((err) => {
        next(err);
      });
  } catch (error) {
    next(error);
  }
}
