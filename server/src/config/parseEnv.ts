export const config = {
    serverConfig: {
        host: process.env.HOST || '127.0.0.1',
        port: process.env.PORT || 8080,
        mode: process.env.NODE_ENV,
        db: {
            mongodb_uri: process.env.MONGODB_URI || '',
        },
        swaggerOptions: {
            swaggerDefinition: {
                openapi: '3.0.0',
                info: {
                    title: 'Country Information Portal',
                    description: 'Country API Information',
                    version: 'v1',
                },
                servers: [
                    {
                        url: `http://${process.env.HOST || '127.0.0.1'}:${process.env.PORT || 8080}/api/v1`,
                    },
                ],
            },
            apis: [`${__dirname}/routes/*.ts`, './dist/routes/*.js'],
        },
    },
};
