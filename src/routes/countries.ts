import { Router } from 'express';
import {
    getCountries,
    getCountryByName,
    updateCountry,
} from '../controllers/countries';

const countriesRouter = Router();

countriesRouter.route('/').get(getCountries);
countriesRouter.route('/:name').get(getCountryByName).put(updateCountry);

export { countriesRouter };
