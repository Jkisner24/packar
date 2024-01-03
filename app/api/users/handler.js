import { getUserHandler, postUserHandler } from './route';

export default async function handler(req, res) {
  if (req.method === 'GET') {
    return getUserHandler(req, res);
  } else if (req.method === 'POST') {
    return postUserHandler(req, res);
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}