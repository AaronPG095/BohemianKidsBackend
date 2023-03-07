import User from '../../models/userModel.js';
import { sendEmail } from '../../helpers/sendEmail.js';
import { v4 as uuidv4 } from 'uuid';
import { genPassword, issueJWT } from '../../../helperFunctions.js';
import { validationResult } from 'express-validator';

export async function registerUser(req, res, next) {
  try {
    const myValidationResults = validationResult(req);
    const { password, confirmPassword, title } = req.body;
    const verificationString = uuidv4();

    if (title === 'select title' || title === '') {
      return res.status(400).send({
        success: false,
        errors: [{ msg: 'Please select title' }],
      });
    }

    if (myValidationResults.errors.length > 0) {
      return res.status(400).send({
        success: false,
        msg: 'Some data is in not valid format.',
        errors: myValidationResults.array(),
      });
    }

    if (password !== confirmPassword) {
      return res.status(400).send({
        success: false,
        errors: [{ msg: 'Passwords need to be the same.' }],
      });
    }

    const saltHash = genPassword(password);

    const salt = saltHash.salt;
    const hash = saltHash.hash;

    const newUser = new User({
      lName: req.body.lName,
      fName: req.body.fName,
      email: req.body.email,
      title: req.body.title,
      verificationString: verificationString,
      changeAt: new Date(),
      hash: hash,
      salt: salt,
    });

    newUser
      .save()
      .then(async (user) => {
        // new user need to verify email
        await sendEmail({
          to: req.body.email,
          from: 'bohemiankidscoffee@gmail.com',
          subject: 'BOHEMIAN KIDS CAFE - Please verify your email',
          html: `
          <div style="text-align: center; margin: 0 auto; width: 100%">
          <br/>
          <img 
            src='https://res.cloudinary.com/den2eiqpj/image/upload/v1677574668/BK_Logo_SW_zbwgy1.png'
             alt='BohemianKidsCoffee Logo'
             width='300px'
             height='300px'/>
          <br/>

            <h1>Thanks for signing up!</h1>
            <h3>To verify your email, click link above</h2>
            https://bohemiankidscafe.onrender.com/verify-email/${user.verificationString}
        
            <br/>
            <p>Greetings,</p>
            <p>Bohemian Kids Cafe</p>
            </div>>
           
          `,
        });

        const jwt = issueJWT(user);
        res.status(200).json({
          success: true,
          user_id: user.id,
          token: jwt.token,
          expiresIn: jwt.expires,
        });
      })
      .catch((err) => {
        next(err);
      });
  } catch (error) {
    next(error);
  }
}
