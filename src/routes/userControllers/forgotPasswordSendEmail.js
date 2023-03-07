import { v4 as uuid } from 'uuid';
import { sendEmail } from '../../helpers/sendEmail.js';
import User from '../../models/userModel.js';

export async function forgotPasswordSendEmail(req, res, next) {
  const { email } = req.body;
  const passwordResetCode = uuid();

  const result = await User.findOneAndUpdate(
    { email },
    { $set: { passwordResetCode } }
  );

  if (result) {
    try {
      await sendEmail({
        to: email,
        from: 'bohemiankidscoffee@gmail.com',
        subject: 'Password Reset',

        html: ` <div style="text-align: center; margin: 0 auto; width: 100%">
        <br/>
        <img 
          src='https://res.cloudinary.com/den2eiqpj/image/upload/v1677574668/BK_Logo_SW_zbwgy1.png'
           alt='BohemianKidsCoffee Logo'
           width='300px'
           height='300px'/>
        <br/>

          <h1>Thanks for signing up!</h1>
          <h3>To reset your password, click link above</h2>
          https://bohemiankidscafe.onrender.com/reset-password/${passwordResetCode}
      
          <br/>
          <p>Greetings,</p>
          <p>Bohemian Kids Caffee</p>
          </div>> `,
      });
      return res.status(200).json({
        success: true,
        msg: 'Email with reset password link sent.',
      });
    } catch (err) {
      next(err);
    }
  } else {
    res.status(401).json({ success: false, msg: 'Email is incorrect' });
  }
}
