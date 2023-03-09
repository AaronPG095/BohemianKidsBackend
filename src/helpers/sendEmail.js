import sendgrid from '@sendgrid/mail';
import { config } from 'dotenv';
// before using sendgrid we need to set our API key
// from sendgrid account

config();

sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

/**
 *
 * @param {*} senEmail helper function to use
 * sendgrid.send().
 * @returns  sendgrid.send() with passed arguments
 */

export const sendEmail = ({ to, from, subject, text, html }) => {
  const msg = { to, from, subject, text, html };
  return sendgrid.send(msg);
};
