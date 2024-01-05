import { GET, POST } from './route';

export default async function handler(req, res) {
  if (req.method === 'GET') {
    return GET(req, res);
  } else if (req.method === 'POST') {
    return POST(req, res);
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
