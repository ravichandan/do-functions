// do-functions/src/index.ts
import { createServer, IncomingMessage, ServerResponse } from 'http';
import { parse } from 'url';
import express from 'express';

const app = express();

app.get('/', (req, res) => {
    res.send('Hello, DigitalOcean Functions with TypeScript!');
});

const server = createServer((req: IncomingMessage, res: ServerResponse) => {
    const parsedUrl = parse(req.url || '', true);
    (req as any).query = parsedUrl.query;
    app(req as any, res as any);
});

export default server;
