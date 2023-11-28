import path from 'path';
import fs from 'fs/promises';

const COMMENTS_FILE = path.join(process.cwd(), 'public', 'data', 'comments.json');

export async function GET() {
    try {
        const commentsData = await fs.readFile(COMMENTS_FILE, 'utf8');
        const comments = JSON.parse(commentsData);

        return Response.json({ success: true, data: comments });
    } catch (error) {
        return Response.json({ success: false, error: error.message });
    }
}

export async function POST(req) {
    try {
        const body = await req.json();
        const commentsData = await fs.readFile(COMMENTS_FILE, 'utf8');
        const comments = JSON.parse(commentsData);
        const updatedComments = [body, ...comments];
        await fs.writeFile(COMMENTS_FILE, JSON.stringify(updatedComments));

        return Response.json({ success: true, data: body });
    } catch (error) {
        return Response.json({ success: false, error: error.message });
    }
}
