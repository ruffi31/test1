
// app/api/sendEmail/route.ts
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  const body = await request.json();

  // Destructure all possible fields, they might be undefined depending on type
  const {
    fullName,
    dateOfBirth,
    insurance,
    phoneNumber,
    currentPharmacy,
    rxNumber,
    additionalNotes,
    currentMedications,
    type,
  } = body;

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  // Build the message dynamically based on the type
  let message = `Name: ${fullName || 'N/A'}\nDate of Birth: ${dateOfBirth || 'N/A'}\n`;

  if (type === 'transfer') {
    message += `Current Pharmacy: ${currentPharmacy || 'N/A'}\n`;
    message += `Insurance: ${insurance || 'N/A'}\n`;
    message += `Phone Number: ${phoneNumber || 'N/A'}\n`;
    message += `Current Medications / Notes: ${currentMedications || 'N/A'}\n`;
  } else if (type === 'refill') {
    message += `Rx Number: ${rxNumber || 'N/A'}\n`;
    message += `Phone Number: ${phoneNumber || 'N/A'}\n`;
    message += `Additional Notes: ${additionalNotes || 'N/A'}\n`;
  } else {
    message += 'Unknown request type.\n';
  }

  const mailOptions = {
    from: process.env.EMAIL_USER,
    //to: 'tusaludpharmacy9109@gmail.com',
    to: 'sherwood9721@gmail.com',
    subject: `${type || 'Unknown'} Prescription Request from ${fullName || 'Unknown'}`,
    text: message,
  };

  try {
    await transporter.sendMail(mailOptions);
    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    console.error('Email sending error:', error);
    return new Response(JSON.stringify({ success: false, error }), { status: 500 });
  }
}

