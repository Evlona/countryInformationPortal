import express from 'express';
import { config } from './config/parseEnv';
import { connectDB } from './config/db';
import morgan from 'morgan';

const { port, host, mode } = config.serverConfig;
const app = express();

app.use(express.json({ limit: '25mb' }));

if (mode === 'development') {
    app.use(morgan('dev'));
}

const server = app.listen(port, async () => {
    await connectDB();
    console.info(
        `Server is now listening on http://${host}:${port} in ${mode} mode`,
    );
});

server.on('unhandledRejection', (err: Error) => {
    console.info(`Error: ${err.message}`);
    server.close(() => process.exit(1));
});
