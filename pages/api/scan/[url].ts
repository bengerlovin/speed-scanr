import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { url } = req.query;
  const formattedUrl = decodeURIComponent(url as string);
  res.status(200).json({ url: formattedUrl, fullQuery: req.query });
}
