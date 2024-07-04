import mongoose from 'mongoose';
import { config } from '../config/parseEnv';

export const connectDB = async () => {
    const mongooseInstance = await mongoose.connect(
        config.serverConfig.db.mongodb_uri,
    );

    if (mongooseInstance.connection.readyState !== 1) {
        throw Error('Cannot connect to db');
    }

    console.info('DB connected');
    return mongooseInstance;
};
