import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  console.log('Logging from API route...');
  
  res.status(200).json({ message: 'Logging is working!' });
}
