// Next.js
import type { NextApiRequest, NextApiResponse } from 'next'

// Types
import { ContactFormResponseData } from '../../utils/api/types';

/**
 * Hardcoded mock API route handler for the index.tsx contact form.
 * 
 * @param _ Placeholder for unused request object
 * @param res `NextApiResponse` object containing the response data for the contact form
 * 
 * @returns Successful JSON response with a hardcoded `message` value of "Sent!"
 */
export default function handler(_: NextApiRequest, res: NextApiResponse<ContactFormResponseData>) {
  res.status(200).json({ message: "Sent!" });
  return res;
}
