import { MongoClient } from 'mongodb';
import formidable from 'formidable';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const form = formidable();
    form.parse(req, async (err, fields, files) => {
      if (err) {
        return res.status(500).json({ message: 'Error parsing form' });
      }
      const data = { ...fields, resume: files.resume ? files.resume.originalFilename : null }; // Handle file (save to storage if needed)

      try {
        const client = new MongoClient(process.env.MONGODB_URI);
        await client.connect();
        const db = client.db('applications');
        await db.collection('submissions').insertOne(data);
        await client.close();
        res.status(200).json({ message: 'Application submitted!' });
      } catch (error) {
        res.status(500).json({ message: 'Error submitting application' });
      }
    });
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
