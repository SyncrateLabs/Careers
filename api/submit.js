import sgMail from '@sendgrid/mail';
import formidable from 'formidable';
import { promises as fs } from 'fs';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const form = formidable({ multiples: false, keepExtensions: true });

    form.parse(req, async (err, fields, files) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ message: 'Error parsing form' });
      }

      // Prepare email content
      const textContent = `
New Job Application Received:

First Name: ${fields.firstName || 'N/A'}
Last Name: ${fields.lastName || 'N/A'}
Email: ${fields.email || 'N/A'}
Phone: ${fields.phone || 'N/A'}
LinkedIn: ${fields.linkedin || 'N/A'}
Portfolio: ${fields.portfolio || 'N/A'}
Cover Letter: ${fields.coverLetter || 'N/A'}
      `;

      
      let attachments = [];
      if (files.resume) {
        try {
          const filePath = files.resume.filepath; 
          const fileContent = await fs.readFile(filePath);
          attachments = [
            {
              content: fileContent.toString('base64'),
              filename: files.resume.originalFilename || 'resume.pdf',
              type: files.resume.mimetype || 'application/pdf',
              disposition: 'attachment',
            },
          ];
          await fs.unlink(filePath); 
        } catch (fileErr) {
          console.error(fileErr);
          return res.status(500).json({ message: 'Error processing resume' });
        }
      }

      sgMail.setApiKey(process.env.SENDGRID_API_KEY);

      const msg = {
        to: 'your.email@syncrate.org', // Your recipient email
        from: 'sender@syncrate.org', // Your verified SendGrid sender
        subject: 'New Job Application Submission',
        text: textContent,
        attachments: attachments,
      };

      try {
        await sgMail.send(msg);
        res.status(200).json({ message: 'Application submitted!' });
      } catch (sendErr) {
        console.error(sendErr);
        res.status(500).json({ message: 'Error sending email' });
      }
    });
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
