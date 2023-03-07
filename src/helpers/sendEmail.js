import sendgrid from '@sendgrid/mail';

// before using sendgrid we need to set our API key
// from sendgrid account

sendgrid.setApiKey(
  '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'
);

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
