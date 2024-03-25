import { createTransport } from 'nodemailer';

const transporter = createTransport({
  host: 'smtp.qq.com',
  port: 587,
  secure: false,
  auth: {
    user: 'xxx',
    pass: 'xxx',
  },
});

const codePlaceholder = '{code}';

// const registerEmailSubject = 'Vino Registration Verification Code'
// const registerEmailTemplate = `
// Dear User,

// Thank you for choosing Vino! We appreciate your registration. Please use the following verification code to complete the registration process for Vino:

// Verification Code: ${codePlaceholder}

// Kindly input the above code on the registration page to finalize your registration with Vino. If you encounter any issues or require assistance, please don't hesitate to reach out to us.

// Thank you for choosing Vino!
// `;

// const loginEmailSubject = 'Vino Login Verification Code';
// const loginEmailTemplate = `
// Dear User,

// Welcome back to Vino! To ensure the security of your account, please use the following verification code to log in:

// Verification Code: ${codePlaceholder}

// Kindly enter the above code when prompted during the login process. If you have any questions or need assistance, feel free to contact our support team.

// Thank you for choosing Vino!
// `;

const resetPasswordEmailSubject = 'Vino Password Reset Verification Code';
const resetPasswordEmailTemplate = `
Dear User,

It seems you've requested a password reset for your Vino account. To proceed with resetting your password, please use the following verification code:

Verification Code: ${codePlaceholder}

Please enter the above code on the password reset page to complete the process. If you did not request this password reset or need further assistance, please contact our support team immediately.

Thank you for choosing Vino!
`;

(async () => {
  const info = await transporter.sendMail({
    from: '1003659191@qq.com',
    to: '1003659191@qq.com',
    subject: resetPasswordEmailSubject,
    text: resetPasswordEmailTemplate.trim().replace(codePlaceholder, '123456'),
  });

  console.log('Message sent: %s', JSON.stringify(info));
})();
