import mongoose from 'mongoose';
import { config } from './parseEnv';

export const connectDB = async () => {
    const conn = await mongoose.connect(config.serverConfig.db.mongodb_uri);
    const connection = conn.connection;
    if (connection.readyState !== 1) {
        throw Error('Cannot connect to db');
    }

    console.info('DB connected');
    return conn;
};
