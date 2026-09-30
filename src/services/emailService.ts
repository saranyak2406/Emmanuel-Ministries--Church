import nodemailer from 'nodemailer';

// Configure the email transport using environment variables
// Make sure to add EMAIL_USER and EMAIL_PASS to your backend environment variables (.env file)
const getTransporter = () => {
  return nodemailer.createTransport({
    service: 'gmail', // You can change this to your email provider (e.g., SendGrid, Outlook)
    auth: {
      user: process.env.EMAIL_USER || 'your-email@gmail.com',
      pass: process.env.EMAIL_PASS || 'your-app-password',
    },
  });
};

export const sendContactEmail = async (contactData: { name: string; email: string; phone: string; subject: string; message: string }) => {
  const transporter = getTransporter();
  
  const mailOptions = {
    from: `"${contactData.name}" <${process.env.EMAIL_USER}>`,
    replyTo: contactData.email,   
    to: process.env.EMAIL_USER,   
    subject: `New Contact Request: ${contactData.subject}`,
    text: `
      Name: ${contactData.name}
      Email: ${contactData.email}
      Phone: ${contactData.phone}
      
      Message:
      ${contactData.message}
    `,
  };

  return transporter.sendMail(mailOptions);
};

export const sendPrayerEmail = async (prayerData: { name: string; email: string; phone: string; category: string; request: string }) => {
  const transporter = getTransporter();
  
  const mailOptions = {
    from: `"${prayerData.name} (Prayer Request)" <${process.env.EMAIL_USER}>`,
    replyTo: prayerData.email,
    to: process.env.EMAIL_USER,
    subject: `New Prayer Request: ${prayerData.category}`,
    text: `
      Name: ${prayerData.name}
      Email: ${prayerData.email}
      Phone: ${prayerData.phone}
      Category: ${prayerData.category}
      
      Prayer Request:
      ${prayerData.request}
    `,
  };

  return transporter.sendMail(mailOptions);
};

export const sendPartnershipEmail = async (partnerData: { name: string; email: string; phone: string; address: string; partnershipType: string; amount: string; message: string }) => {
  const transporter = getTransporter();
  
  const mailOptions = {
    from: `"${partnerData.name} (Partnership)" <${process.env.EMAIL_USER}>`,
    replyTo: partnerData.email,
    to: process.env.EMAIL_USER,
    subject: `New Partnership Request: ${partnerData.partnershipType}`,
    text: `
      Name: ${partnerData.name}
      Email: ${partnerData.email}
      Phone: ${partnerData.phone}
      Address: ${partnerData.address}
      
      Partnership Type: ${partnerData.partnershipType}
      Pledged Amount: ${partnerData.amount}
      
      Message:
      ${partnerData.message}
    `,
  };

  return transporter.sendMail(mailOptions);
};
