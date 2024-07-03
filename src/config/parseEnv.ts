export const config = {
    serverConfig: {
        host: process.env.HOST || '127.0.0.1',
        port: process.env.PORT || 8080,
        mode: process.env.NODE_ENV,
        db: {
            mongodb_uri: process.env.MONGODB_URI || '',
        },
    },
};
