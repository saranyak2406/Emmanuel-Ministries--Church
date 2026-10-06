import nodemailer from 'nodemailer';
import fs from 'node:fs';
import path from 'node:path';

// Helper to ensure .env variables are reliably loaded even if the dev server was started earlier
const getEnv = (key: string): string => {
  if (process.env[key]) return process.env[key] as string;

  try {
    const envPath = path.resolve(process.cwd(), '.env');
    if (fs.existsSync(envPath)) {
      const content = fs.readFileSync(envPath, 'utf-8');
      const lines = content.split('\n');
      for (const line of lines) {
        const trimmed = line.trim();
        if (!trimmed || trimmed.startsWith('#')) continue;
        const idx = trimmed.indexOf('=');
        if (idx !== -1) {
          const k = trimmed.substring(0, idx).trim();
          const v = trimmed.substring(idx + 1).trim().replace(/^["']|["']$/g, '');
          process.env[k] = v;
        }
      }
    }
  } catch (err) {
    // Ignore fallback errors
  }

  return process.env[key] || '';
};

// Helper to create transport for a specific email account (supports Hostinger SMTP & Gmail)
const createTransporter = (user?: string, pass?: string) => {
  if (!user || !pass) {
    throw new Error('Email credentials not configured in environment variables (.env file).');
  }

  const isGmail = user.endsWith('@gmail.com');
  const host = getEnv('SMTP_HOST') || 'smtp.hostinger.com';
  const port = Number(getEnv('SMTP_PORT')) || 465;

  if (!isGmail || getEnv('SMTP_HOST')) {
    return nodemailer.createTransport({
      host,
      port,
      secure: port === 465, // true for 465 (SSL), false for 587 (TLS)
      auth: { user, pass },
    });
  }

  return nodemailer.createTransport({
    service: 'gmail',
    auth: { user, pass },
  });
};

// 1. Contact Us Email Handler
export const sendContactEmail = async (contactData: { name: string; email: string; phone: string; subject: string; message: string }) => {
  const user = getEnv('CONTACT_EMAIL_USER') || getEnv('EMAIL_USER');
  const pass = getEnv('CONTACT_EMAIL_PASS') || getEnv('EMAIL_PASS');

  if (!user || !pass) {
    throw new Error('Contact email credentials missing. Please set EMAIL_USER and EMAIL_PASS in .env');
  }

  const transporter = createTransporter(user, pass);
  
  const mailOptions = {
    from: `"${contactData.name}" <${user}>`,
    replyTo: contactData.email,   
    to: user,   
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

// 2. Prayer Request Email Handler
export const sendPrayerEmail = async (prayerData: { name: string; email: string; phone: string; city?: string; category: string; request: string }) => {
  const user = getEnv('PRAYER_EMAIL_USER') || getEnv('EMAIL_USER');
  const pass = getEnv('PRAYER_EMAIL_PASS') || getEnv('EMAIL_PASS');

  if (!user || !pass) {
    throw new Error('Prayer email credentials missing. Please set PRAYER_EMAIL_USER and PRAYER_EMAIL_PASS (or EMAIL_USER and EMAIL_PASS) in .env');
  }

  const transporter = createTransporter(user, pass);
  
  const mailOptions = {
    from: `"${prayerData.name} (Prayer Request)" <${user}>`,
    replyTo: prayerData.email,
    to: user,
    subject: `New Prayer Request: ${prayerData.category} - ${prayerData.name}`,
    text: `
      Name: ${prayerData.name}
      Email: ${prayerData.email}
      Phone: ${prayerData.phone}
      Current City (Prayer Location): ${prayerData.city || 'Not provided'}
      Category: ${prayerData.category}
      
      Prayer Request:
      ${prayerData.request}
    `,
    html: `
      <div style="font-family: Arial, sans-serif; padding: 24px; color: #1e293b; max-width: 600px; border: 1px solid #e2e8f0; border-radius: 12px; background-color: #ffffff;">
        <h2 style="color: #c2912e; margin-top: 0; padding-bottom: 12px; border-bottom: 2px solid #c2912e;">New Prayer Request</h2>
        <table style="width: 100%; border-collapse: collapse; margin-top: 16px;">
          <tr>
            <td style="padding: 8px 0; font-weight: bold; width: 170px; color: #475569;">Name:</td>
            <td style="padding: 8px 0; color: #0f172a;">${prayerData.name}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; font-weight: bold; color: #475569;">Email:</td>
            <td style="padding: 8px 0; color: #0f172a;"><a href="mailto:${prayerData.email}">${prayerData.email}</a></td>
          </tr>
          <tr>
            <td style="padding: 8px 0; font-weight: bold; color: #475569;">Phone / WhatsApp:</td>
            <td style="padding: 8px 0; color: #0f172a;">${prayerData.phone}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; font-weight: bold; color: #475569;">Current City (Location):</td>
            <td style="padding: 8px 0; color: #0f172a; font-weight: 600;">${prayerData.city || 'Not provided'}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; font-weight: bold; color: #475569;">Prayer Category:</td>
            <td style="padding: 8px 0; color: #c2912e; font-weight: bold;">${prayerData.category}</td>
          </tr>
        </table>
        <div style="margin-top: 20px; padding: 16px; background-color: #fdfbf7; border-left: 4px solid #c2912e; border-radius: 6px;">
          <strong style="color: #0f172a; display: block; margin-bottom: 8px;">Prayer Request:</strong>
          <p style="white-space: pre-wrap; margin: 0; color: #334155; line-height: 1.6;">${prayerData.request}</p>
        </div>
      </div>
    `,
  };

  return transporter.sendMail(mailOptions);
};

// 3. Partnership Email Handler
export const sendPartnershipEmail = async (partnerData: { name: string; email: string; phone: string; address: string; partnershipType: string; amount: string; message: string }) => {
  const user = getEnv('CONTACT_EMAIL_USER') || getEnv('EMAIL_USER');
  const pass = getEnv('CONTACT_EMAIL_PASS') || getEnv('EMAIL_PASS');

  if (!user || !pass) {
    throw new Error('Partnership email credentials missing. Please set EMAIL_USER and EMAIL_PASS in .env');
  }

  const transporter = createTransporter(user, pass);
  
  const mailOptions = {
    from: `"${partnerData.name} (Partnership)" <${user}>`,
    replyTo: partnerData.email,
    to: user,
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
