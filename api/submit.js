const { MongoClient } = require('mongodb');

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const data = req.body; 

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
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
