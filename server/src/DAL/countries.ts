import { UpdateCountryPayload } from '../consts/interfaces/countries';
import { Countries } from '../models/Countries';

export const getCountries = async () => {
    return await Countries.find();
};

export const getCountryById = async (id: string) => {
    return await Countries.findById(id);
};

export const updateCountry = async (id: string, data: UpdateCountryPayload) => {
    return await Countries.findByIdAndUpdate(
        id,
        { ...data },
        { new: true, runValidators: true },
    );
};
