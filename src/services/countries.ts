import { StatusCodes } from 'http-status-codes';
import * as countriesDal from '../DAL/countries';
import { UpdateCountryPayload } from '../consts/interfaces/countries';
import { ErrorResponse } from '../utils/errorResponse';

const getCountries = async () => {
    const countries = await countriesDal.getCountries();
    return countries;
};

const getCountryById = async (id: string) => {
    const country = await countriesDal.getCountryById(id);

    if (!country) {
        throw new ErrorResponse(
            `Country not found with id of ${id}`,
            StatusCodes.NOT_FOUND,
        );
    }

    return country;
};

const updateCountry = async (id: string, data: UpdateCountryPayload) => {
    const updatedCountry = await countriesDal.updateCountry(id, data);

    if (!updatedCountry) {
        throw new ErrorResponse(
            `Country not found with id of ${id}`,
            StatusCodes.NOT_FOUND,
        );
    }

    return updatedCountry;
};

export default {
    getCountries,
    getCountryById,
    updateCountry,
};
