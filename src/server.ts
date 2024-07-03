import express from 'express';
import { config } from './config/parseEnv';
import { connectDB } from './config/db';
import morgan from 'morgan';
import { errorHandler } from './middleware/error';
import { countriesRouter } from './routes/countries';
import { BASE_URL, URLS } from './consts/consts';
import swaggerJsDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import cors from 'cors';

const { port, host, mode } = config.serverConfig;
const swaggerDocs = swaggerJsDoc(config.serverConfig.swaggerOptions);
const app = express();

app.use(express.json({ limit: '25mb' }));
app.use(cors());

if (mode === 'development') {
    app.use(morgan('dev'));
}
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.use(`${BASE_URL}${URLS.countries}`, countriesRouter);

app.use(errorHandler);
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
