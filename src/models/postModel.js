import { model, Schema } from 'mongoose';

const postSchema = new Schema({
  title: { type: String, required: true },
  img: { type: String },
  description: { type: String },
  date: { type: Date },
});

const Post = model('Post', postSchema);
export default Post;
