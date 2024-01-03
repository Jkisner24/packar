import { getHandler, postHandler } from './route';

export default async function handler(req, res) {
  if (req.method === 'GET') {
    return getHandler(req, res);
  } else if (req.method === 'POST') {
    return postHandler(req, res);
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
