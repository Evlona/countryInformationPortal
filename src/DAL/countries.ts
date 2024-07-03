import { Countries } from '../models/Conuntries';

export const getCountries = async () => {
    return await Countries.find();
};

export const getCountryByName = async (name: string) => {
    return await Countries.findOne({ name });
};

export const updateCountry = async (
    name: string,
    data: { population?: number; capital?: [string] },
) => {
    return await Countries.findOneAndUpdate(
        { name },
        { ...data },
        { new: true, runValidators: true },
    );
};
