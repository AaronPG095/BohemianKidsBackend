import { Router } from 'express';
import { addPost } from './postControllers/addPost.js';
import { deleteAllPosts } from './postControllers/deleteAllPosts.js';
import { deletePost } from './postControllers/deletePost.js';
import { getAllPosts } from './postControllers/getAllPosts.js';
import { getOnePost } from './postControllers/getOnePost.js';
import { updatePost } from './postControllers/updatePost.js';

export const postRoute = Router();

postRoute.get('/getAllPosts', getAllPosts);
postRoute.put('/addPost', addPost);
postRoute.delete('/deletePost/:id', deletePost);
postRoute.get('/getOnePost/:id', getOnePost);
postRoute.patch('/updatePost/:id', updatePost);
postRoute.delete('/deleteAllPosts', deleteAllPosts)
