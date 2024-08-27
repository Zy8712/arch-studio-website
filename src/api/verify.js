import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

export default function handler(req, res) {
    const allowedURL = process.env.ALLOWED_URL;
    const requestOrigin = req.headers.referer || req.headers.origin;

    if (requestOrigin && requestOrigin.startsWith(allowedURL)) {
        res.status(200).send('Access Granted');
    } else {
        res.status(403).send('Access Denied: Unauthorized Request Origin');
    }
}
