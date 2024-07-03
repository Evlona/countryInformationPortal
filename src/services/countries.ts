import * as countriesDal from '../DAL/countries';

export const getCountries = async () => {
    const countries = await countriesDal.getCountries();
    return countries;
};

export const getCountryByName = async (name: string) => {
    const country = await countriesDal.getCountryByName(name);
    return country;
};

export const updateCountry = async (
    name: string,
    data: { population?: number; capital?: [string] },
) => {
    const updatedCountry = await countriesDal.updateCountry(name, data);
    return updatedCountry;
};
