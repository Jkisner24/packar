import { NextResponse } from 'next/server';
import { GET, POST } from './route';

export default async function handler(req, res) {
  if (req.method === 'GET') {
    return GET(req, res);
  } else if (req.method === 'POST') {
    return POST(req, res);
  } else {
    return NextResponse.json({ message: 'Method not allowed' });
  }
}