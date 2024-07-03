import { Schema, model } from 'mongoose';

const countriesSchema = new Schema({
    name: {
        type: String,
        required: [true, 'name is required'],
        unique: true,
        trim: true,
        maxLength: [50, 'name maximum length exceed'],
    },
    capital: {
        type: [String],
        required: [true, 'capital is required'],
        trim: true,
        maxLength: [500, 'capital maximum length exceed'],
    },
    region: {
        type: String,
        required: [true, 'region is required'],
        trim: true,
        maxLength: [50, 'region maximum length exceed'],
    },
    subRegion: {
        type: String,
        required: [true, 'subRegion is required'],
        trim: true,
        maxLength: [50, 'subRegion maximum length exceed'],
    },
    population: {
        type: Number,
        min: [1, 'population must bigger or equal to 1'],
        required: [true, 'population is required'],
    },
    timezones: {
        type: [String],
        required: [true, 'timezones is required'],
        trim: true,
        maxLength: [500, 'timezones maximum length exceed'],
    },
    continents: {
        type: [String],
        required: [true, 'continents is required'],
        maxLength: [100, 'continents maximum length exceed'],
    },
    flags: {
        type: Object,
        png: {
            type: String,
            required: [true, 'png is required'],
            trim: true,
            match: [
                /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/,
                'Please use a valid URL with HTTP or HTTPS',
            ],
            maxLength: [500, 'png maximum length exceed'],
        },
        svg: {
            type: String,
            required: [true, 'svg is required'],
            trim: true,
            match: [
                /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/,
                'Please use a valid URL with HTTP or HTTPS',
            ],
            maxLength: [500, 'svg maximum length exceed'],
        },
    },
});

const Countries = model('Countries', countriesSchema);
export { Countries };
