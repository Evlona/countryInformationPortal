import { Router } from 'express';
import {
    getCountries,
    getCountryByName,
    updateCountry,
} from '../controllers/countries';

const countriesRouter = Router();

/**
 * @swagger
 * /countries:
 *   get:
 *     summary: returns list of countries.
 *     description: get all countries.
 *     responses:
 *       '200':
 *         description: A successful response
 *       '500':
 *         description: Internal server error
 */
countriesRouter.route('/').get(getCountries);

/**
 * @swagger
 * /countries/{n1}:
 *  get:
 *      summary: return country by name.
 *      description: get country.
 *      parameters:
 *       - in: path
 *         name: name
 *         schema:
 *           type: string
 *         required: true
 *      responses:
 *          '200':
 *              description: A successful response
 *          '404':
 *              description: not found
 *          '500':
 *              description: Internal server error
 *
 * /countries/{n2}:
 *  put:
 *      summary: update country by name.
 *      description: update country.
 *      parameters:
 *       - in: path
 *         name: name
 *         schema:
 *           type: string
 *         required: true
 *      requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                population:
 *                  type: number
 *                capital:
 *                  type: array
 *                  items:
 *                    type: string
 *      responses:
 *          '200':
 *              description: A successful response
 *          '404':
 *              description: not found
 *          '500':
 *              description: Internal server error
 */
countriesRouter.route('/:name').get(getCountryByName).put(updateCountry);

export { countriesRouter };
