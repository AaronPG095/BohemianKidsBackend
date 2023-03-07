import { body } from 'express-validator';

export const postValidationMiddleware = [
  body('title', 'Title is required')
    .isString()
    .notEmpty()
    .isAlpha('en-US', { ignore: ' ' }),
  body('image', 'This is a link to image').isString().notEmpty(),
  body('content').isString(),
];
