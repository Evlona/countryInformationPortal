const { MongoClient } = require('mongodb');

const getJson = async () => {
    const response = await fetch('https://restcountries.com/v3.1/all');
    return await response.json();
};

const parseJsonData = (json) => {
    return json.map((en) => {
        return {
            name: en['name']['common'],
            region: en['region'],
            subRegion: en['subregion'],
            population: en['population'],
            timezones: en['timezones'],
            continents: en['continents'],
            flags: en['flags'],
            capital: en['capital'],
        };
    });
};

const connectDB = async () => {
    const client = new MongoClient(process.env.MONGODB_URI);
    await client.connect();
    return client;
};

const seedDB = async (data, client) => {
    const collection = client.db('countries').collection('countries');
    collection.drop();
    await collection.insertMany(data);
    client.close();
};

(async () => {
    try {
        if (!process.env.MONGODB_URI) {
            throw Error(
                'Most load env or provide MONGODB_URI file example: node --env-file=.env seed.js ',
            );
        }
        const json = await getJson();
        const data = await parseJsonData(json);
        const client = await connectDB();
        await seedDB(data, client);
        console.info('Database seeded');
    } catch (err) {
        console.error(err.message);
    }
})();
